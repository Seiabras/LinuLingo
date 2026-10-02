import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no quimbundo). */
export const COMMUNITY_KMB: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Conte o que você tem, usando “Eme ngala ni…”.',
    content: 'Eme ngala dikamba.',
    reference: 'Eme ngala ni dikamba.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Fale sobre o que outra pessoa tem, usando “uala ni”.',
    content: 'Mwene ngala ni muxima.',
    reference: 'Mwene uala ni muxima.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Descreva uma parte do corpo que você tem.',
    content: 'Eme ngala ni ubunda.',
    reference: 'Eme ngala ni mbunda.',
  },
];

/** Cenário de conversa. */
export const SCENARIOS_KMB: ScenarioSeed[] = [
  {
    id: 'kmb-s1',
    title: 'Mu kitanda',
    emoji: '🏪',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, vendedora numa kitanda (quitanda) do bairro',
    description: 'Você visita a quitanda do bairro e conversa, em quimbundo, sobre o que cada um tem.',
    turns: [
      {
        bot: 'Eye uala ni kudya?',
        botTranslation: 'Você tem comida?',
        keywords: ['kudya', 'ngala'],
        suggestions: ['Eme ngala ni kudya.', 'Eme ngala ni menya.'],
      },
      {
        bot: 'Eye uala ni dikamba mu kilombo?',
        botTranslation: 'Você tem um amigo no quilombo?',
        keywords: ['dikamba', 'ngala'],
        suggestions: ['Eme ngala ni dikamba.', 'Eme ngala ni dikamba mu kilombo.'],
      },
    ],
  },
];

/**
 * Palavras do quimbundo que viajaram para o português do Brasil — o caminho inverso do que costuma
 * aparecer nas etimologias deste app (em vez de uma raiz latina com parentes em línguas irmãs, aqui
 * a palavra é nativa do quimbundo e o “cognato” é o empréstimo que ela deixou no português). Cada
 * uma das cinco palavras existe em vocabulario.ts. Fontes: Wikcionário (inglês), verbetes “moleque”,
 * “bunda”, “zumbi”, “quilombo” e “cafuné” (etimologia) e “muleke”, “mbunda”, “nzumbi”, “kilombo” e
 * “kifune” (verbetes do quimbundo, com classe, plural e, quando havia, o parente no quicongo ou no
 * umbundo).
 */
export const ETYMOLOGY_KMB: EtymologySeed[] = [
  {
    word: 'muleke',
    root_word: 'muleke (classe mu-/a-, plural aleke)',
    origin_language: 'Quimbundo (palavra nativa)',
    cognates: c(['pt', 'moleque (empréstimo)'], ['kg', 'nleke (quicongo: menino, criança)']),
    evolution_note:
      '“Muleke” quer dizer “menino, rapaz” (e também “criado, servo”) em quimbundo. Entrou no português do Brasil como “moleque”, hoje mais usado para “criança levada” ou, informalmente, “rapaz”: o som quase não mudou, só caiu o prefixo de classe.',
    transparent: true,
  },
  {
    word: 'mbunda',
    root_word: 'mbunda (classe N-/ji-, plural jimbunda), do protobanto *bʊ́ndá',
    origin_language: 'Quimbundo (herdada do protobanto)',
    cognates: c(['pt', 'bunda (empréstimo)']),
    evolution_note:
      '“Mbunda” é “nádegas” em quimbundo, vinda de uma raiz protobanta ligada às costas, à parte de baixo do corpo. Em português virou “bunda”, quase sem mudar de som.',
    transparent: true,
  },
  {
    word: 'nzumbi',
    root_word: 'nzumbi (classe N-/ji-, plural jinzumbi)',
    origin_language: 'Quimbundo',
    cognates: c(['pt', 'zumbi (empréstimo)']),
    evolution_note:
      '“Nzumbi” é “espírito, fantasma” em quimbundo. No Brasil colonial, deu “zumbi” — o nome do líder Zumbi dos Palmares usa essa palavra. Só bem depois, por causa do inglês “zombie”, “zumbi” passou a significar também o morto-vivo do cinema.',
    transparent: false,
  },
  {
    word: 'kilombo',
    root_word: 'kilombo (classe ki-/i-, plural ilombo)',
    origin_language: 'Quimbundo (cognato do umbundo ocilombo)',
    cognates: c(['pt', 'quilombo (empréstimo)'], ['umb', 'ocilombo (umbundo: acampamento)']),
    evolution_note:
      '“Kilombo” era um acampamento guerreiro ou de iniciação entre povos de língua banta de Angola. No Brasil, “quilombo” passou a nomear as comunidades livres formadas por pessoas que fugiam da escravidão, como o Quilombo dos Palmares.',
    transparent: false,
  },
  {
    word: 'kifune',
    root_word: 'kifune (classe ki-/i-, plural ifune)',
    origin_language: 'Quimbundo',
    cognates: c(['pt', 'cafuné (empréstimo)']),
    evolution_note:
      '“Kifune” é o gesto de fazer carinho na cabeça de alguém, cocando devagar — o mesmo “cafuné” do português, com som bem parecido.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_KMB: [string, string][] = [
  ['Eme ngala ni dikamba. Ni eye?', 'Eu tenho um amigo. E você?'],
  ['Eme ngala ni imbwa. Ni eye?', 'Eu tenho um cachorro. E você?'],
  ['Etu tuala ni menya ni tubia. Ni eye?', 'Nós temos água e fogo. E você?'],
  ['Eme ngala ni muxima. Ni eye?', 'Eu tenho coração. E você?'],
];

export const SHADOWING_KMB: [string, string][] = [
  ['Eme ngala. Ni eye?', 'Eu sou/estou. E você?'],
  ['Eme ngala ni dikamba.', 'Eu tenho um amigo.'],
  ['Etu tuala ni menya ni tubia.', 'Nós temos água e fogo.'],
  [
    'O athu woso avwala abhuluka ni kusokela mu kijingu ni mu itekelu.',
    'Todos os seres humanos nascem livres e iguais em dignidade e em direitos (artigo 1º da Declaração Universal dos Direitos Humanos, tradução em quimbundo — fonte: Omniglot).',
  ],
];
