/**
 * Motor de regras do Go (weiqi, baduk). Segue as “regras básicas” do artigo “Rules of Go” da
 * Wikipédia em inglês (consultado em 11/10/2026), que são, “exceto pela redação, idênticas às
 * regras de Tromp–Taylor” e próximas das regras chinesas:
 *   - o tabuleiro começa vazio e as pretas jogam primeiro (regras 5 e 6);
 *   - na vez, o jogador passa ou põe uma pedra num ponto vazio; depois tiram-se as pedras do
 *     adversário sem liberdade (regra 7);
 *   - com a regra opcional 7A, que o artigo diz ser a prática fora de Taiwan e da Nova Zelândia,
 *     o suicídio é proibido: não vale a jogada que deixaria sem liberdade as próprias pedras;
 *   - regra 8: não vale a jogada que recria uma posição que já aconteceu no jogo (isso cobre o ko);
 *   - regra 9: o jogo acaba quando os dois passam seguidos;
 *   - contagem por área (regra 10 e seção “Area scoring”): pedras no tabuleiro mais os pontos
 *     vazios cercados só por pedras daquele jogador.
 * Komi: 7,5 pontos para as brancas, o padrão das regras chinesas (artigo “Komi (Go)”).
 * Pedras mortas: o artigo diz que, depois dos passes, os jogadores tentam concordar sobre quais
 * grupos estão mortos e, sem acordo, nas regras chinesas o jogo simplesmente continua. Por isso a
 * tela tem a fase de contagem (tocar num grupo marca e desmarca como morto) e o botão de voltar a
 * jogar. O tabuleiro do app é 9×9, o tamanho que o artigo “Go (game)” cita para iniciantes.
 *
 * Variantes (as do próprio jogo, em `data/jogos-conhecimento.ts`):
 *   - contagem por território (regras japonesas e coreanas): cada um soma os pontos vazios que cercou e
 *     os prisioneiros (as pedras que capturou durante o jogo e as pedras mortas do outro, tiradas na
 *     contagem); komi de 6,5;
 *   - partida com handicap: as pretas começam com 2 a 4 pedras nos pontos marcados dos cantos, as
 *     brancas jogam primeiro e o komi é de 0,5.
 */

export type Cor = 'b' | 'w'; // b = pretas (começam), w = brancas
export type Ponto = Cor | null;

export interface ResultadoGo {
  pretas: number;
  brancas: number;
  vencedor: Cor | 'empate';
  /** a partida acabou porque alguém desistiu */
  desistencia?: boolean;
}

export interface GoState {
  tamanho: number;
  /** pontos do tabuleiro, linha a linha (índice = linha * tamanho + coluna) */
  board: Ponto[];
  turn: Cor;
  /** pedras que cada cor já capturou (prisioneiros), só para mostrar */
  capturas: Record<Cor, number>;
  /** passes seguidos */
  passes: number;
  /** todas as posições que já aconteceram (regra 8) */
  vistas: string[];
  ultimo: number | 'passe' | null;
  fase: 'jogando' | 'contagem' | 'fim';
  /** grupos marcados como mortos na contagem */
  mortas: number[];
  komi: number;
  resultado: ResultadoGo | null;
  /** como se conta no fim: por área (o padrão do app) ou por território */
  contagem?: 'area' | 'territorio';
}

export const KOMI = 7.5;
const outra = (c: Cor): Cor => (c === 'b' ? 'w' : 'b');
const assinatura = (board: Ponto[]) => board.map((p) => p ?? '.').join('');

export const KOMI_TERRITORIO = 6.5;
export const KOMI_HANDICAP = 0.5;

/** Os pontos dos cantos onde vão as pedras de handicap, na ordem em que entram (2, 3 ou 4). */
export function pontosDeHandicap(n: number): number[] {
  const a = n === 9 ? 2 : 3;
  const b = n - 1 - a;
  // em cima à direita, embaixo à esquerda, embaixo à direita, em cima à esquerda
  return [a * n + b, b * n + a, b * n + b, a * n + a];
}

