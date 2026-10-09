import { useEffect, useMemo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { Card, Chip, SpeechBubble } from '@/components/ui';
import { HScroll } from '@/components/HScroll';
import { Linu } from '@/components/Linu';
import { useApp } from '@/services/app-state';
import { WORLD } from '@/data/mapa-mundi';
import { flagOf } from '@/data/onde-se-fala';
import { HOMELANDS } from '@/data/fauna-musica';
import type { GlottologRow } from '@/data/linguas-glottolog';
import type { Subdivision } from '@/data/iso-3166-2';
import { familiesOf, languagesOfCountry, riskCounts, RISK_LEVELS, scopeOf, type IndigenousLanguage } from '@/data/linguas-indigenas';

/** Os países sugeridos: o Brasil, os do idioma estudado e alguns com muitas línguas indígenas. */
const SUGGESTED = ['BRA', 'PER', 'BOL', 'PRY', 'MEX', 'GTM', 'USA', 'CAN', 'AUS', 'NZL'];
const PAGE = 30;
/** A cor do grau no texto, legível no tema claro e no escuro (a barra usa a cor cheia). */
const LEVEL_TEXT = [
  'text-green-700 dark:text-green-400',
  'text-yellow-700 dark:text-yellow-400',
  'text-orange-700 dark:text-orange-400',
  'text-red-700 dark:text-red-400',
  'text-rose-800 dark:text-rose-300',
  'text-slate-600 dark:text-slate-400',
];
const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

/**
 * Aba «Indígenas» da Cultura: as línguas indígenas de cada país e o grau de risco de cada uma
 * (Glottolog). Os riscos são diferentes — de «ameaçada» a «extinta» —, e a tela mostra quantas
 * estão em cada grau, o que cada grau quer dizer e a lista, das mais ameaçadas para as menos.
 */
export function IndigenousTab() {
  const { pack } = useApp();
  const [rows, setRows] = useState<GlottologRow[] | null>(null);
  const [subdivisions, setSubdivisions] = useState<Record<string, Subdivision[]> | null>(null);
  const [iso, setIso] = useState('BRA');
  const [level, setLevel] = useState<number | null>(null);
  const [shown, setShown] = useState(PAGE);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);

  // o Glottolog (~8.000 línguas) e as subdivisões são grandes: chegam depois de abrir a aba
  useEffect(() => {
    let alive = true;
    Promise.all([import('@/data/linguas-glottolog'), import('@/data/iso-3166-2')]).then(([g, s]) => {
      if (!alive) return;
      setRows(g.GLOTTOLOG_ROWS);
      setSubdivisions(s.ISO_3166_2);
    });
    return () => {
      alive = false;
    };
  }, []);

  const country = WORLD.find((c) => c.iso === iso);
  const suggested = useMemo(() => [...new Set(['BRA', ...(HOMELANDS[pack.code] ?? []), ...SUGGESTED])], [pack.code]);
  const list = useMemo(() => (rows ? languagesOfCountry(rows, iso) : []), [rows, iso]);
  const counts = useMemo(() => riskCounts(list), [list]);
  const families = useMemo(() => familiesOf(list), [list]);
  const filtered = level === null ? list : list.filter((l) => l.level === level);
  const scope = scopeOf(iso);
  const matches = query.trim() ? WORLD.filter((c) => fold(c.name).includes(fold(query.trim()))).slice(0, 8) : [];
  const regionName = (l: IndigenousLanguage) => (l.subdivision && country ? subdivisions?.[country.iso2]?.find((s) => s[0] === l.subdivision)?.[1] : undefined);
  const pick = (next: string) => {
    setIso(next);
    setLevel(null);
    setShown(PAGE);
    setQuery('');
    setSearching(false);
  };
  const total = list.length;
  const rated = total - counts.unknown;

  return (
    <View className="gap-3">
      <View className="mt-2 flex-row items-end gap-2">
        <Linu mood="pensando" size={60} animate={false} />
        <SpeechBubble className="mb-5">
          Muitas línguas indígenas estão em risco, mas não todas do mesmo jeito: umas as crianças ainda aprendem em casa, outras só os avós falam. Escolha um país.
        </SpeechBubble>
      </View>

      <HScroll label="os países" contentContainerStyle={{ gap: 8 }}>
        {(suggested.includes(iso) ? suggested : [iso, ...suggested]).map((c) => {
          const w = WORLD.find((x) => x.iso === c);
          if (!w) return null;
          const on = c === iso;
          return (
            <Pressable
              key={c}
              accessibilityRole="radio"
              accessibilityState={{ checked: on }}
              aria-checked={on}
              accessibilityLabel={`País: ${w.name}`}
              onPress={() => pick(c)}
              className={`rounded-full border-2 px-3 py-1.5 ${on ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
            >
              <Text className={`font-bold ${on ? 'text-conecta-dark dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>
                {flagOf(w.iso2)} {w.name}
              </Text>
            </Pressable>
          );
        })}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Outro país"
          onPress={() => setSearching((s) => !s)}
          className="flex-row items-center gap-1 rounded-full border-2 border-dashed border-slate-300 px-3 py-1.5 dark:border-slate-600"
        >
          <Search size={14} color="#94A3B8" />
          <Text className="font-bold text-slate-600 dark:text-slate-300">Outro país</Text>
        </Pressable>
      </HScroll>

      {searching && (
        <Card className="gap-2">
          <View className="flex-row items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900">
            <Search size={16} color="#94A3B8" />
            <TextInput
              accessibilityLabel="Buscar país"
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar: Colômbia, Canadá, Índia…"
              placeholderTextColor="#94A3B8"
              autoCorrect={false}
              autoFocus
              className="flex-1 py-2.5 text-base text-slate-900 dark:text-white"
            />
            {query !== '' && (
              <Pressable accessibilityLabel="Limpar busca" onPress={() => setQuery('')} hitSlop={8}>
                <X size={16} color="#94A3B8" />
              </Pressable>
            )}
          </View>
          {matches.map((c) => (
            <Pressable key={c.iso} accessibilityRole="button" onPress={() => pick(c.iso)} className="rounded-xl px-2 py-2 active:bg-slate-100 dark:active:bg-slate-800">
              <Text className="font-semibold text-slate-800 dark:text-slate-100">
                {flagOf(c.iso2)} {c.name}
              </Text>
            </Pressable>
          ))}
        </Card>
      )}

      {!rows ? (
        <Card>
          <Text className="text-slate-600 dark:text-slate-400">Carregando as línguas do Glottolog…</Text>
        </Card>
      ) : (
        <>
          <Card className="gap-3">
            <Text className="text-xl font-extrabold text-slate-900 dark:text-white">
              {country ? `${flagOf(country.iso2)} ${country.name}` : iso}
            </Text>
            <Text className="text-base leading-6 text-slate-700 dark:text-slate-300">
              {total === 0
                ? scope === 'indigenas'
                  ? 'O Glottolog não registra línguas indígenas neste país.'
                  : 'O Glottolog não registra línguas em risco neste país.'
                : scope === 'indigenas'
                  ? `O Glottolog registra ${total} ${total === 1 ? 'língua indígena falada' : 'línguas indígenas faladas'} aqui (ou que já foram), de ${families.length} ${families.length === 1 ? 'família' : 'famílias'}.`
                  : `${total} ${total === 1 ? 'língua em risco' : 'línguas em risco'} aqui, segundo o Glottolog. Fora das Américas e da Oceania quase todas as línguas são nativas; por isso a lista mostra as que estão em risco — entre elas as de povos indígenas e de minorias.`}
            </Text>
            {rated > 0 && (
              <View className="h-4 flex-row overflow-hidden rounded-full" accessibilityLabel="Línguas por grau de risco">
                {counts.byLevel.map((n, i) => (n > 0 ? <View key={i} style={{ flex: n, backgroundColor: RISK_LEVELS[i].color }} /> : null))}
              </View>
            )}
            <View className="gap-1.5">
              {RISK_LEVELS.map((r) => {
                const n = counts.byLevel[r.level];
                if (!n && scope === 'ameacadas' && r.level === 0) return null;
                const on = level === r.level;
                return (
                  <Pressable
                    key={r.level}
                    accessibilityRole="button"
                    accessibilityState={{ selected: on }}
                    aria-selected={on}
                    accessibilityLabel={`Grau: ${r.label}`}
                    disabled={!n}
                    onPress={() => {
                      setLevel(on ? null : r.level);
                      setShown(PAGE);
                    }}
                    className={`flex-row gap-2 rounded-xl px-2 py-1.5 ${on ? 'bg-slate-100 dark:bg-slate-800' : ''} ${n ? '' : 'opacity-40'}`}
                  >
                    <View style={{ width: 12, height: 12, borderRadius: 6, marginTop: 4, backgroundColor: r.color }} />
                    <Text className="flex-1 text-sm leading-5 text-slate-700 dark:text-slate-300">
                      <Text className="font-extrabold text-slate-900 dark:text-white">
                        {r.label} · {n}:
                      </Text>
                      {' '}
                      {r.text}
                    </Text>
                  </Pressable>
                );
              })}
              {counts.unknown > 0 && <Text className="px-2 text-xs text-slate-600 dark:text-slate-400">Sem avaliação: {counts.unknown}</Text>}
            </View>
            {families.length > 1 && (
              <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">
                <Text className="font-bold">Famílias: </Text>
                {families
                  .slice(0, 8)
                  .map(([f, n]) => `${f} (${n})`)
                  .join(' · ')}
                {families.length > 8 ? ` e mais ${families.length - 8}` : ''}
              </Text>
            )}
          </Card>

          {level !== null && (
            <View className="flex-row items-center gap-2">
              <Chip label={`Só “${RISK_LEVELS[level].label}”`} tone="slate" />
              <Pressable accessibilityRole="button" onPress={() => setLevel(null)}>
                <Text className="text-sm font-semibold text-conecta dark:text-blue-400">Ver todas</Text>
              </Pressable>
            </View>
          )}
          <View className="gap-2">
            {filtered.slice(0, shown).map((l) => (
              <LanguageRow key={l.glottocode} l={l} region={regionName(l)} />
            ))}
          </View>
          {filtered.length > shown && (
            <Pressable accessibilityRole="button" onPress={() => setShown((s) => s + PAGE)} className="items-center rounded-2xl border-2 border-slate-200 py-3 active:opacity-80 dark:border-slate-700">
              <Text className="font-bold text-conecta dark:text-blue-400">Ver mais ({filtered.length - shown})</Text>
            </Pressable>
          )}
        </>
      )}
      <Text className="text-xs leading-5 text-slate-600 dark:text-slate-400">
        Dados: Glottolog 5 (Hammarström, Forkel, Haspelmath e Bank; Max Planck Institute for Evolutionary Anthropology, CC BY 4.0), com o grau de risco da escala AES, que junta as avaliações da UNESCO, do Ethnologue e do Catálogo de Línguas Ameaçadas. A região é onde o Glottolog situa a língua; muitas são faladas em vários lugares. Línguas de sinais e pidgins ficam no mapa-múndi.
      </Text>
    </View>
  );
}

function LanguageRow({ l, region }: { l: IndigenousLanguage; region?: string }) {
  const r = l.level === null ? null : RISK_LEVELS[l.level];
  const others = l.alsoIn
    .map((iso) => WORLD.find((c) => c.iso === iso))
    .filter((c) => !!c)
    .slice(0, 6);
  return (
    <View className="flex-row gap-3 rounded-2xl bg-white p-3 dark:bg-slate-900" accessibilityLabel={`${l.name}: ${r?.label ?? 'sem avaliação'}`}>
      <View style={{ width: 6, borderRadius: 3, backgroundColor: r?.color ?? '#CBD5E1' }} />
      <View className="flex-1 gap-0.5">
        <View className="flex-row flex-wrap items-center gap-x-2">
          <Text className="text-base font-extrabold text-slate-900 dark:text-white">{l.name}</Text>
          <Text className={`text-xs font-bold ${l.level === null ? 'text-slate-500 dark:text-slate-400' : LEVEL_TEXT[l.level]}`}>
            {r?.label ?? 'sem avaliação'}
          </Text>
        </View>
        <Text className="text-sm text-slate-600 dark:text-slate-400">
          {l.family}
          {region ? ` · ${region}` : ''}
        </Text>
        {others.length > 0 && (
          <Text className="text-xs text-slate-600 dark:text-slate-400">
            também: {others.map((c) => `${flagOf(c!.iso2)} ${c!.name}`).join(', ')}
          </Text>
        )}
      </View>
    </View>
  );
}
