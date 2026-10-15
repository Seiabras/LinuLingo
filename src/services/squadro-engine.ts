/**
 * Motor do Squadro (Adrián Jiménez Pascual, Gigamic, 2018). Regras da folha oficial da Gigamic
 * (“SQUADRO 07-2018”, “® & © 2018 GIGAMIC from a concept of Adrián Jiménez Pascual”, em várias
 * línguas, consultada em 14/10/2026 em https://cdn.1j1ju.com/medias/53/a3/51-squadro-regle.pdf):
 *
 *   - cada jogador tem 5 peças; elas cruzam o tabuleiro em linha reta, cada uma no seu trilho, e as
 *     do outro jogador cruzam em ângulo reto;
 *   - na vez, move-se uma peça tantas casas quantos são os pontos gravados ao lado da casa de onde
 *     ela partiu; a peça faz o movimento inteiro, a não ser que seja impedida;
 *   - ao chegar ao outro lado, ela dá meia-volta e para, mesmo que sobrem pontos; a velocidade da
 *     volta é a dos pontos gravados na casa onde ela virou;
 *   - quando a peça passa por cima de uma ou mais peças adversárias (seguidas), ela salta e para na
 *     primeira casa vazia logo depois delas, mesmo que sobrem pontos; as saltadas voltam: para a
 *     casa de partida, se ainda estavam na ida, ou para a casa de meia-volta, se já estavam voltando;
 *   - a peça que volta à casa de partida sai do tabuleiro; ganha quem fizer a ida e volta com 4 das 5.
 *
 * A folha não traz o desenho do tabuleiro com os pontos. As velocidades de cada trilho (1, 3, 2, 3, 1
 * na ida de um jogador e 3, 1, 2, 1, 3 na volta, e o contrário para o outro) vêm do tabuleiro como
 * ele é reproduzido em duas implementações independentes (github.com/azWave/Squadro, board.py, e
 * github.com/abbassi001/Squadro-Game, PlateauSquadro.php) e batem com a página de ajuda do Board Game
 * Arena: na volta, 1 vira 3, 2 fica 2 e 3 vira 1 (en.doc.boardgamearena.com/Gamehelpsquadro).
 *
 * Geometria: tabuleiro 7×7. As claras (jogador 0) saem da coluna 0, nas linhas 1 a 5, e andam para a
 * direita; a meia-volta é na coluna 6. As escuras (jogador 1) saem da linha 6, nas colunas 1 a 5, e
 * andam para cima; a meia-volta é na linha 0. A posição de cada peça é a distância (0 a 6) da sua
 * casa de partida.
 */

export type JogadorS = 0 | 1;

export const TRILHOS = 5;
export const FIM = 6;
export const PARA_VENCER = 4;

/** Velocidade de cada trilho, na ida e na volta, para cada jogador. */
export const VELOCIDADES: Record<JogadorS, { ida: number[]; volta: number[] }> = {
  0: { ida: [1, 3, 2, 3, 1], volta: [3, 1, 2, 1, 3] },
  1: { ida: [3, 1, 2, 1, 3], volta: [1, 3, 2, 3, 1] },
};

export interface PecaS {
  /** distância da casa de partida (0 a 6) */
  pos: number;
  /** já deu meia-volta */
  volta: boolean;
  /** já fez a ida e volta e saiu do tabuleiro */
  fora: boolean;
}

export interface LanceFeito {
  jogador: JogadorS;
  trilho: number;
  de: number;
  para: number;
  /** a peça deu meia-volta neste lance */
  virou: boolean;
  /** a peça terminou a ida e volta neste lance */
  saiu: boolean;
  /** as peças do adversário que foram saltadas, de onde estavam e para onde voltaram */
  saltadas: { trilho: number; de: number; para: number }[];
}

export interface SquadroState {
  pecas: [PecaS[], PecaS[]];
  turn: JogadorS;
  winner: JogadorS | null;
  ultimo: LanceFeito | null;
}

const nova = (): PecaS => ({ pos: 0, volta: false, fora: false });
export const outro = (j: JogadorS): JogadorS => (j === 0 ? 1 : 0);

/** O primeiro jogador é sorteado (a regra manda sortear); aqui ele vem de fora. */
export function createInitialState(primeiro: JogadorS = 0): SquadroState {
  return { pecas: [Array.from({ length: TRILHOS }, nova), Array.from({ length: TRILHOS }, nova)], turn: primeiro, winner: null, ultimo: null };
}

