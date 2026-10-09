import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no castelhano medieval —
 * sobretudo usar “sí” como “sim” por hábito do espanhol moderno, ou confundir a conjugação de
 * “seer”/“aver” pelas pessoas).
 */
export const COMMUNITY_OSP: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Sees cavallero?',
    content: 'Sí, yo so cavallero.',
    reference: 'Seo cavallero.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Avedes un can?',
    content: 'Sí, yo avo un can.',
    reference: 'Ave.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Qual cavallero sie bueno?',
    content: 'El cavallero sie bueno.',
    reference: 'El cavallero sie bueno.',
  },
];

/**
 * Cenário de conversa. O castelhano medieval já distinguia “tú” (íntimo) de “vos” (cortês) — aqui
 * Minaya usa “vos” por cortesia, a mesma lógica do “tu”/“vos” do francês antigo.
 */
export const SCENARIOS_OSP: ScenarioSeed[] = [
  {
    id: 'osp-s1',
    title: 'No portão do castelo',
    emoji: '🏰',
    cefr: 'A1',
    register: 'formal',
    persona: 'Minaya, um cavaleiro',
    description: 'Minaya te recebe no portão do castelo. É cortês: ele usa “vos” com você, não o “tú” íntimo.',
    turns: [
      {
        bot: 'Bien venido! Avedes un nombre?',
        botTranslation: 'Bem-vindo! Tens um nome?',
        keywords: ['nombre', 'sie'],
        suggestions: ['Mio nombre sie Linu.', 'Mio nombre sie Auðr.'],
      },
      {
        bot: 'Sees cavallero?',
        botTranslation: 'Tu és cavaleiro?',
        keywords: ['seo', 'cavallero', 'amigo'],
        suggestions: ['Seo cavallero.', 'Non, seo amigo.'],
      },
    ],
  },
];

/**
 * Palavras do castelhano medieval e a forma que elas têm hoje no espanhol moderno (`es`, já
 * completo neste aplicativo) — o castelhano medieval é ancestral direto dele, então a etimologia
 * aqui aponta para a FRENTE, ao contrário dos idiomas vivos do aplicativo. Fontes: Wiktionary
 * (seção “Old Spanish” de cada palavra, com etimologia latina).
 */
export const ETYMOLOGY_OSP: EtymologySeed[] = [
  {
    word: 'fijo',
    root_word: 'fijo',
    origin_language: 'Castelhano medieval',
    cognates: c(['es', 'hijo']),
    evolution_note: 'O “f-” inicial do latim ainda se pronunciava “f” no castelhano medieval — só bem depois é que virou o “h” mudo do espanhol moderno “hijo”.',
    transparent: true,
  },
  {
    word: 'ermano',
    root_word: 'ermano',
    origin_language: 'Castelhano medieval',
    cognates: c(['es', 'hermano']),
    evolution_note: 'O mesmo padrão de “fijo”/“hijo”: “ermano” ganhou um “h” bem mais tarde, no espanhol moderno “hermano”.',
    transparent: true,
  },
  {
    word: 'cavallero',
    root_word: 'cavallero',
    origin_language: 'Castelhano medieval',
    cognates: c(['es', 'caballero']),
    evolution_note: 'O “v” e o “b” eram sons diferentes no castelhano medieval — só se fundiram depois, dando o espanhol moderno “caballero”.',
    transparent: true,
  },
  {
    word: 'can',
    root_word: 'can',
    origin_language: 'Castelhano medieval',
    cognates: c(['es', 'can']),
    evolution_note: 'Praticamente sem mudança nenhuma: já significava “cão” (do latim “canis”) no castelhano medieval, e o espanhol moderno ainda usa “can” como palavra mais formal/literária ao lado de “perro”.',
    transparent: true,
  },
  {
    word: 'vermejo',
    root_word: 'vermejo',
    origin_language: 'Castelhano medieval',
    cognates: c(['es', 'bermejo']),
    evolution_note: 'O “v” inicial do castelhano medieval se fundiu com “b” no espanhol moderno, dando “bermejo” — ainda usado hoje pra um vermelho vivo, ao lado de “rojo”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_OSP: [string, string][] = [
  ['Sees cavallero?', 'Tu és cavaleiro?'],
  ['Avedes un can?', 'Tens um cachorro?'],
  ['Avedes un ermano?', 'Tens um irmão?'],
  ['El vino sie vermejo?', 'O vinho é vermelho?'],
];

export const SHADOWING_OSP: [string, string][] = [
  ['Mi casa sie grande.', 'A minha casa é grande.'],
  ['Yo seo cavallero, e ave un can.', 'Eu sou cavaleiro, e tenho um cachorro.'],
  ['El rey ave un fijo.', 'O rei tem um filho.'],
  ['Nos sedemos amigos.', 'Nós somos amigos.'],
];
