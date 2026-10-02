import type { VocabRow } from '../types';

/**
 * Vocabulário por tema (1ª metade das categorias): mais pronomes, perguntas e palavras essenciais.
 * Fontes: Wiktionary, Appendix:Amharic_Swadesh_list (pronomes, demonstrativos, interrogativos,
 * negação, “e”), verbete “ወይም” (ou) e “አዎ” (confirmado também no Omniglot, phrases/amharic.php,
 * na resposta “አዎ፣ ትንሽ”, sim, um pouco).
 */
export const ROWS: VocabRow[] = [
  // ── Pessoas (mais pronomes) ──
  ['እኛ', 'nós', 'pronome', 'Pessoas', '🙌', 'እኛ ተማሪዎች ነን።'],
  ['እናንተ', 'vós, vocês', 'pronome', 'Pessoas', '🫵', 'እናንተ ተማሪዎች ናችሁ?'],
  ['እነርሱ', 'eles, elas', 'pronome', 'Pessoas', '👥', 'እነርሱ ተማሪዎች ናቸው።'],
  // ── Essenciais ──
  ['አዎ', 'sim', 'partícula', 'Essenciais', '👍', 'አዎ፣ እባክህ።'],
  ['አይደለም', 'não, não é', 'partícula', 'Essenciais', '👎', 'ትልቅ አይደለም።'],
  ['ማን', 'quem', 'pronome', 'Essenciais', '❓', 'ማን ነው?'],
  ['ምን', 'o quê', 'pronome', 'Essenciais', '❓', 'ስምህ ማን ነው?'],
  ['የት', 'onde', 'advérbio', 'Essenciais', '📍', 'ከየት ነህ?'],
  ['መቼ', 'quando', 'advérbio', 'Essenciais', '⏰', 'መቼ ነው?'],
  ['እንዴት', 'como', 'advérbio', 'Essenciais', '🤔', 'እንደምን አለህ?'],
  ['ይህ', 'este, esta, isto', 'pronome', 'Essenciais', '👉', 'ይህ ጥሩ ነው።'],
  ['እዚህ', 'aqui', 'advérbio', 'Essenciais', '📍', 'እዚህ ነው።'],
  ['እዚያ', 'ali, lá', 'advérbio', 'Essenciais', '📍', 'እዚያ ነው።'],
  ['እና', 'e', 'conjunção', 'Essenciais', null, 'ቡና እና ሻይ።'],
  ['ወይም', 'ou', 'conjunção', 'Essenciais', null, 'ቡና ወይም ሻይ?'],
];
