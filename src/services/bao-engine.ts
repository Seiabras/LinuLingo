/**
 * Motor do bao (Bao la Kiswahili, o bao de Zanzibar). Fonte única de referência: H. H. L. M. Donkers,
 * “Zanzibar Bao Rules for the Computer” (Universiteit Maastricht, 5/9/2001), que adapta para o
 * computador as regras transcritas por Alexander J. de Voogt na tese “Limits of the Mind. Towards a
 * characterisation of Bao mastership” (Universidade de Leiden, 1995), a partir dos mestres de Zanzibar.
 * Cópia arquivada em web.archive.org (snapshot de 23/07/2012), consultada em 15/10/2026. Os números
 * de regra nos comentários são os de Donkers. Conferido com a Wikipédia em inglês (“Bao (game)”) e com
 * a página “Bao la Kiswahili” do Mancala World; onde elas divergem, o comentário diz.
 *
 * Cada jogador tem as duas fileiras do seu lado, e só semeia nelas. Aqui elas viram um anel de 16
 * covas, na ordem do sentido horário visto pelo dono: k = 0…7 é a fileira da frente, da esquerda para
 * a direita (cova 1 a 8), e k = 8…15 é a de trás, da direita para a esquerda (cova 8 a 1). Assim:
 *   - os kichwa são k = 0 (o da esquerda) e k = 7 (o da direita); os kimbi, k = 1 e k = 6;
 *   - a nyumba (a casa) é a 5ª cova da frente, contando da esquerda: k = 4;
 *   - a cova da frente k fica de frente para a cova 7 − k da frente do adversário;
 *   - semear a partir do kichwa da esquerda é o sentido horário (+1); do da direita, anti-horário (−1)
 *     (regra 1.4a).
 *
 * O que fica de fora (dito na ficha): a regra rara do takasia (4.1), que Donkers e o Mancala World
 * dizem ser necessária em pouquíssimas partidas; e lances “infinitos” (1.5a): um lance que semeia mais
 * de `LIMITE_SEMENTES` sementes é considerado infinito e não vale.
 */

export type JogadorB = 0 | 1;
export type Direcao = 1 | -1;
export type VarianteBao = 'kiswahili' | 'kujifunza';

export const KICHWA_ESQ = 0;
export const KICHWA_DIR = 7;
export const NYUMBA = 4;
/** Acima disso, o lance é tratado como infinito (regra 1.5a) e não vale. */
export const LIMITE_SEMENTES = 3000;

export interface BaoState {
  variante: VarianteBao;
  /** as 16 covas de cada jogador, no anel descrito acima */
  covas: [number[], number[]];
  /** as sementes ainda na mão (a reserva da fase namua) */
  reserva: [number, number];
  /** se cada um ainda tem a nyumba (a casa) funcionando (regra 2.5) */
  casa: [boolean, boolean];
  turn: JogadorB;
  fase: 'namua' | 'mtaji';
  winner: JogadorB | null;
  motivo: 'frente-vazia' | 'sem-lance' | null;
  /** o último lance, para o tabuleiro mostrar */
  ultimo: { jogador: JogadorB; lance: LanceBao; capturou: boolean } | null;
  lances: number;
}

/**
 * Um lance. `k` é a cova de onde ele parte (na fase namua, a cova da frente que recebe a semente da
 * mão; na mtaji, a cova cujas sementes são semeadas). `dir` é o sentido: na semeadura, o sentido
 * escolhido; numa captura que abre a fase namua, o kichwa escolhido (+1 = o da esquerda, −1 = o da
 * direita). `safari`: se a semeadura parar na nyumba num lance de captura, seguir semeando (perdendo a
 * casa) em vez de parar (regra 2.5b).
 */
export interface LanceBao {
  k: number;
  dir: Direcao;
  safari?: boolean;
}

/** Um acontecimento do lance, para a animação. `g` é a cova no tabuleiro inteiro: jogador × 16 + k. */
export type EventoBao =
  | { tipo: 'poe'; g: number } // uma semente da mão entra na cova
  | { tipo: 'pega'; g: number; n: number } // as sementes da cova vão para a mão
  | { tipo: 'semeia'; g: number }
  | { tipo: 'captura'; de: number; n: number; para: number }; // as sementes do adversário vão para a mão, rumo ao kichwa

export const outro = (j: JogadorB): JogadorB => (j === 0 ? 1 : 0);
export const frente = (k: number) => k < 8;
export const oposta = (k: number) => 7 - k;
const g = (j: JogadorB, k: number) => j * 16 + k;
const anel = (k: number) => ((k % 16) + 16) % 16;

