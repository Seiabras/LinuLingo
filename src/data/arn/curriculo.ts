import type { UnitSeed } from '../types';

/**
 * Trilha do mapudungún: por enquanto só as duas unidades do nível A1 (pacote incompleto, ver
 * `incomplete` em index.ts). Fontes: en.wikipedia.org/wiki/Mapuche_language, pt.wikipedia.org/wiki/
 * Língua_mapuche, es.wikipedia.org/wiki/Idioma_mapuche, es.wikipedia.org/wiki/Mapuche (história e
 * cultura), es.wikipedia.org/wiki/Wenufoye (bandeira Wenufoye e as cores). As frases usadas nas lições
 * seguem o mesmo critério de vocabulario.ts: só combinações de palavras e padrões de frase já
 * verificados, nunca uma conjugação ou ordem de palavras inventada.
 */
export const UNITS_ARN: UnitSeed[] = [
  {
    id: 'arn-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mari mari! Os primeiros passos',
    emoji: '👋',
    card: {
      id: 'arn-c1',
      title: 'A língua da terra, numa região só',
      emoji: '🌋',
      history:
        'Mapudungún (literalmente “fala da terra”, de mapu “terra” + dungun “fala”) é a língua do povo mapuche, falada principalmente na Araucanía, no centro-sul do Chile, e também em comunidades do outro lado da Cordilheira dos Andes, nas províncias argentinas de Neuquén, Río Negro e Chubut. As estimativas de falantes variam bastante entre as fontes: a Wikipédia em português registra cerca de 440 mil, a em inglês cerca de 410 mil — em ambos os casos, a maioria são pessoas mais velhas, e um estudo de 2002 citado pela Wikipédia em inglês encontrou só 16% dos mapuches étnicos como falantes ativos. A classificação da própria língua é discutida entre linguistas: algumas fontes (como a SIL/Ethnologue) a colocam numa pequena família “araucana” junto com o huilliche (hoje praticamente extinto); a maioria dos linguistas contemporâneos, porém, prefere tratá-la como uma língua isolada, sem parentesco comprovado com nenhuma outra — a mesma situação do basco ou do tikuna, já neste app.',
      culture_tip:
        'A bandeira mapuche, chamada Wenufoye, tem cinco cores com nome próprio em mapudungún: “kelü” (vermelho), “karü” (verde), “lig” (branco), “kallfü” (azul) e “chod” (amarelo). Entre as cerimônias mapuches mais conhecidas estão o “ngillatun” (uma grande cerimônia de pedido/agradecimento) e o “We Tripantu”, o ano-novo mapuche; a “machi” é a figura espiritual que cuida da cura e das cerimônias, e a “trutruca” (uma trompa longa de colihue, um tipo de bambu) é um dos instrumentos tradicionais mais reconhecíveis.',
      grammar_why:
        'O mapudungún marca “quem fez a ação” dentro do próprio verbo, com um sufixo no fim da palavra: “-n” para “eu”, “-mi” (ou “-ymi”) para “tu/você”, “-y” para “ele/ela”. Por isso um verbo como “amun” já quer dizer “eu vou” sozinho, sem precisar do pronome “iñche” (eu) na frase — veja a tabela completa na aba Gramática.',
      grammar_examples: [
        ['¡Mari mari, lamngen!', 'Olá, amigo(a)!'],
        ['¿Chumleymi?', 'Como você está?'],
        ['Kümelen, kafey.', 'Estou bem, também.'],
        ['Iñche nien kiñe ruka.', 'Eu tenho uma casa.'],
      ],
      character_guide: [
        ['ü', 'vogal central fechada, entre o “u” e o “i” do português', 'küme (bom), antü (sol)'],
        ['ñ', 'como o “nh” do português', 'ñuke (mãe)'],
        ['ll', 'como o “lh” do português', 'kallfü (azul)'],
        ['ng', 'som nasal velar, inclusive no início da palavra', 'lamngen (irmão/irmã)'],
        ['tr', 'consoante retroflexa, sem equivalente exato em português', 'trutruca (trombeta cerimonial mapuche)'],
      ],
    },
    lessons: [
      {
        id: 'arn-u1-l1',
        title: 'Mari mari, pewkallal!',
        kind: 'licao',
        words: ['mari mari', 'pewkallal', 'chumleymi', 'kümelen', 'kafey', 'lamngen'],
        cloze: [
          { sentence: '¡___, lamngen!', answer: 'Mari mari', options: ['Mari mari', 'Pewkallal', 'Kümelen'], translation: 'Olá, amigo!' },
          { sentence: '¿___?', answer: 'Chumleymi', options: ['Chumleymi', 'Kafey', 'Pewkallal'], translation: 'Como você está?' },
          { sentence: 'Kümelen, ___.', answer: 'kafey', options: ['kafey', 'mari mari', 'pewkallal'], translation: 'Estou bem, também.' },
        ],
        voice: {
          bot: '¡Mari mari! ¿Chumleymi?',
          botTranslation: 'Olá! Como você está?',
          expected: ['Kümelen, kafey.', 'kümelen', 'kafey'],
          hint: 'Responda que está bem com “Kümelen” e acrescente “kafey” (também).',
        },
        communityPrompt: 'Escreva três palavras do cumprimento mapudungún: uma saudação (“mari mari”), uma pergunta de como está (“chumleymi”) e uma despedida (“pewkallal”).',
      },
      {
        id: 'arn-u1-l2',
        title: 'Iñche, eymi, fey',
        kind: 'licao',
        words: ['iñche', 'eymi', 'fey', 'iñchiñ', 'che', 'peñi'],
        cloze: [
          { sentence: '___ nien kiñe ruka.', answer: 'Iñche', options: ['Iñche', 'Eymi', 'Fey'], translation: 'Eu tenho uma casa.' },
          { sentence: '¿___ kafey?', answer: 'Eymi', options: ['Eymi', 'Iñche', 'Iñchiñ'], translation: 'Você também?' },
          { sentence: '¡Mari mari, ___!', answer: 'peñi', options: ['peñi', 'che', 'fey'], translation: 'Olá, irmão!' },
        ],
        voice: {
          bot: 'Iñche nien kiñe ruka. ¿Eymi kafey?',
          botTranslation: 'Eu tenho uma casa. Você também?',
          expected: ['Iñche kafey nien kiñe ruka.', 'iñche kafey', 'kafey'],
          hint: 'Diga que você também tem, com “Iñche kafey nien…”.',
        },
        communityPrompt: 'Escreva os pronomes “iñche” (eu), “eymi” (você) e “fey” (ele/ela) em três frases curtas, usando “kafey” (também).',
      },
      {
        id: 'arn-u1-l3',
        title: 'Prova: os primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: '¡Mari mari! ¿Chumleymi? ¿Eymi kafey nien kiñe ruka?',
          botTranslation: 'Olá! Como você está? Você também tem uma casa?',
          expected: ['Kümelen, kafey. Iñche kafey nien kiñe ruka.', 'kümelen', 'iñche kafey nien'],
          hint: 'Combine “Kümelen, kafey” com “Iñche kafey nien kiñe ruka”.',
        },
        communityPrompt: 'Escreva uma pequena apresentação: cumprimento (“mari mari”), como você está (“kümelen”) e uma frase com “nien” (eu tenho).',
      },
    ],
  },
  {
    id: 'arn-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ñi pu che: a família, a casa e os números',
    emoji: '👪',
    card: {
      id: 'arn-c2',
      title: 'A família, a casa e os números',
      emoji: '🔢',
      history:
        'A “ruka” tradicional mapuche é construída com madeira e palha, geralmente com uma única porta voltada para o nascer do sol. A liderança de uma comunidade era (e em muitos lugares ainda é) exercida por um “lonko” (chefe), termo que a Wikipédia em inglês registra também com o sentido original de “cabeça”. Vários dos nomes dos grandes grupos regionais mapuches vêm da própria palavra “mapu” (terra) combinada com um ponto cardeal ou uma paisagem: os “pewenche” são “a gente da terra do pewen” (a araucária), e os “lafkenche” são “a gente da terra do lafken” (o mar) — exatamente as duas palavras de natureza vistas nesta unidade.',
      culture_tip:
        'O sistema de números do mapudungún é decimal: de 1 a 10 há uma palavra para cada número (kiñe, epu, küla, meli, kechu, kayu, regle, pura, aylla, mari), e “mari” também é a base para números maiores — a própria palavra para “cem” é “pataka” e para “mil” é “warangka”, segundo a Wikipédia em espanhol.',
      grammar_why:
        'Nesta unidade aparecem dois pontos novos de gramática: o marcador de plural “pu” para seres animados (“pu wentru”, os homens) — bem diferente do “-s” do português — e a negação do verbo com o sufixo “-la-”, encaixado entre a raiz e a terminação de pessoa (“nien”, eu tenho → “nielan”, eu não tenho). Os dois têm um tópico próprio na aba Gramática.',
      grammar_examples: [
        ['Iñche pen kiñe ñuke.', 'Eu vejo uma mãe.'],
        ['Kiñe, epu, küla, meli, kechu, kayu.', 'Um, dois, três, quatro, cinco, seis.'],
        ['Iñche nien kiñe ruka.', 'Eu tenho uma casa.'],
        ['Iñche nielan kiñe ruka.', 'Eu não tenho uma casa.'],
      ],
      character_guide: null,
    },
    lessons: [
      {
        id: 'arn-u2-l1',
        title: 'Ñuke, chaw, ruka',
        kind: 'licao',
        words: ['ñuke', 'chaw', 'wentru', 'domo', 'ruka', 'mapu'],
        cloze: [
          { sentence: 'Iñche pen kiñe ___.', answer: 'ñuke', options: ['ñuke', 'chaw', 'ruka'], translation: 'Eu vejo uma mãe.' },
          { sentence: 'Iñche pen kiñe ___.', answer: 'chaw', options: ['chaw', 'domo', 'mapu'], translation: 'Eu vejo um pai.' },
          { sentence: 'Iñche nien kiñe ___.', answer: 'ruka', options: ['ruka', 'wentru', 'mapu'], translation: 'Eu tenho uma casa.' },
        ],
        voice: {
          bot: 'Iñche pen kiñe ñuke, kiñe chaw. ¿Eymi kafey?',
          botTranslation: 'Eu vejo uma mãe, um pai. Você também?',
          expected: ['Iñche kafey pen kiñe ruka.', 'iñche kafey pen', 'kafey'],
          hint: 'Diga o que você vê com “Iñche kafey pen kiñe…”.',
        },
        communityPrompt: 'Descreva a sua família e a sua casa em mapudungún: “ñuke” (mãe), “chaw” (pai), “ruka” (casa).',
      },
      {
        id: 'arn-u2-l2',
        title: 'Kiñe, epu, küla…',
        kind: 'licao',
        words: ['kiñe', 'epu', 'küla', 'meli', 'kechu', 'kayu'],
        cloze: [
          { sentence: '___ ruka.', answer: 'Kiñe', options: ['Kiñe', 'Epu', 'Küla'], translation: 'Uma casa.' },
          { sentence: '___ ruka.', answer: 'Epu', options: ['Epu', 'Meli', 'Kechu'], translation: 'Duas casas.' },
          { sentence: '___ ruka.', answer: 'Kayu', options: ['Kayu', 'Küla', 'Meli'], translation: 'Seis casas.' },
        ],
        voice: {
          bot: 'Kiñe, epu, küla, meli…',
          botTranslation: 'Um, dois, três, quatro…',
          expected: ['Kechu, kayu.', 'kechu', 'kayu'],
          hint: 'Continue a contagem: “kechu” (cinco), “kayu” (seis).',
        },
        communityPrompt: 'Conte de um a seis em mapudungún: kiñe, epu, küla, meli, kechu, kayu.',
      },
      {
        id: 'arn-u2-l3',
        title: 'Prova: a família, a casa e os números',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Iñche nien kiñe pichi ruka. Kiñe, epu, küla…',
          botTranslation: 'Eu tenho uma casa pequena. Um, dois, três…',
          expected: ['Meli, kechu, kayu.', 'meli', 'kayu'],
          hint: 'Continue a contagem até seis: “meli, kechu, kayu”.',
        },
        communityPrompt: 'Escreva cinco frases usando “Iñche nien” (eu tenho), “Iñche pen” (eu vejo) e os números de um a seis.',
      },
    ],
  },
];
