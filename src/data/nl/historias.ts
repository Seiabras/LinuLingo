import type { StorySeed } from '../types';

/** Histórias interativas do neerlandês — A1.1 ao A2.2, pacote incompleto (B1 em diante ainda falta). */
export const STORIES_NL: StorySeed[] = [
  {
    id: 'nl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo in Amsterdam',
    emoji: '👋',
    summary: 'Você conhece Anna na estação central de Amsterdã e faz a sua primeira conversa em neerlandês.',
    cultural_context: 'Amsterdã é a capital dos Países Baixos, famosa pelos canais e pelas bicicletas, o meio de transporte do dia a dia de muita gente.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Ik heet Anna. Hoe gaat het?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Goed, dank je! En met jou?', translation: 'Bem, obrigado! E você?', next: 'goed' },
          { text: 'Doei!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      goed: {
        text: 'Ook goed! Waar kom je vandaan?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ik kom uit São Paulo.', translation: 'Sou de São Paulo.', next: 'final_goed' },
          { text: 'Ik drink water.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ik kom uit…”.' },
        ],
      },
      final_goed: {
        text: 'Leuk! Welkom in Amsterdam!',
        translation: 'Que legal! Bem-vindo a Amsterdã!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Een goed begin!', message: 'Anna sorri: você fez a sua primeira conversa em neerlandês.' },
      },
    },
    glossary: [
      ['hallo', 'oi, olá'],
      ['hoe gaat het?', 'como vai?'],
      ['ik kom uit', 'eu sou de'],
      ['welkom', 'bem-vindo'],
    ],
  },
  {
    id: 'nl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Eten bij de familie',
    emoji: '👪',
    summary: 'Daan, um amigo de Utrecht, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Nos Países Baixos se janta cedo, muitas vezes por volta das seis da tarde, e o convite para jantar em casa é sinal de amizade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hoi! Heb jij broers of zussen?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ik heb een broer en een zus.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'broers' },
          { text: 'Mijn huis is groot.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ik heb…”.' },
        ],
      },
      broers: {
        text: 'Leuk! Kom je zaterdag bij ons eten?',
        translation: 'Que legal! Quer vir jantar na nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Ja, graag! Dank je!', translation: 'Sim, com prazer! Obrigado!', next: 'final_goed' },
          { text: 'Ik kom uit São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Daan fez um convite: responda com “Ja, graag!” ou “Nee, dank je”.' },
        ],
      },
      final_goed: {
        text: 'Super! Mijn moeder maakt stamppot.',
        translation: 'Ótimo! A minha mãe vai fazer stamppot (purê de batata com legumes).',
        emoji: '🥔',
        ending: { tone: 'bom', title: 'Een uitnodiging!', message: 'Você foi convidado para jantar com a família de Daan.' },
      },
    },
    glossary: [
      ['broer / zus', 'irmão / irmã'],
      ['ik heb', 'eu tenho'],
      ['ja, graag', 'sim, com prazer'],
      ['bij ons', 'na nossa casa'],
    ],
  },
  {
    id: 'nl-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Regen in Rotterdam',
    emoji: '🌧️',
    summary: 'Sara, uma amiga de Rotterdam, encontra você numa tarde chuvosa e conta o que comprou para enfrentar o frio.',
    cultural_context: 'Rotterdam, reconstruída depois da Segunda Guerra Mundial com arquitetura moderna, é uma das cidades mais chuvosas dos Países Baixos — a bicicleta com capa de chuva é cena comum nas ruas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hoi! Wat een weer, hè? Het heeft de hele dag geregend.',
        translation: 'Oi! Que tempo, não? Choveu o dia todo.',
        emoji: '🌧️',
        choices: [
          { text: 'Ja, en het is ook koud!', translation: 'Sim, e também está frio!', next: 'koud' },
          { text: 'Ik heb een broer en een zus.', translation: 'Eu tenho um irmão e uma irmã.', wrong: 'Sara está falando do tempo, não perguntou sobre a sua família. Responda sobre o clima.' },
        ],
      },
      koud: {
        text: 'Precies! Ik heb vandaag een nieuwe jas gekocht.',
        translation: 'Exatamente! Eu comprei uma jaqueta nova hoje.',
        emoji: '🧥',
        choices: [
          { text: 'Mooi! Ik moet ook een trui kopen.', translation: 'Que bonita! Eu também tenho que comprar um suéter.', next: 'final_goed' },
          { text: 'De kat is zwart.', translation: 'O gato é preto.', wrong: 'Isso não tem nada a ver com roupas ou o tempo. Fale sobre o que você precisa comprar.' },
        ],
      },
      final_goed: {
        text: 'Goed idee! Dan kun je warm blijven.',
        translation: 'Boa ideia! Assim você consegue ficar aquecido.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Warm en droog!', message: 'Você e Sara conversaram sobre o tempo e as roupas para o frio, usando o perfeito e um verbo modal.' },
      },
    },
    glossary: [
      ['wat een weer, hè?', 'que tempo, não?'],
      ['het heeft geregend', 'choveu'],
      ['ik heb… gekocht', 'eu comprei…'],
      ['ik moet… kopen', 'eu tenho que comprar…'],
    ],
  },
  {
    id: 'nl-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Bij de dokter',
    emoji: '🧑‍⚕️',
    summary: 'Você vai ao médico de família (huisarts) em Utrecht porque está com dor de cabeça, e conta como está se sentindo.',
    cultural_context: 'Nos Países Baixos, quase todo mundo tem um “huisarts”, o médico de família, que é o primeiro contato antes de qualquer especialista — mesmo para coisas simples, como uma dor de cabeça.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Wat is er aan de hand? Wat doet er pijn?',
        translation: 'Oi! O que está acontecendo? O que está doendo?',
        emoji: '🧑‍⚕️',
        choices: [
          { text: 'Mijn hoofd doet pijn.', translation: 'Minha cabeça está doendo.', next: 'hoofd' },
          { text: 'Ik ben leraar.', translation: 'Eu sou professor.', wrong: 'O médico perguntou o que está doendo, não qual é a sua profissão. Fale sobre a dor.' },
        ],
      },
      hoofd: {
        text: 'Hoe voel je je verder? Ben je ook moe?',
        translation: 'Como você está se sentindo além disso? Você também está cansado?',
        emoji: '😴',
        choices: [
          { text: 'Ja, ik ben erg moe.', translation: 'Sim, estou muito cansado.', next: 'final_goed' },
          { text: 'Ik draag een jas.', translation: 'Eu estou usando uma jaqueta.', wrong: 'O médico perguntou como você se sente, não sobre a sua roupa. Fale sobre o cansaço.' },
        ],
      },
      final_goed: {
        text: 'Begrijpelijk. Drink veel water en rust goed uit.',
        translation: 'Compreensível. Beba muita água e descanse bem.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Goede raad!', message: 'Você conseguiu explicar ao médico onde dói e como se sente, usando o vocabulário do corpo e dos sentimentos.' },
      },
    },
    glossary: [
      ['wat doet er pijn?', 'o que está doendo?'],
      ['mijn hoofd doet pijn', 'minha cabeça está doendo'],
      ['hoe voel je je?', 'como você se sente?'],
      ['ik ben moe', 'eu estou cansado'],
    ],
  },
];
