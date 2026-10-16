/**
 * Jogos do conhecimento (Cultura → aba "🎲 Jogos", e atalho no Perfil ao lado de línguas
 * artificiais): jogos de tabuleiro/estratégia, fora do escopo de idiomas. Lista inicial, pedida
 * pelo Matheus em 05-07/10/2026 ("por enquanto", pode crescer): damas, xadrez, quoridor/bloqueio,
 * octi (octógono fantástico) e abalone. Depois entraram, todos com pedido confirmado do Matheus:
 * Hnefatafl e Jogo do Moinho (Trilha) em 09/10/2026, e na mesma rodada Conecta 4 (hoje “Ligue 4”, pedido do dono de 11/10/2026), Oware e
 * Reversi/Othello. Cada jogo só entra com regras e história reais e citáveis — nunca inventadas
 * (mesma régua do resto do app, ver AGENTS.md). Todos os jogos abaixo são `playable: true`, com
 * motor de regras de verdade (`src/services/*-engine.ts`) e tabuleiro jogável
 * (`src/components/*Board.tsx`).
 */

export type GameStatus = 'pronto' | 'em breve';

/** Como os jogos ficam agrupados na aba (pedido do dono, 11/10/2026: “organize melhor”). */
export type CategoriaJogo = 'guerra' | 'cerco' | 'linha' | 'semear' | 'caca' | 'sorte' | 'modernos';

/** Época de origem (para o filtro “quando”), tirada do `year` de cada jogo. */
export type EpocaJogo = 'antigos' | 'medievais' | 'modernos' | 'contemporaneos' | 'atuais' | 'tradicionais';
export const EPOCAS: { id: EpocaJogo; nome: string }[] = [
  { id: 'antigos', nome: 'Antiguidade (antes de 500)' },
  { id: 'medievais', nome: 'Idade Média (500 a 1500)' },
  { id: 'modernos', nome: 'Séculos XVI a XIX' },
  { id: 'contemporaneos', nome: 'Século XX' },
  { id: 'atuais', nome: 'Século XXI' },
  { id: 'tradicionais', nome: 'Tradicionais, sem data certa' },
];

/** Continente de origem (para o filtro “onde”), tirado do `where` de cada jogo. */
export type RegiaoJogo = 'africa' | 'asia' | 'europa' | 'americas' | 'oceania';
export const REGIOES: { id: RegiaoJogo; nome: string }[] = [
  { id: 'africa', nome: 'África' },
  { id: 'asia', nome: 'Ásia' },
  { id: 'europa', nome: 'Europa' },
  { id: 'americas', nome: 'Américas' },
  { id: 'oceania', nome: 'Oceania' },
];

export const CATEGORIAS: { id: CategoriaJogo; nome: string; descricao: string }[] = [
  { id: 'guerra', nome: 'Batalhas no tabuleiro', descricao: 'Capturar peças e encurralar o rei.' },
  { id: 'cerco', nome: 'Cercar e conquistar', descricao: 'Ganha quem cerca mais espaço ou mais peças.' },
  { id: 'linha', nome: 'Peças em linha', descricao: 'Ganha quem alinha primeiro.' },
  { id: 'semear', nome: 'Semear e colher', descricao: 'Os jogos de mancala, com sementes em covas.' },
  { id: 'caca', nome: 'Caçador e presas', descricao: 'Um lado caça, o outro foge ou encurrala: forças desiguais.' },
  { id: 'sorte', nome: 'Dados e pedras', descricao: 'Corridas e peças tiradas no escuro: sorte e estratégia juntas.' },
  { id: 'modernos', nome: 'Estratégia moderna', descricao: 'Jogos inventados no século XX.' },
];

export interface GameRule {
  title: string;
  text: string;
}

/** Uma variante regional/histórica do jogo: o que muda e onde é jogada assim. */
export interface GameVariant {
  name: string;
  where: string;
  text: string;
  /**
   * Quando a variante dá para jogar no app: o id da regra que o tabuleiro entende (ex. 'inglesa' nas
   * damas). Aparece no seletor “Variante” da página do jogo, e a escolha fica em `jogosPrefs.variantes`.
   */
  jogavel?: string;
}

export interface KnowledgeGame {
  id: string;
  name: string;
  emoji: string;
  status: GameStatus;
  /** quando surgiu (ou as raízes, quando o jogo evoluiu por séculos) */
  year?: string;
  where?: string;
  /**
   * De onde vem o nome (pedido do dono, 14/10/2026): a palavra de origem, o que ela quer dizer e o
   * caminho até o nome que usamos em português (ex.: xadrez ← árabe aš-šaṭranj ← sânscrito
   * chaturanga). Com fonte, como o resto; onde a origem é incerta, dizer isso.
   */
  etimologia?: string;
  about?: string;
  rules?: GameRule[];
  variants?: GameVariant[];
  /** pro tabuleiro desenhado: lado em casas (8 = 8×8). As peças somem em "em breve". */
  board?: { size: number; rows: number; dark: string; light: string; a: string; b: string };
  /** se tem motor de regras + tabuleiro de verdade pra jogar (não só história/regras em texto). */
  playable?: boolean;
  categoria?: CategoriaJogo;
  epoca?: EpocaJogo;
  regiao?: RegiaoJogo;
  /** o povo ou o país de origem, em poucas palavras */
  povo?: string;
  /** dá para jogar contra o Linu (o adversário do computador, ver `jogos-ia.ts`) */
  linu?: boolean;
}

const DAMAS_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Só as casas escuras entram em jogo. Cada jogador começa com as peças nas fileiras mais próximas dele.' },
  { title: 'Movimento', text: 'As peças comuns andam uma casa na diagonal, sempre para a frente.' },
  { title: 'Captura', text: 'Captura-se saltando sobre a peça do adversário e caindo na casa vazia logo depois dela, na diagonal.' },
  { title: 'Virar dama', text: 'Ao chegar na última fileira do lado do adversário, a peça vira "dama" e ganha movimento mais forte — o quanto, muda de uma variante para a outra (veja abaixo).' },
  {
    title: 'Regras do tabuleiro jogável deste app',
    text: 'Aqui valem as regras brasileiras (CBD/FMJD, tabuleiro 8×8): a captura é SEMPRE obrigatória — se há salto possível, você precisa capturar, e se há mais de uma sequência de captura, só a que captura o maior número de peças é permitida ("lei da maioria"). A peça comum captura na diagonal pra frente E pra trás (só o lance sem captura é pra frente). A dama "voa": anda e captura à distância, escolhendo em qual casa vazia pousar depois da peça capturada.',
  },
];

const DAMAS: KnowledgeGame = {
  id: 'damas',
  epoca: 'medievais',
  regiao: 'europa',
  povo: 'franceses, com raízes árabes',
  categoria: 'guerra',
  linu: true,
  name: 'Damas',
  emoji: '⚫',
  status: 'pronto',
  playable: true,
  year: 'raízes no séc. X; virou "jogo das damas" por volta do séc. XII',
  where: 'raízes árabes/norte-africanas; o jogo de damas nasceu no sul da França',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Draughts” (nomes, “fierges”, persa ferz); Wikcionário, “dama” (português: do francês dame, do latim domina).
  etimologia:
    '“Dama” vem do francês dame, que vem do latim domina, “senhora”. Por volta de 1243 o jogo se chamava fierges, o nome da rainha do xadrez naquela época, vindo do persa ferz, “conselheiro do rei”. Quando a rainha do xadrez passou a ser chamada de dame, as peças coroadas do jogo também: daí “jogo das damas”. O português pegou a palavra do francês, e em inglês o jogo ficou “checkers” (por causa do tabuleiro quadriculado) ou “draughts”.',
  about:
    'As damas descendem do alquerque: um jogo árabe (quirkat, também chamado al-qirq), jogado num tabuleiro 5×5, já citado no livro "Kitab al-Aghani", do século X. Os mouros levaram o alquerque para a Espanha, onde as regras aparecem no "Libro de los juegos", de Alfonso X, no século XIII. Por volta do século XII, provavelmente no sul da França, alguém pôs as peças do alquerque no tabuleiro de xadrez (8×8) e as prendeu às diagonais: nasceu o "fierges", depois chamado "jeu de dames" (o jogo das damas). No século XVI, a França tornou a captura obrigatória, virando o "jeu force". O alquerque também está nos Jogos do conhecimento, para jogar.',
  rules: DAMAS_RULES,
  variants: [
    {
      name: 'Damas inglesas/americanas (English draughts / checkers)',
      where: 'Reino Unido e Estados Unidos',
      text: 'Tabuleiro 8×8, 12 peças por jogador. A peça comum só captura para a frente. A dama captura uma casa de cada vez (não "voa" por várias), mas pode andar e capturar para trás também. A captura é obrigatória, mas quem joga escolhe qual fazer, sem precisar ser a que captura mais; a sequência escolhida vai até o fim. A peça que chega à última fileira capturando vira dama e o lance acaba ali (Wikipédia em inglês, “English draughts”, consultada em 15/10/2026). Dá para jogar no app: escolha “Damas inglesas/americanas”.',
      jogavel: 'inglesa',
    },
    {
      name: 'Damas internacionais (International draughts)',
      where: 'criado por um polonês anônimo no século XVIII; popularizado nos Países Baixos',
      text: 'Tabuleiro 10×10, 20 peças por jogador. A peça comum captura para a frente E para trás. A dama "voa": anda e captura várias casas de uma vez na diagonal, sem precisar parar logo depois da peça capturada. A captura é obrigatória, e tem que ser sempre a que captura o MAIOR número de peças possível (a "regra da maioria"). Dá para jogar no app: escolha “Damas internacionais” (aqui, como nas outras damas do app, as escuras começam).',
      jogavel: 'internacional',
    },
  ],
  board: { size: 8, rows: 8, dark: '#334155', light: '#E2E8F0', a: '#1E293B', b: '#F8FAFC' },
};

const QUORIDOR_RULES: GameRule[] = [
  { title: 'Tabuleiro e objetivo', text: 'Tabuleiro 9×9. Cada jogador começa no meio da fileira do seu lado e precisa ser o primeiro a chegar a qualquer casa da fileira oposta.' },
  { title: 'Na sua vez', text: 'Você faz UMA coisa: anda com a sua peça uma casa (na horizontal ou vertical, nunca na diagonal de cara) ou coloca uma parede.' },
  { title: 'Saltar o adversário', text: 'Se a peça do adversário estiver colada à sua, você pode saltar por cima dela, caindo na casa logo depois. Se essa casa estiver bloqueada por parede ou pela borda do tabuleiro, você salta na diagonal, para um dos lados.' },
  { title: 'Paredes', text: 'Cada jogador tem 10 paredes (no 2 jogadores). Uma parede ocupa a borda de 2 casas vizinhas, trava a passagem por ali e não pode se cruzar nem se sobrepor a outra. A única regra que vale sempre: nenhuma parede pode fechar de vez o último caminho de QUALQUER jogador até a chegada dele.' },
  { title: 'Quoridor Kid (7×7)', text: 'Em 2004 a Gigamic lançou a versão para crianças: tabuleiro de 7×7 e 16 paredes (8 para cada um, a dois). As outras versões (Pocket, Mini, Deluxe, Giant) são de tamanhos diferentes de tabuleiro, mas a fonte não diz que mudam o número de casas (Wikipédia em inglês, “Quoridor”). Aqui dá para escolher o 7×7, com as mesmas regras.' },
];

const QUORIDOR: KnowledgeGame = {
  id: 'quoridor',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'França',
  categoria: 'modernos',
  linu: true,
  name: 'Quoridor',
  emoji: '🧱',
  status: 'pronto',
  playable: true,
  year: '1997',
  where: 'criado pelo designer francês Mirko Marchesi; publicado pela Gigamic (França)',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês e em francês, “Quoridor” (nenhuma das duas explica o nome).
  etimologia:
    'Nem a Gigamic nem os artigos da Wikipédia em inglês e em francês explicam o nome. “Quoridor” soa como corridor, “corredor” em inglês e em francês, e o jogo é justamente abrir caminho por corredores entre paredes, mas não achamos o autor confirmando isso: a origem é incerta. Em português, o jogo é vendido com o nome original.',
  about:
    'O Quoridor foi criado em 1997 pelo designer de jogos francês Mirko Marchesi e publicado pela empresa francesa Gigamic. Diferente da maioria dos jogos de tabuleiro "de guerra" (xadrez, damas), aqui ninguém captura peça de ninguém: o objetivo é só chegar primeiro ao outro lado do tabuleiro, usando paredes para atrapalhar o caminho do adversário sem nunca fechá-lo por completo. O jogo ganhou o selo Mensa Select (seleção da American Mensa para jogos que exercitam o raciocínio) em 1998 e vários prêmios de "jogo do ano" em diferentes países.',
  rules: QUORIDOR_RULES,
  variants: [
    {
      name: 'Quoridor para 4 jogadores',
      where: 'regra oficial, já vem na caixa original da Gigamic',
      text: 'O mesmo tabuleiro 9×9, mas cada um dos 4 jogadores começa no meio de um lado diferente e precisa chegar ao lado oposto ao seu. Com mais gente jogando, cada jogador recebe só 5 paredes (em vez de 10) para o total continuar dando 20.',
    },
  ],
};

const ABALONE_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro hexagonal de 61 casas, 5 de cada lado. Cada jogador começa com 14 bolinhas: as 2 fileiras mais próximas da sua borda cheias, mais as 3 casas centrais da 3ª fileira.' },
  { title: 'Movimento', text: 'Na sua vez, mova de 1 a 3 bolinhas suas, em linha reta e coladas, uma casa na mesma direção — "em linha" (andando no sentido da própria fileira) ou "lateral" (de lado, em bloco, todas juntas).' },
  { title: 'Sumito (empurrão)', text: 'Só um movimento em linha empurra, e só com maioria clara: 2 bolinhas empurram 1, 3 empurram 1 ou 2. Empate nunca empurra (2 contra 2, por exemplo, trava). A fileira empurrada só pode ir para uma casa vazia ou para fora do tabuleiro.' },
  { title: 'Vitória', text: 'O primeiro jogador a empurrar 6 bolinhas do adversário para fora do tabuleiro vence a partida.' },
];

const ABALONE: KnowledgeGame = {
  id: 'abalone',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'França',
  categoria: 'modernos',
  name: 'Abalone',
  emoji: '⚪',
  status: 'pronto',
  playable: true,
  year: '1987 (criado); lançado comercialmente nos anos seguintes — as fontes variam entre 1988 e 1990',
  where: 'criado pelos franceses Michel Lalet e Laurent Lévi',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em francês, “Abalone (jeu)” (antes chamado Sumito; a leitura “ab” + “alone” vem marcada como interpretação sem fonte); Wikcionário, “abalone” (o molusco).
  etimologia:
    'O jogo nasceu com outro nome, Sumito, com o qual ganhou um prêmio de criadores na França em 1988; no ano seguinte foi lançado como Abalone. Por que esse nome, as fontes não dizem com certeza. A Wikipédia em francês cita uma leitura, “ab” (nunca) + “alone” (sozinho), mas os próprios editores a marcam como interpretação sem fonte. Em inglês, abalone é também um molusco (o “abalone”, do espanhol abulón), mas nada liga o jogo a ele.',
  about:
    'O Abalone foi criado em 1987 pelos designers franceses Michel Lalet e Laurent Lévi e é vendido sob a marca "Abalone" (hoje da empresa francesa Abalone S.A.). No ano do seu lançamento, recebeu um dos primeiros prêmios Mensa Select (seleção da American Mensa para jogos que exercitam bem o raciocínio) e já vendeu mais de 4,5 milhões de unidades em mais de 30 países. O tabuleiro é um hexágono com 61 casas (5 por lado) e cada jogador tem 14 bolinhas: o objetivo não é capturar peça por peça como no xadrez ou nas damas, mas empurrar as bolinhas do adversário até elas saírem do tabuleiro, usando a força de números — a regra do "Sumito" — numa superfície sem cantos nem bordas retas.',
  rules: ABALONE_RULES,
  variants: [
    {
      name: '"Belgian daisy" (margarida belga)',
      where: 'disposição inicial adotada pelos jogadores de torneio a partir de 1999 (Mind Sports Olympiad) e usada desde então em competições como a AbaCup',
      text: 'Em vez da disposição clássica (2 fileiras cheias + 3 no meio da 3ª), as bolinhas começam formando duas "margaridas" nos cantos opostos do tabuleiro. A ideia era abrir mais o início de jogo e reduzir empates por bloqueio, que eram comuns com a posição clássica em partidas de alto nível.',
    },
    {
      name: 'Grand Abalone',
      where: 'variante com tabuleiro maior, 6 casas por lado em vez de 5',
      text: 'Mesmas regras de movimento e Sumito, mas num hexágono maior (91 casas em vez de 61), com mais bolinhas por jogador. Usa a disposição "Belgian daisy" como ponto de partida.',
    },
    {
      name: 'Só em linha (regra da casa)',
      where: 'regra caseira, NÃO oficial; entrou no app a pedido do dono',
      text: 'A fila de 2 ou 3 bolinhas só anda na direção dela mesma, com ou sem empurrão: não vale andar de lado (o movimento lateral da regra oficial). Uma bolinha sozinha continua andando para qualquer lado. Dá para jogar no app: escolha “Só em linha”.',
      jogavel: 'linha',
    },
  ],
};

const OCTI_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro retangular de 6 colunas por 7 linhas (não é octogonal — o "octo" do nome vem da peça, o "pod", que tem 8 faces). Cada jogador começa com 4 pods nas suas 4 casas OCTI (a base dele) e 12 "prongs" (pinos) de reserva.' },
  { title: 'Prongs: o que dão vida ao pod', text: 'Um pod sem prong nenhum não se move. Cada prong instalado libera o movimento numa das 8 direções (como uma bússola). Instalar um prong é uma jogada inteira: você gasta 1 prong da reserva e passa a vez.' },
  { title: 'Mover', text: 'Um pod anda uma casa vazia na direção de um prong que ele já tem.' },
  { title: 'Saltar', text: 'Um pod pode saltar por cima de qualquer peça adjacente (sua ou do adversário), na direção de um prong, caindo na casa vazia logo depois. Dá pra encadear vários saltos seguidos com a mesma peça, mas nunca saltando a mesma casa duas vezes no mesmo turno.' },
  { title: 'Capturar', text: 'Toda peça saltada PODE ser capturada (removida do tabuleiro) — mas não é obrigatório. A decisão é livre, peça por peça. Quem captura ganha os prongs da peça capturada para a própria reserva.' },
  { title: 'Como se vence', text: 'O primeiro jogador a pisar com um pod numa casa OCTI do adversário vence na hora. Também vence quem deixar o adversário sem nenhuma jogada possível (sem prong pra instalar e sem peça que consiga mover ou saltar).' },
];

const OCTI: KnowledgeGame = {
  id: 'octi',
  epoca: 'contemporaneos',
  regiao: 'americas',
  povo: 'Estados Unidos',
  categoria: 'modernos',
  linu: true,
  name: 'Octi (octógono fantástico)',
  emoji: '🔷',
  status: 'pronto',
  playable: true,
  year: '1999',
  where: 'criado pelo designer americano Donald Green; publicado pela The Great American Trading Company (EUA)',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Octi” (não explica o nome); o octógono do pod está na própria regra do jogo.
  etimologia:
    'As fontes consultadas não explicam o nome. O mais provável é que venha do prefixo latino e grego octo-, “oito”, o mesmo de “octógono”: a peça do jogo, o pod, é um octógono com 8 lados, cada um com lugar para um pino. Mas o autor, Donald Green, não confirma isso nas fontes que achamos. Em português o nome ficou igual.',
  about:
    'O Octi foi criado pelo designer de jogos americano Donald Green e publicado em 1999 pela The Great American Trading Company. A peça central do jogo, o "pod", é um octógono: cada uma das suas 8 faces recebe um "prong" (um pino), e cada prong instalado libera o movimento do pod numa direção diferente — um pod sem prong nenhum fica parado. O tabuleiro original é 9×9 (a variante "Octi-X", mais avançada, com empilhamento de peças); existe também uma versão mais simples, 6×7, batizada de "OCTI: New Edition" (antes chamada "OCTI for Kids"), que é a implementada aqui. O jogo chamou atenção da pesquisa em inteligência artificial: foi tema de uma dissertação de mestrado na Universidade de Maastricht (sobre como ensinar um computador a jogar) e uma das categorias da 9ª Computer Olympiad, em 2004.',
  rules: OCTI_RULES,
  variants: [
    {
      name: 'Octi-X',
      where: 'variante original e mais avançada, tabuleiro 9×9',
      text: 'Tabuleiro maior (9×9 em vez de 6×7) e com empilhamento: um pod pode terminar seu movimento em cima de outro pod aliado, formando uma pilha que se move e salta como peça única. Foi uma das categorias da 9ª Computer Olympiad, em 2004.',
    },
  ],
};

const XADREZ_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro 8×8. Cada jogador começa com 8 peões, 2 cavalos, 2 bispos, 2 torres, 1 dama e 1 rei, nas duas fileiras mais próximas dele.' },
  { title: 'Como cada peça anda', text: 'Peão: 1 casa reto pra frente (2 na primeira jogada dele), captura na diagonal. Cavalo: salta em "L". Bispo: anda reto na diagonal, sem limite de casas. Torre: anda reto na horizontal/vertical. Dama: anda como torre e bispo juntos. Rei: 1 casa em qualquer direção.' },
  { title: 'Xeque e xeque-mate', text: 'O rei em xeque está sob ataque e PRECISA ser protegido no mesmo lance (mover o rei, bloquear o ataque ou capturar quem ataca). Se não há como escapar do xeque, é xeque-mate: o jogo acaba e quem deu o xeque-mate vence.' },
  { title: 'Roque', text: 'Rei e torre do mesmo lado podem andar juntos uma vez por partida: o rei anda 2 casas na direção da torre, e a torre pula pra do outro lado do rei. Só vale se nenhum dos dois já andou antes, não há peça no caminho, o rei não está em xeque e não passa nem para numa casa atacada.' },
  { title: 'Captura en passant', text: 'Se um peão adversário acabou de andar 2 casas e parou do lado do seu peão, você pode capturá-lo como se ele tivesse andado só 1 casa — mas só nessa jogada imediatamente seguinte, senão o direito se perde.' },
  { title: 'Promoção', text: 'O peão que chega na última fileira do lado do adversário vira outra peça (dama, torre, bispo ou cavalo, escolha de quem joga) — nunca continua peão nem vira rei.' },
  { title: 'Empates', text: 'Além do afogamento (ninguém em xeque, mas sem lance legal pra fazer), a partida também empata se a mesma posição se repete 3 vezes, ou se passam 50 lances de cada jogador sem nenhuma captura e sem nenhum peão andar.' },
];

const XADREZ: KnowledgeGame = {
  id: 'xadrez',
  epoca: 'medievais',
  regiao: 'asia',
  povo: 'indianos, persas e árabes',
  categoria: 'guerra',
  linu: true,
  name: 'Xadrez',
  emoji: '♟️',
  status: 'pronto',
  playable: true,
  year: 'raízes no séc. VI (chaturanga, Índia); regras modernas por volta de 1475-1500',
  where: 'chaturanga nasceu na Índia; passou pela Pérsia (shatranj) e pelo mundo árabe até chegar à Europa',
  // De onde vem o nome (consultado em 15/10/2026): Wikcionário em inglês, “xadrez” (cadeia sânscrito → persa médio → árabe → árabe andaluz → galego-português antigo); Wikcionário, “chaturanga”.
  etimologia:
    'Começa no sânscrito caturaṅga, de catur, “quatro”, e aṅga, “membro”: as quatro partes de um exército indiano (elefantes, carros, cavalaria e infantaria). Os persas fizeram disso čatrang, os árabes šaṭranj, e os árabes da Península Ibérica levaram a palavra para o galego-português antigo como xedrez. Daí veio “xadrez”. Como o tabuleiro é quadriculado, “xadrez” também virou o nome do padrão de quadradinhos dos tecidos.',
  about:
    'O ancestral mais antigo conhecido do xadrez é o chaturanga, jogo indiano documentado já no século VI, cujo nome (em sânscrito, "quatro membros" ou "quatro divisões") remete às quatro armas de um exército antigo — infantaria, cavalaria, elefantes e carros de guerra, que deram origem ao peão, cavalo, bispo e torre de hoje. O jogo chegou à Pérsia sassânida por volta do ano 600, onde passou a se chamar "chatrang"; depois da conquista árabe da Pérsia, sem os sons "ch" e "ng" do árabe, o nome virou "shatranj". A expressão persa "Shāh Māt!" ("o rei está desamparado/encurralado"), dita quando o rei era atacado sem conseguir escapar, é a origem da palavra "xeque-mate". Pelo mundo árabe, o jogo chegou à Europa pela Espanha muçulmana (Al-Andalus) e pela Sicília, por volta do século X. As regras foram mudando ao longo da Idade Média até ganharem a forma de hoje na Espanha: a dama e o bispo ganharam o movimento atual (bem mais forte que no shatranj) entre 1475 e 1500, no reino de Valência — o poema catalão "Scachs d\'amor" (Valência, 1475) é o primeiro documento conhecido com a dama já se movendo como hoje. A federação internacional que organiza o xadrez de competição, a FIDE (Fédération Internationale des Échecs), foi fundada em Paris em 20 de julho de 1924.',
  rules: XADREZ_RULES,
  variants: [
    {
      name: 'Xadrez960 / Fischer Random (Chess960)',
      where: 'apresentado por Bobby Fischer em Buenos Aires, Argentina, em 19/06/1996',
      text: 'As peças da fileira de trás começam embaralhadas (sorteadas entre 960 posições possíveis, daí o nome), sempre respeitando duas regras — o rei fica entre as duas torres, e os bispos ficam em casas de cores diferentes. A ideia de Fischer era valorizar a criatividade durante a partida, em vez da memorização de aberturas já estudadas de cor. A ideia de embaralhar a posição inicial já tinha sido proposta muito antes, em 1792, pelo holandês Philip Julius van Zuylen van Nijevelt — Fischer deu as regras que tornam o sorteio justo. Dá para jogar no app: escolha “Xadrez960”; cada partida sorteia uma posição. Para fazer o roque, toque no rei e depois na torre: os dois vão para as casas do roque de sempre.',
      jogavel: '960',
    },
  ],
};

const HNEFATAFL_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro 11×11 (regras de Copenhague). Os atacantes têm 24 peças, em 4 grupos de 6 no meio de cada borda; os defensores têm 12 peças mais o rei, que começa no trono, no centro.' },
  { title: 'Lados diferentes, objetivos diferentes', text: 'Os atacantes jogam primeiro e querem CERCAR o rei. Os defensores protegem o rei e querem levá-lo a qualquer um dos 4 cantos do tabuleiro.' },
  { title: 'Movimento', text: 'Toda peça anda reto (na horizontal ou vertical, nunca na diagonal), qualquer distância, sem saltar peça nenhuma — como a torre do xadrez. Só o rei pode entrar ou passar pelo trono e pelos 4 cantos; pras outras peças, essas casas são paredes.' },
  { title: 'Captura', text: 'Uma peça comum é capturada quando fica encurralada entre duas peças inimigas (ou entre uma peça inimiga e uma casa hostil: canto sempre, trono quando está vazio), logo depois de um lance.' },
  { title: 'Como o jogo termina', text: 'Os defensores vencem se o rei chega num canto. Os atacantes vencem se cercam o rei nas 4 casas ao redor dele com peças ou casas hostis.' },
];

const HNEFATAFL: KnowledgeGame = {
  id: 'hnefatafl',
  epoca: 'medievais',
  regiao: 'europa',
  povo: 'povos nórdicos (vikings)',
  categoria: 'guerra',
  linu: true,
  name: 'Hnefatafl',
  emoji: '🛡️',
  status: 'pronto',
  playable: true,
  year: 'jogado na Escandinávia da Era Viking (documentado do séc. IV ao XII)',
  where: 'Noruega, Suécia, Dinamarca, Islândia, e levado pelos vikings às Ilhas Britânicas, Irlanda e Garðaríki (atual Rússia)',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Tafl games” (hnefi, “punho”, a peça do rei; tafl, “mesa”; etimologia “not entirely certain”).
  etimologia:
    'É nórdico antigo: tafl quer dizer “mesa, tábua” e era a palavra para jogo de tabuleiro em geral; hnefi quer dizer “punho” e era o nome da peça do rei. Juntos, algo como “a tábua do punho”, ou seja, o jogo do rei. A Wikipédia avisa que a etimologia exata não é de todo certa, mas que hnefi com certeza era a peça do rei. Em português usamos o nome nórdico, sem tradução.',
  about:
    'Hnefatafl ("tábua do punho" ou, numa leitura mais livre, "mesa do rei" — hnefi, "punho", era também o nome da peça do rei; tafl, "tábua/mesa") é o jogo mais conhecido da família tafl, jogada por povos nórdicos e em lugares por onde os vikings passaram, com datação entre os séculos IV e XII. Achados arqueológicos reais confirmam o jogo: um tabuleiro e uma peça de chifre no navio funerário de Gokstad, no sul da Noruega (o tabuleiro tinha 13×13 casas de um lado e o Jogo do Moinho gravado do outro); um tabuleiro 7×7 de madeira achado em Ballinderry, na Irlanda, em 1932; e peças de vidro e osso de baleia em sítios da Escócia, Órcades e Suécia. O jogo foi suplantado pelo xadrez a partir do século XII, e as regras originais se perderam com o tempo — o conjunto de regras usado neste app, conhecido como "regras de Copenhague", é uma reconstrução moderna (a mais citada pela comunidade de jogadores de tafl) que tenta recriar a experiência original a partir dos achados arqueológicos e dos relatos escritos que sobraram, num tabuleiro 11×11.',
  rules: HNEFATAFL_RULES,
  variants: [
    {
      name: 'Tablut',
      where: 'variante sami (povo indígena da Lapônia/Sápmi, norte da Escandinávia)',
      text: 'Jogada num tabuleiro menor, 9×9. É a variante com a documentação mais sólida: o próprio Carl Linnaeus (o naturalista sueco que criou o sistema de classificação dos seres vivos) registrou as regras dela em 1732, durante uma viagem pela Lapônia — e ela continuou sendo jogada até o século XVIII.',
    },
  ],
};

const MOINHO_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro de 24 pontos (três quadrados concêntricos ligados pelo meio de cada lado). Cada jogador tem 9 peças.' },
  { title: 'Fase 1: colocar', text: 'Os jogadores se alternam colocando 1 peça por vez em qualquer ponto vazio, até as 9 de cada um entrarem no tabuleiro.' },
  { title: 'Fase 2: mover', text: 'Depois que as 18 peças (9+9) estão no tabuleiro, cada um move 1 peça por vez pra um ponto vizinho vazio, ligado por uma linha do tabuleiro — sem "pular" peça nenhuma.' },
  { title: 'Moinho', text: 'Alinhar 3 peças suas numa das 16 linhas do tabuleiro forma um "moinho": você remove 1 peça do adversário (nunca uma peça que já está num moinho dele, a não ser que todas as peças dele estejam em moinhos). Dá pra abrir e fechar o mesmo moinho repetidas vezes, removendo peça a cada vez.' },
  { title: '"Voar"', text: 'Quando um jogador fica com só 3 peças, elas passam a poder ir pra QUALQUER ponto vazio do tabuleiro, não só pros vizinhos — um fôlego extra pro lado que está perdendo.' },
  { title: 'Como o jogo termina', text: 'Vence quem reduzir o adversário a 2 peças, ou deixá-lo sem nenhum lance legal.' },
];

