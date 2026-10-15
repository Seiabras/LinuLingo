/**
 * Motor do Encantados (Fel Barros e Shea “Sheamus” Parkes; Ace Studios, 3ª edição, 2020), só a
 * mecânica: os nomes das cartas e os efeitos estão reescritos com palavras do app. As regras e as
 * fontes estão em `data/outros-jogos/encantados.ts`.
 *
 * O estado é imutável: `aplicar(e, acao)` devolve um estado novo ou lança `JogadaInvalida`. Toda a
 * sorte (embaralhar) vem de `rng`, que o teste pode trocar por uma sequência fixa. O motor aceita 2
 * ou 3 jogadores, cada um com o seu jardim (o jogo em duplas, com 4, não está aqui).
 *
 * Os pontos impressos nas cartas foram lidos em fotos da 3ª edição na Ludopedia (consultadas em
 * 14/10/2026); a leitura dos Kobolds (2) é incerta, a foto está borrada.
 */
import type { NivelLinu } from './jogos-prefs';

export type Rng = () => number;

export type Raca = 'anoes' | 'elfos' | 'fadas' | 'faunos' | 'fogos' | 'gnomos' | 'goblins' | 'kobolds' | 'leprechauns' | 'trolls';
export type Cancao = 'primavera' | 'verao' | 'outono' | 'inverno';
export type Tipo = Raca | 'mimicos' | Cancao;

export interface InfoTipo {
  tipo: Tipo;
  nome: string;
  /** quantas cartas desse tipo há no baralho */
  qtd: number;
  /** pontos impressos nos cantos */
  valor: number;
  /** o poder, com palavras do app */
  poder: string;
  cancao?: boolean;
}

export const RACAS: Raca[] = ['anoes', 'elfos', 'fadas', 'faunos', 'fogos', 'gnomos', 'goblins', 'kobolds', 'leprechauns', 'trolls'];
export const CANCOES: Cancao[] = ['primavera', 'verao', 'outono', 'inverno'];

export const TIPOS: Record<Tipo, InfoTipo> = {
  anoes: { tipo: 'anoes', nome: 'Anões', qtd: 5, valor: 2, poder: 'Com 2 ou mais no seu jardim: ao comprar de uma pilha de descarte, você pega qualquer carta dela, não só a de cima.' },
  elfos: { tipo: 'elfos', nome: 'Elfos', qtd: 5, valor: 3, poder: 'Com 2 ou mais no seu jardim: na busca, você olha 3 cartas em vez de 2.' },
  fadas: { tipo: 'fadas', nome: 'Fadas', qtd: 5, valor: 1, poder: 'Com 2 ou mais no seu jardim: os mímicos do seu jardim valem 0 em vez de −3.' },
  faunos: { tipo: 'faunos', nome: 'Faunos', qtd: 5, valor: 0, poder: 'Com 2 ou mais no seu jardim: no fim da rodada, +2 pontos por canção no seu jardim.' },
  fogos: { tipo: 'fogos', nome: 'Fogos-fátuos', qtd: 5, valor: 2, poder: 'Com 2 ou mais no seu jardim: uma raça nova entra com só 2 cartas iguais, não 3.' },
  gnomos: { tipo: 'gnomos', nome: 'Gnomos', qtd: 5, valor: 3, poder: 'Com 2 ou mais no seu jardim: as cartas da busca vão todas para a mão, e depois você descarta qualquer carta da mão.' },
  goblins: { tipo: 'goblins', nome: 'Goblins', qtd: 4, valor: 3, poder: 'Quando o primeiro goblin entra no seu jardim: escolha um jogador (pode ser você) para comprar 2 cartas do monte.' },
  kobolds: { tipo: 'kobolds', nome: 'Kobolds', qtd: 4, valor: 2, poder: 'Quando o primeiro kobold entra no seu jardim: escolha uma carta de qualquer jardim e ponha no fundo do monte.' },
  leprechauns: { tipo: 'leprechauns', nome: 'Leprechauns', qtd: 5, valor: -4, poder: 'Com 2 ou mais no seu jardim: cada um vale +4 no fim da rodada, em vez de −4. O mímico não ajuda a pôr leprechaun no jardim.' },
  trolls: { tipo: 'trolls', nome: 'Trolls', qtd: 4, valor: 0, poder: 'Quando o primeiro troll entra no seu jardim: escolha uma carta em jogo e mude ela para qualquer jardim (pode ser o seu).' },
  mimicos: { tipo: 'mimicos', nome: 'Mímicos', qtd: 5, valor: -3, poder: 'Faz as vezes de uma carta de qualquer raça (um só por raça). Não liga poderes, não conta como raça para a canção do verão e vale sempre negativo.' },
  primavera: { tipo: 'primavera', nome: 'Canção da primavera', qtd: 3, valor: 0, cancao: true, poder: 'Ao tocar: escolha um jogador (pode ser você) para fazer uma busca extra.' },
  verao: { tipo: 'verao', nome: 'Canção do verão', qtd: 1, valor: -3, cancao: true, poder: 'No fim da rodada vale 8, em vez de −3, se o jardim onde ela está tiver 5 raças diferentes ou mais.' },
  outono: { tipo: 'outono', nome: 'Canção do outono', qtd: 2, valor: 0, cancao: true, poder: 'Ao tocar: escolha um jogador (pode ser você) para pegar as 4 cartas de cima de uma pilha de descarte. Ele escolhe a pilha.' },
  inverno: { tipo: 'inverno', nome: 'Canção do inverno', qtd: 2, valor: 0, cancao: true, poder: 'Ao tocar: pegue a carta de cima de uma pilha de descarte e faça uma busca extra.' },
};

