import type { UnitSeed } from '../types';

/**
 * Trilha do checheno: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (todas consultadas em
 * 08/10/2026): o curso livre do Wikibooks ("Chechen/Lesson 1" e "Chechen/Lesson 2" — as únicas duas
 * lições já escritas), a Wikipédia em inglês ("Chechen language") e o Wikibooks ("Chechen/Alphabet").
 */
export const UNITS_CE: UnitSeed[] = [
  {
    id: 'ce-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Салам! Primeiro encontro',
    emoji: '👋',
    card: {
      id: 'ce-c1',
      title: 'Nakh-daguestanês, irmão do inguche',
      emoji: '🏔️',
      history:
        'O checheno (Нохчийн мотт) é falado sobretudo na República da Chechênia, na Rússia, por cerca de 1,8 milhão de pessoas, com comunidades na diáspora. Pertence à família nakh-daguestanesa (ou caucasiana do norte), no ramo vainakh — o mesmo do inguche, sua língua mais próxima. É oficial na Chechênia, com imprensa, literatura e ensino nas escolas locais. Escrito hoje no alfabeto cirílico, adotado em 1938; antes disso, usou o alfabeto latino (de 1925 a 1938) e, mais atrás ainda, o árabe.',
      culture_tip:
        '“Баркалла” (obrigado) veio do árabe e está hoje totalmente incorporada ao checheno do dia a dia — um lembrete de que o islã chegou à região há séculos e deixou marcas no vocabulário, ao lado de palavras nativas como “Дика ду” (está bem). O checheno também distingui “хьо” (tu, informal) de “шу” (vocês, que também serve como “você” formal no singular) — na dúvida sobre o grau de formalidade, o mais seguro é usar “шу”.',
      grammar_why:
        'O checheno é SOV (sujeito-objeto-verbo): o verbo, inclusive o verbo “ser” (ву/ю/ду/бу), sempre fecha a frase. Um detalhe que engana quem fala português: essa forma de “ser” não combina com o GÊNERO de quem fala, e sim com a CLASSE GRAMATICAL do substantivo que vem depois. Em “Со кIант ву” (eu sou um rapaz), o “ву” concorda com “кIант” (classe 1); se o Linu dissesse “Со йоI ю” (eu sou uma moça), usaria “ю” porque “йоI” é da classe 2 — a concordância segue o substantivo da frase, não quem fala.',
      grammar_examples: [
        ['Со кIант ву.', 'Eu sou um rapaz.'],
        ['Иза йоI ю?', 'Ela é uma moça?'],
        ['Хьо зуда ю.', 'Você é uma mulher.'],
        ['Салам! Дика ду, баркалла.', 'Oi! Estou bem, obrigado.'],
      ],
      character_guide: [
        ['Ӏ (палочка)', 'letra única das línguas caucasianas: sozinha, é uma parada glotal; depois de б/п/т/к/ц/ч, torna o som “ejetivo” (uma explosão de ar extra)', 'йоӀ (йоI) — “moça, filha”'],
        ['кӏ, пӏ, тӏ, цӏ, чӏ', 'consoantes ejetivas (com a палочка): soam “presas”, sem o sopro de ar que о português dá a k/p/t', 'кӏант (кIант) — “rapaz, filho”'],
        ['кх', 'um “k” dito bem no fundo da garganta (uvular), parecido com o qāf do árabe', 'кхо (кхоъ) — “três”'],
        ['хь', 'mais pesado que o х comum, parecido com o ح do árabe', 'хьо — “tu, você”'],
      ],
    },
    lessons: [
      {
        id: 'ce-u1-l1',
        title: 'Салам, баркалла',
        kind: 'licao',
        words: ['салам', 'баркалла', 'массарна а', 'хIаъ', 'хIан-хIа', 'дика ду'],
        cloze: [
          { sentence: '___!', answer: 'Салам', options: ['Салам', 'ХIаъ', 'ХIан-хIа'], translation: 'Oi!' },
          { sentence: 'Дика ду, ___!', answer: 'баркалла', options: ['баркалла', 'хIаъ', 'хIан-хIа'], translation: 'Estou bem, obrigado!' },
          { sentence: '— Баркалла! — ___!', answer: 'Массарна а', options: ['Массарна а', 'ХIан-хIа', 'Дика ду'], translation: '— Obrigado! — De nada!' },
        ],
        voice: {
          bot: 'Салам! Муха ду гIуллакхаш?',
          botTranslation: 'Oi! Como você está? (lit. “como estão as novidades”)',
          expected: ['Салам! Дика ду, баркалла.', 'Дика ду, баркалла.', 'Салам'],
          hint: 'Devolva a saudação e diga que está bem, com “Дика ду, баркалла”.',
        },
        communityPrompt: 'Escreva uma saudação (Салам), um agradecimento (Баркалла) e a resposta “de nada” (Массарна а).',
      },
      {
        id: 'ce-u1-l2',
        title: 'Со, хьо, иза',
        kind: 'licao',
        words: ['со', 'хьо', 'иза', 'кIант', 'йоI', 'зуда'],
        cloze: [
          { sentence: 'Со кIант ___.', answer: 'ву', options: ['ву', 'ю', 'ду'], translation: 'Eu sou um rapaz.' },
          { sentence: 'Хьо зуда ___.', answer: 'ю', options: ['ю', 'ву', 'бу'], translation: 'Você é uma mulher.' },
          { sentence: 'Иза ___ ю?', answer: 'йоI', options: ['йоI', 'кIант', 'стаг'], translation: 'Ela é uma moça?' },
        ],
        voice: {
          bot: 'Хьо кIант ву я йоI ю?',
          botTranslation: 'Você é um rapaz ou uma moça?',
          expected: ['Со кIант ву.', 'Со йоI ю.', 'Со кIант ву'],
          hint: 'Responda “Со кIант ву” (rapaz) ou “Со йоI ю” (moça), usando “я” (ou) se quiser repetir a pergunta.',
        },
        communityPrompt: 'Apresente-se dizendo se você é “кIант” ou “йоI”, com “Со … ву/ю”.',
      },
      {
        id: 'ce-u1-l3',
        title: 'Prova: Салам, со',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Салам! Хьо мила ву?',
          botTranslation: 'Oi! Quem é você?',
          expected: ['Салам! Со Лину ву.', 'Со Лину ву.'],
          hint: 'Devolva a saudação e diga quem você é, com “Со … ву”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (Салам), quem você é (Со … ву/ю) e um agradecimento (Баркалла).',
      },
    ],
  },
  {
    id: 'ce-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Сан доьзал: a família',
    emoji: '👨‍👩‍👧',
    card: {
      id: 'ce-c2',
      title: 'Oito casos, e um jeito próprio de “saber”',
      emoji: '📐',
      history:
        'O checheno tem oito casos gramaticais (o curso do Wikibooks ensina só o nominativo e o genitivo, de início). O genitivo (posse, “de”/“seu”) troca a terminação da palavra: soma-se “-н” depois de consoante, ou “-ан”/“-ин” depois de vogal — “гIалан нах” é “o povo da cidade” (гIала, “cidade”, + -н). Já os pronomes têm uma forma própria de genitivo, sem sufixo regular: “сан” (meu), “хьан” (seu, de você), “цуьнан” (dele/dela), “тхан” (nosso, excl.), “вайн” (nosso, incl.), “шун” (de vocês), “церан” (deles/delas) — é assim que se diz “meu irmão”: “сан ваша”.',
      culture_tip:
        'Famílias estendidas aparecem já no vocabulário básico: “дада” é o avô paterno, “ненан да” o avô materno (lit. “pai da mãe”), “де нана” a avó paterna e “ненан нана” a avó materna (lit. “mãe da mãe”) — quatro palavras diferentes, uma para cada lado da família, em vez de um “avô”/“avó” só.',
      grammar_why:
        'Uma armadilha para quem fala português: o verbo “saber” (хаа) não usa o sujeito no caso nominativo (со, “eu”), e sim no caso dativo — “суна” (lit. algo como “para mim”), não “со”. “Суна ца хаа” é “eu não sei”, palavra por palavra mais perto de “para mim não é sabido” do que de “eu não sei”. “Entender” (кхета), ao contrário, usa o sujeito comum: “Со кхета” (eu entendo).',
      grammar_examples: [
        ['Сан ваша Москвахь Iаш ву.', 'Meu irmão vive em Moscou.'],
        ['Суна ца хаа.', 'Eu não sei.'],
        ['Со кхета.', 'Eu entendo.'],
        ['Иза сан йиша ю.', 'Ela é minha irmã.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ce-u2-l1',
        title: 'Да, нана, ваша, йиша',
        kind: 'licao',
        words: ['да', 'нана', 'ваша', 'йиша', 'доьзал', 'стаг'],
        cloze: [
          { sentence: 'Сан ___ Москвахь Iаш ву.', answer: 'ваша', options: ['ваша', 'йиша', 'да'], translation: 'Meu irmão vive em Moscou.' },
          { sentence: 'Иза сан ___ ю.', answer: 'йиша', options: ['йиша', 'ваша', 'нана'], translation: 'Ela é minha irmã.' },
          { sentence: 'Сан ___ дика ду.', answer: 'доьзал', options: ['доьзал', 'стаг', 'да'], translation: 'Minha família está bem.' },
        ],
        voice: {
          bot: 'Хьан ваша мичахь Iаш ву?',
          botTranslation: 'Onde vive seu irmão?',
          expected: ['Сан ваша Москвахь Iаш ву.', 'Сан ваша Соьлжа-гIалахь Iаш ву.'],
          hint: 'Diga onde seu irmão mora, com “Сан ваша … Iаш ву”.',
        },
        communityPrompt: 'Apresente sua família: pai (да), mãe (нана), irmão (ваша) ou irmã (йиша).',
      },
      {
        id: 'ce-u2-l2',
        title: 'Ца кхета, ца хаа',
        kind: 'licao',
        words: ['ца', 'кхета', 'хаа', 'мила', 'Iаш', 'бехк ма биллахь'],
        cloze: [
          { sentence: 'Со ___ кхета.', answer: 'ца', options: ['ца', 'мила', 'Iаш'], translation: 'Eu não entendo.' },
          { sentence: 'Суна ца ___.', answer: 'хаа', options: ['хаа', 'кхета', 'Iаш'], translation: 'Eu não sei.' },
          { sentence: 'Иза ___ ву?', answer: 'мила', options: ['мила', 'ца', 'Iаш'], translation: 'Quem é ele?' },
        ],
        voice: {
          bot: 'Иза мила ву?',
          botTranslation: 'Quem é ele?',
          expected: ['Суна ца хаа.', 'Суна ца хаа'],
          hint: 'Diga que não sabe, com “Суна ца хаа” — o “sabedor” fica no caso dativo (“суна”), não no nominativo (“со”).',
        },
        communityPrompt: 'Escreva com “ца” antes do verbo: algo que você não entende (ца кхета) ou não sabe (ца хаа).',
      },
      {
        id: 'ce-u2-l3',
        title: 'Prova: família e “eu não sei”',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Хьо мичахь Iаш ву?',
          botTranslation: 'Onde você vive?',
          expected: ['Со Соьлжа-гIалахь Iаш ву.', 'Со Соьлжа-гIалахь Iаш ву'],
          hint: 'Diga onde você vive, com “Со … Iаш ву”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e onde cada um mora, usando “Iаш ву/ю”.',
      },
    ],
  },
];
