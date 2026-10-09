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
 *
 * Leva A2.1/A2.2 (clima, roupas, corpo, cidade, profissões, sentimentos, mais verbos, números
 * 20-100): cada palavra nova conferida também no Wikcionário em inglês (en.wiktionary.org),
 * verbete por verbete; os números das dezenas (بیست…صد), no Omniglot
 * (omniglot.com/language/numbers/persian.htm) e no capítulo “Numbers 1-100” de um livro aberto de
 * persa da Michigan State University (openbooks.lib.msu.edu/persian).
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
  // ── Clima ──
  ['آب و هوا', 'tempo, clima (lit. “água e ar”; âb o havâ)', 'substantivo', 'Clima', '🌡️', 'آب و هوا امروز گرم است.'],
  ['گرم', 'quente (garm)', 'adjetivo', 'Clima', '🥵', 'چای گرم است.'],
  ['سرد', 'frio (sard)', 'adjetivo', 'Clima', '🥶', 'آب سرد است.'],
  ['باران', 'chuva (bârân)', 'substantivo', 'Clima', '🌧️', 'باران بزرگ است.'],
  ['برف', 'neve (barf)', 'substantivo', 'Clima', '❄️', 'برف سفید است.'],
  ['باد', 'vento (bâd)', 'substantivo', 'Clima', '💨', 'باد بزرگ است.'],
  // ── Roupas ──
  ['لباس', 'roupa (lebâs)', 'substantivo', 'Roupas', '👕', 'لباس من آبی است.'],
  ['پیراهن', 'camisa (pirâhan)', 'substantivo', 'Roupas', '👔', 'پیراهن قرمز است.'],
  ['کفش', 'sapato (kafš)', 'substantivo', 'Roupas', '👞', 'کفش بزرگ است.'],
  ['کلاه', 'chapéu (kolâh)', 'substantivo', 'Roupas', '🧢', 'کلاه سیاه است.'],
  // ── Corpo (mais palavras) ──
  ['دهان', 'boca (dahân)', 'substantivo', 'Corpo', '👄', 'دهانِ من کوچک است.'],
  ['بینی', 'nariz (bini)', 'substantivo', 'Corpo', '👃', 'بینیِ من کوچک است.'],
  ['گوش', 'orelha (guš)', 'substantivo', 'Corpo', '👂', 'گوشِ من کوچک است.'],
  // ── Cidade e lugares ──
  ['شهر', 'cidade (šahr)', 'substantivo', 'Cidade e lugares', '🏙️', 'این شهر بزرگ است.'],
  ['خیابان', 'rua, avenida (xiyâbân)', 'substantivo', 'Cidade e lugares', '🛣️', 'خیابان بزرگ است.'],
  ['مدرسه', 'escola (madrese)', 'substantivo', 'Cidade e lugares', '🏫', 'مدرسه بزرگ است.'],
  ['بیمارستان', 'hospital (bimârestân)', 'substantivo', 'Cidade e lugares', '🏥', 'بیمارستان بزرگ است.'],
  ['رستوران', 'restaurante (resturân)', 'substantivo', 'Cidade e lugares', '🍽️', 'رستوران خوب است.'],
  // ── Profissões ──
  ['پزشک', 'médico(a) (pezešk)', 'substantivo', 'Profissões', '🩺', 'او پزشک است.'],
  ['معلم', 'professor(a) (moʻallem)', 'substantivo', 'Profissões', '🍎', 'او معلم است.'],
  ['مهندس', 'engenheiro(a) (mohandes)', 'substantivo', 'Profissões', '👷', 'او مهندس است.'],
  ['کارگر', 'trabalhador(a), operário(a) (kârgar)', 'substantivo', 'Profissões', '👔', 'او کارگر است.'],
  // ── Sentimentos ──
  ['خوشحال', 'feliz (xošhâl)', 'adjetivo', 'Sentimentos', '😄', 'من خوشحال هستم.'],
  ['ناراحت', 'triste, chateado (nârâhat)', 'adjetivo', 'Sentimentos', '😢', 'او ناراحت است.'],
  ['خسته', 'cansado (xaste)', 'adjetivo', 'Sentimentos', '😪', 'من خسته هستم.'],
  ['عصبانی', 'com raiva, irritado (ʻasabâni)', 'adjetivo', 'Sentimentos', '😠', 'او عصبانی است.'],
  ['نگران', 'preocupado (negarân)', 'adjetivo', 'Sentimentos', '😟', 'من نگران هستم.'],
  // ── Mais verbos-chave ──
  ['نوشتن', 'escrever (man minevisam)', 'verbo', 'Verbos-chave', '✍️', 'من یک نامه می‌نویسم.'],
  ['خواندن', 'ler; cantar (man mixânam)', 'verbo', 'Verbos-chave', '📖', 'من یک کتاب می‌خوانم.'],
  ['دیدن', 'ver (man mibinam)', 'verbo', 'Verbos-chave', '👀', 'من او را می‌بینم.'],
  ['خریدن', 'comprar (man mixaram)', 'verbo', 'Verbos-chave', '🛍️', 'من نان می‌خرم.'],
  ['دادن', 'dar (man midaham)', 'verbo', 'Verbos-chave', '🤲', 'من آب می‌دهم.'],
  ['کار کردن', 'trabalhar (man kâr mikonam)', 'verbo', 'Verbos-chave', '💼', 'من کار می‌کنم.'],
  // ── Números (20-100) ──
  ['بیست', 'vinte (bist)', 'numeral', 'Números', '🔢', 'بیست کتاب.'],
  ['سی', 'trinta (si)', 'numeral', 'Números', '🔢', 'سی کتاب.'],
  ['چهل', 'quarenta (cehel)', 'numeral', 'Números', '🔢', 'چهل کتاب.'],
  ['پنجاه', 'cinquenta (panjâh)', 'numeral', 'Números', '🔢', 'پنجاه کتاب.'],
  ['شصت', 'sessenta (šast)', 'numeral', 'Números', '🔢', 'شصت کتاب.'],
  ['هفتاد', 'setenta (haftâd)', 'numeral', 'Números', '🔢', 'هفتاد کتاب.'],
  ['هشتاد', 'oitenta (haštâd)', 'numeral', 'Números', '🔢', 'هشتاد کتاب.'],
  ['نود', 'noventa (navad)', 'numeral', 'Números', '🔢', 'نود کتاب.'],
  ['صد', 'cem (sad)', 'numeral', 'Números', '🔢', 'صد کتاب.'],
];

export const VOCAB_FA = buildVocab('fa', ROWS);
