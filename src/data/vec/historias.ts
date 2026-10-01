import type { StorySeed } from '../types';

/** Histórias interativas do vêneto — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_VEC: StorySeed[] = [
  {
    id: 'vec-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bondì a Venesia',
    emoji: '👋',
    summary: 'Você conhece Ana numa calle (rua estreita) perto do Ponte de Rialto, em Veneza, e faz a sua primeira conversa em vêneto.',
    cultural_context: 'As ruas estreitas de Veneza se chamam “calli” (singular “calle”); o Ponte de Rialto é um dos pontos mais movimentados da cidade, cheio de lojas e bancas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bondì! Mi me ciamo Ana. Come stu?',
        translation: 'Oi! Eu me chamo Ana. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Ben, grasie! E ti?', translation: 'Bem, obrigado! E você?', next: 'ben' },
          { text: 'Ciao!', translation: 'Tchau!', wrong: 'Ana acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      ben: {
        text: 'Anca mi, ben! Da dove sito?',
        translation: 'Eu também, bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Mi son de San Paulo.', translation: 'Sou de São Paulo.', next: 'final_bon' },
          { text: 'Mi bevo acqua.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Mi son de…”.' },
        ],
      },
      final_bon: {
        text: 'Bela roba! Benvegnù a Venesia!',
        translation: 'Que legal! Bem-vindo a Veneza!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Un bon cométo!', message: 'Ana sorri: você fez a sua primeira conversa em vêneto.' },
      },
    },
    glossary: [
      ['bondì', 'oi, bom dia'],
      ['come stu?', 'como vai?'],
      ['mi son de', 'eu sou de'],
      ['benvegnù', 'bem-vindo'],
    ],
  },
  {
    id: 'vec-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na sena in fameja',
    emoji: '👪',
    summary: 'Marco, um amigo de Verona, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Verona, famosa por “Romeu e Julieta”, fica dentro da área onde o vêneto é tradicionalmente falado, junto de Veneza, Pádua, Treviso e Vicenza.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bondì! Gheto fradei o sorele?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Sì, go un fradeo e na sorela.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'fradei' },
          { text: 'La me caxa xe granda.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “go…”.' },
        ],
      },
      fradei: {
        text: 'Bela roba! Vustu vegner da noialtri sabo?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Sì, grasie mile!', translation: 'Sim, muito obrigado!', next: 'final_bon' },
          { text: 'Mi son de San Paulo.', translation: 'Sou de São Paulo.', wrong: 'Marco fez um convite: responda com “sì” ou “no, grasie”.' },
        ],
      },
      final_bon: {
        text: 'Benon! Me mama la fa pan e formajo.',
        translation: 'Muito bem! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Un invito!', message: 'Você foi convidado para jantar com a família de Marco.' },
      },
    },
    glossary: [
      ['fradeo / sorela', 'irmão / irmã'],
      ['go', 'eu tenho'],
      ['sì', 'sim'],
      ['da noialtri', 'na nossa casa'],
    ],
  },
];
