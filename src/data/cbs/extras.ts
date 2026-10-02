import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo huni kuĩ). */
export const COMMUNITY_CBS: CommunitySeed[] = [
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Mĩ huni kuin?',
    content: 'Huni kuin.',
    reference: 'Ɨ huni kuin.',
  },
  {
    author_name: 'Thiago 🇧🇷',
    prompt: 'Mĩ-ã hiwɨ hawɨ̃-rua?',
    content: 'Hiwɨ hawɨ̃-rua.',
    reference: 'Ɨ-ã hiwɨ hawɨ̃-rua.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Rabɨ, tsamĩ, kɨtaş…',
    content: 'Bɨsti, tsamĩ.',
    reference: 'Bɨsti, rabɨ, tsamĩ, kɨtaş…',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não registram uma forma “formal” de tratamento separada
 * da informal no huni kuĩ (como o “você”/“o senhor” do português) — por isso o cenário é informal, como
 * já acontece com o baniwa, o tukano, o kaingang e o xavante neste app.
 */
export const SCENARIOS_CBS: ScenarioSeed[] = [
  {
    id: 'cbs-s1',
    title: 'Chegando numa aldeia do rio Jordão',
    emoji: '🏞️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de uma aldeia huni kuĩ à beira do rio Jordão, no Acre',
    description:
      'As fontes consultadas não documentam uma forma “formal” separada da informal no huni kuĩ: os mesmos pronomes servem para qualquer pessoa, e “txai” funciona como cumprimento amistoso tanto para conhecidos quanto para visitantes.',
    turns: [
      {
        bot: 'Txai! Mĩ huni kuin?',
        botTranslation: 'Parceiro! Você é huni kuin?',
        keywords: ['ɨ', 'huni kuin'],
        suggestions: ['Txai! Ɨ huni kuin.'],
      },
      {
        bot: 'Mi-ã hiwɨ hawɨ̃-rua?',
        botTranslation: 'Sua casa é bonita?',
        keywords: ['ɨ-ã', 'hiwɨ', 'hawɨ̃-rua'],
        suggestions: ['Ɨ-ã hiwɨ hawɨ̃-rua.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras huni kuĩ. A língua NÃO é parente do português nem do tupi-guarani, do jê, do
 * aruak ou do tukano: por isso, como nos outros pacotes de língua indígena deste app, as notas explicam
 * a formação interna/o campo semântico das palavras dentro do próprio huni kuĩ, não cognatos de origem
 * com o português.
 */
export const ETYMOLOGY_CBS: EtymologySeed[] = [
  {
    word: 'Huni',
    root_word: 'huni + kuin',
    origin_language: 'Huni kuĩ',
    cognates: c(['cbs', 'kuin (verdadeiro, real)'], ['cbs', 'kaxinawá (exônimo pejorativo, não usado pelo povo)']),
    evolution_note:
      '“Huni” (pessoa, homem) se combina com “kuin” (verdadeiro, real) para formar “huni kuin”, a autodesignação do povo — “gente de verdade” ou “gente com costumes conhecidos” (fonte: pt.wikipedia.org/wiki/Huni_Kuin). O nome “kaxinawá”, ainda muito usado em registros oficiais e acadêmicos (inclusive no próprio código ISO 639-3 da língua, “cbs”, de “Cashinahua”), é na verdade um EXÔNIMO de origem pejorativa: significa literalmente “povo morcego”, “povo canibal” ou “povo que anda à noite”, e não é como o povo se chama.',
    transparent: false,
  },
  {
    word: 'Txai',
    root_word: 'txai',
    origin_language: 'Huni kuĩ',
    cognates: c(['cbs', 'huni kuin (gente verdadeira)']),
    evolution_note:
      '“Txai” nomeia uma relação de parentesco cruzado (como cunhado ou primo cruzado) e, por extensão, passou a ser usado como forma de tratamento amistosa entre parceiros e aliados. A palavra ficou nacionalmente conhecida a partir do convívio do seringueiro e sindicalista Chico Mendes com o povo huni kuĩ, e nomeou o álbum “Txai” (1990), de Milton Nascimento, feito em homenagem a ele — o encarte do disco traduz o título como algo como “camarada”, em huni kuĩ (fonte: en.wikipedia.org/wiki/Txai).',
    transparent: false,
  },
  {
    word: 'Mukaia',
    root_word: 'muka + -ia',
    origin_language: 'Huni kuĩ',
    cognates: c(['cbs', 'muka (poder xamânico, força invisível)']),
    evolution_note:
      '“Mukaia” nomeia o pajé/xamã — a pessoa que detém e maneja o “muka”, o poder xamânico. As duas palavras aparecem juntas na mesma descrição do xamanismo huni kuĩ: o xamã (mukaia) acessa o muka por meio de rituais, sonhos, rapé (dume) e da bebida ritual nixi pae (fonte: pt.wikipedia.org/wiki/Huni_Kuin).',
    transparent: false,
  },
  {
    word: 'Dau',
    root_word: 'dau',
    origin_language: 'Huni kuĩ',
    cognates: c(['cbs', 'dau bata (remédios doces)'], ['cbs', 'dau muka (remédios amargos)']),
    evolution_note:
      '“Dau” (remédio) se divide, na classificação huni kuĩ, em dois tipos: os “remédios doces” (dau bata) — folhas da mata, certas secreções e animais — e os “remédios amargos” (dau muka) — os poderes invisíveis dos próprios espíritos (fonte: pt.wikipedia.org/wiki/Huni_Kuin). Repare que “muka” aparece aqui com o mesmo nome do poder xamânico (ver a entrada “Mukaia” acima) — a mesma palavra nomeando tanto a força quanto o tipo de remédio ligado a ela.',
    transparent: false,
  },
  {
    word: 'Nixi pae',
    root_word: 'nixi + pae',
    origin_language: 'Huni kuĩ',
    cognates: c(['cbs', 'dume (tabaco/rapé, também usado em rituais xamânicos)']),
    evolution_note:
      '“Nixi pae” nomeia a bebida ritual que o restante do mundo costuma chamar pelo nome quéchua “ayahuasca” — descrita como uma “bebida enteógena utilizada ritualisticamente” (fonte: pt.wikipedia.org/wiki/Huni_Kuin). É em torno do preparo e do consumo ritual do nixi pae que se entoam boa parte dos cantos pelos quais o povo huni kuĩ é internacionalmente conhecido.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_CBS: [string, string][] = [
  ['Mĩ huni kuin?', 'Você é huni kuin (gente verdadeira)?'],
  ['Na mani pi wɨ.', 'Coma esta banana.'],
  ['Ɨ-ã hiwɨ hawɨ̃-rua.', 'Minha casa é bonita.'],
  ['Bɨsti, rabɨ, tsamĩ, kɨtaş, mɨtsã…', 'Um, dois, três, quatro, cinco…'],
];

export const SHADOWING_CBS: [string, string][] = [
  ['Na mani pi wɨ.', 'Coma esta banana.'],
  ['Ɨ-ã hiwɨ hawɨ̃-rua.', 'Minha casa é bonita.'],
  ['Ɨ̃ tʃara rã tʃiʃtɨ ki.', 'Minha flecha é curta.'],
  ['Txai!', 'Parceiro!, amigo! (forma de tratamento)'],
];
