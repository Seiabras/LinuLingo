import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do bengali (bangla) padrão, com escrita bengali (বাংলা লিপি). A pronúncia aproximada
 * vem entre parênteses na tradução, porque a escrita é nova para quem fala português. O bengali não
 * marca gênero gramatical (nem em substantivos, nem em adjetivos ou pronomes — por isso `gender` é
 * sempre `null` aqui). Idioma incompleto: por enquanto só o suficiente para o nível A1 (unidades 1 e
 * 2) — ver o campo `incomplete` do pacote. Palavras verificadas no Wiktionary em inglês
 * (en.wiktionary.org) e na Wikipédia em inglês (artigos "Bengali language", "Bengali grammar",
 * "Bengali alphabet", "Bengali numerals").
 */
export const ROWS: VocabRow[] = [
  // ── Expressões ──
  ['নমস্কার', 'oi, olá; tchau (nomoshkar)', 'interjeição', 'Expressões', '👋', 'নমস্কার! তুমি কেমন আছ?'],
  ['শুভ সকাল', 'bom dia (shubho shokal)', 'interjeição', 'Expressões', '🌅', 'শুভ সকাল, মা!'],
  ['শুভ রাত্রি', 'boa noite, ao se despedir (shubho ratri)', 'interjeição', 'Expressões', '🌙', 'শুভ রাত্রি, বন্ধু।'],
  ['বিদায়', 'tchau, até logo (biday)', 'interjeição', 'Expressões', '👋', 'বিদায়, বন্ধু!'],
  ['ধন্যবাদ', 'obrigado (dhonnobad)', 'interjeição', 'Expressões', '🙏', 'ধন্যবাদ, বন্ধু!'],
  ['দয়া করে', 'por favor (doya kore)', 'interjeição', 'Expressões', '🙏', 'এক গ্লাস পানি, দয়া করে।'],
  ['তুমি কেমন আছ', 'como vai? informal (tumi kemon ach)', 'expressão', 'Expressões', '🙂', 'নমস্কার! তুমি কেমন আছ?'],
  // ── Essenciais ──
  ['হ্যাঁ', 'sim (hyan)', 'advérbio', 'Essenciais', '👍', 'হ্যাঁ, দয়া করে।'],
  ['না', 'não (na)', 'advérbio', 'Essenciais', '👎', 'না, ধন্যবাদ।'],
  ['আর', 'e (ar)', 'conjunção', 'Essenciais', null, 'রুটি আর পনির।'],
  ['ও', 'também; e (o)', 'conjunção', 'Essenciais', null, 'তুমি ও আমি বন্ধু।'],
  ['অথবা', 'ou (othoba)', 'conjunção', 'Essenciais', null, 'চা অথবা কফি?'],
  ['খুব', 'muito (khub)', 'advérbio', 'Essenciais', null, 'চা খুব ভালো।'],
  ['কী', 'o que, que (ki)', 'pronome', 'Essenciais', '❓', 'তোমার নাম কী?'],
  ['কোথায়', 'onde (kothay)', 'advérbio', 'Essenciais', '❓', 'তুমি কোথায়?'],
  ['কেমন', 'como (kemon)', 'advérbio', 'Essenciais', '❓', 'তুমি কেমন আছ?'],
  ['থেকে', 'de, a partir de (theke — posposição: vem depois da palavra, como “ব্রাজিল থেকে”, “do Brasil”)', 'preposição', 'Essenciais', '❓', 'আমি ব্রাজিল থেকে।'],
  ['এটা', 'isto, isso (eta, informal; forma formal: এটি)', 'pronome', 'Essenciais', null, 'এটা চা।'],
  ['শহর', 'cidade (shohor)', 'substantivo', 'Essenciais', '🏙️', 'ঢাকা একটা বড় শহর।'],
  ['দেশ', 'país (desh)', 'substantivo', 'Essenciais', '🌍', 'বাংলাদেশ আমার দেশ।'],
  ['ভাষা', 'língua, idioma (bhasha)', 'substantivo', 'Essenciais', '🗣️', 'বাংলা একটা ভাষা।'],
  ['বাংলা', 'bengali, bangla (a língua e a região de Bengala) (bangla)', 'substantivo', 'Essenciais', '🇧🇩', 'আমি বাংলা শিখি।'],
  // ── Descrições ──
  ['ভালো', 'bom; bem (bhalo, invariável)', 'adjetivo', 'Descrições', '👌', 'চা খুব ভালো।'],
  ['খারাপ', 'ruim, mau (kharap, invariável)', 'adjetivo', 'Descrições', '👎', 'চা খারাপ না।'],
  ['বড়', 'grande (boro, invariável)', 'adjetivo', 'Descrições', '📏', 'আমার পরিবার বড়।'],
  ['ছোট', 'pequeno (choto, invariável)', 'adjetivo', 'Descrições', '📏', 'আমার বাড়ি ছোট।'],
  // ── Casa ──
  ['বাড়ি', 'casa (bari)', 'substantivo', 'Casa', '🏠', 'আমার বাড়ি ছোট।'],
  // ── Animais ──
  ['কুকুর', 'cachorro (kukur)', 'substantivo', 'Animais', '🐕', 'কুকুর বড়।'],
  ['বিড়াল', 'gato (biral)', 'substantivo', 'Animais', '🐈', 'বিড়াল কালো।'],
  // ── Pessoas ──
  ['আমি', 'eu (ami)', 'pronome', 'Pessoas', '🙋', 'আমি ভালো।'],
  ['তুই', 'tu, muito íntimo (tui — usado com crianças, animais de estimação ou entre amigos muitíssimo próximos; fora disso soa rude, até ofensivo)', 'pronome', 'Pessoas', '🫵', 'তুই কোথায়?'],
  ['তুমি', 'tu, você, informal (tumi)', 'pronome', 'Pessoas', '🫵', 'তুমি আমার বন্ধু।'],
  ['আপনি', 'você, o(a) senhor(a), formal (apni)', 'pronome', 'Pessoas', '🙇', 'আপনি কেমন আছেন?'],
  ['সে', 'ele, ela (she — não marca gênero: serve para ele e ela)', 'pronome', 'Pessoas', '👤', 'সে ঢাকা থেকে।'],
  ['আমরা', 'nós (amra)', 'pronome', 'Pessoas', '🙌', 'আমরা বন্ধু।'],
  ['নাম', 'nome (naam)', 'substantivo', 'Pessoas', '🏷️', 'আমার নাম মায়া।'],
  ['বন্ধু', 'amigo (bondhu)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'সে আমার বন্ধু।'],
  ['পরিবার', 'família (poribar)', 'substantivo', 'Pessoas', '👪', 'আমার পরিবার বড়।'],
  ['মা', 'mãe (ma)', 'substantivo', 'Pessoas', '👩', 'আমার মা বাড়িতে আছে।'],
  ['পিতা', 'pai, formal (pita); no dia a dia diz-se বাবা (baba)', 'substantivo', 'Pessoas', '👨', 'আমার পিতা ঢাকা থেকে।'],
  ['ভাই', 'irmão (bhai)', 'substantivo', 'Pessoas', '🧑', 'আমার একটা ভাই আছে।'],
  ['বোন', 'irmã (bon)', 'substantivo', 'Pessoas', '🧑', 'আমার একটা বোন আছে।'],
  ['ছেলে', 'filho; menino (chele)', 'substantivo', 'Pessoas', '🧒', 'তার একটা ছেলে আছে।'],
  ['মেয়ে', 'filha; menina (meye)', 'substantivo', 'Pessoas', '🧒', 'আমার মেয়ে ছোট।'],
  // ── Verbos-chave ──
  ['হওয়া', 'ser, estar (no presente, para identidade/descrição o bengali não usa verbo: আমি ভালো = eu estou bem, sem “হওয়া”)', 'verbo', 'Verbos-chave', '🧑', 'আমি ব্রাজিল থেকে।'],
  ['আছে', 'existir; (com genitivo) ter (ache — আমার … আছে = eu tenho …)', 'verbo', 'Verbos-chave', '🤲', 'আমার একটা বই আছে।'],
  ['বলা', 'falar (আমি বলি, bolি)', 'verbo', 'Verbos-chave', '🗣️', 'আমি বাংলা বলি।'],
  ['চাওয়া', 'querer (আমি চাই, chai)', 'verbo', 'Verbos-chave', '💭', 'আমি চা চাই।'],
  ['জানা', 'saber (আমি জানি, jani)', 'verbo', 'Verbos-chave', '🧠', 'আমি এটা জানি।'],
  ['যাওয়া', 'ir (আমি যাই, jai)', 'verbo', 'Verbos-chave', '🚶', 'আমি বাড়ি যাই।'],
  ['থাকা', 'morar, viver; ficar (আমি থাকি, thaki)', 'verbo', 'Verbos-chave', '🏠', 'আমি ঢাকায় থাকি।'],
  ['খাওয়া', 'comer; também “beber” com চা/পানি (আমি খাই, khai)', 'verbo', 'Verbos-chave', '🍽️', 'আমি রুটি আর পনির খাই।'],
  ['পছন্দ করা', 'gostar (de) (pochondo kora — আমার … পছন্দ, eu gosto de …)', 'verbo', 'Verbos-chave', '❤️', 'আমি চা পছন্দ করি।'],
  // ── Alimentação e Restaurantes ──
  ['পানি', 'água (pani — palavra do bengali padrão de Bangladesh; em Bengala Ocidental usa-se mais জল, jol)', 'substantivo', 'Alimentação e Restaurantes', '💧', 'এক গ্লাস পানি, দয়া করে।'],
  ['রুটি', 'pão, roti (ruti)', 'substantivo', 'Alimentação e Restaurantes', '🍞', 'রুটি আর পনির।'],
  ['দুধ', 'leite (dudh)', 'substantivo', 'Alimentação e Restaurantes', '🥛', 'দুধ সাদা।'],
  ['পনির', 'queijo, paneer (ponir)', 'substantivo', 'Alimentação e Restaurantes', '🧀', 'রুটি আর পনির।'],
  ['চা', 'chá (cha)', 'substantivo', 'Alimentação e Restaurantes', '🍵', 'চা অথবা কফি?'],
  ['কফি', 'café (kofi)', 'substantivo', 'Alimentação e Restaurantes', '☕', 'আমি কফি পছন্দ করি।'],
  // ── Números ──
  ['এক', 'um (ek)', 'numeral', 'Números', '1️⃣', 'এক গ্লাস পানি।'],
  ['দুই', 'dois (dui)', 'numeral', 'Números', '2️⃣', 'আমার দুই ভাই।'],
  ['তিন', 'três (tin)', 'numeral', 'Números', '3️⃣', 'তিন বন্ধু।'],
  ['চার', 'quatro (char)', 'numeral', 'Números', '4️⃣', 'বিড়ালের চারটা পা।'],
  ['পাঁচ', 'cinco (pãch)', 'numeral', 'Números', '5️⃣', 'পাঁচ দিন।'],
  ['ছয়', 'seis (chhoy)', 'numeral', 'Números', '6️⃣', 'ছয় ঘণ্টা।'],
  ['সাত', 'sete (shat)', 'numeral', 'Números', '7️⃣', 'সপ্তাহে সাত দিন।'],
  ['আট', 'oito (at)', 'numeral', 'Números', '8️⃣', 'আট ঘণ্টা।'],
  ['নয়', 'nove (noy)', 'numeral', 'Números', '9️⃣', 'সে নয় বছরের।'],
  ['দশ', 'dez (dosh)', 'numeral', 'Números', '🔟', 'দশ টাকা।'],
  // ── Tempo ──
  ['আজ', 'hoje (aj)', 'advérbio', 'Tempo', '📅', 'আজ সোমবার।'],
  ['কাল', 'amanhã; ontem, conforme o contexto (kal)', 'advérbio', 'Tempo', '📅', 'বিদায়, কাল!'],
  ['পরশু', 'depois de amanhã (porshu)', 'advérbio', 'Tempo', '📅', 'সে পরশু আসবে।'],
  ['রবিবার', 'domingo (robibar)', 'substantivo', 'Tempo', '📅', 'আজ রবিবার।'],
  ['সোমবার', 'segunda-feira (shombar)', 'substantivo', 'Tempo', '📅', 'আজ সোমবার।'],
  ['মঙ্গলবার', 'terça-feira (mongolbar)', 'substantivo', 'Tempo', '📅', 'কাল মঙ্গলবার।'],
  ['বুধবার', 'quarta-feira (budhbar)', 'substantivo', 'Tempo', '📅', 'আজ বুধবার।'],
  ['বৃহস্পতিবার', 'quinta-feira (brihoshpotibar)', 'substantivo', 'Tempo', '📅', 'আজ বৃহস্পতিবার।'],
  ['শুক্রবার', 'sexta-feira (shukrobar)', 'substantivo', 'Tempo', '📅', 'আজ শুক্রবার।'],
  ['শনিবার', 'sábado (shonibar)', 'substantivo', 'Tempo', '📅', 'শনিবার আমরা বাড়িতে।'],
  // ── Cores ──
  ['সাদা', 'branco (sada, invariável)', 'adjetivo', 'Cores', '⚪', 'দুধ সাদা।'],
  ['কালো', 'preto (kalo, invariável)', 'adjetivo', 'Cores', '⚫', 'বিড়াল কালো।'],
  ['লাল', 'vermelho (lal, invariável)', 'adjetivo', 'Cores', '🔴', 'আপেল লাল।'],
  ['সবুজ', 'verde (shobuj, invariável)', 'adjetivo', 'Cores', '🟢', 'ঘাস সবুজ।'],
  ['নীল', 'azul (nil, invariável)', 'adjetivo', 'Cores', '🔵', 'আকাশ নীল।'],
  ['হলুদ', 'amarelo (holud, invariável)', 'adjetivo', 'Cores', '🟡', 'সূর্য হলুদ।'],
];

export const VOCAB_BN = buildVocab('bn', ROWS);
