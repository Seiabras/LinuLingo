import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do bengali (bangla) padrão, com escrita bengali (বাংলা লিপি). A pronúncia aproximada
 * vem entre parênteses na tradução, porque a escrita é nova para quem fala português. O bengali não
 * marca gênero gramatical (nem em substantivos, nem em adjetivos ou pronomes — por isso `gender` é
 * sempre `null` aqui). Idioma incompleto: por enquanto só o suficiente para o nível A2.2 (unidades 1
 * a 4) — ver o campo `incomplete` do pacote. Palavras verificadas no Wiktionary em inglês
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
  // ── আবহাওয়া: clima (A2) ──
  ['আবহাওয়া', 'clima, tempo (aboháoa)', 'substantivo', 'Clima', '🌦️', 'আজ আবহাওয়া ভালো।'],
  ['বৃষ্টি', 'chuva (brishti, do sânscrito vṛṣṭi)', 'substantivo', 'Clima', '🌧️', 'আজ বৃষ্টি হচ্ছে।'],
  ['গরম', 'calor; quente (gorom)', 'adjetivo', 'Clima', '☀️', 'আজ খুব গরম।'],
  ['ঠান্ডা', 'frio (thanda)', 'adjetivo', 'Clima', '❄️', 'ঢাকায় শীতকালে ঠান্ডা থাকে।'],
  ['বাতাস', 'vento; ar (batash)', 'substantivo', 'Clima', '💨', 'জোরে বাতাস বইছে।'],
  ['মেঘ', 'nuvem (megh)', 'substantivo', 'Clima', '☁️', 'আকাশে মেঘ আছে।'],
  // ── কাপড় (জামা): roupas (A2) ──
  ['জামা', 'roupa, camisa (jama)', 'substantivo', 'Roupas', '👕', 'আমার জামা নতুন।'],
  ['প্যান্ট', 'calça (pyant, do inglês)', 'substantivo', 'Roupas', '👖', 'আমার প্যান্ট কালো।'],
  ['জুতো', 'sapato (juto)', 'substantivo', 'Roupas', '👟', 'আমার জুতো নতুন।'],
  ['টুপি', 'chapéu, boné (tupi)', 'substantivo', 'Roupas', '🧢', 'তার টুপি লাল।'],
  // ── শরীর: corpo (A2) ──
  ['মাথা', 'cabeça (matha)', 'substantivo', 'Corpo', '🙂', 'আমার মাথা ব্যথা করছে।'],
  ['চোখ', 'olho (chokh)', 'substantivo', 'Corpo', '👁️', 'তার চোখ বড়।'],
  ['কান', 'ouvido, orelha (kan)', 'substantivo', 'Corpo', '👂', 'আমার কানে ব্যথা।'],
  ['নাক', 'nariz (nak)', 'substantivo', 'Corpo', '👃', 'তার নাক ছোট।'],
  ['হাত', 'mão (hat)', 'substantivo', 'Corpo', '✋', 'তোমার হাত দাও।'],
  ['পা', 'pé, perna (pa)', 'substantivo', 'Corpo', '🦶', 'আমার পায়ে ব্যথা।'],
  ['মুখ', 'boca; rosto (mukh)', 'substantivo', 'Corpo', '👄', 'তোমার মুখ খোলো।'],
  // ── শহর: cidade (A2) ──
  ['বাজার', 'mercado (bajar, do persa)', 'substantivo', 'Cidade', '🏪', 'আমরা বাজারে যাচ্ছি।'],
  ['দোকান', 'loja (dokan)', 'substantivo', 'Cidade', '🏬', 'এই দোকান বড়।'],
  ['রাস্তা', 'rua, estrada (rasta)', 'substantivo', 'Cidade', '🛣️', 'এই রাস্তা লম্বা।'],
  ['হাসপাতাল', 'hospital (hashpatal)', 'substantivo', 'Cidade', '🏥', 'হাসপাতাল কাছে।'],
  ['স্কুল', 'escola (skul, do inglês)', 'substantivo', 'Cidade', '🏫', 'আমার ছেলে স্কুলে যায়।'],
  // ── পেশা: profissões (A2) ──
  ['ডাক্তার', 'médico(a) (daktar)', 'substantivo', 'Profissões', '🩺', 'সে একজন ডাক্তার।'],
  ['শিক্ষক', 'professor (shikkhok)', 'substantivo', 'Profissões', '🍎', 'আমার মা শিক্ষক।'],
  ['ইঞ্জিনিয়ার', 'engenheiro(a) (injiniar, do inglês)', 'substantivo', 'Profissões', '👷', 'আমার ভাই ইঞ্জিনিয়ার।'],
  ['কৃষক', 'agricultor(a) (krishok)', 'substantivo', 'Profissões', '🌾', 'সে একজন কৃষক।'],
  // ── অনুভূতি: sentimentos (A2) ──
  ['খুশি', 'feliz (khushi, invariável)', 'adjetivo', 'Sentimentos', '😊', 'আমি খুব খুশি।'],
  ['দুঃখিত', 'triste (dukkhito, invariável)', 'adjetivo', 'Sentimentos', '😢', 'সে আজ দুঃখিত।'],
  ['রাগ', 'raiva; bravo, irritado como adjetivo (rag)', 'substantivo', 'Sentimentos', '😠', 'আমার তার উপর রাগ হয়েছে।'],
  ['ভয়', 'medo (bhoy — আমার … ভয় লাগে, tenho medo de …)', 'substantivo', 'Sentimentos', '😨', 'আমার কুকুরের ভয় লাগে।'],
  ['ক্লান্ত', 'cansado (klanto, invariável)', 'adjetivo', 'Sentimentos', '😴', 'আমি খুব ক্লান্ত।'],
  // ── Verbos-chave (mais, A2) ──
  ['দেখা', 'ver; encontrar (আমি দেখি, dekhi)', 'verbo', 'Verbos-chave', '👀', 'আমি টিভি দেখি।'],
  ['শোনা', 'ouvir, escutar (আমি শুনি, shuni)', 'verbo', 'Verbos-chave', '👂', 'আমি গান শুনি।'],
  ['পড়া', 'ler; estudar (আমি পড়ি, pori)', 'verbo', 'Verbos-chave', '📖', 'আমি বই পড়ি।'],
  ['লেখা', 'escrever (আমি লিখি, likhi)', 'verbo', 'Verbos-chave', '✍️', 'আমি চিঠি লিখি।'],
  ['খেলা', 'jogar, brincar (আমি খেলি, kheli)', 'verbo', 'Verbos-chave', '⚽', 'বাচ্চারা খেলছে।'],
  ['কেনা', 'comprar (আমি কিনি, kini)', 'verbo', 'Verbos-chave', '🛍️', 'আমি জামা কিনছি।'],
  ['বোঝা', 'entender (আমি বুঝি, bujhi)', 'verbo', 'Verbos-chave', '🧠', 'আমি বাংলা বুঝি।'],
  // ── সংখ্যা: números (20-100) ──
  ['বিশ', 'vinte (bish)', 'numeral', 'Números', '2️⃣0️⃣', 'আমার বয়স বিশ বছর।'],
  ['ত্রিশ', 'trinta (trish)', 'numeral', 'Números', '3️⃣0️⃣', 'ত্রিশ দিনের মাস।'],
  ['চল্লিশ', 'quarenta (chollish)', 'numeral', 'Números', '4️⃣0️⃣', 'চল্লিশ টাকা।'],
  ['পঞ্চাশ', 'cinquenta (ponchash)', 'numeral', 'Números', '5️⃣0️⃣', 'এটা পঞ্চাশ টাকা।'],
  ['ষাট', 'sessenta (shat)', 'numeral', 'Números', '6️⃣0️⃣', 'ষাট মিনিটে এক ঘণ্টা।'],
  ['সত্তর', 'setenta (sottor)', 'numeral', 'Números', '7️⃣0️⃣', 'তার বয়স সত্তর বছর।'],
  ['আশি', 'oitenta (ashi)', 'numeral', 'Números', '8️⃣0️⃣', 'আশি টাকা।'],
  ['নব্বই', 'noventa (nobboi)', 'numeral', 'Números', '9️⃣0️⃣', 'নব্বই টাকা।'],
  ['একশ', 'cem (eksho)', 'numeral', 'Números', '💯', 'এক শতকে একশ বছর।'],
];

export const VOCAB_BN = buildVocab('bn', ROWS);
