import type { VocabRow } from '../types';

/**
 * Palavras das etimologias que não estão na trilha (empréstimos do árabe, confirmados no
 * Wiktionary: littafi, Lahadi, duniya e malami).
 */
export const ROWS: VocabRow[] = [
  ['littafi', 'livro', 'substantivo', 'Escola', '📖', 'Littafi, don Allah.', 'f'],
  ['Lahadi', 'domingo', 'substantivo', 'Tempo', '📅', 'Yau Lahadi ce.', 'f'],
  ['duniya', 'mundo', 'substantivo', 'Essenciais', '🌍', 'Wannan duniya ce.', 'f'],
  ['malami', 'professor (fem. “malama”)', 'substantivo', 'Profissões', '🧑‍🏫', 'Shi malami ne.', 'm'],
];
