import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no sami do norte): a
 * conjugação de “leat” (ser/estar/ter) e a gradação consonantal depois de números.
 */
export const COMMUNITY_SE: CommunitySeed[] = [
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Gii don leat ja man boaris don leat?',
    content: 'Bures! Mun lea Rafael ja mun lea 16 jahki boaris.',
    reference: 'Bures! Mun lean Rafael ja mun lean 16 jagi boaris.',
  },
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Mii dus lea?',
    content: 'Mun lean beana.',
    reference: 'Mus lea beana.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Gii lea du ustit?',
    content: 'Mu ustit lea Jon. Son lean guhtta jagi boaris.',
    reference: 'Mu ustit lea Jon. Son lea guhtta jagi boaris.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SE: ScenarioSeed[] = [
  {
    id: 'se-s1',
    title: 'Káffe',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Elle, ustit',
    description: 'A Elle recebe você e oferece um café. É uma conversa entre amigos: use “don”.',
    turns: [
      {
        bot: 'Bures! Mus lea káffe.',
        botTranslation: 'Oi! Eu tenho café.',
        keywords: ['juo', 'giitu'],
        suggestions: ['Juo, giitu!', 'Giitu!'],
      },
      {
        bot: 'Mii du namma lea?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['mu namma lea'],
        suggestions: ['Mu namma lea ...'],
      },
    ],
  },
];

/**
 * Palavras do sami do norte com a raiz proto-urálica/proto-fino-úgrica e os parentes no finlandês e
 * no estoniano, as outras línguas urálicas deste app — fonte: a seção “Etymology” de cada verbete no
 * Wiktionary em inglês (en.wiktionary.org/wiki/<palavra>#Northern_Sami).
 */
export const ETYMOLOGY_SE: EtymologySeed[] = [
  {
    word: 'čalbmi',
    root_word: '*śilmä',
    origin_language: 'Proto-urálico',
    cognates: c(['fi', 'silmä']),
    evolution_note: 'O Wiktionary liga “čalbmi” ao proto-sami “*čëlmē” e, mais fundo, ao proto-urálico “*śilmä” — a mesmíssima raiz que deu o finlandês “silmä” (olho). É um dos parentescos mais claros entre o sami do norte e o finlandês.',
    transparent: false,
  },
  {
    word: 'juolgi',
    root_word: '*jalka',
    origin_language: 'Proto-fino-úgrico',
    cognates: c(['fi', 'jalka']),
    evolution_note: '“Juolgi” (pé, perna) vem do proto-sami “*juolkē”, que remonta ao proto-fino-úgrico “*jalka” — a raiz do finlandês “jalka” (perna). O “j” inicial virou “j” dos dois lados; é o “l/lg” do meio que mudou de jeito diferente em cada ramo.',
    transparent: false,
  },
  {
    word: 'oahppat',
    root_word: '*oppidak',
    origin_language: 'Proto-fínico',
    cognates: c(['fi', 'oppia']),
    evolution_note: '“Oahppat” (aprender) vem do proto-sami “*oappëtēk”, aparentado do proto-fínico “*oppidak” — raiz do finlandês “oppia” (aprender). Mostra que sami e finlandês trocaram vocabulário (ou herdaram de um ancestral comum) bem além dos números e pronomes.',
    transparent: false,
  },
  {
    word: 'goahti',
    root_word: '*kota',
    origin_language: 'Proto-fino-úgrico',
    cognates: c(['fi', 'kota']),
    evolution_note: '“Goahti” (tenda, choupana tradicional sami) remonta ao proto-sami “*koatē” e ao proto-fino-úgrico “*kota” — o finlandês “kota” (cabana, casinha) é primo direto da palavra sami.',
    transparent: false,
  },
  {
    word: 'jávri',
    root_word: '*jāvrē',
    origin_language: 'Proto-sami',
    cognates: c(['fi', 'järvi'], ['et', 'järv']),
    evolution_note: 'O próprio Wiktionary nota que “jávri” (lago) talvez seja um empréstimo muito antigo de uma língua indo-europeia, e compara o estoniano “järv”, o finlandês “järvi” e até o lituano “jūra” (mar). Se for isso mesmo, é um lembrete de que nem toda palavra “prima” entre línguas urálicas nasceu urálica.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SE: [string, string][] = [
  ['Gii don leat?', 'Quem é você?'],
  ['Man boaris don leat?', 'Quantos anos você tem?'],
  ['Mii dus lea?', 'O que você tem?'],
  ['Gii lea du eadni ja gii lea du áhčči?', 'Quem é sua mãe e quem é seu pai?'],
];

export const SHADOWING_SE: [string, string][] = [
  ['Bures! Mun lean Elle.', 'Oi! Eu sou a Elle.'],
  ['Mus lea beana.', 'Eu tenho um cachorro.'],
  ['Mun lean vihtta jagi boaris.', 'Eu tenho cinco anos.'],
  ['Giitu ja mana dearvan!', 'Obrigado e tchau!'],
];
