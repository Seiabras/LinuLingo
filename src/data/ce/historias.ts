import type { StorySeed } from '../types';

/** Histórias interativas do checheno — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_CE: StorySeed[] = [
  {
    id: 'ce-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Салам! Encontro em Grozny',
    emoji: '👋',
    summary: 'Você encontra Петимат em Grozny e faz a sua primeira conversa em checheno.',
    cultural_context: 'O checheno é oficial na República da Chechênia, com imprensa, literatura e ensino nas escolas locais — mas a conversa do dia a dia costuma misturar checheno e russo, as duas línguas da região.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Салам! Муха ду гIуллакхаш?',
        translation: 'Oi! Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Салам! Дика ду, баркалла.', translation: 'Oi! Estou bem, obrigado.', next: 'nome' },
          { text: 'ХIан-хIа!', translation: 'Não!', wrong: 'Петимат só perguntou como você está — responder “não” não faz sentido ainda.' },
        ],
      },
      nome: {
        text: 'Дика ду! Хьан цIе хIу ю?',
        translation: 'Que bom! Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'Сан цIе Лину ю.', translation: 'Meu nome é Linu.', next: 'final_bom' },
          { text: 'Со кIант ву.', translation: 'Eu sou um rapaz.', wrong: 'Isso não responde qual é o seu nome. Use “Сан цIе … ю”.' },
        ],
      },
      final_bom: {
        text: 'Баркалла, Лину! Хаза цIе ю.',
        translation: 'Obrigada, Linu! É um belo nome.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeira conversa!', message: 'Петимат sorri: você fez a sua primeira conversa em checheno.' },
      },
    },
    glossary: [
      ['Салам', 'oi, olá'],
      ['Муха ду гIуллакхаш?', 'como você está?'],
      ['Дика ду, баркалла', 'estou bem, obrigado'],
      ['Хьан цIе хIу ю?', 'qual é o seu nome?'],
      ['Сан цIе … ю', 'meu nome é…'],
    ],
  },
  {
    id: 'ce-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Сан доьзал: a família de Ахьмад',
    emoji: '👨‍👩‍👧',
    summary: 'Ахьмад te apresenta a família dele e conta onde cada um vive.',
    cultural_context: 'O checheno tem palavras diferentes para cada lado da família: “дада” é o avô paterno, “ненан да” o avô materno — distinções que o português não faz com “avô” sozinho.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Хьан ваша мичахь Iаш ву?',
        translation: 'Onde vive o seu irmão?',
        emoji: '🏠',
        choices: [
          { text: 'Сан ваша Москвахь Iаш ву.', translation: 'Meu irmão vive em Moscou.', next: 'irma' },
          { text: 'Сан доьзал дика ду.', translation: 'Minha família está bem.', wrong: 'Ахьмад perguntou onde o seu irmão vive, não como está a família. Diga “Сан ваша … Iаш ву”.' },
        ],
      },
      irma: {
        text: 'Дика ду! Иза мила ю, хьан йиша?',
        translation: 'Que bom! Quem é ela, a sua irmã?',
        emoji: '❓',
        choices: [
          { text: 'Иза сан йиша ю.', translation: 'Ela é minha irmã.', next: 'final_bom' },
          { text: 'Иза сан да ву.', translation: 'Ele é meu pai.', wrong: 'Ахьмад perguntou sobre a sua irmã, não sobre o seu pai. Use “Иза сан йиша ю”.' },
        ],
      },
      final_bom: {
        text: 'Баркалла! Сан доьзал а дика ду.',
        translation: 'Obrigado! Minha família também está bem.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Família apresentada!', message: 'Você e Ахьмад trocaram notícias das suas famílias em checheno.' },
      },
    },
    glossary: [
      ['Ваша', 'irmão'],
      ['Йиша', 'irmã'],
      ['Доьзал', 'família'],
      ['Iаш ву/ю', 'mora, vive'],
    ],
  },
];
