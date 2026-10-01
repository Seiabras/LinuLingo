import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo kaiowá). */
export const COMMUNITY_KGK: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Aguyjevete!',
    content: 'Aguyjevete! Xe ava. Hae karai.',
    reference: 'Aguyjevete! Xe ava. Ha\'e karai.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ko tekoha?',
    content: 'Guasu ko tekoha.',
    reference: 'Ko tekoha guasu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Mitã ha\'e ne.',
    content: 'Nhãne reko: xe ha\'e jari.',
    reference: 'Ore reko: xe ha\'e jari.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_KGK: ScenarioSeed[] = [
  {
    id: 'kgk-s1',
    title: 'Ko tekoha: caminhada pela aldeia',
    emoji: '🏘️',
    cefr: 'A1',
    register: 'informal',
    persona: 'um tamõi (avô, líder espiritual) que recebe visitantes na tekoha',
    description:
      'O tamõi acompanha visitantes pela aldeia. Nas fontes consultadas não há registro de um pronome formal separado no kaiowá: a conversa usa sempre “xe”/“ne”, para qualquer pessoa.',
    turns: [
      {
        bot: 'Aguyjevete! Ko tekoha.',
        botTranslation: 'Muito obrigado! Esta é a aldeia.',
        keywords: ['aguyjevete', 'porã'],
        suggestions: ['Aguyjevete! Tekoha porã.', 'Aguyjevete!'],
      },
      {
        bot: 'Ko óga, ko mbaraka.',
        botTranslation: 'Esta é a casa, este é o chocalho sagrado.',
        keywords: ['porã', 'óga', 'mbaraka'],
        suggestions: ['Óga porã.', 'Mbaraka porã.'],
      },
    ],
  },
];

/**
 * Palavras do kaiowá com raiz tupi-guarani compartilhada com o português (por meio do tupi antigo
 * colonial, não por empréstimo direto) ou, no caso de «mbaraka», emprestada do guarani para o
 * português. Etimologias conferidas uma a uma em pt.wikipedia.org/wiki/Língua_caiouá (seção
 * Etimologia, sobre «kaiowá» e «jaguarete») e por comparação direta com as formas já publicadas nos
 * pacotes gn (guarani paraguaio) e gun (guarani mbyá) deste próprio app, lidas nos arquivos-fonte
 * para garantir que a comparação é exata, não aproximada.
 */
export const ETYMOLOGY_KGK: EtymologySeed[] = [
  {
    word: 'jaguarete',
    root_word: '*jawar + ete',
    origin_language: 'Protupi-guarani',
    cognates: c(['pt', 'jaguar (via tupi antigo îagûara)'], ['gn', 'jaguarete (onça-pintada, mesma palavra)'], ['gun', 'jagua (cachorro; raiz mais curta, sem o intensificador “-ete”)']),
    evolution_note:
      'A raiz tupi-guarani “*jawar” (de onde também veio, pelo tupi antigo “îagûara”, o português “jaguar”) ganha no kaiowá o sufixo intensificador “-ete” (“de verdade, real”): “jaguarete” é literalmente “cachorro de verdade feroz”, isto é, onça. O guarani paraguaio (pacote “gn”) tem a mesma palavra “jaguarete” para “onça-pintada” — aqui não há aproximação por parecença: é a mesma forma, nos dois idiomas, checada diretamente no arquivo de vocabulário do pacote “gn”. Já o guarani mbyá (pacote “gun”) ficou só com a raiz curta “jagua”, hoje usada para “cachorro”.',
    transparent: true,
  },
  {
    word: 'mbaraka',
    root_word: 'mbaraka',
    origin_language: 'Tupi-guarani',
    cognates: c(['pt', 'maraca']),
    evolution_note:
      'O chocalho sagrado usado nos cantos-reza kaiowá e guarani deu, por empréstimo antigo, a palavra portuguesa “maraca” — na direção oposta dos empréstimos mais comuns nesta lista (do tupi antigo para o português através da colonização, mas aqui preservando quase o som original “mbaraka”).',
    transparent: true,
  },
  {
    word: 'kwarahy',
    root_word: '*kʷarat͡ʃɨ',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'kuarahy (quase idêntico, só muda “kw” por “ku”)'], ['gun', 'kuaray (sem o “h” final)']),
    evolution_note:
      'A mesma raiz tupi-guarani do sol aparece quase igual no guarani paraguaio (“kuarahy”, checado no arquivo do pacote “gn”) — kaiowá e guarani paraguaio pertencem ao mesmo subgrupo I da família tupi-guarani, por isso a semelhança aqui é mais forte que com o mbyá, que perdeu o “h” final (“kuaray”, pacote “gun”).',
    transparent: false,
  },
  {
    word: 'guyra',
    root_word: '*wɨra',
    origin_language: 'Protupi-guarani',
    cognates: c(['gn', 'guyra (mesma palavra, checada no pacote “gn”)'], ['gun', 'guyra (mesma palavra, checada no pacote “gun”)']),
    evolution_note:
      'A raiz tupi-guarani de “pássaro” chegou idêntica ao kaiowá, ao guarani paraguaio e ao guarani mbyá: “guyra” nos três. Essa raiz não entrou no vocabulário geral do português, por isso não é uma palavra transparente para quem só fala português.',
    transparent: false,
  },
  {
    word: 'ywy',
    root_word: '*ɨβɨ',
    origin_language: 'Protupi-guarani',
    cognates: c(['gun', 'ywy (mesma palavra, checada no pacote “gun”)']),
    evolution_note:
      'A raiz tupi-guarani de “terra” também chegou idêntica ao guarani mbyá (“ywy”, pacote “gun”). É uma das palavras mais básicas e estáveis da família tupi-guarani, por isso mudou pouco entre as línguas do mesmo tronco.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KGK: [string, string][] = [
  ['Xe reko.', 'Escreva sobre você: quem você é, o seu jeito de ser.'],
  ['Nhãne reko ha\'e ore reko.', 'Escreva sobre as pessoas da sua vida: quem você inclui e quem não inclui em cada “nós”.'],
  ['Óga porã.', 'Descreva uma casa ou um lugar que você considera bom/bonito.'],
  ['Ára, kwarahy, jasy.', 'Escreva sobre o céu, o sol e a lua: o que você vê quando olha para cima.'],
];

export const SHADOWING_KGK: [string, string][] = [
  ['Aguyjevete!', 'Muito obrigado(a)!'],
  ['Xe ava, ha\'e karai.', 'Eu sou uma pessoa, e ele é um não indígena.'],
  ['Ko tekoha porã.', 'Esta aldeia é boa/bonita.'],
  ['Mokõi jaguarete, irundy guyra.', 'Duas onças, quatro pássaros.'],
];
