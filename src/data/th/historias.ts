import type { StorySeed } from '../types';

/** Histórias interativas do tailandês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
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
];
