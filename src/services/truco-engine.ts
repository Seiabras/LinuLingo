/**
 * O truco paulista, um contra um (você e o Linu), com o baralho francês sem os 8, 9 e 10 (40 cartas).
 * As regras e as fontes estão em `data/outros-jogos/truco.ts`. Só as contas, sem React; cada ação
 * devolve um estado novo (ou o mesmo objeto, quando a ação não vale naquela hora).
 *
 * A partida vai a 12 pontos. Cada mão tem até 3 rodadas (uma carta de cada um), e quem ganha 2 leva
 * a mão, que vale 1 ponto. O truco aumenta o valor: 3, depois 6, 9 e 12.
 */
import { baralho52, embaralhar, type CartaF, type Naipe, type Valor } from './baralho-frances';

export type Jogador = 0 | 1;
const outro = (j: Jogador): Jogador => (j === 0 ? 1 : 0);

/** a ordem das cartas comuns, da mais fraca à mais forte: 4 5 6 7 Q J K A 2 3 */
export const ORDEM: Valor[] = [4, 5, 6, 7, 12, 11, 13, 1, 2, 3];
/** a força das manilhas pelo naipe: ouros (ourinho) < espadas (espadilha) < copas < paus (zap) */
export const NAIPES_MANILHA: Naipe[] = ['ouros', 'espadas', 'copas', 'paus'];
/** os valores da mão, conforme o truco sobe */
export const ESCADA = [1, 3, 6, 9, 12];
export const PONTOS_PARA_GANHAR = 12;

export function baralho40(): CartaF[] {
  return baralho52().filter((c) => c.valor < 8 || c.valor > 10);
}

/** A manilha é a carta seguinte à vira na ordem (depois do 3 vem o 4). */
export function valorDaManilha(vira: CartaF): Valor {
  const i = ORDEM.indexOf(vira.valor);
  return ORDEM[(i + 1) % ORDEM.length]!;
}

/** A força da carta com esta vira: 0 a 9 para as comuns (o naipe não conta), 10 a 13 para as manilhas. */
export function forca(c: CartaF, vira: CartaF): number {
  if (c.valor === valorDaManilha(vira)) return 10 + NAIPES_MANILHA.indexOf(c.naipe);
  return ORDEM.indexOf(c.valor);
}

export type Fase =
  /** alguém joga uma carta (ou pede truco) */
  | 'jogando'
  /** um pediu truco (ou aumentou) e o outro responde */
  | 'pedido'
  /** quem está com 11 pontos olha as cartas e decide se joga a mão (que vale 3) ou corre */
  | 'onze'
  /** as duas cartas da rodada estão na mesa, à mostra, antes de recolher */
  | 'rodada'
  | 'fimMao'
  | 'fimJogo';

export interface ResultadoMao {
  vencedor: Jogador | null;
  pontos: number;
  /** 'rodadas' (ganhou nas cartas), 'correu' (o outro fugiu do truco ou da mão de onze), 'empate' */
  motivo: 'rodadas' | 'correu' | 'empate';
}

export interface EstadoTruco {
  placar: [number, number];
  /** quem começou esta mão (alterna a cada mão) */
  pe: Jogador;
  maos: [CartaF[], CartaF[]];
  vira: CartaF;
  /** as cartas jogadas nesta rodada, na ordem */
  mesa: { j: Jogador; carta: CartaF }[];
  /** o resultado de cada rodada já jogada nesta mão */
  rodadas: (Jogador | 'empate')[];
  vez: Jogador;
  /** quanto a mão vale agora */
  valor: number;
  /** o pedido de truco em aberto: quem pediu e quanto vale se o outro aceitar */
  pedido: { de: Jogador; valor: number } | null;
  /** quem aumentou por último (não pode aumentar de novo até o outro aumentar) */
  ultimoAumento: Jogador | null;
  /** a mão de onze (quem está com 11) ou de ferro (os dois com 11, sem olhar as cartas) */
  onze: Jogador | 'ferro' | null;
  fase: Fase;
  resultado: ResultadoMao | null;
  vencedor: Jogador | null;
}

/** Dá as cartas de uma mão nova: 3 para cada um e a vira. */
export function darMao(placar: [number, number], pe: Jogador, rng: () => number): EstadoTruco {
  const b = embaralhar(baralho40(), rng);
  const onze: EstadoTruco['onze'] = placar[0] === 11 && placar[1] === 11 ? 'ferro' : placar[0] === 11 ? 0 : placar[1] === 11 ? 1 : null;
  return {
    placar,
    pe,
    maos: [b.slice(0, 3), b.slice(3, 6)],
    vira: b[6]!,
    mesa: [],
    rodadas: [],
    vez: pe,
    valor: 1,
    pedido: null,
    ultimoAumento: null,
    onze,
    fase: onze === 0 || onze === 1 ? 'onze' : 'jogando',
    resultado: null,
    vencedor: null,
  };
}

