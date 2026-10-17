import type { OutroJogo } from './tipos';

/**
 * Copas (o “Hearts” dos Estados Unidos), para 4.
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Pagat, “Hearts”: https://www.pagat.com/reverse/hearts.html — a passagem de 3 cartas (esquerda,
 *   direita, frente, sem passar, e repete); o 2 de paus abre a primeira vaza; copas não abre vaza
 *   antes de cair copas numa vaza anterior, a não ser que a mão só tenha copas; cada copas vale 1 e a
 *   dama de espadas, 13; a partida acaba quando alguém chega a 100, e ganha o menor placar.
 * - “Fazer a lua” (levar os 26 pontos: zero para quem fez, 26 para cada um dos outros): Rarepike,
 *   “Hearts rules for beginners”: https://rarepike.com/hearts/rules-for-beginners/
 * - História: Wikipedia, “Hearts (card game)”: https://en.wikipedia.org/wiki/Hearts_(card_game) e
 *   Parlett, “Reversis”: https://www.parlettgames.uk/histocs/reversis.html — o antepassado é o
 *   Reversis, citado na França em 1601 como “Reversin” e popular na Espanha por volta de 1750; o
 *   “reverter” do nome lembra o lance que vira o jogo, como a lua; o Hearts tomou forma nos Estados
 *   Unidos nos anos 1880, com “The Game of Hearts” (1886), de Barnet Phillips, e o “Standard Hoyle”
 *   (1887); a dama de espadas valendo 13 veio depois e já era comum no começo do século XX.
 * - O nome no Brasil: UFRGS, tesauro de jogos, “Copas Fora”: https://www.ufrgs.br/tesauros/index.php/thesa/c/53197
 *   — jogo de vazas de 4 a 6 jogadores em que se quer fazer menos pontos.
 * - Etimologia de “copas”: Wiktionary, “copas”: https://en.wiktionary.com/wiki/copas — de “copo”:
 *   o naipe era de copos ou cálices e virou o coração, mas o nome ficou; Wikipedia, “Cups (suit)”:
 *   https://en.wikipedia.org/wiki/Cups_(suit) — quando os naipes latinos passaram para o desenho
 *   francês, os nomes antigos ficaram com os naipes novos.
 * - Os dois amigos do Linu que completam a mesa (o Pipo e a Dedé) são os de `data/amigos-linu.ts`.
 */
export const COPAS: OutroJogo = {
  id: 'copas',
  area: 'cartas',
  grupo: 'frances',
  name: 'Copas',
  emoji: '♥️',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'anos 1880 (o Hearts); o antepassado, o Reversis, em 1601',
  where: 'Estados Unidos, vindo da França e da Espanha',
  povo: 'americanos, a partir do Reversis europeu',
  regiao: 'americas',
  epoca: 'modernos',
  etimologia:
    'O jogo leva o nome do naipe que ninguém quer: copas. E “copas” vem de “copo”. Nos baralhos antigos da Península Ibérica, o naipe era de taças e cálices; quando o baralho francês chegou, com corações no lugar das taças, o nome velho ficou com o desenho novo. Por isso o coração, em português, é “copas”, e em inglês o jogo se chama “Hearts”, “corações”.',
  about:
    'Copas é um jogo de vazas ao contrário: em vez de querer levar as vazas, cada um tenta fugir delas, porque toda carta de copas que se leva é ponto contra, e a dama de espadas pesa 13. O antepassado é o Reversis, jogo europeu citado na França em 1601 e muito jogado na Espanha no século XVIII; o nome dele lembra o lance que vira tudo, como a “lua” da copas. O jogo como se conhece hoje tomou forma nos Estados Unidos nos anos 1880, com as regras do livro “The Game of Hearts”, de Barnet Phillips, em 1886. A dama de espadas valendo 13 veio depois e no começo do século XX já era regra comum. No Brasil, o jogo também é chamado de “Copas Fora”.',
  rules: [
    {
      title: 'A mesa',
      text: 'Quatro jogadores, cada um com 13 cartas do baralho francês. O ás é a carta mais alta de cada naipe, e não há trunfo.',
    },
    {
      title: 'A passagem',
      text: 'Antes de jogar, cada um passa 3 cartas: na primeira mão, para a esquerda; na segunda, para a direita; na terceira, para a frente; na quarta, ninguém passa. Depois, tudo se repete.',
    },
    {
      title: 'As vazas',
      text: 'Quem tem o 2 de paus abre a primeira vaza com ele. Cada um joga uma carta, seguindo o naipe que abriu, se tiver; sem ele, joga qualquer carta. Leva a vaza a carta mais alta do naipe que abriu, e quem leva abre a próxima. Copas só pode abrir uma vaza depois que alguém já jogou copas, a não ser que a mão só tenha copas.',
    },
    {
      title: 'Os pontos',
      text: 'No fim da mão, cada carta de copas levada vale 1 ponto, e a dama de espadas vale 13: são 26 pontos por mão, e todos são ruins. Quem leva todos os 26 “faz a lua”: fica com zero, e cada um dos outros leva 26.',
    },
    {
      title: 'O fim',
      text: 'A partida acaba quando alguém chega a 100 pontos, e ganha quem tiver menos.',
    },
    {
      title: 'No app',
      text: 'Você joga com o Linu, à sua esquerda, e dois amigos dele: o Pipo, à sua frente, e a Dedé, à sua direita. Para passar, toque em 3 cartas e depois no botão. Na sua vez, as cartas que podem ser jogadas ficam destacadas.',
    },
  ],
  fontes: [
    { titulo: 'Pagat, “Hearts”', url: 'https://www.pagat.com/reverse/hearts.html' },
    { titulo: 'Wikipedia, “Hearts (card game)”', url: 'https://en.wikipedia.org/wiki/Hearts_(card_game)' },
    { titulo: 'David Parlett, “Reversis”', url: 'https://www.parlettgames.uk/histocs/reversis.html' },
    { titulo: 'Rarepike, “Hearts rules for beginners”', url: 'https://rarepike.com/hearts/rules-for-beginners/' },
    { titulo: 'UFRGS, tesauro de jogos, “Copas Fora”', url: 'https://www.ufrgs.br/tesauros/index.php/thesa/c/53197' },
    { titulo: 'Wiktionary, “copas”', url: 'https://en.wiktionary.com/wiki/copas' },
  ],
  variants: [
    {
      name: 'Reversis',
      where: 'França e Espanha, séculos XVII e XVIII',
      text: 'O avô da copas: também era um jogo em que se fugia das vazas, e tinha um lance especial, o de levar todas as vazas, que virava o jogo ao contrário, como a lua.',
    },
    {
      name: 'Copas Fora',
      where: 'Brasil',
      text: 'O nome brasileiro do jogo, que pode ter de 4 a 6 jogadores; com 5 jogadores usam-se 50 cartas, para todos receberem o mesmo tanto.',
    },
  ],
};
