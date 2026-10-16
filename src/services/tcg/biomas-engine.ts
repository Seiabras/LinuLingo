/**
 * DUELO DOS BIOMAS: o jogo de cartas do LinuLingo que usa as regras principais do Magic: The
 * Gathering (Richard Garfield, Wizards of the Coast, 1993), com cartas nossas. Só as regras e a
 * mecânica: nenhum nome, termo, texto ou desenho do jogo homenageado.
 *
 * O que vem das regras principais: 20 de vida; um bioma por turno, que vira para dar 1 energia; custo
 * com parte do bioma e parte livre; turno em fases (desvirar, comprar, principal, combate, principal,
 * fim); o bicho que chega não ataca no mesmo turno (a não ser com Ímpeto); no combate, quem ataca
 * declara e vira os atacantes e quem defende escolhe os bloqueios; o dano some no fim do turno;
 * feitiço só na fase principal e magia rápida também no combate; perde quem zera a vida ou não tem
 * carta para comprar; mão de no máximo 7 no fim do turno.
 *
 * O que ficou de fora, para simplificar (a ficha diz): a pilha completa de respostas (aqui, só a
 * janela de magias rápidas depois dos bloqueios, e cada magia resolve na hora), cada atacante ser
 * bloqueado por mais de um bicho, habilidades ativadas, a troca de mão inicial e mais de 2 jogadores.
 * No fim do turno, a mão acima de 7 descarta sozinha os biomas a mais e depois as cartas mais caras.
 */
import { BIOMAS, TEMAS_TCG, bichoDe, embaralhar, expandir, type Bioma, type Rng } from './comum';

export type Lado = 0 | 1;
export type Hab = 'voo' | 'alcance' | 'impeto' | 'vigia' | 'atropelar';
export type TipoCartaB = 'bioma' | 'bicho' | 'feitico' | 'rapida';
export type EfeitoB = 'compra1' | 'vida2' | 'dano3' | 'pulo' | 'rugido' | 'estouro' | 'compra2' | 'amontoado' | 'devolver' | 'avalanche' | 'neblina';

export interface CartaB {
  id: string;
  nome: string;
  tipo: TipoCartaB;
  bioma: Bioma;
  /** custo: quantas energias do bioma e quantas livres (de qualquer bioma) */
  custo?: { bioma: number; livre: number };
  forca?: number;
  resistencia?: number;
  habs?: Hab[];
  efeito?: EfeitoB;
  texto: string;
  /** o bicho desenhado na carta (id de `BICHOS`) */
  arte?: string;
}

const bicho = (id: string, bioma: Bioma, b: number, livre: number, forca: number, resistencia: number, habs: Hab[] = [], extra: Partial<CartaB> = {}): CartaB => ({
  id,
  nome: bichoDe(id).nome,
  tipo: 'bicho',
  bioma,
  custo: { bioma: b, livre },
  forca,
  resistencia,
  habs,
  texto: habs.map((h) => NOME_HAB[h]).join(', '),
  arte: id,
  ...extra,
});

export const NOME_HAB: Record<Hab, string> = { voo: 'Voo', alcance: 'Alcance', impeto: 'Ímpeto', vigia: 'Vigia', atropelar: 'Atropelar' };
export const SOBRE_HAB: Record<Hab, string> = {
  voo: 'só pode ser bloqueado por quem tem Voo ou Alcance',
  alcance: 'bloqueia quem tem Voo',
  impeto: 'ataca no turno em que entra',
  vigia: 'ataca sem virar',
  atropelar: 'o dano que passa do bloqueador vai para o dono dele',
};
const magia = (id: string, nome: string, tipo: 'feitico' | 'rapida', bioma: Bioma, b: number, livre: number, efeito: EfeitoB, texto: string): CartaB => ({ id, nome, tipo, bioma, custo: { bioma: b, livre }, efeito, texto });

