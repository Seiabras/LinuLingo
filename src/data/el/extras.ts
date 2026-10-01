import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no grego). */
export const COMMUNITY_EL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Το όνομά σου, η πόλη σου και η οικογένειά σου.',
    content: 'Γεια σου! Εγώ είμαι ο Μπρούνο και εγώ είμαι από η Κουρίτιμπα. Εγώ έχω ένας αδελφός.',
    reference: 'Γεια σου! Με λένε Μπρούνο, είμαι από την Κουρίτιμπα. Έχω έναν αδελφό.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Τι τρως το πρωί;',
    content: 'Εγώ τρώω ψωμί και τυρί και πίνω καφές.',
    reference: 'Τρώω ψωμί και τυρί και πίνω καφέ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Πώς είναι το σπίτι σου;',
    content: 'Το σπίτι μου είναι μικρή.',
    reference: 'Το σπίτι μου είναι μικρό.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_EL: ScenarioSeed[] = [
  {
    id: 'el-s1',
    title: 'Σε μια καφετέρια στην Αθήνα',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Έλενα, φίλη από το μάθημα ελληνικών',
    description: 'Elena convida você para um café no centro de Atenas. É uma conversa entre amigas e amigos: use “εσύ”.',
    turns: [
      {
        bot: 'Γεια σου! Τι θα πιεις;',
        botTranslation: 'Oi! O que você vai beber?',
        keywords: ['καφέ', 'νερό', 'τσάι'],
        suggestions: ['Έναν καφέ, παρακαλώ.', 'Ένα τσάι, παρακαλώ.'],
      },
      {
        bot: 'Από πού είσαι;',
        botTranslation: 'De onde você é?',
        keywords: ['είμαι από'],
        suggestions: ['Είμαι από την Κουρίτιμπα.', 'Είμαι από το Ρίο ντε Τζανέιρο.'],
      },
    ],
  },
];

/** Palavras do grego com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_EL: EtymologySeed[] = [
  {
    word: 'μπαμπάς',
    root_word: '*ph₂tḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['la', 'pater'], ['en', 'father'], ['pt', 'pai, paternal']),
    evolution_note: 'No dia a dia os gregos dizem “μπαμπάς”, mas a forma formal, “πατέρας”, vem direto da mesma raiz indo-europeia que deu “pater” em latim (daí “paternal” em português) e “father” em inglês — o “p” e o “t” continuam visíveis.',
    transparent: true,
  },
  {
    word: 'τρία',
    root_word: '*tréyes',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: “τρία”, “três” e “three” vêm todos da mesma raiz indo-europeia.',
    transparent: true,
  },
  {
    word: 'καληνύχτα',
    root_word: '*nókʷts',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['la', 'nox, noctem'], ['en', 'night'], ['pt', 'noite, noturno']),
    evolution_note: '“Καληνύχτα” é “καλή” (boa) + “νύχτα” (noite) — e “νύχτα”, por trás da forma grega, mudada pelo tempo, guarda a mesma raiz do latim “nox” (daí “noturno” em português) e do inglês “night”.',
    transparent: false,
  },
  {
    word: 'όνομα',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['la', 'nomen'], ['en', 'name'], ['pt', 'nome']),
    evolution_note: '“Όνομα” não parece com “nome” à primeira vista, mas as duas vêm da mesma raiz indo-europeia que deu “nomen” em latim.',
    transparent: false,
  },
  {
    word: 'αδελφός',
    root_word: 'ἀ- (junto) + δελφύς (ventre)',
    origin_language: 'Grego antigo',
    cognates: c(['pt', 'monádelfo (botânica)']),
    evolution_note: 'Literalmente “que saiu do mesmo ventre”: o grego trocou a palavra indo-europeia para “irmão” (a mesma que deu “brother” em inglês) por esse composto próprio. A raiz “-delfo” ainda aparece em termos científicos como “monádelfo”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_EL: [string, string][] = [
  ['Πώς είσαι σήμερα;', 'Como você está hoje?'],
  ['Πες μου για την οικογένειά σου.', 'Conte da sua família.'],
  ['Τι σου αρέσει να τρως και να πίνεις;', 'O que você gosta de comer e de beber?'],
  ['Πώς είναι το σπίτι σου;', 'Como é a sua casa?'],
];

export const SHADOWING_EL: [string, string][] = [
  ['Γεια σου! Με λένε Άννα.', 'Oi! Eu me chamo Ana.'],
  ['Καλά, ευχαριστώ! Κι εσύ;', 'Bem, obrigado! E você?'],
  ['Έχω έναν αδελφό και μια αδελφή.', 'Tenho um irmão e uma irmã.'],
  ['Δεν ξέρω.', 'Eu não sei.'],
];
