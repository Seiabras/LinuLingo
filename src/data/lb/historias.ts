import type { StorySeed } from '../types';

/** Histórias interativas do luxemburguês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_LB: StorySeed[] = [
  {
    id: 'lb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Moien op der Gare',
    emoji: '👋',
    summary: 'Você conhece Anna na estação de trem da cidade de Luxemburgo e faz a sua primeira conversa em luxemburguês.',
    cultural_context: 'A capital tem o mesmo nome do país; em luxemburguês ela é chamada simplesmente de “d\'Stad”, a cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Moien! Ech heeschen Anna. Wéi geet et?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Gutt, merci! An dir?', translation: 'Bem, obrigado! E você?', next: 'gutt' },
          { text: 'Äddi!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      gutt: {
        text: 'Och gutt! Vu wou kënns du?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ech komme vu São Paulo.', translation: 'Sou de São Paulo.', next: 'final_gutt' },
          { text: 'Ech drénke Waasser.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ech komme vu…”.' },
        ],
      },
      final_gutt: {
        text: 'Super! Wëllkomm!',
        translation: 'Que legal! Bem-vindo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Wëllkomm!', message: 'Anna sorri: você fez a sua primeira conversa em luxemburguês.' },
      },
    },
    glossary: [
      ['Moien', 'oi, olá'],
      ['wéi geet et?', 'como vai?'],
      ['ech komme vu', 'eu sou de'],
      ['Wëllkomm', 'bem-vindo'],
    ],
  },
  {
    id: 'lb-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Samschdeg bei der Famill',
    emoji: '👪',
    summary: 'Tom, um amigo de Esch-sur-Alzette, pergunta pela sua família e convida você para comer com a família dele no sábado.',
    cultural_context: 'Esch-sur-Alzette (Esch-Uelzecht, em luxemburguês) é a segunda maior cidade do Luxemburgo, antigo centro da siderurgia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Moien! Hues du e Brudder oder eng Schwëster?',
        translation: 'Oi! Você tem um irmão ou uma irmã?',
        emoji: '📱',
        choices: [
          { text: 'Jo, ech hunn e Brudder an eng Schwëster.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'famill' },
          { text: 'Mäin Haus ass grouss.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ech hunn…”.' },
        ],
      },
      famill: {
        text: 'Super! Kënns du Samschdeg bei eis iessen?',
        translation: 'Que legal! Você vem comer na nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Jo, gär! Villmools Merci!', translation: 'Sim, com prazer! Muito obrigado!', next: 'final_gutt' },
          { text: 'Ech komme vu São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Tom fez um convite: responda com “Jo, gär!” ou “Nee, merci”.' },
        ],
      },
      final_gutt: {
        text: 'Super! Bis Samschdeg!',
        translation: 'Ótimo! Até sábado!',
        emoji: '🥳',
        ending: { tone: 'bom', title: 'Bis Samschdeg!', message: 'Você foi convidado para comer com a família de Tom.' },
      },
    },
    glossary: [
      ['Brudder / Schwëster', 'irmão / irmã'],
      ['ech hunn', 'eu tenho'],
      ['jo, gär', 'sim, com prazer'],
      ['bei eis', 'na nossa casa'],
    ],
  },
];
