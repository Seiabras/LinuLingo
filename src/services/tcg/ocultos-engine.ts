/**
 * BICHOS OCULTOS: o jogo de cartas do LinuLingo que usa as regras principais do Yu-Gi-Oh! Trading
 * Card Game (Konami, 1999, a partir do mangá de Kazuki Takahashi), com cartas nossas. Só as regras e
 * a mecânica: nenhum nome, termo, texto ou desenho do jogo homenageado.
 *
 * O que vem das regras principais: 8000 de vida; 5 cartas na mão no começo; quem começa não compra
 * nem ataca no 1º turno; 1 chamada por turno (com o bicho de frente, em ataque, ou virado, em
 * defesa); bicho de 5 ou 6 estrelas pede 1 sacrifício, de 7 ou mais pede 2; até 5 bichos e 5 cartas
 * baixadas no campo; a batalha de ATQ contra ATQ (o mais fraco cai, e o dono dele perde a diferença;
 * empate derruba os dois) e de ATQ contra DEF (o defensor cai sem dano; se a DEF for maior, quem
 * atacou perde a diferença); o bicho virado vira para cima quando é atacado; mudar a posição uma vez
 * por turno, não no turno em que entrou; ataque direto só com o campo do outro vazio; magias na fase
 * principal; armadilhas baixadas antes, que só disparam a partir do turno seguinte; mão de no máximo
 * 6 no fim do turno; perde quem zera a vida ou não tem carta para comprar.
 *
 * O que ficou de fora, para simplificar (a ficha diz): os efeitos de bicho, a fusão, o ritual, o
 * baralho extra, a cadeia de respostas (aqui cada armadilha resolve na hora), as magias rápidas, de
 * campo e contínuas, baixar magia virada, e as fases de espera e final como momentos de agir.
 */
import { TEMAS_TCG, bichoDe, embaralhar, expandir, type Bioma, type Rng } from './comum';

export type Lado = 0 | 1;
export type EfeitoMagia = 'cesto' | 'fonte' | 'raio' | 'vendaval' | 'forca';
export type EfeitoArmadilha = 'buraco' | 'espinhos' | 'neblina';

export interface CartaO {
  id: string;
  nome: string;
  tipo: 'bicho' | 'magia' | 'armadilha';
  bioma: Bioma;
  estrelas?: number;
  atq?: number;
  def?: number;
  efeito?: EfeitoMagia | EfeitoArmadilha;
  texto: string;
  /** o bicho desenhado na carta (id de `BICHOS`) */
  arte?: string;
}

const bicho = (id: string, bioma: Bioma, estrelas: number, atq: number, def: number): CartaO => ({ id, nome: bichoDe(id).nome, tipo: 'bicho', bioma, estrelas, atq, def, texto: '', arte: id });
const magia = (id: EfeitoMagia, nome: string, bioma: Bioma, texto: string): CartaO => ({ id, nome, tipo: 'magia', bioma, efeito: id, texto });
const armadilha = (id: EfeitoArmadilha, nome: string, bioma: Bioma, texto: string): CartaO => ({ id, nome, tipo: 'armadilha', bioma, efeito: id, texto });

