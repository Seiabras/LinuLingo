import type { StorySeed } from '../types';

/** Histórias interativas do tailandês — uma por subnível, de A1.1 até A2.2 (pacote incompleto). */
export const STORIES_TH: StorySeed[] = [
  {
    id: 'th-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'สวัสดีที่กรุงเทพ',
    emoji: '👋',
    summary: 'Você conhece a มาลี (Malee) perto do Grande Palácio, em Bangkok, e faz a sua primeira conversa em tailandês.',
    cultural_context: 'O Grande Palácio (พระบรมมหาราชวัง) foi a residência oficial dos reis da Tailândia por mais de 150 anos e é um dos pontos mais visitados de Bangkok, com seus telhados dourados e templos no mesmo terreno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'สวัสดีค่ะ ดิฉันชื่อมาลีค่ะ สบายดีไหมคะ',
        translation: 'Oi! Eu me chamo Malee. Como você vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'สวัสดีครับ สบายดีครับ ขอบคุณครับ', translation: 'Oi! Eu vou bem, obrigado!', next: 'sabaai' },
          { text: 'ลาก่อนค่ะ', translation: 'Tchau!', wrong: 'Malee acabou de se apresentar e perguntar como você está: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      sabaai: {
        text: 'ดีค่ะ คุณชื่ออะไรคะ และมาจากที่ไหนคะ',
        translation: 'Que bom! Qual é o seu nome, e de onde você vem?',
        emoji: '😊',
        choices: [
          { text: 'ผมชื่อลูคัส ผมมาจากบราซิลครับ', translation: 'Eu me chamo Lucas. Eu venho do Brasil.', next: 'final_bom' },
          { text: 'ผมกินข้าวครับ', translation: 'Eu como arroz.', wrong: 'Isso não responde seu nome nem de onde você vem. Use “ผมชื่อ…” e “ผมมาจาก…”.' },
        ],
      },
      final_bom: {
        text: 'ยินดีที่ได้รู้จักค่ะ ขอต้อนรับสู่กรุงเทพค่ะ',
        translation: 'Prazer em te conhecer! Bem-vindo a Bangkok.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'บทสนทนาแรก', message: 'Malee sorri: você fez a sua primeira conversa em tailandês.' },
      },
    },
    glossary: [
      ['สวัสดี', 'oi, olá; tchau'],
      ['สบายดีไหม', 'como vai?'],
      ['ชื่อ…', 'me chamo…'],
      ['มาจาก…', 'eu venho de…'],
    ],
  },
  {
    id: 'th-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'อาหารเย็นที่เชียงใหม่',
    emoji: '👪',
    summary: 'สมชาย (Somchai), um amigo de Chiang Mai, pergunta pela sua família e convida você para jantar na casa dele.',
    cultural_context: 'Em Chiang Mai, é comum a refeição da noite reunir várias gerações da família ao redor de uma mesa baixa, com arroz (ข้าว), curries e muitas conversas — e quase sempre alguém pergunta pela família de quem está de visita.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'สวัสดีครับ คุณมีพี่น้องไหมครับ',
        translation: 'Oi! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'ใช่ค่ะ ฉันมีน้องสาวหนึ่งคน', translation: 'Sim, eu tenho uma irmã mais nova.', next: 'nongsaao' },
          { text: 'บ้านของฉันใหญ่ค่ะ', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ฉันมี…” ou “ฉันไม่มี…”.' },
        ],
      },
      nongsaao: {
        text: 'ดีจังครับ อยากมากินข้าวเย็นที่บ้านผมวันเสาร์ไหมครับ',
        translation: 'Que legal! Você quer vir jantar na minha casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'อยากค่ะ ขอบคุณมากค่ะ', translation: 'Eu quero, muito obrigada!', next: 'final_bom' },
          { text: 'ฉันอยู่กรุงเทพค่ะ', translation: 'Eu moro em Bangkok.', wrong: 'Somchai fez um convite: responda dizendo se você quer ir, com “อยาก” ou “ไม่อยาก”.' },
        ],
      },
      final_bom: {
        text: 'เยี่ยมเลยครับ แม่ผมทำข้าวอร่อยมาก',
        translation: 'Perfeito! A minha mãe faz uma comida muito gostosa.',
        emoji: '🍚',
        ending: { tone: 'bom', title: 'คำเชิญ', message: 'Você foi convidado(a) para jantar com a família de Somchai em Chiang Mai.' },
      },
    },
    glossary: [
      ['พี่น้อง', 'irmãos (mais velhos e mais novos)'],
      ['ฉันมี…', 'eu tenho…'],
      ['อยาก', 'querer'],
      ['อร่อย', 'gostoso'],
    ],
  },
  {
    id: 'th-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'ที่ตลาดจตุจักร',
    emoji: '🛍️',
    summary: 'No mercado de Chatuchak, em Bangkok, มาลี (Malee) ajuda você a escolher uma roupa num dia chuvoso.',
    cultural_context: 'O mercado de Chatuchak, fixado no bairro atual em 1982, reúne cerca de 15 mil barracas e é conhecido como um dos maiores mercados de fim de semana do mundo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'สวัสดีค่ะ วันนี้ฝนตก คุณจะซื้ออะไรคะ',
        translation: 'Oi! Hoje está chovendo. O que você vai comprar?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'สวัสดีครับ ผมจะซื้อหมวกใหม่ครับ', translation: 'Oi! Eu vou comprar um chapéu novo.', next: 'muak' },
          { text: 'ผมอายุยี่สิบปีครับ', translation: 'Eu tenho vinte anos.', wrong: 'Malee perguntou o que você vai comprar, não a sua idade. Use “ผม/ฉันจะซื้อ…”.' },
        ],
      },
      muak: {
        text: 'ดีค่ะ ร้านนี้มีเสื้อสวยด้วยค่ะ',
        translation: 'Que bom! Esta loja também tem camisas bonitas.',
        emoji: '🧢',
        choices: [
          { text: 'นี่ราคาเท่าไหร่ครับ', translation: 'Quanto custa isto?', next: 'final_bom' },
          { text: 'วันนี้ร้อนมากครับ', translation: 'Hoje está muito calor.', wrong: 'Isso não combina com a chuva que Malee mencionou. Pergunte o preço: “นี่ราคาเท่าไหร่?”.' },
        ],
      },
      final_bom: {
        text: 'ห้าสิบบาทค่ะ',
        translation: 'Cinquenta baht.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'ซื้อของที่จตุจักร', message: 'Você comprou a sua primeira roupa no mercado de Chatuchak, debaixo de chuva.' },
      },
    },
    glossary: [
      ['จะซื้อ', 'eu vou comprar'],
      ['ฝนตก', 'está chovendo'],
      ['ราคาเท่าไหร่', 'quanto custa'],
      ['ร้าน', 'loja'],
    ],
  },
  {
    id: 'th-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'สงกรานต์ที่เชียงใหม่',
    emoji: '💦',
    summary: 'Durante o Songkran, o ano novo tailandês, สมชาย (Somchai) pergunta sobre a sua profissão e os seus planos para a festa da água.',
    cultural_context: 'O Songkran, celebrado de 13 a 15 de abril, marca o ano novo tradicional tailandês: a água simboliza purificação e sorte, e a UNESCO reconheceu a tradição como Patrimônio Cultural Imaterial em 2023.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'สวัสดีครับ คุณทำงานอะไรครับ',
        translation: 'Oi! Qual é o seu trabalho?',
        emoji: '📱',
        choices: [
          { text: 'ฉันเป็นวิศวกรค่ะ', translation: 'Eu sou engenheira.', next: 'ngan' },
          { text: 'วันนี้ฝนตกค่ะ', translation: 'Hoje está chovendo.', wrong: 'Isso não responde sobre o seu trabalho. Diga a sua profissão.' },
        ],
      },
      ngan: {
        text: 'ดีครับ พรุ่งนี้คุณจะทำอะไรครับ',
        translation: 'Que ótimo! O que você vai fazer amanhã?',
        emoji: '😊',
        choices: [
          { text: 'พรุ่งนี้ฉันจะไปเล่นน้ำสงกรานต์ค่ะ', translation: 'Amanhã eu vou brincar com água no Songkran.', next: 'final_bom' },
          { text: 'ฉันเสียใจค่ะ', translation: 'Eu estou triste.', wrong: 'Somchai perguntou sobre os seus planos de amanhã, não sobre como você se sente. Use “จะ” para falar do futuro.' },
        ],
      },
      final_bom: {
        text: 'เยี่ยมเลยครับ ผมดีใจมากที่คุณจะมาเล่นน้ำด้วยกัน',
        translation: 'Que ótimo! Eu estou muito feliz que você vai brincar com água com a gente.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'สงกรานต์ด้วยกัน', message: 'Você falou sobre o seu trabalho e os seus planos de futuro em tailandês, durante o Songkran.' },
      },
    },
    glossary: [
      ['ทำงาน', 'trabalhar'],
      ['จะทำอะไร', 'você vai fazer o quê'],
      ['จะไปเล่นน้ำ', 'eu vou brincar com água'],
      ['ดีใจ', 'feliz'],
    ],
  },
];