const MOINHO: KnowledgeGame = {
  id: 'moinho',
  epoca: 'antigos',
  regiao: 'europa',
  povo: 'romanos',
  categoria: 'linha',
  linu: true,
  name: 'Trilha',
  emoji: '⬛',
  status: 'pronto',
  playable: true,
  year: 'achados possíveis desde ~1400 a.C. (Egito, datação contestada); bem documentado desde o Império Romano (séc. I)',
  where: 'possíveis origens no Egito Antigo; popular no Império Romano; auge na Europa medieval (Inglaterra)',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Nine men’s morris” (morris ← latim merellus, “peça de jogo”, segundo Daniel King); Wikipédia em português, “Trilha (jogo)” (nomes trilha, moinho e firo, sem explicar a origem).
  etimologia:
    'Em português o jogo tem vários nomes: trilha, moinho e firo. Nenhuma das fontes consultadas explica de onde veio “trilha”. “Moinho” é o mesmo nome do alemão Mühle e do inglês mill, que é também como se chama a fileira de três peças. O nome inglês “morris” viria do latim merellus, “peça de jogo”, e não da dança inglesa de mesmo nome.',
  about:
    'A Trilha (nome mais comum no Brasil; em inglês, "Nine Men\'s Morris" — também chamada de Mill, Merels ou Jogo do Moinho) é um dos jogos de tabuleiro mais antigos com continuidade documentada. A pista mais antiga, mas contestada, é egípcia: tabuleiros gravados nas lajes do telhado do templo de Kurna foram datados por R. C. Bell em cerca de 1400 a.C., mas o pesquisador Friedrich Berger pôs essa data em dúvida — alguns desses desenhos têm cruzes coptas misturadas, o que sugere uma origem bem mais tardia, e por isso ele considera que esses tabuleiros específicos "não podem ser datados" com segurança. Mais sólida é a presença do jogo no Império Romano: o poeta Ovídio já menciona um jogo parecido em "Ars Amatoria" (por volta do ano 8 d.C.), e tabuleiros aparecem gravados em prédios por todo o território romano. O jogo atingiu seu auge na Europa medieval, especialmente na Inglaterra: há tabuleiros gravados nos bancos de pedra da Catedral de Canterbury e da Abadia de Westminster, e um tabuleiro do século XII foi encontrado em escavações em Novgorod, na Rússia. O nome em inglês, "Nine Men\'s Morris", pode vir do latim eclesiástico "merellus" (peça de jogo) — o autor e enxadrista Daniel King descarta qualquer relação com a dança "Morris" inglesa, apesar da semelhança de nome.',
  rules: MOINHO_RULES,
  variants: [
    {
      name: 'Doze Homens Moinho (Twelve Men\'s Morris)',
      where: 'Inglaterra; variante registrada junto com a Trilha clássica',
      text: 'O mesmo tabuleiro de 3 quadrados concêntricos ganha 4 linhas diagonais extras, ligando os cantos dos quadrados entre si. Com mais linhas e mais pontos de cruzamento, cada jogador joga com 12 peças em vez de 9 — daí o nome. Se o tabuleiro encher na colocação, é empate. Dá para jogar no app: escolha “Doze Homens Moinho”.',
      jogavel: 'doze',
    },
    {
      name: 'Variante Lasker (Lasker Morris)',
      where: 'criada pelo enxadrista alemão Emanuel Lasker, campeão mundial de xadrez entre 1894 e 1921',
      text: 'Acaba com a separação rígida entre "fase de colocar" e "fase de mover": a partir da primeira jogada, cada jogador pode, na sua vez, OU colocar uma peça nova (enquanto tiver no bolso) OU mover uma peça que já está no tabuleiro — nunca as duas coisas na mesma jogada. Lasker criou essa variante buscando um jogo mais dinâmico que a Trilha clássica, que ele considerava fácil demais de empatar. Cada jogador tem 10 peças (por isso também se chama “ten men\'s morris”). Dá para jogar no app: escolha “Variante Lasker”.',
      jogavel: 'lasker',
    },
  ],
};

const CONECTA4_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro em pé, 6 fileiras por 7 colunas. Cada jogador tem uma cor (vermelho ou amarelo).' },
  { title: 'Na sua vez', text: 'Escolha uma coluna: a peça cai por gravidade até a casa mais baixa livre dela.' },
  { title: 'Como se vence', text: 'O primeiro a formar 4 peças seguidas da própria cor — na horizontal, vertical ou diagonal — vence. Se o tabuleiro enche sem ninguém conseguir, é empate.' },
  { title: 'Outros tamanhos', text: 'Além do 7×6 (colunas × fileiras), também se joga em 5×4, 6×5, 8×7, 9×7, 10×7 e 8×8 (fonte: Wikipédia em inglês, “Connect Four”). Aqui dá para escolher 6×5, 7×6, 8×7 e 9×7; a regra é a mesma, quatro em linha.' },
];

const CONECTA4: KnowledgeGame = {
  id: 'conecta4',
  epoca: 'contemporaneos',
  regiao: 'americas',
  povo: 'Estados Unidos',
  categoria: 'linha',
  linu: true,
  name: 'Ligue 4',
  emoji: '🔴',
  status: 'pronto',
  playable: true,
  year: '1973/74',
  where: 'criado pelos americanos Howard Wexler e Ned Strongin; lançado pela Milton Bradley (EUA) em fevereiro de 1974',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em português, “Lig 4” (nome no Brasil) e em inglês, “Connect Four”.
  etimologia:
    'O nome original é inglês: Connect Four, “conecte quatro”, porque ganha quem liga 4 peças em fila. No Brasil o jogo ficou conhecido como “Lig 4”, uma tradução curta de connect. Aqui no app escrevemos “Ligue 4”.',
  about:
    'O Ligue 4 nasceu nos Estados Unidos como Connect Four, o “Connect 4”. Foi lançado pela empresa americana Milton Bradley em fevereiro de 1974, sob licença dos criadores Howard Wexler e Ned Strongin. No começo, sem nenhuma campanha de TV, a empresa tratava o jogo como uma simples "versão vertical de damas" — as vendas só decolaram de verdade a partir de 1979. O jogo já foi completamente resolvido matematicamente: jogando de forma perfeita, quem começa (as peças vermelhas) sempre consegue forçar a vitória, não importa o que o adversário faça.',
  rules: CONECTA4_RULES,
  variants: [
    {
      name: '"Pop Out"',
      where: 'modo oficial, vendido pela própria Hasbro (fabricante atual do jogo) ao lado do modo clássico',
      text: 'Em vez de só deixar a peça cair, na sua vez você também pode "estourar" (remover) uma peça SUA que esteja no fundo de uma coluna — todas as peças acima dela caem uma casa. É um risco calculado: tirar uma peça pode, sem querer, alinhar 4 peças do adversário que estavam por cima. Dá para jogar no app: escolha “Pop Out”. Aqui, se tirar uma peça fizer 4 em linha para os dois, ganha quem tirou, e a mesma posição pela 3ª vez é empate.',
      jogavel: 'popout',
    },
  ],
};

const OWARE_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Duas fileiras de 6 casas ("casas"), uma de cada jogador. Cada casa começa com 4 semente, 48 no total.' },
  { title: 'Semear', text: 'Na sua vez, você esvazia uma casa SUA e distribui 1 semente em cada casa seguinte, sempre no mesmo sentido ao redor do tabuleiro — pulando a própria casa de origem se a volta for longa o bastante pra voltar nela.' },
  { title: 'Capturar', text: 'Se a ÚLTIMA semente cai numa casa do ADVERSÁRIO e ela fica com 2 ou 3 sementes, você captura essa casa — e continua capturando pra trás, casa a casa, enquanto elas também forem do adversário e tiverem 2 ou 3.' },
  { title: '"Grand slam"', text: 'Se uma captura tiraria TODAS as sementes do adversário de uma vez, ela é anulada: as sementes ficam no tabuleiro, sem capturar nada.' },
  { title: 'Regra de alimentar', text: 'Se a fileira do adversário está totalmente vazia, você só pode jogar uma casa que leve pelo menos 1 semente até ela. Se nenhuma das suas casas faz isso, você recolhe o que sobrou do seu lado e o jogo acaba.' },
  { title: 'Como se vence', text: 'Vence quem capturar 25 sementes ou mais (ou quem tiver mais, se o jogo acabar por falta de lance). Em caso de 24×24, é empate.' },
];

const OWARE: KnowledgeGame = {
  id: 'oware',
  epoca: 'tradicionais',
  regiao: 'africa',
  povo: 'povo axânti (Gana)',
  categoria: 'semear',
  linu: true,
  name: 'Oware',
  emoji: '🌰',
  status: 'pronto',
  playable: true,
  year: 'de origem antiga; provavelmente Ashanti',
  where: 'Gana — considerado o jogo nacional do país',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Oware” (lenda do nome, “ele/ela se casa”; awalé, wari e awari).
  etimologia:
    'Oware é uma palavra da língua akan (twi), de Gana. Uma lenda diz que quer dizer “ele/ela se casa”: um homem e uma mulher jogavam sem parar e se casaram para continuar jogando juntos. É uma tradição, não um fato comprovado. Em outros países o jogo se chama awalé ou wari, e em inglês muitas vezes awari.',
  about:
    'Oware é um jogo de mancala (a família de jogos de "semear e capturar", jogados com sementes ou pedrinhas em fileiras de casas) de Gana, onde é considerado o jogo nacional. A origem exata se perdeu no tempo, mas é amplamente atribuída ao povo Ashanti. Uma lenda ganesa conta que o nome "oware" vem da expressão "ele/ela se casa", de um casal que jogava tanto que resolveu se casar — uma origem de nome contada como tradição, não como fato histórico comprovado. O jogo se espalhou pela África Ocidental e pelo Caribe, cada região com seu próprio nome e pequenas variações de regra. Já foi completamente resolvido por computador: jogando perfeitamente dos dois lados, o resultado é sempre empate (resultado publicado por Romein e Bal, em 2002).',
  rules: OWARE_RULES,
  variants: [
    {
      name: 'Ayò / Awari',
      where: 'povo iorubá, Nigéria',
      text: 'Mesmo jogo, regras praticamente idênticas às do Oware ganês — a diferença maior é o nome: entre os iorubás chama-se "Ayò" (ou "Ayoayo"). Em inglês, "Awari" virou o nome mais usado fora de Gana, inclusive em programas de computador famosos que "resolveram" o jogo nos anos 1970-90 — mas o pesquisador britânico Robert Sutherland Rattray, um dos primeiros ocidentais a estudar o jogo, já registrava o nome como "Wari".',
    },
    {
      name: 'Warri',
      where: 'Caribe (Barbados, Trinidad e outras ilhas, levado por africanos escravizados)',
      text: 'A mesma família de jogo chegou ao Caribe pelo tráfico de pessoas escravizadas da África Ocidental e lá ficou conhecida como "Warri" — em Barbados, por exemplo, documenta-se uma variante batizada "Round-and-Round Warri".',
    },
  ],
};

const REVERSI_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro 8×8, com 4 peças já no centro ao começar (2 de cada cor, em diagonal). Preto sempre joga primeiro.' },
  { title: 'Na sua vez', text: 'Você só pode colocar uma peça numa casa vazia se isso fechar, em pelo menos 1 das 8 direções, uma linha contínua de peças do adversário terminando numa peça sua — essas peças do meio viram da sua cor.' },
  { title: 'Sem lance', text: 'Se você não tem nenhum lance legal, passa a vez automaticamente (não é escolha). Se os dois não tiverem lance nenhum, o jogo acaba.' },
  { title: 'Como se vence', text: 'Vence quem tiver mais peças no tabuleiro quando o jogo terminar.' },
  { title: 'Tabuleiro 6×6', text: 'O jogo também é estudado no 6×6 (e no 4×4): nesses tamanhos, com os dois jogando sem errar, quem joga em segundo vence; no 8×8, dá empate (fonte: Wikipédia em inglês, “Reversi”). Aqui dá para escolher o 6×6, com as quatro peças no meio, como no 8×8.' },
];

const REVERSI: KnowledgeGame = {
  id: 'reversi',
  epoca: 'modernos',
  regiao: 'europa',
  povo: 'ingleses; o Othello, no Japão',
  categoria: 'cerco',
  linu: true,
  name: 'Reversi / Othello',
  emoji: '⚫',
  status: 'pronto',
  playable: true,
  year: 'Reversi em 1883; padronizada como Othello em 1971',
  where: 'Reversi, na Inglaterra; Othello, patenteada no Japão por Goro Hasegawa',
  // De onde vem o nome (consultado em 15/10/2026): Wikcionário em inglês, “reversi” (por causa das peças de duas cores); Wikipédia em inglês, “Reversi” (Othello e a peça de Shakespeare).
  etimologia:
    '“Reversi” vem do inglês reverse, “virar ao contrário”: cada peça tem um lado de cada cor e vira quando é capturada. “Othello” é o nome que o japonês Goro Hasegawa deu à sua versão, em homenagem à peça “Otelo, o Mouro de Veneza”, de Shakespeare: o drama entre Otelo, que é negro, e Desdêmona, que é branca, e o tabuleiro verde como o campo de batalha. Em português usamos os dois nomes.',
  about:
    'A Reversi foi publicada na Inglaterra em 1883 por Lewis Waterman — mas a autoria foi disputada na época por John Mollett, que registrou uma versão própria chamada "The Game of Annexation" e alegou que Waterman tinha copiado (ou redescoberto por conta própria) a ideia dele; a disputa nunca foi resolvida por nenhum tribunal ou fonte histórica definitiva. Quase 90 anos depois, em 1971, o japonês Goro Hasegawa patenteou uma versão com posição inicial fixa e regras padronizadas, batizada de "Othello" — publicada no Japão pela empresa Tsukuda Original em 1973, essa foi a versão que se popularizou mundialmente e deu nome ao jogo tal como é jogado hoje (é a versão implementada aqui).',
  rules: REVERSI_RULES,
  variants: [
    {
      name: 'Reversi clássica (1883)',
      jogavel: 'classica',
      where: 'Inglaterra, antes da padronização japonesa de 1971',
      text: 'Na Reversi original, o tabuleiro NÃO começava com as 4 peças centrais já colocadas: os 4 primeiros lances do jogo (2 de cada jogador) eram livres, desde que dentro das 4 casas centrais — o que dava 2 posições de abertura possíveis (uma "ortogonal", outra "oblíqua"), em vez da única posição inicial fixa que o Othello padronizou depois.',
    },
  ],
};

const GO_RULES: GameRule[] = [
  { title: 'Tabuleiro e pedras', text: 'O tabuleiro padrão tem 19×19 linhas; iniciantes costumam jogar no 9×9 ou no 13×13. Aqui dá para escolher o 9×9 (o primeiro que aparece), o 13×13 ou o 19×19 (fonte: Wikipédia em inglês, “Go (game)”). As pedras vão nos cruzamentos, o tabuleiro começa vazio e as pretas jogam primeiro. Uma pedra posta nunca mais anda.' },
  { title: 'Liberdades e captura', text: 'Pedras da mesma cor ligadas pelas linhas (não na diagonal) formam um grupo. As liberdades do grupo são os cruzamentos vazios logo ao lado dele. Quando o adversário ocupa a última liberdade, o grupo inteiro é capturado e sai do tabuleiro.' },
  { title: 'Suicídio não vale', text: 'Não se pode pôr uma pedra que deixe o próprio grupo sem nenhuma liberdade, a não ser que ela capture pedras do outro (aí as pedras dele saem primeiro e a sua ganha liberdade).' },
  { title: 'Ko: a posição não pode se repetir', text: 'Não vale a jogada que recria uma posição que já aconteceu no jogo. É o que impede dois jogadores de capturar e recapturar a mesma pedra para sempre: quem não pode retomar na hora joga em outro lugar e tenta depois.' },
  { title: 'Fim e contagem', text: 'Quando os dois passam a vez seguidos, o jogo acaba. Aqui a contagem é por área, como nas regras chinesas: cada um soma as próprias pedras no tabuleiro e os pontos vazios cercados só por pedras dele. As brancas ganham 7,5 pontos de komi, a compensação por jogarem depois.' },
  { title: 'Pedras mortas', text: 'No fim, os jogadores combinam quais grupos estão mortos (não teriam como escapar da captura) e eles saem antes da contagem. Sem acordo, nas regras chinesas o jogo simplesmente continua. No app, toque nos grupos mortos para marcá-los, ou volte a jogar.' },
];

const GO: KnowledgeGame = {
  id: 'go',
  epoca: 'antigos',
  regiao: 'asia',
  povo: 'chineses',
  categoria: 'cerco',
  name: 'Go (Weiqi, Baduk)',
  emoji: '⚪',
  status: 'pronto',
  playable: true,
  year: 'mais de 2.500 anos; a primeira menção escrita é o Zuo Zhuan (por volta do séc. IV a.C.)',
  where: 'China; chegou à Coreia no séc. V e ao Japão no séc. VII',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Go (game)” (weiqi, igo/go, baduk).
  etimologia:
    'Na China, o jogo se chama weiqi (圍棋), “o jogo de cercar”. Os japoneses o chamaram igo ou só go (碁), palavra que veio do chinês antigo. O Ocidente conheceu o jogo pelo Japão, e por isso, desde o começo do século XX, ficou com o nome japonês curto: go. Na Coreia ele se chama baduk, provavelmente de palavras coreanas para “campo” e “pedra”.',
  about:
    'O Go foi inventado na China há mais de 2.500 anos e é considerado o jogo de tabuleiro mais antigo jogado sem interrupção até hoje. Na China ele se chama weiqi, “o jogo de tabuleiro de cercar”; na Coreia, baduk; o nome “Go” vem do japonês “igo”. Na China antiga, era uma das quatro artes essenciais do erudito. O tabuleiro de 19×19 já era o padrão quando o jogo chegou à Coreia, no século V, e ao Japão, no século VII; a arqueologia mostra que antes se jogava num de 17×17. As regras são poucas, mas o jogo é enorme: o número de posições possíveis passa de 10¹⁷⁰, mais que os átomos do universo observável. Em 2016, uma pesquisa da Federação Internacional de Go contou mais de 46 milhões de pessoas que sabem jogar. No mesmo ano, em março, o programa AlphaGo, da DeepMind, venceu Lee Sedol, um dos melhores jogadores do mundo, em quatro das cinco partidas.',
  rules: GO_RULES,
  variants: [
    {
      name: 'Contagem por território (regras japonesas e coreanas)',
      jogavel: 'territorio',
      where: 'Japão e Coreia',
      text: 'Em vez de contar as pedras no tabuleiro, cada um conta os pontos vazios que cercou e soma as pedras que capturou (os prisioneiros). Quase sempre dá o mesmo vencedor da contagem por área. O komi nessas regras é de 6,5 pontos. No app, as pedras marcadas como mortas na contagem viram prisioneiros de quem as cercou.',
    },
    {
      name: 'Partida com handicap',
      jogavel: 'handicap',
      where: 'em todo lugar, entre jogadores de força diferente',
      text: 'O jogador mais fraco fica com as pretas e põe duas ou mais pedras no tabuleiro antes de as brancas jogarem, em geral tantas quanto a diferença de graduação entre os dois. Nesse caso o komi costuma ser só de 0,5 ponto, para desempatar. No app, escolha de 2 a 4 pedras; elas vão nos pontos marcados dos cantos.',
    },
  ],
};

const GOMOKU_RULES: GameRule[] = [
  { title: 'Tabuleiro e pedras', text: 'Joga-se com as pedras do Go, num tabuleiro de 15×15 (antigamente o 19×19 era o padrão, e o omok coreano ainda usa o 19×19). Aqui dá para escolher os dois tamanhos (fonte: Wikipédia em inglês, “Gomoku”). As pretas começam e cada um põe uma pedra por vez num cruzamento vazio. Nenhuma pedra anda nem sai do tabuleiro.' },
  { title: 'Quem vence', text: 'Vence quem formar primeiro uma linha sem interrupção de cinco pedras da sua cor: na horizontal, na vertical ou na diagonal. Aqui vale o “estilo livre”: seis ou mais em linha também contam. Se o tabuleiro encher sem ninguém fazer cinco, é empate.' },
  { title: 'A vantagem de quem começa', text: 'Sem nenhuma regra extra, quem joga primeiro tem vantagem grande. Em 1994, L. Victor Allis provou que, no 15×15 vazio, as pretas têm uma estratégia que sempre vence. Por isso os torneios usam aberturas especiais.' },
];

const GOMOKU: KnowledgeGame = {
  id: 'gomoku',
  epoca: 'modernos',
  regiao: 'asia',
  povo: 'japoneses',
  categoria: 'linha',
  linu: true,
  name: 'Gomoku (cinco em linha)',
  emoji: '⚫',
  status: 'pronto',
  playable: true,
  year: 'meados do séc. XVIII (período Edo); o livro mais antigo conhecido sobre ele é de 1856',
  where: 'Japão; também é popular na China (wuziqi) e na Coreia (omok)',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Gomoku” (gomokunarabe: go = cinco, moku = contador de peças, narabe = enfileirar; Go Bang no Reino Unido).
  etimologia:
    'Vem do japonês gomokunarabe (五目並べ): go é “cinco”, moku é a palavra usada para contar peças e narabe quer dizer “enfileirar”. Ou seja, “cinco peças em fila”, que é o objetivo do jogo. Na China ele se chama wuziqi, “jogo das cinco peças”. No Reino Unido do século XIX chegou como “Go Bang”, nome que viria do japonês goban, o tabuleiro.',
  about:
    'O nome vem do japonês “gomokunarabe”: “go” é cinco, “moku” é a palavra que conta as peças e “narabe” quer dizer alinhar. Os registros levam o jogo a meados do século XVIII, no período Edo; conta-se que a 10ª geração de Kuwanaya Buemon, um comerciante que frequentava a família Nijō, era muito bom nele, e daí o jogo se espalhou pelo povo. O livro mais antigo que se pode verificar é a “Coleção de jōseki do gomoku”, de 1856. No século XIX o jogo chegou à Grã-Bretanha com o nome de “Go Bang”. Na China ele se chama wuziqi e, na Coreia, omok, os dois com o mesmo sentido: cinco peças.',
  rules: GOMOKU_RULES,
  variants: [
    {
      name: 'Renju',
      where: 'a versão de torneio, num tabuleiro 15×15',
      text: 'Para diminuir a vantagem de quem começa, as pretas ganham proibições: não podem fazer uma jogada que forme ao mesmo tempo duas linhas abertas de três, nem duas linhas de quatro, e uma linha de seis ou mais não conta como vitória para elas.',
    },
    {
      name: 'Caro (gomoku+)',
      jogavel: 'caro',
      where: 'Vietnã',
      text: 'Para vencer, a linha de cinco não pode estar bloqueada nas duas pontas por pedras do adversário (linhas de seis ou mais escapam dessa regra). Isso dá mais força para quem defende.',
    },
    {
      name: 'Troca depois do primeiro lance',
      jogavel: 'troca',
      where: 'jogada sobretudo na China',
      text: 'Depois que o primeiro jogador põe a primeira pedra preta, o segundo pode escolher trocar de cor. O resto do jogo segue o estilo livre. No app, contra o Linu, é ele quem decide se troca: fica com a pedra se ela estiver perto do meio.',
    },
  ],
};

const VELHA_RULES: GameRule[] = [
  { title: 'Tabuleiro', text: 'Uma grade de 3×3, desenhada no papel, na areia ou num tabuleiro. Um jogador marca X e o outro, O, uma marca por vez numa casa vazia.' },
  { title: 'Quem vence', text: 'Vence quem fizer três marcas suas em linha: numa linha, numa coluna ou numa diagonal. Não existe regra fixa sobre quem começa; aqui o X começa.' },
  { title: 'Deu velha', text: 'Se as 9 casas se enchem sem ninguém fazer três em linha, é empate. No Brasil se diz que “deu velha”. Com os dois jogando sem errar, o jogo sempre termina assim.' },
  { title: 'Tabuleiro 4×4', text: 'Também se joga numa grade de 4×4, e aí é preciso fazer quatro em linha (fonte: Wikipédia em inglês, “Tic-tac-toe variants”, que cita ainda outros jeitos de vencer no 4×4, como quatro em quadrado). Aqui dá para escolher o 4×4, só com as linhas, colunas e diagonais.' },
];

const VELHA: KnowledgeGame = {
  id: 'velha',
  epoca: 'antigos',
  regiao: 'africa',
  povo: 'egípcios e romanos',
  categoria: 'linha',
  linu: true,
  name: 'Jogo da velha',
  emoji: '❌',
  status: 'pronto',
  playable: true,
  year: 'tabuleiros de três em linha de cerca de 1300 a.C.; o terni lapilli romano, do séc. I a.C.',
  where: 'Egito antigo e Império Romano; hoje no mundo todo',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em português, “Jogo da velha” (nomes jogo da velha, jogo do galo, três em linha; não explica a origem); Wikcionário em inglês, “tic-tac-toe” (onomatopeia, de “tick-tack”).
  etimologia:
    'Ninguém sabe ao certo por que no Brasil se chama “jogo da velha”: as fontes que consultamos não explicam, e as histórias que circulam não têm comprovação. Em Portugal ele é o “jogo do galo”, também sem origem documentada; no Brasil, o empate se chama “velha” (“deu velha”). Já o inglês tic-tac-toe imita um som: vem de tick-tack, nome antigo de jogos em que as peças faziam “tique-taque” no tabuleiro.',
  about:
    'É o “jogo da velha” no Brasil, o “jogo do galo” em Portugal e o “tic-tac-toe” nos Estados Unidos. Jogos de três em linha vêm de muito longe: no Egito antigo foram achados tabuleiros desse tipo em telhas de cerca de 1300 a.C. No Império Romano, por volta do século I a.C., jogava-se o terni lapilli, “três pedrinhas de cada vez”, com a grade riscada a giz por toda Roma. Em 1952, o OXO, feito por Sandy Douglas para o computador EDSAC da Universidade de Cambridge, virou um dos primeiros videogames conhecidos: o computador jogava a velha sem errar. É um “jogo resolvido”: com os dois jogando o melhor possível, sempre dá empate. Por isso ele é usado para ensinar como um computador procura o melhor lance, e é assim que o Linu joga no nível difícil.',
  rules: VELHA_RULES,
  variants: [
    {
      name: 'Terni lapilli',
      where: 'Império Romano, por volta do séc. I a.C.',
      text: 'Cada jogador tem só três peças. Depois de pôr as três, quem não alinhou passa a mover uma peça por vez para uma casa vazia, até alguém fazer três em linha. Dá para jogar no app: escolha “Terni lapilli”. As fontes não dizem se a peça só vai para a casa vizinha; aqui ela vai para qualquer casa vazia, e a mesma posição pela terceira vez é empate.',
      jogavel: 'terni',
    },
    {
      name: 'Jogos de k em linha (m,n,k)',
      where: 'a generalização usada na teoria dos jogos',
      text: 'Num tabuleiro de m por n casas, vence quem alinhar k marcas. O jogo da velha é o caso 3,3,3; o gomoku, cinco em linha num tabuleiro maior, é da mesma família.',
    },
  ],
};

// Fanorona: artigos “Fanorona” das Wikipédias em inglês, francês e alemão e as regras do
// boardspace.net, consultados em 11/10/2026 (a posição inicial vem da figura “Fanorona starting setup”
// do artigo em inglês). Ver `services/fanorona-engine.ts`.
const FANORONA_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Um tabuleiro de linhas com 5 fileiras e 9 colunas, cortado por diagonais. São 22 peças de cada cor, em todos os pontos menos o do meio. As brancas começam.' },
  { title: 'Pontos fortes e fracos', text: 'Dos pontos por onde passam diagonais (os “fortes”), a peça anda em 8 direções; dos outros (os “fracos”), só na horizontal e na vertical.' },
  { title: 'Lance simples', text: 'A peça anda um ponto, ao longo de uma linha, até um ponto vazio. Esse lance sem captura se chama paika.' },
  { title: 'Capturar', text: 'Por aproximação: a peça para ao lado de uma adversária, na continuação da linha em que andou. Por afastamento: a peça sai de perto de uma adversária, na direção oposta a ela. Junto vão todas as adversárias seguidas naquela linha, até um ponto vazio ou uma peça sua. Quando o mesmo lance permite os dois tipos, você escolhe um.' },
  { title: 'Captura obrigatória e em sequência', text: 'Se dá para capturar, é obrigatório. Depois de capturar, a mesma peça pode continuar capturando, se você quiser, mas não pode passar duas vezes pelo mesmo ponto nem andar duas vezes seguidas na mesma direção.' },
  { title: 'Quem vence', text: 'Vence quem capturar todas as peças do outro. A partida pode terminar empatada quando ninguém consegue atacar sem se enfraquecer; aqui, empata quando a mesma posição aparece pela terceira vez ou quando os dois combinam o empate.' },
];

const FANORONA: KnowledgeGame = {
  id: 'fanorona',
  epoca: 'modernos',
  regiao: 'africa',
  povo: 'malgaxes (Madagascar)',
  categoria: 'guerra',
  linu: true,
  name: 'Fanorona',
  emoji: '🔺',
  status: 'pronto',
  playable: true,
  year: 'citado numa lenda do rei Ralambo (1575–1610); primeira descrição em inglês em 1886',
  where: 'Madagascar, onde é de longe o jogo mais popular',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês e em francês, “Fanorona” (palavra malgache; nenhuma das duas explica o significado).
  etimologia:
    'Fanorona é uma palavra do malgache, a língua de Madagascar, e se pronuncia mais ou menos “fanurne”. As fontes que consultamos não explicam o que ela quer dizer, então a origem fica em aberto. As variantes menores ganham sobrenomes: fanoron-telo, com tabuleiro 3×3 (telo é “três” em malgache), e fanoron-dimy, 5×5 (dimy é “cinco”). Em português usamos o nome malgache.',
  about:
    'O fanorona é de Madagascar, onde é de longe o jogo mais popular. Uma lenda ligada ao rei Ralambo (1575–1610) conta que o astrólogo do rei sugeriu escolher o herdeiro por quem voltasse primeiro ao palácio. O príncipe Andriantompokoindrindra estava jogando fanorona, tentando ganhar uma posição difícil de “três contra cinco” (telo noho dimy), e demorou: o trono ficou com o irmão mais novo, Andrianjaka. A descrição mais antiga em inglês é de William Montgomery, no Antananarivo Annual, de 1886. O jogo tem uma captura rara: por aproximação ou por afastamento. Em 2007, pesquisadores da Universidade de Maastricht mostraram que, com os dois jogando sem errar, ele termina empatado.',
  rules: FANORONA_RULES,
  variants: [
    {
      name: 'Fanoron-Telo',
      where: 'Madagascar, num tabuleiro de 3×3',
      text: 'A versão menor, num tabuleiro de 3 por 3. A dificuldade se compara à do jogo da velha.',
    },
    {
      name: 'Fanoron-Dimy',
      where: 'Madagascar, num tabuleiro de 5×5',
      text: 'A versão do meio, num tabuleiro de 5 por 5. A de 9 por 5, jogada aqui, é a Fanoron-Tsivy, a mais popular das três.',
    },
    {
      name: 'Vela',
      where: 'a revanche tradicional',
      text: 'Uma partida nova em que quem perdeu “pede perdão”: ele captura as peças do vencedor uma de cada vez, e o vencedor não pode capturar até ficar com só 5 peças. O vencedor tem de deixar uma peça para ser capturada em cada vez; se não consegue, o perdedor é perdoado na hora, mas o empate não perdoa (Wikipédia em francês). Dá para jogar no app: escolha “Vela”. Aqui, para simplificar, as pretas fazem o papel do vencedor e as brancas, do perdedor.',
      jogavel: 'vela',
    },
  ],
};

// Kalah: artigo “Kalah” da Wikipédia em inglês, consultado em 11/10/2026. Ver `services/kalah-engine.ts`.
const KALAH_RULES: GameRule[] = [
  { title: 'Tabuleiro e sementes', text: 'Cada jogador tem 6 casas na fileira dele e um depósito grande na ponta à sua direita. Cada casa começa com 4 sementes; os depósitos começam vazios.' },
  { title: 'Semear', text: 'Na sua vez, pegue todas as sementes de uma casa sua e ponha uma em cada casa seguinte, no sentido anti-horário, passando pelo seu depósito, mas pulando o do adversário.' },
  { title: 'Vez extra', text: 'Se a última semente cai no seu depósito, você joga de novo. Não há limite de vezes.' },
  { title: 'Captura', text: 'Se a última semente cai numa casa sua que estava vazia e a casa da frente tem sementes, você leva para o seu depósito a última semente e todas as da frente.' },
  { title: 'Fim do jogo', text: 'Quando um jogador fica sem sementes nas casas, o jogo acaba: o outro leva para o próprio depósito as que sobraram do lado dele. Vence quem tiver mais sementes no depósito.' },
];

const KALAH: KnowledgeGame = {
  id: 'kalah',
  epoca: 'contemporaneos',
  regiao: 'americas',
  povo: 'Estados Unidos',
  categoria: 'semear',
  linu: true,
  name: 'Mancala (Kalah)',
  emoji: '🫘',
  status: 'pronto',
  playable: true,
  year: 'anos 1950 (patente americana publicada em 11 de outubro de 1955)',
  where: 'Estados Unidos; criado a partir da antiga família das mancalas',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Mancala” (do árabe minqala, de naqala, “mover”) e “Kalah” (não explica o nome; “Kalahari” é provável etimologia falsa).
  etimologia:
    '“Mancala” vem do árabe minqala, palavra formada da raiz naqala, “mover”: é o jogo de mover as sementes. Nos Estados Unidos, essa versão moderna foi vendida como Kalah, e as fontes não explicam de onde veio esse nome; a ligação com o deserto do Kalahari, às vezes citada, é considerada uma etimologia falsa. No Brasil o jogo costuma ser vendido simplesmente como “Mancala”.',
  about:
    'O Kalah é o jogo que muita gente conhece só como “Mancala”: uma versão moderna da antiga família das mancalas, os jogos de semear e capturar com sementes em covas, como o oware de Gana. Foi patenteado e vendido nos Estados Unidos por William Julius Champion Jr.; a patente foi publicada em 11 de outubro de 1955. A diferença que mais se nota em relação às mancalas tradicionais são os dois depósitos nas pontas, onde caem as sementes e as capturas, e a vez extra de quem termina a semeadura no próprio depósito. Por computador já se provou que, com 4 sementes por casa e os dois jogando sem errar, quem começa vence por 8 sementes (Mark Rawlings, 2015).',
  rules: KALAH_RULES,
  variants: [
    {
      name: 'Captura com a casa da frente vazia',
      where: 'uma variante comum das regras',
      text: 'Se a última semente cai numa casa sua vazia, ela vai para o depósito mesmo quando a casa da frente também está vazia. Dá para jogar no app: escolha “Captura com a casa da frente vazia”.',
      jogavel: 'frente-vazia',
    },
    {
      name: 'Mais sementes por casa',
      where: 'Kalah(6,5) e Kalah(6,6)',
      text: 'Começando com 5 ou 6 sementes por casa, a partida fica mais longa. Com 5 sementes, também já se provou que quem começa vence, por 10 sementes. Dá para jogar no app com 6 sementes por casa: escolha “Mais sementes por casa”.',
      jogavel: 'seis',
    },
  ],
};

