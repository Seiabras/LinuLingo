import { useEffect, useMemo, useRef, useState } from 'react';
import { LogBox, Pressable, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { HScroll } from '@/components/HScroll';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { router, useLocalSearchParams } from 'expo-router';
import { scheduleOnRN } from 'react-native-worklets';
import Svg, { Circle, G, Path, Rect, Text as SvgText } from 'react-native-svg';
import { ArrowLeft, Globe, Minus, Plus, Search, X } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SectionTitle, SpeakButton } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { MAP_H, MAP_W, WORLD, type MapCountry } from '@/data/mapa-mundi';
import { addGlottolog, ALL_MAP_LANGUAGES, byKinship, findMapLanguage, flagOf, languagesIn, MAP_LANGUAGES, ROLE_LABEL, searchLanguages, STATUS_LABEL, type LangRole, type MapLanguage } from '@/data/onde-se-fala';
import { FAUNA_MUSICA, HOMELANDS } from '@/data/fauna-musica';
import { CULTURA_PAISES, CULTURE_KINDS } from '@/data/cultura-paises';
import { WORLD_REGIONS } from '@/data/regioes';
import { ISO_3166_2 } from '@/data/iso-3166-2';
import { FORMER_COUNTRIES, KIND_LABEL, type FormerCountry } from '@/data/iso-3166-3';
import { isAvailable, LANGUAGES, PACKS } from '@/data/idiomas';
import type { Accent } from '@/data/types';

import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { fitBox, focusBox, ringBoxes, type Box, type SubShape } from '@/services/mapa-geo';
import { hasSubdivisions, loadSubdivisions } from '@/services/subdivisoes';
import { nomeIdioma } from '@/services/idioma-nome';
import { KIND } from '@/services/variedade';

// Na web o react-native-svg repassa os props de toque (onResponder…) ao HTML: o toque funciona,
// mas o React avisa em modo de desenvolvimento. Aviso conhecido e inofensivo.
LogBox.ignoreLogs(['Unknown event handler property']);

const pointBox = (c: MapCountry): Box => ({ x: c.cx - 1, y: c.cy - 1, w: 2, h: 2 });
const countryBox = (c: MapCountry): Box => (c.d ? focusBox(ringBoxes(c.d)) : null) ?? pointBox(c);

// A Rússia entra na Europa Oriental, mas o enquadramento fica na parte europeia
const REGION_BOX_OVERRIDE: Record<string, Box> = {
  eu: { x: 455, y: 20, w: 175, h: 130 },
  'eu-leste': { x: 522, y: 66, w: 92, h: 62 },
};
/** Enquadramento de cada região e sub-região (países distantes, como ilhas do outro lado do mapa, ficam de fora). */
const REGION_BOX: Record<string, Box> = {};
for (const r of WORLD_REGIONS) {
  const boxesOf = (isos: string[]) => WORLD.filter((c) => isos.includes(c.iso)).map(countryBox);
  for (const sub of r.subs) REGION_BOX[sub.id] = REGION_BOX_OVERRIDE[sub.id] ?? focusBox(boxesOf(sub.countries), 3, 40)!;
  REGION_BOX[r.id] = REGION_BOX_OVERRIDE[r.id] ?? focusBox(boxesOf(r.subs.flatMap((x) => x.countries)), 3, 40)!;
}

const OPACITY: Record<LangRole, number> = { oficial: 1, regional: 0.55, falada: 0.4, diaspora: 0.28 };

/** Idioma do app (dá para estudar) ou planejado (em breve). */
const appStatus = (code: string): 'app' | 'breve' | null => (isAvailable(code) ? 'app' : LANGUAGES.some((l) => l.code === code) ? 'breve' : null);

/** Sotaques e dialetos (de todos os idiomas do app) de um país ou de uma subdivisão dele. */
function accentsAt(iso: string, code?: string, parent?: string): (Accent & { lang: string })[] {
  return Object.values(PACKS).flatMap((p) =>
    (p.accents ?? [])
      .filter((a) => a.country === iso && (!code || a.subdivisions?.includes(code) || (!!parent && a.subdivisions?.includes(parent))))
      .map((a) => ({ ...a, lang: p.name.toLowerCase() })),
  );
}

/** Quantas línguas o cartão do país mostra antes do «ver todas». */
const CARD_LANGS = 6;

/**
 * Mapa-múndi clicável: escolha um idioma para ver onde é falado (oficial, regional,
 * diáspora); toque num país para ver as línguas, os animais nativos e os instrumentos de lá.
 */
