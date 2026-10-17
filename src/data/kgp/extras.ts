import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo kaingang).
 * Revistos em 17/10/2026: as perguntas e as respostas certas eram montadas. Agora são de Felisbino e
 * Silveira, Signum 25(3), 2022, p. 56–57, e de Zilli (UEL, 2024), p. 75 (frase 89, de Felisbino 2024);
 * o erro do aluno é misturar o português ou tirar uma palavra da frase.
 */
export const COMMUNITY_KGP: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ã mỹ há?',
    content: "Hỹ'ỹ, há inh bem.",
    reference: "Hỹ'ỹ, há inh jẽ.",
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ã tỹ hẽ tá ke nam?',
    content: 'Há ijóg tỹ Maréka nĩ.',
    reference: 'Há ijóg tỹ Maréka ki ke nĩ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ã jóg vỹ hẽ ra vyr?',
    content: 'Inh não kagtĩg.',
    reference: 'Ki inh kagtĩg nĩ.',
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
        // Revisto em 17/10/2026 (“Ã kanhgág?” era montada): Felisbino e Silveira, Signum, 2022, p. 56
        bot: 'Ã mỹ há?',
        botTranslation: 'Você está bem?',
        keywords: ["hỹ'ỹ", 'há', 'jẽ'],
        suggestions: ["Hỹ'ỹ, há inh jẽ."],
      },
      {
        // Revisto em 17/10/2026 (“Hẽ ã rãnhrãj?” não tinha fonte): Felisbino e Silveira, Signum 25(3),
        // 2022, p. 57 (pergunta da pesquisadora e resposta de K11, da TI Marrecas, que diz “ijóg”, eu)
        bot: 'Ã tỹ hẽ tá ke nam?',
        botTranslation: 'De onde você é?',
        keywords: ['ki', 'nĩ'],
        suggestions: ['Há ijóg tỹ Maréka ki ke nĩ.'],
      },
    ],
  },
  // A2 (17/10/2026). Falas de Felisbino e Silveira, Signum 25(3), 2022 (p. 56–58: conversas reais de
  // falantes do Paraná) e de Zilli, dissertação UEL, 2024 (p. 60, 62, 79). Nenhuma fala foi montada.
  {
    id: 'kgp-s2',
    title: 'Conversa com a tia em Karỹnĩnh',
    emoji: '🏡',
    cefr: 'A2',
    register: 'informal',
    persona: 'A titija (tia), na Terra Indígena Apucaraninha',
    description:
      'A tia pergunta como você está, o que quer beber e se vai sair com ela. As respostas curtas do kaingang, “hỹ\'ỹ” (sim) e “vó” (não), resolvem quase tudo.',
    turns: [
      {
        // FS22 p. 56 (pergunta e resposta de K9)
        bot: 'Ã mỹ há?',
        botTranslation: 'Você está bem?',
        keywords: ["hỹ'ỹ", 'há', 'jẽ'],
        suggestions: ["Hỹ'ỹ, há inh jẽ."],
      },
      {
        // ZI24 p. 62 (Tabosa 2014, p. 213)
        bot: 'Ã mỹ kafe kron mũ, goj vó?',
        botTranslation: 'Você quer beber café ou água?',
        keywords: ['kafe', 'goj'],
        suggestions: ['Kafe.', 'Goj.'],
      },
      {
        // ZI24 p. 79 (quadro 12) e p. 60
        bot: 'Ã mỹ inh mré tĩg mũ?',
        botTranslation: 'Você vai comigo?',
        keywords: ["hỹ'ỹ", 'vó', 'nejé'],
        suggestions: ["Hỹ'ỹ.", 'Vó.'],
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

// Revistos em 17/10/2026: “Ã kanhgág?”, “Ã panh, nỹ, gĩr nĩ?” e “Hẽ tag, ã ẽmã ki?” eram montadas. Agora
// Felisbino e Silveira 2022, p. 56–57; Zilli (UEL, 2024), p. 75; Ferro (UEL, 2021), p. 76; Tabosa, tese
// (UEL, 2014), p. 208.
export const JOURNAL_PROMPTS_KGP: [string, string][] = [
  ['Ã mỹ há?', 'Você está bem? (conte como foi o seu dia)'],
  ['Ã tỹ hẽ tá ke nam?', 'De onde você é? (conte de onde vem)'],
  ['Ã jóg vỹ hẽ ra vyr?', 'Para onde o seu pai foi? (conte onde está a sua família)'],
  ['Ũ mré fag vẽmén é?', 'Com quem elas conversaram? (conte com quem você conversou hoje)'],
  ['Pedro mỹ igreja ra tĩg mũ, vỹ escola ra vó?', 'Pedro vai à igreja ou à escola? (conte aonde você vai nesta semana)'],
  // Felisbino e Silveira 2022, p. 56; Ferro 2021, p. 74
  ['Ã mỹ ẽg vĩ rán há nĩ?', 'Você sabe escrever na nossa língua? (conte como aprendeu)'],
  ['Ã mỹ tugtó to há nĩ?', 'Você gosta de ler? (conte o que lê)'],
];

// Revisto em 17/10/2026 (as duas primeiras eram montadas): Ferro 2021, p. 80; Felisbino e Silveira 2022,
// p. 58; e, no fim, frases do B1 (Tabosa, tese, UEL, 2014, p. 152 e 202; Ferro 2021, p. 86–99).
export const SHADOWING_KGP: [string, string][] = [
  ['Jun inh.', 'Eu cheguei.'],
  ['Inh nỹ fi tóg inh kanhrãn é.', 'A minha mãe me ensinava.'],
  ['Pỹn sãn inh.', 'Pisei numa cobra.'],
  ['Ti tóg rãgró krãn huri.', 'Ele plantou feijão.'],
  // Felisbino e Silveira 2022, p. 56; Lima 2023, p. 66 (Almeida 2008); Ferro 2021, p. 76
  ["Ã mỹ há? — Hỹ'ỹ, há inh jẽ.", 'Você está bem? — Sim, estou bem.'],
  ['Kumẽr hã vĩ.', 'Fale devagar.'],
  ['Ũ nỹ gãr kó?', 'Quem comeu o milho?'],
  ['Gĩr vỹ mro, kar kỹ vim ke, kar kỹ ẽkrénh.', 'O menino nadou, pescou e caçou.'],
  ['Gĩr tỹ mora nig mũ vỹ pévé.', 'O menino que chutou a bola caiu.'],
  ['Kỹ hã vẽ.', 'Então é isso.'],
];
