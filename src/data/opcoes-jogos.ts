/**
 * O que a personalização mostra para cada jogo (pedido do dono, 11/10/2026: o Ligue 4 mostrava a
 * escolha de tabuleiro, mas ele é uma grade de plástico, sem tabuleiro de casas). Cada opção só
 * aparece no jogo em que ela muda alguma coisa; o teste `opcoes-jogos.test.ts` confere isso contra o
 * código de cada tabuleiro.
 */
export interface OpcoesDoJogo {
  /** o tema de tabuleiro (cores, moldura e o clima animado em volta) */
  tabuleiro: boolean;
  /** marcar os lances possíveis */
  dicas: boolean;
  /** marcar o último lance */
  ultimoLance: boolean;
  /** letras e números na moldura */
  coordenadas: boolean;
  /** o material do tabuleiro e as sementes das mancalas */
  mancala?: boolean;
  /** o estilo das peças do xiangqi */
  xiangqi?: boolean;
  /** o estilo das peças do shogi (kanji ou letra, com ou sem o movimento desenhado) */
  shogi?: boolean;
  /** a cor das pedras do dominó */
  domino?: boolean;
  /** a cor das peças redondas, nos jogos sem exército (go, gomoku, reversi, trilha, fanorona) */
  coresClassicas?: boolean;
  /** o par de cores dos jogos de cores próprias (Ligue 4, Quoridor, Abalone, Octi, velha) */
  par?: boolean;
  /** o material das paredes do Quoridor */
  paredes?: boolean;
  /** o estilo do X e do O do jogo da velha */
  marcas?: boolean;
}

const TUDO: OpcoesDoJogo = { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: true };

export const OPCOES_DOS_JOGOS: Record<string, OpcoesDoJogo> = {
  xadrez: TUDO,
  damas: TUDO,
  go: { tabuleiro: true, dicas: false, ultimoLance: true, coordenadas: true, coresClassicas: true },
  gomoku: { tabuleiro: true, dicas: false, ultimoLance: true, coordenadas: false, coresClassicas: true },
  velha: { tabuleiro: true, dicas: false, ultimoLance: true, coordenadas: false, par: true, marcas: true },
  hnefatafl: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  moinho: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, coresClassicas: true },
  reversi: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, coresClassicas: true },
  quoridor: { tabuleiro: true, dicas: true, ultimoLance: false, coordenadas: false, par: true, paredes: true },
  abalone: { tabuleiro: true, dicas: true, ultimoLance: false, coordenadas: false, par: true },
  octi: { tabuleiro: true, dicas: true, ultimoLance: false, coordenadas: false, par: true },
  fanorona: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, coresClassicas: true },
  xiangqi: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, xiangqi: true },
  'damas-chinesas': { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, par: true },
  shogi: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: true, shogi: true },
  janggi: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  makruk: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: true },
  gamao: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, coresClassicas: true },
  // as peças do Quarto são de madeira clara e escura, iguais para os dois jogadores: sem par de cores
  quarto: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  quantik: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  quixo: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, par: true },
  pylos: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  // os barcos do Squadro são de madeira clara e escura, como os do jogo: sem par de cores
  squadro: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  // as pedras do Qawale são claras, escuras e neutras cor de areia, como as do jogo: sem par de cores
  qawale: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  // as estrelas do Qomet são douradas e cor de vinho, como num jogo de madeira: sem par de cores
  qomet: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  // as dicas do Hex marcam as casas onde o adversário ganharia no próximo lance
  hex: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, par: true },
  // as dicas dos Pontinhos marcam os traços que fecham um quadradinho e os que dão o terceiro lado
  pontinhos: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, par: true },
  onca: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  'bagh-chal': { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  // a estrela do mū tōrere não tem casas: o tema pinta a estrela e a moldura; as peças são redondas
  'mu-torere': { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, coresClassicas: true },
  konane: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, coresClassicas: true },
  // o dominó não tem casas: o tema vira o pano da mesa; as dicas apagam as pedras que não servem
  domino: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false, domino: true },
  // o oware é um tabuleiro de madeira entalhada, com covas, e o Ligue 4 é uma grade de plástico em
  // pé: os temas de tabuleiro (casas e moldura) não se aplicam a eles
  oware: { tabuleiro: false, dicas: true, ultimoLance: true, coordenadas: false, mancala: true },
  kalah: { tabuleiro: false, dicas: true, ultimoLance: true, coordenadas: false, mancala: true },
  pallanguzhi: { tabuleiro: false, dicas: true, ultimoLance: true, coordenadas: false, mancala: true },
  conecta4: { tabuleiro: false, dicas: false, ultimoLance: false, coordenadas: false, par: true },
};

/** As opções de um jogo; sem jogo (o painel geral da aba de jogos), mostra tudo. */
export function opcoesDoJogo(jogo?: string): OpcoesDoJogo {
  return (jogo && OPCOES_DOS_JOGOS[jogo]) || TUDO;
}
