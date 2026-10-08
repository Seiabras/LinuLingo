import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no francês antigo —
 * sobretudo trocar o caso reto pelo oblíquo, ou vice-versa, e confundir a conjugação de "estre"/
 * "avoir" pelas pessoas).
 */
export const COMMUNITY_FRO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Estes vos chevalier?',
    content: 'Oïl, jo es chevalier.',
    reference: 'Oïl, jo sui chevalier.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Avez vos un chien?',
    content: 'Oïl, jo a un chien.',
    reference: 'Oïl, jo ai un chien.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Qual cavaleiro é bom?',
    content: 'Le chevalier est bon.',
    reference: 'Li chevaliers est bon.',
  },
];

/**
 * Cenário de conversa. O francês antigo já distinguia "tu" (íntimo) de "vos" (cortês) — aqui
 * Rollant usa "vos" por cortesia, a mesma lógica do "tu"/"vous" do francês moderno.
 */
export const SCENARIOS_FRO: ScenarioSeed[] = [
  {
    id: 'fro-s1',
    title: 'No portão do castelo',
    emoji: '🏰',
    cefr: 'A1',
    register: 'formal',
    persona: 'Rollant, um cavaleiro',
    description: 'Rollant te recebe no portão do castelo. É cortês: ele usa “vos” com você, não o “tu” íntimo.',
    turns: [
      {
        bot: 'Bienvenu! Avez vos un nom?',
        botTranslation: 'Bem-vindo! Você tem um nome?',
        keywords: ['nom', 'ai'],
        suggestions: ['Jo ai nom Linu.', 'Jo ai nom Auðr.'],
      },
      {
        bot: 'Vos estes chevalier?',
        botTranslation: 'Você é cavaleiro?',
        keywords: ['sui', 'chevalier', 'ami'],
        suggestions: ['Oïl, jo sui chevalier.', 'Non, jo sui ami.'],
      },
    ],
  },
];

/**
 * Palavras do francês antigo e a forma que elas têm hoje no francês moderno (`fr`, já completo
 * neste aplicativo) — o francês antigo é ancestral direto dele, então a etimologia aqui aponta
 * para a FRENTE, ao contrário dos idiomas vivos do aplicativo. Fontes: Wiktionary (seção "Old
 * French" de cada palavra, com etimologia latina).
 */
export const ETYMOLOGY_FRO: EtymologySeed[] = [
  {
    word: 'pere',
    root_word: 'pere',
    origin_language: 'Francês antigo',
    cognates: c(['fr', 'père']),
    evolution_note: 'A grafia moderna "père" ganhou um acento circunflexo, mas a palavra é a mesma desde o francês antigo — do latim "patrem".',
    transparent: true,
  },
  {
    word: 'mere',
    root_word: 'mere',
    origin_language: 'Francês antigo',
    cognates: c(['fr', 'mère']),
    evolution_note: 'O mesmo padrão de "pere": o francês moderno "mère" ganhou o acento circunflexo, mas é a mesma palavra do francês antigo, do latim "matrem".',
    transparent: true,
  },
  {
    word: 'chevalier',
    root_word: 'chevalier',
    origin_language: 'Francês antigo',
    cognates: c(['fr', 'chevalier']),
    evolution_note: 'Praticamente sem mudança nenhuma em quase mil anos: já significava "cavaleiro" (de "cheval", cavalo) no francês antigo, e significa o mesmo hoje.',
    transparent: true,
  },
  {
    word: 'chien',
    root_word: 'chien',
    origin_language: 'Francês antigo',
    cognates: c(['fr', 'chien']),
    evolution_note: 'Idêntica desde o francês antigo — do latim "canis/canem", a mesma raiz do "cão" português.',
    transparent: true,
  },
  {
    word: 'merci',
    root_word: 'merci',
    origin_language: 'Francês antigo',
    cognates: c(['fr', 'merci']),
    evolution_note: 'A palavra de agradecimento mais usada do francês de hoje já existia, com a mesma grafia, no francês antigo — do latim "mercedem" (recompensa, salário).',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_FRO: [string, string][] = [
  ['Avez vos un chien?', 'Você tem um cachorro?'],
  ['Estes vos chevalier?', 'Você é cavaleiro?'],
  ['Avez vos un frere?', 'Você tem um irmão?'],
  ['Volez vos vin?', 'Você quer vinho?'],
];

export const SHADOWING_FRO: [string, string][] = [
  ['Merci, ami!', 'Obrigado, amigo!'],
  ['Jo sui chevalier, e jo ai un chien.', 'Eu sou cavaleiro, e eu tenho um cachorro.'],
  ['Li reis a un chevalier.', 'O rei tem um cavaleiro.'],
  ['Nos parlons franceis.', 'Nós falamos francês.'],
];
