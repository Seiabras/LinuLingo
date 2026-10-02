import type { UnitSeed } from '../types';

/**
 * Trilha do pachto: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_PS: UnitSeed[] = [
  {
    id: 'ps-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سلام! لومړي ګامونه',
    emoji: '👋',
    card: {
      id: 'ps-c1',
      title: 'Uma das duas línguas oficiais do Afeganistão',
      emoji: '🇦🇫',
      history:
        'O pachto é uma língua iraniana oriental, falada por cerca de 50 milhões de pessoas no Afeganistão (onde é uma das duas línguas oficiais, ao lado do dari) e no noroeste do Paquistão. Apesar de o persa (dari/farsi) também ser uma língua iraniana, os dois ficam em ramos bem diferentes dentro da família: o persa é iraniano ocidental, e o pachto é iraniano oriental, parente mais distante do que se imagina — mais perto do antigo sogdiano e do osseto do Cáucaso do que do persa. O pachto se escreve com uma versão ampliada do alfabeto árabo-persa: no século XVI, o poeta e guerreiro Pir Roshan acrescentou letras novas para sons que o árabe e o persa não têm.',
      culture_tip:
        '“سلام” (salaam) é o cumprimento do dia a dia; “سلام علیکم” é a forma mais formal, de origem árabe (“que a paz esteja com você”). “مننه” (obrigado) vem do verbo “aceitar” — agradecer é, ao pé da letra, “aceitar” o que a pessoa fez. Para reforçar, usa-se “ډېره مننه”, “muito obrigado”.',
      grammar_why:
        'O pachto é uma língua SOV: o verbo vem sempre no final da frase. O verbo “ser/estar” muda conforme quem fala: “زه ... یم” (eu sou/estou), “ته ... یې” (tu és/estás), “دی/دا ... دی/ده” (ele é / ela é, com formas diferentes por gênero).',
      grammar_examples: [
        ['سلام! زه لینو یم.', 'Oi! Eu sou o Linu.'],
        ['ته ښه یې؟', 'Você está bem?'],
        ['زه ښه یم، مننه!', 'Eu estou bem, obrigado!'],
        ['زما نوم لینو دی.', 'Meu nome é Linu.'],
      ],
      character_guide: [
        ['ښ', 'som retroflexo, entre “x” e “ch”, só do pachto (não existe no persa/árabe)', 'ښه (bom)'],
        ['ت / ټ', 'o segundo é retroflexo: a língua se dobra pra trás', 'ته (tu) × ټول (todo)'],
        ['د / ډ', 'o segundo também é retroflexo', 'دی (ele) × ډوډۍ (comida)'],
        ['چ', 'como o “tch” de “tchau”', 'چای (chá)'],
      ],
    },
    lessons: [
      {
        id: 'ps-u1-l1',
        title: 'سلام، مننه',
        kind: 'licao',
        words: ['سلام', 'سلام علیکم', 'مننه', 'ډېره مننه', 'مهرباني وکړئ', 'هو'],
        cloze: [
          { sentence: '___! زه لینو یم.', answer: 'سلام', options: ['سلام', 'مننه', 'هو'], translation: 'Oi! Eu sou o Linu.' },
          { sentence: '___! زه ښه یم.', answer: 'سلام علیکم', options: ['سلام علیکم', 'ډېره مننه', 'نه'], translation: 'Olá (formal)! Eu estou bem.' },
          { sentence: 'یو چای، ___.', answer: 'مهرباني وکړئ', options: ['مهرباني وکړئ', 'ډېره مننه', 'هو'], translation: 'Um chá, por favor.' },
        ],
        voice: {
          bot: 'سلام! ته څنګه یې؟',
          botTranslation: 'Oi! Como você está?',
          expected: ['ښه یم، مننه!', 'ښه یم', 'مننه'],
          hint: 'Responda que está bem e agradeça: “ښه یم، مننه!”.',
        },
        communityPrompt: 'Escreva três cumprimentos em pachto: um informal (“سلام”), um formal (“سلام علیکم”) e um agradecimento (“مننه”).',
      },
      {
        id: 'ps-u1-l2',
        title: 'زه، ته، دی، دا',
        kind: 'licao',
        words: ['زه', 'ته', 'دی', 'دا', 'نوم', 'ښه'],
        cloze: [
          { sentence: '___ ښه یم.', answer: 'زه', options: ['زه', 'ته', 'دی'], translation: 'Eu estou bem.' },
          { sentence: '___ زما پلار دی.', answer: 'دی', options: ['دی', 'دا', 'موږ'], translation: 'Ele é meu pai.' },
          { sentence: 'زما ___ لینو دی.', answer: 'نوم', options: ['نوم', 'کور', 'چای'], translation: 'Meu nome é Linu.' },
        ],
        voice: {
          bot: 'ستاسو نوم څه دی؟',
          botTranslation: 'Qual é o seu nome?',
          expected: ['زما نوم ... دی.', 'زما نوم'],
          hint: 'Diga o seu nome com “زما نوم ... دی”.',
        },
        communityPrompt: 'Apresente-se em pachto: diga seu nome com “زما نوم ... دی” e pergunte o nome de alguém com “ستاسو نوم څه دی؟”.',
      },
      {
        id: 'ps-u1-l3',
        title: 'Test: لومړي ګامونه',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'سلام! زما نوم جان دی. ستاسو نوم څه دی؟',
          botTranslation: 'Oi! Meu nome é Jan. Qual é o seu nome?',
          expected: ['سلام! زما نوم ... دی.', 'زما نوم', 'سلام'],
          hint: 'Cumprimente (“سلام”) e diga o seu nome com “زما نوم ... دی”.',
        },
        communityPrompt: 'Escreva uma apresentação completa em pachto: cumprimento, nome com “زما نوم ... دی” e um agradecimento.',
      },
    ],
  },
  {
    id: 'ps-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'کور، مور او چای',
    emoji: '🏠',
    card: {
      id: 'ps-c2',
      title: 'O verbo no fim e a ergatividade dividida',
      emoji: '🧭',
      history:
        'O pachto é famoso entre linguistas por um traço raro: a “ergatividade dividida”. No presente, o verbo concorda normalmente com quem faz a ação (como em português). Mas no passado, com verbos transitivos, o verbo concorda com o OBJETO da frase, e quem fez a ação vai para o chamado caso oblíquo. Esse tipo de troca de concordância também aparece em línguas como o hindi e o curdo, mas não em português nem em persa.',
      culture_tip:
        'Oferecer chá (چای) é parte importante da hospitalidade afegã: dificilmente alguém visita uma casa sem receber pelo menos uma xícara. A palavra “چای” veio do chinês, a mesma raiz do nosso “chá” — viajou de leste a oeste por rotas de comércio muito antes de chegar ao português.',
      grammar_why:
        'O pachto é uma língua SOV: sujeito, depois objeto, e o verbo sempre por último. “زه چای غواړم” é, ao pé da letra, “eu chá quero”. Os adjetivos concordam em gênero com o substantivo: “تور سپی” (cachorro preto, masculino) mas “توره غوا” (vaca preta, feminino).',
      grammar_examples: [
        ['زه چای غواړم.', 'Eu quero chá. (lit. “eu chá quero”)'],
        ['زما مور چای لري.', 'Minha mãe tem chá.'],
        ['زه یو کور لرم.', 'Eu tenho uma casa.'],
        ['دا زما سپی دی.', 'Este é meu cachorro.'],
      ],
      character_guide: [
        ['ږ', 'som retroflexo, como um “j” grosso dito com a língua pra trás', 'غوږ (orelha)'],
        ['ړ', '“r” retroflexo, quase um “l” escuro', 'زړه (coração)'],
        ['ۍ', 'vogal final exclusiva do pachto (não existe no persa)', 'سپوږمۍ (lua)'],
      ],
    },
    lessons: [
      {
        id: 'ps-u2-l1',
        title: 'زما کور او مور',
        kind: 'licao',
        words: ['مور', 'پلار', 'کور', 'اوبه', 'چای', 'شیدې'],
        cloze: [
          { sentence: 'زما ___ ښه ده.', answer: 'مور', options: ['مور', 'پلار', 'کور'], translation: 'Minha mãe está bem.' },
          { sentence: 'دا زما ___ دی.', answer: 'کور', options: ['کور', 'چای', 'مور'], translation: 'Esta é minha casa.' },
          { sentence: 'زه ___ غواړم.', answer: 'چای', options: ['چای', 'شیدې', 'اوبه'], translation: 'Eu quero chá.' },
        ],
        voice: {
          bot: 'ته څه غواړې؟',
          botTranslation: 'O que você quer?',
          expected: ['زه چای غواړم.', 'چای غواړم', 'اوبه غواړم'],
          hint: 'Diga o que quer com “زه ... غواړم”.',
        },
        communityPrompt: 'Escreva o que você quer beber em pachto: “زه چای غواړم.” ou “زه اوبه غواړم.”.',
      },
      {
        id: 'ps-u2-l2',
        title: 'شمېرې او حیوانات',
        kind: 'licao',
        words: ['یو', 'دوه', 'درې', 'سپی', 'کب', 'غوا'],
        cloze: [
          { sentence: 'زه ___ کور لرم.', answer: 'یو', options: ['یو', 'دوه', 'درې'], translation: 'Eu tenho uma casa.' },
          { sentence: 'زه ___ لاسونه لرم.', answer: 'دوه', options: ['دوه', 'یو', 'درې'], translation: 'Eu tenho duas mãos.' },
          { sentence: 'دا زما ___ دی.', answer: 'سپی', options: ['سپی', 'کب', 'غوا'], translation: 'Este é meu cachorro.' },
        ],
        voice: {
          bot: 'دا ستا سپی دی؟',
          botTranslation: 'Este é seu cachorro?',
          expected: ['هو، دا زما سپی دی.', 'هو', 'زما سپی'],
          hint: 'Responda “هو” (sim) ou “نه” (não) e use “زما سپی”.',
        },
        communityPrompt: 'Conte até três em pachto (“یو، دوه، درې”) e diga o nome de um animal que você tem ou gosta.',
      },
      {
        id: 'ps-u2-l3',
        title: 'Test: کور، مور او چای',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ستا کور څنګه دی؟ او ته څه غواړې؟',
          botTranslation: 'Como é a sua casa? E o que você quer?',
          expected: ['زما کور ... دی. زه چای غواړم.', 'زما کور', 'چای غواړم'],
          hint: 'Descreva a sua casa com “زما کور ... دی” e diga o que quer com “زه ... غواړم”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua casa e a sua família em pachto, usando “زما ...” e “دی/ده”.',
      },
    ],
  },
];
