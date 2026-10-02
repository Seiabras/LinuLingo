import type { UnitSeed } from '../types';

/**
 * Trilha do sami do norte: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 *
 * Fontes dos fatos culturais e gramaticais usados nos cards e nas frases de exemplo:
 * - Wikipédia (en): “Northern Sámi” (código ISO, falantes, status oficial, alfabeto, gramática),
 *   “Sámi languages” (Sápmi, países, famílias sami), “Sámi people” (bandeira, pastorícia de renas,
 *   parlamentos sami), “Eskimo words for snow” (o estudo de Ole Henrik Magga sobre o vocabulário
 *   sami de neve e gelo).
 * - Wiktionary (en), verbete a verbete e a categoria “Northern Sami phrasebook”, para cada palavra e
 *   frase sami citada (ver o comentário no topo de vocabulario.ts para a lista de páginas).
 */
export const UNITS_SE: UnitSeed[] = [
  {
    id: 'se-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bures! Vuosttaš lávki',
    emoji: '👋',
    card: {
      id: 'se-c1',
      title: 'A língua sami mais falada',
      emoji: '🏔️',
      history:
        'O sami do norte (davvisámegiella) é a maior das línguas sami, faladas pelo povo sami na Sápmi — a região que vai do centro-norte da Escandinávia até a península de Kola, na Rússia, passando pela Noruega, pela Suécia e pela Finlândia. Tem cerca de 25 mil falantes: uns 18 mil na Noruega, 5 a 6 mil na Suécia e cerca de 2 mil na Finlândia (o sami do norte, em si, não chega à Rússia — lá se falam outras línguas sami, como o kildin). É língua oficial em Troms og Finnmark e em mais oito municípios da Noruega, e língua minoritária reconhecida na Suécia e na Finlândia. A ortografia atual, com letras como č, đ, ŋ, š, ŧ e ž, foi padronizada em 1979, em acordo entre os três países.',
      culture_tip:
        'O povo sami tem uma bandeira própria, adotada em 1986: um círculo vermelho e azul (o sol e a lua) sobre quatro faixas de cor. E o vocabulário sami de neve, gelo e renas é famoso entre linguistas: segundo o linguista Ole Henrik Magga, as línguas sami têm entre 180 e 300 palavras para tipos de neve, pegadas na neve e condições de uso da neve. O mesmo vale para as renas: “boazu” é a rena adulta, “miessi” é o bezerro de rena, e “čoarvi” é o chifre ou a galhada — só a ponta de um vocabulário bem mais específico que o nosso.',
      grammar_why:
        'O sami do norte não tem um verbo “ter”: usa “leat” (ser/estar) com quem possui no caso locativo. “Mus lea beana” é, palavra por palavra, “em-mim é cachorro” — “eu tenho um cachorro”. E “leat” também serve pra idade: “mun lean vihtta jagi boaris” é “eu sou cinco anos velho”, ou seja, “eu tenho cinco anos”.',
      grammar_examples: [
        ['Bures! Mun lean Elle.', 'Oi! Eu sou a Elle.'],
        ['Gii don leat?', 'Quem é você?'],
        ['Mus lea beana.', 'Eu tenho um cachorro.'],
        ['Mun lean vihtta jagi boaris.', 'Eu tenho cinco anos.'],
      ],
      character_guide: [
        ['á', 'um “a” mais aberto e longo (como em inglês “chai”)', 'áhčči (pai)'],
        ['č', '“tch” de “tchau” (como em inglês “chew”)', 'čalbmi (olho)'],
        ['đ', 'som sonoro, como o “th” de inglês “this”', 'gieđa (“mão”, no acusativo, de giehta)'],
        ['š', 'som de “x”, como em inglês “shed”', 'davvisámegiella (sami do norte)'],
        ['ž', 'som sonoro, como o “j” do francês “jour” (a Wikipédia compara a inglês “hedge”)', '—'],
        ['ŋ', '“ng” nasal do fim de “manga”, sem pronunciar o “g” (como em inglês “sing”)', '—'],
        ['ŧ', 'som surdo, como o “th” de inglês “thick”', '—'],
      ],
    },
    lessons: [
      {
        id: 'se-u1-l1',
        title: 'Bures, giitu, mana dearvan!',
        kind: 'licao',
        words: ['bures', 'buorre iđit', 'buorre eahket', 'mana dearvan', 'giitu', 'leage buorre'],
        cloze: [
          { sentence: '___! Mun lean Elle.', answer: 'Bures', options: ['Bures', 'Giitu', 'Mana dearvan'], translation: 'Oi! Eu sou a Elle.' },
          { sentence: 'Lea iđit: ___!', answer: 'Buorre iđit', options: ['Buorre iđit', 'Buorre eahket', 'Mana dearvan'], translation: 'É de manhã: bom dia!' },
          { sentence: 'Káffe, ___.', answer: 'leage buorre', options: ['leage buorre', 'giitu', 'bures'], translation: 'Café, por favor.' },
        ],
        voice: {
          bot: 'Bures! Mun lean Elle.',
          botTranslation: 'Oi! Eu sou a Elle.',
          expected: ['Bures! Mun lean ...', 'bures', 'mun lean'],
          hint: 'Devolva o cumprimento (“Bures!”) e diga quem você é com “Mun lean…”.',
        },
        communityPrompt: 'Escreva três cumprimentos em sami do norte: um de manhã (“Buorre iđit…”), um à noite (“Buorre eahket…”) e um agradecimento (“Giitu…”).',
      },
      {
        id: 'se-u1-l2',
        title: 'Mun, don, son',
        kind: 'licao',
        words: ['mun', 'don', 'son', 'mii', 'dii', 'sii'],
        cloze: [
          { sentence: '___ lean Elle.', answer: 'Mun', options: ['Mun', 'Don', 'Son'], translation: 'Eu sou a Elle.' },
          { sentence: '___ leat ustit.', answer: 'Don', options: ['Don', 'Mun', 'Mii'], translation: 'Você é um amigo.' },
          { sentence: '___ lea áhčči.', answer: 'Son', options: ['Son', 'Sii', 'Dii'], translation: 'Ele é o pai.' },
        ],
        voice: {
          bot: 'Gii don leat?',
          botTranslation: 'Quem é você?',
          expected: ['Mun lean ...', 'mun lean'],
          hint: 'Diga quem você é com “Mun lean…”.',
        },
        communityPrompt: 'Apresente-se em sami do norte: diga quem você é com “Mun lean…” e pergunte o nome de alguém com “Mii du namma lea?”.',
      },
      {
        id: 'se-u1-l3',
        title: 'Geahččalit: vuosttaš lávki',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bures! Mun lean Ánte. Gii don leat ja man boaris don leat?',
          botTranslation: 'Oi! Eu sou o Ante. Quem é você e quantos anos você tem?',
          expected: ['Bures! Mun lean ... Mun lean ... jagi boaris.', 'bures', 'mun lean'],
          hint: 'Devolva o cumprimento (“Bures!”), diga quem você é (“Mun lean…”) e sua idade (“Mun lean … jagi boaris”).',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Bures!”), nome com “Mun lean…”, idade com “Mun lean … jagi boaris” e despedida (“Mana dearvan”).',
      },
    ],
  },
  {
    id: 'se-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Bearaš ja lohku',
    emoji: '👪',
    card: {
      id: 'se-c2',
      title: 'A família e os números',
      emoji: '👪',
      history:
        'A pastorícia de renas é a atividade mais associada aos sami, mas hoje só cerca de 10% do povo sami está ligada a ela — na Noruega, por exemplo, uns 2.800 sami vivem disso em tempo integral. Os três países nórdicos com sami têm cada um o seu próprio Parlamento Sami (Sámediggi): o da Noruega, eleito desde 1989; o da Suécia, desde 1993; e o da Finlândia, criado por lei em 1973. Eles cuidam da língua, da cultura e de parte da administração sami em cada país, mas não têm o mesmo poder que um parlamento nacional.',
      culture_tip:
        'Famílias sami tradicionalmente moravam em goahtis (tendas ou choupanas, dependendo do material) perto das rotas de migração das renas. Hoje a maioria dos sami mora em casas comuns (viessu), mas o goahti continua um símbolo forte da cultura — e ainda se usa, principalmente em ocasiões e no trabalho com as renas.',
      grammar_why:
        'O possessivo vem antes da palavra: “mu eadni” (minha mãe), “mu áhčči” (meu pai), sem precisar de artigo. E, como visto na unidade 1, “mus lea” continua servindo pra dizer o que a pessoa tem: “mus lea okta viellja” é “eu tenho um irmão”.',
      grammar_examples: [
        ['Mu eadni lea Elle.', 'Minha mãe é a Elle.'],
        ['Mus lea okta viellja ja okta oabbá.', 'Eu tenho um irmão e uma irmã.'],
        ['Mun lean guhtta jagi boaris.', 'Eu tenho seis anos.'],
        ['Dát lea mu ustit.', 'Este é o meu amigo.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'se-u2-l1',
        title: 'Mu bearaš',
        kind: 'licao',
        words: ['eadni', 'áhčči', 'viellja', 'oabbá', 'mánná', 'ustit'],
        cloze: [
          { sentence: 'Mu ___ lea Elle.', answer: 'eadni', options: ['eadni', 'áhčči', 'mánná'], translation: 'Minha mãe é a Elle.' },
          { sentence: 'Mus lea okta ___.', answer: 'viellja', options: ['viellja', 'oabbá', 'ustit'], translation: 'Eu tenho um irmão.' },
          { sentence: 'Dát lea mu ___.', answer: 'ustit', options: ['ustit', 'mánná', 'oabbá'], translation: 'Este é o meu amigo.' },
        ],
        voice: {
          bot: 'Mus lea okta mánná. Ja don?',
          botTranslation: 'Eu tenho um filho/uma filha. E você?',
          expected: ['Mus lea okta viellja.', 'mus lea'],
          hint: 'Responda com “Mus lea…” (eu tenho…) e um parente seu.',
        },
        communityPrompt: 'Descreva sua família em sami do norte usando “Mus lea…” (eu tenho) e as palavras de parentesco que você aprendeu.',
      },
      {
        id: 'se-u2-l2',
        title: 'Lohku: okta–guhtta',
        kind: 'licao',
        words: ['okta', 'guokte', 'golbma', 'njeallje', 'vihtta', 'guhtta'],
        cloze: [
          { sentence: 'Mun lean ___ jagi boaris.', answer: 'vihtta', options: ['vihtta', 'guokte', 'golbma'], translation: 'Eu tenho cinco anos.' },
          { sentence: 'Golbma ja ___ lea vihtta.', answer: 'guokte', options: ['guokte', 'okta', 'golbma'], translation: 'Três mais dois é cinco.' },
          { sentence: 'Okta, guokte, golbma, njeallje, ___…', answer: 'vihtta', options: ['vihtta', 'guhtta', 'okta'], translation: 'Um, dois, três, quatro, cinco…' },
        ],
        voice: {
          bot: 'Man boaris don leat?',
          botTranslation: 'Quantos anos você tem?',
          expected: ['Mun lean ... jagi boaris.', 'mun lean', 'jagi boaris'],
          hint: 'Responda com “Mun lean [número] jagi boaris.”.',
        },
        communityPrompt: 'Diga sua idade em sami do norte (“Mun lean … jagi boaris.”) e conte até seis: okta, guokte, golbma, njeallje, vihtta, guhtta.',
      },
      {
        id: 'se-u2-l3',
        title: 'Geahččalit: bearaš ja lohku',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Bures! Man boaris don leat, ja gii lea du eadni?',
          botTranslation: 'Oi! Quantos anos você tem, e quem é sua mãe?',
          expected: ['Mun lean ... jagi boaris. Mu eadni lea ...', 'mun lean', 'mu eadni lea'],
          hint: 'Diga sua idade (“Mun lean … jagi boaris”) e o nome da sua mãe (“Mu eadni lea…”).',
        },
        communityPrompt: 'Escreva cinco frases sobre você e sua família usando “Mun lean…”, “Mus lea…” e “Mu eadni/áhčči lea…”.',
      },
    ],
  },
];
