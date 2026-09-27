import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do espanhol (ver src/data/artigos.ts). */
export const ARTIGOS_ES: ArticleSeed[] = [
  {
    id: 'es-a-mate',
    level: 'A1.1',
    title: 'El mate',
    emoji: '🧉',
    paragraphs: [
      'En Argentina, en Uruguay y en Paraguay, mucha gente toma mate. El mate es una bebida caliente, hecha con hojas de yerba.',
      'Se toma en un vaso pequeño, con una bombilla. Con los amigos, el mate pasa de mano en mano.',
    ],
    translation: [
      'Na Argentina, no Uruguai e no Paraguai, muita gente toma mate. O mate é uma bebida quente, feita com folhas de erva-mate.',
      'Toma-se numa cuia pequena, com uma bomba (canudo de metal). Com os amigos, o mate passa de mão em mão.',
    ],
    glossary: [
      ['mate', 'mate (bebida de erva)'],
      ['hecha', 'feita'],
      ['hojas', 'folhas'],
      ['yerba', 'erva-mate'],
      ['bombilla', 'bomba, o canudo de metal do mate'],
    ],
    questions: [
      { q: 'O mate é uma bebida…', options: ['fria, de frutas', 'quente, de folhas de erva', 'com leite e café'], answer: 1 },
      { q: 'Como os amigos tomam mate?', options: ['Cada um no seu copo', 'Passando de mão em mão', 'Só à noite'], answer: 1 },
    ],
  },
  {
    id: 'es-a-tapas',
    level: 'A2.1',
    title: 'Ir de tapas',
    emoji: '🍢',
    paragraphs: [
      'En España, una tapa es una porción pequeña de comida que se come con una bebida: aceitunas, tortilla de patatas, jamón, queso o calamares.',
      '«Ir de tapas» es salir con los amigos y pasar de un bar a otro, comer un poco en cada uno y hablar mucho. En algunas ciudades, como Granada, en muchos bares la tapa es gratis cuando pides una bebida.',
    ],
    translation: [
      'Na Espanha, uma tapa é uma porção pequena de comida que se come com uma bebida: azeitonas, tortilha de batata, presunto, queijo ou lulas.',
      '«Ir de tapas» é sair com os amigos e passar de um bar a outro, comer um pouco em cada um e conversar muito. Em algumas cidades, como Granada, em muitos bares a tapa é grátis quando você pede uma bebida.',
    ],
    glossary: [
      ['tapa', 'tapa, porçãozinha de comida'],
      ['tapas', 'tapas'],
      ['porción', 'porção'],
      ['tortilla de patatas', 'omelete espessa de batata'],
      ['jamón', 'presunto cru'],
      ['poco', 'pouco'],
      ['gratis', 'grátis'],
    ],
    forms: [
      ['pides', 'pedir'],
    ],
    questions: [
      { q: 'O que é uma tapa?', options: ['Uma bebida doce', 'Uma porção pequena de comida', 'Um tipo de dança'], answer: 1 },
      { q: 'O que acontece em muitos bares de Granada?', options: ['A tapa é grátis com a bebida', 'Só servem café', 'Fecham cedo'], answer: 0 },
    ],
  },
  {
    id: 'es-a-muertos',
    level: 'B1.1',
    title: 'El Día de Muertos',
    emoji: '💀',
    paragraphs: [
      'En México, el 1 y el 2 de noviembre las familias recuerdan a sus muertos con alegría. En las casas preparan un altar, la ofrenda, con fotos de las personas que ya se fueron, velas, flores de cempasúchil y la comida que más les gustaba.',
      'También se come pan de muerto y se regalan calaveras de azúcar con nombres escritos. Muchas familias pasan la noche en el cementerio, junto a las tumbas, con música y comida. En 2008, la UNESCO incluyó esta tradición en su lista del patrimonio cultural inmaterial.',
    ],
    translation: [
      'No México, em 1º e 2 de novembro as famílias lembram os seus mortos com alegria. Nas casas preparam um altar, a oferenda, com fotos das pessoas que já se foram, velas, flores de cempasúchil (cravo-de-defunto) e a comida de que elas mais gostavam.',
      'Também se come «pan de muerto» e se dão caveiras de açúcar com nomes escritos. Muitas famílias passam a noite no cemitério, junto aos túmulos, com música e comida. Em 2008, a UNESCO incluiu essa tradição na sua lista do patrimônio cultural imaterial.',
    ],
    glossary: [
      ['preparan', 'preparam'],
      ['fotos', 'fotos'],
      ['velas', 'velas'],
      ['cempasúchil', 'cravo-de-defunto, flor laranja'],
      ['cementerio', 'cemitério'],
      ['tumbas', 'túmulos'],
      ['incluyó', 'incluiu'],
      ['patrimonio cultural inmaterial', 'patrimônio cultural imaterial'],
    ],
    questions: [
      { q: 'Em que dias é o Día de Muertos?', options: ['24 e 25 de dezembro', '1º e 2 de novembro', '6 de janeiro'], answer: 1 },
      { q: 'O que se põe na oferenda?', options: ['Fotos, velas, flores e comida', 'Só dinheiro', 'Presentes de Natal'], answer: 0 },
      { q: 'Onde muitas famílias passam a noite?', options: ['Na praia', 'No cemitério', 'Numa igreja'], answer: 1 },
    ],
  },
  {
    id: 'es-a-machu-picchu',
    level: 'B2.1',
    title: 'Machu Picchu',
    emoji: '⛰️',
    paragraphs: [
      'En las montañas de la región de Cusco, en Perú, está Machu Picchu, una ciudadela inca construida a mediados del siglo XV, probablemente por orden del emperador Pachacútec. Está a unos 2.430 metros sobre el nivel del mar, entre picos cubiertos de selva.',
      'Los incas levantaron templos, casas y terrazas de cultivo con piedras que encajan casi perfectamente, sin usar mortero. El lugar fue abandonado en el siglo XVI y el explorador estadounidense Hiram Bingham lo dio a conocer al mundo en 1911, aunque los campesinos de la zona ya lo conocían.',
      'Desde 1983 es Patrimonio de la Humanidad. Hoy recibe a más de un millón de visitantes al año, y el gobierno peruano limita el número de entradas diarias para proteger las ruinas.',
    ],
    translation: [
      'Nas montanhas da região de Cusco, no Peru, fica Machu Picchu, uma cidadela inca construída em meados do século XV, provavelmente por ordem do imperador Pachacútec. Fica a uns 2.430 metros acima do nível do mar, entre picos cobertos de selva.',
      'Os incas ergueram templos, casas e terraços de cultivo com pedras que se encaixam quase perfeitamente, sem usar argamassa. O lugar foi abandonado no século XVI e o explorador norte-americano Hiram Bingham o deu a conhecer ao mundo em 1911, embora os camponeses da região já o conhecessem.',
      'Desde 1983 é Patrimônio da Humanidade. Hoje recebe mais de um milhão de visitantes por ano, e o governo peruano limita o número de entradas diárias para proteger as ruínas.',
    ],
    glossary: [
      ['inca', 'inca'],
      ['incas', 'os incas'],
      ['siglo', 'século'],
      ['probablemente', 'provavelmente'],
      ['nivel', 'nível'],
      ['abandonado', 'abandonado'],
      ['estadounidense', 'norte-americano'],
      ['zona', 'região, zona'],
      ['millón', 'milhão'],
      ['número', 'número'],
    ],
    questions: [
      { q: 'Como as pedras foram assentadas?', options: ['Com muito cimento', 'Encaixadas quase perfeitamente, sem argamassa', 'Com pregos de metal'], answer: 1 },
      { q: 'O que o texto diz sobre 1911?', options: ['Foi quando os incas construíram a cidade', 'Um explorador a deu a conhecer ao mundo, mas os camponeses já a conheciam', 'Foi quando virou Patrimônio da Humanidade'], answer: 1 },
      { q: 'Por que o governo limita as entradas?', options: ['Para proteger as ruínas', 'Por causa do clima', 'Para cobrar mais caro'], answer: 0 },
    ],
  },
  {
    id: 'es-a-garcia-marquez',
    level: 'C1.1',
    title: 'García Márquez y el realismo mágico',
    emoji: '📚',
    paragraphs: [
      'El escritor colombiano Gabriel García Márquez (1927–2014), «Gabo» para sus lectores, nació en Aracataca, un pueblo del Caribe colombiano cuyas historias, contadas por sus abuelos, marcaron toda su obra. Trabajó durante años como periodista antes de dedicarse por completo a la literatura.',
      'En 1967 publicó «Cien años de soledad», la saga de la familia Buendía en el pueblo imaginario de Macondo, donde lo extraordinario — una lluvia que dura casi cinco años, una mujer que sube al cielo — se cuenta con la misma naturalidad que lo cotidiano. Ese estilo se conoce como realismo mágico.',
      'La novela vendió decenas de millones de ejemplares y fue traducida a decenas de idiomas. En 1982, García Márquez recibió el Premio Nobel de Literatura.',
    ],
    translation: [
      'O escritor colombiano Gabriel García Márquez (1927–2014), «Gabo» para os seus leitores, nasceu em Aracataca, um povoado do Caribe colombiano cujas histórias, contadas pelos avós, marcaram toda a sua obra. Trabalhou durante anos como jornalista antes de se dedicar por completo à literatura.',
      'Em 1967 publicou «Cem anos de solidão», a saga da família Buendía no povoado imaginário de Macondo, onde o extraordinário — uma chuva que dura quase cinco anos, uma mulher que sobe ao céu — é contado com a mesma naturalidade que o cotidiano. Esse estilo é conhecido como realismo mágico.',
      'O romance vendeu dezenas de milhões de exemplares e foi traduzido para dezenas de idiomas. Em 1982, García Márquez recebeu o Prêmio Nobel de Literatura.',
    ],
    glossary: [
      ['cuyas', 'cujas'],
      ['saga', 'saga'],
      ['extraordinario', 'o extraordinário'],
      ['cotidiano', 'o cotidiano'],
      ['mágico', 'mágico'],
    ],
    questions: [
      { q: 'Onde se passa «Cien años de soledad»?', options: ['Em Bogotá', 'No povoado imaginário de Macondo', 'Em Aracataca, com nomes reais'], answer: 1 },
      { q: 'O que caracteriza o realismo mágico, segundo o texto?', options: ['Contar o extraordinário com a naturalidade do cotidiano', 'Histórias só com magos e dragões', 'Romances policiais'], answer: 0 },
      { q: 'Quando ele recebeu o Nobel?', options: ['1967', '1982', '2014'], answer: 1 },
    ],
  },
];
