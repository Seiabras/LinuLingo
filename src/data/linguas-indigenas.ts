import type { GlottologRow } from './linguas-glottolog';
import { regionOf } from './regioes';

/**
 * Línguas indígenas e ameaçadas de cada país, a partir do Glottolog (o mesmo arquivo do mapa,
 * carregado sob demanda). O grau de risco é a escala AES do Glottolog, que junta as avaliações da
 * UNESCO, do Ethnologue e do Catálogo de Línguas Ameaçadas: o que conta é se as crianças ainda
 * aprendem a língua em casa.
 */
export const RISK_LEVELS = [
  { level: 0, label: 'não ameaçada', color: '#16A34A', text: 'as crianças aprendem a língua em casa e ela é usada no dia a dia.' },
  { level: 1, label: 'ameaçada', color: '#CA8A04', text: 'todas as gerações ainda falam, mas ela perde espaço para outra língua.' },
  { level: 2, label: 'em declínio', color: '#EA580C', text: 'os pais falam, mas as crianças já não aprendem como primeira língua.' },
  { level: 3, label: 'moribunda', color: '#DC2626', text: 'só a geração dos avós ainda fala.' },
  { level: 4, label: 'quase extinta', color: '#9F1239', text: 'restam poucos falantes, quase todos idosos.' },
  { level: 5, label: 'extinta', color: '#64748B', text: 'ninguém mais a tem como língua materna. Muitos povos preferem dizer “adormecida”, e alguns a estão retomando a partir de registros antigos e da memória dos mais velhos.' },
] as const;

/** Nas Américas e na Oceania, «indígena» tem um sentido claro: as línguas de antes da colonização. */
const CONTINENT: Record<string, string> = { sa: 'américas', na: 'américas', ca: 'américas', oc: 'oceania' };
const continentOf = (iso3: string) => {
  const r = regionOf(iso3);
  return r ? CONTINENT[r.region.id] : undefined;
};
/** Não são línguas de um povo: línguas de sinais nacionais, pidgins e línguas mistas. */
const NOT_A_PEOPLE = new Set(['Língua de sinais', 'Pidgin', 'Língua mista']);

export type ListScope = 'indigenas' | 'ameacadas';

/**
 * O que a aba mostra para um país: nas Américas e na Oceania, todas as línguas indígenas (as de
 * família indo-europeia chegaram com a colonização ou a imigração); no resto do mundo, onde quase
 * todas as línguas são nativas, as que estão em risco.
 */
export function scopeOf(iso3: string): ListScope {
  return continentOf(iso3) ? 'indigenas' : 'ameacadas';
}

export interface IndigenousLanguage {
  code: string;
  name: string;
  family: string;
  /** 0–5 (RISK_LEVELS); sem dado fica de fora das contas */
  level: number | null;
  /** Onde o Glottolog põe a língua, dentro deste país (ISO 3166-2) */
  subdivision?: string;
  /** Outros países onde também é falada */
  alsoIn: string[];
  glottocode: string;
}

/** O Glottolog separa «não classificada» (ainda não estudada) de «inclassificável» (poucos dados). */
const familyName = (f: string) => (f === 'Unclassifiable' ? 'Inclassificável (poucos registros)' : f);

type Place = [iso: string, subdivision?: string];
const placesOf = (spec: string) => spec.split(' ').map((x) => x.split('>') as Place);

/**
 * As línguas de um país. Nas Américas e na Oceania entram as indígenas faladas ali: as que o Glottolog
 * situa no país e as de povos que vivem dos dois lados de uma fronteira (o ticuna no Brasil, na
 * Colômbia e no Peru); ficam de fora as que chegaram de outro continente (o indonésio nos EUA).
 */
export function languagesOfCountry(rows: GlottologRow[], iso3: string): IndigenousLanguage[] {
  const scope = scopeOf(iso3);
  const continent = continentOf(iso3);
  // as famílias que têm alguma língua situada neste continente
  const nativeFamilies = new Set<string>();
  if (continent) for (const [, , family, , spec] of rows) if (placesOf(spec).some(([iso, sub]) => sub && continentOf(iso) === continent)) nativeFamilies.add(family);
  const out: IndigenousLanguage[] = [];
  for (const [code, name, family, status, spec, glottocode] of rows) {
    if (NOT_A_PEOPLE.has(family)) continue;
    const places = placesOf(spec);
    const here = places.find(([iso]) => iso === iso3);
    if (!here) continue;
    if (scope === 'indigenas') {
      if (family === 'Indo-europeu') continue;
      const homes = places.filter(([, sub]) => sub).map(([iso]) => iso);
      const native = here[1] ? true : homes.length ? homes.every((iso) => continentOf(iso) === continent) : nativeFamilies.has(family);
      if (!native) continue;
    }
    if (scope === 'ameacadas' && !(status >= 1)) continue;
    out.push({
      code,
      name,
      family: familyName(family),
      level: status >= 0 ? status : null,
      subdivision: here[1],
      alsoIn: places.map(([iso]) => iso).filter((iso) => iso !== iso3),
      glottocode,
    });
  }
  // as mais ameaçadas (ainda faladas) primeiro, as extintas no fim, as sem dado por último
  const rank = (l: IndigenousLanguage) => (l.level === null ? 7 : l.level === 5 ? 6 : 5 - l.level);
  return out.sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name, 'pt'));
}

/** Quantas línguas em cada grau (índice = grau) e quantas sem dado. */
export function riskCounts(list: IndigenousLanguage[]): { byLevel: number[]; unknown: number } {
  const byLevel = RISK_LEVELS.map(() => 0);
  let unknown = 0;
  for (const l of list) {
    if (l.level === null) unknown++;
    else byLevel[l.level]++;
  }
  return { byLevel, unknown };
}

/** As famílias do país, da que tem mais línguas para a que tem menos. */
export function familiesOf(list: IndigenousLanguage[]): [string, number][] {
  const m = new Map<string, number>();
  for (const l of list) m.set(l.family, (m.get(l.family) ?? 0) + 1);
  return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'pt'));
}
