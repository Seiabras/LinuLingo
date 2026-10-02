import type { StorySeed } from '../types';

/**
 * Histórias interativas do mongol khalkha (mn) — uma por nível (A1.1 e A1.2), pacote incompleto. As
 * falas usam, sempre que possível, frases atestadas em omniglot.com/language/phrases/mongolian.php e em
 * verbetes do Wiktionary (ver o cabeçalho de vocabulario.ts para a lista completa de fontes); algumas
 * combinam palavras atestadas separadamente num padrão gramatical já confirmado (como “[verbo no
 * infinitivo] + уу?” para perguntas de sim/não, visto em “байна уу”). Em nenhum momento um personagem
 * decide a identidade do jogador: nos nós de apresentação, o jogador escolhe entre mais de um nome e
 * mais de uma origem possível.
 */
export const STORIES_MN: StorySeed[] = [
  {
    id: 'mn-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Сайн байна уу?',
    emoji: '👋',
    summary: 'Um encontro na estepe: cumprimentar, dizer seu nome e de onde você é.',
    cultural_context: 'Na estepe mongol, encontrar alguém de longe é um evento: o cumprimento “Сайн байна уу?” (lit. “você está bem?”) e as perguntas sobre nome e origem são o início natural de qualquer conversa, mesmo entre desconhecidos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Сайн байна уу?',
        translation: 'Olá! (lit. “você está bem?”)',
        emoji: '👋',
        choices: [
          { text: 'Сайн, та сайн байна уу?', translation: 'Bem, e você?', next: 'nome' },
          { text: 'Баяртай!', translation: 'Tchau!', wrong: 'A pessoa acabou de cumprimentar você; despedir-se agora seria estranho. Responda ao cumprimento com “Сайн, та сайн байна уу?” (bem, e você?).' },
        ],
      },
      nome: {
        text: 'Таны нэр хэн бэ?',
        translation: 'Qual é o seu nome? (lit. “seu nome quem é?”)',
        emoji: '❓',
        choices: [
          { text: 'Миний нэр Лина.', translation: 'Meu nome é Lina.', next: 'origem' },
          { text: 'Миний нэр Батаа.', translation: 'Meu nome é Bataa.', next: 'origem' },
          { text: 'Баярлалаа.', translation: 'Obrigado(a).', wrong: 'Isso não responde qual é o seu nome. Diga “Миний нэр …” (meu nome é …).' },
        ],
      },
      origem: {
        text: 'Та хаанаас ирсэн бэ?',
        translation: 'De onde você é?',
        emoji: '🌍',
        choices: [
          { text: 'Би Бразилээс ирсэн.', translation: 'Eu sou do Brasil.', next: 'amizade' },
          { text: 'Би Монголоос ирсэн.', translation: 'Eu sou da Mongólia.', next: 'amizade' },
          { text: 'Энэ морь.', translation: 'Isto é um cavalo.', wrong: 'Isso muda de assunto: a pergunta foi sobre de onde você é. Responda com “Би …ээс ирсэн” (eu sou de …).' },
        ],
      },
      amizade: {
        text: 'Энэ хүн миний найз.',
        translation: 'Esta pessoa é meu amigo/minha amiga.',
        emoji: '🤝',
        choices: [
          { text: 'Сайн байна уу?', translation: 'Olá!', next: 'final' },
          { text: 'Баяртай!', translation: 'Tchau!', wrong: 'Seria rude se despedir sem cumprimentar o amigo/a amiga que acabou de ser apresentado(a). Diga “Сайн байна уу?” (olá!).' },
        ],
      },
      final: {
        text: 'Баяртай!',
        translation: 'Tchau!',
        emoji: '👋',
        ending: { tone: 'bom', title: 'Шинэ найз', message: 'Você se apresentou, disse de onde é e cumprimentou um novo amigo na estepe mongol.' },
      },
    },
    glossary: [
      ['сайн байна уу', 'olá (lit. “você está bem?”)'],
      ['баярлалаа', 'obrigado, obrigada'],
      ['баяртай', 'tchau, adeus'],
      ['миний', 'meu, minha'],
      ['нэр', 'nome'],
      ['хэн', 'quem'],
      ['хаана', 'onde (aqui, na forma “хаанаас”, de onde)'],
      ['найз', 'amigo, amiga'],
      ['энэ', 'este, esta, isto'],
    ],
  },
  {
    id: 'mn-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Гэрт зочлох',
    emoji: '⛺',
    summary: 'Uma visita a uma guer: aceitar chá ou airag e falar sobre os animais ao redor.',
    cultural_context: 'Receber visitas com chá (“цай”) ou airag (“айраг”, leite de égua fermentado) é um costume central da hospitalidade mongol tradicional, assim como morar perto do próprio gado — cavalos, ovelhas, cabras e camelos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Тавтай морилогтун!',
        translation: 'Bem-vindo(a)! (saudação de boas-vindas)',
        emoji: '⛺',
        choices: [
          { text: 'Баярлалаа!', translation: 'Obrigado(a)!', next: 'comida' },
          { text: 'Баяртай!', translation: 'Tchau!', wrong: 'Isso quer dizer “tchau” — você acabou de chegar! Agradeça o convite com “Баярлалаа!” (obrigado).' },
        ],
      },
      comida: {
        text: 'Цай уух уу? Айраг уух уу?',
        translation: 'Quer beber chá? Quer beber airag?',
        emoji: '🍵',
        choices: [
          { text: 'Цай, баярлалаа.', translation: 'Chá, obrigado(a).', next: 'animais' },
          { text: 'Айраг, баярлалаа.', translation: 'Airag, obrigado(a).', next: 'animais' },
          { text: 'Энэ гэр.', translation: 'Isto é uma casa/guer.', wrong: 'Isso não responde o que você quer beber. Escolha “цай” (chá) ou “айраг” (airag).' },
        ],
      },
      animais: {
        text: 'Энд морь, хонь, ямаа байна.',
        translation: 'Aqui há cavalo, ovelha e cabra.',
        emoji: '🐴',
        choices: [
          { text: 'Тэмээ хаана байна?', translation: 'Onde está o camelo?', next: 'final' },
          { text: 'Би найзаа аварсан.', translation: 'Eu salvei meu amigo.', wrong: 'Isso não tem relação com os animais ao redor. Pergunte sobre outro animal, como “Тэмээ хаана байна?” (onde está o camelo?).' },
        ],
      },
      final: {
        text: 'Тэмээ тэнд байна.',
        translation: 'O camelo está ali.',
        emoji: '🐫',
        ending: { tone: 'bom', title: 'Гэрт зочлох', message: 'Você aceitou a hospitalidade da guer — chá ou airag — e conheceu os animais da família: cavalo, ovelha, cabra e camelo.' },
      },
    },
    glossary: [
      ['баярлалаа', 'obrigado, obrigada'],
      ['цай', 'chá'],
      ['айраг', 'airag (leite de égua fermentado)'],
      ['энд', 'aqui'],
      ['тэнд', 'ali, lá'],
      ['морь', 'cavalo'],
      ['хонь', 'ovelha'],
      ['ямаа', 'cabra'],
      ['тэмээ', 'camelo'],
      ['хаана', 'onde'],
      ['гэр', 'casa, guer (tenda redonda mongol)'],
    ],
  },
];
