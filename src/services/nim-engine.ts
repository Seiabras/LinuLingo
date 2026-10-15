/**
 * Motor do Nim. Fontes em `data/jogos-conhecimento.ts` (Bouton, 1901; Wikipédia, “Nim”).
 *
 * Várias pilhas de palitos. Na vez, tira-se quantos palitos quiser (pelo menos 1) de UMA pilha só.
 * Na versão normal, quem tira o último palito ganha; na “misère”, quem tira o último perde.
 *
 * A teoria (Bouton): escreva o tamanho de cada pilha em binário e some sem “vai um” (o XOR): é a
 * soma nim. Na versão normal, quem deixa a soma nim igual a zero ganha, jogando certo. Na misère, é
 * igual até o fim, com uma diferença: quando o lance certo deixaria só pilhas de 1 palito, deixa-se
 * um número ÍMPAR de pilhas de 1.
 */
export type JogadorN = 0 | 1;

export interface LanceN {
  pilha: number;
  quantos: number;
}

export interface NimState {
  pilhas: number[];
  /** o tamanho de cada pilha no começo (para desenhar) */
  inicio: number[];
  vez: JogadorN;
  misere: boolean;
  vencedor: JogadorN | null;
  ultimo: (LanceN & { quem: JogadorN }) | null;
}

export const PILHAS_PRONTAS: { id: string; nome: string; pilhas: number[]; nota: string }[] = [
  { id: '345', nome: '3-4-5', pilhas: [3, 4, 5], nota: 'A mais comum para começar.' },
  { id: 'marienbad', nome: '1-3-5-7', pilhas: [1, 3, 5, 7], nota: 'A do filme “O Ano Passado em Marienbad” (1961).' },
  { id: '357', nome: '3-5-7', pilhas: [3, 5, 7], nota: 'Três pilhas, mais palitos.' },
];

export const MAX_PILHAS = 6;
export const MAX_PALITOS = 9;

export function createInitialState(pilhas: number[] = [3, 4, 5], misere = false, comeca: JogadorN = 0): NimState {
  const p = pilhas.map((n) => Math.max(1, Math.min(MAX_PALITOS, Math.floor(n)))).slice(0, MAX_PILHAS);
  return { pilhas: p, inicio: [...p], vez: comeca, misere, vencedor: null, ultimo: null };
}

export const somaNim = (pilhas: number[]) => pilhas.reduce((a, b) => a ^ b, 0);

export function lancesLegais(s: NimState): LanceN[] {
  if (s.vencedor !== null) return [];
  const out: LanceN[] = [];
  s.pilhas.forEach((n, pilha) => {
    for (let q = 1; q <= n; q++) out.push({ pilha, quantos: q });
  });
  return out;
}

export function jogar(s: NimState, l: LanceN): NimState {
  if (s.vencedor !== null) return s;
  const n = s.pilhas[l.pilha];
  if (n === undefined || !Number.isInteger(l.quantos) || l.quantos < 1 || l.quantos > n) return s;
  const pilhas = [...s.pilhas];
  pilhas[l.pilha] = n - l.quantos;
  const acabou = pilhas.every((x) => x === 0);
  const outro: JogadorN = s.vez === 0 ? 1 : 0;
  // quem tirou o último: ganha na normal, perde na misère
  const vencedor = acabou ? (s.misere ? outro : s.vez) : null;
  return { ...s, pilhas, vez: outro, vencedor, ultimo: { ...l, quem: s.vez } };
}

/**
 * O lance perfeito, se existe um que ganha; senão null (a posição está perdida contra quem joga
 * certo).
 */
export function lanceVencedor(pilhas: number[], misere: boolean): LanceN | null {
  const grandes = pilhas.filter((n) => n > 1).length;
  if (misere && grandes === 0) {
    // só pilhas de 1: ganha quem deixa um número ímpar delas
    const uns = pilhas.filter((n) => n === 1).length;
    if (uns % 2 === 0) {
      const k = pilhas.indexOf(1);
      return k >= 0 ? { pilha: k, quantos: 1 } : null;
    }
    return null;
  }
  if (misere && grandes === 1) {
    // o lance mexe na única pilha grande: deixe 0 ou 1 nela, para sobrar um número ímpar de pilhas de 1
    const k = pilhas.findIndex((n) => n > 1);
    const uns = pilhas.filter((n) => n === 1).length;
    const fica = uns % 2 === 0 ? 1 : 0;
    return { pilha: k, quantos: pilhas[k]! - fica };
  }
  const x = somaNim(pilhas);
  if (x === 0) return null;
  for (let k = 0; k < pilhas.length; k++) {
    const alvo = pilhas[k]! ^ x;
    if (alvo < pilhas[k]!) return { pilha: k, quantos: pilhas[k]! - alvo };
  }
  return null;
}

/** O tamanho em binário, com `bits` algarismos. */
export const emBinario = (n: number, bits: number) => n.toString(2).padStart(bits, '0');
export const bitsPara = (pilhas: number[]) => Math.max(1, ...pilhas.map((n) => n.toString(2).length));
