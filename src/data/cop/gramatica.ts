import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do copta — por enquanto só A1.1 e A1.2 (pacote incompleto). Dialeto saídico
 * (ver nota no topo de `vocabulario.ts`). Fontes: Wiktionary (en.wiktionary.org, verbetes
 * individuais, seção "Coptic" dedicada, com tabela de conjugação completa pro verbo ⲙⲉ "amar",
 * conferida linha a linha via WebFetch); Wikipedia (inglês) "Coptic language" e "Coptic alphabet"
 * pro contexto histórico, pronomes e artigos; um estudo da Universidade de Leiden sobre sentenças
 * nominais coptas (scholarlypublications.universiteitleiden.nl/access/item%3A3247493/view), que cita
 * o exemplo acadêmico "ⲁⲛⲟⲕ ⲡⲉ ⲡϣⲏⲣⲉ ⲙ̄ⲡⲛⲟⲩⲧⲉ" ("eu sou o filho de Deus") de Boud'hors e
 * Shisha-Halevy pro padrão sujeito–ⲡⲉ–predicado; e a pesquisa sobre marcação de objeto no saídico
 * (Sahidic differential object marking, citada em estudos sobre a sintaxe copta), pra preposição
 * ⲛ̄-/ⲙ̄- antes do objeto direto.
 */
