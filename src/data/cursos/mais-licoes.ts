import type { MiniLesson } from './tipos';
import { brailleOf } from './tatil';

/** Lições que completam os cursos (ver src/data/cursos/index.ts, que as junta a cada curso). */

export const ASL_MAIS: MiniLesson[] = [
  {
    id: 'cores',
    title: 'Cores',
    emoji: '🎨',
    intro: ['Várias cores da ASL usam a letra inicial do nome em inglês, sacudida no ar: B de “blue”, G de “green”, Y de “yellow”. É um empréstimo da escrita, como a datilologia.'],
    items: [
      { term: 'RED', meaning: 'vermelho', how: 'O indicador passa de cima para baixo sobre os lábios, duas vezes.' },
      { term: 'BLUE', meaning: 'azul', how: 'A mão em “B” (dedos juntos e esticados) sacode de leve, girando o punho.' },
      { term: 'GREEN', meaning: 'verde', how: 'A mão em “G” sacode de leve, girando o punho.' },
      { term: 'YELLOW', meaning: 'amarelo', how: 'A mão em “Y” (polegar e mínimo esticados) sacode de leve.' },
      { term: 'BLACK', meaning: 'preto', how: 'O indicador passa de um lado para o outro na testa.' },
      { term: 'WHITE', meaning: 'branco', how: 'A mão aberta no peito se afasta fechando as pontas dos dedos.' },
    ],
    quiz: [
      { q: 'Por que BLUE, GREEN e YELLOW usam B, G e Y?', options: ['São a letra inicial do nome em inglês', 'Por acaso', 'Porque imitam a cor'], answer: 0 },
      { q: 'Onde é feito RED?', options: ['Nos lábios', 'Na testa', 'No peito'], answer: 0 },
    ],
  },
  {
    id: 'perguntas',
    title: 'Perguntas',
    emoji: '❓',
    intro: ['Como na Libras, as perguntas com WHO, WHAT, WHERE, WHEN e WHY vêm com as sobrancelhas franzidas, e muitas vezes no fim da frase: YOUR NAME WHAT?'],
    items: [
      { term: 'WHERE', meaning: 'onde', how: 'O indicador para cima balança de um lado para o outro.' },
      { term: 'WHEN', meaning: 'quando', how: 'O indicador faz um círculo em volta do indicador da outra mão e pousa na ponta dele.' },
      { term: 'WHY', meaning: 'por quê', how: 'Os dedos tocam a testa e a mão se afasta virando um “Y”.' },
      { term: 'HOW', meaning: 'como', how: 'As duas mãos curvadas, juntas pelos nós dos dedos, giram para a frente e se abrem.' },
    ],
    quiz: [
      { q: 'O que acompanha as perguntas com WHERE e WHY?', options: ['As sobrancelhas franzidas', 'As sobrancelhas levantadas', 'Nada'], answer: 0 },
      { q: 'Onde costuma ficar a palavra de pergunta?', options: ['No fim da frase', 'Sempre no começo'], answer: 0 },
    ],
  },
];

export const TATIL_MAIS: MiniLesson[] = [
  {
    id: 'palavras',
    title: 'Ler palavras',
    emoji: '📖',
    intro: [
      'Agora junte as celas. As palavras são escritas letra por letra, com uma cela vazia entre elas; a maiúscula ganha o sinal de maiúscula (pontos 4-6) antes.',
      'Quem lê Braille com fluência passa os dedos das duas mãos pela linha e chega a mais de 100 palavras por minuto.',
    ],
    items: ['casa', 'sol', 'mar', 'café', 'Brasil', 'Linu'].map((w) => ({ term: w, meaning: `a palavra “${w}”`, braille: brailleOf(w), how: `${brailleOf(w).split(' ').length} celas` })),
    quiz: [
      { q: 'Que palavra é esta?', braille: brailleOf('sol'), options: ['sol', 'sal', 'mar'], answer: 0 },
      { q: 'Que palavra é esta?', braille: brailleOf('Brasil'), options: ['Brasil', 'brasa', 'Bahia'], answer: 0 },
      { q: 'Quantas celas tem “Linu” (com maiúscula)?', options: ['4', '5', '6'], answer: 1, why: 'O sinal de maiúscula mais as 4 letras.' },
    ],
  },
  {
    id: 'numeros-grandes',
    title: 'Números inteiros',
    emoji: '🔢',
    intro: ['O sinal de número vale para todos os algarismos seguidos: 2026 é o sinal de número e depois b, j, b, f. Ele só se repete quando o número recomeça depois de um espaço.'],
    items: ['10', '25', '2026'].map((n) => ({ term: n, meaning: `o número ${n}`, braille: brailleOf(n), how: `sinal de número + ${[...n].map((d) => 'jabcdefghi'[Number(d)]).join(', ')}` })),
    quiz: [
      { q: 'Que número é este?', braille: brailleOf('25'), options: ['25', '52', '15'], answer: 0 },
      { q: 'Em 2026, quantas vezes aparece o sinal de número?', options: ['Uma, no começo', 'Quatro, uma por algarismo'], answer: 0 },
    ],
  },
];

