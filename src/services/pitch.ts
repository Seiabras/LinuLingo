/** Análise de voz para o shadowing: volume, altura (pitch) e entonação do fim da frase. */

export function rms(buf: ArrayLike<number>): number {
  let s = 0;
  for (let i = 0; i < buf.length; i++) s += buf[i] * buf[i];
  return Math.sqrt(s / Math.max(1, buf.length));
}

/**
 * Frequência fundamental por autocorrelação (voz humana: 70–450 Hz).
 * Devolve null em silêncio ou som sem periodicidade clara.
 */
export function detectPitch(buf: ArrayLike<number>, sampleRate: number, minRms = 0.01): number | null {
  if (rms(buf) < minRms) return null;
  const minLag = Math.floor(sampleRate / 450);
  const maxLag = Math.min(Math.floor(sampleRate / 70), buf.length - 1);
  let best = -1;
  let bestCorr = 0;
  let norm = 0;
  for (let i = 0; i < buf.length; i++) norm += buf[i] * buf[i];
  for (let lag = minLag; lag <= maxLag; lag++) {
    let c = 0;
    for (let i = 0; i + lag < buf.length; i++) c += buf[i] * buf[i + lag];
    c /= norm;
    if (c > bestCorr) {
      bestCorr = c;
      best = lag;
    }
  }
  if (best < 0 || bestCorr < 0.5) return null;
  return sampleRate / best;
}

export type Contour = 'sobe' | 'desce' | 'plano';

/** Entonação do fim: compara a mediana do último terço com a do meio da fala. */
export function finalContour(pitches: (number | null)[]): Contour | null {
  const voiced = pitches.filter((p): p is number => p !== null);
  if (voiced.length < 6) return null;
  const median = (a: number[]) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
  const third = Math.max(2, Math.floor(voiced.length / 3));
  const middle = median(voiced.slice(third, voiced.length - third).length ? voiced.slice(third, voiced.length - third) : voiced.slice(0, third));
  const end = median(voiced.slice(-third));
  const ratio = end / middle;
  if (ratio > 1.08) return 'sobe';
  if (ratio < 0.92) return 'desce';
  return 'plano';
}

const WH = /^(ce|unde|cum|când|cand|cât|cat|câte|câți|cine|care|de ce|încotro)\b/i;

/**
 * Entonação esperada em romeno: perguntas de sim/não sobem no fim; perguntas com
 * palavra interrogativa (ce, unde, cum…) e afirmações descem.
 */
export function expectedContour(sentence: string): 'sobe' | 'desce' {
  const s = sentence.trim();
  if (!s.endsWith('?')) return 'desce';
  return WH.test(s.replace(/^[«"„¿]/, '')) ? 'desce' : 'sobe';
}

/** Estimativa de sílabas (grupos vocálicos), usada quando a voz do aparelho não informa a duração. */
export function syllables(sentence: string): number {
  return (sentence.toLowerCase().match(/[aăâeiîouy]+/g) ?? []).length;
}

/** Ritmo: 100 = mesma duração do modelo; abaixo de 100 = mais lento ou mais rápido. */
export function rhythmScore(userMs: number, modelMs: number): number {
  if (!userMs || !modelMs) return 0;
  const r = userMs / modelMs;
  return Math.max(0, Math.round(100 - Math.abs(1 - r) * 100));
}
