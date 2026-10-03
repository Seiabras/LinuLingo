import type { StorySeed } from '../types';

/** Histórias interativas do buriato — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_BXR: StorySeed[] = [
  {
    id: 'bxr-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Һайн байна, Сэсэг!',
    emoji: '👋',
    summary: 'Você conhece Сэсэг perto de um guer e troca as primeiras palavras em buriato.',
    cultural_context:
      'A maioria dos buriatos vive na República da Buriácia, na Rússia, ao redor do lago Baikal, com raízes na pecuária seminômade e na moradia tradicional em guers (en.wikipedia.org/wiki/Buryats). “Сэсэг” também é a palavra buriata atestada para “flor”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Һайн байна!',
        translation: 'Olá! (lit. “está bem!”)',
        emoji: '👋',
        choices: [
          { text: 'Һайн байна!', translation: 'Olá!', next: 'apresenta' },
          { text: 'Баярлаа.', translation: 'Obrigado.', wrong: 'Сэсэг só cumprimentou: “баярлаа” quer dizer “obrigado”, não é uma resposta a um cumprimento.' },
        ],
      },
      apresenta: {
        text: 'Би Сэсэг байнаб. Ши хэн?',
        translation: 'Eu sou a Сэсэг. Quem é você?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Би ... байнаб.', translation: 'Eu sou ... (diga o seu nome)', next: 'final_bom' },
          { text: 'Эндэ нохой байна.', translation: 'Há um cachorro aqui.', wrong: 'Isso não responde “quem é você?”: use “Би ... байнаб.”.' },
        ],
      },
      final_bom: {
        text: 'Һайн! Эндэ гэр байна.',
        translation: 'Que bom! Aqui há uma casa/guer.',
        emoji: '⛺',
        ending: { tone: 'bom', title: 'Шэнэ нүхэр', message: 'Сэсэг sorri: você fez a sua primeira conversa em buriato.' },
      },
    },
    glossary: [
      ['һайн байна', 'olá, está bem'],
      ['би ... байнаб', 'eu sou/estou ...'],
      ['нэрэ', 'nome'],
      ['гэр', 'casa, guer'],
    ],
  },
  {
    id: 'bxr-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Байгал нуур',
    emoji: '🏞️',
    summary: 'Perto do lago Baikal, você encontra animais e pratica números em buriato.',
    cultural_context:
      'O lago Baikal é o maior reservatório de água doce do mundo e o centro geográfico das terras buriatas; cavalos, cães e águias fazem parte da vida pastoril tradicional da região (en.wikipedia.org/wiki/Buryats).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Эндэ нуур байна. Эндэ загаһан байна.',
        translation: 'Há um lago aqui. Há peixe aqui.',
        emoji: '🏞️',
        choices: [
          { text: 'Загаһан һайн байна.', translation: 'O peixe é bom.', next: 'animais' },
          { text: 'Би муу байнаб.', translation: 'Eu estou mal.', wrong: 'Isso não tem relação com o que foi dito sobre o peixe.' },
        ],
      },
      animais: {
        text: 'Эндэ хоёр морин байна.',
        translation: 'Há dois cavalos aqui.',
        emoji: '🐴',
        choices: [
          { text: 'Хоёр морин ехэ байна!', translation: 'Dois cavalos grandes!', next: 'final_bom' },
          { text: 'Нэгэн гэр.', translation: 'Uma casa.', wrong: 'Isso muda de assunto: fale sobre os cavalos, não sobre uma casa.' },
        ],
      },
      final_bom: {
        text: 'Һайн! Бүргэд мүнөө эндэ байна.',
        translation: 'Que bom! Uma águia está aqui agora.',
        emoji: '🦅',
        ending: { tone: 'bom', title: 'Байгал нуурай амитад', message: 'Você descreveu os animais ao redor do lago Baikal em buriato.' },
      },
    },
    glossary: [
      ['нуур', 'lago'],
      ['загаһан', 'peixe'],
      ['морин', 'cavalo'],
      ['бүргэд', 'águia'],
    ],
  },
];
