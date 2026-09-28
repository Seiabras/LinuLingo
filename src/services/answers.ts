/** Comparação de respostas faladas/digitadas, tolerante a pontuação e diacríticos. */

/**
 * Tira acentos para comparar com tolerância (ă → a, ș → s, ё → е, marca de tônica do russo).
 * O й do cirílico é outra letra (não é и com acento) e fica.
 */
export function stripDiacritics(s: string): string {
  return s
    .normalize('NFD')
    .replace(/(?<![иИ])\u0306/g, '')
    .replace(/[\u0300-\u0305\u0307-\u036f]/g, '')
    .normalize('NFC');
}

/**
 * Escritas sem espaço entre as palavras (japonês) ou com partículas grudadas (coreano): cada kana,
 * kanji e sílaba de hangul vira uma «palavra», e as comparações por frase viram comparações de
 * trecho («学生です» contém «学生»; «학교에» contém «학교»), sem depender dos espaços que o
 * reconhecimento de voz põe ou tira.
 */
export const CJK = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7a3々〆]/;
const CJK_ALL = new RegExp(CJK.source, 'g');

export function normalize(s: string, { keepDiacritics = false } = {}): string {
  const base = s
    // formas de largura cheia e meia largura (ＡＢＣ, ｶﾀｶﾅ) viram as comuns
    .normalize('NFKC')
    .toLowerCase()
    // cedilha (ş ţ) e vírgula (ș ț) são a mesma letra no romeno digitado
    .replace(/ş/g, 'ș')
    .replace(/ţ/g, 'ț')
    // a marca de tônica do russo (молоко́) nunca conta como diferença
    .replace(/\u0301/g, '')
    // apóstrofo reto, tipográfico ou ausente valem o mesmo (las’ că = las' că = las că)
    .replace(/['’`´]/g, '')
    .replace(/[.,!?¿¡;:«»"“”„()…\-。、・「」『』〜～]/g, ' ')
    .replace(CJK_ALL, ' $& ')
    .replace(/\s+/g, ' ')
    .trim();
  return keepDiacritics ? base : stripDiacritics(base);
}

export function words(s: string, opts?: { keepDiacritics?: boolean }): string[] {
  return normalize(s, opts).split(' ').filter(Boolean);
}

function containsPhrase(haystack: string[], needle: string[]): boolean {
  if (!needle.length) return false;
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (needle.every((w, j) => haystack[i + j] === w)) return true;
  }
  return false;
}

/** A resposta contém alguma das frases aceitas (palavras inteiras, sem exigir acentos)? */
export function matchesAny(answer: string, accepted: string[]): boolean {
  const a = words(answer);
  return accepted.some((exp) => containsPhrase(a, words(exp)));
}

/** Quantas palavras-chave aparecem na resposta. */
export function keywordHits(answer: string, keywords: string[]): number {
  const a = words(answer);
  return keywords.filter((k) => containsPhrase(a, words(k))).length;
}

export function levenshtein(a: string, b: string): number {
  const dp = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[b.length];
}

export type WordMark = 'ok' | 'quase' | 'faltou';

/**
 * Marca cada palavra do modelo: verde (dita exatamente), amarela (sem acento
 * ou com um erro pequeno) ou vermelha (faltou).
 */
export function markWords(model: string, said: string): { word: string; mark: WordMark }[] {
  const saidExact = words(said, { keepDiacritics: true });
  const saidLoose = saidExact.map(stripDiacritics);
  return model
    .split(/\s+/)
    // japonês e coreano: cada kana, kanji ou sílaba é marcada à parte (a pontuação fica grudada)
    .flatMap((t) => (CJK.test(t) ? (t.match(new RegExp(`${CJK.source}[^\\s]*?(?=${CJK.source}|$)|[^\\s]+?(?=${CJK.source})`, 'g')) ?? [t]) : [t]))
    .filter(Boolean)
    .map((raw) => {
      const exact = normalize(raw, { keepDiacritics: true });
      const loose = stripDiacritics(exact);
      if (!exact) return { word: raw, mark: 'ok' as const };
      if (saidExact.includes(exact)) return { word: raw, mark: 'ok' as const };
      if (saidLoose.includes(loose) || saidLoose.some((w) => w.length > 3 && levenshtein(w, loose) <= 1))
        return { word: raw, mark: 'quase' as const };
      return { word: raw, mark: 'faltou' as const };
    });
}

export function pronunciationScore(marks: { mark: WordMark }[]): number {
  if (!marks.length) return 0;
  const pts = marks.reduce((s, m) => s + (m.mark === 'ok' ? 1 : m.mark === 'quase' ? 0.6 : 0), 0);
  return Math.round((pts / marks.length) * 100);
}

/** Palavras que quebram o registro social pedido (ex.: «tu» numa entrevista). */
export function registerBreaks(answer: string, breakers: string[] = []): string[] {
  const a = words(answer);
  return breakers.filter((b) => containsPhrase(a, words(b)));
}

export function shuffle<T>(arr: T[], rnd: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
