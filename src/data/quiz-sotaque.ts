/**
 * «Qual é o seu sotaque?»: um quiz de pesquisa sobre o português de quem usa o app. Cada pergunta é
 * «como você diz…?», e cada resposta aponta para as regiões onde aquele jeito é mais comum — as
 * palavras e as pronúncias clássicas dos estudos de variação do português, como o Atlas Linguístico
 * do Brasil (mandioca × aipim × macaxeira, farol × sinal × sinaleira, mexerica × bergamota…).
 * No fim, o Linu dá um palpite e a pessoa diz se ele acertou. Os pesos são aproximados: as pessoas
 * se mudam, e todo mundo mistura.
 */
export type RegionId =
  | 'carioca'
  | 'paulistano'
  | 'caipira'
  | 'mineiro'
  | 'centro-oeste'
  | 'gaucho'
  | 'paranaense'
  | 'catarinense'
  | 'baiano'
  | 'nordestino'
  | 'nortista'
  | 'portugal';

export interface GuessRegion {
  id: RegionId;
  /** «sotaque carioca» */
  accent: string;
  where: string;
  emoji: string;
}

export const GUESS_REGIONS: GuessRegion[] = [
  { id: 'carioca', accent: 'carioca', where: 'Rio de Janeiro', emoji: '🏖️' },
  { id: 'paulistano', accent: 'paulistano', where: 'a cidade de São Paulo', emoji: '🏙️' },
  { id: 'caipira', accent: 'caipira', where: 'o interior de São Paulo, o sul de Minas e o norte do Paraná', emoji: '🌾' },
  { id: 'mineiro', accent: 'mineiro', where: 'Minas Gerais', emoji: '🧀' },
  { id: 'centro-oeste', accent: 'do Centro-Oeste', where: 'Goiás, o Distrito Federal e o Mato Grosso', emoji: '🦜' },
  { id: 'gaucho', accent: 'gaúcho', where: 'o Rio Grande do Sul', emoji: '🧉' },
  { id: 'paranaense', accent: 'curitibano', where: 'Curitiba e o Paraná', emoji: '🌲' },
  { id: 'catarinense', accent: 'manezinho', where: 'Florianópolis e o litoral de Santa Catarina', emoji: '🏝️' },
  { id: 'baiano', accent: 'baiano', where: 'a Bahia', emoji: '🥥' },
  { id: 'nordestino', accent: 'nordestino', where: 'Pernambuco, Ceará, Paraíba, Rio Grande do Norte e Alagoas', emoji: '🌵' },
  { id: 'nortista', accent: 'nortista', where: 'o Pará e o Amazonas', emoji: '🛶' },
  { id: 'portugal', accent: 'português de Portugal', where: 'Portugal', emoji: '🇵🇹' },
];

export interface GuessOption {
  label: string;
  weights: Partial<Record<RegionId, number>>;
}

export interface GuessQuestion {
  id: string;
  emoji: string;
  question: string;
  options: GuessOption[];
}

