import type { StorySeed } from '../types';

/**
 * História do A2.1, montada só com frases já revisadas da unidade do mercado (curriculo.ts, A2.1):
 * o iorubá está marcado como incompleto até esse subnível.
 */
export const STORIES_YO_A2: StorySeed[] = [
  {
    id: 'yo-h07',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ẹja ní ọjà',
    emoji: '🐟',
    summary: 'Numa feira de Ibadan, você compra peixe e laranjas e pechincha o preço com a vendedora.',
    cultural_context:
      'Na feira iorubá (ọjà), pechinchar faz parte da conversa: a vendedora diz um preço alto, o comprador reclama com bom humor, e os dois chegam a um meio-termo. Cumprimentar antes de perguntar o preço é sinal de educação.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ẹ kú àbọ̀ o, ẹ wá ra ọjà! Kí ni ẹ fẹ́ rà lónìí?',
        translation: 'Bem-vindo, venha comprar! O que o senhor quer comprar hoje?',
        emoji: '🧺',
        choices: [
          { text: 'Mo fẹ́ ra ẹja méjì àti ọsàn mẹ́wàá.', translation: 'Quero comprar dois peixes e dez laranjas.', next: 'preco' },
          { text: 'Ọmọ ọdún mẹ́ẹ̀ẹ́dógún ni àbúrò mi.', translation: 'O meu irmão mais novo tem quinze anos.', wrong: 'A vendedora perguntou o que você quer comprar, não a idade do seu irmão.' },
        ],
      },
      preco: {
        text: 'Ẹja yìí dára gan-an. Ẹgbẹ̀rún méjì náírà ni.',
        translation: 'Este peixe está ótimo. São duas mil nairas.',
        emoji: '💸',
        choices: [
          { text: 'Ó wọ́n jù! Ẹ jọ̀ọ́, ẹ dín in kù díẹ̀.', translation: 'Está caro demais! Por favor, abaixe um pouco.', next: 'desconto' },
          { text: 'Mẹ́ta àti mẹ́ta jẹ́ mẹ́fà.', translation: 'Três e três são seis.', wrong: 'Na feira se pechincha: reclame do preço com «Ó wọ́n jù!» e peça desconto.' },
        ],
      },
      desconto: {
        text: 'Ó dáa.',
        translation: 'Está bem.',
        emoji: '🤝',
        choices: [
          { text: 'Ó dáa, mo máa rà á. Ẹ ṣé!', translation: 'Está bem, vou levar. Obrigado!', next: 'final_bom' },
          { text: 'Mi ò ní owó tó bẹ́ẹ̀.', translation: 'Não tenho tanto dinheiro.', wrong: 'A vendedora já aceitou baixar o preço: agora é hora de fechar a compra.' },
        ],
      },
      final_bom: {
        text: 'Ẹ ṣé o!',
        translation: 'Obrigada!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Negócio fechado!', message: 'Você pechinchou como se faz no ọjà e saiu com o peixe e as laranjas.' },
      },
    },
    glossary: [
      ['ọjà', 'feira, mercado'],
      ['èló', 'quanto (custa)?'],
      ['Ó wọ́n jù!', 'Está caro demais!'],
      ['ẹ dín in kù díẹ̀', 'abaixe um pouco (o preço)'],
      ['Ó dáa', 'está bem'],
    ],
  },
];
