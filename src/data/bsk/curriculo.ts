import type { UnitSeed } from '../types';

/**
 * Trilha do burushaski, do A1.1 ao B1.4 (o teto do idioma; ver `incomplete` em index.ts). A1: fontes
 * no cabeçalho de vocabulario.ts (consultadas em 09/10/2026) — o dicionário anotado de Starostin (cita Berger 1974/1998), a Wikipédia em inglês
 * ("Burushaski") e, só pra saudação/cortesia, o roteiro do Wikivoyage ("Burushaski phrasebook").
 * A2 (16/10/2026): Yoshioka (2012) e Munshi e Karim (2012); ver o bloco antes da unidade 3.
 * B1 (16/10/2026): Yoshioka (2012), com os contos gravados, e o texto “Šíri Badát” de Willson (1999/2002)
 * citado por ele; ver o bloco antes da unidade 5.
 */
export const UNITS_BSK: UnitSeed[] = [
  {
    id: 'bsk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bebila? Primeiro encontro',
    emoji: '👋',
    card: {
      id: 'bsk-c1',
      title: 'Uma língua isolada no telhado do mundo',
      emoji: '🏔️',
      history:
        'O burushaski (بروشسکی) é falado nos vales de Hunza, Nager e Yasin, no norte do Paquistão (Gilgit-Baltistão), por cerca de 130 mil pessoas (Wikipédia, estimativa de 2018-2020). É uma língua isolada: sem parentesco comprovado com nenhuma outra língua do mundo, nem com as línguas indo-iranianas vizinhas. Hunza e Nager falam dialetos bem próximos; o de Yasin, mais isolado geograficamente, divergiu mais e é de entendimento difícil pra quem só conhece Hunza-Nager — o dialeto deste pacote. Durante séculos foi só falada, sem escrita própria; hoje é promovido um alfabeto baseado no perso-árabe (Nastaliq) no Paquistão, mas os linguistas (e este pacote) usam a romanização criada por Hermann Berger, o autor da gramática de referência.',
      culture_tip:
        '“Bebila?” é a forma informal de saudação, de origem própria do burushaski (ligada à palavra “bila”, “é, está”, que aparece em várias perguntas do dia a dia, como “qual é o seu nome?”). É diferente do “Salam” (de origem árabe, via o islã) usado em todo o Paquistão — o roteiro de frases consultado lista os dois, lado a lado, como opções.',
      grammar_why:
        'Muitos substantivos do burushaski — sobretudo termos de parentesco, como “ími” (mãe) — nunca aparecem sozinhos: exigem sempre um prefixo de posse antes (“a mãe DELE”, “a mãe DELA”…). É por isso que “ími” já aparece aqui citada com essa ressalva: a forma “pura”, sem prefixo nenhum, não existe nas fontes consultadas.',
      grammar_examples: [
        ['Bebila?', 'Tudo bem? (saudação informal)'],
        ['Une gueek besan bila?', 'Qual é o seu nome?'],
        ['Jáa aek Linu bila.', 'Meu nome é Linu.'],
        ['Ju na!', 'Obrigado!'],
      ],
      character_guide: [
        // “ỵ”: a letra de Berger (Yoshioka 2012, p. 153, “áỵa”); o som (IPA ɻ) está em Munshi e Karim (2012),
        // p. 9, “[aɻa] ‘father’”, e na Wikipédia em inglês, que resume a descrição de Berger (1998).
        ['ỵ', 'um som raro: a língua se curva para trás, e sai algo entre o “r” e o “j” de “já” (IPA ɻ)', 'áỵa — “pai”'],
        ['ṭ', '“t” retroflexo: a língua curva pra trás, tocando mais atrás no céu da boca', 'hurúṭas — “sentar, morar”'],
        ['ṣ', '“s” retroflexo, no mesmo lugar de articulação do “ṭ”', 'ṣias — “comer”'],
        ['ć / ċ', 'duas africadas diferentes do nosso “tch”: “ć” é palatal (mais “chiada”), “ċ” é dental (mais seca)', 'ćhúmo — “peixe”'],
      ],
    },
    lessons: [
      {
        id: 'bsk-u1-l1',
        title: 'Bebila, ju na',
        kind: 'licao',
        words: ['bebila?', 'ju na', 'huyy', 'parwa api', 'awá', 'be ya'],
        cloze: [
          { sentence: '___?', answer: 'Bebila', options: ['Bebila', 'Awá', 'Ju na'], translation: 'Tudo bem?' },
          { sentence: '___.', answer: 'Ju na', options: ['Ju na', 'Huyy', 'Be ya'], translation: 'Obrigado.' },
          { sentence: '___.', answer: 'Parwa api', options: ['Parwa api', 'Awá', 'Huyy'], translation: 'De nada.' },
        ],
        voice: {
          bot: 'Bebila?',
          botTranslation: 'Tudo bem? (saudação informal)',
          expected: ['Ju na!', 'Awá, ju na.'],
          hint: 'Agradeça com “Ju na!”, ou diga “sim” e agradeça: “Awá, ju na.”',
        },
        communityPrompt: 'Escreva a saudação (Bebila), um agradecimento (Ju na) e a resposta “de nada” (Parwa api).',
      },
      {
        id: 'bsk-u1-l2',
        title: 'Je, un, in',
        kind: 'licao',
        // “je” (eu) e “jáa” (meu, e também quem faz a ação): Yoshioka (2012), tabelas 23 e 24, p. 79–80;
        // Munshi e Karim (2012), p. 49 (je; possessivo jaa). Até 16/10/2026 a lição ensinava “ja” como
        // “eu”, forma que só existe no dialeto de Yasin (Starostin, item 42, “I”).
        words: ['je', 'un', 'in', 'mi', 'ma', 'áỵa'],
        cloze: [
          { sentence: '___.', answer: 'Je', options: ['Je', 'Un', 'In'], translation: 'Eu.' },
          { sentence: '___.', answer: 'Un', options: ['Un', 'Je', 'Ma'], translation: 'Tu, você.' },
          { sentence: '___.', answer: 'Áỵa', options: ['Áỵa', 'In', 'Mi'], translation: 'Pai.' },
        ],
        voice: {
          bot: 'Une gueek besan bila?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Jáa aek Linu bila.'],
          hint: 'Diga seu nome com “Jáa aek ___ bila” (meu, nome, ___, é). “Je” é “eu”; “jáa” é “meu”.',
        },
        communityPrompt: '“Je” é “eu”, mas “meu” é “jáa”: por isso a apresentação começa com “Jáa aek”, “meu nome”. Complete “Jáa aek ___ bila.” com o seu nome.',
      },
      // Lições extras do A1.1 (16/10/2026), com palavras novas do vocabulário de Yoshioka (2012),
      // Apêndice II (páginas no comentário de cada palavra, em vocabulario). As lacunas são de
      // palavra solta, como nas lições extras do apache ocidental, sem frase montada.
      {
        id: 'bsk-u1-l4',
        title: 'Hir, gus, hilés, dasín: as pessoas',
        kind: 'licao',
        words: ['hir', 'gus', 'hilés', 'dasín', 'kaáko', 'kaáki'],
        cloze: [
          { sentence: '“___”: homem.', answer: 'Hir', options: ['Hir', 'Gus', 'Hilés'], translation: '“Hir”: homem.' },
          { sentence: '“___”: menina.', answer: 'Dasín', options: ['Dasín', 'Gus', 'Kaáki'], translation: '“Dasín”: menina.' },
          { sentence: '“___”: irmão.', answer: 'Kaáko', options: ['Kaáko', 'Kaáki', 'Hilés'], translation: '“Kaáko”: irmão.' },
        ],
        voice: {
          bot: 'Hir.',
          botTranslation: 'Homem.',
          // Yoshioka (2012), Ap. II, p. CCXXVII e CCXVII: os verbetes de “hir” e “gus” remetem um ao outro como opostos.
          expected: ['Gus.', 'gus'],
          hint: 'Diga o oposto de “hir” (homem): “gus” (mulher).',
        },
        // “kaáko”, “kaáki”: Yoshioka (2012), Ap. II, p. CCXXXV, sem o @ de prefixo e com a origem no xina.
        // Munshi e Karim (2012), p. 52: parentescos emprestados (nana, mama) não exigem prefixo de posse.
        communityPrompt:
          '“Kaáko” (irmão) e “kaáki” (irmã) vieram do xina, a língua vizinha. Por isso não levam o prefixo de posse de “ími” (mãe). Escreva as quatro palavras de pessoas: hir, gus, hilés e dasín.',
      },
      {
        id: 'bsk-u1-l5',
        title: 'Ṣapík, ćhap, mamú: a comida',
        kind: 'licao',
        words: ['ṣapík', 'ćhap', 'báalt', 'ṭiṅán', 'mamú', 'ćáai'],
        cloze: [
          { sentence: '“___”: pão.', answer: 'Ṣapík', options: ['Ṣapík', 'Ćhap', 'Mamú'], translation: '“Ṣapík”: pão.' },
          { sentence: '“___”: ovo.', answer: 'Ṭiṅán', options: ['Ṭiṅán', 'Báalt', 'Ćáai'], translation: '“Ṭiṅán”: ovo.' },
          { sentence: '“___”: leite.', answer: 'Mamú', options: ['Mamú', 'Ćáai', 'Ćhap'], translation: '“Mamú”: leite.' },
        ],
        voice: {
          bot: 'Ṣapík, ćhap.',
          botTranslation: 'Pão, carne.',
          expected: ['Báalt.', 'Mamú.', 'Ṭiṅán.', 'báalt', 'mamú', 'ṭiṅán'],
          hint: 'Diga mais uma comida: “báalt” (maçã), “mamú” (leite) ou “ṭiṅán” (ovo).',
        },
        // Yoshioka (2012), Ap. II: “čáai” do urdu “čāē” (p. CXCV); “ṭiŋán” na encosta de Hunza, “ṭinán”
        // na beira do rio, “ṭigán” em Nager (p. CCLXXXIII; e Introdução, p. 7).
        communityPrompt:
          'O chá, “ćáai”, veio do urdu. E o ovo muda de aldeia para aldeia: “ṭiṅán” em Hunza, “ṭigán” em Nager, segundo Yoshioka. Escreva o que você comeu hoje com as palavras da lição.',
      },
      {
        id: 'bsk-u1-l3',
        title: 'Prova: Bebila, jáa aek',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bebila? Une gueek besan bila?',
          botTranslation: 'Tudo bem? Qual é o seu nome?',
          expected: ['Ju na! Jáa aek Linu bila.'],
          hint: 'Agradeça e diga seu nome: “Ju na! Jáa aek ___ bila.”',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (Bebila), seu nome (Jáa aek ___ bila) e um agradecimento (Ju na).',
      },
    ],
  },
  {
    id: 'bsk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Família e os primeiros números',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'bsk-c2',
      title: 'Classes gramaticais e um sistema de base 20',
      emoji: '📐',
      history:
        'Quase tudo o que se sabe hoje sobre o burushaski vem de uma cadeia de três gerações de pesquisa: D. L. R. Lorimer (1935-1938, 1962) fez o primeiro levantamento amplo; Hermann Berger (1974, pra Yasin; 1998, pra Hunza-Nager, em três volumes) corrigiu e aprofundou a análise de Lorimer com décadas de trabalho de campo; e bancos de dados acadêmicos recentes (como o de G. Starostin, usado como fonte geral deste pacote) organizam e comparam esse material palavra por palavra. O burushaski não é língua oficial em nenhum lugar, não tem imprensa própria nem ensino regular nas escolas — por isso o pacote tem um teto mais baixo que línguas como o checheno ou o abecásio, que são oficiais em algum território.',
      culture_tip:
        'Os termos de parentesco do burushaski, como os de muitas línguas da região, não têm gênero marcado no som da palavra como “filho/filha” no português: “giyaas” serve tanto pra menino quanto pra menina — só o contexto diz qual é.',
      grammar_why:
        'O burushaski tem de quatro a cinco classes gramaticais de substantivo (a tradição de Lorimer e Berger as chama de hm, hf, x, y e z) — parecido com “gêneros”, mas mais amplo: além de humano-masculino e humano-feminino, há classes pra objetos contáveis, pra massas/líquidos e pra abstrações. A MESMA raiz pode até mudar de classe conforme o sentido: “sal em pedaços” é uma classe, “sal em pó” é outra. Os números também são especiais: de 20 em diante, o sistema é de base 20 (vigesimal) — 40 é literalmente “dois-vintes” (altó-áltar) e 60 é “três-vintes” (iskí-áltar), do mesmo jeito que o francês diz 80 como “quatre-vingts” (quatro-vintes).',
      grammar_examples: [
        ['Han, altó, uskó, wálto.', 'Um, dois, três, quatro.'],
        ['Ími.', 'A mãe dele (“mãe” nunca vem sozinha: sempre com um prefixo de posse antes).'],
        ['Áỵa.', 'Pai.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bsk-u2-l1',
        title: 'Ími, giyaas, ṣias',
        kind: 'licao',
        words: ['ími', 'yuús', 'muyar', 'giyaas', 'minaas', 'ṣias'],
        cloze: [
          { sentence: '___.', answer: 'Ími', options: ['Ími', 'Áỵa', 'Yuús'], translation: 'Mãe.' },
          { sentence: '___.', answer: 'Giyaas', options: ['Giyaas', 'Yuús', 'Muyar'], translation: 'Criança.' },
          { sentence: '___.', answer: 'Ṣias', options: ['Ṣias', 'Minaas', 'Barenas'], translation: 'Comer.' },
        ],
        voice: {
          bot: 'Áỵa?',
          botTranslation: 'Pai?',
          expected: ['Ími.', 'Áỵa.'],
          hint: 'Responda com uma palavra de família: “Ími” (mãe) ou “Áỵa” (pai).',
        },
        communityPrompt: 'Escreva três palavras de família: mãe (ími), pai (áỵa) e uma terceira à sua escolha.',
      },
      {
        id: 'bsk-u2-l2',
        title: 'Han, altó, uskó, wálto',
        kind: 'licao',
        words: ['hurúṭas', 'barenas', 'han', 'altó', 'uskó', 'wálto'],
        cloze: [
          { sentence: '___.', answer: 'Han', options: ['Han', 'Altó', 'Uskó'], translation: 'Um.' },
          { sentence: '___.', answer: 'Wálto', options: ['Wálto', 'Uskó', 'Altó'], translation: 'Quatro.' },
          { sentence: '___.', answer: 'Barenas', options: ['Barenas', 'Hurúṭas', 'Minaas'], translation: 'Ver.' },
        ],
        voice: {
          bot: 'Han, altó, uskó...',
          botTranslation: 'Um, dois, três...',
          expected: ['Wálto.'],
          hint: 'Continue a contagem: depois de uskó (três) vem wálto (quatro).',
        },
        communityPrompt: 'Conte de han (um) até wálto (quatro).',
      },
      {
        id: 'bsk-u2-l3',
        title: 'Prova: família e números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ími, áỵa, yuús...',
          botTranslation: 'Mãe, pai, esposa...',
          expected: ['Giyaas.'],
          hint: 'Complete a lista de família com outra palavra: “Giyaas” (criança).',
        },
        communityPrompt: 'Escreva sobre sua família usando pelo menos três palavras: ími (mãe), áỵa (pai), yuús/muyar (esposa/marido) ou giyaas (criança).',
      },
    ],
  },
  // ══════════════════════════════════════════════════════════════════════════════════════════
  // A2 (16/10/2026). Fontes, todas lidas nesta sessão:
  // • Y12 = Noboru Yoshioka, “A Reference Grammar of Eastern Burushaski”, tese de doutorado,
  //   Universidade de Estudos Estrangeiros de Tóquio, 2012 (tufs.repo.nii.ac.jp/records/1002, acesso
  //   aberto). Burushaski “oriental” = Hunza e Nager. Páginas arábicas = gramática; romanas = apêndices
  //   (I: textos gravados; II: vocabulário). Toda frase foi conferida na IMAGEM da página: o texto
  //   extraído do PDF perde os diacríticos.
  // • MK = Sadaf Munshi e Piar Karim, “A Grammatical Sketch of Hunza Burushaski”, Universidade do
  //   Norte do Texas, rascunho de 2012 (archive.org/details/a-grammatical-sketch-of-hunza-burushaski).
  //   Dados de Piar Karim, falante de Hunza (nota 2, p. 7). Também conferido nas imagens.
  // Grafia: a do curso (Berger). Das frases de Y12 só se trocam letras, pela tabela de notações de
  // Yoshioka (p. xv): č → ć, čh → ćh, c → ċ, ch → ċh, š → ś, ŋ → ṅ, γ → ġ; a divisão das palavras e os
  // acentos ficam como em Y12 (a linha de cima, a da pronúncia). Nas frases de MK que só têm a cópula
  // e um nome, as palavras vão na forma do dicionário de Y12 (hilés, dasín, matháan) e a cópula na
  // forma da tabela 46/47 de Y12 (bái, bo, bam), marcadas “MK, na grafia de Y12”. Uma frase de MK com
  // palavras que Y12 não registra fica na grafia de MK, só com ǰ → j e ŋ → ṅ (MK não marca acento).
  // Nenhuma frase das unidades 3 e 4 foi montada pelo curso.
  // ══════════════════════════════════════════════════════════════════════════════════════════
  {
    id: 'bsk-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Huk ámulo bi? Onde fica, como é',
    emoji: '🏘️',
    card: {
      id: 'bsk-c3',
      title: 'Duas grandes obras, um vale cheio de falares',
      emoji: '📚',
      // Y12, p. 7 (dialetos de Hunza: encosta e beira do rio; Nager; 40% de Nager fala xina), p. 8
      // (mires até 1974; Baltit = Karimabad; alfabetização de cerca de 95% em Hunza; estrada do
      // Karakoram aberta em 1986), p. 9 (Lorimer 1935–38: 67 textos, cerca de 9.500 verbetes; Berger
      // 1998: 67 textos, cerca de 10 mil verbetes).
      history:
        'O burushaski tem duas obras de referência enormes, cada uma em três volumes: a de D. L. R. Lorimer (1935 a 1938) e a de Hermann Berger (1998). Cada uma traz gramática, 67 textos e cerca de 10 mil palavras, segundo Noboru Yoshioka. O A2 deste curso segue a gramática de Yoshioka (2012), feita com falantes de Hunza e Nager. Ele mostra que quase cada aldeia tem seu jeito: o ovo é “ṭiṅán” na encosta de Hunza e “ṭigán” em Nager. Até 1974, Hunza e Nager eram dois principados, governados por mires. A capital de Hunza era Baltit, a atual Karimabad.',
      // Y12, p. 135–136, (168) e (169): “Hunza people prefer to use the expression in (168) for greeting,
      // while Nager people use the expression in (169).”
      culture_tip:
        'Em Hunza, quem cruza com alguém no caminho pergunta “Am duúsa?”, “aonde você vai?”. Em Nager a mesma saudação é “Am galáa?”, segundo Yoshioka. As duas perguntam para onde a pessoa vai, não como ela está.',
      // Y12, p. 49 (tabela 17: casos) e p. 124 (tabela 46: cópula no presente).
      grammar_why:
        'O nome ganha um final conforme o papel na frase: “híre ha” é “a casa do homem” (-e, de), e “hírar” é “para o homem” (-ar). E o verbo “ser, estar” muda com quem ou o que se descreve: “bái” para ele, “bo” para ela, “bi” e “bilá” para coisas, conforme a classe da palavra.',
      grammar_examples: [
        ['Huk ámulo bi?', '“Onde está o cão?” (Yoshioka, p. 233)'],
        ['Huk khóle bi.', '“O cão está aqui.” (p. 232)'],
        ['Híre ha.', '“A casa do homem.” (p. 177)'],
        ['Am duúsa?', '“Aonde você vai?”, a saudação de Hunza (p. 135)'],
      ],
      // Y12, p. xv (tabela de notações: IPA e as letras de Berger).
      character_guide: [
        ['ś', 'parecido com o “x” de “xícara”, com a língua mais para a frente (IPA ɕ)', 'śuá — bom'],
        ['ġ', 'um “g” sem fechar a garganta, o ar passa raspando (IPA ɣ)', 'ġéniṣ — ouro'],
        ['ṅ', 'o som de “ng” em “banguela”, sem soltar o “g” (IPA ŋ)', 'ṭiṅán — ovo'],
        ['ċ', '“ts”, como em “tsunami” (IPA ʦ)', 'gunċ — dia'],
      ],
    },
    lessons: [
      {
        id: 'bsk-u3-l1',
        title: 'Huk ámulo bi? Onde está?',
        kind: 'licao',
        words: ['ha', 'baazáar', 'sukúul', 'kitáab', 'ámulo', 'nías'],
        cloze: [
          // Y12, p. 233, (311b)
          { sentence: 'Huk ___ bi?', answer: 'ámulo', options: ['ámulo', 'khóle', 'bésan'], translation: 'Onde está o cão?' },
          // Y12, p. 177, (220a)
          { sentence: 'Híre ___.', answer: 'ha', options: ['ha', 'huk', 'dan'], translation: 'A casa do homem.' },
          // MK, p. 31, (47a), na grafia de MK (ǰ → j, ŋ → ṅ): “ǰe gatoŋ gay-ar bazaar-ar niya bay-am”.
          // “haalar” (para casa): MK, p. 21, (28a) “haal-a-r”.
          {
            sentence: 'Je gatoṅ gayar ___ niya bayam.',
            answer: 'bazaarar',
            options: ['bazaarar', 'haalar', 'yasinar'],
            translation: 'Eu fui ao mercado comprar roupa.',
          },
        ],
        voice: {
          // Y12, p. 233 (311b) e p. 232 (310b)
          bot: 'Huk ámulo bi?',
          botTranslation: 'Onde está o cão?',
          expected: ['Huk khóle bi.', 'huk khóle bi', 'khóle bi'],
          hint: 'Diga que o cão está aqui: “Huk khóle bi.” (“khóle” é “aqui”).',
        },
        // dativo “-ar”: Y12, p. 56; MK, p. 35 (55a) “sukuul-ar” e p. 21 (28a) “haal-a-r”.
        communityPrompt:
          'As frases de Munshi e Karim não marcam a sílaba forte, por isso escrevem “bazaar” onde Yoshioka escreve “baazáar”: é a mesma palavra. Escreva, com “-ar” (para), aonde você foi nesta semana: “baazáarar”, “sukúular” ou “haalar”.',
      },
      {
        id: 'bsk-u3-l2',
        title: 'Bái, bo, bi: ser e estar',
        kind: 'licao',
        words: ['daltás', 'śuá', 'uyúm', 'jóṭ', 'biimáar', 'matháan'],
        cloze: [
          // MK, p. 63, (87e) “in hiles bay”, na grafia de Y12 (cópula: tabela 46, p. 124)
          { sentence: 'Ín hilés ___.', answer: 'bái', options: ['bái', 'bo', 'bi'], translation: 'Ele é um menino.' },
          // MK, p. 63, (87f) “in ḍasin bo”, na grafia de Y12
          { sentence: 'Ín dasín ___.', answer: 'bo', options: ['bo', 'bái', 'bilá'], translation: 'Ela é uma menina.' },
          // MK, p. 64, (88g) “u maṭhan bam”, na grafia de Y12 (cópula no passado: tabela 47, p. 125)
          { sentence: 'Ú ___ bam.', answer: 'matháan', options: ['matháan', 'daltás', 'uyúm'], translation: 'Eles estavam longe.' },
        ],
        voice: {
          // MK, p. 63, (87e) e (87f), na grafia de Y12
          bot: 'Ín hilés bái.',
          botTranslation: 'Ele é um menino.',
          expected: ['Ín dasín bo.', 'ín dasín bo', 'dasín bo'],
          hint: 'Agora diga “ela é uma menina”: “Ín dasín bo.”',
        },
        communityPrompt:
          'A cópula muda com quem ou o que se descreve: “bái” para ele, “bo” para ela, “bi” e “bilá” para coisas. Escreva duas frases sobre pessoas que você conhece, com “Ín … bái” ou “Ín … bo”.',
      },
      {
        id: 'bsk-u3-l3',
        title: 'Prova: onde fica, como é',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // Y12, p. 233 (311a) e p. 232 (310a)
          bot: 'Khóle bésan bi?',
          botTranslation: 'O que há aqui?',
          expected: ['Khóle huk bi.', 'khóle huk bi', 'huk bi'],
          hint: 'Responda “aqui está o cão”: “Khóle huk bi.”',
        },
        communityPrompt:
          'Escreva um diálogo curto com frases de Yoshioka: alguém pergunta “Huk ámulo bi?” e outro responde “Huk khóle bi.”. Depois diga, em português, onde ficam a sua casa (ha) e a escola (sukúul).',
      },
    ],
  },
  {
    id: 'bsk-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Hin baadśáan bam: era uma vez',
    emoji: '📜',
    card: {
      id: 'bsk-c4',
      title: 'Contos gravados em Hunza',
      emoji: '🎙️',
      // Y12, Ap. I, p. I (conto do peixe: Muhammad Ali, falar de Ganish, gravado em Karimabad, 20/10/2008, 39 min) e p. CLXIII (Shon
      // Gukur: Afraz ul-Lah Beg, Haiderabad, 14/09/2008); Introdução, p. 9 (contos reunidos por Lorimer,
      // Tikkanen, Berger, van Skyhawk e Tiffou; os provérbios de Tiffou, 1993).
      history:
        'Boa parte do que se sabe do burushaski vem de contos gravados. Lorimer, Berger, Tikkanen e Tiffou reuniram muitos, e Tiffou juntou também muitos provérbios. Em 2008, Noboru Yoshioka gravou em Hunza o conto do peixe de ouro, contado por Muhammad Ali, de Ganish, e o conto dos dois xamãs, contado por Afraz ul-Lah Beg na casa dele, em Haiderabad. As histórias desta unidade usam frases desses dois contos, como estão na tese.',
      // Y12, Ap. I, p. CLXIII (Shon Gukur, n.º 2: “u óltalik húnzue mašúur biṭáyo bam”, “Both were famous
      // in Hunza as Bitans”; sinopse: a aposta sobre o bezerro); Introdução, p. 8 (Hunza ismaelita, Nager xiita).
      culture_tip:
        'Os “biṭán” eram os xamãs de Hunza, que adivinhavam o futuro. O conto de Shon Gukur começa assim: “U óltalik húnzue maśúur biṭáyo bam”, “os dois eram bitans famosos em Hunza”. Hoje quase todo Hunza é muçulmano ismaelita, e Nager é xiita, segundo Yoshioka.',
      // Y12, p. 130 (tabela 54: passado de girmín-) e p. 127 (tabela 51: futuro).
      grammar_why:
        'O passado e o futuro têm finais próprios para cada pessoa. Com “girmínas” (escrever): “girmínam” é “eu escrevi”, “girmínimi” é “ele escreveu”. No futuro a raiz muda um pouco: “girmíyam” é “vou escrever”.',
      grammar_examples: [
        ['Girmínam.', '“Eu escrevi.” (Yoshioka, tabela 54, p. 130)'],
        ['Girmíyam.', '“Eu vou escrever.” (tabela 51, p. 127)'],
        ['Isé buś ité saásaṭe díi dáa dubaará díimi.', '“O gato veio de novo naquela tarde.” (p. 131)'],
        ['Hin baadśáan bam.', '“Havia um rei.” (conto do peixe, n.º 1)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bsk-u4-l1',
        title: 'Sabuúr, khúulto, muú: o tempo',
        kind: 'licao',
        words: ['sabuúr', 'khúulto', 'muú', 'girmínas', 'ġatánas', 'duró'],
        cloze: [
          // Y12, p. 208, (279b), a primeira oração: “Khúulto je ínar qhátan girmíyam(…)”
          {
            sentence: 'Khúulto je ínar qhátan ___.',
            answer: 'girmíyam',
            options: ['girmíyam', 'girmínam', 'girmínimi'],
            translation: 'Hoje eu vou escrever uma carta para ele.',
          },
          // Y12, p. 135, (167), a primeira oração: “ye chor chor duró e” (ch → ċh)
          { sentence: 'Ye ċhor ċhor ___ e.', answer: 'duró', options: ['duró', 'mamú', 'kitáab'], translation: 'Vamos, faça o trabalho mais depressa!' },
          // Y12, p. 131, (160)
          {
            sentence: 'Isé buś ité saásaṭe díi dáa dubaará ___.',
            answer: 'díimi',
            options: ['díimi', 'dáayam', 'dukóoma'],
            translation: 'O gato veio de novo naquela tarde.',
          },
        ],
        voice: {
          // Y12, tabela 54 (p. 130) e tabela 51 (p. 127)
          bot: 'Girmínam.',
          botTranslation: 'Eu escrevi.',
          expected: ['Girmíyam.', 'girmíyam'],
          hint: 'Agora diga no futuro: “girmíyam” (eu vou escrever).',
        },
        communityPrompt:
          'Na tabela de Yoshioka, “vir” tem formas bem diferentes no passado: “dáayam” (eu vim), “dukóoma” (você veio), “díimi” (ele veio). Escreva, em português, o que você fez ontem (sabuúr) e o que vai fazer hoje (khúulto).',
      },
      {
        id: 'bsk-u4-l2',
        title: 'Mén? Bésan? Bés? As perguntas',
        kind: 'licao',
        words: ['mén', 'bésan', 'bés', 'béśal', 'bélaṭe', 'gunċ'],
        cloze: [
          // Y12, p. 233, (311a)
          { sentence: 'Khóle ___ bi?', answer: 'bésan', options: ['bésan', 'mén', 'béśal'], translation: 'O que há aqui?' },
          // Y12, p. 56, (74)
          // (na fala gravada, “mén” perde o acento: “éle men ke apám”)
          { sentence: 'Éle ___ ke apám.', answer: 'men', options: ['men', 'bés', 'gunċ'], translation: 'Não havia ninguém lá.' },
          // MK, p. 32, (48b) “un bazaar-ar bes ni bam?”, na grafia de MK (sem acento)
          { sentence: 'Un bazaarar ___ ni bam?', answer: 'bes', options: ['bes', 'amular', 'besan'], translation: 'Por que você foi ao mercado?' },
        ],
        voice: {
          // Y12, p. 186, (235): “be gumáibáa?”, a saudação de praxe para saber como a pessoa está.
          // Resposta: o roteiro do Wikivoyage dá “Shwa ba” para “estou bem”, que na grafia de Berger é
          // “śuá báa” (śuá, bom: Y12 p. CCLXXIII; báa, cópula da 1ª pessoa: tabela 46, p. 124). “Śuá” sozinho
          // também vale: no conto do peixe, n.º 19 (Ap. I, p. IX), o criado responde só “šuá” ao rei.
          bot: 'Be gumáibáa?',
          botTranslation: 'Como vai você?',
          expected: ['Śuá báa.', 'śuá báa', 'Śuá.', 'śuá'],
          hint: 'Diga que está bem: “Śuá báa” (bom, eu estou). Só “śuá” também serve, como o criado responde ao rei no conto do peixe.',
        },
        communityPrompt:
          'Em burushaski a palavra de pergunta fica no mesmo lugar da resposta, sem mudar a ordem: “Khóle bésan bi?” (o que há aqui?), “Khóle huk bi.” (aqui está o cão). Escreva três perguntas em português que você faria com mén (quem), béśal (quando) e bés (por quê).',
      },
      {
        id: 'bsk-u4-l3',
        title: 'Prova: era uma vez',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // Y12, Ap. I, conto do peixe, n.º 1 e n.º 3 (p. II)
          bot: 'Hin baadśáan bam.',
          botTranslation: 'Havia um rei.',
          expected: ['Íne baadśáa hin jamaaát bom.', 'íne baadśáa hin jamaaát bom', 'jamaaát bom'],
          hint: 'Continue o conto como na tese de Yoshioka: “Íne baadśáa hin jamaaát bom.” (o rei tinha uma esposa).',
        },
        communityPrompt:
          'Conte, em português, um conto curto que você conhece, começando com “Hin baadśáan bam” (havia um rei), como o narrador do conto do peixe de ouro.',
      },
    ],
  },
  // ══════════════════════════════════════════════════════════════════════════════════════════
  // B1 (16/10/2026). Fontes, todas lidas nesta sessão, nas IMAGENS das páginas:
  // • Y12 (ver o bloco do A2): gramática (páginas arábicas) e os quatro contos do Apêndice I (páginas
  //   romanas), sempre com o número da frase. O conto do peixe (“čhúmoe minás”, 351 frases, Muhammad
  //   Ali, Ganish, 2008) dá as unidades 5 a 7; o de Kulio Laskir (Afraz ul-Lah Beg, Haiderabad, 2008)
  //   dá uma voz da unidade 7.
  // • W02 = Stephen R. Willson, “A Look at Hunza Culture” (SIL e National Institute of Pakistan
  //   Studies, 1999; 2.ª ed. 2002), o texto “Šíri Badát”. O livro não tem cópia aberta: as frases vêm
  //   das citações que Y12 faz dele, com o número da frase de Willson e a página de Y12. Y12 cita essas
  //   frases na grafia de Willson; a troca para Berger segue a mesma tabela de Y12 (p. xv, coluna
  //   “Willson”): ts → ċ, tsh → ċh, ch → ć, chh → ćh, sh → ś, ṣh → ṣ, ng → ṅ, gh → ġ.
  // Grafia das frases de Y12: a mesma regra do A2 (č → ć, čh → ćh, c → ċ, ch → ċh, ç → c̣, š → ś, ŋ → ṅ,
  // γ → ġ), com a divisão das palavras e os acentos da linha de pronúncia de Y12. Berger separa o verbo
  // da cópula auxiliar (“éća báa”, Y12 p. xv); o curso mantém a escrita junta de Y12 (“baríćabáan”),
  // como no A2. Nenhuma frase das unidades 5 a 8 foi montada pelo curso; trechos de frase vão marcados.
  // ══════════════════════════════════════════════════════════════════════════════════════════
  {
    id: 'bsk-u5',
    level: 'B1.1',
    cefr: 'B1',
    title: 'Guċhárimi: pelo caminho',
    emoji: '🥾',
    card: {
      id: 'bsk-c5',
      title: 'O conto do peixe e o companheiro de viagem',
      emoji: '🐟',
      // Y12, Ap. I, p. I (narrador, data, 39 min, transcrito com Musa Baig; sinopse); n.º 33 a 64 (p. XVII a
      // XXXII); n.º 61 (p. XXX: a eira).
      history:
        'O conto do peixe de ouro é o mais longo da tese de Yoshioka: 351 frases, contadas por Muhammad Ali em 39 minutos, em Karimabad, em 2008, e transcritas com a ajuda de Musa Baig. A rainha adoece porque o peixe riu dela, e o rei manda o criado achar quem explique aquele riso. O criado sai do palácio levando só uma phiti, um pão grosso assado na cinza. No caminho ganha um companheiro e faz a ele umas perguntas que parecem sem sentido.',
      // n.º 50 (p. XXV) e n.º 62–63 (p. XXXI): as duas charadas.
      culture_tip:
        'As charadas do criado parecem loucura. Ele parte a phiti ao meio, dá metade ao companheiro e diz: “Metade eu mesmo comi, metade joguei na água”. Depois pergunta a uns homens na eira se eles debulham o trigo para comer ou depois de comer. O companheiro não entende nada. Só a filha dele vai entender, na próxima unidade.',
      // Y12, p. 137–141 (presente e passado contínuo: verbo na forma contínua + cópula), p. 206–207 (o
      // particípio conjuntivo n-…-n), p. 141 (174).
      grammar_why:
        'Para dizer o que está acontecendo, o verbo vai na forma contínua e ganha a cópula: “baréibáa”, você está olhando. Com a cópula do passado, a ação fica no passado contínuo ou no costume: “níćóm”, ele costumava ir. E para ligar ações do mesmo sujeito, a primeira leva “n-” na frente e “-n” no fim: “níṣinin”, depois de comer.',
      grammar_examples: [
        // n.º 85 (p. XLI), trecho da fala da filha
        ['Bésanar baréibáa?', '“Para o que você está olhando?” (conto do peixe, n.º 85)'],
        // Y12, p. 138 (170), a última oração (van Skyhawk 2006)
        ['Bes hurúśu báa?', '“Por que você fica (lá)?” (Yoshioka, p. 138)'],
        // n.º 63 (p. XXXI), a fala dos homens da eira
        ['Bée ya, nuśén baríćabáan.', '“Não, debulhamos depois de comer.” (n.º 63)'],
        // Shon Gukur, n.º 4, citado em Y12, p. 140 (173), a primeira oração
        ['Óltalik nuúruṭin bam.', '“Os dois estavam sentados.” (conto de Shon Gukur, n.º 4)'],
      ],
      // Y12, p. xv (tabela de notações)
      character_guide: [
        ['c̣', '“tch” com a língua curvada para trás, no lugar do “ṣ” (IPA ʈʂ)', 'ṣíc̣an — vamos comer'],
        ['ċh', 'o “ts” de “ċ” com um sopro de ar depois (IPA ʦʰ)', 'ċhórdin — manhã'],
        ['ćh', 'o “tch” de “ć” com um sopro de ar depois (IPA ʨʰ)', 'ćhap — carne'],
      ],
    },
    lessons: [
      {
        id: 'bsk-u5-l1',
        title: 'Rafíiq: o companheiro de viagem',
        kind: 'licao',
        words: ['rafíiq', 'phíṭi', 'láp', 'toq', 'multán', 'darc'],
        cloze: [
          // n.º 49 (p. XXV), as duas primeiras orações. “hírar”, “gúsmur”: tabela 17 de Y12 (A2)
          {
            sentence: 'Isé phíṭi lap traṅ nétaninin, iné ___ yuúmi.',
            answer: 'rafíiqar',
            options: ['rafíiqar', 'hírar', 'gúsmur'],
            translation: 'Ele partiu a phiti ao meio e deu metade ao companheiro.',
          },
          // n.º 54 (p. XXVII)
          { sentence: '___ ċhílan bilúm bar ċhílan.', answer: 'Toq', options: ['Toq', 'Multán', 'Darc'], translation: 'Era uma água de lama, água de enxurrada.' },
          // n.º 58 (p. XXIX)
          {
            sentence: 'Yuúṭiṅċe qar néetan ___ déegusimi.',
            answer: 'multáiṅ',
            options: ['multáiṅ', 'ċhílan', 'phíṭi'],
            translation: 'Ele arranhou os pés, e escorreu sangue.',
          },
        ],
        voice: {
          // n.º 62 (p. XXXI), trecho da pergunta do criado, e n.º 63, a resposta dos homens da eira
          bot: 'Śéćer baríćóona, léi ac̣ukóon?',
          botTranslation: 'Vocês debulham para comer, meus irmãos?',
          expected: ['Bée ya, nuśén baríćabáan.', 'bée ya, nuśén baríćabáan', 'nuśén baríćabáan'],
          hint: 'Responda como os homens da eira: “Bée ya, nuśén baríćabáan” (não, debulhamos depois de comer).',
        },
        // n.º 61 (p. XXX): “they were threshing wheat in a field, in a threshing circle”
        communityPrompt:
          'A “darc” é a eira, o círculo de terra batida onde se debulha o trigo. No conto, o criado pergunta aos homens da eira se eles debulham para comer ou depois de comer. Escreva, em português, o que você acha que ele queria dizer. A resposta vem na próxima unidade.',
      },
      {
        id: 'bsk-u5-l2',
        title: 'Guċhárimi, sénimi: andar e dizer',
        kind: 'licao',
        words: ['guċháras', 'sénas', 'ćáġa', 'mahál', 'búṭ', 'ċhórdin'],
        cloze: [
          // n.º 33 (p. XVII). “hírċum”, “húkċum”: tabela 17 de Y12 (A2)
          {
            sentence: 'Baadśáa ___ duúsin guċhárimi guċhárimi guċhárimi guċhárimi isé han épaći phíṭian níya guċhárimi.',
            answer: 'mahálcum',
            options: ['mahálcum', 'hírċum', 'húkċum'],
            translation: 'Saindo do palácio do rei, ele andou e andou, levando só uma phiti.',
          },
          // n.º 224 (p. XCVIII), a primeira oração
          { sentence: 'Ċhíle ___ tráa oúỵam.', answer: 'buṭ', options: ['buṭ', 'lap', 'toq'], translation: 'Estou com muita, muita sede.' },
          // n.º 64 (p. XXXII). “guċhárimi”: n.º 33; “ními”: n.º 219
          {
            sentence: '“Nuśén baríćabáan” sénase káa, uyáṭis laṅ laṅ ne “śuá” nusén dáa ___.',
            answer: 'guċháruman',
            options: ['guċháruman', 'guċhárimi', 'ními'],
            translation: 'Quando disseram “debulhamos depois de comer”, eles balançaram a cabeça, disseram “bom” e seguiram andando.',
          },
        ],
        voice: {
          // n.º 47 (p. XXIV), a fala do criado no fim, e n.º 48 (p. XXIV), a continuação dela
          bot: 'Jáale phíṭian bi.',
          botTranslation: 'Eu tenho uma phiti.',
          expected: ['Isé ṣíc̣an, ye qha hurú.', 'isé ṣíc̣an, ye qha hurú', 'Isé ṣíc̣an.'],
          hint: 'Continue a fala do criado: “Isé ṣíc̣an, ye qha hurú” (vamos comer isto, sente-se).',
        },
        // n.º 33 (p. XVII), n.º 53 (p. XXVII), n.º 65 (p. XXXII): o verbo repetido
        communityPrompt:
          'O narrador repete o verbo para mostrar uma caminhada longa: “guċhárimi guċhárimi guċhárimi”, andou, andou, andou. Com “n-” e “-n” a ação vira uma ponte para a próxima: “nusén”, dizendo. Escreva, em português, uma caminhada sua contada desse jeito, com o verbo repetido.',
      },
      {
        id: 'bsk-u5-l3',
        title: 'Prova: pelo caminho',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // Y12, p. 186 (236b), a pergunta de Hunza. Resposta: a mesma do A2 (Wikivoyage “Shwa ba”, na grafia
          // de Berger), ou só “śuá”, como o criado responde ao rei (conto do peixe, n.º 19, p. IX).
          bot: 'Béhal bilá?',
          botTranslation: 'Como você está? (lit. como está a condição?)',
          expected: ['Śuá báa.', 'śuá báa', 'Śuá.', 'śuá'],
          hint: '“Béhal bilá?” é o jeito de Hunza de perguntar como a pessoa está. Responda “Śuá báa” (estou bem).',
        },
        communityPrompt:
          'Conte, em português, o começo da viagem do criado: o palácio, a phiti partida ao meio, a água de lama e a pergunta na eira. Use pelo menos três palavras da unidade em burushaski: rafíiq, phíṭi, láp, toq, darc.',
      },
    ],
  },
  {
    id: 'bsk-u6',
    level: 'B1.2',
    cefr: 'B1',
    title: 'Éie sénumo: a filha esperta',
    emoji: '💡',
    card: {
      id: 'bsk-c6',
      title: 'Entender é deixar cair no coração',
      emoji: '❤️',
      // Y12, Ap. I, n.º 85 a 157 (p. XLI a LXXI); sinopse, p. I.
      history:
        'O companheiro leva o criado até a casa dele e conta tudo à filha, a única filha que ele tem. Ela entende as charadas na hora. A metade da phiti que o criado comeu sozinho foi desperdiçada; a metade que deu ao companheiro virou uma boa ação. Perguntar se havia tambores na casa era perguntar se havia crianças fazendo barulho. E perguntar se a viga da casa era forte era perguntar se havia alguém com quem conversar de verdade.',
      // n.º 99 (p. XLVII), n.º 138 (p. LXI), n.º 153 (p. LXIX)
      culture_tip:
        'Em burushaski, entender é deixar a coisa cair no coração. O pai diz “jáa ásulo apálimi”, não caiu no meu coração: não entendi. E quando a filha entende tudo, o narrador diz que as histórias “entraram no coração dela”: “iké uyóon éimo mósulo giyámi”.',
      // Y12, p. 141–145 (perfeito: forma perfectiva + cópula), p. 113–114 (causativo s-), p. 115 (tabela 41).
      grammar_why:
        'O perfeito fala de algo que aconteceu e ainda vale agora. Quem chega diz “dáayabáa”, cheguei (e estou aqui). E o prefixo “s-” faz alguém ou algo fazer a ação: “bápaỵimi” é “fermentou”, “éspapaỵam” é “eu fiz fermentar”. O verbo “comer” muda com a classe do que se come: “ṣí-” para um pão, “śé-” para a carne.',
      grammar_examples: [
        // Y12, p. 143 (175)
        ['Dukóoma. — Dáayabáa.', '“Bem-vindo! (lit. você veio)” — “Cheguei.” (Yoshioka, p. 143)'],
        // Y12, p. 143 (176) = conto do peixe, n.º 24, a fala da rainha
        ['Khos, je ayákal bes déeġasibí?', '“Por que este peixe riu de mim?” (conto do peixe, n.º 24)'],
        // Y12, p. 114 (146a, 146b)
        ['Ité mamú bápaỵimi.', '“Aquele leite fermentou.” (Yoshioka, p. 114)'],
        ['Jáa ité mamú éspapaỵam.', '“Eu fiz aquele leite fermentar.” (p. 114)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bsk-u6-l1',
        title: 'Huśáar: gente inteligente',
        kind: 'licao',
        words: ['huśáar', 'áqal', 'wazíir', 'maaní', 'dimáaġ', 'ćaġabár'],
        cloze: [
          // n.º 97 (p. XLVI), a primeira oração. “daltás”: A2.1
          { sentence: 'In dimáaġe buṭ ___ bái.', answer: 'uśáaran', options: ['uśáaran', 'phuqtá', 'daltás'], translation: 'Ele é um homem muito inteligente.' },
          // n.º 97 (p. XLVI), a última oração. “ċhílaṅe”: n.º 50; “híraṭe”: tabela 17 de Y12 (A2)
          { sentence: 'Dáa ___ jáa íi leél étam.', answer: 'áqalaṭe', options: ['áqalaṭe', 'ċhílaṅe', 'híraṭe'], translation: 'E eu o entendi só pela inteligência.' },
          // n.º 154 (p. LXX), a explicação da filha. “baazáarar”, “sukúular”: A2.1
          {
            sentence: 'Jáa káa ___ daltás akaabíran báia háale?',
            answer: 'ćaġabárar',
            options: ['ćaġabárar', 'baazáarar', 'sukúular'],
            translation: 'Há nesta casa alguém nobre para conversar comigo?',
          },
        ],
        voice: {
          // Y12, p. 143 (175): a saudação de chegada
          bot: 'Dukóoma!',
          botTranslation: 'Bem-vindo! (lit. você veio)',
          expected: ['Dáayabáa.', 'dáayabáa'],
          hint: 'Responda “Dáayabáa”: cheguei (e estou aqui). É o perfeito do verbo “vir”.',
        },
        // Y12, Ap. II: wazíir, áqal, maaní, tayáar, dimáaġ vêm do urdu (e, antes, do árabe e do persa)
        communityPrompt:
          'Muitas palavras desta lição vieram do urdu: “wazíir” (ministro), “áqal” (inteligência), “maaní” (significado), “dimáaġ” (cérebro). A filha diz que o criado é “filho de ministro”: “waazíire iían”. Escreva, em português, três palavras que o português também tomou do árabe.',
      },
      {
        id: 'bsk-u6-l2',
        title: 'Ḍaḍáṅ, phuqtá: as charadas',
        kind: 'licao',
        words: ['ḍaḍáṅ', 'phuqtá', 'joṭpáṭ', 'tayáar', 'akhéṣ', 'bápaỵas'],
        cloze: [
          // n.º 100 (p. XLVII), trecho do meio
          { sentence: 'Míi háale ___ ḍaámal ke apíe.', answer: 'ḍaḍáṅ', options: ['ḍaḍáṅ', 'phíṭi', 'mamú'], translation: 'Na nossa casa não há tambores nem tímpanos.' },
          // n.º 100 (p. XLVII), a última oração. “jóṭ”: A2.1
          { sentence: 'Míi háa ṣínc̣h ke ___ bi.', answer: 'phuqtá', options: ['phuqtá', 'akhéṣ', 'jóṭ'], translation: 'E a viga da nossa casa é forte.' },
          // Y12, p. 114 (146b). “bápaỵimi”: (146a); “ṣíam”: n.º 50
          { sentence: 'Jáa ité mamú ___.', answer: 'éspapaỵam', options: ['éspapaỵam', 'bápaỵimi', 'ṣíam'], translation: 'Eu fiz aquele leite fermentar.' },
        ],
        voice: {
          // Y12, p. 114 (146a, 146b)
          bot: 'Ité mamú bápaỵimi.',
          botTranslation: 'Aquele leite fermentou.',
          expected: ['Jáa ité mamú éspapaỵam.', 'jáa ité mamú éspapaỵam', 'éspapaỵam'],
          hint: 'Diga que foi você que fez fermentar: “Jáa ité mamú éspapaỵam.” O “s” de “éspapaỵam” é o do causativo.',
        },
        // n.º 152 (p. LXIX) e n.º 154 (p. LXX)
        communityPrompt:
          'A filha explica: os tambores eram as crianças, “joṭpáṭ”, que não deixariam ouvir a conversa. E a viga forte era alguém com quem conversar. Invente, em português, uma charada no mesmo estilo, em que uma coisa da casa quer dizer outra.',
      },
      {
        id: 'bsk-u6-l3',
        title: 'Prova: a filha esperta',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // n.º 99 (p. XLVII), o começo da fala do pai, e n.º 153 (p. LXIX), a resposta da filha
          bot: 'Bas, jáa ásulo apálimi.',
          botTranslation: 'Bem, eu não entendi (lit. não caiu no meu coração).',
          expected: ['Ité gosóm, etéulo gósulo apálimi.', 'ité gosóm, etéulo gósulo apálimi'],
          hint: 'Responda como a filha: “Ité gosóm, etéulo gósulo apálimi” (ele te disse isso, mas você não entendeu).',
        },
        communityPrompt:
          'Explique, em português, as três charadas do criado como a filha explicou: a phiti partida ao meio, os tambores e a viga da casa. Use as palavras ḍaḍáṅ, phuqtá e maaní.',
      },
    ],
  },
  {
    id: 'bsk-u7',
    level: 'B1.3',
    cefr: 'B1',
    title: 'Ágar … ke: se o rei beber',
    emoji: '🦅',
    card: {
      id: 'bsk-c7',
      title: 'Histórias para convencer a rainha',
      emoji: '👑',
      // Y12, Ap. I, sinopse (p. I); n.º 213 a 241 (falcão), n.º 249 a 305 (papagaio e trigo).
      history:
        'A filha vai ao palácio explicar à rainha por que o peixe riu. Mas, em vez de responder, conta histórias. Na primeira, um rei sai para caçar com o seu falcão querido no ombro. Morrendo de sede, ele recebe um pouco de água, e o falcão bate as asas e não o deixa beber. O rei, furioso, mata o falcão. Só então descobre que a água era veneno. Na segunda, um papagaio traz ao rei uns grãos de trigo que rejuvenescem as pessoas e matam os bichos.',
      // Y12, p. 191 (awaáji, do xina “awaájei”), p. 202 (ágar, do persa e urdu “agar”).
      culture_tip:
        'Duas palavras de ligação do burushaski vieram de línguas vizinhas. “Ágar” (se) veio do persa e do urdu “agar”. “Awaáji” (necessário) veio do xina “awaájei”, que quer dizer “será preciso”. Hunza e Nager convivem com o xina, o urdu e, no passado, o persa da corte dos mires.',
      // Y12, p. 152–154 (condicional), p. 202 (ágar … ke), p. 190–193 (obrigação).
      grammar_why:
        'O verbo com “-mċe” diz o que aconteceria, mas não aconteceu: “hurúśamċe”, eu ficaria. Para uma condição real, a oração começa com “ágar” e termina com “ke”. E para dizer que algo tem de acontecer, junta-se o infinitivo e a cópula, ou a palavra “awaáji”, necessário.',
      grammar_examples: [
        // Y12, p. 153 (190), de Tikkanen 1991
        ['Áỵa máma apáma, je khóle hurúśamċe.', '“Se eu não tivesse pai e mãe, ficaria aqui.” (Yoshioka, p. 153)'],
        // Y12, p. 153, tabela 85 (c → ċ)
        ['Girmíyamċe.', '“Eu escreveria.” (tabela 85, p. 153)'],
        // Y12, p. 192 (249), de Tikkanen 1991
        ['Míi gáran étas awaáji.', '“Nós precisamos nos casar.” (p. 192)'],
        // Y12, p. 193 (250)
        ['In khólar j̣úṣ.', '“Ele deve vir para cá.” (p. 193)'],
      ],
      character_guide: [
        // Y12 escreve com ponto embaixo o “j” retroflexo de “j̣ú-” (vir); a tabela da p. xv não o troca
        ['j̣', '“dj” com a língua curvada para trás, no lugar do “ṣ” e do “ṭ”', 'j̣úṣ — que venha'],
      ],
    },
    lessons: [
      {
        id: 'bsk-u7-l1',
        title: 'Báaz: o falcão do rei',
        kind: 'licao',
        words: ['báaz', 'darú', 'gaár', 'záhar', 'garúrum', 'manáas'],
        cloze: [
          // n.º 219 (p. XCVI). “baazáarar”, “sukúular”: A2.1
          {
            sentence: 'Aaqhirí barénasar, iné baadśáa aaqhirí ___ ními.',
            answer: 'darúanar',
            options: ['darúanar', 'baazáarar', 'sukúular'],
            translation: 'Por fim, o rei foi a uma caçada.',
          },
          // n.º 222 (p. XCVIII). “qhóś”, “biimáar”: A2
          { sentence: 'Baadśáa ___ díimi.', answer: 'gaár', options: ['gaár', 'qhóś', 'biimáar'], translation: 'O rei ficou tonto.' },
          // n.º 236 (p. CIV). “ġéniṣe”: A2.1 (história do peixe de ouro); “húke”: tabela 17 de Y12
          {
            sentence: 'Ité ċhil ámitan bilúm ke ité baadśáa gáne ___ ċhil bilúm.',
            answer: 'zéhere',
            options: ['zéhere', 'ġéniṣe', 'húke'],
            translation: 'Aquela água era veneno para o rei.',
          },
        ],
        voice: {
          // n.º 224 (p. XCVIII): a primeira oração e, no fim, o pedido do rei
          bot: 'Ċhíle buṭ tráa oúỵam.',
          botTranslation: 'Estou com muita, muita sede.',
          expected: ['Ċhílan áaminin.', 'ċhílan áaminin'],
          hint: 'Peça água como o rei: “Ċhílan áaminin” (deem-me água para beber).',
        },
        // n.º 216 a 218 (p. XCV–XCVI)
        communityPrompt:
          'No conto, o rei andava sempre com o falcão no ombro: “isé báaz iphóiṅaṭe níya”, levando o falcão no ombro. Escreva, em português, o que um animal leal fez por alguém numa história que você conhece.',
      },
      {
        id: 'bsk-u7-l2',
        title: 'Ágar, kúli, awaáji',
        kind: 'licao',
        words: ['ágar', 'kúli', 'awaáji', 'ár', 'gar', 'waphaadaarí'],
        cloze: [
          // Y12, p. 192 (249)
          { sentence: 'Míi gáran étas ___.', answer: 'awaáji', options: ['awaáji', 'ágar', 'kúli'], translation: 'Nós precisamos nos casar.' },
          // n.º 237 (p. CIV; Y12, p. 202, (271))
          {
            sentence: 'Et zéhere ċhil bilúm, iné baadśáa iírćóm ___ ité minúwám ke, ćhémiliṅe ċhil bilúm.',
            answer: 'ágar',
            options: ['ágar', 'kúli', 'awaáji'],
            translation: 'Era uma água tão venenosa que, se o rei a bebesse, morreria.',
          },
          // Y12, p. 192 (248), de Berger 1998b, Hunza. “phuqtá”, “sahíi”: B1.2 e B1.4
          {
            sentence: 'Khué ar oómanum béske éćáan ke, khué ___ umánas awaáji bilá.',
            answer: 'ar',
            options: ['ar', 'phuqtá', 'sahíi'],
            translation: 'Quando eles fazem alguma coisa sem medo, deviam ficar com medo.',
          },
        ],
        voice: {
          // Kulio Laskir, n.º 23 e 24 (p. CLXXV–CLXXVI)
          bot: 'Agár jáa ité qhanjár yáṭe akhílaṭe dáal diém bilá ke, jáa śat étabáa.',
          botTranslation: 'Se a minha adaga estiver assim, de pé, fui eu que venci.',
          expected: ['Agár qha balílá ke, ye dáa íne dáa śat atúmo.', 'agár qha balílá ke, ye dáa íne dáa śat atúmo'],
          hint: 'Complete como Kulio Laskir: “Agár qha balílá ke, ye dáa íne dáa śat atúmo” (se ela tiver caído, foi ela que venceu).',
        },
        // Kulio Laskir, Ap. I, p. CLXVIII ss.: o rapaz luta à noite com uma bruxa e deixa a adaga no campo.
        communityPrompt:
          'No conto de Kulio Laskir, gravado em Haiderabad, o rapaz luta de noite com uma bruxa e deixa a adaga cravada no campo: se ela estiver de pé, ele venceu. Repare que o narrador fala “agár”, com a sílaba forte no fim; o dicionário dá “ágar”. Escreva, em português, duas frases com “se” sobre o que você faria amanhã.',
      },
      {
        id: 'bsk-u7-l3',
        title: 'Prova: se o rei beber',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // n.º 222 e 224 (p. XCVIII)
          bot: 'Baadśáa gaár díimi.',
          botTranslation: 'O rei ficou tonto.',
          expected: ['Ċhíle buṭ tráa oúỵam.', 'ċhíle buṭ tráa oúỵam'],
          hint: 'Diga o que o rei sentia: “Ċhíle buṭ tráa oúỵam” (estou com muita sede).',
        },
        communityPrompt:
          'Conte, em português, a história do falcão do rei, do jeito que a filha contou à rainha. Termine com a frase do conto: “Ágar ité minúwám ke…”, se ele a bebesse… O que teria acontecido?',
      },
    ],
  },
  {
    id: 'bsk-u8',
    level: 'B1.4',
    cefr: 'B1',
    title: 'Śíri Badát: o rei de Gilgit',
    emoji: '🏔️',
    card: {
      id: 'bsk-c8',
      title: 'Uma lenda contada a Stephen Willson',
      emoji: '📕',
      // W02, citado em Y12, p. 55 (#18), 94 (#40), 139 (#10), 141 (#46), 187–188 (#8, #39), 199–200 (#45),
      // 209 (#33), 213 (#35), 231–233 (#4–5, #49). Wikipédia em inglês, “Gilgit” (consultada em
      // 16/10/2026): Shri Badat, último rei dos Shahreis, “Adam Khor” (comedor de gente), morto com a ajuda
      // da filha, Nur Bakht Khatun.
      history:
        'Stephen Willson, linguista do SIL, publicou em 1999 o livro “A Look at Hunza Culture”, com textos em burushaski. Um deles é a lenda de Śíri Badát, o rei de Gilgit que comia gente. A tese de Yoshioka cita várias frases dele. Um dia o rei come carne de cordeiro e acha tão gostosa que pergunta como o bicho foi criado. Conclui que a carne de gente deve ser ainda mais gostosa. A filha dele, Nuri Bano, ajuda o povo, que cava um buraco em volta da casa do rei.',
      // Wikipédia em inglês, “Gilgit”: “At beginning of the new year, a Juniper procession walks along the
      // river, in memory of chasing the cannibal king Sri Badat”; W02 #18 (Y12, p. 55).
      culture_tip:
        'Em Gilgit, segundo a Wikipédia, a queda de Shri Badat ainda é festejada: no começo do ano novo, uma procissão com zimbro caminha pela beira do rio, lembrando a expulsão do rei. No texto de Willson a filha se chama “Núuri Baanó”; a tradição de Gilgit a chama de Nur Bakht Khatun.',
      // Y12, p. 198–200 (oração relativa: palavra de pergunta + “ité”), p. 196–197 (complemento de “sén-”,
      // dizer, e “-s-”, contar, com quem fala no ergativo).
      grammar_why:
        'A oração relativa usa a palavra de pergunta e depois “ité” (aquilo): “bésan sénuma ke, ité sahíi maními”, o que ele disse, aquilo se mostrou certo. E para contar o que alguém disse, a fala vem inteira, sem mudar: quem fala leva o “-e” do ergativo, e a fala termina com “nusén” (dizendo) ou com o verbo “dizer”.',
      grammar_examples: [
        // Shon Gukur, n.º 14, citado em Y12, p. 199 (264)
        ['Śon gukúr biṭáne bésan sénuma ke, ité sahíi maními.', '“O que o bitan Shon Gukur disse se mostrou certo.” (Yoshioka, p. 199)'],
        // W02 #18, citado em Y12, p. 55 (72)
        ['Ine éimo muík Núuri Baanó bilúm.', '“O nome da filha dele era Nuri Bano.” (Willson, “Šíri Badát”, n.º 18)'],
        // Shon Gukur, n.º 6, citado em Y12, p. 197 (260), a primeira oração e o começo da fala
        ['Śon gukúre húke mamúar ésimi: “Ískan bi.”', '“Shon Gukur disse a Huke Mamo: ‘Está prenhe.’” (n.º 6, trecho)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bsk-u8-l1',
        title: 'Mamúśi, mazá: o gosto da carne',
        kind: 'licao',
        words: ['mamúśi', 'mazá', 'uyám', 'qam', 'insáan', 'thap'],
        cloze: [
          // W02 #4–5 (Y12, p. 232), a segunda frase. “maaní”, “áqal”: B1.2
          {
            sentence: 'Inar ité ćhápe ___ díinin, duġárusimi ke “Gusé mamúśi maa ámulum díċam?”',
            answer: 'mazá',
            options: ['mazá', 'maaní', 'áqal'],
            translation: 'Depois de sentir o gosto da carne, ele perguntou: “De onde vocês trouxeram este cordeiro?”',
          },
          // W02 #10 (Y12, p. 139, (172)). “garúrum”, “phuqtá”: B1.2 e B1.3
          {
            sentence: 'Guċé mamúśumuċe ćhápċum insáane ćhap ___ meíbila, qheéran!',
            answer: 'uyám',
            options: ['uyám', 'garúrum', 'phuqtá'],
            translation: 'A carne de gente deve ser mais gostosa que a dos cordeiros!',
          },
          // W02 #33 (Y12, p. 209, (281)). “ċhórdimo”: W02 #39; “khúulto”: A2.2
          {
            sentence: 'Nóguṣkinin, in ___ úlo bámaṭe, iḍigaariṭák biráquman.',
            answer: 'thápe',
            options: ['thápe', 'ċhórdimo', 'khúulto'],
            translation: 'Avisados, enquanto ele estava em casa, à noite, cavaram em volta.',
          },
        ],
        voice: {
          // Y12, p. 186 (236a e 236b): a mesma pergunta em Nager e em Hunza
          bot: 'Be hal dilá?',
          botTranslation: 'Como você está? (do jeito de Nager)',
          expected: ['Béhal bilá?', 'béhal bilá'],
          hint: 'Faça a mesma pergunta do jeito de Hunza: “Béhal bilá?”',
        },
        communityPrompt:
          'O rei pergunta “Bésanċe yuúśabom?”, com o que ela criou o cordeiro, para a carne ficar tão gostosa. Escreva, em português, como essa pergunta leva o rei à ideia terrível da lenda.',
      },
      {
        id: 'bsk-u8-l2',
        title: 'Sahíi: o que ele disse era certo',
        kind: 'licao',
        words: ['sahíi', 'ibaadát', 'majít', 'zéhen', 'śek', 'sis'],
        cloze: [
          // Y12, p. 199 (264). “akhéṣ”: B1.2; “ar”: B1.3
          {
            sentence: 'Śon gukúr biṭáne bésan sénuma ke, ité ___ maními.',
            answer: 'sahíi',
            options: ['sahíi', 'akhéṣ', 'ar'],
            translation: 'O que o bitan Shon Gukur disse se mostrou certo.',
          },
          // W02 #39 (Y12, p. 187, (237)), sem a fala do fim. “qámar”: W02 #45; “sóoćar”: conto do peixe, n.º 151
          {
            sentence: 'To ċhórdimo ḍámaṭe duúsin, hóle barénasar, in ___ wálimi.',
            answer: 'śékar',
            options: ['śékar', 'qámar', 'sóoćar'],
            translation: 'De manhã ele saiu, olhou lá fora e ficou desconfiado.',
          },
          // W02 #45 (Y12, p. 199, (265)), a primeira oração. “mósulo”: conto do peixe, n.º 138; “háale”: n.º 100
          {
            sentence: 'Leekín síse ___ ité árkuṣ darúm bilúm.',
            answer: 'zéhenulo',
            options: ['zéhenulo', 'mósulo', 'háale'],
            translation: 'Mas na mente das pessoas ainda havia medo.',
          },
        ],
        voice: {
          // Y12, p. 199 (264): a primeira parte e a última
          bot: 'Śon gukúr biṭáne bésan sénuma ke…',
          botTranslation: 'O que o bitan Shon Gukur disse…',
          expected: ['Ité sahíi maními.', 'ité sahíi maními'],
          hint: 'Complete a frase com “ité” (aquilo): “Ité sahíi maními” (aquilo se mostrou certo).',
        },
        // W02 #35 (Y12, p. 213, (287))
        communityPrompt:
          'De manhã, o rei sai de casa para rezar, “ibaadát”, numa mesquita, “majít”, ou num templo, “mandáranar”, diz o texto de Willson. Escreva, em português, uma frase com “o que” no começo, como “o que ele disse se mostrou certo”, e outra contando o que alguém te disse, com as palavras da pessoa.',
      },
      {
        id: 'bsk-u8-l3',
        title: 'Prova: Śíri Badát',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          // Shon Gukur, n.º 6, citado em Y12, p. 197 (260): a fala começa logo depois de “ésimi”
          bot: 'Śon gukúre húke mamúar ésimi:',
          botTranslation: 'Shon Gukur disse a Huke Mamo:',
          expected: ['Ískan bi.', 'ískan bi'],
          hint: 'Diga a fala de Shon Gukur: “Ískan bi” (está prenhe, lit. há um filhote).',
        },
        communityPrompt:
          'Conte, em português, a lenda de Śíri Badát do começo ao fim: o cordeiro gostoso, a pergunta do rei, o buraco cavado à noite e o medo que ficou no povo. Use pelo menos quatro palavras da unidade: mamúśi, mazá, uyám, qam, thap, sis.',
      },
    ],
  },
];
