import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do iúpique do Alasca central (ISO 639-3 esu; Yugtun, Yup'ik), a maior das línguas
 * indígenas do Alasca, do ramo iúpique da família esquimó-aleúte. Grafia: o alfabeto latino do Alaska
 * Native Language Center (Irene Reed e outros, anos 1960), em que “c” soa “tch”, “e” é uma vogal
 * neutra (/ə/), “g” e “r” são sons arranhados da garganta e o apóstrofo dobra a consoante (Yup'ik). O
 * padrão do curso é o iúpique central geral (Yugtun), o do delta do Yukon e do Kuskokwim.
 *
 * Fontes, conferidas palavra por palavra:
 *   [ANLC] Alaska Native Language Center, Universidade do Alasca em Fairbanks, página “Central
 *          Yup'ik” (uaf.edu/anlc/languages-move/centralakyupik.php, consultada em 10/10/2026):
 *          cumprimentos (“cama-i”, “waqaa”, “cangacit?”, “assirtua”, “quyana”, “piura”) e a lista de
 *          nomes de cachorro (“arrluk”, “cikuq”, “taqukaq”, “tulukaruk”…).
 *   [WIKT] Wikcionário em inglês, verbetes do iúpique (categoria “Yup'ik lemmas”, 226 verbetes,
 *          baixada em 10/10/2026). Cada linha cita o verbete (“s.v. …”); os exemplos de frase são os
 *          dos próprios verbetes, com a tradução deles.
 *   [WIKI] Wikipédia em inglês, «Central Alaskan Yupʼik» (consultada em 10/10/2026): as frases da
 *          seção de gramática (“Angyaq tak'uq”, “Neqengqertua”, “Assikaqa”, “Nerellruuq”) e
 *          “kipusvik”; e «Nunivak Cupʼig language», a tabela dos números nos três dialetos.
 *
 * Verbos: entram na forma em que a fonte os traz (3ª pessoa, “qalartuq”, fala; ou 1ª, “assirtua”, estou
 * bem). A tradução começa pelo infinitivo, para achar a mesma imagem das outras línguas.
 */
export const ROWS: VocabRow[] = [
  // Expressões ([ANLC]; “ii-i”: tabela de traduções de “yes” do [WIKT]; as outras frases: [WIKT] s.v.
  // “Yugcetun qanerciigataqa”, “qavcinek allrakungqercit”, “allrakungqertua”, “cass'aq”, “ataki”, “ilumun”)
  ['Waqaa', 'oi (e aí?)', 'interjeição', 'Expressões', '👋', 'Waqaa! Cangacit?'],
  ['Cama-i', 'olá (que bom te ver)', 'interjeição', 'Expressões', '🤗', 'Cama-i!'],
  ['Cangacit?', 'como vai?', 'expressão', 'Expressões', '🙂', 'Cangacit?'],
  ['Assirtua', 'estou bem', 'expressão', 'Expressões', '😊', 'Assirtua. Quyana.'],
  ['Quyana', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Quyana!'],
  ['Quyana tailuci', 'bem-vindos (obrigado por virem)', 'expressão', 'Expressões', '🚪', 'Quyana tailuci!'],
  ['Piura', 'tchau', 'interjeição', 'Expressões', '🚶', 'Piura!'],
  ['ii-i', 'sim', 'interjeição', 'Expressões', '👍', 'Ii-i.'],
  ['Alussistuaqegcikici', 'feliz Natal', 'expressão', 'Expressões', '🎄', 'Alussistuaqegcikici!'],
  ['Yugcetun qanerciigataqa', 'não falo iúpique', 'expressão', 'Expressões', '🤷', 'Yugcetun qanerciigataqa.'],
  ['Qavcinek allrakungqercit?', 'quantos anos você tem?', 'expressão', 'Expressões', '🎂', 'Qavcinek allrakungqercit?'],
  ['allrakungqertua', 'tenho … anos', 'expressão', 'Expressões', '🕯️', 'Yuinaqek allrakungqertua.'],
  ['Qavcinun kaugta cass\'aq?', 'que horas são?', 'expressão', 'Expressões', '🕰️', 'Qavcinun kaugta cass\'aq?'],
  ['ataki', 'olha só!, deixa eu ver!', 'interjeição', 'Expressões', '👀', 'Ataki tauna tangercetqerru.'],
  ['ilumun', 'de verdade, realmente', 'advérbio', 'Expressões', '✔️', 'Ilumun.'],
  // Pessoas ([WIKT] s.v. “yuk”, “angun”, “arnaq”, “aata”, “panik”, “piipiq”, “angak”, “kass'aq”, “ateq”)
  ['yuk', 'pessoa (Yup\'ik é “yuk” + “pik”, a pessoa de verdade)', 'substantivo', 'Pessoas', '🧑', 'Yuk.'],
  ['angun', 'homem', 'substantivo', 'Pessoas', '👨', 'Angun.'],
  ['arnaq', 'mulher', 'substantivo', 'Pessoas', '👩', 'Arnaq.'],
  ['aata', 'pai', 'substantivo', 'Pessoas', '👨‍🦳', 'Aata.'],
  ['panik', 'filha', 'substantivo', 'Pessoas', '👧', 'Panik.'],
  ['piipiq', 'bebê', 'substantivo', 'Pessoas', '👶', 'Piipiq.'],
  ['angak', 'tio (irmão da mãe)', 'substantivo', 'Pessoas', '🧔', 'Angak.'],
  ['kass\'aq', 'pessoa branca', 'substantivo', 'Pessoas', '🧑‍🦰', 'Kass\'aq.'],
  ['atqa', 'meu nome', 'substantivo', 'Pessoas', '📛', 'Atqa.'],
  ['atren', 'seu nome', 'substantivo', 'Pessoas', '🏷️', 'Atren.'],
  // Natureza ([WIKT] s.v. “nuna”, “imarpik”, “iraluq”, “erneq”, “allrakuq”, “meq”, “qaiq”, “penguq”,
  // “akwaugaq”; [ANLC] “cikuq”)
  ['nuna', 'terra; a Terra', 'substantivo', 'Natureza', '🌍', 'Nuna.'],
  ['imarpik', 'mar', 'substantivo', 'Natureza', '🌊', 'Imarpik.'],
  ['iraluq', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Iraluq.'],
  ['erneq', 'dia', 'substantivo', 'Natureza', '📅', 'Erneq.'],
  ['allrakuq', 'ano', 'substantivo', 'Natureza', '🗓️', 'Allrakuq.'],
  ['meq', 'água', 'substantivo', 'Natureza', '💧', 'Meq.'],
  ['cikuq', 'gelo', 'substantivo', 'Natureza', '🧊', 'Cikuq.'],
  ['qaiq', 'onda', 'substantivo', 'Natureza', '〰️', 'Qaiq.'],
  ['penguq', 'morro', 'substantivo', 'Natureza', '⛰️', 'Penguq.'],
  ['akwaugaq', 'ontem', 'advérbio', 'Natureza', '⏪', 'Akwaugaq.'],
  // Animais ([WIKT] s.v. “qimugta”, “tuntu”, “tuntuvak”, “asveq”, “maklak”, “nayiq”, “kaviaq”, “kegluneq”,
  // “neqa”; [ANLC] “arrluk”, “taqukaq”, “tulukaruk”, “qimugkauyar”)
  ['qimugta', 'cachorro (lit. “o que puxa”)', 'substantivo', 'Animais', '🐕', 'Qimugta.'],
  ['qimugkauyar', 'filhote de cachorro', 'substantivo', 'Animais', '🐶', 'Qimugkauyar.'],
  ['tuntu', 'caribu (rena)', 'substantivo', 'Animais', '🦌', 'Tuntu.'],
  ['tuntuvak', 'alce (lit. “caribu grande”)', 'substantivo', 'Animais', '🫎', 'Tuntuvak.'],
  ['asveq', 'morsa', 'substantivo', 'Animais', '🦭', 'Asveq.'],
  ['maklak', 'foca-barbuda', 'substantivo', 'Animais', '🦦', 'Maklak.'],
  ['nayiq', 'foca-anelada', 'substantivo', 'Animais', '🐾', 'Nayiq.'],
  ['kaviaq', 'raposa-vermelha', 'substantivo', 'Animais', '🦊', 'Kaviaq.'],
  ['kegluneq', 'lobo', 'substantivo', 'Animais', '🐺', 'Kegluneq.'],
  ['arrluk', 'orca', 'substantivo', 'Animais', '🐋', 'Arrluk.'],
  ['taqukaq', 'urso-pardo', 'substantivo', 'Animais', '🐻', 'Taqukaq.'],
  ['tulukaruk', 'corvo', 'substantivo', 'Animais', '🐦‍⬛', 'Tulukaruk.'],
  ['neqa', 'peixe; comida', 'substantivo', 'Animais', '🐟', 'Neqengqertua.'],
  // Casa e coisas ([WIKT] s.v. “ne”, “angyaq”, “ikamraq”, “uluaq”, “pelatekaq”, “kalikaq”, “kalantaassaaq”,
  // “estuuluq”, “caskaq”, “luuskaaq”, “uil'kaq”, “kaminiaq”, “tengssuun”, “elitnaurvik”, “lumarraq”,
  // “cap'akiq”, “putuskaq”, “cass'aq”, “kitalaq”; [WIKI] “kipusvik”)
  ['ne', 'casa', 'substantivo', 'Casa', '🏠', 'Ne.'],
  ['angyaq', 'barco', 'substantivo', 'Casa', '🚣', 'Angyaq tak\'uq.'],
  ['ikamraq', 'trenó de cachorros; snowmobile', 'substantivo', 'Casa', '🛷', 'Ikamraq.'],
  ['uluaq', 'ulu (a faca em meia-lua das mulheres)', 'substantivo', 'Casa', '🔪', 'Uluaq.'],
  ['pelatekaq', 'barraca', 'substantivo', 'Casa', '⛺', 'Pelatekaq.'],
  ['kalikaq', 'papel', 'substantivo', 'Casa', '📄', 'Kalikaq.'],
  ['kalantaassaaq', 'lápis', 'substantivo', 'Casa', '✏️', 'Kalantaassaaq.'],
  ['estuuluq', 'mesa', 'substantivo', 'Casa', '🪑', 'Estuuluq.'],
  ['caskaq', 'xícara', 'substantivo', 'Casa', '☕', 'Caskaq.'],
  ['luuskaaq', 'colher', 'substantivo', 'Casa', '🥄', 'Luuskaaq.'],
  ['uil\'kaq', 'garfo', 'substantivo', 'Casa', '🍴', 'Uil\'kaq.'],
  ['kaminiaq', 'fogão (de aquecer e cozinhar)', 'substantivo', 'Casa', '🔥', 'Kaminiaq.'],
  ['tengssuun', 'avião', 'substantivo', 'Casa', '✈️', 'Tengssuun.'],
  ['elitnaurvik', 'escola', 'substantivo', 'Casa', '🏫', 'Elitnaurvik.'],
  ['kipusvik', 'loja (lit. “lugar de comprar”)', 'substantivo', 'Casa', '🏪', 'Kipusvik.'],
  ['lumarraq', 'camisa', 'substantivo', 'Casa', '👕', 'Lumarraq.'],
  ['cap\'akiq', 'sapato, bota', 'substantivo', 'Casa', '🥾', 'Cap\'akiq.'],
  ['putuskaq', 'travesseiro', 'substantivo', 'Casa', '🛏️', 'Putuskirluni qavartuq.'],
  ['cass\'aq', 'relógio; hora', 'substantivo', 'Casa', '⌚', 'Qavcinun kaugta cass\'aq?'],
  ['kitalaq', 'violão', 'substantivo', 'Casa', '🎸', 'Kitalaq kalguraa.'],
  // Comida ([WIKT] s.v. “kelipaq”, “caayuq”, “caarralaq”, “muluk'uuq”, “kantuuvvilaq”, “akutaq”,
  // “atsalugpiaq”, “alatiq”)
  ['kelipaq', 'pão', 'substantivo', 'Comida', '🍞', 'Kelipaq.'],
  ['caayuq', 'chá', 'substantivo', 'Comida', '🍵', 'Caayuq.'],
  ['caarralaq', 'açúcar', 'substantivo', 'Comida', '🍬', 'Caarralaq.'],
  ['muluk\'uuq', 'leite', 'substantivo', 'Comida', '🥛', 'Muluk\'uuq.'],
  ['kantuuvvilaq', 'batata', 'substantivo', 'Comida', '🥔', 'Kantuuvvilaq.'],
  ['akutaq', 'akutaq (mistura de frutinhas, açúcar, gordura de foca, peixe e neve)', 'substantivo', 'Comida', '🍨', 'Akutaq.'],
  ['atsalugpiaq', 'amora-branca (cloudberry)', 'substantivo', 'Comida', '🍓', 'Atsalugpiaq.'],
  ['alatiq', 'pão frito', 'substantivo', 'Comida', '🥯', 'Alatiq.'],
  // Verbos ([WIKT] s.v. “qalartuq”, “elitnaurtuq”, “caliuq”; “qavartuq” no exemplo de “putuskaq”; [WIKI]
  // “nerellruuq”, “assikaqa”, “neqengqertua”)
  ['qalartuq', 'falar (ele, ela fala)', 'verbo', 'Verbos', '🗣️', 'Qalartuq.'],
  ['elitnaurtuq', 'estudar; ensinar (ele, ela estuda)', 'verbo', 'Verbos', '📚', 'Elitnaurtuq.'],
  ['caliuq', 'fazer (ele, ela faz)', 'verbo', 'Verbos', '🛠️', 'Caliuq.'],
  ['qavartuq', 'dormir (ele, ela dorme)', 'verbo', 'Verbos', '😴', 'Putuskirluni qavartuq.'],
  ['nerellruuq', 'comer (ele, ela comeu)', 'verbo', 'Verbos', '🍽️', 'Nerellruuq.'],
  ['assikaqa', 'gostar (eu gosto disso)', 'verbo', 'Verbos', '❤️', 'Assikaqa.'],
  ['neqengqertua', 'ter peixe (eu tenho peixe)', 'verbo', 'Verbos', '🎣', 'Neqengqertua.'],
  // Números ([WIKT] s.v. “atauciq”, “malruk”, “pingayun”, “cetaman”, “talliman”, “arvinlegen”,
  // “malrunlegen”, “pingayunlegen”, “qulngunritaraan”, “qula”, “akimiaq”; “yuinaq”: [WIKI] tabela)
  ['atauciq', 'um', 'numeral', 'Números', '1️⃣', 'Atauciq.'],
  ['malruk', 'dois', 'numeral', 'Números', '2️⃣', 'Malruk.'],
  ['pingayun', 'três', 'numeral', 'Números', '3️⃣', 'Pingayun.'],
  ['cetaman', 'quatro', 'numeral', 'Números', '4️⃣', 'Cetaman.'],
  ['talliman', 'cinco', 'numeral', 'Números', '5️⃣', 'Talliman.'],
  ['arvinlegen', 'seis', 'numeral', 'Números', '6️⃣', 'Arvinlegen.'],
  ['malrunlegen', 'sete', 'numeral', 'Números', '7️⃣', 'Malrunlegen.'],
  ['pingayunlegen', 'oito', 'numeral', 'Números', '8️⃣', 'Pingayunlegen.'],
  ['qulngunritaraan', 'nove', 'numeral', 'Números', '9️⃣', 'Qulngunritaraan.'],
  ['qula', 'dez', 'numeral', 'Números', '🔟', 'Qula.'],
  ['akimiaq', 'quinze', 'numeral', 'Números', '🔢', 'Akimiaq.'],
  ['yuinaq', 'vinte', 'numeral', 'Números', '🧍', 'Yuinaqek allrakungqertua.'],
];

export const VOCAB_ESU = buildVocab('esu', ROWS);
