import type { UnitSeed } from '../types';

/**
 * Trilha do kaiowá: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts (sobretudo Valéria Faria
 * Cardoso, «Aspectos Morfossintáticos da Língua Kaiowá», tese de doutorado, Unicamp, 2008, e
 * pt.wikipedia.org/wiki/Língua_caiouá) e o relatório da tarefa. As frases evitam qualquer morfologia
 * verbal flexionada que não tenha sido confirmada nas fontes: como o kaiowá marca pessoa nos
 * “verbos” descritivos/adjetivos com prefixos próprios (que não documentamos em detalhe suficiente
 * para ensinar com segurança), os diálogos giram em torno de saudações, pronomes, substantivos com
 * numeral antes e adjetivo depois (ordem confirmada pela gramática), nunca de uma conjugação
 * inventada por semelhança com o guarani paraguaio ou o mbyá.
 */
export const UNITS_KGK: UnitSeed[] = [
  {
    id: 'kgk-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aguyjevete! Xe, ne, ha\'e',
    emoji: '👋',
    card: {
      id: 'kgk-c1',
      title: 'Kaiowá: pãi-tavyterã, povo do sul do Mato Grosso do Sul',
      emoji: '🌿',
      history:
        'O kaiowá (tavyterã ñe\'ẽ, “língua do povo tavyterã”, também avañe\'ẽ, “língua do povo”) é uma língua tupi-guarani viva, do mesmo subgrupo I do guarani paraguaio e do guarani mbyá. Segundo o Censo do IBGE de 2022, cerca de 38,6 mil pessoas a falam no Brasil — a segunda língua indígena mais falada do país —, além de cerca de 15 mil falantes no Paraguai e cerca de 510 na Argentina (Misiones). O povo se autodenomina paĩ-tavyterã (“habitante do povo da verdadeira terra futura”) e vive sobretudo no sul do Mato Grosso do Sul, ao longo dos rios Apa, Dourados e Ivinhema — em terras indígenas como Dourados, Caarapó e Amambai —, além do leste do Paraguai. Em 2024, o kaiowá se tornou língua cooficial no município de Amambai (MS). A descrição linguística mais detalhada da língua é a tese de doutorado de Valéria Faria Cardoso (Unicamp, 2008), e o dicionário bilíngue mais completo é o de Graciela Chamorro (2022, mais de 6 mil verbetes).',
      culture_tip:
        'A palavra “aguyjevete” liga-se a “aguyje”, um estado de maturidade e perfeição muito importante na espiritualidade kaiowá e guarani (o pesquisador kaiowá Eliel Benites dedica boa parte da sua tese de doutorado, UFGD, 2022, a esse conceito) — por isso funciona também como um agradecimento forte, “muito obrigado(a)”. A organização social kaiowá se baseia em famílias extensas lideradas por um tamõi (avô, líder) ou uma jari (avó, líder), reunidas em tekoha — territórios onde se pratica o teko, o modo de ser kaiowá.',
      grammar_why:
        'Os pronomes do kaiowá distinguem duas formas de “nós”, uma marca que o português não tem: “nhãne” inclui a pessoa com quem se fala, e “ore” não inclui. Para descrever algo na 3ª pessoa, basta juntar duas palavras, sem precisar de um verbo “ser”: “óga porã” já é “a casa é boa/bonita” — o adjetivo vem sempre depois do substantivo que descreve.',
      grammar_examples: [
        ['Aguyjevete!', 'Muito obrigado(a)!'],
        ['Xe ava.', 'Eu sou gente (uma pessoa).'],
        ['Ha\'e karai.', 'Ele é um não indígena (branco).'],
        ['Nhãne reko.', 'Nosso jeito de ser (de todos nós, incluindo quem ouve).'],
      ],
      character_guide: [
        ['\' (oclusiva glotal)', 'uma pausa curta na garganta, letra própria do kaiowá', 'ha\'e (ele, ela), a\'y (filho)'],
        ['x', 'som parecido com o “ch” do francês ou o “sh” do inglês', 'karai não tem x, mas “xe” (eu) tem'],
        ['nh', 'som do “nh” de “ninho”', 'nhãne (nós, incluindo quem ouve)'],
        ['y', 'uma vogal só do guarani, entre o “u” e o “i”', 'y (água), ywy (terra)'],
        ['ã, ẽ, ĩ, õ, ũ, ỹ', 'vogal nasal: sai pelo nariz', 'nhãne, peteĩ'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u1-l1',
        title: 'Aguyjevete, xe, ne, ha\'e',
        kind: 'licao',
        words: ['aguyjevete', 'porã', 'xe', 'ne', 'ha\'e', 'ava'],
        cloze: [
          { sentence: '“___!” (agradecendo)', answer: 'Aguyjevete', options: ['Aguyjevete', 'Porã', 'Ava'], translation: '“Muito obrigado(a)!”' },
          { sentence: '___ ava.', answer: 'Xe', options: ['Xe', 'Ne', 'Ha\'e'], translation: 'Eu sou gente (uma pessoa).' },
          { sentence: 'Ha\'e ___.', answer: 'porã', options: ['porã', 'ava', 'xe'], translation: 'Ele/ela é bom(boa).' },
        ],
        voice: {
          bot: 'Aguyjevete!',
          botTranslation: 'Muito obrigado(a)!',
          expected: ['Aguyjevete! Xe ava.', 'aguyjevete', 'porã'],
          hint: 'Agradeça de volta com “Aguyjevete!” e diga quem você é com “Xe…”.',
        },
        communityPrompt: 'Escreva uma frase curta de agradecimento com “Aguyjevete”, diga quem você é com “Xe…” e descreva alguém com “Ha\'e… porã”.',
      },
      {
        id: 'kgk-u1-l2',
        title: 'Nhãne, ore, peẽ, kunã, karai',
        kind: 'licao',
        words: ['nhãne', 'ore', 'peẽ', 'ha\'e kwery', 'kunã', 'karai'],
        cloze: [
          { sentence: '___ reko.', answer: 'Nhãne', options: ['Nhãne', 'Ore', 'Peẽ'], translation: 'Nosso jeito de ser (de todos nós, incluindo quem ouve).' },
          { sentence: '___ reko.', answer: 'Ore', options: ['Ore', 'Nhãne', 'Peẽ'], translation: 'Nosso jeito de ser (sem incluir quem ouve).' },
          { sentence: 'Peteĩ ___.', answer: 'kunã', options: ['kunã', 'karai', 'peẽ'], translation: 'Uma mulher.' },
        ],
        voice: {
          bot: 'Ore reko.',
          botTranslation: 'Nosso jeito de ser (sem incluir você).',
          expected: ['Nhãne reko.', 'nhãne', 'ore'],
          hint: 'Troque “ore” (não inclui quem ouve) por “nhãne” (inclui quem ouve).',
        },
        communityPrompt: 'Escreva frases com “nhãne” e “ore”, e descreva pessoas da aldeia com “kunã”, “karai” e “ha\'e kwery”.',
      },
      {
        id: 'kgk-u1-l3',
        title: 'Test: aguyjevete, xe, ha\'e',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aguyjevete! Xe ava.',
          botTranslation: 'Muito obrigado! Eu sou gente (uma pessoa).',
          expected: ['Aguyjevete! Ha\'e kunã.', 'aguyjevete', 'porã'],
          hint: 'Agradeça com “Aguyjevete” e descreva outra pessoa com “Ha\'e…”.',
        },
        communityPrompt: 'Escreva uma apresentação curta: agradecimento com “Aguyjevete”, quem você é (“Xe…”) e outra pessoa (“Ha\'e…”), usando “nhãne” ou “ore” para falar de “nós”.',
      },
    ],
  },
  {
    id: 'kgk-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ára, kwarahy, jasy: a natureza',
    emoji: '🌞',
    card: {
      id: 'kgk-c2',
      title: 'Ára: céu, dia e tempo numa só palavra',
      emoji: '☀️',
      history:
        'No kaiowá, “ára” é ao mesmo tempo “céu”, “dia” e “tempo” — uma só palavra para três ideias que o português separa. É também o nome do conceito central da tese de doutorado do pesquisador kaiowá Eliel Benites (UFGD, 2022), que descreve o “teko araguyje” (o “jeito de ser maduro e perfeito”) como parte da cosmologia do povo guarani e kaiowá. Tradicionalmente, a contagem kaiowá tem apenas quatro numerais próprios — peteĩ (um), mokõi (dois), mbohapy (três) e irundy (quatro) — e usa “heta” (“muitos”) para quantidades maiores; hoje em dia os números do português e do espanhol também são comuns no dia a dia, sobretudo na escola e no comércio.',
      culture_tip:
        'O avati morotĩ (milho branco) é sagrado para o povo kaiowá: rituais inteiros existem só para trazer e manter a sua força na aldeia. O mbaraka, um chocalho sagrado, acompanha os cantos-reza — e deu origem, por empréstimo muito antigo, à própria palavra portuguesa “maraca”.',
      grammar_why:
        'Para contar, o numeral vem sempre antes do substantivo: “mokõi gua\'a” é “duas araras”, nunca “gua\'a mokõi”. Já o adjetivo continua vindo depois do substantivo, como na primeira unidade: “kwarahy porã” é “o sol é bom/bonito”.',
      grammar_examples: [
        ['Kwarahy porã.', 'O sol é bom/bonito.'],
        ['Peteĩ y.', 'Uma (porção de) água.'],
        ['Mokõi jaguarete.', 'Duas onças.'],
        ['Mbohapy gua\'a.', 'Três araras.'],
      ],
      character_guide: [
        ['kw', 'som de “qu” de “quando”', 'kwarahy (sol)'],
        ['g/ng', 'o “g” pode soar como “ng” (nasal velar) em certas palavras', 'gua\'a (arara), de uma raiz com “ng”'],
        ['j', 'som parecido com o “dj” do inglês “juice”', 'jasy (lua), jaguarete (onça)'],
        ['ĩ, ũ', 'vogal nasal', 'peteĩ (um), irundy (quatro, sem nasal na última sílaba)'],
      ],
    },
    lessons: [
      {
        id: 'kgk-u2-l1',
        title: 'Kwarahy, jasy, y, ywy, tata, peteĩ',
        kind: 'licao',
        words: ['kwarahy', 'jasy', 'y', 'ywy', 'tata', 'peteĩ'],
        cloze: [
          { sentence: '___ porã.', answer: 'Kwarahy', options: ['Kwarahy', 'Jasy', 'Y'], translation: 'O sol é bom/bonito.' },
          { sentence: '___ porã.', answer: 'Ywy', options: ['Ywy', 'Tata', 'Y'], translation: 'A terra é boa.' },
          { sentence: '___ y.', answer: 'Peteĩ', options: ['Peteĩ', 'Tata', 'Jasy'], translation: 'Uma (porção de) água.' },
        ],
        voice: {
          bot: 'Peteĩ kwarahy.',
          botTranslation: 'Um sol.',
          expected: ['Peteĩ jasy.', 'peteĩ', 'jasy'],
          hint: 'Troque “kwarahy” (sol) por outra coisa da natureza, como “jasy” (lua), mantendo “peteĩ” (um).',
        },
        communityPrompt: 'Escreva frases com “___ porã” sobre o sol (kwarahy), a lua (jasy), a água (y) e a terra (ywy), e conte o fogo (tata) com “peteĩ”.',
      },
      {
        id: 'kgk-u2-l2',
        title: 'Mokõi, mbohapy, irundy: jaguarete, gua\'a, guyra',
        kind: 'licao',
        words: ['mokõi', 'mbohapy', 'irundy', 'jaguarete', 'gua\'a', 'guyra'],
        cloze: [
          { sentence: '___ jaguarete.', answer: 'Mokõi', options: ['Mokõi', 'Mbohapy', 'Irundy'], translation: 'Duas onças.' },
          { sentence: '___ gua\'a.', answer: 'Mbohapy', options: ['Mbohapy', 'Mokõi', 'Irundy'], translation: 'Três araras.' },
          { sentence: '___ guyra.', answer: 'Irundy', options: ['Irundy', 'Mokõi', 'Mbohapy'], translation: 'Quatro pássaros.' },
        ],
        voice: {
          bot: 'Mokõi jaguarete.',
          botTranslation: 'Duas onças.',
          expected: ['Mbohapy gua\'a.', 'mbohapy', 'irundy'],
          hint: 'Troque o número e o animal: três araras (“mbohapy gua\'a”) ou quatro pássaros (“irundy guyra”).',
        },
        communityPrompt: 'Conte animais da mata (ka\'aguy) com os números: “mokõi” (dois), “mbohapy” (três), “irundy” (quatro) — use “jaguarete”, “gua\'a” e “guyra”.',
      },
      {
        id: 'kgk-u2-l3',
        title: 'Test: ára, numerais e bichos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Aguyjevete! Peteĩ kwarahy, peteĩ jasy.',
          botTranslation: 'Muito obrigado! Um sol, uma lua.',
          expected: ['Aguyjevete! Mokõi gua\'a, mbohapy guyra.', 'peteĩ', 'mokõi'],
          hint: 'Agradeça e conte elementos da natureza e animais com os números de “peteĩ” a “irundy”.',
        },
        communityPrompt: 'Escreva seis frases contando elementos da natureza e animais da mata com os números “peteĩ” a “irundy”, usando pelo menos quatro palavras desta unidade.',
      },
    ],
  },
];
