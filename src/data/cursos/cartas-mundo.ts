import type { MiniCourse } from './tipos';

/**
 * Os minicursos dos quatro grupos de Cartas que estavam “em breve” (item 4 da aba Cartas, pedido do
 * dono, 17/10/2026): cartomagia, cardistry, baralhos (colecionismo) e o tarô (cartomancia, só a
 * história, sem ensinar a “ler a sorte”). As ideias guardadas em `docs/areas-futuras.md` vieram de
 * uma conversa com o Gemini, sem fontes: aqui só entra o que as fontes abaixo dizem.
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Cartomagia: Wikipedia, “The Expert at the Card Table”: https://en.wikipedia.org/wiki/The_Expert_at_the_Card_Table
 *   e “S. W. Erdnase”: https://en.wikipedia.org/wiki/S._W._Erdnase — o livro saiu em 1902 com o título
 *   “Artifice, Ruse and Subterfuge at the Card Table”, nunca saiu de catálogo, tem duas partes (os
 *   golpes da mesa de jogo e a prestidigitação); o autor usou um pseudônimo que, ao contrário, dá
 *   “E. S. Andrews”, e ninguém sabe ao certo quem foi; Dai Vernon citava o livro até a velhice.
 *   Wikipedia, “Double lift”: https://en.wikipedia.org/wiki/Double_lift — levantar as duas cartas de
 *   cima como se fossem uma; o nome foi dado por Theo Annemann; a descrição mais antiga parece ser a de
 *   Richard Neve, “The Merry Companion” (1776), e depois a de Jean Nicholas Ponsin, “Nouvelle Magie
 *   Blanche Dévoilée”, no século XIX; o “double turnover” de Dai Vernon é uma extensão dele.
 * - Cardistry: Wikipedia, “History of cardistry”: https://en.wikipedia.org/wiki/History_of_cardistry,
 *   “Cardistry”: https://en.wikipedia.org/wiki/Cardistry e “Dan and Dave (magicians)”:
 *   https://en.wikipedia.org/wiki/Dan_and_Dave_(magicians) — nasceu dos floreios dos mágicos de
 *   close-up dos anos 1990 e começo dos 2000; o corte Sybil, de Chris Kenner, num livro de 1992, é uma
 *   das bases; os gêmeos Dan e Dave Buck aprenderam as cinco faces do Sybil e passaram anos só nos
 *   floreios; a fita “Pasteboard Animations” (2001), só de floreios; o DVD “The Dan and Dave System”
 *   (2004) separou o floreio da mágica; “The Trilogy” (2007), mais de 25 mil cópias; o nome
 *   “cardistry” foi apresentado por “Richard Z.” no fórum decknique.net em março de 2006; a
 *   Cardistry-Con, dos irmãos Buck, desde 2014, em San Diego na primeira vez.
 * - Baralhos: International Playing-Card Society, “English pattern”: https://i-p-c-s.org/pattern/ps-48.html
 *   e “Who do the kings, queens and jacks on the courts represent?”: https://i-p-c-s.org/faq/tmfaq.php;
 *   The World of Playing Cards, “French regional patterns: the kings”:
 *   https://www.wopc.co.uk/members/ken-lodge/61-french-regional-patterns — o padrão de Paris é o único
 *   que manteve os nomes das figuras e venceu os outros, como o de Rouen, por volta de 1780; reis Davi
 *   (espadas), Carlos Magno (copas), Júlio César (ouros), Alexandre (paus); damas Palas Atena, Judite,
 *   Raquel e Argine; valetes Ogier (Hogier), La Hire (Étienne de Vignolles), Heitor e Lancelote; o
 *   padrão inglês vem do de Rouen, que desapareceu, é o mais conhecido do mundo e não tem nomes nas
 *   figuras. Wikipedia, “Bicycle Playing Cards”: https://en.wikipedia.org/wiki/Bicycle_Playing_Cards
 *   e Bicycle, “Our History”: https://bicyclecards.com/history — o primeiro Bicycle, de 1885, em
 *   Cincinnati (as fontes divergem sobre o nome da gráfica); o primeiro verso foi o “Fan”; o verso
 *   “Rider”, de 1887, nunca saiu de catálogo; a United States Playing Card Company, de 1894.
 * - Tarô: The World of Playing Cards, “History of tarot and playing cards”:
 *   https://www.wopc.co.uk/the-history-of-playing-cards/history-of-tarot-and-playing-cards-complete-timeline
 *   e Wikipedia, “Visconti-Sforza Tarot”: https://en.wikipedia.org/wiki/Visconti-Sforza_Tarot — os
 *   primeiros tarôs, no norte da Itália do século XV, eram cartas de um jogo (os tarocchi); o
 *   Visconti-Sforza, dos senhores de Milão, nos anos 1440; Antoine Court de Gébelin, em 1781, no “Le
 *   Monde Primitif”, disse sem prova nenhuma que o tarô vinha do “Livro de Thot” egípcio, e daí nasceu
 *   o uso ocultista; o Rider-Waite-Smith, de 1909, é o mais usado hoje nesse uso. Wikipedia, “French
 *   Tarot”: https://en.wikipedia.org/wiki/French_Tarot e Pagat, “French Tarot”:
 *   https://www.pagat.com/tarot/frtarot.html — 78 cartas: 4 naipes de 14 (rei, dama, cavaleiro, valete
 *   e do 10 ao 1), 21 trunfos e a Desculpa (o Louco); é o jogo de cartas mais jogado na França depois
 *   da belote.
 */

