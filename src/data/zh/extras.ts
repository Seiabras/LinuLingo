import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no chinês). */
export const COMMUNITY_ZH: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: '你家有几个人？',
    content: '我家有一只哥哥和一个猫。',
    reference: '我家有一个哥哥和一只猫。',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: '你的家大吗？',
    content: '我的家是很大。',
    reference: '我的家很大。',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: '你有妹妹吗？',
    content: '我不有妹妹。',
    reference: '我没有妹妹。',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_ZH: ScenarioSeed[] = [
  {
    id: 'zh-s1',
    title: '你喝什么？',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: '王明，同学',
    description: 'Wang Ming, um colega de escola, pergunta o que você quer comer e beber. É uma conversa informal entre colegas.',
    turns: [
      {
        bot: '你好！你喝什么？',
        botTranslation: 'Oi! O que você bebe? (nǐ hǎo! nǐ hē shénme?)',
        keywords: ['茶', '咖啡', '水'],
        suggestions: ['我喝茶。', '我喝咖啡。', '我喝水。'],
      },
      {
        bot: '你喜欢吃米饭还是面包？',
        botTranslation: 'Você gosta de comer arroz ou pão? (nǐ xǐhuan chī mǐfàn háishi miànbāo?)',
        keywords: ['喜欢', '米饭', '面包'],
        suggestions: ['我喜欢吃米饭。', '我喜欢吃面包。'],
      },
    ],
  },
];

/**
 * Palavras do chinês com a composição do caractere (radical + fonético ou radical + radical),
 * em vez de uma raiz latina — o chinês não é parente do português. Onde o japonês (ensinado no
 * app) usa o mesmo caractere, isso entra como «cognato» de escrita, mesmo com pronúncia diferente.
 */
export const ETYMOLOGY_ZH: EtymologySeed[] = [
  {
    word: '好',
    root_word: '女 (mulher) + 子 (criança)',
    origin_language: 'Composição chinesa (ideia + ideia)',
    cognates: c(['ja', '好 (いい/よい, ii/yoi, bom)']),
    evolution_note: 'Um dos exemplos mais conhecidos de composição no chinês: uma mulher ao lado de uma criança forma a ideia de “bom”. O japonês usa o mesmo caractere com o mesmo sentido.',
    transparent: true,
  },
  {
    word: '家',
    root_word: '宀 (teto) + 豕 (porco)',
    origin_language: 'Composição chinesa (ideia + ideia)',
    cognates: c(['ja', '家 (いえ/か, ie/ka, casa)']),
    evolution_note: 'Um teto sobre um porco: na China antiga, ter porcos embaixo de casa era sinal de um lar estabelecido. É um dos caracteres mais antigos documentados em ossos oraculares.',
    transparent: false,
  },
  {
    word: '妈妈',
    root_word: '女 (mulher, o sentido) + 马 (mǎ, cavalo, só o som)',
    origin_language: 'Composição chinesa (radical + fonético)',
    cognates: c(['ja', '母 (はは, haha, mãe — mesma ideia, caractere diferente)']),
    evolution_note: '马 (mǎ) não tem nada a ver com cavalo aqui: foi escolhido só porque soa parecido com “mā”. A maioria dos caracteres do chinês funciona assim, misturando uma pista de sentido com uma pista de som.',
    transparent: false,
  },
  {
    word: '猫',
    root_word: '豸 (bicho) + 苗 (miáo, broto, só o som)',
    origin_language: 'Composição chinesa (radical + fonético)',
    cognates: c(['ja', '猫 (ねこ, neko, gato — mesmo caractere)']),
    evolution_note: 'O radical 豸 marca animais de corpo alongado; 苗 (miáo) entra só pelo som, parecido com “māo”. O japonês importou o mesmo caractere para escrever “neko”.',
    transparent: false,
  },
  {
    word: '说',
    root_word: '讠 (fala, forma simplificada de 言) + 兑 (duì, só o som)',
    origin_language: 'Composição chinesa (radical + fonético)',
    cognates: c(['ja', '説く (とく, toku, explicar — mesma raiz escrita, 言+兌)']),
    evolution_note: 'O radical da fala (讠) aparece em muitos verbos de comunicação; 兑 dá só a pista sonora de “shuō”. A forma tradicional, 說, ainda usa 言 por inteiro.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_ZH: [string, string][] = [
  ['你今天怎么样？', 'Como você está hoje?'],
  ['说说你的家人。', 'Conte sobre a sua família.'],
  ['你喜欢吃什么，喜欢喝什么？', 'O que você gosta de comer e beber?'],
  ['你的家是什么样的？', 'Como é a sua casa?'],
];

export const SHADOWING_ZH: [string, string][] = [
  ['你好！我叫安娜。', 'Oi! Eu me chamo Ana.'],
  ['我很好，谢谢！你呢？', 'Eu vou bem, obrigado! E você?'],
  ['我家有一个哥哥和一个妹妹。', 'Na minha família tenho um irmão mais velho e uma irmã mais nova.'],
  ['我没有妹妹。', 'Eu não tenho irmã mais nova.'],
];
