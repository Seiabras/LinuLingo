import type { UnitSeed } from '../types';

/**
 * Trilha do inupiaque: por enquanto só as duas unidades do nível A1 (curso incompleto — ver
 * `incomplete` em index.ts). Fontes no cabeçalho de vocabulario.ts: [WIKT], [OMNI], [WIKI].
 *
 * As frases são do [OMNI] (cumprimentos, “Atiġa …”, “Una qavsit?”) e dos exemplos dos verbetes do
 * [WIKT] (“Igluga Utqiaġviŋmi ittuq”, “Maktak niġiruni nakuuruq”, “Iñuuruŋa Kisaġviŋmi” e as outras),
 * com a tradução deles. Nenhuma frase foi montada por nós.
 */
export const UNITS_IK: UnitSeed[] = [
  {
    id: 'ik-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Haluu! Qanuq itpich?',
    emoji: '👋',
    card: {
      id: 'ik-c1',
      title: 'Utqiaġvik, no topo do Alasca',
      emoji: '🧊',
      // [WIKI] «Iñupiaq language» (cerca de 2.000 falantes, quase todos com mais de 40 anos; oficial no
      // Alasca desde 2014; alfabeto de Roy Ahmaogak, de Utqiaġvik, com Eugene Nida, em 1946); Wikipédia
      // em inglês, «Utqiagvik, Alaska» (antiga Barrow, a cidade mais ao norte dos Estados Unidos).
      history:
        'O inupiaque é a língua dos iñupiat, no norte e no noroeste do Alasca. É parente próximo do inuktitut do Canadá e do groenlandês: há uns mil anos, os antepassados dos inuítes saíram do Alasca e chegaram até a Groenlândia, e os dialetos do Alasca são os que menos mudaram desde então. Hoje são cerca de 2.000 falantes, quase todos com mais de 40 anos, e desde 2014 a língua é oficial no estado do Alasca. O alfabeto de hoje foi criado em 1946 por Roy Ahmaogak, um pastor iñupiaq de Utqiaġvik — a cidade mais ao norte dos Estados Unidos, que até 2016 se chamava Barrow.',
      culture_tip:
        'Para agradecer, diz-se “Quyanaq!”. E quando alguém pergunta “Qanuq itpich?” (como vai?), a resposta é “Nakuuruŋa” (estou bem) — que vem de “nakuu-”, ser bom.',
      grammar_why:
        'O inupiaque cola pedaços no fim da palavra para dizer quem faz a ação. Depois de vogal, “eu” é -ruŋa, “você” é -rutin e “ele, ela” é -ruq; depois de consoante, o “r” vira “t”: -tuŋa, -tutin, -tuq. Por isso “nakuuruq” é “ele, ela está bem”, e “nakuuruŋa”, “eu estou bem”. Uma frase inteira pode caber numa palavra só.',
      grammar_examples: [
        ['Nakuuruq aġnaq.', 'A mulher é boa.'],
        ['Nakuuruŋa.', 'Estou bem.'],
        ['Piḷḷuataqtutin!', 'Você foi bem!'],
      ],
      character_guide: [
        ['aa ii uu', 'a vogal dobrada é longa', 'Haluu (olá)'],
        ['q', 'um “k” lá do fundo da garganta', 'Quyanaq (obrigado)'],
        ['ġ', 'o “r” arranhado do fundo da garganta, como o “r” do francês', 'Atiġa (meu nome é)'],
        ['ŋ', 'o “ng” de “inglês”, numa letra só', 'uvaŋa (eu)'],
        ['ñ', 'o “nh” do português', 'iñuk (pessoa)'],
        ['ł ḷ', 'ł é um “l” soprado, sem voz; ḷ é um “lh”', 'akłaq (urso-pardo), siḷa (o tempo)'],
      ],
    },
    lessons: [
      {
        id: 'ik-u1-l1',
        title: 'Haluu! Qanuq itpich?',
        kind: 'licao',
        words: ['Haluu', 'Qanuq itpich?', 'Nakuuruŋa', 'Quyanaq', 'Uvlaallautaq', 'Tautugniaqmiġikpiñ'],
        cloze: [
          { sentence: '___ itpich?', answer: 'Qanuq', options: ['Qanuq', 'Quyanaq', 'Haluu'], translation: 'Como vai?' },
          { sentence: '___, quyanaq.', answer: 'Nakuuruŋa', options: ['Nakuuruŋa', 'Tautugniaqmiġikpiñ', 'Kinauvin'], translation: 'Estou bem, obrigado.' },
          { sentence: '___!', answer: 'Uvlaallautaq', options: ['Uvlaallautaq', 'Pisaraluarnak', 'Una qavsit'], translation: 'Bom dia!' },
        ],
        voice: {
          bot: 'Qanuq itpich?',
          botTranslation: 'Como vai?',
          expected: ['Nakuuruŋa, quyanaq.', 'Nakuuruŋa', 'nakuuruna', 'Quyanaq'],
          hint: 'Diga que está bem: “Nakuuruŋa, quyanaq” (estou bem, obrigado).',
        },
        communityPrompt: 'Escreva um cumprimento (“Haluu!”), a pergunta “Qanuq itpich?” e um agradecimento.',
      },
      {
        id: 'ik-u1-l2',
        title: 'Kinauvin?',
        kind: 'licao',
        words: ['Kinauvin?', 'Atiġa', 'uvaŋa', 'ilviñ', 'kiña', 'iglu'],
        cloze: [
          { sentence: '___ Linu.', answer: 'Atiġa', options: ['Atiġa', 'Kiña', 'Quyanaq'], translation: 'Meu nome é Linu.' },
          { sentence: 'Igluga Utqiaġviŋmi ___.', answer: 'ittuq', options: ['ittuq', 'iglu', 'ilviñ'], translation: 'Minha casa fica em Utqiaġvik.' },
          { sentence: 'Kiña aullaġniaqpa? … ___!', answer: 'Ilviñ', options: ['Ilviñ', 'Uvagut', 'Naumi'], translation: 'Quem vai? … Você!' },
        ],
        voice: {
          bot: 'Kinauvin?',
          botTranslation: 'Qual é o seu nome? (quem é você?)',
          expected: ['Atiġa Linu.', 'Atiġa Linu', 'atiga linu'],
          hint: 'Diga “Atiġa Linu” (meu nome é Linu).',
        },
        communityPrompt: 'Apresente-se: “Atiġa …” (meu nome é …) e pergunte o nome de alguém (“Kinauvin?”).',
      },
      {
        id: 'ik-u1-l3',
        title: 'Prova: Haluu! Qanuq itpich?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Paġlagikpiñ!',
          botTranslation: 'Bem-vindo!',
          expected: ['Quyanaq!', 'Quyanaq', 'quyanaq'],
          hint: 'Agradeça a acolhida: “Quyanaq!”.',
        },
        communityPrompt: 'Escreva uma chegada: “Paġlagikpiñ!”, “Qanuq itpich?”, “Nakuuruŋa, quyanaq!”.',
      },
    ],
  },
  {
    id: 'ik-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Maktak niġiruni nakuuruq',
    emoji: '🐋',
    card: {
      id: 'ik-c2',
      title: 'A baleia, o caribu e a conta em vinte',
      emoji: '🐋',
      // [WIKT] s.v. “aġviq” (bowhead whale), “maktak” (whale skin with blubber, muktuk), “tuttu” (tabela de
      // “caribou”), “umiaq” (exemplo de “atuġnaq-”); [WIKI] «Iñupiaq language», Numerals (base 20, com
      // sub-base 5; tallimat vem da palavra para mão/braço e iñuiññaq, 20, é “a pessoa inteira”);
      // Wikipédia em inglês, «Kaktovik numerals» (algarismos de base 20 criados por alunos de Kaktovik,
      // no Alasca, em 1994).
      history:
        'Nas cidades da costa, como Utqiaġvik, a caça à “aġviq”, a baleia-da-groenlândia, ainda é o centro do ano, e o “maktak”, a pele da baleia com a gordura, é uma das comidas mais apreciadas. No interior, a caça é a do “tuttu”, o caribu. E o inupiaque conta de um jeito próprio: em vinte, e não em dez. “Tallimat” (cinco) vem da palavra para mão, e “iñuiññaq” (vinte) quer dizer algo como “a pessoa inteira” — todos os dedos das mãos e dos pés. Em 1994, alunos de uma escola de Kaktovik, no Alasca, inventaram algarismos próprios para contar em vinte, os algarismos de Kaktovik, que hoje são usados pelos iñupiat do Alasca.',
      culture_tip:
        'Para dizer que uma comida é boa, o inupiaque diz “é bom de comer”: “Maktak niġiruni nakuuruq” (o maktak é bom de comer). Com as bebidas, “é bom de beber”: “Saiyu imiqtuni nakuuruq” (o chá é bom de beber).',
      grammar_why:
        'O inupiaque conta em três números: um, dois e muitos. Uma pessoa é “iñuk”, duas pessoas são “iññuk”, e o povo, “iñuich”. O verbo acompanha: “nakuuruq” (é bom, um só) e “nakuurut” (são bons, três ou mais). E o sete e o oito se fazem a partir do cinco: sete é “tallimat malġuk”, “cinco e dois”.',
      grammar_examples: [
        ['Iqaluk.', 'Um peixe.'],
        ['Iqaluit niġiruni nakuurut.', 'Os peixes são bons de comer.'],
        ['Malġuk iññuk paaqsaaġutiruk.', 'As duas pessoas se cruzaram.'],
      ],
      character_guide: [
        ['-k', 'o final do dual (dois)', 'iññuk (duas pessoas)'],
        ['-t, -it, -ich', 'o final do plural (três ou mais)', 'tuttut (caribus), iqaluit (peixes), iñuich (pessoas)'],
        ['-mi', 'em, no, na', 'Utqiaġviŋmi (em Utqiaġvik)'],
      ],
    },
    lessons: [
      {
        id: 'ik-u2-l1',
        title: 'Aġviq, tuttu, nanuq',
        kind: 'licao',
        words: ['aġviq', 'tuttu', 'nanuq', 'iqaluk', 'qimmiq', 'umiaq'],
        cloze: [
          { sentence: '___ aŋiłallaktuq.', answer: 'Aġviq', options: ['Aġviq', 'Qimmiq', 'Iqaluk'], translation: 'A baleia-da-groenlândia é grande.' },
          { sentence: 'Agga ___.', answer: 'tuttut', options: ['tuttut', 'nanuq', 'iglu'], translation: 'Há caribus lá do outro lado.' },
          { sentence: '___ atuġnaqtuq.', answer: 'Umiaq', options: ['Umiaq', 'Aiviq', 'Akłaq'], translation: 'O barco é útil.' },
        ],
        voice: {
          bot: 'Suna pisukpiuŋ?',
          botTranslation: 'O que você quer?',
          expected: ['Maktak.', 'Maktak', 'maktak', 'Iqaluk', 'Saiyu', 'Kuuppiaq'],
          hint: 'Peça uma comida: “Maktak” ou “Iqaluk” (peixe).',
        },
        communityPrompt: 'Escreva os bichos do Ártico que você conhece em inupiaque: “aġviq”, “tuttu”, “nanuq”…',
      },
      {
        id: 'ik-u2-l2',
        title: 'Maktak, saiyu, kuuppiaq',
        kind: 'licao',
        words: ['maktak', 'saiyu', 'kuuppiaq', 'qaqqiaq', 'niġiruq', 'nakuuruq'],
        cloze: [
          { sentence: 'Maktak niġiruni ___.', answer: 'nakuuruq', options: ['nakuuruq', 'niġiruq', 'qaqqiaq'], translation: 'O maktak é bom de comer.' },
          { sentence: '___ imiqtuni nakuuruq.', answer: 'Saiyu', options: ['Saiyu', 'Iqaluk', 'Tuttu'], translation: 'O chá é bom de beber.' },
          { sentence: 'Qaqqiaq ___ niġiruni.', answer: 'kayumiktuq', options: ['kayumiktuq', 'imiqtuni', 'nakuurut'], translation: 'O pão é gostoso de comer.' },
        ],
        voice: {
          bot: 'Kuuppiaq imiqtuni nakuuruq.',
          botTranslation: 'O café é bom de beber.',
          expected: ['Saiyu imiqtuni nakuuruq.', 'Saiyu', 'saiyu', 'Ii', 'Quyanaq'],
          hint: 'Responda com o chá: “Saiyu imiqtuni nakuuruq” (o chá é bom de beber).',
        },
        communityPrompt: 'Escreva o que você come e bebe: “Saiyu imiqtuni nakuuruq”, “Qaqqiaq…”.',
      },
      {
        id: 'ik-u2-l3',
        title: 'Prova: Maktak niġiruni nakuuruq',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Una qavsit?',
          botTranslation: 'Quanto custa isto?',
          expected: ['Tallimat.', 'Tallimat', 'tallimat', 'Piŋasut', 'Malġuk', 'Atausiq', 'Sisamat', 'Qulit'],
          hint: 'Responda com um número: “Tallimat” (cinco), “Piŋasut” (três)…',
        },
        communityPrompt: 'Conte de um a cinco em inupiaque: “atausiq, malġuk, piŋasut, sisamat, tallimat”.',
      },
    ],
  },
];
