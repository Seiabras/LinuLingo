/**
 * TRILHA DA EVOLUÇÃO: o jogo de cartas do LinuLingo que usa as regras principais do Pokémon Trading
 * Card Game (Wizards of the Coast em 1999 no Ocidente; Media Factory, 1996, no Japão), com cartas
 * nossas. Só as regras e a mecânica: nenhum nome, termo, texto ou desenho do jogo homenageado.
 *
 * O que vem das regras principais: um bicho ativo na frente e até 5 no banco; 7 cartas na mão e 6
 * cartas de prêmio viradas; 1 energia por turno, presa a um bicho; o ataque custa energia, e atacar
 * encerra o turno; os estágios (básico, estágio 1, estágio 2), sem evoluir no primeiro turno de cada
 * um nem o bicho que acabou de entrar; o dano fica no bicho até ele sair; fraqueza (dano ×2) e
 * resistência (−30) só no ativo; recuar (descartar energia, uma vez por turno) para trocar o ativo;
 * quem derruba um bicho pega 1 prêmio; ganha quem pega os 6 prêmios, deixa o outro sem bicho no
 * campo ou o vê sem carta para comprar no começo do turno; quem começa não ataca no 1º turno; sem
 * bicho básico na mão inicial, embaralha e compra de novo.
 *
 * O que ficou de fora, para simplificar (a ficha diz): as condições especiais (sono, paralisia,
 * veneno, queimadura, confusão), os tipos de carta de apoio (1 por turno, ferramentas, estádios), os
 * poderes fora do ataque, as cartas que valem 2 prêmios, a compra extra do adversário quando o outro
 * repete a mão inicial e mais de 2 jogadores. O ciclo de fraquezas entre os 4 biomas é do app.
 */
import { BIOMAS, TEMAS_TCG, bichoDe, embaralhar, expandir, semente, type Bioma, type Rng } from './comum';

export type Lado = 0 | 1;
export type Estagio = 0 | 1 | 2;
export type EfeitoAtaque = 'compra1' | 'cura20' | 'moeda' | 'banco10';
export type EfeitoApoio = 'fruta' | 'mochila' | 'assobio' | 'binoculo';

export interface AtaqueT {
  nome: string;
  /** quantas energias do bioma do bicho e quantas livres (de qualquer bioma) */
  custo: { bioma: number; livre: number };
  dano: number;
  efeito?: EfeitoAtaque;
  /** o dano a mais da moeda, quando dá cara */
  extra?: number;
}

export interface CartaT {
  id: string;
  nome: string;
  tipo: 'bicho' | 'energia' | 'apoio';
  bioma: Bioma;
  estagio?: Estagio;
  /** de quem evolui (id da carta do estágio de antes) */
  de?: string;
  pv?: number;
  fraqueza?: Bioma;
  resiste?: Bioma;
  recuo?: number;
  ataques?: AtaqueT[];
  efeito?: EfeitoApoio;
  texto: string;
  /** o bicho desenhado na carta (id de `BICHOS`) */
  arte?: string;
}

/** o ciclo de fraquezas do app: o calor da savana pega o gelo, a geada pega a mata, a mata cobre a montanha, o alto pega a savana */
export const FRAQUEZA: Record<Bioma, Bioma> = { gelo: 'savana', mata: 'gelo', montanha: 'mata', savana: 'montanha' };

const atq = (nome: string, b: number, livre: number, dano: number, efeito?: EfeitoAtaque, extra?: number): AtaqueT => ({ nome, custo: { bioma: b, livre }, dano, ...(efeito ? { efeito } : {}), ...(extra ? { extra } : {}) });

const bicho = (id: string, bioma: Bioma, estagio: Estagio, pv: number, recuo: number, ataques: AtaqueT[], extra: Partial<CartaT> = {}): CartaT => ({
  id,
  nome: bichoDe(id).nome,
  tipo: 'bicho',
  bioma,
  estagio,
  pv,
  recuo,
  fraqueza: FRAQUEZA[bioma],
  ataques,
  texto: '',
  arte: id,
  ...extra,
});

/** os bichos que voam resistem aos golpes de chão da savana */
const VOA: Partial<CartaT> = { resiste: 'savana' };

