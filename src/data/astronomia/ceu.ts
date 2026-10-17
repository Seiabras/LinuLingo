import type { MarcoArea } from '@/components/area/AreaTrilha';

/**
 * Os dados da área Astronomia (abas Céu, Na prática e Brasil).
 *
 * - Planetas: NASA, “Planetary Fact Sheet” (nssdc.gsfc.nasa.gov/planetary/factsheet), valores médios
 *   arredondados como na tabela: diâmetro, gravidade na superfície, distância média ao Sol, período da
 *   órbita, duração do dia solar e temperatura média. O número de luas fica de fora porque muda a cada
 *   descoberta.
 * - Sol: diâmetro de 1.392.700 km (NASA, “Sun Fact Sheet”). Luz: 299.792,458 km/s (definição do metro,
 *   BIPM). Unidade astronômica: 149.597.870,7 km (IAU, Resolução B2 de 2012).
 * - Cruzeiro do Sul: posições (ascensão reta e declinação, J2000) e magnitudes do catálogo Hipparcos
 *   (ESA, 1997), via SIMBAD. Os nomes populares em português (Magalhães, Mimosa, Rubídea, Pálida,
 *   Intrometida) e o estado de cada estrela na bandeira: Lei nº 5.700/1971, com a redação da Lei nº
 *   8.421/1992 (o anexo descreve as estrelas da bandeira).
 * - Constelações indígenas: G. B. Afonso, “Mitos e estações no céu tupi-guarani”, Scientific American
 *   Brasil, ed. especial Etnoastronomia (2006).
 * - Marcos: Observatório Nacional, “História” (gov.br/observatorio); Biblioteca Nacional e Museu de
 *   Astronomia e Ciências Afins (MAST), sobre o eclipse de Sobral de 1919 e a visita de Einstein em 1925;
 *   OBA (oba.org.br); AEB, “Missão Centenário” (gov.br/aeb); INPE, satélite SCD-1 (1993).
 */

export interface Planeta {
  nome: string;
  emoji: string;
  tipo: 'rochoso' | 'gigante gasoso' | 'gigante de gelo' | 'planeta anão' | 'satélite';
  diametroKm: number;
  /** gravidade na superfície, em m/s² */
  gravidade: number;
  /** distância média ao Sol, em milhões de km (a Lua: à Terra) */
  distanciaMkm: number;
  /** tempo de uma volta em torno do Sol, em dias terrestres (a Lua: em torno da Terra) */
  orbitaDias: number;
  /** duração do dia solar (de um nascer do Sol ao outro), em horas */
  diaHoras: number;
  /** temperatura média, em °C */
  temperatura: number;
  curiosidade: string;
}

