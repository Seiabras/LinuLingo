import type { StorySeed } from '../types';

/**
 * Histórias interativas do lojban — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Cada frase usa só gramática e vocabulário já ensinados no curso (ver vocabulario.ts e
 * gramatica.ts), sem inventar nenhuma construção: "cu" aparece sempre que o sujeito é um "le…",
 * e é dispensado depois de um pronome curto (mi/do), do mesmo jeito explicado no tópico jbo-g3.
 */
export const STORIES_JBO: StorySeed[] = [
  {
    id: 'jbo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Coi! Mi klama le zarci",
    emoji: '🏪',
    summary: 'Um amigo te encontra na rua e convida você para ir ao mercado.',
    cultural_context: 'A maior parte da comunidade do lojban se encontra online — num servidor de Discord com quase 2 mil pessoas, num canal de IRC e em grupos de Telegram —, não pessoalmente: falar lojban ao vivo com outra pessoa, como nesta história, ainda é raro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Coi! Mi pendo do. .i xu do klama le zarci?",
        translation: 'Olá! Eu sou seu amigo. Você vai ao mercado?',
        emoji: '🙋',
        choices: [
          { text: "Go'i! Mi klama le zarci.", translation: 'Sim! Eu vou ao mercado.', next: 'zarci' },
          { text: "Co'o!", translation: 'Tchau!', wrong: 'Ele te perguntou se você vai ao mercado — despedir-se agora não responde à pergunta. Use "go\'i" (sim) ou "na go\'i" (não).' },
        ],
      },
      zarci: {
        text: "Ki'e! .i le zarci cu barda.",
        translation: 'Obrigado! O mercado é grande.',
        emoji: '🏙️',
        choices: [
          { text: 'Le zarci cu xamgu.', translation: 'O mercado é bom.', next: 'final_bo' },
          { text: 'Do mamta mi.', translation: 'Você é minha mãe.', wrong: 'Isso não tem nada a ver com o mercado. Fale sobre ele: "le zarci cu…".' },
        ],
      },
      final_bo: {
        text: ".ui Co'o, pendo!",
        translation: '(Alegria!) Tchau, amigo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo no mercado!', message: 'Vocês vão juntos ao mercado — sua primeira conversa de verdade em lojban.' },
      },
    },
    glossary: [
      ["coi / co'o", 'olá / tchau'],
      ["xu … / go'i / na go'i", 'pergunta sim-não / sim / não'],
      ['pendo', 'amigo'],
    ],
  },
  {
    id: 'jbo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Le mlatu xekri',
    emoji: '🐈',
    summary: 'Você visita a casa de um amigo e conhece o gato preto dele.',
    cultural_context: 'Descrever algo sem usar nenhum verbo "ser"/"estar" (como "le mlatu cu xekri", "o gato é preto") é uma das primeiras coisas estranhas — e depois automáticas — que quem aprende lojban precisa se acostumar.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '.i le zdani cu barda .i le mlatu cu xekri.',
        translation: 'A casa é grande. O gato é preto.',
        emoji: '🏠',
        choices: [
          { text: 'Le mlatu cu cmalu.', translation: 'O gato é pequeno.', next: 'resposta' },
          { text: 'Mi citka lo nanba.', translation: 'Eu como pão.', wrong: 'Isso não fala do gato. Descreva o gato: comece com "le mlatu cu…".' },
        ],
      },
      resposta: {
        text: "Go'i! .i xu do nelci le mlatu?",
        translation: 'Sim! E você, gosta do gato?',
        emoji: '❓',
        choices: [
          { text: 'Go\'i! Mi nelci le mlatu.', translation: 'Sim! Eu gosto do gato.', next: 'final_bo' },
          { text: 'Mi klama le zarci.', translation: 'Eu vou ao mercado.', wrong: 'Isso não responde se você gosta do gato. Use "go\'i" (sim) ou "na go\'i" (não).' },
        ],
      },
      final_bo: {
        text: '.ui Le mlatu cu nelci do!',
        translation: '(Alegria!) O gato gosta de você!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo de quatro patas', message: 'Le mlatu cu nelci do — você fez um amigo novo, falando lojban.' },
      },
    },
    glossary: [
      ['le … cu …', 'marca o sujeito e o predicado da frase'],
      ['xekri / cmalu', 'preto / pequeno'],
      ['nelci', 'gostar de'],
    ],
  },
  {
    id: 'jbo-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Le donri glare',
    emoji: '🌞',
    summary: 'Você encontra um amigo que fala do tempo de hoje e do trabalho dele como médico.',
    cultural_context: 'O vocabulário de clima e profissões desta história vem do dicionário oficial do lojban, o jbovlaste (espelho vlasisku.lojban.org), conferido gismu por gismu antes de entrar no curso.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Coi! Le donri cu glare gi'e xamgu. Xu do gunka?",
        translation: 'Olá! O dia está quente e bom. Você trabalha?',
        emoji: '🌤️',
        choices: [
          { text: "Go'i! Mi mikce.", translation: 'Sim! Eu sou médico.', next: 'trabalho' },
          { text: 'Le snime cu blabi.', translation: 'A neve é branca.', wrong: 'Isso não responde se você trabalha. Use "go\'i" ou "na go\'i".' },
        ],
      },
      trabalho: {
        text: "Ki'e! Xu do tadni ca'o?",
        translation: 'Obrigado! Você está estudando agora?',
        emoji: '📚',
        choices: [
          { text: "Go'i! Mi ca'o tadni la lojban.", translation: 'Sim! Eu estou estudando lojban agora.', next: 'final_bo' },
          { text: 'Le brife cu barda.', translation: 'O vento está forte.', wrong: 'Isso não responde sobre estudar. Use "go\'i" ou "na go\'i".' },
        ],
      },
      final_bo: {
        text: '.ui Mi gleki!',
        translation: '(Alegria!) Eu estou feliz!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um dia bom', message: 'Vocês falaram do tempo e do trabalho — mais uma conversa de verdade em lojban.' },
      },
    },
    glossary: [
      ['le donri cu glare', 'o dia está quente'],
      ['mikce / tadni', 'médico / estudar'],
      ["ca'o", 'agora (ação em andamento)'],
    ],
  },
  {
    id: 'jbo-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Le jdima e le badri',
    emoji: '🛍️',
    summary: 'Você vai a uma loja, pergunta o preço de um livro e fala de como se sente.',
    cultural_context: 'O gismu "rupnu" (dinheiro) tem como palavra-chave oficial "dollar": não é uma moeda específica, e sim o conceito geral de "unidade monetária maior" — por isso a história evita citar uma moeda certa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Coi! Xu le cukta cu kargu?',
        translation: 'Olá! O livro é caro?',
        emoji: '📖',
        choices: [
          { text: "Na go'i! Le jdima cu cmalu.", translation: 'Não! O preço é pequeno.', next: 'preco' },
          { text: 'Mi terpa le gerku.', translation: 'Eu temo o cachorro.', wrong: 'Isso não responde sobre o preço do livro. Use "go\'i" ou "na go\'i".' },
        ],
      },
      preco: {
        text: "Ki'e! Xu do gleki?",
        translation: 'Obrigado! Você está feliz?',
        emoji: '❓',
        choices: [
          { text: "Go'i! Mi gleki. Mi vecnu le cukta.", translation: 'Sim! Estou feliz. Eu vendo o livro.', next: 'final_bo' },
          { text: 'Mi tatpi.', translation: 'Eu estou cansado.', wrong: 'Isso não responde se você está feliz. Use "go\'i" ou "na go\'i".' },
        ],
      },
      final_bo: {
        text: '.ui Le spaji cu xamgu!',
        translation: '(Alegria!) A surpresa foi boa!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa surpresa', message: 'Você vendeu o livro por um bom preço — mais uma conversa de verdade em lojban.' },
      },
    },
    glossary: [
      ['jdima / kargu / cmalu', 'preço / caro / pequeno'],
      ['vecnu', 'vender'],
      ['gleki / spaji', 'feliz / surpresa'],
    ],
  },
];
