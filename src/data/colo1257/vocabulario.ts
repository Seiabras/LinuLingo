import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do kichwa (o quéchua do Equador), no padrão escrito do kichwa unificado: só três vogais
 * (a, i, u), “k” no lugar de c, q e g, “sh” e “ts”. O código do curso é o glottocode do grupo
 * “Colombia-Ecuador Quechua” (colo1257), porque o kichwa unificado não tem código ISO 639-3 próprio: só
 * as variedades têm (qug, qvi, qxr…), e elas são os dialetos e os sotaques deste curso.
 *
 * Fontes, conferidas palavra por palavra:
 *   [KN]   Kichwa.net, “Kichwa Shimikuna – Vocabulario Kichwa” (kichwa.net/recursos-kichwa, consultado
 *          em 10/10/2026), as aulas do curso básico (Mushuk Muyu Básico): “Napaykuna” (cumprimentos),
 *          “Rimanakuy” (diálogo), “Mishki shimi rimay” (cortesia), “Ayllu” (família), “Wiwakuna”
 *          (animais), “Tullpukuna” (cores), “Pacha” (tempo), “Murukuna” (produtos da roça), “Churanakuna”
 *          (roupas), “Imachikkuna” (verbos), “Vocabulario complementario”, “Llika” (alfabeto) e as listas
 *          de frases “En la familia”, “En la ciudad”, “En el mercado”, “En la cocina”, com a tradução
 *          em espanhol que o site dá.
 *   [OMNI] Omniglot, “Useful phrases in Kichwa” e “Numbers in Kichwa” (omniglot.com, consultados em
 *          10/10/2026).
 *   [WIKI] Wikipédia em espanhol, «Kichwa» (pronomes, infinitivo em -na) e em inglês, «Kichwa language»
 *          (os quatro nomes de irmão).
 *
 * Verbos: entram no infinitivo, com -na, a forma de dicionário do kichwa ([WIKI], [KN] “Imachikkuna”).
 */
