import type { StorySeed } from '../types';

/** Histórias interativas do tamazight — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_ZGH: StorySeed[] = [
  {
    id: 'zgh-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Azul! Encontro no mercado',
    emoji: '👋',
    summary: 'Você encontra Yamna num mercado no Marrocos e faz a sua primeira conversa em tamazight.',
    cultural_context: 'O tamazight é oficial no Marrocos desde 2011, lado a lado com o árabe — mas no dia a dia, sobretudo nas cidades do interior e nas montanhas do Atlas, é a língua que se ouve primeiro no mercado.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Azul! Amek?',
        translation: 'Oi! Como [vai]?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Azul! Nekk, d Linu.', translation: 'Oi! Eu sou o Linu.', next: 'nome' },
          { text: 'Ar tufat!', translation: 'Até logo!', wrong: 'Yamna acabou de te cumprimentar: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      nome: {
        text: 'Isem-nnk?',
        translation: 'Qual é o seu nome? (a um homem)',
        emoji: '❓',
        choices: [
          { text: 'Nekk, d Linu.', translation: 'Eu sou o Linu.', next: 'final_bom' },
          { text: 'Dari aydi.', translation: 'Eu tenho um cachorro.', wrong: 'Isso não responde qual é o seu nome. Use “Nekk, d…”.' },
        ],
      },
      final_bom: {
        text: 'Tanemmirt, Linu! Ar tufat.',
        translation: 'Obrigada, Linu! Até logo.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeira conversa!', message: 'Yamna sorri: você fez a sua primeira conversa em tamazight.' },
      },
    },
    glossary: [
      ['Azul', 'oi, olá'],
      ['Amek?', 'como?'],
      ['Isem-nnk?', 'qual é o seu nome? (a um homem)'],
      ['Nekk, d…', 'eu sou…'],
    ],
  },
  {
    id: 'zgh-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Dari axxam, dari aydi',
    emoji: '🏠',
    summary: 'Karim, um amigo marroquino, pergunta pela sua casa e pelos seus bichos de estimação.',
    cultural_context: 'Nas cidades e vilarejos berberes do Marrocos, cachorros costumam ficar fora de casa, guardando o terreno — diferente do hábito comum no Brasil de criar cachorro dentro de casa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Azul! Dari axxam ameqqran. Kečč?',
        translation: 'Oi! Eu tenho uma casa grande. E você (a um homem)?',
        emoji: '📱',
        choices: [
          { text: 'Dari axxam amecṭuḥ.', translation: 'Eu tenho uma casa pequena.', next: 'bicho' },
          { text: 'Yemma. Baba.', translation: 'Mãe. Pai.', wrong: 'Karim perguntou sobre a sua casa, não sobre sua família. Use “Dari axxam…”.' },
        ],
      },
      bicho: {
        text: 'Dari aydi aberkan. Kečč?',
        translation: 'Eu tenho um cachorro preto. E você?',
        emoji: '🐕',
        choices: [
          { text: 'Dari aydi aberkan.', translation: 'Eu tenho um cachorro preto.', next: 'final_bom' },
          { text: 'Aman d uɣrum.', translation: 'Água e pão.', wrong: 'Karim perguntou sobre um bicho de estimação. Use “Dari aydi…”.' },
        ],
      },
      final_bom: {
        text: 'Ih! Tanemmirt, ar tufat!',
        translation: 'Sim! Obrigado, até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo!', message: 'Você ganhou um novo amigo no Marrocos, Karim.' },
      },
    },
    glossary: [
      ['Dari…', 'eu tenho…'],
      ['axxam', 'casa'],
      ['aydi', 'cachorro'],
      ['aberkan', 'preto'],
    ],
  },
];
