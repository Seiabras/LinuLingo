import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Card, Chip, SpeakButton } from './ui';
import { CulturalGrammarCard } from './CulturalGrammarCard';
import { useApp } from '@/services/app-state';
import type { LanguageVariant } from '@/data/types';

/** «Romeno da Moldávia» → «Moldávia» (o nome do lugar). */
function shortName(name: string): string {
  return name.replace(/^\S+ d[aoe]s? /, '');
}

/** O que muda numa variante nacional (ex.: Moldávia): resumo, cartão, pronúncia, vocabulário e histórias. */
export function VariantDetails({ v }: { v: LanguageVariant }) {
  const { pack } = useApp();
  const standard = pack.variants?.[0] ?? v;

  return (
    <View className="gap-3">
      <Chip label={v.kind === 'variante' ? '🔤 variante (forma escrita diferente)' : '🌍 dialeto (país/região)'} tone={v.kind === 'variante' ? 'blue' : 'amber'} />
      {v.summary && <Text className="text-sm text-slate-600 dark:text-slate-400">{v.summary}</Text>}

      {v.card && <CulturalGrammarCard card={v.card} locale={pack.speechLocale} />}

      {v.pronunciation && v.pronunciation.length > 0 && (
        <Card className="gap-2">
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">🗣️ Como soa em {shortName(v.name)}</Text>
          {v.pronunciation.map((p) => (
            <Text key={p} className="text-base leading-6 text-slate-800 dark:text-slate-200">
              • {p}
            </Text>
          ))}
        </Card>
      )}

      {v.vocab && v.vocab.length > 0 && (
        <Card className="gap-2">
          <Text className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {standard.flag} Padrão × {v.flag} {shortName(v.name)} · {v.vocab.length} palavras
          </Text>
          {v.vocab.map(([std, loc, pt, note]) => (
            <View key={`${std}-${loc}`} className="flex-row items-center gap-2 border-b border-slate-100 py-1.5 dark:border-slate-800">
              <View className="flex-1">
                <Text className="text-base text-slate-500 dark:text-slate-400">
                  {std} → <Text className="font-bold text-slate-900 dark:text-white">{loc}</Text>
                </Text>
                <Text className="text-xs text-slate-500 dark:text-slate-400">
                  {pt}
                  {note ? ` · ${note}` : ''}
                </Text>
              </View>
              <SpeakButton text={loc} locale={pack.speechLocale} size={14} />
            </View>
          ))}
        </Card>
      )}

      {v.stories && v.stories.length > 0 && (
        <View className="gap-2">
          {v.stories.map((s) => (
            <Pressable key={s.id} onPress={() => router.push(`/historia/${s.id}`)} className="flex-row items-center gap-3 rounded-2xl bg-white p-3 active:opacity-80 dark:bg-slate-900">
              <Text className="text-2xl">{s.emoji}</Text>
              <View className="flex-1">
                <Text className="font-bold text-slate-900 dark:text-white">{s.title}</Text>
                <Text className="text-xs text-slate-500 dark:text-slate-400">{s.summary}</Text>
              </View>
              <Chip label={s.level} tone="blue" />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}
