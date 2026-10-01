import type { StorySeed } from '../types';

/** Histórias interativas do francoprovençal — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_FRP: StorySeed[] = [
  {
    id: 'frp-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonjorn a Genèva',
    emoji: '👋',
    summary: 'Você conhece Ana numa feira em Genebra e faz a sua primeira conversa em francoprovençal.',
    cultural_context: 'Genebra, na Suíça francófona, é uma das regiões onde o francoprovençal ainda é lembrado, ao lado do francês.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonjorn! Je m’apèlo Ana. Coment vas?',
        translation: 'Bom dia! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bien, grant-marci! E tè?', translation: 'Bem, obrigado! E você?', next: 'bien' },
          { text: 'A revêre!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bien: {
        text: 'Bien tanben! Te és de yô?',
        translation: 'Também bem! Você é de onde?',
        emoji: '😊',
        choices: [
          { text: 'Je su de Sant-Pâblo.', translation: 'Sou de São Paulo.', next: 'final_bon' },
          { text: 'Je bêvo édye.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Je su de…”.' },
        ],
      },
      final_bon: {
        text: 'Què bél! Bien-venua a Genèva!',
        translation: 'Que legal! Bem-vinda a Genebra!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'On bon comenciément!', message: 'Ana sorri: você fez a sua primeira conversa em francoprovençal.' },
      },
    },
    glossary: [
      ['bonjorn', 'bom dia, oi'],
      ['coment vas?', 'como vai?'],
      ['je su de', 'eu sou de'],
      ['bien-venua', 'bem-vinda'],
    ],
  },
  {
    id: 'frp-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'On repas en famelye',
    emoji: '👪',
    summary: 'Pierro, um amigo de Lyon, pergunta pela sua família e convida você para comer.',
    cultural_context: 'Lyon, no leste da França, fica numa região onde o francoprovençal (às vezes chamado de “patois lionês”) ainda é falado por poucas pessoas, a maioria idosas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonjorn! Has-tu on frâre?',
        translation: 'Oi! Você tem um irmão?',
        emoji: '📱',
        choices: [
          { text: 'Ouè, je hai on frâre.', translation: 'Sim, tenho um irmão.', next: 'frare' },
          { text: 'Ma mêson est granta.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmão. Use “je hai…”.' },
        ],
      },
      frare: {
        text: 'Què bél! Qué mengiês?',
        translation: 'Que legal! O que você come?',
        emoji: '🍽️',
        choices: [
          { text: 'Je mengio pan.', translation: 'Eu como pão.', next: 'final_bon' },
          { text: 'Je su de Sant-Pâblo.', translation: 'Sou de São Paulo.', wrong: 'Isso não diz o que você come. Use “Je mengio…”.' },
        ],
      },
      final_bon: {
        text: 'Bien! Deman, vens mengier a la mêson!',
        translation: 'Bem! Amanhã, venha comer na minha casa!',
        emoji: '🏠',
        ending: { tone: 'bom', title: 'On envit!', message: 'Você foi convidado para comer na casa de Pierro.' },
      },
    },
    glossary: [
      ['frâre', 'irmão'],
      ['je hai', 'eu tenho'],
      ['ouè', 'sim'],
      ['mengier', 'comer'],
    ],
  },
];
