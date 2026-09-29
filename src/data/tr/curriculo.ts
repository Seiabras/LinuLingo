import type { UnitSeed } from '../types';

/**
 * Trilha do turco: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 */
export const UNITS_TR: UnitSeed[] = [
  {
    id: 'tr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Merhaba! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'tr-c1',
      title: 'Uma língua de sufixos e harmonia vocálica',
      emoji: '🗺️',
      history:
        'O turco é uma língua túrquica, falada por mais de 80 milhões de pessoas, principal na Turquia e em comunidades no Chipre, nos Bálcãs e na diáspora europeia. Em 1928, Mustafa Kemal Atatürk trocou a escrita árabe-persa, usada por séculos, pelo alfabeto latino atual — uma das reformas mais rápidas da história de uma língua nacional. O turco é aglutinante: em vez de preposições e conjugações separadas, ele gruda sufixo atrás de sufixo numa mesma palavra: «evlerimizden» (das nossas casas) é «ev» (casa) + «ler» (plural) + «imiz» (nosso) + «den» (de/desde).',
      culture_tip:
        '«Merhaba» é o cumprimento mais comum a qualquer hora; «günaydın» vale só de manhã. «Teşekkür ederim» é o obrigado mais formal, e «teşekkürler» o mais casual. A hospitalidade é levada muito a sério na cultura turca: oferecer chá (çay) a um visitante é quase automático, e recusar pode soar estranho.',
      grammar_why:
        'A harmonia vocálica é a regra mais importante do turco: as vogais de um sufixo mudam para "combinar" com a última vogal da palavra. Por isso «-im» (meu) vira «-ım», «-um» ou «-üm» dependendo da palavra: «adım» (meu nome), «evim» (minha casa). O turco também não tem gênero gramatical nenhum — «o» serve para «ele», «ela» e «isso».',
      grammar_examples: [
        ['Ben Brezilyalıyım.', 'Eu sou brasileiro(a). (Brezilya + lı + yım: "de-Brasil-eu-sou")'],
        ['O İstanbul\'dan.', 'Ele/ela é de Istambul.'],
        ['Adın ne?', 'Qual é o seu nome?'],
      ],
      character_guide: [
        ['ı (sem ponto)', 'um som só do turco, "u" fechado dito com a boca de "i"', 'kız (menina) [kɯz]'],
        ['i (com ponto)', 'i normal, como no português', 'iyi (bom)'],
        ['ç', 'como o "tch"', 'çay (chá)'],
        ['ş', 'como o "ch" do português', 'şehir (cidade)'],
        ['c', 'como o "dj"', 'cami (mesquita)'],
        ['ğ (yumuşak g)', 'quase muda: alonga a vogal anterior', 'değil [de:il] (não é)'],
        ['ö, ü', 'como no alemão/francês: lábios arredondados dizendo "e"/"i"', 'öğretmen (professor), üç (três)'],
      ],
    },
    lessons: [
      {
        id: 'tr-u1-l1',
        title: 'Merhaba, teşekkürler, hoşça kal!',
        kind: 'licao',
        words: ['merhaba', 'günaydın', 'iyi günler', 'iyi geceler', 'hoşça kal', 'teşekkür ederim'],
        cloze: [
          { sentence: '___, Ayşe! Nasılsın?', answer: 'Merhaba', options: ['Merhaba', 'Hoşça kal', 'Teşekkür ederim'], translation: 'Oi, Ayşe! Como você está?' },
          { sentence: 'Artık gece: ___!', answer: 'iyi geceler', options: ['iyi geceler', 'günaydın', 'iyi günler'], translation: 'Já é noite: boa noite!' },
          { sentence: 'Yardımın için ___!', answer: 'teşekkür ederim', options: ['teşekkür ederim', 'hoşça kal', 'merhaba'], translation: 'Obrigado pela sua ajuda!' },
        ],
        voice: {
          bot: 'Merhaba! Nasılsın?',
          botTranslation: 'Oi! Como você está?',
          expected: ['İyiyim, teşekkürler! Ya sen?', 'iyiyim', 'teşekkürler'],
          hint: 'Responda que está bem com «iyiyim» e devolva a pergunta: «Ya sen?».',
        },
        communityPrompt: 'Escreva três cumprimentos em turco: um de manhã («Günaydın…»), um à noite («İyi geceler…») e uma despedida com «Hoşça kal».',
      },
      {
        id: 'tr-u1-l2',
        title: 'Ben, sen, o',
        kind: 'licao',
        words: ['ben', 'sen', 'o', 'olmak', 'isim', 'nerede'],
        cloze: [
          { sentence: '___ Brezilyalıyım.', answer: 'Ben', options: ['Ben', 'Sen', 'O'], translation: 'Eu sou brasileiro(a).' },
          { sentence: 'Senin ___ ne?', answer: 'isim', options: ['isim', 'nerede', 'ben'], translation: 'Qual é o seu nome?' },
          { sentence: '___ İstanbul\'dan.', answer: 'O', options: ['O', 'Ben', 'Sen'], translation: 'Ele/ela é de Istambul.' },
        ],
        voice: {
          bot: 'Merhaba! Adın ne?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Adım Ana. Ya senin?', 'adım', 'ya senin'],
          hint: 'Diga o seu nome com «Adım…» e devolva a pergunta com «Ya senin?».',
        },
        communityPrompt: 'Apresente-se em turco: diga o seu nome com «Adım…» e pergunte o nome de outra pessoa com «Adın ne?».',
      },
      {
        id: 'tr-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Merhaba! Adım Mehmet. Senin adın ne, ve nerelisin?',
          botTranslation: 'Oi! Meu nome é Mehmet. Qual é o seu nome, e de onde você é?',
          expected: ['Merhaba! Adım Lucia, ve Brezilyalıyım. Tanıştığımıza memnun oldum!', 'adım', 'brezilyalıyım', 'merhaba'],
          hint: 'Devolva o cumprimento («Merhaba!»), diga o seu nome com «Adım…», a origem com «…lıyım» e feche com «Tanıştığımıza memnun oldum!».',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento, nome com «Adım…», origem e uma despedida.',
      },
    ],
  },
  {
    id: 'tr-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Aile ve ev',
    emoji: '👪',
    card: {
      id: 'tr-c2',
      title: 'Var e yok: um jeito só de "ter"',
      emoji: '🧭',
      history:
        'O turco não tem um verbo separado para «ter»: em vez disso, usa «var» (existe/há) ou «yok» (não existe/não há) depois da coisa possuída, com um sufixo possessivo. «İki kardeşim var» é, literalmente, «dois irmãos-meus existe» — bem diferente da estrutura sujeito-verbo-objeto do português.',
      culture_tip:
        'Como em muitas culturas do Oriente Médio e Ásia Central, a hospitalidade e o respeito aos mais velhos são centrais na vida familiar turca; é comum várias gerações se visitarem com frequência, e os avós têm um papel ativo na criação dos netos.',
      grammar_why:
        'O sufixo possessivo muda a vogal por harmonia vocálica, mas a lógica é sempre a mesma: substantivo + sufixo de posse + (var/yok). «Kardeşim var» é «eu tenho irmão(s)»; «Kardeşim yok» é «eu não tenho irmãos».',
      grammar_examples: [
        ['Ailem çok kalabalık.', 'A minha família é muito grande (numerosa).'],
        ['İki kardeşim var.', 'Eu tenho dois irmãos.'],
        ['Bu kahveyi çok seviyorum.', 'Eu gosto muito deste café.'],
      ],
      character_guide: [
        ['-im / -ım / -üm / -um', 'sufixo possessivo "meu", muda a vogal por harmonia', 'evim (minha casa), kardeşim (meu irmão)'],
      ],
    },
    lessons: [
      {
        id: 'tr-u2-l1',
        title: 'Ailem',
        kind: 'licao',
        words: ['aile', 'anne', 'baba', 'erkek kardeş', 'kız kardeş', 'sahip olmak'],
        cloze: [
          { sentence: '___ İzmir\'den.', answer: 'Annem', options: ['Annem', 'Babam', 'Ailem'], translation: 'A minha mãe é de Esmirna.' },
          { sentence: 'Bir erkek kardeşim ve bir kız kardeşim ___.', answer: 'var', options: ['var', 'yok', 'olmak'], translation: 'Eu tenho um irmão e uma irmã.' },
          { sentence: '___ adı Mehmet.', answer: 'Erkek kardeşimin', options: ['Erkek kardeşimin', 'Kız kardeşimin', 'Babamın'], translation: 'O meu irmão se chama Mehmet.' },
        ],
        voice: {
          bot: 'Kardeşin var mı?',
          botTranslation: 'Você tem irmãos?',
          expected: ['Evet, bir erkek kardeşim ve bir kız kardeşim var.', 'var', 'erkek kardeş', 'kız kardeş'],
          hint: 'Responda com «…var» para dizer que tem, ou «…yok» se não tiver irmãos.',
        },
        communityPrompt: 'Descreva a sua família em turco: quantos irmãos você tem, e como se chamam os seus pais.',
      },
      {
        id: 'tr-u2-l2',
        title: 'Evde',
        kind: 'licao',
        words: ['ev', 'su', 'ekmek', 'kahve', 'sevmek', 'iyi'],
        cloze: [
          { sentence: '___ küçük ama çok güzel.', answer: 'Evim', options: ['Evim', 'Ailem', 'Suyum'], translation: 'A minha casa é pequena mas muito bonita.' },
          { sentence: 'Bir bardak ___, lütfen.', answer: 'su', options: ['su', 'ekmek', 'kahve'], translation: 'Um copo de água, por favor.' },
          { sentence: 'Bu kahveyi çok ___.', answer: 'seviyorum', options: ['seviyorum', 'biliyorum', 'istiyorum'], translation: 'Eu gosto muito deste café.' },
        ],
        voice: {
          bot: 'Türk kahvesini sever misin?',
          botTranslation: 'Você gosta do café turco?',
          expected: ['Evet, çok severim, çok iyi!', 'severim', 'çok iyi'],
          hint: 'Use «severim» (eu gosto) e o adjetivo «iyi» para dizer que é bom.',
        },
        communityPrompt: 'Descreva a sua casa em duas ou três frases: se é grande ou pequena, e o que você gosta de comer ou beber nela.',
      },
      {
        id: 'tr-u2-l3',
        title: 'Prova: aile ve ev',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bana ailenden bahset: kaç kişisiniz, ve eviniz nasıl?',
          botTranslation: 'Me conte sobre a sua família: quantos são, e como é a sua casa?',
          expected: ['Ailemiz dört kişi: annem, babam, erkek kardeşim ve ben. Evimiz küçük ama çok güzel.', 'ailemiz', 'evimiz'],
          hint: 'Diga quantas pessoas há na família e descreva a casa com «evimiz…».',
        },
        communityPrompt: 'Escreva um parágrafo curto apresentando a sua família e a sua casa, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
