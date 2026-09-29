import type { GlottologRow } from './linguas-glottolog';

/**
 * Tipos de línguas além das línguas naturais faladas: as artificiais (por propósito, origem e grau
 * de desenvolvimento), as formais e computacionais, as de contato (pidgins, crioulos e mistas), as
 * controladas e a divisão por modalidade (oral, de sinais, tátil) e por estado (vivas, mortas,
 * protolínguas). Os pidgins e as línguas mistas de cada lugar vêm do Glottolog.
 */

// ---------- línguas artificiais ----------

export type ConlangPurpose = 'auxiliar' | 'artistica' | 'engenharia';
export type ConlangOrigin = 'a priori' | 'a posteriori' | 'mista';
export type ConlangStage = 'completa' | 'parcial' | 'esboco';

export const PURPOSES: Record<ConlangPurpose, { label: string; emoji: string; text: string }> = {
  auxiliar: {
    label: 'Auxiliares (auxlangs)',
    emoji: '🤝',
    text: 'Feitas para a comunicação internacional: neutras (não são a língua de nenhum país) e simples de aprender, para pessoas de línguas maternas diferentes se entenderem.',
  },
  artistica: {
    label: 'Artísticas e fictícias (artlangs)',
    emoji: '🎭',
    text: 'Criadas para dar profundidade a uma obra — um livro, um filme, uma série, um jogo — ou pelo prazer estético de inventar uma língua.',
  },
  engenharia: {
    label: 'De engenharia e lógicas (englangs)',
    emoji: '🧪',
    text: 'Criadas para testar uma ideia: eliminar a ambiguidade, pensar com o mínimo de palavras, pôr o máximo de informação em cada palavra ou ver se a língua muda o jeito de pensar.',
  },
};

export const ORIGINS: Record<ConlangOrigin, { label: string; text: string }> = {
  'a priori': { label: 'A priori', text: 'Criada do zero: o vocabulário e a gramática não vêm de nenhuma língua natural.' },
  'a posteriori': { label: 'A posteriori', text: 'Montada com palavras, raízes ou gramática de línguas que já existem.' },
  mista: { label: 'Mista', text: 'Um pouco de cada: raízes inventadas com som ou gramática de línguas reais, ou palavras reais transformadas até ficarem irreconhecíveis.' },
};

export const STAGES: Record<ConlangStage, { label: string; text: string }> = {
  completa: { label: 'Completa', text: 'Gramática consolidada e vocabulário amplo: dá para conversar sobre qualquer coisa no dia a dia.' },
  parcial: { label: 'Desenvolvida, mas incompleta', text: 'Tem muita gramática e vocabulário, mas o criador não terminou; os fãs completam o resto.' },
  esboco: { label: 'Esboço (gloss)', text: 'Só algumas palavras ou regras, o bastante para dar sabor a trechos de uma história.' },
};

export interface Conlang {
  id: string;
  name: string;
  emoji: string;
  creator: string;
  year: string;
  purpose: ConlangPurpose;
  origin: ConlangOrigin;
  stage: ConlangStage;
  /** a obra ou a ideia por trás */
  about: string;
  /** o que ela tem de interessante */
  text: string;
  /** frases de exemplo: [na língua, em português] */
  samples?: [string, string][];
  /** por que a classificação pode ser discutida */
  note?: string;
  /** a árvore genealógica, quando a língua tem parentes (dentro da ficção ou de verdade) */
  tree?: ConlangTree;
}

/** Um galho da árvore: a língua, uma explicação curta e as filhas. */
export interface ConlangTreeNode {
  name: string;
  note?: string;
  children?: ConlangTreeNode[];
}

export interface ConlangTree {
  /** «Dentro da ficção» (a história que o autor inventou) ou «De verdade» (quem veio de quem no mundo real) */
  kind: 'ficção' | 'real';
  root: ConlangTreeNode;
  /** o nome (igual ao de um galho) que fica destacado */
  highlight: string;
  note?: string;
}

/** As línguas dos elfos de Tolkien, na versão tardia (a do Silmarillion). */
const ARVORE_ELFICA: ConlangTreeNode = {
  name: 'Quendiano primitivo',
  note: 'a língua dos primeiros elfos',
  children: [
    { name: 'Avarin', note: 'as línguas dos elfos que não fizeram a Grande Jornada para o oeste' },
    {
      name: 'Eldarin comum',
      note: 'a língua dos elfos que partiram na Grande Jornada',
      children: [
        { name: 'Quenya', note: 'dos Vanyar e dos Noldor, em Valinor' },
        {
          name: 'Telerin comum',
          children: [
            { name: 'Telerin', note: 'dos Teleri que chegaram a Aman' },
            { name: 'Sindarin', note: 'dos elfos cinzentos, que ficaram em Beleriand' },
            { name: 'Nandorin', note: 'dos elfos silvestres' },
          ],
        },
      ],
    },
  ],
};
const NOTA_ELFICA =
  'Tolkien mudou essa árvore várias vezes. Nos anos 1930, a língua com som de galês se chamava «noldorin» e era a dos noldor; na versão final, ela virou o sindarin dos elfos que ficaram na Terra-média.';

const ARVORE_ESPERANTO: ConlangTreeNode = {
  name: 'Esperanto',
  note: '1887',
  children: [
    {
      name: 'Ido',
      note: '1907, uma reforma do esperanto',
      children: [{ name: 'Novial', note: '1928, criado pelo linguista dinamarquês Otto Jespersen, que antes defendia o ido' }],
    },
  ],
};

