import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no ainu). */
export const COMMUNITY_AIN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Eani, Linu ne?',
    content: 'Kuani ne Linu.',
    reference: 'Kuani, Linu ne.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Wakka pirka?',
    content: 'Wakka pirka ne.',
    reference: 'Wakka pirka.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Eani okay, aynu ne?',
    content: 'Ciutari, aynu ne.',
    reference: 'Anutari, aynu ne.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_AIN: ScenarioSeed[] = [
  {
    id: 'ain-s1',
    title: 'Irankarapte, em Hokkaido',
    emoji: '🏞️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Rera, uma amiga de Hokkaido',
    description: 'Rera te recebe numa aldeia aynu e pergunta sobre você e sua casa. É uma conversa curta e informal.',
    turns: [
      {
        bot: 'Irankarapte! E-pirka?',
        botTranslation: 'Oi! Você está bem?',
        keywords: ['Irankarapte', 'Pirka'],
        suggestions: ['Irankarapte! Pirka!'],
      },
      {
        bot: 'Eani, Linu ne?',
        botTranslation: 'Você é o Linu?',
        keywords: ['Kuani', 'ne'],
        suggestions: ['Kuani, Linu ne.'],
      },
      {
        bot: 'Cise pirka?',
        botTranslation: 'A sua casa é boa?',
        keywords: ['Pirka', 'Cise'],
        suggestions: ['Pirka! Cise pirka.'],
      },
    ],
  },
];

/** Palavras do ainu com a origem real (o ainu é língua isolada: sem cognato com o português). */
export const ETYMOLOGY_AIN: EtymologySeed[] = [
  {
    word: 'kamuy',
    root_word: '*kamuy (proto-ainu)',
    origin_language: 'Proto-ainu, possível empréstimo cruzado com o japonês antigo',
    cognates: c(['pt', 'sem cognato — o ainu é língua isolada, sem parentesco com o português nem com o japonês']),
    evolution_note:
      'O Wikcionário em inglês mostra um debate de verdade: “kamuy” (deus, espírito) talvez venha do japonês antigo “kamuy/kamiy”, que seria a origem do japonês moderno “kami” (deus) — mas o missionário e linguista John Batchelor defendeu o caminho contrário, analisando “kamuy” como “ka” (acima) + “kamu” (cobrir) + um sufixo, “aquele que cobre ou domina”, o que tornaria o japonês “kami” um empréstimo do ainu, não o contrário. Os dois caminhos aparecem na mesma entrada, sem conclusão fechada — um bom exemplo de como a etimologia nem sempre tem resposta certa.',
    transparent: false,
  },
  {
    word: 'irankarapte',
    root_word: 'i- (antipassivo) + ram (peito) + karap (tocar) + -te (causativo)',
    origin_language: 'Ainu, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'A saudação “irankarapte” (oi, olá) é tecnicamente a forma causativa de “rankarap” (saudar), com o prefixo antipassivo “i-”: ao pé da letra, algo como “fazer tocar o peito/coração”. É de onde vem a tradução popular “deixe-me tocar seu coração de leve”, às vezes usada em guias turísticos — mais poética que a análise técnica do Wikcionário, mas na mesma direção.',
    transparent: false,
  },
  {
    word: 'iyairaykere',
    root_word: 'i- + yayrayke + -re',
    origin_language: 'Ainu, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Iyairaykere” (muito obrigado, forma formal) também é uma palavra composta — o Wikcionário em japonês a decompõe em três partes (i- + yayrayke + -re), parecido com a formação causativa de “irankarapte”. A forma informal do dia a dia é mais curta, “hioy’oy”.',
    transparent: false,
  },
  {
    word: 'aynu',
    root_word: 'aynu',
    origin_language: 'Ainu, palavra nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Aynu” não significa só “pessoa” ou “ser humano” — o Wikcionário em inglês lista também “homem adulto”, “companheiro” e, com um possessivo, “pai” ou “marido” (o exemplo dado, com a grafia “ainu”, variante de “aynu”, é “ku=kor ainu”, literalmente algo como “meu + ter + pessoa”, traduzido como “meu pai”). O sinônimo arcaico e poético “yaunkur”, usado nos épicos orais (yukar), mostra que a própria palavra pra “pessoa” carrega bastante história cultural.',
    transparent: false,
  },
  {
    word: 'mosir',
    root_word: 'mosir',
    origin_language: 'Ainu, palavra nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Mosir” (terra, mundo, país, ilha) aparece em palavras compostas que resumem a cosmologia aynu: “aynumosir” é Hokkaido (a terra dos aynu), e “kamuymosir” é o céu, o mundo dos deuses (kamuy + mosir). A mesma raiz organiza o espaço humano e o espaço divino, só trocando a primeira parte da palavra.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_AIN: [string, string][] = [
  ['Eani, pirka?', 'Você está bem? Conte como foi o seu dia.'],
  ['Cise pirka?', 'Sua casa é boa? Descreva onde você mora.'],
  ['Kuani, Linu ne.', 'Apresente-se à sua maneira, com “Kuani, … ne”.'],
  ['Somo ku-nukar.', 'Já teve um dia em que você não viu algo que procurava? Conte em ainu, usando “Somo ku-nukar”.'],
];

export const SHADOWING_AIN: [string, string][] = [
  ['Irankarapte! Kuani, Linu ne.', 'Oi! Eu sou o Linu.'],
  ['Iyairaykere!', 'Muito obrigado!'],
  ['Somo ku-nukar.', 'Eu não vi.'],
  ['Wakka pirka, cise pirka.', 'A água é boa, a casa é boa.'],
];
