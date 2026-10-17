/**
 * O buraco (aberto), um contra um: você e o Linu, cada um com o seu morto. As regras e as fontes estão
 * em `data/outros-jogos/buraco.ts`. Só as contas, sem React; cada ação devolve um estado novo (ou o
 * mesmo objeto, quando não vale naquela hora).
 *
 * Dois baralhos franceses (104 cartas). O 2 é coringa. Os jogos são sequências de 3 ou mais cartas do
 * mesmo naipe, com no máximo um coringa cada. Com 7 cartas ou mais, o jogo vira canastra: limpa (sem
 * coringa, 200 pontos) ou suja (com coringa, 100). Para bater, é preciso ter pegado o morto e ter uma
 * canastra limpa.
 */
import { baralho52, embaralhar, type CartaF, type Naipe } from './baralho-frances';

export type Jogador = 0 | 1;
const outro = (j: Jogador): Jogador => (j === 0 ? 1 : 0);

/** Uma carta do buraco: como há dois baralhos, cada carta tem um id próprio. */
export interface CartaB extends CartaF {
  id: number;
}

export const PONTOS_PARA_GANHAR = 3000;
export const CARTAS_NA_MAO = 11;
export const BONUS_LIMPA = 200;
export const BONUS_SUJA = 100;
export const BONUS_BATIDA = 100;
export const MULTA_SEM_MORTO = 100;

/** O valor da carta na contagem: 3 a 7 valem 5; 8 a K, 10; o ás, 15; o 2 (coringa), 10. */
export function pontosDaCarta(c: CartaF): number {
  if (c.valor === 1) return 15;
  if (c.valor === 2) return 10;
  return c.valor <= 7 ? 5 : 10;
}

export const ehCoringa = (c: CartaF) => c.valor === 2;

export function baralhoDuplo(): CartaB[] {
  return [...baralho52(), ...baralho52()].map((c, id) => ({ ...c, id }));
}

/** Um jogo arrumado: as cartas na ordem da sequência, o naipe e se usa coringa (suja). */
export interface Arrumado {
  ordem: CartaB[];
  naipe: Naipe;
  suja: boolean;
}

/**
 * Arruma um jogo, se ele vale: 3 ou mais cartas do mesmo naipe em sequência, com no máximo um
 * coringa no lugar de uma carta que falta (ou numa ponta). O 2 do próprio naipe, no lugar dele
 * (A-2-3), conta como carta comum. O ás vale antes do 2 ou depois do rei.
 */
export function arrumar(cartas: CartaB[]): Arrumado | null {
  if (cartas.length < 3) return null;
  const comuns = cartas.filter((c) => !ehCoringa(c));
  if (comuns.length === 0) return null;
  const naipe = comuns[0]!.naipe;
  if (comuns.some((c) => c.naipe !== naipe)) return null;
  const doises = cartas.filter(ehCoringa);
  // o 2 do naipe pode ser carta comum; tenta com cada combinação (no máximo 2 doises do mesmo naipe)
  // (primeiro como carta comum, para o jogo ficar limpo quando der)
  const opcoes: { naturais: CartaB[]; coringas: CartaB[] }[] = [];
  const doNaipe = doises.filter((d) => d.naipe === naipe);
  if (doNaipe.length) opcoes.push({ naturais: [...comuns, doNaipe[0]!], coringas: doises.filter((d) => d !== doNaipe[0]) });
  opcoes.push({ naturais: comuns, coringas: doises });
  for (const { naturais, coringas } of opcoes) {
    if (coringas.length > 1) continue;
    for (const asAlto of [false, true]) {
      const pos = (c: CartaB) => (c.valor === 1 && asAlto ? 14 : c.valor);
      const ord = [...naturais].sort((a, b) => pos(a) - pos(b));
      if (new Set(ord.map(pos)).size !== ord.length) continue;
      const min = pos(ord[0]!);
      const max = pos(ord[ord.length - 1]!);
      const buracos = max - min + 1 - ord.length;
      if (buracos > coringas.length) continue;
      if (asAlto && min <= 2) continue;
      // monta a ordem: o coringa entra no buraco, ou numa ponta (em cima, se couber; senão embaixo)
      const ordem: CartaB[] = [];
      let usado = false;
      for (let v = min; v <= max; v++) {
        const c = ord.find((x) => pos(x) === v);
        if (c) ordem.push(c);
        else {
          ordem.push(coringas[0]!);
          usado = true;
        }
      }
      if (coringas.length && !usado) {
        const teto = asAlto ? 14 : 13;
        if (max < teto) ordem.push(coringas[0]!);
        else if (min > (asAlto ? 3 : 1)) ordem.unshift(coringas[0]!);
        else continue;
      }
      return { ordem, naipe, suja: coringas.length > 0 };
    }
  }
  return null;
}

