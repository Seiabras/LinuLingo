import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no burushaski). */
export const COMMUNITY_BSK: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Une gueek besan bila?',
    content: 'Ja aek Bruno.',
    reference: 'Ja aek Bruno bila.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Une gueek besan bila?',
    content: 'Un aek Camila bila.',
    reference: 'Ja aek Camila bila.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Aẏa?',
    content: 'In.',
    reference: 'Aẏa.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_BSK: ScenarioSeed[] = [
  {
    id: 'bsk-s1',
    title: 'Bebila, em Hunza',
    emoji: '🏔️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Hassan, um amigo do vale de Hunza',
    description: 'Hassan te recebe no vale de Hunza e pergunta seu nome e sua família. É uma conversa curta e informal.',
    turns: [
      {
        bot: 'Bebila?',
        botTranslation: 'Tudo bem? (saudação informal)',
        keywords: ['Bebila', 'Ju na'],
        suggestions: ['Ju na, bebila?'],
      },
      {
        bot: 'Une gueek besan bila?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['Ja aek', 'bila'],
        suggestions: ['Ja aek Linu bila.'],
      },
      {
        bot: 'Aẏa, imi?',
        botTranslation: 'Pai, mãe?',
        keywords: ['Aẏa', 'Imi'],
        suggestions: ['Aẏa, imi.'],
      },
    ],
  },
];

/** Palavras do burushaski com a origem ou a história real (dentro do que as fontes atestam). */
export const ETYMOLOGY_BSK: EtymologySeed[] = [
  {
    word: 'balás',
    root_word: 'balás (Nager balác)',
    origin_language: 'Burushaski, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'O dicionário anotado de Starostin registra a hipótese de Hermann Berger: “balás” (ave grande) seria da mesma raiz de “du=wál-” (voar) — a passagem de “b” pra “w” entre vogais é um padrão normal de mudança sonora no burushaski. Já a palavra pra “ave pequena” (diferente de “balás”) não pôde ser confirmada com segurança nesta sessão: a fonte principal tinha uma lacuna de caracteres exatamente nesse ponto.',
    transparent: false,
  },
  {
    word: 'ja',
    root_word: 'ja (Yasin), ʓe (Hunza)',
    origin_language: 'Burushaski, língua isolada',
    cognates: c(['pt', 'sem cognato — nenhuma fonte consultada encontrou parentesco com nenhuma outra língua']),
    evolution_note:
      'O burushaski é uma língua ISOLADA: sem parentesco comprovado com nenhuma outra língua do mundo, nem com as línguas indo-iranianas vizinhas (urdu, xina, uaqui, curto). O pronome “ja” (eu) é um bom exemplo: nenhuma das fontes consultadas nesta sessão (Wikipédia, Wikcionário, o dicionário anotado de Starostin) aponta uma palavra parecida em nenhuma língua vizinha — diferente de boa parte do vocabulário cultural do burushaski, cheio de empréstimos do urdu, do xina e do persa.',
    transparent: false,
  },
  {
    word: 'huk',
    root_word: 'huk',
    origin_language: 'Burushaski, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'O dicionário de Berger, segundo o resumo de Starostin, registra “huk” como a palavra comum pra “cão” nos três dialetos (Yasin e Hunza-Nager) — rara estabilidade, já que a maioria das palavras do Swadesh muda de forma entre os dialetos. O mesmo dicionário registra ainda “dada” como sinônimo, mas só na fala infantil — um registro de linguagem bem específico, como o português também tem (“au-au” em vez de “cachorro”, falando com uma criança).',
    transparent: false,
  },
  {
    word: 'tol',
    root_word: 'tol (Hunza), tul (Yasin)',
    origin_language: 'Burushaski, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'Diferente de “huk” (cão, igual nos três dialetos), a palavra pra “cobra” muda de vogal entre Yasin (“tul”) e Hunza-Nager (“tol”) — o tipo de variação dialetal que o dicionário anotado de Starostin registra item por item, comparando Berger (1974, pra Yasin) com Berger (1998, pra Hunza-Nager). O Wikcionário em inglês ainda cita uma palavra alternativa pra Hunza, “ghusanus”, sem deixar claro se é sinônimo pleno ou se marca algum tipo diferente de cobra.',
    transparent: false,
  },
  {
    word: 'gan',
    root_word: 'gan',
    origin_language: 'Burushaski, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Gan” (caminho, estrada) é outro caso raro de palavra IDÊNTICA nos dois dialetos comparados pelo dicionário de Starostin (Yasin e Hunza-Nager) — a maioria dos itens da lista de Swadesh muda pelo menos uma vogal ou consoante entre os dialetos, então essa estabilidade total chamou a atenção o bastante pra entrar aqui.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_BSK: [string, string][] = [
  ['Bebila?', 'Como você está hoje? Escreva usando “Awa” (sim) ou “Bey ya” (não).'],
  ['Ja aek … bila.', 'Apresente-se à sua maneira, completando com o seu nome.'],
  ['Aẏa, imi…', 'Quem são as pessoas da sua família? Escreva usando as palavras de parentesco que você aprendeu.'],
  ['Han, altó, isko, walto…', 'Continue contando até onde você conseguir em burushaski.'],
];

export const SHADOWING_BSK: [string, string][] = [
  ['Bebila? Ju na.', 'Tudo bem? Obrigado.'],
  ['Ja aek Linu bila.', 'Meu nome é Linu.'],
  ['Imi, aẏa, giẏaas.', 'Mãe, pai, criança.'],
  ['Han, altó, isko, walto.', 'Um, dois, três, quatro.'],
];
