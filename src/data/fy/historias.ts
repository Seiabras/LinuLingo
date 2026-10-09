import type { StorySeed } from '../types';

/** Histórias interativas do frísio ocidental — uma por nível, do A1.1 ao A2.2 (pacote incompleto: falta B1 ao C2). */
export const STORIES_FY: StorySeed[] = [
  {
    id: 'fy-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Goeie yn Ljouwert',
    emoji: '👋',
    summary: 'Você conhece Sietse na estação de Ljouwert (Leeuwarden, em neerlandês) e faz a sua primeira conversa em frísio.',
    cultural_context: 'Ljouwert é a capital da Frísia e berço da Elfstedentocht, a lendária patinação de 200 km por onze cidades, só possível quando os canais congelam de verdade.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Goeie! Ik hjit Sietse. Hoe giet it?',
        translation: 'Oi! Eu me chamo Sietse. Como vai?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Goed, tank! En do?', translation: 'Bem, obrigado! E você?', next: 'goed' },
          { text: 'Oant sjen!', translation: 'Tchau!', wrong: 'Sietse acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      goed: {
        text: 'Ek goed! Wêr komsto wei?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Ik kom út São Paulo.', translation: 'Sou de São Paulo.', next: 'final_goed' },
          { text: 'Ik drink wetter.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Ik kom út…”.' },
        ],
      },
      final_goed: {
        text: 'Moai! Wolkom yn Ljouwert!',
        translation: 'Que legal! Bem-vindo a Leeuwarden!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'In goed begjin!', message: 'Sietse sorri: você fez a sua primeira conversa em frísio.' },
      },
    },
    glossary: [
      ['goeie', 'oi, olá'],
      ['hoe giet it?', 'como vai?'],
      ['ik kom út', 'eu sou de'],
      ['wolkom', 'bem-vindo'],
    ],
  },
  {
    id: 'fy-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'By Marijke thús',
    emoji: '👪',
    summary: 'Marijke, uma amiga de Snits (Sneek), pergunta pela sua família e convida você para comer tsiis (queijo) na casa dela.',
    cultural_context: 'Snits é famosa pelos canais e por ser o berço da indústria naval tradicional da Frísia, além de sediar a Sneekweek, uma das maiores semanas de vela da Europa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Goeie! Hasto bruorren of susters?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Ja, ik ha ien broer en ien suster.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'bruorren' },
          { text: 'Myn hûs is grut.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “ik ha…”.' },
        ],
      },
      bruorren: {
        text: 'Moai! Wolsto by my thúskomme foar tsiis?',
        translation: 'Que legal! Quer vir à minha casa comer queijo?',
        emoji: '🧀',
        choices: [
          { text: 'Ja, tige tank!', translation: 'Sim, muito obrigado!', next: 'final_goed' },
          { text: 'Ik kom út São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Marijke fez um convite: responda com “ja” ou “nee, tank”.' },
        ],
      },
      final_goed: {
        text: 'Hearlik! Myn mem makket de bêste tsiis fan Fryslân.',
        translation: 'Ótimo! Minha mãe faz o melhor queijo da Frísia.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'In útnoeging!', message: 'Você foi convidado para comer queijo na casa de Marijke.' },
      },
    },
    glossary: [
      ['broer / suster', 'irmão / irmã'],
      ['ik ha', 'eu tenho'],
      ['ja', 'sim'],
      ['tige tank', 'muito obrigado'],
    ],
  },
  {
    id: 'fy-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Op it wurk yn Ljouwert',
    emoji: '💼',
    summary: 'Pieter, um colega novo no trabalho, pergunta sobre a sua profissão e sobre os seus planos para o dia seguinte.',
    cultural_context: 'Desde 2013, a lei frísia de línguas garante o direito de falar frísio com órgãos públicos de Fryslân, mas no trabalho do dia a dia o neerlandês e o frísio se misturam o tempo todo.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Goeie! Wat wurkesto?',
        translation: 'Oi! O que você trabalha (qual é a sua profissão)?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Ik wurkje as learaar.', translation: 'Eu trabalho como professor.', next: 'profissao' },
          { text: 'Ik bin siik.', translation: 'Eu estou doente.', wrong: 'Pieter perguntou a sua profissão, não como você está. Use “Ik wurkje as…”.' },
        ],
      },
      profissao: {
        text: 'Moai! En moatsto moarn ek wurkje?',
        translation: 'Legal! E você precisa trabalhar amanhã também?',
        emoji: '🤔',
        choices: [
          { text: 'Ja, ik moat moarn wurkje.', translation: 'Sim, eu preciso trabalhar amanhã.', next: 'final_bo' },
          { text: 'Ik ha twa hannen.', translation: 'Eu tenho duas mãos.', wrong: 'Isso não responde sobre o dia de amanhã. Use “ik moat” ou “ik sil”.' },
        ],
      },
      final_bo: {
        text: 'Dan sjogge wy elkoar moarn op it wurk!',
        translation: 'Então nos vemos amanhã no trabalho!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'In goede kollega!', message: 'Pieter sorri: você fez a sua primeira conversa sobre trabalho em frísio.' },
      },
    },
    glossary: [
      ['wat wurkesto?', 'o que você trabalha?'],
      ['ik wurkje as', 'eu trabalho como'],
      ['ik moat', 'eu preciso'],
    ],
  },
  {
    id: 'fy-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'In kâlde dei yn Fryslân',
    emoji: '🌧️',
    summary: 'A sua amiga Marijke liga para saber como está o tempo e como você está se sentindo depois de uma caminhada no vento de Fryslân.',
    cultural_context: 'Fryslân é uma província baixa e aberta ao Mar de Wadden, com muito vento — falar sobre o tempo é um jeito muito comum de começar uma conversa ali.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Goeie! Hoe is it waar bij dy?',
        translation: 'Oi! Como está o tempo aí com você?',
        emoji: '📱',
        choices: [
          { text: 'It is kâld, en it reint.', translation: 'Está frio, e está chovendo.', next: 'tempo' },
          { text: 'Myn mem is dokter.', translation: 'Minha mãe é médica.', wrong: 'Isso não responde sobre o tempo. Descreva o clima com “it is…”.' },
        ],
      },
      tempo: {
        text: 'Och heden! En hoe fielsto dy nei de kâlde kuier?',
        translation: 'Ai! E como você está se sentindo depois da caminhada fria?',
        emoji: '🥶',
        choices: [
          { text: 'Ik bin wurch, mar bliid.', translation: 'Estou cansado, mas feliz.', next: 'final_bo' },
          { text: 'De sinne is waarm.', translation: 'O sol está quente.', wrong: 'Isso não descreve como você está se sentindo. Use “ik bin…”.' },
        ],
      },
      final_bo: {
        text: 'Moai sa! In waarme kop tee sil dy goed dwa.',
        translation: 'Que bom! Uma xícara de chá quente vai te fazer bem.',
        emoji: '🍵',
        ending: { tone: 'bom', title: 'In waarme freondinne!', message: 'Marijke se preocupou com você: já dá pra contar o seu dia em frísio, mesmo num dia frio.' },
      },
    },
    glossary: [
      ['hoe is it waar?', 'como está o tempo?'],
      ['it reint', 'está chovendo'],
      ['ik bin wurch', 'eu estou cansado'],
    ],
  },
];