export const TEXTO_EFEITO: Record<EfeitoAtaque, (a: AtaqueT) => string> = {
  compra1: () => 'Depois, compre 1 carta.',
  cura20: () => 'Depois, tire 20 de dano deste bicho.',
  moeda: (a) => `Jogue uma moeda: se der cara, mais ${a.extra}.`,
  banco10: () => 'E 10 de dano em cada bicho do banco do outro.',
};

const apoio = (id: string, nome: string, efeito: EfeitoApoio, texto: string): CartaT => ({ id, nome, tipo: 'apoio', bioma: 'mata', efeito, texto });
const energia = (b: Bioma): CartaT => ({ id: `energia-${b}`, nome: `Energia de ${BIOMAS[b].nome.toLowerCase()}`, tipo: 'energia', bioma: b, texto: 'Prenda a um bicho seu: 1 por turno.' });

export const CARTAS_T: Record<string, CartaT> = Object.fromEntries(
  [
    energia('gelo'),
    energia('mata'),
    energia('montanha'),
    energia('savana'),
    apoio('fruta', 'Fruta madura', 'fruta', 'Tire 30 de dano de um bicho seu.'),
    apoio('mochila', 'Mochila de viagem', 'mochila', 'Compre 2 cartas.'),
    apoio('assobio', 'Assobio', 'assobio', 'Troque o seu bicho ativo por um do banco, sem gastar energia.'),
    apoio('binoculo', 'Binóculo', 'binoculo', 'Pegue do baralho o primeiro bicho que aparecer e embaralhe o resto.'),
    // Gelo do Sul: os Amigos do Linu, grandes e pacientes
    bicho('kiko', 'gelo', 0, 30, 0, [atq('Nuvem de krill', 0, 1, 10, 'compra1')]),
    bicho('filhote-pinguim', 'gelo', 0, 60, 1, [atq('Piado', 0, 1, 10), atq('Escorregão', 1, 1, 30)]),
    bicho('tobias', 'gelo', 1, 130, 2, [atq('Bico', 1, 0, 20), atq('Mergulho fundo', 2, 1, 80)], { de: 'filhote-pinguim' }),
    bicho('dede', 'gelo', 0, 60, 1, [atq('Bicada', 1, 0, 20)]),
    bicho('pipo', 'gelo', 0, 70, 1, [atq('Nado rápido', 1, 1, 30)]),
    bicho('topete', 'gelo', 0, 60, 1, [atq('Crista', 1, 0, 10, 'moeda', 20)]),
    bicho('floco', 'gelo', 0, 50, 0, [atq('Voo raso', 0, 1, 20)], VOA),
    bicho('vento', 'gelo', 0, 80, 1, [atq('Planar', 1, 2, 50)], VOA),
    bicho('wendel', 'gelo', 0, 90, 2, [atq('Sob o gelo', 2, 0, 40, 'cura20')]),
    bicho('duque', 'gelo', 0, 90, 2, [atq('Marcha', 1, 1, 30), atq('Bico forte', 2, 1, 60)]),
    bicho('malhada', 'gelo', 0, 100, 2, [atq('Caça na beira', 2, 1, 60)]),
    bicho('bolota', 'gelo', 0, 120, 3, [atq('Barrigada', 2, 2, 70)]),
    bicho('jubi', 'gelo', 0, 150, 4, [atq('Canto da baleia', 1, 1, 20, 'cura20'), atq('Salto da jubarte', 3, 1, 100)]),
    // Mata Viva: muitos, baratos e rápidos
    bicho('formiga', 'mata', 0, 50, 0, [atq('Mandíbula', 1, 0, 20)]),
    bicho('mico', 'mata', 0, 60, 0, [atq('Salto de galho', 0, 1, 20, 'moeda', 10)]),
    bicho('girino', 'mata', 0, 50, 1, [atq('Nadar', 1, 0, 20)]),
    bicho('sapo', 'mata', 1, 100, 1, [atq('Língua grudenta', 1, 0, 30), atq('Pele amarga', 2, 0, 60)], { de: 'girino' }),
    bicho('lagarta', 'mata', 0, 50, 1, [atq('Comer folha', 1, 0, 10, 'cura20')]),
    bicho('crisalida', 'mata', 1, 80, 2, [atq('Casulo firme', 0, 1, 10, 'cura20')], { de: 'lagarta' }),
    bicho('borboleta', 'mata', 2, 120, 0, [atq('Pó das asas', 1, 1, 50), atq('Revoada', 2, 1, 70, 'banco10')], { de: 'crisalida', ...VOA }),
    bicho('arara', 'mata', 0, 70, 1, [atq('Quebra-coco', 1, 1, 30)], VOA),
    bicho('capivara', 'mata', 0, 100, 2, [atq('Cabeçada', 1, 2, 50)]),
    bicho('tamandua', 'mata', 0, 100, 2, [atq('Garras', 2, 0, 50)]),
    bicho('onca', 'mata', 0, 100, 2, [atq('Mordida forte', 2, 1, 70)]),
    bicho('sucuri', 'mata', 0, 120, 3, [atq('Abraço', 2, 2, 80)]),
    // Céu e Montanha: voadores e truques
    bicho('colibri', 'montanha', 0, 40, 0, [atq('Voo parado', 0, 1, 10, 'compra1')], VOA),
    bicho('filhote-condor', 'montanha', 0, 60, 1, [atq('Bicada', 1, 0, 20)]),
    bicho('condor', 'montanha', 1, 120, 1, [atq('Asa larga', 1, 0, 30), atq('Corrente quente', 2, 1, 80)], { de: 'filhote-condor', ...VOA }),
    bicho('lhama', 'montanha', 0, 80, 2, [atq('Cuspida', 1, 0, 10, 'moeda', 30)]),
    bicho('vicunha', 'montanha', 0, 60, 1, [atq('Corrida', 1, 0, 20)]),
    bicho('panda', 'montanha', 0, 70, 1, [atq('Arranhão', 1, 1, 30)]),
    bicho('iaque', 'montanha', 0, 110, 3, [atq('Chifrada', 2, 1, 60)]),
    bicho('leopardo-neves', 'montanha', 0, 90, 1, [atq('Salto da rocha', 2, 0, 40, 'moeda', 30)]),
    bicho('aguia', 'montanha', 0, 80, 1, [atq('Garras do alto', 2, 1, 60)], VOA),
    bicho('chinchila', 'montanha', 0, 40, 0, [atq('Banho de areia', 0, 1, 10, 'cura20')]),
    bicho('urso-oculos', 'montanha', 0, 110, 3, [atq('Abraço de urso', 2, 2, 80)]),
    // Savana: a manada, mais forte quanto maior
    bicho('suricato', 'savana', 0, 40, 0, [atq('Sentinela', 0, 1, 10, 'compra1')]),
    bicho('filhote-leao', 'savana', 0, 60, 1, [atq('Brincar de caçar', 1, 0, 20)]),
    bicho('leao', 'savana', 1, 120, 2, [atq('Rugido', 1, 0, 30), atq('Caçada em bando', 2, 1, 80)], { de: 'filhote-leao' }),
    bicho('filhote-elefante', 'savana', 0, 70, 2, [atq('Tromba', 1, 0, 20)]),
    bicho('elefante', 'savana', 1, 160, 4, [atq('Pisada', 1, 1, 40), atq('Estouro', 3, 1, 110)], { de: 'filhote-elefante' }),
    bicho('zebra', 'savana', 0, 70, 1, [atq('Coice', 1, 1, 30)]),
    bicho('gnu', 'savana', 0, 80, 2, [atq('Migração', 1, 1, 20, 'banco10')]),
    bicho('hiena', 'savana', 0, 70, 1, [atq('Risada', 1, 0, 10, 'moeda', 30)]),
    bicho('avestruz', 'savana', 0, 80, 1, [atq('Corrida', 1, 1, 40)]),
    bicho('girafa', 'savana', 0, 100, 2, [atq('Pescoçada', 2, 1, 50)]),
    bicho('rinoceronte', 'savana', 0, 120, 3, [atq('Investida', 2, 2, 80)]),
  ].map((c) => [c.id, c]),
);

