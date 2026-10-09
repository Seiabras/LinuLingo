import type { StorySeed } from '../types';

/** Histórias interativas do indonésio — A1 (A1.1 e A1.2) mais A2 (A2.1 e A2.2), acrescentado depois. */
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
  {
    id: 'id-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Hujan di Jakarta',
    emoji: '🌧️',
    summary: 'Uma chuva forte pega você de surpresa em Jacarta, e a sua amiga Dewi ajuda você a decidir o que comprar e vestir.',
    cultural_context: 'Jacarta tem um clima tropical com uma estação chuvosa (de outubro a abril) e uma seca (de maio a setembro); chuvas fortes e repentinas são comuns na estação chuvosa, e vendedores de rua costumam vender guarda-chuvas e capas de chuva de um momento para outro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wah, hujan sangat deras! Kamu ada payung?',
        translation: 'Nossa, está chovendo muito forte! Você tem guarda-chuva?',
        emoji: '🌧️',
        choices: [
          { text: 'Tidak, saya tidak ada payung.', translation: 'Não, eu não tenho guarda-chuva.', next: 'beli' },
          { text: 'Saya suka kopi.', translation: 'Eu gosto de café.', wrong: 'Dewi perguntou sobre o guarda-chuva — isso não responde à pergunta.' },
        ],
      },
      beli: {
        text: 'Ayo, kita beli jaket dan payung di kios itu.',
        translation: 'Vamos, vamos comprar uma jaqueta e um guarda-chuva naquele quiosque.',
        emoji: '🧥',
        choices: [
          { text: 'Baik, saya akan beli jaket juga.', translation: 'Certo, eu também vou comprar uma jaqueta.', next: 'final_bo' },
          { text: 'Saya tidak suka sepatu ini.', translation: 'Eu não gosto deste sapato.', wrong: 'Isso não ajuda com a chuva. Concorde em comprar o jaket/payung.' },
        ],
      },
      final_bo: {
        text: 'Bagus! Sekarang kita tidak akan basah.',
        translation: 'Ótimo! Agora não vamos nos molhar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Kering dan aman!', message: 'Você e Dewi se protegeram da chuva repentina de Jacarta — secos e prontos para continuar o dia!' },
      },
    },
    glossary: [
      ['hujan deras', 'chuva forte'],
      ['payung', 'guarda-chuva'],
      ['akan beli', 'vou comprar'],
    ],
  },
  {
    id: 'id-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Pekerjaan baru',
    emoji: '💼',
    summary: 'Você encontra o seu amigo Andi depois do seu primeiro dia de trabalho como professor, e conta como se sentiu.',
    cultural_context: 'Na Indonésia, é comum chamar professores e médicos pelo cargo, junto com "Bapak/Pak" (senhor) ou "Ibu/Bu" (senhora) — "Bu Guru" ou "Pak Dokter" — mesmo fora da escola ou do consultório.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halo! Bagaimana hari pertamamu sebagai guru?',
        translation: 'Oi! Como foi o seu primeiro dia como professor?',
        emoji: '🧑‍🏫',
        choices: [
          { text: 'Saya senang, tapi sedikit lelah.', translation: 'Estou feliz, mas um pouco cansado.', next: 'kelanjutan' },
          { text: 'Besok akan hujan.', translation: 'Vai chover amanhã.', wrong: 'Andi perguntou sobre o seu dia de trabalho — isso não responde.' },
        ],
      },
      kelanjutan: {
        text: 'Wah, bagus! Murid-muridmu baik?',
        translation: 'Que bom! Os seus alunos são bons?',
        emoji: '🎒',
        choices: [
          { text: 'Ya, mereka murid yang baik.', translation: 'Sim, eles são bons alunos.', next: 'final_bo' },
          { text: 'Saya takut kucing.', translation: 'Eu tenho medo de gatos.', wrong: 'Isso não responde sobre os alunos.' },
        ],
      },
      final_bo: {
        text: 'Senang mendengarnya! Kamu akan jadi guru yang hebat.',
        translation: 'Que bom ouvir isso! Você vai ser um professor incrível.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Hari pertama yang baik!', message: 'Andi ficou feliz em saber do seu primeiro dia como professor — parece que você já encontrou alunos ótimos!' },
      },
    },
    glossary: [
      ['murid yang baik', 'bons alunos'],
      ['senang, tapi lelah', 'feliz, mas cansado'],
      ['guru yang hebat', 'professor incrível'],
    ],
  },
];
