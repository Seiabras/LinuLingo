import type { MiniCourse } from '@/data/cursos/tipos';

/**
 * A trilha da área Música (pedido do dono, 17/10/2026): teoria explicada, com a partitura desde o
 * começo (decisão do dono) e o som de cada exemplo. Os itens com `pauta` mostram as notas na pauta e
 * tocam. Fontes em `sources` de cada unidade.
 */

export const MUS_NOTAS: MiniCourse = {
  id: 'mus-notas',
  name: 'As notas',
  emoji: '🎵',
  kind: 'musica',
  summary: 'As sete notas, de onde vêm os nomes dó-ré-mi, como outras línguas chamam as notas e por que o lá vale 440.',
  sources: [
    { label: 'Wikipedia, “Ut queant laxis”', url: 'https://en.wikipedia.org/wiki/Ut_queant_laxis' },
    { label: 'Wikipedia, “Giovanni Battista Doni”', url: 'https://en.wikipedia.org/wiki/Giovanni_Battista_Doni' },
    { label: 'Wikipedia, “Letter notation”', url: 'https://en.wikipedia.org/wiki/Letter_notation' },
    { label: 'Babbel Magazine, “What are the names and origins of musical notes?”', url: 'https://www.babbel.com/en/magazine/musical-notes-names' },
    { label: 'Wikipedia, “A440 (pitch standard)”', url: 'https://en.wikipedia.org/wiki/A440_(pitch_standard)' },
  ],
  lessons: [
    {
      id: 'sete-notas',
      title: 'As sete notas',
      emoji: '🎹',
      intro: [
        'A música do Ocidente usa sete notas com nome: dó, ré, mi, fá, sol, lá e si. Depois do si, vem de novo um dó, mais agudo: começa outra oitava.',
        'Os países de língua portuguesa, espanhola, francesa e italiana usam esses nomes. Os de língua inglesa usam letras: C, D, E, F, G, A, B, em que C é o dó.',
        'O alemão também usa letras, com uma diferença: o si é H, e a letra B é o si bemol. Em Tocar, dá para trocar os nomes do teclado entre dó-ré-mi e C-D-E.',
      ],
      items: [
        { term: 'dó · ré · mi · fá · sol · lá · si', meaning: 'as sete notas', how: 'Toque para ouvir a escala de dó.', pauta: [60, 62, 64, 65, 67, 69, 71, 72] },
        { term: 'C · D · E · F · G · A · B', meaning: 'os mesmos nomes em letras (inglês)', how: 'C = dó, D = ré, E = mi, F = fá, G = sol, A = lá, B = si.' },
        { term: 'H', meaning: 'o si, em alemão', how: 'E o B, em alemão, é o si bemol.' },
        { term: 'oitava', meaning: 'de um dó até o próximo dó', how: 'O segundo dó é mais agudo, mas soa “parecido”.', pauta: [60, 72] },
      ],
      quiz: [
        { q: 'Qual nota vem depois do mi?', options: ['Fá', 'Sol', 'Ré'], answer: 0 },
        { q: 'Em inglês, o dó se chama…', options: ['C', 'D', 'A'], answer: 0 },
        { q: 'Em alemão, o si se chama…', options: ['H', 'B', 'S'], answer: 0 },
      ],
    },
    {
      id: 'do-re-mi',
      title: 'De onde vem o dó-ré-mi',
      emoji: '📜',
      intro: [
        'Por volta do ano 1000, o monge italiano Guido d’Arezzo usou um hino em latim a São João Batista, “Ut queant laxis”, para ensinar os cantores. Cada verso começava uma nota acima do anterior, e as primeiras sílabas viraram os nomes das notas: ut, re, mi, fa, sol, la.',
        'Depois, o si veio das iniciais das últimas palavras do hino, “Sancte Iohannes” (São João). E o ut virou dó: a troca é atribuída ao italiano Giovanni Battista Doni, no século XVII, porque “dó” é mais fácil de cantar. Por que “dó”, ninguém sabe ao certo.',
        'É um caso em que a música e as línguas se encontram: os nomes das notas são pedaços de um poema em latim.',
      ],
      items: [
        { term: 'Ut queant laxis', meaning: 'o hino em latim que deu nome às notas', how: 'Guido d’Arezzo, por volta do ano 1000.' },
        { term: 'ut → dó', meaning: 'a troca atribuída a G. B. Doni', how: 'Século XVII.' },
        { term: 'si', meaning: 'de “Sancte Iohannes”, as iniciais do fim do hino' },
      ],
      quiz: [
        { q: 'De onde vêm os nomes ut, re, mi, fa, sol, la?', options: ['Das primeiras sílabas dos versos de um hino em latim', 'De nomes de pássaros', 'De números em grego'], answer: 0 },
        { q: 'Qual nota tinha antes o nome “ut”?', options: ['Dó', 'Lá', 'Si'], answer: 0 },
      ],
    },
    {
      id: 'la-440',
      title: 'O lá que vale 440',
      emoji: '🎚️',
      intro: [
        'Cada nota é uma vibração: quanto mais vibrações por segundo (hertz, Hz), mais aguda. Para todo mundo tocar junto afinado, combinou-se um valor para uma nota: o lá 4 vale 440 Hz.',
        'Em 1834, Johann Scheibler propôs o lá 440 numa reunião de cientistas em Stuttgart, na Alemanha. Em 1939, uma conferência internacional em Londres recomendou o 440, e a ISO o adotou como norma em 1955 (e de novo em 1975).',
        'De um dó ao próximo dó, a frequência dobra. O afinador do app mede a nota que você toca comparando com essas frequências.',
      ],
      items: [
        { term: 'hertz (Hz)', meaning: 'vibrações por segundo', how: 'Mais Hz, mais agudo.' },
        { term: 'lá 4 = 440 Hz', meaning: 'a nota de referência para afinar', how: 'Toque para ouvir.', pauta: [69] },
        { term: 'oitava', meaning: 'o dobro da frequência', how: 'O lá 5 vale 880 Hz.', pauta: [69, 81] },
      ],
      quiz: [
        { q: 'Quanto vale o lá de referência?', options: ['440 Hz', '100 Hz', '1000 Hz'], answer: 0 },
        { q: 'O que acontece com a frequência de uma oitava para a outra?', options: ['Ela dobra', 'Ela cai pela metade', 'Ela fica igual'], answer: 0 },
      ],
    },
  ],
};

