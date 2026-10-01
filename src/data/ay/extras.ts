import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no aimará: esquecer o “-wa” da assertiva, o sufixo de posse “-ja” e o “-x” de tópico). */
export const COMMUNITY_AY: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: '¿Kunasa sutimaxa, kawkirus jutta?',
    content: 'Kamisaki! Suti Bruno, Brasilat jutta.',
    reference: 'Kamisaki! Bruno satathwa, Brasilat jutta.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: '¿Jupax khitisa?',
    content: 'Jupa jilaja.',
    reference: 'Jupax jilajawa.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: '¿Kuna aychsa munta?',
    content: "Naya ch'uqi.",
    reference: "Ch'uqi munta.",
  },
];

/** Cenário de conversa. O aimará não tem um “você” formal separado do “tu”: o respeito vem de chamar a pessoa de “jilata”/“kullaka” (irmão/irmã) ou “tata”/“mama” (senhor/senhora), não de um pronome diferente. */
export const SCENARIOS_AY: ScenarioSeed[] = [
  {
    id: 'ay-s1',
    title: 'Qhatun, El Alton',
    emoji: '🧺',
    cefr: 'A1',
    register: 'informal',
    persona: 'Doña Elena, feirante da Feria 16 de Julio, em El Alto',
    description:
      'Doña Elena vende ch\'uqi (batata) e aycha (carne) na maior feira de rua de El Alto, Bolívia. O respeito aqui vem de chamar a pessoa de “jilata”/“kullaka”, não de um pronome formal separado.',
    turns: [
      {
        bot: '¿Kuna munta, jilata?',
        botTranslation: 'O que você quer, irmão?',
        keywords: ["ch'uqi", 'aycha', "manq'a"],
        suggestions: ["Ch'uqi munta.", 'Aycha munta.'],
      },
      {
        bot: '¿Sumasa ukax ch\'uqixa?',
        botTranslation: 'Essa batata está boa?',
        keywords: ['jisa', 'janiwa', 'suma'],
        suggestions: ['Jisa, sumawa.', 'Sumawa, yuspagara.'],
      },
    ],
  },
];

/**
 * Etimologias do aimará: um empréstimo real e documentado para o português/espanhol (“allpaqa” →
 * alpaca), o nome da própria família de línguas (jaqi) e dois fatos de semântica histórica confirmados
 * em fontes específicas do aimará — a extensão de sentido de “nayra” (olho/frente → passado) e “qhipa”
 * (costas/atrás → futuro), do estudo de Núñez e Sweetser (2006, Cognitive Science), e a dupla função
 * de “wila” (vermelho e sangue, a mesma palavra), documentada nos dicionários consultados.
 */
export const ETYMOLOGY_AY: EtymologySeed[] = [
  {
    word: 'allpaqa',
    root_word: 'allpaqa',
    origin_language: 'Aimará',
    cognates: c(['pt', 'alpaca'], ['es', 'alpaca'], ['en', 'alpaca']),
    evolution_note:
      'Do aimará “allpaqa”, o nome do animal passou ao espanhol como “alpaca” e, por ele, ao português e a várias outras línguas quase sem mudar de forma — um empréstimo direto do aimará, não do quéchua (que tem palavras próprias e diferentes para o mesmo animal, como “paqu”).',
    transparent: true,
  },
  {
    word: 'jaqi',
    root_word: 'jaqi',
    origin_language: 'Aimará',
    cognates: c(['ay', 'jaqi aru (língua das pessoas, outro nome para o aimará)']),
    evolution_note:
      'A própria família de línguas a que o aimará pertence se chama “jaqi” — exatamente esta palavra, que quer dizer “pessoa, gente, ser humano”. É a mesma lógica do quéchua, que se autodenomina “runasimi” (língua das pessoas, de “runa”, pessoa) — mas com uma palavra totalmente diferente, prova de que as duas famílias não vêm de uma origem comum.',
    transparent: false,
  },
  {
    word: 'nayra',
    root_word: 'nayra',
    origin_language: 'Aimará',
    cognates: c(['ay', 'nayra pacha (tempo passado)']),
    evolution_note:
      'O estudo de Rafael Núñez e Eve Sweetser (2006, revista Cognitive Science) mostrou que o aimará usa “nayra” — a mesma palavra para “olho”, “vista” e “frente” — também para dizer “passado”: o que já aconteceu é, metaforicamente, o que já foi visto, por isso fica “na frente”, onde os olhos alcançam.',
    transparent: false,
  },
  {
    word: 'qhipa',
    root_word: 'qhipa',
    origin_language: 'Aimará',
    cognates: c(['ay', 'qhipüru (lit. “dia de trás”, usado para “outro dia, no futuro”)']),
    evolution_note:
      'No mesmo estudo de Núñez e Sweetser, “qhipa” — a palavra para “costas, atrás” — vira a palavra para “futuro”: o que ainda não aconteceu não pode ser visto, por isso fica “atrás”, fora do alcance dos olhos. É o espelho exato da metáfora do português, em que o futuro fica à frente.',
    transparent: false,
  },
  {
    word: 'wila',
    root_word: 'wila',
    origin_language: 'Aimará',
    cognates: c(['ay', 'wila masi (parente de sangue, família)']),
    evolution_note:
      'Os dicionários aimará-espanhol consultados para este curso (entre eles o “Diccionario Ilustrado de la Lengua Aymara”, do Ministério da Educação do Chile, e a lista de Swadesh do aimará no Wiktionary) registram “wila” com os dois sentidos ao mesmo tempo: “vermelho” e “sangue” — a cor nomeada a partir do próprio sangue, como em “wila masi” (parente de sangue, família).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_AY: [string, string][] = [
  ['¿Kamisaraki jichhuru?', 'Como você está hoje?'],
  ['¿Khitinakasa jumana wila masimaxa?', 'Quem são os parentes da sua família?'],
  ["¿Kuna manq'as munta?", 'Que comida você quer, de que comida você gosta?'],
  ['¿Kawkirus jichhuru sarta?', 'Aonde você vai hoje?'],
];

export const SHADOWING_AY: [string, string][] = [
  ['Kamisaki! Ana satathwa.', 'Olá! Eu me chamo Ana.'],
  ['Walikiskthwa, yuspagara.', 'Estou bem, obrigado.'],
  ['Jupax jilajawa.', 'Ele é meu irmão.'],
  ["Wali suma manq'awa.", 'É uma comida muito gostosa.'],
];
