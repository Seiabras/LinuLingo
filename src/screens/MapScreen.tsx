import { useMemo, useState } from 'react';
import { LogBox, Pressable, ScrollView, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';
import { ArrowLeft, Minus, Plus } from 'lucide-react-native';
import { Screen, Button, Card, Chip, SectionTitle, SpeakButton } from '@/components/ui';
import { useApp } from '@/services/app-state';
import { MAP_H, MAP_W, WORLD, type MapCountry } from '@/data/mapa-mundi';
import { flagOf, languagesIn, MAP_LANGUAGES, ROLE_LABEL, type LangRole } from '@/data/onde-se-fala';
import { FAUNA_MUSICA } from '@/data/fauna-musica';
import { ISO_3166_2 } from '@/data/iso-3166-2';
import { FORMER_COUNTRIES, KIND_LABEL, type FormerCountry } from '@/data/iso-3166-3';
import { isAvailable } from '@/data/idiomas';
import { updateUser } from '@/database/queries';
import { goBack } from '@/services/nav';
import { useIsDark } from '@/services/theme';

type Box = { x: number; y: number; w: number; h: number };

// Na web o react-native-svg repassa os props de toque (onResponder…) ao HTML: o toque funciona,
// mas o React avisa em modo de desenvolvimento. Aviso conhecido e inofensivo.
LogBox.ignoreLogs(['Unknown event handler property']);

const REGIONS: [string, Box][] = [
  ['Mundo', { x: 0, y: 0, w: MAP_W, h: MAP_H }],
  ['Europa', { x: 455, y: 20, w: 175, h: 130 }],
  ['Leste Europeu', { x: 522, y: 66, w: 92, h: 62 }],
  ['Américas', { x: 90, y: 20, w: 350, h: 420 }],
  ['África', { x: 440, y: 125, w: 210, h: 250 }],
  ['Ásia', { x: 545, y: 20, w: 380, h: 270 }],
  ['Oceania', { x: 760, y: 230, w: 190, h: 180 }],
];

const OPACITY: Record<LangRole, number> = { oficial: 1, regional: 0.55, diaspora: 0.28 };

/**
 * Mapa-múndi clicável: escolha um idioma para ver onde é falado (oficial, regional,
 * diáspora); toque num país para ver as línguas, os animais nativos e os instrumentos de lá.
 */
export default function MapScreen() {
  const { db, pack, refresh, variant, setVariant } = useApp();
  const dark = useIsDark();
  const ordered = useMemo(() => [...MAP_LANGUAGES].sort((a, b) => (a.code === pack.code ? -1 : b.code === pack.code ? 1 : 0)), [pack.code]);
  const [langCode, setLangCode] = useState(pack.code);
  const lang = MAP_LANGUAGES.find((l) => l.code === langCode) ?? MAP_LANGUAGES[0];
  const [selected, setSelected] = useState<MapCountry | null>(() => WORLD.find((c) => c.iso === (pack.code === 'ro' ? 'ROU' : '')) ?? null);
  const [size, setSize] = useState({ w: 360, h: 240 });
  const aspect = size.h / size.w;
  const [box, setBox] = useState<Box>(REGIONS[0][1]);
  const [start, setStart] = useState<Box>(box);
  const [mode, setMode] = useState<'hoje' | 'antigos'>('hoje');
  const [former, setFormer] = useState<FormerCountry | null>(null);
  const formerHighlight = useMemo(() => new Set(former?.successors ?? []), [former]);
  const FORMER_COLOR = '#D97706';

  const roles = useMemo(() => new Map(lang.countries.map((c) => [c.iso, c])), [lang]);
  const view = { ...box, h: box.w * aspect };

  const clamp = (b: Box): Box => {
    const w = Math.min(MAP_W, Math.max(40, b.w));
    const h = w * aspect;
    return { x: Math.min(MAP_W - w, Math.max(0, b.x)), y: Math.min(Math.max(0, MAP_H - h), Math.max(0, b.y)), w, h };
  };
  const zoom = (f: number) => setBox((b) => clamp({ x: b.x + (b.w * (1 - f)) / 2, y: b.y + (b.w * aspect * (1 - f)) / 2, w: b.w * f, h: b.h }));
  const goRegion = (r: Box) => {
    // mantém a região inteira visível na proporção da tela
    const w = Math.max(r.w, r.h / aspect);
    setBox(clamp({ x: r.x + r.w / 2 - w / 2, y: r.y + r.h / 2 - (w * aspect) / 2, w, h: w * aspect }));
  };

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
    setBox({ x: Math.min(MAP_W - vw, Math.max(0, cx - vw / 2)), y: 0, w: vw, h: vw * a });
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
  const markerR = Math.max(1.2, view.w / 180);

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
        style={{ height: 260 }}
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
                      onPress={() => setSelected(c)}
                    />
                  );
                })}
              </G>
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
                    onPress={() => setSelected(c)}
                  />
                );
              })}
            </Svg>
          </View>
        </GestureDetector>
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
        {REGIONS.map(([name, r]) => (
          <Pressable key={name} onPress={() => goRegion(r)} className="rounded-full bg-slate-200 px-3 py-1 dark:bg-slate-800">
            <Text className="text-sm font-semibold text-slate-700 dark:text-slate-200">{name}</Text>
          </Pressable>
        ))}
      </ScrollView>

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
                                setSelected(c);
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
          <Text className="mt-1 text-xs text-slate-400">Arraste para mover, use a pinça ou os botões para aproximar e toque num país.</Text>

          {selected ? (
            <Card className="mt-4 gap-3">
              <Text accessibilityLabel={`País selecionado: ${selected.name}`} className="text-xl font-extrabold text-slate-900 dark:text-white">
                {flagOf(selected.iso2)} {selected.name}
              </Text>
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
              <Subdivisions iso2={selected.iso2} highlight={spoken.flatMap((x) => x.spoken.subdivisions ?? [])} />
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

function subName(iso2: string, code: string): string {
  return ISO_3166_2[iso2]?.find(([c]) => c === code)?.[1] ?? code;
}

/** Subdivisões ISO 3166-2 do país (lista completa, recolhível). */
function Subdivisions({ iso2, highlight }: { iso2: string; highlight: string[] }) {
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
            <Text
              key={code}
              className={`overflow-hidden rounded-md px-1.5 py-0.5 text-xs ${highlight.includes(code) ? 'bg-conecta text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}
            >
              {name} · {code} · {type}
            </Text>
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
