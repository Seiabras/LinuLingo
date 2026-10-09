import type { StorySeed } from '../types';

/**
 * Histórias do A1.1 ao B1.3 — por enquanto uma por nível do A1 e do A2 (ha-h1 a ha-h4), pacote
 * incompleto do B1.1 em diante. Todas ambientadas em Kano, a maior cidade histórica de língua
 * hauçá no norte da Nigéria.
 * Fontes das histórias novas (ha-h3 e ha-h4): Wikipedia, artigo “Kurmi Market” (fundação em 1463,
 * sob o rei Muhammad Rumfa, e o papel do mercado no comércio transaariano); pesquisas acadêmicas
 * sobre o sistema tsangaya/“makarantar allo”, citadas em detalhe junto da unidade 4 do currículo;
 * frases montadas só com palavras e formas gramaticais já confirmadas no vocabulário e na
 * gramática do A2 (completivo, futuro com “za”, mercado e tempo).
 */
export const STORIES_HA_1: StorySeed[] = [
  {
    id: 'ha-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Sannu a Kano!',
    emoji: '👋',
    summary: 'Você chega a Kano e conhece Amina, que te dá boas-vindas e pergunta de onde você vem.',
    cultural_context: 'Kano é a maior cidade histórica de língua hauçá, famosa por seu mercado centenário (o Kurmi) e por séculos de comércio através do Saara.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Sannu! Sannu da zuwa a Kano!',
        translation: 'Olá! Bem-vindo(a) a Kano!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Na gode! Sunana Lúcia.', translation: 'Obrigado! Meu nome é Lúcia.', next: 'nome' },
          { text: 'Sai an jima!', translation: 'Até mais!', wrong: 'Amina acabou de te dar boas-vindas: despedir-se agora seria estranho. Agradeça primeiro com “Na gode”.' },
        ],
      },
      nome: {
        text: 'Sannu, Lúcia! Daga ina ka fito?',
        translation: 'Prazer, Lúcia! De onde você vem?',
        emoji: '😊',
        choices: [
          { text: 'Na fito daga Brazil.', translation: 'Eu venho do Brasil.', next: 'final' },
          { text: 'Shayi, don Allah.', translation: 'Chá, por favor.', wrong: 'Isso não responde de onde você vem. Use “Na fito daga…”.' },
        ],
      },
      final: {
        text: 'Sannu da zuwa, Lúcia!',
        translation: 'Bem-vinda, Lúcia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Zuwan sannu!', message: 'Amina sorri: você fez sua primeira conversa em hauçá em Kano.' },
      },
    },
    glossary: [
      ['sannu', 'oi, olá'],
      ['na gode', 'obrigado'],
      ['sunana', 'meu nome é'],
      ['daga ina ka fito?', 'de onde você vem?'],
    ],
  },
  {
    id: 'ha-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Cin abinci da Amina',
    emoji: '🍽️',
    summary: 'Amina pergunta sobre sua família e te convida para comer com ela — a hospitalidade hauçá em ação.',
    cultural_context: 'Receber uma visita com comida farta é quase uma obrigação social na cultura hauçá: recusar um convite para comer pode soar como desfeita.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Sannu! Kana da ɗan’uwa ko ’yar’uwa?',
        translation: 'Olá! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Ina da ɗan’uwa da ’yar’uwa.', translation: 'Eu tenho um irmão e uma irmã.', next: 'iyali' },
          { text: 'Shayi, don Allah.', translation: 'Chá, por favor.', wrong: 'Isso não responde sobre seus irmãos. Use “Ina da…”.' },
        ],
      },
      iyali: {
        text: 'To, zo mu ci abinci tare da iyali!',
        translation: 'Então, venha comer com a família!',
        emoji: '🍽️',
        choices: [
          { text: 'To, na gode ƙwarai!', translation: 'Está bem, muito obrigado!', next: 'final' },
          { text: 'Sai an jima!', translation: 'Até mais!', wrong: 'Amina te convidou para comer: despedir-se agora seria falta de educação. Aceite com “na gode”.' },
        ],
      },
      final: {
        text: 'Shinkafa da nama da madara!',
        translation: 'Arroz, carne e leite!',
        emoji: '🍚',
        ending: { tone: 'bom', title: 'Cin abinci tare!', message: 'Você foi bem recebido pela família de Amina e comeu com eles.' },
      },
    },
    glossary: [
      ['ɗan’uwa / ’yar’uwa', 'irmão / irmã'],
      ['ina da', 'eu tenho'],
      ['iyali', 'família'],
      ['na gode ƙwarai', 'muito obrigado'],
    ],
  },
  {
    id: 'ha-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Kasuwar Kurmi',
    emoji: '🧺',
    summary: 'Amina te convida para ir à histórica Kurmi, o mercado de Kano com mais de 500 anos, e você compra seu primeiro livro em hauçá.',
    cultural_context: 'O mercado de Kurmi, em Kano, existe desde o século XV e foi o grande ponto de troca do comércio transaariano: sal do Saara por couro, tecido e nozes de cola das florestas da África Ocidental.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Sannu! Zo, mu tafi kasuwa!',
        translation: 'Olá! Venha, vamos ao mercado!',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'To, na gode! Mun tafi.', translation: 'Está bem, obrigado! Vamos.', next: 'kasuwa' },
          { text: 'Sai an jima!', translation: 'Até mais!', wrong: 'Amina quer ir ao mercado com você agora: despedir-se seria estranho. Aceite com “to” e “na gode”.' },
        ],
      },
      kasuwa: {
        text: 'Ga kanti a kasuwar Kurmi. Farashin littafi ɗari ne.',
        translation: 'Aqui está uma loja na Kurmi. O preço do livro é cem.',
        emoji: '📖',
        choices: [
          { text: 'Ina da kuɗi. Zan saya littafi!', translation: 'Eu tenho dinheiro. Vou comprar o livro!', next: 'final' },
          { text: 'Shayi, don Allah.', translation: 'Chá, por favor.', wrong: 'Isso não tem nada a ver com o livro. Diga que tem dinheiro e vai comprar: “Ina da kuɗi. Zan saya littafi!”.' },
        ],
      },
      final: {
        text: 'Na saya littafi!',
        translation: 'Eu comprei o livro!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Kasuwar Kurmi!', message: 'Você comprou seu primeiro livro na Kurmi, o mercado de Kano que já tem mais de 500 anos.' },
      },
    },
    glossary: [
      ['kasuwa', 'mercado'],
      ['nawa ne?', 'quanto custa?'],
      ['zan saya', 'eu vou comprar'],
      ['farashi', 'preço'],
    ],
  },
  {
    id: 'ha-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Gobe a makaranta',
    emoji: '🏫',
    summary: 'Amina convida você para ir à escola junto amanhã de manhã, e você responde usando o futuro em hauçá.',
    cultural_context: 'No norte da Nigéria, “makaranta” é a escola em geral (do verbo “karanta”, ler) — diferente da “makarantar allo”, a escola corânica tradicional, onde o aluno costuma morar com o próprio mestre.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Za ka tafi makaranta gobe?',
        translation: 'Você vai à escola amanhã?',
        emoji: '📱',
        choices: [
          { text: 'Eh, zan tafi makaranta gobe safe.', translation: 'Sim, eu vou à escola amanhã de manhã.', next: 'makaranta' },
          { text: 'Na gode ƙwarai!', translation: 'Muito obrigado!', wrong: 'Isso não responde se você vai à escola amanhã. Responda com “Eh” (sim) e o futuro “zan tafi…”.' },
        ],
      },
      makaranta: {
        text: 'To, mu tafi tare da safe!',
        translation: 'Então, vamos juntos de manhã!',
        emoji: '🏫',
        choices: [
          { text: 'To, na gode! Sai gobe.', translation: 'Está bem, obrigado! Até amanhã.', next: 'final' },
          { text: 'Ina da kuɗi.', translation: 'Eu tenho dinheiro.', wrong: 'Isso não combina com o convite para ir à escola junto. Aceite com “to” e “na gode”.' },
        ],
      },
      final: {
        text: 'Mun tafi makaranta tare da safe.',
        translation: 'Nós fomos à escola juntos de manhã.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Zuwa makaranta tare!', message: 'Você combinou com Amina de ir à escola amanhã de manhã, e já sabe responder com o futuro em hauçá.' },
      },
    },
    glossary: [
      ['gobe', 'amanhã'],
      ['zan tafi', 'eu vou (futuro)'],
      ['makaranta', 'escola'],
      ['safe', 'de manhã'],
    ],
  },
];
