import type { OutroJogo } from './tipos';

/**
 * Sueca, para 4 em duplas.
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Wikipédia, “Sueca (jogo de cartas)”: https://pt.wikipedia.org/wiki/Sueca_(jogo_de_cartas) — 4 em
 *   duplas, 40 cartas (sem 8, 9 e 10); ás 11, 7 (a bisca) 10, rei 4, valete 3, dama 2; 120 pontos por
 *   mão; o naipe da carta virada é o trunfo; seguir o naipe é obrigatório; 61 a 90 vale 1 jogo, 91 a
 *   120 vale 2, todas as vazas valem 4; a partida vai a 4 jogos.
 * - Jogos do Rei, “Regras da Sueca: trunfo, renúncia e pontuação”:
 *   https://www.jogosdorei.com.br/blog/2026/08/20/faq-sueca-trunfo-renuncia-pontuacao/ — 120 pontos
 *   sem levar todas as vazas valem 2 jogos (e só as 10 vazas valem 4); usamos essa regra. As fontes
 *   discordam sobre o que é a “bandeira”, por isso o texto não usa a palavra.
 * - SuecaVox, manual (NCE/UFRJ): https://intervox.nce.ufrj.br/dosvox/manuais/Suecavox.txt
 * - Wikipedia, “Sueca (card game)”: https://en.wikipedia.org/wiki/Sueca_(card_game) — é, de longe,
 *   o jogo mais popular nas comunidades de língua portuguesa; a origem do nome (“sueca”, da Suécia)
 *   não é clara; parente da bisca, que tem como antepassado a briscola italiana.
 * - Focus GN, “Como jogar Sueca”: https://focusgn.com/brasil/como-jogar-sueca — joga-se também no
 *   Brasil e em partes da África.
 * - O Pipo e a Dedé, que completam a mesa, são amigos do Linu (`data/amigos-linu.ts`).
 */
export const SUECA: OutroJogo = {
  id: 'sueca',
  area: 'cartas',
  grupo: 'frances',
  name: 'Sueca',
  emoji: '♠️',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'tradicional',
  where: 'Portugal',
  povo: 'portugueses',
  regiao: 'europa',
  epoca: 'tradicionais',
  etimologia:
    '“Sueca” quer dizer “da Suécia”, mas ninguém sabe ao certo por que o jogo português tem esse nome: as fontes não acharam nenhuma ligação clara com a Suécia. Já o 7, a segunda carta mais forte, tem nome próprio na mesa: é a “bisca”, como no jogo da bisca, parente da sueca.',
  about:
    'A sueca é, de longe, o jogo de cartas mais jogado onde se fala português, de Portugal ao Brasil e a partes da África. É um jogo de vazas em duplas, com os parceiros sentados frente a frente. Ela é parente da bisca, que por sua vez descende da briscola italiana, e tem o mesmo jeito de contar: o que vale não é o número de vazas, e sim as cartas que vêm nelas. O ás vale 11, o 7 vale 10, e as figuras valem um pouco menos; somadas, as cartas dão 120 pontos, e a dupla que passa de 60 ganha a mão. O trunfo é sorteado a cada mão, com a última carta de quem dá, que fica à mostra.',
  rules: [
    {
      title: 'Cartas e duplas',
      text: 'Quatro jogadores, em duas duplas, com os parceiros um de frente para o outro. São 40 cartas: o baralho francês sem os 8, 9 e 10. Cada um recebe 10.',
    },
    {
      title: 'O trunfo',
      text: 'A última carta de quem dá fica virada para todos verem: o naipe dela é o trunfo nesta mão. Qualquer trunfo, até o 2, ganha de qualquer carta dos outros naipes.',
    },
    {
      title: 'As vazas',
      text: 'Quem está depois de quem deu abre a primeira vaza. Cada um joga uma carta, e é obrigatório seguir o naipe que abriu; sem ele, joga qualquer carta, até trunfo. Leva a vaza o trunfo mais alto ou, sem trunfo, a carta mais alta do naipe que abriu. Em cada naipe, da mais forte para a mais fraca: ás, 7, rei, valete, dama, 6, 5, 4, 3, 2.',
    },
    {
      title: 'Os pontos',
      text: 'Ás 11, 7 10, rei 4, valete 3 e dama 2; as outras não valem nada. São 120 pontos por mão. A dupla que faz 61 a 90 ganha 1 jogo; 91 ou mais, 2 jogos; todas as 10 vazas, 4 jogos. Com 60 a 60, ninguém ganha jogo. A partida vai a 4 jogos.',
    },
    {
      title: 'No app',
      text: 'Você joga com o Pipo, à sua frente, contra o Linu, à sua esquerda, e a Dedé, à sua direita. Na sua vez, as cartas que podem ser jogadas ficam destacadas. Quem dá as cartas muda a cada mão; a escolha “quem começa” decide quem abre a primeira.',
    },
  ],
  fontes: [
    { titulo: 'Wikipédia, “Sueca (jogo de cartas)”', url: 'https://pt.wikipedia.org/wiki/Sueca_(jogo_de_cartas)' },
    { titulo: 'Wikipedia, “Sueca (card game)”', url: 'https://en.wikipedia.org/wiki/Sueca_(card_game)' },
    { titulo: 'Jogos do Rei, “Regras da Sueca: trunfo, renúncia e pontuação”', url: 'https://www.jogosdorei.com.br/blog/2026/08/20/faq-sueca-trunfo-renuncia-pontuacao/' },
    { titulo: 'SuecaVox, manual (NCE/UFRJ)', url: 'https://intervox.nce.ufrj.br/dosvox/manuais/Suecavox.txt' },
    { titulo: 'Focus GN, “Como jogar Sueca”', url: 'https://focusgn.com/brasil/como-jogar-sueca' },
  ],
  variants: [
    {
      name: 'Bisca',
      where: 'Portugal e Brasil',
      text: 'A sueca é descrita como uma variação da bisca, e é dela que vem o nome do 7, a “bisca”. É também um jogo de vazas com trunfo.',
    },
    {
      name: 'Briscola',
      where: 'Itália',
      text: 'O jogo italiano apontado como antepassado da bisca e, por ela, da sueca. Joga-se com o baralho italiano.',
    },
  ],
};
