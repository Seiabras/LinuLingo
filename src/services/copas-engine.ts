/**
 * Copas (o “Hearts”), para 4: você, o Linu e dois amigos dele. As regras e as fontes estão em
 * `data/outros-jogos/copas.ts`. Só as contas, sem React; cada ação devolve um estado novo (ou o
 * mesmo objeto, quando não vale).
 *
 * Os lugares vão em sentido horário: 0 (você, embaixo), 1 (à sua esquerda), 2 (à sua frente), 3 (à
 * sua direita). Quem leva vazas com copas marca pontos (que são ruins): 1 por carta de copas, 13 pela
 * dama de espadas. A partida acaba quando alguém chega a 100, e ganha quem tem menos.
 */
import { baralho52, chave, embaralhar, iguais, type CartaF, type Naipe } from './baralho-frances';

export type Lugar = 0 | 1 | 2 | 3;
export const LUGARES: Lugar[] = [0, 1, 2, 3];
export const FIM_DA_PARTIDA = 100;

/** Para quem se passa nesta mão: +1 (esquerda), +3 (direita), +2 (frente) ou 0 (sem passar). */
export function passagemDaMao(numero: number): 0 | 1 | 2 | 3 {
  return ([1, 3, 2, 0] as const)[numero % 4]!;
}

/** Ás alto: o ás é a carta mais forte do naipe. */
export const forcaNoNaipe = (c: CartaF) => (c.valor === 1 ? 14 : c.valor);
export const ehDamaDeEspadas = (c: CartaF) => c.naipe === 'espadas' && c.valor === 12;
export const pontosDaCarta = (c: CartaF) => (c.naipe === 'copas' ? 1 : ehDamaDeEspadas(c) ? 13 : 0);
const DOIS_DE_PAUS: CartaF = { valor: 2, naipe: 'paus' };

export type Fase = 'passar' | 'jogando' | 'vaza' | 'fimMao' | 'fimJogo';

export interface EstadoCopas {
  placar: [number, number, number, number];
  /** o número da mão (0, 1, 2…), que decide a passagem */
  numero: number;
  maos: [CartaF[], CartaF[], CartaF[], CartaF[]];
  /** as cartas levadas por cada um nesta mão */
  levadas: [CartaF[], CartaF[], CartaF[], CartaF[]];
  /** a vaza em andamento, na ordem jogada */
  mesa: { l: Lugar; carta: CartaF }[];
  vez: Lugar;
  /** já caiu carta de copas nesta mão (aí copas pode abrir vaza) */
  quebrada: boolean;
  /** quantas vazas já foram jogadas nesta mão */
  vazas: number;
  fase: Fase;
  /** os pontos desta mão, quando ela acaba, e quem fez a lua (levou os 26) */
  resultado: { pontos: [number, number, number, number]; lua: Lugar | null } | null;
  /** quem ganhou a partida (menor placar); null se ainda não acabou ou se houve empate no menor */
  vencedor: Lugar | null;
}

const ordenar = (m: CartaF[]) => {
  const ordemNaipe: Naipe[] = ['paus', 'ouros', 'espadas', 'copas'];
  return [...m].sort((a, b) => ordemNaipe.indexOf(a.naipe) - ordemNaipe.indexOf(b.naipe) || forcaNoNaipe(a) - forcaNoNaipe(b));
};

const quemTem = (maos: CartaF[][], c: CartaF) => maos.findIndex((m) => m.some((x) => iguais(x, c))) as Lugar;

export function darMao(placar: EstadoCopas['placar'], numero: number, rng: () => number): EstadoCopas {
  const b = embaralhar(baralho52(), rng);
  const maos = [0, 1, 2, 3].map((l) => ordenar(b.slice(l * 13, l * 13 + 13))) as EstadoCopas['maos'];
  const passa = passagemDaMao(numero) !== 0;
  return {
    placar,
    numero,
    maos,
    levadas: [[], [], [], []],
    mesa: [],
    vez: quemTem(maos, DOIS_DE_PAUS),
    quebrada: false,
    vazas: 0,
    fase: passa ? 'passar' : 'jogando',
    resultado: null,
    vencedor: null,
  };
}