export const ehCanastra = (jogo: CartaB[]) => jogo.length >= 7;
export const ehLimpa = (jogo: CartaB[]) => ehCanastra(jogo) && !arrumar(jogo)?.suja;

export type Fase = 'comprar' | 'jogar' | 'fimMao' | 'fimJogo';

export interface ResultadoMao {
  pontos: [number, number];
  /** quem bateu (ou null, se o monte acabou) */
  bateu: Jogador | null;
}

export interface EstadoBuraco {
  placar: [number, number];
  /** quem começou esta mão (alterna a cada mão) */
  pe: Jogador;
  monte: CartaB[];
  lixo: CartaB[];
  maos: [CartaB[], CartaB[]];
  /** o morto de cada um; null depois que foi pego (ou virou monte) */
  mortos: [CartaB[] | null, CartaB[] | null];
  pegouMorto: [boolean, boolean];
  /** os jogos baixados de cada um, já na ordem da sequência */
  jogos: [CartaB[][], CartaB[][]];
  vez: Jogador;
  fase: Fase;
  /** a carta que veio do lixo nesta vez não pode ser descartada de volta logo em seguida */
  doLixo: number[];
  resultado: ResultadoMao | null;
  vencedor: Jogador | null;
}

export function darMao(placar: [number, number], pe: Jogador, rng: () => number): EstadoBuraco {
  const b = embaralhar(baralhoDuplo(), rng);
  const n = CARTAS_NA_MAO;
  return {
    placar,
    pe,
    maos: [b.slice(0, n), b.slice(n, 2 * n)],
    mortos: [b.slice(2 * n, 3 * n), b.slice(3 * n, 4 * n)],
    pegouMorto: [false, false],
    lixo: [b[4 * n]!],
    monte: b.slice(4 * n + 1),
    jogos: [[], []],
    vez: pe,
    fase: 'comprar',
    doLixo: [],
    resultado: null,
    vencedor: null,
  };
}

export const novoJogo = (pe: Jogador, rng: () => number) => darMao([0, 0], pe, rng);

/** Compra a carta de cima do monte. Sem monte, um morto que ninguém pegou vira monte; sem nenhum, a mão acaba. */
export function comprarDoMonte(s: EstadoBuraco): EstadoBuraco {
  if (s.fase !== 'comprar') return s;
  let { monte, mortos } = s;
  if (monte.length === 0) {
    const k = mortos[s.vez] ? s.vez : mortos[outro(s.vez)] ? outro(s.vez) : null;
    if (k === null) return fecharMao(s, null);
    monte = mortos[k]!;
    mortos = k === 0 ? [null, mortos[1]] : [mortos[0], null];
  }
  const carta = monte[monte.length - 1]!;
  const maos = trocaMao(s.maos, s.vez, [...s.maos[s.vez], carta]);
  return { ...s, monte: monte.slice(0, -1), mortos, maos, fase: 'jogar', doLixo: [] };
}

