import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

/**
 * O lojban não dá pano pra manga de etimologia como o esperanto ou o árabe: as gismu foram
 * geradas por um algoritmo que combinou sons de palavras de seis línguas (chinês, inglês, hindi,
 * espanhol, russo e árabe), ponderadas pelo número de falantes de cada uma — não existe, nos
 * dicionários oficiais (jbovlaste/CLL), uma nota de etimologia por palavra mostrando de qual
 * língua-fonte cada som específico veio. Inventar essa ligação palavra por palavra seria chutar
 * onde a fonte não documenta nada — por isso esta aba fica vazia aqui (como em outros idiomas sem
 * parentesco rastreável, ex. yo/extras.ts), e o fato do algoritmo das seis línguas aparece só como
 * curiosidade geral em `cognateNote`, em index.ts.
 */
export const ETYMOLOGY_JBO: EtymologySeed[] = [];

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo lojban). */
export const COMMUNITY_JBO: CommunitySeed[] = [
  {
    author_name: 'Lucas 🇧🇷',
    prompt: 'Descreva o gato.',
    content: 'Mlatu cu xekri.',
    reference: "Le mlatu cu xekri.",
  },
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Diga que o cachorro é grande.',
    content: 'Le gerku barda.',
    reference: 'Le gerku cu barda.',
  },
  {
    author_name: 'Pedro 🇧🇷',
    prompt: 'Diga que você vai ao mercado.',
    content: 'Mi klama zarci.',
    reference: 'Mi klama le zarci.',
  },
];

/**
 * Cenário de conversa. O lojban não distingue registro formal/informal: "do" serve pra qualquer
 * pessoa, sem equivalente ao "você"/"senhor" do português — por isso o registro aqui é nominal.
 */
export const SCENARIOS_JBO: ScenarioSeed[] = [
  {
    id: 'jbo-s1',
    title: 'Ca le jbosnu',
    emoji: '💬',
    cefr: 'A1',
    register: 'informal',
    persona: 'pendo, numa roda de bate-papo em lojban',
    description: 'Você entra num canal de bate-papo só em lojban (como o #jbosnu, da comunidade real) e alguém começa a conversar com você.',
    turns: [
      {
        bot: 'Coi! .i xu do pinxe lo djacu?',
        botTranslation: 'Olá! Você bebe água?',
        keywords: ['pinxe', 'djacu'],
        suggestions: ["Go'i! Mi pinxe lo djacu.", "Na go'i."],
      },
      {
        bot: 'Xu do klama le zarci?',
        botTranslation: 'Você vai ao mercado?',
        keywords: ['klama', 'zarci'],
        suggestions: ["Go'i! Mi klama le zarci.", 'Na go\'i. Mi citka lo nanba.'],
      },
    ],
  },
];

export const JOURNAL_PROMPTS_JBO: [string, string][] = [
  ['Xu do klama le zarci?', 'Você vai ao mercado?'],
  ['Xu do nelci lo mlatu .a lo gerku?', 'Você gosta de gatos ou cachorros?'],
  ['Xu le zdani cu barda?', 'A casa é grande?'],
  ['Xu do gleki?', 'Você está feliz?'],
];

export const SHADOWING_JBO: [string, string][] = [
  ['Coi! Mi pendo do.', 'Olá! Eu sou seu amigo.'],
  ['Le gerku cu barda .i le mlatu cu cmalu.', 'O cachorro é grande. O gato é pequeno.'],
  ['Mi pinxe lo djacu .i mi citka lo nanba.', 'Eu bebo água. Eu como pão.'],
  ["Ki'e! .ui mi gleki.", 'Obrigado! (Alegria!) Estou feliz.'],
];
