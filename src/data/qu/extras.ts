import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no quéchua). */
export const COMMUNITY_QU: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: '¿Imataq sutiyki, maymantataq kanki?',
    content: 'Napaykullayki! Ñuqa sutiy Bruno, y Qusqumanta kani.',
    reference: 'Napaykullayki! Bruno sutiymi, Qusqumanta kani.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: '¿Imata mikhunki?',
    content: 'Ñuqa mikhuni papata.',
    reference: 'Papata mikhuni.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: '¿Imaynataq wasiyki?',
    content: 'Wasiy hatunmi. Ñañay wasipi kan.',
    reference: 'Wasiy hatunmi. Panay wasipi kan.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_QU: ScenarioSeed[] = [
  {
    id: 'qu-s1',
    title: 'Qatupi, Pisaqpi',
    emoji: '🧺',
    cefr: 'A1',
    register: 'informal',
    persona: 'Mama Rosa, feirante do mercado de Pisac',
    description:
      'Mama Rosa vende papa, sara e ch\'arki no mercado de Pisac, no Vale Sagrado. O quéchua não tem um “você” formal separado do “tu” como o espanhol: o respeito vem de chamar a pessoa de “tayta” ou “mama”, não de um pronome diferente.',
    turns: [
      {
        bot: '¿Imata munanki, taytay?',
        botTranslation: 'O que você quer, senhor?',
        keywords: ['papata', "ch'arkita", 'sarata'],
        suggestions: ['Papata munani.', "Ch'arkita munani."],
      },
      {
        bot: '¿Allinmi kay papa?',
        botTranslation: 'Esta batata está boa?',
        keywords: ['arí', 'mana', 'allinmi'],
        suggestions: ['Arí, allinmi.', 'Allinmi, sulpayki.'],
      },
    ],
  },
];

/**
 * Palavras do quéchua que viraram empréstimos no português (e no espanhol e no inglês, quase sempre
 * pela mesma rota): o caminho contrário do que costuma aparecer nas línguas românicas deste app — aqui
 * não é o português que empresta do quéchua por parentesco, é o quéchua que emprestou PARA o português.
 */
export const ETYMOLOGY_QU: EtymologySeed[] = [
  {
    word: 'kuntur',
    root_word: 'kuntur',
    origin_language: 'Quéchua',
    cognates: c(['pt', 'condor'], ['es', 'cóndor'], ['en', 'condor']),
    evolution_note:
      'Do quéchua “kuntur”, o nome da grande ave andina entrou no espanhol como “cóndor” e, dali, no português e no inglês quase sem mudar de forma.',
    transparent: true,
  },
  {
    word: 'puma',
    root_word: 'puma',
    origin_language: 'Quéchua',
    cognates: c(['pt', 'puma'], ['es', 'puma'], ['en', 'puma']),
    evolution_note: '“Puma” passou do quéchua para o espanhol e para o português sem alterar nem a escrita nem o som.',
    transparent: true,
  },
  {
    word: 'llama',
    root_word: 'llama',
    origin_language: 'Quéchua',
    cognates: c(['pt', 'lhama'], ['es', 'llama'], ['en', 'llama']),
    evolution_note: 'O quéchua “llama” virou “lhama” em português (o “ll” espanhol lido como “lh”) e ficou “llama” no espanhol e no inglês.',
    transparent: true,
  },
  {
    word: 'wik\'uña',
    root_word: 'wik\'uña',
    origin_language: 'Quéchua',
    cognates: c(['pt', 'vicunha'], ['es', 'vicuña'], ['en', 'vicuña']),
    evolution_note: 'Do quéchua “wik\'uña”, o nome do parente selvagem da lhama virou “vicuña” em espanhol e “vicunha” em português — a ejetiva “k\'” se perdeu pelo caminho.',
    transparent: false,
  },
  {
    word: 'ch\'arki',
    root_word: 'ch\'arki',
    origin_language: 'Quéchua',
    cognates: c(['pt', 'charque'], ['es', 'charqui'], ['en', 'jerky']),
    evolution_note:
      'A carne seca e salgada “ch\'arki” deu “charqui” em espanhol andino e “charque” em português — uma palavra do dia a dia no Rio Grande do Sul. Em inglês, o mesmo “charqui” virou “jerky”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_QU: [string, string][] = [
  ['¿Allillanchu kunan?', 'Como você está hoje?'],
  ['Aylluykimanta rimay.', 'Fale da sua família.'],
  ['¿Imata mikhunki, imata upyanki?', 'O que você come e o que você bebe?'],
  ['Wasiykimanta rimay.', 'Fale da sua casa.'],
];

export const SHADOWING_QU: [string, string][] = [
  ['Napaykullayki! Ana sutiymi.', 'Olá! Meu nome é Ana.'],
  ['Allinmi, sulpayki. ¿Qamrí?', 'Estou bem, obrigado. E você?'],
  ['Wasiy hatunmi.', 'Minha casa é grande.'],
  ['Mana yachanichu.', 'Eu não sei.'],
];
