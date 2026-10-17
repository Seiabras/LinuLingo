import type { OutroJogo } from './tipos';

/**
 * Paciência, no jogo Klondike (o “paciência” do computador).
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Wikipedia, “Patience (game)”: https://en.wikipedia.org/wiki/Patience_(game) — a descrição mais
 *   antiga conhecida de um jogo de paciência está na edição de 1783 da coletânea alemã “Das neue
 *   Königliche L'Hombre-Spiel”; origem provavelmente alemã ou escandinava; o primeiro livro só de
 *   paciências saiu na Rússia, em 1826; “Patience” é o nome mais antigo registrado nas fontes
 *   britânicas e americanas, e a palavra é francesa.
 * - Wikipedia, “Lady Adelaide Cadogan”: https://en.wikipedia.org/wiki/Lady_Adelaide_Cadogan — o
 *   “Illustrated Games of Patience”, tido como a primeira coletânea em inglês.
 * - Wikipedia, “Klondike (solitaire)”: https://en.wikipedia.org/wiki/Klondike_(solitaire) — a origem
 *   do nome é desconhecida; alguns autores ligam à corrida do ouro do Klondike, sem prova; as regras
 *   mais antigas conhecidas estão no “Hoyle's Games” de 1907, com o nome “Seven-Card Klondike”.
 * - Wikipedia, “Microsoft Solitaire”: https://en.wikipedia.org/wiki/Microsoft_Solitaire — feito no
 *   verão de 1988 pelo estagiário Wes Cherry, saiu com o Windows 3.0 em 1990; as cartas foram
 *   desenhadas por Susan Kare.
 * - Etymonline, “patience”: https://www.etymonline.com/word/patience — o sentido de “jogo de cartas
 *   para uma pessoa” aparece em 1816; “solitaire”, do francês, do latim “solitarius” (“sozinho”).
 * - Variante Vegas: Solitaire.com, “Vegas solitaire rules & scoring”:
 *   https://solitaire.com/blog/vegas-solitaire-rules-scoring/ — entrada de 52 dólares e 5 dólares por
 *   carta na fundação. As fontes discordam sobre quantas vezes o monte pode voltar, por isso o texto
 *   não diz.
 */
export const PACIENCIA: OutroJogo = {
  id: 'paciencia',
  area: 'cartas',
  grupo: 'frances',
  name: 'Paciência (Klondike)',
  emoji: '🃏',
  status: 'pronto',
  playable: true,
  year: 'paciência descrita em 1783; o Klondike, em 1907',
  where: 'Europa (a paciência); Estados Unidos (o Klondike)',
  povo: 'alemães ou escandinavos, segundo as fontes; o Klondike nas regras do “Hoyle’s Games”',
  regiao: 'europa',
  epoca: 'modernos',
  etimologia:
    '“Paciência” é a tradução do nome francês do jogo, “patience”, que é também o nome mais antigo registrado em inglês: o jogo se chama assim pela paciência que pede. Nos Estados Unidos ele ficou conhecido como “solitaire”, palavra francesa que vem do latim “solitarius”, “sozinho”. E “Klondike” é um mistério: há quem ligue o nome à corrida do ouro do Klondike, no Canadá, no fim do século XIX, mas nenhuma prova confirma.',
  about:
    'Os jogos de paciência são jogos de cartas para uma pessoa só. A descrição mais antiga que se conhece está numa coletânea alemã de jogos, de 1783, e as fontes apontam uma origem alemã ou escandinava. O primeiro livro só de paciências saiu na Rússia, em 1826; em inglês, o mais famoso é o “Illustrated Games of Patience”, de Lady Adelaide Cadogan. O Klondike, a paciência mais jogada do mundo, aparece pela primeira vez com regras no “Hoyle’s Games” de 1907, com o nome de “Seven-Card Klondike”. Ele ficou famoso de vez no computador: no verão de 1988, o estagiário Wes Cherry fez uma paciência para o Windows, que saiu com o Windows 3.0 em 1990, com as cartas desenhadas por Susan Kare.',
  rules: [
    {
      title: 'A mesa',
      text: 'Um baralho de 52 cartas. Sete colunas: a primeira com 1 carta, a segunda com 2, até a sétima com 7, e só a última de cada coluna aberta. As outras 24 cartas formam o monte, viradas para baixo. Em cima ficam as 4 fundações, uma por naipe, que começam vazias.',
    },
    {
      title: 'O objetivo',
      text: 'Levar as 52 cartas para as fundações, cada naipe do ás ao rei, em ordem.',
    },
    {
      title: 'As colunas',
      text: 'Nas colunas, as cartas descem de um em um, alternando vermelho e preto: um 6 de copas vai sobre um 7 de espadas ou de paus. Dá para mudar uma sequência inteira de coluna de uma vez. Quando a carta de cima de uma pilha fechada fica livre, ela se abre. Coluna vazia só recebe rei (ou uma sequência que começa com rei).',
    },
    {
      title: 'O monte',
      text: 'Toque no monte para comprar uma carta, que vai para o descarte; a carta de cima do descarte pode ir para uma coluna ou para a fundação. Quando o monte acaba, o descarte volta inteiro para o monte, na mesma ordem.',
    },
    {
      title: 'No app',
      text: 'Toque numa carta e depois no lugar para onde ela vai. Tocar de novo na carta escolhida manda ela para o melhor lugar (a fundação, se der). Quando o monte acaba e todas as cartas estão abertas, aparece o botão “Terminar sozinho”. Dá para desfazer quantos lances quiser.',
    },
  ],
  fontes: [
    { titulo: 'Wikipedia, “Patience (game)”', url: 'https://en.wikipedia.org/wiki/Patience_(game)' },
    { titulo: 'Wikipedia, “Klondike (solitaire)”', url: 'https://en.wikipedia.org/wiki/Klondike_(solitaire)' },
    { titulo: 'Wikipedia, “Microsoft Solitaire”', url: 'https://en.wikipedia.org/wiki/Microsoft_Solitaire' },
    { titulo: 'Wikipedia, “Lady Adelaide Cadogan”', url: 'https://en.wikipedia.org/wiki/Lady_Adelaide_Cadogan' },
    { titulo: 'Etymonline, “patience”', url: 'https://www.etymonline.com/word/patience' },
    { titulo: 'Solitaire.com, “Vegas solitaire rules & scoring”', url: 'https://solitaire.com/blog/vegas-solitaire-rules-scoring/' },
  ],
  variants: [
    {
      name: 'Comprando 3 cartas',
      where: 'a regra mais difícil do Klondike, também no paciência do Windows',
      text: 'Cada toque no monte compra 3 cartas de uma vez, e só a de cima delas está em jogo: para chegar à de baixo, é preciso jogar antes as de cima. Muitas cartas ficam presas no descarte, então ganhar é bem mais raro.',
      jogavel: 'tres',
    },
    {
      name: 'Vegas',
      where: 'a pontuação “de cassino” dos programas de paciência',
      text: 'A partida começa devendo: a entrada custa 52 dólares de mentira, e cada carta que chega à fundação paga 5. Só sai no lucro quem leva pelo menos 11 cartas para as fundações. Os programas mudam no número de vezes que o monte pode voltar.',
    },
  ],
};
