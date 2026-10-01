import type { StorySeed } from '../types';

/** Histórias interativas do siciliano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SCN: StorySeed[] = [
  {
    id: 'scn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bongiornu a Palermu',
    emoji: '👋',
    summary: 'Você conhece Anna no mercado do Ballarò, em Palermo, e faz a sua primeira conversa em siciliano.',
    cultural_context: 'O Ballarò é um dos mercados de rua mais antigos de Palermo, barulhento e cheio de cor, com vendedores anunciando os produtos em voz alta (a “abbanniata”).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bongiornu! Mi chiamu Anna. Comu va?',
        translation: 'Bom dia! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bonu, grazzi! E tu?', translation: 'Bem, obrigado! E você?', next: 'bonu' },
          { text: 'Addiu!', translation: 'Tchau!', wrong: 'Anna acabou de te cumprimentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bonu: {
        text: 'Puru bonu! Di unni si?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Iu sugnu di Sampaulu.', translation: 'Sou de São Paulo.', next: 'final_bonu' },
          { text: 'Iu viu acqua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Iu sugnu di…”.' },
        ],
      },
      final_bonu: {
        text: 'Bellu! Bonvinutu a Palermu!',
        translation: 'Que legal! Bem-vindo a Palermo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bonu cuminzamentu!', message: 'Anna sorri: você fez a sua primeira conversa em siciliano.' },
      },
    },
    glossary: [
      ['bongiornu', 'bom dia'],
      ['comu va?', 'como vai?'],
      ['iu sugnu di', 'eu sou de'],
      ['bonvinutu', 'bem-vindo'],
    ],
  },
  {
    id: 'scn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na cena in famiglia',
    emoji: '👪',
    summary: 'Turi, um amigo de Catânia, pergunta pela sua família e convida você para comer com a família dele.',
    cultural_context: 'Catânia fica aos pés do vulcão Etna; muitos pratos locais, como a pasta alla Norma, nasceram ali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bongiornu! Hai frati o suruzzi?',
        translation: 'Bom dia! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sì, haju un frati e na soru.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frati' },
          { text: 'A me casa è granni.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “haju…”.' },
        ],
      },
      frati: {
        text: 'Bellu! Voi veniri cu nuàtri sabbatu?',
        translation: 'Que legal! Quer vir com a gente no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Sì, grazzi assai!', translation: 'Sim, muito obrigado!', next: 'final_bonu' },
          { text: 'Iu sugnu di Sampaulu.', translation: 'Sou de São Paulo.', wrong: 'Turi fez um convite: responda com “sì” ou “no, grazzi”.' },
        ],
      },
      final_bonu: {
        text: 'Bonissimu! A me matri fa pani e caciu.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'N’invitu!', message: 'Você foi convidado para comer com a família de Turi.' },
      },
    },
    glossary: [
      ['frati / soru', 'irmão / irmã'],
      ['haju', 'eu tenho'],
      ['sì', 'sim'],
      ['cu nuàtri', 'com a gente'],
    ],
  },
];
