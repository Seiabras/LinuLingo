import type { VocabRow } from '../types';

/**
 * Palavras da etimologia (kitaaba) e vocabulário restante: pessoas, profissões, casa, sociedade,
 * descrições e animais.
 * Fontes: Glosbe om-en (kitaaba "book/bible", barsiisaa "teacher", barataa "student", mucaa "child",
 * dubartii "woman", nama "a person/man", guddaa "big", xiqqaa "small", gaarii "good/nice", bareedaa
 * "handsome", hamaa "bad/evil", saree "dog", farda "horse", loon "cow/cattle", adurree "cat", harree
 * "donkey"), Wiktionary (dhiira "man", biyya "country, nation", mana "house", re'ee "goat", hoolaa
 * "sheep", Waaqa "God, deity of Waaqeffannaa", maatii "family").
 */
export const ROWS: VocabRow[] = [
  // ── Escola ──
  ['kitaaba', 'livro', 'substantivo', 'Escola', '📖', 'Kitaaba gaarii dha.'],
  // ── Profissões ──
  ['barsiisaa', 'professor(a)', 'substantivo', 'Profissões', '🧑‍🏫', 'Inni barsiisaa dha.', 'm'],
  ['barataa', 'aluno(a), estudante', 'substantivo', 'Profissões', '🧑‍🎓', 'Isheen barataa dha.'],
  // ── Pessoas ──
  ['maatii', 'família', 'substantivo', 'Pessoas', '👪', 'Maatiin koo gaarii dha.'],
  ['nama', 'pessoa, homem', 'substantivo', 'Pessoas', '🧑', 'Nama gaarii dha.'],
  ['dhiira', 'homem', 'substantivo', 'Pessoas', '👨', 'Dhiira guddaa dha.'],
  ['dubartii', 'mulher', 'substantivo', 'Pessoas', '👩', 'Dubartii gaarii dha.', 'f'],
  ['mucaa', 'criança', 'substantivo', 'Pessoas', '🧒', 'Mucaa xiqqaa dha.'],
  // ── Casa ──
  ['mana', 'casa', 'substantivo', 'Casa', '🏠', 'Mana guddaa dha.'],
  // ── Sociedade ──
  ['biyya', 'país, nação', 'substantivo', 'Sociedade', '🌍', 'Biyya gaarii dha.'],
  ['Waaqa', 'Deus (divindade única do Waaqeffannaa, a religião tradicional oromo)', 'substantivo', 'Sociedade', '🙏', 'Waaqa guddaa dha.', 'm'],
  // ── Descrições ──
  ['guddaa', 'grande', 'adjetivo', 'Descrições', '📏', 'Mana guddaa dha.'],
  ['xiqqaa', 'pequeno', 'adjetivo', 'Descrições', '📏', 'Mucaa xiqqaa dha.'],
  ['gaarii', 'bom, legal', 'adjetivo', 'Descrições', '👍', 'Kun gaarii dha.'],
  ['bareedaa', 'bonito, lindo', 'adjetivo', 'Descrições', '✨', 'Farda bareedaa dha.'],
  ['hamaa', 'ruim, mau', 'adjetivo', 'Descrições', '👎', 'Nama hamaa dha.'],
  // ── Animais ──
  ['re’ee', 'cabra', 'substantivo', 'Animais', '🐐', 'Re’ee xiqqaa dha.'],
  ['hoolaa', 'ovelha', 'substantivo', 'Animais', '🐑', 'Hoolaa guddaa dha.'],
  ['saree', 'cachorro', 'substantivo', 'Animais', '🐕', 'Saree xiqqaa dha.'],
  ['farda', 'cavalo', 'substantivo', 'Animais', '🐴', 'Farda diimaa dha.'],
  ['loon', 'gado, vaca', 'substantivo', 'Animais', '🐄', 'Loon guddaa dha.'],
  ['adurree', 'gato', 'substantivo', 'Animais', '🐈', 'Adurree xiqqaa dha.'],
  ['harree', 'burro', 'substantivo', 'Animais', '🫏', 'Harree gaarii dha.'],
];
