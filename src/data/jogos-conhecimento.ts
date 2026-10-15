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
export type EpocaJogo = 'antigos' | 'medievais' | 'modernos' | 'contemporaneos' | 'tradicionais';
export const EPOCAS: { id: EpocaJogo; nome: string }[] = [
  { id: 'antigos', nome: 'Antiguidade (antes de 500)' },
  { id: 'medievais', nome: 'Idade Média (500 a 1500)' },
  { id: 'modernos', nome: 'Séculos XVI a XIX' },
  { id: 'contemporaneos', nome: 'Século XX' },
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
  about:
    'As damas descendem do alquerque: um jogo árabe (quirkat, também chamado al-qirq), jogado num tabuleiro 5×5, já citado no livro "Kitab al-Aghani", do século X. Os mouros levaram o alquerque para a Espanha, onde as regras aparecem no "Libro de los juegos", de Alfonso X, no século XIII. Por volta do século XII, provavelmente no sul da França, alguém pôs as peças do alquerque no tabuleiro de xadrez (8×8) e as prendeu às diagonais: nasceu o "fierges", depois chamado "jeu de dames" (o jogo das damas). No século XVI, a França tornou a captura obrigatória, virando o "jeu force".',
  rules: DAMAS_RULES,
  variants: [
    {
      name: 'Damas inglesas/americanas (English draughts / checkers)',
      where: 'Reino Unido e Estados Unidos',
      text: 'Tabuleiro 8×8, 12 peças por jogador. A peça comum só captura para a frente. A dama captura uma casa de cada vez (não "voa" por várias), mas pode andar e capturar para trás também. A captura não é obrigatória: quem joga escolhe qual captura fazer, entre as possíveis.',
    },
    {
      name: 'Damas internacionais (International draughts)',
      where: 'criado por um polonês anônimo no século XVIII; popularizado nos Países Baixos',
      text: 'Tabuleiro 10×10, 20 peças por jogador. A peça comum captura para a frente E para trás. A dama "voa": anda e captura várias casas de uma vez na diagonal, sem precisar parar logo depois da peça capturada. A captura é obrigatória, e tem que ser sempre a que captura o MAIOR número de peças possível (a "regra da maioria").',
    },
  ],
  board: { size: 8, rows: 8, dark: '#334155', light: '#E2E8F0', a: '#1E293B', b: '#F8FAFC' },
};

const QUORIDOR_RULES: GameRule[] = [
  { title: 'Tabuleiro e objetivo', text: 'Tabuleiro 9×9. Cada jogador começa no meio da fileira do seu lado e precisa ser o primeiro a chegar a qualquer casa da fileira oposta.' },
  { title: 'Na sua vez', text: 'Você faz UMA coisa: anda com a sua peça uma casa (na horizontal ou vertical, nunca na diagonal de cara) ou coloca uma parede.' },
  { title: 'Saltar o adversário', text: 'Se a peça do adversário estiver colada à sua, você pode saltar por cima dela, caindo na casa logo depois. Se essa casa estiver bloqueada por parede ou pela borda do tabuleiro, você salta na diagonal, para um dos lados.' },
  { title: 'Paredes', text: 'Cada jogador tem 10 paredes (no 2 jogadores). Uma parede ocupa a borda de 2 casas vizinhas, trava a passagem por ali e não pode se cruzar nem se sobrepor a outra. A única regra que vale sempre: nenhuma parede pode fechar de vez o último caminho de QUALQUER jogador até a chegada dele.' },
];