export const CARTAS_B: Record<string, CartaB> = Object.fromEntries(
  [
    { id: 'bioma-gelo', nome: 'Gelo', tipo: 'bioma', bioma: 'gelo', texto: 'Vire para ganhar 1 energia de gelo.' } as CartaB,
    { id: 'bioma-mata', nome: 'Mata', tipo: 'bioma', bioma: 'mata', texto: 'Vire para ganhar 1 energia de mata.' } as CartaB,
    { id: 'bioma-montanha', nome: 'Montanha', tipo: 'bioma', bioma: 'montanha', texto: 'Vire para ganhar 1 energia de montanha.' } as CartaB,
    // gelo
    bicho('kiko', 'gelo', 1, 0, 0, 1, [], { efeito: 'compra1', texto: 'Ao entrar, compre 1 carta.' }),
    bicho('dede', 'gelo', 1, 0, 1, 1, ['impeto']),
    bicho('pipo', 'gelo', 1, 1, 2, 2),
    bicho('floco', 'gelo', 1, 1, 1, 2, ['voo']),
    bicho('topete', 'gelo', 1, 1, 2, 1, ['impeto']),
    bicho('wendel', 'gelo', 1, 2, 1, 3, ['alcance']),
    bicho('duque', 'gelo', 1, 2, 3, 2),
    bicho('vento', 'gelo', 1, 3, 2, 3, ['voo']),
    bicho('malhada', 'gelo', 1, 3, 4, 3),
    bicho('tobias', 'gelo', 1, 4, 4, 4, ['vigia']),
    bicho('bolota', 'gelo', 2, 3, 3, 5, ['alcance']),
    bicho('jubi', 'gelo', 2, 5, 6, 6),
    magia('corrente-fria', 'Corrente fria', 'rapida', 'gelo', 1, 1, 'dano3', '3 de dano a um bicho.'),
    magia('amontoado', 'Amontoado', 'feitico', 'gelo', 1, 1, 'amontoado', 'Você ganha 4 de vida e compra 1 carta.'),
    // mata
    bicho('formiga', 'mata', 1, 0, 1, 1, ['impeto']),
    bicho('mico', 'mata', 1, 1, 2, 1, ['impeto']),
    bicho('sapo', 'mata', 1, 1, 2, 3),
    bicho('borboleta', 'mata', 1, 1, 2, 1, ['voo']),
    bicho('arara', 'mata', 1, 2, 2, 2, ['voo']),
    bicho('capivara', 'mata', 1, 2, 2, 4),
    bicho('tamandua', 'mata', 1, 3, 3, 4, ['alcance']),
    bicho('onca', 'mata', 2, 2, 4, 3, ['impeto']),
    bicho('sucuri', 'mata', 2, 4, 5, 6),
    magia('pulo-onca', 'Pulo da onça', 'rapida', 'mata', 1, 0, 'pulo', 'Um bicho seu ganha +3/+3 até o fim do turno.'),
    magia('chuva', 'Chuva da tarde', 'feitico', 'mata', 1, 2, 'compra2', 'Compre 2 cartas.'),
    // montanha
    bicho('colibri', 'montanha', 1, 0, 1, 1, ['voo']),
    bicho('lhama', 'montanha', 1, 1, 2, 2, [], { efeito: 'vida2', texto: 'Ao entrar, você ganha 2 de vida.' }),
    bicho('vicunha', 'montanha', 1, 1, 2, 1, ['impeto']),
    bicho('panda', 'montanha', 1, 2, 3, 3),
    bicho('condor', 'montanha', 1, 3, 3, 4, ['voo']),
    bicho('iaque', 'montanha', 1, 3, 2, 5, ['vigia']),
    bicho('leopardo-neves', 'montanha', 2, 2, 4, 3, ['impeto']),
    bicho('aguia', 'montanha', 1, 4, 4, 4, ['voo']),
    magia('avalanche', 'Avalanche', 'feitico', 'montanha', 1, 3, 'avalanche', '2 de dano em cada bicho sem Voo.'),
    magia('vento-altitude', 'Vento de altitude', 'rapida', 'montanha', 1, 1, 'devolver', 'Um bicho volta para a mão do dono.'),
    magia('traducao', 'Tradução', 'feitico', 'montanha', 1, 2, 'compra2', 'Compre 2 cartas.'),
    magia('neblina', 'Neblina', 'rapida', 'montanha', 1, 0, 'neblina', 'Vire um bicho.'),
    { id: 'bioma-savana', nome: 'Savana', tipo: 'bioma', bioma: 'savana', texto: 'Vire para ganhar 1 energia de savana.' } as CartaB,
    // savana
    bicho('suricato', 'savana', 1, 0, 1, 2, ['vigia']),
    bicho('avestruz', 'savana', 1, 1, 2, 1, ['impeto']),
    bicho('hiena', 'savana', 1, 1, 2, 2),
    bicho('zebra', 'savana', 1, 2, 3, 2),
    bicho('gnu', 'savana', 1, 2, 3, 3),
    bicho('girafa', 'savana', 1, 3, 2, 5, ['alcance']),
    bicho('leao', 'savana', 2, 2, 4, 4),
    bicho('rinoceronte', 'savana', 2, 3, 5, 4, ['atropelar']),
    bicho('elefante', 'savana', 2, 4, 6, 6, ['atropelar']),
    magia('estouro', 'Estouro da manada', 'feitico', 'savana', 1, 2, 'estouro', 'Seus bichos ganham +1/+1 até o fim do turno.'),
    magia('rugido', 'Rugido', 'rapida', 'savana', 1, 0, 'rugido', 'Um bicho seu ganha +2/+2 até o fim do turno.'),
  ].map((c) => [c.id, c]),
);

