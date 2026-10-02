import type { VocabRow } from '../types';

/**
 * Palavras das lições da trilha (vêm primeiro no vocabulário: são as mais úteis).
 * Amárico padrão (de Addis Abeba), escrito no fidel (silabário ge’ez).
 * Fontes: Omniglot (frases de cumprimento e despedida — bäkä’amariñña.php/phrases/amharic.php),
 * Wiktionary (Appendix:Amharic_Swadesh_list para pronomes e “nome”; verbete de cada palavra para
 * ጓደኛ, እናት, አባት, ወንድም, እህት, ልጅ, ውሃ, ቡና, ሻይ, ወተት, እንጀራ, ዳቦ), Wikipedia (artigo “Amharic grammar”,
 * tabela da cópula, para “ነው”).
 */
export const ROWS: VocabRow[] = [
  // ── Unidade 1, Lição 1: cumprimentos ──
  ['ሰላም', 'oi, olá (também “paz”)', 'interjeição', 'Expressões', '👋', 'ሰላም! ደህና ነህ?'],
  ['አመሰግናለሁ', 'obrigado (lit. “eu te louvo”)', 'interjeição', 'Expressões', '🙏', 'አመሰግናለሁ!'],
  ['እባክህ', 'por favor (pedindo a um homem; fem. “እባክሽ”)', 'expressão', 'Expressões', '🙏', 'ውሃ፣ እባክህ።'],
  ['ይቅርታ', 'desculpe, com licença (lit. “perdão”)', 'interjeição', 'Expressões', '🙏', 'ይቅርታ!'],
  ['ቻው', 'tchau (informal, do italiano “ciao”)', 'interjeição', 'Expressões', '👋', 'ቻው! ደህና ሁን።'],
  ['ደህና', 'bem, são e salvo', 'advérbio', 'Expressões', '👌', 'ደህና ነኝ፣ አመሰግናለሁ።'],
  // ── Unidade 1, Lição 2: pronomes e nome ──
  ['እኔ', 'eu', 'pronome', 'Pessoas', '🙋', 'እኔ ተማሪ ነኝ።'],
  ['አንተ', 'tu, você (para homem)', 'pronome', 'Pessoas', '🫵', 'አንተ ተማሪ ነህ?', 'm'],
  ['አንቺ', 'tu, você (para mulher)', 'pronome', 'Pessoas', '🫵', 'አንቺ ተማሪ ነሽ?', 'f'],
  ['እሱ', 'ele', 'pronome', 'Pessoas', '👨', 'እሱ መምህር ነው።', 'm'],
  ['እሷ', 'ela', 'pronome', 'Pessoas', '👩', 'እሷ መምህር ናት።', 'f'],
  ['ስም', 'nome', 'substantivo', 'Pessoas', '🏷️', 'ስምህ ማን ነው?'],
  ['ነው', 'é (cópula, 3ª pessoa; fem. “ናት”)', 'verbo', 'Essenciais', '✅', 'ስሜ ሊኑ ነው።'],
  // ── Unidade 2, Lição 1: família e amigos ──
  ['እናት', 'mãe', 'substantivo', 'Pessoas', '👩', 'ይህ እናት ናት።', 'f'],
  ['አባት', 'pai', 'substantivo', 'Pessoas', '👨', 'ይህ አባት ነው።', 'm'],
  ['ወንድም', 'irmão', 'substantivo', 'Pessoas', '🧑', 'ይህ ወንድም ነው።', 'm'],
  ['እህት', 'irmã', 'substantivo', 'Pessoas', '🧑', 'ይህ እህት ናት።', 'f'],
  ['ልጅ', 'filho, filha, criança', 'substantivo', 'Pessoas', '🧒', 'ይህ ልጅ ነው።'],
  ['ጓደኛ', 'amigo, amiga', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'ይህ ጓደኛ ነው።'],
  // ── Unidade 2, Lição 2: comida e bebida ──
  ['ውሃ', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'ውሃ፣ እባክህ።'],
  ['ቡና', 'café (a bebida e o ritual etíope do café)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'ቡና ወይም ሻይ?'],
  ['ሻይ', 'chá', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'ቡና ወይም ሻይ?'],
  ['ወተት', 'leite', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'ወተት ጥሩ ነው።'],
  ['እንጀራ', 'injera (o pão fermentado e azedo, base da comida etíope)', 'substantivo', 'Alimentação e Restaurantes', '🫓', 'እንጀራ እና ዳቦ።'],
  ['ዳቦ', 'pão', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'እንጀራ እና ዳቦ።'],
];
