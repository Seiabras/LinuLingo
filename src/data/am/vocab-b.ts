import type { VocabRow } from '../types';

/**
 * Vocabulário por tema (2ª metade das categorias): números, cores, adjetivos, verbos-chave,
 * natureza e tempo (dias da semana).
 * Fontes: Wiktionary, Appendix:Amharic_Swadesh_list (1 a 5, cores, adjetivos, verbos, natureza,
 * “dia”, “noite”, “ano”); Wiktionary, Category:Amharic_cardinal_numbers e verbetes individuais
 * (6 a 10: ስድስት, ሰባት, ስምንት, ዘጠኝ, ዐሥር); Wiktionary (ሮዝ rosa, ሰማያዊ azul, ዛሬ hoje, ነገ amanhã,
 * ትናንት ontem, ፈለገ querer, ወደደ gostar/amar — todos com classe gramatical conferida no verbete);
 * Wiktionary (dias da semana: ሰኞ, ማክሰኞ, ረቡዕ, ሐሙስ, ዓርብ, ቅዳሜ, እሑድ); Omniglot, phrases/amharic.php
 * (ብላ, “coma!”, no cumprimento “bom apetite”; ቀስ ብለህ ተናገር, “fale devagar”).
 */
export const ROWS: VocabRow[] = [
  // ── Números ──
  ['አንድ', 'um', 'numeral', 'Números', '1️⃣', 'አንድ ብር።'],
  ['ሁለት', 'dois', 'numeral', 'Números', '2️⃣', 'ሁለት ብር።'],
  ['ሶስት', 'três', 'numeral', 'Números', '3️⃣', 'ሶስት ብር።'],
  ['አራት', 'quatro', 'numeral', 'Números', '4️⃣', 'አራት ብር።'],
  ['አምስት', 'cinco', 'numeral', 'Números', '5️⃣', 'አምስት ብር።'],
  ['ስድስት', 'seis', 'numeral', 'Números', '6️⃣', 'ስድስት ብር።'],
  ['ሰባት', 'sete', 'numeral', 'Números', '7️⃣', 'ሰባት ብር።'],
  ['ስምንት', 'oito', 'numeral', 'Números', '8️⃣', 'ስምንት ብር።'],
  ['ዘጠኝ', 'nove', 'numeral', 'Números', '9️⃣', 'ዘጠኝ ብር።'],
  ['ዐሥር', 'dez', 'numeral', 'Números', '🔟', 'ዐሥር ብር።'],
  // ── Cores ──
  ['ቀይ', 'vermelho', 'adjetivo', 'Cores', '🔴', 'ይህ ቀይ ነው።'],
  ['አረንጓዴ', 'verde', 'adjetivo', 'Cores', '🟢', 'ይህ አረንጓዴ ነው።'],
  ['ቢጫ', 'amarelo', 'adjetivo', 'Cores', '🟡', 'ይህ ቢጫ ነው።'],
  ['ነጭ', 'branco', 'adjetivo', 'Cores', '⚪', 'ይህ ነጭ ነው።'],
  ['ጥቁር', 'preto, escuro', 'adjetivo', 'Cores', '⚫', 'ይህ ጥቁር ነው።'],
  ['ሰማያዊ', 'azul', 'adjetivo', 'Cores', '🔵', 'ይህ ሰማያዊ ነው።'],
  ['ሮዝ', 'rosa', 'adjetivo', 'Cores', '🌸', 'ይህ ሮዝ ነው።'],
  // ── Adjetivos ──
  ['ትልቅ', 'grande', 'adjetivo', 'Essenciais', '🐘', 'ይህ ትልቅ ነው።'],
  ['ትንሽ', 'pequeno', 'adjetivo', 'Essenciais', '🐭', 'ይህ ትንሽ ነው።'],
  ['ጥሩ', 'bom', 'adjetivo', 'Essenciais', '👍', 'ይህ ጥሩ ነው።'],
  ['መጥፎ', 'ruim', 'adjetivo', 'Essenciais', '👎', 'ይህ መጥፎ ነው።'],
  ['አዲስ', 'novo (a capital, አዲስ አበባ, é “nova flor”)', 'adjetivo', 'Essenciais', '✨', 'ይህ አዲስ ነው።'],
  ['አሮጌ', 'velho', 'adjetivo', 'Essenciais', '📿', 'ይህ አሮጌ ነው።'],
  ['ቅርብ', 'perto', 'advérbio', 'Essenciais', '📍', 'ቤት ቅርብ ነው።'],
  ['ሩቅ', 'longe', 'advérbio', 'Essenciais', '📍', 'ገበያ ሩቅ ነው።'],
  // ── Verbos-chave ──
  ['መብላት', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'ብላ!'],
  ['መጠጣት', 'beber', 'verbo', 'Verbos-chave', '🥤', 'መጠጣት ጥሩ ነው።'],
  ['ማየት', 'ver', 'verbo', 'Verbos-chave', '👀', 'ማየት ጥሩ ነው።'],
  ['መስማት', 'ouvir, sentir', 'verbo', 'Verbos-chave', '👂', 'መስማት ጥሩ ነው።'],
  ['መምጣት', 'vir', 'verbo', 'Verbos-chave', '🚶', 'መምጣት ጥሩ ነው።'],
  ['መሄድ', 'ir, andar', 'verbo', 'Verbos-chave', '🚶', 'መሄድ ጥሩ ነው።'],
  ['መስጠት', 'dar', 'verbo', 'Verbos-chave', '🤲', 'መስጠት ጥሩ ነው።'],
  ['መናገር', 'falar, dizer', 'verbo', 'Verbos-chave', '🗣️', 'ቀስ ብለህ ተናገር።'],
  ['መተኛት', 'dormir', 'verbo', 'Verbos-chave', '😴', 'መተኛት ጥሩ ነው።'],
  ['ፈለገ', 'querer, procurar (forma de dicionário, “ele quis”)', 'verbo', 'Verbos-chave', '🔍', 'ውሃ ፈለገ።'],
  ['ወደደ', 'gostar, amar (forma de dicionário, “ele gostou”)', 'verbo', 'Verbos-chave', '❤️', 'ቡና ወደደ።'],
  // ── Natureza ──
  ['ፀሐይ', 'sol', 'substantivo', 'Natureza', '☀️', 'ፀሐይ እና ጨረቃ።'],
  ['ጨረቃ', 'lua', 'substantivo', 'Natureza', '🌙', 'ፀሐይ እና ጨረቃ።'],
  ['ኮከብ', 'estrela', 'substantivo', 'Natureza', '⭐', 'ይህ ኮከብ ነው።'],
  ['ዝናብ', 'chuva', 'substantivo', 'Natureza', '🌧️', 'ዝናብ ነው።'],
  ['እሳት', 'fogo', 'substantivo', 'Natureza', '🔥', 'እሳት ነው።'],
  ['ዛፍ', 'árvore', 'substantivo', 'Natureza', '🌳', 'ይህ ዛፍ ነው።'],
  ['አበባ', 'flor', 'substantivo', 'Natureza', '🌸', 'ይህ አበባ ነው።'],
  // ── Tempo ──
  ['ቀን', 'dia', 'substantivo', 'Tempo', '📅', 'ቀን እና ሌሊት።'],
  ['ሌሊት', 'noite', 'substantivo', 'Tempo', '🌃', 'ቀን እና ሌሊት።'],
  ['ዓመት', 'ano', 'substantivo', 'Tempo', '📆', 'አዲስ ዓመት!'],
  ['ዛሬ', 'hoje', 'advérbio', 'Tempo', '📅', 'ዛሬ ደህና ነኝ።'],
  ['ነገ', 'amanhã', 'advérbio', 'Tempo', '📅', 'ነገ ደህና ነው።'],
  ['ትናንት', 'ontem', 'advérbio', 'Tempo', '📅', 'ትናንት እና ነገ።'],
  ['ሰኞ', 'segunda-feira', 'substantivo', 'Tempo', '📅', 'ዛሬ ሰኞ ነው።'],
  ['ማክሰኞ', 'terça-feira', 'substantivo', 'Tempo', '📅', 'ዛሬ ማክሰኞ ነው።'],
  ['ረቡዕ', 'quarta-feira', 'substantivo', 'Tempo', '📅', 'ዛሬ ረቡዕ ነው።'],
  ['ሐሙስ', 'quinta-feira', 'substantivo', 'Tempo', '📅', 'ዛሬ ሐሙስ ነው።'],
  ['ዓርብ', 'sexta-feira', 'substantivo', 'Tempo', '📅', 'ዛሬ ዓርብ ነው።'],
  ['ቅዳሜ', 'sábado', 'substantivo', 'Tempo', '📅', 'ዛሬ ቅዳሜ ነው።'],
  ['እሑድ', 'domingo', 'substantivo', 'Tempo', '📅', 'ዛሬ እሑድ ነው።'],
];