const QUORIDOR: KnowledgeGame = {
  id: 'quoridor',
  epoca: 'contemporaneos',
  regiao: 'europa',
  povo: 'França',
  categoria: 'modernos',
  name: 'Quoridor',
  emoji: '🧱',
  status: 'pronto',
  playable: true,
  year: '1997',
  where: 'criado pelo designer francês Mirko Marchesi; publicado pela Gigamic (França)',
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
  name: 'Octi (octógono fantástico)',
  emoji: '🔷',
  status: 'pronto',
  playable: true,
  year: '1999',
  where: 'criado pelo designer americano Donald Green; publicado pela The Great American Trading Company (EUA)',
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
  about:
    'O ancestral mais antigo conhecido do xadrez é o chaturanga, jogo indiano documentado já no século VI, cujo nome (em sânscrito, "quatro membros" ou "quatro divisões") remete às quatro armas de um exército antigo — infantaria, cavalaria, elefantes e carros de guerra, que deram origem ao peão, cavalo, bispo e torre de hoje. O jogo chegou à Pérsia sassânida por volta do ano 600, onde passou a se chamar "chatrang"; depois da conquista árabe da Pérsia, sem os sons "ch" e "ng" do árabe, o nome virou "shatranj". A expressão persa "Shāh Māt!" ("o rei está desamparado/encurralado"), dita quando o rei era atacado sem conseguir escapar, é a origem da palavra "xeque-mate". Pelo mundo árabe, o jogo chegou à Europa pela Espanha muçulmana (Al-Andalus) e pela Sicília, por volta do século X. As regras foram mudando ao longo da Idade Média até ganharem a forma de hoje na Espanha: a dama e o bispo ganharam o movimento atual (bem mais forte que no shatranj) entre 1475 e 1500, no reino de Valência — o poema catalão "Scachs d\'amor" (Valência, 1475) é o primeiro documento conhecido com a dama já se movendo como hoje. A federação internacional que organiza o xadrez de competição, a FIDE (Fédération Internationale des Échecs), foi fundada em Paris em 20 de julho de 1924.',
  rules: XADREZ_RULES,
  variants: [
    {
      name: 'Xadrez960 / Fischer Random (Chess960)',
      where: 'apresentado por Bobby Fischer em Buenos Aires, Argentina, em 19/06/1996',
      text: 'As peças da fileira de trás começam embaralhadas (sorteadas entre 960 posições possíveis, daí o nome), sempre respeitando duas regras — o rei fica entre as duas torres, e os bispos ficam em casas de cores diferentes. A ideia de Fischer era valorizar a criatividade durante a partida, em vez da memorização de aberturas já estudadas de cor. A ideia de embaralhar a posição inicial já tinha sido proposta muito antes, em 1792, pelo holandês Philip Julius van Zuylen van Nijevelt — Fischer deu as regras que tornam o sorteio justo.',
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
  name: 'Hnefatafl',
  emoji: '🛡️',
  status: 'pronto',
  playable: true,
  year: 'jogado na Escandinávia da Era Viking (documentado do séc. IV ao XII)',
  where: 'Noruega, Suécia, Dinamarca, Islândia, e levado pelos vikings às Ilhas Britânicas, Irlanda e Garðaríki (atual Rússia)',
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
  name: 'Trilha',
  emoji: '⬛',
  status: 'pronto',
  playable: true,
  year: 'achados possíveis desde ~1400 a.C. (Egito, datação contestada); bem documentado desde o Império Romano (séc. I)',
  where: 'possíveis origens no Egito Antigo; popular no Império Romano; auge na Europa medieval (Inglaterra)',
  about:
    'A Trilha (nome mais comum no Brasil; em inglês, "Nine Men\'s Morris" — também chamada de Mill, Merels ou Jogo do Moinho) é um dos jogos de tabuleiro mais antigos com continuidade documentada. A pista mais antiga, mas contestada, é egípcia: tabuleiros gravados nas lajes do telhado do templo de Kurna foram datados por R. C. Bell em cerca de 1400 a.C., mas o pesquisador Friedrich Berger pôs essa data em dúvida — alguns desses desenhos têm cruzes coptas misturadas, o que sugere uma origem bem mais tardia, e por isso ele considera que esses tabuleiros específicos "não podem ser datados" com segurança. Mais sólida é a presença do jogo no Império Romano: o poeta Ovídio já menciona um jogo parecido em "Ars Amatoria" (por volta do ano 8 d.C.), e tabuleiros aparecem gravados em prédios por todo o território romano. O jogo atingiu seu auge na Europa medieval, especialmente na Inglaterra: há tabuleiros gravados nos bancos de pedra da Catedral de Canterbury e da Abadia de Westminster, e um tabuleiro do século XII foi encontrado em escavações em Novgorod, na Rússia. O nome em inglês, "Nine Men\'s Morris", pode vir do latim eclesiástico "merellus" (peça de jogo) — o autor e enxadrista Daniel King descarta qualquer relação com a dança "Morris" inglesa, apesar da semelhança de nome.',
  rules: MOINHO_RULES,
  variants: [
    {
      name: 'Doze Homens Moinho (Twelve Men\'s Morris)',
      where: 'Inglaterra; variante registrada junto com a Trilha clássica',
      text: 'O mesmo tabuleiro de 3 quadrados concêntricos ganha 4 linhas diagonais extras, ligando os cantos dos quadrados entre si. Com mais linhas e mais pontos de cruzamento, cada jogador joga com 12 peças em vez de 9 — daí o nome.',
    },
    {
      name: 'Variante Lasker (Lasker Morris)',
      where: 'criada pelo enxadrista alemão Emanuel Lasker, campeão mundial de xadrez entre 1894 e 1921',
      text: 'Acaba com a separação rígida entre "fase de colocar" e "fase de mover": a partir da primeira jogada, cada jogador pode, na sua vez, OU colocar uma peça nova (enquanto tiver no bolso) OU mover uma peça que já está no tabuleiro — nunca as duas coisas na mesma jogada. Lasker criou essa variante buscando um jogo mais dinâmico que a Trilha clássica, que ele considerava fácil demais de empatar.',
    },
  ],
};

const CONECTA4_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro em pé, 6 fileiras por 7 colunas. Cada jogador tem uma cor (vermelho ou amarelo).' },
  { title: 'Na sua vez', text: 'Escolha uma coluna: a peça cai por gravidade até a casa mais baixa livre dela.' },
  { title: 'Como se vence', text: 'O primeiro a formar 4 peças seguidas da própria cor — na horizontal, vertical ou diagonal — vence. Se o tabuleiro enche sem ninguém conseguir, é empate.' },
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
  about:
    'O Ligue 4 nasceu nos Estados Unidos como Connect Four, o “Connect 4”. Foi lançado pela empresa americana Milton Bradley em fevereiro de 1974, sob licença dos criadores Howard Wexler e Ned Strongin. No começo, sem nenhuma campanha de TV, a empresa tratava o jogo como uma simples "versão vertical de damas" — as vendas só decolaram de verdade a partir de 1979. O jogo já foi completamente resolvido matematicamente: jogando de forma perfeita, quem começa (as peças vermelhas) sempre consegue forçar a vitória, não importa o que o adversário faça.',
  rules: CONECTA4_RULES,
  variants: [
    {
      name: '"Pop Out"',
      where: 'modo oficial, vendido pela própria Hasbro (fabricante atual do jogo) ao lado do modo clássico',
      text: 'Em vez de só deixar a peça cair, na sua vez você também pode "estourar" (remover) uma peça SUA que esteja no fundo de uma coluna — todas as peças acima dela caem uma casa. É um risco calculado: tirar uma peça pode, sem querer, alinhar 4 peças do adversário que estavam por cima.',
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
  about:
    'A Reversi foi publicada na Inglaterra em 1883 por Lewis Waterman — mas a autoria foi disputada na época por John Mollett, que registrou uma versão própria chamada "The Game of Annexation" e alegou que Waterman tinha copiado (ou redescoberto por conta própria) a ideia dele; a disputa nunca foi resolvida por nenhum tribunal ou fonte histórica definitiva. Quase 90 anos depois, em 1971, o japonês Goro Hasegawa patenteou uma versão com posição inicial fixa e regras padronizadas, batizada de "Othello" — publicada no Japão pela empresa Tsukuda Original em 1973, essa foi a versão que se popularizou mundialmente e deu nome ao jogo tal como é jogado hoje (é a versão implementada aqui).',
  rules: REVERSI_RULES,
  variants: [
    {
      name: 'Reversi clássica (1883)',
      where: 'Inglaterra, antes da padronização japonesa de 1971',
      text: 'Na Reversi original, o tabuleiro NÃO começava com as 4 peças centrais já colocadas: os 4 primeiros lances do jogo (2 de cada jogador) eram livres, desde que dentro das 4 casas centrais — o que dava 2 posições de abertura possíveis (uma "ortogonal", outra "oblíqua"), em vez da única posição inicial fixa que o Othello padronizou depois.',
    },
  ],
};

const GO_RULES: GameRule[] = [
  { title: 'Tabuleiro e pedras', text: 'O tabuleiro padrão tem 19×19 linhas; iniciantes costumam jogar no 9×9 ou no 13×13, e é o 9×9 que você joga aqui. As pedras vão nos cruzamentos, o tabuleiro começa vazio e as pretas jogam primeiro. Uma pedra posta nunca mais anda.' },
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
  about:
    'O Go foi inventado na China há mais de 2.500 anos e é considerado o jogo de tabuleiro mais antigo jogado sem interrupção até hoje. Na China ele se chama weiqi, “o jogo de tabuleiro de cercar”; na Coreia, baduk; o nome “Go” vem do japonês “igo”. Na China antiga, era uma das quatro artes essenciais do erudito. O tabuleiro de 19×19 já era o padrão quando o jogo chegou à Coreia, no século V, e ao Japão, no século VII; a arqueologia mostra que antes se jogava num de 17×17. As regras são poucas, mas o jogo é enorme: o número de posições possíveis passa de 10¹⁷⁰, mais que os átomos do universo observável. Em 2016, uma pesquisa da Federação Internacional de Go contou mais de 46 milhões de pessoas que sabem jogar. No mesmo ano, em março, o programa AlphaGo, da DeepMind, venceu Lee Sedol, um dos melhores jogadores do mundo, em quatro das cinco partidas.',
  rules: GO_RULES,
  variants: [
    {
      name: 'Contagem por território (regras japonesas e coreanas)',
      where: 'Japão e Coreia',
      text: 'Em vez de contar as pedras no tabuleiro, cada um conta os pontos vazios que cercou e soma as pedras que capturou (os prisioneiros). Quase sempre dá o mesmo vencedor da contagem por área. O komi nessas regras é de 6,5 pontos.',
    },
    {
      name: 'Partida com handicap',
      where: 'em todo lugar, entre jogadores de força diferente',
      text: 'O jogador mais fraco fica com as pretas e põe duas ou mais pedras no tabuleiro antes de as brancas jogarem, em geral tantas quanto a diferença de graduação entre os dois. Nesse caso o komi costuma ser só de 0,5 ponto, para desempatar.',
    },
  ],
};

const GOMOKU_RULES: GameRule[] = [
  { title: 'Tabuleiro e pedras', text: 'Joga-se com as pedras do Go, num tabuleiro de 15×15 (antigamente o 19×19 era o padrão). As pretas começam e cada um põe uma pedra por vez num cruzamento vazio. Nenhuma pedra anda nem sai do tabuleiro.' },
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
      where: 'Vietnã',
      text: 'Para vencer, a linha de cinco não pode estar bloqueada nas duas pontas por pedras do adversário (linhas de seis ou mais escapam dessa regra). Isso dá mais força para quem defende.',
    },
    {
      name: 'Troca depois do primeiro lance',
      where: 'jogada sobretudo na China',
      text: 'Depois que o primeiro jogador põe a primeira pedra preta, o segundo pode escolher trocar de cor. O resto do jogo segue o estilo livre.',
    },
  ],
};

const VELHA_RULES: GameRule[] = [
  { title: 'Tabuleiro', text: 'Uma grade de 3×3, desenhada no papel, na areia ou num tabuleiro. Um jogador marca X e o outro, O, uma marca por vez numa casa vazia.' },
  { title: 'Quem vence', text: 'Vence quem fizer três marcas suas em linha: numa linha, numa coluna ou numa diagonal. Não existe regra fixa sobre quem começa; aqui o X começa.' },
  { title: 'Deu velha', text: 'Se as 9 casas se enchem sem ninguém fazer três em linha, é empate. No Brasil se diz que “deu velha”. Com os dois jogando sem errar, o jogo sempre termina assim.' },
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
  about:
    'É o “jogo da velha” no Brasil, o “jogo do galo” em Portugal e o “tic-tac-toe” nos Estados Unidos. Jogos de três em linha vêm de muito longe: no Egito antigo foram achados tabuleiros desse tipo em telhas de cerca de 1300 a.C. No Império Romano, por volta do século I a.C., jogava-se o terni lapilli, “três pedrinhas de cada vez”, com a grade riscada a giz por toda Roma. Em 1952, o OXO, feito por Sandy Douglas para o computador EDSAC da Universidade de Cambridge, virou um dos primeiros videogames conhecidos: o computador jogava a velha sem errar. É um “jogo resolvido”: com os dois jogando o melhor possível, sempre dá empate. Por isso ele é usado para ensinar como um computador procura o melhor lance, e é assim que o Linu joga no nível difícil.',
  rules: VELHA_RULES,
  variants: [
    {
      name: 'Terni lapilli',
      where: 'Império Romano, por volta do séc. I a.C.',
      text: 'Cada jogador tem só três peças. Depois de pôr as três, quem não alinhou passa a mover uma peça por vez para uma casa vazia, até alguém fazer três em linha.',
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
      text: 'Uma partida nova em que quem perdeu “pede perdão”: ele captura as peças do vencedor uma de cada vez, e o vencedor não pode capturar até ficar com só 5 peças.',
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
  about:
    'O Kalah é o jogo que muita gente conhece só como “Mancala”: uma versão moderna da antiga família das mancalas, os jogos de semear e capturar com sementes em covas, como o oware de Gana. Foi patenteado e vendido nos Estados Unidos por William Julius Champion Jr.; a patente foi publicada em 11 de outubro de 1955. A diferença que mais se nota em relação às mancalas tradicionais são os dois depósitos nas pontas, onde caem as sementes e as capturas, e a vez extra de quem termina a semeadura no próprio depósito. Por computador já se provou que, com 4 sementes por casa e os dois jogando sem errar, quem começa vence por 8 sementes (Mark Rawlings, 2015).',
  rules: KALAH_RULES,
  variants: [
    {
      name: 'Captura com a casa da frente vazia',
      where: 'uma variante comum das regras',
      text: 'Se a última semente cai numa casa sua vazia, ela vai para o depósito mesmo quando a casa da frente também está vazia.',
    },
    {
      name: 'Mais sementes por casa',
      where: 'Kalah(6,5) e Kalah(6,6)',
      text: 'Começando com 5 ou 6 sementes por casa, a partida fica mais longa. Com 5 sementes, também já se provou que quem começa vence, por 10 sementes.',
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
  about:
    'O xiangqi é o jogo de tabuleiro mais popular da China e é da mesma família do xadrez, do shogi japonês, do janggi coreano e do chaturanga indiano. Um jogo chamado “xiangqi” já aparece em textos antigos, mas sem regras, e talvez fosse outro. A descrição mais antiga das regras está na história “Cén Shùn”, do livro Xuanguai lu, escrito por Niu Sengru no meio da dinastia Tang. O jogo é igual ao de hoje desde a dinastia Song do Sul. O rio do meio se chama “rio de Chu, fronteira de Han”, lembrando a guerra entre os reinos de Chu e Han: as vermelhas são Han e as pretas, Chu. O janggi, da Coreia, nasceu do xiangqi.',
  rules: XIANGQI_RULES,
  variants: [
    {
      name: 'Xadrez manchu',
      where: 'criado na dinastia Qing, dos manchus',
      text: 'As vermelhas jogam sem os cavalos, sem os canhões e com só um carro, mas esse carro pode andar também como cavalo e como canhão.',
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
// regras e variantes). Ver `services/gamao-engine.ts`.
const GAMAO_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'São 24 casas em forma de triângulo, os “pontos”, em quatro quadrantes de 6, com a “barra” no meio. Cada jogador tem 15 peças: 2 no ponto 24, 5 no 13, 3 no 8 e 5 no 6, contando do lado dele. Os dois correm em sentidos opostos, cada um para a própria “casa” (os pontos 1 a 6).' },
  { title: 'Os dados', text: 'Para começar, cada um rola um dado: quem tirar mais começa, usando os dois números (se empatar, rolam de novo). Depois, cada vez rola os dois dados. Cada dado é um movimento: dá para andar com duas peças ou com a mesma peça duas vezes. Uma dupla (dois números iguais) vale quatro movimentos.' },
  { title: 'Bater e entrar', text: 'Não se pode parar num ponto com duas ou mais peças do adversário. Uma peça sozinha num ponto pode ser batida: quem para em cima dela a manda para a barra. Quem tem peça na barra precisa entrar com ela antes de mexer em qualquer outra, pela casa do adversário: o dado 1 entra no ponto 24, o 6 no ponto 19. Se não há ponto livre, a vez passa.' },
  { title: 'Usar os dados', text: 'É obrigatório usar os dois dados sempre que der, na ordem que quiser (numa dupla, o máximo dos quatro). Se só um dos dois cabe, joga-se esse; se cabe um ou o outro, mas não os dois, tem de ser o maior. Sem nenhum lance possível, a vez passa.' },
  { title: 'Retirada', text: 'Com as 15 peças na casa, o jogador começa a tirar: o dado tira uma peça do ponto do mesmo número. Se esse ponto está vazio e não há peça em ponto mais alto, o dado tira a peça do ponto mais alto ocupado. Também dá para usar o dado para andar dentro da casa.' },
  { title: 'Quem vence', text: 'Vence quem tirar todas as peças primeiro. A vitória simples vale 1 ponto; o “gamão”, quando o perdedor não tirou nenhuma peça, vale 2; e o “backgammon”, quando ele ainda tem peça na barra ou na casa do vencedor, vale 3. O app mostra o tipo de vitória no fim da partida.' },
  { title: 'O que este app simplificou', text: 'Aqui, para simplificar, fica de fora o cubo de dobrar: um dado com 2, 4, 8, 16, 32 e 64 que, no meio da partida, propõe dobrar o valor dela (o adversário aceita ou desiste). Ele surgiu nos anos 1920, em clubes de jogo de Nova York. E cada toque move a peça pelo número de um dado só: para usar a soma, mova duas vezes.' },
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
  about:
    'O gamão é o jogo mais conhecido de uma família antiga, a dos jogos de “tábulas” (em inglês, tables games): dois jogadores correm com 15 peças cada um, em sentidos opostos, num tabuleiro de 24 pontos, guiados por dois dados. Corridas com dados são muito antigas: o Jogo Real de Ur, de cerca de 2600 a.C., é o jogo mais antigo de que se conhecem regras. Os romanos jogavam o ludus duodecim scriptorum e, depois, a tábula, descrita num epigrama do tempo do imperador bizantino Zenão, no fim do século V. Na Pérsia, o nard surgiu entre os séculos III e VI; a lenda diz que foi inventado por Bozorgmehr, vizir do rei Cosroes I, e um livreto persa do século VI traz a descrição mais antiga das regras. O nome inglês aparece pela primeira vez numa carta de James Howell de 1647, escrito “baggammon”; em 1666, contavam que o nome antigo era “tables”. Edmond Hoyle publicou um tratado com as regras em 1743 (o artigo da Wikipédia em inglês sobre o gamão diz 1753). No Brasil, inventários registram o jogo desde o século XVI, e a Associação Brasileira de Gamão existe desde 1982. De onde vem a palavra “gamão”, ninguém sabe ao certo.',
  rules: GAMAO_RULES,
  variants: [
    {
      name: 'Tavla',
      where: 'Turquia (no persa, takhteh)',
      text: 'A mesma posição inicial do gamão. Quem ganha a abertura rola de novo os dois dados, então a primeira jogada pode ser uma dupla. Dentro da própria casa, não vale bater uma peça e seguir em frente com a mesma peça. Não existe o backgammon (a vitória vale no máximo 2) nem o cubo de dobrar.',
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
    'Apesar do nome, as damas chinesas não vêm da China e nem são damas. O jogo foi inventado na Alemanha em 1892, com o nome Stern-Halma (“Halma da estrela”), segundo algumas fontes pela editora Ravensburger. Ele é uma variação do Halma, um jogo de tabuleiro quadrado criado em 1883 ou 1884 pelo cirurgião americano George Howard Monks; “halma” vem da palavra grega para “salto”. O nome “Chinese checkers” foi uma jogada de marketing dos irmãos Bill e Jack Pressman, nos Estados Unidos, em 1928: o jogo deles se chamava primeiro “Hop Ching checkers”, e o ar oriental ajudava a vender. Depois o jogo chegou mesmo à China, levado pelo Japão, e lá se chama tiaoqi, “jogo de saltar”. No Japão e na Coreia do Sul, o mais jogado é uma variante, o “diamond game”.',
  rules: DAMAS_CHINESAS_RULES,
  variants: [
    {
      name: 'Damas chinesas rápidas (Super Chinese Checkers)',
      where: 'popular na França',
      text: 'O salto pode ser longo: a peça pula outra peça que esteja longe, desde que caia à mesma distância do outro lado, com todas as casas do caminho vazias.',
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
      text: 'Tabuleiro de 5×5 e só seis peças para cada um: rei, torre, bispo, ouro, prata e peão. A zona de promoção é só a última fileira, e as peças capturadas voltam como no shogi.',
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
      text: 'O jogador mais forte tira peças do próprio lado (por exemplo, a torre ou o bispo) e começa jogando. Assim, professores e alunos podem ter uma partida equilibrada.',
    },
  ],
};

/**
 * Pedido do dono (14/10/2026): “crie essas que faltam e mais 10 jogos, adicionando +8 em em breve”.
 * Os 10 jogos novos a ficar jogáveis (cada um entra com fonte, motor com testes e tabuleiro):
 */
const ONCA: KnowledgeGame = { id: 'onca', name: 'Jogo da onça (Adugo)', emoji: '🐆', status: 'em breve' };
const BAGH_CHAL: KnowledgeGame = { id: 'bagh-chal', name: 'Tigres e cabras (Bagh-chal)', emoji: '🐅', status: 'em breve' };
const MU_TORERE: KnowledgeGame = { id: 'mu-torere', name: 'Mū tōrere', emoji: '🌀', status: 'em breve' };
const KONANE: KnowledgeGame = { id: 'konane', name: 'Kōnane', emoji: '🌺', status: 'em breve' };
const HEX: KnowledgeGame = { id: 'hex', name: 'Hex', emoji: '⬡', status: 'em breve' };
const PONTINHOS: KnowledgeGame = { id: 'pontinhos', name: 'Pontinhos (Timbiriche)', emoji: '🔲', status: 'em breve' };
const ALQUERQUE: KnowledgeGame = { id: 'alquerque', name: 'Alquerque', emoji: '✳️', status: 'em breve' };
const JANGGI: KnowledgeGame = { id: 'janggi', name: 'Xadrez coreano (Janggi)', emoji: '🇰🇷', status: 'em breve' };
const MAKRUK: KnowledgeGame = { id: 'makruk', name: 'Xadrez tailandês (Makruk)', emoji: '🐘', status: 'em breve' };
const NIM: KnowledgeGame = { id: 'nim', name: 'Nim', emoji: '🪵', status: 'em breve' };

/** E mais 8 na fila, só nome/emoji (mesma régua dos de cima: sem história nem regras ainda). */
const UR: KnowledgeGame = { id: 'ur', name: 'Jogo Real de Ur', emoji: '🏺', status: 'em breve' };
const SENET: KnowledgeGame = { id: 'senet', name: 'Senet', emoji: '𓋹', status: 'em breve' };
const PACHISI: KnowledgeGame = { id: 'pachisi', name: 'Pachisi (Ludo)', emoji: '🎯', status: 'em breve' };
const HALMA: KnowledgeGame = { id: 'halma', name: 'Halma', emoji: '🔺', status: 'em breve' };
const RAPOSA_GANSOS: KnowledgeGame = { id: 'raposa-gansos', name: 'Raposa e gansos', emoji: '🦊', status: 'em breve' };
const SURAKARTA: KnowledgeGame = { id: 'surakarta', name: 'Surakarta', emoji: '➰', status: 'em breve' };
const BAO: KnowledgeGame = { id: 'bao', name: 'Bao', emoji: '🌰', status: 'em breve' };
const LINHAS_DE_ACAO: KnowledgeGame = { id: 'linhas-de-acao', name: 'Linhas de ação (Lines of Action)', emoji: '↔️', status: 'em breve' };

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
      text: 'Joga-se com só 1, 2 ou 3 características valendo. Por exemplo: só vale uma fileira de 4 peças da mesma cor. Quando ficar fácil, acrescente outra característica, até chegar às 4.',
    },
    {
      name: 'Quarto Mini e Quarto Gigante',
      where: 'outros tamanhos vendidos pela Gigamic',
      text: 'As mesmas regras, com peças menores para viagem ou peças grandes para jogar no chão. Só muda o tamanho do material.',
    },
  ],
};
const QUIXO: KnowledgeGame = { id: 'quixo', name: 'Quixo', emoji: '🧊', status: 'em breve' };
const PYLOS: KnowledgeGame = { id: 'pylos', name: 'Pylos', emoji: '🔻', status: 'em breve' };
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
  // o Quantik é de 2019 (século XXI); nenhuma época do filtro serve, fica na mais próxima
  epoca: 'contemporaneos',
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
  // o Squadro é de 2018 (século XXI); nenhuma época do filtro serve, fica na mais próxima
  epoca: 'contemporaneos',
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
  // o Qawale é de 2022 (século XXI); nenhuma época do filtro serve, fica na mais próxima
  epoca: 'contemporaneos',
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
const QOMET: KnowledgeGame = { id: 'qomet', name: 'Qomet', emoji: '☄️', status: 'em breve' };

/**
 * Mancalas que são jogos próprios, não “roupas” do oware/Kalah (pedido do dono, 14/10/2026: “quando
 * for outro jogo ou variante ele deve entrar à parte”; a personalização é só cosmética). O bao, com 4
 * fileiras, já está na fila acima e também fica jogável.
 */
const PALLANGUZHI: KnowledgeGame = { id: 'pallanguzhi', name: 'Pallanguzhi', emoji: '🐚', status: 'em breve' };
const TOGUZ_KORGOOL: KnowledgeGame = { id: 'toguz-korgool', name: 'Toguz korgool', emoji: '🏔️', status: 'em breve' };
const SUNGKA: KnowledgeGame = { id: 'sungka', name: 'Sungka', emoji: '⛵', status: 'em breve' };

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
];