// Xiangqi: artigo “Xiangqi” da Wikipédia em inglês, consultado em 11/10/2026 (regras, história e
// variantes). Ver `services/xiangqi-engine.ts`.
const XIANGQI_RULES: GameRule[] = [
  { title: 'Tabuleiro', text: 'São 9 linhas verticais e 10 horizontais, e as peças ficam nos cruzamentos. No meio corre o “rio”, e em cada ponta há um “palácio” de 3×3 pontos, marcado com um X. As vermelhas começam.' },
  { title: 'General, conselheiros e elefantes', text: 'O general anda um ponto na horizontal ou na vertical, sem sair do palácio; os conselheiros, um ponto na diagonal, também só no palácio. Os elefantes andam exatamente dois pontos na diagonal, não pulam peças (uma peça no meio “tapa o olho do elefante”) e não atravessam o rio.' },
  { title: 'Cavalos e carros', text: 'O cavalo anda um ponto reto e depois um na diagonal, para fora. Ele não pula: uma peça colada a ele na direção do movimento “prende a perna do cavalo”. O carro anda quantos pontos quiser na horizontal ou na vertical, como a torre do xadrez.' },
  { title: 'Canhões e soldados', text: 'O canhão anda como o carro, mas só captura pulando exatamente uma peça, de qualquer cor, a “plataforma”. O soldado anda um ponto para a frente; depois de atravessar o rio, pode andar também um ponto para o lado. Ele nunca volta.' },
  { title: 'Generais frente a frente', text: 'Os dois generais não podem ficar na mesma coluna sem nenhuma peça no meio. Por isso, nenhum lance pode deixá-los assim.' },
  { title: 'Quem vence', text: 'Vence quem der xeque-mate. Diferente do xadrez, quem fica sem nenhum lance também perde. As regras oficiais proíbem o xeque perpétuo; aqui, para simplificar, a mesma posição pela terceira vez é empate.' },
];

const XIANGQI: KnowledgeGame = {
  id: 'xiangqi',
  epoca: 'medievais',
  regiao: 'asia',
  povo: 'chineses',
  categoria: 'guerra',
  linu: true,
  name: 'Xadrez chinês (Xiangqi)',
  emoji: '🀄',
  status: 'pronto',
  playable: true,
  year: 'regras descritas desde a dinastia Tang (séc. VIII–IX); a forma de hoje, desde a dinastia Song do Sul (1127–1279)',
  where: 'China; muito jogado também no Vietnã, onde se chama cờ tướng',
  // De onde vem o nome (consultado em 15/10/2026): Wikipédia em inglês, “Xiangqi” (象 = elefante, marfim, figura ou fenômeno celeste; H. J. R. Murray e o “Figure Game”).
  etimologia:
    'Xiangqi (象棋) junta 象, que costuma ser lido como “elefante”, e 棋, “jogo de tabuleiro”: “o jogo do elefante”. Mas 象 também pode querer dizer “marfim”, “figura” ou “fenômeno do céu”, e o historiador H. J. R. Murray achava mais provável “o jogo das figuras”, porque antes se jogava com figurinhas. Ou seja, o sentido original é discutido. Em português dizemos “xadrez chinês”, pela semelhança com o xadrez.',
  about:
    'O xiangqi é o jogo de tabuleiro mais popular da China e é da mesma família do xadrez, do shogi japonês, do janggi coreano e do chaturanga indiano. Um jogo chamado “xiangqi” já aparece em textos antigos, mas sem regras, e talvez fosse outro. A descrição mais antiga das regras está na história “Cén Shùn”, do livro Xuanguai lu, escrito por Niu Sengru no meio da dinastia Tang. O jogo é igual ao de hoje desde a dinastia Song do Sul. O rio do meio se chama “rio de Chu, fronteira de Han”, lembrando a guerra entre os reinos de Chu e Han: as vermelhas são Han e as pretas, Chu. O janggi, da Coreia, nasceu do xiangqi.',
  rules: XIANGQI_RULES,
  variants: [
    {
      name: 'Xadrez manchu',
      where: 'criado na dinastia Qing, dos manchus',
      text: 'As vermelhas jogam sem os cavalos, sem os canhões e com só um carro, mas esse carro pode andar também como cavalo e como canhão. Dá para jogar no app: escolha “Xadrez manchu”. A Wikipédia diz que as pretas parecem levar vantagem, mas um descuido diante desse carro custa caro. As fontes não dizem se a perna do “cavalo” dele pode ser presa; aqui pode, como a do cavalo de verdade. No tabuleiro, ele aparece como 旗 (“bandeira”), escolha do app, porque o PyChess o chama de “Banner”.',
      jogavel: 'manchu',
    },
    {
      name: 'Banqi',
      where: 'mais conhecido em Hong Kong do que na China continental',
      text: 'Usa as peças e o tabuleiro do xiangqi, mas não segue nenhuma das regras dele: lembra mais o jogo Stratego.',
    },
    {
      name: 'San Guo Qi (Jogo dos Três Reinos)',
      where: 'provavelmente da dinastia Song do Sul (1127–1279)',
      text: 'Três exércitos (vermelho, azul e verde) num tabuleiro hexagonal, com um rio em forma de Y. Cada jogador tem 18 peças: as 16 do xiangqi e mais duas novas.',
    },
  ],
};

/**
 * Candidatos pra próxima rodada (pedido do Matheus, 09/10/2026: "escolhe mais 8 jogos pra entrar,
 * anota os nomes e coloca como em breve"). Só nome/emoji por enquanto — sem `about`/`rules`/
 * `variants` ainda (o teste em `jogos-conhecimento.test.ts` garante isso pros jogos "em breve"),
 * pra não prometer conteúdo que ainda não foi pesquisado com fonte real.
 */
// Gamão: artigos da Wikipédia em inglês “Backgammon”, “Tavli”, “Tavla”, “Nard (game)”, “Doubling
// cube” e “Edmond Hoyle”, e “Gamão” da Wikipédia em português, consultados em 14/10/2026 (história,
// regras e variantes). Etimologia: “Backgammon” (Wikipédia em inglês), “Gamão” (Wikipédia em
// português, que cita o Aurélio) e o verbete “gamão” do Wikcionário, consultados em 15/10/2026.
// Ver `services/gamao-engine.ts`.
const GAMAO_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'São 24 casas em forma de triângulo, os “pontos”, em quatro quadrantes de 6, com a “barra” no meio. Cada jogador tem 15 peças: 2 no ponto 24, 5 no 13, 3 no 8 e 5 no 6, contando do lado dele. Os dois correm em sentidos opostos, cada um para a própria “casa” (os pontos 1 a 6).' },
  { title: 'Os dados', text: 'Para começar, cada um rola um dado: quem tirar mais começa, usando os dois números (se empatar, rolam de novo). Depois, cada vez rola os dois dados. Cada dado é um movimento: dá para andar com duas peças ou com a mesma peça duas vezes. Uma dupla (dois números iguais) vale quatro movimentos.' },
  { title: 'Bater e entrar', text: 'Não se pode parar num ponto com duas ou mais peças do adversário. Uma peça sozinha num ponto pode ser batida: quem para em cima dela a manda para a barra. Quem tem peça na barra precisa entrar com ela antes de mexer em qualquer outra, pela casa do adversário: o dado 1 entra no ponto 24, o 6 no ponto 19. Se não há ponto livre, a vez passa.' },
  { title: 'Usar os dados', text: 'É obrigatório usar os dois dados sempre que der, na ordem que quiser (numa dupla, o máximo dos quatro). Se só um dos dois cabe, joga-se esse; se cabe um ou o outro, mas não os dois, tem de ser o maior. Sem nenhum lance possível, a vez passa.' },
  { title: 'A soma dos dados numa peça só', text: 'Quem usa os dois dados na mesma peça anda a soma deles: com 3 e 5, a peça anda 8. Mas são dois movimentos seguidos, e a peça para no meio do caminho (3 casas, ou 5): essa parada não pode ser um ponto fechado, e se tiver uma peça sozinha do adversário, ela é batida. Numa dupla, a peça pode andar 2, 3 ou 4 vezes o número. Neste app, ao tocar numa peça, as marcas mostram cada dado e também as somas, e escolher uma soma move a peça num toque só. Quando as duas ordens servem, o app passa pela parada que não bate ninguém; para bater no meio do caminho, mova um dado de cada vez.' },
  { title: 'Retirada', text: 'Com as 15 peças na casa, o jogador começa a tirar: o dado tira uma peça do ponto do mesmo número. Se esse ponto está vazio e não há peça em ponto mais alto, o dado tira a peça do ponto mais alto ocupado. Também dá para usar o dado para andar dentro da casa.' },
  { title: 'Quem vence', text: 'Vence quem tirar todas as peças primeiro. A vitória simples vale 1 ponto; o “gamão”, quando o perdedor não tirou nenhuma peça, vale 2; e o “backgammon”, quando ele ainda tem peça na barra ou na casa do vencedor, vale 3. O app mostra o tipo de vitória no fim da partida.' },
  { title: 'O que este app simplificou', text: 'Aqui, para simplificar, fica de fora o cubo de dobrar: um dado com 2, 4, 8, 16, 32 e 64 que, no meio da partida, propõe dobrar o valor dela (o adversário aceita ou desiste). Ele surgiu nos anos 1920, em clubes de jogo de Nova York.' },
];

const GAMAO: KnowledgeGame = {
  id: 'gamao',
  epoca: 'antigos',
  regiao: 'asia',
  povo: 'persas e romanos; a forma de hoje, inglesa',
  categoria: 'sorte',
  linu: true,
  name: 'Gamão (Backgammon)',
  emoji: '🎲',
  status: 'pronto',
  playable: true,
  year: 'o nard persa, entre os séculos III e VI; o nome “backgammon”, em 1647',
  where: 'família das “tábulas”, jogada na Pérsia e no Império Romano; as regras de hoje se firmaram na Inglaterra',
  etimologia:
    'O nome inglês “backgammon” aparece em 1647 e vem, provavelmente, de “back” (“para trás”) e do inglês médio “gamen” (“jogo”), segundo a Wikipédia em inglês; antes, o jogo se chamava “tables” (“tábulas”). Para o Wikcionário, “gamão” veio do inglês “gammon”, a forma curta de “backgammon”. Já a Wikipédia em português, citando o dicionário Aurélio, diz que a origem da palavra é incerta e discutida. Uma das explicações para o “back” é que o tabuleiro ficava nas costas do tabuleiro de damas ou de xadrez, mas é só uma das hipóteses.',
  about:
    'O gamão é o jogo mais conhecido de uma família antiga, a dos jogos de “tábulas” (em inglês, tables games): dois jogadores correm com 15 peças cada um, em sentidos opostos, num tabuleiro de 24 pontos, guiados por dois dados. Corridas com dados são muito antigas: o Jogo Real de Ur, de cerca de 2600 a.C., é o jogo mais antigo de que se conhecem regras. Os romanos jogavam o ludus duodecim scriptorum e, depois, a tábula, descrita num epigrama do tempo do imperador bizantino Zenão, no fim do século V. Na Pérsia, o nard surgiu entre os séculos III e VI; a lenda diz que foi inventado por Bozorgmehr, vizir do rei Cosroes I, e um livreto persa do século VI traz a descrição mais antiga das regras. O nome inglês aparece pela primeira vez numa carta de James Howell de 1647, escrito “baggammon”; em 1666, contavam que o nome antigo era “tables”. Edmond Hoyle publicou um tratado com as regras em 1743 (o artigo da Wikipédia em inglês sobre o gamão diz 1753). No Brasil, inventários registram o jogo desde o século XVI, e a Associação Brasileira de Gamão existe desde 1982. De onde vem a palavra “gamão”, ninguém sabe ao certo.',
  rules: GAMAO_RULES,
  variants: [
    {
      name: 'Tavla',
      jogavel: 'tavla',
      where: 'Turquia (no persa, takhteh)',
      text: 'A mesma posição inicial do gamão. Quem ganha a abertura rola de novo os dois dados, então a primeira jogada pode ser uma dupla. Dentro da própria casa, não vale bater uma peça e seguir em frente com a mesma peça. Não existe o backgammon (a vitória vale no máximo 2) nem o cubo de dobrar. No app, quando há duas ou mais peças suas no ponto onde você bateu, uma delas ainda pode andar.',
    },
    {
      name: 'Tavli: portes, plakoto e fevga',
      where: 'Grécia, Chipre e os Bálcãs',
      text: 'Três jogos seguidos, em rodízio, até alguém fazer 5 ou 7 pontos. O portes é quase o gamão, sem o backgammon e sem o cubo. No plakoto, as 15 peças começam no ponto 24 e não se bate: quem para em cima de uma peça sozinha a “prende”, e ela não anda até ser solta; prender a última peça do ponto inicial, a “mãe”, vale vitória dupla. Na fevga, as peças também começam juntas, os dois andam no mesmo sentido, não se bate nem se prende, uma peça sozinha já fecha o ponto, e é proibido fechar o adversário por completo.',
    },
    {
      name: 'Nardy (gamão longo)',
      where: 'Rússia e outros países da antiga União Soviética; o Cáucaso',
      text: 'Descende do nard persa. As 15 peças começam juntas, na “cabeça”, e os dois andam no mesmo sentido. Não se bate. Só uma peça sai da cabeça por vez, a não ser na primeira jogada, com 3-3, 4-4 ou 6-6. Não vale fazer uma barreira de seis pontos seguidos na frente de todas as peças do adversário. A vitória vale 1, ou 2 se o perdedor não tirou nenhuma peça.',
    },
    {
      name: 'Hypergammon',
      jogavel: 'hypergammon',
      where: 'variante moderna',
      text: 'Cada jogador tem só 3 peças, nos pontos 24, 23 e 22; o resto das regras é o do gamão. Por ser tão pequeno, foi resolvido por computador por volta de 1994.',
    },
  ],
};
// Damas chinesas: artigos “Chinese checkers” e “Halma” da Wikipédia em inglês e “Halma” da
// Wikipédia em alemão (Sternhalma), a página “The Rules of Chinese Checkers” da Masters Traditional
// Games (mastersofgames.com; regras, pontas de outros jogadores e a regra contra o bloqueio) e o
// artigo “Which Country Was Chinese Checkers Invented In?” do WorldAtlas (a Ravensburger), todos
// consultados em 14/10/2026. Etimologia: os mesmos artigos (Stern = “estrela”; halma, do grego
// “salto”; “Chinese checkers”, nome de marketing dos Pressman em 1928; “Dames chinoises” em francês,
// citado na Wikipédia em alemão). Ver `services/damas-chinesas-engine.ts`.
const DAMAS_CHINESAS_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'O tabuleiro é uma estrela de 6 pontas com 121 casas: um hexágono no meio e 6 pontas de 10 casas. Cada jogador começa com 10 peças numa ponta. A dois, as pontas são opostas; a três, fica uma ponta vazia entre cada jogador.' },
  { title: 'Objetivo', text: 'Levar as 10 peças para a ponta do outro lado da estrela. Vence quem ocupar primeiro as 10 casas de lá. Ninguém captura nada: as peças nunca saem do tabuleiro.' },
  { title: 'Passo ou saltos', text: 'Na sua vez, você move uma peça só. Ou ela anda uma casa para uma vizinha vazia, ou ela salta: pula uma peça vizinha, sua ou de outro, e cai na casa vazia logo depois, em linha reta. Depois de cada salto, você escolhe se para ou se segue saltando, em qualquer das 6 direções. Não dá para misturar passo com salto.' },
  { title: 'Pontas dos outros', text: 'As regras mais comuns não falam disso. Aqui vale a sugestão da Masters Games: a peça pode passar saltando pela ponta de saída ou de chegada de outro jogador, mas não pode parar nela. E a peça que já chegou na ponta de destino só anda lá dentro, não sai mais.' },
  { title: 'Contra o bloqueio', text: 'Um jogador pode deixar uma peça parada em casa só para tapar uma casa da sua ponta de chegada. A maioria das regras não fala disso, então o bloqueio seria permitido. Aqui vale a regra de James Masters (2002): quem não consegue vencer por causa de uma peça do outro na ponta de chegada pode trocar de lugar com ela. Aqui, para simplificar, a troca só vale quando a ponta de chegada está toda ocupada, e no fim do lance: a peça do outro vai para a casa de onde a sua saiu.' },
];

const DAMAS_CHINESAS: KnowledgeGame = {
  id: 'damas-chinesas',
  epoca: 'modernos',
  regiao: 'europa',
  povo: 'alemães',
  categoria: 'modernos',
  linu: true,
  name: 'Damas chinesas',
  emoji: '⭐',
  status: 'pronto',
  playable: true,
  year: '1892 (Stern-Halma, na Alemanha); o nome “damas chinesas” é de 1928, nos Estados Unidos',
  where: 'Alemanha, a partir do Halma americano; o nome “chinês” nasceu nos Estados Unidos',
  etimologia:
    'O nome original é alemão: Stern-Halma, o “Halma da estrela”. Stern quer dizer “estrela”, e halma vem do grego hálma, “salto”, o movimento do jogo. Nos Estados Unidos, em 1928, os irmãos Pressman o venderam como “Hop Ching checkers” e depois “Chinese checkers”, um nome de marketing, porque o jogo não tem nada a ver com a China. “Damas chinesas” é a tradução desse nome americano (checkers é o jogo de damas em inglês), como o francês “dames chinoises”; as fontes consultadas não dizem por qual caminho o nome chegou ao português.',
  about:
    'Apesar do nome, as damas chinesas não vêm da China e nem são damas. O jogo foi inventado na Alemanha em 1892, com o nome Stern-Halma (“Halma da estrela”), segundo algumas fontes pela editora Ravensburger. Ele é uma variação do Halma, um jogo de tabuleiro quadrado criado em 1883 ou 1884 pelo cirurgião americano George Howard Monks; “halma” vem da palavra grega para “salto”. O nome “Chinese checkers” foi uma jogada de marketing dos irmãos Bill e Jack Pressman, nos Estados Unidos, em 1928: o jogo deles se chamava primeiro “Hop Ching checkers”, e o ar oriental ajudava a vender. Depois o jogo chegou mesmo à China, levado pelo Japão, e lá se chama tiaoqi, “jogo de saltar”. No Japão e na Coreia do Sul, o mais jogado é uma variante, o “diamond game”. O Halma, o avô quadrado delas, também está nos Jogos do conhecimento.',
  rules: DAMAS_CHINESAS_RULES,
  variants: [
    {
      name: 'Damas chinesas rápidas (Super Chinese Checkers)',
      where: 'popular na França',
      text: 'O salto pode ser longo: a peça pula outra peça que esteja longe, desde que caia à mesma distância do outro lado, com todas as casas do caminho vazias. Dá para jogar no app: escolha “Damas chinesas rápidas”. A troca contra o bloqueio continua valendo só no salto curto.',
      jogavel: 'longo',
    },
    {
      name: 'Diamond game',
      where: 'Japão e Coreia do Sul',
      text: 'Usa 10 peças num tabuleiro de 73 casas ou com 15 peças no tabuleiro de 121. Cada jogador tem um “rei”, que pode pular as peças comuns, mas as peças comuns não podem pular o rei.',
    },
    {
      name: 'Halma',
      where: 'Estados Unidos, 1883–1884: o jogo de onde o Stern-Halma saiu',
      text: 'O mesmo jeito de saltar, mas num tabuleiro quadrado de 16×16 casas, de dois a quatro jogadores, com as peças começando nos cantos.',
    },
    {
      name: 'Com captura',
      where: 'variante citada na Wikipédia',
      text: 'As 60 peças começam no hexágono do meio. Quem salta uma peça captura ela, e vence quem capturar mais.',
    },
  ],
};
// Dominó: consultados em 14/10/2026 — Wikipédia em inglês (“Dominoes” e “Chinese dominoes”),
// Wikipédia em português (“Dominó”), pagat.com (“Draw Dominoes”, “All Fives” e a página de história,
// que cita Michael Dummett, “The Game of Tarot”). Ver `services/domino-engine.ts`.
const DOMINO_RULES: GameRule[] = [
  { title: 'As pedras', text: 'O jogo duplo-seis tem 28 pedras, com todas as combinações de dois números de 0 a 6, cada uma uma vez só. As sete pedras com o mesmo número nas duas metades são os duplos, que no Brasil se chamam “carroças”.' },
  { title: 'Distribuição e saída', text: 'A dois, cada jogador pega 7 pedras, e as 14 que sobram ficam viradas para baixo, no monte (em parte do Nordeste, o monte se chama “dorme”). Na primeira rodada começa quem tem a carroça mais alta, jogando com ela. Nas rodadas seguintes, começa quem ganhou a anterior, com a pedra que quiser. As fontes divergem aqui: muitas regras sorteiam quem começa; o pagat cita a carroça mais alta como costume de Porto Rico, da Ucrânia e da Ásia Central.' },
  { title: 'Na sua vez', text: 'Encoste uma pedra numa das duas pontas da linha, pelo lado que tem o mesmo número da ponta. Sem pedra que sirva, compre do monte, uma de cada vez, até poder jogar. Com o monte vazio, passe a vez. Comprar tendo pedra que serve não vale: a Wikipédia em português lembra que isso é considerado “roubo”.' },
  { title: 'Bater e trancar', text: 'Quem joga a última pedra “bate” e ganha os pontos (a soma dos números) que sobraram na mão do outro. Se ninguém mais consegue jogar e o monte acabou, o jogo está trancado: ganha quem tem menos pontos na mão e leva os pontos do outro. Com a mesma soma, ninguém marca.' },
  { title: 'A partida', text: 'As rodadas se repetem até alguém chegar ao alvo: 100 pontos, como diz o pagat para o jogo a dois (aqui dá para escolher 50, 100 ou 150).' },
  { title: 'Simplificações deste app', text: 'Aqui, para simplificar, pode-se comprar até a última pedra do monte (o pagat diz que as duas últimas não se compram), e quando as duas pontas têm o mesmo número a pedra sempre entra na ponta da direita. As carroças aparecem atravessadas na linha, como na mesa, mas contam como uma pedra comum: não abrem pontas novas.' },
];

const DOMINO: KnowledgeGame = {
  id: 'domino',
  epoca: 'modernos',
  regiao: 'europa',
  povo: 'italianos, a partir dos dados e das pedras da China',
  categoria: 'sorte',
  linu: true,
  name: 'Dominó',
  emoji: '🁢',
  status: 'pronto',
  playable: true,
  year: 'na China, desde a dinastia Song (séc. XII–XIII); na Europa, desde o século XVIII',
  where: 'China (o dominó chinês); o dominó de 28 pedras surgiu na Itália e passou para a França',
  // De onde vem o nome (consultado em 15/10/2026): Wikcionário em inglês, “dominó” (português, do francês domino, do latim medieval dominō, de dominus) e “domino” (sentido do jogo “unclear”).
  etimologia:
    '“Dominó” veio do francês domino, que vem do latim dominus, “senhor”. Em francês, domino era primeiro o nome de uma roupa com capuz. Como o nome passou da capa para o jogo não se sabe ao certo; uma hipótese é a cor preta das primeiras pedras. Da mesma raiz latina vêm “dono” e “Dom”.',
  about:
    'O dominó nasceu na China. A menção mais antiga que se confirma está no livro “Antigos acontecimentos de Wulin”, de Zhou Mi (1232–1298): ele lista as “pupai”, as placas de jogo, entre as coisas que os vendedores de rua ofereciam no reinado do imperador Xiaozong, da dinastia Song (1162–1189). Uma lenda contada séculos depois diz que as pedras foram apresentadas ao imperador Huizong em 1112. O dominó chinês tem 32 pedras, cada uma um resultado possível de dois dados, sem os brancos. Na Europa, o dominó aparece no século XVIII, na Itália, talvez em Veneza e em Nápoles, segundo o historiador de jogos Michael Dummett. Não se sabe se ele veio da China ou se foi inventado de novo: as fontes divergem. Da Itália foi para a França, onde virou moda; o nome “domino” aparece por escrito em 1762. No fim do século XVIII chegou à Inglaterra, talvez com prisioneiros de guerra franceses, e de lá se espalhou pelo mundo, até as mesas de calçada do Brasil, de Cuba e de Porto Rico.',
  rules: DOMINO_RULES,
  variants: [
    {
      name: 'Dominó em duplas (sem monte)',
      where: 'Brasil, Espanha e América Latina',
      text: 'Quatro jogadores, em duas duplas sentadas frente a frente, com 7 pedras cada: todas as 28 ficam nas mãos e não há monte, então quem não tem pedra passa. Na Wikipédia em português, a batida vale 1 ponto, a batida com carroça 2, e a partida vai até 6 pontos; em Pernambuco e na Paraíba, cada um recebe só 6 pedras e as 4 que sobram ficam escondidas no “dorme”.',
    },
    {
      name: 'All Fives (Muggins)',
      where: 'Estados Unidos e Inglaterra, desde os anos 1860',
      text: 'Marca-se ponto durante a rodada: depois de cada pedra, se a soma das pontas abertas é múltiplo de 5, quem jogou ganha essa soma. A primeira carroça é a “spinner” e vira uma cruz: abre quatro pontas em vez de duas. A dois, o pagat diz que se joga até 250 pontos.',
    },
    {
      name: 'Dominó chinês',
      where: 'China; jogos como o tien gow e o pai gow',
      text: 'São 32 pedras, que representam os 21 resultados de dois dados (11 deles repetidos), sem pedras brancas. Elas se dividem em dois “naipes”, civil e militar, e os pontos de 1 e 4 são pintados de vermelho. Os jogos chineses são mais parecidos com os de cartas do que com a linha de pedras do dominó ocidental.',
    },
  ],
};
// Shogi: artigos “Shogi”, “Minishogi”, “Dōbutsu shōgi” e “Chu shogi” da Wikipédia em inglês e “将棋”
// da Wikipédia em japonês, consultados em 14/10/2026 (regras, história e variantes). Ver
// `services/shogi-engine.ts`; o perft da posição inicial vem de Patrice Duhamel, “Perft for Xiangqi &
// Shogi”, fórum TalkChess, 2013. Etimologia: Wikcionário em inglês, verbetes “将棋”, “将” e “棋”,
// consultados em 14/10/2026.
const SHOGI_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'São 9×9 casas. Cada jogador tem 20 peças: rei, torre, bispo, dois generais de ouro, dois de prata, dois cavalos, duas lanças e nove peões. As peças são pentágonos de madeira com o nome escrito em kanji, iguais para os dois lados: o dono é quem tem a ponta da peça virada para o adversário. Quem começa é o sente (as “pretas”), embaixo.' },
  { title: 'Como as peças andam', text: 'O rei anda uma casa em qualquer direção. A torre anda quantas casas quiser, reto; o bispo, na diagonal. O general de ouro anda uma casa em qualquer direção, menos nas diagonais de trás; o de prata, uma casa na diagonal ou uma para a frente. O cavalo salta duas casas para a frente e uma para o lado (só para a frente) e é a única peça que pula. A lança anda quantas casas quiser, só para a frente. O peão anda uma casa para a frente e captura do mesmo jeito.' },
  { title: 'Promoção', text: 'As três últimas fileiras são a zona de promoção. A peça que entra, anda dentro ou sai da zona pode promover: vira de costas e mostra o outro nome, em vermelho. O peão, a lança, o cavalo e a prata promovidos andam como o general de ouro; o bispo e a torre promovidos ganham também um passo de rei. Promover é escolha, mas é obrigatório quando a peça ficaria sem lance: o peão e a lança na última fileira, o cavalo nas duas últimas. O rei e o ouro não promovem.' },
  { title: 'Peças na mão (drops)', text: 'A peça capturada não sai do jogo: vai para a “mão” de quem capturou, desvirada. Na sua vez, em vez de mover, você pode largar uma peça da mão em qualquer casa vazia; ela entra sem promover. Não vale largar peça onde ela não teria lance (peão e lança na última fileira, cavalo nas duas últimas), nem pôr dois peões seus não promovidos na mesma coluna (o nifu), nem dar xeque-mate largando um peão (o uchifuzume). Com as outras peças, o mate largado vale.' },
  { title: 'Quem vence', text: 'Vence quem der xeque-mate; quem fica sem lance também perde. A mesma posição (com as mesmas peças na mão e a mesma vez) pela quarta vez é empate, o sennichite, mas quem repete a posição dando xeque em todos os lances perde. Quando os dois reis entram na zona do outro e ninguém consegue dar mate, há o impasse (jishōgi), decidido por pontos: 24 pontos para os profissionais, 27 no jeito comum entre amadores. Aqui, para simplificar, o impasse não é contado: os dois podem combinar o empate.' },
];

const SHOGI: KnowledgeGame = {
  id: 'shogi',
  epoca: 'medievais',
  regiao: 'asia',
  povo: 'japoneses',
  categoria: 'guerra',
  linu: true,
  name: 'Xadrez japonês (Shogi)',
  emoji: '🏯',
  status: 'pronto',
  playable: true,
  year: 'citado desde o século XI (era Heian); as regras de hoje, com os drops, fixadas no século XVI',
  where: 'Japão; hoje também jogado pela internet no mundo todo',
  etimologia:
    'Shōgi (将棋) junta dois caracteres: 将, “general, comandante”, e 棋, “jogo de tabuleiro”; por isso o nome costuma ser explicado como “jogo dos generais”. A palavra aparece já no século XI, no livro Shin Saru Gakuki, e em textos mais antigos também se escrevia 象戯 ou 象棋, a mesma grafia do xiangqi chinês, com o qual o nome provavelmente tem parentesco (o Wikcionário diz “provavelmente”). O português usa a palavra japonesa ou o nome descritivo “xadrez japonês”, por ser o jogo da família do xadrez jogado no Japão.',
  about:
    'O shogi é o xadrez do Japão, da mesma família do xadrez, do xiangqi chinês e do chaturanga indiano, de onde todos vieram. A menção mais aceita é a do livro Shin Saru Gakuki, de Fujiwara no Akihira (1058–1064), e as peças mais antigas, 16 peças achadas no templo Kōfuku-ji, em Nara, são da mesma época. O livro Nichūreki (c. 1210–1221) descreve um shogi “pequeno” e um “grande”; ali vencia quem deixasse o rival só com o rei, sinal de que ainda não havia drops. Ninguém sabe quando os drops começaram: a Wikipédia em inglês fala no século XV, e a em japonês traz hipóteses do século XI ao XVI. As regras de hoje teriam se fixado no século XVI, quando a peça “elefante bêbado” saiu do jogo (uma lenda atribui a mudança ao imperador Go-Nara). No período Edo, o xogunato Tokugawa pagava mestres de shogi, e as famílias Ōhashi e Itō passavam o título de Meijin de geração em geração. Hoje há cerca de 200 profissionais, e a Associação Japonesa de Shogi conta sua fundação a partir de 1924.',
  rules: SHOGI_RULES,
  variants: [
    {
      name: 'Minishogi',
      where: 'criado (ou redescoberto) por Shigenobu Kusumoto, de Osaka, por volta de 1970',
      text: 'Tabuleiro de 5×5 e só seis peças para cada um: rei, torre, bispo, ouro, prata e peão. A zona de promoção é só a última fileira, e as peças capturadas voltam como no shogi. Na repetição (a mesma posição pela quarta vez), perde quem fez o primeiro lance, menos no xeque perpétuo, em que perde quem dá os xeques. Dá para jogar no app: escolha “Minishogi”.',
      jogavel: 'mini',
    },
    {
      name: 'Dōbutsu shōgi (shogi dos bichos)',
      where: 'criado pela jogadora profissional Madoka Kitao, com peças desenhadas por Maiko Fujita, em 2008',
      text: 'Tabuleiro de 3×4, feito para as crianças. Leão (o rei), girafa, elefante e pintinho andam uma casa só; o pintinho que chega ao fim vira galinha. Vence quem captura o leão do outro ou leva o próprio leão à última fileira sem ser capturado.',
    },
    {
      name: 'Chu shogi',
      where: 'do século XIV; jogado até a Segunda Guerra Mundial, sobretudo na região de Kyoto e Osaka',
      text: 'Tabuleiro de 12×12, com 46 peças de 21 tipos para cada jogador e sem drops. A peça mais forte é o leão, que pode andar duas vezes no mesmo lance e capturar duas peças de uma vez.',
    },
    {
      name: 'Partidas com vantagem (komaochi)',
      where: 'o jeito tradicional de jogar com alguém mais forte',
      text: 'O jogador mais forte tira peças do próprio lado (por exemplo, a torre ou o bispo) e começa jogando. Assim, professores e alunos podem ter uma partida equilibrada. As vantagens mais comuns (Wikipédia em inglês, “Handicap (shogi)”): a lança, o bispo, a torre, a torre e a lança, duas peças (torre e bispo), quatro (mais as duas lanças) e seis (mais os dois cavalos). Dá para jogar no app: escolha “Partidas com vantagem” e depois a vantagem. O lado de cima (o Linu, contra ele) dá a vantagem e começa.',
      jogavel: 'komaochi',
    },
  ],
};

/**
 * Pedido do dono (14/10/2026): “crie essas que faltam e mais 10 jogos, adicionando +8 em em breve”.
 * Os 10 jogos novos a ficar jogáveis (cada um entra com fonte, motor com testes e tabuleiro):
 */