export const CONLANGS: Conlang[] = [
  {
    id: 'esperanto',
    name: 'Esperanto',
    emoji: '💚',
    creator: 'L. L. Zamenhof',
    year: '1887',
    purpose: 'auxiliar',
    origin: 'a posteriori',
    stage: 'completa',
    about: 'Um oftalmologista de Białystok, cidade onde se falavam polonês, russo, iídiche e alemão, quis uma segunda língua comum para a humanidade.',
    text: 'É a língua artificial mais falada do mundo: as estimativas vão de dezenas de milhares a 2 milhões de falantes, e há até falantes nativos, filhos de casais que se conheceram pelo esperanto. As raízes vêm de línguas românicas, germânicas e eslavas; a gramática quase não tem exceções, e os substantivos sempre terminam em -o, os adjetivos em -a.',
    samples: [
      ['Saluton! Kiel vi fartas?', 'Olá! Como você vai?'],
      ['Mi lernas Esperanton.', 'Eu aprendo esperanto.'],
    ],
    tree: { kind: 'real', root: ARVORE_ESPERANTO, highlight: 'Esperanto', note: 'Línguas artificiais também têm parentes de verdade: o ido nasceu de uma reforma do esperanto, e o novial aproveitou ideias do ido.' },
  },
  {
    id: 'volapuk',
    name: 'Volapük',
    emoji: '🌐',
    creator: 'Johann Martin Schleyer',
    year: '1879',
    purpose: 'auxiliar',
    origin: 'mista',
    stage: 'completa',
    about: 'Um padre alemão contou que a língua lhe veio num sonho.',
    text: 'Foi a primeira língua auxiliar a fazer sucesso, com congressos e centenas de clubes nos anos 1880. O nome vem do inglês: «vol» (de «world», mundo) e «pük» (de «speak», falar) — as palavras foram tão transformadas que ninguém as reconhece. Perdeu o público para o esperanto, mais fácil.',
    samples: [['O Fat obas, kel binol in süls', 'Ó Pai nosso, que estás nos céus']],
    note: 'Raízes reais (sobretudo do inglês e do alemão), mas deformadas até parecerem inventadas.',
  },
  {
    id: 'ido',
    name: 'Ido',
    emoji: '🔧',
    creator: 'Louis Couturat e Louis de Beaufront',
    year: '1907',
    purpose: 'auxiliar',
    origin: 'a posteriori',
    stage: 'completa',
    about: 'Uma reforma do esperanto, feita por uma comissão internacional.',
    text: 'Tira as letras com acento do esperanto e deixa as palavras mais parecidas com as das línguas europeias. O nome quer dizer «descendente» em esperanto. Dividiu o movimento: a maioria ficou com o esperanto.',
    samples: [['Quale vu standas?', 'Como você está?']],
    tree: { kind: 'real', root: ARVORE_ESPERANTO, highlight: 'Ido' },
  },
  {
    id: 'interlingua',
    name: 'Interlingua',
    emoji: '📰',
    creator: 'IALA (Alexander Gode)',
    year: '1951',
    purpose: 'auxiliar',
    origin: 'a posteriori',
    stage: 'completa',
    about: 'Uma associação internacional de linguistas procurou as palavras que as línguas europeias já têm em comum.',
    text: 'Quem fala português, espanhol ou italiano lê um texto em interlingua quase sem estudar: a ideia não era criar palavras novas, e sim extrair o vocabulário internacional que já existe. Foi usada em resumos de revistas científicas.',
    samples: [['Interlingua es un lingua auxiliar international.', 'Interlingua é uma língua auxiliar internacional.']],
  },
  {
    id: 'elefen',
    name: 'Lingua Franca Nova (Elefen)',
    emoji: '🌊',
    creator: 'George Boeree',
    year: '1998',
    purpose: 'auxiliar',
    origin: 'a posteriori',
    stage: 'completa',
    about: 'Uma língua auxiliar com o nome da antiga língua de contato do Mediterrâneo, começada nos anos 1960 e publicada em 1998.',
    text: 'O vocabulário vem das línguas românicas (português, espanhol, francês, italiano e catalão), e a gramática é simples como a de um crioulo: o verbo nunca muda, e o tempo vai numa partícula — «me ia come», eu comi.',
    samples: [['Bon dia! Me es Ana.', 'Bom dia! Eu sou a Ana.']],
  },
  {
    id: 'solresol',
    name: 'Solresol',
    emoji: '🎼',
    creator: 'François Sudre',
    year: '1827',
    purpose: 'auxiliar',
    origin: 'a priori',
    stage: 'completa',
    about: 'Um músico francês fez uma língua com as sete notas musicais.',
    text: 'Cada palavra é uma sequência de notas — dó, ré, mi, fá, sol, lá, si —, então dá para falar, cantar, tocar num instrumento, pintar com sete cores ou escrever com sete números. O próprio nome, «solresol», quer dizer «língua». É uma das primeiras línguas a priori, sem nada de nenhuma língua natural.',
    samples: [
      ['si', 'sim'],
      ['do', 'não'],
      ['solresol', 'língua'],
    ],
  },
  {
    id: 'lingua-ignota',
    name: 'Lingua Ignota',
    emoji: '🕯️',
    creator: 'Hildegarda de Bingen',
    year: 'séc. XII',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'esboco',
    about: 'Uma abadessa alemã, compositora e mística, registrou um glossário de palavras inventadas.',
    text: 'São cerca de mil palavras, quase todas substantivos (partes do corpo, plantas, graus da Igreja), com letras próprias. É das mais antigas línguas inventadas conhecidas. Não se sabe para que servia: talvez uma língua mística, talvez secreta.',
  },
  {
    id: 'quenya',
    name: 'Quenya',
    emoji: '🧝',
    creator: 'J. R. R. Tolkien',
    year: 'desde 1915',
    purpose: 'artistica',
    origin: 'mista',
    stage: 'parcial',
    about: 'O Senhor dos Anéis e O Silmarillion: a língua antiga dos elfos.',
    text: 'Tolkien, que era filólogo, dizia que inventou as histórias para dar um mundo às suas línguas, e não o contrário. O quenya tem o som e as terminações de caso inspirados no finlandês, com toques do latim e do grego, e se escreve com as tengwar, letras criadas por ele.',
    samples: [
      ['elen', 'estrela'],
      ['aiya', 'salve! (saudação)'],
    ],
    note: 'As raízes são inventadas (a priori), mas o som e a gramática imitam línguas reais. Tolkien mudou a língua a vida inteira e não a terminou: o «neo-quenya» dos fãs preenche as lacunas.',
    tree: { kind: 'ficção', root: ARVORE_ELFICA, highlight: 'Quenya', note: NOTA_ELFICA },
  },
  {
    id: 'sindarin',
    name: 'Sindarin',
    emoji: '🌿',
    creator: 'J. R. R. Tolkien',
    year: 'desde 1915',
    purpose: 'artistica',
    origin: 'mista',
    stage: 'parcial',
    about: 'A língua do dia a dia dos elfos na Terra-média.',
    text: 'Tolkien deu ao sindarin a sonoridade do galês, com as mutações de consoantes no começo das palavras que o galês tem. Na porta de Moria, a senha era «mellon», amigo.',
    samples: [
      ['Mae govannen!', 'Bem encontrado! (saudação)'],
      ['mellon', 'amigo'],
    ],
    note: 'Como o quenya: raízes inventadas, som de língua real, obra inacabada.',
    tree: { kind: 'ficção', root: ARVORE_ELFICA, highlight: 'Sindarin', note: NOTA_ELFICA },
  },
  {
    id: 'klingon',
    name: 'Klingon',
    emoji: '🖖',
    creator: 'Marc Okrand',
    year: '1984',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'completa',
    about: 'Star Trek: a língua dos guerreiros klingons.',
    text: 'O linguista Marc Okrand a criou para o filme Star Trek III e publicou um dicionário em 1985. Ela foi feita para soar estranha: a ordem é objeto-verbo-sujeito, rara nas línguas humanas, e tem sons guturais. Há gente que a fala fluentemente, uma tradução de Hamlet e um instituto dedicado a ela.',
    samples: [
      ['nuqneH?', 'O que você quer? (a saudação klingon)'],
      ['Qapla’!', 'Sucesso!'],
    ],
  },
  {
    id: 'dothraki',
    name: 'Dothraki',
    emoji: '🐎',
    creator: 'David J. Peterson',
    year: '2009',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'completa',
    about: 'Game of Thrones: a língua dos cavaleiros nômades do Mar Dothraki.',
    text: 'George R. R. Martin tinha deixado só algumas palavras nos livros. Para a série da HBO, Peterson partiu delas e criou uma língua com milhares de palavras — muitas sobre cavalos.',
    samples: [['M’athchomaroon!', 'Olá! (literalmente, «com respeito»)']],
  },
  {
    id: 'alto-valiriano',
    name: 'Alto Valiriano',
    emoji: '🐉',
    creator: 'David J. Peterson',
    year: '2012',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'completa',
    about: 'Game of Thrones: a língua antiga de Valíria, como o latim de Westeros.',
    text: 'Tem quatro números gramaticais (singular, plural, paucal e coletivo) e oito casos. Ganhou até um curso num aplicativo de idiomas, em 2017.',
    samples: [
      ['Valar morghulis.', 'Todos os homens devem morrer.'],
      ['Valar dohaeris.', 'Todos os homens devem servir.'],
    ],
    tree: {
      kind: 'ficção',
      root: {
        name: 'Alto Valiriano',
        note: 'a língua do antigo império de Valíria',
        children: [
          { name: 'Valiriano de Astapor', note: 'criado por Peterson para a série' },
          { name: 'Valiriano de Meereen', note: 'criado por Peterson para a série' },
          { name: 'Dialetos das Cidades Livres', note: 'nos livros, cada cidade fala o seu' },
        ],
      },
      highlight: 'Alto Valiriano',
      note: 'Depois da queda de Valíria, a língua se partiu em dialetos «bastardos», como o latim se partiu nas línguas românicas.',
    },
  },
  {
    id: 'navi',
    name: 'Na’vi',
    emoji: '🌳',
    creator: 'Paul Frommer',
    year: '2009',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'completa',
    about: 'Avatar: a língua do povo azul de Pandora.',
    text: 'James Cameron pediu uma língua que os atores conseguissem pronunciar, mas que não lembrasse nenhuma da Terra. O linguista Paul Frommer usou sons raros, como as ejetivas, e uma ordem de palavras livre, marcada por casos. Os fãs continuam ampliando o vocabulário com ele.',
    samples: [
      ['Kaltxì!', 'Olá!'],
      ['Oel ngati kameie.', 'Eu te vejo (no sentido de «eu te entendo por dentro»).'],
    ],
  },
  {
    id: 'tsevhu',
    name: 'Tsevhu',
    emoji: '🎏',
    creator: 'Koa Vhukva («koallary») e a comunidade',
    year: '2020',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'completa',
    about: 'A língua do povo tsavhe, do planeta fictício Onope — escrita sobre peixes koi.',
    text: 'A escrita Koiwrit não é linear: a frase é desenhada como um peixe koi cercado de ondulações: cada som vira uma ondulação, e o lugar das palavras em volta do peixe diz o papel delas na frase. A direção para onde o koi aponta marca o tempo verbal. Os substantivos têm singular, dual, plural e coletivo. Virou sucesso nas redes pelos desenhos.',
    note: 'Usada no LinuLingo com autorização dos autores: o dicionário, a gramática e o Koiwrit estão no módulo «🐟 Tsevhu».',
  },
  {
    id: 'parseltongue',
    name: 'Ofidioglossia (Parseltongue)',
    emoji: '🐍',
    creator: 'J. K. Rowling; nos filmes, Francis Nolan',
    year: '1998',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'esboco',
    about: 'Harry Potter: a língua das cobras.',
    text: 'Nos livros, só se diz que ela soa como um sibilo. Para o filme A Câmara Secreta, o foneticista Francis Nolan, de Cambridge, criou algumas frases com sons de cobra. Não tem gramática nem vocabulário: é um esboço para algumas cenas.',
  },
  {
    id: 'lapine',
    name: 'Lapine',
    emoji: '🐇',
    creator: 'Richard Adams',
    year: '1972',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'esboco',
    about: 'A Longa Jornada (Watership Down): a língua dos coelhos.',
    text: 'Algumas dezenas de palavras mostram como os coelhos veem o mundo: «hrair» quer dizer «muitos» — qualquer número acima de quatro, porque coelho só conta até quatro.',
    samples: [
      ['hrair', 'muitos (mais de quatro)'],
      ['Frith', 'o sol, que para os coelhos é um deus'],
    ],
  },
  {
    id: 'novilingua',
    name: 'Novilíngua (Newspeak)',
    emoji: '👁️',
    creator: 'George Orwell',
    year: '1949',
    purpose: 'artistica',
    origin: 'a posteriori',
    stage: 'esboco',
    about: '1984: a língua do Partido.',
    text: 'É o inglês podado, para que certas ideias fiquem impossíveis de dizer — e, com o tempo, de pensar. Dentro do romance, ela seria uma língua de engenharia a serviço da ditadura. Deixou palavras no mundo real, como «duplipensar».',
    samples: [['duplipensar', 'acreditar em duas ideias contraditórias ao mesmo tempo']],
  },
  {
    id: 'nadsat',
    name: 'Nadsat',
    emoji: '🍊',
    creator: 'Anthony Burgess',
    year: '1962',
    purpose: 'artistica',
    origin: 'a posteriori',
    stage: 'esboco',
    about: 'Laranja Mecânica: a gíria dos jovens.',
    text: 'É o inglês com centenas de palavras russas adaptadas. O próprio nome vem do sufixo russo dos números de 11 a 19, como «teen» em inglês.',
    samples: [
      ['droog', 'amigo (do russo «drug»)'],
      ['moloko', 'leite (do russo «moloko»)'],
    ],
  },
  {
    id: 'brithenig',
    name: 'Brithenig',
    emoji: '🏴',
    creator: 'Andrew Smith',
    year: '1996',
    purpose: 'artistica',
    origin: 'a posteriori',
    stage: 'completa',
    about: 'Uma história alternativa: e se o latim tivesse sobrevivido na Grã-Bretanha?',
    text: 'É uma língua românica imaginária, derivada do latim com as mudanças de som que o galês sofreu. Deu origem a um passatempo inteiro de línguas de «histórias alternativas».',
    tree: {
      kind: 'ficção',
      root: {
        name: 'Latim',
        children: [
          { name: 'Português' },
          { name: 'Espanhol' },
          { name: 'Francês' },
          { name: 'Italiano' },
          { name: 'Brithenig', note: 'imaginário: o latim da Grã-Bretanha, com as mudanças de som do galês' },
        ],
      },
      highlight: 'Brithenig',
      note: 'Na história alternativa, o brithenig seria irmão das línguas românicas de verdade.',
    },
  },
  {
    id: 'toki-pona',
    name: 'Toki Pona',
    emoji: '🙂',
    creator: 'Sonja Lang',
    year: '2001',
    purpose: 'engenharia',
    origin: 'a posteriori',
    stage: 'completa',
    about: 'Uma língua minimalista, para pensar só no essencial.',
    text: 'Tem cerca de 120 palavras no livro de 2014 (137 com as do dicionário de 2021). Com tão poucas, cada uma cobre muito: «telo» é água e qualquer líquido; um carro pode ser «tomo tawa», «estrutura que se move». Dizer as coisas vira um jogo de simplificar.',
    samples: [
      ['toki pona', 'língua boa, língua simples'],
      ['mi moku.', 'eu como.'],
    ],
    note: 'Parece inventada do zero, mas as palavras vêm de línguas reais — do tok pisin, do inglês, do finlandês, do georgiano, do neerlandês e do esperanto, entre outras —, simplificadas.',
  },
  {
    id: 'lojban',
    name: 'Lojban',
    emoji: '🧮',
    creator: 'Logical Language Group (a partir do Loglan de James Cooke Brown, 1955)',
    year: '1987',
    purpose: 'engenharia',
    origin: 'mista',
    stage: 'completa',
    about: 'Uma língua sem ambiguidade, baseada na lógica formal.',
    text: 'A gramática é tão regular que um computador consegue analisar qualquer frase de um jeito só. Foi feita para testar a hipótese de Sapir-Whorf: falar uma língua lógica muda o jeito de pensar? As raízes foram geradas por um algoritmo que misturou palavras do chinês, do inglês, do hindi, do espanhol, do russo e do árabe.',
    samples: [
      ['coi', 'olá'],
      ['mi prami do', 'eu te amo'],
    ],
    note: 'Costuma ser chamada de a priori, porque as raízes não se parecem com nenhuma língua; mas elas foram montadas a partir de seis línguas reais.',
    tree: {
      kind: 'real',
      root: { name: 'Loglan', note: '1955, de James Cooke Brown', children: [{ name: 'Lojban', note: '1987, refeito do zero pelo Logical Language Group' }] },
      highlight: 'Lojban',
    },
  },
  {
    id: 'ithkuil',
    name: 'Ithkuil',
    emoji: '💎',
    creator: 'John Quijada',
    year: '2004',
    purpose: 'engenharia',
    origin: 'a priori',
    stage: 'completa',
    about: 'O máximo de informação, com precisão, no mínimo de sílabas.',
    text: 'Uma palavra de ithkuil pode precisar de uma frase inteira em português para ser traduzida. A gramática tem dezenas de categorias que as línguas naturais deixam implícitas. É tão difícil que nem o criador a fala fluentemente.',
  },
  {
    id: 'laadan',
    name: 'Láadan',
    emoji: '♀️',
    creator: 'Suzette Haden Elgin',
    year: '1982',
    purpose: 'engenharia',
    origin: 'a priori',
    stage: 'completa',
    about: 'Uma linguista quis testar se uma língua feita para expressar a experiência das mulheres mudaria alguma coisa.',
    text: 'Tem palavras para ideias que o inglês não tem numa palavra só, e partículas no começo da frase que dizem se ela é uma afirmação, uma pergunta ou uma promessa, e partículas no fim que dizem como se sabe aquilo (se foi visto, se foi sonhado). Aparece no romance Native Tongue, da própria autora.',
  },
  {
    id: 'wilkins',
    name: 'Língua filosófica de Wilkins',
    emoji: '📚',
    creator: 'John Wilkins',
    year: '1668',
    purpose: 'engenharia',
    origin: 'a priori',
    stage: 'parcial',
    about: 'Uma língua que classificasse todo o conhecimento humano.',
    text: 'Cada palavra seria uma posição numa grande tabela de categorias: as primeiras letras dizem a classe (animal, planta, pedra), as seguintes a subclasse, e assim por diante. Assim, bastaria ouvir uma palavra para saber o que ela é. O problema: toda classificação do mundo é discutível.',
  },
  {
    id: 'simlish',
    name: 'Simlish',
    emoji: '🏠',
    creator: 'Will Wright e os dubladores de The Sims',
    year: '1996',
    purpose: 'artistica',
    origin: 'a priori',
    stage: 'esboco',
    about: 'The Sims: a fala dos personagens.',
    text: 'Apareceu pela primeira vez em SimCopter (1996) e ficou famosa com The Sims (2000). É quase toda improvisada pelos dubladores, para soar como uma língua sem que os jogadores ouçam a mesma frase repetida em qualquer idioma. Tem algumas expressões fixas, mas não é uma língua de verdade.',
    samples: [['Sul sul!', 'Olá!']],
  },
];

