import { buildVocab, type VocabRow } from '../types';

/**
 * Vocabulário do marúbo, língua pano do Vale do Javari (Amazonas, Brasil), código ISO 639-3 “mzr”.
 *
 * FONTES (todas consultadas de verdade na entrega de 16/10/2026; as siglas abaixo aparecem nos
 * comentários de cada palavra):
 *
 * [CES17] Pedro de Niemeyer Cesarino, Armando Mariano Marubo Cherõpapa Txano e Robson Dionísio Doles
 *         Marubo. 2017. “Marubo”. In: Kristine Stenzel e Bruna Franchetto (orgs.), On this and other
 *         worlds: Voices from Amazonia, p. 139–162. Berlim: Language Science Press (acesso aberto,
 *         CC BY). DOI 10.5281/zenodo.1008779 — langsci-press.org/catalog/view/167/740/839-2. Narrativa
 *         “Vei Vai yoã” com 105 linhas em marúbo, segmentação morfema a morfema, glosas em inglês e
 *         tradução em português. O número entre parênteses (ex. 25) é a linha da narrativa. A p. 142
 *         traz o quadro de grafemas da ortografia prática: <e> = /ɨ/, <o> = /u/, <sh> = /ʃ/,
 *         <tx> = /tʃ/, <ch> = /ʂ/, <v> = /v/, til para nasalidade. (A Wikipédia em inglês, Marúbo language,
 *         anota que /v/ pode soar [v] ou [β].)
 * [CES18] Pedro de Niemeyer Cesarino. 2018. “Wenía: o surgimento dos antepassados – Leitura e tradução
 *         de um canto narrativo ameríndio (Marubo, Amazônia Ocidental)”. Estudos de Literatura
 *         Brasileira Contemporânea, n. 53, p. 45–99. DOI 10.1590/2316-4018533 (SciELO, aberto).
 * [CES13] Pedro de Niemeyer Cesarino. 2013. “Cartografias do cosmos: conhecimento, iconografia e artes
 *         verbais entre os Marubo”. Mana 19(3). DOI 10.1590/S0104-93132013000300002 (SciELO, aberto).
 * [CES08] Pedro de Niemeyer Cesarino. 2008. “Babel da floresta, cidade dos brancos? Os Marubo no
 *         trânsito entre dois mundos”. Novos Estudos CEBRAP 82. DOI 10.1590/S0101-33002008000300007.
 * [ANH10] Stan Anonby e David J. Holbrook. 2010. A survey of the languages of the Javari River Valley,
 *         Brazil. SIL Electronic Survey Report 2010-003, apêndice 1 (lista comparativa de 345 palavras
 *         colhida por Ed Emsheimer; Marúbo é uma das colunas). Cópia lida em
 *         web.archive.org/web/2015/http://www.sil.org/silesr/2010/silesr2010-003.pdf. O número é o do
 *         item na lista. A lista está em transcrição FONÉTICA, não na ortografia prática.
 * [ASJP]  The ASJP Database (Wichmann, Brown, Holman et al.), lista “MARUBO” compilada por Viveka
 *         Velupillai a partir de Costa 1993 e 2000 — asjp.clld.org/languages/MARUBO (CC BY 4.0).
 *         Também em código fonético ASJP (3 = ɨ, S = ʃ, C = tʃ).
 * [NL]    Native Languages of the Americas, native-languages.org/marubo_words.htm e
 *         native-languages.org/marubo_animals.htm (listas curtas, grafia própria do site).
 * [ISA]   Instituto Socioambiental, pib.socioambiental.org/pt/Povo:Marubo (fonte das 11 palavras do
 *         pacote anterior: koka, take, kakáya, kenchintxô, romeyá, yové, shokó, tanaméa, Roka, vai, vei).
 *
 * REGRA DE GRAFIA: a escrita de cada palavra é a de uma fonte em ortografia prática (Cesarino ou ISA).
 * Quando a palavra só aparece nas listas fonéticas (ANH10, ASJP), ela só entra se a transcrição usar
 * apenas sons que a ortografia de Cesarino escreve com a mesma letra (a, i, k, m, n, p, r, s, t, w, y,
 * v) — assim a forma não precisa ser adaptada: é o caso de papa, ana, wapa, maka e kanti. Palavras com
 * ɨ, u, ʃ ou nasal que só existem nas listas fonéticas ficaram de fora, para não adivinhar a grafia.
 * Os números (um, dois…) ficaram de fora por isso: as três listas que os trazem discordam entre si.
 *
 * As frases de exemplo são trechos citados das fontes, com a linha indicada. As poucas que foram
 * MONTADAS por este curso estão marcadas “montada” e seguem uma regra documentada: pronome possessivo
 * (ẽ, nokẽ, awẽ) + substantivo, como em “ẽ yora” e “nokẽ chinã” (CES17, 75 e 25).
 */
