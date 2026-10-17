import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do alutiiq (ISO 639-3 ems; Sugpiaq, Sugcestun), a língua iúpique da costa do golfo do
 * Alasca: a ilha Kodiak, a península do Alasca, a península Kenai e o estreito do Príncipe Guilherme.
 * Grafia: o alfabeto latino moderno, em que “c” soa “tch”, “e” é uma vogal neutra (/ə/), “g” e
 * “r” são sons raspados da garganta, “ʀ” é um “r” vibrado e “ll” é um “l” soprado.
 *
 * Fontes, conferidas palavra por palavra:
 *   [WIKT] Wikcionário em inglês, verbetes do alutiiq (categoria “Alutiiq lemmas”, 84 verbetes, baixada
 *          em 10/10/2026). Cada linha cita o verbete (“s.v. …”); as frases são os exemplos dos próprios
 *          verbetes, com a tradução deles.
 *   [WIKI] Wikipédia em inglês, «Alutiiq language» (consultada em 10/10/2026): os dois dialetos, o
 *          alfabeto e a tabela dos números e dos meses (a coluna do koniag, o padrão do curso).
 *   [ANLC] Alaska Native Language Center, página “Alutiiq / Sugpiaq” (consultada em 10/10/2026):
 *          “cama'i” (olá) e “quyanaa” (obrigado); cerca de 400 falantes.
 */
