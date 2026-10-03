import type { UnitSeed } from '../types';

/**
 * Trilha do armênio ocidental: por enquanto só as duas unidades do nível A1 — ver `incomplete` em
 * index.ts. Fontes: Wikipédia ("Western Armenian", "Eastern Armenian") e Wikcionário em inglês
 * (uma entrada por palavra citada em vocabulario.ts e gramatica.ts).
 */
export const UNITS_HYW: UnitSeed[] = [
  {
    id: 'hyw-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Parev! Առաջին քայլերը',
    emoji: '👋',
    card: {
      id: 'hyw-c1',
      title: 'A mesma letra, um som diferente',
      emoji: '🔄',
      history:
        'O armênio ocidental é um dos dois padrões cultos modernos do armênio — o outro é o oriental, falado na Armênia (também neste app). Os dois usam o mesmo alfabeto de 39 letras, criado em 405 por Mesrop Mashtots, mas descendem de comunidades diferentes: o ocidental se baseia no dialeto armênio de Constantinopla/Istambul, falado no Império Otomano. Depois do genocídio armênio de 1915, que arrasou essas comunidades na Anatólia, o armênio ocidental passou a viver quase só na diáspora — no Líbano, na Síria, na França e nos Estados Unidos — sem nenhum país onde seja língua oficial. A UNESCO o classifica como língua ameaçada.',
      culture_tip:
        'O cumprimento de qualquer hora do dia é “Parev” (Բարև) — a mesma palavra do armênio oriental, só que pronunciada diferente: lá soa “barev”, aqui soa “parev”. Isso acontece porque o ocidental trocou a sonoridade de várias consoantes em relação ao oriental (ver o tópico de gramática “A troca de sonoridade”).',
      grammar_why:
        'O armênio ocidental tem o mesmo esqueleto do oriental — o verbo “ser” no presente (եմ, ես, է…) vem no final da frase nos dois — mas troca três dos seis pronomes (դուն, ան, անոնք em vez de դու, նա, նրանք) e muda a pronúncia de boa parte das consoantes.',
      grammar_examples: [
        ['Parev, ես Անի եմ:', 'Oi, eu sou a Ani.'],
        ['Իսկ դուն, ի՞նչպէս կը կոչուիս:', 'E você, como se chama?'],
        ['Ան Պէյրութէն է:', 'Ele/ela é de Beirute.'],
        ['Ցտեսութիւն, վաղը կը տեսնուինք:', 'Até logo, nos vemos amanhã.'],
      ],
      character_guide: [
        ['Բ բ', 'soa “p” aspirado no ocidental (não “b”!) — a sonora virou aspirada', 'Parev (Բարև) soa “parev”, não “barev”'],
        ['Պ պ', 'soa “b” no ocidental (não “p”!) — a surda simples virou sonora', 'պանիր (banir, “queijo”)'],
        ['Փ փ', 'aspirado nos dois padrões, não muda', 'փոքր não é usado no ocidental para “pequeno” (ver պզտիկ)'],
        ['Ր ր', 'um erre batido só uma vez, mais suave que o “rr” do português', 'Parev (Բարև)'],
        ['Ս ս', 'como o “s” de “sapo”, nunca como “z”', 'ես (yess, “eu”)'],
      ],
    },
    lessons: [
      {
        id: 'hyw-u1-l1',
        title: 'Parev, shnorhagaloutioun, tsdesoutioun!',
        kind: 'licao',
        words: ['Բարև', 'Բարի լոյս', 'Ցտեսութիւն', 'Շնորհակալութիւն', 'Ինչպէ՞ս ես', 'Խնդրեմ'],
        cloze: [
          { sentence: '___, Անի՛: Ինչպէ՞ս ես:', answer: 'Բարև', options: ['Բարև', 'Ցտեսութիւն', 'Շնորհակալութիւն'], translation: 'Oi, Ani. Como vai?' },
          { sentence: 'Առտու է. ___:', answer: 'Բարի լոյս', options: ['Բարի լոյս', 'Ցտեսութիւն', 'Շնորհակալութիւն'], translation: 'É de manhã: bom dia!' },
          { sentence: 'Շատ ___:', answer: 'շնորհակալութիւն', options: ['շնորհակալութիւն', 'բարև', 'ցտեսութիւն'], translation: 'Muito obrigado.' },
        ],
        voice: {
          bot: 'Բարև: Ինչպէ՞ս ես:',
          botTranslation: 'Oi! Como vai?',
          expected: ['Լաւ եմ, շնորհակալութիւն: Իսկ դուն՞:', 'լաւ եմ', 'շնորհակալութիւն'],
          hint: 'Responda que vai bem e devolva a pergunta: “Լաւ եմ, շնորհակալութիւն: Իսկ դուն՞:”.',
        },
        communityPrompt: 'Escreva três cumprimentos em armênio ocidental: “Բարև” (parev, a qualquer hora), “Բարի լոյս” (bom dia) e “Ցտեսութիւն” (até logo).',
      },
      {
        id: 'hyw-u1-l2',
        title: 'Ես, դուն, ան',
        kind: 'licao',
        words: ['ես', 'դուն', 'ան', 'մենք', 'անուն', 'ըլլալ'],
        cloze: [
          { sentence: '___ Անի եմ:', answer: 'Ես', options: ['Ես', 'Դուն', 'Ան'], translation: 'Eu sou a Ani.' },
          { sentence: 'Իսկ ___, ի՞նչպէս կը կոչուիս:', answer: 'դուն', options: ['դուն', 'ան', 'մենք'], translation: 'E você, como se chama?' },
          { sentence: '___ Պէյրութէն է:', answer: 'Ան', options: ['Ան', 'Ես', 'Դուն'], translation: 'Ele/ela é de Beirute.' },
        ],
        voice: {
          bot: 'Բարև: Ի՞նչպէս կը կոչուիս:',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Անունս Լինու է: Իսկ դուն՞:', 'անունս', 'իսկ դուն'],
          hint: 'Diga o seu nome com “Անունս … է” e devolva a pergunta com “Իսկ դուն՞:”.',
        },
        communityPrompt: 'Apresente-se em armênio ocidental: diga o seu nome com “Անունս … է” e pergunte o nome de alguém com “Ի՞նչպէս կը կոչուիս:”.',
      },
      {
        id: 'hyw-u1-l3',
        title: 'Քննութիւն. առաջին քայլերը',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Բարև, անունս Արամ է: Ի՞նչպէս կը կոչուիս, եւ ուրկէ՞ ես:',
          botTranslation: 'Oi, meu nome é Aram. Como você se chama e de onde você é?',
          expected: ['Բարև, անունս Լուսիա է, եւ ես Սան Պաուլուէն եմ:', 'անունս', 'ես', 'եմ'],
          hint: 'Devolva o cumprimento (“Բարև”), diga o nome (“Անունս … է”) e a cidade (“Ես … էն եմ”).',
        },
        communityPrompt: 'Escreva uma apresentação completa em armênio ocidental: cumprimento, nome com “Անունս … է”, cidade com “Ես … էն եմ” e uma despedida (“Ցտեսութիւն”).',
      },
    ],
  },
  {
    id: 'hyw-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ընտանիքը և տունը',
    emoji: '👪',
    card: {
      id: 'hyw-c2',
      title: 'Uma diáspora sem um só centro',
      emoji: '🌍',
      history:
        'Sem um país próprio, o armênio ocidental sobrevive em comunidades espalhadas: o Líbano — onde Beirute é, desde o século XX, um centro importante de imprensa e de material escolar em armênio ocidental —, a Síria (Alepo, Damasco), a França (Marselha) e os Estados Unidos (a região de Los Angeles e Fresno, na Califórnia, tem a maior concentração de armênios ocidentais fora do Oriente Médio). Essa dispersão é também por isso que o armênio ocidental manteve a ortografia clássica, de antes da reforma soviética: cada comunidade seguiu ensinando a língua do seu próprio jeito, longe da reforma que só valeu para a Armênia Soviética.',
      culture_tip:
        'Como em muitas culturas do Mediterrâneo Oriental, a família estendida é central: perguntar pela “ընտանիք” de alguém é uma forma comum de puxar conversa, e não é raro encontrar três gerações morando perto umas das outras.',
      grammar_why:
        'O ocidental tem palavras próprias para verbos do dia a dia: “ունենալ” (ter) é igual ao oriental, mas “ter um irmão” usa a mesma estrutura “ես … ունիմ” (eu … tenho), só que com a terminação ocidental do presente (-իմ em vez de -եմ em alguns verbos).',
      grammar_examples: [
        ['Իմ ընտանիքս մեծ է:', 'A minha família é grande.'],
        ['Ես մէկ եղբայր ունիմ:', 'Eu tenho um irmão.'],
        ['Իմ տունս պզտիկ է:', 'A minha casa é pequena.'],
        ['Ես չեմ գիտեր:', 'Eu não sei.'],
      ],
      character_guide: [
        ['Տ տ', 'soa “d” no ocidental (não “t”!) — a surda simples virou sonora', 'տուն (doun, “casa”)'],
        ['Դ դ', 'soa “t” aspirado no ocidental (não “d”!) — a sonora virou aspirada', 'դուն (toun, “tu”)'],
        ['Կ կ', 'soa “g” no ocidental — a surda simples virou sonora', 'կատու (gadou, “gato”)'],
        ['Գ գ', 'soa “k” aspirado no ocidental — a sonora virou aspirada', 'գլուխ (k’loukh, “cabeça”)'],
        ['ույ / ոյ', 'o ocidental mantém a grafia clássica “ոյ”, onde a reforma oriental escreve “ույ”', 'քոյր (k’oyr, “irmã”)'],
      ],
    },
    lessons: [
      {
        id: 'hyw-u2-l1',
        title: 'Ընտանիքս',
        kind: 'licao',
        words: ['ընտանիք', 'հայր', 'մայր', 'եղբայր', 'քոյր', 'ունենալ'],
        cloze: [
          { sentence: 'Իմ ___ -ս մեծ է:', answer: 'ընտանիք', options: ['ընտանիք', 'հայր', 'մայր'], translation: 'A minha família é grande.' },
          { sentence: 'Ես մէկ ___ ունիմ:', answer: 'եղբայր', options: ['եղբայր', 'քոյր', 'հայր'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Իմ ___ -ս Հալէպէն է:', answer: 'հայր', options: ['հայր', 'մայր', 'քոյր'], translation: 'O meu pai é de Alepo.' },
        ],
        voice: {
          bot: 'Եղբայր կամ քոյր ունի՞ս:',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Այո, ես մէկ եղբայր եւ մէկ քոյր ունիմ:', 'ես … ունիմ', 'եղբայր', 'քոյր'],
          hint: 'Responda com “Այո, ես … ունիմ” ou “Ոչ, ես չունիմ”.',
        },
        communityPrompt: 'Descreva a sua família em armênio ocidental: quantos irmãos (եղբայր) e irmãs (քոյր) você tem, e como se chamam os seus pais (հայր, մայր).',
      },
      {
        id: 'hyw-u2-l2',
        title: 'Տանը',
        kind: 'licao',
        words: ['տուն', 'ջուր', 'հաց', 'կաթ', 'պանիր', 'ուտել'],
        cloze: [
          { sentence: 'Իմ ___ -ս պզտիկ է:', answer: 'տուն', options: ['տուն', 'ջուր', 'հաց'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ես ___ կը խմեմ:', answer: 'ջուր', options: ['ջուր', 'հաց', 'պանիր'], translation: 'Eu bebo água.' },
          { sentence: 'Ես ___ եւ պանիր կ՚ուտեմ:', answer: 'հաց', options: ['հաց', 'կաթ', 'ջուր'], translation: 'Eu como pão e queijo.' },
        ],
        voice: {
          bot: 'Ի՞նչ կ՚ուտես առտուն:',
          botTranslation: 'O que você come de manhã?',
          expected: ['Ես հաց եւ պանիր կ՚ուտեմ:', 'ես … կ՚ուտեմ', 'հաց', 'պանիր'],
          hint: 'Diga o que come com “Ես … կ՚ուտեմ”.',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã, usando “ես … կ՚ուտեմ” e “ես … կը խմեմ”.',
      },
      {
        id: 'hyw-u2-l3',
        title: 'Քննութիւն. ընտանիք և տուն',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Պատմէ քու ընտանիքիդ մասին. եղբայր կամ քոյր ունի՞ս:',
          botTranslation: 'Conte da sua família: você tem irmão ou irmã?',
          expected: ['Այո, ես մէկ քոյր ունիմ: Անոր անունը Մարիա է:', 'ես … ունիմ', 'անունը'],
          hint: 'Diga quantos irmãos tem (“ես … ունիմ”) e o nome deles (“անոր անունը … է”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ես … ունիմ”, “անունը … է” e “է”.',
      },
    ],
  },
];