export type BaralhoB = Bioma;

export const BARALHOS_B: Record<BaralhoB, { nome: string; sobre: string; lista: Record<string, number> }> = {
  gelo: {
    ...TEMAS_TCG.gelo,
    lista: { 'bioma-gelo': 17, kiko: 2, dede: 2, pipo: 2, floco: 2, topete: 2, wendel: 2, duque: 2, vento: 2, malhada: 1, tobias: 1, bolota: 1, jubi: 1, 'corrente-fria': 2, amontoado: 1 },
  },
  mata: {
    ...TEMAS_TCG.mata,
    lista: { 'bioma-mata': 17, formiga: 3, mico: 3, sapo: 2, borboleta: 2, arara: 2, capivara: 2, tamandua: 2, onca: 2, sucuri: 1, 'pulo-onca': 2, chuva: 2 },
  },
  montanha: {
    ...TEMAS_TCG.montanha,
    lista: { 'bioma-montanha': 17, colibri: 3, lhama: 3, vicunha: 2, panda: 2, condor: 3, iaque: 2, 'leopardo-neves': 2, aguia: 1, avalanche: 1, 'vento-altitude': 2, traducao: 1, neblina: 1 },
  },
  savana: {
    ...TEMAS_TCG.savana,
    lista: { 'bioma-savana': 17, suricato: 3, avestruz: 2, hiena: 3, zebra: 2, gnu: 2, girafa: 2, leao: 2, rinoceronte: 2, elefante: 1, estouro: 2, rugido: 2 },
  },
};

export const VIDA = 20;
export const MAO_INICIAL = 7;
export const MAO_MAX = 7;

export const cartaB = (id: string): CartaB => {
  const c = CARTAS_B[id];
  if (!c) throw new Error(`carta desconhecida: ${id}`);
  return c;
};
export const custoTotal = (c: CartaB) => (c.custo ? c.custo.bioma + c.custo.livre : 0);
export const temHab = (carta: string, h: Hab) => (cartaB(carta).habs ?? []).includes(h);