/** Pega o lixo inteiro (no buraco aberto, pode sempre que houver lixo). */
export function pegarLixo(s: EstadoBuraco): EstadoBuraco {
  if (s.fase !== 'comprar' || s.lixo.length === 0) return s;
  const maos = trocaMao(s.maos, s.vez, [...s.maos[s.vez], ...s.lixo]);
  return { ...s, lixo: [], maos, fase: 'jogar', doLixo: s.lixo.length === 1 ? [s.lixo[0]!.id] : [] };
}

function trocaMao<T>(par: [T, T], j: Jogador, v: T): [T, T] {
  return j === 0 ? [v, par[1]] : [par[0], v];
}

/** Se `j` pode ficar sem cartas agora: ainda tem o morto para pegar, ou já pode bater (morto pego e canastra limpa). */
export function podeFicarSemCartas(s: EstadoBuraco, j: Jogador, jogos = s.jogos[j]): boolean {
  if (!s.pegouMorto[j] && s.mortos[j]) return true;
  return jogos.some(ehLimpa);
}

/** Quando a mão fica vazia: pega o morto (e continua) ou bate. */
function semCartas(s: EstadoBuraco, j: Jogador, terminaAVez: boolean): EstadoBuraco {
  if (s.maos[j].length > 0) return s;
  if (!s.pegouMorto[j] && s.mortos[j]) {
    const maos = trocaMao(s.maos, j, s.mortos[j]!);
    const mortos = trocaMao(s.mortos, j, null);
    const pegouMorto = trocaMao(s.pegouMorto, j, true);
    const novo = { ...s, maos, mortos, pegouMorto };
    return terminaAVez ? { ...novo, vez: outro(j), fase: 'comprar' as Fase, doLixo: [] } : novo;
  }
  return fecharMao(s, j);
}

/**
 * Baixa um jogo novo com as cartas `ids` da mão. Quem ainda não pode ficar sem cartas também não pode
 * ficar com uma só: ela teria de ser descartada, e a mão ficaria vazia.
 */
export function baixar(s: EstadoBuraco, ids: number[]): EstadoBuraco {
  if (s.fase !== 'jogar') return s;
  const j = s.vez;
  const cartas = s.maos[j].filter((c) => ids.includes(c.id));
  if (cartas.length !== ids.length) return s;
  const arr = arrumar(cartas);
  if (!arr) return s;
  const resto = s.maos[j].filter((c) => !ids.includes(c.id));
  const jogos = trocaMao(s.jogos, j, [...s.jogos[j], arr.ordem]);
  if (resto.length <= 1 && !podeFicarSemCartas(s, j, jogos[j])) return s;
  return semCartas({ ...s, maos: trocaMao(s.maos, j, resto), jogos }, j, false);
}

/** Junta as cartas `ids` da mão ao jogo `k` de quem está na vez. */
export function juntar(s: EstadoBuraco, k: number, ids: number[]): EstadoBuraco {
  if (s.fase !== 'jogar' || ids.length === 0) return s;
  const j = s.vez;
  const jogo = s.jogos[j][k];
  if (!jogo) return s;
  const cartas = s.maos[j].filter((c) => ids.includes(c.id));
  if (cartas.length !== ids.length) return s;
  const arr = arrumar([...jogo, ...cartas]);
  if (!arr) return s;
  const resto = s.maos[j].filter((c) => !ids.includes(c.id));
  const meus = s.jogos[j].map((g, i) => (i === k ? arr.ordem : g));
  const jogos = trocaMao(s.jogos, j, meus);
  if (resto.length <= 1 && !podeFicarSemCartas(s, j, meus)) return s;
  return semCartas({ ...s, maos: trocaMao(s.maos, j, resto), jogos }, j, false);
}

