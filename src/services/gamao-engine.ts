/**
 * Motor do gamão (backgammon), com as regras do artigo “Backgammon” da Wikipédia em inglês
 * (consultado em 14/10/2026). Estado imutável: cada função devolve um estado novo.
 *
 * As 24 casas (os “pontos”) ficam em `pts`, vistas do lado das claras: o índice i é o ponto i+1 das
 * claras. Número positivo = peças claras ('w'); negativo = peças escuras ('p'). As claras andam do
 * ponto 24 para o 1 (índice que desce) e tiram as peças depois do ponto 1; a casa delas é 1 a 6
 * (índices 0–5). As escuras andam ao contrário: casa nos índices 18–23.
 *
 * A sorte entra só por `rolar(s, sorteio)`: o teste passa um sorteio fixo, ou usa `rolarCom` com os
 * dados escolhidos. O cubo de dobrar fica de fora.
 */

export type CorG = 'w' | 'p';
export type OrigemG = number | 'bar';
export type DestinoG = number | 'fora';
export type FaseG = 'abrir' | 'rolar' | 'mover' | 'fim';
export type VitoriaG = 'simples' | 'gamao' | 'backgammon';

export interface PassoG {
  cor: CorG;
  de: OrigemG;
  para: DestinoG;
  dado: number;
  /** se o passo bateu uma peça sozinha do adversário (que foi para a barra) */
  bateu: boolean;
}

export interface GamaoState {
  pts: number[];
  bar: Record<CorG, number>;
  fora: Record<CorG, number>;
  turn: CorG;
  fase: FaseG;
  /** os dois dados da última rolagem (da abertura: o das claras e o das escuras) */
  dados: number[];
  /** os dados que ainda faltam usar nesta vez (numa dupla, quatro) */
  restam: number[];
  /** a rolagem de abertura, um dado para cada lado: [claras, escuras] */
  abertura: [number, number] | null;
  /** os passos já jogados nesta vez (para desfazer e para a animação) */
  passos: PassoG[];
  /** quantas vezes os dados já rolaram (a animação dos dados usa como chave) */
  rolagens: number;
  winner: CorG | null;
  vitoria: VitoriaG | null;
  /** quanto vale a vitória: 1 simples, 2 gamão, 3 backgammon */
  pontos: number;
}

export const PECAS = 15;
export const outra = (c: CorG): CorG => (c === 'w' ? 'p' : 'w');
const sinal = (c: CorG) => (c === 'w' ? 1 : -1);
/** quantas peças da cor `c` estão no índice i */
export const daCor = (pts: number[], i: number, c: CorG) => (c === 'w' ? Math.max(0, pts[i]!) : Math.max(0, -pts[i]!));

export function createInitialState(): GamaoState {
  const pts = Array(24).fill(0) as number[];
  // claras: 2 no ponto 24, 5 no 13, 3 no 8, 5 no 6; as escuras, no espelho
  pts[23] = 2;
  pts[12] = 5;
  pts[7] = 3;
  pts[5] = 5;
  pts[0] = -2;
  pts[11] = -5;
  pts[16] = -3;
  pts[18] = -5;
  return {
    pts,
    bar: { w: 0, p: 0 },
    fora: { w: 0, p: 0 },
    turn: 'w',
    fase: 'abrir',
    dados: [],
    restam: [],
    abertura: null,
    passos: [],
    rolagens: 0,
    winner: null,
    vitoria: null,
    pontos: 0,
  };
}

/** Quantos pontos faltam para a cor tirar todas as peças (a “contagem de pips”). */
export function pips(s: GamaoState, c: CorG): number {
  let t = s.bar[c] * 25;
  for (let i = 0; i < 24; i++) {
    const n = daCor(s.pts, i, c);
    if (n) t += n * (c === 'w' ? i + 1 : 24 - i);
  }
  return t;
}

/** A casa (os 6 últimos pontos) da cor: claras 0–5, escuras 18–23. */
export const naCasa = (c: CorG, i: number) => (c === 'w' ? i <= 5 : i >= 18);

/** Se todas as peças da cor estão na casa dela (aí ela pode começar a tirar). */
export function todasNaCasa(s: GamaoState, c: CorG): boolean {
  if (s.bar[c] > 0) return false;
  for (let i = 0; i < 24; i++) if (!naCasa(c, i) && daCor(s.pts, i, c) > 0) return false;
  return true;
}

