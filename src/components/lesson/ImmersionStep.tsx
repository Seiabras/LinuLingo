import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Info } from 'lucide-react-native';
import { WordImage, wordImageKey } from '@/components/WordImage';
import { WordInfoSheet, type WordInfo } from '@/components/WordInfoSheet';
import type { VocabWithSRS } from '@/types';
import { Button, SpeakButton, Ipa } from '../ui';
import { speak } from '@/services/speech';
import { shuffle } from '@/services/answers';
import { pickDistractors } from '@/services/distractors';
import * as haptics from '@/services/haptics';
import { qualityFromAnswer } from '@/srs/sm2';
import { logMistake } from '@/services/mistakes';
import { useApp } from '@/services/app-state';
import { targetTextStyle } from '@/services/direction';
import { podeEncurtar, type RespostaCronometrada } from '@/services/licao-adaptativa';

// fora do componente: o lint de pureza não aceita Date.now() direto num handler
const agora = () => Date.now();

export interface WordResult {
  vocabId: string;
  quality: number;
  correct: boolean;
}


/**
 * Etapa 2 — associação imersiva imagem ↔ som (Rosetta Stone / Drops).
 * O aluno ouve a palavra e toca na opção que combina com a imagem; a tradução
 * fica visível (pequena, abaixo da imagem) porque nem toda imagem livre
 * disponível ilustra bem o conceito — sem ela, uma imagem ambígua vira
 * adivinhação. Só o toque numa opção faz a etapa avançar — sem o gesto de
 * arrastar/virar cartão do SRS (ver DeckSession), que é outra metodologia
 * (autoavaliação de revisão) e não cabe aqui.
 */
export function ImmersionStep({
  words,
  pool,
  locale,
  adaptive = false,
  onDone,
}: {
  words: VocabWithSRS[];
  pool: VocabWithSRS[];
  locale: string;
  /** lição adaptativa: quem acerta as primeiras de primeira e sem hesitar pula as últimas */
  adaptive?: boolean;
  onDone: (r: WordResult[]) => void;
}) {
  const { db, pack } = useApp();
  const [i, setI] = useState(0);
  const [results, setResults] = useState<WordResult[]>([]);
  const [picked, setPicked] = useState<string | null>(null);
  const [misses, setMisses] = useState(0);
  const [infoWord, setInfoWord] = useState<WordInfo | null>(null);
  // as palavras que sobraram quando a lição encurtou (mostra o aviso antes de seguir)
  const [voando, setVoando] = useState<WordResult[] | null>(null);
  // quando a palavra apareceu e quanto tempo levou até o acerto (só o primeiro acerto de cada uma)
  const shownAt = useRef(0);
  const tempos = useRef<number[]>([]);
  const word = words[i];

  const options = useMemo(() => {
    if (!word) return [];
    // a chave é a figura que aparece na tela: duas opções nunca mostram a mesma (toda palavra tem
    // imagem, nem que seja o cartão da palavra)
    const others = pickDistractors(word, pool, (w) => wordImageKey(pack.vocab, w), 2);
    return shuffle([word, ...others]);
  }, [word, pool, pack.vocab]);

  useEffect(() => {
    if (!word) return;
    shownAt.current = agora();
    speak(word.word_target, locale);
  }, [word, locale]);

  if (voando) {
    const sobra = words.slice(i + 1);
    return (
      <View className="flex-1 gap-4">
        <View style={{ paddingHorizontal: 20, paddingVertical: 24 }} className="items-center gap-2 rounded-3xl border-2 border-conquista bg-conquista-light dark:bg-green-950">
          <Text className="text-4xl">⚡</Text>
          <Text className="text-center text-xl font-extrabold text-conquista-dark dark:text-green-300">Você está voando!</Text>
          <Text className="text-center text-slate-700 dark:text-slate-200">
            {`Acertou ${results.length} de primeira, sem hesitar. ${sobra.length === 1 ? 'A última palavra entra' : `As últimas ${sobra.length} palavras entram`} no cofre como já sabidas:`}
          </Text>
          <Text style={targetTextStyle(pack)} className="text-center text-lg font-bold text-slate-900 dark:text-white">
            {sobra.map((w) => w.word_target).join(' · ')}
          </Text>
        </View>
        <Button title="Continuar" variant="success" onPress={() => onDone(voando)} />
      </View>
    );
  }

  if (!word) return null;

  const next = (r: WordResult) => {
    const all = [...results, r];
    setResults(all);
    setPicked(null);
    setMisses(0);
    if (i + 1 >= words.length) return onDone(all);
    const cronometradas: RespostaCronometrada[] = all.map((x, k) => ({ correct: x.correct, ms: tempos.current[k] ?? Infinity }));
    if (adaptive && podeEncurtar(cronometradas, words.length)) {
      // as que faltam contam como sabidas (qualidade 4 do SM-2, a mesma do «sei»)
      return setVoando([...all, ...words.slice(i + 1).map((w) => ({ vocabId: w.id, quality: 4, correct: true }))]);
    }
    setI(i + 1);
  };

  const choose = (id: string) => {
    if (picked === word.id) return;
    setPicked(id);
    if (id === word.id) {
      tempos.current[i] = agora() - shownAt.current;
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
      <Text className="text-center text-xs text-slate-600 dark:text-slate-400">
        {i + 1} de {words.length}
      </Text>

      <View className="items-center gap-3 rounded-3xl border-2 border-slate-200 bg-white py-8 dark:border-slate-700 dark:bg-slate-900">
        <WordImage wordNative={word.word_native} emoji={word.emoji} size={150} credit pos={word.part_of_speech} target={word.word_target} />
        <Text className="text-sm text-slate-600 dark:text-slate-400">{word.word_native}</Text>
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
                {!!pack.reading?.(o.word_target) && <Text className="text-xs text-slate-600 dark:text-slate-400">{pack.reading(o.word_target)}</Text>}
              </View>
              {solved && (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Ver mais sobre a palavra ${o.word_target}`}
                  hitSlop={8}
                  onPress={(e) => {
                    e.stopPropagation();
                    setInfoWord({ target: o.word_target, native: o.word_native, pos: o.part_of_speech, gender: o.gender, locale });
                  }}
                  className="p-1"
                >
                  <Info size={18} color="#64748B" />
                </Pressable>
              )}
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
      <WordInfoSheet word={infoWord} onClose={() => setInfoWord(null)} />
    </View>
  );
}
