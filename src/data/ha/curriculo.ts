import type { UnitSeed } from '../types';

/**
 * Trilha do hauçá: por enquanto só as duas unidades do nível A1 (o pacote está marcado como
 * incompleto — ver `incomplete` em index.ts). As de A2 ao C2 chegam depois.
 * Fontes: Wikipedia (fatos sobre o hauçá, alfabeto boko, gênero gramatical), Omniglot (frases de
 * cumprimento), Wiktionary (gênero e forma possuída dos substantivos usados nos exemplos).
 */
export const UNITS_HA: UnitSeed[] = [
  {
    id: 'ha-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Sannu! Matakan farko',
    emoji: '👋',
    card: {
      id: 'ha-c1',
      title: 'A língua do Sahel central',
      emoji: '🕌',
      history:
        'O hauçá pertence ao ramo chádico da família afro-asiática — é parente distante do árabe e do hebraico, não do suaíli nem do iorubá, que são línguas banta e volta-nígero-congolesas. É a língua africana nativa com mais falantes: cerca de 94 milhões de pessoas a falam, entre nativos e segunda língua, sobretudo no norte da Nigéria e no Níger, onde se tornou língua oficial única em 2025. Tradicionalmente se escrevia em ajami, uma adaptação do alfabeto árabe, usada desde o século XVII; hoje a escrita mais comum é o boko, um alfabeto latino criado nos anos 1930 pela administração colonial britânica.',
      culture_tip:
        'Cumprimentar é um ritual social importante entre os hauçás: é comum perguntar pela saúde, pela família e até pelo trabalho antes de ir ao assunto principal de uma conversa — pular direto para o pedido é visto como falta de educação.',
      grammar_why:
        'O hauçá tem um “é” que concorda em gênero: “ne” depois de palavra masculina, “ce” depois de feminina — não importa quem fala. “Ni malami ne” (Eu sou professor) e “Ni malama ce” (Eu sou professora) mudam o “ni” nunca, só o final.',
      grammar_examples: [
        ['Sannu! Sunana Linu.', 'Oi! Meu nome é Linu.'],
        ['Kana lahiya?', 'Você está bem? (para homem)'],
        ['Shi malami ne.', 'Ele é professor.'],
        ['Ita malama ce.', 'Ela é professora.'],
      ],
      character_guide: [
        ['ɓ', 'implosiva: “b” com a garganta puxando o ar para dentro', 'ɓarawo (ladrão)'],
        ['ɗ', 'implosiva, igual mas com “d”', 'ɗan’uwa (irmão)'],
        ['ƙ', 'ejetiva: “k” seco, fechado na garganta', 'ƙafa (pé)'],
        ['ƴ (ou ’y)', 'aproximante presa na garganta; comum vê-la só como apóstrofo', '’yar’uwa (irmã)'],
        ['sh', 'como o “x” de “xadrez”', 'shayi (chá)'],
        ['ts', 'ejetiva: “ts” seco, fechado na garganta', 'tsuntsu (pássaro)'],
      ],
    },
    lessons: [
      {
        id: 'ha-u1-l1',
        title: 'Sannu, na gode, sai an jima!',
        kind: 'licao',
        words: ['sannu', 'sannu da zuwa', 'na gode', 'don Allah', 'sai an jima', 'lafiya lau'],
        cloze: [
          { sentence: '___! Kana lahiya?', answer: 'Sannu', options: ['Sannu', 'Na gode', 'Sai an jima'], translation: 'Oi! Você está bem?' },
          { sentence: 'Ruwa, ___!', answer: 'don Allah', options: ['don Allah', 'na gode', 'sai an jima'], translation: 'Água, por favor!' },
          { sentence: '___, sai gobe!', answer: 'na gode', options: ['na gode', 'sannu', 'lafiya lau'], translation: 'Obrigado, até amanhã!' },
        ],
        voice: {
          bot: 'Sannu! Kana lahiya?',
          botTranslation: 'Oi! Você está bem?',
          expected: ['Lafiya lau, na gode!', 'lafiya lau', 'na gode'],
          hint: 'Responda que está muito bem e agradeça: “Lafiya lau, na gode!”.',
        },
        communityPrompt: 'Escreva três expressões em hauçá: um cumprimento (“Sannu”), um agradecimento (“Na gode”) e uma despedida (“Sai an jima”).',
      },
      {
        id: 'ha-u1-l2',
        title: 'Ni, kai, ke, shi, ita',
        kind: 'licao',
        words: ['ni', 'kai', 'ke', 'shi', 'ita', 'suna'],
        cloze: [
          { sentence: '___ malami ne.', answer: 'Shi', options: ['Shi', 'Ita', 'Ni'], translation: 'Ele é professor.' },
          { sentence: '___ malama ce.', answer: 'Ita', options: ['Ita', 'Shi', 'Kai'], translation: 'Ela é professora.' },
          { sentence: 'Wa ke can? — ___ ne.', answer: 'Ni', options: ['Ni', 'Kai', 'Shi'], translation: 'Quem está aí? — Sou eu.' },
        ],
        voice: {
          bot: 'Sannu! Mi sunanka?',
          botTranslation: 'Oi! Qual é o seu nome?',
          expected: ['Sunana Lúcia.', 'sunana', 'ni'],
          hint: 'Diga seu nome com “Sunana…”.',
        },
        communityPrompt: 'Apresente-se em hauçá: diga seu nome com “Sunana…” e, se quiser, se é “malami ne” ou “malama ce”.',
      },
      {
        id: 'ha-u1-l3',
        title: 'Jarrabawa: matakan farko',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Sannu! Mi sunanka? Kana lahiya?',
          botTranslation: 'Oi! Qual é o seu nome? Você está bem?',
          expected: ['Sannu! Sunana Lúcia. Lafiya lau, na gode!', 'sunana', 'lafiya lau', 'sannu'],
          hint: 'Devolva o cumprimento (“Sannu!”), diga seu nome com “Sunana…” e responda “Lafiya lau, na gode!”.',
        },
        communityPrompt: 'Escreva uma apresentação completa: cumprimento (“Sannu”), nome (“Sunana…”) e como você está (“Lafiya lau”).',
      },
    ],
  },
  {
    id: 'ha-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Iyali da abinci',
    emoji: '👪',
    card: {
      id: 'ha-c2',
      title: 'Hospitalidade: comida para quem chega',
      emoji: '🍽️',
      history:
        'A hospitalidade é um valor central na cultura hauçá: receber uma visita com comida e bebida é quase uma obrigação social, e recusar um convite para comer pode soar como desfeita. A família extensa — pai, mãe, irmãos, tios e avós morando perto ou na mesma casa — é a base da vida social tradicional, sobretudo nas cidades-estado históricas do norte da Nigéria, como Kano e Katsina.',
      culture_tip:
        'Ao receber chá (shayi) ou água (ruwa) como visita, aceitar é visto como gentileza; recusar sem um bom motivo pode soar indelicado.',
      grammar_why:
        'Para dizer “de fulano”, o hauçá gruda um sufixo no fim do substantivo possuído: “-n” nos masculinos (“gidan Audu”, a casa do Audu), “-r” nos femininos terminados em “-a” (“motar Amina”, o carro da Amina) — nada de um “de” solto como em português.',
      grammar_examples: [
        ['Ina da ɗan’uwa da ’yar’uwa.', 'Eu tenho um irmão e uma irmã.'],
        ['Gidan Audu.', 'A casa do Audu.'],
        ['Motar Amina.', 'O carro da Amina.'],
        ['Ruwa ko shayi?', 'Água ou chá?'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'ha-u2-l1',
        title: 'Iyalina',
        kind: 'licao',
        words: ['uba', 'uwa', 'ɗan’uwa', '’yar’uwa', 'yaro', 'yarinya'],
        cloze: [
          { sentence: 'Wannan ___ ne.', answer: 'uba', options: ['uba', 'yaro', 'ɗan’uwa'], translation: 'Este é o pai.' },
          { sentence: 'Wannan ___ ce.', answer: 'uwa', options: ['uwa', 'yarinya', '’yar’uwa'], translation: 'Esta é a mãe.' },
          { sentence: 'Ina da ___.', answer: 'ɗan’uwa', options: ['ɗan’uwa', '’yar’uwa', 'yaro'], translation: 'Eu tenho um irmão.' },
        ],
        voice: {
          bot: 'Kana da ɗan’uwa ko ’yar’uwa?',
          botTranslation: 'Você tem irmão ou irmã?',
          expected: ['Ina da ɗan’uwa da ’yar’uwa.', 'ina da', 'ɗan’uwa'],
          hint: 'Responda com “Ina da…” e o nome do parente.',
        },
        communityPrompt: 'Descreva sua família em hauçá: quem você tem, usando “Ina da…” (uba, uwa, ɗan’uwa, ’yar’uwa).',
      },
      {
        id: 'ha-u2-l2',
        title: 'Ruwa, abinci da shayi',
        kind: 'licao',
        words: ['ruwa', 'abinci', 'shinkafa', 'nama', 'madara', 'shayi'],
        cloze: [
          { sentence: '___ da nama.', answer: 'shinkafa', options: ['shinkafa', 'ruwa', 'madara'], translation: 'Arroz e carne.' },
          { sentence: '___, don Allah!', answer: 'Ruwa', options: ['Ruwa', 'Shayi', 'Madara'], translation: 'Água, por favor!' },
          { sentence: 'Ina da ___.', answer: 'shayi', options: ['shayi', 'ruwa', 'abinci'], translation: 'Eu tenho chá.' },
        ],
        voice: {
          bot: 'Ruwa ko shayi?',
          botTranslation: 'Água ou chá?',
          expected: ['Shayi, don Allah.', 'shayi', 'ruwa'],
          hint: 'Escolha “ruwa” ou “shayi” e peça com “don Allah”.',
        },
        communityPrompt: 'Escreva o que você gosta de beber e comer, usando “ruwa”, “shayi”, “abinci”, “shinkafa” e “nama”.',
      },
      {
        id: 'ha-u2-l3',
        title: 'Jarrabawa: iyali da abinci',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Kana da ɗan’uwa ko ’yar’uwa? Ruwa ko shayi?',
          botTranslation: 'Você tem irmão ou irmã? Água ou chá?',
          expected: ['Ina da ɗan’uwa. Shayi, don Allah.', 'ina da', 'shayi'],
          hint: 'Diga quem você tem na família com “Ina da…” e escolha “ruwa” ou “shayi” com “don Allah”.',
        },
        communityPrompt: 'Escreva cinco frases sobre sua família e o que você come e bebe, usando “Ina da…”, “ne” e “ce”.',
      },
    ],
  },
];
