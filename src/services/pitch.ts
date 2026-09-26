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

/** Palavras interrogativas no começo da pergunta, por idioma. */
const WH: Record<string, RegExp> = {
  ro: /^(ce|unde|cum|când|cand|cât|cat|câte|câți|cine|care|de ce|încotro)\b/i,
  ru: /^(что|где|как|когда|кто|почему|зачем|куда|откуда|сколько|какой|какая|какое|какие|чей|чья|чьё|чьи)(?![\p{L}\p{M}])/iu,
};

export interface Intonation {
  /** Contorno do fim que o app confere; null = o idioma não marca a pergunta pelo fim (não é avaliado) */
  contour: 'sobe' | 'desce' | null;
  tip: string;
}

/**
 * Entonação esperada. Romeno: perguntas de sim/não sobem no fim; com palavra interrogativa
 * (ce, unde, cum…) e afirmações descem. Russo: a pergunta de sim/não tem um pico na palavra-chave
 * e cai logo depois (IK-3), então o fim não é avaliado; perguntas com что/где/как e afirmações descem.
 */
export function intonation(sentence: string, lang = 'ro'): Intonation {
  const s = sentence.trim();
  const wh = WH[lang] ?? WH.ro;
  if (!s.endsWith('?')) return { contour: 'desce', tip: 'Afirmação: a voz desce no fim.' };
  const bare = s.replace(/^[«"„¿]/, '').replace(/\u0301/g, '');
  if (wh.test(bare)) return { contour: 'desce', tip: lang === 'ru' ? 'Pergunta com «что, где, как…»: a voz desce no fim.' : 'Pergunta com «ce, unde, cum…»: a voz desce no fim.' };
  if (lang === 'ru')
    return { contour: null, tip: 'Pergunta de sim/não em russo: a voz sobe forte na sílaba tônica da palavra-chave e cai logo depois (entonação IK-3). Imite o pico do modelo.' };
  return { contour: 'sobe', tip: 'Pergunta de sim/não: a voz sobe no fim.' };
}

/** Atalho do contorno do fim (romeno por padrão). */
export function expectedContour(sentence: string, lang = 'ro'): 'sobe' | 'desce' | null {
  return intonation(sentence, lang).contour;
}

/** Grupos de vogais (latinas e cirílicas): base da estimativa de sílabas. */
export const VOWEL_GROUPS = /[aăâeiîouyáéíóúàèìòùãõêôàäöüõ]+|[аеёиоуыэюя]+/giu;

/** Estimativa de sílabas (grupos vocálicos), usada quando a voz do aparelho não informa a duração. */
export function syllables(sentence: string): number {
  return (sentence.toLowerCase().match(VOWEL_GROUPS) ?? []).length;
}

/** Ritmo: 100 = mesma duração do modelo; abaixo de 100 = mais lento ou mais rápido. */
export function rhythmScore(userMs: number, modelMs: number): number {
  if (!userMs || !modelMs) return 0;
  const r = userMs / modelMs;
  return Math.max(0, Math.round(100 - Math.abs(1 - r) * 100));
}