export const novoJogo = (rng: () => number) => darMao([0, 0, 0, 0], 0, rng);

/** Passa 3 cartas de cada um (as escolhas, por lugar) para quem a mão manda. */
export function passar(s: EstadoCopas, escolhas: [CartaF[], CartaF[], CartaF[], CartaF[]]): EstadoCopas {
  if (s.fase !== 'passar') return s;
  const desloc = passagemDaMao(s.numero);
  for (const l of LUGARES) {
    const e = escolhas[l];
    if (e.length !== 3 || new Set(e.map(chave)).size !== 3 || !e.every((c) => s.maos[l].some((x) => iguais(x, c)))) return s;
  }
  const maos = LUGARES.map((l) => {
    const de = ((l - desloc + 4) % 4) as Lugar;
    return ordenar([...s.maos[l].filter((x) => !escolhas[l].some((c) => iguais(c, x))), ...escolhas[de]]);
  }) as EstadoCopas['maos'];
  return { ...s, maos, vez: quemTem(maos, DOIS_DE_PAUS), fase: 'jogando' };
}

/** As cartas que `l` pode jogar agora. */
export function jogaveis(s: EstadoCopas, l: Lugar): CartaF[] {
  const mao = s.maos[l];
  if (s.fase !== 'jogando' || s.vez !== l) return [];
  // a primeira vaza abre com o 2 de paus
  if (s.vazas === 0 && s.mesa.length === 0) return mao.filter((c) => iguais(c, DOIS_DE_PAUS));
  if (s.mesa.length === 0) {
    // copas só abre vaza depois de quebrada, a não ser que só sobre copas na mão
    const semCopas = mao.filter((c) => c.naipe !== 'copas');
    return s.quebrada || semCopas.length === 0 ? mao : semCopas;
  }
  const naipe = s.mesa[0]!.carta.naipe;
  const doNaipe = mao.filter((c) => c.naipe === naipe);
  return doNaipe.length ? doNaipe : mao;
}

export function jogar(s: EstadoCopas, l: Lugar, carta: CartaF): EstadoCopas {
  if (!jogaveis(s, l).some((c) => iguais(c, carta))) return s;
  const maos = s.maos.map((m, i) => (i === l ? m.filter((x) => !iguais(x, carta)) : m)) as EstadoCopas['maos'];
  const mesa = [...s.mesa, { l, carta }];
  const quebrada = s.quebrada || carta.naipe === 'copas';
  if (mesa.length < 4) return { ...s, maos, mesa, quebrada, vez: ((l + 1) % 4) as Lugar };
  return { ...s, maos, mesa, quebrada, fase: 'vaza' };
}

/** Quem leva a vaza: a carta mais alta do naipe que abriu. */
export function ganhadorDaVaza(mesa: EstadoCopas['mesa']): Lugar {
  const naipe = mesa[0]!.carta.naipe;
  return mesa.filter((m) => m.carta.naipe === naipe).sort((a, b) => forcaNoNaipe(b.carta) - forcaNoNaipe(a.carta))[0]!.l;
}

/** Recolhe a vaza para quem ganhou (que abre a próxima) e, na última, conta a mão. */
export function recolher(s: EstadoCopas): EstadoCopas {
  if (s.fase !== 'vaza') return s;
  const g = ganhadorDaVaza(s.mesa);
  const levadas = s.levadas.map((x, i) => (i === g ? [...x, ...s.mesa.map((m) => m.carta)] : x)) as EstadoCopas['levadas'];
  const vazas = s.vazas + 1;
  const novo = { ...s, levadas, mesa: [], vazas, vez: g };
  if (vazas < 13) return { ...novo, fase: 'jogando' };
  return contar(novo);
}

