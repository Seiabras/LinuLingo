/**
 * O Linu no jogo do moinho (trilha). Usa a busca negamax com poda alfa-beta comum dos jogos
 * (`escolherLance` em `jogos-ia.ts`); tirar a peça depois de um moinho é um lance a mais do mesmo
 * jogador (`vez`). A nota é a diferença de peças (no tabuleiro e na mão), mais os moinhos fechados,
 * os “quase moinhos” (duas peças e o terceiro ponto vazio) e, na fase de andar, a mobilidade.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import {
  legalMovesFrom,
  legalPlacements,
  moinhosDe,
  movePiece,
  pecasPorJogador,
  placePiece,
  removablePieces,
  removeOpponentPiece,
  type MoinhoState,
  type PlayerId,
} from './moinho-engine';

const VITORIA = 1_000_000;

export type LanceMoinho = { tipo: 'colocar'; para: number } | { tipo: 'mover'; de: number; para: number } | { tipo: 'tirar'; alvo: number };

export const NIVEIS_MOINHO: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 60 },
  medio: { prof: 3, ruido: 0 },
  dificil: { prof: 4, ruido: 0 },
};

const outro = (p: PlayerId): PlayerId => (p === 0 ? 1 : 0);

export function lancesMoinho(s: MoinhoState): LanceMoinho[] {
  if (s.winner !== null || s.empate) return [];
  if (s.removalsPending > 0) return removablePieces(s).map((alvo) => ({ tipo: 'tirar', alvo }));
  const out: LanceMoinho[] = legalPlacements(s).map((para) => ({ tipo: 'colocar', para }));
  for (let de = 0; de < s.points.length; de++) if (s.points[de] === s.turn) for (const para of legalMovesFrom(s, de)) out.push({ tipo: 'mover', de, para });
  return out;
}

export function jogarMoinho(s: MoinhoState, l: LanceMoinho): MoinhoState {
  if (l.tipo === 'colocar') return placePiece(s, l.para);
  if (l.tipo === 'mover') return movePiece(s, l.de, l.para);
  return removeOpponentPiece(s, l.alvo);
}

function contagem(s: MoinhoState, p: PlayerId) {
  let fechados = 0;
  let quase = 0;
  for (const m of moinhosDe(s)) {
    let meus = 0;
    let vazios = 0;
    for (const i of m) {
      if (s.points[i] === p) meus++;
      else if (s.points[i] === null) vazios++;
    }
    if (meus === 3) fechados++;
    else if (meus === 2 && vazios === 1) quase++;
  }
  const noTabuleiro = s.points.filter((x) => x === p).length;
  const naMao = pecasPorJogador(s) - s.placedCount[p];
  return { pecas: noTabuleiro + naMao, fechados, quase };
}

function mobilidade(s: MoinhoState, p: PlayerId): number {
  // quem voa (3 peças) alcança qualquer ponto vazio: contar isso como mobilidade faria o Linu
  // achar ruim deixar o outro com 3 peças, justo quando está ganhando
  if (s.points.filter((x) => x === p).length <= 3) return 0;
  const t = { ...s, turn: p, removalsPending: 0 };
  let n = 0;
  for (let de = 0; de < s.points.length; de++) if (s.points[de] === p) n += legalMovesFrom(t, de).length;
  return n;
}

export function avaliarMoinho(s: MoinhoState): number {
  const eu = s.turn;
  const ele = outro(eu);
  const a = contagem(s, eu);
  const b = contagem(s, ele);
  // a peça que o jogador da vez ainda vai tirar já conta, mas menos que uma já tirada: senão, no fim
  // da busca, “fechar o moinho agora” e “fechar no lance seguinte” valem o mesmo, e o Linu adia
  let nota = (a.pecas - b.pecas) * 100 + s.removalsPending * 70 + (a.fechados - b.fechados) * 25 + (a.quase - b.quase) * 15;
  if (s.phase === 'movendo') nota += (mobilidade(s, eu) - mobilidade(s, ele)) * 4;
  return nota;
}

export const BUSCA_MOINHO: JogoBusca<MoinhoState, LanceMoinho> = {
  lances: lancesMoinho,
  aplicar: jogarMoinho,
  avaliar: avaliarMoinho,
  fim: (s) => (s.empate ? 0 : s.winner === null ? null : s.winner === s.turn ? VITORIA : -VITORIA),
  vez: (s) => s.turn,
};

export function lanceMoinho(s: MoinhoState, nivel: NivelLinu, semente = Math.random): LanceMoinho | null {
  const { prof, ruido } = NIVEIS_MOINHO[nivel];
  // na colocação a árvore é larga (até 24 pontos): olha um pouco menos fundo
  const p = s.phase === 'colocando' ? Math.min(prof, 3) : prof;
  return escolherLance(s, p, BUSCA_MOINHO, ruido, semente);
}
