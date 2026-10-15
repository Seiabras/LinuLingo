/**
 * Motor do Hanafuda, no jogo Koi-Koi (dois jogadores: você × o Linu). Puro: nada de tela, e a
 * aleatoriedade é injetável (`rng`), para os testes embaralharem sempre igual.
 *
 * Regras (Wikipedia, “Koi-Koi”, consultada em 14/10/2026: https://en.wikipedia.org/wiki/Koi-Koi):
 * - 8 cartas para cada um, 8 viradas na mesa; o resto é o monte. Começa quem dá as cartas (o “oya”).
 * - Na vez: joga uma carta da mão. Se ela é do mesmo mês de uma carta da mesa, leva as duas; se há
 *   duas do mês na mesa, escolhe qual; se há três, leva as quatro. Sem par, a carta fica na mesa.
 *   Depois vira a carta de cima do monte, com a mesma regra.
 * - Ao formar um “yaku” (combinação) novo ou maior, escolhe: parar e marcar, ou “koi-koi” e seguir.
 * - Ao parar: 7 pontos ou mais valem o dobro; se o outro tinha pedido koi-koi, dobra de novo.
 * - Teshi (4 cartas do mesmo mês na mão) e kuttsuki (4 pares na mão) logo na distribuição: 6 pontos
 *   na hora. Se a mesa sai com 4 cartas de um mês, as cartas são dadas de novo.
 * - Acabaram as cartas sem ninguém parar: o oya ganha 1 ponto (“oya-ken”).
 * - O copo de saquê (crisântemo) é animal e também conta como carta comum (kasu).
 * - Pontos dos yaku: os da tabela do artigo (Gokō 10, Shikō 8, Ame-Shikō 7, Sankō 5, Tsukimi e
 *   Hanami 5, Inoshikachō 5, Akatan 5, Aotan 5, os dois juntos 10, Tane/Tanzaku/Kasu 1 e +1 por carta
 *   a mais).
 */

export type TipoCarta = 'luz' | 'animal' | 'fita' | 'comum';
export type Fita = 'poema' | 'azul' | 'vermelha';

export interface CartaHana {
  id: number;
  mes: number; // 1 a 12
  tipo: TipoCarta;
  /** o que está desenhado */
  nome: string;
  fita?: Fita;
  /** cartas que entram em yaku especiais */
  especial?: 'chuva' | 'saque' | 'lua' | 'cortina' | 'javali' | 'veado' | 'borboletas';
}

export const MESES_HANA: { mes: number; planta: string; jp: string }[] = [
  { mes: 1, planta: 'Pinheiro', jp: 'matsu' },
  { mes: 2, planta: 'Ameixeira', jp: 'ume' },
  { mes: 3, planta: 'Cerejeira', jp: 'sakura' },
  { mes: 4, planta: 'Glicínia', jp: 'fuji' },
  { mes: 5, planta: 'Íris', jp: 'ayame' },
  { mes: 6, planta: 'Peônia', jp: 'botan' },
  { mes: 7, planta: 'Trevo-arbustivo', jp: 'hagi' },
  { mes: 8, planta: 'Capim-dos-pampas', jp: 'susuki' },
  { mes: 9, planta: 'Crisântemo', jp: 'kiku' },
  { mes: 10, planta: 'Bordo', jp: 'momiji' },
  { mes: 11, planta: 'Salgueiro', jp: 'yanagi' },
  { mes: 12, planta: 'Paulównia', jp: 'kiri' },
];

