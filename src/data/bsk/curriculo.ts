import type { UnitSeed } from '../types';

/**
 * Trilha do burushaski, do A1.1 ao A2.2 (o teto do idioma; ver `incomplete` em index.ts). A1: fontes
 * no cabeçalho de vocabulario.ts (consultadas em 09/10/2026) — o dicionário anotado de Starostin (cita Berger 1974/1998), a Wikipédia em inglês
 * ("Burushaski") e, só pra saudação/cortesia, o roteiro do Wikivoyage ("Burushaski phrasebook").
 * A2 (16/10/2026): Yoshioka (2012) e Munshi e Karim (2012); ver o bloco antes da unidade 3.
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
        'Muitos substantivos do burushaski — sobretudo termos de parentesco, como “imi” (mãe) — nunca aparecem sozinhos: exigem sempre um prefixo de posse antes (“a mãe DELE”, “a mãe DELA”…). É por isso que “imi” já aparece aqui citada com essa ressalva: a forma “pura”, sem prefixo nenhum, não existe nas fontes consultadas.',
      grammar_examples: [
        ['Bebila?', 'Tudo bem? (saudação informal)'],
        ['Une gueek besan bila?', 'Qual é o seu nome?'],
        ['Ja aek Linu bila.', 'Meu nome é Linu.'],
        ['Ju na!', 'Obrigado!'],
      ],
      character_guide: [
        ['ẏ', 'um “y” com um toque retroflexo, diferente do “y” comum do inglês', 'aẏa — “pai”'],
        ['ṭ', '“t” retroflexo: a língua curva pra trás, tocando mais atrás no céu da boca', 'huruṭas — “sentar, morar”'],
        ['ṣ', '“s” retroflexo, no mesmo lugar de articulação do “ṭ”', 'ṣias — “comer”'],
        ['ć / ċ', 'duas africadas diferentes do nosso “tch”: “ć” é palatal (mais “chiada”), “ċ” é dental (mais seca)', 'ćhumo — “peixe”'],
      ],
    },
    lessons: [
      {
        id: 'bsk-u1-l1',
        title: 'Bebila, ju na',
        kind: 'licao',
        words: ['bebila?', 'ju na', 'huyy', 'parwa api', 'awa', 'bey ya'],
        cloze: [
          { sentence: '___?', answer: 'Bebila', options: ['Bebila', 'Awa', 'Ju na'], translation: 'Tudo bem?' },
          { sentence: '___.', answer: 'Ju na', options: ['Ju na', 'Huyy', 'Bey ya'], translation: 'Obrigado.' },
          { sentence: '___.', answer: 'Parwa api', options: ['Parwa api', 'Awa', 'Huyy'], translation: 'De nada.' },
        ],
        voice: {
          bot: 'Bebila?',
          botTranslation: 'Tudo bem? (saudação informal)',
          expected: ['Ju na!', 'Awa, ju na.'],
          hint: 'Agradeça com “Ju na!”, ou diga “sim” e agradeça: “Awa, ju na.”',
        },
        communityPrompt: 'Escreva a saudação (Bebila), um agradecimento (Ju na) e a resposta “de nada” (Parwa api).',
      },
      {
        id: 'bsk-u1-l2',
        title: 'Ja, un, in',
        kind: 'licao',
        words: ['ja', 'un', 'in', 'mi', 'ma', 'aẏa'],
        cloze: [
          { sentence: '___.', answer: 'Ja', options: ['Ja', 'Un', 'In'], translation: 'Eu.' },
          { sentence: '___.', answer: 'Un', options: ['Un', 'Ja', 'Ma'], translation: 'Tu, você.' },
          { sentence: '___.', answer: 'Aẏa', options: ['Aẏa', 'In', 'Mi'], translation: 'Pai.' },
        ],
        voice: {
          bot: 'Une gueek besan bila?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Ja aek Linu bila.'],
          hint: 'Diga seu nome com “Ja aek ___ bila” (eu, nome, ___, é).',
        },
        communityPrompt: 'Complete a apresentação “Ja aek ___ bila.” com o seu nome.',
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
          '“Kaáko” (irmão) e “kaáki” (irmã) vieram do xina, a língua vizinha. Por isso não levam o prefixo de posse de “imi” (mãe). Escreva as quatro palavras de pessoas: hir, gus, hilés e dasín.',
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
        title: 'Prova: Bebila, ja',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bebila? Une gueek besan bila?',
          botTranslation: 'Tudo bem? Qual é o seu nome?',
          expected: ['Ju na! Ja aek Linu bila.'],
          hint: 'Agradeça e diga seu nome: “Ju na! Ja aek ___ bila.”',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (Bebila), seu nome (Ja aek ___ bila) e um agradecimento (Ju na).',
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
        'Os termos de parentesco do burushaski, como os de muitas línguas da região, não têm gênero marcado no som da palavra como “filho/filha” no português: “giẏaas” serve tanto pra menino quanto pra menina — só o contexto diz qual é.',
      grammar_why:
        'O burushaski tem de quatro a cinco classes gramaticais de substantivo (a tradição de Lorimer e Berger as chama de hm, hf, x, y e z) — parecido com “gêneros”, mas mais amplo: além de humano-masculino e humano-feminino, há classes pra objetos contáveis, pra massas/líquidos e pra abstrações. A MESMA raiz pode até mudar de classe conforme o sentido: “sal em pedaços” é uma classe, “sal em pó” é outra. Os números também são especiais: de 20 em diante, o sistema é de base 20 (vigesimal) — 40 é literalmente “dois-vintes” (alto-altár) e 60 é “três-vintes” (iski-altár), do mesmo jeito que o francês diz 80 como “quatre-vingts” (quatro-vintes).',
      grammar_examples: [
        ['Han, altó, isko, walto.', 'Um, dois, três, quatro.'],
        ['Imi.', 'Mãe (nunca sozinha: sempre com um prefixo de posse antes).'],
        ['Aẏa.', 'Pai.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'bsk-u2-l1',
        title: 'Imi, giẏaas, ṣias',
        kind: 'licao',
        words: ['imi', 'yuus', 'muyar', 'giẏaas', 'minaas', 'ṣias'],
        cloze: [
          { sentence: '___.', answer: 'Imi', options: ['Imi', 'Aẏa', 'Yuus'], translation: 'Mãe.' },
          { sentence: '___.', answer: 'Giẏaas', options: ['Giẏaas', 'Yuus', 'Muyar'], translation: 'Criança.' },
          { sentence: '___.', answer: 'Ṣias', options: ['Ṣias', 'Minaas', 'Barenas'], translation: 'Comer.' },
        ],
        voice: {
          bot: 'Aẏa?',
          botTranslation: 'Pai?',
          expected: ['Imi.', 'Aẏa.'],
          hint: 'Responda com uma palavra de família: “Imi” (mãe) ou “Aẏa” (pai).',
        },
        communityPrompt: 'Escreva três palavras de família: mãe (imi), pai (aẏa) e uma terceira à sua escolha.',
      },
      {
        id: 'bsk-u2-l2',
        title: 'Han, altó, isko, walto',
        kind: 'licao',
        words: ['huruṭas', 'barenas', 'han', 'altó', 'isko', 'walto'],
        cloze: [
          { sentence: '___.', answer: 'Han', options: ['Han', 'Altó', 'Isko'], translation: 'Um.' },
          { sentence: '___.', answer: 'Walto', options: ['Walto', 'Isko', 'Altó'], translation: 'Quatro.' },
          { sentence: '___.', answer: 'Barenas', options: ['Barenas', 'Huruṭas', 'Minaas'], translation: 'Ver.' },
        ],
        voice: {
          bot: 'Han, altó, isko...',
          botTranslation: 'Um, dois, três...',
          expected: ['Walto.'],
          hint: 'Continue a contagem: depois de isko (três) vem walto (quatro).',
        },
        communityPrompt: 'Conte de han (um) até walto (quatro).',
      },
      {
        id: 'bsk-u2-l3',
        title: 'Prova: família e números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Imi, aẏa, yuus...',
          botTranslation: 'Mãe, pai, esposa...',
          expected: ['Giẏaas.'],
          hint: 'Complete a lista de família com outra palavra: “Giẏaas” (criança).',
        },
        communityPrompt: 'Escreva sobre sua família usando pelo menos três palavras: imi (mãe), aẏa (pai), yuus/muyar (esposa/marido) ou giẏaas (criança).',
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
      // Y12, Ap. I, p. I (conto do peixe: Muhammad Ali, Ganish, 20/10/2008, 39 min) e p. CLXIII (Shon
      // Gukur: Afraz ul-Lah Beg, Haiderabad, 14/09/2008); Introdução, p. 9 (contos reunidos por Lorimer,
      // Tikkanen, Berger, van Skyhawk e Tiffou; os provérbios de Tiffou, 1993).
      history:
        'Boa parte do que se sabe do burushaski vem de contos gravados. Lorimer, Berger, Tikkanen e Tiffou reuniram muitos, e Tiffou juntou também muitos provérbios. Em 2008, Noboru Yoshioka gravou em Hunza o conto do peixe de ouro, contado por Muhammad Ali em Ganish, e o conto dos dois xamãs, contado por Afraz ul-Lah Beg em Haiderabad. As histórias desta unidade usam frases desses dois contos, como estão na tese.',
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
          // “šuá” sozinho como resposta: conto do peixe, n.º 19 (Ap. I, p. IX), o criado responde “šuá” ao rei.
          bot: 'Be gumáibáa?',
          botTranslation: 'Como vai você?',
          expected: ['Śuá.', 'śuá'],
          hint: 'Responda com uma palavra: “Śuá” (bom). No conto do peixe, o criado responde só “śuá” ao rei.',
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
];