export default function MapScreen() {
  const { pack, variant, setVariant, setLanguage } = useApp();
  const [switching, setSwitching] = useState<string | null>(null);
  const dark = useIsDark();
  const ordered = useMemo(() => byKinship(pack.code), [pack.code]);
  const [langCode, setLangCode] = useState(pack.code);
  const lang = findMapLanguage(langCode) ?? MAP_LANGUAGES[0];
  // busca em todos os idiomas do mundo
  const [showAll, setShowAll] = useState(false);
  const [query, setQuery] = useState('');
  // todas as línguas do mundo (Glottolog, ~8.000): o arquivo é grande, então chega depois de abrir o mapa
  const [glotto, setGlotto] = useState(false);
  useEffect(() => {
    let alive = true;
    import('@/data/linguas-glottolog').then((m) => {
      addGlottolog(m.GLOTTOLOG_ROWS);
      if (alive) setGlotto(true);
    });
    return () => {
      alive = false;
    };
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- glotto muda a lista de onde a busca lê
  const found = useMemo(() => (showAll ? searchLanguages(query) : []), [showAll, query, glotto]);
  const [showExtinct, setShowExtinct] = useState(false);
  const [allLangs, setAllLangs] = useState(false);
  const pickLanguage = (l: MapLanguage) => {
    setLangCode(l.code);
    setShowAll(false);
    setQuery('');
  };
  const [selected, setSelected] = useState<MapCountry | null>(() => WORLD.find((c) => c.iso === (HOMELANDS[pack.code]?.[0] ?? '')) ?? null);
  const [size, setSize] = useState({ w: 360, h: 240 });
  // mais alto em telas largas (tablet e computador)
  const { width: winW } = useWindowDimensions();
  const mapHeight = Math.round(Math.min(440, Math.max(260, Math.min(winW, 680) * 0.6)));
  const aspect = size.h / size.w;
  const [box, setBox] = useState<Box>({ x: 0, y: 0, w: MAP_W, h: MAP_H });
  const [start, setStart] = useState<Box>(box);
  // /mapa?aba=antigos abre direto nos países que deixaram de existir (a linha do tempo leva para lá)
  const { aba } = useLocalSearchParams<{ aba?: string }>();
  const [mode, setMode] = useState<'hoje' | 'antigos'>(aba === 'antigos' ? 'antigos' : 'hoje');
  const [former, setFormer] = useState<FormerCountry | null>(null);
  const formerHighlight = useMemo(() => new Set(former?.successors ?? []), [former]);
  const FORMER_COLOR = '#D97706';
  // país em foco (aproximado) e as subdivisões dele, carregadas sob demanda
  const [focus, setFocus] = useState<MapCountry | null>(null);
  const [subs, setSubs] = useState<{ iso: string; list: SubShape[] } | null>(null);
  const [subsState, setSubsState] = useState<'idle' | 'loading' | 'error'>('idle');
  const [subSel, setSubSel] = useState<SubShape | null>(null);
  const [worldBox, setWorldBox] = useState<Box>({ x: 0, y: 0, w: MAP_W, h: MAP_H });
  const anim = useRef<number | null>(null);
  const request = useRef(0);

  const roles = useMemo(() => new Map(lang.countries.map((c) => [c.iso, c])), [lang]);
  const view = { ...box, h: box.w * aspect };

  const clamp = (b: Box): Box => {
    const w = Math.min(MAP_W, Math.max(0.3, b.w));
    const h = w * aspect;
    return { x: Math.min(MAP_W - w, Math.max(0, b.x)), y: Math.min(Math.max(0, MAP_H - h), Math.max(0, b.y)), w, h };
  };
  const zoom = (f: number) => setBox((b) => clamp({ x: b.x + (b.w * (1 - f)) / 2, y: b.y + (b.w * aspect * (1 - f)) / 2, w: b.w * f, h: b.h }));
  /** Aproximação suave (como no Google Maps) até a caixa pedida. */
  const animateTo = (target: Box) => {
    if (anim.current !== null) cancelAnimationFrame(anim.current);
    const to = clamp(target);
    const from = box;
    let t0 = -1;
    const step = (t: number) => {
      if (t0 < 0) t0 = t;
      const k = Math.min(1, (t - t0) / 480);
      const e = 1 - (1 - k) ** 3;
      // interpola a largura em escala logarítmica: o zoom parece constante
      const w = from.w * (to.w / from.w) ** e;
      const cx = from.x + from.w / 2 + (to.x + to.w / 2 - from.x - from.w / 2) * e;
      const cy = from.y + (from.w * aspect) / 2 + (to.y + (to.w * aspect) / 2 - from.y - (from.w * aspect) / 2) * e;
      setBox(clamp({ x: cx - w / 2, y: cy - (w * aspect) / 2, w, h: w * aspect }));
      anim.current = k < 1 ? requestAnimationFrame(step) : null;
    };
    anim.current = requestAnimationFrame(step);
  };

  /** Toque num país: seleciona, aproxima e carrega as subdivisões. */
  const selectCountry = (c: MapCountry) => {
    setSelected(c);
    setSubSel(null);
    setAllLangs(false);
    if (focus?.iso === c.iso || (!c.d && !hasSubdivisions(c.iso))) return;
    setFocus(c);
    const id = ++request.current;
    const own = c.d ? focusBox(ringBoxes(c.d)) : null;
    animateTo(fitBox(own ?? { x: c.cx - 1, y: c.cy - 1, w: 2, h: 2 }, aspect));
    setSubsState('loading');
    loadSubdivisions(c.iso)
      .then((list) => {
        if (id !== request.current) return;
        setSubs({ iso: c.iso, list });
        setSubsState('idle');
        // quem só tinha marcador no mapa-múndi ganha o enquadramento pelas subdivisões
        if (!c.d && list.length) {
          const b = focusBox(list.flatMap((sh) => ringBoxes(sh.d)));
          if (b) animateTo(fitBox(b, aspect));
        }
      })
      .catch(() => id === request.current && setSubsState('error'));
  };

  const backToWorld = () => {
    request.current++;
    setRegion(null);
    setSubRegion(null);
    setFocus(null);
    setSubSel(null);
    setSubsState('idle');
    animateTo(worldBox);
  };

  // navegação por região › sub-região › país (a mesma divisão das bandeiras do NeuroSim)
  const [region, setRegion] = useState<string | null>(null);
  const [subRegion, setSubRegion] = useState<string | null>(null);
  const goRegion = (id: string | null, sub: string | null = null) => {
    request.current++;
    setFocus(null);
    setSubSel(null);
    setSubsState('idle');
    setRegion(id);
    setSubRegion(sub);
    const target = sub ?? id;
    animateTo(target ? fitBox(REGION_BOX[target], aspect, 0.06) : worldBox);
  };
  const regionData = WORLD_REGIONS.find((r) => r.id === region);
  const subData = regionData?.subs.find((x) => x.id === subRegion);

  // primeira medida da caixa: preenche a altura, centralizado na terra do idioma
  const [fitted, setFitted] = useState(false);
  const onLayout = (w: number, h: number) => {
    // escondido por outra tela da pilha, o mapa mede 0 × 0: ignorar (senão a proporção vira NaN)
    if (!w || !h) return;
    setSize({ w, h });
    if (fitted) return;
    setFitted(true);
    const home = WORLD.find((c) => c.iso === (findMapLanguage(langCode)?.countries[0]?.iso ?? ''));
    const a = h / w;
    const vw = Math.min(MAP_W, MAP_H / a);
    const cx = home?.cx ?? MAP_W / 2;
    const world = { x: Math.min(MAP_W - vw, Math.max(0, cx - vw / 2)), y: 0, w: vw, h: vw * a };
    setBox(world);
    setWorldBox(world);
  };
  const onPanStart = () => setStart(box);
  const onPan = (dx: number, dy: number) => {
    const k = start.w / size.w;
    setBox(clamp({ ...start, x: start.x - dx * k, y: start.y - dy * k }));
  };
  const onPinch = (scale: number) => {
    const s = start;
    const w = s.w / scale;
    setBox(clamp({ x: s.x + (s.w - w) / 2, y: s.y + (s.w * aspect - w * aspect) / 2, w, h: w * aspect }));
  };
  const pan = Gesture.Pan()
    .minDistance(6)
    .onStart(() => scheduleOnRN(onPanStart))
    .onUpdate((e) => scheduleOnRN(onPan, e.translationX, e.translationY));
  const pinch = Gesture.Pinch()
    .onStart(() => scheduleOnRN(onPanStart))
    .onUpdate((e) => scheduleOnRN(onPinch, e.scale));
  const gestures = Gesture.Simultaneous(pan, pinch);

  const land = dark ? '#334155' : '#CBD5E1';
  const sea = dark ? '#0B1220' : '#E0F2FE';
  const stroke = dark ? '#0F172A' : '#FFFFFF';
  const markerR = view.w / 180;
  const px = view.w / size.w; // unidades do mapa por pixel da tela

  // subdivisões do país em foco: cor pelo idioma escolhido (as regiões onde ele é falado se destacam)
  const focusSubs = focus && subs?.iso === focus.iso ? subs.list : null;
  const focusRole = focus && mode === 'hoje' ? roles.get(focus.iso) : undefined;
  const regionCodes = new Set(focusRole?.subdivisions ?? []);
  const inRegion = (sh: SubShape) => regionCodes.has(sh.code) || regionCodes.has(sh.parent);
  const subFill = (sh: SubShape): [string, number] => {
    if (mode === 'antigos') return formerHighlight.has(focus?.iso ?? '') ? [FORMER_COLOR, 1] : [land, 1];
    if (!focusRole) return [land, 1];
    if (regionCodes.size) return inRegion(sh) ? [lang.color, 0.9] : [land, 1];
    return [lang.color, OPACITY[focusRole.role]];
  };
  // rótulos: dos maiores para os menores, pulando os que se sobreporiam (como no Google Maps)
  const labels: { sh: SubShape; text: string }[] = [];
  if (focusSubs && focus) {
    const placed: Box[] = [];
    for (const sh of [...focusSubs].sort((a, b) => b.area - a.area)) {
      if (sh.area / (px * px) < 450 || labels.length >= 40) continue;
      const text = subLabel(focus.iso2, sh);
      const w = text.length * 6 * px;
      const r = { x: sh.cx - w / 2, y: sh.cy - 7 * px, w, h: 12 * px };
      if (placed.some((q) => r.x < q.x + q.w && q.x < r.x + r.w && r.y < q.y + q.h && q.y < r.y + r.h)) continue;
      placed.push(r);
      labels.push({ sh, text });
    }
  }
  const halo = dark ? '#0F172A' : '#FFFFFF';

  const allSpoken = selected ? languagesIn(selected.iso) : [];
  // as extintas ficam numa lista à parte, recolhida
  const spoken = allSpoken.filter(({ lang: l }) => l.status !== 5);
  const extinct = allSpoken.filter(({ lang: l }) => l.status === 5);
  const nature = selected ? FAUNA_MUSICA[selected.iso] : undefined;

  return (
    <Screen>
      <View className="flex-row items-center gap-3 pt-3">
        <Pressable accessibilityLabel="Voltar" onPress={goBack} hitSlop={10}>
          <ArrowLeft size={24} color={dark ? '#CBD5E1' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-extrabold text-slate-900 dark:text-white">🗺️ Onde se fala</Text>
      </View>

      <View className="mt-3 flex-row rounded-2xl bg-slate-200 p-1 dark:bg-slate-800">
        {(
          [
            ['hoje', 'Hoje · ISO 3166-1'],
            ['antigos', 'Já existiram · ISO 3166-3'],
          ] as const
        ).map(([k, label]) => (
          <Pressable
            key={k}
            accessibilityRole="tab"
            accessibilityState={{ selected: mode === k }}
            onPress={() => setMode(k)}
            className={`flex-1 items-center rounded-xl py-2 ${mode === k ? 'bg-white dark:bg-slate-950' : ''}`}
          >
            <Text className={`text-sm font-bold ${mode === k ? 'text-conecta' : 'text-slate-500 dark:text-slate-400'}`}>{label}</Text>
          </Pressable>
        ))}
      </View>

      {mode === 'hoje' && (
        <>
          <HScroll label="os idiomas" className="mt-3" contentContainerStyle={{ gap: 8 }}>
            <Pressable
              accessibilityRole="button"
              accessibilityState={{ expanded: showAll }}
              onPress={() => setShowAll((v) => !v)}
              className={`flex-row items-center gap-1 rounded-full border-2 px-3 py-1.5 ${showAll ? 'border-conecta bg-conecta-light dark:bg-blue-950' : 'border-dashed border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
            >
              <Search size={14} color={dark ? '#93C5FD' : '#2563EB'} />
              <Text className="font-bold text-conecta">Todos os idiomas ({ALL_MAP_LANGUAGES.length})</Text>
            </Pressable>
            {/* um idioma escolhido na busca aparece primeiro, marcado */}
            {[...(ordered.some((l) => l.code === lang.code) ? [] : [lang]), ...ordered].map((l) => (
              <Pressable
                key={l.code}
                onPress={() => setLangCode(l.code)}
                style={langCode === l.code ? { backgroundColor: l.color, borderColor: l.color } : undefined}
                className={`flex-row items-center gap-1 rounded-full border-2 px-3 py-1.5 ${langCode === l.code ? '' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
              >
                <Text>{l.flag}</Text>
                <Text className={`font-bold ${langCode === l.code ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{l.name}</Text>
              </Pressable>
            ))}
          </HScroll>

          {showAll && (
            <Card className="mt-2 gap-2">
              <View className="flex-row items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-3 dark:border-slate-700 dark:bg-slate-900">
                <Search size={16} color="#94A3B8" />
                <TextInput
                  accessibilityLabel="Buscar idioma"
                  value={query}
                  onChangeText={setQuery}
                  placeholder="Buscar: guarani, suaíli, basco, tupi…"
                  placeholderTextColor="#94A3B8"
                  autoCorrect={false}
                  className="flex-1 py-2.5 text-base text-slate-900 dark:text-white"
                />
                {query !== '' && (
                  <Pressable accessibilityLabel="Limpar busca" onPress={() => setQuery('')} hitSlop={8}>
                    <X size={16} color="#94A3B8" />
                  </Pressable>
                )}
              </View>
              <Text className="text-xs text-slate-500 dark:text-slate-400">
                {query ? `${found.length === 40 ? 'Os 40 primeiros' : found.length} resultados` : 'Os mais falados do mundo. Busque pelo nome, pelo nome no próprio idioma ou pela família.'}
              </Text>
              {found.map((l) => {
                const st = appStatus(l.code);
                return (
                  <Pressable
                    key={l.code}
                    accessibilityRole="button"
                    accessibilityLabel={`Ver no mapa: ${l.name}`}
                    onPress={() => pickLanguage(l)}
                    className="flex-row items-center gap-3 rounded-xl bg-slate-50 px-3 py-2 active:opacity-70 dark:bg-slate-800/60"
                  >
                    <View style={{ backgroundColor: l.color }} className="h-3 w-3 rounded-full" />
                    <View className="flex-1">
                      <Text className="font-bold text-slate-900 dark:text-white">
                        {l.name}
                        {l.native ? <Text className="font-normal text-slate-500"> · {l.native}</Text> : null}
                      </Text>
                      <Text className="text-xs text-slate-500 dark:text-slate-400">
                        {l.lineage.length ? l.lineage.join(' › ') : 'família não classificada'} · {l.countries.length} {l.countries.length === 1 ? 'país' : 'países'}
                      </Text>
                    </View>
                    {st === 'app' ? <Chip label="📚 no app" tone="green" /> : st === 'breve' ? <Chip label="em breve" /> : null}
                  </Pressable>
                );
              })}
            </Card>
          )}

          <Text className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {lang.flag} <Text className="font-bold">{lang.name}</Text>
            {lang.native ? ` (${lang.native})` : ''}: {lang.speakers}.
          </Text>
          {lang.fromCldr && lang.lineage.length > 0 && (
            <Text className="text-xs text-slate-500 dark:text-slate-400">Família: {lang.lineage.join(' › ')}</Text>
          )}
        </>
      )}
      <Pressable
        accessibilityRole="link"
        onPress={() => router.push('/linha-do-tempo')}
        className="mt-3 flex-row items-center gap-2 self-start rounded-full border-2 border-slate-200 bg-white px-3 py-1.5 active:opacity-80 dark:border-slate-700 dark:bg-slate-900"
      >
        <Text className="font-bold text-conecta">⏳ Linha do tempo das línguas ›</Text>
      </Pressable>
      {mode === 'antigos' && (
        <Text className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Países e territórios que deixaram de existir, mudaram de nome ou foram divididos. Toque num deles para ver no mapa quem está no lugar hoje.
        </Text>
      )}

      <View
        className="mt-3 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700"
        style={{ height: mapHeight }}
        onLayout={(e) => onLayout(e.nativeEvent.layout.width, e.nativeEvent.layout.height)}
      >
        <GestureDetector gesture={gestures}>
          <View style={{ flex: 1 }}>
            <Svg width={size.w} height={size.h} viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}>
              <Rect x={-50} y={-50} width={MAP_W + 100} height={MAP_H + 100} fill={sea} />
              <G>
                {WORLD.filter((c) => c.d).map((c) => {
                  const role = mode === 'hoje' ? roles.get(c.iso)?.role : formerHighlight.has(c.iso) ? 'oficial' : undefined;
                  const isSel = selected?.iso === c.iso;
                  return (
                    <Path
                      key={c.iso}
                      d={c.d}
                      fill={role ? (mode === 'hoje' ? lang.color : FORMER_COLOR) : land}
                      fillOpacity={role ? OPACITY[role] : 1}
                      stroke={isSel ? (dark ? '#FBBF24' : '#0F172A') : stroke}
                      strokeWidth={isSel ? view.w / 400 : view.w / 1600}
                      strokeDasharray={c.disputed ? `${view.w / 300} ${view.w / 400}` : undefined}
                      onPress={() => selectCountry(c)}
                    />
                  );
                })}
              </G>
              {focusSubs && (
                <G>
                  {focusSubs.map((sh, i) => {
                    const [fill, op] = subFill(sh);
                    return (
                      <Path
                        key={`s-${i}`}
                        d={sh.d}
                        fill={fill}
                        fillOpacity={subSel === sh ? Math.min(1, op + 0.25) : op}
                        stroke={stroke}
                        strokeWidth={px}
                        onPress={() => {
                          setSelected(focus);
                          setSubSel(sh);
                        }}
                      />
                    );
                  })}
                  {subSel && <Path d={subSel.d} fill="none" stroke={dark ? '#FBBF24' : '#0F172A'} strokeWidth={2.5 * px} pointerEvents="none" />}
                  {labels.map(({ sh, text }, i) => (
                    <G key={`l-${i}`} pointerEvents="none">
                      <SvgText x={sh.cx} y={sh.cy} fontSize={10 * px} fontWeight="bold" textAnchor="middle" stroke={halo} strokeWidth={3 * px} fill={halo}>
                        {text}
                      </SvgText>
                      <SvgText x={sh.cx} y={sh.cy} fontSize={10 * px} fontWeight="bold" textAnchor="middle" fill={dark ? '#E2E8F0' : '#1E293B'}>
                        {text}
                      </SvgText>
                    </G>
                  ))}
                </G>
              )}
              {WORLD.filter((c) => !c.d || (c.area < 12 && (mode === 'hoje' ? roles.has(c.iso) : formerHighlight.has(c.iso)))).map((c) => {
                const role = mode === 'hoje' ? roles.get(c.iso)?.role : formerHighlight.has(c.iso) ? 'oficial' : undefined;
                return (
                  <Circle
                    key={`m-${c.iso}`}
                    cx={c.cx}
                    cy={c.cy}
                    r={markerR}
                    fill={role ? (mode === 'hoje' ? lang.color : FORMER_COLOR) : land}
                    fillOpacity={role ? Math.max(0.5, OPACITY[role]) : 1}
                    stroke={selected?.iso === c.iso ? '#FBBF24' : stroke}
                    strokeWidth={markerR / 3}
                    onPress={() => selectCountry(c)}
                  />
                );
              })}
            </Svg>
          </View>
        </GestureDetector>
        {focus && (
          <Pressable
            accessibilityLabel="Voltar ao mapa-múndi"
            onPress={backToWorld}
            className="absolute left-2 top-2 flex-row items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-2 dark:bg-slate-800/90"
          >
            <Globe size={16} color={dark ? '#E2E8F0' : '#334155'} />
            <Text className="text-sm font-bold text-slate-700 dark:text-slate-200">Mundo</Text>
          </Pressable>
        )}
        {subsState !== 'idle' && (
          <View className="absolute bottom-2 left-2 rounded-lg bg-white/90 px-2 py-1 dark:bg-slate-800/90">
            <Text className="text-xs text-slate-600 dark:text-slate-300">
              {subsState === 'loading' ? 'Carregando subdivisões…' : 'Não deu para carregar as subdivisões.'}
            </Text>
          </View>
        )}
        <View className="absolute right-2 top-2 gap-1">
          <Pressable
            accessibilityLabel="Aproximar"
            onPress={() => zoom(0.6)}
            className="h-9 w-9 items-center justify-center rounded-lg bg-white/90 dark:bg-slate-800/90"
          >
            <Plus size={18} color={dark ? '#E2E8F0' : '#334155'} />
          </Pressable>
          <Pressable
            accessibilityLabel="Afastar"
            onPress={() => zoom(1.6)}
            className="h-9 w-9 items-center justify-center rounded-lg bg-white/90 dark:bg-slate-800/90"
          >
            <Minus size={18} color={dark ? '#E2E8F0' : '#334155'} />
          </Pressable>
        </View>
      </View>

      <HScroll label="as regiões" className="mt-2" contentContainerStyle={{ gap: 6 }}>
        <RegionChip label="🌐 Mundo" active={!region} onPress={() => goRegion(null)} />
        {WORLD_REGIONS.map((r) => (
          <RegionChip key={r.id} label={`${r.icon} ${r.name}`} active={region === r.id} onPress={() => goRegion(r.id)} />
        ))}
      </HScroll>
      {regionData && (
        <HScroll label="as sub-regiões" className="mt-1.5" contentContainerStyle={{ gap: 6 }}>
          <RegionChip small label="Todas" active={!subRegion} onPress={() => goRegion(regionData.id)} />
          {regionData.subs.map((x) => (
            <RegionChip small key={x.id} label={x.name} active={subRegion === x.id} onPress={() => goRegion(regionData.id, x.id)} />
          ))}
        </HScroll>
      )}
      {regionData && (
        <View className="mt-2 flex-row flex-wrap gap-1.5">
          {WORLD.filter((c) => (subData ?? { countries: regionData.subs.flatMap((x) => x.countries) }).countries.includes(c.iso))
            .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
            .map((c) => {
              const role = mode === 'hoje' ? roles.get(c.iso)?.role : undefined;
              return (
                <Pressable
                  key={c.iso}
                  accessibilityLabel={`País: ${c.name}`}
                  onPress={() => selectCountry(c)}
                  style={role ? { borderColor: lang.color } : undefined}
                  className={`flex-row items-center gap-1 rounded-lg border px-2 py-1 ${selected?.iso === c.iso ? 'bg-amber-100 dark:bg-amber-950' : 'bg-white dark:bg-slate-900'} ${role ? '' : 'border-slate-200 dark:border-slate-700'}`}
                >
                  <Text>{flagOf(c.iso2)}</Text>
                  <Text className="text-xs font-semibold text-slate-700 dark:text-slate-200">{c.name}</Text>
                </Pressable>
              );
            })}
        </View>
      )}

      {mode === 'antigos' && (
        <View className="mt-4 gap-2">
          {[...FORMER_COUNTRIES]
            .sort((a, b) => a.withdrawn - b.withdrawn)
            .map((f) => {
              const open = former?.alpha4 === f.alpha4;
              return (
                <View key={f.alpha4} className="gap-2">
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ expanded: open }}
                    onPress={() => setFormer(open ? null : f)}
                    className={`flex-row items-center gap-3 rounded-2xl p-3 ${open ? 'bg-amber-100 dark:bg-amber-950' : 'bg-white dark:bg-slate-900'}`}
                  >
                    <Text className="text-2xl">{f.emoji}</Text>
                    <View className="flex-1">
                      <Text className="font-bold text-slate-900 dark:text-white">{f.name}</Text>
                      <Text className="text-xs text-slate-500">
                        {KIND_LABEL[f.kind]} · código retirado em {f.withdrawn}
                      </Text>
                    </View>
                    <Text className="text-lg text-slate-400">{open ? '▾' : '▸'}</Text>
                  </Pressable>
                  {open && (
                    <Card className="gap-2">
                      <MiniMap highlight={f.successors} color={FORMER_COLOR} dark={dark} />
                      <View className="flex-row flex-wrap gap-2">
                        <Chip label={KIND_LABEL[f.kind]} tone="amber" />
                        {f.event && <Chip label={`evento: ${f.event}`} />}
                        <Chip label={`código retirado: ${f.withdrawn}`} />
                        <Chip label={`${f.alpha4} · ${f.alpha3}`} tone="blue" />
                      </View>
                      <Text className="text-base leading-6 text-slate-800 dark:text-slate-200">{f.story}</Text>
                      <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">Hoje no lugar</Text>
                      <View className="flex-row flex-wrap gap-1.5">
                        {f.successors.map((iso) => {
                          const c = WORLD.find((w) => w.iso === iso);
                          return c ? (
                            <Pressable
                              key={iso}
                              onPress={() => {
                                setMode('hoje');
                                selectCountry(c);
                              }}
                              className="rounded-lg bg-amber-100 px-2 py-1 dark:bg-amber-950"
                            >
                              <Text className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                                {flagOf(c.iso2)} {c.name}
                              </Text>
                            </Pressable>
                          ) : null;
                        })}
                      </View>
                    </Card>
                  )}
                </View>
              );
            })}
        </View>
      )}

      {mode === 'hoje' && (
        <>
          <View className="mt-2 flex-row flex-wrap gap-3">
            {(['oficial', 'regional', 'falada', 'diaspora'] as LangRole[]).filter((r) => lang.countries.some((c) => c.role === r)).map((r) => (
              <View key={r} className="flex-row items-center gap-1.5">
                <View style={{ backgroundColor: lang.color, opacity: OPACITY[r] }} className="h-3 w-5 rounded" />
                <Text className="text-xs text-slate-600 dark:text-slate-400">{ROLE_LABEL[r]}</Text>
              </View>
            ))}
          </View>
          <Text className="mt-1 text-xs text-slate-400">
            Toque num país para aproximar e ver as subdivisões; toque numa delas para saber o nome e o código. Arraste para mover e use a pinça ou os botões
            para o zoom.
          </Text>

          {selected ? (
            <Card className="mt-4 gap-3">
              <Text accessibilityLabel={`País selecionado: ${selected.name}`} className="text-xl font-extrabold text-slate-900 dark:text-white">
                {flagOf(selected.iso2)} {selected.name}
              </Text>
              {subSel && selected.iso === focus?.iso && <SubCard iso2={selected.iso2} sub={subSel} spoken={spoken} onClose={() => setSubSel(null)} studied={nomeIdioma(pack.name)} />}
              {spoken.length === 0 ? (
                <Text className="text-slate-600 dark:text-slate-400">Sem dados de idiomas para este território.</Text>
              ) : (
                <View className="gap-2">
                  <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {spoken.length === 1 ? '1 língua' : `${spoken.length} línguas`} · da mais falada para a menos
                  </Text>
                  {(allLangs ? spoken : spoken.slice(0, CARD_LANGS)).map(({ lang: l, spoken: s }) => {
                    const st = appStatus(l.code);
                    return (
                      <View key={l.code} className="gap-1 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                        <View className="flex-row flex-wrap items-center gap-2">
                          <Pressable accessibilityRole="button" accessibilityLabel={`Ver ${l.name} no mapa`} onPress={() => setLangCode(l.code)} hitSlop={4}>
                            <Text className={`font-bold ${l.code === langCode ? 'text-conecta' : 'text-slate-900 dark:text-white'}`}>
                              {l.flag} {l.name}
                            </Text>
                          </Pressable>
                          <Chip label={ROLE_LABEL[s.role]} tone={s.role === 'oficial' ? 'blue' : s.role === 'regional' ? 'amber' : 'slate'} />
                          {l.status !== undefined && l.status >= 1 && <Chip label={`⚠️ ${STATUS_LABEL[l.status]}`} tone="rose" />}
                          {st === 'app' && <Chip label="📚 no app" tone="green" />}
                          {st === 'breve' && <Chip label="em breve no app" />}
                        </View>
                        {s.pct !== undefined && s.pct > 0 && (
                          <Text className="text-xs text-slate-500 dark:text-slate-400">
                            ≈ {s.pct >= 1 ? Math.round(s.pct) : s.pct.toLocaleString('pt-BR', { maximumSignificantDigits: 1 })}% da população
                          </Text>
                        )}
                        {s.note && <Text className="text-sm text-slate-600 dark:text-slate-400">{s.note}</Text>}
                        {s.subdivisions && (
                          <Text className="text-xs text-slate-500 dark:text-slate-400">
                            📍 {s.subdivisions.map((code) => `${subName(selected.iso2, code)} (${code})`).join(' · ')}
                          </Text>
                        )}
                        {/* estudar: só os idiomas que o app já ensina */}
                        {st === 'app' && l.code !== pack.code && (
                          <Button
                            title={switching === l.code ? `Preparando o ${l.name.toLowerCase()}…` : `Estudar ${l.name.toLowerCase()}`}
                            variant="ghost"
                            disabled={switching !== null}
                            onPress={async () => {
                              setSwitching(l.code);
                              try {
                                await setLanguage(l.code);
                              } finally {
                                setSwitching(null);
                              }
                            }}
                          />
                        )}
                        {s.variant &&
                          l.code === pack.code &&
                          pack.variants?.some((v) => v.code === s.variant) &&
                          (variant === s.variant ? (
                            <Chip label="✓ variante que você estuda" tone="green" />
                          ) : (
                            <Button
                              title={`Estudar a variante ${pack.variants.find((v) => v.code === s.variant)?.name}`}
                              variant="ghost"
                              onPress={() => setVariant(s.variant!)}
                            />
                          ))}
                      </View>
                    );
                  })}
                  {spoken.length > CARD_LANGS && (
                    <Button
                      title={allLangs ? 'Mostrar menos' : `Ver todas as ${spoken.length} línguas`}
                      variant="ghost"
                      onPress={() => setAllLangs((v) => !v)}
                    />
                  )}
                  <Text className="text-xs text-slate-400">Toque no nome de uma língua para ver no mapa onde mais ela é falada.</Text>
                  {extinct.length > 0 && (
                    <Pressable accessibilityRole="button" onPress={() => setShowExtinct((v) => !v)}>
                      <Text className="text-sm font-semibold text-conecta">
                        {showExtinct ? '▾' : '▸'} {extinct.length === 1 ? '1 língua que já foi falada aqui' : `${extinct.length} línguas que já foram faladas aqui`} (extintas)
                      </Text>
                    </Pressable>
                  )}
                  {showExtinct && <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{extinct.map(({ lang: l }) => l.name).join(' · ')}</Text>}
                  <Text className="text-[11px] text-slate-400">
                    {glotto ? 'Fontes: Unicode CLDR (quanto se fala) e Glottolog, do Instituto Max Planck (todas as línguas do lugar e o grau de risco; CC BY 4.0).' : 'Carregando a lista completa de línguas…'}
                  </Text>
                </View>
              )}
              {accentsAt(selected.iso).length > 0 && (
                <View className="gap-1">
                  <Text className="text-xs font-bold uppercase tracking-wide text-slate-500">🗣️ Sotaques e dialetos daqui</Text>
                  <View className="flex-row flex-wrap gap-1.5">
                    {accentsAt(selected.iso).map((a) =>
                      // sotaques do idioma estudado abrem o treino; os de outros idiomas são só informação
                      a.lang === nomeIdioma(pack.name) ? (
                        <Pressable key={a.id} accessibilityRole="button" onPress={() => router.push({ pathname: '/sotaque', params: { id: a.id } })}>
                          <Chip label={`${a.emoji} ${a.name} ›`} tone="green" />
                        </Pressable>
                      ) : (
                        <Chip key={a.id} label={`${a.emoji} ${a.name} (${a.lang})`} tone="amber" />
                      ),
                    )}
                  </View>
                  <Text className="text-xs text-slate-400">Toque num sotaque do idioma que você estuda para treinar, ou numa região do país para ver o sotaque de lá.</Text>
                </View>
              )}

              {FORMER_COUNTRIES.filter((f) => f.successors.includes(selected.iso)).map((f) => (
                <Pressable
                  key={f.alpha4}
                  onPress={() => {
                    setMode('antigos');
                    setFormer(f);
                  }}
                  className="flex-row items-center gap-2 rounded-xl bg-amber-50 p-2 dark:bg-amber-950"
                >
                  <Text className="text-lg">{f.emoji}</Text>
                  <Text className="flex-1 text-sm text-amber-900 dark:text-amber-200">
                    Antes: <Text className="font-bold">{f.name}</Text>
                    {f.event ? ` (até ${f.event})` : ''} · ISO 3166-3
                  </Text>
                </Pressable>
              ))}
              <Subdivisions
                iso2={selected.iso2}
                highlight={spoken.flatMap((x) => x.spoken.subdivisions ?? [])}
                onPick={
                  focusSubs && selected.iso === focus?.iso
                    ? (code) => {
                        const sh = focusSubs.find((x) => x.code === code) ?? focusSubs.find((x) => x.parent === code);
                        if (sh) setSubSel(sh);
                        return !!sh;
                      }
                    : undefined
                }
              />
              {selected.note && <Text className="text-xs text-slate-500">ℹ️ {selected.note}</Text>}

              {nature && (
                <>
                  <SectionTitle>🐾 Animais nativos</SectionTitle>
                  <NatureList items={nature.animals} locale={localeFor(selected.iso)} />
                  <SectionTitle>🎵 Instrumentos</SectionTitle>
                  <NatureList items={nature.instruments} locale={localeFor(selected.iso)} />
                </>
              )}
              {CULTURA_PAISES[selected.iso] &&
                CULTURE_KINDS.map((k) => (
                  <View key={k.key} className="gap-2">
                    <SectionTitle>{`${k.emoji} ${k.label}`}</SectionTitle>
                    <NatureList items={CULTURA_PAISES[selected.iso][k.key]} locale={localeFor(selected.iso)} />
                  </View>
                ))}
            </Card>
          ) : (
            <Text className="mt-4 text-center text-slate-500">Toque num país para ver as línguas, os bichos, os instrumentos, a comida, o folclore, as danças, as plantas, as brincadeiras e os gestos de lá.</Text>
          )}
        </>
      )}
    </Screen>
  );
}

function RegionChip({ label, active, onPress, small }: { label: string; active: boolean; onPress: () => void; small?: boolean }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      className={`rounded-full ${small ? 'px-2.5 py-0.5' : 'px-3 py-1'} ${active ? 'bg-conecta' : 'bg-slate-200 dark:bg-slate-800'}`}
    >
      <Text className={`${small ? 'text-xs' : 'text-sm'} font-semibold ${active ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{label}</Text>
    </Pressable>
  );
}

function subName(iso2: string, code: string): string {
  return ISO_3166_2[iso2]?.find(([c]) => c === code)?.[1] ?? code;
}

/** Nome curto para o rótulo no mapa (o nome ISO em pt-BR; senão, o do Natural Earth). */
function subLabel(iso2: string, sh: SubShape): string {
  const name = sh.code ? subName(iso2, sh.code) : sh.name;
  return name.split(',')[0];
}

/** A subdivisão tocada: nome, código ISO 3166-2, tipo e quais idiomas do app são falados ali. */
function SubCard({ iso2, sub, spoken, onClose, studied }: { iso2: string; sub: SubShape; spoken: ReturnType<typeof languagesIn>; onClose: () => void; studied: string }) {
  const iso = sub.code ? ISO_3166_2[iso2]?.find(([c]) => c === sub.code) : undefined;
  const parent = sub.parent ? ISO_3166_2[iso2]?.find(([c]) => c === sub.parent) : undefined;
  const here = spoken.filter(({ spoken: s }) => s.subdivisions?.some((c) => c === sub.code || c === sub.parent));
  return (
    <View className="gap-1.5 rounded-xl border-2 border-amber-400 bg-amber-50 p-3 dark:bg-amber-950/40">
      <View className="flex-row items-start gap-2">
        <Text accessibilityLabel={`Subdivisão selecionada: ${iso?.[1] ?? sub.name}`} className="flex-1 text-lg font-extrabold text-slate-900 dark:text-white">
          📍 {iso?.[1] ?? sub.name}
        </Text>
        <Pressable accessibilityLabel="Fechar subdivisão" onPress={onClose} hitSlop={10}>
          <Text className="text-lg text-slate-400">✕</Text>
        </Pressable>
      </View>
      <View className="flex-row flex-wrap gap-2">
        {iso ? <Chip label={`${iso[0]} · ${iso[2]}`} tone="blue" /> : <Chip label="sem código ISO 3166-2 próprio" />}
        {parent && <Chip label={`parte de ${parent[1]} (${parent[0]})`} tone="amber" />}
      </View>
      {!iso && !parent && (
        <Text className="text-xs text-slate-500">Divisão desenhada pelo Natural Earth que não tem um código equivalente na lista ISO atual.</Text>
      )}
      {sub.note && <Text className="text-sm text-slate-600 dark:text-slate-400">ℹ️ {sub.note}</Text>}
      {here.filter(({ lang: l }) => !l.fromGlottolog).map(({ lang: l, spoken: s }) => (
        <Text key={l.code} className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          {l.flag} Aqui se fala {l.name.toLowerCase()} ({ROLE_LABEL[s.role]}).
        </Text>
      ))}
      <HereLanguages list={here.filter(({ lang: l }) => l.fromGlottolog).map(({ lang: l }) => l)} />
      {accentsAt(isoOf(iso2), sub.code, sub.parent).map((a) => (
        <View key={a.id} className="gap-1">
          <Text className="text-sm font-semibold text-amber-700 dark:text-amber-300">
            {a.emoji} {KIND[a.kind].label} daqui: {a.name} ({a.lang}).
          </Text>
          {a.lang === studied && <Button title={`Estudar: ${a.name}`} variant="ghost" onPress={() => router.push({ pathname: '/sotaque', params: { id: a.id } })} />}
        </View>
      ))}
    </View>
  );
}

/** As línguas do Glottolog que ficam nesta região (as primeiras 12, o resto num toque). */
function HereLanguages({ list }: { list: MapLanguage[] }) {
  const [open, setOpen] = useState(false);
  if (!list.length) return null;
  const living = list.filter((l) => l.status !== 5);
  const gone = list.filter((l) => l.status === 5);
  const shown = open ? living : living.slice(0, 12);
  return (
    <View className="gap-1">
      <Text className="text-sm font-semibold text-slate-800 dark:text-slate-200">
        🗣️ {living.length === 1 ? 'Língua desta região' : `${living.length} línguas desta região`}:
      </Text>
      <Text className="text-sm leading-5 text-slate-700 dark:text-slate-300">
        {shown.map((l) => `${l.flag === '🤟' ? '🤟 ' : ''}${l.name}${l.status && l.status >= 1 ? ` (${STATUS_LABEL[l.status]})` : ''}`).join(' · ')}
      </Text>
      {living.length > 12 && (
        <Pressable onPress={() => setOpen((v) => !v)}>
          <Text className="text-xs font-semibold text-conecta">{open ? 'Mostrar menos' : `Ver as ${living.length}`}</Text>
        </Pressable>
      )}
      {gone.length > 0 && <Text className="text-xs text-slate-500">Já foram faladas aqui: {gone.map((l) => l.name).join(' · ')}</Text>}
    </View>
  );
}

const isoOf = (iso2: string) => WORLD.find((c) => c.iso2 === iso2)?.iso ?? '';

/** Subdivisões ISO 3166-2 do país (lista completa, recolhível). */
function Subdivisions({ iso2, highlight, onPick }: { iso2: string; highlight: string[]; onPick?: (code: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const list = ISO_3166_2[iso2] ?? [];
  if (!list.length) return null;
  return (
    <View className="gap-1">
      <Pressable onPress={() => setOpen((v) => !v)}>
        <Text className="text-sm font-semibold text-conecta">
          {open ? '▾' : '▸'} {list.length} subdivisões (ISO 3166-2)
        </Text>
      </Pressable>
      {open && (
        <View className="flex-row flex-wrap gap-1">
          {list.map(([code, name, type]) => (
            <Pressable key={code} disabled={!onPick} onPress={() => onPick?.(code)}>
              <Text
                className={`overflow-hidden rounded-md px-1.5 py-0.5 text-xs ${highlight.includes(code) ? 'bg-conecta text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}
              >
                {name} · {code} · {type}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

/** Minimapa estático enquadrando os países destacados. */
function MiniMap({ highlight, color, dark }: { highlight: string[]; color: string; dark: boolean }) {
  const hs = WORLD.filter((c) => highlight.includes(c.iso));
  if (!hs.length) return null;
  const pad = 40;
  const x0 = Math.min(...hs.map((c) => c.cx)) - pad;
  const x1 = Math.max(...hs.map((c) => c.cx)) + pad;
  const y0 = Math.min(...hs.map((c) => c.cy)) - pad;
  const y1 = Math.max(...hs.map((c) => c.cy)) + pad;
  const w = Math.max(140, x1 - x0);
  const h = Math.max(80, y1 - y0, w * 0.5);
  const vx = (x0 + x1) / 2 - w / 2;
  const vy = (y0 + y1) / 2 - h / 2;
  const set = new Set(highlight);
  return (
    <View className="overflow-hidden rounded-xl">
      <Svg width="100%" height={160} viewBox={`${vx} ${vy} ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
        <Rect x={vx - 50} y={vy - 50} width={w + 100} height={h + 100} fill={dark ? '#0B1220' : '#E0F2FE'} />
        {WORLD.filter((c) => c.d).map((c) => (
          <Path key={c.iso} d={c.d} fill={set.has(c.iso) ? color : dark ? '#334155' : '#CBD5E1'} stroke={dark ? '#0F172A' : '#FFFFFF'} strokeWidth={w / 800} />
        ))}
        {hs
          .filter((c) => !c.d || c.area < 12)
          .map((c) => (
            <Circle key={`p-${c.iso}`} cx={c.cx} cy={c.cy} r={w / 120} fill={color} />
          ))}
      </Svg>
    </View>
  );
}

/** Locale de voz para o nome local (só onde o idioma é do app). */
function localeFor(iso: string): string | null {
  return ({ ROU: 'ro-RO', MDA: 'ro-RO', RUS: 'ru-RU', ESP: 'es-ES', MEX: 'es-MX', ARG: 'es-AR', ITA: 'it-IT', SMR: 'it-IT', VAT: 'it-IT', PRT: 'pt-PT', BRA: 'pt-BR', AGO: 'pt-PT', MOZ: 'pt-PT', CPV: 'pt-PT', GNB: 'pt-PT', STP: 'pt-PT', TLS: 'pt-PT', SWE: 'sv-SE', ALA: 'sv-FI', NOR: 'nb-NO', SJM: 'nb-NO', DNK: 'da-DK', ISL: 'is-IS', FRO: 'fo-FO', FIN: 'fi-FI', EST: 'et-EE', JPN: 'ja-JP', KOR: 'ko-KR' } as Record<string, string>)[iso] ?? null;
}

function NatureList({ items, locale }: { items: import('@/data/fauna-musica').NatureItem[]; locale: string | null }) {
  return (
    <View className="gap-2">
      {items.map((it) => (
        <View key={it.name} className="flex-row gap-3">
          <Text className="text-3xl">{it.emoji}</Text>
          <View className="flex-1 gap-0.5">
            <View className="flex-row flex-wrap items-center gap-2">
              <Text className="font-bold text-slate-900 dark:text-white">{it.name}</Text>
              {it.local && <Text className="italic text-conecta">{it.local}</Text>}
              {it.local && locale && <SpeakButton text={it.local} locale={locale} size={14} />}
              {it.origin && <Chip label={it.origin === 'criado' ? 'criado lá' : 'tradicional'} tone={it.origin === 'criado' ? 'green' : 'slate'} />}
            </View>
            <Text className="text-sm leading-5 text-slate-600 dark:text-slate-400">{it.fact}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