// Jogo da onça (adugo): consultados em 15/10/2026 — Wikipédia em português “Jogo da onça” (que cita
// Caldas, 1903, nos Archivos do Museu Nacional; o verbete Bororo do ISA, Povos Indígenas no Brasil; e
// “Brincadeira na aldeia”, Ciência Hoje das Crianças, 2005); Wikipédia em inglês “Adugo” (que cita
// Ferreira, Vinha e Souza, 2008, na Revista Brasileira de Ciência e Movimento, e outros); a folha de
// regras da Ludoteca SP Leituras (ludoteca.spleituras.org.br, “Jogo da onça”); Ludosofia, “Adugo, um
// jogo dos indígenas brasileiros” (2018). As fontes são poucas e quase todas de divulgação; onde
// divergem, o texto diz. Ver `services/caca-engine.ts` (configuração `ONCA`).
const ONCA_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'O tabuleiro junta um quadrado de alquerque (5×5 pontos, com linhas retas e diagonais) a um triângulo preso no meio de um dos lados, a “toca”. Tradicionalmente ele é riscado no chão, com pedrinhas como peças. Um jogador fica com a onça; o outro, com 14 cachorros. A onça começa no centro do quadrado, e os cachorros ocupam a metade do quadrado longe da toca.' },
  { title: 'Movimento', text: 'A onça começa. Na sua vez, cada um move uma peça só, um ponto, seguindo as linhas do desenho, em qualquer direção.' },
  { title: 'A onça captura saltando', text: 'Como nas damas, a onça salta por cima de um cachorro vizinho e cai no ponto vazio logo depois, em linha reta; o cachorro saltado sai do jogo. Os cachorros não capturam. Segundo a folha de regras da Ludoteca SP Leituras, a onça não é obrigada a capturar e pode fazer vários saltos seguidos (a Wikipédia em português diz que as fontes não deixam isso claro). No app, a onça pode seguir saltando e parar quando quiser.' },
  { title: 'Quem vence', text: 'A onça vence quando captura 5 cachorros. Os cachorros vencem quando encurralam a onça, de modo que ela não consiga mais se mover nem saltar. Dica das fontes: dois cachorros em fila, um atrás do outro, protegem-se, porque a onça não tem onde cair depois do salto; e a onça deve tomar cuidado para não ser encurralada dentro da toca.' },
  { title: 'O que este app simplificou', text: 'As fontes não falam em empate. Aqui, para a partida não ficar sem fim, depois de 200 lances ela termina empatada.' },
];

const ONCA: KnowledgeGame = {
  id: 'onca',
  epoca: 'tradicionais',
  regiao: 'americas',
  povo: 'Bororo (Boe), de Mato Grosso, e outros povos indígenas do Brasil',
  categoria: 'caca',
  linu: true,
  name: 'Jogo da onça (Adugo)',
  emoji: '🐆',
  status: 'pronto',
  playable: true,
  year: 'tradicional; já jogado antes da colonização, segundo a Wikipédia em português (a origem é discutida)',
  where: 'Brasil: o povo Bororo, em Mato Grosso, e também os Manchineri (Acre) e os Guarani (São Paulo)',
  etimologia:
    '“Adugo” quer dizer “onça” na língua bororo, segundo a Wikipédia em inglês e a folha de regras da Ludoteca SP Leituras; a Wikipédia em inglês diz ainda que os cachorros são chamados “arikau”. “Jogo da onça” é o nome em português, que traduz a mesma ideia: o jogo é a caçada da onça-pintada pelos cachorros. Por isso ele também aparece como “onça e cachorros”.',
  about:
    'O jogo da onça, ou adugo, é um jogo de caça e perseguição dos povos indígenas do Brasil, conhecido sobretudo entre os Bororo, que chamam a si mesmos de Boe e vivem em Mato Grosso. Segundo a Wikipédia em português, ele também era jogado pelos Manchineri, no Acre, e pelos Guarani, em São Paulo, e na aldeia Meruri, em General Carneiro (MT), há quem ainda o conheça e jogue. De um lado está a onça, sozinha e forte, que caça saltando; do outro, os cachorros, muitos e fracos, que só vencem trabalhando juntos para encurralá-la. A origem do jogo é discutida. Uma ideia é que ele já existia antes da chegada dos europeus; outra, citada pela Wikipédia em inglês, é que o tabuleiro de alquerque, um jogo antigo da Península Ibérica e do mundo árabe, foi trazido para as Américas pelos espanhóis. Ele se parece com outros jogos de caça das Américas e da Ásia: o jogo da puma dos Andes, o komikan dos Mapuche, no Chile, e o bagh-chal do Nepal. A Wikipédia em português lembra um desenho de 1615, de Felipe Guamán Poma de Ayala, que mostra o inca Atahualpa jogando num tabuleiro de alquerque com seus captores. Hoje o jogo da onça é usado em muitas escolas brasileiras para falar das culturas indígenas e para ensinar estratégia.',
  rules: ONCA_RULES,
  variants: [
    {
      name: 'Com mais de uma toca',
      where: 'aldeia Meruri, General Carneiro (MT), segundo a Wikipédia em português',
      text: 'Os jogadores usam às vezes um ou mais triângulos de encurralamento em volta do quadrado, e não só um. A onça ganha mais caminhos, e os cachorros, mais lugares para prendê-la. Dá para jogar no app: escolha “Com mais de uma toca”. As fontes não dizem quantas tocas nem onde; aqui, para simplificar, são duas, a de cima e outra igual embaixo, atrás dos cachorros.',
      jogavel: 'tocas',
    },
    {
      name: 'Jogo da puma (taptana) e komikan',
      where: 'Andes (incas, quíchuas e aimarás) e o povo Mapuche, no Chile',
      text: 'Jogos de caça no mesmo tipo de tabuleiro, citados pela Ludoteca SP Leituras e pela Wikipédia em inglês. Um caçador (a puma, ou a onça) enfrenta muitas presas; as fontes não são unânimes sobre os detalhes de cada um, e há quem os veja como o mesmo jogo com nomes diferentes.',
    },
  ],
};
// Bagh-chal: consultados em 15/10/2026 — Wikipédia em inglês “Bagh-Chal” (regras, nomes em nepali e em
// newar; cita David Parlett, “The Oxford History of Board Games”, 1999, p. 194, e o Kathmandu Post,
// 2021); Lim Yew Jin e Jürg Nievergelt, “Tigers and Goats is a draw”, em “Games of No Chance 3” (MSRI,
// 2009); Wiktionary em inglês, verbetes “बाघ” e “चाल”; Wikipédia em português “Jogo da onça” (a
// semelhança com o jogo da onça). Ver `services/caca-engine.ts` (configuração `BAGH_CHAL`).
const BAGH_CHAL_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Um tabuleiro de 5×5 pontos, ligados por linhas retas e, a partir de pontos alternados, por diagonais (o mesmo desenho do alquerque). As peças ficam nos pontos. Um jogador tem 4 tigres, que começam nos 4 cantos; o outro tem 20 cabras, todas fora do tabuleiro no começo.' },
  { title: 'As cabras entram', text: 'As cabras começam. Enquanto ainda há cabras fora, a vez das cabras é sempre pôr uma delas num ponto vazio. Só depois que as 20 entraram é que as cabras passam a andar, um ponto por vez pelas linhas. Os tigres andam desde o começo.' },
  { title: 'O tigre captura saltando', text: 'Na vez dele, um tigre anda um ponto pelas linhas ou salta por cima de uma cabra vizinha, em linha reta, até o ponto vazio logo depois; a cabra saltada sai do jogo. É um salto só por vez, não se salta outro tigre, e capturar não é obrigatório. As cabras não capturam.' },
  { title: 'Quem vence', text: 'Os tigres vencem quando capturam 5 cabras. As cabras vencem quando prendem os tigres: nenhum deles consegue andar nem saltar.' },
  { title: 'Sem repetir', text: 'Depois que todas as cabras entraram, nenhum lance pode recriar uma posição que já apareceu no tabuleiro. A regra impede que a partida fique dando voltas sem fim. No app, quando a cabra fica sem lance (é raro), a vez volta para os tigres.' },
];

const BAGH_CHAL: KnowledgeGame = {
  id: 'bagh-chal',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'Nepal',
  categoria: 'caca',
  linu: true,
  name: 'Tigres e cabras (Bagh-chal)',
  emoji: '🐅',
  status: 'pronto',
  playable: true,
  year: 'tradicional, sem data certa',
  where: 'Nepal; um jogo parecido, com outro tabuleiro, é jogado no sul da Índia',
  etimologia:
    'Em nepali, बाघ चाल, “bāgh cāl”. “Bāgh” quer dizer “tigre” em nepali e em hindi e vem do sânscrito “vyāghra”, também “tigre”. “Cāl”, em hindi, quer dizer “andar” ou “movimento” e também “jogada, artimanha” (Wiktionary): o nome fica algo como “a jogada do tigre”. Em newar, outra língua do Nepal, o jogo se chama “dhun kasa”, “jogo do tigre”, segundo a Wikipédia em inglês. Em português, ele é mais conhecido pelo nome nepali, ou como “tigres e cabras”.',
  about:
    'O bagh-chal é o jogo de caça do Nepal: quatro tigres contra vinte cabras. Ele é popular sobretudo no campo; em 2021, o jornal Kathmandu Post contava que ele estava perto de sumir, segundo a Wikipédia em inglês. Os dois lados são muito diferentes: os tigres são poucos e fortes e caçam saltando, como nas damas; as cabras são muitas e não capturam, mas vencem se trabalharem juntas para prender os tigres. Ele pertence à mesma família de jogos de caça do jogo da onça dos povos indígenas do Brasil e de outros jogos do sul e do sudeste da Ásia, todos no tabuleiro de linhas do alquerque. No sul da Índia joga-se um parente próximo, o aadu puli attam (“cordeiros e tigres”), num tabuleiro diferente. Em 2009, os pesquisadores Lim Yew Jin e Jürg Nievergelt mostraram por computador que, com os dois lados jogando perfeitamente, a partida termina empatada.',
  rules: BAGH_CHAL_RULES,
  variants: [
    {
      name: 'Aadu puli attam (cordeiros e tigres)',
      where: 'sul da Índia',
      text: 'Segundo a Wikipédia em inglês, as regras são as mesmas do bagh-chal, mas o tabuleiro é outro. As fontes consultadas não descrevem esse tabuleiro em detalhe.',
    },
    {
      name: 'Jogo da onça (adugo)',
      where: 'povos indígenas do Brasil',
      text: 'O mesmo tipo de caçada no tabuleiro de alquerque, mas com uma só onça contra 14 cachorros e uma toca triangular presa ao quadrado. A onça pode saltar vários cachorros seguidos. Está à parte nos Jogos do conhecimento.',
    },
  ],
};
// Mū tōrere: consultados em 15/10/2026 — Wikipédia em inglês (“Mū tōrere”: perepere, kewai, pūtahi,
// regra do centro, a história de Wiremu Tamihana e George Grey, a análise do GamesCrafters) e em
// alemão (“Mu Torere”: Ngāti Porou, Elsdon Best, o nome “tōrere” e o “mū” como empréstimo, as 46
// posições); Cameron Browne, “Which Rules for Mu Torere?” (Digital Ludeme Project, Universidade de
// Maastricht), que compara as cinco versões publicadas da regra (Best 1917 na revista Man; Armstrong
// 1964; Reed 1963; Bell 1979 e 1980; Ascher 1987 e 1991; Straffin 1995; Jelliss 1999); Ludii,
// “Mu Torere” (regra de Best: o primeiro lance não pode vencer); Te Aka Māori Dictionary
// (maoridictionary.co.nz), verbetes “mū”, “tōrere” e “mū tōrere”. O site Te Ara e o texto de Best
// de 1925 no NZETC não abriram para consulta (acesso bloqueado). Ver `services/mutorere-engine.ts`.
const MU_TORERE: KnowledgeGame = {
  id: 'mu-torere',
  name: 'Mū tōrere',
  emoji: '🌀',
  status: 'pronto',
  playable: true,
  linu: true,
  categoria: 'cerco',
  epoca: 'tradicionais',
  regiao: 'oceania',
  povo: 'maori (Ngāti Porou), Aotearoa Nova Zelândia',
  year: 'tradicional, sem data conhecida; descrito por Elsdon Best em 1917 e 1925',
  where: 'Ilha Norte da Nova Zelândia, sobretudo no nordeste, entre os Ngāti Porou',
  etimologia:
    'O nome é maori. O dicionário Te Aka registra “mū” como palavra emprestada do inglês, “mover a peça” e também “damas”; por isso a Wikipédia em alemão acha que o nome antigo era só “tōrere”, com o “mū” juntado depois. “Tōrere”, sozinho, quer dizer “amar com paixão”, e nenhuma fonte explica a ligação com o jogo: o sentido do nome fica em aberto. Em português usamos o nome maori, com os mácrons (ū, ō), que marcam as vogais longas.',
  about:
    'O mū tōrere é um jogo dos maori, o povo nativo de Aotearoa, a Nova Zelândia. Era jogado sobretudo no nordeste da Ilha Norte, entre os Ngāti Porou, e provavelmente nasceu ali. O tabuleiro é uma estrela de 8 pontas: as pontas são os kewai (ou kawai, “tentáculos”) e o centro é o pūtahi. Cada jogador tem 4 peças, as perepere. Quem primeiro descreveu o jogo por escrito foi o etnógrafo Elsdon Best, em 1917 e em 1925. Conta-se que o chefe Wiremu Tamihana Te Waharoa ofereceu ao governador George Grey uma partida valendo o país inteiro, e que Grey não aceitou: os jogadores maori tinham fama de ganhar dos recém-chegados. Os matemáticos já analisaram o jogo inteiro: com os dois jogando bem, ele sempre empata.',
  rules: [
    { title: 'Tabuleiro e peças', text: 'A estrela tem 8 pontas (kewai) e o centro (pūtahi), 9 pontos ao todo. Cada jogador tem 4 peças, juntas em 4 pontas vizinhas, e o centro começa vazio. Como são 8 peças para 9 pontos, sempre há um ponto vazio.' },
    { title: 'Como se anda', text: 'Na sua vez, leve uma peça sua para o ponto vazio: de uma ponta para a ponta vizinha, de uma ponta para o centro ou do centro para uma ponta. Não se pula peça nenhuma e não há captura.' },
    { title: 'A regra do centro', text: 'Uma peça só pode ir de uma ponta para o centro se estiver ao lado de uma peça adversária. Sem essa regra, quem começa venceria logo no primeiro lance.' },
    { title: 'Quem vence', text: 'Perde quem, na sua vez, não consegue mover nenhuma peça. Com os dois jogando bem, a partida não termina. Aqui, para simplificar, a mesma posição pela terceira vez dá empate.' },
    {
      title: 'Onde as fontes divergem',
      text: 'Cameron Browne comparou as regras publicadas e achou cinco versões. A mais comum (Armstrong, Ascher, Straffin) aplica a regra do centro só nos dois primeiros lances de cada jogador. R. C. Bell a aplica sempre. Best, em 1917, só proibia vencer no primeiro lance. Aqui você escolhe entre as duas primeiras; a do Best não entra porque, com ela, quem joga em segundo sempre consegue vencer.',
    },
  ],
  variants: [
    {
      name: 'Regra do centro só nas primeiras jogadas',
      where: 'a versão mais comum nas fontes escritas (Armstrong 1964, Ascher 1987, Straffin 1995)',
      text: 'Nos dois primeiros lances de cada jogador, só vai para o centro a peça ao lado de uma adversária; depois, qualquer peça pode ir. É a regra que o app usa primeiro.',
    },
    {
      name: 'Regra do centro sempre',
      where: 'a versão de R. C. Bell (1979) e da Wikipédia em inglês',
      text: 'Em todo lance, só vai para o centro a peça ao lado de uma adversária. O jogo fica mais travado e termina empatado mais vezes.',
    },
  ],
};
// Kōnane: consultados em 15/10/2026 — Wikipédia em inglês (“Kōnane”: regras, tamanhos de papa,
// Kumulipo, pedras de coral e de lava, o papamū de pedra de Puʻuhonua o Hōnaunau, o registro de
// James Cook, o torneio do Bishop Museum em fevereiro de 2026; fontes dela: Cook e King 1784, Brigham
// 1906, Bell 1983, Murray 1978, Ernst 1995, Hearn 2009) e Wikcionário em inglês (“kōnane”, com o
// sentido de “luar claro” e a origem possível kō + nane, “enigma”; “papamū” = papa + mū). As páginas
// do Bishop Museum e o dicionário Pukui-Elbert (wehewehe.org) não abriram para consulta (acesso
// bloqueado). Ver `services/konane-engine.ts`.
const KONANE: KnowledgeGame = {
  id: 'konane',
  name: 'Kōnane',
  emoji: '🌺',
  status: 'pronto',
  playable: true,
  linu: true,
  categoria: 'guerra',
  epoca: 'tradicionais',
  regiao: 'oceania',
  povo: 'havaianos nativos',
  year: 'tradicional; já registrado por James Cook, que esteve no Havaí em 1778 e 1779',
  where: 'Havaí (Hawaiʻi)',
  etimologia:
    'Kōnane é uma palavra havaiana que também quer dizer “luar claro”. Para o nome do jogo, o Wikcionário sugere, com dúvida, kō + nane, “enigma”, mas a origem não é certa. O tabuleiro se chama papamū, de papa, “tábua”, e mū, o jogo; segundo a Wikipédia, mū talvez se referisse a capturar pessoas. Em português usamos o nome havaiano, com o mácron (ō) da vogal longa, como em Hawaiʻi se usa o ʻokina, o sinal da pausa na voz.',
  about:
    'O kōnane é um jogo dos havaianos nativos, citado no Kumulipo, o grande canto da criação do Havaí. Era jogado num papamū: uma rocha grande entalhada que servia ao mesmo tempo de tabuleiro e de mesa, com pedrinhas pretas de lava (basalto) e brancas de coral. Um desses tabuleiros de pedra ainda está no Puʻuhonua o Hōnaunau, um parque histórico na Ilha Grande do Havaí. O capitão James Cook viu o jogo na sua única visita ao Havaí, na terceira viagem, antes de morrer lá. Os papa tradicionais eram retangulares, de 6×7 até 13×20 casas. Hoje o jogo é estudado pela matemática dos jogos combinatórios, e em fevereiro de 2026 o Bishop Museum, de Honolulu, organizou o primeiro torneio profissional.',
  rules: [
    { title: 'Tabuleiro e pedras', text: 'O tabuleiro começa cheio: pedras pretas e brancas alternadas, como as casas de um tabuleiro de xadrez. Cada jogador escolhe uma cor. Aqui há tabuleiros de 6×6, 8×8 e 10×10.' },
    { title: 'A abertura', text: 'As pretas começam tirando uma pedra preta do meio (das quatro casas centrais) ou de um canto. Depois as brancas tiram uma pedra branca vizinha do buraco, em linha reta. Ficam dois buracos lado a lado.' },
    { title: 'O salto', text: 'Daí em diante, toda jogada é uma captura: a pedra salta sobre uma pedra adversária vizinha e cai no buraco logo depois dela, sempre em linha reta, nunca na diagonal. Pode seguir saltando, mas sem mudar de direção, e pode parar quando quiser, desde que capture pelo menos uma.' },
    { title: 'Quem vence', text: 'Perde quem, na sua vez, não tem nenhuma captura. Não existe empate.' },
  ],
  variants: [
    {
      name: 'Papa retangular tradicional',
      where: 'Havaí, nos tabuleiros de pedra e de madeira antigos',
      text: 'Os tabuleiros tradicionais eram retangulares, com medidas como 6×7, 8×9, 9×13, 14×17 e 13×20 casas. As regras são as mesmas; só muda o tamanho, e partidas maiores duram mais.',
    },
    {
      name: 'Kōnane moderno de feltro',
      where: 'Havaí e escolas de matemática, hoje',
      text: 'Versões modernas usam um tabuleiro de feltro e bolinhas de gude, quase sempre quadrado e com número par de linhas e colunas. Alguns tabuleiros têm covinhas (puka) para as pedras não rolarem.',
    },
  ],
};
// Hex: consultada em 15/10/2026 a Wikipédia em inglês, “Hex (board game)”: Piet Hein apresentou o jogo
// em 1942 no Instituto Niels Bohr; na Dinamarca ficou conhecido como Polygon, por causa do artigo dele
// no jornal Politiken de 26/12/1942, a primeira descrição publicada; depois Hein o chamou de
// Con-tac-tix; John Nash o redescobriu em 1948 ou 1949 em Princeton, onde os colegas o chamavam de
// “Nash” ou “John” (este, porque dava para jogar nos ladrilhos hexagonais do banheiro); Nash disse que
// o inventou sozinho, mas isso é posto em dúvida; a Parker Brothers o vendeu como “Hex” em 1952 e como
// “Con-tac-tix” em 1968; Martin Gardner escreveu sobre ele na coluna “Mathematical Games” de julho de
// 1957; padrão 11×11, também 13×13 e 19×19; não tem empate; quem começa tem estratégia vencedora
// (argumento de “roubo de estratégia”, atribuído a Nash), mas ninguém sabe qual é no tabuleiro
// grande; tabuleiros até 9×9 foram resolvidos (2016); regra da troca (“pie rule”). O verbete não
// explica o nome “Hex”.
const HEX_RULES: GameRule[] = [
  {
    title: 'Tabuleiro',
    text: 'Um losango de casas hexagonais, 11 por 11 no tamanho padrão (aqui também há 9×9, para aprender, e 13×13). Cada jogador é dono de dois lados opostos do losango, pintados na sua cor: o vermelho, de cima e de baixo; o azul, da esquerda e da direita.',
  },
  { title: 'Na sua vez', text: 'Ponha uma pedra da sua cor em qualquer casa vazia. As pedras nunca saem nem andam. Quem começa é o vermelho.' },
  {
    title: 'Quem vence',
    text: 'Vence quem ligar os seus dois lados com uma corrente de pedras suas, cada uma encostada na próxima. As cantoneiras contam para os dois lados que elas tocam. No Hex não existe empate: com o tabuleiro cheio, sempre um dos dois ligou os seus lados, e é impossível os dois ligarem.',
  },
  {
    title: 'Regra da troca',
    text: 'Quem começa tem vantagem. Para equilibrar, depois do primeiro lance o segundo jogador pode escolher ficar com ele, em vez de jogar. Assim, quem começa evita jogar no meio, que é bom demais. Aqui, a troca vira a primeira pedra para a cor do segundo jogador, espelhada na diagonal do losango, e a vez volta para quem começou: dá exatamente na mesma posição que trocar de lado.',
  },
];

const HEX: KnowledgeGame = {
  id: 'hex',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'Dinamarca (Piet Hein) e Estados Unidos (John Nash)',
  categoria: 'linha',
  linu: true,
  name: 'Hex',
  emoji: '⬡',
  status: 'pronto',
  playable: true,
  year: '1942',
  where: 'criado por Piet Hein em Copenhague, na Dinamarca, e de novo por John Nash em Princeton, nos Estados Unidos, em 1948 ou 1949',
  etimologia:
    'O jogo teve vários nomes. Na Dinamarca, foi “Polygon” (polígono), por causa do artigo de Piet Hein no jornal Politiken, em 1942; depois, ele o chamou de “Con-tac-tix”. Em Princeton, os colegas de Nash diziam “Nash” ou “John”, porque dava para jogar nos ladrilhos de hexágonos do banheiro (em inglês dos Estados Unidos, “john” é gíria para banheiro). “Hex” é o nome que a fábrica Parker Brothers deu ao jogo em 1952; quase com certeza vem de “hexágono” (do grego héx, seis), a forma das casas, mas não achamos quem confirme a escolha.',
  about:
    'O Hex foi inventado duas vezes. Em 1942, o dinamarquês Piet Hein, poeta e matemático, apresentou o jogo no Instituto Niels Bohr, em Copenhague, e o publicou no jornal Politiken. Em 1948 ou 1949, o matemático americano John Nash, então estudante em Princeton (o mesmo do filme “Uma mente brilhante”), chegou ao mesmo jogo. Nash disse que o inventou sozinho, mas há quem duvide. A regra cabe numa frase, e mesmo assim o jogo é fundo: como as casas são hexágonos, uma corrente sempre bloqueia a outra, e por isso nunca há empate. Nash provou, com um argumento chamado “roubo de estratégia”, que quem começa sempre pode ganhar, se jogar perfeito. Mas a prova não diz como: no tabuleiro de 11×11 ninguém sabe a estratégia, e os tabuleiros só foram resolvidos até 9×9. Em 1957, Martin Gardner espalhou o jogo pelo mundo na sua coluna da revista Scientific American.',
  rules: HEX_RULES,
  variants: [
    {
      name: 'Regra da troca (“pie rule”)',
      where: 'comum em torneios',
      text: 'O segundo jogador pode ficar com o primeiro lance. É a mesma ideia de dividir um bolo: um corta, o outro escolhe o pedaço. Dá para ligar e desligar no app.',
    },
    {
      name: 'Outros tamanhos',
      where: '11×11 é o padrão; 13×13 e 19×19 também são comuns',
      text: 'Tabuleiros maiores deixam o jogo mais longo e estratégico. Os pequenos servem para aprender: até 9×9, computadores já acharam o lance perfeito para cada posição.',
    },
    {
      name: 'Con-tac-tix',
      where: 'Estados Unidos, Parker Brothers, 1968',
      text: 'O mesmo jogo, vendido de novo pela Parker Brothers com o nome que Piet Hein tinha dado a ele.',
    },
  ],
};
// Pontinhos: consultados em 15/10/2026 — Wikipédia em inglês, “Dots and boxes” (Lucas chamou o jogo
// de “la pipopipette”, citando “L’arithmétique amusante”, 1895; regras; tabuleiro 2×2 para iniciantes
// e 5×5 para os bons; correntes e “double-cross”; Berlekamp, Conway e Guy, “Winning Ways”, 1982, cap.
// 16; Berlekamp, “The Dots-and-Boxes Game”, 2000; tabuleiros sueco, americano e islandês; “strings and
// coins”; grades de triângulos e hexágonos); Wikipédia em francês, “Jeu des petits carrés” (Lucas o
// descreveu em 1889 em “Jeux scientifiques pour servir à l’histoire, à l’enseignement et à la
// pratique du calcul et du dessin” e atribuiu a invenção aos seus alunos da École polytechnique;
// “pipo” é o apelido do politécnico na gíria escolar francesa); Wikipédia em espanhol, “Timbiriche
// (juego)” (os nomes em cada país) e “Timbiriche (banda)” (a banda mexicana de 1982 tomou o nome do
// jogo, em resposta ao grupo espanhol Parchís, que também tinha nome de jogo); Toda Matéria, “Jogos e
// brincadeiras” (“jogo dos pontos e quadrados (jogo do pontinho)”); Direção-Geral da Educação de
// Portugal, ficha “Jogos matemáticos” do Estudo Autónomo (“Pontos e Quadrados”). As fontes divergem
// na data de Lucas (1889 ou 1895); o texto diz as duas.
const PONTINHOS_RULES: GameRule[] = [
  { title: 'Grade', text: 'Uma grade de pontos, feita no papel. O tamanho é livre: com 3×3 pontos (2×2 quadradinhos) se aprende; com 6×6 pontos (5×5 quadradinhos) jogam os bons. Aqui, de 2×2 a 5×5 quadradinhos.' },
  { title: 'Na sua vez', text: 'Trace um traço reto, deitado ou em pé, ligando dois pontos vizinhos que ainda não estão ligados.' },
  {
    title: 'Fechou, joga de novo',
    text: 'Quem traça o quarto lado de um quadradinho fica com ele (no papel, escreve a inicial dentro) e joga de novo. Um traço pode fechar dois quadradinhos de uma vez. Quando não sobra traço, vence quem tiver mais quadradinhos; com um número par deles, pode dar empate.',
  },
  {
    title: 'A estratégia',
    text: 'Não dê o terceiro lado de um quadradinho: o adversário fecha e joga de novo. No fim, sobram “correntes” de quadradinhos, e quem é obrigado a abrir uma entrega a corrente inteira. O truque dos bons é o “double-cross”: ao comer uma corrente comprida, deixar os dois últimos quadradinhos para o adversário, que fica com eles mas tem de abrir a próxima corrente.',
  },
];

const PONTINHOS: KnowledgeGame = {
  id: 'pontinhos',
  epoca: 'modernos',
  regiao: 'europa',
  povo: 'França',
  categoria: 'cerco',
  linu: true,
  name: 'Pontos e Caixas',
  emoji: '🔲',
  status: 'pronto',
  playable: true,
  year: '1889',
  where: 'descrito pelo matemático francês Édouard Lucas, em Paris; hoje jogado no papel no mundo todo',
  etimologia:
    'Lucas chamou o jogo de “la pipopipette” e disse que quem o inventou foram os seus alunos da École polytechnique; “pipo” é o apelido desses alunos na gíria das escolas francesas. Em inglês, é “dots and boxes” (pontos e caixas). No Brasil, ele aparece como “jogo dos pontinhos” ou “pontos e quadrados”; em Portugal, “pontos e quadrados”. No México é o “timbiriche”, tão conhecido que uma banda pop mexicana de 1982 tomou o nome do jogo; em outros países de língua espanhola, “cuadraditos” (Argentina), “cuadrito” (Colômbia), “cajas” (Peru) e outros. Não achamos de onde vem a palavra “timbiriche”. Aqui no app ele se chama “Pontos e Caixas”, a tradução direta do nome em inglês.',
  about:
    'O Pontos e Caixas só precisa de papel e lápis. O primeiro a descrevê-lo foi o matemático francês Édouard Lucas, o mesmo que inventou o quebra-cabeça da Torre de Hanói, num livro de jogos científicos de 1889 (a Wikipédia em inglês cita a descrição do livro “L’arithmétique amusante”, de 1895). Ele contou que o jogo vinha dos seus alunos da École polytechnique, em Paris. Parece brincadeira de criança, mas tem matemática de gente grande: os matemáticos Elwyn Berlekamp, John Conway e Richard Guy o estudaram no livro “Winning Ways” (1982), e Berlekamp escreveu um livro inteiro sobre ele em 2000. O segredo é contar as “correntes” de quadradinhos que se formam no fim: quem consegue que o adversário tenha de abrir a primeira corrente comprida costuma ganhar.',
  rules: PONTINHOS_RULES,
  variants: [
    {
      name: 'Tabuleiro sueco',
      where: 'um dos jeitos de começar citados na Wikipédia em inglês',
      text: 'A borda de fora da grade já começa traçada, e só se joga por dentro. O resto é igual. No jeito “americano”, o normal do app, nada começa traçado. Dá para jogar no app: escolha “Tabuleiro sueco”.',
      jogavel: 'sueco',
    },
    {
      name: 'Tabuleiro islandês',
      where: 'um dos jeitos de começar citados na Wikipédia em inglês',
      text: 'Só os lados da esquerda e de baixo da grade começam traçados; o de cima e o da direita ficam para os jogadores. Dá para jogar no app: escolha “Tabuleiro islandês”.',
      jogavel: 'islandes',
    },
    {
      name: 'Barbantes e moedas (“strings and coins”)',
      where: 'a forma “ao contrário” estudada pelos matemáticos',
      text: 'Moedas ligadas por barbantes: na vez, corta-se um barbante; quem solta uma moeda de todos os barbantes fica com ela e joga de novo. É o mesmo jogo, visto de outro jeito, e dá para jogar com qualquer desenho de ligações.',
    },
    {
      name: 'Grades de triângulos e de hexágonos',
      where: 'variantes de papel',
      text: 'Em vez de quadradinhos, fecham-se triângulos ou hexágonos. A regra de jogar de novo continua a mesma.',
    },
  ],
};
// Alquerque: consultados em 15/10/2026 — o “Libro de los juegos” de Alfonso X (1283), f. 91, “alquerque
// de doze”, na tradução de Sonja Musser Golladay (compilada por Alex Rossiter:
// jnsilva.ludicum.org/HJT2012/BookofGames.pdf), que diz: 25 pontos, 24 peças, 12 de cada cor “em
// formação”, o ponto do meio vazio; quem joga primeiro está em desvantagem, porque é obrigado a
// entrar no meio; captura saltando ao longo das linhas, quantas der; perde quem perde as peças mais
// depressa; dá para empatar. Wikipédia em inglês, “Alquerque” (o “qirkat” no “Kitab al-Aghani”, de
// al-Isfahani, séc. X; os mouros o levaram à Espanha; as regras a mais de R. C. Bell, 1979, que achou
// as de Alfonso X insuficientes: não andar para trás, não voltar a um ponto, na última fileira só
// capturar, perde quem não tem lance; a variante de 4 jogadores dos zuni, no Novo México). Wikipédia
// em espanhol, “Alquerque” (nome do árabe “al qirkat”; ancestral direto das damas, que teriam surgido
// no séc. XV; em algumas versões a captura é obrigatória e a peça que não captura é “soprada”). Ver
// `services/alquerque-engine.ts`.
const ALQUERQUE_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Um quadrado de 5×5 pontos, com linhas retas e diagonais: 25 pontos. Cada jogador tem 12 peças, nas duas fileiras de perto e nos dois pontos à direita da fileira do meio. O ponto do meio fica vazio. O livro só diz que as peças ficam “em formação”: essa posição é a que se usa hoje.' },
  { title: 'Andar', text: 'Na sua vez, leve uma peça a um ponto vizinho vazio, ao longo de uma linha. O livro não diz para que lado: aqui, na regra do livro, para qualquer lado. Quem começa é obrigado a entrar no ponto do meio, e por isso, diz o livro, começa em desvantagem.' },
  { title: 'Capturar', text: 'Salte por cima de uma peça do outro, ao longo de uma linha, até o ponto vazio logo depois: ela sai do tabuleiro. Se a mesma peça puder saltar de novo, ela continua, capturando quantas der. O livro não diz se capturar é obrigatório: aqui, na regra do livro, é opcional.' },
  { title: 'Quem vence', text: 'Perde quem fica sem peças. O livro diz que, se os dois jogarem bem, a partida empata: aqui, empata depois de 40 lances seguidos sem captura. E, como o livro não fala nisso, quem não tem lance perde.' },
  { title: 'Regras de Bell (reconstrução moderna)', text: 'Em 1979, o pesquisador R. C. Bell achou as regras de Alfonso X incompletas e acrescentou outras: capturar é obrigatório; a peça não anda para trás (aqui, isso vale para o lance simples); não volta a um ponto onde já esteve; na última fileira do outro lado, só anda para capturar; e perde quem não tem lance. Dá para escolher essas regras acima do tabuleiro.' },
];

