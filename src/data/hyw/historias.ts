import type { StorySeed } from '../types';

/** Histórias interativas do armênio ocidental — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_HYW: StorySeed[] = [
  {
    id: 'hyw-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Parev Պէյրութի մէջ',
    emoji: '👋',
    summary: 'Você conhece a Անի (Ani) num café de Beirute e faz a sua primeira conversa em armênio ocidental.',
    cultural_context: 'Beirute tem uma das maiores e mais antigas comunidades armênias da diáspora, com bairros como Bourj Hammoud conhecidos pela vida cultural armênia — jornais, escolas e igrejas em armênio ocidental.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Անունս Անի է: Ի՞նչպէս ես:',
        translation: 'Oi! Meu nome é Ani. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Լաւ եմ, շնորհակալութիւն: Իսկ դուն՞:', translation: 'Vou bem, obrigado(a)! E você?', next: 'lav' },
          { text: 'Ցտեսութիւն:', translation: 'Tchau!', wrong: 'Ani acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      lav: {
        text: 'Ես ալ լաւ եմ: Ուրկէ՞ ես դուն:',
        translation: 'Eu também vou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ես Սան Պաուլուէն եմ:', translation: 'Eu sou de São Paulo.', next: 'final_bun' },
          { text: 'Ես ջուր կը խմեմ:', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ես … էն եմ”.' },
        ],
      },
      final_bun: {
        text: 'Հիանալի՛ է: Բարի եկար Պէյրութ:',
        translation: 'Que maravilha! Bem-vindo(a) a Beirute!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Առաջին խօսակցութիւնը', message: 'Ani sorri: você fez a sua primeira conversa em armênio ocidental.' },
      },
    },
    glossary: [
      ['Բարև', 'oi, olá (parev)'],
      ['Ի՞նչպէս ես', 'como vai?'],
      ['Ես … եմ', 'eu sou/estou …'],
      ['Բարի եկար', 'bem-vindo(a)'],
    ],
  },
  {
    id: 'hyw-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ընթրիք ընտանիքին հետ',
    emoji: '👪',
    summary: 'Արամ (Aram), um amigo de Beirute, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Nas casas da diáspora armênia, o jantar em família costuma reunir várias gerações, com hats (pão), panir (queijo) e muito café depois da refeição — como em muitas culturas do Mediterrâneo Oriental.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Եղբայր կամ քոյր ունի՞ս:',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Այո, ես մէկ եղբայր ունիմ:', translation: 'Sim, eu tenho um irmão.', next: 'yeghpayr' },
          { text: 'Իմ տունս մեծ է:', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ես … ունիմ”.' },
        ],
      },
      yeghpayr: {
        text: 'Հիանալի՛ է: Կ՚ուզե՞ս գալ մեր տունը շաբաթ օրը:',
        translation: 'Que ótimo! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Այո, շատ շնորհակալութիւն:', translation: 'Sim, muito obrigado(a)!', next: 'final_bun' },
          { text: 'Ես Պէյրութէն եմ:', translation: 'Eu sou de Beirute.', wrong: 'Aram fez um convite: responda com “այո” ou “ոչ, շնորհակալութիւն”.' },
        ],
      },
      final_bun: {
        text: 'Հրաշալի՛: Մայրս հաց եւ պանիր կը պատրաստէ:',
        translation: 'Perfeito! A minha mãe está preparando pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Հրաւէր', message: 'Você foi convidado(a) para jantar com a família de Aram.' },
      },
    },
    glossary: [
      ['եղբայր / քոյր', 'irmão / irmã'],
      ['ես … ունիմ', 'eu tenho …'],
      ['այո', 'sim'],
      ['մեր տունը', 'a nossa casa'],
    ],
  },
];
