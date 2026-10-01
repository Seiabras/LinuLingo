import type { StorySeed } from '../types';

/** Histórias interativas do lombardo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_LMO: StorySeed[] = [
  {
    id: 'lmo-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ciau a Milan',
    emoji: '👋',
    summary: 'Você conhece Anna numa praça de Milão e faz a sua primeira conversa em lombardo.',
    cultural_context: 'Milão é a maior cidade da Lombardia e o centro histórico de onde o dialeto milanês se espalhou pela região.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciau! Mi sont Anna. Cumè va?',
        translation: 'Oi! Eu sou a Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ciau! Tüt ben, grassie!', translation: 'Oi! Tudo bem, obrigado!', next: 'ben' },
          { text: 'Bona nocc!', translation: 'Boa noite!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      ben: {
        text: 'Bun! Ti te seet de Milan?',
        translation: 'Que bom! Você é de Milão?',
        emoji: '😊',
        choices: [
          { text: 'Nò, mi sont de Sampaulo.', translation: 'Não, eu sou de São Paulo.', next: 'final_bun' },
          { text: 'Mi gh’hoo on fradell.', translation: 'Eu tenho um irmão.', wrong: 'Isso não responde de onde você é. Use “mi sont de…”.' },
        ],
      },
      final_bun: {
        text: 'Bell! Benvegnüu a Milan!',
        translation: 'Que legal! Bem-vindo a Milão!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'On bun cuminciament!', message: 'Anna sorri: você fez a sua primeira conversa em lombardo.' },
      },
    },
    glossary: [
      ['ciau', 'oi, tchau'],
      ['cumè va?', 'como vai?'],
      ['mi sont de', 'eu sou de'],
      ['benvegnüu', 'bem-vindo'],
    ],
  },
  {
    id: 'lmo-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'La famiglia de Gianni',
    emoji: '👪',
    summary: 'Gianni, um amigo de Milão, pergunta pela sua família.',
    cultural_context: 'O pão e o queijo (pan e formagg) são a base de muitas refeições simples do dia a dia lombardo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciau! Ti te gh’hee fradej o sorell?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sì, mi gh’hoo on fradell.', translation: 'Sim, eu tenho um irmão.', next: 'fradell' },
          { text: 'La me cà l’è granda.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mi gh’hoo…”.' },
        ],
      },
      fradell: {
        text: 'Bell! Ti gh’hee famm? Gh’hoo pan e formagg.',
        translation: 'Legal! Você está com fome? Eu tenho pão e queijo.',
        emoji: '🍽️',
        choices: [
          { text: 'Sì, grassie mila!', translation: 'Sim, muito obrigado!', next: 'final_bun' },
          { text: 'Mi sont de Sampaulo.', translation: 'Eu sou de São Paulo.', wrong: 'Gianni ofereceu comida: responda com “sì” ou “nò, grassie”.' },
        ],
      },
      final_bun: {
        text: 'Bun! Mangemm insema!',
        translation: 'Ótimo! Vamos comer juntos!',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'On invid!', message: 'Você foi convidado para comer pão e queijo com Gianni.' },
      },
    },
    glossary: [
      ['fradell / sorella', 'irmão / irmã'],
      ['mi gh’hoo', 'eu tenho'],
      ['sì', 'sim'],
      ['pan e formagg', 'pão e queijo'],
    ],
  },
];
