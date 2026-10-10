import type { StorySeed } from '../types';

/**
 * Histórias do aleúte — uma por nível (A1.1 e A1.2), curso incompleto. Ambientadas em Atka, a ilha do
 * dialeto padrão do curso. Falas do [OMNI] (“Aang!”, “Alqutaxt?”, “Qaĝaasakung huzuu haqakux̂”, “Kiin
 * asax̂tax̂t?”, “… asax̂takuq”, “Ukuĝaan ix̂amnakux̂”, “Ukudigada”, “Qaatunaxt”, “Qanaang uma ii?”,
 * “Tutalagakuq”) e da sintaxe do [WIKI] (“Tayaĝux̂ awakux̂”), com a tradução deles.
 */
export const STORIES_ALE: StorySeed[] = [
  {
    id: 'ale-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Aang!',
    emoji: '🛬',
    summary: 'O Linu chega à ilha de Atka, nas Aleutas, e é recebido em aleúte.',
    cultural_context:
      'Atka fica no meio da corrente das ilhas Aleutas. É a ilha que dá nome ao dialeto ocidental do aleúte, o atkan, o da gramática de conversa “How the Atkans Talk”, de Anna Berge e Moses Dirks.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Aang! Qaĝaasakung huzuu haqakux̂!',
        translation: 'Olá! Obrigado a todos por virem!',
        emoji: '👋',
        choices: [
          { text: 'Aang! Qaĝaasakung!', translation: 'Olá! Obrigado!', next: 'nome' },
          { text: 'Ukudigada!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Cumprimente: “Aang!”.' },
        ],
      },
      nome: {
        text: 'Kiin asax̂tax̂t?',
        translation: 'Qual é o seu nome?',
        emoji: '🏷️',
        choices: [
          { text: 'Linu asax̂takuq.', translation: 'Meu nome é Linu.', next: 'final' },
          { text: 'Qanaang uma ii?', translation: 'Quanto custa isto?', wrong: 'Perguntaram o seu nome. Diga “Linu asax̂takuq”.' },
        ],
      },
      final: {
        text: 'Ukuĝaan ix̂amnakux̂!',
        translation: 'Que bom te ver!',
        emoji: '🤗',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você cumprimentou, agradeceu e disse o seu nome em aleúte logo na chegada a Atka.' },
      },
    },
    glossary: [
      ['Aang', 'olá; sim'],
      ['Qaĝaasakung', 'obrigado'],
      ['Kiin asax̂tax̂t?', 'qual é o seu nome?'],
      ['Ukuĝaan ix̂amnakux̂', 'que bom te ver'],
    ],
  },
  {
    id: 'ale-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Qaatunaxt!',
    emoji: '🐟',
    summary: 'Na casa de uma família de Atka, o Linu é convidado para comer peixe.',
    cultural_context:
      'Nas ilhas Aleutas, a comida vem do mar: salmão, linguado, bacalhau. E muitas palavras da cozinha vieram do russo, como “chaasxix̂” (xícara) e “yaavlukax̂” (maçã).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Tayaĝux̂ awakux̂. Qaatunaxt!',
        translation: 'O homem está trabalhando. Bom apetite!',
        emoji: '🍽️',
        choices: [
          { text: 'Qaĝaasakung!', translation: 'Obrigado!', next: 'peixe' },
          { text: 'Tutalagakuq.', translation: 'Não entendo.', wrong: 'Desejaram bom apetite! Agradeça: “Qaĝaasakung!”.' },
        ],
      },
      peixe: {
        text: 'Adgayux? Chagix̂?',
        translation: 'Salmão? Linguado?',
        emoji: '🐟',
        choices: [
          { text: 'Adgayux. Qaĝaasakung!', translation: 'Salmão. Obrigado!', next: 'final' },
          { text: 'Sabaakax̂.', translation: 'Cachorro.', wrong: 'Ofereceram peixe. Escolha um: “Adgayux” ou “Chagix̂”.' },
        ],
      },
      final: {
        text: 'Ukudigal!',
        translation: 'Boa sorte!',
        emoji: '🍀',
        ending: { tone: 'bom', title: 'Qaĝaasakung!', message: 'Você agradeceu o “Qaatunaxt!” e escolheu o salmão — e se despediram com um “Ukudigal!”.' },
      },
    },
    glossary: [
      ['Qaatunaxt', 'bom apetite'],
      ['adgayux', 'salmão'],
      ['chagix̂', 'linguado'],
      ['Ukudigal', 'boa sorte'],
    ],
  },
];
