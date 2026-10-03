import type { StorySeed } from '../types';

/**
 * Histórias interativas do sateré-mawé — por enquanto uma por nível (A1.1 e A1.2), pacote
 * incompleto. As falas vêm dos dois diálogos e das “pequenas frases” do glossário de Miquiles &
 * Castro (2022) — com o nome próprio trocado no molde “Uhet Iruka e” (meu nome é Lucas) — e de
 * exemplos da tese de Silva (2010); ver o cabeçalho de vocabulario.ts. Ambientadas numa aldeia do
 * rio Andirá (TI Andirá-Marau) e em Parintins, cidade de onde vem a fala “Uito Parintins piat” do
 * próprio glossário.
 */
export const STORIES_MAV: StorySeed[] = [
  {
    id: 'mav-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: "Ihot'ok, Parintins!",
    emoji: '🌅',
    summary: 'De manhã, o Linu encontra um professor sateré-mawé que pergunta o nome dele e de onde ele vem.',
    cultural_context:
      'Muitos Sateré-Mawé moram nas cidades perto da Terra Indígena Andirá-Marau — Parintins, Barreirinha e Maués — sobretudo os jovens que vão estudar, e em Manaus. Nas aldeias, as escolas ensinam em sateré-mawé e em português, com professores do próprio povo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Ihot'ok!",
        translation: 'Bom dia!',
        emoji: '🌅',
        choices: [
          { text: "Ihot'ok!", translation: 'Bom dia!', next: 'nome' },
          { text: 'Wantym!', translation: 'Boa noite!', wrong: '“Wantym” é para a noite — de manhã, responda “Ihot’ok!”.' },
        ],
      },
      nome: {
        text: 'Kat e eset?',
        translation: 'Como é o seu nome?',
        emoji: '🙂',
        choices: [
          { text: 'Uhet Linu e. Ewat?', translation: 'Meu nome é Linu. E o seu?', next: 'professor' },
          { text: 'Waku sese!', translation: 'Obrigado!', wrong: 'Ele perguntou o seu nome. Responda com “Uhet … e” (meu nome é …).' },
        ],
      },
      professor: {
        text: 'Uito Peteru. Ajumpiat en?',
        translation: 'Eu sou Pedro. Você é de onde?',
        emoji: '🧑‍🏫',
        choices: [
          { text: 'Uito Parintins piat.', translation: 'Sou de Parintins.', next: 'final' },
          { text: 'Uweig en?', translation: 'Quem é você?', wrong: 'Ele já disse que é o Pedro. Agora diga de onde você é: “Uito … piat”.' },
        ],
      },
      final: {
        text: 'Pyno waku. Waku sese eriot!',
        translation: 'Que bom. Seja bem-vindo!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Waku sese!',
          message: 'Você cumprimentou de manhã, disse o seu nome com “Uhet … e” e de onde vem com “Uito … piat” — e ganhou um “Waku sese eriot!” (seja bem-vindo).',
        },
      },
    },
    glossary: [
      ["Ihot'ok", 'bom dia'],
      ['Kat e eset?', 'como é o seu nome?'],
      ['Ajumpiat en?', 'você é de onde?'],
      ['Waku sese eriot', 'seja bem-vindo'],
    ],
  },
  {
    id: 'mav-h2',
    level: 'A1.2',
    title: 'Sapo na cuia',
    cefr: 'A1',
    emoji: '🥤',
    summary: 'Numa aldeia do rio Andirá, o Linu chega com fome e é recebido com comida e guaraná ralado.',
    cultural_context:
      'Receber visitas é tarefa do tuxaua (morekuat), e a acolhida tem um gesto próprio: oferecer o sapo (çapó), o bastão de guaraná ralado na água e servido na cuia. É a bebida de todo dia, mas também a das festas e dos rituais.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: "Hay! Heika'at! Aikotaig?",
        translation: 'Olá! Boa tarde! Como vai?',
        emoji: '👋',
        choices: [
          { text: "Heika'at! Uhesý'at.", translation: 'Boa tarde! Estou com fome.', next: 'comida' },
          { text: "Ihot'ok!", translation: 'Bom dia!', wrong: 'Já é de tarde: responda com “Heika’at!”.' },
        ],
      },
      comida: {
        text: "Etiky'esat?",
        translation: 'Você quer?',
        emoji: '🍲',
        choices: [
          { text: "Atiky'esat mi'u.", translation: 'Quero comida.', next: 'sapo' },
          { text: "Yt kat hap'i.", translation: 'De nada.', wrong: '“Yt kat hap’i” responde a um “obrigado”. Para aceitar, diga “Atiky’esat mi’u” (quero comida).' },
        ],
      },
      sapo: {
        text: 'Sapo?',
        translation: 'Guaraná ralado?',
        emoji: '🥤',
        choices: [
          { text: 'Hé kahato! Waku sese!', translation: 'Muito gostoso! Obrigado!', next: 'final' },
          { text: 'Wantym!', translation: 'Boa noite!', wrong: 'Ainda é de tarde, e ofereceram o sapo: elogie (“Hé kahato!”) e agradeça (“Waku sese!”).' },
        ],
      },
      final: {
        text: "Yt kat hap'i. Waku sese eriot!",
        translation: 'De nada. Seja bem-vindo!',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Arehum!',
          message: 'Você disse que estava com fome, aceitou a comida, provou o sapo na cuia e agradeceu — e terminou o dia feliz (“arehum”, estou feliz).',
        },
      },
    },
    glossary: [
      ["Uhesý'at", 'estou com fome'],
      ["Atiky'esat", 'eu quero'],
      ['Sapo', 'guaraná ralado na água'],
      ['Hé kahato', 'muito gostoso'],
    ],
  },
];