export type BaralhoT = Bioma;

export const BARALHOS_T: Record<BaralhoT, { nome: string; sobre: string; lista: Record<string, number> }> = {
  gelo: {
    ...TEMAS_TCG.gelo,
    lista: { 'energia-gelo': 16, kiko: 2, 'filhote-pinguim': 3, tobias: 2, dede: 1, topete: 1, pipo: 2, floco: 1, vento: 1, wendel: 1, duque: 1, malhada: 1, bolota: 1, jubi: 1, fruta: 2, mochila: 2, assobio: 1, binoculo: 1 },
  },
  mata: {
    ...TEMAS_TCG.mata,
    lista: { 'energia-mata': 16, formiga: 2, mico: 3, girino: 2, sapo: 2, lagarta: 2, crisalida: 1, borboleta: 1, arara: 1, capivara: 1, tamandua: 1, onca: 1, sucuri: 1, fruta: 1, mochila: 2, assobio: 1, binoculo: 2 },
  },
  montanha: {
    ...TEMAS_TCG.montanha,
    lista: { 'energia-montanha': 16, colibri: 2, 'filhote-condor': 3, condor: 2, lhama: 2, vicunha: 1, panda: 1, iaque: 1, 'leopardo-neves': 1, aguia: 1, chinchila: 1, 'urso-oculos': 1, fruta: 2, mochila: 2, assobio: 2, binoculo: 2 },
  },
  savana: {
    ...TEMAS_TCG.savana,
    lista: { 'energia-savana': 16, suricato: 2, 'filhote-leao': 3, leao: 2, 'filhote-elefante': 2, elefante: 1, zebra: 2, gnu: 2, hiena: 1, avestruz: 1, girafa: 1, rinoceronte: 1, fruta: 2, mochila: 2, assobio: 1, binoculo: 1 },
  },
};