export const CARTAS_O: Record<string, CartaO> = Object.fromEntries(
  [
    magia('cesto', 'Cesto de frutas', 'mata', 'Compre 2 cartas.'),
    magia('fonte', 'Fonte de água', 'gelo', 'Você ganha 1000 de vida.'),
    magia('raio', 'Raio na tempestade', 'montanha', 'Destrua 1 bicho do outro.'),
    magia('vendaval', 'Vendaval', 'montanha', 'Destrua 1 carta baixada do outro.'),
    magia('forca', 'Força da manada', 'savana', 'Um bicho seu, de frente, ganha 700 de ATQ até o fim do turno.'),
    armadilha('buraco', 'Buraco escondido', 'mata', 'Quando o outro chama um bicho de frente com 1000 de ATQ ou mais: destrua esse bicho.'),
    armadilha('espinhos', 'Cerca de espinhos', 'savana', 'Quando um bicho do outro ataca: destrua o atacante.'),
    armadilha('neblina', 'Neblina', 'gelo', 'Quando um bicho do outro ataca: o ataque para e a batalha acaba.'),
    // Gelo do Sul: os Amigos do Linu, de DEF alta
    bicho('kiko', 'gelo', 1, 300, 500),
    bicho('filhote-pinguim', 'gelo', 2, 500, 1200),
    bicho('dede', 'gelo', 2, 800, 1000),
    bicho('floco', 'gelo', 2, 900, 600),
    bicho('pipo', 'gelo', 3, 1300, 1100),
    bicho('topete', 'gelo', 3, 1300, 900),
    bicho('wendel', 'gelo', 4, 1500, 1900),
    bicho('duque', 'gelo', 4, 1700, 1500),
    bicho('vento', 'gelo', 4, 1800, 1000),
    bicho('malhada', 'gelo', 5, 2100, 1500),
    bicho('tobias', 'gelo', 6, 2100, 2500),
    bicho('bolota', 'gelo', 6, 1800, 2700),
    bicho('jubi', 'gelo', 8, 2800, 3000),
    // Mata Viva: muitos e baratos
    bicho('formiga', 'mata', 1, 500, 300),
    bicho('girino', 'mata', 1, 200, 500),
    bicho('lagarta', 'mata', 1, 300, 700),
    bicho('mico', 'mata', 2, 1000, 500),
    bicho('sapo', 'mata', 3, 1100, 1200),
    bicho('borboleta', 'mata', 3, 1300, 700),
    bicho('arara', 'mata', 4, 1700, 1000),
    bicho('capivara', 'mata', 4, 1400, 1800),
    bicho('tamandua', 'mata', 4, 1800, 1300),
    bicho('onca', 'mata', 6, 2400, 1500),
    bicho('sucuri', 'mata', 7, 2600, 2300),
    // Céu e Montanha: voadores e truques
    bicho('colibri', 'montanha', 1, 400, 300),
    bicho('chinchila', 'montanha', 2, 600, 1100),
    bicho('filhote-condor', 'montanha', 2, 800, 700),
    bicho('vicunha', 'montanha', 3, 1300, 900),
    bicho('panda', 'montanha', 3, 1100, 1400),
    bicho('lhama', 'montanha', 4, 1400, 1700),
    bicho('leopardo-neves', 'montanha', 4, 1900, 1000),
    bicho('iaque', 'montanha', 5, 1800, 2300),
    bicho('aguia', 'montanha', 5, 2200, 1200),
    bicho('urso-oculos', 'montanha', 6, 2300, 2000),
    bicho('condor', 'montanha', 7, 2700, 1800),
    // Savana: a manada grande
    bicho('suricato', 'savana', 1, 400, 400),
    bicho('filhote-leao', 'savana', 2, 900, 600),
    bicho('hiena', 'savana', 3, 1400, 800),
    bicho('zebra', 'savana', 3, 1200, 1100),
    bicho('avestruz', 'savana', 3, 1400, 700),
    bicho('filhote-elefante', 'savana', 3, 800, 1600),
    bicho('gnu', 'savana', 4, 1700, 1300),
    bicho('girafa', 'savana', 4, 1500, 1800),
    bicho('leao', 'savana', 6, 2400, 1600),
    bicho('rinoceronte', 'savana', 6, 2200, 2100),
    bicho('elefante', 'savana', 8, 3000, 2800),
  ].map((c) => [c.id, c]),
);

export type BaralhoO = Bioma;

