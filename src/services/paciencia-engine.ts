/**
 * A Paciência no jogo Klondike, o “paciência” do computador (ver `data/outros-jogos/paciencia.ts`
 * para as regras e as fontes). Só as contas, sem React: o estado é imutável e cada lance devolve um
 * estado novo (ou o mesmo objeto, quando o lance não vale).
 *
 * A mesa: o monte (as cartas viradas para comprar), o descarte (as compradas, a de cima em jogo), as
 * 4 fundações (uma por naipe, do ás ao rei) e as 7 colunas, com 1 a 7 cartas e só a última aberta.
 */
import { baralho52, embaralhar, mesmaCor, NAIPES, type CartaF } from './baralho-frances';

export interface CartaMesa extends CartaF {
  aberta: boolean;
}

export interface EstadoPaciencia {
  /** as cartas para comprar, viradas para baixo (a de cima é a última) */
  monte: CartaF[];
  /** as compradas, abertas (a de cima, a última, é a que se pode jogar) */
  descarte: CartaF[];
  /** as 4 fundações, na ordem de `NAIPES` (copas, ouros, espadas, paus), do ás para cima */
  fundacoes: CartaF[][];
  /** as 7 colunas, de cima para baixo (a última carta é a da ponta) */
  colunas: CartaMesa[][];
  /** quantas cartas se compram de cada vez: 1 (a regra do app) ou 3 (a variante) */
  pesca: 1 | 3;
  /** quantas vezes o descarte já voltou para o monte */
  voltas: number;
  lances: number;
}

/** De onde sai a carta (ou a sequência de cartas) de um lance. */
export type Origem = { de: 'descarte' } | { de: 'coluna'; col: number; idx: number } | { de: 'fundacao'; f: number };
/** Para onde ela vai. */
export type Destino = { para: 'fundacao'; f: number } | { para: 'coluna'; col: number };

/** Uma partida nova: 28 cartas nas colunas (1 + 2 + … + 7), as outras 24 no monte. */
export function novaPartida(rng: () => number, pesca: 1 | 3 = 1): EstadoPaciencia {
  const cartas = embaralhar(baralho52(), rng);
  const colunas: CartaMesa[][] = [];
  let k = 0;
  for (let c = 0; c < 7; c++) {
    const col: CartaMesa[] = [];
    for (let i = 0; i <= c; i++) col.push({ ...cartas[k++]!, aberta: i === c });
    colunas.push(col);
  }
  return { monte: cartas.slice(k), descarte: [], fundacoes: [[], [], [], []], colunas, pesca, voltas: 0, lances: 0 };
}

/** A fundação de um naipe. */
export const fundacaoDe = (c: CartaF) => NAIPES.indexOf(c.naipe);

/**
 * Compra: passa 1 (ou 3) cartas do monte para o descarte. Com o monte vazio, o descarte volta inteiro
 * para o monte, na mesma ordem em que foi comprado (sem limite de voltas, como no paciência do
 * Windows). Sem carta nenhuma nos dois, não faz nada.
 */
export function comprar(s: EstadoPaciencia): EstadoPaciencia {
  if (s.monte.length === 0) {
    if (s.descarte.length === 0) return s;
    return { ...s, monte: [...s.descarte].reverse(), descarte: [], voltas: s.voltas + 1, lances: s.lances + 1 };
  }
  const n = Math.min(s.pesca, s.monte.length);
  const tiradas = s.monte.slice(s.monte.length - n).reverse();
  return { ...s, monte: s.monte.slice(0, s.monte.length - n), descarte: [...s.descarte, ...tiradas], lances: s.lances + 1 };
}

/** As cartas que saem com um lance a partir de `o` (a sequência inteira, numa coluna). */
export function cartasDe(s: EstadoPaciencia, o: Origem): CartaF[] {
  if (o.de === 'descarte') return s.descarte.length ? [s.descarte[s.descarte.length - 1]!] : [];
  if (o.de === 'fundacao') {
    const f = s.fundacoes[o.f]!;
    return f.length ? [f[f.length - 1]!] : [];
  }
  const col = s.colunas[o.col];
  if (!col || o.idx < 0 || o.idx >= col.length || !col[o.idx]!.aberta) return [];
  return col.slice(o.idx);
}

/** Se a sequência de uma coluna é uma escada válida (cada uma 1 abaixo e de cor diferente). */
function escada(cartas: CartaF[]): boolean {
  for (let i = 1; i < cartas.length; i++) {
    const a = cartas[i - 1]!;
    const b = cartas[i]!;
    if (b.valor !== a.valor - 1 || mesmaCor(a, b)) return false;
  }
  return true;
}

