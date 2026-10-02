import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no maori). */
export const COMMUNITY_MI: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Whakamōhio mai mō koe: tō ingoa, tō pēhea, me tō kāinga.',
    content: 'Au kei te pai. Ko au Bruno tōku ingoa. Au kei te noho ki Rotorua.',
    reference: 'Kei te pai au. Ko Bruno tōku ingoa. Kei te noho au ki Rotorua.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kōrero mai mō tō whānau, me tāku/tōku tika.',
    content: 'Tāku māmā he pai. Tāku whānau he nui. Tōku kurī he pai.',
    reference: 'Tōku māmā he pai. Tōku whānau he nui. Tāku kurī he pai.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Whakakorehia: kāore koe e mōhio ana, ā, kāore koe e haere ana āpōpō.',
    content: 'Kāore au kei te mōhio. Kāore au ka haere āpōpō.',
    reference: 'Kāore au i te mōhio. Kāore au e haere āpōpō.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_MI: ScenarioSeed[] = [
  {
    id: 'mi-s1',
    title: 'He kai i te hui',
    emoji: '🍽️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Hine, uma nova amiga num hui em Tāmaki Makaurau (Auckland)',
    description: 'Hine te convida para comer durante um hui (encontro) perto de Tāmaki Makaurau. É informal, entre amigos novos.',
    turns: [
      {
        bot: 'Kei te pīrangi koe ki te kai?',
        botTranslation: 'Você quer comida?',
        keywords: ['āe', 'kāo', 'pīrangi', 'kai', 'wai'],
        suggestions: ['Āe, kei te pīrangi au ki te kai.', 'Kāo, he wai noa māku.'],
      },
      {
        bot: 'Nō hea koe?',
        botTranslation: 'De onde você é?',
        keywords: ['nō hea', 'manuhiri', 'noho'],
        suggestions: ['He manuhiri au ki konei.', 'Kei te noho au ki Tāmaki Makaurau.'],
      },
    ],
  },
];

/**
 * Palavras maoris que entraram no inglês (sobretudo o inglês neozelandês), com a direção do
 * empréstimo invertida: aqui é o maori que empresta para o inglês, não o contrário.
 */
export const ETYMOLOGY_MI: EtymologySeed[] = [
  {
    word: 'kiwi',
    root_word: 'kiwi (nome da ave em maori)',
    origin_language: 'Maori — aqui o empréstimo vai do maori PARA o inglês, ao contrário da maioria das palavras desta lista',
    cognates: c(['en', 'kiwi (a ave; também apelido afetuoso para os neozelandeses, e nome encurtado da fruta "kiwifruit")']),
    evolution_note: 'O “kiwi” é uma ave símbolo da Nova Zelândia. Desde o início do século XX os neozelandeses passaram a ser chamados de “Kiwis” também em inglês, e a fruta espinhosa verde, originalmente chamada “Chinese gooseberry”, foi rebatizada de “kiwifruit” nos anos 1950 — depois encurtada para “kiwi” em muitos países, inclusive no Brasil.',
    transparent: true,
  },
  {
    word: 'haka',
    root_word: 'haka (maori: dança-desafio ritual)',
    origin_language: 'Maori',
    cognates: c(['en', 'haka (usado em inglês no mundo todo para a dança-desafio maori)']),
    evolution_note: 'O haka é uma performance ritual de desafio, com canto, batidas de pé e expressões faciais marcantes. Ficou conhecido mundialmente pelos All Blacks, a seleção de rúgbi da Nova Zelândia, que o executam antes das partidas — e a palavra “haka” virou de uso corrente em inglês (e também em português) para descrever esse tipo de performance.',
    transparent: true,
  },
  {
    word: 'mana',
    root_word: 'mana (maori: prestígio, autoridade espiritual)',
    origin_language: 'Maori',
    cognates: c(['en', 'mana (usado em inglês, inclusive como “mana points” em jogos de RPG, num sentido bem mais simples que o original)']),
    evolution_note: 'Em maori, “mana” é um conceito rico: prestígio, autoridade e poder espiritual herdado e construído ao longo da vida. Ao entrar no vocabulário internacional dos jogos eletrônicos (via outras línguas polinésias também), o sentido foi simplificado para “pontos de energia mágica” — bem mais estreito que o significado maori original.',
    transparent: true,
  },
  {
    word: 'whānau',
    root_word: 'do verbo whānau, “nascer, dar à luz”',
    origin_language: 'Maori',
    cognates: c(['en', 'whānau (usado no inglês neozelandês para “família”, inclusive em contextos oficiais como hospitais, escolas e serviços públicos)']),
    evolution_note: 'A palavra para “família” em maori vem do verbo “nascer” — a língua liga o grupo familiar ao próprio ato de vir ao mundo. O dicionário Oxford registra o uso da palavra em inglês desde a década de 1910, e hoje “whānau” aparece em documentos oficiais neozelandeses mesmo em frases em inglês.',
    transparent: false,
  },
  {
    word: 'kia ora',
    root_word: 'kia (partícula de desejo) + ora (vida, saúde)',
    origin_language: 'Maori',
    cognates: c(['en', 'kia ora (usado como saudação informal no inglês neozelandês, inclusive em anúncios públicos e placas)']),
    evolution_note: 'Literalmente “que haja vida” ou “esteja com saúde”, “kia ora” é hoje uma saudação tão comum no inglês falado na Nova Zelândia que aparece em anúncios de trem, atendimentos telefônicos e cartazes, mesmo fora de contextos em maori.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MI: [string, string][] = [
  ['Kei te pēhea koe i tēnei rā?', 'Como você está hoje?'],
  ['Kōrero mai mō tō whānau.', 'Fale sobre a sua família.'],
  ['Kei te pīrangi koe ki te aha?', 'O que você quer?'],
  ['Kei te pēhea tō kāinga?', 'Como é o seu lar?'],
];

export const SHADOWING_MI: [string, string][] = [
  ['Kia ora! Ko Maya tōku ingoa.', 'Oi! Meu nome é Maya.'],
  ['Kei te pai ahau, kei te pēhea koe?', 'Estou bem, e você?'],
  ['He nui tōku whānau, he pai tōku kāinga.', 'Minha família é grande, meu lar é bom.'],
  ['Kāore au i te mōhio.', 'Eu não sei.'],
];
