import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do tamazight padrão marroquina — por enquanto só A1.1 e A1.2 (pacote
 * incompleto). Fontes: Wikipédia em inglês ("Berber languages", "Central Atlas Tamazight grammar",
 * "Tashelhit"), Wikcionário em inglês e francês, pesquisa sobre negação berbere (Ouali 2003/2005,
 * Mettouchi 2021, citados via busca acadêmica), todas reconferidas em 08/10/2026.
 */
export const GRAMMAR_ZGH: GrammarTopic[] = [
  {
    id: 'zgh-g1',
    level: 'A1.1',
    title: 'Pronomes marcados por gênero',
    emoji: '🙋',
    summary: 'No tamazight, “tu”, “vocês” e “ele/ela” mudam de forma segundo o gênero de quem ouve ou de quem se fala.',
    sections: [
      {
        text: 'Diferente do português, em que só a 3ª pessoa muda (ele/ela), o tamazight (e o berbere em geral) marca gênero também na 2ª pessoa: “kečč” é “tu/você” dirigido a um homem, “kemm” a uma mulher. O mesmo vale no plural.',
        table: {
          head: ['Pessoa', 'Masculino', 'Feminino'],
          rows: [
            ['tu, você', 'kečč', 'kemm'],
            ['ele/ela', 'netta', 'nettat'],
            ['vocês', 'kunwi', 'kunnemti'],
            ['eles/elas', 'nitni', 'nitenti'],
          ],
        },
        examples: [
          ['D kečč?', 'É você? (a um homem)'],
          ['D kemm?', 'É você? (a uma mulher)'],
        ],
      },
    ],
    pitfalls: ['Usar “kečč” com qualquer pessoa, do jeito que “você” serve para os dois gêneros em português: em tamazight, errar o gênero do pronome é um erro de gramática, não só de estilo.'],
    quiz: [
      { question: 'Como se diz “você” falando com uma mulher?', options: ['kemm', 'kečč', 'netta'], answer: 'kemm', explanation: '“kemm” é a forma feminina de “tu/você”; “kečč” é a masculina.' },
      { question: '“nitenti” significa…', options: ['elas', 'eles', 'vocês (fem.)'], answer: 'elas', explanation: '“nitni” é “eles”, “nitenti” é “elas” — o tamazight marca esse gênero no plural também.' },
    ],
  },
  {
    id: 'zgh-g2',
    level: 'A1.1',
    title: 'A partícula “d”: sem verbo “ser”',
    emoji: '🔗',
    summary: '“d” substitui o verbo “ser” para apresentar quem é quem — não conjuga, e não muda com a pessoa.',
    sections: [
      {
        text: 'O tamazight não tem um verbo “ser” para frases de identidade (“eu sou Linu”, “isto é um gato”). Em vez disso, usa a partícula “d”, que não conjuga nunca: funciona como um “é” universal. “D izem” é, ao pé da letra, “[é] leão” — “é um leão”.',
        examples: [
          ['D izem.', 'É um leão.'],
          ['Nekk, d Linu.', 'Eu sou o Linu.'],
          ['D nekk.', 'Sou eu.'],
        ],
      },
    ],
    pitfalls: ['Procurar uma conjugação para “d”, do jeito que o português conjuga “ser” (sou/é/somos): “d” é invariável, não muda com a pessoa nem com o número.'],
    quiz: [
      { question: 'Como se diz “eu sou o Linu”?', options: ['Nekk, d Linu.', 'Nekk sou Linu.', 'D Linu nekk sou.'], answer: 'Nekk, d Linu.', explanation: 'O pronome (nekk) vem antes de “d” e do nome: “Nekk, d Linu” — sem verbo “ser” nenhum.' },
      { question: '“d” muda de forma conforme a pessoa (eu/tu/ele)?', options: ['Não, é sempre igual', 'Sim, como um verbo', 'Só no plural'], answer: 'Não, é sempre igual', explanation: '“d” não conjuga: é a mesma partícula para “eu sou”, “é” ou “são”.' },
    ],
  },
  {
    id: 'zgh-g3',
    level: 'A1.2',
    title: 'Negação bipartida: ur…ša/ara',
    emoji: '🚫',
    summary: 'A negação do verbo tem duas partes: “ur” sempre antes do verbo, e um segundo elemento que muda de palavra conforme a variedade berbere.',
    sections: [
      {
        text: 'Como o francês “ne…pas”, o tamazight nega o verbo com duas peças: “ur” (obrigatório, antes do verbo) e um segundo elemento depois dele. No tamazight do Atlas Central, esse segundo elemento é “ša”; no cabila, é “ara”; no tarifit, “kra”. É um padrão comum às línguas berberes, documentado por linguistas (Ouali, Mettouchi) como um caso do “ciclo de Jespersen” — o mesmo processo histórico que deu ao francês moderno o “pas” depois do “ne”.',
        table: {
          head: ['Variedade', 'Segundo elemento da negação'],
          rows: [
            ['Tamazight do Atlas Central', 'ša'],
            ['Cabila', 'ara'],
            ['Tarifit', 'kra'],
          ],
        },
        examples: [
          ['Ur ssnx.', 'Eu não sei. (“ur” + verbo “ssn” + sufixo “-x”, “eu”)'],
          ['Uriffiɣ ša.', 'Ele não saiu. (tamazight do Atlas Central)'],
        ],
      },
    ],
    pitfalls: ['Negar só com “ur”, sem o segundo elemento: em várias variedades (incluindo o Atlas Central e o cabila), a negação completa pede as duas peças, não só a primeira.'],
    quiz: [
      { question: 'A negação do verbo em tamazight do Atlas Central é…', options: ['ur…ša', 'ur…ara', 'só ur'], answer: 'ur…ša', explanation: 'No tamazight do Atlas Central, o segundo elemento da negação é “ša”; no cabila, é “ara”.' },
      { question: '“Ur ssnx” significa…', options: ['Eu não sei.', 'Eu sei.', 'Você não sabe.'], answer: 'Eu não sei.', explanation: '“ur” nega o verbo “ssn” (saber), e “-x” marca a primeira pessoa (“eu”).' },
    ],
  },
  {
    id: 'zgh-g4',
    level: 'A1.2',
    title: 'Feminino com ta-…-t, e “ter” com “dari”',
    emoji: '👪',
    summary: 'O feminino se marca com prefixo E sufixo ao mesmo tempo (ta-…-t); e “ter” não existe como verbo — usa-se “dari”, literalmente “em mim”.',
    sections: [
      {
        text: 'Muitos substantivos e adjetivos femininos levam o prefixo “ta-” E o sufixo “-t” ao mesmo tempo, envolvendo a palavra pelos dois lados: “asli” (noivo) vira “tasli-t” (noiva); “amecṭuḥ” (pequeno) vira “tamecṭuḥt” para combinar com um substantivo feminino.',
        table: {
          head: ['Masculino', 'Feminino', 'Tradução'],
          rows: [
            ['asli', 'tasli-t', 'noivo / noiva'],
            ['amecṭuḥ', 'tamecṭuḥt', 'pequeno / pequena'],
            ['ameqqran', 'tameqqrant', 'grande (m. / f.)'],
          ],
        },
        examples: [
          ['Dari aydi.', 'Eu tenho um cachorro. (lit. “em mim [há um] cachorro”)'],
          ['Dari axxam amecṭuḥ.', 'Eu tenho uma casa pequena.'],
        ],
      },
    ],
    pitfalls: ['Procurar um verbo “ter” sozinho: o tamazight usa “dari” (uma preposição já fundida com o sufixo “eu”), não um verbo que se conjuga por pessoa como em português.'],
    quiz: [
      { question: 'Como se marca o feminino em “amecṭuḥ” (pequeno)?', options: ['com ta- e -t ao mesmo tempo (tamecṭuḥt)', 'só com -a no final', 'não muda'], answer: 'com ta- e -t ao mesmo tempo (tamecṭuḥt)', explanation: 'O feminino berbere típico usa prefixo “ta-” e sufixo “-t” juntos: “tamecṭuḥt”.' },
      { question: 'Como se diz “eu tenho um cachorro”?', options: ['Dari aydi.', 'Nekk ɣur aydi.', 'Aydi-inu ssn.'], answer: 'Dari aydi.', explanation: '“dari” (lit. “em mim”) faz o papel do verbo “ter” que o tamazight não tem.' },
    ],
  },
];
