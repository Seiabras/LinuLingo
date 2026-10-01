import type { VocabRow } from '../types';

/**
 * Vocabulário por tema (2ª metade das categorias): números, cores, verbos-chave e natureza.
 * Fontes: Omniglot (números 0–10), Wiktionary (fari/baƙi com a forma feminina, plural de littafi),
 * Appendix:Hausa_Swadesh_list da Wiktionary (verbos e elementos da natureza).
 */
export const ROWS: VocabRow[] = [
  // ── Números ──
  ['ɗaya', 'um', 'numeral', 'Números', '1️⃣', 'Littafi ɗaya.'],
  ['biyu', 'dois', 'numeral', 'Números', '2️⃣', 'Yara biyu.'],
  ['uku', 'três', 'numeral', 'Números', '3️⃣', 'Shayi uku.'],
  ['huɗu', 'quatro', 'numeral', 'Números', '4️⃣', 'Littattafai huɗu.'],
  ['biyar', 'cinco', 'numeral', 'Números', '5️⃣', 'Yara biyar.'],
  ['shida', 'seis', 'numeral', 'Números', '6️⃣', 'Yara shida.'],
  ['bakwai', 'sete', 'numeral', 'Números', '7️⃣', 'Yara bakwai.'],
  ['takwas', 'oito', 'numeral', 'Números', '8️⃣', 'Yara takwas.'],
  ['tara', 'nove', 'numeral', 'Números', '9️⃣', 'Yara tara.'],
  ['goma', 'dez', 'numeral', 'Números', '🔟', 'Yara goma.'],
  // ── Cores ──
  ['ja', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Mota ja.'],
  ['fari', 'branco (fem. “fara”)', 'adjetivo', 'Cores', '⚪', 'Gida fari.'],
  ['baƙi', 'preto, escuro (fem. “baƙa”)', 'adjetivo', 'Cores', '⚫', 'Mota baƙa.'],
  // ── Verbos-chave ──
  ['ci', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Ci abinci!'],
  ['sha', 'beber', 'verbo', 'Verbos-chave', '🥤', 'Sha ruwa!'],
  ['gani', 'ver', 'verbo', 'Verbos-chave', '👀', 'Na gani.'],
  ['ji', 'ouvir, sentir', 'verbo', 'Verbos-chave', '👂', 'Ban ji ba.'],
  ['zo', 'vir', 'verbo', 'Verbos-chave', '🚶', 'Zo nan!'],
  ['ba', 'dar', 'verbo', 'Verbos-chave', '🤲', 'Ba ni ruwa.'],
  ['ce', 'dizer', 'verbo', 'Verbos-chave', '🗣️', 'Ka ce?'],
  // ── Natureza ──
  ['rana', 'sol, dia', 'substantivo', 'Natureza', '☀️', 'Rana da wata.', 'f'],
  ['wata', 'lua, mês', 'substantivo', 'Natureza', '🌙', 'Wata!'],
  ['wuta', 'fogo', 'substantivo', 'Natureza', '🔥', 'Wuta!'],
  ['dutse', 'pedra', 'substantivo', 'Natureza', '🪨', 'Dutse ɗaya.'],
  ['sama', 'céu', 'substantivo', 'Natureza', '☁️', 'Sama!'],
  ['iska', 'vento, ar', 'substantivo', 'Natureza', '💨', 'Iska!'],
];
