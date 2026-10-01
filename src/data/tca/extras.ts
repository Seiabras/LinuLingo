import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo tikuna). */
export const COMMUNITY_TCA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Nuxmae!',
    content: 'Nuxmae! Tamoxe!',
    reference: 'Nuxmae! Tamoxẽ!',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Wüxi, taxre, tomaxixpü, ___?',
    content: 'Wüxi, taxre, tomaxixpü, wüxi mixepüx.',
    reference: 'Wüxi, taxre, tomaxixpü, ãgümücü.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Wüxi airu?',
    content: 'Wüxi, airu.',
    reference: 'Wüxi airu.',
  },
];

/**
 * Cenário de conversa. O tikuna documentado tem uma forma de tratamento respeitosa, “cuma”
 * (equivalente a “você”/“o senhor” em material pedagógico oficial do Peru), mas as fontes consultadas
 * não confirmam um pronome “íntimo” diferente para contrastar — por isso o cenário fica como informal,
 * sem marcar esse contraste que não está documentado.
 */
export const SCENARIOS_TCA: ScenarioSeed[] = [
  {
    id: 'tca-s1',
    title: 'Encontro numa comunidade do Alto Solimões',
    emoji: '🌳',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de uma comunidade tikuna no Alto Solimões',
    description: 'Você encontra um morador de uma comunidade tikuna e troca as primeiras palavras em tikuna.',
    turns: [
      {
        bot: 'Nuxmae!',
        botTranslation: 'Oi!',
        keywords: ['nuxmae'],
        suggestions: ['Nuxmae!'],
      },
      {
        bot: 'Wüxi airu. Taxre ngobii.',
        botTranslation: 'Um cachorro. Dois jabutis.',
        keywords: ['tamoxẽ'],
        suggestions: ['Tamoxẽ!'],
      },
    ],
  },
];

/**
 * O tikuna é uma língua isolada: diferente do tupi antigo e do guarani, não se conhece uma lista de
 * palavras suas emprestadas ao português. Por isso estas notas de etimologia olham para dentro da
 * própria língua (a origem do nome do povo, o padrão de contagem) ou para a relação entre a
 * transcrição acadêmica e a ortografia prática — em vez de inventar um parentesco que não existe.
 */
export const ETYMOLOGY_TCA: EtymologySeed[] = [
  {
    word: 'Magüta',
    root_word: 'magüta',
    origin_language: 'Tikuna',
    cognates: c(['pt', 'sem cognatos: o tikuna é uma língua isolada']),
    evolution_note:
      'Segundo a tradição oral tikuna e o Instituto Socioambiental, o nome “magüta” (“povo pescado”) vem do mito do herói Yoi, que teria “pescado” o primeiro tikuna com uma vara nas águas vermelhas do igarapé Eware. É assim que o povo e a língua se chamam a si mesmos — não um nome dado de fora.',
    transparent: false,
  },
  {
    word: 'Du-ũ',
    root_word: 'du-ũ',
    origin_language: 'Tikuna',
    cognates: c(['pt', 'sem cognatos: o tikuna é uma língua isolada']),
    evolution_note:
      'Além de “magüta”, o tikuna tem uma segunda autodesignação registrada, “du-ũ” (“a gente”, “nós”). Chamar o próprio povo simplesmente de “a gente” ou “as pessoas” é um padrão comum entre povos indígenas ao redor do mundo, não uma particularidade isolada do tikuna.',
    transparent: false,
  },
  {
    word: 'Wüxi mixepüx',
    root_word: 'wüxi mixepüx',
    origin_language: 'Tikuna',
    cognates: c(['pt', 'sem cognatos: o tikuna é uma língua isolada']),
    evolution_note:
      'O numeral “cinco” já nasce como uma expressão de duas palavras, e os numerais de seis a nove se formam compondo os numerais de um a quatro com uma expressão ligada à outra mão — um padrão de contagem por composição comum em línguas indígenas da Amazônia, e não uma palavra simples como em português.',
    transparent: false,
  },
  {
    word: 'Dexi',
    root_word: 'dexi',
    origin_language: 'Tikuna',
    cognates: c(['pt', 'sem cognatos: o tikuna é uma língua isolada']),
    evolution_note:
      'Escrita sem acento, “dexi” quer dizer “água”; com o tom marcado por acento, “dexá”, a mesma sequência de letras quer dizer “mensagem”. A cartilha oficial de 1997 usa exatamente esse par para explicar por que o tikuna às vezes precisa de acento só para separar duas palavras que o tom distingue na fala.',
    transparent: false,
  },
  {
    word: 'Airu',
    root_word: 'airu',
    origin_language: 'Tikuna',
    cognates: c(['pt', 'sem cognatos: o tikuna é uma língua isolada']),
    evolution_note:
      'A palavra para “cachorro” aparece em duas fontes bem diferentes: como “airu”, na ortografia prática, e como /ʔai31du5/, na transcrição fonológica do linguista Denis Bertet (2021) — as duas descrevem a mesma palavra, com o “r” e o “d” sendo duas realizações do mesmo som em sílaba átona.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TCA: [string, string][] = [
  ['Nuxmae, cuma?', 'Oi, e você? Como você diria “oi” para alguém hoje?'],
  ['Wüxi, taxre, tomaxixpü, ãgümücü, wüxi mixepüx — cuma?', 'Um, dois, três, quatro, cinco — e você, até quanto consegue contar em tikuna?'],
  ['Du-ũ, magüta.', 'Nós, [somos] o povo magüta — e a sua própria família, de onde ela é?'],
  ['Airu, ngobii, tox, churi, ngoxii — cuma?', 'Cachorro, jabuti, macaco-da-noite, morcego, arara — e você, de qual bicho você mais gosta?'],
];

export const SHADOWING_TCA: [string, string][] = [
  ['Nuxmae! Tamoxẽ!', 'Oi! Obrigado(a)!'],
  ['Wüxi, taxre, tomaxixpü, ãgümücü, wüxi mixepüx.', 'Um, dois, três, quatro, cinco.'],
  ['Cuma rii mea cupuracu.', 'Você trabalha muito bem.'],
  ['Mea napuracu i cumax!', 'Trabalhe bem!'],
];