export const PLANETAS: Planeta[] = [
  {
    nome: 'Mercúrio',
    emoji: '🪨',
    tipo: 'rochoso',
    diametroKm: 4879,
    gravidade: 3.7,
    distanciaMkm: 57.9,
    orbitaDias: 88.0,
    diaHoras: 4222.6,
    temperatura: 167,
    curiosidade: 'O mais perto do Sol e o menor dos planetas. Um dia (de um nascer do Sol ao outro) dura dois anos de Mercúrio.',
  },
  {
    nome: 'Vênus',
    emoji: '🌕',
    tipo: 'rochoso',
    diametroKm: 12104,
    gravidade: 8.9,
    distanciaMkm: 108.2,
    orbitaDias: 224.7,
    diaHoras: 2802.0,
    temperatura: 464,
    curiosidade: 'O mais quente, mesmo sem ser o mais perto do Sol: a atmosfera grossa de gás carbônico prende o calor. É a “estrela-d’alva”, o ponto mais brilhante do céu depois da Lua.',
  },
  {
    nome: 'Terra',
    emoji: '🌍',
    tipo: 'rochoso',
    diametroKm: 12756,
    gravidade: 9.8,
    distanciaMkm: 149.6,
    orbitaDias: 365.2,
    diaHoras: 24.0,
    temperatura: 15,
    curiosidade: 'O único lugar onde se conhece vida. A distância média ao Sol virou uma régua: a unidade astronômica (UA).',
  },
  {
    nome: 'Marte',
    emoji: '🔴',
    tipo: 'rochoso',
    diametroKm: 6792,
    gravidade: 3.7,
    distanciaMkm: 228.0,
    orbitaDias: 687.0,
    diaHoras: 24.7,
    temperatura: -65,
    curiosidade: 'Vermelho por causa do óxido de ferro (a ferrugem) no chão. O dia lá dura quase o mesmo que aqui: 24 horas e 40 minutos.',
  },
  {
    nome: 'Júpiter',
    emoji: '🟠',
    tipo: 'gigante gasoso',
    diametroKm: 142984,
    gravidade: 23.1,
    distanciaMkm: 778.5,
    orbitaDias: 4331,
    diaHoras: 9.9,
    temperatura: -110,
    curiosidade: 'O maior planeta: caberiam mais de mil Terras dentro dele. Galileu viu as quatro maiores luas dele em 1610.',
  },
  {
    nome: 'Saturno',
    emoji: '🪐',
    tipo: 'gigante gasoso',
    diametroKm: 120536,
    gravidade: 9.0,
    distanciaMkm: 1432.0,
    orbitaDias: 10747,
    diaHoras: 10.7,
    temperatura: -140,
    curiosidade: 'Os anéis são feitos de pedaços de gelo e rocha, de grãos a blocos do tamanho de uma casa.',
  },
  {
    nome: 'Urano',
    emoji: '🔵',
    tipo: 'gigante de gelo',
    diametroKm: 51118,
    gravidade: 8.7,
    distanciaMkm: 2867.0,
    orbitaDias: 30589,
    diaHoras: 17.2,
    temperatura: -195,
    curiosidade: 'Gira deitado, com o eixo quase no plano da órbita. Foi o primeiro planeta descoberto com telescópio, por William Herschel, em 1781.',
  },
  {
    nome: 'Netuno',
    emoji: '🌊',
    tipo: 'gigante de gelo',
    diametroKm: 49528,
    gravidade: 11.0,
    distanciaMkm: 4515.0,
    orbitaDias: 59800,
    diaHoras: 16.1,
    temperatura: -200,
    curiosidade: 'Foi achado primeiro na conta e depois no céu: em 1846, Urbain Le Verrier calculou onde ele devia estar, e Johann Galle o viu lá.',
  },
  {
    nome: 'Plutão',
    emoji: '⚪',
    tipo: 'planeta anão',
    diametroKm: 2376,
    gravidade: 0.7,
    distanciaMkm: 5906.4,
    orbitaDias: 90560,
    diaHoras: 153.3,
    temperatura: -225,
    curiosidade: 'Descoberto em 1930 por Clyde Tombaugh. Em 2006, a União Astronômica Internacional o classificou como planeta anão.',
  },
];

export const LUA: Planeta = {
  nome: 'Lua',
  emoji: '🌙',
  tipo: 'satélite',
  diametroKm: 3475,
  gravidade: 1.6,
  distanciaMkm: 0.3844,
  orbitaDias: 27.3,
  diaHoras: 708.7,
  temperatura: -20,
  curiosidade: 'Mostra sempre a mesma face para a Terra, porque gira em torno de si no mesmo tempo em que dá a volta na Terra.',
};

export const SOL_DIAMETRO_KM = 1_392_700;
export const VELOCIDADE_LUZ_KM_S = 299_792.458;
export const UA_KM = 149_597_870.7;
export const ANO_LUZ_KM = VELOCIDADE_LUZ_KM_S * 365.25 * 86_400;

export interface EstrelaCruzeiro {
  /** a letra grega de Bayer */
  bayer: string;
  /** o nome popular no Brasil */
  nome: string;
  /** o nome internacional */
  internacional: string;
  /** ascensão reta, em horas (J2000) */
  ar: number;
  /** declinação, em graus (J2000) */
  dec: number;
  magnitude: number;
  /** o estado que a estrela representa na bandeira */
  bandeira: string;
}

export const CRUZEIRO_DO_SUL: EstrelaCruzeiro[] = [
  { bayer: 'α', nome: 'Estrela de Magalhães', internacional: 'Acrux', ar: 12 + 26 / 60 + 35.9 / 3600, dec: -(63 + 5 / 60 + 57 / 3600), magnitude: 0.77, bandeira: 'São Paulo' },
  { bayer: 'β', nome: 'Mimosa', internacional: 'Mimosa (Becrux)', ar: 12 + 47 / 60 + 43.3 / 3600, dec: -(59 + 41 / 60 + 19 / 3600), magnitude: 1.25, bandeira: 'Rio de Janeiro' },
  { bayer: 'γ', nome: 'Rubídea', internacional: 'Gacrux', ar: 12 + 31 / 60 + 9.96 / 3600, dec: -(57 + 6 / 60 + 48 / 3600), magnitude: 1.63, bandeira: 'Bahia' },
  { bayer: 'δ', nome: 'Pálida', internacional: 'Imai', ar: 12 + 15 / 60 + 8.7 / 3600, dec: -(58 + 44 / 60 + 56 / 3600), magnitude: 2.79, bandeira: 'Minas Gerais' },
  { bayer: 'ε', nome: 'Intrometida', internacional: 'Ginan', ar: 12 + 21 / 60 + 21.6 / 3600, dec: -(60 + 24 / 60 + 4 / 3600), magnitude: 3.59, bandeira: 'Espírito Santo' },
];

