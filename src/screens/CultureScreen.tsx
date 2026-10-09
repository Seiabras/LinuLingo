import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { Screen, Card, InfoLabel, SpeechBubble, SpeakButton } from '@/components/ui';
import { CulturalGrammarCard } from '@/components/CulturalGrammarCard';
import { LinuAmigo } from '@/components/LinuAmigo';
import { FieldGuideCard } from '@/components/FieldGuideCard';
import { useApp } from '@/services/app-state';
import { useIsDark } from '@/services/theme';
import { FAUNA_MUSICA, HOMELANDS, type NatureItem } from '@/data/fauna-musica';
import { CULTURA_PAISES, CULTURE_KINDS } from '@/data/cultura-paises';
import { HScroll } from '@/components/HScroll';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { VarietyPicker } from '@/components/AccentsPanel';
import { OwnLanguagesTab } from '@/components/OwnLanguagesTab';
import { IndigenousTab } from '@/components/IndigenousTab';
import { SignLanguagesTab } from '@/components/SignLanguagesTab';
import { LanguageTypesTab } from '@/components/LanguageTypesTab';
import { DialectsTab } from '@/components/DialectsTab';
import { AlphabetsTab } from '@/components/AlphabetsTab';
import { KnowledgeGamesTab } from '@/components/KnowledgeGamesTab';
import { FieldNotebookBackground } from '@/components/FieldNotebookBackground';
import type { LanguagePack } from '@/data/types';
import { nomeIdioma } from '@/services/idioma-nome';
import { alvoDoTour } from '@/services/tour';

const TABS = [
  { id: 'cultura', label: '🏛️ Cultura', info: 'A cultura de quem fala o idioma que você estuda: a família da língua, o mapa, as variantes e os sotaques, os bichos, os sons, a comida, o folclore, as danças, as plantas e as brincadeiras de cada país e os cards de cada unidade.' },
  { id: 'proprias', label: '🗣️ Línguas próprias', info: 'Outras línguas faladas nos mesmos países do idioma, que não são um jeito de falar ele: o sámi na Suécia, o sardo na Itália, o feroês na Dinamarca. Também as línguas de imigração, levadas por um povo para outro país, como o talian (vêneto) e o hunsriqueano (alemão) no Brasil.' },
  { id: 'indigenas', label: '🪶 Indígenas', info: 'As línguas indígenas de cada país (o Brasil primeiro) e o quanto cada uma está em risco de desaparecer.' },
  { id: 'sinais', label: '🤟 Línguas de sinais', info: 'As línguas das comunidades surdas: como funcionam, as famílias, as de cada país, a história e um quiz.' },
  { id: 'tipos', label: '🧭 Tipos de línguas', info: 'Além das línguas naturais: as artificiais (esperanto, klingon, toki pona), as formais (programação, lógica), as de contato (pidgins e crioulos), as controladas e a divisão por modalidade (oral, de sinais, tátil) e por estado (vivas, mortas, protolínguas).' },
  { id: 'jogos', label: '🎲 Jogos', info: 'Jogos de tabuleiro e estratégia fora do mundo dos idiomas: damas e quoridor (esse já dá pra jogar!), e em breve xadrez, octi e abalone — com história e regras reais.' },
  { id: 'dialetos', label: '🌍 Dialetos', info: 'A lista completa de dialetos nacionais/regionais de todos os idiomas do app: o que muda — vocabulário, gramática, pronúncia — e por quê, pra cada um.' },
  {
    id: 'escritas',
    label: '🔤 Sistemas de escrita',
    info: 'Todos os sistemas de escrita que o app usa — alfabetos, abjads, abugidas, silabários e escrita logográfica — agrupando os idiomas que compartilham a mesma escrita, com história, curiosidades (inclusive de línguas fora do app) e um jeito de clicar e já estudar.',
  },
] as const;
type TabId = (typeof TABS)[number]['id'];

/**
 * Cultura & História, em abas: a do idioma (genealogia, mapa, variantes e sotaques, bichos e os cards
 * de cada unidade), a das línguas próprias (as que se falam nos mesmos lugares mas não são o idioma,
 * como o sámi), a das línguas indígenas de cada país, com o grau de risco, a das línguas de sinais e
 * a dos tipos de línguas (artificiais, formais, de contato, controladas, modalidade e estado) e a
 * lista global de dialetos (todos os idiomas, não só o atual).
 * A aba vem da rota (/cultura?aba=indigenas), para o tutorial e os atalhos levarem direto a ela.
 */
