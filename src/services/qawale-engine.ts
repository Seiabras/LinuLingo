/**
 * Motor do Qawale (Romain Froger e Didier Lenain-Bragard, Gigamic, 2022). Regras da folha oficial
 * da Gigamic (“® & © 2022 Gigamic from a concept of Romain Froger & Didier Lenain-Bragard”, em
 * inglês e francês, consultada em 14/10/2026 em https://cdn.1j1ju.com/medias/0b/42/6b-qawale-regle.pdf):
 *
 *   - tabuleiro 4×4; 2 pedras neutras (cor de areia) empilhadas em cada canto; cada jogador tem 8
 *     pedras da sua cor; o primeiro jogador é sorteado;
 *   - na vez, o jogador põe uma pedra da sua cor em cima de uma pilha (nunca numa casa vazia; uma
 *     pedra sozinha conta como pilha), pega a pilha inteira e a espalha, uma pedra por casa, a
 *     começar pela de baixo, partindo de uma casa vizinha; cada pedra vai numa casa vizinha da
 *     anterior, sem diagonal;
 *   - não vale voltar para a casa por onde acabou de passar (ir e voltar), mas pode-se voltar a uma
 *     casa dando a volta;
 *   - vence quem primeiro tiver 4 pedras VISÍVEIS (no alto da pilha ou sozinhas) da sua cor em linha,
 *     coluna ou diagonal; uma pilha de 4 pedras da mesma cor não conta como linha;
 *   - se os dois jogarem todas as pedras sem alinhamento, empata.
 *
 * Simplificação (a regra não fala do caso): se um lance deixa alinhamentos das duas cores ao mesmo
 * tempo, vence quem jogou; se deixa só o do adversário, vence o adversário.
 */

export type JogadorQ = 0 | 1;
/** Uma pedra: 0 ou 1 são dos jogadores; 2 é a neutra. */
export type Pedra = 0 | 1 | 2;
export const NEUTRA: Pedra = 2;
export const LADO = 4;
export const PEDRAS_NA_MAO = 8;

export interface QawaleState {
  /** as 16 pilhas, de baixo para cima */
  pilhas: Pedra[][];
  mao: [number, number];
  turn: JogadorQ;
  winner: JogadorQ | 'empate' | null;
  /** as 4 casas do alinhamento vencedor */
  linha: number[];
  /** o último lance (para desenhar e animar) */
  ultimo: LanceQ | null;
}

export interface LanceQ {
  origem: number;
  /** as casas onde cada pedra cai, na ordem (tantas quantas pedras a pilha tem, já com a nova) */
  caminho: number[];
}

/** As 10 linhas de 4: 4 linhas, 4 colunas e 2 diagonais. */
export const LINHAS: number[][] = [
  ...[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => r * 4 + c)),
  ...[0, 1, 2, 3].map((c) => [0, 1, 2, 3].map((r) => r * 4 + c)),
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];

export const outroQ = (j: JogadorQ): JogadorQ => (j === 0 ? 1 : 0);

export function createInitialState(primeiro: JogadorQ = 0): QawaleState {
  const pilhas: Pedra[][] = Array.from({ length: 16 }, () => []);
  for (const c of [0, 3, 12, 15]) pilhas[c] = [NEUTRA, NEUTRA];
  return { pilhas, mao: [PEDRAS_NA_MAO, PEDRAS_NA_MAO], turn: primeiro, winner: null, linha: [], ultimo: null };
}

/** As casas vizinhas (sem diagonal). */
export function vizinhas(i: number): number[] {
  const r = Math.floor(i / 4);
  const c = i % 4;
  const v: number[] = [];
  if (r > 0) v.push(i - 4);
  if (r < 3) v.push(i + 4);
  if (c > 0) v.push(i - 1);
  if (c < 3) v.push(i + 1);
  return v;
}

/** Dá para começar o lance nesta pilha? */
export function podeEscolher(s: QawaleState, i: number): boolean {
  return s.winner === null && s.mao[s.turn] > 0 && (s.pilhas[i]?.length ?? 0) > 0;
}

/** O tamanho da pilha que será espalhada (a pilha mais a pedra nova). */
export const tamanhoDoLance = (s: QawaleState, origem: number) => s.pilhas[origem]!.length + 1;

