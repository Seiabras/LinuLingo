import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo xavante). */
export const COMMUNITY_XAV: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'A hã a\'uwẽ?',
    content: 'Wa a\'uwẽ.',
    reference: 'Wa hã a\'uwẽ.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'E mahãta? (perguntando pelo pai dele)',
    content: 'Maama.',
    reference: 'Ĩmaama.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'E wa?',
    content: 'Eu aibâ.',
    reference: 'Aibâ.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas (artigo em inglês da Wikipédia sobre a língua, citando
 * Harrison 2001) descrevem para o xavante um sistema de respeito morfológico — formas gramaticais
 * especiais usadas, por exemplo, entre genros e sogros, ou de netos para avós — mas não um simples
 * par "formal/informal" como o "você"/"o senhor" do português, nem exemplos completos o bastante para
 * ensinar esse sistema num curso A1. Por isso o cenário abaixo fica no registro "informal" (as
 * construções mais simples, documentadas de forma completa).
 */
export const SCENARIOS_XAV: ScenarioSeed[] = [
  {
    id: 'xav-s1',
    title: 'Chegando à aldeia em Étênhiritipá',
    emoji: '🏡',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador mais velho da aldeia Pimentel Barbosa',
    description:
      'Você chega à Terra Indígena Pimentel Barbosa (Étênhiritipá) e conversa com um morador da aldeia. As fontes não descrevem, para o nível deste curso, um pronome “formal” separado do “informal” em xavante — a conversa usa as formas mais simples e documentadas.',
    turns: [
      {
        bot: 'A hã a\'uwẽ?',
        botTranslation: 'Você é xavante?',
        keywords: ['wa', 'a\'uwẽ'],
        suggestions: ['Wa hã a\'uwẽ.'],
      },
      {
        bot: 'E mahãta? Â?',
        botTranslation: 'Cadê? A água?',
        keywords: ['â'],
        suggestions: ['Â.'],
      },
    ],
  },
];

/**
 * Etimologias do xavante: como a língua é jê (Macro-Jê), bem diferente do português, não há cognatos
 * "de berço" nem empréstimos conhecidos nas fontes consultadas (diferente do kaingang deste app, que
 * tem palavras emprestadas do português como "kasor", cachorro). O que existe — e está documentado —
 * é a formação interna de palavras compostas: como o xavante gruda uma palavra em outra (ou um prefixo
 * de pessoa numa raiz) para formar um novo sentido. Todas as cinco entradas abaixo vêm de uma fonte
 * específica do xavante (ver cada nota) e nenhuma afirma parentesco com o português.
 */
export const ETYMOLOGY_XAV: EtymologySeed[] = [
  {
    word: 'a\'uwẽ',
    root_word: 'a\'uwe uptabi',
    origin_language: 'Xavante',
    cognates: c(['xav', 'uptabi (verdadeiro, de verdade)']),
    evolution_note:
      'A página do povo xavante no ISA (Instituto Socioambiental) traz a autodesignação completa: os xavante, xerente e xakriabá “se identificam como a\'uwe ou a\'uwe uptabi”, que a própria fonte traduz como “gente de verdade”. “A\'uwẽ” sozinha já quer dizer “pessoa, gente”; “uptabi” (verdadeiro) é o que reforça o sentido de “gente de verdade, autêntica” — e dá nome, inclusive, a um livro de 1972 dos missionários-linguistas Giaccaria e Heide, “Auwê Uptabi: Xavante Povo Autêntico”.',
    transparent: false,
  },
  {
    word: 'maparane',
    root_word: 'maparane',
    origin_language: 'Xavante',
    cognates: c(['xav', 'ema (suposta referência, segundo a nota da fonte)']),
    evolution_note:
      'A tabela de numerais do artigo “Língua aquém” da Wikipédia em português anota, entre parênteses, que “maparane” (dois) é usado “como os pés da ema” — uma pista de que o numeral se relaciona, na origem, com a imagem de um par de pés (a ema é uma ave de pernas compridas e dois dedos virados para a frente). A fonte não detalha mais a decomposição da palavra, então esta nota registra só a pista dada ali.',
    transparent: false,
  },
  {
    word: 'danhiptõmo bâ',
    root_word: 'danhipo + bâ',
    origin_language: 'Xavante',
    cognates: c(['xav', 'danhipo (unha, dedo da mão)'], ['xav', 'bâ (todos)']),
    evolution_note:
      'O numeral para “dez” é, literalmente, uma descrição do corpo: a mesma tabela de numerais da Wikipédia em português traz “danhiptõmo bâ” com a glosa “todos os dedos da mão” — a raiz “danhipo” é a mesma que aparece no vocabulário da Lista de Swadesh para “unha (da mão)”, e “bâ” é o numeral/quantificador “todos” da mesma lista.',
    transparent: false,
  },
  {
    word: 'daparahi bâ',
    root_word: 'dapara + bâ',
    origin_language: 'Xavante',
    cognates: c(['xav', 'dapara (pé)'], ['xav', 'bâ (todos)']),
    evolution_note:
      'Pelo mesmo padrão de “danhiptõmo bâ”, o numeral para “vinte” soma todos os dedos das mãos aos dedos dos pés: a Wikipédia em português traz “daparahi bâ” com a glosa “todos os dedos do pé” — “dapara” é a mesma raiz de “pé” que está no vocabulário desta unidade.',
    transparent: false,
  },
  {
    word: 'ĩĩmaama',
    root_word: 'ĩĩ- + maama',
    origin_language: 'Xavante',
    cognates: c(['xav', 'aimaama (teu pai, com o prefixo ai-)'], ['xav', 'ĩmaama (pai dele, com o prefixo ĩ-)']),
    evolution_note:
      'O “Pequeno dicionário xavánte-português, português-xavánte” (Hall & MacLeod, 2004), citado na Wikipédia em português, mostra que “pai” é um substantivo “obrigatoriamente possuído”: a raiz “maama” nunca aparece sozinha, sempre com um prefixo de pessoa (ĩĩ- “meu”, ai- “teu”, ĩ- “dele”, wa- “nosso”, da- “de alguém”). “Ĩĩmaama” é, portanto, “ĩĩ-” (meu) grudado em “maama” (pai) — o mesmo mecanismo gramatical, de prefixar a pessoa na palavra, que aparece em todo o vocabulário de parentesco e corpo do xavante.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_XAV: [string, string][] = [
  ['A hã a\'uwẽ?', 'Você é xavante? (ou: como você se identifica?)'],
  ['E wa?', 'Quem é você?'],
  ['E mahãta?', 'Cadê? (descreva onde você está e o que tem ao redor)'],
  ['E marĩ? E tiha?', '“O que é?” — como um homem perguntaria, e como uma mulher perguntaria.'],
];

export const SHADOWING_XAV: [string, string][] = [
  ['Wa hã a\'uwẽ.', 'Eu sou xavante.'],
  ['Ĩĩmaama.', 'Meu pai.'],
  ['Aibö te tã wa\'pa.', 'O homem ouve a chuva.'],
  ['Misi, maparane, si\'ubdatõ.', 'Um, dois, três.'],
];