function contar(s: EstadoCopas): EstadoCopas {
  let pontos = s.levadas.map((x) => x.reduce((t, c) => t + pontosDaCarta(c), 0)) as EstadoCopas['placar'];
  // fazer a lua: quem leva os 26 pontos fica com zero, e cada um dos outros leva 26
  const lua = pontos.findIndex((p) => p === 26);
  if (lua >= 0) pontos = pontos.map((_, i) => (i === lua ? 0 : 26)) as EstadoCopas['placar'];
  const placar = s.placar.map((p, i) => p + pontos[i]!) as EstadoCopas['placar'];
  const acabou = placar.some((p) => p >= FIM_DA_PARTIDA);
  const menor = Math.min(...placar);
  const vencedores = LUGARES.filter((l) => placar[l] === menor);
  return {
    ...s,
    placar,
    resultado: { pontos, lua: lua >= 0 ? (lua as Lugar) : null },
    vencedor: acabou && vencedores.length === 1 ? vencedores[0]! : null,
    fase: acabou ? 'fimJogo' : 'fimMao',
  };
}

export function proximaMao(s: EstadoCopas, rng: () => number): EstadoCopas {
  if (s.fase !== 'fimMao') return s;
  return darMao(s.placar, s.numero + 1, rng);
}

// ---------- os jogadores do computador (o Linu e os amigos) ----------

/** As 3 cartas que o computador passa: a dama, o rei e o ás de espadas, depois as copas e as cartas altas. */
export function escolhaParaPassar(mao: CartaF[]): CartaF[] {
  const espadas = mao.filter((c) => c.naipe === 'espadas');
  const perigo = (c: CartaF) => {
    if (ehDamaDeEspadas(c)) return 100;
    // rei e ás de espadas só são perigosos para quem tem poucas espadas para se proteger
    if (c.naipe === 'espadas' && c.valor !== 12 && forcaNoNaipe(c) > 12) return espadas.length <= 3 ? 60 : 5;
    return forcaNoNaipe(c) + (c.naipe === 'copas' ? 6 : 0);
  };
  return [...mao].sort((a, b) => perigo(b) - perigo(a)).slice(0, 3);
}

/** A carta que o computador joga. */
export function cartaDoComputador(s: EstadoCopas, l: Lugar): CartaF {
  const opcoes = jogaveis(s, l);
  const asc = [...opcoes].sort((a, b) => forcaNoNaipe(a) - forcaNoNaipe(b));
  if (s.mesa.length === 0) {
    // abrindo: a carta mais baixa, de preferência fora de copas e sem jogar a dama de espadas
    const seguras = asc.filter((c) => c.naipe !== 'copas' && !ehDamaDeEspadas(c));
    return (seguras[0] ?? asc[0])!;
  }
  const naipe = s.mesa[0]!.carta.naipe;
  const seguindo = opcoes[0]!.naipe === naipe && opcoes.every((c) => c.naipe === naipe);
  if (!seguindo) {
    // sem o naipe: se livra da dama de espadas, depois da copas mais alta, depois da carta mais alta
    const dama = opcoes.find(ehDamaDeEspadas);
    if (dama) return dama;
    const copas = opcoes.filter((c) => c.naipe === 'copas').sort((a, b) => forcaNoNaipe(b) - forcaNoNaipe(a));
    if (copas.length) return copas[0]!;
    return asc[asc.length - 1]!;
  }
  const maior = Math.max(...s.mesa.filter((m) => m.carta.naipe === naipe).map((m) => forcaNoNaipe(m.carta)));
  const pontosNaMesa = s.mesa.reduce((t, m) => t + pontosDaCarta(m.carta), 0);
  const abaixo = asc.filter((c) => forcaNoNaipe(c) < maior && !(ehDamaDeEspadas(c) && maior < 13));
  // o último a jogar, numa vaza sem pontos, pode levar com a carta mais alta (sem ser a dama)
  if (s.mesa.length === 3 && pontosNaMesa === 0) {
    const semDama = asc.filter((c) => !ehDamaDeEspadas(c));
    if (semDama.length) return semDama[semDama.length - 1]!;
  }
  // a dama de espadas cai quando alguém já jogou o rei ou o ás de espadas
  const dama = opcoes.find(ehDamaDeEspadas);
  if (dama && maior > 12) return dama;
  if (abaixo.length) return abaixo[abaixo.length - 1]!;
  return asc.find((c) => !ehDamaDeEspadas(c)) ?? asc[0]!;
}
