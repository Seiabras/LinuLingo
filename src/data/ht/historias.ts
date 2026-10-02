import type { StorySeed } from '../types';

/**
 * Histórias interativas do crioulo haitiano — uma por nível (A1.1 e A1.2), pacote incompleto (ver
 * `incomplete` em index.ts). A primeira é um primeiro encontro no Haiti; a segunda, uma compra no
 * mercado (mache), onde boa parte do comércio diário do país acontece. O jogador não tem identidade
 * imposta pela história: só escolhe o que falar.
 */
export const STORIES_HT: StorySeed[] = [
  {
    id: 'ht-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Bonjou nan Ayiti',
    emoji: '👋',
    summary: 'Você acaba de chegar ao Haiti e Jak puxa conversa com você.',
    cultural_context: 'Desde a Constituição de 1987, o crioulo haitiano é língua oficial do Haiti ao lado do francês — e, segundo a Wikipédia, é a única língua que todo haitiano tem em comum.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonjou! Mwen rele Jak. Kijan ou rele?',
        translation: 'Oi! Eu me chamo Jak. Como você se chama?',
        emoji: '🙋',
        choices: [
          { text: 'Mwen rele Ana.', translation: 'Eu me chamo Ana.', next: 'nome' },
          { text: 'Orevwa!', translation: 'Tchau!', wrong: 'Jak acabou de se apresentar e perguntou seu nome: despedir-se agora seria estranho. Diga seu nome com “Mwen rele…”.' },
        ],
      },
      nome: {
        text: 'Kijan ou ye?',
        translation: 'Como você está?',
        emoji: '😊',
        choices: [
          { text: 'Mwen byen, mèsi.', translation: 'Eu estou bem, obrigado(a).', next: 'byen' },
          { text: 'Mwen gen yon chat.', translation: 'Eu tenho um gato.', wrong: 'Isso não responde como você está. Diga “Mwen byen” (eu estou bem).' },
        ],
      },
      byen: {
        text: 'Ou gen fanmi nan Ayiti?',
        translation: 'Você tem família no Haiti?',
        emoji: '👪',
        choices: [
          { text: 'Non, mwen pa gen fanmi nan Ayiti.', translation: 'Não, eu não tenho família no Haiti.', next: 'final' },
          { text: 'Wi, mwen vle yon kafe.', translation: 'Sim, eu quero um café.', wrong: 'Isso não responde se você tem família. Use “Wi, mwen gen…” ou “Non, mwen pa gen…”.' },
        ],
      },
      final: {
        text: 'Nou se zanmi!',
        translation: 'Nós somos amigos!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Nou se zanmi!', message: 'Jak sorri: você fez a sua primeira conversa em crioulo haitiano e já tem um amigo no Haiti.' },
      },
    },
    glossary: [
      ['bonjou', 'oi, bom dia'],
      ['mwen rele', 'eu me chamo'],
      ['kijan ou ye?', 'como você está?'],
      ['nou se zanmi', 'nós somos amigos'],
    ],
  },
  {
    id: 'ht-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nan mache a',
    emoji: '🧺',
    summary: 'No mercado, Manman Woz vende água, pão e café — e você precisa dizer o que quer e se tem dinheiro.',
    cultural_context: 'A palavra “mache” (mercado) vem do francês “marché”. É no mercado que boa parte do comércio do dia a dia acontece no Haiti.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonjou! Kisa ou vle?',
        translation: 'Olá! O que você quer?',
        emoji: '🧺',
        choices: [
          { text: 'Mwen vle dlo ak pen.', translation: 'Eu quero água e pão.', next: 'dinheiro' },
          { text: 'Mwen rele Ana.', translation: 'Eu me chamo Ana.', wrong: 'Manman Woz perguntou o que você quer comprar, não o seu nome. Diga “Mwen vle…”.' },
        ],
      },
      dinheiro: {
        text: 'Ou gen lajan?',
        translation: 'Você tem dinheiro?',
        emoji: '💰',
        choices: [
          { text: 'Wi, mwen gen lajan.', translation: 'Sim, eu tenho dinheiro.', next: 'final' },
          { text: 'Mwen pa vle dlo.', translation: 'Eu não quero água.', wrong: 'Manman Woz perguntou se você tem dinheiro, não se quer água. Responda “Wi, mwen gen…” ou “Non, mwen pa gen…”.' },
        ],
      },
      final: {
        text: 'Mèsi anpil! Orevwa!',
        translation: 'Muito obrigada! Até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mèsi anpil!', message: 'Você comprou água e pão no mercado, falando crioulo haitiano do começo ao fim.' },
      },
    },
    glossary: [
      ['kisa ou vle?', 'o que você quer?'],
      ['mwen vle', 'eu quero'],
      ['ou gen lajan?', 'você tem dinheiro?'],
      ['mèsi anpil', 'muito obrigado(a)'],
    ],
  },
];