// ── o estado ────────────────────────────────────────────────────────────────────────────────────

export interface Carta {
  uid: number;
  carta: string;
}
export interface BiomaEmJogo extends Carta {
  virado: boolean;
}
export interface BichoEmJogo extends Carta {
  virado: boolean;
  dano: number;
  /** o turno em que entrou: sem Ímpeto, só ataca num turno seguinte */
  entrou: number;
  /** +força e +resistência até o fim do turno */
  bonus: number;
}

export interface LadoB {
  baralhoId: BaralhoB;
  vida: number;
  baralho: string[];
  mao: Carta[];
  biomas: BiomaEmJogo[];
  bichos: BichoEmJogo[];
  descarte: string[];
  biomaJogado: boolean;
}

export type Fase = 'principal1' | 'bloqueio' | 'janela' | 'principal2';

export interface Combate {
  atacantes: number[];
  /** atacante → bloqueador */
  bloqueios: Record<number, number>;
}

export type AlvoB = { lado: Lado; uid: number };

export type EventoB =
  | { t: 'turno'; lado: Lado }
  | { t: 'compra'; lado: Lado }
  | { t: 'bioma'; lado: Lado; carta: string }
  | { t: 'lancou'; lado: Lado; carta: string; alvo?: AlvoB }
  | { t: 'atacam'; lado: Lado; uids: number[] }
  | { t: 'bloqueiam'; lado: Lado; pares: [number, number][] }
  | { t: 'dano'; alvo: AlvoB | { lado: Lado; vida: true }; n: number }
  | { t: 'morreu'; lado: Lado; uid: number; carta: string }
  | { t: 'voltou'; lado: Lado; carta: string }
  | { t: 'vida'; lado: Lado; n: number }
  | { t: 'descartou'; lado: Lado; carta: string }
  | { t: 'semCarta'; lado: Lado };

export interface EstadoB {
  lados: [LadoB, LadoB];
  vez: Lado;
  turno: number;
  fase: Fase;
  combate: Combate | null;
  /** já atacou neste turno */
  atacou: boolean;
  /** na janela de magias rápidas: quem pode agir e quantos passaram seguidos */
  janela: { age: Lado; passes: number } | null;
  vencedor: Lado | null;
  proximoUid: number;
  eventos: EventoB[];
}

export type AcaoB =
  | { t: 'bioma'; uid: number }
  | { t: 'lancar'; uid: number; alvo?: AlvoB }
  | { t: 'atacar'; uids: number[] }
  | { t: 'bloquear'; pares: [number, number][] }
  | { t: 'passar' }
  | { t: 'fim' };

export class JogadaInvalidaB extends Error {}

export const outro = (l: Lado): Lado => (l === 0 ? 1 : 0);

export const forcaDe = (b: BichoEmJogo) => (cartaB(b.carta).forca ?? 0) + b.bonus;
export const resistenciaDe = (b: BichoEmJogo) => (cartaB(b.carta).resistencia ?? 0) + b.bonus;
export const vivo = (b: BichoEmJogo) => b.dano < resistenciaDe(b);

/** quem age agora: na fase principal, quem tem a vez; no bloqueio, quem defende; na janela, a vez da janela */
export function quemAge(e: EstadoB): Lado {
  if (e.fase === 'bloqueio') return outro(e.vez);
  if (e.fase === 'janela' && e.janela) return e.janela.age;
  return e.vez;
}

export function novaPartidaB(b0: BaralhoB, b1: BaralhoB, rng: Rng, comeca: Lado = 0): EstadoB {
  let uid = 1;
  const lado = (b: BaralhoB): LadoB => {
    const baralho = embaralhar(expandir(BARALHOS_B[b].lista), rng);
    const mao = baralho.splice(0, MAO_INICIAL).map((carta) => ({ uid: uid++, carta }));
    return { baralhoId: b, vida: VIDA, baralho, mao, biomas: [], bichos: [], descarte: [], biomaJogado: false };
  };
  const e: EstadoB = { lados: [lado(b0), lado(b1)], vez: comeca, turno: 1, fase: 'principal1', combate: null, atacou: false, janela: null, vencedor: null, proximoUid: uid, eventos: [{ t: 'turno', lado: comeca }] };
  // quem começa não compra no 1º turno
  return e;
}