export const ORDEM_TIPOS: Tipo[] = [...RACAS, 'mimicos', ...CANCOES];

export interface Carta {
  id: number;
  tipo: Tipo;
}

/** As 60 cartas, na ordem de `ORDEM_TIPOS`. */
export const BARALHO: Carta[] = ORDEM_TIPOS.flatMap((t) => Array.from({ length: TIPOS[t].qtd }, () => t)).map((tipo, id) => ({ id, tipo }));

export const tipoDe = (id: number): Tipo => BARALHO[id]!.tipo;
export const ehCancao = (t: Tipo): t is Cancao => (CANCOES as Tipo[]).includes(t);
export const ehRaca = (t: Tipo): t is Raca => (RACAS as Tipo[]).includes(t);
/** os ids de todas as cartas de um tipo */
export const idsDe = (t: Tipo): number[] => BARALHO.filter((c) => c.tipo === t).map((c) => c.id);

export type Pilha = 'busca' | 'fim';
export const NOME_PILHA: Record<Pilha, string> = { busca: 'descarte de busca', fim: 'descarte de fim de turno' };

/** Uma carta no jardim: `grupo` é a raça (o mímico guarda a raça que ele faz as vezes) ou a canção. */
export interface NoJardim {
  id: number;
  grupo: Raca | Cancao;
}

export type OrigemBusca = 'turno' | 'primavera' | 'inverno';

/** Uma escolha que alguém precisa fazer antes de o turno seguir. */
export type Pendente =
  | { t: 'busca'; jogador: number; reveladas: number[]; origem: OrigemBusca }
  | { t: 'descartarBusca'; jogador: number; quantas: number; origem: OrigemBusca }
  | { t: 'jogador'; jogador: number; motivo: 'primavera' | 'outono' | 'goblins' }
  | { t: 'pilha'; jogador: number; motivo: 'outono' | 'inverno' }
  | { t: 'kobold'; jogador: number }
  | { t: 'troll'; jogador: number }
  | { t: 'trollDestino'; jogador: number; dono: number; carta: number };

export type Fase = 'comprar' | 'baixar' | 'descartar' | 'fimRodada' | 'fimJogo';

export interface Evento {
  jogador: number;
  texto: string;
}

export interface Estado {
  n: number;
  /** o monte: o topo é o fim do array */
  baralho: number[];
  descBusca: number[];
  descFim: number[];
  maos: number[][];
  jardins: NoJardim[][];
  vez: number;
  fase: Fase;
  pendente: Pendente | null;
  cancaoNoTurno: boolean;
  racaNovaNoTurno: boolean;
  /** goblins, kobolds e trolls que já ligaram o poder, por jogador, nesta rodada */
  disparadas: Raca[][];
  placar: number[];
  rodada: number;
  /** quem começou a rodada atual */
  comecou: number;
  /** os pontos de cada um na rodada que acabou */
  pontosRodada: number[] | null;
  vencedor: number | null;
  /** o que aconteceu, do mais antigo ao mais novo (só os últimos) */
  log: Evento[];
}

export const META = 100;
export const CARTAS_NA_MAO: Record<number, number> = { 2: 10, 3: 9 };

export type Acao =
  | { t: 'comprarDescarte'; pilha: Pilha; carta?: number }
  | { t: 'buscar' }
  | { t: 'ficar'; carta: number }
  | { t: 'descartarBusca'; cartas: number[] }
  | { t: 'cancao'; carta: number }
  | { t: 'baixar'; cartas: number[]; raca?: Raca }
  | { t: 'jogador'; alvo: number }
  | { t: 'pilha'; pilha: Pilha }
  | { t: 'cartaEmJogo'; dono: number; carta: number }
  | { t: 'jardim'; dono: number }
  | { t: 'encerrar' }
  | { t: 'descartar'; carta: number };

export class JogadaInvalida extends Error {}
const falha = (msg: string): never => {
  throw new JogadaInvalida(msg);
};

export function embaralhar<T>(xs: readonly T[], rng: Rng): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