// ---------- línguas formais e computacionais ----------

export interface FormalGroup {
  id: string;
  name: string;
  emoji: string;
  text: string;
  items: { name: string; year: string; who: string; text: string }[];
}

export const FORMAL_GROUPS: FormalGroup[] = [
  {
    id: 'programacao',
    name: 'Linguagens de programação',
    emoji: '💻',
    text: 'Dão instruções a um computador: faça isto, depois aquilo, repita até acabar. Têm vocabulário (as palavras reservadas) e gramática (a sintaxe) como uma língua, mas não admitem nenhuma ambiguidade: uma vírgula fora do lugar e o programa não roda.',
    items: [
      { name: 'Python', year: '1991', who: 'Guido van Rossum', text: 'Feita para ser lida quase como inglês; o recuo do texto faz parte da gramática.' },
      { name: 'C++', year: '1985', who: 'Bjarne Stroustrup', text: 'Rápida e próxima da máquina; usada em jogos, navegadores e sistemas.' },
      { name: 'Java', year: '1995', who: 'James Gosling', text: '«Escreva uma vez, rode em qualquer lugar»: o mesmo programa roda em sistemas diferentes.' },
      { name: 'JavaScript', year: '1995', who: 'Brendan Eich', text: 'A linguagem dos navegadores — este aplicativo, na web, roda nela.' },
      { name: 'Scratch', year: '2007', who: 'MIT', text: 'Blocos coloridos que se encaixam: programar sem digitar, feito para crianças.' },
    ],
  },
  {
    id: 'consulta',
    name: 'Linguagens de consulta e de marcação',
    emoji: '🗂️',
    text: 'Não dão ordens passo a passo: as de consulta descrevem o que se quer buscar nos dados, e as de marcação dizem o que cada pedaço de um texto é (título, parágrafo, link).',
    items: [
      { name: 'SQL', year: '1974', who: 'Donald Chamberlin e Raymond Boyce (IBM)', text: 'Busca em bancos de dados: «selecione os nomes dos alunos onde a nota é maior que 7». O LinuLingo guarda o seu progresso num banco consultado em SQL.' },
      { name: 'HTML', year: '1991', who: 'Tim Berners-Lee', text: 'A marcação das páginas da web: <h1> para título, <p> para parágrafo, <a> para link.' },
      { name: 'XML', year: '1998', who: 'W3C', text: 'Marcação para qualquer tipo de dado, com as marcas que se quiser inventar.' },
      { name: 'JSON', year: '2001', who: 'Douglas Crockford', text: 'Dados em chaves e valores, fácil para gente e para máquina ler.' },
      { name: 'Markdown', year: '2004', who: 'John Gruber', text: 'Um texto que continua legível com a marcação: **negrito**, # título.' },
    ],
  },
  {
    id: 'logica',
    name: 'Linguagens lógico-matemáticas',
    emoji: '∀',
    text: 'Notações para escrever raciocínios sem nenhuma ambiguidade, de modo que se possa provar se estão certos. Vieram antes dos computadores — e os tornaram possíveis.',
    items: [
      { name: 'Álgebra booleana', year: '1854', who: 'George Boole', text: 'Contas com verdadeiro e falso (E, OU, NÃO). É o que os circuitos de todo computador fazem.' },
      { name: 'Lógica de primeira ordem', year: '1879', who: 'Gottlob Frege', text: '«Para todo x», «existe um x»: a notação para dizer com precisão o que as frases dizem.' },
      { name: 'Cálculo lambda', year: '1936', who: 'Alonzo Church', text: 'Uma linguagem só de funções, capaz de expressar qualquer cálculo; é a avó das linguagens funcionais.' },
      { name: 'Expressões regulares', year: '1951', who: 'Stephen Kleene', text: 'Padrões para achar texto: [0-9]+ quer dizer «um ou mais algarismos». O corretor deste app usa várias.' },
    ],
  },
];

