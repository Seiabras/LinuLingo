import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do persa do Irã (fārsi), na escrita persa (abjad derivado do árabe, com os 4 sinais a
 * mais پ‌چ‌ژ‌گ que o árabe não tem). Sem romanização por enquanto — ver o campo `incomplete` do
 * pacote. Palavras e exemplos verificados em:
 * - Wiktionary, Appendix:Persian Swadesh list ‹https://en.wiktionary.org/wiki/Appendix:Persian_Swadesh_list›
 * - Wikivoyage, Persian phrasebook ‹https://en.wikivoyage.org/wiki/Persian_phrasebook›
 * - Wiktionary (entradas individuais: شما، چیست، کجا، از، هستم، گربه، خانه، شهر، خانواده، بازار)
 * - Wikipedia, «Persian verbs» (conjugação do presente) ‹https://en.wikipedia.org/wiki/Persian_verbs›
 * Persa não tem gênero gramatical nenhum (nem em substantivo, nem em pronome): por isso nenhuma
 * linha abaixo leva o campo de gênero.
 *
 * «نه» é, no persa comum, a mesma grafia pra “não” (na) e pra “nove” (noh) — as vogais curtas não
 * se escrevem. Pra não duplicar a mesma palavra-alvo com dois sentidos diferentes, “nove” aparece
 * aqui com o sinal ُ (damma) que dicionários e livros didáticos usam pra desfazer essa ambiguidade:
 * «نُه».
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['سلام', 'oi, olá (salâm)', 'interjeição', 'Expressões', '👋', 'سلام! حالِ شما چطور است؟'],
  ['خداحافظ', 'tchau, adeus (xodâhâfez)', 'interjeição', 'Expressões', '👋', 'خیلی ممنون، خداحافظ!'],
  ['لطفاً', 'por favor (lotfan)', 'interjeição', 'Expressões', '🙏', 'یک چای، لطفاً.'],
  ['خیلی ممنون', 'muito obrigado (xeyli mamnun)', 'interjeição', 'Expressões', '🙏', 'خیلی ممنون!'],
  ['ببخشید', 'com licença, desculpe (bebakhšid)', 'interjeição', 'Expressões', '🙏', 'ببخشید، آب کجا است؟'],
  ['حالِ شما چطور است؟', 'como vai? formal (hâle šomâ chetor ast)', 'expressão', 'Expressões', '🙂', 'سلام! حالِ شما چطور است؟'],
  // ── Essenciais ──
  ['بله', 'sim (bale)', 'advérbio', 'Essenciais', '👍', 'بله، لطفاً.'],
  ['نه', 'não (na)', 'advérbio', 'Essenciais', '👎', 'نه، خیلی ممنون.'],
  ['چه', 'o que (če)', 'pronome', 'Essenciais', '❓', 'این چه است؟'],
  ['کی', 'quem (ki)', 'pronome', 'Essenciais', '❓', 'او کی است؟'],
  ['کجا', 'onde (kojâ)', 'advérbio', 'Essenciais', '❓', 'شما کجا هستید؟'],
  ['چطور', 'como (chetor)', 'advérbio', 'Essenciais', '❓', 'این چطور است؟'],
  ['از', 'de, desde (az)', 'preposição', 'Essenciais', null, 'من از برزیل هستم.'],
  // ── Pessoas ──
  ['من', 'eu (man)', 'pronome', 'Pessoas', '🙋', 'من خوب هستم.'],
  ['تو', 'tu, você — informal (to)', 'pronome', 'Pessoas', '🫵', 'تو خوب هستی؟'],
  ['او', 'ele, ela, isso — sem gênero gramatical (u)', 'pronome', 'Pessoas', '👤', 'او از ایران است.'],
  ['ما', 'nós (mâ)', 'pronome', 'Pessoas', '🙌', 'ما فارسی یاد می‌گیریم.'],
  ['شما', 'vocês; o(a) senhor(a) — formal (šomâ)', 'pronome', 'Pessoas', '🫵', 'شما چطور هستید؟'],
  ['نام', 'nome (nâm)', 'substantivo', 'Pessoas', '🏷️', 'نامِ شما چیست؟'],
  ['خانواده', 'família (xânevâde)', 'substantivo', 'Pessoas', '👪', 'خانواده‌ی من بزرگ است.'],
  ['مادر', 'mãe (mâdar)', 'substantivo', 'Pessoas', '👩', 'نامِ مادرِ من مریم است.'],
  ['پدر', 'pai (pedar)', 'substantivo', 'Pessoas', '👨', 'پدرِ من خوب است.'],
  ['برادر', 'irmão (barâdar)', 'substantivo', 'Pessoas', '🧑', 'برادرِ مریم بزرگ است.'],
  ['خواهر', 'irmã (xâhar)', 'substantivo', 'Pessoas', '👧', 'خواهرِ من کوچک است.'],
  ['شاه', 'rei (šâh)', 'substantivo', 'Pessoas', '👑', 'شاه بزرگ است.'],
  // ── Natureza ──
  ['خورشید', 'sol (xoršid)', 'substantivo', 'Natureza', '☀️', 'خورشید بزرگ است.'],
  ['ماه', 'lua; mês (mâh)', 'substantivo', 'Natureza', '🌙', 'ماه سفید است.'],
  ['ستاره', 'estrela (setâre)', 'substantivo', 'Natureza', '⭐', 'آن ستاره سفید است.'],
  // ── Animais ──
  ['سگ', 'cachorro (sag)', 'substantivo', 'Animais', '🐕', 'سگ بزرگ است.'],
  ['گربه', 'gato (gorbe)', 'substantivo', 'Animais', '🐈', 'گربه کوچک است.'],
  ['ماهی', 'peixe (mâhi)', 'substantivo', 'Animais', '🐟', 'ماهی سفید است.'],
  ['پرنده', 'pássaro (parande)', 'substantivo', 'Animais', '🐦', 'پرنده کوچک است.'],
  // ── Alimentação e Restaurantes ──
  ['آب', 'água (âb)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'این آب سرد است.'],
  ['نان', 'pão (nân)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'نان خوب است.'],
  ['چای', 'chá (chây)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'یک چای، لطفاً.'],
  ['برنج', 'arroz (berenj)', 'substantivo', 'Alimentação e Restaurantes', '🍚', 'برنج سفید است.'],
  // ── Corpo ──
  ['سر', 'cabeça (sar)', 'substantivo', 'Corpo', '🙂', 'این سر کوچک است.'],
  ['چشم', 'olho (češm)', 'substantivo', 'Corpo', '👁️', 'چشمِ من سیاه است.'],
  ['دست', 'mão (dast)', 'substantivo', 'Corpo', '✋', 'دستِ من کوچک است.'],
  ['پا', 'pé (pâ)', 'substantivo', 'Corpo', '🦶', 'پایِ او کوچک است.'],
  // ── Casa ──
  ['خانه', 'casa (xâne)', 'substantivo', 'Casa', '🏠', 'خانه‌ی من کوچک است.'],
  ['بازار', 'mercado, bazar (bâzâr)', 'substantivo', 'Casa', '🏪', 'بازار بزرگ است.'],
  // ── Números ──
  ['یک', 'um (yek)', 'numeral', 'Números', '1️⃣', 'یک چای، لطفاً.'],
  ['دو', 'dois (do)', 'numeral', 'Números', '2️⃣', 'دو سگ.'],
  ['سه', 'três (se)', 'numeral', 'Números', '3️⃣', 'سه گربه.'],
  ['چهار', 'quatro (chahâr)', 'numeral', 'Números', '4️⃣', 'چهار نان.'],
  ['پنج', 'cinco (panj)', 'numeral', 'Números', '5️⃣', 'پنج ستاره.'],
  ['شش', 'seis (šeš)', 'numeral', 'Números', '6️⃣', 'شش پرنده.'],
  ['هفت', 'sete (haft)', 'numeral', 'Números', '7️⃣', 'هفت چای.'],
  ['هشت', 'oito (hašt)', 'numeral', 'Números', '8️⃣', 'هشت ماهی.'],
  ['نُه', 'nove (noh) — com o sinal ُ pra não confundir com “نه” (não)', 'numeral', 'Números', '9️⃣', 'نُه خانه.'],
  ['ده', 'dez (dah)', 'numeral', 'Números', '🔟', 'ده بازار.'],
  // ── Verbos-chave ──
  ['بودن', 'ser, estar (man hastam, to hasti, u ast)', 'verbo', 'Verbos-chave', '🧑', 'من از برزیل هستم.'],
  ['داشتن', 'ter (man dâram)', 'verbo', 'Verbos-chave', '🤲', 'من یک برادر دارم.'],
  ['خواستن', 'querer (man mixâham)', 'verbo', 'Verbos-chave', '💭', 'من یک چای می‌خواهم.'],
  ['رفتن', 'ir (man miravam)', 'verbo', 'Verbos-chave', '🚶', 'من می‌روم.'],
  ['خوردن', 'comer (man mikhoram)', 'verbo', 'Verbos-chave', '🍽️', 'من نان می‌خورم.'],
  ['حرف زدن', 'falar (man harf mizanam)', 'verbo', 'Verbos-chave', '🗣️', 'من فارسی حرف می‌زنم.'],
  ['یاد گرفتن', 'aprender (man yâd migiram)', 'verbo', 'Verbos-chave', '📚', 'من فارسی یاد می‌گیرم.'],
  // ── Cores/Descrições ──
  ['قرمز', 'vermelho (qermez)', 'adjetivo', 'Cores/Descrições', '🔴', 'این قرمز است.'],
  ['آبی', 'azul (âbi)', 'adjetivo', 'Cores/Descrições', '🔵', 'این آبی است.'],
  ['سبز', 'verde (sabz)', 'adjetivo', 'Cores/Descrições', '🟢', 'این سبز است.'],
  ['سفید', 'branco (sefid)', 'adjetivo', 'Cores/Descrições', '⚪', 'برنج سفید است.'],
  ['سیاه', 'preto (siyâh)', 'adjetivo', 'Cores/Descrições', '⚫', 'چشمِ من سیاه است.'],
  ['بزرگ', 'grande (bozorg)', 'adjetivo', 'Cores/Descrições', '📏', 'خانه بزرگ است.'],
  ['کوچک', 'pequeno (kuček)', 'adjetivo', 'Cores/Descrições', '📏', 'گربه کوچک است.'],
  ['خوب', 'bom, bem (xub)', 'adjetivo', 'Cores/Descrições', '👌', 'این خوب است.'],
];

export const VOCAB_FA = buildVocab('fa', ROWS);
