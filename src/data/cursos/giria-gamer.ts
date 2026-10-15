import type { MiniCourse } from './tipos';

/**
 * Gíria gamer: o jeito de falar de quem joga videogame, em português do Brasil. Não é um dialeto de
 * verdade (não tem gramática nem pronúncia próprias): é vocabulário de um grupo, boa parte dele
 * emprestado do inglês e adaptado nas lan houses e nas transmissões ao vivo — mesma categoria do
 * "Mabelleto", não um sub-curso dentro do sistema de dialetos/sotaques (decisão do dono, 15/10/2026,
 * item 6 do RESOLVER-14-10, depois de eu perguntar: "dialeto" é reservado pras variedades de um
 * idioma natural). Fonte principal: o dicionário gamer do Showmetech (consultado em 15/10/2026), com
 * o significado de cada termo e as histórias de origem documentadas nele; o termo "carry" foi
 * conferido também em glossários internacionais (esports.gg, coingate). Nenhuma gíria foi inventada.
 */
export const CURSO_GIRIA_GAMER: MiniCourse = {
  id: 'giria-gamer',
  name: 'Gíria gamer',
  emoji: '🎮',
  kind: 'giria',
  summary: 'O jeito de falar de quem joga: GG, nerf, buff, noob, lag e outras palavras que atravessaram do inglês dos jogos pro dia a dia de quem joga no Brasil.',
  sources: [{ label: 'Dicionário gamer: conheça todos os termos e gírias famosas (Showmetech)', url: 'https://www.showmetech.com.br/dicionario-gamer-principais-termos/' }],
  lessons: [
    {
      id: 'comecando',
      title: 'GG, cara — o começo e o fim de uma partida',
      emoji: '👋',
      intro: [
        'A gíria gamer é, em boa parte, inglês emprestado: siglas e palavras que nasceram dentro dos jogos e dos chats e pegaram carona no dia a dia de quem joga. "GG" ("good game", bom jogo) é dita ao fim de uma partida, não importa quem ganhou — é etiqueta, um jeito de reconhecer o adversário.',
        'Algumas dessas palavras são bem mais velhas que os videogames. "1-Up" (ganhar uma vida extra) vem dos flippers (fliperamas de bolinha) americanos da década de 1970, que davam uma bola extra ao atingir certa pontuação — Super Mario Bros. popularizou o termo nos videogames, com o cogumelo verde.',
      ],
      items: [
        { term: 'GG', meaning: 'good game, bom jogo — dita ao fim da partida, não importa quem ganhou', how: 'É etiqueta: reconhecer o adversário, ganhando ou perdendo.' },
        { term: 'GG WP', meaning: 'good game, well played — bom jogo, bem jogado', how: 'Elogia o adversário, não só encerra a partida.' },
        { term: 'GLHF', meaning: 'good luck and have fun, boa sorte e divirta-se', how: 'Dita antes da partida começar.' },
        { term: 'AFK', meaning: 'away from keyboard, longe do teclado', how: 'Avisa que o jogador saiu temporariamente.' },
        { term: 'lobby', meaning: 'a área de espera antes da partida começar' },
        { term: 'ressar', meaning: 'renascer no jogo depois de morrer, normalmente no spawn' },
        { term: 'noob', meaning: 'iniciante, ou jogador que erra ações consideradas simples', how: 'Vem de "newbie" (novato).' },
        { term: 'bot', meaning: 'personagem controlado pela inteligência artificial, não por uma pessoa', how: 'Chamar um jogador de verdade de "bot" é ofensa: quer dizer que ele joga de um jeito mecânico, sem reação.' },
        { term: '1-Up', meaning: 'ganhar uma vida extra', how: 'Vem dos fliperamas de bolinha (pinball) americanos dos anos 1970; Super Mario Bros. popularizou o termo nos videogames.' },
      ],
      quiz: [
        { q: 'O que quer dizer "GG"?', options: ['Good game (bom jogo)', 'Game grande', 'Go, go!'], answer: 0, why: 'É dita ao fim da partida, não importa quem ganhou — é etiqueta.' },
        { q: '"AFK" avisa que o jogador…', options: ['Vai desistir da partida', 'Saiu temporariamente, longe do teclado', 'Perdeu a conexão'], answer: 1 },
        { q: 'De onde vem o termo "1-Up"?', options: ['Dos fliperamas de bolinha (pinball) dos anos 1970', 'De um comercial de TV', 'Do Pac-Man'], answer: 0, why: 'Super Mario Bros. popularizou o termo nos videogames, com o cogumelo verde, mas ele já existia nos pinballs americanos.' },
        { q: 'Chamar um jogador de verdade de "bot" é…', options: ['Um elogio', 'Uma ofensa, por jogar de um jeito mecânico', 'Um pedido de ajuda'], answer: 1 },
      ],
    },
    {
      id: 'combate',
      title: 'No tiro e na briga',
      emoji: '🎯',
      intro: [
        '"Nerf" e "buff" são opostos: nerfar enfraquece um item ou personagem numa atualização (o nome vem dos brinquedos de espuma Nerf, que não machucam); buffar o deixa mais forte. Um personagem "OP" (over powered) está forte demais; um "UP" (under powered), fraco demais.',
        '"FPS" tem dois sentidos bem diferentes: o gênero de jogo de tiro em primeira pessoa (first person shooter, como Doom Eternal) e a taxa de quadros por segundo (frames per second) — 60 fps é o padrão de hoje, com consoles novos chegando a 120.',
      ],
      items: [
        { term: 'headshot (HS)', meaning: 'tiro na cabeça, que pode causar muito dano ou matar na hora' },
        { term: 'camperar', meaning: 'esconder-se e esperar o inimigo passar, geralmente com uma arma de longo alcance', how: 'A prática é malvista por quem prefere um jogo mais ativo.' },
        { term: 'nerfar', meaning: 'enfraquecer um item ou personagem numa atualização', how: 'O nome vem dos brinquedos de espuma Nerf, que não machucam de verdade. O oposto é "buffar".' },
        { term: 'buffar', meaning: 'tornar um item ou personagem mais forte numa atualização', how: 'O oposto de "nerfar".' },
        { term: 'OP', meaning: 'over powered: personagem ou item forte demais, desequilibrado' },
        { term: 'UP', meaning: 'under powered: personagem ou item fraco demais — o oposto de OP' },
        { term: 'combo', meaning: 'sequência de golpes consecutivos, sem ser atingido' },
        { term: 'stun', meaning: 'atordoamento que impede o personagem de reagir por um tempo' },
        { term: 'tank', meaning: 'personagem que aguenta e absorve dano para proteger o time' },
      ],
      quiz: [
        { q: 'Nerfar um personagem significa…', options: ['Deixá-lo mais forte', 'Deixá-lo mais fraco', 'Removê-lo do jogo'], answer: 1, why: 'O nome vem dos brinquedos de espuma Nerf, que não machucam — o oposto de "buffar".' },
        { q: 'Um personagem "OP" está…', options: ['Equilibrado', 'Forte demais pros outros', 'Fraco demais'], answer: 1 },
        { q: '"FPS" pode significar duas coisas. Quais?', options: ['Gênero de tiro em 1ª pessoa, e quadros por segundo', 'Força do personagem, e pontos de vida', 'Nome de um jogo só'], answer: 0 },
        { q: 'Camperar é…', options: ['Correr pelo mapa sem parar', 'Esconder-se e esperar o inimigo, geralmente de longe', 'Jogar em dupla'], answer: 1 },
      ],
    },
    {
      id: 'time',
      title: 'Jogando em time',
      emoji: '🤝',
      intro: [
        'Em jogos de time, "gankar" é emboscar um inimigo de surpresa com apoio de companheiros — comum em MOBAs como League of Legends, feito por quem joga de "jungler". "KS" (kill steal) é roubar o abate de um inimigo que outro jogador já tinha enfraquecido, às vezes até do próprio time — malvisto, porque tira o crédito de quem fez o trabalho.',
        'Nem todo mundo joga limpo: um "troll" atrapalha de propósito, com ofensas ou provocações, e quem perde a cabeça e sai da partida de repente dá um "rage quit". Ficar "tiltado" é perder o rendimento por irritação ou abalo emocional — o termo "tilt" vem do pinball, de quando a máquina travava por ser sacudida com força demais.',
      ],
      items: [
        { term: 'carry', meaning: 'fazer a maior parte do trabalho para o time vencer', how: 'Em inglês, "carregar" — quem "carrega" o time nas costas.' },
        { term: 'gankar', meaning: 'emboscar um inimigo de surpresa, com apoio do time', how: 'Comum em MOBAs, como League of Legends.' },
        { term: 'KS (kill steal)', meaning: 'roubar o abate de um inimigo que outro jogador já tinha enfraquecido' },
        { term: 'troll', meaning: 'jogador que atrapalha de propósito, com ofensas ou provocações' },
        { term: 'rage quit', meaning: 'sair de repente de uma partida online, por irritação' },
        { term: 'tiltado', meaning: 'com o rendimento ruim por irritação ou abalo emocional', how: 'O termo "tilt" vem do pinball: a máquina travava se fosse sacudida com força demais.' },
        { term: 'MVP', meaning: 'most valuable player, o jogador destaque da partida ou do torneio' },
        { term: 'rankeada', meaning: 'partida que vale para o ranking competitivo — não deve ser abandonada no meio' },
      ],
      quiz: [
        { q: 'Quem "carrega" (carry) o time faz o quê?', options: ['Atrapalha de propósito', 'A maior parte do trabalho pra vencer', 'Sai da partida'], answer: 1 },
        { q: 'De onde vem o termo "tiltado"?', options: ['Do pinball, quando a máquina travava por ser sacudida demais', 'De um personagem de jogo', 'Do inglês "tilt" (telhado)'], answer: 0 },
        { q: 'Um "troll" é alguém que…', options: ['Joga muito bem', 'Atrapalha de propósito, com ofensas ou provocações', 'Nunca fala no chat'], answer: 1 },
        { q: 'Abandonar uma partida "rankeada" no meio é malvisto porque…', options: ['Ela não vale nada', 'Ela vale pro ranking competitivo de todo mundo', 'É proibido por lei'], answer: 1 },
      ],
    },
    {
      id: 'generos',
      title: 'Gêneros e jeitos de jogar',
      emoji: '🗺️',
      intro: [
        '"MOBA" (multiplayer online battle arena) é o gênero em que duas equipes tentam invadir a base adversária, como League of Legends. "Roguelike" é o gênero de níveis aleatórios e morte permanente — perder tudo e recomeçar do zero faz parte do jogo.',
        '"Metroidvania" nasceu da junção de dois nomes: Metroid e Castlevania, os jogos que deram origem ao estilo de mapa interconectado, onde cada habilidade nova libera um caminho que antes era inacessível. "Grindar" é repetir uma ação várias vezes para conseguir itens ou experiência — comum em RPGs, veio do inglês "grind" (moer).',
      ],
      items: [
        { term: 'MOBA', meaning: 'multiplayer online battle arena: duas equipes tentam invadir a base adversária', how: 'Ex.: League of Legends, Dota 2.' },
        { term: 'RPG', meaning: 'role playing game: o personagem evolui por níveis, itens e armas', how: 'Herda do RPG de mesa, inspirado em Dungeons & Dragons.' },
        { term: 'roguelike', meaning: 'gênero de níveis aleatórios e morte permanente', how: 'Perder tudo e recomeçar do zero faz parte do jogo.' },
        { term: 'speedrun', meaning: 'tentar terminar um jogo no menor tempo possível', how: 'Às vezes usando falhas do próprio jogo (glitches) de propósito.' },
        { term: 'grindar', meaning: 'repetir uma ação várias vezes para conseguir itens ou experiência', how: 'Do inglês "grind" (moer). Comum em RPGs.' },
        { term: 'hack and slash', meaning: 'gênero de combate corpo a corpo mais violento, com armas de curto alcance', how: 'Ex.: God of War, Devil May Cry.' },
        { term: 'metroidvania', meaning: 'gênero de mapa interconectado em que novas habilidades liberam áreas antes inacessíveis', how: 'O nome junta Metroid e Castlevania, os jogos que deram origem ao estilo.' },
      ],
      quiz: [
        { q: 'De onde vem o nome "metroidvania"?', options: ['De Metroid e Castlevania, juntos', 'De um estúdio japonês', 'Não tem origem conhecida'], answer: 0 },
        { q: 'No gênero "roguelike", o que acontece ao morrer?', options: ['Nada muda', 'Perde-se tudo e recomeça do zero — faz parte do jogo', 'O jogo acaba de vez'], answer: 1 },
        { q: '"Grindar" significa…', options: ['Desistir do jogo', 'Repetir uma ação várias vezes para ganhar itens ou experiência', 'Jogar contra outra pessoa'], answer: 1 },
        { q: 'Num MOBA, o objetivo geralmente é…', options: ['Invadir a base da equipe adversária', 'Correr o mapa inteiro', 'Construir uma cidade'], answer: 0 },
      ],
    },
  ],
};
