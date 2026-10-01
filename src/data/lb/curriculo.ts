import type { UnitSeed } from '../types';

/**
 * Trilha do luxemburguês: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_LB: UnitSeed[] = [
  {
    id: 'lb-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Moien! Wéi geet et?',
    emoji: '👋',
    card: {
      id: 'lb-c1',
      title: 'A língua de um país trilíngue',
      emoji: '🇱🇺',
      history:
        'O luxemburguês (Lëtzebuergesch) nasceu dos dialetos franco-moselanos, parentes do alemão, falados no vale do Mosela. Por muito tempo foi visto como um dialeto alemão; em 1984 uma lei o declarou a língua nacional do Luxemburgo, que tem também o francês e o alemão como línguas oficiais. É a língua do dia a dia, da família e cada vez mais das redes e da imprensa, enquanto o francês e o alemão dominam boa parte dos textos escritos. Também se fala em áreas vizinhas da Bélgica, da França e da Alemanha. São algumas centenas de milhares de falantes (as estimativas variam).',
      culture_tip:
        '“Moien” é o cumprimento luxemburguês por excelência e vale a qualquer hora do dia. Para agradecer se diz “Merci”, herança do francês, e para se despedir, “Äddi”. Com desconhecidos e em situações formais se usa “Dir”, com maiúscula, em vez de “du”.',
      grammar_why:
        'O luxemburguês conjuga o verbo como o alemão: “ech heeschen”, “du heeschs”, “hien heescht”. O nome se diz com “heeschen” (chamar-se) e a cidade de origem com “kommen vun” (vir de). E há uma regra de pronúncia que aparece na escrita: o -n do fim da palavra cai antes da maioria das consoantes, por isso se escreve “Ech komme vu São Paulo”, mas “Ech heeschen Ana”.',
      grammar_examples: [
        ['Moien! Ech heeschen Anna.', 'Oi! Eu me chamo Anna.'],
        ['Wéi heeschs du?', 'Como você se chama?'],
        ['Hien ass mäi Frënd.', 'Ele é meu amigo.'],
        ['Gutt, merci. An dir?', 'Bem, obrigado. E você?'],
      ],
      character_guide: [
        ['ë', 'um “e” fraco, como o “e” átono de “pente” dito rápido', 'Mëllech (leite), gëschter (ontem)'],
        ['é / ä', 'é é um “ê” fechado; ä é um “é” aberto', 'Kéis (queijo), Wäin (vinho)'],
        ['ue / ie', 'ditongos parecidos com “ua” e “ia”', 'Nuecht (noite), iessen (comer)'],
        ['ou', 'um ditongo que começa num “â” fraco e termina em “u”', 'Brout (pão), rout (vermelho)'],
        ['w / v', 'w soa “v”; v costuma soar “f”', 'Waasser (água), véier (quatro)'],
        ['ch', 'como no alemão: um chiado suave depois de e, i, ë; raspado depois de a, o, u', 'ech (eu), aacht (oito)'],
      ],
    },
    lessons: [
      {
        id: 'lb-u1-l1',
        title: 'Moien, Merci, Äddi!',
        kind: 'licao',
        words: ['Moien', 'Gudde Moien', 'Gudden Owend', 'Gutt Nuecht', 'Äddi', 'Merci'],
        cloze: [
          { sentence: '___, Anna! Wéi geet et?', answer: 'Moien', options: ['Moien', 'Äddi', 'Merci'], translation: 'Oi, Anna! Como vai?' },
          { sentence: 'Bis muer: ___!', answer: 'Gutt Nuecht', options: ['Gutt Nuecht', 'Gudde Moien', 'Merci'], translation: 'Até amanhã: boa noite!' },
          { sentence: 'Villmools ___!', answer: 'Merci', options: ['Merci', 'Moien', 'Äddi'], translation: 'Muito obrigado!' },
        ],
        voice: {
          bot: 'Moien! Wéi geet et?',
          botTranslation: 'Oi! Como vai?',
          expected: ['Gutt, merci! An dir?', 'gutt', 'merci'],
          hint: 'Responda que vai bem e devolva a pergunta: “Gutt, merci! An dir?”.',
        },
        communityPrompt: 'Escreva três cumprimentos em luxemburguês: um de manhã (“Gudde Moien…”), um à noite (“Gudden Owend…”) e uma despedida (“Äddi”).',
      },
      {
        id: 'lb-u1-l2',
        title: 'Ech, du, hien, si',
        kind: 'licao',
        words: ['ech', 'du', 'hien', 'si', 'heeschen', 'Numm'],
        cloze: [
          { sentence: '___ heeschen Ana.', answer: 'Ech', options: ['Ech', 'Du', 'Hien'], translation: 'Eu me chamo Ana.' },
          { sentence: 'Wéi heeschs ___?', answer: 'du', options: ['du', 'ech', 'mir'], translation: 'Como você se chama?' },
          { sentence: '___ ass mäi Frënd.', answer: 'Hien', options: ['Hien', 'Ech', 'Du'], translation: 'Ele é meu amigo.' },
        ],
        voice: {
          bot: 'Moien! Wéi heeschs du?',
          botTranslation: 'Oi! Como você se chama?',
          expected: ['Ech heeschen Ana. An du?', 'ech heeschen', 'an du'],
          hint: 'Diga o seu nome com “Ech heeschen…” e devolva a pergunta com “An du?”.',
        },
        communityPrompt: 'Apresente-se em luxemburguês: diga o seu nome com “Ech heeschen…” ou “Mäin Numm ass…” e pergunte o nome de alguém com “Wéi heeschs du?”.',
      },
      {
        id: 'lb-u1-l3',
        title: 'Test: Moien!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Moien! Ech heeschen Tom. Wéi heeschs du a vu wou kënns du?',
          botTranslation: 'Oi! Eu me chamo Tom. Como você se chama e de onde você é?',
          expected: ['Moien! Ech heeschen Ana an ech komme vu São Paulo.', 'ech heeschen', 'ech komme vu', 'moien'],
          hint: 'Devolva o cumprimento (“Moien!”), diga o nome com “Ech heeschen…” e a cidade com “Ech komme vu…”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com “Ech heeschen…”, cidade com “Ech komme vu…” e uma despedida.',
      },
    ],
  },
  {
    id: 'lb-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: "D'Famill an d'Haus",
    emoji: '👪',
    card: {
      id: 'lb-c2',
      title: "Den, d' e a regra do n",
      emoji: '🧭',
      history:
        'No Luxemburgo, tradicionalmente, as crianças aprendem a ler primeiro em alemão e depois em francês, enquanto o luxemburguês é a língua do recreio e de casa. A ortografia oficial do luxemburguês foi revista em 2019 pelo Centro da Língua Luxemburguesa (Zenter fir d\'Lëtzebuerger Sprooch), criado em 2018 para cuidar da língua.',
      culture_tip:
        'Os portugueses formam a maior comunidade estrangeira do Luxemburgo, e por isso o português se ouve muito nas ruas, nas lojas e nas escolas do país. Mesmo assim, quem arrisca um “Moien” e um “Merci” em luxemburguês costuma ganhar um sorriso.',
      grammar_why:
        'Como no alemão, os substantivos têm três gêneros. O artigo definido é “den” para o masculino e “d\'” para o feminino e o neutro (e para o plural); o indefinido é “en” (masculino e neutro) e “eng” (feminino). O possessivo segue o mesmo padrão: “mäin” (meu) e “meng” (minha). E a regra do n vale também aqui: “en Hond”, mas “e Brudder”.',
      grammar_examples: [
        ['Meng Famill ass grouss.', 'A minha família é grande.'],
        ['Ech hunn e Brudder an eng Schwëster.', 'Tenho um irmão e uma irmã.'],
        ["D'Mëllech ass wäiss.", 'O leite é branco.'],
        ['Ech weess et net.', 'Eu não sei.'],
      ],
      character_guide: [
        ["den / d'", "masculino / feminino, neutro e plural", "den Hond, d'Kaz, d'Haus"],
        ['regra do n', 'o -n final cai antes de consoante, menos antes de n, d, t, z e h', 'Ech hunn e Brudder; Ech drénke Waasser'],
      ],
    },
    lessons: [
      {
        id: 'lb-u2-l1',
        title: 'Meng Famill',
        kind: 'licao',
        words: ['Famill', 'Mamm', 'Papp', 'Brudder', 'Schwëster', 'hunn'],
        cloze: [
          { sentence: 'Meng ___ heescht Rosa.', answer: 'Mamm', options: ['Mamm', 'Papp', 'Brudder'], translation: 'A minha mãe se chama Rosa.' },
          { sentence: 'Ech ___ e Brudder.', answer: 'hunn', options: ['hunn', 'sinn', 'ginn'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Mäi ___ heescht Tom.', answer: 'Papp', options: ['Papp', 'Schwëster', 'Mamm'], translation: 'O meu pai se chama Tom.' },
        ],
        voice: {
          bot: 'Hues du e Brudder oder eng Schwëster?',
          botTranslation: 'Você tem um irmão ou uma irmã?',
          expected: ['Jo, ech hunn e Brudder an eng Schwëster.', 'ech hunn', 'Brudder', 'Schwëster'],
          hint: 'Responda com “Jo, ech hunn…” ou “Nee, ech hu keng Schwëster”.',
        },
        communityPrompt: 'Descreva a sua família em luxemburguês: se você tem irmão (Brudder) ou irmã (Schwëster) e como se chamam os seus pais (“Meng Mamm heescht…”).',
      },
      {
        id: 'lb-u2-l2',
        title: 'Brout a Kéis',
        kind: 'licao',
        words: ['Haus', 'Waasser', 'Brout', 'Mëllech', 'Kéis', 'iessen'],
        cloze: [
          { sentence: 'Mäin ___ ass kleng.', answer: 'Haus', options: ['Haus', 'Waasser', 'Brout'], translation: 'A minha casa é pequena.' },
          { sentence: 'Ech drénke ___.', answer: 'Waasser', options: ['Waasser', 'Brout', 'Kéis'], translation: 'Eu bebo água.' },
          { sentence: 'Ech iesse Brout mat ___.', answer: 'Kéis', options: ['Kéis', 'Waasser', 'Mëllech'], translation: 'Eu como pão com queijo.' },
        ],
        voice: {
          bot: 'Wat drénks du moies?',
          botTranslation: 'O que você bebe de manhã?',
          expected: ['Ech drénke Kaffi mat Mëllech.', 'ech drénke', 'Kaffi'],
          hint: 'Diga o que bebe com “Ech drénke…” (lembre da regra do n).',
        },
        communityPrompt: 'Escreva o que você come e bebe de manhã: “Ech iesse…” e “Ech drénke…”.',
      },
      {
        id: 'lb-u2-l3',
        title: "Test: d'Famill an d'Haus",
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Wéi ass deng Famill? Hues du e Brudder oder eng Schwëster?',
          botTranslation: 'Como é a sua família? Você tem um irmão ou uma irmã?',
          expected: ['Jo, ech hunn eng Schwëster. Si heescht Maria.', 'ech hunn', 'heescht'],
          hint: 'Diga se tem irmãos (“ech hunn…”) e o nome deles (“hien/si heescht…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e a sua casa, usando “ech hunn”, “heescht” e “ass”.',
      },
    ],
  },
];