export interface Constelacao {
  nome: string;
  quando: string;
  comoAchar: string;
}

/** Constelações fáceis de achar no céu do Brasil (as 88 oficiais são da IAU, desde 1922). */
export const CONSTELACOES: Constelacao[] = [
  {
    nome: 'Cruzeiro do Sul (Crux)',
    quando: 'O ano todo no Sul do Brasil; melhor no começo da noite de abril a julho',
    comoAchar: 'Cinco estrelas em forma de pipa, a menor das 88 constelações. Do lado dela, duas estrelas muito brilhantes, Alfa e Beta do Centauro, apontam para a cruz.',
  },
  {
    nome: 'Órion e as Três Marias',
    quando: 'Começo da noite de dezembro a março',
    comoAchar: 'Três estrelas em fila, bem iguais: as Três Marias, o cinto de Órion. Perto delas, Betelgeuse, avermelhada, e Rigel, azulada.',
  },
  {
    nome: 'Escorpião',
    quando: 'Começo da noite de junho a agosto',
    comoAchar: 'Um anzol de estrelas, com Antares, vermelha, no “coração”. Fica perto da parte mais brilhante da Via Láctea.',
  },
  {
    nome: 'Carina e Canopus',
    quando: 'Começo da noite de janeiro a abril',
    comoAchar: 'Canopus é a segunda estrela mais brilhante do céu noturno, depois de Sirius (do Cão Maior), que fica perto.',
  },
];

export interface ConstelacaoIndigena {
  nome: string;
  povo: string;
  estrelas: string;
  quando: string;
}

export const CONSTELACOES_INDIGENAS: ConstelacaoIndigena[] = [
  {
    nome: 'A Ema (Guyra Nhandu)',
    povo: 'Guarani',
    estrelas: 'Fica entre o Cruzeiro do Sul e o Escorpião; as manchas escuras da Via Láctea fazem parte do desenho.',
    quando: 'Quando ela aparece inteira no começo da noite, na segunda metade de junho, é o começo do inverno para os guaranis do Sul, e o da estação seca para os povos do Norte.',
  },
  {
    nome: 'O Homem Velho (Tuya’i)',
    povo: 'Tupi-guarani',
    estrelas: 'Usa estrelas de Órion e do Touro, com as Plêiades e as Híades.',
    quando: 'Quando ele aparece no começo da noite, na segunda metade de dezembro, começa o verão no Sul e a estação das chuvas no Norte.',
  },
];

export const MARCOS_ASTRO_BRASIL: MarcoArea[] = [
  {
    ano: '1639',
    titulo: 'Um observatório no Recife holandês',
    sobre: 'Georg Marcgrave, cientista alemão a serviço de Maurício de Nassau, monta no Recife um observatório, considerado o primeiro das Américas.',
  },
  {
    ano: '1827',
    titulo: 'O Observatório Nacional',
    sobre: 'Dom Pedro I cria o Imperial Observatório do Rio de Janeiro, hoje Observatório Nacional, que até hoje cuida da hora oficial do Brasil.',
  },
  {
    ano: '1889',
    titulo: 'O céu da bandeira',
    sobre: 'A bandeira da República mostra o céu do Rio de Janeiro às 8h30 de 15 de novembro de 1889. Desde 1992, são 27 estrelas: uma para cada estado e o Distrito Federal.',
  },
  {
    ano: '1919',
    titulo: 'O eclipse de Sobral',
    sobre: 'No eclipse de 29 de maio, astrônomos fotografam em Sobral, no Ceará, as estrelas perto do Sol e confirmam que a luz faz curva perto dele, como a relatividade geral de Einstein previa.',
  },
  { ano: '1925', titulo: 'Einstein no Brasil', sobre: 'Albert Einstein visita o Rio de Janeiro e dá palestras; a ele se atribui a frase “o problema concebido pelo meu cérebro foi resolvido pelo luminoso céu do Brasil”.' },
  { ano: '1993', titulo: 'O primeiro satélite brasileiro', sobre: 'O SCD-1, feito pelo INPE para coletar dados do tempo e do ambiente, é lançado em 9 de fevereiro.' },
  {
    ano: '1998',
    titulo: 'A OBA',
    sobre: 'Começa a Olimpíada Brasileira de Astronomia e Astronáutica, aberta a todas as escolas, com centenas de milhares de estudantes a cada ano.',
  },
  {
    ano: '2006',
    titulo: 'Um brasileiro no espaço',
    sobre: 'Em 30 de março, o tenente-coronel Marcos Pontes sobe na nave russa Soyuz até a Estação Espacial Internacional: é a Missão Centenário, nos 100 anos do voo do 14-Bis.',
  },
];