export const ROWS: VocabRow[] = [
  // Expressões ([ANLC]; [WIKT] s.v. “cama’i”, “quyanaa”, “canaituq”, “quyanaituq”, “ca”, “ai?”, “awa ai”, “angli”)
  ['Cama’i', 'oi, olá', 'interjeição', 'Expressões', '👋', 'Cama’i!'],
  ['Quyanaa', 'obrigado(a)', 'interjeição', 'Expressões', '🙏', 'Quyanaa!'],
  ['Canaituq', 'de nada; não tem problema', 'expressão', 'Expressões', '😌', 'Canaituq.'],
  ['Quyanaituq', 'de nada', 'expressão', 'Expressões', '🤲', 'Quyanaituq.'],
  ['Ca', 'não sei', 'expressão', 'Expressões', '🤷', 'Cacaq ang’aqurtau’u? — Ca.'],
  ['Ai?', 'hein? o que você disse?', 'interjeição', 'Expressões', '👂', 'Ai?'],
  ['Awa ai?', 'é só isso?', 'expressão', 'Expressões', '🔚', 'Awa ai?'],
  ['angli', 'muito; mais!', 'advérbio', 'Expressões', '➕', 'Asikaqa angli.'],
  // Pessoas ([WIKT] s.v. “suk”, “arnaq”, “alqaq”, “anngaq”, “acak”, “anaanaa”)
  ['suk', 'pessoa (Sugpiaq é “suk” + “-piaq”, a pessoa de verdade)', 'substantivo', 'Pessoas', '🧑', 'Suk.'],
  ['arnaq', 'mulher', 'substantivo', 'Pessoas', '👩', 'Arnaq.'],
  ['alqaq', 'irmã mais velha', 'substantivo', 'Pessoas', '👧', 'Alqaq.'],
  ['anngaq', 'irmão mais velho', 'substantivo', 'Pessoas', '👦', 'Anngaq.'],
  ['acak', 'tia (irmã do pai)', 'substantivo', 'Pessoas', '👩‍🦰', 'Acak.'],
  ['anaanaa', 'tia (irmã da mãe)', 'substantivo', 'Pessoas', '👩‍🦳', 'Anaanaa.'],
  // Natureza ([WIKT] s.v. “macaq”, “iraluq”, “mit'aq”, “naniyaq”, “taanngaq”, “weg'et”, “cillqaq”, “qarusiq”, “gahnguq”)
  ['macaq', 'sol', 'substantivo', 'Natureza', '☀️', 'Macaq.'],
  ['iraluq', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Qanim Iralua.'],
  ['mit’aq', 'estrela', 'substantivo', 'Natureza', '⭐', 'Mit’aq.'],
  ['naniyaq', 'relâmpago', 'substantivo', 'Natureza', '⚡', 'Naniyaq.'],
  ['taanngaq', 'água', 'substantivo', 'Natureza', '💧', 'Taanngaq.'],
  ['weg’et', 'capim', 'substantivo', 'Natureza', '🌾', 'Weg’et.'],
  ['cillqaq', 'epilóbio (a flor fireweed)', 'substantivo', 'Natureza', '🌸', 'Cillqaq.'],
  ['qarusiq', 'cedro-vermelho', 'substantivo', 'Natureza', '🌲', 'Qarusiq.'],
  ['gahnguq', 'kelp (a alga gigante)', 'substantivo', 'Natureza', '🌿', 'Gahnguq.'],
  ['uqaayanaq', 'urtiga', 'substantivo', 'Natureza', '🌱', 'Uqaayanaq.'],
  // Animais ([WIKT] s.v. “arlluk”, “amikuq”, “sagiq”, “saakelaq”, “uskaanaq”, “kuskaq”, “qamaquq”, “qapilaq”, “uutuq”)
  ['arlluk', 'orca', 'substantivo', 'Animais', '🐋', 'Arlluk.'],
  ['amikuq', 'polvo', 'substantivo', 'Animais', '🐙', 'Amikuq.'],
  ['sagiq', 'linguado (halibute)', 'substantivo', 'Animais', '🐟', 'Sagiq.'],
  ['saakelaq', 'tomcod (um bacalhau pequeno)', 'substantivo', 'Animais', '🐠', 'Saakelaq.'],
  ['uskaanaq', 'coelho', 'substantivo', 'Animais', '🐇', 'Uskaanaq.'],
  ['kuskaq', 'gato', 'substantivo', 'Animais', '🐈', 'Kuskaq.'],
  ['qamaquq', 'berbigão', 'substantivo', 'Animais', '🐚', 'Qamaquq.'],
  ['qapilaq', 'mexilhão', 'substantivo', 'Animais', '🦪', 'Qapilaq.'],
  ['uutuq', 'ouriço-do-mar', 'substantivo', 'Animais', '🦔', 'Uutuq.'],
  // Casa e coisas ([WIKT] s.v. “engluq”, “gaaleq”, “qayaq”, “nehusiq”, “casaaq”, “caskaq”, “stakanaq”, “cainiq”,
  // “laugka”, “niuwasuuteq”, “paltuuk”, “slaapaq”, “fanaʀuq”, “witʀuuq”, “amiq”)
  ['engluq', 'casa', 'substantivo', 'Casa', '🏠', 'Engluq.'],
  ['gaaleq', 'janela', 'substantivo', 'Casa', '🪟', 'Gaaleq.'],
  ['qayaq', 'baidarka (o caiaque de madeira e pele de leão-marinho)', 'substantivo', 'Casa', '🛶', 'Qayaq.'],
  ['nehusiq', 'faca', 'substantivo', 'Casa', '🔪', 'Nehusiq.'],
  ['casaaq', 'relógio', 'substantivo', 'Casa', '⌚', 'Casaaq.'],
  ['caskaq', 'xícara', 'substantivo', 'Casa', '☕', 'Caskaq.'],
  ['stakanaq', 'copo', 'substantivo', 'Casa', '🥛', 'Stakanaq.'],
  ['cainiq', 'chaleira, bule', 'substantivo', 'Casa', '🫖', 'Cainiq.'],
  ['laugka', 'loja', 'substantivo', 'Casa', '🏪', 'Laugka.'],
  ['niuwasuuteq', 'telefone', 'substantivo', 'Casa', '☎️', 'Niuwasuuteq.'],
  ['paltuuk', 'casaco', 'substantivo', 'Casa', '🧥', 'Paltuuk.'],
  ['slaapaq', 'chapéu', 'substantivo', 'Casa', '👒', 'Slaapaq.'],
  ['fanaʀuq', 'lanterna', 'substantivo', 'Casa', '🏮', 'Fanaʀuq.'],
  ['witʀuuq', 'balde', 'substantivo', 'Casa', '🪣', 'Witʀuuq.'],
  ['amiq', 'pele, couro', 'substantivo', 'Casa', '🧶', 'Amiq.'],
  // Comida ([WIKT] s.v. “cayuq”, “kelipaq”, “masla”, “saalaq”, “haatkiik”, “akagwik”, “alagnaq”, “amaryaq”, “augyaq”)
  ['cayuq', 'chá', 'substantivo', 'Comida', '🍵', 'Cayuq.'],
  ['kelipaq', 'pão', 'substantivo', 'Comida', '🍞', 'Kelipaq.'],
  ['masla', 'manteiga', 'substantivo', 'Comida', '🧈', 'Masla.'],
  ['saalaq', 'gordura, banha', 'substantivo', 'Comida', '🥓', 'Saalaq.'],
  ['haatkiik', 'panqueca', 'substantivo', 'Comida', '🥞', 'Haatkiik.'],
  ['akagwik', 'amora-branca (cloudberry)', 'substantivo', 'Comida', '🍓', 'Akagwik.'],
  ['alagnaq', 'framboesa-do-salmão (salmonberry)', 'substantivo', 'Comida', '🫐', 'Alagnaq.'],
  ['amaryaq', 'oxicoco (cranberry)', 'substantivo', 'Comida', '🍒', 'Amaryaq.'],
  ['augyaq', 'camarinha (crowberry)', 'substantivo', 'Comida', '🫒', 'Augyaq.'],
  // Como está ([WIKT] s.v. “asirluni”, “maqarluni”, “pat’snarluni”, “qenaluni”, “sakaarlluni”)
  ['asirluni', 'estar bem; ser bom', 'verbo', 'Verbos', '😊', 'Taata Paluwigmek tekitellria asirluni?'],
  ['maqarluni', 'estar quente', 'verbo', 'Verbos', '🔥', 'Aluuwimi unuarpak maqarluni macartuq.'],
  ['pat’snarluni', 'estar frio (o tempo)', 'verbo', 'Verbos', '🥶', 'Sun’ami enerpak pat’snarluni macartuq.'],
  ['qenaluni', 'estar doente', 'verbo', 'Verbos', '🤒', 'Picinek-qaa una uswiillraraaq englumen taillria qenaluni?'],
  ['sakaarlluni', 'estar cansado', 'verbo', 'Verbos', '😴', 'Litnaurwigmen agellrianga sakaarlluni unuaka’arpak.'],
  // Números (o koniag: [WIKI] tabela dos números; [WIKT] s.v. “pingayun”, “staaman”, “talliman”, “arwilgen”,
  // “mallrungin”, “inglulgen”, “qulnguyan”, “qulen”, “suinaq”)
  ['allringuq', 'um', 'numeral', 'Números', '1️⃣', 'Allringuq.'],
  ['mal’uk', 'dois', 'numeral', 'Números', '2️⃣', 'Mal’uk.'],
  ['pingayun', 'três', 'numeral', 'Números', '3️⃣', 'Pingayun.'],
  ['staaman', 'quatro', 'numeral', 'Números', '4️⃣', 'Staaman.'],
  ['talliman', 'cinco', 'numeral', 'Números', '5️⃣', 'Talliman.'],
  ['arwilgen', 'seis', 'numeral', 'Números', '6️⃣', 'Arwilgen.'],
  ['mallrungin', 'sete', 'numeral', 'Números', '7️⃣', 'Mallrungin.'],
  ['inglulgen', 'oito', 'numeral', 'Números', '8️⃣', 'Inglulgen.'],
  ['qulnguyan', 'nove', 'numeral', 'Números', '9️⃣', 'Qulnguyan.'],
  ['qulen', 'dez', 'numeral', 'Números', '🔟', 'Qulen.'],
  ['suinaq', 'vinte', 'numeral', 'Números', '🧍', 'Suinaq.'],

  // ══ A2.1 e A2.2 (17/10/2026) ══
  // [KALT] April Isiik G. L. Counceller e Dehrich Isuwiq Chya (orgs.), “Kodiak Alutiiq Language Textbook”
  //        (Sun’aq Tribe of Kodiak e Alutiiq Museum, 2023), PDF aberto no site do Alutiiq Museum; cito a
  //        página impressa (a do PDF menos 16). [FRASES] April G. L. Counceller, com revisão de Jeff Leer,
  //        “Kodiak Alutiiq Conversational Phrasebook” (Alutiiq Museum, 2006), página impressa. [WOTW] Alutiiq
  //        Museum, “Alutiiq Word of the Week” (alutiiqmuseum.org/collection/Detail/word/<número>).
  // Grafia dos livros (estilo norte de Kodiak, o primeiro que eles dão; o do sul vem marcado). Única
  // conversão: o “R” maiúsculo dos livros, o r vibrado das palavras russas, vira “ʀ”, como no resto do
  // curso (kaaRaq → kaaʀaq). Os verbos vêm na forma de dicionário, em -luni, como no A1.
  // A2.1 — pessoas e bichos ([KALT] p. 30, “Sixteen Common Nouns”; aikuq (N) / piugta (S), p. 5 e 30)
  ['nukallpiaq', 'homem', 'substantivo', 'Pessoas', '👨', 'Nukallpiaq ner’uq.'],
  ['tan’uraq', 'menino', 'substantivo', 'Pessoas', '👦', 'Tan’uraq kuingtuq.'],
  ['arya’aq', 'menina', 'substantivo', 'Pessoas', '👧', 'Arya’aq naaqiyuq.'],
  ['taquka’aq', 'urso', 'substantivo', 'Animais', '🐻', 'Taquka’aq kuimartuq.'],
  ['iqalluk', 'peixe', 'substantivo', 'Animais', '🐟', 'Iqalluk kuimartuq.'],
  ['aikuq', 'cachorro', 'substantivo', 'Animais', '🐕', 'Aikuq qia’uq.'],
  ['kum’agyak', 'águia', 'substantivo', 'Animais', '🦅', 'Kum’agyak qawartuq.'],
  // A2.1 — verbos ([KALT] p. 33, os doze verbos básicos; formas em -luni: p. 34, tabela 9, e p. 114;
  // naaqiluni: p. 58, tabela 17; silugluni: p. 130). As frases de exemplo são as da p. 35–37.
  ['kuinglluni', 'andar', 'verbo', 'Verbos', '🚶', 'Arnaq kuingtuq.'],
  ['qecengluni', 'correr', 'verbo', 'Verbos', '🏃', 'Nukallpiaq qecenguq.'],
  ['aqumluni', 'sentar-se', 'verbo', 'Verbos', '🪑', 'Arnaq aqum’auq.'],
  ['qawarluni', 'dormir', 'verbo', 'Verbos', '💤', 'Nukallpiaq qawartuq.'],
  ['kuimarluni', 'nadar', 'verbo', 'Verbos', '🏊', 'Arya’aq kuimartuq.'],
  ['nerluni', 'comer', 'verbo', 'Verbos', '🍽️', 'Arnaq ner’uq.'],
  ['agnguarluni', 'dançar', 'verbo', 'Verbos', '💃', 'Arnaq agnguartuq.'],
  ['naaqiluni', 'ler', 'verbo', 'Verbos', '📖', 'Nukallpiaq naaqiyuq.'],
  ['qialuni', 'chorar', 'verbo', 'Verbos', '😢', 'Arya’aq qia’uq.'],
  ['silugluni', 'estar feliz', 'verbo', 'Verbos', '😄', 'Gui silugtua.'],
  // A2.1 — pronomes ([KALT] p. 48, gui, ellpet; p. 49, una; p. 68, kina)
  ['gui', 'eu', 'pronome', 'Pessoas', '🙋', 'Gui silugtua.'],
  ['ellpet', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Ellpet kumegtuten.'],
  ['una', 'este, esta, isto', 'pronome', 'Expressões', '👇', 'Una yaamaq.'],
  ['kina', 'quem', 'pronome', 'Expressões', '❔', 'Kina taugna?'],
  // A2.2 — família ([KALT] p. 118, “Family Terms”; [FRASES] p. 4–5: maama e taata são as formas de
  // chamar a pessoa; ilanka, “minha família”)
  ['maama', 'mãe', 'substantivo', 'Família', '👩', 'Maamaqa Susan. Sun’amisuumallria.'],
  ['taata', 'pai', 'substantivo', 'Família', '👨‍🦳', 'Taataqa Bob. Anchorage-misuumallria.'],
  ['emaa', 'avó', 'substantivo', 'Família', '👵', 'Emaaqa Sally.'],
  ['apaa', 'avô', 'substantivo', 'Família', '👴', 'Apaaqa.'],
  ['uyuwaq', 'irmão ou irmã mais novo(a)', 'substantivo', 'Família', '🧒', 'Pingayunek uyuwanq’rtua.'],
  ['paniyaq', 'filha', 'substantivo', 'Família', '👧🏽', 'Paniyaqa Anchorage-mi etaartuq.'],
  ['awaqutaq', 'filho', 'substantivo', 'Família', '👦🏽', 'Awaqutaqa Adak-mi pektaartuq.'],
  ['angaa', 'tio (irmão da mãe)', 'substantivo', 'Família', '🧔', 'Angaaqa.'],
  ['ilanka', 'minha família', 'substantivo', 'Família', '👨‍👩‍👧‍👦', 'Ilanka asirtut.'],
  // A2.2 — lugares ([KALT] p. 31 e 91, nuna; p. 31, qik’rtaq; p. 33, kuik; [WOTW] 111, quteq; p. 61 e
  // [FRASES] p. 13, “Qutmen agkutartukut”)
  ['nuna', 'terra; aldeia', 'substantivo', 'Natureza', '🏘️', 'Nunami.'],
  ['qik’rtaq', 'ilha', 'substantivo', 'Natureza', '🏝️', 'Qik’rtaq.'],
  ['kuik', 'rio', 'substantivo', 'Natureza', '🏞️', 'Kuigmen.'],
  ['quteq', 'praia', 'substantivo', 'Natureza', '🏖️', 'Arnat qutmi et’ut.'],
  // A2.2 — o tempo ([KALT] p. 146, “Time Nouns”; frases da p. 147)
  ['erneq', 'dia', 'substantivo', 'Tempo', '📅', 'Ernerpak gui silugtuanga.'],
  ['unuaq', 'manhã; amanhã', 'substantivo', 'Tempo', '🌅', 'Unuami nerellrianga.'],
  ['akgua’aq', 'fim da tarde; ontem', 'substantivo', 'Tempo', '🌇', 'Akgua’aqu tang’rciqamken.'],
  ['unuk', 'noite', 'substantivo', 'Tempo', '🌃', 'Unugmi qawarciqua.'],
  ['kiak', 'verão', 'substantivo', 'Tempo', '🌞', 'Kianra qayaryartaartukut.'],
  ['uksuq', 'inverno', 'substantivo', 'Tempo', '❄️', 'Uksuqu.'],
  ['uksuaq', 'outono', 'substantivo', 'Tempo', '🍂', 'Uksuaq.'],
  ['ugnerkaq', 'primavera', 'substantivo', 'Tempo', '🌷', 'Ugnerkaq.'],
];

export const VOCAB_EMS = buildVocab('ems', ROWS);
