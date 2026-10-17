/**
 * A sueca, para 4 em duplas: você e o Pipo (à sua frente) contra o Linu (à sua esquerda) e a Dedé (à
 * sua direita). As regras e as fontes estão em `data/outros-jogos/sueca.ts`. Só as contas, sem React.
 *
 * 40 cartas (sem 8, 9 e 10), 10 para cada um. A última carta de quem dá é mostrada a todos e o naipe
 * dela é o trunfo. Seguir o naipe é obrigatório. As cartas levadas valem pontos (ás 11, 7 10, rei 4,
 * valete 3, dama 2): são 120 por mão, e a dupla que faz mais de 60 ganha jogos (1, 2 ou 4). A
 * partida vai a 4 jogos.
 */
import { baralho52, embaralhar, iguais, type CartaF, type Naipe, type Valor } from './baralho-frances';

export type Lugar = 0 | 1 | 2 | 3;
export type Dupla = 0 | 1;
export const LUGARES: Lugar[] = [0, 1, 2, 3];
/** a dupla de cada lugar: 0 e 2 (você e o Pipo), 1 e 3 (o Linu e a Dedé) */
export const duplaDe = (l: Lugar): Dupla => (l % 2) as Dupla;
export const JOGOS_PARA_GANHAR = 4;

/** a ordem de força dentro do naipe, da mais fraca à mais forte: 2 3 4 5 6 Q J K 7 A */
export const ORDEM: Valor[] = [2, 3, 4, 5, 6, 12, 11, 13, 7, 1];
export const forcaNoNaipe = (c: CartaF) => ORDEM.indexOf(c.valor);
const PONTOS: Partial<Record<Valor, number>> = { 1: 11, 7: 10, 13: 4, 11: 3, 12: 2 };
export const pontosDaCarta = (c: CartaF) => PONTOS[c.valor] ?? 0;

export function baralho40(): CartaF[] {
  return baralho52().filter((c) => c.valor < 8 || c.valor > 10);
}

export type Fase = 'jogando' | 'vaza' | 'fimMao' | 'fimJogo';

export interface EstadoSueca {
  /** os jogos de cada dupla */
  placar: [number, number];
  /** quem deu as cartas (e ficou com o trunfo virado); quem está depois dele abre a primeira vaza */
  dador: Lugar;
  trunfo: CartaF;
  maos: [CartaF[], CartaF[], CartaF[], CartaF[]];
  /** os pontos e as vazas levados por cada dupla nesta mão */
  pontos: [number, number];
  vazasDupla: [number, number];
  mesa: { l: Lugar; carta: CartaF }[];
  vez: Lugar;
  vazas: number;
  fase: Fase;
  resultado: { pontos: [number, number]; jogos: [number, number]; capote: Dupla | null } | null;
  vencedor: Dupla | null;
}

const ordenar = (m: CartaF[], trunfo: Naipe) => {
  const naipes: Naipe[] = (['paus', 'ouros', 'espadas', 'copas'] as Naipe[]).filter((n) => n !== trunfo).concat(trunfo);
  return [...m].sort((a, b) => naipes.indexOf(a.naipe) - naipes.indexOf(b.naipe) || forcaNoNaipe(a) - forcaNoNaipe(b));
};

export function darMao(placar: [number, number], dador: Lugar, rng: () => number): EstadoSueca {
  const b = embaralhar(baralho40(), rng);
  // cada um recebe 10, começando por quem está depois de quem dá; a última carta (a do dador) é o trunfo
  const maos = [[], [], [], []] as CartaF[][];
  for (let k = 0; k < 40; k++) maos[(dador + 1 + Math.floor(k / 10)) % 4]!.push(b[k]!);
  const trunfo = b[39]!;
  return {
    placar,
    dador,
    trunfo,
    maos: maos.map((m) => ordenar(m, trunfo.naipe)) as EstadoSueca['maos'],
    pontos: [0, 0],
    vazasDupla: [0, 0],
    mesa: [],
    vez: ((dador + 1) % 4) as Lugar,
    vazas: 0,
    fase: 'jogando',
    resultado: null,
    vencedor: null,
  };
}

export const novoJogo = (dador: Lugar, rng: () => number) => darMao([0, 0], dador, rng);

/** As cartas que `l` pode jogar: o naipe que abriu, se tiver; senão, qualquer uma. */
export function jogaveis(s: EstadoSueca, l: Lugar): CartaF[] {
  if (s.fase !== 'jogando' || s.vez !== l) return [];
  const mao = s.maos[l];
  if (s.mesa.length === 0) return mao;
  const doNaipe = mao.filter((c) => c.naipe === s.mesa[0]!.carta.naipe);
  return doNaipe.length ? doNaipe : mao;
}

export function jogar(s: EstadoSueca, l: Lugar, carta: CartaF): EstadoSueca {
  if (!jogaveis(s, l).some((c) => iguais(c, carta))) return s;
  const maos = s.maos.map((m, i) => (i === l ? m.filter((x) => !iguais(x, carta)) : m)) as EstadoSueca['maos'];
  const mesa = [...s.mesa, { l, carta }];
  if (mesa.length < 4) return { ...s, maos, mesa, vez: ((l + 1) % 4) as Lugar };
  return { ...s, maos, mesa, fase: 'vaza' };
}

