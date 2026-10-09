import type { StorySeed } from '../types';

/**
 * Histórias interativas do curmanji — por enquanto uma por nível (A1.1 a A2.2), pacote incompleto.
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
  {
    id: 'kmr-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Îro çi roj e?',
    emoji: '📅',
    summary: 'Você combina com um amigo que dia é hoje e que horas são.',
    cultural_context: '“Duşem”, “sêşem”, “çarşem” e “pêncşem” começam com os números 2, 3, 4 e 5 — um jeito de contar os dias parecido com o português “segunda-feira”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Silav! Îro çi roj e?',
        translation: 'Oi! Que dia é hoje?',
        emoji: '📅',
        choices: [
          { text: 'Îro duşem e.', translation: 'Hoje é segunda-feira.', next: 'saet' },
          { text: 'Ez nan dixwim.', translation: 'Eu como pão.', wrong: 'Isso não responde que dia é hoje. Use “Îro … e”.' },
        ],
      },
      saet: {
        text: 'Baş e! Saet çend e?',
        translation: 'Que bom! Que horas são?',
        emoji: '🕐',
        choices: [
          { text: 'Saet neh e.', translation: 'São nove horas.', next: 'final' },
          { text: 'Duh şemî bû.', translation: 'Ontem foi sábado.', wrong: 'Isso fala de ontem, não das horas de agora. Diga “Saet … e”.' },
        ],
      },
      final: {
        text: 'Spas! Em sibê dê bibînin.',
        translation: 'Obrigado! Nos vemos amanhã.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Baş e!', message: 'Você disse o dia da semana e a hora em curmanji, sem errar nenhuma.' },
      },
    },
    glossary: [
      ['îro çi roj e', 'que dia é hoje'],
      ['îro duşem e', 'hoje é segunda-feira'],
      ['saet çend e', 'que horas são'],
    ],
  },
  {
    id: 'kmr-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Li sûkê: duh û sibê',
    emoji: '💼',
    summary: 'Você conta o que fez ontem no mercado e o que vai comprar amanhã.',
    cultural_context: '“Sûk” (mercado) vem do árabe “sūq”, a mesma raiz da palavra “souk”: outro empréstimo comum do árabe no vocabulário do dia a dia curmanji.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Silav! Te duh çi kir?',
        translation: 'Oi! O que você fez ontem?',
        emoji: '🛍️',
        choices: [
          { text: 'Min xebat kir.', translation: 'Eu trabalhei.', next: 'sibe' },
          { text: 'Ez dê kitêbek bikirim.', translation: 'Eu vou comprar um livro.', wrong: 'Isso fala do futuro, não do que você fez ontem. Use o passado: “Min … kir”.' },
        ],
      },
      sibe: {
        text: 'Baş e! Tu dê sibê çi bikî li sûkê?',
        translation: 'Que bom! O que você vai fazer amanhã no mercado?',
        emoji: '🏪',
        choices: [
          { text: 'Ez dê kitêbek bikirim.', translation: 'Eu vou comprar um livro.', next: 'final' },
          { text: 'Min xebat kir.', translation: 'Eu trabalhei.', wrong: 'Isso fala do passado, não do que vai fazer amanhã. Use o futuro: “Ez dê …”.' },
        ],
      },
      final: {
        text: 'Spas! Bi xatirê te li sûkê.',
        translation: 'Obrigado! Até logo no mercado.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Baş e!', message: 'Você contou o passado com “Min … kir” e o futuro com “Ez dê …”, sem errar nenhuma.' },
      },
    },
    glossary: [
      ['te duh çi kir', 'o que você fez ontem'],
      ['min xebat kir', 'eu trabalhei'],
      ['ez dê … bikim', 'eu vou …'],
    ],
  },
];
