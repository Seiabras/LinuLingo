import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do sami do norte — por enquanto só A1.1 e A1.2 (pacote incompleto).
 *
 * Fontes: Wikipédia em inglês, “Northern Sámi” (alfabeto, padronização de 1979, gradação consonantal,
 * os sete casos) e Wiktionary em inglês, verbete a verbete (declinações de “beana”, “giehta”, “jahki”,
 * “čáhci”; conjugação de “leat”; os pronomes “mun/don/son/moai/doai/soai/mii/dii/sii”) — ver o
 * comentário no topo de vocabulario.ts para a lista completa de páginas consultadas.
 */
export const GRAMMAR_SE: GrammarTopic[] = [
  {
    id: 'se-g1',
    level: 'A1.1',
    title: 'O alfabeto: á, č, đ, ŋ, š, ŧ, ž',
    emoji: '🔤',
    summary: 'O sami do norte usa o alfabeto latino com sete letras extras, padronizadas em 1979.',
    sections: [
      {
        text: 'A grafia atual do sami do norte é comum à Noruega, à Suécia e à Finlândia desde 1979. A maior parte das letras se lê como em português; as sete marcadas com acento ou com um risco embaixo representam sons que o português não distingue na escrita.',
        table: {
          head: ['Letra', 'Som aproximado', 'Exemplo'],
          rows: [
            ['á', 'um “a” mais aberto e longo', 'áhčči (pai)'],
            ['č', '“tch” de “tchau”', 'čalbmi (olho)'],
            ['đ', 'som sonoro, como o “th” de inglês “this”', 'gieđa (“mão”, no acusativo, de giehta)'],
            ['š', 'som de “x”, como em inglês “shed”', 'davvisámegiella (sami do norte)'],
            ['ž', 'som sonoro, como o “j” do francês “jour”', '(raro no vocabulário básico)'],
            ['ŋ', '“ng” nasal do fim de “manga”, sem pronunciar o “g”', '(raro no vocabulário básico)'],
            ['ŧ', 'som surdo, como o “th” de inglês “thick”', '(raro no vocabulário básico)'],
          ],
        },
        examples: [
          ['Bures! Mun lean Elle.', 'Oi! Eu sou a Elle.'],
          ['Dát lea mu čalbmi.', 'Este é o meu olho.'],
        ],
      },
    ],
    pitfalls: ['Ler “č”, “š” e “ž” como “c”, “s” e “z” comuns: eles marcam sons bem diferentes (“tch”, “x” e o “j” francês).', 'Esquecer o acento do “á”: ele muda o som da vogal, não é só decoração.'],
    quiz: [
      { question: 'Como soa a letra “č”?', options: ['Como o “tch” de “tchau”', 'Como “k”', 'Como “s”'], answer: 'Como o “tch” de “tchau”', explanation: '“č” representa o som /tʃ/, igual ao “tch” do português.' },
      { question: 'Em que ano a ortografia atual do sami do norte foi padronizada entre os três países?', options: ['1979', '1945', '2001'], answer: '1979', explanation: 'A norma comum entre Noruega, Suécia e Finlândia foi fixada em 1979.' },
    ],
  },
  {
    id: 'se-g2',
    level: 'A1.1',
    title: 'A gradação consonantal',
    emoji: '🔁',
    summary: 'Muitas palavras mudam o som da própria raiz conforme o caso gramatical ou a posição na frase.',
    sections: [
      {
        text: 'A gradação consonantal é uma troca regular entre uma forma “forte” e uma forma “fraca” de certas consoantes no meio da palavra. Ela não é um erro nem uma exceção: é parte normal da flexão de muitos substantivos e verbos do sami do norte. Um exemplo comum aparece depois de números: “jahki” (ano, forma forte, usada sozinha) vira “jagi” (forma fraca) quando vem depois de uma quantidade, como em “vihtta jagi” (cinco anos).',
        table: {
          head: ['Palavra (forte)', 'Forma fraca', 'Tradução'],
          rows: [
            ['jahki', 'jagi', 'ano (jagi depois de número: “vihtta jagi” = cinco anos)'],
            ['čáhci', 'čázi', 'água (čázi no caso acusativo)'],
          ],
        },
        examples: [
          ['Mun lean vihtta jagi boaris.', 'Eu tenho cinco anos. (lit. “eu sou cinco anos velho”)'],
          ['Jugan čázi.', 'Eu bebo água. (čázi = forma fraca/acusativo de čáhci)'],
        ],
      },
    ],
    pitfalls: ['Usar sempre a forma do dicionário (a forma forte, geralmente a do nominativo): depois de certos casos e de números, a palavra muda de som.', 'Achar que é uma mudança aleatória: ela segue padrões fixos (hk → g, hc → z, e outros pares parecidos).'],
    quiz: [
      { question: 'O que acontece com “jahki” (ano) depois de um número, como em “cinco anos”?', options: ['Vira “jagi”', 'Fica igual', 'Vira “jahkki”'], answer: 'Vira “jagi”', explanation: 'A gradação consonantal troca “hk” por “g” na forma fraca: “vihtta jagi” (cinco anos).' },
      { question: 'Qual é a forma fraca de “čáhci” (água)?', options: ['čázi', 'čáhcci', 'čáhccit'], answer: 'čázi', explanation: '“hc” vira “z” na gradação fraca: čáhci → čázi.' },
    ],
  },
  {
    id: 'se-g3',
    level: 'A1.2',
    title: 'Os sete casos (com “beana”, cachorro)',
    emoji: '📐',
    summary: 'O sami do norte marca a função da palavra na frase com sete casos gramaticais — mais do que o finlandês ou o húngaro já vistos aqui.',
    sections: [
      {
        text: 'Em vez de preposições, o sami do norte muda a terminação da palavra. O substantivo “beana” (cachorro) mostra bem os sete casos do singular (repare que o “a” de “beana” também muda para “beatnag-” nos casos que não são o nominativo — é outra gradação, igual à da lição anterior).',
        table: {
          head: ['Caso', 'Forma de “beana”', 'Função'],
          rows: [
            ['Nominativo', 'beana', 'sujeito: “o cachorro”'],
            ['Acusativo/genitivo', 'beatnaga', 'objeto ou posse: “do/o cachorro”'],
            ['Ilativo', 'beatnagii', 'movimento para dentro/para: “para o cachorro”'],
            ['Locativo', 'beatnagis', 'lugar ou posse com “leat”: “no/do cachorro”, “em-cachorro”'],
            ['Comitativo', 'beatnagiin', 'companhia: “com o cachorro”'],
            ['Essivo', 'beanan', 'condição temporária: “como cachorro”'],
          ],
        },
        examples: [
          ['Mus lea beana.', 'Eu tenho um cachorro. (lit. “em-mim é cachorro”, beana no nominativo)'],
          ['Beatnagat ruhttet.', 'Os cachorros pulam. (plural de beana; exemplo do Wiktionary)'],
        ],
      },
    ],
    pitfalls: ['Procurar uma preposição separada para “com”, “para” ou “em”: o sami do norte costuma embutir isso na terminação da palavra.', 'Esquecer que o caso locativo também serve pra dizer o que alguém possui, com o verbo “leat” (ver o próximo tópico).'],
    quiz: [
      { question: 'Qual caso se usa pra dizer “com o cachorro”?', options: ['Comitativo (beatnagiin)', 'Locativo (beatnagis)', 'Essivo (beanan)'], answer: 'Comitativo (beatnagiin)', explanation: 'O comitativo, com a terminação “-iin”, corresponde ao nosso “com”.' },
      { question: 'Pra que serve o caso ilativo, como em “beatnagii”?', options: ['Indicar movimento para dentro de/para algo', 'Indicar posse', 'Indicar o sujeito'], answer: 'Indicar movimento para dentro de/para algo', explanation: 'O ilativo marca destino ou movimento: “beatnagii” é “para o cachorro”.' },
    ],
  },
  {
    id: 'se-g4',
    level: 'A1.2',
    title: 'Pronomes, o número dual e “mus lea” (eu tenho)',
    emoji: '👫',
    summary: 'Além de singular e plural, o sami do norte tem um número dual só para duas pessoas ou coisas — e usa “leat” também pra dizer o que alguém tem.',
    sections: [
      {
        text: 'O sami do norte distingue três números nos pronomes e nos verbos: singular (uma pessoa), dual (exatamente duas) e plural (mais de duas). “Moai” é “nós dois”; “mii” só vale pra três ou mais.',
        table: {
          head: ['Pronome', 'Tradução', 'leat (presente)'],
          rows: [
            ['mun', 'eu', 'lean'],
            ['don', 'tu, você', 'leat'],
            ['son', 'ele, ela', 'lea'],
            ['moai', 'nós dois', 'letne'],
            ['doai', 'vocês dois', 'leahppi'],
            ['soai', 'eles dois', 'leaba'],
            ['mii', 'nós (3+)', 'leat'],
            ['dii', 'vocês (3+)', 'lehpet'],
            ['sii', 'eles, elas (3+)', 'leat'],
          ],
        },
        examples: [
          ['Mun lean Elle. Don leat ustit.', 'Eu sou a Elle. Você é um amigo.'],
          ['Mus lea beana.', 'Eu tenho um cachorro. (lit. “em-mim é cachorro”)'],
          ['Dus lea mánná.', 'Você tem um filho/uma filha. (dus = “em-você”, locativo de “don”)'],
        ],
      },
    ],
    pitfalls: ['Usar “mii” para falar de duas pessoas só: aí o certo é “moai” (nós dois).', 'Procurar um verbo “ter” separado: o sami do norte usa “leat” (ser/estar) com o possuidor no caso locativo (mus, dus, sus…).'],
    quiz: [
      { question: 'Como se diz “eu tenho um cachorro” em sami do norte?', options: ['Mus lea beana.', 'Mun lean beana.', 'Beana lea mus.'], answer: 'Mus lea beana.', explanation: 'O sami do norte não tem um verbo “ter”: usa “leat” (ser/estar) com o possuidor no caso locativo — “mus” (em mim) + “lea” (é) = “eu tenho”. “Mun lean beana” existe, mas quer dizer “eu sou um cachorro”!' },
      { question: 'O que diferencia “moai” de “mii”?', options: ['“Moai” é “nós dois” (dual); “mii” é “nós” (três ou mais)', 'São sinônimos', '“Moai” é formal e “mii” é informal'], answer: '“Moai” é “nós dois” (dual); “mii” é “nós” (três ou mais)', explanation: 'O sami do norte tem número dual, só para exatamente duas pessoas ou coisas, além do singular e do plural.' },
    ],
  },
];
