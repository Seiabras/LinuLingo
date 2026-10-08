import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import type { VocabWithSRS } from '@/types';
import { Button } from '../ui';
import { shuffle } from '@/services/answers';
import * as haptics from '@/services/haptics';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';

/**
 * Etapa "Pareie": casar cada palavra-alvo com a tradução, sem áudio nem imagem — treina a leitura
 * direta, complementando a Imersão (que depende de ouvir/ver). Usa as mesmas palavras da lição, sem
 * conteúdo novo.
 */
export function MatchStep({ words, onDone }: { words: VocabWithSRS[]; onDone: (correct: number) => void }) {
  const { pack } = useApp();
  const left = useMemo(() => shuffle(words), [words]);
  const right = useMemo(() => shuffle(words), [words]);
  const [picked, setPicked] = useState<string | null>(null);
  const [solved, setSolved] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [correct, setCorrect] = useState(0);

  const pickLeft = (id: string) => {
    if (solved.has(id) || wrongPair) return;
    setPicked(id);
  };

  const pickRight = (id: string) => {
    if (!picked || wrongPair) return;
    if (picked === id) {
      haptics.success();
      setSolved((s) => new Set(s).add(id));
      setCorrect((c) => c + 1);
      setPicked(null);
    } else {
      haptics.error();
      setWrongPair([picked, id]);
      setTimeout(() => {
        setWrongPair(null);
        setPicked(null);
      }, 600);
    }
  };

  const done = solved.size === words.length;

  return (
    <View className="flex-1 gap-4">
      <Text className="text-center text-lg font-bold text-slate-700 dark:text-slate-200">Toque na palavra e depois na tradução certa</Text>
      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        {solved.size} de {words.length}
      </Text>

      <View className="flex-row gap-3">
        <View className="flex-1 gap-2">
          {left.map((w) => {
            const isSolved = solved.has(w.id);
            const isPicked = picked === w.id;
            const isWrong = wrongPair?.[0] === w.id;
            return (
              <Pressable
                key={w.id}
                disabled={isSolved}
                accessibilityRole="button"
                onPress={() => pickLeft(w.id)}
                className={`min-h-[52px] items-center justify-center rounded-2xl border-2 px-3 py-3 active:opacity-80 ${
                  isSolved
                    ? 'border-conquista bg-conquista-light opacity-50 dark:bg-green-950'
                    : isWrong
                      ? 'border-rose-400 bg-rose-50 dark:bg-rose-950'
                      : isPicked
                        ? 'border-conecta bg-conecta-light dark:bg-sky-950'
                        : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
                }`}
              >
                <Text style={targetTextStyle(pack)} className="text-center font-bold text-slate-800 dark:text-slate-100">{w.word_target}</Text>
              </Pressable>
            );
          })}
        </View>
        <View className="flex-1 gap-2">
          {right.map((w) => {
            const isSolved = solved.has(w.id);
            const isWrong = wrongPair?.[1] === w.id;
            return (
              <Pressable
                key={`r-${w.id}`}
                disabled={isSolved}
                accessibilityRole="button"
                onPress={() => pickRight(w.id)}
                className={`min-h-[52px] items-center justify-center rounded-2xl border-2 px-3 py-3 active:opacity-80 ${
                  isSolved
                    ? 'border-conquista bg-conquista-light opacity-50 dark:bg-green-950'
                    : isWrong
                      ? 'border-rose-400 bg-rose-50 dark:bg-rose-950'
                      : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
                }`}
              >
                <Text className="text-center font-semibold text-slate-700 dark:text-slate-200">{w.word_native}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {done && <Button title="Continuar" variant="success" onPress={() => onDone(correct)} />}
    </View>
  );
}
