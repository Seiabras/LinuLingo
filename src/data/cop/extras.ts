import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no copta). */
export const COMMUNITY_COP: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ⲡⲁⲣⲁⲛ ⲡⲉ Ϣⲉⲛⲟⲩⲧⲉ.',
    content: 'Ⲡⲁⲣⲁⲛ ⲧⲉ Ⲃⲣⲟⲩⲛⲟ.',
    reference: 'Ⲡⲁⲣⲁⲛ ⲡⲉ Ⲃⲣⲟⲩⲛⲟ.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ.',
    content: 'Ⲡⲁⲏⲓ ⲟⲩⲕⲟⲩⲓ ⲡⲉ.',
    reference: 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲕⲟⲩⲓ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.',
    content: 'Ϯⲟⲩⲱⲙ ⲡⲟⲉⲓⲕ.',
    reference: 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.',
  },
];

/**
 * Cenário de conversa. Nenhuma fonte conferida nesta rodada confirma uma distinção formal/informal
 * dentro do próprio copta (do mesmo jeito que o francês antigo e o eslavo eclesiástico antigo também
 * documentam essa lacuna) — por isso o registro aqui é só "informal" por convenção do app, não uma
 * afirmação sobre a língua.
 */
export const SCENARIOS_COP: ScenarioSeed[] = [
  {
    id: 'cop-s1',
    title: 'No escritório do Mosteiro Branco',
    emoji: '📜',
    cefr: 'A1',
    register: 'informal',
    persona: 'Chenute, abade do Mosteiro Branco',
    description: 'Chenute te recebe no escritório (scriptorium) do mosteiro, onde os monges copiam textos sagrados à mão.',
    turns: [
      {
        bot: 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ ⲙⲛ̄ ⲡⲏⲣⲡ.',
        botTranslation: 'Eu como o pão com o vinho.',
        keywords: ['ⲟⲩⲱⲙ', 'ⲥⲱ', 'ⲟⲉⲓⲕ', 'ⲏⲣⲡ'],
        suggestions: ['Ϯⲥⲱ ⲙⲙⲟⲟⲩ.', 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.'],
      },
      {
        bot: 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ.',
        botTranslation: 'Minha casa (o mosteiro) é grande.',
        keywords: ['ⲏⲓ', 'ⲛⲟϭ', 'ⲕⲟⲩⲓ'],
        suggestions: ['Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲕⲟⲩⲓ.'],
      },
    ],
  },
];

/**
 * Etimologia do copta: ao contrário da maioria dos outros idiomas do app, a seta aqui NÃO aponta pra
 * um idioma moderno já completo — o copta não tem um descendente vivo rastreado no app (o árabe
 * egípcio, `arz`, SUBSTITUIU o copta como língua do dia a dia depois da conquista árabe de 641, mas
 * não desceu dele: são duas famílias linguísticas diferentes dentro do afro-asiático, egípcia e
 * semítica — apontar `arz` como "cognato" seria inventar parentesco que não existe). Em vez disso, a
 * etimologia aponta pra TRÁS, pra raiz demótica/egípcia antiga de cada palavra — a mesma língua das
 * pirâmides e dos hieróglifos, só numa fase bem mais antiga da escrita. Por isso `cognates` fica
 * vazio em todas as entradas: não há irmã viva no app para mostrar ao lado. Fontes: Wiktionary
 * (seção "Coptic" de cada palavra, com a cadeia de etimologia até o demótico e o egípcio antigo,
 * conferida uma a uma via WebFetch).
 */
export const ETYMOLOGY_COP: EtymologySeed[] = [
  {
    word: 'ⲉⲓⲱⲧ',
    root_word: 'jt',
    origin_language: 'Egípcio antigo (via demótico jṱ)',
    cognates: c(),
    evolution_note: 'O copta "ⲉⲓⲱⲧ" (pai) vem direto do demótico "jṱ", que já vinha do egípcio antigo "jt" — mais de três mil anos de continuidade na mesma palavra.',
    transparent: false,
  },
  {
    word: 'ⲙⲁⲁⲩ',
    root_word: 'mwt',
    origin_language: 'Egípcio antigo (via demótico mwt)',
    cognates: c(),
    evolution_note: 'O copta "ⲙⲁⲁⲩ" (mãe) é herdeiro direto do egípcio "mwt" — a mesma palavra que nomeia a deusa-mãe Mut, do panteão egípcio antigo.',
    transparent: false,
  },
  {
    word: 'ⲥⲟⲛ',
    root_word: 'sn',
    origin_language: 'Egípcio antigo (via demótico sn)',
    cognates: c(),
    evolution_note: '"ⲥⲟⲛ" (irmão) é quase idêntico ao egípcio antigo "sn" — três mil anos sem mudar de consoantes.',
    transparent: false,
  },
  {
    word: 'ⲣⲱⲙⲉ',
    root_word: 'rmṯ',
    origin_language: 'Egípcio antigo (via demótico rmt)',
    cognates: c(),
    evolution_note: '"ⲣⲱⲙⲉ" (pessoa) vem do egípcio "rmṯ" — a mesma raiz que dá "Remete"/"ⲣⲉⲙⲛ̄ⲕⲏⲙⲉ", "povo do Egito" (literalmente "pessoas-de-Kemet", o nome egípcio antigo do próprio país).',
    transparent: false,
  },
  {
    word: 'ⲛⲟⲩⲧⲉ',
    root_word: 'nṯr',
    origin_language: 'Egípcio antigo (via demótico ntr)',
    cognates: c(),
    evolution_note: '"ⲛⲟⲩⲧⲉ" (deus) vem do egípcio "nṯr" — a mesma palavra usada pra qualquer divindade do panteão egípcio antigo, séculos antes do cristianismo chegar ao Egito.',
    transparent: false,
  },
  {
    word: 'ⲟⲉⲓⲕ',
    root_word: 'ꜥqw',
    origin_language: 'Egípcio antigo (via demótico ꜥq)',
    cognates: c(),
    evolution_note: '"ⲟⲉⲓⲕ" (pão) vem do egípcio "ꜥqw", que também podia significar "renda/sustento" — o pão como a própria ideia de "o que se tem para viver".',
    transparent: false,
  },
  {
    word: 'ⲏⲣⲡ',
    root_word: 'jrp',
    origin_language: 'Egípcio antigo (via demótico jrp)',
    cognates: c(),
    evolution_note: '"ⲏⲣⲡ" (vinho) é quase idêntico ao egípcio antigo "jrp" — o Egito antigo já produzia e bebia vinho muito antes do período copta.',
    transparent: false,
  },
  {
    word: 'ⲉⲓⲉⲣⲟ',
    root_word: 'jtrw-ꜥꜣ',
    origin_language: 'Egípcio antigo (via demótico yr-ꜥꜣ)',
    cognates: c(),
    evolution_note: '"ⲉⲓⲉⲣⲟ" (rio) vem do egípcio "jtrw-ꜥꜣ", literalmente "o grande rio" (jtrw, "rio", + ꜥꜣ, "grande") — o nome que os egípcios antigos davam ao próprio Nilo.',
    transparent: false,
  },
  {
    word: 'ⲣⲏ',
    root_word: 'rꜥ',
    origin_language: 'Egípcio antigo (via demótico)',
    cognates: c(),
    evolution_note: '"ⲣⲏ" (sol) é a mesma palavra do deus-sol egípcio Rá ("Rꜥ") — o copta ainda chama o sol pelo nome do deus mais importante do panteão egípcio antigo.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_COP: [string, string][] = [
  ['Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ.', 'Minha casa é grande. (E a sua — ⲟⲩⲛⲟϭ ou ⲟⲩⲕⲟⲩⲓ?)'],
  ['Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.', 'Eu como o pão. (O que você comeu hoje? Tente em copta.)'],
  ['Ϯⲙⲉ ⲙⲡⲁⲥⲟⲛ ⲙⲛ̄ ⲧⲁⲥⲱⲛⲉ.', 'Eu amo meu irmão e minha irmã. (Fale da sua família.)'],
  ['Ⲣⲱⲙⲉ ϥⲧⲟⲟⲩ. Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ.', 'Quatro pessoas. Minha casa é grande. (Quantas pessoas moram com você?)'],
];

export const SHADOWING_COP: [string, string][] = [
  ['Ⲭⲉⲣⲉ! Ⲡⲁⲣⲁⲛ ⲡⲉ Ⲗⲓⲛⲟⲩ.', 'Oi! Meu nome é Linu.'],
  ['Ⲁⲛⲟⲕ ⲡⲉ ⲟⲩⲣⲱⲙⲉ. Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ.', 'Eu sou uma pessoa. Minha casa é grande.'],
  ['Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ ⲙⲛ̄ ⲡⲏⲣⲡ.', 'Eu como o pão com o vinho.'],
  ['Ϯⲙⲉ ⲙⲡⲁⲥⲟⲛ ⲙⲛ̄ ⲧⲁⲥⲱⲛⲉ.', 'Eu amo meu irmão e minha irmã.'],
];