type Def = Omit<CartaHana, 'id' | 'mes'>;
const C = (nome: string): Def => ({ tipo: 'comum', nome });
const DEFS: Def[][] = [
  [{ tipo: 'luz', nome: 'Grou e sol' }, { tipo: 'fita', nome: 'Fita de poema', fita: 'poema' }, C('Pinheiro'), C('Pinheiro')],
  [{ tipo: 'animal', nome: 'Rouxinol' }, { tipo: 'fita', nome: 'Fita de poema', fita: 'poema' }, C('Ameixeira'), C('Ameixeira')],
  [{ tipo: 'luz', nome: 'Cortina', especial: 'cortina' }, { tipo: 'fita', nome: 'Fita de poema', fita: 'poema' }, C('Cerejeira'), C('Cerejeira')],
  [{ tipo: 'animal', nome: 'Cuco' }, { tipo: 'fita', nome: 'Fita vermelha', fita: 'vermelha' }, C('Glicínia'), C('Glicínia')],
  [{ tipo: 'animal', nome: 'Ponte' }, { tipo: 'fita', nome: 'Fita vermelha', fita: 'vermelha' }, C('Íris'), C('Íris')],
  [{ tipo: 'animal', nome: 'Borboletas', especial: 'borboletas' }, { tipo: 'fita', nome: 'Fita azul', fita: 'azul' }, C('Peônia'), C('Peônia')],
  [{ tipo: 'animal', nome: 'Javali', especial: 'javali' }, { tipo: 'fita', nome: 'Fita vermelha', fita: 'vermelha' }, C('Trevo'), C('Trevo')],
  [{ tipo: 'luz', nome: 'Lua cheia', especial: 'lua' }, { tipo: 'animal', nome: 'Gansos' }, C('Capim'), C('Capim')],
  [{ tipo: 'animal', nome: 'Copo de saquê', especial: 'saque' }, { tipo: 'fita', nome: 'Fita azul', fita: 'azul' }, C('Crisântemo'), C('Crisântemo')],
  [{ tipo: 'animal', nome: 'Veado', especial: 'veado' }, { tipo: 'fita', nome: 'Fita azul', fita: 'azul' }, C('Bordo'), C('Bordo')],
  [
    { tipo: 'luz', nome: 'Homem da chuva', especial: 'chuva' },
    { tipo: 'animal', nome: 'Andorinha' },
    { tipo: 'fita', nome: 'Fita vermelha', fita: 'vermelha' },
    { tipo: 'comum', nome: 'Relâmpago' },
  ],
  [{ tipo: 'luz', nome: 'Fênix' }, C('Paulównia'), C('Paulównia'), C('Paulównia')],
];

/** As 48 cartas: 12 meses × 4. O id é (mês − 1) × 4 + posição. */
export const BARALHO_HANA: CartaHana[] = DEFS.flatMap((m, i) => m.map((d, k) => ({ ...d, id: i * 4 + k, mes: i + 1 })));

export const carta = (id: number): CartaHana => BARALHO_HANA[id];
export const mesDe = (id: number) => BARALHO_HANA[id].mes;

/** valor “de mesa” de cada tipo (o mesmo do artigo: 20, 10, 5, 1) */
export const VALOR_TIPO: Record<TipoCarta, number> = { luz: 20, animal: 10, fita: 5, comum: 1 };

export interface Yaku {
  id: string;
  nome: string;
  /** o nome em japonês, em rōmaji */
  jp: string;
  pontos: number;
}

/** Os yaku formados por um monte de cartas capturadas. */
export function yakusDe(capturas: number[]): Yaku[] {
  const cs = capturas.map(carta);
  const r: Yaku[] = [];
  const luzes = cs.filter((c) => c.tipo === 'luz');
  const temChuva = luzes.some((c) => c.especial === 'chuva');
  if (luzes.length === 5) r.push({ id: 'goko', nome: 'Cinco luzes', jp: 'Gokō', pontos: 10 });
  else if (luzes.length === 4) {
    if (temChuva) r.push({ id: 'ameshiko', nome: 'Quatro luzes com chuva', jp: 'Ame-Shikō', pontos: 7 });
    else r.push({ id: 'shiko', nome: 'Quatro luzes', jp: 'Shikō', pontos: 8 });
  } else if (luzes.length === 3 && !temChuva) r.push({ id: 'sanko', nome: 'Três luzes', jp: 'Sankō', pontos: 5 });

  const tem = (e: CartaHana['especial']) => cs.some((c) => c.especial === e);
  if (tem('saque') && tem('cortina')) r.push({ id: 'hanami', nome: 'Saquê sob as cerejeiras', jp: 'Hanami-zake', pontos: 5 });
  if (tem('saque') && tem('lua')) r.push({ id: 'tsukimi', nome: 'Saquê sob a lua', jp: 'Tsukimi-zake', pontos: 5 });

  const animais = cs.filter((c) => c.tipo === 'animal').length;
  if (tem('javali') && tem('veado') && tem('borboletas'))
    r.push({ id: 'inoshikacho', nome: 'Javali, veado e borboletas', jp: 'Inoshikachō', pontos: 5 + Math.max(0, animais - 3) });
  if (animais >= 5) r.push({ id: 'tane', nome: 'Animais', jp: 'Tane', pontos: animais - 4 });

  const fitas = cs.filter((c) => c.tipo === 'fita');
  const poemas = fitas.filter((c) => c.fita === 'poema').length;
  const azuis = fitas.filter((c) => c.fita === 'azul').length;
  if (poemas === 3 && azuis === 3) r.push({ id: 'chofuku', nome: 'Fitas de poema e azuis', jp: 'Akatan Aotan no Chōfuku', pontos: 10 });
  else {
    if (poemas === 3) r.push({ id: 'akatan', nome: 'Fitas de poema', jp: 'Akatan', pontos: 5 });
    if (azuis === 3) r.push({ id: 'aotan', nome: 'Fitas azuis', jp: 'Aotan', pontos: 5 });
  }
  if (fitas.length >= 5) r.push({ id: 'tanzaku', nome: 'Fitas', jp: 'Tanzaku', pontos: fitas.length - 4 });

  // o copo de saquê conta também como carta comum
  const comuns = cs.filter((c) => c.tipo === 'comum' || c.especial === 'saque').length;
  if (comuns >= 10) r.push({ id: 'kasu', nome: 'Cartas comuns', jp: 'Kasu', pontos: comuns - 9 });
  return r;
}

