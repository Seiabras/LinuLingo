/**
 * Motor puro da esgrima de florete, por tempos (sem React). Em cada tempo, os dois atiradores
 * escolhem uma ação ao mesmo tempo, sem ver a do outro; depois o árbitro decide. Fontes e o que foi
 * simplificado: comentário de `src/data/outros-jogos/esportes.ts`.
 *
 * O que vale (simplificado da regra de prioridade do florete, o “direito de ataque”):
 * - Os dois andam primeiro (avançar e recuar mudam a distância); depois saem os golpes.
 * - O ataque (estocada com afundo) alcança até 2 de distância; o contra-ataque (braço estendido,
 *   sem afundar) só alcança 1.
 * - Ataque contra contra-ataque: os dois tocam, mas o ataque tem a prioridade e o ponto é dele.
 * - Contra-ataque contra quem só avançou (o “ataque na preparação”): toque do contra-ataque.
 * - Dois ataques (ou dois contra-ataques) juntos: ataque simultâneo, ninguém marca.
 * - A parada desvia o golpe que chegaria. Quem parou ganha a prioridade no tempo seguinte: a riposta.
 * - O ataque que fica curto (a distância era grande demais) perde a prioridade: ela passa ao outro.
 * - Quem tem a prioridade ganha os toques duplos naquele tempo.
 * Ganha quem chegar a 5 toques, como nas poules da fase de grupos.
 */

export type Acao = 'avancar' | 'recuar' | 'ataque' | 'contra' | 'parada';
export type Lado = 0 | 1;

export const ACOES: Acao[] = ['avancar', 'recuar', 'ataque', 'parada', 'contra'];
export const PISTA = 13; // posições de 0 a 12 (a pista real tem 14 m)
export const ALCANCE_ATAQUE = 2;
export const ALCANCE_CONTRA = 1;
export const TOQUES_PARA_VENCER = 5;
export const INICIO: [number, number] = [4, 8];

export type Veredito =
  | { tipo: 'toque'; para: Lado; por: 'ataque' | 'contra-ataque' | 'riposta' | 'prioridade' | 'preparacao' }
  | { tipo: 'parada'; quem: Lado }
  | { tipo: 'simultaneo' }
  | { tipo: 'curto'; quem: Lado }
  | { tipo: 'nada' };

export interface Estado {
  /** posição de cada um na pista (0 à esquerda); o jogador 0 olha para a direita */
  pos: [number, number];
  toques: [number, number];
  /** quem tem o direito de ataque no próximo tempo (depois de parar ou de o outro ficar curto) */
  prioridade: Lado | null;
  vencedor: Lado | null;
  tempo: number;
  ultimo: { acoes: [Acao, Acao]; veredito: Veredito } | null;
}

export function novoDuelo(): Estado {
  return { pos: [...INICIO], toques: [0, 0], prioridade: null, vencedor: null, tempo: 0, ultimo: null };
}

export function distancia(s: Estado): number {
  return s.pos[1] - s.pos[0];
}

const ofensiva = (a: Acao) => a === 'ataque' || a === 'contra';
const alcance = (a: Acao) => (a === 'ataque' ? ALCANCE_ATAQUE : a === 'contra' ? ALCANCE_CONTRA : 0);
const outro = (l: Lado): Lado => (l === 0 ? 1 : 0);

/** Anda: cada um avança (para o outro) ou recua (para o fundo da sua pista), sem atravessar o outro. */
function mover(pos: [number, number], a: [Acao, Acao]): [number, number] {
  let [p0, p1] = pos;
  if (a[0] === 'recuar') p0 = Math.max(0, p0 - 1);
  if (a[1] === 'recuar') p1 = Math.min(PISTA - 1, p1 + 1);
  if (a[0] === 'avancar') p0 += 1;
  if (a[1] === 'avancar') p1 -= 1;
  // ninguém atravessa o outro: quem avançou para colado (e o outro não recuou) para a um passo
  if (p1 - p0 < 1 && a[1] === 'avancar') p1 = p0 + 1;
  if (p1 - p0 < 1 && a[0] === 'avancar') p0 = p1 - 1;
  return [p0, p1];
}

