import type { MiniCourse } from '@/data/cursos/tipos';
import { comOpcoesEmbaralhadas } from '@/data/cursos/embaralhar';

/**
 * A trilha da área Arte (ideia do dono, 17/10/2026: “ia ser bom ter uma aba de arte, com pintura,
 * escultura, maquiagem…”; pedido para fazer: “faz o de alimentação e arte também”). As unidades usam o
 * motor dos minicursos (kind 'arte') e seguem a ordem combinada em `PENDENTES.md` (item 35): começar
 * por pintura e desenho, depois escultura, história da arte e maquiagem. Cada unidade termina num
 * exercício no Ateliê (o círculo cromático e os desafios de desenhar no papel).
 *
 * Fontes: as obras e os tratados citados em `sources`; os museus que guardam as obras (datas e medidas
 * das fichas dos acervos); e, para a cor, I. Newton, “Opticks” (1704) e M. E. Chevreul, “De la loi du
 * contraste simultané des couleurs” (1839).
 */

export const ARTE_COR: MiniCourse = {
  id: 'arte-cor',
  name: 'A cor',
  emoji: '🎨',
  kind: 'arte',
  summary: 'O círculo cromático, as cores primárias da tinta e da luz, as complementares e as cores quentes e frias.',
  sources: [
    { label: 'I. Newton, “Opticks” (1704)', url: 'https://www.gutenberg.org/ebooks/33504' },
    { label: 'M. E. Chevreul, “De la loi du contraste simultané des couleurs” (1839)', url: 'https://gallica.bnf.fr/' },
  ],
  lessons: [
    {
      id: 'circulo',
      title: 'O círculo cromático',
      emoji: '🌈',
      intro: [
        'Em 1704, no livro “Opticks”, Isaac Newton separou a luz branca num prisma e arrumou as cores num círculo. Os pintores adotaram a ideia: o círculo cromático mostra como as cores se relacionam.',
        'Na tinta tradicional, as primárias são o vermelho, o amarelo e o azul: misturando duas, saem as secundárias (laranja, verde e violeta). Na luz da tela do celular, as primárias são outras: vermelho, verde e azul (RGB), que somadas dão o branco. Na impressora, ciano, magenta e amarelo.',
        'As cores que ficam frente a frente no círculo são as complementares: vermelho e verde, azul e laranja, amarelo e violeta. Lado a lado, uma faz a outra parecer mais forte. Brinque com elas no Ateliê.',
      ],
      items: [
        { term: 'primárias da tinta', meaning: 'vermelho, amarelo e azul', how: 'O círculo tradicional dos pintores.' },
        { term: 'primárias da luz', meaning: 'vermelho, verde e azul (RGB)', how: 'Somadas, dão o branco: é a tela do celular.' },
        { term: 'complementares', meaning: 'as cores opostas no círculo', how: 'Vermelho e verde, azul e laranja, amarelo e violeta.' },
      ],
      quiz: [
        { q: 'Qual é a complementar do azul, no círculo dos pintores?', options: ['Laranja', 'Verde', 'Violeta'], answer: 0 },
        { q: 'Amarelo misturado com azul, na tinta, dá…', options: ['Verde', 'Laranja', 'Violeta'], answer: 0 },
        { q: 'Quais são as primárias da luz da tela?', options: ['Vermelho, verde e azul', 'Vermelho, amarelo e azul', 'Preto e branco'], answer: 0 },
      ],
    },
    {
      id: 'contraste',
      title: 'Quentes, frias e o contraste',
      emoji: '🔥',
      intro: [
        'As cores quentes (vermelhos, laranjas, amarelos) parecem vir para a frente e lembram o fogo e o sol. As frias (azuis, verdes, violetas) parecem ir para o fundo e lembram a água e a sombra. Os pintores usam isso para dar profundidade: o fundo da paisagem fica mais azulado.',
        'Em 1839, o químico francês Michel-Eugène Chevreul, que cuidava das tintas dos tapetes da fábrica Gobelins, em Paris, descreveu o contraste simultâneo: a mesma cor muda de aparência conforme a cor do lado. Um cinza perto do vermelho parece esverdeado.',
        'O livro dele inspirou os impressionistas e os pontilhistas, que punham as cores puras lado a lado para o olho misturar de longe.',
      ],
      items: [
        { term: 'cores quentes', meaning: 'vermelhos, laranjas e amarelos', how: 'Parecem vir para a frente.' },
        { term: 'cores frias', meaning: 'azuis, verdes e violetas', how: 'Parecem ir para o fundo.' },
        { term: 'contraste simultâneo', meaning: 'a cor muda conforme a vizinha', how: 'Chevreul, 1839.' },
      ],
      quiz: [
        { q: 'Por que o fundo das paisagens costuma ser azulado?', options: ['As cores frias parecem ir para longe', 'Tinta azul é mais barata', 'Por acaso'], answer: 0 },
        { q: 'Quem descreveu o contraste simultâneo, em 1839?', options: ['Chevreul', 'Newton', 'Monet'], answer: 0 },
      ],
    },
  ],
};

