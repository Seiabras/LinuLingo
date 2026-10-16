import type { OutroJogo } from './tipos';

/**
 * TRILHA DA EVOLUÇÃO (pedido do dono, 16/10/2026): o jogo de cartas colecionáveis do LinuLingo que
 * usa as regras principais do Pokémon Trading Card Game, com cartas nossas (os bichos do app, desenho
 * próprio). Só as regras e a mecânica: nenhum nome, termo, logotipo, arte ou texto de carta do jogo
 * homenageado; o nome dele aparece só para dizer de onde vêm as regras. Os termos característicos
 * ganharam palavras nossas (bicho, banco, energia do bioma, carta de apoio, prêmio, recuar).
 *
 * Fontes (consultadas em 16/10/2026):
 * - Wikipédia em inglês, “Pokémon Trading Card Game”:
 *   https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game — criado por Tsunekazu Ishihara,
 *   Kouichi Ooyama e Takumi Akabane, desenvolvido pela Creatures Inc.; lançado no Japão em 20/10/1996
 *   pela Media Factory; nos Estados Unidos pela Wizards of the Coast (o primeiro conjunto saiu em
 *   09/01/1999) até 2003, quando a The Pokémon Company assumiu; mais de 85 bilhões de cartas até
 *   março de 2026; as regras: 1 ativo e até 5 no banco, 6 prêmios, 1 energia por turno, fraqueza
 *   que dobra o dano e resistência que o reduz, quem começa não ataca no 1º turno, sem evoluir no
 *   1º turno nem o bicho que acabou de entrar, as 3 formas de vencer, as 5 condições especiais.
 * - Wikipédia em português, “Pokémon Trading Card Game”: https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game
 * - Wikipédia em português, “Metamorfose (biologia)” e “Evolução”: a diferença entre o bicho que muda
 *   de forma durante a vida (girino → sapo, lagarta → crisálida → borboleta) e a evolução das espécies.
 * - O valor da resistência (−30) e o baralho de 40 (o jogo oficial usa 60) são escolhas aprovadas pelo
 *   dono para o app; nas cartas oficiais, o número da resistência vem impresso em cada uma.
 */
