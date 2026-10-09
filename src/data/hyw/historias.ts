import type { StorySeed } from '../types';

/** Histórias interativas do armênio ocidental — uma por subnível, do A1.1 ao A2.2 (pacote incompleto, ver `incomplete` em index.ts). */
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
  {
    id: 'hyw-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Շուկային օրը',
    emoji: '🏪',
    summary: 'A Անի (Ani) convida você pra ir com ela ao mercado, e vocês combinam os planos de amanhã.',
    cultural_context: 'Bourj Hammoud, um bairro de Beirute conhecido pela vida cultural armênia, tem um comércio movimentado onde o armênio ocidental ainda é a língua do dia a dia, de mercado a igreja.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Այսօր շուկայ պիտի երթամ:',
        translation: 'Oi! Hoje eu vou (irei) ao mercado.',
        emoji: '🏪',
        choices: [
          { text: 'Ես ալ կու գամ:', translation: 'Eu também vou (venho)!', next: 'shuka' },
          { text: 'Ես աշխատանք ունիմ:', translation: 'Eu tenho trabalho.', wrong: 'Isso não diz se você vai com a Ani ou não. Diga “ես ալ կու գամ” (eu também vou).' },
        ],
      },
      shuka: {
        text: 'Հիանալի՜: Դրամ ունիս;',
        translation: 'Que ótimo! Você tem dinheiro?',
        emoji: '💰',
        choices: [
          { text: 'Այո, դրամ ունիմ:', translation: 'Sim, eu tenho dinheiro.', next: 'final' },
          { text: 'Ես վաղը կու գամ:', translation: 'Eu venho amanhã.', wrong: 'Isso não responde se você tem dinheiro agora. Diga “այո, դրամ ունիմ” ou “ոչ”.' },
        ],
      },
      final: {
        text: 'Հրաշալի՜: Վաղը գրադարան մըն ալ պիտի երթամ:',
        translation: 'Maravilha! Amanhã eu também vou (irei) à biblioteca.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Շուկային օրը', message: 'Você combinou os planos de hoje e de amanhã com a Ani, usando o futuro com “պիտի” e as palavras novas da cidade.' },
      },
    },
    glossary: [
      ['շուկայ', 'mercado'],
      ['դրամ ունիմ', 'eu tenho dinheiro'],
      ['պիտի երթամ', 'eu vou, eu irei'],
      ['վաղը', 'amanhã'],
    ],
  },
  {
    id: 'hyw-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Տոմսը եւ դրամը',
    emoji: '🎫',
    summary: 'Արամ (Aram) convida você para ir com ele até a estação, e os dois conferem se já têm o bilhete.',
    cultural_context: 'Viajar entre as comunidades da diáspora armênia ocidental — Beirute, Marselha, a região de Los Angeles — faz parte da vida de muitas famílias desde o início do século XX.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Վաղը կայարան պիտի երթամ:',
        translation: 'Oi! Amanhã eu vou (irei) à estação.',
        emoji: '🚉',
        choices: [
          { text: 'Ես ալ կու գամ կայարան:', translation: 'Eu também vou (venho) à estação!', next: 'tomus' },
          { text: 'Ես աշխատանք ունիմ տանը:', translation: 'Eu tenho trabalho em casa.', wrong: 'Isso não responde se você vai com o Aram à estação. Diga “ես ալ կու գամ” (eu também vou).' },
        ],
      },
      tomus: {
        text: 'Հրաշալի՜: Տոմսդ ունիս;',
        translation: 'Maravilha! Você tem o seu bilhete?',
        emoji: '🎫',
        choices: [
          { text: 'Այո, տոմսս ունիմ:', translation: 'Sim, eu tenho o meu bilhete.', next: 'final' },
          { text: 'Ես դրամ պիտի գրեմ:', translation: 'Eu vou escrever dinheiro.', wrong: 'Isso não faz sentido aqui. Responda se você tem o bilhete, com “ունիս”.' },
        ],
      },
      final: {
        text: 'Հիանալի՜: Կայարանը մեծ է:',
        translation: 'Que ótimo! A estação é grande.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Կայարանի օրը', message: 'Você confirmou o seu bilhete com o Aram, usando os sufixos “-ս” (meu) e “-դ” (teu) e o vocabulário novo de viagem.' },
      },
    },
    glossary: [
      ['կայարան', 'estação'],
      ['տոմս', 'bilhete'],
      ['դրամ', 'dinheiro'],
      ['տոմսդ ունիս;', 'você tem o seu bilhete?'],
    ],
  },
];