export const GRAMMAR_COP: GrammarTopic[] = [
  {
    id: 'cop-g1',
    level: 'A1.1',
    title: 'Sem o verbo "ser": o pronome ⲡⲉ no meio da frase',
    emoji: '🔤',
    summary: 'O copta não tem um verbo "ser/estar". Pra dizer "X é Y", usa-se um pronome — ⲡⲉ (masc.), ⲧⲉ (fem.) ou ⲛⲉ (plural) — encaixado ENTRE o sujeito e o predicado.',
    sections: [
      {
        text: 'A frase mais simples do copta tem três partes, nesta ordem: sujeito – ⲡⲉ/ⲧⲉ/ⲛⲉ – predicado. O ⲡⲉ/ⲧⲉ/ⲛⲉ concorda em gênero e número com o PREDICADO (o que vem depois dele), não com o sujeito. Um exemplo acadêmico citado por Boud\'hors e Shisha-Halevy, num estudo da Universidade de Leiden sobre sentenças nominais coptas: "ⲁⲛⲟⲕ ⲡⲉ ⲡϣⲏⲣⲉ ⲙ̄ⲡⲛⲟⲩⲧⲉ" — literalmente "eu ⲡⲉ o-filho de-Deus", ou seja, "eu sou o filho de Deus".',
        table: {
          head: ['Gênero do predicado', 'Pronome', 'Exemplo'],
          rows: [
            ['masculino', 'ⲡⲉ', 'Ⲁⲛⲟⲕ ⲡⲉ ⲟⲩⲣⲱⲙⲉ. (Eu sou uma pessoa.)'],
            ['feminino', 'ⲧⲉ', 'Ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲟⲩⲥϩⲓⲙⲉ. (Minha mãe é uma mulher.)'],
          ],
        },
        examples: [
          ['Ⲁⲛⲟⲕ ⲡⲉ Ⲗⲓⲛⲟⲩ.', 'Eu sou Linu.'],
          ['Ⲡⲁⲉⲓⲱⲧ ⲡⲉ ⲟⲩⲛⲟϭ.', 'Meu pai é grande.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma palavra separada pra "é"/"sou": ela não existe — é o pronome ⲡⲉ/ⲧⲉ encaixado no meio da frase que faz esse trabalho.', 'Fazer o ⲡⲉ/ⲧⲉ concordar com o SUJEITO: ele concorda com o predicado (o que vem depois dele).'],
    quiz: [
      {
        question: 'Como o copta diz "X é Y", já que não tem verbo "ser"?',
        options: ['Com um pronome (ⲡⲉ/ⲧⲉ/ⲛⲉ) encaixado entre o sujeito e o predicado', 'Só juntando as duas palavras, sem nada no meio', 'Com o verbo ⲟⲩⲱⲙ'],
        answer: 'Com um pronome (ⲡⲉ/ⲧⲉ/ⲛⲉ) encaixado entre o sujeito e o predicado',
        explanation: 'O copta usa ⲡⲉ (masc.), ⲧⲉ (fem.) ou ⲛⲉ (plural) nessa posição, concordando com o predicado — nunca um verbo "ser".',
      },
    ],
  },
  {
    id: 'cop-g2',
    level: 'A1.1',
    title: 'Ⲡⲁ-/ⲧⲁ-: o possessivo que se cola na palavra',
    emoji: '👪',
    summary: 'Em vez de uma palavra separada pra "meu/minha/seu/sua", o copta usa um PREFIXO que já concorda em gênero com a palavra que vem depois: ⲡⲁ- (meu, com palavra masculina), ⲧⲁ- (minha, com palavra feminina), ⲡⲉⲕ-/ⲧⲉⲕ- (teu/tua).',
    sections: [
      {
        text: 'O artigo definido também é um prefixo: ⲡ- (masculino), ⲧ- (feminino) e ⲛ- (plural) — "ⲡⲣⲱⲙⲉ" é "a pessoa", "ⲧⲥϩⲓⲙⲉ" seria "a mulher". O possessivo troca esse artigo por um prefixo que já diz de quem é a coisa.',
        table: {
          head: ['Pessoa', 'Com palavra masculina', 'Com palavra feminina', 'Com palavra no plural'],
          rows: [
            ['meu/minha (1ª sg.)', 'ⲡⲁ-', 'ⲧⲁ-', 'ⲛⲁ-'],
            ['teu/tua (2ª sg. masc.)', 'ⲡⲉⲕ-', 'ⲧⲉⲕ-', 'ⲛⲉⲕ-'],
          ],
        },
        examples: [
          ['ⲡⲁⲥⲟⲛ', 'meu irmão'],
          ['ⲧⲁⲥⲱⲛⲉ', 'minha irmã'],
          ['ⲡⲉⲕⲣⲁⲛ', 'teu nome'],
        ],
      },
      {
        heading: 'O indefinido também é um prefixo',
        text: 'Do mesmo jeito, "um/uma" é o prefixo ⲟⲩ- (singular): "ⲟⲩⲣⲱⲙⲉ" é "uma pessoa", "ⲟⲩⲕⲟⲩⲓ" é "um(a) pequeno(a)".',
      },
    ],
    pitfalls: ['Esquecer que o possessivo muda de forma pelo gênero da palavra seguinte, não pelo gênero de quem fala: "meu" é ⲡⲁ- com "irmão" (ⲡⲁⲥⲟⲛ) e ⲧⲁ- com "irmã" (ⲧⲁⲥⲱⲛⲉ), mesmo que quem fala seja uma mulher.'],
    quiz: [
      {
        question: 'Como se diz "minha mãe" em copta?',
        options: ['Ⲧⲁⲙⲁⲁⲩ', 'Ⲡⲁⲙⲁⲁⲩ', 'Ⲙⲁⲁⲩ ⲧⲁ'],
        answer: 'Ⲧⲁⲙⲁⲁⲩ',
        explanation: '"Ⲙⲁⲁⲩ" (mãe) é feminino, então o possessivo "minha" é o prefixo ⲧⲁ-, não ⲡⲁ-.',
      },
    ],
  },
  {
    id: 'cop-g3',
    level: 'A1.2',
    title: 'O alfabeto: 24 letras gregas + 7 egípcias',
    emoji: 'Ⲁ',
    summary: 'O alfabeto copta tem as 24 letras gregas, de alfa a ômega, NA MESMA ORDEM — mais sete letras extras, herdadas da escrita demótica egípcia, pros sons que o grego não tinha.',
    sections: [
      {
        text: 'Depois da conquista de Alexandre, o grego se tornou a língua de prestígio no Egito, e os primeiros cristãos egípcios adaptaram o alfabeto grego pra escrever a própria língua — mas o grego não tinha letras pra sete sons egípcios, então eles pegaram essas sete letras emprestadas da escrita demótica (a escrita egípcia que veio antes do copta).',
        table: {
          head: ['Letra', 'Som aproximado', 'Origem'],
          rows: [
            ['Ϣ ϣ', '"ch" de "chá"', 'demótico'],
            ['Ϩ ϩ', '"h" bem aspirado', 'demótico'],
            ['Ϯ ϯ', '"ti"', 'demótico'],
          ],
        },
        examples: [
          ['ϣⲏⲣⲉ', 'filho (começa com a letra Ϣ, só do copta)'],
        ],
      },
      {
        heading: 'As 24 letras gregas, com a MESMA ordem',
        text: 'Α (alfa), Β (vida), Γ (gama)... até Ω (ômega) — a ordem alfabética copta segue a grega à risca, só acrescentando as sete letras egípcias no final, depois do Ω.',
      },
    ],
    pitfalls: ['Achar que o copta é só "grego com sotaque egípcio": as sete letras extras (Ϣ, Ϥ, Ϧ, Ϩ, Ϫ, Ϭ, Ϯ) marcam sons que o grego nunca teve, e denunciam que, por baixo do alfabeto, a língua é egípcia, não grega.'],
    quiz: [
      {
        question: 'De onde vêm as sete letras extras do alfabeto copta (Ϣ, Ϥ, Ϧ, Ϩ, Ϫ, Ϭ, Ϯ)?',
        options: ['Da escrita demótica egípcia', 'Do alfabeto grego', 'Do alfabeto árabe'],
        answer: 'Da escrita demótica egípcia',
        explanation: 'As outras 24 letras do copta vêm do grego — só essas sete foram emprestadas da escrita demótica, pros sons que o grego não tinha.',
      },
    ],
  },
  {
    id: 'cop-g4',
    level: 'A1.2',
    title: 'O prefixo do presente e o objeto marcado',
    emoji: '📘',
    summary: 'O verbo no presente leva um PREFIXO que já diz quem é o sujeito — como a terminação verbal do português faz, só que no começo da palavra. O objeto, quando é substantivo, leva a preposição ⲛ̄-/ⲙ̄- antes.',
    sections: [
      {
        text: 'A tabela de conjugação do verbo ⲙⲉ ("amar") no Wiktionary mostra o mesmo padrão de prefixo em QUALQUER verbo copta no presente: ϯ- (eu), ⲕ- (tu, masc.), ⲧⲉ- (tu, fem.), ϥ- (ele), ⲥ- (ela), ⲧⲛ̄- (nós), ⲧⲉⲧⲛ̄- (vós), ⲥⲉ- (eles).',
        table: {
          head: ['Pessoa', 'Prefixo', 'Ⲙⲉ (amar)'],
          rows: [
            ['eu', 'ϯ-', 'ϯⲙⲉ (eu amo)'],
            ['tu (masc.)', 'ⲕ-', 'ⲕⲙⲉ (tu amas)'],
            ['tu (fem.)', 'ⲧⲉ-', 'ⲧⲉⲙⲉ (tu amas)'],
            ['ele', 'ϥ-', 'ϥⲙⲉ (ele ama)'],
            ['ela', 'ⲥ-', 'ⲥⲙⲉ (ela ama)'],
          ],
        },
        examples: [
          ['Ϯⲟⲩⲱⲙ.', 'Eu como.'],
          ['Ⲕⲥⲱ.', 'Tu bebes.'],
        ],
      },
      {
        heading: 'O objeto direto leva ⲛ̄- (ou ⲙ̄- antes de ⲡ/ⲃ/ⲙ)',
        text: 'Quando o objeto do verbo é um substantivo, ele entra com a preposição ⲛ̄- antes — que muda pra ⲙ̄- quando a palavra seguinte começa com ⲡ, ⲃ ou ⲙ (pra facilitar a pronúncia, o mesmo tipo de assimilação que o português faz em "impossível", com M antes de P).',
        examples: [
          ['Ϯⲟⲩⲱⲙ ⲙ̄ⲡⲟⲉⲓⲕ.', 'Eu como o pão. (ⲙ̄- antes de ⲡ-)'],
          ['Ϯⲥⲱ ⲙ̄ⲙⲟⲟⲩ.', 'Eu bebo água. (ⲙ̄- antes de ⲙ-)'],
        ],
      },
    ],
    pitfalls: ['Esquecer o prefixo do sujeito: sem ele, não dá pra saber quem pratica a ação — "ⲟⲩⲱⲙ" sozinho é só o infinitivo "comer", não "eu como".', 'Esquecer a preposição ⲛ̄-/ⲙ̄- antes do objeto: "ϯⲟⲩⲱⲙ ⲡⲟⲉⲓⲕ" (sem ⲙ̄-) não é a forma ensinada neste curso.'],
    quiz: [
      {
        question: 'Como se diz "ela bebe" em copta, só com o prefixo do presente?',
        options: ['Ⲥⲥⲱ', 'Ϥⲥⲱ', 'Ⲧⲉⲥⲱ'],
        answer: 'Ⲥⲥⲱ',
        explanation: 'O prefixo de "ela" é ⲥ-; com o verbo ⲥⲱ (beber), fica "ⲥⲥⲱ".',
      },
    ],
  },
];
