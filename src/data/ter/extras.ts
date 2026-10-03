import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo terena). */
export const COMMUNITY_TER: CommunitySeed[] = [
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Kuti keha?',
    content: 'Juliana koeha.',
    reference: 'Juliana ngoeha.',
  },
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'Na keyeye?',
    content: 'Kohoneti ra tuti.',
    reference: 'Kohoneti ra nduti.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Na yeno?',
    content: 'Miranda yonom.',
    reference: 'Mirandake yonom.',
  },
];

/**
 * Cenário de conversa. Butler e Ekdahl (1979, Lição 3) contam que o terena não costuma usar títulos
 * de tratamento (“yeno João” pode ser “a esposa de João” ou “a esposa do Sr. João”); por isso o
 * cenário é informal, como nos outros pacotes de língua indígena do app.
 */
export const SCENARIOS_TER: ScenarioSeed[] = [
  {
    id: 'ter-s1',
    title: 'Chegando em Cachoeirinha',
    emoji: '🌱',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma moradora de uma aldeia da Terra Indígena Cachoeirinha',
    description:
      'O terena não costuma usar títulos de tratamento como “senhor” e “senhora”: o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Na keyeye?',
        botTranslation: 'Como vai?',
        keywords: ['apepo', 'unati'],
        suggestions: ['Apepo.'],
      },
      {
        bot: 'Kuti keha?',
        botTranslation: 'Como você se chama?',
        keywords: ['ngoeha'],
        suggestions: ['Linu ngoeha.'],
      },
      {
        bot: 'Na yeno?',
        botTranslation: 'Aonde você vai?',
        keywords: ['yonom', 'mirandake'],
        suggestions: ['Mirandake yonom.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras terena. O terena não é parente do português, então as notas mostram duas
 * coisas: empréstimos que Silva (2013) marca como vindos do português ou do guarani, e palavras
 * compostas dentro do próprio terena (Butler e Ekdahl 1979, 3.5.1).
 */
export const ETYMOLOGY_TER: EtymologySeed[] = [
  {
    word: 'Marakaya',
    root_word: 'marakaya',
    origin_language: 'Guarani',
    cognates: c(['gn', 'mbarakaja (gato)']),
    evolution_note:
      '“Marakaya” (gato) veio do guarani, como registra o dicionário de Denise Silva (2013). O terena tem muitas palavras de origem tupi-guarani, sinal de um contato antigo entre esses povos. Compare com o guarani “mbarakaja”.',
    transparent: false,
  },
  {
    word: 'Panana',
    root_word: 'banana',
    origin_language: 'Português',
    cognates: c(['pt', 'banana']),
    evolution_note:
      '“Panana” é a “banana” do português, adaptada ao terena: o b virou p — no terena, o som b não aparece sozinho, só colado a um m (mb), como nas formas de “meu”. O dicionário de Denise Silva (2013) marca a palavra como empréstimo do português.',
    transparent: true,
  },
  {
    word: 'Mbola',
    root_word: 'bola',
    origin_language: 'Português',
    cognates: c(['pt', 'bola'], ['ter', "epo'e (bola, palavra terena)"]),
    evolution_note:
      "“Mbola” é a “bola” do português, com o b pronunciado como mb — o mesmo som que o terena usa para dizer “meu” (paho → mbaho, minha boca). O terena tem também uma palavra própria para bola, “epo'e”, de onde vem “epo'exoti”, jogar bola (Denise Silva, 2013).",
    transparent: true,
  },
  {
    word: "Xe'exa tapi'i",
    root_word: "xe'exa + tapi'i",
    origin_language: 'Terena',
    cognates: c(['ter', "xe'exa (filho, filhote)"], ['ter', "tapi'i (galinha)"]),
    evolution_note:
      "O ovo, em terena, é “o filho da galinha”: “xe'exa” (filho, filhote, produto de alguém) + “tapi'i” (galinha). Na fala, as duas palavras viram uma unidade só, e a primeira perde o acento (Butler e Ekdahl, 1979). Silva (2013) registra a mesma expressão como verbete: xe'exa tapi'i, ovo.",
    transparent: false,
  },
  {
    word: 'Kuaturu kaxe',
    root_word: 'quatro + kaxe',
    origin_language: 'Português e terena',
    cognates: c(['pt', 'quatro'], ['ter', 'lumingu (domingo, do português)']),
    evolution_note:
      'Os dias da semana em terena contam a partir do domingo, “lumingu” (do português “domingo”). A segunda-feira é “ike lumingu” (depois do domingo), e a quinta-feira é “kuaturu kaxe”: “quatro” do português + “kaxe” (sol, dia) — o quarto dia depois do domingo. Os números de 1 a 3 são terena (poehaxo, pi\'axo, mopo\'axo); daí em diante, a língua usa números vindos do português (Butler e Ekdahl, 1979; Denise Silva, 2013).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TER: [string, string][] = [
  ['Na keyeye?', 'Como vai?'],
  ['Kuti keha?', 'Como você se chama?'],
  ['Na yeno?', 'Aonde você vai?'],
  ["Kuti koeha ne ha'a iti?", 'Como se chama o seu pai?'],
];

export const SHADOWING_TER: [string, string][] = [
  ['Na keyeye? Apepo.', 'Como vai? Vou bem.'],
  ['Kuti keha? Davi ngoeha.', 'Como você se chama? Eu me chamo Davi.'],
  ['Kohoneti ra nduti.', 'Estou com dor de cabeça.'],
  ['Hinga pihapane uti.', 'Vamos embora.'],
];
