import type { StorySeed } from '../types';

/** Histórias interativas do vietnamita — A1 (A1.1 e A1.2) mais A2 (A2.1 e A2.2), acrescentado depois. */
export const STORIES_VI: StorySeed[] = [
  {
    id: 'vi-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Xin chào ở Hà Nội',
    emoji: '👋',
    summary: 'Você conhece Lan numa rua de Hanói e faz a sua primeira conversa em vietnamita.',
    cultural_context: 'Hanói é a capital do Vietnã, uma cidade de mais de mil anos com um centro histórico (o Bairro Antigo) famoso pelo trânsito de motos e pelos vendedores ambulantes de phở.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Xin chào! Tôi tên là Lan. Bạn khỏe không?',
        translation: 'Oi! Meu nome é Lan. Você está bem?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tôi khỏe, cảm ơn! Còn bạn?', translation: 'Estou bem, obrigado! E você?', next: 'ben' },
          { text: 'Tạm biệt!', translation: 'Tchau!', wrong: 'Lan acabou de te cumprimentar — se despedir agora seria estranho. Responda ao cumprimento primeiro.' },
        ],
      },
      ben: {
        text: 'Tôi cũng khỏe! Bạn đến từ đâu?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Tôi đến từ Brazil.', translation: 'Eu sou do Brasil.', next: 'final_bo' },
          { text: 'Tôi thích cà phê.', translation: 'Eu gosto de café.', wrong: 'Isso não responde "de onde você é". Tente "Tôi đến từ…".' },
        ],
      },
      final_bo: {
        text: 'Thật tuyệt! Chào mừng đến Hà Nội.',
        translation: 'Que legal! Bem-vindo a Hanói.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Lan sorri: você fez a sua primeira conversa em vietnamita, na capital do país.' },
      },
    },
    glossary: [
      ['xin chào', 'oi'],
      ['tôi khỏe', 'eu estou bem'],
      ['tôi đến từ', 'eu sou de'],
    ],
  },
  {
    id: 'vi-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cuộc gọi cho gia đình',
    emoji: '📞',
    summary: 'Você liga para a sua nova amiga Hoa e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'No Vietnã, a família estendida é muito importante, e várias gerações costumam morar juntas ou muito perto umas das outras.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Xin chào! Kể tôi nghe, bạn có anh chị em không?',
        translation: 'Oi! Me conte, você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Có, tôi có một anh trai và một em gái.', translation: 'Sim, tenho um irmão mais velho e uma irmã mais nova.', next: 'irmaos' },
          { text: 'Nhà tôi lớn.', translation: 'Minha casa é grande.', wrong: 'Isso não responde sobre irmãos. Use "tôi có" ou "tôi không có".' },
        ],
      },
      irmaos: {
        text: 'Thật tuyệt! Nhà bạn thế nào?',
        translation: 'Que legal! Como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Nhà tôi nhỏ nhưng rất đẹp.', translation: 'Minha casa é pequena mas muito bonita.', next: 'final_bo' },
          { text: 'Tôi hai mươi tuổi.', translation: 'Tenho vinte anos.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: "nhà tôi…".' },
        ],
      },
      final_bo: {
        text: 'Tôi rất thích! Một ngày nào đó bạn phải đến thăm chúng tôi.',
        translation: 'Eu adoro! Um dia você tem que nos visitar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Tình bạn mới!', message: 'Hoa adorou saber da sua família e da sua casa — e já te convidou para visitar!' },
      },
    },
    glossary: [
      ['anh trai / em gái', 'irmão mais velho / irmã mais nova'],
      ['nhà tôi', 'a minha casa'],
      ['tôi có', 'eu tenho'],
    ],
  },
  {
    id: 'vi-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Mưa ở Hà Nội',
    emoji: '🌧️',
    summary: 'Uma chuva forte pega você de surpresa em Hanói, e a sua amiga Hoa ajuda você a decidir o que comprar e vestir.',
    cultural_context: 'O Norte do Vietnã tem um verão chuvoso e quente; chuvas fortes e repentinas são comuns, e muita gente carrega uma capa de chuva leve na moto, o meio de transporte mais usado nas cidades vietnamitas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ôi, mưa to quá! Bạn có ô không?',
        translation: 'Nossa, está chovendo muito forte! Você tem guarda-chuva?',
        emoji: '🌧️',
        choices: [
          { text: 'Không, tôi không có ô.', translation: 'Não, eu não tenho guarda-chuva.', next: 'mua' },
          { text: 'Tôi thích cà phê.', translation: 'Eu gosto de café.', wrong: 'Hoa perguntou sobre o guarda-chuva — isso não responde à pergunta.' },
        ],
      },
      mua: {
        text: 'Đi nào, chúng ta mua áo khoác và ô ở cửa hàng đó.',
        translation: 'Vamos, vamos comprar uma jaqueta e um guarda-chuva naquela loja.',
        emoji: '🧥',
        choices: [
          { text: 'Được, tôi sẽ mua áo khoác nữa.', translation: 'Certo, eu também vou comprar uma jaqueta.', next: 'final_bo' },
          { text: 'Tôi không thích giày này.', translation: 'Eu não gosto deste sapato.', wrong: 'Isso não ajuda com a chuva. Concorde em comprar o áo khoác/ô.' },
        ],
      },
      final_bo: {
        text: 'Tốt! Giờ chúng ta sẽ không bị ướt.',
        translation: 'Ótimo! Agora não vamos nos molhar.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Khô và an toàn!', message: 'Você e Hoa se protegeram da chuva repentina de Hanói — secos e prontos para continuar o dia!' },
      },
    },
    glossary: [
      ['mưa to', 'chuva forte'],
      ['ô', 'guarda-chuva'],
      ['sẽ mua', 'vou comprar'],
    ],
  },
  {
    id: 'vi-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Công việc mới',
    emoji: '💼',
    summary: 'Você encontra o seu amigo Minh depois do seu primeiro dia de trabalho como professor, e conta como se sentiu.',
    cultural_context: 'No Vietnã, é comum tratar professores e médicos pelo cargo, antes ou depois do nome — "bác sĩ Linh" ou "cô giáo" — mesmo fora do trabalho.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Xin chào! Ngày đầu tiên làm giáo viên của bạn thế nào?',
        translation: 'Oi! Como foi o seu primeiro dia como professor?',
        emoji: '🧑‍🏫',
        choices: [
          { text: 'Tôi vui, nhưng một chút mệt.', translation: 'Estou feliz, mas um pouco cansado.', next: 'tiep_tuc' },
          { text: 'Ngày mai sẽ mưa.', translation: 'Vai chover amanhã.', wrong: 'Minh perguntou sobre o seu dia de trabalho — isso não responde.' },
        ],
      },
      tiep_tuc: {
        text: 'Hay quá! Học sinh của bạn ngoan không?',
        translation: 'Que bom! Os seus alunos são bons?',
        emoji: '🎒',
        choices: [
          { text: 'Có, họ là học sinh ngoan.', translation: 'Sim, eles são bons alunos.', next: 'final_bo' },
          { text: 'Tôi sợ mèo.', translation: 'Eu tenho medo de gatos.', wrong: 'Isso não responde sobre os alunos.' },
        ],
      },
      final_bo: {
        text: 'Vui quá! Bạn sẽ là một giáo viên tuyệt vời.',
        translation: 'Que bom ouvir isso! Você vai ser um professor incrível.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ngày đầu tiên tốt đẹp!', message: 'Minh ficou feliz em saber do seu primeiro dia como professor — parece que você já encontrou alunos ótimos!' },
      },
    },
    glossary: [
      ['học sinh ngoan', 'bons alunos'],
      ['vui, nhưng mệt', 'feliz, mas cansado'],
      ['giáo viên tuyệt vời', 'professor incrível'],
    ],
  },
];
