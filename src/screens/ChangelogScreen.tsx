import { useMemo, useState } from 'react';
import { Pressable, SectionList, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { Card, Chip } from '@/components/ui';
import { CHANGELOG, type ChangelogEntry } from '@/data/changelog';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

const fmtTime = (iso: string) =>
  new Date(iso).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit' });

const fmtDay = (iso: string) =>
  new Date(iso).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: 'short', year: 'numeric' });

interface VersionSection {
  title: string;
  version: string;
  day: string;
  data: ChangelogEntry[];
}

/** Agrupa a lista (já ordenada do commit mais novo pro mais antigo) por versão — como vem do
 * gerador, cada versão é um bloco contíguo, então um passe único já separa certo. */
function groupByVersion(list: ChangelogEntry[]): VersionSection[] {
  const sections: VersionSection[] = [];
  for (const entry of list) {
    const last = sections[sections.length - 1];
    if (last?.version === entry.version) {
      last.data.push(entry);
    } else {
      sections.push({ title: entry.version, version: entry.version, day: fmtDay(entry.date), data: [entry] });
    }
  }
  return sections;
}

/**
 * Lista de atualizações do app, gerada do histórico do git (scripts/gerar-changelog.mjs) e
 * organizada por versão: um bloco por dia de São Paulo com commit de verdade (v1.0.0 é o mais
 * antigo), cada um com a hora exata dos commits daquele dia e o resumo de cada um.
 */
export default function ChangelogScreen() {
  const dark = useIsDark();
  const [q, setQ] = useState('');
  const t = q.trim().toLowerCase();
  const list = useMemo(() => (t ? CHANGELOG.filter((e) => e.summary.toLowerCase().includes(t)) : CHANGELOG), [t]);
  const sections = useMemo(() => groupByVersion(list), [list]);

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
          Cada versão é um dia de atualizações de verdade, com a hora exata de São Paulo. Gerado direto do histórico do projeto.
        </Text>
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Buscar numa atualização…"
          placeholderTextColor={dark ? '#64748B' : '#94A3B8'}
          className="mt-3 rounded-xl border-2 border-slate-200 bg-white px-4 py-2.5 text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
        <SectionList
          className="mt-3"
          sections={sections}
          keyExtractor={(e) => e.date}
          stickySectionHeadersEnabled
          contentContainerStyle={{ paddingBottom: 24, gap: 8 }}
          renderSectionHeader={({ section }) => (
            <View className="flex-row items-baseline gap-2 bg-suave py-1.5 dark:bg-grafite">
              <Text className="text-sm font-extrabold text-conecta">v{section.version}</Text>
              <Text className="text-xs text-slate-500 dark:text-slate-400">{section.day}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <Card className="mb-2 gap-0.5">
              <Text className="text-xs font-bold uppercase tracking-wide text-conecta">{fmtTime(item.date)}</Text>
              <Text className="text-sm leading-5 text-slate-800 dark:text-slate-100">{item.summary}</Text>
            </Card>
          )}
          ListEmptyComponent={<Text className="mt-4 text-center text-slate-500 dark:text-slate-400">Nenhuma atualização com esse termo.</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