/** A velocidade atual da peça (a dos pontos ao lado da casa de onde ela parte). */
export function velocidade(j: JogadorS, trilho: number, p: PecaS): number {
  return p.volta ? VELOCIDADES[j].volta[trilho]! : VELOCIDADES[j].ida[trilho]!;
}

/** A casa (linha, coluna) do tabuleiro 7×7 de uma peça. */
export function casaDe(j: JogadorS, trilho: number, pos: number): { linha: number; coluna: number } {
  return j === 0 ? { linha: trilho + 1, coluna: pos } : { linha: FIM - pos, coluna: trilho + 1 };
}

/**
 * O trilho da peça adversária que está na casa onde a peça (`j`, `trilho`) chegaria em `pos`, ou -1.
 * Só as casas 1 a 5 cruzam trilhos do adversário.
 */
function adversariaEm(s: SquadroState, j: JogadorS, trilho: number, pos: number): number {
  if (pos < 1 || pos > TRILHOS) return -1;
  const o = outro(j);
  // a casa onde a peça chegaria, e qual trilho do adversário passa por ela, em que posição
  const { linha, coluna } = casaDe(j, trilho, pos);
  const t = o === 0 ? linha - 1 : coluna - 1;
  const posDele = o === 0 ? coluna : FIM - linha;
  const q = s.pecas[o][t]!;
  return !q.fora && q.pos === posDele ? t : -1;
}

export function podeMover(s: SquadroState, trilho: number): boolean {
  const p = s.pecas[s.turn][trilho];
  return s.winner === null && !!p && !p.fora;
}

export function lancesLegais(s: SquadroState): number[] {
  if (s.winner !== null) return [];
  return [0, 1, 2, 3, 4].filter((t) => !s.pecas[s.turn][t]!.fora);
}

/** Move a peça do trilho dado de quem tem a vez. Lance ilegal devolve o mesmo estado. */
export function mover(s: SquadroState, trilho: number): SquadroState {
  if (!podeMover(s, trilho)) return s;
  const j = s.turn;
  const o = outro(j);
  const p = s.pecas[j][trilho]!;
  const dir = p.volta ? -1 : 1;
  const alvo = p.volta ? 0 : FIM;
  let pos = p.pos;
  let resta = velocidade(j, trilho, p);
  const saltadas: LanceFeito['saltadas'] = [];
  while (resta > 0 && pos !== alvo) {
    let prox = pos + dir;
    if (adversariaEm(s, j, trilho, prox) >= 0) {
      // salta todas as adversárias seguidas e para logo depois delas
      let t: number;
      while ((t = adversariaEm(s, j, trilho, prox)) >= 0) {
        saltadas.push({ trilho: t, de: s.pecas[o][t]!.pos, para: s.pecas[o][t]!.volta ? FIM : 0 });
        prox += dir;
      }
      pos = prox;
      break;
    }
    pos = prox;
    resta--;
  }
  const virou = !p.volta && pos === FIM;
  const saiu = p.volta && pos === 0;
  const minhas = s.pecas[j].map((q, k) => (k === trilho ? { pos, volta: p.volta || virou, fora: saiu } : q));
  const dele = s.pecas[o].map((q, k) => {
    const sl = saltadas.find((x) => x.trilho === k);
    return sl ? { ...q, pos: sl.para } : q;
  });
  const pecas = (j === 0 ? [minhas, dele] : [dele, minhas]) as [PecaS[], PecaS[]];
  const prontas = minhas.filter((q) => q.fora).length;
  return {
    pecas,
    turn: o,
    winner: prontas >= PARA_VENCER ? j : null,
    ultimo: { jogador: j, trilho, de: p.pos, para: pos, virou, saiu, saltadas },
  };
}

/** Quantas peças cada jogador já trouxe de volta. */
export const prontas = (s: SquadroState, j: JogadorS) => s.pecas[j].filter((q) => q.fora).length;

/** Quantos lances, no mínimo, a peça ainda precisa para terminar (sem contar saltos). */
export function lancesQueFaltam(j: JogadorS, trilho: number, p: PecaS): number {
  if (p.fora) return 0;
  const { ida, volta } = VELOCIDADES[j];
  if (p.volta) return Math.ceil(p.pos / volta[trilho]!);
  return Math.ceil((FIM - p.pos) / ida[trilho]!) + Math.ceil(FIM / volta[trilho]!);
}
