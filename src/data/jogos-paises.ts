/**
 * De onde vem cada jogo de tabuleiro, em países de hoje (ISO 3166-1 alfa-3), para o mapa da área
 * Lazer. Tirado só do texto `where` de cada jogo (src/data/jogos-conhecimento.ts, que tem as fontes):
 * o lugar onde o jogo nasceu ou foi criado e, quando o texto diz, onde se firmou ou é jogo nacional.
 * Lugar que não é país de hoje vira o país atual (Ur → Iraque; Pérsia → Irã; Havaí → EUA). Quem tem
 * origem incerta no texto (nim) ou só uma região sem país (lasca) fica fora do mapa. Os outros jogos do
 * Lazer (cartas, azar, brincadeiras, esportes, videogames) seguem a mesma regra, a partir do `where`
 * deles (src/data/outros-jogos/).
 */
export const PAISES_DO_JOGO: Record<string, string[]> = {
  damas: ['FRA'],
  xadrez: ['IND'],
  quoridor: ['FRA'],
  abalone: ['FRA'],
  octi: ['USA'],
  hnefatafl: ['NOR', 'SWE', 'DNK', 'ISL'],
  moinho: ['EGY'],
  conecta4: ['USA'],
  oware: ['GHA'],
  reversi: ['GBR', 'JPN'],
  go: ['CHN'],
  gomoku: ['JPN'],
  velha: ['EGY'],
  fanorona: ['MDG'],
  kalah: ['USA'],
  xiangqi: ['CHN', 'VNM'],
  gamao: ['IRN', 'GBR'],
  'damas-chinesas': ['DEU'],
  domino: ['CHN', 'ITA'],
  shogi: ['JPN'],
  onca: ['BRA'],
  'bagh-chal': ['NPL'],
  'mu-torere': ['NZL'],
  konane: ['USA'],
  hex: ['DNK', 'USA'],
  pontinhos: ['FRA'],
  alquerque: ['ESP'],
  janggi: ['KOR', 'PRK'],
  makruk: ['THA'],
  ur: ['IRQ'],
  senet: ['EGY'],
  pachisi: ['IND'],
  halma: ['USA'],
  'raposa-gansos': ['GBR'],
  surakarta: ['IDN'],
  bao: ['TZA', 'KEN', 'COM', 'MWI'],
  'linhas-de-acao': ['USA'],
  quarto: ['CHE', 'FRA'],
  quixo: ['FRA'],
  pylos: ['FRA'],
  quantik: ['FRA'],
  squadro: ['FRA'],
  qawale: ['FRA'],
  qomet: ['FRA'],
  pallanguzhi: ['IND', 'LKA'],
  'toguz-korgool': ['KGZ', 'KAZ'],
  sungka: ['PHL'],
  chaturanga: ['IND'],
  'yut-nori': ['KOR'],
  dara: ['NGA', 'NER', 'BFA'],
  amazonas: ['ARG'],
};

/** Os jogos sem país no mapa, com o motivo (o teste confere que todo jogo pronto está num dos dois). */
export const JOGOS_FORA_DO_MAPA: Record<string, string> = {
  nim: 'origem incerta (“talvez China”)',
  lasca: 'o texto diz só “Europa e Estados Unidos”, onde era vendido',
};

/** Os outros jogos do Lazer (cartas, azar, esportes, videogames), pelo `where` de cada um. */
export const PAISES_DO_OUTRO_JOGO: Record<string, string[]> = {
  hanafuda: ['JPN'],
  karuta: ['JPN'],
  ganjifa: ['IRN', 'IND'],
  encantados: ['BRA'],
  paciencia: ['USA'],
  truco: ['BRA', 'ESP'],
  buraco: ['URY', 'ARG', 'BRA'],
  copas: ['USA', 'FRA', 'ESP'],
  sueca: ['PRT'],
  escopa: ['BRA', 'ITA'],
  roleta: ['FRA', 'DEU'],
  esgrima: ['ITA', 'FRA'],
  pong: ['USA'],
  breakout: ['USA'],
  'space-invaders': ['JPN'],
  'campo-minado': ['USA'],
};

/** Os outros jogos sem país no mapa, com o motivo. */
export const OUTROS_FORA_DO_MAPA: Record<string, string> = {
  'duelo-dos-biomas': 'criado pelo LinuLingo',
  'trilha-da-evolucao': 'criado pelo LinuLingo',
  'bichos-ocultos': 'criado pelo LinuLingo',
  'duelo-de-bichos': 'criado pelo LinuLingo',
  amarelinha: 'brincadeira do mundo todo',
};
