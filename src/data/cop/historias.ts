import type { StorySeed } from '../types';

/**
 * Histórias interativas do copta — por enquanto uma por nível (A1.1 e A1.2), pacote incompleto.
 * Cenário: o Mosteiro Branco (Alto Egito), ligado ao abade Ϣⲉⲛⲟⲩⲧⲉ (Chenute de Atripe, c. 348-465),
 * o autor saídico nativo mais prolífico de toda a literatura copta — fonte: Wikipedia (inglês)
 * "Shenoute". Nenhuma frase das histórias é uma pergunta (ver a nota em `vocabulario.ts` sobre a
 * interrogação ainda não confirmada); as escolhas alternam entre uma frase que continua a conversa e
 * outra que, mesmo gramatical, não responde ao que foi dito.
 */
export const STORIES_COP: StorySeed[] = [
  {
    id: 'cop-h1',
    level: 'A1.1',
    cefr: 'A1',
    title: 'No Mosteiro Branco, com Chenute',
    emoji: '📜',
    summary: 'Você visita o Mosteiro Branco, no Alto Egito, e se apresenta ao abade Chenute.',
    cultural_context: 'Chenute de Atripe (Ϣⲉⲛⲟⲩⲧⲉ, c. 348-465) foi abade do Mosteiro Branco e o autor saídico nativo mais prolífico de toda a literatura copta — seus sermões e cartas são uma das maiores fontes do copta saídico que sobreviveram.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ⲭⲉⲣⲉ! Ⲡⲁⲣⲁⲛ ⲡⲉ Ϣⲉⲛⲟⲩⲧⲉ.',
        translation: 'Oi! Meu nome é Chenute.',
        emoji: '📿',
        choices: [
          { text: 'Ⲭⲉⲣⲉ! Ⲡⲁⲣⲁⲛ ⲡⲉ Ⲗⲓⲛⲟⲩ.', translation: 'Oi! Meu nome é Linu.', next: 'casa' },
          { text: 'Ϯⲥⲱ ⲙⲙⲟⲟⲩ.', translation: 'Eu bebo água.', wrong: 'Isso não é uma apresentação. Diga seu nome com "Ⲡⲁⲣⲁⲛ ⲡⲉ…".' },
        ],
      },
      casa: {
        text: 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ.',
        translation: 'Minha casa (o mosteiro) é grande.',
        emoji: '⛪',
        choices: [
          { text: 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲕⲟⲩⲓ.', translation: 'Minha casa é pequena.', next: 'final_bom' },
          { text: 'Ⲣⲱⲙⲉ ⲟⲩⲁ.', translation: 'Uma pessoa.', wrong: 'Isso não fala sobre sua casa. Use "Ⲡⲁⲏⲓ ⲡⲉ…" (minha casa é…).' },
        ],
      },
      final_bom: {
        text: 'Ⲟⲩⲙⲉ ⲡⲉ! Ϯⲙⲉ ⲙⲡⲁⲏⲓ.',
        translation: 'É verdade! Eu amo minha casa.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Um novo amigo no Mosteiro Branco!', message: 'Chenute sorri: você fez sua primeira conversa em copta, bem na biblioteca do mosteiro.' },
      },
    },
    glossary: [
      ['ⲡⲁⲣⲁⲛ ⲡⲉ…', 'meu nome é…'],
      ['ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ/ⲟⲩⲕⲟⲩⲓ', 'minha casa é grande/pequena'],
      ['ⲟⲩⲙⲉ ⲡⲉ', 'é verdade (literalmente "é uma coisa-verdadeira")'],
    ],
  },
  {
    id: 'cop-h2',
    level: 'A1.2',
    cefr: 'A1',
    title: 'No refeitório do mosteiro',
    emoji: '🍞',
    summary: 'Você janta com os monges do Mosteiro Branco e conta quantas pessoas estão à mesa.',
    cultural_context: 'Os mosteiros do Alto Egito, como o Mosteiro Branco, seguiam a regra comunitária de Pacômio (c. 292-348), considerado o fundador do monaquismo cenobítico (em comunidade) — bem diferente dos primeiros eremitas, que viviam sozinhos no deserto.',
    start: 'inicio',
    nodes: {
      inicio: {
        text: 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ ⲙⲛ̄ ⲡⲏⲣⲡ.',
        translation: 'Eu como o pão com o vinho.',
        emoji: '🍷',
        choices: [
          { text: 'Ϯⲟⲩⲱⲙ ⲙⲡⲟⲉⲓⲕ.', translation: 'Eu como o pão.', next: 'num' },
          { text: 'Ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲟⲩⲥϩⲓⲙⲉ.', translation: 'Minha mãe é uma mulher.', wrong: 'Isso não fala sobre a comida. Fale sobre o que você come ou bebe, com "Ϯⲟⲩⲱⲙ…" ou "Ϯⲥⲱ…".' },
        ],
      },
      num: {
        text: 'Ⲣⲱⲙⲉ ϣⲟⲙⲛ̄ⲧ.',
        translation: 'Três pessoas.',
        emoji: '🧑‍🤝‍🧑',
        choices: [
          { text: 'Ⲣⲱⲙⲉ ϥⲧⲟⲟⲩ.', translation: 'Quatro pessoas.', next: 'final_bom' },
          { text: 'Ⲡⲁⲏⲓ ⲡⲉ ⲟⲩⲛⲟϭ.', translation: 'Minha casa é grande.', wrong: 'Isso não continua a contagem. Depois de ϣⲟⲙⲛ̄ⲧ (três) vem ϥⲧⲟⲟⲩ (quatro).' },
        ],
      },
      final_bom: {
        text: 'Ⲟⲩⲙⲉ ⲡⲉ! Ϯⲙⲉ ⲙⲡⲁⲥⲟⲛ ⲙⲛ̄ ⲧⲁⲥⲱⲛⲉ.',
        translation: 'É verdade! Eu amo meu irmão e minha irmã.',
        emoji: '🎉',
        ending: { tone: 'bom', title: 'Uma refeição completa!', message: 'Os monges do Mosteiro Branco gostaram da sua companhia — e da sua contagem certa até quatro.' },
      },
    },
    glossary: [
      ['ϯⲟⲩⲱⲙ ⲙ̄…/ϯⲥⲱ ⲙ̄…', 'eu como…/eu bebo… (com a preposição de objeto antes da palavra)'],
      ['ⲣⲱⲙⲉ + numeral', 'tantas pessoas (o numeral vem DEPOIS do substantivo)'],
      ['ⲙⲛ̄', 'e/com'],
    ],
  },
];
