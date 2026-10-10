import type { StorySeed } from '../types';

/**
 * Histórias do alutiiq — uma por nível (A1.1 e A1.2), curso incompleto. Ambientadas em Kodiak.
 * Falas do [ANLC] (“Cama’i”, “Quyanaa”) e dos exemplos do [WIKT] (“Canaituq”, “Ai?”, “Awa ai?”, “Ca”,
 * “Sun’ami enerpak pat’snarluni macartuq”), com a tradução deles. O pão, “kelipaq”, do russo “khleb”:
 * [WIKT] s.v. “kelipaq”. O koniag de Kodiak com poucas dezenas de falantes idosos em 2010: [WIKI].
 */
export const STORIES_EMS: StorySeed[] = [
  {
    id: 'ems-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cama’i!',
    emoji: '👋',
    summary: 'O Linu chega a Kodiak e cumprimenta em alutiiq.',
    cultural_context:
      'Kodiak fica na ilha de mesmo nome, terra do dialeto koniag. Em 2010, o falar de Kodiak tinha só umas 50 pessoas que o falavam, todas idosas, e o liceu da cidade passou a ensinar a língua, a pedido dos alunos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cama’i!',
        translation: 'Olá!',
        emoji: '👋',
        choices: [
          { text: 'Cama’i!', translation: 'Olá!', next: 'repete' },
          { text: 'Canaituq.', translation: 'De nada.', wrong: 'Ninguém agradeceu ainda! Cumprimente: “Cama’i!”.' },
        ],
      },
      repete: {
        text: 'Ai?',
        translation: 'Hein? O que você disse?',
        emoji: '👂',
        choices: [
          { text: 'Cama’i! Quyanaa!', translation: 'Olá! Obrigado!', next: 'final' },
          { text: 'Ca.', translation: 'Não sei.', wrong: 'A pessoa não ouviu. Repita: “Cama’i!”.' },
        ],
      },
      final: {
        text: 'Canaituq!',
        translation: 'De nada!',
        emoji: '😌',
        ending: { tone: 'bom', title: 'Quyanaa!', message: 'Você cumprimentou, repetiu quando não ouviram e agradeceu — e ouviu o “Canaituq” de resposta.' },
      },
    },
    glossary: [
      ['Cama’i', 'olá'],
      ['Ai?', 'hein?'],
      ['Quyanaa', 'obrigado'],
      ['Canaituq', 'de nada'],
    ],
  },
  {
    id: 'ems-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pat’snarluni macartuq',
    emoji: '🌤️',
    summary: 'Numa manhã fria e de sol em Kodiak, oferecem chá ao Linu.',
    cultural_context:
      'Em alutiiq, o chá é “cayuq” e o pão, “kelipaq” — palavra que veio do russo “khleb”, como nas outras línguas do Alasca.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Sun’ami enerpak pat’snarluni macartuq.',
        translation: 'Hoje de manhã está frio, mas faz sol em Kodiak.',
        emoji: '🌤️',
        choices: [
          { text: 'Quyanaa!', translation: 'Obrigado!', next: 'cha' },
          { text: 'Maqarluni.', translation: 'Está quente.', wrong: 'Disseram que está frio, “pat’snarluni”. Agradeça a notícia: “Quyanaa!”.' },
        ],
      },
      cha: {
        text: 'Cayuq? Kelipaq?',
        translation: 'Chá? Pão?',
        emoji: '🍵',
        choices: [
          { text: 'Cayuq, quyanaa!', translation: 'Chá, obrigado!', next: 'final' },
          { text: 'Arlluk.', translation: 'Orca.', wrong: 'Ofereceram chá ou pão. Escolha um: “Cayuq” ou “Kelipaq”.' },
        ],
      },
      final: {
        text: 'Canaituq! Awa ai?',
        translation: 'De nada! É só isso?',
        emoji: '😊',
        ending: { tone: 'bom', title: 'Quyanaa!', message: 'Você entendeu o tempo, aceitou o chá e agradeceu em alutiiq.' },
      },
    },
    glossary: [
      ['pat’snarluni', 'estar frio'],
      ['macartuq', 'faz sol'],
      ['cayuq', 'chá'],
      ['Awa ai?', 'é só isso?'],
    ],
  },
];
