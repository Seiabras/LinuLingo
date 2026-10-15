/**
 * O Linu no Quarto. A vez de cada um tem duas partes (colocar a peça recebida e escolher a peça do
 * adversário), então o “lance” da busca é o par casa + peça. Negamax com poda alfa-beta: uma peça
 * que deixa o adversário completar um Quarto na hora nem entra na busca (é derrota certa), e a
 * vitória na hora vem antes de tudo. No difícil, aprofundamento iterativo com limite de tempo: no
 * fim do jogo, com poucas casas, ele vê a partida até o fim; no começo, olha só alguns lances.
 *
 * Arquivo à parte do `jogos-ia.ts` (o lance do Quarto não cabe no `JogoBusca`, que é de um passo
 * só), com os mesmos três níveis.
 */
import type { NivelLinu } from './jogos-prefs';
import { TODAS, alinhamentos, alinhamentosDaCasa, anunciar, colocar, escolher, pecasLivres, type QuartoState } from './quarto-engine';

const VITORIA = 1_000_000;

/** Profundidade (em vezes inteiras, colocar + escolher) e ruído de cada nível; o difícil usa o tempo. */
export const NIVEIS_QUARTO: Record<NivelLinu, { prof: number; ruido: number; ms: number }> = {
  facil: { prof: 1, ruido: 0.6, ms: 0 },
  medio: { prof: 2, ruido: 0, ms: 0 },
  dificil: { prof: 16, ruido: 0, ms: 700 },
};

class TempoEsgotado extends Error {}

interface Busca {
  board: Int8Array;
  linhas: number[][];
  porCasa: number[][][];
  /** as características que contam (a variante para iniciantes tira algumas) */
  caracs: number;
  ate: number;
  nos: number;
}

/** Se a peça `p` na casa `i` (já posta no `board`) fecha um alinhamento com algo em comum. */
function fecha(b: Busca, i: number): boolean {
  for (const a of b.porCasa[i]!) {
    let sim = 15;
    let nao = 15;
    let cheio = true;
    for (const k of a) {
      const v = b.board[k]!;
      if (v < 0) {
        cheio = false;
        break;
      }
      sim &= v;
      nao &= ~v;
    }
    if (cheio && ((sim | nao) & b.caracs) !== 0) return true;
  }
  return false;
}

/**
 * As “ameaças” do tabuleiro: para cada alinhamento com 3 peças e uma casa vazia, o que as 3 têm em
 * comum. Uma peça é perigosa de dar se completa alguma delas.
 */
function ameacas(b: Busca): number[] {
  const r: number[] = [];
  for (const a of b.linhas) {
    let sim = 15;
    let nao = 15;
    let vazias = 0;
    for (const k of a) {
      const v = b.board[k]!;
      if (v < 0) vazias++;
      else {
        sim &= v;
        nao &= ~v & 15;
      }
    }
    sim &= b.caracs;
    nao &= b.caracs;
    if (vazias === 1 && (sim | nao) !== 0) r.push(sim | (nao << 4));
  }
  return r;
}

const perigosa = (q: number, am: number[]) => am.some((m) => (m & q & 15) !== 0 || ((m >> 4) & ~q & 15) !== 0);

/**
 * Valor para quem vai colocar a peça `p` (positivo = bom para ele). `livres` são as peças que
 * sobram para dar depois.
 */
function negamax(b: Busca, p: number, livres: number, prof: number, alfa: number, beta: number): number {
  if (++b.nos % 2048 === 0 && b.ate > 0 && Date.now() > b.ate) throw new TempoEsgotado();
  const vazias: number[] = [];
  for (let i = 0; i < 16; i++) if (b.board[i]! < 0) vazias.push(i);
  // vitória na hora
  for (const i of vazias) {
    b.board[i] = p;
    const ok = fecha(b, i);
    b.board[i] = -1;
    if (ok) return VITORIA + prof;
  }
  if (livres === 0) return 0; // era a última peça e não fechou nada: empate
  if (prof === 0) return 0;
  let melhor = -Infinity;
  for (const i of vazias) {
    b.board[i] = p;
    const am = ameacas(b);
    for (let q = 0; q < 16; q++) {
      if (!(livres & (1 << q))) continue;
      // dar uma peça que fecha um Quarto é perder na hora
      const nota = perigosa(q, am) ? -(VITORIA + prof - 1) : -negamax(b, q, livres & ~(1 << q), prof - 1, -beta, -alfa);
      if (nota > melhor) melhor = nota;
      if (nota > alfa) alfa = nota;
      if (alfa >= beta) break;
    }
    b.board[i] = -1;
    if (alfa >= beta) break;
  }
  return melhor;
}

