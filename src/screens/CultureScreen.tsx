import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { Screen, Card, SpeechBubble, SpeakButton } from '@/components/ui';
import { CulturalGrammarCard } from '@/components/CulturalGrammarCard';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { FAUNA_MUSICA, HOMELANDS } from '@/data/fauna-musica';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { VariantPanel } from '@/components/VariantPanel';
import { AccentsPanel } from '@/components/AccentsPanel';

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

      <Pressable onPress={() => router.push('/mapa')} className="mt-3 flex-row items-center gap-3 rounded-2xl bg-conecta p-4 active:opacity-90">
        <Text className="text-2xl">🗺️</Text>
        <View className="flex-1">
          <Text className="font-extrabold text-white">Onde se fala</Text>
          <Text className="text-sm text-blue-100">Mapa-múndi clicável: países, regiões, animais e instrumentos</Text>
        </View>
        <Text className="text-xl text-white">›</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/historias')} className="mt-3 flex-row items-center gap-3 rounded-2xl border-2 border-conecta/30 bg-white p-4 active:opacity-80 dark:bg-slate-900">
        <Text className="text-2xl">📚</Text>
        <Text className="flex-1 font-semibold text-slate-800 dark:text-slate-100">Histórias interativas: a cultura de quem fala {pack.name.toLowerCase()}, vivida pelo Linu, com vários finais.</Text>
        <Text className="text-xl text-conecta">›</Text>
      </Pressable>

      {(pack.variants?.length ?? 0) > 1 && (
        <>
          <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">🌍 Variantes do {pack.name.toLowerCase()}</Text>
          <VariantPanel />
        </>
      )}

      {(pack.accents?.length ?? 0) > 0 && (
        <>
          <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">🗣️ Sotaques e dialetos</Text>
          <AccentsPanel />
        </>
      )}

      <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">🐾🎵 Bichos e sons</Text>
      <View className="gap-3">
        {(HOMELANDS[pack.code] ?? []).map((iso) => {
          const n = FAUNA_MUSICA[iso];
          const c = WORLD.find((w) => w.iso === iso);
          if (!n || !c) return null;
          return (
            <Card key={iso} className="gap-3">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
                {flagOf(c.iso2)} {c.name}
              </Text>
              {[...n.animals, ...n.instruments].map((it) => (
                <View key={it.name} className="flex-row gap-3">
                  <Text className="text-3xl">{it.emoji}</Text>
                  <View className="flex-1 gap-0.5">
                    <View className="flex-row flex-wrap items-center gap-2">
                      <Text className="font-bold text-slate-900 dark:text-white">{it.name}</Text>
                      {it.local && <Text className="italic text-conecta">{it.local}</Text>}
                      {it.local && <SpeakButton text={it.local} locale={pack.speechLocale} size={14} />}
                    </View>
                    <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{it.fact}</Text>
                  </View>
                </View>
              ))}
            </Card>
          );
        })}
      </View>

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
