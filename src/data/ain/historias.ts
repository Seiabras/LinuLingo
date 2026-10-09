import type { StorySeed } from '../types';

/** Histórias interativas do ainu — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_AIN: StorySeed[] = [
  {
    id: 'ain-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Irankarapte! Encontro em Hokkaido',
    emoji: '👋',
    summary: 'Você encontra Rera numa aldeia aynu de Hokkaido e faz a sua primeira conversa em ainu.',
    cultural_context: 'O ainu está criticamente ameaçado: o Endangered Languages Project relatava em 2025 só duas falantes nativas. Mas cursos de revitalização em Hokkaido vêm formando “neofalantes” — gente que aprende a língua sem tê-la em casa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Irankarapte! E-pirka?',
        translation: 'Oi! Você está bem?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Irankarapte! Pirka!', translation: 'Oi! Estou bem!', next: 'nome' },
          { text: "Hioy'oy!", translation: 'Obrigado!', wrong: 'Rera acabou de te cumprimentar e perguntar como você está: agradecer agora, sem responder, seria estranho.' },
        ],
      },
      nome: {
        text: 'Eani, Linu ne?',
        translation: 'Você é o Linu?',
        emoji: '❓',
        choices: [
          { text: 'Kuani, Linu ne.', translation: 'Eu sou o Linu.', next: 'final_bom' },
          { text: 'Seta isam.', translation: 'Não tem cachorro.', wrong: 'Isso não responde se você é o Linu. Use “Kuani, … ne”.' },
        ],
      },
      final_bom: {
        text: 'Iyairaykere, Linu! Pirka aynu ne.',
        translation: 'Obrigada, Linu! Você é uma boa pessoa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeira conversa!', message: 'Rera sorri: você fez a sua primeira conversa em ainu.' },
      },
    },
    glossary: [
      ['Irankarapte', 'oi, olá'],
      ['E-pirka?', 'você está bem?'],
      ['Kuani, … ne', 'eu sou…'],
      ['Eani, … ne?', 'você é…?'],
    ],
  },
  {
    id: 'ain-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cise pirka, kamuy ne',
    emoji: '🏠',
    summary: 'Kutek, um amigo de Hokkaido, te mostra a casa dele e fala de um urso perto da aldeia.',
    cultural_context: 'Na cosmologia aynu tradicional, “kamuy” (deus, espírito) pode ser um bicho importante, como o urso (kimunkamuy, “deus da montanha”). A casa tradicional aynu, a “cise”, é feita de madeira com o teto e as paredes cobertos de palha ou capim.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Irankarapte! Cise pirka?',
        translation: 'Oi! A casa está boa?',
        emoji: '📱',
        choices: [
          { text: 'Pirka! Kam k-e.', translation: 'Está boa! Eu como carne.', next: 'bicho' },
          { text: 'Wan, asikne, iwan.', translation: 'Dez, cinco, seis.', wrong: 'Kutek perguntou sobre a casa, não números. Use “Pirka!”.' },
        ],
      },
      bicho: {
        text: 'Kimunkamuy isam. Somo ku-nukar.',
        translation: 'Não tem urso. Eu não vi.',
        emoji: '🐻',
        choices: [
          { text: 'Pirka. Seta ne, somo kamuy ne.', translation: 'Bom. É um cachorro, não um deus/urso.', next: 'final_bom' },
          { text: 'Wakka pirka.', translation: 'A água é boa.', wrong: 'Kutek estava falando do urso. Responda sobre o bicho.' },
        ],
      },
      final_bom: {
        text: 'Iyairaykere! Mosir pirka, Hokkaido.',
        translation: 'Obrigado! A terra é boa, Hokkaido.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo!', message: 'Você ganhou um novo amigo em Hokkaido, Kutek.' },
      },
    },
    glossary: [
      ['Cise', 'casa'],
      ['Kamuy', 'deus, espírito; bicho importante'],
      ['Kimunkamuy', 'urso'],
      ['Mosir', 'terra, mundo'],
    ],
  },
];
