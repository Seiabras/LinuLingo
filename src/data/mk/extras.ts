import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no macedônio). */
export const COMMUNITY_MK: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Твоето име, твојот град и твоето семејство.',
    content: 'Здраво! Се викам Бруно и сум од Куритиба. Имам брат еден.',
    reference: 'Здраво! Се викам Бруно и сум од Куритиба. Имам еден брат.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Што јадеш наутро?',
    content: 'Јадам леб и сирењето.',
    reference: 'Јадам леб и сирење.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Каква е твојата куќа?',
    content: 'Мојата куќа е мал.',
    reference: 'Мојата куќа е мала.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_MK: ScenarioSeed[] = [
  {
    id: 'mk-s1',
    title: 'Кафе во Скопје',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ана, колешка од курсот по македонски',
    description: 'Ана те поканува на кафе во центарот на Скопје. Е разговор меѓу колеги: користи “ти”.',
    turns: [
      {
        bot: 'Здраво! Што сакаш да пиеш?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['кафе', 'вода', 'млеко'],
        suggestions: ['Едно кафе, молам.', 'Една вода, молам.'],
      },
      {
        bot: 'Од каде си?',
        botTranslation: 'De onde você é?',
        keywords: ['сум од'],
        suggestions: ['Јас сум од Сао Паоло.', 'Јас сум од Салвадор.'],
      },
    ],
  },
];

/** Palavras do macedônio com a raiz eslava e os parentes em outras línguas. */
export const ETYMOLOGY_MK: EtymologySeed[] = [
  {
    word: 'вода',
    root_word: 'voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['bg', 'вода'], ['hr', 'voda']),
    evolution_note: '“Вода” vem do protoeslavo “voda”, da mesma raiz indo-europeia de “hidro-” (como em “hidrelétrica”) — não é parente de “água”, que vem do latim “aqua”.',
    transparent: false,
  },
  {
    word: 'брат',
    root_word: 'bratъ',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'брат'], ['la', 'frater'], ['pt', 'frade, fraterno']),
    evolution_note: '“Брат” vem do protoeslavo “bratъ”, parente do latim “frater” — a mesma raiz indo-europeia que deu “frade” e “fraterno” em português, embora a forma tenha mudado muito nos dois ramos.',
    transparent: false,
  },
  {
    word: 'три',
    root_word: 'trьje',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'три'], ['la', 'tres'], ['pt', 'três']),
    evolution_note: '“Три” e “três” vêm da mesma raiz indo-europeia, “trei-”, como o latim “tres” e o inglês “three”.',
    transparent: true,
  },
  {
    word: 'сестра',
    root_word: 'sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'сестра'], ['en', 'sister'], ['la', 'soror']),
    evolution_note: '“Сестра” vem da mesma raiz indo-europeia que o latim “soror” e o inglês “sister” — o português trocou essa palavra por “irmã”, do latim “germana” (do mesmo sangue).',
    transparent: false,
  },
  {
    word: 'добра ноќ',
    root_word: 'noktь',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'ночь'], ['la', 'nox, noctis'], ['pt', 'noite']),
    evolution_note: '“Ноќ” vem da mesma raiz indo-europeia que o latim “nox” e o português “noite”. O grupo “кт” do protoeslavo amoleceu até virar a letra “ќ” — a mesma mudança de som que deu ao macedônio essa letra própria.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_MK: [string, string][] = [
  ['Како си денес?', 'Como você está hoje?'],
  ['Раскажи ми за твоето семејство.', 'Conte-me sobre a sua família.'],
  ['Што сакаш да јадеш и да пиеш?', 'O que você gosta de comer e beber?'],
  ['Каква е твојата куќа?', 'Como é a sua casa?'],
];

export const SHADOWING_MK: [string, string][] = [
  ['Здраво! Се викам Ана.', 'Oi! Eu me chamo Ana.'],
  ['Добро, благодарам! А ти?', 'Bem, obrigado! E você?'],
  ['Имам брат и сестра.', 'Tenho um irmão e uma irmã.'],
  ['Не знам.', 'Não sei.'],
];
