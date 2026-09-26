import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Card, Ipa, SpeakButton } from './ui';
import { Linu } from './Linu';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import type { GrammarQuiz as QuizItem, GrammarSection } from '@/data/types';

/** Seções de gramática: título, tabela, texto e exemplos com áudio e IPA. */
export function GrammarSections({ sections }: { sections: GrammarSection[] }) {
  const { pack } = useApp();
  return (
    <View className="mt-3 gap-3">
      {sections.map((s, k) => (
        <Card key={k} className="gap-3">
          {s.heading && <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{s.heading}</Text>}
          {s.table && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                <View className="flex-row bg-conecta-light dark:bg-blue-950">
                  {s.table.head.map((h) => (
                    <Text key={h} className="w-36 px-3 py-2 text-xs font-extrabold uppercase text-conecta-dark dark:text-blue-300">
                      {h}
                    </Text>
                  ))}
                </View>
                {s.table.rows.map((row, r) => (
                  <View key={r} className={`flex-row ${r % 2 ? 'bg-slate-50 dark:bg-slate-800/50' : ''}`}>
                    {row.map((cell, c) => (
                      <Text
                        key={c}
                        selectable
                        className={`w-36 px-3 py-2 text-sm ${c === 0 ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}
                      >
                        {cell}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
          {s.text && <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{s.text}</Text>}
          {s.examples && (
            <View className="gap-2">
              {s.examples.map(([ro, pt]) => (
                <View key={ro} className="flex-row items-center gap-3 rounded-xl bg-conecta-light/60 px-3 py-2 dark:bg-blue-950/60">
                  <SpeakButton text={ro} locale={pack.speechLocale} size={16} />
                  <View className="flex-1">
                    <Text className="font-bold text-conecta-dark dark:text-blue-300">{ro}</Text>
                    <Ipa text={ro} className="text-xs" />
                    <Text className="text-sm text-slate-600 dark:text-slate-400">{pt}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </Card>
      ))}
    </View>
  );
}

/** Mini-quiz com explicação em cada resposta. */
export function GrammarQuiz({ items, onFinish }: { items: QuizItem[]; onFinish: (hits: number) => void }) {
  const [answers, setAnswers] = useState<(string | null)[]>(() => items.map(() => null));
  const done = answers.every((a) => a !== null);
  const hits = answers.filter((a, i) => a === items[i].answer).length;
  return (
    <View className="gap-3">
      {items.map((q, i) => (
        <Card key={q.question} className="gap-2">
          <Text className="text-base font-bold text-slate-900 dark:text-white">{q.question}</Text>
          <View className="flex-row flex-wrap gap-2">
            {q.options.map((o) => {
              const picked = answers[i] === o;
              const show = answers[i] !== null;
              const right = o === q.answer;
              return (
                <Pressable
                  key={o}
                  disabled={show}
                  onPress={() => {
                    const next = answers.slice();
                    next[i] = o;
                    setAnswers(next);
                    if (right) haptics.success();
                    else haptics.error();
                    if (next.every((a) => a !== null)) onFinish(next.filter((a, k) => a === items[k].answer).length);
                  }}
                  className={`rounded-xl border-2 px-3 py-2 ${show && right ? 'border-conquista bg-conquista-light dark:bg-green-950' : picked ? 'border-rose-400 bg-rose-50 dark:bg-rose-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
                >
                  <Text className="font-semibold text-slate-800 dark:text-slate-100">{o}</Text>
                </Pressable>
              );
            })}
          </View>
          {answers[i] !== null && <Text className="text-sm text-slate-600 dark:text-slate-400">💡 {q.explanation}</Text>}
        </Card>
      ))}
      {done && (
        <Card className="flex-row items-center gap-3">
          <Linu mood={hits === items.length ? 'comemorando' : 'feliz'} size={56} animate={false} />
          <Text className="flex-1 text-base font-bold text-slate-900 dark:text-white">
            {hits}/{items.length} certas · +{hits * 2} XP
          </Text>
        </Card>
      )}
    </View>
  );
}