/** A mesma ideia em várias notações. */
export const SAME_IDEA: { title: string; lines: [string, string][] } = {
  title: '«Os alunos que estudaram passaram.»',
  lines: [
    ['Português', 'Os alunos que estudaram passaram.'],
    ['Lógica de primeira ordem', '∀x ((Aluno(x) ∧ Estudou(x)) → Passou(x))'],
    ['SQL', 'SELECT nome FROM alunos WHERE estudou = TRUE;'],
    ['Python', '[a.nome for a in alunos if a.estudou]'],
    ['HTML', '<p>Os alunos que <em>estudaram</em> passaram.</p>'],
  ],
};

export const HUMAN_VS_FORMAL: [string, string, string][] = [
  ['Ambiguidade', '«Vi o homem com o binóculo» tem dois sentidos, e o contexto resolve.', 'Cada frase tem um sentido só; se não tiver, é erro.'],
  ['Mudança', 'Mudam sozinhas, com o uso, ao longo das gerações.', 'Mudam por decisão, em versões numeradas (Python 2 → Python 3).'],
  ['Erros', 'Uma frase com erro ainda é entendida.', 'Um ponto e vírgula a menos e nada funciona.'],
  ['Falantes', 'Aprendidas por crianças, sem aula.', 'Aprendidas de propósito, e «faladas» por máquinas.'],
  ['Gramática', 'Descrita pelos linguistas depois.', 'Escrita antes, numa gramática formal (como a notação BNF, de 1960).'],
];

