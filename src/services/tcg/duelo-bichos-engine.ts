/**
 * DUELO DE BICHOS: o jogo de cartas colecionáveis próprio do LinuLingo (pedido do dono, 16/10/2026).
 * Ele homenageia os grandes jogos do gênero só pela mecânica, misturando três ideias: um recurso que
 * cresce a cada turno (o krill), bichos que evoluem por cima do filhote e armadilhas viradas para
 * baixo. Nenhum nome, termo, texto ou desenho de outro jogo: as cartas são os bichos do app.
 *
 * Regras: 20 de vida; baralho de 30; 5 cartas na mão (quem joga depois começa com 6); no começo do
 * turno, o krill máximo sobe 1 (até 8), o krill enche e você compra 1 (quem começa não compra no 1º
 * turno; sem carta para comprar, perde 1 de vida); até 5 bichos e 2 armadilhas no campo; o bicho só
 * ataca no turno seguinte, a não ser com Ímpeto; a evolução vai por cima de um bicho do ramo certo
 * que está no campo desde o começo do turno, e cura; cada bicho ataca uma vez, um bicho ou a vida, e
 * os dois trocam dano, que fica; Guarda obriga os ataques a irem nela, e Voo passa por cima; a mão
 * guarda até 8.
 *
 * Motor puro: `aplicarD` devolve um estado novo, e a sorte vem de `rng` (o teste usa `semente`).
 */
import { TEMAS_TCG, bichoDe, embaralhar, expandir, type Bioma, type Rng } from './comum';

export type Lado = 0 | 1;
export type Palavra = 'guarda' | 'impeto' | 'voo';
export type TipoD = 'bicho' | 'evolucao' | 'truque' | 'armadilha';
export type EfeitoD =
  | 'compra1'
  | 'vida2'
  | 'dano3'
  | 'amontoado'
  | 'compra2'
  | 'ataque3'
  | 'estouro'
  | 'devolver'
  | 'avalanche'
  | 'buraco'
  | 'cancela'
  | 'emboscada'
  | 'eco';

export interface CartaD {
  id: string;
  nome: string;
  tipo: TipoD;
  bioma: Bioma;
  custo: number;
  ataque?: number;
  vida?: number;
  palavras?: Palavra[];
  evoluiDe?: string;
  efeito?: EfeitoD;
  texto: string;
  arte?: string;
}

export const NOME_PALAVRA: Record<Palavra, string> = { guarda: 'Guarda', impeto: 'Ímpeto', voo: 'Voo' };

const b = (id: string, bioma: Bioma, custo: number, ataque: number, vida: number, palavras: Palavra[] = [], extra: Partial<CartaD> = {}): CartaD => ({
  id,
  nome: bichoDe(id).nome,
  tipo: extra.evoluiDe ? 'evolucao' : 'bicho',
  bioma,
  custo,
  ataque,
  vida,
  palavras,
  arte: id,
  ...extra,
  texto: [extra.evoluiDe ? `Evolução de ${bichoDe(extra.evoluiDe).nome}.` : '', ...palavras.map((p) => `${NOME_PALAVRA[p]}.`), extra.texto ?? ''].filter(Boolean).join(' '),
});
const t = (id: string, nome: string, bioma: Bioma, custo: number, efeito: EfeitoD, texto: string): CartaD => ({ id, nome, tipo: 'truque', bioma, custo, efeito, texto });
const a = (id: string, nome: string, bioma: Bioma, efeito: EfeitoD, texto: string): CartaD => ({ id, nome, tipo: 'armadilha', bioma, custo: 1, efeito, texto });