export const ARTE_DESENHO: MiniCourse = {
  id: 'arte-desenho',
  name: 'Desenho e perspectiva',
  emoji: '✏️',
  kind: 'arte',
  summary: 'Como desenhar profundidade numa folha plana: a linha do horizonte, o ponto de fuga, a luz e a sombra, e a regra dos terços.',
  sources: [
    { label: 'L. B. Alberti, “Da pintura” (1435), trad. Antonio da Silveira Mendonça (Ed. Unicamp)', url: 'https://openlibrary.org/search?q=Alberti+Della+pittura' },
    { label: 'J. T. Smith, “Remarks on Rural Scenery” (1797)', url: 'https://openlibrary.org/search?q=Remarks+on+Rural+Scenery+Smith' },
  ],
  lessons: [
    {
      id: 'perspectiva',
      title: 'O ponto de fuga',
      emoji: '🛤️',
      intro: [
        'Por volta de 1415, em Florença, o arquiteto Filippo Brunelleschi fez uma demonstração com um espelho e uma pintura do batistério: as linhas paralelas que vão para longe parecem se encontrar num ponto só. Em 1435, Leon Battista Alberti explicou o método no tratado “Da pintura”.',
        'É a perspectiva linear: desenhe a linha do horizonte (a altura dos seus olhos) e marque nela o ponto de fuga. Tudo o que vai para longe (os trilhos, as calçadas, as fileiras de árvores) aponta para esse ponto, e as coisas diminuem quanto mais perto dele.',
        'Teste no papel: o desafio dos trilhos, no Ateliê.',
      ],
      items: [
        { term: 'linha do horizonte', meaning: 'a altura dos olhos de quem olha', how: 'Fica no mesmo lugar que o horizonte de verdade.' },
        { term: 'ponto de fuga', meaning: 'onde as paralelas parecem se encontrar', how: 'Brunelleschi, por volta de 1415.' },
      ],
      quiz: [
        { q: 'Onde as linhas paralelas parecem se encontrar?', options: ['No ponto de fuga', 'No canto da folha', 'Em lugar nenhum'], answer: 0 },
        { q: 'Quem escreveu o tratado “Da pintura”, em 1435?', options: ['Leon Battista Alberti', 'Michelangelo', 'Isaac Newton'], answer: 0 },
      ],
    },
    {
      id: 'luz-composicao',
      title: 'Luz, sombra e composição',
      emoji: '💡',
      intro: [
        'Um círculo vira uma bola quando ganha luz e sombra. Escolha de onde vem a luz: o lado de lá fica mais escuro, e a bola joga uma sombra no chão, do lado oposto à luz. Os italianos chamam o contraste forte de claro e escuro de chiaroscuro; Caravaggio o levou ao extremo, com fundos quase pretos.',
        'Para arrumar a cena, uma dica antiga é a regra dos terços, escrita por John Thomas Smith em 1797: divida a folha em três, na altura e na largura, e ponha o que importa perto dos cruzamentos das linhas, e não bem no meio.',
        'As câmeras do celular mostram essa grade: ligue e repare como a foto muda.',
      ],
      items: [
        { term: 'chiaroscuro', meaning: 'o contraste forte de claro e escuro', how: 'Caravaggio, por volta de 1600.' },
        { term: 'sombra projetada', meaning: 'a sombra que o objeto joga no chão', how: 'Sempre do lado oposto à luz.' },
        { term: 'regra dos terços', meaning: 'o importante perto dos cruzamentos da grade', how: 'John Thomas Smith, 1797.' },
      ],
      quiz: [
        { q: 'A luz vem da esquerda. Para que lado vai a sombra da bola?', options: ['Para a direita', 'Para a esquerda', 'Para cima'], answer: 0 },
        { q: 'Na regra dos terços, onde fica o mais importante?', options: ['Perto dos cruzamentos da grade', 'Bem no meio', 'Fora da folha'], answer: 0 },
      ],
    },
  ],
};

