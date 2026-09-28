/**
 * Conferência dos textos em hauçá, amárico, iorubá, oromo e igbo (scripts/checar-*-africa.ts):
 * números por extenso (a pronúncia sai do texto), só as letras da ortografia de cada idioma e,
 * no iorubá, os pontos embaixo pré-compostos (ẹ ọ ṣ), não a barrinha antiga (e̩).
 */

// letras (sem tons) de cada ortografia
const LETTERS: Record<string, RegExp> = {
  yo: /^[abdeẹfghijklmnoọprsṣtuwy]+$/,
  ig: /^[abcdefghiịjklmnṅoọprstuụvwyz]+$/,
  ha: /^[abɓcdɗefghijkƙlmnoprstuwyƴz']+$/,
  om: /^[abcdefghijklmnopqrstuvwxyz']+$/,
};
const TONES = /[̀́̂̄̌]/g;

export function africaTextProblems(lang: string, text: string): string[] {
  const out: string[] = [];
  const t = text.normalize('NFC');
  if (lang === 'am') {
    if (!/[ሀ-፿]/.test(t)) return out;
    if (/[0-9፩-፼]/.test(t)) out.push(`«${t}»: número em algarismos (escreva por extenso)`);
    if (/[A-Za-zÀ-ÿ]/.test(t)) out.push(`«${t}»: letra latina no meio do amárico`);
    return out;
  }
  const letters = LETTERS[lang];
  if (!letters) return out;
  if (/[0-9]/.test(t)) out.push(`«${t}»: número em algarismos (escreva por extenso)`);
  if (/̩/.test(t)) out.push(`«${t}»: use o ponto embaixo (ẹ ọ ṣ ị ụ), não a barrinha (e̩)`);
  if (/[ãõçñ]/i.test(t)) out.push(`«${t}»: letra do português no meio do texto`);
  for (const w of t.toLowerCase().split(/[^\p{L}\p{M}']+/u)) {
    if (!w) continue;
    const bare = w.normalize('NFD').replace(TONES, '').normalize('NFC').replace(/’/g, "'");
    if (!letters.test(bare)) {
      out.push(`«${w}» em «${t}»: letra fora da ortografia do ${lang}`);
      break;
    }
  }
  return out;
}
