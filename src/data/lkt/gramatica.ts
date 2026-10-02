import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do lakota — por enquanto só A1.1 e A1.2 (pacote incompleto, ver index.ts).
 *
 * FONTES:
 * - en.wikipedia.org/wiki/Lakota_language — ordem SOV, posposições, prefixos de pessoa (wa-/ya-),
 *   sufixo de plural -pi, animacidade (-wičha-), ortografia (Standard Lakota Orthography), fala de
 *   homem × fala de mulher (yeló/yetȟó/hųwó × ye/nitȟó).
 * - en.wiktionary.org — verbetes individuais: miyé, niyé, iyé, uŋkíyepi ("pronomes independentes só
 *   para ênfase, no lugar do que normalmente vem marcado por prefixos presos ao verbo"), yaŋká (com
 *   as formas conjugadas maŋké/naŋké/uŋyáŋkapi), kiŋ (artigo definido pospositivo, com o exemplo
 *   "Šúŋka kiŋ sápa/sápe" = "o cachorro é preto"), šni (partícula de negação).
 * - omniglot.com/language/phrases/lakota.php — "Ómakiya yo/ye/po/pe" (Socorro!) e "Wíyuškiŋyaŋ
 *   waŋčhíŋyaŋke ló" (marcada no próprio site como fala de homem), usadas aqui como exemplo das
 *   partículas finais de homem e mulher.
 */