export const pontosDe = (capturas: number[]) => yakusDe(capturas).reduce((s, y) => s + y.pontos, 0);

export type Jogador = 0 | 1;
export type Fase = 'jogar' | 'escolherMonte' | 'decidir' | 'fim';

export interface ResultadoRodada {
  vencedor: Jogador | null;
  pontos: number;
  motivo: 'parou' | 'teshi' | 'kuttsuki' | 'oya-ken';
  yakus: Yaku[];
  /** explicação curta dos dobros */
  dobros: string[];
}

export interface EstadoHana {
  maos: [number[], number[]];
  campo: number[];
  monte: number[];
  capturas: [number[], number[]];
  vez: Jogador;
  oya: Jogador;
  fase: Fase;
  /** quantas vezes cada um pediu koi-koi nesta rodada */
  koi: [number, number];
  /** pontos de yaku na última vez que cada um decidiu (para saber se formou yaku novo) */
  marcados: [number, number];
  /** a carta virada do monte que espera a escolha do par (fase escolherMonte) */
  pendente: number | null;
  /** o que aconteceu na última jogada, para a tela animar e narrar */
  ultima: { jogador: Jogador; mao: number; levouMao: number[]; virada: number | null; levouMonte: number[] } | null;
  resultado: ResultadoRodada | null;
}

export type Rng = () => number;

export function embaralhar<T>(xs: T[], rng: Rng): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const porMes = (ids: number[]) => {
  const m = new Map<number, number>();
  for (const id of ids) m.set(mesDe(id), (m.get(mesDe(id)) ?? 0) + 1);
  return m;
};

/** Teshi (4 do mesmo mês) ou kuttsuki (4 pares) numa mão de 8. */
export function maoEspecial(mao: number[]): 'teshi' | 'kuttsuki' | null {
  const m = [...porMes(mao).values()];
  if (m.some((n) => n === 4)) return 'teshi';
  if (m.length === 4 && m.every((n) => n === 2)) return 'kuttsuki';
  return null;
}

/** Dá as cartas. A mesa nunca sai com as 4 cartas de um mês (aí dá de novo). */
export function novaRodada(rng: Rng, oya: Jogador = 0): EstadoHana {
  let b: number[];
  do b = embaralhar(BARALHO_HANA.map((c) => c.id), rng);
  while ([...porMes(b.slice(16, 24)).values()].some((n) => n === 4));
  const ko: Jogador = oya === 0 ? 1 : 0;
  const maos: [number[], number[]] = [[], []];
  maos[ko] = b.slice(0, 8);
  maos[oya] = b.slice(8, 16);
  const est: EstadoHana = {
    maos,
    campo: b.slice(16, 24),
    monte: b.slice(24),
    capturas: [[], []],
    vez: oya,
    oya,
    fase: 'jogar',
    koi: [0, 0],
    marcados: [0, 0],
    pendente: null,
    ultima: null,
    resultado: null,
  };
  for (const j of [oya, ko] as Jogador[]) {
    const esp = maoEspecial(maos[j]);
    if (esp) {
      est.fase = 'fim';
      est.resultado = { vencedor: j, pontos: 6, motivo: esp, yakus: [], dobros: [] };
      break;
    }
  }
  return est;
}

