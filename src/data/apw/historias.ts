import type { StorySeed } from '../types';

/**
 * Histórias interativas do apache ocidental — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Ambientadas em dois lugares reais: San Carlos, Arizona, uma das comunidades da Reserva
 * Apache de San Carlos, segundo en.wikipedia.org/wiki/San_Carlos_Apache_Indian_Reservation; e a região
 * das Montanhas Brancas (White Mountain), no Arizona, onde o povo apache ocidental se autodesigna
 * “Dził Łigai Si'án N'dee” (“povo das Montanhas Brancas”), segundo o Wiktionary em inglês. O jogador
 * escolhe as próprias respostas em cada cena; nenhum personagem decide por ele quem ele é.
 */
export const STORIES_APW: StorySeed[] = [
  {
    id: 'apw-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Dagotʼee! Chegando a San Carlos',
    emoji: '👋',
    summary: 'Você chega a San Carlos, no Arizona, e troca o primeiro cumprimento com uma moradora apache ocidental.',
    cultural_context:
      'San Carlos é uma das comunidades da Reserva Apache de San Carlos, no Arizona, criada em 1872 e hoje lar de mais de quinze mil pessoas inscritas na Tribo Apache de San Carlos, segundo a Wikipédia em inglês.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dagotʼee!',
        translation: 'Oi!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dagotʼee!', translation: 'Oi!', next: 'resposta' },
          { text: 'Áho!', translation: 'Obrigado!', wrong: 'Ela está te cumprimentando agora, não espera um agradecimento ainda — responda com “Dagotʼee!”.' },
        ],
      },
      resposta: {
        text: 'Ndee. Isdzán.',
        translation: 'Uma pessoa. Uma mulher.',
        emoji: '👩',
        choices: [
          { text: 'Áho!', translation: 'Obrigado!', next: 'final_bom' },
          { text: 'Dagotʼee!', translation: 'Oi!', wrong: 'Vocês já se cumprimentaram — agora é hora de agradecer com “Áho!”.' },
        ],
      },
      final_bom: {
        text: 'Gozhǫǫ doleeł!',
        translation: 'Que venham paz e bondade! (uma despedida de boa vontade)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Um bom encontro em San Carlos!',
          message: 'Você trocou o primeiro cumprimento em apache ocidental com uma moradora de San Carlos, no Arizona, na Reserva Apache de San Carlos.',
        },
      },
    },
    glossary: [
      ['dagotʼee', 'oi, olá'],
      ['áho', 'obrigado(a)'],
      ['gozhǫǫ doleeł', 'que venham paz e bondade (despedida de boa vontade)'],
    ],
  },
  {
    id: 'apw-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Contando bichos nas Montanhas Brancas',
    emoji: '🏔️',
    summary: 'Perto da região das Montanhas Brancas, você conta até quatro e nomeia um coelho e um cavalo em apache ocidental.',
    cultural_context:
      'A região das Montanhas Brancas (White Mountain), no leste do Arizona, é o território do apache ocidental de White Mountain, que se autodesigna “Dził Łigai Si\'án N\'dee” — literalmente “povo das Montanhas Brancas”, com a própria palavra “dził” (montanha) dentro do nome, segundo o Wiktionary em inglês.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Dagotʼee! Shash.',
        translation: 'Oi! Um urso.',
        emoji: '🐻',
        choices: [
          { text: 'Dagotʼee!', translation: 'Oi!', next: 'conta' },
          { text: 'Áho!', translation: 'Obrigado!', wrong: 'Primeiro devolva o cumprimento com “Dagotʼee!” — o agradecimento vem depois.' },
        ],
      },
      conta: {
        text: 'Dałaá, nakih, táági…',
        translation: 'Um, dois, três…',
        emoji: '🔢',
        choices: [
          { text: "Dį́į́'i.", translation: 'Quatro.', next: 'bichos' },
          { text: 'Dałaá.', translation: 'Um.', wrong: 'Isso não continua a contagem — depois de “táági” (três) vem “dį́į́\'i” (quatro).' },
        ],
      },
      bichos: {
        text: "Dį́į́'i! Gah, łį́į́ʼ.",
        translation: 'Quatro! Coelho, cavalo.',
        emoji: '🐴',
        choices: [
          { text: 'Áho!', translation: 'Obrigado!', next: 'final_bom' },
          { text: 'Nakih.', translation: 'Dois.', wrong: 'A contagem já terminou — agradeça com “Áho!”.' },
        ],
      },
      final_bom: {
        text: 'Áho!',
        translation: 'Obrigado!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Bichos e números nas Montanhas Brancas!',
          message: 'Você contou até quatro em apache ocidental e nomeou um coelho e um cavalo perto da região das Montanhas Brancas, no Arizona — terra do povo que se autodesigna “Dził Łigai Si\'án N\'dee”.',
        },
      },
    },
    glossary: [
      ["dałaá, nakih, táági, dį́į́'i", 'um, dois, três, quatro'],
      ['gah', 'coelho'],
      ['łį́į́ʼ', 'cavalo'],
    ],
  },
];
