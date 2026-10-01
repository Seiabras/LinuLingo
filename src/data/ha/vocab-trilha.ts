import type { VocabRow } from '../types';

/**
 * Palavras das lições da trilha (vêm primeiro no vocabulário: são as mais úteis).
 * Hauçá padrão (boko), sem marcação de tom nem de vogal longa — como a escrita comum.
 * Fontes: Omniglot (frases de cumprimento), Wiktionary (gênero e forma possuída dos substantivos),
 * Wikipedia (gênero gramatical e pronomes), Appendix:Hausa_Swadesh_list da Wiktionary (pronomes).
 */
export const ROWS: VocabRow[] = [
  // ── Unidade 1, Lição 1: cumprimentos ──
  ['sannu', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Sannu! Kana lahiya?'],
  ['sannu da zuwa', 'bem-vindo(a)', 'expressão', 'Expressões', '🤗', 'Sannu da zuwa a Kano!'],
  ['na gode', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Na gode ƙwarai!'],
  ['don Allah', 'por favor', 'expressão', 'Expressões', '🙏', 'Ruwa, don Allah!'],
  ['sai an jima', 'até logo, até mais', 'expressão', 'Expressões', '👋', 'Sai an jima, na gode!'],
  ['lafiya lau', 'tudo bem, muito bem (resposta a “como vai”)', 'expressão', 'Expressões', '👌', 'Lafiya lau, na gode!'],
  // ── Unidade 1, Lição 2: pronomes e nome ──
  ['ni', 'eu', 'pronome', 'Pessoas', '🙋', 'Ni malami ne.'],
  ['kai', 'tu, você (para homem)', 'pronome', 'Pessoas', '🫵', 'Kana lahiya?', 'm'],
  ['ke', 'tu, você (para mulher)', 'pronome', 'Pessoas', '🫵', 'Kina lahiya?', 'f'],
  ['shi', 'ele', 'pronome', 'Pessoas', '👨', 'Shi malami ne.', 'm'],
  ['ita', 'ela', 'pronome', 'Pessoas', '👩', 'Ita malama ce.', 'f'],
  ['suna', 'nome', 'substantivo', 'Pessoas', '🏷️', 'Sunana Linu.', 'm'],
  // ── Unidade 2, Lição 1: família ──
  ['uba', 'pai', 'substantivo', 'Pessoas', '👨', 'Wannan uba ne.', 'm'],
  ['uwa', 'mãe', 'substantivo', 'Pessoas', '👩', 'Wannan uwa ce.', 'f'],
  ['ɗan’uwa', 'irmão', 'substantivo', 'Pessoas', '🧑', 'Ina da ɗan’uwa.', 'm'],
  ['’yar’uwa', 'irmã', 'substantivo', 'Pessoas', '🧑', 'Ina da ’yar’uwa.', 'f'],
  ['yaro', 'menino (fem. “yarinya”)', 'substantivo', 'Pessoas', '🧒', 'Wannan yaro ne.', 'm'],
  ['yarinya', 'menina (masc. “yaro”)', 'substantivo', 'Pessoas', '🧒', 'Wannan yarinya ce.', 'f'],
  // ── Unidade 2, Lição 2: comida e bebida ──
  ['ruwa', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'Ruwa, don Allah!'],
  ['abinci', 'comida', 'substantivo', 'Alimentação e Restaurantes', '🍽️', 'Shinkafa da nama.'],
  ['shinkafa', 'arroz', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'Shinkafa da nama.', 'f'],
  ['nama', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Shinkafa da nama.', 'm'],
  ['madara', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'Ina da madara.'],
  ['shayi', 'chá', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Ruwa ko shayi?', 'm'],
];
