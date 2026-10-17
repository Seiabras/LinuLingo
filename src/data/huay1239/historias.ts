import type { StorySeed } from '../types';

/**
 * Histórias do quéchua de Áncash — uma por subnível, do A1.1 ao A2.2. Ambientadas em Huaraz, no
 * Callejón de Huaylas. As do A1 usam só o [WIKI]; as do A2 usam frases de [PAR] (Parker, 1976; ver
 * vocabulario.ts), com a página ao lado, e nenhuma foi montada: as cenas só juntam frases que as fontes
 * já trazem. Nas do A1, todas as falas são do [WIKI] («Quechua de Huaylas»: o breve
 * vocabulário e os exemplos do verbo “ser” implícito; «Quechua ancashino»: as interjeições), com a
 * tradução deles.
 */
export const STORIES_HUAY1239: StorySeed[] = [
  {
    id: 'huay1239-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Pitaq?',
    emoji: '🚪',
    summary: 'O Linu bate à porta de uma casa em Huaraz.',
    cultural_context:
      'Huaraz fica no Callejón de Huaylas, o vale aos pés da Cordilheira Branca, onde se fala o dialeto de Huaylas do quéchua de Áncash.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Pitaq?',
        translation: 'Quem é?',
        emoji: '🚪',
        choices: [
          { text: 'Nuqallaa.', translation: 'Sou eu, aqui estou.', next: 'como' },
          { text: 'Alalaw!', translation: 'Que frio!', wrong: 'Perguntaram quem é. Responda: “Nuqallaa” (sou eu).' },
        ],
      },
      como: {
        text: 'Yaw! Imanawllataq kaykanki?',
        translation: 'Olá! Como você está?',
        emoji: '👋',
        choices: [
          { text: 'Yamayllam kaykaa.', translation: 'Estou bem.', next: 'final' },
          { text: 'Imatan?', translation: 'O que é?', wrong: 'Perguntaram como você está. Diga “Yamayllam kaykaa”.' },
        ],
      },
      final: {
        text: 'Yamayllaku kaykanki?',
        translation: 'Você está bem mesmo?',
        emoji: '😊',
        ending: { tone: 'bom', title: 'Yamayllam!', message: 'Você respondeu ao “Pitaq?” e ao “Imanawllataq kaykanki?” no quéchua de Huaylas.' },
      },
    },
    glossary: [
      ['Pitaq?', 'quem é?'],
      ['Nuqallaa', 'sou eu'],
      ['Imanawllataq kaykanki?', 'como você está?'],
      ['Yamayllam kaykaa', 'estou bem'],
    ],
  },
  {
    id: 'huay1239-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Allqupaqku?',
    emoji: '🐕',
    summary: 'Numa tarde fria, o Linu leva comida e pergunta para quem é.',
    cultural_context:
      'Na serra de Áncash faz frio, e o quéchua tem uma palavra só para reclamar dele: “Alalaw!”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Alalaw!',
        translation: 'Que frio!',
        emoji: '🥶',
        choices: [
          { text: 'Awmi!', translation: 'Sim!', next: 'oque' },
          { text: 'Ananaw!', translation: 'Que cansaço!', wrong: 'Ela reclamou do frio. Concorde: “Awmi!”.' },
        ],
      },
      oque: {
        text: 'Imatan?',
        translation: 'O que é?',
        emoji: '❔',
        choices: [
          { text: 'Allqupaqku?', translation: 'É para o cachorro?', next: 'final' },
          { text: 'Nuqam.', translation: 'Sou eu.', wrong: 'Ela perguntou o que é, e não quem. Pergunte: “Allqupaqku?”.' },
        ],
      },
      final: {
        text: 'Allqupaqmi.',
        translation: 'É para o cachorro, sim.',
        emoji: '🐕',
        ending: { tone: 'bom', title: 'Allqupaqmi!', message: 'Você usou o -ku da pergunta e entendeu o -mi da resposta.' },
      },
    },
    glossary: [
      ['Alalaw!', 'que frio!'],
      ['Imatan?', 'o que é?'],
      ['Allqupaqku?', 'é para o cachorro?'],
      ['Allqupaqmi', 'é para o cachorro, sim'],
    ],
  },
  // [PAR]: “¿Maytan kanki?”, '¿Dónde estás?' (p. 147); “¿Pitaq shamuykan?”, '¿Quién está viniendo?', e
  // “Pablom”, 'Pablo' (p. 70); “¿Imatam rikarqayki?”, '¿Qué cosa viste?', e “Wayintam”, 'Su casa' (p. 70);
  // “Mesachawmi mikuyniki kaykan”, 'Tu comida está en la mesa' (p. 84); “Yosulpaaki”, 'Gracias', e
  // “¡Achacháw!”, '¡Qué pena!' (p. 72); “Pablo yakutam upyaykan”, 'Pablo está tomando agua' (p. 71). A
  // resposta “Hirkachawmi kaykaa” é do [WIKI].
  {
    id: 'huay1239-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Maytan kanki?',
    emoji: '🏡',
    summary: 'O Linu chega à casa de uma família em Huaraz, e a dona da casa quer saber de tudo.',
    cultural_context:
      'Nas perguntas, o quéchua de Áncash marca a palavra perguntada com -taq ou -tan: “Maytan kanki?”, onde você está? A resposta é só a informação nova, com o -m: “Pablom”, é o Pablo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Maytan kanki?',
        translation: 'Onde você está?',
        emoji: '📞',
        choices: [
          { text: 'Hirkachawmi kaykaa.', translation: 'Estou no morro.', next: 'quem' },
          { text: 'Pablom.', translation: 'É o Pablo.', wrong: 'Ela perguntou onde você está. Responda: “Hirkachawmi kaykaa” (estou no morro).' },
        ],
      },
      quem: {
        text: 'Pitaq shamuykan?',
        translation: 'Quem está vindo?',
        emoji: '🚶',
        choices: [
          { text: 'Pablom.', translation: 'É o Pablo.', next: 'oque' },
          { text: 'Wayintam.', translation: 'A casa dele.', wrong: 'Ela perguntou quem está vindo. Responda com o nome: “Pablom”.' },
        ],
      },
      oque: {
        text: 'Imatam rikarqayki?',
        translation: 'O que você viu?',
        emoji: '👀',
        choices: [
          { text: 'Wayintam.', translation: 'A casa dele.', next: 'mesa' },
          { text: 'Pablom.', translation: 'É o Pablo.', wrong: 'Agora ela quer saber o que você viu, e não quem. Responda: “Wayintam” (a casa dele).' },
        ],
      },
      mesa: {
        text: 'Mesachawmi mikuyniki kaykan.',
        translation: 'A sua comida está na mesa.',
        emoji: '🍲',
        choices: [
          { text: 'Yosulpaaki.', translation: 'Obrigado.', next: 'final' },
          { text: 'Achacháw!', translation: 'Que pena!', wrong: 'Ela serviu a comida. Agradeça: “Yosulpaaki”.' },
        ],
      },
      final: {
        text: 'Pablo yakutam upyaykan.',
        translation: 'O Pablo está bebendo água.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Yosulpaaki!', message: 'Você respondeu ao “onde”, ao “quem” e ao “o quê” com o -m, e agradeceu como em Huaylas.' },
      },
    },
    glossary: [
      ['Maytan kanki?', 'onde você está?'],
      ['Pitaq shamuykan?', 'quem está vindo?'],
      ['Imatam rikarqayki?', 'o que você viu?'],
      ['mikuyniki', 'a sua comida'],
      ['Yosulpaaki', 'obrigado'],
    ],
  },
  // [PAR]: “Winchis”, 'Buenos días', e “¡Achacháw!” (p. 72); “¿Ayka watayoqtaq kanki?”, '¿Cuántos años
  // tienes?' (p. 147), e “Ishkay chunka watayoq kaa”, 'Tengo veinte años' (p. 94); “¡Upyarkushun!”,
  // '¡Brindemos!', '¡Salud!' (p. 126); “ichikllapa”, 'apenas, un poco' (p. 94); “Tushunaykita munaa”, 'Quiero
  // que bailes', “Tushuyta pweediitsu”, 'No puedo bailar', e “Tushuyta munaa”, 'Quiero bailar' (p. 164–165);
  // “Imanantsu”, 'No importa' (p. 137); “Qamchir tushunki”, 'Tú quizás bailarás pues' (p. 151). “Kima” e
  // “Ama!” são do pacote (Omniglot e Wikipédia). Grafia: watayoq → watayuq (a regra de vocabulario.ts).
  {
    id: 'huay1239-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Upyarkushun!',
    emoji: '💃',
    summary: 'Numa festa em Huaraz, um senhor puxa conversa com o Linu e quer vê-lo dançar.',
    cultural_context:
      'O -chi diz que quem fala está supondo: “Qamchir tushunki” é “acho que você vai dançar, então”. O -r do fim é como um “pois” ou um “então”.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Winchis!',
        translation: 'Bom dia!',
        emoji: '🌅',
        choices: [
          { text: 'Winchis!', translation: 'Bom dia!', next: 'idade' },
          { text: 'Achacháw!', translation: 'Que pena!', wrong: 'Ele deu bom dia. Devolva: “Winchis!”.' },
        ],
      },
      idade: {
        text: 'Ayka watayuqtaq kanki?',
        translation: 'Quantos anos você tem?',
        emoji: '🎂',
        choices: [
          { text: 'Ishkay chunka watayuq kaa.', translation: 'Tenho vinte anos.', next: 'brinde' },
          { text: 'Kima.', translation: 'Três.', wrong: 'Só “três” não diz a idade. Responda com “… watayuq kaa”: “Ishkay chunka watayuq kaa”.' },
        ],
      },
      brinde: {
        text: 'Upyarkushun!',
        translation: 'Saúde! (Vamos brindar!)',
        emoji: '🥂',
        choices: [
          { text: 'Ichikllapa.', translation: 'Só um pouquinho.', next: 'danca' },
          { text: 'Ama!', translation: 'Não! (proibição)', wrong: '“Ama” é para proibir alguém. Para aceitar pouco, diga “Ichikllapa”.' },
        ],
      },
      danca: {
        text: 'Tushunaykita munaa.',
        translation: 'Quero que você dance.',
        emoji: '🎶',
        choices: [
          { text: 'Tushuyta munaa.', translation: 'Quero dançar.', next: 'final' },
          { text: 'Tushuyta pweediitsu.', translation: 'Não consigo dançar.', next: 'consolo' },
        ],
      },
      consolo: {
        text: 'Imanantsu.',
        translation: 'Não tem importância.',
        emoji: '🤷',
        choices: [
          { text: 'Yosulpaaki.', translation: 'Obrigado.', next: 'final' },
          { text: 'Winchis!', translation: 'Bom dia!', wrong: 'O bom-dia já passou. Agradeça: “Yosulpaaki”.' },
        ],
      },
      final: {
        text: 'Qamchir tushunki.',
        translation: 'Acho que você vai dançar, então.',
        emoji: '💃',
        ending: { tone: 'bom', title: 'Upyarkushun!', message: 'Você disse a idade com -yuq, respondeu ao brinde e usou o “querer fazer”: “Tushuyta munaa”.' },
      },
    },
    glossary: [
      ['Winchis', 'bom dia'],
      ['Ayka watayuqtaq kanki?', 'quantos anos você tem?'],
      ['Upyarkushun!', 'saúde! vamos brindar!'],
      ['Ichikllapa', 'só um pouquinho'],
      ['Tushunaykita munaa', 'quero que você dance'],
      ['Imanantsu', 'não tem importância'],
    ],
  },
];
