import type { VocabRow } from '../types';

/**
 * Vocabulário por tema (1ª metade das categorias): mais pronomes, perguntas e palavras essenciais.
 * Fontes: Appendix:Hausa_Swadesh_list (Wiktionary) para pronomes, interrogativos e demonstrativos;
 * Omniglot para “eh”/“a’a”; Wiktionary para “kyau”.
 */
export const ROWS: VocabRow[] = [
  // ── Pessoas (mais pronomes) ──
  ['mu', 'nós', 'pronome', 'Pessoas', '🙌', 'Mu malamai ne.'],
  ['ku', 'vós, vocês', 'pronome', 'Pessoas', '🫵', 'Ku malamai ne?'],
  ['su', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Su malamai ne.'],
  // ── Essenciais ──
  ['eh', 'sim', 'partícula', 'Essenciais', '👍', 'Eh, don Allah.'],
  ['a’a', 'não', 'partícula', 'Essenciais', '👎', 'A’a, na gode.'],
  ['kyau', 'bondade, beleza (base de “bom, bonito”)', 'substantivo', 'Essenciais', '✨', 'Kyau!'],
  ['da', 'e, com', 'conjunção', 'Essenciais', null, 'Nama da shinkafa.'],
  ['ko', 'ou', 'conjunção', 'Essenciais', null, 'Ruwa ko shayi?'],
  ['wa', 'quem', 'pronome', 'Essenciais', '❓', 'Wa ne shi?'],
  ['me', 'o quê', 'pronome', 'Essenciais', '❓', 'Me?'],
  ['ina', 'onde', 'advérbio', 'Essenciais', '📍', 'Ina kwana?'],
  ['yaushe', 'quando', 'advérbio', 'Essenciais', '⏰', 'Yaushe?'],
  ['yaya', 'como', 'advérbio', 'Essenciais', '🤔', 'Yaya?'],
  ['wannan', 'este, esta, isto', 'pronome', 'Essenciais', '👉', 'Wannan uba ne.'],
  ['nan', 'aqui', 'advérbio', 'Essenciais', '📍', 'Nan!'],
  ['can', 'ali, lá', 'advérbio', 'Essenciais', '📍', 'Can!'],
];