const clonar = (e: Estado): Estado => ({
  ...e,
  baralho: [...e.baralho],
  descBusca: [...e.descBusca],
  descFim: [...e.descFim],
  maos: e.maos.map((m) => [...m]),
  jardins: e.jardins.map((j) => j.map((c) => ({ ...c }))),
  disparadas: e.disparadas.map((d) => [...d]),
  placar: [...e.placar],
  pontosRodada: e.pontosRodada ? [...e.pontosRodada] : null,
  log: [...e.log],
  pendente: e.pendente ? ({ ...e.pendente, ...('reveladas' in e.pendente ? { reveladas: [...e.pendente.reveladas] } : {}) } as Pendente) : null,
});

const anotar = (e: Estado, jogador: number, texto: string) => {
  e.log.push({ jogador, texto });
  if (e.log.length > 30) e.log.splice(0, e.log.length - 30);
};

/** Distribui uma rodada nova, mantendo o placar. Quem começa: `comecou`. */
function distribuir(n: number, rng: Rng, placar: number[], rodada: number, comecou: number): Estado {
  const baralho = embaralhar(BARALHO.map((c) => c.id), rng);
  const k = CARTAS_NA_MAO[n] ?? 10;
  const maos = Array.from({ length: n }, () => baralho.splice(baralho.length - k, k));
  return {
    n,
    baralho,
    descBusca: [],
    descFim: [],
    maos,
    jardins: Array.from({ length: n }, () => []),
    vez: comecou,
    fase: 'comprar',
    pendente: null,
    cancaoNoTurno: false,
    racaNovaNoTurno: false,
    disparadas: Array.from({ length: n }, () => []),
    placar,
    rodada,
    comecou,
    pontosRodada: null,
    vencedor: null,
    log: [],
  };
}

/** Uma partida nova. Pelo manual, começa quem viu uma fada por último; aqui, `comeca` (o padrão é o jogador 0). */
export function novaPartida(rng: Rng, n = 2, comeca = 0): Estado {
  if (n < 2 || n > 3) falha('O motor joga com 2 ou 3 jogadores.');
  return distribuir(n, rng, Array(n).fill(0), 1, comeca);
}

/** Quem começa a próxima rodada: quem tem menos pontos; no empate, quem começou a anterior (ou o próximo empatado depois dele). */
export function quemComecaProxima(e: Estado): number {
  const menor = Math.min(...e.placar);
  for (let k = 0; k < e.n; k++) {
    const j = (e.comecou + k) % e.n;
    if (e.placar[j] === menor) return j;
  }
  return e.comecou;
}

export function proximaRodada(e: Estado, rng: Rng): Estado {
  if (e.fase !== 'fimRodada') falha('A rodada ainda não acabou.');
  return distribuir(e.n, rng, [...e.placar], e.rodada + 1, quemComecaProxima(e));
}

// ---------------------------------------------------------------- contagens e pontos

/** quantas cartas DE RAÇA (sem mímico) de `r` há no jardim: é o que liga os poderes */
export const nNoJardim = (jardim: NoJardim[], r: Raca): number => jardim.filter((c) => tipoDe(c.id) === r).length;
const temPoder = (e: Estado, j: number, r: Raca) => nNoJardim(e.jardins[j]!, r) >= 2;

/** as raças diferentes de um jardim, sem contar mímicos */
export const racasDiferentes = (jardim: NoJardim[]): number => new Set(jardim.map((c) => tipoDe(c.id)).filter(ehRaca)).size;

/** quantas cartas uma raça nova precisa para entrar no jardim de `j` */
export const precisaParaRacaNova = (e: Estado, j: number): number => (temPoder(e, j, 'fogos') ? 2 : 3);

/** a raça está em jogo (em qualquer jardim)? */
export const emJogo = (e: Estado, r: Raca): boolean => e.jardins.some((jd) => jd.some((c) => c.grupo === r));

/** o valor de uma carta no jardim, com os poderes */
export function valorNoJardim(jardim: NoJardim[], id: number): number {
  const t = tipoDe(id);
  if (t === 'mimicos') return nNoJardim(jardim, 'fadas') >= 2 ? 0 : -3;
  if (t === 'leprechauns') return nNoJardim(jardim, 'leprechauns') >= 2 ? 4 : -4;
  if (t === 'verao') return racasDiferentes(jardim) >= 5 ? 8 : -3;
  return TIPOS[t].valor;
}

/** a carta na mão no fim da rodada: sempre negativa (o manual não diz o sinal das negativas; aqui, −|valor|) */
export const valorNaMao = (id: number): number => -Math.abs(TIPOS[tipoDe(id)].valor);

export function bonusFaunos(jardim: NoJardim[]): number {
  if (nNoJardim(jardim, 'faunos') < 2) return 0;
  return 2 * jardim.filter((c) => ehCancao(tipoDe(c.id))).length;
}

