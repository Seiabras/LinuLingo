import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do árabe egípcio (al-ʿāmmiyya al-maṣriyya), código ISO 639-3 «arz», na variante do
 * Cairo — a mais entendida em todo o mundo árabe. Pacote incompleto: só o nível A1 por enquanto (ver
 * `incomplete` em index.ts). Nenhuma palavra foi copiada do árabe padrão (MSA, código «ar»): cada
 * linha foi verificada numa fonte do próprio árabe egípcio.
 *
 * Fontes (consultadas em 02/10/2026):
 * - Wikipédia (inglês), «Egyptian Arabic»: https://en.wikipedia.org/wiki/Egyptian_Arabic
 *   (classificação ISO 639-3, pronomes, negação ماـ...ش, ausência de i‘rāb, amostras izzayyak/
 *   maʿlesh/khalaṣ/kefaya/yaʿni/baʾa, substrato copta)
 * - Wikipédia (inglês), «Egyptian Arabic phonology»: https://en.wikipedia.org/wiki/Egyptian_Arabic_phonology
 *   (ق > parada glotal, ج > [g], ث > ت, ذ > د)
 * - Wikcionário (inglês), Apêndice «Egyptian Arabic Swadesh list»:
 *   https://en.wiktionary.org/wiki/Appendix:Egyptian_Arabic_Swadesh_list
 *   (grande parte do vocabulário básico: pronomes, corpo, natureza, números, verbos, cores)
 * - Wikcionário (inglês), entradas individuais marcadas «Egyptian Arabic»: عايز, كويس, فين, ايوه,
 *   مش, إزاي, حاجة, بس, دلوقتي, النهارده, بكرة, عربية, عيش, مية, قهوة, معلش, وحش, راجل, ست, ايد,
 *   قطة, جمل, جبنة, شباك, شكرا, لأ, فهم — URLs em en.wiktionary.org/wiki/<palavra em árabe>
 * - Wikipédia (inglês), «Coptic calendar» e «Ful medames» (contexto cultural, não vocabulário)
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['إزيك', 'como você está (falando com um homem: izzayyak; com uma mulher: izzayyik — a escrita é igual, só a pronúncia muda)', 'expressão', 'Expressões', '👋', 'إزيك النهارده؟'],
  ['معلش', 'não tem problema, deixa pra lá; desculpa', 'interjeição', 'Expressões', '🤷', 'معلش، إنت كويس؟'],
  ['أيوه', 'sim', 'advérbio', 'Expressões', '👍', 'أيوه، أنا كويس.'],
  ['لأ', 'não', 'advérbio', 'Expressões', '👎', 'لأ، أنا مش كويس.'],
  ['شكرا', 'obrigado (no dia a dia, também se ouve “مرسي”, do francês “merci”)', 'interjeição', 'Expressões', '🙏', 'شكرا كتير!'],
  // ── Essenciais ──
  ['مش', 'não (antes de adjetivo ou nome, sem precisar de verbo)', 'partícula', 'Essenciais', '🚫', 'أنا مش مصري.'],
  ['بس', 'mas; só; chega (o sentido depende da frase)', 'conjunção', 'Essenciais', '✋', 'كويس بس مش كبير.'],
  ['فين', 'onde', 'advérbio', 'Essenciais', '❓', 'البيت فين؟'],
  ['إزاي', 'como', 'advérbio', 'Essenciais', '❓', 'القهوة إزاي؟'],
  ['إيه', 'o quê', 'pronome', 'Essenciais', '❓', 'ده إيه؟'],
  ['مين', 'quem', 'pronome', 'Essenciais', '❓', 'إنت مين؟'],
  // ── Tempo ──
  ['دلوقتي', 'agora', 'advérbio', 'Tempo', '⏰', 'إنت فين دلوقتي؟'],
  ['النهارده', 'hoje', 'advérbio', 'Tempo', '📅', 'إزيك النهارده؟'],
  ['بكرة', 'amanhã', 'advérbio', 'Tempo', '📅', 'بكرة كويس.'],
  // ── Pessoas ──
  ['أنا', 'eu', 'pronome', 'Pessoas', '🙋', 'أنا كويس.'],
  ['إنت', 'você, tu (falando com um homem)', 'pronome', 'Pessoas', '🫵', 'إنت مين؟'],
  ['إنتي', 'você, tu (falando com uma mulher)', 'pronome', 'Pessoas', '🫵', 'إنتي فين؟'],
  ['هو', 'ele', 'pronome', 'Pessoas', '👨', 'هو مصري.'],
  ['هي', 'ela', 'pronome', 'Pessoas', '👩', 'هي مصرية.'],
  ['إحنا', 'nós', 'pronome', 'Pessoas', '🙌', 'إحنا فين؟'],
  ['راجل', 'homem', 'substantivo', 'Pessoas', '🧑', 'هو راجل كويس.', 'm'],
  ['ست', 'mulher, senhora', 'substantivo', 'Pessoas', '👩', 'هي ست مصرية.', 'f'],
  ['مصري', 'egípcio, egípcia (nacionalidade; forma feminina regular: مصرية — masreyya)', 'adjetivo', 'Pessoas', '🇪🇬', 'أنا مش مصري.'],
  // ── Natureza ──
  ['شمس', 'sol', 'substantivo', 'Natureza', '☀️', 'الشمس كبيرة.', 'f'],
  ['قمر', 'lua', 'substantivo', 'Natureza', '🌙', 'القمر كبير.', 'm'],
  ['نجمة', 'estrela', 'substantivo', 'Natureza', '⭐', 'النجمة صغيرة.', 'f'],
  // ── Animais ──
  ['كلب', 'cachorro', 'substantivo', 'Animais', '🐕', 'الكلب كبير.', 'm'],
  ['قطة', 'gata, gato', 'substantivo', 'Animais', '🐈', 'القطة صغيرة.', 'f'],
  ['جمل', 'camelo (no Cairo, o ج soa como “g” de “gato”, até no árabe clássico recitado lá)', 'substantivo', 'Animais', '🐫', 'الجمل كبير.', 'm'],
  ['طير', 'pássaro', 'substantivo', 'Animais', '🐦', 'الطير صغير.', 'm'],
  // ── Alimentação e Restaurantes ──
  ['عيش', 'pão (no árabe padrão, a mesma palavra quer dizer “vida”)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'العيش كويس.', 'm'],
  ['مية', 'água', 'substantivo', 'Alimentação e Restaurantes', '💧', 'المية كويسة.', 'f'],
  ['قهوة', 'café (o ق vira uma parada na garganta: “ahwa”, não “qahwa”)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'القهوة كويسة.', 'f'],
  ['جبنة', 'queijo (pronunciado com “g”: “gebna”)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'الجبنة كويسة.', 'f'],
  ['فول', 'fava cozida — base do فول مدمس (ful medames), considerado o prato nacional do Egito', 'substantivo', 'Alimentação e Restaurantes', '🫘', 'الفول كويس.', 'm'],
  // ── Corpo ──
  ['ايد', 'mão', 'substantivo', 'Corpo', '✋', 'الايد صغيرة.', 'f'],
  ['راس', 'cabeça', 'substantivo', 'Corpo', '🙂', 'الراس كبير.', 'm'],
  ['عين', 'olho', 'substantivo', 'Corpo', '👁️', 'العين صغيرة.', 'f'],
  ['قلب', 'coração', 'substantivo', 'Corpo', '❤️', 'القلب كبير.', 'm'],
  // ── Casa ──
  ['بيت', 'casa', 'substantivo', 'Casa', '🏠', 'البيت كبير.', 'm'],
  ['باب', 'porta', 'substantivo', 'Casa', '🚪', 'الباب كبير.', 'm'],
  ['شباك', 'janela', 'substantivo', 'Casa', '🪟', 'الشباك صغير.', 'm'],
  ['طوبة', 'tijolo (do copta ⲧⲱⲃⲉ, “tijolo” — uma herança do egípcio antigo)', 'substantivo', 'Casa', '🧱', 'الطوبة كبيرة.', 'f'],
  // ── Números ──
  ['واحد', 'um', 'numeral', 'Números', '1️⃣', 'عايز واحد.'],
  ['اتنين', 'dois (no árabe padrão, اثنين)', 'numeral', 'Números', '2️⃣', 'عايز اتنين.'],
  ['تلاتة', 'três', 'numeral', 'Números', '3️⃣', 'عايزة تلاتة.'],
  ['أربعة', 'quatro', 'numeral', 'Números', '4️⃣', 'عايز أربعة.'],
  ['خمسة', 'cinco', 'numeral', 'Números', '5️⃣', 'إحنا خمسة.'],
  ['ستة', 'seis', 'numeral', 'Números', '6️⃣', 'إحنا ستة.'],
  // ── Verbos-chave ──
  ['عايز', 'querer (particípio usado como verbo: masculino عايز, feminino عايزة — ayiz/ayza)', 'verbo', 'Verbos-chave', '🤲', 'عايز مية.'],
  ['شرب', 'beber (“ele bebeu/bebe”: شرب — sherib)', 'verbo', 'Verbos-chave', '🥤', 'هو شرب مية.'],
  ['كل', 'comer (“ele comeu”: كل — kal)', 'verbo', 'Verbos-chave', '🍽️', 'هو كل عيش.'],
  ['شاف', 'ver (“ele viu”: شاف — shaf)', 'verbo', 'Verbos-chave', '👀', 'هو شاف القمر.'],
  ['عرف', 'saber (“ele soube/sabe”: عرف — eref)', 'verbo', 'Verbos-chave', '🧠', 'هو عرف.'],
  ['جه', 'vir (“ele veio”: جه — geh)', 'verbo', 'Verbos-chave', '🚶', 'هو جه.'],
  ['قال', 'dizer (“ele disse”: قال — aal)', 'verbo', 'Verbos-chave', '💬', 'هو قال أيوه.'],
  ['فهم', 'entender (com بـ no presente: إنتي بتفهمي؟ — “você entende?”, falando com uma mulher)', 'verbo', 'Verbos-chave', '💡', 'إنتي بتفهمي؟'],
  ['كتب', 'escrever (com بـ no presente: بيكتب — “ele escreve”)', 'verbo', 'Verbos-chave', '✍️', 'هو بيكتب.'],
  // ── Cores e Descrições ──
  ['كويس', 'bom, bem, legal', 'adjetivo', 'Cores e Descrições', '👍', 'هو كويس.'],
  ['وحش', 'ruim, feio (feminino: وحشة — wehsha; no árabe padrão, a mesma palavra quer dizer “fera, monstro”)', 'adjetivo', 'Cores e Descrições', '👎', 'ده مش وحش.'],
  ['كبير', 'grande', 'adjetivo', 'Cores e Descrições', '📏', 'البيت كبير.'],
  ['صغير', 'pequeno', 'adjetivo', 'Cores e Descrições', '📏', 'القطة صغيرة.'],
  ['أحمر', 'vermelho', 'adjetivo', 'Cores e Descrições', '🔴', 'القمر أحمر.'],
  ['أبيض', 'branco', 'adjetivo', 'Cores e Descrições', '⚪', 'العيش أبيض.'],
  ['أسود', 'preto', 'adjetivo', 'Cores e Descrições', '⚫', 'الكلب أسود.'],
];

export const VOCAB_ARZ = buildVocab('arz', ROWS);