export const GRAMMAR_LKT: GrammarTopic[] = [
  {
    id: 'lkt-g1',
    level: 'A1.1',
    title: 'A escrita: č, š, ž, ȟ, ǧ e o apóstrofo',
    emoji: '🔤',
    summary: 'O lakota usa o alfabeto latino, mas com letras e sinais próprios para sons que o português não tem.',
    sections: [
      {
        text: 'A grafia usada aqui é a Ortografia Lakota Padrão, criada para o New Lakota Dictionary (2008) e hoje a mais usada no ensino. Vogais com acento agudo (á, é, í, ó, ú) marcam a sílaba tônica. Vários sons se escrevem com uma letra de base e um sinal embaixo ou em cima dela.',
        table: {
          head: ['Escrita', 'Som aproximado', 'Exemplo'],
          rows: [
            ['š', '“x” de “xícara”', 'šúŋka (cachorro)'],
            ['ž', '“j” de “já”', 'wakȟáŋyeža (criança)'],
            ['č', '“tch” de “tchau”', 'wičháša (homem)'],
            ['ȟ', 'uma fricativa mais atrás na garganta que o nosso “r”', 'tȟaló (carne), wičháȟpi (estrela)'],
            ['ǧ', 'parecida com a anterior, mas sonora (quase um “r” francês)', 'aǧúyapi (pão)'],
            ['ŋ', 'nasaliza a vogal antes dela, como o til do português', 'haŋwí (lua), wíŋyaŋ (mulher)'],
            ['apóstrofo (’)', 'uma pequena parada na garganta (som ejetivo)', 'číkʼala (pequeno)'],
          ],
        },
        examples: [
          ['Šúŋka kiŋ sápa.', 'O cachorro é preto.'],
          ['Wíŋyaŋ kiŋ wašté.', 'A mulher é boa.'],
        ],
      },
    ],
    pitfalls: ['Ler “š” como “s”: em lakota ele soa como o “x” do português.', 'Ignorar o til do “ŋ”: “haŋwí” sem nasalizar vira outra palavra para o ouvido de um falante nativo.'],
    quiz: [
      { question: 'Como soa o “š” de “šúŋka”?', options: ['Como o “x” de “xícara”', 'Como o “s” de “sapo”', 'Como o “ch” do espanhol'], answer: 'Como o “x” de “xícara”', explanation: 'O š da Ortografia Lakota Padrão corresponde ao som do nosso “x”.' },
      { question: 'O que o “ŋ” faz com a vogal antes dele?', options: ['Nasaliza, como o til', 'Alonga a vogal', 'Não muda nada'], answer: 'Nasaliza, como o til', explanation: 'Em “wíŋyaŋ” (mulher) e “haŋwí” (lua), o ŋ nasaliza a vogal anterior.' },
    ],
  },
  {
    id: 'lkt-g2',
    level: 'A1.1',
    title: 'O verbo no fim: ordem SOV e o artigo kiŋ',
    emoji: '🔚',
    summary: 'O lakota põe o verbo por último (sujeito-objeto-verbo) e usa posposições, não preposições.',
    sections: [
      {
        text: 'Em vez de Sujeito-Verbo-Objeto como o português, o lakota normalmente organiza a frase como Sujeito-Objeto-Verbo. Em vez de preposições antes do nome, usa posposições depois dele (“na loja” vira, literalmente, “loja em”). O artigo definido “kiŋ” também vem depois do substantivo, não antes.',
        table: {
          head: ['Lakota', 'Palavra por palavra', 'Português'],
          rows: [
            ['Šúŋka kiŋ sápa.', 'cachorro + o + preto', 'O cachorro é preto.'],
            ['mas’óphiye él', 'loja + em', 'na loja'],
          ],
        },
        examples: [
          ['Mní kiŋ wašté.', 'A água é boa.'],
          ['Wičháȟpi kiŋ ská.', 'A estrela é branca.'],
        ],
      },
    ],
    pitfalls: ['Procurar o verbo no meio da frase, como em português: no lakota ele costuma vir por último.', 'Pôr “kiŋ” antes do substantivo: em lakota ele vem sempre depois.'],
    quiz: [
      { question: 'Em “Šúŋka kiŋ sápa”, qual é a ordem das partes?', options: ['substantivo + artigo + adjetivo', 'artigo + substantivo + adjetivo', 'adjetivo + substantivo + artigo'], answer: 'substantivo + artigo + adjetivo', explanation: '“Šúŋka” (cachorro) vem primeiro, depois o artigo “kiŋ” e por último “sápa” (preto).' },
      { question: 'Como o lakota diz “na loja”?', options: ['Literalmente “loja em”, com a posposição depois', 'Literalmente “em loja”, como em português', 'Não existe equivalente'], answer: 'Literalmente “loja em”, com a posposição depois', explanation: 'O lakota usa posposições: a palavra de lugar vem antes, a “preposição” depois.' },
    ],
  },
  {
    id: 'lkt-g3',
    level: 'A1.2',
    title: 'A pessoa mora no verbo, não num pronome separado',
    emoji: '🧩',
    summary: 'O lakota normalmente não precisa de um pronome como “eu” ou “tu”: a pessoa já vem marcada dentro do verbo.',
    sections: [
      {
        text: 'Pronomes como “miyé” (eu), “niyé” (tu/você) e “iyé” (ele/ela) só aparecem para dar ênfase — no dia a dia, a pessoa que fala, ouve ou é falada já está marcada dentro do próprio verbo, com prefixos (como wa- para “eu” e ya- para “tu”, em verbos ativos) e o sufixo “-pi” para o plural. Outro grupo de verbos (os “de posição”, como “yaŋká”, estar/ficar sentado) muda de um jeito diferente: “yaŋká” vira “maŋké” (eu estou) e “naŋké” (tu estás), com a marca de pessoa dentro da própria palavra, não colada na frente.',
        table: {
          head: ['Pessoa', 'Pronome de ênfase', 'yaŋká (estar/ficar)'],
          rows: [
            ['eu', 'miyé', 'maŋké'],
            ['tu/você', 'niyé', 'naŋké'],
            ['nós', 'uŋkíyepi', 'uŋyáŋkapi'],
          ],
        },
        examples: [
          ['Hé miyé.', 'Sou eu. (lit. “aquilo eu”)'],
          ['Máni. Mánipi.', 'Ele/ela caminha. Eles/elas caminham.'],
        ],
      },
    ],
    pitfalls: ['Botar “miyé”, “niyé” ou “iyé” em toda frase, como fazemos com “eu”/“tu” em português: no lakota isso soa como uma ênfase forte (“EU, e não outra pessoa”), não como o jeito neutro de falar.', 'Esquecer o “-pi” do plural: é ele, e não um pronome separado, que marca “eles/elas” no verbo.'],
    quiz: [
      { question: 'Quando um falante de lakota costuma usar “miyé” (eu)?', options: ['Só para dar ênfase: a pessoa já está marcada no verbo', 'Em toda frase, como em português', 'Nunca: a palavra não existe'], answer: 'Só para dar ênfase: a pessoa já está marcada no verbo', explanation: 'Pronomes independentes como miyé são usados só quando se quer destacar quem faz a ação.' },
      { question: 'O que o sufixo “-pi” marca no verbo?', options: ['O plural (eles/elas, nós)', 'O passado', 'A negação'], answer: 'O plural (eles/elas, nós)', explanation: '“Máni” (ele/ela caminha) vira “mánipi” (eles/elas caminham) com o sufixo -pi.' },
    ],
  },
  {
    id: 'lkt-g4',
    level: 'A1.2',
    title: 'Fala de homem e fala de mulher',
    emoji: '🗣️',
    summary: 'Algumas partículas do fim da frase mudam conforme quem fala é homem ou mulher.',
    sections: [
      {
        text: 'Em lakota, um pequeno grupo de partículas que fecham a frase — usadas para afirmar algo com força, dar uma ordem informal ou fazer uma pergunta formal — tem uma forma usada por homens e outra usada por mulheres. Homens terminam uma afirmação forte com “yeló” (ou um comando informal com “yetȟó”) e uma pergunta formal com “hųwó”; mulheres usam “ye” e “nitȟó” nesses mesmos lugares. Um exemplo documentado: “Wíyuškiŋyaŋ waŋčhíŋyaŋke ló” (“prazer em te conhecer”) é a forma como um homem fecha a frase, com o “ló” no final.',
        table: {
          head: ['Função', 'Fala de homem', 'Fala de mulher'],
          rows: [
            ['afirmação forte', 'yeló', 'ye'],
            ['comando informal', 'yetȟó', 'nitȟó'],
            ['pergunta formal', 'hųwó', '—'],
          ],
        },
        examples: [
          ['Wíyuškiŋyaŋ waŋčhíŋyaŋke ló.', 'Prazer em te conhecer. (dito por um homem)'],
          ['Ómakiya yo/ye/po/pe!', 'Socorro! (yo/po de homem, ye/pe de mulher; yo/ye no singular, po/pe no plural)'],
        ],
      },
    ],
    pitfalls: ['Achar que são “dois dialetos”: é a mesma língua, só que certas partículas finais da frase trocam de forma conforme o gênero de quem fala, não de quem ouve.', 'Usar “ló” achando que é neutro: quem aprende como mulher deve preferir “ye” nesses finais de frase.'],
    quiz: [
      { question: 'O que muda entre a fala de homem e a de mulher em lakota?', options: ['Algumas partículas no final da frase', 'O vocabulário inteiro', 'A ordem das palavras'], answer: 'Algumas partículas no final da frase', explanation: 'É um grupo pequeno de partículas finais (afirmação, comando, pergunta formal) que muda conforme o gênero de quem fala.' },
      { question: 'Em “Ómakiya yo!”, o que o “yo” indica?', options: ['Um pedido/comando informal dito por um homem', 'O tempo passado', 'O plural'], answer: 'Um pedido/comando informal dito por um homem', explanation: 'No singular, “yo” é a forma masculina do pedido informal; a forma feminina equivalente é “ye”.' },
    ],
  },
];
