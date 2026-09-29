import type { StorySeed } from '../types';

/** Histórias interativas do indonésio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_ID: StorySeed[] = [
  {
    id: 'id-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Halo di Jakarta',
    emoji: '👋',
    summary: 'Você conhece Rina numa praça de Jacarta e faz a sua primeira conversa em indonésio.',
    cultural_context: 'Jacarta é a maior cidade e antiga capital da Indonésia, um dos países mais populosos do mundo, com mais de 700 línguas locais faladas além do indonésio.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halo! Nama saya Rina. Apa kabar?',
        translation: 'Oi! Meu nome é Rina. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Baik, terima kasih! Kamu?', translation: 'Bem, obrigado! E você?', next: 'ben' },
          { text: 'Selamat tinggal!', translation: 'Tchau!', wrong: 'Rina acabou de te cumprimentar — se despedir agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      ben: {
        text: 'Baik juga! Kamu dari mana?',
        translation: 'Bem também! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Saya dari Brasil.', translation: 'Eu sou do Brasil.', next: 'final_bo' },
          { text: 'Saya suka kopi.', translation: 'Eu gosto de café.', wrong: 'Isso não responde "de onde você é". Tente "Saya dari…".' },
        ],
      },
      final_bo: {
        text: 'Wah, bagus! Selamat datang di Jakarta.',
        translation: 'Nossa, que bom! Bem-vindo a Jacarta.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Rina sorri: você fez a sua primeira conversa em indonésio, na maior cidade do país.' },
      },
    },
    glossary: [
      ['halo', 'oi'],
      ['baik', 'bem'],
      ['saya dari', 'eu sou de'],
    ],
  },
  {
    id: 'id-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Telepon dengan keluarga',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga Sari e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'Na Indonésia, a família estendida é muito valorizada, e é comum várias gerações morarem perto umas das outras ou na mesma casa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halo! Ceritakan, kamu punya kakak atau adik?',
        translation: 'Oi! Me conte, você tem irmãos mais velhos ou mais novos?',
        emoji: '📱',
        choices: [
          { text: 'Ya, saya punya satu kakak dan satu adik.', translation: 'Sim, tenho um mais velho e um mais novo.', next: 'kakak' },
          { text: 'Rumah saya besar.', translation: 'Minha casa é grande.', wrong: 'Isso não responde sobre irmãos. Use "saya punya" ou "saya tidak punya".' },
        ],
      },
      kakak: {
        text: 'Wah, bagus! Bagaimana rumahmu?',
        translation: 'Nossa, legal! Como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Rumah saya kecil tapi sangat bagus.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'Saya berumur dua puluh tahun.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "rumah saya…".' },
        ],
      },
      final_bo: {
        text: 'Saya suka! Suatu hari kamu harus mengunjungi kami.',
        translation: 'Eu adoro! Um dia você tem que nos visitar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Amizade nova!', message: 'Sari adorou saber da sua família e da sua casa — e já te convidou para visitar!' },
      },
    },
    glossary: [
      ['kakak / adik', 'irmão mais velho / mais novo'],
      ['rumah saya', 'a minha casa'],
      ['saya punya', 'eu tenho'],
    ],
  },
];
