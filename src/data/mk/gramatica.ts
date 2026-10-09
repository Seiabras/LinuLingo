import type { GrammarTopic } from '../types';

/** Tópicos de gramática do macedônio — A1.1 até A2.2 (pacote incompleto; B1 em diante chega depois). */
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
  {
    id: 'mk-g5',
    level: 'A2.1',
    title: 'O futuro com ќе',
    emoji: '⏳',
    summary: 'O futuro se forma com a partícula “ќе” antes do presente; a negação tem duas formas, “не ќе” e “нема да”.',
    sections: [
      {
        text: '“Ќе” vem antes do verbo no presente, sem mudar a conjugação. É o jeito comum de falar do futuro no dia a dia.',
        table: {
          head: ['Pronome', 'Presente', 'Futuro'],
          rows: [
            ['јас', 'играм', 'ќе играм'],
            ['ти', 'играш', 'ќе играш'],
            ['тој / таа', 'игра', 'ќе игра'],
            ['ние', 'играме', 'ќе играме'],
          ],
        },
        examples: [
          ['Утре ќе врне дожд.', 'Amanhã vai chover.'],
          ['Ќе купувам леб.', 'Eu vou comprar pão.'],
        ],
      },
      {
        heading: 'A negação do futuro',
        text: 'A negação mais comum usa “нема да” antes do presente, sem o “ќе”. Existe também “не ќе”, menos usada no dia a dia.',
        examples: [['Нема да работам во недела.', 'Eu não vou trabalhar no domingo.']],
      },
    ],
    pitfalls: ['Negar só com “не” antes de “ќе”: o jeito mais comum é “нема да”, sem “ќе”.', 'Esquecer o “ќе”: sem ele, a frase fica no presente, não no futuro.'],
    quiz: [
      { question: 'Como se diz “amanhã vai chover”?', options: ['Утре ќе врне дожд.', 'Утре врне дожд ќе.', 'Утре нема врне дожд.'], answer: 'Утре ќе врне дожд.', explanation: '“Ќе” vem antes do verbo no presente.' },
      { question: 'Como se nega o futuro no dia a dia?', options: ['нема да + presente', 'не ќе + presente', 'ќе не + presente'], answer: 'нема да + presente', explanation: '“Нема да” é a negação mais comum do futuro, sem o “ќе”.' },
    ],
  },
  {
    id: 'mk-g6',
    level: 'A2.1',
    title: 'Comparativo по- e superlativo нај-',
    emoji: '📏',
    summary: 'O comparativo gruda “по-” antes do adjetivo, e o superlativo, “нај-”: sem separar com hífen.',
    sections: [
      {
        text: 'Diferente do búlgaro, o macedônio não usa hífen: “по-” e “нај-” grudam direto na palavra.',
        table: {
          head: ['Base', 'Comparativo', 'Superlativo'],
          rows: [
            ['голем (grande)', 'поголем (maior)', 'најголем (o maior)'],
            ['добар (bom)', 'подобар (melhor)', 'најдобар (o melhor)'],
            ['мал (pequeno)', 'помал (menor)', 'најмал (o menor)'],
          ],
        },
        examples: [
          ['Скопје е поголемо од Битола.', 'Skopje é maior que Bitola.'],
          ['Скопје е најголемиот град во Македонија.', 'Skopje é a maior cidade da Macedônia.'],
        ],
      },
      {
        heading: 'A irregularidade de “многу”',
        text: '“Многу” (muito) tem comparativo e superlativo irregulares: повеќе (mais) e најмногу (o mais).',
        examples: [['Имам повеќе пријатели сега.', 'Agora tenho mais amigos.']],
      },
    ],
    pitfalls: ['Pôr hífen entre “по-”/“нај-” e o adjetivo: no macedônio eles grudam direto, sem hífen (diferente do búlgaro).', 'Esquecer “од” para dizer “que”: “поголем Битола” está incompleto; o certo é “поголем од Битола”.'],
    quiz: [
      { question: 'Como se diz “a maior cidade”?', options: ['најголемиот град', 'по-голем град', 'многу голем град'], answer: 'најголемиот град', explanation: '“Нај-” gruda no adjetivo para formar o superlativo.' },
      { question: 'Como se diz “mais” (de “многу”)?', options: ['повеќе', 'помногу', 'нај-многу'], answer: 'повеќе', explanation: '“Многу” tem o comparativo irregular “повеќе”.' },
    ],
  },
  {
    id: 'mk-g7',
    level: 'A2.2',
    title: 'O passado de сум: бев, беше, беа',
    emoji: '🕰️',
    summary: 'Para dizer como alguém estava ou onde esteve, o presente de “сум” vira бев/беше/беше/бевме/бевте/беа no passado.',
    sections: [
      {
        text: 'O passado de “сум” tem uma raiz própria (бе-), diferente da do presente (с-). É o tempo usado para descrever como alguém estava, de onde era ou o que havia no passado.',
        table: {
          head: ['Pronome', 'сум (presente)', 'сум (passado)'],
          rows: [
            ['јас', 'сум', 'бев'],
            ['ти', 'си', 'беше'],
            ['тој / таа', 'е', 'беше'],
            ['ние', 'сме', 'бевме'],
            ['вие', 'сте', 'бевте'],
            ['тие', 'се', 'беа'],
          ],
        },
        examples: [
          ['Вчера бев уморен.', 'Ontem eu estava cansado.'],
          ['Таа беше среќна.', 'Ela estava feliz.'],
        ],
      },
    ],
    pitfalls: ['Usar o presente “сум” para o passado: “вчера сум уморен” está errado; o certo é “вчера бев уморен”.', 'Confundir “беше” (ele/ela era, e também tu eras) com “беа” (eles eram): são formas diferentes.'],
    quiz: [
      { question: 'Como se diz “ontem eu estava cansado”?', options: ['Вчера бев уморен.', 'Вчера сум уморен.', 'Вчера сме уморен.'], answer: 'Вчера бев уморен.', explanation: '“Бев” é o passado de “сум” para “јас”.' },
      { question: 'Qual forma vale tanto para “ти” como para “тој/таа”?', options: ['беше', 'бев', 'беа'], answer: 'беше', explanation: '“Беше” serve para a segunda pessoa do singular e para a terceira do singular.' },
    ],
  },
];
