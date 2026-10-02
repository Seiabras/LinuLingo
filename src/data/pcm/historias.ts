import type { StorySeed } from '../types';

/**
 * Histórias interativas do pidgin nigeriano — uma por nível (A1.1 e A1.2), pacote incompleto (ver
 * `incomplete` em index.ts). A primeira se passa num motor-park (parada de ônibus/van) em Lagos; a
 * segunda, num mercado em Warri, no Delta do Níger — região onde o pidgin nigeriano é língua materna de
 * mais gente, segundo a Wikipédia (artigo “Nigerian Pidgin”). O jogador não tem identidade imposta pela
 * história: só escolhe o que falar.
 */
export const STORIES_PCM: StorySeed[] = [
  {
    id: 'pcm-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Welkom for Lagos',
    emoji: '👋',
    summary: 'Você acaba de chegar a um motor-park (parada de vans) em Lagos e puxa conversa com Chidi, que espera o mesmo veículo.',
    cultural_context: 'O “motor-park” é onde as vans (danfo) e os ônibus saem em cidades nigerianas como Lagos; é um lugar de muita conversa em pidgin nigeriano, a língua que liga gente de todo o país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Oga! How di body? Wetin be yor name?',
        translation: 'E aí! Como vai (o corpo)? Qual é o seu nome?',
        emoji: '🙋',
        choices: [
          { text: 'I dey fine. My name na Ade.', translation: 'Eu estou bem. Meu nome é Ade.', next: 'nome' },
          { text: 'No wahala!', translation: 'Sem problema!', wrong: 'Chidi fez duas perguntas: como você está e qual é o seu nome. Responda as duas.' },
        ],
      },
      nome: {
        text: 'Fine! Wia you dey go?',
        translation: 'Ótimo! Para onde você está indo?',
        emoji: '😊',
        choices: [
          { text: 'I dey go di maket.', translation: 'Eu estou indo para o mercado.', next: 'maket' },
          { text: 'I no sabi cook.', translation: 'Eu não sei cozinhar.', wrong: 'Isso não responde para onde você vai. Use “I dey go…”.' },
        ],
      },
      maket: {
        text: 'Oya! I dey go dia sef. Make we waka togeda.',
        translation: 'Então vamos! Eu também estou indo pra lá. Vamos andar juntos.',
        emoji: '🚶',
        choices: [
          { text: 'Oya, make we go!', translation: 'Vamos, então!', next: 'final' },
          { text: 'I no get moni.', translation: 'Eu não tenho dinheiro.', wrong: 'Chidi convidou você a ir junto; isso não tem a ver com dinheiro. Aceite com “Oya, make we go!”.' },
        ],
      },
      final: {
        text: 'Naijá pipo dey waka togeda. Welkom to Lagos!',
        translation: 'O povo nigeriano anda junto. Bem-vindo(a) a Lagos!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Welkom!', message: 'Você fez a sua primeira conversa em pidgin nigeriano e já tem companhia para o mercado.' },
      },
    },
    glossary: [
      ['how di body?', 'como vai? (lit.: como está o corpo?)'],
      ['wia you dey go?', 'para onde você está indo?'],
      ['oya', 'vamos, então'],
      ['make we waka togeda', 'vamos andar juntos'],
    ],
  },
  {
    id: 'pcm-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'For di maket for Warri',
    emoji: '🧺',
    summary: 'No mercado de Warri, no Delta do Níger, você tenta comprar peixe e arroz de Madam Blessing — e precisa pechinchar.',
    cultural_context: 'O eixo Warri-Sapele, no Delta do Níger, é onde mais gente tem o pidgin nigeriano como língua materna, segundo a Wikipédia. Pechinchar no mercado é normal e esperado, não falta de educação.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Oga/Madam, wetin you wan chop?',
        translation: 'Chefe/Madame, o que você quer comprar (comer)?',
        emoji: '🐟',
        choices: [
          { text: 'I wan buy fish and rais.', translation: 'Eu quero comprar peixe e arroz.', next: 'preco' },
          { text: 'I dey fine.', translation: 'Eu estou bem.', wrong: 'Madam Blessing perguntou o que você quer comprar, não como você está. Diga “I wan buy…”.' },
        ],
      },
      preco: {
        text: 'Dis fish na ten naira, di rais na eit naira.',
        translation: 'Este peixe é dez naira, o arroz é oito naira.',
        emoji: '💰',
        choices: [
          { text: 'E too cost, abeg! Fit you reduce am?', translation: 'Está caro demais, por favor! Você pode baixar?', next: 'regateio' },
          { text: 'I no sabi cook.', translation: 'Eu não sei cozinhar.', wrong: 'Isso não tem nada a ver com o preço. Reclame do preço com “E too cost, abeg”.' },
        ],
      },
      regateio: {
        text: 'Oya, make I giv you fish and rais togeda for ten naira. Na my last price!',
        translation: 'Tudo bem, vou te dar o peixe e o arroz juntos por dez naira. É o meu preço final!',
        emoji: '🤝',
        choices: [
          { text: 'Na beta price. I go pay.', translation: 'É um bom preço. Eu vou pagar.', next: 'final' },
          { text: 'I no get fish.', translation: 'Eu não tenho peixe.', wrong: 'Isso não faz sentido aqui: Madam Blessing está vendendo o peixe. Aceite o preço com “Na beta price”.' },
        ],
      },
      final: {
        text: 'I don pay! Na gud maket, Madam Blessing.',
        translation: 'Eu já paguei! Foi uma boa compra, Madame Blessing.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Na gud maket!', message: 'Você pechinchou em pidgin nigeriano e saiu do mercado de Warri com peixe e arroz.' },
      },
    },
    glossary: [
      ['wetin you wan chop?', 'o que você quer comprar/comer?'],
      ['e too cost', 'está caro demais'],
      ['last price', 'o preço final (sem mais desconto)'],
      ['I don pay', 'eu já paguei'],
    ],
  },
];
