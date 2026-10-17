/**
 * O Mundo da área Música: os instrumentos por família, as pessoas e as profissões.
 *
 * Famílias: a classificação de Hornbostel e Sachs (1914), pelo jeito de produzir o som (idiofones,
 * membranofones, cordofones, aerofones; os eletrofones vieram depois); resumo em Goshen College,
 * “Instrument classification” (https://www.goshen.edu/arts/instrument-classification/). Os instrumentos
 * são os que têm som gravado no app (`sons-nomes.ts`).
 *
 * Pessoas:
 * - Beethoven e a 9ª Sinfonia (1824): ver `melodias.ts`.
 * - Chiquinha Gonzaga (1847–1935): a primeira mulher a reger uma orquestra no Brasil; “Ó Abre Alas”
 *   (1899), lembrada como a primeira marchinha de carnaval (https://en.wikipedia.org/wiki/Chiquinha_Gonzaga;
 *   Interlude, “Brazilian first conductor and first choro composer”).
 * - Pixinguinha: o Dia Nacional do Choro, 23 de abril, desde 2000, homenageia o nascimento dele
 *   (Jornal Opção, https://www.jornalopcao.com.br/colunas-e-blogs/musica/dia-nacional-do-choro-uma-homenagem-a-data-de-nascimento-de-pixinguinha-396028/).
 * - Villa-Lobos: fundou a Academia Brasileira de Música (eBiografia, “Os 32 maiores compositores brasileiros”).
 * - Tom Jobim: “Garota de Ipanema”, com letra de Vinicius de Moraes, composta em 1962 e gravada em 1963;
 *   Grammy em 1965; a música mais gravada do Brasil (eBiografia; Correio Braziliense, 2023).
 *
 * Profissões: a lista do dono (`docs/areas-futuras.md`); a musicoterapia foi regulamentada pela Lei
 * 14.842/2024 (Correio Braziliense, 2024).
 */
export type Familia = 'cordofone' | 'aerofone' | 'membranofone' | 'idiofone';

export const FAMILIAS: Record<Familia, { nome: string; como: string }> = {
  cordofone: { nome: 'Cordofones (cordas)', como: 'O som vem de cordas esticadas que vibram: friccionadas pelo arco, dedilhadas ou percutidas.' },
  aerofone: { nome: 'Aerofones (sopro)', como: 'O som vem de uma coluna de ar que vibra dentro do instrumento.' },
  membranofone: { nome: 'Membranofones (pele)', como: 'O som vem de uma pele (membrana) esticada que vibra, batida ou friccionada.' },
  idiofone: { nome: 'Idiofones', como: 'O próprio corpo do instrumento vibra, sem corda, pele ou ar: o triângulo, o xilofone, o agogô.' },
};

/** A família de cada instrumento com som gravado no app (id de `sons-nomes.ts`). */
export const FAMILIA_DO_INSTRUMENTO: Record<string, Familia> = {
  piano: 'cordofone',
  violino: 'cordofone',
  violao: 'cordofone',
  harpa: 'cordofone',
  violoncelo: 'cordofone',
  bandolim: 'cordofone',
  koto: 'cordofone',
  acordeao: 'aerofone',
  flauta: 'aerofone',
  clarinete: 'aerofone',
  saxofone: 'aerofone',
  trompete: 'aerofone',
  'gaita-de-foles': 'aerofone',
  tambor: 'membranofone',
  cuica: 'membranofone',
};

export interface PessoaMusica {
  nome: string;
  anos?: string;
  /** o país da pessoa (ISO alfa-3), para o mapa do Mundo */
  pais: string;
  fez: string;
}

export const PESSOAS_MUSICA: PessoaMusica[] = [
  { nome: 'Ludwig van Beethoven', pais: 'DEU', fez: 'Compositor alemão; a 9ª Sinfonia (1824) termina com a “Ode à Alegria”, que você toca em Tocar.' },
  { nome: 'Chiquinha Gonzaga', anos: '1847–1935', pais: 'BRA', fez: 'A primeira mulher a reger uma orquestra no Brasil; compôs “Ó Abre Alas” (1899), lembrada como a primeira marchinha de carnaval.' },
  { nome: 'Pixinguinha', pais: 'BRA', fez: 'Mestre do choro; o Dia Nacional do Choro, 23 de abril, homenageia o nascimento dele.' },
  { nome: 'Heitor Villa-Lobos', pais: 'BRA', fez: 'Um dos maiores compositores do Brasil; fundou a Academia Brasileira de Música.' },
  { nome: 'Tom Jobim', pais: 'BRA', fez: 'Compôs “Garota de Ipanema” (1962, letra de Vinicius de Moraes), Grammy em 1965 e a música mais gravada do Brasil.' },
];

export const PROFISSOES_MUSICA = [
  { emoji: '🎻', nome: 'Intérprete', sobre: 'Toca ou canta: solista, músico de banda, de orquestra ou de grupo de câmara.' },
  { emoji: '✍️', nome: 'Compositor e arranjador', sobre: 'Cria músicas novas, adapta as que existem e faz trilhas para cinema, jogos e teatro.' },
  { emoji: '🎚️', nome: 'Engenheiro de som e produtor', sobre: 'Grava, mixa e masteriza; cuida da acústica e do desenho de som.' },
  { emoji: '🪚', nome: 'Luthier', sobre: 'Constrói, ajusta, conserta e restaura instrumentos.' },
  { emoji: '🧑‍🏫', nome: 'Professor de música', sobre: 'Ensina instrumento, canto e teoria; faz musicalização infantil e rege coros.' },
  { emoji: '💚', nome: 'Musicoterapeuta', sobre: 'Usa a música na reabilitação e no cuidado da saúde. No Brasil, a profissão foi regulamentada pela Lei 14.842/2024, que exige formação em musicoterapia.' },
];
