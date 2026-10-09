import type { StorySeed } from '../types';

/**
 * Histórias interativas do bretão — uma por nível (A1.1, A1.2, A2.1, A2.2). Todas as falas e
 * escolhas combinam só palavras e frases verificadas no Wiktionary em inglês, na Omniglot ("Breton
 * phrases"/"Breton kinship terms"/"Breton time expressions") e na Wikipédia em inglês ("Breton
 * grammar") — ver vocabulario.ts e gramatica.ts.
 */
export const STORIES_BR: StorySeed[] = [
  {
    id: 'br-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Demat, Yannig!',
    emoji: '👋',
    summary: 'Você encontra Yannig na rua e faz a sua primeira conversa em bretão.',
    cultural_context: "“Demat” é o cumprimento mais comum do bretão e serve a qualquer hora do dia — diferente do português, que separa “bom dia”, “boa tarde” e “boa noite”.",
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Demat! Yannig eo va anv. Piv out te?',
        translation: 'Oi! Meu nome é Yannig. Quem é você?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'Mona eo va anv.', translation: 'Meu nome é Mona.', next: 'anv' },
          { text: 'Kenavo!', translation: 'Tchau!', wrong: 'Yannig acabou de se apresentar: despedir-se agora seria estranho. Diga o seu nome primeiro, com “… eo va anv”.' },
        ],
      },
      anv: {
        text: 'Mat an traoù?',
        translation: 'Tudo bem?',
        emoji: '😊',
        choices: [
          { text: 'Ya, mat-tre. Ha ganit?', translation: 'Sim, muito bem. E você?', next: 'final' },
          { text: 'Ur banne dour, mar plij.', translation: 'Um copo de água, por favor.', wrong: 'Isso não responde como você está. Responda com “Ya, mat-tre…” ou devolva a pergunta.' },
        ],
      },
      final: {
        text: 'Mat-tre! Kenavo, ha trugarez!',
        translation: 'Muito bem! Tchau, e obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Mat-tre!', message: 'Yannig sorri: você fez a sua primeira conversa em bretão.' },
      },
    },
    glossary: [
      ['demat', 'oi, bom dia'],
      ['piv out?', 'quem é você?'],
      ['mat an traoù?', 'tudo bem?'],
      ['kenavo', 'tchau'],
    ],
  },
  {
    id: 'br-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Ur banne gwin',
    emoji: '🍷',
    summary: 'Mona oferece uma bebida na casa dela, e você escolhe entre água e vinho — tinto ou branco.',
    cultural_context: 'Na Bretanha, oferecer “ur banne” (um copo, uma dose) de algo a quem chega é um gesto comum de hospitalidade, com água, sidra ou vinho.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Demat! Ur banne dour pe ur banne gwin?',
        translation: 'Oi! Um copo de água ou um copo de vinho?',
        emoji: '🏠',
        choices: [
          { text: 'Ur banne gwin, mar plij.', translation: 'Um copo de vinho, por favor.', next: 'vinho' },
          { text: 'Debriñ a ran.', translation: 'Eu como.', wrong: 'Mona ofereceu uma bebida (água ou vinho): responda com “ur banne…”, não fale sobre comida.' },
        ],
      },
      vinho: {
        text: 'Gwin ruz pe gwin gwenn?',
        translation: 'Vinho tinto ou vinho branco?',
        emoji: '🍇',
        choices: [
          { text: 'Gwin ruz, mar plij.', translation: 'Vinho tinto, por favor.', next: 'final' },
          { text: 'Ya, mat-tre.', translation: 'Sim, muito bem.', wrong: 'Isso não escolhe entre tinto e branco: responda com “gwin ruz” ou “gwin gwenn”.' },
        ],
      },
      final: {
        text: 'Mat-tre! Kenavo!',
        translation: 'Muito bem! Tchau!',
        emoji: '🥂',
        ending: { tone: 'bom', title: 'Ur banne gwin ruz!', message: 'Você pediu um copo de vinho tinto em bretão — mat-tre!' },
      },
    },
    glossary: [
      ['ur banne', 'um copo, uma dose de'],
      ['mar plij', 'por favor'],
      ['gwin ruz / gwin gwenn', 'vinho tinto / vinho branco'],
      ['trugarez', 'obrigado'],
    ],
  },
  {
    id: 'br-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'Ar familh',
    emoji: '👪',
    summary: 'Yannig te mostra uma foto da família dele e pergunta sobre a sua.',
    cultural_context: 'Mostrar fotos de família é um jeito comum de começar uma conversa mais pessoal, depois das primeiras apresentações.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Setu ma familh! Ma breur ha ma c’hoar.',
        translation: 'Aqui está minha família! Meu irmão e minha irmã.',
        emoji: '📷',
        choices: [
          { text: 'Piv eo ar vamm-gozh?', translation: 'Quem é a avó?', next: 'mamm_gozh' },
          { text: 'Mat eo ar gwin ruz.', translation: 'O vinho tinto é bom.', wrong: 'Yannig está mostrando uma foto de família, não falando de vinho: pergunte sobre a família, como “Piv eo…?”.' },
        ],
      },
      mamm_gozh: {
        text: 'Mamm-gozh eo Perrine. Ha da familh, bras eo?',
        translation: 'A avó é Perrine. E sua família, é grande?',
        emoji: '👵',
        choices: [
          { text: 'Ya, ur breur ha div c’hoar a zo ganin.', translation: 'Sim, tenho um irmão e duas irmãs.', next: 'final' },
          { text: 'Dilun eo hiziv.', translation: 'Hoje é segunda-feira.', wrong: 'Isso não responde sobre o tamanho da sua família: diga quantos irmãos e irmãs você tem.' },
        ],
      },
      final: {
        text: 'Familh vras eo! Kenavo, ha trugarez!',
        translation: 'É uma família grande! Tchau, e obrigado!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ar familh!', message: 'Você apresentou sua família em bretão.' },
      },
    },
    glossary: [
      ['familh', 'família'],
      ['breur / c’hoar', 'irmão / irmã'],
      ['mamm-gozh / tad-kozh', 'avó / avô'],
      ['piv eo…?', 'quem é…?'],
    ],
  },
  {
    id: 'br-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'Peseurt goañvezh?',
    emoji: '🍂',
    summary: 'Mona e você conversam sobre as estações do ano e o que farão amanhã.',
    cultural_context: 'A Bretanha tem clima atlântico, com chuva frequente — por isso falar do tempo (“amzer”) é um assunto comum de conversa, como no resto da Europa.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'An amzer zo brav hiziv. Hañv eo bremañ, pe goañv?',
        translation: 'O tempo está bom hoje. É verão agora, ou inverno?',
        emoji: '🌦️',
        choices: [
          { text: 'Hañv eo bremañ.', translation: 'É verão agora.', next: 'futuro' },
          { text: 'Ur c’hi am eus.', translation: 'Eu tenho um cachorro.', wrong: 'Mona perguntou sobre a estação do ano, não sobre animais: responda com “Hañv eo bremañ” ou “Goañv eo bremañ”.' },
        ],
      },
      futuro: {
        text: 'Mat-tre! Ha warc’hoazh, e bi amañ?',
        translation: 'Muito bem! E amanhã, você estará aqui?',
        emoji: '📆',
        choices: [
          { text: 'Ya, warc’hoazh e bin amañ.', translation: 'Sim, amanhã eu estarei aqui.', next: 'final' },
          { text: 'Brasoc’h eo an ti-mañ.', translation: 'Esta casa é maior.', wrong: 'Isso não responde se você estará aqui amanhã: use o futuro, “warc’hoazh e bin amañ”.' },
        ],
      },
      final: {
        text: 'Mat-tre! Kenavo ha ken warc’hoazh!',
        translation: 'Muito bem! Tchau e até amanhã!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Ken warc’hoazh!', message: 'Você falou do tempo e do futuro em bretão — mat-tre!' },
      },
    },
    glossary: [
      ['amzer', 'tempo (clima); tempo (duração)'],
      ['hañv / goañv', 'verão / inverno'],
      ['warc’hoazh', 'amanhã'],
      ['brasoc’h', 'maior'],
    ],
  },
];