/** As cartas da mesa do mesmo mês de `id`. */
export const paresNaMesa = (est: EstadoHana, id: number) => est.campo.filter((c) => mesDe(c) === mesDe(id));

const clonar = (e: EstadoHana): EstadoHana => ({
  ...e,
  maos: [[...e.maos[0]], [...e.maos[1]]],
  campo: [...e.campo],
  monte: [...e.monte],
  capturas: [[...e.capturas[0]], [...e.capturas[1]]],
  koi: [...e.koi] as [number, number],
  marcados: [...e.marcados] as [number, number],
  ultima: e.ultima ? { ...e.ultima } : null,
});

/** Casa `id` com a mesa: devolve o que foi levado (vazio = a carta ficou na mesa). Muda `e`. */
function casar(e: EstadoHana, id: number, alvo: number | undefined): number[] {
  const pares = paresNaMesa(e, id);
  let levou: number[] = [];
  if (pares.length === 0) {
    e.campo.push(id);
    return [];
  }
  if (pares.length === 1) levou = [id, pares[0]];
  else if (pares.length === 3) levou = [id, ...pares];
  else {
    if (alvo === undefined || !pares.includes(alvo)) throw new Error('escolha qual carta da mesa levar');
    levou = [id, alvo];
  }
  e.campo = e.campo.filter((c) => !levou.includes(c));
  e.capturas[e.vez].push(...levou);
  return levou;
}

/** Depois da carta do monte: formou yaku novo? Então decide; senão passa a vez (ou acaba). */
function fecharVez(e: EstadoHana): EstadoHana {
  const j = e.vez;
  const pts = pontosDe(e.capturas[j]);
  if (pts > e.marcados[j]) {
    // sem cartas na mão, não dá para pedir koi-koi: para na hora
    if (e.maos[j].length === 0) return parar(e);
    e.fase = 'decidir';
    return e;
  }
  return passarVez(e);
}

function passarVez(e: EstadoHana): EstadoHana {
  const outro: Jogador = e.vez === 0 ? 1 : 0;
  if (e.maos[0].length === 0 && e.maos[1].length === 0) {
    e.fase = 'fim';
    e.resultado = { vencedor: e.oya, pontos: 1, motivo: 'oya-ken', yakus: [], dobros: [] };
    return e;
  }
  e.vez = outro;
  e.fase = 'jogar';
  return e;
}

function virarMonte(e: EstadoHana): EstadoHana {
  const virada = e.monte.shift();
  if (virada === undefined) return fecharVez(e);
  e.ultima!.virada = virada;
  if (paresNaMesa(e, virada).length === 2) {
    e.pendente = virada;
    e.fase = 'escolherMonte';
    return e;
  }
  e.ultima!.levouMonte = casar(e, virada, undefined);
  return fecharVez(e);
}

/**
 * Joga a carta `id` da mão de quem está na vez. Se a mesa tem duas do mesmo mês, `alvo` diz qual
 * levar (sem ela, dá erro). Depois vira o monte sozinho.
 */
export function jogarDaMao(est: EstadoHana, id: number, alvo?: number): EstadoHana {
  if (est.fase !== 'jogar') throw new Error('não é hora de jogar');
  if (!est.maos[est.vez].includes(id)) throw new Error('essa carta não está na mão');
  const e = clonar(est);
  e.maos[e.vez] = e.maos[e.vez].filter((c) => c !== id);
  e.ultima = { jogador: e.vez, mao: id, levouMao: [], virada: null, levouMonte: [] };
  e.ultima.levouMao = casar(e, id, alvo);
  return virarMonte(e);
}

/** A carta virada do monte tinha dois pares na mesa: leva o `alvo`. */
export function escolherDoMonte(est: EstadoHana, alvo: number): EstadoHana {
  if (est.fase !== 'escolherMonte' || est.pendente === null) throw new Error('nada para escolher');
  const e = clonar(est);
  const v = e.pendente!;
  e.pendente = null;
  e.ultima!.levouMonte = casar(e, v, alvo);
  return fecharVez(e);
}