/** Para onde pode ir a próxima pedra, dado o caminho até aqui. */
export function proximasCasas(origem: number, caminho: number[]): number[] {
  const atual = caminho.length > 0 ? caminho[caminho.length - 1]! : origem;
  const anterior = caminho.length >= 2 ? caminho[caminho.length - 2]! : caminho.length === 1 ? origem : -1;
  return vizinhas(atual).filter((v) => v !== anterior);
}

/** As pilhas depois de espalhar parte do caminho (para mostrar a semeadura passo a passo). */
export function semearParcial(s: QawaleState, origem: number, caminho: number[]): { pilhas: Pedra[][]; naMao: Pedra[] } {
  const pilhas = s.pilhas.map((p) => p.slice());
  const naMao: Pedra[] = [...pilhas[origem]!, s.turn];
  pilhas[origem] = [];
  for (const casa of caminho) pilhas[casa]!.push(naMao.shift()!);
  return { pilhas, naMao };
}

/** O caminho é válido: tamanho certo, cada passo vizinho e sem ir e voltar. */
export function caminhoValido(s: QawaleState, l: LanceQ): boolean {
  if (!podeEscolher(s, l.origem) || l.caminho.length !== tamanhoDoLance(s, l.origem)) return false;
  for (let k = 0; k < l.caminho.length; k++) if (!proximasCasas(l.origem, l.caminho.slice(0, k)).includes(l.caminho[k]!)) return false;
  return true;
}

/** A cor visível de cada casa (a pedra de cima), ou null se vazia. */
export const topos = (pilhas: Pedra[][]): (Pedra | null)[] => pilhas.map((p) => (p.length ? p[p.length - 1]! : null));

/** O primeiro alinhamento de 4 da cor `j` visível, ou null. */
export function alinhamento(pilhas: Pedra[][], j: JogadorQ): number[] | null {
  const t = topos(pilhas);
  return LINHAS.find((l) => l.every((i) => t[i] === j)) ?? null;
}

/** Joga o lance inteiro. Lance inválido devolve o mesmo estado. */
export function jogar(s: QawaleState, l: LanceQ): QawaleState {
  if (!caminhoValido(s, l)) return s;
  const { pilhas } = semearParcial(s, l.origem, l.caminho);
  const j = s.turn;
  const mao: [number, number] = j === 0 ? [s.mao[0] - 1, s.mao[1]] : [s.mao[0], s.mao[1] - 1];
  const meu = alinhamento(pilhas, j);
  const dele = alinhamento(pilhas, outroQ(j));
  let winner: QawaleState['winner'] = null;
  let linha: number[] = [];
  if (meu) {
    winner = j;
    linha = meu;
  } else if (dele) {
    winner = outroQ(j);
    linha = dele;
  } else if (mao[0] === 0 && mao[1] === 0) winner = 'empate';
  return { pilhas, mao, turn: outroQ(j), winner, linha, ultimo: { origem: l.origem, caminho: l.caminho.slice() } };
}

/**
 * Os lances possíveis, um por resultado diferente (caminhos que deixam o tabuleiro igual contam uma
 * vez só). A pilha pode crescer muito e o número de caminhos explode (4 × 3 elevado ao tamanho − 1):
 * acima de `limite` caminhos por pilha, sorteia `limite` caminhos com `rng`.
 */
export function lancesQawale(s: QawaleState, limite = 3000, rng: () => number = Math.random): LanceQ[] {
  if (s.winner !== null || s.mao[s.turn] === 0) return [];
  const vistos = new Set<string>();
  const r: LanceQ[] = [];
  const guardar = (origem: number, caminho: number[]) => {
    const { pilhas } = semearParcial(s, origem, caminho);
    const k = pilhas.map((p) => p.join('')).join('|');
    if (vistos.has(k)) return;
    vistos.add(k);
    r.push({ origem, caminho });
  };
  for (let origem = 0; origem < 16; origem++) {
    if (!podeEscolher(s, origem)) continue;
    const n = tamanhoDoLance(s, origem);
    const total = 4 * 3 ** (n - 1);
    if (total <= limite) {
      const dfs = (caminho: number[]) => {
        if (caminho.length === n) return guardar(origem, caminho);
        for (const v of proximasCasas(origem, caminho)) dfs([...caminho, v]);
      };
      dfs([]);
    } else {
      for (let k = 0; k < limite; k++) {
        const caminho: number[] = [];
        while (caminho.length < n) {
          const op = proximasCasas(origem, caminho);
          caminho.push(op[Math.floor(rng() * op.length)]!);
        }
        guardar(origem, caminho);
      }
    }
  }
  return r;
}
