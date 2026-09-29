import type { StorySeed } from '../types';

/** Histórias interativas do latim clássico — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_LA: StorySeed[] = [
  {
    id: 'la-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Salve no Foro Romano',
    emoji: '👋',
    summary: 'Você conhece Marcus no Foro Romano e faz a sua primeira conversa em latim.',
    cultural_context: 'O Foro Romano era o centro da vida pública em Roma: ali ficavam os templos, os tribunais e a praça onde os romanos se encontravam para conversar, fazer negócios e ouvir discursos políticos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salve! Nomen mihi est Marcus. Quomodo vales?',
        translation: 'Oi! Meu nome é Marcus. Como você está?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Bene valeo, gratias! Et tu?', translation: 'Estou bem, obrigado! E você?', next: 'bene' },
          { text: 'Vale!', translation: 'Tchau!', wrong: 'Marcus acabou de te cumprimentar — despedir-se agora seria estranho. Responda à pergunta primeiro.' },
        ],
      },
      bene: {
        text: 'Bene quoque! Et tu, quod nomen tibi est?',
        translation: 'Bem também! E você, qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Nomen mihi est Iulia.', translation: 'Meu nome é Júlia.', next: 'final_bo' },
          { text: 'Vinum amo.', translation: 'Eu amo vinho.', wrong: 'Isso não responde qual é o seu nome. Tente «Nomen mihi est…».' },
        ],
      },
      final_bo: {
        text: 'Gaudeo te cognoscere, Iulia!',
        translation: 'Tenho prazer em te conhecer, Júlia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Marcus sorri: você fez a sua primeira conversa em latim, no meio do Foro Romano.' },
      },
    },
    glossary: [
      ['salve', 'oi'],
      ['nomen mihi est', 'meu nome é'],
      ['gratias tibi ago', 'obrigado'],
    ],
  },
  {
    id: 'la-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Em casa com a família',
    emoji: '🏠',
    summary: 'Você visita a domus da sua nova amiga romana Flavia e conta um pouco sobre a sua família e a sua casa.',
    cultural_context: 'A domus romana das famílias mais abastadas se organizava em torno de um átrio central, aberto para o céu, com um pequeno altar dedicado aos deuses da casa (os lares).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salve! Habesne fratres aut sorores?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📜',
        choices: [
          { text: 'Ita, unum fratrem et unam sororem habeo.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fam' },
          { text: 'Domus mea magna est.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «habeo» ou «non habeo».' },
        ],
      },
      fam: {
        text: 'Optime! Et quomodo est domus tua?',
        translation: 'Ótimo! E como é a sua casa?',
        emoji: '🏠',
        choices: [
          { text: 'Domus mea parva sed pulchra est.', translation: 'Minha casa é pequena mas bonita.', next: 'final_bo' },
          { text: 'Viginti dies habeo.', translation: 'Tenho vinte dias.', wrong: 'Isso não descreve a sua casa. Fale sobre ela: «domus mea…».' },
        ],
      },
      final_bo: {
        text: 'Mirum! Aliquando nos visita.',
        translation: 'Que maravilha! Um dia nos visite.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma nova amizade!', message: 'Flavia adorou saber da sua família e da sua casa — e já te convidou para visitá-la!' },
      },
    },
    glossary: [
      ['frater / soror', 'irmão / irmã'],
      ['domus mea', 'minha casa'],
      ['habeo', 'eu tenho'],
    ],
  },
];