export const CARTAS_D: Record<string, CartaD> = Object.fromEntries(
  [
    // Gelo do Sul
    b('kiko', 'gelo', 1, 1, 1, [], { efeito: 'compra1', texto: 'Ao entrar, compre 1 carta.' }),
    b('filhote-pinguim', 'gelo', 1, 1, 2, [], { texto: 'Evolui para o Tobias.' }),
    b('tobias', 'gelo', 4, 6, 7, ['guarda'], { evoluiDe: 'filhote-pinguim' }),
    b('dede', 'gelo', 2, 2, 2, ['impeto']),
    b('pipo', 'gelo', 2, 2, 3),
    b('topete', 'gelo', 3, 3, 2, ['impeto']),
    b('wendel', 'gelo', 3, 2, 5, ['guarda']),
    b('duque', 'gelo', 4, 4, 4),
    b('vento', 'gelo', 4, 3, 3, ['voo']),
    b('malhada', 'gelo', 5, 5, 4),
    b('bolota', 'gelo', 6, 4, 9, ['guarda']),
    b('jubi', 'gelo', 7, 7, 8),
    t('corrente-fria', 'Corrente fria', 'gelo', 2, 'dano3', '3 de dano a um bicho.'),
    t('amontoado', 'Amontoado', 'gelo', 2, 'amontoado', 'Cura todos os seus bichos, e você ganha 3 de vida.'),
    a('buraco-gelo', 'Buraco no gelo', 'gelo', 'buraco', 'Quando um bicho inimigo ataca, ele leva 3 de dano.'),
    a('nevasca', 'Nevasca', 'gelo', 'cancela', 'Quando um bicho inimigo ataca, o ataque não acontece.'),
    // Mata Viva
    b('formiga', 'mata', 1, 1, 1, ['impeto']),
    b('girino', 'mata', 1, 0, 2, [], { texto: 'Evolui para o Sapo-cururu.' }),
    b('sapo', 'mata', 2, 3, 4, [], { evoluiDe: 'girino' }),
    b('lagarta', 'mata', 1, 0, 2, [], { texto: 'Evolui para a Borboleta-azul.' }),
    b('borboleta', 'mata', 2, 3, 2, ['voo'], { evoluiDe: 'lagarta' }),
    b('mico', 'mata', 2, 2, 1, ['impeto']),
    b('arara', 'mata', 3, 2, 3, ['voo']),
    b('capivara', 'mata', 3, 2, 5, ['guarda']),
    b('tamandua', 'mata', 4, 4, 4),
    b('onca', 'mata', 5, 5, 4, ['impeto']),
    b('sucuri', 'mata', 6, 6, 6),
    t('chuva', 'Chuva da tarde', 'mata', 2, 'compra2', 'Compre 2 cartas.'),
    t('pulo-onca', 'Pulo da onça', 'mata', 1, 'ataque3', 'Um bicho seu ganha +3 de ataque neste turno.'),
    a('emboscada', 'Emboscada', 'mata', 'emboscada', 'Quando um bicho inimigo entra no campo, ele leva 2 de dano.'),
    // Céu e Montanha
    b('colibri', 'montanha', 1, 1, 1, ['voo']),
    b('filhote-condor', 'montanha', 1, 0, 3, [], { texto: 'Evolui para o Condor-dos-andes.' }),
    b('condor', 'montanha', 3, 4, 4, ['voo'], { evoluiDe: 'filhote-condor' }),
    b('lhama', 'montanha', 2, 2, 3, [], { efeito: 'vida2', texto: 'Ao entrar, você ganha 2 de vida.' }),
    b('vicunha', 'montanha', 2, 3, 1, ['impeto']),
    b('panda', 'montanha', 3, 3, 3),
    b('iaque', 'montanha', 4, 3, 6, ['guarda']),
    b('leopardo-neves', 'montanha', 5, 5, 4, ['impeto']),
    b('aguia', 'montanha', 5, 4, 4, ['voo']),
    t('traducao', 'Tradução', 'montanha', 2, 'compra2', 'Compre 2 cartas.'),
    t('vento-altitude', 'Vento de altitude', 'montanha', 3, 'devolver', 'Um bicho inimigo volta para a mão do dono.'),
    t('avalanche', 'Avalanche', 'montanha', 4, 'avalanche', '2 de dano em cada bicho inimigo.'),
    a('eco', 'Eco da montanha', 'montanha', 'eco', 'Quando o outro joga um truque, ele não faz efeito.'),
    a('neblina', 'Neblina', 'montanha', 'cancela', 'Quando um bicho inimigo ataca, o ataque não acontece.'),
    // Savana
    b('suricato', 'savana', 1, 1, 3, ['guarda']),
    b('filhote-leao', 'savana', 1, 1, 1, [], { texto: 'Evolui para o Leão.' }),
    b('leao', 'savana', 3, 5, 4, ['impeto'], { evoluiDe: 'filhote-leao' }),
    b('filhote-elefante', 'savana', 2, 1, 4, [], { texto: 'Evolui para o Elefante-africano.' }),
    b('elefante', 'savana', 4, 6, 8, ['guarda'], { evoluiDe: 'filhote-elefante' }),
    b('hiena', 'savana', 2, 2, 2, ['impeto']),
    b('zebra', 'savana', 2, 2, 3),
    b('gnu', 'savana', 3, 3, 3),
    b('avestruz', 'savana', 3, 4, 2),
    b('girafa', 'savana', 4, 4, 5),
    b('rinoceronte', 'savana', 5, 6, 5),
    t('estouro', 'Estouro da manada', 'savana', 3, 'estouro', 'Seus bichos ganham +2 de ataque neste turno.'),
    a('tocaia', 'Tocaia', 'savana', 'emboscada', 'Quando um bicho inimigo entra no campo, ele leva 2 de dano.'),
    a('poeira', 'Nuvem de poeira', 'savana', 'cancela', 'Quando um bicho inimigo ataca, o ataque não acontece.'),
  ].map((c) => [c.id, c]),
);