export const TRILHA_EVOLUCAO: OutroJogo = {
  id: 'trilha-da-evolucao',
  area: 'cartas',
  grupo: 'jogos',
  name: 'Trilha da Evolução',
  emoji: '🐛',
  status: 'pronto',
  playable: true,
  linu: true,
  year: '2026 (no app); homenagem a um jogo de 1996',
  where: 'LinuLingo; regras do Pokémon Trading Card Game (Japão)',
  povo: 'Tsunekazu Ishihara, Kouichi Ooyama e Takumi Akabane, autores do jogo homenageado; cartas do LinuLingo',
  regiao: 'asia',
  epoca: 'atuais',
  etimologia:
    'O nome é nosso: a trilha é o caminho que cada bicho faz de um estágio para o outro. Mas, na biologia, quase nenhum desses bichos “evolui”: o girino que vira sapo e a lagarta que vira crisálida e depois borboleta passam por uma metamorfose, uma mudança de forma durante a própria vida. Evolução é outra coisa: a mudança das espécies ao longo de muitas gerações, que nenhum bicho faz sozinho. O jogo homenageado chama de “evolução” essa troca de estágio, e a palavra ficou. (Fontes: Wikipédia, “Metamorfose (biologia)” e “Evolução”.)',
  about:
    'Este jogo usa as regras principais do Pokémon Trading Card Game, com cartas do LinuLingo. O jogo homenageado foi criado por Tsunekazu Ishihara, Kouichi Ooyama e Takumi Akabane e saiu no Japão em 20 de outubro de 1996, pela Media Factory. Chegou aos Estados Unidos em janeiro de 1999, pela Wizards of the Coast, a mesma do Magic, e desde 2003 é publicado pela The Pokémon Company. Até março de 2026, já tinham sido impressas mais de 85 bilhões de cartas. Aqui, as cartas são nossas: os bichos do app, os Amigos do Linu com os nomes que já têm, e estágios que são crescimento de verdade: o filhote de pinguim-imperador vira o Tobias, o girino vira sapo, a lagarta vira crisálida e depois borboleta. São 4 baralhos prontos de 40 cartas: Gelo do Sul, Mata Viva, Céu e Montanha e Savana.',
  rules: [
    {
      title: 'O objetivo',
      text: 'Cada lado tem um baralho de 40 cartas, compra 7 e separa 6 cartas de prêmio, viradas. Cada bicho do outro que você derruba vale 1 prêmio, que vai para a sua mão. Vence quem pegar os 6 prêmios, deixar o outro sem nenhum bicho no campo, ou vê-lo sem carta para comprar no começo do turno.',
    },
    {
      title: 'O começo',
      text: 'Escolha um bicho básico da mão para ser o ativo, na frente, e até 5 para o banco, atrás. Sem bicho básico na mão, embaralha tudo e compra de novo. Quem começa não ataca no primeiro turno.',
    },
    {
      title: 'O turno',
      text: 'Compre 1 carta. Depois, na ordem que quiser: ponha bichos básicos no banco (até 5), prenda 1 energia por turno a um bicho seu, evolua bichos, jogue cartas de apoio e recue o ativo uma vez. Para terminar, ataque com o ativo ou passe a vez. Atacar encerra o turno.',
    },
    {
      title: 'Os estágios',
      text: 'Bicho básico entra direto. O estágio 1 vai em cima do básico certo, e o estágio 2 em cima do estágio 1. Não se evolui no seu primeiro turno, nem o bicho que entrou ou evoluiu neste turno. O bicho evoluído guarda o dano e a energia.',
    },
    {
      title: 'O ataque',
      text: 'Cada ataque custa energia presa ao ativo: os pontos coloridos são do bioma do bicho, e o resto é livre. O dano fica no bicho até ele sair; com dano igual aos PV, ele cai, com as cartas e a energia dele. Fraqueza: o dano dobra. Resistência: tira 30. As duas só valem no ativo. O ciclo de fraquezas é do app: a savana pega o gelo, o gelo pega a mata, a mata pega a montanha e a montanha pega a savana; quem voa resiste à savana.',
    },
    {
      title: 'Recuar',
      text: 'Uma vez por turno, você pode trocar o ativo por um bicho do banco, descartando do ativo tantas energias quanto o número de recuo dele. Quando o seu ativo cai, você escolhe outro no banco para ir à frente.',
    },
    {
      title: 'O que ficou de fora',
      text: 'Para o jogo caber no celular: não há as condições especiais (dormir, paralisar, envenenar, queimar e confundir), nem os tipos de carta de apoio (as que valem 1 por turno, as ferramentas e os lugares), nem os poderes fora do ataque, nem cartas que valem 2 prêmios, nem a carta a mais para o outro quando alguém repete a mão inicial. O baralho tem 40 cartas, e não 60 como no jogo homenageado. Na resistência, o app usa sempre 30; no jogo de verdade, o número vem impresso em cada carta.',
    },
  ],
  variants: [
    {
      name: 'Os 4 baralhos prontos',
      where: 'No app',
      text: 'Gelo do Sul (os Amigos do Linu: bichos grandes, com muitos PV, e o filhote de pinguim que vira o Tobias), Mata Viva (bichos do Brasil, baratos e rápidos, com o girino e a lagarta, que chega a borboleta), Céu e Montanha (Andes e Himalaia: voadores, o filhote de condor e muitas cartas de apoio) e Savana (África: a manada, com o filhote de leão e o de elefante). Escolha o seu e o do Linu.',
    },
  ],
  fontes: [
    { titulo: 'Wikipédia, “Pokémon Trading Card Game” (inglês)', url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game' },
    { titulo: 'Wikipédia, “Pokémon Trading Card Game” (português)', url: 'https://pt.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game' },
    { titulo: 'Wikipédia, “Metamorfose (biologia)”', url: 'https://pt.wikipedia.org/wiki/Metamorfose_(biologia)' },
    { titulo: 'Wikipédia, “Evolução”', url: 'https://pt.wikipedia.org/wiki/Evolu%C3%A7%C3%A3o' },
  ],
};
