import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do inupiaque (ISO 639-1 ik; Iñupiaq, Iñupiatun), a língua inuíte do norte e do noroeste
 * do Alasca, oficial no estado desde 2014. Grafia: o alfabeto latino de Roy Ahmaogak e Eugene Nida
 * (1946), com ġ, ł, ḷ, ñ, ŋ e as vogais longas escritas dobradas (aa, ii, uu). O padrão do curso é o
 * dialeto da Encosta Norte (North Slope), o de Utqiaġvik.
 *
 * Fontes, conferidas palavra por palavra:
 *   [WIKT] Wikcionário em inglês, verbetes do inupiaque (categoria “Inupiaq lemmas”, 910 verbetes,
 *          baixada em 10/10/2026). Cada linha cita o verbete (“s.v. …”); os exemplos de frase são os
 *          dos próprios verbetes, com a tradução deles.
 *   [OMNI] Omniglot, “Useful phrases in Iñupiaq” (omniglot.com/language/phrases/inupiaq.php,
 *          consultado em 10/10/2026): cumprimentos e frases do dia a dia.
 *   [WIKI] Wikipédia em inglês, «Iñupiaq language» (consultada em 10/10/2026): a tabela que compara
 *          o vocabulário dos dialetos (a coluna “North Slope Iñupiaq”), os números de 1 a 20 e as
 *          terminações de pessoa dos verbos.
 *
 * Verbos: entram na 3ª pessoa (“niġiruq”, come), com a terminação -ruq/-tuq do [WIKI]; a raiz é a do
 * verbete do [WIKT] (“niġi-”), e a forma flexionada aparece nos exemplos dele. A tradução começa pelo
 * infinitivo, para achar a mesma imagem das outras línguas.
 */