export const BARALHOS_O: Record<BaralhoO, { nome: string; sobre: string; lista: Record<string, number> }> = {
  gelo: {
    ...TEMAS_TCG.gelo,
    lista: { kiko: 1, 'filhote-pinguim': 2, dede: 3, floco: 2, pipo: 3, topete: 2, wendel: 3, duque: 3, vento: 2, malhada: 1, tobias: 1, bolota: 2, jubi: 1, cesto: 2, fonte: 2, raio: 2, vendaval: 1, forca: 1, buraco: 2, espinhos: 2, neblina: 2 },
  },
  mata: {
    ...TEMAS_TCG.mata,
    lista: { formiga: 3, girino: 1, lagarta: 2, mico: 3, sapo: 2, borboleta: 3, arara: 3, capivara: 3, tamandua: 3, onca: 2, sucuri: 1, cesto: 2, forca: 3, raio: 1, vendaval: 1, buraco: 2, espinhos: 3, neblina: 2 },
  },
  montanha: {
    ...TEMAS_TCG.montanha,
    lista: { colibri: 3, chinchila: 2, 'filhote-condor': 2, vicunha: 3, panda: 3, lhama: 2, 'leopardo-neves': 3, iaque: 2, aguia: 2, 'urso-oculos': 1, condor: 1, cesto: 2, fonte: 1, raio: 1, vendaval: 2, forca: 2, buraco: 3, espinhos: 3, neblina: 2 },
  },
  savana: {
    ...TEMAS_TCG.savana,
    lista: { suricato: 1, 'filhote-leao': 2, hiena: 3, zebra: 3, avestruz: 2, 'filhote-elefante': 2, gnu: 4, girafa: 3, leao: 2, rinoceronte: 2, elefante: 1, cesto: 2, forca: 2, raio: 2, vendaval: 1, fonte: 1, buraco: 2, espinhos: 3, neblina: 2 },
  },
};

export const VIDA = 8000;
export const MAO_INICIAL = 5;
export const MAO_MAX = 6;
export const ZONAS = 5;
export const FORCA_BONUS = 700;

export const cartaO = (id: string): CartaO => {
  const c = CARTAS_O[id];
  if (!c) throw new Error(`carta desconhecida: ${id}`);
  return c;
};
/** quantos sacrifícios o bicho pede: 0 até 4 estrelas, 1 com 5 ou 6, 2 com 7 ou mais */
export const sacrificiosDe = (id: string) => {
  const n = cartaO(id).estrelas ?? 0;
  return n >= 7 ? 2 : n >= 5 ? 1 : 0;
};

// ── o estado ────────────────────────────────────────────────────────────────────────────────────

export interface Carta {
  uid: number;
  carta: string;
}
export interface BichoO extends Carta {
  posicao: 'ataque' | 'defesa';
  /** virado para baixo (só em defesa): o outro não sabe quem é */
  virado: boolean;
  entrou: number;
  /** o turno da última mudança de posição */
  mudou: number;
  atacou: boolean;
  bonus: number;
}
export interface Baixada extends Carta {
  /** o turno em que foi baixada (a armadilha só dispara a partir do turno seguinte) */
  posta: number;
}

export interface LadoO {
  baralhoId: BaralhoO;
  vida: number;
  baralho: string[];
  mao: Carta[];
  bichos: BichoO[];
  baixadas: Baixada[];
  descarte: string[];
  chamou: boolean;
}

export type Fase = 'principal1' | 'batalha' | 'principal2' | 'resposta';

/** a armadilha que pode disparar agora: quem pode responder, e a que */
export interface Gatilho {
  lado: Lado;
  tipo: 'chamada' | 'ataque';
  /** o bicho chamado ou o atacante */
  bicho: number;
  /** no ataque: o bicho atacado (null = ataque direto) */
  alvo?: number | null;
  /** a fase para onde volta depois */
  volta: 'principal1' | 'principal2' | 'batalha';
}

export type AlvoO = { lado: Lado; uid: number };

export type EventoO =
  | { t: 'turno'; lado: Lado }
  | { t: 'compra'; lado: Lado }
  | { t: 'chamou'; lado: Lado; carta: string | null; sacrificios: number }
  | { t: 'magia'; lado: Lado; carta: string }
  | { t: 'baixou'; lado: Lado }
  | { t: 'armadilha'; lado: Lado; carta: string }
  | { t: 'posicao'; lado: Lado; carta: string; posicao: 'ataque' | 'defesa' }
  | { t: 'ataca'; lado: Lado; carta: string; alvo: string | null }
  | { t: 'revelou'; lado: Lado; carta: string }
  | { t: 'vida'; lado: Lado; n: number }
  | { t: 'caiu'; lado: Lado; uid: number; carta: string }
  | { t: 'destruiu'; lado: Lado; carta: string }
  | { t: 'descartou'; lado: Lado; carta: string }
  | { t: 'semCarta'; lado: Lado };

