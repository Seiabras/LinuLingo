import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo tukano). */
export const COMMUNITY_TUO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Anutí?',
    content: "Yɨ'ɨ bem.",
    reference: "Anú'u.",
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: "De'ró weé'gɨ' wee'ti?",
    content: 'Weé-mi.',
    reference: "Weé we'e-'.",
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: "Péduru de'ró weé-ti?",
    content: "Yɨ'ɨ koô tɨ'sâ-'.",
    reference: "Yɨ'ɨ koô-re tɨ'sâ-'.",
  },
];

/**
 * Cenário de conversa. As fontes consultadas não registram uma forma “formal” de tratamento separada
 * da informal no tukano (como o “você”/“o senhor” do português): não há pronome de tratamento distinto
 * documentado, por isso o cenário é informal.
 */
export const SCENARIOS_TUO: ScenarioSeed[] = [
  {
    id: 'tuo-s1',
    title: 'Encontro em Iauaretê',
    emoji: '🛶',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de Iauaretê, às margens do rio Uaupés',
    description:
      'Iauaretê é um dos centros tradicionais dos Ye\'pâ-masa (povo tukano), no rio Uaupés. As fontes consultadas não documentam uma forma “formal” separada da informal no tukano: o mesmo jeito de falar serve para qualquer pessoa.',
    turns: [
      {
        bot: 'Anuáto! Anutí?',
        botTranslation: 'Olá! Como você está?',
        keywords: ["anú'u", 'aɨ'],
        suggestions: ["Anú'u!", "Anú'u. Mɨ'ɨ, anutí?"],
      },
      {
        bot: "Anú'u ke'ra.",
        botTranslation: 'Eu também estou bem.',
        keywords: ['aɨ', "te'á"],
        suggestions: ["Aɨ! Te'á!", 'Aɨ!'],
      },
    ],
  },
];

/**
 * Etimologia de palavras tukano. O tukano NÃO é parente do português nem do tupi-guarani: por isso,
 * ao contrário dos outros pacotes indígenas deste app (que mostram cognatos com o português, ou
 * empréstimos em qualquer uma das duas direções), aqui as notas explicam a formação interna das
 * palavras dentro do próprio tukano — compostos, variação de forma por gênero gramatical, variação
 * ortográfica entre fontes — e, num caso, a ligação de sentido (não de origem) com uma palavra
 * portuguesa.
 */
export const ETYMOLOGY_TUO: EtymologySeed[] = [
  {
    word: "Ye'pâ-masa",
    root_word: "ye'pâ + masa",
    origin_language: 'Tukano',
    cognates: c(['tuo', 'masa (gente, pessoa)']),
    evolution_note:
      "“Ye'pâ-masa”, a autodesignação do povo e da língua tukano, é um composto: “ye'pâ” (nossa terra/nossa mãe) + “masa” (gente) — literalmente “gente da nossa terra”. A mesma raiz “masa” muda de forma conforme quem fala: “ye'pâ-maso” (ela é gente da nossa terra), “ye'pâ-masɨ” (ele/eu sou), “ye'pâ-masa” (nós/eles são) — um composto e uma flexão de gênero ao mesmo tempo, atestados no diálogo de exemplo da língua (pt.wikipedia.org/wiki/Língua_tucano).",
    transparent: false,
  },
  {
    word: 'Dásea',
    root_word: 'dásea (tucano, a ave)',
    origin_language: 'Tukano',
    cognates: c(['pt', 'tucano (a ave; sem relação de origem — ver nota)']),
    evolution_note:
      "“Dásea” é o nome tukano para a ave tucano, e também uma autodesignação alternativa do povo (ao lado de “Ye'pâ-masa”). O nome “tukano”/“tucano”, usado em português para o povo e para a língua, reflete esse sentido — mas a palavra portuguesa “tucano” (a ave) vem do tupi “tukana”, uma raiz diferente: não há parentesco de origem entre “dásea” e “tucano”, só a mesma ideia (a ave) nomeando a mesma língua em dois idiomas diferentes.",
    transparent: false,
  },
  {
    word: 'masa',
    root_word: 'masa',
    origin_language: 'Tukano',
    cognates: c(['tuo', "ye'pâ-masa (gente da nossa terra)"]),
    evolution_note:
      '“Masa” (gente, pessoa) é, segundo o Instituto Socioambiental (ISA), um conceito relativo entre os povos do Alto Rio Negro: cada povo pode se chamar de “masa” a partir do seu próprio ponto de vista. É a raiz que está dentro da autodesignação “Ye\'pâ-masa” e de suas variações de gênero (“ye\'pâ-maso”, “ye\'pâ-masɨ”).',
    transparent: false,
  },
  {
    word: 'pacó',
    root_word: 'pacó / pako',
    origin_language: 'Tukano',
    cognates: c(['pt', 'mãe (sem relação de origem: só a tradução)']),
    evolution_note:
      'O Wiktionary (citando a gramática pedagógica de West & Welsch, 2004) grafa esta palavra “pacó”; o diálogo de exemplo citado na Wikipédia em português grafa a mesma palavra “pako” — uma variação comum nas fontes sobre o tukano, que alternam “c” e “k” para o mesmo som, /k/. Não é parecida com “mãe” nem com nenhuma palavra portuguesa: é um bom lembrete de que o tukano não é parente do português.',
    transparent: false,
  },
  {
    word: 'númíó',
    root_word: 'númíó',
    origin_language: 'Tukano',
    cognates: c(['tuo', "ye'pâ-maso (forma feminina de ye'pâ-masa)"]),
    evolution_note:
      'Chama a atenção que várias palavras e formas femininas do tukano terminam num “o” fechado, às vezes acentuado: “númíó” (mulher), “pacó” (mãe) e a forma feminina “ye\'pâ-maso” (ela é gente da nossa terra). É só um padrão observado nas palavras já confirmadas para este pacote, não uma regra provada aqui — mas um bom fio para quem quiser puxar mais, estudando uma gramática completa da língua.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TUO: [string, string][] = [
  ['Anutí?', 'Como você está?'],
  ["Mɨ'ɨ pacó, de'ró weé-go' wee-á-ti?", 'O que a sua mãe está fazendo?'],
  ["Mɨsâ ye'pâ-masa nii-ti?", "Vocês são ye'pâ-masa?"],
  ["Ni'kaá así niî'?", 'Hoje está quente?'],
];

export const SHADOWING_TUO: [string, string][] = [
  ["Anuáto! Yɨ'ɨ ye'pâ-masɨ nii-'.", "Olá! Eu sou ye'pâ-masɨ (gente da nossa terra)."],
  ["Péduru koô-re tɨ'sâ-mi.", 'Pedro gosta dela.'],
  ["Too pũríkã, marî i'tiárã ye'pâ-masa nii-'.", "Então, nós três somos ye'pâ-masa."],
  ["Da'rê ba'a-go' wee-á-mo, ɨ̃sa yaá wi'i-pɨ.", 'Ela está preparando mandioca, na nossa casa.'],
];
