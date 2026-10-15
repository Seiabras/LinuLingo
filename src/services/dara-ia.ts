/**
 * O Linu no dara. Usa a busca negamax com poda alfa-beta comum dos jogos (`escolherLance` em
 * `jogos-ia.ts`); a captura depois de uma linha é um lance a mais do mesmo jogador (`vez`). A nota é a
 * diferença de peças, mais as “quase linhas”: duas peças seguidas com a terceira casa vazia, que podem
 * virar linha no lance seguinte.
 */
import { escolherLance, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { COLUNAS_D, ix, jogar, lancesLegais, LINHAS_D, outroD, pecasDe, type DaraState, type JogadorD, type LanceD } from './dara-engine';

const VITORIA = 1_000_000;

export const NIVEIS_DARA: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 60 },
  medio: { prof: 3, ruido: 0 },
  dificil: { prof: 4, ruido: 0 },
};

/** As janelas de três casas seguidas (na horizontal e na vertical). */
const JANELAS: number[][] = [];
for (let r = 0; r < LINHAS_D; r++) for (let c = 0; c + 2 < COLUNAS_D; c++) JANELAS.push([ix(r, c), ix(r, c + 1), ix(r, c + 2)]);
for (let c = 0; c < COLUNAS_D; c++) for (let r = 0; r + 2 < LINHAS_D; r++) JANELAS.push([ix(r, c), ix(r + 1, c), ix(r + 2, c)]);

function quaseLinhas(s: DaraState, j: JogadorD): number {
  let n = 0;
  for (const w of JANELAS) {
    let minhas = 0;
    let vazias = 0;
    for (const i of w) {
      if (s.board[i] === j) minhas++;
      else if (s.board[i] === null) vazias++;
    }
    if (minhas === 2 && vazias === 1) n++;
  }
  return n;
}

export function avaliarDara(s: DaraState): number {
  const eu = s.turn;
  const ele = outroD(eu);
  return (pecasDe(s, eu) - pecasDe(s, ele)) * 100 + (quaseLinhas(s, eu) - quaseLinhas(s, ele)) * 12;
}

export const BUSCA_DARA: JogoBusca<DaraState, LanceD> = {
  lances: (s) => lancesLegais(s),
  aplicar: (s, l) => jogar(s, l),
  avaliar: avaliarDara,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
  vez: (s) => s.turn,
};

export function lanceDara(s: DaraState, nivel: NivelLinu, semente = Math.random): LanceD | null {
  const { prof, ruido } = NIVEIS_DARA[nivel];
  // na colocação a árvore é larga (até 30 casas) e as linhas não contam: olha menos fundo
  const p = s.fase === 'colocar' ? Math.min(prof, 2) : prof;
  return escolherLance(s, p, BUSCA_DARA, ruido, semente);
}
