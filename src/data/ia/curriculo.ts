import type { UnitSeed } from '../types';

/**
 * Trilha da interlíngua: só as duas unidades do nível A1 por enquanto (ver `incomplete` em
 * index.ts) — a segunda língua construída do app com curso de verdade (depois do esperanto),
 * pedido do Matheus em 08/10/2026. Fontes: Alexander Gode e Hugh Blair, "Interlingua: A Grammar of
 * the International Language" (IALA, 1951); B. C. Sexton, "English-Interlingua: A Basic
 * Vocabulary" (Union Mundial pro Interlingua, reimpressão 2019); Wikipédia ("Interlingua",
 * "Interlingua grammar", "History of Interlingua").
 */
export const UNITS_IA: UnitSeed[] = [
  {
    id: 'ia-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bon die! Le prime passos',
    emoji: '🌍',
    card: {
      id: 'ia-c1',
      title: 'A língua que foi "descoberta", não inventada',
      emoji: '🌍',
      history:
        'A interlíngua nasceu de um projeto diferente de todas as outras línguas construídas: em vez de inventar palavras novas (como fez Zamenhof no esperanto), a IALA (International Auxiliary Language Association, fundada em Nova York em 1924 por Alice Vanderbilt Morris) passou quase três décadas comparando o vocabulário do inglês, do francês, do italiano e do espanhol/português, junto com o alemão e o russo como apoio. Uma palavra entrava na interlíngua só se aparecesse, de forma reconhecível, em pelo menos três dessas línguas — o resultado é quase um "denominador comum" do latim que ainda vive nas línguas românicas e no inglês. O linguista Alexander Gode terminou o trabalho e publicou o dicionário e a gramática oficiais em 1951.',
      culture_tip:
        'Por causa desse método, quem já fala português, espanhol, italiano, francês ou inglês costuma CONSEGUIR LER um texto em interlíngua à primeira vista, sem nunca ter estudado a língua — é a característica mais comentada dela. A União Mundial pro Interlingua (UMI) organiza uma conferência internacional a cada dois anos desde 1955.',
      grammar_why:
        'Como o verbo da interlíngua NUNCA muda de forma pela pessoa ("es" serve pra "eu sou", "você é", "ele é"...), o pronome de sujeito nunca pode ser omitido — diferente do português, em que "sou Ana" já basta sozinho. Sem o pronome, ninguém saberia quem é o sujeito.',
      grammar_examples: [
        ['Io es Ana.', 'Eu sou Ana.'],
        ['Illa es mi matre.', 'Ela é minha mãe.'],
      ],
      character_guide: [
        ['c', '"ts" antes de e/i/y, "k" nos outros casos', 'centro ("TSEN-tro", centro)'],
        ['g', 'sempre "g" duro, mesmo antes de e/i — diferente do "gelo" português', 'grande ("GRAN-de", grande)'],
        ['qu', 'sempre "kw" — o "u" nunca é mudo como em português', 'qui ("kwi", quem)'],
        ['j', 'o mesmo som do "j" português, de "já"', 'jalne ("JAL-ne", amarelo)'],
      ],
    },
    lessons: [
      {
        id: 'ia-u1-l1',
        title: 'Bon die, gratias!',
        kind: 'licao',
        words: ['bon die', 'adeo', 'gratias', 'si', 'no', 'nomine'],
        cloze: [
          { sentence: '___, Petro!', answer: 'Bon die', options: ['Bon die', 'Adeo', 'Gratias'], translation: 'Olá, Petro!' },
          { sentence: '___ pro le pan!', answer: 'Gratias', options: ['Gratias', 'Bon die', 'No'], translation: 'Obrigado pelo pão!' },
          { sentence: 'Qual es tu ___?', answer: 'nomine', options: ['nomine', 'bon die', 'si'], translation: 'Qual é o seu nome?' },
        ],
        voice: {
          bot: 'Bon die! Qual es tu nomine?',
          botTranslation: 'Olá! Qual é o seu nome?',
          expected: ['Mi nomine es Ana.', 'mi nomine es', 'io me appella'],
          hint: 'Diga seu nome com "Mi nomine es…" ou "Io me appella…".',
        },
        communityPrompt: 'Apresente-se em interlíngua: diga seu nome com "Mi nomine es…" ou "Io me appella…".',
      },
      {
        id: 'ia-u1-l2',
        title: 'Io, tu, ille, illa',
        kind: 'licao',
        words: ['io', 'tu', 'vos', 'ille', 'illa', 'esser'],
        cloze: [
          { sentence: '___ es Ana.', answer: 'Io', options: ['Io', 'Tu', 'Illa'], translation: 'Eu sou Ana.' },
          { sentence: 'Qual ___ tu nomine?', answer: 'es', options: ['es', 'ha', 'va'], translation: 'Qual é o seu nome?' },
          { sentence: '___ es mi amico.', answer: 'Ille', options: ['Ille', 'Io', 'Nos'], translation: 'Ele é meu amigo.' },
        ],
        voice: {
          bot: 'Bon die! Esque tu es Ana?',
          botTranslation: 'Olá! Você é a Ana?',
          expected: ['No, io es Petro.', 'no, io es', 'si, io es'],
          hint: 'Responda com "Si, io es…" ou "No, io es…" e diga seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com "Qual es tu nomine?" (informal) ou "Qual es vostre nomine?" (formal).',
      },
      {
        id: 'ia-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bon die! Io es Petro. E tu, qui es tu?',
          botTranslation: 'Olá! Eu sou Petro. E você, quem é você?',
          expected: ['Bon die! Io es Ana. Gratias!', 'io es', 'gratias'],
          hint: 'Responda a saudação, diga quem você é e agradeça com "Gratias".',
        },
        communityPrompt: 'Escreva uma apresentação curta em interlíngua: saudação, seu nome e uma despedida ("Adeo").',
      },
    ],
  },
  {
    id: 'ia-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mi familia e mi domo',
    emoji: '👪',
    card: {
      id: 'ia-c2',
      title: 'Uma palavra, muitos parentes verdadeiros',
      emoji: '🏠',
      history:
        'A palavra "familia" é praticamente idêntica no português ("família"), no espanhol ("familia"), no italiano ("famiglia") e no inglês ("family") — exatamente o tipo de palavra que o método de prototipagem da IALA escolheu de propósito. Mas nem toda a família segue um padrão só: diferente do esperanto (que deriva "patrino" de "patro" com um sufixo), a interlíngua usa raízes totalmente diferentes para "patre"/"matre" e "fratre"/"soror" — só "filio"/"filia" muda a vogal final.',
      culture_tip:
        'A União Mundial pro Interlingua (UMI) publica desde 1988 a revista "Panorama in Interlingua", com notícias e resumos de ciência só em interlíngua — uma continuação direta do uso científico que a língua já tinha nos anos 1950 e 1960, quando centenas de resumos de artigos científicos foram publicados nela.',
      grammar_why:
        '"Patre" (pai) e "matre" (mãe) usam raízes DIFERENTES — não existe um sufixo "fazer o feminino" universal como no esperanto. O mesmo vale para "fratre" (irmão) e "soror" (irmã). Só "filio"/"filia" e "puero"/"puera" mudam a vogal final (-o masculino, -a feminino).',
      grammar_examples: [
        ['Mi patre e mi matre.', 'Meu pai e minha mãe.'],
        ['Io ha un fratre.', 'Eu tenho um irmão.'],
      ],
      character_guide: [
        ['t + ia/ie/io', '"ts" antes dessas terminações', 'nation ("na-TSI-on", nação)'],
        ['h', 'quase sempre muda, como em português', 'haber ("A-ber", ter)'],
      ],
    },
    lessons: [
      {
        id: 'ia-u2-l1',
        title: 'Mi familia',
        kind: 'licao',
        words: ['patre', 'matre', 'fratre', 'soror', 'familia', 'haber'],
        cloze: [
          { sentence: 'Mi ___ se appella Johan.', answer: 'patre', options: ['patre', 'matre', 'fratre'], translation: 'Meu pai se chama Johan.' },
          { sentence: 'Io ___ un fratre.', answer: 'ha', options: ['ha', 'es', 'parla'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mi ___ es grande.', answer: 'familia', options: ['familia', 'domo', 'nomine'], translation: 'Minha família é grande.' },
        ],
        voice: {
          bot: 'Esque tu ha fratres?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Si, io ha un fratre e un soror.', 'io ha', 'fratre'],
          hint: 'Responda com "Si, io ha…" ou "No, io non ha fratres."',
        },
        communityPrompt: 'Descreva sua família em interlíngua: quantos irmãos você tem e como se chamam seus pais.',
      },
      {
        id: 'ia-u2-l2',
        title: 'In mi domo',
        kind: 'licao',
        words: ['domo', 'can', 'catto', 'aqua', 'pan', 'grande'],
        cloze: [
          { sentence: 'Mi ___ es parve.', answer: 'domo', options: ['domo', 'can', 'pan'], translation: 'Minha casa é pequena.' },
          { sentence: 'Io bibe ___.', answer: 'aqua', options: ['aqua', 'pan', 'can'], translation: 'Eu bebo água.' },
          { sentence: '___ es bon.', answer: 'Le pan', options: ['Le pan', 'Le can', 'Le catto'], translation: 'O pão é bom.' },
        ],
        voice: {
          bot: 'Esque tu ha un can o un catto?',
          botTranslation: 'Você tem um cachorro ou um gato?',
          expected: ['Io ha un can.', 'io ha', 'e un catto'],
          hint: 'Use "Io ha…" pra dizer o que você tem.',
        },
        communityPrompt: 'Descreva sua casa em duas ou três frases: se é grande ou pequena (parve), e o que tem nela.',
      },
      {
        id: 'ia-u2-l3',
        title: 'Prova: família e casa',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Nostre domo es grande. Esque tu domo es grande o parve?',
          botTranslation: 'Nossa casa é grande. Sua casa é grande ou pequena?',
          expected: ['Mi domo es parve, ma mi familia es grande.', 'mi domo', 'mi familia'],
          hint: 'Diga como é sua casa com "Mi domo es…" e fale da família com "Mi familia es…".',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando sua família e sua casa em interlíngua, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
  {
    id: 'ia-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Le tempore e le vestimentos',
    emoji: '🌦️',
    card: {
      id: 'ia-c3',
      title: 'O futuro mais regular de todos',
      emoji: '🔮',
      history:
        'A interlíngua tem o futuro mais previsível entre as línguas do app: tira-se o -r do infinitivo e acrescenta-se -a, sempre com acento tônico nessa sílaba (parlar → parlara). Não existe conjugação por pessoa — "io parlara" e "nos parlara" usam a MESMA forma verbal, só muda o pronome. Essa regularidade total vem do próprio método da IALA: a gramática da interlíngua junta só as regras que já são comuns às quatro línguas de controle (inglês, francês, italiano, espanhol/português), eliminando as irregularidades que sobram em cada uma.',
      culture_tip:
        'Como a interlíngua não tem um território próprio, o vocabulário do clima vem direto do latim comum às línguas românicas: "pluvia" (chuva), "nive" (neve), "sol" — palavras que qualquer falante de português reconhece de cara.',
      grammar_why:
        'O futuro (infinitivo menos -r, mais -a tônico) vale pra qualquer verbo regular, sem exceção. Existe também uma alternativa perifrástica, "vader" (ir) + infinitivo, com o mesmo sentido — útil pra quem já conhece o "vou fazer" do português.',
      grammar_examples: [
        ['Deman io comprara un nove jachetta.', 'Amanhã eu vou comprar uma jaqueta nova.'],
        ['Hodie es calide, deman essera frigide.', 'Hoje está quente, amanhã vai estar frio.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ia-u3-l1',
        title: 'Que tempore face il hodie?',
        kind: 'licao',
        words: ['pluvia', 'vento', 'nive', 'nube', 'calide', 'frigide'],
        cloze: [
          { sentence: 'Hodie il pluve, il ha ___.', answer: 'pluvia', options: ['pluvia', 'nive', 'vento'], translation: 'Hoje chove, tem chuva.' },
          { sentence: 'In hiberno il niva in le montanias, il ha ___.', answer: 'nive', options: ['nive', 'pluvia', 'nube'], translation: 'No inverno neva nas montanhas, tem neve.' },
          { sentence: 'Hodie es ___ multo, biber aqua!', answer: 'calide', options: ['calide', 'frigide', 'nube'], translation: 'Hoje está muito quente, beba água!' },
        ],
        voice: {
          bot: 'Que tempore face il hodie?',
          botTranslation: 'Que tempo faz hoje?',
          expected: ['Hodie es calide e il ha multo sol.', 'calide', 'sol'],
          hint: 'Descreva o tempo com "hodie es…" e o adjetivo (calide, frigide) ou um substantivo (sol, pluvia).',
        },
        communityPrompt: 'Descreva o tempo de hoje onde você mora, em interlíngua: se está quente ou frio, se tem sol, vento ou chuva.',
      },
      {
        id: 'ia-u3-l2',
        title: 'Le vestimentos',
        kind: 'licao',
        words: ['jachetta', 'pantalones', 'scarpa', 'cappello', 'comprar', 'portar'],
        cloze: [
          { sentence: 'Io vole ___ un nove roba.', answer: 'comprar', options: ['comprar', 'portar', 'pensar'], translation: 'Eu quero comprar um vestido novo.' },
          { sentence: 'Mi ___ es nove.', answer: 'jachetta', options: ['jachetta', 'scarpa', 'cappello'], translation: 'Minha jaqueta é nova.' },
          { sentence: 'Ille ___ un cappello rubie.', answer: 'porta', options: ['porta', 'compra', 'pensa'], translation: 'Ele usa um chapéu vermelho.' },
        ],
        voice: {
          bot: 'Qual vestimento tu porta hodie?',
          botTranslation: 'Que roupa você está usando hoje?',
          expected: ['Hodie io porta un nove jachetta.', 'io porta', 'jachetta'],
          hint: 'Descreva sua roupa com "io porta…" e uma peça (jachetta, scarpa).',
        },
        communityPrompt: 'Descreva a roupa que você está usando hoje, em interlíngua, e diga se você vai comprar algo novo em breve ("io comprara…").',
      },
      {
        id: 'ia-u3-l3',
        title: 'Prova: le tempore e le vestimentos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Que tempore face il hodie, e que facera tu deman?',
          botTranslation: 'Que tempo faz hoje, e o que você vai fazer amanhã?',
          expected: ['Hodie es calide. Deman io laborara e comprara un nove roba.', 'io laborara', 'hodie es'],
          hint: 'Descreva o tempo com "hodie es…" e o futuro em "-a" pra dizer o que vai fazer amanhã.',
        },
        communityPrompt: 'Escreva três frases: o tempo de hoje, uma peça de roupa que você gosta e um plano para amanhã usando o futuro em "-a".',
      },
    ],
  },
  {
    id: 'ia-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Le corpore, professiones e sentimentos',
    emoji: '🩺',
    card: {
      id: 'ia-c4',
      title: 'Comparar com plus, minus e le plus',
      emoji: '📊',
      history:
        'A interlíngua compara sem sufixo nenhum, só com partículas: "plus" (mais) e "minus" (menos) antes do adjetivo, e "le plus"/"le minus" pro superlativo — "le plus alte arbore" (a árvore mais alta). Pra ênfase, existe o sufixo "-issime" ("excellentissime"). Quatro adjetivos comuns (bon, mal, magne, parve) também aceitam uma forma irregular curta, opcional: "melior" ao lado de "plus bon".',
      culture_tip:
        'As preposições "a" e "de" se contraem com o artigo "le": "al" e "del" — "le libro del patre al matre" é um exemplo de verdade da própria gramática oficial de Gode e Blair, de 1951.',
      grammar_why:
        'O comparativo e o superlativo são sempre feitos com partículas antes do adjetivo (plus, minus, le plus, le minus), nunca com sufixo — diferente do português ("maior", "-íssimo").',
      grammar_examples: [
        ['Illa es plus alte que su fratre.', 'Ela é mais alta que o irmão dela.'],
        ['Le libro es del patre.', 'O livro é do pai. (de + le = del)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ia-u4-l1',
        title: 'Le corpore',
        kind: 'licao',
        words: ['capite', 'mano', 'bracio', 'gamba', 'oculo', 'bucca'],
        cloze: [
          { sentence: 'Mi ___ me dole.', answer: 'capite', options: ['capite', 'mano', 'bucca'], translation: 'Minha cabeça dói.' },
          { sentence: 'Illa ha ___ blau.', answer: 'oculos', options: ['oculos', 'manos', 'gambas'], translation: 'Ela tem olhos azuis.' },
          { sentence: 'Da me tu ___, per favor.', answer: 'mano', options: ['mano', 'capite', 'stomacho'], translation: 'Me dê a mão, por favor.' },
        ],
        voice: {
          bot: 'Que te dole?',
          botTranslation: 'O que dói em você?',
          expected: ['Mi capite me dole.', 'me dole', 'capite'],
          hint: 'Responda com "[parte do corpo] me dole" para dizer o que dói.',
        },
        communityPrompt: 'Escreva três frases dizendo o que dói ("… me dole") usando palavras desta lição.',
      },
      {
        id: 'ia-u4-l2',
        title: 'Professiones e sentimentos',
        kind: 'licao',
        words: ['medico', 'maestro', 'infirmera', 'felice', 'triste', 'fatigate'],
        cloze: [
          { sentence: 'Mi patre es ___.', answer: 'medico', options: ['medico', 'maestro', 'felice'], translation: 'Meu pai é médico.' },
          { sentence: 'Hodie io es ___, io ha laborate multo.', answer: 'fatigate', options: ['fatigate', 'felice', 'triste'], translation: 'Hoje estou cansado, trabalhei muito.' },
          { sentence: 'Illa es ___ plus alte que su fratre.', answer: 'plus', options: ['plus', 'minus', 'le'], translation: 'Ela é mais alta que o irmão dela.' },
        ],
        voice: {
          bot: 'Qual es tu profession, e como tu se senti hodie?',
          botTranslation: 'Qual é sua profissão, e como você está se sentindo hoje?',
          expected: ['Io es maestro, e hodie io es felice.', 'io es', 'felice'],
          hint: 'Diga sua profissão com "io es…" e como se sente com "io es felice/triste".',
        },
        communityPrompt: 'Descreva sua profissão (ou a de um familiar) e como você está se sentindo hoje, em interlíngua.',
      },
      {
        id: 'ia-u4-l3',
        title: 'Prova: corpore, professiones e sentimentos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Qual es tu profession, e tu capite te dole hodie?',
          botTranslation: 'Qual é sua profissão, e sua cabeça dói hoje?',
          expected: ['Io es maestro, e hodie mi capite me dole, io es fatigate.', 'io es', 'me dole'],
          hint: 'Diga sua profissão ("io es…") e se alguma parte do corpo dói ("… me dole").',
        },
        communityPrompt: 'Escreva um parágrafo curto: sua profissão, como você está se sentindo e algo que você sabe fazer bem.',
      },
    ],
  },
];