export interface EstadoO {
  lados: [LadoO, LadoO];
  vez: Lado;
  turno: number;
  fase: Fase;
  gatilho: Gatilho | null;
  vencedor: Lado | null;
  proximoUid: number;
  eventos: EventoO[];
}

export type AcaoO =
  | { t: 'chamar'; uid: number; modo: 'ataque' | 'virado'; sacrificios: number[] }
  | { t: 'magia'; uid: number; alvo?: AlvoO }
  | { t: 'baixar'; uid: number }
  | { t: 'posicao'; uid: number }
  | { t: 'batalha' }
  | { t: 'atacar'; uid: number; alvo: number | null }
  | { t: 'responder'; uid: number | null }
  | { t: 'fimBatalha' }
  | { t: 'fim' };

export class JogadaInvalidaO extends Error {}

export const outro = (l: Lado): Lado => (l === 0 ? 1 : 0);

export function quemAge(e: EstadoO): Lado {
  if (e.fase === 'resposta') return e.gatilho!.lado;
  return e.vez;
}

export function novaPartidaO(b0: BaralhoO, b1: BaralhoO, rng: Rng, comeca: Lado = 0): EstadoO {
  let uid = 1;
  const lado = (b: BaralhoO): LadoO => {
    const baralho = embaralhar(expandir(BARALHOS_O[b].lista), rng);
    const mao = baralho.splice(0, MAO_INICIAL).map((carta) => ({ uid: uid++, carta }));
    return { baralhoId: b, vida: VIDA, baralho, mao, bichos: [], baixadas: [], descarte: [], chamou: false };
  };
  // quem começa não compra no 1º turno
  return { lados: [lado(b0), lado(b1)], vez: comeca, turno: 1, fase: 'principal1', gatilho: null, vencedor: null, proximoUid: uid, eventos: [{ t: 'turno', lado: comeca }] };
}

// ── as contas ───────────────────────────────────────────────────────────────────────────────────

export const atqDe = (b: BichoO) => (cartaO(b.carta).atq ?? 0) + b.bonus;
export const defDe = (b: BichoO) => cartaO(b.carta).def ?? 0;

const ehPrincipal = (f: Fase) => f === 'principal1' || f === 'principal2';

export const podeMudar = (e: EstadoO, b: BichoO) => b.entrou < e.turno && b.mudou < e.turno && !b.atacou;
export const podeAtacarO = (e: EstadoO, b: BichoO) => e.fase === 'batalha' && b.posicao === 'ataque' && !b.virado && !b.atacou && e.turno > 1;

/** as armadilhas prontas de um lado para um tipo de gatilho */
export function armadilhasProntas(e: EstadoO, l: Lado, g: Gatilho): Baixada[] {
  const L = e.lados[l];
  return L.baixadas.filter((x) => {
    const c = cartaO(x.carta);
    if (c.tipo !== 'armadilha' || x.posta >= e.turno) return false;
    if (g.tipo === 'ataque') return c.efeito === 'espinhos' || c.efeito === 'neblina';
    const chamado = e.lados[outro(l)].bichos.find((b) => b.uid === g.bicho);
    return c.efeito === 'buraco' && !!chamado && !chamado.virado && atqDe(chamado) >= 1000;
  });
}

/** as combinações de sacrifício para um bicho (até 2 de 5) */
function combinacoes(uids: number[], k: number): number[][] {
  if (k === 0) return [[]];
  if (k === 1) return uids.map((u) => [u]);
  const out: number[][] = [];
  for (let i = 0; i < uids.length; i++) for (let j = i + 1; j < uids.length; j++) out.push([uids[i]!, uids[j]!]);
  return out;
}