export const CURSO_CARTOMAGIA: MiniCourse = {
  id: 'cartomagia',
  name: 'Cartomagia',
  emoji: '🎩',
  kind: 'cartas',
  summary: 'A mágica com cartas: o livro misterioso que os mágicos estudam desde 1902 e o “double lift”, um movimento descrito desde 1776.',
  sources: [
    { label: 'Wikipedia, “The Expert at the Card Table”', url: 'https://en.wikipedia.org/wiki/The_Expert_at_the_Card_Table' },
    { label: 'Wikipedia, “S. W. Erdnase”', url: 'https://en.wikipedia.org/wiki/S._W._Erdnase' },
    { label: 'Wikipedia, “Double lift”', url: 'https://en.wikipedia.org/wiki/Double_lift' },
  ],
  lessons: [
    {
      id: 'erdnase',
      title: 'O livro de Erdnase',
      emoji: '📕',
      intro: [
        'Em 1902 saiu um livro chamado “Artifice, Ruse and Subterfuge at the Card Table” (“Artifício, astúcia e subterfúgio na mesa de jogo”), que ficou conhecido como “The Expert at the Card Table”. Ele nunca saiu de catálogo e até hoje é leitura obrigatória para quem faz mágica com cartas.',
        'O livro tem duas partes: os golpes que os trapaceiros usavam nas mesas de jogo e a prestidigitação, a mágica feita só com a habilidade das mãos. O mágico Dai Vernon citava o livro até a velhice.',
        'O autor assinou “S. W. Erdnase”, um nome inventado: lido de trás para a frente, dá “E. S. Andrews”. Até hoje ninguém sabe ao certo quem ele foi.',
      ],
      items: [
        { term: 'Erdnase', meaning: 'o autor misterioso do livro de 1902', how: 'Ao contrário, “E. S. Andrews”.' },
        { term: 'prestidigitação', meaning: 'mágica feita com a habilidade das mãos', how: 'Uma das duas partes do livro.' },
        { term: 'Dai Vernon', meaning: 'mágico que citava o livro até a velhice' },
      ],
      quiz: [
        { q: 'O que dá “Erdnase” lido de trás para a frente?', options: ['E. S. Andrews', 'S. W. Edison', 'Ernesto Dias'], answer: 0 },
        { q: 'Sobre o que são as duas partes do livro?', options: ['Os golpes da mesa de jogo e a prestidigitação', 'A história do baralho e o tarô', 'O pôquer e o bridge'], answer: 0 },
        { q: 'Já se sabe quem escreveu o livro?', options: ['Não: o autor usou um nome inventado e continua um mistério', 'Sim: foi Dai Vernon', 'Sim: foi Houdini'], answer: 0 },
      ],
    },
    {
      id: 'double-lift',
      title: 'O double lift',
      emoji: '🂠',
      intro: [
        'Um movimento clássico da mágica com cartas é o “double lift”, o levantamento duplo: o mágico levanta as duas cartas de cima do baralho juntinhas, como se fossem uma só, e mostra a de baixo como se fosse a de cima.',
        'Assim, a carta que o público pensa estar no topo, na verdade, é a segunda.',
        'A descrição mais antiga parece ser a de um livro inglês de 1776, “The Merry Companion”, de Richard Neve. No século XIX ela aparece no livro do francês Jean Nicholas Ponsin, e o nome “double lift” foi dado depois pelo mágico Theo Annemann. Uma extensão dele, virar as duas cartas juntas (o “double turnover”), costuma ser ligada a Dai Vernon, que dizia talvez ter sido o criador.',
      ],
      items: [
        { term: 'double lift', meaning: 'levantar duas cartas como se fossem uma', how: 'A de baixo parece ser a de cima.' },
        { term: 'double turnover', meaning: 'virar duas cartas juntas, como uma', how: 'Uma extensão do double lift, ligada a Dai Vernon.' },
        { term: 'Theo Annemann', meaning: 'o mágico que deu o nome “double lift”' },
      ],
      quiz: [
        { q: 'No double lift, o mágico levanta…', options: ['Duas cartas como se fossem uma', 'O baralho inteiro', 'Uma carta escondida na manga'], answer: 0 },
        { q: 'De quando parece ser a descrição mais antiga do double lift?', options: ['1776', '1902', '1990'], answer: 0, why: 'No livro “The Merry Companion”, de Richard Neve.' },
      ],
    },
  ],
};