export const pontosDoJardim = (jardim: NoJardim[]): number => jardim.reduce((s, c) => s + valorNoJardim(jardim, c.id), 0) + bonusFaunos(jardim);
export const pontosDaMao = (mao: number[]): number => mao.reduce((s, id) => s + valorNaMao(id), 0);
export const pontosDe = (e: Estado, j: number): number => pontosDoJardim(e.jardins[j]!) + pontosDaMao(e.maos[j]!);

// ---------------------------------------------------------------- quem age

/** quem precisa agir agora: quem tem uma escolha pendente, ou quem tem a vez */
export const quemAge = (e: Estado): number => e.pendente?.jogador ?? e.vez;

const tirarDaMao = (e: Estado, j: number, id: number) => {
  const mao = e.maos[j]!;
  const k = mao.indexOf(id);
  if (k < 0) falha('Essa carta não está na mão.');
  mao.splice(k, 1);
};

const nomeCarta = (id: number) => TIPOS[tipoDe(id)].nome;

/** Começa uma busca para `j`: olha 2 (3 com elfos) cartas do monte. */
function iniciarBusca(e: Estado, j: number, origem: OrigemBusca) {
  const n = temPoder(e, j, 'elfos') ? 3 : 2;
  const reveladas = e.baralho.splice(Math.max(0, e.baralho.length - n), n).reverse();
  if (reveladas.length === 0) {
    anotar(e, j, 'O monte acabou: não há o que buscar.');
    return;
  }
  if (temPoder(e, j, 'gnomos')) {
    e.maos[j]!.push(...reveladas);
    anotar(e, j, `buscou ${reveladas.length} ${reveladas.length === 1 ? 'carta' : 'cartas'} com os gnomos`);
    if (reveladas.length > 1) e.pendente = { t: 'descartarBusca', jogador: j, quantas: reveladas.length - 1, origem };
    return;
  }
  if (reveladas.length === 1) {
    e.maos[j]!.push(reveladas[0]!);
    anotar(e, j, 'buscou a última carta do monte');
    return;
  }
  e.pendente = { t: 'busca', jogador: j, reveladas, origem };
}

const cartasMoviveis = (e: Estado): { dono: number; id: number }[] =>
  e.jardins.flatMap((jd, dono) => jd.filter((c) => tipoDe(c.id) !== 'mimicos').map((c) => ({ dono, id: c.id })));

function fimDoTurno(e: Estado) {
  const vazias = e.maos.filter((m) => m.length === 0).length;
  const acabou = e.baralho.length === 0 || vazias >= (e.n === 2 ? 1 : 2);
  if (!acabou) {
    e.vez = (e.vez + 1) % e.n;
    e.fase = 'comprar';
    e.cancaoNoTurno = false;
    e.racaNovaNoTurno = false;
    return;
  }
  const pontos = e.maos.map((_, j) => pontosDe(e, j));
  e.pontosRodada = pontos;
  e.placar = e.placar.map((p, j) => p + pontos[j]!);
  anotar(e, e.vez, e.baralho.length === 0 ? 'O monte acabou: fim da rodada.' : 'Alguém ficou sem cartas: fim da rodada.');
  const maior = Math.max(...e.placar);
  if (maior >= META && e.placar.filter((p) => p === maior).length === 1) {
    e.fase = 'fimJogo';
    e.vencedor = e.placar.indexOf(maior);
  } else e.fase = 'fimRodada';
}

