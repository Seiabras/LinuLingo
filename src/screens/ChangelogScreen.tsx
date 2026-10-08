import { useMemo, useState } from 'react';
import { Pressable, SectionList, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { Card, Chip } from '@/components/ui';
import { RELEASES, type ChangelogRelease } from '@/data/changelog';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

/** Divide em trechos **negrito** (markdown leve) pra destacar os pontos-chave de cada item. */
function BoldText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <Text className={className}>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <Text key={i} className="font-extrabold">
            {part.slice(2, -2)}
          </Text>
        ) : (
          part
        ),
      )}
    </Text>
  );
}

const fmtDate = (iso: string) => {
  const m = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})$/.exec(iso);
  if (!m) return iso;
  const [, y, mo, day, h, mi] = m;
  return `${day}/${mo}/${y} ${h}:${mi} (horário de São Paulo)`;
};

interface ReleaseSection {
  title: string;
  release: ChangelogRelease;
  data: string[];
}

function toSections(list: ChangelogRelease[]): ReleaseSection[] {
  return list.map((release) => ({ title: release.v, release, data: release.items }));
}

/**
 * Mapa de atualizações do LinuLingo: lista curada à mão em src/data/changelog.ts (mesmo formato
 * do changelog do NeuroSim) — uma entrada por marco real, com título e o porquê de cada mudança,
 * não um dump do histórico do git.
 */
export default function ChangelogScreen() {
  const dark = useIsDark();
  const [q, setQ] = useState('');
  const t = q.trim().toLowerCase();
  const list = useMemo(
    () =>
      t
        ? RELEASES.filter(
            (r) => r.title.toLowerCase().includes(t) || r.items.some((i) => i.toLowerCase().includes(t)),
          )
        : RELEASES,
    [t],
  );
  const sections = useMemo(() => toSections(list), [list]);

  return (
    <SafeAreaView className="flex-1 bg-suave dark:bg-grafite">
      <View className="flex-1 px-4">
        <View className="flex-row items-center gap-3 pt-3">
          <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
            <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
          </Pressable>
          <Text className="flex-1 text-2xl font-extrabold text-slate-900 dark:text-white">🗓️ Atualizações</Text>
          <Chip label={`${RELEASES.length}`} tone="slate" />
        </View>
        <Text className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Os marcos de cada versão, o que mudou e por quê.
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
          keyExtractor={(item, index) => `${item.slice(0, 24)}-${index}`}
          stickySectionHeadersEnabled
          contentContainerStyle={{ paddingBottom: 24, gap: 8 }}
          renderSectionHeader={({ section }) => (
            <View className="gap-0.5 bg-suave py-1.5 dark:bg-grafite">
              <View className="flex-row items-baseline gap-2">
                <Text className="text-sm font-extrabold text-conecta">v{section.release.v}</Text>
                <Text className="text-xs text-slate-500 dark:text-slate-400">{fmtDate(section.release.date)}</Text>
              </View>
              <Text className="text-base font-bold text-slate-900 dark:text-white">{section.release.title}</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <Card className="mb-2">
              <BoldText text={item} className="text-sm leading-5 text-slate-800 dark:text-slate-100" />
            </Card>
          )}
          ListEmptyComponent={<Text className="mt-4 text-center text-slate-500 dark:text-slate-400">Nenhuma atualização com esse termo.</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
