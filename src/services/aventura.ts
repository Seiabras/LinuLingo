import type { LanguagePack, UnitSeed } from '@/data/types';
import { SUBLEVELS, type SubLevel } from '@/types';
import { PARADAS_ANTARTICA, PARADAS_TERRA, type Zona } from '@/data/aventura';
import { ultimoSubnivel } from '@/data/tetos';
import { EXPEDITION_PLACES } from '@/data/expedicoes';
import { findMapLanguage, flagOf } from '@/data/onde-se-fala';
import { WORLD } from '@/data/mapa-mundi';
import type { PixelIconName } from '@/components/PixelIcon';

const ICONES_TERRA: PixelIconName[] = ['cidade', 'torre', 'casas'];

/** Uma parada da aventura: um subnível da trilha num lugar (Antártica, mar ou o país do idioma). */
export interface Parada {
  level: SubLevel;
  id: string;
  name: string;
  region: string;
  emoji: string;
  icone: PixelIconName;
  zona: Zona;
  amigo?: string;
  fala: string;
  fact?: string;
  /** a primeira parada em terra firme */
  desembarque?: boolean;
  /**
   * A posição desta parada na rota inteira de 15 (0 = Ilha Meia-Lua, 8 = desembarque). Numa trilha
   * curta (idioma com teto baixo) as paradas pulam posições; as moradias se liberam por esta posição.
   */
  ordem: number;
  /** a unidade da trilha deste subnível (null: o idioma ainda não chegou até aqui) */
  unit: UnitSeed | null;
}

export interface Destino {
  /** ISO 3166-1 alfa-3 ('' para uma região sem país, como o Curdistão) */
  iso: string;
  name: string;
  flag: string;
}

/**
 * O país onde o Linu desembarca: o das cidades das expedições, se o idioma tem; senão o primeiro país
 * onde a língua é oficial no mapa de “Onde se fala” (ou, sem nenhum oficial, o primeiro da lista); e,
 * para as línguas que não estão nesse mapa (várias indígenas, o mirandês, o manchu…), o país da
 * bandeira do próprio pacote (🇧🇷 → Brasil).
 */
export function destinoDoIdioma(code: string, flag = ''): Destino | null {
  if (REGIOES_SEM_PAIS[code]) return REGIOES_SEM_PAIS[code];
  const iso = EXPEDITION_PLACES[code]?.[0]?.country ?? pickCountry(code) ?? PAIS_HISTORICO[code];
  const c = iso ? WORLD.find((w) => w.iso === iso) : WORLD.find((w) => w.iso2 === iso2OfFlag(flag));
  return c ? { iso: c.iso, name: c.name, flag: flagOf(c.iso2) } : null;
}

/**
 * Línguas reais sem falantes nativos vivos, por isso de fora do CLDR e do mapa de "onde se fala" (e,
 * como seus pacotes usam uma bandeira simbólica, também fora do fallback por bandeira): um país onde
 * a língua é hoje estudada e lembrada, não onde ela "ainda é falada" (não é, em lugar nenhum).
 */
const PAIS_HISTORICO: Record<string, string> = {
  // nórdico antigo: extinto como língua do dia a dia, mas as sagas foram escritas e preservadas na
  // Islândia, e é lá que ele é mais estudado hoje (o islandês moderno é o que mais perto dele ficou).
  non: 'ISL',
  // francês antigo: extinto como língua do dia a dia, mas a Chanson de Roland e o resto do corpus
  // (Juramentos de Estrasburgo, 842) foram escritos e são preservados e estudados na França, de
  // onde é ancestral direto do francês moderno.
  fro: 'FRA',
  // eslavo eclesiástico antigo: criado a partir de um dialeto perto de Tessalônica e padronizado
  // pra missão à Grande Morávia (863), mas a maior parte dos manuscritos que sobreviveram foi
  // escrita no Primeiro Império Búlgaro (fim do séc. X/início do XI, corte de Preslav) — é lá que
  // a língua é mais estudada e preservada hoje.
  cu: 'BGR',
};

/**
 * Línguas de povos sem estado próprio: o Linu desembarca na região, sem contorno de país no mapa
 * (o curmanji é falado na Turquia, no Iraque, na Síria e no Irã — escolher um país seria tomar partido).
 * O mesmo vale, por um motivo diferente, para as construídas internacionais (sem pátria por design,
 * ver `lineage.region` de cada pacote em `src/data/<code>/index.ts`) e para o klingon (língua fictícia,
 * sem povo nem território reais): inventar um país "simbólico" para elas seria menos honesto do que
 * dizer que não têm nenhum.
 */
const REGIOES_SEM_PAIS: Record<string, Destino> = {
  kmr: { iso: '', name: 'Curdistão', flag: '☀️' },
  vo: { iso: '', name: 'nenhum país', flag: '🌐' },
  tok: { iso: '', name: 'nenhum país', flag: '🌱' },
  jbo: { iso: '', name: 'nenhum país', flag: '🧮' },
  io: { iso: '', name: 'nenhum país', flag: '🧩' },
  tlh: { iso: '', name: 'espaço (ficção)', flag: '🖖' },
  nov: { iso: '', name: 'nenhum país', flag: '🧭' },
  isv: { iso: '', name: 'nenhum país', flag: '🔗' },
};

