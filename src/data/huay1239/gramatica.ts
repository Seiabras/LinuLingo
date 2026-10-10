import type { GrammarTopic } from '../types';

/**
 * Gramática do quéchua de Áncash — por enquanto só A1.1 e A1.2 (curso incompleto). Fontes: [WIKI]
 * Wikipédia em espanhol, «Gramática del quechua ancashino» (pronomes, o “nós” inclusivo e o exclusivo,
 * os enclíticos, a derivação, o infinitivo em -y), «Quechua de Huaylas» (o verbo “ser” implícito, os
 * enclíticos com “yaykurqan”) e «Clasificación del quechua ancashino»; [OMNI] (os números). Todos os
 * exemplos são frases das fontes, com a tradução delas.
 */
export const GRAMMAR_HUAY1239: GrammarTopic[] = [
  {
    id: 'huay1239-g1',
    level: 'A1.1',
    title: 'Os pronomes e os dois “nós”',
    emoji: '🙋',
    summary: 'nuqa, qam, pay; e dois “nós”: nuqantsik (eu e você) e nuqakuna (nós, sem você).',
    sections: [
      {
        text: 'O plural se faz com -kuna: “qam” (você), “qamkuna” (vocês). Mas o “nós” tem duas formas: “nuqantsik”, quando inclui quem escuta (eu e você), e “nuqakuna”, quando o deixa de fora (nós, mas não você).',
        table: {
          head: ['Pessoa', 'Singular', 'Plural'],
          rows: [
            ['1ª', 'nuqa (eu)', 'nuqantsik (eu e você) / nuqakuna (nós, sem você)'],
            ['2ª', 'qam (você)', 'qamkuna (vocês)'],
            ['3ª', 'pay (ele, ela)', 'paykuna (eles, elas)'],
          ],
        },
        examples: [
          ['Pitaq? — Nuqam.', 'Quem é? — Sou eu.'],
          ['Qammi.', 'É você.'],
          ['Paytsuraq?', 'Será ele?'],
        ],
      },
    ],
    pitfalls: ['Usar “nuqantsik” quando quem escuta não está incluído: aí o certo é “nuqakuna”.'],
    quiz: [
      { question: 'Qual “nós” inclui quem escuta?', options: ['nuqantsik', 'nuqakuna', 'paykuna'], answer: 'nuqantsik', explanation: '“Nuqantsik” é “eu e você”.' },
    ],
  },
  {
    id: 'huay1239-g2',
    level: 'A1.1',
    title: 'Como eu sei: -mi, -shi, -chaa, -tsu, -ku',
    emoji: '🔎',
    summary: 'Um final na palavra diz se eu vi, se me contaram, se acho, se é “não” ou se é pergunta.',
    sections: [
      {
        text: 'O quéchua mostra, com um final, como quem fala sabe da coisa. Veja “yaykurqan” (ele, ela entrou) com cada um:',
        table: {
          head: ['Final', 'Sentido', 'Exemplo'],
          rows: [
            ['-mi', 'eu vi, eu sei', 'yaykurqanmi'],
            ['-shi', 'me contaram', 'yaykurqanshi'],
            ['-chaa', 'com certeza deve ter', 'yaykurqanchaa'],
            ['-tsu', 'não', 'yaykurqantsu'],
            ['-ku', 'pergunta', 'yaykurqanku'],
          ],
        },
        examples: [
          ['Allqupaqku? — Allqupaqmi.', 'É para o cachorro? — É para o cachorro, sim.'],
          ['Manam paytatsu.', 'Não é a ele.'],
        ],
      },
    ],
    pitfalls: ['Usar -mi para o que só ouviu falar: aí o certo é -shi.'],
    quiz: [
      { question: 'Qual final quer dizer “me contaram”?', options: ['-shi', '-mi', '-ku'], answer: '-shi', explanation: '“Yaykurqanshi”: dizem que entrou.' },
    ],
  },
  {
    id: 'huay1239-g3',
    level: 'A1.2',
    title: 'Palavras novas com finais: -yuq, -lla, -sapa, -nnaq',
    emoji: '🧩',
    summary: '-yuq (quem tem), -lla (só), -sapa (muito, grande), -nnaq (sem).',
    sections: [
      {
        text: 'Com um final, uma palavra vira outra. “Allqu” (cachorro) vira “allquyuq” (quem tem cachorro) e “allqulla” (só o cachorro); “ñawi” (olho) vira “ñawisapa” (de olhos muito grandes); “wasi” (casa) vira “wasinnaq” (quem não tem casa).',
        table: {
          head: ['Final', 'Sentido', 'Exemplo'],
          rows: [
            ['-yuq', 'quem tem', 'waakayuq (dono de vacas)'],
            ['-lla', 'só', 'allqulla (só o cachorro)'],
            ['-sapa', 'muito, grande', 'ñawisapa (de olhos grandes)'],
            ['-nnaq', 'sem', 'wasinnaq (quem não tem casa)'],
            ['-wan', 'com', 'allqunwan (com o cachorro dele)'],
          ],
        },
        examples: [['Payqa allquyuq.', 'Ele tem cachorro.']],
      },
    ],
    pitfalls: ['Trocar -yuq (com) por -nnaq (sem): “wasinnaq” é quem NÃO tem casa.'],
    quiz: [
      { question: 'O que quer dizer “waakayuq”?', options: ['dono de vacas', 'sem vacas', 'só a vaca'], answer: 'dono de vacas', explanation: '-yuq é “quem tem”.' },
    ],
  },
  {
    id: 'huay1239-g4',
    level: 'A1.2',
    title: 'O verbo no infinitivo e os números',
    emoji: '🔢',
    summary: 'O infinitivo termina em -y (mikuy, comer); os números vão de dez em dez (chunka).',
    sections: [
      {
        text: 'A raiz do verbo sozinha não anda: precisa de um final. O infinitivo termina em -y: “miku-” vira “mikuy” (comer), “wiya-” vira “wiyay” (ouvir). E o mesmo -y transforma palavras em verbos: “llampu” (macio) vira “llampuy” (ficar macio).',
        examples: [
          ['mikuy', 'comer'],
          ['llampuy', 'ser, ficar macio'],
        ],
      },
      {
        text: 'Os números contam em dez: depois de “chunka” (dez), vem “chunka huk” (onze), e 20 é “ishkay chunka”, dois dez.',
        table: {
          head: ['Número', 'Áncash'],
          rows: [
            ['1, 2, 3, 4, 5', 'huk, ishkay, kima, chusku, pitsqa'],
            ['6, 7, 8, 9, 10', 'huqta, qanchis, puwaq, isqun, chunka'],
            ['20', 'ishkay chunka'],
            ['100', 'pachak'],
          ],
        },
      },
    ],
    pitfalls: ['Dizer “kimsa” para três, como no quéchua do sul: em Áncash é “kima”.'],
    quiz: [
      { question: 'Como se diz “três” no quéchua de Áncash?', options: ['kima', 'kimsa', 'ishkay'], answer: 'kima', explanation: '“Kima”; o quéchua do sul diz “kimsa”.' },
    ],
  },
];