export const NAVI_MAIS: MiniLesson[] = [
  {
    id: 'numeros',
    title: 'Contar de oito em oito',
    emoji: '🖐️',
    intro: ['Os na’vi têm quatro dedos em cada mão, e por isso contam de oito em oito (base octal): “vol” é 8, o número de dedos das duas mãos.'],
    items: [
      { term: '’aw, mune, pxey', meaning: 'um, dois, três' },
      { term: 'tsìng, mrr', meaning: 'quatro, cinco' },
      { term: 'pukap, kinä', meaning: 'seis, sete' },
      { term: 'vol', meaning: 'oito (as duas mãos)' },
    ],
    quiz: [
      { q: 'Por que os na’vi contam de oito em oito?', options: ['Têm quatro dedos em cada mão', 'Por causa das luas de Pandora', 'Por acaso'], answer: 0 },
      { q: 'Como se diz “três”?', options: ['pxey', 'mune', 'vol'], answer: 0 },
    ],
  },
];

export const VALIRIANO_MAIS: MiniLesson[] = [
  {
    id: 'palavras',
    title: 'Palavras de Valíria',
    emoji: '👑',
    intro: ['O plural de “vala” (homem) é “valar”, o mesmo de “Valar morghulis”. O alto valiriano é, em Westeros, o que o latim foi na Europa: a língua dos livros e dos nobres.'],
    items: [
      { term: 'vala / valar', meaning: 'homem / homens' },
      { term: 'ābra', meaning: 'mulher' },
      { term: 'dārys', meaning: 'rei' },
      { term: 'zaldrīzes', meaning: 'dragão' },
    ],
    quiz: [
      { q: 'Em “Valar morghulis”, “valar” é…', options: ['homens (plural de vala)', 'dragões', 'reis'], answer: 0 },
      { q: 'O alto valiriano é para Westeros o que…', options: ['o latim foi para a Europa', 'o inglês é hoje'], answer: 0 },
    ],
  },
];

