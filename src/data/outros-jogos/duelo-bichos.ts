import type { OutroJogo } from './tipos';

/**
 * DUELO DE BICHOS (pedido do dono, 16/10/2026): o jogo de cartas colecionáveis PRÓPRIO do LinuLingo.
 * Mistura três ideias dos grandes jogos do gênero, só pela mecânica: um recurso que cresce a cada
 * turno (como a energia do Magic), bichos que evoluem por cima do filhote (como no Pokémon) e
 * armadilhas viradas para baixo (como no Yu-Gi-Oh!). Nenhum nome, termo, logotipo, arte ou texto de
 * carta deles: as cartas são os bichos do app, desenho próprio, e o recurso é o krill.
 *
 * Fontes da história (consultadas em 16/10/2026):
 * - Wikipédia em inglês, “Magic: The Gathering”: https://en.wikipedia.org/wiki/Magic:_The_Gathering —
 *   Richard Garfield, Wizards of the Coast, agosto de 1993.
 * - Wikipédia em inglês, “Pokémon Trading Card Game”: https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game
 *   — lançado no Japão em outubro de 1996 pela Media Factory; nos Estados Unidos, pela Wizards of the
 *   Coast, em 1999; desde 2003, publicado pela The Pokémon Company.
 * - Wikipédia em inglês, “Yu-Gi-Oh! Trading Card Game”: https://en.wikipedia.org/wiki/Yu-Gi-Oh!_Trading_Card_Game
 *   — da Konami, a partir do mangá de Kazuki Takahashi (1996); o jogo de cartas oficial saiu no Japão
 *   em 1999.
 * - Wikipédia em inglês, “Collectible card game”: https://en.wikipedia.org/wiki/Collectible_card_game
 */
export const DUELO_BICHOS: OutroJogo = {
  id: 'duelo-de-bichos',
  area: 'cartas',
  grupo: 'tcg',
  name: 'Duelo de Bichos',
  emoji: '🐧',
  status: 'pronto',
  playable: true,
  linu: true,
  year: '2026',
  where: 'LinuLingo',
  povo: 'jogo próprio do LinuLingo',
  regiao: 'americas',
  epoca: 'atuais',
  etimologia:
    'O nome diz o que é: um duelo, de um contra um, com os bichos do app. O recurso se chama krill porque o krill, o crustáceo pequenininho do Kiko, é a comida que sustenta quase toda a vida do mar da Antártida.',
  about:
    'O Duelo de Bichos é o jogo de cartas colecionáveis do próprio LinuLingo. Ele presta homenagem aos três jogos que fizeram a história do gênero, pegando uma ideia de cada um, mas com cartas e regras nossas. O primeiro foi o Magic: The Gathering, criado pelo matemático Richard Garfield e lançado pela Wizards of the Coast em 1993: cada jogador monta o seu baralho com as cartas que junta, e a energia para jogá-las cresce a cada turno. Em 1996 veio, no Japão, o Pokémon Estampas Ilustradas, da Media Factory (nos Estados Unidos, pela Wizards of the Coast, em 1999; hoje, pela The Pokémon Company), com criaturas que evoluem por estágios. Em 1999, a Konami lançou o jogo de cartas do Yu-Gi-Oh!, nascido do mangá de Kazuki Takahashi, com armadilhas viradas para baixo que pegam o adversário de surpresa. Aqui, os bichos são os do app: os Amigos do Linu com os nomes que já têm, e bichos do Brasil, dos Andes e do Himalaia e da África.',
  rules: [
    {
      title: 'O objetivo',
      text: 'Cada lado começa com 20 de vida e um baralho pronto de 30 cartas. Vence quem zerar a vida do outro. A partida dura uns 10 minutos.',
    },
    {
      title: 'O começo e o krill',
      text: 'Quem começa recebe 5 cartas, e o outro, 6. No começo do seu turno, o krill máximo sobe 1 (até 8), o krill enche e você compra 1 carta (quem começa não compra no 1º turno). Sem carta para comprar, você perde 1 de vida. A mão guarda até 8: a 9ª comprada vai para o descarte.',
    },
    {
      title: 'Bichos e evolução',
      text: 'Pague o custo em krill para pôr um bicho no campo (até 5). Ele só ataca no turno seguinte, a não ser que tenha Ímpeto. A evolução vai por cima de um bicho seu do ramo certo que está no campo desde o começo do turno (Filhote de pinguim-imperador → Tobias; Girino → Sapo-cururu; Lagarta → Borboleta-azul; Filhote de condor → Condor-dos-andes; Filhote de leão → Leão; Filhote de elefante → Elefante-africano) e cura o bicho.',
    },
    {
      title: 'Truques e armadilhas',
      text: 'O truque faz efeito na hora e vai para o descarte. A armadilha custa 1 de krill e fica virada para baixo (até 2): ela dispara sozinha no turno do outro, quando acontece o que está escrito nela.',
    },
    {
      title: 'O ataque',
      text: 'Cada bicho ataca uma vez por turno: um bicho inimigo ou a vida do dono. Os dois trocam dano igual ao ataque, e o dano fica até o bicho sair. Guarda: enquanto houver um bicho com Guarda do outro lado, os ataques têm de ir nele. Voo: o bicho com Voo passa por cima da Guarda.',
    },
  ],
  variants: [
    {
      name: 'Os 4 baralhos prontos',
      where: 'No app',
      text: 'Gelo do Sul (os Amigos do Linu, com Guarda e a evolução do Tobias), Mata Viva (bichos do Brasil, rápidos, com emboscadas), Céu e Montanha (Andes e Himalaia, voadores e truques) e Savana (África: a manada, com o leão e o elefante que evoluem do filhote).',
    },
  ],
  fontes: [
    { titulo: 'Wikipédia, “Magic: The Gathering”', url: 'https://en.wikipedia.org/wiki/Magic:_The_Gathering' },
    { titulo: 'Wikipédia, “Pokémon Trading Card Game”', url: 'https://en.wikipedia.org/wiki/Pok%C3%A9mon_Trading_Card_Game' },
    { titulo: 'Wikipédia, “Yu-Gi-Oh! Trading Card Game”', url: 'https://en.wikipedia.org/wiki/Yu-Gi-Oh!_Trading_Card_Game' },
    { titulo: 'Wikipédia, “Collectible card game”', url: 'https://en.wikipedia.org/wiki/Collectible_card_game' },
  ],
};
