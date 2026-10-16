import type { UnitSeed } from '../types';

/**
 * Trilha do marúbo até o teto (A1): unidade 1 (A1.1) e unidade 2 (A1.2), cada uma com três lições de
 * seis palavras e uma prova. Fontes e siglas como em vocabulario (CES17 = Cesarino, Marubo e Marubo
 * 2017, com a linha da narrativa; CES18 = Cesarino 2018, “Wenía”; CES13 = Cesarino 2013; ANH10 = Anonby
 * e Holbrook 2010, com o item da lista; ISA = pib.socioambiental.org/pt/Povo:Marubo).
 *
 * Origem de cada frase das lições:
 * u1-l1: “Noke neská akavo.” (CES17 26); “Wa shavo.” (CES17 64, “wa shavo kai wetsa”); “Ato chinãmakĩ.”
 *        (CES17 23); “Ẽ yora.” (CES17 75, “ẽ yora onã shavorasĩ”).
 * u1-l2: “Awẽ vene.” (CES17 9); “Nokẽ chinã.” (CES17 25); “Ẽ papa.” MONTADA (ẽ + substantivo, regra de
 *        “ẽ yora”); “Txai!” (CES18 p. 48: os primos cruzados são tratados “por txai”).
 * u1-l3: “Nokẽ mevi.” (ANH10 211, na grafia de CES17); “Awá shao tapã.” (CES17 85); “Naí taeri.” (CES13);
 *        “Ẽ mevi.” (ANH10 208).
 * u1-l4: “Ẽ shovo.” e “Nokẽ shovo.” MONTADAS (possessivo + substantivo).
 * u2-l1: “Vari Nawavo.” (CES18 p. 48; CES17 p. 139); “Na mai.” (CES17 63); “Wa mai.” (CES17 71); “Vei Naí
 *        Shavaya.” (CES17 103).
 * u2-l2: “Kamã Nawavo.”, “Kana Nawavo.” (CES18 p. 48); “Awá shao tapã.” (CES17 85).
 * u2-l3: “Shavo wetsa.” (CES17 4); “Imi ichná.” (CES18 p. 51); “Vana roaka.” (CES18 p. 55); “Rave nokoma.”
 *        (CES17 103); “Ravero nokoai.” (CES17 104).
 * u2-l4: “Ronorasĩ kenaiti.” (CES17 15); “Tenãseiti.” (CES17 19).
 */
