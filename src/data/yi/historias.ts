import type { StorySeed } from '../types';

/**
 * Histórias interativas do iídiche — uma por subnível (A1.1 e A1.2), pacote incompleto. As falas em
 * iídiche (campo `text` e `choices.text`) só usam palavras e formas confirmadas no Wikcionário e na
 * Wikipédia em inglês (ver os comentários de vocabulario.ts e gramatica.ts); os campos em português
 * (`summary`, `cultural_context`, `translation`, `ending.message`) são narração livre.
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
];
