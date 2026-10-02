import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, Chip, SectionTitle, SpeechBubble } from '@/components/ui';
import { LinuAmigo } from '@/components/LinuAmigo';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { FieldGuideCard } from '@/components/FieldGuideCard';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { GrammarQuiz, GrammarSections } from '@/components/GrammarParts';

/** Tópico de gramática: seções com texto, tabelas e exemplos (áudio + IPA), armadilhas e mini-quiz. */
export default function GrammarTopicScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const topic = pack.grammar.find((g) => g.id === id);
  if (!topic) return null;
  const idx = pack.grammar.indexOf(topic);

  return (
    <Screen background={<FieldNotebookBackground variant="gelo" />}>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-xl font-extrabold text-slate-900 dark:text-white">
          {topic.emoji} {topic.title}
        </Text>
        <Chip label={topic.level} tone="blue" />
      </View>

      <FieldGuideCard label="MAIS UMA PEDRINHA" className="mb-2 mt-3">
        <View className="flex-row items-end gap-2">
          <LinuAmigo id="adelia" size={60} />
          <SpeechBubble>Achei mais uma pedrinha para a coleção: {topic.title.toLowerCase()}! Vem ver como ela funciona.</SpeechBubble>
        </View>
      </FieldGuideCard>
      <Text className="mt-2 text-base text-slate-600 dark:text-slate-300">{topic.summary}</Text>

      <GrammarSections sections={topic.sections} />

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
          <GrammarQuiz
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
          <Pressable
            onPress={() => router.replace(`/gramatica/${pack.grammar[idx - 1].id}`)}
            className="flex-1 rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700"
          >
            <Text className="text-xs text-slate-500">‹ anterior</Text>
            <Text className="font-bold text-slate-800 dark:text-slate-100">{pack.grammar[idx - 1].title}</Text>
          </Pressable>
        )}
        {idx < pack.grammar.length - 1 && (
          <Pressable
            onPress={() => router.replace(`/gramatica/${pack.grammar[idx + 1].id}`)}
            className="flex-1 items-end rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700"
          >
            <Text className="text-xs text-slate-500">próximo ›</Text>
            <Text className="text-right font-bold text-slate-800 dark:text-slate-100">{pack.grammar[idx + 1].title}</Text>
          </Pressable>
        )}
      </View>
    </Screen>
  );
}
