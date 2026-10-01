import type { StorySeed } from '../types';

/**
 * Histórias interativas do kaiowá — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas em terras indígenas kaiowá reais, confirmadas em fontes específicas do kaiowá (ver
 * cabeçalho de vocabulario.ts): a Te'yikue, no município de Amambai (MS), é a terra indígena central
 * da tese de doutorado do pesquisador kaiowá Eliel Benites, «A Busca do Teko Araguyje» (UFGD, 2022);
 * Caarapó (MS) é citada por pt.wikipedia.org/wiki/Língua_caiouá como o local da primeira experiência
 * de ensino bilíngue kaiowá-português, em 1997, na Escola Municipal de Caarapó. As personagens são
 * fictícias — não usam o nome de nenhuma pessoa real citada nas fontes — e falam só o que já foi
 * confirmado: nenhuma pergunta é construída por semelhança com o guarani paraguaio ou o mbyá, e
 * nenhuma personagem diz ao jogador quem ele é — o jogador escolhe sempre a própria fala.
 */
export const STORIES_KGK: StorySeed[] = [
  {
    id: 'kgk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aguyjevete, tekoha Te\'yikue!',
    emoji: '👋',
    summary: 'Uma jari (avó, líder espiritual) te recebe na tekoha Te\'yikue, em Amambai (MS), e você troca as primeiras palavras em ñe\'ẽ kaiowá.',
    cultural_context:
      'A Te\'yikue é uma terra indígena kaiowá real, no município de Amambai (Mato Grosso do Sul): é o cenário central da tese de doutorado do pesquisador kaiowá Eliel Benites sobre o teko araguyje, o “jeito sagrado de ser” (UFGD, 2022).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aguyjevete!',
        translation: 'Muito obrigado(a)! (também usado para dar boas-vindas)',
        emoji: '🙌',
        choices: [
          { text: 'Aguyjevete!', translation: 'Muito obrigado(a)! (devolvendo)', next: 'apresentacao' },
          { text: 'Xe karai.', translation: 'Eu sou um não indígena.', wrong: 'Isso ainda não responde à saudação dela. Devolva com “Aguyjevete!”.' },
        ],
      },
      apresentacao: {
        text: 'Xe jari.',
        translation: 'Eu sou a avó (líder espiritual).',
        emoji: '👵',
        choices: [
          { text: 'Xe ava.', translation: 'Eu sou gente (uma pessoa).', next: 'tekoha' },
          { text: 'Peteĩ jaguarete.', translation: 'Uma onça.', wrong: 'Isso não tem nada a ver com se apresentar. Diga quem você é começando com “Xe…”.' },
        ],
      },
      tekoha: {
        text: 'Ko tekoha Te\'yikue.',
        translation: 'Esta é a tekoha Te\'yikue.',
        emoji: '🏘️',
        choices: [
          { text: 'Tekoha porã!', translation: 'A aldeia é boa/bonita!', next: 'final' },
          { text: 'Mokõi gua\'a.', translation: 'Duas araras.', wrong: 'Ela está te mostrando a aldeia, não araras. Descreva a tekoha com “porã”.' },
        ],
      },
      final: {
        text: 'Aguyjevete! Nhãne reko.',
        translation: 'Muito obrigada! Nosso jeito de ser (de todos nós).',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'Aguyjevete!',
          message: 'Você conheceu a tekoha Te\'yikue e trocou as primeiras palavras em ñe\'ẽ kaiowá.',
        },
      },
    },
    glossary: [
      ['aguyjevete', 'muito obrigado(a); bem-vindo(a)'],
      ['xe / ha\'e', 'eu / ele, ela'],
      ['tekoha', 'aldeia, território'],
      ['porã', 'bom, bonito'],
    ],
  },
  {
    id: 'kgk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ka\'aguy: a mata perto de Caarapó',
    emoji: '🌞',
    summary: 'Um tamõi (avô, líder espiritual) mostra a mata (ka\'aguy) perto da escola bilíngue de Caarapó (MS), fundada em 1997.',
    cultural_context:
      'Caarapó é um município do Mato Grosso do Sul com uma terra indígena kaiowá; foi lá que, em 1997, aconteceu uma das primeiras experiências de ensino bilíngue kaiowá-português do estado, na Escola Municipal de Caarapó (conforme pt.wikipedia.org/wiki/Língua_caiouá).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aguyjevete! Ko ka\'aguy.',
        translation: 'Muito obrigado! Esta é a mata.',
        emoji: '🌲',
        choices: [
          { text: 'Aguyjevete! Ka\'aguy guasu.', translation: 'Muito obrigado! A mata é grande.', next: 'natureza' },
          { text: 'Peteĩ mbaraka.', translation: 'Um chocalho sagrado.', wrong: 'Isso não responde à saudação. Diga “Aguyjevete” e descreva a mata com “guasu”.' },
        ],
      },
      natureza: {
        text: 'Ko kwarahy, ko y.',
        translation: 'Este é o sol, esta é a água.',
        emoji: '☀️',
        choices: [
          { text: 'Y porã.', translation: 'A água é boa.', next: 'animais' },
          { text: 'Mbohapy jari.', translation: 'Três avós.', wrong: 'Isso não descreve a água. Fale de “y” (água) com “porã” (boa).' },
        ],
      },
      animais: {
        text: 'Ko jaguarete, ko gua\'a.',
        translation: 'Esta é a onça, esta é a arara.',
        emoji: '🦜',
        choices: [
          { text: 'Jaguarete hũ, gua\'a pytã.', translation: 'A onça é preta, a arara é vermelha.', next: 'final' },
          { text: 'Irundy óga.', translation: 'Quatro casas.', wrong: 'Você está descrevendo a onça e a arara, não contando casas. Use “hũ” ou “pytã”.' },
        ],
      },
      final: {
        text: 'Aguyjevete! Peẽ ava porã.',
        translation: 'Muito obrigado! Vocês são boas pessoas.',
        emoji: '🌿',
        ending: {
          tone: 'bom',
          title: 'Aguyjevete!',
          message: 'Você caminhou pela mata perto de Caarapó e aprendeu a nomear a natureza e os animais em ñe\'ẽ kaiowá.',
        },
      },
    },
    glossary: [
      ['ka\'aguy / kwarahy', 'mata / sol'],
      ['jaguarete / gua\'a', 'onça / arara'],
      ['hũ / pytã', 'preto / vermelho'],
      ['guasu', 'grande'],
    ],
  },
];