/** Quem leva a vaza: o trunfo mais alto, se houver; senão a carta mais alta do naipe que abriu. */
export function ganhadorDaVaza(mesa: EstadoSueca['mesa'], trunfo: Naipe): Lugar {
  const naipe = mesa.some((m) => m.carta.naipe === trunfo) ? trunfo : mesa[0]!.carta.naipe;
  return mesa.filter((m) => m.carta.naipe === naipe).sort((a, b) => forcaNoNaipe(b.carta) - forcaNoNaipe(a.carta))[0]!.l;
}

/** Os jogos de uma mão: 61 a 90 pontos, 1; 91 ou mais, 2; todas as vazas (capote), 4; 60 a 60, nada. */
export function jogosDaMao(pontos: number, vazas: number): number {
  if (vazas === 10) return 4;
  if (pontos >= 91) return 2;
  if (pontos >= 61) return 1;
  return 0;
}

export function recolher(s: EstadoSueca): EstadoSueca {
  if (s.fase !== 'vaza') return s;
  const g = ganhadorDaVaza(s.mesa, s.trunfo.naipe);
  const d = duplaDe(g);
  const pontos = [...s.pontos] as [number, number];
  const vazasDupla = [...s.vazasDupla] as [number, number];
  pontos[d] += s.mesa.reduce((t, m) => t + pontosDaCarta(m.carta), 0);
  vazasDupla[d] += 1;
  const vazas = s.vazas + 1;
  const novo = { ...s, pontos, vazasDupla, mesa: [], vazas, vez: g };
  if (vazas < 10) return { ...novo, fase: 'jogando' };
  const jogos: [number, number] = [jogosDaMao(pontos[0], vazasDupla[0]), jogosDaMao(pontos[1], vazasDupla[1])];
  const capote = vazasDupla[0] === 10 ? 0 : vazasDupla[1] === 10 ? 1 : null;
  const placar: [number, number] = [s.placar[0] + jogos[0], s.placar[1] + jogos[1]];
  const vencedor = placar[0] >= JOGOS_PARA_GANHAR ? 0 : placar[1] >= JOGOS_PARA_GANHAR ? 1 : null;
  return { ...novo, placar, resultado: { pontos, jogos, capote }, vencedor, fase: vencedor !== null ? 'fimJogo' : 'fimMao' };
}

/** A mão seguinte: quem dá passa para o próximo. */
export function proximaMao(s: EstadoSueca, rng: () => number): EstadoSueca {
  if (s.fase !== 'fimMao') return s;
  return darMao(s.placar, ((s.dador + 1) % 4) as Lugar, rng);
}

// ---------- os jogadores do computador ----------

/** A carta que o computador joga, ajudando o parceiro e guardando os trunfos. */
export function cartaDoComputador(s: EstadoSueca, l: Lugar): CartaF {
  const opcoes = jogaveis(s, l);
  const trunfo = s.trunfo.naipe;
  const asc = [...opcoes].sort((a, b) => pontosDaCarta(a) - pontosDaCarta(b) || forcaNoNaipe(a) - forcaNoNaipe(b));
  if (s.mesa.length === 0) {
    // abrindo: um ás fora do trunfo puxa pontos; senão, a carta mais fraca fora do trunfo
    const as = opcoes.find((c) => c.valor === 1 && c.naipe !== trunfo);
    if (as) return as;
    return asc.find((c) => c.naipe !== trunfo) ?? asc[0]!;
  }
  const atual = ganhadorDaVaza(s.mesa, trunfo);
  const parceiroGanhando = duplaDe(atual) === duplaDe(l);
  const pontosNaMesa = s.mesa.reduce((t, m) => t + pontosDaCarta(m.carta), 0);
  const ganham = opcoes.filter((c) => ganhadorDaVaza([...s.mesa, { l, carta: c }], trunfo) === l);
  if (parceiroGanhando) {
    // o parceiro está levando: carrega pontos (sem gastar trunfo), se for o último ou se ele levar com folga
    const carga = [...opcoes].filter((c) => c.naipe !== trunfo || opcoes.every((x) => x.naipe === trunfo)).sort((a, b) => pontosDaCarta(b) - pontosDaCarta(a));
    if (s.mesa.length === 3 && carga.length) return carga[0]!;
    return asc[0]!;
  }
  if (ganham.length && (pontosNaMesa > 0 || s.mesa.length === 3)) {
    // leva com a carta mais barata que ganha
    return [...ganham].sort((a, b) => (a.naipe === trunfo ? 1 : 0) - (b.naipe === trunfo ? 1 : 0) || pontosDaCarta(a) - pontosDaCarta(b) || forcaNoNaipe(a) - forcaNoNaipe(b))[0]!;
  }
  return asc[0]!;
}
