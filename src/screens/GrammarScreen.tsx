import { useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Search } from 'lucide-react-native';
import { Screen, Chip, SectionTitle, SpeechBubble } from '@/components/ui';
import { LinuAmigo } from '@/components/LinuAmigo';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import { FieldGuideCard } from '@/components/FieldGuideCard';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { SUBLEVELS } from '@/types';
import { AREAS } from '@/data/linguistica';
import { LESSONS } from '@/data/linguistica-aulas';
import { nomeIdioma } from '@/services/idioma-nome';
import { alvoDoTour } from '@/services/tour';

/** Aba Gramática: tópicos por subnível (A1.1 … C2), com busca. */
export default function GrammarScreen() {
  const { pack } = useApp();
  const dark = useIsDark();
  const [q, setQ] = useState('');
  const [mode, setMode] = useState<'nivel' | 'area'>('nivel');

  const groups = useMemo(() => {
    const term = q.trim().toLowerCase();
    const list = term
      ? pack.grammar.filter(
          (g) =>
            `${g.title} ${g.summary}`.toLowerCase().includes(term) || g.sections.some((s) => `${s.heading ?? ''} ${s.text ?? ''}`.toLowerCase().includes(term)),
        )
      : pack.grammar;
    return SUBLEVELS.map((lv) => ({ lv, items: list.filter((g) => g.level === lv) })).filter((g) => g.items.length);
  }, [pack.grammar, q]);

  return (
    <Screen background={<FieldNotebookBackground variant="gelo" />}>
      <Text className="pt-3 text-2xl font-extrabold text-slate-900 dark:text-white">📐 Gramática</Text>
      <FieldGuideCard label="DEDÉ EXPLICA" className="mb-5 mt-3">
        <View className="flex-row items-end gap-2">
          <LinuAmigo id="adelia" size={64} />
          <SpeechBubble>
            Gramática é que nem pedrinha: eu junto uma regrinha de cada vez! Vem comigo entender o {nomeIdioma(pack.name)}, do A1.1 ao C2 — cada tópico tem exemplos com áudio, IPA e um mini-quiz.
          </SpeechBubble>
        </View>
      </FieldGuideCard>

      <View ref={alvoDoTour('gramatica-modos')} className="mb-3 flex-row rounded-2xl bg-slate-200 p-1 dark:bg-slate-800">
        {(
          [
            ['nivel', 'Por nível'],
            ['area', 'Por área da língua'],
          ] as const
        ).map(([k, label]) => (
          <Pressable
            key={k}
            accessibilityRole="tab"
            accessibilityState={{ selected: mode === k }}
            onPress={() => setMode(k)}
            className={`flex-1 items-center rounded-xl py-2 ${mode === k ? 'bg-white dark:bg-slate-950' : ''}`}
          >
            <Text className={`text-sm font-bold ${mode === k ? 'text-conecta dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>

      {mode === 'area' && (
        <View className="gap-2">
          <Text className="text-sm text-slate-600 dark:text-slate-400">
            Linguística: a ciência da linguagem. As 7 áreas mostram como funciona o {nomeIdioma(pack.name)}; as ferramentas e os grandes temas valem para
            todas as línguas.
          </Text>
          <SectionTitle>🧭 As 7 áreas da língua</SectionTitle>
          {AREAS.map((a) => {
            const data = pack.linguistics?.find((l) => l.area === a.id);
            return (
              <Pressable
                key={a.id}
                accessibilityRole="button"
                accessibilityLabel={`Área: ${a.name}`}
                onPress={() => router.push(`/linguistica/${a.id}`)}
                className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
              >
                <Text className="text-3xl">{a.emoji}</Text>
                <View className="flex-1">
                  <Text className="text-base font-extrabold text-slate-900 dark:text-white">{a.name}</Text>
                  <Text className="text-sm text-slate-600 dark:text-slate-400">{a.question}</Text>
                  {data && data.topics.length > 0 && (
                    <Text className="mt-0.5 text-xs font-semibold text-conecta dark:text-blue-400">{data.topics.length} tópicos de gramática</Text>
                  )}
                </View>
                <Text className="text-xl text-slate-500 dark:text-slate-400">›</Text>
              </Pressable>
            );
          })}

          <SectionTitle>🛠️ Ferramentas e normas</SectionTitle>
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push('/linguistica/ipa')}
            className="flex-row items-center gap-3 rounded-2xl bg-conecta p-4 active:opacity-80"
          >
            <Text className="text-3xl">🔤</Text>
            <View className="flex-1">
              <Text className="text-base font-extrabold text-white">Quadro interativo do IPA</Text>
              <Text className="text-sm text-blue-50">Cada som, como se faz e exemplos em 5 línguas</Text>
            </View>
          </Pressable>
          {LESSONS.filter((l) => l.group === 'ferramentas').map((l) => (
            <LessonRow key={l.id} emoji={l.emoji} title={l.title} summary={l.summary} id={l.id} />
          ))}

          <SectionTitle>🌍 Grandes temas da linguística</SectionTitle>
          {LESSONS.filter((l) => l.group === 'temas').map((l) => (
            <LessonRow key={l.id} emoji={l.emoji} title={l.title} summary={l.summary} id={l.id} />
          ))}
        </View>
      )}
      {mode === 'nivel' && (
        <>
          <View className="flex-row items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900">
            <Search size={18} color={dark ? '#64748B' : '#94A3B8'} />
            <TextInput
              value={q}
              onChangeText={setQ}
              placeholder="Buscar: artigo, passado, dativo…"
              placeholderTextColor="#94A3B8"
              className="flex-1 py-3 text-base text-slate-900 dark:text-white"
            />
          </View>

          {groups.length === 0 && <Text className="py-8 text-center text-slate-600 dark:text-slate-400">Nenhum tópico encontrado.</Text>}
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
                    <Text className="text-xl text-slate-500 dark:text-slate-400">›</Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </>
      )}
    </Screen>
  );
}

function LessonRow({ id, emoji, title, summary }: { id: string; emoji: string; title: string; summary: string }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Aula: ${title}`}
      onPress={() => router.push(`/linguistica/aula/${id}`)}
      className="flex-row items-center gap-3 rounded-2xl bg-white p-4 active:opacity-80 dark:bg-slate-900"
    >
      <Text className="text-3xl">{emoji}</Text>
      <View className="flex-1">
        <Text className="text-base font-extrabold text-slate-900 dark:text-white">{title}</Text>
        <Text numberOfLines={2} className="text-sm text-slate-600 dark:text-slate-400">
          {summary}
        </Text>
      </View>
      <Text className="text-xl text-slate-500 dark:text-slate-400">›</Text>
    </Pressable>
  );
}
