/**
 * Motor do yut nori (윷놀이), a dois, com 4 peças (mal) para cada lado. Fontes: o Ministério da Cultura,
 * Esportes e Turismo da Coreia (página infantil “윷놀이”, mcst.go.kr, que cita o 한국세시풍속사전 do
 * Museu Folclórico Nacional e o 한국민족문화대백과), e a Wikipédia em inglês (“Yutnori”), ambas
 * consultadas em 15/10/2026:
 *
 *   - 4 varetas (yut) com um lado chato e um redondo; conta-se quantas caem com o lado chato para cima:
 *     1 = do (anda 1), 2 = gae (2), 3 = geol (3), 4 = yut (4) e nenhuma = mo (5);
 *   - yut e mo dão outro lançamento; cada resultado é usado inteiro numa peça;
 *   - o tabuleiro tem 29 casas: 20 em volta e 9 nas duas diagonais, que se cruzam no meio;
 *   - parando num canto (ou no meio), a peça pode cortar caminho pela diagonal; o caminho comum é o
 *     de volta inteira;
 *   - parar numa casa com peças suas as junta (업기), e elas andam juntas; parar numa casa com peças do
 *     adversário as captura (voltam para o começo) e dá outro lançamento;
 *   - a peça sai passando do 참먹이 (a última casa): parar exatamente nele não basta;
 *   - ganha quem tirar as 4 peças primeiro.
 *
 * As varetas caem meio a meio aqui (de verdade, não); e as variantes regionais (o 빽도, que anda para
 * trás; casas especiais) ficam como variantes na ficha, sem estar no tabuleiro jogável.
 */
import { contaMarcados, lancarLotes, type Sorteio } from './lotes';

export type LadoY = 0 | 1;
export const PECAS = 4;
export const FORA = -1;
export const SAIU = 29;
export const VARETAS = 4;
export const NOMES_LANCE: Record<number, string> = { 1: 'do', 2: 'gae', 3: 'geol', 4: 'yut', 5: 'mo' };

/** As casas: 0…19 em volta (0 = 참먹이, no canto de baixo à direita; 5, 10 e 15 são os outros cantos), e as diagonais. */
export const A1 = 20;
export const A2 = 21;
export const MEIO = 22;
export const A3 = 23;
export const A4 = 24;
export const B1 = 25;
export const B2 = 26;
export const B3 = 27;
export const B4 = 28;

export type Rota = 'fora' | 'A' | 'B';
const VOLTA = [...Array.from({ length: 19 }, (_, k) => k + 1), 0, SAIU];
const ROTA_A = [A1, A2, MEIO, A3, A4, 15, 16, 17, 18, 19, 0, SAIU];
const ROTA_B = [B1, B2, MEIO, B3, B4, 0, SAIU];
const ROTAS: Record<Rota, number[]> = { fora: VOLTA, A: ROTA_A, B: ROTA_B };

/** A posição na tela de cada casa, numa grade de 0 a 5 (x = coluna, y = linha). */
export const COORD: { x: number; y: number }[] = (() => {
  const c: { x: number; y: number }[] = [];
  for (let k = 0; k <= 5; k++) c[k] = { x: 5, y: 5 - k }; // 0…5: lado direito, subindo
  for (let k = 6; k <= 10; k++) c[k] = { x: 10 - k, y: 0 }; // 6…10: em cima, para a esquerda
  for (let k = 11; k <= 15; k++) c[k] = { x: 0, y: k - 10 }; // 11…15: lado esquerdo, descendo
  for (let k = 16; k <= 19; k++) c[k] = { x: k - 15, y: 5 }; // 16…19: embaixo, para a direita
  const t = 5 / 6;
  c[A1] = { x: 5 - t, y: t };
  c[A2] = { x: 5 - 2 * t, y: 2 * t };
  c[MEIO] = { x: 2.5, y: 2.5 };
  c[A3] = { x: 2 * t, y: 5 - 2 * t };
  c[A4] = { x: t, y: 5 - t };
  c[B1] = { x: t, y: t };
  c[B2] = { x: 2 * t, y: 2 * t };
  c[B3] = { x: 5 - 2 * t, y: 5 - 2 * t };
  c[B4] = { x: 5 - t, y: 5 - t };
  return c;
})();

export interface Mal {
  casa: number;
  rota: Rota;
}

export interface YutState {
  mal: [Mal[], Mal[]];
  turn: LadoY;
  fase: 'lancar' | 'mover';
  /** os resultados lançados e ainda não usados nesta vez */
  pendentes: number[];
  varetas: boolean[] | null;
  winner: LadoY | null;
  ultimo: { lado: LadoY; de: number; para: number; caminho: number[]; capturou: boolean; juntou: boolean } | null;
  lancamentos: number;
}

export function createInitialState(): YutState {
  const lado = () => Array.from({ length: PECAS }, () => ({ casa: FORA, rota: 'fora' as Rota }));
  return { mal: [lado(), lado()], turn: 0, fase: 'lancar', pendentes: [], varetas: null, winner: null, ultimo: null, lancamentos: 0 };
}

export const outro = (l: LadoY): LadoY => (l === 0 ? 1 : 0);
/** Quantas varetas com o lado chato para cima → o resultado (nenhuma = mo, 5). */
export const resultadoDas = (v: boolean[]) => contaMarcados(v) || 5;