const ALQUERQUE: KnowledgeGame = {
  id: 'alquerque',
  epoca: 'medievais',
  regiao: 'asia',
  povo: 'árabes, que o levaram à Península Ibérica',
  categoria: 'guerra',
  linu: true,
  name: 'Alquerque',
  emoji: '✳️',
  status: 'pronto',
  playable: true,
  year: 'citado no séc. X; regras escritas em 1283',
  where: 'Oriente Médio; as regras mais antigas estão num livro feito na Espanha',
  etimologia:
    '“Alquerque” vem do árabe al-qirkat, o nome do jogo, que os mouros levaram para a Península Ibérica. O “al” do começo é o artigo árabe, como em “algodão” e “alface”. As fontes consultadas não explicam o que quer dizer qirkat. Em português e em espanhol, o nome ficou igual.',
  about:
    'O alquerque é um jogo árabe de captura, chamado qirkat, que já aparece no “Kitab al-Aghani” (“Livro das Canções”), de al-Isfahani, no século X. O livro não explica as regras, talvez porque todo mundo as conhecia. Os mouros levaram o jogo para a Espanha, e em 1283 o rei Alfonso X, de Castela, mandou fazer o “Libro de los juegos”, um livro de jogos com desenhos, onde aparece a regra mais antiga que conhecemos: o “alquerque de doze”. Mas ela é curta, e as regras jogadas hoje são, em parte, reconstruções. O alquerque é o avô das damas: alguém levou as peças e a captura por salto para o tabuleiro de xadrez, e nasceram as damas (veja as Damas, nos Jogos do conhecimento). Quando isso aconteceu, as fontes divergem: entre os séculos XII e XV. O tabuleiro também lembra o fanorona, de Madagascar.',
  rules: ALQUERQUE_RULES,
  variants: [
    {
      name: 'Regras de Bell (1979)',
      where: 'reconstrução moderna, do livro de R. C. Bell; jogável aqui',
      text: 'Captura obrigatória, a peça não anda para trás nem volta a um ponto onde já esteve, na última fileira do outro lado só se mexe para capturar, e perde quem fica sem lance. Deixa o jogo mais rápido e sem empates longos.',
    },
    {
      name: 'Peça “soprada”',
      where: 'versões modernas citadas na Wikipédia em espanhol',
      text: 'A captura é obrigatória, mas quem esquece de capturar não é forçado: o adversário tira do tabuleiro a peça que devia ter capturado. Dá para jogar no app: escolha “Peça soprada” acima do tabuleiro. Aqui, para simplificar, o sopro é automático: sai a peça que se mexeu, se ela podia capturar; senão, a primeira das que podiam.',
    },
    {
      name: 'Alquerque a quatro (zuni)',
      where: 'Novo México, nos Estados Unidos, levado pelos espanhóis',
      text: 'Os colonos espanhóis ensinaram o jogo aos zuni, que criaram uma versão para quatro jogadores.',
    },
  ],
};
// Janggi: artigos “Janggi” da Wikipédia em inglês e “장기” da Wikipédia em coreano (história, peças,
// tamanhos, arrumações, bikjang, passe, pontos e 덤), verbete “將棋” do Wikcionário em inglês
// (etimologia) e a definição do janggi e o tests/perft.sh do Fairy-Stockfish (regras de passe e de
// bikjang conferidas pelo perft), consultados em 15/10/2026. Ver `services/janggi-engine.ts`.
const JANGGI_RULES: GameRule[] = [
  { title: 'Tabuleiro', text: 'São 9 linhas verticais e 10 horizontais, e as peças ficam nos cruzamentos. Diferente do xadrez chinês, não há rio no meio. Em cada ponta há um palácio de 3×3 pontos, com as duas diagonais marcadas. O azul (楚, Cho) joga primeiro; o vermelho é Han (漢).' },
  { title: 'Peças e arrumação', text: 'As peças são octógonos de tamanhos diferentes: o general é o maior; carro, canhão, cavalo e elefante são médios; guardas e soldados, os menores. O general começa no centro do palácio. Antes de começar, cada lado escolhe a arrumação do cavalo (마) e do elefante (상) de cada flanco: 마상상마, 상마마상, 마상마상 ou 상마상마.' },
  { title: 'General, guardas, cavalo e elefante', text: 'O general e os guardas andam um ponto pelas linhas do palácio (também nas diagonais) e não saem dele. O cavalo anda um ponto reto e um na diagonal, e não pula. O elefante anda um ponto reto e dois na diagonal, e também não pula: qualquer peça no caminho o bloqueia.' },
  { title: 'Carro, canhão e soldado', text: 'O carro anda quantos pontos quiser em linha reta e pelas diagonais do palácio. O canhão só anda pulando exatamente uma peça, de qualquer cor, e captura do mesmo jeito; ele não pode pular outro canhão nem capturar um canhão. O soldado anda um ponto para a frente ou para o lado (desde o começo) e, no palácio do adversário, também na diagonal para a frente. Ele não é promovido.' },
  { title: 'Passar a vez e bikjang', text: 'Fora do xeque, é permitido passar a vez, e quem não tem lance passa. Quando os dois generais ficam na mesma coluna, sem nada no meio, é o “bikjang” (빅장): quem tem a vez precisa tapar a coluna ou mover o general, ou então passa, e a partida acaba. Este app segue aqui o Fairy-Stockfish, o programa de computador mais usado para o janggi.' },
  { title: 'Quem vence e os pontos', text: 'Vence quem der xeque-mate (외통, “oetong”). Quando a partida acaba sem mate, conta-se os pontos das peças: carro 13, canhão 7, cavalo 5, elefante 3, guarda 3, soldado 2. O vermelho, que joga depois, ganha 1,5 ponto de “덤” (deom): 73,5 contra 72 no começo, e o meio ponto evita o empate.' },
  { title: 'O que este app simplificou', text: 'Aqui, para simplificar, o bikjang, os dois passarem seguidos, a mesma posição pela terceira vez e 200 lances sem mate acabam a partida pelos pontos, como no jogo por pontos dos torneios. Nas regras da Associação Coreana de Janggi não há empate: a posição repetida três vezes chama um árbitro (a repetição só vale empate quando os dois lados têm menos de 30 pontos). Nos jogos sem pontos, o bikjang e os dois passarem seguidos são empate.' },
];

const JANGGI: KnowledgeGame = {
  id: 'janggi',
  epoca: 'medievais',
  regiao: 'asia',
  povo: 'coreanos',
  categoria: 'guerra',
  linu: true,
  name: 'Xadrez coreano (Janggi)',
  emoji: '🇰🇷',
  status: 'pronto',
  playable: true,
  year: 'citado na Coreia desde o reinado de Sejong (século XV); o nome “장기” aparece no reinado de Jungjong (século XVI)',
  where: 'Coreia (do Sul e do Norte); veio do xadrez chinês',
  etimologia:
    '“Janggi” (장기) se escreve em caracteres chineses 將棋: 將 quer dizer “general” e 棋, “jogo de tabuleiro, de estratégia” (Wikcionário). É o jogo do general, a peça que precisa ser capturada. Em português, chamamos de “xadrez coreano”, como o xiangqi é o “xadrez chinês”. Os mesmos caracteres formam “shōgi”, o xadrez japonês, que é outro jogo.',
  about:
    'O janggi é o xadrez da Coreia e veio do xiangqi, o xadrez chinês, com quem ainda se parece muito. Uma teoria antiga diz que ele chegou à península no tempo das comanderias chinesas, há uns 2 mil anos, mas a Wikipédia em coreano diz que isso não tem prova e é difícil de aceitar, porque o próprio xadrez só chegou à China por volta do século VIII. O registro mais antigo de uma partida está no livro Pilwon Japgi, de Seo Geo-jeong, que conta um jogo de “象戱” entre dois funcionários no reinado de Sejong (século XV). O nome “장기” aparece pela primeira vez no Gyeonhan Japrok, de Sim Su-gyeong, no reinado de Jungjong (século XVI). As peças têm os nomes dos reinos de Chu (楚) e Han (漢), que lutaram pela China no fim do século III a.C. O primeiro torneio internacional de janggi foi em Harbin, na China, em outubro de 2009.',
  rules: JANGGI_RULES,
  variants: [
    {
      name: 'Janggi da Coreia do Norte',
      where: 'Coreia do Norte',
      text: 'Lá não se usa a disputa entre Chu e Han: o general vermelho se chama jang (將) e o azul, gwan (官). Também se usa lá (e em jogos informais no Sul) uma quinta arrumação, com o carro no meio, que saiu das regras dos torneios da Coreia do Sul. Na Wikipédia em coreano, ela é a 기동차장기: os elefantes nas duas pontas e os carros ao lado dos guardas. Dá para jogar no app: antes do primeiro lance, escolha a arrumação “상마차 (carro no meio)”.',
    },
    {
      name: 'Jogo por vitória ou por pontos',
      where: 'Coreia do Sul',
      text: 'Nos jogos por vitória ou derrota, o bikjang e a repetição de lances são empate. Nos torneios por pontos, quem está perdendo pode pedir o bikjang, e a partida se decide pelos pontos das peças que sobraram, com o 덤 de 1,5 para o vermelho.',
    },
    {
      name: 'Gwangsanghui (廣象戱)',
      where: 'Coreia, século XVIII',
      text: 'Uma variante do janggi do século XVIII, citada pela Wikipédia em inglês; as regras dela não estão no artigo.',
    },
  ],
};
// Makruk: artigo “Makruk” da Wikipédia em inglês (peças, regras, contagem, história e variantes), a
// página de regras do makruk do PyChess (pychess.org/variants/makruk: as contagens de honra), o
// verbete “หมากรุก” do Wikcionário em inglês (etimologia) e a definição do makruk e o tests/perft.sh
// do Fairy-Stockfish (posição inicial e perft), consultados em 15/10/2026. Ver `services/makruk-engine.ts`.
const MAKRUK_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'O tabuleiro tem 8×8 casas, todas da mesma cor. Cada lado tem o khun (o rei), o met (a “semente”), dois khon (os “nobres”), dois ma (cavalos), dois ruea (“barcos”) e oito bia (“búzios”, os peões). Os bia começam na 3ª fileira, e o khun fica sempre à esquerda de quem joga, com o met do lado. As brancas começam.' },
  { title: 'Como as peças andam', text: 'O khun anda uma casa em qualquer direção. O met anda só uma casa na diagonal. O khon anda uma casa na diagonal ou uma para a frente. O ma anda como o cavalo do xadrez, pulando. O ruea anda quantas casas quiser em linha reta, como a torre.' },
  { title: 'O bia', text: 'O bia anda uma casa para a frente (nunca duas) e captura na diagonal para a frente. Ao chegar na 6ª fileira, ele é sempre promovido: vira o bia ngai, o “búzio virado”, que anda como o met. Neste app, ele aparece de cabeça para baixo.' },
  { title: 'Quem vence', text: 'Vence quem der xeque-mate. Diferente do antigo xatranje persa, o afogamento (ficar sem lance sem estar em xeque) é empate.' },
  { title: 'As contagens', text: 'Quando não há mais nenhum bia por promover, quem está em desvantagem pode contar os próprios lances até 64 (a contagem do tabuleiro). Se um lado fica só com o khun, a contagem recomeça do número de peças no tabuleiro (com os dois khuns) mais um, e o limite depende do que o outro tem: dois ruea, 8; um ruea, 16; dois khon, 22; um khon, 44; dois ma, 32; um ma, ou só met e bia ngai, 64 (vale o menor). Com dois ruea e um ma contra o khun sozinho, por exemplo, sobram só 3 lances (8 − 5). Se a contagem passa do limite sem mate, é empate.' },
  { title: 'O que este app simplificou', text: 'Aqui, para simplificar, a contagem começa sozinha e não pode ser interrompida (nas regras, quem está em desvantagem escolhe quando contar e pode parar); conta o lado com menos material (com material igual, quem tem a vez quando ela começa). As regras de verdade não têm empate por repetição, mas aqui a mesma posição pela terceira vez é empate.' },
];

const MAKRUK: KnowledgeGame = {
  id: 'makruk',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'tailandeses',
  categoria: 'guerra',
  linu: true,
  name: 'Xadrez tailandês (Makruk)',
  emoji: '🐘',
  status: 'pronto',
  playable: true,
  year: 'data desconhecida; mais antigo que o sittuyin, o xadrez da Birmânia',
  where: 'Tailândia; quase igual ao ouk do Camboja',
  etimologia:
    '“Makruk” é o tailandês หมากรุก: หมาก (màak) quer dizer “peça de jogo” e รุก (rúk), “avançar, mover no jogo” (Wikcionário). Em tailandês, a mesma palavra serve também para o xadrez internacional. Em português, chamamos de “xadrez tailandês”, assim como dizemos “xadrez chinês” para o xiangqi.',
  about:
    'O makruk é o xadrez tradicional da Tailândia e descende do chaturanga indiano ou de um parente bem próximo, o mesmo antepassado do xadrez. A Wikipédia em inglês conta que comerciantes persas chegaram ao reino de Ayutthaya por volta do século XIV, e alguns acham que o makruk veio do xatranje persa; mas essa ideia não tem fonte, e o mais provável é que ele tenha vindo direto da Índia, pela semelhança do nome com o chaturanga e pelo movimento do khon. O historiador H. J. R. Murray, em “A History of Chess” (1913), sugere que o jogo se espalhou junto com o budismo. Não se sabe quando ele surgiu, mas é mais antigo que o sittuyin, o xadrez birmanês. O ouk, do Camboja, é quase igual, e baixos-relevos de templos mostram que ele é jogado lá desde o século XII. Os nomes das peças são da corte e do dia a dia: o senhor, a semente, o nobre, o cavalo, o barco e o búzio.',
  rules: MAKRUK_RULES,
  variants: [
    {
      name: 'Ouk (ouk chatrang)',
      where: 'Camboja',
      text: 'É o makruk do Camboja. Se nenhuma peça foi capturada, o rei pode, no primeiro lance dele, andar como o cavalo (mas não para sair do xeque), e a dama pode andar duas casas para a frente no primeiro lance. O primeiro torneio nacional do Camboja foi em abril de 2008. Dá para jogar no app: escolha “Ouk”. Como na página do PyChess, o pulo do khun vai para a fileira da frente, e nenhum dos dois pulos captura. O PyChess também tira o pulo do khun quando um ruea inimigo chega à fileira ou à coluna dele; aqui, para simplificar, vale só a regra de não ter havido captura.',
      jogavel: 'ouk',
    },
    {
      name: 'Kar ouk',
      where: 'Camboja',
      text: 'Uma variante do ouk em que vence quem der o primeiro xeque. Dá para jogar no app: escolha “Kar ouk”; os pulos do ouk também valem.',
      jogavel: 'karouk',
    },
    {
      name: 'Os “sutras”',
      where: 'Tailândia, em jogos informais',
      text: 'Lances especiais de abertura, fora das regras oficiais ou já abandonados: o khun andar como o cavalo para uma casa vazia da fileira seguinte se ainda não se mexeu (sut khun); o met andar duas casas para a frente depois que o bia da frente avançou (sut met); mexer um ma e um bia no mesmo lance (sut ma); e virar um ruea de cabeça para baixo, transformando-o em met (takhaeng ruea).',
    },
  ],
};
// Nim: consultados em 15/10/2026 — Wikipédia em inglês, “Nim” (jogado de algum jeito desde a
// Antiguidade, origem incerta, talvez na China, parecido com o jiǎn-shízǐ, “pegar pedrinhas”; as
// primeiras menções na Europa são do começo do séc. XVI; Charles L. Bouton, de Harvard, deu o nome e
// a teoria completa em “Nim, a game with a complete mathematical theory”, Annals of Mathematics,
// 1901–1902; o Oxford English Dictionary tira o nome do alemão “nimm”, “pegue”, mas a origem nunca foi
// bem explicada; a soma nim, o XOR; a misère); Wikipédia em inglês, “Nimatron” (pensado por Edward
// Condon, feito por Gerald L. Tawney e Willard A. Derr, da Westinghouse, exposto na Feira Mundial de
// Nova York de abril a outubro de 1940, quatro fileiras de sete luzes; Condon contou mais de 100 mil
// partidas, e os contadores marcaram uns 90 mil vitórias da máquina); Wikipédia em francês, “Jeu de
// Marienbad” (no filme “O Ano Passado em Marienbad”, de 1961, quatro fileiras de 1, 3, 5 e 7 palitos,
// e quem tira o último perde). Ver `services/nim-engine.ts`.
const NIM_RULES: GameRule[] = [
  { title: 'Pilhas de palitos', text: 'Começa com algumas pilhas de palitos: por exemplo 3, 4 e 5, ou 1, 3, 5 e 7, como no filme “O Ano Passado em Marienbad”. Aqui, você pode montar as suas pilhas.' },
  { title: 'Na sua vez', text: 'Tire quantos palitos quiser, pelo menos um, de UMA pilha só. Pode tirar a pilha inteira.' },
  { title: 'Quem vence', text: 'Na versão normal, quem tira o último palito ganha. Na versão “misère” (palavra francesa para “miséria”), quem tira o último palito perde. É a do filme. Dá para escolher as duas.' },
  { title: 'O segredo (a soma nim)', text: 'Escreva o tamanho de cada pilha em binário e veja cada coluna. Se todas as colunas têm um número par de “1”, quem acabou de jogar está ganhando. Quem sabe disso nunca perde de uma posição boa. Na misère, muda só no fim: quando sobrarem só pilhas de 1, deixe um número ímpar delas.' },
];

const NIM: KnowledgeGame = {
  id: 'nim',
  epoca: 'contemporaneos',
  regiao: 'americas',
  povo: 'jogo antigo de origem incerta; nome e teoria nos Estados Unidos',
  categoria: 'modernos',
  linu: true,
  name: 'Nim',
  emoji: '🪵',
  status: 'pronto',
  playable: true,
  year: 'jogos parecidos são muito antigos; o nome e a teoria são de 1901',
  where: 'origem incerta (talvez China); na Europa desde o séc. XVI; batizado nos Estados Unidos',
  etimologia:
    'O nome foi dado pelo matemático Charles Bouton, em 1901, e ele nunca explicou bem de onde tirou. O dicionário de Oxford acha que vem do alemão nimm, “pegue!”, que é exatamente o que se faz no jogo. Em português, ficou o nome em inglês.',
  about:
    'Jogos de tirar pedrinhas ou palitos são muito antigos e aparecem em muitos lugares: a origem é incerta, talvez na China, onde há um jogo parecido chamado jiǎn-shízǐ (“pegar pedrinhas”). Na Europa, as primeiras menções são do começo do século XVI. Em 1901, o matemático Charles L. Bouton, da Universidade Harvard, deu ao jogo o nome de Nim e mostrou como ganhar sempre, com uma conta em binário: foi um dos primeiros jogos resolvidos por completo pela matemática. A conta é tão simples que uma máquina consegue fazer: na Feira Mundial de Nova York, em 1940, a Westinghouse expôs o Nimatron, uma máquina de relés e luzes, pensada pelo físico Edward Condon, que jogou dezenas de milhares de partidas e ganhou a maioria. Em 1961, o filme francês “O Ano Passado em Marienbad” mostrou um personagem que ganha sempre no Nim de 1-3-5-7, e o jogo virou moda. Aqui, o Linu no difícil faz a mesma conta da máquina.',
  rules: NIM_RULES,
  variants: [
    {
      name: 'Misère',
      where: 'a forma mais jogada, segundo a Wikipédia; é a do filme “O Ano Passado em Marienbad” (1961)',
      text: 'Quem tira o último palito perde. A estratégia é a mesma da versão normal até o fim, quando sobram só pilhas de 1: aí, deixe um número ímpar delas. Dá para jogar aqui.',
    },
    {
      name: 'Jogo de Marienbad (1-3-5-7)',
      where: 'França, depois do filme de 1961',
      text: 'Quatro fileiras de 1, 3, 5 e 7 palitos, e quem tira o último perde. A soma nim de 1, 3, 5 e 7 é zero: quem começa está em desvantagem, se o outro souber a conta.',
    },
  ],
};

/** E mais 8 na fila, só nome/emoji (mesma régua dos de cima: sem história nem regras ainda). */
// Jogo Real de Ur: consultada em 15/10/2026 a Wikipédia em inglês “Royal Game of Ur” (a descoberta
// de Woolley, a tábua de Itti-Marduk-balāṭu, a reconstrução de Irving Finkel e as de H. J. R. Murray e
// James Masters, o jogo das vinte casas e o aasha de Kochi). As regras do tabuleiro jogável são uma
// RECONSTRUÇÃO MODERNA, a de Finkel. Ver `services/ur-engine.ts`.
const UR_RULES: GameRule[] = [
  { title: 'Uma reconstrução moderna', text: 'Ninguém sabe ao certo como o jogo era jogado há 4.500 anos. As regras daqui são a reconstrução do assiriólogo Irving Finkel, do Museu Britânico, feita a partir de uma tábua de argila babilônica, escrita por volta de 177 a.C., quase dois mil anos depois dos tabuleiros de Ur, e da forma do próprio tabuleiro.' },
  { title: 'Tabuleiro, peças e dados', text: 'São 20 casas: um bloco de 3×4 e outro de 3×2, ligados por uma “ponte” de duas casas. Cada jogador tem 7 peças. Joga-se com 4 dados de quatro faces, em forma de pirâmide, com duas das quatro pontas marcadas: anda-se o número de pontas marcadas que ficam para cima, de 0 a 4 (2 é o mais comum).' },
  { title: 'O caminho', text: 'Cada peça entra pelo seu lado, anda 4 casas na sua fileira, atravessa as 8 casas do meio, que os dois jogadores dividem, e volta 2 casas na sua fileira, do outro bloco; depois sai do tabuleiro. As 6 casas do seu lado são só suas; as do meio são de combate.' },
  { title: 'Na sua vez', text: 'Lance os dados e ande com uma peça, ou ponha uma nova no tabuleiro. Se der para andar, é obrigatório. Cada casa só cabe uma peça, e você não pode parar em cima de uma sua. Parar numa peça do adversário, numa casa de combate, a captura: ela volta para o começo.' },
  { title: 'As rosetas', text: 'Parar numa das 5 rosetas dá mais uma jogada. A roseta do meio, que os dois atravessam, também protege: ali a peça não pode ser capturada.' },
  { title: 'Sair e vencer', text: 'Para sair do tabuleiro, o número tem de ser exato. Ganha quem tirar as 7 peças primeiro. A tábua babilônica fala também de apostas, com fichas postas e tiradas de um pote nas rosetas; aqui elas ficam de fora.' },
];

const UR: KnowledgeGame = {
  id: 'ur',
  epoca: 'antigos',
  regiao: 'asia',
  povo: 'sumérios, na Mesopotâmia (o atual Iraque)',
  categoria: 'sorte',
  linu: true,
  name: 'Jogo Real de Ur',
  emoji: '🏺',
  status: 'pronto',
  playable: true,
  year: 'os tabuleiros de Ur são de cerca de 2600 a 2400 a.C.; as regras, de uma tábua de 177 a.C.',
  where: 'Ur, na Mesopotâmia (o atual Iraque); depois, todo o Oriente Médio, o Egito, Chipre, Creta e até a Índia',
  etimologia:
    'O nome vem do lugar onde os tabuleiros mais famosos foram achados: o Cemitério Real da cidade suméria de Ur, por isso “real”. Não sabemos como os sumérios o chamavam. Ele também é conhecido como “jogo das vinte casas”, pelo número de casas do tabuleiro, nome que a Wikipédia em inglês usa sobretudo para a forma mais tardia do jogo.',
  about:
    'Entre 1922 e 1934, o arqueólogo inglês Leonard Woolley escavou o Cemitério Real de Ur, na Mesopotâmia, e achou cinco tabuleiros deste jogo, de cerca de 2600 a 2400 a.C.; boa parte deles está hoje no Museu Britânico, em Londres. Tabuleiros parecidos apareceram por todo o Oriente Médio, e quatro deles estavam no túmulo de Tutancâmon, no Egito. Um estudo de 2013, liderado por Alex de Voogt, mostrou o jogo passando da Mesopotâmia para o Levante e de lá para o Egito ao longo de 1.200 anos. Como se jogava, só se soube muito depois: em 1880 foi achada na Babilônia uma tábua cuneiforme do escriba Itti-Marduk-balāṭu, de cerca de 177 a.C., com as regras, e no começo dos anos 1980 Irving Finkel, do Museu Britânico, a traduziu e reconstruiu o jogo. O jogo sobreviveu até o século XX: os judeus de Kochi, no sul da Índia, jogavam uma versão dele, o aasha, até emigrarem para Israel nos anos 1950.',
  rules: UR_RULES,
  variants: [
    {
      name: 'Outras reconstruções',
      where: 'H. J. R. Murray e James Masters',
      text: 'Para eles, as rosetas ficariam a cada 4 casas do caminho, e Masters propõe um caminho em que as peças se enfrentam no fim, com a mesma quantidade de casas de combate do jogo das vinte casas. A Wikipédia em inglês lembra que nem o caminho de Finkel é certo: há quem pense que as peças voltavam pelas casas do meio.',
    },
    {
      name: 'Jogo das vinte casas',
      where: 'Oriente Médio e Egito, de cerca de 1500 a 300 a.C.',
      text: 'Uma forma mais tardia: o bloco de 3×4 e um “braço” de 8 casas no meio, com 5 rosetas. Finkel o trata como o mesmo jogo; o historiador David Parlett, como outro.',
    },
    {
      name: 'Aasha',
      where: 'a comunidade judaica de Kochi, no sul da Índia, até os anos 1950',
      text: 'Também com 20 casas, mas com 12 peças para cada lado e um desenho um pouco diferente.',
    },
  ],
};
// Senet: consultada em 15/10/2026 a Wikipédia em inglês “Senet” (datação, nome, sentido religioso e as
// reconstruções de Timothy Kendall, 1978, e de R. C. Bell, 1979). As regras do tabuleiro jogável são
// uma RECONSTRUÇÃO MODERNA, a de Kendall, como a Wikipédia a resume. Ver `services/senet-engine.ts`.
const SENET_RULES: GameRule[] = [
  { title: 'Uma reconstrução moderna', text: 'As regras antigas do senet se perderam. As daqui são a reconstrução do egiptólogo Timothy Kendall (1978), como a Wikipédia em inglês a resume; ela e a de R. C. Bell foram montadas a partir de trechos de textos espalhados por mais de mil anos, e quase certamente não são iguais às do jogo antigo. Onde o resumo não diz, o app escolheu, e diz isso abaixo.' },
  { title: 'Tabuleiro, peões e varetas', text: 'São 30 casas, em 3 fileiras de 10, percorridas em zigue-zague: da 1 à 10 para a direita, da 11 à 20 para a esquerda e da 21 à 30 para a direita. Cada jogador tem 5 peões, que começam fora. Joga-se com 4 varetas de dois lados: anda-se o número de lados claros para cima (1 a 4); nenhum claro vale 5.' },
  { title: 'Andar e capturar', text: 'O peão entra na casa 1 e anda o número tirado. Parar num peão do adversário o captura: ele volta para a primeira casa vazia. Parar num peão seu manda o que chegou para a primeira casa vazia. Três ou mais peões seguidos de um jogador formam uma barreira que o outro não pode passar (no app, também não pode parar nela). Sem lance, a vez passa.' },
  { title: 'As casas especiais', text: 'A 15 (o ankh) é uma casa comum, ligada à 27. A 26 (a casa da felicidade) não pode ser pulada: todo peão tem de parar nela. Quem cai na 27 (a casa da água) volta para a 15, ou para a primeira vazia antes dela. Na 28 e na 29 o peão fica preso e não pode ser capturado; sai com exatamente 3 (da 28) ou 2 (da 29). Da 30, sai com exatamente 1, ou com qualquer número se as casas 1 a 10 estiverem vazias.' },
  { title: 'Quem vence e o que o app escolheu', text: 'Ganha quem tirar os 5 peões primeiro. Escolhas do app onde o resumo é omisso: a “primeira casa vazia” é a de número mais baixo; da casa 26, um 5 tira o peão do tabuleiro; e não há lançamento extra.' },
];

const SENET: KnowledgeGame = {
  id: 'senet',
  epoca: 'antigos',
  regiao: 'africa',
  povo: 'egípcios antigos',
  categoria: 'sorte',
  linu: true,
  name: 'Senet',
  emoji: '𓋹',
  status: 'pronto',
  playable: true,
  year: 'tabuleiros possíveis de cerca de 3100 a.C.; a primeira pintura certa, de cerca de 2620 a.C.',
  where: 'Egito antigo (tabuleiros parecidos também no Levante)',
  etimologia:
    'Em egípcio, znt, que costuma ser traduzido como “passagem” ou “passar”; a Wikipédia em inglês o liga ao copta sinē, “passagem, tarde”. O nome casa com o sentido que o jogo ganhou depois: a passagem da alma pelo mundo dos mortos. Em português, usamos a forma “senet”, a mesma das outras línguas.',
  about:
    'O senet é um dos jogos de tabuleiro mais antigos que se conhecem. Tabuleiros que podem ser de senet aparecem em túmulos da Primeira Dinastia do Egito, por volta de 3100 a.C., e a primeira pintura certa do jogo está na mastaba de Hesy-Re, de cerca de 2620 a.C. Ele foi jogado por uns dois mil anos, quase sem mudar, e caiu em desuso no tempo dos romanos. No Novo Império, o jogo ganhou um sentido religioso: as casas passaram a representar as etapas da alma (o ka) atravessando o duat, o mundo dos mortos, e o capítulo 17 do Livro dos Mortos mostra o morto jogando senet contra um adversário invisível. As últimas cinco casas eram as mais enfeitadas. Os peões, a partir do Novo Império, podiam ter forma de cão. Como as regras se perderam, quem joga hoje usa reconstruções modernas, como a de Timothy Kendall (1978), seguida aqui, e a de R. C. Bell.',
  rules: SENET_RULES,
  variants: [
    {
      name: 'A reconstrução de R. C. Bell',
      where: 'Bell, 1979, segundo a Wikipédia em inglês',
      text: 'Dez peões para cada um, já postos no tabuleiro no começo, alternando as cores pelas duas primeiras fileiras; um dado de quatro faces no lugar das varetas; captura obrigatória, e o peão capturado sai do jogo; nas casas enfeitadas ninguém é capturado. Quando o tabuleiro esvazia, ganha quem tirou mais peões.',
    },
    {
      name: 'Com mais peões',
      where: 'a própria reconstrução de Kendall',
      text: 'Kendall propõe 5 peões, mas diz que a partida pode ficar mais longa com mais, até 10 para cada um. A primeira versão das regras dele, de 1979, usava 7.',
    },
  ],
};
// Pachisi: regras de “The Rules of Pachisi & Chaupur”, Masters Traditional Games (mastersofgames.com,
// cópia de 07/10/2026 no web.archive.org), conferidas com a Wikipédia em inglês (“Pachisi” e “Ludo”) e
// a Britannica (“Pachisi”), consultadas em 15/10/2026. Ver `services/pachisi-engine.ts`.
const PACHISI_RULES: GameRule[] = [
  { title: 'Tabuleiro e duplas', text: 'O tabuleiro é uma cruz: cada um dos quatro braços tem 3 colunas de 8 casas, e o quadrado do meio é o Charkoni, de onde as peças saem e para onde voltam. 12 casas são castelos: a do meio, na ponta de cada braço, e a 4ª a partir da ponta nas duas colunas de fora. São 4 cores com 4 peças cada, em duplas sentadas frente a frente: Amarelo e Preto contra Vermelho e Verde. A dois, como a regra tradicional permite, cada jogador fica com uma dupla e joga as duas cores, cada uma na sua vez, no sentido anti-horário.' },
  { title: 'Os búzios', text: 'Lançam-se 6 búzios e contam-se as bocas para cima: 2, 3, 4 e 5 valem isso mesmo; 6 bocas valem 6, uma boca vale 10 e nenhuma vale 25. O 6, o 10 e o 25 são a “graça”: com ela, uma peça pode sair do Charkoni, e o jogador lança de novo.' },
  { title: 'O caminho', text: 'Cada peça desce pela coluna do meio do seu braço, dá a volta inteira no tabuleiro, no sentido anti-horário, pelas colunas de fora dos braços, e sobe de novo a coluna do meio do seu braço até o Charkoni, onde só entra com o número exato. A primeira peça de cada cor sai com qualquer número; as outras, e as capturadas, só com uma graça.' },
  { title: 'Capturas e castelos', text: 'Peças do mesmo lado podem dividir a casa. Parar numa casa comum com peças do adversário as captura: elas voltam ao Charkoni, e quem capturou lança de novo. Nos castelos ninguém é capturado, e não se pode parar num castelo com peça do adversário. Mover não é obrigatório: dá para ficar parado num castelo, esperando o 25 que leva a peça direto para casa.' },
  { title: 'Quem vence', text: 'Ganha a dupla que levar primeiro as 8 peças, das duas cores, de volta ao Charkoni.' },
  { title: 'O que este app simplificou', text: 'Aqui, cada búzio cai com a boca para cima metade das vezes (búzios de verdade não caem assim), e cada lançamento é usado logo, numa peça, antes do próximo. Para uma partida mais rápida, dá para jogar com 2 peças por cor.' },
];

