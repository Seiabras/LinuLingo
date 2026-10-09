import type { UnitSeed } from '../types';

/**
 * Trilha do pachto: as duas unidades do nível A1 e, a partir de ps-u3, as duas do nível A2
 * (acrescentadas em 09/10/2026 — ver `incomplete` em index.ts). Da B1 ao C2 chega depois.
 * Fontes das unidades A2: Wikipédia (inglês) “Pashto grammar” (plural, posse, posposições,
 * futuro) e “Pashtunwali” (melmastia, jirga); Wikivoyage (inglês) “Pashto phrasebook” (números,
 * tempo, compras, direções) — ver vocabulario.ts e gramatica.ts para os links exatos.
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
  {
    id: 'ps-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'زما کورنۍ',
    emoji: '👨‍👩‍👧‍👦',
    card: {
      id: 'ps-c3',
      title: 'Parentesco e hospitalidade: melmastia e a família pachtum',
      emoji: '👪',
      history:
        'A sociedade pachtum tradicionalmente se organiza em grupos tribais e famílias extensas, regidos por um código de honra chamado Pachtunwali (پښتونوالی) — “o jeito dos pachtuns”, com raízes pré-islâmicas transmitidas entre gerações. Um dos princípios centrais é a “melmastia” (مېلمستيا), a hospitalidade: receber bem qualquer visitante, de qualquer etnia, fé, nacionalidade ou condição, sem esperar nada em troca — a mesma lógica por trás do costume de sempre oferecer chá a quem chega, visto na unidade anterior. Disputas tradicionalmente se resolvem numa “jirga” (جرګه), uma assembleia tribal de homens adultos.',
      culture_tip:
        'A palavra para “irmão”, “ورور” (wror), e para “irmã”, “خور” (xor), têm plurais irregulares — “وروڼه” e “خويندې” — herdados de uma forma antiga da língua, meio fora do padrão regular que o resto do pachto segue hoje.',
      grammar_why:
        'Os possessivos independentes (“زما”, meu; “ستا”, teu; “زموږ”, nosso; “ستاسو”, seu/vosso) já apareceram desde a unidade 1. Esta unidade acrescenta o plural dos substantivos — regular (“ونه”/“ونو” no masculino, “ې”/“و” no feminino) e irregular, no caso de “مور” (mãe) e “ورور” (irmão).',
      grammar_examples: [
        ['زما ورور لوی دی.', 'Meu irmão é grande/mais velho.'],
        ['زما خور ښه ده.', 'Minha irmã está bem.'],
        ['زما مېندې...', '(plural irregular de “مور”, mãe — mostra o padrão, mesmo sem ser uma frase comum do dia a dia)'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ps-u3-l1',
        title: 'ورور، خور، زوی، لور',
        kind: 'licao',
        words: ['ورور', 'خور', 'زوی', 'لور', 'کال', 'نن'],
        cloze: [
          { sentence: 'زما ___ لوی دی.', answer: 'ورور', options: ['ورور', 'خور', 'زوی'], translation: 'Meu irmão é grande/mais velho.' },
          { sentence: 'زما ___ ښه ده.', answer: 'خور', options: ['خور', 'ورور', 'لور'], translation: 'Minha irmã está bem.' },
          { sentence: 'دا زما ___ ده.', answer: 'لور', options: ['لور', 'زوی', 'کال'], translation: 'Esta é minha filha.' },
        ],
        voice: {
          bot: 'ته ورور او خور لرې؟',
          botTranslation: 'Você tem irmão e irmã?',
          expected: ['هو، زه ورور او خور لرم.', 'زما ورور', 'زما خور'],
          hint: 'Responda com “زما ورور …” e/ou “زما خور …”.',
        },
        communityPrompt: 'Apresente sua família em pachto: diga se você tem “ورور” (irmão) ou “خور” (irmã), usando “زما …”.',
      },
      {
        id: 'ps-u3-l2',
        title: 'سهار، غرمه، ماسپښين، ماښام',
        kind: 'licao',
        words: ['سهار', 'غرمه', 'ماسپښين', 'ماښام', 'پرون', 'سبا'],
        cloze: [
          { sentence: 'زه ___ راځم.', answer: 'سهار', options: ['سهار', 'ماښام', 'سبا'], translation: 'Eu venho de manhã.' },
          { sentence: 'د ___ دوولس بجې.', answer: 'غرمه', options: ['غرمه', 'سهار', 'ماښام'], translation: 'Meio-dia, doze horas.' },
          { sentence: 'زه ___ راځم.', answer: 'سبا', options: ['سبا', 'پرون', 'غرمه'], translation: 'Eu virei amanhã.' },
        ],
        voice: {
          bot: 'ته کله راځې، سهار که ماښام؟',
          botTranslation: 'Quando você vem, de manhã ou à tarde/noite?',
          expected: ['زه سهار راځم.', 'زه ماښام راځم.', 'سهار'],
          hint: 'Responda com “زه … راځم” e um período do dia (“سهار”, “غرمه”, “ماسپښين” ou “ماښام”).',
        },
        communityPrompt: 'Escreva três frases dizendo quando você faz algo, usando “سهار”, “غرمه”, “ماسپښين” ou “ماښام”.',
      },
      {
        id: 'ps-u3-l3',
        title: 'Test: زما کورنۍ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ته ورور یا خور لرې؟',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['زه یو ورور او یوه خور لرم.', 'زما ورور', 'زما خور'],
          hint: 'Descreva sua família usando “زما ورور …” e/ou “زما خور …”.',
        },
        communityPrompt: 'Escreva cinco frases sobre a sua família e o seu dia, usando “زما …” e um período do dia (“سهار”, “ماښام” …).',
      },
    ],
  },
  {
    id: 'ps-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'بازار او لار',
    emoji: '🛍️',
    card: {
      id: 'ps-c4',
      title: 'Posposições: a parte da frase que vem depois',
      emoji: '📍',
      history:
        'No bazar afegão (بازار), negociar preço (دا ګران دی؟ — isso é caro?) é parte comum da compra, diferente do preço fixo mais comum no comércio brasileiro. Os números usados para preços seguem o mesmo padrão que os números 1 a 10 já aprendidos: “یوولس” (onze), “شل” (vinte), “دېرش” (trinta) e “سل” (cem) continuam a mesma lógica de contagem.',
      culture_tip:
        'Para pedir informação na rua, “لار” (caminho, estrada) é a palavra-chave: “لار چېرې ده؟” pergunta onde fica o caminho, e “کیڼ لاس ته” / “ښي لاس ته” apontam esquerda e direita.',
      grammar_why:
        'O pachto usa posposições — palavras que vêm DEPOIS do substantivo, ao contrário das preposições do português. “په کور کې” (dentro da casa) e “له ورور سره” (com o irmão) são circunposições: uma parte antes, outra depois. O futuro também aparece nesta unidade: “به” antes do verbo no presente transforma a frase em futuro, sem mudar a forma do verbo.',
      grammar_examples: [
        ['زه په کور کې یم.', 'Eu estou dentro da casa.'],
        ['زه له ورور سره یم.', 'Eu estou com [meu] irmão.'],
        ['زه به سبا راځم.', 'Eu virei amanhã.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ps-u4-l1',
        title: 'ګران، ارزان، پیسې',
        kind: 'licao',
        words: ['ګران', 'ارزان', 'پیسې', 'کیڼ', 'ښي', 'لار'],
        cloze: [
          { sentence: 'دا ___ دی.', answer: 'ګران', options: ['ګران', 'ارزان', 'لار'], translation: 'Isso é caro.' },
          { sentence: 'زه ___ غواړم.', answer: 'پیسې', options: ['پیسې', 'ګران', 'ارزان'], translation: 'Eu quero dinheiro.' },
          { sentence: 'دا زما ___ لاس دی.', answer: 'کیڼ', options: ['کیڼ', 'ښي', 'لار'], translation: 'Esta é minha mão esquerda.' },
        ],
        voice: {
          bot: 'دا په څو دی؟ ګران که ارزان؟',
          botTranslation: 'Quanto custa isso? Caro ou barato?',
          expected: ['دا ارزان دی.', 'دا ګران دی.', 'ارزان'],
          hint: 'Responda com “دا ګران دی.” ou “دا ارزان دی.”.',
        },
        communityPrompt: 'Escreva um pequeno diálogo de compra: pergunte o preço e responda se é “ګران” (caro) ou “ارزان” (barato).',
      },
      {
        id: 'ps-u4-l2',
        title: 'کې، سره، تر، پورې',
        kind: 'licao',
        words: ['کې', 'سره', 'تر', 'پورې', 'پوهېدل', 'دود'],
        cloze: [
          { sentence: 'زه په کور ___ یم.', answer: 'کې', options: ['کې', 'سره', 'پورې'], translation: 'Eu estou dentro da casa.' },
          { sentence: 'زه له ورور ___ یم.', answer: 'سره', options: ['سره', 'کې', 'تر'], translation: 'Eu estou com [meu] irmão.' },
          { sentence: 'دا زموږ ___ ده.', answer: 'دود', options: ['دود', 'کې', 'سره'], translation: 'Isso é nosso costume.' },
        ],
        voice: {
          bot: 'ته پوه شوې که نه؟',
          botTranslation: 'Você entendeu ou não?',
          expected: ['زه پوه نه شوم.', 'هو، پوه شوم.', 'پوه نه شوم'],
          hint: 'Responda “زه پوه نه شوم.” (eu não entendo) ou confirme que entendeu.',
        },
        communityPrompt: 'Escreva três frases usando “کې” (em) ou “سره” (com), como “زه په کور کې یم.” ou “زه له ورور سره یم.”.',
      },
      {
        id: 'ps-u4-l3',
        title: 'Test: بازار او لار',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'لار چېرې ده؟ کیڼ که ښي؟',
          botTranslation: 'Onde fica o caminho? Esquerda ou direita?',
          expected: ['کیڼ لاس ته.', 'ښي لاس ته.', 'کیڼ'],
          hint: 'Responda com “کیڼ لاس ته” (à esquerda) ou “ښي لاس ته” (à direita).',
        },
        communityPrompt: 'Escreva cinco frases sobre uma ida ao bazar, usando pelo menos um preço (“ګران”/“ارزان”), uma direção (“کیڼ”/“ښي”) e o futuro com “به”.',
      },
    ],
  },
];
