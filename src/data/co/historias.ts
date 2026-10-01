import type { StorySeed } from '../types';

/** Histórias interativas do corso — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_CO: StorySeed[] = [
  {
    id: 'co-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonghjornu in Bastia',
    emoji: '👋',
    summary: 'Você conhece Anna no porto de Bastia e faz a sua primeira conversa em corso.',
    cultural_context: 'Bastia é a maior cidade do norte da Córsega e o principal porto de ligação com o continente francês e a Itália.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonghjornu! Mi chjamu Anna. Cumu va?',
        translation: 'Bom dia! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bè, grazie! È tù?', translation: 'Bem, obrigado! E você?', next: 'be' },
          { text: 'Avvedeci!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      be: {
        text: 'Dinò bè! Di induve sì?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Sò di San Paulu.', translation: 'Sou de São Paulo.', next: 'final_bon' },
          { text: 'Bevu acqua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use «Sò di…».' },
        ],
      },
      final_bon: {
        text: 'Chè bella! Benvenuta in Bastia!',
        translation: 'Que legal! Bem-vinda a Bastia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon principiu!', message: 'Anna sorri: você fez a sua primeira conversa em corso.' },
      },
    },
    glossary: [
      ['bonghjornu', 'bom dia, oi'],
      ['cumu va?', 'como vai?'],
      ['sò di', 'eu sou de'],
      ['benvenuta', 'bem-vinda'],
    ],
  },
  {
    id: 'co-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Una cena in famiglia',
    emoji: '👪',
    summary: 'Ghjuvanni, um amigo de Corti, pergunta pela sua família e convida você para jantar com os parentes dele.',
    cultural_context: 'Corti (Corte, em francês), no centro montanhoso da ilha, foi a capital da breve República Corsa independente no século XVIII.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonghjornu! Ai fratelli o surelle?',
        translation: 'Bom dia! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Iè, aghju un fratellu è una surella.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fratelli' },
          { text: 'A mio casa hè grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «aghju…».' },
        ],
      },
      fratelli: {
        text: 'Chè bella! Voi vene cù noi sabbatu?',
        translation: 'Que legal! Quer vir com a gente no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Iè, grazie assai!', translation: 'Sim, muito obrigado!', next: 'final_bon' },
          { text: 'Sò di San Paulu.', translation: 'Sou de São Paulo.', wrong: 'Ghjuvanni fez um convite: responda com «iè» ou «nò, grazie».' },
        ],
      },
      final_bon: {
        text: 'Assai bè! A mio mamma face pane è casgiu.',
        translation: 'Muito bem! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Un invitu!', message: 'Você foi convidado para jantar com a família de Ghjuvanni.' },
      },
    },
    glossary: [
      ['fratellu / surella', 'irmão / irmã'],
      ['aghju', 'eu tenho'],
      ['iè', 'sim'],
      ['cù noi', 'com a gente'],
    ],
  },
];
