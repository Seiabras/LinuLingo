import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';
import { findConfusables, diffMask, type ConfusablePair } from '@/services/confusaveis';
import type { VocabSeed } from '@/data/types';
import { goBack } from '@/services/nav';
import { nomeIdioma } from '@/services/idioma-nome';
import { useIsDark } from '@/services/theme';
import { hasWordImage, WordImage } from '@/components/WordImage';

/** Mostra as letras que diferem em negrito (o resto, normal) — o que pega o olho na confusão. */
function Highlighted({ word, mask }: { word: string; mask: boolean[] }) {
  const { pack } = useApp();
  return (
    <Text style={targetTextStyle(pack)} className="text-2xl font-bold text-slate-900 dark:text-white">
      {[...word].map((ch, i) => (
        <Text key={i} className={mask[i] ? 'text-fogo underline' : ''}>
          {ch}
        </Text>
      ))}
    </Text>
  );
}

function WordRow({ w, mask, locale }: { w: VocabSeed; mask: boolean[]; locale: string }) {
  return (
    <View className="flex-row items-center gap-3">
      <View className="w-11 items-center">
        {hasWordImage(w.word_native, { pos: w.part_of_speech, target: w.word_target }) ? (
          <WordImage wordNative={w.word_native} size={40} pos={w.part_of_speech} target={w.word_target} />
        ) : (
          <Text className="text-3xl">{w.emoji ?? '❔'}</Text>
        )}
      </View>
      <View className="flex-1">
        <View className="flex-row items-center gap-2">
          <Highlighted word={w.word_target} mask={mask} />
          <SpeakButton text={w.word_target} locale={locale} size={16} />
        </View>
        <Text className="text-sm text-slate-600 dark:text-slate-400">{w.word_native}</Text>
      </View>
    </View>
  );
}

function PairCard({ pair, locale }: { pair: ConfusablePair; locale: string }) {
  return (
    <Card className="gap-3">
      <WordRow w={pair.a} mask={diffMask(pair.a.word_target, pair.b.word_target)} locale={locale} />
      <WordRow w={pair.b} mask={diffMask(pair.b.word_target, pair.a.word_target)} locale={locale} />
    </Card>
  );
}

/**
 * Palavras do idioma estudado parecidas na escrita, mas de sentido diferente (tipo «mãe», «manhã»
 * e «manha» em português) — calculado na hora a partir do vocabulário, sem precisar de conteúdo
 * próprio por idioma. Ajuda a não trocar uma pela outra numa leitura rápida.
 */
export default function ConfusablesScreen() {
  const { pack } = useApp();
  const dark = useIsDark();
  const [found, setFound] = useState<{ code: string; pairs: ConfusablePair[] } | null>(null);

  useEffect(() => {
    let alive = true;
    const t = setTimeout(() => {
      const pairs = findConfusables(pack.vocab);
      if (alive) setFound({ code: pack.code, pairs });
    }, 0);
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, [pack]);
  const pairs = found?.code === pack.code ? found.pairs : null;

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">⚠️ Não confunda</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} />
        <SpeechBubble className="mb-5">
          {`Palavras de ${nomeIdioma(pack.name)} parecidas na escrita, mas com sentidos bem diferentes. A parte em vermelho é o que muda de uma pra outra.`}
        </SpeechBubble>
      </View>
      {pairs === null && <Text className="mt-6 text-center text-slate-500 dark:text-slate-400">Procurando palavras parecidas…</Text>}
      {pairs?.length === 0 && (
        <Card className="mt-4">
          <Text className="text-center text-slate-600 dark:text-slate-400">Ainda não achei pares parecidos o bastante neste idioma.</Text>
        </Card>
      )}
      <View className="mt-3 gap-3">
        {pairs?.map((p) => (
          <PairCard key={`${p.a.id}-${p.b.id}`} pair={p} locale={pack.speechLocale} />
        ))}
      </View>
    </Screen>
  );
}
