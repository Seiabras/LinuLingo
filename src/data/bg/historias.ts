import type { StorySeed } from '../types';

/** Histórias interativas do búlgaro: uma por nível do A1 (A1.1 e A1.2) e do A2 (A2.1 e A2.2). */
export const STORIES_BG: StorySeed[] = [
  {
    id: 'bg-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Здраве́й в Со́фия',
    emoji: '👋',
    summary: 'Você conhece Maria no centro de Sófia e faz a sua primeira conversa em búlgaro.',
    cultural_context: 'Sófia é a capital da Bulgária, ao pé da montanha Vitocha. No centro, ruínas da antiga cidade romana de Sérdica aparecem até dentro das estações de metrô.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраве́й! Ка́звам се Мари́я. Как си?',
        translation: 'Oi! Eu me chamo Maria. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Добре́, благодаря́! А ти?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'Дови́ждане!', translation: 'Até logo!', wrong: 'Maria acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'И аз съм добре́! Откъде́ си?',
        translation: 'Eu também estou bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Аз съм от Са́о Па́уло.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Пи́я вода́.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Аз съм от…”.' },
        ],
      },
      final_bom: {
        text: 'Чуде́сно! Добре́ дошъ́л в Со́фия!',
        translation: 'Que maravilha! Bem-vindo a Sófia!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'До́бро нача́ло!', message: 'Maria sorri: você fez a sua primeira conversa em búlgaro.' },
      },
    },
    glossary: [
      ['здраве́й', 'oi'],
      ['как си?', 'como vai?'],
      ['аз съм от', 'eu sou de'],
      ['добре́ дошъ́л', 'bem-vindo (a uma mulher: добре́ дошла́)'],
    ],
  },
  {
    id: 'bg-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Неде́лен обя́д',
    emoji: '👪',
    summary: 'Gueórgui, um amigo de Plovdiv, pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Plovdiv, no sul da Bulgária, é uma das cidades habitadas há mais tempo na Europa; o seu teatro romano ainda recebe espetáculos.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраве́й! И́маш ли брат и́ли сестра́?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Да, и́мам брат и сестра́.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'semeistvo' },
          { text: 'Къ́щата ми е голя́ма.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “и́мам…”.' },
        ],
      },
      semeistvo: {
        text: 'Чуде́сно! И́скаш ли да до́йдеш на обя́д в неде́ля?',
        translation: 'Que maravilha! Quer vir almoçar no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Да, мно́го благодаря́!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Аз съм от Са́о Па́уло.', translation: 'Sou de São Paulo.', wrong: 'Gueórgui fez um convite: responda com “да” ou “не, благодаря́”.' },
        ],
      },
      final_bom: {
        text: 'Добре́! Ма́йка ми пра́ви ба́ница.',
        translation: 'Ótimo! A minha mãe faz banitsa (torta de massa folhada com queijo).',
        emoji: '🥧',
        ending: { tone: 'bom', title: 'Пока́на!', message: 'Você foi convidado para o almoço de domingo com a família de Gueórgui.' },
      },
    },
    glossary: [
      ['брат / сестра́', 'irmão / irmã'],
      ['и́мам', 'eu tenho'],
      ['да', 'sim'],
      ['обя́д', 'almoço'],
    ],
  },
  {
    id: 'bg-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Вре́мето у́тре',
    emoji: '🌦️',
    summary: 'Georgi convida você para um passeio em Plovdiv, mas primeiro precisam decidir se o tempo vai ajudar.',
    cultural_context: 'Plovdiv, no sul da Bulgária, fica perto do Vale das Rosas; na primavera, as pessoas aproveitam o bom tempo para caminhar pela Cidade Velha, com as suas casas do período do Renascimento búlgaro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраве́й! Как се чу́встваш дне́с?',
        translation: 'Oi! Como você está se sentindo hoje?',
        emoji: '📱',
        choices: [
          { text: 'Дне́с съм мно́го щастли́в!', translation: 'Hoje estou muito feliz!', next: 'vreme' },
          { text: 'Ля́то е.', translation: 'É verão.', wrong: 'Isso não responde como você se sente. Use “Съм...” com um sentimento.' },
        ],
      },
      vreme: {
        text: 'Чуде́сно! Какво́ ще бъ́де вре́мето у́тре?',
        translation: 'Que ótimo! Qual vai ser o tempo amanhã?',
        emoji: '🌤️',
        choices: [
          { text: 'У́тре ще и́ма слъ́нце.', translation: 'Amanhã vai ter sol.', next: 'plan' },
          { text: 'Ня́ма да рабо́тя.', translation: 'Eu não vou trabalhar.', wrong: 'Isso não responde sobre o tempo. Use “ще и́ма...” ou “ще вали́...”.' },
        ],
      },
      plan: {
        text: 'Чуде́сно! Да оти́дем на разхо́дка в Ста́рия град?',
        translation: 'Ótimo! Vamos passear na Cidade Velha?',
        emoji: '🏛️',
        choices: [
          { text: 'Да, с удово́лствие!', translation: 'Sim, com prazer!', next: 'final_bom' },
          { text: 'Ня́ма да вали́ дъжд.', translation: 'Não vai chover.', wrong: 'Georgi convidou você para um passeio: responda “да” ou “не”.' },
        ],
      },
      final_bom: {
        text: 'Добре́! До у́тре тога́ва.',
        translation: 'Ótimo! Até amanhã então.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Разхо́дка в Ста́рия град!', message: 'Você combinou um passeio com Georgi para amanhã, se o tempo ajudar.' },
      },
    },
    glossary: [
      ['вре́мето', 'o tempo (clima)'],
      ['щастли́в', 'feliz'],
      ['разхо́дка', 'passeio'],
      ['ще и́ма', 'vai ter, vai haver'],
    ],
  },
  {
    id: 'bg-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'На паза́ра',
    emoji: '🏪',
    summary: 'Você encontra o cozinheiro Dimitar comprando ingredientes frescos no Mercado Central de Sófia e pergunta sobre os preços e os mercados da cidade.',
    cultural_context: 'As Хали́те, o Mercado Central de Sófia, abriram em 1911 e até hoje vendem queijo, embutidos e doces búlgaros bem no centro da capital.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Здраве́й! А́з съм Дими́тър, готва́ч съм. Какво́ тъ́рсиш?',
        translation: 'Oi! Eu sou o Dimitar, sou cozinheiro. O que você está procurando?',
        emoji: '🧑‍🍳',
        choices: [
          { text: 'Тъ́рся све́жи зеленчу́ци.', translation: 'Estou procurando verduras frescas.', next: 'cena' },
          { text: 'Ра́ботя в бо́лницата.', translation: 'Eu trabalho no hospital.', wrong: 'Isso não responde o que você procura no mercado.' },
        ],
      },
      cena: {
        text: 'Тук паза́рът е по-е́втин от магази́ните в це́нтъра.',
        translation: 'Aqui o mercado é mais barato que as lojas do centro.',
        emoji: '💰',
        choices: [
          { text: 'Ко́й паза́р е най-добъ́р в Со́фия?', translation: 'Qual mercado é o melhor em Sófia?', next: 'final_bom' },
          { text: 'А́з съм учи́тел.', translation: 'Eu sou professor.', wrong: 'Isso não continua a conversa sobre o mercado. Pergunte sobre os preços ou os mercados.' },
        ],
      },
      final_bom: {
        text: 'Хали́те, в це́нтъра, са най-ста́рите и мно́го хо́ра ги харе́сват.',
        translation: 'O Halite, no centro, é o mais antigo e muita gente gosta dele.',
        emoji: '🏪',
        ending: { tone: 'bom', title: 'Добъ́р съве́т!', message: 'Dimitar deu a você uma boa dica de onde fazer compras em Sófia.' },
      },
    },
    glossary: [
      ['паза́р', 'mercado'],
      ['по-е́втин', 'mais barato'],
      ['най-добъ́р', 'o melhor'],
      ['готва́ч', 'cozinheiro'],
    ],
  },
];