export const CURSO_CARDISTRY: MiniCourse = {
  id: 'cardistry',
  name: 'Cardistry',
  emoji: '🌀',
  kind: 'cartas',
  summary: 'A arte de manipular o baralho só pela beleza do movimento, sem truque: como ela nasceu da mágica, quem a separou dela e de onde vem o nome.',
  sources: [
    { label: 'Wikipedia, “History of cardistry”', url: 'https://en.wikipedia.org/wiki/History_of_cardistry' },
    { label: 'Wikipedia, “Cardistry”', url: 'https://en.wikipedia.org/wiki/Cardistry' },
    { label: 'Wikipedia, “Dan and Dave (magicians)”', url: 'https://en.wikipedia.org/wiki/Dan_and_Dave_(magicians)' },
  ],
  lessons: [
    {
      id: 'da-magica',
      title: 'Nascida da mágica',
      emoji: '✨',
      intro: [
        'O cardistry é a arte de mexer no baralho para mostrar movimentos bonitos: cortes, giros e figuras feitos com as cartas. Não há truque escondido: a graça é a habilidade à vista.',
        'Ele nasceu dos floreios que os mágicos de perto (o “close-up”) faziam nos anos 1990 e no começo dos anos 2000. Uma das bases é o corte Sybil, de Chris Kenner, publicado num livro dele de 1992.',
        'Os gêmeos americanos Dan e Dave Buck aprenderam as cinco faces do Sybil e passaram anos treinando só floreios. Em 2001 lançaram uma fita só de floreios, “Pasteboard Animations”, e em 2004 o DVD “The Dan and Dave System”, que separou de vez o floreio avançado da mágica.',
      ],
      items: [
        { term: 'floreio', meaning: 'movimento com as cartas feito pela beleza, sem truque' },
        { term: 'Sybil', meaning: 'o corte de Chris Kenner (1992), uma das bases do cardistry' },
        { term: 'Dan e Dave Buck', meaning: 'os gêmeos que separaram o floreio da mágica' },
      ],
      quiz: [
        { q: 'O cardistry esconde algum truque?', options: ['Não: a graça é a habilidade à vista', 'Sim: é um tipo de mágica', 'Sim: usa cartas marcadas'], answer: 0 },
        { q: 'De onde nasceu o cardistry?', options: ['Dos floreios dos mágicos de close-up', 'Dos cassinos de Las Vegas', 'Do tarô'], answer: 0 },
        { q: 'Qual corte é uma das bases do cardistry?', options: ['O Sybil, de Chris Kenner', 'O corte de Paris', 'O double lift'], answer: 0 },
      ],
    },
    {
      id: 'nome',
      title: 'O nome e os encontros',
      emoji: '🏷️',
      intro: [
        'A palavra “cardistry” junta “card” (carta) e “artistry” (arte, talento). Ela foi apresentada por um participante chamado “Richard Z.” num fórum da internet, o decknique.net, em março de 2006, e pegou.',
        'Em 2007, os irmãos Buck lançaram “The Trilogy”, um conjunto de três discos que vendeu mais de 25 mil cópias: o material de cardistry mais vendido de todos os tempos.',
        'Em 2014, eles organizaram a primeira Cardistry-Con, em San Diego, nos Estados Unidos: um encontro com conversas, apresentações, oficinas e competições, só de cardistry.',
      ],
      items: [
        { term: 'cardistry', meaning: '“card” (carta) + “artistry” (arte)', how: 'Nome apresentado em 2006.' },
        { term: 'Cardistry-Con', meaning: 'o encontro de cardistry, desde 2014' },
        { term: 'The Trilogy', meaning: 'o material de cardistry mais vendido (2007)' },
      ],
      quiz: [
        { q: 'O que a palavra “cardistry” junta?', options: ['Carta e arte', 'Carta e química', 'Cartão e indústria'], answer: 0 },
        { q: 'Quando foi a primeira Cardistry-Con?', options: ['2014', '1992', '1902'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_BARALHOS: MiniCourse = {
  id: 'baralhos',
  name: 'Os baralhos e as figuras',
  emoji: '🤴',
  kind: 'cartas',
  summary: 'Quem são os reis, as damas e os valetes do baralho francês, de onde vem o baralho que o mundo todo usa e a história do Bicycle.',
  sources: [
    { label: 'IPCS, “Who do the kings, queens and jacks represent?”', url: 'https://i-p-c-s.org/faq/tmfaq.php' },
    { label: 'IPCS, “English pattern”', url: 'https://i-p-c-s.org/pattern/ps-48.html' },
    { label: 'The World of Playing Cards, “French regional patterns: the kings”', url: 'https://www.wopc.co.uk/members/ken-lodge/61-french-regional-patterns' },
    { label: 'Wikipedia, “Bicycle Playing Cards”', url: 'https://en.wikipedia.org/wiki/Bicycle_Playing_Cards' },
    { label: 'Bicycle, “Our History”', url: 'https://bicyclecards.com/history' },
  ],
  lessons: [
    {
      id: 'figuras-paris',
      title: 'Os reis de Paris',
      emoji: '👑',
      intro: [
        'Na França, cada região tinha o seu jeito de desenhar as cartas: os “padrões”. O padrão de Paris venceu os outros, como o de Rouen, por volta de 1780, e é o único que manteve os nomes escritos nas figuras.',
        'Os quatro reis são heróis da história e da Bíblia: Davi em espadas, Carlos Magno em copas, Júlio César em ouros e Alexandre, o Grande, em paus.',
        'As damas são Palas Atena (espadas), Judite (copas), Raquel (ouros) e Argine (paus). Os valetes são Ogier (espadas), La Hire, apelido do guerreiro Étienne de Vignolles (copas), Heitor (ouros) e Lancelote (paus).',
      ],
      items: [
        { term: 'Davi', meaning: 'o rei de espadas' },
        { term: 'Carlos Magno', meaning: 'o rei de copas' },
        { term: 'Júlio César', meaning: 'o rei de ouros' },
        { term: 'Alexandre', meaning: 'o rei de paus' },
        { term: 'Judite', meaning: 'a dama de copas' },
        { term: 'Lancelote', meaning: 'o valete de paus' },
      ],
      quiz: [
        { q: 'No padrão de Paris, quem é o rei de ouros?', options: ['Júlio César', 'Carlos Magno', 'Davi'], answer: 0 },
        { q: 'Quem é o rei de copas?', options: ['Carlos Magno', 'Alexandre', 'Júlio César'], answer: 0 },
        { q: 'Por volta de quando o padrão de Paris venceu os outros padrões franceses?', options: ['1780', '1480', '1902'], answer: 0 },
      ],
    },
    {
      id: 'ingles-bicycle',
      title: 'O padrão inglês e o Bicycle',
      emoji: '🚲',
      intro: [
        'O padrão inglês é o padrão de cartas mais conhecido do mundo. Ele veio do antigo padrão de Rouen, que desapareceu na França, e as figuras dele não têm nomes escritos.',
        'Em 1885, em Cincinnati, nos Estados Unidos, saiu o primeiro baralho Bicycle. O primeiro verso foi o “Fan”, mas o mais famoso é o “Rider”, de 1887, que nunca deixou de ser fabricado.',
        'Em 1894 nasceu a United States Playing Card Company, a empresa que fabrica o Bicycle.',
      ],
      items: [
        { term: 'padrão', meaning: 'o jeito de desenhar as cartas de uma região', how: 'Paris, Rouen, inglês…' },
        { term: 'Rider', meaning: 'o verso mais famoso do Bicycle (1887)' },
        { term: 'Bicycle', meaning: 'marca americana de baralho, desde 1885' },
      ],
      quiz: [
        { q: 'De que padrão francês veio o padrão inglês?', options: ['Do de Rouen', 'Do de Paris', 'Do de Marselha'], answer: 0 },
        { q: 'Qual verso do Bicycle nunca saiu de catálogo desde 1887?', options: ['O Rider', 'O Fan', 'O Paris'], answer: 0 },
      ],
    },
  ],
};

export const CURSO_TARO: MiniCourse = {
  id: 'taro',
  name: 'O tarô: do jogo ao oráculo',
  emoji: '🌙',
  kind: 'cartas',
  summary: 'O tarô nasceu como um jogo de cartas na Itália do século XV e ainda é jogado na França. Como ele virou, no século XVIII, um baralho de adivinhação.',
  sources: [
    { label: 'The World of Playing Cards, “History of tarot and playing cards”', url: 'https://www.wopc.co.uk/the-history-of-playing-cards/history-of-tarot-and-playing-cards-complete-timeline' },
    { label: 'Wikipedia, “Visconti-Sforza Tarot”', url: 'https://en.wikipedia.org/wiki/Visconti-Sforza_Tarot' },
    { label: 'Wikipedia, “French Tarot”', url: 'https://en.wikipedia.org/wiki/French_Tarot' },
    { label: 'Pagat, “French Tarot”', url: 'https://www.pagat.com/tarot/frtarot.html' },
  ],
  lessons: [
    {
      id: 'jogo-italiano',
      title: 'Um jogo italiano',
      emoji: '🇮🇹',
      intro: [
        'Os primeiros tarôs foram feitos no norte da Itália, no século XV, para um jogo de cartas: os “tarocchi”. O tarô Visconti-Sforza, por exemplo, foi pintado nos anos 1440 para os senhores de Milão.',
        'O tarô continua sendo jogo: o tarô francês, o “jeu de tarot”, é o jogo de cartas mais jogado na França depois da belote.',
        'O baralho dele tem 78 cartas: 4 naipes de 14 (do 1 ao 10, mais valete, cavaleiro, dama e rei), 21 trunfos numerados e uma carta especial, a Desculpa (o Louco), que deixa o jogador não seguir o naipe.',
      ],
      items: [
        { term: 'tarocchi', meaning: 'o jogo italiano do século XV para o qual o tarô foi feito' },
        { term: 'trunfos', meaning: 'as 21 cartas numeradas que ganham dos naipes' },
        { term: 'a Desculpa', meaning: 'o Louco: livra o jogador de seguir o naipe' },
        { term: 'cavaleiro', meaning: 'a figura a mais dos naipes do tarô' },
      ],
      quiz: [
        { q: 'Para que foram feitos os primeiros tarôs?', options: ['Para um jogo de cartas', 'Para adivinhar o futuro', 'Para ensinar a ler'], answer: 0 },
        { q: 'Quantas cartas tem o tarô francês?', options: ['78', '52', '40'], answer: 0 },
        { q: 'Que figura o tarô tem a mais nos naipes?', options: ['O cavaleiro', 'O bobo da corte', 'O bispo'], answer: 0 },
      ],
    },
    {
      id: 'oraculo',
      title: 'Como virou oráculo',
      emoji: '🔮',
      intro: [
        'Em 1781, o francês Antoine Court de Gébelin escreveu, no livro “Le Monde Primitif”, que o tarô vinha do “Livro de Thot”, do antigo Egito. Ele não deu nenhuma prova, e a história do jogo italiano mostra outra origem.',
        'Mesmo assim, foi daí que nasceu o uso do tarô para a adivinhação, o uso “ocultista”. Em 1909 saiu o baralho Rider-Waite-Smith, que é hoje o mais usado nesse uso.',
        'Este minicurso conta a história das cartas; não ensina a “ler a sorte”.',
      ],
      items: [
        { term: 'Court de Gébelin', meaning: 'quem disse, sem provas, que o tarô vinha do Egito (1781)' },
        { term: 'ocultista', meaning: 'o uso do tarô para adivinhação' },
        { term: 'Rider-Waite-Smith', meaning: 'o baralho de 1909 mais usado na adivinhação' },
      ],
      quiz: [
        { q: 'O que Court de Gébelin disse em 1781?', options: ['Que o tarô vinha do antigo Egito, sem provas', 'Que o tarô era um jogo italiano', 'Que o tarô foi inventado por ele'], answer: 0 },
        { q: 'Onde o tarô nasceu, segundo a história?', options: ['No norte da Itália, como jogo', 'No antigo Egito', 'Na China'], answer: 0 },
      ],
    },
  ],
};
