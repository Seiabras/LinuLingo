import type { GrammarTopic } from '../types';

/**
 * Tópicos de gramática do persa — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes:
 * - Wikipedia, «Persian grammar» ‹https://en.wikipedia.org/wiki/Persian_grammar› (sem gênero,
 *   ordem SOV, ausência de casos gramaticais, marcador را)
 * - Wikipedia, «Ezafe» ‹https://en.wikipedia.org/wiki/Ezafe›
 * - Wikipedia, «Persian language» ‹https://en.wikipedia.org/wiki/Persian_language› (persa médio
 *   perdeu gênero e número dual)
 * - Wikipedia, «Persian verbs» ‹https://en.wikipedia.org/wiki/Persian_verbs› (terminações -am/-i/
 *   -ast/-im/-id/-and do verbo “ser/estar”)
 */
export const GRAMMAR_FA: GrammarTopic[] = [
  {
    id: 'fa-g1',
    level: 'A1.1',
    title: 'Um idioma sem gênero gramatical',
    emoji: '🚻',
    summary: 'O persa moderno não marca gênero gramatical em lugar nenhum — nem em substantivo, nem em adjetivo, nem no pronome “او” (ele/ela/isso).',
    sections: [
      {
        text: 'Ao contrário da maioria das línguas indo-europeias — e do árabe, do urdu e do próprio português —, o persa não tem gênero gramatical algum. O persa médio (entre o persa antigo e o moderno) perdeu o gênero gramatical e também o número dual que a língua antiga ainda tinha, restando só singular e plural. O resultado: um adjetivo nunca concorda em gênero, e um único pronome de terceira pessoa, “او” (u), serve pra “ele”, “ela” e até “isso”.',
        table: {
          head: ['Idioma (deste app)', 'Marca gênero gramatical?'],
          rows: [
            ['Persa', 'Não — nem em substantivo, nem em pronome'],
            ['Árabe', 'Sim — masculino e feminino'],
            ['Híndi', 'Sim — masculino e feminino'],
          ],
        },
        examples: [
          ['او خوب است.', 'Ele/ela está bem.'],
          ['او از ایران است.', 'Ele/ela é do Irã.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar adivinhar “ele” ou “ela” pela terminação da palavra: no persa não existe essa pista, porque não há gênero gramatical.',
      'Esperar que o adjetivo mude de forma como em português (“pequeno/pequena”): em persa “کوچک” (kuček) não muda nunca.',
    ],
    quiz: [
      {
        question: 'O que significa “او” (u) em persa?',
        options: ['ele, ela ou isso — sem distinção', 'só “ele”', 'só “ela”'],
        answer: 'ele, ela ou isso — sem distinção',
        explanation: 'O persa moderno não marca gênero gramatical nem nos pronomes: “او” cobre as três traduções.',
      },
      {
        question: 'Como fica o adjetivo “کوچک” (pequeno) no feminino?',
        options: ['Do mesmo jeito: کوچک', 'کوچکه', 'کوچکا'],
        answer: 'Do mesmo jeito: کوچک',
        explanation: 'Adjetivos em persa não concordam em gênero — a língua simplesmente não tem gênero gramatical.',
      },
    ],
  },
  {
    id: 'fa-g2',
    level: 'A1.2',
    title: 'A ezāfe: o “-e” que liga as palavras',
    emoji: '🔗',
    summary: 'A “ezāfe” é a partícula “-e” (“-ye” depois de vogal) que liga um substantivo a quem o possui, a um adjetivo ou a outro substantivo.',
    sections: [
      {
        text: 'Depois que o persa perdeu seu sistema de casos gramaticais, sobrou a ezāfe como o principal jeito de ligar duas palavras. Ela quase nunca aparece escrita no alfabeto persa (que não marca a maioria das vogais curtas), mas se pronuncia sempre: um “-e” átono depois de consoante, e “-ye” depois de vogal — aí sim escrito, como o “ی” extra em “خانه‌ی”. Ela corresponde, mais ou menos, ao “de” do português.',
        table: {
          head: ['Estrutura', 'Persa', 'Tradução'],
          rows: [
            ['substantivo + possuidor', 'برادرِ مریم (barâdar-e Maryam)', 'o irmão da Maryam'],
            ['substantivo + adjetivo', 'خانه‌ی کوچک (xâne-ye kuček)', 'a casa pequena'],
            ['depois de vogal: “-ye”', 'پایِ او (pâ-ye u)', 'o pé dele/dela'],
          ],
        },
        examples: [
          ['خانه‌ی من کوچک است.', 'Minha casa é pequena.'],
          ['نامِ شما چیست؟', 'Qual é o seu nome?'],
        ],
      },
    ],
    pitfalls: [
      'Procurar a ezāfe escrita depois de uma consoante: ela quase nunca aparece no alfabeto, mas se pronuncia sempre.',
      'Confundir a ezāfe com um sufixo de plural ou de verbo: ela só liga duas palavras, sem mudar o sentido de nenhuma das duas.',
    ],
    quiz: [
      {
        question: 'O que a ezāfe liga em “برادرِ مریم” (barâdar-e Maryam)?',
        options: ['o substantivo “irmão” a quem o possui, “Maryam”', 'o verbo ao sujeito', 'o substantivo ao plural'],
        answer: 'o substantivo “irmão” a quem o possui, “Maryam”',
        explanation: 'A ezāfe “-e” conecta “barâdar” (irmão) a quem o possui, “Maryam”.',
      },
      {
        question: 'Depois de uma palavra terminada em vogal, como fica a ezāfe?',
        options: ['-ye', '-e', 'desaparece'],
        answer: '-ye',
        explanation: 'Depois de vogal a ezāfe vira “-ye”, como em “pâ-ye u” (o pé dele/dela).',
      },
    ],
  },
  {
    id: 'fa-g3',
    level: 'A1.2',
    title: 'Ordem SOV: sujeito, objeto, verbo',
    emoji: '🧩',
    summary: 'O persa costuma pôr o verbo no final da frase: sujeito, depois objeto, e só então o verbo.',
    sections: [
      {
        text: 'Diferente do português (sujeito-verbo-objeto), o persa segue a ordem SOV — sujeito, objeto, verbo. A gramática do persa permite bastante flexibilidade na ordem das palavras (um fenômeno chamado de “scrambling”), porque as terminações do verbo deixam claro quem faz o quê mesmo quando a ordem muda — mas o padrão mais comum é mesmo deixar o verbo por último.',
        examples: [
          ['من فارسی یاد می‌گیرم.', 'Eu aprendo persa. (lit.: eu persa aprendo)'],
          ['من نان می‌خورم.', 'Eu como pão. (lit.: eu pão como)'],
        ],
      },
    ],
    pitfalls: ['Esperar o verbo no meio da frase como em português: no persa, ele normalmente vem no final.'],
    quiz: [
      {
        question: 'Em “من فارسی یاد می‌گیرم” (man fârsi yâd migiram), qual é a ordem das palavras?',
        options: ['sujeito, objeto, verbo', 'sujeito, verbo, objeto', 'verbo, sujeito, objeto'],
        answer: 'sujeito, objeto, verbo',
        explanation: '“من” (eu, sujeito), “فارسی” (persa, objeto) e “یاد می‌گیرم” (aprendo, verbo): a ordem SOV típica do persa.',
      },
      {
        question: 'O persa é rígido quanto à ordem das palavras?',
        options: [
          'Não: permite flexibilidade (“scrambling”), porque o verbo deixa claro quem faz o quê',
          'Sim, a ordem nunca muda',
          'Só é flexível na escrita formal',
        ],
        answer: 'Não: permite flexibilidade (“scrambling”), porque o verbo deixa claro quem faz o quê',
        explanation: 'A ordem SOV é a mais comum no persa, mas a língua tolera outras ordens sem perder clareza.',
      },
    ],
  },
  {
    id: 'fa-g4',
    level: 'A1.2',
    title: 'Sem casos gramaticais: preposições (e o “را”)',
    emoji: '🔑',
    summary: 'O persa não tem sistema de casos gramaticais: usa preposições pra quase tudo, e só uma partícula, “را” (râ), marca o objeto direto definido.',
    sections: [
      {
        text: 'Substantivos e pronomes em persa não mudam de forma conforme a função na frase — diferente do alemão, do russo ou do latim. A função de sujeito, objeto ou lugar vem de preposições (como “از”, “de”) e da ordem das palavras. A única sobra de um sistema de casos é “را” (râ), que vem depois de um objeto direto definido; na fala, costuma virar só “ro” ou “o”.',
        table: {
          head: ['Função', 'Como o persa marca'],
          rows: [
            ['sujeito', 'sem marca própria; a ordem e o verbo indicam'],
            ['objeto direto definido', 'substantivo + را (râ)'],
            ['posse, lugar etc.', 'preposições (از, به…) ou a ezāfe'],
          ],
        },
        examples: [['من از ایران هستم.', 'Eu sou do Irã. (preposição “از”, não um caso gramatical)']],
      },
    ],
    pitfalls: [
      'Procurar terminações de caso como as do alemão ou do russo: em persa a função gramatical não muda a forma da palavra.',
      'Usar “را” com um objeto indefinido: ela só marca um objeto direto definido (“o livro”), nunca um indefinido (“um livro”).',
    ],
    quiz: [
      {
        question: 'O persa muda a terminação dos substantivos conforme a função na frase (caso gramatical)?',
        options: ['Não: usa preposições e a partícula “را” pro objeto direto definido', 'Sim, como o alemão', 'Sim, como o russo'],
        answer: 'Não: usa preposições e a partícula “را” pro objeto direto definido',
        explanation: 'O persa não tem sistema de casos; “را” (râ) é a única sobra, e só marca o objeto direto quando ele é definido.',
      },
      {
        question: 'Quando aparece “را” (râ)?',
        options: ['Depois de um objeto direto definido', 'Depois de qualquer substantivo', 'Sempre antes do verbo'],
        answer: 'Depois de um objeto direto definido',
        explanation: '“را” marca só o objeto direto definido; um objeto indefinido não leva essa partícula.',
      },
    ],
  },
];
