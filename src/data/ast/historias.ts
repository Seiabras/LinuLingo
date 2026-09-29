import type { StorySeed } from '../types';

/** Histórias interativas do asturiano — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_AST: StorySeed[] = [
  {
    id: 'ast-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hola en Xixón',
    emoji: '👋',
    summary: 'Você conhece Sabela num passeio de Gijón (Xixón) e faz a sua primeira conversa em asturiano.',
    cultural_context: 'Xixón (Gijón, em castelhano) é a maior cidade das Astúrias e fica na costa do Mar Cantábrico, com um famoso passeio litorâneo, o Muro de San Lorenzo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hola! Llámome Sabela. Cómo tas?',
        translation: 'Oi! Eu me chamo Sabela. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mui bien, gracies! Y tu?', translation: 'Muito bem, obrigado! E você?', next: 'bien' },
          { text: 'Adiós!', translation: 'Tchau!', wrong: 'Sabela acabou de te cumprimentar — despedir-se agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      bien: {
        text: 'Mui bien tamién! Y tu, de ónde yes?',
        translation: 'Muito bem também! E você, de onde é?',
        emoji: '😊',
        choices: [
          { text: 'Soi de Brasil.', translation: 'Sou do Brasil.', next: 'final_bo' },
          { text: 'Préstame’l café.', translation: 'Eu gosto do café.', wrong: 'Isso não responde "de onde você é". Tente "Soi de…".' },
        ],
      },
      final_bo: {
        text: 'Qué bien! Bienvenida a Xixón.',
        translation: 'Que bom! Bem-vinda a Gijón.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Una bona conversa!', message: 'Sabela sorri: esta ye la to primera conversa n’asturianu, nel Muro de San Lorenzo.' },
      },
    },
    glossary: [
      ['hola', 'oi'],
      ['mui bien', 'muito bem'],
      ['soi de', 'sou de'],
    ],
  },
  {
    id: 'ast-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Una llamada a la familia',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga asturiana Uxía e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'Nas aldeias das Astúrias, é comum várias gerações de uma mesma família viverem perto umas das outras, e as fiestes (festas do santo padroeiro de cada aldeia) são um momento importante de reunião.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hola! Cúntame, tienes hermanos?',
        translation: 'Oi! Me conte, você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Sí, tengo un hermanu y una hermana.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'hermanos' },
          { text: 'La mio casa ye grande.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «tengo» ou «nun tengo».' },
        ],
      },
      hermanos: {
        text: 'Qué bien! Y cómo ye la to casa?',
        translation: 'Que bom! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'La mio casa ye pequeña pero mui guapa.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'Tengo venti años.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: «la mio casa ye…».' },
        ],
      },
      final_bo: {
        text: 'Préstame enforma! Tienes que venir a Xixón dalgún día.',
        translation: 'Eu gosto muito! Você tem que vir a Gijão algum dia.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nueva amistá!', message: 'A Uxía présta-y falar contigo: yá son amigues!' },
      },
    },
    glossary: [
      ['hermanu / hermana', 'irmão / irmã'],
      ['la mio casa', 'a minha casa'],
      ['tengo', 'eu tenho'],
    ],
  },
];
