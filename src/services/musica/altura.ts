/**
 * A detecção da altura (a nota) de um som pelo microfone, com o algoritmo YIN (de Cheveigné e
 * Kawahara, “YIN, a fundamental frequency estimator for speech and music”, Journal of the Acoustical
 * Society of America 111(4), 2002). Recebe um pedaço do som (amostras de -1 a 1) e devolve a
 * frequência fundamental em Hz, ou null quando não há uma nota clara (silêncio, ruído).
 */
export interface Altura {
  hz: number;
  /** de 0 a 1: quanto o som parece uma nota (1 - a diferença normalizada do YIN) */
  clareza: number;
}

export function detectarAltura(amostras: Float32Array, taxa: number, { minHz = 60, maxHz = 1600, limiar = 0.15 } = {}): Altura | null {
  const n = amostras.length;
  // silêncio: o volume médio (RMS) muito baixo
  let soma = 0;
  for (let i = 0; i < n; i++) soma += amostras[i]! * amostras[i]!;
  if (Math.sqrt(soma / n) < 0.01) return null;

  const tauMin = Math.max(2, Math.floor(taxa / maxHz));
  const tauMax = Math.min(Math.floor(n / 2), Math.ceil(taxa / minHz));
  if (tauMax <= tauMin) return null;
  const janela = n - tauMax;

  // passo 2 do YIN: a função de diferença; passo 3: a média acumulada normalizada
  const d = new Float32Array(tauMax + 1);
  for (let tau = 1; tau <= tauMax; tau++) {
    let s = 0;
    for (let i = 0; i < janela; i++) {
      const dif = amostras[i]! - amostras[i + tau]!;
      s += dif * dif;
    }
    d[tau] = s;
  }
  const dn = new Float32Array(tauMax + 1);
  dn[0] = 1;
  let acumulada = 0;
  for (let tau = 1; tau <= tauMax; tau++) {
    acumulada += d[tau]!;
    dn[tau] = acumulada > 0 ? (d[tau]! * tau) / acumulada : 1;
  }

  // passo 4: o primeiro mínimo abaixo do limiar
  let tau = -1;
  for (let t = tauMin; t <= tauMax; t++) {
    if (dn[t]! < limiar) {
      while (t + 1 <= tauMax && dn[t + 1]! < dn[t]!) t++;
      tau = t;
      break;
    }
  }
  if (tau < 0) return null;

  // passo 5: interpolação parabólica em volta do mínimo, para mais precisão
  let tauFino = tau;
  if (tau > 1 && tau < tauMax) {
    const a = dn[tau - 1]!;
    const b = dn[tau]!;
    const c = dn[tau + 1]!;
    const den = a + c - 2 * b;
    if (den !== 0) tauFino = tau + (a - c) / (2 * den);
  }
  return { hz: taxa / tauFino, clareza: 1 - dn[tau]! };
}