export const ARTE_PINTURA: MiniCourse = {
  id: 'arte-pintura',
  name: 'Pintura e materiais',
  emoji: '🖌️',
  kind: 'arte',
  summary: 'Dos pigmentos de terra das cavernas ao azul mais caro do mundo, à tinta a óleo e ao tubinho de metal que levou os pintores para o ar livre.',
  sources: [
    { label: 'National Gallery (Londres), “Pigments through the ages” e notas técnicas', url: 'https://www.nationalgallery.org.uk/' },
    { label: 'Ministério da Cultura da França, gruta de Lascaux', url: 'https://archeologie.culture.gouv.fr/lascaux/' },
  ],
  lessons: [
    {
      id: 'pigmentos',
      title: 'Os pigmentos',
      emoji: '🪨',
      intro: [
        'As pinturas mais antigas que se conhecem estão em cavernas: na gruta Chauvet, na França, há desenhos de mais de 30 mil anos; na de Lascaux, de uns 17 mil. Foram feitos com terras coloridas (os ocres, vermelhos e amarelos, de óxido de ferro) e carvão.',
        'Pigmento é o pó que dá a cor; a tinta é o pigmento misturado com algo que o prende no papel ou na tela. O azul ultramar vinha da pedra lápis-lazúli, trazida do Afeganistão, e custava mais que ouro: por isso o manto da Virgem nas pinturas antigas é azul, a cor mais nobre.',
        'O azul da Prússia, feito em Berlim por volta de 1706, é considerado o primeiro pigmento sintético moderno.',
      ],
      items: [
        { term: 'pigmento', meaning: 'o pó que dá a cor', how: 'Terra, pedra, planta, ou feito em laboratório.' },
        { term: 'ocre', meaning: 'terra colorida por óxido de ferro', how: 'O pigmento das cavernas.' },
        { term: 'azul ultramar', meaning: 'o azul do lápis-lazúli', how: 'Caro como ouro: vinha do Afeganistão.' },
      ],
      quiz: [
        { q: 'Com que foram feitas as pinturas das cavernas?', options: ['Terras coloridas e carvão', 'Tinta acrílica', 'Lápis de cor'], answer: 0 },
        { q: 'Por que o azul ultramar era tão caro?', options: ['Vinha de uma pedra rara, de longe', 'Era proibido', 'Brilhava no escuro'], answer: 0 },
      ],
    },
    {
      id: 'oleo',
      title: 'Óleo, tubo e acrílica',
      emoji: '🧴',
      intro: [
        'No século XV, pintores de Flandres, como Jan van Eyck, aperfeiçoaram a tinta a óleo: o pigmento misturado com óleo de linhaça. Ela seca devagar, deixa misturar as cores na tela e faz camadas transparentes, brilhantes.',
        'Em 1841, o pintor americano John Goffe Rand inventou o tubo de tinta de metal, que se fecha com tampa. Antes, a tinta era guardada em bexigas de porco. Com o tubo, dava para levar a tinta para fora do ateliê, e os impressionistas pintaram ao ar livre.',
        'A tinta acrílica, dos anos 1950, seca rápido e se limpa com água. A aquarela usa pigmento com goma arábica e é transparente: o branco é o do papel.',
      ],
      items: [
        { term: 'tinta a óleo', meaning: 'pigmento com óleo de linhaça', how: 'Aperfeiçoada em Flandres, no século XV.' },
        { term: 'tubo de tinta', meaning: 'levou a pintura para o ar livre', how: 'John Goffe Rand, 1841.' },
        { term: 'aquarela', meaning: 'tinta transparente, com goma arábica', how: 'O branco vem do papel.' },
      ],
      quiz: [
        { q: 'Que invenção levou os pintores para o ar livre?', options: ['O tubo de tinta de metal', 'A lâmpada', 'O pincel de náilon'], answer: 0 },
        { q: 'Na aquarela, de onde vem o branco?', options: ['Do próprio papel', 'De uma tinta branca grossa', 'Do óleo'], answer: 0 },
      ],
    },
  ],
};

