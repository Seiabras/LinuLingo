import type { StorySeed } from '../types';

/**
 * Histórias do mongol na escrita tradicional (mvf), uma por subnível do A1. As falas usam só palavras
 * de grafia conferida (vocabulario.ts) nos padrões de frase do pacote em cirílico; os dois nomes
 * próprios que o jogador pode escolher, ᠯᠢᠨᠠ (Lina) e ᠪᠠᠲᠤ (Batu, nome mongol comum), são escritos letra
 * por letra. O jogador sempre escolhe entre mais de uma resposta certa quando a pergunta é sobre ele.
 */
export const STORIES_MVF: StorySeed[] = [
  {
    id: 'mvf-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?',
    emoji: '👋',
    summary: 'Um encontro na Mongólia Interior: cumprimentar, dizer seu nome e conhecer um amigo.',
    cultural_context: 'Na Mongólia Interior, na China, a escrita tradicional aparece em placas, jornais e livros escolares ao lado do chinês. O cumprimento é o mesmo da Mongólia: “você está bem?”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?',
        translation: 'Olá! (lit. “você está bem?”)',
        emoji: '👋',
        choices: [
          { text: 'ᠰᠠᠶ᠋ᠢᠨ᠂ ᠲᠠ ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', translation: 'Bem, e você?', next: 'nome' },
          { text: 'ᠪᠠᠶᠠᠷᠲᠠᠢ!', translation: 'Tchau!', wrong: 'A pessoa acabou de cumprimentar você; despedir-se agora seria estranho. Responda com “bem, e você?”.' },
        ],
      },
      nome: {
        text: 'ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?',
        translation: 'Qual é o seu nome?',
        emoji: '❓',
        choices: [
          { text: 'ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ ᠯᠢᠨᠠ᠃', translation: 'Meu nome é Lina.', next: 'amigo' },
          { text: 'ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ ᠪᠠᠲᠤ᠃', translation: 'Meu nome é Batu.', next: 'amigo' },
          { text: 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ᠃', translation: 'Obrigado(a).', wrong: 'Isso não responde qual é o seu nome. Comece com “meu nome é…”.' },
        ],
      },
      amigo: {
        text: 'ᠡᠨᠡ ᠬᠦᠮᠦᠨ ᠮᠢᠨᠤ ᠨᠠᠶ᠋ᠢᠵᠠ᠃',
        translation: 'Esta pessoa é meu amigo/minha amiga.',
        emoji: '🤝',
        choices: [
          { text: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?', translation: 'Olá!', next: 'final' },
          { text: 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ!', translation: 'Obrigado(a)!', next: 'final2' },
          { text: 'ᠪᠠᠶᠠᠷᠲᠠᠢ!', translation: 'Tchau!', wrong: 'Seria rude se despedir sem cumprimentar quem acabou de ser apresentado. Diga “olá” ou agradeça.' },
        ],
      },
      final: {
        text: 'ᠪᠠᠶᠠᠷᠲᠠᠢ!',
        translation: 'Tchau!',
        emoji: '👋',
        ending: { tone: 'bom', title: 'ᠨᠠᠶ᠋ᠢᠵᠠ', message: 'Você se apresentou, disse seu nome e cumprimentou um novo amigo — tudo na escrita de cima pra baixo.' },
      },
      final2: {
        text: 'ᠪᠠᠶᠠᠷᠲᠠᠢ!',
        translation: 'Tchau!',
        emoji: '🚶',
        ending: { tone: 'bom', title: 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ', message: 'Você se apresentou e agradeceu por conhecer um novo amigo — tudo na escrita de cima pra baixo.' },
      },
    },
    glossary: [
      ['ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ', 'olá (lit. “você está bem?”)'],
      ['ᠪᠠᠶᠠᠷᠲᠠᠢ', 'tchau, adeus'],
      ['ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ', 'obrigado, obrigada'],
      ['ᠲᠠᠨ ᠤ', 'seu, sua (formal)'],
      ['ᠮᠢᠨᠤ', 'meu, minha'],
      ['ᠨᠡᠷ᠎ᠡ', 'nome'],
      ['ᠬᠡᠨ', 'quem'],
      ['ᠬᠦᠮᠦᠨ', 'pessoa'],
      ['ᠨᠠᠶ᠋ᠢᠵᠠ', 'amigo, amiga'],
    ],
  },
  {
    id: 'mvf-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'ᠮᠢᠨᠤ ᠭᠡᠷ',
    emoji: '⛺',
    summary: 'Uma visita a uma guer: aceitar chá ou airag e procurar o camelo.',
    cultural_context: 'Oferecer chá ou airag a quem chega é o centro da hospitalidade da estepe, e a família vive perto do próprio gado: cavalos, ovelhas, cabras e camelos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'ᠡᠨᠡ ᠮᠢᠨᠤ ᠭᠡᠷ᠃',
        translation: 'Esta é a minha casa.',
        emoji: '⛺',
        choices: [
          { text: 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ!', translation: 'Obrigado(a)!', next: 'comida' },
          { text: 'ᠪᠠᠶᠠᠷᠲᠠᠢ!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Agradeça o convite com “obrigado”.' },
        ],
      },
      comida: {
        text: 'ᠴᠠᠢ ᠤᠤᠭᠤᠬᠤ ᠤᠤ? ᠠᠶᠢᠷᠠᠭ ᠤᠤᠭᠤᠬᠤ ᠤᠤ?',
        translation: 'Quer beber chá? Quer beber airag?',
        emoji: '🍵',
        choices: [
          { text: 'ᠴᠠᠢ᠂ ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ᠃', translation: 'Chá, obrigado(a).', next: 'animais' },
          { text: 'ᠠᠶᠢᠷᠠᠭ᠂ ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ᠃', translation: 'Airag, obrigado(a).', next: 'animais' },
          { text: 'ᠡᠨᠡ ᠭᠡᠷ᠃', translation: 'Isto é uma casa.', wrong: 'Isso não responde o que você quer beber. Escolha chá ou airag.' },
        ],
      },
      animais: {
        text: 'ᠡᠨᠳ᠋ᠡ ᠮᠣᠷᠢ᠂ ᠬᠣᠨᠢ᠂ ᠢᠮᠠᠭ᠎ᠠ ᠪᠠᠢᠨ᠎ᠠ᠃',
        translation: 'Aqui há cavalo, ovelha e cabra.',
        emoji: '🐴',
        choices: [
          { text: 'ᠲᠡᠮᠡᠭᠡ ᠬᠠᠮᠢᠭ᠎ᠠ ᠪᠠᠢᠨ᠎ᠠ?', translation: 'Onde está o camelo?', next: 'final' },
          { text: 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ!', translation: 'Obrigado(a)!', next: 'final2' },
          { text: 'ᠮᠢᠨᠤ ᠨᠡᠷ᠎ᠡ ᠯᠢᠨᠠ᠃', translation: 'Meu nome é Lina.', wrong: 'Isso não tem a ver com os animais. Pergunte onde está o camelo ou agradeça.' },
        ],
      },
      final: {
        text: 'ᠲᠡᠮᠡᠭᠡ ᠲᠡᠨᠳᠡ ᠪᠠᠢᠨ᠎ᠠ᠃',
        translation: 'O camelo está ali.',
        emoji: '🐫',
        ending: { tone: 'bom', title: 'ᠭᠡᠷ', message: 'Você aceitou a hospitalidade da guer e conheceu os animais da família: cavalo, ovelha, cabra e camelo.' },
      },
      final2: {
        text: 'ᠪᠠᠶᠠᠷᠲᠠᠢ!',
        translation: 'Tchau!',
        emoji: '🚶',
        ending: { tone: 'bom', title: 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ', message: 'Você agradeceu a hospitalidade da guer, com chá ou airag, antes de se despedir.' },
      },
    },
    glossary: [
      ['ᠮᠢᠨᠤ', 'meu, minha'],
      ['ᠭᠡᠷ', 'casa, guer'],
      ['ᠴᠠᠢ', 'chá'],
      ['ᠠᠶᠢᠷᠠᠭ', 'airag (leite de égua fermentado)'],
      ['ᠤᠤᠭᠤᠬᠤ', 'beber'],
      ['ᠡᠨᠳ᠋ᠡ', 'aqui'],
      ['ᠲᠡᠨᠳᠡ', 'ali, lá'],
      ['ᠬᠠᠮᠢᠭ᠎ᠠ', 'onde'],
      ['ᠲᠡᠮᠡᠭᠡ', 'camelo'],
    ],
  },
];
