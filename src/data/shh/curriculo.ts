import type { UnitSeed } from '../types';

/**
 * Trilha do shoshone: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Nenhuma fonte consultada deu uma frase completa testemunhal no dialeto
 * de Fort Hall usado no vocabulário deste curso — só palavras isoladas (ver vocabulario.ts). Por
 * isso, em vez de inventar frases com sujeito, verbo e objeto (risco real de criar uma concordância
 * ou uma ordem que nenhuma fonte confirma), as lições e os desafios de voz abaixo usam ENUMERAÇÕES
 * (contar números, listar bichos, listar palavras do céu) — a mesma estratégia já usada no pacote do
 * navajo (nv) deste app para a mesma lacuna.
 */
export const UNITS_SHH: UnitSeed[] = [
  {
    id: 'shh-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Tsaa'! Newe, o povo da Grande Bacia",
    emoji: '🏜️',
    card: {
      id: 'shh-c1',
      title: 'Newe: o povo e a língua da Grande Bacia',
      emoji: '🏜️',
      history:
        'O shoshone (ou shoshoni) é uma língua uto-asteca do ramo numic central — parente, dentro desse ramo, do comanche e do panamint (também chamado timbisha) — falada na Grande Bacia, no oeste dos Estados Unidos (Wyoming, Idaho, Nevada e Utah). Tem código ISO 639-3 próprio, “shh”. Segundo a Wikipédia em inglês, havia cerca de mil falantes fluentes em 2007, mais um grupo de cerca de mil pessoas que entendem a língua sem fluência completa — a Ethnologue classifica o shoshone como “ameaçado” e a UNESCO como “severamente em perigo” em Idaho, Utah e Wyoming. O próprio povo chama a si mesmo de “newe” (pessoa, gente); a Wikipédia também registra endônimos próximos de “Sosoni taikwappe” e “newe taikwappe” (“a língua do povo”) para o nome da língua — sem reproduzir aqui o sinal diacrítico especial (um sublinhado sob uma vogal) que a Wikipédia usa nessas duas formas, porque esse sinal não faz parte da grafia do dialeto de Fort Hall usada no vocabulário deste curso.',
      culture_tip:
        '“Shoshone” não é uma única nação política: existem várias tribos e reservas reconhecidas separadamente pelo governo federal dos Estados Unidos, cada uma com governo e história próprios — entre elas a Eastern Shoshone, em Wind River (Wyoming, dividida com o povo arapaho do norte); a Shoshone-Bannock, na reserva de Fort Hall (Idaho, de onde vem o dialeto usado no vocabulário deste curso); a Te-Moak, em Nevada; a Northwestern Band of the Shoshone Nation, em Utah; e a Shoshone-Paiute, em Duck Valley, na fronteira entre Idaho e Nevada.',
      grammar_why:
        'O shoshone tem seis pronomes pessoais atestados no dialeto de Fort Hall: “ne” (eu), “enne” (tu/você), “iden” (ele/ela), “nehwe” (nós), “memme” (vós/vocês) e “sidee\'” (eles/elas). Repare no apóstrofo em “sidee\'”: ele marca uma consoante de verdade (a oclusiva glotal), não é pontuação — volta com mais detalhe na gramática desta unidade.',
      grammar_examples: [
        ['Newe.', 'Pessoa, ser humano — também como o povo shoshone chama a si mesmo.'],
        ["Tsaa'.", 'Bom, legal (nenhuma fonte documenta um “oi” fixo; este curso usa esta palavra como cumprimento/aprovação).'],
        ['Ne, enne, iden.', 'Eu, tu, ele/ela.'],
      ],
      character_guide: [
        ["'", 'oclusiva glotal: uma consoante de verdade, não uma pontuação', "tsaa' (bom), sidee' (eles/elas)"],
        ['vogal dobrada (ex.: uu)', 'vogal longa', "huchuu' (pássaro, visto na próxima unidade)"],
      ],
    },
    lessons: [
      {
        id: 'shh-u1-l1',
        title: "Tsaa'! Ne, enne, iden",
        kind: 'licao',
        words: ["tsaa'", 'ne', 'enne', 'iden', 'nehwe', 'memme'],
        cloze: [
          { sentence: 'Ne, ___, iden.', answer: 'Enne', options: ['Enne', 'Nehwe', 'Memme'], translation: 'Eu, tu, ele/ela.' },
          { sentence: 'Nehwe, ___.', answer: 'Memme', options: ['Memme', 'Ne', 'Iden'], translation: 'Nós, vocês.' },
          { sentence: '___!', answer: "Tsaa'", options: ["Tsaa'", 'Ne', 'Enne'], translation: 'Bom! (cumprimento)' },
        ],
        voice: {
          bot: 'Ne, enne…',
          botTranslation: 'Eu, tu…',
          expected: ['Iden.', 'iden'],
          hint: 'Complete a lista de pronomes: “iden” (ele/ela).',
        },
        communityPrompt: 'Escreva os pronomes pessoais do shoshone que você aprendeu, em ordem: ne, enne, iden, nehwe, memme.',
      },
      {
        id: 'shh-u1-l2',
        title: "Newe, bia', ape'",
        kind: 'licao',
        words: ['newe', "bia'", "ape'", "sidee'", 'hagaaden', "haga'"],
        cloze: [
          { sentence: '“___”: mãe.', answer: "Bia'", options: ["Bia'", "Ape'", 'Newe'], translation: '“Bia\'”: mãe.' },
          { sentence: '“___”: pai.', answer: "Ape'", options: ["Ape'", "Bia'", "Sidee'"], translation: '“Ape\'”: pai.' },
          { sentence: '“___”: onde?', answer: "Haga'", options: ["Haga'", 'Hagaaden', 'Newe'], translation: '“Haga\'”: onde?' },
        ],
        voice: {
          bot: "Newe, sidee'…",
          botTranslation: 'Pessoa, eles/elas…',
          expected: ["Bia'.", "bia'"],
          hint: 'Complete com outra palavra de pessoas: “bia\'” (mãe).',
        },
        communityPrompt: 'Escreva três palavras de pessoas em shoshone: “newe” (pessoa), “bia\'” (mãe) e “ape\'” (pai).',
      },
      {
        id: 'shh-u1-l3',
        title: 'Prova: Newe e os pronomes',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ne, enne, iden, nehwe…',
          botTranslation: 'Eu, tu, ele/ela, nós…',
          expected: ['Memme.', 'memme'],
          hint: 'Complete a lista de pronomes: “memme” (vocês).',
        },
        communityPrompt: 'Escreva os seis pronomes pessoais do shoshone, em ordem: ne, enne, iden, nehwe, memme, sidee\'.',
      },
    ],
  },
  {
    id: 'shh-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Números, bichos e o céu',
    emoji: '🌄',
    card: {
      id: 'shh-c2',
      title: 'Sujeito, objeto, verbo — nessa ordem (quase sempre)',
      emoji: '🔁',
      history:
        'Segundo a Wikipédia em inglês, a ordem mais comum da frase shoshone é sujeito-objeto-verbo (SOV) — mas o sentido de uma frase shoshone não depende só dessa ordem, porque outras marcas presas às próprias palavras indicam quem faz o quê. Isso volta com mais detalhe na gramática desta unidade. A reserva de Fort Hall, em Idaho — de onde vem o dialeto usado no vocabulário deste curso —, é hoje o território das tribos shoshone-bannock: duas nações distintas, shoshone e bannock, que dividem a mesma reserva desde o século XIX, segundo a Wikipédia em inglês.',
      culture_tip:
        'Os números do shoshone de seis a dez, no vocabulário deste curso, são palavras bem mais longas que as de um a cinco (ex.: “manegite”, cinco, contra “seemonowemihyande”, nove) — este curso apresenta cada uma como a fonte atesta, sem tentar decompor essas palavras em partes menores, porque nenhuma fonte consultada confirma, com segurança, como elas se formam por dentro.',
      grammar_why:
        'Como o sentido da frase shoshone não depende só da ordem das palavras (ver a gramática desta unidade), e como nenhuma fonte consultada traz uma frase completa testemunhal no dialeto de Fort Hall, este curso prefere ENUMERAR palavras já atestadas (contar números, listar bichos) a inventar uma frase com sujeito, objeto e verbo que nenhuma fonte confirma.',
      grammar_examples: [
        ["Seme', wahatehwe, bahaitee'.", 'Um, dois, três.'],
        ["Sadee', baingwi, huchuu'.", 'Cachorro, peixe, pássaro.'],
      ],
      character_guide: [
        ["'", 'oclusiva glotal, em quase todos os números e vários bichos', "seme' (um), bahaitee' (três), sadee' (cachorro)"],
      ],
    },
    lessons: [
      {
        id: 'shh-u2-l1',
        title: "Da'bai, mea', baa'",
        kind: 'licao',
        words: ["da'bai", "mea'", "da'ziyumbi", "baa'", 'dowope', "doo'ya"],
        cloze: [
          { sentence: '“___”: sol.', answer: "Da'bai", options: ["Da'bai", "Mea'", "Baa'"], translation: '“Da\'bai”: sol.' },
          { sentence: "Da'bai, ___, da'ziyumbi.", answer: "Mea'", options: ["Mea'", 'Dowope', "Doo'ya"], translation: 'Sol, lua, estrela.' },
          { sentence: '“___”: água.', answer: "Baa'", options: ["Baa'", 'Dowope', "Doo'ya"], translation: '“Baa\'”: água.' },
        ],
        voice: {
          bot: "Da'bai, mea'…",
          botTranslation: 'Sol, lua…',
          expected: ["Da'ziyumbi.", "da'ziyumbi"],
          hint: 'Complete com outra palavra do céu: “da\'ziyumbi” (estrela).',
        },
        communityPrompt: 'Escreva três palavras da natureza em shoshone: sol (“da\'bai”), lua (“mea\'”) e água (“baa\'”).',
      },
      {
        id: 'shh-u2-l2',
        title: 'Bichos e números',
        kind: 'licao',
        words: ["sadee'", 'baingwi', "huchuu'", "seme'", 'wahatehwe', "bahaitee'"],
        cloze: [
          { sentence: '“___”: cachorro.', answer: "Sadee'", options: ["Sadee'", 'Baingwi', "Huchuu'"], translation: '“Sadee\'”: cachorro.' },
          { sentence: "Seme', ___, bahaitee'.", answer: 'Wahatehwe', options: ['Wahatehwe', "Sadee'", 'Baingwi'], translation: 'Um, dois, três.' },
          { sentence: '“___”: peixe.', answer: 'Baingwi', options: ['Baingwi', "Huchuu'", "Sadee'"], translation: '“Baingwi”: peixe.' },
        ],
        voice: {
          bot: "Seme', wahatehwe…",
          botTranslation: 'Um, dois…',
          expected: ["Bahaitee'.", "bahaitee'"],
          hint: 'Complete a contagem: “bahaitee\'” (três).',
        },
        communityPrompt: 'Conte de um a três em shoshone (“seme\'”, “wahatehwe”, “bahaitee\'”) e nomeie um bicho, como “sadee\'” (cachorro).',
      },
      {
        id: 'shh-u2-l3',
        title: 'Prova: números, bichos e o céu',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Seme', wahatehwe, bahaitee', watsewite…",
          botTranslation: 'Um, dois, três, quatro…',
          expected: ['Manegite.', 'manegite'],
          hint: 'Complete a contagem até cinco: “manegite” (cinco).',
        },
        communityPrompt: 'Escreva uma pequena cena em shoshone: conte de um a cinco (“seme\'” a “manegite”) e nomeie um bicho e uma coisa do céu.',
      },
    ],
  },
];
