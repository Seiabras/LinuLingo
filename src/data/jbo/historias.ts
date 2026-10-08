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
];
