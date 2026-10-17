/**
 * A escopa (de 15), você contra o Linu, com o baralho francês sem os 8, 9 e 10. As regras e as
 * fontes estão em `data/outros-jogos/escopa.ts`. Só as contas, sem React.
 *
 * Cada um recebe 3 cartas e 4 ficam abertas na mesa. Na sua vez, você joga uma carta: se ela, somada
 * a cartas da mesa, dá 15, você leva todas elas (uma vaza); se leva a mesa inteira, é uma escopa.
 * Quando as mãos acabam, cada um recebe mais 3, até o monte acabar. A partida vai a 21 pontos.
 */
import { baralho52, embaralhar, iguais, type CartaF } from './baralho-frances';

export type Jogador = 0 | 1;
const outro = (j: Jogador): Jogador => (j === 0 ? 1 : 0);
export const PONTOS_PARA_GANHAR = 21;

/** O valor da carta para fazer 15: ás 1, do 2 ao 7 o próprio número, dama 8, valete 9, rei 10. */
export function valorDaCarta(c: CartaF): number {
  if (c.valor === 12) return 8;
  if (c.valor === 11) return 9;
  if (c.valor === 13) return 10;
  return c.valor;
}

export function baralho40(): CartaF[] {
  return baralho52().filter((c) => c.valor < 8 || c.valor > 10);
}

export const ehSeteDeOuros = (c: CartaF) => c.valor === 7 && c.naipe === 'ouros';

export type Fase = 'jogando' | 'fimMao' | 'fimJogo';

export interface PontosMao {
  escopas: number;
  ouros: number;
  seteDeOuros: number;
  setes: number;
  cartas: number;
  total: number;
}

export interface EstadoEscopa {
  placar: [number, number];
  /** quem dá as cartas nesta mão (o outro joga primeiro) */
  dador: Jogador;
  monte: CartaF[];
  mesa: CartaF[];
  maos: [CartaF[], CartaF[]];
  levadas: [CartaF[], CartaF[]];
  escopas: [number, number];
  vez: Jogador;
  /** quem fez a última vaza (leva o que sobrar na mesa no fim) */
  ultimaVaza: Jogador | null;
  /** o último lance, para mostrar: a carta jogada e o que ela levou */
  ultimo: { j: Jogador; carta: CartaF; levou: CartaF[]; escopa: boolean } | null;
  fase: Fase;
  resultado: [PontosMao, PontosMao] | null;
  vencedor: Jogador | null;
}

export function darMao(placar: [number, number], dador: Jogador, rng: () => number): EstadoEscopa {
  const b = embaralhar(baralho40(), rng);
  return {
    placar,
    dador,
    maos: [b.slice(0, 3), b.slice(3, 6)],
    mesa: b.slice(6, 10),
    monte: b.slice(10),
    levadas: [[], []],
    escopas: [0, 0],
    vez: outro(dador),
    ultimaVaza: null,
    ultimo: null,
    fase: 'jogando',
    resultado: null,
    vencedor: null,
  };
}

export const novoJogo = (dador: Jogador, rng: () => number) => darMao([0, 0], dador, rng);

/** Todos os grupos de cartas da mesa que, somados à carta, dão 15. */
export function vazasPossiveis(mesa: CartaF[], carta: CartaF): CartaF[][] {
  const alvo = 15 - valorDaCarta(carta);
  const out: CartaF[][] = [];
  const n = mesa.length;
  for (let mask = 1; mask < 1 << n; mask++) {
    let soma = 0;
    const grupo: CartaF[] = [];
    for (let i = 0; i < n; i++)
      if (mask & (1 << i)) {
        soma += valorDaCarta(mesa[i]!);
        grupo.push(mesa[i]!);
      }
    if (soma === alvo) out.push(grupo);
  }
  return out;
}

/**
 * Joga uma carta. `grupo` são as cartas da mesa que ela leva (um dos `vazasPossiveis`); sem grupo, a
 * carta fica na mesa. Se der para fazer 15, é preciso levar: jogar sem levar só vale quando não dá.
 */
export function jogar(s: EstadoEscopa, j: Jogador, carta: CartaF, grupo: CartaF[] = []): EstadoEscopa {
  if (s.fase !== 'jogando' || s.vez !== j || !s.maos[j].some((x) => iguais(x, carta))) return s;
  const opcoes = vazasPossiveis(s.mesa, carta);
  const valido = grupo.length === 0 ? opcoes.length === 0 : opcoes.some((g) => g.length === grupo.length && g.every((x) => grupo.some((y) => iguais(x, y))));
  if (!valido) return s;
  const maos = (j === 0 ? [s.maos[0].filter((x) => !iguais(x, carta)), s.maos[1]] : [s.maos[0], s.maos[1].filter((x) => !iguais(x, carta))]) as EstadoEscopa['maos'];
  let { mesa, levadas, escopas, ultimaVaza } = s;
  let escopa = false;
  if (grupo.length) {
    mesa = mesa.filter((x) => !grupo.some((y) => iguais(x, y)));
    levadas = (j === 0 ? [[...levadas[0], carta, ...grupo], levadas[1]] : [levadas[0], [...levadas[1], carta, ...grupo]]) as EstadoEscopa['levadas'];
    ultimaVaza = j;
    // limpar a mesa é escopa (menos na última jogada da mão, quando a mesa ia ser recolhida mesmo)
    const ultimaDaMao = s.monte.length === 0 && maos[0].length === 0 && maos[1].length === 0;
    if (mesa.length === 0 && !ultimaDaMao) {
      escopa = true;
      escopas = (j === 0 ? [escopas[0] + 1, escopas[1]] : [escopas[0], escopas[1] + 1]) as [number, number];
    }
  } else mesa = [...mesa, carta];
  let novo: EstadoEscopa = { ...s, maos, mesa, levadas, escopas, ultimaVaza, vez: outro(j), ultimo: { j, carta, levou: grupo, escopa } };
  // as mãos acabaram: mais 3 para cada um, ou o fim da mão
  if (maos[0].length === 0 && maos[1].length === 0) {
    if (s.monte.length) novo = { ...novo, maos: [s.monte.slice(0, 3), s.monte.slice(3, 6)], monte: s.monte.slice(6) };
    else novo = contar(novo);
  }
  return novo;
}

