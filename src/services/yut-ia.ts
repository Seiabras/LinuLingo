/**
 * O Linu no yut nori: escolhe, entre os resultados pendentes e as peças, o lance com a melhor nota —
 * quanto falta para as peças saírem (pelo caminho mais curto), as capturas, as peças juntas (que andam
 * mais rápido, mas caem juntas) e o perigo de ser capturado, pela chance de cada resultado das varetas.
 * No fácil, ele joga com um pouco de sorte na nota.
 */
import type { NivelLinu } from './jogos-prefs';
import { chanceDeMarcados } from './lotes';
import { FORA, SAIU, caminhos, falta, jogar, lancesLegais, outro, type LadoY, type LanceYut, type YutState } from './yut-engine';

const VITORIA = 1_000_000;
/** chance de cada resultado: do, gae, geol, yut (1 a 4 chatas) e mo (nenhuma) */
const CHANCE: Record<number, number> = { 1: chanceDeMarcados(4, 1), 2: chanceDeMarcados(4, 2), 3: chanceDeMarcados(4, 3), 4: chanceDeMarcados(4, 4), 5: chanceDeMarcados(4, 0) };

export const NIVEIS_YUT: Record<NivelLinu, { ruido: number }> = { facil: { ruido: 12 }, medio: { ruido: 0 }, dificil: { ruido: 0 } };

/** A chance de cada casa ser alcançada por uma peça do lado `de` no próximo lançamento. */
function alcance(s: YutState, de: LadoY): Map<number, number> {
  const r = new Map<number, number>();
  for (const m of s.mal[de]) {
    if (m.casa === SAIU) continue;
    const vistos = new Set<number>();
    for (const c of caminhos(m))
      for (let n = 1; n <= 5; n++) {
        const casa = c.passos[n - 1];
        if (casa === undefined || casa === SAIU || vistos.has(casa * 10 + n)) continue;
        vistos.add(casa * 10 + n);
        r.set(casa, Math.min(1, (r.get(casa) ?? 0) + CHANCE[n]!));
      }
  }
  return r;
}

export function avaliarYut(s: YutState, l: LadoY): number {
  if (s.winner !== null) return s.winner === l ? VITORIA : -VITORIA;
  const lado = (eu: LadoY) => {
    const perigo = alcance(s, outro(eu));
    let nota = 0;
    const porCasa = new Map<number, number>();
    for (const m of s.mal[eu]) if (m.casa !== FORA && m.casa !== SAIU) porCasa.set(m.casa, (porCasa.get(m.casa) ?? 0) + 1);
    for (const m of s.mal[eu]) {
      nota += m.casa === SAIU ? 40 : 30 - falta(m);
      if (m.casa !== FORA && m.casa !== SAIU) nota -= (perigo.get(m.casa) ?? 0) * (30 - falta(m)) * 0.8;
    }
    // peças juntas: andam mais rápido (um pouco melhor), mas o risco já conta cada uma
    for (const n of porCasa.values()) if (n > 1) nota += 2 * (n - 1);
    return nota;
  };
  return lado(l) - lado(outro(l));
}

/** O lance do Linu entre os pendentes (null se não há). */
export function lanceYut(s: YutState, nivel: NivelLinu, semente = Math.random): LanceYut | null {
  const lances = lancesLegais(s);
  if (lances.length === 0) return null;
  const eu = s.turn;
  const { ruido } = NIVEIS_YUT[nivel];
  let melhor = lances[0]!;
  let notaMelhor = -Infinity;
  for (const l of lances) {
    const f = jogar(s, l);
    let nota = avaliarYut(f, eu) + (ruido > 0 ? semente() * ruido : 0);
    if (f.ultimo?.capturou) nota += 12;
    if (nota > notaMelhor) {
      notaMelhor = nota;
      melhor = l;
    }
  }
  return melhor;
}