export const ARTE_ESCULTURA: MiniCourse = {
  id: 'arte-escultura',
  name: 'Escultura e cerâmica',
  emoji: '🗿',
  kind: 'arte',
  summary: 'Tirar, pôr ou derreter: as três maneiras de esculpir, o Davi de Michelangelo e a cerâmica marajoara.',
  sources: [
    { label: 'Galleria dell’Accademia (Florença), o Davi de Michelangelo', url: 'https://www.galleriaaccademiafirenze.it/' },
    { label: 'Museu Paraense Emílio Goeldi, coleção de cerâmica marajoara', url: 'https://www.museu-goeldi.br/' },
  ],
  lessons: [
    {
      id: 'tecnicas',
      title: 'Tirar, pôr ou derreter',
      emoji: '🔨',
      intro: [
        'Há três jeitos de fazer uma escultura. Esculpir é tirar material de um bloco (pedra, madeira) até a forma aparecer. Modelar é pôr e moldar material mole, como o barro e a cera. Fundir é derramar metal derretido num molde, como o bronze.',
        'Entre 1501 e 1504, Michelangelo esculpiu o Davi num único bloco de mármore que outros escultores tinham abandonado. A estátua tem 5,17 metros e está em Florença, na Galleria dell’Accademia.',
        'Para o bronze, a técnica mais antiga é a da cera perdida: modela-se em cera, cobre-se com barro, aquece-se (a cera derrete e sai) e derrama-se o metal no espaço vazio.',
      ],
      items: [
        { term: 'esculpir', meaning: 'tirar material de um bloco', how: 'O Davi, em mármore (1501–1504).' },
        { term: 'modelar', meaning: 'pôr e moldar material mole', how: 'Barro, cera, massinha.' },
        { term: 'cera perdida', meaning: 'molde de cera trocado por metal', how: 'A técnica antiga do bronze.' },
      ],
      quiz: [
        { q: 'Michelangelo fez o Davi…', options: ['Tirando mármore de um bloco', 'Modelando barro', 'Fundindo bronze'], answer: 0 },
        { q: 'Na cera perdida, o que acontece com a cera?', options: ['Derrete e dá lugar ao metal', 'Fica dentro da estátua', 'Vira mármore'], answer: 0 },
      ],
    },
    {
      id: 'ceramica',
      title: 'A cerâmica marajoara',
      emoji: '🏺',
      intro: [
        'Cerâmica é barro queimado: no fogo forte, a argila endurece e não volta mais a ser barro. É uma das artes mais antigas e espalhadas do mundo.',
        'Na Ilha de Marajó, no Pará, os povos que viveram ali, mais ou menos entre os anos 400 e 1400, fizeram urnas funerárias, vasos e tangas de cerâmica com desenhos geométricos pintados e em relevo, de linhas e espirais.',
        'Hoje, artesãs e artesãos de Marajó e de Icoaraci, em Belém, recriam esses desenhos, e muitas peças antigas estão no Museu Paraense Emílio Goeldi.',
      ],
      items: [
        { term: 'cerâmica', meaning: 'barro endurecido no fogo', how: 'Não volta a ser barro.' },
        { term: 'marajoara', meaning: 'a cerâmica antiga da Ilha de Marajó', how: 'Mais ou menos dos anos 400 a 1400.' },
      ],
      quiz: [
        { q: 'Onde fica a Ilha de Marajó?', options: ['No Pará', 'Em Santa Catarina', 'Na Bahia'], answer: 0 },
        { q: 'O que transforma o barro em cerâmica?', options: ['O fogo forte', 'A água', 'O sol só por um dia'], answer: 0 },
      ],
    },
  ],
};

