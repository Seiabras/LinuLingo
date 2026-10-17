import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do hopi (hopílavayi), língua uto-asteca falada na Reserva Hopi, nordeste do Arizona
 * (EUA) — ver a classificação completa e as fontes gerais em `index.ts`.
 *
 * Cada palavra abaixo foi conferida individualmente no Wiktionary em inglês (seção “Hopi”, que reúne
 * as categorias “Hopi lemmas”/“Hopi nouns”/“Hopi verbs”/“Hopi adjectives”/“Hopi pronouns”/“Hopi
 * interjections” — ao todo só 320 lemas estão catalogados lá, e a categoria de verbos tem apenas 11
 * entradas no total: por isso o pacote tem poucos verbos e nenhum vocabulário de cumprimento fixo,
 * ver a nota em `incomplete`), no artigo “Hopi language” da Wikipédia em inglês (que fornece a tabela
 * de pronomes nu'/um/pam/itam/puma com as formas nominativa e oblíqua, e o exemplo “maana wuupa”,
 * “a moça [é] alta”, mostrando que um adjetivo predicativo não precisa de verbo de ligação) e, só para
 * os numerais de 1 a 5, no Apêndice 1 de Kalectaca (1978) e em languagesandnumbers.com (ver o comentário
 * dos números, abaixo; antes vinham do site Native Languages of the Americas). O apóstrofo modificador “ʼ” (U+02BC,
 * uma letra, não um sinal de pontuação) marca a oclusiva glotal, na mesma convenção usada pelo
 * Wiktionary e pelo pacote navajo (nv) deste app.
 *
 * O Wiktionary e a Wikipédia não trazem um “oi”, um “obrigado” ou um “sim”/“não” em hopi; essas
 * palavras chegaram com as lições extras do A1.1, tiradas do livro de Kalectaca (ver abaixo).
 *
 * As frases de exemplo das 55 palavras do A1 (até “Takta”) são combinações montadas só com palavras
 * confirmadas e com a ordem sujeito-objeto-verbo (SOV) e o padrão substantivo+adjetivo sem verbo de
 * ligação, ambos documentados no artigo da Wikipédia — nunca citações de um texto hopi não conferido.
 *
 * Palavras novas (lições extras do A1.1, A2 e B1) — fonte [KAL]: Milo Kalectaca, “Lessons in Hopi”,
 * ed. Ronald W. Langacker, University of Arizona Press, 1978, 241 p. Cópia em microficha do ERIC
 * (ED 226 942) aberta no archive.org: archive.org/details/micro_IA41153428_0700. As páginas citadas
 * são as impressas no livro (a página do PDF é a impressa + 8). Cada palavra e cada frase foi conferida
 * na IMAGEM da página, não só no texto extraído (que troca “ö” por “5”, “8” ou “é” e “q” por “g”).
 *
 * DIALETO: o próprio Kalectaca avisa (introdução, p. vi) que o livro “reflete a fala do autor, que
 * representa a vila de Songoopavi, na Segunda Mesa”. O A1 deste curso vem do Wiktionary, que segue o
 * dicionário da Terceira Mesa (1998). As duas variantes se entendem, mas há diferenças de forma: onde a
 * forma da Terceira Mesa foi achada no Wiktionary, ela vai citada no comentário (ex.: Kalectaca escreve
 * “pooko”, cachorro; o Wiktionary, “pòoko”, com o acento grave do tom descendente da Terceira Mesa).
 *
 * Duas regras de conversão, declaradas aqui e aplicadas a todo texto vindo de [KAL]:
 *  1. o apóstrofo de Kalectaca (') vira “ʼ” (U+02BC), a mesma letra usada no A1 para a oclusiva glotal;
 *  2. o acento agudo de Kalectaca FICA. Ele marca a sílaba tônica das palavras que fogem da regra de
 *     acento (Lição 3, p. 10–12: (A) palavra de uma ou duas vogais, tônica na primeira; (B)/(C) com mais
 *     vogais, na primeira se ela for longa ou vier antes de duas consoantes, senão na segunda). Tirar o
 *     acento muda a leitura: sem ele, “owí” seria lido “ówi” pela regra (A), “písoqʼa” viraria
 *     “pisóqʼa” pela (C) e “naʼamú”, “naʼámu”. O dicionário da Terceira Mesa usa o mesmo agudo para a
 *     tônica fora da regra (no Wiktionary: “kávumen”, “mansáana”, “ókiwa”, “píʼaku”). Revisão de
 *     17/10/2026: o agudo, antes tirado, foi devolvido conferindo cada palavra na imagem da página
 *     (Owí, Qaʼé, Taʼá, Kwakwhá, Qátuʼu, nímani, wárikiwta, wárikni, wárikuʼu, wéhekna, písoqʼa,
 *     Tsángawpiʼi, naʼamú, ayéʼ, kwálaknani, qö́mavi, hevé).
 * Fora isso, a grafia é a de Kalectaca, letra por letra.
 */
export const ROWS: VocabRow[] = [
  // Natureza
  ['Taawa', 'sol', 'substantivo', 'Natureza', '☀️', 'Nuʼ taawa tuwa.'],
  ['Muuyaw', 'lua', 'substantivo', 'Natureza', '🌙', 'Pam muuyaw tuwa.'],
  ['Soohu', 'estrela', 'substantivo', 'Natureza', '⭐', 'Itam soohu tuwa.'],
  ['Nuva', 'neve', 'substantivo', 'Natureza', '❄️', 'Nuva qöötsa.'],
  ['Owa', 'pedra, rocha', 'substantivo', 'Natureza', '🪨', 'Owa qömvi.'],
  ['Tuukwi', 'montanha', 'substantivo', 'Natureza', '⛰️', 'Nuʼ tuukwi tuwa.'],
  ['Paahu', 'água (da natureza, de nascente)', 'substantivo', 'Natureza', '💧', 'Paahu sakwa.'],
  ['Tuuva', 'areia', 'substantivo', 'Natureza', '🏖️', 'Tuuva qöötsa.'],
  ['Qöötsa', 'branco', 'adjetivo', 'Natureza', '⚪', 'Nuva qöötsa.'],
  ['Sakwa', 'azul', 'adjetivo', 'Natureza', '🔵', 'Paahu sakwa.'],
  ['Qömvi', 'preto', 'adjetivo', 'Natureza', '⚫', 'Owa qömvi.'],
  // Animais
  ['Hoonaw', 'urso', 'substantivo', 'Animais', '🐻', 'Nuʼ hoonaw tuwa.'],
  ['Kwewu', 'lobo', 'substantivo', 'Animais', '🐺', 'Um kwewu tuwa.'],
  ['Iisaw', 'coiote', 'substantivo', 'Animais', '🐾', 'Pam iisaw tuwa.'],
  ['Tsiro', 'pássaro', 'substantivo', 'Animais', '🐦', 'Itam tsiro tuwa.'],
  ['Mongwu', 'coruja-grande (coruja-orelhuda)', 'substantivo', 'Animais', '🦉', 'Puma mongwu tuwa.'],
  ['Koyongo', 'peru', 'substantivo', 'Animais', '🦃', 'Maana koyongo tuwa.'],
  ['Sowi', 'lebre americana (jackrabbit)', 'substantivo', 'Animais', '🐇', 'Taaqa sowi tuwa.'],
  ['Angwusi', 'corvo', 'substantivo', 'Animais', '🐦‍⬛', 'Wùuti angwusi tuwa.'],
  // Pessoas (inclui os pronomes documentados no artigo “Hopi language” da Wikipédia)
  ['Taaqa', 'homem (adulto)', 'substantivo', 'Pessoas', '🧑', 'Taaqa nöösa.'],
  ['Wùuti', 'mulher (adulta)', 'substantivo', 'Pessoas', '👩', 'Wùuti qaaʼö nöösa.'],
  ['Maana', 'moça, menina (jovem solteira; também “filha”)', 'substantivo', 'Pessoas', '👧', 'Maana sikwi nöösa.'],
  ['Nuʼ', 'eu', 'pronome', 'Pessoas', '🙋', 'Nuʼ taawa tuwa.'],
  ['Um', 'tu, você', 'pronome', 'Pessoas', '🫵', 'Um hoonaw tuwa.'],
  ['Pam', 'ele, ela', 'pronome', 'Pessoas', '🧍', 'Pam tsiro tuwa.'],
  ['Itam', 'nós', 'pronome', 'Pessoas', '🫂', 'Itam momori.'],
  ['Puma', 'eles, elas', 'pronome', 'Pessoas', '👥', 'Puma qaaʼö nöösa.'],
  // Alimentação
  ['Qaaʼö', 'milho (espiga seca)', 'substantivo', 'Alimentação e Restaurantes', '🌽', 'Wùuti qaaʼö nöösa.'],
  ['Kuuyi', 'água (engarrafada, guardada dentro de casa)', 'substantivo', 'Alimentação e Restaurantes', '🥤', 'Kuuyi kwala.'],
  ['Sikwi', 'carne', 'substantivo', 'Alimentação e Restaurantes', '🍖', 'Taaqa sikwi nöösa.'],
  // Corpo
  ['Poosi', 'olho (também “semente”, “caroço”)', 'substantivo', 'Corpo', '👁️', 'Nuʼ poosi tuwa.'],
  ['Qötö', 'cabeça', 'substantivo', 'Corpo', '👤', 'Um qötö tuwa.'],
  ['Naqvu', 'orelha', 'substantivo', 'Corpo', '👂', 'Pam naqvu tuwa.'],
  ['Yaqa', 'nariz', 'substantivo', 'Corpo', '👃', 'Itam yaqa tuwa.'],
  ['Tama', 'dente', 'substantivo', 'Corpo', '🦷', 'Puma tama tuwa.'],
  // Casa
  ['Kiihu', 'casa, lar (também “aldeia”)', 'substantivo', 'Casa', '🏠', 'Kiihu qöötsa.'],
  // Números. Revisão de 17/10/2026: as formas de 2 a 4 eram “Lööyöʼ”, “Pàayoʼ” e “Naalöyöʼ”, do site
  // Native Languages of the Americas (native-languages.org/hopi_words.htm), que não diz de onde as tirou
  // nem para que servem. As duas listas conferidas dão outra coisa: Kalectaca, “Lessons in Hopi” (1978),
  // Apêndice 1, p. 173 (conferido na imagem), “The numbers 1 through 10, as used in counting”: suukya',
  // lööyöm, paayom, naalöyöm, tsivot (Segunda Mesa); e languagesandnumbers.com/how-to-count-in-hopi/en/hop/
  // (consultado em 17/10/2026): suukya’, lööyöm, pàayom, naalöyöm, tsivot — com o grave da Terceira Mesa
  // em “pàayom”, que é a grafia do A1. Ficam as formas de contar. Kalectaca usa a mesma “lööyöm” antes
  // de um nome no dual (“lööyöm pookovit”, dois cachorros, Lição 10, p. 49–51), e dá as formas de objeto
  // “suk”, “löqmuy”, “paykomuy”, “naalöqmuy” (Apêndice 1, p. 173; Lição 12, p. 62). As frases antigas
  // (“Lööyöʼ hoonaw”, “Pàayoʼ tsiro”...) punham o número antes de um nome no singular, o que as duas fontes
  // não mostram (dois pede o dual em “-vit”); por isso viraram frases do livro ou a própria contagem.
  ['Suukyaʼ', 'um', 'numeral', 'Números', '1️⃣', 'Suukyaʼ taaqa.'], // Kalectaca, Lição 10, p. 52 (“suukya' taaqa”, ‘one man’)
  ['Lööyöm', 'dois', 'numeral', 'Números', '2️⃣', 'Lööyöm pookovit.'], // Kalectaca, Lição 10, p. 49 (‘two dogs’)
  ['Pàayom', 'três', 'numeral', 'Números', '3️⃣', 'Suukyaʼ, lööyöm, pàayom.'],
  ['Naalöyöm', 'quatro', 'numeral', 'Números', '4️⃣', 'Suukyaʼ, lööyöm, pàayom, naalöyöm.'],
  ['Tsivot', 'cinco', 'numeral', 'Números', '5️⃣', 'Suukyaʼ, lööyöm, pàayom, naalöyöm, tsivot.'],
  // Essenciais
  ['Lavayi', 'palavra, língua', 'substantivo', 'Essenciais', '💬', 'Hopi lavayi.'],
  ['Qatsi', 'vida', 'substantivo', 'Essenciais', '🌱', 'Qatsi qöötsa.'],
  ['Hopi', 'pessoa hopi, civilizada, pacífica (dá nome ao povo e à própria língua)', 'substantivo', 'Essenciais', '🕊️', 'Taaqa hopi.'],
  ['Himu', 'algo, alguma coisa', 'pronome', 'Essenciais', '❓', 'Nuʼ himu tuwa.'],
  // Expressões
  ['Ohi', 'ah, que pena!, droga! (interjeição usada por homens)', 'interjeição', 'Expressões', '😣', 'Ohi!'],
  [
    'Koyaanisqatsi',
    'vida corrompida, fora do equilíbrio (palavra composta que deu nome ao filme de Godfrey Reggio, 1982)',
    'substantivo',
    'Expressões',
    '🌀',
    'Pam koyaanisqatsi navota.',
  ],
  // Verbos-chave (os únicos 11 verbos catalogados na categoria “Hopi verbs” do Wiktionary dão 8 deles)
  ['Nöösa', 'comer', 'verbo', 'Verbos-chave', '🍽️', 'Taaqa nöösa.'],
  ['Tuwa', 'ver, enxergar, encontrar', 'verbo', 'Verbos-chave', '👀', 'Wùuti tuukwi tuwa.'],
  ['Navota', 'ouvir, perceber', 'verbo', 'Verbos-chave', '👂', 'Pam tsiro navota.'],
  ['Kwala', 'ferver', 'verbo', 'Verbos-chave', '♨️', 'Kuuyi kwala.'],
  ['Momori', 'nadar', 'verbo', 'Verbos-chave', '🏊', 'Itam momori.'],
  ['Naani', 'rir baixinho, dar risadinha', 'verbo', 'Verbos-chave', '😄', 'Maana naani.'],
  ['Ööyi', 'ficar satisfeito, ficar cheio', 'verbo', 'Verbos-chave', '😌', 'Nuʼ ööyi.'],
  ['Takta', 'construir ninho', 'verbo', 'Verbos-chave', '🪺', 'Tsiro takta.'],

  // ---- Lições extras do A1.1 — [KAL]
  ['Owí', 'sim (a tônica cai no “i”)', 'interjeição', 'Expressões', '✅', 'Owí, nuʼ waynuma.'], // Diálogo 1, p. 16 (“owí ‘yes’”; “Owí, nu' waynuma” ‘Yes, I am around’)
  ['Qaʼé', 'não (como resposta sozinha; a tônica cai no “e”)', 'interjeição', 'Expressões', '❌', 'Qaʼé, taapalo qa paalangpu.'], // Diálogo 2, p. 37 (“qa'é ‘no’”); frase da Lição 19, p. 103 (‘No, the blanket is not red’)
  ['Taʼá', 'está bem, ok (a tônica cai no último “a”)', 'interjeição', 'Expressões', '👌', 'Taʼá. Nuʼ pas put naawakna.'], // Diálogo 1, p. 16 (“ta'á ‘okay’”); frase do Diálogo 6, p. 112 (‘Okay. I really wanted that.’)
  ['Kwakwhá', 'obrigado (dito por homem; a tônica cai no último “a”)', 'interjeição', 'Expressões', '🙏', 'Taʼá. Nuʼ pas put naawakna. Kwakwhá.'], // Diálogo 6, p. 112 (“kwakwhá ‘thank you (man talking)’”, agudo conferido na imagem). A Mesa Media (mesamedia.org/category/free, 17/10/2026) escreve “Askwali/Kwa’kway (Thank you)”: “kwakwhá” × “kwakwhay” não é homem × mulher (a fala da mulher é “askwali” ou “hevé”, Diálogo 2, p. 37); é outra grafia ou outro falar do mesmo agradecimento, sem fonte que diga de qual mesa, por isso o curso fica com a forma do livro.
  ['Askwali', 'obrigada (dito por mulher)', 'interjeição', 'Expressões', '💐', 'Is askwali. Nuʼ pay nímani, taq kus tavki.'], // Diálogo 2, p. 37–38 (“askwali ‘thank you (woman talking)’”; ‘Thank you. I am going home, it is late evening already.’; “nímani” com agudo na imagem da p. 38)
  ['Waynuma', 'estar por aí, andar por aí (é o verbo do cumprimento “Um waynuma?”)', 'verbo', 'Verbos-chave', '👋', 'Um waynuma?'], // Diálogo 1, p. 16 (“waynuma ‘be around’”; “Um waynuma?” ‘You are around?’)
  ['Pooko', 'cachorro, cão', 'substantivo', 'Animais', '🐕', 'Pooko qöötsa.'], // Lição 4, p. 18 (‘The dog is white.’); Terceira Mesa no Wiktionary: “pòoko”
  ['Moosa', 'gato', 'substantivo', 'Animais', '🐈', 'Moosa tuumoyta.'], // Lição 5, p. 23 (vocabulário) e p. 26 (‘The cat is eating’); igual no Wiktionary (plural “moomost”)
  ['Kawayo', 'cavalo', 'substantivo', 'Animais', '🐎', 'Kawayo wari.'], // Lição 4, p. 18 e p. 21 (‘The horse ran.’); igual no Wiktionary, que o dá como empréstimo do espanhol “caballo”
  ['Paalangpu', 'vermelho', 'adjetivo', 'Cores', '🔴', 'Kiihu paalangpu.'], // Lição 4, p. 18 e p. 19/21 (‘The house is red.’); também no Apêndice 2, p. 175 (que dá ainda “qö́mavi”, preto, e “sakwa”, turquesa, onde o Wiktionary da Terceira Mesa tem “qömvi” e “sakwa”, azul)
  ['Wuupa', 'alto', 'adjetivo', 'Descrições', '📏', 'Maana wuupa.'], // Lição 4, p. 18 (‘The girl is tall.’) — o mesmo exemplo do artigo “Hopi language” da Wikipédia
  ['Hiisayhoya', 'pequeno', 'adjetivo', 'Descrições', '🐜', 'Pooko hiisayhoya.'], // Lição 4, p. 18 e p. 21 (‘The dog is small.’)

  // ---- A2.1: família, objeto, negação e posse — [KAL]
  ['Tiyo', 'menino', 'substantivo', 'Pessoas', '👦', 'Pam tiyo sikwit nöösa.'], // Lição 5, p. 23; frase da Lição 7, p. 35–36 (‘The boy ate the meat.’)
  ['Ina', 'meu pai', 'substantivo', 'Família', '👨', 'Ina qa waynuma.'], // Lição 5, p. 23 (“ina ‘my father’”); Apêndice 4, p. 177; frase da Lição 8, p. 41 (‘My father isn't around.’)
  ['Ingu', 'minha mãe', 'substantivo', 'Família', '🤱', 'Ingu, yuʼat, yuuyu.'], // Apêndice 4, p. 177: “ingu / yu'at / yuuyu” (minha mãe / a mãe dele / mãe!, ao chamar)
  ['Iqöqa', 'minha irmã mais velha', 'substantivo', 'Família', '👱‍♀️', 'Iqöqa, qööqaʼat, kaaka.'], // Apêndice 4, p. 177; Lição 9, p. 43 (“-qööqa ‘older sister’”)
  ['Ituvko', 'meu irmão mais novo', 'substantivo', 'Família', '👶', 'Ituvko yev wunu.'], // Apêndice 4, p. 177; frase da Lição 13, p. 69 e 72 (‘My younger brother is standing here.’)
  ['Isiwa', 'minha irmã mais nova', 'substantivo', 'Família', '🎀', 'Isiwa, siwaʼat, siwa.'], // Apêndice 4, p. 177
  ['Ipava', 'meu irmão mais velho', 'substantivo', 'Família', '🧔', 'Ipava, paavaʼat, vaava.'], // Apêndice 4, p. 177
  ['Iso', 'minha avó', 'substantivo', 'Família', '👵', 'Iso pootalawni.'], // Apêndice 4, p. 177 (“iso / so'at / so'o”); frase da Lição 16, p. 90–91 (‘My grandmother will weave a basket.’)
  ['Itaha', 'meu tio (irmão da mãe)', 'substantivo', 'Família', '👨‍🦳', 'Itaha naatuhotaqe, ooviʼi.'], // Apêndice 4, p. 178 (“itaha ‘uncle (maternal)’”); frase da Lição 19, p. 105–106 (‘My uncle hurt himself, that's why.’)
  ['Kwaahu', 'águia', 'substantivo', 'Animais', '🦅', 'Kwaahu itamuy kuuki.'], // Lição 7, p. 33; frase p. 34–35 (‘The eagle bit us.’)
  ['Pöösa', 'rato', 'substantivo', 'Animais', '🐭', 'Pöösa nuy kuuki.'], // Lição 7, p. 33 (‘The mouse bit me’); Wiktionary também tem “pöösa”
  ['Kuuki', 'morder', 'verbo', 'Verbos-chave', '😬', 'Moosa ung kuuki.'], // Lição 7, p. 33; frase p. 34–35 (‘The cat bit you.’)
  ['Maqa', 'dar', 'verbo', 'Verbos-chave', '🎁', 'Taaqa nuy kiihut maqa.'], // Lição 7, p. 33–34 (‘The man gave me a house.’)
  ['Tsootsona', 'beijar', 'verbo', 'Verbos-chave', '😘', 'Maana tiyot tsootsona.'], // Lição 7, p. 33–34 (‘The girl kissed the boy.’)
  ['Maamatsi', 'reconhecer', 'verbo', 'Verbos-chave', '🧐', 'Miʼ tiyo itamuy maamatsi.'], // Lição 7, p. 33; frase p. 34–35 (‘Yonder boy recognized us.’)
  ['Paʼangwa', 'ajudar', 'verbo', 'Verbos-chave', '🤝', 'Nuʼ put qa paʼangwa.'], // Lição 8, p. 39 (‘I didn't help her.’)
  ['Qa', 'não (vem antes do verbo)', 'advérbio', 'Essenciais', '🚫', 'Itam qa momoyam.'], // Lição 8, p. 39; frase p. 39–41 (‘We are not women.’)
  ['Hopilavayi', 'língua hopi', 'substantivo', 'Essenciais', '🗣️', 'Puma Hopilavayit tutuqayi.'], // Lição 8, p. 39; frase do Diálogo 3, p. 66 (‘They are learning the Hopi language.’)
  ['Tutuqayi', 'aprender, estudar', 'verbo', 'Verbos-chave', '📖', 'Nuʼ puʼ Hopilavayit tutuqayi.'], // Lição 8, p. 39 (‘I am studying Hopi now.’)
  ['Tutuqayna', 'ensinar', 'verbo', 'Verbos-chave', '🧑‍🏫', 'Hak pumuy tutuqayna?'], // Lição 8, p. 39; frase do Diálogo 3, p. 66 (‘Who is teaching them?’)
  ['Ngahu', 'remédio', 'substantivo', 'Casa', '💊', 'Um ngahut qa wéhekna.'], // Lição 8, p. 39; frase p. 39 e 41 (‘You didn't spill the medicine.’)
  ['Taskyavi', 'amarelo', 'adjetivo', 'Cores', '🟡', 'Tiyot ngahuʼat taskyavi.'], // Lição 8, p. 39; frase da Lição 9, p. 47–48 (‘The boy's medicine is yellow.’)
  ['Waakasi', 'vaca', 'substantivo', 'Animais', '🐄', 'Cecilia waakasiʼta.'], // Lição 15, p. 82; frase p. 84–85 (‘Cecilia has a cow’); igual no Wiktionary (plural “waawakast”)
  ['Ngasta', 'não ter, sem (antes do verbo de posse em -ʼta)', 'advérbio', 'Essenciais', '🈳', 'Milo ngasta kiʼta.'], // Lição 15, p. 83–84; frase p. 84 e 86 (‘Milo doesn't have a house.’)

  // ---- A2.2: perguntas, tempo, futuro e ordens — [KAL]
  ['Haqam', 'onde', 'advérbio', 'Perguntas', '📍', 'Moosa haqam pöösat nöösa?'], // Lição 19, p. 103–104; frase p. 104 e 106 (‘Where did the cat eat the mouse?’)
  ['Hisat', 'quando', 'advérbio', 'Perguntas', '🕰️', 'Masaʼtaqa hisat pituni?'], // Lição 19, p. 103; frase p. 105–106 (‘When will the airplane arrive?’)
  ['Hin', 'como', 'advérbio', 'Perguntas', '❔', 'Um hin maatsiwa?'], // Diálogo 1, p. 16; Lição 19, p. 104 e 106 (‘What is your name? (Literally: How are you called?)’)
  ['Hinoq', 'por quê', 'advérbio', 'Perguntas', '🤔', 'Hinoq uutaha töqti?'], // Lição 19, p. 103–104; frase p. 104 e 106 (‘Why did your uncle yell?’)
  ['Hak', 'quem; alguém', 'pronome', 'Perguntas', '🕵️', 'Hak wárikiwta?'], // Lição 20, p. 108–109 (‘Who is running?’ e também ‘Someone is running’)
  ['Maatsiwa', 'chamar-se, ter o nome de', 'verbo', 'Verbos-chave', '📛', 'Nuʼ Cecilia yan maatsiwa.'], // Diálogo 1, p. 16; frase da Lição 19, p. 105–106 (‘My name is Cecilia.’)
  ['Taavok', 'ontem', 'advérbio', 'Tempo', '⏪', 'Pam taavok pitu.'], // Lição 6, p. 28–29 (‘That arrived yesterday.’)
  ['Qaavoʼ', 'amanhã', 'advérbio', 'Tempo', '⏩', 'Nuʼ naala qaavoʼ momoslawni.'], // Lição 17, p. 92; frase p. 94–95 (‘I will swim alone tomorrow.’)
  ['Puʼ', 'agora, hoje', 'advérbio', 'Tempo', '⏱️', 'Pam maana puʼ qa piklawu.'], // Diálogo 1, p. 16 (“pu' ‘now, today’”); frase da Lição 8, p. 41 (‘The girl isn't making piki now.’)
  ['Yokva', 'chover', 'verbo', 'Clima', '🌧️', 'Yokvani.'], // Lição 13, p. 68; frase da Lição 16, p. 87 e 90 (‘It will rain.’)
  ['Wari', 'correr', 'verbo', 'Verbos-chave', '🏃', 'Pooko wari.'], // Lição 4, p. 18; frase p. 20–21 (‘The dog ran.’)
  ['Qatu', 'sentar, estar sentado', 'verbo', 'Verbos-chave', '🪑', 'Itaaso qatu.'], // Diálogo 1, p. 16; frase da Lição 13, p. 69 e 72 (‘Our grandmother is sitting.’)
  ['Pitu', 'chegar', 'verbo', 'Verbos-chave', '🚪', 'Um haqaq pitu?'], // Diálogo 1, p. 16 (‘Where did you come from?’)
  ['Nima', 'ir para casa, voltar para casa', 'verbo', 'Verbos-chave', '🏡', 'Itam nima.'], // Lição 5, p. 23; frase p. 26 (‘We went home.’)
  ['Hiiko', 'beber', 'verbo', 'Verbos-chave', '🥛', 'Nuʼ ingahuy hikwni.'], // Lição 12, p. 60; frase da Lição 16, p. 90–91 (‘I will drink my medicine.’)
  ['Tumalta', 'trabalhar', 'verbo', 'Verbos-chave', '🛠️', 'Um taavok tumalta?'], // Lição 19, p. 102; frase p. 105–106 (‘Did you work yesterday?’)
  ['Tutuqayki', 'escola', 'substantivo', 'Lugares', '🏫', 'Pam tutuqaykimi wari.'], // Lição 21, p. 113; frase p. 117 e 118 (‘He ran to the school.’)
  ['Paaqwa', 'sapo, rã', 'substantivo', 'Animais', '🐸', 'Iʼ paaqwa.'], // Diálogo 6, p. 112 (‘This is a frog.’)
  ['Naawakna', 'querer, gostar, amar', 'verbo', 'Verbos-chave', '❤️', 'Nuʼ pas put naawakna.'], // Diálogo 4, p. 80 (“naawakna ‘want, like, love’”); frase do Diálogo 6, p. 112 (‘I really wanted that.’)
  ['Pewʼi', 'venha cá!', 'interjeição', 'Expressões', '🫴', 'Duane, tus pewʼi.'], // Diálogo 6, p. 112 (“pew'i ‘come here!’”; ‘Duane, come here.’)
  ['Yev', 'aqui', 'advérbio', 'Lugares', '👇', 'Itam yev naami Hopiyuʼaʼatani.'], // Diálogo 1, p. 16–17 (‘We are going to talk Hopi together here.’)

  // ════ B1 (entrega de 17/10/2026) — [KAL] Lições 22–30, Diálogos 7, 8 e 10 e Leituras 2 e 3, cada frase
  // conferida na IMAGEM da página impressa (página do PDF = impressa + 8). Mesmas regras de grafia: ʼ no
  // lugar do apóstrofo e o agudo de Kalectaca mantido (mansáana, wárikqa, súhimu, qátuʼu...). Segunda
  // Mesa (Songoopavi). Nada da Lição 24 sobre “tiihu” (dança, cerimônia) nem do Diálogo 9 (dança em
  // Munqapi) nem da Leitura 1 (cerimônias) entrou no curso.

  // ---- B1.1: adjetivos, compostos e orações relativas (Lições 22–23, Diálogo 7)
  ['Muki', 'quente', 'adjetivo', 'Descrições', '🔥', 'Kuuyi muki.'], // Lição 22, p. 119 (“muki ‘hot’”); frase da Lição 26, p. 143 (‘The water is hot.’)
  ['Wuuyoqʼa', 'grande', 'adjetivo', 'Descrições', '🐘', 'Palakihu nuʼan wuuyoqʼa.'], // Lição 22, p. 119; frase p. 123 (‘The red house is very big.’); nos compostos vira “wuko-” (p. 121)
  ['Poyo', 'faca', 'substantivo', 'Casa', '🔪', 'Iʼ poyo wuuyoqʼa.'], // Lição 22, p. 119; frase p. 123 (‘This knife is big.’)
  ['Moʼa', 'boca', 'substantivo', 'Corpo', '👄', 'Imoʼa wuuyoqʼa.'], // Lição 22, p. 119; frase p. 120 (‘My mouth is big.’)
  ['Nöhu', 'ovo', 'substantivo', 'Alimentação e Restaurantes', '🥚', 'Mukinöhu.'], // Lição 22, p. 119; composto da p. 121, traduzido na p. 123 (‘hot egg’)
  ['Mansáana', 'maçã', 'substantivo', 'Alimentação e Restaurantes', '🍎', 'Iʼ mansáana qa paalangputi.'], // Lição 22, p. 119 (agudo no livro); frase da Lição 29, p. 163 e 165 (‘This apple didn't get red.’)
  ['Waha', 'latir', 'verbo', 'Verbos-chave', '🐶', 'Qötsavoko waha.'], // Lição 22, p. 119; frase p. 121 (‘The white dog barked.’)
  ['Nuʼan', 'muito, bem (antes de adjetivo)', 'advérbio', 'Descrições', '➕', 'Pam tiyo nuʼan wuupa.'], // Lição 22, p. 122 (“nu'an ... ‘really, very’”); frase p. 123 (‘The boy is very tall.’)
  ['Manawya', 'menininha', 'substantivo', 'Pessoas', '🧒', 'Pam manawya mansántsokit saavulawu.'], // Lição 22, p. 122 (“manawya ‘little girl’”); frase p. 123 (‘The little girl is chopping the apple tree.’)
  ['Lolma', 'bonita, bonito', 'adjetivo', 'Descrições', '🌸', 'Maana wárikqa lolma.'], // Lição 23, p. 126 (‘The girl that ran is pretty.’)
  ['Puuwi', 'dormir', 'verbo', 'Verbos-chave', '😴', 'Nuʼ puwngwuqat tuwa.'], // Lição 23, p. 125; frase p. 130 (‘I found the sleeper.’)
  ['Mooki', 'morrer', 'verbo', 'Verbos-chave', '🥀', 'Pam taaqa sikwit nösqa mooki.'], // Lição 23, p. 125; frase p. 127 e 130 (‘The man who ate the meat died.’)
  ['Puuyalti', 'voar', 'verbo', 'Verbos-chave', '🪽', 'Kwaahu puuyaltingwuqa.'], // Lição 23, p. 125; frase p. 130 (‘The eagle is a flier.’)
  ['Tawlawu', 'cantar', 'verbo', 'Verbos-chave', '🎤', 'Puma tawlawngwuqam hiita aw taayungwa?'], // Lição 23, p. 125; frase p. 130 (‘What are the singers looking at?’)
  ['Waaya', 'fugir', 'verbo', 'Verbos-chave', '💨', 'Pam tiyo waayaqa nima.'], // Lição 23, p. 125; frase p. 127 e 130 (‘The boy who ran away went home.’)
  ['Koongya', 'marido', 'substantivo', 'Família', '🤵', 'Haqami uukongya?'], // Diálogo 7, p. 131 (“-koongya ‘husband’”; ‘Where is your husband?’); Apêndice 4, p. 178
  ['Seʼel', 'cedo', 'advérbio', 'Tempo', '🌅', 'Pam pay seʼel tumalaʼtato.'], // Diálogo 7, p. 131 (‘He went to work very early.’)
  ['Uuyi', 'roça de milho', 'substantivo', 'Lugares', '🌾', 'Naat yaw pam piw uuyiy aw kuyvatot puʼ aʼ nímani.'], // Diálogo 7, p. 131 (‘He also wants to stop by his cornfield on his way home.’)
  ['Nöösiwqa', 'comida, mantimentos', 'substantivo', 'Alimentação e Restaurantes', '🛒', 'Iso nöösiwqat huuyato.'], // Diálogo 7, p. 131; Lição 24, p. 133; frase p. 135–136 (‘My grandmother went to buy groceries.’)
  ['Huuya', 'vender; trocar', 'verbo', 'Verbos-chave', '🏷️', 'Nuʼ síkisvet huuyato.'], // Diálogo 7, p. 131 (“huuya ‘sell’”); frase da Lição 29, p. 162 e 165 (‘I went to sell a car.’); no Diálogo 7 e na p. 136, “huuyato” é ir comprar mantimentos
  ['Aaʼawna', 'avisar, contar', 'verbo', 'Verbos-chave', '📣', 'Ason pitúq um nuy aaʼawnani.'], // Diálogo 7, p. 131 (“aa'awna ‘tell, let know’”; ‘Let me know when he comes.’)
  ['Tsöngmoki', 'ficar com fome', 'verbo', 'Verbos-chave', '🤤', 'Itam qa tsöngmokyani.'], // Diálogo 7, p. 131 (“tsöngmoki ‘get hungry’”; ‘...so we don't get hungry.’)

  // ---- B1.2: passiva e conjunções (Lições 24–25, Diálogo 8)
  ['Tiposi', 'bebê', 'substantivo', 'Pessoas', '👶🏽', 'Tiposi taavok tiitiwa.'], // Lição 24, p. 132; frase p. 133 (‘The child was born yesterday.’)
  ['Tiitiwa', 'nascer', 'verbo', 'Verbos-chave', '🐣', 'Pam hisat tiitiwa?'], // Lição 24, p. 133; frase p. 135–136 (‘When was she born?’)
  ['Tuupe', 'assar', 'verbo', 'Verbos-chave', '🍗', 'Sikwit tuupeya.'], // Lição 24, p. 132; frase p. 134–135 (‘The meat was roasted.’)
  ['Taawi', 'canção', 'substantivo', 'Essenciais', '🎶', 'Taawi as lomahinta.'], // Lição 24, p. 132; frase da Lição 26, p. 144 e 147 (‘The song was pretty.’)
  ['Yuku', 'terminar, consertar; fazer', 'verbo', 'Verbos-chave', '🔧', 'Taawi yukilti.'], // Lição 24, p. 132 (“yuku means ‘mend’, ‘fix’, or ‘finish’”); Diálogo 8, p. 142 (“yuku ‘make’”); frase p. 133 e 135 (‘The song was finished.’)
  ['Aama', 'enterrar', 'verbo', 'Verbos-chave', '⚱️', 'Siivut amya.'], // Lição 24, p. 132; frase p. 135–136 (‘They buried the pot.’)
  ['Siivu', 'panela', 'substantivo', 'Casa', '🍲', 'Pam poyo nöq pam siivu.'], // Lição 25, p. 137 e 140 (‘the knife and the pot’)
  ['Nguʼa', 'pegar, capturar', 'verbo', 'Verbos-chave', '🫳', 'Nuʼ maanat ngöyvaqe nguʼa.'], // Lição 23, p. 127 e 130 (‘I caught the girl I chased.’); passiva “nguʼiwa”, Lição 24, p. 134
  ['Ngöyva', 'perseguir', 'verbo', 'Verbos-chave', '🐕‍🦺', 'Pooko nöq moosa taavot ngöyva.'], // Lição 25, p. 138 e 140 (‘The dog and the cat chased a cottontail.’)
  ['Taavo', 'coelho (o coelho-de-rabo-branco do deserto)', 'substantivo', 'Animais', '🐰', 'Nuʼ taavot aw yori nöq um kawayot aw yori.'], // Lição 25, p. 138 e 140 (‘I looked at a cottontail and you looked at a horse.’)
  ['Nöq', 'e (liga sujeitos e frases)', 'conjunção', 'Essenciais', '🔗', 'Yev yooyoki nöq pev nuvalawu.'], // Lição 25, p. 137 (“nöq ‘and’”, também dito “niqw”); frase p. 138 e 140 (‘It is raining here and it is snowing there.’)
  ['Nit', 'e (liga objetos)', 'conjunção', 'Essenciais', '🧷', 'Nuʼ pookot nit moosat tuwa.'], // Lição 25, p. 138 e 140 (‘I found a dog and a cat.’)
  ['Sen', 'ou; talvez', 'conjunção', 'Essenciais', '🔀', 'Sen yooyoki sen nuvalawu.'], // Lição 25, p. 138–139 e 140 (‘Either it is raining or it is snowing.’); “talvez”: Diálogo 8, p. 142, e Lição 30, p. 168
  ['Sipala', 'pêssego', 'substantivo', 'Alimentação e Restaurantes', '🍑', 'Iʼ mansáana nöq pam sipala.'], // Lição 25, p. 137 e 140 (‘this apple and that peach’)
  ['Novna', 'alimentar, dar de comer', 'verbo', 'Verbos-chave', '🥣', 'Hak kawayot nit waakasit novnani?'], // Lição 25, p. 137; frase p. 138 e 140 (‘Who will feed the horse and the cow?’)
  ['Asi', 'espirrar', 'verbo', 'Verbos-chave', '🤧', 'Sen tiyo sen maana asi.'], // Lição 25, p. 137; frase p. 139 (‘Either the boy or the girl sneezed.’)
  ['Aasi', 'lavar o cabelo', 'verbo', 'Verbos-chave', '🧴', 'Sen wuuti sen maana aasi.'], // Lição 25, p. 137; frase p. 139–140 (‘Either the woman or the girl washed her hair.’)
  ['Tuʼi', 'comprar', 'verbo', 'Verbos-chave', '🛍️', 'Pam wuuti kwasat nit pitanaktsit tuʼi.'], // Lição 25, p. 137; frase p. 138 e 140 (‘The woman bought a dress and a hat.’)
  ['Sayti', 'sorrir', 'verbo', 'Verbos-chave', '😊', 'Ina sayti nöq inöma naani.'], // Lição 25, p. 137; frase p. 138 e 140 (‘My father smiled and my wife laughed.’)
  ['Inöma', 'minha esposa', 'substantivo', 'Família', '👰', 'Inöma nöq iqöqa inuqlaq qatuwta.'], // Lição 25, p. 139 e 141 (‘My wife and older sister are sitting next to me.’); Apêndice 4, p. 178 (“nöma'at”, “nöma”)
  ['Kuyto', 'ir buscar água', 'verbo', 'Verbos-chave', '🪣', 'Pam wuuti kuyto.'], // Diálogo 8, p. 142 (“kuyto ‘go get water’”); frase da Lição 29, p. 162 e 165 (‘The woman went to get water.’)
  ['Hangwa', 'cavar', 'verbo', 'Verbos-chave', '⛏️', 'Haaki, naat nuʼ it akw hángwanta.'], // Diálogo 8, p. 142 (“hangwa ‘dig’”; ‘Wait, I am still digging with it.’)
  ['Iiʼitsi', 'depressa!, ande logo!', 'interjeição', 'Expressões', '🏎️', 'Iiʼitsi, taq nuʼ as písoqʼiwta.'], // Diálogo 8, p. 142 (“ii'itsi ‘hurry up’”; ‘Hurry up, I am in a hurry to finish.’)

  // ---- B1.3: partículas e orações de tempo (Lições 26–27, Leitura 2)
  ['Oomaw', 'nuvem', 'substantivo', 'Natureza', '☁️', 'Oomaw qöötsa asʼa.'], // Lição 26, p. 143; frase p. 144 e 147 (‘The cloud was white.’)
  ['Komo', 'marrom', 'adjetivo', 'Cores', '🟤', 'Pam hoonaw as komo.'], // Lição 26, p. 143; frase p. 144 e 146 (‘The bear was brown.’); também no Apêndice 2
  ['Wikoro', 'jarro', 'substantivo', 'Casa', '🏺', 'Wikoro as sakwa kurá.'], // Lição 26, p. 143; frase p. 146–147 (‘The jug was evidently turquoise.’)
  ['As', 'partícula de passado ou de intenção que não se cumpriu', 'partícula', 'Essenciais', '⏮️', 'Kuuyi as muki.'], // Lição 26, p. 143 (‘The water was hot.’; “Nu' as kuyto” ‘I went to get water’, sem conseguir)
  ['Yaw', 'dizem que, ouvi dizer (partícula)', 'partícula', 'Essenciais', '👂🏽', 'Pooko ung yaw kuuki.'], // Lição 26, p. 144–145 e 147 (‘A dog bit you, I hear.’)
  ['Kus', 'pelo visto, evidentemente (partícula)', 'partícula', 'Essenciais', '🔎', 'Pam put kus kuuki.'], // Lição 26, p. 145 (‘Evidently he bit her.’); no fim da frase vira “kurá”
  ['Paklawu', 'chorar', 'verbo', 'Verbos-chave', '😢', 'Pam maana naanit puʼ paklawu.'], // Lição 27, p. 149; frase p. 149 e 152 (‘The girl laughed then cried.’)
  ['Paki', 'entrar', 'verbo', 'Verbos-chave', '🚶', 'Nuʼ pakít puʼ qatuvtu.'], // Lição 27, p. 149 (‘I came in and sat down.’; agudo no livro)
  ['Tsölö', 'gota de chuva (e nome do menino da Leitura 2)', 'substantivo', 'Clima', '💦', 'Tsölö yaw soʼoy amum Songoopave qatu.'], // Leitura 2, p. 181 (“tsölö ‘raindrop’”; ‘Raindrop lived with his grandmother in the village of Songoopavi.’)
  ['Haawi', 'descer', 'verbo', 'Verbos-chave', '⬇️', 'Satnöq puʼ yaw atkyameq sipalʼuyit aqw haawi.'], // Leitura 2, p. 181 (‘Finally she went down to the peach orchards.’)
  ['Taatayi', 'acordar', 'verbo', 'Verbos-chave', '⏰', 'Tsölö, taatayiʼi!'], // Leitura 2, p. 181 (“taatayi ‘wake up’”; ‘Raindrop, wake up’)
  ['Pangqawu', 'dizer (assim)', 'verbo', 'Verbos-chave', '💭', 'Suukya manawya yaw pangqawu.'], // Leitura 2, p. 181 (“pangqawu ‘say thus’”; ‘One little girl answered’)
  ['Satnöq', 'finalmente', 'advérbio', 'Tempo', '🏁', 'Iisaw homasay puyayatoynat puʼ satnöq tsirohoymuy amungk pitu.'], // Leitura 2, p. 181 (“satnöq ‘finally’”); frase da Leitura 3, p. 184–185 (‘The coyote was flapping his wings for a while and finally caught up with the little birds.’)
  ['Suus', 'uma vez, certa vez', 'advérbio', 'Tempo', '📜', 'Suus yaw put soʼat qa tuwa.'], // Leitura 2, p. 181 (‘One day his grandmother couldn't find him.’)
  ['Soosovik', 'por toda parte', 'advérbio', 'Lugares', '🗺️', 'Yaw pam soosovik kiinawit heeva.'], // Leitura 2, p. 181 (‘She looked all through the village.’)
  ['Heeve', 'procurar', 'verbo', 'Verbos-chave', '🔦', 'Nuʼ umuy teevev hevnuma.'], // Diálogo 8, p. 142 (“heeve ‘look for’”; ‘I've been looking for you two all day.’). “hevnuma”, “hevto”: o v antes de consoante é marca da Segunda Mesa (Jeanne 1978, p. 62: Terceira Mesa [hepni], Segunda Mesa [hevni])
  ['Tumpovi', 'beira da mesa (do planalto)', 'substantivo', 'Lugares', '🏜️', 'Soʼat yaw kwiniweq niiqe puʼ yaw tumpovaqe Tsölöt hevnuma.'], // Leitura 2, p. 181 (“tumpovi ‘edge of the mesa’”; ‘The grandmother went north and looked for Raindrop around the edges of the mesa.’)
  ['Sipaltsoki', 'pessegueiro', 'substantivo', 'Natureza', '🌳', 'Put yaw sipaltsokit atpipaq puwqat tuwa.'], // Lição 22, p. 119 (“sipaltsoki ‘peach tree’”); frase da Leitura 2, p. 181 (‘There she found him sleeping under a peach tree.’)
  ['Maqto', 'ir caçar', 'verbo', 'Verbos-chave', '🏹', 'Nuʼ as peqw tsiromaqtoq, qa himu pitu nöq oovi kus nuʼ puwva.'], // Leitura 2, p. 181 (“maqto ‘go hunting’”; ‘I came down here to hunt birds, but none came so I guess I fell asleep.’)

  // ---- B1.4: se, porque, formas do verbo e perguntas encaixadas (Lições 28–30, Diálogo 10, Leitura 3)
  ['Itsivuti', 'ficar com raiva', 'verbo', 'Verbos-chave', '😠', 'Pam nuy niinaq nuʼ itsivutini.'], // Lição 28, p. 155; frase p. 160 (‘If she kills me I will get angry.’)
  ['Tuutuyti', 'ficar doente', 'verbo', 'Verbos-chave', '🤒', 'Um tuutuyteʼ um mokni.'], // Lição 28, p. 155; frase p. 158 e 160 (‘If you get sick you will die.’)
  ['Súhimu', 'bonito (bem-apessoado)', 'adjetivo', 'Descrições', '💁‍♂️', 'Nuʼ as haalayni pam súhimunöqʼö.'], // Lição 28, p. 155 (agudo no livro); frase p. 158 e 160 (‘I would be happy if he were handsome.’)
  ['Hiikyaʼta', 'caro', 'adjetivo', 'Compras', '💰', 'Kawayo qa hiikyaʼtaq oovi nuʼ put tuʼi.'], // Lição 28, p. 155; frase p. 158 e 160 (‘Since the horse wasn't expensive I bought it.’)
  ['Haalayi', 'estar contente, feliz', 'verbo', 'Verbos-chave', '😃', 'Pam nímaqe oovi haalayi.'], // Lição 28, p. 158 e 160 (‘Because he went home he is happy.’)
  ['Oovi', 'por isso', 'advérbio', 'Essenciais', '➡️', 'Pam nuy tuwáq oovi nuʼ waaya.'], // Lição 28, p. 158 (“oovi ... ‘therefore’, ‘thus’, ‘that's why’, or ‘so’”); frase p. 158 e 160 (‘Because he saw me I ran away.’)
  ['Sutsev', 'sempre', 'advérbio', 'Tempo', '🔁', 'Pam sutsev nánanngwu.'], // Lição 29, p. 161; frase p. 163 (‘He always laughs.’)
  ['Wiʼta', 'ser gordo', 'verbo', 'Descrições', '🐷', 'Pam wiʼva.'], // Lição 29, p. 161; frase p. 163 (‘He got fat.’)
  ['Navotiʼta', 'saber', 'verbo', 'Verbos-chave', '🧠', 'Nuʼ qa navotiʼta sen tumalaʼtaniqaʼe.'], // Lição 30, p. 168; frase p. 169 e 171 (‘I don't know whether I'll be working.’)
  ['Uʼniʼta', 'lembrar-se', 'verbo', 'Verbos-chave', '💡', 'Nuʼ qa uʼniʼta hiita pam tuwaqʼö.'], // Lição 30, p. 168; frase p. 172 (‘I don't remember what he found.’)
  ['Tuuvingta', 'perguntar', 'verbo', 'Verbos-chave', '🙋‍♀️', 'Pam ung tuuvingta sen um haalayqʼö.'], // Lição 30, p. 168; frase p. 172 (‘He asked you whether you were happy.’)
  ['Ayata', 'pedir ajuda', 'verbo', 'Verbos-chave', '🆘', 'Nuʼ pumuy as aʼ ayatato.'], // Diálogo 10, p. 166 (“ayata ‘ask for help’”; ‘I came to ask for their help.’)
  ['Naʼöna', 'preguiçoso', 'adjetivo', 'Descrições', '🦥', 'Puma pay nanaʼönt.'], // Diálogo 10, p. 166 (“na'öna ‘lazy one’”; ‘They are lazy’, no plural)
  ['Kaphe', 'café', 'substantivo', 'Alimentação e Restaurantes', '☕', 'Yev kaphet hiikoʼo.'], // Diálogo 10, p. 166–167 (‘Have some coffee here.’)
  ['Yaavo', 'longe', 'advérbio', 'Lugares', '🔭', 'Pay soʼon naat pas yaavo haqamiya.'], // Diálogo 10, p. 166 (‘They couldn't have gone too far yet.’)
  ['Haak', 'um pouco, por um tempo', 'advérbio', 'Tempo', '⏳', 'Pev haak qátuʼu.'], // Diálogo 10, p. 166–167 (‘Sit here for a while.’)
  ['Tsaatsayom', 'crianças', 'substantivo', 'Pessoas', '🧒🏽', 'Taʼá, haqami tsaatsayomya?'], // Diálogo 10, p. 166 (‘All right, where are the kids?’); plural de “tsay”, criança (Lição 22, p. 120, 122 e 123)
  ['Homasa', 'pena (de ave), asa', 'substantivo', 'Animais', '🪶', 'Um ngasta homasaʼta, um kus hin puuyaltini.'], // Leitura 3, p. 183–184 (‘You have no feathers, you can't fly.’)
  ['Tutsaya', 'cesto (peneira)', 'substantivo', 'Casa', '🧺', 'Pam tsirohoymuy nit puʼ iisawuy tutsayat aw oyat puʼ oomi maspa.'], // Leitura 3, p. 183–184 (‘She put the little birds and the coyote in the basket and threw them up.’)
  ['Okiw', 'coitado!, coitadinho!', 'interjeição', 'Expressões', '🥺', 'Okiw yaw tsirohooyam hihin puʼ hiisavo ang puvuyaltinumyat pay ahoy aʼ löhökyangwu.'], // Leitura 3, p. 183 (“okiw ‘poor thing!’”; ‘The poor little birds would flutter around a little ways and then fall back down.’)
  ['Tsirohoya', 'passarinho', 'substantivo', 'Animais', '🐤', 'Puʼ suukya tsirohoya töqti, “Taaʼ!”'], // Leitura 3, p. 184 (‘one little bird yelled, “Now!”’); “tsiro” + “-hoya”, pequeno (Lição 22, p. 122)
  ['Pantani', 'perfeito!, está bem!', 'interjeição', 'Expressões', '🎯', 'Pantani, pantani, itam súʼantsatsna!'], // Leitura 3, p. 183–184 (“pantani ‘perfect!, okay!’”; ‘Perfect, perfect, we did it right!’)
  ['Oomi', 'para cima', 'advérbio', 'Lugares', '⬆️', 'Oomiʼi, piw hihin oomiʼi!'], // Leitura 3, p. 183–184 (“oomi ‘up, above’”; ‘Higher, higher still!’)
];

export const VOCAB_HOP = buildVocab('hop', ROWS);
