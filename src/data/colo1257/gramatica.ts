import type { GrammarTopic } from '../types';

/**
 * Gramática do kichwa — por enquanto só A1.1 e A1.2 (curso incompleto). Fontes: [KN] Kichwa.net (as
 * aulas “Shutipak rantikuna” — pronomes —, “Imachikkunapa rimachikkuna” — a conjugação de “mikuna”,
 * comer —, “Uso de los sufijos -KA, -TA y -WAN” e as listas de frases); [WIKI] Wikipédia em espanhol,
 * «Kichwa» (o infinitivo em -na, o “kikin” de respeito, o -pak da posse, o progressivo em -ku-). Todos
 * os exemplos são frases das fontes, com a tradução delas.
 */
export const GRAMMAR_COLO1257: GrammarTopic[] = [
  {
    id: 'colo1257-g1',
    level: 'A1.1',
    title: 'Os pronomes e o “kikin” de respeito',
    emoji: '🙋',
    summary: 'ñuka, kan, kikin, pay, ñukanchik, kankuna, kikinkuna, paykuna.',
    sections: [
      {
        text: 'O kichwa tem um pronome para cada pessoa, e um a mais para o respeito: “kikin” (o senhor, a senhora), com o plural “kikinkuna”. O plural se faz com -kuna: “kan” (você), “kankuna” (vocês). E “ñukanchik” serve para qualquer “nós”.',
        table: {
          head: ['Kichwa', 'Português'],
          rows: [
            ['ñuka', 'eu'],
            ['kan', 'você'],
            ['kikin', 'o senhor, a senhora'],
            ['pay', 'ele, ela'],
            ['ñukanchik', 'nós'],
            ['kankuna / kikinkuna', 'vocês / os senhores'],
            ['paykuna', 'eles, elas'],
          ],
        },
        examples: [
          ['Kikinka imanallatak kanki?', 'Como o senhor está?'],
          ['Kanka ñuka mashimi kanki.', 'Você é meu amigo.'],
        ],
      },
    ],
    pitfalls: ['Usar “kan” com uma pessoa mais velha ou desconhecida: o respeitoso é “kikin”.'],
    quiz: [
      { question: 'Qual pronome se usa com respeito?', options: ['kikin', 'kan', 'pay'], answer: 'kikin', explanation: '“Kikin” é o senhor, a senhora.' },
    ],
  },
  {
    id: 'colo1257-g2',
    level: 'A1.1',
    title: 'O verbo no presente: mikuni, mikunki, mikun',
    emoji: '🍽️',
    summary: 'O infinitivo termina em -na; tirando o -na, sobra a raiz, que recebe o fim de cada pessoa.',
    sections: [
      {
        text: 'No dicionário, todo verbo termina em -na: “mikuna” (comer), “puñuna” (dormir). Tirando o -na, sobra a raiz, “miku-”, que recebe o fim de cada pessoa.',
        table: {
          head: ['Pessoa', 'Fim', 'Comer'],
          rows: [
            ['ñuka (eu)', '-ni', 'mikuni'],
            ['kan, kikin (você)', '-nki', 'mikunki'],
            ['pay (ele, ela)', '-n', 'mikun'],
            ['ñukanchik (nós)', '-nchik', 'mikunchik'],
            ['kankuna (vocês)', '-nkichik', 'mikunkichik'],
            ['paykuna (eles)', '-nkuna', 'mikunkuna'],
          ],
        },
        examples: [
          ['Ñuka mikuni.', 'Eu como.'],
          ['Pay mikun.', 'Ele, ela come.'],
          ['Mikunata munani.', 'Quero comer.'],
        ],
      },
    ],
    pitfalls: ['Esquecer de tirar o -na: “eu como” é “mikuni”, e não “mikunani”.'],
    quiz: [
      { question: 'Como se diz “eu como”?', options: ['mikuni', 'mikun', 'mikunki'], answer: 'mikuni', explanation: '-ni é o fim de “eu”.' },
      { question: 'O que quer dizer “mikunchik”?', options: ['nós comemos', 'eles comem', 'você come'], answer: 'nós comemos', explanation: '-nchik é o fim de “nós”.' },
    ],
  },
  {
    id: 'colo1257-g3',
    level: 'A1.2',
    title: 'Quem, o quê, com quem: -ka, -ta, -wan',
    emoji: '🧩',
    summary: '-ka marca o sujeito, -ta o objeto e -wan quer dizer “com”.',
    sections: [
      {
        text: 'O kichwa marca a função de cada palavra com um final: -ka para quem faz a ação ou de quem se fala, -ta para o que recebe a ação e -wan para “com”. Por isso a ordem das palavras pode mudar sem confundir.',
        table: {
          head: ['Final', 'Função', 'Exemplo'],
          rows: [
            ['-ka', 'sujeito', 'Patriciaka sumakta tushun. (A Patricia dança bonito.)'],
            ['-ta', 'objeto', 'Ñukanchika Patriciata kuyanchik. (Nós gostamos da Patricia.)'],
            ['-wan', 'com', 'Paykunaka Patriciawan mikun. (Eles comem com a Patricia.)'],
          ],
        },
        examples: [
          ['Diegoka kamuta randin.', 'O Diego compra o livro.'],
          ['Kunuk yakuta munani.', 'Quero água quente.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o -ta no objeto: “quero pão” é “tantata munani”.'],
    quiz: [
      { question: 'Qual final quer dizer “com”?', options: ['-wan', '-ta', '-ka'], answer: '-wan', explanation: '“Patriciawan” é “com a Patricia”.' },
    ],
  },
  {
    id: 'colo1257-g4',
    level: 'A1.2',
    title: 'Perguntas e “não”: -chu',
    emoji: '❓',
    summary: '-chu faz a pergunta de sim ou não e, com “mana”, a negação.',
    sections: [
      {
        text: 'Para perguntar se sim ou não, cola-se -chu à palavra perguntada: “Alichu kanki?”, você está bem? E para negar, usa-se “mana” e o mesmo -chu: “Mana tiyanchu”, não tem. Nas respostas afirmativas, aparece muitas vezes o -mi: “Allimi kani”, “Tiyanmi”.',
        examples: [
          ['Alichu kanki?', 'Você está bem?'],
          ['Tiyanmi.', 'Tem, sim.'],
          ['Mana tiyanchu.', 'Não tem.'],
          ['Kay mikunaka mana alichu.', 'Esta comida é ruim.'],
        ],
      },
    ],
    pitfalls: ['Negar só com “mana”: o kichwa diz “mana … -chu”, como em “Mana tiyanchu”.'],
    quiz: [
      { question: 'Como se diz “não tem”?', options: ['Mana tiyanchu.', 'Tiyanmi.', 'Alichu kanki?'], answer: 'Mana tiyanchu.', explanation: '“Mana” e -chu fazem a negação.' },
    ],
  },
];
