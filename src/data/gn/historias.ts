import type { StorySeed } from '../types';

/** Histórias interativas do guarani — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_GN: StorySeed[] = [
  {
    id: 'gn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Mba\'éichapa, Asunciónpe',
    emoji: '👋',
    summary: 'Você conhece a Rosa numa feira de Assunção, a capital do Paraguai, e faz a sua primeira conversa em guarani.',
    cultural_context: 'Assunção é a capital do Paraguai. Nas feiras e mercados da cidade, é comum ouvir o jopara — guarani e espanhol misturados na mesma frase.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mba\'éichapa! Che réra Rosa.',
        translation: 'Oi! Meu nome é Rosa.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mba\'éichapa, Rosa! Che réra Ana.', translation: 'Oi, Rosa! Meu nome é Ana.', next: 'nome' },
          { text: 'Aguyje!', translation: 'Obrigado(a)!', wrong: 'Rosa acabou de se apresentar: ela ainda não disse nada para você agradecer. Diga o seu nome primeiro.' },
        ],
      },
      nome: {
        text: 'Mba\'éichapa?',
        translation: 'Como você está?',
        emoji: '😊',
        choices: [
          { text: 'Iporã, aguyje! Ha nde?', translation: 'Bem, obrigado(a)! E você?', next: 'final_bun' },
          { text: 'Che róga michĩ.', translation: 'Minha casa é pequena.', wrong: 'Isso não responde como você está. Use “Iporã” (bem) ou “Ivai” (mal).' },
        ],
      },
      final_bun: {
        text: 'Iporã avei! Aguyje, angirũ!',
        translation: 'Bem também! Obrigada, amiga!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Peteĩ ñe\'ẽ porã!', message: 'Rosa sorri: você fez a sua primeira conversa em guarani.' },
      },
    },
    glossary: [
      ['mba\'éichapa', 'oi, como vai'],
      ['che réra', 'meu nome (é)'],
      ['iporã', 'bem, bom'],
      ['aguyje', 'obrigado, obrigada'],
    ],
  },
  {
    id: 'gn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tereré oréndive',
    emoji: '🧊',
    summary: 'Pablo, um amigo de Encarnación, convida você para tomar tereré e pergunta pela sua família.',
    cultural_context: 'Tomar tereré (erva-mate gelada, compartilhada numa guampa e bombilla) é um costume social muito paraguaio, quase sempre feito em roda, entre amigos e família.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Mba\'éichapa! Ikatúpa ja\'u tereré?',
        translation: 'Oi! Podemos tomar tereré?',
        emoji: '📱',
        choices: [
          { text: 'Heẽ, aguyje!', translation: 'Sim, obrigado(a)!', next: 'familia' },
          { text: 'Nahániri, che róga guasu.', translation: 'Não, minha casa é grande.', wrong: 'Pablo fez um convite: isso não responde se você quer tereré. Use “Heẽ” ou “Nahániri” e explique.' },
        ],
      },
      familia: {
        text: 'Iporã! Ha mba\'éicha nde família?',
        translation: 'Que bom! E como é a sua família?',
        emoji: '👪',
        choices: [
          { text: 'Che sy ha che ru oiko oréndive.', translation: 'Minha mãe e meu pai moram com a gente.', next: 'final_bun' },
          { text: 'Pe jakare guasu.', translation: 'Aquele jacaré é grande.', wrong: 'Pablo perguntou pela sua família, não por um jacaré. Fale de “che sy” ou “che ru”.' },
        ],
      },
      final_bun: {
        text: 'Iporã! Ja\'u tereré oréndive.',
        translation: 'Que bom! Vamos tomar tereré com a gente.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Peteĩ tereré oréndive!', message: 'Você foi convidado para o círculo do tereré de Pablo.' },
      },
    },
    glossary: [
      ['tereré', 'erva-mate gelada, bebida típica do Paraguai'],
      ['heẽ / nahániri', 'sim / não'],
      ['che sy / che ru', 'minha mãe / meu pai'],
      ['oréndive', 'com a gente'],
    ],
  },
];
