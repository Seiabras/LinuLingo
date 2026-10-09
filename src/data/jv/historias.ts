import type { StorySeed } from '../types';

/** Histórias interativas do javanês — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_JV: StorySeed[] = [
  {
    id: 'jv-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halo ing Yogyakarta',
    emoji: '👋',
    summary: 'Você conhece Siti numa praça de Yogyakarta e faz a sua primeira conversa em javanês ngoko.',
    cultural_context: 'Yogyakarta é um dos centros culturais mais importantes de Java, conhecido pelo seu sultanato ainda ativo, pelas escolas de batik e pelo javanês falado no dia a dia ao lado do indonésio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halo! Jenengku Siti. Piyé kabaré?',
        translation: 'Oi! Meu nome é Siti. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Apik-apik baé, matur nuwun! Kowé?', translation: 'Bem, obrigado! E você?', next: 'ben' },
          { text: "Sugeng dalu!", translation: 'Boa noite!', wrong: 'Siti acabou de te cumprimentar de dia — responda ao cumprimento primeiro, não se despeça.' },
        ],
      },
      ben: {
        text: 'Apik uga! Kowé saka ngendi?',
        translation: 'Bem também! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Aku saka Brasil.', translation: 'Eu sou do Brasil.', next: 'final_bo' },
          { text: 'Aku seneng gedhang.', translation: 'Eu gosto de banana.', wrong: 'Isso não responde "de onde você é". Tente "Aku saka…".' },
        ],
      },
      final_bo: {
        text: 'Wah, apik banget!',
        translation: 'Nossa, muito bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Siti sorri: você fez a sua primeira conversa em javanês ngoko, numa das cidades mais importantes de Java.' },
      },
    },
    glossary: [
      ['Halo', 'oi'],
      ['apik', 'bom/bem'],
      ['aku saka', 'eu sou de'],
    ],
  },
  {
    id: 'jv-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Omah lan kulawarga',
    emoji: '🏠',
    summary: 'Você visita a casa da sua nova amiga Dewi e conta um pouco sobre a sua família.',
    cultural_context: 'Em Java, chamar alguém de "Mas" ou "Mbak" é comum mesmo sem parentesco, como forma respeitosa de se dirigir a quem é um pouco mais velho.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halo! Kowé duwé Mas utawa Adhi?',
        translation: 'Oi! Você tem irmão(s) mais velho(s) ou mais novo(s)?',
        emoji: '📱',
        choices: [
          { text: 'Iyå, aku duwé siji Mas lan siji Adhi.', translation: 'Sim, tenho um mais velho e um mais novo.', next: 'mas' },
          { text: 'Omahku gedhé.', translation: 'A minha casa é grande.', wrong: 'Isso não responde sobre irmãos. Use "aku duwé" ou "aku ora duwé".' },
        ],
      },
      mas: {
        text: 'Wah, apik! Kowé duwé omah gedhé?',
        translation: 'Nossa, legal! Você tem uma casa grande?',
        emoji: '🏠',
        choices: [
          { text: 'Omahku cilik nanging apik.', translation: 'A minha casa é pequena mas bonita.', next: 'final_bo' },
          { text: 'Aku seneng gedhang.', translation: 'Eu gosto de banana.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "omahku…".' },
        ],
      },
      final_bo: {
        text: 'Aku seneng banget!',
        translation: 'Eu gosto muito disso!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Amizade nova!', message: 'Dewi adorou saber da sua família e da sua casa.' },
      },
    },
    glossary: [
      ['Mas / Adhi', 'irmão mais velho / mais novo(a)'],
      ['omahku', 'a minha casa'],
      ['aku duwé', 'eu tenho'],
    ],
  },
];
