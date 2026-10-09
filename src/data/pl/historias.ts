import type { StorySeed } from '../types';

/** Histórias interativas do polonês — A1.1 ao A2.2, pacote incompleto (B1 em diante ainda falta). */
export const STORIES_PL: StorySeed[] = [
  {
    id: 'pl-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Cześć w Krakowie',
    emoji: '👋',
    summary: 'Você conhece Ania na praça do Mercado de Cracóvia e faz a sua primeira conversa em polonês.',
    cultural_context: 'A praça do Mercado (Rynek Główny) fica no centro histórico de Cracóvia, antiga capital da Polônia e patrimônio mundial da UNESCO.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cześć! Mam na imię Ania. Jak się masz?',
        translation: 'Oi! Meu nome é Ania. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Dobrze, dziękuję! A ty?', translation: 'Bem, obrigado! E você?', next: 'dobrze' },
          { text: 'Do widzenia!', translation: 'Até logo!', wrong: 'Ania acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobrze: {
        text: 'Też dobrze! Skąd jesteś?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Jestem z São Paulo.', translation: 'Sou de São Paulo.', next: 'final_dobry' },
          { text: 'Piję wodę.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Jestem z…”.' },
        ],
      },
      final_dobry: {
        text: 'Super! Witaj w Krakowie!',
        translation: 'Que legal! Bem-vindo a Cracóvia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Dobry początek!', message: 'Ania sorri: você fez a sua primeira conversa em polonês.' },
      },
    },
    glossary: [
      ['cześć', 'oi'],
      ['jak się masz?', 'como vai?'],
      ['jestem z', 'eu sou de'],
      ['witaj', 'bem-vindo'],
    ],
  },
  {
    id: 'pl-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Obiad z rodziną',
    emoji: '👪',
    summary: 'Tomek, um amigo de Gdańsk, pergunta pela sua família e convida você para almoçar com a família dele.',
    cultural_context: 'Na Polônia, o “obiad” é a refeição principal do dia e costuma ser feito no começo da tarde; aos domingos, reúne a família.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cześć! Masz brata albo siostrę?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Tak, mam brata i siostrę.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'rodzina' },
          { text: 'Mój dom jest duży.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “mam…”.' },
        ],
      },
      rodzina: {
        text: 'Super! Chcesz zjeść obiad z nami w niedzielę?',
        translation: 'Que legal! Quer almoçar com a gente no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Tak, dziękuję bardzo!', translation: 'Sim, muito obrigado!', next: 'final_dobry' },
          { text: 'Jestem z São Paulo.', translation: 'Sou de São Paulo.', wrong: 'Tomek fez um convite: responda com “tak” ou “nie, dziękuję”.' },
        ],
      },
      final_dobry: {
        text: 'Bardzo dobrze! Moja mama robi pierogi.',
        translation: 'Muito bem! A minha mãe faz pierogi.',
        emoji: '🥟',
        ending: { tone: 'bom', title: 'Zaproszenie!', message: 'Você foi convidado para o almoço de domingo com a família de Tomek.' },
      },
    },
    glossary: [
      ['brat / siostra', 'irmão / irmã'],
      ['mam', 'eu tenho'],
      ['tak', 'sim'],
      ['obiad', 'almoço, a refeição principal'],
    ],
  },
  {
    id: 'pl-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Deszcz w Gdańsku',
    emoji: '🌧️',
    summary: 'Kasia, uma amiga de Gdańsk, encontra você numa tarde chuvosa e conta o que comprou para o frio.',
    cultural_context: 'Gdańsk, no litoral do mar Báltico, tem um clima úmido e ventoso; chuva e vento forte são comuns, sobretudo no outono e no inverno.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cześć! Wczoraj cały dzień padał deszcz.',
        translation: 'Oi! Ontem choveu o dia todo.',
        emoji: '🌧️',
        choices: [
          { text: 'Tak, i było też zimno!', translation: 'Sim, e também estava frio!', next: 'zimno' },
          { text: 'Mam brata i siostrę.', translation: 'Eu tenho um irmão e uma irmã.', wrong: 'Kasia está falando do tempo, não perguntou sobre a sua família. Responda sobre o clima.' },
        ],
      },
      zimno: {
        text: 'Właśnie! Kupiłam wczoraj nową kurtkę.',
        translation: 'Exatamente! Eu comprei uma jaqueta nova ontem.',
        emoji: '🧥',
        choices: [
          { text: 'Piękna! Muszę też kupić sweter.', translation: 'Que bonita! Eu também tenho que comprar um suéter.', next: 'final_dobry' },
          { text: 'Kot jest czarny.', translation: 'O gato é preto.', wrong: 'Isso não tem nada a ver com roupas ou o tempo. Fale sobre o que você precisa comprar.' },
        ],
      },
      final_dobry: {
        text: 'Dobry pomysł! Wtedy będziesz ciepło.',
        translation: 'Boa ideia! Assim você vai ficar aquecido.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ciepło i sucho!', message: 'Você e Kasia conversaram sobre o tempo e as roupas para o frio, usando o passado em -ł-.' },
      },
    },
    glossary: [
      ['padał deszcz', 'choveu'],
      ['kupiłam', 'eu comprei (fala uma mulher)'],
      ['muszę kupić', 'eu tenho que comprar'],
      ['dobry pomysł', 'boa ideia'],
    ],
  },
  {
    id: 'pl-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'U lekarza',
    emoji: '🧑‍⚕️',
    summary: 'Você vai ao médico em Wrocław porque está com dor de cabeça, e conta como está se sentindo.',
    cultural_context: 'Na Polônia, a primeira consulta costuma ser com o médico de família (lekarz rodzinny), que depois encaminha a pacientes para especialistas se for preciso.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Cześć! Co cię boli?',
        translation: 'Oi! O que está doendo em você?',
        emoji: '🧑‍⚕️',
        choices: [
          { text: 'Głowa mnie boli.', translation: 'Minha cabeça está doendo.', next: 'glowa' },
          { text: 'Jestem nauczycielem.', translation: 'Eu sou professor.', wrong: 'O médico perguntou o que está doendo, não qual é a sua profissão. Fale sobre a dor.' },
        ],
      },
      glowa: {
        text: 'Jak się czujesz? Jesteś też zmęczony?',
        translation: 'Como você se sente? Você também está cansado?',
        emoji: '😴',
        choices: [
          { text: 'Tak, jestem bardzo zmęczony.', translation: 'Sim, estou muito cansado.', next: 'final_dobry' },
          { text: 'Noszę kurtkę.', translation: 'Eu estou usando uma jaqueta.', wrong: 'O médico perguntou como você se sente, não sobre a sua roupa. Fale sobre o cansaço.' },
        ],
      },
      final_dobry: {
        text: 'Rozumiem. Pij dużo wody i dobrze odpocznij.',
        translation: 'Eu entendo. Beba muita água e descanse bem.',
        emoji: '💧',
        ending: { tone: 'bom', title: 'Dobra rada!', message: 'Você conseguiu explicar ao médico onde dói e como se sente, usando o vocabulário do corpo e das emoções.' },
      },
    },
    glossary: [
      ['co cię boli?', 'o que está doendo em você?'],
      ['głowa mnie boli', 'minha cabeça está doendo'],
      ['jak się czujesz?', 'como você se sente?'],
      ['jestem zmęczony', 'eu estou cansado'],
    ],
  },
];