export const ROWS: VocabRow[] = [
  // ── Pronomes ──
  // ea: CES17 (81, 91, 92) glosa “1sg.abs”; ANH10 200 “Eu” [ɨa]; ASJP “I” 3a. Exemplo: CES17 81.
  ['ea', 'eu', 'pronome', 'Pronomes', '🙋', 'Ea vei akatĩpa.'],
  // ẽ: CES17 (75, 76, 77, 80) glosa “1sg.gen” (meu) e “1sg.erg” (eu, quando faço algo a alguém).
  // ANH10 208 “Minha mão” e 214 “Meu arco” começam pela mesma forma. Exemplo: CES17 75 (“ẽ yora onã
  // shavorasĩ”, mulheres dos meus parentes).
  ['ẽ', 'meu, minha (também “eu” quando faço algo a alguém)', 'pronome', 'Pronomes', '🫳', 'Ẽ yora.'],
  // mia: ASJP “you (sg.)” mia; ANH10 201 “Você” [miya]. Grafia de ASJP (só letras que a ortografia
  // escreve igual). Nenhuma fonte traz frase com “mia”: o exemplo é a palavra sozinha.
  ['mia', 'tu, você', 'pronome', 'Pronomes', '🫵', 'Mia.'],
  // noke: CES17 (26) glosa “1pl.abs”; ASJP “we” nuk3; ANH10 204 [nukɨ]. Exemplo: CES17 26.
  ['noke', 'nós', 'pronome', 'Pronomes', '🙌', 'Noke neská akavo.'],
  // nokẽ: CES17 (25, 101) glosa “1pl.gen”; ANH10 211 “Nossas mãos” e 217 “Nosso arco”. Exemplo: CES17 25.
  ['nokẽ', 'nosso, nossa', 'pronome', 'Pronomes', '🤲', 'Nokẽ chinã.'],
  // mato: CES17 (67, 92) glosa “2pl.abs”; ANH10 205 “Vocês” [matu]. Exemplo: CES17 67.
  ['mato', 'vocês', 'pronome', 'Pronomes', '👥', 'Mato mã aĩ viá keská.'],
  // ato: CES17 (23, 24, 45) glosa “3pl.dem” / “3pl.abs”; ANH10 206 “Eles” [atuvu] (= ato + -vo). Exemplo: CES17 23.
  ['ato', 'eles, elas', 'pronome', 'Pronomes', '🧑‍🤝‍🧑', 'Ato chinãmakĩ.'],
  // awẽ: CES17 (9, 10, 35, 57) glosa “poss” (dele, dela). Exemplo: CES17 9 (“aro awẽ vene rishkia”).
  ['awẽ', 'dele, dela', 'pronome', 'Pronomes', '👉', 'Awẽ vene.'],

  // ── Pessoas e família ──
  // yora: CES17 (37, 59–62) “person/people”; CES08 “gente” (yora); CES18 (yora = corpo, gente); ANH10 041
  // “Gente, povo” [yora]. Exemplo: CES17 60.
  ['yora', 'pessoa', 'substantivo', 'Pessoas e família', '🧑', 'Yora vanaya.'],
  // shavo: CES17 (1, 4, 64–66, 78) “woman”. Exemplo: CES17 64.
  ['shavo', 'mulher', 'substantivo', 'Pessoas e família', '👩', 'Wa shavo.'],
  // vene: CES17 (7, 9) “man” / marido; ANH10 038 “Homem” [vɨni] (ɨ = e). Exemplo: CES17 9.
  ['vene', 'homem, marido', 'substantivo', 'Pessoas e família', '👨', 'Awẽ vene.'],
  // papa: ANH10 044 “Pai” [papa]. Exemplo montado: ẽ + substantivo (regra de CES17 75).
  ['papa', 'pai', 'substantivo', 'Pessoas e família', '👨‍👧', 'Ẽ papa.'],
  // txai, epa, pano, koka: CES18 p. 48 (“termos essenciais de parentesco tais como epa (tio paterno),
  // koka (tio materno), txai (cunhado/primo cruzado), pano (prima cruzada)”; “todo ‘Japó’ tratará seus
  // primos cruzados ‘Arara’ por txai”). koka também em ISA.
  ['txai', 'cunhado (e primo cruzado; também forma de tratamento)', 'substantivo', 'Pessoas e família', '🤝', 'Txai!'],
  ['epa', 'tio paterno', 'substantivo', 'Pessoas e família', '🧔', 'Epa.'],
  ['pano', 'prima cruzada', 'substantivo', 'Pessoas e família', '👧', 'Pano.'],
  [
    'koka',
    'tio materno (categoria que inclui também sobrinhos por irmã mais velhos; a filha do koka era o casamento preferencial entre os Marúbo)',
    'substantivo',
    'Pessoas e família',
    '👴',
    'Koka.',
  ],
  // take: ISA.
  ['take', 'parente da própria seção, sem distinção de sexo', 'substantivo', 'Pessoas e família', '🫂', 'Take.'],
  // nawa: CES08 (nawa, “estrangeiro”); CES17 (21, 31–33) “people” em nomes de povos (Yove Nawavo).
  ['nawa', 'estrangeiro; povo (em nomes como Yove Nawa)', 'substantivo', 'Pessoas e família', '🧭', 'Shono Yove Nawavo.'],
  // sheni: CES17 (101) “forbear” (antepassado), em “nokẽ shenirasĩ”.
  ['sheni', 'antepassado', 'substantivo', 'Pessoas e família', '🧓', 'Nokẽ shenirasĩ.'],
  // kakáya, kenchintxô, romeyá: ISA. CES17 p. 140 escreve “kẽchĩtxo” (pajé rezador) e “romeya” (pajé
  // dos espíritos); ANH10 199 “Cacique” [kakaya].
  [
    'kakáya',
    'dono de maloca respeitado, pacífico, procurado como conselheiro (chefe)',
    'substantivo',
    'Pessoas e família',
    '🏠',
    'Kakáya.',
  ],
  ['kenchintxô', 'pajé rezador, que entoa os cânticos de cura (também escrito kẽchĩtxo)', 'substantivo', 'Pessoas e família', '🎶', 'Kenchintxô.'],
  ['romeyá', 'pajé dos espíritos, xamã (também escrito romeya)', 'substantivo', 'Pessoas e família', '🧙', 'Romeyá.'],

  // ── Corpo ──
  // verõ: CES17 (68) “eye” (verõ-sho); CES13 (verõ yochĩ); ASJP w3ru; ANH10 006 [vɨru]. Exemplo: CES17 68.
  ['verõ', 'olho', 'substantivo', 'Corpo', '👁️', 'Westí verõsho oĩa.'],
  // mevi: sentido “mão” em ASJP (m3vi) e ANH10 022 [mɨvi]; grafia “mevi” atestada em CES18 (v. 589, p. 80,
  // “Rovo tama meviki”, lá traduzido “nos galhos das árvores-japó”: a grafia confere, o sentido é outro). Exemplo: ANH10 211 “Nossas mãos”, na ortografia de CES17 (nokẽ + mevi).
  ['mevi', 'mão', 'substantivo', 'Corpo', '✋', 'Nokẽ mevi.'],
  // tae: CES13 (“naí taeri”, direção do pé do céu); CES18 (p. 50, “noa taeri”, pé do grande rio; p. 90, verso
  // “Noa tae irinõ”, ao pé do rio); ANH10 029 “Pé” [taɨ]. Exemplo: CES13.
  ['tae', 'pé', 'substantivo', 'Corpo', '🦶', 'Naí taeri.'],
  // sheta: CES18 (p. 89, verso “Shawã make shetaya”, piranhas dentadas: sheta + -ya, “que tem”); ASJP S3ta;
  // ANH10 004 “Dente” [ʃɨta].
  ['sheta', 'dente', 'substantivo', 'Corpo', '🦷', 'Shawã make shetaya.'],
  // ana: ANH10 002 “Boca” [ana] (e 001 “Língua” = ana revo). Só letras iguais na ortografia.
  ['ana', 'boca', 'substantivo', 'Corpo', '👄', 'Ana.'],
  // shao: CES17 (85) “bone” (awá shao tapã, ponte de osso de anta); ASJP Sau. Exemplo: CES17 85.
  ['shao', 'osso', 'substantivo', 'Corpo', '🦴', 'Awá shao tapã.'],
  // imi: CES18 (p. 51: “sangue” (imi); “imi ichná”, estragando o sangue); ANH10 033 [imi]; ASJP imiki.
  ['imi', 'sangue', 'substantivo', 'Corpo', '🩸', 'Imi ichná.'],
  // nami: CES13 (“os duplos têm carne (nami)”); ANH10 265 “Carne” [nami].
  ['nami', 'carne', 'substantivo', 'Corpo', '🥩', 'Nami.'],
  // chinã: CES17 (10, 25, 42) “thought”; CES08 “pensamento” (chinã); CES13 (“e chinãnamã”, em meu
  // peito/pensamento). Exemplo: CES17 25.
  ['chinã', 'pensamento (também “peito”, onde se pensa)', 'substantivo', 'Corpo', '💭', 'Nokẽ chinã naíai.'],

  // ── Natureza ──
  // vari: CES17 p. 139 (“Vari Nawavo or ‘Sun People’”); CES18 (Povo Sol, Vari Nawavo); ASJP vari;
  // ANH10 064 [vari]; NL “Vari”. (CES18 p. 48 diz que o Povo Sol foi o primeiro a surgir.)
  ['vari', 'sol', 'substantivo', 'Natureza', '☀️', 'Vari Nawavo.'],
  // naí: CES17 (103) “sky” (Vei Naí Shavaya, morada do céu-morte); CES13 (naí taeri); ANH10 061 [nai].
  ['naí', 'céu', 'substantivo', 'Natureza', '🌌', 'Vei Naí Shavaya.'],
  // mai: CES17 (4, 63, 71) “land”; CES18 (p. 46, “mai vená”, terra jovem). Exemplo: CES17 63 (“na mai”).
  ['mai', 'terra', 'substantivo', 'Natureza', '🌍', 'Na mai.'],
  // waka FICOU DE FORA na revisão de fontes: ASJP e NL dão “waka” = água, mas ANH10 separa 048 “Água”
  // [waka pɨʃa] de 049 “Rio” [waka], e Costa (1992), citada por Oliveira (2014, UnB), dá “waka” rio e
  // “wakapaa” água. Sem saber qual sentido vale, a palavra não entra (o rio já é “kaya”).
  // kaya: CES17 (17) “kayã nachima”, glosado “river.loc bathe” (banhar no rio); forma sem o locativo em
  // CES18 (v. 562, p. 79, “Noa kaya tanai”, grande rio sobem). Exemplo: CES17 17.
  ['kaya', 'rio', 'substantivo', 'Natureza', '🏞️', 'Kayã nachima.'],
  // iwi: ASJP “tree” iwi; ANH10 152 “Árvore” [iwi]; CES18 (p. 73, nota 37: “yora iwi”, árvores como o mulateiro).
  ['iwi', 'árvore', 'substantivo', 'Natureza', '🌳', 'Yora iwi.'],
  // vimi: CES17 (56, 57, 89, 90) “fruit”; ANH10 156 “Fruta” [vimi]. Exemplo: CES17 90.
  ['vimi', 'fruta', 'substantivo', 'Natureza', '🍇', 'Vimi ichnárasĩ.'],
  // txi: CES13 (“txi kamã vero”, olho de onça-fogo, nome de pajé para “relógio”); ASJP “fire” Ci;
  // ANH10 056 “Fogo” [tʃi].
  ['txi', 'fogo', 'substantivo', 'Natureza', '🔥', 'Txi kamã vero.'],
  // yame: CES18 (p. 77, verso “Yame isĩ potxini”, e à meia-noite); ASJP “night” yam3; ANH10 068 [yamɨ].
  ['yame', 'noite', 'substantivo', 'Natureza', '🌙', 'Yame isĩ potxini.'],
  // koĩ: CES18 (“névoa” (koĩ)). Em CES17 (91, “píti koĩ”) a mesma forma quer dizer “verdadeiro”.
  ['koĩ', 'névoa', 'substantivo', 'Natureza', '🌫️', 'Koĩ.'],
  // vai: CES17 (28, 36, 47, 50) “path”; ASJP “path” wai; ANH10 085 “Trilha/Caminho” [vai]; ISA (Yové Vai,
  // Vei Vai). Exemplo: CES17 50 (“vai roaka-ma”, caminho não bom).
  ['vai', 'caminho', 'substantivo', 'Natureza', '🛤️', 'Vai roakama.'],
  // vei: CES17 (2, 11, 28) “death” (Vei Vai = Caminho-Morte). O ISA traduz “Vei Vai” como “Caminho da
  // Névoa”; Cesarino glosa “vei” como morte, e “névoa” é koĩ (CES18).
  ['vei', 'morte', 'substantivo', 'Natureza', '💀', 'Vei Vai.'],

  // ── Animais ──
  // kamã: CES18 p. 48 (Kamã Nawavo, “outro Povo Jaguar”; o primeiro é o Ino Nawavo); CES13 (txi kamã vero); ANH10 098 “Onça” [kamã].
  ['kamã', 'onça', 'substantivo', 'Animais', '🐆', 'Kamã Nawavo.'],
  // awá: CES17 (85) “tapir”; ANH10 097 “Anta” [awa]. Exemplo: CES17 85.
  ['awá', 'anta', 'substantivo', 'Animais', '🦛', 'Awá shao tapã.'],
  // rono: CES17 (15, 18) “snake”; ANH10 122 “Cobra” [runu]. Exemplo: CES17 15.
  ['rono', 'cobra', 'substantivo', 'Animais', '🐍', 'Ronorasĩ kenaiti.'],
  // wapa: ASJP “dog” wapa; ANH10 101 [wapa]; NL “Wapa or Mina”.
  ['wapa', 'cachorro', 'substantivo', 'Animais', '🐕', 'Wapa.'],
  // yapa: CES18 (p. 90, “yapa pesa”, escamas de peixe); ASJP “fish” yapa; ANH10 138 [iyapa]; NL “japa”.
  ['yapa', 'peixe', 'substantivo', 'Animais', '🐟', 'Yapa pesa.'],
  // maka: ANH10 118 “Rato” [maka]; NL “máka” (mouse).
  ['maka', 'rato', 'substantivo', 'Animais', '🐀', 'Maka.'],
  // kana: CES18 (Kana Nawavo, Povo Arara).
  ['kana', 'arara', 'substantivo', 'Animais', '🦜', 'Kana Nawavo.'],
  // txona: CES18 (Txonavo, Povo Macaco Barrigudo; a nota 5 explica que “nawavo” está contraído em
  // “Txonavo”); NL “chona” (monkey).
  ['txona', 'macaco-barrigudo', 'substantivo', 'Animais', '🐵', 'Txonavo.'],
  // Roka: ISA.
  ['Roka', 'macaco-parauacu', 'substantivo', 'Animais', '🐒', 'Roka.'],

  // ── Casa e coisas ──
  // shovo: CES18 nota 6 (“uma grande maloca (shovo)”); CES13 (“shovorvi”); ANH10 075 “Casa” [ʃuvu].
  // Exemplo montado: nokẽ + substantivo (regra de CES17 25).
  ['shovo', 'casa (a maloca, casa grande coletiva)', 'substantivo', 'Casa e coisas', '🛖', 'Nokẽ shovo.'],
  // kanti: ANH10 094 “Arco” [kanti]; 214 “Meu arco” (forma de ẽ + kanti). Exemplo: ANH10 214, com o
  // pronome adaptado à grafia de CES17 (“ẽ”).
  ['kanti', 'arco', 'substantivo', 'Casa e coisas', '🏹', 'Ẽ kanti.'],
  // píti: CES17 (91) “food” (píti koĩ, comida de verdade).
  ['píti', 'comida', 'substantivo', 'Casa e coisas', '🍲', 'Píti koĩ.'],
  // shõpa: CES17 (94) “papaya” (vei shõparasĩ, os mamões-morte).
  ['shõpa', 'mamão', 'substantivo', 'Casa e coisas', '🥭', 'Vei shõparasĩ.'],

  // ── Fala e cultura ──
  // vana: CES17 (14, 16, 35, 59–61) “speech” / “speak”; CES18 (p. 55, “vana roaka”, falar de modo belo).
  ['vana', 'falar (e “fala”)', 'verbo', 'Fala e cultura', '🗣️', 'Vana roaka.'],
  // ane: CES13 (“nome” (ane)); CES18 (p. 55, “kẽchĩtxo ane”, nome de pajé); ANH10 301 “Nome” [anɨ].
  ['ane', 'nome', 'substantivo', 'Fala e cultura', '🏷️', 'Kẽchĩtxo ane.'],
  // ese: CES17 (59, 82) “wisdom”; CES17 p. 140 (ese vana, “instructive speeches”); CES08 (“ese yama”, sem ensinamento).
  ['ese', 'sabedoria, ensinamento', 'substantivo', 'Fala e cultura', '📜', 'Ese vana.'],
  // yové, shokó, tanaméa: ISA. CES17 escreve “Yove” (21, 31).
  ['yové', 'espíritos benevolentes, com quem o pajé se comunica (também escrito yove)', 'substantivo', 'Fala e cultura', '✨', 'Yové Vai.'],
  ['shokó', 'o céu onde a alma troca de pele, segundo o ISA', 'substantivo', 'Fala e cultura', '🌠', 'Shokó.'],
  ['tanaméa', 'a festa mais elaborada e mais rara, em que a maloca anfitriã “limpa os caminhos”', 'substantivo', 'Fala e cultura', '🎉', 'Tanaméa.'],

  // ── Verbos (raiz; os sufixos estão na aba Gramática) ──
  // oĩ: CES17 (68) “see”, (77) “see.choose”. Exemplo: CES17 77.
  ['oĩ', 'ver', 'verbo', 'Verbos', '👀', 'Ẽ oĩtivoivo.'],
  // noko: CES17 (97, 98, 103, 104) “arrive”. Exemplo: CES17 103.
  ['noko', 'chegar', 'verbo', 'Verbos', '🏁', 'Rave nokoma.'],
  // kena: CES17 (11, 13, 15) “call”. Exemplo: CES17 11.
  ['kena', 'chamar', 'verbo', 'Verbos', '📣', 'Vei ari kenai.'],
  // nachi: CES17 (17, 18) “bathe”. Exemplo: CES17 17.
  ['nachi', 'tomar banho', 'verbo', 'Verbos', '🛁', 'Kayã nachima.'],
  // tsao: CES17 (8, 10, 18) “seat”, “seated”; ANH10 288 “Sentar-se” [tsaua]. Exemplo: CES17 10.
  ['tsao', 'sentar-se', 'verbo', 'Verbos', '🪑', 'Awẽ chinã naíai tsaõ.'],
  // vopi: CES17 (38) “die” e nota 2 (“vopia, ‘to die in this world’”); ANH10 281 “Morrer” [vupi].
  ['vopi', 'morrer', 'verbo', 'Verbos', '🥀', 'Vopitani tachikrãse.'],
  // ka: CES17 (64–66) “go” (ka-i). Exemplo: CES17 64.
  ['ka', 'ir', 'verbo', 'Verbos', '🚶', 'Wa shavo kai wetsa.'],
  // iki: CES17 (29, 82, 84) “say”. Exemplo: CES17 29 (sem as aspas internas).
  ['iki', 'dizer', 'verbo', 'Verbos', '💬', 'Vei Vai arina shovimakĩ, ikiti.'],

  // ── Qualidades e tempo ──
  // roaka: CES17 (50) “good” (vai roaka-ma, caminho não bom); CES18 (“vana roaka”, falar de modo belo);
  // ANH10 224 “Bom” [ruwaka].
  ['roaka', 'bom', 'adjetivo', 'Qualidades e tempo', '👍', 'Vana roaka.'],
  // ichná: CES17 (76, 90) “bad”; CES18 (p. 51, “shavá ichná”, tempo ruim); ANH10 225 “Mau” [iʃnaga].
  ['ichná', 'ruim', 'adjetivo', 'Qualidades e tempo', '👎', 'Shavá ichná.'],
  // wetsa: CES17 (4, 7, 8, 53) “other”; ANH10 307 “Outro” [wɨtsa]. Exemplo: CES17 4.
  ['wetsa', 'outro', 'adjetivo', 'Qualidades e tempo', '🔁', 'Shavo wetsa.'],
  // westí: CES17 (8) “alone”, (68) “only.one”. Exemplo: CES17 8.
  ['westí', 'sozinho, um só', 'adjetivo', 'Qualidades e tempo', '☝️', 'Wetsa westí tsaopakea.'],
  // rama: CES17 (25) “now”; também em Oliveira (2014, UnB), citando Cesarino (2008). Exemplo: CES17 25.
  ['rama', 'agora', 'advérbio', 'Qualidades e tempo', '⏰', 'Ramaro nokẽ chinã naíai.'],
];

export const VOCAB_MZR = buildVocab('mzr', ROWS);
