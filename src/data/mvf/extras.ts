import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção. O erro típico de quem já conhece o mongol em cirílico é
 * escrever a palavra como se pronuncia hoje, esquecendo as letras da grafia clássica.
 */
export const COMMUNITY_MVF: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'ᠡᠨᠡ ᠶᠠᠭᠤ ᠪᠤᠢ? (o que é isto? — responda: isto é água)',
    content: 'ᠡᠨᠡ ᠤᠰ᠃',
    reference: 'ᠡᠨᠡ ᠤᠰᠤ᠃',
  },
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Como se escreve “leite” na escrita tradicional?',
    content: 'ᠰᠦ',
    reference: 'ᠰᠦᠨ',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'O que é isto? (pergunte)',
    content: 'ᠡᠨᠡ ᠶᠠᠭᠤ ᠤᠤ?',
    reference: 'ᠡᠨᠡ ᠶᠠᠭᠤ ᠪᠤᠢ?',
  },
];

/** Cenário formal: com uma pessoa mais velha, “ᠲᠠ” (ta, formal), não “ᠴᠢ” (či, informal). */
export const SCENARIOS_MVF: ScenarioSeed[] = [
  {
    id: 'mvf-s1',
    title: 'Ancião da estepe',
    emoji: '🧓',
    cefr: 'A1',
    register: 'formal',
    persona: 'Um ancião que você encontra perto da guer dele, na Mongólia Interior',
    description: 'Com uma pessoa mais velha, use ᠲᠠ (ta, formal), não ᠴᠢ (či, informal).',
    turns: [
      {
        bot: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ? ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?',
        botTranslation: 'Olá! Qual é o seu nome? (formal)',
        keywords: ['ᠨᠡᠷ᠎ᠡ', 'ner-e'],
        suggestions: ['ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ ᠯᠢᠨᠠ᠃', 'ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ ᠪᠠᠲᠤ᠃'],
        registerBreakers: ['ᠴᠢ'],
      },
      {
        bot: 'ᠴᠠᠢ ᠤᠤᠭᠤᠬᠤ ᠤᠤ?',
        botTranslation: 'Quer beber chá?',
        keywords: ['ᠴᠠᠢ', 'ᠠᠶᠢᠷᠠᠭ', 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ'],
        suggestions: ['ᠴᠠᠢ᠂ ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ᠃', 'ᠠᠶᠢᠷᠠᠭ᠂ ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ᠃'],
        registerBreakers: ['ᠴᠢ'],
      },
    ],
  },
];

/**
 * Etimologia, toda do campo “Etymology” dos verbetes do Wiktionary em inglês (em cirílico: морь, хонь,
 * ямаа, айраг, уул). Uma delas liga este pacote ao manchu (mnc), a outra língua de escrita vertical do
 * app: “cavalo” é parecido nas duas, mas o Wiktionary trata isso como comparação (“compare also”), não
 * como parentesco confirmado — o mongólico e o tungúsico não têm parentesco comprovado.
 */
export const ETYMOLOGY_MVF: EtymologySeed[] = [
  {
    word: 'ᠮᠣᠷᠢ',
    root_word: '*morïn (protomongólico)',
    origin_language: 'Protomongólico',
    cognates: c(['bua', 'морин'], ['xal', 'мөрн']),
    evolution_note: 'Do mongol médio ᠮᠣᠷᠢᠨ (morin), do protomongólico *morïn, com parentes no buriato (морин) e no calmuco (мөрн). O manchu tem uma palavra parecida, ᠮᠣᡵᡳᠨ (morin), que o Wiktionary só manda comparar: como o mongólico e o tungúsico não têm parentesco comprovado, a semelhança pode ser empréstimo antigo entre vizinhos.',
    transparent: false,
  },
  {
    word: 'ᠬᠣᠨᠢ',
    root_word: '*konïn (protomongólico)',
    origin_language: 'Protomongólico',
    cognates: c(['bua', 'хонин'], ['xal', 'хөн']),
    evolution_note: 'Do protomongólico *konïn, que segundo o Wiktionary veio do proto-túrquico *koń — a mesma raiz do turco “koyun”, ovelha. É um empréstimo por contato entre povos de pastores, não sinal de parentesco entre as famílias.',
    transparent: false,
  },
  {
    word: 'ᠢᠮᠠᠭ᠎ᠠ',
    root_word: '*ïmaxan (protomongólico)',
    origin_language: 'Protomongólico',
    cognates: c(['bua', 'ямаан'], ['xal', 'яман']),
    evolution_note: 'Do protomongólico *ïmaxan, com parentes no buriato e no calmuco. O Wiktionary liga a palavra também ao proto-túrquico *ïmga, por herança ou empréstimo — não se sabe qual.',
    transparent: false,
  },
  {
    word: 'ᠠᠶᠢᠷᠠᠭ',
    root_word: '*ayïrag (protomongólico)',
    origin_language: 'Protomongólico',
    cognates: c(),
    evolution_note: 'Do protomongólico *ayïrag, que o Wiktionary dá como empréstimo do proto-túrquico *ayran — a origem do “ayran”, a bebida de iogurte do turco. Outro sinal do contato antigo entre mongóis e povos túrquicos nas estepes.',
    transparent: false,
  },
  {
    word: 'ᠠᠭᠤᠯᠠ',
    root_word: '*axula (protomongólico)',
    origin_language: 'Protomongólico',
    cognates: c(['bua', 'уула'], ['dta', 'aul']),
    evolution_note: 'Do mongol clássico ᠠᠭᠤᠯᠠ (aɣula), do protomongólico *axula, com parentes no buriato (уула) e no dagur (aul). A grafia tradicional ainda guarda o ɣ do meio da palavra, que o cirílico “уул” já não escreve.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MVF: [string, string][] = [
  ['ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?', 'Qual é o seu nome?'],
  ['ᠡᠨᠡ ᠶᠠᠭᠤ ᠪᠤᠢ?', 'O que é isto?'],
  ['ᠴᠠᠢ ᠤᠤᠭᠤᠬᠤ ᠤᠤ?', 'Você quer beber chá?'],
  ['ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', 'Olá! Tudo bem?'],
];

export const SHADOWING_MVF: [string, string][] = [
  ['ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', 'Olá! (lit. “você está bem?”)'],
  ['ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ᠨᠠᠶ᠋ᠢᠵᠠ᠃', 'Esta pessoa é meu amigo/minha amiga.'],
  ['ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ!', 'Obrigado(a)!'],
  ['ᠪᠠᠶᠠᠷᠲᠠᠢ!', 'Tchau!'],
];
