import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de quem começa o inupiaque). Gabaritos
 * pelas terminações do [WIKI] («Iñupiaq language») e frases do [OMNI] e do [WIKT].
 */
export const COMMUNITY_IK: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Dizer “estou bem”.', content: 'Nakuuruq.', reference: 'Nakuuruŋa.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Dizer “os peixes são bons de comer”.', content: 'Iqaluit niġiruni nakuuruq.', reference: 'Iqaluit niġiruni nakuurut.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Dizer “meu nome é Beatriz”.', content: 'Kinauvin Beatriz.', reference: 'Atiġa Beatriz.' },
];

/** Cenário de conversa, com as falas do [OMNI] e do [WIKT]. O inupiaque não tem um “você” formal à parte. */
export const SCENARIOS_IK: ScenarioSeed[] = [
  {
    id: 'ik-s1',
    title: 'Chegada a Utqiaġvik',
    emoji: '🛬',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de Utqiaġvik, no norte do Alasca, que recebe o Linu',
    description: 'O inupiaque não tem um pronome de respeito separado: o mesmo “ilviñ” (você) serve para qualquer pessoa.',
    turns: [
      { bot: 'Paġlagikpiñ! Qanuq itpich?', botTranslation: 'Bem-vindo! Como vai?', keywords: ['Nakuuruŋa', 'nakuuruna'], suggestions: ['Nakuuruŋa, quyanaq!'] },
      { bot: 'Kinauvin?', botTranslation: 'Qual é o seu nome? (quem é você?)', keywords: ['Atiġa', 'atiga'], suggestions: ['Atiġa Linu.'] },
      { bot: 'Suna pisukpiuŋ?', botTranslation: 'O que você quer?', keywords: ['Saiyu', 'Kuuppiaq', 'Maktak'], suggestions: ['Saiyu, quyanaq.'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKT] s.v. “qayaq” (kayak, skin-canoe), “iglu” (house), “maktak” (muktuk);
 * Wikipédia em inglês, «Kayak» e «Muktuk», e Wikcionário s.v. “muktuk” (consultados em 10/10/2026): o
 * inglês “kayak” vem das línguas inuítes, e “muktuk”, do “maktak” do inupiaque e do inuvialuktun;
 * [WIKI] «Iñupiaq language», Numerals: “tallimat” vem da palavra para mão, braço. Cognatos do
 * inuktitut e do groenlandês dos pacotes iu e kl.
 */
export const ETYMOLOGY_IK: EtymologySeed[] = [
  {
    word: 'qayaq',
    root_word: 'qayaq (o barco de caça de um lugar só)',
    origin_language: 'Inupiaque',
    cognates: c(['iu', 'ᖃᔭᖅ (qajaq)'], ['kl', 'qajaq'], ['en', 'kayak'], ['pt', 'caiaque']),
    evolution_note: 'O caiaque das línguas inuítes, feito de madeira coberta de pele, era o barco de caça de um homem só. A palavra passou para o inglês como “kayak” e de lá para o português, “caiaque”.',
    transparent: false,
  },
  {
    word: 'maktak',
    root_word: 'maktak (pele de baleia com a gordura)',
    origin_language: 'Inupiaque',
    cognates: c(['en', 'muktuk']),
    evolution_note: 'O inglês do Alasca e do Canadá chama de “muktuk” a pele da baleia com a gordura, palavra que veio do “maktak” das línguas inuítes. É comida de festa depois das caçadas de baleia.',
    transparent: false,
  },
  {
    word: 'tallimat',
    root_word: 'a palavra para mão, braço',
    origin_language: 'Inupiaque',
    cognates: c(['iu', 'ᑕᓪᓕᒪᑦ (tallimat)']),
    evolution_note: 'O cinco é “uma mão”: “tallimat” vem da palavra para mão, braço. Da mesma forma, “qulit” (dez) vem de “o de cima” — os dez dedos da parte de cima do corpo — e “iñuiññaq” (vinte) é “a pessoa inteira”, com os dedos das mãos e dos pés.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_IK: [string, string][] = [
  ['Qanuq itpich?', 'Como vai?'],
  ['Kinauvin?', 'Qual é o seu nome?'],
  ['Suna pisukpiuŋ?', 'O que você quer?'],
];

export const SHADOWING_IK: [string, string][] = [
  ['Nakuuruŋa, quyanaq.', 'Estou bem, obrigado.'],
  ['Igluga Utqiaġviŋmi ittuq.', 'Minha casa fica em Utqiaġvik.'],
  ['Maktak niġiruni nakuuruq.', 'O maktak é bom de comer.'],
  ['Uvluqatchiaq!', 'Tenha um bom dia!'],
];
