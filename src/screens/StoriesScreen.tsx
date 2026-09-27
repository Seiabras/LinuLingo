import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Screen, Chip, SpeechBubble } from '@/components/ui';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { completedLessons, storyEndings, vocabByWords } from '@/database/queries';
import { canRead, endingIds, readingFit, type ReadingFit } from '@/services/stories';
import { buildPath, currentUnit } from '@/services/curriculum';
import { goBack } from '@/services/nav';
import { SUBLEVELS, type SubLevel } from '@/types';
import { useIsDark } from '@/services/theme';
import { nomeIdioma } from '@/services/idioma-nome';
import { articlesOf } from '@/data/artigos';
import { loadArticlesRead, type ArticlesRead } from '@/services/articles';

const FIT_CHIP: Record<ReadingFit, { label: string; tone: 'green' | 'blue' | 'slate' | 'amber' }> = {
  'no-nivel': { label: '✓ no seu nível', tone: 'green' },
  desafio: { label: '⬆ desafio: o próximo nível', tone: 'blue' },
  revisao: { label: 'revisão', tone: 'slate' },
  acima: { label: '🔒 acima do seu nível', tone: 'amber' },
};

/**
 * Leituras graduadas: as histórias interativas por subnível. O nível do aluno é o da trilha; as do
 * nível e as de baixo ficam abertas, a do subnível seguinte é um desafio, e as de cima esperam a
 * trilha chegar lá (o vocabulário e a gramática delas ainda não foram vistos).
 */
