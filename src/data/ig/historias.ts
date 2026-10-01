import type { StorySeed } from '../types';

/** Histórias interativas do igbo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_IG: StorySeed[] = [
  {
    id: 'ig-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Ndewo na Onitsha',
    emoji: '👋',
    summary: 'Você conhece Ngozi no grande Mercado Onitsha e faz a sua primeira conversa em igbo.',
    cultural_context: 'O Mercado Onitsha, às margens do rio Níger, é um dos maiores mercados da África Ocidental e um símbolo do comércio igbo havia gerações.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ndewo! Aha m bụ Ngozi. Kedụ?',
        translation: 'Olá! Meu nome é Ngozi. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ọ dị mma, daalụ!', translation: 'Estou bem, obrigado(a)!', next: 'be' },
          { text: 'Ka ọ dị!', translation: 'Até mais!', wrong: 'Ngozi acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      be: {
        text: 'Aha gị bụ gịnị?',
        translation: 'Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Aha m bụ Ana.', translation: 'Meu nome é Ana.', next: 'final_bom' },
          { text: 'M chọrọ mmiri.', translation: 'Eu quero água.', wrong: 'Isso não responde qual é o seu nome. Use “Aha m bụ…”.' },
        ],
      },
      final_bom: {
        text: 'Nnọọ, Ana! Nnọọ n’Onitsha.',
        translation: 'Bem-vinda, Ana! Bem-vinda a Onitsha.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mmalite ọma!', message: 'Ngozi sorri: você fez a sua primeira conversa em igbo.' },
      },
    },
    glossary: [
      ['ndewo', 'olá'],
      ['kedụ', 'como vai?'],
      ['aha m bụ', 'meu nome é'],
      ['nnọọ', 'bem-vindo(a)'],
    ],
  },
  {
    id: 'ig-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nri n’ezinụlọ na Enugu',
    emoji: '👪',
    summary: 'Chidi, um amigo de Enugu, pergunta pela sua família e convida você para comer ji (inhame) com ofe (sopa) com os parentes dele.',
    cultural_context: 'Enugu foi a capital da antiga região carbonífera da Nigéria colonial e, por um breve período, capital da autoproclamada República de Biafra; hoje é um dos grandes centros da cultura igbo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ndewo! Ị nwere nwanne?',
        translation: 'Olá! Você tem irmãos?',
        emoji: '📱',
        choices: [
          { text: 'Ee, enwere m otu nwanne.', translation: 'Sim, tenho um irmão/uma irmã.', next: 'nwanne' },
          { text: 'Ụlọ m dị ukwu.', translation: 'Minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ee, enwere m…” ou “Mba”.' },
        ],
      },
      nwanne: {
        text: 'Ọ dị mma! Ị chọrọ iri ji na ofe?',
        translation: 'Que bom! Você quer comer inhame com sopa?',
        emoji: '🍲',
        choices: [
          { text: 'Ee, achọrọ m!', translation: 'Sim, eu quero!', next: 'final_bom' },
          { text: 'Aha m bụ Ana.', translation: 'Meu nome é Ana.', wrong: 'Chidi fez um convite: responda com “Ee” ou “Mba”.' },
        ],
      },
      final_bom: {
        text: 'Ọ maka! Ka anyị rie ji na ofe.',
        translation: 'Que bom! Vamos comer inhame com sopa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nri ọma!', message: 'Chidi convidou você para comer com a família dele em Enugu — uma boa forma de praticar o igbo à mesa.' },
      },
    },
    glossary: [
      ['nwanne', 'irmão, irmã'],
      ['enwere m', 'eu tenho'],
      ['ee', 'sim'],
      ['ka anyị', 'vamos (lit. “que nós”)'],
    ],
  },
];
