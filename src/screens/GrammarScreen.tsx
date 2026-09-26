import { useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Search } from 'lucide-react-native';
import { Screen, Chip, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { SUBLEVELS } from '@/types';

/** Aba Gramática: tópicos por subnível (A1.1 … C2), com busca. */
export default function GrammarScreen() {
  const { pack } = useApp();
  const dark = useIsDark();
  const [q, setQ] = useState('');

  const groups = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = term
      ? pack.grammar.filter((g) => `${g.title} ${g.summary}`.toLowerCase().includes(term) || g.sections.some((s) => `${s.heading ?? ''} ${s.text ?? ''}`.toLowerCase().includes(term)))
      : pack.grammar;
    return SUBLEVELS.map((lv) => ({ lv, items: list.filter((g) => g.level === lv) })).filter((g) => g.items.length);
  }, [pack.grammar, q]);

  return (
    <Screen>
      <Text className="pt-3 text-2xl font-extrabold text-slate-900 dark:text-white">📐 Gramática</Text>
      <View className="mt-3 flex-row items-end gap-2">
        <Linu mood="pensando" size={64} animate={false} />
        <SpeechBubble className="mb-5">A gramática do {pack.name.toLowerCase()} explicada para quem fala português, do A1.1 ao C2. Cada tópico tem exemplos com áudio, IPA e um mini-quiz.</SpeechBubble>
      </View>

      <View className="flex-row items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900">
        <Search size={18} color={dark ? '#64748B' : '#94A3B8'} />
        <TextInput value={q} onChangeText={setQ} placeholder="Buscar: artigo, passado, dativo…" placeholderTextColor="#94A3B8" className="flex-1 py-3 text-base text-slate-900 dark:text-white" />
      </View>

      {groups.length === 0 && <Text className="py-8 text-center text-slate-500">Nenhum tópico encontrado.</Text>}
      {groups.map(({ lv, items }) => (
        <View key={lv} className="mt-5">
          <View className="mb-2 flex-row items-center gap-2">
            <Chip label={lv} tone={lv.startsWith('A') ? 'green' : lv.startsWith('B') ? 'blue' : 'orange'} />
            <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
          </View>
          <View className="gap-2">
            {items.map((g) => (
              <Pressable
                key={g.id}
                accessibilityRole="button"
                onPress={() => router.push(`/gramatica/${g.id}`)}
                className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
              >
                <Text className="text-3xl">{g.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-base font-extrabold text-slate-900 dark:text-white">{g.title}</Text>
                  <Text className="text-sm text-slate-600 dark:text-slate-400">{g.summary}</Text>
                </View>
                <Text className="text-xl text-slate-400">›</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </Screen>
  );
}