export function createInitialState(tamanho = 9, komi = KOMI, opcoes: { contagem?: 'area' | 'territorio'; handicap?: number } = {}): GoState {
  const board = Array<Ponto>(tamanho * tamanho).fill(null);
  let turn: Cor = 'b';
  const h = Math.max(0, Math.min(4, opcoes.handicap ?? 0));
  if (h >= 2) {
    for (const i of pontosDeHandicap(tamanho).slice(0, h)) board[i] = 'b';
    turn = 'w';
    komi = KOMI_HANDICAP;
  }
  const s: GoState = { tamanho, board, turn, capturas: { b: 0, w: 0 }, passes: 0, vistas: [assinatura(board)], ultimo: null, fase: 'jogando', mortas: [], komi, resultado: null };
  if (opcoes.contagem === 'territorio') {
    s.contagem = 'territorio';
    if (h < 2) s.komi = KOMI_TERRITORIO;
  }
  return s;
}

export function vizinhos(i: number, n: number): number[] {
  const r = Math.floor(i / n);
  const c = i % n;
  const out: number[] = [];
  if (r > 0) out.push(i - n);
  if (r < n - 1) out.push(i + n);
  if (c > 0) out.push(i - 1);
  if (c < n - 1) out.push(i + 1);
  return out;
}

/** O grupo (pedras da mesma cor ligadas pelas linhas) que contém `i`, e as liberdades dele. */
export function grupo(board: Ponto[], i: number, n: number): { pedras: number[]; liberdades: number } {
  const cor = board[i];
  const visto = new Set([i]);
  const libs = new Set<number>();
  const pilha = [i];
  while (pilha.length) {
    const p = pilha.pop()!;
    for (const v of vizinhos(p, n)) {
      if (board[v] === null) libs.add(v);
      else if (board[v] === cor && !visto.has(v)) {
        visto.add(v);
        pilha.push(v);
      }
    }
  }
  return { pedras: [...visto], liberdades: libs.size };
}

/** Põe a pedra e tira o que for capturado. Devolve null se a jogada não vale (ocupado, suicídio, posição repetida). */
function tentar(state: GoState, i: number): { board: Ponto[]; capturadas: number } | null {
  const n = state.tamanho;
  if (state.fase !== 'jogando' || i < 0 || i >= n * n || state.board[i] !== null) return null;
  const board = state.board.slice();
  const eu = state.turn;
  board[i] = eu;
  let capturadas = 0;
  for (const v of vizinhos(i, n)) {
    if (board[v] !== outra(eu)) continue;
    const g = grupo(board, v, n);
    if (g.liberdades === 0) {
      for (const p of g.pedras) board[p] = null;
      capturadas += g.pedras.length;
    }
  }
  // suicídio (regra opcional 7A)
  if (grupo(board, i, n).liberdades === 0) return null;
  // posição repetida (regra 8)
  if (state.vistas.includes(assinatura(board))) return null;
  return { board, capturadas };
}

export function jogadaLegal(state: GoState, i: number): boolean {
  return tentar(state, i) !== null;
}

export function jogadasLegais(state: GoState): number[] {
  const out: number[] = [];
  for (let i = 0; i < state.board.length; i++) if (state.board[i] === null && jogadaLegal(state, i)) out.push(i);
  return out;
}

/** Joga a pedra de quem tem a vez em `i`. Jogada que não vale devolve o mesmo `state`. */
export function jogar(state: GoState, i: number): GoState {
  const t = tentar(state, i);
  if (!t) return state;
  const eu = state.turn;
  return {
    ...state,
    board: t.board,
    turn: outra(eu),
    capturas: { ...state.capturas, [eu]: state.capturas[eu] + t.capturadas },
    passes: 0,
    vistas: [...state.vistas, assinatura(t.board)],
    ultimo: i,
  };
}

/** Passa a vez. O segundo passe seguido leva à contagem. */
export function passar(state: GoState): GoState {
  if (state.fase !== 'jogando') return state;
  const passes = state.passes + 1;
  return { ...state, turn: outra(state.turn), passes, ultimo: 'passe', fase: passes >= 2 ? 'contagem' : 'jogando', mortas: [] };
}

