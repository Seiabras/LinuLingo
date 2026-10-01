import type { StorySeed } from '../types';

/** Histórias interativas do suíço-alemão — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_GSW: StorySeed[] = [
  {
    id: 'gsw-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Grüezi z’Züri',
    emoji: '👋',
    summary: 'Você conhece Anna numa estação de trem em Zurique e faz a sua primeira conversa em suíço-alemão.',
    cultural_context: 'Zurique é a maior cidade da Suíça e o coração da região onde se fala Züritüütsch.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Grüezi! Ich heisse Anna. Wie gaht’s?',
        translation: 'Olá! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Guet, merci! Und du?', translation: 'Bem, obrigado! E você?', next: 'guet' },
          { text: 'Uf Widerluege!', translation: 'Até logo!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      guet: {
        text: 'Au guet! Vo wo bisch du?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ich bi vo São Paulo.', translation: 'Sou de São Paulo.', next: 'final_guet' },
          { text: 'Ich trink Wasser.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ich bi vo…”.' },
        ],
      },
      final_guet: {
        text: 'Mega! Willkomme z’Züri!',
        translation: 'Ótimo! Bem-vindo a Zurique!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'En guete Aafang!', message: 'Anna sorri: você fez a sua primeira conversa em suíço-alemão.' },
      },
    },
    glossary: [
      ['grüezi', 'oi, olá'],
      ['wie gaht’s', 'como vai?'],
      ['ich bi vo', 'eu sou de'],
      ['willkomme', 'bem-vindo'],
    ],
  },
  {
    id: 'gsw-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Z’Nacht mit de Familie',
    emoji: '👪',
    summary: 'Gian, um amigo de Zurique, pergunta pela sua família e convida você para jantar.',
    cultural_context: 'Convidar alguém pra “z’Nacht” (o jantar) em casa é um gesto comum de amizade na Suíça alemã.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Grüezi! Häsch du Gschwüschterti?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ich ha en Brüeder und e Schwöschter.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'brueder' },
          { text: 'Mis Huus isch gross.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ich ha…”.' },
        ],
      },
      brueder: {
        text: 'Mega! Chunnsch’ du Samschtig zu üs z’Nacht?',
        translation: 'Ótimo! Você vem jantar na nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Ja, merci vilmal!', translation: 'Sim, muito obrigado!', next: 'final_guet' },
          { text: 'Ich bi vo São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Gian fez um convite: responda com “ja” ou “nei, merci”.' },
        ],
      },
      final_guet: {
        text: 'Super! Mini Mueter macht Brot und Chäs.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Es Invitation!', message: 'Você foi convidado para jantar com a família de Gian.' },
      },
    },
    glossary: [
      ['brüeder / schwöschter', 'irmão / irmã'],
      ['ich ha', 'eu tenho'],
      ['ja', 'sim'],
      ['z’nacht', 'o jantar'],
    ],
  },
];
