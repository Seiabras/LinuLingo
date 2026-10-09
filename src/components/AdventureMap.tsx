import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Defs, Ellipse, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg';
import { PixelIcon, type PixelIconName } from './PixelIcon';
import { LinuPixel } from './LinuPixel';
import { useIsDark } from '@/services/theme';
import { WORLD } from '@/data/mapa-mundi';
import { focusBox, ringBoxes } from '@/services/mapa-geo';
import type { Parada } from '@/services/aventura';

/** Os enfeites do mapa: entre que paradas (índice da de baixo) e de que lado. */
const ENFEITES: { icone: PixelIconName; entre: number; lado: 'esq' | 'dir' | 'auto' }[] = [
  { icone: 'pinguim', entre: 0, lado: 'auto' },
  { icone: 'iceberg', entre: 1, lado: 'auto' },
  { icone: 'pinguim', entre: 3, lado: 'auto' },
  { icone: 'iceberg', entre: 4, lado: 'auto' },
  { icone: 'baleia', entre: 6, lado: 'auto' },
  { icone: 'casas', entre: 9, lado: 'auto' },
  { icone: 'casas', entre: 12, lado: 'auto' },
];

export type ParadaEstado = 'feita' | 'atual' | 'aberta' | 'bloqueada' | 'construcao';
export type TravessiaEstado = 'feita' | 'atual' | 'bloqueada' | null;

/** Distância vertical entre duas paradas no mapa. */
const STEP = 132;
const PAD_TOP = 70;
const PAD_BOTTOM = 90;

const C = {
  light: { ice: '#EAF6FF', ice2: '#D6ECFA', floe: '#FFFFFF', sea: '#2F7FB8', sea2: '#1E5F93', wave: '#BFE3FF', land: '#CFE8B4', land2: '#A9D18E', sand: '#F3E2B3', hill: '#8DBF74', country: '#5E9A4A', path: '#0F766E' },
  dark: { ice: '#16324D', ice2: '#10273D', floe: '#2A4A68', sea: '#0D3557', sea2: '#08243D', wave: '#2E6A96', land: '#23402A', land2: '#1A3220', sand: '#4A3F25', hill: '#2F5634', country: '#4C8A5A', path: '#2DD4BF' },
};

/**
 * O mapa da aventura: um mapa ilustrado que se lê de baixo para cima, como quem viaja para o norte —
 * o gelo da Antártica embaixo (onde a viagem começa), o mar no meio e, no alto, a terra do idioma
 * estudado, com o contorno do país. O caminho serpenteia entre as 15 paradas; entre uma parada e a
 * próxima fica a travessia (o desafio da unidade). O Linu fica de pé na parada atual, e o mapa já abre
 * rolado até ela.
 */