export function createInitialState(variante: VarianteBao = 'kiswahili'): BaoState {
  const lado = () => {
    const c = Array(16).fill(variante === 'kujifunza' ? 2 : 0) as number[];
    if (variante === 'kiswahili') {
      // regra 2.1: 6 na nyumba e 2 em cada uma das duas covas à direita dela; 22 na mão
      c[NYUMBA] = 6;
      c[NYUMBA + 1] = 2;
      c[NYUMBA + 2] = 2;
    }
    return c;
  };
  const kis = variante === 'kiswahili';
  return {
    variante,
    covas: [lado(), lado()],
    reserva: kis ? [22, 22] : [0, 0],
    casa: kis ? [true, true] : [false, false],
    turn: 0,
    fase: kis ? 'namua' : 'mtaji',
    winner: null,
    motivo: null,
    ultimo: null,
    lances: 0,
  };
}

const frenteVazia = (c: number[]) => c.slice(0, 8).every((n) => n === 0);

// ── Simulação de um lance ────────────────────────────────────────────────────────────────────────

interface Sim {
  covas: [number[], number[]];
  casa: [boolean, boolean];
  eventos: EventoBao[];
  semeadas: number;
  /** a semeadura parou na nyumba num lance de captura, e o jogador podia ter seguido (safari) */
  pediuSafari: boolean;
  capturou: boolean;
  /** alguém ficou sem sementes na fileira da frente durante o lance */
  frenteVaziaDe: JogadorB | null;
  infinito: boolean;
}

class Fim extends Error {}

/**
 * Executa o lance do jogador `j` a partir de `s` e devolve o que aconteceu. Não confere se o lance é
 * legal (isso é com `lancesLegais`).
 */
function simular(s: BaoState, j: JogadorB, l: LanceBao, captura: boolean): Sim {
  const covas: [number[], number[]] = [s.covas[0].slice(), s.covas[1].slice()];
  const casa: [boolean, boolean] = [s.casa[0], s.casa[1]];
  const eu = covas[j];
  const ele = covas[outro(j)];
  const sim: Sim = { covas, casa, eventos: [], semeadas: 0, pediuSafari: false, capturou: false, frenteVaziaDe: null, infinito: false };
  const namua = s.fase === 'namua';

  /** semeia `n` sementes a partir de `inicio` (a primeira cai em `inicio`); devolve a última cova */
  const semear = (inicio: number, n: number, dir: Direcao): number => {
    let k = inicio;
    for (let i = 0; i < n; i++) {
      if (i > 0) k = anel(k + dir);
      eu[k]!++;
      sim.eventos.push({ tipo: 'semeia', g: g(j, k) });
    }
    sim.semeadas += n;
    if (sim.semeadas > LIMITE_SEMENTES) {
      sim.infinito = true;
      throw new Fim();
    }
    return k;
  };
  const pegar = (k: number, n: number) => {
    eu[k]! -= n;
    sim.eventos.push({ tipo: 'pega', g: g(j, k), n });
    // a casa esvaziada deixa de ser casa (regra 2.5a)
    if (k === NYUMBA && eu[k] === 0) casa[j] = false;
  };
  const conferirFrentes = () => {
    if (frenteVazia(ele)) {
      sim.frenteVaziaDe = outro(j);
      throw new Fim();
    }
    if (frenteVazia(eu)) {
      sim.frenteVaziaDe = j;
      throw new Fim();
    }
  };

  /** captura a partir da cova `k` (da frente); devolve onde terminou a semeadura e o novo sentido */
  const capturar = (k: number, dir: Direcao): { fim: number; dir: Direcao } => {
    const alvo = oposta(k);
    const n = ele[alvo]!;
    ele[alvo] = 0;
    if (alvo === NYUMBA) casa[outro(j)] = false;
    // regra 1.4b: kichwa ou kimbi da esquerda, começa no kichwa da esquerda; da direita, no da direita
    let d: Direcao = dir;
    if (k <= 1) d = 1;
    else if (k >= 6) d = -1;
    // a fase mtaji: a primeira captura tira a casa dos dois (regra 2.5a)
    if (!namua) casa[0] = casa[1] = false;
    const inicio = d === 1 ? KICHWA_ESQ : KICHWA_DIR;
    sim.capturou = true;
    sim.eventos.push({ tipo: 'captura', de: g(outro(j), alvo), n, para: g(j, inicio) });
    conferirFrentes();
    return { fim: semear(inicio, n, d), dir: d };
  };

  /** continua o lance depois de uma semeadura que terminou em `k` (endelea, capturas, a casa) */
  const seguir = (k0: number, dir0: Direcao) => {
    let k = k0;
    let dir = dir0;
    for (;;) {
      conferirFrentes();
      const c = eu[k]!;
      if (c === 1) return; // caiu numa cova vazia: o lance acaba
      if (captura && frente(k) && ele[oposta(k)]! > 0) {
        ({ fim: k, dir } = capturar(k, dir));
        continue;
      }
      // a casa, na fase namua (regras 1.6a e 2.5b)
      if (namua && k === NYUMBA && casa[j] && c >= 6) {
        if (!captura) return;
        sim.pediuSafari = true;
        if (!l.safari) return;
        casa[j] = false;
      }
      // endelea (regra 1.6): pega tudo e segue no mesmo sentido
      pegar(k, c);
      k = semear(anel(k + dir), c, dir);
    }
  };

  try {
    if (namua) {
      // uma semente da mão entra na cova k da frente
      eu[l.k]!++;
      sim.eventos.push({ tipo: 'poe', g: g(j, l.k) });
      if (captura) {
        const r = capturar(l.k, l.dir);
        seguir(r.fim, r.dir);
      } else {
        // takasa: da casa com 6 ou mais saem só 2 sementes (regra 2.4b); das outras, todas
        const n = l.k === NYUMBA && casa[j] && eu[l.k]! - 1 >= 6 ? 2 : eu[l.k]!;
        pegar(l.k, n);
        seguir(semear(anel(l.k + l.dir), n, l.dir), l.dir);
      }
    } else {
      const n = eu[l.k]!;
      pegar(l.k, n);
      seguir(semear(anel(l.k + l.dir), n, l.dir), l.dir);
    }
    conferirFrentes();
  } catch (e) {
    if (!(e instanceof Fim)) throw e;
  }
  return sim;
}

