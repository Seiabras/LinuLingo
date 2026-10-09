import type { MiniCourse } from './tipos';

/**
 * Dothraki (Game of Thrones) — criada em 2009 pelo linguista David J. Peterson, escolhido entre
 * mais de 30 candidatos pela Language Creation Society, a pedido da HBO (George R. R. Martin tinha
 * deixado só algumas palavras nos livros). Fontes conferidas de novo nesta sessão: Wikipédia em
 * inglês “Dothraki language” (gramática e vocabulário) e `dothraki.com` (o blog pessoal de Peterson
 * — confirma as saudações). **Correção importante**: a ordem das palavras é SVO (sujeito-verbo-
 * objeto), não VSO. `dothraki.org` NÃO é usado como fonte: é um site de fãs, não oficial.
 */
export const CURSO_DOTHRAKI: MiniCourse = {
  id: 'dothraki',
  name: 'Dothraki',
  emoji: '🐎',
  kind: 'artificial',
  summary: 'A língua dos cavaleiros nômades de Game of Thrones, criada por um linguista a partir de poucas palavras dos livros: a saudação é “com respeito”, e a ordem das frases é sujeito-verbo-objeto, como no português.',
  sources: [
    { label: 'Wikipédia (inglês): “Dothraki language”', url: 'https://en.wikipedia.org/wiki/Dothraki_language' },
    { label: 'dothraki.com (blog de David J. Peterson)', url: 'https://dothraki.com/' },
  ],
  lessons: [
    {
      id: 'saudacoes',
      title: 'M’athchomaroon!',
      emoji: '👋',
      intro: [
        'A HBO contratou a Language Creation Society pra criar uma língua dothraki de verdade a partir das poucas palavras que George R. R. Martin tinha deixado nos livros. David J. Peterson foi escolhido entre mais de 30 candidatos e entregou mais de 1.700 palavras antes das primeiras gravações, em 2009.',
        '“M’athchomaroon” (olá) significa literalmente “com respeito” — pode ser encurtado para “M’ath!” ou “M’ach!” entre cavaleiros do mesmo khalasar (grupo nômade).',
      ],
      items: [
        { term: 'M’athchomaroon!', meaning: 'olá (literalmente, “com respeito”)' },
        { term: 'Hash yer dothrae chek?', meaning: 'como vai? (literalmente, “você andou bem hoje?”)' },
        { term: 'Chek!', meaning: 'bem!' },
        { term: 'Dothras chek!', meaning: 'tchau (literalmente, “ande bem!”)' },
        { term: 'khal', meaning: 'o chefe/governante de um khalasar' },
        { term: 'khaleesi', meaning: 'a esposa de um khal' },
      ],
      quiz: [
        { q: 'O que “M’athchomaroon” significa literalmente?', options: ['Com respeito', 'Boa noite', 'Até logo'], answer: 0 },
        { q: 'Como se responde “Hash yer dothrae chek?” (como vai?)', options: ['Chek!', 'Khal!', 'Rakh!'], answer: 0, why: '“Chek!” (bem!) é a resposta comum a essa saudação, segundo o blog de David J. Peterson.' },
      ],
    },
    {
      id: 'vocabulario',
      title: 'Arakh, rakh, shierak',
      emoji: '⚔️',
      intro: [
        'Em setembro de 2011, o dothraki já tinha 3.163 palavras catalogadas — bem mais do que a maioria das línguas construídas para filmes e séries.',
      ],
      items: [
        { term: 'arakh', meaning: 'um tipo de lâmina curva' },
        { term: 'hrakkares', meaning: 'leão' },
        { term: 'ave', meaning: 'pai' },
        { term: 'rakh', meaning: 'menino' },
        { term: 'shierak', meaning: 'estrela' },
        { term: 'rhaesh', meaning: 'país/terra' },
      ],
      quiz: [
        { q: 'O que é um “arakh”?', options: ['Um tipo de lâmina curva', 'Um cavalo', 'Uma tenda'], answer: 0 },
        { q: 'Como se diz “estrela” em dothraki?', options: ['shierak', 'rakh', 'rhaesh'], answer: 0 },
      ],
    },
    {
      id: 'gramatica',
      title: 'Sujeito, verbo, objeto',
      emoji: '📏',
      intro: [
        'A ordem das palavras no dothraki é sujeito-verbo-objeto (SVO) — igual ao português, e diferente de pesquisas antigas que diziam ser VSO. O exemplo oficial “Khal ahhas arakh” (O khal afiou o arakh) segue exatamente essa ordem: khal (sujeito) + ahhas (verbo, “afiou”) + arakh (objeto).',
        'Os substantivos se dividem em duas classes, animados e inanimados, e têm cinco casos gramaticais: nominativo, acusativo, genitivo, alativo (direção) e ablativo (origem). Só os animados variam em número (singular/plural).',
      ],
      items: [
        { term: 'Khal ahhas arakh.', meaning: 'O khal afiou o arakh. (sujeito-verbo-objeto)' },
        { term: 'Arakh hasa.', meaning: 'O arakh é afiado/cortante.' },
        { term: 'animado / inanimado', meaning: 'as duas classes de substantivo do dothraki' },
      ],
      quiz: [
        { q: 'Qual é a ordem das palavras no dothraki?', options: ['Sujeito-verbo-objeto (SVO)', 'Verbo-sujeito-objeto (VSO)', 'Objeto-verbo-sujeito (OVS)'], answer: 0, why: 'Pesquisas mais antigas diziam VSO, mas a gramática confirmada é SVO — a mesma ordem básica do português.' },
        { q: 'Quantas classes de substantivo o dothraki tem?', options: ['Duas: animado e inanimado', 'Três: masculino, feminino e neutro', 'Nenhuma'], answer: 0 },
      ],
    },
  ],
};
