import type { StorySeed } from '../types';

/** Histórias interativas do romanche — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_RM: StorySeed[] = [
  {
    id: 'rm-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Allegra a Cuira',
    emoji: '👋',
    summary: 'Você conhece Anna na estação de trem de Chur (Cuira, em romanche) e faz a sua primeira conversa em romanche.',
    cultural_context: 'Chur é a capital do cantão dos Grisões, o único cantão suíço com três línguas oficiais: alemão, romanche e italiano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Allegra! Jau hai num Anna. Co vai?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bain, grazia! E tai?', translation: 'Bem, obrigado! E você?', next: 'bain' },
          { text: 'A revair!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bain: {
        text: 'Era bain! Danunder es ti?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Jau sun da São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bun' },
          { text: 'Jau baiv aua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use «Jau sun da…».' },
        ],
      },
      final_bun: {
        text: 'Bella! Bainvegni a Cuira!',
        translation: 'Que legal! Bem-vindo a Chur!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'In bun cumenzament!', message: 'Anna sorri: você fez a sua primeira conversa em romanche.' },
      },
    },
    glossary: [
      ['allegra', 'oi, olá'],
      ['co vai?', 'como vai?'],
      ['jau sun da', 'eu sou de'],
      ['bainvegni', 'bem-vindo'],
    ],
  },
  {
    id: 'rm-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ina tschaina en famiglia',
    emoji: '👪',
    summary: 'Gian, um amigo de Disentis, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Disentis (Mustér, em romanche) fica na Surselva, a região onde mais se fala romanche no dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Allegra! Has ti frars u soras?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Gea, jau hai in frar ed ina sora.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frars' },
          { text: 'Mia chasa è gronda.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «jau hai…».' },
        ],
      },
      frars: {
        text: 'Bella! Vuls ti vegnir tar nus sonda?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Gea, grazia fitg!', translation: 'Sim, muito obrigado!', next: 'final_bun' },
          { text: 'Jau sun da São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Gian fez um convite: responda com «gea» ou «na, grazia».' },
        ],
      },
      final_bun: {
        text: 'Fitg bain! Mia mamma fa paun e caschiel.',
        translation: 'Muito bem! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'In invit!', message: 'Você foi convidado para jantar com a família de Gian.' },
      },
    },
    glossary: [
      ['frar / sora', 'irmão / irmã'],
      ['jau hai', 'eu tenho'],
      ['gea', 'sim'],
      ['tar nus', 'na nossa casa'],
    ],
  },
];
