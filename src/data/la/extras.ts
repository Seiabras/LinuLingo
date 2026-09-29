import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no latim). */
export const COMMUNITY_LA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Dic nomen tuum et unde es.',
    content: 'Nomen mihi es Brunus. Ex Roma es.',
    reference: 'Nomen mihi est Brunus. Ex Roma sum.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Describe domum tuam.',
    content: 'Domus mea est parvus, et unam felem habeo.',
    reference: 'Domus mea est parva, et unam felem habeo.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Quid bibis mane?',
    content: 'Ego bibis aquam mane.',
    reference: 'Ego bibo aquam mane.',
  },
];

/** Cenários de conversa. O latim clássico não tinha uma forma "formal" separada do tu. */
export const SCENARIOS_LA: ScenarioSeed[] = [
  {
    id: 'la-s1',
    title: 'No Foro com um amigo',
    emoji: '🏛️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Marcus, um amigo romano',
    description: 'Marcus te convida para conversar no Foro Romano. É informal: os romanos falavam de «tu» com quase todo mundo, sem uma forma equivalente ao "você" formal do português.',
    turns: [
      {
        bot: 'Salve! Quid vis bibere?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['aqua', 'vinum', 'volo'],
        suggestions: ['Aquam volo, quaeso.', 'Vinum volo.'],
      },
      {
        bot: 'Et unde es?',
        botTranslation: 'E de onde você é?',
        keywords: ['ex', 'sum'],
        suggestions: ['Ex Roma sum.', 'Ex Pompeiis sum.'],
      },
    ],
  },
];

/**
 * Palavras do latim e os seus descendentes nas línguas românicas. Diferente dos outros idiomas do
 * app, aqui a palavra-alvo já É a raiz: não existe uma etimologia "por trás" do latim, porque o latim
 * é o ponto de partida de quase todo o vocabulário português.
 */
export const ETYMOLOGY_LA: EtymologySeed[] = [
  {
    word: 'aqua',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['es', 'agua'], ['it', 'acqua'], ['fr', 'eau']),
    evolution_note: 'O latim «aqua» é a própria raiz: o português «água» vem quase sem mudanças, só trocando o grupo -qu- por -gu- e ganhando o acento gráfico.',
    transparent: true,
  },
  {
    word: 'familia',
    root_word: 'familia',
    origin_language: 'Latim',
    cognates: c(['pt', 'família'], ['es', 'familia'], ['it', 'famiglia'], ['fr', 'famille']),
    evolution_note: '«Familia» passou para o português como «família» quase sem mudança nenhuma — só ganhou o acento gráfico na primeira sílaba tônica.',
    transparent: true,
  },
  {
    word: 'pater',
    root_word: 'pater',
    origin_language: 'Latim',
    cognates: c(['pt', 'pai'], ['es', 'padre'], ['it', 'padre'], ['fr', 'père']),
    evolution_note: 'O português «pai» vem de «pater», mas perdeu o -t- entre vogais e depois toda a terminação -ter — um caminho bem mais curto do que o do espanhol e do italiano, que mantiveram o -d-/-t- (padre).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_LA: [string, string][] = [
  ['Quomodo vales hodie?', 'Como você está hoje?'],
  ['Dic aliquid de familia tua.', 'Diga algo sobre a sua família.'],
  ['Quid bibis et quid edis?', 'O que você bebe e o que você come?'],
  ['Quomodo est domus tua?', 'Como é a sua casa?'],
];

export const SHADOWING_LA: [string, string][] = [
  ['Salve! Nomen mihi est Iulia, et ex Roma sum.', 'Oi! Meu nome é Júlia, e sou de Roma.'],
  ['Bene valeo, gratias! Et tu?', 'Estou bem, obrigado! E você?'],
  ['Unum fratrem et unam sororem habeo.', 'Tenho um irmão e uma irmã.'],
  ['Vinum mihi valde placet.', 'Eu gosto muito de vinho.'],
];
