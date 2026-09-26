/**
 * Onde cada idioma é falado, para o mapa-múndi.
 * oficial = língua oficial/nacional; regional = oficial numa região ou minoria reconhecida/grande;
 * diaspora = comunidade grande de falantes nativos fora da terra de origem.
 */
export type LangRole = 'oficial' | 'regional' | 'diaspora';

export interface SpokenIn {
  iso: string;
  role: LangRole;
  /** Variante do idioma usada ali, quando o app tem essa variante (ex.: ro-MD) */
  variant?: string;
  note?: string;
  /** Onde, dentro do país (códigos ISO 3166-2) */
  subdivisions?: string[];
}

export interface MapLanguage {
  code: string;
  name: string;
  flag: string;
  /** Cor do idioma no mapa (tom forte; regional e diáspora usam o mesmo tom mais claro) */
  color: string;
  speakers: string;
  /** Falantes nativos, em milhões (para ordenar) */
  millions: number;
  /** Família e ramos, do mais geral ao mais específico (para medir o parentesco entre idiomas) */
  lineage: string[];
  countries: SpokenIn[];
}

const o = (iso: string, extra: Partial<SpokenIn> = {}): SpokenIn => ({ iso, role: 'oficial', ...extra });
const r = (iso: string, note?: string, subdivisions?: string[]): SpokenIn => ({ iso, role: 'regional', note, subdivisions });
const d = (iso: string, note?: string): SpokenIn => ({ iso, role: 'diaspora', note });

