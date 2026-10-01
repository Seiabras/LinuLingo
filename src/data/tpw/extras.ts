import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo tupi antigo). */
export const COMMUNITY_TPW: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Marãpe nde rera? Erekó tuba, sy?',
    content: 'Xe rera Bruno. Eẽ, xe tuba gûasu.',
    reference: 'Xe rera Bruno. Eẽ, xe ruba gûasu.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: "Ere'u pirá?",
    content: "Eẽ, 'u pirá.",
    reference: "Eẽ, a'u pirá.",
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: "Taîasó ka'a pupé, îandé?",
    content: 'Eẽ, oré orosó.',
    reference: 'Eẽ, îandé îasó.',
  },
];

/**
 * Cenário de conversa. O tupi antigo, como o latim, não tinha uma forma "formal" de tratamento
 * separada: "endé" (tu/você) servia para qualquer pessoa.
 */
export const SCENARIOS_TPW: ScenarioSeed[] = [
  {
    id: 'tpw-s1',
    title: 'Chegando à oca de um amigo',
    emoji: '🏡',
    cefr: 'A1',
    register: 'informal',
    persona: 'Potyra, uma amiga da aldeia',
    description:
      'Potyra te recebe na entrada da oca dela. É informal: o tupi antigo não distinguia um "você" educado de um "tu" íntimo, como faz o português.',
    turns: [
      {
        bot: 'Ereîúrype?',
        botTranslation: 'Você veio?',
        keywords: ['aîur', 'pa'],
        suggestions: ['Pa, aîur.'],
      },
      {
        bot: "A'u-potár pirá?",
        botTranslation: 'Você quer comer peixe?',
        keywords: ["a'u", 'eẽ', 'aani'],
        suggestions: ["Eẽ, a'u-potár pirá.", "Aani, abati a'u-potár."],
      },
    ],
  },
];

/**
 * Palavras do tupi antigo que passaram para o português do Brasil — sobretudo nomes de bichos,
 * plantas e moradia, já que os colonizadores aprenderam esses nomes com os próprios tupinambás.
 */
export const ETYMOLOGY_TPW: EtymologySeed[] = [
  {
    word: 'tatu',
    root_word: 'tatu',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'tatu'], ['gn', 'tatú']),
    evolution_note: 'O português "tatu" é o próprio tupi "tatu", sem nenhuma mudança — um dos muitos nomes de animais que o português do Brasil herdou direto da língua indígena da costa.',
    transparent: true,
  },
  {
    word: 'arara',
    root_word: 'arara',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'arara']),
    evolution_note: 'Assim como "tatu", a palavra "arara" passou para o português sem mudar quase nada — o nome tupi do pássaro virou o nome português dele.',
    transparent: true,
  },
  {
    word: 'îagûara',
    root_word: 'îagûara',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'jaguar'], ['en', 'jaguar'], ['fr', 'jaguar'], ['es', 'yaguar']),
    evolution_note: 'De "îagûara" (onça, fera) vem "jaguar" — uma palavra que saiu do tupi-guarani, entrou no português e no espanhol coloniais e de lá se espalhou para o inglês, o francês e outras línguas europeias.',
    transparent: false,
  },
  {
    word: 'oka',
    root_word: 'oka',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'oca']),
    evolution_note: '"Oka" (casa) deu o português "oca", palavra ainda usada hoje para descrever a casa comunal de palha de vários povos indígenas brasileiros.',
    transparent: true,
  },
  {
    word: 'pirá',
    root_word: 'pirá',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'piranha'], ['pt', 'pirarucu']),
    evolution_note: '"Pirá" (peixe) é a raiz por trás de muitos nomes de peixes brasileiros: "piranha" (pirá + sainha, "peixe-dente") e "pirarucu" (pirá + urucu, "peixe vermelho") são dois dos mais conhecidos.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TPW: [string, string][] = [
  ['Marãpe nde rera?', 'Qual é o seu nome?'],
  ['Erekó sy, tuba, membyra?', 'Você tem mãe, pai, filhos?'],
  ["Marã pe'u ne resé?", 'O que você come?'],
  ['Mamõ pe ereîkó?', 'Onde você mora?'],
];

export const SHADOWING_TPW: [string, string][] = [
  ['Ereîúrype? Pa, aîur.', 'Você veio? Sim, eu vim.'],
  ['Marãpe nde rera? Xe rera Linu.', 'Qual é o seu nome? Meu nome é Linu.'],
  ['Xe sy katu, xe ruba gûasu.', 'Minha mãe é boa, meu pai é grande.'],
  ["A'u-potár pirá, 'y pupé aîkó.", 'Eu quero comer peixe, estou na água.'],
];