/** Se o lance vale. */
export function podeMover(s: EstadoPaciencia, o: Origem, d: Destino): boolean {
  const cartas = cartasDe(s, o);
  if (cartas.length === 0 || !escada(cartas)) return false;
  const primeira = cartas[0]!;
  if (d.para === 'fundacao') {
    if (cartas.length !== 1 || o.de === 'fundacao') return false;
    if (fundacaoDe(primeira) !== d.f) return false;
    return s.fundacoes[d.f]!.length + 1 === primeira.valor;
  }
  if (o.de === 'coluna' && o.col === d.col) return false;
  const col = s.colunas[d.col];
  if (!col) return false;
  // coluna vazia só recebe rei
  if (col.length === 0) return primeira.valor === 13;
  const ponta = col[col.length - 1]!;
  return ponta.aberta && ponta.valor === primeira.valor + 1 && !mesmaCor(ponta, primeira);
}

/** Faz o lance (ou devolve o mesmo estado, se não vale). A carta que fica na ponta da coluna se abre. */
export function mover(s: EstadoPaciencia, o: Origem, d: Destino): EstadoPaciencia {
  if (!podeMover(s, o, d)) return s;
  const cartas = cartasDe(s, o);
  let { descarte, fundacoes, colunas } = s;
  if (o.de === 'descarte') descarte = descarte.slice(0, -1);
  else if (o.de === 'fundacao') fundacoes = fundacoes.map((f, i) => (i === o.f ? f.slice(0, -1) : f));
  else {
    colunas = colunas.map((c, i) => {
      if (i !== o.col) return c;
      const resto = c.slice(0, o.idx);
      if (resto.length && !resto[resto.length - 1]!.aberta) resto[resto.length - 1] = { ...resto[resto.length - 1]!, aberta: true };
      return resto;
    });
  }
  if (d.para === 'fundacao') fundacoes = fundacoes.map((f, i) => (i === d.f ? [...f, cartas[0]!] : f));
  else colunas = colunas.map((c, i) => (i === d.col ? [...c, ...cartas.map((x) => ({ naipe: x.naipe, valor: x.valor, aberta: true }))] : c));
  return { ...s, descarte, fundacoes, colunas, lances: s.lances + 1 };
}

/** Todos os destinos que valem para a carta de `o`. */
export function destinosDe(s: EstadoPaciencia, o: Origem): Destino[] {
  const out: Destino[] = [];
  for (let f = 0; f < 4; f++) if (podeMover(s, o, { para: 'fundacao', f })) out.push({ para: 'fundacao', f });
  for (let col = 0; col < 7; col++) if (podeMover(s, o, { para: 'coluna', col })) out.push({ para: 'coluna', col });
  return out;
}

/**
 * O lance automático de um toque duplo: a fundação, se der; senão uma coluna com cartas (para não
 * gastar uma coluna vazia à toa); por último uma coluna vazia, e só quando o rei não está já no
 * topo de uma coluna (mover o rei de uma coluna para outra vazia não ajuda em nada).
 */
export function melhorDestino(s: EstadoPaciencia, o: Origem): Destino | null {
  const ds = destinosDe(s, o);
  const fund = ds.find((d) => d.para === 'fundacao');
  if (fund) return fund;
  const cheia = ds.find((d) => d.para === 'coluna' && s.colunas[d.col]!.length > 0);
  if (cheia) return cheia;
  const reiNoTopo = o.de === 'coluna' && o.idx === 0;
  return reiNoTopo ? null : (ds[0] ?? null);
}

export const venceu = (s: EstadoPaciencia) => s.fundacoes.every((f) => f.length === 13);

/**
 * Dá para terminar sozinho: o monte e o descarte acabaram e todas as cartas das colunas estão abertas.
 * Aí cada coluna é uma escada, e as cartas sobem para as fundações uma a uma, sem risco de travar.
 */
export const podeTerminarSozinho = (s: EstadoPaciencia) => !venceu(s) && s.monte.length === 0 && s.descarte.length === 0 && s.colunas.every((c) => c.every((x) => x.aberta));

/**
 * Um passo do “terminar sozinho”: a menor carta que pode subir para a fundação, das pontas das
 * colunas ou do descarte. Devolve o mesmo estado quando não há o que fazer.
 */
export function passoFinal(s: EstadoPaciencia): EstadoPaciencia {
  const origens: Origem[] = [{ de: 'descarte' }, ...s.colunas.map((c, col) => ({ de: 'coluna' as const, col, idx: c.length - 1 }))];
  let melhor: { o: Origem; valor: number } | null = null;
  for (const o of origens) {
    const c = cartasDe(s, o)[0];
    if (!c) continue;
    const f = fundacaoDe(c);
    if (podeMover(s, o, { para: 'fundacao', f }) && (!melhor || c.valor < melhor.valor)) melhor = { o, valor: c.valor };
  }
  if (melhor) {
    const c = cartasDe(s, melhor.o)[0]!;
    return mover(s, melhor.o, { para: 'fundacao', f: fundacaoDe(c) });
  }
  return s;
}

/** Se ainda existe algum lance que leva carta para algum lugar (sem contar comprar). */
export function temLance(s: EstadoPaciencia): boolean {
  if (destinosDe(s, { de: 'descarte' }).length) return true;
  return s.colunas.some((c, col) => c.some((x, idx) => x.aberta && (melhorDestino(s, { de: 'coluna', col, idx }) !== null)));
}
