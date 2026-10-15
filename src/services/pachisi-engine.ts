/**
 * Motor do pachisi, a dois, cada jogador com duas cores opostas, como manda a regra tradicional das
 * duplas. Fonte única das regras: “The Rules of Pachisi & Chaupur”, Masters Traditional Games
 * (mastersofgames.com, cópia de 07/10/2026 no web.archive.org, lida em 15/10/2026), conferida com a
 * Wikipédia em inglês (“Pachisi”) e a Britannica. Em resumo:
 *
 *   - tabuleiro em cruz; cada braço tem 3 colunas de 8 casas; o meio é o Charkoni, de onde as peças
 *     saem e para onde voltam; 12 casas são castelos (a do meio, na ponta de cada braço, e a 4ª a
 *     partir da ponta nas duas colunas de fora), onde ninguém é capturado;
 *   - 4 cores, 4 peças cada; Amarelo e Preto contra Vermelho e Verde; a dois, cada um joga uma dupla;
 *     as vezes correm no sentido anti-horário (Amarelo, Vermelho, Preto, Verde);
 *   - 6 búzios: 2 a 5 bocas para cima valem 2 a 5; 6 bocas valem 6, uma boca vale 10 e nenhuma vale 25,
 *     e esses três (a “graça”) dão outro lançamento;
 *   - a peça desce pela coluna do meio do seu braço, dá a volta no tabuleiro no sentido anti-horário
 *     pelas colunas de fora e sobe de novo a coluna do meio até o Charkoni, com o número exato;
 *   - a primeira peça de cada cor sai com qualquer número; as outras (e as capturadas) só com uma graça;
 *   - peças do mesmo lado podem dividir a casa; não se para num castelo com peça do adversário; parar
 *     numa casa comum com peças do adversário as captura (voltam ao Charkoni) e dá outro lançamento;
 *   - mover não é obrigatório; ganha a dupla que levar as 8 peças para casa.
 *
 * Simplificações do app (ditas na ficha): os búzios caem meio a meio (de verdade não caem); cada
 * lançamento é usado logo, peça por peça; e há uma opção de partida curta, com 2 peças por cor.
 */
import { contaMarcados, lancarLotes, type Sorteio } from './lotes';

export type Cor = 0 | 1 | 2 | 3; // 0 Amarelo (sul), 1 Vermelho (leste), 2 Preto (norte), 3 Verde (oeste)
export type Jogador = 0 | 1;
export const BUZIOS = 6;
export const CASA = 83; // o índice do Charkoni, na chegada
export const NO_CHARKONI = -1;
export const NOMES_COR = ['Amarelo', 'Vermelho', 'Preto', 'Verde'] as const;

export const jogadorDa = (c: Cor): Jogador => (c % 2) as Jogador;
/** valor e graça de um lançamento: quantas bocas para cima */
export function valorDosBuzios(bocas: number): { valor: number; graca: boolean } {
  if (bocas === 0) return { valor: 25, graca: true };
  if (bocas === 1) return { valor: 10, graca: true };
  if (bocas === 6) return { valor: 6, graca: true };
  return { valor: bocas, graca: false };
}

// ── O caminho: o do Amarelo (braço de baixo) na grade 19×19, girado para as outras cores ─────────────
type Celula = [number, number];
const CAMINHO_SUL: Celula[] = (() => {
  const c: Celula[] = [];
  for (let r = 11; r <= 18; r++) c.push([r, 9]); // desce pelo meio do braço
  for (let r = 18; r >= 11; r--) c.push([r, 10]); // sobe a coluna da direita
  for (let k = 11; k <= 18; k++) c.push([10, k]); // braço leste, fileira de baixo, para fora
  c.push([9, 18]);
  for (let k = 18; k >= 11; k--) c.push([8, k]); // fileira de cima, para dentro
  for (let r = 7; r >= 0; r--) c.push([r, 10]); // braço norte, coluna da direita, para fora
  c.push([0, 9]);
  for (let r = 0; r <= 7; r++) c.push([r, 8]); // coluna da esquerda, para dentro
  for (let k = 7; k >= 0; k--) c.push([8, k]); // braço oeste, fileira de cima, para fora
  c.push([9, 0]);
  for (let k = 0; k <= 7; k++) c.push([10, k]); // fileira de baixo, para dentro
  for (let r = 11; r <= 18; r++) c.push([r, 8]); // braço sul, coluna da esquerda, para fora
  for (let r = 18; r >= 11; r--) c.push([r, 9]); // e sobe pelo meio até o Charkoni
  return c;
})();
/** gira 90° no sentido anti-horário da tela (o braço sul vira o leste) */
const girar = ([r, k]: Celula): Celula => [18 - k, r];
export const CAMINHOS: Celula[][] = [0, 1, 2, 3].map((n) => CAMINHO_SUL.map((cel) => {
  let x = cel;
  for (let i = 0; i < n; i++) x = girar(x);
  return x;
}));
export const chave = (cel: Celula) => cel[0] * 19 + cel[1];
const CASTELOS_SUL: Celula[] = [
  [18, 9],
  [15, 8],
  [15, 10],
];
export const CASTELOS = new Set<number>(
  [0, 1, 2, 3].flatMap((n) =>
    CASTELOS_SUL.map((cel) => {
      let x = cel;
      for (let i = 0; i < n; i++) x = girar(x);
      return chave(x);
    }),
  ),
);