/** Um passo de um dado só, olhando só o tabuleiro (sem a regra de usar o máximo de dados). */
export function passoSimples(s: GamaoState, c: CorG, de: OrigemG, dado: number): PassoG | null {
  const adv = outra(c);
  if (s.bar[c] > 0 && de !== 'bar') return null;
  let alvo: number;
  if (de === 'bar') {
    if (s.bar[c] === 0) return null;
    alvo = c === 'w' ? 24 - dado : dado - 1;
  } else {
    if (daCor(s.pts, de, c) === 0) return null;
    alvo = c === 'w' ? de - dado : de + dado;
  }
  if (alvo < 0 || alvo > 23) {
    // tirar a peça: só com todas na casa; com o número exato, ou com um maior se não há peça mais longe
    if (de === 'bar' || !todasNaCasa(s, c)) return null;
    const exato = c === 'w' ? de === dado - 1 : de === 24 - dado;
    if (!exato) {
      if (c === 'w') {
        for (let i = de + 1; i < 24; i++) if (daCor(s.pts, i, c) > 0) return null;
      } else {
        for (let i = 0; i < de; i++) if (daCor(s.pts, i, c) > 0) return null;
      }
    }
    return { cor: c, de, para: 'fora', dado, bateu: false };
  }
  const n = daCor(s.pts, alvo, adv);
  if (n >= 2) return null;
  return { cor: c, de, para: alvo, dado, bateu: n === 1 };
}

function tirarDado(restam: number[], dado: number): number[] {
  const k = restam.indexOf(dado);
  return k < 0 ? restam : [...restam.slice(0, k), ...restam.slice(k + 1)];
}

/** Aplica um passo (já conferido), sem trocar a vez. */
function aplicar(s: GamaoState, p: PassoG): GamaoState {
  const c = p.cor;
  const adv = outra(c);
  const pts = s.pts.slice();
  const bar = { ...s.bar };
  const fora = { ...s.fora };
  if (p.de === 'bar') bar[c]--;
  else pts[p.de] -= sinal(c);
  if (p.para === 'fora') fora[c]++;
  else {
    if (p.bateu) {
      pts[p.para] = 0;
      bar[adv]++;
    }
    pts[p.para] += sinal(c);
  }
  const next: GamaoState = { ...s, pts, bar, fora, restam: tirarDado(s.restam, p.dado), passos: [...s.passos, p] };
  if (fora[c] === PECAS) {
    // quem perdeu sem tirar nenhuma peça leva gamão; e se ainda tem peça na barra ou na casa do
    // vencedor, backgammon
    let vitoria: VitoriaG = 'simples';
    if (fora[adv] === 0) {
      vitoria = 'gamao';
      let atrasada = bar[adv] > 0;
      for (let i = 0; i < 24; i++) if (naCasa(c, i) && daCor(pts, i, adv) > 0) atrasada = true;
      if (atrasada) vitoria = 'backgammon';
    }
    return { ...next, fase: 'fim', winner: c, vitoria, pontos: vitoria === 'simples' ? 1 : vitoria === 'gamao' ? 2 : 3, restam: [] };
  }
  return next;
}

const chave = (s: GamaoState) => `${s.pts.join(',')}|${s.bar.w},${s.bar.p}|${s.fora.w},${s.fora.p}`;
const origens = (s: GamaoState, c: CorG): OrigemG[] => {
  if (s.bar[c] > 0) return ['bar'];
  const out: OrigemG[] = [];
  for (let i = 0; i < 24; i++) if (daCor(s.pts, i, c) > 0) out.push(i);
  return out;
};

/** Todos os passos de um dado só que o tabuleiro deixa, com cada valor de dado que resta. */
function passosBrutos(s: GamaoState): PassoG[] {
  if (s.fase !== 'mover') return [];
  const out: PassoG[] = [];
  for (const d of new Set(s.restam))
    for (const o of origens(s, s.turn)) {
      const p = passoSimples(s, s.turn, o, d);
      if (p) out.push(p);
    }
  return out;
}

/** Quantos dados ainda dá para usar, no máximo, a partir de `s` (com memória por posição). */
function maxDados(s: GamaoState, memo: Map<string, number>): number {
  if (s.fase !== 'mover' || s.restam.length === 0) return 0;
  const k = `${chave(s)}#${s.restam.join('')}`;
  const m = memo.get(k);
  if (m !== undefined) return m;
  let melhor = 0;
  for (const p of passosBrutos(s)) {
    const v = 1 + maxDados(aplicar(s, p), memo);
    if (v > melhor) melhor = v;
    if (melhor === s.restam.length) break;
  }
  memo.set(k, melhor);
  return melhor;
}