export const MAO_INICIAL = 7;
export const PREMIOS = 6;
export const BANCO_MAX = 5;
export const RESISTENCIA = 30;

export const cartaT = (id: string): CartaT => {
  const c = CARTAS_T[id];
  if (!c) throw new Error(`carta desconhecida: ${id}`);
  return c;
};
export const ehBasico = (id: string) => {
  const c = cartaT(id);
  return c.tipo === 'bicho' && c.estagio === 0;
};

// ── o estado ────────────────────────────────────────────────────────────────────────────────────

export interface Carta {
  uid: number;
  carta: string;
}
export interface BichoT extends Carta {
  /** os estágios de antes, debaixo da carta de cima */
  abaixo: string[];
  /** as energias presas (ids das cartas) */
  energias: string[];
  dano: number;
  /** o turno em que entrou no campo e o turno em que evoluiu pela última vez */
  entrou: number;
  evoluiu: number;
}

export interface LadoT {
  baralhoId: BaralhoT;
  baralho: string[];
  mao: Carta[];
  /** as cartas de prêmio, viradas */
  premios: string[];
  ativo: BichoT | null;
  banco: BichoT[];
  descarte: string[];
  energiaPosta: boolean;
  recuou: boolean;
  /** quantos turnos este lado já começou (não evolui no primeiro) */
  turnos: number;
  /** já escolheu o ativo e o banco do começo */
  pronto: boolean;
  /** quantas vezes repetiu a mão inicial por falta de bicho básico */
  repeticoes: number;
}

export type Fase = 'preparo' | 'principal' | 'promover';

export type EventoT =
  | { t: 'turno'; lado: Lado }
  | { t: 'compra'; lado: Lado }
  | { t: 'preparou'; lado: Lado }
  | { t: 'basico'; lado: Lado; carta: string }
  | { t: 'evoluiu'; lado: Lado; de: string; carta: string }
  | { t: 'energia'; lado: Lado; carta: string; em: string }
  | { t: 'apoio'; lado: Lado; carta: string }
  | { t: 'recuou'; lado: Lado; sai: string; entra: string }
  | { t: 'ataque'; lado: Lado; carta: string; ataque: string }
  | { t: 'moeda'; lado: Lado; cara: boolean }
  | { t: 'dano'; lado: Lado; uid: number; n: number; fraqueza?: boolean; resistencia?: boolean }
  | { t: 'cura'; lado: Lado; uid: number; n: number }
  | { t: 'caiu'; lado: Lado; uid: number; carta: string }
  | { t: 'premio'; lado: Lado; restam: number }
  | { t: 'promoveu'; lado: Lado; carta: string }
  | { t: 'semCarta'; lado: Lado }
  | { t: 'semBicho'; lado: Lado };

