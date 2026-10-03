import type { UnitSeed } from '../types';

/**
 * Trilha do apache ocidental — por enquanto só as duas unidades do nível A1 (pacote incompleto, ver
 * `incomplete` em `index.ts`). «Apache» não é uma única língua: é um grupo de línguas atabascanas
 * meridionais (apache ocidental, chiricauá, mescalero, jicarila, lipã, apache das planícies — ver
 * en.wikipedia.org/wiki/Apachean_languages). Este pacote escolheu o apache ocidental (Western Apache,
 * ISO 639-3 «apw») por ter o maior número de falantes (13.445 em 2013, segundo a Wikipédia em inglês)
 * e, sobretudo, a documentação digital mais rica entre as línguas apache: quase 500 verbetes na
 * categoria «Western Apache lemmas» do Wiktionary em inglês, contra poucos ou nenhum verbete para as
 * outras línguas apache nessa mesma fonte. As frases em apache ocidental usadas aqui são só palavras
 * isoladas e as poucas fórmulas fixas (saudações) atestadas verbete por verbete no Wiktionary — não há,
 * nesta pesquisa, fontes abertas com frases completas de uso cotidiano que combinem substantivo e verbo
 * conjugado, e o molde verbal do apache ocidental é complexo demais (ver `gramatica.ts`) para arriscar
 * inventar uma conjugação que nenhuma fonte confirmou.
 */