/** Aplica uma ação de quem precisa agir agora (`quemAge`). Lança `JogadaInvalida` se não pode. */
export function aplicar(e0: Estado, a: Acao): Estado {
  if (e0.fase === 'fimRodada' || e0.fase === 'fimJogo') falha('A rodada acabou.');
  const e = clonar(e0);
  const j = quemAge(e);
  const p = e.pendente;

  switch (a.t) {
    case 'comprarDescarte': {
      if (e.fase !== 'comprar' || p) falha('Agora não é hora de comprar.');
      const pilha = a.pilha === 'busca' ? e.descBusca : e.descFim;
      if (pilha.length === 0) falha('Essa pilha está vazia.');
      const id = a.carta ?? pilha[pilha.length - 1]!;
      const k = pilha.lastIndexOf(id);
      if (k < 0) falha('Essa carta não está na pilha.');
      if (k !== pilha.length - 1 && !temPoder(e, j, 'anoes')) falha('Só com 2 anões no jardim dá para pegar uma carta do meio da pilha.');
      pilha.splice(k, 1);
      e.maos[j]!.push(id);
      anotar(e, j, `pegou ${nomeCarta(id).toLowerCase()} do ${NOME_PILHA[a.pilha]}`);
      e.fase = 'baixar';
      return e;
    }
    case 'buscar': {
      if (e.fase !== 'comprar' || p) falha('Agora não é hora de comprar.');
      if (e.baralho.length === 0) falha('O monte está vazio.');
      e.fase = 'baixar';
      iniciarBusca(e, j, 'turno');
      return e;
    }
    case 'ficar': {
      if (p?.t !== 'busca') falha('Não há busca em andamento.');
      const busca = p as Extract<Pendente, { t: 'busca' }>;
      if (!busca.reveladas.includes(a.carta)) falha('Essa carta não saiu na busca.');
      e.maos[j]!.push(a.carta);
      for (const id of busca.reveladas) if (id !== a.carta) e.descBusca.push(id);
      anotar(e, j, busca.origem === 'turno' ? 'fez uma busca' : `fez uma busca (${busca.origem === 'primavera' ? 'canção da primavera' : 'canção do inverno'})`);
      e.pendente = null;
      return e;
    }
    case 'descartarBusca': {
      if (p?.t !== 'descartarBusca') falha('Não há descarte de busca em andamento.');
      const d = p as Extract<Pendente, { t: 'descartarBusca' }>;
      if (a.cartas.length !== d.quantas || new Set(a.cartas).size !== a.cartas.length) falha(`Escolha ${d.quantas} ${d.quantas === 1 ? 'carta' : 'cartas'}.`);
      for (const id of a.cartas) tirarDaMao(e, j, id);
      e.descBusca.push(...a.cartas);
      e.pendente = null;
      return e;
    }
    case 'cancao': {
      if (e.fase !== 'baixar' || p) falha('Agora não é hora de tocar canção.');
      const t = tipoDe(a.carta);
      if (!ehCancao(t)) falha('Essa carta não é uma canção.');
      if (e.cancaoNoTurno) falha('Só dá para tocar uma canção por turno.');
      if (e.maos[j]!.length <= 1) falha('A última carta da mão não pode ser baixada: ela é o descarte.');
      tirarDaMao(e, j, a.carta);
      e.jardins[j]!.push({ id: a.carta, grupo: t as Cancao });
      e.cancaoNoTurno = true;
      anotar(e, j, `tocou a ${TIPOS[t].nome.toLowerCase()}`);
      if (t === 'primavera' || t === 'outono') e.pendente = { t: 'jogador', jogador: j, motivo: t };
      else if (t === 'inverno') {
        if (e.descBusca.length || e.descFim.length) e.pendente = { t: 'pilha', jogador: j, motivo: 'inverno' };
        else iniciarBusca(e, j, 'inverno');
      }
      return e;
    }
    case 'jogador': {
      if (p?.t !== 'jogador') falha('Ninguém precisa ser escolhido agora.');
      const alvo = a.alvo;
      if (alvo < 0 || alvo >= e.n) falha('Jogador inválido.');
      const motivo = (p as Extract<Pendente, { t: 'jogador' }>).motivo;
      e.pendente = null;
      if (motivo === 'primavera') iniciarBusca(e, alvo, 'primavera');
      else if (motivo === 'outono') {
        if (e.descBusca.length || e.descFim.length) e.pendente = { t: 'pilha', jogador: alvo, motivo: 'outono' };
        else anotar(e, alvo, 'as pilhas de descarte estão vazias');
      } else {
        const compradas = e.baralho.splice(Math.max(0, e.baralho.length - 2), 2);
        e.maos[alvo]!.push(...compradas);
        anotar(e, alvo, `comprou ${compradas.length} do monte (goblins)`);
      }
      return e;
    }
    case 'pilha': {
      if (p?.t !== 'pilha') falha('Não há pilha a escolher agora.');
      const pilha = a.pilha === 'busca' ? e.descBusca : e.descFim;
      if (pilha.length === 0) falha('Essa pilha está vazia.');
      const motivo = (p as Extract<Pendente, { t: 'pilha' }>).motivo;
      e.pendente = null;
      if (motivo === 'outono') {
        const pegas = pilha.splice(Math.max(0, pilha.length - 4), 4);
        e.maos[j]!.push(...pegas);
        anotar(e, j, `pegou ${pegas.length} do ${NOME_PILHA[a.pilha]} (outono)`);
      } else {
        const id = pilha.pop()!;
        e.maos[j]!.push(id);
        anotar(e, j, `pegou ${nomeCarta(id).toLowerCase()} do ${NOME_PILHA[a.pilha]} (inverno)`);
        iniciarBusca(e, j, 'inverno');
      }
      return e;
    }
    case 'baixar':
      return baixar(e, j, a.cartas, a.raca);
    case 'cartaEmJogo': {
      if (p?.t !== 'kobold' && p?.t !== 'troll') falha('Agora não é hora de escolher carta em jogo.');
      const jd = e.jardins[a.dono];
      const k = jd ? jd.findIndex((c) => c.id === a.carta) : -1;
      if (k < 0) falha('Essa carta não está nesse jardim.');
      if (tipoDe(a.carta) === 'mimicos') falha('Aqui, para simplificar, o mímico não pode ser escolhido.');
      if (p!.t === 'kobold') {
        jd!.splice(k, 1);
        e.baralho.unshift(a.carta);
        anotar(e, j, `mandou ${nomeCarta(a.carta).toLowerCase()} para o fundo do monte (kobolds)`);
        e.pendente = null;
      } else e.pendente = { t: 'trollDestino', jogador: j, dono: a.dono, carta: a.carta };
      return e;
    }
    case 'jardim': {
      if (p?.t !== 'trollDestino') falha('Agora não é hora de escolher jardim.');
      const td = p as Extract<Pendente, { t: 'trollDestino' }>;
      if (a.dono < 0 || a.dono >= e.n) falha('Jardim inválido.');
      const origem = e.jardins[td.dono]!;
      const k = origem.findIndex((c) => c.id === td.carta);
      const [no] = origem.splice(k, 1);
      e.jardins[a.dono]!.push(no!);
      anotar(e, j, td.dono === a.dono ? 'deixou a carta onde estava (trolls)' : `mudou ${nomeCarta(td.carta).toLowerCase()} de jardim (trolls)`);
      e.pendente = null;
      return e;
    }
    case 'encerrar': {
      if (e.fase !== 'baixar' || p) falha('Agora não dá para encerrar.');
      e.fase = 'descartar';
      return e;
    }
    case 'descartar': {
      if ((e.fase !== 'baixar' && e.fase !== 'descartar') || p) falha('Agora não é hora de descartar.');
      tirarDaMao(e, j, a.carta);
      e.descFim.push(a.carta);
      anotar(e, j, `descartou ${nomeCarta(a.carta).toLowerCase()}`);
      fimDoTurno(e);
      return e;
    }
  }
  return falha('Ação desconhecida.');
}

