import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de quem começa o inuktitut). Gabaritos
 * pelas regras do [WIKI] («Inuit grammar») e frases do [OMNI].
 */
export const COMMUNITY_IU: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Dizer “eu como”.', content: 'ᓂᕆᔪᖅ.', reference: 'ᓂᕆᔪᖓ.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Dizer “duas casas”.', content: 'ᐃᒡᓗᑦ.', reference: 'ᐃᒡᓗᒃ.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Responder a “ᖁᔭᓐᓇᒦᒃ!”.', content: 'ᖁᔭᓐᓇᒦᒃ!', reference: 'ᐃᓛᓕ.' },
];

/** Cenário de conversa, com as falas do [OMNI]. O inuktitut não tem um “você” formal à parte. */
export const SCENARIOS_IU: ScenarioSeed[] = [
  {
    id: 'iu-s1',
    title: 'Chegada a Iqaluit',
    emoji: '🛬',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma moradora de Iqaluit, a capital de Nunavut, que recebe o Linu',
    description: 'O inuktitut não tem um pronome de respeito separado: o mesmo “ᐃᕝᕕᑦ” (você) serve para qualquer pessoa.',
    turns: [
      { bot: 'ᑐᙵᓱᒋᑦ! ᖃᓄᐃᑉᐱᑦ?', botTranslation: 'Bem-vindo! Como vai?', keywords: ['ᖃᓄᐃᙱᑦᑐᖓ', 'qanuinngittunga'], suggestions: ['ᖃᓄᐃᙱᑦᑐᖓ. ᖁᔭᓐᓇᒦᒃ!'] },
      { bot: 'ᑭᓇᐅᕕᑦ?', botTranslation: 'Qual é o seu nome? (quem é você?)', keywords: ['ᐅᕙᖓ', 'uvanga'], suggestions: ['ᐅᕙᖓ ᓕᓅᔪᖓ.'] },
      { bot: 'ᐊᑏ ᓂᕆᓕᖅᑕ!', botTranslation: 'Vamos comer!', keywords: ['ᐄ', 'ᖁᔭᓐᓇᒦᒃ'], suggestions: ['ᐄ! ᖁᔭᓐᓇᒦᒃ!'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKT] s.v. “ᖃᔭᖅ” (tabela de “kayak”), “ᐃᒡᓗ”, “ᓄᓇᕗᑦ” (our land), “ᓄᓇ”, “ᐊᓄᕆ”;
 * Wikipédia em inglês, «Kayak», «Igloo», «Nunavut» (consultadas em 10/10/2026): o inglês “kayak” vem do
 * inuíte “qajaq”, e “igloo”, de “iglu”, que em inuktitut é qualquer casa. Cognatos groenlandeses do
 * pacote kl (qajaq, illu, nuna).
 */
export const ETYMOLOGY_IU: EtymologySeed[] = [
  {
    word: 'ᖃᔭᖅ',
    root_word: 'qajaq (o barco de caça de um lugar só)',
    origin_language: 'Inuktitut',
    cognates: c(['kl', 'qajaq'], ['en', 'kayak'], ['pt', 'caiaque']),
    evolution_note: 'O caiaque inuíte, feito de madeira ou osso coberto de pele de foca, era o barco de caça de um homem só. A palavra “qajaq” passou para o inglês como “kayak” e de lá para o português, “caiaque”.',
    transparent: false,
  },
  {
    word: 'ᐃᒡᓗ',
    root_word: 'iglu (casa)',
    origin_language: 'Inuktitut',
    cognates: c(['kl', 'illu'], ['en', 'igloo'], ['pt', 'iglu']),
    evolution_note: 'Em inuktitut, “iglu” é qualquer casa — de madeira, de pedra ou de neve. As outras línguas pegaram a palavra só para a casa de neve, o iglu dos livros.',
    transparent: false,
  },
  {
    word: 'ᓄᓇᕗᑦ',
    root_word: 'nuna (terra) + -vut (nossa)',
    origin_language: 'Inuktitut',
    cognates: c(['kl', 'nuna'], ['iu', 'ᓄᓇ (nuna, terra)']),
    evolution_note: 'O nome do território criado em 1999 quer dizer “a nossa terra”: “nuna” (terra) com o final -vut (nosso, de nós). No groenlandês, a mesma raiz está em “Kalaallit Nunaat”, a terra dos groenlandeses.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_IU: [string, string][] = [
  ['ᖃᓄᐃᑉᐱᑦ?', 'Como vai?'],
  ['ᑭᓇᐅᕕᑦ?', 'Qual é o seu nome?'],
  ['ᐅᓇ ᖃᔅᓯᑦ?', 'Quanto custa isto?'],
];

export const SHADOWING_IU: [string, string][] = [
  ['ᖃᓄᐃᙱᑦᑐᖓ.', 'Estou bem.'],
  ['ᖁᔭᓐᓇᒦᒃ!', 'Obrigado!'],
  ['ᐊᑏ ᓂᕆᓕᖅᑕ!', 'Vamos comer!'],
  ['ᐅᓪᓗᖃᑦᓯᐊᕆᑦ!', 'Tenha um bom dia!'],
];