export const UNITS_APW: UnitSeed[] = [
  {
    id: 'apw-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Dagotʼee! As primeiras palavras',
    emoji: '👋',
    card: {
      id: 'apw-c1',
      title: 'Qual “apache”? A língua com mais falantes e mais fontes abertas',
      emoji: '🏜️',
      history:
        '“Apache” é o nome comum de várias línguas atabascanas meridionais distintas, não de uma língua só: apache ocidental, chiricauá, mescalero, jicarila, lipã e apache das planícies, segundo o artigo “Apachean languages” da Wikipédia em inglês. Este curso ensina especificamente o apache ocidental (Western Apache), falado por cerca de 13.445 pessoas (2013), a maioria nas reservas de San Carlos e de Fort Apache/White Mountain, no Arizona — a língua apache com mais falantes e, nesta pesquisa, a que tem de longe a documentação aberta mais rica: quase 500 verbetes no Wiktionary em inglês, um dicionário publicado (Western Apache-English Dictionary, 1998) e uma gramática (A Practical Grammar of the San Carlos Apache Language, de Reuse e Adley-SantaMaria, 2006). Os próprios falantes chamam a língua de “Ndee biyáti\'” (ou “Nṉee biyáti\'”), segundo o quadro da Wikipédia em inglês — literalmente algo como “a fala do povo”.',
      culture_tip:
        '“Dagotʼee!” é a saudação registrada no Wiktionary; “áho” é “obrigado(a)”; e “hon dah” é um “bom dia” dirigido especificamente a um grupo de homens, segundo o mesmo dicionário — um lembrete de que uma saudação pode depender de quem ouve, algo que o português não marca. O povo apache ocidental da região das Montanhas Brancas (White Mountain) se autodesigna “Dził Łigai Si\'án N\'dee”, que o Wiktionary traduz como “povo das Montanhas Brancas” — a própria palavra “dził” (montanha) está dentro desse nome.',
      grammar_why:
        'O apache ocidental usa o alfabeto latino, mas com o apóstrofo (ʼ) como letra própria (uma parada no ar, não uma aspa), o “ł” (uma consoante lateral que não existe em português) e vogais nasalizadas marcadas com o gancho do ogonek (ą, į, ǫ). O acento agudo marca o tom alto da palavra — isso volta com mais detalhe na aba de gramática.',
      grammar_examples: [
        ['Dagotʼee!', '“Oi!” — a saudação registrada no Wiktionary para o apache ocidental.'],
        ['Áho!', '“Obrigado(a)!”'],
        ["Ndee biyáti'.", '“A língua apache ocidental” (lit. “a fala do povo”) — o nome que os próprios falantes dão à língua, segundo a Wikipédia em inglês.'],
        ['Dził Łigai Si\'án N\'dee', '“Povo das Montanhas Brancas” — autodesignação do apache ocidental de White Mountain, Arizona, segundo o Wiktionary.'],
      ],
      character_guide: [
        ['ʼ', 'letra própria: uma oclusiva glotal (parada no ar), não uma aspa', 'dagotʼee'],
        ['ł', 'consoante lateral surda, sem equivalente exato em português', 'łį́į́ʼ (cavalo)'],
        ['ą, į, ǫ', 'vogal nasalizada (o gancho do ogonek marca a nasalização)', 'nadą́ʼ (milho)'],
        ['acento agudo (á, í, ...)', 'marca o tom alto da sílaba (ver gramática)', 'áho'],
      ],
    },
    lessons: [
      {
        id: 'apw-u1-l1',
        title: 'Dagotʼee! Áho!',
        kind: 'licao',
        words: ['dagotʼee', 'áho', 'gozhǫǫ doleeł', 'hon dah', 'shíí', 'nohwíí'],
        cloze: [
          {
            sentence: '“___!”: a saudação do dia a dia, segundo o Wiktionary.',
            answer: 'dagotʼee',
            options: ['dagotʼee', 'áho', 'hon dah'],
            translation: '“Dagotʼee!”: oi, olá.',
          },
          {
            sentence: 'Dagotʼee! ___!',
            answer: 'áho',
            options: ['áho', 'shíí', 'nohwíí'],
            translation: 'Oi! Obrigado!',
          },
          {
            sentence: '“___”: nós.',
            answer: 'nohwíí',
            options: ['nohwíí', 'shíí', 'gozhǫǫ doleeł'],
            translation: '“Nohwíí”: nós.',
          },
        ],
        voice: {
          bot: 'Dagotʼee!',
          botTranslation: 'Oi!',
          expected: ['Dagotʼee! Áho!', 'dagotʼee', 'áho'],
          hint: 'Devolva a saudação com “Dagotʼee!” e agradeça com “Áho!”.',
        },
        communityPrompt: 'Escreva a saudação e o agradecimento do apache ocidental: “Dagotʼee” e “Áho”.',
      },
      {
        id: 'apw-u1-l2',
        title: 'Ndee: pessoas da comunidade',
        kind: 'licao',
        words: ['ndee', 'isdzán', 'ishkiin', 'bikʼisn', 'bimaa', 'diyin'],
        cloze: [
          {
            sentence: '“___”: pessoa; o povo apache (autodesignação).',
            answer: 'ndee',
            options: ['ndee', 'isdzán', 'ishkiin'],
            translation: '“Ndee”: pessoa; o povo apache.',
          },
          {
            sentence: '“___”: mulher.',
            answer: 'isdzán',
            options: ['isdzán', 'ishkiin', 'bimaa'],
            translation: '“Isdzán”: mulher.',
          },
          {
            sentence: '“___”: mãe.',
            answer: 'bimaa',
            options: ['bimaa', 'bikʼisn', 'diyin'],
            translation: '“Bimaa”: mãe.',
          },
        ],
        voice: {
          bot: 'Ndee.',
          botTranslation: 'Pessoa; povo.',
          expected: ['Ndee.', 'ndee'],
          hint: 'Repita a palavra para “pessoa” e “povo apache”: “ndee”.',
        },
        communityPrompt: 'Escreva três palavras para pessoas em apache ocidental: “ndee” (pessoa), “isdzán” (mulher) e “ishkiin” (menino).',
      },
      {
        id: 'apw-u1-l3',
        title: 'Prova: as primeiras palavras',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Dagotʼee! Isdzán, ishkiin, bimaa.',
          botTranslation: 'Oi! Mulher, menino, mãe.',
          expected: ['Áho!', 'áho'],
          hint: 'Depois de ouvir essas palavras, agradeça com “Áho!”.',
        },
        communityPrompt: 'Escreva uma pequena cena: cumprimente com “Dagotʼee”, nomeie duas pessoas (por exemplo “isdzán” e “ishkiin”) e agradeça com “Áho”.',
      },
    ],
  },
  {
    id: 'apw-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Números, natureza e bichos',
    emoji: '🏔️',
    card: {
      id: 'apw-c2',
      title: 'Tom alto, tom baixo — e um parentesco de 92% com o navajo',
      emoji: '🎵',
      history:
        'O apache ocidental é uma língua tonal. Harry Hoijer e outros linguistas descrevem as línguas atabascanas meridionais com quatro tons (alto, baixo, ascendente e descendente, na tradição de transcrição americanista), e o artigo “Apachean languages” da Wikipédia em inglês registra que De Reuse (2006) encontrou ainda um tom médio específico do apache ocidental, marcado com um mácron — a própria palavra deste curso para “oito”, “tsebīī”, traz essa vogal de tom médio. Na ortografia prática, porém, só o tom alto costuma ser marcado, com o acento agudo; o tom baixo fica sem marca, segundo o artigo “Western Apache language” da mesma Wikipédia.',
      culture_tip:
        'A Wikipédia em inglês (artigo “Navajo language”) registra que o navajo é a língua mais próxima do apache ocidental: as duas compartilham um sistema de tons parecido e mais de 92% do vocabulário. Apache ocidental e navajo pertencem ao mesmo subgrupo ocidental das línguas apachianas, junto com o mescalero e o chiricauá — o navajo e o apache ocidental (sobretudo a variedade dilzhé\'e) são os dois mais próximos entre si dentro desse subgrupo, segundo o artigo “Apachean languages”.',
      grammar_why:
        'O verbo do apache ocidental muda de forma segundo a forma do objeto de que se fala — um sistema de “verbos classificatórios” comparável ao do jicarila e do mescalero, segundo a Wikipédia em inglês. Isso e a ordem das palavras (sujeito-objeto-verbo) voltam com mais detalhe na aba de gramática.',
      grammar_examples: [
        ['Dałaá, nakih, táági, dį́į́\'i, ashdla\'i.', '“Um, dois, três, quatro, cinco.”'],
        ['Dził, tséé, zas.', '“Montanha, pedra, neve.” — três palavras da natureza.'],
        ['Shash, gah, łį́į́ʼ.', '“Urso, coelho, cavalo.” — três bichos.'],
        ['Tsebīī.', '“Oito” — com a vogal de tom médio (ī) que De Reuse (2006) descreve para o apache ocidental.'],
      ],
      character_guide: [
        ['acento agudo (á, í, ...)', 'tom alto', 'áho'],
        ['sem acento', 'tom baixo', 'dawa (tudo)'],
        ['mácron (ī, macron sobre a vogal)', 'tom médio, descrito por De Reuse (2006) especificamente para o apache ocidental', 'tsebīī (oito)'],
      ],
    },
    lessons: [
      {
        id: 'apw-u2-l1',
        title: 'Contando até cinco',
        kind: 'licao',
        words: ['dałaá', 'nakih', 'táági', "dį́į́'i", "ashdla'i", 'tú'],
        cloze: [
          {
            sentence: 'Dałaá, nakih, ___.',
            answer: 'táági',
            options: ['táági', "dį́į́'i", "ashdla'i"],
            translation: 'Um, dois, três.',
          },
          {
            sentence: "___, ashdla'i.",
            answer: "dį́į́'i",
            options: ["dį́į́'i", 'táági', 'nakih'],
            translation: 'Quatro, cinco.',
          },
          {
            sentence: '“___”: água.',
            answer: 'tú',
            options: ['tú', 'dałaá', 'nakih'],
            translation: '“Tú”: água.',
          },
        ],
        voice: {
          bot: 'Dałaá, nakih, táági…',
          botTranslation: 'Um, dois, três…',
          expected: ["Dį́į́'i", "dį́į́'i"],
          hint: 'Complete a contagem: depois de “táági” (três) vem “dį́į́\'i” (quatro).',
        },
        communityPrompt: "Conte de um a cinco em apache ocidental: dałaá, nakih, táági, dį́į́'i, ashdla'i.",
      },
      {
        id: 'apw-u2-l2',
        title: 'Dził, shash, łį́į́ʼ: natureza e bichos',
        kind: 'licao',
        words: ['dził', 'tséé', 'zas', 'shash', 'gah', 'łį́į́ʼ'],
        cloze: [
          {
            sentence: '“___”: montanha.',
            answer: 'dził',
            options: ['dził', 'tséé', 'zas'],
            translation: '“Dził”: montanha.',
          },
          {
            sentence: '“___”: urso.',
            answer: 'shash',
            options: ['shash', 'gah', 'łį́į́ʼ'],
            translation: '“Shash”: urso.',
          },
          {
            sentence: '“___”: cavalo.',
            answer: 'łį́į́ʼ',
            options: ['łį́į́ʼ', 'gah', 'shash'],
            translation: '“Łį́į́ʼ”: cavalo.',
          },
        ],
        voice: {
          bot: 'Shash.',
          botTranslation: 'Urso.',
          expected: ['Shash.', 'shash'],
          hint: 'Repita a palavra para “urso”: “shash”.',
        },
        communityPrompt: 'Nomeie três coisas da natureza e um bicho em apache ocidental: “dził” (montanha), “zas” (neve) e “shash” (urso).',
      },
      {
        id: 'apw-u2-l3',
        title: 'Prova: números, natureza e bichos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Dałaá, nakih, táági, dį́į́'i…",
          botTranslation: 'Um, dois, três, quatro…',
          expected: ["Ashdla'i", "ashdla'i"],
          hint: "Complete a contagem até cinco: “ashdla'i”.",
        },
        communityPrompt: "Escreva uma pequena cena em apache ocidental: conte até cinco (dałaá…ashdla'i) e nomeie um bicho e uma coisa da natureza.",
      },
    ],
  },
];