// ── energia ─────────────────────────────────────────────────────────────────────────────────────

export const energiaLivre = (L: LadoB) => L.biomas.filter((b) => !b.virado);

export function podePagar(L: LadoB, c: CartaB): boolean {
  if (!c.custo) return true;
  const livres = energiaLivre(L);
  const doBioma = livres.filter((b) => cartaB(b.carta).bioma === c.bioma).length;
  return doBioma >= c.custo.bioma && livres.length >= c.custo.bioma + c.custo.livre;
}

function pagar(L: LadoB, c: CartaB) {
  if (!c.custo) return;
  let falta = c.custo.bioma;
  for (const b of L.biomas) if (falta > 0 && !b.virado && cartaB(b.carta).bioma === c.bioma) {
    b.virado = true;
    falta--;
  }
  let livre = c.custo.livre;
  for (const b of L.biomas) if (livre > 0 && !b.virado) {
    b.virado = true;
    livre--;
  }
}

// ── validação ───────────────────────────────────────────────────────────────────────────────────

const ehPrincipal = (f: Fase) => f === 'principal1' || f === 'principal2';

export const podeAtacar = (e: EstadoB, b: BichoEmJogo) => !b.virado && forcaDe(b) > 0 && (b.entrou < e.turno || temHab(b.carta, 'impeto'));

/** o bloqueador pode segurar o atacante? (o Voo só é bloqueado por Voo ou Alcance) */
export const podeBloquear = (bloq: BichoEmJogo, atac: BichoEmJogo) => !bloq.virado && (!temHab(atac.carta, 'voo') || temHab(bloq.carta, 'voo') || temHab(bloq.carta, 'alcance'));

export function alvosDaMagia(e: EstadoB, carta: string, quem: Lado): AlvoB[] {
  const ef = cartaB(carta).efeito;
  const todos = ([0, 1] as Lado[]).flatMap((l) => e.lados[l].bichos.map((b) => ({ lado: l, uid: b.uid })));
  if (ef === 'dano3' || ef === 'devolver' || ef === 'neblina') return todos;
  if (ef === 'pulo' || ef === 'rugido') return e.lados[quem].bichos.map((b) => ({ lado: quem, uid: b.uid }));
  return [];
}
export const precisaDeAlvoB = (carta: string) => ['dano3', 'devolver', 'neblina', 'pulo', 'rugido'].includes(cartaB(carta).efeito ?? '');

/** As jogadas simples que dá para fazer agora (sem as combinações de ataque e bloqueio, que são livres). */
export function lancesSimples(e: EstadoB): AcaoB[] {
  if (e.vencedor !== null) return [];
  const quem = quemAge(e);
  const L = e.lados[quem];
  const out: AcaoB[] = [];
  const principal = ehPrincipal(e.fase) && quem === e.vez;
  for (const m of L.mao) {
    const c = cartaB(m.carta);
    if (c.tipo === 'bioma') {
      if (principal && !L.biomaJogado) out.push({ t: 'bioma', uid: m.uid });
      continue;
    }
    const pode = c.tipo === 'rapida' ? principal || e.fase === 'janela' : principal;
    if (!pode || !podePagar(L, c)) continue;
    if (precisaDeAlvoB(m.carta)) for (const alvo of alvosDaMagia(e, m.carta, quem)) out.push({ t: 'lancar', uid: m.uid, alvo });
    else out.push({ t: 'lancar', uid: m.uid });
  }
  if (e.fase === 'janela') out.push({ t: 'passar' });
  if (principal) out.push({ t: 'fim' });
  if (e.fase === 'bloqueio') out.push({ t: 'bloquear', pares: [] });
  return out;
}

