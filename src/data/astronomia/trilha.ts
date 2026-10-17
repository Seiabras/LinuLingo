import type { MiniCourse } from '@/data/cursos/tipos';
import { comOpcoesEmbaralhadas } from '@/data/cursos/embaralhar';

/**
 * A trilha da área Astronomia (pedido do dono, 17/10/2026). As unidades usam o motor dos minicursos
 * (kind 'astronomia') e seguem a taxonomia de `docs/areas-futuras.md` (astronomia observacional,
 * astrofísica, cosmologia). Pela regra da prática do dono (as ciências exatas sempre com a aplicação),
 * cada unidade aponta para uma conta da aba “Na prática” ou para o céu de verdade, na aba Céu.
 *
 * Números: NASA, “Planetary Fact Sheet” e “Sun Fact Sheet”; IAU (unidade astronômica, 2012; planetas,
 * 2006; constelações); ESA/Planck (idade do Universo). Referência geral: OpenStax, “Astronomy 2e”
 * (Fraknoi, Morrison e Wolff, 2022, CC BY 4.0).
 */

const OPENSTAX = { label: 'OpenStax, “Astronomy 2e” (CC BY 4.0)', url: 'https://openstax.org/details/books/astronomy-2e' };

export const ASTRO_CEU: MiniCourse = {
  id: 'astro-ceu',
  name: 'O céu a olho nu',
  emoji: '🌗',
  kind: 'astronomia',
  summary: 'Por que existe dia e noite, por que existem as estações e por que a Lua muda de forma: o céu que dá para ver da janela.',
  sources: [OPENSTAX, { label: 'NASA, “Moon Phases”', url: 'https://science.nasa.gov/moon/moon-phases/' }],
  lessons: [
    {
      id: 'estacoes',
      title: 'Dia, noite e estações',
      emoji: '🌍',
      intro: [
        'A Terra gira em torno de si mesma uma vez por dia (a rotação) e dá uma volta em torno do Sol em cerca de 365 dias e um quarto (a translação). O quarto de dia que sobra a cada ano vira o 29 de fevereiro, a cada quatro anos.',
        'As estações não vêm da distância ao Sol, como muita gente acha: vêm da inclinação do eixo da Terra, de cerca de 23,4 graus. Quando o Hemisfério Sul está inclinado para o Sol, os dias são mais longos e o Sol bate mais de frente: é verão aqui e inverno no Norte.',
        'A prova: quando é Natal no Brasil, é verão aqui e inverno na Europa, ao mesmo tempo, com a mesma Terra à mesma distância do Sol.',
      ],
      items: [
        { term: 'rotação', meaning: 'a Terra girando em torno de si mesma', how: 'Uma volta por dia: o dia e a noite.' },
        { term: 'translação', meaning: 'a volta da Terra em torno do Sol', how: 'Cerca de 365,25 dias: o ano.' },
        { term: 'inclinação do eixo', meaning: 'cerca de 23,4 graus', how: 'É ela que faz as estações.' },
      ],
      quiz: [
        { q: 'O que causa as estações do ano?', options: ['A inclinação do eixo da Terra', 'A Terra chegar mais perto do Sol', 'As nuvens'], answer: 0 },
        { q: 'Quando é verão no Brasil, na Europa é…', options: ['Inverno', 'Verão também', 'Primavera'], answer: 0 },
        { q: 'De onde vem o 29 de fevereiro?', options: ['Do quarto de dia que sobra a cada ano', 'De um erro dos romanos que nunca foi corrigido', 'Da Lua'], answer: 0 },
      ],
    },
    {
      id: 'lua',
      title: 'As fases da Lua',
      emoji: '🌙',
      intro: [
        'A Lua não tem luz própria: ela reflete a luz do Sol. Metade dela está sempre iluminada; o que muda é quanto dessa metade a gente vê daqui, conforme a Lua anda em volta da Terra.',
        'De uma lua nova à outra passam cerca de 29 dias e meio. Nova (o lado iluminado está de costas para nós), crescente, cheia (o lado iluminado de frente) e minguante.',
        'A Lua mostra sempre a mesma face para a Terra, porque gira em torno de si no mesmo tempo em que dá a volta em nós. O “lado escuro da Lua” não é escuro: é só o lado que nunca vemos daqui, e recebe sol como o outro.',
      ],
      items: [
        { term: 'lua nova', meaning: 'o lado iluminado de costas para a Terra', how: 'A Lua fica entre a Terra e o Sol.' },
        { term: 'lua cheia', meaning: 'o lado iluminado de frente para a Terra', how: 'A Terra fica entre o Sol e a Lua.' },
        { term: 'mês lunar', meaning: 'cerca de 29,5 dias de uma lua nova à outra', how: 'Em inglês, month (mês) e moon (Lua) vêm da mesma raiz.' },
      ],
      quiz: [
        { q: 'Por que a Lua brilha?', options: ['Reflete a luz do Sol', 'Tem luz própria', 'Reflete a luz da Terra só à noite'], answer: 0 },
        { q: 'Quanto tempo vai de uma lua nova à outra?', options: ['Cerca de 29,5 dias', '7 dias', '365 dias'], answer: 0 },
        { q: 'O lado da Lua que nunca vemos…', options: ['Também recebe sol', 'Está sempre no escuro', 'Não existe'], answer: 0 },
      ],
    },
  ],
};

