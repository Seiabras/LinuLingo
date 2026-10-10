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
  {
    id: 'jbo-u3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Carvi, cerni, e gunka',
    emoji: '🌦️',
    card: {
      id: 'jbo-c3',
      title: 'jbovlaste: o dicionário vivo da comunidade',
      emoji: '📖',
      history:
        'O dicionário oficial do lojban, o jbovlaste (consultado aqui pelo espelho vlasisku.lojban.org), documenta a estrutura de lugares de cada uma das cerca de 1.300 a 1.350 gismu oficiais. Foi dali que veio o vocabulário de clima, tempo e profissões deste nível, conferido gismu por gismu, com a palavra-chave em inglês da lista oficial (lojban.org/publications/wordlists/gismu_english_order.txt) antes de cada um entrar no curso.',
      culture_tip:
        'Como o lojban não tem sujeito obrigatório, uma previsão do tempo pode ficar só no predicado: "carvi" sozinho já é uma frase completa ("está chovendo"), sem precisar de um sujeito vazio como o "it" do inglês ("it rains") ou o "chove" sem sujeito do português.',
      grammar_why:
        '"gi\'e" junta dois predicados do MESMO sujeito num bridi só, sem repeti-lo: "le donri cu glare gi\'e xamgu" (o dia está quente e bom) em vez de duas frases separadas.',
      grammar_examples: [
        ['Le donri cu glare gi\'e xamgu.', 'O dia está quente e bom.'],
        ['Mi gunka gi\'e tadni.', 'Eu trabalho e estudo.'],
      ],
      character_guide: [
        ["'", 'aparece em várias partículas novas da A2, sempre entre vogais', "gi'e (\"gi-HE\", e, entre predicados)"],
        ['tadni, gunka (CVCCV)', 'o padrão de 5 letras das gismu continua — acento na primeira sílaba', 'TAD-ni, GUN-ka'],
      ],
    },
    lessons: [
      {
        id: 'jbo-u3-l1',
        title: 'Carvi e donri',
        kind: 'licao',
        words: ['carvi', 'snime', 'lenku', 'glare', 'brife', 'donri'],
        cloze: [
          { sentence: 'Le djacu cu ___.', answer: 'lenku', options: ['lenku', 'glare', 'barda'], translation: 'A água está fria.' },
          { sentence: 'Le ___ cu blabi.', answer: 'snime', options: ['snime', 'carvi', 'brife'], translation: 'A neve é branca.' },
          { sentence: 'Le donri cu ___.', answer: 'xamgu', options: ['xamgu', 'lenku', 'glare'], translation: 'O dia é bom.' },
        ],
        voice: {
          bot: "Xu le brife cu barda?",
          botTranslation: 'O vento está forte?',
          expected: ["Go'i! Le brife cu barda.", "go'i", 'le brife cu barda'],
          hint: 'Responda com "go\'i" e repita "le brife cu barda".',
        },
        communityPrompt: 'Descreva o clima de hoje em lojban: use "le carvi", "le brife" ou "le snime" com "cu" e um adjetivo.',
      },
      {
        id: 'jbo-u3-l2',
        title: 'Cerni e gunka',
        kind: 'licao',
        words: ['cerni', 'masti', 'mikce', 'ctuca', 'tadni', 'gunka'],
        cloze: [
          { sentence: 'Mi ___ la lojban.', answer: 'tadni', options: ['tadni', 'gunka', 'ctuca'], translation: 'Eu estudo lojban.' },
          { sentence: 'Mi ___ do.', answer: 'ctuca', options: ['ctuca', 'gunka', 'tadni'], translation: 'Eu ensino você.' },
          { sentence: 'Le ___ cu pendo mi.', answer: 'mikce', options: ['mikce', 'cerni', 'masti'], translation: 'O médico é meu amigo.' },
        ],
        voice: {
          bot: 'Xu do tadni la lojban?',
          botTranslation: 'Você estuda lojban?',
          expected: ["Go'i! Mi tadni la lojban.", "go'i", 'mi tadni'],
          hint: 'Responda com "go\'i" e repita "mi tadni la lojban".',
        },
        communityPrompt: 'Fale do seu trabalho ou estudo em lojban: "mi gunka", "mi tadni la lojban" ou "mi ctuca".',
      },
      {
        id: 'jbo-u3-l3',
        title: 'Prova: clima e trabalho',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Le donri cu glare .i mi ba'o gunka. Xu do gunka ca'o?",
          botTranslation: 'O dia está quente. Eu já trabalhei. Você está trabalhando agora?',
          expected: ["Go'i! Mi ca'o gunka.", "go'i", "mi ca'o gunka"],
          hint: 'Responda com "go\'i" e "mi ca\'o gunka" (eu estou trabalhando agora).',
        },
        communityPrompt: 'Escreva um parágrafo curto em lojban sobre seu dia: o clima, se você trabalha ou estuda, e uma profissão que você conhece.',
      },
    ],
  },
  {
    id: 'jbo-u4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Jdima, stedu, e badri',
    emoji: '🛍️',
    card: {
      id: 'jbo-c4',
      title: 'Quantificar sem ambiguidade',
      emoji: '🔢',
      history:
        'A gramática do lojban permite expressar quantificadores (como "três", "todo", "algum") colados direto a um sumti, sem a ambiguidade que frases naturais às vezes têm — um dos motivos pelos quais pesquisadores de lógica, linguística computacional e inteligência artificial se interessam pela língua, como já visto na A1.2 (a ideia de Ben Goertzel de uma variante do lojban como "ponte" entre humanos e IAs).',
      culture_tip:
        'O gismu "rupnu" (dinheiro) tem como palavra-chave oficial "dollar": não é uma moeda específica, e sim o conceito geral de "unidade monetária maior" (dólar, iene, real...), que se ajusta ao contexto de quem fala.',
      grammar_why:
        'Um número colado ANTES de "le"/"lo" quantifica o sumti inteiro: "ci lo gerku" é "três cachorros". É a mesma contagem da A1.2 (pa, re, ci...), agora na frente de um sumti.',
      grammar_examples: [
        ['Ci lo gerku cu xamgu.', 'Três cachorros são bons.'],
        ['Mi joi do cu pendo.', 'Eu e você somos amigos (como grupo).'],
      ],
      character_guide: [
        ['jdima, vecnu, kargu, rupnu', 'gismu de 5 letras, acento na primeira sílaba', 'JDI-ma, VEC-nu, KAR-gu, RUP-nu'],
      ],
    },
    lessons: [
      {
        id: 'jbo-u4-l1',
        title: 'Jdima e stedu',
        kind: 'licao',
        words: ['jdima', 'vecnu', 'kargu', 'rupnu', 'stedu', 'xance'],
        cloze: [
          { sentence: 'Le vanju cu ___.', answer: 'kargu', options: ['kargu', 'cmalu', 'barda'], translation: 'O vinho é caro.' },
          { sentence: 'Mi djica lo ___.', answer: 'rupnu', options: ['rupnu', 'stedu', 'xance'], translation: 'Eu quero dinheiro.' },
          { sentence: 'Mi ___ le cukta.', answer: 'vecnu', options: ['vecnu', 'djica', 'nelci'], translation: 'Eu vendo o livro.' },
        ],
        voice: {
          bot: 'Xu le jdima cu barda?',
          botTranslation: 'O preço está alto?',
          expected: ["Na go'i! Le jdima cu cmalu.", "na go'i", 'le jdima cu cmalu'],
          hint: 'Responda com "na go\'i" (não) e diga que o preço é pequeno (cmalu).',
        },
        communityPrompt: 'Fale de uma compra em lojban: use "le jdima", "mi vecnu" ou "mi djica lo rupnu".',
      },
      {
        id: 'jbo-u4-l2',
        title: 'Kanla e badri',
        kind: 'licao',
        words: ['kanla', 'moklu', 'badri', 'tatpi', 'terpa', 'spaji'],
        cloze: [
          { sentence: 'Le kanla cu ___.', answer: 'blanu', options: ['blanu', 'xunre', 'cmalu'], translation: 'O olho é azul.' },
          { sentence: 'Mi ___.', answer: 'badri', options: ['badri', 'tatpi', 'gleki'], translation: 'Eu estou triste.' },
          { sentence: 'Mi terpa le ___.', answer: 'gerku', options: ['gerku', 'mlatu', 'spaji'], translation: 'Eu temo o cachorro.' },
        ],
        voice: {
          bot: 'Xu do gleki .a do badri?',
          botTranslation: 'Você está feliz ou triste?',
          expected: ['Mi gleki.', 'mi gleki', 'mi badri'],
          hint: 'Responda com "mi gleki" (feliz) ou "mi badri" (triste).',
        },
        communityPrompt: 'Descreva como você está em lojban: "mi gleki", "mi badri" ou "mi tatpi".',
      },
      {
        id: 'jbo-u4-l3',
        title: 'Prova: compras e sentimentos',
        kind: 'prova',
        words: [],
        cloze: [],
        voice: {
          bot: "Le jdima cu kargu .i ku'i mi ba'o vecnu le cukta.",
          botTranslation: 'O preço é caro. Mas eu já vendi o livro.',
          expected: ['Mi gleki! Mi djica lo rupnu.', 'mi gleki', 'djica lo rupnu'],
          hint: 'Diga que está feliz (mi gleki) e que quer dinheiro (mi djica lo rupnu).',
        },
        communityPrompt: 'Escreva um parágrafo curto em lojban sobre uma compra e como você se sente, usando pelo menos três palavras desta unidade.',
      },
    ],
  },
];