/** O que o árbitro decide naquele tempo, com as ações dos dois. */
export function arbitrar(s: Estado, a: [Acao, Acao]): { veredito: Veredito; pos: [number, number]; prioridade: Lado | null } {
  const pos = mover(s.pos, a);
  const d = pos[1] - pos[0];
  const chega = [ofensiva(a[0]) && d <= alcance(a[0]), ofensiva(a[1]) && d <= alcance(a[1])] as const;
  const curto = [a[0] === 'ataque' && !chega[0], a[1] === 'ataque' && !chega[1]] as const;
  const pri = s.prioridade;

  // a parada desvia o golpe que chegaria; quem parou ganha a riposta
  for (const l of [0, 1] as const) {
    const o = outro(l);
    if (a[l] === 'parada' && chega[o]) return { veredito: { tipo: 'parada', quem: l }, pos, prioridade: l };
  }
  if (chega[0] && chega[1]) {
    if (pri !== null) return { veredito: { tipo: 'toque', para: pri, por: 'riposta' }, pos, prioridade: null };
    if (a[0] === 'ataque' && a[1] === 'contra') return { veredito: { tipo: 'toque', para: 0, por: 'prioridade' }, pos, prioridade: null };
    if (a[1] === 'ataque' && a[0] === 'contra') return { veredito: { tipo: 'toque', para: 1, por: 'prioridade' }, pos, prioridade: null };
    return { veredito: { tipo: 'simultaneo' }, pos, prioridade: null };
  }
  for (const l of [0, 1] as const) {
    if (!chega[l]) continue;
    const o = outro(l);
    // contra-ataque em quem estava avançando sem atacar: pegou a preparação
    const por = pri === l ? 'riposta' : a[l] === 'ataque' ? 'ataque' : a[o] === 'avancar' ? 'preparacao' : 'contra-ataque';
    return { veredito: { tipo: 'toque', para: l, por }, pos, prioridade: null };
  }
  for (const l of [0, 1] as const) {
    if (curto[l] && !curto[outro(l)]) return { veredito: { tipo: 'curto', quem: l }, pos, prioridade: outro(l) };
  }
  // sem toque: a prioridade de uma riposta só vale por um tempo
  return { veredito: { tipo: 'nada' }, pos, prioridade: null };
}

/** Joga um tempo. Depois de um toque, os dois voltam às linhas de “en garde”. */
export function jogarTempo(s: Estado, acoes: [Acao, Acao]): Estado {
  if (s.vencedor !== null) return s;
  const r = arbitrar(s, acoes);
  const toques: [number, number] = [...s.toques];
  let pos = r.pos;
  let vencedor: Lado | null = null;
  if (r.veredito.tipo === 'toque') {
    toques[r.veredito.para] += 1;
    pos = [...INICIO];
    if (toques[r.veredito.para] >= TOQUES_PARA_VENCER) vencedor = r.veredito.para;
  }
  return { pos, toques, prioridade: r.prioridade, vencedor, tempo: s.tempo + 1, ultimo: { acoes, veredito: r.veredito } };
}

/** As ações que fazem sentido para um lado (não dá para recuar além do fundo da pista). */
export function acoesPossiveis(s: Estado, l: Lado): Acao[] {
  const noFundo = l === 0 ? s.pos[0] === 0 : s.pos[1] === PISTA - 1;
  const colado = distancia(s) <= 1;
  return ACOES.filter((a) => !(a === 'recuar' && noFundo) && !(a === 'avancar' && colado));
}

// ——— o Linu (lado 1) ———

export type NivelLinu = 'facil' | 'medio' | 'dificil';

/**
 * A escolha do Linu. Fácil: quase ao acaso, entre o que faz sentido. Médio: lê a distância e a
 * prioridade. Difícil: também lembra o que o jogador mais faz naquela distância e responde a isso.
 */
export function escolhaLinu(s: Estado, nivel: NivelLinu, historico: { d: number; acao: Acao }[] = [], rand: () => number = Math.random): Acao {
  const possiveis = acoesPossiveis(s, 1);
  const d = distancia(s);
  if (nivel === 'facil' && rand() < 0.6) return possiveis[Math.floor(rand() * possiveis.length)];
  if (s.prioridade === 1 && d <= ALCANCE_ATAQUE) return 'ataque'; // a riposta
  if (nivel === 'dificil') {
    const ali = historico.filter((h) => Math.abs(h.d - d) <= 0).map((h) => h.acao);
    if (ali.length >= 2) {
      const conta = new Map<Acao, number>();
      for (const a of ali) conta.set(a, (conta.get(a) ?? 0) + 1);
      const [maisFeita] = [...conta.entries()].sort((x, y) => y[1] - x[1])[0];
      const resposta = responder(maisFeita, d);
      if (resposta && possiveis.includes(resposta) && rand() < 0.75) return resposta;
    }
  }
  const pesos: Partial<Record<Acao, number>> =
    d >= 4
      ? { avancar: 6, recuar: 1, parada: 1 }
      : d === 3
        ? { avancar: 3, recuar: 2, parada: 2, contra: 1, ataque: 1 }
        : d === 2
          ? { ataque: 4, parada: 3, recuar: 2, contra: 1 }
          : { ataque: 3, parada: 3, contra: 2, recuar: 2 };
  if (s.prioridade === 0) {
    pesos.parada = (pesos.parada ?? 0) + 3;
    pesos.recuar = (pesos.recuar ?? 0) + 2;
  }
  const lista = possiveis.filter((a) => (pesos[a] ?? 0) > 0);
  const total = lista.reduce((t, a) => t + (pesos[a] ?? 0), 0);
  let r = rand() * total;
  for (const a of lista) {
    r -= pesos[a] ?? 0;
    if (r <= 0) return a;
  }
  return lista[0] ?? possiveis[0];
}

/** A melhor resposta a uma ação esperada do jogador. */
function responder(esperada: Acao, d: number): Acao | null {
  if (esperada === 'ataque') return d <= ALCANCE_ATAQUE ? 'parada' : 'recuar';
  if (esperada === 'avancar') return d <= 2 ? 'contra' : d === 3 ? 'ataque' : 'avancar';
  if (esperada === 'parada') return 'avancar';
  if (esperada === 'contra') return 'ataque';
  if (esperada === 'recuar') return 'avancar';
  return null;
}
