import type { StorySeed } from '../types';

/**
 * Histórias interativas do guarani mbyá — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Ambientadas em tekoa (aldeias) mbyá reais, confirmadas em fontes específicas do mbyá
 * (ver cabeçalho de vocabulario.ts): Piraí, em Santa Catarina, é a aldeia onde Darci da Silva —
 * Karai Nhe'ery escreveu o TCC «Nhemongarai: Rituais de Batismo Mbya Guarani» (UFSC, 2020); Tekoa
 * Pindó Mirim, na Terra Indígena de Itapuã (Viamão, RS), é citada em reportagens da prefeitura de
 * Viamão sobre visitas públicas feitas pela própria comunidade. As personagens são fictícias — não
 * usam o nome de nenhuma pessoa real citada nas fontes — e falam só o que já foi confirmado: não há
 * pergunta construída por semelhança com o guarani paraguaio, e nenhuma personagem diz ao jogador
 * quem ele é — o jogador escolhe sempre a própria fala.
 */
export const STORIES_GUN: StorySeed[] = [
  {
    id: 'gun-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aguyjevete, tekoa Piraí!',
    emoji: '👋',
    summary: 'Uma anciã (xaryi) te recebe na tekoa Piraí, em Santa Catarina, e você troca as primeiras palavras em nhandeayvu.',
    cultural_context:
      'A tekoa (aldeia) Piraí, no norte de Santa Catarina, é uma comunidade mbyá real: foi lá que o professor indígena Darci da Silva — Karai Nhe\'ery escreveu, em guarani mbyá e português, o TCC sobre o ritual do nhemongarai que serviu de fonte para esta lição.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aguyjevete!',
        translation: 'Bem-vindo(a)! (de mãos erguidas)',
        emoji: '🙌',
        choices: [
          { text: 'Aguyjevete!', translation: 'Bem-vinda! (devolvendo a saudação)', next: 'apresentacao' },
          { text: 'Ha\'evete.', translation: 'Obrigado(a).', wrong: 'Ela ainda não fez nada para você agradecer: ela só te deu as boas-vindas. Devolva a saudação com “Aguyjevete!”.' },
        ],
      },
      apresentacao: {
        text: 'Xee xaryi.',
        translation: 'Eu sou a anciã (avó).',
        emoji: '👵',
        choices: [
          { text: 'Xee kunha.', translation: 'Eu sou mulher.', next: 'tekoa' },
          { text: 'Kova\'e kure.', translation: 'Isto é um porco.', wrong: 'Isso não tem nada a ver com se apresentar. Diga quem você é começando com “Xee…”.' },
        ],
      },
      tekoa: {
        text: 'Kova\'e tekoa Piraí.',
        translation: 'Esta é a aldeia Piraí.',
        emoji: '🏘️',
        choices: [
          { text: 'Tekoa porã!', translation: 'A aldeia é bonita!', next: 'final' },
          { text: 'Kova\'e jagua.', translation: 'Isto é um cachorro.', wrong: 'Ela está te mostrando a aldeia, não um cachorro. Descreva a tekoa com “tekoa porã”.' },
        ],
      },
      final: {
        text: 'Aguyjevete! Ha\'e nhandereko.',
        translation: 'Obrigada! Esse é o nosso jeito de viver.',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'Aguyjevete!',
          message: 'Você conheceu a tekoa Piraí e trocou as primeiras palavras em nhandeayvu, a língua mbyá.',
        },
      },
    },
    glossary: [
      ['aguyjevete', 'bem-vindo(a); muito obrigado(a)'],
      ['xee / ha\'e', 'eu / ele, ela'],
      ['tekoa', 'aldeia'],
      ['porã', 'bonito, bom'],
    ],
  },
  {
    id: 'gun-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tekoa Pindó Mirim: a natureza da aldeia',
    emoji: '🌞',
    summary: 'Um jovem xondaro (guardião) mostra a natureza ao redor da tekoa Pindó Mirim, em Itapuã, Viamão (RS).',
    cultural_context:
      'A tekoa Pindó Mirim fica na Terra Indígena de Itapuã, em Viamão (RS). A comunidade mbyá que vive lá recebe visitantes durante a Semana dos Povos Indígenas, com cantos, jogos tradicionais e uma caminhada guiada pela própria aldeia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aguyjevete! Kova\'e tekoa Pindó Mirim.',
        translation: 'Bem-vindo! Esta é a tekoa Pindó Mirim.',
        emoji: '🛡️',
        choices: [
          { text: 'Aguyjevete! Tekoa porã.', translation: 'Bem-vindo! A aldeia é bonita.', next: 'natureza' },
          { text: 'Kova\'e mboi.', translation: 'Isto é uma cobra.', wrong: 'Isso não responde à saudação. Diga “Aguyjevete” e descreva a aldeia com “porã”.' },
        ],
      },
      natureza: {
        text: 'Kova\'e kuaray, kova\'e y.',
        translation: 'Este é o sol, esta é a água.',
        emoji: '☀️',
        choices: [
          { text: 'Y porã.', translation: 'A água é boa.', next: 'animais' },
          { text: 'Peteĩ xaryi.', translation: 'Uma avó.', wrong: 'Isso não descreve a água. Fale de “y” (água) com “porã” (boa).' },
        ],
      },
      animais: {
        text: 'Kova\'e jagua, kova\'e guyra.',
        translation: 'Este é o cachorro, este é o pássaro.',
        emoji: '🐦',
        choices: [
          { text: 'Jagua kyrĩ, guyra porã.', translation: 'O cachorro é pequeno, o pássaro é bonito.', next: 'final' },
          { text: 'Irundy jakare.', translation: 'Quatro jacarés.', wrong: 'Você está descrevendo o cachorro e o pássaro, não contando jacarés. Use “kyrĩ” ou “porã”.' },
        ],
      },
      final: {
        text: 'Aguyjevete! Peẽ xondaro kuery.',
        translation: 'Obrigado! Vocês são os guardiões (desta terra).',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'Nhandeayvu!',
          message: 'Você caminhou pela tekoa Pindó Mirim e aprendeu a nomear a natureza em nhandeayvu, a língua mbyá.',
        },
      },
    },
    glossary: [
      ['kuaray / y', 'sol / água'],
      ['jagua / guyra', 'cachorro / pássaro'],
      ['kyrĩ', 'pequeno'],
      ['xondaro', 'guardião, guerreiro'],
    ],
  },
];
