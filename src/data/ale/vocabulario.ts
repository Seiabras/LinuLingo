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
];

export const VOCAB_ALE = buildVocab('ale', ROWS);
