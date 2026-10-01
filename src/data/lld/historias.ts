import type { StorySeed } from '../types';

/** Histórias interativas do ladino das Dolomitas (badiot) — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_LLD: StorySeed[] = [
  {
    id: 'lld-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bun de, Ana!',
    emoji: '👋',
    summary: 'Você conhece Ana na parada de ônibus de um vilarejo do vale de Badia e faz a sua primeira conversa em ladino.',
    cultural_context: 'No vale de Badia, no Tirol do Sul, quase toda a população fala ladino em casa, e a escola ensina ladino, alemão e italiano.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bun de! Iö á inom Ana. Co vára pa?',
        translation: 'Bom dia! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bëgn, dilan! Y tö?', translation: 'Bem, obrigado! E você?', next: 'bain' },
          { text: 'A s\'odëi!', translation: 'Até logo!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bain: {
        text: 'Ince bëgn, dilan! Da olá este pa?',
        translation: 'Também bem, obrigada! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Iö sun da São Paulo.', translation: 'Sou de São Paulo.', next: 'final_bun' },
          { text: 'Iö bëri ega.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Iö sun da…”.' },
        ],
      },
      final_bun: {
        text: 'Ci bel! Nos baiun badiot chiló. Bëgnodüs!',
        translation: 'Que legal! Aqui nós falamos badiot. Bem-vindos!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'N bun scomenciamënt!', message: 'Ana sorri: você fez a sua primeira conversa em ladino.' },
      },
    },
    glossary: [
      ['bun de', 'bom dia'],
      ['co vára pa?', 'como vai?'],
      ['iö sun da', 'eu sou de'],
      ['bëgnodüs', 'bem-vindos'],
    ],
  },
  {
    id: 'lld-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Aste pa fredesc?',
    emoji: '👪',
    summary: 'Tone, um amigo do vale de Badia, pergunta pela sua família e convida você para comer com a família dele no domingo.',
    cultural_context: 'Em badiot, “da nos” quer dizer “na nossa casa”, como o italiano “da noi”; e “ion” (com prazer) é um jeito simpático de aceitar um convite.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ciao! Aste pa fredesc y sorus?',
        translation: 'Oi! Você tem irmãos e irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sce, iö á n fre y na so.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frars' },
          { text: 'Mia ciasa é picera.', translation: 'A minha casa é pequena.', wrong: 'Isso não responde se você tem irmãos. Use “iö á…”.' },
        ],
      },
      frars: {
        text: 'Ci bel! Oste mangé da nos en domënia?',
        translation: 'Que legal! Quer comer na nossa casa no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Sce, ion! Dilan!', translation: 'Sim, com prazer! Obrigado!', next: 'final_bun' },
          { text: 'Iö sun da São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Tone fez um convite: responda com “sce, ion!” ou “no, dilan”.' },
        ],
      },
      final_bun: {
        text: 'Bun! Mia uma fej pan y ciajó.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'N invit!', message: 'Você foi convidado para comer com a família de Tone no domingo.' },
      },
    },
    glossary: [
      ['fre / so', 'irmão / irmã'],
      ['fredesc / sorus', 'irmãos / irmãs'],
      ['ion', 'com prazer'],
      ['da nos', 'na nossa casa'],
    ],
  },
];