function validar(e: EstadoB, a: AcaoB): string | null {
  if (e.vencedor !== null) return 'a partida acabou';
  const quem = quemAge(e);
  const L = e.lados[quem];
  switch (a.t) {
    case 'atacar': {
      if (e.fase !== 'principal1' || e.atacou) return 'só dá para atacar uma vez, na primeira fase principal';
      if (!a.uids.length) return 'escolha ao menos um atacante';
      if (new Set(a.uids).size !== a.uids.length) return 'atacante repetido';
      for (const u of a.uids) {
        const b = L.bichos.find((x) => x.uid === u);
        if (!b || !podeAtacar(e, b)) return 'esse bicho não pode atacar';
      }
      return null;
    }
    case 'bloquear': {
      if (e.fase !== 'bloqueio') return 'não é hora de bloquear';
      const usados = new Set<number>();
      const atacados = new Set<number>();
      for (const [bl, at] of a.pares) {
        if (usados.has(bl) || atacados.has(at)) return 'cada bicho bloqueia um atacante, e cada atacante é bloqueado por um';
        usados.add(bl);
        atacados.add(at);
        const bloq = L.bichos.find((x) => x.uid === bl);
        const atac = e.lados[e.vez].bichos.find((x) => x.uid === at);
        if (!bloq || !atac || !e.combate!.atacantes.includes(at)) return 'bloqueio inválido';
        if (!podeBloquear(bloq, atac)) return 'esse bicho não pode bloquear esse atacante';
      }
      return null;
    }
    default: {
      const ok = lancesSimples(e).some((x) => JSON.stringify(x) === JSON.stringify(a) || (x.t === a.t && 'uid' in x && 'uid' in a && x.uid === a.uid && JSON.stringify((x as { alvo?: AlvoB }).alvo) === JSON.stringify((a as { alvo?: AlvoB }).alvo)));
      return ok ? null : 'jogada inválida';
    }
  }
}

export const ehValida = (e: EstadoB, a: AcaoB) => validar(e, a) === null;

// ── aplicar ─────────────────────────────────────────────────────────────────────────────────────

export function aplicarB(estado: EstadoB, a: AcaoB): EstadoB {
  const erro = validar(estado, a);
  if (erro) throw new JogadaInvalidaB(erro);
  const e: EstadoB = structuredClone(estado);
  e.eventos = [];
  const quem = quemAge(e);
  const L = e.lados[quem];
  switch (a.t) {
    case 'bioma': {
      const i = L.mao.findIndex((m) => m.uid === a.uid);
      const [m] = L.mao.splice(i, 1);
      L.biomas.push({ ...m!, virado: false });
      L.biomaJogado = true;
      e.eventos.push({ t: 'bioma', lado: quem, carta: m!.carta });
      break;
    }
    case 'lancar': {
      const i = L.mao.findIndex((m) => m.uid === a.uid);
      const [m] = L.mao.splice(i, 1);
      const c = cartaB(m!.carta);
      pagar(L, c);
      e.eventos.push({ t: 'lancou', lado: quem, carta: c.id, alvo: a.alvo });
      if (c.tipo === 'bicho') {
        L.bichos.push({ ...m!, virado: false, dano: 0, entrou: e.turno, bonus: 0 });
        if (c.efeito === 'compra1') comprar(e, quem, 1);
        if (c.efeito === 'vida2') ganhar(e, quem, 2);
      } else {
        L.descarte.push(c.id);
        resolver(e, quem, c.efeito!, a.alvo);
      }
      limpar(e);
      if (e.fase === 'janela') e.janela = { age: outro(quem), passes: 0 };
      break;
    }
    case 'atacar': {
      for (const u of a.uids) {
        const b = L.bichos.find((x) => x.uid === u)!;
        if (!temHab(b.carta, 'vigia')) b.virado = true;
      }
      e.atacou = true;
      e.combate = { atacantes: [...a.uids], bloqueios: {} };
      e.eventos.push({ t: 'atacam', lado: quem, uids: [...a.uids] });
      e.fase = 'bloqueio';
      break;
    }
    case 'bloquear': {
      for (const [bl, at] of a.pares) e.combate!.bloqueios[at] = bl;
      e.eventos.push({ t: 'bloqueiam', lado: quem, pares: a.pares });
      // depois dos bloqueios, a janela de magias rápidas: quem defende age primeiro
      e.fase = 'janela';
      e.janela = { age: quem, passes: 0 };
      break;
    }
    case 'passar': {
      const j = e.janela!;
      if (j.passes + 1 >= 2) {
        e.janela = null;
        danoDeCombate(e);
        e.fase = 'principal2';
      } else e.janela = { age: outro(j.age), passes: j.passes + 1 };
      break;
    }
    case 'fim': {
      fimDoTurno(e);
      break;
    }
  }
  verificarFim(e);
  return e;
}

