import type { StorySeed } from '../types';

/**
 * Histórias interativas do náuatle clássico — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. Ambientadas em Tenochtitlan/Tlatelolco, as duas cidades-irmãs do Vale do México na
 * época do náuatle clássico. O jogador escolhe as próprias respostas: nem o narrador nem os
 * personagens afirmam quem ele é.
 */
export const STORIES_NAH: StorySeed[] = [
  {
    id: 'nah-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Niltze! No mercado de Tlatelolco',
    emoji: '🧺',
    summary: 'Você chega ao grande mercado de Tlatelolco, no Vale do México, e troca os primeiros cumprimentos com uma vendedora.',
    cultural_context:
      'O mercado (tianquiztli) de Tlatelolco, cidade-irmã de Tenochtitlan, impressionou até os próprios cronistas espanhóis pelo tamanho e pela variedade de produtos — de tortilhas e cacau a penas e pedras preciosas.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Niltze! Tlēn motōcatzin?',
        translation: 'Olá! Qual é o seu nome? (forma de respeito)',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Niltze! Tlazohcamati!', translation: 'Olá! Obrigado!', next: 'seguir' },
          { text: 'Ahmō.', translation: 'Não.', wrong: 'Isso soa como recusar o cumprimento, não como responder a ele. Tente “Niltze! Tlazohcamati!”.' },
        ],
      },
      seguir: {
        text: 'Ticualli? Nicnequi niccua tlaxcalli.',
        translation: 'Você está bem? Eu quero comer tortilha.',
        emoji: '🫓',
        choices: [
          { text: 'Quēmah, nicualli.', translation: 'Sim, eu estou bem.', next: 'comida' },
          { text: 'Niltze!', translation: 'Olá!', wrong: 'Isso não responde “você está bem?”. Tente “Quēmah” (sim) ou “Ahmō” (não).' },
        ],
      },
      comida: {
        text: 'Nicnequi tlaxcalli. Tehhuātl?',
        translation: 'Eu quero tortilha. E você (o que você quer)?',
        emoji: '🍅',
        choices: [
          { text: 'Nicnequi cacahuatl.', translation: 'Eu quero cacau.', next: 'final_bom' },
          { text: 'Nicnequi tomatl.', translation: 'Eu quero tomate.', next: 'final_bom' },
          { text: 'Mācuīlli.', translation: 'Cinco.', wrong: 'Isso é um número, não responde o que você quer comer. Tente “Nicnequi...” e o nome de uma comida.' },
        ],
      },
      final_bom: {
        text: 'Cualli! Tlazohcamati, nimitzittaz!',
        translation: 'Que bom! Obrigada, até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma boa compra!', message: 'Você trocou os primeiros cumprimentos e fez a sua primeira compra no mercado de Tlatelolco.' },
      },
    },
    glossary: [
      ['Niltze / Tlazohcamati', 'olá / obrigado'],
      ['Nicnequi', 'eu quero'],
      ['Ticualli?', 'você está bem?'],
    ],
  },
  {
    id: 'nah-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na casa, em Tenochtitlan',
    emoji: '🏡',
    summary: 'Um morador de Tenochtitlan recebe você em casa e fala um pouco da família dele e da comida que está preparando.',
    cultural_context:
      'As casas mexicas do Vale do México costumavam se organizar ao redor de um pátio, com cômodos simples de adobe ou madeira; a família incluía várias gerações, e a hospitalidade com visitantes era valorizada.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Niltze! Quēn ticualli?',
        translation: 'Olá! Como você está?',
        emoji: '🏡',
        choices: [
          { text: 'Quēmah, nicualli.', translation: 'Sim, eu estou bem.', next: 'familia' },
          { text: 'Tlazohcamati.', translation: 'Obrigado.', wrong: 'Isso agradece, mas não responde como você está. Tente “Quēmah, nicualli.”.' },
        ],
      },
      familia: {
        text: 'Nonān cualli, notah cualli. Tehhuātl, ticonētl?',
        translation: 'Minha mãe é boa, meu pai é bom. Você, é uma criança?',
        emoji: '👪',
        choices: [
          { text: 'Quēmah, niconētl.', translation: 'Sim, eu sou uma criança.', next: 'comida2' },
          { text: 'Ahmō.', translation: 'Não.', next: 'comida2' },
          { text: 'Nicnequi nacatl.', translation: 'Eu quero carne.', wrong: 'Isso fala de comida, não responde se você é uma criança.' },
        ],
      },
      comida2: {
        text: 'Nicnequi niccua tlaxcalli. Cacahuatl cualli.',
        translation: 'Eu quero comer tortilha. O cacau é bom.',
        emoji: '🍫',
        choices: [
          { text: 'Quēmah, cualli.', translation: 'Sim, é bom.', next: 'final_bom2' },
          { text: 'Nacatl cualli.', translation: 'A carne é boa.', next: 'final_bom2' },
          { text: 'Mācuīlli.', translation: 'Cinco.', wrong: 'Isso é um número, não fala da comida.' },
        ],
      },
      final_bom2: {
        text: 'Cualli! Tlazohcamati, nimitzittaz!',
        translation: 'Que bom! Obrigado, até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma visita amistosa', message: 'Você conheceu um pouco da família e da comida de uma casa em Tenochtitlan.' },
      },
    },
    glossary: [
      ['Nonān / Notah', 'minha mãe / meu pai'],
      ['Ticonētl?', 'você é uma criança?'],
      ['Nicnequi niccua', 'eu quero comer'],
    ],
  },
];
