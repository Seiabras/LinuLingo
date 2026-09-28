import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do francês (ver src/data/artigos.ts). */
export const ARTIGOS_FR: ArticleSeed[] = [
  {
    id: 'fr-a-baguette',
    level: 'A1.1',
    title: 'La baguette',
    emoji: '🥖',
    paragraphs: [
      'En France, on mange du pain tous les jours. La baguette est un pain long et fin.',
      "On achète la baguette à la boulangerie, le matin. Elle est bonne avec du beurre et de la confiture.",
    ],
    translation: [
      'Na França, come-se pão todos os dias. A baguete é um pão comprido e fino.',
      'Compra-se a baguete na padaria, de manhã. Ela é gostosa com manteiga e geleia.',
    ],
    glossary: [
      ['baguette', 'baguete, o pão comprido'],
      ['fin', 'fino'],
      ['boulangerie', 'padaria'],
      ['beurre', 'manteiga'],
      ['confiture', 'geleia'],
    ],
    forms: [
      ['achète', 'acheter'],
    ],
    questions: [
      { q: 'Como é a baguete?', options: ['Redonda e grande', 'Comprida e fina', 'Doce e pequena'], answer: 1 },
      { q: 'Onde se compra a baguete?', options: ['Na padaria', 'Na farmácia', 'No correio'], answer: 0 },
    ],
  },
  {
    id: 'fr-a-bise',
    level: 'A2.1',
    title: 'La bise',
    emoji: '😘',
    paragraphs: [
      "En France, les amis et la famille se disent bonjour avec la bise : on se touche les joues et on fait un petit bruit de bisou.",
      "Mais combien de bises ? À Paris, on en fait souvent deux ; dans d'autres régions, trois ou même quatre. Au travail et avec les inconnus, on se serre plutôt la main.",
    ],
    translation: [
      'Na França, os amigos e a família se cumprimentam com «la bise»: encostam as bochechas e fazem um barulhinho de beijo.',
      'Mas quantos beijinhos? Em Paris, muitas vezes são dois; em outras regiões, três ou até quatro. No trabalho e com desconhecidos, é mais comum apertar a mão.',
    ],
    glossary: [
      ['bruit', 'barulho'],
      ['deux', 'dois'],
    ],
    forms: [
      ['disent', 'dire'],
    ],
    questions: [
      { q: 'Quantas «bises» se costuma dar em Paris?', options: ['Uma', 'Duas', 'Cinco'], answer: 1 },
      { q: 'Como se cumprimenta um desconhecido no trabalho?', options: ['Com a bise', 'Com um aperto de mão', 'Com um abraço'], answer: 1 },
    ],
  },
  {
    id: 'fr-a-tour',
    level: 'B1.1',
    title: 'Le Tour de France',
    emoji: '🚴',
    paragraphs: [
      "Le Tour de France est la course cycliste la plus célèbre du monde. Il existe depuis 1903 et il a lieu chaque année en juillet, pendant environ trois semaines.",
      "Les coureurs traversent les villages, les plaines et les montagnes des Alpes et des Pyrénées. Le premier du classement porte le maillot jaune. Traditionnellement, la dernière étape arrive à Paris, sur les Champs-Élysées, et des millions de personnes regardent la course au bord des routes.",
    ],
    translation: [
      'O Tour de France é a corrida de ciclismo mais famosa do mundo. Existe desde 1903 e acontece todo ano em julho, durante cerca de três semanas.',
      'Os ciclistas atravessam vilarejos, planícies e as montanhas dos Alpes e dos Pireneus. O primeiro da classificação veste a camisa amarela. Tradicionalmente, a última etapa chega a Paris, na avenida dos Champs-Élysées, e milhões de pessoas assistem à corrida na beira das estradas.',
    ],
    glossary: [
      ['environ', 'cerca de'],
      ['semaines', 'semanas'],
      ['jaune', 'amarelo'],
      ['traditionnellement', 'tradicionalmente'],
      ['bord', 'beira'],
    ],
    questions: [
      { q: 'Desde quando existe o Tour de France?', options: ['1903', '1950', '1998'], answer: 0 },
      { q: 'O que veste o primeiro da classificação?', options: ['A camisa verde', 'A camisa amarela', 'Um capacete dourado'], answer: 1 },
      { q: 'Onde costuma terminar a corrida?', options: ['Em Marselha', 'Nos Champs-Élysées, em Paris', 'Nos Alpes'], answer: 1 },
    ],
  },
  {
    id: 'fr-a-canal',
    level: 'B2.1',
    title: 'Le canal du Midi',
    emoji: '⛵',
    paragraphs: [
      "Construit entre 1666 et 1681 sous la direction de Pierre-Paul Riquet, le canal du Midi relie Toulouse à la Méditerranée sur environ 240 kilomètres. Avec la Garonne, il permettait de passer de l'Atlantique à la Méditerranée sans faire le tour de l'Espagne.",
      "L'ouvrage compte des dizaines d'écluses, des ponts et des tunnels, et Riquet a dû résoudre un problème difficile : trouver assez d'eau pour le remplir au point le plus haut. Il a imaginé un système de réservoirs dans la Montagne Noire.",
      "Le canal n'est presque plus utilisé pour le commerce, mais il attire aujourd'hui les touristes, qui le parcourent en bateau ou à vélo sous les platanes. Il est inscrit au patrimoine mondial de l'UNESCO depuis 1996.",
    ],
    translation: [
      'Construído entre 1666 e 1681 sob a direção de Pierre-Paul Riquet, o canal du Midi liga Toulouse ao Mediterrâneo em cerca de 240 quilômetros. Junto com o rio Garonne, permitia passar do Atlântico ao Mediterrâneo sem dar a volta na Espanha.',
      'A obra tem dezenas de eclusas, pontes e túneis, e Riquet teve de resolver um problema difícil: achar água suficiente para enchê-lo no ponto mais alto. Ele imaginou um sistema de reservatórios na Montagne Noire.',
      'O canal quase não é mais usado para o comércio, mas hoje atrai turistas, que o percorrem de barco ou de bicicleta sob os plátanos. Está na lista do patrimônio mundial da UNESCO desde 1996.',
    ],
    glossary: [
      ['relie', 'liga'],
      ['écluses', 'eclusas'],
      ['système', 'sistema'],
      ['parcourent', 'percorrem'],
    ],
    forms: [
      ['dû', 'devoir'],
    ],
    questions: [
      { q: 'Que mares o canal, com o Garonne, permitia ligar?', options: ['O Atlântico e o Mediterrâneo', 'O mar do Norte e o Báltico', 'O Mediterrâneo e o mar Negro'], answer: 0 },
      { q: 'Qual problema Riquet teve de resolver?', options: ['Achar água para o ponto mais alto', 'Atravessar os Alpes', 'Pagar os trabalhadores'], answer: 0 },
      { q: 'Para que se usa o canal hoje?', options: ['Sobretudo para o comércio', 'Sobretudo para o turismo', 'Para a pesca industrial'], answer: 1 },
    ],
  },
  {
    id: 'fr-a-serments',
    level: 'C1.1',
    title: 'Les Serments de Strasbourg',
    emoji: '📜',
    paragraphs: [
      "En 842, deux petits-fils de Charlemagne, Louis le Germanique et Charles le Chauve, s'allient contre leur frère aîné, Lothaire. Pour sceller leur alliance devant leurs armées, ils prêtent serment à Strasbourg, chacun dans la langue que comprennent les soldats de l'autre.",
      "Le texte, rapporté par l'historien Nithard, est considéré comme le plus ancien document écrit dans une langue romane distincte du latin, l'ancêtre lointain du français, à côté d'un serment en langue germanique. On y lit par exemple « Pro Deo amur », là où le latin aurait dit « Pro Dei amore ».",
      "L'année suivante, le traité de Verdun partage l'empire entre les trois frères : une frontière qui préfigure, de loin, celles de la France et de l'Allemagne.",
    ],
    translation: [
      'Em 842, dois netos de Carlos Magno, Luís, o Germânico, e Carlos, o Calvo, se aliam contra o irmão mais velho, Lotário. Para selar a aliança diante dos seus exércitos, fazem um juramento em Estrasburgo, cada um na língua que os soldados do outro entendem.',
      'O texto, registrado pelo historiador Nitardo, é considerado o documento escrito mais antigo numa língua românica diferente do latim, a antepassada distante do francês, ao lado de um juramento em língua germânica. Lê-se ali, por exemplo, «Pro Deo amur», onde o latim teria dito «Pro Dei amore».',
      'No ano seguinte, o tratado de Verdun divide o império entre os três irmãos: uma fronteira que prefigura, de longe, as da França e da Alemanha.',
    ],
    glossary: [
      ['sceller', 'selar'],
      ['distincte', 'diferente'],
      ['latin', 'latim'],
      ['germanique', 'germânica'],
      ['amur', '«amor», na grafia de 842'],
    ],
    forms: [
      ['aurait', 'avoir'],
    ],
    questions: [
      { q: 'Por que cada rei jurou na língua do outro?', options: ['Para que os soldados do outro entendessem', 'Por causa de uma lei da Igreja', 'Porque não sabiam latim'], answer: 0 },
      { q: 'Por que o texto é importante para a história do francês?', options: ['É o documento mais antigo numa língua românica diferente do latim', 'É a primeira gramática francesa', 'Foi escrito pela Académie française'], answer: 0 },
      { q: 'O que aconteceu no ano seguinte?', options: ['O tratado de Verdun dividiu o império', 'Carlos Magno foi coroado', 'Foi fundada a Sorbonne'], answer: 0 },
    ],
  },
];
