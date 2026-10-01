import type { StorySeed } from '../types';

/** Histórias interativas do armênio — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_HY: StorySeed[] = [
  {
    id: 'hy-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Բարև Երևանում',
    emoji: '👋',
    summary: 'Você conhece a Աննա (Anna) na Praça da República, no centro de Erevan, e faz a sua primeira conversa em armênio.',
    cultural_context: 'A Praça da República (Հանրապետության հրապարակ) é o coração de Erevan, cercada de prédios de toba rosada, a pedra vulcânica típica da cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Ես Աննա եմ: Ինչպե՞ս ես:',
        translation: 'Oi! Eu sou a Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Լավ եմ, շնորհակալություն: Իսկ դու՞:', translation: 'Vou bem, obrigado(a)! E você?', next: 'lav' },
          { text: 'Ցտեսություն:', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      lav: {
        text: 'Նույնպես լավ: Որտեղի՞ց ես դու:',
        translation: 'Eu também vou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ես Սան Պաուլուից եմ:', translation: 'Eu sou de São Paulo.', next: 'final_bun' },
          { text: 'Ես ջուր եմ խմում:', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ես … ից եմ”.' },
        ],
      },
      final_bun: {
        text: 'Հրաշալի՛ է: Բարի գալուստ Երևան:',
        translation: 'Que maravilha! Bem-vindo(a) a Erevan!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Առաջին խոսակցությունը', message: 'Anna sorri: você fez a sua primeira conversa em armênio.' },
      },
    },
    glossary: [
      ['Բարև', 'oi, olá'],
      ['Ինչպե՞ս ես', 'como vai?'],
      ['Ես … եմ', 'eu sou/estou …'],
      ['Բարի գալուստ', 'bem-vindo(a)'],
    ],
  },
  {
    id: 'hy-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ընթրիք ընտանիքի հետ',
    emoji: '👪',
    summary: 'Գոռ (Gor), um amigo de Erevan, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Nas casas armênias é comum o jantar reunir várias gerações, com hats (pão), panir (queijo) e muito surj (café) depois da refeição.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Բարև: Եղբայր կամ քույր ունե՞ս:',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Այո, ես մեկ եղբայր ունեմ:', translation: 'Sim, eu tenho um irmão.', next: 'eghbayr' },
          { text: 'Իմ տունը մեծ է:', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ես … ունեմ”.' },
        ],
      },
      eghbayr: {
        text: 'Հրաշալի՛ է: Ուզու՞մ ես գալ մեր տուն շաբաթ օրը:',
        translation: 'Que ótimo! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Այո, շատ շնորհակալություն:', translation: 'Sim, muito obrigado(a)!', next: 'final_bun' },
          { text: 'Ես Երևանից եմ:', translation: 'Eu sou de Erevan.', wrong: 'Gor fez um convite: responda com “այո” ou “ոչ, շնորհակալություն”.' },
        ],
      },
      final_bun: {
        text: 'Հիանալի՛: Իմ մայրը հաց և պանիր է պատրաստում:',
        translation: 'Perfeito! A minha mãe está preparando pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Հրավեր', message: 'Você foi convidado(a) para jantar com a família de Gor.' },
      },
    },
    glossary: [
      ['եղբայր / քույր', 'irmão / irmã'],
      ['ես … ունեմ', 'eu tenho …'],
      ['այո', 'sim'],
      ['մեր տուն', 'a nossa casa'],
    ],
  },
];
