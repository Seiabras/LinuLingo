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
export type CategoriaJogo = 'guerra' | 'cerco' | 'linha' | 'semear' | 'modernos';

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
const GAMAO: KnowledgeGame = { id: 'gamao', name: 'Gamão (Backgammon)', emoji: '🎲', status: 'em breve' };
const DAMAS_CHINESAS: KnowledgeGame = { id: 'damas-chinesas', name: 'Damas chinesas', emoji: '⭐', status: 'em breve' };
const DOMINO: KnowledgeGame = { id: 'domino', name: 'Dominó', emoji: '🁢', status: 'em breve' };
const SHOGI: KnowledgeGame = { id: 'shogi', name: 'Xadrez japonês (Shogi)', emoji: '🏯', status: 'em breve' };

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
];
