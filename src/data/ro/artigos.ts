import type { ArticleSeed } from '../artigos';

/** Artigos culturais graduados do romeno (ver src/data/artigos.ts). */
export const ARTIGOS_RO: ArticleSeed[] = [
  {
    id: 'ro-a-martisor',
    level: 'A1.1',
    title: 'Mărțișorul',
    emoji: '🎀',
    paragraphs: [
      'Pe 1 martie, în România și în Moldova, oamenii dau un mărțișor. Mărțișorul este un obiect mic, cu un fir alb și roșu.',
      'Femeile îl poartă în piept. Este un semn al primăverii. La sfârșitul lunii, unii oameni îl pun într-un copac.',
    ],
    translation: [
      'No dia 1º de março, na Romênia e na Moldávia, as pessoas dão um mărțișor. O mărțișor é um objeto pequeno, com um fio branco e vermelho.',
      'As mulheres o usam no peito. É um sinal da primavera. No fim do mês, algumas pessoas o põem numa árvore.',
    ],
    glossary: [
      ['mărțișor', 'enfeite de fio branco e vermelho dado em 1º de março'],
      ['mărțișorul', 'o mărțișor'],
      ['obiect', 'objeto'],
      ['piept', 'peito'],
      ['semn', 'sinal'],
      ['primăverii', 'da primavera'],
      ['sfârșitul', 'o fim'],
      ['lunii', 'do mês'],
    ],
    questions: [
      { q: 'Quando se dá o mărțișor?', options: ['No Natal', 'Em 1º de março', 'No fim do verão'], answer: 1 },
      { q: 'De que cores é o fio?', options: ['Branco e vermelho', 'Azul e amarelo', 'Verde e branco'], answer: 0 },
      { q: 'O mărțișor é um sinal de quê?', options: ['Do inverno', 'Da primavera', 'Do Ano-Novo'], answer: 1 },
    ],
  },
  {
    id: 'ro-a-sarmale',
    level: 'A2.1',
    title: 'Sarmalele de Crăciun',
    emoji: '🥬',
    paragraphs: [
      'Sarmalele sunt una dintre cele mai iubite mâncăruri din România. Se fac din carne tocată și orez, rulate în foi de varză murată sau de viță de vie.',
      'La Crăciun, la nunți și la sărbători mari, pe masă sunt aproape mereu sarmale. Le mâncăm calde, cu mămăligă și smântână. Fiecare familie spune că rețeta ei este cea mai bună!',
    ],
    translation: [
      'As sarmale estão entre as comidas mais amadas da Romênia. São feitas de carne moída e arroz, enroladas em folhas de repolho azedo (em conserva) ou de videira.',
      'No Natal, nos casamentos e nas grandes festas, quase sempre há sarmale na mesa. Nós as comemos quentes, com mămăligă e creme de leite azedo. Cada família diz que a receita dela é a melhor!',
    ],
    glossary: [
      ['tocată', 'moída'],
      ['rulate', 'enroladas'],
      ['foi', 'folhas'],
      ['viță de vie', 'videira'],
      ['nunți', 'casamentos'],
      ['smântână', 'creme de leite azedo'],
      ['rețeta', 'a receita'],
    ],
    questions: [
      { q: 'O que vai dentro das sarmale?', options: ['Peixe e batata', 'Carne moída e arroz', 'Queijo e ovos'], answer: 1 },
      { q: 'Com o que elas são servidas?', options: ['Com mămăligă e smântână', 'Com pão e mel', 'Com macarrão'], answer: 0 },
      { q: 'Em que ocasiões aparecem quase sempre?', options: ['No café da manhã', 'No Natal, em casamentos e grandes festas', 'Só no verão'], answer: 1 },
    ],
  },
  {
    id: 'ro-a-transfagarasan',
    level: 'B1.1',
    title: 'Transfăgărășanul',
    emoji: '🏔️',
    paragraphs: [
      'Transfăgărășanul este un drum care trece peste Munții Făgăraș, cei mai înalți munți din România. A fost construit între 1970 și 1974, iar în punctul cel mai înalt, la lacul Bâlea, ajunge la 2.042 de metri.',
      'Drumul are multe curbe strânse, tuneluri și poduri. Din cauza zăpezii, iarna este închis; de obicei se deschide pe 1 iulie și se închide la sfârșitul lui octombrie. Vara, mii de turiști vin cu mașina, cu motocicleta sau cu bicicleta ca să vadă peisajul.',
    ],
    translation: [
      'A Transfăgărășan é uma estrada que atravessa os Montes Făgăraș, as montanhas mais altas da Romênia. Foi construída entre 1970 e 1974, e no ponto mais alto, no lago Bâlea, chega a 2.042 metros.',
      'A estrada tem muitas curvas fechadas, túneis e pontes. Por causa da neve, fica fechada no inverno; normalmente abre em 1º de julho e fecha no fim de outubro. No verão, milhares de turistas vêm de carro, de moto ou de bicicleta para ver a paisagem.',
    ],
    glossary: [
      ['Transfăgărășanul', 'a estrada Transfăgărășan'],
      ['din cauza', 'por causa de'],
    ],
    forms: [
      ['lacul', 'lac'],
      ['zăpezii', 'zăpadă'],
    ],
    questions: [
      { q: 'Por que a estrada fica fechada no inverno?', options: ['Por causa da neve', 'Por causa de obras', 'Por causa dos turistas'], answer: 0 },
      { q: 'Onde fica o ponto mais alto?', options: ['Numa cidade', 'No lago Bâlea', 'No mar Negro'], answer: 1 },
      { q: 'Quando ela foi construída?', options: ['Entre 1920 e 1924', 'Entre 1970 e 1974', 'Em 2000'], answer: 1 },
    ],
  },
  {
    id: 'ro-a-delta',
    level: 'B2.1',
    title: 'Delta Dunării',
    emoji: '🦩',
    paragraphs: [
      'Înainte să se verse în Marea Neagră, Dunărea se desparte în trei brațe — Chilia, Sulina și Sfântu Gheorghe — și formează una dintre cele mai mari delte din Europa. Cea mai mare parte se află în România, în județul Tulcea; o parte mai mică aparține Ucrainei.',
      'Delta este o lume de canale, lacuri, stuf și păduri inundabile. Aici trăiesc peste 300 de specii de păsări, printre care pelicanii, care au devenit simbolul deltei. Din 1991, Delta Dunării face parte din patrimoniul mondial UNESCO.',
      'În sate, oamenii trăiesc de pe urma pescuitului și, tot mai mult, a turismului. Multe locuri se pot vizita doar cu barca, iar autoritățile limitează accesul în zonele protejate, ca natura să rămână neatinsă.',
    ],
    translation: [
      'Antes de desaguar no mar Negro, o Danúbio se divide em três braços — Chilia, Sulina e Sfântu Gheorghe — e forma um dos maiores deltas da Europa. A maior parte fica na Romênia, no distrito de Tulcea; uma parte menor pertence à Ucrânia.',
      'O delta é um mundo de canais, lagos, juncos e florestas alagáveis. Aqui vivem mais de 300 espécies de aves, entre elas os pelicanos, que se tornaram o símbolo do delta. Desde 1991, o Delta do Danúbio faz parte do patrimônio mundial da UNESCO.',
      'Nas aldeias, as pessoas vivem da pesca e, cada vez mais, do turismo. Muitos lugares só podem ser visitados de barco, e as autoridades limitam o acesso às áreas protegidas, para que a natureza continue intocada.',
    ],
    glossary: [
      ['patrimoniul', 'o patrimônio'],
      ['mondial', 'mundial'],
      ['pescuitului', 'da pesca'],
      ['autoritățile', 'as autoridades'],
      ['neatinsă', 'intocada'],
    ],
    forms: [
      ['păsări', 'pasăre'],
      ['sate', 'sat'],
    ],
    questions: [
      { q: 'Em quantos braços o Danúbio se divide?', options: ['Dois', 'Três', 'Cinco'], answer: 1 },
      { q: 'Qual ave virou símbolo do delta?', options: ['A cegonha', 'O pelicano', 'A águia'], answer: 1 },
      { q: 'Do que vivem as pessoas das aldeias?', options: ['Da pesca e do turismo', 'Da mineração', 'Da indústria de carros'], answer: 0 },
    ],
  },
  {
    id: 'ro-a-eminescu',
    level: 'C1.1',
    title: 'Eminescu și Ziua Culturii Naționale',
    emoji: '📜',
    paragraphs: [
      'Poetul Mihai Eminescu (1850–1889) este considerat poetul național al românilor. S-a născut la Botoșani, a studiat la Viena și la Berlin și a lucrat, printre altele, ca jurnalist la ziarul „Timpul”, din București.',
      'Poemul său cel mai cunoscut, „Luceafărul”, publicat în 1883, spune povestea iubirii imposibile dintre o fată de împărat și un astru nemuritor. Versurile lui au influențat profund limba literară română, iar mulți elevi învață și astăzi pe de rost strofe întregi.',
      'Din 2010, ziua nașterii sale, 15 ianuarie, este sărbătorită ca Ziua Culturii Naționale, atât în România, cât și în Republica Moldova, cu lecturi publice, concerte și flori depuse la statuile poetului.',
    ],
    translation: [
      'O poeta Mihai Eminescu (1850–1889) é considerado o poeta nacional dos romenos. Nasceu em Botoșani, estudou em Viena e em Berlim e trabalhou, entre outras coisas, como jornalista no jornal «Timpul», de Bucareste.',
      'Seu poema mais conhecido, «Luceafărul» (A Estrela da Manhã), publicado em 1883, conta a história do amor impossível entre uma filha de imperador e um astro imortal. Seus versos influenciaram profundamente a língua literária romena, e muitos alunos ainda hoje decoram estrofes inteiras.',
      'Desde 2010, o dia do seu nascimento, 15 de janeiro, é comemorado como o Dia da Cultura Nacional, tanto na Romênia quanto na República da Moldávia, com leituras públicas, concertos e flores deixadas nas estátuas do poeta.',
    ],
    glossary: [
      ['născut', 'nascido'],
      ['nemuritor', 'imortal'],
      ['literară', 'literária'],
    ],
    forms: [
      ['învață', 'a învăța'],
      ['flori', 'floare'],
    ],
    questions: [
      { q: 'Como se chama o poema mais conhecido de Eminescu?', options: ['Luceafărul', 'Miorița', 'Doina'], answer: 0 },
      { q: 'O que se comemora em 15 de janeiro?', options: ['O Dia da Independência', 'O Dia da Cultura Nacional', 'O Dia da Língua Romena'], answer: 1 },
      { q: 'Onde Eminescu trabalhou como jornalista?', options: ['No jornal «Timpul»', 'Numa rádio', 'Numa revista de Viena'], answer: 0 },
    ],
  },
];
