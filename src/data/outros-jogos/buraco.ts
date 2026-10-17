import type { OutroJogo } from './tipos';

/**
 * Buraco (aberto), um contra um.
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Wikipedia, “Canasta”: https://en.wikipedia.org/wiki/Canasta — a canastra foi inventada em
 *   Montevidéu, no Uruguai, em 1939, pelo advogado Segundo Sánchez Santos e pelo arquiteto Alberto
 *   Serrato, parceiros de bridge, como um jogo mais rápido que o bridge; “canasta” é “cesto” em
 *   espanhol. Britannica, “canasta”: https://www.britannica.com/summary/canasta — o nome lembra
 *   provavelmente a bandeja (o cesto) do descarte (a Britannica põe a origem no fim dos anos 1940).
 * - Wikipedia, “Buraco”: https://en.wikipedia.org/wiki/Buraco (lido numa cópia, kiwix.lema.org) —
 *   o buraco, também chamado de biriba ou canastra no Brasil, de onde vem, nos anos 1940, do Uruguai
 *   e da Argentina; o nome “buraco” lembra o placar negativo de uma das duplas.
 * - Wikipédia, “Buraco (jogo de cartas)”: https://pt.wikipedia.org/wiki/Buraco_(jogo_de_cartas) —
 *   104 cartas, 11 na mão e 2 mortos; canastra limpa 200 e suja 100; a partida vai a 3000 ou 5000
 *   pontos; quem não pega o morto perde 100.
 * - Jogatina, “Regras do Buraco Fechado”: https://www.jogatina.com/regras-como-jogar-buraco-fechado.html
 *   — o valor das cartas (3 a 7: 5; 8 a K: 10; ás: 15; o 2 como coringa: 10) e a batida, 100; e
 *   “Regras de buraco aberto” (PDF): http://static.jogatina.com.s3.amazonaws.com/downloads/buraco/regras-buraco-aberto.pdf
 *   — no aberto, pode-se pegar o lixo inteiro.
 * - Jogos do Rei, “Buraco: regras”: https://www.jogosdorei.com.br/regras-buraco.php — só valem
 *   sequências de 3 ou mais do mesmo naipe (trinca não vale); canastra com 7 cartas ou mais; um
 *   coringa por jogo; para bater, o morto pego e uma canastra limpa (no fechado, basta a suja).
 * - O um contra um, com um morto para cada, é a forma de dois jogadores das mesmas regras; o texto diz
 *   que é a escolha do app.
 */
export const BURACO: OutroJogo = {
  id: 'buraco',
  area: 'cartas',
  grupo: 'frances',
  name: 'Buraco',
  emoji: '♦️',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'a canastra nasce em 1939; o buraco, nos anos 1940',
  where: 'Uruguai e Argentina; no Brasil, o buraco',
  povo: 'uruguaios (a canastra, de Segundo Sánchez Santos e Alberto Serrato); brasileiros, com o buraco',
  regiao: 'americas',
  epoca: 'contemporaneos',
  etimologia:
    '“Canastra” vem do espanhol “canasta”, que quer dizer “cesto”: provavelmente o cesto ou a bandeja onde ficavam as cartas descartadas. E “buraco” lembra o placar negativo: é o que fica de quem joga mal.',
  about:
    'A canastra foi inventada em 1939 em Montevidéu, no Uruguai, por dois parceiros de bridge, o advogado Segundo Sánchez Santos e o arquiteto Alberto Serrato, que queriam um jogo mais rápido que o bridge. Ela se espalhou pela América do Sul nos anos 1940 e depois pelo mundo. No Brasil, ela ganhou outros nomes e jeitos de jogar, como o buraco e a biriba. O buraco é um jogo de baixar sequências: com dois baralhos, cada jogador junta cartas do mesmo naipe em ordem, tenta formar canastras de 7 cartas e corre para “bater”, ficando sem cartas na mão. Cada jogador (ou dupla) tem um “morto”, um monte de 11 cartas guardado para quando a mão acaba.',
  rules: [
    {
      title: 'Cartas e morto',
      text: 'São dois baralhos franceses, 104 cartas. Cada um recebe 11 cartas, e mais dois montes de 11 ficam de lado: os mortos. Uma carta abre o lixo, e o resto é o monte.',
    },
    {
      title: 'A vez',
      text: 'Na sua vez, compre uma carta do monte ou pegue o lixo inteiro. Depois, baixe jogos ou junte cartas aos jogos que já tem na mesa. No fim, descarte uma carta no lixo.',
    },
    {
      title: 'Os jogos e o coringa',
      text: 'Um jogo é uma sequência de 3 ou mais cartas do mesmo naipe (5, 6, 7 de copas). Trinca não vale. O 2 é coringa e entra no lugar de qualquer carta, mas só um por jogo; o 2 do próprio naipe, no lugar dele (A, 2, 3), é carta comum. O ás vale antes do 2 ou depois do rei.',
    },
    {
      title: 'Canastras e morto',
      text: 'Um jogo com 7 cartas ou mais é uma canastra: limpa, sem coringa, vale 200 pontos; suja, com coringa, 100. Quem fica sem cartas na mão pela primeira vez pega o seu morto e continua.',
    },
    {
      title: 'Bater e contar',
      text: 'Para bater (ficar sem cartas de novo), é preciso já ter pegado o morto e ter uma canastra limpa. A batida vale 100. Cada carta baixada soma: 3 a 7, 5 pontos; 8 a K, 10; o ás, 15; o 2, 10. As cartas que ficaram na mão contam contra, e quem não pegou o morto perde 100. A partida vai a 3000 pontos.',
    },
    {
      title: 'No app',
      text: 'É um contra um, você e o Linu, cada um com o seu morto. Toque nas cartas da mão para escolher; com 3 ou mais que formam um jogo, “Baixar jogo”; para juntar, toque num jogo seu destacado; para passar a vez, escolha uma só e “Descartar”. Se o monte acaba, um morto que ninguém pegou vira monte; sem ele, a mão termina.',
    },
  ],
  fontes: [
    { titulo: 'Wikipédia, “Buraco (jogo de cartas)”', url: 'https://pt.wikipedia.org/wiki/Buraco_(jogo_de_cartas)' },
    { titulo: 'Wikipedia, “Canasta”', url: 'https://en.wikipedia.org/wiki/Canasta' },
    { titulo: 'Britannica, “canasta”', url: 'https://www.britannica.com/summary/canasta' },
    { titulo: 'Jogatina, “Regras do Buraco Fechado”', url: 'https://www.jogatina.com/regras-como-jogar-buraco-fechado.html' },
    { titulo: 'Jogatina, “Regras de buraco aberto” (PDF)', url: 'http://static.jogatina.com.s3.amazonaws.com/downloads/buraco/regras-buraco-aberto.pdf' },
    { titulo: 'Jogos do Rei, “Buraco: regras”', url: 'https://www.jogosdorei.com.br/regras-buraco.php' },
  ],
  variants: [
    {
      name: 'Buraco fechado',
      where: 'Brasil',
      text: 'Do lixo só se vê a carta de cima, e só se pode pegá-lo se essa carta entrar num jogo seu. Para bater, basta uma canastra suja.',
    },
    {
      name: 'Em duplas',
      where: 'o jeito descrito nas regras, com 4 jogadores',
      text: 'Duas duplas, com um morto para cada dupla, e as mesmas regras de baixar, bater e contar.',
    },
  ],
};
