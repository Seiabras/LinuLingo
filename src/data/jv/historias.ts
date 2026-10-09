import type { StorySeed } from '../types';

/** Histórias interativas do javanês — uma por nível, de A1.1 a A2.2 (pacote incompleto, ver index.ts). */
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
  {
    id: 'jv-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Jam pira kowé tangi?',
    emoji: '⏰',
    summary: 'Seu amigo Yanto pergunta sobre a sua rotina diária em javanês.',
    cultural_context: 'Perguntar a rotina de alguém (a que horas levanta, o que estuda) é um jeito comum de aproximação entre amigos javaneses — e uma boa desculpa para praticar “pira” e “kapan” numa conversa de verdade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halo! Jam pira kowé tangi?',
        translation: 'Oi! Que horas você levanta?',
        emoji: '🙋',
        choices: [
          { text: 'Aku tangi jam enem.', translation: 'Eu levanto às seis.', next: 'adus' },
          { text: 'Aku seneng gedhang.', translation: 'Eu gosto de banana.', wrong: 'Isso não responde a que horas você levanta. Use “Aku tangi jam…”.' },
        ],
      },
      adus: {
        text: 'Apik! Kowé adus?',
        translation: 'Legal! Você toma banho?',
        emoji: '🚿',
        choices: [
          { text: 'Iyå, aku adus lan sinau.', translation: 'Sim, eu tomo banho e estudo.', next: 'final_bo' },
          { text: 'Kapan kowé mulih?', translation: 'Quando você volta pra casa?', wrong: 'Isso não responde se você toma banho. Responda com “Iyå” ou “Ora”.' },
        ],
      },
      final_bo: {
        text: 'Wah, apik banget!',
        translation: 'Uau, muito bom!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Rotina em javanês', message: 'Yanto gostou de saber da sua rotina diária em javanês.' },
      },
    },
    glossary: [
      ['tangi', 'levantar/acordar'],
      ['adus', 'banhar-se'],
      ['sinau', 'estudar'],
    ],
  },
  {
    id: 'jv-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Blanja gedhang ing pasar',
    emoji: '🛒',
    summary: 'Você vai ao pasar comprar banana e precisa perguntar o preço e pechinchar um pouco.',
    cultural_context: 'No pasar javanês, o primeiro preço costuma ser só o começo da conversa: pechinchar com simpatia faz parte do processo, e o registro de fala (ngoko ou krama) muda segundo a idade e a familiaridade entre quem compra e quem vende.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Halo! Kowé arep tuku apa?',
        translation: 'Oi! O que você quer comprar?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Aku arep tuku gedhang.', translation: 'Eu quero comprar banana.', next: 'rega' },
          { text: 'Aku ora duwé dhuwit.', translation: 'Eu não tenho dinheiro.', wrong: 'Isso não diz o que você quer comprar. Diga “Aku arep tuku…” e o quê.' },
        ],
      },
      rega: {
        text: 'Gedhang iki apik. Regane satus.',
        translation: 'Esta banana é boa. Custa cem.',
        emoji: '🍌',
        choices: [
          { text: 'Wah, larang! Aku duwé séket.', translation: 'Nossa, caro! Eu tenho cinquenta.', next: 'final_bo' },
          { text: 'Aku seneng kucing.', translation: 'Eu gosto de gato.', wrong: 'Isso não fala do preço. Comente se está caro (“larang”) ou barato (“murah”).' },
        ],
      },
      final_bo: {
        text: 'Séket baé, Mas!',
        translation: 'Cinquenta então, moço!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Pechincha em javanês', message: 'Ibu Tini aceitou o seu preço — você conseguiu pechinchar em javanês!' },
      },
    },
    glossary: [
      ['tuku', 'comprar'],
      ['rega / regane', 'preço / o preço disso'],
      ['larang / murah', 'caro / barato'],
    ],
  },
];