function parar(e: EstadoHana): EstadoHana {
  const j = e.vez;
  const outro: Jogador = j === 0 ? 1 : 0;
  const yakus = yakusDe(e.capturas[j]);
  let pontos = yakus.reduce((s, y) => s + y.pontos, 0);
  const dobros: string[] = [];
  if (pontos >= 7) {
    pontos *= 2;
    dobros.push('7 pontos ou mais: dobro');
  }
  if (e.koi[outro] > 0) {
    pontos *= 2;
    dobros.push('o outro tinha pedido koi-koi: dobro');
  }
  e.fase = 'fim';
  e.resultado = { vencedor: j, pontos, motivo: 'parou', yakus, dobros };
  return e;
}

/** Formou yaku: “koi-koi” (seguir, apostando em mais) ou parar e marcar. */
export function decidir(est: EstadoHana, escolha: 'koikoi' | 'parar'): EstadoHana {
  if (est.fase !== 'decidir') throw new Error('não há o que decidir');
  const e = clonar(est);
  if (escolha === 'parar') return parar(e);
  e.koi[e.vez]++;
  e.marcados[e.vez] = pontosDe(e.capturas[e.vez]);
  return passarVez(e);
}

// ——— O Linu ———

/** Quanto vale, para quem leva, o conjunto `levou` somado ao que já tem. */
function ganho(capturas: number[], levou: number[]): number {
  if (levou.length === 0) return 0;
  const antes = pontosDe(capturas);
  const depois = pontosDe([...capturas, ...levou]);
  return (depois - antes) * 30 + levou.reduce((s, id) => s + VALOR_TIPO[carta(id).tipo], 0);
}

/** A jogada do Linu: leva o que mais vale; sem par, descarta a carta mais barata e menos arriscada. */
export function jogadaDoLinu(est: EstadoHana): { carta: number; alvo?: number } {
  const j = est.vez;
  const outro: Jogador = j === 0 ? 1 : 0;
  const minhas = est.capturas[j];
  let melhor: { carta: number; alvo?: number; nota: number } | null = null;
  for (const id of est.maos[j]) {
    const pares = paresNaMesa(est, id);
    const opcoes: (number | undefined)[] = pares.length === 2 ? pares : [undefined];
    for (const alvo of opcoes) {
      let nota: number;
      if (pares.length === 0) {
        // descartar: perde-se o valor da carta, e mais ainda se o adversário puder fazer yaku com ela
        const c = carta(id);
        nota = -VALOR_TIPO[c.tipo] - ganho(est.capturas[outro], [id]) * 0.5;
      } else {
        const levou = pares.length === 1 ? [id, pares[0]] : pares.length === 3 ? [id, ...pares] : [id, alvo!];
        nota = ganho(minhas, levou);
      }
      if (!melhor || nota > melhor.nota) melhor = { carta: id, alvo, nota };
    }
  }
  return { carta: melhor!.carta, alvo: melhor!.alvo };
}

/** Qual par o Linu leva quando a carta virada do monte tem dois na mesa. */
export function escolhaDoMonteDoLinu(est: EstadoHana): number {
  const pares = paresNaMesa(est, est.pendente!);
  return pares.reduce((a, b) => (ganho(est.capturas[est.vez], [est.pendente!, b]) > ganho(est.capturas[est.vez], [est.pendente!, a]) ? b : a));
}

/**
 * O Linu segue (koi-koi) só quando ainda tem cartas na mão, os pontos são baixos e o adversário
 * está longe de fazer um yaku. Senão, para.
 */
export function decisaoDoLinu(est: EstadoHana): 'koikoi' | 'parar' {
  const j = est.vez;
  const outro: Jogador = j === 0 ? 1 : 0;
  const meus = pontosDe(est.capturas[j]);
  const perigo = est.capturas[outro].reduce((s, id) => s + VALOR_TIPO[carta(id).tipo], 0);
  if (est.maos[j].length >= 4 && meus < 4 && perigo < 40 && est.koi[outro] === 0) return 'koikoi';
  return 'parar';
}
