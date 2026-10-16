import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do aleúte (ISO 639-2/3 ale; Unangam Tunuu), a língua dos unangax̂ das ilhas Aleutas, das
 * ilhas Pribilof e da ponta da península do Alasca, o único membro do ramo aleúte da família
 * esquimó-aleúte. Grafia: o alfabeto latino escolar de 1972, em que “x̂” e “ĝ” são sons do fundo da
 * garganta, “hl”, “hm”, “hn” são consoantes sopradas e as vogais longas se escrevem dobradas. O padrão
 * do curso é o aleúte de Atka (o grupo ocidental), o das frases do Omniglot e da gramática de conversa
 * de Berge e Dirks.
 *
 * Fontes, conferidas palavra por palavra:
 *   [OMNI] Omniglot, “Useful phrases in Unangam Tunuu (Aleut)” (omniglot.com/language/phrases/
 *          aleut.php, consultado em 10/10/2026): cumprimentos e frases do dia a dia.
 *   [WIKT] Wikcionário em inglês, verbetes do aleúte (categoria “Aleut lemmas”, 229 verbetes, baixada
 *          em 10/10/2026). Cada linha cita o verbete (“s.v. …”). O Wikcionário marca as formas só do
 *          leste (“Eastern”) ou só do oeste (“Western”); as do leste ficam no dialeto oriental
 *          (variantes.ts).
 *   [WIKI] Wikipédia em inglês, «Aleut language» (consultada em 10/10/2026): as frases da seção Syntax
 *          (“Tayaĝux̂ awakux̂”, “Piitrax̂ tayaĝux̂ kidukux̂”, “tayaĝum adaa”) e a tabela dos números.
 *   [ANLC] Alaska Native Language Center, página “Unangam Tunuu / Aleut” (consultada em 10/10/2026):
 *          “Unangax̂”, pessoa, e a história da escrita.
 *
 * Fontes acadêmicas das unidades A2.1 e A2.2 (entrega de 16/10/2026, lidas nas páginas escaneadas):
 *   [BERG94] Knut Bergsland, “Aleut Dictionary / Unangam Tunudgusii: an unabridged lexicon of the
 *          Aleutian, Pribilof, and Commander Islands Aleut language”, Alaska Native Language Center,
 *          University of Alaska Fairbanks, 1994 (ERIC ED394352; cópia escaneada aberta em
 *          archive.org/details/micro_IA41153349_0992). “p.” é a página impressa do dicionário. Cada
 *          verbete diz o dialeto e o ano: “A 1780-” = atestado em Atka desde 1780; “E” = leste. Só
 *          entraram palavras com atestação “A” (Atka, o dialeto do curso). A grafia foi conferida na
 *          imagem da página (o texto reconhecido por máquina perde o x̂ e o ĝ).
 *   [BERG97] Knut Bergsland, “Aleut Grammar / Unangam Tunuganaan Achixaasix̂”, ANLC Research Paper 10,
 *          1997 (ERIC ED415678; archive.org/details/micro_IA41153314_0395). “§” e “p.” como no livro.
 * As frases de exemplo das palavras novas são exemplos atkanos do próprio dicionário ou da gramática,
 * com a tradução deles; quando não há frase atkana, o exemplo é a palavra sozinha.
 */
