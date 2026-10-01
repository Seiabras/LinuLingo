import type { StorySeed } from '../types';

/** Histórias interativas do esloveno — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SL: StorySeed[] = [
  {
    id: 'sl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Živjo v Ljubljani',
    emoji: '👋',
    summary: 'Você conhece Nina na Ponte Tripla, no centro de Liubliana, e faz a sua primeira conversa em esloveno.',
    cultural_context: 'A Ponte Tripla (Tromostovje), sobre o rio Ljubljanica, é um dos cartões-postais de Liubliana, a capital da Eslovênia; o conjunto foi desenhado pelo arquiteto Jože Plečnik.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Živjo! Ime mi je Nina. Kako si?',
        translation: 'Oi! Eu me chamo Nina. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobro, hvala! Pa ti?', translation: 'Bem, obrigado! E você?', next: 'dobro' },
          { text: 'Nasvidenje!', translation: 'Até logo!', wrong: 'Nina acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobro: {
        text: 'Tudi jaz sem dobro! Od kod si?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Sem iz São Paula.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Pijem vodo.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Sem iz…”.' },
        ],
      },
      final_bom: {
        text: 'Super! Dobrodošel v Ljubljani!',
        translation: 'Que legal! Bem-vindo a Liubliana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dober začetek!', message: 'Nina sorri: você fez a sua primeira conversa em esloveno.' },
      },
    },
    glossary: [
      ['živjo', 'oi'],
      ['kako si?', 'como vai?'],
      ['sem iz', 'eu sou de'],
      ['dobrodošel', 'bem-vindo (a uma mulher: dobrodošla)'],
    ],
  },
  {
    id: 'sl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nedeljsko kosilo',
    emoji: '👪',
    summary: 'Luka, um amigo de Maribor, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Maribor, a segunda maior cidade da Eslovênia, tem uma videira que o Guinness registra como a mais velha do mundo ainda dando uvas, com mais de 400 anos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Živjo! Imaš brata ali sestro?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Da, imam brata in sestro.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'druzina' },
          { text: 'Moja hiša je velika.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “imam…”.' },
        ],
      },
      druzina: {
        text: 'Super! Bi prišel v nedeljo na kosilo?',
        translation: 'Que legal! Você viria almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Da, hvala lepa!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Sem iz São Paula.', translation: 'Sou de São Paulo.', wrong: 'Luka fez um convite: responda com “da” ou “ne, hvala”.' },
        ],
      },
      final_bom: {
        text: 'Odlično! Moja mama bo spekla potico.',
        translation: 'Ótimo! A minha mãe vai assar uma potica (rosca de massa doce enrolada com recheio de nozes).',
        emoji: '🍰',
        ending: { tone: 'bom', title: 'Vabilo!', message: 'Você foi convidado para o almoço de domingo com a família de Luka.' },
      },
    },
    glossary: [
      ['brat / sestra', 'irmão / irmã'],
      ['imam', 'eu tenho'],
      ['da', 'sim'],
      ['kosilo', 'almoço'],
    ],
  },
];