/** Na contagem: marca (ou desmarca) como morto o grupo inteiro que contém `i`. */
export function alternarMorto(state: GoState, i: number): GoState {
  if (state.fase !== 'contagem' || state.board[i] === null) return state;
  const { pedras } = grupo(state.board, i, state.tamanho);
  const marcado = state.mortas.includes(i);
  const mortas = marcado ? state.mortas.filter((p) => !pedras.includes(p)) : [...new Set([...state.mortas, ...pedras])];
  return { ...state, mortas };
}

/** Sem acordo sobre as pedras mortas: volta a jogar (regras chinesas), com a vez de quem não passou por último. */
export function voltarAJogar(state: GoState): GoState {
  if (state.fase !== 'contagem') return state;
  return { ...state, fase: 'jogando', passes: 0, mortas: [] };
}

/**
 * Pontos de cada cor por área: as pedras vivas mais os pontos vazios (contando o lugar das pedras
 * mortas, que saem do tabuleiro) cercados só por uma cor. `dono` diz de quem é cada ponto (ou null).
 */
export function contarArea(board: Ponto[], n: number, mortas: number[] = []): { b: number; w: number; dono: (Cor | null)[] } {
  const vivo = board.map((p, i) => (mortas.includes(i) ? null : p));
  const dono: (Cor | null)[] = vivo.slice();
  const visto = new Set<number>();
  for (let i = 0; i < vivo.length; i++) {
    if (vivo[i] !== null || visto.has(i)) continue;
    const regiao: number[] = [];
    const bordas = new Set<Cor>();
    const pilha = [i];
    visto.add(i);
    while (pilha.length) {
      const p = pilha.pop()!;
      regiao.push(p);
      for (const v of vizinhos(p, n)) {
        const c = vivo[v];
        if (c === null) {
          if (!visto.has(v)) {
            visto.add(v);
            pilha.push(v);
          }
        } else bordas.add(c);
      }
    }
    const cor = bordas.size === 1 ? [...bordas][0]! : null;
    for (const p of regiao) dono[p] = cor;
  }
  return { b: dono.filter((d) => d === 'b').length, w: dono.filter((d) => d === 'w').length, dono };
}

/**
 * Pontos de cada cor por território: os pontos vazios cercados (contando o lugar das pedras mortas)
 * mais os prisioneiros (as capturas do jogo e as pedras mortas do adversário).
 */
export function contarTerritorio(state: Pick<GoState, 'board' | 'tamanho' | 'mortas' | 'capturas'>): { b: number; w: number; dono: (Cor | null)[] } {
  const { dono } = contarArea(state.board, state.tamanho, state.mortas);
  const vivo = state.board.map((p, i) => (state.mortas.includes(i) ? null : p));
  const territorio = (c: Cor) => dono.filter((d, i) => d === c && vivo[i] === null).length;
  const mortasDe = (c: Cor) => state.mortas.filter((i) => state.board[i] === c).length;
  return { b: territorio('b') + state.capturas.b + mortasDe('w'), w: territorio('w') + state.capturas.w + mortasDe('b'), dono };
}

/** Os pontos (sem o komi) pela contagem da partida: área ou território. */
export function pontos(state: GoState, mortas = state.mortas): { b: number; w: number; dono: (Cor | null)[] } {
  return state.contagem === 'territorio' ? contarTerritorio({ ...state, mortas }) : contarArea(state.board, state.tamanho, mortas);
}

/** Fecha a contagem com as pedras mortas marcadas e declara o resultado (o komi entra para as brancas). */
export function encerrar(state: GoState): GoState {
  if (state.fase !== 'contagem') return state;
  const { b, w } = pontos(state);
  const brancas = w + state.komi;
  const vencedor: Cor | 'empate' = b > brancas ? 'b' : brancas > b ? 'w' : 'empate';
  return { ...state, fase: 'fim', resultado: { pretas: b, brancas, vencedor } };
}

/** Quem tem a vez desiste: o outro vence. */
export function desistir(state: GoState): GoState {
  if (state.fase === 'fim') return state;
  const { b, w } = pontos(state, []);
  return { ...state, fase: 'fim', resultado: { pretas: b, brancas: w + state.komi, vencedor: outra(state.turn), desistencia: true } };
}