export const ROWS: VocabRow[] = [
  // Expressões ([KN] “Napaykuna”, “Mishki shimi rimay”, “Rimanakuy”, “En la familia”, “En la ciudad”,
  // “En la cocina”; [OMNI] “Alli shamushka”, “Pay pay”, “Imakutashi”, “Na hamuktanichu”)
  ['Imanalla', 'oi, olá; tudo bem?', 'interjeição', 'Expressões', '👋', 'Imanalla mashi!'],
  ['Imanallatak kanki?', 'como você está?', 'expressão', 'Expressões', '🙂', 'Kikinka imanallatak kanki?'],
  ['Allimi kani', 'estou bem', 'expressão', 'Expressões', '😊', 'Allimi kani.'],
  ['Alli puncha', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Alli puncha wawakuna!'],
  ['Alli chishi', 'boa tarde', 'interjeição', 'Expressões', '🌇', 'Alli chishi!'],
  ['Alli tuta', 'boa noite', 'interjeição', 'Expressões', '🌃', 'Alli tuta!'],
  ['Alli shamushka', 'bem-vindo(a)', 'interjeição', 'Expressões', '🤗', 'Alli shamushka!'],
  ['Yupaychani', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Mikunamanta yupaychani.'],
  ['Pay pay', 'muito obrigado(a)', 'interjeição', 'Expressões', '💐', 'Pay pay!'],
  ['Imakutashi', 'de nada (não é nada)', 'expressão', 'Expressões', '😌', 'Imakutashi.'],
  ['ari', 'sim', 'interjeição', 'Expressões', '👍', 'Ari.'],
  ['mana', 'não', 'advérbio', 'Expressões', '👎', 'Mana tiyanchu.'],
  ['Minchakaman', 'tchau, adeus', 'interjeição', 'Expressões', '🚶', 'Minchakaman!'],
  ['Kayakaman', 'até amanhã', 'interjeição', 'Expressões', '🌄', 'Kayakaman!'],
  ['Ashata kashkaman', 'até logo', 'interjeição', 'Expressões', '⏳', 'Ashata kashkaman!'],
  ['Kishpichiway', 'desculpe; com licença', 'interjeição', 'Expressões', '🙇', 'Kishpichiway.'],
  ['Shina shinalla', 'mais ou menos', 'expressão', 'Expressões', '🤷', 'Shina shinalla.'],
  ['Haku', 'vamos', 'interjeição', 'Expressões', '🏃', 'Haku mikushun.'],
  ['Na hamuktanichu', 'não entendo', 'expressão', 'Expressões', '😵', 'Na hamuktanichu.'],
  ['Mashnatak?', 'quanto custa?', 'expressão', 'Expressões', '💰', 'Mashnatak?'],
  ['Achachay!', 'que frio!', 'interjeição', 'Expressões', '🥶', 'Achachay!'],
  ['Araray!', 'que calor!', 'interjeição', 'Expressões', '🥵', 'Araray!'],
  ['Ananay!', 'que lindo!', 'interjeição', 'Expressões', '😍', 'Ananay!'],
  // Perguntas ([KN] “Ima shutitak kanki?”, “Maymantatak kanki?”, “Maypitak …?”)
  ['Ima shutitak kanki?', 'qual é o seu nome?', 'expressão', 'Essenciais', '🏷️', 'Ima shutitak kanki?'],
  ['Maymantatak kanki?', 'de onde você é?', 'expressão', 'Essenciais', '🗺️', 'Kikinka maymantatak kanki?'],
  ['maypitak', 'onde', 'advérbio', 'Essenciais', '📍', 'Maypitak hampi wasika kan?'],
  ['kay', 'este, isto; aqui', 'pronome', 'Essenciais', '👇', 'Kay mikunaka sumakmi.'],
  // Pessoas ([WIKI] e [KN] “Shutipak rantikuna”; [KN] “Ayllu”; [WIKI] «Kichwa language», os irmãos)
  ['ñuka', 'eu', 'pronome', 'Pessoas', '🙋', 'Ñukaka yachakuk kani.'],
  ['kan', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Kanka ñuka mashimi kanki.'],
  ['kikin', 'o senhor, a senhora (você, com respeito)', 'pronome', 'Pessoas', '🎩', 'Kikinka imanallatak kanki?'],
  ['pay', 'ele, ela', 'pronome', 'Pessoas', '🧍', 'Pay mikun.'],
  ['ñukanchik', 'nós', 'pronome', 'Pessoas', '🙌', 'Ñukanchik mikunchik.'],
  ['mama', 'mãe', 'substantivo', 'Pessoas', '👩‍🦳', 'Ñuka mamaka Genoveva shutimi.'],
  ['tayta', 'pai (também “yaya”)', 'substantivo', 'Pessoas', '👨‍🦳', 'Ñuka taytaka José shutimi.'],
  ['churi', 'filho', 'substantivo', 'Pessoas', '👦', 'Churi.'],
  ['ushi', 'filha', 'substantivo', 'Pessoas', '👧', 'Ushi.'],
  ['wawki', 'irmão (de um homem)', 'substantivo', 'Pessoas', '👬', 'Ñuka wawkika Luis shutimi.'],
  ['turi', 'irmão (de uma mulher)', 'substantivo', 'Pessoas', '🧑‍🤝‍🧑', 'Turi.'],
  ['pani', 'irmã (de um homem)', 'substantivo', 'Pessoas', '👫', 'Ñuka panika Carolina shutimi.'],
  ['ñaña', 'irmã (de uma mulher)', 'substantivo', 'Pessoas', '👭', 'Ñaña.'],
  ['hatun mama', 'avó', 'substantivo', 'Pessoas', '👵', 'Hatun mama.'],
  ['hatun tayta', 'avô', 'substantivo', 'Pessoas', '👴', 'Hatun tayta.'],
  ['kari', 'homem', 'substantivo', 'Pessoas', '👨', 'Kari.'],
  ['warmi', 'mulher; esposa', 'substantivo', 'Pessoas', '👩', 'Warmi.'],
  ['wawa', 'criança', 'substantivo', 'Pessoas', '🧒', 'Alli puncha wawakuna!'],
  ['mashi', 'amigo(a)', 'substantivo', 'Pessoas', '🤝', 'Imanalla mashi!'],
  ['ayllu', 'família', 'substantivo', 'Pessoas', '👪', 'Ayllu.'],
  ['runa', 'ser humano, pessoa', 'substantivo', 'Pessoas', '🧑', 'Runa.'],
  ['yachachik', 'professor(a)', 'substantivo', 'Pessoas', '🧑‍🏫', 'Ñukaka yachachik kani.'],
  ['yachakuk', 'estudante', 'substantivo', 'Pessoas', '🧑‍🎓', 'Ñukaka yachakuk kani.'],
  // Natureza e tempo ([KN] “Vocabulario complementario”, “Pacha”, “Llika”)
  ['inti', 'sol', 'substantivo', 'Natureza', '☀️', 'Inti.'],
  ['killa', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Killa.'],
  ['puncha', 'dia', 'substantivo', 'Natureza', '📅', 'Alli puncha!'],
  ['tuta', 'noite', 'substantivo', 'Natureza', '🌃', 'Alli tuta!'],
  ['yaku', 'água', 'substantivo', 'Natureza', '💧', 'Asha yakuta apamuy.'],
  ['nina', 'fogo', 'substantivo', 'Natureza', '🔥', 'Nina.'],
  ['allpa', 'terra', 'substantivo', 'Natureza', '🌍', 'Allpa.'],
  ['wayra', 'vento', 'substantivo', 'Natureza', '💨', 'Wayra.'],
  ['puyu', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Puyu.'],
  ['rumi', 'pedra', 'substantivo', 'Natureza', '🪨', 'Rumi.'],
  ['yura', 'planta', 'substantivo', 'Natureza', '🌱', 'Yura.'],
  ['wata', 'ano', 'substantivo', 'Natureza', '🗓️', 'Chayshuk watakaman!'],
  ['kunan', 'hoje, agora', 'advérbio', 'Natureza', '⏰', 'Kunan.'],
  ['kaya', 'amanhã', 'advérbio', 'Natureza', '⏩', 'Kayakaman!'],
  ['kayna', 'ontem', 'advérbio', 'Natureza', '⏪', 'Kayna.'],
  // Animais ([KN] “Wiwakuna”)
  ['allku', 'cachorro', 'substantivo', 'Animais', '🐕', 'Allku.'],
  ['atallpa', 'galinha', 'substantivo', 'Animais', '🐔', 'Atallpa.'],
  ['challuwa', 'peixe', 'substantivo', 'Animais', '🐟', 'Challuwa.'],
  ['kuy', 'porquinho-da-índia (cuy)', 'substantivo', 'Animais', '🐹', 'Kuy.'],
  ['llama', 'lhama', 'substantivo', 'Animais', '🦙', 'Llama.'],
  ['kuntur', 'condor', 'substantivo', 'Animais', '🦅', 'Kuntur.'],
  ['kinti', 'beija-flor', 'substantivo', 'Animais', '🐦', 'Kinti.'],
  ['pillpintu', 'borboleta', 'substantivo', 'Animais', '🦋', 'Pillpintu.'],
  ['wakra', 'gado', 'substantivo', 'Animais', '🐄', 'Wakra.'],
  ['kuchi', 'porco', 'substantivo', 'Animais', '🐖', 'Kuchi.'],
  ['atuk', 'lobo', 'substantivo', 'Animais', '🐺', 'Atuk.'],
  ['lulun', 'ovo', 'substantivo', 'Animais', '🥚', 'Lulun.'],
  // Comida ([KN] “Murukuna”, “Rurukuna”, “En la cocina”, “En el mercado”, “Vocabulario complementario”)
  ['mikuy', 'comida', 'substantivo', 'Comida', '🍲', 'Mikuy.'],
  ['tanta', 'pão', 'substantivo', 'Comida', '🍞', 'Shuk dólar tantata munani.'],
  ['sara', 'milho', 'substantivo', 'Comida', '🌽', 'Ñukaka sarata rantinkapak munani.'],
  ['papa', 'batata', 'substantivo', 'Comida', '🥔', 'Papa.'],
  ['kinuwa', 'quinoa', 'substantivo', 'Comida', '🌾', 'Kinuwa.'],
  ['aycha', 'carne', 'substantivo', 'Comida', '🥩', 'Ñukaka aychata alli mikuni.'],
  ['kachi', 'sal', 'substantivo', 'Comida', '🧂', 'Kachi.'],
  ['purutu', 'feijão', 'substantivo', 'Comida', '🫘', 'Purutu.'],
  ['palta', 'abacate', 'substantivo', 'Comida', '🥑', 'Palta.'],
  ['uchu', 'pimenta (ají)', 'substantivo', 'Comida', '🌶️', 'Uchu.'],
  ['mishki', 'doce; sobremesa', 'adjetivo', 'Comida', '🍬', 'Ñukaka mishkita munani.'],
  // Cores ([KN] “Tullpukuna”, “Vocabulario complementario”)
  ['puka', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Puka sara.'],
  ['yana', 'preto', 'adjetivo', 'Cores', '⚫', 'Yana sara.'],
  ['yurak', 'branco', 'adjetivo', 'Cores', '⚪', 'Yurak sara.'],
  ['killu', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Killu sara.'],
  ['waylla', 'verde', 'adjetivo', 'Cores', '🟢', 'Waylla.'],
  ['ankas', 'azul', 'adjetivo', 'Cores', '🔵', 'Ankas.'],
  // Casa e coisas ([KN] “En la escuela”, “Churanakuna”, “En la cocina”, “Llika”, “En la ciudad”)
  ['wasi', 'casa', 'substantivo', 'Casa', '🏠', 'Wasita mañankapak munani.'],
  ['yachana wasi', 'escola', 'substantivo', 'Casa', '🏫', 'Ñukaka yachana wasiman rinkapak munani.'],
  ['kamu', 'livro', 'substantivo', 'Casa', '📚', 'Kamuta yallichimupay.'],
  ['kullki', 'dinheiro', 'substantivo', 'Casa', '💵', 'Kullkita kuway.'],
  ['ushuta', 'sapato', 'substantivo', 'Casa', '👞', 'Ñukaka ushutata rantinkapak munani.'],
  ['ruwana', 'poncho', 'substantivo', 'Casa', '🧣', 'Kay tullpu ruwanata munani.'],
  ['muchiku', 'chapéu', 'substantivo', 'Casa', '👒', 'Muchiku.'],
  ['manka', 'panela', 'substantivo', 'Casa', '🍳', 'Manka.'],
  ['shimi', 'boca; língua (idioma)', 'substantivo', 'Casa', '👄', 'Kay shimita killkay.'],
  // Verbos ([KN] “Imachikkuna”; [WIKI] infinitivo em -na)
  ['mikuna', 'comer', 'verbo', 'Verbos', '🍽️', 'Pay mikun.'],
  ['uphiyana', 'beber', 'verbo', 'Verbos', '🥤', 'Uphiyana.'],
  ['puñuna', 'dormir', 'verbo', 'Verbos', '😴', 'Puñunayanchu?'],
  ['purina', 'caminhar', 'verbo', 'Verbos', '🚶‍♂️', 'Purishun.'],
  ['tushuna', 'dançar', 'verbo', 'Verbos', '💃', 'Tushunayanchu?'],
  ['rimana', 'falar', 'verbo', 'Verbos', '🗣️', 'Runashimita rimankichu?'],
  ['yachakuna', 'aprender, estudar', 'verbo', 'Verbos', '📖', 'Ñukaka yachakunkapak munani.'],
  ['munana', 'querer', 'verbo', 'Verbos', '🫶', 'Mikunata munani.'],
  ['kuyana', 'amar', 'verbo', 'Verbos', '❤️', 'Kanta kuyani.'],
  ['rantina', 'comprar', 'verbo', 'Verbos', '🛒', 'Awashkata rantinkapak munani.'],
  ['yanuna', 'cozinhar', 'verbo', 'Verbos', '👩‍🍳', 'Mikunata yanushun.'],
  ['killkana', 'escrever', 'verbo', 'Verbos', '✍️', 'Killkashun.'],
  ['yanapana', 'ajudar', 'verbo', 'Verbos', '🤲', 'Yanapashachu?'],
  // Descrições ([KN] “Vocabulario complementario”)
  ['alli', 'bom; bem', 'adjetivo', 'Descrições', '✅', 'Allimi kani.'],
  ['hatun', 'grande', 'adjetivo', 'Descrições', '🐘', 'Hatun mashikuna kanchik.'],
  ['uchilla', 'pequeno', 'adjetivo', 'Descrições', '🐜', 'Uchilla.'],
  ['sumak', 'bonito; que maravilha', 'adjetivo', 'Descrições', '🌺', 'Kay mikunaka sumakmi.'],
  ['mushuk', 'novo', 'adjetivo', 'Descrições', '🆕', 'Mushuk.'],
  ['kushi', 'alegre, feliz', 'adjetivo', 'Descrições', '😄', 'Kushi.'],
  ['llaki', 'triste', 'adjetivo', 'Descrições', '😢', 'Llaki.'],
  ['kunuk', 'quente', 'adjetivo', 'Descrições', '♨️', 'Kunuk yakuta munani.'],
  ['chiri', 'frio', 'adjetivo', 'Descrições', '🧊', 'Chiri yakuta munani.'],
  // Números ([OMNI] “Numbers in Kichwa”, que cita o kichwa.net)
  ['shuk', 'um', 'numeral', 'Números', '1️⃣', 'Shuk dólar tantata munani.'],
  ['ishkay', 'dois', 'numeral', 'Números', '2️⃣', 'Ishkay.'],
  ['kimsa', 'três', 'numeral', 'Números', '3️⃣', 'Kimsa.'],
  ['chusku', 'quatro', 'numeral', 'Números', '4️⃣', 'Chusku.'],
  ['pichka', 'cinco', 'numeral', 'Números', '5️⃣', 'Pichka.'],
  ['sukta', 'seis', 'numeral', 'Números', '6️⃣', 'Sukta.'],
  ['kanchis', 'sete', 'numeral', 'Números', '7️⃣', 'Kanchis.'],
  ['pusak', 'oito', 'numeral', 'Números', '8️⃣', 'Pusak.'],
  ['iskun', 'nove', 'numeral', 'Números', '9️⃣', 'Iskun.'],
  ['chunka', 'dez', 'numeral', 'Números', '🔟', 'Ishkay chunka watata charini.'],
  ['patsak', 'cem', 'numeral', 'Números', '💯', 'Patsak.'],
];

export const VOCAB_COLO1257 = buildVocab('colo1257', ROWS);
