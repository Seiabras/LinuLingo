import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo nheengatu). */
export const COMMUNITY_YRL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Mayé taá indé era?',
    content: 'Ixé sou Bruno.',
    reference: 'Se era Bruno.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Indé reikú mamé?',
    content: 'Ixé uikú uka upé.',
    reference: 'Ixé aikú uka upé.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Mukũi mira-itá uikú igara upé: mayé taá?',
    content: 'Mukũi pirás uikú paraná upé.',
    reference: 'Mukũi pirá-itá uikú paraná upé.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_YRL: ScenarioSeed[] = [
  {
    id: 'yrl-s1',
    title: 'Pirá na feira de São Gabriel',
    emoji: '🐟',
    cefr: 'A1',
    register: 'informal',
    persona: 'Dona Raimunda vende pirá (peixe) na feira municipal de São Gabriel da Cachoeira, às margens do rio Negro',
    description:
      'A feira de São Gabriel da Cachoeira é um lugar onde se ouve nheengatu no dia a dia. A língua não marca um jeito “formal” de falar diferente do informal: a conversa usa sempre “indé”, para qualquer pessoa.',
    turns: [
      {
        bot: 'Puranga ara! Pirá puranga, pirá puranga!',
        botTranslation: 'Bom dia! Peixe bom, peixe bom!',
        keywords: ['pirá', 'aputari', 'mukũi'],
        suggestions: ['Puranga ara! Aputari mukũi pirá.', 'Aputari musapiri pirá, kwekatú.'],
      },
      {
        bot: 'Mukũi pirá-itá, kwekatú!',
        botTranslation: 'Dois peixes, obrigada!',
        keywords: ['kwekatú', 'puranga'],
        suggestions: ['Kwekatú reté! Puranga ara!', 'Puranga, kwekatú!'],
      },
    ],
  },
];

/**
 * Palavras do nheengatu com a raiz tupi-guarani, formação interna, ou empréstimo do português. Ao
 * contrário do tupi antigo — cujo vocabulário entrou maciçamente no português colonial (jacaré, tatu
 * e outras palavras de bicho vêm todas do tupi antigo) —, o nheengatu também importou muitas palavras
 * diretamente do português (como “manha” e “paya”), por ter se formado bem depois do contato: um
 * contraste real entre as duas línguas, explicado nas notas abaixo.
 */
export const ETYMOLOGY_YRL: EtymologySeed[] = [
  {
    word: 'yakaré',
    root_word: 'îakaré',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'jacaré']),
    evolution_note:
      '“Yakaré” é herdeira direta do tupi antigo “îakaré”, a mesma raiz que deu o português “jacaré” — não é um empréstimo do nheengatu, mas uma prima da palavra portuguesa, as duas descendentes do mesmo ancestral tupi.',
    transparent: true,
  },
  {
    word: 'tatú',
    root_word: 'tatu',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'tatu']),
    evolution_note:
      '“Tatú” vem direto do tupi antigo “tatu”, a mesma palavra que o português herdou sem quase mudar nada — um dos muitos nomes de bicho que a língua geral levou para o português colonial.',
    transparent: true,
  },
  {
    word: 'manha',
    root_word: 'mãe',
    origin_language: 'Português',
    cognates: c(['pt', 'mãe']),
    evolution_note:
      'Ao contrário da maioria das palavras indígenas que foram do tupi para o português, “manha” fez o caminho inverso: é um empréstimo do português “mãe”, adaptado à fonética do nheengatu com o sufixo nominalizador do tupi antigo, “-a”. A palavra nativa mais antiga para “mãe”, “sy” (a mesma do tupi antigo), ainda existe em nheengatu, mas é considerada arcaica — foi suplantada por “manha” no uso cotidiano.',
    transparent: true,
  },
  {
    word: 'kariwa',
    root_word: 'karaíba',
    origin_language: 'Tupi antigo',
    cognates: c(['pt', 'cariri, Caraíbas (arcaico)'], ['en', 'Caribbean (via caraíba/Caribe)']),
    evolution_note:
      '“Kariwa” (pessoa não indígena) vem do tupi antigo “karaíba”, que antes significava algo como “pessoa poderosa, pajé”. A mesma raiz tupi, levada pelos espanhóis para as ilhas do Caribe, está por trás do nome “Caribe”/“Caribbean” em várias línguas — um percurso bem diferente do sentido atual de “kariwa” no nheengatu.',
    transparent: false,
  },
  {
    word: 'nheengatú',
    root_word: 'nhe\'eng + katu',
    origin_language: 'Tupi antigo',
    cognates: c(['yrl', 'nheenga (palavra, língua)'], ['yrl', 'katú (bom)']),
    evolution_note:
      '“Nheengatú”, o nome que os próprios falantes dão à língua, é a soma de “nhe\'eng” (falar, do tupi antigo) com “katu” (bom): “a fala boa”. É a mesma lógica de formação de palavras vista em “avañe\'ẽ” no guarani (“ava” + “ñe\'ẽ”) — línguas primas que, cada uma à sua maneira, nomeiam a si mesmas a partir da palavra para “fala”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_YRL: [string, string][] = [
  ['Mayé taá indé resasá?', 'Como você está?'],
  ['Se manha uikú uka upé?', 'Sua mãe está em casa?'],
  ['Indé reikú paraná resé?', 'Você mora perto do rio?'],
  ['Yakaré uikú paraná upé?', 'Tem jacaré no rio (perto de você)?'],
];

export const SHADOWING_YRL: [string, string][] = [
  ['Puranga ara! Se era Linu.', 'Bom dia! Meu nome é Linu.'],
  ['Ixé mira. Ixé asasá puranga.', 'Eu sou gente. Eu vou bem.'],
  ['Indé puranga retana!', 'Você é muito bonito(a)!'],
  ['Kwekatú reté! Mayé taá indé resasá?', 'Muito obrigado(a)! Como você está?'],
];
