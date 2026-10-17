import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

/**
 * Extras do huni kuĩ: textos da comunidade para corrigir, cenário de conversa, etimologia, diário e
 * sombra. As siglas das fontes e a regra de grafia estão no cabeçalho de vocabulario.ts; cada frase em
 * hãtxa kuĩ traz a fonte no comentário.
 */

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo hãtxa kuĩ). */
export const COMMUNITY_CBS: CommunitySeed[] = [
  {
    // [KAX14] 143, ex. 735: o pronome de quem faz é “ẽ”, não “ea”.
    author_name: 'Juliana 🇧🇷',
    prompt: 'Mĩ nami piai.',
    content: 'Ea nami piai.',
    reference: 'Ẽ nami piai.',
  },
  {
    // [KAX14] 77, ex. 297: o verbo fecha a frase.
    author_name: 'Thiago 🇧🇷',
    prompt: 'Coma esta banana.',
    content: 'Piwe na mani.',
    reference: 'Na mani piwe.',
  },
  {
    // [KAX14] 95, ex. 407-410
    author_name: 'Camila 🇧🇷',
    prompt: 'Besti, rabe, tsamĩ…',
    content: 'Besti, tsamĩ, rabe, ketash.',
    reference: 'Besti, rabe, tsamĩ, ketash.',
  },
  {
    // [KAX11] 51-52, ex. 9 e 11: ontem pede “-xiã”, não “-shu”.
    author_name: 'Rafael 🇧🇷',
    prompt: 'Eu caí ontem.',
    content: 'Ẽ tĩshu.',
    reference: 'Ẽ tĩxiã.',
  },
  {
    // [KAX14] 185, ex. 940: a palavra de pergunta abre a frase.
    author_name: 'Bianca 🇧🇷',
    prompt: 'Quem chegou?',
    content: 'Nukushu tsua mẽ?',
    reference: 'Tsua nukushu mẽ?',
  },
  {
    // [KAX14] 195, ex. 985 (convertida): só a última oração leva o verbo com tempo; a primeira fecha em “-rã”.
    author_name: 'Larissa 🇧🇷',
    prompt: 'Se você me bater, eu choro.',
    content: 'Mĩ ea kuxai, ẽ kashai.',
    reference: 'Mĩ ea kuxarã, ẽ kashai.',
  },
  {
    // [KAX14] 148, ex. 764 (convertida): quem comeu responde com o “-ã”, “eã”.
    author_name: 'Pedro 🇧🇷',
    prompt: 'Tsuã pishu mẽ?',
    content: 'Ẽ.',
    reference: 'Eã.',
  },
];

/**
 * Cenário de conversa. As fontes não registram um tratamento formal separado do informal: “mĩ” serve
 * para qualquer pessoa. O respeito aparece no jeito de falar com os sogros, com delicadeza e carinho
 * ([KAX14] 71), e não num pronome próprio.
 */
