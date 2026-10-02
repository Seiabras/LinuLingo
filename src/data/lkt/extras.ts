import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no lakota) e cenário de
 * conversa. Fontes: ver o cabeçalho de vocabulario.ts.
 */
export const COMMUNITY_LKT: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Descreva a cor do cachorro.',
    content: 'Kiŋ šúŋka sápa.',
    reference: 'Šúŋka kiŋ sápa.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Responda “sim” e agradeça.',
    content: 'Hau, philámayaye!',
    reference: 'Háŋ, philámayaye!',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Diga que é um prazer te conhecer (você escreve como mulher).',
    content: 'Wíyuškiŋyaŋ waŋčhíŋyaŋke ló.',
    reference: 'Wíyuškiŋyaŋ waŋčhíŋyaŋke ye.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LKT: ScenarioSeed[] = [
  {
    id: 'lkt-s1',
    title: 'Hau! Taŋyáŋ yahí!',
    emoji: '🤝',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma pessoa que você acabou de conhecer num encontro da comunidade',
    description: 'Você conhece alguém num encontro da comunidade e troca os primeiros cumprimentos em lakota.',
    turns: [
      {
        bot: 'Hau! Táku eníčiyapi he?',
        botTranslation: 'Oi! Qual é o seu nome?',
        keywords: ['emáčiyapi'],
        suggestions: ['Miyé, Linu emáčiyapi.'],
      },
      {
        bot: 'Taŋyáŋ yahí! Wičháša he, wíŋyaŋ he?',
        botTranslation: 'Bem-vindo! Você é homem ou mulher?',
        keywords: ['wičháša', 'wíŋyaŋ'],
        suggestions: ['Wičháša.', 'Wíŋyaŋ.'],
      },
    ],
  },
];

/** Palavras do lakota com a etimologia atestada em dicionário (Wiktionary). */
export const ETYMOLOGY_LKT: EtymologySeed[] = [
  {
    word: 'matȟó',
    root_word: '*wątho (“urso-negro”)',
    origin_language: 'Protosiouano',
    cognates: c(['Dakota', 'mathó'], ['Mandan', 'wątóʔ'], ['Chiwere', 'mąthó']),
    evolution_note: 'A palavra para “urso” é antiga na família siouana: o protosiouano “*wątho” (literalmente “urso-negro”) deu o lakota “matȟó”, o dakota “mathó”, o mandan “wątóʔ” e o chiwere “mąthó” — todas ainda reconhecíveis entre si.',
    transparent: false,
  },
  {
    word: 'tȟaló',
    root_word: 'tȟa- + ló',
    origin_language: 'Lakota (composição interna)',
    cognates: [],
    evolution_note: '“Tȟaló” (carne) nasce da junção de “tȟa-” (de ruminante, como o bisão ou o veado) com “ló” (macio, tenro): literalmente, “a parte macia do ruminante”.',
    transparent: false,
  },
  {
    word: 'asáŋpi',
    root_word: 'azé + haŋpí',
    origin_language: 'Lakota (composição interna)',
    cognates: [],
    evolution_note: '“Asáŋpi” (leite) vem de “azé” (peito, seio) mais “haŋpí” (suco, líquido doce): leite é, ao pé da letra, “o suco do peito”.',
    transparent: false,
  },
  {
    word: 'aǧúyapi',
    root_word: 'aǧuyÁ + -pi',
    origin_language: 'Lakota (composição interna)',
    cognates: [],
    evolution_note: '“Aǧúyapi” (pão) vem do verbo “aǧuyÁ” (tostar por cima, chamuscar a superfície) mais o sufixo “-pi”: o nome descreve o próprio jeito de assar o pão.',
    transparent: false,
  },
  {
    word: 'šúŋka',
    root_word: '*wašų́ke',
    origin_language: 'Protosiouano',
    cognates: [],
    evolution_note: '“Šúŋka” (cachorro) vem do protosiouano “*wašų́ke”. A mesma raiz aparece dentro de “šúŋkawakȟáŋ” (cavalo), literalmente “cachorro-sagrado” — o nome que os lakota deram ao cavalo quando ele chegou às Planícies, comparando-o ao animal doméstico que já conheciam.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_LKT: [string, string][] = [
  ['Táku eníčiyapi he?', 'Qual é o seu nome?'],
  ['Tukténitaŋhaŋ he?', 'De onde você é?'],
  ['Tuwá he? Wičháša he, wíŋyaŋ he?', 'Quem é? É homem ou mulher?'],
  ['Iná, até, wakȟáŋyeža — tȟáŋka he, číkʼala he?', 'Mãe, pai, criança — são grandes ou pequenos?'],
];

export const SHADOWING_LKT: [string, string][] = [
  ['Hau! Linu emáčiyapi.', 'Oi! Eu me chamo Linu.'],
  ['Táku eníčiyapi he?', 'Qual é o seu nome?'],
  ['Philámayaye!', 'Obrigado!'],
  ['Taŋyáŋ yahí!', 'Bem-vindo!'],
];