export const novoJogo = (pe: Jogador, rng: () => number) => darMao([0, 0], pe, rng);

/** O próximo valor do truco a partir do valor atual (3, 6, 9, 12), ou null se já vale 12. */
export function proximoValor(valor: number): number | null {
  const i = ESCADA.indexOf(valor);
  return i >= 0 && i < ESCADA.length - 1 ? ESCADA[i + 1]! : null;
}

/** Se `j` pode pedir truco (ou aumentar) agora. Na mão de onze e na de ferro, ninguém truca. */
export function podePedir(s: EstadoTruco, j: Jogador): boolean {
  if (s.fase !== 'jogando' || s.vez !== j || s.onze !== null) return false;
  if (s.ultimoAumento === j) return false;
  return proximoValor(s.valor) !== null;
}

export function pedirTruco(s: EstadoTruco, j: Jogador): EstadoTruco {
  if (!podePedir(s, j)) return s;
  return { ...s, fase: 'pedido', pedido: { de: j, valor: proximoValor(s.valor)! }, ultimoAumento: j };
}

/**
 * A resposta ao truco: aceitar (a mão passa a valer o pedido), correr (quem pediu leva o que a mão
 * valia antes) ou aumentar (pede o valor seguinte; agora quem pediu é que responde).
 */
export function responder(s: EstadoTruco, j: Jogador, r: 'aceitar' | 'correr' | 'aumentar'): EstadoTruco {
  if (s.fase !== 'pedido' || !s.pedido || s.pedido.de === j) return s;
  if (r === 'aceitar') return { ...s, fase: 'jogando', valor: s.pedido.valor, pedido: null };
  if (r === 'correr') return fecharMao(s, { vencedor: s.pedido.de, pontos: s.valor, motivo: 'correu' });
  const mais = proximoValor(s.pedido.valor);
  if (mais === null) return s;
  return { ...s, valor: s.pedido.valor, pedido: { de: j, valor: mais }, ultimoAumento: j };
}

/** Na mão de onze, quem tem 11 decide: jogar (a mão vale 3) ou correr (o outro ganha 1). */
export function decidirOnze(s: EstadoTruco, jogar: boolean): EstadoTruco {
  if (s.fase !== 'onze' || (s.onze !== 0 && s.onze !== 1)) return s;
  if (!jogar) return fecharMao(s, { vencedor: outro(s.onze), pontos: 1, motivo: 'correu' });
  return { ...s, fase: 'jogando', valor: 3 };
}

/** Joga a carta `idx` da mão de `j`. Com a segunda carta, a rodada fica à mostra (fase 'rodada'). */
export function jogarCarta(s: EstadoTruco, j: Jogador, idx: number): EstadoTruco {
  if (s.fase !== 'jogando' || s.vez !== j) return s;
  const carta = s.maos[j][idx];
  if (!carta) return s;
  const maos: [CartaF[], CartaF[]] = [...s.maos];
  maos[j] = maos[j].filter((_, i) => i !== idx);
  const mesa = [...s.mesa, { j, carta }];
  if (mesa.length < 2) return { ...s, maos, mesa, vez: outro(j) };
  return { ...s, maos, mesa, fase: 'rodada' };
}

/** Quem ganhou a rodada da mesa (ou empate). */
export function vencedorDaRodada(s: Pick<EstadoTruco, 'mesa' | 'vira'>): Jogador | 'empate' {
  const [a, b] = s.mesa;
  if (!a || !b) return 'empate';
  const fa = forca(a.carta, s.vira);
  const fb = forca(b.carta, s.vira);
  return fa === fb ? 'empate' : fa > fb ? a.j : b.j;
}

/**
 * Quem leva a mão pelas rodadas, ou `undefined` se ainda não está decidido. Ganha quem vence 2.
 * Empate na primeira: decide a segunda (e, se empatar de novo, a terceira). Empate na segunda ou na
 * terceira: leva quem ganhou a primeira. As três empatadas: ninguém marca (`null`).
 */
export function vencedorDaMao(rodadas: (Jogador | 'empate')[]): Jogador | null | undefined {
  const [r1, r2, r3] = rodadas;
  for (const j of [0, 1] as Jogador[]) if (rodadas.filter((r) => r === j).length >= 2) return j;
  if (r2 === undefined) return undefined;
  if (r1 === 'empate' && r2 !== 'empate') return r2;
  if (r1 !== 'empate' && r2 === 'empate') return r1;
  if (r3 === undefined) return undefined;
  if (r1 === 'empate' && r2 === 'empate') return r3 === 'empate' ? null : r3;
  // r1 e r2 com vencedores diferentes: a terceira decide; empatada, vale a primeira
  return r3 === 'empate' ? (r1 as Jogador) : r3;
}