export interface EstadoT {
  lados: [LadoT, LadoT];
  vez: Lado;
  turno: number;
  fase: Fase;
  /** na fase 'promover', quem escolhe o novo ativo (e se o turno passa depois) */
  promover: Lado | null;
  vencedor: Lado | null;
  proximoUid: number;
  /** a sorte guardada para as moedas e para embaralhar no meio da partida */
  sorte: number;
  eventos: EventoT[];
}

export type AcaoT =
  | { t: 'preparar'; ativo: number; banco: number[] }
  | { t: 'basico'; uid: number }
  | { t: 'evoluir'; uid: number; alvo: number }
  | { t: 'energia'; uid: number; alvo: number }
  | { t: 'apoio'; uid: number; alvo?: number }
  | { t: 'recuar'; para: number }
  | { t: 'atacar'; i: number }
  | { t: 'passar' }
  | { t: 'promover'; uid: number };

export class JogadaInvalidaT extends Error {}

export const outro = (l: Lado): Lado => (l === 0 ? 1 : 0);

export function quemAge(e: EstadoT): Lado {
  if (e.fase === 'preparo') return !e.lados[e.vez].pronto ? e.vez : outro(e.vez);
  if (e.fase === 'promover') return e.promover!;
  return e.vez;
}

export function novaPartidaT(b0: BaralhoT, b1: BaralhoT, rng: Rng, comeca: Lado = 0): EstadoT {
  let uid = 1;
  const lado = (b: BaralhoT): LadoT => {
    const lista = expandir(BARALHOS_T[b].lista);
    let baralho = embaralhar(lista, rng);
    let repeticoes = 0;
    // sem bicho básico na mão inicial, embaralha tudo e compra de novo
    while (!baralho.slice(0, MAO_INICIAL).some(ehBasico)) {
      baralho = embaralhar(lista, rng);
      repeticoes++;
    }
    const mao = baralho.splice(0, MAO_INICIAL).map((carta) => ({ uid: uid++, carta }));
    const premios = baralho.splice(0, PREMIOS);
    return { baralhoId: b, baralho, mao, premios, ativo: null, banco: [], descarte: [], energiaPosta: false, recuou: false, turnos: 0, pronto: false, repeticoes };
  };
  const lados: [LadoT, LadoT] = [lado(b0), lado(b1)];
  return { lados, vez: comeca, turno: 0, fase: 'preparo', promover: null, vencedor: null, proximoUid: uid, sorte: Math.floor(rng() * 2 ** 31), eventos: [] };
}

// ── as contas ───────────────────────────────────────────────────────────────────────────────────

export const pvDe = (b: BichoT) => cartaT(b.carta).pv ?? 0;
export const pvRestante = (b: BichoT) => pvDe(b) - b.dano;
export const emCampo = (L: LadoT): BichoT[] => (L.ativo ? [L.ativo, ...L.banco] : [...L.banco]);

/** dá para pagar o ataque com as energias presas? */
export function podePagarAtaque(b: BichoT, a: AtaqueT): boolean {
  const bioma = cartaT(b.carta).bioma;
  const doBioma = b.energias.filter((x) => cartaT(x).bioma === bioma).length;
  return doBioma >= a.custo.bioma && b.energias.length >= a.custo.bioma + a.custo.livre;
}

/** o dano no ativo do outro, com fraqueza e resistência (sem a moeda) */
export function danoContra(atacante: string, defensor: string, base: number): { n: number; fraqueza: boolean; resistencia: boolean } {
  if (base <= 0) return { n: 0, fraqueza: false, resistencia: false };
  const a = cartaT(atacante);
  const d = cartaT(defensor);
  const fraqueza = d.fraqueza === a.bioma;
  const resistencia = d.resiste === a.bioma;
  let n = fraqueza ? base * 2 : base;
  if (resistencia) n = Math.max(0, n - RESISTENCIA);
  return { n, fraqueza, resistencia };
}

const acharEmCampo = (L: LadoT, uid: number) => emCampo(L).find((b) => b.uid === uid);

