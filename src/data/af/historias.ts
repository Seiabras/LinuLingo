import type { StorySeed } from '../types';

/** Histórias interativas do africâner — A1.1 ao A2.2, pacote incompleto (B1 em diante ainda falta). */
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
          { text: 'Ek drink water.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ek kom van … af”.' },
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
          { text: 'My huis is groot.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “Ek het…”.' },
        ],
      },
      broers: {
        text: 'Lekker! Wil jy Saterdag by ons kom braai?',
        translation: 'Que legal! Quer vir fazer um churrasco na nossa casa no sábado?',
        emoji: '🔥',
        choices: [
          { text: 'Ja, baie dankie!', translation: 'Sim, muito obrigado!', next: 'final_goed' },
          { text: 'Ek kom van São Paulo af.', translation: 'Sou de São Paulo.', wrong: 'Pieter fez um convite: responda com “Ja, baie dankie!” ou “Nee, dankie”.' },
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
  {
    id: 'af-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Reën in Durban',
    emoji: '🌧️',
    summary: 'Lerato, uma amiga de Durban, encontra você numa tarde chuvosa e conta o que comprou para o frio.',
    cultural_context: 'Durban, na costa do Oceano Índico, costuma ter clima quente e úmido; quando chove forte ali, é notícia — diferente da Cidade do Cabo, onde o inverno chuvoso é normal.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Dit het die hele dag gereën.',
        translation: 'Oi! Choveu o dia todo.',
        emoji: '🌧️',
        choices: [
          { text: 'Ja, en dit is ook koud!', translation: 'Sim, e também está frio!', next: 'koud' },
          { text: 'Ek het \'n broer en \'n suster.', translation: 'Eu tenho um irmão e uma irmã.', wrong: 'Lerato está falando do tempo, não perguntou sobre a sua família. Responda sobre o clima.' },
        ],
      },
      koud: {
        text: "Presies! Ek het vandag 'n nuwe jas gekoop.",
        translation: 'Exatamente! Eu comprei uma jaqueta nova hoje.',
        emoji: '🧥',
        choices: [
          { text: "Mooi! Ek moet ook 'n trui koop.", translation: 'Que bonita! Eu também tenho que comprar um suéter.', next: 'final_goed' },
          { text: 'Die kat is swart.', translation: 'O gato é preto.', wrong: 'Isso não tem nada a ver com roupas ou o tempo. Fale sobre o que você precisa comprar.' },
        ],
      },
      final_goed: {
        text: 'Goeie idee! Dan kan jy warm bly.',
        translation: 'Boa ideia! Assim você consegue ficar aquecido.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Warm en droog!', message: 'Você e Lerato conversaram sobre o tempo e as roupas para o frio, usando o passado e um verbo modal.' },
      },
    },
    glossary: [
      ['dit het gereën', 'choveu'],
      ['ek het… gekoop', 'eu comprei…'],
      ['ek moet… koop', 'eu tenho que comprar…'],
      ['goeie idee', 'boa ideia'],
    ],
  },
  {
    id: 'af-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'By die dokter',
    emoji: '🧑‍⚕️',
    summary: 'Você vai ao médico em Pretória porque está com dor de cabeça, e conta como está se sentindo.',
    cultural_context: 'Na África do Sul, a saúde pública e a privada convivem lado a lado; em qualquer uma delas, o médico costuma perguntar primeiro onde dói e como a pessoa se sente.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Hallo! Wat is seer?',
        translation: 'Oi! O que está doendo?',
        emoji: '🧑‍⚕️',
        choices: [
          { text: 'My kop is seer.', translation: 'Minha cabeça está doendo.', next: 'kop' },
          { text: 'Ek is onderwyser.', translation: 'Eu sou professor.', wrong: 'O médico perguntou o que está doendo, não qual é a sua profissão. Fale sobre a dor.' },
        ],
      },
      kop: {
        text: 'Hoe voel jy verder? Is jy ook moeg?',
        translation: 'Como você está se sentindo além disso? Você também está cansado?',
        emoji: '😴',
        choices: [
          { text: 'Ja, ek is baie moeg.', translation: 'Sim, estou muito cansado.', next: 'final_goed' },
          { text: 'Ek dra \'n jas.', translation: 'Eu estou usando uma jaqueta.', wrong: 'O médico perguntou como você se sente, não sobre a sua roupa. Fale sobre o cansaço.' },
        ],
      },
      final_goed: {
        text: 'Ek verstaan. Drink baie water en rus goed.',
        translation: 'Eu entendo. Beba muita água e descanse bem.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Goeie raad!', message: 'Você conseguiu explicar ao médico onde dói e como se sente, usando o vocabulário do corpo e dos sentimentos.' },
      },
    },
    glossary: [
      ['wat is seer?', 'o que está doendo?'],
      ['my kop is seer', 'minha cabeça está doendo'],
      ['hoe voel jy?', 'como você se sente?'],
      ['ek is moeg', 'eu estou cansado'],
    ],
  },
];
