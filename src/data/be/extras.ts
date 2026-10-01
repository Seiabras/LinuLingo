import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no bielorrusso). */
export const COMMUNITY_BE: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Як цябе́ зва́ць і адку́ль ты?',
    content: 'Прывіта́нне! Я зва́ць Бру́на і я з Курыты́ба.',
    reference: 'Прывіта́нне! Мяне́ зва́ць Бру́на і я з Курыты́ба.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Што ты еш ура́нку?',
    content: 'Я ем хлеб і сыра.',
    reference: 'Я ем хлеб і сыр.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'У цябе́ ёсць сястра́?',
    content: 'Я не мець сястра́.',
    reference: 'У мяне́ няма́ сястры́.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_BE: ScenarioSeed[] = [
  {
    id: 'be-s1',
    title: 'Ка́ва ў Мі́нску',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Во́ля, сяброўка з ку́рсаў белару́скай мо́вы',
    description: 'Volia convida você para um café no centro de Minsk. É uma conversa entre amigos: use “ты”.',
    turns: [
      {
        bot: 'Прывіта́нне! Што хо́чаш піць?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['ка́ва', 'вада́', 'малако́'],
        suggestions: ['Ка́ву, калі́ ла́ска.', 'Ваду́, калі́ ла́ска.'],
      },
      {
        bot: 'Адку́ль ты?',
        botTranslation: 'De onde você é?',
        keywords: ['я з'],
        suggestions: ['Я з Сан-Паўлу.', 'Я з Салвадо́ра.'],
      },
    ],
  },
];

/** Palavras do bielorrusso com a raiz eslava e os parentes nas línguas irmãs. */
export const ETYMOLOGY_BE: EtymologySeed[] = [
  {
    word: 'дом',
    root_word: 'domъ',
    origin_language: 'Eslavo oriental antigo',
    cognates: c(['ru', 'дом'], ['uk', 'дім'], ['pt', 'domicílio']),
    evolution_note: 'A mesma raiz eslava de “дом” deu o russo “дом” e o ucraniano “дім”; em português, ela chegou pelo latim em palavras cultas como “domicílio” e “doméstico”, não em “casa” (que vem de outra raiz latina).',
    transparent: false,
  },
  {
    word: 'вада́',
    root_word: 'voda',
    origin_language: 'Eslavo oriental antigo',
    cognates: c(['ru', 'вода'], ['uk', 'вода'], ['pt', 'água (via latim)']),
    evolution_note: 'A raiz eslava “voda” é prima distante do latim “aqua” (água): as duas vêm da mesma raiz indo-europeia para “úmido, molhado”, mas seguiram caminhos de som bem diferentes.',
    transparent: true,
  },
  {
    word: 'брат',
    root_word: 'bratrъ',
    origin_language: 'Eslavo oriental antigo',
    cognates: c(['ru', 'брат'], ['uk', 'брат'], ['pt', 'frade, fraterno'], ['ro', 'frate']),
    evolution_note: 'A mesma raiz indo-europeia que deu “frater” em latim: o bielorrusso, o russo e o ucraniano guardaram essa palavra para “irmão”, como o romeno “frate”; o português preferiu “germanus” (daí “irmão”) e deixou “frater” só em palavras cultas como “frade” e “fraterno”.',
    transparent: false,
  },
  {
    word: 'малако́',
    root_word: 'melko',
    origin_language: 'Eslavo oriental antigo',
    cognates: c(['ru', 'молоко'], ['uk', 'молоко']),
    evolution_note: 'A raiz eslava “melko” é prima distante do grego “gala/galaktos” (daí “galáxia” e “lactose”, em português) e do latim “lac”: todas vêm da mesma raiz indo-europeia para “leite”.',
    transparent: false,
  },
  {
    word: 'сям’я́',
    root_word: 'sěmьja',
    origin_language: 'Eslavo oriental antigo',
    cognates: c(['ru', 'семья'], ['uk', 'сім’я']),
    evolution_note: 'Vem da mesma raiz que “сям’я” carrega em russo e ucraniano, ligada à ideia antiga de “os que moram sob o mesmo teto” (parente distante de “semear”, no sentido de descendência).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_BE: [string, string][] = [
  ['Як спра́вы сёння?', 'Como vai hoje?'],
  ['Раскажы́ пра сваю́ сям’ю́.', 'Conte sobre a sua família.'],
  ['Што ты лю́біш есці і піць?', 'O que você gosta de comer e beber?'],
  ['Які твой дом?', 'Como é a sua casa?'],
];

export const SHADOWING_BE: [string, string][] = [
  ['Прывіта́нне! Мяне́ зва́ць А́нна.', 'Oi! Eu me chamo Anna.'],
  ['До́бра, дзя́куй! А ты?', 'Bem, obrigado! E você?'],
  ['У мяне́ ёсць брат і сястра́.', 'Tenho um irmão e uma irmã.'],
  ['Я не ве́даю.', 'Eu não sei.'],
];
