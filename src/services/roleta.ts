/**
 * A roleta europeia (um zero), sem tela: a roda, as apostas, a chance de cada uma e o resultado.
 * Pura e com a aleatoriedade injetável (`rng`). Fontes no comentário de `data/outros-jogos/azar.ts`.
 * Só fichas de mentira: nada aqui vale dinheiro nem prêmio.
 */

/** A ordem das casas na roda europeia, no sentido horário, a partir do zero. */
export const ORDEM_RODA = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

export const VERMELHOS = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);

export const CASAS = 37;

export type CorCasa = 'verde' | 'vermelho' | 'preto';
export const corDe = (n: number): CorCasa => (n === 0 ? 'verde' : VERMELHOS.has(n) ? 'vermelho' : 'preto');

export interface TipoAposta {
  id: string;
  nome: string;
  numeros: number[];
  /** paga X por 1 (além de devolver a ficha apostada) */
  paga: number;
}

const faixa = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
const UM_A_36 = faixa(1, 36);

export const APOSTAS_FORA: TipoAposta[] = [
  { id: 'vermelho', nome: 'Vermelho', numeros: UM_A_36.filter((n) => VERMELHOS.has(n)), paga: 1 },
  { id: 'preto', nome: 'Preto', numeros: UM_A_36.filter((n) => !VERMELHOS.has(n)), paga: 1 },
  { id: 'par', nome: 'Par', numeros: UM_A_36.filter((n) => n % 2 === 0), paga: 1 },
  { id: 'impar', nome: 'Ímpar', numeros: UM_A_36.filter((n) => n % 2 === 1), paga: 1 },
  { id: 'baixo', nome: '1 a 18', numeros: faixa(1, 18), paga: 1 },
  { id: 'alto', nome: '19 a 36', numeros: faixa(19, 36), paga: 1 },
  { id: 'duzia1', nome: '1ª dúzia', numeros: faixa(1, 12), paga: 2 },
  { id: 'duzia2', nome: '2ª dúzia', numeros: faixa(13, 24), paga: 2 },
  { id: 'duzia3', nome: '3ª dúzia', numeros: faixa(25, 36), paga: 2 },
];

/** Aposta num número só (o “pleno”): paga 35 por 1. */
export const pleno = (n: number): TipoAposta => ({ id: `n${n}`, nome: `Número ${n}`, numeros: [n], paga: 35 });

export function tipoDeAposta(id: string): TipoAposta | undefined {
  if (/^n\d+$/.test(id)) {
    const n = Number(id.slice(1));
    return n >= 0 && n <= 36 ? pleno(n) : undefined;
  }
  return APOSTAS_FORA.find((a) => a.id === id);
}

/** A chance de ganhar a aposta: casas cobertas ÷ 37. */
export const chanceDe = (a: TipoAposta) => a.numeros.length / CASAS;

/** O que se espera ganhar (negativo: perder), em média, por ficha apostada: −1/37 em toda aposta. */
export const esperadoPorFicha = (a: TipoAposta) => chanceDe(a) * (a.paga + 1) - 1;

/** A vantagem da casa na roda de um zero: 1/37 ≈ 2,7%. */
export const VANTAGEM_CASA = 1 / CASAS;

export type Apostas = Record<string, number>;

export const totalApostado = (ap: Apostas) => Object.values(ap).reduce((s, v) => s + v, 0);

/** Sorteia a casa onde a bolinha para (todas com a mesma chance). */
export const sortear = (rng: () => number) => Math.min(CASAS - 1, Math.floor(rng() * CASAS));

/** Quanto volta para o jogador quando sai `n`: a ficha apostada mais o prêmio, nas apostas certas. */
export function retorno(ap: Apostas, n: number): number {
  let r = 0;
  for (const [id, v] of Object.entries(ap)) {
    const t = tipoDeAposta(id);
    if (t && t.numeros.includes(n)) r += v * (t.paga + 1);
  }
  return r;
}

/** O saldo esperado depois de apostar `apostado` fichas no total: perde-se 1/37 do apostado, em média. */
export const saldoEsperado = (inicial: number, apostadoAcumulado: number) => inicial - apostadoAcumulado * VANTAGEM_CASA;

/** Formata uma chance como “18 em 37 (48,6%)”. */
export function textoChance(a: TipoAposta): string {
  const p = (chanceDe(a) * 100).toFixed(1).replace('.', ',');
  return `${a.numeros.length} em ${CASAS} (${p}%)`;
}
