import type { StorySeed } from '../types';

/** Histórias interativas do galego — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_GL: StorySeed[] = [
  {
    id: 'gl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ola en Compostela',
    emoji: '👋',
    summary: 'Você conhece Sabela numa praza de Santiago de Compostela e faz a sua primeira conversa em galego.',
    cultural_context: 'Santiago de Compostela é a capital da Galiza e o destino final do Camiño de Santiago, com milhares de peregrinos chegando todo ano à sua Praza do Obradoiro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ola! Chámome Sabela. Como estás?',
        translation: 'Oi! Eu me chamo Sabela. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Moi ben, grazas! E ti?', translation: 'Muito bem, obrigado! E você?', next: 'ben' },
          { text: 'Adeus!', translation: 'Tchau!', wrong: 'Sabela acabou de te cumprimentar — despedir-se agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      ben: {
        text: 'Moi ben tamén! E ti, de onde es?',
        translation: 'Muito bem também! E você, de onde é?',
        emoji: '😊',
        choices: [
          { text: 'Son de Brasil.', translation: 'Sou do Brasil.', next: 'final_bo' },
          { text: 'Gústame o café.', translation: 'Eu gosto do café.', wrong: 'Isso não responde "de onde você é". Tente "Son de…".' },
        ],
      },
      final_bo: {
        text: 'Que ben! Benvida a Compostela.',
        translation: 'Que bom! Bem-vinda a Compostela.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Unha boa conversa!', message: 'Sabela sorri: fixeches a túa primeira conversa en galego, na praza máis famosa da Galiza.' },
      },
    },
    glossary: [
      ['ola', 'oi'],
      ['moi ben', 'muito bem'],
      ['son de', 'sou de'],
    ],
  },
  {
    id: 'gl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Unha chamada á familia',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga galega Uxía e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'Nas aldeias galegas, é comum várias gerações de uma mesma família viverem perto umas das outras, e as reuniões de família nos fins de semana e nas festas do santo patrón são muito importantes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ola! Cóntame, tes irmáns?',
        translation: 'Oi! Me conte, você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Si, teño un irmán e unha irmá.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'irmans' },
          { text: 'A miña casa é grande.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “teño” ou “non teño”.' },
        ],
      },
      irmans: {
        text: 'Que ben! E como é a túa casa?',
        translation: 'Que bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'A miña casa é pequena pero moi bonita.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'Teño vinte anos.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: “a miña casa é…”.' },
        ],
      },
      final_bo: {
        text: 'Adoro! Algún día tes que vir visitarnos.',
        translation: 'Adoro! Um dia você tem que vir nos visitar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nova amizade!', message: 'Uxía adorou saber da túa familia e da túa casa — e xa te convidou para a Galiza!' },
      },
    },
    glossary: [
      ['irmán / irmá', 'irmão / irmã'],
      ['a miña casa', 'a minha casa'],
      ['teño', 'eu tenho'],
    ],
  },
];