export const ARTE_MOVIMENTOS: MiniCourse = {
  id: 'arte-movimentos',
  name: 'Movimentos da arte',
  emoji: '🖼️',
  kind: 'arte',
  summary: 'O Impressionismo, que pintou a luz, e o Modernismo brasileiro, da Semana de 22 ao Abaporu.',
  sources: [
    { label: 'Musée Marmottan Monet, “Impressão, nascer do sol” (1872)', url: 'https://www.marmottan.fr/' },
    { label: 'MALBA (Buenos Aires), Tarsila do Amaral, “Abaporu” (1928)', url: 'https://www.malba.org.ar/' },
  ],
  lessons: [
    {
      id: 'impressionismo',
      title: 'O Impressionismo',
      emoji: '🌅',
      intro: [
        'Em 1874, um grupo de pintores recusados pelo Salão oficial de Paris fez uma exposição por conta própria. Um dos quadros era “Impressão, nascer do sol” (1872), de Claude Monet. O crítico Louis Leroy usou o título para zombar do grupo, chamando-os de “impressionistas”, e o nome pegou.',
        'Eles pintavam ao ar livre, rápido, com pinceladas soltas, para pegar a luz de um momento. Monet pintou a mesma catedral e os mesmos montes de feno muitas vezes, em horas diferentes do dia.',
        'Na prática: olhe uma árvore de manhã e no fim da tarde. As cores mudam inteiras. É isso que eles queriam pintar.',
      ],
      items: [
        { term: 'Impressionismo', meaning: 'pintar a luz de um momento', how: 'Primeira exposição: Paris, 1874.' },
        { term: 'Claude Monet', meaning: 'pintou “Impressão, nascer do sol”', how: 'O quadro que deu nome ao grupo (1872).' },
      ],
      quiz: [
        { q: 'De onde veio o nome “Impressionismo”?', options: ['De um quadro de Monet', 'De um livro de química', 'De uma lei francesa'], answer: 0 },
        { q: 'O que os impressionistas queriam pintar?', options: ['A luz de um momento', 'Só retratos de reis', 'Só cenas bíblicas'], answer: 0 },
      ],
    },
    {
      id: 'modernismo',
      title: 'O Modernismo brasileiro',
      emoji: '🌵',
      intro: [
        'Em fevereiro de 1922, no Theatro Municipal de São Paulo, artistas e escritores fizeram a Semana de Arte Moderna: queriam uma arte nova e brasileira, sem copiar a Europa. Estavam lá Anita Malfatti, Di Cavalcanti, Mário de Andrade, Oswald de Andrade e Villa-Lobos.',
        'Em 1928, Tarsila do Amaral pintou o “Abaporu” (em tupi, “homem que come gente”) de presente para Oswald. Ele se inspirou no quadro para escrever o Manifesto Antropófago: comer a cultura de fora e transformá-la em algo nosso.',
        'O Abaporu, com o pé enorme e a cabeça pequena, sol e cacto, é um dos quadros brasileiros mais conhecidos do mundo, e hoje está no MALBA, em Buenos Aires.',
      ],
      items: [
        { term: 'Semana de 22', meaning: 'o marco do Modernismo no Brasil', how: 'Theatro Municipal de São Paulo, fevereiro de 1922.' },
        { term: 'Abaporu', meaning: '“homem que come gente”, em tupi', how: 'Tarsila do Amaral, 1928.' },
        { term: 'Antropofagia', meaning: 'comer a cultura de fora e fazer dela algo nosso', how: 'Manifesto de Oswald de Andrade, 1928.' },
      ],
      quiz: [
        { q: 'Quem pintou o Abaporu?', options: ['Tarsila do Amaral', 'Anita Malfatti', 'Candido Portinari'], answer: 0 },
        { q: 'Onde foi a Semana de Arte Moderna?', options: ['No Theatro Municipal de São Paulo', 'No Louvre', 'No Rio Amazonas'], answer: 0 },
      ],
    },
  ],
};

