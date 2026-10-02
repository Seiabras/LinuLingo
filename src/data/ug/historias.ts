import type { StorySeed } from '../types';

/**
 * Histórias interativas do uigur — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Em cada nó, o jogador escolhe a própria fala e ação (nunca um NPC decidindo por ele), e toda
 * escolha errada mostra uma dica e permanece no mesmo nó — sem becos sem saída.
 */
export const STORIES_UG: StorySeed[] = [
  {
    id: 'ug-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ياخشىمۇسىز!',
    emoji: '👋',
    summary: 'Alguém cumprimenta você e mostra um livro: a sua primeira conversa em uigur.',
    cultural_context:
      '“Yaxshimusiz!” (ياخشىمۇسىز) é o cumprimento formal mais comum em uigur — a própria palavra já junta “yaxshi” (bom) + “-mu” (pergunta) + “-siz” (você, formal), segundo o Wikcionário.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ياخشىمۇسىز!',
        translation: 'Olá! (cumprimento formal)',
        emoji: '🙋',
        choices: [
          { text: 'ياخشىمۇسىز! ھەئە، مەن ياخشى.', translation: 'Olá! Sim, eu estou bem.', next: 'bem' },
          { text: 'ياق.', translation: 'Não.', wrong: 'Alguém acabou de cumprimentar você: responder só “não” não faz sentido aqui. Devolva o cumprimento com “Yaxshimusiz!”.' },
        ],
      },
      bem: {
        text: 'رەھمەت! بۇ كىتاب ياخشىمۇ؟',
        translation: 'Obrigado(a)! Este livro é bom?',
        emoji: '📖',
        choices: [
          { text: 'ھەئە، بۇ كىتاب ياخشى.', translation: 'Sim, este livro é bom.', next: 'final' },
          { text: 'مەن ياخشى.', translation: 'Eu estou bem.', wrong: 'Isso não responde sobre o livro. Use “he\'e” ou “yaq” e fale do livro (“bu kitab…”).' },
        ],
      },
      final: {
        text: 'ياخشى! رەھمەت!',
        translation: 'Que bom! Obrigado(a)!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ياخشى!', message: 'Você teve a sua primeira conversa em uigur!' },
      },
    },
    glossary: [
      ['ياخشىمۇسىز', 'olá (formal)'],
      ['ھەئە', 'sim'],
      ['رەھمەت', 'obrigado'],
      ['كىتاب', 'livro'],
    ],
  },
  {
    id: 'ug-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'بۇ ئۆي',
    emoji: '🏠',
    summary: 'Você visita uma casa, conhece a família e prova o nan.',
    cultural_context:
      'O nan (نان), um pão redondo, está entre os pratos tradicionais uigures mais citados, ao lado do laghman e do manti, segundo a Wikipédia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ياخشىمۇسىز! بۇ ئۆي.',
        translation: 'Olá! Esta é a casa.',
        emoji: '🏠',
        choices: [
          { text: 'ئۆي چوڭ!', translation: 'A casa é grande!', next: 'familia' },
          { text: 'بىر، ئىككى، ئۈچ.', translation: 'Um, dois, três.', wrong: 'Isso não tem nada a ver com a casa. Diga o que acha dela, com “öy chong” (a casa é grande).' },
        ],
      },
      familia: {
        text: 'رەھمەت! بۇ دادا، بۇ ئانا.',
        translation: 'Obrigado(a)! Este é o pai, esta é a mãe.',
        emoji: '👪',
        choices: [
          { text: 'ياخشىمۇسىز، دادا! ياخشىمۇسىز، ئانا!', translation: 'Olá, pai! Olá, mãe!', next: 'comida' },
          { text: 'ياق.', translation: 'Não.', wrong: 'Alguém acabou de apresentar a família: cumprimente-os com “yaxshimusiz”.' },
        ],
      },
      comida: {
        text: 'نان ياخشىمۇ؟',
        translation: 'O pão (nan) é bom?',
        emoji: '🍞',
        choices: [
          { text: 'ھەئە، نان ياخشى. رەھمەت!', translation: 'Sim, o pão está bom. Obrigado!', next: 'final' },
          { text: 'بىر كىتاب.', translation: 'Um livro.', wrong: 'A pergunta foi sobre o pão (nan), não sobre livros. Responda com “he\'e” ou “yaq”.' },
        ],
      },
      final: {
        text: 'ياخشى!',
        translation: 'Que bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ياخشى!', message: 'Você conheceu a família e provou o nan, o pão tradicional uigur.' },
      },
    },
    glossary: [
      ['ئۆي', 'casa'],
      ['دادا', 'pai'],
      ['ئانا', 'mãe'],
      ['نان', 'pão (naan)'],
    ],
  },
];
