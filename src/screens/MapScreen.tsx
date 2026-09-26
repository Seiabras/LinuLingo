import { useMemo, useRef, useState } from 'react';
import { LogBox, Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';
import Svg, { Circle, G, Path, Rect, Text as SvgText } from 'react-native-svg';
import { ArrowLeft, Globe, Minus, Plus } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SectionTitle, SpeakButton } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { MAP_H, MAP_W, WORLD, type MapCountry } from '@/data/mapa-mundi';
import { byKinship, flagOf, languagesIn, MAP_LANGUAGES, ROLE_LABEL, type LangRole } from '@/data/onde-se-fala';
import { FAUNA_MUSICA } from '@/data/fauna-musica';
import { WORLD_REGIONS } from '@/data/regioes';
import { ISO_3166_2 } from '@/data/iso-3166-2';
import { FORMER_COUNTRIES, KIND_LABEL, type FormerCountry } from '@/data/iso-3166-3';
import { isAvailable } from '@/data/idiomas';
import { updateUser } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';
import { fitBox, focusBox, ringBoxes, type Box, type SubShape } from '@/services/mapa-geo';
import { hasSubdivisions, loadSubdivisions } from '@/services/subdivisoes';

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

const OPACITY: Record<LangRole, number> = { oficial: 1, regional: 0.55, diaspora: 0.28 };

/**
 * Mapa-múndi clicável: escolha um idioma para ver onde é falado (oficial, regional,
 * diáspora); toque num país para ver as línguas, os animais nativos e os instrumentos de lá.
 */
export default function MapScreen() {
  const { db, pack, refresh, variant, setVariant } = useApp();
  const dark = useIsDark();
  const ordered = useMemo(() => byKinship(pack.code), [pack.code]);
  const [langCode, setLangCode] = useState(pack.code);
  const lang = MAP_LANGUAGES.find((l) => l.code === langCode) ?? MAP_LANGUAGES[0];
  const [selected, setSelected] = useState<MapCountry | null>(() => WORLD.find((c) => c.iso === (pack.code === 'ro' ? 'ROU' : '')) ?? null);
  const [size, setSize] = useState({ w: 360, h: 240 });
  // mais alto em telas largas (tablet e computador)
  const { width: winW } = useWindowDimensions();
  const mapHeight = Math.round(Math.min(440, Math.max(260, Math.min(winW, 680) * 0.6)));
  const aspect = size.h / size.w;
  const [box, setBox] = useState<Box>({ x: 0, y: 0, w: MAP_W, h: MAP_H });
  const [start, setStart] = useState<Box>(box);
  const [mode, setMode] = useState<'hoje' | 'antigos'>('hoje');
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
    setSize({ w, h });
    if (fitted) return;
    setFitted(true);
    const home = WORLD.find((c) => c.iso === (MAP_LANGUAGES.find((l) => l.code === langCode)?.countries[0]?.iso ?? ''));
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

  const spoken = selected ? languagesIn(selected.iso) : [];
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3" contentContainerStyle={{ gap: 8 }}>
            {ordered.map((l) => (
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
          </ScrollView>
          <Text className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {lang.flag} {lang.name}: {lang.speakers}.
          </Text>
        </>
      )}
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

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2" contentContainerStyle={{ gap: 6 }}>
        <RegionChip label="🌐 Mundo" active={!region} onPress={() => goRegion(null)} />
        {WORLD_REGIONS.map((r) => (
          <RegionChip key={r.id} label={`${r.icon} ${r.name}`} active={region === r.id} onPress={() => goRegion(r.id)} />
        ))}
      </ScrollView>
      {regionData && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-1.5" contentContainerStyle={{ gap: 6 }}>
          <RegionChip small label="Todas" active={!subRegion} onPress={() => goRegion(regionData.id)} />
          {regionData.subs.map((x) => (
            <RegionChip small key={x.id} label={x.name} active={subRegion === x.id} onPress={() => goRegion(regionData.id, x.id)} />
          ))}
        </ScrollView>
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
            {(['oficial', 'regional', 'diaspora'] as LangRole[]).map((r) => (
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
              {subSel && selected.iso === focus?.iso && <SubCard iso2={selected.iso2} sub={subSel} spoken={spoken} onClose={() => setSubSel(null)} />}
              {spoken.length === 0 ? (
                <Text className="text-slate-600 dark:text-slate-400">Nenhum dos idiomas do app é falado aqui em grande escala.</Text>
              ) : (
                <View className="gap-2">
                  {spoken.map(({ lang: l, spoken: s }) => (
                    <View key={l.code} className="gap-1 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                      <View className="flex-row flex-wrap items-center gap-2">
                        <Text className="font-bold text-slate-900 dark:text-white">
                          {l.flag} {l.name}
                        </Text>
                        <Chip label={ROLE_LABEL[s.role]} tone={s.role === 'oficial' ? 'blue' : s.role === 'regional' ? 'amber' : 'slate'} />
                      </View>
                      {s.note && <Text className="text-sm text-slate-600 dark:text-slate-400">{s.note}</Text>}
                      {s.subdivisions && (
                        <Text className="text-xs text-slate-500 dark:text-slate-400">
                          📍 {s.subdivisions.map((code) => `${subName(selected.iso2, code)} (${code})`).join(' · ')}
                        </Text>
                      )}
                      {isAvailable(l.code) && l.code !== pack.code && (
                        <Button
                          title={`Estudar ${l.name.toLowerCase()}`}
                          variant="ghost"
                          onPress={async () => {
                            await updateUser(db, { current_language: l.code });
                            refresh();
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
                  ))}
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
            </Card>
          ) : (
            <Text className="mt-4 text-center text-slate-500">Toque num país para ver as línguas, os bichos e os instrumentos de lá.</Text>
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
function SubCard({ iso2, sub, spoken, onClose }: { iso2: string; sub: SubShape; spoken: ReturnType<typeof languagesIn>; onClose: () => void }) {
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
      {here.map(({ lang: l, spoken: s }) => (
        <Text key={l.code} className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          {l.flag} Aqui se fala {l.name.toLowerCase()} ({ROLE_LABEL[s.role]}).
        </Text>
      ))}
    </View>
  );
}

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
  return ({ ROU: 'ro-RO', MDA: 'ro-RO', RUS: 'ru-RU', FIN: 'fi-FI', EST: 'et-EE', JPN: 'ja-JP', KOR: 'ko-KR' } as Record<string, string>)[iso] ?? null;
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