export const FORMAL_BRIDGE =
  'As duas áreas se encontram: em 1956, o linguista Noam Chomsky classificou as gramáticas em níveis de complexidade — a hierarquia de Chomsky —, e a ciência da computação usa essa classificação até hoje para construir compiladores e analisar linguagens de programação.';

// ---------- línguas de contato ----------

export const CONTACT_STAGES: { name: string; emoji: string; text: string }[] = [
  { name: 'Jargão', emoji: '🗯️', text: 'Umas poucas palavras soltas, para trocar mercadorias ou dar ordens. Cada um fala do seu jeito.' },
  { name: 'Pidgin', emoji: '🤝', text: 'Um sistema estável e simplificado, criado do contato entre povos sem língua comum. Ninguém o tem como língua materna: é sempre a segunda língua de todos. O vocabulário costuma vir da língua do grupo com mais poder (a «língua lexificadora»).' },
  { name: 'Pidgin expandido', emoji: '📈', text: 'Quando o pidgin passa a ser usado em tudo — no mercado, na igreja, no rádio —, ele ganha palavras e regras. O tok pisin, da Papua-Nova Guiné, passou por aí.' },
  { name: 'Crioulo', emoji: '👶', text: 'Quando as crianças aprendem o pidgin como língua materna, elas o completam: surge uma gramática rica e uma língua natural como qualquer outra. Muitos crioulos nasceram nas colônias, entre pessoas escravizadas que vinham de povos de línguas diferentes.' },
];

