import type { StorySeed } from '../types';

/**
 * Histórias interativas do jejuense — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As fontes consultadas dão poucas frases completas prontas (a saudação de boas-vindas e a
 * construção de apresentação com “-라마씀”, atestada na página de gramática da Swarthmore — ver
 * gramatica.ts); por isso estas histórias ficam deliberadamente simples.
 */
export const STORIES_JJE: StorySeed[] = [
  {
    id: 'jje-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: '혼저옵서예! Encontro em Jeju',
    emoji: '👋',
    summary: 'Você encontra Suyeon na ilha de Jeju e faz a sua primeira conversa em jejuense.',
    cultural_context: '“혼저옵서예!” é a saudação de boas-vindas mais conhecida da ilha, usada até em placas de turismo — um símbolo do jeito acolhedor de receber visita em Jeju.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '혼저옵서예!',
        translation: 'Oi, bem-vindo!',
        emoji: '🙋‍♀️',
        choices: [
          { text: '고맙수다!', translation: 'Obrigado!', next: 'nome' },
          { text: '무싱거?', translation: 'O quê?', wrong: 'Suyeon só te deu as boas-vindas — perguntar “o quê?” de volta não responde a saudação ainda.' },
        ],
      },
      nome: {
        text: '나는 수연이라마씀.',
        translation: 'Eu sou a Suyeon.',
        emoji: '❓',
        choices: [
          { text: '나는 린주라마씀.', translation: 'Eu sou o Linu.', next: 'final_bom' },
          { text: '고맙수다.', translation: 'Obrigado.', wrong: 'Suyeon disse o nome dela — agora é a sua vez de dizer o seu nome, com “나는 ___ 라마씀”.' },
        ],
      },
      final_bom: {
        text: '고맙수다, 린주!',
        translation: 'Obrigada, Linu!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Primeiro encontro!', message: 'Você fez a sua primeira conversa em jejuense, na ilha de Jeju.' },
      },
    },
    glossary: [
      ['혼저옵서예', 'oi, bem-vindo'],
      ['고맙수다', 'obrigado'],
      ['나는 … 라마씀', 'eu sou …'],
    ],
  },
  {
    id: 'jje-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: '어멍, 아방, 예펜: as palavras de Suyeon',
    emoji: '👨‍👩‍👧',
    summary: 'Suyeon lista algumas palavras de pessoa, e você reconhece qual delas falta.',
    cultural_context: 'Jeju também é famosa pelas haenyeo (mulheres mergulhadoras que colhem frutos do mar sem equipamento de respiração) — uma tradição única da ilha, reconhecida pela UNESCO como Patrimônio Cultural Imaterial da Humanidade desde 2016.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '어멍, 아방, 사름.',
        translation: 'Mãe, pai, pessoa.',
        emoji: '👨‍👩‍👧',
        choices: [
          { text: '예펜.', translation: 'Mulher.', next: 'final_bom' },
          { text: '호나.', translation: 'Um.', wrong: '“호나” é um número, não combina com a lista de palavras de pessoa que Suyeon está mostrando.' },
        ],
      },
      final_bom: {
        text: '고맙수다!',
        translation: 'Obrigada!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Palavras reconhecidas!', message: 'Você completou a lista de palavras de pessoa que Suyeon usou, em jejuense.' },
      },
    },
    glossary: [
      ['어멍', 'mãe'],
      ['아방', 'pai'],
      ['사름', 'pessoa'],
      ['예펜 / 소나이', 'mulher / homem'],
    ],
  },
];