function ganhar(e: EstadoB, l: Lado, n: number) {
  e.lados[l].vida += n;
  e.eventos.push({ t: 'vida', lado: l, n });
}

function comprar(e: EstadoB, l: Lado, n: number) {
  const L = e.lados[l];
  for (let k = 0; k < n; k++) {
    const c = L.baralho.shift();
    if (!c) {
      // sem carta para comprar, perde a partida
      e.eventos.push({ t: 'semCarta', lado: l });
      e.vencedor = outro(l);
      return;
    }
    L.mao.push({ uid: e.proximoUid++, carta: c });
    e.eventos.push({ t: 'compra', lado: l });
  }
}

function acharBicho(e: EstadoB, alvo: AlvoB) {
  return e.lados[alvo.lado].bichos.find((b) => b.uid === alvo.uid);
}

function resolver(e: EstadoB, quem: Lado, ef: EfeitoB, alvo?: AlvoB) {
  const b = alvo ? acharBicho(e, alvo) : undefined;
  switch (ef) {
    case 'dano3':
      if (b) {
        b.dano += 3;
        e.eventos.push({ t: 'dano', alvo: alvo!, n: 3 });
      }
      break;
    case 'pulo':
      if (b) b.bonus += 3;
      break;
    case 'rugido':
      if (b) b.bonus += 2;
      break;
    case 'estouro':
      for (const x of e.lados[quem].bichos) x.bonus += 1;
      break;
    case 'neblina':
      if (b) b.virado = true;
      break;
    case 'devolver':
      if (b && alvo) {
        const D = e.lados[alvo.lado];
        D.bichos = D.bichos.filter((x) => x.uid !== b.uid);
        D.mao.push({ uid: e.proximoUid++, carta: b.carta });
        e.eventos.push({ t: 'voltou', lado: alvo.lado, carta: b.carta });
        if (e.combate) {
          e.combate.atacantes = e.combate.atacantes.filter((u) => u !== b.uid);
          for (const [at, bl] of Object.entries(e.combate.bloqueios)) if (bl === b.uid) delete e.combate.bloqueios[Number(at)];
        }
      }
      break;
    case 'compra2':
      comprar(e, quem, 2);
      break;
    case 'amontoado':
      ganhar(e, quem, 4);
      comprar(e, quem, 1);
      break;
    case 'avalanche':
      for (const l of [0, 1] as Lado[])
        for (const x of e.lados[l].bichos)
          if (!temHab(x.carta, 'voo')) {
            x.dano += 2;
            e.eventos.push({ t: 'dano', alvo: { lado: l, uid: x.uid }, n: 2 });
          }
      break;
    default:
      break;
  }
}