/** Baixa cartas de raça (com ou sem um mímico): raça nova ou expansão, o motor decide. */
function baixar(e: Estado, j: number, cartas: number[], racaPedida?: Raca): Estado {
  if (e.fase !== 'baixar' || e.pendente) falha('Agora não é hora de baixar.');
  if (cartas.length === 0) falha('Escolha as cartas.');
  if (new Set(cartas).size !== cartas.length) falha('Carta repetida.');
  const mao = e.maos[j]!;
  for (const id of cartas) if (!mao.includes(id)) falha('Essa carta não está na mão.');
  if (mao.length - cartas.length < 1) falha('A última carta da mão não pode ser baixada: ela é o descarte.');
  const tipos = cartas.map(tipoDe);
  if (tipos.some(ehCancao)) falha('Canção se toca sozinha, com o botão da canção.');
  const mimicos = cartas.filter((id) => tipoDe(id) === 'mimicos');
  const reais = cartas.filter((id) => tipoDe(id) !== 'mimicos');
  const racas = new Set(reais.map(tipoDe));
  if (racas.size > 1) falha('Baixe uma raça de cada vez.');
  if (mimicos.length > 1) falha('Só um mímico por raça.');
  const raca = (reais.length ? tipoDe(reais[0]!) : racaPedida) as Raca | undefined;
  if (!raca) falha('O mímico precisa de uma raça para acompanhar.');
  if (mimicos.length && raca === 'leprechauns') falha('O mímico não ajuda a pôr leprechaun no jardim.');
  const meu = e.jardins[j]!;
  const grupo = meu.filter((c) => c.grupo === raca);
  if (emJogo(e, raca!)) {
    if (mimicos.length && grupo.some((c) => tipoDe(c.id) === 'mimicos')) falha('Essa raça já tem um mímico no seu jardim.');
    if (mimicos.length && reais.length === 0 && !grupo.some((c) => tipoDe(c.id) !== 'mimicos')) falha('O mímico precisa estar junto de pelo menos uma carta da raça.');
  } else {
    if (e.racaNovaNoTurno) falha('Só dá para baixar uma raça nova por turno.');
    const precisa = precisaParaRacaNova(e, j);
    if (cartas.length < precisa) falha(`Uma raça nova precisa de ${precisa} cartas iguais (o mímico vale por uma).`);
    if (reais.length === 0) falha('O mímico precisa estar junto de pelo menos uma carta da raça.');
    e.racaNovaNoTurno = true;
  }
  const tinhaAntes = nNoJardim(meu, raca!) > 0;
  for (const id of cartas) {
    tirarDaMao(e, j, id);
    meu.push({ id, grupo: raca! });
  }
  anotar(e, j, `baixou ${cartas.length} no grupo dos ${TIPOS[raca!].nome.toLowerCase()}`);
  // goblins, kobolds e trolls: “na primeira vez que entrar no seu jardim”. O manual não diz se vale de
  // novo depois que a raça sai; aqui, uma vez por rodada, e só quando o dono baixa da mão.
  if ((raca === 'goblins' || raca === 'kobolds' || raca === 'trolls') && reais.length > 0 && !tinhaAntes && !e.disparadas[j]!.includes(raca)) {
    e.disparadas[j]!.push(raca);
    if (raca === 'goblins') e.pendente = { t: 'jogador', jogador: j, motivo: 'goblins' };
    else if (cartasMoviveis(e).length > 0) e.pendente = { t: raca === 'kobolds' ? 'kobold' : 'troll', jogador: j };
  }
  return e;
}

