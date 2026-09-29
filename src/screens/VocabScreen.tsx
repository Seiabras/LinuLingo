import { useCallback, useMemo, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import { Button, Card, Chip, GENDER_LABEL, ProgressBar, SpeakButton, Ipa } from '@/components/ui';
import { hasWordImage, WordImage } from '@/components/WordImage';
import { useApp } from '@/services/app-state';
import { categoryStats, listEtymology, listVocab, vocabStats } from '@/database/queries';
import { cefrFromMastered } from '@/services/progress';
import { isDue } from '@/srs/sm2';
import { VOCAB_TARGET_TOTAL } from '@/data/types';
import type { Cognate, VocabWithSRS } from '@/types';
import { useIsDark } from '@/services/theme';
import { hasNativeClip } from '@/services/speech';
import { nomeIdioma } from '@/services/idioma-nome';

type Tab = 'frequencia' | 'categorias' | 'etimologia';
type Ety = Awaited<ReturnType<typeof listEtymology>>[number];

const CATEGORY_EMOJI: Record<string, string> = {
  Essenciais: '⭐', 'Verbos-chave': '🏃', Pessoas: '🧑‍🤝‍🧑', Tempo: '⏰', Casa: '🏠', Sentimentos: '❤️',
  Natureza: '🌿', 'Viagens e Transporte': '✈️', 'Alimentação e Restaurantes': '🍽️', 'Trabalho e Negócios': '💼',
  Descrições: '🎨', Cores: '🌈', Números: '🔢', Corpo: '🖐️', Roupas: '👕', Saúde: '🩺', Compras: '🛒',
  Escola: '🎒', Profissões: '👷', Animais: '🐾', Sociedade: '🏛️', Tecnologia: '💻', 'Lazer e Esportes': '⚽', Ciência: '🔬', Expressões: '💬',
};

const LANG_FLAG: Record<string, string> = { pt: '🇧🇷', es: '🇪🇸', it: '🇮🇹', fr: '🇫🇷', ru: '🇷🇺', pl: '🇵🇱', cs: '🇨🇿', sr: '🇷🇸', bg: '🇧🇬', el: '🇬🇷', sq: '🇦🇱', hu: '🇭🇺', tr: '🇹🇷', en: '🇬🇧', de: '🇩🇪', nl: '🇳🇱', ro: '🇷🇴', sv: '🇸🇪', nb: '🇳🇴', da: '🇩🇰', is: '🇮🇸', fi: '🇫🇮', et: '🇪🇪', ja: '🇯🇵', ko: '🇰🇷', zh: '🇨🇳', ar: '🇸🇦', fa: '🇮🇷', hi: '🇮🇳', la: '🏛️', ha: '🇳🇬', yo: '🇳🇬', ig: '🇳🇬', am: '🇪🇹', om: '🇪🇹', lt: '🇱🇹', lv: '🇱🇻', sw: '🇹🇿', zu: '🇿🇦', ln: '🇨🇩', kmb: '🇦🇴', gr: '🏛️' };

/** Cofre de vocabulário: palavras por frequência com estado SRS, categorias e árvore etimológica. */
export default function VocabScreen() {
  const { db, pack, variant } = useApp();
  const variantWords = useMemo(() => {
    const v = pack.variants?.find((x) => x.code === variant);
    return { flag: v?.flag ?? '', map: new Map((v?.vocab ?? []).map(([std, loc]) => [std, loc])) };
  }, [pack.variants, variant]);
  const dark = useIsDark();
  const [tab, setTab] = useState<Tab>('frequencia');
  const [search, setSearch] = useState('');
  const [words, setWords] = useState<VocabWithSRS[]>([]);
  const [stats, setStats] = useState({ total: 0, learned: 0, mastered: 0, due: 0 });
  const [cats, setCats] = useState<Awaited<ReturnType<typeof categoryStats>>>([]);
  const [ety, setEty] = useState<Ety[]>([]);
  const [onlyTransparent, setOnlyTransparent] = useState(false);
  const [now, setNow] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        setNow(Date.now());
        setWords(await listVocab(db, pack.code));
        setStats(await vocabStats(db, pack.code));
        setCats(await categoryStats(db, pack.code));
        setEty(await listEtymology(db, pack.code));
      })();
    }, [db, pack.code]),
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return words;
    return words.filter((w) => w.word_target.toLowerCase().includes(q) || w.word_native.toLowerCase().includes(q));
  }, [words, search]);

  const header = (
    <View className="gap-3 pb-3">
      <Text className="pt-3 text-2xl font-extrabold text-slate-900 dark:text-white">⚡ Cofre de Vocabulário</Text>
      <Card className="gap-2">
        <Text className="font-semibold text-slate-700 dark:text-slate-200">
          Palavras aprendidas: <Text className="font-extrabold text-conecta">{stats.learned}</Text> / {VOCAB_TARGET_TOTAL.toLocaleString('pt-BR')}{' '}
          <Text className="text-slate-500">(nível {cefrFromMastered(stats.mastered)})</Text>
        </Text>
        <ProgressBar value={stats.learned / VOCAB_TARGET_TOTAL} color="bg-conecta" />
        <Text className="text-xs text-slate-500 dark:text-slate-400">
          {stats.total} palavras mais frequentes já disponíveis · {stats.mastered} dominadas (3+ revisões certas)
        </Text>
        <Button
          title={stats.due ? `▶ Revisar agora (${stats.due})` : 'Nenhuma revisão vencida hoje'}
          variant={stats.due ? 'primary' : 'ghost'}
          disabled={!stats.due}
          onPress={() => router.push('/revisao')}
          className="mt-1"
        />
      </Card>

      <View className="flex-row rounded-2xl bg-slate-200 p-1 dark:bg-slate-800">
        {(
          [
            ['frequencia', 'Frequência'],
            ['categorias', 'Categorias'],
            ['etimologia', 'Etimologia'],
          ] as [Tab, string][]
        ).map(([k, label]) => (
          <Pressable
            key={k}
            accessibilityRole="tab"
            accessibilityState={{ selected: tab === k }}
            onPress={() => setTab(k)}
            className={`flex-1 items-center rounded-xl py-2 ${tab === k ? 'bg-white dark:bg-slate-950' : ''}`}
          >
            <Text className={`font-bold ${tab === k ? 'text-conecta' : 'text-slate-500 dark:text-slate-400'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>

      {tab === 'frequencia' && (
        <View className="flex-row items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900">
          <Search size={18} color={dark ? '#64748B' : '#94A3B8'} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder={`Buscar em ${nomeIdioma(pack.name)} ou português…`}
            placeholderTextColor="#94A3B8"
            className="flex-1 py-3 text-base text-slate-900 dark:text-white"
          />
        </View>
      )}
      {tab === 'etimologia' && (
        <View className="gap-2">
          <Text className="text-sm text-slate-600 dark:text-slate-300">
            {pack.cognateNote} Os <Text className="font-bold text-conquista">cognatos transparentes</Text> você já entende sem estudar!
          </Text>
          <Pressable
            accessibilityRole="link"
            onPress={() => router.push('/palavras-irmas')}
            className="flex-row items-center gap-3 rounded-2xl bg-amber-50 p-3 active:opacity-80 dark:bg-amber-950/40"
          >
            <Text className="text-2xl">🌳</Text>
            <Text className="flex-1 text-sm leading-5 text-slate-800 dark:text-slate-200">
              <Text className="font-extrabold">Palavras irmãs entre idiomas:</Text> a árvore de cada raiz (noite, noche, notte, noapte, ночь, natt, night) e as que só parecem parentes.
            </Text>
            <Text className="text-lg text-slate-400">›</Text>
          </Pressable>
          <Pressable onPress={() => setOnlyTransparent((v) => !v)} className="self-start">
            <Chip label={onlyTransparent ? '✓ Só cognatos transparentes' : 'Mostrar só cognatos transparentes'} tone={onlyTransparent ? 'green' : 'slate'} />
          </Pressable>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-suave dark:bg-grafite">
      <View className="w-full max-w-2xl flex-1 self-center px-4">
        {tab === 'frequencia' && (
          <FlatList
            data={filtered}
            keyExtractor={(w) => w.id}
            ListHeaderComponent={header}
            renderItem={({ item }) => <WordRow w={item} locale={pack.speechLocale} now={now} variantWord={variantWords.map.get(item.word_target)} variantFlag={variantWords.flag} />}
            ItemSeparatorComponent={() => <View className="h-2" />}
            contentContainerStyle={{ paddingBottom: 24 }}
            keyboardShouldPersistTaps="handled"
            initialNumToRender={20}
            ListEmptyComponent={<Text className="py-8 text-center text-slate-500">Nenhuma palavra encontrada.</Text>}
          />
        )}
        {tab === 'categorias' && (
          <FlatList
            data={cats}
            keyExtractor={(c) => c.category}
            ListHeaderComponent={header}
            ItemSeparatorComponent={() => <View className="h-2" />}
            contentContainerStyle={{ paddingBottom: 24 }}
            renderItem={({ item }) => (
              <Card className="gap-2">
                <View className="flex-row items-center justify-between">
                  <Text className="text-base font-bold text-slate-800 dark:text-slate-100">
                    {CATEGORY_EMOJI[item.category] ?? '•'} {item.category}
                  </Text>
                  <Text className="text-sm font-bold text-conquista">{Math.round(item.mastery * 100)}% domínio</Text>
                </View>
                <ProgressBar value={item.learned / item.total} color="bg-conecta" />
                <Text className="text-xs text-slate-500 dark:text-slate-400">
                  {item.learned} de {item.total} palavras vistas
                </Text>
              </Card>
            )}
          />
        )}
        {tab === 'etimologia' && (
          <FlatList
            data={onlyTransparent ? ety.filter((e) => e.transparent) : ety}
            keyExtractor={(e) => e.id}
            ListHeaderComponent={header}
            ItemSeparatorComponent={() => <View className="h-3" />}
            contentContainerStyle={{ paddingBottom: 24 }}
            renderItem={({ item }) => <EtymologyCard e={item} locale={pack.speechLocale} flag={pack.flag} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

function WordRow({ w, locale, now, variantWord, variantFlag }: { w: VocabWithSRS; locale: string; now: number; variantWord?: string; variantFlag?: string }) {
  const g = w.gender ? GENDER_LABEL[w.gender] : null;
  let status: { label: string; tone: 'slate' | 'orange' | 'green' | 'blue' };
  if (!w.next_review_date) status = { label: 'nova', tone: 'slate' };
  else if (isDue(w.next_review_date, new Date(now))) status = { label: 'revisar hoje', tone: 'orange' };
  else {
    const days = Math.max(1, Math.ceil((new Date(w.next_review_date).getTime() - now) / 86_400_000));
    status = { label: `em ${days} ${days === 1 ? 'dia' : 'dias'}`, tone: (w.repetition ?? 0) >= 3 ? 'green' : 'blue' };
  }
  return (
    <View className="flex-row items-center gap-3 rounded-2xl bg-white px-3 py-2.5 dark:bg-slate-900">
      <Text className="w-8 text-right text-xs font-bold text-slate-400">#{w.frequency_rank}</Text>
      <View className="w-9 items-center">{hasWordImage(w.word_native, { pos: w.part_of_speech, target: w.word_target }) ? <WordImage wordNative={w.word_native} size={36} pos={w.part_of_speech} target={w.word_target} /> : <Text className="text-xl">{w.emoji ?? ''}</Text>}</View>
      <View className="flex-1">
        <View className="flex-row flex-wrap items-center gap-1.5">
          <Text className="text-base font-bold text-slate-900 dark:text-white">{w.word_target}</Text>
          {g && <Chip label={g.label} tone={g.tone} />}
          {hasNativeClip(w.word_target, locale) && <Text accessibilityLabel="gravação de falante nativo" className="text-xs">🎧</Text>}
        </View>
        <Ipa text={w.word_target} className="text-xs" />
        {variantWord && <Text className="text-xs font-semibold text-conecta">{variantFlag} {variantWord}</Text>}
        <Text className="text-sm text-slate-500 dark:text-slate-400">{w.word_native}</Text>
      </View>
      <View className="items-end gap-1">
        <Chip label={status.label} tone={status.tone} />
        {w.ease_factor !== null && <Text className="text-[10px] text-slate-400">facilidade {w.ease_factor.toFixed(2)}</Text>}
      </View>
      <SpeakButton text={w.word_target} locale={locale} size={16} />
    </View>
  );
}

function EtymologyCard({ e, locale, flag }: { e: Ety; locale: string; flag: string }) {
  let cognates: Cognate[] = [];
  try {
    cognates = JSON.parse(e.cognate_list);
  } catch {}
  return (
    <Card className="gap-3">
      <View className="flex-row items-center gap-2">
        <Text className="text-2xl">{e.emoji}</Text>
        <View className="flex-1">
          <Text className="text-xl font-extrabold text-slate-900 dark:text-white">{e.word_target}</Text>
          <Ipa text={e.word_target} className="text-xs" />
          <Text className="text-sm text-slate-500 dark:text-slate-400">{e.word_native}</Text>
        </View>
        {!!e.transparent && <Chip label="cognato transparente" tone="green" />}
        <SpeakButton text={e.word_target} locale={locale} size={16} />
      </View>

      {/* mini-árvore: raiz → palavra do idioma estudado + irmãs */}
      <View className="items-center">
        <View className="rounded-xl bg-amber-100 px-3 py-1.5 dark:bg-amber-950">
          <Text className="text-center font-bold text-amber-900 dark:text-amber-200">
            {e.origin_language}: <Text className="italic">{e.root_word}</Text>
          </Text>
        </View>
        <View className="h-3 w-0.5 bg-slate-300 dark:bg-slate-600" />
        <View className="flex-row flex-wrap justify-center gap-1.5">
          <Text className="overflow-hidden rounded-lg bg-conecta px-2 py-1 font-bold text-white">{flag} {e.word_target}</Text>
          {cognates.map((c) => (
            <Text key={c.lang + c.word} className={`overflow-hidden rounded-lg px-2 py-1 font-semibold ${c.lang === 'pt' ? 'bg-conquista-light text-conquista-dark dark:bg-green-950 dark:text-green-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}>
              {LANG_FLAG[c.lang] ?? c.lang} {c.word}
            </Text>
          ))}
        </View>
      </View>
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">{e.evolution_note}</Text>
    </Card>
  );
}
