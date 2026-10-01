import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no croata). */
export const COMMUNITY_HR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tvoje ime, tvoj grad i tvoja obitelj.',
    content: 'Bok! Sam Bruno i sam iz Curitiba. Ja imam brat.',
    reference: 'Bok! Zovem se Bruno i ja sam iz Curitibe. Imam brata.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Što jedeš za doručak?',
    content: 'Ja jedem kruh i sir i pijem kava.',
    reference: 'Jedem kruh i sir i pijem kavu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kakva je tvoja kuća?',
    content: 'Moj kuća je mali.',
    reference: 'Moja kuća je mala.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HR: ScenarioSeed[] = [
  {
    id: 'hr-s1',
    title: 'Na kavi u Zagrebu',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ivana, kolegica s tečaja hrvatskoga',
    description: 'Ivana convida você para um café numa esplanada de Zagreb. É uma conversa entre colegas: use “ti”.',
    turns: [
      {
        bot: 'Bok! Što ćeš piti?',
        botTranslation: 'Oi! O que você vai beber?',
        keywords: ['kavu', 'vodu', 'čaj'],
        suggestions: ['Jednu kavu, molim.', 'Vodu, molim.'],
      },
      {
        bot: 'Odakle si?',
        botTranslation: 'De onde você é?',
        keywords: ['iz'],
        suggestions: ['Ja sam iz São Paula.', 'Ja sam iz Curitibe.'],
      },
    ],
  },
];

/** Palavras do croata com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_HR: EtymologySeed[] = [
  {
    word: 'brat',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'frater'], ['en', 'brother'], ['ru', 'брат'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu “frater” em latim (daí “fraterno” e “frade”) e “brother” em inglês.',
    transparent: false,
  },
  {
    word: 'sestra',
    root_word: '*sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'soror'], ['en', 'sister'], ['de', 'Schwester'], ['pt', 'sororidade']),
    evolution_note: 'Vem da palavra indo-europeia para “irmã”, a mesma do latim “soror” e do inglês “sister”. O português a guardou em palavras cultas, como “sororidade”.',
    transparent: false,
  },
  {
    word: 'mlijeko',
    root_word: '*melko',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'молоко'], ['pl', 'mleko'], ['sr', 'млеко']),
    evolution_note: 'O antigo “ě” eslavo virou “ije” ou “je” na pronúncia ijekaviana do croata (mlijeko, gdje) e “e” na ekaviana da Sérvia (млеко, где).',
    transparent: false,
  },
  {
    word: 'tri',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: “tri”, “três” e “three” vêm todos do indo-europeu.',
    transparent: true,
  },
  {
    word: 'voda',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['en', 'water'], ['de', 'Wasser'], ['pt', 'hidro- (do grego hýdōr)']),
    evolution_note: 'Vem da mesma raiz indo-europeia do inglês “water” e do grego “hýdōr”, que o português conhece em “hidráulica” e “hidratar”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HR: [string, string][] = [
  ['Kako si danas?', 'Como você está hoje?'],
  ['Pričaj o svojoj obitelji.', 'Conte da sua família.'],
  ['Što voliš jesti i piti?', 'O que você gosta de comer e de beber?'],
  ['Kakva je tvoja kuća?', 'Como é a sua casa?'],
];

export const SHADOWING_HR: [string, string][] = [
  ['Bok! Zovem se Ana.', 'Oi! Eu me chamo Ana.'],
  ['Dobro, hvala! A ti?', 'Bem, obrigado! E você?'],
  ['Imam brata i sestru.', 'Tenho um irmão e uma irmã.'],
  ['Ne znam.', 'Eu não sei.'],
];