export const MUS_PAUTA: MiniCourse = {
  id: 'mus-pauta',
  name: 'A pauta',
  emoji: '🎼',
  kind: 'musica',
  summary: 'Ler música desde o começo: as cinco linhas, a clave de sol e o dó central.',
  sources: [
    { label: 'musictheory.net, “The Staff, Clefs, and Ledger Lines”', url: 'https://www.musictheory.net/lessons/10' },
    { label: 'Dummies, “Music theory: staff, clefs and notes”', url: 'https://www.dummies.com/article/academics-the-arts/music/music-theory/music-theory-staff-clefs-and-notes-264997' },
  ],
  lessons: [
    {
      id: 'cinco-linhas',
      title: 'As cinco linhas',
      emoji: '〰️',
      intro: [
        'A música se escreve numa pauta: cinco linhas, com quatro espaços entre elas. As linhas e os espaços se contam de baixo para cima.',
        'Cada nota é uma bolinha numa linha ou num espaço. Subir de uma linha para o espaço de cima é subir uma nota: quanto mais alta na pauta, mais aguda.',
        'Em Tocar, toda nota que você toca aparece na pauta: experimente subir as teclas brancas e ver as bolinhas subirem.',
      ],
      items: [
        { term: 'pauta', meaning: 'as cinco linhas onde se escreve a música', how: 'Também se chama pentagrama.' },
        { term: 'linha e espaço', meaning: 'os dois lugares de uma nota', how: 'Linha, espaço, linha, espaço: uma nota de cada vez.', pauta: [64, 65, 67, 69, 71] },
      ],
      quiz: [
        { q: 'Quantas linhas tem a pauta?', options: ['Cinco', 'Quatro', 'Sete'], answer: 0 },
        { q: 'Uma nota mais alta na pauta é…', options: ['Mais aguda', 'Mais grave', 'Mais forte'], answer: 0 },
      ],
    },
    {
      id: 'clave-de-sol',
      title: 'A clave de sol',
      emoji: '🎼',
      intro: [
        'No começo da pauta fica a clave, que diz o nome das notas. A clave de sol se enrola em volta da 2ª linha (de baixo para cima): a nota nessa linha é o sol.',
        'Sabendo onde fica o sol, dá para achar as outras: o espaço logo acima é o lá; a linha logo abaixo (a 1ª) é o mi.',
      ],
      items: [
        { term: 'sol', meaning: 'a nota da 2ª linha, onde a clave se enrola', pauta: [67] },
        { term: 'mi', meaning: 'a 1ª linha', pauta: [64] },
        { term: 'lá', meaning: 'o 2º espaço, logo acima do sol', pauta: [69] },
      ],
      quiz: [
        { q: 'Na clave de sol, qual nota fica na 2ª linha?', options: ['Sol', 'Dó', 'Mi'], answer: 0 },
        { q: 'E na 1ª linha?', options: ['Mi', 'Fá', 'Ré'], answer: 0 },
      ],
    },
    {
      id: 'do-central',
      title: 'O dó central e as linhas extras',
      emoji: '➖',
      intro: [
        'Quando a nota é grave ou aguda demais para caber nas cinco linhas, a pauta ganha linhas suplementares: pedacinhos de linha só embaixo ou em cima daquela nota.',
        'O dó central, o dó do meio do piano, fica numa linha suplementar logo abaixo da pauta da clave de sol. É a primeira nota da escala de dó, que você toca em Tocar.',
      ],
      items: [
        { term: 'linha suplementar', meaning: 'um pedaço de linha extra, para notas fora da pauta' },
        { term: 'dó central', meaning: 'o dó do meio do piano', how: 'Na linha suplementar de baixo.', pauta: [60] },
        { term: 'dó, ré, mi', meaning: 'subindo a partir do dó central', pauta: [60, 62, 64] },
      ],
      quiz: [
        { q: 'Onde fica o dó central na clave de sol?', options: ['Numa linha suplementar logo abaixo da pauta', 'Na 3ª linha', 'Em cima da pauta'], answer: 0 },
        { q: 'Para que servem as linhas suplementares?', options: ['Para escrever notas fora das cinco linhas', 'Para enfeitar', 'Para marcar o ritmo'], answer: 0 },
      ],
    },
  ],
};