/** `null` se a ação pode; senão, o motivo. */
export function validar(e: Estado, a: Acao): string | null {
  try {
    aplicar(e, a);
    return null;
  } catch (err) {
    if (err instanceof JogadaInvalida) return err.message;
    throw err;
  }
}

// ---------------------------------------------------------------- o Linu

/** O quanto vale guardar a carta `id` na mão de `j` (maior = melhor). */
function utilidade(e: Estado, j: number, id: number, nivel: NivelLinu): number {
  const t = tipoDe(id);
  const mao = e.maos[j]!;
  const meu = e.jardins[j]!;
  const outros = e.jardins.filter((_, k) => k !== j);
  let u: number;
  if (t === 'mimicos') u = nNoJardim(meu, 'fadas') >= 2 ? 1 : -1;
  else if (ehCancao(t)) u = t === 'verao' ? (racasDiferentes(meu) >= 3 ? 7 : -1) : t === 'outono' ? 2 : 3;
  else {
    const iguais = mao.filter((x) => tipoDe(x) === t).length;
    if (t === 'leprechauns') u = nNoJardim(meu, 'leprechauns') + iguais >= 2 ? 6 : -3;
    else u = TIPOS[t].valor + (emJogo(e, t) ? 4 : 2 * (iguais - 1)) + (t === 'faunos' || t === 'trolls' ? 1 : 0);
  }
  // o difícil não entrega ao outro o que ele pode baixar já
  if (nivel === 'dificil' && ehRaca(t) && outros.some((jd) => jd.some((c) => c.grupo === t))) u += 3;
  return u;
}

const escolhaAleatoria = <T>(xs: T[], rng: Rng): T => xs[Math.floor(rng() * xs.length)]!;

/** A diferença de pontos (meus − dos outros) se o estado ficar como `e`. */
const saldo = (e: Estado, j: number) => e.jardins.reduce((s, jd, k) => s + (k === j ? pontosDoJardim(jd) : -pontosDoJardim(jd)), 0);

