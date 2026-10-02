import type { UnitSeed } from '../types';

/**
 * Trilha do okinawano: por enquanto só as duas unidades do nível A1 (pacote incompleto — ver
 * `incomplete` em index.ts). Fontes: ver o cabeçalho de vocabulario.ts e os comentários de
 * gramatica.ts. As frases usam só justaposição (pronome/demonstrativo + predicado + やん yan) ou
 * verbos/adjetivos terminados em -un/-san que já fecham a frase sozinhos — nunca a partícula や (ya),
 * cujas regras de fusão com a palavra anterior não puderam ser confirmadas com segurança (ver a nota
 * em vocabulario.ts).
 */
export const UNITS_RYU: UnitSeed[] = [
  {
    id: 'ryu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Haisai! Unju tā yan?',
    emoji: '👋',
    card: {
      id: 'ryu-c1',
      title: 'Uma língua ryukyuana, não um dialeto do japonês',
      emoji: '🏝️',
      history:
        'O okinawano (uchinaaguchi, 沖縄口) nasceu no Reino de Ryukyu, unificado em 1429 pelo rei Shō Hashi, com capital no castelo de Shuri — hoje um bairro de Naha, a capital de Okinawa. Em 1879 o Japão extinguiu o reino e criou a província de Okinawa; nas décadas seguintes o uso do okinawano foi reprimido nas escolas, e boa parte da geração mais nova passou a crescer falando japonês padrão em casa. Hoje a UNESCO classifica o okinawano como língua ameaçada, e a maioria de quem ainda fala fluentemente tem mais de 50 anos. Apesar do nome parecido com “Okinawa” e de usar a mesma mistura de hiragana, katakana e kanji do japonês, o okinawano NÃO é um dialeto do japonês: linguistas o classificam como uma língua ryukyuana do norte, um ramo do tronco japônico tão separado do ramo japonês quanto os dois são um do outro — as duas línguas vêm de um ancestral comum, mas não são mutuamente inteligíveis, e o vocabulário básico delas coincide em só cerca de 71%.',
      culture_tip:
        'A saudação muda com o gênero de quem fala, não de quem ouve: um homem diz “Haisai!”, uma mulher diz “Haitai!”, e “Hai!” serve para os dois. “Mensōre!” é o “bem-vindo” usado em lojas, hotéis e festivais por toda Okinawa, e “Nifēdēbiru!” é o “muito obrigado” mais formal.',
      grammar_why:
        'O okinawano, como o japonês, põe o verbo no fim da frase (sujeito-objeto-verbo). O verbo de ligação やん (yan, “ser/estar”) se liga direto a um substantivo, sem precisar de nenhuma partícula no meio: “Wan uchinaanchu yan” é, palavra por palavra, “eu okinawano(a) sou”.',
      grammar_examples: [
        ['Haisai! Wan Linu yan.', 'Oi! Eu sou o Linu.'],
        ['Unju tā yan?', 'Quem é você?'],
        ['Ari sū yan.', 'Ele é o pai.'],
        ['Kuri nū yan?', 'O que é isto?'],
      ],
      character_guide: [
          ['ー', 'alonga a vogal anterior (como um traço prolongando o som)', 'てぃーだ (tīda, sol), わったー (wattā, nós)'],
          ['ゐ', 'kana antigo para “wi”, que o japonês moderno não usa mais, mas o okinawano ainda emprega', 'ゐきが (wikiga, homem)'],
          ['ち', 'antes de alguns sons, soa “tch”, nunca “t” seco', 'うちなーんちゅ (uchinaanchu)'],
        ],
      },
    lessons: [
      {
        id: 'ryu-u1-l1',
        title: 'Haisai, haitai, hai',
        kind: 'licao',
        words: ['はいさい', 'はいたい', 'はい', 'めんそーれ', 'にふぇーでーびる', 'いー'],
        cloze: [
          { sentence: '___! (saudação informal dita por um homem)', answer: 'Haisai', options: ['Haisai', 'Haitai', 'Nifēdēbiru'], translation: 'Oi! (dito por um homem)' },
          { sentence: '___! (bem-vindo, numa loja)', answer: 'Mensōre', options: ['Mensōre', 'Hai', 'Ī'], translation: 'Bem-vindo(a)!' },
          { sentence: '___! (muito obrigado, formal)', answer: 'Nifēdēbiru', options: ['Nifēdēbiru', 'Haitai', 'Mensōre'], translation: 'Muito obrigado(a)!' },
        ],
        voice: {
          bot: 'Haisai!',
          botTranslation: 'Oi! (saudação informal dita por um homem)',
          expected: ['Haitai!', 'haitai', 'hai'],
          hint: 'Se você é mulher, responda “Haitai!”; se preferir uma forma neutra, “Hai!”.',
        },
        communityPrompt: 'Escreva as três formas de “oi” em okinawano — masculina (haisai), feminina (haitai) e neutra (hai) — e diga quando usar cada uma.',
      },
      {
        id: 'ryu-u1-l2',
        title: 'Wan, unju, ari',
        kind: 'licao',
        words: ['わん', 'うんじゅ', 'あり', 'わったー', 'うちなーんちゅ', 'やん'],
        cloze: [
          { sentence: '___ uchinaanchu yan.', answer: 'Wan', options: ['Wan', 'Unju', 'Ari'], translation: 'Eu sou okinawano(a).' },
          { sentence: '___ tā yan?', answer: 'Unju', options: ['Unju', 'Wattā', 'Ari'], translation: 'Quem é você?' },
          { sentence: 'Ari sū ___.', answer: 'yan', options: ['yan', 'wan', 'ari'], translation: 'Ele é o pai.' },
        ],
        voice: {
          bot: 'Unju tā yan?',
          botTranslation: 'Quem é você?',
          expected: ['Wan uchinaanchu yan.', 'wan', 'yan'],
          hint: 'Diga quem você é com “Wan … yan.” (eu sou…).',
        },
        communityPrompt: 'Apresente-se em okinawano: diga quem você é com “Wan … yan.” (eu sou…).',
      },
      {
        id: 'ryu-u1-l3',
        title: 'Test: haisai, haitai, hai',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Haisai! Unju tā yan?',
          botTranslation: 'Oi! Quem é você?',
          expected: ['Haitai! Wan uchinaanchu yan.', 'haisai', 'wan', 'yan'],
          hint: 'Devolva a saudação certa para o seu gênero e diga quem você é com “Wan … yan.”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: saudação (haisai/haitai/hai), “Wan … yan.” e “Nifēdēbiru!” para encerrar agradecendo.',
      },
    ],
  },
  {
    id: 'ryu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tīchi, tāchi, mīchi…',
    emoji: '🔢',
    card: {
      id: 'ryu-c2',
      title: 'Os números nativos — e onde eles param',
      emoji: '🔢',
      history:
        'Os numerais de 1 a 10 do okinawano (tīchi, tāchi, mīchi, yūchi, ichichi, muuchi, nanachi, yaachi, kukunuchi, tuu) são de origem japônica nativa, parentes dos números antigos do japonês (hitotsu, futatsu…), mas com forma própria — não são os mesmos números do japonês moderno. Acima de 10, porém, o okinawano não tem numeral nativo próprio registrado: usa diretamente os números do japonês. Isso é comum em línguas pequenas que convivem há séculos com uma língua maior: o vocabulário do dia a dia (contar até dez nos dedos, por exemplo) resiste mais do que o vocabulário usado em contas maiores, mais ligado à escola, ao comércio e à administração — áreas dominadas pelo japonês desde 1879.',
      culture_tip:
        'Apontar para uma parte do corpo e perguntar “Kuri nū yan?” (o que é isto?) é um jeito simples e real de praticar: a resposta vem sempre no mesmo molde, “Kuri … yan.” (isto é…).',
      grammar_why:
        'Adjetivos como まぎさん (magisan, “ser grande”) e くーさん (kūsan, “ser pequeno”) já são verbos completos sozinhos: “Umi magisan” (o mar é grande) não precisa de “yan” depois, porque o próprio adjetivo-verbo já fecha a frase — diferente de um substantivo-predicado, que sempre precisa de “yan” (“Kuri tī yan”, isto é a mão).',
      grammar_examples: [
        ['Kuri tī yan.', 'Isto é a mão.'],
        ['Kuri tīchi yan.', 'Isto é um (1).'],
        ['Umi magisan.', 'O mar é grande.'],
        ['Mayā kūsan.', 'O gato é pequeno.'],
      ],
      character_guide: [
        ['san (ーさん)', 'termina muitos adjetivos-verbo: “ser grande/pequeno/etc.”, sozinho já é uma frase', 'まぎさん (magisan), くーさん (kūsan)'],
        ['un (ーん)', 'termina a forma de dicionário dos verbos comuns, também já é uma frase completa', 'かむん (kamun, comer), ぬむん (numun, beber)'],
      ],
    },
    lessons: [
      {
        id: 'ryu-u2-l1',
        title: 'Tīchi, tāchi, mīchi, yūchi, ichichi, tuu',
        kind: 'licao',
        words: ['てぃーち', 'たーち', 'みーち', 'ゆーち', 'いちち', 'とぅー'],
        cloze: [
          { sentence: 'Kuri ___ yan. (um)', answer: 'tīchi', options: ['tīchi', 'tāchi', 'mīchi'], translation: 'Isto é um.' },
          { sentence: 'Kuri ___ yan. (quatro)', answer: 'yūchi', options: ['yūchi', 'ichichi', 'tuu'], translation: 'Isto é quatro.' },
          { sentence: 'Kuri ___ yan. (dez)', answer: 'tuu', options: ['tuu', 'mīchi', 'tāchi'], translation: 'Isto é dez.' },
        ],
        voice: {
          bot: 'Tīchi, tāchi, mīchi…',
          botTranslation: 'Um, dois, três…',
          expected: ['Yūchi.', 'yūchi', 'yūchi, ichichi'],
          hint: 'Continue a contagem: diga o próximo número, “yūchi” (quatro).',
        },
        communityPrompt: 'Escreva os números de 1 a 5 em okinawano (tīchi, tāchi, mīchi, yūchi, ichichi) e depois o 10 (tuu).',
      },
      {
        id: 'ryu-u2-l2',
        title: 'Tī, fisa, mī, mimi, hana, kuchi',
        kind: 'licao',
        words: ['てぃー', 'ふぃさ', 'みー', 'みみ', 'はな', 'くち'],
        cloze: [
          { sentence: 'Kuri ___ yan. (mão)', answer: 'tī', options: ['tī', 'fisa', 'mī'], translation: 'Isto é a mão.' },
          { sentence: 'Kuri ___ yan. (nariz)', answer: 'hana', options: ['hana', 'kuchi', 'mimi'], translation: 'Isto é o nariz.' },
          { sentence: 'Kuri ___ yan. (boca)', answer: 'kuchi', options: ['kuchi', 'hana', 'fisa'], translation: 'Isto é a boca.' },
        ],
        voice: {
          bot: 'Kuri nū yan?',
          botTranslation: 'O que é isto? (apontando para a boca)',
          expected: ['Kuri kuchi yan.', 'kuchi'],
          hint: 'Diga a parte do corpo com “Kuri … yan.” (isto é…).',
        },
        communityPrompt: 'Escreva três partes do corpo com “Kuri … yan.”: a mão (tī), o nariz (hana) e a boca (kuchi).',
      },
      {
        id: 'ryu-u2-l3',
        title: 'Test: números e corpo',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kuri nū yan? Tīchi, tāchi…?',
          botTranslation: 'O que é isto? Um, dois…?',
          expected: ['Kuri chiburu yan. Mīchi!', 'chiburu', 'mīchi'],
          hint: 'Diga a parte do corpo com “Kuri … yan.” e complete a contagem até três (mīchi).',
        },
        communityPrompt: 'Escreva uma frase com uma parte do corpo (“Kuri … yan.”) e conte de um a cinco em okinawano.',
      },
    ],
  },
];
