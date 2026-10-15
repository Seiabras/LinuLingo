/**
 * A roleta europeia (um zero), sem tela: a roda, as apostas, a chance de cada uma e o resultado.
 * Pura e com a aleatoriedade injetável (`rng`). Fontes no comentário de `data/outros-jogos/azar.ts`.
 * Só fichas de mentira: nada aqui vale dinheiro nem prêmio.
 */

/** A ordem das casas na roda europeia, no sentido horário, a partir do zero. */
export const ORDEM_RODA = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

/**
 * As variantes (Wikipédia em inglês, “Roulette”, consultada em 14/10/2026): a roda americana, com o 0
 * e o 00 (aqui o 00 é o número 37), e a francesa com “la partage”, em que o 0 devolve metade das
 * apostas simples (vermelho/preto, par/ímpar, baixo/alto).
 */
export type TipoRoda = 'europeia' | 'americana' | 'partage';

/** O 00 da roda americana. */
export const DUPLO_ZERO = 37;

/** A ordem das casas na roda americana, no sentido horário, a partir do zero. */
export const ORDEM_AMERICANA = [0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 34, 15, 3, 24, 36, 13, 1, DUPLO_ZERO, 27, 10, 25, 29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 35, 14, 2];

export const ordemDa = (tipo: TipoRoda = 'europeia') => (tipo === 'americana' ? ORDEM_AMERICANA : ORDEM_RODA);
export const casasDa = (tipo: TipoRoda = 'europeia') => ordemDa(tipo).length;
/** Como escrever o número da casa (o 37 é o 00). */
export const rotuloCasa = (n: number) => (n === DUPLO_ZERO ? '00' : String(n));

export const VERMELHOS = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]);

export const CASAS = 37;

export type CorCasa = 'verde' | 'vermelho' | 'preto';
export const corDe = (n: number): CorCasa => (n === 0 || n === DUPLO_ZERO ? 'verde' : VERMELHOS.has(n) ? 'vermelho' : 'preto');

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
    return n >= 0 && n <= DUPLO_ZERO ? pleno(n) : undefined;
  }
  return APOSTAS_FORA.find((a) => a.id === id);
}

/** As apostas simples (pagam 1 por 1): as que o “la partage” protege. */
export const SIMPLES = new Set(['vermelho', 'preto', 'par', 'impar', 'baixo', 'alto']);

/** A chance de ganhar a aposta: casas cobertas ÷ casas da roda (37, ou 38 na americana). */
export const chanceDe = (a: TipoAposta, tipo: TipoRoda = 'europeia') => a.numeros.length / casasDa(tipo);

/**
 * O que se espera ganhar (negativo: perder), em média, por ficha apostada: −1/37 na europeia, −2/38
 * na americana; no “la partage”, as apostas simples perdem só −1/74 (o 0 devolve metade).
 */
export const esperadoPorFicha = (a: TipoAposta, tipo: TipoRoda = 'europeia') =>
  chanceDe(a, tipo) * (a.paga + 1) - 1 + (tipo === 'partage' && SIMPLES.has(a.id) ? 0.5 / CASAS : 0);

/** A vantagem da casa na roda de um zero: 1/37 ≈ 2,7%. */
export const VANTAGEM_CASA = 1 / CASAS;

export type Apostas = Record<string, number>;

export const totalApostado = (ap: Apostas) => Object.values(ap).reduce((s, v) => s + v, 0);

/** Sorteia a casa onde a bolinha para (todas com a mesma chance). */
export const sortear = (rng: () => number, tipo: TipoRoda = 'europeia') => {
  const ordem = ordemDa(tipo);
  return ordem[Math.min(ordem.length - 1, Math.floor(rng() * ordem.length))]!;
};

/** Quanto volta para o jogador quando sai `n`: a ficha apostada mais o prêmio, nas apostas certas. */
export function retorno(ap: Apostas, n: number, tipo: TipoRoda = 'europeia'): number {
  let r = 0;
  for (const [id, v] of Object.entries(ap)) {
    const t = tipoDeAposta(id);
    if (t && t.numeros.includes(n)) r += v * (t.paga + 1);
    // la partage: saiu o 0, a aposta simples volta pela metade
    else if (tipo === 'partage' && n === 0 && SIMPLES.has(id)) r += v / 2;
  }
  return r;
}

/** Quanto se espera perder, em média, numa rodada com estas apostas. */
export const perdaEsperada = (ap: Apostas, tipo: TipoRoda = 'europeia') =>
  Object.entries(ap).reduce((s, [id, v]) => s - v * esperadoPorFicha(tipoDeAposta(id)!, tipo), 0);

/** O saldo esperado depois de apostar `apostado` fichas no total: perde-se 1/37 do apostado, em média. */
export const saldoEsperado = (inicial: number, apostadoAcumulado: number) => inicial - apostadoAcumulado * VANTAGEM_CASA;

/** Formata uma chance como “18 em 37 (48,6%)”. */
export function textoChance(a: TipoAposta, tipo: TipoRoda = 'europeia'): string {
  const p = (chanceDe(a, tipo) * 100).toFixed(1).replace('.', ',');
  return `${a.numeros.length} em ${casasDa(tipo)} (${p}%)`;
}