/** Recolhe as cartas da rodada: começa a próxima rodada (quem ganhou joga primeiro) ou fecha a mão. */
export function recolher(s: EstadoTruco): EstadoTruco {
  if (s.fase !== 'rodada') return s;
  const r = vencedorDaRodada(s);
  const rodadas = [...s.rodadas, r];
  const v = vencedorDaMao(rodadas);
  if (v !== undefined) return fecharMao({ ...s, rodadas }, v === null ? { vencedor: null, pontos: 0, motivo: 'empate' } : { vencedor: v, pontos: s.valor, motivo: 'rodadas' });
  // no empate, quem abriu a rodada empatada abre a próxima
  const abre = r === 'empate' ? s.mesa[0]!.j : r;
  return { ...s, rodadas, mesa: [], vez: abre, fase: 'jogando' };
}

function fecharMao(s: EstadoTruco, resultado: ResultadoMao): EstadoTruco {
  const placar: [number, number] = [...s.placar];
  if (resultado.vencedor !== null) placar[resultado.vencedor] = Math.min(PONTOS_PARA_GANHAR, placar[resultado.vencedor] + resultado.pontos);
  const vencedor = placar[0] >= PONTOS_PARA_GANHAR ? 0 : placar[1] >= PONTOS_PARA_GANHAR ? 1 : null;
  return { ...s, placar, pedido: null, resultado, vencedor, fase: vencedor !== null ? 'fimJogo' : 'fimMao' };
}

/** A mão seguinte: quem não começou esta começa a próxima. */
export function proximaMao(s: EstadoTruco, rng: () => number): EstadoTruco {
  if (s.fase !== 'fimMao') return s;
  return darMao(s.placar, outro(s.pe), rng);
}

// ---------- o Linu ----------

/** A força das cartas na mão, de 0 (só 4) a 1 (só manilha forte). */
function forcaDaMao(cartas: CartaF[], vira: CartaF): number {
  if (!cartas.length) return 0;
  return cartas.reduce((t, c) => t + forca(c, vira), 0) / (cartas.length * 13);
}

/**
 * A chance (bem simples) de o Linu levar a mão daqui para a frente: as rodadas que ele já tem, as
 * cartas que sobram e a carta do adversário na mesa, se houver.
 */
function chanceDoLinu(s: EstadoTruco, j: Jogador): number {
  const meus = s.rodadas.filter((r) => r === j).length;
  const deles = s.rodadas.filter((r) => r === outro(j)).length;
  let p = 0.25 + forcaDaMao(s.maos[j], s.vira) * 0.9 + meus * 0.25 - deles * 0.25;
  const naMesa = s.mesa.find((m) => m.j !== j);
  if (naMesa) {
    const melhor = Math.max(...s.maos[j].map((c) => forca(c, s.vira)));
    p += melhor > forca(naMesa.carta, s.vira) ? 0.2 : -0.25;
  }
  return Math.max(0, Math.min(1, p));
}

/** Qual carta o Linu joga: a mais fraca que ganha da carta na mesa (ou a mais fraca de todas); abrindo, a do meio. */
export function cartaDoLinu(s: EstadoTruco, j: Jogador): number {
  const mao = s.maos[j];
  const ordem = mao.map((c, i) => ({ i, f: forca(c, s.vira) })).sort((a, b) => a.f - b.f);
  const naMesa = s.mesa.find((m) => m.j !== j);
  if (naMesa) {
    const alvo = forca(naMesa.carta, s.vira);
    const ganha = ordem.find((x) => x.f > alvo);
    return (ganha ?? ordem[0]!).i;
  }
  // abrindo: na primeira rodada, guarda a melhor; depois de ganhar uma, joga a mais forte para fechar
  if (s.rodadas.includes(j) || s.rodadas[0] === 'empate') return ordem[ordem.length - 1]!.i;
  return ordem[Math.floor((ordem.length - 1) / 2)]!.i;
}

/** Se o Linu pede truco agora (com mão boa, ou blefando de vez em quando). */
export function linuPedeTruco(s: EstadoTruco, j: Jogador, rng: () => number): boolean {
  if (!podePedir(s, j)) return false;
  const p = chanceDoLinu(s, j);
  return p > 0.72 || rng() < 0.06;
}

/** A resposta do Linu a um truco. */
export function respostaDoLinu(s: EstadoTruco, j: Jogador, rng: () => number): 'aceitar' | 'correr' | 'aumentar' {
  const p = chanceDoLinu(s, j);
  const podeAumentar = !!s.pedido && proximoValor(s.pedido.valor) !== null && s.ultimoAumento !== j;
  if (podeAumentar && (p > 0.85 || (p > 0.6 && rng() < 0.1))) return 'aumentar';
  if (p >= 0.45 || rng() < 0.12) return 'aceitar';
  return 'correr';
}

/** Na mão de onze, o Linu joga se a mão for razoável. */
export const linuJogaOnze = (s: EstadoTruco, j: Jogador) => forcaDaMao(s.maos[j], s.vira) >= 0.42;

export const NOME_NAIPE_MANILHA: Record<Naipe, string> = { paus: 'zap', copas: 'copas', espadas: 'espadilha', ouros: 'ourinho' };
