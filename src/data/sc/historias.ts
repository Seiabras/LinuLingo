import type { StorySeed } from '../types';

/** Histórias interativas do sardo — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_SC: StorySeed[] = [
  {
    id: 'sc-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bona die in Casteddu',
    emoji: '👋',
    summary: 'Você conhece Maria numa praça de Cagliari (Casteddu, em sardo) e faz a sua primeira conversa em sardo.',
    cultural_context: 'Cagliari, a capital da Sardenha, se chama Casteddu em sardo: “o castelo”, por causa do bairro antigo no alto do morro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bona die! Mi naro Maria. Comente istas?',
        translation: 'Bom dia! Eu me chamo Maria. Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bene, gràtzias! E tue?', translation: 'Bem, obrigado! E você?', next: 'bene' },
          { text: 'Adiosu!', translation: 'Tchau!', wrong: 'Maria acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      bene: {
        text: 'Bene puru deo! De inue ses?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'So de su Brasile.', translation: 'Sou do Brasil.', next: 'final_bonu' },
          { text: 'Mi praghet su cafè.', translation: 'Eu gosto de café.', wrong: 'Isso não responde de onde você é. Use “So de…”.' },
        ],
      },
      final_bonu: {
        text: 'Ite bellu! Benènnidu a Casteddu!',
        translation: 'Que legal! Bem-vindo a Cagliari!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Una bella die!', message: 'Maria sorri: você fez a sua primeira conversa em sardo.' },
      },
    },
    glossary: [
      ['bona die', 'bom dia, olá'],
      ['comente istas?', 'como você está?'],
      ['so de', 'sou de'],
      ['benènnidu', 'bem-vindo'],
    ],
  },
  {
    id: 'sc-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Sa familia de Antoni',
    emoji: '👪',
    summary: 'Antoni, um amigo de Nuoro, pergunta pela sua família e convida você para comer em casa.',
    cultural_context: 'No interior da Sardenha, a família e a mesa andam juntas: pão fino (carasau), queijo de ovelha e vinho da ilha aparecem em quase toda refeição de domingo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Salude! Tenes frades o sorres?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Eja, apo unu frade e una sorre.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'frades' },
          { text: 'Sa domo mea est manna.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “apo…” (tenho).' },
        ],
      },
      frades: {
        text: 'Bellu! Cheres manigare in domo nostra sa domìniga?',
        translation: 'Que bom! Quer comer na nossa casa no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Eja, gràtzias meda!', translation: 'Sim, muito obrigado!', next: 'final_bonu' },
          { text: 'So de su Brasile.', translation: 'Sou do Brasil.', wrong: 'Antoni fez um convite: responda com “eja” (sim) ou “no, gràtzias”.' },
        ],
      },
      final_bonu: {
        text: 'Ajò! Mama at a fàghere pane e casu.',
        translation: 'Vamos! A mamãe vai fazer pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Unu cumbidu!', message: 'Você foi convidado para o almoço de domingo em família.' },
      },
    },
    glossary: [
      ['frade / sorre', 'irmão / irmã'],
      ['apo', 'eu tenho'],
      ['eja', 'sim'],
      ['ajò!', 'vamos!'],
    ],
  },
];
