import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do aromeno — por enquanto só A1.1 e A1.2 (pacote incompleto). Conjugações
 * conferidas nas tabelas do Wiktionary (verbetes «hiu/escu», «am» e «mãc»), na grafia de Bitola.
 */
export const GRAMMAR_RUP: GrammarTopic[] = [
  {
    id: 'rup-g1',
    level: 'A1.1',
    title: 'Pronúncia: ã e os dígrafos sh, ts, dz, lj, nj',
    emoji: '🔤',
    summary: 'A grafia de Bitola usa uma só letra especial, o «ã», e vários pares de letras para sons que o português escreve de outro jeito.',
    sections: [
      {
        text: 'Em vez de letras com cedilha ou acento, a grafia padronizada em 1997 usa dígrafos. Assim o aromeno se escreve com qualquer teclado.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['ã', 'vogal central fraca', 'casã (casa), apã (água)'],
            ['sh', '«x» de «xícara»', 'shi (e), shasi (seis)'],
            ['ts', '«ts»', 'tsintsi (cinco)'],
            ['dz', '«dz»', 'dzatsi (dez), adzã (hoje)'],
            ['lj', '«lh»', 'hilji (filha)'],
            ['nj', '«nh»', 'njic (pequeno)'],
          ],
        },
        examples: [
          ['Tsintsi casi.', 'Cinco casas.'],
          ['Am unã hilji.', 'Tenho uma filha.'],
        ],
      },
    ],
    pitfalls: [
      'Ler «sh» como «s» + «h»: é um som só, o nosso «x».',
      'Ler «ã» como o «ã» nasal do português: em aromeno ele não é nasal.',
    ],
    quiz: [
      { question: 'Como soa o «sh» de «shi» (e)?', options: ['Como «x» de «xícara»', 'Como «s» de «sapo»', 'Como «ch» de «chá» em espanhol'], answer: 'Como «x» de «xícara»', explanation: 'Na grafia de Bitola, «sh» representa o som do nosso «x».' },
      { question: 'O que quer dizer «dzatsi»?', options: ['dez', 'dia', 'dois'], answer: 'dez', explanation: 'Do latim «decem»; o c latino virou «ts» e o d virou «dz».' },
    ],
  },
  {
    id: 'rup-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo escu (ser)',
    emoji: '🙋',
    summary: 'Os pronomes pessoais e o presente de «escu» (ou «hiu»), o verbo ser/estar.',
    sections: [
      {
        text: 'O verbo ser tem duas formas para «eu»: «escu» e «hiu», ambas corretas (varia de região para região). Como no português, o pronome pode ser omitido: «escu dit Recife» já quer dizer «(eu) sou de Recife».',
        table: {
          head: ['Pronome', 'Tradução', 'escu / hiu'],
          rows: [
            ['io (mini)', 'eu', 'escu / hiu'],
            ['tini', 'tu, você', 'eshti / hii'],
            ['el / ea', 'ele / ela', 'easti'],
            ['noi', 'nós', 'him'],
            ['voi', 'vocês; o senhor (formal)', 'hits'],
            ['elj / eali', 'eles / elas', 'suntu'],
          ],
        },
        examples: [
          ['Io escu dit São Paulo.', 'Eu sou de São Paulo.'],
          ['Elj suntu frats.', 'Eles são irmãos.'],
        ],
      },
    ],
    pitfalls: ['Achar que «hiu» e «escu» são verbos diferentes: são duas formas do mesmo verbo.', 'Confundir «voi» (vocês) com «io voi» (eu quero).'],
    quiz: [
      { question: 'Complete: «Io ___ dit Curitiba.»', options: ['escu', 'easti', 'suntu'], answer: 'escu', explanation: '«Escu» (ou «hiu») é a forma de «eu».' },
      { question: '«Cum hits?» é uma pergunta…', options: ['a várias pessoas ou formal', 'só a uma criança', 'só a si mesmo'], answer: 'a várias pessoas ou formal', explanation: '«Hits» é a forma de «voi», que serve para o plural e para tratar alguém com respeito.' },
    ],
  },
  {
    id: 'rup-g3',
    level: 'A1.2',
    title: 'O artigo depois do nome',
    emoji: '🔗',
    summary: 'Como no romeno, o artigo definido se gruda no fim da palavra.',
    sections: [
      {
        text: 'Os nomes são masculinos, femininos ou neutros. O indefinido vem antes (un, unã); o definido vem depois, grudado: os femininos em -ã trocam o -ã por -a, e os masculinos e neutros ganham -lu ou -li.',
        table: {
          head: ['Sem artigo', 'Com artigo', 'Tradução'],
          rows: [
            ['casã', 'casa', 'a casa'],
            ['hoarã', 'hoara', 'a aldeia'],
            ['yin', 'yinlu', 'o vinho'],
            ['cãni', 'cãnli', 'o cachorro'],
            ['lapti', 'laptili', 'o leite'],
          ],
        },
        examples: [
          ['Casa easti mari.', 'A casa é grande.'],
          ['Yinlu easti arosh.', 'O vinho é tinto.'],
        ],
      },
    ],
    pitfalls: ['Pôr um artigo antes, como em português: «a casa» é só «casa», com o -a no fim.', 'Confundir «casã» (uma casa, sem artigo) com «casa» (a casa).'],
    quiz: [
      { question: 'Como se diz «o vinho»?', options: ['yinlu', 'lu yin', 'yina'], answer: 'yinlu', explanation: 'O artigo -lu se gruda no fim do nome masculino ou neutro.' },
      { question: '«Hoara» quer dizer…', options: ['a aldeia', 'uma aldeia', 'as aldeias'], answer: 'a aldeia', explanation: '«Hoarã» é «aldeia»; com o artigo grudado, «hoara» é «a aldeia».' },
    ],
  },
  {
    id: 'rup-g4',
    level: 'A1.2',
    title: 'O verbo am (ter) e a negação com nu',
    emoji: '🤲',
    summary: '«Am» é ter; para negar, basta pôr «nu» antes do verbo.',
    sections: [
      {
        text: 'O verbo ter é irregular, mas muito parecido com o romeno. Para negar, «nu» vem antes do verbo, como o nosso «não»: «nu shtiu» (não sei).',
        table: {
          head: ['Pronome', 'am (ter)', 'mãc (comer)'],
          rows: [
            ['io', 'am', 'mãc'],
            ['tini', 'ai', 'mãts'],
            ['el / ea', 'ari', 'mãcã'],
            ['noi', 'avem', 'mãcãm'],
            ['voi', 'avets', 'mãcats'],
            ['elj / eali', 'au', 'mãcã'],
          ],
        },
        examples: [
          ['Am doi frats.', 'Tenho dois irmãos.'],
          ['Nu shtiu.', 'Não sei.'],
        ],
      },
    ],
    pitfalls: ['Esquecer que «ari» (ele tem) termina em -i: «el ari», não «el am».', 'Usar «escu» (ser) para dizer o que se tem: posse é com «am».'],
    quiz: [
      { question: 'Como se diz «eu não sei»?', options: ['Nu shtiu.', 'Shtiu nu.', 'Io shtiu nu.'], answer: 'Nu shtiu.', explanation: '«Nu» vem antes do verbo, como o «não» do português.' },
      { question: '«Tsi mãts?» quer dizer…', options: ['O que você come?', 'O que ele come?', 'Onde você mora?'], answer: 'O que você come?', explanation: '«Mãts» é a forma de «tini» do verbo «mãc» (comer).' },
    ],
  },
];
