import { WORLD_LANGUAGE_ROWS } from './idiomas-mundo';

/**
 * Onde cada idioma é falado, para o mapa-múndi.
 * oficial = língua oficial/nacional; regional = oficial numa região ou minoria reconhecida/grande;
 * falada = falada no país sem status oficial (dados do CLDR); diaspora = comunidade grande de
 * falantes nativos fora da terra de origem.
 * Os idiomas do app (e os planejados) têm lista escrita à mão, com notas e regiões; os outros
 * ~700 idiomas do mundo vêm do Unicode CLDR (src/data/idiomas-mundo.ts).
 */
export type LangRole = 'oficial' | 'regional' | 'falada' | 'diaspora';

export interface SpokenIn {
  iso: string;
  role: LangRole;
  /** Variante do idioma usada ali, quando o app tem essa variante (ex.: ro-MD) */
  variant?: string;
  note?: string;
  /** Onde, dentro do país (códigos ISO 3166-2) */
  subdivisions?: string[];
  /** % da população do país que fala o idioma (CLDR; inclui segunda língua) */
  pct?: number;
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
  /** Nome no próprio idioma */
  native?: string;
  /** Veio da lista do CLDR (não tem notas escritas à mão) */
  fromCldr?: boolean;
  /** Veio só do Glottolog (sem estatística de falantes) */
  fromGlottolog?: boolean;
  /** Grau de risco no Glottolog: 0 = não ameaçada … 5 = extinta */
  status?: number;
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
        note: 'Língua oficial (desde 2023 também chamada “limba română” na legislação). Falar com vocabulário e sotaque próprios.',
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
      o('ESP', { variant: 'es-ES', note: 'Espanhol da Espanha: vosotros, o “ce/zi” dito [θ] e vocabulário próprio (coche, móvil, ordenador).' }),
      o('ARG', { variant: 'es-AR', note: 'Espanhol rioplatense: voseo (vos tenés), “yo” e “calle” com [ʃ] e o lunfardo.' }),
      o('URY', { variant: 'es-AR', note: 'Espanhol rioplatense, como o de Buenos Aires: voseo e “sh”.' }),
      o('MEX', { variant: 'es-419', note: 'O país com mais falantes nativos de espanhol do mundo.' }),
      ...['GTM', 'HND', 'SLV', 'NIC', 'CRI', 'PAN', 'CUB', 'DOM', 'PRI', 'COL', 'VEN', 'ECU', 'PER', 'BOL', 'CHL', 'PRY'].map((iso) => o(iso, { variant: 'es-419' })),
      o('GNQ', { note: 'O único país da África com o espanhol como língua oficial.' }),
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
      o('BRA', { variant: 'pt-BR', note: 'Variante brasileira: a de quem usa o app, e uma das duas variantes do curso de português.' }),
      o('PRT', { variant: 'pt-PT', note: 'Variante europeia: a que o curso de português ensina, com outra pronúncia, vocabulário (comboio, autocarro), a ênclise (“diz-me”) e o “tu” mais usado.' }),
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
    code: 'it',
    name: 'Italiano',
    flag: '🇮🇹',
    color: '#65A30D',
    speakers: 'cerca de 65 milhões de falantes nativos',
    millions: 65,
    lineage: ['Indo-europeu', 'Itálico', 'Românico', 'Ítalo-românico'],
    countries: [
      o('ITA'),
      o('SMR'),
      o('VAT', { note: 'Língua oficial da Cidade do Vaticano, ao lado do latim da Santa Sé.' }),
      o('CHE', { note: 'Uma das línguas nacionais da Suíça, falada sobretudo no Ticino e no sul dos Grisões.', subdivisions: ['CH-TI', 'CH-GR'] }),
      r('SVN', 'Minoria italiana reconhecida na Ístria eslovena, com o italiano cooficial em Koper, Izola e Piran.', ['SI-050', 'SI-040', 'SI-090']),
      r('HRV', 'Minoria italiana reconhecida na Ístria croata.', ['HR-18']),
      d('BRA', 'Uma das maiores comunidades de origem italiana do mundo; no Sul também se fala o talian, de base vêneta.'),
      d('ARG', 'Boa parte da população tem origem italiana, e o italiano marcou o espanhol rioplatense.'),
      d('URY'),
      d('USA'),
      d('AUS'),
      d('CAN'),
      d('DEU'),
      d('BEL'),
      d('FRA'),
      d('VEN'),
    ],
  },
  {
    code: 'sv',
    name: 'Sueco',
    flag: '🇸🇪',
    color: '#2563EB',
    speakers: 'cerca de 10 milhões de falantes nativos',
    millions: 10,
    lineage: ['Indo-europeu', 'Germânico', 'Germânico setentrional', 'Nórdico oriental'],
    countries: [
      o('SWE'),
      o('FIN', { variant: 'sv-FI', note: 'Língua oficial ao lado do finlandês, falada sobretudo no litoral sul e oeste.', subdivisions: ['FI-18', 'FI-12'] }),
      o('ALA', { variant: 'sv-FI', note: 'A única língua oficial das Ilhas Åland.' }),
      d('USA', 'Descendentes da grande emigração sueca dos séculos XIX e XX, sobretudo em Minnesota.'),
      d('NOR'),
    ],
  },
  {
    code: 'nb',
    name: 'Norueguês',
    flag: '🇳🇴',
    color: '#DC2626',
    speakers: 'cerca de 5 milhões de falantes nativos',
    millions: 5,
    lineage: ['Indo-europeu', 'Germânico', 'Germânico setentrional', 'Nórdico ocidental'],
    countries: [
      o('NOR', { note: 'Duas formas escritas oficiais: o bokmål, a mais usada, e o nynorsk, forte no oeste do país.' }),
      o('SJM', { note: 'Svalbard e Jan Mayen, territórios da Noruega.' }),
      d('USA', 'Descendentes da emigração norueguesa do século XIX, sobretudo no Meio-Oeste.'),
      d('SWE'),
    ],
  },
  {
    code: 'da',
    name: 'Dinamarquês',
    flag: '🇩🇰',
    color: '#BE123C',
    speakers: 'cerca de 6 milhões de falantes nativos',
    millions: 6,
    lineage: ['Indo-europeu', 'Germânico', 'Germânico setentrional', 'Nórdico oriental'],
    countries: [
      o('DNK'),
      o('FRO', { note: 'Oficial ao lado do feroês e ensinado nas escolas.' }),
      r('GRL', 'Muito usado na escola e na administração; a língua oficial da Groenlândia é o groenlandês.'),
      r('DEU', 'Minoria dinamarquesa reconhecida no Schleswig do Sul.', ['DE-SH']),
    ],
  },
  {
    code: 'is',
    name: 'Islandês',
    flag: '🇮🇸',
    color: '#1D4ED8',
    speakers: 'cerca de 350 mil falantes nativos',
    millions: 0.35,
    lineage: ['Indo-europeu', 'Germânico', 'Germânico setentrional', 'Nórdico ocidental'],
    countries: [o('ISL'), d('CAN', 'Comunidade de origem islandesa em Manitoba, em torno de Gimli.'), d('DNK'), d('NOR')],
  },
  {
    code: 'fo',
    name: 'Feroês',
    flag: '🇫🇴',
    color: '#0369A1',
    speakers: 'cerca de 70 mil falantes nativos',
    millions: 0.07,
    lineage: ['Indo-europeu', 'Germânico', 'Germânico setentrional', 'Nórdico ocidental'],
    countries: [o('FRO'), d('DNK', 'Comunidade feroesa em Copenhague e em outras cidades dinamarquesas.')],
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

export const ROLE_LABEL: Record<LangRole, string> = {
  oficial: 'língua oficial',
  regional: 'regional / minoria',
  falada: 'também falada',
  diaspora: 'comunidade no exterior',
};

const ROLE_RANK: Record<LangRole, number> = { oficial: 0, regional: 1, falada: 2, diaspora: 3 };
const CLDR_ROLE: Record<string, LangRole> = { o: 'oficial', r: 'regional', f: 'falada' };

/** Cor por família, para os idiomas que vêm do CLDR (os do app têm cor própria). */
const FAMILY_COLOR: Record<string, string> = {
  'Indo-europeu': '#4F46E5',
  'Sino-tibetano': '#DC2626',
  'Afro-asiático': '#D97706',
  'Níger-Congo': '#059669',
  Austronésio: '#0891B2',
  Túrquico: '#7C3AED',
  Dravídico: '#DB2777',
  'Austro-asiático': '#65A30D',
  Tai: '#EA580C',
  Urálico: '#0D9488',
};
// as outras famílias ganham uma cor fixa da paleta, sorteada pelo nome (nunca o cinza de «sem idioma»)
const PALETTE = ['#B45309', '#0E7490', '#9333EA', '#BE123C', '#15803D', '#1D4ED8', '#C2410C', '#7E22CE', '#047857', '#A16207'];
const familyColor = (family?: string) => {
  if (!family) return '#64748B';
  if (FAMILY_COLOR[family]) return FAMILY_COLOR[family];
  let h = 0;
  for (const ch of family) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return PALETTE[h % PALETTE.length];
};

const fmtMillions = (m: number) =>
  m >= 1 ? `${m >= 10 ? Math.round(m) : m.toLocaleString('pt-BR', { maximumFractionDigits: 1 })} milhões` : `${Math.max(1, Math.round(m * 1000)).toLocaleString('pt-BR')} mil`;

// % da população por idioma e país, segundo o CLDR (para ordenar e mostrar também nos idiomas do app)
const CLDR_PCT = new Map<string, number>();
const fromCldr: MapLanguage[] = [];
const curated = new Set(MAP_LANGUAGES.map((l) => l.code));
for (const [code, name, native, lineage, millions, spec] of WORLD_LANGUAGE_ROWS) {
  const countries = spec.split(' ').map((x): SpokenIn => {
    const [iso, role, pct] = x.split(':');
    CLDR_PCT.set(`${code}:${iso}`, Number(pct));
    return { iso, role: CLDR_ROLE[role], pct: Number(pct) };
  });
  if (curated.has(code)) continue;
  fromCldr.push({
    code,
    name,
    native: native || undefined,
    flag: '🗣️',
    color: familyColor(lineage[0]),
    speakers: `cerca de ${fmtMillions(millions)} de falantes, contando quem fala como segunda língua (Unicode CLDR)`,
    millions,
    lineage,
    countries,
    fromCldr: true,
  });
}
for (const l of MAP_LANGUAGES) for (const c of l.countries) c.pct ??= CLDR_PCT.get(`${l.code}:${c.iso}`);

/**
 * Recorte por estado/província/cantão para línguas que só vêm do CLDR por país inteiro (o CLDR não
 * tem o detalhe por subdivisão). É um complemento, não substitui o idioma: só entra onde a divisão é
 * oficial e bem documentada, para o mapa colorir o país por dentro quando aproxima (ver MapScreen).
 * Cobertura de propósito parcial (poucos países, exemplo de prova de conceito) — cada grupo cita a
 * fonte; nada aqui é um palpite sobre fronteira linguística.
 */
const CLDR_SUBDIVISIONS: Record<string, string[]> = {
  // Suíça: a língua oficial de cada cantão vem da própria constituição cantonal (art. 70 da
  // Constituição Federal deixa a cada cantão decidir a(s) sua(s) língua(s) oficial(is)). O quarto
  // idioma nacional, o romanche, fica de fora porque o CLDR não traz dado de falantes para ele.
  // Fribourg/Friburgo (FR), Genebra (GE), Jura (JU), Neuchâtel (NE), Vaud (VD) e Valais/Wallis (VS)
  // têm o francês como majoritário/oficial; os outros 20 cantões, o alemão (Ticino é só italiano,
  // já coberto pela entrada do italiano com CH-TI e CH-GR).
  'fr:CHE': ['CH-FR', 'CH-GE', 'CH-JU', 'CH-NE', 'CH-VD', 'CH-VS'],
  'de:CHE': [
    'CH-ZH', 'CH-BE', 'CH-LU', 'CH-UR', 'CH-SZ', 'CH-OW', 'CH-NW', 'CH-GL', 'CH-ZG', 'CH-SO',
    'CH-BS', 'CH-BL', 'CH-SH', 'CH-AR', 'CH-AI', 'CH-SG', 'CH-AG', 'CH-TG', 'CH-GR',
  ],
  // Graubünden/Grisões (CH-GR) é o único cantão trilíngue da Suíça: alemão (maioria), depois
  // romanche e italiano — a entrada do italiano já citada acima (ver `o('CHE', ...)`) e o romanche
  // aqui embaixo também incluem CH-GR; como as duas têm menos cantões que o alemão, pintam por cima
  // dele ali (romanche, com 1 cantão só, por cima do italiano, com 2) — não quer dizer que sejam
  // majoritárias lá, só que são as mais específicas daquele cantão em particular.
  // Canadá: o francês é a única língua oficial de Quebec (Carta da Língua Francesa) e cooficial em
  // New Brunswick, a única província oficialmente bilíngue do país; o inglês é oficial nas demais.
  // O inuktitut é cooficial (com o inglês e o francês) só em Nunavut, por lei territorial.
  'fr:CAN': ['CA-QC', 'CA-NB'],
  'iu:CAN': ['CA-NU'],
  // Suíça: o romanche é a 4ª língua nacional, cooficial só no cantão de Graubünden/Grisões (onde,
  // dos 4 idiomas nacionais, é o único cooficial ao lado do alemão e do italiano).
  'rm:CHE': ['CH-GR'],
  // Espanha: catalão, galego e basco são cooficiais nas respectivas comunidades autônomas pela
  // Constituição de 1978 e os estatutos de autonomia de cada uma. O catalão é cooficial também nas
  // Baleares e, como "valenciano", na Comunidade Valenciana; o basco, na Comunidade Foral de Navarra,
  // é cooficial só numa "zona vascófona" dentro dela, não na comunidade inteira — simplificação aceita
  // aqui pela granularidade do mapa (o mesmo tipo de simplificação já usado nos cantões suíços).
  'ca:ESP': ['ES-CT', 'ES-IB', 'ES-VC'],
  'gl:ESP': ['ES-GA'],
  'eu:ESP': ['ES-PV', 'ES-NC'],
  // Havaí: o havaiano é cooficial com o inglês só no estado do Havaí, por emenda constitucional
  // estadual de 1978 — único idioma indígena dos EUA com status oficial estadual.
  'haw:USA': ['US-HI'],
  // China: tibetano, uigur, mongol e zhuang são as línguas de título de 4 das 5 regiões autônomas
  // do país, cada uma reconhecida por lei regional ao lado do mandarim.
  'bo:CHN': ['CN-XZ'],
  'ug:CHN': ['CN-XJ'],
  'mn:CHN': ['CN-NM'],
  'za:CHN': ['CN-GX'],
  // Rússia: cada uma dessas é língua oficial da própria república constituinte, por constituição
  // republicana, ao lado do russo (art. 68 da Constituição federal garante esse direito às repúblicas).
  'tt:RUS': ['RU-TA'],
  'ba:RUS': ['RU-BA'],
  'ce:RUS': ['RU-CE'],
  'sah:RUS': ['RU-SA'],
  // Índia: língua oficial de cada estado (listas oficiais estaduais e a 8ª lista da Constituição).
  // Cobertura parcial: só os estados com uma língua claramente predominante, entre as que o mapa já
  // lista para a Índia — não é a lista completa dos 22 idiomas da 8ª lista.
  'hi:IND': ['IN-UP', 'IN-MP', 'IN-RJ', 'IN-BR', 'IN-HR', 'IN-UK', 'IN-CG', 'IN-JH', 'IN-DL', 'IN-HP'],
  'bn:IND': ['IN-WB', 'IN-TR'],
  'te:IND': ['IN-AP', 'IN-TS'],
  'mr:IND': ['IN-MH'],
  'ta:IND': ['IN-TN', 'IN-PY'],
  'gu:IND': ['IN-GJ'],
  'kn:IND': ['IN-KA'],
  'ml:IND': ['IN-KL'],
  'or:IND': ['IN-OD'],
  'pa:IND': ['IN-PB'],
  'as:IND': ['IN-AS'],
  'ne:IND': ['IN-SK'],
};
for (const l of fromCldr) for (const c of l.countries) c.subdivisions ??= CLDR_SUBDIVISIONS[`${l.code}:${c.iso}`];

/** Todos os idiomas do mapa: os do app (com notas) e os demais do mundo (CLDR), do mais falado ao menos. */
export const ALL_MAP_LANGUAGES: MapLanguage[] = [...MAP_LANGUAGES, ...fromCldr.sort((a, b) => b.millions - a.millions)];

export function findMapLanguage(code: string): MapLanguage | undefined {
  return ALL_MAP_LANGUAGES.find((l) => l.code === code);
}

/** Idiomas falados num país (para o cartão ao tocar no mapa), do mais falado ao menos:
 *  primeiro pelo papel (oficial › regional › também falada › comunidade no exterior), depois pela % da população. */
export function languagesIn(iso: string) {
  return ALL_MAP_LANGUAGES.flatMap((l) => l.countries.filter((c) => c.iso === iso).map((c) => ({ lang: l, spoken: c }))).sort(
    (a, b) =>
      Number(a.lang.status === 5) - Number(b.lang.status === 5) ||
      ROLE_RANK[a.spoken.role] - ROLE_RANK[b.spoken.role] ||
      (b.spoken.pct ?? 0) - (a.spoken.pct ?? 0) ||
      b.lang.millions - a.lang.millions ||
      a.lang.name.localeCompare(b.lang.name, 'pt'),
  );
}

/**
 * Como `languagesIn`, mas só as línguas com papel oficial/regional de verdade — exclui as línguas
 * "faladas" (role 'falada') que o Glottolog carrega aos milhares por país, cada uma com só um ponto
 * de coordenada (1-2 subdivisões), não um território reconhecido. Usado pelo mapa pra decidir quem
 * pode pintar um estado/província/cantão quando aproxima: sem esse filtro, uma língua minúscula do
 * Glottolog (menos subdivisões = "mais específica" na ordenação) pintava por cima de línguas de
 * verdade como o tâmil ou o francês (achado pela revisão externa de seiabras-b8, 02/10/2026).
 */
export function notableLanguagesIn(iso: string) {
  return languagesIn(iso).filter((x) => x.lang.status !== 5 && (x.spoken.role === 'oficial' || x.spoken.role === 'regional'));
}

/** Grau de risco das línguas (escala AES do Glottolog). */
// nomes dos graus pela UNESCO (ver RISK_LEVELS em linguas-indigenas.ts, a mesma escala AES do Glottolog)
export const STATUS_LABEL = ['não ameaçada', 'vulnerável', 'em perigo', 'severamente ameaçada', 'criticamente ameaçada', 'extinta'];

let glottologLoaded = false;
/**
 * Junta as línguas do Glottolog (src/data/linguas-glottolog.ts, carregado sob demanda pelo mapa):
 * as que o mapa já tem ganham os países que faltavam; as outras entram com o país, a região
 * (ISO 3166-2, onde o Glottolog põe a língua) e o grau de risco.
 */
export function addGlottolog(rows: [string, string, string, number, string, string][]) {
  if (glottologLoaded) return;
  glottologLoaded = true;
  const byCode = new Map(ALL_MAP_LANGUAGES.map((l) => [l.code, l]));
  const extra: MapLanguage[] = [];
  for (const [code, name, family, status, spec] of rows) {
    const places = spec.split(' ').map((x) => {
      const [iso, sub] = x.split('>');
      return { iso, sub };
    });
    const known = byCode.get(code);
    if (known) {
      // só os países que faltavam; a região do Glottolog é um ponto só, não vale para línguas grandes
      for (const { iso } of places) if (!known.countries.some((c) => c.iso === iso)) known.countries.push({ iso, role: 'falada' });
      known.status ??= status >= 0 ? status : undefined;
      continue;
    }
    const lang: MapLanguage = {
      code,
      name,
      flag: family === 'Língua de sinais' ? '🤟' : '🗣️',
      color: familyColor(family),
      speakers: status === 5 ? 'língua extinta (Glottolog)' : 'sem estimativa de falantes (Glottolog)',
      millions: 0,
      lineage: [family],
      countries: places.map(({ iso, sub }) => ({ iso, role: 'falada' as LangRole, ...(sub ? { subdivisions: [sub] } : {}) })),
      fromGlottolog: true,
      status: status >= 0 ? status : undefined,
    };
    byCode.set(code, lang);
    extra.push(lang);
  }
  ALL_MAP_LANGUAGES.push(...extra);
}

/** Quantos níveis da árvore genealógica dois idiomas têm em comum (0 = famílias diferentes). */
export function kinship(a: MapLanguage, b: MapLanguage): number {
  let n = 0;
  while (n < a.lineage.length && a.lineage[n] === b.lineage[n]) n++;
  return n;
}

/** Os idiomas do app e os planejados: o estudado primeiro; depois os parentes mais próximos dele; no empate, os mais falados. */
export function byKinship(studied: string): MapLanguage[] {
  const base = MAP_LANGUAGES.find((l) => l.code === studied);
  if (!base) return [...MAP_LANGUAGES].sort((a, b) => b.millions - a.millions);
  return [...MAP_LANGUAGES].sort((a, b) => (a === base ? -1 : b === base ? 1 : kinship(base, b) - kinship(base, a) || b.millions - a.millions));
}

const fold = (s: string) => s.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();

const collator = new Intl.Collator('pt', { sensitivity: 'base' });
const byName = (a: MapLanguage, b: MapLanguage) => collator.compare(a.name, b.name);

/** Primeira letra do nome, sem acento (“Árabe” → “A”); o que não começa com letra latina vai em “#”. */
export function initialOf(l: MapLanguage): string {
  const c = fold(l.name).charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : '#';
}

/** Todos os idiomas do mundo, para a lista completa (sem busca): do mais falado ao menos, ou de A a Z. */
export function listLanguages(order: 'falados' | 'az'): MapLanguage[] {
  return [...ALL_MAP_LANGUAGES].sort(order === 'az' ? byName : (a, b) => b.millions - a.millions || byName(a, b));
}

/** Busca em todos os idiomas do mundo: pelo nome, pelo nome no próprio idioma, pelo código ou pela família. */
export function searchLanguages(query: string, limit = 40): MapLanguage[] {
  const q = fold(query.trim());
  if (!q) return ALL_MAP_LANGUAGES.filter((l) => l.fromCldr || l.fromGlottolog).slice(0, limit);
  const score = (l: MapLanguage) => {
    const name = fold(l.name);
    if (name === q || l.code === q) return 0;
    if (name.startsWith(q)) return 1;
    if (name.includes(q) || fold(l.native ?? '').includes(q)) return 2;
    if (l.lineage.some((x) => fold(x).includes(q))) return 3;
    return 9;
  };
  return ALL_MAP_LANGUAGES.map((l) => [l, score(l)] as const)
    .filter(([, s]) => s < 9)
    .sort((a, b) => a[1] - b[1] || b[0].millions - a[0].millions)
    .slice(0, limit)
    .map(([l]) => l);
}

/** Bandeira a partir do código de duas letras. */
export function flagOf(iso2: string): string {
  if (!/^[A-Z]{2}$/.test(iso2)) return '🏳️';
  return String.fromCodePoint(...[...iso2].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}
