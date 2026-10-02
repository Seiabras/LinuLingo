import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { WordImage, photoFor, pictoFor } from '@/components/WordImage';
import type { VocabWithSRS } from '@/types';
import { Button, SpeakButton, Ipa } from '../ui';
import { speak } from '@/services/speech';
import { shuffle } from '@/services/answers';
import * as haptics from '@/services/haptics';
import { qualityFromAnswer } from '@/srs/sm2';
import { logMistake } from '@/services/mistakes';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';

export interface WordResult {
  vocabId: string;
  quality: number;
  correct: boolean;
}

/**
 * A imagem que `WordImage` realmente mostra pra essa palavra (foto > pictograma > emoji), como uma
 * chave só pra comparar: duas palavras com essa chave igual são visualmente a MESMA figura. Evita um
 * cartão de imersão com duas opções "certas" por acaso (ex.: duas palavras que viram o mesmo emoji,
 * ou o mesmo pictograma por sentidos parecidos).
 */
function imageKey(w: Pick<VocabWithSRS, 'word_native' | 'word_target' | 'part_of_speech' | 'emoji'>): string {
  const ctx = { pos: w.part_of_speech, target: w.word_target };
  const photo = photoFor(w.word_native, ctx);
  if (photo) return `photo:${photo.src}`;
  const picto = pictoFor(w.word_native, ctx);
  if (picto) return `picto:${picto.src}`;
  return `emoji:${w.emoji ?? ''}`;
}

/**
 * Etapa 2 — associação imersiva imagem ↔ som (Rosetta Stone / Drops).
 * Nenhuma tradução aparece: o aluno ouve a palavra e toca na opção que combina
 * com a imagem. Só esse gesto (toque numa opção) faz a etapa avançar — sem o
 * gesto de arrastar/virar cartão do SRS (ver DeckSession), que é outra
 * metodologia (autoavaliação de revisão) e não cabe aqui.
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
    const wordKey = imageKey(word);
    const others = shuffle(pool.filter((p) => p.id !== word.id && p.emoji && imageKey(p) !== wordKey)).slice(0, 2);
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
        prompt: `O que é “${word.word_target}”?`,
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
        {i + 1} de {words.length}
      </Text>

      <View className="items-center gap-3 rounded-3xl border-2 border-slate-200 bg-white py-8 dark:border-slate-700 dark:bg-slate-900">
        <WordImage wordNative={word.word_native} emoji={word.emoji} size={150} credit pos={word.part_of_speech} target={word.word_target} />
        <SpeakButton text={word.word_target} locale={locale} size={26} />
        {solved && <Ipa text={word.word_target} className="text-base" />}
      </View>

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
              <View className="flex-1">
                <Text style={targetTextStyle(pack)} className={`text-lg font-bold ${good ? 'text-conquista-dark dark:text-green-300' : bad ? 'text-rose-600 dark:text-rose-300' : 'text-slate-800 dark:text-slate-100'}`}>{o.word_target}</Text>
                {!!pack.reading?.(o.word_target) && <Text className="text-xs text-slate-500 dark:text-slate-400">{pack.reading(o.word_target)}</Text>}
              </View>
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