/** Descarta uma carta no lixo e passa a vez (ou bate, se era a última). */
export function descartar(s: EstadoBuraco, id: number): EstadoBuraco {
  if (s.fase !== 'jogar') return s;
  const j = s.vez;
  const carta = s.maos[j].find((c) => c.id === id);
  if (!carta) return s;
  // a única carta que veio do lixo não volta para ele na mesma vez (a não ser que seja a última)
  if (s.doLixo.includes(id) && s.maos[j].length > 1) return s;
  const resto = s.maos[j].filter((c) => c.id !== id);
  if (resto.length === 0 && !podeFicarSemCartas(s, j)) return s;
  const novo = { ...s, maos: trocaMao(s.maos, j, resto), lixo: [...s.lixo, carta] };
  if (resto.length === 0) return semCartas(novo, j, true);
  return { ...novo, vez: outro(j), fase: 'comprar', doLixo: [] };
}

/** Os pontos de um jogador na mão: cartas baixadas e bônus, menos a mão e a multa do morto. */
export function pontosDaMao(s: EstadoBuraco, j: Jogador, bateu: Jogador | null): number {
  let p = 0;
  for (const g of s.jogos[j]) {
    p += g.reduce((t, c) => t + pontosDaCarta(c), 0);
    if (ehCanastra(g)) p += ehLimpa(g) ? BONUS_LIMPA : BONUS_SUJA;
  }
  if (bateu === j) p += BONUS_BATIDA;
  p -= s.maos[j].reduce((t, c) => t + pontosDaCarta(c), 0);
  if (!s.pegouMorto[j]) p -= MULTA_SEM_MORTO;
  return p;
}

function fecharMao(s: EstadoBuraco, bateu: Jogador | null): EstadoBuraco {
  const pontos: [number, number] = [pontosDaMao(s, 0, bateu), pontosDaMao(s, 1, bateu)];
  const placar: [number, number] = [s.placar[0] + pontos[0], s.placar[1] + pontos[1]];
  const chegou = placar.some((p) => p >= PONTOS_PARA_GANHAR);
  const vencedor = chegou ? (placar[0] === placar[1] ? null : placar[0] > placar[1] ? 0 : 1) : null;
  return { ...s, placar, resultado: { pontos, bateu }, vencedor, fase: chegou && vencedor !== null ? 'fimJogo' : 'fimMao' };
}

export function proximaMao(s: EstadoBuraco, rng: () => number): EstadoBuraco {
  if (s.fase !== 'fimMao') return s;
  return darMao(s.placar, outro(s.pe), rng);
}

/** Ordena a mão para mostrar: por naipe e, dentro dele, pelo valor; os coringas no fim. */
export function ordenarMao(cartas: CartaB[]): CartaB[] {
  const ordemNaipe: Naipe[] = ['copas', 'espadas', 'ouros', 'paus'];
  return [...cartas].sort((a, b) => {
    if (ehCoringa(a) !== ehCoringa(b)) return ehCoringa(a) ? 1 : -1;
    if (a.naipe !== b.naipe) return ordemNaipe.indexOf(a.naipe) - ordemNaipe.indexOf(b.naipe);
    return a.valor - b.valor;
  });
}

// ---------- o Linu ----------

