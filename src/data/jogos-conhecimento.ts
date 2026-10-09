/**
 * Jogos do conhecimento (Cultura → aba "🎲 Jogos", e atalho no Perfil ao lado de línguas
 * artificiais): jogos de tabuleiro/estratégia, fora do escopo de idiomas. Lista inicial, pedida
 * pelo Matheus em 05-07/10/2026 ("por enquanto", pode crescer): damas, xadrez, quoridor/bloqueio,
 * octi (octógono fantástico) e abalone. Depois entraram, todos com pedido confirmado do Matheus:
 * Hnefatafl e Jogo do Moinho (Trilha) em 09/10/2026, e na mesma rodada Conecta 4, Oware e
 * Reversi/Othello. Cada jogo só entra com regras e história reais e citáveis — nunca inventadas
 * (mesma régua do resto do app, ver AGENTS.md). Todos os jogos abaixo são `playable: true`, com
 * motor de regras de verdade (`src/services/*-engine.ts`) e tabuleiro jogável
 * (`src/components/*Board.tsx`).
 */

export type GameStatus = 'pronto' | 'em breve';

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
  name: 'Trilha',
  emoji: '⬛',
  status: 'pronto',
  playable: true,
  year: 'achados possíveis desde ~1400 a.C. (Egito, datação contestada); bem documentado desde o Império Romano (séc. I)',
  where: 'possíveis origens no Egito Antigo; popular no Império Romano; auge na Europa medieval (Inglaterra)',
  about:
    'A Trilha (nome mais comum no Brasil; em inglês, "Nine Men\'s Morris" — também chamada de Mill, Merels ou Jogo do Moinho) é um dos jogos de tabuleiro mais antigos com continuidade documentada. A pista mais antiga, mas contestada, é egípcia: tabuleiros gravados nas lajes do telhado do templo de Kurna foram datados por R. C. Bell em cerca de 1400 a.C., mas o pesquisador Friedrich Berger pôs essa data em dúvida — alguns desses desenhos têm cruzes coptas misturadas, o que sugere uma origem bem mais tardia, e por isso ele considera que esses tabuleiros específicos "não podem ser datados" com segurança. Mais sólida é a presença do jogo no Império Romano: o poeta Ovídio já menciona um jogo parecido em "Ars Amatoria" (por volta do ano 8 d.C.), e tabuleiros aparecem gravados em prédios por todo o território romano. O jogo atingiu seu auge na Europa medieval, especialmente na Inglaterra: há tabuleiros gravados nos bancos de pedra da Catedral de Canterbury e da Abadia de Westminster, e um tabuleiro do século XII foi encontrado em escavações em Novgorod, na Rússia. O nome em inglês, "Nine Men\'s Morris", pode vir do latim eclesiástico "merellus" (peça de jogo) — o autor e enxadrista Daniel King descarta qualquer relação com a dança "Morris" inglesa, apesar da semelhança de nome.',
  rules: MOINHO_RULES,
};

const CONECTA4_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro em pé, 6 fileiras por 7 colunas. Cada jogador tem uma cor (vermelho ou amarelo).' },
  { title: 'Na sua vez', text: 'Escolha uma coluna: a peça cai por gravidade até a casa mais baixa livre dela.' },
  { title: 'Como se vence', text: 'O primeiro a formar 4 peças seguidas da própria cor — na horizontal, vertical ou diagonal — vence. Se o tabuleiro enche sem ninguém conseguir, é empate.' },
];

const CONECTA4: KnowledgeGame = {
  id: 'conecta4',
  name: 'Conecta 4',
  emoji: '🔴',
  status: 'pronto',
  playable: true,
  year: '1973/74',
  where: 'criado pelos americanos Howard Wexler e Ned Strongin; lançado pela Milton Bradley (EUA) em fevereiro de 1974',
  about:
    'O Conecta 4 (Connect Four) foi lançado pela empresa americana Milton Bradley em fevereiro de 1974, sob licença dos criadores Howard Wexler e Ned Strongin. No começo, sem nenhuma campanha de TV, a empresa tratava o jogo como uma simples "versão vertical de damas" — as vendas só decolaram de verdade a partir de 1979. O jogo já foi completamente resolvido matematicamente: jogando de forma perfeita, quem começa (as peças vermelhas) sempre consegue forçar a vitória, não importa o que o adversário faça.',
  rules: CONECTA4_RULES,
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
  name: 'Oware',
  emoji: '🌰',
  status: 'pronto',
  playable: true,
  year: 'de origem antiga; provavelmente Ashanti',
  where: 'Gana — considerado o jogo nacional do país',
  about:
    'Oware é um jogo de mancala (a família de jogos de "semear e capturar", jogados com sementes ou pedrinhas em fileiras de casas) de Gana, onde é considerado o jogo nacional. A origem exata se perdeu no tempo, mas é amplamente atribuída ao povo Ashanti. Uma lenda ganesa conta que o nome "oware" vem da expressão "ele/ela se casa", de um casal que jogava tanto que resolveu se casar — uma origem de nome contada como tradição, não como fato histórico comprovado. O jogo se espalhou pela África Ocidental e pelo Caribe, cada região com seu próprio nome e pequenas variações de regra. Já foi completamente resolvido por computador: jogando perfeitamente dos dois lados, o resultado é sempre empate (resultado publicado por Romein e Bal, em 2002).',
  rules: OWARE_RULES,
};

const REVERSI_RULES: GameRule[] = [
  { title: 'Tabuleiro e peças', text: 'Tabuleiro 8×8, com 4 peças já no centro ao começar (2 de cada cor, em diagonal). Preto sempre joga primeiro.' },
  { title: 'Na sua vez', text: 'Você só pode colocar uma peça numa casa vazia se isso fechar, em pelo menos 1 das 8 direções, uma linha contínua de peças do adversário terminando numa peça sua — essas peças do meio viram da sua cor.' },
  { title: 'Sem lance', text: 'Se você não tem nenhum lance legal, passa a vez automaticamente (não é escolha). Se os dois não tiverem lance nenhum, o jogo acaba.' },
  { title: 'Como se vence', text: 'Vence quem tiver mais peças no tabuleiro quando o jogo terminar.' },
];

const REVERSI: KnowledgeGame = {
  id: 'reversi',
  name: 'Reversi / Othello',
  emoji: '⚫',
  status: 'pronto',
  playable: true,
  year: 'Reversi em 1883; padronizada como Othello em 1971',
  where: 'Reversi, na Inglaterra; Othello, patenteada no Japão por Goro Hasegawa',
  about:
    'A Reversi foi publicada na Inglaterra em 1883 por Lewis Waterman — mas a autoria foi disputada na época por John Mollett, que registrou uma versão própria chamada "The Game of Annexation" e alegou que Waterman tinha copiado (ou redescoberto por conta própria) a ideia dele; a disputa nunca foi resolvida por nenhum tribunal ou fonte histórica definitiva. Quase 90 anos depois, em 1971, o japonês Goro Hasegawa patenteou uma versão com posição inicial fixa e regras padronizadas, batizada de "Othello" — publicada no Japão pela empresa Tsukuda Original em 1973, essa foi a versão que se popularizou mundialmente e deu nome ao jogo tal como é jogado hoje (é a versão implementada aqui).',
  rules: REVERSI_RULES,
};

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
];
