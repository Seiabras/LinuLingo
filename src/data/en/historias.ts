import type { StorySeed } from '../types';

/** Histórias interativas do inglês — A1.1 ao A2.2, pacote incompleto (ver `incomplete` em index.ts). */
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
  {
    id: 'en-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'A cold day in London',
    emoji: '🥶',
    summary: 'You meet your friend Jack on a cold street in London and talk about the weather and what to wear.',
    cultural_context: 'Talking about the weather is a classic way to start a conversation in English-speaking countries — so common that linguists call it "phatic communication", small talk that opens a social connection.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hi! It\'s really cold today, isn\'t it?',
        translation: 'Oi! Está muito frio hoje, não é?',
        emoji: '🥶',
        choices: [
          { text: 'Yes, and the wind is very strong.', translation: 'Sim, e o vento está muito forte.', next: 'clothes' },
          { text: 'I am a cook.', translation: 'Eu sou cozinheiro.', wrong: 'Isso não responde sobre o frio. Fale do tempo: "it\'s cold" ou "the wind is strong".' },
        ],
      },
      clothes: {
        text: 'So, put on a warm jacket!',
        translation: 'Então, vista um casaco quentinho!',
        emoji: '🧥',
        choices: [
          { text: 'Good idea! I\'ll buy some gloves too.', translation: 'Boa ideia! Eu também vou comprar luvas.', next: 'final_bo' },
          { text: 'My family is big.', translation: 'Minha família é grande.', wrong: 'Isso não tem relação com a roupa. Fale sobre o que você vai comprar.' },
        ],
      },
      final_bo: {
        text: 'Great! There\'s a good shop right there.',
        translation: 'Ótimo! Tem uma boa loja ali.',
        emoji: '🛍️',
        ending: { tone: 'bom', title: 'Compras feitas!', message: 'Jack te mostrou a melhor loja da rua — e agora você está preparado para o frio!' },
      },
    },
    glossary: [
      ['it\'s cold', 'está frio'],
      ['jacket', 'casaco'],
      ['to buy', 'comprar'],
    ],
  },
  {
    id: 'en-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'When I was a child',
    emoji: '🏙️',
    summary: 'Your friend Olivia tells you about her childhood in her city, and you tell her about yours.',
    cultural_context: 'In many English-speaking countries, asking about someone\'s childhood and hometown is a common way to get to know a new friend better.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'When I was a child, I lived in a big city. Where did you live?',
        translation: 'Quando eu era criança, eu morava numa cidade grande. Onde você morava?',
        emoji: '🏙️',
        choices: [
          { text: 'When I was a child, I lived in a small city.', translation: 'Quando eu era criança, eu morava numa cidade pequena.', next: 'work' },
          { text: 'My head hurts.', translation: 'Minha cabeça está doendo.', wrong: 'Isso não responde onde você morava quando era criança. Use "I lived…".' },
        ],
      },
      work: {
        text: 'And where did your parents work?',
        translation: 'E onde seus pais trabalhavam?',
        emoji: '👪',
        choices: [
          { text: 'My father worked at a hospital, and my mother worked at a school.', translation: 'Meu pai trabalhava num hospital, e minha mãe, numa escola.', next: 'final_bo' },
          { text: 'Tomorrow I will buy gloves.', translation: 'Amanhã eu vou comprar luvas.', wrong: 'Isso não responde sobre o trabalho dos seus pais. Use o passado simples: "worked".' },
        ],
      },
      final_bo: {
        text: 'How interesting! Our childhoods were very different.',
        translation: 'Que interessante! Nossas infâncias foram bem diferentes.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Lembranças compartilhadas!', message: 'Olivia e você compartilharam suas lembranças de infância — uma boa conversa no passado simples!' },
      },
    },
    glossary: [
      ['when I was a child', 'quando eu era criança'],
      ['I lived', 'eu morava'],
      ['worked', 'ele/ela trabalhava'],
    ],
  },
];