/**
 * Os passos que valem agora. Regras: é preciso usar o maior número de dados possível; e se só um dos
 * dois dados (diferentes) cabe, tem de ser o maior, quando ele cabe.
 */
export function passosLegais(s: GamaoState): PassoG[] {
  const brutos = passosBrutos(s);
  if (brutos.length === 0) return [];
  const memo = new Map<string, number>();
  const max = maxDados(s, memo);
  let ok = brutos.filter((p) => 1 + maxDados(aplicar(s, p), memo) === max);
  if (max === 1 && s.restam.length === 2 && s.restam[0] !== s.restam[1]) {
    const maior = Math.max(...s.restam);
    if (ok.some((p) => p.dado === maior)) ok = ok.filter((p) => p.dado === maior);
  }
  return ok;
}

/** Joga um passo: a peça em `de` anda o `dado`. Se não vale, devolve o mesmo estado. */
export function jogarPasso(s: GamaoState, de: OrigemG, dado: number): GamaoState {
  const p = passosLegais(s).find((x) => x.de === de && x.dado === dado);
  return p ? aplicar(s, p) : s;
}

/** A vez acabou (dados usados ou sem lance): passa os dados para o outro lado. */
export function podePassar(s: GamaoState): boolean {
  return s.fase === 'mover' && passosLegais(s).length === 0;
}

export function passarVez(s: GamaoState): GamaoState {
  if (!podePassar(s)) return s;
  return { ...s, turn: outra(s.turn), fase: 'rolar', restam: [], passos: [] };
}

/** Rola os dados com os valores dados (os testes escolhem; o jogo usa `rolar`). */
export function rolarCom(s: GamaoState, a: number, b: number): GamaoState {
  if (s.fase === 'abrir') {
    // abertura: cada lado rola um dado (a = claras, b = escuras); quem tirar mais começa, com esses
    // dois números. Empate: rolam de novo
    if (a === b) return { ...s, abertura: [a, b], dados: [a, b], rolagens: s.rolagens + 1 };
    return { ...s, abertura: [a, b], dados: [a, b], restam: [a, b], turn: a > b ? 'w' : 'p', fase: 'mover', passos: [], rolagens: s.rolagens + 1 };
  }
  if (s.fase !== 'rolar') return s;
  return { ...s, dados: [a, b], restam: a === b ? [a, a, a, a] : [a, b], fase: 'mover', passos: [], rolagens: s.rolagens + 1 };
}

/** Um dado de 1 a 6 a partir de um sorteio entre 0 e 1. */
export const dado = (sorteio: () => number) => Math.min(6, 1 + Math.floor(sorteio() * 6));

export function rolar(s: GamaoState, sorteio: () => number = Math.random): GamaoState {
  return rolarCom(s, dado(sorteio), dado(sorteio));
}

export interface FimDeVez {
  passos: PassoG[];
  fim: GamaoState;
}

/**
 * Todas as posições diferentes a que a vez pode chegar com os dados que restam (com o caminho até
 * cada uma), já com a regra do máximo de dados e do dado maior. É o que o Linu compara.
 */
export function fimDasVezes(s: GamaoState): FimDeVez[] {
  if (s.fase !== 'mover') return [];
  const folhas = new Map<string, FimDeVez>();
  const vistos = new Set<string>();
  const andar = (e: GamaoState, caminho: PassoG[]) => {
    // a chave leva os dados já usados (no fim da partida, `restam` fica vazio para todos)
    const k = `${chave(e)}#${caminho.map((p) => p.dado).sort().join('')}`;
    if (vistos.has(k)) return;
    vistos.add(k);
    const ps = passosBrutos(e);
    if (ps.length === 0) {
      folhas.set(k, { passos: caminho, fim: e });
      return;
    }
    for (const p of ps) andar(aplicar(e, p), [...caminho, p]);
  };
  andar(s, []);
  let todas = [...folhas.values()];
  const max = Math.max(...todas.map((f) => f.passos.length));
  todas = todas.filter((f) => f.passos.length === max);
  if (max === 1 && s.restam.length === 2 && s.restam[0] !== s.restam[1]) {
    const maior = Math.max(...s.restam);
    if (todas.some((f) => f.passos[0]!.dado === maior)) todas = todas.filter((f) => f.passos[0]!.dado === maior);
  }
  // a mesma posição com dados diferentes conta uma vez só
  const unicas = new Map<string, FimDeVez>();
  for (const f of todas) if (!unicas.has(chave(f.fim))) unicas.set(chave(f.fim), f);
  return [...unicas.values()];
}