/** Se a primeira volta de um lance da fase mtaji termina numa captura (regra 3.4). */
function capturaNaMtaji(s: BaoState, j: JogadorB, k: number, dir: Direcao): boolean {
  const n = s.covas[j][k]!;
  if (n < 2 || n >= 16) return false;
  // com menos de 16 sementes a semeadura não dá a volta inteira: cada cova recebe no máximo uma
  const fim = anel(k + dir * n);
  const depois = s.covas[j][fim]! + 1;
  // a última semente cai numa cova da frente que já estava ocupada, de frente para uma ocupada do outro
  return frente(fim) && depois > 1 && s.covas[outro(j)][oposta(fim)]! > 0;
}

/** As partidas de lance possíveis (sem a escolha do safari), e se elas são de captura. */
function partidas(s: BaoState): { l: LanceBao; captura: boolean }[] {
  const j = s.turn;
  const eu = s.covas[j];
  const ele = s.covas[outro(j)];
  const r: { l: LanceBao; captura: boolean }[] = [];
  const dirs: Direcao[] = [1, -1];
  if (s.fase === 'namua') {
    // captura (regra 2.3): cova da frente ocupada de frente para uma ocupada do adversário
    for (let k = 0; k < 8; k++) {
      if (eu[k]! === 0 || ele[oposta(k)]! === 0) continue;
      // no kichwa ou kimbi o kichwa é obrigatório; nas outras, o jogador escolhe
      if (k <= 1) r.push({ l: { k, dir: 1 }, captura: true });
      else if (k >= 6) r.push({ l: { k, dir: -1 }, captura: true });
      else for (const dir of dirs) r.push({ l: { k, dir }, captura: true });
    }
    if (r.length > 0) return r;
    // takasa (regra 2.4)
    const ocupadas = [0, 1, 2, 3, 4, 5, 6, 7].filter((k) => eu[k]! > 0);
    const temMaisDeUma = ocupadas.some((k) => eu[k]! > 1);
    for (const k of ocupadas) {
      if (k === NYUMBA && s.casa[j] && eu[k]! >= 6 && ocupadas.length > 1) continue; // 2.4b
      if (eu[k] === 1 && temMaisDeUma && !s.casa[j]) continue; // 2.4c
      for (const dir of dirs) {
        // 2.4a: se o kichwa é a única ocupada, não se semeia para a fileira de trás
        if (ocupadas.length === 1 && ((k === KICHWA_ESQ && dir === -1) || (k === KICHWA_DIR && dir === 1))) continue;
        r.push({ l: { k, dir }, captura: false });
      }
    }
    return r;
  }
  // fase mtaji: captura (regra 3.4) de qualquer cova com 2 a 15 sementes
  for (let k = 0; k < 16; k++) for (const dir of dirs) if (capturaNaMtaji(s, j, k, dir)) r.push({ l: { k, dir }, captura: true });
  if (r.length > 0) return r;
  // takasa (regra 3.5): da frente, se der; senão, de trás; só covas com mais de uma semente
  const ocupadasFrente = [0, 1, 2, 3, 4, 5, 6, 7].filter((k) => eu[k]! > 0);
  const daFrente = [0, 1, 2, 3, 4, 5, 6, 7].filter((k) => eu[k]! > 1);
  const origens = daFrente.length > 0 ? daFrente : [8, 9, 10, 11, 12, 13, 14, 15].filter((k) => eu[k]! > 1);
  for (const k of origens)
    for (const dir of dirs) {
      if (ocupadasFrente.length === 1 && ((k === KICHWA_ESQ && dir === -1) || (k === KICHWA_DIR && dir === 1))) continue; // 3.5b
      r.push({ l: { k, dir }, captura: false });
    }
  return r;
}

