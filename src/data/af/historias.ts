import type { StorySeed } from '../types';

/** Histórias interativas do africâner — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. */
export const STORIES_AF: StorySeed[] = [
  {
    id: 'af-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Hallo in Kaapstad',
    emoji: '👋',
    summary: 'Você conhece Anna na estação de trem da Cidade do Cabo e faz a sua primeira conversa em africâner.',
    cultural_context: 'A Cidade do Cabo (Kaapstad), aos pés da Montanha da Mesa, é a cidade onde o africâner nasceu e onde ele é a língua materna de muita gente.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! My naam is Anna. Hoe gaan dit?',
        translation: 'Oi! O meu nome é Anna. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Goed, dankie! En met jou?', translation: 'Bem, obrigado! E você?', next: 'goed' },
          { text: 'Totsiens!', translation: 'Tchau!', wrong: 'Anna acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      goed: {
        text: 'Ook goed! Waar kom jy vandaan?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ek kom van São Paulo af.', translation: 'Sou de São Paulo.', next: 'final_goed' },
          { text: 'Ek drink water.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use «Ek kom van … af».' },
        ],
      },
      final_goed: {
        text: 'Lekker! Welkom in Kaapstad!',
        translation: 'Que legal! Bem-vindo à Cidade do Cabo!',
        emoji: '🎉',
        ending: { tone: 'bom', title: "'n Goeie begin!", message: 'Anna sorri: você fez a sua primeira conversa em africâner.' },
      },
    },
    glossary: [
      ['hallo', 'oi, olá'],
      ['hoe gaan dit?', 'como vai?'],
      ['ek kom van … af', 'eu sou de …'],
      ['welkom', 'bem-vindo'],
    ],
  },
  {
    id: 'af-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: "'n Braai met die familie",
    emoji: '👪',
    summary: 'Pieter, um amigo de Stellenbosch, pergunta pela sua família e convida você para um churrasco (braai) com a família dele.',
    cultural_context: 'Stellenbosch, perto da Cidade do Cabo, é uma cidade universitária cercada de vinhedos; o braai de fim de semana reúne família e amigos em volta do fogo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Het jy broers of susters?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: "Ja, ek het 'n broer en 'n suster.", translation: 'Sim, tenho um irmão e uma irmã.', next: 'broers' },
          { text: 'My huis is groot.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use «Ek het…».' },
        ],
      },
      broers: {
        text: 'Lekker! Wil jy Saterdag by ons kom braai?',
        translation: 'Que legal! Quer vir fazer um churrasco na nossa casa no sábado?',
        emoji: '🔥',
        choices: [
          { text: 'Ja, baie dankie!', translation: 'Sim, muito obrigado!', next: 'final_goed' },
          { text: 'Ek kom van São Paulo af.', translation: 'Sou de São Paulo.', wrong: 'Pieter fez um convite: responda com «Ja, baie dankie!» ou «Nee, dankie».' },
        ],
      },
      final_goed: {
        text: 'Wonderlik! My pa braai vleis en mielies.',
        translation: 'Ótimo! O meu pai vai assar carne e milho.',
        emoji: '🌽',
        ending: { tone: 'bom', title: "'n Uitnodiging!", message: 'Você foi convidado para um braai com a família de Pieter.' },
      },
    },
    glossary: [
      ['broer / suster', 'irmão / irmã'],
      ['ek het', 'eu tenho'],
      ['braai', 'churrasco; fazer churrasco'],
      ['by ons', 'na nossa casa'],
    ],
  },
];