export const MAP_LANGUAGES: MapLanguage[] = [
  {
    code: 'ro',
    name: 'Romeno',
    flag: '🇷🇴',
    color: '#2563EB',
    speakers: 'cerca de 24 milhões de falantes nativos',
    millions: 24,
    lineage: ['Indo-europeu', 'Itálico', 'Românico', 'Românico oriental'],
    countries: [
      o('ROU', { variant: 'ro-RO', note: 'Língua oficial; variante padrão ensinada no app.' }),
      o('MDA', {
        variant: 'ro-MD',
        note: 'Língua oficial (desde 2023 também chamada «limba română» na legislação). Falar com vocabulário e sotaque próprios.',
      }),
      r('UKR', 'Comunidades romenas no norte da Bucovina (Cernăuți) e na região de Odessa.', ['UA-77', 'UA-51']),
      r('SRB', 'Co-oficial na Voivodina; comunidade romena também no Vale do Timoc.', ['RS-VO']),
      r('HUN', 'Minoria romena reconhecida no leste do país.', ['HU-BE', 'HU-HB']),
      r('BGR', 'Comunidades romenas às margens do Danúbio.', ['BG-05']),
      r('GRC', 'Parentes próximos: o aromeno, língua irmã do romeno, é falado por comunidades no norte da Grécia.', ['GR-D', 'GR-E']),
      r('ALB', 'Parentes próximos: comunidades aromenas.'),
      r('MKD', 'Parentes próximos: o aromeno é língua reconhecida na Macedônia do Norte.'),
      d('ITA', 'Uma das maiores comunidades romenas do exterior.'),
      d('ESP', 'Grande comunidade romena, sobretudo em Madri e Castellón.'),
      d('DEU'),
      d('GBR'),
      d('FRA'),
      d('AUT'),
      d('ISR', 'Comunidade de judeus de origem romena.'),
      d('USA'),
      d('CAN'),
    ],
  },
  {
    code: 'ru',
    name: 'Russo',
    flag: '🇷🇺',
    color: '#DC2626',
    speakers: 'cerca de 150 milhões de falantes nativos',
    millions: 150,
    lineage: ['Indo-europeu', 'Balto-eslavo', 'Eslavo', 'Eslavo oriental'],
    countries: [
      o('RUS'),
      o('BLR', { note: 'Oficial ao lado do bielorrusso.' }),
      o('KAZ', { note: 'Oficial ao lado do cazaque.' }),
      o('KGZ', { note: 'Oficial ao lado do quirguiz.' }),
      r('UKR', 'Muito falado, sobretudo no leste e no sul.', ['UA-14', 'UA-09', 'UA-63', 'UA-51']),
      r('MDA', 'Falado por parte da população, especialmente na Transnístria e na Gagaúzia.', ['MD-SN', 'MD-GA']),
      r('LVA'),
      r('EST', 'Falado por uma grande parte da população, sobretudo no nordeste.', ['EE-45']),
      r('LTU'),
      r('GEO'),
      r('ARM'),
      r('AZE'),
      r('UZB'),
      r('TJK'),
      r('TKM'),
      d('ISR', 'Grande comunidade de imigrantes da ex-União Soviética.'),
      d('DEU'),
      d('USA'),
    ],
  },
  {
    code: 'es',
    name: 'Espanhol',
    flag: '🇪🇸',
    color: '#EA580C',
    speakers: 'cerca de 490 milhões de falantes nativos',
    millions: 490,
    lineage: ['Indo-europeu', 'Itálico', 'Românico', 'Ibero-românico'],
    countries: [
      ...[
        'ESP',
        'MEX',
        'GTM',
        'HND',
        'SLV',
        'NIC',
        'CRI',
        'PAN',
        'CUB',
        'DOM',
        'PRI',
        'COL',
        'VEN',
        'ECU',
        'PER',
        'BOL',
        'CHL',
        'ARG',
        'URY',
        'PRY',
        'GNQ',
      ].map((iso) => o(iso)),
      r('USA', 'Segundo idioma mais falado do país.'),
      r('BLZ'),
      r('AND'),
      d('BRA', 'Comunidades nas fronteiras e nas grandes cidades.'),
    ],
  },
  {
    code: 'pt',
    name: 'Português',
    flag: '🇧🇷',
    color: '#16A34A',
    speakers: 'cerca de 250 milhões de falantes nativos',
    millions: 250,
    lineage: ['Indo-europeu', 'Itálico', 'Românico', 'Ibero-românico'],
    countries: [
      o('BRA', { variant: 'pt-BR', note: 'Variante brasileira: a do próprio app.' }),
      o('PRT', { variant: 'pt-PT', note: 'Variante europeia: outra pronúncia, vocabulário (comboio, autocarro) e o «tu» mais usado.' }),
      o('AGO'),
      o('MOZ'),
      o('GNB'),
      o('CPV'),
      o('STP'),
      o('TLS', { note: 'Oficial ao lado do tétum.' }),
      o('GNQ', { note: 'Um dos idiomas oficiais.' }),
      r('MAC', 'Oficial em Macau, ao lado do chinês.'),
      r('PRY', 'Muito falado na fronteira com o Brasil.'),
      d('FRA'),
      d('CHE'),
      d('USA'),
      d('VEN'),
      d('ZAF'),
      d('CAN'),
      d('JPN', 'Comunidade de descendentes de japoneses vindos do Brasil.'),
    ],
  },
  {
    code: 'en',
    name: 'Inglês',
    flag: '🇬🇧',
    color: '#7C3AED',
    speakers: 'cerca de 380 milhões de falantes nativos e mais de 1 bilhão no total',
    millions: 380,
    lineage: ['Indo-europeu', 'Germânico', 'Germânico ocidental', 'Anglo-frísio'],
    countries: [
      ...[
        'GBR',
        'IRL',
        'USA',
        'CAN',
        'AUS',
        'NZL',
        'JAM',
        'BHS',
        'GUY',
        'TTO',
        'BRB',
        'GRD',
        'LCA',
        'BLZ',
        'MLT',
        'SGP',
        'ZAF',
        'NGA',
        'GHA',
        'LBR',
        'SLE',
        'KEN',
        'UGA',
        'TZA',
        'ZMB',
        'ZWE',
        'BWA',
        'NAM',
        'MWI',
        'LSO',
        'SWZ',
        'RWA',
        'SSD',
        'CMR',
        'IND',
        'PAK',
        'PHL',
        'PNG',
        'FJI',
        'SLB',
        'VUT',
        'MUS',
        'SYC',
      ].map((iso) => o(iso)),
      r('MYS'),
      r('LKA'),
      r('BGD'),
      r('ISR'),
    ],
  },
  {
    code: 'fi',
    name: 'Finlandês',
    flag: '🇫🇮',
    color: '#0891B2',
    speakers: 'cerca de 5 milhões de falantes nativos',
    millions: 5,
    lineage: ['Urálico', 'Fínico', 'Fínico setentrional'],
    countries: [
      o('FIN', { note: 'Oficial ao lado do sueco.' }),
      r('SWE', 'Língua minoritária reconhecida na Suécia.', ['SE-BD']),
      r('NOR', 'O kven, parente próximo do finlandês, é reconhecido no norte da Noruega.', ['NO-54']),
      r('RUS', 'Línguas fínicas aparentadas (carélio) na Carélia.', ['RU-KR']),
    ],
  },
  {
    code: 'et',
    name: 'Estoniano',
    flag: '🇪🇪',
    color: '#0D9488',
    speakers: 'cerca de 1,1 milhão de falantes nativos',
    millions: 1.1,
    lineage: ['Urálico', 'Fínico', 'Fínico meridional'],
    countries: [o('EST'), d('FIN'), d('SWE'), d('CAN')],
  },
  {
    code: 'ja',
    name: 'Japonês',
    flag: '🇯🇵',
    color: '#DB2777',
    speakers: 'cerca de 125 milhões de falantes nativos',
    millions: 125,
    lineage: ['Japônico'],
    countries: [o('JPN'), d('BRA', 'A maior comunidade de origem japonesa fora do Japão.'), d('USA'), d('PER')],
  },
  {
    code: 'ko',
    name: 'Coreano',
    flag: '🇰🇷',
    color: '#9333EA',
    speakers: 'cerca de 80 milhões de falantes nativos',
    millions: 80,
    lineage: ['Coreânico'],
    countries: [
      o('KOR'),
      o('PRK'),
      r('CHN', 'Minoria coreana na prefeitura de Yanbian (província de Jilin).', ['CN-JL']),
      d('USA'),
      d('JPN'),
      d('UZB'),
      d('KAZ'),
    ],
  },
];