export default function CultureScreen() {
  const { aba } = useLocalSearchParams<{ aba?: string }>();
  const tab: TabId = TABS.some((t) => t.id === aba) ? (aba as TabId) : 'cultura';
  const setTab = (id: TabId) => router.setParams({ aba: id });

  return (
    <Screen background={<FieldNotebookBackground variant="pergaminho" />}>
      <InfoLabel
        className="pt-3"
        label={<Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🏛️ Cultura & História</Text>}
        info={
          <View className="gap-1.5">
            <Text className="text-sm font-bold text-slate-800 dark:text-slate-100">O que tem em cada aba:</Text>
            {TABS.map((t) => (
              <Text key={t.id} className="text-sm leading-5 text-slate-800 dark:text-slate-100">
                <Text className="font-bold">{t.label}: </Text>
                {t.info}
              </Text>
            ))}
          </View>
        }
      />
      <View ref={alvoDoTour('cultura-abas')} className="mt-3 flex-row flex-wrap gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800" accessibilityRole="tablist">
        {TABS.map((t) => {
          const on = t.id === tab;
          return (
            <Pressable
              key={t.id}
              accessibilityRole="tab"
              accessibilityState={{ selected: on }}
              aria-selected={on}
              onPress={() => setTab(t.id)}
              // cada aba do tamanho do nome; no celular elas quebram em duas linhas
              className={`grow items-center rounded-xl px-2 py-2 ${on ? 'bg-white shadow-sm dark:bg-slate-950' : ''}`}
            >
              <Text numberOfLines={1} className={`text-center text-[13px] font-bold ${on ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {tab === 'cultura' && <CultureTab onOwnLanguages={() => setTab('proprias')} />}
      {tab === 'proprias' && <OwnLanguagesTab />}
      {tab === 'indigenas' && <IndigenousTab />}
      {tab === 'sinais' && <SignLanguagesTab />}
      {tab === 'tipos' && <LanguageTypesTab />}
      {tab === 'jogos' && <KnowledgeGamesTab />}
      {tab === 'dialetos' && <DialectsTab />}
      {tab === 'escritas' && <AlphabetsTab />}
    </Screen>
  );
}

function CultureTab({ onOwnLanguages }: { onOwnLanguages: () => void }) {
  const { pack } = useApp();
  const dark = useIsDark();
  const [open, setOpen] = useState<string | null>(pack.units[0]?.id ?? null);
  const [kind, setKind] = useState<CountryKind>('animals');
  // o ramo às vezes tem o nome do próprio idioma (Japônico › Japonês): não repete o nó
  const chain = [pack.lineage.family, ...pack.lineage.branches, pack.name].filter((x, i, all) => i === 0 || x !== all[i - 1]);

  return (
    <>
      <FieldGuideCard label="WENDEL CONTA" className="mb-5 mt-3">
        <View className="flex-row items-end gap-2">
          <LinuAmigo id="weddell" size={64} />
          <SpeechBubble>
            Sou o Wendel. Adoro um cochilo tranquilo no gelo, ouvindo de onde vem cada coisa. Toda palavra tem uma história — vem descansar aqui comigo e descobrir a origem do {nomeIdioma(pack.name)}.
          </SpeechBubble>
        </View>
      </FieldGuideCard>

      <Card className="mt-2 gap-3">
        <Text className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-400">🌳 Família do {nomeIdioma(pack.name)}</Text>
        <View className="gap-0">
          {chain.map((node, i) => (
            <View key={`${i}-${node}`} style={{ paddingLeft: i * 14 }} className="flex-row items-center gap-2 py-1">
              {i > 0 && <Text className="text-slate-500 dark:text-slate-400">└</Text>}
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
          <Text className="text-sm text-blue-50">Mapa-múndi clicável: países, regiões, animais e instrumentos</Text>
        </View>
        <Text className="text-xl text-white">›</Text>
      </Pressable>

      <Pressable onPress={() => router.push('/historias')} className="mt-3 flex-row items-center gap-3 rounded-2xl border-2 border-conecta/30 bg-white p-4 active:opacity-80 dark:bg-slate-900">
        <Text className="text-2xl">📚</Text>
        <Text className="flex-1 font-semibold text-slate-800 dark:text-slate-100">Histórias interativas: a cultura de quem fala {nomeIdioma(pack.name)}, vivida pelo Linu, com vários finais.</Text>
        <Text className="text-xl text-conecta dark:text-blue-400">›</Text>
      </Pressable>

      {((pack.variants?.length ?? 0) > 1 || (pack.accents ?? []).some((a) => a.kind !== 'língua')) && (
        <View ref={alvoDoTour('cultura-variedades')}>
          <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">
            🌍 {varietyTitle(pack)}
          </Text>
          <VarietyPicker onOwnLanguages={onOwnLanguages} />
        </View>
      )}

      <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">🌍 Cada país: bichos, sons, comida, folclore…</Text>
      <HScroll label="as categorias" contentContainerStyle={{ gap: 8 }}>
        {COUNTRY_KINDS.map((k) => {
          const on = k.key === kind;
          return (
            <Pressable
              key={k.key}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
              aria-checked={on}
              accessibilityLabel={`Mostrar: ${k.label}`}
              onPress={() => setKind(k.key)}
              className={`rounded-full border-2 px-3 py-1.5 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className={`font-bold ${on ? 'text-conecta-dark dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>
                {k.emoji} {k.label}
              </Text>
            </Pressable>
          );
        })}
      </HScroll>
      <View className="mt-3 gap-3">
        {(HOMELANDS[pack.code] ?? []).map((iso) => {
          const items = countryItems(iso, kind);
          const c = WORLD.find((w) => w.iso === iso);
          if (!items.length || !c) return null;
          return (
            <Card key={iso} className="gap-3">
              <Text className="text-lg font-extrabold text-slate-900 dark:text-white">
                {flagOf(c.iso2)} {c.name}
              </Text>
              {items.map((it) => (
                <View key={it.name} className="flex-row gap-3">
                  <Text className="text-3xl">{it.emoji}</Text>
                  <View className="flex-1 gap-0.5">
                    <View className="flex-row flex-wrap items-center gap-2">
                      <Text className="font-bold text-slate-900 dark:text-white">{it.name}</Text>
                      {it.local && <Text className="italic text-conecta dark:text-blue-400">{it.local}</Text>}
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

      <Text className="mb-2 mt-6 text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400">Cards das unidades</Text>
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
                  <Text className="text-xs font-bold text-conecta dark:text-blue-400">
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
    </>
  );
}

/** As categorias de cada país: os bichos e os instrumentos (fauna-musica) e as de cultura-paises. */
type CountryKind = 'animals' | 'instruments' | (typeof CULTURE_KINDS)[number]['key'];
const COUNTRY_KINDS: { key: CountryKind; label: string; emoji: string }[] = [
  { key: 'animals', label: 'Bichos', emoji: '🐾' },
  { key: 'instruments', label: 'Sons', emoji: '🎵' },
  ...CULTURE_KINDS,
];
function countryItems(iso: string, kind: CountryKind): NatureItem[] {
  if (kind === 'animals' || kind === 'instruments') return FAUNA_MUSICA[iso]?.[kind] ?? [];
  return CULTURA_PAISES[iso]?.[kind] ?? [];
}

/** «Variantes, sotaques e dialetos do italiano»: só o que o idioma tem (as línguas próprias têm aba). */
function varietyTitle(pack: LanguagePack): string {
  const kinds = new Set((pack.accents ?? []).map((a) => a.kind));
  const variants = pack.variants ?? [];
  // taxonomia do dono do app (04/10/2026): «variante» é escrita diferente; o resto (mesmo guardado
  // no mesmo campo `variants`) é «dialeto» nacional — sem `kind` conta como dialeto.
  const hasVariante = variants.length > 1 && variants.some((v) => v.kind === 'variante');
  const hasDialetoNacional = variants.length > 1 && variants.some((v) => v.kind === 'dialeto' || !v.kind);
  const parts = [
    ...(hasVariante ? ['variantes'] : []),
    ...(kinds.has('sotaque') ? ['sotaques'] : []),
    ...(hasDialetoNacional || kinds.has('dialeto') ? ['dialetos'] : []),
  ];
  const list = parts.length > 1 ? `${parts.slice(0, -1).join(', ')} e ${parts[parts.length - 1]}` : parts[0];
  return `${list.charAt(0).toUpperCase()}${list.slice(1)} do ${nomeIdioma(pack.name)}`;
}