export const ROWS: VocabRow[] = [
  // Expressões ([OMNI]; “aang” e “qilachxizax̂”: também [WIKT])
  ['Aang', 'oi, olá; sim', 'interjeição', 'Expressões', '👋', 'Aang!'],
  ['Alqutaxt?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Aang! Alqutaxt?'],
  ['Qaĝaasakung', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Qaĝaasakung!'],
  ['Qaĝaasakung huzuu haqakux̂', 'bem-vindos (obrigado a todos por virem)', 'expressão', 'Expressões', '🚪', 'Qaĝaasakung huzuu haqakux̂!'],
  ['Qilachxizax̂', 'bom dia', 'interjeição', 'Expressões', '🌅', 'Qilachxizax̂!'],
  ['Angaliichxizax̂', 'boa tarde', 'interjeição', 'Expressões', '🌤️', 'Angaliichxizax̂!'],
  ['Amgiichxizax̂', 'boa noite (ao chegar)', 'interjeição', 'Expressões', '🌇', 'Amgiichxizax̂!'],
  ['Ukudigada', 'tchau', 'interjeição', 'Expressões', '🚶', 'Ukudigada!'],
  ['Ukudigal', 'boa sorte', 'interjeição', 'Expressões', '🍀', 'Ukudigal!'],
  ['Slachxizax̂ malgakux̂', 'tenha um bom dia', 'expressão', 'Expressões', '🌞', 'Slachxizax̂ malgakux̂!'],
  ['Qaatunaxt', 'bom apetite', 'expressão', 'Expressões', '🍽️', 'Qaatunaxt!'],
  ['Kiin asax̂tax̂t?', 'qual é o seu nome?', 'expressão', 'Expressões', '🏷️', 'Kiin asax̂tax̂t?'],
  ['asax̂takuq', 'meu nome é …', 'expressão', 'Expressões', '📛', 'Linu asax̂takuq.'],
  ['Qaataax̂t?', 'de onde você é?', 'expressão', 'Expressões', '🗺️', 'Qaataax̂t?'],
  ['Ukuĝaan ix̂amnakux̂', 'que bom te ver (prazer)', 'expressão', 'Expressões', '🤗', 'Ukuĝaan ix̂amnakux̂!'],
  ['Tutalagakuq', 'não entendo', 'expressão', 'Expressões', '🤷', 'Tutalagakuq.'],
  ['Hikuu tataam tii', 'diga de novo, por favor', 'expressão', 'Expressões', '🔁', 'Hikuu tataam tii.'],
  ['Unangam tunuu aadazaxt ii?', 'você fala aleúte?', 'expressão', 'Expressões', '💬', 'Unangam tunuu aadazaxt ii?'],
  ['Qanaang uma ii?', 'quanto custa isto?', 'expressão', 'Expressões', '💰', 'Qanaang uma ii?'],
  ['Amtal', 'desculpe', 'interjeição', 'Expressões', '🙇', 'Amtal.'],
  ['Txin yaxtakuq', 'eu te amo', 'expressão', 'Expressões', '❤️', 'Txin yaxtakuq.'],
  ['Aguung!', 'socorro!', 'interjeição', 'Expressões', '🆘', 'Aguung!'],
  ['Kamgan Ukudigaa', 'feliz Natal', 'expressão', 'Expressões', '🎄', 'Kamgan Ukudigaa!'],
  // Pessoas ([WIKT] s.v. “tayaĝux̂”, “ayagax̂”, “adax̂”, “anax̂”, “kukax̂”, “latux̂”, “asxinux”, “hlax̂”,
  // “agiitaadax”, “achixanax̂”, “kiin”; [ANLC] “Unangax̂”; [WIKI] pronomes “ting”, “txin”)
  ['Unangax̂', 'pessoa; um aleúte (no plural, Unangan no leste e Unangas no oeste)', 'substantivo', 'Pessoas', '🧑', 'Unangax̂.'],
  ['tayaĝux̂', 'homem', 'substantivo', 'Pessoas', '👨', 'Tayaĝux̂ awakux̂.'],
  ['ayagax̂', 'mulher', 'substantivo', 'Pessoas', '👩', 'Ayagax̂.'],
  ['adax̂', 'pai', 'substantivo', 'Pessoas', '👨‍🦳', 'Tayaĝum adaa.'],
  ['anax̂', 'mãe', 'substantivo', 'Pessoas', '👩‍🦳', 'Anax̂.'],
  ['kukax̂', 'avó', 'substantivo', 'Pessoas', '👵', 'Kukax̂.'],
  ['latux̂', 'avô', 'substantivo', 'Pessoas', '👴', 'Latux̂.'],
  ['asxinux', 'menina', 'substantivo', 'Pessoas', '👧', 'Asxinux.'],
  ['hlax̂', 'menino', 'substantivo', 'Pessoas', '👦', 'Hlax̂.'],
  ['agiitaadax', 'amigo(a)', 'substantivo', 'Pessoas', '🤝', 'Agiitaadax.'],
  ['achixanax̂', 'professor(a)', 'substantivo', 'Pessoas', '🧑‍🏫', 'Achixanax̂.'],
  ['ting', 'eu, me', 'pronome', 'Pessoas', '🙋', 'Ting.'],
  ['txin', 'você, te', 'pronome', 'Pessoas', '🫵', 'Txin yaxtakuq.'],
  ['kiin', 'quem', 'pronome', 'Essenciais', '❓', 'Kiin asax̂tax̂t?'],
  ['waya', 'aqui; agora', 'advérbio', 'Essenciais', '👇', 'Waya.'],
  ['amustukux̂', 'talvez', 'advérbio', 'Essenciais', '🤔', 'Amustukux̂.'],
  // Natureza ([WIKT] s.v. “agadgix”, “tugidax”, “taangax̂”, “kdax̂”, “qaniigix”, “chix̂tax̂”, “slagux”,
  // “inkamiiĝux̂”, “tanax̂”, “chugux̂”, “qiigax̂”, “qilax̂”)
  ['agadgix', 'sol', 'substantivo', 'Natureza', '☀️', 'Agadgix.'],
  ['tugidax', 'lua', 'substantivo', 'Natureza', '🌙', 'Tugidax.'],
  ['taangax̂', 'água', 'substantivo', 'Natureza', '💧', 'Taangax̂.'],
  ['kdax̂', 'gelo', 'substantivo', 'Natureza', '🧊', 'Kdax̂.'],
  ['qaniigix', 'neve', 'substantivo', 'Natureza', '❄️', 'Qaniigix.'],
  ['chix̂tax̂', 'chuva', 'substantivo', 'Natureza', '🌧️', 'Chix̂tax̂.'],
  ['slagux', 'vento', 'substantivo', 'Natureza', '💨', 'Slagux.'],
  ['inkamiiĝux̂', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Inkamiiĝux̂.'],
  ['tanax̂', 'terra', 'substantivo', 'Natureza', '🏝️', 'Tanax̂.'],
  ['chugux̂', 'areia', 'substantivo', 'Natureza', '🏖️', 'Chugux̂.'],
  ['qiigax̂', 'capim', 'substantivo', 'Natureza', '🌾', 'Qiigax̂.'],
  ['qilax̂', 'manhã', 'substantivo', 'Natureza', '🌄', 'Qilax̂.'],
  // Animais ([WIKT] s.v. “alax̂”, “adgayux”, “chagix̂”, “ptxitax”, “isux”, “sabaakax̂”, “kuusxix̂”,
  // “itx̂aygix̂”, “uuquchiingix”, “tiĝlax̂”, “agdiikax”, “qagmangix”, “chiidax̂”)
  ['alax̂', 'baleia', 'substantivo', 'Animais', '🐋', 'Alax̂.'],
  ['adgayux', 'salmão', 'substantivo', 'Animais', '🐟', 'Adgayux.'],
  ['chagix̂', 'linguado (halibute)', 'substantivo', 'Animais', '🐠', 'Chagix̂.'],
  ['ptxitax', 'bacalhau', 'substantivo', 'Animais', '🎣', 'Ptxitax.'],
  ['isux', 'foca-comum', 'substantivo', 'Animais', '🦭', 'Isux.'],
  ['sabaakax̂', 'cachorro', 'substantivo', 'Animais', '🐕', 'Sabaakax̂.'],
  ['kuusxix̂', 'gato', 'substantivo', 'Animais', '🐈', 'Kuusxix̂.'],
  ['itx̂aygix̂', 'rena', 'substantivo', 'Animais', '🦌', 'Itx̂aygix̂.'],
  ['uuquchiingix', 'raposa-azul', 'substantivo', 'Animais', '🦊', 'Uuquchiingix.'],
  ['tiĝlax̂', 'águia-careca', 'substantivo', 'Animais', '🦅', 'Tiĝlax̂.'],
  ['agdiikax', 'lagópode (a perdiz do Ártico)', 'substantivo', 'Animais', '🐦', 'Agdiikax.'],
  ['qagmangix', 'ganso-imperador', 'substantivo', 'Animais', '🪿', 'Qagmangix.'],
  ['chiidax̂', 'filhote (de qualquer bicho, como o da foca)', 'substantivo', 'Animais', '🐣', 'Chiidax̂.'],
  // Casa e coisas ([WIKT] s.v. “ayxaasix”, “chataasix̂”, “igax̂tax̂”, “chiirkax̂”, “chasix̂”, “chaasxix̂”,
  // “miilax̂”, “mituulkan”, “hmiichix̂”, “uliigix”, “chuulkix”, “parka”, “chigdax̂”, “x̂aayax̂”, “funaarix̂”)
  ['ayxaasix', 'barco', 'substantivo', 'Casa', '🚣', 'Ayxaasix.'],
  ['chataasix̂', 'trenó', 'substantivo', 'Casa', '🛷', 'Chataasix̂.'],
  ['igax̂tax̂', 'avião', 'substantivo', 'Casa', '✈️', 'Igax̂tax̂.'],
  ['chiirkax̂', 'igreja', 'substantivo', 'Casa', '⛪', 'Chiirkax̂.'],
  ['chasix̂', 'hora', 'substantivo', 'Casa', '🕐', 'Chasix̂.'],
  ['chaasxix̂', 'xícara', 'substantivo', 'Casa', '☕', 'Chaasxix̂.'],
  ['miilax̂', 'sabão', 'substantivo', 'Casa', '🧼', 'Miilax̂.'],
  ['mituulkan', 'vassoura', 'substantivo', 'Casa', '🧹', 'Mituulkan.'],
  ['hmiichix̂', 'bola', 'substantivo', 'Casa', '⚽', 'Hmiichix̂.'],
  ['uliigix', 'botas', 'substantivo', 'Casa', '🥾', 'Uliigix.'],
  ['chuulkix', 'meias', 'substantivo', 'Casa', '🧦', 'Chuulkix.'],
  ['parka', 'parca, casaco', 'substantivo', 'Casa', '🧥', 'Parka.'],
  ['chigdax̂', 'kamleika (a capa impermeável de tripa)', 'substantivo', 'Casa', '🥼', 'Chigdax̂.'],
  ['x̂aayax̂', 'sauna (banho de vapor)', 'substantivo', 'Casa', '🧖', 'X̂aayax̂.'],
  ['funaarix̂', 'lanterna', 'substantivo', 'Casa', '🏮', 'Funaarix̂.'],
  // Comida ([WIKT] s.v. “qalgadax̂”, “amxix̂”, “hudax̂”, “yaavlukax̂”, “tuzaangus”, “saalax̂”, “tiistax̂”)
  ['qalgadax̂', 'comida', 'substantivo', 'Comida', '🍲', 'Qalgadax̂.'],
  ['amxix̂', 'carne de peixe', 'substantivo', 'Comida', '🍣', 'Amxix̂.'],
  ['hudax̂', 'peixe seco', 'substantivo', 'Comida', '🐡', 'Hudax̂.'],
  ['yaavlukax̂', 'maçã', 'substantivo', 'Comida', '🍎', 'Yaavlukax̂.'],
  ['tuzaangus', 'morangos', 'substantivo', 'Comida', '🍓', 'Tuzaangus.'],
  ['saalax̂', 'banha (sobretudo de rena)', 'substantivo', 'Comida', '🧈', 'Saalax̂.'],
  ['tiistax̂', 'massa (de pão)', 'substantivo', 'Comida', '🥟', 'Tiistax̂.'],
  // Verbos ([WIKI] “awakux̂”, “kidukux̂”; [WIKT] s.v. “sagakux”, “mikal”, “hilal”, “agul”)
  ['awakux̂', 'trabalhar (ele, ela trabalha)', 'verbo', 'Verbos', '🛠️', 'Tayaĝux̂ awakux̂.'],
  ['kidukux̂', 'ajudar (ele, ela ajuda)', 'verbo', 'Verbos', '🤲', 'Piitrax̂ tayaĝux̂ kidukux̂.'],
  ['sagakux', 'dormir', 'verbo', 'Verbos', '😴', 'Sagakux.'],
  ['mikal', 'brincar', 'verbo', 'Verbos', '🪀', 'Mikal.'],
  ['hilal', 'ler', 'verbo', 'Verbos', '📖', 'Hilal.'],
  ['agul', 'fazer, construir', 'verbo', 'Verbos', '🔨', 'Agul.'],
  // Adjetivos ([WIKT] s.v. “quhmax̂”, “kaangux̂”, “quqdax̂”, “chaknax̂”)
  ['quhmax̂', 'branco', 'adjetivo', 'Descrições', '🤍', 'Quhmax̂.'],
  ['kaangux̂', 'saudável, com saúde', 'adjetivo', 'Descrições', '💪', 'Kaangux̂.'],
  ['quqdax̂', 'sujo', 'adjetivo', 'Descrições', '🫧', 'Quqdax̂.'],
  ['chaknax̂', 'fedorento', 'adjetivo', 'Descrições', '🤢', 'Chaknax̂.'],
  // Números (o aleúte conta em dez; formas de Atka: [WIKI] tabela dos números e [WIKT] s.v. “ataqan”,
  // “alax”, “qankus”, “chaang”, “atuung”, “uluung”, “sichiing”, “hatix̂”, “sisax̂”)
  ['ataqan', 'um', 'numeral', 'Números', '1️⃣', 'Ataqan tunuum sanaqaĝikan.'],
  ['alax', 'dois', 'numeral', 'Números', '2️⃣', 'Alax.'],
  ['qankus', 'três', 'numeral', 'Números', '3️⃣', 'Qankus.'],
  ['siching', 'quatro', 'numeral', 'Números', '4️⃣', 'Siching.'],
  ['chaang', 'cinco', 'numeral', 'Números', '5️⃣', 'Chaang.'],
  ['atuung', 'seis', 'numeral', 'Números', '6️⃣', 'Atuung.'],
  ['uluung', 'sete', 'numeral', 'Números', '7️⃣', 'Uluung.'],
  ['qamchiing', 'oito', 'numeral', 'Números', '8️⃣', 'Qamchiing.'],
  ['sichiing', 'nove', 'numeral', 'Números', '9️⃣', 'Sichiing.'],
  ['hatix̂', 'dez', 'numeral', 'Números', '🔟', 'Hatix̂.'],
  ['sisax̂', 'cem', 'numeral', 'Números', '💯', 'Sisax̂.'],
  // ── A2.1: tempo e rotina ([BERG94]; todas com atestação de Atka) ──
  // qilagan: p. 322, “tomorrow; […] A 1950- yesterday”; exemplo: “qilagan haqal saĝanax̂ he came
  // yesterday” (também [BERG97] p. 90).
  ['qilagan', 'amanhã; (com o verbo no passado) ontem', 'advérbio', 'Tempo', '📆', 'Qilagan haqal saĝanax̂.'],
  // angalix̂: p. 86, “angali-x̂ E 1780-, A 1780- […] 2. n. day”; “wan angalix̂ E 1804-, A 1860- this day,
  // today”; exemplo: “chix̂tal angalikux̂ A 1950- it is raining today”.
  ['angalix̂', 'dia', 'substantivo', 'Tempo', '🗓️', 'Chix̂tal angalikux̂.'],
  ['wan angalix̂', 'hoje', 'advérbio', 'Tempo', '📍', 'Wan angalix̂.'],
  // amgix̂: p. 62, “amgi-x̂ E 1791-, A 1780- […] n. night”.
  ['amgix̂', 'noite', 'substantivo', 'Tempo', '🌃', 'Amgix̂.'],
  // qan’gix̂: p. 308, “qan’gi-x̂ En 1978, A 1780- […] n. winter” (plural atkano qan’gis, A 1840).
  ['qan’gix̂', 'inverno', 'substantivo', 'Tempo', '⛄', 'Qan’gix̂.'],
  // saaqudgix̂: p. 353, “saaqudgi-x̂ E 1791-, A 1950- […] n. summer”.
  ['saaqudgix̂', 'verão', 'substantivo', 'Tempo', '🌻', 'Saaqudgix̂.'],
  // chix̂talix: p. 139, “2. E 1791-, A 1950- to rain”; exemplo: “chix̂tax̂ malgakux̂ E 1978, A 1978 there
  // is rain, it is raining”.
  ['chix̂talix', 'chover', 'verbo', 'Tempo', '☔', 'Chix̂tax̂ malgakux̂.'],
  // ichingunal: p. 171, “ichinguna-l A 1973- vi. to be cold (of weather or room)”.
  ['ichingunal', 'frio (fazer frio: o tempo, a casa)', 'verbo', 'Tempo', '🥶', 'Ichingunal.'],
  // hugnaazax̂: p. 425, “hugnaaza-x̂ A 1840- […] vn. warm; warmth; warm weather”.
  ['hugnaazax̂', 'calor', 'substantivo', 'Tempo', '🥵', 'Hugnaazax̂.'],
  // ── A2.1: comida ([BERG94] p. 289, verbete “qa-x̂”) ──
  // qax̂: “qa-x̂ 1. E 1804-, A 1780- n. fish”; qalix: “2. qa-lix E 1778-, A 1791- vi. & vt. to eat”;
  // exemplos: “hlax̂ qax̂ qal qilax̂six̂ A 1978 the boy ate the fish this morning”; “qas qal qilax̂sis
  // A 1978 the fish were biting this morning”.
  ['qax̂', 'peixe', 'substantivo', 'Comida', '🎏', 'Hlax̂ qax̂ qal qilax̂six̂.'],
  ['qalix', 'comer', 'verbo', 'Comida', '😋', 'Qas qal qilax̂sis.'],
  // “3. E 1836-, A 1840- vn. meal”: “qilam qaa A 1840, 1952 morning meal, breakfast”; “angalim utman qaa
  // A 1952 lunch, lit. the meal of the middle of the day”; “angalikingan qaa A 1952 evening meal, supper”.
  ['qilam qaa', 'café da manhã', 'expressão', 'Comida', '🥞', 'Qilam qaa.'],
  ['angalim utman qaa', 'almoço', 'expressão', 'Comida', '🍛', 'Angalim utman qaa.'],
  ['angalikingan qaa', 'jantar', 'expressão', 'Comida', '🫕', 'Angalikingan qaa.'],
  // chaayux̂: p. 133, “chaayu-x̂ E 1831-, A 1840- n. tea”; exemplo: “chaayukuq A 1950 I'm drinking tea”.
  ['chaayux̂', 'chá', 'substantivo', 'Comida', '🍵', 'Chaayukuq.'],
  // mukax̂: p. 278, “muka-x̂ A 1952- n. flour (E aluga-x̂) [from Russian muká flour]”.
  ['mukax̂', 'farinha', 'substantivo', 'Comida', '🫓', 'Mukax̂.'],
  // ── A2.1: casa, mar, escola ([BERG94]) ──
  // ulax̂: p. 433, “ula-x̂ E 1766-, A 1772- […] n. house, dwelling”; exemplo de [BERG97] p. 90: “Piitrax̂
  // haman ulax̂ agunax̂ ‘Peter built that house’”.
  ['ulax̂', 'casa', 'substantivo', 'Casa', '🏠', 'Piitrax̂ haman ulax̂ agunax̂.'],
  // alaĝux̂: p. 50, “alaĝu-x̂ 1. E 1778-, A 1791- […] n. the sea, ocean”.
  ['alaĝux̂', 'mar', 'substantivo', 'Natureza', '🌊', 'Alaĝux̂.'],
  // achixaalux̂ e achixalix: p. 8, “achixaalux̂ A 1840 (-g-), 1937- n. school”; “achixa-lix A 1840- vt. to
  // teach; vr. to study, to learn”; exemplos: “txin achixakuq A 1950 I am teaching you, ting achixakuq
  // I am learning”.
  ['achixaalux̂', 'escola', 'substantivo', 'Casa', '🏫', 'Achixaalux̂.'],
  ['achixalix', 'aprender; ensinar', 'verbo', 'Verbos', '📚', 'Ting achixakuq.'],
  // tunux̂: p. 407, “2. tunu-x̂ E 1791-, A 1837- […] n. word, message; language, dialect”.
  ['tunux̂', 'palavra', 'substantivo', 'Essenciais', '🔤', 'Tunux̂.'],
  // ── A2.2: corpo e saúde ([BERG94]) ──
  // kamgix̂: p. 226, “kamgi-x̂ E 1778-, A 1780- […] n. head”.
  ['kamgix̂', 'cabeça', 'substantivo', 'Corpo', '🗣️', 'Kamgix̂.'],
  // chax̂: p. 123, “cha-x̂ 1. E 1780-, A 1780- […] n. hand”; “chak (chaning) A 1950- my hands”.
  ['chax̂', 'mão', 'substantivo', 'Corpo', '✋', 'Chak.'],
  // dax̂: p. 158, “da-x̂ E 1778-, A 1780- […] n. eye”.
  ['dax̂', 'olho', 'substantivo', 'Corpo', '👁️', 'Dax̂.'],
  // kitax̂: p. 241–242, “kita-x̂ 1. E 1778-, A 1780- […] n. foot”.
  ['kitax̂', 'pé', 'substantivo', 'Corpo', '🦶', 'Kitax̂.'],
  // kudux̂: p. 246, “kudu-x̂ Eun 1878-, A 1840- […] n. leg, especially shank, lower leg”.
  ['kudux̂', 'perna', 'substantivo', 'Corpo', '🦵', 'Kudux̂.'],
  // nanalix: p. 281, “nana-lix E 1791-, A 1840- vi. to ache”; exemplo: “dam nanakix A 1840 aching eyes”.
  ['nanalix', 'doer', 'verbo', 'Corpo', '🤕', 'Dam nanakix.'],
  // asx̂aaĝilix: p. 99, “asx̂aaĝi-lix A 1839- […] vi. to be sick, ill (E takiix-six)”; exemplo da p. 535:
  // “asx̂aaĝinaaĝikuq A 1952 I feel sick”.
  ['asx̂aaĝilix', 'doente (estar doente)', 'verbo', 'Corpo', '🤒', 'Asx̂aaĝinaaĝikuq.'],
  // duuxturax̂: p. 161, “duuxtura-x̂ Eu 1984, A 1973- n. doctor […] [from Russian dóktor doctor]”.
  ['duuxturax̂', 'médico', 'substantivo', 'Corpo', '🩺', 'Duuxturax̂.'],
  // kayuĝiqadax̂: p. 235, “kayuĝiqada-lix E 1832-, A 1838- vi. to become weak; to get tired […];
  // kayuĝiqada-x̂ vn. tired; tiredness, fatigue”.
  ['kayuĝiqadax̂', 'cansado', 'adjetivo', 'Descrições', '🥱', 'Kayuĝiqadax̂.'],
  // inix̂sinax̂: p. 202, “inix̂sina-x̂ E 1836 vn. happy, joyous; A 1840- joy, happiness”.
  ['inix̂sinax̂', 'alegria', 'substantivo', 'Descrições', '😄', 'Inix̂sinax̂.'],
  // ── A2.2: mar e pesca ([BERG94]) ──
  // imyaĝnax̂: p. 197, “imgaĝna-x̂ E 1909 (A 1950), imyaĝna-x̂ A 1950-52 n. fisherman”.
  ['imyaĝnax̂', 'pescador', 'substantivo', 'Mar', '🚤', 'Imyaĝnax̂.'],
  // ingix̂: p. 207, “ingi-x̂ E 1812-, A 1840- […] n. dipnet, landing net”.
  ['ingix̂', 'rede (de pesca, de mão)', 'substantivo', 'Mar', '🥅', 'Ingix̂.'],
  // umĝix̂: p. 440, “umĝi-x̂ Ea 1982-, A 1950-, Ab 1931 […] n. bait”.
  ['umĝix̂', 'isca', 'substantivo', 'Mar', '🪱', 'Umĝix̂.'],
  // aguĝnax̂: p. 30, “aguĝna-x̂ E 1791-1909, Ebap 1941-, A 1840- […] n. sea urchin, sea egg”.
  ['aguĝnax̂', 'ouriço-do-mar', 'substantivo', 'Mar', '🦔', 'Aguĝnax̂.'],
  // waygix̂: p. 461, “waygi-x̂ E 1804-, A 1840- […] n. blue mussel, Mytilus edulis”.
  ['waygix̂', 'mexilhão', 'substantivo', 'Mar', '🦪', 'Waygix̂.'],
  // ── A2.2: números maiores ([BERG97] §2.1.5, p. 63–66; [BERG94] p. 49 e p. 572) ──
  // hatim ataqan: [BERG97] p. 66, “A 1950- hatim (or hatix̂) ataqan […] ‘eleven’”.
  ['hatim ataqan', 'onze', 'numeral', 'Números', '🔢', 'Hatim ataqan.'],
  // algidim hatix̂: [BERG97] p. 64, “algidim hatix̂ ‘twice ten, twenty’” (Atka, desde 1840).
  ['algidim hatix̂', 'vinte', 'numeral', 'Números', '🎲', 'Algidim hatix̂.'],
  // alax sisax̂: [BERG94] p. 49, “alax sisax̂ A 1952- two hundred”; [BERG97] p. 65 (A 1950-).
  ['alax sisax̂', 'duzentos', 'numeral', 'Números', '🧮', 'Alax sisax̂.'],
  // tiisichax̂: [BERG97] p. 63 e 65, “tiisichax̂ ‘thousand’ […] from Russian” (A 1950); [BERG94] p. 572.
  ['tiisichax̂', 'mil', 'numeral', 'Números', '🔣', 'Tiisichax̂.'],
  // miliyuunax̂: [BERG97] p. 63, “miliyuunax̂ ‘million’ (from Russian)”; p. 66, A 1971.
  ['miliyuunax̂', 'milhão', 'numeral', 'Números', '🏦', 'Miliyuunax̂.'],
];

export const VOCAB_ALE = buildVocab('ale', ROWS);