/** Os caminhos possíveis a partir de uma peça: o comum e, nos cantos e no meio, o atalho. */
export function caminhos(m: Mal): { rota: Rota; passos: number[] }[] {
  if (m.casa === FORA) return [{ rota: 'fora', passos: VOLTA }];
  if (m.casa === SAIU) return [];
  const resto = (r: Rota, de: number) => {
    const seq = ROTAS[r];
    return seq.slice(seq.indexOf(de) + 1);
  };
  const r: { rota: Rota; passos: number[] }[] = [{ rota: m.rota, passos: resto(m.rota, m.casa) }];
  if (m.rota === 'fora' && m.casa === 5) r.unshift({ rota: 'A', passos: ROTA_A });
  if (m.rota === 'fora' && m.casa === 10) r.unshift({ rota: 'B', passos: ROTA_B });
  if (m.rota === 'A' && m.casa === MEIO) r.unshift({ rota: 'B', passos: resto('B', MEIO) });
  return r;
}

export interface LanceYut {
  /** a casa de onde sai (FORA = entrar com uma peça nova) */
  de: number;
  /** qual dos resultados pendentes usa (o valor) */
  valor: number;
  /** o caminho escolhido */
  rota: Rota;
}

/** Para onde vai a peça (a última casa do trecho andado). */
function andar(passos: number[], n: number): { para: number; caminho: number[] } {
  const caminho = passos.slice(0, n);
  const para = n > passos.length ? SAIU : caminho[caminho.length - 1]!;
  return { para, caminho };
}

export function lancesLegais(s: YutState): LanceYut[] {
  if (s.winner !== null || s.fase !== 'mover') return [];
  const r: LanceYut[] = [];
  const vistos = new Set<string>();
  for (const valor of new Set(s.pendentes))
    for (const m of s.mal[s.turn]) {
      if (m.casa === SAIU) continue;
      for (const c of caminhos(m)) {
        const k = `${m.casa}-${m.rota}-${valor}-${c.rota}`;
        if (vistos.has(k)) continue;
        vistos.add(k);
        r.push({ de: m.casa, valor, rota: c.rota });
      }
    }
  return r;
}

/** O destino de um lance (para o tabuleiro marcar). */
export function destinoDe(s: YutState, l: LanceYut): number {
  const m = s.mal[s.turn].find((x) => x.casa === l.de)!;
  const c = caminhos(m).find((x) => x.rota === l.rota)!;
  return andar(c.passos, l.valor).para;
}

export function lancarCom(s: YutState, varetas: boolean[]): YutState {
  if (s.winner !== null || s.fase !== 'lancar') return s;
  const n = resultadoDas(varetas);
  const pendentes = [...s.pendentes, n];
  // yut e mo: lança de novo
  return { ...s, varetas, pendentes, fase: n >= 4 ? 'lancar' : 'mover', lancamentos: s.lancamentos + 1 };
}
export const lancar = (s: YutState, sorteio: Sorteio = Math.random) => lancarCom(s, lancarLotes(VARETAS, sorteio));

export function jogar(s: YutState, l: LanceYut): YutState {
  if (s.fase !== 'mover' || !lancesLegais(s).some((x) => x.de === l.de && x.valor === l.valor && x.rota === l.rota)) return s;
  const lado = s.turn;
  const m = s.mal[lado].find((x) => x.casa === l.de)!;
  const c = caminhos(m).find((x) => x.rota === l.rota)!;
  const { para, caminho } = andar(c.passos, l.valor);
  const mal: [Mal[], Mal[]] = [s.mal[0].map((x) => ({ ...x })), s.mal[1].map((x) => ({ ...x }))];
  // anda a peça e as que estão juntas com ela (uma só, se vier de fora)
  const grupo = l.de === FORA ? [mal[lado].findIndex((x) => x.casa === FORA)] : mal[lado].flatMap((x, i) => (x.casa === l.de ? [i] : []));
  const juntou = para !== SAIU && mal[lado].some((x) => x.casa === para);
  for (const i of grupo) mal[lado][i] = { casa: para, rota: l.rota };
  // captura: as peças do adversário naquela casa voltam para fora
  let capturou = false;
  if (para !== SAIU)
    mal[outro(lado)].forEach((x, i) => {
      if (x.casa === para) {
        mal[outro(lado)][i] = { casa: FORA, rota: 'fora' };
        capturou = true;
      }
    });
  const pendentes = s.pendentes.slice();
  pendentes.splice(pendentes.indexOf(l.valor), 1);
  const venceu = mal[lado].every((x) => x.casa === SAIU);
  const base: YutState = { ...s, mal, pendentes, ultimo: { lado, de: l.de, para, caminho, capturou, juntou } };
  if (venceu) return { ...base, winner: lado, fase: 'lancar' };
  // captura: lança de novo (guardando o que sobrou); sem pendentes, a vez passa
  if (capturou) return { ...base, fase: 'lancar' };
  if (pendentes.length > 0) return { ...base, fase: 'mover' };
  return { ...base, fase: 'lancar', turn: outro(lado) };
}

/** Quantas casas faltam para a peça sair, pelo caminho mais curto a partir de onde está. */
export function falta(m: Mal): number {
  if (m.casa === SAIU) return 0;
  return Math.min(...caminhos(m).map((c) => c.passos.length));
}
