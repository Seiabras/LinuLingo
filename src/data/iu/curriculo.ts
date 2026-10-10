import type { UnitSeed } from '../types';

/**
 * Trilha do inuktitut: por enquanto só as duas unidades do nível A1 (curso incompleto — ver
 * `incomplete` em index.ts). Fontes no cabeçalho de vocabulario.ts: [WIKT], [OMNI], [WIKI].
 *
 * As frases são do [OMNI] (cumprimentos, “ᐊᑏ ᓂᕆᓕᖅᑕ”, “ᐅᓇ ᖃᔅᓯᑦ?”), com TRÊS exceções montadas por nós
 * pelas terminações de pessoa do [WIKI] («Inuit grammar»: -junga depois de vogal e -tunga depois de
 * consoante para “eu”), sobre verbos do [WIKT]: “ᓂᕆᔪᖓ” (eu como, de ᓂᕆᔪᖅ), “ᑳᒃᑐᖓ” (estou com fome, de
 * ᑳᒃᑐᖅ) e “ᐅᕙᖓ ᓕᓅᔪᖓ” (eu sou o Linu, com o -u- de “ser”, como no “...ᐅᔪᖓ” do [OMNI]).
 */
export const UNITS_IU: UnitSeed[] = [
  {
    id: 'iu-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ᐊᐃ! ᖃᓄᐃᑉᐱᑦ?',
    emoji: '👋',
    card: {
      id: 'iu-c1',
      title: 'Nunavut, “a nossa terra”',
      emoji: '🧊',
      // [WIKI] «Inuktitut» (falantes, oficial em Nunavut e nos Territórios do Noroeste; silabário dos
      // missionários, de 1840; ICI); [WIKT] s.v. “ᓄᓇᕗᑦ” (our land).
      history:
        'O inuktitut é a língua dos inuítes do leste do Canadá, de Nunavut, de Nunavik (no norte de Quebec) e de Nunatsiavut (no Labrador). Em 1999, o Canadá criou o território de Nunavut, cujo nome quer dizer “a nossa terra”; lá, a língua é oficial ao lado do inglês e do francês, e a maioria da população é inuíte. O inuktitut é parente do groenlandês e das línguas inuítes do Alasca, todas da família esquimó-aleúte. A escrita mais usada é um silabário criado por missionários no século XIX: cada sinal é uma sílaba inteira, e a forma do sinal gira conforme a vogal.',
      culture_tip:
        'Para agradecer, diz-se “ᖁᔭᓐᓇᒦᒃ” (qujannamiik), e quem recebe o agradecimento responde “ᐃᓛᓕ” (ilaali). E para pedir o nome de alguém, o jeito comum é perguntar “ᑭᓇᐅᕕᑦ?” (kinauvit?), literalmente “quem é você?”.',
      grammar_why:
        'O inuktitut cola pedaços no fim da palavra para dizer quem faz a ação. Depois de vogal, “eu” é -junga, “você” é -jutit e “ele, ela” é -juq; depois de consoante, o “j” vira “t”: -tunga, -tutit, -tuq. Por isso “ᓂᕆᔪᖅ” (nirijuq) é “ele come”, e “ᓂᕆᔪᖓ” (nirijunga) é “eu como”. Uma frase inteira pode caber numa palavra só.',
      grammar_examples: [
        ['ᓂᕆᔪᖅ.', 'Ele, ela come.'],
        ['ᓂᕆᔪᖓ.', 'Eu como.'],
        ['ᖃᓄᐃᙱᑦᑐᖓ.', 'Estou bem.'],
      ],
      character_guide: [
        ['ᐃ ᐅ ᐊ', 'as três vogais, i, u, a: o mesmo sinal, girado', 'ᐃᒡᓗ (iglu, casa)'],
        ['ᐄ ᐆ ᐋ', 'o ponto em cima alonga a vogal', 'ᐊᓈᓇ (anaana, mãe)'],
        ['ᐱ ᐳ ᐸ', 'pi, pu, pa: cada consoante tem uma série de três sinais', 'ᐸᓂᖅ (paniq, filha)'],
        ['ᑉ ᑦ ᒃ', 'o sinal pequeno, no alto, é a consoante sozinha no fim da sílaba', 'ᐃᓄᒃ (inuk, pessoa)'],
        ['ᖅ', 'o “q”, um “k” lá do fundo da garganta', 'ᓇᓄᖅ (nanuq, urso-polar)'],
        ['ᖅᑲ', 'um “q” antes de uma sílaba de “k” dobra o “q”: qqa', 'ᖃᖅᑲᖅ (qaqqaq, montanha)'],
      ],
    },
    lessons: [
      {
        id: 'iu-u1-l1',
        title: 'ᐊᐃ! ᖃᓄᐃᑉᐱᑦ?',
        kind: 'licao',
        words: ['ᐊᐃ', 'ᖃᓄᐃᑉᐱᑦ?', 'ᖃᓄᐃᙱᑦᑐᖓ', 'ᖁᔭᓐᓇᒦᒃ', 'ᐃᓛᓕ', 'ᑕᕝᕙᐅᔪᑎᑦ'],
        cloze: [
          { sentence: '___?', answer: 'ᖃᓄᐃᑉᐱᑦ', options: ['ᖃᓄᐃᑉᐱᑦ', 'ᖁᔭᓐᓇᒦᒃ', 'ᐃᓛᓕ'], translation: 'Como vai?' },
          { sentence: '___.', answer: 'ᖃᓄᐃᙱᑦᑐᖓ', options: ['ᖃᓄᐃᙱᑦᑐᖓ', 'ᑕᕝᕙᐅᔪᑎᑦ', 'ᐊᐃ'], translation: 'Estou bem.' },
          { sentence: '___!', answer: 'ᖁᔭᓐᓇᒦᒃ', options: ['ᖁᔭᓐᓇᒦᒃ', 'ᐃᓛᓕ', 'ᐄ'], translation: 'Obrigado!' },
        ],
        voice: {
          bot: 'ᖃᓄᐃᑉᐱᑦ?',
          botTranslation: 'Como vai?',
          expected: ['ᖃᓄᐃᙱᑦᑐᖓ.', 'ᖃᓄᐃᙱᑦᑐᖓ', 'qanuinngittunga'],
          hint: 'Diga que está bem: “ᖃᓄᐃᙱᑦᑐᖓ” (qanuinngittunga).',
        },
        communityPrompt: 'Escreva um cumprimento (“ᐊᐃ!”), a pergunta “ᖃᓄᐃᑉᐱᑦ?” e um agradecimento.',
      },
      {
        id: 'iu-u1-l2',
        title: 'ᑭᓇᐅᕕᑦ?',
        kind: 'licao',
        words: ['ᑭᓇᐅᕕᑦ?', 'ᐅᕙᖓ', 'ᐃᕝᕕᑦ', 'ᐅᕙᒍᑦ', 'ᑭᓇ', 'ᓇᓂ'],
        cloze: [
          { sentence: '___ ᓕᓅᔪᖓ.', answer: 'ᐅᕙᖓ', options: ['ᐅᕙᖓ', 'ᐃᕝᕕᑦ', 'ᑭᓇ'], translation: 'Eu sou o Linu.' },
          { sentence: '___?', answer: 'ᑭᓇᐅᕕᑦ', options: ['ᑭᓇᐅᕕᑦ', 'ᐄ', 'ᐋᒃᑲ'], translation: 'Qual é o seu nome? (quem é você?)' },
          { sentence: 'ᐅᓇ ___?', answer: 'ᖃᔅᓯᑦ', options: ['ᖃᔅᓯᑦ', 'ᓇᓂ', 'ᖃᖓ'], translation: 'Quanto custa isto?' },
        ],
        voice: {
          bot: 'ᑭᓇᐅᕕᑦ?',
          botTranslation: 'Qual é o seu nome? (quem é você?)',
          expected: ['ᐅᕙᖓ ᓕᓅᔪᖓ.', 'ᐅᕙᖓ ᓕᓅᔪᖓ', 'uvanga linuujunga'],
          hint: 'Diga “ᐅᕙᖓ ᓕᓅᔪᖓ” (uvanga linuujunga): eu sou o Linu.',
        },
        communityPrompt: 'Apresente-se: “ᐅᕙᖓ …ᐅᔪᖓ” (eu sou …) e pergunte o nome de alguém (“ᑭᓇᐅᕕᑦ?”).',
      },
      {
        id: 'iu-u1-l3',
        title: 'Prova: ᐊᐃ! ᖃᓄᐃᑉᐱᑦ?',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ᑐᙵᓱᒋᑦ!',
          botTranslation: 'Bem-vindo!',
          expected: ['ᖁᔭᓐᓇᒦᒃ!', 'ᖁᔭᓐᓇᒦᒃ', 'qujannamiik'],
          hint: 'Agradeça a acolhida: “ᖁᔭᓐᓇᒦᒃ!” (qujannamiik).',
        },
        communityPrompt: 'Escreva uma chegada: “ᑐᙵᓱᒋᑦ!”, “ᖃᓄᐃᑉᐱᑦ?”, “ᖃᓄᐃᙱᑦᑐᖓ. ᖁᔭᓐᓇᒦᒃ!”.',
      },
    ],
  },
  {
    id: 'iu-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ᐊᑏ ᓂᕆᓕᖅᑕ',
    emoji: '🍲',
    card: {
      id: 'iu-c2',
      title: 'O iglu, o trenó e o caiaque',
      emoji: '🛶',
      // [WIKT] s.v. “ᐃᒡᓗ” (house), “ᖃᒧᑏᒃ” (sled), “ᖃᔭᖅ” (tabela de traduções de “kayak”), “ᐅᓗ”; [WIKI]
      // «Inuit grammar» (singular, dual e plural: iglu, igluk, iglut; inuk, inuuk, inuit).
      history:
        'Algumas palavras do inuktitut correram o mundo. “ᐃᒡᓗ” (iglu) é simplesmente “casa”, qualquer casa: a casa de neve, que o português chama de iglu, é só um tipo dela. “ᖃᔭᖅ” (qajaq), o barco de caça de um lugar só, deu o “kayak” do inglês e o nosso caiaque. E “ᐅᓗ” (ulu), a faca em meia-lua das mulheres, é até hoje uma das ferramentas mais usadas na cozinha inuíte.',
      culture_tip:
        'Antes da refeição, convida-se todo mundo com “ᐊᑏ ᓂᕆᓕᖅᑕ!” (atii niriliqta), “vamos comer!”. A comida do campo, a “country food” — peixe, foca, caribu —, ainda é muito importante, e dividi-la com a família e os vizinhos é parte da cultura inuíte.',
      grammar_why:
        'O inuktitut conta em três números: um, dois e muitos. “ᐃᒡᓗ” (iglu) é uma casa, “ᐃᒡᓗᒃ” (igluk) são duas casas e “ᐃᒡᓗᑦ” (iglut), três ou mais. É daí que vem a palavra “inuit”: um inuíte é “ᐃᓄᒃ” (inuk), e o povo, os “ᐃᓄᐃᑦ” (inuit). E para dizer onde, cola-se -mi no fim: “ᐃᒡᓗᒥ” (iglumi) é “na casa”.',
      grammar_examples: [
        ['ᐃᒡᓗ', 'casa (uma)'],
        ['ᐃᒡᓗᒃ', 'duas casas'],
        ['ᐃᒡᓗᑦ', 'casas (três ou mais)'],
        ['ᐃᒡᓗᒥ', 'na casa'],
      ],
      character_guide: [
        ['-ᒃ', 'o final do dual (dois)', 'ᐃᒡᓗᒃ (igluk, duas casas)'],
        ['-ᑦ', 'o final do plural (três ou mais)', 'ᐃᒡᓗᑦ (iglut, casas)'],
        ['-ᒥ', 'em, no, na', 'ᐃᒡᓗᒥ (iglumi, na casa), ᓯᓚᒥ (silami, lá fora)'],
      ],
    },
    lessons: [
      {
        id: 'iu-u2-l1',
        title: 'ᐊᓈᓇ, ᐊᑖᑕ',
        kind: 'licao',
        words: ['ᐊᓈᓇ', 'ᐊᑖᑕ', 'ᐃᕐᓂᖅ', 'ᐸᓂᖅ', 'ᐃᓄᒃ', 'ᐃᒡᓗ'],
        cloze: [
          { sentence: '___ ᐊᑖᑕ.', answer: 'ᐊᓈᓇ', options: ['ᐊᓈᓇ', 'ᐃᕐᓂᖅ', 'ᐃᒡᓗ'], translation: 'Mãe, pai.' },
          { sentence: 'ᐃᒡᓗ, ᐃᒡᓗᒃ, ___.', answer: 'ᐃᒡᓗᑦ', options: ['ᐃᒡᓗᑦ', 'ᐃᒡᓗᒥ', 'ᐃᓄᒃ'], translation: 'Uma casa, duas casas, casas.' },
          { sentence: '___ ᐃᓄᐃᑦ.', answer: 'ᐃᓄᒃ', options: ['ᐃᓄᒃ', 'ᐃᕐᓂᖅ', 'ᐸᓂᖅ'], translation: 'Uma pessoa, o povo inuíte.' },
        ],
        voice: {
          bot: 'ᑭᓇ?',
          botTranslation: 'Quem?',
          expected: ['ᐊᓈᓇ.', 'ᐊᓈᓇ', 'anaana', 'ᐊᑖᑕ', 'ataata'],
          hint: 'Responda quem é: “ᐊᓈᓇ” (mãe) ou “ᐊᑖᑕ” (pai).',
        },
        communityPrompt: 'Escreva os nomes da sua família em inuktitut: “ᐊᓈᓇ” (mãe), “ᐊᑖᑕ” (pai)…',
      },
      {
        id: 'iu-u2-l2',
        title: 'ᓂᕿ, ᑏ, ᑳᐱ',
        kind: 'licao',
        words: ['ᓂᕿ', 'ᑏ', 'ᑳᐱ', 'ᓂᐊᖂᔮᖅ', 'ᓂᕆᔪᖅ', 'ᑳᒃᑐᖅ'],
        cloze: [
          { sentence: 'ᐊᑏ ___!', answer: 'ᓂᕆᓕᖅᑕ', options: ['ᓂᕆᓕᖅᑕ', 'ᓂᕆᔪᖅ', 'ᓂᕿ'], translation: 'Vamos comer!' },
          { sentence: '___, ᖁᔭᓐᓇᒦᒃ.', answer: 'ᑏ', options: ['ᑏ', 'ᕿᒻᒥᖅ', 'ᐃᒡᓗ'], translation: 'Chá, obrigado.' },
          { sentence: 'ᐄ! ___.', answer: 'ᑳᒃᑐᖓ', options: ['ᑳᒃᑐᖓ', 'ᑳᒃᑐᖅ', 'ᐃᓛᓕ'], translation: 'Sim! Estou com fome.' },
        ],
        voice: {
          bot: 'ᐊᑏ ᓂᕆᓕᖅᑕ!',
          botTranslation: 'Vamos comer!',
          expected: ['ᐄ! ᑳᒃᑐᖓ.', 'ᑳᒃᑐᖓ', 'kaaktunga', 'ᖁᔭᓐᓇᒦᒃ'],
          hint: 'Aceite: “ᐄ! ᑳᒃᑐᖓ” (sim! estou com fome).',
        },
        communityPrompt: 'Escreva o que você come e bebe: “ᓂᕿ”, “ᑏ”, “ᑳᐱ”, “ᓂᐊᖂᔮᖅ”…',
      },
      {
        id: 'iu-u2-l3',
        title: 'Prova: ᐊᑏ ᓂᕆᓕᖅᑕ',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'ᐅᓇ ᖃᔅᓯᑦ?',
          botTranslation: 'Quanto custa isto?',
          expected: ['ᑕᓪᓕᒪᑦ.', 'ᑕᓪᓕᒪᑦ', 'tallimat', 'ᐱᖓᓱᑦ', 'ᒪᕐᕉᒃ', 'ᐊᑕᐅᓯᖅ', 'ᓯᑕᒪᑦ'],
          hint: 'Responda com um número: “ᑕᓪᓕᒪᑦ” (cinco), “ᐱᖓᓱᑦ” (três)…',
        },
        communityPrompt: 'Escreva um convite para comer (“ᐊᑏ ᓂᕆᓕᖅᑕ!”) e o que tem na mesa.',
      },
    ],
  },
];