export function AdventureMap({
  paradas,
  estados,
  travessias,
  pais,
  reparos,
  onParada,
  onTravessia,
}: {
  paradas: Parada[];
  estados: ParadaEstado[];
  travessias: TravessiaEstado[];
  /** palavras vencidas no SRS por parada (0 = não precisa de reparo); ver `src/services/reparo.ts` */
  reparos?: number[];
  /** ISO alfa-3 do país do desembarque (para o contorno), se houver */
  pais?: string | null;
  onParada: (i: number) => void;
  onTravessia: (i: number) => void;
}) {
  const dark = useIsDark();
  const col = dark ? C.dark : C.light;
  const { height: winH } = useWindowDimensions();
  const [w, setW] = useState(0);
  const scroll = useRef<ScrollView>(null);
  const n = paradas.length;
  const H = PAD_TOP + PAD_BOTTOM + (n - 1) * STEP;
  const viewH = Math.min(Math.max(380, winH * 0.62), 620);

  // de baixo (A1.1) para cima (C2), serpenteando
  const pts = useMemo(
    () => paradas.map((_, i) => ({ x: w / 2 + Math.sin(i * 1.15 + 0.3) * w * 0.27, y: H - PAD_BOTTOM - i * STEP })),
    [paradas, w, H],
  );
  const mid = (i: number) => {
    const a = pts[i];
    const b = pts[i + 1];
    // o ponto da curva (quadrática de a até b, controle em (a.x, b.y)) na metade da altura entre as duas
    // paradas: y(t) chega à metade em t = 1 − √½, onde x(t) = a.x + t²·(b.x − a.x)
    const t2 = (1 - Math.SQRT1_2) ** 2;
    return { x: a.x + t2 * (b.x - a.x), y: (a.y + b.y) / 2 };
  };

  const firstLand = paradas.findIndex((p) => p.zona === 'terra');
  const firstSea = paradas.findIndex((p) => p.zona === 'mar');
  const yLand = firstLand > 0 ? (pts[firstLand - 1]?.y + pts[firstLand]?.y) / 2 : 0;
  const yIce = firstSea > 0 ? (pts[firstSea - 1]?.y + pts[firstSea]?.y) / 2 : H;

  // onde o Linu está: a parada atual, ou a última concluída (quando o curso todo já foi feito)
  const atual = estados.indexOf('atual');
  const current = atual >= 0 ? atual : Math.max(0, estados.lastIndexOf('feita'));
  const toCurrent = () => {
    if (!w || !pts[current]) return;
    scroll.current?.scrollTo({ y: Math.max(0, pts[current].y - viewH / 2), animated: false });
  };
  useEffect(() => {
    const t = setTimeout(toCurrent, 0);
    return () => clearTimeout(t);
  }, [w, current, pts, viewH]); // eslint-disable-line react-hooks/exhaustive-deps

  const route = pts.length ? pts.slice(1).reduce((d, p, i) => `${d} Q ${pts[i].x} ${p.y} ${p.x} ${p.y}`, `M ${pts[0].x} ${pts[0].y}`) : '';
  const doneUntil = estados.reduce((last, e, i) => (e === 'feita' ? i : last), -1);
  const routeDone = doneUntil >= 0 ? pts.slice(1, doneUntil + 2).reduce((d, p, i) => `${d} Q ${pts[i].x} ${p.y} ${p.x} ${p.y}`, `M ${pts[0].x} ${pts[0].y}`) : '';

  const country = useMemo(() => {
    if (!pais || !w || firstLand < 0) return null;
    const c = WORLD.find((x) => x.iso === pais);
    if (!c?.d) return null;
    const box = focusBox(ringBoxes(c.d));
    if (!box) return null;
    const areaH = yLand - 30;
    const s = Math.min((w * 0.8) / box.w, (areaH * 0.8) / box.h);
    const tx = w / 2 - (box.x + box.w / 2) * s;
    const ty = areaH / 2 + 10 - (box.y + box.h / 2) * s;
    return { d: c.d, transform: `translate(${tx} ${ty}) scale(${s})`, stroke: 1.5 / s };
  }, [pais, w, firstLand, yLand]);

  return (
    <View
      onLayout={(e) => setW(e.nativeEvent.layout.width)}
      className="overflow-hidden rounded-3xl border-2 border-aurora/40 dark:border-aurora/30"
      style={{ height: viewH }}
    >
      {w > 0 && (
        <ScrollView ref={scroll} nestedScrollEnabled showsVerticalScrollIndicator={false} accessibilityLabel="Mapa da aventura" onContentSizeChange={toCurrent}>
          <View style={{ width: w, height: H }}>
            <Svg width={w} height={H} style={{ position: 'absolute' }}>
              <Defs>
                <LinearGradient id="mar" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor={col.sea} />
                  <Stop offset="1" stopColor={col.sea2} />
                </LinearGradient>
                <LinearGradient id="gelo" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor={col.ice2} />
                  <Stop offset="1" stopColor={col.ice} />
                </LinearGradient>
                <LinearGradient id="terra" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor={col.land2} />
                  <Stop offset="1" stopColor={col.land} />
                </LinearGradient>
              </Defs>
              {/* o mar por baixo de tudo */}
              <Rect x={0} y={0} width={w} height={H} fill="url(#mar)" />
              {[...Array(Math.ceil(H / 46))].map((_, i) => (
                <Path key={i} d={`M ${(i * 53) % (w * 0.7)} ${i * 46 + 20} q 10 -6 20 0 t 20 0`} stroke={col.wave} strokeWidth={2} fill="none" opacity={0.45} strokeLinecap="round" />
              ))}
              {/* a terra do idioma, no alto, com uma praia na beira e o contorno do país */}
              {firstLand > 0 && (
                <G>
                  <Path d={`M 0 0 H ${w} V ${yLand - 18} Q ${w * 0.75} ${yLand + 14} ${w / 2} ${yLand - 6} T 0 ${yLand - 10} Z`} fill={col.sand} />
                  <Path d={`M 0 0 H ${w} V ${yLand - 34} Q ${w * 0.75} ${yLand - 4} ${w / 2} ${yLand - 22} T 0 ${yLand - 26} Z`} fill="url(#terra)" />
                  {country && <Path d={country.d} transform={country.transform} fill={col.country} opacity={0.35} stroke={col.country} strokeWidth={country.stroke} />}
                  {[0.15, 0.82, 0.3, 0.68].map((fx, i) => (
                    <Path key={i} d={`M ${w * fx - 26} ${120 + i * 160} q 26 -34 52 0 Z`} fill={col.hill} opacity={0.6} />
                  ))}
                </G>
              )}
              {/* o gelo da Antártica, embaixo, com a borda recortada e blocos de gelo soltos */}
              <Path
                d={`M 0 ${yIce + 20} Q ${w * 0.2} ${yIce - 12} ${w * 0.38} ${yIce + 10} T ${w * 0.7} ${yIce + 4} T ${w} ${yIce + 16} V ${H} H 0 Z`}
                fill="url(#gelo)"
              />
              {[
                [0.12, 30],
                [0.86, 70],
                [0.6, -10],
                [0.3, -24],
              ].map(([fx, dy], i) => (
                <Ellipse key={i} cx={w * fx} cy={yIce + dy - 34} rx={18 + i * 4} ry={7} fill={col.floe} opacity={0.85} />
              ))}
              {/* a rota: tracejada inteira e cheia até onde o aluno já chegou */}
              <Path d={route} stroke={col.floe} strokeWidth={6} fill="none" opacity={0.5} strokeLinecap="round" />
              <Path d={route} stroke={col.path} strokeWidth={3} strokeDasharray="8 8" fill="none" strokeLinecap="round" />
              {!!routeDone && <Path d={routeDone} stroke={col.path} strokeWidth={4} fill="none" strokeLinecap="round" />}
            </Svg>

            {/* enfeites em pixel art nas bordas do mapa: icebergs e pinguins no gelo, baleia no mar, casas na terra */}
            {pts.length > 0 &&
              ENFEITES.map(({ icone, entre, lado }, i) => {
                const a = pts[entre];
                const b = pts[entre + 1];
                if (!a || !b) return null;
                const y = (a.y + b.y) / 2 - 14;
                // do lado oposto ao da curva naquele trecho, para não cobrir o caminho nem os nomes
                const left = lado === 'auto' ? ((a.x + b.x) / 2 > w / 2 ? 10 : w - 42) : lado === 'esq' ? 10 : w - 42;
                return (
                  <View key={i} pointerEvents="none" style={{ position: 'absolute', left, top: y }}>
                    <PixelIcon name={icone} size={30} />
                  </View>
                );
              })}

            {/* as travessias, no meio do caminho entre uma parada e a próxima */}
            {pts.slice(0, -1).map((_, i) => {
              const t = travessias[i];
              if (!t) return null;
              const m = mid(i);
              return (
                <Pressable
                  key={`t${i}`}
                  accessibilityRole="button"
                  accessibilityLabel={`Travessia de ${paradas[i].name} para ${paradas[i + 1].name}: ${t === 'feita' ? 'feita' : t === 'atual' ? 'pronta para atravessar' : 'bloqueada'}`}
                  onPress={() => onTravessia(i)}
                  hitSlop={8}
                  style={{ position: 'absolute', left: m.x - 17, top: m.y - 17 }}
                  className={`h-[34px] w-[34px] items-center justify-center rounded-full border-2 ${
                    t === 'feita' ? 'border-conquista bg-green-50 dark:bg-green-950' : t === 'atual' ? 'border-fogo bg-orange-50 dark:bg-orange-950' : 'border-slate-300 bg-white/80 dark:border-slate-600 dark:bg-slate-800/80'
                  }`}
                >
                  {t === 'feita' ? <Text className="text-base font-extrabold text-conquista">✓</Text> : <PixelIcon name="onda" size={22} dim={t === 'bloqueada'} />}
                </Pressable>
              );
            })}

            {/* as paradas */}
            {paradas.map((p, i) => {
              const e = estados[i];
              const pt = pts[i];
              const right = pt.x < w / 2;
              const cur = e === 'atual';
              const dim = e === 'bloqueada' || e === 'construcao';
              const reparo = reparos?.[i] ?? 0;
              return (
                <View key={p.id} style={{ position: 'absolute', left: pt.x - 30, top: pt.y - 30 }}>
                  {cur && <View pointerEvents="none" className="absolute -left-2 -top-2 h-[76px] w-[76px] rounded-full border-2 border-dashed border-aurora" />}
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Parada ${p.level}: ${p.name}. ${e === 'feita' ? 'Concluída' : cur ? 'Você está aqui' : e === 'aberta' ? 'Em andamento' : e === 'construcao' ? 'Em construção' : 'Bloqueada'}${reparo ? `. Precisa de reparo: ${reparo} palavras quase esquecidas` : ''}`}
                    onPress={() => onParada(i)}
                    className={`h-[60px] w-[60px] items-center justify-center rounded-full border-4 ${
                      cur ? 'border-conecta bg-white dark:bg-slate-900' : e === 'feita' ? 'border-conquista bg-white dark:bg-slate-900' : e === 'aberta' ? 'border-aurora bg-white dark:bg-slate-900' : 'border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800'
                    }`}
                  >
                    <PixelIcon name={e === 'construcao' ? 'obra' : p.icone} size={36} dim={dim} />
                    {reparo > 0 && (
                      <View className="absolute -left-2 -top-2 h-7 w-7 items-center justify-center rounded-full border-2 border-fogo bg-orange-50 dark:bg-orange-950">
                        <PixelIcon name="chave" size={18} />
                      </View>
                    )}
                    {e === 'feita' && (
                      <View className="absolute -bottom-1 -right-1 h-5 w-5 items-center justify-center rounded-full bg-conquista">
                        <Text className="text-[10px] font-extrabold text-white">✓</Text>
                      </View>
                    )}
                  </Pressable>
                  <Pressable
                    onPress={() => onParada(i)}
                    importantForAccessibility="no"
                    accessibilityElementsHidden
                    style={{ position: 'absolute', top: 8, width: Math.min(150, w * 0.42), ...(right ? { left: 70 } : { right: 70 }) }}
                    className={`rounded-xl px-2 py-1 ${dim ? 'bg-white/85 dark:bg-slate-900/85' : 'bg-white/90 dark:bg-slate-900/90'}`}
                  >
                    <Text className={`text-[10px] font-extrabold uppercase tracking-wider ${cur ? 'text-conecta dark:text-blue-400' : 'text-aurora-dark dark:text-aurora'}`}>{p.level}</Text>
                    <Text numberOfLines={2} className={`text-xs font-bold ${dim ? 'text-slate-600 dark:text-slate-400' : 'text-slate-800 dark:text-slate-100'}`}>
                      {p.name}
                    </Text>
                  </Pressable>
                  {i === current && (
                    // do lado oposto ao do nome da parada, para não cobrir o caminho nem o nome
                    <View pointerEvents="none" style={{ position: 'absolute', top: -8, ...(right ? { left: -46 } : { left: 62 }) }}>
                      <LinuPixel width={38} />
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