/** Se ainda há contato: alguma peça de um lado ainda tem de passar por alguma do outro. */
export function haContato(s: GamaoState): boolean {
  if (s.bar.w > 0 || s.bar.p > 0) return true;
  // a peça clara mais atrasada (índice maior) contra a escura mais atrasada (índice menor)
  let maisAtrasW = -1;
  let maisAtrasP = 24;
  for (let i = 0; i < 24; i++) {
    if (s.pts[i]! > 0) maisAtrasW = i;
    if (s.pts[i]! < 0 && maisAtrasP === 24) maisAtrasP = i;
  }
  return maisAtrasW > maisAtrasP;
}

/**
 * Um movimento de uma peça só, com um dado ou com vários juntos (a soma: 3+5 = 8; na dupla de 4,
 * também 8, 12 e 16). Não muda as regras: é a mesma sequência de passos, só jogada num toque. Cada
 * parada do meio tem de ser um passo que vale (não pode parar em ponto fechado), e a regra do
 * máximo de dados e do dado maior vale em cada passo.
 */
export interface MovimentoG {
  de: OrigemG;
  para: DestinoG;
  passos: PassoG[];
}

/** Quantas peças do adversário o movimento bate nas paradas do meio (o app prefere não bater no caminho). */
const batidasNoMeio = (m: MovimentoG) => m.passos.slice(0, -1).filter((p) => p.bateu).length;

/**
 * Todos os movimentos que valem agora, um por par (origem, destino): o de menos dados e, entre os que
 * usam os mesmos dados em ordem diferente, o que não bate no meio do caminho.
 */
export function movimentosLegais(s: GamaoState): MovimentoG[] {
  const todos: MovimentoG[] = [];
  const andar = (e: GamaoState, de: OrigemG, caminho: PassoG[]) => {
    for (const p of passosLegais(e)) {
      if (p.de !== de) continue;
      const passos = [...caminho, p];
      todos.push({ de: caminho[0]?.de ?? de, para: p.para, passos });
      const depois = aplicar(e, p);
      // a mesma peça segue andando (da barra ela já entrou; tirada, acabou)
      if (p.para !== 'fora' && depois.winner === null) andar(depois, p.para, passos);
    }
  };
  for (const de of new Set(passosLegais(s).map((p) => p.de))) andar(s, de, []);
  const melhor = new Map<string, MovimentoG>();
  for (const m of todos) {
    const k = `${String(m.de)}>${String(m.para)}`;
    const ja = melhor.get(k);
    const pior = (a: MovimentoG, b: MovimentoG) =>
      a.passos.length !== b.passos.length ? a.passos.length > b.passos.length : batidasNoMeio(a) !== batidasNoMeio(b) ? batidasNoMeio(a) > batidasNoMeio(b) : a.passos[0]!.dado > b.passos[0]!.dado;
    if (!ja || pior(ja, m)) melhor.set(k, m);
  }
  return [...melhor.values()];
}

/** Joga um movimento inteiro (todos os passos dele). Se algum passo não vale, devolve o mesmo estado. */
export function jogarMovimento(s: GamaoState, m: MovimentoG): GamaoState {
  let e = s;
  for (const p of m.passos) {
    const next = jogarPasso(e, p.de, p.dado);
    if (next === e) return s;
    e = next;
  }
  return e;
}

/**
 * Junta os passos de uma vez em movimentos de uma peça só (o Linu joga assim, um movimento por
 * toque): passos seguidos em que a peça que chegou é a que anda de novo.
 */
export function agruparPassos(passos: PassoG[]): MovimentoG[] {
  const out: MovimentoG[] = [];
  for (const p of passos) {
    const ult = out[out.length - 1];
    if (ult && ult.para !== 'fora' && p.de === ult.para) {
      ult.passos.push(p);
      ult.para = p.para;
    } else out.push({ de: p.de, para: p.para, passos: [p] });
  }
  return out;
}
