import type { OutroJogo } from './tipos';

/*
 * Pong — fontes (consultadas em 14/10/2026):
 * - Wikipédia em inglês, “Pong” (https://en.wikipedia.org/wiki/Pong): lançado em 29/11/1972 nos
 *   EUA; Alcorn fez o jogo como exercício de treino passado por Bushnell; Bushnell jogou o tênis de
 *   mesa do Magnavox Odyssey numa demonstração em Burlingame em maio de 1972; o protótipo foi para a
 *   Andy Capp's Tavern, em Sunnyvale, e parou porque a caixa de moedas encheu; raquete com oito
 *   segmentos, bola que acelera, partida até 11; a Magnavox processou a Atari em abril de 1974 e a
 *   Atari fez acordo em junho de 1976, virando licenciada; Home Pong pela Sears (Tele-Games) em 1975,
 *   cerca de 150 mil aparelhos naquele Natal; Pong Doubles para quatro jogadores em duplas; clones da
 *   Ramtek e da Nutting em poucos meses, a Atari fez menos de um terço das máquinas (Steven Kent);
 *   Breakout (1976) como variação de um jogador.
 * - Wikipédia em português, “Pong” (https://pt.wikipedia.org/wiki/Pong): os mesmos fatos; diz
 *   setembro de 1972 para a Andy Capp's (a inglesa diz agosto), por isso o texto fala só “1972”.
 *   Os valores do acordo divergem entre as duas, por isso não há número no texto.
 * - Computer History Museum, “Computer Games: Pong”
 *   (https://www.computerhistory.org/revolution/computer-games/16/183): Alcorn criou o Pong para a
 *   Atari em 1972; a Atari virou “a primeira empresa de videogame de sucesso”; não patenteou o jogo
 *   e os concorrentes copiaram; Alcorn, chamado ao bar, tirando “punhados de moedas de 25 centavos”.
 * - Wikipédia em inglês, “First video game” (https://en.wikipedia.org/wiki/First_video_game): OXO
 *   (1952, A. S. Douglas, EDSAC, Cambridge; só no laboratório); Tennis for Two (1958); Spacewar!
 *   (1962, PDP-1, MIT); Computer Space (1971), o primeiro videogame de fliperama vendido.
 * - Brookhaven National Laboratory, “The First Video Game?”
 *   (https://www.bnl.gov/about/history/firstvideo.php): Tennis for Two, de William Higinbotham,
 *   estreou em 18/10/1958 no dia de visitas do laboratório, num osciloscópio.
 * - Wikipédia em inglês, “Magnavox Odyssey” (https://en.wikipedia.org/wiki/Magnavox_Odyssey):
 *   primeiro console doméstico comercial, setembro de 1972, equipe de Ralph H. Baer na Sanders
 *   Associates; o protótipo “Brown Box” está no Museu Nacional de História Americana (Smithsonian).
 */
export const VIDEOGAMES: OutroJogo[] = [
  {
    id: 'pong',
    area: 'videogames',
    name: 'Pong',
    emoji: '🏓',
    status: 'pronto',
    year: '1972',
    where: 'Estados Unidos (Califórnia)',
    regiao: 'americas',
    epoca: 'contemporaneos',
    about:
      'O Pong é um tênis de mesa visto de cima: duas raquetes, uma bola e um placar. A Atari lançou o jogo em novembro de 1972. ' +
      'Quem o fez foi o engenheiro Allan Alcorn, por encomenda de Nolan Bushnell, um dos donos da empresa. Bushnell passou a tarefa como um treino, mas o resultado ficou tão bom que virou o primeiro produto da Atari.\n\n' +
      'A ideia não nasceu do nada. Em maio de 1972, Bushnell tinha jogado o tênis de mesa do Magnavox Odyssey, o primeiro console de videogame para a TV de casa, criado pela equipe de Ralph Baer. ' +
      'A Magnavox processou a Atari em 1974, e a Atari fez um acordo em 1976 e passou a pagar licença. O protótipo da “Brown Box”, de Baer, hoje está no Smithsonian, em Washington.\n\n' +
      'O primeiro Pong de verdade foi testado em 1972 num bar de Sunnyvale, a Andy Capp\'s Tavern. Dias depois, a máquina parou. Alcorn foi ver o defeito e achou a caixa de moedas lotada: tinha gente demais jogando.\n\n' +
      'Muita gente acha que o Pong foi o primeiro videogame. Não foi! Ele foi o primeiro grande sucesso comercial, o jogo que levou o videogame para bares e casas. ' +
      'Antes dele já existiam o OXO (1952), um jogo da velha no computador EDSAC, da Universidade de Cambridge; o Tennis for Two (1958), um tênis num osciloscópio feito por William Higinbotham para o dia de visitas do Laboratório Brookhaven; ' +
      'o Spacewar! (1962), uma batalha de naves no computador PDP-1, do MIT; e o Computer Space (1971), de Bushnell, o primeiro videogame de fliperama à venda, que vendeu pouco. ' +
      'Os primeiros só rodavam em laboratórios. O Pong foi o que todo mundo pôde jogar.',
    rules: [
      { title: 'O objetivo', text: 'Rebata a bola com a sua raquete e faça o outro lado errar. Cada bola que passa pela raquete do adversário é um ponto seu. Ganha quem fizer 11 pontos primeiro.' },
      { title: 'A raquete', text: 'A raquete tem oito partes. No meio, a bola volta reta. Nas pontas, volta inclinada: quanto mais na ponta, mais inclinada. É assim que se tira a bola do alcance do outro.' },
      { title: 'A velocidade', text: 'A bola fica mais rápida a cada rebatida. Quando alguém erra, ela volta à velocidade do começo e é sacada do meio, rumo a quem perdeu o ponto.' },
      { title: 'Paredes', text: 'A bola tabela nas paredes de cima e de baixo. Só os lados contam ponto.' },
      {
        title: 'Como jogar no app',
        text: 'No celular, arraste o dedo para cima e para baixo na sua metade da tela. No computador, use W e S ou as setas, ou mexa o mouse. Dá para jogar contra o Linu, em três níveis, ou a dois no mesmo aparelho. O espaço (ou o botão) pausa.',
      },
    ],
    variants: [
      { name: 'Home Pong', where: 'Estados Unidos, 1975', text: 'O Pong para ligar na TV de casa, vendido primeiro pela Sears com a marca Tele-Games. Vendeu cerca de 150 mil aparelhos no Natal de 1975.' },
      { name: 'Pong Doubles', where: 'Estados Unidos, anos 1970', text: 'Pong para quatro pessoas, em duplas: duas raquetes de cada lado da tela.' },
      {
        name: 'Os clones',
        where: 'Estados Unidos, Japão e Europa, anos 1970',
        text: 'A Atari não patenteou o jogo a tempo. Em poucos meses, outras empresas, como a Ramtek e a Nutting, lançaram cópias. Segundo o historiador Steven Kent, a Atari fez menos de um terço das máquinas de Pong que existiam. Depois vieram versões caseiras de muitas marcas, como o Telstar, da Coleco, e as da Nintendo.',
      },
      { name: 'Breakout', where: 'Estados Unidos, 1976', text: 'O “filho” do Pong para uma pessoa só: a raquete fica embaixo e a bola quebra os tijolos de uma parede. Foi lançado pela própria Atari.' },
    ],
    playable: true,
    linu: true,
  },
];
