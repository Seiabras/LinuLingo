import type { StorySeed } from '../types';

/** Histórias interativas do vietnamita — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_VI: StorySeed[] = [
  {
    id: 'vi-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Xin chào ở Hà Nội',
    emoji: '👋',
    summary: 'Você conhece Lan numa rua de Hanói e faz a sua primeira conversa em vietnamita.',
    cultural_context: 'Hanói é a capital do Vietnã, uma cidade de mais de mil anos com um centro histórico (o Bairro Antigo) famoso pelo trânsito de motos e pelos vendedores ambulantes de phở.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Xin chào! Tôi tên là Lan. Bạn khỏe không?',
        translation: 'Oi! Meu nome é Lan. Você está bem?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tôi khỏe, cảm ơn! Còn bạn?', translation: 'Estou bem, obrigado! E você?', next: 'ben' },
          { text: 'Tạm biệt!', translation: 'Tchau!', wrong: 'Lan acabou de te cumprimentar — se despedir agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      ben: {
        text: 'Tôi cũng khỏe! Bạn đến từ đâu?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Tôi đến từ Brazil.', translation: 'Eu sou do Brasil.', next: 'final_bo' },
          { text: 'Tôi thích cà phê.', translation: 'Eu gosto de café.', wrong: 'Isso não responde "de onde você é". Tente "Tôi đến từ…".' },
        ],
      },
      final_bo: {
        text: 'Thật tuyệt! Chào mừng đến Hà Nội.',
        translation: 'Que legal! Bem-vindo a Hanói.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Lan sorri: você fez a sua primeira conversa em vietnamita, na capital do país.' },
      },
    },
    glossary: [
      ['xin chào', 'oi'],
      ['tôi khỏe', 'eu estou bem'],
      ['tôi đến từ', 'eu sou de'],
    ],
  },
  {
    id: 'vi-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cuộc gọi cho gia đình',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga Hoa e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'No Vietnã, a família estendida é muito importante, e várias gerações costumam morar juntas ou muito perto umas das outras.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Xin chào! Kể tôi nghe, bạn có anh chị em không?',
        translation: 'Oi! Me conte, você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Có, tôi có một anh trai và một em gái.', translation: 'Sim, tenho um irmão mais velho e uma irmã mais nova.', next: 'irmaos' },
          { text: 'Nhà tôi lớn.', translation: 'Minha casa é grande.', wrong: 'Isso não responde sobre irmãos. Use "tôi có" ou "tôi không có".' },
        ],
      },
      irmaos: {
        text: 'Thật tuyệt! Nhà bạn thế nào?',
        translation: 'Que legal! Como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Nhà tôi nhỏ nhưng rất đẹp.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'Tôi hai mươi tuổi.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "nhà tôi…".' },
        ],
      },
      final_bo: {
        text: 'Tôi rất thích! Một ngày nào đó bạn phải đến thăm chúng tôi.',
        translation: 'Eu adoro! Um dia você tem que nos visitar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Tình bạn mới!', message: 'Hoa adorou saber da sua família e da sua casa — e já te convidou para visitar!' },
      },
    },
    glossary: [
      ['anh trai / em gái', 'irmão mais velho / irmã mais nova'],
      ['nhà tôi', 'a minha casa'],
      ['tôi có', 'eu tenho'],
    ],
  },
];