/** O que o Linu (`quemAge(e)`) faz agora. Devolve sempre uma ação válida. */
export function jogadaDoLinu(e: Estado, nivel: NivelLinu, rng: Rng): Acao {
  const j = quemAge(e);
  const p = e.pendente;
  const facil = nivel === 'facil';
  const util = (id: number) => utilidade(e, j, id, nivel) + (facil ? rng() * 6 : 0);

  if (p) {
    switch (p.t) {
      case 'busca':
        return { t: 'ficar', carta: [...p.reveladas].sort((a, b) => util(b) - util(a))[0]! };
      case 'descartarBusca':
        return { t: 'descartarBusca', cartas: [...e.maos[j]!].sort((a, b) => util(a) - util(b)).slice(0, p.quantas) };
      case 'jogador': {
        if (p.motivo !== 'goblins') return { t: 'jogador', alvo: j };
        const outro = (j + 1) % e.n;
        if (facil) return { t: 'jogador', alvo: rng() < 0.5 ? j : outro };
        // comprar 2 é bom no começo (mais escolhas) e ruim no fim (cartas presas na mão)
        if (nivel === 'dificil' && e.baralho.length > 24) return { t: 'jogador', alvo: j };
        return { t: 'jogador', alvo: outro };
      }
      case 'pilha': {
        const opcoes = (['busca', 'fim'] as Pilha[]).filter((x) => (x === 'busca' ? e.descBusca : e.descFim).length > 0);
        const nota = (x: Pilha) => {
          const pilha = x === 'busca' ? e.descBusca : e.descFim;
          const topo = p.motivo === 'outono' ? pilha.slice(-4) : pilha.slice(-1);
          return topo.reduce((s, id) => s + util(id), 0);
        };
        return { t: 'pilha', pilha: opcoes.sort((a, b) => nota(b) - nota(a))[0]! };
      }
      case 'kobold':
      case 'troll': {
        const alvos = cartasMoviveis(e);
        if (facil) {
          const x = escolhaAleatoria(alvos, rng);
          return { t: 'cartaEmJogo', dono: x.dono, carta: x.id };
        }
        let melhor = alvos[0]!;
        let nota = -Infinity;
        for (const x of alvos) {
          const sem = clonar(e);
          sem.jardins[x.dono] = sem.jardins[x.dono]!.filter((c) => c.id !== x.id);
          let n = saldo(sem, j);
          if (p.t === 'troll') {
            const no = e.jardins[x.dono]!.find((c) => c.id === x.id)!;
            n = Math.max(
              ...e.jardins.map((_, d) => {
                const com = clonar(sem);
                com.jardins[d]!.push({ ...no });
                return saldo(com, j);
              }),
            );
          }
          if (n > nota) {
            nota = n;
            melhor = x;
          }
        }
        return { t: 'cartaEmJogo', dono: melhor.dono, carta: melhor.id };
      }
      case 'trollDestino': {
        if (facil) return { t: 'jardim', dono: Math.floor(rng() * e.n) };
        const no = e.jardins[p.dono]!.find((c) => c.id === p.carta)!;
        let melhor = p.dono;
        let nota = -Infinity;
        for (let d = 0; d < e.n; d++) {
          const x = clonar(e);
          x.jardins[p.dono] = x.jardins[p.dono]!.filter((c) => c.id !== p.carta);
          x.jardins[d]!.push({ ...no });
          const n = saldo(x, j);
          if (n > nota) {
            nota = n;
            melhor = d;
          }
        }
        return { t: 'jardim', dono: melhor };
      }
    }
  }

  if (e.fase === 'comprar') {
    const opcoes: Acao[] = [];
    for (const pilha of ['fim', 'busca'] as Pilha[]) {
      const ps = pilha === 'busca' ? e.descBusca : e.descFim;
      if (!ps.length) continue;
      const candidatas = temPoder(e, j, 'anoes') ? [...new Set(ps)] : [ps[ps.length - 1]!];
      for (const c of candidatas) opcoes.push({ t: 'comprarDescarte', pilha, carta: c });
    }
    if (e.baralho.length === 0) return opcoes[0]!;
    if (facil) return rng() < 0.35 && opcoes.length ? escolhaAleatoria(opcoes, rng) : { t: 'buscar' };
    // pega do descarte só o que serve já (baixar ou completar uma raça nova); senão, busca
    let melhor: Acao = { t: 'buscar' };
    let nota = 4.5;
    for (const o of opcoes) {
      const id = (o as { carta: number }).carta;
      const n = utilidade(e, j, id, nivel);
      if (n > nota) {
        nota = n;
        melhor = o;
      }
    }
    return melhor;
  }

  // fase de baixar (ou de descartar)
  const mao = e.maos[j]!;
  const tenta = (a: Acao): Acao | null => (validar(e, a) === null ? a : null);
  if (e.fase === 'baixar' && mao.length > 1) {
    // 1. canção
    if (!e.cancaoNoTurno && (!facil || rng() < 0.5)) {
      for (const id of mao) {
        const t = tipoDe(id);
        if (!ehCancao(t)) continue;
        if (t === 'verao' && racasDiferentes(e.jardins[j]!) < (nivel === 'dificil' ? 4 : 3) && mao.length > 3) continue;
        const a = tenta({ t: 'cancao', carta: id });
        if (a) return a;
      }
    }
    // 2. raça nova e 3. expansão: a raça com mais pontos primeiro
    const porRaca = new Map<Raca, number[]>();
    for (const id of mao) {
      const t = tipoDe(id);
      if (ehRaca(t)) porRaca.set(t, [...(porRaca.get(t) ?? []), id]);
    }
    const mimico = mao.find((id) => tipoDe(id) === 'mimicos');
    const ordem = [...porRaca.keys()].sort((a, b) => TIPOS[b].valor * porRaca.get(b)!.length - TIPOS[a].valor * porRaca.get(a)!.length);
    for (const r of ordem) {
      if (facil && rng() < 0.3) continue;
      let ids = porRaca.get(r)!;
      if (ids.length >= mao.length) ids = ids.slice(0, mao.length - 1);
      if (!ids.length) continue;
      // leprechaun sozinho no jardim vale −4, igual à mão: o difícil só baixa se vai ter 2 ou mais
      if (r === 'leprechauns' && nivel === 'dificil' && nNoJardim(e.jardins[j]!, r) + ids.length < 2 && mao.length > 3) continue;
      const a = tenta({ t: 'baixar', cartas: ids }) ?? (mimico && ids.length < mao.length - 1 ? tenta({ t: 'baixar', cartas: [...ids, mimico] }) : null);
      if (a) return a;
    }
    // o mímico sobrando entra num grupo seu que ainda não tem mímico
    if (mimico && !facil) {
      for (const r of new Set(e.jardins[j]!.map((c) => c.grupo))) {
        if (!ehRaca(r as Tipo)) continue;
        const a = tenta({ t: 'baixar', cartas: [mimico], raca: r as Raca });
        if (a) return a;
      }
    }
  }
  // descarta a carta que menos vale guardar
  return { t: 'descartar', carta: [...mao].sort((a, b) => util(a) - util(b))[0]! };
}
