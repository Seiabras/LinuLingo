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
  ['Pitaq?', 'quem é?', 'expressão', 'Expressões', '🚪', 'Pitaq? — Nuqam.'],
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
];

export const VOCAB_HUAY1239 = buildVocab('huay1239', ROWS);
