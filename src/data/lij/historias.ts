import type { StorySeed } from '../types';

/** Histórias interativas do lígure — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_LIJ: StorySeed[] = [
  {
    id: 'lij-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ciao a Zena',
    emoji: '👋',
    summary: 'Você conhece Ana no porto velho de Gênova e faz a sua primeira conversa em lígure.',
    cultural_context: 'O porto velho (o Porto Antico) é o coração histórico de Gênova, a antiga república marítima — hoje revitalizado, com o aquário e o museu do mar.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciao! Mi acciammo Ana. Comme ti stæ?',
        translation: 'Oi! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mi staggo ben, graçie! E ti?', translation: 'Estou bem, obrigado! E você?', next: 'ben' },
          { text: 'À reveise!', translation: 'Até logo!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      ben: {
        text: 'Ben ascì! Ti ê de Zena?',
        translation: 'Também bem! Você é de Gênova?',
        emoji: '😊',
        choices: [
          { text: 'No, mi son de San Paolo.', translation: 'Não, sou de São Paulo.', next: 'final_bon' },
          { text: 'Mi bevo ægua.', translation: 'Eu bebo água.', wrong: 'Isso não responde se você é de Gênova. Use “Mi son de…” ou “No, mi son de…”.' },
        ],
      },
      final_bon: {
        text: 'Che bello! Benvegnuo a Zena!',
        translation: 'Que legal! Bem-vindo a Gênova!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon cominciamento!', message: 'Ana sorri: você fez a sua primeira conversa em lígure.' },
      },
    },
    glossary: [
      ['ciao', 'oi, olá'],
      ['comme ti stæ?', 'como vai?'],
      ['mi son de', 'eu sou de'],
      ['benvegnuo', 'bem-vindo'],
    ],
  },
  {
    id: 'lij-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A fugassa da mattin-a',
    emoji: '👪',
    summary: 'Giuanin, um amigo de Gênova, pergunta pela sua família e convida você para tomar café com fugassa.',
    cultural_context: 'Mergulhar a fugassa (focaccia genovesa) no cappuccino de manhã é um costume bem genovês, diferente do resto da Itália.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciao! Ti t’æ fræ ò seu?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Scì, mi ò un fræ e üña seu.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fraeseu' },
          { text: 'Mia cà a l’é grande.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mi ò…”.' },
        ],
      },
      fraeseu: {
        text: 'Che bello! Ti veu vegnî a mangiâ fugassa doman?',
        translation: 'Que legal! Você quer vir comer fugassa amanhã?',
        emoji: '🍽️',
        choices: [
          { text: 'Scì, graçie mille!', translation: 'Sim, muito obrigado!', next: 'final_bon' },
          { text: 'Mi son de San Paolo.', translation: 'Sou de São Paulo.', wrong: 'Giuanin fez um convite: responda com “scì” ou “no, graçie”.' },
        ],
      },
      final_bon: {
        text: 'Perfetto! Doman a-a mattin-a, in çentro!',
        translation: 'Perfeito! Amanhã de manhã, no centro!',
        emoji: '🍞',
        ending: { tone: 'bom', title: 'Un invito!', message: 'Você foi convidado para comer fugassa com Giuanin.' },
      },
    },
    glossary: [
      ['fræ / seu', 'irmão / irmã'],
      ['mi ò', 'eu tenho'],
      ['scì', 'sim'],
      ['mangiâ', 'comer'],
    ],
  },
];
