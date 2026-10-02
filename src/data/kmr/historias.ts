import type { StorySeed } from '../types';

/**
 * Histórias interativas do curmanji — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Todas as falas combinam só palavras e frases confirmadas nas fontes do cabeçalho de vocabulario.ts
 * (Wikivoyage e Omniglot para as frases de saudação; Wiktionary para as conjugações). Em cada nó, as
 * escolhas levam a outro nó ou mostram uma dica e deixam o jogador tentar de novo — sem becos sem
 * saída — e é sempre o jogador que escolhe o que dizer, nunca um personagem decidindo por ele.
 */
export const STORIES_KMR: StorySeed[] = [
  {
    id: 'kmr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Silav! Danasîn',
    emoji: '👋',
    summary: 'Alguém te cumprimenta e pergunta como você está e qual é o seu nome: sua primeira conversa em curmanji.',
    cultural_context: '“Silav” (do árabe “paz”) é a saudação informal mais comum entre curdos; “tu” é a forma de tratamento entre amigos, reservando “hûn” para situações formais.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Silav! Ez baş im. Tu çawa yî?',
        translation: 'Oi! Eu estou bem. Como você está?',
        emoji: '🙋',
        choices: [
          { text: 'Ez baş im, spas!', translation: 'Eu estou bem, obrigado!', next: 'nav' },
          { text: 'Bi xatirê te!', translation: 'Até logo!', wrong: 'A pessoa acabou de perguntar como você está — despedir-se agora seria estranho. Responda primeiro com “Ez baş im”.' },
        ],
      },
      nav: {
        text: 'Baş e! Navê te çi ye?',
        translation: 'Que bom! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Navê min Linu e.', translation: 'Meu nome é Linu.', next: 'final' },
          { text: 'Ez av dixwazim.', translation: 'Eu quero água.', wrong: 'Isso não responde qual é o seu nome. Use “Navê min … e”.' },
        ],
      },
      final: {
        text: 'Rojbaş, Linu!',
        translation: 'Bom dia, Linu!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Baş e!', message: 'Você fez sua primeira apresentação em curmanji: cumprimento, como está e o seu nome.' },
      },
    },
    glossary: [
      ['silav', 'oi, olá'],
      ['tu çawa yî', 'como você está'],
      ['navê min … e', 'meu nome é …'],
      ['bi xatirê te', 'até logo'],
    ],
  },
  {
    id: 'kmr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Dayika min, nan û av',
    emoji: '👪',
    summary: 'Você conversa sobre a família e escolhe o que vai comer ou beber.',
    cultural_context: 'Perguntar pela família logo no início da conversa é comum entre curdos, assim como oferecer comida e bebida a quem chega de visita.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Silav! Dayika min baş e. Û dayika te?',
        translation: 'Oi! Minha mãe está bem. E a sua?',
        emoji: '👪',
        choices: [
          { text: 'Dayika min baş e.', translation: 'Minha mãe está bem.', next: 'comida' },
          { text: 'Ez av dixwazim.', translation: 'Eu quero água.', wrong: 'Isso não é uma resposta sobre a sua mãe. Diga “Dayika min baş e”.' },
        ],
      },
      comida: {
        text: 'Baş e! Tu çi dixwazî?',
        translation: 'Que bom! O que você quer?',
        emoji: '🍽️',
        choices: [
          { text: 'Ez nan dixwim.', translation: 'Eu como pão.', next: 'final' },
          { text: 'Ez şîr vedixwim.', translation: 'Eu bebo leite.', next: 'final' },
          { text: 'Bi xatirê te!', translation: 'Até logo!', wrong: 'A pessoa ofereceu comida e bebida — despedir-se agora seria estranho. Escolha o que você quer comer ou beber.' },
        ],
      },
      final: {
        text: 'Spas! Bi xatirê te.',
        translation: 'Obrigado! Até logo.',
        emoji: '🙏',
        ending: { tone: 'bom', title: 'Spas!', message: 'Você conversou sobre a família e pediu comida ou bebida em curmanji.' },
      },
    },
    glossary: [
      ['dayika min baş e', 'minha mãe está bem'],
      ['tu çi dixwazî', 'o que você quer'],
      ['ez nan dixwim', 'eu como pão'],
      ['ez şîr vedixwim', 'eu bebo leite'],
    ],
  },
];
