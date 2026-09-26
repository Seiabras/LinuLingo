import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Screen, Chip, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';

/** Lista de cenários de conversa guiada, com persona e registro social. */
export default function ConversationScreen() {
  const { pack } = useApp();
  return (
    <Screen>
      <Text className="pt-3 text-2xl font-extrabold text-slate-900 dark:text-white">💬 Conversação</Text>

      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="falando" size={70} />
        <SpeechBubble className="mb-6">
          Escolha uma situação. Eu fico do seu lado avisando se a resposta fez sentido e se o tom (formal ou informal) combinou!
        </SpeechBubble>
      </View>

      <View className="mt-2 gap-3">
        {pack.scenarios.map((s) => (
          <Pressable
            key={s.id}
            accessibilityRole="button"
            onPress={() => router.push(`/cenario/${s.id}`)}
            className="flex-row items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-4 active:opacity-80 dark:border-slate-700 dark:bg-slate-900"
          >
            <Text className="text-4xl">{s.emoji}</Text>
            <View className="flex-1 gap-1">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{s.title}</Text>
              <Text className="text-sm text-slate-600 dark:text-slate-400">{s.description}</Text>
              <View className="mt-1 flex-row flex-wrap gap-1.5">
                <Chip label={s.cefr} tone="blue" />
                <Chip label={s.register === 'formal' ? '🎩 formal' : '🤙 informal'} tone={s.register === 'formal' ? 'amber' : 'green'} />
                <Chip label={s.persona} />
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <Text className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
        As conversas seguem roteiros com várias respostas aceitas e funcionam sem internet. Conversa livre com IA generativa é o próximo passo.
      </Text>
    </Screen>
  );
}
