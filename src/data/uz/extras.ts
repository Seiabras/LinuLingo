import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no uzbeque). */
export const COMMUNITY_UZ: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ismingiz nima? Siz kimsiz?',
    content: 'Salom! Mening ism Bruno. Men Curitiba.',
    reference: 'Salom! Mening ismim Bruno.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Nima yeysiz?',
    content: 'Men non yemoq.',
    reference: 'Men non yeyman.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Sizning oilangiz qanday?',
    content: 'Mening oila katta.',
    reference: 'Mening oilam katta.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_UZ: ScenarioSeed[] = [
  {
    id: 'uz-s1',
    title: 'Toshkentda choyxonada',
    emoji: '🍵',
    cefr: 'A1',
    register: 'informal',
    persona: 'Dilnoza, uma colega do curso de uzbeque',
    description: 'Dilnoza convida você para um chá numa choyxona (casa de chá) no centro de Tashkent. É uma conversa entre colegas: use “sen”.',
    turns: [
      {
        bot: 'Salom! Nima ichasan?',
        botTranslation: 'Oi! O que você bebe?',
        keywords: ['choy', 'suv', 'sut'],
        suggestions: ['Bir choy, marhamat.', 'Men suv ichaman.'],
      },
      {
        bot: 'Sening oilang katta mi?',
        botTranslation: 'Sua família é grande?',
        keywords: ['oilam', 'katta', 'kichik'],
        suggestions: ['Ha, mening oilam katta.', 'Yoʻq, mening oilam kichik.'],
      },
    ],
  },
];

/** Palavras do uzbeque que vieram de outras línguas (sobretudo árabe e persa, pela Rota da Seda). */
export const ETYMOLOGY_UZ: EtymologySeed[] = [
  {
    word: 'rahmat',
    root_word: 'raḥma',
    origin_language: 'Árabe',
    cognates: c(['tr', 'rahmet (misericórdia)'], ['ar', 'رحمة (raḥma)']),
    evolution_note:
      'O árabe “raḥma” (misericórdia) passou ao persa e ao chagatai como “rahmat”, ainda com o sentido de “misericórdia”. No uzbeque, virou o “obrigado” do dia a dia — uma mudança de sentido parecida com a do francês “merci”, que também veio de “mercê” (misericórdia), e que pode ter influenciado o uso na Ásia Central depois da era soviética.',
    transparent: false,
  },
  {
    word: 'oila',
    root_word: 'ʿāʾila',
    origin_language: 'Árabe',
    cognates: c(['tr', 'aile'], ['ar', 'عائلة (ʿāʾila)']),
    evolution_note: 'Do árabe “ʿāʾila” (família), a mesma raiz que deu “aile” em turco — mas chegou a cada língua por um caminho próprio dentro do mundo islâmico.',
    transparent: false,
  },
  {
    word: 'kitob',
    root_word: 'kitāb',
    origin_language: 'Árabe',
    cognates: c(['sw', 'kitabu'], ['ar', 'كتاب (kitāb)']),
    evolution_note: 'Do árabe “kitāb” (livro), espalhado pelo islã a línguas bem distantes entre si: do uzbeque ao suaíli (“kitabu”), passando pelo persa e pelo turco (“kitap”).',
    transparent: false,
  },
  {
    word: 'soat',
    root_word: 'sāʿa',
    origin_language: 'Árabe',
    cognates: c(['ar', 'ساعة (sāʿa)']),
    evolution_note: 'Do árabe “sāʿa” (hora, também “relógio”). A mesma palavra árabe se tornou “hora” em dezenas de línguas islâmicas da Ásia e da África.',
    transparent: false,
  },
  {
    word: 'shahar',
    root_word: 'shahr',
    origin_language: 'Persa',
    cognates: c(['tr', 'şehir'], ['hi', 'शहर (shahar)']),
    evolution_note: 'Do persa “shahr” (cidade), a mesma raiz do turco “şehir” e do híndi/urdu “shahar/shahr” — um rastro da época em que o persa era a língua de cultura de toda a Ásia Central e do Sul.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_UZ: [string, string][] = [
  ['Bugun qalaysiz?', 'Como você está hoje?'],
  ['Oilangiz haqida gapiring.', 'Fale da sua família.'],
  ['Nima yeyishni va ichishni yoqtirasiz?', 'O que você gosta de comer e de beber?'],
  ['Uyingiz qanday?', 'Como é a sua casa?'],
];

export const SHADOWING_UZ: [string, string][] = [
  ['Salom! Mening ismim Ana.', 'Oi! Meu nome é Ana.'],
  ['Men yaxshiman, rahmat! Sizchi?', 'Eu estou bem, obrigado! E você?'],
  ['Mening bir akam va bir singlim bor.', 'Eu tenho um irmão mais velho e uma irmã mais nova.'],
  ['Men bilmayman.', 'Eu não sei.'],
];
