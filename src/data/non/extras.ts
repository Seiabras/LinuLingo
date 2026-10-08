import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no nórdico antigo). */
export const COMMUNITY_NON: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Hvert er nafn þitt, ok hvaðan ert þú?',
    content: 'Nafn mitt er Brúni. Ek er frá Brasilíu.',
    reference: 'Nafn mitt er Brúni. Ek em frá Brasilíu.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Lýs húsi þínu.',
    content: 'Hús mín er lítil.',
    reference: 'Hús mitt er lítit.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Hvat drekkr þú á morgun?',
    content: 'Ek drekkr vatn.',
    reference: 'Ek drekk vatn.',
  },
];

/** Cenários de conversa. O nórdico antigo não tinha uma forma "formal" separada do þú. */
export const SCENARIOS_NON: ScenarioSeed[] = [
  {
    id: 'non-s1',
    title: 'No porto, com um mercador',
    emoji: '⚓',
    cefr: 'A1',
    register: 'informal',
    persona: 'Þórir, um mercador viking',
    description: 'Þórir te encontra no porto e começa a conversar. É informal: o nórdico antigo falava com "þú" com quase todo mundo, sem uma forma equivalente ao "você" formal do português.',
    turns: [
      {
        bot: 'Heill! Hvat vill þú drekka?',
        botTranslation: 'Salve! O que você quer beber?',
        keywords: ['vatn', 'vín', 'vilja'],
        suggestions: ['Vatn vil ek.', 'Vín vil ek.'],
      },
      {
        bot: 'Ok hvaðan ert þú?',
        botTranslation: 'E de onde você é?',
        keywords: ['hvaðan', 'em', 'frá'],
        suggestions: ['Ek em frá Brasilíu.', 'Ek em frá Nóregi.'],
      },
    ],
  },
];

/**
 * Palavras do nórdico antigo e os seus descendentes nas línguas escandinavas modernas que já
 * existem no app (sueco, norueguês, dinamarquês, islandês, feroês) — o nórdico antigo é ancestral
 * direto de todas elas, então a etimologia aqui aponta para a FRENTE, ao contrário dos outros
 * idiomas do app. Fontes: Zoëga (1910) para as formas em nórdico antigo; as formas modernas são
 * vocabulário básico bem atestado nos próprios dicionários de cada língua.
 */
export const ETYMOLOGY_NON: EtymologySeed[] = [
  {
    word: 'vatn',
    root_word: 'vatn',
    origin_language: 'Nórdico antigo',
    cognates: c(['sv', 'vatten'], ['nb', 'vann'], ['da', 'vand'], ['is', 'vatn'], ['fo', 'vatn']),
    evolution_note: 'O islandês e o feroês mantiveram "vatn" quase sem mudança — são as línguas escandinavas mais conservadoras. O sueco, o norueguês e o dinamarquês mudaram mais a grafia e a pronúncia ao longo dos séculos.',
    transparent: true,
  },
  {
    word: 'hús',
    root_word: 'hús',
    origin_language: 'Nórdico antigo',
    cognates: c(['sv', 'hus'], ['nb', 'hus'], ['da', 'hus'], ['is', 'hús'], ['fo', 'hús']),
    evolution_note: 'Uma das palavras germânicas mais estáveis: "hús" chegou quase idêntica a todas as cinco línguas escandinavas modernas, só perdendo o acento na maioria delas.',
    transparent: true,
  },
  {
    word: 'faðir',
    root_word: 'faðir',
    origin_language: 'Nórdico antigo',
    cognates: c(['sv', 'far/fader'], ['nb', 'far'], ['da', 'far/fader'], ['is', 'faðir'], ['fo', 'faðir']),
    evolution_note: 'O islandês e o feroês preservaram "faðir" quase sem mudança; já o sueco, o norueguês e o dinamarquês desenvolveram a forma curta "far" no dia a dia, guardando "fader" só para contextos mais formais ou escritos.',
    transparent: false,
  },
  {
    word: 'móðir',
    root_word: 'móðir',
    origin_language: 'Nórdico antigo',
    cognates: c(['sv', 'mor/moder'], ['nb', 'mor'], ['da', 'mor/moder'], ['is', 'móðir'], ['fo', 'móðir']),
    evolution_note: 'O mesmo padrão de "faðir": islandês e feroês guardaram "móðir" quase idêntica, enquanto sueco, norueguês e dinamarquês encurtaram para "mor" no uso diário.',
    transparent: false,
  },
  {
    word: 'konungr',
    root_word: 'konungr',
    origin_language: 'Nórdico antigo',
    cognates: c(['sv', 'kung'], ['nb', 'konge'], ['da', 'konge'], ['is', 'konungur'], ['fo', 'kongur']),
    evolution_note: 'O islandês quase não mudou a palavra ("konungur"); o feroês e as línguas nórdico-orientais (norueguês, dinamarquês) encurtaram para "konge"/"kongur", e o sueco foi mais longe ainda, até "kung".',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_NON: [string, string][] = [
  ['Hvé heitir þú?', 'Como você se chama?'],
  ['Hvat vilt þú eta í dag?', 'O que você quer comer hoje?'],
  ['Hvar er hús þitt?', 'Onde é a sua casa?'],
  ['Hvé er ætt þín?', 'Como é a sua família?'],
];

export const SHADOWING_NON: [string, string][] = [
  ['Heill! Ek heiti Auðr, ok ek em frá Íslandi.', 'Oi! Eu me chamo Auðr, e eu sou da Islândia.'],
  ['Þökk fyrir, ok far vel!', 'Obrigado, e tchau!'],
  ['Ek á bróðir ok systir.', 'Eu tenho irmão e irmã.'],
  ['Vatnit er kalt, en vínit er gott.', 'A água está fria, mas o vinho é bom.'],
];