/** Os jogos novos que dá para baixar com a mão (sequências de cartas comuns, e com um coringa se faltar uma). */
function jogosPossiveis(mao: CartaB[]): CartaB[][] {
  const out: CartaB[][] = [];
  const usadas = new Set<number>();
  const coringas = mao.filter(ehCoringa);
  for (const naipe of ['copas', 'espadas', 'ouros', 'paus'] as Naipe[]) {
    // uma carta de cada valor (a repetida fica na mão para outro jogo)
    const porValor = new Map<number, CartaB>();
    for (const c of mao) if (!ehCoringa(c) && c.naipe === naipe && !porValor.has(c.valor)) porValor.set(c.valor, c);
    const valores = [...porValor.keys()].sort((a, b) => a - b);
    let corrida: CartaB[] = [];
    const fechar = () => {
      if (corrida.length >= 3) {
        out.push(corrida);
        corrida.forEach((c) => usadas.add(c.id));
      }
      corrida = [];
    };
    for (const v of valores) {
      const prev = corrida[corrida.length - 1];
      if (prev && v !== prev.valor + 1) fechar();
      corrida.push(porValor.get(v)!);
    }
    fechar();
    // as duplas com um buraco de uma carta, completadas por um coringa
    if (coringas.length) {
      const livres = valores.filter((v) => !usadas.has(porValor.get(v)!.id));
      for (let i = 0; i + 1 < livres.length; i++) {
        if (livres[i + 1]! - livres[i]! <= 2) {
          const par = [porValor.get(livres[i]!)!, porValor.get(livres[i + 1]!)!];
          const coringa = coringas.find((x) => !usadas.has(x.id));
          if (!coringa) break;
          if (arrumar([...par, coringa])) {
            out.push([...par, coringa]);
            [...par, coringa].forEach((c) => usadas.add(c.id));
            i++;
          }
        }
      }
    }
  }
  return out;
}

/** Se a carta serve para algum jogo baixado (sem coringa). */
function serveEmJogo(jogos: CartaB[][], c: CartaB): number {
  if (ehCoringa(c)) return -1;
  return jogos.findIndex((g) => arrumar([...g, c]) !== null);
}

/** A compra do Linu: pega o lixo quando a carta de cima serve num jogo dele ou fecha um jogo novo com a mão. */
export function linuPegaLixo(s: EstadoBuraco, j: Jogador): boolean {
  const topo = s.lixo[s.lixo.length - 1];
  if (!topo) return false;
  if (serveEmJogo(s.jogos[j], topo) >= 0) return true;
  return jogosPossiveis([...s.maos[j], topo]).some((g) => g.some((c) => c.id === topo.id));
}

/**
 * Uma jogada do Linu na fase de jogar: baixa um jogo novo, junta uma carta a um jogo dele ou, sem
 * nada para baixar, descarta. Devolve o estado depois dessa ação (chamar de novo até passar a vez).
 */
export function passoDoLinu(s: EstadoBuraco, j: Jogador): EstadoBuraco {
  if (s.fase !== 'jogar' || s.vez !== j) return s;
  const mao = s.maos[j];
  // 1) juntar cartas comuns aos jogos que já tem
  for (const c of mao) {
    const k = serveEmJogo(s.jogos[j], c);
    if (k >= 0) {
      const novo = juntar(s, k, [c.id]);
      if (novo !== s) return novo;
    }
  }
  // 2) baixar um jogo novo (deixando pelo menos uma carta para descartar, se não puder bater)
  for (const g of jogosPossiveis(mao)) {
    const novo = baixar(s, g.map((c) => c.id));
    if (novo !== s) return novo;
  }
  // 3) descartar a carta menos útil
  return descartar(s, descarteDoLinu(s, j));
}

function descarteDoLinu(s: EstadoBuraco, j: Jogador): number {
  const mao = s.maos[j];
  const proibidas = mao.length > 1 ? new Set(s.doLixo) : new Set<number>();
  const util = (c: CartaB) => {
    if (ehCoringa(c)) return 100;
    let u = 0;
    for (const o of mao) if (o.id !== c.id && !ehCoringa(o) && o.naipe === c.naipe && Math.abs(o.valor - c.valor) <= 2 && o.valor !== c.valor) u += 3 - Math.abs(o.valor - c.valor);
    // carta que o adversário usaria num jogo dele: melhor não dar
    if (serveEmJogo(s.jogos[outro(j)], c) >= 0) u += 4;
    return u;
  };
  const candidatas = mao.filter((c) => !proibidas.has(c.id));
  const lista = candidatas.length ? candidatas : mao;
  return [...lista].sort((a, b) => util(a) - util(b) || pontosDaCarta(b) - pontosDaCarta(a))[0]!.id;
}
