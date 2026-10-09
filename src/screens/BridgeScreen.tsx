import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams, type Href } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { DeckSession } from '@/components/DeckSession';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta, vocabByWords } from '@/database/queries';
import { XP } from '@/services/progress';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import { cenarioDaPonte, leituraDaPonte, lerProgresso, marcarParte, palavrasDaPonte, partesFeitas, PONTE_BONUS_XP, PONTES, pontesKey, type PonteParte, type ProgressoPontes } from '@/services/pontes';
import type { VocabWithSRS } from '@/types';
import { Loading } from './SprintScreen';

/**
 * Uma ponte eletiva (a partir do B1.1): três partes opcionais sobre um tema — palavras do tema num
 * baralho com gestos, a conversa do tema e uma leitura do B1. Ver `src/services/pontes.ts`.
 */
export default function BridgeScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const ponte = PONTES.find((p) => p.id === id) ?? null;
  const key = pontesKey(pack.code);
  const [progresso, setProgresso] = useState<ProgressoPontes>({});
  const [deck, setDeck] = useState<VocabWithSRS[] | null>(null);
  const [baralho, setBaralho] = useState(false);
  const [premio, setPremio] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgresso(lerProgresso(v)));
    }, [db, key]),
  );

  const palavras = useMemo(() => (ponte ? palavrasDaPonte(pack, ponte) : []), [pack, ponte]);
  const cenario = ponte ? cenarioDaPonte(pack, ponte) : null;
  const leitura = ponte ? leituraDaPonte(pack, ponte) : null;

  if (!ponte) {
    return (
      <Screen>
        <Text className="py-20 text-center text-slate-500 dark:text-slate-400">Ponte não encontrada.</Text>
      </Screen>
    );
  }

  const marcar = async (parte: PonteParte) => {
    const atual = lerProgresso(await getMeta(db, key));
    const r = marcarParte(atual, ponte.id, parte);
    await setMeta(db, key, JSON.stringify(r.progresso));
    setProgresso(r.progresso);
    if (r.terminouAgora) {
      await awardXp(db, PONTE_BONUS_XP, `ponte:${ponte.id}`);
      setPremio(true);
      refresh();
    }
  };

  if (baralho) {
    if (!deck) return <Loading />;
    return (
      <DeckSession
        title={`${ponte.emoji} ${ponte.titulo}`}
        deck={deck}
        xpPerCard={XP.reviewPerCard}
        source={`ponte:${ponte.id}`}
        onFinish={(n) => {
          if (n > 0) marcar('palavras');
          setBaralho(false);
        }}
      />
    );
  }

  const feito = progresso[ponte.id] ?? {};
  const n = partesFeitas(progresso, ponte.id);
  const partes: { id: PonteParte; emoji: string; titulo: string; texto: string; disponivel: boolean; abrir: () => void }[] = [
    {
      id: 'palavras',
      emoji: '🗂️',
      titulo: `${palavras.length} palavras do tema`,
      texto: palavras.slice(0, 5).map((v) => v.word_target).join(' · ') + '…',
      disponivel: palavras.length > 0,
      abrir: () => {
        setDeck(null);
        setBaralho(true);
        vocabByWords(db, pack.code, palavras.map((v) => v.word_target)).then(setDeck);
      },
    },
    {
      id: 'conversa',
      emoji: '💬',
      titulo: cenario ? `Conversa: ${cenario.title}` : 'Conversa do tema',
      texto: cenario ? (cenario.register === 'formal' ? 'Registro formal' : 'Registro informal') : 'Este idioma ainda não tem uma conversa deste tema.',
      disponivel: !!cenario,
      abrir: () => {
        marcar('conversa');
        router.push(`/cenario/${cenario!.id}`);
      },
    },
    {
      id: 'leitura',
      emoji: leitura?.emoji ?? '📖',
      titulo: leitura ? `Leitura: ${leitura.titulo}` : 'Leitura do tema',
      texto: leitura ? 'Um texto do nível B1 para ler com calma.' : 'Ainda sem leitura neste idioma.',
      disponivel: !!leitura,
      abrir: () => {
        marcar('leitura');
        router.push(leitura!.rota as Href);
      },
    },
  ];

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">
          {ponte.emoji} {ponte.titulo}
        </Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood={premio ? 'comemorando' : 'falando'} size={64} />
        <SpeechBubble className="mb-5">
          {premio
            ? `Ponte atravessada! +${PONTE_BONUS_XP} XP de bônus. 🎉`
            : `Uma ponte eletiva: é um desvio opcional da trilha, para variar o ${nomeIdioma(pack.name)} do platô intermediário. ${ponte.texto}`}
        </SpeechBubble>
      </View>
      <Text className="text-xs font-bold text-slate-500 dark:text-slate-400">{n}/3 partes · as três dão +{PONTE_BONUS_XP} XP</Text>
      <ProgressBar value={n / 3} className="mt-2" />
      <View className="mt-4 gap-3">
        {partes.map((p) => (
          <Pressable
            key={p.id}
            accessibilityRole="button"
            disabled={!p.disponivel}
            onPress={p.abrir}
            className={`flex-row items-center gap-3 rounded-2xl border-2 p-4 active:opacity-80 ${
              feito[p.id] ? 'border-conquista/60 bg-green-50 dark:bg-green-950' : p.disponivel ? 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900' : 'border-dashed border-slate-300 opacity-60 dark:border-slate-600'
            }`}
          >
            <Text className="text-3xl">{feito[p.id] ? '✅' : p.emoji}</Text>
            <View className="flex-1">
              <Text className="font-extrabold text-slate-900 dark:text-white">{p.titulo}</Text>
              <Text className="text-xs text-slate-600 dark:text-slate-300">{p.texto}</Text>
            </View>
          </Pressable>
        ))}
      </View>
      {premio && (
        <Card className="mt-4">
          <Button title="Voltar para a trilha" variant="success" onPress={() => router.navigate('/')} />
        </Card>
      )}
    </Screen>
  );
}
