import type { UnitSeed } from '../types';

/**
 * Trilha do lojban: só as duas unidades do nível A1 por enquanto (ver `incomplete` em index.ts) —
 * a segunda língua construída do app com curso de verdade (depois do esperanto, 08/10/2026).
 * Fontes: "The Complete Lojban Language" (CLL), John Woldemar Cowan, 1997 (lojban.org/
 * publications/cll/); mw.lojban.org/papri/the_Loglan-Lojban_Dispute e a decisão judicial "The
 * Loglan Institute, Inc. v. The Logical Language Group, Inc.", 962 F.2d 1038 (Fed. Cir. 1992),
 * via law.justia.com, para a história da disputa Loglan×Lojban; mw.lojban.org/papri/Lojban_around_
 * the_world e mw.lojban.org/papri/Learning para a comunidade atual (Discord, IRC, Telegram).
 */
export const UNITS_JBO: UnitSeed[] = [
  {
    id: 'jbo-u1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Coi! Mi pendo do',
    emoji: '🧮',
    card: {
      id: 'jbo-c1',
      title: 'Uma língua sem ambiguidade, nascida de uma disputa',
      emoji: '🧮',
      history:
        'O lojban vem do Loglan, criado por James Cooke Brown a partir de 1955 para testar se uma língua totalmente lógica mudaria o jeito de pensar de quem a fala. Brown apresentou o projeto ao público em 1960, na revista Scientific American, mas depois passou a reivindicar direitos sobre o vocabulário e a gramática e restringiu o uso da língua pela comunidade. Em 1986, um grupo liderado por Robert LeChevalier decidiu recriar todo o vocabulário do zero para fugir dessas restrições, e fundou em 1987 o Logical Language Group (LLG) — nascia o lojban. A disputa foi até a justiça americana: em 1992, a Corte de Apelações dos EUA decidiu que "Loglan" era só o nome genérico de uma língua, não uma marca registrada, dando ganho de causa à LLG. A gramática do lojban foi declarada estável em 1997, no livro oficial "The Complete Lojban Language", de John Cowan.',
      culture_tip:
        'A comunidade do lojban hoje é pequena, mas ativa e sobretudo online: um servidor de Discord passa de 1.800 membros, há canais de Telegram e de IRC, e salas específicas — "#lojban" para conversa geral, "#ckule" para quem está aprendendo, "#jbosnu" só em lojban. Quem fala a língua fluentemente ainda é raro: a própria comunidade brinca que esse número cabe nos dedos de poucas mãos.',
      grammar_why:
        'No lojban, "mi" (eu) e "do" (você/tu) nunca mudam de forma — não existe um "você" formal separado, nem plural diferente do singular, parecido com o "vi" do esperanto, só que de forma ainda mais absoluta (nem a forma arcaica "ci" do esperanto tem equivalente aqui). E como o lojban não tem verbo "ser"/"estar", uma frase como "do mamta mi" (você é minha mãe) já fica completa só com os dois pronomes e a palavra "mamta".',
      grammar_examples: [
        ['Do mamta mi.', 'Você é minha mãe.'],
        ['Mi prami do.', 'Eu te amo.'],
      ],
      character_guide: [
        ["'", 'som de "h" soprado, só entre vogais', "ki'e (\"ki-HE\", obrigado)"],
        ['o', '"o" fechado, como em "bolo"', 'coi ("KO-i", olá)'],
      ],
    },
    lessons: [
      {
        id: 'jbo-u1-l1',
        title: "Coi, pendo!",
        kind: 'licao',
        words: ['coi', "co'o", "ki'e", 'mi', 'do', 'pendo'],
        cloze: [
          { sentence: '___!', answer: 'Coi', options: ['Coi', "Co'o", "Ki'e"], translation: 'Olá!' },
          { sentence: '___!', answer: "Co'o", options: ["Co'o", 'Coi', "Ki'e"], translation: 'Tchau!' },
          { sentence: 'Mi pendo ___.', answer: 'do', options: ['do', 'mi', 'coi'], translation: 'Eu sou seu amigo.' },
        ],
        voice: {
          bot: 'Coi! Mi pendo do.',
          botTranslation: 'Olá! Eu sou seu amigo.',
          expected: ['Coi! Mi pendo do.', 'coi', 'mi pendo do'],
          hint: 'Responda com "Coi!" e diga "Mi pendo do" (eu sou seu amigo).',
        },
        communityPrompt: 'Apresente-se em lojban: diga "Coi!" e "Mi pendo do" (eu sou seu amigo).',
      },
      {
        id: 'jbo-u1-l2',
        title: 'Mi mamta, mi patfu',
        kind: 'licao',
        words: ['mamta', 'patfu', 'bruna', 'mensi', 'prami', 'nelci'],
        cloze: [
          { sentence: 'Do ___ mi.', answer: 'mamta', options: ['mamta', 'patfu', 'bruna'], translation: 'Você é minha mãe.' },
          { sentence: 'Mi ___ do.', answer: 'prami', options: ['prami', 'nelci', 'mamta'], translation: 'Eu te amo.' },
          { sentence: 'Mi ___ do.', answer: 'nelci', options: ['nelci', 'prami', 'bruna'], translation: 'Eu gosto de você.' },
        ],
        voice: {
          bot: 'Xu do prami mi?',
          botTranslation: 'Você me ama?',
          expected: ["Go'i! Mi prami do.", "go'i", 'mi prami do'],
          hint: 'Responda com "Go\'i" (sim) e diga "Mi prami do" (eu te amo).',
        },
        communityPrompt: 'Fale de alguém da sua família em lojban: use "mamta", "patfu", "bruna" ou "mensi" numa frase como "Do mamta mi".',
      },
      {
        id: 'jbo-u1-l3',
        title: 'Prova: primeiros passos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Coi! Mi pendo do. .i xu do prami mi?",
          botTranslation: 'Olá! Eu sou seu amigo. Você me ama?',
          expected: ["Coi! Go'i, mi prami do.", "go'i", 'mi prami do'],
          hint: 'Responda a saudação e diga "Go\'i, mi prami do" (sim, eu te amo).',
        },
        communityPrompt: 'Escreva uma apresentação curta em lojban: saudação ("coi"), diga que é amigo ("pendo") e fale de alguém da família.',
      },
    ],
  },
  {
    id: 'jbo-u2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Lo zdani, lo gerku, lo mlatu',
    emoji: '🏠',
    card: {
      id: 'jbo-c2',
      title: 'lo zdani, lo gismu: as raízes por baixo das palavras',
      emoji: '🧩',
      history:
        'As raízes do lojban (gismu) não vieram de uma única língua: foram montadas por um algoritmo que combinou sons de palavras com sentidos parecidos em seis das línguas mais faladas do mundo — chinês, inglês, hindi, espanhol, russo e árabe —, ponderando cada uma pelo número de falantes. Existem hoje entre 1.300 e 1.350 gismu oficiais, todas com exatamente cinco letras. A gramática e o vocabulário foram declarados estáveis ("baseline") em 1997, no livro "The Complete Lojban Language", de John Cowan, publicado pelo Logical Language Group.',
      culture_tip:
        'Por ter uma gramática sem ambiguidade sintática, o lojban interessa a quem pesquisa linguística computacional e inteligência artificial: já houve propostas de usá-lo como língua intermediária em tradução automática e em representação de conhecimento, incluindo uma ideia do pesquisador de IA Ben Goertzel de usar uma variante do lojban como "ponte" de comunicação entre humanos e inteligências artificiais gerais.',
      grammar_why:
        'Cada raiz (gismu) vem com uma lista numerada de "lugares" fixa no dicionário: "klama" (ir/vir) é x1 vai até x2, saindo de x3, pelo caminho x4, com o meio x5. A ORDEM das palavras depois do predicado é que diz qual lugar cada uma preenche — não existe preposição nenhuma fazendo esse papel, como "para"/"de"/"com" fariam em português.',
      grammar_examples: [
        ['Mi klama le zarci.', 'Eu vou ao mercado.'],
        ['Le gerku cu barda.', 'O cachorro é grande.'],
      ],
      character_guide: [
        ['c', 'som de "x"/"ch" — nunca "k" nem "s"', 'cukta ("CHUK-ta", livro)'],
        ['x', 'fricativa raspada na garganta, como o alemão "ch" em "Bach" — não existe em português', 'xamgu ("HAM-gu", bom)'],
      ],
    },
    lessons: [
      {
        id: 'jbo-u2-l1',
        title: 'Le zdani',
        kind: 'licao',
        words: ['gerku', 'mlatu', 'zdani', 'djacu', 'nanba', 'barda'],
        cloze: [
          { sentence: 'Le ___ cu barda.', answer: 'zdani', options: ['zdani', 'gerku', 'mlatu'], translation: 'A casa é grande.' },
          { sentence: 'Mi pinxe lo ___.', answer: 'djacu', options: ['djacu', 'nanba', 'zdani'], translation: 'Eu bebo água.' },
          { sentence: 'Mi citka lo ___.', answer: 'nanba', options: ['nanba', 'djacu', 'gerku'], translation: 'Eu como pão.' },
        ],
        voice: {
          bot: 'Xu le zdani cu barda?',
          botTranslation: 'A casa é grande?',
          expected: ["Go'i! Le zdani cu barda.", "go'i", 'le zdani cu barda'],
          hint: 'Responda com "Go\'i" e repita "Le zdani cu barda".',
        },
        communityPrompt: 'Descreva uma casa em lojban: use "le zdani cu barda" (grande) ou troque "barda" por outro adjetivo que você já conhece.',
      },
      {
        id: 'jbo-u2-l2',
        title: 'Lo cukta, lo skari',
        kind: 'licao',
        words: ['cukta', 'tsani', 'cmalu', 'xamgu', 'xunre', 'blanu'],
        cloze: [
          { sentence: 'Le mlatu cu ___.', answer: 'cmalu', options: ['cmalu', 'barda', 'xamgu'], translation: 'O gato é pequeno.' },
          { sentence: 'Le tsani cu ___.', answer: 'blanu', options: ['blanu', 'xunre', 'crino'], translation: 'O céu é azul.' },
          { sentence: 'Mi nelci lo ___.', answer: 'cukta', options: ['cukta', 'djacu', 'zdani'], translation: 'Eu gosto de livros.' },
        ],
        voice: {
          bot: 'Xu le vanju cu xunre?',
          botTranslation: 'O vinho é vermelho?',
          expected: ["Go'i! Le vanju cu xunre.", "go'i", 'le vanju cu xunre'],
          hint: 'Responda com "Go\'i" e repita a frase sobre o vinho.',
        },
        communityPrompt: 'Descreva uma cor em lojban: escolha algo já conhecido ("lo vanju", "lo tsani", "lo mlatu"...) e diga a cor dele com "le … cu …".',
      },
      {
        id: 'jbo-u2-l3',
        title: 'Prova: casa e cores',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: 'Coi! .i xu do nelci lo mlatu .a lo gerku?',
          botTranslation: 'Olá! Você gosta de gatos ou de cachorros?',
          expected: ['Mi nelci lo mlatu .i le mlatu cu cmalu.', 'mi nelci', 'cmalu'],
          hint: 'Diga de qual bicho você gosta e descreva ele com uma cor ou um tamanho.',
        },
        communityPrompt: 'Escreva um parágrafo curto em lojban descrevendo sua casa ("le zdani") e um bicho, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
