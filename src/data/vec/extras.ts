import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no vêneto). */
export const COMMUNITY_VEC: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'El to nome, la to sità e la to fameja.',
    content: 'Bondì! Mi me chamo Bruno e mi sono de Curitiba. Mi go un fradeo.',
    reference: 'Bondì! Mi me ciamo Bruno e son de Curitiba. Mi go un fradeo.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Cossa magnito la matina?',
    content: 'Mi magno pan e formaggio.',
    reference: 'Mi magno pan e formajo.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Come xe la to caxa?',
    content: 'La me caxa xe picolo.',
    reference: 'La me caxa xe picola.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_VEC: ScenarioSeed[] = [
  {
    id: 'vec-s1',
    title: 'Un cafè a Venesia',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, na compagna de corso de vèneto',
    description: 'Ana convida você para um café perto do Ponte de Rialto. É uma conversa entre colegas: use “ti”.',
    turns: [
      {
        bot: 'Bondì! Cossa vustu bevar?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafè', 'acqua', 'late'],
        suggestions: ['Un cafè, par piaser.', 'Un biciero de acqua, par piaser.'],
      },
      {
        bot: 'Da dove sito?',
        botTranslation: 'De onde você é?',
        keywords: ['mi son de'],
        suggestions: ['Mi son de San Paulo.', 'Mi son de Salvador.'],
      },
    ],
  },
];

/** Palavras do vêneto com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_VEC: EtymologySeed[] = [
  {
    word: 'caxa',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['es', 'casa']),
    evolution_note: 'O “s” latino entre vogais ficou sonoro e virou o som “z”, escrito “x” na grafia vêneta: “casa” deu “caxa”. O mesmo aconteceu em “cossa” (o que, do latim “causa”, cognato do português “coisa”).',
    transparent: true,
  },
  {
    word: 'formajo',
    root_word: 'formaticum',
    origin_language: 'Latim',
    cognates: c(['it', 'formaggio'], ['fr', 'fromage'], ['ca', 'formatge']),
    evolution_note: 'Do latim tardio “formaticum” (algo “moldado em forma”), a mesma raiz do italiano “formaggio” e do francês “fromage” — mas o vêneto não dobra o “g”, por isso “formajo”, mais simples.',
    transparent: false,
  },
  {
    word: 'gheto',
    root_word: 'geto',
    origin_language: 'Italiano vêneto (Veneza)',
    cognates: c(['pt', 'gueto'], ['en', 'ghetto']),
    evolution_note: 'A palavra “gueto”, usada em várias línguas do mundo, nasceu em Veneza: em 1516 a cidade obrigou os judeus a morar numa ilha onde antes havia uma fundição (“geto”, de “getar”, fundir metal). O nome do lugar virou o nome da própria separação forçada.',
    transparent: false,
  },
  {
    word: 'bondì',
    root_word: 'bonu(m) die(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'bom dia'], ['it', 'buongiorno'], ['fr', 'bonjour']),
    evolution_note: 'Literalmente “bom dia”, com as duas palavras latinas grudadas, como aconteceu também no francês “bonjour”.',
    transparent: true,
  },
  {
    word: 'fradeo',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['ro', 'frate']),
    evolution_note: 'O vêneto guardou o latim “frater” para “irmão”, como o italiano e o romeno; o português preferiu “germanus” (de onde vem “irmão”) e deixou “frater” só em palavras como “frade” e “fraterno”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_VEC: [string, string][] = [
  ['Come stu ancò?', 'Como vai hoje?'],
  ['Contame de la to fameja.', 'Conte da sua família.'],
  ['Cossa te piaxe magnar e bevar?', 'O que você gosta de comer e de beber?'],
  ['Come xe la to caxa?', 'Como é a sua casa?'],
];

export const SHADOWING_VEC: [string, string][] = [
  ['Bondì! Mi me ciamo Ana.', 'Oi! Eu me chamo Ana.'],
  ['Ben, grasie! E ti?', 'Bem, obrigado! E você?'],
  ['Mi go un fradeo e na sorela.', 'Tenho um irmão e uma irmã.'],
  ['No so.', 'Eu não sei.'],
];
