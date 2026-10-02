import type { StorySeed } from '../types';

/**
 * Histórias interativas do tétum — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. Toda
 * frase usa só palavras e regras já conferidas (ver vocabulario.ts e gramatica.ts); palavras extras
 * que aparecem só aqui (ex.: “ho”, “favor ida”, “mai”, “gosta”) vêm da Wikipédia e da Wikiviagem — ver
 * o glossário de cada história.
 */
export const STORIES_TDT: StorySeed[] = [
  {
    id: 'tdt-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bondia iha merkadu',
    emoji: '☕',
    summary: 'Você conhece Alita perto do mercado de Díli e faz a sua primeira conversa em tétum.',
    cultural_context: '“Merkadu” (mercado) é um dos muitos empréstimos do português no tétum-díli, a variedade de mercado falada na capital de Timor-Leste.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Bondia! Ha'u nia naran Alita. Ita nia naran saida?",
        translation: 'Bom dia! Meu nome é Alita. Qual é o seu nome?',
        emoji: '🙋‍♀️',
        choices: [
          { text: "Ha'u nia naran Ana.", translation: 'Meu nome é Ana.', next: 'nome_ok' },
          { text: 'Lae.', translation: 'Não.', wrong: "Alita perguntou o seu nome: “lae” não responde a isso. Diga “Ha'u nia naran…”." },
        ],
      },
      nome_ok: {
        text: 'Diak! Ita diak ka lae?',
        translation: 'Legal! Você está bem ou não?',
        emoji: '😊',
        choices: [
          { text: "Ha'u diak, obrigadu.", translation: 'Estou bem, obrigado.', next: 'diak_resposta' },
          { text: "Ha'u diak, obrigada.", translation: 'Estou bem, obrigada.', next: 'diak_resposta' },
          { text: 'Bee.', translation: 'Água.', wrong: "Isso não responde se você está bem. Diga “Ha'u diak”." },
        ],
      },
      diak_resposta: {
        text: "Loos! Ha'u iha kafé ho paun. Ita hemu kafé ka lae?",
        translation: 'Certo! Eu tenho café com pão. Você bebe café ou não?',
        emoji: '☕',
        choices: [
          { text: 'Loos, favor ida!', translation: 'Sim, por favor!', next: 'final_bueno' },
          { text: 'Lae, obrigadu.', translation: 'Não, obrigado.', next: 'final_lae' },
          { text: "Ha'u nia naran Ana.", translation: 'Meu nome é Ana.', wrong: 'Isso não responde ao convite de café. Diga “Loos” ou “Lae”.' },
        ],
      },
      final_bueno: {
        text: 'Diak! Obrigada, Ana!',
        translation: 'Legal! Obrigada, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Kafé ho paun!', message: 'Você tomou café com a Alita e praticou tétum pela primeira vez.' },
      },
      final_lae: {
        text: "Loos. Ha'u ba lai!",
        translation: 'Tudo bem. Eu vou indo!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Até a próxima', message: 'Você recusou educadamente o convite da Alita, mas já trocou os primeiros cumprimentos em tétum.' },
      },
    },
    glossary: [
      ['ho', 'com'],
      ['favor ida', 'por favor'],
      ['merkadu', 'mercado'],
    ],
  },
  {
    id: 'tdt-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: "Iha Mário nia uma",
    emoji: '🐕',
    summary: 'Mário convida você para conhecer a casa e a família dele — e o cachorro.',
    cultural_context: 'A posse em tétum sempre passa pela partícula “nia”: “Mário nia uma” é “a casa do Mário”, literalmente “Mário, de, casa”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Bondia! Mai ba ha'u nia uma?",
        translation: 'Bom dia! Vem até a minha casa?',
        emoji: '🏠',
        choices: [
          { text: "Loos, ha'u mai.", translation: 'Certo, eu vou.', next: 'uma' },
          { text: 'Lae, obrigada.', translation: 'Não, obrigada.', next: 'final_lae' },
          { text: "Ha'u nia naran Ana.", translation: 'Meu nome é Ana.', wrong: 'Isso não responde ao convite de Mário. Diga “Loos” (sim) ou “Lae” (não).' },
        ],
      },
      uma: {
        text: "Diak! Ha'u nia uma boot. Iha asu ida iha uma.",
        translation: 'Legal! Minha casa é grande. Tem um cachorro em casa.',
        emoji: '🐕',
        choices: [
          { text: "Ha'u gosta asu.", translation: 'Eu gosto de cachorro.', next: 'resposta' },
          { text: "Ha'u la gosta asu.", translation: 'Eu não gosto de cachorro.', next: 'resposta' },
          { text: 'Bee.', translation: 'Água.', wrong: "Isso não diz se você gosta do cachorro. Diga “Ha'u gosta asu” ou “Ha'u la gosta asu”." },
        ],
      },
      resposta: {
        text: "Ha'u nia inan no aman iha uma.",
        translation: 'Minha mãe e meu pai estão em casa.',
        emoji: '👪',
        choices: [
          { text: 'Loos, diak!', translation: 'Certo, legal!', next: 'final_bueno' },
          { text: "Ha'u hatene.", translation: 'Eu sei. / Entendi.', next: 'final_bueno' },
          { text: 'Asu.', translation: 'Cachorro.', wrong: "Isso não é uma resposta para o que Mário disse. Diga “Loos, diak!” ou “Ha'u hatene.”." },
        ],
      },
      final_bueno: {
        text: "Diak! Obrigadu, Ana!",
        translation: 'Legal! Obrigado, Ana!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma amizade nova', message: 'Você visitou a casa de Mário, conheceu a família dele e o cachorro, e praticou tétum.' },
      },
      final_lae: {
        text: "Loos. Ha'u ba lai!",
        translation: 'Tudo bem. Eu vou indo!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Outra hora', message: 'Você recusou o convite de Mário, mas educadamente, em tétum.' },
      },
    },
    glossary: [
      ['mai', 'vir'],
      ['gosta', 'gostar (de)'],
      ['inan no aman', 'mãe e pai'],
    ],
  },
];
