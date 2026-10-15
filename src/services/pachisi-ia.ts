/**
 * O Linu no pachisi. Cada lançamento é usado logo, então ele escolhe a peça por uma nota: o quanto as
 * peças das suas duas cores andaram, as que chegaram em casa, as capturas, as peças paradas em castelos
 * e o perigo de uma peça numa casa comum com inimigas logo atrás (pela chance de cada número dos
 * búzios). No difícil, a nota também conta as inimigas que ele pode capturar no próximo lançamento.
 */
import type { NivelLinu } from './jogos-prefs';
import { chanceDeMarcados } from './lotes';
import { BUZIOS, CAMINHOS, CASA, CASTELOS, NO_CHARKONI, chave, destino, jogadorDa, mover, naoMover, origensLegais, valorDosBuzios, type Cor, type Jogador, type PachisiState } from './pachisi-engine';

const VITORIA = 1_000_000;
/** a chance de cada valor dos búzios */
const CHANCE = new Map<number, number>();
for (let k = 0; k <= BUZIOS; k++) {
  const { valor } = valorDosBuzios(k);
  CHANCE.set(valor, (CHANCE.get(valor) ?? 0) + chanceDeMarcados(BUZIOS, k));
}

export const NIVEIS_PACHISI: Record<NivelLinu, { ruido: number; ataque: boolean }> = {
  facil: { ruido: 25, ataque: false },
  medio: { ruido: 0, ataque: false },
  dificil: { ruido: 0, ataque: true },
};

const coresDe = (j: Jogador): Cor[] => (j === 0 ? [0, 2] : [1, 3]);

/** O risco de cada célula: a chance de uma peça do jogador `alvo` ali ser capturada no próximo lançamento. */
function riscos(s: PachisiState, alvo: Jogador): Map<number, number> {
  const r = new Map<number, number>();
  for (const c of coresDe(alvo === 0 ? 1 : 0))
    for (const p of s.pos[c]!) {
      if (p < 0 || p >= CASA) continue;
      for (const [v, chance] of CHANCE) {
        const d = p + v;
        if (d >= CASA) continue;
        const k = chave(CAMINHOS[c]![d]!);
        r.set(k, Math.min(1, (r.get(k) ?? 0) + chance));
      }
    }
  return r;
}

export function avaliarPachisi(s: PachisiState, j: Jogador, ataque = false): number {
  if (s.winner !== null) return s.winner === j ? VITORIA : -VITORIA;
  const lado = (eu: Jogador) => {
    const perigo = riscos(s, eu);
    let nota = 0;
    for (const c of coresDe(eu))
      for (const p of s.pos[c]!) {
        if (p === NO_CHARKONI) continue;
        if (p === CASA) {
          nota += 110;
          continue;
        }
        nota += p + 8;
        const k = chave(CAMINHOS[c]![p]!);
        if (CASTELOS.has(k)) nota += 3;
        else nota -= (perigo.get(k) ?? 0) * (p + 8);
      }
    return nota;
  };
  let nota = lado(j) - lado(j === 0 ? 1 : 0);
  // no difícil: as inimigas ao alcance de uma captura minha valem um pouco
  if (ataque) {
    const meuAlcance = riscos(s, j === 0 ? 1 : 0);
    for (const c of coresDe(j === 0 ? 1 : 0))
      for (const p of s.pos[c]!) if (p >= 0 && p < CASA) nota += (meuAlcance.get(chave(CAMINHOS[c]![p]!)) ?? 0) * 6;
  }
  return nota;
}

/** A posição da peça que o Linu move, ou null para não mover. */
export function lancePachisi(s: PachisiState, nivel: NivelLinu, semente = Math.random): number | null {
  const origens = origensLegais(s);
  if (origens.length === 0) return null;
  const eu = jogadorDa(s.turn);
  const { ruido, ataque } = NIVEIS_PACHISI[nivel];
  let melhor: number | null = null;
  let notaMelhor = avaliarPachisi(naoMover(s), eu, ataque) - 1;
  for (const o of origens) {
    const f = mover(s, o);
    let nota = avaliarPachisi(f, eu, ataque) + (ruido > 0 ? semente() * ruido : 0);
    if (f.ultimo && f.ultimo.capturadas.length > 0) nota += 15;
    if (o === NO_CHARKONI && destino(s, o) !== null) nota += 6;
    if (nota > notaMelhor) {
      notaMelhor = nota;
      melhor = o;
    }
  }
  return melhor;
}