export interface LanceQuarto {
  /** anunciar “Quarto!” (o próprio alinhamento ou o que o adversário deixou passar) */
  anunciar?: boolean;
  /** onde colocar a peça recebida (fase “colocar”) */
  casa?: number;
  /** a peça a dar ao adversário */
  peca?: number;
}

/** Aplica o lance do Linu inteiro, passo a passo (para o tabuleiro e para os testes). */
export function aplicarLanceQuarto(s: QuartoState, l: LanceQuarto): QuartoState {
  if (l.anunciar) return anunciar(s);
  let e = s;
  if (l.casa !== undefined) e = colocar(e, l.casa);
  if (e.winner !== null) return e;
  if (e.aberto) return anunciar(e);
  if (l.peca !== undefined) e = escolher(e, l.peca);
  return e;
}

/**
 * O lance do Linu na vez dele. Na fase “colocar”: a casa e a peça que ele dá depois (ou só a casa,
 * quando ela vence ou quando era a última peça). Na fase “escolher” (o começo da partida): a peça.
 */
export function lanceQuarto(s: QuartoState, nivel: NivelLinu, semente = Math.random): LanceQuarto | null {
  if (s.winner !== null) return null;
  const { prof, ruido, ms } = NIVEIS_QUARTO[nivel];
  // o Quarto que o adversário deixou passar: o fácil às vezes também não vê
  if (s.fase === 'colocar' && s.perdido && (nivel !== 'facil' || semente() < 0.6)) return { anunciar: true };
  if (s.fase === 'escolher' && s.aberto) return { anunciar: true };

  const b: Busca = {
    board: Int8Array.from(s.board.map((p) => (p === null ? -1 : p))),
    linhas: alinhamentos(s.quadrados),
    porCasa: Array.from({ length: 16 }, (_, i) => alinhamentosDaCasa(i, s.quadrados)),
    caracs: s.caracs ?? TODAS,
    ate: 0,
    nos: 0,
  };
  const livresLista = pecasLivres(s);
  let livres = 0;
  for (const q of livresLista) livres |= 1 << q;
  const vazias = s.board.flatMap((p, i) => (p === null ? [i] : []));

  // os lances possíveis: na fase “colocar”, casa × peça; na “escolher”, só a peça
  const lances: LanceQuarto[] = [];
  if (s.fase === 'colocar') {
    for (const i of vazias) {
      if (livresLista.length === 0) lances.push({ casa: i });
      else for (const q of livresLista) lances.push({ casa: i, peca: q });
    }
  } else {
    // tabuleiro vazio: as 16 peças são iguais por simetria, qualquer uma serve
    if (vazias.length === 16) return { peca: livresLista[Math.floor(semente() * livresLista.length)]! };
    for (const q of livresLista) lances.push({ peca: q });
  }

  // vitória na hora: coloca e anuncia
  if (s.fase === 'colocar') {
    for (const i of vazias) {
      b.board[i] = s.dada!;
      const ok = fecha(b, i);
      b.board[i] = -1;
      if (ok) return { casa: i };
    }
  }

  /** a nota de cada lance a uma profundidade, do ponto de vista do Linu */
  const notas = (d: number): number[] =>
    lances.map((l) => {
      if (l.casa !== undefined) b.board[l.casa] = s.dada!;
      let nota: number;
      if (l.peca === undefined) nota = 0;
      else {
        const am = ameacas(b);
        nota = perigosa(l.peca, am) ? -VITORIA : -negamax(b, l.peca, livres & ~(1 << l.peca), d - 1, -Infinity, Infinity);
      }
      if (l.casa !== undefined) b.board[l.casa] = -1;
      return nota;
    });

  let melhores: number[];
  if (ms > 0) {
    // aprofundamento iterativo: fica com a última profundidade que terminou a tempo
    melhores = notas(1);
    b.ate = Date.now() + ms;
    const max = Math.min(prof, vazias.length);
    for (let d = 2; d <= max; d++) {
      try {
        melhores = notas(d);
      } catch (e) {
        if (e instanceof TempoEsgotado) break;
        throw e;
      }
      // já sabe o resultado exato: vitória ou derrota forçada
      if (melhores.every((n) => Math.abs(n) >= VITORIA)) break;
    }
  } else melhores = notas(prof);

  // ruído só no fácil: às vezes ele dá uma peça um pouco pior (mas nunca uma que perde na hora)
  let iMelhor = 0;
  let notaMelhor = -Infinity;
  melhores.forEach((n, k) => {
    const comRuido = ruido > 0 && n > -VITORIA ? n + semente() * ruido * VITORIA : n;
    if (comRuido > notaMelhor) {
      notaMelhor = comRuido;
      iMelhor = k;
    }
  });
  return lances[iMelhor]!;
}
