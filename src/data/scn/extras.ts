import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no siciliano). */
export const COMMUNITY_SCN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'U to nomu, a to città e a to famiglia.',
    content: 'Bongiornu! Mi chiamo Bruno e sugnu di Curitiba. Haju un fratello.',
    reference: 'Bongiornu! Mi chiamu Bruno e sugnu di Curitiba. Haju un frati.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Chi manci la matina?',
    content: 'Iu mancio pani e formaggio.',
    reference: 'Iu manciu pani e caciu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Comu è a to casa?',
    content: 'A me casa è nicu.',
    reference: 'A me casa è nica.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SCN: ScenarioSeed[] = [
  {
    id: 'scn-s1',
    title: 'Un cafè a Palermu',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, n’amica di lu corsu di sicilianu',
    description: 'Anna convida você para um café no centro histórico de Palermo. É uma conversa entre amigos: use “tu”.',
    turns: [
      {
        bot: 'Bongiornu! Chi voi viviri?',
        botTranslation: 'Bom dia! O que você quer beber?',
        keywords: ['cafè', 'acqua', 'latti'],
        suggestions: ['Un cafè, pi favuri.', 'N’acqua, pi favuri.'],
      },
      {
        bot: 'Di unni si?',
        botTranslation: 'De onde você é?',
        keywords: ['iu sugnu di'],
        suggestions: ['Iu sugnu di Sampaulu.', 'Iu sugnu di Salvador.'],
      },
    ],
  },
];

/** Palavras do siciliano com a raiz latina (ou grega/árabe) e os parentes nas línguas irmãs. */
export const ETYMOLOGY_SCN: EtymologySeed[] = [
  {
    word: 'cavaḍḍu',
    root_word: 'caballus',
    origin_language: 'Latim',
    cognates: c(['pt', 'cavalo'], ['it', 'cavallo'], ['es', 'caballo'], ['fr', 'cheval']),
    evolution_note: 'O grupo latino -LL- virou o som retroflexo “ḍḍ” no siciliano, em vez de dobrar como no italiano (“cavallo”) ou simplificar como no português (“cavalo”). O mesmo aconteceu em “beḍḍu” (bonito, de “bellus”) e “stiḍḍa” (estrela, de “stella”).',
    transparent: true,
  },
  {
    word: 'pani',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['it', 'pane'], ['fr', 'pain'], ['es', 'pan']),
    evolution_note: 'Do latim “panis”, com a vogal final átona reduzida a “i” — traço típico do siciliano, que distingue só u/i/a nas terminações, ao contrário do italiano.',
    transparent: true,
  },
  {
    word: 'acqua',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['es', 'agua'], ['fr', 'eau']),
    evolution_note: 'Praticamente igual ao latim “aqua”, como no italiano; o português e o espanhol mudaram mais o som, mas guardaram a mesma raiz.',
    transparent: true,
  },
  {
    word: 'frati',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['ro', 'frate']),
    evolution_note: 'O siciliano guardou o latim “frater” direto para “irmão”, como o romeno e o francês; o português e o espanhol preferiram “germanus” e deixaram “frater” só em palavras como “frade” e “fraterno”.',
    transparent: false,
  },
  {
    word: 'giuggiulena',
    root_word: 'جلجلان (juljulān)',
    origin_language: 'Árabe',
    cognates: c(['pt', 'gergelim (via outra rota árabe)']),
    evolution_note: 'Palavra para “gergelim” que veio direto do árabe, herança dos séculos em que a Sicília foi governada por emires muçulmanos (séculos IX a XI) — uma camada de vocabulário árabe que o italiano padrão não tem.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SCN: [string, string][] = [
  ['Comu va oji?', 'Como vai hoje?'],
  ['Cuntami di la to famiglia.', 'Conte da sua família.'],
  ['Chi ti piaci manciari e viviri?', 'O que você gosta de comer e de beber?'],
  ['Comu è a to casa?', 'Como é a sua casa?'],
];

export const SHADOWING_SCN: [string, string][] = [
  ['Bongiornu! Mi chiamu Ana.', 'Bom dia! Eu me chamo Ana.'],
  ['Bonu, grazzi! E tu?', 'Bem, obrigado! E você?'],
  ['Haju un frati e na soru.', 'Tenho um irmão e uma irmã.'],
  ['Non sacciu.', 'Eu não sei.'],
];
