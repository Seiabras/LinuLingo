import type { StorySeed } from '../types';

/**
 * Histórias interativas do huni kuĩ — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto. As
 * falas combinam palavras atestadas em pt.wikipedia.org/wiki/Língua_caxinauá e pt.wikipedia.org/wiki/
 * Huni_Kuin com os dois padrões de frase já confirmados nessas fontes (demonstrativo “na” + substantivo;
 * pronome+“-ã” + substantivo) — ver vocabulario.ts para a explicação completa do método (nunca uma
 * palavra nova inventada). Ambientadas em aldeias à beira do rio Jordão, no Acre, uma das terras
 * indígenas huni kuĩ confirmadas (“Kaxinawá do Rio Jordão”, em pt.wikipedia.org/wiki/Huni_Kuin).
 */
export const STORIES_CBS: StorySeed[] = [
  {
    id: 'cbs-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'Txai, no rio Jordão',
    emoji: '🏞️',
    summary: 'Sua canoa chega a uma aldeia à beira do rio Jordão, no Acre, e alguém te chama de “txai”.',
    cultural_context:
      'As aldeias huni kuĩ se espalham por terras indígenas como a do rio Jordão, no leste do Acre. “Txai” — termo de parentesco entre cunhados/primos cruzados, usado também como forma de tratamento amistosa — é uma das palavras huni kuĩ mais conhecidas fora das aldeias, popularizada nacionalmente a partir do convívio do seringueiro Chico Mendes com o povo huni kuĩ.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Txai! Mĩ huni kuin?',
        translation: 'Parceiro! Você é huni kuin?',
        emoji: '🏹',
        choices: [
          { text: 'Txai! Ɨ huni kuin.', translation: 'Parceiro! Eu sou huni kuin.', next: 'casa' },
          { text: 'Na mani.', translation: 'Esta banana.', wrong: 'Isso não responde à pergunta sobre quem você é. Confirme com “Ɨ huni kuin.” (eu sou huni kuin).' },
        ],
      },
      casa: {
        text: 'Ɨ-ã hiwɨ hawɨ̃-rua. Mĩ huni kuin?',
        translation: 'Minha casa é bonita. Você é huni kuin? (confirmando)',
        emoji: '🏠',
        choices: [
          { text: 'Huni kuin. Ɨ-ã ɨpa, ɨ-ã ɨwa.', translation: 'Huni kuin. Meu pai, minha mãe.', next: 'rio' },
          { text: 'Ɨ-ã aĩbu.', translation: 'Minha mulher.', wrong: 'A conversa estava sobre seus pais (ɨpa, ɨwa), não sobre sua esposa/mulher (aĩbu). Fale de “ɨ-ã ɨpa” e “ɨ-ã ɨwa”.' },
        ],
      },
      rio: {
        text: 'Na kaya. Na ni.',
        translation: 'Este rio. Esta árvore.',
        emoji: '🌳',
        choices: [
          { text: 'Na kaya hawɨ̃-rua.', translation: 'Este rio é bonito.', next: 'final' },
          { text: 'Bɨsti, rabɨ.', translation: 'Um, dois.', wrong: 'A fala foi sobre o rio e a árvore, não sobre contagem. Responda descrevendo o rio: “Na kaya hawɨ̃-rua.” (este rio é bonito).' },
        ],
      },
      final: {
        text: 'Txai!',
        translation: 'Parceiro! (despedida amistosa)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Txai no rio Jordão',
          message: 'Você se apresentou como huni kuin, falou da sua casa e da sua família, e elogiou o rio — uma conversa simples de chegada numa aldeia do rio Jordão.',
        },
      },
    },
    glossary: [
      ['Huni kuin', 'gente verdadeira (autônimo do povo)'],
      ['Txai', 'parceiro, amigo (também termo de parentesco cruzado)'],
      ['hiwɨ', 'casa'],
      ['kaya', 'rio'],
    ],
  },
  {
    id: 'cbs-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'Na mani, na takara',
    emoji: '🍌',
    summary: 'Um dia de colheita e criação perto da aldeia: bananas para comer e galinhas para contar.',
    cultural_context:
      'A divisão do trabalho entre homens e mulheres é marcante na vida huni kuĩ: a plantação, a colheita e a criação de pequenos animais, como galinhas, costumam ficar a cargo das mulheres, enquanto caça, pesca e guerra tradicionalmente cabiam aos homens, segundo o Instituto Socioambiental (ISA).',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Na mani pi wɨ.',
        translation: 'Coma esta banana.',
        emoji: '🍌',
        choices: [
          { text: 'Txai! Na mani hawɨ̃-rua.', translation: 'Parceiro! Esta banana é boa.', next: 'galinhas' },
          { text: 'Na kaya.', translation: 'Este rio.', wrong: 'A oferta foi de uma banana (mani), não sobre o rio (kaya). Agradeça comentando a própria banana: “Na mani hawɨ̃-rua.”.' },
        ],
      },
      galinhas: {
        text: 'Na takara. Bɨsti, rabɨ, tsamĩ.',
        translation: 'Esta galinha. Um, dois, três.',
        emoji: '🐔',
        choices: [
          { text: 'Bɨsti, rabɨ, tsamĩ, kɨtaş.', translation: 'Um, dois, três, quatro.', next: 'arvore' },
          { text: 'Ɨ-ã ɨpa.', translation: 'Meu pai.', wrong: 'A fala era sobre contar galinhas (takara), não sobre o pai (ɨpa). Continue a contagem: “Bɨsti, rabɨ, tsamĩ, kɨtaş.”.' },
        ],
      },
      arvore: {
        text: 'Na ni. Na ui!',
        translation: 'Esta árvore. Esta chuva!',
        emoji: '🌧️',
        choices: [
          { text: 'Na ni hawɨ̃-rua. Na ui!', translation: 'Esta árvore é bonita. Esta chuva!', next: 'final' },
          { text: 'Txara.', translation: 'Flecha.', wrong: 'A fala foi sobre a árvore e a chuva, não sobre uma flecha (txara). Comente a árvore e a chuva: “Na ni hawɨ̃-rua. Na ui!”.' },
        ],
      },
      final: {
        text: 'Txai!',
        translation: 'Parceiro! (despedida amistosa)',
        emoji: '🎉',
        ending: {
          tone: 'bom',
          title: 'Na mani, na takara',
          message: 'Você comeu uma banana, contou galinhas até quatro e ainda elogiou a árvore debaixo de chuva — um dia comum perto de uma aldeia huni kuĩ.',
        },
      },
    },
    glossary: [
      ['mani', 'banana'],
      ['takara', 'galinha'],
      ['ni', 'árvore'],
      ['ui', 'chuva'],
    ],
  },
];
