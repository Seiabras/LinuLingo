import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { Screen, Card, SpeechBubble } from '@/components/ui';
import { CulturalGrammarCard } from '@/components/CulturalGrammarCard';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';

/** Cultura & História: a genealogia do idioma e os cards «aprenda primeiro» de cada unidade. */
export default function CultureScreen() {
  const { pack } = useApp();
  const dark = useIsDark();
  const [open, setOpen] = useState<string | null>(pack.units[0]?.id ?? null);
  const chain = [pack.lineage.family, ...pack.lineage.branches, pack.name];

  return (
    <Screen>
      <Text className="pt-3 text-2xl font-extrabold text-slate-900 dark:text-white">🏛️ Cultura & História</Text>

      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} animate={false} />
        <SpeechBubble className="mb-5">Toda palavra tem uma história. Conhecer a origem ajuda a lembrar!</SpeechBubble>
      </View>

      <Card className="mt-2 gap-3">
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">🌳 Família do {pack.name.toLowerCase()}</Text>
        <View className="gap-0">
          {chain.map((node, i) => (
            <View key={node} style={{ paddingLeft: i * 14 }} className="flex-row items-center gap-2 py-1">
              {i > 0 && <Text className="text-slate-400">└</Text>}
              <Text className={`${i === chain.length - 1 ? 'rounded-lg bg-conecta px-2 py-0.5 font-extrabold text-white' : 'font-semibold text-slate-700 dark:text-slate-300'}`}>
                {i === chain.length - 1 ? `${pack.flag} ${node}` : node}
              </Text>
            </View>
          ))}
        </View>
        <Text className="text-sm text-slate-600 dark:text-slate-400">📍 Origem: {pack.lineage.region}</Text>
        <Text className="text-sm text-slate-600 dark:text-slate-400">✍️ Escrita: {pack.lineage.writing}</Text>
      </Card>

      <Pressable onPress={() => router.push('/historias')} className="mt-3 flex-row items-center gap-3 rounded-2xl border-2 border-conecta/30 bg-white p-4 active:opacity-80 dark:bg-slate-900">
        <Text className="text-2xl">📚</Text>
        <Text className="flex-1 font-semibold text-slate-800 dark:text-slate-100">Histórias interativas: cultura romena vivida pelo Linu, com vários finais.</Text>
        <Text className="text-xl text-conecta">›</Text>
      </Pressable>

      <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Cards das unidades</Text>
      <View className="gap-3">
        {pack.units.map((u) => {
          const isOpen = open === u.id;
          return (
            <View key={u.id}>
              <Pressable
                accessibilityRole="button"
                accessibilityState={{ expanded: isOpen }}
                onPress={() => setOpen(isOpen ? null : u.id)}
                className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
              >
                <Text className="text-2xl">{u.card.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-xs font-bold text-conecta">
                    {u.cefr} · {u.title}
                  </Text>
                  <Text className="font-bold text-slate-900 dark:text-white">{u.card.title}</Text>
                </View>
                {isOpen ? <ChevronUp size={20} color={dark ? '#94A3B8' : '#64748B'} /> : <ChevronDown size={20} color={dark ? '#94A3B8' : '#64748B'} />}
              </Pressable>
              {isOpen && (
                <View className="mt-2">
                  <CulturalGrammarCard card={u.card} locale={pack.speechLocale} />
                </View>
              )}
            </View>
          );
        })}
      </View>
    </Screen>
  );
}