export type BaralhoD = Bioma;

export const BARALHOS_D: Record<BaralhoD, { nome: string; sobre: string; lista: Record<string, number> }> = {
  gelo: {
    ...TEMAS_TCG.gelo,
    lista: { kiko: 2, 'filhote-pinguim': 3, tobias: 2, dede: 2, pipo: 3, topete: 2, wendel: 2, duque: 2, vento: 2, malhada: 2, bolota: 1, jubi: 1, 'corrente-fria': 2, amontoado: 1, 'buraco-gelo': 2, nevasca: 1 },
  },
  mata: {
    ...TEMAS_TCG.mata,
    lista: { formiga: 3, girino: 3, sapo: 2, lagarta: 2, borboleta: 2, mico: 3, arara: 2, capivara: 2, tamandua: 2, onca: 2, sucuri: 1, chuva: 2, 'pulo-onca': 2, emboscada: 2 },
  },
  montanha: {
    ...TEMAS_TCG.montanha,
    lista: { colibri: 3, 'filhote-condor': 3, condor: 2, lhama: 3, vicunha: 2, panda: 3, iaque: 3, 'leopardo-neves': 2, aguia: 1, traducao: 2, 'vento-altitude': 2, avalanche: 1, eco: 2, neblina: 1 },
  },
  savana: {
    ...TEMAS_TCG.savana,
    lista: { suricato: 3, 'filhote-leao': 3, leao: 2, 'filhote-elefante': 2, elefante: 2, hiena: 3, zebra: 3, gnu: 2, avestruz: 2, girafa: 2, rinoceronte: 1, estouro: 2, tocaia: 1, poeira: 2 },
  },
};

export const VIDA_D = 20;
export const KRILL_MAX = 8;
export const CAMPO_MAX = 5;
export const ARMADILHAS_MAX = 2;
export const MAO_MAX_D = 8;
export const MAO_INICIAL_D = 5;

export const cartaD = (id: string): CartaD => {
  const c = CARTAS_D[id];
  if (!c) throw new Error(`carta desconhecida: ${id}`);
  return c;
};

