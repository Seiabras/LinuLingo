import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Chip, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { storyEndings } from '@/database/queries';
import { endingIds } from '@/services/stories';
import { goBack } from '@/services/nav';
import { SUBLEVELS } from '@/types';
import { useIsDark } from '@/services/theme';

/** Lista das histórias interativas, com os finais já descobertos. */
export default function StoriesScreen() {
  const { db, pack } = useApp();
  const dark = useIsDark();
  const [found, setFound] = useState<Map<string, Set<string>>>(new Map());

  useFocusEffect(
    useCallback(() => {
      storyEndings(db).then(setFound);
    }, [db]),
  );

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">📚 Histórias</Text>
      </View>

      <View className="mt-4 flex-row items-end gap-2">
        <Linu mood="falando" size={70} />
        <SpeechBubble className="mb-6">Você decide o que eu faço! Leia em romeno e escolha. Cada história tem mais de um final… consegue achar todos?</SpeechBubble>
      </View>

      {SUBLEVELS.map((lv) => {
        const list = pack.stories.filter((s) => s.level === lv);
        if (!list.length) return null;
        return (
          <View key={lv} className="mt-5">
            <View className="mb-2 flex-row items-center gap-2">
              <Chip label={lv} tone={lv.startsWith('A') ? 'green' : lv.startsWith('B') ? 'blue' : 'orange'} />
              <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
            </View>
            <View className="gap-3">
              {list.map((s) => {
                const total = endingIds(s).length;
                const got = found.get(s.id)?.size ?? 0;
                return (
                  <Pressable
                    key={s.id}
                    accessibilityRole="button"
                    onPress={() => router.push(`/historia/${s.id}`)}
                    className="flex-row items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-4 active:opacity-80 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <Text className="text-4xl">{s.emoji}</Text>
                    <View className="flex-1 gap-1">
                      <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{s.title}</Text>
                      <Text className="text-sm text-slate-600 dark:text-slate-400">{s.summary}</Text>
                      <View className="mt-1 flex-row flex-wrap gap-1.5">
                        <Chip label={`${got}/${total} finais`} tone={got === total ? 'green' : got ? 'amber' : 'slate'} />
                        {got === 0 && <Chip label="nova" tone="orange" />}
                      </View>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        );
      })}
    </Screen>
  );
}
