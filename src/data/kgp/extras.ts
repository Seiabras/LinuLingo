import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo kaingang). */
export const COMMUNITY_KGP: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ã kanhgág? Ã panh, nỹ nĩ?',
    content: 'Inh kanhgág. Inh pai mág.',
    reference: 'Inh kanhgág. Inh panh mág.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Hẽ tag?',
    content: 'Kavéj mĩg.',
    reference: 'Mĩg mág.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ã ũn gré, ũn tỹtá?',
    content: 'Inh homem.',
    reference: 'Inh ũn gré.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas para o kaingang não descrevem uma forma "formal" de
 * tratamento separada da informal (como o "você" × "o senhor" do português): o pronome "ã" (tu/você)
 * serve para qualquer pessoa, independentemente da idade ou da posição social de quem ouve.
 */
export const SCENARIOS_KGP: ScenarioSeed[] = [
  {
    id: 'kgp-s1',
    title: 'Chegando à ẽmã de Kófa Vãfag',
    emoji: '🏡',
    cefr: 'A1',
    register: 'informal',
    persona: 'Kófa Vãfag, um ancião da aldeia',
    description:
      'Kófa Vãfag te recebe na entrada da ẽmã (aldeia). O kaingang não distingue um “você” educado de um “tu” íntimo: o mesmo pronome “ã” serve para conversar com qualquer pessoa.',
    turns: [
      {
        bot: 'Ã kanhgág?',
        botTranslation: 'Você, kaingang?',
        keywords: ['inh', 'kanhgág'],
        suggestions: ['Inh kanhgág.'],
      },
      {
        bot: 'Hẽ ã rãnhrãj?',
        botTranslation: 'Qual é o seu trabalho?',
        keywords: ['krãn', 'rãnhrãj'],
        suggestions: ['Inh ẽkré krãn.'],
      },
    ],
  },
];

/**
 * Palavras do kaingang emprestadas do português — o caminho inverso do que normalmente aparece nas
 * outras línguas indígenas do app (onde a palavra indígena foi para o português): aqui, bichos e
 * produtos trazidos com a colonização entraram no kaingang junto com o nome em português, adaptado à
 * fonologia da língua. Todas as cinco palavras são atestadas no Wiktionary, que cita o "Dicionário
 * Kaingang-Português Português-Kaingang" de Ursula Gojtéj Wiesemann (2ª ed., 2011) e marca
 * explicitamente a etimologia de cada uma como empréstimo do português.
 */
export const ETYMOLOGY_KGP: EtymologySeed[] = [
  {
    word: 'kasor',
    root_word: 'cachorro',
    origin_language: 'Português',
    cognates: c(['pt', 'cachorro']),
    evolution_note:
      'O cachorro doméstico não é um animal nativo da fauna que os kaingang já conheciam antes do contato — por isso a língua simplesmente adaptou o nome português “cachorro” à sua fonologia, virando “kasor”.',
    transparent: true,
  },
  {
    word: 'kãvãru',
    root_word: 'cavalo',
    origin_language: 'Português',
    cognates: c(['pt', 'cavalo']),
    evolution_note:
      'Assim como o cachorro, o cavalo chegou ao território kaingang com a colonização. O português “cavalo” virou “kãvãru”, com as vogais nasaladas típicas da língua.',
    transparent: true,
  },
  {
    word: 'aronh',
    root_word: 'arroz',
    origin_language: 'Português',
    cognates: c(['pt', 'arroz']),
    evolution_note:
      '“Aronh” é o português “arroz” adaptado ao kaingang — um grão que não fazia parte da alimentação tradicional (baseada em milho e pinhão) antes de ser introduzido pelos colonizadores.',
    transparent: true,
  },
  {
    word: 'vĩjũ',
    root_word: 'vinho',
    origin_language: 'Português',
    cognates: c(['pt', 'vinho']),
    evolution_note:
      '“Vĩjũ” vem direto do português “vinho”, com a troca do “v” final por uma vogal nasalada — o mesmo padrão de adaptação de outros empréstimos recentes do kaingang.',
    transparent: true,
  },
  {
    word: 'panh',
    root_word: 'pai',
    origin_language: 'Português',
    cognates: c(['pt', 'pai']),
    evolution_note:
      'Diferente de “kasor” ou “vĩjũ”, que nomeiam coisas novas, “panh” (pai) é um empréstimo do português para um conceito que o kaingang já tinha palavra própria — um sinal de como o contato também mudou o vocabulário de parentesco, não só o de objetos e animais novos.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KGP: [string, string][] = [
  ['Ã kanhgág?', 'Você é kaingang? (ou: como você se identifica?)'],
  ['Hẽ ã rãnhrãj?', 'Qual é o seu trabalho?'],
  ['Ã panh, nỹ, gĩr nĩ?', 'Seu pai, sua mãe, seus filhos estão (bem/presentes)?'],
  ['Hẽ tag, ã ẽmã ki?', 'O que tem na sua aldeia/bairro? (lit. “o que isto, você aldeia em”)'],
];

export const SHADOWING_KGP: [string, string][] = [
  ['Inh kanhgág.', 'Eu, kaingang.'],
  ['Inh panh mág, inh nỹ sĩnvĩ.', 'Meu pai (é) grande, minha mãe (é) bonita.'],
  ['Pỹn sãn inh.', 'Pisei numa cobra.'],
  ['Ti tóg rãgró krãn huri.', 'Ele plantou feijão.'],
];
