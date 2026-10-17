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
 *
 * Revisão do A1 (17/10/2026): muitos verbetes de alutiiq do [WIKT] citam só J. E. Smelcer, “Alutiiq Noun
 * Dictionary and Pronunciation Guide” (2011), obra contestada. Conferi as palavras do A1 com as fontes
 * de Kodiak (as mesmas do A2, abaixo): [KALT], [FRASES], [WOTW] e [DIC] Alisha S. Drabek (org. April
 * G. L. Counceller), “Qik’rtarmiut Alutiit’stun Niugneret KRaasiirkii — Color Kodiak Alutiiq Words”
 * (Native Village of Afognak e Alutiiq Museum, 2012), o dicionário ilustrado, pela página dele. As que
 * divergiam passaram para a grafia de Kodiak, sem mudar a posição da linha (o id vem da posição):
 * acak → acaa ([KALT] p. 118), mit’aq → agyaq ([WOTW] 475 e [DIC] p. 25: “mit’aq” só em Karluk),
 * taanngaq → taangaq ([WOTW] 530, [DIC] p. 22), qarusiq → qar’usiq ([WOTW] 418), gahnguq → nasquluk
 * ([WOTW] 138, [DIC] p. 34: a palavra de Kodiak para o kelp), uskaanaq → kuskaanaq ([WOTW] 270, [DIC]
 * p. 33), qamaquq → qahmaquq ([WOTW] 165), uutuq → uutuk ([WOTW] 437, [DIC] p. 29), nehusiq → nuusiq
 * ([DIC] p. 18; [FRASES] p. 22, “Nuusimek kilillrianga”), stakanaq → stakaanaq ([DIC] p. 18), cainiq →
 * cainiik ([WOTW] 306, [DIC] p. 22), laugka → laug’kaaq ([DIC] p. 42; no sul, laaf’kaaq), paltuuk →
 * pal’tuuk ([DIC] p. 13, o sobretudo comprido), witʀuuq → wiit’ʀuuq ([DIC] p. 16), cayuq → caayuq
 * ([WOTW] 495, [KALT] p. 70), kelipaq → gleipaq ([WOTW] 136: gleipaq no norte, lliipaq no sul), masla →
 * maslaq ([DIC] p. 18), haatkiik → aat’kiit ([DIC] p. 21, “pancakes”). O “amaryaq” é o “highbush
 * cranberry” ([WOTW] 277: amarsaq no norte, amaryaq no sul), não o oxicoco. Sem confirmação nas fontes
 * de Kodiak, mas sem forma divergente nelas, ficaram como no [WIKT]: naniyaq, saakelaq, saalaq, “Ca”
 * (não sei; [FRASES] p. 3 dá “Nalluwaqa”, “não sei isso”) e os exemplos de asirluni, qenaluni e
 * sakaarlluni. Os exemplos de maqarluni e pat’snarluni vêm agora de [KALT] p. 38 e p. 96.
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
  // Pessoas ([WIKT] s.v. “suk”, “arnaq”, “alqaq”, “anngaq”, “acak”, “anaanaa”; acaa e anaanaa, [KALT] p. 118)
  ['suk', 'pessoa (Sugpiaq é “suk” + “-piaq”, a pessoa de verdade)', 'substantivo', 'Pessoas', '🧑', 'Suk.'],
  ['arnaq', 'mulher', 'substantivo', 'Pessoas', '👩', 'Arnaq.'],
  ['alqaq', 'irmã mais velha', 'substantivo', 'Pessoas', '👧', 'Alqaq.'],
  ['anngaq', 'irmão mais velho', 'substantivo', 'Pessoas', '👦', 'Anngaq.'],
  ['acaa', 'tia (irmã do pai)', 'substantivo', 'Pessoas', '👩‍🦰', 'Acaa.'],
  ['anaanaa', 'tia (irmã da mãe)', 'substantivo', 'Pessoas', '👩‍🦳', 'Anaanaa.'],
  // Natureza ([WIKT] s.v. “macaq”, “iraluq”, “naniyaq”, “weg'et”, “cillqaq”; grafia de Kodiak: ver a revisão acima)
  ['macaq', 'sol', 'substantivo', 'Natureza', '☀️', 'Macaq.'],
  ['iraluq', 'lua; mês', 'substantivo', 'Natureza', '🌙', 'Qanim Iralua.'],
  ['agyaq', 'estrela', 'substantivo', 'Natureza', '⭐', 'Agyat unugmi antaartut.'],
  ['naniyaq', 'relâmpago', 'substantivo', 'Natureza', '⚡', 'Naniyaq.'],
  ['taangaq', 'água', 'substantivo', 'Natureza', '💧', 'Tamiinek taangaq aturtaarpet.'],
  ['weg’et', 'capim', 'substantivo', 'Natureza', '🌾', 'Weg’et.'],
  ['cillqaq', 'epilóbio (a flor fireweed)', 'substantivo', 'Natureza', '🌸', 'Cillqaq.'],
  ['qar’usiq', 'cedro-vermelho', 'substantivo', 'Natureza', '🌲', 'Qar’usiq.'],
  ['nasquluk', 'kelp (a alga gigante)', 'substantivo', 'Natureza', '🌿', 'Nasquluk.'],
  ['uqaayanaq', 'urtiga', 'substantivo', 'Natureza', '🌱', 'Uqaayanaq.'],
  // Animais ([WIKT] s.v. “arlluk”, “amikuq”, “sagiq”, “saakelaq”, “kuskaq”, “qapilaq”; grafia de Kodiak: ver acima)
  ['arlluk', 'orca', 'substantivo', 'Animais', '🐋', 'Arlluk.'],
  ['amikuq', 'polvo', 'substantivo', 'Animais', '🐙', 'Amikuq.'],
  ['sagiq', 'linguado (halibute)', 'substantivo', 'Animais', '🐟', 'Sagiq.'],
  ['saakelaq', 'tomcod (um bacalhau pequeno)', 'substantivo', 'Animais', '🐠', 'Saakelaq.'],
  ['kuskaanaq', 'coelho', 'substantivo', 'Animais', '🐇', 'Kuskaanaq.'],
  ['kuskaq', 'gato', 'substantivo', 'Animais', '🐈', 'Kuskaq.'],
  ['qahmaquq', 'berbigão', 'substantivo', 'Animais', '🐚', 'Qahmaquq.'],
  ['qapilaq', 'mexilhão', 'substantivo', 'Animais', '🦪', 'Qapilaq.'],
  ['uutuk', 'ouriço-do-mar', 'substantivo', 'Animais', '🦔', 'Uutuk.'],
  // Casa e coisas ([WIKT] s.v. “engluq”, “gaaleq”, “qayaq”, “casaaq”, “caskaq”, “niuwasuuteq”, “slaapaq”,
  // “fanaʀuq”, “amiq”; grafia de Kodiak das outras: ver a revisão acima)
  ['engluq', 'casa', 'substantivo', 'Casa', '🏠', 'Engluq.'],
  ['gaaleq', 'janela', 'substantivo', 'Casa', '🪟', 'Gaaleq.'],
  ['qayaq', 'baidarka (o caiaque de madeira e pele de leão-marinho)', 'substantivo', 'Casa', '🛶', 'Qayaq.'],
  ['nuusiq', 'faca', 'substantivo', 'Casa', '🔪', 'Nuusiq.'],
  ['casaaq', 'relógio', 'substantivo', 'Casa', '⌚', 'Casaaq.'],
  ['caskaq', 'xícara', 'substantivo', 'Casa', '☕', 'Caskaq.'],
  ['stakaanaq', 'copo', 'substantivo', 'Casa', '🥛', 'Stakaanaq.'],
  ['cainiik', 'chaleira', 'substantivo', 'Casa', '🫖', 'Cainiik.'],
  ['laug’kaaq', 'loja', 'substantivo', 'Casa', '🏪', 'Laug’kaaq.'],
  ['niuwasuuteq', 'telefone', 'substantivo', 'Casa', '☎️', 'Niuwasuuteq.'],
  ['pal’tuuk', 'casaco', 'substantivo', 'Casa', '🧥', 'Pal’tuuk.'],
  ['slaapaq', 'chapéu', 'substantivo', 'Casa', '👒', 'Slaapaq.'],
  ['fanaʀuq', 'lanterna', 'substantivo', 'Casa', '🏮', 'Fanaʀuq.'],
  ['wiit’ʀuuq', 'balde', 'substantivo', 'Casa', '🪣', 'Wiit’ʀuuq.'],
  ['amiq', 'pele, couro', 'substantivo', 'Casa', '🧶', 'Amiq.'],
  // Comida ([WIKT] s.v. “saalaq”, “akagwik”, “alagnaq”, “amaryaq”, “augyaq”; grafia de Kodiak das outras: ver acima)
  ['caayuq', 'chá', 'substantivo', 'Comida', '🍵', 'Caayuryugtuten?'],
  ['gleipaq', 'pão', 'substantivo', 'Comida', '🍞', 'Gleipaq.'],
  ['maslaq', 'manteiga', 'substantivo', 'Comida', '🧈', 'Maslaq.'],
  ['saalaq', 'gordura, banha', 'substantivo', 'Comida', '🥓', 'Saalaq.'],
  ['aat’kiit', 'panquecas', 'substantivo', 'Comida', '🥞', 'Aat’kiit.'],
  ['akagwik', 'amora-branca (cloudberry)', 'substantivo', 'Comida', '🍓', 'Akagwik.'],
  ['alagnaq', 'framboesa-do-salmão (salmonberry)', 'substantivo', 'Comida', '🫐', 'Alagnaq.'],
  ['amaryaq', 'viburno (highbush cranberry)', 'substantivo', 'Comida', '🍒', 'Amaryat quuhnartaartut.'],
  ['augyaq', 'camarinha (crowberry)', 'substantivo', 'Comida', '🫒', 'Augyaq.'],
  // Como está ([WIKT] s.v. “asirluni”, “maqarluni”, “pat’snarluni”, “qenaluni”, “sakaarlluni”)
  ['asirluni', 'estar bem; ser bom', 'verbo', 'Verbos', '😊', 'Taata Paluwigmek tekitellria asirluni?'],
  ['maqarluni', 'estar quente', 'verbo', 'Verbos', '🔥', 'Maqarluni macanguq.'],
  ['pat’snarluni', 'estar frio (o tempo)', 'verbo', 'Verbos', '🥶', 'Macanguq, kesiin pat’snartuq cali.'],
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
  // naaqiluni: p. 58, tabela 17; silugluni: p. 130). As frases de exemplo são as da p. 35–37 (para
  // aqumluni, a do homem: o livro avisa, p. 36, nota 4, que “aqum’auq” dito de uma mulher também é “está
  // menstruada”).
  ['kuinglluni', 'andar', 'verbo', 'Verbos', '🚶', 'Arnaq kuingtuq.'],
  ['qecengluni', 'correr', 'verbo', 'Verbos', '🏃', 'Nukallpiaq qecenguq.'],
  ['aqumluni', 'sentar-se', 'verbo', 'Verbos', '🪑', 'Nukallpiaq aqum’auq.'],
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
  ['maama', 'mãe', 'substantivo', 'Família', '👩', 'Maamaqa Susan. Sun’ami suumallria.'],
  ['taata', 'pai', 'substantivo', 'Família', '👨‍🦳', 'Taataqa Bob. Anchorage-mi suumallria.'],
  ['emaa', 'avó', 'substantivo', 'Família', '👵', 'Emaaqa Sally.'],
  ['apaa', 'avô', 'substantivo', 'Família', '👴', 'Apaaqa.'],
  ['uyuwaq', 'irmão ou irmã mais novo(a)', 'substantivo', 'Família', '🧒', 'Pingayunek uyuwanq’rtua.'],
  ['paniyaq', 'filha', 'substantivo', 'Família', '👧🏽', 'Paniyaqa Anchorage-mi etaartuq.'],
  ['awaqutaq', 'filho', 'substantivo', 'Família', '👦🏽', 'Awaqutaqa Adak-mi pektaartuq.'],
  ['angaa', 'tio (irmão da mãe)', 'substantivo', 'Família', '🧔', 'Angaaqa.'],
  ['ilanka', 'minha família', 'substantivo', 'Família', '👨‍👩‍👧‍👦', 'Ilanka asirtut.'],
  // A2.2 — lugares ([KALT] p. 31 e 91, nuna; p. 31, qik’rtaq; p. 33, kuik, e [FRASES] p. 26, “Taquka’asinaq
  // nangarngauq kuigmi”, o urso grande está em pé no rio; [WOTW] 111, quteq; p. 61 e
  // [FRASES] p. 13, “Qutmen agkutartukut”)
  ['nuna', 'terra; aldeia', 'substantivo', 'Natureza', '🏘️', 'Nunami.'],
  ['qik’rtaq', 'ilha', 'substantivo', 'Natureza', '🏝️', 'Qik’rtaq.'],
  ['kuik', 'rio', 'substantivo', 'Natureza', '🏞️', 'Taquka’asinaq nangarngauq kuigmi.'],
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
