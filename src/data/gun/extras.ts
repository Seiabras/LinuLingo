import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo mbyá). */
export const COMMUNITY_GUN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Aguyjevete!',
    content: 'Aguyjevete! Xee kunha. Hae xamoi.',
    reference: 'Aguyjevete! Xee kunha. Ha\'e xamoi.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kova\'e tekoa?',
    content: 'Kova\'e guaxu tekoa.',
    reference: 'Kova\'e tekoa guaxu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Mitã ha\'e xamoi.',
    content: 'Nhande reko: xee ha\'e xaryi.',
    reference: 'Ore reko: xee ha\'e xaryi.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_GUN: ScenarioSeed[] = [
  {
    id: 'gun-s1',
    title: 'Kova\'e tekoa: caminhada pela aldeia',
    emoji: '🏘️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Werá, um jovem xondaro (guardião) que mostra a tekoa a quem chega',
    description:
      'Werá acompanha visitantes pela aldeia. Nas fontes consultadas não há registro de um pronome formal separado no guarani mbyá: a conversa usa sempre “xee”/“ndee”, para qualquer pessoa.',
    turns: [
      {
        bot: 'Aguyjevete! Kova\'e tekoa.',
        botTranslation: 'Bem-vindo! Esta é a aldeia.',
        keywords: ['aguyjevete', 'porã'],
        suggestions: ['Aguyjevete! Tekoa porã.', 'Aguyjevete!'],
      },
      {
        bot: 'Kova\'e opy\'i, kova\'e petyngua.',
        botTranslation: 'Esta é a casa de reza, este é o cachimbo sagrado.',
        keywords: ['porã', 'opy\'i', 'petyngua'],
        suggestions: ['Opy\'i porã.', 'Petyngua porã.'],
      },
    ],
  },
];

/**
 * Palavras do guarani mbyá com raiz tupi-guarani compartilhada com o português (quase sempre por
 * meio do tupi antigo, não por empréstimo direto) ou, no caso de «ovexa», emprestada diretamente do
 * português depois da colonização. Etimologias conferidas uma a uma no Wiktionary em inglês
 * (categoria «Mbya Guarani»), que reconstrói a raiz protupi-guarani de cada entrada.
 */
export const ETYMOLOGY_GUN: EtymologySeed[] = [
  {
    word: 'jagua',
    root_word: '*jawar',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jaguar (via tupi antigo îagûara)'], ['gn', 'jagua']),
    evolution_note:
      'A raiz tupi-guarani “*jawar” deu tanto o guarani mbyá “jagua” (hoje “cachorro”; o sentido antigo de “onça” só sobrevive em expressões fixas) quanto o tupi antigo “îagûara”, de onde veio o português “jaguar”. O guarani paraguaio tem a mesma palavra, “jagua”, também para “cachorro” — as três são primas pela mesma raiz, nenhuma copiada da outra.',
    transparent: false,
  },
  {
    word: 'jakare',
    root_word: '*jakare',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jacaré']),
    evolution_note:
      'O guarani mbyá “jakare” vem direto da raiz tupi-guarani “*jakare”, a mesma que, pelo tupi antigo “îakaré”, deu o português “jacaré”. A palavra portuguesa e a mbyá são primas vindas da mesma raiz — não uma emprestada da outra.',
    transparent: true,
  },
  {
    word: 'guyra',
    root_word: '*wɨra',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'guyra'], ['tpw', 'gûyrá']),
    evolution_note:
      'A raiz tupi-guarani “*wɨra” (pássaro) aparece no tupi antigo como “gûyrá” e, no guarani mbyá, como “guyra”. Diferente de “jacaré” ou “jaguar”, essa raiz não entrou no vocabulário geral do português, por isso não é uma palavra transparente para quem só fala português.',
    transparent: false,
  },
  {
    word: 'kuaray',
    root_word: '*kʷarat͡ʃɨ',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'kuarahy'], ['tpw', 'kûarasy']),
    evolution_note:
      'A mesma raiz tupi-guarani do sol deu o tupi antigo “kûarasy” e o guarani paraguaio “kuarahy”; no guarani mbyá, a forma é “kuaray”, sem o “h” final. É um bom exemplo de como uma raiz comum muda de som em cada língua da família tupi-guarani, sem que nenhuma copie a outra.',
    transparent: false,
  },
  {
    word: 'ovexa',
    root_word: 'ovelha',
    origin_language: 'Português',
    cognates: c(['pt', 'ovelha']),
    evolution_note:
      'Ao contrário das outras palavras desta lista, “ovexa” não vem de uma raiz tupi-guarani: foi emprestada do português “ovelha”, provavelmente porque esses animais só chegaram à América com a colonização europeia. É um empréstimo recente, na direção oposta aos empréstimos antigos do tupi para o português (como em “jacaré”).',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_GUN: [string, string][] = [
  ['Xee reko.', 'Escreva sobre você: quem você é, como é o seu dia a dia.'],
  ['Nhande reko ha\'e ore reko.', 'Escreva sobre as pessoas da sua vida: quem você inclui e quem não inclui em cada “nós”.'],
  ['Tekoa porã.', 'Descreva um lugar que você considera bonito, como uma aldeia (tekoa) ou a sua casa.'],
  ['Yva, kuaray, jaxy.', 'Escreva sobre o céu, o sol e a lua: o que você vê quando olha para cima.'],
];

export const SHADOWING_GUN: [string, string][] = [
  ['Aguyjevete!', 'Bem-vindo(a)! / Muito obrigado(a)!'],
  ['Xee kunha, ha\'e xamoi.', 'Eu sou mulher, e ele é o ancião.'],
  ['Kova\'e tekoa porã.', 'Esta aldeia é bonita.'],
  ['Mokoĩ ava, irundy mitã.', 'Dois homens, quatro crianças.'],
];