/** pode evoluir esse bicho com essa carta agora? */
export function podeEvoluir(e: EstadoT, L: LadoT, carta: string, alvo: BichoT): boolean {
  const c = cartaT(carta);
  return c.tipo === 'bicho' && (c.estagio ?? 0) > 0 && c.de === alvo.carta && L.turnos >= 2 && alvo.entrou < e.turno && alvo.evoluiu < e.turno;
}

/** Todas as jogadas que dá para fazer agora (no preparo, só o ativo sem banco: o banco é livre). */
export function lancesT(e: EstadoT): AcaoT[] {
  if (e.vencedor !== null) return [];
  const quem = quemAge(e);
  const L = e.lados[quem];
  const out: AcaoT[] = [];
  if (e.fase === 'preparo') {
    for (const m of L.mao) if (ehBasico(m.carta)) out.push({ t: 'preparar', ativo: m.uid, banco: [] });
    return out;
  }
  if (e.fase === 'promover') {
    for (const b of L.banco) out.push({ t: 'promover', uid: b.uid });
    return out;
  }
  const campo = emCampo(L);
  for (const m of L.mao) {
    const c = cartaT(m.carta);
    if (c.tipo === 'bicho') {
      if (c.estagio === 0) {
        if (L.banco.length < BANCO_MAX) out.push({ t: 'basico', uid: m.uid });
      } else for (const b of campo) if (podeEvoluir(e, L, m.carta, b)) out.push({ t: 'evoluir', uid: m.uid, alvo: b.uid });
    } else if (c.tipo === 'energia') {
      if (!L.energiaPosta) for (const b of campo) out.push({ t: 'energia', uid: m.uid, alvo: b.uid });
    } else {
      if (c.efeito === 'fruta') {
        for (const b of campo) if (b.dano > 0) out.push({ t: 'apoio', uid: m.uid, alvo: b.uid });
      } else if (c.efeito === 'assobio') {
        for (const b of L.banco) out.push({ t: 'apoio', uid: m.uid, alvo: b.uid });
      } else if (c.efeito === 'mochila') {
        if (L.baralho.length > 0) out.push({ t: 'apoio', uid: m.uid });
      } else if (c.efeito === 'binoculo') {
        if (L.baralho.length > 0) out.push({ t: 'apoio', uid: m.uid });
      }
    }
  }
  if (L.ativo && !L.recuou && L.ativo.energias.length >= (cartaT(L.ativo.carta).recuo ?? 0)) for (const b of L.banco) out.push({ t: 'recuar', para: b.uid });
  if (L.ativo && e.turno > 1) (cartaT(L.ativo.carta).ataques ?? []).forEach((a, i) => podePagarAtaque(L.ativo!, a) && out.push({ t: 'atacar', i }));
  out.push({ t: 'passar' });
  return out;
}

function validar(e: EstadoT, a: AcaoT): string | null {
  if (e.vencedor !== null) return 'a partida acabou';
  const quem = quemAge(e);
  const L = e.lados[quem];
  if (a.t === 'preparar') {
    if (e.fase !== 'preparo') return 'não é hora de preparar';
    const uids = [a.ativo, ...a.banco];
    if (new Set(uids).size !== uids.length) return 'carta repetida';
    if (a.banco.length > BANCO_MAX) return 'o banco tem no máximo 5';
    for (const u of uids) {
      const m = L.mao.find((x) => x.uid === u);
      if (!m || !ehBasico(m.carta)) return 'no começo só entram bichos básicos';
    }
    return null;
  }
  const ok = lancesT(e).some((x) => JSON.stringify(x) === JSON.stringify(a));
  return ok ? null : 'jogada inválida';
}

export const ehValidaT = (e: EstadoT, a: AcaoT) => validar(e, a) === null;

// ── aplicar ─────────────────────────────────────────────────────────────────────────────────────

const novoBicho = (m: Carta, turno: number): BichoT => ({ uid: m.uid, carta: m.carta, abaixo: [], energias: [], dano: 0, entrou: turno, evoluiu: -1 });

function tirarDaMao(L: LadoT, uid: number): Carta {
  const i = L.mao.findIndex((m) => m.uid === uid);
  return L.mao.splice(i, 1)[0]!;
}

