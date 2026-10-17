/**
 * Os amigos do Linu: outras espécies de pinguim e vizinhos da fauna antártica e subantártica. Cada
 * um tem nome de personagem, a espécie de verdade (nome científico) e só fatos bem estabelecidos.
 * Os desenhos ficam em src/components/LinuAmigo.tsx, no mesmo estilo do Linu.
 */
/**
 * O aniversário do próprio Linu, pro calendário de lições (item 25b, 16/10/2026). 25 de abril é o
 * Dia Mundial do Pinguim de verdade — os outros aniversários (`birthday` de cada `AmigoLinu`) são
 * datas inventadas e espalhadas pelo ano, sem essa referência real.
 */
export const LINU_BIRTHDAY = '04-25';

export type AmigoGrupo = 'pinguim' | 'vizinho';

export interface AmigoLinu {
  id: string;
  /** nome do personagem */
  name: string;
  /** a espécie, em português */
  species: string;
  scientific: string;
  group: AmigoGrupo;
  /** tamanho de um adulto, em palavras */
  size: string;
  /** onde vive */
  home: string;
  /** o jeito do personagem, numa frase */
  jeito: string;
  /** o que ele diz ao se apresentar */
  hi: string;
  facts: string[];
  /** o artigo do nome (“o Tobias”, “a Dedé”), para o “você achou o…” */
  artigo: 'o' | 'a';
  /** a tela do app em que ele fica escondido (ver AmigoEscondido) */
  esconderijo: string;
  /** a dica de onde achar, mostrada antes de achar */
  dica: string;
  /**
   * Aniversário simbólico, 'MM-DD' (pedido do dono, item 25b do PENDENTES.md, 16/10/2026: "pode...
   * inventar os aniversários"). Data inventada, espalhada pelo ano sem repetir — não é uma
   * efeméride de verdade pesquisada espécie por espécie, é só pra marcar no calendário de lições.
   */
  birthday: string;
}

