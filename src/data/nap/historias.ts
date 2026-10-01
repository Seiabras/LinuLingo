import type { StorySeed } from '../types';

/** Histórias interativas do napolitano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_NAP: StorySeed[] = [
  {
    id: 'nap-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ué a Napule',
    emoji: '👋',
    summary: 'Você conhece Rosa numa rua de Nápoles e faz a sua primeira conversa em napolitano.',
    cultural_context: 'Nas ruas de Nápoles é comum cumprimentar desconhecidos com “ué” e puxar conversa — a cidade é conhecida pelo jeito caloroso de receber visitantes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ué! Ij’ songo Rosa. Comme staje?',
        translation: 'Oi! Eu sou a Rosa. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Buono, grazie! E tu?', translation: 'Bem, obrigado! E você?', next: 'buono' },
          { text: 'Statte buono!', translation: 'Tchau!', wrong: 'Rosa acabou de te cumprimentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      buono: {
        text: 'Buono pure ij’! Comme te chiamme?',
        translation: 'Bem também! Como você se chama?',
        emoji: '😊',
        choices: [
          { text: 'Me chiammo Ana.', translation: 'Me chamo Ana.', next: 'nomme' },
          { text: 'Vevo ll’acqua.', translation: 'Eu bebo água.', wrong: 'Isso não responde ao seu nome. Use “Me chiammo…”.' },
        ],
      },
      nomme: {
        text: 'Bello! Tu sî ’e addò?',
        translation: 'Que bom! Você é de onde?',
        emoji: '🤝',
        choices: [
          { text: 'So’ ’e Sàn Paulo.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Aggio nu frate.', translation: 'Tenho um irmão.', wrong: 'Isso não diz de onde você é. Use “So’ ’e…”.' },
        ],
      },
      final_bom: {
        text: 'Bello assaje! Jammo pe’ Napule?',
        translation: 'Que ótimo! Vamos caminhar por Nápoles?',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nu bello ’ncontro!', message: 'Rosa sorri: você acabou de ter a sua primeira conversa em napolitano.' },
      },
    },
    glossary: [
      ['ué', 'oi, olá'],
      ['comme staje?', 'como vai?'],
      ['me chiammo', 'eu me chamo'],
      ['so’ ’e…', 'eu sou de…'],
    ],
  },
  {
    id: 'nap-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Jammo a magnà',
    emoji: '👪',
    summary: 'Gennaro, um amigo napolitano, pergunta pela sua família e convida você pra comer na casa dele.',
    cultural_context: 'Convidar alguém pra comer é um gesto de amizade muito napolitano — “jammo a magnà!” (vamos comer!) é uma frase do dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ué! Tiene frate o sora?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sì, aggio nu frate e ’na sora.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frate' },
          { text: '’A casa mia è grossa.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “aggio…”.' },
        ],
      },
      frate: {
        text: 'Bello! Vuò vení â casa mia sabbato?',
        translation: 'Que bom! Quer vir à minha casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Sì, grazie assaje!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'So’ ’e Sàn Paulo.', translation: 'Sou de São Paulo.', wrong: 'Gennaro fez um convite: responda com “sì” ou “no, grazie”.' },
        ],
      },
      final_bom: {
        text: 'Bellissemo! Mamma mia prepara pane e caso.',
        translation: 'Ótimo! A minha mãe prepara pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Nu ’nvito!', message: 'Você foi convidado pra comer na casa de Gennaro.' },
      },
    },
    glossary: [
      ['frate / sora', 'irmão / irmã'],
      ['aggio', 'eu tenho'],
      ['jammo a magnà', 'vamos comer'],
      ['â casa mia', 'na minha casa'],
    ],
  },
];
