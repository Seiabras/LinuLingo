import { ALL_MAP_LANGUAGES } from './onde-se-fala';

/**
 * Linha do tempo das famílias de línguas: por onde cada família se espalhou ao longo dos séculos,
 * desenhado sobre os países de HOJE (aproximação: nas datas antigas a língua não cobria o país
 * inteiro, e as fronteiras eram outras — os textos explicam). Onde os historiadores discordam
 * (a origem do romeno, a pátria dos eslavos, dos urálicos, dos túrquicos, dos bantos, do quéchua), o texto
 * diz que é debatido. As datas e os fatos de cada etapa vêm dos artigos da Wikipédia em inglês sobre
 * cada família (Celtic, Greek, Indo-Iranian, Turkic, Mongolic, Semitic, Bantu, Austronesian, Tupian,
 * Quechuan, Sino-Tibetan e Dravidian languages) e sobre os fatos citados (Lapita, Shahnameh, Myazedi…).
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
  },  {
    id: 'celticas',
    name: 'Célticas',
    emoji: '🍀',
    color: '#059669',
    lineage: 'Céltico',
    eras: [
      {
        label: 'c. 250 a.C.',
        countries: ['FRA', 'BEL', 'CHE', 'AUT', 'DEU', 'CZE', 'ESP', 'PRT', 'ITA', 'GBR', 'IRL', 'TUR'],
        text: 'No auge da cultura de La Tène, povos de língua céltica vivem da Europa Central até a Gália (a atual França), a Península Ibérica (os celtiberos), o norte da Itália e as Ilhas Britânicas. Por volta de 270 a.C., os gálatas chegam até a Anatólia, na atual Turquia.',
      },
      {
        label: 'c. 100 d.C.',
        countries: ['GBR', 'IRL', 'FRA'],
        text: 'Com a conquista romana da Gália (anos 50 a.C.) e da Britânia (a partir de 43 d.C.), o latim vai tomando o lugar das línguas célticas no continente; o gaulês ainda resiste no campo por alguns séculos. Na Irlanda, que Roma nunca conquistou, e no norte da Grã-Bretanha, elas seguem sem rival.',
      },
      {
        label: 'c. 600',
        countries: ['GBR', 'IRL', 'FRA'],
        text: 'Fugindo da chegada dos anglo-saxões, bretões da Grã-Bretanha atravessam o canal e levam sua língua para a Bretanha, no noroeste da França: é a origem do bretão. Da Irlanda, o gaélico passa para a Escócia, onde vira o gaélico escocês; no País de Gales, sobrevive o galês.',
      },
    ],
    today: 'Hoje, o irlandês é língua oficial da Irlanda, e o manês renasceu na Ilha de Man. O galês é oficial no País de Gales, e o bretão e o gaélico escocês seguem vivos, mas ameaçados — o mapa só pinta onde uma língua céltica é oficial do país inteiro.',
  },
  {
    id: 'helenicas',
    name: 'Helênicas',
    emoji: '🏺',
    color: '#0EA5E9',
    lineage: 'Helênico',
    eras: [
      {
        label: 'c. 1400 a.C.',
        countries: ['GRC'],
        text: 'O grego micênico, escrito em tabuinhas de argila na escrita Linear B, é a forma mais antiga do grego que se conhece por escrito — e uma das línguas indo-europeias registradas mais cedo.',
      },
      {
        label: 'c. 550 a.C.',
        countries: ['GRC', 'CYP', 'TUR', 'ITA', 'FRA', 'LBY', 'UKR', 'BGR'],
        text: 'As cidades gregas fundam colônias por todo o Mediterrâneo e o Mar Negro: no sul da Itália e na Sicília (a “Magna Grécia”), em Massália (Marselha), em Cirene (na Líbia) e nas costas da Ucrânia e da Bulgária. A costa oeste da Anatólia (a Jônia) é grega há séculos.',
      },
      {
        label: 'c. 200 a.C.',
        countries: ['GRC', 'CYP', 'TUR', 'ITA', 'EGY', 'SYR', 'LBN', 'ISR', 'PSE', 'JOR', 'IRQ'],
        text: 'Depois das conquistas de Alexandre, o Grande (morto em 323 a.C.), o grego comum, a coiné, vira a língua de governo e de comércio do Egito à Mesopotâmia. É nela que, séculos depois, se escreve o Novo Testamento.',
      },
    ],
    today: 'Hoje, o grego é oficial na Grécia e em Chipre. Na Turquia, quase toda a população de língua grega saiu na troca de populações de 1923; no sul da Itália, ainda resistem o griko e o grecânico — se vêm da Magna Grécia antiga ou dos tempos bizantinos, os linguistas debatem. O tsacônio, outro ramo helênico, está no app.',
  },
  {
    id: 'indo-iranianas',
    name: 'Indo-iranianas',
    emoji: '🕌',
    color: '#EA580C',
    lineage: 'Indo-iraniano',
    eras: [
      {
        label: 'c. 1500 a.C.',
        countries: ['IND', 'PAK', 'AFG', 'IRN'],
        text: 'Povos de língua indo-ariana chegam ao noroeste do subcontinente indiano, e os hinos do Rigveda, em sânscrito védico, são compostos por volta dessa época (as datas são aproximadas e debatidas). Os povos de língua iraniana se espalham pelo planalto do Irã.',
      },
      {
        label: 'c. 500 a.C.',
        countries: ['IND', 'PAK', 'NPL', 'AFG', 'IRN', 'TJK', 'UZB', 'TKM', 'KAZ', 'UKR'],
        text: 'O persa antigo é a língua das inscrições dos reis aquemênidas, como a de Behistun. Nas estepes, da Ucrânia ao Cazaquistão, os citas, nômades de língua iraniana, dominam o comércio de cavalos; no norte da Índia, as línguas indo-arianas avançam para o leste, pelo vale do Ganges.',
      },
      {
        label: 'c. 1000',
        countries: ['IND', 'PAK', 'NPL', 'BGD', 'LKA', 'AFG', 'IRN', 'TJK', 'UZB'],
        text: 'O persa novo, escrito em alfabeto árabe, vira a grande língua de cultura do Irã à Ásia Central: Ferdowsi termina o Shahnameh, o “Livro dos Reis”, em 1010. No subcontinente, do sânscrito e dos prácritos vão nascendo as línguas que viram o híndi, o bengali e o marati; o cingalês, também indo-ariano, se fala no Sri Lanka desde a Antiguidade.',
      },
    ],
    today: 'Hoje, uma língua indo-iraniana (híndi, urdu, bengali, persa, pachto, nepali, cingalês…) é oficial nestes países — é o ramo indo-europeu com mais falantes nativos.',
  },
  {
    id: 'turquicas',
    name: 'Túrquicas',
    emoji: '🐎',
    color: '#E11D48',
    lineage: 'Túrquico',
    eras: [
      {
        label: 'c. 600',
        countries: ['MNG', 'KAZ', 'KGZ', 'UZB'],
        text: 'O Canato Göktürk (552–744) une os povos túrquicos das estepes, da Mongólia à Ásia Central. As inscrições do Orkhon, na Mongólia, do século VIII, são os textos mais antigos numa língua túrquica. Onde a família nasceu é debatido; muitos pesquisadores apontam o sul da Sibéria e a Mongólia.',
      },
      {
        label: 'c. 1100',
        countries: ['KAZ', 'KGZ', 'UZB', 'TKM', 'AZE', 'TUR'],
        text: 'Os oguzes ocupam o atual Turcomenistão e o Azerbaijão, e os seljúcidas, depois da vitória em Manzikert (1071), abrem a Anatólia aos falantes túrquicos — o começo do turco da Turquia. Na Mongólia, as línguas túrquicas já deram lugar às mongólicas.',
      },
      {
        label: 'c. 1600',
        countries: ['KAZ', 'KGZ', 'UZB', 'TKM', 'AZE', 'TUR', 'CYP', 'BGR', 'UKR'],
        text: 'O Império Otomano leva o turco aos Bálcãs e, a partir de 1571, a Chipre; na Crimeia (Ucrânia), fala-se o tártaro da Crimeia. Na Ásia Central, os canatos usbeque e cazaque dão nome aos povos de hoje.',
      },
    ],
    today: 'Hoje, uma língua túrquica (turco, usbeque, cazaque, azeri, turcomeno, quirguiz) é oficial nestes países. Na Rússia, o tártaro, o baquir, o chuvache e o iacuto são oficiais nas suas repúblicas.',
  },
  {
    id: 'mongolicas',
    name: 'Mongólicas',
    emoji: '🏹',
    color: '#7C3AED',
    lineage: 'Mongólico',
    eras: [
      {
        label: 'c. 1206',
        countries: ['MNG'],
        text: 'Gengis Khan une as tribos mongóis em 1206, e por volta dessa época os mongóis adaptam o alfabeto uigur para escrever a sua língua — a escrita vertical que o app ensina no mongol tradicional. O império vai da Coreia às portas da Europa Central, mas fora da Mongólia os conquistadores acabam adotando as línguas locais.',
      },
      {
        label: 'c. 1650',
        countries: ['MNG', 'CHN', 'RUS'],
        text: 'Na década de 1630, os calmucos (um povo oirate) migram até o baixo Volga, na Rússia, onde a sua língua sobrevive até hoje; os buriatos vivem em volta do lago Baikal. Ao sul do deserto de Gobi, a Mongólia Interior passa ao domínio da dinastia Qing, dos manchus, que adaptaram a escrita mongol para a sua própria língua.',
      },
    ],
    today: 'Hoje, o mongol é oficial na Mongólia (em cirílico). Na China, a Mongólia Interior continua usando a escrita tradicional, e na Rússia o buriato e o calmuco são oficiais nas suas repúblicas.',
  },
  {
    id: 'semiticas',
    name: 'Semíticas',
    emoji: '🐪',
    color: '#CA8A04',
    lineage: 'Semítico',
    eras: [
      {
        label: 'c. 2300 a.C.',
        countries: ['IRQ', 'SYR'],
        text: 'Sargão de Acádia funda o primeiro império da Mesopotâmia, e o acádio, escrito em cuneiforme, é a língua semítica mais antiga registrada; em Ebla, na Síria, escreve-se outra.',
      },
      {
        label: 'c. 800 a.C.',
        countries: ['IRQ', 'SYR', 'LBN', 'ISR', 'PSE', 'JOR', 'YEM', 'TUN'],
        text: 'Os fenícios, do atual Líbano, espalham pelo Mediterrâneo o seu alfabeto — o avô do grego e do latino — e fundam Cartago, na Tunísia. No Levante se falam o hebraico e o aramaico; no Iêmen, as línguas da Arábia do Sul.',
      },
      {
        label: 'c. 750',
        countries: ['SAU', 'YEM', 'OMN', 'ARE', 'IRQ', 'SYR', 'JOR', 'LBN', 'ISR', 'PSE', 'EGY', 'LBY', 'TUN', 'DZA', 'MAR', 'ESP', 'PRT', 'ETH', 'ERI'],
        text: 'Com a expansão islâmica, a partir de 632, o árabe sai da Península Arábica e chega do Iraque ao Marrocos e, depois de 711, à Península Ibérica. Na Etiópia e na Eritreia, o gueês, língua do reino de Aksum, é semítico também.',
      },
      {
        label: 'c. 1500',
        countries: ['SAU', 'YEM', 'OMN', 'ARE', 'KWT', 'QAT', 'BHR', 'IRQ', 'SYR', 'JOR', 'LBN', 'ISR', 'PSE', 'EGY', 'SDN', 'LBY', 'TUN', 'DZA', 'MAR', 'MRT', 'MLT', 'ETH', 'ERI'],
        text: 'Com a queda de Granada, em 1492, o árabe sai da Península Ibérica. Em Malta, o maltês, que nasceu do árabe da Sicília, segue vivo — hoje é a única língua semítica oficial da União Europeia e se escreve em alfabeto latino. Na Etiópia, o amárico é a língua da corte.',
      },
    ],
    today: 'Hoje, uma língua semítica (árabe, hebraico, amárico, tigrínia, maltês) é oficial nestes países — o árabe sozinho em mais de vinte.',
  },
  {
    id: 'bantas',
    name: 'Bantas',
    emoji: '🥁',
    color: '#B45309',
    lineage: 'Banto',
    eras: [
      {
        label: 'c. 1000 a.C.',
        countries: ['CMR', 'NGA'],
        text: 'As línguas bantas nascem perto da fronteira entre os atuais Camarões e Nigéria. A partir de lá começa a “expansão banta”, uma das maiores migrações da história, levada pela agricultura e, depois, pelo ferro — as datas e os caminhos exatos ainda são debatidos.',
      },
      {
        label: 'c. 500',
        countries: ['CMR', 'GAB', 'COG', 'COD', 'AGO', 'ZMB', 'TZA', 'KEN', 'UGA', 'RWA', 'BDI', 'MWI', 'MOZ', 'ZWE', 'ZAF'],
        text: 'Os falantes bantos já ocupam quase toda a África Central, Oriental e Austral, até o leste da atual África do Sul; as línguas khoisan, dos cliques, ficam no sudoeste.',
      },
      {
        label: 'c. 1500',
        countries: ['CMR', 'GAB', 'COG', 'COD', 'AGO', 'ZMB', 'TZA', 'KEN', 'UGA', 'RWA', 'BDI', 'MWI', 'MOZ', 'ZWE', 'ZAF', 'COM', 'SWZ', 'LSO', 'BWA', 'NAM'],
        text: 'Na costa do Índico, o suaíli é a língua das cidades de comércio, de Mombaça a Quíloa, cheia de palavras árabes. Do outro lado, o reino do Congo encontra os portugueses em 1483; mais tarde, o tráfico de escravizados leva o quimbundo e o quicongo ao Brasil.',
      },
    ],
    today: 'Hoje, uma língua banta (suaíli, quiniaruanda, xona, zulu, xhosa, sesoto…) é oficial nestes países; em vários outros, como Angola e a República Democrática do Congo, elas são línguas nacionais ao lado do português e do francês.',
  },
  {
    id: 'austronesias',
    name: 'Austronésias',
    emoji: '🛶',
    color: '#0D9488',
    lineage: 'Austronésio',
    eras: [
      {
        label: 'c. 3000 a.C.',
        countries: ['TWN'],
        text: 'A maior parte dos pesquisadores situa a origem das línguas austronésias em Taiwan, onde ainda vivem as línguas da família mais diferentes entre si.',
      },
      {
        label: 'c. 1000 a.C.',
        countries: ['TWN', 'PHL', 'IDN', 'MYS', 'BRN', 'TLS', 'PNG', 'FJI', 'TON', 'WSM'],
        text: 'Navegando em canoas com flutuadores, os austronésios ocupam as Filipinas e a Indonésia e, com a cultura Lapita, chegam a Fiji, Tonga e Samoa por volta de 1000 a 800 a.C.',
      },
      {
        label: 'c. 600',
        countries: ['TWN', 'PHL', 'IDN', 'MYS', 'BRN', 'TLS', 'PNG', 'FJI', 'TON', 'WSM', 'MDG'],
        text: 'Navegadores vindos de Bornéu atravessam o Oceano Índico e povoam Madagascar: o malgaxe é parente próximo das línguas do sul de Bornéu, a mais de 6 mil quilômetros.',
      },
      {
        label: 'c. 1300',
        countries: ['TWN', 'PHL', 'IDN', 'MYS', 'BRN', 'TLS', 'PNG', 'FJI', 'TON', 'WSM', 'MDG', 'NZL'],
        text: 'Os polinésios chegam aos últimos cantos do Pacífico: o Havaí, a Ilha de Páscoa e, por volta de 1250 a 1300, a Nova Zelândia, onde nasce o maori. É a família de línguas mais espalhada do mundo antes das navegações europeias.',
      },
    ],
    today: 'Hoje, uma língua austronésia (indonésio, malaio, tagalo, malgaxe, maori, samoano, tonganês…) é oficial nestes países. O havaiano é oficial no estado do Havaí, e em Taiwan as línguas indígenas são reconhecidas como línguas nacionais.',
  },
  {
    id: 'tupi',
    name: 'Tupi-guarani',
    emoji: '🦜',
    color: '#65A30D',
    lineage: 'Tupi',
    eras: [
      {
        label: 'c. 1500',
        countries: ['BRA', 'PRY', 'ARG', 'BOL'],
        text: 'Quando os europeus chegam, povos de língua tupi, como os tupinambás, ocupam boa parte da costa do Brasil, e os guaranis vivem na bacia do Paraná e do Paraguai. A família tupi deve ter nascido bem antes, na Amazônia; o lugar exato é debatido.',
      },
      {
        label: 'c. 1700',
        countries: ['BRA', 'PRY', 'ARG'],
        text: 'As “línguas gerais”, de base tupi, são as mais faladas na colônia: a paulista vai com os bandeirantes, e a amazônica, o nheengatu, sobe os rios do Norte. Nas missões jesuíticas, o guarani se escreve e se ensina. Em 1758, o Diretório dos Índios, do Marquês de Pombal, impõe o português, e as línguas gerais começam a recuar.',
      },
    ],
    today: 'Hoje, o guarani é oficial no Paraguai, ao lado do espanhol, e falado pela maior parte da população. No Brasil, o nheengatu é cooficial em São Gabriel da Cachoeira (AM), e dezenas de línguas tupis seguem vivas em terras indígenas.',
  },
  {
    id: 'quechua',
    name: 'Quéchua',
    emoji: '🦙',
    color: '#DB2777',
    lineage: 'Quéchua',
    eras: [
      {
        label: 'c. 500',
        countries: ['PER'],
        text: 'O quéchua nasce no centro do atual Peru — onde exatamente, os linguistas ainda debatem —, séculos antes dos incas.',
      },
      {
        label: 'c. 1530',
        countries: ['PER', 'ECU', 'BOL', 'CHL', 'ARG', 'COL'],
        text: 'O Império Inca, o Tawantinsuyu, usa o quéchua como língua de governo do sul da Colômbia ao centro do Chile, ao lado de muitas outras línguas, como o aimará.',
      },
      {
        label: 'c. 1650',
        countries: ['PER', 'ECU', 'BOL', 'CHL', 'ARG'],
        text: 'Os missionários espanhóis adotam o quéchua como “língua geral” para pregar (o Terceiro Concílio de Lima publica um catecismo nele em 1584), e ele se espalha ainda mais, até Santiago del Estero, na Argentina.',
      },
    ],
    today: 'Hoje, o quéchua é oficial no Peru, na Bolívia e no Equador, e é a família de línguas indígenas mais falada das Américas.',
  },
  {
    id: 'sino-tibetanas',
    name: 'Sino-tibetanas',
    emoji: '🐉',
    color: '#DC2626',
    lineage: 'Sino-tibetano',
    eras: [
      {
        label: 'c. 1200 a.C.',
        countries: ['CHN'],
        text: 'As inscrições em ossos oraculares da dinastia Shang, no vale do Rio Amarelo, são o registro mais antigo do chinês — e da escrita chinesa, que ainda usa vários desses caracteres.',
      },
      {
        label: 'c. 1100',
        countries: ['CHN', 'MMR', 'BTN', 'NPL'],
        text: 'O tibetano, escrito desde o século VII, chega ao Butão, onde dá origem ao dzongkha; no vale de Katmandu fala-se o newar; e o reino de Pagan, na Birmânia, deixa as primeiras inscrições em birmanês (a de Myazedi é de 1113).',
      },
      {
        label: 'c. 1850',
        countries: ['CHN', 'MMR', 'BTN', 'NPL', 'TWN', 'SGP', 'MYS'],
        text: 'Imigrantes chineses povoam Taiwan desde o século XVII e, no século XIX, levam o hokkien, o cantonês e o hakka a Singapura, à Malásia e a todo o Sudeste Asiático.',
      },
    ],
    today: 'Hoje, uma língua sino-tibetana (mandarim, cantonês, birmanês, dzongkha) é oficial nestes países; o chinês, com todas as suas variedades, é a língua com mais falantes nativos do mundo.',
  },
  {
    id: 'dravidicas',
    name: 'Dravídicas',
    emoji: '🪔',
    color: '#9333EA',
    lineage: 'Dravídico',
    eras: [
      {
        label: 'c. 300 a.C.',
        countries: ['IND', 'LKA'],
        text: 'As inscrições em tâmil-brami, no sul da Índia, são o registro mais antigo de uma língua dravídica, e logo depois vem a poesia do Sangam. As línguas dravídicas já ocupam o sul do subcontinente; o brahui, isolado no Paquistão, é um mistério: pode ser resto de uma área dravídica maior ou fruto de uma migração mais tardia.',
      },
      {
        label: 'c. 1100',
        countries: ['IND', 'LKA', 'PAK'],
        text: 'O império Chola leva o tâmil ao norte do Sri Lanka e ao comércio com o Sudeste Asiático. O télugo e o canarês ganham literatura própria, e o malaiala começa a se separar do tâmil, na costa de Kerala.',
      },
    ],
    today: 'Hoje, o tâmil é oficial no Sri Lanka e em Singapura. Na Índia, o tâmil, o télugo, o canarês e o malaiala são oficiais nos seus estados — e o mapa só pinta onde a língua é oficial do país inteiro.',
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