export interface ContactLanguage {
  name: string;
  kind: 'pidgin' | 'crioulo' | 'mista' | 'língua franca';
  /** de onde vem o vocabulário (ou as partes, nas mistas) */
  base: string;
  where: string;
  text: string;
  sample?: [string, string];
}

export const CONTACT_LANGUAGES: ContactLanguage[] = [
  { name: 'Crioulo haitiano (kreyòl)', kind: 'crioulo', base: 'francês, com línguas da África Ocidental', where: 'Haiti', text: 'O crioulo mais falado do mundo, com cerca de 12 milhões de falantes; língua oficial do Haiti desde 1987, ao lado do francês.', sample: ['Bonjou! Kijan ou ye?', 'Bom dia! Como você está?'] },
  { name: 'Papiamento', kind: 'crioulo', base: 'português e espanhol, com holandês', where: 'Aruba, Curaçao e Bonaire', text: 'A base é ibérica — há quem defenda uma origem num crioulo português da África —, com muitas palavras holandesas. É oficial em Aruba e Curaçao.', sample: ['Bon dia! Kon ta bai?', 'Bom dia! Como vai?'] },
  { name: 'Crioulo cabo-verdiano (kriolu)', kind: 'crioulo', base: 'português, com línguas da África Ocidental', where: 'Cabo Verde', text: 'A língua do dia a dia de quase todos os cabo-verdianos; é o crioulo de base portuguesa mais falado. A morna, patrimônio da UNESCO, é cantada nele.', sample: ['Modi ki bu sta?', 'Como você está?'] },
  { name: 'Crioulo da Guiné-Bissau (kriol)', kind: 'crioulo', base: 'português', where: 'Guiné-Bissau, Senegal (Casamansa)', text: 'Língua franca da Guiné-Bissau: muito mais gente fala o kriol do que o português, a língua oficial.' },
  { name: 'Forro (santome)', kind: 'crioulo', base: 'português', where: 'São Tomé e Príncipe', text: 'Um dos crioulos portugueses do Golfo da Guiné, nascido nas plantações de açúcar do século XVI.' },
  { name: 'Patuá macaense', kind: 'crioulo', base: 'português, com malaio e cantonês', where: 'Macau', text: 'Quase extinto; restam poucos falantes, e há grupos de teatro que o mantêm vivo.' },
  { name: 'Chavacano', kind: 'crioulo', base: 'espanhol', where: 'Filipinas (Zamboanga)', text: 'O único crioulo de base espanhola da Ásia.' },
  { name: 'Tok Pisin', kind: 'crioulo', base: 'inglês, com línguas austronésias', where: 'Papua-Nova Guiné', text: 'Começou como pidgin nas plantações do século XIX e hoje é língua materna de muitos jovens e língua oficial do país. «Pisin» vem de «pidgin».', sample: ['Mi laik go long maket.', 'Eu quero ir ao mercado.'] },
  { name: 'Sranan Tongo', kind: 'crioulo', base: 'inglês, com holandês e português', where: 'Suriname', text: 'Língua franca do Suriname, embora o país tenha sido colônia holandesa: o inglês veio dos primeiros colonos.' },
  { name: 'Crioulo de Maurício (kreol morisien)', kind: 'crioulo', base: 'francês', where: 'Maurício', text: 'Falado por quase toda a população, mesmo com o inglês como língua do governo.' },
  { name: 'Russenorsk', kind: 'pidgin', base: 'russo e norueguês', where: 'Ártico (norte da Noruega)', text: 'Pescadores noruegueses e comerciantes russos o usaram no verão, do século XVIII ao começo do XX. Tinha umas 400 palavras e sumiu com a Revolução Russa, quando o comércio acabou.' },
  { name: 'Pidgin basco-islandês', kind: 'pidgin', base: 'basco, islandês e outras', where: 'Islândia (Vestfirðir)', text: 'Baleeiros bascos que caçavam nos fiordes do oeste da Islândia no século XVII o usavam com os islandeses. Sobrou em glossários da época.' },
  { name: 'Hiri Motu', kind: 'pidgin', base: 'motu', where: 'Papua-Nova Guiné', text: 'Nasceu nas viagens de comércio (hiri) do povo motu e é uma das línguas oficiais do país.' },
  { name: 'Fanagalo', kind: 'pidgin', base: 'zulu, inglês e africâner', where: 'minas da África do Sul', text: 'Usado nas minas para os trabalhadores de muitas línguas se entenderem; hoje está quase extinto.' },
  { name: 'Michif', kind: 'mista', base: 'substantivos do francês, verbos do cree', where: 'Canadá e EUA (povo métis)', text: 'Uma língua mista, e não um crioulo: os filhos de franceses e mulheres cree juntaram duas gramáticas inteiras, cada uma numa parte da frase.' },
  { name: 'Media Lengua', kind: 'mista', base: 'vocabulário do espanhol, gramática do quéchua', where: 'Equador', text: 'Quase todas as palavras são espanholas, mas com as terminações e a ordem do quéchua.' },
  { name: 'Nheengatu (língua geral amazônica)', kind: 'língua franca', base: 'tupi antigo', where: 'Brasil, Colômbia e Venezuela', text: 'Não é pidgin nem crioulo: é o tupi que missionários e colonos espalharam como língua comum pela Amazônia. Foi mais falado que o português na região até o século XIX, e é co-oficial em São Gabriel da Cachoeira (AM).' },
];

