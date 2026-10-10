import type { StorySeed } from '../types';

/**
 * Histórias do inuktitut — uma por nível (A1.1 e A1.2), curso incompleto. Ambientadas em Iqaluit, a
 * capital de Nunavut. Falas do [OMNI] (“ᑐᙵᓱᒋᑦ”, “ᖃᓄᐃᑉᐱᑦ?”, “ᖃᓄᐃᙱᑦᑐᖓ”, “ᖁᔭᓐᓇᒦᒃ”, “ᐃᓛᓕ”,
 * “ᑭᓇᐅᕕᑦ?”, “ᐅᓪᓗᖃᑦᓯᐊᕆᑦ”, “ᐊᑏ ᓂᕆᓕᖅᑕ”) e do [WIKT] (“ᑏ”, “ᑳᐱ”, “ᐄ”, “ᐋᒃᑲ”); “ᐅᕙᖓ ᓕᓅᔪᖓ” e
 * “ᑳᒃᑐᖓ” foram montadas por nós (ver curriculo.ts).
 */
export const STORIES_IU: StorySeed[] = [
  {
    id: 'iu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ᑐᙵᓱᒋᑦ!',
    emoji: '🛬',
    summary: 'O Linu chega a Iqaluit, a capital de Nunavut, e é recebido com um “bem-vindo” em inuktitut.',
    cultural_context:
      'Iqaluit, a capital de Nunavut, fica na ilha de Baffin. O nome quer dizer “os lugares de muitos peixes”. As placas da cidade aparecem em inuktitut, no silabário, e em inglês e francês.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ᑐᙵᓱᒋᑦ! ᖃᓄᐃᑉᐱᑦ?',
        translation: 'Bem-vindo! Como vai?',
        emoji: '🛬',
        choices: [
          { text: 'ᖃᓄᐃᙱᑦᑐᖓ. ᖁᔭᓐᓇᒦᒃ!', translation: 'Estou bem. Obrigado!', next: 'nome' },
          { text: 'ᑕᕝᕙᐅᔪᑎᑦ!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Responda como está: “ᖃᓄᐃᙱᑦᑐᖓ”.' },
        ],
      },
      nome: {
        text: 'ᑭᓇᐅᕕᑦ?',
        translation: 'Qual é o seu nome? (quem é você?)',
        emoji: '🏷️',
        choices: [
          { text: 'ᐅᕙᖓ ᓕᓅᔪᖓ.', translation: 'Eu sou o Linu.', next: 'final' },
          { text: 'ᐅᓇ ᖃᔅᓯᑦ?', translation: 'Quanto custa isto?', wrong: 'Perguntaram quem você é. Diga “ᐅᕙᖓ ᓕᓅᔪᖓ”.' },
        ],
      },
      final: {
        text: 'ᐅᓪᓗᖃᑦᓯᐊᕆᑦ!',
        translation: 'Tenha um bom dia!',
        emoji: '🌞',
        ending: { tone: 'bom', title: 'ᖁᔭᓐᓇᒦᒃ!', message: 'Você respondeu ao “ᖃᓄᐃᑉᐱᑦ?” e se apresentou em inuktitut logo na chegada a Iqaluit.' },
      },
    },
    glossary: [
      ['ᑐᙵᓱᒋᑦ', 'bem-vindo'],
      ['ᖃᓄᐃᑉᐱᑦ?', 'como vai?'],
      ['ᑭᓇᐅᕕᑦ?', 'quem é você?'],
      ['ᐅᓪᓗᖃᑦᓯᐊᕆᑦ', 'tenha um bom dia'],
    ],
  },
  {
    id: 'iu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ᐊᑏ ᓂᕆᓕᖅᑕ!',
    emoji: '🍲',
    summary: 'Uma família convida o Linu para comer e pergunta se ele quer chá ou café.',
    cultural_context:
      'Dividir a comida com a família e os vizinhos é parte da cultura inuíte, e o chá acompanha as visitas. A comida do campo — peixe, foca, caribu — continua no centro da mesa em muitas casas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ᐊᑏ ᓂᕆᓕᖅᑕ!',
        translation: 'Vamos comer!',
        emoji: '🍲',
        choices: [
          { text: 'ᐄ! ᑳᒃᑐᖓ.', translation: 'Sim! Estou com fome.', next: 'bebida' },
          { text: 'ᑐᑭᓯᙱᑦᑐᖓ… ᑕᕝᕙᐅᔪᑎᑦ!', translation: 'Não entendo… Tchau!', wrong: 'É um convite para comer! Aceite: “ᐄ! ᑳᒃᑐᖓ.”' },
        ],
      },
      bebida: {
        text: 'ᑏ? ᑳᐱ?',
        translation: 'Chá? Café?',
        emoji: '🍵',
        choices: [
          { text: 'ᑏ, ᖁᔭᓐᓇᒦᒃ.', translation: 'Chá, obrigado.', next: 'final' },
          { text: 'ᕿᒻᒥᖅ.', translation: 'Cachorro.', wrong: 'Ofereceram chá ou café. Escolha um: “ᑏ” ou “ᑳᐱ”.' },
        ],
      },
      final: {
        text: 'ᐃᓛᓕ!',
        translation: 'De nada!',
        emoji: '😊',
        ending: { tone: 'bom', title: 'ᐊᑏ ᓂᕆᓕᖅᑕ!', message: 'Você aceitou o convite, escolheu o chá e agradeceu — e a família respondeu “ᐃᓛᓕ”.' },
      },
    },
    glossary: [
      ['ᐊᑏ ᓂᕆᓕᖅᑕ', 'vamos comer'],
      ['ᑳᒃᑐᖓ', 'estou com fome'],
      ['ᑏ', 'chá'],
      ['ᐃᓛᓕ', 'de nada'],
    ],
  },
];
