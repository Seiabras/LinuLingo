import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do quéchua de Áncash (o quéchua central do norte do Peru, do ramo Quéchua I), na grafia
 * oficial do Ministério da Educação do Peru (três vogais, as longas dobradas: aa, ii, uu; ts, sh, ll,
 * ñ). O padrão do curso é o quéchua de Huaylas, o da gramática de Gary Parker (1976). O código é o
 * glottocode do grupo “Huaylay” (huay1239), porque o quéchua de Áncash não tem um código ISO 639-3 só
 * seu: cada variedade tem o dela (qwh Huaylas, qws Conchucos Norte, qxo Conchucos Sul…).
 *
 * Fontes, conferidas palavra por palavra:
 *   [WIKI] Wikipédia em espanhol (consultada em 10/10/2026): «Quechua ancashino» (interjeições “yaw”,
 *          “alalaw”, “atataw”, “ananaw”; a grafia), «Gramática del quechua ancashino» (pronomes,
 *          interrogativos, demonstrativos, “aw”, “mana”, “ama”, as raízes e os exemplos de derivação),
 *          «Quechua de Huaylas» (o “breve vocabulário”, os exemplos do verbo “ser” implícito e dos
 *          enclíticos, a amostra de texto) e «Clasificación del quechua ancashino» (as diferenças entre
 *          Huaylas e Conchucos).
 *   [OMNI] Omniglot, “Ancash Quechua numbers” (consultado em 10/10/2026).
 *   [PAR]  Gary J. Parker, “Gramática quechua: Ancash-Huailas” (Lima: Ministerio de Educación e Instituto
 *          de Estudios Peruanos, 1976), a gramática de referência do quéchua de Huaylas, em acesso aberto
 *          no repositório do MINEDU (hdl.handle.net/20.500.12799/10388; lida em 17/10/2026 na cópia do
 *          Internet Archive, Wayback Machine, de 14/09/2024). As páginas citadas são as do livro impresso;
 *          os paradigmas e as frases foram conferidos na imagem da página, e não só no texto extraído.
 *
 * Grafia do [PAR]: Parker escreve “e” e “o” só ao lado de “q”, onde as vogais altas soam abertas (p. 63:
 * “peqa”, cabeça; “qonqur”, joelho). O alfabeto oficial de 1985 tem só três vogais, então aqui “e” vira
 * “i” e “o” vira “u” nas palavras nativas (noqa → nuqa, qoya → quya, atoq → atuq, mushoq → mushuq,
 * -yoq → -yuq). Essa é a única conversão. Os empréstimos do espanhol ficam como Parker os escreve
 * (“mesa”, “Yosulpaaki”, “pweedi-”), como ele mesmo recomenda (p. 64–65).
 */
