import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo mundurukú). */
export const COMMUNITY_MYU: CommunitySeed[] = [
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'Wuykabia!',
    content: 'Wuykat!',
    reference: 'Wuykabia!',
  },
  {
    author_name: 'Thiago 🇧🇷',
    prompt: 'Contar a um visitante: “nós (eu e minha família, sem você)”.',
    content: 'Wuyju.',
    reference: 'Oceju.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Dizer “meu pai” (como em “oxi”, minha mãe).',
    content: 'Obay.',
    reference: 'Webay.',
  },
];

/**
 * Cenário de conversa. As fontes (Crofts 1973, Gomes 2006) não registram um pronome ou tratamento
 * “formal” separado: “ẽn” serve para qualquer pessoa. A cortesia aparece em partículas, como o
 * imperativo educado “juy/cuy” (Gomes 2006, §4.5 g: ordem “de caráter polido, educado, dando
 * margem, inclusive, a uma recusa”). Por isso o cenário é informal, como nos outros pacotes de língua indígena. Falas:
 * Crofts §1.1.1-1.1.3 e item 190; Gomes ex. 83a, 80a e 14a-b.
 */
export const SCENARIOS_MYU: ScenarioSeed[] = [
  {
    id: 'myu-s1',
    title: 'Chegando a uma aldeia do rio Cururu',
    emoji: '🛶',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um professor munduruku de uma aldeia do rio Cururu, na Terra Indígena Munduruku (PA)',
    description:
      'As fontes consultadas não registram uma forma “formal” separada da informal no mundurukú: o mesmo “ẽn” (você) serve para qualquer pessoa. A gentileza vem de partículas, como “juy” ou “cuy”, que transformam uma ordem num pedido educado, que o outro pode até recusar.',
    turns: [
      {
        bot: 'Wuykabia!',
        botTranslation: 'Bom dia!',
        keywords: ['wuykabia'],
        suggestions: ['Wuykabia!'],
      },
      {
        bot: 'Abu ajẽm?',
        botTranslation: 'Quem está vindo?',
        keywords: ['õn', 'oajẽm', 'cuk'],
        suggestions: ['Õn cuk oajẽm.'],
      },
      {
        bot: 'Axima iku.',
        botTranslation: 'Peixe é gostoso.',
        keywords: ['ikuku', 'axima'],
        suggestions: ['Axima ikuku!'],
      },
      {
        bot: 'Xen puk õn.',
        botTranslation: 'Eu vou dormir.',
        keywords: ["ha'a", 'wuykat'],
        suggestions: ["Ha'a.", 'Wuykat!'],
      },
    ],
  },
];

/**
 * Etimologias. Fontes: ISA (Povo:Munduruku — o nome “Munduruku” vindo dos Parintintin, “formigas
 * vermelhas”; os clãs Tawé, Kabá, Saw…); Gomes 2006, §0.1 (autodenominação wuyjuyũ e a narrativa
 * “Mõnjoroko … oce=nopag̃o-yũ … o'e'e”, apelido dado pelos inimigos) e §4.1.2.1 (numerais: pũg̃
 * põg̃bi “um punho”; ebapũg̃ e ebadipdip com e “teus” + ba “braços”, que o autor dá como formação
 * “possível”); Picanço 2012 (kape “café”, basia'a “bacia”, rapi'ip “lápis”, empréstimos do
 * português); Crofts 1973, item 48 (ta³we² “macaco (prego)”). Sobre contar só até cinco: Pica,
 * Lemer, Izard e Dehaene, “Exact and approximate arithmetic in an Amazonian indigene group”,
 * Science 306 (2004), estudo feito com os Munduruku.
 */
