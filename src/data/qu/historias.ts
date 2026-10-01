import type { StorySeed } from '../types';

/** Histórias interativas do quéchua sulenho — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_QU: StorySeed[] = [
  {
    id: 'qu-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Napaykullayki, Qusqupi',
    emoji: '👋',
    summary: 'Você conhece Flor na Praça de Armas de Cusco e faz a sua primeira conversa em quéchua.',
    cultural_context: 'Cusco (Qusqu) foi a capital do império inca e continua sendo o maior centro de falantes de quéchua sulenho dos Andes.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¡Napaykullayki! Flor sutiymi. ¿Imataq sutiyki?',
        translation: 'Olá! Meu nome é Flor. Qual é o seu nome?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Napaykullayki! Ana sutiymi.', translation: 'Olá! Meu nome é Ana.', next: 'nome' },
          { text: 'Tupananchiskama!', translation: 'Até a próxima!', wrong: 'Flor acabou de se apresentar: despedir-se agora seria estranho. Diga o seu nome primeiro.' },
        ],
      },
      nome: {
        text: '¿Allillanchu? ¿Maymantataq kanki?',
        translation: 'Você está bem? De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Allinmi. Ñuqa Qusqumanta kani.', translation: 'Estou bem. Eu sou de Cusco.', next: 'final_bun' },
          { text: 'Yakuta upyani.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ñuqa …manta kani.”' },
        ],
      },
      final_bun: {
        text: '¡Allin! Qusqupi tupasunchik.',
        translation: 'Que bom! Nos encontraremos em Cusco.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Allinmi!', message: 'Flor sorri: você fez a sua primeira conversa em quéchua.' },
      },
    },
    glossary: [
      ['napaykullayki', 'olá (lit. “eu te saúdo”)'],
      ['imataq sutiyki', 'qual é o seu nome'],
      ['ñuqa … manta kani', 'eu sou de …'],
      ['tupananchiskama', 'até a próxima'],
    ],
  },
  {
    id: 'qu-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Mikhuna aylluwan',
    emoji: '👪',
    summary: 'Carlos, um amigo de Pisac, pergunta pelo seu irmão e convida você para comer na casa dele.',
    cultural_context: 'Pisac é uma cidade no Vale Sagrado dos incas, perto de Cusco, conhecida pelo seu mercado tradicional e pelos terraços de cultivo andinos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¿Imataq sutin wawqiyki?',
        translation: 'Qual é o nome do seu irmão?',
        emoji: '📱',
        choices: [
          { text: 'Pablo sutin.', translation: 'O nome dele é Pablo.', next: 'familia' },
          { text: 'Wasiy hatunmi.', translation: 'Minha casa é grande.', wrong: 'Isso não responde sobre o nome do seu irmão. Diga “… sutin.”' },
        ],
      },
      familia: {
        text: 'Allin! Wasiypi papata mikhusun.',
        translation: 'Ótimo! Vamos comer batata na minha casa.',
        emoji: '🍽️',
        choices: [
          { text: 'Arí, sulpayki!', translation: 'Sim, muito obrigado!', next: 'final_bun' },
          { text: 'Ñuqa Qusqumanta kani.', translation: 'Eu sou de Cusco.', wrong: 'Carlos convidou você para comer: responda com “arí” ou “mana”.' },
        ],
      },
      final_bun: {
        text: 'Allin! Mamay papata, ch\'arkita mikhun.',
        translation: 'Ótimo! Minha mãe come batata, charque.',
        emoji: '🥔',
        ending: { tone: 'bom', title: 'Mikhuna aylluwan!', message: 'Você foi convidado para comer com a ayllu (família) de Carlos.' },
      },
    },
    glossary: [
      ['wawqi / pana', 'irmão / irmã, ditos por um homem'],
      ['ayllu', 'família extensa, comunidade de parentes'],
      ['arí / mana', 'sim / não'],
      ['papata mikhuy', 'comer batata'],
    ],
  },
];