/** 🇧🇷 → 'BR' (as duas letras de indicador regional da bandeira); '' se não for bandeira de país. */
export function iso2OfFlag(flag: string): string {
  const cps = [...flag].map((ch) => ch.codePointAt(0)! - 0x1f1e6);
  return cps.length === 2 && cps.every((n) => n >= 0 && n < 26) ? String.fromCharCode(65 + cps[0], 65 + cps[1]) : '';
}

function pickCountry(code: string): string | undefined {
  const lang = findMapLanguage(code);
  if (!lang) return undefined;
  return (lang.countries.find((c) => c.role === 'oficial') ?? lang.countries.find((c) => c.role === 'regional') ?? lang.countries[0])?.iso;
}

const FALAS_TERRA = [
  'Que cidade! Repara como as pessoas falam na rua.',
  'Mais uma cidade nova. Bora conversar com quem mora aqui?',
  'Olha só onde a gente chegou! Anota tudo no diário.',
  'Daqui dá pra ouvir a língua em todo canto. Presta atenção nos detalhes.',
  'Cada cidade tem o seu jeito de falar. Vamos descobrir o desta.',
  'Quase no fim da viagem! Agora você já entende muito do que ouve.',
];

/** As paradas da Antártica e do mar que uma trilha de `n` paradas usa antes do desembarque. */
function antarticaDaTrilha(n: number): number[] {
  // trilha inteira (teto B2 ou mais): as 8 paradas, e o desembarque vem na 9ª
  if (n > PARADAS_ANTARTICA.length) return PARADAS_ANTARTICA.map((_, i) => i);
  // trilha curta (pedido do dono do app, 08/10/2026): a última parada é sempre o desembarque no país;
  // antes dela, as primeiras paradas da península e, se couber, o Drake (o navio que leva até lá)
  const antes = n - 1;
  const drake = PARADAS_ANTARTICA.findIndex((p) => p.id === 'drake');
  if (antes <= 1) return [0];
  return [...Array.from({ length: antes - 1 }, (_, i) => i), drake];
}

/**
 * As paradas da trilha do idioma, de A1.1 (a colônia do Linu) ao teto do idioma (`src/data/tetos.ts`):
 * 15 para quem vai até o C2, menos para quem tem material só até um nível mais baixo — e toda trilha
 * termina em terra, no país do idioma.
 */
export function rotaDaAventura(pack: Pick<LanguagePack, 'code' | 'name' | 'flag' | 'units'>): Parada[] {
  const unitOf = (level: SubLevel) => pack.units.find((u) => u.level === level) ?? null;
  const destino = destinoDoIdioma(pack.code, pack.flag);
  const pais = destino?.name ?? `a terra do ${pack.name.toLowerCase()}`;
  const flag = destino?.flag ?? pack.flag;
  const cidades = (EXPEDITION_PLACES[pack.code] ?? []).slice(0, PARADAS_TERRA);
  // até o teto; ou até a última unidade que já existe, se o curso tiver ido além (nunca esconde conteúdo)
  const n = Math.max(SUBLEVELS.indexOf(ultimoSubnivel(pack.code)), ...pack.units.map((u) => SUBLEVELS.indexOf(u.level))) + 1;
  const mar = antarticaDaTrilha(n);
  const paradas: Parada[] = mar.map((ordem, i) => ({ ...PARADAS_ANTARTICA[ordem], ordem, level: SUBLEVELS[i], unit: unitOf(SUBLEVELS[i]) }));
  for (let k = 0; k < n - mar.length; k++) {
    const level = SUBLEVELS[mar.length + k];
    const unit = unitOf(level);
    const cidade = cidades[k];
    const regiao = cidade ? (WORLD.find((w) => w.iso === cidade.country)?.name ?? pais) : pais;
    paradas.push({
      level,
      ordem: PARADAS_ANTARTICA.length + k,
      id: `terra-${k + 1}`,
      name: cidade ? cidade.cityPt : k === 0 ? pais : (unit?.title ?? `${pais}, parada ${k + 1}`),
      region: k === 0 ? `${flag} Desembarque` : `${flag} ${regiao}`,
      emoji: k === 0 ? '⚓' : cidade ? '🏙️' : (unit?.emoji ?? '📍'),
      icone: k === 0 ? 'ancora' : ICONES_TERRA[(k - 1) % ICONES_TERRA.length],
      zona: 'terra',
      fala: k === 0 ? `Terra à vista! Depois de tanto gelo e tanto mar, chegamos: ${pais}.` : FALAS_TERRA[(k - 1) % FALAS_TERRA.length],
      ...(cidade ? { fact: cidade.fact } : {}),
      ...(k === 0 ? { desembarque: true } : {}),
      unit,
    });
  }
  return paradas;
}
