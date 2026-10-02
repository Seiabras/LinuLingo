import type { VocabRow } from '../types';

/**
 * Vocabulário por tema (1ª metade das categorias): pronomes no plural, possessivos, perguntas,
 * demonstrativos e essenciais.
 * Fontes: Wiktionary (tabela de pronomes em "inni": nu/nuyi, isin, isaan; "koo" e "kee" como
 * possessivos de "ana" e "si"; "kun" = "este", com os exemplos "Kun gaarii dha"/"Kun kan koo dha";
 * "maal" confirmado no Glosbe om-en; "eenyu" e "meeqa" no Wiktionary/Glosbe; "sana" no Glosbe),
 * Omniglot (eeyyee, lakki, nagaa, fayyaa como respostas de cumprimento).
 */
export const ROWS: VocabRow[] = [
  // ── Pessoas (mais pronomes) ──
  ['nu', 'nós', 'pronome', 'Pessoas', '🙌', 'Nu gaarii dha.'],
  ['isin', 'vós, vocês (também forma de respeito)', 'pronome', 'Pessoas', '🫵', 'Isin gaarii dha.'],
  ['isaan', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Isaan diimoo dha.'],
  // ── Essenciais ──
  ['koo', 'meu, minha (possessivo de “ani”)', 'pronome', 'Essenciais', '👤', 'Kun kan koo dha.'],
  ['kee', 'teu, tua, seu, sua (possessivo de “ati”)', 'pronome', 'Essenciais', '👤', 'Maqaan kee eenyu?'],
  ['eeyyee', 'sim', 'partícula', 'Essenciais', '👍', 'Eeyyee, galatoomi!'],
  ['lakki', 'não', 'partícula', 'Essenciais', '👎', 'Lakki, galatoomi.'],
  ['maal', 'o quê', 'pronome', 'Essenciais', '❓', 'Kun maal dha?'],
  ['eenyu', 'quem', 'pronome', 'Essenciais', '❓', 'Kun eenyu dha?'],
  ['meeqa', 'quanto, quantos', 'advérbio', 'Essenciais', '❓', 'Kun meeqa dha?'],
  ['kun', 'este, esta, isto', 'pronome', 'Essenciais', '👉', 'Kun gaarii dha.'],
  ['sana', 'aquele, aquela, aquilo', 'pronome', 'Essenciais', '👉', 'Sana maal dha?'],
  ['nagaa', 'paz, tudo bem (resposta a “como vai”)', 'substantivo', 'Essenciais', '✨', 'Nagaa!'],
  ['fayyaa', 'saúde, tudo bem (outra resposta a “como vai”)', 'substantivo', 'Saúde', '✨', 'Fayyaa!'],
];
