import type { Accent } from '@/data/types';
import { WORLD } from '@/data/mapa-mundi';
import { ALL_MAP_LANGUAGES, byKinship, findMapLanguage, languagesIn, type MapLanguage } from '@/data/onde-se-fala';
import { HOMELANDS } from '@/data/fauna-musica';
import { regionOf, WORLD_REGIONS } from '@/data/regioes';
import { shuffle } from './answers';

/**
 * Jogo do mapa: «onde se fala?» (tocar num país onde a língua é oficial), «que língua é oficial
 * aqui?» (um país aceso e 4 opções) e «onde fica o sotaque?» (tocar na região, no mapa do país).
 */
export type MapQuestion =
  | { kind: 'onde'; lang: MapLanguage; frame: string[]; place: string; accept: string[] }
  | { kind: 'qual'; iso: string; frame: string[]; options: string[]; answer: string }
  | { kind: 'sotaque'; accent: Accent };

const DRAWN = new Set(WORLD.filter((c) => c.d).map((c) => c.iso));
const officialIn = (l: MapLanguage) => l.countries.filter((c) => c.role === 'oficial' && DRAWN.has(c.iso)).map((c) => c.iso);

/** Os países em volta: a sub-região (ou a região inteira, se a sub-região for pequena demais). */
export function frameOf(iso: string): { frame: string[]; place: string } {
  const r = regionOf(iso);
  if (!r) return { frame: [iso], place: '' };
  const sub = r.sub.countries.filter((c) => DRAWN.has(c));
  if (sub.length >= 4) return { frame: sub, place: `${r.region.name} › ${r.sub.name}` };
  return { frame: r.region.subs.flatMap((s) => s.countries).filter((c) => DRAWN.has(c)), place: r.region.name };
}

/** A língua oficial «principal» de um país: a primeira oficial, pela % de quem fala. */
export function mainOfficial(iso: string): MapLanguage | null {
  return languagesIn(iso).find((x) => x.spoken.role === 'oficial')?.lang ?? null;
}

export function buildMapRound(studied: string, accents: Accent[], size = 8, rnd: () => number = Math.random): MapQuestion[] {
  // línguas para «onde se fala?»: a estudada, as parentes e as grandes, só as que são oficiais em algum país
  const kin = byKinship(studied).slice(0, 10);
  const big = ALL_MAP_LANGUAGES.filter((l) => l.millions >= 30);
  const pool = [...new Map([findMapLanguage(studied), ...kin, ...big].filter((l): l is MapLanguage => !!l && officialIn(l).length > 0).map((l) => [l.code, l])).values()];
  const langs = [pool[0], ...shuffle(pool.slice(1), rnd)].filter(Boolean);

  const withSubs = shuffle(
    accents.filter((a) => a.subdivisions?.length),
    rnd,
  );
  const nAccent = Math.min(withSubs.length, Math.round(size / 4));
  const nWhere = Math.ceil((size - nAccent) / 2);
  const nWhich = size - nAccent - nWhere;
  const out: MapQuestion[] = [];

  for (const l of langs.slice(0, nWhere)) {
    const official = officialIn(l);
    const iso = official[Math.floor(rnd() * official.length)];
    const { frame, place } = frameOf(iso);
    out.push({ kind: 'onde', lang: l, frame, place, accept: frame.filter((c) => official.includes(c)) });
  }

  // países para «que língua?»: os do idioma estudado primeiro, depois de outras línguas grandes
  const homes = shuffle(HOMELANDS[studied] ?? [], rnd);
  const others = shuffle(
    big.flatMap((l) => officialIn(l)),
    rnd,
  );
  const used = new Set<string>();
  for (const iso of [...homes.slice(0, 1), ...others]) {
    if (out.filter((q) => q.kind === 'qual').length >= nWhich) break;
    if (used.has(iso)) continue;
    const answer = mainOfficial(iso);
    if (!answer) continue;
    const { frame } = frameOf(iso);
    const officialHere = new Set(languagesIn(iso).filter((x) => x.spoken.role === 'oficial').map((x) => x.lang.code));
    // as erradas: línguas oficiais de outros países da região (as que mais confundem)
    const region = regionOf(iso)?.region ?? WORLD_REGIONS[0];
    const near = shuffle(region.subs.flatMap((s) => s.countries), rnd)
      .map((c) => mainOfficial(c))
      .filter((l): l is MapLanguage => !!l && !officialHere.has(l.code));
    const distract = [...new Map([...near, ...shuffle(big, rnd)].filter((l) => !officialHere.has(l.code)).map((l) => [l.code, l])).values()].slice(0, 3);
    if (distract.length < 3) continue;
    used.add(iso);
    out.push({ kind: 'qual', iso, frame, options: shuffle([answer.code, ...distract.map((l) => l.code)], rnd), answer: answer.code });
  }

  for (const accent of withSubs.slice(0, nAccent)) out.push({ kind: 'sotaque', accent });
  return shuffle(out, rnd);
}

/** A região tocada (código ISO 3166-2 e o pai, se houver) é a do sotaque? */
export function isAccentRegion(accent: Accent, code: string, parent?: string): boolean {
  const subs = accent.subdivisions ?? [];
  return subs.includes(code) || (!!parent && subs.includes(parent));
}