// ── o estado ────────────────────────────────────────────────────────────────────────────────────

export interface NaMao {
  uid: number;
  carta: string;
}

export interface BichoD {
  uid: number;
  carta: string;
  dano: number;
  atacou: boolean;
  /** o turno em que entrou (ou evoluiu): sem Ímpeto, só ataca num turno seguinte */
  entrou: number;
  bonus: number;
  /** as cartas de baixo da evolução */
  embaixo: string[];
}

export interface LadoD {
  baralhoId: BaralhoD;
  vida: number;
  krillMax: number;
  krill: number;
  baralho: string[];
  mao: NaMao[];
  campo: BichoD[];
  armadilhas: NaMao[];
  descarte: string[];
}

export type AlvoD = { lado: Lado; uid: number } | { lado: Lado; vida: true };

export type EventoD =
  | { t: 'turno'; lado: Lado }
  | { t: 'compra'; lado: Lado }
  | { t: 'queimou'; lado: Lado; carta: string }
  | { t: 'cansaco'; lado: Lado }
  | { t: 'jogou'; lado: Lado; carta: string; uid: number }
  | { t: 'evoluiu'; lado: Lado; carta: string; uid: number }
  | { t: 'armou'; lado: Lado }
  | { t: 'armadilha'; lado: Lado; carta: string }
  | { t: 'anulou'; lado: Lado; carta: string }
  | { t: 'atacou'; lado: Lado; uid: number; alvo: AlvoD }
  | { t: 'dano'; alvo: AlvoD; n: number }
  | { t: 'cura'; lado: Lado; n: number }
  | { t: 'morreu'; lado: Lado; uid: number; carta: string }
  | { t: 'voltou'; lado: Lado; carta: string };

export interface EstadoD {
  lados: [LadoD, LadoD];
  vez: Lado;
  turno: number;
  vencedor: Lado | null;
  proximoUid: number;
  eventos: EventoD[];
}

export type AcaoD =
  | { t: 'jogar'; uid: number; alvo?: AlvoD }
  | { t: 'evoluir'; uid: number; sobre: number }
  | { t: 'armar'; uid: number }
  | { t: 'atacar'; uid: number; alvo: AlvoD }
  | { t: 'passar' };

export class JogadaInvalidaD extends Error {}

export const outroD = (l: Lado): Lado => (l === 0 ? 1 : 0);
export const ataqueDe = (x: BichoD) => (cartaD(x.carta).ataque ?? 0) + x.bonus;
export const vidaDe = (x: BichoD) => (cartaD(x.carta).vida ?? 0) - x.dano;
export const temPalavra = (x: BichoD | string, p: Palavra) => (cartaD(typeof x === 'string' ? x : x.carta).palavras ?? []).includes(p);
export const podeAtacarAgora = (e: EstadoD, x: BichoD) => !x.atacou && ataqueDe(x) > 0 && (x.entrou < e.turno || temPalavra(x, 'impeto'));

export function novaPartidaD(b0: BaralhoD, b1: BaralhoD, rng: Rng, comeca: Lado = 0): EstadoD {
  let uid = 1;
  const lado = (bar: BaralhoD, n: number): LadoD => {
    const baralho = embaralhar(expandir(BARALHOS_D[bar].lista), rng);
    const mao = baralho.splice(0, n).map((carta) => ({ uid: uid++, carta }));
    return { baralhoId: bar, vida: VIDA_D, krillMax: 0, krill: 0, baralho, mao, campo: [], armadilhas: [], descarte: [] };
  };
  const l0 = lado(b0, comeca === 0 ? MAO_INICIAL_D : MAO_INICIAL_D + 1);
  const l1 = lado(b1, comeca === 1 ? MAO_INICIAL_D : MAO_INICIAL_D + 1);
  const e: EstadoD = { lados: [l0, l1], vez: comeca, turno: 0, vencedor: null, proximoUid: uid, eventos: [] };
  abrirTurno(e, true);
  return e;
}

