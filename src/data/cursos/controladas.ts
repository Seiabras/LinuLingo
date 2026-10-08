import type { MiniCourse } from './tipos';

/**
 * Basic English: o linguista britânico Charles Kay Ogden criou essa versão simplificada do
 * inglês em 1925 e a publicou em 1930 ("Basic English: A General Introduction with Rules and
 * Grammar"). A ideia era reduzir o vocabulário a 850 palavras-raiz, já que o inglês tem uma
 * conjugação verbal difícil para quem aprende — por isso o Basic English usa principalmente 100
 * "palavras de operação" (verbos, preposições, pronomes) no lugar de verbos específicos: em vez
 * de "ascend" diz-se "go up". As 850 palavras se dividem em 100 Operações, 400 Coisas gerais, 200
 * Coisas que dá para desenhar, 100 Qualidades e 50 Qualidades opostas.
 */
export const CURSO_BASIC_ENGLISH: MiniCourse = {
  id: 'basic-english',
  name: 'Basic English',
  emoji: '🇬🇧',
  kind: 'controlada',
  summary: 'O inglês reduzido a 850 palavras-raiz, criado por C. K. Ogden em 1925: com poucos verbos (as "palavras de operação") e muita combinação, dá para dizer quase tudo. Base de ferramentas como o Simple English da Wikipédia.',
  sources: [
    { label: 'Basic English (Wikipédia)', url: 'https://en.wikipedia.org/wiki/Basic_English' },
    { label: 'Lista das 850 palavras (Wikcionário em inglês)', url: 'https://en.wiktionary.org/wiki/Appendix:Basic_English_word_list' },
  ],
  lessons: [
    {
      id: 'operacoes',
      title: 'As palavras de operação',
      emoji: '⚙️',
      intro: [
        'O Basic English tem só 100 "palavras de operação" — a maioria verbos bem gerais — no lugar dos milhares de verbos específicos do inglês comum. Em vez de aprender um verbo novo pra cada ideia, você combina uma operação com uma palavra de direção: "go up" (subir), "go in" (entrar), "get up" (levantar).',
        'Essa é a ideia central de Ogden: reduzir o inglês inteiro a um punhado de peças que se combinam, em vez de exigir um vocabulário enorme de verbos.',
      ],
      items: [
        { term: 'come', meaning: 'vir' },
        { term: 'go', meaning: 'ir' },
        { term: 'give', meaning: 'dar' },
        { term: 'take', meaning: 'pegar, tomar' },
        { term: 'make', meaning: 'fazer' },
        { term: 'put', meaning: 'pôr, colocar' },
        { term: 'see', meaning: 'ver' },
        { term: 'have', meaning: 'ter' },
        { term: 'be', meaning: 'ser, estar' },
        { term: 'say', meaning: 'dizer' },
      ],
      quiz: [
        { q: 'Quantas "palavras de operação" tem o Basic English?', options: ['50', '100', '300'], answer: 1 },
        { q: 'Em vez de aprender "ascend" (subir, formal), o Basic English prefere…', options: ['"go up" (go + up)', '"ascend" mesmo', 'Um símbolo próprio'], answer: 0, why: 'A ideia de Ogden: combinar poucas operações com palavras de direção, em vez de aprender um verbo novo pra cada nuance.' },
        { q: '"be" é uma palavra de…', options: ['operação', 'coisa', 'qualidade'], answer: 0 },
      ],
    },
    {
      id: 'coisas',
      title: 'Coisas do dia a dia',
      emoji: '🏠',
      intro: [
        'Das 850 palavras, 600 são "coisas" (things): 400 nomes gerais (ideias, sentimentos, instituições) e 200 "coisas que dá pra desenhar" — objetos concretos, do tipo que cabe numa ilustração simples.',
        'É a maior fatia da lista: o Basic English não corta muito o vocabulário de SUBSTANTIVOS, só o de verbos — a ideia de Ogden era que nomear coisas é mais fácil de aprender do que conjugar verbos.',
      ],
      items: [
        { term: 'water', meaning: 'água' },
        { term: 'food', meaning: 'comida' },
        { term: 'house', meaning: 'casa' },
        { term: 'table', meaning: 'mesa' },
        { term: 'book', meaning: 'livro' },
        { term: 'hand', meaning: 'mão' },
        { term: 'family', meaning: 'família' },
        { term: 'friend', meaning: 'amigo, amiga' },
        { term: 'school', meaning: 'escola' },
        { term: 'country', meaning: 'país' },
        { term: 'language', meaning: 'língua, idioma' },
        { term: 'world', meaning: 'mundo' },
      ],
      quiz: [
        { q: 'Quantas das 850 palavras são "coisas" (things)?', options: ['200', '350', '600'], answer: 2, why: '400 nomes gerais + 200 coisas que dá pra desenhar.' },
        { q: 'O Basic English corta bastante o vocabulário de…', options: ['substantivos', 'verbos', 'as duas coisas igualmente'], answer: 1, why: 'A redução pesada é nos verbos — os "things" continuam numerosos, porque nomear é mais simples de aprender.' },
      ],
    },
    {
      id: 'qualidades',
      title: 'Qualidades e opostos',
      emoji: '⚖️',
      intro: [
        'As últimas 150 palavras são qualidades: 100 gerais e 50 "opostas" — organizadas em pares, pra cobrir mais sentido com menos palavra. Em vez de aprender "small" e "big" como palavras soltas, o Basic English ensina os opostos juntos.',
        'Um detalhe curioso: "big" não está na lista oficial — "great" faz esse papel (além de "grande" no sentido de importante).',
      ],
      items: [
        { term: 'good', meaning: 'bom, boa' },
        { term: 'great', meaning: 'grande (também: ótimo)' },
        { term: 'happy', meaning: 'feliz' },
        { term: 'bad', meaning: 'ruim, mau' },
        { term: 'small', meaning: 'pequeno' },
      ],
      quiz: [
        { q: 'Quantas palavras de qualidade "opostas" tem a lista?', options: ['25', '50', '100'], answer: 1 },
        { q: 'Qual destas NÃO está na lista oficial das 850?', options: ['great', 'good', 'big'], answer: 2, why: '"great" faz o papel de "grande" — "big" ficou de fora da lista oficial de Ogden.' },
      ],
    },
  ],
};
