import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, Chip, SectionTitle } from '@/components/ui';
import { GrammarQuiz, GrammarSections } from '@/components/GrammarParts';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { LESSONS } from '@/data/linguistica-aulas';

/** Aula de linguística geral: seções, curiosidades e mini-quiz. */
export default function LingLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, refresh } = useApp();
  const dark = useIsDark();
  const lesson = LESSONS.find((l) => l.id === id);
  if (!lesson) return null;
  const same = LESSONS.filter((l) => l.group === lesson.group);
  const idx = same.indexOf(lesson);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-xl font-extrabold text-slate-900 dark:text-white">
          {lesson.emoji} {lesson.title}
        </Text>
        <Chip label={lesson.group === 'ferramentas' ? 'ferramentas' : 'grandes temas'} tone="blue" />
      </View>
      <Text className="mt-2 text-base text-slate-600 dark:text-slate-300">{lesson.summary}</Text>
      {lesson.id === 'l-ipa' && (
        <Pressable onPress={() => router.push('/linguistica/ipa')} className="mt-3 rounded-2xl bg-conecta p-3 active:opacity-80">
          <Text className="text-center font-bold text-white">🔤 Abrir o quadro interativo do IPA</Text>
        </Pressable>
      )}
      <View className="mt-3">
        <GrammarSections sections={lesson.sections} />
      </View>
      {lesson.pitfalls.length > 0 && (
        <>
          <SectionTitle>💡 Curiosidades e confusões comuns</SectionTitle>
          <Card className="gap-2">
            {lesson.pitfalls.map((p) => (
              <Text key={p} className="text-base leading-6 text-slate-800 dark:text-slate-200">
                • {p}
              </Text>
            ))}
          </Card>
        </>
      )}
      {lesson.quiz.length > 0 && (
        <>
          <SectionTitle>🎯 Mini-quiz</SectionTitle>
          <GrammarQuiz
            key={lesson.id}
            items={lesson.quiz}
            onFinish={async (hits) => {
              if (hits > 0) {
                await awardXp(db, hits * 2, `linguistica:${lesson.id}`);
                refresh();
              }
            }}
          />
        </>
      )}
      <View className="mt-6 flex-row gap-2">
        {idx > 0 && (
          <Pressable
            onPress={() => router.replace(`/linguistica/aula/${same[idx - 1].id}`)}
            className="flex-1 rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700"
          >
            <Text className="text-xs text-slate-500">‹ anterior</Text>
            <Text className="font-bold text-slate-800 dark:text-slate-100">{same[idx - 1].title}</Text>
          </Pressable>
        )}
        {idx < same.length - 1 && (
          <Pressable
            onPress={() => router.replace(`/linguistica/aula/${same[idx + 1].id}`)}
            className="flex-1 items-end rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700"
          >
            <Text className="text-xs text-slate-500">próxima ›</Text>
            <Text className="text-right font-bold text-slate-800 dark:text-slate-100">{same[idx + 1].title}</Text>
          </Pressable>
        )}
      </View>
    </Screen>
  );
}