function comprar(e: EstadoD, l: Lado, n: number) {
  const L = e.lados[l];
  for (let k = 0; k < n; k++) {
    const c = L.baralho.shift();
    if (!c) {
      L.vida -= 1;
      e.eventos.push({ t: 'cansaco', lado: l });
      continue;
    }
    if (L.mao.length >= MAO_MAX_D) {
      L.descarte.push(c);
      e.eventos.push({ t: 'queimou', lado: l, carta: c });
    } else {
      L.mao.push({ uid: e.proximoUid++, carta: c });
      e.eventos.push({ t: 'compra', lado: l });
    }
  }
  verificarFim(e);
}

function abrirTurno(e: EstadoD, primeiro = false) {
  e.turno += 1;
  const L = e.lados[e.vez];
  L.krillMax = Math.min(KRILL_MAX, L.krillMax + 1);
  L.krill = L.krillMax;
  for (const x of L.campo) x.atacou = false;
  for (const l of [0, 1] as Lado[]) for (const x of e.lados[l].campo) x.bonus = 0;
  e.eventos.push({ t: 'turno', lado: e.vez });
  if (!primeiro) comprar(e, e.vez, 1);
}

function verificarFim(e: EstadoD) {
  if (e.vencedor !== null) return;
  const [x, y] = e.lados;
  if (x.vida <= 0 && y.vida <= 0) e.vencedor = outroD(e.vez);
  else if (x.vida <= 0) e.vencedor = 1;
  else if (y.vida <= 0) e.vencedor = 0;
}

const achar = (e: EstadoD, l: Lado, uid: number) => e.lados[l].campo.find((x) => x.uid === uid);

function causarDano(e: EstadoD, alvo: AlvoD, n: number) {
  if (n <= 0) return;
  if ('vida' in alvo) e.lados[alvo.lado].vida -= n;
  else {
    const x = achar(e, alvo.lado, alvo.uid);
    if (!x) return;
    x.dano += n;
  }
  e.eventos.push({ t: 'dano', alvo, n });
}

function limparMortos(e: EstadoD) {
  for (const l of [0, 1] as Lado[]) {
    const L = e.lados[l];
    for (const x of L.campo.filter((y) => vidaDe(y) <= 0)) {
      L.descarte.push(...x.embaixo, x.carta);
      e.eventos.push({ t: 'morreu', lado: l, uid: x.uid, carta: x.carta });
    }
    L.campo = L.campo.filter((y) => vidaDe(y) > 0);
  }
  verificarFim(e);
}

function dispararArmadilha(e: EstadoD, dono: Lado, efeitos: EfeitoD[]): EfeitoD | null {
  const L = e.lados[dono];
  const i = L.armadilhas.findIndex((x) => efeitos.includes(cartaD(x.carta).efeito!));
  if (i < 0) return null;
  const [x] = L.armadilhas.splice(i, 1);
  L.descarte.push(x!.carta);
  e.eventos.push({ t: 'armadilha', lado: dono, carta: x!.carta });
  return cartaD(x!.carta).efeito!;
}

// ── o que dá para fazer ─────────────────────────────────────────────────────────────────────────

export function alvosDeAtaque(e: EstadoD, x: BichoD): AlvoD[] {
  const ini = outroD(e.vez);
  const campo = e.lados[ini].campo;
  const guardas = campo.filter((y) => temPalavra(y, 'guarda'));
  if (guardas.length && !temPalavra(x, 'voo')) return guardas.map((y) => ({ lado: ini, uid: y.uid }));
  return [...campo.map((y) => ({ lado: ini, uid: y.uid })), { lado: ini, vida: true as const }];
}