export const ROLE_LABEL: Record<LangRole, string> = { oficial: 'língua oficial', regional: 'regional / minoria', diaspora: 'comunidade no exterior' };

const ROLE_RANK: Record<LangRole, number> = { oficial: 0, regional: 1, diaspora: 2 };

/** Idiomas falados num país (para o cartão ao tocar no mapa), do mais falado ao menos:
 *  primeiro pelo papel (oficial › regional › comunidade no exterior), depois pelo total de falantes. */
export function languagesIn(iso: string) {
  return MAP_LANGUAGES.flatMap((l) => l.countries.filter((c) => c.iso === iso).map((c) => ({ lang: l, spoken: c }))).sort(
    (a, b) => ROLE_RANK[a.spoken.role] - ROLE_RANK[b.spoken.role] || b.lang.millions - a.lang.millions,
  );
}

/** Quantos níveis da árvore genealógica dois idiomas têm em comum (0 = famílias diferentes). */
export function kinship(a: MapLanguage, b: MapLanguage): number {
  let n = 0;
  while (n < a.lineage.length && a.lineage[n] === b.lineage[n]) n++;
  return n;
}

/** O idioma estudado primeiro; depois os parentes mais próximos dele; no empate, os mais falados. */
export function byKinship(studied: string): MapLanguage[] {
  const base = MAP_LANGUAGES.find((l) => l.code === studied);
  if (!base) return [...MAP_LANGUAGES].sort((a, b) => b.millions - a.millions);
  return [...MAP_LANGUAGES].sort((a, b) => (a === base ? -1 : b === base ? 1 : kinship(base, b) - kinship(base, a) || b.millions - a.millions));
}

/** Bandeira a partir do código de duas letras. */
export function flagOf(iso2: string): string {
  if (!/^[A-Z]{2}$/.test(iso2)) return '🏳️';
  return String.fromCodePoint(...[...iso2].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}