export const UNITS_MZR: UnitSeed[] = [
  {
    id: 'mzr-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ea, noke, yora',
    emoji: '🛖',
    card: {
      id: 'mzr-c1',
      title: 'Marúbo: o povo do Vale do Javari',
      emoji: '🏞️',
      history:
        'Os Marúbo falam uma língua pano e vivem na Terra Indígena Vale do Javari, no Amazonas, nas cabeceiras dos rios Ituí e Curuçá, e também nas cidades de Atalaia do Norte (AM) e Cruzeiro do Sul (AC). Segundo Cesarino, Armando Marubo e Robson Marubo (2017), são cerca de 1.700 pessoas. O povo atual se formou no começo do século 20, quando o chefe e pajé João Tuxáua reuniu grupos pano dispersos. Eles adotaram a língua de um desses grupos, o Chai Nawavo, o “Povo Pássaro”. “Marúbo” não é como o povo se chamava: é um nome dado de fora, segundo o Instituto Socioambiental.',
      culture_tip:
        'Os Marúbo ainda vivem em malocas, as casas grandes coletivas (shovo), que outros povos pano já deixaram. A vida ritual é muito ativa: há o pajé rezador (kẽchĩtxo), que conhece os cantos de cura, e o pajé dos espíritos (romeya). Os mais novos aprendem ouvindo as falas de ensinamento (ese vana) e as histórias antigas contadas pelos mais velhos.',
      grammar_why:
        'O marúbo põe o verbo no fim e cola sufixos nas palavras. Os pronomes têm duas formas: uma simples, para quem só “é” (ea, eu; noke, nós), e outra, com til, para “meu, nosso” e para quem age sobre alguém (ẽ, meu; nokẽ, nosso). O possuidor vem antes da coisa: “ẽ yora” (meus parentes).',
      grammar_examples: [
        ['Noke neská akavo.', 'Nós vamos fazer assim.'],
        ['Ẽ yora.', 'Meus parentes.'],
        ['Nokẽ chinã.', 'Nosso pensamento.'],
        ['Awẽ vene.', 'O marido dela.'],
      ],
      character_guide: [
        ['e', 'vogal central, entre o “i” e o “u”, com os lábios soltos (a ortografia escreve esse som com “e”)', 'yame (noite), vene (homem)'],
        ['o', 'na escrita marúbo, “o” vale um som de “u”', 'yora (pessoa), rono (cobra)'],
        ['ã, ẽ, ĩ, õ', 'til: vogal nasal; nos pronomes, marca “meu, nosso” e quem age', 'ẽ (meu), nokẽ (nosso), kamã (onça)'],
        ['sh', 'como o “x” de “xícara”', 'shavo (mulher), shovo (maloca)'],
        ['tx', 'como o “tch” de “tchau”', 'txai (cunhado), txi (fogo)'],
        ['ch', 'outro som de “x”, feito com a ponta da língua virada para trás', 'chinã (pensamento)'],
        ['v', 'um “v” feito com os dois lábios, quase um “b” soprado', 'vari (sol), vai (caminho)'],
      ],
    },
    lessons: [
      {
        id: 'mzr-u1-l1',
        title: 'Ea, mia, noke',
        kind: 'licao',
        words: ['ea', 'mia', 'noke', 'ato', 'yora', 'shavo'],
        cloze: [
          { sentence: '___ neská akavo.', answer: 'Noke', options: ['Noke', 'Ea', 'Ato'], translation: 'Nós vamos fazer assim.' },
          { sentence: 'Wa ___.', answer: 'shavo', options: ['shavo', 'yora', 'mia'], translation: 'Aquela mulher.' },
          { sentence: '___ chinãmakĩ.', answer: 'Ato', options: ['Ato', 'Noke', 'Mia'], translation: 'Sobre eles ficou pensando.' },
        ],
        voice: {
          bot: 'Ẽ yora.',
          botTranslation: 'Meus parentes.',
          expected: ['Noke neská akavo.', 'noke'],
          hint: 'Responda com a frase da narrativa: “Noke neská akavo.” (nós vamos fazer assim).',
        },
        communityPrompt: 'Escreva “eu”, “você”, “nós” e “eles” em marúbo e diga qual destas palavras quer dizer “pessoa”: yora ou shavo.',
      },
      {
        id: 'mzr-u1-l2',
        title: 'Ẽ, nokẽ, awẽ',
        kind: 'licao',
        words: ['ẽ', 'nokẽ', 'awẽ', 'vene', 'papa', 'txai'],
        cloze: [
          { sentence: 'Awẽ ___.', answer: 'vene', options: ['vene', 'papa', 'txai'], translation: 'O marido dela.' },
          { sentence: '___ chinã.', answer: 'Nokẽ', options: ['Nokẽ', 'Awẽ', 'Ẽ'], translation: 'Nosso pensamento.' },
          { sentence: 'Ẽ ___.', answer: 'papa', options: ['papa', 'vene', 'nokẽ'], translation: 'Meu pai.' },
        ],
        voice: {
          bot: 'Txai!',
          botTranslation: 'Cunhado! (forma de tratamento)',
          expected: ['Txai!', 'txai'],
          hint: 'Devolva o tratamento: “Txai!”. Entre os Marúbo, os primos cruzados se tratam por “txai”.',
        },
        communityPrompt: 'Use “ẽ” (meu) e “nokẽ” (nosso) antes de uma palavra da lição, como “ẽ papa” (meu pai).',
      },
      {
        id: 'mzr-u1-l3',
        title: 'Verõ, mevi, tae',
        kind: 'licao',
        words: ['verõ', 'mevi', 'tae', 'shao', 'imi', 'ana'],
        cloze: [
          { sentence: 'Nokẽ ___.', answer: 'mevi', options: ['mevi', 'verõ', 'imi'], translation: 'Nossas mãos.' },
          { sentence: 'Awá ___ tapã.', answer: 'shao', options: ['shao', 'ana', 'tae'], translation: 'Ponte de osso de anta.' },
          { sentence: 'Naí ___ri.', answer: 'tae', options: ['tae', 'mevi', 'shao'], translation: 'Na direção do pé do céu.' },
        ],
        voice: {
          bot: 'Ẽ mevi.',
          botTranslation: 'Minha mão.',
          expected: ['Nokẽ mevi.', 'mevi'],
          hint: 'Troque “meu” por “nosso”: “Nokẽ mevi.” (nossas mãos).',
        },
        communityPrompt: 'Escreva em marúbo as partes do corpo que você aprendeu: olho, mão, pé, osso, sangue e boca.',
      },
      {
        id: 'mzr-u1-l4',
        title: 'Prova: ẽ yora',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Txai! Ẽ shovo.',
          botTranslation: 'Cunhado! Minha maloca.',
          expected: ['Txai! Nokẽ shovo.', 'shovo'],
          hint: 'Devolva o tratamento e fale da maloca de todos: “Txai! Nokẽ shovo.” (Cunhado! Nossa maloca.).',
        },
        communityPrompt: 'Escreva uma apresentação curta: um tratamento (“Txai!”), uma frase com “ẽ” (meu) e outra com “nokẽ” (nosso).',
      },
    ],
  },
  {
    id: 'mzr-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Vari, naí, mai',
    emoji: '☀️',
    card: {
      id: 'mzr-c2',
      title: 'Os povos antigos e o Caminho-Morte',
      emoji: '🌄',
      history:
        'O canto “Wenía”, traduzido por Pedro Cesarino (2018) a partir da versão do pajé Armando Mariano Marubo Cherõpapa, conta o surgimento dos antepassados dos Marúbo. Eles surgem em vários povos (nawavo), com nomes de astros e de bichos: o Povo Sol (Vari Nawavo), o primeiro a surgir; o Povo Jaguar (Kamã Nawavo); o Povo Arara (Kana Nawavo); o Povo Macaco-Barrigudo (Txonavo). Até hoje, esses povos organizam o parentesco: quem é de um povo trata os de outro por “koka” (tio materno) ou “txai” (cunhado).',
      culture_tip:
        'Uma narrativa contada por Armando Marubo em 2007 explica o Caminho-Morte (Vei Vai): no tempo antigo, quem morria chegava direto à morada nas copas das árvores. Vei Maya, uma mulher que morreu picada por cobra, mandou os povos-espíritos das árvores fazerem um caminho ruim, cheio de perigos. Quem tem fala sabida (ese vana) consegue passar por ele; os outros ficam presos no caminho.',
      grammar_why:
        'O marúbo junta sufixos para dizer “muitos”, “não” e “quando”: “-vo” faz o plural (Yove Nawavo, o povo-espírito), “-rasĩ” junta um grupo inteiro (ronorasĩ, as cobras), “-ma” nega (nokoma, não chegavam) e o verbo muda conforme a ação foi agora há pouco ou há muito tempo (tenãseiti, morreu há muito tempo).',
      grammar_examples: [
        ['Vari Nawavo.', 'Povo Sol.'],
        ['Ronorasĩ kenaiti.', 'Chamava pelas cobras, há muito tempo.'],
        ['Rave nokoma, ravero nokoai.', 'Uns não chegavam, outros chegavam.'],
        ['Vai roakama.', 'Caminho ruim.'],
      ],
      character_guide: [
        ['-vo', 'plural, no fim da palavra', 'Yove Nawavo (o povo-espírito), Txonavo'],
        ['-rasĩ', 'grupo inteiro, “todos os…”', 'ronorasĩ (as cobras), nokẽ shenirasĩ (nossos antepassados)'],
        ['-ma', 'negação, no fim da palavra', 'nokoma (não chegavam), roakama (não bom)'],
        ['í, á', 'acento agudo: algumas palavras marcam a sílaba forte', 'naí (céu), awá (anta), westí (sozinho)'],
      ],
    },
    lessons: [
      {
        id: 'mzr-u2-l1',
        title: 'Vari, naí, mai',
        kind: 'licao',
        words: ['vari', 'naí', 'mai', 'waka', 'kaya', 'iwi'],
        cloze: [
          { sentence: '___ Nawavo.', answer: 'Vari', options: ['Vari', 'Mai', 'Waka'], translation: 'Povo Sol.' },
          { sentence: 'Na ___.', answer: 'mai', options: ['mai', 'naí', 'iwi'], translation: 'Esta terra.' },
          { sentence: 'Vei ___ Shavaya.', answer: 'Naí', options: ['Naí', 'Kaya', 'Vari'], translation: 'A morada do céu-morte.' },
        ],
        voice: {
          bot: 'Na mai.',
          botTranslation: 'Esta terra.',
          expected: ['Wa mai.', 'mai'],
          hint: 'Troque “esta” por “aquela”: “Wa mai.” (aquela terra).',
        },
        communityPrompt: 'Escreva em marúbo o que você vê ao redor: o sol, o céu, a terra, a água, o rio ou uma árvore.',
      },
      {
        id: 'mzr-u2-l2',
        title: 'Kamã, awá, rono',
        kind: 'licao',
        words: ['kamã', 'awá', 'rono', 'wapa', 'yapa', 'kana'],
        cloze: [
          { sentence: '___ Nawavo.', answer: 'Kamã', options: ['Kamã', 'Wapa', 'Yapa'], translation: 'Povo Jaguar.' },
          { sentence: '___ shao tapã.', answer: 'Awá', options: ['Awá', 'Rono', 'Kana'], translation: 'Ponte de osso de anta.' },
          { sentence: '___ Nawavo.', answer: 'Kana', options: ['Kana', 'Rono', 'Awá'], translation: 'Povo Arara.' },
        ],
        voice: {
          bot: 'Kamã Nawavo.',
          botTranslation: 'Povo Jaguar.',
          expected: ['Kana Nawavo.', 'kana'],
          hint: 'Diga outro povo do canto Wenía: “Kana Nawavo.” (Povo Arara).',
        },
        communityPrompt: 'Escolha um bicho da lição (onça, anta, cobra, cachorro, peixe ou arara) e escreva o nome dele em marúbo.',
      },
      {
        id: 'mzr-u2-l3',
        title: 'Roaka, ichná, wetsa',
        kind: 'licao',
        words: ['roaka', 'ichná', 'wetsa', 'rama', 'noko', 'oĩ'],
        cloze: [
          { sentence: 'Shavo ___.', answer: 'wetsa', options: ['wetsa', 'roaka', 'rama'], translation: 'Outra mulher.' },
          { sentence: 'Imi ___.', answer: 'ichná', options: ['ichná', 'roaka', 'oĩ'], translation: 'Sangue estragado.' },
          { sentence: 'Vana ___.', answer: 'roaka', options: ['roaka', 'ichná', 'noko'], translation: 'Fala bonita.' },
        ],
        voice: {
          bot: 'Rave nokoma.',
          botTranslation: 'Uns não chegavam.',
          expected: ['Ravero nokoai.', 'nokoai'],
          hint: 'Diga o contrário, sem o “-ma”: “Ravero nokoai.” (uns chegavam).',
        },
        communityPrompt: 'Escreva “bom” e “ruim” em marúbo e use um deles com uma palavra que você já sabe.',
      },
      {
        id: 'mzr-u2-l4',
        title: 'Prova: o Caminho-Morte',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Ronorasĩ kenaiti.',
          botTranslation: 'Ela chamava pelas cobras, há muito tempo.',
          expected: ['Tenãseiti.', 'tenãseiti'],
          hint: 'Continue a história de Vei Maya com o passado remoto: “Tenãseiti.” (morreu, há muito tempo).',
        },
        communityPrompt: 'Conte em português, com duas ou três palavras marúbo, o que é o Caminho-Morte (Vei Vai) e por que a fala sabida ajuda a atravessá-lo.',
      },
    ],
  },
];
