import type { StorySeed } from '../types';

/**
 * Histórias interativas do urdu — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Todo nó é alcançável a partir de “inicio” e toda escolha errada fica no mesmo nó (sem becos sem
 * saída); quem escolhe a resposta do jogador é sempre o próprio jogador, nunca o NPC.
 */
export const STORIES_UR: StorySeed[] = [
  {
    id: 'ur-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'السلام علیکم، لاہور!',
    emoji: '👋',
    summary: 'Você conhece Aisha em Lahore, no Paquistão, e faz a sua primeira conversa em urdu.',
    cultural_context:
      'Lahore é a segunda maior cidade do Paquistão e a capital cultural do país, famosa por sua arquitetura mogol e por séculos de tradição literária em urdu e persa — um bom lugar pra ouvir o urdu falado todo dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'السلام علیکم! میرا نام عائشہ ہے۔ آپ کا کیا حال ہے؟',
        translation: 'Olá! Meu nome é Aisha. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'السلام علیکم! میں اچھا ہوں، شکریہ۔', translation: 'Olá! Eu estou bem, obrigado(a).', next: 'bem' },
          { text: 'خدا حافظ!', translation: 'Tchau!', wrong: 'Aisha acabou de cumprimentar você: despedir-se agora seria estranho. Responda à saudação primeiro.' },
        ],
      },
      bem: {
        text: 'اچھا! آپ کا کیا نام ہے؟',
        translation: 'Que bom! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'میرا نام لینو ہے۔', translation: 'Meu nome é Linu.', next: 'nome' },
          { text: 'مجھے چائے پسند ہے۔', translation: 'Eu gosto de chá.', wrong: 'Isso não responde qual é o seu nome. Use “میرا نام … ہے”.' },
        ],
      },
      nome: {
        text: 'اچھا، لینو! آپ کہاں سے ہیں؟',
        translation: 'Legal, Linu! De onde você é?',
        emoji: '❓',
        choices: [
          { text: 'میں برازیل سے ہوں۔', translation: 'Eu sou do Brasil.', next: 'final' },
          { text: 'میرا ایک بھائی ہے۔', translation: 'Eu tenho um irmão.', wrong: 'Isso não responde de onde você é. Use “… سے ہوں”.' },
        ],
      },
      final: {
        text: 'بہت اچھا! خدا حافظ، لینو!',
        translation: 'Muito bom! Até logo, Linu!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'بہت شکریہ!', message: 'Aisha sorri: você fez a sua primeira conversa em urdu.' },
      },
    },
    glossary: [
      ['السلام علیکم', 'olá (lit. “que a paz esteja com você”)'],
      ['میرا نام … ہے', 'meu nome é …'],
      ['… سے ہوں', 'eu sou de …'],
      ['خدا حافظ', 'até logo'],
    ],
  },
  {
    id: 'ur-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ابو، امی اور چائے',
    emoji: '👪',
    summary: 'Zainab, uma amiga de Lahore, pergunta sobre a sua família e convida você para tomar chá com os pais dela.',
    cultural_context:
      'Convidar alguém pra tomar چائے (chá) em casa é um gesto comum de hospitalidade no Paquistão — recusar de primeira pode até soar indelicado, por isso é comum aceitar pelo menos uma xícara.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'السلام علیکم! کیا آپ کے پاس بھائی یا بہن ہے؟',
        translation: 'Olá! Você tem algum irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'ہاں، میرا ایک بھائی ہے۔', translation: 'Sim, eu tenho um irmão.', next: 'bhai' },
          { text: 'میرا گھر چھوٹا ہے۔', translation: 'A minha casa é pequena.', wrong: 'Isso não responde sobre irmãos. Use “ہاں” ou “نہیں” com “میرا ایک بھائی/میری ایک بہن ہے”.' },
        ],
      },
      bhai: {
        text: 'اچھا! کیا آپ چائے چاہتے ہیں؟',
        translation: 'Que bom! Você quer chá?',
        emoji: '🍵',
        choices: [
          { text: 'ہاں، مجھے چائے پسند ہے۔', translation: 'Sim, eu gosto de chá.', next: 'final' },
          { text: 'میں گھر جاتا ہوں۔', translation: 'Eu vou para casa.', wrong: 'Zainab ofereceu chá: responda sobre o chá primeiro, com “ہاں” ou “نہیں”.' },
        ],
      },
      final: {
        text: 'بہت اچھا! یہ میرا خاندان ہے: ابو، امی اور میری بہن۔',
        translation: 'Ótimo! Esta é a minha família: meu pai, minha mãe e minha irmã.',
        emoji: '🧑‍🤝‍🧑',
        ending: { tone: 'bom', title: 'بہت شکریہ!', message: 'Você foi apresentado(a) à família de Zainab e vai tomar chá com eles.' },
      },
    },
    glossary: [
      ['کے پاس … ہے', 'tenho … (lit. “perto de mim está …”)'],
      ['ابو / امی', 'papai / mamãe'],
      ['مجھے … پسند ہے', 'eu gosto de …'],
      ['خاندان', 'família'],
    ],
  },
];
