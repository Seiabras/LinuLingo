import type { StorySeed } from '../types';

/**
 * Histórias interativas do maltês — A1 (mt-h1, mt-h2) e A2 (mt-h3, mt-h4; pacote ainda incompleto,
 * falta do B1 ao C1). Cada nó usa só palavras e frases já verificadas (ver vocabulario.ts). O
 * jogador sempre escolhe a própria resposta — nenhum personagem decide a identidade ou a fala dele.
 */
export const STORIES_MT: StorySeed[] = [
  {
    id: 'mt-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Merħba Malta!',
    emoji: '👋',
    summary: 'Marija dá as boas-vindas a você em Malta e faz a sua primeira conversa em maltês.',
    cultural_context: 'O maltês é a única língua semítica e afro-asiática oficial da União Europeia — e a única língua semítica padronizada do mundo escrita só em alfabeto latino.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Merħba! Bonġu! Jisimni Marija.',
        translation: 'Bem-vindo! Bom dia! Eu me chamo Marija.',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Bonġu! Jisimni Ana.', translation: 'Bom dia! Eu me chamo Ana.', next: 'nome' },
          { text: 'Skużi?', translation: 'Desculpe?', wrong: 'Marija só se apresentou — não há nada para pedir desculpa. Diga o seu nome com “Jisimni…”.' },
        ],
      },
      nome: {
        text: 'Kif inti?',
        translation: 'Como você está?',
        emoji: '😊',
        choices: [
          { text: 'Tajjeb, grazzi!', translation: 'Bem, obrigado!', next: 'oferta' },
          { text: 'Dar?', translation: 'Casa?', wrong: 'Isso não responde “como você está”. Diga “Tajjeb” (bem).' },
        ],
      },
      oferta: {
        text: 'Trid ilma?',
        translation: 'Você quer água?',
        emoji: '💧',
        choices: [
          { text: 'Iva, grazzi!', translation: 'Sim, obrigado!', next: 'final_bom' },
          { text: 'Le, grazzi.', translation: 'Não, obrigado.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'Tajjeb! Saħħa!',
        translation: 'Ótimo! Até logo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Merħba Malta!', message: 'Você aceitou a água e fez a sua primeira conversa completa em maltês.' },
      },
      final_neutro: {
        text: 'Tajjeb! Saħħa!',
        translation: 'Tudo bem! Até logo!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Saħħa!', message: 'Você recusou educadamente e se despediu — uma conversa completa em maltês.' },
      },
    },
    glossary: [
      ['merħba', 'bem-vindo'],
      ['jisimni', 'eu me chamo'],
      ['kif inti?', 'como você está?'],
      ['tajjeb', 'bem, bom'],
      ['trid', 'você quer'],
    ],
  },
  {
    id: 'mt-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Bonġu, familja!',
    emoji: '👪',
    summary: 'Marija apresenta a família dela e oferece pão ou água.',
    cultural_context: 'O maltês tem cerca de 530 mil falantes — uns 450 mil em Malta e 79 mil na diáspora, sobretudo na Austrália, onde famílias mantêm a língua em casa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonġu! Jisimni Marija.',
        translation: 'Bom dia! Eu me chamo Marija.',
        emoji: '📱',
        choices: [
          { text: 'Bonġu! Jisimni Ana.', translation: 'Bom dia! Eu me chamo Ana.', next: 'familja' },
          { text: 'Saħħa!', translation: 'Até logo!', wrong: 'Marija acabou de se apresentar — despedir-se agora seria estranho. Diga o seu nome com “Jisimni…”.' },
        ],
      },
      familja: {
        text: 'Omm! Missier! Familja!',
        translation: 'Mãe! Pai! Família!',
        emoji: '👪',
        choices: [
          { text: 'Kbir!', translation: 'Grande!', next: 'comida' },
          { text: 'Qattus?', translation: 'Gato?', wrong: 'Marija falou da família dela, não de um gato. Reaja com “Kbir!” (grande!) ou siga em frente.' },
        ],
      },
      comida: {
        text: 'Trid ħobż?',
        translation: 'Você quer pão?',
        emoji: '🍞',
        choices: [
          { text: 'Iva, rrid ħobż, grazzi!', translation: 'Sim, eu quero pão, obrigado!', next: 'final_bom' },
          { text: 'Le, rrid ilma, grazzi.', translation: 'Não, eu quero água, obrigado.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'Tajjeb!',
        translation: 'Ótimo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Tajjeb!', message: 'Você conheceu a família de Marija e aceitou o pão — uma conversa completa em maltês.' },
      },
      final_neutro: {
        text: 'Tajjeb! Grazzi!',
        translation: 'Tudo bem! Obrigado!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Saħħa!', message: 'Você preferiu a água e se despediu educadamente — outra conversa completa em maltês.' },
      },
    },
    glossary: [
      ['jisimni', 'eu me chamo'],
      ['familja', 'família'],
      ['trid', 'você quer'],
      ['rrid', 'eu quero'],
      ['tajjeb', 'bom, ótimo'],
    ],
  },
  {
    id: 'mt-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Fil-ħanut tal-ikel',
    emoji: '🏪',
    summary: 'Marija te encontra numa loja de comida e vocês falam sobre o que é caro e o que é barato.',
    cultural_context: 'Is-Suq tal-Belt, o mercado coberto de Valletta, abriu em 1861 — o primeiro edifício de Malta construído majoritariamente em ferro — e continua sendo um ponto de referência pra comprar comida na capital.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Bonġu! Kif inti?',
        translation: 'Bom dia! Como você está?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Tajjeb, grazzi!', translation: 'Bem, obrigado!', next: 'suq' },
          { text: 'Nixtri ħobż.', translation: 'Eu compro pão.', wrong: 'Marija perguntou como você está, não o que você compra. Responda com “Tajjeb, grazzi!”.' },
        ],
      },
      suq: {
        text: 'Il-ħobż huwa rħis. Il-ġobon huwa għali.',
        translation: 'O pão é barato. O queijo é caro.',
        emoji: '🧀',
        choices: [
          { text: 'Nixtri l-ħobż, mhux il-ġobon.', translation: 'Eu compro o pão, não o queijo.', next: 'final_bom' },
          { text: 'Il-kelb huwa kbir.', translation: 'O cachorro é grande.', wrong: 'Isso não tem nada a ver com a loja. Diga o que você vai comprar com “Nixtri…”.' },
        ],
      },
      final_bom: {
        text: 'Tajjeb! Il-ħobż huwa rħis u tajjeb.',
        translation: 'Ótimo! O pão é barato e bom.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Fis-suq!', message: 'Você escolheu bem: o pão barato, não o queijo caro.' },
      },
    },
    glossary: [
      ['rħis', 'barato'],
      ['għali', 'caro'],
      ['mhux', 'não (nega uma frase sem verbo)'],
      ['nixtri', 'eu compro'],
    ],
  },
  {
    id: 'mt-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Vjaġġ bil-karozza',
    emoji: '🧳',
    summary: 'Sabe o tempo e decide, com Pawlu, se vale a pena sair de viagem de carro ou ficar em casa dormindo.',
    cultural_context: 'O xlokk, vento quente e úmido que vem da direção da África, é um dos três ventos com nome próprio em maltês — junto com o majjistral (noroeste) e o grigal (nordeste).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'It-temp! Xita?',
        translation: 'O tempo! Chuva?',
        emoji: '🌧️',
        choices: [
          { text: 'Iva, xita.', translation: 'Sim, chuva.', next: 'vjagg' },
          { text: 'Nixtri ħobż.', translation: 'Eu compro pão.', wrong: 'Isso não responde sobre o tempo. Diga “Iva, xita” ou “Le, xemx”.' },
        ],
      },
      vjagg: {
        text: 'Trid il-vjaġġ? Il-karozza hija tiegħi.',
        translation: 'Você quer a viagem? O carro é meu.',
        emoji: '🚗',
        choices: [
          { text: 'Iva, grazzi! Il-karozza hija tajba.', translation: 'Sim, obrigado! O carro é bom.', next: 'final_bom' },
          { text: 'Le, grazzi. Jien norqod.', translation: 'Não, obrigado. Eu durmo.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'Perfett! Dan il-vjaġġ huwa tajjeb.',
        translation: 'Perfeito! Esta viagem é boa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Vjaġġ tajjeb!', message: 'Você aceitou a viagem de carro com Pawlu, mesmo com chuva.' },
      },
      final_neutro: {
        text: 'Tajjeb! Saħħa!',
        translation: 'Tudo bem! Até logo!',
        emoji: '👋',
        ending: { tone: 'neutro', title: 'Saħħa!', message: 'Você preferiu dormir em casa — outra conversa completa em maltês.' },
      },
    },
    glossary: [
      ['it-temp', 'o tempo (clima)'],
      ['dan il-vjaġġ', 'esta viagem'],
      ['tiegħi', 'meu, minha'],
      ['norqod', 'eu durmo'],
    ],
  },
];
