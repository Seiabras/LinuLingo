import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do hindi padrão (hindustani de Deli, com escrita devanágari), a língua oficial da
 * União Indiana. A pronúncia aproximada vem entre parênteses na tradução, porque a escrita é nova
 * para quem fala português. Idioma incompleto: por enquanto só o suficiente para o nível A1
 * (unidades 1 e 2) — ver o campo `incomplete` do pacote.
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['नमस्ते', 'oi, olá; tchau (namaste)', 'interjeição', 'Expressões', '👋', 'नमस्ते! आप कैसे हैं?'],
  ['सुप्रभात', 'bom dia (suprabhāt)', 'interjeição', 'Expressões', '🌅', 'सुप्रभात, माँ!'],
  ['शुभ संध्या', 'boa tarde, ao chegar (shubh sandhyā)', 'interjeição', 'Expressões', '🌇', 'शुभ संध्या, दोस्तो!'],
  ['शुभ रात्रि', 'boa noite, ao se despedir (shubh rātri)', 'interjeição', 'Expressões', '🌙', 'शुभ रात्रि, सबको।'],
  ['अलविदा', 'tchau, até logo (alvidā)', 'interjeição', 'Expressões', '👋', 'अलविदा, कल मिलते हैं!'],
  ['धन्यवाद', 'obrigado (dhanyavād)', 'interjeição', 'Expressões', '🙏', 'बहुत धन्यवाद!'],
  ['कृपया', 'por favor (kṛpyā)', 'interjeição', 'Expressões', '🙏', 'एक गिलास पानी, कृपया।'],
  ['तुम कैसे हो', 'como vai? informal (tum kaise ho)', 'expressão', 'Expressões', '🙂', 'नमस्ते! तुम कैसे हो?'],
  // ── Essenciais ──
  ['हाँ', 'sim (hā̃)', 'advérbio', 'Essenciais', '👍', 'हाँ, कृपया।'],
  ['नहीं', 'não (nahī̃)', 'advérbio', 'Essenciais', '👎', 'नहीं, धन्यवाद।'],
  ['और', 'e (aur)', 'conjunção', 'Essenciais', null, 'रोटी और पनीर।'],
  ['या', 'ou (yā)', 'conjunção', 'Essenciais', null, 'चाय या कॉफ़ी?'],
  ['बहुत', 'muito (bahut)', 'advérbio', 'Essenciais', null, 'यह बहुत अच्छा है।'],
  ['भी', 'também (bhī)', 'advérbio', 'Essenciais', null, 'मैं भी हिंदी सीख रहा हूँ।'],
  ['क्या', 'o que, que (kyā)', 'pronome', 'Essenciais', '❓', 'यह क्या है?'],
  ['कहाँ', 'onde (kahā̃)', 'advérbio', 'Essenciais', '❓', 'तुम कहाँ रहते हो?'],
  ['कैसे', 'como (kaise)', 'advérbio', 'Essenciais', '❓', 'यह कैसे हुआ?'],
  ['कहाँ से', 'de onde (kahā̃ se)', 'advérbio', 'Essenciais', '❓', 'तुम कहाँ से हो?'],
  ['शहर', 'cidade (shahar)', 'substantivo', 'Essenciais', '🏙️', 'दिल्ली एक बड़ा शहर है।', 'm'],
  ['देश', 'país (desh)', 'substantivo', 'Essenciais', '🌍', 'भारत एक बड़ा देश है।', 'm'],
  ['भाषा', 'língua, idioma (bhāṣā)', 'substantivo', 'Essenciais', '🗣️', 'हिंदी भारत की एक भाषा है।', 'f'],
  // ── Descrições ──
  ['अच्छा', 'bom; bem (acchā, fem. acchī)', 'adjetivo', 'Descrições', '👌', 'खाना अच्छा है।'],
  ['बुरा', 'ruim, mau (burā, fem. burī)', 'adjetivo', 'Descrições', '👎', 'यह बुरा है।'],
  ['बड़ा', 'grande (baṛā, fem. baṛī)', 'adjetivo', 'Descrições', '📏', 'मेरा परिवार बड़ा है।'],
  ['छोटा', 'pequeno (choṭā, fem. choṭī)', 'adjetivo', 'Descrições', '📏', 'मेरा भाई छोटा है।'],
  // ── Casa ──
  ['घर', 'casa (ghar)', 'substantivo', 'Casa', '🏠', 'मेरा घर छोटा है।', 'm'],
  // ── Animais ──
  ['कुत्ता', 'cachorro (kuttā)', 'substantivo', 'Animais', '🐕', 'कुत्ता सो रहा है।', 'm'],
  ['बिल्ली', 'gato (billī)', 'substantivo', 'Animais', '🐈', 'बिल्ली काली है।', 'f'],
  // ── Pessoas ──
  ['मैं', 'eu (ma͠i)', 'pronome', 'Pessoas', '🙋', 'मैं विनोद हूँ।'],
  ['तू', 'tu, muito íntimo (tū — usado com crianças, com Deus ou entre amigos muito próximos; fora disso pode soar rude)', 'pronome', 'Pessoas', '🫵', 'तू कहाँ है?'],
  ['तुम', 'tu, você, informal (tum)', 'pronome', 'Pessoas', '🫵', 'तुम मेरे दोस्त हो।'],
  ['आप', 'você, o(a) senhor(a), formal (āp)', 'pronome', 'Pessoas', '🙇', 'आप कैसे हैं?'],
  ['वह', 'ele, ela, aquele, aquela (vah)', 'pronome', 'Pessoas', '👤', 'वह दिल्ली से है।'],
  ['हम', 'nós (ham)', 'pronome', 'Pessoas', '🙌', 'हम दोस्त हैं।'],
  ['नाम', 'nome (nām)', 'substantivo', 'Pessoas', '🏷️', 'मेरा नाम विनोद है।', 'm'],
  ['दोस्त', 'amigo (dost)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'वह मेरा दोस्त है।', 'm'],
  ['परिवार', 'família (parivār)', 'substantivo', 'Pessoas', '👪', 'मेरा परिवार बड़ा है।', 'm'],
  ['माँ', 'mãe (mā̃)', 'substantivo', 'Pessoas', '👩', 'मेरी माँ घर पर है।', 'f'],
  ['पिता', 'pai (pitā)', 'substantivo', 'Pessoas', '👨', 'मेरे पिता दिल्ली से हैं।', 'm'],
  ['भाई', 'irmão (bhāī)', 'substantivo', 'Pessoas', '🧑', 'मेरा एक भाई है।', 'm'],
  ['बहन', 'irmã (bahan)', 'substantivo', 'Pessoas', '🧑', 'मेरी एक बहन है।', 'f'],
  ['बेटा', 'filho (beṭā)', 'substantivo', 'Pessoas', '🧒', 'उनका बेटा दस साल का है।', 'm'],
  ['बेटी', 'filha (beṭī)', 'substantivo', 'Pessoas', '🧒', 'मेरी बेटी छोटी है।', 'f'],
  // ── Verbos-chave ──
  ['होना', 'ser, estar (मैं हूँ, तुम हो, आप हैं)', 'verbo', 'Verbos-chave', '🧑', 'मैं ब्राज़ील से हूँ।'],
  ['के पास', 'perto; (com होना) ter (ke pās — मेरे पास … है = eu tenho …)', 'preposição', 'Verbos-chave', '🤲', 'मेरे पास एक किताब है।'],
  ['बोलना', 'falar (मैं बोलता/बोलती हूँ)', 'verbo', 'Verbos-chave', '🗣️', 'मैं थोड़ी हिंदी बोलता हूँ।'],
  ['चाहना', 'querer (मैं चाहता/चाहती हूँ)', 'verbo', 'Verbos-chave', '💭', 'मैं हिंदी सीखना चाहता हूँ।'],
  ['जानना', 'saber (मैं जानता/जानती हूँ)', 'verbo', 'Verbos-chave', '🧠', 'मैं यह जानता हूँ।'],
  ['जाना', 'ir (मैं जाता/जाती हूँ)', 'verbo', 'Verbos-chave', '🚶', 'मैं घर जाता हूँ।'],
  ['रहना', 'morar, viver (मैं रहता/रहती हूँ)', 'verbo', 'Verbos-chave', '🏠', 'मैं दिल्ली में रहता हूँ।'],
  ['खाना', 'comer (मैं खाता/खाती हूँ); também “comida” como substantivo', 'verbo', 'Verbos-chave', '🍽️', 'मैं रोटी और पनीर खाता हूँ।'],
  ['पीना', 'beber (मैं पीता/पीती हूँ)', 'verbo', 'Verbos-chave', '🥤', 'मैं पानी पीता हूँ।'],
  ['पसंद होना', 'gostar (de) (pasand honā — मुझे … पसंद है = eu gosto de …)', 'verbo', 'Verbos-chave', '❤️', 'मुझे चाय पसंद है।'],
  // ── Alimentação e Restaurantes ──
  ['पानी', 'água (pānī)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'एक गिलास पानी, कृपया।', 'm'],
  ['रोटी', 'pão, chapati (roṭī)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'रोटी ताज़ी है।', 'f'],
  ['दूध', 'leite (dūdh)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'दूध सफ़ेद है।', 'm'],
  ['पनीर', 'queijo (panīr)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'पनीर स्वादिष्ट है।', 'm'],
  ['चाय', 'chá (cāy)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'चाय या कॉफ़ी?', 'f'],
  ['कॉफ़ी', 'café (kŏfī)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'मुझे कॉफ़ी पसंद है।', 'f'],
  // ── Números ──
  ['एक', 'um (ek)', 'numeral', 'Números', '1️⃣', 'एक गिलास पानी।'],
  ['दो', 'dois (do)', 'numeral', 'Números', '2️⃣', 'मेरे दो भाई हैं।'],
  ['तीन', 'três (tīn)', 'numeral', 'Números', '3️⃣', 'तीन दोस्त।'],
  ['चार', 'quatro (cār)', 'numeral', 'Números', '4️⃣', 'बिल्ली के चार पैर होते हैं।'],
  ['पांच', 'cinco (pāṅc)', 'numeral', 'Números', '5️⃣', 'पांच दिन।'],
  ['छह', 'seis (chah)', 'numeral', 'Números', '6️⃣', 'छह घंटे।'],
  ['सात', 'sete (sāt)', 'numeral', 'Números', '7️⃣', 'हफ़्ते में सात दिन होते हैं।'],
  ['आठ', 'oito (āṭh)', 'numeral', 'Números', '8️⃣', 'आठ घंटे।'],
  ['नौ', 'nove (nau)', 'numeral', 'Números', '9️⃣', 'वह नौ साल का है।'],
  ['दस', 'dez (das)', 'numeral', 'Números', '🔟', 'दस रुपये।'],
  // ── Tempo ──
  ['आज', 'hoje (āj)', 'advérbio', 'Tempo', '📅', 'आज सोमवार है।'],
  ['कल', 'amanhã; ontem, conforme o tempo verbal (kal)', 'advérbio', 'Tempo', '📅', 'अलविदा, कल मिलते हैं!'],
  ['परसों', 'depois de amanhã; antes de ontem, conforme o tempo verbal (parsõ)', 'advérbio', 'Tempo', '📅', 'वह परसों आएगा।'],
  ['सोमवार', 'segunda-feira (somvār)', 'substantivo', 'Tempo', '📅', 'आज सोमवार है।', 'm'],
  ['मंगलवार', 'terça-feira (mangalvār)', 'substantivo', 'Tempo', '📅', 'कल मंगलवार है।', 'm'],
  ['बुधवार', 'quarta-feira (budhvār)', 'substantivo', 'Tempo', '📅', 'आज बुधवार है।', 'm'],
  ['गुरुवार', 'quinta-feira (guruvār)', 'substantivo', 'Tempo', '📅', 'आज गुरुवार है।', 'm'],
  ['शुक्रवार', 'sexta-feira (shukravār)', 'substantivo', 'Tempo', '📅', 'आज शुक्रवार है।', 'm'],
  ['शनिवार', 'sábado (shanivār)', 'substantivo', 'Tempo', '📅', 'शनिवार को हम आराम करते हैं।', 'm'],
  ['रविवार', 'domingo (ravivār)', 'substantivo', 'Tempo', '📅', 'रविवार को हम परिवार के साथ हैं।', 'm'],
  // ── Cores ──
  ['सफ़ेद', 'branco (safed, invariável)', 'adjetivo', 'Cores', '⚪', 'दूध सफ़ेद है।'],
  ['काला', 'preto (kālā, fem. kālī)', 'adjetivo', 'Cores', '⚫', 'बिल्ली काली है।'],
  ['लाल', 'vermelho (lāl, invariável)', 'adjetivo', 'Cores', '🔴', 'सेब लाल है।'],
  ['हरा', 'verde (harā, fem. harī)', 'adjetivo', 'Cores', '🟢', 'घास हरी है।'],
  ['नीला', 'azul (nīlā, fem. nīlī)', 'adjetivo', 'Cores', '🔵', 'आसमान नीला है।'],
  ['पीला', 'amarelo (pīlā, fem. pīlī)', 'adjetivo', 'Cores', '🟡', 'सूरज पीला है।'],
];

export const VOCAB_HI = buildVocab('hi', ROWS);
