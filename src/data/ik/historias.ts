import type { StorySeed } from '../types';

/**
 * Histórias do inupiaque — uma por nível (A1.1 e A1.2), curso incompleto. Ambientadas em Utqiaġvik, a
 * cidade mais ao norte do Alasca. Falas do [OMNI] (“Paġlagikpiñ”, “Qanuq itpich?”, “Nakuuruŋa,
 * quyanaq”, “Kinauvin?”, “Atiġa …”, “Uvluqatchiaq”, “Kaŋiqsiŋitchuŋa”) e dos exemplos dos verbetes do
 * [WIKT] (“Iñuuruŋa Kisaġviŋmi”, “Maktak niġiruni nakuuruq”, “Saiyu imiqtuni nakuuruq”, “Kuuppiaq
 * imiqtuni nakuuruq”, “Suna pisukpiuŋ?”, “Ii”), com a tradução deles.
 */
export const STORIES_IK: StorySeed[] = [
  {
    id: 'ik-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Paġlagikpiñ!',
    emoji: '🛬',
    summary: 'O Linu chega a Utqiaġvik, no topo do Alasca, e é recebido com um “bem-vindo” em inupiaque.',
    cultural_context:
      'Utqiaġvik, que até 2016 se chamava Barrow, é a cidade mais ao norte dos Estados Unidos e a maior da Encosta Norte do Alasca. Só se chega lá de avião.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Paġlagikpiñ! Qanuq itpich?',
        translation: 'Bem-vindo! Como vai?',
        emoji: '🛬',
        choices: [
          { text: 'Nakuuruŋa, quyanaq!', translation: 'Estou bem, obrigado!', next: 'nome' },
          { text: 'Tautugniaqmiġikpiñ!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Responda como está: “Nakuuruŋa”.' },
        ],
      },
      nome: {
        text: 'Kinauvin?',
        translation: 'Qual é o seu nome? (quem é você?)',
        emoji: '🏷️',
        choices: [
          { text: 'Atiġa Linu. Iñuuruŋa Kisaġviŋmi.', translation: 'Meu nome é Linu. Eu moro em Anchorage.', next: 'final' },
          { text: 'Una qavsit?', translation: 'Quanto custa isto?', wrong: 'Perguntaram o seu nome. Diga “Atiġa Linu”.' },
        ],
      },
      final: {
        text: 'Uvluqatchiaq!',
        translation: 'Tenha um bom dia!',
        emoji: '🌞',
        ending: { tone: 'bom', title: 'Quyanaq!', message: 'Você respondeu ao “Qanuq itpich?” e se apresentou em inupiaque logo na chegada a Utqiaġvik.' },
      },
    },
    glossary: [
      ['Paġlagikpiñ', 'bem-vindo'],
      ['Qanuq itpich?', 'como vai?'],
      ['Kinauvin?', 'quem é você?'],
      ['Iñuuruŋa Kisaġviŋmi', 'eu moro em Anchorage'],
    ],
  },
  {
    id: 'ik-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Maktak niġiruni nakuuruq',
    emoji: '🐋',
    summary: 'Depois da caça à baleia, uma família oferece maktak ao Linu e pergunta se ele quer chá ou café.',
    cultural_context:
      'Em Utqiaġvik, a caça à baleia-da-groenlândia reúne a cidade, e a carne e o maktak são divididos entre as famílias. O chá e o café acompanham as visitas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Maktak niġiruni nakuuruq!',
        translation: 'O maktak é bom de comer!',
        emoji: '🐋',
        choices: [
          { text: 'Ii, quyanaq!', translation: 'Sim, obrigado!', next: 'bebida' },
          { text: 'Kaŋiqsiŋitchuŋa… Tautugniaqmiġikpiñ!', translation: 'Não entendo… Tchau!', wrong: 'Estão oferecendo maktak! Aceite: “Ii, quyanaq!”.' },
        ],
      },
      bebida: {
        text: 'Suna pisukpiuŋ? Saiyu? Kuuppiaq?',
        translation: 'O que você quer? Chá? Café?',
        emoji: '🍵',
        choices: [
          { text: 'Saiyu. Saiyu imiqtuni nakuuruq.', translation: 'Chá. O chá é bom de beber.', next: 'final' },
          { text: 'Qimmiq.', translation: 'Cachorro.', wrong: 'Ofereceram chá ou café. Escolha um: “Saiyu” ou “Kuuppiaq”.' },
        ],
      },
      final: {
        text: 'Piḷḷuataqtutin!',
        translation: 'Muito bem!',
        emoji: '😊',
        ending: { tone: 'bom', title: 'Quyanaq!', message: 'Você aceitou o maktak, escolheu o chá e ainda explicou que ele é bom de beber.' },
      },
    },
    glossary: [
      ['maktak', 'pele de baleia com gordura'],
      ['niġiruni nakuuruq', 'é bom de comer'],
      ['saiyu', 'chá'],
      ['Piḷḷuataqtutin!', 'você foi bem!'],
    ],
  },
];