function sorteio(e: EstadoT): number {
  const r = semente(e.sorte)();
  e.sorte = (e.sorte + 0x6d2b79f5) | 0;
  return r;
}

export function aplicarT(estado: EstadoT, a: AcaoT): EstadoT {
  const erro = validar(estado, a);
  if (erro) throw new JogadaInvalidaT(erro);
  const e: EstadoT = structuredClone(estado);
  e.eventos = [];
  const quem = quemAge(e);
  const L = e.lados[quem];
  switch (a.t) {
    case 'preparar': {
      L.ativo = novoBicho(tirarDaMao(L, a.ativo), 0);
      L.banco = a.banco.map((u) => novoBicho(tirarDaMao(L, u), 0));
      L.pronto = true;
      e.eventos.push({ t: 'preparou', lado: quem });
      if (e.lados[0].pronto && e.lados[1].pronto) {
        e.fase = 'principal';
        e.turno = 1;
        comecarTurno(e);
      }
      break;
    }
    case 'basico': {
      const m = tirarDaMao(L, a.uid);
      L.banco.push(novoBicho(m, e.turno));
      e.eventos.push({ t: 'basico', lado: quem, carta: m.carta });
      break;
    }
    case 'evoluir': {
      const m = tirarDaMao(L, a.uid);
      const b = acharEmCampo(L, a.alvo)!;
      e.eventos.push({ t: 'evoluiu', lado: quem, de: b.carta, carta: m.carta });
      b.abaixo.push(b.carta);
      b.carta = m.carta;
      b.evoluiu = e.turno;
      break;
    }
    case 'energia': {
      const m = tirarDaMao(L, a.uid);
      const b = acharEmCampo(L, a.alvo)!;
      b.energias.push(m.carta);
      L.energiaPosta = true;
      e.eventos.push({ t: 'energia', lado: quem, carta: m.carta, em: b.carta });
      break;
    }
    case 'apoio': {
      const m = tirarDaMao(L, a.uid);
      const c = cartaT(m.carta);
      e.eventos.push({ t: 'apoio', lado: quem, carta: m.carta });
      if (c.efeito === 'fruta') {
        const b = acharEmCampo(L, a.alvo!)!;
        const n = Math.min(30, b.dano);
        b.dano -= n;
        e.eventos.push({ t: 'cura', lado: quem, uid: b.uid, n });
      } else if (c.efeito === 'assobio') trocarAtivo(e, quem, a.alvo!);
      else if (c.efeito === 'mochila') comprar(e, quem, 2);
      else if (c.efeito === 'binoculo') {
        const i = L.baralho.findIndex((x) => cartaT(x).tipo === 'bicho');
        if (i >= 0) {
          const [x] = L.baralho.splice(i, 1);
          L.mao.push({ uid: e.proximoUid++, carta: x! });
        }
        L.baralho = embaralhar(L.baralho, () => sorteio(e));
      }
      L.descarte.push(m.carta);
      break;
    }
    case 'recuar': {
      const custo = cartaT(L.ativo!.carta).recuo ?? 0;
      // sai primeiro a energia que o bicho menos precisa: as do fim da fila
      L.descarte.push(...L.ativo!.energias.splice(L.ativo!.energias.length - custo, custo));
      L.recuou = true;
      trocarAtivo(e, quem, a.para);
      break;
    }
    case 'atacar': {
      atacar(e, quem, a.i);
      if (e.vencedor === null && e.fase !== 'promover') passarVez(e);
      break;
    }
    case 'passar': {
      passarVez(e);
      break;
    }
    case 'promover': {
      const i = L.banco.findIndex((b) => b.uid === a.uid);
      L.ativo = L.banco.splice(i, 1)[0]!;
      e.eventos.push({ t: 'promoveu', lado: quem, carta: L.ativo.carta });
      e.promover = null;
      e.fase = 'principal';
      // quem perdeu o ativo no ataque do outro escolhe o novo, e aí o turno passa
      passarVez(e);
      break;
    }
  }
  return e;
}

