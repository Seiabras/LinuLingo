import type { GrammarTopic } from '../types';

/** Tópicos de gramática do macedônio — por enquanto só A1.1 e A1.2 (pacote incompleto). */
export const GRAMMAR_MK: GrammarTopic[] = [
  {
    id: 'mk-g1',
    level: 'A1.1',
    title: 'Pronúncia: o alfabeto cirílico macedônio e a tônica antepenúltima',
    emoji: '🔤',
    summary: 'O macedônio usa um cirílico próprio, com letras que não existem no russo nem no búlgaro, e a tônica cai, quase sempre, na antepenúltima sílaba.',
    sections: [
      {
        text: 'Seis letras do alfabeto macedônio (31 ao todo) não existem no russo nem no búlgaro — são sons “molhados”, feitos com a língua no céu da boca, ou africadas próprias.',
        table: {
          head: ['Letra', 'Som', 'Exemplo'],
          rows: [
            ['ѓ', 'suave, entre “d” e “j”', 'леѓа (costas)'],
            ['ѕ', '“dz”', 'ѕвезда (estrela)'],
            ['љ', '“lh” do português', 'љубов (amor)'],
            ['њ', '“nh” do português', 'коњ (cavalo)'],
            ['ќ', 'suave, um “tch” mais fechado', 'ноќ (noite)'],
            ['џ', '“j” do inglês “jungle”', 'џеб (bolso)'],
          ],
        },
        examples: [
          ['Добра ноќ!', 'Boa noite!'],
          ['Имам коњ.', 'Tenho um cavalo.'],
        ],
      },
      {
        heading: 'A tônica antepenúltima',
        text: 'Diferente do russo e do búlgaro, a tônica do macedônio é fixa: cai, via de regra, na antepenúltima sílaba da palavra, contando do fim. Em palavras de duas sílabas, cai na primeira. A escrita não marca a tônica, mas a regra vale para quase toda palavra nativa.',
        examples: [
          ['МАЈка', 'mãe (2 sílabas: tônica na 1ª)'],
          ['ПЛАнина', 'montanha (3 sílabas: tônica na antepenúltima, que aqui é a 1ª)'],
        ],
      },
    ],
    pitfalls: ['Ler “њ” como “n” + “j” separados: é um som só, o “nh” do português.', 'Esperar a tônica mudar de lugar como no russo: no macedônio ela é fixa, quase sempre na antepenúltima sílaba.'],
    quiz: [
      { question: 'Como soa a letra “њ” em “коњ” (cavalo)?', options: ['Como o “nh” do português', 'Como “n” sozinho', 'Como “ni” em “ninguém”'], answer: 'Como o “nh” do português', explanation: '“Њ” é sempre um som só, igual ao “nh” de “banho”.' },
      { question: 'Onde cai a tônica em “планина” (montanha)?', options: ['Na primeira sílaba (PLAnina)', 'Na última sílaba (planiNA)', 'Muda conforme a frase'], answer: 'Na primeira sílaba (PLAnina)', explanation: 'A tônica do macedônio é fixa na antepenúltima sílaba; em “планина”, de três sílabas, isso cai no começo da palavra.' },
    ],
  },
  {
    id: 'mk-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo сум (ser/estar)',
    emoji: '🙋',
    summary: '“Сум” é irregular, mas o pronome quase sempre aparece, diferente do que acontece em outras línguas eslavas.',
    sections: [
      {
        text: 'O verbo ser/estar é “сум”, irregular no presente. O macedônio tem ainda um pronome neutro para “isso”, “тоа”, usado com coisas e com nomes neutros.',
        table: {
          head: ['Pronome', 'Tradução', 'сум'],
          rows: [
            ['јас', 'eu', 'сум'],
            ['ти', 'tu, você', 'си'],
            ['тој / таа / тоа', 'ele / ela / isso', 'е'],
            ['ние', 'nós', 'сме'],
            ['вие', 'vocês; o senhor (formal)', 'сте'],
            ['тие', 'eles, elas', 'се'],
          ],
        },
        examples: [
          ['Јас сум од Сао Паоло.', 'Eu sou de São Paulo.'],
          ['Тие се браќа.', 'Eles são irmãos.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o pronome: diferente do que acontece em outras eslavas, no macedônio ele quase sempre aparece.', 'Confundir “сте” (vocês/formal) com “се” (eles, elas): são parecidos, mas diferentes.'],
    quiz: [
      { question: 'Complete: “Јас ___ од Скопје.”', options: ['сум', 'си', 'сме'], answer: 'сум', explanation: '“Сум” é a forma de “јас”.' },
      { question: '“Вие сте” serve para…', options: ['vocês e o tratamento formal', 'só para “eles”', 'só para “eu”'], answer: 'vocês e o tratamento formal', explanation: 'Como em outras línguas eslavas, “вие” é o plural e também a forma educada de falar com uma pessoa.' },
    ],
  },
  {
    id: 'mk-g3',
    level: 'A1.2',
    title: 'O artigo definido pós-posto (-от/-та/-то/-те)',
    emoji: '🔗',
    summary: 'O macedônio, como o búlgaro, não tem artigo separado: ele gruda no fim da palavra.',
    sections: [
      {
        text: 'O indefinido não precisa de marca (“куќа” já pode ser “uma casa”); o definido vem grudado no fim, mudando com o gênero e o número.',
        table: {
          head: ['Sem artigo', 'Com artigo', 'Tradução'],
          rows: [
            ['град', 'градот', 'a cidade'],
            ['куќа', 'куќата', 'a casa'],
            ['дете', 'детето', 'a criança'],
            ['деца', 'децата', 'as crianças'],
          ],
        },
        examples: [
          ['Градот е голем.', 'A cidade é grande.'],
          ['Куќата е мала.', 'A casa é pequena.'],
        ],
      },
    ],
    pitfalls: ['Pôr um artigo antes, como em português: “a casa” é só “куќата”, com o -та no fim.', 'Esquecer que o artigo muda com o gênero: -от (masculino), -та (feminino), -то (neutro).'],
    quiz: [
      { question: 'Como se diz “a casa”?', options: ['куќата', 'куќа', 'та куќа'], answer: 'куќата', explanation: 'O artigo -та se gruda no fim do nome feminino.' },
      { question: '“Детето” quer dizer…', options: ['a criança', 'uma criança', 'as crianças'], answer: 'a criança', explanation: '“Дете” é “criança” (neutro); com o artigo -то grudado, “детето” é “a criança”.' },
    ],
  },
  {
    id: 'mk-g4',
    level: 'A1.2',
    title: 'O verbo имам (ter) e a negação com не / немам',
    emoji: '🚫',
    summary: 'A maioria dos verbos nega com “не” antes, mas “имам” tem um negativo irregular, “немам”.',
    sections: [
      {
        text: 'Para a maioria dos verbos, basta pôr “не” antes: “не знам” (não sei). Mas “имам” (ter) tem uma forma negativa própria, “немам”, em vez de “не имам”.',
        table: {
          head: ['Pronome', 'имам', 'negativo'],
          rows: [
            ['јас', 'имам', 'немам'],
            ['ти', 'имаш', 'немаш'],
            ['тој / таа', 'има', 'нема'],
            ['ние', 'имаме', 'немаме'],
            ['вие', 'имате', 'немате'],
            ['тие', 'имаат', 'немаат'],
          ],
        },
        examples: [
          ['Имам два брата.', 'Tenho dois irmãos.'],
          ['Не знам.', 'Não sei.'],
          ['Немам сестра.', 'Não tenho irmã.'],
        ],
      },
    ],
    pitfalls: ['Dizer “не имам” para “não tenho”: o certo é a forma própria, “немам”.', 'Usar “сум” para dizer o que se tem: posse é com “имам”/“немам”.'],
    quiz: [
      { question: 'Como se diz “eu não tenho”?', options: ['немам', 'не имам', 'имам не'], answer: 'немам', explanation: '“Имам” tem uma forma negativa própria, “немам”, em vez de “не” + “имам”.' },
      { question: '“Не знам” quer dizer…', options: ['Não sei.', 'Não tenho.', 'Não sou.'], answer: 'Não sei.', explanation: 'A maioria dos verbos nega normalmente com “не” antes, como aqui com “знам” (saber).' },
    ],
  },
];