function limpar(e: EstadoB) {
  for (const l of [0, 1] as Lado[]) {
    const L = e.lados[l];
    for (const b of L.bichos.filter((x) => !vivo(x))) {
      L.descarte.push(b.carta);
      e.eventos.push({ t: 'morreu', lado: l, uid: b.uid, carta: b.carta });
    }
    L.bichos = L.bichos.filter(vivo);
  }
}

function danoDeCombate(e: EstadoB) {
  const atk = e.lados[e.vez];
  const dfd = outro(e.vez);
  const D = e.lados[dfd];
  for (const u of e.combate!.atacantes) {
    const a = atk.bichos.find((x) => x.uid === u);
    if (!a) continue;
    const blUid = e.combate!.bloqueios[u];
    const bl = blUid !== undefined ? D.bichos.find((x) => x.uid === blUid) : undefined;
    if (blUid !== undefined && !bl) continue; // o bloqueador saiu: o atacante fica bloqueado
    if (!bl) {
      D.vida -= forcaDe(a);
      e.eventos.push({ t: 'dano', alvo: { lado: dfd, vida: true }, n: forcaDe(a) });
    } else {
      // com Atropelar, o que passa da resistência que falta ao bloqueador vai para o dono dele
      const noBloq = temHab(a.carta, 'atropelar') ? Math.min(forcaDe(a), Math.max(0, resistenciaDe(bl) - bl.dano)) : forcaDe(a);
      const sobra = forcaDe(a) - noBloq;
      bl.dano += noBloq;
      a.dano += forcaDe(bl);
      e.eventos.push({ t: 'dano', alvo: { lado: dfd, uid: bl.uid }, n: noBloq });
      if (sobra > 0) {
        D.vida -= sobra;
        e.eventos.push({ t: 'dano', alvo: { lado: dfd, vida: true }, n: sobra });
      }
      e.eventos.push({ t: 'dano', alvo: { lado: e.vez, uid: a.uid }, n: forcaDe(bl) });
    }
  }
  e.combate = null;
  limpar(e);
  verificarFim(e);
}

function fimDoTurno(e: EstadoB) {
  const L = e.lados[e.vez];
  // a mão acima de 7: saem primeiro os biomas a mais, depois as cartas mais caras
  while (L.mao.length > MAO_MAX) {
    const biomasNaMao = L.mao.filter((m) => cartaB(m.carta).tipo === 'bioma');
    const sai = biomasNaMao.length > 2 ? biomasNaMao[0]! : [...L.mao].sort((x, y) => custoTotal(cartaB(y.carta)) - custoTotal(cartaB(x.carta)))[0]!;
    L.mao = L.mao.filter((m) => m.uid !== sai.uid);
    L.descarte.push(sai.carta);
    e.eventos.push({ t: 'descartou', lado: e.vez, carta: sai.carta });
  }
  // o dano e os bônus somem no fim do turno
  for (const l of [0, 1] as Lado[])
    for (const b of e.lados[l].bichos) {
      b.dano = 0;
      b.bonus = 0;
    }
  e.vez = outro(e.vez);
  e.turno += 1;
  e.fase = 'principal1';
  e.atacou = false;
  e.combate = null;
  const N = e.lados[e.vez];
  N.biomaJogado = false;
  for (const b of N.biomas) b.virado = false;
  for (const b of N.bichos) b.virado = false;
  e.eventos.push({ t: 'turno', lado: e.vez });
  comprar(e, e.vez, 1);
}

function verificarFim(e: EstadoB) {
  if (e.vencedor !== null) return;
  const [a, b] = e.lados;
  if (a.vida <= 0 && b.vida <= 0) e.vencedor = outro(e.vez);
  else if (a.vida <= 0) e.vencedor = 1;
  else if (b.vida <= 0) e.vencedor = 0;
}

export const NOME_BIOMA = (b: Bioma) => BIOMAS[b].nome;
