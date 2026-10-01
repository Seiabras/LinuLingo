import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no romanche). */
export const COMMUNITY_RM: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tes num, tia citad e tia famiglia.',
    content: 'Allegra! Jau me chamo Bruno e jau sun da Curitiba. Jau hai un frar.',
    reference: 'Allegra! Jau hai num Bruno e jau sun da Curitiba. Jau hai in frar.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Tge mangias ti la damaun?',
    content: 'Jau mangio paun e formaggio.',
    reference: 'Jau mangel paun e caschiel.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Co è tia chasa?',
    content: 'La mia chasa è pitschen.',
    reference: 'Mia chasa è pitschna.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_RM: ScenarioSeed[] = [
  {
    id: 'rm-s1',
    title: 'In café a Cuira',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, ina collega dal curs da rumantsch',
    description: 'Anna convida você para um café no centro antigo de Chur. É uma conversa entre colegas: use “ti”.',
    turns: [
      {
        bot: 'Allegra! Tge vuls ti baiver?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['café', 'aua', 'latg'],
        suggestions: ['In café, per plaschair.', 'In magiel aua, per plaschair.'],
      },
      {
        bot: 'Danunder es ti?',
        botTranslation: 'De onde você é?',
        keywords: ['jau sun da'],
        suggestions: ['Jau sun da São Paulo.', 'Jau sun da Salvador.'],
      },
    ],
  },
];

/** Palavras do romanche com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_RM: EtymologySeed[] = [
  {
    word: 'chasa',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['fr', 'chez']),
    evolution_note: 'O c latino diante de a virou um som “molhado” (ch), como aconteceu no francês: “casa” deu “chasa” no romanche e a preposição “chez” (na casa de) no francês.',
    transparent: true,
  },
  {
    word: 'latg',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['it', 'latte'], ['fr', 'lait'], ['es', 'leche']),
    evolution_note: 'O grupo latino -ct- virou o som “tg” no romanche, assim como virou -it- em português (leite) e -ch- em espanhol (leche). O mesmo aconteceu em “notg” (noite, de “nocte”) e “otg” (oito, de “octo”).',
    transparent: true,
  },
  {
    word: 'paun',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['it', 'pane'], ['fr', 'pain'], ['es', 'pan']),
    evolution_note: 'O a latino antes de n virou o ditongo “au”: panis → paun.',
    transparent: true,
  },
  {
    word: 'aua',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['fr', 'eau'], ['es', 'agua']),
    evolution_note: 'Do latim “aqua”, com o -qu- enfraquecido até sumir quase por completo, como no francês “eau”.',
    transparent: true,
  },
  {
    word: 'frar',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['ro', 'frate']),
    evolution_note: 'O romanche guardou o latim “frater” para “irmão”, como o francês e o romeno; o português e o espanhol preferiram “germanus” (irmão, hermano) e deixaram “frater” só em “frade” e “fraterno”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_RM: [string, string][] = [
  ['Co vai oz?', 'Como vai hoje?'],
  ['Raquinta da tia famiglia.', 'Conte da sua família.'],
  ['Tge mangias e tge baivas ti gugent?', 'O que você gosta de comer e de beber?'],
  ['Co è tia chasa?', 'Como é a sua casa?'],
];

export const SHADOWING_RM: [string, string][] = [
  ['Allegra! Jau hai num Ana.', 'Oi! Eu me chamo Ana.'],
  ['Bain, grazia! E tai?', 'Bem, obrigado! E você?'],
  ['Jau hai in frar ed ina sora.', 'Tenho um irmão e uma irmã.'],
  ['Jau na sai betg.', 'Eu não sei.'],
];
