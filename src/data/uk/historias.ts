import type { StorySeed } from '../types';

/** Histórias interativas do ucraniano — uma por nível (A1.1, A1.2, A2.1 e A2.2), pacote incompleto. */
export const STORIES_UK: StorySeed[] = [
  {
    id: 'uk-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Приві́т у Льво́ві',
    emoji: '👋',
    summary: 'Você conhece Olia na praça do Mercado de Lviv e faz a sua primeira conversa em ucraniano.',
    cultural_context: 'A praça do Mercado (Пло́ща Ри́нок) fica no centro histórico de Lviv, no oeste da Ucrânia, que é patrimônio mundial da UNESCO.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Приві́т! Мене́ зву́ть О́ля. Як спра́ви?',
        translation: 'Oi! Eu me chamo Olia. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'До́бре, дя́кую! А в те́бе?', translation: 'Bem, obrigado! E você?', next: 'dobre' },
          { text: 'До поба́чення!', translation: 'Até logo!', wrong: 'Olia acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobre: {
        text: 'Теж до́бре! Зві́дки ти?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Я з Курити́би.', translation: 'Sou de Curitiba.', next: 'final_bom' },
          { text: 'Я п’ю во́ду.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Я з…”.' },
        ],
      },
      final_bom: {
        text: 'Чудо́во! Ла́скаво про́симо до Льво́ва!',
        translation: 'Que ótimo! Bem-vindo a Lviv!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'До́брий поча́ток!', message: 'Olia sorri: você fez a sua primeira conversa em ucraniano.' },
      },
    },
    glossary: [
      ['приві́т', 'oi'],
      ['як спра́ви?', 'como vai?'],
      ['я з…', 'eu sou de…'],
      ['ла́скаво про́симо', 'bem-vindo'],
    ],
  },
  {
    id: 'uk-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Неді́льний обі́д',
    emoji: '👪',
    summary: 'Andrii, um amigo de Kiev (Kyiv), pergunta pela sua família e convida você para o almoço de domingo com a família dele.',
    cultural_context: 'Kiev (Ки́їв) é a capital da Ucrânia e uma das cidades mais antigas da Europa Oriental; o almoço de domingo costuma reunir a família.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Приві́т! У те́бе є брат або́ сестра́?',
        translation: 'Oi! Você tem irmão ou irmã?',
        emoji: '📱',
        choices: [
          { text: 'Так, у ме́не є брат і сестра́.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'simia' },
          { text: 'Мій дім вели́кий.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “у ме́не є…”.' },
        ],
      },
      simia: {
        text: 'Чудо́во! Хо́чеш прийти́ до нас на обі́д у неді́лю?',
        translation: 'Que ótimo! Quer vir almoçar com a gente no domingo?',
        emoji: '🍽️',
        choices: [
          { text: 'Так, ду́же дя́кую!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Я з Курити́би.', translation: 'Sou de Curitiba.', wrong: 'Andrii fez um convite: responda com “так” ou “ні, дя́кую”.' },
        ],
      },
      final_bom: {
        text: 'Чудо́во! Моя́ ма́ма ро́бить варе́ники.',
        translation: 'Ótimo! A minha mãe faz varênyky (pasteizinhos cozidos).',
        emoji: '🥟',
        ending: { tone: 'bom', title: 'Запро́шення!', message: 'Você foi convidado para o almoço de domingo com a família de Andrii.' },
      },
    },
    glossary: [
      ['брат / сестра́', 'irmão / irmã'],
      ['у ме́не є', 'eu tenho'],
      ['так', 'sim'],
      ['обі́д', 'almoço'],
    ],
  },
  {
    id: 'uk-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Нова́ соро́чка',
    emoji: '👔',
    summary: 'Você vai a uma loja em Lviv comprar uma camisa nova e pergunta pelo hospital mais próximo para uma amiga.',
    cultural_context: 'O centro histórico de Lviv, onde fica a praça do Mercado já visitada na unidade 1, tem lojinhas e cafés desde o período austro-húngaro.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'До́брий день! Мо́жу допомогти́?',
        translation: 'Bom dia! Posso ajudar?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'Так, будь ла́ска. Шука́ю нову́ соро́чку.', translation: 'Sim, por favor. Estou procurando uma camisa nova.', next: 'sorochka' },
          { text: 'Надво́рі дощ.', translation: 'Está chovendo lá fora.', wrong: 'A vendedora perguntou se pode ajudar: diga o que você procura, usando “Шука́ю…”.' },
        ],
      },
      sorochka: {
        text: 'Ма́ємо си́ню і черво́ну. Яку́ хо́чеш?',
        translation: 'Temos azul e vermelha. Qual você quer?',
        emoji: '👔',
        choices: [
          { text: 'Хо́чу си́ню соро́чку, будь ла́ска.', translation: 'Eu quero uma camisa azul, por favor.', next: 'likarnia' },
          { text: 'Мені́ два́дцять ро́ків.', translation: 'Eu tenho vinte anos.', wrong: 'Isso não responde sobre a cor da camisa. Use “Хо́чу… соро́чку”.' },
        ],
      },
      likarnia: {
        text: 'Ось, будь ла́ска. Ще щось?',
        translation: 'Aqui está, por favor. Mais alguma coisa?',
        emoji: '🛍️',
        choices: [
          { text: 'Де тут ліка́рня? Моя́ по́друга хво́ра.', translation: 'Onde fica o hospital por aqui? Minha amiga está doente.', next: 'final' },
          { text: 'Я люблю́ сир.', translation: 'Eu gosto de queijo.', wrong: 'Isso não tem nada a ver com a situação. Pergunte pelo hospital com “Де…?”.' },
        ],
      },
      final: {
        text: 'Ліка́рня на цій ву́лиці, зовсі́м близько.',
        translation: 'O hospital é nesta rua, bem perto.',
        emoji: '🏥',
        ending: { tone: 'bom', title: 'Чудо́во!', message: 'Você comprou uma camisa nova e descobriu onde fica o hospital, tudo em ucraniano.' },
      },
    },
    glossary: [
      ['шука́ю', 'eu procuro'],
      ['хо́чу', 'eu quero'],
      ['де…?', 'onde é…?'],
      ['ліка́рня', 'hospital'],
    ],
  },
  {
    id: 'uk-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Що ти роби́в учо́ра?',
    emoji: '🕰️',
    summary: 'Um colega de trabalho pergunta o que você fez ontem e qual é a sua profissão.',
    cultural_context: 'Perguntar “Що ти ро́биш?” (o que você faz/está fazendo) é uma forma comum de abrir uma conversa sobre o trabalho de alguém na Ucrânia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Приві́т! Що ти роби́в учо́ра?',
        translation: 'Oi! O que você fez ontem?',
        emoji: '📱',
        choices: [
          { text: 'Я працюва́в у шко́лі.', translation: 'Eu trabalhei numa escola.', next: 'profissao' },
          { text: 'Я ма́ю сині о́чі.', translation: 'Eu tenho olhos azuis.', wrong: 'Isso não responde o que você fez ontem. Use o passado, como “я працюва́в/працюва́ла…”.' },
        ],
      },
      profissao: {
        text: 'Ага, то ти вчи́тель? А сього́дні ма́єш працюва́ти?',
        translation: 'Ah, então você é professor? E hoje você tem que trabalhar?',
        emoji: '🤔',
        choices: [
          { text: 'Так, я вчи́тель і ма́ю працюва́ти.', translation: 'Sim, eu sou professor e tenho que trabalhar.', next: 'final' },
          { text: 'Я мо́жу піти́ додо́му.', translation: 'Eu posso ir para casa.', wrong: 'Isso não responde se você precisa trabalhar hoje. Use “ма́ю” ou “не ма́ю”.' },
        ],
      },
      final: {
        text: 'Чудо́во! Гарно́ї робо́ти!',
        translation: 'Ótimo! Bom trabalho!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Гарна́ розмо́ва!', message: 'Você contou o que fez ontem e falou da sua profissão, usando o passado.' },
      },
    },
    glossary: [
      ['що ти роби́в?', 'o que você fez? (para quem fala com um homem)'],
      ['я працюва́в', 'eu trabalhei (quem fala é homem)'],
      ['ма́ю', 'eu tenho que'],
      ['вчи́тель', 'professor'],
    ],
  },
];
