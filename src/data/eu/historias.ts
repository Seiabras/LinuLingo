import type { StorySeed } from '../types';

/** Histórias interativas do basco — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_EU: StorySeed[] = [
  {
    id: 'eu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kaixo Bilbon',
    emoji: '👋',
    summary: 'Você conhece Ane numa praça de Bilbao (Bilbo, em basco) e faz a sua primeira conversa em basco.',
    cultural_context: 'Bilbao é a maior cidade do País Basco. Lá se ouve muito espanhol na rua, mas o basco está nas placas, nas escolas e em muitas famílias.',
    start: 'hasiera',
    nodes: {
      hasiera: {
        text: 'Kaixo! Ane naiz. Zer moduz?',
        translation: 'Oi! Eu sou a Ane. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ondo, eskerrik asko! Eta zu?', translation: 'Bem, obrigado! E você?', next: 'ondo' },
          { text: 'Agur!', translation: 'Tchau!', wrong: 'Ane acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      ondo: {
        text: 'Ni ere ondo! Nongoa zara?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'São Paulokoa naiz.', translation: 'Sou de São Paulo.', next: 'amaiera_ona' },
          { text: 'Ura edaten dut.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use «…koa naiz».' },
        ],
      },
      amaiera_ona: {
        text: 'Oso ondo! Ongi etorri Bilbora!',
        translation: 'Muito bem! Bem-vindo a Bilbao!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Hasiera ona!', message: 'Ane sorri: você fez a sua primeira conversa em basco.' },
      },
    },
    glossary: [
      ['kaixo', 'oi, olá'],
      ['zer moduz?', 'como vai?'],
      ['nongoa zara?', 'de onde você é?'],
      ['ongi etorri', 'bem-vindo'],
    ],
  },
  {
    id: 'eu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Afaria familian',
    emoji: '👪',
    summary: 'Mikel, um amigo de San Sebastián, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'San Sebastián (Donostia, em basco) é famosa pela comida: os «pintxos», petiscos servidos no balcão dos bares, são uma tradição da cidade.',
    start: 'hasiera',
    nodes: {
      hasiera: {
        text: 'Kaixo! Familia handia duzu?',
        translation: 'Oi! Você tem uma família grande?',
        emoji: '📱',
        choices: [
          { text: 'Bai, bi anaia ditut.', translation: 'Sim, tenho dois irmãos.', next: 'familia' },
          { text: 'Nire etxea txikia da.', translation: 'A minha casa é pequena.', wrong: 'Isso não responde sobre a sua família. Use «… dut» ou «… ditut».' },
        ],
      },
      familia: {
        text: 'Oso ondo! Larunbatean gurekin afaldu nahi duzu?',
        translation: 'Muito bem! Quer jantar com a gente no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Bai, mila esker!', translation: 'Sim, muito obrigado!', next: 'amaiera_ona' },
          { text: 'São Paulokoa naiz.', translation: 'Sou de São Paulo.', wrong: 'Mikel fez um convite: responda com «bai» ou «ez, eskerrik asko».' },
        ],
      },
      amaiera_ona: {
        text: 'Primeran! Nire amak gazta ekarriko du.',
        translation: 'Ótimo! A minha mãe vai trazer queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Gonbidapena!', message: 'Você foi convidado para jantar com a família de Mikel.' },
      },
    },
    glossary: [
      ['anaia / ahizpa', 'irmão / irmã'],
      ['dut / ditut', 'tenho (uma coisa / várias coisas)'],
      ['bai', 'sim'],
      ['larunbatean', 'no sábado'],
    ],
  },
];