export const GUESS_QUESTIONS: GuessQuestion[] = [
  {
    id: 'legal',
    emoji: '😎',
    question: 'Uma coisa muito boa. Como é «legal» no seu sotaque? «Esse filme é…»',
    options: [
      { label: 'maneiro', weights: { carioca: 3 } },
      { label: 'da hora', weights: { paulistano: 3, caipira: 1 } },
      { label: 'massa', weights: { nordestino: 3, baiano: 1, 'centro-oeste': 1 } },
      { label: 'tri legal / bah, tri', weights: { gaucho: 3 } },
      { label: 'arretado', weights: { nordestino: 2, baiano: 1 } },
      { label: 'bão demais', weights: { mineiro: 3, 'centro-oeste': 1 } },
      { label: 'fixe', weights: { portugal: 3 } },
      { label: 'top, show, legal mesmo', weights: {} },
    ],
  },
  {
    id: 'mandioca',
    emoji: '🍠',
    question: 'A raiz que se come frita ou cozida e vira farinha:',
    options: [
      { label: 'mandioca', weights: { paulistano: 2, caipira: 2, mineiro: 2, 'centro-oeste': 2, paranaense: 2, portugal: 1 } },
      { label: 'aipim', weights: { carioca: 3, gaucho: 2, catarinense: 2, baiano: 2 } },
      { label: 'macaxeira', weights: { nordestino: 3, nortista: 3 } },
    ],
  },
  {
    id: 'semaforo',
    emoji: '🚦',
    question: 'A luz que controla o trânsito na esquina:',
    options: [
      { label: 'sinal', weights: { carioca: 2, mineiro: 2, nordestino: 2, nortista: 1, 'centro-oeste': 1 } },
      { label: 'farol', weights: { paulistano: 3, caipira: 2 } },
      { label: 'sinaleira', weights: { gaucho: 2, baiano: 2 } },
      { label: 'sinaleiro', weights: { paranaense: 3, catarinense: 1 } },
      { label: 'semáforo', weights: { portugal: 2 } },
    ],
  },
  {
    id: 'tangerina',
    emoji: '🍊',
    question: 'A fruta parecida com a laranja, que se descasca com a mão:',
    options: [
      { label: 'mexerica', weights: { mineiro: 3, caipira: 2, 'centro-oeste': 2, paulistano: 1 } },
      { label: 'bergamota', weights: { gaucho: 3, catarinense: 2 } },
      { label: 'mimosa', weights: { paranaense: 3 } },
      { label: 'tangerina', weights: { carioca: 2, nordestino: 2, baiano: 2, nortista: 2, portugal: 2 } },
      { label: 'poncã', weights: { caipira: 1, mineiro: 1 } },
    ],
  },
  {
    id: 'pao',
    emoji: '🥖',
    question: 'O pãozinho do café da manhã, da padaria:',
    options: [
      { label: 'pão francês', weights: { paulistano: 2, carioca: 2, caipira: 1, 'centro-oeste': 1, baiano: 1, paranaense: 1, catarinense: 1 } },
      { label: 'pão de sal', weights: { mineiro: 3 } },
      { label: 'cacetinho', weights: { gaucho: 3 } },
      { label: 'pão carioquinha', weights: { nordestino: 2 } },
      { label: 'pão careca', weights: { nortista: 3 } },
      { label: 'carcaça', weights: { portugal: 3 } },
    ],
  },
  {
    id: 'sacole',
    emoji: '🧊',
    question: 'O suco congelado no saquinho plástico, vendido na rua ou na casa da vizinha:',
    options: [
      { label: 'sacolé', weights: { carioca: 3 } },
      { label: 'geladinho', weights: { paulistano: 2, caipira: 2, 'centro-oeste': 1, paranaense: 1 } },
      { label: 'dindim', weights: { nordestino: 3 } },
      { label: 'não conheço / outro nome', weights: {} },
    ],
  },
  {
    id: 'menino',
    emoji: '🧒',
    question: 'Um menino, uma criança pequena:',
    options: [
      { label: 'guri', weights: { gaucho: 3, catarinense: 1 } },
      { label: 'piá', weights: { paranaense: 3, catarinense: 1 } },
      { label: 'moleque', weights: { paulistano: 2, carioca: 1, caipira: 1 } },
      { label: 'menino / minino', weights: { mineiro: 2, nordestino: 1, baiano: 1, 'centro-oeste': 1 } },
      { label: 'curumim', weights: { nortista: 3 } },
      { label: 'miúdo', weights: { portugal: 3 } },
    ],
  },
  {
    id: 'susto',
    emoji: '😱',
    question: 'Você leva um susto. O que sai da sua boca?',
    options: [
      { label: 'Uai!', weights: { mineiro: 3, 'centro-oeste': 1 } },
      { label: 'Oxente! / Oxe!', weights: { baiano: 3, nordestino: 2 } },
      { label: 'Égua!', weights: { nortista: 3 } },
      { label: 'Bah!', weights: { gaucho: 3 } },
      { label: 'Eita! / Vixe!', weights: { nordestino: 1, baiano: 1, 'centro-oeste': 1, caipira: 1 } },
      { label: 'Caraca!', weights: { carioca: 2 } },
      { label: 'Nossa! / Meu!', weights: { paulistano: 2, caipira: 1, mineiro: 1 } },
      { label: 'Ena!', weights: { portugal: 3 } },
    ],
  },
  {
    id: 'voce',
    emoji: '👉',
    question: 'Como você pergunta a um amigo: «___ à praia amanhã?»',
    options: [
      { label: 'Você vai', weights: { paulistano: 2, mineiro: 1, caipira: 2, 'centro-oeste': 2, baiano: 1 } },
      { label: 'Cê vai', weights: { mineiro: 3, caipira: 2, 'centro-oeste': 1 } },
      { label: 'Tu vai', weights: { carioca: 2, gaucho: 2, nordestino: 2, paranaense: 1 } },
      { label: 'Tu vais', weights: { catarinense: 3, nortista: 2, portugal: 2 } },
    ],
  },
  {
    id: 's',
    emoji: '🐍',
    question: 'Como soa o «s» de «festa» e de «mesmo» quando você fala?',
    options: [
      { label: 'chiado, como o «ch» de «chá» («fexta»)', weights: { carioca: 3, nortista: 2, catarinense: 2, portugal: 2, nordestino: 1 } },
      { label: 'assobiado, como o «s» de «sapo»', weights: { paulistano: 2, caipira: 2, mineiro: 2, 'centro-oeste': 2, gaucho: 2, paranaense: 2, baiano: 1 } },
    ],
  },
  {
    id: 'r',
    emoji: '🗣️',
    question: 'E o «r» de «porta»?',
    options: [
      { label: 'puxado, com a língua dobrada para trás (o «r» caipira)', weights: { caipira: 3, 'centro-oeste': 2, paranaense: 1 } },
      { label: 'aspirado, como um «h» («pohta»)', weights: { carioca: 2, mineiro: 2, nordestino: 2, baiano: 2, nortista: 2 } },
      { label: 'batido, como o «r» de «caro»', weights: { paulistano: 2, gaucho: 2, paranaense: 1, portugal: 2 } },
    ],
  },
  {
    id: 'ti',
    emoji: '👵',
    question: 'E o «t» de «tia» e o «d» de «dia»?',
    options: [
      { label: '«tchia», «djia»', weights: { carioca: 1, paulistano: 1, caipira: 1, mineiro: 1, 'centro-oeste': 1, baiano: 1, nortista: 1, paranaense: 1, catarinense: 1, gaucho: 1 } },
      { label: '«tia», «dia», com o t e o d secos', weights: { nordestino: 3, portugal: 3, gaucho: 1 } },
    ],
  },
];

