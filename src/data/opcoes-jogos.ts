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
}

const TUDO: OpcoesDoJogo = { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: true };

export const OPCOES_DOS_JOGOS: Record<string, OpcoesDoJogo> = {
  xadrez: TUDO,
  damas: TUDO,
  go: { tabuleiro: true, dicas: false, ultimoLance: true, coordenadas: true },
  gomoku: { tabuleiro: true, dicas: false, ultimoLance: true, coordenadas: false },
  velha: { tabuleiro: true, dicas: false, ultimoLance: true, coordenadas: false },
  hnefatafl: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  moinho: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  reversi: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  quoridor: { tabuleiro: true, dicas: true, ultimoLance: false, coordenadas: false },
  abalone: { tabuleiro: true, dicas: true, ultimoLance: false, coordenadas: false },
  octi: { tabuleiro: true, dicas: true, ultimoLance: false, coordenadas: false },
  fanorona: { tabuleiro: true, dicas: true, ultimoLance: true, coordenadas: false },
  // o oware é um tabuleiro de madeira entalhada, com covas, e o Ligue 4 é uma grade de plástico em
  // pé: os temas de tabuleiro (casas e moldura) não se aplicam a eles
  oware: { tabuleiro: false, dicas: true, ultimoLance: true, coordenadas: false, mancala: true },
  kalah: { tabuleiro: false, dicas: true, ultimoLance: true, coordenadas: false, mancala: true },
  conecta4: { tabuleiro: false, dicas: false, ultimoLance: false, coordenadas: false },
};

/** As opções de um jogo; sem jogo (o painel geral da aba de jogos), mostra tudo. */
export function opcoesDoJogo(jogo?: string): OpcoesDoJogo {
  return (jogo && OPCOES_DOS_JOGOS[jogo]) || TUDO;
}
