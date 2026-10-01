import type { StorySeed } from '../types';

/** Histórias interativas do alemão — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_DE: StorySeed[] = [
  {
    id: 'de-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo in Hamburg',
    emoji: '👋',
    summary: 'Você conhece Anna na estação central de Hamburgo e faz a sua primeira conversa em alemão.',
    cultural_context: 'Hamburgo, no norte da Alemanha, é a segunda maior cidade do país e tem um dos maiores portos da Europa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Hallo! Ich heiße Anna. Wie geht's?",
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Gut, danke! Und dir?', translation: 'Bem, obrigado! E você?', next: 'gut' },
          { text: 'Tschüss!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      gut: {
        text: 'Auch gut! Woher kommst du?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ich komme aus São Paulo.', translation: 'Sou de São Paulo.', next: 'final_gut' },
          { text: 'Ich trinke Wasser.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ich komme aus…”.' },
        ],
      },
      final_gut: {
        text: 'Toll! Willkommen in Hamburg!',
        translation: 'Que legal! Bem-vindo a Hamburgo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ein guter Anfang!', message: 'Anna sorri: você fez a sua primeira conversa em alemão.' },
      },
    },
    glossary: [
      ['hallo', 'oi, olá'],
      ["wie geht's?", 'como vai?'],
      ['ich komme aus', 'eu sou de'],
      ['willkommen', 'bem-vindo'],
    ],
  },
  {
    id: 'de-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ein Abendessen mit der Familie',
    emoji: '👪',
    summary: 'Jonas, um amigo de Munique, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Munique (München) é a capital da Baviera, no sul da Alemanha; o jantar em família costuma ser simples, muitas vezes com pão, queijo e frios (“Abendbrot”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Hast du Geschwister?',
        translation: 'Oi! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ich habe einen Bruder und eine Schwester.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'geschwister' },
          { text: 'Mein Haus ist groß.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ich habe…”.' },
        ],
      },
      geschwister: {
        text: 'Toll! Möchtest du am Samstag zu uns kommen?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Ja, gern! Danke!', translation: 'Sim, com prazer! Obrigado!', next: 'final_gut' },
          { text: 'Ich komme aus São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Jonas fez um convite: responda com “Ja, gern!” ou “Nein, danke”.' },
        ],
      },
      final_gut: {
        text: 'Super! Meine Mutter backt Brot.',
        translation: 'Ótimo! A minha mãe vai fazer pão.',
        emoji: '🍞',
        ending: { tone: 'bom', title: 'Eine Einladung!', message: 'Você foi convidado para jantar com a família de Jonas.' },
      },
    },
    glossary: [
      ['Bruder / Schwester', 'irmão / irmã'],
      ['Geschwister', 'irmãos (irmãos e irmãs juntos)'],
      ['ja, gern', 'sim, com prazer'],
      ['zu uns', 'à nossa casa'],
    ],
  },
];