export const ETYMOLOGY_MYU: EtymologySeed[] = [
  {
    word: 'Wuyjuyũ',
    root_word: 'wuyjuyũ (gente, povo, pessoas)',
    origin_language: 'Mundurukú',
    cognates: c(['pt', 'munduruku (nome dado de fora)']),
    evolution_note:
      '“Wuyjuyũ” — “gente” — é como o povo chama a si mesmo. “Munduruku” é um nome que veio de fora: segundo os mais velhos, era como os Parintintin, antigos inimigos, chamavam esses guerreiros, que atacavam em massa como “formigas vermelhas”. Uma narrativa registrada pelo linguista Dioney Gomes diz o mesmo: “Munduruku” é apelido dado pelos inimigos tradicionais.',
    transparent: false,
  },
  {
    word: 'Pũg̃ põg̃bi',
    root_word: 'pũg̃ (um) + põg̃bi (punho)',
    origin_language: 'Mundurukú',
    cognates: c(['myu', 'xepxep põg̃bi (dez, “dois punhos”)'], ['myu', 'ebadipdip põg̃bi (vinte, “quatro punhos”)']),
    evolution_note:
      'O “cinco” em mundurukú é literalmente “um punho” — a mão fechada, com os cinco dedos. Daí em diante se conta em punhos: “dez” é “dois punhos” e “vinte”, “quatro punhos”. Para números maiores, hoje se usa o português. Os Munduruku ficaram conhecidos na ciência por isso: um estudo de 2004 mostrou que, mesmo sem palavras para números exatos acima de cinco, eles comparam e somam quantidades grandes “a olho” tão bem quanto pessoas que aprenderam a contar na escola.',
    transparent: true,
  },
  {
    word: 'Ebadipdip',
    root_word: 'e (teus) + ba (braços) + dipdip (par, par)',
    origin_language: 'Mundurukú',
    cognates: c(['myu', 'ebapũg̃ (três: “teus braços” + “um”)'], ['myu', 'xepxep (dois)']),
    evolution_note:
      'Vários números do mundurukú parecem ser imagens do corpo. Uma explicação proposta é que “ebapũg̃” (três) junte “e” (teus), “ba” (braços) e “pũg̃” (um), e que “ebadipdip” (quatro) seja “teus braços, duas vezes”. A repetição de sílabas — “dipdip”, e também “xepxep”, dois — tem na língua justamente a função de multiplicar.',
    transparent: false,
  },
  {
    word: 'Kape',
    root_word: 'café (português)',
    origin_language: 'Português',
    cognates: c(['pt', 'café'], ['myu', "basia'a (bacia)"], ['myu', "rapi'ip (lápis)"]),
    evolution_note:
      '“Kape” veio do português “café”, adaptado aos sons da língua: o “f”, que o mundurukú não tem, virou “p”. Outros empréstimos do português passaram por mudanças parecidas, como “basia’a” (bacia) e “rapi’ip” (lápis) — repare no “l” que vira “r”.',
    transparent: true,
  },
  {
    word: 'Tawe',
    root_word: 'tawe (macaco-prego)',
    origin_language: 'Mundurukú',
    cognates: c(['myu', 'Tawé (um dos clãs da metade vermelha)']),
    evolution_note:
      'Os cerca de 38 clãs munduruku têm nomes de bichos, árvores e pássaros, e o macaco-prego, “tawe”, dá nome a um deles: o clã Tawé, da metade vermelha. O clã passa de pai para filho, e o casamento só se faz com alguém da metade oposta, a branca.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_MYU: [string, string][] = [
  ['Abu ajẽm?', 'Quem está vindo?'],
  ['Ajo kay ẽn?', 'O que é que você quer?'],
  ['Poce?', 'Onde?'],
  ['Apẽn?', 'Como?'],
];

export const SHADOWING_MYU: [string, string][] = [
  ['Wuykabia!', 'Bom dia!'],
  ['Õn cuk oajẽm.', 'Eu acabei de chegar.'],
  ['Axima ikuku.', 'Peixe é muito gostoso.'],
  ['Cum puk õn wũy be.', 'Eu já vou para o porto.'],
];
