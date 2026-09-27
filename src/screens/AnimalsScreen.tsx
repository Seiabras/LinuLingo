import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { BICHOS_PT } from '@/data/bichos-pt';
import { buildAnimalRound, recordAnimal, splitVerb, type AnimalProgress, type AnimalQuestion } from '@/services/animals';
import { logMistake } from '@/services/mistakes';
import { speak } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';

const ROUND = 10;

/**
 * Como os bichos «falam» no idioma: a onomatopeia (ham-ham, гав-гав) comparada com a do português
 * e o verbo de cada som (Câinele latră). Depois, um jogo de 10 perguntas.
 */
export default function AnimalsScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const list = pack.animalSounds ?? [];
  const key = `bichos_prog_${pack.code}`;
  const locale = pack.speechLocale;
  const [progress, setProgress] = useState<AnimalProgress>({});
  const [game, setGame] = useState<{ qs: AnimalQuestion[]; i: number; hits: number; answer: string | null } | null>(null);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as AnimalProgress) : {}));
    }, [db, key]),
  );

  if (!list.length) {
    return (
      <Screen>
        <Text className="pt-6 text-slate-600 dark:text-slate-400">Este idioma ainda não tem os sons dos bichos.</Text>
      </Screen>
    );
  }

  const byId = new Map(list.map((a) => [a.id, a]));
  const known = list.filter((a) => (progress[a.id] ?? 0) >= 2).length;
  const start = () => setGame({ qs: buildAnimalRound(list, progress, ROUND), i: 0, hits: 0, answer: null });
  const label = (q: AnimalQuestion, o: string) => (q.kind === 'que-bicho' ? `${byId.get(o)?.emoji} ${byId.get(o)?.animal}` : o);
  const promptOf = (q: AnimalQuestion) =>
    q.kind === 'que-bicho'
      ? `Que bicho faz «${q.a.sound}» em ${nomeIdioma(pack.name)}?`
      : q.kind === 'como-faz'
        ? `Como faz ${BICHOS_PT[q.a.id] ? `${BICHOS_PT[q.a.id].art} ${BICHOS_PT[q.a.id].name}` : q.a.animal} em ${nomeIdioma(pack.name)}?`
        : `Complete: ${q.blank}`;

  const answer = async (opt: string) => {
    if (!game || game.answer) return;
    const q = game.qs[game.i];
    const ok = opt === q.answer;
    if (ok) haptics.success();
    else haptics.error();
    speak(q.kind === 'verbo' ? q.a.verb : q.a.sound, locale);
    const next = recordAnimal(progress, q, ok);
    if (!ok)
      logMistake(db, {
        language: pack.code,
        source: 'bichos',
        key: `${q.kind}:${q.a.id}`,
        prompt: promptOf(q),
        expected: label(q, q.answer),
        given: label(q, opt),
        note: `${q.a.emoji} ${q.a.animal}: «${q.a.sound}» · ${q.a.verb} (${q.a.translation})`,
        speak: q.kind === 'verbo' ? q.a.verb : q.a.sound,
        options: q.options.map((o) => label(q, o)),
      });
    setProgress(next);
    setGame({ ...game, answer: opt, hits: game.hits + (ok ? 1 : 0) });
    await setMeta(db, key, JSON.stringify(next));
  };
  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'bichos');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };

  if (game) {
    const finished = game.i >= game.qs.length;
    const q = game.qs[game.i];
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Sair do treino" onPress={() => setGame(null)} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <ProgressBar value={Math.min(1, game.i / game.qs.length)} className="flex-1" />
          <Chip label={finished ? 'fim' : `${game.i + 1}/${game.qs.length}`} />
        </View>
        {finished ? (
          <Card className="mt-6 items-center gap-3">
            <Linu mood={game.hits >= game.qs.length * 0.7 ? 'comemorando' : 'feliz'} size={100} />
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {game.hits}/{game.qs.length} acertos
            </Text>
            <Chip label={`+${game.hits + (game.hits === game.qs.length ? 5 : 0)} XP`} tone="amber" />
            <Button title="Outra rodada" className="w-full" onPress={start} />
            <Button title="Voltar aos bichos" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-2 py-6">
              <Text className="text-6xl">{q.kind === 'que-bicho' ? '❓' : q.a.emoji}</Text>
              <Text className="text-center text-2xl font-extrabold text-slate-900 dark:text-white">{promptOf(q)}</Text>
              {q.kind === 'que-bicho' && <SpeakButton text={q.a.sound} locale={locale} />}
            </Card>
            <View className="gap-2">
              {q.options.map((o) => {
                const right = game.answer && o === q.answer;
                const wrong = game.answer === o && o !== q.answer;
                return (
                  <Pressable
                    key={o}
                    accessibilityRole="button"
                    accessibilityLabel={`Opção ${label(q, o)}`}
                    onPress={() => answer(o)}
                    className={`rounded-2xl border-2 p-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.answer && !right && !wrong ? 'opacity-50' : ''}`}
                  >
                    <Text className="text-center text-xl font-bold text-slate-900 dark:text-white">{label(q, o)}</Text>
                  </Pressable>
                );
              })}
            </View>
            {game.answer && (
              <Card className="gap-2">
                <Text className={`text-lg font-extrabold ${game.answer === q.answer ? 'text-conquista' : 'text-rose-600'}`}>
                  {game.answer === q.answer
                    ? 'Isso!'
                    : q.kind === 'como-faz' && game.answer === q.trap
                      ? `Esse é o som em português! Em ${nomeIdioma(pack.name)} é «${q.answer}».`
                      : `Era «${label(q, q.answer)}».`}
                </Text>
                <View className="flex-row items-center gap-2">
                  <SpeakButton text={q.a.verb} locale={locale} />
                  <Text className="flex-1 text-base font-bold text-slate-900 dark:text-white">
                    {q.a.emoji} {q.a.verb}
                  </Text>
                </View>
                <Text className="text-sm text-slate-600 dark:text-slate-400">{q.a.translation}</Text>
                <Button title={game.i + 1 >= game.qs.length ? 'Ver resultado' : 'Continuar'} variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🐶 Como faz o bicho?</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">{`Em ${nomeIdioma(pack.name)}, o cachorro não faz «au-au»! Cada língua escuta os bichos do seu jeito. E o verbo de cada som é vocabulário que aparece em livros e conversas.`}</SpeechBubble>
      </View>
      <ProgressBar value={known / list.length} />
      <Text className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        Você já sabe {known} de {list.length}.
      </Text>
      <Button title={`🎯 Treinar (${ROUND} perguntas)`} variant="success" className="mt-3" onPress={start} />
      <View className="mt-4 gap-2">
        {list.map((a) => {
          const pt = BICHOS_PT[a.id];
          const [blank, verb] = splitVerb(a.verb);
          const [before, after] = blank.split('___');
          return (
            <Card key={a.id} className="gap-1.5">
              <View className="flex-row items-center gap-3">
                <Text className="text-4xl">{a.emoji}</Text>
                <View className="flex-1 gap-0.5">
                  <View className="flex-row flex-wrap items-center gap-2">
                    <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{a.animal}</Text>
                    <Text className="text-sm text-slate-500 dark:text-slate-400">({pt?.name})</Text>
                  </View>
                  <Pressable accessibilityRole="button" accessibilityLabel={`Ouvir: ${a.sound}`} onPress={() => speak(a.sound, locale)} className="flex-row items-center gap-2 self-start">
                    <Text className="text-xl font-extrabold text-conecta">«{a.sound}»</Text>
                    {pt && <Text className="text-sm text-slate-500 dark:text-slate-400">em português: {pt.sound}</Text>}
                  </Pressable>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <SpeakButton text={a.verb} locale={locale} size={16} />
                <Text className="flex-1 text-base text-slate-800 dark:text-slate-200">
                  {before}
                  <Text className="font-extrabold">{verb}</Text>
                  {after}
                </Text>
              </View>
              <Text className="text-sm text-slate-500 dark:text-slate-400">
                {a.translation} ({pt?.verb})
              </Text>
            </Card>
          );
        })}
      </View>
      <Text className="mt-3 text-xs text-slate-400">A voz do aparelho lê as onomatopeias como se fossem palavras: vale pelo jeito de escrever e de falar de cada língua.</Text>
    </Screen>
  );
}
