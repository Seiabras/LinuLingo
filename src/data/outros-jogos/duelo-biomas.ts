import type { OutroJogo } from './tipos';

/**
 * DUELO DOS BIOMAS (pedido do dono, 16/10/2026): o jogo de cartas colecionáveis do LinuLingo que usa
 * as regras principais do Magic: The Gathering, com cartas nossas (os bichos do app, desenho
 * próprio). Só as regras e a mecânica: nenhum nome, termo, logotipo, arte ou texto de carta do jogo
 * homenageado. Os termos característicos ganharam nomes nossos (bioma, energia do bioma, virar,
 * magia rápida).
 *
 * Fontes (consultadas em 16/10/2026):
 * - Wikipédia em inglês, “Magic: The Gathering”: https://en.wikipedia.org/wiki/Magic:_The_Gathering —
 *   criado por Richard Garfield, matemático, e lançado pela Wizards of the Coast em agosto de 1993; o
 *   primeiro jogo de cartas colecionáveis moderno.
 * - Wikipédia em português, “Magic: The Gathering”: https://pt.wikipedia.org/wiki/Magic:_The_Gathering
 * - Regras oficiais (Wizards of the Coast), página “Magic Rules”: https://magic.wizards.com/en/rules —
 *   as fases do turno, o combate com atacantes e bloqueadores, o dano que some no fim do turno.
 * - Wikipédia em inglês, “Collectible card game”: https://en.wikipedia.org/wiki/Collectible_card_game
 *   — os nomes “collectible card game” e “trading card game” e a origem nas figurinhas de troca.
 * - Wikipédia em inglês, “Trading card”: https://en.wikipedia.org/wiki/Trading_card — os cartões de
 *   troca do século XIX, que vinham com cigarros e, depois, com chicletes.
 */
export const DUELO_BIOMAS: OutroJogo = {
  id: 'duelo-dos-biomas',
  area: 'cartas',
  grupo: 'jogos',
  name: 'Duelo dos Biomas',
  emoji: '🏔️',
  status: 'pronto',
  playable: true,
  linu: true,
  year: '2026 (no app); homenagem a um jogo de 1993',
  where: 'LinuLingo; regras do Magic: The Gathering (Estados Unidos)',
  povo: 'Richard Garfield, autor do jogo homenageado; cartas do LinuLingo',
  regiao: 'americas',
  epoca: 'atuais',
  etimologia:
    '“Trading card game” quer dizer, em inglês, “jogo de cartas de troca”: vem dos “trading cards”, os cartões colecionáveis que os americanos trocavam desde o século XIX, quando vinham com os maços de cigarro e, depois, com os chicletes, como as nossas figurinhas. Também se diz “collectible card game” (jogo de cartas colecionáveis): cada pessoa monta o seu baralho com as cartas que juntou. Em português, o nome mais usado é “jogo de cartas colecionáveis”, ou a sigla TCG. (Fontes: Wikipédia, “Collectible card game” e “Trading card”.)',
  about:
    'Este jogo usa as regras principais do Magic: The Gathering, com cartas do LinuLingo. O Magic foi criado pelo matemático americano Richard Garfield e lançado pela Wizards of the Coast em agosto de 1993. Foi o primeiro jogo de cartas colecionáveis moderno: em vez de um baralho igual para todos, cada jogador junta cartas e monta o seu. A ideia virou um gênero inteiro, com centenas de jogos depois dele. Aqui, as cartas são nossas: os bichos do app, os Amigos do Linu com os nomes que já têm, e os biomas no lugar dos terrenos. São 4 baralhos prontos de 40 cartas, cada um de um tema: Gelo do Sul, Mata Viva, Céu e Montanha e Savana.',
  rules: [
    {
      title: 'O objetivo',
      text: 'Cada lado começa com 20 de vida e um baralho de 40 cartas, e compra 7. Vence quem zerar a vida do outro. Quem precisa comprar e não tem carta no baralho perde.',
    },
    {
      title: 'O turno',
      text: 'O turno tem fases: desvirar (tudo o que é seu volta para cima), comprar 1 carta (quem começa a partida não compra no 1º turno), a fase principal, o combate, a segunda fase principal e o fim. No fim do turno, a mão guarda no máximo 7 cartas.',
    },
    {
      title: 'Biomas e energia',
      text: 'Na fase principal, você pode jogar 1 bioma por turno: gelo, mata, montanha ou savana. Para pagar uma carta, você vira biomas: cada um dá 1 energia. O custo tem uma parte do bioma (os pontos coloridos) e uma parte livre, que qualquer bioma paga.',
    },
    {
      title: 'Bichos e magias',
      text: 'O bicho entra cansado: só ataca num turno seguinte, a não ser que tenha Ímpeto. O feitiço só vai na sua fase principal. A magia rápida vai na fase principal e também no combate, depois dos bloqueios.',
    },
    {
      title: 'O combate',
      text: 'Quem ataca escolhe os atacantes, e eles viram. Quem defende escolhe quem bloqueia quem, com bichos que não estão virados. Depois, cada um pode usar magias rápidas. O dano é de uma vez: o bicho bloqueado troca dano com o bloqueador, e o que não foi bloqueado acerta a vida. Sai do campo quem leva dano igual ou maior que a resistência; o dano dos outros some no fim do turno.',
    },
    {
      title: 'As habilidades',
      text: 'Voo: só é bloqueado por quem tem Voo ou Alcance. Alcance: bloqueia quem tem Voo. Ímpeto: ataca no turno em que entra. Vigia: ataca sem virar. Atropelar: o dano que passa da resistência do bloqueador vai para a vida do dono dele.',
    },
    {
      title: 'O que ficou de fora',
      text: 'Para o jogo caber no celular e numa partida de uns 15 minutos: não há a pilha completa de respostas (só a janela de magias rápidas depois dos bloqueios, e cada magia resolve na hora); cada atacante é bloqueado por um bicho só; não há habilidades que se ativam pagando, nem a troca de mão no começo, nem partidas com mais de dois. Se a mão passar de 7 no fim do turno, o app descarta sozinho os biomas a mais e, depois, as cartas mais caras.',
    },
  ],
  variants: [
    {
      name: 'Os 4 baralhos prontos',
      where: 'No app',
      text: 'Gelo do Sul (os Amigos do Linu: bichos grandes que seguram o ataque), Mata Viva (bichos do Brasil, baratos e rápidos), Céu e Montanha (Andes e Himalaia, voadores e magias rápidas) e Savana (África: a manada de bichos grandes, com Atropelar). Escolha o seu e o do Linu.',
    },
  ],
  fontes: [
    { titulo: 'Wikipédia, “Magic: The Gathering” (inglês)', url: 'https://en.wikipedia.org/wiki/Magic:_The_Gathering' },
    { titulo: 'Wikipédia, “Magic: The Gathering” (português)', url: 'https://pt.wikipedia.org/wiki/Magic:_The_Gathering' },
    { titulo: 'Wizards of the Coast, regras oficiais do Magic', url: 'https://magic.wizards.com/en/rules' },
    { titulo: 'Wikipédia, “Collectible card game”', url: 'https://en.wikipedia.org/wiki/Collectible_card_game' },
    { titulo: 'Wikipédia, “Trading card”', url: 'https://en.wikipedia.org/wiki/Trading_card' },
  ],
};
