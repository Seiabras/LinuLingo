import type { StorySeed } from '../types';

/**
 * Histórias interativas do tagalo — uma por nível (A1.1, A1.2, A2.1 e A2.2), pacote em construção.
 * Todas as falas usam só palavras conferidas em vocabulario.ts e os padrões de frase conferidos em
 * gramatica.ts (predicado + ang/si, “ba” para pergunta, “po”/“opo” para respeito).
 */
export const STORIES_TL: StorySeed[] = [
  {
    id: 'tl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Kumusta sa Maynila',
    emoji: '👋',
    summary: 'Você conhece Maria numa praça de Manila e faz a sua primeira conversa em tagalo.',
    cultural_context: 'Manila (Maynila) é a capital das Filipinas, no coração da região onde o tagalo é falado como língua nativa — a mesma região cuja fala serviu de base para o filipino, língua nacional do país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kumusta ka? Ako si Maria.',
        translation: 'Como você está? Eu sou a Maria.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Mabuti ako, salamat! Ikaw?', translation: 'Estou bem, obrigado! E você?', next: 'ben' },
          { text: 'Paalam!', translation: 'Tchau!', wrong: 'Maria acabou de te cumprimentar e se apresentar — se despedir agora seria estranho. Responda “Mabuti ako” primeiro.' },
        ],
      },
      ben: {
        text: 'Mabuti rin ako! Ano ang pangalan mo?',
        translation: 'Eu também estou bem! Qual é o seu nome?',
        emoji: '😊',
        choices: [
          { text: 'Ako si Ana.', translation: 'Eu sou a Ana.', next: 'final_bo' },
          { text: 'Malaki ang bahay.', translation: 'A casa é grande.', wrong: 'Isso não responde “qual é o seu nome?”. Use “Ako si…” com o seu nome.' },
        ],
      },
      final_bo: {
        text: 'Mabuti! Salamat at kumusta ka, Ana.',
        translation: 'Que bom! Obrigada por perguntar como eu estou, Ana. (lit. “obrigada e como você está”)',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Isang magandang usapan!', message: 'Maria sorri: você fez a sua primeira conversa em tagalo, em Manila, a capital das Filipinas.' },
      },
    },
    glossary: [
      ['kumusta', 'oi / como vai'],
      ['mabuti', 'bom / bem'],
      ['ako si', 'eu sou (+ nome)'],
    ],
  },
  {
    id: 'tl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Tawag kay Kuya',
    emoji: '📞',
    summary: 'Você liga para o seu Kuya (irmão mais velho) para contar sobre a sua família e a sua casa nova.',
    cultural_context: 'Nas Filipinas, “Kuya” (irmão mais velho) e “Ate” (irmã mais velha) são usados com respeito e carinho — até para quem não é parente de sangue, como sinal de proximidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kumusta ang pamilya? Mabuti ba si Nanay?',
        translation: 'Como está a família? A mamãe está bem?',
        emoji: '📱',
        choices: [
          { text: 'Opo, mabuti po si Nanay at si Tatay.', translation: 'Sim, a mamãe e o papai estão bem.', next: 'nanay' },
          { text: 'Malaki ang bahay.', translation: 'A casa é grande.', wrong: 'Isso não responde sobre a Nanay. Use “Opo, mabuti po…” ou “Hindi po…”.' },
        ],
      },
      nanay: {
        text: 'Mabuti! Malaki ba ang bahay ninyo?',
        translation: 'Que bom! A casa de vocês é grande?',
        emoji: '🏠',
        choices: [
          { text: 'Hindi, maliit ang bahay namin, pero mabuti.', translation: 'Não, a nossa casa é pequena, mas é boa.', next: 'final_bo' },
          { text: 'Kumain ako ng isda.', translation: 'Eu comi peixe.', wrong: 'Isso não descreve a casa. Fale sobre ela: “malaki” (grande) ou “maliit” (pequena).' },
        ],
      },
      final_bo: {
        text: 'Mabuti iyan! Pumunta ka dito.',
        translation: 'Que bom! Venha para cá. (lit. “venha aqui”)',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Malapit na pamilya!', message: 'O seu Kuya adorou saber da família e da casa nova — e já te convidou para visitar!' },
      },
    },
    glossary: [
      ['pamilya', 'família'],
      ['mabuti / maliit / malaki', 'bom / pequeno / grande'],
      ['opo / hindi po', 'sim (respeitoso) / não (respeitoso)'],
    ],
  },
  {
    id: 'tl-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Sa palengke',
    emoji: '🧺',
    summary: 'Você vai ao palengke (mercado) e pergunta o preço de uma coisa.',
    cultural_context: 'O palengke é o mercado aberto das Filipinas, normalmente de comida fresca — diferente de uma “tindahan”, loja mais genérica de bairro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Magandang umaga po! Kumusta ka?',
        translation: 'Bom dia! Como você está?',
        emoji: '🧺',
        choices: [
          { text: 'Mabuti po, salamat! Magkano ho ito?', translation: 'Estou bem, obrigado! Quanto custa isto?', next: 'preco' },
          { text: 'Paalam!', translation: 'Tchau!', wrong: 'A vendedora acabou de te cumprimentar — se despedir agora seria estranho. Responda “Mabuti po” primeiro.' },
        ],
      },
      preco: {
        text: 'Mura ito, hindi mahal.',
        translation: 'Isto é barato, não é caro.',
        emoji: '💰',
        choices: [
          { text: 'Salamat po! Mabuti ang palengke.', translation: 'Obrigado! O mercado é bom.', next: 'final_bo' },
          { text: 'Masakit ang ulo ko.', translation: 'Minha cabeça dói.', wrong: 'Isso não tem nada a ver com o preço. Agradeça com “Salamat po!”.' },
        ],
      },
      final_bo: {
        text: 'Mabuti! Salamat din po.',
        translation: 'Que bom! Obrigada também.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mura at mabuti!', message: 'Você perguntou o preço com “Magkano?” e descobriu que estava barato — uma conversa comum em qualquer palengke das Filipinas.' },
      },
    },
    glossary: [
      ['palengke', 'mercado'],
      ['magkano', 'quanto custa'],
      ['mura / mahal', 'barato / caro'],
    ],
  },
  {
    id: 'tl-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Sa ospital',
    emoji: '🏥',
    summary: 'Sua barriga dói e você vai ao médico no ospital.',
    cultural_context: 'Nas Filipinas, “po” e “opo” continuam presentes até numa consulta médica — um jeito de mostrar respeito ao médico ou à enfermeira, do mesmo jeito que com os mais velhos da família.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kumusta ka? Masakit ba ang tiyan mo?',
        translation: 'Como você está? Sua barriga dói?',
        emoji: '🩺',
        choices: [
          { text: 'Opo, masakit po ang tiyan ko.', translation: 'Sim, minha barriga dói.', next: 'gamot' },
          { text: 'Mabuti ang panahon.', translation: 'O clima está bom.', wrong: 'Isso não responde sobre a dor. Use “Opo, masakit po…” ou “Hindi po, mabuti ako.”' },
        ],
      },
      gamot: {
        text: 'Mabuti. Ito ang gamot mo.',
        translation: 'Está bem. Este é o seu remédio.',
        emoji: '💊',
        choices: [
          { text: 'Salamat po, doktor!', translation: 'Obrigado, doutor!', next: 'final_bo' },
          { text: 'Malaki ang kotse.', translation: 'O carro é grande.', wrong: 'Isso não agradece o remédio. Diga “Salamat po, doktor!”.' },
        ],
      },
      final_bo: {
        text: 'Mabuti! Salamat din po, at paalam.',
        translation: 'Que bom! Obrigado também, e adeus.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mabuti na ang tiyan!', message: 'O médico te deu o remédio certo — e você usou “po” e “opo” para mostrar respeito, do jeito que se faz nas Filipinas.' },
      },
    },
    glossary: [
      ['masakit', 'dolorido / dói'],
      ['gamot', 'remédio'],
      ['ospital / doktor', 'hospital / médico'],
    ],
  },
];
