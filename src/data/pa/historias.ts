import type { StorySeed } from '../types';

/** Histórias interativas do panjabi — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_PA: StorySeed[] = [
  {
    id: 'pa-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'سَلام، لاہور!',
    emoji: '👋',
    summary: 'Você encontra o Ali numa praça de Lahore e faz a sua primeira conversa em panjabi.',
    cultural_context: 'Lahore é a capital da província paquistanesa de Punjab e o maior centro cultural do panjabi escrito em Shahmukhi — imprensa, poesia e teatro na língua se concentram ali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سَلام! علی ناں اے۔ تہاڈا ناں کی اے؟',
        translation: 'Oi! Ali é o nome. Qual é o seu nome?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'سَلام! لینو ناں اے۔', translation: 'Oi! Linu é o nome.', next: 'bem' },
          { text: 'رَبّ راکھا!', translation: 'Tchau!', wrong: 'Ali acabou de se apresentar e perguntar seu nome — responda à pergunta primeiro, não se despeça já.' },
        ],
      },
      bem: {
        text: 'چنگا! تہاڈا گَھر وڈا اے؟',
        translation: 'Que bom! Sua casa é grande?',
        emoji: '😊',
        choices: [
          { text: 'ہاں، گَھر وڈا اے۔', translation: 'Sim, a casa é grande.', next: 'final_bom' },
          { text: 'چاہ پسند اے۔', translation: 'Eu gosto de chá.', wrong: 'Isso não responde sobre a casa. Use “ہاں”/“نہیں” com “گَھر وڈا اے” ou “گَھر چھوٹا اے”.' },
        ],
      },
      final_bom: {
        text: 'شکریہ!',
        translation: 'Obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa conversa!', message: 'Ali sorri: você fez a sua primeira conversa em panjabi, em Lahore.' },
      },
    },
    glossary: [
      ['سَلام', 'oi'],
      ['تہاڈا ناں کی اے؟', 'qual é o seu nome?'],
      ['وڈا', 'grande'],
    ],
  },
  {
    id: 'pa-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'سَلام، فاطمہ!',
    emoji: '🏠',
    summary: 'Você visita a Fatima e conhece um pouco da família e do chá dela.',
    cultural_context: 'O chá (“چاہ”) é parte do dia a dia panjabi, servido a visitas quase sempre que alguém entra numa casa — oferecer chá é um gesto comum de hospitalidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'سَلام! تہاڈا ٹَبَّر وڈا اے؟',
        translation: 'Oi! Sua família é grande?',
        emoji: '📱',
        choices: [
          { text: 'ہاں، وڈا ٹَبَّر اے۔', translation: 'Sim, é uma família grande.', next: 'fam' },
          { text: 'کُتّا لال اے۔', translation: 'O cachorro é vermelho.', wrong: 'Isso não responde sobre a família. Use “ہاں”/“نہیں” com “ٹَبَّر وڈا اے” ou “چنگا اے”.' },
        ],
      },
      fam: {
        text: 'چنگا! چاہ پسند اے؟',
        translation: 'Que bom! Você gosta de chá?',
        emoji: '🍵',
        choices: [
          { text: 'ہاں، چاہ پسند اے۔', translation: 'Sim, eu gosto de chá.', next: 'final_bom' },
          { text: 'گَھر چھوٹا اے۔', translation: 'A casa é pequena.', wrong: 'Isso não responde sobre o chá. Use “ہاں”/“نہیں” com “چاہ پسند اے”.' },
        ],
      },
      final_bom: {
        text: 'شکریہ! چاہ چنگا اے۔',
        translation: 'Obrigado! O chá é bom.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um chá em família!', message: 'Fatima te convida pra um chá com a família — um costume bem panjabi.' },
      },
    },
    glossary: [
      ['ٹَبَّر', 'família'],
      ['چاہ پسند اے', 'eu gosto de chá'],
      ['چنگا', 'bom'],
    ],
  },
];
