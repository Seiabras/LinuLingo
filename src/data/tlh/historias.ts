import type { StorySeed } from '../types';

/** Histórias interativas do klingon — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_TLH: StorySeed[] = [
  {
    id: 'tlh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'nuqneH!',
    emoji: '🖖',
    summary: 'Uma nave klingon se aproxima, e alguém te saúda do jeito mais direto possível: perguntando o que você quer.',
    cultural_context: 'A saudação klingon real, “nuqneH”, significa literalmente “o que você quer?” — Marc Okrand escolheu de propósito não criar uma palavra para “olá” social, porque isso não combinaria com a cultura direta e guerreira do povo klingon de ficção.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'nuqneH!',
        translation: 'O que você quer? (a saudação klingon)',
        emoji: '🖖',
        choices: [
          { text: 'nuqneH! tlhIngan jIH.', translation: 'Olá! Eu sou klingon.', next: 'identidade' },
          { text: "Qapla'!", translation: 'Sucesso!/Tchau!', wrong: 'Isso é uma despedida, mas a conversa está só começando — responda ao cumprimento primeiro.' },
        ],
      },
      identidade: {
        text: "majQa'! tlhIngan SoH'a'?",
        translation: 'Muito bem! Você é klingon?',
        emoji: '😊',
        choices: [
          { text: 'HISlaH, tlhIngan jIH.', translation: 'Sim, eu sou klingon.', next: 'final_bo' },
          { text: 'qan vav.', translation: 'O pai é velho.', wrong: "Isso não responde se você é klingon. Tente “HISlaH” (sim) ou “ghobe'” (não)." },
        ],
      },
      final_bo: {
        text: "Qapla'!",
        translation: 'Sucesso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeiro contato!', message: 'Você respondeu à saudação mais direta da galáxia e já disse quem é — em klingon de verdade.' },
      },
    },
    glossary: [
      ['nuqneH', 'oi/olá (literalmente, “o que você quer?”)'],
      ['tlhIngan jIH', 'eu sou klingon'],
      ["Qapla'", 'sucesso!/tchau'],
    ],
  },
  {
    id: 'tlh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'juHDaq',
    emoji: '🏠',
    summary: 'Em casa, você conhece a família de um novo amigo klingon e aprende a perguntar quem é quem.',
    cultural_context: "O vocabulário de família do klingon (“vav”, pai; “SoS”, mãe; “puqloD”, filho; “puqbe'”, filha...) vem do “The Klingon Dictionary” e das páginas que o próprio Klingon Language Institute publicou para apoiar o curso de klingon que já existiu no Duolingo.",
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'juHDaq. nuqneH!',
        translation: 'Em casa. Olá!',
        emoji: '🏠',
        choices: [
          { text: "nuqneH! SuvwI' jIH.", translation: 'Olá! Eu sou guerreiro.', next: 'familia' },
          { text: "Qapla'!", translation: 'Sucesso!/Tchau!', wrong: 'A conversa está só começando — responda ao cumprimento primeiro.' },
        ],
      },
      familia: {
        text: "majQa'! vav ghaH'a'?",
        translation: 'Muito bem! Ele é o pai?',
        emoji: '👨',
        choices: [
          { text: 'HISlaH, vav ghaH.', translation: 'Sim, ele é o pai.', next: 'final_bo' },
          { text: "qatlho'!", translation: 'Obrigado!', wrong: "Isso não responde se ele é o pai. Tente “HISlaH” (sim) ou “ghobe'” (não)." },
        ],
      },
      final_bo: {
        text: "Qapla'!",
        translation: 'Sucesso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma família klingon', message: 'Você conheceu uma família klingon e já entende os cumprimentos e as perguntas de identidade.' },
      },
    },
    glossary: [
      ['vav / SoS', 'pai / mãe'],
      ["SuvwI'", 'guerreiro'],
      ["HISlaH / ghobe'", 'sim / não'],
    ],
  },
];