/** Os pidgins e as línguas mistas do Glottolog: nome, países, se ainda é usado. */
export function contactFromGlottolog(rows: GlottologRow[]): { name: string; kind: 'pidgin' | 'mista'; countries: string[]; extinct: boolean }[] {
  return rows
    .filter((r) => r[2] === 'Pidgin' || r[2] === 'Língua mista')
    .map(([, name, family, status, spec]) => ({
      name,
      kind: family === 'Pidgin' ? ('pidgin' as const) : ('mista' as const),
      countries: spec.split(' ').map((p) => p.split('>')[0]),
      extinct: status === 5,
    }))
    .sort((a, b) => Number(a.extinct) - Number(b.extinct) || a.name.localeCompare(b.name, 'pt'));
}

// ---------- línguas controladas ----------

export const CONTROLLED: { name: string; emoji: string; year: string; text: string; sample?: [string, string] }[] = [
  {
    name: 'Simplified Technical English (ASD-STE100)',
    emoji: '✈️',
    year: 'anos 1980',
    text: 'Criado pela indústria aeroespacial europeia para os manuais de manutenção de aviões, lidos por mecânicos do mundo todo, muitos com o inglês como segunda língua. Cada palavra tem um sentido só, as frases de instrução têm no máximo 20 palavras e a voz é sempre ativa.',
    sample: ['Do not touch the hot surface.', 'Não toque na superfície quente. (em vez de «Contact with the surface should be avoided»)'],
  },
  {
    name: 'Basic English',
    emoji: '🔤',
    year: '1930',
    text: 'O linguista C. K. Ogden reduziu o inglês a 850 palavras, com a ideia de que elas bastariam para dizer quase tudo: em vez de «ascend», «go up». Orwell se interessou por ele, e a Novilíngua de 1984 lembra um Basic English levado ao extremo, para servir ao poder.',
  },
  {
    name: 'Fraseologia da aviação (ICAO)',
    emoji: '🗼',
    year: 'anos 1950',
    text: 'Pilotos e controladores falam um inglês fixo e curto, com o alfabeto fonético (Alfa, Bravo, Charlie…) e palavras como «roger» (recebido) e «wilco» (vou cumprir). Desde 2008, pilotos de voos internacionais precisam provar proficiência em inglês.',
    sample: ['Climb flight level three five zero.', 'Suba para o nível de voo 350.'],
  },
  {
    name: 'Seaspeak',
    emoji: '⚓',
    year: 'anos 1980',
    text: 'A versão do mar: frases-padrão para a comunicação por rádio entre navios, que abrem com a intenção — «question», «instruction», «warning».',
  },
  {
    name: 'Linguagem simples',
    emoji: '📄',
    year: '2023 (norma ISO 24495-1)',
    text: 'Não é uma língua separada: é um jeito de escrever documentos públicos para que qualquer pessoa entenda na primeira leitura — frases curtas, palavras comuns, o mais importante primeiro. Ganhou uma norma internacional em 2023.',
  },
  {
    name: 'Leichte Sprache (língua fácil)',
    emoji: '🧩',
    year: 'anos 2000',
    text: 'Na Alemanha, textos para pessoas com deficiência intelectual ou pouca leitura seguem regras rígidas: uma ideia por frase, palavras compostas separadas por hífen, nada de voz passiva.',
  },
  {
    name: 'Globish',
    emoji: '🌍',
    year: '2004',
    text: 'O francês Jean-Paul Nerrière descreveu o inglês que não-nativos usam entre si nos negócios: 1.500 palavras, frases curtas, sem expressões idiomáticas.',
  },
  {
    name: 'Attempto Controlled English',
    emoji: '🤖',
    year: '1995',
    text: 'Um inglês controlado da Universidade de Zurique que um computador traduz direto para a lógica formal: parece inglês, mas cada frase tem um sentido só.',
  },
];