export const ROWS: VocabRow[] = [
  // Expressões ([WIKI] «Quechua de Huaylas», breve vocabulário e verbo “ser” implícito; «Quechua
  // ancashino», interjeições)
  ['Yaw', 'oi!, olá', 'interjeição', 'Expressões', '👋', 'Yaw!'],
  ['Imanawllataq kaykanki?', 'como você está?', 'expressão', 'Expressões', '🙂', 'Imanawllataq kaykanki?'],
  ['Yamayllaku kaykanki?', 'você está bem?', 'expressão', 'Expressões', '🤔', 'Yamayllaku kaykanki?'],
  ['Yamayllam kaykaa', 'estou bem', 'expressão', 'Expressões', '😊', 'Yamayllam kaykaa.'],
  ['aw', 'sim', 'interjeição', 'Expressões', '👍', 'Awmi.'],
  ['mana', 'não', 'advérbio', 'Expressões', '👎', 'Manam paytatsu.'],
  ['ama', 'não! (proibição)', 'advérbio', 'Expressões', '🚫', 'Ama!'],
  ['Alalaw!', 'que frio!', 'interjeição', 'Expressões', '🥶', 'Alalaw!'],
  ['Atataw!', 'que feio!', 'interjeição', 'Expressões', '🙈', 'Atataw!'],
  ['Ananaw!', 'que cansaço!', 'interjeição', 'Expressões', '😮‍💨', 'Ananaw!'],
  ['Nuqallaa', 'sou eu, aqui estou', 'expressão', 'Expressões', '🙋', 'Nuqallaa.'],
  ['Pitaq?', 'quem é?', 'expressão', 'Expressões', '🛎️', 'Pitaq? — Nuqam.'],
  ['Imatan?', 'o que é?', 'expressão', 'Expressões', '❔', 'Imatan? — Allqum.'],
  // Pronomes e perguntas ([WIKI] «Gramática del quechua ancashino»)
  ['nuqa', 'eu', 'pronome', 'Pessoas', '🙋‍♂️', 'Nuqam.'],
  ['qam', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Qammi.'],
  ['pay', 'ele, ela', 'pronome', 'Pessoas', '🧍', 'Paytsuraq?'],
  ['nuqantsik', 'nós (eu e você)', 'pronome', 'Pessoas', '🙌', 'Nuqantsik.'],
  ['nuqakuna', 'nós (sem você)', 'pronome', 'Pessoas', '👥', 'Nuqakuna.'],
  ['qamkuna', 'vocês', 'pronome', 'Pessoas', '👪', 'Qamkuna.'],
  ['paykuna', 'eles, elas', 'pronome', 'Pessoas', '🧑‍🤝‍🧑', 'Paykuna.'],
  ['ima', 'o quê', 'pronome', 'Essenciais', '❓', 'Imatan?'],
  ['pi', 'quem', 'pronome', 'Essenciais', '🕵️', 'Pitaq?'],
  ['ayka', 'quanto', 'pronome', 'Essenciais', '💰', 'Ayka?'],
  ['imanir', 'por quê', 'pronome', 'Essenciais', '🤷', 'Imanir?'],
  ['maychaw', 'onde', 'pronome', 'Essenciais', '📍', 'Maychaw?'],
  ['kay', 'este, isto', 'pronome', 'Essenciais', '👇', 'Kaychi Limaq!'],
  ['tsay', 'esse, isso', 'pronome', 'Essenciais', '👉', 'Tsay.'],
  ['taqay', 'aquele, aquilo', 'pronome', 'Essenciais', '🔭', 'Taqay.'],
  // Pessoas e coisas ([WIKI] «Gramática del quechua ancashino», «Quechua de Huaylas»)
  ['nuna', 'pessoa, ser humano', 'substantivo', 'Pessoas', '🧑', 'Nuna.'],
  ['warmi', 'mulher', 'substantivo', 'Pessoas', '👩', 'Warmichaq.'],
  ['awkis', 'velho (pessoa)', 'adjetivo', 'Pessoas', '👴', 'Awkis.'],
  ['wayi', 'casa', 'substantivo', 'Casa', '🏠', 'Wayichaw.'],
  ['marka', 'povoado, cidade', 'substantivo', 'Casa', '🏘️', 'Markamahi.'],
  ['hirka', 'morro, montanha', 'substantivo', 'Natureza', '⛰️', 'Hirkachawmi kaykaa.'],
  ['rumi', 'pedra', 'substantivo', 'Natureza', '🪨', 'Rumi.'],
  ['yaku', 'água', 'substantivo', 'Natureza', '💧', 'Yaku.'],
  ['yawar', 'sangue', 'substantivo', 'Natureza', '🩸', 'Yawarnin.'],
  ['ñawi', 'olho', 'substantivo', 'Natureza', '👁️', 'Ñawisapa.'],
  ['shunqu', 'coração', 'substantivo', 'Natureza', '❤️', 'Shunqu.'],
  ['allqu', 'cachorro', 'substantivo', 'Animais', '🐕', 'Imatan? — Allqum.'],
  ['waaka', 'vaca', 'substantivo', 'Animais', '🐄', 'Waakayuq.'],
  ['kachi', 'sal', 'substantivo', 'Comida', '🧂', 'Kachi.'],
  ['mishki', 'doce', 'adjetivo', 'Comida', '🍬', 'Mishki.'],
  ['alli', 'bom', 'adjetivo', 'Descrições', '✅', 'Alli.'],
  ['llampu', 'macio, suave', 'adjetivo', 'Descrições', '🧸', 'Llampu.'],
  // Verbos (o infinitivo termina em -y: [WIKI] «Gramática del quechua ancashino»)
  ['mikuy', 'comer', 'verbo', 'Verbos', '🍽️', 'Mikuy.'],
  ['wiyay', 'ouvir', 'verbo', 'Verbos', '👂', 'Wiyay.'],
  ['rikaay', 'ver', 'verbo', 'Verbos', '👀', 'Rikaay.'],
  ['aruy', 'trabalhar; o trabalho', 'verbo', 'Verbos', '🛠️', 'Aruq.'],
  ['puriy', 'andar', 'verbo', 'Verbos', '🚶', 'Puriy.'],
  ['yaykuy', 'entrar', 'verbo', 'Verbos', '🚪', 'Yaykurqanmi.'],
  // Números ([OMNI])
  ['huk', 'um; outro', 'numeral', 'Números', '1️⃣', 'Huk.'],
  ['ishkay', 'dois', 'numeral', 'Números', '2️⃣', 'Ishkay.'],
  ['kima', 'três', 'numeral', 'Números', '3️⃣', 'Kima.'],
  ['chusku', 'quatro', 'numeral', 'Números', '4️⃣', 'Chusku.'],
  ['pitsqa', 'cinco', 'numeral', 'Números', '5️⃣', 'Pitsqa.'],
  ['huqta', 'seis', 'numeral', 'Números', '6️⃣', 'Huqta.'],
  ['qanchis', 'sete', 'numeral', 'Números', '7️⃣', 'Qanchis.'],
  ['puwaq', 'oito', 'numeral', 'Números', '8️⃣', 'Puwaq.'],
  ['isqun', 'nove', 'numeral', 'Números', '9️⃣', 'Isqun.'],
  ['chunka', 'dez', 'numeral', 'Números', '🔟', 'Chunka.'],
  ['pachak', 'cem', 'numeral', 'Números', '💯', 'Pachak.'],

  // ── A1.1, lições extras: as palavras de cortesia do [PAR] ──
  // p. 72: “Yosulpaaki” ('Gracias'), “Winchis” ('Buenos días'), “¡Achacháw!” ('¡Qué pena!'), lidas na
  // imagem da página; p. 88: o vocativo -y de respeito, “mamay” ('señora') e “taytay” ('señor'); p. 137:
  // “Imanantsu” ('No importa').
  ['Yosulpaaki', 'obrigado', 'interjeição', 'Expressões', '🙏', 'Yosulpaaki.'],
  ['Winchis', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Winchis.'],
  ['Achacháw!', 'que pena!', 'interjeição', 'Expressões', '😢', 'Achacháw!'],
  ['taytay', 'senhor (para chamar com respeito)', 'substantivo', 'Pessoas', '👨‍🦳', 'Taytay.'],
  ['mamay', 'senhora (para chamar com respeito)', 'substantivo', 'Pessoas', '👵', 'Mamay.'],
  ['Imanantsu', 'não tem importância', 'expressão', 'Expressões', '🤷‍♀️', 'Imanantsu.'],

  // ── A2.1: a família, a casa e o dia a dia (todos do [PAR]; a página da palavra e da frase ao lado) ──
  // tayta 'padre; señor; don' e mama 'mamá, madre' (p. 88); “Taytanta rikarqayki”, 'Viste a su papá'
  // (p. 83); “Mamanta waqaykan”, 'Está llorando a su mamá' (p. 124).
  ['tayta', 'pai', 'substantivo', 'Família', '👨', 'Taytanta rikarqayki.'],
  ['mama', 'mãe', 'substantivo', 'Família', '👩‍🍼', 'Mamanta waqaykan.'],
  // wamra 'niño' (p. 69, p. 84: “Tsay wamrakunapita parlaykan”, 'Está hablando de esos niños').
  ['wamra', 'criança', 'substantivo', 'Família', '🧒', 'Tsay wamrakunapita parlaykan.'],
  // wawa 'hijo, -a (de la mujer)' (p. 43); “Noqa wawata punutsii”, 'Yo hago (o dejo) dormir al bebe' (p. 121).
  ['wawa', 'filho, filha (dito pela mãe); bebê', 'substantivo', 'Família', '👶', 'Nuqa wawata punutsii.'],
  // tsuri 'hijo, -a del hombre' (p. 141); “Tsurinwan taakuykan”, 'Está viviendo con su hijo' (p. 86).
  ['tsuri', 'filho, filha (dito pelo pai)', 'substantivo', 'Família', '👦', 'Tsurinwan taakuykan.'],
  // wawqi 'hermano (del hombre)' (p. 48); “Wawqiipaq apapushaq”, 'Lo llevaré para mi hermano' (p. 84).
  ['wawqi', 'irmão (dito por um homem)', 'substantivo', 'Família', '🧔', 'Wawqiipaq apapushaq.'],
  // chakra 'chacra' (p. 76); “Chakrapita shamurqun”, 'Ha venido de la chacra' (p. 84).
  ['chakra', 'roça', 'substantivo', 'Casa', '🌱', 'Chakrapita shamurqun.'],
  // papa 'papa' (p. 38); “Pedro papatam mikuykan”, 'Pedro está comiendo papas' (p. 67).
  ['papa', 'batata', 'substantivo', 'Comida', '🥔', 'Pedro papatam mikuykan.'],
  // tanta 'pan' (p. 38; p. 140: tantakU- 'conseguir pan').
  ['tanta', 'pão', 'substantivo', 'Comida', '🍞', 'Tanta.'],
  // yamta 'leña' (p. 140); “Pedro yamtata aparqan”, 'Pedro llevó la leña' (p. 117).
  ['yamta', 'lenha', 'substantivo', 'Casa', '🪵', 'Pedro yamtata aparqan.'],
  // manka 'olla' (p. 86: “Huk rumiwan mankata pakirqaa”, 'Rompí la olla con una piedra').
  ['manka', 'panela', 'substantivo', 'Casa', '🍲', 'Huk rumiwan mankata pakirqaa.'],
  // punku: “Punkupa yarqurqan”, 'Salió por la puerta' (p. 84).
  ['punku', 'porta', 'substantivo', 'Casa', '🚪', 'Punkupa yarqurqan.'],
  // Verbos: o infinitivo é a raiz com -y (p. 98). aywa-: “Warasta aywanki”, 'Irás a Huaraz' (p. 83);
  // shamu-: “¿Pitaq shamuykan?”, '¿Quién está viniendo?' (p. 70); kuti-: “Karasman kutimunqa”,
  // 'Regresará a Caraz' (p. 83); upyay 'beber' (p. 98) e “¡Yakuta upyay!”, '¡Toma agua!' (p. 69);
  // punu-: “¡Punuy!”, '¡Duerme!' (p. 69); rura- 'hacer, preparar, construir' (p. 137) e “Allita
  // rurarqan”, 'Lo hizo bien' (p. 71); muna- 'querer' (p. 67) e “Tsaytapis munaa”, 'Quiero eso también'
  // (p. 146); qawa-: “¿Imataq qawarqayki?”, '¿Qué miraste?' (p. 74).
  ['ayway', 'ir', 'verbo', 'Verbos', '🏃', 'Warasta aywanki.'],
  ['shamuy', 'vir', 'verbo', 'Verbos', '🚶‍♀️', 'Pitaq shamuykan?'],
  ['kutiy', 'voltar', 'verbo', 'Verbos', '🔙', 'Karasman kutimunqa.'],
  ['upyay', 'beber', 'verbo', 'Verbos', '🥤', 'Yakuta upyay!'],
  ['punuy', 'dormir', 'verbo', 'Verbos', '😴', 'Punuy!'],
  ['ruray', 'fazer', 'verbo', 'Verbos', '🔨', 'Allita rurarqan.'],
  ['munay', 'querer', 'verbo', 'Verbos', '💖', 'Tsaytapis munaa.'],
  ['qaway', 'olhar', 'verbo', 'Verbos', '🔍', 'Imataq qawarqayki?'],

  // ── A2.2: o tempo, os bichos, as cores e a festa (todos do [PAR]) ──
  // hunaq 'día' (p. 139); “Hunaq-hunaq tsaychaw uryan”, 'Trabaja allí todos los días' (p. 88); paqas
  // 'noche; de noche' e paqasta 'de noche' (p. 90); qoya 'la mañana' (p. 90; aqui “quya”); kanan 'ahora'
  // (p. 159: “Kanan qayakamuptin…”, 'Ahora si llama…'); wata 'año' (p. 51); “Ishkay chunka watayoq kaa”,
  // 'Tengo veinte años' (p. 94); killa 'luna, mes' (p. 138); inti 'sol' (p. 143); “Tamyaykanmi”, 'Está
  // lloviendo' (p. 68).
  ['hunaq', 'dia', 'substantivo', 'Tempo', '📅', 'Hunaq-hunaq tsaychaw uryan.'],
  ['paqas', 'noite', 'substantivo', 'Tempo', '🌙', 'Paqasta.'],
  ['quya', 'manhã', 'substantivo', 'Tempo', '🌄', 'Quya-quya.'],
  ['kanan', 'agora', 'advérbio', 'Tempo', '⏰', 'Kanan.'],
  ['wata', 'ano', 'substantivo', 'Tempo', '🗓️', 'Ishkay chunka watayuq kaa.'],
  ['killa', 'lua (e mês)', 'substantivo', 'Tempo', '🌕', 'Killa.'],
  ['inti', 'sol', 'substantivo', 'Natureza', '☀️', 'Inti.'],
  ['tamyay', 'chover', 'verbo', 'Natureza', '🌧️', 'Tamyaykanmi.'],
  // uusha 'oveja' e ashnu 'burro', empréstimos já assimilados (p. 64); “Uushaata atoq ushaskin”, 'El zorro
  // puede acabar con mis ovejas' (p. 128, frase de Conchucos, com o -ski de lá); “tsay atoq hina”, 'como ese
  // zorro' (p. 89); “Kima kabra huk pumash kanaq”, 'Dicen que había tres cabras y un puma' (p. 150);
  // “Ashnunkunachaa okupaykan”, 'Seguramente sus burros están ocupados' (p. 151, frase de Llamellín, no
  // leste de Áncash, onde o -chaa é mais usado; “okupa-” é empréstimo e fica como Parker escreve).
  ['uusha', 'ovelha', 'substantivo', 'Animais', '🐑', 'Uushaata atuq ushaskin.'],
  ['atuq', 'raposa', 'substantivo', 'Animais', '🦊', 'Tsay atuq hina.'],
  ['puma', 'puma', 'substantivo', 'Animais', '🐆', 'Kima kabra huk pumash kanaq.'],
  ['ashnu', 'burro', 'substantivo', 'Animais', '🫏', 'Ashnunkunachaa okupaykan.'],
  // hatun 'grande' (p. 34; “hatun chakra”, 'chacra grande', p. 76); ichik 'pequeño' (p. 139) e ichikllapa
  // 'apenas, un poco' (p. 94); mushoq: “aysi mushoq wayi”, 'casa muy nueva' (p. 77); puka 'rojo' (p. 139)
  // e “Wayiqa pukam”, 'La casa es roja' (p. 68); yuraq 'blanco' (p. 139, “luyaq” em Huaraz) e “Wayinqa
  // yuraqmi”, 'Su casa es blanca' (p. 150).
  ['hatun', 'grande', 'adjetivo', 'Descrições', '🐘', 'Hatun chakra.'],
  ['ichik', 'pequeno', 'adjetivo', 'Descrições', '🐜', 'Ichikllapa.'],
  ['mushuq', 'novo', 'adjetivo', 'Descrições', '✨', 'Aysi mushuq wayi.'],
  ['puka', 'vermelho', 'adjetivo', 'Cores', '🟥', 'Wayiqa pukam.'],
  ['yuraq', 'branco', 'adjetivo', 'Cores', '⬜', 'Wayinqa yuraqmi.'],
  // tushu-: “Tushuyta munaa”, 'Quiero bailar' (p. 164); yacha-: “Tushuyta yachanki”, 'Sabes bailar'
  // (p. 165); waqa- 'llorar' (p. 124).
  ['tushuy', 'dançar', 'verbo', 'Verbos', '💃', 'Tushuyta munaa.'],
  ['yachay', 'saber', 'verbo', 'Verbos', '🧠', 'Tushuyta yachanki.'],
  ['waqay', 'chorar', 'verbo', 'Verbos', '😭', 'Mamanta waqaykan.'],
];

export const VOCAB_HUAY1239 = buildVocab('huay1239', ROWS);
