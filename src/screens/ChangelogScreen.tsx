import { useMemo, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { Card, Chip } from '@/components/ui';
import { CHANGELOG } from '@/data/changelog';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

const fmt = (iso: string) =>
  new Date(iso).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

/**
 * Lista de atualizações do app, gerada do histórico do git (scripts/gerar-changelog.mjs): a hora
 * de cada commit, sempre no fuso de São Paulo, e o resumo da mensagem.
 */
export default function ChangelogScreen() {
  const dark = useIsDark();
  const [q, setQ] = useState('');
  const t = q.trim().toLowerCase();
  const list = useMemo(() => (t ? CHANGELOG.filter((e) => e.summary.toLowerCase().includes(t)) : CHANGELOG), [t]);

  return (
    <SafeAreaView className="flex-1 bg-suave dark:bg-grafite">
      <View className="flex-1 px-4">
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🗓️ Atualizações</Text>
          <Chip label={`${CHANGELOG.length}`} tone="slate" />
        </View>
        <Text className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Cada atualização de verdade do app, com a hora exata de São Paulo. Gerado direto do histórico do projeto.
        </Text>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Buscar numa atualização…"
          placeholderTextColor={dark ? '#64748B' : '#94A3B8'}
          className="mt-3 rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
        <FlatList
          className="mt-3"
          data={list}
          keyExtractor={(e) => e.date}
          contentContainerStyle={{ paddingBottom: 24, gap: 8 }}
          renderItem={({ item }) => (
            <Card className="gap-0.5">
              <Text className="text-xs font-bold uppercase tracking-wide text-conecta">{fmt(item.date)}</Text>
              <Text className="text-sm leading-5 text-slate-800 dark:text-slate-100">{item.summary}</Text>
            </Card>
          )}
          ListEmptyComponent={<Text className="mt-4 text-center text-slate-500 dark:text-slate-400">Nenhuma atualização com esse termo.</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