export function alvosDoTruque(e: EstadoD, carta: string): AlvoD[] {
  const ef = cartaD(carta).efeito;
  const eu = e.vez;
  const ini = outroD(eu);
  if (ef === 'dano3') return ([eu, ini] as Lado[]).flatMap((l) => e.lados[l].campo.map((x) => ({ lado: l, uid: x.uid })));
  if (ef === 'ataque3') return e.lados[eu].campo.map((x) => ({ lado: eu, uid: x.uid }));
  if (ef === 'devolver') return e.lados[ini].campo.map((x) => ({ lado: ini, uid: x.uid }));
  return [];
}

export const precisaDeAlvoD = (carta: string) => ['dano3', 'ataque3', 'devolver'].includes(cartaD(carta).efeito ?? '');

export function basesDaEvolucao(e: EstadoD, carta: string): BichoD[] {
  const de = cartaD(carta).evoluiDe;
  return e.lados[e.vez].campo.filter((x) => x.carta === de && x.entrou < e.turno);
}

export function lancesD(e: EstadoD): AcaoD[] {
  if (e.vencedor !== null) return [];
  const L = e.lados[e.vez];
  const out: AcaoD[] = [];
  for (const m of L.mao) {
    const c = cartaD(m.carta);
    if (c.custo > L.krill) continue;
    if (c.tipo === 'bicho' && L.campo.length < CAMPO_MAX) out.push({ t: 'jogar', uid: m.uid });
    if (c.tipo === 'evolucao') for (const x of basesDaEvolucao(e, m.carta)) out.push({ t: 'evoluir', uid: m.uid, sobre: x.uid });
    if (c.tipo === 'armadilha' && L.armadilhas.length < ARMADILHAS_MAX) out.push({ t: 'armar', uid: m.uid });
    if (c.tipo === 'truque') {
      if (precisaDeAlvoD(m.carta)) for (const alvo of alvosDoTruque(e, m.carta)) out.push({ t: 'jogar', uid: m.uid, alvo });
      else out.push({ t: 'jogar', uid: m.uid });
    }
  }
  for (const x of L.campo) if (podeAtacarAgora(e, x)) for (const alvo of alvosDeAtaque(e, x)) out.push({ t: 'atacar', uid: x.uid, alvo });
  out.push({ t: 'passar' });
  return out;
}

const mesmo = (x: unknown, y: unknown) => JSON.stringify(x ?? null) === JSON.stringify(y ?? null);

export const ehValidaD = (e: EstadoD, a: AcaoD) =>
  lancesD(e).some((x) => x.t === a.t && mesmo('uid' in x ? x.uid : null, 'uid' in a ? a.uid : null) && mesmo((x as { alvo?: AlvoD }).alvo, (a as { alvo?: AlvoD }).alvo) && mesmo((x as { sobre?: number }).sobre, (a as { sobre?: number }).sobre));

// ── aplicar ─────────────────────────────────────────────────────────────────────────────────────

