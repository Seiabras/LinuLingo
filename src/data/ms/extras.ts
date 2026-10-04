import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção. Os erros escolhidos são os que as fontes mostram como
 * armadilhas reais (ver vocabulario.ts e gramatica.ts):
 * - a ordem possuidor/adjetivo DEPOIS do substantivo (Wikivoyage: «kereta saya», «rumah kami»;
 *   «Ini buku» × «buku ini») — o brasileiro tende a pôr «saya nama», «merah kereta»;
 * - palavras do indonésio no lugar das da Malásia: o Kamus Dewan (PRPM) marca «kantor» e «sore» com
 *   «Id» (indonésio) e remete a «pejabat» e «petang»; o Wiktionary dá «mobil» como sinônimo da
 *   Indonésia para «kereta» e «delapan» como forma «now chiefly Indonesia» de «lapan»;
 * - a grafia «Brazil» do malaio (Wiktionary, verbete Malay «Brazil»), diferente do «Brasil» do
 *   indonésio e do português.
 */
export const COMMUNITY_MS: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Nama, keluarga dan rumah awak.',
    content: 'Hai! Saya nama Bruno. Saya dari Brasil. Saya keluarga ada empat orang.',
    reference: 'Hai! Nama saya Bruno. Saya dari Brazil. Keluarga saya ada empat orang.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kereta dan keluarga awak.',
    content: 'Saya ada merah mobil. Bapa saya pergi ke kantor.',
    reference: 'Saya ada kereta merah. Bapa saya pergi ke pejabat.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kawan awak di Malaysia.',
    content: 'Selamat sore! Saya ada delapan kawan di Kuala Lumpur.',
    reference: 'Selamat petang! Saya ada lapan kawan di Kuala Lumpur.',
  },
];

/** Cenário de conversa (registro informal). Fontes das frases: ver vocabulario.ts. */
export const SCENARIOS_MS: ScenarioSeed[] = [
  {
    id: 'ms-s1',
    title: 'Kopi dengan kawan di Kuala Lumpur',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Aminah, colega do curso de malaio',
    description: 'Aminah chama você para uma kedai kopi perto do centro de Kuala Lumpur. É informal, entre colegas.',
    turns: [
      {
        bot: 'Hai! Awak mahu minum apa?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kopi', 'teh', 'air', 'susu'],
        suggestions: ['Saya mahu kopi.', 'Saya mahu teh, terima kasih.'],
      },
      {
        bot: 'Awak dari mana?',
        botTranslation: 'De onde você é?',
        keywords: ['saya dari', 'brazil'],
        suggestions: ['Saya dari Brazil.', 'Saya dari São Paulo, di Brazil.'],
      },
      {
        bot: 'Awak tinggal di mana?',
        botTranslation: 'Onde você mora?',
        keywords: ['tinggal', 'di'],
        suggestions: ['Saya tinggal di Kuala Lumpur.', 'Saya tinggal di São Paulo.'],
      },
    ],
  },
];

/**
 * Palavras do malaio que o português ajuda a reconhecer. Todas as etimologias vêm da seção «Malay»
 * do Wiktionary em inglês, conferida verbete por verbete: kereta «from Portuguese carreta»; sekolah
 * «from Portuguese escola» (o «h» final por analogia com «rumah»); meja «from Portuguese mesa»;
 * bendera «from Portuguese bandeira»; minggu «from Portuguese domingo», com o sentido de «semana» (o
 * domingo é «Ahad», do árabe). Que o indonésio usa «Minggu» para o domingo vem da seção «Indonesian»
 * do verbete «Minggu» e da tabela de cumprimentos e feriados de
 * en.wikipedia.org/wiki/Comparison_of_Indonesian_and_Standard_Malay. O Wikivoyage (Malay phrasebook)
 * também cita «sekolah» como empréstimo do português.
 */
export const ETYMOLOGY_MS: EtymologySeed[] = [
  {
    word: 'kereta',
    root_word: 'carreta (português)',
    origin_language: 'Português',
    cognates: c(['pt', 'carreta'], ['es', 'carreta'], ['tl', 'kareta']),
    evolution_note: 'A “carreta” dos portugueses virou “kereta” no malaio: carroça, carruagem e, hoje, sobretudo o carro. No indonésio, “kereta” sozinha virou o trem — por isso, na Indonésia, o carro é “mobil”.',
    transparent: true,
  },
  {
    word: 'sekolah',
    root_word: 'escola (português)',
    origin_language: 'Português',
    cognates: c(['pt', 'escola'], ['es', 'escuela']),
    evolution_note: 'Do português “escola” veio “sekolah”; o “h” do fim apareceu por analogia com palavras como “rumah” (casa).',
    transparent: true,
  },
  {
    word: 'meja',
    root_word: 'mesa (português)',
    origin_language: 'Português, do latim mensa',
    cognates: c(['pt', 'mesa'], ['es', 'mesa'], ['la', 'mensa']),
    evolution_note: 'A “mesa” do português chegou ao malaio como “meja”. A mesma palavra existe no indonésio.',
    transparent: true,
  },
  {
    word: 'bendera',
    root_word: 'bandeira (português)',
    origin_language: 'Português',
    cognates: c(['pt', 'bandeira'], ['es', 'bandera']),
    evolution_note: 'Da “bandeira” portuguesa veio “bendera”, a palavra para qualquer bandeira — inclusive a da Malásia, a “Bendera Malaysia”.',
    transparent: true,
  },
  {
    word: 'minggu',
    root_word: 'domingo (português), do latim dominicus',
    origin_language: 'Português',
    cognates: c(['pt', 'domingo'], ['es', 'domingo'], ['la', 'dominicus']),
    evolution_note: 'O “domingo” português, encurtado, virou “minggu”. Na Malásia a palavra passou a ser a semana inteira, e o domingo é “Ahad” (do árabe); no indonésio, “Minggu” também é o próprio domingo.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_MS: [string, string][] = [
  ['Apa khabar hari ini?', 'Como vai você hoje?'],
  ['Bagaimana keluarga awak?', 'Como é a sua família?'],
  ['Awak suka makan dan minum apa?', 'O que você gosta de comer e beber?'],
  ['Semalam awak pergi ke mana?', 'Aonde você foi ontem?'],
];

export const SHADOWING_MS: [string, string][] = [
  ['Hai! Nama saya Ana, dan saya dari Brazil.', 'Oi! Meu nome é Ana, e eu sou do Brasil.'],
  ['Khabar baik, terima kasih!', 'Tudo bem, obrigado!'],
  ['Saya ada seorang abang dan seorang kakak.', 'Eu tenho um irmão mais velho e uma irmã mais velha.'],
  ['Maaf, di mana tandas?', 'Com licença, onde fica o banheiro?'],
];
