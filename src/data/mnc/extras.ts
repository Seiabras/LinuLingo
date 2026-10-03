import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de quem começa a escrever manchu). */
export const COMMUNITY_MNC: CommunitySeed[] = [
  {
    author_name: 'Marina 🇧🇷',
    prompt: 'Como se escreve “cão”?',
    // u comum no lugar do ū (letra própria)
    content: 'ᡳᠨᡩᠠᡥᡠᠨ',
    reference: 'ᡳᠨᡩᠠᡥᡡᠨ',
  },
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'A pessoa é boa.',
    // adjetivo antes do nome: vira “uma boa pessoa”
    content: 'ᠰᠠᡳᠨ ᠨᡳᠶᠠᠯᠮᠠ᠉',
    reference: 'ᠨᡳᠶᠠᠯᠮᠠ ᠰᠠᡳᠨ᠉',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ele constrói uma casa.',
    // verbo no meio, como em português
    content: 'ᡳ ᠸᡝᡳᠯᡝᠮᠪᡳ ᠪᠣᠣ ᠪᡝ᠉',
    reference: 'ᡳ ᠪᠣᠣ ᠪᡝ ᠸᡝᡳᠯᡝᠮᠪᡳ᠉',
  },
];

/**
 * Cenário formal. A Wikipédia em inglês conta que os manchus instruídos evitavam os pronomes pessoais
 * com quem era de posição mais alta, e usavam “sini beye” (lit. “sua pessoa”) como um “você” educado
 * no lugar do simples “si”.
 */
export const SCENARIOS_MNC: ScenarioSeed[] = [
  {
    id: 'mnc-s1',
    title: 'Visita a um mestre',
    emoji: '🧓',
    cefr: 'A1',
    register: 'formal',
    persona: 'Um professor idoso de manchu, que você visita pela primeira vez',
    description: 'Com alguém mais velho e respeitado, prefira “sini beye” (você, educado) ao simples “si”.',
    turns: [
      {
        bot: 'ᠰᡳᠨᡳ ᡤᡝᠪᡠ ᠠᡳ ᠰᡝᠮᠪᡳ?',
        botTranslation: 'Como você se chama?',
        keywords: ['ᡤᡝᠪᡠ', 'gebu'],
        suggestions: ['ᠮᡳᠨᡳ ᡤᡝᠪᡠ Lᡳᠨᠠ᠉', 'ᠮᡳᠨᡳ ᡤᡝᠪᡠ Mᡝᡵᡤᡝᠨ᠉'],
        registerBreakers: ['ᠰᡳ', 'si'],
      },
      {
        bot: 'ᠰᡳ ᠴᠠᡳ ᠣᠮᡳᠮᠪᡳᠣ?',
        botTranslation: 'Você bebe chá?',
        keywords: ['ᡳᠨᡠ', 'inu', 'ᠪᠠᠨᡳᡥᠠ', 'baniha'],
        suggestions: ['ᡳᠨᡠ᠈ ᠪᠠᠨᡳᡥᠠ᠉'],
        registerBreakers: ['ᠰᡳ', 'si'],
      },
    ],
  },
];

/** Etimologia, toda do campo “Etymology” dos verbetes do Wiktionary em inglês. */
export const ETYMOLOGY_MNC: EtymologySeed[] = [
  {
    word: 'ᠮᠣᡵᡳᠨ',
    root_word: '*murin (prototungúsico)',
    origin_language: 'Prototungúsico',
    cognates: c(['evn', 'мурин'], ['eve', 'мурон']),
    evolution_note: 'Do jurchen “muri” (a língua dos antepassados dos manchus), do prototungúsico *murin, com parentes no evenki (мурин) e no even (мурон), línguas tungúsicas da Sibéria. O mongol “ᠮᠣᠷᠢ” (mori) se parece, mas é só semelhança: o tungúsico e o mongólico não têm parentesco comprovado.',
    transparent: false,
  },
  {
    word: 'ᡥᠣᠨᡳᠨ',
    root_word: 'xoni (jurchen)',
    origin_language: 'Jurchen',
    cognates: c(['gld', 'хонин']),
    evolution_note: 'Do jurchen “xoni”, com parente no nanai (хонин). Lembra o protomongólico *konïn (mongol “хонь”), que veio do proto-túrquico: a ovelha passou de língua em língua entre os povos de pastores da Ásia Central.',
    transparent: false,
  },
  {
    word: 'ᡳᡥᠠᠨ',
    root_word: '*ïkan (prototungúsico)',
    origin_language: 'Prototungúsico',
    cognates: c(['gld', 'ихан'], ['neg', 'ихан']),
    evolution_note: 'Do prototungúsico *ïkan, “touro”, com parentes no nanai e no negidal (ихан). Em manchu, a palavra cobre todo o gado bovino: vaca, boi, touro, búfalo, iaque.',
    transparent: false,
  },
  {
    word: 'ᠪᠣᠣ',
    root_word: 'bo-go (jurchen)',
    origin_language: 'Jurchen',
    cognates: c(),
    evolution_note: 'Herdada do jurchen, em que a palavra aparece transcrita como “bo-go”. Quer dizer casa, lar e também cômodo.',
    transparent: false,
  },
  {
    word: 'ᠴᠠᡳ',
    root_word: '茶 (chinês)',
    origin_language: 'Chinês',
    cognates: c(['zh', '茶'], ['pt', 'chá']),
    evolution_note: 'Emprestada do chinês 茶, “chá”. É a mesma palavra que chegou ao português como “chá”, pelos portugueses em Macau — um parentesco por empréstimo, não por família de línguas.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_MNC: [string, string][] = [
  ['ᠰᡳᠨᡳ ᡤᡝᠪᡠ ᠠᡳ ᠰᡝᠮᠪᡳ?', 'Como você se chama?'],
  ['ᠰᡳ ᠰᠠᡳᠶᡡᠨ?', 'Como vai você?'],
  ['ᠰᡳ ᠠᡳᠪᡳᡩᡝ ᡤᡝᠨᡝᠮᠪᡳ?', 'Aonde você vai?'],
  ['ᠰᡳ ᠴᠠᡳ ᠣᠮᡳᠮᠪᡳᠣ?', 'Você bebe chá?'],
];

export const SHADOWING_MNC: [string, string][] = [
  ['ᠰᡳ ᠰᠠᡳᠶᡡᠨ?', 'Como vai você?'],
  ['ᠰᠠᡳᠨ᠈ ᠪᠠᠨᡳᡥᠠ᠉', 'Bem, obrigado(a).'],
  ['ᠰᡳᠨᡩᡝ ᡠᠴᠠᡵᠠᡥᠠ ᡩᡝ ᡠᡵᡤᡠᠨᠵᡝᠮᠪᡳ᠉', 'Prazer em conhecer você.'],
  ['ᠵᠠᡳ ᠠᠴᠠᡴᡳ᠉', 'Até logo.'],
];