const PACHISI: KnowledgeGame = {
  id: 'pachisi',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'Índia',
  categoria: 'sorte',
  linu: true,
  name: 'Pachisi (Ludo)',
  emoji: '🎯',
  status: 'pronto',
  playable: true,
  year: 'tradicional, sem data certa; jogos de tabuleiro em cruz na Índia aparecem em achados antigos (a datação é discutida)',
  where: 'Índia; o ludo, o parchís e o parcheesi descendem dele',
  etimologia:
    '“Pachisi” vem do hindi paccīs, “vinte e cinco”, o maior número que os búzios dão; por isso o jogo também é chamado de “vinte e cinco”. O parente com dados se chama chaupar. O nome “ludo”, do descendente inglês, é o latim ludo, “eu jogo”.',
  about:
    'O pachisi é o jogo de corrida em cruz da Índia, jogado com búzios, em duplas. Segundo a Wikipédia em inglês, um tabuleiro igual ao do pachisi foi achado nas cavernas de Ellora, e tabuleiros em cruz aparecem na arte de Chandraketugarh; já a ligação com o jogo de dados do Mahabharata é discutida (o assiriólogo Irving Finkel duvida dela). Conta-se, num relato de Louis Rousselet de 1876, que o imperador mogol Akbar jogava pachisi num pátio de Fatehpur Sikri desenhado como tabuleiro, com pessoas no lugar das peças. Dele vieram os jogos de corrida em cruz do mundo todo: o ludo, lançado na Inglaterra em 1896 por Alfred Coller e depois patenteado como “Royal Ludo” (o ludo indiano, diz a Wikipédia, é baseado no pachisi), o parcheesi da América do Norte e, a partir do ludo, o uckers da Marinha britânica.',
  rules: PACHISI_RULES,
  variants: [
    {
      name: 'Com 7 búzios',
      where: 'variante citada pela Wikipédia em inglês e pela Masters Traditional Games',
      text: 'Os valores mudam: nenhuma boca vale 7, uma vale 10, de 2 a 4 valem isso, 5 valem 25, 6 valem 35 e 7 valem 14; e o 7, o 10, o 25, o 35 e o 14 dão outro lançamento. Em algumas versões, só o 10 e o 25 são graça.',
    },
    {
      name: 'Chaupar',
      where: 'Índia',
      text: 'O mesmo tabuleiro em cruz, jogado com dados no lugar dos búzios. A Masters Traditional Games descreve uma versão sem graças nem castelos, em que as peças da mesma cor se juntam em “superpeças”.',
    },
    {
      name: 'Ludo',
      where: 'Inglaterra, 1896; hoje no mundo todo',
      text: 'O descendente comercial mais conhecido: um dado comum no lugar dos búzios, cada um joga sozinho com sua cor, e sai-se de casa com o 6. Não é um jogo à parte no app: aparece aqui só como o descendente do pachisi.',
    },
  ],
};
// Halma: consultados em 15/10/2026 — Wikipédia em inglês, “Halma” (George Howard Monks, cirurgião
// torácico da Harvard Medical School, 1883 ou 1884; do grego hálma, “salto”; tabuleiro 16×16;
// acampamentos de 19 casas a dois e de 13 a quatro; passo ou saltos em 8 direções sobre qualquer peça,
// sem captura e sem salto obrigatório; vence quem leva todas as peças ao canto oposto; algumas versões
// eletrônicas têm regra contra quem deixa peças no próprio canto, que não é das regras de mesa;
// as damas chinesas, variante do Halma, saíram em 1892 como Stern-Halma). Ver `services/halma-engine.ts`.
const HALMA_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Um tabuleiro quadriculado de 16×16. A dois, cada jogador tem 19 peças, num canto em forma de escada (5, 5, 4, 3 e 2 casas por fileira), e o outro começa no canto oposto. A quatro, são 13 peças por canto.' },
  { title: 'Na sua vez', text: 'Mova uma peça só: OU um passo para uma casa vizinha vazia, em qualquer das 8 direções, OU um ou mais saltos por cima de uma peça vizinha (sua ou do outro) até a casa vazia logo depois. Os saltos podem continuar, mudando de direção. Passo e salto não se misturam no mesmo lance.' },
  { title: 'Nada é capturado', text: 'A peça saltada fica no tabuleiro. Saltar não é obrigatório.' },
  { title: 'Quem vence', text: 'Vence quem leva primeiro todas as peças para o canto oposto. A regra antiga não fala do bloqueio, quando o outro deixa peças paradas no seu canto de chegada: aqui, como nas damas chinesas do app, vence também quem enche o canto de chegada tendo pelo menos uma peça sua lá.' },
];

const HALMA: KnowledgeGame = {
  id: 'halma',
  epoca: 'modernos',
  regiao: 'americas',
  povo: 'Estados Unidos',
  categoria: 'modernos',
  linu: true,
  name: 'Halma',
  emoji: '🔺',
  status: 'pronto',
  playable: true,
  year: '1883 ou 1884',
  where: 'Estados Unidos, criado por George Howard Monks, cirurgião da Faculdade de Medicina de Harvard',
  etimologia:
    '“Halma” vem do grego hálma, “salto”, o movimento que manda no jogo. O nome passou igual para as outras línguas, e o alemão o guardou dentro de “Stern-Halma”, o “Halma da estrela”, que é o nome original das damas chinesas.',
  about:
    'O Halma foi inventado em 1883 ou 1884 por George Howard Monks, um cirurgião da Faculdade de Medicina de Harvard, nos Estados Unidos. É um jogo de corrida sem captura: cada um tenta atravessar o tabuleiro e ocupar o canto do outro, e a graça está nas “escadas” de saltos, que levam uma peça longe num lance só, por cima das suas e das do adversário. Em 1892, na Alemanha, o jogo ganhou um tabuleiro em forma de estrela de seis pontas, com 10 peças por ponta, e virou o Stern-Halma, que nos Estados Unidos foi vendido como “damas chinesas”. As Damas chinesas também estão nos Jogos do conhecimento: é o mesmo jogo de saltar, num tabuleiro diferente.',
  rules: HALMA_RULES,
  variants: [
    {
      name: 'Halma a quatro',
      where: 'regra original, com um canto para cada jogador',
      text: 'No mesmo 16×16, cada um começa com 13 peças num canto e corre para o canto oposto.',
    },
    {
      name: 'Damas chinesas (Stern-Halma)',
      where: 'Alemanha, 1892; jogável aqui',
      text: 'O mesmo jogo de saltar numa estrela de seis pontas, com 10 peças por ponta e 6 direções de movimento, para 2, 3, 4 ou 6 jogadores.',
    },
  ],
};
// Raposa e gansos: consultados em 15/10/2026 — Wikipédia em inglês, “Fox games” (o halatafl, “tábua
// da cauda” em nórdico antigo, conhecido pelo menos desde o séc. XIV e citado na saga de Grettir; o
// rei Eduardo IV comprou duas raposas e 26 cães para dois jogos de “marelles”, que se acredita serem
// a raposa e os cães; a versão tradicional de 13 gansos é desequilibrada, e há versões com 15, 17 ou
// 18 gansos ou duas raposas; na raposa e os gansos, raposa e gansos andam em qualquer direção,
// também na diagonal; a raposa salta e captura, pode encadear saltos, e capturar não é obrigatório;
// os gansos vencem prendendo a raposa); o tabuleiro do Victoria and Albert Museum (objeto O26125,
// Inglaterra, 1845–1855, com a regra do “Boy's Own”, 1870: 13 gansos, “os gansos andam para a frente
// nas linhas retas, não nas diagonais” e “não podem voltar”; com 6 gansos já não dá para prender a
// raposa); gameonfamily.com, “Fox and Geese” (17 gansos; gansos para a frente, para o lado e na
// diagonal, nunca para trás; a raposa começa no centro; a posição dos gansos: um braço da cruz, a
// fileira seguinte inteira e as duas pontas da fileira do meio). Ver `services/raposa-gansos-engine.ts`.
const RAPOSA_GANSOS_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Uma cruz de 33 pontos, ligados por linhas retas e diagonais. Uma raposa começa no centro. Os gansos ocupam um braço da cruz e a fileira seguinte inteira: 13 gansos na versão de 1870, e 15 na moderna, que põe mais dois nas pontas da fileira do meio. Quem começa não é dito nas fontes: aqui, os gansos.' },
  { title: 'Os gansos', text: 'Um ganso anda um ponto por vez e nunca para trás. Na versão de 1870, só nas linhas retas (para a frente ou para o lado); na moderna, também na diagonal para a frente. Os gansos não capturam.' },
  { title: 'A raposa', text: 'A raposa anda um ponto em qualquer direção, também na diagonal. Ela captura saltando por cima de um ganso vizinho até o ponto vazio logo depois, e pode continuar saltando ou parar. Capturar não é obrigatório.' },
  { title: 'Quem vence', text: 'Os gansos vencem quando a raposa não consegue mais se mexer. A regra de 1870 diz que, com 6 gansos, já não dá para prender a raposa: aqui, a raposa vence quando sobram 6 gansos ou menos. E, se os gansos ficam sem lance (eles não voltam), as fontes não dizem: aqui, a raposa vence.' },
];

const RAPOSA_GANSOS: KnowledgeGame = {
  id: 'raposa-gansos',
  epoca: 'medievais',
  regiao: 'europa',
  povo: 'europeus do norte',
  categoria: 'caca',
  linu: true,
  name: 'Raposa e gansos',
  emoji: '🦊',
  status: 'pronto',
  playable: true,
  year: 'pelo menos desde o séc. XIV (o halatafl)',
  where: 'Escandinávia e Inglaterra, depois toda a Europa',
  etimologia:
    '“Raposa e gansos” é a tradução do inglês “fox and geese”, que diz o que acontece no tabuleiro: uma raposa contra um bando de gansos. O antepassado nórdico se chamava halatafl, “tábua da cauda”, provavelmente pela cauda da raposa. Não achamos por qual caminho o nome chegou ao português.',
  about:
    'A raposa e os gansos é um jogo de caça desigual: uma peça forte, que captura, contra muitas fracas, que só podem cercar. A família é antiga: o halatafl, um jogo nórdico de raposas e ovelhas, é conhecido pelo menos desde o século XIV e aparece na saga de Grettir, da Islândia. Na Inglaterra, o rei Eduardo IV comprou duas raposas e 26 cães para dois jogos de “marelles”, que se acredita serem esse tipo de jogo. O tabuleiro em cruz de 33 pontos é o mesmo do resta-um, que nasceu como variante desses jogos. Da Inglaterra do século XIX há tabuleiros e regras impressas, como a do “Boy’s Own”, de 1870, e as regras variam bastante: o número de gansos (13, 15, 17 ou 18), se eles andam na diagonal e se podem voltar. Com 13 gansos, diz a Wikipédia, o jogo é desequilibrado; por isso há versões com mais gansos. Aqui, dá para jogar a versão de 1870 e a moderna. É primo do jogo da onça e do bagh-chal, que também estão nos Jogos do conhecimento.',
  rules: RAPOSA_GANSOS_RULES,
  variants: [
    {
      name: 'Gansos podem voltar',
      where: 'a versão descrita na Wikipédia em inglês (“Fox games”)',
      text: 'Com os mesmos 13 gansos, raposa e gansos andam em qualquer direção ao longo das linhas, também para trás e na diagonal. Fica mais difícil para a raposa escapar, mas os gansos precisam cuidar dos buracos. Dá para jogar no app: escolha a variante “Gansos podem voltar”.',
      jogavel: 'voltam',
    },
    {
      name: '17 ou 18 gansos, ou duas raposas',
      where: 'versões citadas na Wikipédia e em sites de jogos',
      text: 'Para equilibrar o jogo, põem-se mais gansos, ou duas raposas contra o bando. A versão de 13 gansos é a mais antiga, segundo o museu Victoria and Albert.',
    },
    {
      name: 'Halatafl',
      where: 'Escandinávia, desde pelo menos o séc. XIV',
      text: 'Raposas contra ovelhas. As ovelhas só andam para a frente ou para o lado, as raposas andam para qualquer lado, e capturar é obrigatório, assim como os saltos seguidos. As ovelhas vencem enchendo o curral, uma área marcada do tabuleiro.',
    },
  ],
};
// Surakarta: consultados em 15/10/2026 — Wikipédia em inglês, “Surakarta (game)” (jogo indonésio
// para dois, com o nome da cidade de Surakarta, em Java Central; pouco se sabe da história; o nome
// indonésio, permainan, quer dizer só “o jogo”; em Java também se chama dam-daman; publicado pela
// primeira vez na França em 1970 com o nome Surakarta; 8 laços nos cantos e dois circuitos, o de
// dentro e o de fora; 12 peças por jogador, conchas e pedrinhas no jogo tradicional; passo para
// qualquer lado; captura correndo pelo circuito, passando por pelo menos um laço, só por pontos
// vazios, podendo repetir pontos; captura opcional; vence quem captura as 12; sem progresso, acaba por
// acordo e vence quem tem mais peças; variantes na China e na Coreia rurais, e o bas-basan sepur, de
// 7×7, em Yogyakarta). Ver `services/surakarta-engine.ts`.
const SURAKARTA_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Uma grade de 6×6 pontos. Nos quatro cantos há laços, como argolas: os pequenos ligam a 2ª e a 5ª linha, os grandes ligam a 3ª e a 4ª. Assim se formam dois circuitos fechados, aqui em azul e em verde. Cada jogador tem 12 peças, nas duas fileiras do seu lado.' },
  { title: 'Andar', text: 'Na vez, mova uma peça um ponto para qualquer lado, também na diagonal, até um ponto vazio.' },
  { title: 'Capturar pelos laços', text: 'Para capturar, a peça corre ao longo de um circuito, quantos pontos quiser, passando por PELO MENOS UM laço, e para em cima de uma peça do outro, que sai do tabuleiro. Ela só passa por pontos vazios (pode passar duas vezes pelo mesmo, e o ponto de onde saiu conta como vazio). Capturar não é obrigatório.' },
  { title: 'Quem vence', text: 'Vence quem captura as 12 peças do outro. Se ninguém consegue avançar, a partida acaba por acordo e vence quem tem mais peças: aqui, isso acontece depois de 50 lances seguidos sem captura (com o mesmo número de peças, empate). Quem começa não é dito: aqui, as claras.' },
];

const SURAKARTA: KnowledgeGame = {
  id: 'surakarta',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'javaneses (Indonésia)',
  categoria: 'guerra',
  linu: true,
  name: 'Surakarta',
  emoji: '➰',
  status: 'pronto',
  playable: true,
  year: 'tradicional, sem data; publicado com este nome na França em 1970',
  where: 'Java, na Indonésia',
  etimologia:
    'O nome vem da cidade de Surakarta, em Java Central, na Indonésia. Em indonésio, o jogo se chama só permainan, “o jogo”, e em Java também dam-daman. O nome “Surakarta” se espalhou depois que o jogo foi publicado na França, em 1970.',
  about:
    'O Surakarta é um jogo de captura de Java, na Indonésia. Pouco se sabe da sua história: no jogo tradicional, as peças são conchas e pedrinhas. O que o torna único é o jeito de capturar: a peça não salta nem encosta, ela corre pelas linhas e dá a volta num laço para atacar de longe. Por isso uma peça pode ser capturada por alguém que está do outro lado do tabuleiro. Na França, ele foi publicado em 1970 com o nome da cidade de Surakarta, e assim ficou conhecido fora da Indonésia.',
  rules: SURAKARTA_RULES,
  variants: [
    {
      name: 'Bas-basan sepur',
      where: 'Yogyakarta, em Java',
      text: 'Um tabuleiro de 7×7, com 14 peças por jogador e as mesmas capturas pelos laços.',
    },
    {
      name: 'Versões da China e da Coreia',
      where: 'zonas rurais da China e da Coreia',
      text: 'Tabuleiros e regras um pouco diferentes: as peças não andam na diagonal e podem correr pelo circuito de fora sem capturar.',
    },
  ],
};
// Bao: a fonte única das regras do tabuleiro jogável é H. H. L. M. Donkers, “Zanzibar Bao Rules for the
// Computer” (Universiteit Maastricht, 2001), adaptação das regras de Alexander J. de Voogt, “Limits of
// the Mind. Towards a characterisation of Bao mastership” (tese, Universidade de Leiden, 1995), lida no
// web.archive.org em 15/10/2026. Conferidas com a Wikipédia em inglês “Bao (game)” e a página “Bao la
// Kiswahili” do Mancala World (história, variantes e onde as fontes divergem). O motor reproduz sem
// erro a partida de exemplo de Donkers, Ramadhan × Kijumbe, Zanzibar, 1994 (`bao-engine.test.ts`).
const BAO_RULES: GameRule[] = [
  { title: 'Tabuleiro e sementes', text: 'Quatro fileiras de oito covas; cada jogador tem as duas do seu lado: a da frente (a do meio do tabuleiro) e a de trás, e só semeia nelas, dando a volta. As covas das pontas da fileira da frente são os kichwa (“cabeças”), e elas e as vizinhas são os kimbi. A quinta cova da frente, contando da esquerda de quem joga, é a nyumba (“casa”), quadrada nos tabuleiros de verdade. São 64 sementes. No começo, cada um tem 6 na nyumba, 2 em cada uma das duas covas à direita dela e 22 na mão. O Sul começa.' },
  { title: 'Semear, endelea e capturar', text: 'Semear é deixar uma semente em cada cova seguinte, no sentido horário ou anti-horário, sem mudar de sentido. Se a última cai numa cova vazia, o lance acaba. Se cai numa cova ocupada, pega-se tudo dela e continua (endelea). Captura-se quando a última semente cai numa cova ocupada da sua fileira da frente e a cova do adversário bem em frente tem sementes: elas vêm todas para a sua mão e são semeadas a partir de um kichwa, rumo ao meio. Captura no kichwa ou no kimbi da esquerda começa pelo kichwa da esquerda (sentido horário); da direita, pelo da direita (anti-horário); nas outras covas, o sentido continua o mesmo. Num lance de captura podem vir várias capturas seguidas. Se dá para capturar, é obrigatório.' },
  { title: 'Fase namua: as sementes da mão', text: 'Enquanto há sementes na mão, cada lance começa pondo uma delas numa cova ocupada da sua fileira da frente. Se essa cova está de frente para uma cova ocupada do adversário, é captura (e, se não for kichwa nem kimbi, você escolhe o kichwa). Se não há captura, é takasa: você pega as sementes dessa cova e semeia para o lado que quiser, sem capturar. Não vale começar da nyumba com 6 ou mais se ela não for a única ocupada da frente; e, aí, saem dela só 2 sementes (o “imposto”). Também não vale começar de uma cova com uma semente só se houver outra com mais (a não ser que você ainda tenha a casa).' },
  { title: 'A nyumba', text: 'Na fase namua, se a semeadura termina na sua nyumba com 6 ou mais sementes: numa takasa, o lance acaba ali; num lance de captura, você escolhe entre parar ou seguir semeando as sementes dela (safari), o que desfaz a casa para sempre. A casa também se perde quando é esvaziada (ou capturada).' },
  { title: 'Fase mtaji: todas no tabuleiro', text: 'Quando as 44 sementes das mãos já entraram, cada lance começa pegando todas as sementes de uma cova sua com 2 ou mais e semeando para o lado escolhido. Captura-se se a última semente da primeira volta cair numa cova ocupada da frente, de frente para uma do adversário com sementes (e uma cova com 16 ou mais não pode começar captura). Sem captura, faz-se takasa, de preferência pela fileira da frente.' },
  { title: 'Quem vence', text: 'Perde quem fica sem nenhuma semente na fileira da frente (mesmo no meio de um lance) ou quem não tem lance, por só ter covas com 0 ou 1 semente. Nunca se pode esvaziar a própria fileira da frente: se o kichwa é a única cova ocupada dela, não se semeia dele para a fileira de trás.' },
  { title: 'O que este app simplificou', text: 'Aqui, para simplificar, fica de fora o takasia, uma regra rara da fase mtaji que, segundo Donkers e o Mancala World, só aparece em pouquíssimas partidas. E um lance que semearia sem fim (mais de 3.000 sementes) não vale, como nas regras de Donkers para o computador.' },
];

const BAO: KnowledgeGame = {
  id: 'bao',
  epoca: 'tradicionais',
  regiao: 'africa',
  povo: 'povo suaíli, da costa da Tanzânia e do Quênia, e de Zanzibar',
  categoria: 'semear',
  linu: true,
  name: 'Bao',
  emoji: '🌰',
  status: 'pronto',
  playable: true,
  year: 'tradicional; parentes dele foram descritos em Madagascar em 1658 e nas Comores em 1694',
  where: 'África Oriental: Tanzânia (com Zanzibar), Quênia, Comores, Malawi e regiões vizinhas',
  etimologia:
    '“Bao” é a palavra suaíli para “tabuleiro” ou “jogo de tabuleiro”, segundo a Wikipédia em inglês e o Mancala World. “Bao la Kiswahili” é o “bao suaíli”, a forma completa, de Zanzibar; e “Bao la kujifunza” é o “bao para aprender”, como a Wikipédia em inglês traduz. No Malawi, o povo Yao chama o jogo de “bawo”. Em português, ele ficou com o nome suaíli.',
  about:
    'O bao é o grande jogo de semear da África Oriental, jogado sobretudo pelo povo suaíli, na costa da Tanzânia e do Quênia, em Zanzibar e nas Comores, e levado também para o interior e para o Malawi. Diferente do oware e do Kalah, ele tem quatro fileiras de covas, e as regras do Bao la Kiswahili, o de Zanzibar, estão entre as mais difíceis de todas as mancalas. Segundo o Mancala World, um parente dele foi descrito pelo francês Étienne de Flacourt em Madagascar, em 1658, e Thomas Hyde o encontrou em Anjouan, nas Comores, em 1694. O poeta suaíli Muyaka bin Haji escreveu o poema “Bao Naligwa” em Mombasa, nos anos 1820, e o tabuleiro de bao mais antigo que se conhece, de 1896, vem do Malawi e está no Museu Britânico. Conta-se que o bao era o passatempo preferido de Julius Nyerere, o primeiro presidente da Tanzânia. Em Zanzibar há clubes e mestres, chamados fundi ou bingwa; o holandês Alexander de Voogt aprendeu com eles e transcreveu as regras na sua tese de 1995, que é a base das regras usadas aqui.',
  rules: BAO_RULES,
  variants: [
    {
      name: 'Bao la kujifunza (bao para aprender)',
      where: 'a versão para aprender, segundo a Wikipédia em inglês',
      text: 'Começa com 2 sementes em cada uma das 32 covas, sem nada na mão: não há a fase namua, e a partida já começa na fase mtaji, sem as regras da nyumba. É o bom primeiro passo antes do Bao la Kiswahili. Dá para jogar no app: escolha “Bao la kujifunza”.',
    },
    {
      name: 'Bawo',
      where: 'Malawi',
      text: 'O mesmo jogo, com algumas regras locais: segundo a Wikipédia em inglês, no Malawi a nyumba começa com 8 sementes, e não 6.',
    },
    {
      name: 'Onde as fontes divergem',
      where: 'Donkers e de Voogt, a Wikipédia em inglês e o Mancala World',
      text: 'Sobre quando a nyumba deixa de valer: Donkers diz que ela se perde quando é esvaziada ou na primeira captura da fase mtaji; o Mancala World diz que ela para de funcionar, por um tempo, quando tem menos de 6 sementes; a Wikipédia, que ela se perde na primeira vez em que é semeada (fora o “imposto”) ou capturada. A Wikipédia conta ainda versões em que o “imposto” só vale quando não há outro lance de abertura, e outras em que seguir semeando a casa (safari) é obrigatório. O app segue Donkers.',
    },
  ],
};
// Linhas de ação: consultados em 15/10/2026 — Wikipédia em inglês, “Lines of Action” (inventado por
// Claude Soucie; regras na 1ª edição de “A Gamut of Games”, de Sid Sackson, 1969; a peça anda
// exatamente tantas casas quantas peças, das duas cores, há na linha; pula as suas, não as do outro;
// captura caindo na do outro; vence quem junta todas as peças, também na diagonal; com uma peça só,
// já está junto; as pretas começam; o junta-junta simultâneo era empate em 1969, virou vitória de quem
// jogou na 2ª edição, e a maioria dos torneios de hoje, como o Mind Sports Olympiad, conta empate; a
// variante “Scrambled Eggs”, de Soucie, com outra posição inicial); a regra posta por Edward Jackman
// em rec.games.abstract, 1995 (webspace.science.uu.nl/~bodla101/d.gam/linesofaction.html: pretas em
// b1–g1 e b8–g8, brancas em a2–a7 e h2–h7; o exemplo c8–c6); as regras da Universidade de Maastricht
// (dke.maastrichtuniversity.nl/m.winands/loa/rules.html), que avisam que livros e sites variam em
// alguns pontos. Ver `services/linhas-de-acao-engine.ts`.
const LINHAS_DE_ACAO_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Um tabuleiro de 8×8. Cada jogador tem 12 peças: as pretas nas fileiras de cima e de baixo (de b a g), as brancas nas colunas da esquerda e da direita (de 2 a 7). Os cantos ficam vazios. As pretas começam.' },
  { title: 'Quantas casas andar', text: 'A peça anda em linha reta, na horizontal, na vertical ou na diagonal, EXATAMENTE tantas casas quantas são as peças (das duas cores) na linha inteira em que ela vai andar, contando ela mesma. Por exemplo: se na coluna há 2 peças, a peça anda 2 casas nessa coluna.' },
  { title: 'Pular e capturar', text: 'No caminho, a peça pode pular as suas, mas nunca as do outro. Ela pode parar numa casa vazia ou numa casa com peça do outro, que é capturada. Não pode parar em cima de uma sua.' },
  { title: 'Quem vence', text: 'Vence quem junta TODAS as suas peças num grupo só, encostadas de lado ou na diagonal. Com uma peça só, ela já está “junta”. Se um lance junta os dois lados ao mesmo tempo, é empate, como na regra de 1969 e na maioria dos torneios. Sem lance, passa-se a vez. E, para a partida não durar para sempre, aqui ela empata depois de 200 lances.' },
];

const LINHAS_DE_ACAO: KnowledgeGame = {
  id: 'linhas-de-acao',
  epoca: 'contemporaneos',
  regiao: 'americas',
  povo: 'Estados Unidos',
  categoria: 'modernos',
  linu: true,
  name: 'Linhas de ação (Lines of Action)',
  emoji: '↔️',
  status: 'pronto',
  playable: true,
  year: '1969 (publicado em “A Gamut of Games”)',
  where: 'Estados Unidos: inventado por Claude Soucie e popularizado por Sid Sackson',
  etimologia:
    '“Linhas de ação” é a tradução do inglês “Lines of Action”, o nome que o jogo tem desde o livro de Sid Sackson, de 1969. O nome conta a regra: tudo depende das linhas, porque o número de peças numa linha diz quanto a peça anda. As fontes consultadas não dizem quem escolheu o nome, nem se há um nome oficial em português.',
  about:
    'As Linhas de ação foram inventadas por Claude Soucie e ficaram conhecidas em 1969, quando o criador de jogos americano Sid Sackson as pôs no seu livro “A Gamut of Games”, uma coleção de jogos novos e pouco conhecidos. O objetivo é diferente do da maioria dos jogos de captura: em vez de acabar com o outro, você quer juntar as suas peças. Capturar pode até atrapalhar, porque cada peça capturada deixa o outro com menos peças para juntar. E a regra das linhas muda a cada lance, porque cada peça que entra ou sai de uma linha muda quanto as outras andam. Hoje há campeonatos, como o do Mind Sports Olympiad.',
  rules: LINHAS_DE_ACAO_RULES,
  variants: [
    {
      name: 'Junta-junta vale vitória',
      where: '2ª edição de “A Gamut of Games”',
      text: 'Quando um lance junta os dois lados ao mesmo tempo, vence quem jogou, e não empata. Era a intenção do inventor, mas a maioria dos torneios de hoje continua contando empate.',
    },
    {
      name: 'Scrambled Eggs (“ovos mexidos”)',
      where: 'proposta pelo próprio Claude Soucie',
      text: 'As mesmas regras, com outra posição inicial.',
    },
  ],
};

/**
 * Clássicos modernos da Gigamic (pedido do dono, 14/10/2026: “vê o que você pode implementar, pq são
 * jogos bons”, a partir de en.gigamic.com/45-modern-classics). Todos a ficar jogáveis.
 */
// Quarto: consultados em 14/10/2026 — a folha de regras oficial da Gigamic (edição 11-2016, “© 1991
// Gigamic from a concept of Blaise Muller”, en.gigamic.com, anexo 466) e a página do jogo
// (en.gigamic.com/game/quarto-classic); Wikipédia em inglês “Quarto (board game)” (prêmios e a
// solução por computador); François Jacquet, “Quarto”, Math-École nº 154 (setembro de 1994),
// reproduzido em “Grand N” nº 58 (IREM de Grenoble); tesla-mag.com, “Quarto Gigamic règle” (a
// fundação da Gigamic). Ver `services/quarto-engine.ts`.
const QUARTO_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Um tabuleiro de 16 casas (4×4) e 16 peças, todas diferentes. Cada peça tem 4 características, cada uma de dois jeitos: alta ou baixa, clara ou escura, redonda ou quadrada, maciça ou furada (com um buraco no alto). As peças são de todo mundo: ninguém tem cor própria.' },
  { title: 'Você escolhe a peça do outro', text: 'É o que faz o Quarto diferente. Quem começa (a regra manda tirar no dado; aqui, o app sorteia) escolhe uma das 16 peças e a dá ao adversário. Ele coloca essa peça em qualquer casa vazia e, em seguida, escolhe uma das peças que sobraram para dar de volta. E assim por diante: na sua vez, você coloca a peça que recebeu e escolhe a do outro.' },
  { title: 'Quarto!', text: 'Ganha quem, ao colocar a peça recebida, completa uma fileira de 4 peças com pelo menos uma característica em comum (4 altas, ou 4 escuras, ou 4 furadas…), na horizontal, na vertical ou na diagonal. Não importa quem colocou as outras 3. Na regra oficial, quem completa precisa anunciar “Quarto!”.' },
  { title: 'Quem não anuncia', text: 'Se quem completou não percebe e passa uma peça ao adversário, este pode, naquele momento, anunciar “Quarto!” e mostrar a fileira: a vitória é dele. Se ninguém vê a fileira no lance em que ela surgiu, ela perde o valor e o jogo continua. No app, essa regra é uma opção (“Anunciar Quarto!: sim”); com ela desligada, a vitória é automática.' },
  { title: 'Empate', text: 'Se todas as peças forem colocadas e ninguém anunciar um Quarto, a partida empata.' },
];

