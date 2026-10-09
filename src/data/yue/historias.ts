import type { StorySeed } from '../types';

/** Histórias interativas do cantonês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_YUE: StorySeed[] = [
  {
    id: 'yue-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: '喺香港同Anna見面',
    emoji: '👋',
    summary: 'Você encontra Anna em Hong Kong e faz a sua primeira conversa em cantonês.',
    cultural_context: 'Hong Kong é onde o cantonês funciona como língua de fato do governo, dos tribunais e do ensino — diferente do resto da China continental, onde o mandarim é a língua promovida.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '你好！我係Anna。你好嗎？',
        translation: 'Oi! Eu sou a Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: '你好！我好好，唔該。', translation: 'Oi! Eu estou bem, obrigado.', next: 'bom' },
          { text: '再見！', translation: 'Tchau!', wrong: 'Anna acabou de te cumprimentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bom: {
        text: '你叫咩名呀？',
        translation: 'Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: '我係Linu。', translation: 'Eu sou o Linu.', next: 'nome' },
          { text: '我有狗。', translation: 'Eu tenho cachorro.', wrong: 'Isso não responde qual é o seu nome. Use “我係…”.' },
        ],
      },
      nome: {
        text: '你係邊度人呀？',
        translation: 'De onde você é?',
        emoji: '🌍',
        choices: [
          { text: '我係巴西人。', translation: 'Eu sou brasileiro.', next: 'final_bom' },
          { text: '我鍾意茶。', translation: 'Eu gosto de chá.', wrong: 'Isso não responde de onde você é. Use “我係…人”.' },
        ],
      },
      final_bom: {
        text: '好開心識你！我哋可以一齊學廣東話。',
        translation: 'Que bom te conhecer! A gente pode aprender cantonês juntos.',
        emoji: '🎉',
        ending: { tone: 'bom', title: '第一次對話！', message: 'Anna sorri: você fez a sua primeira conversa em cantonês.' },
      },
    },
    glossary: [
      ['你好', 'oi, olá'],
      ['你叫咩名呀', 'qual é o seu nome?'],
      ['我係', 'eu sou'],
      ['你係邊度人呀', 'de onde você é?'],
    ],
  },
  {
    id: 'yue-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: '我嘅屋企同朋友',
    emoji: '👪',
    summary: 'Wing, um amigo de Hong Kong, pergunta pela sua família e pelos seus bichos de estimação.',
    cultural_context: 'Em Hong Kong, cachorros e gatos (狗, 貓) costumam viver em apartamentos pequenos — por isso o tamanho da casa (屋企) é um assunto comum entre amigos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '你好！你有冇哥哥呀？',
        translation: 'Oi! Você tem irmão mais velho?',
        emoji: '📱',
        choices: [
          { text: '有，我有一個哥哥。', translation: 'Sim, eu tenho um irmão mais velho.', next: 'familia' },
          { text: '我嘅貓係黑色。', translation: 'O meu gato é preto.', wrong: 'Isso não responde sobre o seu irmão. Use “有” ou “冇”.' },
        ],
      },
      familia: {
        text: '你有冇狗呀？',
        translation: 'Você tem cachorro?',
        emoji: '🐕',
        choices: [
          { text: '有，但係我冇貓。', translation: 'Tenho, mas não tenho gato.', next: 'casa' },
          { text: '我係Linu。', translation: 'Eu sou o Linu.', wrong: 'Wing perguntou sobre o seu cachorro, não o seu nome. Use “有” ou “冇”.' },
        ],
      },
      casa: {
        text: '你屋企好唔好呀？',
        translation: 'A sua casa é boa?',
        emoji: '🏠',
        choices: [
          { text: '我嘅屋企好好，雖然好細。', translation: 'A minha casa é boa, embora seja bem pequena.', next: 'final_bom' },
          { text: '我想飲茶。', translation: 'Eu quero beber chá.', wrong: 'Wing perguntou sobre a sua casa. Use “我嘅屋企…”.' },
        ],
      },
      final_bom: {
        text: '好呀！我哋一齊去飲茶啦！',
        translation: 'Boa! A gente vai tomar chá juntos!',
        emoji: '🍵',
        ending: { tone: 'bom', title: '一個新朋友！', message: 'Você ganhou um novo amigo em Hong Kong, Wing.' },
      },
    },
    glossary: [
      ['有冇', 'tem ou não tem?'],
      ['屋企', 'casa, lar'],
      ['好唔好', 'está bom ou não?'],
      ['我哋一齊', 'nós juntos'],
    ],
  },
];