export default function StoriesScreen() {
  const { db, pack } = useApp();
  const dark = useIsDark();
  const [found, setFound] = useState<Map<string, Set<string>>>(new Map());
  const [level, setLevel] = useState<SubLevel>(SUBLEVELS[0]);
  const [studied, setStudied] = useState<Set<string>>(new Set());
  const [read, setRead] = useState<ArticlesRead>({});
  const { aba } = useLocalSearchParams<{ aba?: string }>();
  const tab = aba === 'artigos' ? 'artigos' : 'historias';
  const articles = articlesOf(pack.code);

  useFocusEffect(
    useCallback(() => {
      storyEndings(db).then(setFound);
      completedLessons(db).then((done) => setLevel(currentUnit(buildPath(pack, done))?.level ?? SUBLEVELS[0]));
      // as palavras-chave de cada história que o aluno já estudou (estão no SRS)
      const words = [...new Set(pack.stories.flatMap((st) => st.glossary.map(([w]) => w)))];
      vocabByWords(db, pack.code, words).then((rows) => setStudied(new Set(rows.filter((r) => r.next_review_date).map((r) => r.word_target))));
      loadArticlesRead(db).then(setRead);
    }, [db, pack]),
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
        <SpeechBubble className="mb-6">Você decide o que eu faço! Leia em {nomeIdioma(pack.name)} e escolha. Cada história tem mais de um final… consegue achar todos?</SpeechBubble>
      </View>

      <View className="mt-3 flex-row items-center gap-3 rounded-2xl bg-conecta-light p-3 dark:bg-blue-950">
        <Text className="text-2xl">📏</Text>
        <Text className="flex-1 text-sm leading-5 text-slate-800 dark:text-slate-200">
          Seu nível na trilha: <Text className="font-extrabold">{level}</Text>. As leituras do seu nível e as de baixo estão abertas; a do nível seguinte é um desafio. As de cima abrem quando a trilha chegar lá.
        </Text>
      </View>

      {articles.length > 0 && (
        <View className="mt-4 flex-row gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800" accessibilityRole="tablist">
          {(
            [
              ['historias', '📖 Histórias'],
              ['artigos', '📰 Artigos'],
            ] as const
          ).map(([id, label]) => (
            <Pressable
              key={id}
              accessibilityRole="tab"
              accessibilityState={{ selected: tab === id }}
              aria-selected={tab === id}
              onPress={() => router.setParams({ aba: id })}
              className={`flex-1 items-center rounded-xl py-2 ${tab === id ? 'bg-white shadow-sm dark:bg-slate-950' : ''}`}
            >
              <Text className={`font-bold ${tab === id ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{label}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {tab === 'artigos' &&
        SUBLEVELS.map((lv) => {
          const list = articles.filter((a) => a.level === lv);
          if (!list.length) return null;
          return (
            <View key={lv} className="mt-5">
              <View className="mb-2 flex-row items-center gap-2">
                <Chip label={lv} tone={lv.startsWith('A') ? 'green' : lv.startsWith('B') ? 'blue' : 'orange'} />
                {lv === level && <Text className="text-xs font-extrabold text-conecta">← você está aqui</Text>}
                <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
              </View>
              <View className="gap-3">
                {list.map((a) => {
                  const fit = readingFit(a.level, level);
                  const open = canRead(fit);
                  const r = read[a.id];
                  return (
                    <Pressable
                      key={a.id}
                      accessibilityRole="button"
                      accessibilityState={{ disabled: !open }}
                      accessibilityLabel={`Artigo: ${a.title}. ${open ? FIT_CHIP[fit].label : `Bloqueado: chegue ao ${a.level} na trilha`}`}
                      disabled={!open}
                      onPress={() => router.push(`/artigo/${a.id}`)}
                      className={`flex-row items-center gap-4 rounded-2xl border-2 bg-white p-4 active:opacity-80 dark:bg-slate-900 ${fit === 'no-nivel' ? 'border-conquista/60' : 'border-slate-200 dark:border-slate-700'} ${open ? '' : 'opacity-60'}`}
                    >
                      <Text className="text-4xl">{a.emoji}</Text>
                      <View className="flex-1 gap-1">
                        <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{a.title}</Text>
                        <View className="flex-row flex-wrap gap-1.5">
                          <Chip label={open ? FIT_CHIP[fit].label : `🔒 chegue ao ${a.level} na trilha`} tone={FIT_CHIP[fit].tone} />
                          {r ? <Chip label={`✓ lido · ${r.hits}/${r.total}`} tone="green" /> : open && <Chip label="novo" tone="orange" />}
                          {a.glossary.length > 0 && <Chip label={`${a.glossary.length} ${a.glossary.length === 1 ? 'palavra nova' : 'palavras novas'}`} tone="slate" />}
                        </View>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          );
        })}

      {tab === 'historias' && SUBLEVELS.map((lv) => {
        const list = pack.stories.filter((s) => s.level === lv);
        if (!list.length) return null;
        return (
          <View key={lv} className="mt-5">
            <View className="mb-2 flex-row items-center gap-2">
              <Chip label={lv} tone={lv.startsWith('A') ? 'green' : lv.startsWith('B') ? 'blue' : 'orange'} />
              {lv === level && <Text className="text-xs font-extrabold text-conecta">← você está aqui</Text>}
              <View className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
            </View>
            <View className="gap-3">
              {list.map((s) => {
                const total = endingIds(s).length;
                const got = found.get(s.id)?.size ?? 0;
                const fit = readingFit(s.level, level);
                const open = canRead(fit);
                const fresh = s.glossary.filter(([w]) => !studied.has(w)).length;
                return (
                  <Pressable
                    key={s.id}
                    accessibilityRole="button"
                    accessibilityState={{ disabled: !open }}
                    accessibilityLabel={`${s.title}. ${open ? FIT_CHIP[fit].label : `Bloqueada: chegue ao ${s.level} na trilha`}`}
                    disabled={!open}
                    onPress={() => router.push(`/historia/${s.id}`)}
                    className={`flex-row items-center gap-4 rounded-2xl border-2 bg-white p-4 active:opacity-80 dark:bg-slate-900 ${fit === 'no-nivel' ? 'border-conquista/60' : 'border-slate-200 dark:border-slate-700'} ${open ? '' : 'opacity-60'}`}
                  >
                    <Text className="text-4xl">{s.emoji}</Text>
                    <View className="flex-1 gap-1">
                      <Text className="text-lg font-extrabold text-slate-900 dark:text-white">{s.title}</Text>
                      <Text className="text-sm text-slate-600 dark:text-slate-400">{s.summary}</Text>
                      <View className="mt-1 flex-row flex-wrap gap-1.5">
                        <Chip label={open ? FIT_CHIP[fit].label : `🔒 chegue ao ${s.level} na trilha`} tone={FIT_CHIP[fit].tone} />
                        <Chip label={`${got}/${total} finais`} tone={got === total ? 'green' : got ? 'amber' : 'slate'} />
                        {got === 0 && open && <Chip label="nova" tone="orange" />}
                        {open && fresh > 0 && <Chip label={`${fresh} ${fresh === 1 ? 'palavra-chave nova' : 'palavras-chave novas'}`} tone="slate" />}
                        {s.variant && <Chip label={`${pack.variants?.find((v) => v.code === s.variant)?.flag ?? ''} ${pack.variants?.find((v) => v.code === s.variant)?.name ?? s.variant}`} tone="blue" />}
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
