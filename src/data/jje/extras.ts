import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no jejuense). */
export const COMMUNITY_JJE: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: '혼저옵서예!',
    content: '느.',
    reference: '고맙수다!',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: '아방?',
    content: '예펜.',
    reference: '아방.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: '호나, 둘, 쉿...',
    content: '해.',
    reference: '늿.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_JJE: ScenarioSeed[] = [
  {
    id: 'jje-s1',
    title: '혼저옵서예, em Jeju',
    emoji: '🏝️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Suyeon, uma amiga da ilha de Jeju',
    description: 'Suyeon te recebe em Jeju e pergunta seu nome e sua família. É uma conversa curta e informal.',
    turns: [
      {
        bot: '혼저옵서예!',
        botTranslation: 'Oi, bem-vindo!',
        keywords: ['고맙수다'],
        suggestions: ['고맙수다!'],
      },
      {
        bot: '나는 수연이라마씀.',
        botTranslation: 'Eu sou a Suyeon.',
        keywords: ['나는', '라마씀'],
        suggestions: ['나는 린주라마씀.'],
      },
      {
        bot: '어멍, 아방?',
        botTranslation: 'Mãe, pai?',
        keywords: ['어멍', '아방'],
        suggestions: ['어멍, 아방.'],
      },
    ],
  },
];

/** Palavras do jejuense com a origem ou a história real (dentro do que as fontes atestam). */
export const ETYMOLOGY_JJE: EtymologySeed[] = [
  {
    word: '사름',
    root_word: '사름 (jejuense) / 사람 (saram, coreano padrão)',
    origin_language: 'Coreânico, mesma raiz do coreano padrão',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“사름” não é um empréstimo do coreano padrão: é a forma jejuense da MESMA palavra coreânica, com a vogal “ㅏ” do coreano virando “ㅡ” — uma troca de vogal regular entre as duas línguas-irmãs, visível em vários outros pares de palavras. O pacote de coreano deste app já registra que “사람” é ligado ao verbo “살다” (viver): a pessoa seria, literalmente, “a que vive” — a mesma origem valeria pra “사름”.',
    transparent: false,
  },
  {
    word: '어멍',
    root_word: '어멍 (jejuense) / 어머니 (eomeoni, coreano padrão)',
    origin_language: 'Coreânico, mesma raiz do coreano padrão',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“어멍” (mãe) e “아방” (pai) não vieram do coreano padrão moderno: as duas línguas coreânicas guardam, cada uma a seu jeito, formas mais antigas da mesma família de palavras — por isso soam parecidas, mas não idênticas, com “어머니”/“아버지”. É um padrão comum entre línguas-irmãs: nenhuma “copiou” a outra, as duas herdaram (e mudaram, cada uma do seu jeito) o vocabulário de um ancestral comum.',
    transparent: false,
  },
  {
    word: '지슬',
    root_word: '지슬',
    origin_language: 'Jejuense, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“지슬” (batata) deu nome a um filme coreano de 2013 (“Jiseul”), sobre o massacre de Jeju de 1948 (conhecido como 4.3): moradores se escondiam em cavernas vulcânicas da ilha, sobrevivendo com batatas, enquanto fugiam da violência. O título em jejuense, não em coreano padrão, foi uma escolha deliberada dos diretores pra marcar a identidade da ilha dentro da própria história que o filme conta.',
    transparent: false,
  },
  {
    word: '미깡',
    root_word: '미깡',
    origin_language: 'Incerta (possível empréstimo do japonês)',
    cognates: c(['pt', 'sem cognato confirmado']),
    evolution_note:
      '“미깡” (tangerina) lembra muito o japonês “mikan” (みかん, também “tangerina”) — Jeju é a principal região produtora de tangerina da Coreia do Sul e teve contato histórico com o Japão, inclusive durante a ocupação colonial (1910-1945), período em que o jejuense incorporou outros empréstimos japoneses documentados (como “하시”, pauzinhos, do japonês “hashi”). Mas nenhuma fonte consultada nesta sessão confirma, especificamente, que “미깡” é um empréstimo direto do japonês — pode ser também um desenvolvimento paralelo a partir de uma raiz comum mais antiga.',
    transparent: false,
  },
  {
    word: '호나',
    root_word: '호나, 둘, 쉿, 늿 (jejuense) / 하나, 둘, 셋, 넷 (coreano padrão)',
    origin_language: 'Coreânico, mesma raiz do coreano padrão',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'Os quatro primeiros numerais de contagem do jejuense são claramente parentes dos numerais nativos do coreano padrão (하나, 둘, 셋, 넷) — “둘” (dois) é até idêntico — mas não são cópias: “호나” troca a primeira vogal, e “쉿”/“늿” (três/quatro) perdem a vogal final que o coreano padrão mantém em “셋”/“넷”. O mesmo tipo de parentesco próximo, mas não idêntico, que aparece em “사름”/“사람” e “어멍”/“어머니”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_JJE: [string, string][] = [
  ['혼저옵서예!', 'Como você recebe visita em casa? Escreva usando a saudação de boas-vindas.'],
  ['나는 … 라마씀.', 'Apresente-se à sua maneira, completando com o seu nome.'],
  ['어멍, 아방…', 'Quem são as pessoas da sua família? Escreva usando as palavras que você aprendeu.'],
  ['호나, 둘, 쉿, 늿…', 'Continue contando até onde você conseguir em jejuense.'],
];

export const SHADOWING_JJE: [string, string][] = [
  ['혼저옵서예! 고맙수다.', 'Oi, bem-vindo! Obrigado.'],
  ['나는 린주라마씀.', 'Eu sou o Linu.'],
  ['어멍, 아방, 사름.', 'Mãe, pai, pessoa.'],
  ['호나, 둘, 쉿, 늿.', 'Um, dois, três, quatro.'],
];
