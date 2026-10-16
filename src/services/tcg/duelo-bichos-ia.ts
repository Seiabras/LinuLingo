/**
 * O Linu no Duelo de Bichos, em 3 níveis. Ele não olha a mão de quem joga contra ele nem as
 * armadilhas viradas: para pensar, simula cada jogada numa cópia da mesa sem as armadilhas do outro.
 *
 * - Fácil: faz jogadas válidas ao acaso e às vezes passa a vez cedo.
 * - Médio: escolhe a jogada que mais melhora a mesa, com um pouco de distração.
 * - Difícil: a melhor jogada sempre, e procura fechar a partida quando dá.
 */
import type { Rng } from './comum';
import { aplicarD, ataqueDe, lancesD, outroD, temPalavra, vidaDe, type AcaoD, type EstadoD, type Lado } from './duelo-bichos-engine';

export type NivelD = 'facil' | 'medio' | 'dificil';

/** quanto a mesa vale para `eu` */
export function avaliarD(e: EstadoD, eu: Lado): number {
  if (e.vencedor === eu) return 10000;
  if (e.vencedor !== null) return -10000;
  const ini = outroD(eu);
  const lado = (l: Lado) =>
    e.lados[l].campo.reduce((s, x) => s + ataqueDe(x) * 1.1 + vidaDe(x) * 0.8 + (temPalavra(x, 'guarda') ? 1 : 0) + (temPalavra(x, 'voo') ? 1 : 0), 0) + e.lados[l].armadilhas.length * 1.5;
  const vida = (l: Lado) => {
    const v = e.lados[l].vida;
    // a vida vale mais quando está perto de acabar
    return v * 1.2 + (v <= 6 ? (v - 6) * 1.5 : 0);
  };
  return vida(eu) - vida(ini) + lado(eu) - lado(ini) + e.lados[eu].mao.length * 0.6;
}

const semArmadilhasDoOutro = (e: EstadoD): EstadoD => {
  const c = structuredClone(e);
  c.lados[outroD(e.vez)].armadilhas = [];
  return c;
};

export function jogadaDoLinuD(e: EstadoD, nivel: NivelD, rng: Rng): AcaoD {
  const lances = lancesD(e);
  const jogadas = lances.filter((a) => a.t !== 'passar');
  if (!jogadas.length) return { t: 'passar' };
  if (nivel === 'facil') {
    if (rng() < 0.15) return { t: 'passar' };
    return jogadas[Math.floor(rng() * jogadas.length)]!;
  }
  const eu = e.vez;
  const visto = semArmadilhasDoOutro(e);
  const agora = avaliarD(visto, eu);
  let melhor: AcaoD | null = null;
  let nota = -Infinity;
  for (const a of jogadas) {
    let v = avaliarD(aplicarD(visto, a), eu);
    if (nivel === 'medio') v += (rng() - 0.5) * 3;
    if (v > nota) {
      nota = v;
      melhor = a;
    }
  }
  // joga se melhora a mesa (gastar krill num bicho quase sempre melhora)
  return melhor && nota > agora + 0.1 ? melhor : { t: 'passar' };
}
