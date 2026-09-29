import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no badiot). */
export const COMMUNITY_LLD: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Co aste pa inom y da olá este pa?',
    content: 'Bun de! Iö me chamo Bruno y iö sun da Curitiba.',
    reference: 'Bun de! Iö á inom Bruno y iö sun da Curitiba.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ci mangeste pa?',
    content: 'Iö mango pan y formaggio.',
    reference: 'Iö mangi pan y ciajó.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Aste pa fredesc y sorus?',
    content: 'Sce, iö sun dui fres.',
    reference: 'Sce, iö á dui fredesc.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LLD: ScenarioSeed[] = [
  {
    id: 'lld-s1',
    title: 'N café cun Ana',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, na compagna dl curs de ladin',
    description: 'Ana, uma colega do curso de ladino, convida você para um café. É uma conversa entre colegas: use «tö».',
    turns: [
      {
        bot: 'Ciao! Oste te bëre valch?',
        botTranslation: 'Oi! Você quer beber alguma coisa?',
        keywords: ['café', 'ega', 'lat'],
        suggestions: ['N café, prëibel.', 'N gote d\'ega, prëibel.'],
      },
      {
        bot: 'Da olá este pa?',
        botTranslation: 'De onde você é?',
        keywords: ['iö sun da'],
        suggestions: ['Iö sun da São Paulo.', 'Iö sun da Salvador.'],
      },
    ],
  },
];

/** Palavras do badiot com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_LLD: EtymologySeed[] = [
  {
    word: 'ciasa',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['rm', 'chasa'], ['fr', 'chez']),
    evolution_note: 'O c latino diante de a virou o som «tch» (escrito «ci»), como aconteceu no romanche e no francês: «casa» deu «ciasa» no badiot, «chasa» no romanche e a preposição «chez» (na casa de) no francês.',
    transparent: true,
  },
  {
    word: 'cian',
    root_word: 'canis',
    origin_language: 'Latim',
    cognates: c(['pt', 'cão'], ['it', 'cane'], ['fr', 'chien'], ['rm', 'chaun']),
    evolution_note: 'A mesma mudança de «casa» → «ciasa»: o c de «canis» virou «tch». O português ficou com «cão» para o animal e usa «cachorro» no dia a dia.',
    transparent: true,
  },
  {
    word: 'lat',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['it', 'latte'], ['fr', 'lait'], ['es', 'leche']),
    evolution_note: 'O grupo latino -ct- se reduziu a «t» no fim da palavra: «lacte» deu «lat», assim como «nocte» deu «nöt» (noite) e «octo» deu «ot» (oito).',
    transparent: true,
  },
  {
    word: 'ega',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['fur', 'aghe'], ['es', 'agua']),
    evolution_note: 'O -qu- de «aqua» virou «g», como no português e no espanhol «água/agua» e no friulano «aghe».',
    transparent: true,
  },
  {
    word: 'fre',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['rm', 'frar']),
    evolution_note: 'O badiot guardou o latim «frater» para «irmão», como o francês e o romanche; o português e o espanhol preferiram «germanus» (irmão, hermano) e deixaram «frater» só em «frade» e «fraterno». O plural é irregular: «fredesc».',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_LLD: [string, string][] = [
  ['Co vára pa incö?', 'Como vai hoje?'],
  ['Aste pa na gran familia?', 'Você tem uma família grande?'],
  ['Ci mangeste pa y ci bëreste pa?', 'O que você come e o que você bebe?'],
  ['Olá abitëieste pa?', 'Onde você mora?'],
];

export const SHADOWING_LLD: [string, string][] = [
  ['Bun de! Iö á inom Ana.', 'Bom dia! Eu me chamo Ana.'],
  ['Bëgn, dilan! Y tö?', 'Bem, obrigado! E você?'],
  ['Iö á n fre y na so.', 'Tenho um irmão e uma irmã.'],
  ['Iö ne sá nia.', 'Eu não sei.'],
];
