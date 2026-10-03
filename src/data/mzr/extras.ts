import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção. Como as fontes não registram frases marúbo com gramática
 * de conversa (ver historias.ts), os textos aqui são perguntas e respostas em português sobre o
 * SIGNIFICADO das palavras marúbo já vistas — não frases marúbo para corrigir.
 */
export const COMMUNITY_MZR: CommunitySeed[] = [
  {
    author_name: 'Beatriz 🇧🇷',
    prompt: 'O que significa “romeyá” para os Marúbo?',
    content: 'Uma espécie de curandeiro.',
    reference:
      'Pajé, xamã — segundo o ISA, quem toma rapé e ayahuasca a partir das sete da noite para receber sucessivamente os espíritos até o amanhecer.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Qual é a diferença entre “Yové Vai” e “Vei Vai”?',
    content: 'Os dois são o mesmo caminho.',
    reference:
      '“Yové Vai” é o caminho antigo entre os vivos e os espíritos yové; “Vei Vai” (Caminho da Névoa) é o caminho que a alma percorre depois da morte, segundo o ISA — são dois caminhos diferentes, ambos formados com a palavra “vai” (caminho).',
  },
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Quem merece o título de “kakáya” entre os Marúbo?',
    content: 'Qualquer morador mais velho da aldeia.',
    reference:
      'Segundo o ISA, o título é dado especificamente aos donos de maloca que “granjearam prestígio pelo seu modo de agir comedido e pacífico”, promovem festas e a paz, e são procurados como conselheiros — não qualquer pessoa mais velha.',
  },
];

/**
 * UM cenário curto. As fontes consultadas não documentam nenhuma marca gramatical de registro formal ×
 * informal para o marúbo (nem frases de diálogo completas) — por isso, como já acontece com o huni kuĩ,
 * o xavante e o kaingang deste app em situação parecida, o cenário fica marcado como informal, e a única
 * “fala” é o eco de um dos dois compostos reais citados pelo ISA.
 */
export const SCENARIOS_MZR: ScenarioSeed[] = [
  {
    id: 'mzr-s1',
    title: 'Os dois caminhos, numa aldeia do Vale do Javari',
    emoji: '🏞️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de uma aldeia marúbo no Vale do Javari (Amazonas)',
    description:
      'As fontes consultadas não registram uma frase marúbo completa de conversa, nem uma marca gramatical de registro formal separada da informal — só os dois compostos cosmológicos citados pelo ISA, usados aqui como fala.',
    turns: [
      {
        bot: 'Yové Vai.',
        botTranslation: 'Caminho dos espíritos.',
        keywords: ['vei', 'vai'],
        suggestions: ['Vei Vai.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras marúbo. A língua NÃO é parente do português: é uma língua pano, nativa do Vale
 * do Javari. Como nos outros pacotes de língua indígena deste app, as notas explicam a formação interna
 * das palavras dentro do próprio marúbo (ou, no caso do nome “Marúbo”, sua origem como exônimo), não
 * cognatos de origem com o português.
 */
export const ETYMOLOGY_MZR: EtymologySeed[] = [
  {
    word: 'vai',
    root_word: 'vai',
    origin_language: 'Marúbo',
    cognates: c(['mzr', 'Yové Vai (caminho dos espíritos)'], ['mzr', 'Vei Vai (caminho da névoa)']),
    evolution_note:
      'Não há dicionário marúbo disponível que decomponha estas palavras diretamente: a tradução de “vai” como “caminho” é uma inferência deste curso, obtida comparando os dois compostos citados pelo ISA — “Yové Vai” (caminho dos espíritos) e “Vei Vai” (Caminho da Névoa) — que compartilham essa peça final. Mais detalhes na aba Gramática deste idioma. O próprio nome “Marúbo”, aliás, não é como o povo se chama: segundo o ISA, é um nome atribuído por povos não indígenas (parecido com o caso do huni kuĩ/“kaxinawá”, outra língua pano já neste app), que só registra uma pista indireta sobre a identidade do grupo — “dizem os Marúbo que sua língua é a dos Chaináwavo”, o nome de uma seção familiar hoje extinta.',
    transparent: false,
  },
  {
    word: 'kakáya',
    root_word: 'kakáya',
    origin_language: 'Marúbo',
    cognates: c(['mzr', 'take (termo de parentesco de seção)'], ['mzr', 'koka (tio materno)']),
    evolution_note:
      'O ISA descreve “kakáya” como um título conquistado, não herdado: cabe aos “donos de maloca que granjearam prestígio pelo seu modo de agir comedido e pacífico, que promovem festas e a paz e são procurados como conselheiros”. É um papel social distinto de “koka” (categoria de parentesco, o tio materno) e de “take” (termo para qualquer parente da própria seção) — os três organizam partes diferentes da vida social marúbo descrita pelo ISA.',
    transparent: false,
  },
  {
    word: 'romeyá',
    root_word: 'romeyá',
    origin_language: 'Marúbo',
    cognates: c(['mzr', 'kenchintxô (especialista em cânticos de cura)'], ['mzr', 'yové (espíritos benevolentes)']),
    evolution_note:
      'O ISA chama de “romeyá” o especialista que os textos em português também traduzem como “pajé”: à noite, ele toma rapé e ayahuasca para receber sucessivamente os espíritos até o amanhecer. É um papel distinto do “kenchintxô”, o especialista que entoa os cânticos de cura — ambos reconhecidos, segundo a fonte, por sua perícia, não por herança automática.',
    transparent: false,
  },
];

/**
 * Temas do diário. Como as fontes não registram frases marúbo com gramática de conversa, os “temas” são
 * as próprias palavras/compostos atestados, usados como rótulo para uma reflexão em português — nunca
 * uma pergunta com gramática marúbo inventada por este curso.
 */
export const JOURNAL_PROMPTS_MZR: [string, string][] = [
  ['Koka.', 'O que é um koka (tio materno) e por que a filha dele era o casamento preferencial entre os Marúbo, segundo o ISA?'],
  ['Kakáya.', 'O que faz um dono de maloca merecer o título de kakáya entre os Marúbo?'],
  ['Yové Vai, Vei Vai.', 'Explique a diferença entre os dois caminhos cosmológicos marúbo citados pelo ISA.'],
];

export const SHADOWING_MZR: [string, string][] = [
  ['Yové Vai.', 'Caminho dos espíritos.'],
  ['Vei Vai.', 'Caminho da névoa.'],
  ['Romeyá.', 'Pajé, xamã.'],
  ['Kakáya.', 'Dono de maloca respeitado, procurado como conselheiro.'],
];
