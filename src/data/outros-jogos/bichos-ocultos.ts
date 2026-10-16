import type { OutroJogo } from './tipos';

/**
 * BICHOS OCULTOS (pedido do dono, 16/10/2026): o jogo de cartas colecionáveis do LinuLingo que usa as
 * regras principais do Yu-Gi-Oh! Trading Card Game, com cartas nossas (os bichos do app, desenho
 * próprio). Só as regras e a mecânica: nenhum nome, termo, logotipo, arte ou texto de carta do jogo
 * homenageado; o nome dele aparece só para dizer de onde vêm as regras. Os termos característicos
 * ganharam palavras nossas (chamar, sacrifício, estrelas, virado, baixar, magia, armadilha).
 *
 * Fontes (consultadas em 16/10/2026):
 * - Wikipédia em inglês, “Yu-Gi-Oh! Trading Card Game”: https://en.wikipedia.org/wiki/Yu-Gi-Oh!_Trading_Card_Game
 *   — da Konami, a partir do mangá de Kazuki Takahashi; no Japão em 1999 (04/02/1999), na América
 *   do Norte em março de 2002 (distribuído pela Upper Deck até 2009); recorde do Guinness em
 *   07/07/2009 como o jogo de cartas colecionáveis mais vendido, com mais de 22 bilhões de cartas, e
 *   cerca de 35 bilhões até janeiro de 2021; as regras: 8000 de vida, baralho principal de 40 a 60,
 *   mão de no máximo 6 no fim do turno, 1 chamada por turno, sacrifício de 1 para 5–6 estrelas e de
 *   2 para 7 ou mais, a batalha de ATQ contra ATQ e contra DEF, quem começa não compra nem ataca.
 * - Wikipédia em inglês, “Yu-Gi-Oh!”: https://en.wikipedia.org/wiki/Yu-Gi-Oh! — o mangá começou na
 *   Weekly Shōnen Jump em 17/09/1996; o título 遊☆戯☆王 quer dizer, ao pé da letra, “rei dos jogos”
 *   (“Game King”); o jogo de cartas da história se chamava antes “Magic & Wizards”.
 * - Wikipédia em português, “Yu-Gi-Oh! Trading Card Game”: https://pt.wikipedia.org/wiki/Yu-Gi-Oh!_Trading_Card_Game
 */
