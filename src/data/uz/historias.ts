import type { StorySeed } from '../types';

/** Histórias interativas do uzbeque — uma por nível (A1.1, A1.2, A2.1 e A2.2), pacote incompleto. */
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
  {
    id: 'uz-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Yangi koʻylak',
    emoji: '👔',
    summary: 'Você vai a uma loja em Bukhara comprar uma camisa nova e pergunta pelo hospital mais próximo para um amigo.',
    cultural_context: 'Bukhara (Buxoro), como Samarcanda, foi uma parada central da Rota da Seda, com mercados cobertos (toqi) cheios de lojinhas de tecido e artesanato até hoje.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Assalomu alaykum! Yordam bera olamanmi?',
        translation: 'Olá! Posso ajudar?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ha, marhamat. Yangi koʻylak qidirayapman.', translation: 'Sim, por favor. Estou procurando uma camisa nova.', next: 'koylak' },
          { text: 'Tashqarida yomgʻir bor.', translation: 'Está chovendo lá fora.', wrong: 'A vendedora perguntou se pode ajudar: diga o que você procura, usando “…qidirayapman”.' },
        ],
      },
      koylak: {
        text: 'Koʻk va qizil bor. Qaysi birini xohlaysiz?',
        translation: 'Temos azul e vermelha. Qual você quer?',
        emoji: '👔',
        choices: [
          { text: 'Koʻk koʻylak xohlayman, marhamat.', translation: 'Eu quero uma camisa azul, por favor.', next: 'kasalxona' },
          { text: 'Men oʻttiz yoshdaman.', translation: 'Eu tenho trinta anos.', wrong: 'Isso não responde sobre a cor da camisa. Use “…xohlayman”.' },
        ],
      },
      kasalxona: {
        text: 'Mana, marhamat. Yana nima kerak?',
        translation: 'Aqui está, por favor. Mais alguma coisa você precisa?',
        emoji: '🛍️',
        choices: [
          { text: 'Shu yerda kasalxona bormi? Doʻstim kasal.', translation: 'Tem um hospital por aqui? Meu amigo está doente.', next: 'final' },
          { text: 'Men sut ichaman.', translation: 'Eu bebo leite.', wrong: 'Isso não tem nada a ver com a situação. Pergunte pelo hospital com “… bormi?”.' },
        ],
      },
      final: {
        text: 'Kasalxona shu koʻchada, yaqin.',
        translation: 'O hospital é nesta rua, perto.',
        emoji: '🏥',
        ending: { tone: 'bom', title: 'Ajoyib!', message: 'Você comprou uma camisa nova e descobriu onde fica o hospital, tudo em uzbeque.' },
      },
    },
    glossary: [
      ['qidirayapman', 'eu procuro'],
      ['xohlayman', 'eu quero'],
      ['… bormi?', 'tem…?'],
      ['kasalxona', 'hospital'],
    ],
  },
  {
    id: 'uz-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Kecha nima qildingiz?',
    emoji: '⏳',
    summary: 'Um colega de trabalho pergunta o que você fez ontem e qual é a sua profissão.',
    cultural_context: 'Perguntar “Ishingiz nima?” (qual é o seu trabalho?) é uma forma comum de conhecer a profissão de alguém numa conversa no Uzbequistão.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salom! Kecha nima qildingiz?',
        translation: 'Oi! O que você fez ontem?',
        emoji: '📱',
        choices: [
          { text: 'Maktabda ishladim.', translation: 'Eu trabalhei numa escola.', next: 'profissao' },
          { text: 'Mening koʻzim koʻk.', translation: 'Meu olho é azul.', wrong: 'Isso não responde o que você fez ontem. Use o passado, como “ishladim”.' },
        ],
      },
      profissao: {
        text: 'Demak, siz oʻqituvchisiz? Bugun ishlashingiz kerakmi?',
        translation: 'Então você é professor(a)? Hoje você precisa trabalhar?',
        emoji: '🤔',
        choices: [
          { text: 'Ha, men oʻqituvchiman va bugun ishlashim kerak.', translation: 'Sim, eu sou professor(a) e hoje preciso trabalhar.', next: 'final' },
          { text: 'Men uyga borishim mumkin.', translation: 'Eu posso ir para casa.', wrong: 'Isso não responde se você precisa trabalhar hoje. Use “kerak” ou “kerak emas”.' },
        ],
      },
      final: {
        text: 'Ajoyib! Yaxshi ish kunlari!',
        translation: 'Ótimo! Bons dias de trabalho!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Yaxshi suhbat!', message: 'Você contou o que fez ontem e falou da sua profissão, usando o passado e o modal “kerak”.' },
      },
    },
    glossary: [
      ['kecha nima qildingiz?', 'o que você fez ontem?'],
      ['ishladim', 'eu trabalhei'],
      ['…kerak', 'é preciso…'],
      ['oʻqituvchi', 'professor'],
    ],
  },
];