/** Todas as jogadas que dá para fazer agora. */
export function lancesO(e: EstadoO): AcaoO[] {
  if (e.vencedor !== null) return [];
  const quem = quemAge(e);
  const L = e.lados[quem];
  const O = e.lados[outro(quem)];
  const out: AcaoO[] = [];
  if (e.fase === 'resposta') {
    for (const x of armadilhasProntas(e, quem, e.gatilho!)) out.push({ t: 'responder', uid: x.uid });
    out.push({ t: 'responder', uid: null });
    return out;
  }
  if (ehPrincipal(e.fase)) {
    for (const m of L.mao) {
      const c = cartaO(m.carta);
      if (c.tipo === 'bicho') {
        if (L.chamou) continue;
        const k = sacrificiosDe(m.carta);
        if (L.bichos.length < k) continue;
        for (const sac of combinacoes(L.bichos.map((b) => b.uid), k)) {
          if (L.bichos.length - sac.length >= ZONAS) continue;
          out.push({ t: 'chamar', uid: m.uid, modo: 'ataque', sacrificios: sac });
          out.push({ t: 'chamar', uid: m.uid, modo: 'virado', sacrificios: sac });
        }
      } else if (c.tipo === 'armadilha') {
        if (L.baixadas.length < ZONAS) out.push({ t: 'baixar', uid: m.uid });
      } else {
        if (c.efeito === 'raio') for (const b of O.bichos) out.push({ t: 'magia', uid: m.uid, alvo: { lado: outro(quem), uid: b.uid } });
        else if (c.efeito === 'vendaval') for (const b of O.baixadas) out.push({ t: 'magia', uid: m.uid, alvo: { lado: outro(quem), uid: b.uid } });
        else if (c.efeito === 'forca') for (const b of L.bichos) !b.virado && out.push({ t: 'magia', uid: m.uid, alvo: { lado: quem, uid: b.uid } });
        else if (c.efeito === 'cesto') L.baralho.length >= 2 && out.push({ t: 'magia', uid: m.uid });
        else out.push({ t: 'magia', uid: m.uid });
      }
    }
    for (const b of L.bichos) if (podeMudar(e, b)) out.push({ t: 'posicao', uid: b.uid });
    if (e.fase === 'principal1' && e.turno > 1) out.push({ t: 'batalha' });
    out.push({ t: 'fim' });
    return out;
  }
  // batalha
  for (const b of L.bichos)
    if (podeAtacarO(e, b)) {
      if (O.bichos.length === 0) out.push({ t: 'atacar', uid: b.uid, alvo: null });
      else for (const x of O.bichos) out.push({ t: 'atacar', uid: b.uid, alvo: x.uid });
    }
  out.push({ t: 'fimBatalha' });
  out.push({ t: 'fim' });
  return out;
}

const igual = (a: AcaoO, b: AcaoO) => JSON.stringify(a) === JSON.stringify(b);
export const ehValidaO = (e: EstadoO, a: AcaoO) => e.vencedor === null && lancesO(e).some((x) => igual(x, a) || (x.t === 'chamar' && a.t === 'chamar' && x.uid === a.uid && x.modo === a.modo && [...x.sacrificios].sort().join() === [...a.sacrificios].sort().join()));

// ── aplicar ─────────────────────────────────────────────────────────────────────────────────────

function tirarDaMao(L: LadoO, uid: number): Carta {
  const i = L.mao.findIndex((m) => m.uid === uid);
  return L.mao.splice(i, 1)[0]!;
}

