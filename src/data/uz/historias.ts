import type { StorySeed } from '../types';

/** Histórias interativas do uzbeque — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_UZ: StorySeed[] = [
  {
    id: 'uz-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Salom, Toshkentda!',
    emoji: '👋',
    summary: 'Você conhece Aziz na praça Amir Temur, em Tashkent, e faz a sua primeira conversa em uzbeque.',
    cultural_context: 'Tashkent (Toshkent) é a capital e a maior cidade do Uzbequistão, e a praça Amir Temur, com a estátua do conquistador turco-mongol do século XIV, é um dos pontos de encontro mais conhecidos da cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Assalomu alaykum! Siz kimsiz?',
        translation: 'Olá! Quem é você?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Vaalaykum assalom! Men Linuman.', translation: 'Olá! Eu sou o Linu.', next: 'nome' },
          { text: 'Xayr!', translation: 'Tchau!', wrong: 'Aziz acabou de te cumprimentar: despedir-se agora seria estranho. Responda o cumprimento primeiro.' },
        ],
      },
      nome: {
        text: 'Yaxshimisiz, Linu? Men Azizman.',
        translation: 'Como vai, Linu? Eu sou o Aziz.',
        emoji: '😊',
        choices: [
          { text: 'Men yaxshiman, rahmat!', translation: 'Eu estou bem, obrigado!', next: 'final_bun' },
          { text: 'Men suv ichaman.', translation: 'Eu bebo água.', wrong: 'Isso não responde como você está. Use “Men yaxshiman…”.' },
        ],
      },
      final_bun: {
        text: 'Juda yaxshi! Toshkentga xush kelibsiz!',
        translation: 'Muito bem! Bem-vindo a Tashkent!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Yaxshi boshlanish!', message: 'Aziz sorri: você fez a sua primeira conversa em uzbeque.' },
      },
    },
    glossary: [
      ['assalomu alaykum', 'olá (saudação respeitosa)'],
      ['siz kimsiz?', 'quem é você?'],
      ['men … -man', 'eu sou …'],
      ['xush kelibsiz', 'bem-vindo'],
    ],
  },
  {
    id: 'uz-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mening oilam',
    emoji: '👪',
    summary: 'Malika, uma amiga de Samarcanda, pergunta sobre a sua família e convida você para conhecer a dela.',
    cultural_context: 'Samarcanda (Samarqand) é, com Bucara, uma das cidades mais antigas da Ásia Central e outro ponto central da Rota da Seda; em uzbeque, a família estendida costuma morar perto umas das outras.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salom! Sizning oilangiz katta mi?',
        translation: 'Oi! Sua família é grande?',
        emoji: '📱',
        choices: [
          { text: 'Ha, mening oilam katta.', translation: 'Sim, minha família é grande.', next: 'familia' },
          { text: 'Men non yeyman.', translation: 'Eu como pão.', wrong: 'Isso não responde sobre a sua família. Use “mening oilam…”.' },
        ],
      },
      familia: {
        text: 'Zoʻr! Mening akam bor. Sizning akangiz yoki singlingiz bor mi?',
        translation: 'Ótimo! Eu tenho um irmão mais velho. Você tem um irmão mais velho ou uma irmã mais nova?',
        emoji: '🤔',
        choices: [
          { text: 'Ha, mening singlim bor.', translation: 'Sim, eu tenho uma irmã mais nova.', next: 'final_bun' },
          { text: 'Men Toshkentdan keldim.', translation: 'Eu vim de Tashkent.', wrong: 'Malika perguntou sobre irmãos: responda com “mening … bor” ou “yoʻq”.' },
        ],
      },
      final_bun: {
        text: 'Qiziq! Keling, mening oilam bu yerda.',
        translation: 'Que interessante! Venha, minha família está aqui.',
        emoji: '🏠',
        ending: { tone: 'bom', title: 'Taklif!', message: 'Você foi convidado para conhecer a família de Malika.' },
      },
    },
    glossary: [
      ['oilangiz katta mi?', 'sua família é grande?'],
      ['mening … bor', 'eu tenho …'],
      ['aka / singil', 'irmão mais velho / irmã mais nova'],
      ['keling', 'venha'],
    ],
  },
];
