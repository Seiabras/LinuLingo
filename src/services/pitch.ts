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
  es: /^(qué|que|dónde|donde|cómo|como|cuándo|cuando|quién|quien|quiénes|cuál|cuál|cuánto|cuánta|cuántos|cuántas|por qué|adónde)(?![\p{L}])/iu,
  it: /^(che|cosa|che cosa|dove|come|quando|chi|quale|quali|qual|quanto|quanta|quanti|quante|perché|com’è|dov’è)(?![\p{L}])/iu,
  sv: /^(vad|var|vart|varifrån|hur|när|vem|vems|vilken|vilket|vilka|varför)(?![\p{L}])/iu,
  nb: /^(hva|hvor|hvordan|når|hvem|hvilken|hvilket|hvilke|hvorfor)(?![\p{L}])/iu,
  nn: /^(kva|kvar|korleis|når|kven|kva for|kvifor)(?![\p{L}])/iu,
  da: /^(hvad|hvor|hvordan|hvornår|hvem|hvilken|hvilket|hvilke|hvorfor)(?![\p{L}])/iu,
  is: /^(hvað|hvar|hvert|hvernig|hvenær|hver|hvaða|hvers vegna|af hverju)(?![\p{L}])/iu,
  fo: /^(hvat|hvar|hvussu|nær|hvør|hví)(?![\p{L}])/iu,
  fi: /^(mitä|mikä|missä|mistä|mihin|miten|milloin|kuka|kenen|miksi|kuinka|mikä)(?![\p{L}])/iu,
  et: /^(mis|kus|kuhu|kust|kuidas|millal|kes|kelle|miks|milline)(?![\p{L}])/iu,
  pt: /^(o que|que|onde|aonde|donde|como|quando|quem|qual|quais|quanto|quanta|quantos|quantas|porque|por que|porquê)(?![\p{L}])/iu,
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
  const bare = s.replace(/^[«"„¿¡]+/, '').replace(/\u0301/g, '');
  if (wh.test(bare)) return { contour: 'desce', tip: lang === 'ru' ? 'Pergunta com «что, где, как…»: a voz desce no fim.' : lang === 'es' ? 'Pergunta com «qué, dónde, cómo…»: a voz desce no fim.' : lang === 'it' ? 'Pergunta com «che, dove, come…»: a voz desce no fim.' : lang === 'pt' ? 'Pergunta com «onde, como, quando…»: a voz desce no fim.' : 'Pergunta com «ce, unde, cum…»: a voz desce no fim.' };
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

// ---------- Sombra sonora: a melodia do modelo × a sua ----------

/**
 * Curva de altura de um áudio inteiro (o modelo): uma medida a cada `hopMs`, null onde não há voz.
 * Mesma cadência do microfone (~20 por segundo), para as duas curvas terem a mesma resolução.
 */
export function pitchTrack(samples: ArrayLike<number>, sampleRate: number, hopMs = 50): (number | null)[] {
  let peak = 0;
  for (let i = 0; i < samples.length; i++) peak = Math.max(peak, Math.abs(samples[i]));
  if (peak === 0) return [];
  // janela de ~46 ms: cabem dois períodos da voz mais grave (70 Hz)
  const win = Math.round(sampleRate * 0.046);
  const hop = Math.max(1, Math.round((sampleRate * hopMs) / 1000));
  const minRms = peak * 0.06;
  const out: (number | null)[] = [];
  const buf = new Float32Array(win);
  for (let i = 0; i + win <= samples.length; i += hop) {
    for (let k = 0; k < win; k++) buf[k] = samples[i + k];
    out.push(detectPitch(buf, sampleRate, minRms));
  }
  return out;
}

const median = (a: number[]) => {
  const s = [...a].sort((x, y) => x - y);
  return s.length ? s[Math.floor(s.length / 2)] : 0;
};

/**
 * A forma da melodia: só o trecho com voz, em semitons em relação à mediana da própria voz (uma voz
 * grave e uma aguda ficam comparáveis), filtrada (a autocorrelação às vezes pula uma oitava) e
 * reamostrada em `n` pontos, com os buracos curtos (consoantes surdas) interpolados.
 */
export function melodyShape(track: (number | null)[], n = 40): number[] | null {
  const first = track.findIndex((p) => p !== null);
  let last = -1;
  for (let i = track.length - 1; i >= 0; i--) if (track[i] !== null) {
    last = i;
    break;
  }
  if (first < 0 || last - first < 4) return null;
  const span = track.slice(first, last + 1);
  const voiced = span.filter((p): p is number => p !== null);
  if (voiced.length < 5) return null;
  const ref = median(voiced);
  let st = span.map((p) => (p === null ? null : 12 * Math.log2(p / ref)));
  // saltos de oitava (±12 st) viram o valor mais provável; mediana móvel de 5 tira os picos soltos
  st = st.map((v) => (v === null ? null : Math.abs(v) > 9 ? v - 12 * Math.round(v / 12) : v));
  const smooth = st.map((v, i) => {
    if (v === null) return null;
    const around = st.slice(Math.max(0, i - 2), i + 3).filter((x): x is number => x !== null);
    return median(around);
  });
  // interpola os buracos
  const filled: number[] = [];
  for (let i = 0; i < smooth.length; i++) {
    const v = smooth[i];
    if (v !== null) {
      filled.push(v);
      continue;
    }
    let a = i - 1;
    while (a >= 0 && smooth[a] === null) a--;
    let b = i + 1;
    while (b < smooth.length && smooth[b] === null) b++;
    const va = a >= 0 ? smooth[a]! : smooth[b]!;
    const vb = b < smooth.length ? smooth[b]! : va;
    filled.push(va + ((vb - va) * (i - a)) / (b - a));
  }
  const out: number[] = [];
  for (let k = 0; k < n; k++) {
    const x = (k * (filled.length - 1)) / (n - 1);
    const i = Math.floor(x);
    const f = x - i;
    out.push(filled[i] + (i + 1 < filled.length ? (filled[i + 1] - filled[i]) * f : 0));
  }
  const mean = out.reduce((s, v) => s + v, 0) / out.length;
  return out.map((v) => v - mean);
}

/**
 * Quão parecida é a sua melodia com a do modelo, de 0 a 100: a diferença média entre as duas formas,
 * em semitons (0 = igual = 100; 5 semitons ou mais = 0). null se uma das duas não tiver voz suficiente.
 */
export function melodySimilarity(user: (number | null)[], model: (number | null)[]): number | null {
  const a = melodyShape(user);
  const b = melodyShape(model);
  if (!a || !b) return null;
  const diff = a.reduce((s, v, i) => s + Math.abs(v - b[i]), 0) / a.length;
  return Math.max(0, Math.round(100 * (1 - diff / 5)));
}

/** O que a melodia ensina em cada idioma (o foco da sombra sonora). */
export function melodyTip(lang: string): string {
  if (lang === 'sv' || lang === 'nb' || lang === 'nn')
    return `No ${lang === 'sv' ? 'sueco' : 'norueguês'}, a melodia da palavra muda o sentido (acento tonal 1 × 2: ${lang === 'sv' ? '«anden», o pato × «anden», o espírito' : '«bønder», os fazendeiros × «bønner», os feijões'}). Siga os picos e vales da curva azul.`;
  if (lang === 'ru') return 'No russo, a sílaba tônica é mais longa e mais alta que as outras: veja onde a curva azul sobe e suba junto.';
  if (lang === 'pt') return 'No português de Portugal as vogais átonas quase somem e a frase afirmativa desce no fim: acompanhe a curva azul.';
  return 'Acompanhe a curva azul: onde a voz do modelo sobe, suba junto; onde desce, desça.';
}
