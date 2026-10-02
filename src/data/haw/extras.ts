import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de quem aprende havaiano). */
export const COMMUNITY_HAW: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'ʻO wai kou inoa?',
    content: 'Maikaʻi au.',
    reference: 'ʻO Marina koʻu inoa.',
  },
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Pehea ʻoe?',
    content: 'ʻO Bruno koʻu inoa.',
    reference: 'Maikaʻi au, mahalo.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Makemake ʻoe i ke kalo?',
    content: 'ʻOno ke kalo.',
    reference: 'ʻAe, makemake au.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas (Wikipedia, Wiktionary, Omniglot) não registram, para o
 * havaiano, uma distinção gramatical clara de registro formal/informal como o "tu"/"você" do
 * português — por isso, como em outros pacotes pequenos deste app (nv, tpj), o cenário é informal.
 */
export const SCENARIOS_HAW: ScenarioSeed[] = [
  {
    id: 'haw-s1',
    title: 'Aloha na praia',
    emoji: '🌺',
    cefr: 'A1',
    register: 'informal',
    persona: 'Alguém que você acabou de conhecer numa praia do Havaí',
    description:
      'As fontes consultadas não documentam, no havaiano, uma forma “formal” separada da informal: o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Aloha! Pehea ʻoe?',
        botTranslation: 'Oi! Como você está?',
        keywords: ['maikaʻi', 'mahalo'],
        suggestions: ['Maikaʻi au, mahalo.', 'Maikaʻi au. A ʻo ʻoe?'],
      },
      {
        bot: 'ʻO wai kou inoa?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['koʻu inoa', 'ʻo'],
        suggestions: ['ʻO Kai koʻu inoa.', 'ʻO Leilani koʻu inoa.'],
      },
    ],
  },
  {
    id: 'haw-s2',
    title: 'Na hora da comida',
    emoji: '🥥',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um parente perguntando o que você quer comer e beber',
    description:
      'Como no cenário anterior, as fontes consultadas não registram uma forma “formal” separada da informal no havaiano.',
    turns: [
      {
        bot: 'Makemake au i ka poi. A ʻo ʻoe?',
        botTranslation: 'Eu quero/gosto de poi. E você?',
        keywords: ['makemake', 'kalo', 'poi'],
        suggestions: ['Makemake au i ke kalo.', 'Makemake au i ka poi.'],
      },
      {
        bot: 'Ke inu nei au i ka wai. Pehea ʻoe?',
        botTranslation: 'Eu estou bebendo água. E você?',
        keywords: ['inu', 'wai'],
        suggestions: ['Ke inu nei au i ka wai.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras havaianas. O havaiano é austronésio (ramo polinésio), sem nenhum parentesco
 * com o português (indo-europeu): por isso, ao contrário dos pacotes de línguas tupi-guarani deste
 * app, aqui NÃO há comparação com "línguas aparentadas já no app" — o parentesco mostrado é com outras
 * línguas polinésias (māori, samoano) e com o próprio inglês, que tomou emprestadas várias palavras
 * havaianas. Fontes: en.wiktionary.org (wikitexto da seção "==Hawaiian==", lido via `action=raw`),
 * en.wikipedia.org/wiki/Wiki e en.wikipedia.org/wiki/Luau.
 */
export const ETYMOLOGY_HAW: EtymologySeed[] = [
  {
    word: 'aloha',
    root_word: '*qarofa',
    origin_language: 'Proto-polinésio',
    cognates: c(['Māori', 'aroha (amor, compaixão)'], ['Samoano', 'alofa (amor)']),
    evolution_note:
      '“Aloha” vem do proto-polinésio “*qarofa” (por sua vez do proto-oceânico “*qalopan”), a mesma raiz do “aroha” māori e do “alofa” samoano — todos ligados a ideias de amor e compaixão. No havaiano, a palavra ganhou um uso ainda mais amplo: serve para “oi”, “tchau” e “amor” ao mesmo tempo, um dos motivos de ser descrita como um jeito de viver, não só uma palavra de cumprimento (en.wiktionary.org, en.wikipedia.org/wiki/Hawaiian_language).',
    transparent: false,
  },
  {
    word: 'mahalo',
    root_word: '*masalo',
    origin_language: 'Proto-filipino',
    cognates: c(['Tagalo', 'masarap (saboroso, agradável)'], ['Malaio', 'sedap (saboroso)']),
    evolution_note:
      '“Mahalo” (obrigado) vem, segundo o Wiktionary, do proto-filipino “*masalo”, que por sua vez remonta ao proto-malaio-polinésio “*sadəp” — a mesma raiz do tagalo “masarap” e do malaio “sedap”, ambos ligados à ideia de algo saboroso ou agradável. O sentido evoluiu, no havaiano, de “algo bom/agradável” para “gratidão, admiração, respeito” — hoje usado tanto como interjeição (“mahalo!”, obrigado) quanto como substantivo.',
    transparent: false,
  },
  {
    word: 'kalo',
    root_word: '*talo',
    origin_language: 'Proto-polinésio',
    cognates: c(['Māori', 'taro'], ['Português', 'taro (o mesmo tubérculo, nome emprestado do māori)']),
    evolution_note:
      '“Kalo” (taro, a planta base da alimentação havaiana tradicional) vem do proto-polinésio “*talo”, que por sua vez vem do proto-austronésio “*taləs”. É um “dupleto” do inglês “taro” (também usado em português): as duas palavras — “kalo” havaiana e “taro” emprestada do māori — vêm da MESMA raiz polinésia, só que chegaram ao inglês por caminhos diferentes (en.wiktionary.org).',
    transparent: false,
  },
  {
    word: 'ukulele',
    root_word: "ʻuku + lele",
    origin_language: 'Havaiano',
    cognates: c(['Inglês', 'ukulele (palavra emprestada direto do havaiano)'], ['Português', 'ukulele (mesmo empréstimo)']),
    evolution_note:
      '“Ukulele” é a junção de “ʻuku” (pulga) e “lele” (pular, saltar) — “pulga saltadora”, uma referência, segundo a etimologia registrada no Wiktionary, ao jeito rápido como os dedos se movem nas cordas do instrumento. Diferente da maioria das palavras desta lista, aqui o empréstimo foi do havaiano PARA o inglês (e depois para o português) — o caminho contrário do costume.',
    transparent: false,
  },
  {
    word: 'wikiwiki',
    root_word: 'wiki (rápido)',
    origin_language: 'Havaiano',
    cognates: c(['Inglês', 'wiki (como em “Wikipedia”, emprestado do havaiano)']),
    evolution_note:
      '“Wikiwiki” (rápido, veloz) deu origem à palavra “wiki” da informática: o programador Ward Cunningham batizou seu software colaborativo de “WikiWikiWeb” em 1995, inspirado no nome do “Wiki Wiki Shuttle”, o ônibus rápido do Aeroporto Internacional de Honolulu — segundo o próprio relato de Cunningham, citado na Wikipédia, ele escolheu “wiki-wiki” como “um substituto aliterativo para ”rápido“”. É um raro caso de palavra havaiana que voltou ao mundo todo através da tecnologia.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HAW: [string, string][] = [
  ['Pehea ʻoe i kēia lā?', 'Como você está hoje?'],
  ['ʻO wai kou inoa?', 'Qual é o seu nome?'],
  ['No hea mai ʻoe?', 'De onde você é?'],
  ['ʻEhia kou mau keiki?', 'Quantos filhos você tem?'],
];

export const SHADOWING_HAW: [string, string][] = [
  ['Aloha! Pehea ʻoe?', 'Olá! Como você está?'],
  ['Mahalo nui loa no ka poi!', 'Muito obrigado pela poi!'],
  ['ʻO wai kou inoa?', 'Qual é o seu nome?'],
  ['Ke hele nei au i ke kula.', 'Estou indo para a escola.'],
];