export function aplicarD(estado: EstadoD, a: AcaoD): EstadoD {
  if (!ehValidaD(estado, a)) throw new JogadaInvalidaD(`jogada inválida: ${JSON.stringify(a)}`);
  const e: EstadoD = structuredClone(estado);
  e.eventos = [];
  const eu = e.vez;
  const ini = outroD(eu);
  const L = e.lados[eu];
  const tirar = (uid: number) => {
    const i = L.mao.findIndex((m) => m.uid === uid);
    const [m] = L.mao.splice(i, 1);
    L.krill -= cartaD(m!.carta).custo;
    return m!;
  };
  switch (a.t) {
    case 'passar':
      e.vez = ini;
      abrirTurno(e);
      break;
    case 'armar': {
      L.armadilhas.push(tirar(a.uid));
      e.eventos.push({ t: 'armou', lado: eu });
      break;
    }
    case 'evoluir': {
      const m = tirar(a.uid);
      const base = achar(e, eu, a.sobre)!;
      base.embaixo.push(base.carta);
      base.carta = m.carta;
      base.dano = 0;
      e.eventos.push({ t: 'evoluiu', lado: eu, carta: m.carta, uid: base.uid });
      break;
    }
    case 'jogar': {
      const m = tirar(a.uid);
      const c = cartaD(m.carta);
      if (c.tipo === 'bicho') {
        const x: BichoD = { uid: m.uid, carta: m.carta, dano: 0, atacou: false, entrou: e.turno, bonus: 0, embaixo: [] };
        L.campo.push(x);
        e.eventos.push({ t: 'jogou', lado: eu, carta: m.carta, uid: m.uid });
        if (c.efeito === 'compra1') comprar(e, eu, 1);
        if (c.efeito === 'vida2') {
          L.vida += 2;
          e.eventos.push({ t: 'cura', lado: eu, n: 2 });
        }
        if (dispararArmadilha(e, ini, ['emboscada'])) causarDano(e, { lado: eu, uid: x.uid }, 2);
        limparMortos(e);
        break;
      }
      L.descarte.push(m.carta);
      e.eventos.push({ t: 'jogou', lado: eu, carta: m.carta, uid: m.uid });
      if (dispararArmadilha(e, ini, ['eco'])) {
        e.eventos.push({ t: 'anulou', lado: ini, carta: m.carta });
        break;
      }
      efeito(e, c.efeito!, a.alvo);
      limparMortos(e);
      break;
    }
    case 'atacar': {
      const x = achar(e, eu, a.uid)!;
      x.atacou = true;
      e.eventos.push({ t: 'atacou', lado: eu, uid: x.uid, alvo: a.alvo });
      const trap = dispararArmadilha(e, ini, ['buraco', 'cancela']);
      if (trap === 'cancela') break;
      if (trap === 'buraco') {
        causarDano(e, { lado: eu, uid: x.uid }, 3);
        if (vidaDe(x) <= 0) {
          limparMortos(e);
          break;
        }
      }
      if ('vida' in a.alvo) causarDano(e, a.alvo, ataqueDe(x));
      else {
        const d = achar(e, ini, a.alvo.uid)!;
        const golpe = ataqueDe(x);
        const volta = ataqueDe(d);
        causarDano(e, a.alvo, golpe);
        causarDano(e, { lado: eu, uid: x.uid }, volta);
      }
      limparMortos(e);
      break;
    }
  }
  verificarFim(e);
  return e;
}

function efeito(e: EstadoD, ef: EfeitoD, alvo?: AlvoD) {
  const eu = e.vez;
  const ini = outroD(eu);
  switch (ef) {
    case 'dano3':
      causarDano(e, alvo!, 3);
      break;
    case 'compra2':
      comprar(e, eu, 2);
      break;
    case 'amontoado':
      for (const x of e.lados[eu].campo) x.dano = 0;
      e.lados[eu].vida += 3;
      e.eventos.push({ t: 'cura', lado: eu, n: 3 });
      break;
    case 'ataque3': {
      const x = achar(e, eu, (alvo as { uid: number }).uid);
      if (x) x.bonus += 3;
      break;
    }
    case 'estouro':
      for (const x of e.lados[eu].campo) x.bonus += 2;
      break;
    case 'devolver': {
      const uid = (alvo as { uid: number }).uid;
      const D = e.lados[ini];
      const x = achar(e, ini, uid);
      if (!x) break;
      D.campo = D.campo.filter((y) => y.uid !== uid);
      D.descarte.push(...x.embaixo);
      if (D.mao.length < MAO_MAX_D) D.mao.push({ uid: e.proximoUid++, carta: x.carta });
      else D.descarte.push(x.carta);
      e.eventos.push({ t: 'voltou', lado: ini, carta: x.carta });
      break;
    }
    case 'avalanche':
      for (const x of [...e.lados[ini].campo]) causarDano(e, { lado: ini, uid: x.uid }, 2);
      break;
    default:
      break;
  }
}