export const ASTRO_SISTEMA: MiniCourse = {
  id: 'astro-sistema',
  name: 'O Sistema Solar',
  emoji: '🪐',
  kind: 'astronomia',
  summary: 'O Sol, os oito planetas e os planetas anões, e por que Plutão mudou de categoria em 2006.',
  sources: [
    OPENSTAX,
    { label: 'NASA, “Planetary Fact Sheet”', url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/' },
    { label: 'IAU, Resolução B5 (2006), definição de planeta', url: 'https://www.iau.org/static/resolutions/Resolution_GA26-5-6.pdf' },
  ],
  lessons: [
    {
      id: 'planetas',
      title: 'Os oito planetas',
      emoji: '🪐',
      intro: [
        'Em ordem, a partir do Sol: Mercúrio, Vênus, Terra e Marte, os rochosos, pequenos e com chão firme; depois Júpiter e Saturno, os gigantes gasosos, e Urano e Netuno, os gigantes de gelo.',
        'Em 2006, a União Astronômica Internacional definiu o que é planeta: gira em torno do Sol, é redondo pela própria gravidade e “limpou” a vizinhança da sua órbita. Plutão divide a órbita com muitos outros corpos do Cinturão de Kuiper, e virou planeta anão.',
        'Veja a ficha de cada planeta na aba Céu, e na aba “Na prática” descubra quanto a sua balança marcaria em cada um.',
      ],
      items: [
        { term: 'planetas rochosos', meaning: 'Mercúrio, Vênus, Terra e Marte', how: 'Pequenos, de rocha e metal.' },
        { term: 'gigantes gasosos', meaning: 'Júpiter e Saturno', how: 'Quase todo hidrogênio e hélio.' },
        { term: 'gigantes de gelo', meaning: 'Urano e Netuno', how: 'Com muita água, amônia e metano.' },
        { term: 'planeta anão', meaning: 'redondo, mas não limpou a órbita', how: 'Plutão, desde 2006, e Ceres.' },
      ],
      quiz: [
        { q: 'Qual é o maior planeta do Sistema Solar?', options: ['Júpiter', 'Saturno', 'Netuno'], answer: 0 },
        { q: 'Por que Plutão virou planeta anão?', options: ['Não limpou a vizinhança da sua órbita', 'Deixou de ser redondo', 'Saiu do Sistema Solar'], answer: 0 },
        { q: 'Qual destes é um planeta rochoso?', options: ['Marte', 'Urano', 'Saturno'], answer: 0 },
      ],
    },
    {
      id: 'sol',
      title: 'O Sol, a nossa estrela',
      emoji: '☀️',
      intro: [
        'O Sol é uma estrela, e não das maiores. Mesmo assim, ele tem cerca de 99,8% de toda a massa do Sistema Solar, e caberiam mais de um milhão de Terras dentro dele.',
        'No centro do Sol, a fusão nuclear junta núcleos de hidrogênio em hélio e solta a energia que chega até nós como luz e calor. A superfície fica perto de 5.500 °C.',
        'Nunca olhe direto para o Sol, nem com óculos escuros, binóculo ou telescópio sem o filtro certo: a luz dele queima a retina e pode cegar.',
      ],
      items: [
        { term: 'estrela', meaning: 'uma bola de gás que brilha com a própria energia', how: 'O Sol é a mais perto de nós.' },
        { term: 'fusão nuclear', meaning: 'juntar núcleos leves em mais pesados, soltando energia', how: 'No Sol: hidrogênio vira hélio.' },
      ],
      quiz: [
        { q: 'O que é o Sol?', options: ['Uma estrela', 'Um planeta muito quente', 'Uma galáxia'], answer: 0 },
        { q: 'De onde vem a energia do Sol?', options: ['Da fusão do hidrogênio em hélio', 'De carvão queimando', 'Da luz das outras estrelas'], answer: 0 },
        { q: 'Dá para olhar o Sol com óculos escuros comuns?', options: ['Não: queima a retina', 'Sim, sem problema', 'Só ao meio-dia'], answer: 0 },
      ],
    },
  ],
};

export const ASTRO_LUZ: MiniCourse = {
  id: 'astro-luz',
  name: 'A luz e as distâncias',
  emoji: '💡',
  kind: 'astronomia',
  summary: 'A luz é a régua do Universo: a unidade astronômica, o ano-luz, e por que olhar longe é olhar o passado.',
  sources: [
    OPENSTAX,
    { label: 'IAU, Resolução B2 (2012), a unidade astronômica', url: 'https://www.iau.org/static/resolutions/IAU2012_English.pdf' },
  ],
  lessons: [
    {
      id: 'velocidade',
      title: 'A velocidade da luz',
      emoji: '⚡',
      intro: [
        'A luz anda a 299.792 quilômetros por segundo no vácuo: daria mais de sete voltas na Terra em um segundo. Mesmo tão rápida, ela leva tempo para atravessar o espaço.',
        'Da Lua até nós, a luz leva pouco mais de 1 segundo. Do Sol, cerca de 8 minutos e 20 segundos. Se o Sol apagasse agora, a gente só saberia daqui a 8 minutos.',
        'Por isso olhar longe é olhar o passado: a luz que você vê de uma estrela saiu dela há anos, séculos ou milênios. Calcule na aba “Na prática”.',
      ],
      items: [
        { term: 'velocidade da luz', meaning: '299.792,458 km por segundo', how: 'O valor é exato: é com ele que se define o metro.' },
        { term: 'unidade astronômica (UA)', meaning: 'a distância média da Terra ao Sol', how: '149.597.870,7 km (IAU, 2012).' },
      ],
      quiz: [
        { q: 'Quanto a luz do Sol leva para chegar à Terra?', options: ['Cerca de 8 minutos e 20 segundos', 'Na hora, sem atraso', 'Um ano'], answer: 0 },
        { q: 'Olhar para uma estrela distante é ver…', options: ['A luz que saiu dela há muito tempo', 'A estrela exatamente como está agora', 'Um reflexo da Lua'], answer: 0 },
      ],
    },
    {
      id: 'ano-luz',
      title: 'O ano-luz',
      emoji: '📏',
      intro: [
        'Para as estrelas, o quilômetro fica pequeno demais. O ano-luz é a distância que a luz anda em um ano: cerca de 9,46 trilhões de quilômetros. Atenção: é medida de distância, não de tempo.',
        'A estrela mais perto do Sol é Proxima Centauri, a 4,2 anos-luz. A luz dela que você veria hoje saiu de lá há pouco mais de 4 anos.',
        'A galáxia de Andrômeda, a grande galáxia vizinha, está a cerca de 2,5 milhões de anos-luz. A luz que chega dela hoje saiu antes de existir o ser humano moderno.',
      ],
      items: [
        { term: 'ano-luz', meaning: 'a distância que a luz anda em um ano', how: 'Cerca de 9,46 trilhões de km.' },
        { term: 'Proxima Centauri', meaning: 'a estrela mais perto do Sol', how: 'A 4,2 anos-luz, na constelação do Centauro.' },
      ],
      quiz: [
        { q: 'O ano-luz mede…', options: ['Distância', 'Tempo', 'Brilho'], answer: 0 },
        { q: 'Qual é a estrela mais perto do Sol?', options: ['Proxima Centauri', 'Sirius', 'Betelgeuse'], answer: 0 },
      ],
    },
  ],
};

export const ASTRO_ESTRELAS: MiniCourse = {
  id: 'astro-estrelas',
  name: 'A vida das estrelas',
  emoji: '⭐',
  kind: 'astronomia',
  summary: 'Do que as estrelas são feitas, por que têm cores diferentes e como terminam: anãs brancas, supernovas e buracos negros.',
  sources: [
    OPENSTAX,
    { label: 'C. Payne, “Stellar Atmospheres”, tese, Radcliffe College (1925)', url: 'https://ui.adsabs.harvard.edu/abs/1925PhDT.........1P' },
    { label: 'Event Horizon Telescope, primeira imagem de um buraco negro (2019)', url: 'https://eventhorizontelescope.org/press-release-april-10-2019-astronomers-capture-first-image-black-hole' },
  ],
  lessons: [
    {
      id: 'payne',
      title: 'Do que as estrelas são feitas',
      emoji: '🔬',
      intro: [
        'Até os anos 1920, muitos astrônomos achavam que o Sol tinha a mesma mistura de elementos da Terra. Em 1925, Cecilia Payne, na tese dela em Harvard, mostrou com a luz das estrelas que elas são quase todas hidrogênio e hélio.',
        'Como dá para saber sem ir lá? Cada elemento deixa marcas próprias, como um código de barras, no espectro da luz (o arco-íris que se forma quando a luz passa por um prisma). É a espectroscopia.',
        'A cor também conta a temperatura: as estrelas azuladas são as mais quentes, e as avermelhadas, as mais frias. Em Órion, Rigel é azulada e Betelgeuse, avermelhada: dá para ver a olho nu.',
      ],
      items: [
        { term: 'espectroscopia', meaning: 'ler os elementos pela luz', how: 'Cada elemento deixa linhas próprias no espectro.' },
        { term: 'Cecilia Payne', meaning: 'mostrou que as estrelas são quase todas hidrogênio e hélio', how: 'Tese em Harvard, 1925.' },
        { term: 'cor e temperatura', meaning: 'azul é mais quente, vermelho é mais frio', how: 'Rigel (azulada) × Betelgeuse (avermelhada).' },
      ],
      quiz: [
        { q: 'De que as estrelas são feitas, quase todas?', options: ['Hidrogênio e hélio', 'Ferro e rocha', 'Gelo'], answer: 0 },
        { q: 'Qual estrela é mais quente?', options: ['Uma azulada', 'Uma avermelhada', 'As duas são iguais'], answer: 0 },
      ],
    },
    {
      id: 'fim',
      title: 'Como as estrelas terminam',
      emoji: '💥',
      intro: [
        'As estrelas nascem em nuvens de gás e poeira, as nebulosas, e passam a maior parte da vida transformando hidrogênio em hélio, como o Sol faz há cerca de 4,6 bilhões de anos.',
        'O fim depende da massa. Uma estrela como o Sol incha, vira uma gigante vermelha, solta as camadas de fora e termina como uma anã branca, do tamanho da Terra. As estrelas muito maiores explodem como supernovas e deixam uma estrela de nêutrons ou um buraco negro.',
        'Um buraco negro tem a gravidade tão forte que nem a luz escapa. Em 2019, o Event Horizon Telescope mostrou a primeira imagem da “sombra” de um, no centro da galáxia M87.',
      ],
      items: [
        { term: 'nebulosa', meaning: 'nuvem de gás e poeira onde nascem estrelas', how: 'A Nebulosa de Órion se vê com binóculo.' },
        { term: 'anã branca', meaning: 'o que sobra de uma estrela como o Sol', how: 'Do tamanho da Terra.' },
        { term: 'supernova', meaning: 'a explosão de uma estrela muito grande', how: 'Pode brilhar mais que a galáxia inteira por semanas.' },
        { term: 'buraco negro', meaning: 'nem a luz escapa dele', how: 'Primeira imagem: Event Horizon Telescope, 2019.' },
      ],
      quiz: [
        { q: 'Como o Sol vai terminar?', options: ['Como uma anã branca', 'Como um buraco negro', 'Explodindo amanhã'], answer: 0 },
        { q: 'Onde nascem as estrelas?', options: ['Em nebulosas', 'Dentro dos planetas', 'Nos buracos negros'], answer: 0 },
        { q: 'O que escapa de um buraco negro?', options: ['Nem a luz', 'Só a luz', 'Tudo, devagar'], answer: 0 },
      ],
    },
  ],
};

export const ASTRO_UNIVERSO: MiniCourse = {
  id: 'astro-universo',
  name: 'Galáxias e o Universo',
  emoji: '🌌',
  kind: 'astronomia',
  summary: 'A Via Láctea, as outras galáxias, o Universo que se expande e o Big Bang, há 13,8 bilhões de anos.',
  sources: [
    OPENSTAX,
    { label: 'E. Hubble, “A Relation between Distance and Radial Velocity among Extra-Galactic Nebulae”, PNAS 15 (1929)', url: 'https://doi.org/10.1073/pnas.15.3.168' },
    { label: 'ESA, Planck, a idade do Universo', url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck' },
  ],
  lessons: [
    {
      id: 'via-lactea',
      title: 'A Via Láctea',
      emoji: '🌌',
      intro: [
        'Numa noite escura, longe das luzes da cidade, dá para ver uma faixa clara atravessando o céu: é a Via Láctea, a nossa galáxia, vista de dentro.',
        'Ela é um disco em espiral com centenas de bilhões de estrelas. O Sol fica num dos braços, a cerca de 26 mil anos-luz do centro, onde há um buraco negro gigante, Sagitário A*.',
        'Até 1920, muitos achavam que a Via Láctea era o Universo inteiro. Nos anos 1920, Edwin Hubble mediu a distância de Andrômeda e mostrou que ela era outra galáxia, bem longe da nossa.',
      ],
      items: [
        { term: 'galáxia', meaning: 'um grupo enorme de estrelas, gás e poeira', how: 'A nossa é a Via Láctea.' },
        { term: 'Sagitário A*', meaning: 'o buraco negro no centro da Via Láctea', how: 'Fica na direção da constelação de Sagitário.' },
      ],
      quiz: [
        { q: 'A faixa clara no céu escuro é…', options: ['A nossa galáxia, vista de dentro', 'Uma nuvem de chuva', 'O rastro de um avião'], answer: 0 },
        { q: 'Quem mostrou que Andrômeda é outra galáxia?', options: ['Edwin Hubble', 'Galileu Galilei', 'Isaac Newton'], answer: 0 },
      ],
    },
    {
      id: 'big-bang',
      title: 'O Universo em expansão',
      emoji: '🎈',
      intro: [
        'Em 1929, Hubble publicou que as galáxias estão se afastando de nós, e as mais longe se afastam mais depressa. A explicação: o próprio espaço está se expandindo, como a massa de um pão crescendo com as passas dentro.',
        'Se tudo se afasta, no passado estava tudo junto: é a ideia do Big Bang. Em 1965, Arno Penzias e Robert Wilson acharam, sem querer, um “chiado” de micro-ondas vindo de todas as direções: o brilho que sobrou do Universo jovem.',
        'Pelas medidas do satélite Planck, o Universo tem cerca de 13,8 bilhões de anos. O Sistema Solar, uns 4,6 bilhões.',
      ],
      items: [
        { term: 'Big Bang', meaning: 'o Universo começou quente e denso e vem se expandindo', how: 'Há cerca de 13,8 bilhões de anos.' },
        { term: 'radiação cósmica de fundo', meaning: 'o brilho que sobrou do Universo jovem', how: 'Achada por Penzias e Wilson em 1965.' },
      ],
      quiz: [
        { q: 'O que Hubble viu em 1929?', options: ['As galáxias se afastando', 'Os anéis de Saturno', 'Uma estrela nova'], answer: 0 },
        { q: 'Qual é a idade do Universo?', options: ['Cerca de 13,8 bilhões de anos', 'Cerca de 6 mil anos', 'Cerca de 4,6 bilhões de anos'], answer: 0 },
      ],
    },
  ],
};

export const ASTRO_HISTORIA: MiniCourse = {
  id: 'astro-historia',
  name: 'Como a gente descobriu',
  emoji: '🔭',
  kind: 'astronomia',
  summary: 'De Copérnico e Galileu à Lua e ao telescópio James Webb: a história de como a gente aprendeu o lugar da Terra no céu.',
  sources: [
    OPENSTAX,
    { label: 'G. Galilei, “Sidereus Nuncius” (1610)', url: 'https://www.loc.gov/search/?q=Sidereus+nuncius' },
    { label: 'NASA, “Apollo 11 Mission Overview”', url: 'https://www.nasa.gov/mission/apollo-11/' },
    { label: 'NASA, James Webb Space Telescope', url: 'https://science.nasa.gov/mission/webb/' },
  ],
  lessons: [
    {
      id: 'heliocentrismo',
      title: 'A Terra sai do centro',
      emoji: '☀️',
      intro: [
        'Por séculos, a ideia mais aceita na Europa era a de Ptolomeu: a Terra parada no centro e tudo girando em volta. Em 1543, Nicolau Copérnico publicou que é a Terra que gira em torno do Sol.',
        'Em 1610, Galileu Galilei apontou um telescópio para o céu e viu quatro luas girando em volta de Júpiter, e as fases de Vênus: provas de que nem tudo gira em torno da Terra.',
        'Johannes Kepler mostrou que as órbitas são elipses, e não círculos (1609), e Isaac Newton explicou tudo com uma só lei, a gravitação universal, nos “Principia”, de 1687.',
      ],
      items: [
        { term: 'heliocentrismo', meaning: 'o Sol no centro, a Terra girando em volta', how: 'Copérnico, 1543.' },
        { term: 'luas galileanas', meaning: 'Io, Europa, Ganimedes e Calisto, as luas de Júpiter', how: 'Galileu, 1610.' },
        { term: 'gravitação universal', meaning: 'a mesma força faz a maçã cair e a Lua girar', how: 'Newton, 1687.' },
      ],
      quiz: [
        { q: 'O que Galileu viu em Júpiter, em 1610?', options: ['Quatro luas girando em volta dele', 'Anéis', 'Água'], answer: 0 },
        { q: 'Quem mostrou que as órbitas são elipses?', options: ['Kepler', 'Ptolomeu', 'Hubble'], answer: 0 },
      ],
    },
    {
      id: 'espaco',
      title: 'A corrida para o espaço',
      emoji: '🚀',
      intro: [
        'Em 4 de outubro de 1957, a União Soviética lançou o Sputnik 1, o primeiro satélite artificial. Em 12 de abril de 1961, Yuri Gagarin foi o primeiro ser humano a dar uma volta na Terra no espaço.',
        'Em 20 de julho de 1969, Neil Armstrong e Buzz Aldrin, da Apollo 11, desceram na Lua. Ao todo, doze pessoas andaram lá, até 1972.',
        'Hoje os telescópios vão para o espaço, acima do ar que borra a imagem: o Hubble, desde 1990, e o James Webb, lançado em 25 de dezembro de 2021, que enxerga no infravermelho as primeiras galáxias.',
      ],
      items: [
        { term: 'Sputnik 1', meaning: 'o primeiro satélite artificial', how: 'União Soviética, 4 de outubro de 1957.' },
        { term: 'Apollo 11', meaning: 'a primeira descida de pessoas na Lua', how: '20 de julho de 1969.' },
        { term: 'James Webb', meaning: 'o telescópio espacial que vê no infravermelho', how: 'Lançado em 25 de dezembro de 2021.' },
      ],
      quiz: [
        { q: 'Quem foi o primeiro ser humano no espaço?', options: ['Yuri Gagarin', 'Neil Armstrong', 'Marcos Pontes'], answer: 0 },
        { q: 'Em que ano a Apollo 11 desceu na Lua?', options: ['1969', '1957', '1990'], answer: 0 },
        { q: 'Por que pôr um telescópio no espaço?', options: ['O ar borra a imagem', 'Para ficar mais perto das estrelas', 'Porque é mais barato'], answer: 0 },
      ],
    },
  ],
};

export const UNIDADES_ASTRO: MiniCourse[] = [ASTRO_CEU, ASTRO_SISTEMA, ASTRO_LUZ, ASTRO_ESTRELAS, ASTRO_UNIVERSO, ASTRO_HISTORIA].map(comOpcoesEmbaralhadas);

/** Os ramos que ainda vão chegar (a lista do dono em `docs/areas-futuras.md`). */
export const PROXIMAS_UNIDADES_ASTRO = [
  { emoji: '🔭', nome: 'Observar o céu', sobre: 'Binóculo, telescópio e cartas do céu: o que dá para ver do quintal e como começar.' },
  { emoji: '👽', nome: 'Astrobiologia', sobre: 'Os exoplanetas, a zona habitável e a procura por vida fora da Terra.' },
  { emoji: '🌀', nome: 'Cosmologia', sobre: 'A matéria escura, a energia escura e o destino do Universo.' },
  { emoji: '🪶', nome: 'O céu dos povos', sobre: 'As constelações indígenas do Brasil e os céus de outras culturas.' },
];
