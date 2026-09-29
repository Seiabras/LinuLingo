import type { StorySeed } from '../types';

/** Histórias interativas do inglês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_EN: StorySeed[] = [
  {
    id: 'en-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hello in London',
    emoji: '👋',
    summary: 'Você conhece Emma numa praça de Londres e faz a sua primeira conversa em inglês.',
    cultural_context: 'Londres é a capital do Reino Unido e uma das cidades mais multilíngues do mundo, com mais de 300 línguas faladas pelos seus moradores.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hello! My name is Emma. How are you?',
        translation: 'Oi! Meu nome é Emma. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'I\'m fine, thanks! And you?', translation: 'Estou bem, obrigado! E você?', next: 'ben' },
          { text: 'Goodbye!', translation: 'Tchau!', wrong: 'Emma acabou de te cumprimentar — se despedir agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      ben: {
        text: 'I\'m fine too! Where are you from?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'I\'m from Brazil.', translation: 'Eu sou do Brasil.', next: 'final_bo' },
          { text: 'I like coffee.', translation: 'Eu gosto de café.', wrong: 'Isso não responde "de onde você é". Tente "I\'m from…".' },
        ],
      },
      final_bo: {
        text: 'How nice! Welcome to London.',
        translation: 'Que legal! Bem-vindo a Londres.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Emma sorri: você fez a sua primeira conversa em inglês, numa das cidades mais famosas do mundo.' },
      },
    },
    glossary: [
      ['hello', 'oi'],
      ['I\'m fine', 'eu estou bem'],
      ['I\'m from', 'eu sou de'],
    ],
  },
  {
    id: 'en-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'A call to the family',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga Lucy e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'Nos países de língua inglesa, perguntar sobre a família é um jeito comum de puxar assunto entre novos amigos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hi! Tell me, do you have any brothers or sisters?',
        translation: 'Oi! Me conte, você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Yes, I have one brother and one sister.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'irmaos' },
          { text: 'My house is big.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use "I have" ou "I don\'t have".' },
        ],
      },
      irmaos: {
        text: 'How nice! And what is your house like?',
        translation: 'Que legal! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'My house is small but very nice.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'I am twenty years old.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "my house is…".' },
        ],
      },
      final_bo: {
        text: 'I love it! One day you have to come visit us.',
        translation: 'Eu adoro! Um dia você tem que vir nos visitar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nova amizade!', message: 'Lucy adorou saber da sua família e da sua casa — e já te convidou para visitar!' },
      },
    },
    glossary: [
      ['brother / sister', 'irmão / irmã'],
      ['my house', 'minha casa'],
      ['I have', 'eu tenho'],
    ],
  },
];
