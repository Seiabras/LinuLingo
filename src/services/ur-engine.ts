/**
 * Motor do Jogo Real de Ur, na reconstrução moderna de Irving Finkel (curador do Museu Britânico),
 * feita a partir de uma tábua cuneiforme babilônica de 177 a.C., do escriba Itti-Marduk-balāṭu, e da
 * forma do tabuleiro. Regras como a Wikipédia em inglês (“Royal Game of Ur”, consultada em 15/10/2026)
 * resume a reconstrução de Finkel:
 *
 *   - tabuleiro de 20 casas: um bloco 3×4 e um 3×2 ligados por uma “ponte” de 2 casas; cada jogador
 *     tem 7 peças; as casas do seu lado são só suas (6 seguras) e as 8 do meio são de combate;
 *   - 4 dados tetraédricos com 2 pontas marcadas: anda-se o número de pontas marcadas para cima (0 a 4);
 *   - pode-se mover uma peça já no tabuleiro ou pôr uma nova; mover é obrigatório se houver lance;
 *   - parar numa peça do adversário numa casa de combate a manda de volta ao começo; uma casa só cabe
 *     uma peça; as 5 rosetas dão mais uma jogada, e a do meio protege a peça;
 *   - para sair, o número tem de ser exato; ganha quem tirar as 7 peças primeiro.
 *
 * O caminho (o mais usado nas versões de Finkel e do Museu Britânico): 4 casas na sua fileira, do meio
 * para a ponta do bloco grande; as 8 do meio, de ponta a ponta; e 2 casas na sua fileira do bloco
 * pequeno, voltando; depois, a saída. As rosetas ficam na 4ª, na 8ª (a do meio) e na 14ª casa.
 * A Wikipédia lembra que outros pesquisadores propõem caminhos e rosetas diferentes (ver a ficha).
 */
import { contaMarcados, lancarLotes, type Sorteio } from './lotes';

export type LadoUr = 0 | 1;
export const PECAS = 7;
export const SAIDA = 15;
export const ROSETAS = [4, 8, 14];
export const ROSETA_DO_MEIO = 8;
export const DADOS = 4;

/** Casa de combate (as 8 do meio, de 5 a 12, que os dois atravessam). */
export const combate = (p: number) => p >= 5 && p <= 12;

export interface UrState {
  /** a posição das 7 peças de cada lado: 0 = fora (por entrar), 1…14 no tabuleiro, 15 = saiu */
  pos: [number[], number[]];
  turn: LadoUr;
  fase: 'lancar' | 'mover';
  /** os 4 dados do último lançamento (true = ponta marcada para cima) e o número tirado */
  dados: boolean[] | null;
  tirou: number | null;
  winner: LadoUr | null;
  ultimo: { lado: LadoUr; de: number; para: number; capturou: boolean; roseta: boolean } | null;
  /** o que aconteceu com o último lançamento sem lance (para avisar) */
  passou: boolean;
  lancamentos: number;
}

export function createInitialState(): UrState {
  return { pos: [Array(PECAS).fill(0), Array(PECAS).fill(0)], turn: 0, fase: 'lancar', dados: null, tirou: null, winner: null, ultimo: null, passou: false, lancamentos: 0 };
}

export const outro = (l: LadoUr): LadoUr => (l === 0 ? 1 : 0);

/** Os lances com o número `n`: as posições de origem (uma por posição, as peças iguais contam uma vez). */
export function origensLegais(s: UrState, n: number = s.tirou ?? 0): number[] {
  if (s.winner !== null || n === 0) return [];
  const eu = s.pos[s.turn];
  const ele = s.pos[outro(s.turn)];
  const r = new Set<number>();
  for (const p of eu) {
    if (p === SAIDA || r.has(p)) continue;
    const d = p + n;
    if (d > SAIDA) continue;
    if (d < SAIDA && eu.includes(d)) continue;
    if (combate(d) && ele.includes(d) && d === ROSETA_DO_MEIO) continue;
    r.add(p);
  }
  return [...r].sort((a, b) => a - b);
}

/** Lança os dados. Sem lance (tirou 0, ou nada se move), a vez passa. */
export function lancarCom(s: UrState, dados: boolean[]): UrState {
  if (s.winner !== null || s.fase !== 'lancar') return s;
  const n = contaMarcados(dados);
  const e: UrState = { ...s, dados, tirou: n, fase: 'mover', passou: false, lancamentos: s.lancamentos + 1 };
  if (origensLegais(e).length === 0) return { ...e, fase: 'lancar', turn: outro(s.turn), passou: true };
  return e;
}
export const lancar = (s: UrState, sorteio: Sorteio = Math.random) => lancarCom(s, lancarLotes(DADOS, sorteio));

/** Move a peça que está em `de` (0 = pôr uma nova). */
export function mover(s: UrState, de: number): UrState {
  if (s.fase !== 'mover' || !origensLegais(s).includes(de)) return s;
  const n = s.tirou!;
  const para = de + n;
  const lado = s.turn;
  const pos: [number[], number[]] = [s.pos[0].slice(), s.pos[1].slice()];
  pos[lado][pos[lado].indexOf(de)] = para;
  const ele = outro(lado);
  let capturou = false;
  if (combate(para)) {
    const k = pos[ele].indexOf(para);
    if (k >= 0) {
      pos[ele][k] = 0;
      capturou = true;
    }
  }
  const roseta = ROSETAS.includes(para);
  const venceu = pos[lado].every((p) => p === SAIDA);
  return {
    ...s,
    pos,
    fase: 'lancar',
    turn: venceu || roseta ? lado : ele,
    winner: venceu ? lado : null,
    ultimo: { lado, de, para, capturou, roseta },
    passou: false,
  };
}

/**
 * A casa do tabuleiro (linha, coluna) de cada posição do caminho, na grade 3×8: o lado 0 joga na
 * fileira de baixo (linha 2) e o lado 1 na de cima (linha 0); as colunas 4 e 5 só existem no meio.
 */
export function casaDe(lado: LadoUr, p: number): { linha: number; coluna: number } | null {
  if (p <= 0 || p >= SAIDA) return null;
  const minha = lado === 0 ? 2 : 0;
  if (p <= 4) return { linha: minha, coluna: 4 - p };
  if (p <= 12) return { linha: 1, coluna: p - 5 };
  return { linha: minha, coluna: 20 - p };
}
