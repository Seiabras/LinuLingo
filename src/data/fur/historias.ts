import type { StorySeed } from '../types';

/** Histórias interativas do friulano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_FUR: StorySeed[] = [
  {
    id: 'fur-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mandi a Udin',
    emoji: '👋',
    summary: 'Você conhece Marie numa praça de Udine (Udin, em friulano) e faz a sua primeira conversa em friulano.',
    cultural_context: 'Udine é a principal cidade do Friul; a sua praça da Liberdade, com a loggia veneziana, é o ponto de encontro do centro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mandi! O mi clami Marie. Cemût stâstu?',
        translation: 'Oi! Eu me chamo Maria. Como vai você?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ben, graciis! E tu?', translation: 'Bem, obrigado! E você?', next: 'ben' },
          { text: 'Buine gnot!', translation: 'Boa noite (despedida)!', wrong: 'Marie acabou de chegar: “buine gnot” é para ir dormir. Responda ao cumprimento.' },
        ],
      },
      ben: {
        text: 'Ancje jo ben! Di dulà sêstu?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'O soi di São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bon' },
          { text: 'O bêf aghe.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “O soi di…”.' },
        ],
      },
      final_bon: {
        text: 'Ce biel! Benvignût a Udin!',
        translation: 'Que legal! Bem-vindo a Udine!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon inizi!', message: 'Marie sorri: você fez a sua primeira conversa em friulano.' },
      },
    },
    glossary: [
      ['mandi', 'oi; tchau'],
      ['cemût stâstu?', 'como vai você?'],
      ['o soi di', 'eu sou de'],
      ['benvignût', 'bem-vindo'],
    ],
  },
  {
    id: 'fur-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Un tai cun Toni',
    emoji: '🍷',
    summary: 'Toni, um amigo de Gorizia, pergunta pela sua família e convida você para comer frico.',
    cultural_context: 'O frico, de queijo montasio e batata, é o prato típico do Friul; o “tai” é a taça de vinho dos bares das aldeias.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mandi! Âstu fradis o sûrs?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sì, o ai un fradi e une sûr.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fradis' },
          { text: 'La mê cjase e je grande.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “o ai…”.' },
        ],
      },
      fradis: {
        text: 'Ce biel! Vuelistu mangjâ il frico cun nô?',
        translation: 'Que legal! Quer comer frico com a gente?',
        emoji: '🧀',
        choices: [
          { text: 'Sì, graciis tantis!', translation: 'Sim, muito obrigado!', next: 'final_bon' },
          { text: 'O soi di São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Toni fez um convite: responda com “sì” ou “no, graciis”.' },
        ],
      },
      final_bon: {
        text: 'Benon! Mê mari e fâs il frico plui bon dal Friûl.',
        translation: 'Ótimo! A minha mãe faz o frico mais gostoso do Friul.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un invît!', message: 'Você foi convidado para comer frico com a família de Toni.' },
      },
    },
    glossary: [
      ['fradi / sûr', 'irmão / irmã'],
      ['o ai', 'eu tenho'],
      ['frico', 'prato de queijo e batata'],
      ['graciis tantis', 'muito obrigado'],
    ],
  },
];
