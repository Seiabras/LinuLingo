import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { VocabWithSRS } from '@/types';
import { SwipeCard } from '../SwipeCard';
import { Button, SpeakButton, Ipa } from '../ui';
import { speak } from '@/services/speech';
import { shuffle } from '@/services/answers';
import * as haptics from '@/services/haptics';
import { qualityFromAnswer } from '@/srs/sm2';
import { logMistake } from '@/services/mistakes';
import { useApp } from '@/services/app-state';

export interface WordResult {
  vocabId: string;
  quality: number;
  correct: boolean;
}

/**
 * Etapa 2 — associação imersiva imagem ↔ som (Rosetta Stone / Drops).
 * Nenhuma tradução aparece: o aluno liga a imagem à palavra ouvida.
 * Deslizar para a direita = «já sei esta palavra».
 */
export function ImmersionStep({ words, pool, locale, onDone }: { words: VocabWithSRS[]; pool: VocabWithSRS[]; locale: string; onDone: (r: WordResult[]) => void }) {
  const { db, pack } = useApp();
  const [i, setI] = useState(0);
  const [results, setResults] = useState<WordResult[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [misses, setMisses] = useState(0);
  const word = words[i];

  const options = useMemo(() => {
    if (!word) return [];
    const others = shuffle(pool.filter((p) => p.id !== word.id && p.emoji)).slice(0, 2);
    return shuffle([word, ...others]);
  }, [word, pool]);

  useEffect(() => {
    if (word) speak(word.word_target, locale);
  }, [word, locale]);

  if (!word) return null;

  const next = (r: WordResult) => {
    const all = [...results, r];
    setResults(all);
    setPicked(null);
    setMisses(0);
    if (i + 1 >= words.length) onDone(all);
    else setI(i + 1);
  };

  const choose = (id: string) => {
    if (picked === word.id) return;
    setPicked(id);
    if (id === word.id) {
      haptics.success();
      speak(word.word_target, locale);
    } else {
      haptics.error();
      setMisses((m) => m + 1);
      const wrong = options.find((o) => o.id === id);
      logMistake(db, {
        language: pack.code,
        source: 'imersao',
        key: word.id,
        prompt: `O que é «${word.word_target}»?`,
        expected: word.word_native,
        given: wrong?.word_native ?? null,
        note: word.emoji ?? null,
        speak: word.word_target,
        options: options.map((o) => o.word_native),
      });
    }
  };

  const solved = picked === word.id;

  return (
    <View className="flex-1 gap-4">
      <Text className="text-center text-lg font-bold text-slate-700 dark:text-slate-200">Ouça e escolha a palavra que combina com a imagem</Text>
      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        {i + 1} de {words.length} · deslize para a direita se já sabe →
      </Text>

      <SwipeCard key={word.id} enabled={['direita']} onSwipe={() => next({ vocabId: word.id, quality: qualityFromAnswer(true, { knewAlready: true }), correct: true })}>
        <View className="items-center gap-3 rounded-3xl border-2 border-slate-200 bg-white py-8 dark:border-slate-700 dark:bg-slate-900">
          <Text style={{ fontSize: 96, lineHeight: 116 }}>{word.emoji}</Text>
          <SpeakButton text={word.word_target} locale={locale} size={26} />
          {solved && <Ipa text={word.word_target} className="text-base" />}
        </View>
      </SwipeCard>

      <View className="gap-2">
        {options.map((o) => {
          const isPicked = picked === o.id;
          const good = isPicked && o.id === word.id;
          const bad = isPicked && o.id !== word.id;
          return (
            <Pressable
              key={o.id}
              accessibilityRole="button"
              onPress={() => choose(o.id)}
              className={`min-h-[52px] flex-row items-center justify-between rounded-2xl border-2 px-4 py-3 active:opacity-80 ${
                good ? 'border-conquista bg-conquista-light dark:bg-green-950' : bad ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
              }`}
            >
              <Text className={`text-lg font-bold ${good ? 'text-conquista-dark dark:text-green-300' : bad ? 'text-rose-600 dark:text-rose-300' : 'text-slate-800 dark:text-slate-100'}`}>{o.word_target}</Text>
              {solved && o.id === word.id && <Text className="text-lg">✅</Text>}
            </Pressable>
          );
        })}
      </View>

      {solved && (
        <Button
          title="Continuar"
          variant="success"
          onPress={() => next({ vocabId: word.id, quality: qualityFromAnswer(true, { firstTry: misses === 0 }), correct: misses === 0 })}
        />
      )}
    </View>
  );
}