export interface PachisiState {
  /** a posição das peças de cada cor: −1 no Charkoni (por sair), 0…82 no caminho, 83 em casa */
  pos: number[][];
  /** se já saiu alguma peça de cada cor (a primeira sai com qualquer número) */
  saiu: boolean[];
  turn: Cor;
  fase: 'lancar' | 'mover';
  buzios: boolean[] | null;
  valor: number | null;
  graca: boolean;
  winner: Jogador | null;
  ultimo: { cor: Cor; de: number; para: number; capturadas: { cor: Cor; para: number }[] } | null;
  /** a vez passou sem mover (por escolha ou por não haver lance) */
  passou: boolean;
  lancamentos: number;
  pecas: number;
}

export function createInitialState(pecas = 4): PachisiState {
  return { pos: [0, 1, 2, 3].map(() => Array(pecas).fill(NO_CHARKONI)), saiu: [false, false, false, false], turn: 0, fase: 'lancar', buzios: null, valor: null, graca: false, winner: null, ultimo: null, passou: false, lancamentos: 0, pecas };
}

const celulaDe = (cor: Cor, p: number) => (p >= 0 && p < CASA ? chave(CAMINHOS[cor]![p]!) : null);
const inimigas = (cor: Cor): Cor[] => (jogadorDa(cor) === 0 ? [1, 3] : [0, 2]);

/** As peças inimigas na célula `k` (cor e índice). */
function inimigasNa(s: PachisiState, cor: Cor, k: number): { cor: Cor; i: number }[] {
  const r: { cor: Cor; i: number }[] = [];
  for (const c of inimigas(cor)) s.pos[c]!.forEach((p, i) => celulaDe(c, p) === k && r.push({ cor: c, i }));
  return r;
}

/** Para onde vai a peça na posição `p` da cor da vez (null = não pode). */
export function destino(s: PachisiState, p: number, valor: number = s.valor ?? 0): number | null {
  const cor = s.turn;
  if (p === CASA) return null;
  let d: number;
  if (p === NO_CHARKONI) {
    // a primeira peça sai com qualquer número; as outras, só com graça
    if (s.saiu[cor] && !s.graca) return null;
    d = valor - 1;
  } else d = p + valor;
  if (d > CASA) return null;
  if (d === CASA) return d;
  const k = celulaDe(cor, d)!;
  if (CASTELOS.has(k) && inimigasNa(s, cor, k).length > 0) return null;
  return d;
}

/** As posições de onde a cor da vez pode andar (uma por posição). */
export function origensLegais(s: PachisiState): number[] {
  if (s.winner !== null || s.fase !== 'mover') return [];
  const r = new Set<number>();
  for (const p of s.pos[s.turn]!) if (!r.has(p) && destino(s, p) !== null) r.add(p);
  return [...r].sort((a, b) => a - b);
}

const proxima = (c: Cor): Cor => ((c + 1) % 4) as Cor;

export function lancarCom(s: PachisiState, buzios: boolean[]): PachisiState {
  if (s.winner !== null || s.fase !== 'lancar') return s;
  const { valor, graca } = valorDosBuzios(contaMarcados(buzios));
  const e: PachisiState = { ...s, buzios, valor, graca, fase: 'mover', passou: false, lancamentos: s.lancamentos + 1 };
  // sem lance: com graça, lança de novo; sem graça, a vez passa
  if (origensLegais(e).length === 0) return { ...e, fase: 'lancar', turn: graca ? s.turn : proxima(s.turn), passou: true };
  return e;
}
export const lancar = (s: PachisiState, sorteio: Sorteio = Math.random) => lancarCom(s, lancarLotes(BUZIOS, sorteio));

/** Não mover (mover não é obrigatório): com graça lança de novo; senão a vez passa. */
export function naoMover(s: PachisiState): PachisiState {
  if (s.fase !== 'mover' || s.winner !== null) return s;
  return { ...s, fase: 'lancar', turn: s.graca ? s.turn : proxima(s.turn), passou: true };
}

export function mover(s: PachisiState, p: number): PachisiState {
  const d = s.fase === 'mover' ? destino(s, p) : null;
  if (d === null) return s;
  const cor = s.turn;
  const pos = s.pos.map((x) => x.slice());
  pos[cor]![pos[cor]!.indexOf(p)] = d;
  const saiu = s.saiu.slice();
  if (p === NO_CHARKONI) saiu[cor] = true;
  const capturadas: { cor: Cor; para: number }[] = [];
  if (d < CASA) {
    const k = celulaDe(cor, d)!;
    if (!CASTELOS.has(k))
      for (const { cor: c, i } of inimigasNa({ ...s, pos }, cor, k)) {
        capturadas.push({ cor: c, para: pos[c]![i]! });
        pos[c]![i] = NO_CHARKONI;
      }
  }
  const jogador = jogadorDa(cor);
  const venceu = [0, 1, 2, 3].filter((c) => jogadorDa(c as Cor) === jogador).every((c) => pos[c]!.every((x) => x === CASA));
  const deNovo = s.graca || capturadas.length > 0;
  return {
    ...s,
    pos,
    saiu,
    fase: 'lancar',
    turn: venceu || deNovo ? cor : proxima(cor),
    winner: venceu ? jogador : null,
    ultimo: { cor, de: p, para: d, capturadas },
    passou: false,
  };
}

/** A célula (linha, coluna) da posição `p` da cor (null no Charkoni ou em casa). */
export function celula(cor: Cor, p: number): Celula | null {
  return p >= 0 && p < CASA ? CAMINHOS[cor]![p]! : null;
}
export const ehCastelo = (cel: Celula) => CASTELOS.has(chave(cel));
