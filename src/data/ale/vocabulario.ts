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
 *
 * Fontes do B1 (entrega de 16/10/2026, também lidas nas páginas escaneadas, com a grafia conferida na
 * imagem): as mesmas [BERG94] e [BERG97], mais
 *   [DIRKS78] Moses Dirks e Lydia Dirks, “Niiĝuĝim Qalgadangis / Atkan Food”, National Bilingual
 *          Materials Development Center, 1978 (ERIC ED173042; archive.org/details/micro_IA41153602_0457).
 *          “p.” é o número impresso na página em aleúte; a tradução é a inglesa do próprio livro.
 *   [NM]   Cedor L. Snigaroff, “Niiĝuĝis Maqax̂tazaqangis / Atkan Historical Traditions”, contadas em
 *          1952 e editadas por Knut Bergsland (Alaska Native Education Board, 1976; ERIC ED127257;
 *          archive.org/details/micro_IA41153056_0125). As frases do curso vêm das citações de [BERG97],
 *          que dão a passagem (“N.M. 1:43” = parte 1, frase 43), a grafia revista e a tradução.
 * Bergsland marca cada exemplo com o dialeto e o ano: “A 1952” é Atka, 1952; “A 1860” é o aleúte de
 * Atka das traduções religiosas do século XIX. O B1 usa quase só frases de Atka de 1950 a 1981.
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
  ['qilagan', 'amanhã; (com o verbo em -l) ontem', 'advérbio', 'Tempo', '📆', 'Qilagan haqal saĝanax̂.'],
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
  // ══ B1 (entrega de 16/10/2026). Só verbetes com atestação de Atka (“A”) em [BERG94], com a página
  // impressa do dicionário; a grafia foi conferida na imagem da página. Os exemplos são frases atkanas de
  // [BERG94], de [BERG97] (com o dialeto e o ano que Bergsland dá) ou de [DIRKS78] (aleúte de Atka, 1978).
  // ── B1.1: bichos, lugares e movimento ──
  // qayax̂: p. 314, “2. qaya-x̂ E 1791-, A 1860- […] n. hill, mountain”; exemplo [BERG97] p. 233 (A 1978):
  // “qayax̂ hangal kangakux̂ ‘she climbed right to the top of the hill’”.
  ['qayax̂', 'colina', 'substantivo', 'Natureza', '⛰️', 'Qayax̂ hangal kangakux̂.'],
  // sax̂: p. 342, “sa-x̂ E 1791-, A 1780- […] n. bird (in general), especially duck”; exemplo [BERG97]
  // p. 233 (A 1978): “sax̂ iĝas iganikuq ‘I scared the duck into flight’”.
  ['sax̂', 'pássaro', 'substantivo', 'Animais', '🦆', 'Sax̂ iĝas iganikuq.'],
  // qanglaaĝix̂: p. 304, “qanglaax̂ A 1860-, […] qanglaaĝi-x̂ A 1952- […] n. raven, Corvus corax”;
  // exemplo p. 407: “qanglaaĝix̂ tunukux̂ A 1950 the raven cries”.
  ['qanglaaĝix̂', 'corvo', 'substantivo', 'Animais', '🐦‍⬛', 'Qanglaaĝix̂ tunukux̂.'],
  // slukax̂: p. 369, “sluka-x̂ E 1791-, A 1840- […] n. adult sea gull”; exemplo [BERG97] p. 133 (A 1980):
  // “slukam hakangis quhmakux̂ ‘the sea gull has white feathers’”.
  ['slukax̂', 'gaivota', 'substantivo', 'Animais', '🕊️', 'Slukam hakangis quhmakux̂.'],
  // qawax̂: p. 313, “qawa-x̂ E 1791-, A 1840- […] n. sea lion”; exemplo [BERG97] p. 88 (A): “qawax̂
  // angunazax̂ ‘a sea lion is big, the sea lion is a big animal’”.
  ['qawax̂', 'leão-marinho', 'substantivo', 'Mar', '🦁', 'Qawax̂ angunazax̂.'],
  // ulux̂: p. 436, “ulu-x̂ n. 1. E 1791-, A 1791- […] meat (of animal, bird)”; exemplo [BERG97] p. 62
  // (A 1981): “ulux̂ uhlii qalakan qax̂ ilax̂taa qada ‘don't eat only meat, eat fish also’”.
  ['ulux̂', 'carne', 'substantivo', 'Comida', '🥩', 'Ulux̂ uhlii qalakan qax̂ ilax̂taa qada.'],
  // haqalix: p. 93, “haqa-lix E 1791-, A 1791- […] vi. to come, 1. to come here, arrive”; “haqal qada A
  // […] come and eat” (também [BERG97] p. 87).
  ['haqalix', 'vir', 'verbo', 'Verbos', '🔜', 'Haqal qada!'],
  // hisix: p. 214, “hit-, hisix 1. E 1791-, A 1838- […] vi. to go out, to come out”; exemplo [BERG97]
  // p. 234 (A 1952): “hingamatal hitikux̂ ‘he went out in that way’”.
  ['hisix', 'sair', 'verbo', 'Verbos', '🏃', 'Hingamatal hitikux̂.'],
  // aygaxsix: p. 118, “aygax-six E 1778-, A 1791- […] vi. to walk (person, animal); to go”; exemplo
  // [BERG97] p. 234 (A 1950): “xadaxs aygaxs ‘walking fast’”.
  ['aygaxsix', 'andar', 'verbo', 'Verbos', '🚶‍♀️', 'Xadaxs aygaxs.'],
  // angunalix: p. 91, “anguna-lix E 1780-, A 1780- […] vi. to be big, large, much”; exemplo: “chavichax̂
  // haanum ilagaan angunazax̂ A 1979 the king salmon is bigger than the red salmon”.
  ['angunalix', 'grande', 'verbo', 'Descrições', '🐘', 'Chavichax̂ haanum ilagaan angunazax̂.'],
  // adulix: p. 14, “adu-lix E 1791-, A 1950- […] vi. to be long; adu-x̂ E 1805-, A 1780- […] vn. long;
  // tall”; exemplo [BERG97] p. 233 (A 1978): “alax̂ angunal aduzax̂ ‘a whale is big and long’”.
  ['adulix', 'comprido', 'verbo', 'Descrições', '📏', 'Alax̂ angunal aduzax̂.'],
  // kurilix: p. 250, “kuri-lix E 1906-, A 1950- vi. to smoke (tobacco)”; exemplo [BERG97] p. 88 (A):
  // “Piitrax̂ kurizaĝulax̂ ‘Peter does not smoke, never smokes’”.
  ['kurilix', 'fumar', 'verbo', 'Verbos', '🚬', 'Piitrax̂ kurizaĝulax̂.'],
  // alux̂six: p. 57–58, “3. alux̂-six E 1805-, A 1840- […] vi., vt. to write”; exemplo: “kiin aluqangis? A
  // 1950 who wrote them (the letters, on the paper)?”.
  ['alux̂six', 'escrever', 'verbo', 'Verbos', '✍️', 'Kiin aluqangis?'],
  // ayuxtalix: p. 121, “ayuxta-lix 1. E 1909-, A 1840- […] vi. to go out (in boat) for a trip; to be out
  // (e.g. fishing)”; exemplo [BERG97] p. 233 (A 1971): “Piitrax̂ ayuxtal qawanaaĝnax̂ ‘Peter went out to
  // hunt sea lion’”.
  ['ayuxtalix', 'sair de barco', 'verbo', 'Mar', '⛵', 'Piitrax̂ ayuxtal qawanaaĝnax̂.'],
  // ── B1.2: onde as coisas estão ([BERG97] §2.1.6, p. 67–69; [BERG94], Appendix 3 e verbetes) ──
  // ilan: [BERG94] p. 190, “il-, ili-, ila- E 1826-, A 1780- […] pos.n. inside (in relation to an
  // opening); closeness, contact”; [BERG97] p. 67 (o locativo -n); exemplo [BERG97] p. 194 (A 1951):
  // “siching hiisix̂ angalim ilan ‘on the fourth day’”.
  ['ilan', 'dentro', 'advérbio', 'Essenciais', '📥', 'Siching hiisix̂ angalim ilan.'],
  // nagan: [BERG94] p. 281, “nag- pos.n. inside, interior (of something hollow that has an opening)”;
  // “naga E 1870-, A 1790-”; [BERG97] p. 69, “nagan ‘inside of it’, abl. nagaan”; exemplo p. 158
  // (A 1971): “Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂ ‘Peter put the candies in a box’”.
  ['nagan', 'dentro de', 'advérbio', 'Essenciais', '🕳️', 'Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂.'],
  // kugan: [BERG94] p. 244, “ku- pos.n. top surface”, “kuu E 1791, 1834-, A 1860- (1952 also kuga) its top
  // surface”; [BERG97] p. 69, “kugan ‘on top of -, etc.’, abl. kugaan”; exemplo p. 207 (A 1973): “sunam
  // kugan ayuxtal amaxtikus ‘we went out on a ship in the night’”.
  ['kugan', 'em cima de', 'advérbio', 'Essenciais', '🔝', 'Sunam kugan ayuxtal amaxtikus.'],
  // angan: [BERG94] p. 81, “3. E 1780-, A 1840- […] pos.n. side, space beside, alongside; […] loc. beside,
  // alongside, next to, close to; together with”; [BERG97] p. 69, “angan ‘beside, alongside, etc.’”;
  // exemplo [DIRKS78] p. 5: “Taaĝan’gis chadum angan qalgaa qaatunazax̂” (“Wild parsnips are good with
  // seal oil”).
  ['angan', 'ao lado de', 'advérbio', 'Essenciais', '↔️', 'Taaĝan’gis chadum angan qalgaa qaatunazax̂.'],
  // qusan: [BERG94] p. 338, “qusa- pos.n. above, space above” (“Qusam hasaa A 1950- Milky Way”); [BERG97]
  // p. 69, “qusan ‘above, over him/her/it’, abl. qusaan”.
  ['qusan', 'acima de', 'advérbio', 'Essenciais', '⬆️', 'Qusan.'],
  // hadan: [BERG97] p. 69, “hadan ‘toward him/her/it’, abl. hadaan”; exemplo [BERG94] p. 215: “hadan
  // hitakung A 1950 I went out to him”.
  ['hadan', 'em direção a', 'advérbio', 'Essenciais', '➡️', 'Hadan hitakung.'],
  // stuulux̂: p. 372, “stuulux̂ E 1870-, A 1838-, stuuluĝi-x̂ A 1948- […] n. table […] [from Russian
  // stol]”; exemplo [BERG97] p. 62 (A 1971): “asux̂ imdahlikum ilam axs stuuluĝim kugan hyukux̂ ‘the pot
  // was too full and ran over on the table’”.
  ['stuulux̂', 'mesa', 'substantivo', 'Casa', '🪑', 'Asux̂ imdahlikum ilam axs stuuluĝim kugan hyukux̂.'],
  // yaasikax̂: p. 464, “yaasika-x̂ A 1840- n. box […] [from Russian yáshchik]”; exemplo [BERG97] p. 158:
  // “Piitrax̂ yaasikam nagan kanfiixtas aĝikux̂ ‘Peter put candies in the box’”.
  ['yaasikax̂', 'caixa', 'substantivo', 'Casa', '📦', 'Piitrax̂ yaasikam nagan kanfiixtas aĝikux̂.'],
  // tanadgusix̂: p. 389, “tanadgusi-x̂ E 1791-, A 1840- […] n. settlement, habitation; village”; exemplo
  // [BERG97] p. 194 (A 1950): “itxaan tanadgusim kugaan waaĝakux̂ ‘he came from another village’”.
  ['tanadgusix̂', 'aldeia', 'substantivo', 'Casa', '🏘️', 'Itxaan tanadgusim kugaan waaĝakux̂.'],
  // sunax̂: p. 377, “suna-x̂ E 1778-, A 1840- […] n. ship [from Russian súdno]”; exemplo [BERG97] p. 87 (A):
  // “sunax̂ haqakux̂ ‘the ship is coming’”.
  ['sunax̂', 'navio', 'substantivo', 'Mar', '🚢', 'Sunax̂ haqakux̂.'],
  // kanfiixtax̂: p. 229, “kanfiixta-x̂ En 1978, A 1950- n. candy [from Russian konfétka]”; exemplo como em
  // nagan.
  ['kanfiixtax̂', 'doce', 'substantivo', 'Comida', '🍬', 'Piitrax̂ kanfiixtas yaasikam nagan aĝikux̂.'],
  // furaaskix̂: p. 162, “puraasxi-x̂ A 1950-52, furaaski-x̂ A 1950- n. cap […] [from Russian furázhka]”;
  // exemplo [BERG97] p. 159 (1971): “hingan furaaskix̂ adagan ngaan aĝiqaa ‘that cap, his father gave
  // him’”.
  ['furaaskix̂', 'boné', 'substantivo', 'Casa', '🧢', 'Hingan furaaskix̂ adagan ngaan aĝiqaa.'],
  // xliibax̂: p. 164, “xliiba-x̂ E 1936-, A 1950-, hliiba-x̂ A 1973 […] n. bread [from Russian khleb]”;
  // exemplo [BERG97] p. 159 (A 1950): “anagan xliibam ilaa ngaan aĝikuu ‘his mother gave him a piece of
  // bread’”.
  ['xliibax̂', 'pão', 'substantivo', 'Comida', '🍞', 'Anagan xliibam ilaa ngaan aĝikuu.'],
  // skuulnikax̂: p. 367, “skuulnika-x̂ A 1952- n. schoolchild, student”; exemplo [BERG97] p. 222
  // (A 1973): “skuulnikas skuulim nagan qangul hagyayal qilax̂sis ‘the students entered into the school
  // house and cleaned it this morning’”.
  ['skuulnikax̂', 'aluno', 'substantivo', 'Pessoas', '🧒', 'Skuulnikas skuulim nagan qangul hagyayal qilax̂sis.'],
  // baankix̂: p. 274, “baanki-x̂ A 1950- n. can, jar [from Russian bánka]”; exemplo [BERG97] p. 234
  // (A 1978): “baankix̂ alqutal haxsit ‘how did you open the can?’”.
  ['baankix̂', 'lata', 'substantivo', 'Casa', '🥫', 'Baankix̂ alqutal haxsit?'],
  // chaanikax̂: p. 130, “[chaanika-x̂ …] A 1840-, chaniika-x̂ Ea 1983 n. teakettle; chaayu(m) chaanikaa
  // A 1952 teapot […] [from Russian cháynik]”; exemplo [BERG97] p. 158 (1950): “chaanikam nagan taangax̂
  // hyutikuq ‘I am pouring water in the kettle’”.
  ['chaanikax̂', 'chaleira', 'substantivo', 'Casa', '🫖', 'Chaanikam nagan taangax̂ hyutikuq.'],
  // ── B1.3: a cozinha de Atka ([BERG94]; [DIRKS78]) ──
  // suupax̂: p. 377, “suupa-x̂ En 1935-, A 1950- n. soup […] [from Russian sup]”; exemplo [BERG97] p. 171
  // (A 1980) e [DIRKS78] p. 7: “ulum suupaa ilax̂taa pitruuskis (DIRKS78: pristuskis) ngaan angaĝazax̂
  // ‘wild parsley is added to meat soup, too’”.
  ['suupax̂', 'sopa', 'substantivo', 'Comida', '🥣', 'Ulum suupaa ilax̂taa pitruuskis ngaan angaĝazax̂.'],
  // saaxarax̂: p. 344, “saaxara-x̂ E 1878-, A 1952- n. sugar […] [from Russian sákhar]”; exemplo [BERG97]
  // p. 195 (A 1952, N.M. 1:9): “saaxarax̂, mukax̂ saaxarax̂, suxarix̂ ‘sugar, flour [and] sugar,
  // biscuit[s]’”.
  ['saaxarax̂', 'açúcar', 'substantivo', 'Comida', '🍯', 'Saaxarax̂, mukax̂ saaxarax̂, suxarix̂.'],
  // kuufyax̂: p. 246, “kuufya-x̂ E 1950-, A 1950- n. coffee […] [from Russian kófe]”; exemplo [BERG97]
  // p. 222 (A 1978): “kuufyang saaxarax̂ ngaan angax̂tal taangazaq ‘I drink my coffee with sugar added’”.
  ['kuufyax̂', 'café', 'substantivo', 'Comida', '🫘', 'Kuufyang saaxarax̂ ngaan angax̂tal taangazaq.'],
  // mulukax̂: p. 279, “muluka-x̂ E 1909-, A 1840- n. milk […] [from Russian molokó]”.
  ['mulukax̂', 'leite', 'substantivo', 'Comida', '🥛', 'Mulukax̂.'],
  // suulix̂: p. 376, “suuli-x̂ A 1952- n. table salt […] [from Russian sol’]”.
  ['suulix̂', 'sal', 'substantivo', 'Comida', '🧂', 'Suulix̂.'],
  // luusxix̂: p. 258, “luux̂sika-x̂ E 1871-, luusxi-x̂ A 1952- n. spoon”.
  ['luusxix̂', 'colher', 'substantivo', 'Casa', '🥄', 'Luusxix̂.'],
  // unalix: p. 443, “una-lix E 1791-, A 1791- […] vt. to cook, boil (e.g. fish), bake (bread)”; exemplo
  // [BERG97] p. 222 (A 1978): “ulux̂ unal qakus ‘we cooked the meat and ate it’”.
  ['unalix', 'cozinhar', 'verbo', 'Comida', '🍳', 'Ulux̂ unal qakus.'],
  // misal: p. 278, “misa-l A 1840- vt. to stir (as in a bowl) […] [from Russian meshát’]”.
  ['misal', 'mexer', 'verbo', 'Comida', '🌀', 'Misal.'],
  // taangalix: p. 392, “taanga-lix E 1780-, A 1780- […] vi. to drink water; vt. to drink (e.g. milk,
  // mulukax̂; liquor)”; exemplo como em kuufyax̂.
  ['taangalix', 'beber', 'verbo', 'Comida', '🥤', 'Kuufyang saaxarax̂ ngaan angax̂tal taangazaq.'],
  // hyusix: p. 465, “hyut-, hyusix A 1791- […] vt. to pour (e.g. chaanikam nagan taangax̂ water in the
  // kettle); to spill”.
  ['hyusix', 'despejar, servir (líquido)', 'verbo', 'Comida', '🫗', 'Chaanikam nagan taangax̂ hyutikuq.'],
  // chamĝulix: p. 130, “chamĝu-lix A 1838- […] vt. to wash (chakin one's hands […])”; exemplo [BERG97]
  // p. 158 (1950): “chakin taangam qinganagan ilaan chamĝut? ‘do you wash your hands in cold water?’”.
  ['chamĝulix', 'lavar', 'verbo', 'Casa', '🧽', 'Chakin taangam qinganagan ilaan chamĝut?'],
  // taxsalix: p. 382, “taxsa-lix […] 3. E 1834-, A 1952- vt. to put away, to store”; exemplo [DIRKS78]
  // p. 9: “Hitaasazahliguun txin qakatil aguun qan’gim ngaan taxsada” (“After it dries, store it for
  // winter”).
  ['taxsalix', 'guardar', 'verbo', 'Casa', '🗄️', 'Hitaasazahliguun txin qakatil aguun qan’gim ngaan taxsada.'],
  // piichix̂: p. 276, “piichi-x̂ E 1978-, A 1973- n. oven, furnace […] [from Russian pech’]”.
  ['piichix̂', 'forno', 'substantivo', 'Casa', '🔥', 'Piichix̂.'],
  // chadux̂: p. 124, “chadu-x̂ 1. E 1765-, A 1840- […] n. fat, oil (of seal, whale, fish […])”; exemplo
  // como em angan ([DIRKS78] p. 5).
  ['chadux̂', 'óleo; gordura', 'substantivo', 'Comida', '🛢️', 'Taaĝan’gis chadum angan qalgaa qaatunazax̂.'],
  // aangsux̂: p. 90, “aangsu-x̂ A 1791- […] n. berry, especially crowberry, Empetrum nigrum”; exemplo
  // [BERG97] p. 171 (A 1980) e [DIRKS78] p. 5: “aangsus tulkusix̂ ilagaan agulgaaĝutazas ‘berries [are
  // what] fish salad in turn is made with’”.
  ['aangsux̂', 'fruta silvestre (baga)', 'substantivo', 'Comida', '🫐', 'Aangsus tulkusix̂ ilagaan agulgaaĝutazas.'],
  // ── B1.4: antigamente ([BERG94]; frases de Cedor L. Snigaroff, 1952, citadas em [BERG97] como N.M.) ──
  // kadim hadagaan: p. 221, “kadim-hadaan, kadim-hadagaan A 1860- […] formerly, at first”; exemplo
  // [BERG97] p. 237 e p. 202 (A 1952, N.M. 1:1): “kadim hadagaan malgaliin udang anĝaĝiqas ax̂tanas
  // ‘how people lived here in the early days’”.
  ['kadim hadagaan', 'antigamente', 'advérbio', 'Tempo', '📜', 'Kadim hadagaan malgaliin udang anĝaĝiqas ax̂tanas.'],
  // anĝaĝinax̂: p. 74, “anĝaĝina-x̂ […] A 1780-, Au 1909-52 […] somebody, person, pl. people”; exemplo
  // [BERG97] p. 207 (A 1952, N.M. 1:54): “hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas ‘in that
  // way the people lived through the winter without starving, it is said’”.
  ['anĝaĝinax̂', 'alguém, uma pessoa (no plural, as pessoas)', 'substantivo', 'Pessoas', '👥', 'Hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas.'],
  // Kasakax̂: p. 233, “Kasaka-x̂ E 1834-, A 1950- n. Russian”; “Kasakam taangaa A 1952- vodka, lit.
  // Russian water”.
  ['Kasakax̂', 'russo', 'substantivo', 'Pessoas', '🪆', 'Kasakam taangaa.'],
  // praviizax̂: p. 288, “praviiza-x̂ A 1952- n. provisions (Ea), groceries [from Russian províziya]”.
  ['praviizax̂', 'mantimentos', 'substantivo', 'Comida', '🛒', 'Praviizax̂.'],
  // igluqax̂: p. 179, “igluqa-x̂ E 1778-, A 1840- […] n. skin, hide, pelt, leather”; exemplo [BERG97]
  // p. 195 (A 1952, N.M. 1:16): “haakus Unangam chux̂taqangis uliigis, igluqas, an’gim chigdaĝanangis
  // ‘those Aleut clothes, boots, hides, gut parkas’”.
  ['igluqax̂', 'couro', 'substantivo', 'Casa', '🧤', 'Haakus Unangam chux̂taqangis uliigis, igluqas, an’gim chigdaĝanangis.'],
  // chngatux̂: p. 148, “2. chngatu-x̂ E 1778-, A 1772- […] n. sea otter, Enhydra lutris”.
  ['chngatux̂', 'lontra-marinha', 'substantivo', 'Mar', '🦦', 'Chngatux̂.'],
  // tutalix: p. 410, “tuta-lix vt. 1. E 1780-, A 1791- […] to hear; to listen to”; exemplo: “ukux̂talakaĝing
  // amilga tutaangan ax̂takung A 1952 I did not see him but heard his voice”.
  ['tutalix', 'ouvir', 'verbo', 'Verbos', '👂', 'Ukux̂talakaĝing amilga tutaangan ax̂takung.'],
  // haagalix: p. 19, “haaga-lix E 1805- […], A 1840- […] vi. to be hungry; to starve”; exemplo: “qakung
  // alakan haagal gumakuq A 1950 I have nothing to eat and feel hungry”.
  ['haagalix', 'passar fome', 'verbo', 'Verbos', '😩', 'Qakung alakan haagal gumakuq.'],
  // sulilix: p. 376, “suli-lix E 1982-, A 1840- vt. to salt (qax̂ fish, ulux̂ meat) […] [from Russian
  // solít’]”; exemplo [BERG97] p. 90 (A 1952, N.M. 1:43).
  ['sulilix', 'salgar', 'verbo', 'Comida', '🫙', 'Qas sulilgal, qakasxal, huuzuugizangis taxsazaqas ax̂takus.'],
  // qakadgul: p. 300, “qakaadgu-lix E 1909-, qakadgu-l A 1952- vt. to dry several (fish, meat, etc.)”.
  ['qakadgul', 'secar', 'verbo', 'Comida', '🌬️', 'Qakadgul.'],
  // asx̂alix: p. 99, “asx̂a-lix 1. E 1778-, A 1791- […] vi. to die”; exemplo [BERG97] p. 234 (A 1952,
  // N.M. 3:111): “haagal asx̂alanas ‘they starved to death’”.
  ['asx̂alix', 'morrer', 'verbo', 'Verbos', '🪦', 'Haagal asx̂alanas.'],
  // hiilax̂talix: p. 168, “hiilax̂ta-lix E 1804-34, A 1860- (Au 1952) […] vp. 1. to be spoken to; to be said,
  // told about”; exemplo como em anĝaĝinax̂.
  ['hiilax̂talix', 'dizem que (ser dito)', 'verbo', 'Verbos', '🗨️', 'Hagumatal anĝaĝinas qaatulakan qanagzanas hiilax̂tadas.'],
  // aniqdux̂: p. 77, “aniqdu-x̂ E 1804-, A 1780- […] n. child”; exemplo [BERG97] p. 62 (A 1950):
  // “aniqdungis ilax̂tas haagal qidakus ‘their children too starve and cry’”.
  ['aniqdux̂', 'criança', 'substantivo', 'Pessoas', '👶', 'Aniqdungis ilax̂tas haagal qidakus.'],
  // qidalix: p. 316, “qida-lix E 1780-, A 1780- […] vi. to cry, weep”; exemplo como em aniqdux̂.
  ['qidalix', 'chorar', 'verbo', 'Verbos', '😢', 'Aniqdungis ilax̂tas haagal qidakus.'],
];

export const VOCAB_ALE = buildVocab('ale', ROWS);
