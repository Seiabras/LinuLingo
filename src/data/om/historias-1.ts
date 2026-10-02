import type { StorySeed } from '../types';

/**
 * Histórias do A1.1 ao B1.3 — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Ambientadas em Finfinnee, o nome oromo de Addis Abeba ("fonte de água mineral quente", segundo a
 * Wikipedia), capital da Etiópia dentro do território historicamente reivindicado pela Oromia.
 */
export const STORIES_OM_1: StorySeed[] = [
  {
    id: 'om-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Akkam, Finfinneetti!',
    emoji: '👋',
    summary: 'Você chega a Finfinnee (Addis Abeba) e conhece Caaltuu, que te dá boas-vindas e pergunta seu nome.',
    cultural_context: 'Finfinnee é o nome oromo de Addis Abeba, a capital da Etiópia — “fonte de água mineral quente”, dentro do território historicamente reivindicado pelo povo oromo e pelo estado regional da Oromia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Akkam! Baga nagaan dhufte Finfinneetti!',
        translation: 'Oi! Bem-vindo(a) a Finfinnee!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Galatoomi! Maqaan koo Lúcia.', translation: 'Obrigado! Meu nome é Lúcia.', next: 'nome' },
          { text: 'Nagaatti!', translation: 'Até logo!', wrong: 'Caaltuu acabou de te dar boas-vindas: despedir-se agora seria estranho. Agradeça primeiro com “Galatoomi”.' },
        ],
      },
      nome: {
        text: 'Gaarii dha, Lúcia! Maqaan kee bareedaa dha.',
        translation: 'Que bom, Lúcia! Seu nome é bonito.',
        emoji: '😊',
        choices: [
          { text: 'Galatoomi!', translation: 'Obrigado!', next: 'final' },
          { text: 'Bishaan, maaloo.', translation: 'Água, por favor.', wrong: 'Isso não responde ao elogio. Agradeça com “Galatoomi!”.' },
        ],
      },
      final: {
        text: 'Baga nagaan dhufte, Lúcia!',
        translation: 'Bem-vinda, Lúcia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dhufaatii gaarii!', message: 'Caaltuu sorri: você fez sua primeira conversa em oromo em Finfinnee.' },
      },
    },
    glossary: [
      ['akkam', 'oi, como vai'],
      ['galatoomi', 'obrigado'],
      ['maqaan koo', 'meu nome é'],
      ['baga nagaan dhufte', 'bem-vindo(a)'],
    ],
  },
  {
    id: 'om-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Buna maatii waliin',
    emoji: '☕',
    summary: 'Caaltuu te pergunta sobre sua família e te convida para a cerimônia do café — um momento social importante na cultura oromo e etíope.',
    cultural_context: 'A cerimônia do café (buna) — torrado, moído e servido em três rodadas diante dos convidados — é um ritual social importante no dia a dia oromo e etíope, parecido em espírito com o cafezinho de visita no Brasil.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Akkam! Maatiin kee gaarii dha?',
        translation: 'Oi! Sua família está bem?',
        emoji: '📱',
        choices: [
          { text: 'Eeyyee, maatiin koo gaarii dha.', translation: 'Sim, minha família está bem.', next: 'buna' },
          { text: 'Bishaan, maaloo.', translation: 'Água, por favor.', wrong: 'Isso não responde sobre sua família. Use “Eeyyee, maatiin koo gaarii dha.”' },
        ],
      },
      buna: {
        text: 'Gaarii! Buna waliin?',
        translation: 'Que bom! Café, juntos?',
        emoji: '☕',
        choices: [
          { text: 'Eeyyee, galatoomi!', translation: 'Sim, obrigado!', next: 'final' },
          { text: 'Nagaatti!', translation: 'Até logo!', wrong: 'Caaltuu te convidou para o café: despedir-se agora seria falta de educação. Aceite com “Eeyyee, galatoomi!”.' },
        ],
      },
      final: {
        text: 'Buna gaarii dha!',
        translation: 'O café está bom!',
        emoji: '☕',
        ending: { tone: 'bom', title: 'Buna waliin!', message: 'Você tomou café com a família de Caaltuu — um momento de hospitalidade oromo.' },
      },
    },
    glossary: [
      ['maatii', 'família'],
      ['buna', 'café'],
      ['eeyyee', 'sim'],
      ['galatoomi', 'obrigado'],
    ],
  },
];