const QUARTO: KnowledgeGame = {
  id: 'quarto',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'Suíça (o autor) e França (a editora)',
  categoria: 'modernos',
  linu: true,
  name: 'Quarto',
  emoji: '🟫',
  status: 'pronto',
  playable: true,
  year: '1991 (publicado pela Gigamic); premiado num concurso de criadores de jogos em 1989',
  where: 'criado pelo suíço Blaise Müller; publicado pela editora francesa Gigamic',
  etimologia:
    'Nem a regra da Gigamic nem as outras fontes consultadas explicam o nome. “Quarto” é “quarto” (o número ordinal, o que vem depois do terceiro) em italiano e em português, e o jogo gira em torno do 4: 4 características, 4 peças em fila, tabuleiro 4×4. Mas essa ligação é só provável: não achamos onde o autor explique a escolha. Em português, o nome ficou igual ao da caixa francesa.',
  about:
    'O Quarto foi criado pelo suíço Blaise Müller (a Gigamic escreve “Muller”) e foi o primeiro jogo da Gigamic, editora fundada em 1991 em Wimereux, no norte da França, por três irmãos. Antes de sair, em 1989, ganhou o Dé d’Or, um prêmio para criadores de jogos dado em Boulogne-Billancourt, perto de Paris. Depois vieram o Super As d’Or de 1992, em Cannes, a lista de indicados ao Spiel des Jahres (o prêmio alemão de jogo do ano) de 1993 e o selo Mensa Select de 1993. A ideia que deixa o jogo diferente, como escreveu François Jacquet na revista suíça de matemática Math-École em 1994, é que quem escolhe a peça que você vai jogar é o seu adversário. Como as 16 peças são todas diferentes e cada uma tem 4 características de dois jeitos, Jacquet sugeria usar o jogo na escola, para ensinar conjuntos e lógica sem fórmulas. Em 1998, Luc Goossens resolveu o jogo por computador: se os dois jogarem perfeitamente, a partida empata.',
  rules: QUARTO_RULES,
  variants: [
    {
      name: 'Variante avançada: quadrados 2×2',
      where: 'regra oficial da Gigamic, “para jogadores avançados”',
      text: 'Além das fileiras, vale também um quadrado de 4 peças vizinhas (2×2) com pelo menos uma característica em comum. O tabuleiro tem 9 quadrados assim, então há 9 maneiras a mais de fazer um Quarto. Dá para jogar no app: escolha “Linhas e quadrados 2×2”.',
    },
    {
      name: 'Variante para iniciantes',
      where: 'regra oficial da Gigamic, para crianças e para quem está aprendendo',
      text: 'Joga-se com só 1, 2 ou 3 características valendo. Por exemplo: só vale uma fileira de 4 peças da mesma cor. Quando ficar fácil, acrescente outra característica, até chegar às 4. Dá para jogar no app: escolha 1, 2 ou 3 características. A cor vem primeiro, como no exemplo da regra; a ordem das outras (a altura e depois a forma) é uma escolha do app, para simplificar.',
      jogavel: 'iniciantes',
    },
    {
      name: 'Quarto Mini e Quarto Gigante',
      where: 'outros tamanhos vendidos pela Gigamic',
      text: 'As mesmas regras, com peças menores para viagem ou peças grandes para jogar no chão. Só muda o tamanho do material.',
    },
  ],
};
// Quixo: consultados em 15/10/2026 — a folha de regras oficial da Gigamic (“® & © Copyright 1995
// GiGamic S.A. based on an idea by Thierry Chapeau”, impressão de 2006, cópia em
// cs.uwaterloo.ca/~dtompkin/dtlib/base/Quixo.pdf), com as regras a dois e a quatro; a página do jogo
// na Gigamic (en.gigamic.com, “Quixo”, autor Thierry Chapeau); Wikipédia em inglês “List of Mensa
// Select recipients” (1995); S. Tanaka, F. Bonnet, S. Tixeuil e Y. Tamura, “Quixo Is Solved”
// (arXiv 2007.15895, 2020). Ver `services/quixo-engine.ts`.
const QUIXO_RULES: GameRule[] = [
  { title: 'Tabuleiro e cubos', text: 'São 25 cubos num tabuleiro 5×5. Cada cubo tem faces lisas, faces com um círculo e faces com uma cruz. No começo, todos ficam com a face lisa para cima. Um jogador fica com as cruzes e o outro com os círculos.' },
  { title: 'Tirar um cubo', text: 'Na sua vez, tire um cubo da BORDA do tabuleiro: um liso ou um com o seu símbolo, nunca um do adversário. Na primeira rodada, só há cubos lisos. Ninguém pode passar a vez.' },
  { title: 'Virar e empurrar', text: 'O cubo tirado volta sempre com o SEU símbolo para cima. Ele entra numa das pontas da fileira (linha ou coluna) que ficou com o buraco, e você empurra a fileira até fechar o buraco. Só não vale devolver o cubo no lugar de onde ele saiu: um cubo do canto tem 2 pontas para voltar, um do meio da borda tem 3.' },
  { title: 'Quem vence', text: 'Ganha quem forma uma linha de 5 cubos com o seu símbolo, na horizontal, na vertical ou na diagonal. Cuidado: quem forma uma linha com o símbolo do ADVERSÁRIO perde, mesmo que forme a sua no mesmo lance.' },
  { title: 'A quatro, em duplas', text: 'Os parceiros sentam frente a frente e jogam em sentido horário (A1, B1, A2, B2). O símbolo de cada cubo tem uma ponta: ela aponta para o parceiro que pode jogar aquele cubo de novo, e quem joga escolhe para quem virar a ponta. Quem não tem cubo que possa tirar passa a vez. No app, a ponta aparece como um triângulo na beira do cubo.' },
  { title: 'O que este app simplificou', text: 'A regra oficial não tem empate, mas o jogo foi resolvido por computador em 2020 e, com jogo perfeito, a partida não termina. Aqui, para simplificar, depois de 150 lances a partida acaba empatada.' },
];

const QUIXO: KnowledgeGame = {
  id: 'quixo',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'França (a editora)',
  categoria: 'modernos',
  linu: true,
  name: 'Quixo',
  emoji: '🧊',
  status: 'pronto',
  playable: true,
  year: '1995',
  where: 'criado por Thierry Chapeau; publicado pela editora francesa Gigamic',
  etimologia:
    'A regra e a página da Gigamic não explicam o nome, e não achamos nenhuma fonte em que o autor fale dele. “Quixo” começa com “Qu”, como outros jogos da mesma editora (Quarto, Quoridor, Quantik), e lembra a sílaba “cu” de cubo, mas isso é só parecença: a origem do nome é incerta. Em português, o jogo é vendido com o nome original.',
  about:
    'O Quixo foi criado por Thierry Chapeau e publicado pela Gigamic, a editora francesa de jogos de madeira, em 1995. Ele parece um jogo da velha grande, de cinco em linha, mas as peças não ficam paradas: a cada lance, um cubo sai da borda, ganha o símbolo de quem jogou e volta empurrando uma fileira inteira, o que pode desmanchar a linha do adversário ou montar a dele sem querer. Por isso a regra mais lembrada é a do castigo: quem forma a linha do adversário perde. No mesmo ano de 1995, o Quixo recebeu o selo Mensa Select, da American Mensa, dado a jogos que fazem pensar. É um dos poucos jogos de estratégia que se joga a dois ou a quatro, em duplas. Em 2020, quatro pesquisadores do Japão e da França (Satoshi Tanaka, François Bonnet, Sébastien Tixeuil e Yasumasa Tamura) resolveram o Quixo por computador: com os dois jogando perfeitamente, ninguém consegue ganhar.',
  rules: QUIXO_RULES,
  variants: [
    {
      name: 'Quixo a quatro, em duplas',
      where: 'regra oficial da Gigamic, na mesma caixa',
      text: 'Duas duplas, cruzes contra círculos, cada parceiro de frente para o outro. A ponta desenhada no símbolo diz qual dos dois parceiros pode jogar cada cubo. Dá para jogar no app: escolha “4 jogadores, em duplas” (só no mesmo aparelho).',
    },
    {
      name: 'Quixo Mini',
      where: 'versão de viagem vendida pela Gigamic',
      text: 'As mesmas regras, com cubos e tabuleiro menores, para levar.',
    },
  ],
};
// Pylos: consultados em 15/10/2026 — a folha de regras oficial da Gigamic (“PYLOS 03-2017”, “© 1994
// GIGAMIC from a concept of David G. Royffe”, export.gigamic.com/wp-content/uploads/2021/01/
// INS_PYLOS_03-2017.pdf), com as versões para crianças e para experientes; a página do jogo na Gigamic
// (en.gigamic.com, “Pylos”, autor David G. Royffe); Wikipédia em inglês “Pylos (board game)” e “List of
// Mensa Select recipients” (1994); o arquivo do GamesCrafters, da Universidade da Califórnia em
// Berkeley (gamescrafters.berkeley.edu, “Pylos”). Ver `services/pylos-engine.ts`.
const PYLOS_RULES: GameRule[] = [
  { title: 'Tabuleiro e bolas', text: 'O tabuleiro tem 16 covas (4×4), a base de uma pirâmide. Cada jogador tem 15 bolas na reserva, claras ou escuras, e juntas as 30 formam a pirâmide inteira: 16 embaixo, 9 no segundo andar, 4 no terceiro e 1 no topo. As cores são sorteadas e a clara começa.' },
  { title: 'Na sua vez', text: 'Ponha uma bola da sua reserva numa cova vazia ou em cima de um quadrado de 4 bolas (de qualquer cor). Ou, em vez disso, suba uma bola sua que já está no tabuleiro para um quadrado mais alto: só vale se ela subir pelo menos um andar e não estiver segurando outra bola. Subir poupa uma bola da reserva.' },
  { title: 'Quadrado da sua cor', text: 'Quem forma um quadrado de 4 bolas da SUA cor tira na hora uma ou duas bolas suas do tabuleiro e as devolve à reserva. Pode ser qualquer bola sua que não segure outra, até a que acabou de pôr. Formar vários quadrados de uma vez continua valendo só uma ou duas bolas.' },
  { title: 'Quem vence', text: 'Ganha quem põe a bola do topo da pirâmide. Quem fica sem bolas na reserva perde. Por isso o jogo é poupar: quem guarda mais bolas é quem chega ao fim. No app, perde quem começa a vez sem nenhuma bola na reserva.' },
];

const PYLOS: KnowledgeGame = {
  id: 'pylos',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'França (a editora)',
  categoria: 'modernos',
  linu: true,
  name: 'Pylos',
  emoji: '🔻',
  status: 'pronto',
  playable: true,
  year: '1994 (publicado pela Gigamic); a ideia, segundo a Wikipédia, é de 1964',
  where: 'criado por David G. Royffe; publicado pela editora francesa Gigamic',
  etimologia:
    'O jogo teve três nomes: “Elevation” (elevação, em inglês) quando foi mostrado na feira de Essen, depois “Pyraos” e por fim “Pylos”, segundo a Wikipédia e o GamesCrafters. Pilos (Pylos) é o nome de uma cidade da Grécia, mas nenhuma das fontes consultadas diz se o nome vem dela, ou da “pirâmide” que se monta no jogo: a origem é incerta. Em português, o jogo é vendido com o nome Pylos.',
  about:
    'O Pylos foi criado por David G. Royffe. Segundo a Wikipédia, ele teve a ideia em 1964, brincando com as bolas de sinuca da família. Décadas depois, mostrou o jogo na feira de jogos de Essen, na Alemanha, com o nome “Elevation” (a Wikipédia diz que foi em 1994; o GamesCrafters, da Universidade da Califórnia em Berkeley, diz 1993). A editora francesa Gigamic o publicou em 1994, e no mesmo ano ele recebeu o selo Mensa Select, da American Mensa. O jogo é uma pirâmide de 30 bolas montada pelos dois jogadores juntos. Ninguém captura nada: cada um tenta gastar menos bolas que o outro, subindo bolas que já estão no tabuleiro e fechando quadrados da sua cor para pegar bolas de volta. Quem guarda mais chega ao fim e põe a bola do topo.',
  rules: PYLOS_RULES,
  variants: [
    {
      name: 'Versão para crianças',
      where: 'regra oficial da Gigamic, para começar',
      text: 'Joga-se sem a regra do quadrado da sua cor: só subir bolas poupa a reserva. Dá para jogar no app: escolha “Para crianças”.',
    },
    {
      name: 'Versão para jogadores experientes: linhas',
      where: 'regra oficial da Gigamic',
      text: 'Além do quadrado, também uma linha da sua cor deixa tirar 1 ou 2 bolas: 4 bolas em linha no primeiro andar ou 3 no segundo. Diagonal não vale, e nunca se tiram mais de 2 bolas por lance. Dá para jogar no app: escolha “Experientes (linhas)”.',
    },
    {
      name: 'Pylos Mini',
      where: 'versão de viagem vendida pela Gigamic',
      text: 'As mesmas regras, com bolas e tabuleiro menores.',
    },
  ],
};
// Quantik: consultados em 14/10/2026 — a folha de regras oficial da Gigamic (“QUANTIK 06-2019”,
// “® & © 2019 GIGAMIC from a concept of Nouri Khalifa”, em várias línguas, com versão em português),
// a página do jogo na Gigamic (export.gigamic.com/game/quantik), a resenha de boardseyeview.net
// (“Quantik”, 2022) e a ficha do Quantik Mini em ludum.fr (lançamento em 2019). Não achamos prêmios.
// Ver `services/quantik-engine.ts`.
const QUANTIK_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Um tabuleiro de 4×4 dividido em 4 regiões, os quadrados de 4 casas de cada canto. Cada jogador tem 8 peças da sua cor, clara ou escura: 2 esferas, 2 cilindros, 2 cubos e 2 cones. O primeiro jogador é sorteado.' },
  { title: 'Na sua vez', text: 'Coloque uma das suas peças numa casa vazia. A única regra: você não pode pôr uma forma numa linha, coluna ou região onde o ADVERSÁRIO já tem uma peça dessa forma. As suas próprias peças não proíbem nada: dá para pôr o seu segundo cubo na mesma linha do primeiro. Mas se as suas peças permitem e as dele proíbem, o lance é proibido.' },
  { title: 'Quem vence', text: 'Ganha na hora quem coloca a quarta forma diferente numa linha, numa coluna ou numa região (uma esfera, um cilindro, um cubo e um cone). Não importa de quem são as outras três peças.' },
  { title: 'Sem lance, perde', text: 'Se na sua vez você não consegue colocar nenhuma das suas peças, você perde na hora. Por isso, às vezes, a melhor jogada é a que tira todos os lances do adversário.' },
];

const QUANTIK: KnowledgeGame = {
  id: 'quantik',
  epoca: 'atuais',
  regiao: 'europa',
  povo: 'França (a editora)',
  categoria: 'modernos',
  linu: true,
  name: 'Quantik',
  emoji: '🔷',
  status: 'pronto',
  playable: true,
  year: '2019',
  where: 'criado por Nouri Khalifa; publicado pela editora francesa Gigamic',
  etimologia:
    'A regra e a página da Gigamic não explicam o nome, e não achamos nenhuma entrevista do autor sobre ele. “Quantik” lembra o francês quantique (“quântico”) e começa com “Qu”, como outros jogos da mesma editora (Quarto, Quixo, Quoridor), mas isso é só parecença: a origem do nome é incerta. Em português, o jogo é vendido com o nome original.',
  about:
    'O Quantik é um jogo de estratégia para dois, criado por Nouri Khalifa e lançado em 2019 pela Gigamic, a editora francesa de jogos de madeira que também publica o Quarto e o Quoridor. Ele cabe na mão: um tabuleiro de 16 casas e 16 peças em quatro formas (esfera, cilindro, cubo e cone), e uma partida dura poucos minutos. Uma resenha do site Board’s Eye View compara o Quantik ao jogo da velha, porque se ganha completando uma fileira, mas a regra que manda é outra: você não pode repetir uma forma que o adversário já pôs na mesma linha, coluna ou região. Assim, cada peça colocada fecha casas para o outro, e no fim da partida quem fica sem lance perde. Não achamos prêmios do jogo nas fontes consultadas.',
  rules: QUANTIK_RULES,
  variants: [
    {
      name: 'Quantik Mini',
      where: 'versão de viagem vendida pela Gigamic, também de 2019',
      text: 'As mesmas regras e as mesmas 16 peças de madeira, num tamanho menor para levar no bolso. As fontes consultadas não mostram outras variantes oficiais.',
    },
  ],
};
// Squadro: consultados em 14/10/2026 — a folha de regras oficial da Gigamic (“SQUADRO 07-2018”,
// “® & © 2018 GIGAMIC from a concept of Adrián Jiménez Pascual”, em 24 línguas, inclusive português;
// cópia em https://cdn.1j1ju.com/medias/53/a3/51-squadro-regle.pdf), a página do jogo na Gigamic
// (export.gigamic.com/game/squadro e /squadro-mini: “Designer: Adrian Jimenez Pascual”, 20 min, 8+),
// a resenha da GeekDad (“Elegance Abounds in the Abstract Board Game ‘Squadro’”, set. 2018: lançamento
// em outubro de 2018, tabuleiro de madeira com 5 canaletas em cada sentido, peças que “lembram
// barquinhos”, tema náutico que o próprio resenhista diz inventar) e a ajuda do Board Game Arena
// (en.doc.boardgamearena.com/Gamehelpsquadro: na volta, 1 vira 3, 2 fica 2, 3 vira 1). A folha não
// traz o desenho do tabuleiro; a ordem dos pontos (1-3-2-3-1) vem de duas implementações independentes
// citadas em `services/squadro-engine.ts`. Não achamos prêmios. Etimologia: o it.wiktionary dá
// “squadro” como “eu esquadrejo”, do verbo squadrare; nenhuma fonte liga isso ao nome do jogo.
const SQUADRO_RULES: GameRule[] = [
  {
    title: 'Tabuleiro e peças',
    text: 'Um tabuleiro quadrado com 5 canaletas deitadas e 5 em pé, que se cruzam. Cada jogador tem 5 peças, claras ou escuras, uma em cada canaleta do seu lado, apontando para o outro lado. As claras cruzam o tabuleiro da esquerda para a direita; as escuras, de baixo para cima. O primeiro jogador é sorteado.',
  },
  {
    title: 'Na sua vez',
    text: 'Mova uma das suas peças, sempre em linha reta, para onde ela aponta. Ela anda tantas casas quantos são os pontos gravados na beira, ao lado da casa de onde ela partiu: 1, 2 ou 3. A peça anda o movimento inteiro, a não ser que algo a faça parar.',
  },
  {
    title: 'Meia-volta',
    text: 'Quando a peça chega ao outro lado, ela dá meia-volta e para, mesmo que sobrem pontos. Na volta, a velocidade é a dos pontos daquele lado: quem ia rápido volta devagar e quem ia devagar volta rápido (1 vira 3, 3 vira 1 e 2 continua 2).',
  },
  {
    title: 'Passar por cima',
    text: 'Se no caminho a peça passa por uma ou mais peças do adversário, uma atrás da outra, ela salta todas e para na primeira casa vazia logo depois, mesmo que sobrem pontos. As peças saltadas voltam: para a casa de partida, se ainda estavam na ida, ou para a casa de meia-volta, se já estavam voltando.',
  },
  { title: 'Quem vence', text: 'A peça que volta à casa de partida sai do tabuleiro. Ganha quem fizer primeiro a ida e volta com 4 das suas 5 peças.' },
];

const SQUADRO: KnowledgeGame = {
  id: 'squadro',
  epoca: 'atuais',
  regiao: 'europa',
  povo: 'França (a editora)',
  categoria: 'modernos',
  linu: true,
  name: 'Squadro',
  emoji: '🚣',
  status: 'pronto',
  playable: true,
  year: '2018',
  where: 'criado por Adrián Jiménez Pascual; publicado pela editora francesa Gigamic',
  etimologia:
    'A regra e a página da Gigamic não explicam o nome, e não achamos onde o autor fale dele. Em italiano, “squadro” quer dizer “eu esquadrejo”, do verbo squadrare (pôr em esquadro, em ângulo reto), e o tabuleiro é todo feito de trilhos que se cruzam em ângulo reto. Mas essa ligação é só parecença: a origem do nome é incerta. Em português, o jogo é vendido com o nome original.',
  about:
    'O Squadro é um jogo de estratégia para dois, criado por Adrián Jiménez Pascual e lançado em 2018 pela Gigamic, a editora francesa de jogos de madeira que também publica o Quarto e o Quantik. O tabuleiro tem 5 canaletas em cada sentido, e as peças dos dois jogadores cruzam o tabuleiro em ângulo reto, umas por cima do caminho das outras. Cada peça tem a sua velocidade, marcada com pontos na beira, e ela muda na volta. Por isso o jogo parece uma corrida, mas tem uma armadilha: quem passa por cima de uma peça adversária manda ela de volta. A partida dura uns 20 minutos. As peças lembram barquinhos, e uma resenha da GeekDad descreve o jogo como “velejar até o outro lado e voltar”, mas o próprio resenhista avisa que o tema de barcos é invenção dele: o jogo não tem tema. Não achamos prêmios do jogo nas fontes consultadas.',
  rules: SQUADRO_RULES,
  variants: [
    {
      name: 'Squadro Mini',
      where: 'versão de viagem vendida pela Gigamic',
      text: 'As mesmas regras e as mesmas 10 peças, num tamanho menor, para viagem. As fontes consultadas não mostram outras variantes oficiais.',
    },
  ],
};
// Qawale: consultados em 14/10/2026 — a folha de regras oficial da Gigamic (“® & © 2022 Gigamic from
// a concept of Romain Froger & Didier Lenain-Bragard”, em inglês e francês; cópia em
// https://cdn.1j1ju.com/medias/0b/42/6b-qawale-regle.pdf), a página do jogo na Gigamic
// (export.gigamic.com/game/qawale e /qawale-mini: 15 min, 8+, “Qawale finds its inspiration in the
// piles of pebbles found along paths”), a ajuda do Board Game Arena (en.doc.boardgamearena.com/
// Gamehelpqawale), a ficha da ludum.fr (lançamento em 2022) e a resenha da Vindjeu (vindjeu.eu, 27/3/2023:
// “Le nom ne trompe pas : si vous savez jouer à l’Awale, vous saurez jouer à Qawale”). O verbete
// “Oware” da Wikipédia em inglês dá “awalé” como o nome do oware na Costa do Marfim e no Benin. A regra
// não diz o que acontece quando um lance alinha as duas cores; a simplificação está na regra abaixo.
const QAWALE_RULES: GameRule[] = [
  {
    title: 'Tabuleiro e pedras',
    text: 'Um tabuleiro de 4×4 casas. Em cada canto, uma pilha de 2 pedras neutras, cor de areia. Cada jogador tem 8 pedras da sua cor, clara ou escura, na mão. O primeiro jogador é sorteado.',
  },
  {
    title: 'Na sua vez',
    text: 'Ponha uma pedra sua em cima de uma pilha, à sua escolha. Não vale pôr numa casa vazia, mas uma pedra sozinha já conta como pilha. Depois, pegue a pilha inteira e espalhe as pedras, uma por casa, começando pela de baixo, como na semeadura de uma mancala.',
  },
  {
    title: 'Por onde espalhar',
    text: 'A primeira pedra cai numa casa vizinha da pilha, e cada pedra seguinte numa casa vizinha da anterior, sem diagonal. Não vale ir e voltar: a pedra não pode cair na casa por onde a anterior acabou de passar. Mas dá para voltar a uma casa dando a volta.',
  },
  {
    title: 'Quem vence',
    text: 'Vence quem primeiro tiver 4 pedras da sua cor à vista em linha, coluna ou diagonal. Só conta a pedra de cima de cada pilha; uma pilha de 4 pedras da mesma cor não é linha. Se as 16 pedras forem jogadas sem alinhamento, empata. Aqui, para simplificar (a regra não fala disso), se um lance alinha as duas cores, vence quem jogou; se alinha só a do adversário, vence o adversário.',
  },
];

const QAWALE: KnowledgeGame = {
  id: 'qawale',
  epoca: 'atuais',
  regiao: 'europa',
  povo: 'França (a editora)',
  categoria: 'modernos',
  linu: true,
  name: 'Qawale',
  emoji: '🪨',
  status: 'pronto',
  playable: true,
  year: '2022',
  where: 'criado por Romain Froger e Didier Lenain-Bragard; publicado pela editora francesa Gigamic',
  etimologia:
    'A Gigamic não explica o nome. Ele soa como “awalé”, o nome do oware na Costa do Marfim e no Benin, e o jogo espalha as pedras uma por casa, como numa mancala; uma resenha francesa diz que “o nome não engana”: quem sabe jogar awalé sabe jogar Qawale. Por que começa com Q não achamos explicado; outros jogos da editora também começam assim (Quarto, Quixo, Quantik). Em português, o jogo é vendido com o nome original.',
  about:
    'O Qawale é um jogo de estratégia para dois, criado por Romain Froger e Didier Lenain-Bragard e lançado em 2022 pela Gigamic, a editora francesa de jogos de madeira que também publica o Quarto, o Quantik e o Squadro. A Gigamic conta que a ideia veio das pilhas de pedras que se encontram na beira dos caminhos. O jogo junta duas ideias antigas: a semeadura das mancalas, como o oware, em que se pega um monte e se solta uma peça por casa, e o alinhamento de 4, como no Ligue 4. Mas aqui cada lance mexe numa pilha inteira, e a pedra que você solta pode cobrir uma do adversário, ou descobrir uma dele que estava embaixo. A partida dura uns 15 minutos.',
  rules: QAWALE_RULES,
  variants: [
    {
      name: 'Qawale Mini',
      where: 'versão de viagem vendida pela Gigamic',
      text: 'As mesmas regras e as mesmas 24 pedras de madeira, num tamanho menor, para viagem. As fontes consultadas não mostram outras variantes oficiais.',
    },
  ],
};
// Qomet: consultados em 15/10/2026 — a folha de regras oficial da Gigamic (“® & © Gigamic 2025”,
// impressa em 07-2025, em francês e em inglês; baixada da página do jogo em gigamic.com e
// en.gigamic.com), a resenha da Meeple Mountain (meeplemountain.com/reviews/qomet: o tabuleiro é o da
// trilha de 12 peças com um ponto a mais no centro, posto pelo autor; 2025; Gigamic e Hachette
// Boardgames) e a da Meadow Party (meadowparty.com/blog/2026/06/02/qomet). A Meadow Party diz que não
// há movimento na diagonal, mas a regra oficial diz que há: seguimos a regra. Nenhuma fonte explica o
// nome. Ver `services/qomet-engine.ts`.
const QOMET_RULES: GameRule[] = [
  { title: 'Tabuleiro e estrelas', text: 'O tabuleiro tem 25 casas: três quadrados, um dentro do outro, ligados pelas linhas do meio e pelas diagonais, e uma casa no centro. Cada jogador tem 7 estrelas da sua cor. Pela regra, começa quem olhou as estrelas do céu por último; aqui, começam as douradas.' },
  { title: 'Na sua vez', text: 'Faça uma de duas coisas: ponha uma estrela da mão numa casa vazia, OU deslize uma estrela sua até a próxima casa, ao longo de uma linha (na horizontal, na vertical ou na diagonal).' },
  { title: 'Empurrar', text: 'Se a casa para onde você vai tem uma estrela (de qualquer cor), você a empurra uma casa na mesma direção, mas só se a casa seguinte estiver vazia: nunca duas estrelas de uma vez. Do quadrado de fora, dá para empurrar uma estrela para fora do tabuleiro, ou tirar uma sua. A estrela que sai volta para a mão do dono. Não vale desfazer o lance que o adversário acabou de fazer.' },
  { title: 'Quem vence', text: 'Ganha quem forma um quadrado com 4 estrelas da sua cor, ligadas pelas linhas do tabuleiro, de qualquer tamanho. As estrelas do outro no caminho não atrapalham. Mas cuidado: se, ao empurrar, você forma um quadrado do adversário, quem ganha é ele, mesmo que você forme o seu ao mesmo tempo.' },
  { title: 'Sem lance', text: 'A regra não diz o que acontece se alguém fica sem lance (é muito raro). Aqui, ele passa a vez.' },
];

const QOMET: KnowledgeGame = {
  id: 'qomet',
  epoca: 'atuais',
  regiao: 'europa',
  povo: 'França (a editora)',
  categoria: 'modernos',
  linu: true,
  name: 'Qomet',
  emoji: '☄️',
  status: 'pronto',
  playable: true,
  year: '2025',
  where: 'criado por Fabrice Puleo; publicado pela editora francesa Gigamic',
  etimologia:
    'A regra e a página da Gigamic não explicam o nome, e não achamos entrevista do autor sobre ele. “Qomet” soa como “comet” (“cometa”, em inglês e em francês “comète”), o que combina com as peças, que são estrelas, e começa com Q, como outros jogos da editora (Quarto, Quixo, Quantik). Mas é só parecença: a origem do nome é incerta. Em português, o jogo usa o nome original.',
  about:
    'O Qomet é um jogo de estratégia para dois, criado por Fabrice Puleo e lançado em 2025 pela Gigamic, a editora francesa de jogos de madeira do Quarto e do Quoridor. Nos Estados Unidos e no Reino Unido, ele chega pela Hachette Boardgames. O tabuleiro vem de um jogo muito antigo: é o da trilha de 12 peças, com três quadrados ligados pelas linhas do meio e pelas diagonais, e o autor pôs uma casa a mais no centro. Mas o objetivo é outro: em vez de fazer três em linha, cada um tenta montar um quadrado com 4 das suas 7 estrelas. A graça está no empurrão: uma estrela que anda pode empurrar outra, até para fora do tabuleiro, e um empurrão descuidado pode montar o quadrado do adversário. Aqui, as estrelas e o tabuleiro são desenhos do app.',
  rules: QOMET_RULES,
  variants: [
    {
      name: 'Trilha de 12 peças (o tabuleiro de origem)',
      where: 'o jogo antigo cujo tabuleiro o Qomet usa, segundo a resenha da Meeple Mountain',
      text: 'No mesmo tabuleiro, sem a casa do centro, cada jogador tem 12 peças e tenta fazer três em linha para tirar uma peça do outro. O Qomet troca as 12 peças por 7 estrelas e os três em linha pelo quadrado. As fontes consultadas não mostram variantes oficiais do Qomet.',
    },
  ],
};

/**
 * Mancalas que são jogos próprios, não “roupas” do oware/Kalah (pedido do dono, 14/10/2026: “quando
 * for outro jogo ou variante ele deve entrar à parte”; a personalização é só cosmética). O bao, com 4
 * fileiras, já está na fila acima e também fica jogável.
 */
// Pallanguzhi: consultados em 15/10/2026 — Mancala World, “Pallankuzhi” (mancala.fandom.com; regras
// adaptadas de uma versão da Wikipédia; primeira descrição: Henry Parker, “Ancient Ceylon”, 1909;
// referências: Murray 1951, Bell 1960, Durai 1928, Balambal Ramaswami 2002, de Voogt 2000; “pal” =
// “muitos” e “kuzhi” = “cova” em tâmil; torneio de mulheres no museu de Tiruchirappalli em 2006) e a
// Wikipédia em inglês, “Pallanguzhi” (nomes em outras línguas da Índia; 12 sementes por cova e
// “pasu” com 6; tabuleiros de madeira, de metal e em forma de peixe; jogado também no Sri Lanka, na
// Malásia, em Trinidad, na Guiana e em Singapura). As duas fontes divergem nos números; o motor segue
// o Mancala World e a regra diz isso.
const PALLANGUZHI_RULES: GameRule[] = [
  { title: 'Tabuleiro', text: 'Duas fileiras de 7 covas, uma para cada jogador, e um lugar para guardar o que cada um captura. No começo, 6 sementes (ou conchas, ou pedrinhas) em cada cova; em algumas regiões, 4 ou 5.' },
  {
    title: 'Semear e continuar',
    text: 'Na vez, pegue as sementes de uma cova sua e deixe uma em cada cova seguinte, no sentido anti-horário, passando para o lado do adversário. Quando a última cai, pegue as sementes da cova logo depois dela e continue semeando. A vez só para quando a mão não acha mais o que pegar.',
  },
  {
    title: 'Capturar',
    text: 'Se a cova logo depois da última semente está vazia, você captura as sementes da cova seguinte a ela, e continua se a próxima tiver sementes. Se as duas covas depois da última estão vazias, você não captura nada e a vez acaba.',
  },
  { title: 'Pasu', text: 'Sempre que uma cova fica com 4 sementes ao receber uma semente sua, essas 4 são suas, na hora. Em tâmil, isso se chama “pasu”.' },
  {
    title: 'Fim',
    text: 'Quem não tem sementes para jogar termina a rodada, e o adversário fica com as que sobraram. No jogo tradicional seguem outras rodadas: cada um enche as covas com o que capturou, e as covas que não dá para encher ficam fechadas. Aqui, para simplificar, a partida tem uma rodada só e vence quem capturou mais.',
  },
];

const PALLANGUZHI: KnowledgeGame = {
  id: 'pallanguzhi',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'tâmeis (sul da Índia e Sri Lanka)',
  categoria: 'semear',
  linu: true,
  name: 'Pallanguzhi',
  emoji: '🐚',
  status: 'pronto',
  playable: true,
  year: 'tradicional (descrito em 1909)',
  where: 'Tamil Nadu e Kerala, no sul da Índia, e o Sri Lanka',
  etimologia:
    'Em tâmil, “pal” quer dizer “muitos” e “kuzhi”, “cova”: “pallanguzhi” é algo como “muitas covas”, um bom nome para um tabuleiro cheio de buracos (Mancala World). O nome também se escreve pallankuzhi, pallanguli ou pallankuli, porque a letra tâmil ழ, que se escreve “zh”, é passada para o nosso alfabeto de vários jeitos. Em outras línguas da Índia, o jogo tem outros nomes, como alaguli mane, em canarês, e vamana guntalu, em telugo.',
  about:
    'O pallanguzhi é a mancala dos tâmeis, o povo do sul da Índia e do norte do Sri Lanka. Foi descrito pela primeira vez por Henry Parker num livro sobre o Ceilão (o atual Sri Lanka) de 1909. É jogado sobretudo pelas mulheres, e os mais velhos jogam com as crianças, que aprendem a contar. Os tabuleiros podem ser de madeira, de metal ou até em forma de peixe, com sementes de tamarindo ou conchas de búzio. O jeito de semear é diferente do oware: quando a mão esvazia, ela pega a cova seguinte e segue em frente, e uma vez pode dar várias voltas no tabuleiro. Em 2006, o museu do distrito de Tiruchirappalli organizou um torneio de pallanguzhi para mulheres. Na loja do app, a coleção “Mancala indiano” veste o tabuleiro com metal dourado e búzios, como os do sul da Índia.',
  rules: PALLANGUZHI_RULES,
  variants: [
    {
      name: '12 sementes (Wikipédia)',
      where: 'a versão da Wikipédia em inglês de hoje, dada lá sem fonte citada',
      text: 'Doze sementes por cova, menos na do meio de cada fileira, que começa com 2; a cova que chega a 6 é capturada (o “pasu”). A Wikipédia em inglês dá essa versão sem citar fonte; a versão padrão do app segue o Mancala World (6 sementes, “pasu” com 4). Dá para jogar no app: escolha a variante “12 sementes”.',
      jogavel: '12',
    },
    {
      name: 'Em rodadas, com covas fechadas',
      where: 'o jogo tradicional',
      text: 'No fim de cada rodada, cada um enche as suas covas com o que capturou. Quem não consegue encher uma cova a deixa fechada na rodada seguinte, e o jogo acaba quando alguém não consegue encher nenhuma.',
    },
  ],
};
// Toguz korgool: consultados em 15/10/2026 — Mancala World, “Toguz Kumalak” (mancala.fandom.com:
// nomes cazaque e quirguiz e o que querem dizer; o 9 como número de sorte na Ásia Central; primeira
// descrição no Ocidente por N. N. Pantusov, 1906; tabuleiros de pedra mais antigos do século XVI;
// regras unificadas em 1949, no Cazaquistão; primeiro Mundial em Astana, 2010; regras completas da
// tuz); Wikipédia em inglês, “Toguz korgool” (“nove bolinhas de esterco de ovelha”; federação em
// Bishkek; Jogos Mundiais Nômades); UNESCO, “Traditional intelligence and strategy game:
// Togyzqumalaq, Toguz Korgool, Toguz Kumalak” (ich.unesco.org, inscrito em dezembro de 2020, a
// pedido do Cazaquistão, do Quirguistão e da Turquia). As fontes divergem no ano da federação
// quirguiz (1993 na Wikipédia, 2003 no Mancala World); o texto não dá o ano.
const TOGUZ_KORGOOL_RULES: GameRule[] = [
  {
    title: 'Tabuleiro',
    text: 'Duas fileiras de 9 covas e, entre elas, os dois “kazans” (caldeirões), onde cada um guarda o que captura. No começo, 9 bolinhas em cada cova: 162 ao todo. Aqui os kazans ficam nas pontas do tabuleiro.',
  },
  {
    title: 'Semear',
    text: 'Na vez, pegue todas as bolinhas de uma cova sua e solte uma por cova, no sentido anti-horário. A primeira cai na própria cova que você esvaziou; só se ela tinha uma bolinha só, essa vai para a cova seguinte. A semeadura não passa pelos kazans.',
  },
  { title: 'Capturar', text: 'Se a última bolinha cai numa cova do adversário e ela fica com um número par de bolinhas, todas vão para o seu kazan.' },
  {
    title: 'A tuz',
    text: 'Se a última bolinha deixa uma cova do adversário com exatamente 3, a cova vira a sua “tuz”: tudo o que cair nela daí em diante é seu, e o adversário não pode mais jogar com ela. Cada um só faz uma tuz por partida; a nona cova do adversário nunca vira tuz; e você não pode fazer a tuz na cova de mesmo número da tuz dele.',
  },
  {
    title: 'Fim',
    text: 'Quando quem tem a vez não tem bolinha em nenhuma cova sua, o jogo acaba e cada um fica com as bolinhas que sobraram do seu lado. Vence quem tiver mais no kazan e na tuz: mais de 81. Com 81 a 81, empata.',
  },
];

