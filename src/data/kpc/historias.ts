import type { StorySeed } from '../types';

/**
 * Histórias interativas do baniwa — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * As falas combinam palavras e construções atestadas em pt.wikipedia.org/wiki/Língua_baniwa (citando
 * Ramirez 2001a/2001b) com a palavra-base do vocabulário deste pacote — ver vocabulario.ts para a
 * explicação completa do método (nunca uma palavra nova inventada). Ambientadas em comunidades do
 * médio rio Içana, onde se fala baniwa no dia a dia.
 */
export const STORIES_KPC: StorySeed[] = [
  {
    id: 'kpc-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Káphaa phía Walimanai?',
    emoji: '🛶',
    summary: 'Sua canoa chega a uma comunidade do médio rio Içana, e alguém pergunta se você é walimanai.',
    cultural_context:
      'As comunidades baniwa se espalham ao longo do rio Içana e de afluentes como o Aiari e o Cuiari. Perguntar “de onde” ou “quem” alguém é, logo que a canoa chega, é um jeito comum de começar uma conversa — tanto quanto perguntar pela família de quem chegou.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Káphaa phía Walimanai?',
        translation: 'Você é walimanai?',
        emoji: '🛶',
        choices: [
          { text: 'Nhúa Walimanai.', translation: 'Eu sou walimanai.', next: 'pai' },
          { text: 'Théewa.', translation: 'Amanhã.', wrong: 'Isso não responde a pergunta sobre quem você é. Use o pronome independente: “Nhúa Walimanai.” (eu sou walimanai).' },
        ],
      },
      pai: {
        text: 'Wháa Walimanai! Kalhe pihániri?',
        translation: 'Nós somos walimanai! Onde está o seu pai?',
        emoji: '👨',
        choices: [
          { text: 'Nu-hániri édzaua.', translation: 'Meu pai está na terra firme.', next: 'canoa' },
          { text: 'Nu-íitu.', translation: 'Minha filha.', wrong: 'A pergunta foi sobre o seu pai (hániri), não sobre uma filha (íitu). Responda com “Nu-hániri” e onde ele está.' },
        ],
      },
      canoa: {
        text: 'Kenakuda íita?',
        translation: 'Quantas canoas?',
        emoji: '🤔',
        choices: [
          { text: 'Apá íita.', translation: 'Uma canoa.', next: 'final' },
          { text: 'Dzamaápa palana.', translation: 'Duas bananas.', wrong: 'A pergunta foi sobre canoas (íita), não bananas (palana). Responda com um número seguido de “íita”.' },
        ],
      },
      final: {
        text: 'Núawa!',
        translation: 'Eu vou! (usado aqui como “vamos!”)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Apá íita no Içana',
          message: 'Você se apresentou como walimanai, falou do seu pai e contou as canoas — uma conversa simples de chegada numa comunidade do rio Içana.',
        },
      },
    },
    glossary: [
      ['Walimanai', 'baniwa (autodesignação do povo e da língua)'],
      ['hániri', 'pai'],
      ['íita', 'canoa'],
      ['kalhe', 'onde?'],
    ],
  },
  {
    id: 'kpc-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Nu-hadua, nu-pheeri',
    emoji: '👩',
    summary: 'Uma conversa em casa, na terra firme: a família e o rio, com seus cachorros e suas onças.',
    cultural_context:
      'A água do Içana é notavelmente fria em certos trechos, e onças (“dzaawi”) fazem parte das histórias contadas à beira do rio — reconhecer “hape” (frio) e “dzaawi” (onça) ajuda quem está aprendendo a prestar atenção na natureza ao redor das comunidades.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Kalhe pihadua?',
        translation: 'Onde está a sua mãe?',
        emoji: '👩',
        choices: [
          { text: 'Nu-hadua édzaua.', translation: 'Minha mãe está na terra firme.', next: 'irmaos' },
          { text: 'Nu-hániri.', translation: 'Meu pai.', wrong: 'A pergunta foi sobre a sua mãe (hadua), não o seu pai (hániri). Responda com “Nu-hadua”.' },
        ],
      },
      irmaos: {
        text: 'Kenakuda pheeri?',
        translation: 'Quantos irmãos mais velhos?',
        emoji: '🧑',
        choices: [
          { text: 'Apaa pheeri, dzama mhéreeri.', translation: 'Um irmão mais velho, dois irmãos mais novos.', next: 'cachorro' },
          { text: 'Ñame.', translation: 'Não, negado.', wrong: 'Isso nega a pergunta inteira, mas ela pediu uma quantidade. Responda com um número seguido de “pheeri”.' },
        ],
      },
      cachorro: {
        text: 'Nukapa tsíino. Hape uni!',
        translation: 'Eu vejo um cachorro. A água está fria!',
        emoji: '🐕',
        choices: [
          { text: 'Hape uni. Ñame dzaawi.', translation: 'A água está fria. Não há onça.', next: 'final' },
          { text: 'Keepe tsíino.', translation: 'O cachorro é gordo.', wrong: 'Isso fala do cachorro estar gordo, não do frio da água nem da onça. Diga “Hape uni.” e “Ñame dzaawi.” (não há onça).' },
        ],
      },
      final: {
        text: 'Núawa!',
        translation: 'Eu vou! (usado aqui como “vamos!”)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Nu-hadua, nu-pheeri',
          message: 'Você falou da sua família e ficou de olho no rio — “hape” (frio) e “dzaawi” (onça) são boas palavras para prestar atenção na natureza do Içana.',
        },
      },
    },
    glossary: [
      ['hadua', 'mãe'],
      ['pheeri', 'irmão mais velho'],
      ['hape', 'frio, está frio'],
      ['dzaawi', 'onça'],
    ],
  },
];