export const SCENARIOS_CBS: ScenarioSeed[] = [
  {
    id: 'cbs-s1',
    title: 'Chegando numa aldeia',
    emoji: '🏞️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um primo huni kuĩ que recebe você na casa dele, à beira do rio',
    description:
      'Não há um “senhor” ou “senhora” separado em hãtxa kuĩ: “mĩ” (você) serve para qualquer pessoa. Os parentes se chamam pelo parentesco, como “txai”, o primo cruzado.',
    turns: [
      {
        // [KAX14] 70
        bot: 'Txai!',
        botTranslation: 'Primo!',
        keywords: ['txai'],
        suggestions: ['Txai!'],
      },
      {
        // [KAX14] 37, ex. 1; resposta: [KAX14] 175, ex. 899
        bot: 'Ẽ hiwe hawẽrua.',
        botTranslation: 'Minha casa é bonita.',
        keywords: ['hiwe', 'keyatapaki'],
        suggestions: ['Mĩ hiwe keyatapaki.'],
      },
      {
        // [KAX14] 77, ex. 297 e 300
        bot: 'Na mani piwe.',
        botTranslation: 'Coma esta banana.',
        keywords: ['mani', 'piwe'],
        suggestions: ['Ha mani piwe.'],
      },
    ],
  },
  {
    id: 'cbs-s2',
    title: 'Perguntas no caminho do roçado',
    emoji: '🌱',
    cefr: 'A2',
    register: 'informal',
    persona: 'Uma vizinha huni kuĩ que encontra você na beira do caminho',
    description:
      'Em hãtxa kuĩ, a palavra de pergunta abre a frase, e as perguntas sobre o que já aconteceu terminam com “mẽ”.',
    turns: [
      {
        // [KAX14] 191, ex. 974; resposta: [CAM05] 62, ex. 13 (com “baiyanu”, [KAX11] 85)
        bot: 'Hara kiri mĩ kai?',
        botTranslation: 'Para onde você vai?',
        keywords: ['baiyanu', 'bai'],
        suggestions: ['Baiyanu ẽ kaa.'],
      },
      {
        // [KAX14] 188, ex. 954; resposta: um número, [KAX14] 95
        bot: 'Hati xarabu mani mĩ pishu mẽ?',
        botTranslation: 'Quantas bananas você comeu?',
        keywords: ['besti', 'rabe', 'tsamĩ'],
        suggestions: ['Rabe.'],
      },
      {
        // [CAM05] 64, ex. 19a-19b
        bot: 'Tsuã ẽ piti pishu mẽ?',
        botTranslation: 'Quem comeu a minha comida?',
        keywords: ['eaki'],
        suggestions: ['Eaki.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras huni kuĩ. O hãtxa kuĩ não é parente do português: as notas mostram como as
 * palavras se formam dentro da própria língua.
 */
export const ETYMOLOGY_CBS: EtymologySeed[] = [
  {
    word: 'Huni',
    root_word: 'huni + kuĩ',
    origin_language: 'Hãtxa kuĩ',
    cognates: c(['cbs', 'kuĩ (verdadeiro)'], ['cbs', 'hãtxa kuĩ (língua verdadeira)']),
    // [SD25] 9 (citando KAX14: “Huni Kuĩ, em tradução literal ‘gente verdadeira’”; “nuku besta”, “raku
    // nawá”, “Kaxi nawá ‘povo morcego’”); [HM] 6 (“hãtxa kui, que significa língua verdadeira”).
    evolution_note:
      '“Huni” (homem, pessoa) com “kuĩ” (verdadeiro) dá “huni kuĩ”, a “gente verdadeira”, o nome que o povo dá a si mesmo; a língua é a “hãtxa kuĩ”, a “língua verdadeira”. Segundo Joaquim Kaxinawá, os huni kuĩ chamam os outros povos pano de “nuku besta” (“nosso outro”, “nosso irmão”) e os não indígenas de “raku nawá” (“povo vestido”). Já “kaxinawá”, o nome mais usado pelos de fora, vem de “kaxi nawá”, “povo morcego”, e o próprio povo prefere não usá-lo.',
    transparent: true,
  },
  {
    word: 'Txai',
    root_word: 'txai',
    origin_language: 'Hãtxa kuĩ',
    cognates: c(['cbs', 'shanu (prima cruzada, para o homem)']),
    // [KAX14] 67 e 70 (txai: o primo cruzado; também o pai da mãe, para o homem; “ɨ̃ ʂanu”, minha prima
    // cruzada, passada pela regra: ʂ → sh); [KAX14] 66 (os primos cruzados podem se casar entre si); Wikipédia, “Txai” (o disco de Milton Nascimento, 1990).
    evolution_note:
      '“Txai” é, para o homem, o primo cruzado (filho do irmão da mãe ou da irmã do pai) e também o avô por parte de mãe; a prima cruzada é “shanu”. Como os primos cruzados podem se casar entre si, o txai é o parente da outra metade do povo. Fora das aldeias, a palavra virou “amigo, parceiro”, e deu nome ao disco “Txai” (1990), de Milton Nascimento.',
    transparent: false,
  },
  {
    word: 'Txana',
    root_word: 'txana',
    origin_language: 'Hãtxa kuĩ',
    cognates: c(['cbs', 'huni meka (os cantos do nixi pae)']),
    // [HM] 26 (fala do txana Romão Sales Tui).
    evolution_note:
      '“Txana” é o japim, um pássaro que imita o canto de todos os outros. Por causa dele, todo cantador huni kuĩ se chama “txana”, como explica o velho txana Romão Sales Tui no livro “Huni Meka”. O cantador que só canta os cantos do nixi pae é o “yube tapa”.',
    transparent: false,
  },
  {
    word: 'Rau',
    root_word: 'rau',
    origin_language: 'Hãtxa kuĩ',
    cognates: c(['cbs', 'rauya (que tem remédio)']),
    // [KAX14] 80, ex. 318 (“Maria-ø rã rau-ya ki”, Maria é enfermeira, “tem remédio”) e 183, ex. 928;
    // [HM] escreve “dau”.
    evolution_note:
      '“Rau” é remédio. Com o “-ya” de “ter”, vira “rauya”, “que tem remédio”: é assim que se diz que alguém é enfermeira ou conhece as plantas que curam. No rio Jordão, os professores escrevem “dau”, com “d”.',
    transparent: true,
  },
  {
    word: 'Nixi pae',
    root_word: 'nixi + pae',
    origin_language: 'Hãtxa kuĩ',
    cognates: c(['cbs', 'rume (tabaco, rapé)']),
    // [HM] 4 e 26 (cantos do Nixi Pae, “conhecido também como ritual do cipó”; as músicas para chamar a
    // força, o “yube”).
    evolution_note:
      '“Nixi pae” é a bebida do cipó, que fora das aldeias se conhece pelo nome quíchua “ayahuasca”. Em torno dela se cantam os “huni meka”, os cantos reunidos pelos professores do rio Jordão no livro “Huni Meka” (2007), cantos que primeiro “chamam a força” e depois guiam a miração.',
    transparent: false,
  },
];

// [KAX14] 143, ex. 735; 77, ex. 297; [KAX14] 37, ex. 1; [KAX14] 95; [KAX11] 54, ex. 14; [KAX14] 191, ex. 974.
export const JOURNAL_PROMPTS_CBS: [string, string][] = [
  ['Ẽ nami piai.', 'Eu estou comendo carne.'],
  ['Na mani piwe.', 'Coma esta banana.'],
  ['Ẽ hiwe hawẽrua.', 'Minha casa é bonita.'],
  ['Besti, rabe, tsamĩ, ketash, metsã…', 'Um, dois, três, quatro, cinco…'],
  ['Ẽ pitiru.', 'Eu vou comer.'],
  ['Hara kiri mĩ kai?', 'Para onde você vai?'],
  // [KAX14] 201, ex. 1023, e 195, ex. 986 (convertidas); [KAX11] 112, parte 7, frase 5.
  ['Ẽ risi ẽ nishai, rakakatsirã.', 'Vou amarrar a minha rede para deitar.'],
  ['Nukutã, hatu kenashuki.', 'Quando chegou, chamou eles.'],
  ['Earã ẽ hasĩ kainai.', 'Eu vou virar mutum.'],
];

// [KAX14] 77, ex. 297; [KAX14] 37, ex. 1; [KAX14] 94, ex. 404; 70; 184, ex. 938; [KAX11] 83, frase 3.
export const SHADOWING_CBS: [string, string][] = [
  ['Na mani piwe.', 'Coma esta banana.'],
  ['Ẽ hiwe hawẽrua.', 'Minha casa é bonita.'],
  ['Ẽ txarawashuki.', 'Eu fiz a flecha.'],
  ['Txai!', 'Primo!'],
  ['Mĩ tsua me kãi? Mĩ kena ea yuiriwe.', 'Quem é você? Diga logo o seu nome.'],
  ['Yauxiku nawã, ea atsa inãwẽ, ẽ buniairã!', 'Povo sovino, me dê macaxeira, eu estou com fome!'],
  // [KAX11] 86, parte 2, frase 10; 92, parte 3, frase 8; 96, parte 4, frase 3.
  ['Nishekepã, hania sheki beru betsarã?', 'Calango, cadê o outro grão de milho?'],
  ['Habĩ txi bikinã, txerẽ binikiaki.', 'Quem pegou o fogo foi a curica.'],
  ['Ũ unu txerẽ, txi nuku buãi!', 'Olha aquela curica levando o nosso fogo!'],
];