export type GuessAnswers = Record<string, number>;

export interface GuessResult {
  region: GuessRegion;
  /** 0–1: quanto das respostas que podiam apontar para a região apontaram */
  score: number;
}

/**
 * O palpite: cada região ganha os pesos das respostas dadas, divididos pelo máximo que ela poderia
 * ganhar nas perguntas respondidas (assim uma região que aparece em muitas opções não leva vantagem).
 * Devolve as regiões da mais provável para a menos.
 */
export function guessAccent(answers: GuessAnswers): GuessResult[] {
  const raw = new Map<RegionId, number>();
  const max = new Map<RegionId, number>();
  for (const q of GUESS_QUESTIONS) {
    const i = answers[q.id];
    if (i === undefined) continue;
    for (const r of GUESS_REGIONS) {
      max.set(r.id, (max.get(r.id) ?? 0) + Math.max(0, ...q.options.map((o) => o.weights[r.id] ?? 0)));
      raw.set(r.id, (raw.get(r.id) ?? 0) + (q.options[i]?.weights[r.id] ?? 0));
    }
  }
  return GUESS_REGIONS.map((region) => ({ region, score: (max.get(region.id) ?? 0) ? (raw.get(region.id) ?? 0) / max.get(region.id)! : 0, raw: raw.get(region.id) ?? 0 }))
    .sort((a, b) => b.score - a.score || b.raw - a.raw)
    .map(({ region, score }) => ({ region, score }));
}

/** Para onde cada resposta aponta, para mostrar no fim: «aipim → Rio de Janeiro, Rio Grande do Sul…». */
export function pointsTo(option: GuessOption): GuessRegion[] {
  const best = Math.max(0, ...Object.values(option.weights));
  if (!best) return [];
  return GUESS_REGIONS.filter((r) => (option.weights[r.id] ?? 0) === best);
}