export const BICHOS_OCULTOS: OutroJogo = {
  id: 'bichos-ocultos',
  area: 'cartas',
  grupo: 'jogos',
  name: 'Bichos Ocultos',
  emoji: '🃏',
  status: 'pronto',
  playable: true,
  linu: true,
  year: '2026 (no app); homenagem a um jogo de 1999',
  where: 'LinuLingo; regras do Yu-Gi-Oh! Trading Card Game (Japão)',
  povo: 'Kazuki Takahashi, autor do mangá, e a Konami, que fez o jogo homenageado; cartas do LinuLingo',
  regiao: 'asia',
  epoca: 'atuais',
  etimologia:
    'O nome é nosso: “ocultos” porque o bicho pode entrar virado para baixo, e o outro só descobre quem é quando o ataca, como um bicho camuflado no mato. O jogo homenageado vem de um mangá japonês cujo título, 遊☆戯☆王 (Yū Gi Ō), quer dizer, ao pé da letra, “rei dos jogos”. (Fonte: Wikipédia, “Yu-Gi-Oh!”.)',
  about:
    'Este jogo usa as regras principais do Yu-Gi-Oh! Trading Card Game, com cartas do LinuLingo. O jogo homenageado nasceu de um mangá de Kazuki Takahashi, que começou numa revista japonesa em setembro de 1996 e tinha um jogo de cartas dentro da história. A Konami transformou esse jogo de faz de conta em cartas de verdade: saiu no Japão em 1999 e na América do Norte em 2002. Em 2009, entrou para o Guinness como o jogo de cartas colecionáveis mais vendido, com mais de 22 bilhões de cartas. Aqui, as cartas são nossas: os bichos do app, os Amigos do Linu com os nomes que já têm, com estrelas, ataque (ATQ) e defesa (DEF). São 4 baralhos prontos de 40 cartas: Gelo do Sul, Mata Viva, Céu e Montanha e Savana.',
  rules: [
    {
      title: 'O objetivo',
      text: 'Cada lado começa com 8000 de vida, um baralho de 40 cartas e 5 na mão. Zere a vida do outro. Quem precisa comprar e não tem carta no baralho perde.',
    },
    {
      title: 'O turno',
      text: 'Compre 1 carta (quem começa a partida não compra no 1º turno). Na fase principal, jogue cartas. Depois vem a batalha (quem começa não ataca no 1º turno), a segunda fase principal e o fim. No fim do turno, a mão guarda no máximo 6 cartas.',
    },
    {
      title: 'Chamar bichos',
      text: 'Uma chamada por turno: o bicho entra de frente, em ataque, ou virado para baixo, em defesa (aí o outro não sabe quem é). Até 4 estrelas, entra direto. Com 5 ou 6 estrelas, mande 1 bicho seu para o descarte em sacrifício; com 7 ou mais, 2. Cabem 5 bichos no campo.',
    },
    {
      title: 'A batalha',
      text: 'Cada bicho de frente, em ataque, ataca uma vez. ATQ contra ATQ: o mais fraco cai, e o dono dele perde a diferença na vida; empate derruba os dois. ATQ contra DEF: se o ATQ for maior, o defensor cai, sem dano na vida; se a DEF for maior, quem atacou perde a diferença. O bicho virado vira para cima quando é atacado. Com o campo do outro vazio, o ataque vai direto na vida.',
    },
    {
      title: 'Magias e armadilhas',
      text: 'A magia vai na fase principal e faz efeito na hora. A armadilha é baixada virada e só dispara a partir do turno seguinte, quando acontece o que ela diz (o outro chama um bicho ou ataca). Cabem 5 cartas baixadas.',
    },
    {
      title: 'Mudar a posição',
      text: 'Uma vez por turno, cada bicho pode trocar entre ataque e defesa, menos no turno em que entrou. O bicho virado, ao mudar, vira para cima em ataque.',
    },
    {
      title: 'O que ficou de fora',
      text: 'Para o jogo caber no celular: os bichos não têm efeitos, só números; não há fusão, ritual nem o baralho extra; não há a cadeia de respostas (cada armadilha resolve na hora); nem magias rápidas, contínuas, de equipamento e de campo; nem baixar magia virada. O baralho tem sempre 40 cartas (no jogo homenageado, de 40 a 60). Se a mão passar de 6 no fim do turno, o app descarta sozinho os bichos mais fracos.',
    },
  ],
  variants: [
    {
      name: 'Os 4 baralhos prontos',
      where: 'No app',
      text: 'Gelo do Sul (os Amigos do Linu: defesa alta e a Jubi, de 8 estrelas), Mata Viva (muitos bichos baratos para atacar cedo), Céu e Montanha (Andes e Himalaia: menos bichos e mais magias e armadilhas) e Savana (a manada, com o leão, o rinoceronte e o elefante). Escolha o seu e o do Linu.',
    },
  ],
  fontes: [
    { titulo: 'Wikipédia, “Yu-Gi-Oh! Trading Card Game” (inglês)', url: 'https://en.wikipedia.org/wiki/Yu-Gi-Oh!_Trading_Card_Game' },
    { titulo: 'Wikipédia, “Yu-Gi-Oh! Trading Card Game” (português)', url: 'https://pt.wikipedia.org/wiki/Yu-Gi-Oh!_Trading_Card_Game' },
    { titulo: 'Wikipédia, “Yu-Gi-Oh!” (inglês)', url: 'https://en.wikipedia.org/wiki/Yu-Gi-Oh!' },
  ],
};
