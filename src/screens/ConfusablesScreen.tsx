import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';
import { findConfusables, diffMask, perguntasConfusas, type ConfusablePair, type PerguntaConfusa } from '@/services/confusaveis';
import { CONFUSAVEIS_PT, type GrupoConfuso } from '@/data/confusaveis-pt';
import { logMistake } from '@/services/mistakes';
import { shuffle } from '@/services/answers';
import { awardXp } from '@/database/queries';
import * as haptics from '@/services/haptics';
import type { VocabSeed } from '@/data/types';
import { goBack } from '@/services/nav';
import { nomeIdioma } from '@/services/idioma-nome';
import { useIsDark } from '@/services/theme';
import { WordImage } from '@/components/WordImage';

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
        <WordImage wordNative={w.word_native} emoji={w.emoji} size={40} pos={w.part_of_speech} target={w.word_target} />
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

const PT = 'pt-BR';
const RODADA = 8;
const XP_POR_ACERTO = 2;

function GrupoCard({ g }: { g: GrupoConfuso }) {
  return (
    <Card className="gap-3">
      {g.palavras.map((p) => (
        <View key={p.palavra} className="gap-0.5">
          <View className="flex-row items-center gap-2">
            <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{p.palavra}</Text>
            <SpeakButton text={p.palavra} locale={PT} size={16} />
          </View>
          <Text className="text-sm text-slate-700 dark:text-slate-300">{p.sentido}</Text>
          <Text className="text-sm italic text-slate-500 dark:text-slate-400">{p.exemplo}</Text>
        </View>
      ))}
      {g.dica ? <Text className="text-sm font-semibold text-conecta dark:text-blue-400">💡 {g.dica}</Text> : null}
    </Card>
  );
}

/** Rodada de lacunas com as frases de exemplo: qual das palavras parecidas completa a frase? */
function TreinoPortugues({ onFim }: { onFim: () => void }) {
  const { db, pack, refresh } = useApp();
  const perguntas = useMemo<PerguntaConfusa[]>(
    () =>
      shuffle(perguntasConfusas(CONFUSAVEIS_PT))
        .slice(0, RODADA)
        .map((q) => ({ ...q, opcoes: shuffle(q.opcoes) })),
    [],
  );
  const [k, setK] = useState(0);
  const [escolha, setEscolha] = useState<string | null>(null);
  const [acertos, setAcertos] = useState(0);
  if (k >= perguntas.length)
    return (
      <Card className="gap-2">
        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
          {acertos}/{perguntas.length} acertos {acertos === perguntas.length ? '🎉' : ''}
        </Text>
        <Button title="Voltar à lista" variant="ghost" onPress={onFim} />
      </Card>
    );
  const q = perguntas[k];
  const sentido = (palavra: string) => CONFUSAVEIS_PT.find((g) => g.id === q.grupo)?.palavras.find((p) => p.palavra === palavra)?.sentido ?? '';
  return (
    <Card className="gap-2">
      <Chip label={`${k + 1}/${perguntas.length}`} />
      <Text className="text-sm text-slate-600 dark:text-slate-400">Qual palavra completa a frase?</Text>
      <Text className="text-xl font-bold text-slate-900 dark:text-white">{escolha ? q.frase : q.lacuna}</Text>
      {q.opcoes.map((o) => {
        const feito = escolha !== null;
        const tom =
          feito && o === q.certa
            ? 'border-conquista bg-green-50 dark:bg-green-950'
            : feito && o === escolha
              ? 'border-rose-400 bg-rose-50 dark:bg-rose-950'
              : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900';
        return (
          <Pressable
            key={o}
            accessibilityRole="button"
            accessibilityLabel={`Opção: ${o}`}
            disabled={feito}
            onPress={async () => {
              setEscolha(o);
              if (o === q.certa) {
                haptics.success();
                setAcertos((n) => n + 1);
                await awardXp(db, XP_POR_ACERTO, 'confunda');
                refresh();
              } else {
                haptics.error();
                logMistake(db, {
                  language: pack.code,
                  source: 'confunda',
                  key: `pt:${q.grupo}:${q.certa}`,
                  prompt: `Em português: ${q.lacuna}`,
                  expected: q.certa,
                  given: o,
                  note: `${q.certa}: ${sentido(q.certa)}. ${o}: ${sentido(o)}.`,
                  speak: null,
                  options: q.opcoes,
                });
              }
            }}
            className={`rounded-xl border-2 px-3 py-2.5 ${tom}`}
          >
            <Text className="text-base font-semibold text-slate-900 dark:text-white">{o}</Text>
          </Pressable>
        );
      })}
      {escolha !== null && (
        <>
          <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
            {escolha === q.certa ? 'Isso!' : `Era “${q.certa}”.`} {q.certa}: {sentido(q.certa)}.
          </Text>
          <Button
            title="Continuar"
            onPress={() => {
              setK(k + 1);
              setEscolha(null);
            }}
          />
        </>
      )}
    </Card>
  );
}

function BlocoPortugues() {
  const [treino, setTreino] = useState(false);
  return (
    <>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} />
        <SpeechBubble className="mb-5">
          Agora no português: palavras parecidas na escrita ou no som, com sentidos diferentes. Treine com frases de verdade.
        </SpeechBubble>
      </View>
      <View className="mt-1 gap-3">
        {treino ? <TreinoPortugues onFim={() => setTreino(false)} /> : <Button title={`🎯 Treinar (${RODADA} frases)`} onPress={() => setTreino(true)} />}
        {!treino && CONFUSAVEIS_PT.map((g) => <GrupoCard key={g.id} g={g} />)}
      </View>
    </>
  );
}

/**
 * Palavras do idioma estudado parecidas na escrita, mas de sentido diferente (tipo «mãe», «manhã»
 * e «manha» em português) — calculado na hora a partir do vocabulário, sem precisar de conteúdo
 * próprio por idioma. Ajuda a não trocar uma pela outra numa leitura rápida. A aba «Em português»
 * traz as confusões do próprio português, num bloco à parte (pedido do dono do app: nunca misturar
 * as duas línguas no mesmo exercício).
 */
export default function ConfusablesScreen() {
  const { pack } = useApp();
  const dark = useIsDark();
  const { aba } = useLocalSearchParams<{ aba?: string }>();
  const [lingua, setLingua] = useState<'idioma' | 'pt'>(aba === 'pt' ? 'pt' : 'idioma');
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
      <View className="mt-3 flex-row gap-2" accessibilityRole="tablist">
        {(
          [
            ['idioma', `Em ${nomeIdioma(pack.name)}`],
            ['pt', 'Em português'],
          ] as const
        ).map(([id, rotulo]) => (
          <Pressable
            key={id}
            accessibilityRole="tab"
            accessibilityState={{ selected: lingua === id }}
            onPress={() => setLingua(id)}
            className={`flex-1 items-center rounded-full border-2 px-3 py-2 ${lingua === id ? 'border-conecta bg-sky-50 dark:bg-sky-950' : 'border-slate-200 dark:border-slate-700'}`}
          >
            <Text className={`font-bold ${lingua === id ? 'text-conecta dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>{rotulo}</Text>
          </Pressable>
        ))}
      </View>
      {lingua === 'pt' ? (
        <BlocoPortugues />
      ) : (
        <>
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
        </>
      )}
    </Screen>
  );
}