export function aplicarO(estado: EstadoO, a: AcaoO): EstadoO {
  if (!ehValidaO(estado, a)) throw new JogadaInvalidaO(`jogada inválida: ${JSON.stringify(a)}`);
  const e: EstadoO = structuredClone(estado);
  e.eventos = [];
  const quem = quemAge(e);
  const L = e.lados[quem];
  switch (a.t) {
    case 'chamar': {
      for (const u of a.sacrificios) destruirBicho(e, quem, u, false);
      const m = tirarDaMao(L, a.uid);
      const virado = a.modo === 'virado';
      L.bichos.push({ ...m, posicao: virado ? 'defesa' : 'ataque', virado, entrou: e.turno, mudou: -1, atacou: false, bonus: 0 });
      L.chamou = true;
      e.eventos.push({ t: 'chamou', lado: quem, carta: virado ? null : m.carta, sacrificios: a.sacrificios.length });
      abrirResposta(e, { lado: outro(quem), tipo: 'chamada', bicho: m.uid, volta: e.fase as 'principal1' | 'principal2' });
      break;
    }
    case 'magia': {
      const m = tirarDaMao(L, a.uid);
      const c = cartaO(m.carta);
      e.eventos.push({ t: 'magia', lado: quem, carta: m.carta });
      L.descarte.push(m.carta);
      if (c.efeito === 'cesto') comprar(e, quem, 2);
      else if (c.efeito === 'fonte') mudarVida(e, quem, 1000);
      else if (c.efeito === 'raio') destruirBicho(e, a.alvo!.lado, a.alvo!.uid, true);
      else if (c.efeito === 'vendaval') {
        const D = e.lados[a.alvo!.lado];
        const x = D.baixadas.find((y) => y.uid === a.alvo!.uid)!;
        D.baixadas = D.baixadas.filter((y) => y.uid !== x.uid);
        D.descarte.push(x.carta);
        e.eventos.push({ t: 'destruiu', lado: a.alvo!.lado, carta: x.carta });
      } else if (c.efeito === 'forca') L.bichos.find((b) => b.uid === a.alvo!.uid)!.bonus += FORCA_BONUS;
      break;
    }
    case 'baixar': {
      const m = tirarDaMao(L, a.uid);
      L.baixadas.push({ ...m, posta: e.turno });
      e.eventos.push({ t: 'baixou', lado: quem });
      break;
    }
    case 'posicao': {
      const b = L.bichos.find((x) => x.uid === a.uid)!;
      // o virado vira para cima em ataque; o de frente troca entre ataque e defesa
      if (b.virado) {
        b.virado = false;
        b.posicao = 'ataque';
      } else b.posicao = b.posicao === 'ataque' ? 'defesa' : 'ataque';
      b.mudou = e.turno;
      e.eventos.push({ t: 'posicao', lado: quem, carta: b.carta, posicao: b.posicao });
      break;
    }
    case 'batalha':
      e.fase = 'batalha';
      break;
    case 'atacar': {
      const at = L.bichos.find((x) => x.uid === a.uid)!;
      at.atacou = true;
      const alvo = a.alvo === null ? null : e.lados[outro(quem)].bichos.find((x) => x.uid === a.alvo)!;
      e.eventos.push({ t: 'ataca', lado: quem, carta: at.carta, alvo: alvo ? (alvo.virado ? null : alvo.carta) : null });
      abrirResposta(e, { lado: outro(quem), tipo: 'ataque', bicho: at.uid, alvo: a.alvo, volta: 'batalha' }) || batalha(e, at.uid, a.alvo);
      break;
    }
    case 'responder': {
      const g = e.gatilho!;
      e.gatilho = null;
      e.fase = g.volta;
      let parou = false;
      if (a.uid !== null) {
        const x = L.baixadas.find((y) => y.uid === a.uid)!;
        L.baixadas = L.baixadas.filter((y) => y.uid !== x.uid);
        L.descarte.push(x.carta);
        e.eventos.push({ t: 'armadilha', lado: quem, carta: x.carta });
        const ef = cartaO(x.carta).efeito;
        if (ef === 'buraco' || ef === 'espinhos') {
          destruirBicho(e, outro(quem), g.bicho, true);
          parou = true;
        } else if (ef === 'neblina') {
          parou = true;
          e.fase = 'principal2';
        }
      }
      if (g.tipo === 'ataque' && !parou) batalha(e, g.bicho, g.alvo ?? null);
      break;
    }
    case 'fimBatalha':
      e.fase = 'principal2';
      break;
    case 'fim':
      fimDoTurno(e);
      break;
  }
  return e;
}