export const UNIDADES_MUS: MiniCourse[] = [MUS_NOTAS, MUS_PAUTA];

/** Os cursos de instrumento (pedido do dono, 17/10/2026: um curso para cada instrumento). */
export const CURSO_TECLADO: MiniCourse = {
  id: 'mus-curso-teclado',
  name: 'Curso de teclado',
  emoji: '🎹',
  kind: 'musica',
  summary: 'Do zero às primeiras músicas: os dedos, o mapa das teclas, a mão direita e a partitura, com o app ouvindo você tocar.',
  sources: [
    { label: 'Yamaha, “The basics of piano keyboard fingering”', url: 'https://hub.yamaha.com/keyboards/k-how-to/the-basics-of-piano-keyboard-fingering/' },
    { label: 'Wikipedia, “Finger numbering”', url: 'https://en.wikipedia.org/wiki/Finger_numbering' },
  ],
  lessons: [
    {
      id: 'dedos',
      title: 'Os números dos dedos',
      emoji: '✋',
      intro: [
        'No piano, cada dedo tem um número, igual nas duas mãos: 1 é o polegar, 2 o indicador, 3 o médio, 4 o anelar e 5 o mínimo.',
        'As partituras de piano escrevem esses números em cima das notas para dizer qual dedo usar. Como as mãos são espelhadas, o 1 da mão direita fica à esquerda dela, e o da mão esquerda, à direita.',
      ],
      items: [
        { term: '1', meaning: 'polegar' },
        { term: '2', meaning: 'indicador' },
        { term: '3', meaning: 'médio' },
        { term: '4', meaning: 'anelar' },
        { term: '5', meaning: 'mínimo' },
      ],
      quiz: [
        { q: 'Qual é o dedo 1?', options: ['O polegar', 'O mínimo', 'O indicador'], answer: 0 },
        { q: 'O dedo 5 é…', options: ['O mínimo', 'O médio', 'O polegar'], answer: 0 },
      ],
    },
    {
      id: 'mapa',
      title: 'O mapa das teclas',
      emoji: '🗺️',
      intro: [
        'As teclas pretas vêm em grupos de duas e de três, repetidos pelo teclado inteiro. Eles são o mapa para achar as notas.',
        'O dó é a tecla branca logo à esquerda do grupo de duas pretas. Ache um dó, conte as brancas para a direita, e você tem ré, mi, fá, sol, lá, si e o próximo dó.',
        'Faça em Tocar: ache todos os dós do teclado da tela.',
      ],
      items: [
        { term: 'grupo de duas pretas', meaning: 'o dó fica logo à esquerda dele', pauta: [60] },
        { term: 'grupo de três pretas', meaning: 'o fá fica logo à esquerda dele', pauta: [65] },
      ],
      quiz: [
        { q: 'Onde fica o dó?', options: ['Logo à esquerda do grupo de duas pretas', 'No meio do grupo de três pretas', 'Em qualquer tecla preta'], answer: 0 },
        { q: 'As teclas pretas aparecem em grupos de…', options: ['Duas e três', 'Uma e quatro', 'Cinco'], answer: 0 },
      ],
    },
    {
      id: 'mao-direita',
      title: 'Dó, ré, mi com a mão direita',
      emoji: '👉',
      intro: [
        'Ponha o polegar direito (1) no dó central, o indicador (2) no ré e o médio (3) no mi. Cada dedo cuida de uma tecla: a mão fica parada e só os dedos se mexem.',
        'Com os cinco dedos em dó, ré, mi, fá, sol (a “posição de dó”), dá para tocar a “Ode à Alegria” inteira, sem mexer a mão.',
        'Em Tocar › Siga a música › Ode à Alegria, ligue “Tocar no meu instrumento” e toque num teclado de verdade: o app ouve e avança a cada nota certa. Sem teclado, toque na tela.',
      ],
      items: [
        { term: 'posição de dó', meaning: 'dedos 1 a 5 em dó, ré, mi, fá, sol', pauta: [60, 62, 64, 65, 67] },
        { term: 'Ode à Alegria (começo)', meaning: 'mi mi fá sol, sol fá mi ré', how: 'Dedos 3 3 4 5, 5 4 3 2.', pauta: [64, 64, 65, 67, 67, 65, 64, 62] },
      ],
      quiz: [
        { q: 'Na posição de dó, qual dedo toca o mi?', options: ['O 3 (médio)', 'O 1 (polegar)', 'O 5 (mínimo)'], answer: 0 },
        { q: 'Com a mão na posição de dó, quais notas você alcança sem mexer a mão?', options: ['Dó, ré, mi, fá, sol', 'Só o dó', 'Todas as do teclado'], answer: 0 },
      ],
    },
  ],
};

export const CURSOS_INSTRUMENTO: MiniCourse[] = [CURSO_TECLADO];

/** Os próximos cursos de instrumento. */
export const CURSOS_EM_BREVE = [
  { emoji: '🪈', nome: 'Flauta doce', sobre: 'O dedilhado desenhado nota por nota, como no Tonestro.' },
  { emoji: '🎤', nome: 'Canto', sobre: 'Afinação e extensão da voz, com a sua voz desenhada na tela.' },
  { emoji: '🥁', nome: 'Bateria', sobre: 'Ritmo e coordenação, com pads na tela.' },
  { emoji: '🪕', nome: 'Ukulele', sobre: 'Os primeiros acordes do pop, primo do cavaquinho.' },
];
