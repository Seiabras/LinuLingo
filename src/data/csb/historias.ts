import type { StorySeed } from '../types';

/** Histórias interativas do cassubiano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_CSB: StorySeed[] = [
  {
    id: 'csb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Witôj w Gduńskù',
    emoji: '👋',
    summary: 'Você conhece Anna na estação de trem de Gdańsk e faz a sua primeira conversa em cassubiano.',
    cultural_context: 'Gdańsk (Gduńsk, em cassubiano) é a maior cidade perto da região onde se fala cassubiano, a Pomerânia; muitos cassúbios vivem na própria cidade e nos arredores.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Witôj! Jô sã nazéwóm Anna. Jak sã môsz?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobrze, dzãkùjã! A të?', translation: 'Bem, obrigado! E você?', next: 'dobrze' },
          { text: 'Do ùzdrzeniô!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobrze: {
        text: 'Téż dobrze! Skądka të jes?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Jô jem z São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bun' },
          { text: 'Jô pijã wòdã.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Jô jem z…”.' },
        ],
      },
      final_bun: {
        text: 'Bëlno! Witôj w Gduńskù!',
        translation: 'Ótimo! Bem-vindo a Gdańsk!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobri pòczątk!', message: 'Anna sorri: você fez a sua primeira conversa em cassubiano.' },
      },
    },
    glossary: [
      ['witôj', 'oi, olá'],
      ['jak sã môsz?', 'como vai?'],
      ['jô jem z', 'eu sou de'],
      ['bëlno', 'ótimo, muito bem'],
    ],
  },
  {
    id: 'csb-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Pawła familëjô',
    emoji: '👪',
    summary: 'Paweł, um amigo de Kartuzy, pergunta pela sua família e convida você para comer na casa dele.',
    cultural_context: 'Kartuzy é uma pequena cidade no coração da região cassúbia (Kaszëbë), com um museu dedicado à cultura e à língua cassúbias.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Witôj! Môsz brata czë sostrã?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Jo, jô móm brata ë sostrã.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'brat' },
          { text: 'Mòja chëcz je wiôldżô.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “jô móm…”.' },
        ],
      },
      brat: {
        text: 'Bëlno! Chcesz przińc do mie na jedzenié w sobòtã?',
        translation: 'Que legal! Quer vir à minha casa comer no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Jo, dzãkùjã bëlno!', translation: 'Sim, muito obrigado!', next: 'final_bun' },
          { text: 'Jô jem z São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Paweł fez um convite: responda com “jo” ou “nié, dzãka”.' },
        ],
      },
      final_bun: {
        text: 'Fejn! Mòja mac warzi dobri chléb.',
        translation: 'Ótimo! A minha mãe faz um pão muito bom.',
        emoji: '🍞',
        ending: { tone: 'bom', title: 'Zaprosenié!', message: 'Você foi convidado para comer na casa de Paweł.' },
      },
    },
    glossary: [
      ['brat / sostra', 'irmão / irmã'],
      ['jô móm', 'eu tenho'],
      ['jo', 'sim'],
      ['dzãkùjã bëlno', 'muito obrigado'],
    ],
  },
];