export const AMIGOS_LINU: AmigoLinu[] = [
  {
    id: 'imperador',
    name: 'Tobias',
    species: 'Pinguim-imperador',
    scientific: 'Aptenodytes forsteri',
    group: 'pinguim',
    size: 'até cerca de 1,2 m',
    home: 'No gelo em volta de todo o continente antártico',
    jeito: 'O mais alto da turma, calmo e paciente.',
    hi: 'Sou o maior pinguim do mundo. No inverno, eu e os outros pais ficamos juntinhos para aguentar o frio.',
    artigo: 'o',
    esconderijo: '/',
    dica: 'O Tobias é paciente e espera bem quietinho na Trilha, perto do meu abrigo.',
    birthday: '01-20',
    facts: [
      'É a maior espécie de pinguim que existe.',
      'É o único pinguim que choca os ovos no auge do inverno antártico, sobre o gelo do mar.',
      'O pai choca o único ovo em cima dos pés, coberto por uma dobra de pele da barriga, e passa esse tempo todo sem comer.',
      'Os adultos se amontoam em grupos enormes e vão trocando de lugar, para que todos passem um tempo no meio, mais quente.',
    ],
  },
  {
    id: 'rei',
    name: 'Duque',
    species: 'Pinguim-rei',
    scientific: 'Aptenodytes patagonicus',
    group: 'pinguim',
    size: 'cerca de 90 cm',
    home: 'Ilhas subantárticas, como a Geórgia do Sul',
    jeito: 'Elegante, com as manchas laranja sempre impecáveis.',
    hi: 'O Tobias é meu primo grande: somos do mesmo gênero, Aptenodytes.',
    artigo: 'o',
    esconderijo: '/vocabulario',
    dica: 'O Duque gosta de tudo bem guardado. Procure no Cofre das palavras.',
    birthday: '02-14',
    facts: [
      'É o segundo maior pinguim, menor só que o imperador, do mesmo gênero.',
      'Tem manchas laranja vivas dos lados da cabeça e no alto do peito.',
      'Os filhotes têm uma penugem marrom tão fofa que parecem maiores que os pais.',
    ],
  },
  {
    id: 'adelia',
    name: 'Dedé',
    species: 'Pinguim-de-adélia',
    scientific: 'Pygoscelis adeliae',
    group: 'pinguim',
    size: 'cerca de 70 cm',
    home: 'Costas de todo o continente antártico',
    jeito: 'Agitada e curiosa, está sempre carregando uma pedrinha.',
    hi: 'O Linu é meu primo de verdade: nós dois, e o Pipo, somos do gênero Pygoscelis.',
    artigo: 'a',
    esconderijo: '/gramatica',
    dica: 'A Dedé vive arrumando pedrinhas em ordem, como as regras da Gramática.',
    birthday: '03-10',
    facts: [
      'É prima do Linu: o pinguim-de-adélia, o pinguim-de-barbicha e o gentoo formam o gênero Pygoscelis.',
      'Tem um anel branco em volta de cada olho.',
      'Faz o ninho com pedrinhas, que às vezes são disputadas com os vizinhos.',
      'O nome homenageia Adèle, a esposa do explorador francês Jules Dumont d’Urville, que comandou uma expedição à Antártida no século XIX.',
    ],
  },
  {
    id: 'gentoo',
    name: 'Pipo',
    species: 'Pinguim-gentoo (pinguim-papua)',
    scientific: 'Pygoscelis papua',
    group: 'pinguim',
    size: 'cerca de 80 cm',
    home: 'Península Antártica e ilhas subantárticas',
    jeito: 'O mais rápido na água, e adora uma corrida.',
    hi: 'Aposto uma corrida até o krill! Debaixo d’água ninguém me alcança.',
    artigo: 'o',
    esconderijo: '/cultura',
    dica: 'O Pipo corre por todas as culturas do mundo. Procure na Cultura.',
    birthday: '04-03',
    facts: [
      'Também é primo do Linu, do gênero Pygoscelis.',
      'Tem o bico laranja e uma faixa branca por cima da cabeça, de um olho ao outro.',
      'É considerado o pinguim mais rápido debaixo d’água.',
    ],
  },
  {
    id: 'macaroni',
    name: 'Topete',
    species: 'Pinguim-macaroni',
    scientific: 'Eudyptes chrysolophus',
    group: 'pinguim',
    size: 'cerca de 70 cm',
    home: 'Ilhas subantárticas e a Península Antártica',
    jeito: 'Vaidoso: vive arrumando o penacho.',
    hi: 'Repare no meu penacho! Foi por causa dele que ganhei esse nome.',
    artigo: 'o',
    esconderijo: '/conversa',
    dica: 'O Topete adora uma conversa sobre o penacho dele. Procure na Conversa.',
    birthday: '05-08',
    facts: [
      'Tem um penacho de penas amarelo-alaranjadas que sai do meio da testa.',
      'O nome vem dos “macaronis”, rapazes ingleses do século XVIII famosos pelos penteados e roupas exagerados.',
      'O bico é grosso e laranja-avermelhado.',
    ],
  },
  {
    id: 'weddell',
    name: 'Wendel',
    species: 'Foca-de-weddell',
    scientific: 'Leptonychotes weddellii',
    group: 'vizinho',
    size: 'cerca de 3 m',
    home: 'No gelo preso à costa, em volta da Antártida',
    jeito: 'Tranquilo e sorridente, passa horas cochilando no gelo.',
    hi: 'Nenhum mamífero mora tão ao sul quanto eu. E eu adoro um cochilo no gelo.',
    artigo: 'o',
    esconderijo: '/comunidade',
    dica: 'O Wendel cochila onde tem gente por perto. Procure na Comunidade.',
    birthday: '06-01',
    facts: [
      'É o mamífero que vive mais ao sul do planeta.',
      'Raspa o gelo com os dentes para manter abertos os buracos por onde sobe para respirar.',
      'Consegue ficar mais de uma hora debaixo d’água num mergulho.',
    ],
  },
  {
    id: 'elefante-marinho',
    name: 'Bolota',
    species: 'Elefante-marinho-do-sul',
    scientific: 'Mirounga leonina',
    group: 'vizinho',
    size: 'os machos passam de 4 m',
    home: 'Ilhas subantárticas e o oceano Austral',
    jeito: 'Grandalhão e barulhento, mas só quer tomar sol na praia.',
    hi: 'Ouviu esse ronco? Fui eu, com o meu nariz de tromba!',
    artigo: 'o',
    esconderijo: '/perfil',
    dica: 'O Bolota toma sol bem no fim do Perfil, depois de todas as opções.',
    birthday: '06-25',
    facts: [
      'É a maior foca do mundo: os machos podem passar de 3 toneladas.',
      'O nome vem do nariz dos machos adultos, uma tromba que infla e ajuda a fazer roncos altíssimos.',
      'Passa a maior parte da vida no mar e mergulha a centenas de metros de profundidade.',
    ],
  },
  {
    id: 'leopardo',
    name: 'Malhada',
    species: 'Foca-leopardo',
    scientific: 'Hydrurga leptonyx',
    group: 'vizinho',
    size: 'cerca de 3 m',
    home: 'Em volta da Antártida, no gelo à deriva',
    jeito: 'Uma amiga de longe: ela caça pinguins, então o Linu acena de bem longe.',
    hi: 'Oi, Linu! Por que você está tão longe?',
    artigo: 'a',
    esconderijo: '/mapa',
    dica: 'A Malhada observa o mundo de longe. Procure no Mapa das línguas.',
    birthday: '07-19',
    facts: [
      'É uma das maiores predadoras do oceano Austral: come krill, peixes, pinguins e até outras focas.',
      'Tem a cabeça grande e comprida, e a pele cinzenta coberta de pintas escuras, daí o nome.',
      'Os dentes de trás se encaixam como uma peneira, que filtra o krill da água.',
    ],
  },
  {
    id: 'jubarte',
    name: 'Jubi',
    species: 'Baleia-jubarte',
    scientific: 'Megaptera novaeangliae',
    group: 'vizinho',
    size: 'cerca de 15 m',
    home: 'Oceano Austral no verão; o litoral do Brasil no inverno',
    jeito: 'Viajante e cantora: todo ano visita o Brasil.',
    hi: 'No verão eu como krill na Antártida; no inverno eu nado até o Brasil para ter meus filhotes!',
    artigo: 'a',
    esconderijo: '/album',
    dica: 'A Jubi viaja muito e guarda lembranças no Álbum de figurinhas.',
    birthday: '08-12',
    facts: [
      'As jubartes que passam o verão perto da Antártida viajam até o litoral do Brasil, sobretudo o banco dos Abrolhos, na Bahia, para ter os filhotes.',
      'As nadadeiras do peito são enormes: chegam a um terço do comprimento do corpo.',
      'Os machos cantam canções longas, que se repetem e mudam aos poucos ao longo dos anos.',
    ],
  },
  {
    id: 'krill',
    name: 'Kiko',
    species: 'Krill-antártico',
    scientific: 'Euphausia superba',
    group: 'vizinho',
    size: 'cerca de 6 cm',
    home: 'Águas do oceano Austral, em cardumes enormes',
    jeito: 'Pequenininho, mas nunca anda sozinho.',
    hi: 'Eu sou pequeno, mas sem mim ninguém aqui teria o que comer!',
    artigo: 'o',
    esconderijo: 'loja',
    dica: 'O Kiko está onde o krill vira presente: na Loja do Linu, no Perfil.',
    birthday: '09-06',
    facts: [
      'É um pequeno crustáceo, parente distante dos camarões.',
      'É a base da cadeia alimentar da Antártida: pinguins (como o Linu), focas, baleias e aves comem krill.',
      'Vive em cardumes com milhões de indivíduos e está entre os animais selvagens mais numerosos do planeta.',
    ],
  },
  {
    id: 'albatroz',
    name: 'Vento',
    species: 'Albatroz-errante',
    scientific: 'Diomedea exulans',
    group: 'vizinho',
    size: 'asas abertas de até cerca de 3,5 m',
    home: 'Céu do oceano Austral; faz ninho em ilhas subantárticas',
    jeito: 'Quase nunca pousa: traz as notícias de todos os cantos do oceano.',
    hi: 'Acabei de dar uma volta enorme pelo oceano, quase sem bater as asas!',
    artigo: 'o',
    esconderijo: '/lazer',
    dica: 'O Vento traz jogos de todos os cantos do oceano. Procure no Lazer, na aba Tabuleiro.',
    birthday: '10-01',
    facts: [
      'Tem a maior envergadura entre as aves vivas: de uma ponta à outra das asas, até cerca de 3,5 m.',
      'Plana por horas aproveitando o vento sobre as ondas, quase sem bater as asas.',
      'Passa anos no mar e só volta à terra para fazer ninho.',
    ],
  },
  {
    id: 'petrel',
    name: 'Floco',
    species: 'Petrel-das-neves',
    scientific: 'Pagodroma nivea',
    group: 'vizinho',
    size: 'cerca de 35 cm',
    home: 'Costa e montanhas do continente antártico',
    jeito: 'Todo branquinho, some no meio da neve.',
    hi: 'Estou aqui! Na neve ninguém me acha.',
    artigo: 'o',
    esconderijo: '/diario',
    dica: 'O Floco é branquinho e some numa página em branco. Procure no Diário.',
    birthday: '11-15',
    facts: [
      'É todo branco, só com o bico e os olhos pretos.',
      'Faz ninho em fendas de rochas na Antártida, às vezes bem longe do mar.',
      'Para se defender, cospe um óleo do estômago em quem chega perto do ninho.',
    ],
  },
  // ——— os amigos das outras áreas (pedido do dono, 17/10/2026: “cria novos amigos e coloca eles nas
  // outras abas e apps”): cada um escondido numa aba do Lazer, da Música, da Biologia ou da Psicologia
  {
    id: 'barbicha',
    name: 'Bento',
    species: 'Pinguim-de-barbicha',
    scientific: 'Pygoscelis antarcticus',
    group: 'pinguim',
    size: 'cerca de 70 cm',
    home: 'Península Antártica e ilhas do oceano Austral',
    jeito: 'Conhece cada paisagem do gelo e adora explicar onde cada bicho vive.',
    hi: 'Repara na linha preta embaixo do meu queixo: é por causa dela que me chamam de barbicha!',
    artigo: 'o',
    esconderijo: '/biomas',
    dica: 'O Bento conhece cada paisagem do gelo. Procure na Biologia, na aba Biomas.',
    birthday: '12-08',
    facts: [
      'O nome vem da faixa preta fina embaixo do queixo, que parece uma barbicha.',
      'É do mesmo gênero do pinguim-de-adélia e do gentoo: Pygoscelis.',
      'Faz o ninho com pedrinhas, em encostas de pedra.',
      'Come principalmente krill.',
    ],
  },
  {
    id: 'saltador',
    name: 'Saltinho',
    species: 'Pinguim-saltador-da-rocha',
    scientific: 'Eudyptes chrysocome',
    group: 'pinguim',
    size: 'cerca de 50 cm',
    home: 'Ilhas subantárticas, como as Malvinas',
    jeito: 'Não para quieto: transforma qualquer caminho numa corrida de obstáculos.',
    hi: 'Andar é muito devagar! Eu vou pulando de pedra em pedra, com os dois pés juntos.',
    artigo: 'o',
    esconderijo: '/lazer-esportes',
    dica: 'O Saltinho vive pulando de pedra em pedra. Procure no Lazer, na aba Esportes.',
    birthday: '02-27',
    facts: [
      'Em vez de andar, sobe as encostas de pedra pulando com os dois pés juntos.',
      'Tem penas amarelas espetadas acima dos olhos, como sobrancelhas, e olhos vermelhos.',
      'É do mesmo gênero do pinguim-macaroni: Eudyptes.',
      'É um dos menores pinguins de penacho.',
    ],
  },
  {
    id: 'orca',
    name: 'Maestra',
    species: 'Orca',
    scientific: 'Orcinus orca',
    group: 'vizinho',
    size: 'os machos chegam a cerca de 9 m',
    home: 'Todos os oceanos, inclusive em volta da Antártida',
    jeito: 'A regente da família: reconhece cada grupo pelo jeito de chamar.',
    hi: 'Cada família de orcas tem os seus próprios chamados, como um sotaque. Quer ouvir o nosso?',
    artigo: 'a',
    esconderijo: '/ouvido',
    dica: 'A Maestra reconhece cada família pelo chamado. Procure na Música, na aba Ouvido.',
    birthday: '03-28',
    facts: [
      'Apesar do apelido de baleia-assassina, é o maior golfinho que existe.',
      'Vive em grupos de família, guiados pelas fêmeas mais velhas.',
      'Cada grupo tem um conjunto próprio de chamados, como um dialeto.',
      'Acha as presas pela ecolocalização: solta cliques e escuta o eco.',
    ],
  },
  {
    id: 'peixe-gelo',
    name: 'Cristal',
    species: 'Peixe-gelo',
    scientific: 'Chaenocephalus aceratus',
    group: 'vizinho',
    size: 'até cerca de 70 cm',
    home: 'Águas geladas em volta da Península Antártica e das ilhas próximas',
    jeito: 'Curiosa e transparente: não esconde nada de ninguém.',
    hi: 'Meu sangue quase não tem cor, sabia? Venha ver no laboratório!',
    artigo: 'a',
    esconderijo: '/laboratorio',
    dica: 'A Cristal tem o sangue quase transparente e adora um experimento. Procure na Biologia, no Laboratório.',
    birthday: '08-28',
    facts: [
      'Os peixes-gelo são os únicos vertebrados adultos que não têm hemoglobina no sangue.',
      'Sem hemoglobina, o sangue fica claro, quase transparente, em vez de vermelho.',
      'Para compensar, têm o coração grande e muito sangue circulando.',
      'Como outros peixes da Antártida, têm no sangue proteínas que impedem que ele congele.',
    ],
  },
  {
    id: 'pomba-antartica',
    name: 'Nevinha',
    species: 'Pomba-antártica',
    scientific: 'Chionis albus',
    group: 'vizinho',
    size: 'cerca de 40 cm',
    home: 'Península Antártica e ilhas subantárticas',
    jeito: 'Curiosa demais: observa todo mundo para entender como cada um pensa.',
    hi: 'Não sou pomba de verdade, viu? Só sou branquinha. E vivo de olho no que todo mundo faz.',
    artigo: 'a',
    esconderijo: '/experimentos',
    dica: 'A Nevinha observa tudo e todos. Procure na Psicologia, na aba Lab.',
    birthday: '10-20',
    facts: [
      'Apesar do nome, não é pomba: é uma ave da costa, parente das gaivotas.',
      'É a única ave da Antártida sem membrana entre os dedos dos pés.',
      'Tem uma capa dura sobre a base do bico, que dá o nome em inglês: sheathbill.',
      'Come quase de tudo e assusta os pinguins para roubar o krill que eles levam aos filhotes.',
    ],
  },
  {
    id: 'skua',
    name: 'Blefe',
    species: 'Skua-polar-do-sul',
    scientific: 'Stercorarius maccormicki',
    group: 'vizinho',
    size: 'cerca de 53 cm',
    home: 'O litoral da Antártida, no verão',
    jeito: 'Esperto e cheio de truques: nunca mostra as cartas que tem na mão.',
    hi: 'Uma partidinha de cartas? Eu jogo limpo... quase sempre.',
    artigo: 'o',
    esconderijo: '/lazer-cartas',
    dica: 'O Blefe adora um jogo de cartas e esconde bem o que tem na mão. Procure no Lazer, na aba Cartas.',
    birthday: '05-30',
    facts: [
      'Faz o ninho no litoral da Antártida durante o verão.',
      'Come peixe e também rouba a comida de outras aves.',
      'Defende o ninho dando rasantes em quem chega perto.',
      'No inverno do sul, voa até os oceanos do hemisfério norte.',
    ],
  },
  {
    id: 'lobo-marinho',
    name: 'Tenor',
    species: 'Lobo-marinho-antártico',
    scientific: 'Arctocephalus gazella',
    group: 'vizinho',
    size: 'os machos chegam a cerca de 2 m',
    home: 'Ilhas subantárticas, principalmente a Geórgia do Sul',
    jeito: 'Vozeirão: chama tão alto que a colônia inteira escuta.',
    hi: 'Numa praia com milhares de nós, eu acho a minha mãe só pela voz!',
    artigo: 'o',
    esconderijo: '/tocar',
    dica: 'O Tenor tem um vozeirão e reconhece a mãe pela voz. Procure na Música, na aba Tocar.',
    birthday: '12-20',
    facts: [
      'Ao contrário das focas verdadeiras, tem orelhinhas por fora.',
      'Anda apoiado nas nadadeiras da frente, com o corpo erguido.',
      'A mãe e o filhote se reconhecem pela voz no meio da colônia barulhenta.',
      'Quase foi extinto pela caça às peles no século XIX, e a população se recuperou.',
    ],
  },
];

export const GRUPOS_AMIGOS: Record<AmigoGrupo, string> = {
  pinguim: '🐧 Pinguins',
  vizinho: '🧊 Vizinhos do gelo',
};
