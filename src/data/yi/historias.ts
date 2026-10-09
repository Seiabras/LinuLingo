import type { StorySeed } from '../types';

/**
 * Histórias interativas do iídiche — uma por subnível (A1.1, A1.2, A2.1, A2.2). As falas em iídiche
 * (campo `text` e `choices.text`) só usam palavras e formas confirmadas no Wikcionário e na
 * Wikipédia em inglês (ver os comentários de vocabulario.ts e gramatica.ts); os campos em português
 * (`summary`, `cultural_context`, `translation`, `ending.message`) são narração livre.
 *
 * As duas histórias de A2 (yi-h3, yi-h4, pesquisadas em 09/10/2026) evitam qualquer adjetivo novo
 * (אַלט/נײַ/קאַלט/וואַרעם/לאַנג/קורץ) direto antes de um substantivo, e evitam a contração coloquial
 * “ביסטו” (du bist invertido): nenhuma das duas está confirmada numa página própria do Wikcionário,
 * então as frases usam sempre a forma completa “ביסט דו” — ver a mesma nota em curriculo.ts.
 */
export const STORIES_YI: StorySeed[] = [
  {
    id: 'yi-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'שלום עליכם, דוד!',
    emoji: '👋',
    summary: 'Você conhece Moyshe e faz a sua primeira conversa em iídiche.',
    cultural_context:
      'Hoje, as comunidades onde mais se fala iídiche em casa, de pais para filhos, são as comunidades hassídicas de Nova York (Brooklyn, Kiryas Joel, Monroe), além de Israel, Antuérpia e Londres — segundo uma estimativa da Universidade Rutgers (2021) e do YIVO.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'שלום עליכם! איך הייס משה.',
        translation: 'Olá! Eu me chamo Moyshe.',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'שלום עליכם! איך הייס דוד.', translation: 'Olá! Eu me chamo David.', next: 'gut' },
          { text: 'ניין.', translation: 'Não.', wrong: 'Moyshe acabou de se apresentar: isso não é uma pergunta de sim ou não. Devolva a saudação e diga o seu nome com “איך הייס…”.' },
        ],
      },
      gut: {
        text: 'גוט־מאָרגן! וואָס מאַכסטו?',
        translation: 'Bom dia! Como vai?',
        emoji: '😊',
        choices: [
          { text: 'גוט, אַ דאַנק! און דו?', translation: 'Bem, obrigado! E você?', next: 'final_bom' },
          { text: 'איך וויל קאַווע.', translation: 'Eu quero café.', wrong: 'Isso não responde “como vai?”. Responda com “גוט, אַ דאַנק…”.' },
        ],
      },
      final_bom: {
        text: 'גוט! מזל טוב!',
        translation: 'Ótimo! Parabéns!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'מזל טוב!', message: 'Moyshe sorri: você fez a sua primeira conversa em iídiche.' },
      },
    },
    glossary: [
      ['שלום עליכם', 'olá'],
      ['איך הייס', 'eu me chamo'],
      ['וואָס מאַכסטו?', 'como vai?'],
      ['אַ דאַנק', 'obrigado'],
    ],
  },
  {
    id: 'yi-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'מאַמעס קאַווע',
    emoji: '☕',
    summary: 'Moyshe pergunta pela sua família e oferece um café em casa.',
    cultural_context:
      'A palavra “קאַווע” (café) entrou no iídiche pelo polonês “kawa” — uma lembrança de que boa parte do vocabulário do dia a dia veio do Leste Europeu, mesmo quando a palavra, lá atrás, é árabe ou turca.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'דו האָסט אַ ברודער?',
        translation: 'Você tem um irmão?',
        emoji: '🙋‍♂️',
        choices: [
          { text: 'יאָ, איך האָב אַ ברודער.', translation: 'Sim, eu tenho um irmão.', next: 'ber' },
          { text: 'דאָס איז מײַן הויז.', translation: 'Esta é a minha casa.', wrong: 'Isso não responde se você tem um irmão. Use “יאָ, איך האָב…” ou “ניין”.' },
        ],
      },
      ber: {
        text: 'מזל טוב! איך וויל קאַווע. און דו?',
        translation: 'Parabéns! Eu quero café. E você?',
        emoji: '☕',
        choices: [
          { text: 'יאָ, אַ דאַנק!', translation: 'Sim, obrigado!', next: 'final_bom' },
          { text: 'ניין, אַ דאַנק.', translation: 'Não, obrigado.', next: 'final_neutro' },
        ],
      },
      final_bom: {
        text: 'גוט! קאַווע און ברויט!',
        translation: 'Ótimo! Café e pão!',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'מזל טוב!', message: 'Você tomou café com a família de Moyshe — tudo em iídiche.' },
      },
      final_neutro: {
        text: 'גוט־מאָרגן!',
        translation: 'Bom dia!',
        emoji: '🙂',
        ending: { tone: 'neutro', title: 'גוט־מאָרגן', message: 'Você preferiu não tomar café agora, mas a conversa foi um sucesso.' },
      },
    },
    glossary: [
      ['דו האָסט', 'você tem'],
      ['איך האָב', 'eu tenho'],
      ['איך וויל', 'eu quero'],
      ['קאַווע און ברויט', 'café e pão'],
    ],
  },
  {
    id: 'yi-h3',
    level: 'A2.1',
    cefr: 'A2',
    title: 'שניי און קאַווע',
    emoji: '❄️',
    summary: 'Moyshe vê a primeira neve do ano e convida você para um café quente.',
    cultural_context:
      'As comunidades iídiche-falantes do Leste Europeu, de onde vem boa parte do vocabulário eslavo da língua (como “קאַווע”, café, do polonês “kawa”), tinham invernos longos e rigorosos — um contexto que ajuda a explicar por que bebidas quentes aparecem tanto nas frases do dia a dia.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'איך זע דעם שניי. דו ווילסט קאַווע?',
        translation: 'Eu vejo a neve. Você quer café?',
        emoji: '❄️',
        choices: [
          { text: 'יאָ, איך וויל קאַווע.', translation: 'Sim, eu quero café.', next: 'kave' },
          { text: 'איך קויף ברויט.', translation: 'Eu compro pão.', wrong: 'Isso não responde se você quer café. Use “יאָ” ou “ניין”.' },
        ],
      },
      kave: {
        text: 'גוט! די קאַווע איז וואַרעם.',
        translation: 'Ótimo! O café está quente.',
        emoji: '☕',
        choices: [
          { text: 'אַ דאַנק! איך הער דעם ווינט.', translation: 'Obrigado! Eu ouço o vento.', next: 'final_bom' },
          { text: 'דאָס איז מײַן הונט.', translation: 'Este é o meu cachorro.', wrong: 'Isso não tem nada a ver com o café quente. Agradeça com “אַ דאַנק”.' },
        ],
      },
      final_bom: {
        text: 'יאָ! דער ווינט איז גרויס.',
        translation: 'Sim! O vento está forte.',
        emoji: '🌬️',
        ending: { tone: 'bom', title: 'גוט־מאָרגן!', message: 'Você tomou café quente enquanto ouvia o vento e via a neve — tudo em iídiche.' },
      },
    },
    glossary: [
      ['איך זע', 'eu vejo'],
      ['דו ווילסט', 'você quer'],
      ['די קאַווע איז וואַרעם', 'o café está quente'],
      ['דער ווינט', 'o vento'],
    ],
  },
  {
    id: 'yi-h4',
    level: 'A2.2',
    cefr: 'A2',
    title: 'וווּ ביסט דו?',
    emoji: '📍',
    summary: 'Moyshe pergunta onde você está e compara a casa antiga com a casa nova.',
    cultural_context:
      'Perguntar “וווּ” (onde) é especialmente útil para quem visita hoje as comunidades onde o iídiche é falado em casa, de pais para filhos: Brooklyn, Kiryas Joel e Monroe (Nova York), além de Lakewood (Nova Jérsei), Antuérpia e Londres.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'וווּ ביסט דו?',
        translation: 'Onde você está?',
        emoji: '📍',
        choices: [
          { text: 'איך בין דאָ.', translation: 'Eu estou aqui.', next: 'nex' },
          { text: 'איך האָב אַ קאַווע.', translation: 'Eu tenho um café.', wrong: 'Isso não diz onde você está. Responda com “איך בין דאָ” ou “איך בין דאָרט”.' },
        ],
      },
      nex: {
        text: 'גוט! איך קויף ברויט. און דו?',
        translation: 'Ótimo! Eu compro pão. E você?',
        emoji: '🛒',
        choices: [
          { text: 'דאָס הויז איז נײַ.', translation: 'A casa é nova.', next: 'final_bom' },
          { text: 'דער הונט איז שוואַרץ.', translation: 'O cachorro é preto.', wrong: 'Isso não compara nada. Diga se a casa é “אַלט” ou “נײַ”.' },
        ],
      },
      final_bom: {
        text: 'גוט! דאָס הויז דאָרט איז אַלט, און דאָס הויז דאָ איז נײַ.',
        translation: 'Ótimo! A casa lá é antiga, e a casa aqui é nova.',
        emoji: '🏠',
        ending: { tone: 'bom', title: 'מזל טוב!', message: 'Você comparou as duas casas em iídiche — a antiga e a nova.' },
      },
    },
    glossary: [
      ['וווּ ביסט דו?', 'onde você está?'],
      ['איך בין דאָ', 'eu estou aqui'],
      ['דאָס הויז איז נײַ', 'a casa é nova'],
      ['דאָס הויז איז אַלט', 'a casa é antiga'],
    ],
  },
];