/** Se quem tem a vez tem captura (e então ela é obrigatória: todos os lances são de captura). */
export function haCaptura(s: BaoState): boolean {
  return s.winner === null && partidas(s).some((p) => p.captura);
}

/** Os lances legais de quem tem a vez (com o safari como lance à parte, quando ele aparece). */
export function lancesLegais(s: BaoState): LanceBao[] {
  if (s.winner !== null) return [];
  const r: LanceBao[] = [];
  for (const { l, captura } of partidas(s)) {
    const sim = simular(s, s.turn, l, captura);
    if (sim.infinito) continue;
    r.push(l);
    if (sim.pediuSafari) {
      const comSafari = simular(s, s.turn, { ...l, safari: true }, captura);
      if (!comSafari.infinito) r.push({ ...l, safari: true });
    }
  }
  return r;
}

/** Se o lance (sem o safari) pede a escolha do safari: aí o tabuleiro pergunta ao jogador. */
export function pedeSafari(s: BaoState, l: LanceBao): boolean {
  const p = partidas(s).find((x) => x.l.k === l.k && x.l.dir === l.dir);
  return !!p && simular(s, s.turn, { ...l, safari: false }, p.captura).pediuSafari;
}

/** Se quem tem a vez tem algum lance (para no primeiro que acha). */
function temLance(s: BaoState): boolean {
  for (const { l, captura } of partidas(s)) if (!simular(s, s.turn, l, captura).infinito) return true;
  return false;
}

/** Faz o lance. Devolve o mesmo estado se ele não vale; devolve também o que aconteceu, para a animação. */
export function jogarComEventos(s: BaoState, l: LanceBao): { estado: BaoState; eventos: EventoBao[] } {
  const p = s.winner === null ? partidas(s).find((x) => x.l.k === l.k && x.l.dir === l.dir) : undefined;
  if (!p) return { estado: s, eventos: [] };
  const j = s.turn;
  const sim = simular(s, j, l, p.captura);
  // um lance infinito não vale, e o safari só vale quando a semeadura pede essa escolha
  if (sim.infinito || (l.safari && !simular(s, j, { ...l, safari: false }, p.captura).pediuSafari)) return { estado: s, eventos: [] };
  const reserva: [number, number] = [s.reserva[0], s.reserva[1]];
  if (s.fase === 'namua') reserva[j]--;
  const fase = s.fase === 'namua' && reserva[0] === 0 && reserva[1] === 0 ? 'mtaji' : s.fase;
  let e: BaoState = { ...s, covas: sim.covas, casa: sim.casa, reserva, fase, turn: outro(j), ultimo: { jogador: j, lance: l, capturou: sim.capturou }, lances: s.lances + 1 };
  if (sim.frenteVaziaDe !== null) e = { ...e, winner: outro(sim.frenteVaziaDe), motivo: 'frente-vazia' };
  else if (!temLance(e)) e = { ...e, winner: j, motivo: 'sem-lance' };
  return { estado: e, eventos: sim.eventos };
}

export const jogar = (s: BaoState, l: LanceBao) => jogarComEventos(s, l).estado;

/** O total de sementes de um jogador (no tabuleiro e na mão). */
export const sementesDe = (s: BaoState, j: JogadorB) => s.covas[j].reduce((a, b) => a + b, 0) + s.reserva[j];
