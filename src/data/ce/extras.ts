import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no checheno). */
export const COMMUNITY_CE: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Хьан цIе хIу ю?',
    content: 'Со Лину ву.',
    reference: 'Сан цIе Лину ю.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Иза мила ю?',
    content: 'Иза сан йиша ву.',
    reference: 'Иза сан йиша ю.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Хьо зуда ю?',
    content: 'ХIаъ, со зуда ву.',
    reference: 'ХIаъ, со зуда ю.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_CE: ScenarioSeed[] = [
  {
    id: 'ce-s1',
    title: 'Салам, в Грозном',
    emoji: '🏙️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Петимат, uma amiga de Grozny',
    description: 'Петимат te recebe em Grozny e pergunta seu nome e sua família. É uma conversa curta e informal.',
    turns: [
      {
        bot: 'Салам! Муха ду гIуллакхаш?',
        botTranslation: 'Oi! Como você está?',
        keywords: ['Салам', 'Дика ду'],
        suggestions: ['Салам! Дика ду, баркалла.'],
      },
      {
        bot: 'Хьан цIе хIу ю?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['Сан цIе', 'ю'],
        suggestions: ['Сан цIе Лину ю.'],
      },
      {
        bot: 'Хьан ваша мичахь Iаш ву?',
        botTranslation: 'Onde vive o seu irmão?',
        keywords: ['Сан ваша', 'Iаш ву'],
        suggestions: ['Сан ваша Соьлжа-гIалахь Iаш ву.'],
      },
    ],
  },
];

/** Palavras do checheno com a origem real. */
export const ETYMOLOGY_CE: EtymologySeed[] = [
  {
    word: 'баркалла',
    root_word: 'بارك الله (bāraka llāh), árabe',
    origin_language: 'Árabe, via o islã',
    cognates: c(['pt', 'sem cognato — vem do árabe, não do latim']),
    evolution_note:
      'O Wikibooks classifica “баркалла” (obrigado) como uma palavra de origem árabe totalmente incorporada ao checheno do dia a dia, ao lado de outras palavras religiosas como “АллахIа” (Deus) e “ИншАллахIа” (se Deus quiser) — um rastro de séculos de islamização da região, visível até no vocabulário mais básico de cortesia.',
    transparent: false,
  },
  {
    word: 'нохчийн мотт',
    root_word: 'нохчий (Nokhchiy) + мотт',
    origin_language: 'Checheno, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Нохчийн мотт” é, ao pé da letra, “a língua dos нохчий” — нохчий (ou нахчий, na variante das montanhas) é como os próprios chechenos se chamam; “Checheno”, o nome usado em português e em russo, vem de outra fonte (ligada a nomes de vilarejos do centro da Chechênia, numa história ainda discutida pelos linguistas). Uma análise, também debatida, decompõe “Нохчий” em “нах” (povo) + “чö” (território) — “o povo do território”. Já “мотт” quer dizer tanto “língua” quanto “boca, língua (o órgão)” — o mesmo tipo de extensão de sentido que o português faz com a própria palavra “língua”.',
    transparent: false,
  },
  {
    word: 'кIант',
    root_word: 'кIант',
    origin_language: 'Checheno, palavra nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'O checheno não separa “menino” de “filho” numa palavra só para cada: “кIант” serve para os dois sentidos (o mesmo vale para “йоI”, “menina”/“filha”) — por isso o Wikibooks usa a mesma palavra nas duas lições, uma vez como “boy” (lição 1) e outra como “son” (lição 2).',
    transparent: false,
  },
  {
    word: 'Iаш',
    root_word: 'Iаш (participle de “sentar”)',
    origin_language: 'Checheno, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Iаш” é, na origem, o particípio do verbo “sentar” — “Со … Iаш ву” é, ao pé da letra, algo como “eu estou sentado em…”, usado no dia a dia para dizer simplesmente “eu moro em…”. Não é uma particularidade exclusiva do checheno: várias línguas do mundo estendem um verbo de postura (sentar, ficar de pé) para o sentido de “morar” ou “estar”.',
    transparent: false,
  },
  {
    word: 'дика ду',
    root_word: 'дика (bom) + ду (cópula)',
    origin_language: 'Checheno, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Дика ду” (está bem, ok) é, literalmente, “é bom” — “дика” (bom, bem) mais a forma impessoal da cópula, “ду”, a mesma que aparece no plural (“тхо … ду”). Fixada como expressão de uso, virou a forma padrão de dizer “tudo bem” ou “ok”, sem precisar concordar com nada específico.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_CE: [string, string][] = [
  ['Хьо мичахь Iаш ву?', 'Onde você vive? Conte sobre sua casa, com “Со … Iаш ву”.'],
  ['Хьан доьзал муха ду?', 'Como está sua família hoje?'],
  ['Со кхета…', 'O que você entende bem? Escreva uma frase com “Со кхета”.'],
  ['Сан цIе…', 'Apresente-se à sua maneira, com “Сан цIе … ю”.'],
];

export const SHADOWING_CE: [string, string][] = [
  ['Салам! Дика ду, баркалла.', 'Oi! Estou bem, obrigado.'],
  ['Сан цIе Лину ю.', 'Meu nome é Linu.'],
  ['Суна ца хаа.', 'Eu não sei.'],
  ['Сан ваша Москвахь Iаш ву.', 'Meu irmão vive em Moscou.'],
];
