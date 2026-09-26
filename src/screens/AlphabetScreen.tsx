import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Button, Card, Chip, Ipa, ProgressBar, SectionTitle, SpeakButton, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp, getMeta, setMeta } from '@/database/queries';
import { buildRound, lower, masteredCount, MASTERED, recordAnswer, type AlphabetProgress, type AlphabetQuestion } from '@/services/alphabet';
import { speak } from '@/services/speech';
import * as haptics from '@/services/haptics';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import type { AlphabetLetter } from '@/data/types';

const GROUPS: { key: AlphabetLetter['group']; title: string; text: string }[] = [
  { key: 'igual', title: '✅ Iguais às nossas', text: 'Mesma forma e som parecido: você já sabe.' },
  { key: 'falsa', title: '⚠️ Falsas amigas', text: 'Parecem letras nossas, mas o som é outro. É aqui que todo mundo tropeça!' },
  { key: 'nova', title: '🆕 Novas', text: 'Letras que o português não tem: cada uma com um som próprio.' },
];

/** Treino do alfabeto de outro idioma (cirílico): conhecer as letras e jogar. */
export default function AlphabetScreen() {
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const data = pack.alphabet;
  const key = `alfabeto_${pack.code}`;
  const [progress, setProgress] = useState<AlphabetProgress>({});
  const [picked, setPicked] = useState<AlphabetLetter | null>(null);
  const [game, setGame] = useState<{ qs: AlphabetQuestion[]; i: number; hits: number; answer: string | null } | null>(null);

  useFocusEffect(
    useCallback(() => {
      getMeta(db, key).then((v) => setProgress(v ? (JSON.parse(v) as AlphabetProgress) : {}));
    }, [db, key]),
  );

  if (!data) {
    return (
      <Screen>
        <Text className="py-20 text-center text-slate-500">Este idioma usa o nosso alfabeto.</Text>
      </Screen>
    );
  }

  const mastered = masteredCount(data, progress);
  const start = () => {
    setPicked(null);
    setGame({ qs: buildRound(data, progress), i: 0, hits: 0, answer: null });
  };

  const answer = async (opt: string) => {
    if (!game || game.answer) return;
    const q = game.qs[game.i];
    const ok = opt === q.answer;
    if (ok) haptics.success();
    else haptics.error();
    const next = recordAnswer(progress, q, ok);
    setProgress(next);
    await setMeta(db, key, JSON.stringify(next));
    setGame({ ...game, answer: opt, hits: game.hits + (ok ? 1 : 0) });
    // ouvir a palavra de exemplo ajuda a fixar o som
    speak(q.kind === 'leitura' ? q.word[0] : q.letter.example[0], pack.speechLocale);
  };

  const nextQ = async () => {
    if (!game) return;
    if (game.i + 1 >= game.qs.length) {
      await awardXp(db, game.hits + (game.hits === game.qs.length ? 5 : 0), 'alfabeto');
      refresh();
    }
    setGame({ ...game, i: game.i + 1, answer: null });
  };

  // ---------- jogo ----------
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
            <Text className="text-center text-slate-600 dark:text-slate-400">
              {mastered}/{data.letters.length} letras dominadas
            </Text>
            <Button title="Treinar de novo" className="w-full" onPress={start} />
            <Button title="Ver as letras" variant="ghost" className="w-full" onPress={() => setGame(null)} />
          </Card>
        ) : (
          <View className="mt-6 gap-4">
            <Card className="items-center gap-2 py-6">
              {q.kind === 'som' && (
                <>
                  <Text className="text-sm font-bold uppercase tracking-wide text-slate-500">Que som tem esta letra?</Text>
                  <Text accessibilityLabel={`Letra ${q.letter.letter}`} style={{ fontSize: 88, lineHeight: 104 }} className="font-extrabold text-slate-900 dark:text-white">
                    {q.letter.letter}
                  </Text>
                </>
              )}
              {q.kind === 'letra' && (
                <>
                  <Text className="text-sm font-bold uppercase tracking-wide text-slate-500">Qual letra faz este som?</Text>
                  <Text className="text-5xl font-extrabold text-conecta">«{q.letter.short}»</Text>
                  <Text className="text-center text-sm text-slate-500 dark:text-slate-400">{q.letter.ipa}</Text>
                </>
              )}
              {q.kind === 'leitura' && (
                <>
                  <Text className="text-sm font-bold uppercase tracking-wide text-slate-500">Leia: o que é?</Text>
                  <Text accessibilityLabel={`Palavra ${q.word[0]}`} className="text-5xl font-extrabold text-slate-900 dark:text-white">
                    {q.word[0]}
                  </Text>
                </>
              )}
            </Card>
            <View className="flex-row flex-wrap gap-2">
              {q.options.map((o) => {
                const right = game.answer && o === q.answer;
                const wrong = game.answer === o && o !== q.answer;
                return (
                  <Pressable
                    key={o}
                    accessibilityRole="button"
                    accessibilityLabel={`Opção ${o}`}
                    onPress={() => answer(o)}
                    className={`min-w-[47%] flex-1 items-center rounded-2xl border-2 py-4 ${right ? 'border-conquista bg-green-50 dark:bg-green-950' : wrong ? 'border-rose-500 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'} ${game.answer && !right && !wrong ? 'opacity-50' : ''}`}
                  >
                    <Text className={`font-bold text-slate-900 dark:text-white ${q.kind === 'leitura' ? 'text-4xl' : 'text-2xl'}`}>{o}</Text>
                  </Pressable>
                );
              })}
            </View>
            {game.answer && (
              <Card className="gap-2">
                <Text className={`text-lg font-extrabold ${game.answer === q.answer ? 'text-conquista' : 'text-rose-600'}`}>
                  {game.answer === q.answer ? 'Isso!' : `Era «${q.answer}».`}
                </Text>
                {q.kind === 'leitura' ? (
                  <Text className="text-base text-slate-700 dark:text-slate-300">
                    {q.word[0]} = {q.word[2]}. Você leu russo! 🎉
                  </Text>
                ) : (
                  <LetterInfo letter={q.letter} locale={pack.speechLocale} />
                )}
                <Button title="Continuar" variant="success" onPress={nextQ} />
              </Card>
            )}
          </View>
        )}
      </Screen>
    );
  }

  // ---------- as letras ----------
  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🔤 Alfabeto</Text>
      </View>
      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={64} />
        <SpeechBubble className="mb-5">
          {`São ${data.letters.length} letras. Toque numa para ouvir e ver o som. Você já domina ${mastered}!`}
        </SpeechBubble>
      </View>
      <ProgressBar value={mastered / data.letters.length} />
      <Button title="🎯 Treinar (12 perguntas)" variant="success" className="mt-3" onPress={start} />

      {picked && (
        <Card className="mt-4 gap-2 border-2 border-conecta">
          <View className="flex-row items-center gap-3">
            <Text className="text-5xl font-extrabold text-slate-900 dark:text-white">{picked.letter}</Text>
            <Chip label={picked.group === 'falsa' ? '⚠️ falsa amiga' : picked.group === 'igual' ? 'igual à nossa' : 'nova'} tone={picked.group === 'falsa' ? 'rose' : picked.group === 'igual' ? 'green' : 'blue'} />
          </View>
          <LetterInfo letter={picked} locale={pack.speechLocale} />
        </Card>
      )}

      {GROUPS.map((g) => (
        <View key={g.key} className="mt-5 gap-2">
          <SectionTitle>{g.title}</SectionTitle>
          <Text className="text-sm text-slate-500 dark:text-slate-400">{g.text}</Text>
          <View className="flex-row flex-wrap gap-2">
            {data.letters
              .filter((l) => l.group === g.key)
              .map((l) => {
                const n = progress[l.letter] ?? 0;
                return (
                  <Pressable
                    key={l.letter}
                    accessibilityRole="button"
                    accessibilityLabel={`Letra ${l.letter}, som ${l.short}`}
                    onPress={() => {
                      setPicked(l);
                      speak(l.example[0], pack.speechLocale);
                    }}
                    className={`w-[72px] items-center rounded-2xl border-2 py-2 ${picked?.letter === l.letter ? 'border-conecta' : 'border-slate-200 dark:border-slate-700'} ${n >= MASTERED ? 'bg-green-50 dark:bg-green-950' : 'bg-white dark:bg-slate-900'}`}
                  >
                    <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">{lower(l)}</Text>
                    <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400">{l.short}</Text>
                    <Text className="text-[10px]">{n >= MASTERED ? '⭐' : '•'.repeat(n) || ' '}</Text>
                  </Pressable>
                );
              })}
          </View>
        </View>
      ))}
    </Screen>
  );
}

function LetterInfo({ letter, locale }: { letter: AlphabetLetter; locale: string }) {
  return (
    <View className="gap-1">
      <Text className="text-base text-slate-700 dark:text-slate-300">
        {letter.ipa} · {letter.sound}
      </Text>
      <View className="flex-row items-center gap-2">
        <Text className="text-xl font-bold text-slate-900 dark:text-white">{letter.example[0]}</Text>
        <SpeakButton text={letter.example[0]} locale={locale} size={16} />
        <Text className="text-slate-500 dark:text-slate-400">{letter.example[1]}</Text>
      </View>
      <Ipa text={letter.example[0]} />
    </View>
  );
}
