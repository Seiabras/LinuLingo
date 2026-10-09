import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Card, Chip, SectionTitle, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { GrammarQuiz, GrammarSections } from '@/components/GrammarParts';
import { useApp } from '@/services/app-state';
import { awardXp } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { AREAS } from '@/data/linguistica';
import { nomeIdioma } from '@/services/idioma-nome';

/** Uma área da língua: o que ela estuda (geral) e como funciona no idioma estudado. */
export default function LinguisticsScreen() {
  const { area } = useLocalSearchParams<{ area: string }>();
  const { db, pack, refresh } = useApp();
  const dark = useIsDark();
  const info = AREAS.find((a) => a.id === area);
  if (!info) return null;
  const data = pack.linguistics?.find((l) => l.area === info.id);
  const topics = (data?.topics ?? []).map((id) => pack.grammar.find((g) => g.id === id)).filter((g) => !!g);
  const idx = AREAS.indexOf(info);

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">
          {info.emoji} {info.name}
        </Text>
        <Chip label={`${idx + 1}/${AREAS.length}`} />
      </View>
      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} animate={false} />
        <SpeechBubble className="mb-5">{info.question}</SpeechBubble>
      </View>

      <SectionTitle>📖 O que é</SectionTitle>
      <Card className="gap-3">
        <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{info.what}</Text>
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">No português que você já fala</Text>
        {info.examplesPt.map((e) => (
          <Text key={e} className="text-base leading-6 text-slate-700 dark:text-slate-300">
            • {e}
          </Text>
        ))}
      </Card>

      <SectionTitle>🔑 Palavras-chave</SectionTitle>
      <Card className="gap-2">
        {info.keywords.map(([k, v]) => (
          <Text key={k} className="text-base leading-6 text-slate-700 dark:text-slate-300">
            <Text className="font-bold text-slate-900 dark:text-white">{k}</Text>: {v}
          </Text>
        ))}
      </Card>

      <SectionTitle>
        {pack.flag} {info.name} do {nomeIdioma(pack.name)}
      </SectionTitle>
      {data ? (
        <>
          <Text className="mb-2 text-base text-slate-600 dark:text-slate-300">{data.summary}</Text>
          <GrammarSections sections={data.sections} />
        </>
      ) : (
        <Card>
          <Text className="text-slate-600 dark:text-slate-400">Esta parte ainda está sendo escrita para o {nomeIdioma(pack.name)}.</Text>
        </Card>
      )}

      {topics.length > 0 && (
        <>
          <SectionTitle>📐 Tópicos de gramática desta área</SectionTitle>
          <View className="gap-2">
            {topics.map((g) => (
              <Pressable
                key={g.id}
                accessibilityRole="button"
                onPress={() => router.push(`/gramatica/${g.id}`)}
                className="flex-row items-center gap-3 rounded-2xl bg-white p-3 active:opacity-80 dark:bg-slate-900"
              >
                <Text className="text-2xl">{g.emoji}</Text>
                <View className="flex-1">
                  <Text className="font-bold text-slate-900 dark:text-white">{g.title}</Text>
                  <Text className="text-xs text-slate-600 dark:text-slate-400">{g.level}</Text>
                </View>
                <Text className="text-lg text-slate-500 dark:text-slate-400">›</Text>
              </Pressable>
            ))}
          </View>
        </>
      )}

      {data && data.quiz.length > 0 && (
        <>
          <SectionTitle>🎯 Mini-quiz</SectionTitle>
          <GrammarQuiz
            key={info.id}
            items={data.quiz}
            onFinish={async (hits) => {
              if (hits > 0) {
                await awardXp(db, hits * 2, `linguistica:${info.id}`);
                refresh();
              }
            }}
          />
        </>
      )}

      <View className="mt-6 flex-row gap-2">
        {idx > 0 && (
          <Pressable
            onPress={() => router.replace(`/linguistica/${AREAS[idx - 1].id}`)}
            className="flex-1 rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700"
          >
            <Text className="text-xs text-slate-600 dark:text-slate-400">‹ anterior</Text>
            <Text className="font-bold text-slate-800 dark:text-slate-100">
              {AREAS[idx - 1].emoji} {AREAS[idx - 1].name}
            </Text>
          </Pressable>
        )}
        {idx < AREAS.length - 1 && (
          <Pressable
            onPress={() => router.replace(`/linguistica/${AREAS[idx + 1].id}`)}
            className="flex-1 items-end rounded-2xl border-2 border-slate-200 p-3 dark:border-slate-700"
          >
            <Text className="text-xs text-slate-600 dark:text-slate-400">próxima ›</Text>
            <Text className="text-right font-bold text-slate-800 dark:text-slate-100">
              {AREAS[idx + 1].emoji} {AREAS[idx + 1].name}
            </Text>
          </Pressable>
        )}
      </View>
    </Screen>
  );
}
