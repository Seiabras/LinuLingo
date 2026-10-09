import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no cantonês). */
export const COMMUNITY_YUE: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: '你有冇朋友呀？',
    content: '我有三朋友。',
    reference: '我有三個朋友。',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: '你有冇貓呀？',
    content: '我唔有貓，但係我有狗。',
    reference: '我冇貓，但係我有狗。',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: '你鍾意茶同咖啡呀？',
    content: '我鍾意茶，咖啡鍾意都。',
    reference: '我鍾意茶，咖啡都鍾意。',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_YUE: ScenarioSeed[] = [
  {
    id: 'yue-s1',
    title: '喺香港飲茶',
    emoji: '🍵',
    cefr: 'A1',
    register: 'informal',
    persona: 'Wing, 一個喺香港嘅朋友',
    description: 'Wing convida você para tomar chá em Hong Kong. É uma conversa entre amigos, sem formalidade especial.',
    turns: [
      {
        bot: '你想飲咩呀？',
        botTranslation: 'O que você quer beber?',
        keywords: ['茶', '水', '咖啡'],
        suggestions: ['我想飲茶，唔該。', '一個咖啡，唔該。'],
      },
      {
        bot: '你係邊度人呀？',
        botTranslation: 'De onde você é?',
        keywords: ['我係', '人'],
        suggestions: ['我係巴西人。'],
      },
    ],
  },
];

/** Palavras do cantonês com a origem real e, quando existe, o parentesco com o português. */
export const ETYMOLOGY_YUE: EtymologySeed[] = [
  {
    word: '茶',
    root_word: '茶 (caa⁴)',
    origin_language: 'Cantonês',
    cognates: c(['pt', 'chá'], ['en', 'tea (via rota diferente, o hokkien “te”)']),
    evolution_note:
      'O português “chá” veio direto do cantonês 茶 (caa⁴), não do mandarim: embora muitos dicionários portugueses citem o mandarim como origem, o comércio português de chá no século XVI e XVII passava por Macau e por Guangdong, região de fala cantonesa (fonte: Wikcionário em português, verbete “chá”). O inglês “tea”, ao contrário, veio por outra rota, do hokkien (min nan) “te”, via comércio holandês.',
    transparent: true,
  },
  {
    word: '咖啡',
    root_word: 'qahwa (قهوة)',
    origin_language: 'Árabe, via turco otomano e italiano',
    cognates: c(['pt', 'café'], ['en', 'coffee'], ['fr', 'café']),
    evolution_note:
      'O cantonês 咖啡 (gaa³ fe¹) e o português “café” não são parentes diretos, mas têm a mesma origem distante: as duas palavras vêm do árabe “qahwa”, que passou pelo turco otomano “kahve” e pelo italiano “caffè” antes de se espalhar pela Europa — e, depois, virar empréstimo em diferentes línguas chinesas (fonte: Wikcionário em inglês, verbete “咖啡”). Por isso “gaa³ fe¹” e “café” soam parecidos: não por acaso, mas porque desembocam na mesma palavra árabe.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_YUE: [string, string][] = [
  ['你今日點樣呀？', 'Como você está hoje?'],
  ['講你嘅屋企同你嘅朋友。', 'Fale da sua casa e do seu amigo.'],
  ['你鍾意飲咩呀？', 'O que você gosta de beber?'],
  ['你屋企喺邊度？', 'Onde fica a sua casa?'],
];

export const SHADOWING_YUE: [string, string][] = [
  ['你好！我係Linu。', 'Oi! Eu sou o Linu.'],
  ['我好好，唔該！', 'Eu estou bem, obrigado!'],
  ['我有一個哥哥同一個妹妹。', 'Eu tenho um irmão mais velho e uma irmã mais nova.'],
  ['我嘅屋企好細，但係好好。', 'A minha casa é bem pequena, mas é boa.'],
];