function trocarAtivo(e: EstadoT, l: Lado, para: number) {
  const L = e.lados[l];
  const i = L.banco.findIndex((b) => b.uid === para);
  const entra = L.banco[i]!;
  const sai = L.ativo!;
  L.banco[i] = sai;
  L.ativo = entra;
  e.eventos.push({ t: 'recuou', lado: l, sai: sai.carta, entra: entra.carta });
}

function comprar(e: EstadoT, l: Lado, n: number): boolean {
  const L = e.lados[l];
  for (let k = 0; k < n; k++) {
    const c = L.baralho.shift();
    if (!c) return false;
    L.mao.push({ uid: e.proximoUid++, carta: c });
    e.eventos.push({ t: 'compra', lado: l });
  }
  return true;
}

function comecarTurno(e: EstadoT) {
  const L = e.lados[e.vez];
  L.turnos += 1;
  L.energiaPosta = false;
  L.recuou = false;
  e.eventos.push({ t: 'turno', lado: e.vez });
  // sem carta para comprar no começo do turno, perde a partida
  if (!comprar(e, e.vez, 1)) {
    e.eventos.push({ t: 'semCarta', lado: e.vez });
    e.vencedor = outro(e.vez);
  }
}

function passarVez(e: EstadoT) {
  e.vez = outro(e.vez);
  e.turno += 1;
  comecarTurno(e);
}

function danoEm(e: EstadoT, l: Lado, b: BichoT, n: number, extra: { fraqueza?: boolean; resistencia?: boolean } = {}) {
  if (n <= 0) return;
  b.dano += n;
  e.eventos.push({ t: 'dano', lado: l, uid: b.uid, n, ...(extra.fraqueza ? { fraqueza: true } : {}), ...(extra.resistencia ? { resistencia: true } : {}) });
}

function atacar(e: EstadoT, quem: Lado, i: number) {
  const L = e.lados[quem];
  const dfd = outro(quem);
  const D = e.lados[dfd];
  const at = L.ativo!;
  const ataque = cartaT(at.carta).ataques![i]!;
  e.eventos.push({ t: 'ataque', lado: quem, carta: at.carta, ataque: ataque.nome });
  let base = ataque.dano;
  if (ataque.efeito === 'moeda') {
    const cara = sorteio(e) < 0.5;
    e.eventos.push({ t: 'moeda', lado: quem, cara });
    if (cara) base += ataque.extra ?? 0;
  }
  if (D.ativo) {
    const d = danoContra(at.carta, D.ativo.carta, base);
    danoEm(e, dfd, D.ativo, d.n, d);
  }
  if (ataque.efeito === 'banco10') for (const b of D.banco) danoEm(e, dfd, b, 10);
  if (ataque.efeito === 'cura20') {
    const n = Math.min(20, at.dano);
    at.dano -= n;
    if (n) e.eventos.push({ t: 'cura', lado: quem, uid: at.uid, n });
  }
  if (ataque.efeito === 'compra1') comprar(e, quem, 1);
  derrubar(e, quem);
}

/** tira do campo os bichos do outro que zeraram os PV; quem atacou pega 1 prêmio por bicho */
function derrubar(e: EstadoT, atacante: Lado) {
  const dfd = outro(atacante);
  const D = e.lados[dfd];
  const A = e.lados[atacante];
  const cai = (b: BichoT) => {
    D.descarte.push(...b.abaixo, b.carta, ...b.energias);
    e.eventos.push({ t: 'caiu', lado: dfd, uid: b.uid, carta: b.carta });
    const p = A.premios.shift();
    if (p) {
      A.mao.push({ uid: e.proximoUid++, carta: p });
      e.eventos.push({ t: 'premio', lado: atacante, restam: A.premios.length });
    }
  };
  if (D.ativo && pvRestante(D.ativo) <= 0) {
    cai(D.ativo);
    D.ativo = null;
  }
  for (const b of D.banco.filter((x) => pvRestante(x) <= 0)) cai(b);
  D.banco = D.banco.filter((x) => pvRestante(x) > 0);
  if (A.premios.length === 0) {
    e.vencedor = atacante;
    return;
  }
  if (!D.ativo) {
    if (D.banco.length === 0) {
      e.eventos.push({ t: 'semBicho', lado: dfd });
      e.vencedor = atacante;
    } else {
      e.fase = 'promover';
      e.promover = dfd;
    }
  }
}