export const ARTE_MAQUIAGEM: MiniCourse = {
  id: 'arte-maquiagem',
  name: 'Maquiagem e cor',
  emoji: '💄',
  kind: 'arte',
  summary: 'O círculo cromático na pele: o subtom, os corretivos coloridos, a maquiagem do Egito antigo e do teatro kabuki, e os cuidados.',
  sources: [
    { label: 'The Metropolitan Museum of Art, “Kohl tubes” (Egito antigo)', url: 'https://www.metmuseum.org/' },
    { label: 'Japan Arts Council, “Kabuki: kumadori”', url: 'https://www2.ntj.jac.go.jp/unesco/kabuki/en/' },
    { label: 'Anvisa, cosméticos', url: 'https://www.gov.br/anvisa/pt-br/assuntos/cosmeticos' },
  ],
  lessons: [
    {
      id: 'pele',
      title: 'A cor na pele',
      emoji: '🎨',
      intro: [
        'Maquiagem também é teoria das cores. Por baixo do tom da pele (claro, médio, escuro) há o subtom: mais quente (puxado para o dourado), mais frio (puxado para o rosado) ou neutro. A base certa acompanha o subtom, e não só o tom.',
        'Os corretivos coloridos usam as complementares do círculo cromático: o verde disfarça a vermelhidão, e os tons pêssego e alaranjados disfarçam as olheiras arroxeadas ou azuladas.',
        'Os cuidados: teste um produto novo num pedacinho da pele antes, não divida rímel nem lápis de olho (passam infecções), tire tudo antes de dormir e use produtos regularizados na Anvisa.',
      ],
      items: [
        { term: 'subtom', meaning: 'a cor por baixo do tom: quente, frio ou neutro', how: 'A base certa acompanha o subtom.' },
        { term: 'corretivo verde', meaning: 'disfarça a vermelhidão', how: 'O verde é a complementar do vermelho.' },
        { term: 'corretivo pêssego', meaning: 'disfarça a olheira arroxeada', how: 'Laranja e azul são complementares.' },
      ],
      quiz: [
        { q: 'Que cor de corretivo disfarça a vermelhidão?', options: ['Verde', 'Vermelho', 'Rosa'], answer: 0 },
        { q: 'Por que não se deve dividir rímel?', options: ['Pode passar infecção', 'Acaba mais rápido', 'Muda de cor'], answer: 0 },
      ],
    },
    {
      id: 'historia',
      title: 'Do kohl ao kabuki',
      emoji: '👁️',
      intro: [
        'No Egito antigo, homens e mulheres contornavam os olhos com kohl, um pó escuro de minerais, guardado em potinhos e tubos que os museus ainda têm. Além de bonito, protegia do sol forte e tinha sentido religioso.',
        'No teatro kabuki do Japão, a maquiagem kumadori pinta linhas no rosto branco para mostrar quem é o personagem: o vermelho indica força e coragem, e o azul, os vilões.',
        'Hoje há a maquiagem de palco (forte, para ser vista de longe), a de cinema e a de efeitos especiais (cicatrizes, monstros, envelhecimento), feitas com látex, silicone e muita pintura.',
      ],
      items: [
        { term: 'kohl', meaning: 'o pó escuro dos olhos no Egito antigo', how: 'Guardado em tubos e potinhos.' },
        { term: 'kumadori', meaning: 'a maquiagem de linhas do kabuki', how: 'Vermelho: coragem; azul: vilões.' },
        { term: 'maquiagem de efeitos', meaning: 'cicatrizes, monstros, envelhecimento', how: 'Látex, silicone e pintura.' },
      ],
      quiz: [
        { q: 'O que era o kohl?', options: ['Um pó escuro para os olhos', 'Um batom vermelho', 'Uma peruca'], answer: 0 },
        { q: 'No kumadori, o vermelho mostra…', options: ['Força e coragem', 'Vilões', 'Tristeza'], answer: 0 },
      ],
    },
  ],
};

export const UNIDADES_ARTE: MiniCourse[] = [ARTE_COR, ARTE_DESENHO, ARTE_PINTURA, ARTE_ESCULTURA, ARTE_MOVIMENTOS, ARTE_MAQUIAGEM].map(comOpcoesEmbaralhadas);

/** Os ramos que ainda vão chegar (a lista do dono em `docs/areas-futuras.md`). */
export const PROXIMAS_UNIDADES_ARTE = [
  { emoji: '📷', nome: 'Fotografia', sobre: 'A luz, o enquadramento e a história, do daguerreótipo ao celular.' },
  { emoji: '👗', nome: 'Moda e figurino', sobre: 'O tecido, o corte e a roupa como linguagem, no palco e na rua.' },
  { emoji: '👾', nome: 'Arte digital e pixel art', sobre: 'Desenhar no computador, como o Linu em pixel.' },
  { emoji: '🪶', nome: 'Artes do corpo', sobre: 'A pintura corporal dos povos indígenas, a tatuagem e o grafismo.' },
  { emoji: '🧺', nome: 'Artesanato do mundo', sobre: 'A renda, a cestaria, o bordado e o barro de cada lugar.' },
];
