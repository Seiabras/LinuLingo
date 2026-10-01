import { ALL_MAP_LANGUAGES } from './onde-se-fala';

/**
 * Linha do tempo das famílias de línguas: por onde cada família se espalhou ao longo dos séculos,
 * desenhado sobre os países de HOJE (aproximação: nas datas antigas a língua não cobria o país
 * inteiro, e as fronteiras eram outras — os textos explicam). Onde os historiadores discordam
 * (a origem do romeno, a pátria dos eslavos e dos urálicos), o texto diz que é debatido.
 * A última etapa, «hoje», sai dos dados do mapa: onde uma língua da família é oficial.
 */
export interface TimelineEra {
  /** «c. 100 d.C.» */
  label: string;
  /** países de hoje (ISO 3166-1 alfa-3) onde a família já era falada */
  countries: string[];
  text: string;
}

export interface LanguageFamilyTimeline {
  id: string;
  name: string;
  emoji: string;
  color: string;
  /** o nome do ramo nas linhagens do mapa (para calcular «hoje») */
  lineage: string;
  eras: TimelineEra[];
  /** o que dizer na etapa «hoje» */
  today: string;
}

const EUROPA_LATINA = ['ITA', 'FRA', 'ESP', 'PRT', 'CHE', 'BEL', 'LUX', 'AND', 'MCO', 'SMR', 'VAT'];

