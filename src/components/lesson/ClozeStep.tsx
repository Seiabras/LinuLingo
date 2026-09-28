import { useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import type { ClozeItem } from '@/data/types';
import { Button, SpeakButton, Ipa, LetterPad } from '../ui';
import { normalize, shuffle } from '@/services/answers';
import * as haptics from '@/services/haptics';
import { logMistake } from '@/services/mistakes';
import { useApp } from '@/services/app-state';

/**
 * Etapa 3 — preenchimento de lacunas (Speakly). Toque numa opção ou digite,
 * com um teclado adaptado para as letras do idioma.
 */
export function ClozeStep({ items, locale, specialChars, onDone }: { items: ClozeItem[]; locale: string; specialChars: string[]; onDone: (correct: number) => void }) {
  const { db, pack } = useApp();
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answer, setAnswer] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const [typed, setTyped] = useState('');
  const item = items[i];
  const options = useMemo(() => (item ? shuffle(item.options) : []), [item]);

  if (!item) return null;
  const answered = answer !== null;
  // japonês: a resposta digitada em kana vale pela palavra em kanji (みず = 水)
  const sameReading = (v: string) => !!pack.typedReading && normalize(pack.typedReading(v)) === normalize(pack.typedReading(item.answer));
  const right = answered && (normalize(answer, { keepDiacritics: true }) === normalize(item.answer, { keepDiacritics: true }) || sameReading(answer));
  const almost = answered && !right && normalize(answer) === normalize(item.answer);
  const [before, after] = item.sentence.split('___');
  const full = item.sentence.replace('___', item.answer);

  const submit = (value: string) => {
    if (answered) return;
    setAnswer(value);
    const ok = normalize(value) === normalize(item.answer) || sameReading(value);
    if (ok) {
      haptics.success();
      setCorrect((c) => c + 1);
    } else {
      haptics.error();
      logMistake(db, {
        language: pack.code,
        source: 'licao',
        key: item.sentence,
        prompt: `Complete: ${item.sentence}`,
        expected: item.answer,
        given: value,
        note: item.translation,
        speak: item.sentence.replace('___', item.answer),
        options: item.options,
      });
    }
  };

  const next = () => {
    setAnswer(null);
    setTyped('');
    if (i + 1 >= items.length) onDone(correct);
    else setI(i + 1);
  };

  return (
    <View className="flex-1 gap-5">
      <Text className="text-center text-lg font-bold text-slate-700 dark:text-slate-200">Complete a frase</Text>
      <Text className="text-center text-xs text-slate-500 dark:text-slate-400">
        {i + 1} de {items.length}
      </Text>

      <View className="flex-row items-center gap-3 rounded-3xl border-2 border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <Text className="flex-1 text-2xl leading-9 text-slate-900 dark:text-white">
          {before}
          <Text className={`font-extrabold ${answered ? (right || almost ? 'text-conquista' : 'text-rose-500') : 'text-conecta'}`}>
            {answered ? item.answer : ' _____ '}
          </Text>
          {after}
        </Text>
        {answered && <SpeakButton text={full} locale={locale} />}
      </View>

      {!typing ? (
        <View className="gap-2">
          {options.map((o) => {
            const isRight = answered && o === item.answer;
            const isWrong = answered && o === answer && !isRight;
            return (
              <Pressable
                key={o}
                accessibilityRole="button"
                disabled={answered}
                onPress={() => submit(o)}
                className={`min-h-[52px] items-center justify-center rounded-2xl border-2 px-4 py-3 active:opacity-80 ${
                  isRight ? 'border-conquista bg-conquista-light dark:bg-green-950' : isWrong ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
                }`}
              >
                <Text className="text-lg font-bold text-slate-800 dark:text-slate-100">{o}</Text>
              </Pressable>
            );
          })}
          {!answered && (
            <Pressable onPress={() => setTyping(true)} className="self-center p-2">
              <Text className="font-semibold text-conecta">⌨️ Prefiro digitar</Text>
            </Pressable>
          )}
        </View>
      ) : (
        <View className="gap-2">
          <TextInput
            value={typed}
            onChangeText={setTyped}
            editable={!answered}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite a palavra que falta"
            placeholderTextColor="#94A3B8"
            onSubmitEditing={() => typed.trim() && submit(typed)}
            className="rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-lg text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />
          {!answered && <LetterPad onInsert={(ch) => setTyped((t) => t + ch)} onBackspace={() => setTyped((t) => t.slice(0, -1))} />}
          {!answered && <Button title="Verificar" disabled={!typed.trim()} onPress={() => submit(typed)} />}
          {!answered && (
            <Pressable onPress={() => setTyping(false)} className="self-center p-2">
              <Text className="font-semibold text-conecta">Mostrar opções</Text>
            </Pressable>
          )}
        </View>
      )}

      {answered && (
        <View className={`gap-2 rounded-2xl p-4 ${right || almost ? 'bg-conquista-light dark:bg-green-950' : 'bg-rose-50 dark:bg-rose-950'}`}>
          <Text className={`text-lg font-extrabold ${right || almost ? 'text-conquista-dark dark:text-green-300' : 'text-rose-600 dark:text-rose-300'}`}>
            {right ? 'Perfeito! 🎉' : almost ? 'Quase! Atenção aos acentos.' : `Resposta certa: ${item.answer}`}
          </Text>
          <Ipa text={full} />
          <Text className="text-slate-700 dark:text-slate-300">🇧🇷 {item.translation}</Text>
          <Button title="Continuar" variant={right || almost ? 'success' : 'danger'} onPress={next} />
        </View>
      )}
    </View>
  );
}
