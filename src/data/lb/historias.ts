import type { StorySeed } from '../types';

/** Histórias interativas do luxemburguês — uma por subnível (A1.1 a A2.2), pacote ainda incompleto. */
export const STORIES_LB: StorySeed[] = [
  {
    id: 'lb-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Moien op der Gare',
    emoji: '👋',
    summary: 'Você conhece Anna na estação de trem da cidade de Luxemburgo e faz a sua primeira conversa em luxemburguês.',
    cultural_context: 'A capital tem o mesmo nome do país; em luxemburguês ela é chamada simplesmente de “d\'Stad”, a cidade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Moien! Ech heeschen Anna. Wéi geet et?',
        translation: 'Oi! Eu me chamo Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Gutt, merci! An dir?', translation: 'Bem, obrigado! E você?', next: 'gutt' },
          { text: 'Äddi!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      gutt: {
        text: 'Och gutt! Vu wou kënns du?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ech komme vu São Paulo.', translation: 'Sou de São Paulo.', next: 'final_gutt' },
          { text: 'Ech drénke Waasser.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ech komme vu…”.' },
        ],
      },
      final_gutt: {
        text: 'Super! Wëllkomm!',
        translation: 'Que legal! Bem-vindo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Wëllkomm!', message: 'Anna sorri: você fez a sua primeira conversa em luxemburguês.' },
      },
    },
    glossary: [
      ['Moien', 'oi, olá'],
      ['wéi geet et?', 'como vai?'],
      ['ech komme vu', 'eu sou de'],
      ['Wëllkomm', 'bem-vindo'],
    ],
  },
  {
    id: 'lb-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Samschdeg bei der Famill',
    emoji: '👪',
    summary: 'Tom, um amigo de Esch-sur-Alzette, pergunta pela sua família e convida você para comer com a família dele no sábado.',
    cultural_context: 'Esch-sur-Alzette (Esch-Uelzecht, em luxemburguês) é a segunda maior cidade do Luxemburgo, antigo centro da siderurgia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Moien! Hues du e Brudder oder eng Schwëster?',
        translation: 'Oi! Você tem um irmão ou uma irmã?',
        emoji: '📱',
        choices: [
          { text: 'Jo, ech hunn e Brudder an eng Schwëster.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'famill' },
          { text: 'Mäin Haus ass grouss.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ech hunn…”.' },
        ],
      },
      famill: {
        text: 'Super! Kënns du Samschdeg bei eis iessen?',
        translation: 'Que legal! Você vem comer na nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Jo, gär! Villmools Merci!', translation: 'Sim, com prazer! Muito obrigado!', next: 'final_gutt' },
          { text: 'Ech komme vu São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Tom fez um convite: responda com “Jo, gär!” ou “Nee, merci”.' },
        ],
      },
      final_gutt: {
        text: 'Super! Bis Samschdeg!',
        translation: 'Ótimo! Até sábado!',
        emoji: '🥳',
        ending: { tone: 'bom', title: 'Bis Samschdeg!', message: 'Você foi convidado para comer com a família de Tom.' },
      },
    },
    glossary: [
      ['Brudder / Schwëster', 'irmão / irmã'],
      ['ech hunn', 'eu tenho'],
      ['jo, gär', 'sim, com prazer'],
      ['bei eis', 'na nossa casa'],
    ],
  },
  {
    id: 'lb-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Op der Gare, zu Lëtzebuerg',
    emoji: '🔢',
    summary: 'Você espera o trem na Gare (estação) de Luxemburgo e ajuda um estranho com os horários.',
    cultural_context: 'Desde 2020, o transporte público (bus, trem, bonde) é gratuito em todo o Luxemburgo — uma política única na Europa, e um bom motivo para aprender a conversar na Gare.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Moien! Wéivill Minutte bis den Zuch kënnt? Eelef oder zwanzeg?',
        translation: 'Oi! Quantos minutos até o trem chegar? Onze ou vinte?',
        emoji: '🚉',
        choices: [
          { text: 'Zwanzeg Minutten.', translation: 'Vinte minutos.', next: 'espera' },
          { text: 'Ech kann Lëtzebuergesch schwätzen.', translation: 'Eu sei falar luxemburguês.', wrong: 'A pessoa perguntou sobre o horário do trem — isso não responde. Tente um número.' },
        ],
      },
      espera: {
        text: 'Merci! Musst du haut schaffen?',
        translation: 'Obrigado! Você precisa trabalhar hoje?',
        emoji: '💼',
        choices: [
          { text: 'Jo, ech muss haut schaffen.', translation: 'Sim, eu preciso trabalhar hoje.', next: 'final_bo' },
          { text: 'Eng Woch huet siwen Deeg.', translation: 'Uma semana tem sete dias.', wrong: 'A pessoa perguntou se você precisa trabalhar — isso não responde. Tente “Ech muss…” ou “Ech muss net…”.' },
        ],
      },
      final_bo: {
        text: 'Vill Erfolleg, a säi Zuch kënnt!',
        translation: 'Boa sorte, e lá vem o seu trem!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Zwanzeg Minutten!', message: 'Você ajudou a pessoa a esperar o trem, contando em luxemburguês.' },
      },
    },
    glossary: [
      ['eelef / zwanzeg', 'onze / vinte'],
      ['ech kann', 'eu sei/consigo'],
      ['ech muss schaffen', 'eu preciso trabalhar'],
    ],
  },
  {
    id: 'lb-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Gëschter, am Buttek',
    emoji: '🛒',
    summary: 'Você conta a Anna o que fez ontem: comprou roupa e cozinhou em casa.',
    cultural_context: 'Como no alemão, o luxemburguês conta o passado com “hunn”/“sinn” mais o particípio, no fim da frase — por isso o passado composto é a estrutura mais comum para contar o que você já fez.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Wat hues du gëschter gemaach?',
        translation: 'O que você fez ontem?',
        emoji: '🛒',
        choices: [
          { text: 'Ech hu e Kleed kaaft.', translation: 'Eu comprei um vestido.', next: 'compra' },
          { text: 'Ech kann Lëtzebuergesch schwätzen.', translation: 'Eu sei falar luxemburguês.', wrong: 'Anna perguntou o que você fez ontem — isso não responde. Tente “Ech hu…” ou “Ech sinn…”.' },
        ],
      },
      compra: {
        text: "Super! War et deier oder bëlleg?",
        translation: 'Que legal! Era caro ou barato?',
        emoji: '💸',
        choices: [
          { text: 'Et war bëlleg.', translation: 'Era barato.', next: 'final_bo' },
          { text: 'Ech si gaangen.', translation: 'Eu fui/andei.', wrong: 'Anna perguntou sobre o preço — isso não responde. Tente “Et war…”.' },
        ],
      },
      final_bo: {
        text: 'Super! An ech hu haut Kaffi gekacht fir dech.',
        translation: 'Que legal! E eu cozinhei café hoje para você.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Super Dag!', message: 'Anna gostou de saber do seu dia — e já preparou um café para vocês dois.' },
      },
    },
    glossary: [
      ['ech hu kaaft', 'eu comprei'],
      ['deier / bëlleg', 'caro / barato'],
      ['ech hu gekacht', 'eu cozinhei'],
    ],
  },
];
