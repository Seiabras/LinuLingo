import type { StorySeed } from '../types';

/** Histórias interativas do bielorrusso — uma por nível, de A1.1 a A2.2 (pacote incompleto). */
export const STORIES_BE: StorySeed[] = [
  {
    id: 'be-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Прывіта́нне ў Мі́нску',
    emoji: '👋',
    summary: 'Você conhece Volia na estação de trem de Minsk e faz a sua primeira conversa em bielorrusso.',
    cultural_context: 'Minsk é a capital de Belarus, reconstruída quase por inteiro depois da Segunda Guerra Mundial, com largas avenidas e arquitetura soviética.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Прывіта́нне! Мяне́ зва́ць Во́ля. Як спра́вы?',
        translation: 'Oi! Eu me chamo Volia. Como vai?',
        emoji: '🙋‍♀️',
        choices: [
          { text: 'До́бра, дзя́куй! А ты?', translation: 'Bem, obrigado! E você?', next: 'dobra' },
          { text: 'Да пабачэ́ння!', translation: 'Tchau!', wrong: 'Volia acabou de cumprimentar você: despedir-se agora seria estranho. Responda primeiro.' },
        ],
      },
      dobra: {
        text: 'Тако́сама до́бра! Адку́ль ты?',
        translation: 'Também bem! De onde você é?',
        emoji: '😊',
        choices: [
          { text: 'Я з Сан-Паўлу.', translation: 'Sou de São Paulo.', next: 'final_bom' },
          { text: 'Я п’ю ваду́.', translation: 'Eu bebo água.', wrong: 'Isso não responde de onde você é. Use “Я з…”.' },
        ],
      },
      final_bom: {
        text: 'Цу́дава! Сардэ́чна запра́шаем у Мінск!',
        translation: 'Que legal! Bem-vindo a Minsk!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Добры пача́так!', message: 'Volia sorri: você fez a sua primeira conversa em bielorrusso.' },
      },
    },
    glossary: [
      ['прывіта́нне', 'oi, olá'],
      ['як спра́вы?', 'como vai?'],
      ['я з', 'eu sou de'],
      ['сардэ́чна запра́шаем', 'bem-vindo'],
    ],
  },
  {
    id: 'be-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Вячэ́ра ў сям’і́',
    emoji: '👪',
    summary: 'Andrei, um amigo de Gomel, pergunta pela sua família e convida você para jantar com a família dele.',
    cultural_context: 'Gomel é a segunda maior cidade de Belarus, às margens do rio Sož, no sudeste do país.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Прывіта́нне! У цябе́ ёсць бра́ты ці сёстры?',
        translation: 'Oi! Você tem irmãos ou irmãs?',
        emoji: '📱',
        choices: [
          { text: 'Так, у мяне́ ёсць брат і сястра́.', translation: 'Sim, tenho um irmão e uma irmã.', next: 'irmaos' },
          { text: 'Мой дом вялі́кі.', translation: 'A minha casa é grande.', wrong: 'Isso não responde se você tem irmãos. Use “у мяне́ ёсць…”.' },
        ],
      },
      irmaos: {
        text: 'Цу́дава! Хо́чаш пайсці́ да нас у субо́ту?',
        translation: 'Que legal! Quer vir à nossa casa no sábado?',
        emoji: '🍽️',
        choices: [
          { text: 'Так, вя́лікі дзя́куй!', translation: 'Sim, muito obrigado!', next: 'final_bom' },
          { text: 'Я з Сан-Паўлу.', translation: 'Sou de São Paulo.', wrong: 'Andrei fez um convite: responda com “так” ou “не, дзя́куй”.' },
        ],
      },
      final_bom: {
        text: 'Цу́дава! Мая́ ма́ма гату́е хлеб і сыр.',
        translation: 'Ótimo! A minha mãe faz pão e queijo.',
        emoji: '🧀',
        ending: { tone: 'bom', title: 'Запрашэ́нне!', message: 'Você foi convidado para jantar com a família de Andrei.' },
      },
    },
    glossary: [
      ['брат / сястра́', 'irmão / irmã'],
      ['у мяне́ ёсць', 'eu tenho'],
      ['так', 'sim'],
      ['да нас', 'na nossa casa'],
    ],
  },
  {
    id: 'be-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ноч на Купа́лле',
    emoji: '🔥',
    summary: 'Na noite de Kupalle, perto de uma fogueira às margens do rio, você conversa com Alesia sobre o calor da noite e como todos se sentem na festa.',
    cultural_context: 'Купа́лле, celebrado na noite de 6 para 7 de julho, é uma festa do solstício de verão com fogueiras, coroas de flores soltas na água e saltos sobre o fogo; a palavra já aparece numa crônica de 1262.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Прывіта́нне! Сёння вельмі цёпла. Як ты сябе́ адчува́еш?',
        translation: 'Oi! Hoje está muito quente. Como você está se sentindo?',
        emoji: '🔥',
        choices: [
          { text: 'Сто́млены, але вельмі шчаслі́вы.', translation: 'Cansado, mas muito feliz.', next: 'shcasliy' },
          { text: 'Уве́чары ідзе снег.', translation: 'À noite neva.', wrong: 'Isso não responde como você está se sentindo. Use “я...”.' },
        ],
      },
      shcasliy: {
        text: 'Чаму́ ты шчаслі́вы ў ноч на Купа́лле?',
        translation: 'Por que você está feliz na noite de Kupalle?',
        emoji: '😊',
        choices: [
          { text: 'Уве́чары я бу́ду ска́каць праз аго́нь.', translation: 'À noite eu vou saltar sobre a fogueira.', next: 'final_bom' },
          { text: 'Я купля́ю хлеб.', translation: 'Eu compro pão.', wrong: 'Isso não explica por que você está feliz. Fale da fogueira.' },
        ],
      },
      final_bom: {
        text: 'Цу́дава! Пу́сцім вянкі́ па вадзе́!',
        translation: 'Maravilha! Vamos soltar as coroas de flores na água!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Купа́льская ноч!', message: 'Você viveu a noite de Kupalle com fogueira e coroas de flores na água, com Alesia.' },
      },
    },
    glossary: [
      ['купа́лле', 'festa do solstício de verão'],
      ['шчаслі́вы', 'feliz'],
      ['аго́нь', 'fogo'],
      ['вяно́к', 'coroa de flores'],
    ],
  },
  {
    id: 'be-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'У Ве́рхнім го́радзе',
    emoji: '🏛️',
    summary: 'No Verkhni Horad (Cidade Alta) de Minsk, perto da Ратуша, você conhece Piotr, que é professor, e fala sobre a cidade e profissões.',
    cultural_context: 'O Верхні горад é o centro histórico de Minsk, onde fica a Ратуша (câmara municipal) restaurada, a poucos passos da Catedral Arquiepiscopal, construída entre 1700 e 1710.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Прывіта́нне! Чым ты займа́ешся?',
        translation: 'Oi! O que você faz (qual é a sua profissão)?',
        emoji: '🏛️',
        choices: [
          { text: 'Я настаўнік. А ты?', translation: 'Eu sou professor. E você?', next: 'profesiya' },
          { text: 'Мне дваццаць гадоў.', translation: 'Tenho vinte anos.', wrong: 'Isso não responde à profissão. Use “я...”.' },
        ],
      },
      profesiya: {
        text: 'Я ку́хар. Купля́ю ўсё на гэ́тым ры́нку.',
        translation: 'Eu sou cozinheiro. Compro tudo neste mercado.',
        emoji: '🧑‍🍳',
        choices: [
          { text: 'Мінск бо́льшы за Го́мель, праўда?', translation: 'Minsk é maior que Gomel, não é?', next: 'final_bom' },
          { text: 'Сёння ідзе снег.', translation: 'Hoje neva.', wrong: 'Isso não tem nada a ver com a cidade. Compare Minsk com outra cidade.' },
        ],
      },
      final_bom: {
        text: 'Так, наба́гата бо́льшы! Прыхо́дзь на ры́нак зно́ў!',
        translation: 'Sim, muito maior! Volte ao mercado outra vez!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'У Ры́нку!', message: 'Você conheceu Piotr, cozinheiro perto do Verkhni Horad, e falou sobre as cidades de Belarus.' },
      },
    },
    glossary: [
      ['ку́хар', 'cozinheiro'],
      ['ры́нак', 'mercado'],
      ['бо́льшы за', 'maior que'],
      ['праўда?', 'não é? (pergunta de confirmação)'],
    ],
  },
];