export const ROWS: VocabRow[] = [
  // Expressões ([OMNI]; “ii”, “uvlaallautaq”: [WIKT]; “naumi”: [WIKI])
  ['Haluu', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Haluu!'],
  ['Paġlagikpiñ', 'bem-vindo(a) (a uma pessoa)', 'interjeição', 'Expressões', '🤗', 'Paġlagikpiñ!'],
  ['Qanuq itpich?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Qanuq itpich?'],
  ['Nakuuruŋa', 'estou bem', 'expressão', 'Expressões', '😊', 'Nakuuruŋa, quyanaq.'],
  ['Quyanaq', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Quyanaq!'],
  ['ii', 'sim', 'interjeição', 'Expressões', '👍', 'Ii, qainiaqtuŋa.'],
  ['naumi', 'não', 'interjeição', 'Expressões', '👎', 'Naumi.'],
  ['Uvlaallautaq', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Uvlaallautaq!'],
  ['Unnusatkun', 'boa tarde; boa noite', 'interjeição', 'Expressões', '🌇', 'Unnusatkun!'],
  ['Tautugniaqmiġikpiñ', 'tchau, até mais', 'interjeição', 'Expressões', '🚶', 'Tautugniaqmiġikpiñ!'],
  ['Uvluqatchiaq', 'tenha um bom dia', 'interjeição', 'Expressões', '🌞', 'Uvluqatchiaq!'],
  ['Kinauvin?', 'qual é o seu nome? (lit. “quem é você?”)', 'expressão', 'Expressões', '🏷️', 'Kinauvin?'],
  ['Atiġa', 'meu nome é …', 'expressão', 'Expressões', '📛', 'Atiġa Linu.'],
  ['Kaŋiqsiruŋa', 'entendo', 'expressão', 'Expressões', '💡', 'Kaŋiqsiruŋa.'],
  ['Kaŋiqsiŋitchuŋa', 'não entendo', 'expressão', 'Expressões', '🤷', 'Kaŋiqsiŋitchuŋa.'],
  ['Una qavsit?', 'quanto custa isto?', 'expressão', 'Expressões', '💰', 'Una qavsit?'],
  ['Pisaraluarnak', 'desculpe', 'interjeição', 'Expressões', '🙇', 'Pisaraluarnak!'],
  // [WIKT] s.v. “piḷḷuataq-”
  ['Piḷḷuataqtutin!', 'você foi bem! (muito bem!)', 'expressão', 'Expressões', '🏅', 'Piḷḷuataqtutin!'],
  // Essenciais: pronomes e perguntas ([WIKT] s.v. “uvaŋa”, “ilviñ”, “uvagut”, “kiña”, “nani”, “sumi”,
  // “qanuq”, “qakugu”, “suna”, “maani”, “napmun”)
  ['uvaŋa', 'eu', 'pronome', 'Pessoas', '🙋', 'Uvaŋa.'],
  ['ilviñ', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Kiña aullaġniaqpa? … Ilviñ!'],
  ['uvagut', 'nós', 'pronome', 'Pessoas', '🙌', 'Uvagut uqaqtugut.'],
  ['kiña', 'quem', 'pronome', 'Essenciais', '❓', 'Kiña aullaġniaqpa?'],
  ['nani', 'onde', 'pronome', 'Essenciais', '📍', 'Nani?'],
  ['qanuq', 'como', 'advérbio', 'Essenciais', '🤔', 'Qanuq itpich?'],
  ['qakugu', 'quando (no futuro)', 'pronome', 'Essenciais', '🕰️', 'Qakugu niksiksuġiaġniaqpich?'],
  ['suna', 'o quê, que coisa', 'pronome', 'Essenciais', '❔', 'Suna pisukpiuŋ?'],
  ['napmun', 'para onde', 'pronome', 'Essenciais', '🧭', 'Napmun aullaġniaqpich?'],
  ['maani', 'por aqui', 'advérbio', 'Essenciais', '👇', 'Maani ittuq.'],
  // Pessoas e família ([WIKT] s.v. “iñuk”, “aŋun”, “aġnaq”, “aapa”, “iġñiq”, “nuliaq”, “iglaaq”; “aanaga”
  // no exemplo de “qaqqi-”; [WIKI] tabela: “panik”, “ui”, “aġnaiyaaq”, “aŋutaiyaaq”, “ilisaurri”)
  ['iñuk', 'pessoa (no plural, iñuich)', 'substantivo', 'Pessoas', '🧑', 'Iluqatiŋ iñuich nunaaqqimuktut.'],
  ['aŋun', 'homem', 'substantivo', 'Pessoas', '👨', 'Aŋun una Iñupiaq.'],
  ['aġnaq', 'mulher', 'substantivo', 'Pessoas', '👩', 'Nakuuruq aġnaq.'],
  ['aanaga', 'minha mãe', 'substantivo', 'Pessoas', '👩‍🦳', 'Aanaga qaqqiruq tuniaksranik.'],
  ['aapa', 'pai', 'substantivo', 'Pessoas', '👨‍🦳', 'Aapa.'],
  ['iġñiq', 'filho', 'substantivo', 'Pessoas', '👦', 'Iġñiq.'],
  ['panik', 'filha', 'substantivo', 'Pessoas', '👧', 'Panik.'],
  ['nuliaq', 'esposa', 'substantivo', 'Pessoas', '👰', 'Nuliaġa iḷisaurrauruq.'],
  ['ui', 'marido', 'substantivo', 'Pessoas', '🤵', 'Ui.'],
  ['aġnaiyaaq', 'menina', 'substantivo', 'Pessoas', '🧒', 'Aġnaiyaaq.'],
  ['aŋutaiyaaq', 'menino', 'substantivo', 'Pessoas', '👶', 'Aŋutaiyaaq.'],
  ['ilisaurri', 'professor(a)', 'substantivo', 'Pessoas', '🧑‍🏫', 'Ilisaurri.'],
  ['iglaaq', 'visita, hóspede', 'substantivo', 'Pessoas', '🛎️', 'Iglaat iñugiaktut.'],
  // Natureza ([WIKT] s.v. “siqiñiq”, “uvluġiaq”, “apun”, “anuġi”, “kuuk”, “siḷa”, “uvluq”, “ukiuq”,
  // “uvlaaq”, “imiq”, “qikiqtaq”; [WIKI] tabela: “tatqiq”)
  ['siqiñiq', 'sol', 'substantivo', 'Natureza', '☀️', 'Siqiñiq nuiruq.'],
  ['tatqiq', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Tatqiq.'],
  ['uvluġiaq', 'estrela', 'substantivo', 'Natureza', '⭐', 'Uvluġiaq.'],
  ['apun', 'neve (no chão)', 'substantivo', 'Natureza', '❄️', 'Apun.'],
  ['anuġi', 'vento', 'substantivo', 'Natureza', '💨', 'Anuġi saŋŋiruq.'],
  ['kuuk', 'rio', 'substantivo', 'Natureza', '🏞️', 'Kuuk ataramik sagvaqtuq.'],
  ['siḷa', 'o tempo, o ar, lá fora', 'substantivo', 'Natureza', '🌤️', 'Siḷa uunnaġuqtuq.'],
  ['uvluq', 'dia', 'substantivo', 'Natureza', '📅', 'Uvluq.'],
  ['ukiuq', 'inverno; ano', 'substantivo', 'Natureza', '🌨️', 'Ukiuq tara naalilgitchuq qilamik.'],
  ['uvlaaq', 'manhã', 'substantivo', 'Natureza', '🌄', 'Uvlaallautaq!'],
  ['imiq', 'água (de beber)', 'substantivo', 'Natureza', '💧', 'Imiq uunaqtuq.'],
  ['qikiqtaq', 'ilha', 'substantivo', 'Natureza', '🏝️', 'Qikiqtaq aŋiruq.'],
  // Animais ([WIKT] s.v. “qimmiq”, “iqaluk”, “nanuq”, “aġviq”, “sisuaq”, “aiviq”, “akłaq”; “tuttu” e
  // “natchiq” das tabelas de tradução de “caribou” e “seal”; [WIKI] tabela: “ukpik”, “tulugaq”)
  ['qimmiq', 'cachorro', 'substantivo', 'Animais', '🐕', 'Qimmiq malikkaa.'],
  ['iqaluk', 'peixe', 'substantivo', 'Animais', '🐟', 'Iqaluit niġiruni nakuurut.'],
  ['tuttu', 'caribu (rena)', 'substantivo', 'Animais', '🦌', 'Agga tuttut.'],
  ['nanuq', 'urso-polar', 'substantivo', 'Animais', '🐻‍❄️', 'Qatiqtaaq nanuq iñuuniaġaqtuq taġiumi.'],
  ['aġviq', 'baleia-da-groenlândia (a baleia caçada em Utqiaġvik)', 'substantivo', 'Animais', '🐋', 'Aġviq aŋiłallaktuq.'],
  ['sisuaq', 'beluga', 'substantivo', 'Animais', '🐳', 'Iñuich sisuaġniaġaqtut.'],
  ['aiviq', 'morsa', 'substantivo', 'Animais', '🦭', 'Aiviq taġiumi itchuuruq.'],
  ['natchiq', 'foca', 'substantivo', 'Animais', '🦦', 'Natchiq.'],
  ['akłaq', 'urso-pardo', 'substantivo', 'Animais', '🐻', 'Akłaq aŋiruq.'],
  ['ukpik', 'coruja-das-neves', 'substantivo', 'Animais', '🦉', 'Ukpik.'],
  ['tulugaq', 'corvo', 'substantivo', 'Animais', '🐦‍⬛', 'Tulugaq.'],
  // Casa e coisas ([WIKT] s.v. “iglu”, “qayaq”, “savik”, “atigi”, “qiḷġich”, “aglaun”, “tiŋmisuun”;
  // “umiaq” no exemplo de “atuġnaq-”; [WIKI] tabela: “tupiq”, “miŋuaqtuġvik”)
  ['iglu', 'casa', 'substantivo', 'Casa', '🏠', 'Igluga Utqiaġviŋmi ittuq.'],
  ['tupiq', 'barraca (de acampamento)', 'substantivo', 'Casa', '⛺', 'Tupiq.'],
  ['qayaq', 'caiaque', 'substantivo', 'Casa', '🛶', 'Qayaq.'],
  ['umiaq', 'barco (o barco de pele das caçadas de baleia)', 'substantivo', 'Casa', '🚣', 'Umiaq atuġnaqtuq.'],
  ['savik', 'faca', 'substantivo', 'Casa', '🔪', 'Savik.'],
  ['atigi', 'parca (de vestir pela cabeça)', 'substantivo', 'Casa', '🧥', 'Atigi.'],
  ['qiḷġich', 'trenó (de cesto)', 'substantivo', 'Casa', '🛷', 'Qiḷġich.'],
  ['aglaun', 'lápis', 'substantivo', 'Casa', '✏️', 'Kia aglautaa una?'],
  ['tiŋmisuun', 'avião', 'substantivo', 'Casa', '✈️', 'Tiŋmisuun mitchuq mirviŋmun.'],
  ['miŋuaqtuġvik', 'escola', 'substantivo', 'Casa', '🏫', 'Miŋuaqtuġvik.'],
  // Comida ([WIKT] s.v. “niqi”, “maktak”, “qaqqiaq”, “aqpik”, “asriavik”, “aapu”; [WIKI] tabela:
  // “saiyu”, “kuuppiaq”, “paniqtaq”)
  ['niqi', 'comida; carne', 'substantivo', 'Comida', '🍖', 'Niqi.'],
  ['maktak', 'maktak (pele de baleia com gordura)', 'substantivo', 'Comida', '🥩', 'Maktak niġiruni nakuuruq.'],
  ['qaqqiaq', 'pão', 'substantivo', 'Comida', '🍞', 'Qaqqiaq kayumiktuq niġiruni.'],
  ['saiyu', 'chá', 'substantivo', 'Comida', '🍵', 'Saiyu imiqtuni nakuuruq.'],
  ['kuuppiaq', 'café', 'substantivo', 'Comida', '☕', 'Kuuppiaq imiqtuni nakuuruq.'],
  ['paniqtaq', 'peixe ou carne seca', 'substantivo', 'Comida', '🐠', 'Paniqtaq.'],
  ['aqpik', 'amora-branca (cloudberry)', 'substantivo', 'Comida', '🍓', 'Aqpik.'],
  ['asriavik', 'mirtilo', 'substantivo', 'Comida', '🫐', 'Asriavik piŋŋuqtuq.'],
  ['aapu', 'maçã', 'substantivo', 'Comida', '🍎', 'Aapu.'],
  // Verbos ([WIKT] s.v. “niġi-”, “savak-”, “atuq-”, “nakuu-”, “uunaq-”, “qatiq-”, “kaŋiqsi-”, “ivvaq-”,
  // “itiq-”; [WIKI] tabela: “qai-”, “pisuaq-”)
  ['niġiruq', 'comer (ele, ela come)', 'verbo', 'Verbos', '🍽️', 'Agliqiłuŋa niġiruŋa.'],
  ['savaktuq', 'trabalhar (ele, ela trabalha)', 'verbo', 'Verbos', '🛠️', 'Savaktuq qaani.'],
  ['atuqtuq', 'cantar; usar (ele, ela canta)', 'verbo', 'Verbos', '🎵', 'Atuqtuq.'],
  ['qairuq', 'vir (ele, ela vem)', 'verbo', 'Verbos', '🚶‍♂️', 'Ii, qainiaqtuŋa.'],
  ['pisuaqtuq', 'andar (ele, ela anda)', 'verbo', 'Verbos', '🥾', 'Pisuaqtuq.'],
  ['nakuuruq', 'ser bom (é bom, está bem)', 'verbo', 'Verbos', '✅', 'Nakuuruq aġnaq.'],
  ['uunaqtuq', 'estar quente', 'verbo', 'Verbos', '🔥', 'Imiq uunaqtuq.'],
  ['qatiqtuq', 'ser branco', 'verbo', 'Verbos', '🤍', 'Qugruk qatiqtuq.'],
  ['kaŋiqsiruq', 'entender (ele, ela entende)', 'verbo', 'Verbos', '🧠', 'Kaŋiqsiruq aanami uqautipmani.'],
  ['ivvaqtuq', 'tomar banho (de rio)', 'verbo', 'Verbos', '🛁', 'Ivvaqtuq kuuŋmi.'],
  ['itiqtuq', 'acordar', 'verbo', 'Verbos', '⏰', 'Itiqtuq uvlaatchiaq.'],
  // Números ([WIKI] «Iñupiaq language», Numerals; [WIKT] s.v. “atausiq”, “malġuk”, “piŋasut”,
  // “sisamat”, “tallimat”, “qulit”)
  ['atausiq', 'um', 'numeral', 'Números', '1️⃣', 'Atausiq.'],
  ['malġuk', 'dois', 'numeral', 'Números', '2️⃣', 'Malġuk iññuk paaqsaaġutiruk.'],
  ['piŋasut', 'três', 'numeral', 'Números', '3️⃣', 'Piŋasut.'],
  ['sisamat', 'quatro', 'numeral', 'Números', '4️⃣', 'Sisamat.'],
  ['tallimat', 'cinco', 'numeral', 'Números', '5️⃣', 'Tallimat.'],
  ['itchaksrat', 'seis', 'numeral', 'Números', '6️⃣', 'Itchaksrat.'],
  ['tallimat malġuk', 'sete (lit. “cinco e dois”)', 'numeral', 'Números', '7️⃣', 'Tallimat malġuk.'],
  ['qulit', 'dez', 'numeral', 'Números', '🔟', 'Qulit.'],
  ['iñuiññaq', 'vinte (lit. “a pessoa inteira”)', 'numeral', 'Números', '🧍', 'Iñuiññaq.'],
];

export const VOCAB_IK = buildVocab('ik', ROWS);
