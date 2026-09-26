import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, Chip, Ipa, SectionTitle, SpeakButton } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import * as haptics from '@/services/haptics';
import type { GrammarQuiz } from '@/data/types';

/** Tópico de gramática: seções com texto, tabelas e exemplos (áudio + IPA), armadilhas e mini-quiz. */
export default function GrammarTopicScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const topic = pack.grammar.find((g) => g.id === id);
  if (!topic) return null;
  const idx = pack.grammar.indexOf(topic);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-xl font-extrabold text-slate-900 dark:text-white">
          {topic.emoji} {topic.title}
        </Text>
        <Chip label={topic.level} tone="blue" />
      </View>
      <Text className="mt-2 text-base text-slate-600 dark:text-slate-300">{topic.summary}</Text>

      <View className="mt-3 gap-3">
        {topic.sections.map((s, k) => (
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
                        <Text key={c} selectable className={`w-36 px-3 py-2 text-sm ${c === 0 ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
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

      {topic.pitfalls.length > 0 && (
        <>
          <SectionTitle>⚠️ Armadilhas para quem fala português</SectionTitle>
          <Card className="gap-2">
            {topic.pitfalls.map((p) => (
              <Text key={p} className="text-base leading-6 text-slate-800 dark:text-slate-200">
                • {p}
              </Text>
            ))}
          </Card>
        </>
      )}

      {topic.quiz.length > 0 && (
        <>
          <SectionTitle>🎯 Mini-quiz</SectionTitle>
          <Quiz
            key={topic.id}
            items={topic.quiz}
            onFinish={async (hits) => {
              if (hits > 0) {
                await awardXp(db, hits * 2, `gramatica:${topic.id}`);
                refresh();
              }
            }}
          />
        </>
      )}

      <View className="mt-6 flex-row gap-2">
        {idx > 0 && (
          <Pressable onPress={() => router.replace(`/gramatica/${pack.grammar[idx - 1].id}`)} className="flex-1 rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700">
            <Text className="text-xs text-slate-500">‹ anterior</Text>
            <Text className="font-bold text-slate-800 dark:text-slate-100">{pack.grammar[idx - 1].title}</Text>
          </Pressable>
        )}
        {idx < pack.grammar.length - 1 && (
          <Pressable onPress={() => router.replace(`/gramatica/${pack.grammar[idx + 1].id}`)} className="flex-1 items-end rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700">
            <Text className="text-xs text-slate-500">próximo ›</Text>
            <Text className="text-right font-bold text-slate-800 dark:text-slate-100">{pack.grammar[idx + 1].title}</Text>
          </Pressable>
        )}
      </View>
    </Screen>
  );
}

function Quiz({ items, onFinish }: { items: GrammarQuiz[]; onFinish: (hits: number) => void }) {
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