export const TIMELINES: LanguageFamilyTimeline[] = [
  {
    id: 'romanicas',
    name: 'Românicas',
    emoji: '🏛️',
    color: '#DC2626',
    lineage: 'Românico',
    eras: [
      {
        label: 'c. 100 d.C.',
        countries: [...EUROPA_LATINA, 'TUN', 'DZA', 'ROU'],
        text: 'O latim se espalha com o Império Romano. No oeste ele vira a língua do dia a dia; no leste, a língua comum continua sendo o grego. A Dácia, na atual Romênia, é província romana de 106 a 271.',
      },
      {
        label: 'c. 1000',
        countries: [...EUROPA_LATINA, 'ROU', 'MDA'],
        text: 'O latim falado já virou línguas diferentes: os primeiros textos em francês (842) e em italiano (960) são desta época; os do espanhol e do português vêm logo depois. Onde exatamente o romeno se formou, ao norte ou ao sul do Danúbio, os historiadores ainda debatem; ele só aparece escrito em 1521, na carta de Neacșu.',
      },
      {
        label: 'c. 1600',
        countries: [...EUROPA_LATINA, 'ROU', 'MDA', 'MEX', 'GTM', 'CUB', 'DOM', 'PAN', 'COL', 'VEN', 'ECU', 'PER', 'BOL', 'CHL', 'ARG', 'PRY', 'URY', 'BRA', 'AGO', 'MOZ', 'CPV'],
        text: 'Com as navegações e a colonização, o espanhol e o português chegam às Américas, e o português também a trechos da costa da África e da Ásia — em geral impostos por cima das línguas indígenas, muitas das quais continuam vivas até hoje.',
      },
    ],
    today: 'Hoje, uma língua românica (espanhol, português, francês, italiano, romeno, catalão…) é oficial nestes países. O francês se espalhou sobretudo com a colonização dos séculos XIX e XX.',
  },
  {
    id: 'eslavas',
    name: 'Eslavas',
    emoji: '🌾',
    color: '#2563EB',
    lineage: 'Eslavo',
    eras: [
      {
        label: 'c. 500',
        countries: ['POL', 'UKR', 'BLR'],
        text: 'As línguas eslavas vêm do protoeslavo. Onde ele era falado é debatido; muitos pesquisadores situam os primeiros eslavos entre os rios Vístula e Dniepre, nas atuais Polônia, Belarus e Ucrânia.',
      },
      {
        label: 'c. 900',
        countries: ['POL', 'UKR', 'BLR', 'CZE', 'SVK', 'SVN', 'HRV', 'BIH', 'SRB', 'MNE', 'MKD', 'BGR'],
        text: 'Os eslavos já ocupam boa parte do Leste Europeu e dos Bálcãs, e também o oeste da atual Rússia (a Rus de Kiev, que o mapa de hoje não separa). Cirilo e Metódio criam o primeiro alfabeto eslavo, o glagolítico, em 863; o cirílico nasce logo depois, na Bulgária.',
      },
      {
        label: 'c. 1700',
        countries: ['POL', 'UKR', 'BLR', 'CZE', 'SVK', 'SVN', 'HRV', 'BIH', 'SRB', 'MNE', 'MKD', 'BGR', 'RUS'],
        text: 'Com a expansão do Estado russo, a partir do século XVI, o russo atravessa a Sibéria e chega ao oceano Pacífico.',
      },
    ],
    today: 'Hoje, uma língua eslava (russo, ucraniano, polonês, tcheco, búlgaro, sérvio, croata…) é oficial nestes países; o russo também é oficial no Cazaquistão e no Quirguistão.',
  },
  {
    id: 'germanicas',
    name: 'Germânicas',
    emoji: '⚔️',
    color: '#16A34A',
    lineage: 'Germânico',
    eras: [
      {
        label: 'c. 100 d.C.',
        countries: ['DNK', 'SWE', 'NOR', 'DEU'],
        text: 'Os povos germânicos vivem no sul da Escandinávia e no norte da atual Alemanha; o historiador romano Tácito escreve sobre eles na “Germânia”, no ano 98.',
      },
      {
        label: 'c. 600',
        countries: ['DNK', 'SWE', 'NOR', 'DEU', 'GBR', 'NLD', 'BEL', 'AUT', 'CHE', 'LUX', 'LIE'],
        text: 'Nas migrações dos séculos IV a VI, anglos e saxões levam o inglês antigo para a Grã-Bretanha; francos, alamanos e bávaros ocupam o que hoje são os Países Baixos, a Alemanha, a Suíça e a Áustria. Os francos que ficam na Gália acabam falando a língua românica de lá, que vira o francês.',
      },
      {
        label: 'c. 900',
        countries: ['DNK', 'SWE', 'NOR', 'DEU', 'GBR', 'NLD', 'BEL', 'AUT', 'CHE', 'LUX', 'LIE', 'ISL', 'FRO'],
        text: 'Os vikings levam o nórdico antigo para a Islândia (a partir de cerca de 870), para as Ilhas Faroé e para várias costas da Europa.',
      },
      {
        label: 'c. 1850',
        countries: ['DNK', 'SWE', 'NOR', 'DEU', 'GBR', 'NLD', 'BEL', 'AUT', 'CHE', 'LUX', 'LIE', 'ISL', 'FRO', 'IRL', 'USA', 'CAN', 'AUS', 'NZL', 'ZAF', 'SUR'],
        text: 'Com a colonização, o inglês chega à América do Norte, à Austrália e à Nova Zelândia; o holandês, à África do Sul (onde dá origem ao africâner) e ao Suriname.',
      },
    ],
    today: 'Hoje, uma língua germânica (inglês, alemão, holandês, sueco, dinamarquês, norueguês, islandês…) é oficial nestes países — muitas vezes o inglês, ao lado das línguas locais.',
  },
  {
    id: 'uralicas',
    name: 'Urálicas',
    emoji: '🦌',
    color: '#D97706',
    lineage: 'Urálico',
    eras: [
      {
        label: 'c. 500',
        countries: ['FIN', 'EST'],
        text: 'As línguas urálicas não são indo-europeias. Onde a família surgiu é debatido (perto dos Montes Urais ou do rio Volga). Por volta de 500, os povos fínicos já vivem em volta do Golfo da Finlândia; os sámi, no norte da Escandinávia; e outros povos urálicos, no Volga e nos Urais.',
      },
      {
        label: 'c. 900',
        countries: ['FIN', 'EST', 'HUN'],
        text: 'Os magiares, que falam o húngaro, chegam à bacia dos Cárpatos por volta de 895 e se instalam na atual Hungria, cercados de línguas eslavas e germânicas.',
      },
    ],
    today: 'Hoje, o húngaro, o finlandês e o estoniano são oficiais nestes países. No norte da Escandinávia e da Rússia seguem vivas as línguas sámi, e na Rússia o udmurte, o komi, o mari, o erzya, o moksha e outras.',
  },
];

/** Onde uma língua do ramo é oficial hoje (dos dados do mapa). */
export function officialToday(lineage: string): string[] {
  const out = new Set<string>();
  for (const l of ALL_MAP_LANGUAGES) {
    if (!l.lineage.includes(lineage)) continue;
    for (const c of l.countries) if (c.role === 'oficial') out.add(c.iso);
  }
  return [...out];
}

/** Todas as etapas de uma família, com a de hoje no fim. */
export function erasOf(f: LanguageFamilyTimeline): TimelineEra[] {
  return [...f.eras, { label: 'Hoje', countries: officialToday(f.lineage), text: f.today }];
}
