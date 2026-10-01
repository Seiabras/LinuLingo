import type { StorySeed } from '../types';

/** Histórias interativas do aragonês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_AN: StorySeed[] = [
  {
    id: 'an-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ola en Uesca',
    emoji: '👋',
    summary: 'Você conhece Ana na praça de Huesca (Uesca, em aragonês) e faz a sua primeira conversa em aragonês.',
    cultural_context: 'Uesca (Huesca) é a maior cidade do norte de Aragão, perto dos vales onde o aragonés ainda se fala no dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ola! Me clamo Ana. Cómo yes?',
        translation: 'Oi! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bien, grazias! E tu?', translation: 'Bem, obrigado! E você?', next: 'bien' },
          { text: 'Adiós!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bien: {
        text: 'Tamién bien! D’an yes?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Soi de Sant Paulo.', translation: 'Sou de São Paulo.', next: 'final_bueno' },
          { text: 'Bebo augua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Soi de…”.' },
        ],
      },
      final_bueno: {
        text: 'Qué guapo! Bienveniu ta Uesca!',
        translation: 'Que legal! Bem-vindo a Huesca!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un buen prenzipio!', message: 'Ana sorri: você fez a sua primeira conversa em aragonês.' },
      },
    },
    glossary: [
      ['ola', 'oi, olá'],
      ["d'an yes?", 'de onde você é?'],
      ['soi de', 'eu sou de'],
      ['bienveniu', 'bem-vindo'],
    ],
  },
  {
    id: 'an-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Una zena en familia',
    emoji: '👪',
    summary: 'Chusé, um amigo de Chaca, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Chaca (Jaca) fica no Pirineu aragonês, perto dos vales onde ainda se fala a fabla no dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ola! Has chirmans u chirmanas?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sí, he un chirmán e una chirmana.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'chirmans' },
          { text: 'A mía casa ye gran.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “he…”.' },
        ],
      },
      chirmans: {
        text: 'Qué guapo! Quiers venir ta casa sabado?',
        translation: 'Que legal! Quer vir à minha casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Sí, grazias muito!', translation: 'Sim, muito obrigado!', next: 'final_bueno' },
          { text: 'Soi de Sant Paulo.', translation: 'Sou de São Paulo.', wrong: 'Chusé fez um convite: responda com “sí” ou “no, grazias”.' },
        ],
      },
      final_bueno: {
        text: 'Guaire bien! A mía mai fa pan e queso.',
        translation: 'Muito bem! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Una combidada!', message: 'Você foi convidado para jantar com a família de Chusé.' },
      },
    },
    glossary: [
      ['chirmán / chirmana', 'irmão / irmã'],
      ['he', 'eu tenho'],
      ['sí', 'sim'],
      ['ta casa', 'na minha casa'],
    ],
  },
];