/** Os pontos de cada um na mão (escopas, ouros, sete de ouros, setes, cartas). */
export function pontosDaMao(levadas: [CartaF[], CartaF[]], escopas: [number, number]): [PontosMao, PontosMao] {
  const ouros = levadas.map((l) => l.filter((c) => c.naipe === 'ouros').length);
  const setes = levadas.map((l) => l.filter((c) => c.valor === 7).length);
  const cartas = levadas.map((l) => l.length);
  return ([0, 1] as Jogador[]).map((j) => {
    const o = outro(j);
    const p: PontosMao = {
      escopas: escopas[j],
      // todos os 10 ouros valem 2; a maioria, 1
      ouros: ouros[j] === 10 ? 2 : ouros[j]! > ouros[o]! ? 1 : 0,
      seteDeOuros: levadas[j].some(ehSeteDeOuros) ? 1 : 0,
      // os quatro 7 valem 3; a maioria dos 7, 1
      setes: setes[j] === 4 ? 3 : setes[j]! > setes[o]! ? 1 : 0,
      cartas: cartas[j]! > cartas[o]! ? 1 : 0,
      total: 0,
    };
    p.total = p.escopas + p.ouros + p.seteDeOuros + p.setes + p.cartas;
    return p;
  }) as [PontosMao, PontosMao];
}

function contar(s: EstadoEscopa): EstadoEscopa {
  // o que sobrou na mesa vai para quem fez a última vaza
  let levadas = s.levadas;
  if (s.mesa.length && s.ultimaVaza !== null) levadas = (s.ultimaVaza === 0 ? [[...levadas[0], ...s.mesa], levadas[1]] : [levadas[0], [...levadas[1], ...s.mesa]]) as EstadoEscopa['levadas'];
  const resultado = pontosDaMao(levadas, s.escopas);
  const placar: [number, number] = [s.placar[0] + resultado[0].total, s.placar[1] + resultado[1].total];
  const chegou = placar.some((p) => p >= PONTOS_PARA_GANHAR) && placar[0] !== placar[1];
  return { ...s, levadas, mesa: s.ultimaVaza !== null ? [] : s.mesa, placar, resultado, vencedor: chegou ? (placar[0] > placar[1] ? 0 : 1) : null, fase: chegou ? 'fimJogo' : 'fimMao' };
}

export function proximaMao(s: EstadoEscopa, rng: () => number): EstadoEscopa {
  if (s.fase !== 'fimMao') return s;
  return darMao(s.placar, outro(s.dador), rng);
}

// ---------- o Linu ----------

/** Quanto vale levar este grupo: escopa, o sete de ouros, os setes, os ouros e as cartas. */
function valorDaVaza(s: EstadoEscopa, carta: CartaF, grupo: CartaF[]): number {
  const todas = [carta, ...grupo];
  let v = todas.length;
  if (grupo.length === s.mesa.length) v += 100;
  for (const c of todas) {
    if (ehSeteDeOuros(c)) v += 30;
    else if (c.valor === 7) v += 8;
    if (c.naipe === 'ouros') v += 3;
  }
  return v;
}

/** O lance do Linu: a vaza que mais vale; sem vaza, a carta que menos ajuda você a fazer escopa. */
export function lanceDoLinu(s: EstadoEscopa, j: Jogador): { carta: CartaF; grupo: CartaF[] } {
  let melhor: { carta: CartaF; grupo: CartaF[]; v: number } | null = null;
  for (const carta of s.maos[j])
    for (const grupo of vazasPossiveis(s.mesa, carta)) {
      const v = valorDaVaza(s, carta, grupo);
      if (!melhor || v > melhor.v) melhor = { carta, grupo, v };
    }
  if (melhor) return { carta: melhor.carta, grupo: melhor.grupo };
  const somaMesa = s.mesa.reduce((t, c) => t + valorDaCarta(c), 0);
  const risco = (c: CartaF) => {
    let r = 0;
    // deixar a mesa somando 15 (ou menos de 15, fácil de limpar) dá escopa ao outro
    const total = somaMesa + valorDaCarta(c);
    if (total <= 10) r += 10;
    if (ehSeteDeOuros(c)) r += 40;
    else if (c.valor === 7) r += 12;
    if (c.naipe === 'ouros') r += 4;
    return r;
  };
  const carta = [...s.maos[j]].sort((a, b) => risco(a) - risco(b) || valorDaCarta(b) - valorDaCarta(a))[0]!;
  return { carta, grupo: [] };
}
