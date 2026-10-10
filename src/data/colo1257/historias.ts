import type { StorySeed } from '../types';

/**
 * Histórias do kichwa — uma por nível (A1.1 e A1.2), curso incompleto. Ambientadas em Otavalo, na
 * província de Imbabura, a cidade dos diálogos do [KN]. Todas as falas são do [KN] (“Rimanakuy”,
 * “Napaykuna”, “En el mercado”, “En la cocina”) e do [OMNI] (“Alli shamushka”, “Imakutashi”), com a
 * tradução deles.
 */
export const STORIES_COLO1257: StorySeed[] = [
  {
    id: 'colo1257-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Imanalla, mashi!',
    emoji: '👋',
    summary: 'Em Otavalo, o Linu conhece a Sisa, que o cumprimenta em kichwa.',
    cultural_context:
      'Otavalo fica na província de Imbabura, na serra do Equador, uma das regiões onde mais se fala kichwa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Alli puncha, mashi! Kikinka imanallatak kanki?',
        translation: 'Bom dia, amigo! Como o senhor está?',
        emoji: '🌅',
        choices: [
          { text: 'Allimi kani. Yupaychani!', translation: 'Estou bem. Obrigado!', next: 'nome' },
          { text: 'Minchakaman!', translation: 'Tchau!', wrong: 'Você acabou de chegar! Diga como está: “Allimi kani”.' },
        ],
      },
      nome: {
        text: 'Ñukapak shutika Sisami kan. Kikinka imashutitak kanki?',
        translation: 'Meu nome é Sisa. E o senhor, como se chama?',
        emoji: '🏷️',
        choices: [
          { text: 'Ñukapak shutika Linumi kan.', translation: 'Meu nome é Linu.', next: 'final' },
          { text: 'Mashnatak?', translation: 'Quanto custa?', wrong: 'Ela perguntou o seu nome. Diga “Ñukapak shutika Linumi kan”.' },
        ],
      },
      final: {
        text: 'Alli shamushka!',
        translation: 'Bem-vindo!',
        emoji: '🤗',
        ending: { tone: 'bom', title: 'Yupaychani!', message: 'Você respondeu ao “Imanallatak kanki?” e disse o seu nome em kichwa, em Otavalo.' },
      },
    },
    glossary: [
      ['Alli puncha', 'bom dia'],
      ['Imanallatak kanki?', 'como você está?'],
      ['Ñukapak shutika … kan', 'meu nome é …'],
      ['Alli shamushka', 'bem-vindo'],
    ],
  },
  {
    id: 'colo1257-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Hatuna pampapi',
    emoji: '🛒',
    summary: 'No mercado de Otavalo, o Linu compra pão e prova a comida.',
    cultural_context:
      'Os mercados são o lugar de conversar em kichwa: pergunta-se o preço com “Mashnatak?” e agradece-se com “Yupaychani”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Imanalla, mashi!',
        translation: 'Olá, amigo!',
        emoji: '🧺',
        choices: [
          { text: 'Shuk dólar tantata munani.', translation: 'Quero um dólar de pão.', next: 'prova' },
          { text: 'Na hamuktanichu.', translation: 'Não entendo.', wrong: 'É a vendedora do pão. Peça: “Shuk dólar tantata munani”.' },
        ],
      },
      prova: {
        text: 'Kay mikunaka sumakmi.',
        translation: 'Esta comida é gostosa.',
        emoji: '🍞',
        choices: [
          { text: 'Ari! Yupaychani!', translation: 'Sim! Obrigado!', next: 'final' },
          { text: 'Achachay!', translation: 'Que frio!', wrong: 'Ela está falando da comida. Concorde e agradeça: “Ari! Yupaychani!”.' },
        ],
      },
      final: {
        text: 'Imakutashi. Kayakaman!',
        translation: 'De nada. Até amanhã!',
        emoji: '👋',
        ending: { tone: 'bom', title: 'Yupaychani!', message: 'Você comprou o pão, concordou que estava gostoso e se despediu em kichwa.' },
      },
    },
    glossary: [
      ['Shuk dólar tantata munani', 'quero um dólar de pão'],
      ['sumak', 'bonito, gostoso'],
      ['Imakutashi', 'de nada'],
      ['Kayakaman', 'até amanhã'],
    ],
  },
];
