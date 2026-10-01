import type { StorySeed } from '../types';

/**
 * Histórias do A1.1 ao B1.3 — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas em Kano, a maior cidade histórica de língua hauçá no norte da Nigéria.
 */
export const STORIES_HA_1: StorySeed[] = [
  {
    id: 'ha-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Sannu a Kano!',
    emoji: '👋',
    summary: 'Você chega a Kano e conhece Amina, que te dá boas-vindas e pergunta de onde você vem.',
    cultural_context: 'Kano é a maior cidade histórica de língua hauçá, famosa por seu mercado centenário (o Kurmi) e por séculos de comércio através do Saara.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Sannu! Sannu da zuwa a Kano!',
        translation: 'Olá! Bem-vindo(a) a Kano!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Na gode! Sunana Lúcia.', translation: 'Obrigado! Meu nome é Lúcia.', next: 'nome' },
          { text: 'Sai an jima!', translation: 'Até mais!', wrong: 'Amina acabou de te dar boas-vindas: despedir-se agora seria estranho. Agradeça primeiro com “Na gode”.' },
        ],
      },
      nome: {
        text: 'Sannu, Lúcia! Daga ina ka fito?',
        translation: 'Prazer, Lúcia! De onde você vem?',
        emoji: '😊',
        choices: [
          { text: 'Na fito daga Brazil.', translation: 'Eu venho do Brasil.', next: 'final' },
          { text: 'Shayi, don Allah.', translation: 'Chá, por favor.', wrong: 'Isso não responde de onde você vem. Use “Na fito daga…”.' },
        ],
      },
      final: {
        text: 'Sannu da zuwa, Lúcia!',
        translation: 'Bem-vinda, Lúcia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Zuwan sannu!', message: 'Amina sorri: você fez sua primeira conversa em hauçá em Kano.' },
      },
    },
    glossary: [
      ['sannu', 'oi, olá'],
      ['na gode', 'obrigado'],
      ['sunana', 'meu nome é'],
      ['daga ina ka fito?', 'de onde você vem?'],
    ],
  },
  {
    id: 'ha-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cin abinci da Amina',
    emoji: '🍽️',
    summary: 'Amina pergunta sobre sua família e te convida para comer com ela — a hospitalidade hauçá em ação.',
    cultural_context: 'Receber uma visita com comida farta é quase uma obrigação social na cultura hauçá: recusar um convite para comer pode soar como desfeita.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Sannu! Kana da ɗan’uwa ko ’yar’uwa?',
        translation: 'Olá! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Ina da ɗan’uwa da ’yar’uwa.', translation: 'Eu tenho um irmão e uma irmã.', next: 'iyali' },
          { text: 'Shayi, don Allah.', translation: 'Chá, por favor.', wrong: 'Isso não responde sobre seus irmãos. Use “Ina da…”.' },
        ],
      },
      iyali: {
        text: 'To, zo mu ci abinci tare da iyali!',
        translation: 'Então, venha comer com a família!',
        emoji: '🍽️',
        choices: [
          { text: 'To, na gode ƙwarai!', translation: 'Está bem, muito obrigado!', next: 'final' },
          { text: 'Sai an jima!', translation: 'Até mais!', wrong: 'Amina te convidou para comer: despedir-se agora seria falta de educação. Aceite com “na gode”.' },
        ],
      },
      final: {
        text: 'Shinkafa da nama da madara!',
        translation: 'Arroz, carne e leite!',
        emoji: '🍚',
        ending: { tone: 'bom', title: 'Cin abinci tare!', message: 'Você foi bem recebido pela família de Amina e comeu com eles.' },
      },
    },
    glossary: [
      ['ɗan’uwa / ’yar’uwa', 'irmão / irmã'],
      ['ina da', 'eu tenho'],
      ['iyali', 'família'],
      ['na gode ƙwarai', 'muito obrigado'],
    ],
  },
];
