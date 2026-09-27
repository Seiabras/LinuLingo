import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft, Volume2 } from 'lucide-react-native';
import { Screen, Button, Card, Chip, ProgressBar, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { buildPairRound, contrastAccuracy, playablePairs, recordPair, type PairProgress, type PairQuestion, type PairSource } from '@/services/minimal-pairs';
import { hasNativeClip, speak } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import type { MinimalPair } from '@/data/types';
import { logMistake } from '@/services/mistakes';

const ROUND = 10;

/**
 * Pares mínimos: palavras que só mudam por um som (pero × perro). Toca uma das duas e você diz qual
 * ouviu; os contrastes em que você erra voltam mais. Cada par toca nas gravações de nativos só se
 * as duas palavras tiverem gravação — senão as duas na voz do aparelho, para a voz não entregar.
 */
export default function MinimalPairsScreen() {
  const { db, pack, variant, refresh } = useApp();
  const dark = useIsDark();
  const mp = pack.minimalPairs;
  const locale = pack.speechLocale;
  const { pairs, same } = useMemo(
    () => (mp ? playablePairs(mp, pack.ipa, (w) => hasNativeClip(w, locale)) : { pairs: [], same: [] }),
    [mp, pack.ipa, locale],
  );
  const key = `pares_prog_${pack.code}`;
  const [progress, setProgress] = useState<PairProgress>({});
  const [game, setGame] = useState<{ qs: PairQuestion[]; i: number; hits: number; answer: 'a' | 'b' | null } | null>(null);
  const [mute, setMute] = useState(false);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as PairProgress) : {}));
    }, [db, key]),
  );

  const say = useCallback(
    (word: string, source: PairSource, rate = 0.9) => {
      speak(word, locale, { rate, native: source === 'nativo' }).then((r) => setMute(r === 'sem-voz'));
    },
    [locale],
  );

  const cur = game && game.i < game.qs.length ? game.qs[game.i] : null;
  const answered = !!game?.answer;
  // cada pergunta toca sozinha ao aparecer
  useEffect(() => {
    if (!cur || answered) return;
    speak(cur.pair[cur.target][0], locale, { rate: 0.9, native: cur.pair.source === 'nativo' }).then((r) => setMute(r === 'sem-voz'));
  }, [cur, answered, locale]);

  if (!mp) {
    return (
      <Screen>
        <Text className="pt-6 text-slate-600 dark:text-slate-400">Este idioma ainda não tem pares mínimos.</Text>
      </Screen>
    );
  }

  const start = () => setGame({ qs: buildPairRound(pairs, progress, ROUND), i: 0, hits: 0, answer: null });
  const answer = async (pick: 'a' | 'b') => {
    if (!game || !cur || game.answer) return;
    const ok = pick === cur.target;
    if (ok) haptics.success();
    else haptics.error();
    const next = recordPair(progress, cur.pair.contrast, ok);
    if (!ok) {
      const { a, b } = cur.pair;
      logMistake(db, {
        language: pack.code,
        source: 'pares',
        key: `${a[0]}|${b[0]}`,
        prompt: `Qual você ouviu? (${mp.contrasts.find((c) => c.id === cur.pair.contrast)?.name ?? ''})`,
        expected: cur.pair[cur.target][0],
        given: cur.pair[pick][0],
        note: `${a[0]}: ${a[1]} · ${b[0]}: ${b[1]}`,
        speak: cur.pair[cur.target][0],
        byEar: true,
        options: [a[0], b[0]],
      });
    }
    setProgress(next);
    setGame({ ...game, answer: pick, hits: game.hits + (ok ? 1 : 0) });
    await setMeta(db, key, JSON.stringify(next));
  };
  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'pares');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };
  const contrastOf = (id: string) => mp.contrasts.find((c) => c.id === id)!;

  if (game) {
    const finished = game.i >= game.qs.length;
    return (
      <Screen>
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Sair do treino" onPress={() => setGame(null)} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <ProgressBar value={Math.min(1, game.i / game.qs.length)} className="flex-1" />
          <Chip label={finished ? 'fim' : `${game.i + 1}/${game.qs.length}`} />
        </View>
        {finished || !cur ? (
          <Card className="mt-6 items-center gap-3">
            <Linu mood={game.hits >= game.qs.length * 0.7 ? 'comemorando' : 'feliz'} size={100} />
            <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">
              {game.hits}/{game.qs.length} acertos
            </Text>
            <Chip label={`+${game.hits + (game.hits === game.qs.length ? 5 : 0)} XP`} tone="amber" />
            <View className="w-full gap-1">
              {mp.contrasts.map((c) => {
                const acc = contrastAccuracy(progress, c.id);
                return acc === null ? null : (
                  <Text key={c.id} className="text-sm text-slate-600 dark:text-slate-400">
                    {c.name}: {Math.round(acc * 100)}% de acerto
                  </Text>
                );
              })}
            </View>
            <Button title="Outra rodada" className="w-full" onPress={start} />
            <Button title="Voltar" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-3 py-6">
              <Text className="text-center text-sm font-bold uppercase tracking-wide text-slate-500">Qual você ouviu? · {contrastOf(cur.pair.contrast).name}</Text>
              <View className="flex-row gap-3">
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Ouvir de novo"
                  onPress={() => say(cur.pair[cur.target][0], cur.pair.source)}
                  className="h-20 w-20 items-center justify-center rounded-full bg-conecta active:opacity-80"
                >
                  <Text className="text-4xl">🔊</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Ouvir devagar"
                  onPress={() => say(cur.pair[cur.target][0], cur.pair.source, 0.65)}
                  className="h-20 w-20 items-center justify-center rounded-full bg-slate-200 active:opacity-80 dark:bg-slate-800"
                >
                  <Text className="text-4xl">🐢</Text>
                </Pressable>
              </View>
              <Text className="text-xs text-slate-400">{cur.pair.source === 'nativo' ? '🎙️ gravações de nativos' : '🔈 voz do aparelho'}</Text>
              {mute && <Text className="text-center text-sm text-rose-600">Seu aparelho não tem voz em {pack.name.toLowerCase()}. Veja em Perfil › Voz e microfone.</Text>}
            </Card>
            <View className="flex-row gap-3">
              {(['a', 'b'] as const).map((side) => {
                const [w, meaning] = cur.pair[side];
                const right = game.answer && side === cur.target;
                const wrong = game.answer === side && side !== cur.target;
                return (
                  <Pressable
                    key={side}
                    accessibilityRole="button"
                    accessibilityLabel={`Opção ${w}`}
                    onPress={() => answer(side)}
                    className={`flex-1 items-center gap-1 rounded-2xl border-2 p-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
                  >
                    <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{w}</Text>
                    <Text className="text-center text-sm text-slate-500 dark:text-slate-400">{meaning}</Text>
                  </Pressable>
                );
              })}
            </View>
            {game.answer && (
              <Card className="gap-3">
                <Text className={`text-lg font-extrabold ${game.answer === cur.target ? 'text-conquista' : 'text-rose-600'}`}>
                  {game.answer === cur.target ? 'Isso!' : `Era «${cur.pair[cur.target][0]}».`} Compare os dois:
                </Text>
                <PairRow pair={cur.pair} source={cur.pair.source} say={say} ipa={pack.ipa} />
                <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{contrastOf(cur.pair.contrast).tip}</Text>
                <Button title={game.i + 1 >= game.qs.length ? 'Ver resultado' : 'Continuar'} variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  const example = pairs[0] ?? mp.pairs[0];
  const variantName = pack.variants?.find((v) => v.code === variant)?.name;
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">👂 Pares mínimos</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">{`Pares mínimos são palavras que só mudam por um som, como «${example.a[0]}» e «${example.b[0]}». Treinar o ouvido com eles ajuda a ouvir, e depois a falar, os sons que o português não tem.`}</SpeechBubble>
      </View>
      <Button title={`🎯 Treinar (${ROUND})`} variant="success" onPress={start} disabled={!pairs.length} />

      <View className="mt-5 gap-3">
        {mp.contrasts.map((c) => {
          const list = pairs.filter((p) => p.contrast === c.id);
          const hidden = same.filter((p) => p.contrast === c.id);
          const acc = contrastAccuracy(progress, c.id);
          return (
            <Card key={c.id} className="gap-2">
              <View className="flex-row flex-wrap items-center gap-2">
                <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{c.name}</Text>
                <Chip label={`[${c.sounds[0]}] × [${c.sounds[1]}]`} tone="blue" />
                {acc !== null && <Chip label={`${Math.round(acc * 100)}% de acerto`} tone={acc >= 0.8 ? 'green' : acc >= 0.5 ? 'amber' : 'rose'} />}
              </View>
              <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{c.tip}</Text>
              {list.map((p) => (
                <PairRow key={`${p.a[0]}-${p.b[0]}`} pair={p} source={p.source} say={say} ipa={pack.ipa} />
              ))}
              {hidden.length > 0 && (
                <Text className="text-sm text-amber-700 dark:text-amber-300">
                  {`No ${variantName ? variantName.toLowerCase() : pack.name.toLowerCase()}, estes soam igual e ficam fora do treino: ${hidden.map((p) => `${p.a[0]} × ${p.b[0]}`).join(', ')}. Escolha outra variante na aba Cultura para treiná-los.`}
                </Text>
              )}
            </Card>
          );
        })}
        {mp.sameSound?.map((s) => (
          <Card key={s.words[0][0]} className="gap-2">
            <View className="flex-row flex-wrap items-center gap-2">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">Soam igual</Text>
              <Chip label="armadilha ao contrário" tone="amber" />
            </View>
            <PairRow pair={{ contrast: '', a: s.words[0], b: s.words[1] }} source={s.words.every(([w]) => hasNativeClip(w, locale)) ? 'nativo' : 'aparelho'} say={say} ipa={pack.ipa} />
            <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{s.note}</Text>
          </Card>
        ))}
      </View>
    </Screen>
  );
}

function PairRow({ pair, source, say, ipa }: { pair: MinimalPair; source: PairSource; say: (w: string, s: PairSource) => void; ipa?: (t: string) => string }) {
  const dark = useIsDark();
  return (
    <View className="flex-row gap-2">
      {(['a', 'b'] as const).map((side) => {
        const [w, meaning] = pair[side];
        return (
          <Pressable
            key={side}
            accessibilityRole="button"
            accessibilityLabel={`Ouvir: ${w}`}
            onPress={() => say(w, source)}
            className="flex-1 flex-row items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 active:opacity-70 dark:bg-slate-800"
          >
            <Volume2 size={16} color={dark ? '#93C5FD' : '#2563EB'} />
            <View className="flex-1">
              <Text className="font-bold text-slate-900 dark:text-white">{w}</Text>
              {ipa && <Text className="font-mono text-xs text-slate-500 dark:text-slate-400">{ipa(w)}</Text>}
              <Text className="text-xs text-slate-500 dark:text-slate-400">{meaning}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
