import { Fragment, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { WORLD } from '@/data/mapa-mundi';
import { ISO_3166_2 } from '@/data/iso-3166-2';
import { fitBox, focusBox, ringBoxes, type SubShape } from '@/services/mapa-geo';
import { loadSubdivisions } from '@/services/subdivisoes';
import { useIsDark } from '@/services/theme';
import { tapProps } from '@/services/svg-tap';

/** Nome da região em português (lista ISO 3166-2); senão, o do Natural Earth. */
export function regionName(iso3: string, sh: Pick<SubShape, 'code' | 'name'>): string {
  const iso2 = WORLD.find((c) => c.iso === iso3)?.iso2 ?? '';
  return (sh.code && ISO_3166_2[iso2]?.find(([c]) => c === sh.code)?.[1]) || sh.name;
}

/** Nome em português de um código ISO 3166-2 (para as dicas). */
export function regionNameByCode(iso3: string, code: string): string | null {
  const iso2 = WORLD.find((c) => c.iso === iso3)?.iso2 ?? '';
  return ISO_3166_2[iso2]?.find(([c]) => c === code)?.[1] ?? null;
}

/**
 * Alvo de toque mínimo: numa capital pequena dentro de um país grande (Buenos Aires na Argentina,
 * Paris na França, Moscou na Rússia...), o desenho da região fica quase um pontinho na vista do país
 * inteiro — quase impossível de tocar com o dedo certinho (achado do dono, 15/10/2026, item 12a do
 * RESOLVER-14-10). Em vez de aumentar o desenho (o que entregaria a resposta visualmente), as regiões
 * pequenas ganham um círculo invisível maior em volta do centro, só para o toque.
 */
const MIN_TAP_RADIUS_RATIO = 0.035; // fração da largura da vista atual (do país inteiro)

/**
 * O mapa das regiões de um país, cada uma tocável (sem nomes: é para achar). Depois de revelar,
 * as certas ficam verdes; as tocadas por engano, vermelhas. Cada região tem o id «regiao-CÓDIGO».
 */
export function RegionTapMap({
  country,
  isTarget,
  reveal,
  wrong = [],
  disabled,
  onTap,
  height = 260,
}: {
  country: string;
  isTarget: (sh: SubShape) => boolean;
  reveal: boolean;
  wrong?: string[];
  disabled?: boolean;
  onTap: (sh: SubShape) => void;
  height?: number;
}) {
  const dark = useIsDark();
  const [subs, setSubs] = useState<{ iso: string; list: SubShape[] } | null>(null);
  useEffect(() => {
    let alive = true;
    loadSubdivisions(country).then((list) => alive && setSubs({ iso: country, list }));
    return () => {
      alive = false;
    };
  }, [country]);
  const c = WORLD.find((w) => w.iso === country);
  if (!c?.d) return null;
  const box = focusBox(ringBoxes(c.d)) ?? { x: c.cx - 2, y: c.cy - 2, w: 4, h: 4 };
  const v = fitBox(box, 0.75, 0.08);
  const px = v.w / 360;
  const list = subs?.iso === country ? subs.list : null;
  return (
    <View className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
      <Svg width="100%" height={height} viewBox={`${v.x} ${v.y} ${v.w} ${v.h}`} preserveAspectRatio="xMidYMid meet">
        <Rect x={v.x - v.w} y={v.y - v.h} width={v.w * 3} height={v.h * 3} fill={dark ? '#0B1220' : '#E0F2FE'} />
        {WORLD.filter((w) => w.d).map((w) => (
          <Path key={w.iso} d={w.d} fill={dark ? '#1E293B' : '#CBD5E1'} stroke={dark ? '#0F172A' : '#FFFFFF'} strokeWidth={px} />
        ))}
        {list?.map((sh, i) => {
          const fill = reveal && isTarget(sh) ? '#16A34A' : sh.code && wrong.includes(sh.code) ? '#E11D48' : dark ? '#475569' : '#E2E8F0';
          const minR = v.w * MIN_TAP_RADIUS_RATIO;
          const visualR = Math.sqrt(Math.max(sh.area, 0) / Math.PI);
          return (
            <Fragment key={i}>
              <Path id={sh.code ? `regiao-${sh.code}` : undefined} d={sh.d} fill={fill} stroke={dark ? '#0F172A' : '#FFFFFF'} strokeWidth={px * 0.7} {...(disabled ? {} : tapProps(() => onTap(sh)))} />
              {!disabled && visualR < minR && <Circle cx={sh.cx} cy={sh.cy} r={minR} fill="#000000" opacity={0.01} {...tapProps(() => onTap(sh))} />}
            </Fragment>
          );
        })}
      </Svg>
      {!list && (
        <View className="absolute bottom-2 left-3">
          <Text className="text-xs text-slate-600 dark:text-slate-400">Carregando as regiões…</Text>
        </View>
      )}
    </View>
  );
}
