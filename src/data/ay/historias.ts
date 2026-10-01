import type { StorySeed } from '../types';

/** Histórias interativas do aimará — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_AY: StorySeed[] = [
  {
    id: 'ay-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kamisaki, El Alto!',
    emoji: '🧺',
    summary: 'Você visita a Feria 16 de Julio, em El Alto (Bolívia), e puxa conversa com uma feirante.',
    cultural_context:
      'El Alto, cidade vizinha de La Paz e ligada a ela pelo teleférico, tem uma das maiores populações aimarás do mundo. A Feria 16 de Julio, aos domingos e quintas, é uma das maiores feiras de rua da América do Sul.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¡Kamisaki! Rosa satathwa. ¿Jumasti?',
        translation: 'Olá! Eu me chamo Rosa. E você?',
        emoji: '🧺',
        choices: [
          { text: 'Kamisaki! Ana satathwa.', translation: 'Olá! Eu me chamo Ana.', next: 'nome' },
          { text: 'Jikisiñkama!', translation: 'Até logo!', wrong: 'Rosa acabou de se apresentar: despedir-se agora seria estranho. Diga o seu nome primeiro.' },
        ],
      },
      nome: {
        text: '¿Kamisaraki? ¿Kawkirus jutta?',
        translation: 'Como vai? De onde você vem?',
        emoji: '😊',
        choices: [
          { text: 'Walikiskthwa. La Pazat jutta.', translation: 'Estou bem. Eu venho de La Paz.', next: 'final_bun' },
          { text: 'Umat pharjitu.', translation: 'Tenho sede.', wrong: 'Isso não responde de onde você vem. Diga “…at jutta” (eu venho de…).' },
        ],
      },
      final_bun: {
        text: '¡Suma! Akan ch\'uqi, aycha utjiwa. ¿Kuna munta?',
        translation: 'Que bom! Aqui tem batata, carne. O que você quer?',
        emoji: '🥔',
        choices: [
          { text: "Ch'uqi munta, yuspagara.", translation: 'Quero batata, obrigado(a).', next: 'final' },
          { text: 'Jisa.', translation: 'Sim.', wrong: 'Rosa perguntou O QUE você quer, não só “sim” ou “não”. Responda com “…munta” (eu quero…).' },
        ],
      },
      final: {
        text: 'Yuspagarapxsma, jilata/kullaka. ¡Jikisiñkama!',
        translation: 'Muito obrigada, irmão/irmã. Até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Yuspagara!', message: 'Rosa sorri: você fez a sua primeira conversa em aimará na feira de El Alto.' },
      },
    },
    glossary: [
      ['kamisaki', 'olá, como vai'],
      ['…satathwa', 'eu me chamo…'],
      ['…at jutta', 'eu venho de…'],
      ['yuspagara', 'obrigado'],
    ],
  },
  {
    id: 'ay-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Wila masi, Tiwanakun',
    emoji: '👪',
    summary: 'Em Tiwanaku, um jilata (um jeito afetuoso de chamar alguém de “irmão”) pergunta pela sua família e convida você para comer.',
    cultural_context:
      'Tiwanaku, perto do lago Titicaca, foi uma das maiores civilizações pré-incaicas dos Andes e é considerada, por muitos aimarás, um lugar de origem ancestral do seu povo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: '¿Khitisa jumana familiamaja?',
        translation: 'Quem é a sua família?',
        emoji: '🗿',
        choices: [
          { text: 'Mamajaxa, awkijaxa, kullakajaxa.', translation: 'Minha mãe, meu pai, minha irmã.', next: 'familia' },
          { text: "Ch'uqi munta.", translation: 'Quero batata.', wrong: 'Isso não responde sobre a sua família. Use “…jaxa” (meu/minha…).' },
        ],
      },
      familia: {
        text: 'Suma. Utajan manq\'asiñani, ¿jisa?',
        translation: 'Que bom. Vamos comer na minha casa, sim?',
        emoji: '🍽️',
        choices: [
          { text: 'Jisa, yuspagara!', translation: 'Sim, muito obrigado(a)!', next: 'final_bun' },
          { text: 'Janiwa, qharürkama.', translation: 'Não, até amanhã.', next: 'despedida' },
        ],
      },
      despedida: {
        text: 'Walikiwa, jilata/kullaka. Qharürkama.',
        translation: 'Tudo bem, irmão/irmã. Até amanhã.',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Qharürkama', message: 'Você combinou de se encontrar outro dia — nada mau para o seu primeiro passeio em Tiwanaku.' },
      },
      final_bun: {
        text: 'Aski! Mamajax ch\'uqi, aycha phayiwa.',
        translation: 'Ótimo! Minha mãe cozinha batata, carne.',
        emoji: '🥘',
        ending: { tone: 'bom', title: 'Wila masi', message: 'Você foi convidado para comer com a wila masi (família) em Tiwanaku.' },
      },
    },
    glossary: [
      ['wila masi', 'família, parente de sangue'],
      ['jilata / kullaka', 'irmão / irmã (também um jeito afetuoso de chamar alguém)'],
      ['jisa / janiwa', 'sim / não'],
      ["ch'uqi, aycha", 'batata, carne'],
    ],
  },
];