/** abre a janela de resposta se o outro tem armadilha pronta para isso; diz se abriu */
function abrirResposta(e: EstadoO, g: Gatilho): boolean {
  if (armadilhasProntas(e, g.lado, g).length === 0) return false;
  e.gatilho = g;
  e.fase = 'resposta';
  return true;
}

function comprar(e: EstadoO, l: Lado, n: number): boolean {
  const L = e.lados[l];
  for (let k = 0; k < n; k++) {
    const c = L.baralho.shift();
    if (!c) {
      e.eventos.push({ t: 'semCarta', lado: l });
      e.vencedor = outro(l);
      return false;
    }
    L.mao.push({ uid: e.proximoUid++, carta: c });
    e.eventos.push({ t: 'compra', lado: l });
  }
  return true;
}

function mudarVida(e: EstadoO, l: Lado, n: number) {
  if (n === 0) return;
  e.lados[l].vida = Math.max(0, e.lados[l].vida + n);
  e.eventos.push({ t: 'vida', lado: l, n });
  if (e.lados[l].vida <= 0 && e.vencedor === null) e.vencedor = outro(l);
}

function destruirBicho(e: EstadoO, l: Lado, uid: number, avisar: boolean) {
  const L = e.lados[l];
  const b = L.bichos.find((x) => x.uid === uid);
  if (!b) return;
  L.bichos = L.bichos.filter((x) => x.uid !== uid);
  L.descarte.push(b.carta);
  if (avisar) e.eventos.push({ t: 'caiu', lado: l, uid, carta: b.carta });
}

/** a batalha: ATQ contra ATQ, ou ATQ contra DEF */
function batalha(e: EstadoO, atUid: number, alvoUid: number | null) {
  const atk = e.vez;
  const dfd = outro(atk);
  const at = e.lados[atk].bichos.find((x) => x.uid === atUid);
  if (!at) return;
  if (alvoUid === null) {
    mudarVida(e, dfd, -atqDe(at));
    return;
  }
  const d = e.lados[dfd].bichos.find((x) => x.uid === alvoUid);
  if (!d) return;
  if (d.virado) {
    d.virado = false;
    e.eventos.push({ t: 'revelou', lado: dfd, carta: d.carta });
  }
  const A = atqDe(at);
  if (d.posicao === 'ataque') {
    const D = atqDe(d);
    if (A > D) {
      destruirBicho(e, dfd, d.uid, true);
      mudarVida(e, dfd, -(A - D));
    } else if (A < D) {
      destruirBicho(e, atk, at.uid, true);
      mudarVida(e, atk, -(D - A));
    } else if (A > 0) {
      destruirBicho(e, dfd, d.uid, true);
      destruirBicho(e, atk, at.uid, true);
    }
  } else {
    const D = defDe(d);
    if (A > D) destruirBicho(e, dfd, d.uid, true);
    else if (A < D) mudarVida(e, atk, -(D - A));
  }
}

function fimDoTurno(e: EstadoO) {
  const L = e.lados[e.vez];
  // a mão acima de 6: saem as cartas mais fracas (os bichos de menor ATQ, depois as magias)
  while (L.mao.length > MAO_MAX) {
    const peso = (id: string) => {
      const c = cartaO(id);
      return c.tipo === 'bicho' ? (c.atq ?? 0) : 1500;
    };
    const sai = [...L.mao].sort((x, y) => peso(x.carta) - peso(y.carta))[0]!;
    L.mao = L.mao.filter((m) => m.uid !== sai.uid);
    L.descarte.push(sai.carta);
    e.eventos.push({ t: 'descartou', lado: e.vez, carta: sai.carta });
  }
  for (const l of [0, 1] as Lado[])
    for (const b of e.lados[l].bichos) {
      b.bonus = 0;
      b.atacou = false;
    }
  e.vez = outro(e.vez);
  e.turno += 1;
  e.fase = 'principal1';
  e.gatilho = null;
  e.lados[e.vez].chamou = false;
  e.eventos.push({ t: 'turno', lado: e.vez });
  comprar(e, e.vez, 1);
}
