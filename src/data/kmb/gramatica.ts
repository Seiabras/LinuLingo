import type { GrammarTopic } from '../types';

/**
 * Gramática do quimbundo — por enquanto só A1.1 e A1.2 (pacote incompleto). Fontes: Wikipédia
 * (inglês) “Kimbundu language” (pronomes, a conjugação de “kuala”/“kuala ni”, fonologia); Wikcionário
 * (inglês), verbetes individuais citados em vocabulario.ts (classes e plurais de cada substantivo).
 * A numeração de classe que o Wikcionário usa para o quimbundo (class 1, class 3, class 9…) nem
 * sempre bate com a numeração comparativa de Guthrie usada para outras línguas bantas deste app,
 * como o suaíli — por isso aqui as classes são identificadas pelo prefixo (mu-/a-, ki-/i-…), que é
 * o que o aluno de fato vê e ouve, e não só pelo número.
 */
export const GRAMMAR_KMB: GrammarTopic[] = [
  {
    id: 'kmb-g1',
    level: 'A1.1',
    title: 'Pronúncia: sem c, q, r, e as consoantes grudadas',
    emoji: '🔤',
    summary: 'O alfabeto do quimbundo não tem c, q nem r. Em compensação, tem grupos de consoantes “pré-nasalizadas”, ditas quase como um som só.',
    sections: [
      {
        text: 'O quimbundo se escreve com o alfabeto latino, mas sem as letras c, q e r. No lugar delas, aparecem grupos como mb, nd, ng e nz: são consoantes “pré-nasalizadas”, em que o m ou n gruda na consoante seguinte, sem formar uma sílaba própria. A letra x soa como o “ch” do português (“chuva”), nunca como “k” ou “z”.',
        table: {
          head: ['Escrita', 'Som', 'Exemplo'],
          rows: [
            ['mb, nd, ng, nz', 'm/n bem grudado na consoante seguinte', 'mbunda (bunda), ndenge (criança), ngulu (porco), nzumbi (espírito)'],
            ['x', 'como “ch” de “chuva”', 'muxima (coração)'],
            ['c, q, r', 'não existem no alfabeto do quimbundo', '—'],
          ],
        },
        examples: [
          ['Eme ngala ni mbunda.', 'Eu tenho bunda.'],
          ['Eme ngala ni nzumbi.', 'Eu tenho um espírito (zumbi).'],
        ],
      },
      {
        heading: 'O tom, quase nunca escrito',
        text: 'O quimbundo tem dois tons, alto e baixo, que podem mudar o sentido da palavra. Dicionários às vezes marcam o tom alto com acento (kalúnga, ngímbi), mas a escrita do dia a dia quase nunca marca esse tom — por isso este app não tenta marcá-lo também.',
        examples: [['kalunga', 'mar (ou, como adjetivo, “grande, imenso”)']],
      },
    ],
    pitfalls: [
      'Separar o “m” ou “n” das consoantes pré-nasalizadas como se fossem duas sílabas: “mbunda” é uma sílaba “grudada”, não “m” + “bunda”.',
      'Ler o x como “k” ou “z”: em quimbundo ele soa como o “ch” de “chuva”.',
      'Procurar c, q ou r na escrita do quimbundo: essas três letras não fazem parte do alfabeto.',
    ],
    quiz: [
      { question: 'Como soa o grupo “mb” em “mbunda”?', options: ['Um m bem grudado no b, quase um só som', 'Separado, “m” e depois “bunda”', 'Como “mp”'], answer: 'Um m bem grudado no b, quase um só som', explanation: 'É uma consoante pré-nasalizada: o m não forma sílaba própria.' },
      { question: 'Como soa o x em “muxima” (coração)?', options: ['Como “ch” de “chuva”', 'Como “k”', 'Como “z”'], answer: 'Como “ch” de “chuva”', explanation: 'O x do quimbundo representa o som “ch”, nunca “k” ou “z”.' },
    ],
  },
  {
    id: 'kmb-g2',
    level: 'A1.1',
    title: 'Os pronomes e o verbo kuala (ser/estar)',
    emoji: '🙋',
    summary: 'Seis pronomes pessoais e um verbo, “kuala”, que serve tanto para “ser” quanto para “estar”.',
    sections: [
      {
        text: 'O quimbundo quase sempre diz o pronome, como o português informal (“eu sou”, “tu és”). O verbo “kuala” muda um pedacinho para cada pessoa — e serve tanto para o que alguém é quanto para como alguém está, sem duas palavras diferentes como o nosso “ser” e “estar”.',
        table: {
          head: ['Pronome', 'Tradução', 'kuala'],
          rows: [
            ['eme', 'eu', 'ngala'],
            ['eye', 'tu, você', 'uala'],
            ['mwene', 'ele, ela', 'uala'],
            ['etu', 'nós', 'tuala'],
            ['enu', 'vocês', 'nuala'],
            ['ene', 'eles, elas', 'ala'],
          ],
        },
        examples: [
          ['Eme ngala.', 'Eu sou/estou.'],
          ['Etu tuala.', 'Nós somos/estamos.'],
        ],
      },
    ],
    pitfalls: ['Procurar dois verbos diferentes para “ser” e “estar”: o quimbundo usa só “kuala” para os dois.', 'Esquecer que “eye” e “mwene” usam a mesma forma do verbo, “uala”.'],
    quiz: [
      { question: 'Complete: “___ ngala.”', options: ['Eme', 'Eye', 'Etu'], answer: 'Eme', explanation: '“Ngala” é a forma de “kuala” para “eme” (eu).' },
      { question: 'Qual é a forma de “kuala” para “etu” (nós)?', options: ['tuala', 'ngala', 'ala'], answer: 'tuala', explanation: '“Tuala” é a forma de “nós”, como em “Etu tuala ni menya” (nós temos água).' },
    ],
  },
  {
    id: 'kmb-g3',
    level: 'A1.2',
    title: '“Kuala ni”: o jeito do quimbundo dizer “ter”',
    emoji: '🤲',
    summary: 'Em vez de um verbo “ter” separado, o quimbundo usa “kuala” (ser/estar) seguido de “ni” (com): ter é, ao pé da letra, “estar com”.',
    sections: [
      {
        text: '“Ni” liga o verbo “kuala” ao que a pessoa tem: “eme ngala ni menya” é “eu tenho água”, palavra por palavra “eu estou com água”. A mesma palavrinha “ni” também liga duas coisas, como o nosso “e”: “dikamba ni imbwa” é “um amigo e um cachorro”.',
        table: {
          head: ['Pronome', 'kuala ni', 'Tradução'],
          rows: [
            ['eme', 'ngala ni', 'eu tenho'],
            ['eye / mwene', 'uala ni', 'tu tens / ele, ela tem'],
            ['etu', 'tuala ni', 'nós temos'],
            ['enu', 'nuala ni', 'vocês têm'],
            ['ene', 'ala ni', 'eles, elas têm'],
          ],
        },
        examples: [
          ['Eme ngala ni dikamba.', 'Eu tenho um amigo.'],
          ['Ene ala ni kilombo.', 'Eles têm um quilombo.'],
          ['Eme ngala ni dikamba ni imbwa.', 'Eu tenho um amigo e um cachorro.'],
        ],
      },
    ],
    pitfalls: ['Esquecer o “ni” depois de “kuala”: “eme ngala menya”, sem o “ni”, não é a forma registrada para “eu tenho água”.', 'Trocar a pessoa do verbo: “mwene ngala ni…” usa a forma de “eme” (eu) numa frase sobre “ele/ela” — o certo é “mwene uala ni…”.'],
    quiz: [
      { question: 'Como se diz “eu tenho um amigo”?', options: ['Eme ngala ni dikamba.', 'Eme ngala dikamba.', 'Dikamba ngala ni eme.'], answer: 'Eme ngala ni dikamba.', explanation: 'O “ni” depois de “ngala” é o que marca “ter”.' },
      { question: 'O que liga “dikamba ni imbwa”?', options: ['Um amigo e um cachorro', 'Um amigo ou um cachorro', 'O amigo do cachorro'], answer: 'Um amigo e um cachorro', explanation: '“Ni” também funciona como “e”, ligando duas coisas.' },
    ],
  },
  {
    id: 'kmb-g4',
    level: 'A1.2',
    title: 'As classes nominais: o coração da gramática banta',
    emoji: '🧩',
    summary: 'O quimbundo não tem gênero (masculino/feminino) como o português: cada substantivo pertence a uma classe, marcada por um prefixo que muda do singular para o plural.',
    sections: [
      {
        heading: 'No lugar do gênero, as classes',
        text: 'Como outras línguas bantas (o suaíli deste app é uma prima do quimbundo), os substantivos do quimbundo não são masculinos ou femininos: eles se organizam em classes, cada uma com um prefixo no singular e outro no plural. Não dá para adivinhar a classe só pelo sentido da palavra — é preciso aprender cada substantivo junto com o seu plural, do jeito que o dicionário registra.',
        table: {
          head: ['Classe', 'Singular', 'Plural', 'Português'],
          rows: [
            ['mu-/a- (pessoas)', 'muleke', 'aleke', 'menino(s)'],
            ['mu-/a- (pessoas)', 'mutu', 'atu', 'pessoa(s)'],
            ['ki-/i-', 'kilombo', 'ilombo', 'quilombo(s)'],
            ['ki-/i-', 'kitanda', 'itanda', 'mercado(s)'],
            ['N-/ji- (bichos e mais)', 'mbunda', 'jimbunda', 'bunda(s)'],
            ['N-/ji- (bichos e mais)', 'imbwa', 'jiimbwa', 'cachorro(s)'],
            ['di-/ma-', 'dikamba', 'makamba', 'amigo(s)'],
            ['di-/ma-', 'riulu', 'maulu', 'céu(s)'],
          ],
        },
        examples: [
          ['muleke → aleke', 'menino → meninos'],
          ['mbunda → jimbunda', 'bunda → bundas'],
        ],
      },
      {
        heading: 'Por que isso importa para quem fala português',
        text: 'Em português, só o artigo e o adjetivo concordam em gênero com o substantivo (“o menino bonito”, “a menina bonita”). No quimbundo — como em outras línguas bantas — é o prefixo de classe que, em princípio, se repete nas palavras ligadas ao substantivo. Este pacote ainda não tem fontes confiáveis sobre como adjetivos e verbos concordam com cada classe (além do que já foi confirmado para “kuala” com os pronomes pessoais), por isso os exemplos de frase deste curso usam sempre pronome pessoal, nunca um substantivo como sujeito de “kuala” — para não inventar uma concordância que ainda não foi verificada.',
        examples: [
          ['Eme ngala ni muleke. Ene ala ni aleke.', 'Eu tenho um menino. Eles têm meninos.'],
        ],
      },
    ],
    pitfalls: [
      'Tentar adivinhar a classe pelo sentido: “kilombo” e “kitanda” são da mesma classe (ki-/i-) sem ser parecidos em significado.',
      'Aprender só o singular: sem o plural (muleke/aleke, mbunda/jimbunda), não dá para saber a classe.',
      'Confundir classe nominal com gênero gramatical: o quimbundo não marca masculino/feminino em lugar nenhum, nem no pronome “mwene” (ele/ela) nem nos substantivos.',
    ],
    quiz: [
      { question: 'Qual é o plural de “muleke” (menino)?', options: ['aleke', 'muleken', 'makamba'], answer: 'aleke', explanation: 'A classe mu-/a- troca o “mu-” inteiro por “a-” no plural.' },
      { question: '“Kilombo” e “kitanda” pertencem à mesma classe porque…', options: ['Os dois começam com “ki-” e fazem o plural com “i-”', 'Os dois significam a mesma coisa', 'Os dois são femininos'], answer: 'Os dois começam com “ki-” e fazem o plural com “i-”', explanation: 'A classe nominal é marcada pelo prefixo, não pelo sentido da palavra.' },
      { question: 'O quimbundo marca masculino e feminino…', options: ['Em nenhum lugar: nem no pronome “mwene”, nem nos substantivos', 'Só nos substantivos', 'Só nos pronomes'], answer: 'Em nenhum lugar: nem no pronome “mwene”, nem nos substantivos', explanation: 'No lugar do gênero, o quimbundo usa classes nominais marcadas por prefixo.' },
    ],
  },
];