export const SOLRESOL_MAIS: MiniLesson[] = [
  {
    id: 'cores-numeros',
    title: 'Escrever com cores e números',
    emoji: '🌈',
    intro: ['Cada nota tem um número e uma cor do arco-íris, na ordem: por isso uma frase pode ser pintada numa parede ou mostrada com bandeiras de navio.'],
    items: [
      { term: 'do = 1', meaning: 'vermelho' },
      { term: 're = 2', meaning: 'laranja' },
      { term: 'mi = 3', meaning: 'amarelo' },
      { term: 'fa = 4', meaning: 'verde' },
      { term: 'sol = 5', meaning: 'azul' },
      { term: 'la = 6', meaning: 'anil' },
      { term: 'si = 7', meaning: 'violeta' },
    ],
    quiz: [
      { q: '“si” (sim) se escreve com a cor…', options: ['violeta', 'vermelha', 'verde'], answer: 0 },
      { q: 'Como se escreve “solresol” com números?', options: ['5-2-5', '1-2-3', '7-7-7'], answer: 0 },
    ],
  },
  {
    id: 'silabas-repetidas',
    title: 'Sílabas repetidas: números e doenças',
    emoji: '🔢',
    intro: [
      'Repetir uma sílaba muda a palavra para outra categoria inteira. Palavras de três sílabas com uma sílaba repetida são números, dias da semana ou meses; de quatro sílabas com repetição, uma doença.',
      'Isso multiplica muito o vocabulário sem inventar sons novos: basta saber a regra para adivinhar a que grupo uma palavra pertence.',
    ],
    items: [
      { term: 'redodo', meaning: 'um (1)' },
      { term: 'remimi', meaning: 'dois (2)' },
      { term: 'solsolredo', meaning: 'enxaqueca (doença: quatro sílabas com repetição)' },
    ],
    quiz: [
      { q: 'Uma palavra de três sílabas com uma sílaba repetida costuma ser…', options: ['um número, dia da semana ou mês', 'um verbo', 'uma cor'], answer: 0 },
      { q: '“solsolredo” segue o padrão de quatro sílabas repetidas, que indica…', options: ['uma doença', 'uma cor', 'um número'], answer: 0 },
    ],
  },
  {
    id: 'acentos-gramaticais',
    title: 'A gramática mora nos acentos',
    emoji: '✏️',
    intro: [
      'Sudre não quis inventar sufixos: fez os acentos carregarem a gramática. O acento agudo marca o plural, e um sinal embaixo da letra marca o feminino.',
      'Numa palavra de quatro sílabas, o lugar do acento circunflexo diz a classe gramatical. Veja a mesma raiz, “midofa”, mudando de infinitivo a substantivo, adjetivo e advérbio só pela posição do acento.',
    ],
    items: [
      { term: 'midofa', meaning: 'preferir (infinitivo, sem circunflexo)' },
      { term: 'mîdofa', meaning: 'preferência (substantivo: circunflexo na 1ª sílaba)' },
      { term: 'midôfa', meaning: 'preferível (adjetivo: circunflexo na penúltima sílaba)' },
      { term: 'midofâ', meaning: 'de preferência (advérbio: circunflexo na última sílaba)' },
    ],
    quiz: [
      { q: 'O que o acento agudo marca no solresol?', options: ['o plural', 'o feminino', 'um advérbio'], answer: 0 },
      { q: 'Em “midofâ”, o circunflexo na última sílaba marca…', options: ['um advérbio', 'um substantivo', 'o plural'], answer: 0 },
    ],
  },
  {
    id: 'todos-sentidos',
    title: 'Uma língua para os cinco sentidos',
    emoji: '🖐️',
    intro: [
      'Além de falado, cantado, escrito com notas, números ou cores, o solresol também podia ser mostrado com gestos de mão — um por nota, parecido com os sinais usados para ensinar solfejo — ou marcado com bandeiras, uma cor por nota, como a sinalização naval.',
      'A ideia de Sudre era que qualquer pessoa pudesse se comunicar nele, mesmo sem ouvir, sem ver, ou a uma distância grande demais para a voz chegar.',
    ],
    items: [
      { term: 'gesto de mão', meaning: 'um sinal para cada nota, parecido com os sinais de solfejo' },
      { term: 'bandeira', meaning: 'uma bandeira colorida para cada nota, como a sinalização naval' },
      { term: 'instrumento', meaning: 'qualquer instrumento musical também “fala” solresol, tocando as notas' },
    ],
    quiz: [
      { q: 'Além da voz, de que outro jeito dá para “falar” solresol de longe?', options: ['Com bandeiras, uma cor por nota', 'Não dá', 'Só por escrito'], answer: 0 },
      { q: 'Por que Sudre pensou o solresol em tantos meios (voz, cor, gesto, bandeira)?', options: ['Para qualquer pessoa poder se comunicar, mesmo sem ouvir ou ver', 'Só por estética', 'Para ser mais difícil de aprender'], answer: 0 },
    ],
  },
  {
    id: 'historia-solresol',
    title: 'De um sonho musical ao teclado de hoje',
    emoji: '📜',
    intro: [
      'François Sudre (1787–1862) passou a vida inteira desenvolvendo o solresol a partir de 1827; o livro que fechou a língua, “Langue Musicale Universelle”, só saiu em 1866, já depois de sua morte.',
      'A língua fez sucesso no século 19: Victor Hugo, Lamartine, Alexander von Humboldt e o imperador Napoleão III elogiaram o projeto. Em 1902, o polonês Boleslas Gajewski publicou a gramática mais completa; ela só ganhou tradução para o inglês em 1997, feita por Stephen L. Rice.',
      'Hoje o solresol não tem um código oficial da ISO — um pedido foi recusado em 2018 —, mas usa a marca informal “qso” ou “art-x-solresol”. O linguista C. George Boeree criou uma variante mais fácil de pronunciar, chamada “Ses”.',
    ],
    items: [
      { term: '1827', meaning: 'ano em que Sudre começou a criar o solresol' },
      { term: '1866', meaning: 'ano da publicação de “Langue Musicale Universelle”, já depois da morte de Sudre' },
      { term: 'Boleslas Gajewski', meaning: 'autor da gramática de 1902, a mais completa do solresol' },
    ],
    quiz: [
      { q: 'Quem criou o solresol?', options: ['François Sudre', 'Boleslas Gajewski', 'Victor Hugo'], answer: 0 },
      { q: 'A gramática mais completa do solresol, de 1902, é de…', options: ['Boleslas Gajewski', 'Zamenhof', 'C. George Boeree'], answer: 0 },
      { q: 'O solresol tem hoje um código oficial da ISO?', options: ['Não — um pedido foi recusado em 2018', 'Sim, desde 1980', 'Sim, desde 2018'], answer: 0 },
    ],
  },
];