// ---------- modalidade e estado ----------

export const MODALITIES: { name: string; emoji: string; text: string; examples: string }[] = [
  { name: 'Orais-auditivas', emoji: '🗣️', text: 'Faladas com o aparelho fonador e percebidas pelo ouvido. São a maioria das cerca de 7 mil línguas do mundo.', examples: 'o português, o romeno, o russo e todas as que o app ensina' },
  { name: 'Viso-espaciais (de sinais)', emoji: '🤟', text: 'Feitas com as mãos, o rosto e o corpo, e percebidas pela visão. São línguas naturais completas, com gramática e vocabulário próprios.', examples: 'a Libras, a ASL, a Língua Gestual Portuguesa — veja a aba Línguas de sinais' },
  { name: 'Táteis', emoji: '🤲', text: 'Percebidas pelo toque, sobretudo por pessoas surdocegas. Podem ser línguas de sinais sentidas com as mãos (a Libras tátil, o Protactile, criado por surdocegos nos EUA) ou métodos para perceber a fala: no Tadoma, a pessoa põe a mão no rosto de quem fala e sente a vibração da garganta e o movimento dos lábios — foi assim que Helen Keller aprendeu a falar. O alfabeto de Lorm soletra as letras em pontos da palma da mão.', examples: 'Libras tátil, Protactile, Tadoma, alfabeto de Lorm' },
  { name: 'Assobiadas e tamborinadas', emoji: '🥁', text: 'Não são outra língua, e sim outro canal para uma língua falada: o assobio ou o tambor imitam a melodia e o ritmo das palavras e carregam a mensagem por quilômetros. O silbo gomero, das Ilhas Canárias, é patrimônio da UNESCO desde 2009; os tambores falantes da África Ocidental reproduzem os tons de línguas tonais, como o iorubá.', examples: 'silbo gomero (espanhol assobiado), tambores falantes iorubás' },
];

export const STATES: { name: string; emoji: string; text: string; examples: [string, string][] }[] = [
  { name: 'Vivas', emoji: '🌱', text: 'Aprendidas pelas crianças em casa e usadas no dia a dia por uma comunidade.', examples: [['Português', 'mais de 250 milhões de falantes'], ['Islandês', 'cerca de 350 mil, e o mesmo alfabeto das sagas']] },
  { name: 'Mortas', emoji: '📜', text: 'Não têm mais falantes nativos, mas continuam sendo usadas por escrito, na religião ou na ciência.', examples: [['Latim', 'língua da Igreja Católica e dos nomes científicos das espécies'], ['Sânscrito', 'língua sagrada do hinduísmo, ainda estudada e recitada']] },
  { name: 'Extintas', emoji: '🪦', text: 'Não têm mais nenhum uso: sobram inscrições e textos, às vezes nem decifrados. Muitos povos preferem dizer «adormecida», porque uma língua pode voltar.', examples: [['Sumério', 'a primeira língua escrita conhecida, na Mesopotâmia'], ['Etrusco', 'lemos as letras, mas entendemos pouco']] },
  { name: 'Revitalizadas', emoji: '🔄', text: 'Voltaram depois de perder os falantes nativos.', examples: [['Hebraico', 'língua de livros por quase 2 mil anos, voltou a ser língua materna no fim do século XIX; é o único caso completo'], ['Manês (Ilha de Man)', 'o último falante nativo morreu em 1974; hoje há crianças aprendendo de novo, numa escola em manês'], ['Córnico', 'dado como extinto pela UNESCO em 2009, reclassificado em 2010 como criticamente ameaçado']] },
  { name: 'Protolínguas', emoji: '🧬', text: 'Ancestrais nunca escritos, reconstruídos pelos linguistas comparando as línguas filhas. As formas reconstruídas levam um asterisco (*), para lembrar que ninguém as viu escritas.', examples: [['Proto-indo-europeu', 'falado há uns 5 a 6 mil anos; mãe do português, do russo, do sueco, do hindi e do persa'], ['Proto-tupi-guarani', 'a mãe do guarani, do tupi antigo e do nheengatu'], ['Proto-urálico', 'a mãe do finlandês, do estoniano, do húngaro e das sámi']] },
];

/** Palavras do proto-indo-europeu e o que elas viraram. */
export const PIE_WORDS: { pie: string; means: string; children: string }[] = [
  { pie: '*ph₂tḗr', means: 'pai', children: 'latim pater → pai, padre, père; inglês father; alemão Vater; sânscrito pitṛ́' },
  { pie: '*méh₂tēr', means: 'mãe', children: 'latim mater → madre, mère; inglês mother; russo мать; sueco mor' },
  { pie: '*h₁éḱwos', means: 'cavalo', children: 'latim equus → equino, égua; sânscrito aśva' },
  { pie: '*wódr̥', means: 'água', children: 'inglês water; alemão Wasser; russo вода; grego hýdōr → hidráulica' },
  { pie: '*dóm', means: 'casa', children: 'latim domus → doméstico; russo дом; sânscrito dáma' },
];

export const PIE_NOTE =
  'Em 1868, o linguista August Schleicher escreveu uma pequena fábula em proto-indo-europeu reconstruído, «A ovelha e os cavalos». Desde então, outros a reescreveram a cada avanço da reconstrução: comparar as versões mostra quanto a ciência mudou — e quanto uma protolíngua é uma hipótese.';
