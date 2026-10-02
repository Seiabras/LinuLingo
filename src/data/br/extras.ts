import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no bretão). */
export const COMMUNITY_BR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Da dad, ha da vamm.',
    content: 'An ma zad a zo mat.',
    reference: 'Ma zad a zo mat.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Skrivit un dra gant “ne … ket”.',
    content: 'Ne ouzon brezhoneg.',
    reference: "Ne ouzon ket brezhoneg.",
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Deskrivit ar gador hag an daol.',
    content: 'Ar kador a zo ruz, hag an taol a zo glas.',
    reference: 'Ar gador a zo ruz, hag an daol a zo glas.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_BR: ScenarioSeed[] = [
  {
    id: 'br-s1',
    title: 'En ur gafedi e Roazhon',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Mona, ur gomprenez en ur gafedi e Roazhon (Rennes)',
    description: 'Mona trabalha num café em Rennes e pergunta o que você quer beber. É uma conversa informal: use “te”.',
    turns: [
      {
        bot: 'Demat! Ur banne dour pe ur banne kafe?',
        botTranslation: 'Oi! Um copo de água ou um café?',
        keywords: ['dour', 'kafe'],
        suggestions: ['Ur banne kafe, mar plij.', 'Ur banne dour, mar plij.'],
      },
      {
        bot: "Ha c'hwi, piv oc'h?",
        botTranslation: 'E você, quem é?',
        keywords: ['on', 'anv'],
        suggestions: ['Mona on.', 'Mona eo va anv.'],
      },
    ],
  },
];

/** Palavras do bretão com a etimologia e os parentes nas línguas célticas, ou a falta deles com o português. */
export const ETYMOLOGY_BR: EtymologySeed[] = [
  {
    word: 'gwin',
    root_word: 'vīnum',
    origin_language: 'Latim (via proto-britônico *gwin, do proto-celta *wīnom)',
    cognates: c(['pt', 'vinho'], ['cy', 'gwin'], ['kw', 'gwin'], ['fr', 'vin']),
    evolution_note:
      'O bretão “gwin” veio do mesmo latim “vīnum” que deu o português “vinho”, mas por um caminho bem mais longo: primeiro emprestado para o proto-celta como “*wīnom”, depois para o proto-britônico “*gwin”, de onde vêm também o galês e o córnico “gwin”. Ou seja: bretão e português são parentes bem distantes (indo-europeus), mas “gwin” e “vinho” se parecem porque os celtas da Britânia pegaram a palavra emprestada do latim, não porque bretão e português sejam línguas próximas.',
    transparent: true,
  },
  {
    word: 'kador',
    root_word: 'cathedra',
    origin_language: 'Latim (via grego antigo καθέδρα, kathédra, “cadeira de professor, trono”)',
    cognates: c(['pt', 'cadeira'], ['cy', 'cadair'], ['fr', 'chaire']),
    evolution_note:
      'Do grego antigo “kathédra” o latim fez “cathedra”, que o proto-britônico pegou emprestado como “*kadėr” e virou “kador” em bretão (com mutação suave: “ar gador”, a cadeira). O português “cadeira” também vem dessa mesma raiz greco-latina — possivelmente com uma mistura de uma palavra celta antiga pelo caminho, segundo o Wikcionário em português. Duas línguas bem diferentes, uma única palavra de origem compartilhada.',
    transparent: true,
  },
  {
    word: 'ti',
    root_word: '*tegos',
    origin_language: 'Proto-celta',
    cognates: c(['cy', 'tŷ']),
    evolution_note:
      '“Ti” (casa) vem direto do proto-celta “*tegos”, passando pelo proto-britônico “*tɨɣ” — uma palavra celta nativa, sem relação com o latim nem com o português “casa”. É um bom lembrete de que o bretão, mesmo falado na França há mais de mil anos, continua sendo uma língua celta por baixo, não uma prima do francês ou do português.',
    transparent: false,
  },
  {
    word: 'mor',
    root_word: '*mori',
    origin_language: 'Proto-celta (do proto-indo-europeu *móri)',
    cognates: c(['cy', 'môr']),
    evolution_note:
      '“Mor” (mar) vem do proto-celta “*mori”, parente do galês “môr”. O Wiktionary em inglês não registra uma ligação direta com o latim “mare” (de onde vem o português “mar”) na entrada consultada — por mais que as duas palavras pareçam aparentadas à primeira vista, essa pesquisa não encontrou uma fonte que confirme o parentesco com segurança, então o honesto aqui é não afirmar o que não foi verificado.',
    transparent: false,
  },
  {
    word: 'aval',
    root_word: '*h₂ébōl',
    origin_language: 'Proto-indo-europeu (via proto-britônico *aβal)',
    cognates: c(['cy', 'afal'], ['en', 'apple']),
    evolution_note:
      '“Aval” (maçã) remonta à mesma raiz indo-europeia que deu o inglês “apple” e o galês “afal” — mas o português “maçã” vem de outra raiz (o latim “mattiana”), então aqui o parentesco com o inglês é bem mais visível do que com o português, mesmo as três línguas sendo indo-europeias.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_BR: [string, string][] = [
  ['Petra eo da anv?', 'Qual é o seu nome?'],
  ['Mat an traoù ganit?', 'Como você está?'],
  ['Bras pe bihan eo an ti?', 'A casa é grande ou pequena?'],
  ["Pelec'h emañ ar c'hi?", 'Onde está o cachorro?'],
];

export const SHADOWING_BR: [string, string][] = [
  ['Demat! Mat an traoù?', 'Oi! Tudo bem?'],
  ['Ya, mat-tre. Ha ganit?', 'Sim, muito bem. E você?'],
  ['Trugarez, ha kenavo!', 'Obrigado, e tchau!'],
  ["Ar c'hi zo o kousket amañ.", 'O cachorro está dormindo aqui.'],
];