const TOGUZ_KORGOOL: KnowledgeGame = {
  id: 'toguz-korgool',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'quirguizes e cazaques (Ásia Central)',
  categoria: 'semear',
  linu: true,
  name: 'Toguz korgool',
  emoji: '🏔️',
  status: 'pronto',
  playable: true,
  year: 'tradicional (tabuleiros de pedra do século XVI)',
  where: 'Quirguistão, Cazaquistão e outros países da Ásia Central',
  etimologia:
    '“Toguz” é “nove” nas línguas turcas da Ásia Central, por causa das 9 covas de cada lado e das 9 bolinhas em cada cova. Em quirguiz, o jogo é o toguz korgool, “nove bolinhas de esterco de ovelha” (Wikipédia); em cazaque, togyz kumalak, que o Mancala World traduz como “nove pedrinhas”. O nove era um número de sorte para os povos da Ásia Central. A palavra “tuz” quer dizer “sal” em quirguiz; o nome cazaque, “tuzdyk”, quer dizer “lugar sagrado” (Mancala World).',
  about:
    'O toguz korgool é a grande mancala dos povos da Ásia Central: quirguizes, cazaques e vizinhos, de Afeganistão e Mongólia até a Rússia. Os tabuleiros de pedra mais antigos são do século XVI. No Ocidente, foi descrito pela primeira vez por Nikolai Pantusov, em 1906. As regras foram unificadas no Cazaquistão em 1949 e, desde a queda da União Soviética, o jogo virou esporte nacional, com federações, campeonatos e mundiais (o primeiro foi em Astana, em 2010); também faz parte dos Jogos Mundiais Nômades. Em 2020, a UNESCO o pôs na lista do Patrimônio Cultural Imaterial da Humanidade, junto com o mangala da Turquia. A peça que deixa o jogo diferente é a “tuz”: uma cova do adversário que vira sua para sempre. Na loja do app, a coleção “Mancala centro-asiático” veste o tabuleiro com madeira clara e pedrinhas, como os tabuleiros da Ásia Central.',
  rules: TOGUZ_KORGOOL_RULES,
  variants: [
    {
      name: 'Bestemshi e kozdatu',
      where: 'Cazaquistão, jogos de criança',
      text: 'Antes de 1949 havia muitas variantes. Duas delas, o bestemshi e o kozdatu, ainda são jogadas pelas crianças (Mancala World). As fontes consultadas não contam as regras delas.',
    },
    {
      name: 'Mangala, da Turquia',
      where: 'inscrito junto na UNESCO, em 2020',
      text: 'Outro jogo da mesma família, de duas fileiras de covas, inscrito na UNESCO no mesmo pedido. As regras são outras, e ele ainda não está no app.',
    },
  ],
};
// Sungka: consultado em 15/10/2026 o Mancala World, “Sungka” (mancala.fandom.com): primeira descrição
// pelo jesuíta José Sanchez, num dicionário da língua bisaia (cebuano) de 1692, com o nome “kunggit”
// (os aklanon ainda o chamam assim), num tabuleiro de madeira em forma de barco, com conchas;
// tradicionalmente jogo de mulheres; as palavras bahay, ulo/inay, sigay, patay, taktak e sunog;
// primeiro lance simultâneo; sentido horário com o depósito à esquerda, ou anti-horário com o
// depósito à direita segundo o Instituto Histórico Nacional das Filipinas; torneio no festival
// Kadayawan, em Davao; uso para adivinhação e a crença de que jogar dentro de casa faz a casa pegar
// fogo; rodadas com casinhas “queimadas”; o “sungka de pauzinhos”. Não achamos de onde vem a palavra
// “sungka”.
const SUNGKA_RULES: GameRule[] = [
  {
    title: 'Tabuleiro',
    text: 'Um tabuleiro comprido de madeira com duas fileiras de 7 casinhas (“bahay”, casa) e um depósito grande em cada ponta (“ulo”, cabeça, ou “inay”, mãe). Em cada casinha, 7 conchas (“sigay”). Aqui, cada um tem o depósito à sua direita e se semeia no sentido anti-horário.',
  },
  {
    title: 'Semear',
    text: 'Na vez, esvazie uma casinha sua e solte uma concha em cada cova seguinte, passando pelo seu depósito, mas pulando o do adversário.',
  },
  {
    title: 'Onde cai a última',
    text: 'No seu depósito: você joga de novo. Numa casinha que já tinha conchas, de qualquer lado: pegue todas e continue semeando. Numa casinha vazia: a vez acaba (“patay”, morto); se a casinha é sua e a da frente tem conchas, você captura as da frente e a sua (“taktak”).',
  },
  {
    title: 'Fim',
    text: 'Quem não tem conchas para jogar passa a vez. O jogo acaba quando não sobra concha nas casinhas, e vence quem guardou mais no depósito. Muitas vezes se joga em rodadas, e as casinhas que ninguém consegue encher ficam “queimadas” (“sunog”); aqui, a partida tem uma rodada só.',
  },
  {
    title: 'O primeiro lance',
    text: 'No sungka de verdade, os dois jogadores fazem o primeiro lance ao mesmo tempo, para equilibrar a partida, e quem termina primeiro começa o segundo. Aqui, para simplificar, quem começa é sorteado e as vezes se alternam desde o primeiro lance.',
  },
];

const SUNGKA: KnowledgeGame = {
  id: 'sungka',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'filipinos',
  categoria: 'semear',
  linu: true,
  name: 'Sungka',
  emoji: '⛵',
  status: 'pronto',
  playable: true,
  year: 'tradicional (descrito em 1692)',
  where: 'Filipinas, e hoje onde há filipinos pelo mundo',
  etimologia:
    'Não achamos de onde vem a palavra “sungka”. A mais antiga descrição do jogo, de 1692, o chama de “kunggit”, nome que os aklanon, da ilha de Panay, ainda usam (Mancala World). O tabuleiro se chama “sungkaan” ou “sungkahan”, as casinhas, “bahay” (casa), e o depósito, “ulo” (cabeça) ou “inay” (mãe).',
  about:
    'O sungka é a mancala das Filipinas. A descrição mais antiga é de 1692: o jesuíta José Sanchez, que chegou às Filipinas em 1643, o registrou num dicionário da língua bisaia como “kunggit”, jogado com conchas num tabuleiro de madeira em forma de barco. Tradicionalmente é um jogo das mulheres, e hoje há torneios nas Filipinas e onde vivem filipinos, como o do festival Kadayawan, em Davao. O sungka tem duas marcas: a mão que não para (quando a última concha cai numa casinha com conchas, pega todas e segue) e o primeiro lance feito pelos dois jogadores ao mesmo tempo. Também já foi usado para adivinhar o futuro, e há a crença de que jogá-lo dentro de casa faz a casa pegar fogo; por isso se joga ao ar livre. Na loja do app, a coleção “Mancala filipino” veste o tabuleiro de madeira entalhada em forma de barco, com búzios.',
  rules: SUNGKA_RULES,
  variants: [
    {
      name: 'No sentido horário',
      where: 'o jeito mais comum, segundo o Mancala World',
      text: 'Semeando no sentido horário, cada um fica com o depósito à sua esquerda. O Instituto Histórico Nacional das Filipinas registra também o anti-horário, com o depósito à direita, que é o do app.',
    },
    {
      name: 'Sungka de pauzinhos',
      where: 'filipinos no Canadá, 2012',
      text: 'As conchas não são pegas com a mão, e sim com pauzinhos, como os de comer. Ex-alunos da Universidade Silliman fizeram um campeonato assim no lago Cultus, na Colúmbia Britânica.',
    },
  ],
};

/**
 * Pedido do dono (15/10/2026): “adiciona os jogos que estão em breve e mais 5 e coloca mais 8 jogos em
 * breve”. Os 5 novos a ficar jogáveis:
 */
// Chaturanga: artigo “Chaturanga” da Wikipédia em inglês (história, peças, as três reconstruções do
// gaja, afogado e rei nu segundo al-Adli, chaturaji), verbete “xadrez” do Wikcionário em inglês
// (etimologia) e a variante chaturanga do Fairy-Stockfish (perft da posição com os rajas em e1 e d8),
// consultados em 15/10/2026. Ver `services/chaturanga-engine.ts`.
const CHATURANGA_RULES: GameRule[] = [
  { title: 'Regras reconstruídas', text: 'Nenhum texto antigo traz as regras completas do chaturanga. O que se joga hoje é uma reconstrução moderna, feita a partir do xatranje persa (o jogo que veio dele), de escritores árabes como al-Adli (por volta de 840) e al-Biruni (por volta de 1030) e do historiador H. J. R. Murray (1913). A Wikipédia diz que nem todas as regras são conhecidas com certeza.' },
  { title: 'Tabuleiro e peças', text: 'O tabuleiro é o ashtapada, de 8×8 casas, sem duas cores. Cada lado tem o raja (rei), o mantri (conselheiro), dois gaja (elefantes), dois ashva (cavalos), dois ratha (carros) e oito padati (soldados). Os rajas não ficam frente a frente: o branco começa em e1 e o preto em d8. As brancas começam.' },
  { title: 'Como as peças andam', text: 'O raja anda uma casa em qualquer direção, sem roque. O mantri anda uma casa na diagonal. O ratha anda quantas casas quiser em linha reta, como a torre. O ashva anda como o cavalo do xadrez. O padati anda uma casa para a frente (nunca duas), captura na diagonal e, na última fileira, vira mantri (isso também é um pouco discutido).' },
  { title: 'O gaja: três reconstruções', text: 'O movimento do gaja é o mais incerto, e as fontes divergem. Na mais comum, ele pula duas casas na diagonal, como o alfil do xatranje. Al-Biruni descreve um gaja que anda uma casa para a frente ou uma em qualquer diagonal. E a al-Adli se atribui um gaja que pula duas casas em linha reta. Aqui dá para escolher qualquer um dos três no seletor de variante: o gaja alfil é o padrão, e a escolha fica guardada.' },
  { title: 'Quem vence', text: 'Vence quem der xeque-mate. Segundo al-Adli, quem fica afogado (sem lance, sem estar em xeque) vence, e quem deixa o raja do outro sozinho (o “rei nu”) também vence, a não ser que o outro possa fazer o mesmo no lance seguinte: aí é empate. Algumas fontes dizem que não havia afogamento, porque o raja teria de se mexer e ser capturado.' },
  { title: 'O que este app simplificou', text: 'Aqui, para simplificar, a mesma posição pela terceira vez é empate, e 200 lances sem final também.' },
];

const CHATURANGA: KnowledgeGame = {
  id: 'chaturanga',
  epoca: 'antigos',
  regiao: 'asia',
  povo: 'indianos',
  categoria: 'guerra',
  linu: true,
  name: 'Chaturanga',
  emoji: '🐘',
  status: 'pronto',
  playable: true,
  year: 'século VI (Império Gupta); o nome aparece no Harshacharita, de Bana, por volta de 625',
  where: 'norte da Índia',
  etimologia:
    'Em sânscrito, चतुरङ्ग (caturaṅga) vem de catúr, “quatro”, e áṅga, “membro”: “o de quatro membros”, as quatro divisões do exército indiano, elefantes, carros, cavalaria e infantaria. A palavra passou ao persa médio como čatrang, ao árabe como šaṭranj e, pela Península Ibérica, ao galego-português xedrez, de onde vem o nosso “xadrez” (Wikcionário).',
  about:
    'O chaturanga é o antepassado do xadrez, do xatranje persa, do xiangqi, do shogi e do makruk. A referência clara mais antiga vem do norte da Índia, do Império Gupta, no século VI. O nome aparece pela primeira vez no Harshacharita, do poeta Banabhatta, por volta de 625. Em poemas épicos, “chaturanga” queria dizer “exército”, e as peças são as quatro partes dele: elefantes, carros, cavalaria e infantaria, comandadas pelo rei e pelo conselheiro. Do jogo indiano, as regras chegaram até nós sobretudo por escritores árabes e persas, que conheciam o xatranje; por isso, o chaturanga que se joga hoje é uma reconstrução, e o movimento do elefante é o ponto em que as fontes mais divergem.',
  rules: CHATURANGA_RULES,
  variants: [
    {
      name: 'Gaja de al-Biruni (uma casa para a frente ou na diagonal)',
      where: 'a descrição de al-Biruni, do séc. XI, segundo a Wikipédia em inglês',
      text: 'O gaja anda uma casa para a frente ou uma em qualquer diagonal, como o general de prata do shogi. Dá para jogar no app: escolha a variante “Gaja de al-Biruni”.',
      jogavel: 'biruni',
    },
    {
      name: 'Gaja de al-Adli (duas casas reto, pulando)',
      where: 'o movimento que se atribui a al-Adli, segundo a Wikipédia em inglês',
      text: 'O gaja pula duas casas em linha reta, por cima da casa do meio. Dá para jogar no app: escolha a variante “Gaja de al-Adli”.',
      jogavel: 'adli',
    },
    {
      name: 'Chaturaji',
      where: 'Índia',
      text: 'Uma versão para quatro jogadores. Nela, a peça chamada “barco” anda como o alfil, pulando duas casas na diagonal.',
    },
    {
      name: 'Xatranje (shatranj)',
      where: 'Pérsia e o mundo árabe',
      text: 'O sucessor direto: o elefante é o alfil (duas casas na diagonal, pulando), o conselheiro é o fers (uma casa na diagonal), e quem deixa o rei do outro sozinho vence. Dele veio o xadrez europeu.',
    },
  ],
};
// Yut nori: consultados em 15/10/2026 o Ministério da Cultura, Esportes e Turismo da Coreia (página
// infantil “윷놀이”, mcst.go.kr, que cita o 한국세시풍속사전, do Museu Folclórico Nacional, e o
// 한국민족문화대백과, da Academia de Estudos Coreanos) e a Wikipédia em inglês (“Yutnori”, que tem avisos
// de falta de fontes: aqui só usamos dela o que confere com a fonte coreana ou é regra conhecida).
// Ver `services/yut-engine.ts`.
const YUT_NORI_RULES: GameRule[] = [
  { title: 'Varetas, tabuleiro e peças', text: 'Joga-se com 4 varetas (yut), cada uma com um lado chato e um redondo, num tabuleiro (malpan) de 29 casas: 20 em volta de um quadrado e 9 nas duas diagonais, que se cruzam no meio. Cada lado tem 4 peças, os mal (“cavalos”). Ganha quem fizer as 4 peças darem a volta e saírem pelo 참먹이, a última casa.' },
  { title: 'Os cinco resultados', text: 'Conta-se quantas varetas caem com o lado chato para cima: 1 é do (anda 1 casa), 2 é gae (2), 3 é geol (3), 4 é yut (4) e nenhuma é mo (5). Yut e mo dão outro lançamento, e os resultados se juntam; depois, cada um é usado inteiro numa peça (um geol não vira do e gae).' },
  { title: 'Atalhos', text: 'O caminho comum é a volta inteira. Mas a peça que para num canto pode cortar caminho pela diagonal, e a que para no meio pode seguir direto para o 참먹이. No app, quando há essa escolha, aparecem dois pontos para você escolher.' },
  { title: 'Juntar e capturar', text: 'Parar numa casa com uma peça sua junta as duas (업기, “levar nas costas”), e elas andam juntas: mais rápido, mas, se forem capturadas, voltam as duas. Parar numa casa com peças do adversário as captura: elas voltam para o começo, e quem capturou lança de novo.' },
  { title: 'Sair', text: 'A peça sai passando do 참먹이: parar exatamente nele ainda não basta. Ganha quem tirar as 4 peças primeiro.' },
  { title: 'O que este app simplificou', text: 'Aqui, cada vareta cai com o lado chato para cima metade das vezes (varetas de verdade não caem assim, e o resultado muda com a forma delas), e jogam dois, cada um com 4 peças; na Coreia é comum jogar em times.' },
];

const YUT_NORI: KnowledgeGame = {
  id: 'yut-nori',
  epoca: 'tradicionais',
  regiao: 'asia',
  povo: 'Coreia',
  categoria: 'sorte',
  linu: true,
  name: 'Yut nori',
  emoji: '🥢',
  status: 'pronto',
  playable: true,
  year: 'jogado já no tempo de Baekje, segundo o governo coreano; muito popular no tempo de Goryeo',
  where: 'Coreia',
  etimologia:
    '윷놀이, yunnori ou yut nori, quer dizer “brincadeira do yut”: 윷 (yut) são as varetas, e 놀이 (nori), “brincadeira, jogo”. As peças se chamam 말 (mal), “cavalo”, segundo a Wikipédia em inglês.',
  about:
    'O yut nori é o jogo de família do Ano-Novo Lunar coreano (Seollal) e da primeira lua cheia do ano (Jeongwol Daeboreum). Segundo o Ministério da Cultura da Coreia, ele já era jogado no reino de Baekje e era tão querido no tempo de Goryeo que virou tema de poemas; a tradição diz que nasceu dos nomes de cargos do antigo reino de Buyeo, e que as 29 casas do tabuleiro imitam a Ursa Maior girando em volta da Estrela Polar. As varetas podem ser compridas, de madeira (jangjak yut), ou pequenas como castanhas, jogadas numa tigela (bam yut). Jogam pessoas de todas as idades, em times, e o yut também foi usado para tirar a sorte do ano, como contam a Wikipédia e o Dongguksesigi, um livro de costumes coreanos.',
  rules: YUT_NORI_RULES,
  variants: [
    {
      name: 'Back-do (빽도)',
      where: 'regra da casa, muito comum hoje',
      text: 'Uma das varetas tem uma marca: se ela for a única a cair com o lado chato para cima, a peça anda uma casa para trás. A Wikipédia em inglês conta ainda outras marcas combinadas antes da partida, que levam a peça direto ao meio ou a um canto.',
    },
    {
      name: 'Em times e em várias partidas',
      where: 'Coreia, nas festas',
      text: 'Joga-se em dois times, que se revezam nas varetas, e muitas vezes em melhor de três ou mais partidas. Há grupos que não dão o lançamento extra do yut e do mo.',
    },
  ],
};
// Dara: artigo “Dara (game)” da Wikipédia em inglês (povos, nomes, tabuleiro, as duas fases, linhas de
// três, quatro em linha proibido, fim), consultado em 15/10/2026. Ver `services/dara-engine.ts`.
const DARA_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'São 30 casas, em 5 fileiras de 6. No Níger, o tabuleiro é feito cavando 30 buracos na areia, e as peças são caroços de fruta de um lado e pauzinhos do outro. Cada jogador tem 12 peças.' },
  { title: 'Primeiro, colocar', text: 'Cada um põe uma peça por vez numa casa vazia, até as 24 estarem no tabuleiro. As linhas feitas nessa fase não contam; no Níger, nem é permitido fazê-las, e é essa a regra daqui.' },
  { title: 'Depois, andar e fazer três', text: 'Na sua vez, você anda com uma peça para uma casa vizinha vazia, reto (não na diagonal). Quem forma uma linha de exatamente três peças suas, na horizontal ou na vertical, tira uma peça do adversário que não esteja numa linha. Quatro ou mais em linha não vale. Duas linhas no mesmo lance tiram só uma peça.' },
  { title: 'Quem vence', text: 'Perde quem não consegue mais fazer linha, por exemplo quando fica com só duas peças.' },
  { title: 'O que este app simplificou', text: 'Aqui, para simplificar: se todas as peças do adversário estão em linha, você tira qualquer uma; quem fica sem lance perde; e a mesma posição pela terceira vez, ou 200 lances andando, é empate. A fonte não fala desses casos.' },
];

const DARA: KnowledgeGame = {
  id: 'dara',
  epoca: 'tradicionais',
  regiao: 'africa',
  povo: 'dakarkari (Nigéria), zarma (Níger) e Burkina Faso',
  categoria: 'linha',
  linu: true,
  name: 'Dara',
  emoji: '🪨',
  status: 'pronto',
  playable: true,
  year: 'inventado no século XIX ou antes',
  where: 'Nigéria, Níger e Burkina Faso, na África Ocidental',
  etimologia:
    'O jogo tem vários nomes: dara ou derrah; “doki” em hauçá, que quer dizer “cavalo”; e “dili” entre os zarma do Níger (Wikipédia em inglês). As fontes consultadas não explicam de onde vem a palavra “dara”, nem por que ele se chama “cavalo” em hauçá. Em português, não tem nome próprio: usa-se “dara”.',
  about:
    'O dara é um jogo de colocar e andar peças da África Ocidental, da família de jogos que, como a trilha, premiam quem forma três em linha. É jogado pelos dakarkari, na Nigéria, pelos zarma, no Níger, e também em Burkina Faso, e foi inventado no século XIX ou antes. No Níger, o tabuleiro costuma ser feito na hora, cavando 30 buracos na areia, com caroços de uma palmeira (a doum) para um lado e pauzinhos para o outro. Ele é parente próximo do wali e da dama tuaregue. O que o torna difícil é a regra do “exatamente três”: uma linha de quatro não vale, e as peças que estão em linha ficam protegidas.',
  rules: DARA_RULES,
  variants: [
    {
      name: 'Linhas na colocação',
      where: 'a regra geral citada pela Wikipédia, fora do Níger',
      text: 'Em vez de proibir as linhas na fase de colocar (como no Níger), elas são permitidas, mas não tiram peça nenhuma.',
    },
    {
      name: 'Wali e dama tuaregue',
      where: 'África Ocidental e o Saara',
      text: 'Jogos parentes do dara, citados pela Wikipédia como muito próximos dele.',
    },
  ],
};
// Jogo das Amazonas: artigo “Game of the Amazons” da Wikipédia em inglês (inventor, publicação, regras,
// computador, complexidade) e a variante amazons do Fairy-Stockfish (posição inicial e perft),
// consultados em 15/10/2026. Ver `services/amazonas-engine.ts`.
const AMAZONAS_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Joga-se num tabuleiro de 10×10, o de damas internacionais. Cada jogador tem 4 amazonas, que andam como a dama do xadrez. As brancas começam em d1, g1, a4 e j4, e as pretas em d10, g10, a7 e j7. As brancas começam. Também é preciso ter marcadores para as flechas.' },
  { title: 'Na sua vez: andar e atirar', text: 'Você anda com uma das suas amazonas quantas casas quiser, em linha reta ou na diagonal, sem pular nada. Depois, da casa onde ela parou, ela atira uma flecha do mesmo jeito, como a dama. A casa da flecha fica queimada para sempre: ninguém mais passa nem para nela. A flecha pode cair até na casa de onde a amazona saiu.' },
  { title: 'Quem vence', text: 'Não há captura. O tabuleiro vai se fechando, e perde quem não consegue mais andar: o último a jogar vence. Por isso, não existe empate.' },
];

const AMAZONAS: KnowledgeGame = {
  id: 'amazonas',
  epoca: 'contemporaneos',
  regiao: 'americas',
  povo: 'argentinos',
  categoria: 'cerco',
  linu: true,
  name: 'Jogo das Amazonas',
  emoji: '🏹',
  status: 'pronto',
  playable: true,
  year: '1988; publicado em dezembro de 1992',
  where: 'Argentina',
  etimologia:
    'O nome original é espanhol, “El Juego de las Amazonas”, o título com que o jogo saiu na revista argentina El Acertijo, em 1992; em inglês ficou “Game of the Amazons”, ou só “Amazons”. As peças, que andam como a dama do xadrez, são as amazonas. As fontes consultadas não explicam por que Zamkauskas escolheu esse nome.',
  about:
    'O Jogo das Amazonas foi inventado em 1988 pelo argentino Walter Zamkauskas. Saiu em espanhol na revista argentina de enigmas El Acertijo, em dezembro de 1992, e uma tradução para o inglês, de Michael Keller, saiu na revista World Game Review em janeiro de 1994. Keller fez também o primeiro programa de computador que joga Amazonas, em 1994. É um jogo de território: as amazonas não capturam nada, mas cada flecha fecha uma casa, e o tabuleiro se divide em áreas. Por isso o jogo virou objeto de estudo da teoria dos jogos combinatórios: os finais simples já são NP-difíceis, e o jogo generalizado é PSPACE-completo. Há torneios de Amazonas entre programas na Computer Olympiad.',
  rules: AMAZONAS_RULES,
  variants: [
    {
      name: 'Fim pela contagem do território',
      where: 'jeito comum de terminar a partida',
      text: 'Quando cada amazona já está isolada na própria área, jogar até o fim é cansativo, e os jogadores costumam parar e contar: vence quem tem mais lances guardados no próprio território. Cuidado com o “território defeituoso”, que tem menos lances que casas vazias, como as três casas a1, b2 e c1 com a amazona em b2. Neste app, joga-se até o fim.',
    },
    {
      name: 'Partidas entre programas',
      where: 'Computer Olympiad',
      text: 'O jogo é disputado entre programas de computador na Computer Olympiad. Com tantos lances possíveis por vez (2176 só no primeiro), os programas não conseguem olhar fundo, e por isso medem o território: quem chega antes a cada casa vazia. O Linu também joga assim.',
    },
  ],
};
// Lasca: artigo “Lasca” da Wikipédia em inglês (história, colunas, captura, vitória, jogos parentes) e
// a página do Lasca no MindSports (mindsports.nl, “609 lasca”: 11 peças, sequência de capturas, escolha
// livre, coroação que encerra o lance, a divergência sobre pular a mesma coluna duas vezes),
// consultados em 15/10/2026. Ver `services/lasca-engine.ts`.
const LASCA_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro de 7×7, com só as 25 casas escuras em uso (os cantos são escuros). Cada lado tem 11 soldados, nas três fileiras do seu lado; a fileira do meio começa vazia. As brancas começam. O tabuleiro fica cheio, e o jogo é apertado desde o primeiro lance.' },
  { title: 'Andar', text: 'O soldado anda uma casa na diagonal para a frente, para uma casa vazia. O oficial anda uma casa na diagonal para a frente ou para trás (não “voa” como a dama brasileira).' },
  { title: 'Capturar em colunas', text: 'Captura-se pulando, na diagonal, uma peça do adversário que esteja colada, caindo na casa vazia logo depois. A peça pulada não sai do tabuleiro: ela fica presa debaixo da peça que pulou, formando uma coluna. Quando se pula uma coluna, leva-se só a peça de cima; o resto fica onde estava. Quem manda na coluna é a peça de cima: ela diz a cor e se a coluna anda como soldado ou como oficial. Uma peça presa pode ser libertada, se a de cima for capturada.' },
  { title: 'Obrigatório e em sequência', text: 'Capturar é obrigatório. Quem começa a pular continua pulando enquanto der. Entre capturas diferentes, a escolha é livre: não existe a “lei da maioria” das damas brasileiras. As fontes divergem sobre poder pular a mesma coluna duas vezes no mesmo lance; aqui pode, como no aplicativo do MindSports.' },
  { title: 'Oficial e fim', text: 'O soldado que chega à última fileira vira oficial, e o lance acaba ali, mesmo no meio de uma captura. Perde quem não tem mais lance: sem peças ou com todas presas. A mesma posição pela terceira vez é empate.' },
];

const LASCA: KnowledgeGame = {
  id: 'lasca',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'alemães (Emanuel Lasker)',
  categoria: 'guerra',
  linu: true,
  name: 'Lasca',
  emoji: '🗼',
  status: 'pronto',
  playable: true,
  year: '1911',
  where: 'criado por Emanuel Lasker; vendido em caixas na Europa e nos Estados Unidos',
  etimologia:
    'O nome vem do sobrenome do inventor, o enxadrista alemão Emanuel Lasker: o jogo também é chamado de “Laska” e “Laskers” (Wikipédia em inglês). Em português, ficou o nome original, “Lasca”.',
  about:
    'O Lasca foi inventado por Emanuel Lasker, o segundo campeão mundial de xadrez, que defendeu o título de 1894 a 1921. Em 1911, caixas com o jogo foram vendidas na Europa e nos Estados Unidos. É uma dama “de colunas”: Lasker partiu das damas inglesas (as anglo-americanas) e da captura do bashni, um jogo russo em que as peças capturadas não saem do tabuleiro, ficam presas embaixo de quem capturou. Ele também diminuiu o tabuleiro para 7×7. Por causa das colunas, nenhuma peça morre de vez: uma peça presa pode voltar ao jogo quando a de cima é capturada, e uma coluna grande pode mudar de dono várias vezes na mesma partida.',
  rules: LASCA_RULES,
  variants: [
    {
      name: 'Bashni',
      where: 'Rússia',
      text: 'O mais antigo dos jogos de damas de colunas, de onde Lasker tirou a captura que deixa as peças presas. Ele usa o tabuleiro e as regras das damas russas (shashki), com outro jeito de capturar.',
    },
    {
      name: 'Emergo',
      where: 'jogo moderno da mesma família',
      text: 'Outro jogo de damas de colunas, citado pela Wikipédia ao lado do Lasca e do bashni.',
    },
  ],
};

/** E mais 8 na fila, só nome/emoji. */
const PATOLLI: KnowledgeGame = { id: 'patolli', name: 'Patolli', emoji: '🫘', status: 'em breve' };
const PULUC: KnowledgeGame = { id: 'puluc', name: 'Puluc', emoji: '🌽', status: 'em breve' };
const SHUT_THE_BOX: KnowledgeGame = { id: 'shut-the-box', name: 'Fecha a caixa (Shut the box)', emoji: '📦', status: 'em breve' };
const CONNECT6: KnowledgeGame = { id: 'connect6', name: 'Connect6', emoji: '6️⃣', status: 'em breve' };
const MAHJONG: KnowledgeGame = { id: 'mahjong', name: 'Mahjong', emoji: '🀄', status: 'em breve' };
const TAB: KnowledgeGame = { id: 'tab', name: 'Tâb', emoji: '🐪', status: 'em breve' };
const DAMEO: KnowledgeGame = { id: 'dameo', name: 'Dameo', emoji: '⬛', status: 'em breve' };
const LUDUS: KnowledgeGame = { id: 'ludus-latrunculorum', name: 'Ludus latrunculorum', emoji: '🏛️', status: 'em breve' };

export const KNOWLEDGE_GAMES: KnowledgeGame[] = [
  DAMAS,
  XADREZ,
  QUORIDOR,
  ABALONE,
  OCTI,
  HNEFATAFL,
  MOINHO,
  CONECTA4,
  OWARE,
  REVERSI,
  GO,
  GOMOKU,
  VELHA,
  FANORONA,
  KALAH,
  XIANGQI,
  GAMAO,
  DAMAS_CHINESAS,
  DOMINO,
  SHOGI,
  ONCA,
  BAGH_CHAL,
  MU_TORERE,
  KONANE,
  HEX,
  PONTINHOS,
  ALQUERQUE,
  JANGGI,
  MAKRUK,
  NIM,
  UR,
  SENET,
  PACHISI,
  HALMA,
  RAPOSA_GANSOS,
  SURAKARTA,
  BAO,
  LINHAS_DE_ACAO,
  QUARTO,
  QUIXO,
  PYLOS,
  QUANTIK,
  SQUADRO,
  QAWALE,
  QOMET,
  PALLANGUZHI,
  TOGUZ_KORGOOL,
  SUNGKA,
  CHATURANGA,
  YUT_NORI,
  DARA,
  AMAZONAS,
  LASCA,
  PATOLLI,
  PULUC,
  SHUT_THE_BOX,
  CONNECT6,
  MAHJONG,
  TAB,
  DAMEO,
  LUDUS,
];
