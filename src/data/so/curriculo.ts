import type { UnitSeed } from '../types';

/**
 * Trilha do somali (Af Soomaali): por enquanto só as duas unidades do nível A1 (pacote incompleto —
 * ver `incomplete` em index.ts). Fontes de cada palavra e de cada padrão de frase no cabeçalho de
 * vocabulario.ts. Frases fora de citação direta só combinam palavras atestadas com padrões também
 * atestados: «waa» + substantivo («magacay waa ___»), substantivo + adjetivo, «iyo» (e), «hal» +
 * substantivo e o presente habitual com os clíticos «waan/waad/wuu/way» (tabela de «keen» na
 * Wikipédia em inglês, tabela de «cab» no Wiktionary).
 */
export const UNITS_SO: UnitSeed[] = [
  {
    id: 'so-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Subax wanaagsan!',
    emoji: '👋',
    card: {
      id: 'so-c1',
      title: 'Af Soomaali: a língua do Chifre da África',
      emoji: '🇸🇴',
      // en.wikipedia.org/wiki/Somali_language: ~24 milhões de falantes (Ethnologue), oficial na Somália
      // (com o árabe), na Somalilândia e na Etiópia, nacional no Djibuti, minoritária reconhecida no
      // Quênia; alfabeto latino oficial adotado em 1972, língua oficial da administração desde janeiro de
      // 1973; Academia Regional da Língua Somali criada em 2013 no Djibuti.
      history:
        'O somali é uma língua cuchítica, do grande tronco afro-asiático (o mesmo do árabe e do amárico), falada por cerca de 24 milhões de pessoas na Somália, no Djibuti, no leste da Etiópia e no nordeste do Quênia, além de uma grande diáspora. Por muito tempo foi sobretudo uma língua oral; em 1972 o governo somali adotou um alfabeto latino oficial e, em janeiro de 1973, o somali virou a língua da administração e da escola. Desde 2013, uma academia regional criada pela Somália, pelo Djibuti e pela Etiópia cuida da língua.',
      // Wikivoyage: «subax wanaagsan», «habeen wanaagsan», «sidee tahay?», «mahadsanid»; Wiktionary:
      // o verbete «wanaagsan» (bom) lista «subax/galab/fiid/habeen wanaagsan» como derivados.
      culture_tip:
        'Os cumprimentos mais simples do somali seguem a hora do dia, com a mesma palavra “wanaagsan” (bom): “subax wanaagsan” (bom dia) e “habeen wanaagsan” (boa noite). Depois vem a pergunta “Sidee tahay?” (como vai?), e a resposta “Waan wanaagsanahay, mahadsanid” (estou bem, obrigado).',
      grammar_why:
        'No somali, a frase afirmativa costuma levar uma partícula que diz o que é a informação nova. A mais comum é “waa”, que vem logo antes do verbo e se junta ao pronome: “waan” (eu), “waad” (você), “wuu” (ele), “way” (ela, eles). Por isso “estou bem” é “Waan wanaagsanahay”. Diante de um substantivo, o próprio “waa” faz o papel do “é”: “Magacay waa Linu” (meu nome é Linu).',
      grammar_examples: [
        ['Subax wanaagsan! Sidee tahay?', 'Bom dia! Como vai?'],
        ['Waan wanaagsanahay, mahadsanid.', 'Estou bem, obrigado.'],
        ['Magacaa?', 'Qual é o seu nome?'],
        ['Magacay waa Linu.', 'Meu nome é Linu.'],
      ],
      // sons: en.wikipedia.org/wiki/Somali_language (tabela de consoantes: c = /ʕ/, x = /ħ/, q = /q/,
      // dh = /ɖ/, kh = /x/, ' = /ʔ/) e a guia de pronúncia da Wikivoyage (vogal dobrada = longa).
      character_guide: [
        ['c', 'fricativa faríngea sonora — um som apertado no fundo da garganta, sem equivalente em português', 'Cab (beba!)'],
        ['x', 'fricativa faríngea surda — um “h” forte e soprado no fundo da garganta', 'Xiddig (estrela)'],
        ['q', 'oclusiva uvular — um “k” feito bem no fundo da boca', 'Qorrax (sol)'],
        ['dh', 'oclusiva retroflexa — um “d” com a ponta da língua curvada para trás; entre vogais soa quase como um “r” batido', 'Gabadh (filha)'],
        ['aa, ee, ii, oo, uu', 'vogal dobrada é vogal longa, e isso muda o sentido da palavra', 'Haa (sim)'],
      ],
    },
    lessons: [
      {
        id: 'so-u1-l1',
        title: 'Subax wanaagsan',
        kind: 'licao',
        words: ['subax wanaagsan', 'habeen wanaagsan', 'sidee tahay', 'wanaagsan', 'mahadsanid', 'nabadgelyo'],
        cloze: [
          { sentence: '___! Sidee tahay?', answer: 'Subax wanaagsan', options: ['Subax wanaagsan', 'Nabadgelyo', 'Mahadsanid'], translation: 'Bom dia! Como vai?' },
          { sentence: 'Waan wanaagsanahay, ___.', answer: 'mahadsanid', options: ['mahadsanid', 'nabadgelyo', 'sidee tahay'], translation: 'Estou bem, obrigado.' },
          { sentence: 'Habeen ___!', answer: 'wanaagsan', options: ['wanaagsan', 'mahadsanid', 'tahay'], translation: 'Boa noite!' },
        ],
        voice: {
          bot: 'Subax wanaagsan! Sidee tahay?',
          botTranslation: 'Bom dia! Como vai?',
          expected: ['Waan wanaagsanahay, mahadsanid.', 'wanaagsanahay'],
          hint: 'Responda com “Waan wanaagsanahay, mahadsanid.” (estou bem, obrigado).',
        },
        communityPrompt: 'Cumprimente alguém conforme a hora (“Subax wanaagsan!” ou “Habeen wanaagsan!”) e pergunte “Sidee tahay?”.',
      },
      {
        id: 'so-u1-l2',
        title: 'Haa, maya, fadlan',
        kind: 'licao',
        words: ['haa', 'maya', 'fadlan', 'raali ahow', 'magac', 'nabad'],
        cloze: [
          { sentence: '___, mahadsanid.', answer: 'Haa', options: ['Haa', 'Maya', 'Fadlan'], translation: 'Sim, obrigado.' },
          { sentence: 'Biyo, ___.', answer: 'fadlan', options: ['fadlan', 'maya', 'nabad'], translation: 'Água, por favor.' },
          { sentence: 'Magacay ___ Linu.', answer: 'waa', options: ['waa', 'haa', 'maya'], translation: 'Meu nome é Linu.' },
        ],
        voice: {
          bot: 'Magacaa?',
          botTranslation: 'Qual é o seu nome?',
          expected: ['Magacay waa Linu.', 'magacay'],
          hint: 'Responda com “Magacay waa…” (meu nome é…) e o seu nome.',
        },
        communityPrompt: 'Pergunte o nome de alguém com “Magacaa?” e responda com “Magacay waa…”.',
      },
      {
        id: 'so-u1-l3',
        title: 'Aniga, adiga, isaga, iyada',
        kind: 'licao',
        words: ['aniga', 'adiga', 'isaga', 'iyada', 'annaga', 'iyaga'],
        cloze: [
          { sentence: '___ keenaa.', answer: 'Waan', options: ['Waan', 'Waad', 'Way'], translation: 'Eu trago.' },
          { sentence: '___ keentaa.', answer: 'Way', options: ['Way', 'Waan', 'Wuu'], translation: 'Ela traz.' },
          { sentence: 'Waan wanaagsanahay, ___?', answer: 'adiguna', options: ['adiguna', 'aniga', 'iyaga'], translation: 'Estou bem, e você?' },
        ],
        voice: {
          bot: 'Waad keentaa.',
          botTranslation: 'Você traz.',
          expected: ['Waan keenaa.', 'keenaa'],
          hint: 'Responda na primeira pessoa: “Waan keenaa.” (eu trago).',
        },
        communityPrompt: 'Escreva “eu trago”, “ele traz” e “ela traz” com “waan”, “wuu” e “way” antes do verbo.',
      },
      {
        id: 'so-u1-l4',
        title: 'Hooyo iyo aabbe',
        kind: 'licao',
        words: ['hooyo', 'aabbe', 'nin', 'naag', 'wiil', 'saaxiib'],
        cloze: [
          { sentence: 'Hooyo iyo ___.', answer: 'aabbe', options: ['aabbe', 'saaxiib', 'naag'], translation: 'Mãe e pai.' },
          { sentence: 'Waa ___.', answer: 'nin', options: ['nin', 'naag', 'hooyo'], translation: 'É um homem.' },
          { sentence: 'Waa ___.', answer: 'naag', options: ['naag', 'nin', 'wiil'], translation: 'É uma mulher.' },
        ],
        voice: {
          bot: 'Waa saaxiib.',
          botTranslation: 'É um amigo.',
          expected: ['Waa saaxiib.', 'saaxiib'],
          hint: 'Repita: “Waa saaxiib.” — “waa” + substantivo diz o que alguém é.',
        },
        communityPrompt: 'Apresente a família com “waa”: “Waa hooyo.”, “Waa aabbe.”, “Waa saaxiib.”.',
      },
      {
        id: 'so-u1-l5',
        title: 'Teste: Subax wanaagsan!',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Subax wanaagsan! Sidee tahay? Magacaa?',
          botTranslation: 'Bom dia! Como vai? Qual é o seu nome?',
          expected: ['Waan wanaagsanahay, mahadsanid. Magacay waa Linu.', 'magacay'],
          hint: 'Junte as respostas: como você está, obrigado e o seu nome.',
        },
        communityPrompt: 'Escreva uma apresentação curta em somali: cumprimento, como você está e o seu nome.',
      },
    ],
  },
  {
    id: 'so-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Kow, laba, saddex',
    emoji: '🔟',
    card: {
      id: 'so-c2',
      title: 'Números, comida e bichos',
      emoji: '🐪',
      // Wiktionary «kow» (usage notes, citando Saeed 1999, p. 70): kow para contar, «hal» diante de
      // substantivo («hál buug», um livro), «mid» sozinho como argumento; «geel» é coletivo (camelos) e
      // «hal» também é «camela» (verbete «hal»). Empréstimos: Wikipédia (cerca de 20% do vocabulário do
      // árabe; também italiano e inglês) e os verbetes «shaah» (do árabe), «bisad» (do árabe + sufixo
      // feminino -ad), «buug» (do inglês book).
      history:
        'Para contar, o somali diz “kow, laba, saddex…”, mas diante de um substantivo o “um” vira “hal”: “hal buug” é “um livro”. Cuidado com “hal”: a mesma palavra também quer dizer “camela”. E “geel” não é “um camelo”, é um nome coletivo, “os camelos”, como “gado” em português.',
      culture_tip:
        'Cerca de um quinto do vocabulário somali vem do árabe, fruto de séculos de comércio e da religião: “shaah” (chá) vem do árabe, e “bisad” (gato) também, com o sufixo feminino “-ad” do somali. Do inglês e do italiano vieram palavras mais recentes, como “buug” (livro, do inglês “book”).',
      grammar_why:
        'O verbo somali muda a terminação conforme a pessoa: “waan cabbaa” (eu bebo), “waad cabtaa” (você bebe), “wuu cabbaa” (ele bebe), “way cabtaa” (ela bebe). O objeto vem antes do verbo, como em “Biyo waan cabbaa” (eu bebo água, literalmente “água eu bebo”). O adjetivo vem depois do substantivo: “guri weyn” (uma casa grande).',
      grammar_examples: [
        ['Kow, laba, saddex.', 'Um, dois, três.'],
        ['Hal buug.', 'Um livro.'],
        ['Biyo waan cabbaa.', 'Eu bebo água.'],
        ['Guri weyn.', 'Uma casa grande.'],
      ],
      character_guide: [
        ['sh', 'como o “x” de “xícara”', 'Shaah (chá), shan (cinco)'],
        ['kh', 'fricativa velar surda, um “rr” raspado no fundo da boca; aparece em palavras vindas do árabe, e muita gente a pronuncia como o “q”', 'Akhri (leia!)'],
        ["'", 'parada glotal — um corte breve na voz, como no meio de “oh-oh”', "Lo' (gado)"],
      ],
    },
    lessons: [
      {
        id: 'so-u2-l1',
        title: 'Kow, laba, saddex',
        kind: 'licao',
        words: ['kow', 'laba', 'saddex', 'afar', 'shan', 'lix'],
        cloze: [
          { sentence: 'Kow, ___, saddex.', answer: 'laba', options: ['laba', 'afar', 'lix'], translation: 'Um, dois, três.' },
          { sentence: 'Saddex, ___, shan.', answer: 'afar', options: ['afar', 'kow', 'lix'], translation: 'Três, quatro, cinco.' },
          { sentence: 'Afar, shan, ___.', answer: 'lix', options: ['lix', 'laba', 'saddex'], translation: 'Quatro, cinco, seis.' },
        ],
        voice: {
          bot: 'Kow, laba, saddex, afar, shan…',
          botTranslation: 'Um, dois, três, quatro, cinco…',
          expected: ['Lix.', 'lix'],
          hint: 'Complete a contagem com “lix” (seis).',
        },
        communityPrompt: 'Conte de um a seis em somali: “Kow, laba, saddex, afar, shan, lix.”',
      },
      {
        id: 'so-u2-l2',
        title: 'Toddoba, siddeed, sagaal, toban',
        kind: 'licao',
        words: ['toddoba', 'siddeed', 'sagaal', 'toban', 'buug', 'guri'],
        cloze: [
          { sentence: 'Toddoba, ___, sagaal.', answer: 'siddeed', options: ['siddeed', 'toban', 'lix'], translation: 'Sete, oito, nove.' },
          { sentence: 'Sagaal, ___.', answer: 'toban', options: ['toban', 'toddoba', 'siddeed'], translation: 'Nove, dez.' },
          { sentence: 'Hal ___.', answer: 'buug', options: ['buug', 'toban', 'sagaal'], translation: 'Um livro.' },
        ],
        voice: {
          bot: 'Hal buug.',
          botTranslation: 'Um livro.',
          expected: ['Hal buug.', 'buug'],
          hint: 'Repita: “Hal buug.” — diante de substantivo, “um” é “hal”, não “kow”.',
        },
        communityPrompt: 'Conte até dez em somali e depois diga “Hal buug.” (um livro) mostrando um livro.',
      },
      {
        id: 'so-u2-l3',
        title: 'Biyo, shaah, caano',
        kind: 'licao',
        words: ['biyo', 'caano', 'shaah', 'hilib', 'rooti', 'cab'],
        cloze: [
          { sentence: 'Biyo waan ___.', answer: 'cabbaa', options: ['cabbaa', 'cabtaa', 'cabnaa'], translation: 'Eu bebo água.' },
          { sentence: 'Shaah iyo ___.', answer: 'caano', options: ['caano', 'hilib', 'biyo'], translation: 'Chá e leite.' },
          { sentence: '___, fadlan.', answer: 'Rooti', options: ['Rooti', 'Shaah', 'Hilib'], translation: 'Pão, por favor.' },
        ],
        voice: {
          bot: 'Biyo waan cabbaa.',
          botTranslation: 'Eu bebo água.',
          expected: ['Shaah waan cabbaa.', 'shaah'],
          hint: 'Troque a bebida: “Shaah waan cabbaa.” (eu bebo chá).',
        },
        communityPrompt: 'Peça comida e bebida com “fadlan”: “Shaah, fadlan.”, “Rooti, fadlan.”.',
      },
      {
        id: 'so-u2-l4',
        title: 'Geel, ey, bisad',
        kind: 'licao',
        words: ['geel', 'ey', 'bisad', 'shimbir', 'libaax', 'faras'],
        cloze: [
          { sentence: 'Waa ___.', answer: 'geel', options: ['geel', 'ey', 'faras'], translation: 'São camelos.' },
          { sentence: 'Waa ___.', answer: 'bisad', options: ['bisad', 'libaax', 'shimbir'], translation: 'É um gato.' },
          { sentence: 'Waa ___.', answer: 'libaax', options: ['libaax', 'bisad', 'ey'], translation: 'É um leão.' },
        ],
        voice: {
          bot: 'Waa shimbir.',
          botTranslation: 'É um pássaro.',
          expected: ['Waa shimbir.', 'shimbir'],
          hint: 'Repita: “Waa shimbir.” (é um pássaro).',
        },
        communityPrompt: 'Mostre a foto de um bicho e diga o que é com “Waa…”: “Waa ey.”, “Waa faras.”.',
      },
      {
        id: 'so-u2-l5',
        title: 'Qorrax, dayax, geed weyn',
        kind: 'licao',
        words: ['qorrax', 'dayax', 'geed', 'cad', 'madow', 'weyn'],
        cloze: [
          { sentence: 'Geed ___.', answer: 'weyn', options: ['weyn', 'cad', 'madow'], translation: 'Uma árvore grande.' },
          { sentence: 'Ey ___.', answer: 'madow', options: ['madow', 'weyn', 'cad'], translation: 'Um cachorro preto.' },
          { sentence: 'Waa ___.', answer: 'qorrax', options: ['qorrax', 'dayax', 'geed'], translation: 'É o sol.' },
        ],
        voice: {
          bot: 'Waa dayax.',
          botTranslation: 'É a lua.',
          expected: ['Waa dayax.', 'dayax'],
          hint: 'Repita apontando para o céu: “Waa dayax.” (é a lua).',
        },
        communityPrompt: 'Descreva o que você vê com substantivo + adjetivo: “Geed weyn.”, “Caano cad.”, “Ey madow.”.',
      },
      {
        id: 'so-u2-l6',
        title: 'Teste: Kow, laba, saddex',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kow, laba, saddex…',
          botTranslation: 'Um, dois, três…',
          expected: ['Afar, shan, lix.', 'afar'],
          hint: 'Continue a contagem depois de “saddex”: “afar, shan, lix.”',
        },
        communityPrompt: 'Escreva um passeio curto: o que você vê (“Waa…”), um bicho, uma cor e o que você bebe.',
      },
    ],
  },
];
