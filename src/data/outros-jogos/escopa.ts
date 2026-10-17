import type { OutroJogo } from './tipos';

/**
 * Escopa (de 15), você contra o Linu.
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Copag, “Escopa” (regras): https://blog.copag.com.br/regras/escopa e
 *   https://www.copagloja.com.br/regras-jogos/escopa — 40 cartas (sem 8, 9 e 10); rei 10, valete 9,
 *   dama 8, ás 1; 3 cartas para cada um e 4 abertas na mesa; a vaza soma 15 com a carta jogada; a
 *   escopa limpa a mesa; a contagem: cada escopa 1; todos os ouros 2, a maioria dos ouros 1; o sete
 *   de ouros (Guindis) 1; os quatro 7, 3; a maioria das cartas 1; a maioria dos 7, 1; a partida vale
 *   21 ou 31 pontos. A Copag cita ainda 2 pontos “se o adversário tiver menos de 10 cartas”, regra que
 *   o resumo não deixou clara; o app não a usa e não fala dela.
 * - Wikipedia, “Escopa”: https://en.wikipedia.org/wiki/Escopa — a variante brasileira da scopa
 *   italiana, trazida pelos imigrantes italianos, registrada em 1951 em Cruz das Almas (Bahia); tem
 *   elementos da escoba espanhola e da escova portuguesa, todas ligadas à “scopa di quindici”.
 * - Wikipedia, “Scopa”: https://en.wikipedia.org/wiki/Scopa — um dos três grandes jogos nacionais da
 *   Itália (com a briscola e o tressette), já espalhado por toda a Itália no século XVIII.
 * - Wikipedia, “Escoba”: https://en.wikipedia.org/wiki/Escoba — a variante espanhola.
 * - Etimologia: Wikipedia, “Scopa” e “Escoba” (acima) — “scopa” é “vassoura” em italiano, e o jogo tem
 *   o nome do lance que varre a mesa; “escoba” quer dizer o mesmo em espanhol.
 * - As escolhas do app (levar é obrigatório quando dá 15; limpar a mesa na última jogada não conta
 *   escopa; o que sobra na mesa vai para quem fez a última vaza) são ditas como regras do app.
 */
export const ESCOPA: OutroJogo = {
  id: 'escopa',
  area: 'cartas',
  grupo: 'frances',
  name: 'Escopa',
  emoji: '🧹',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'a scopa já era jogada em toda a Itália no séc. XVIII; a escopa, registrada no Brasil em 1951',
  where: 'Brasil, vindo da Itália',
  povo: 'imigrantes italianos e brasileiros',
  regiao: 'americas',
  epoca: 'contemporaneos',
  etimologia:
    '“Escopa” vem do italiano “scopa”, que quer dizer “vassoura”, como a “escoba” espanhola: é o nome do lance que varre a mesa inteira. Em português, a palavra ficou com o jeito italiano, e o sete de ouros, a carta mais cobiçada, ganhou apelido: “Guindis”.',
  about:
    'A escopa é a versão brasileira da scopa, um dos três grandes jogos de cartas nacionais da Itália, ao lado da briscola e do tressette. A scopa já era jogada em toda a Itália no século XVIII, e chegou ao Brasil com os imigrantes italianos. Aqui ela misturou coisas da escoba espanhola e da escova portuguesa, e virou a “escopa de 15”: em vez de casar cartas iguais, junta-se uma carta da mão com cartas da mesa que, somadas, dão 15. Há registro dela em 1951, na cidade de Cruz das Almas, na Bahia. É um jogo de conta rápida: quem soma bem leva a mesa.',
  rules: [
    {
      title: 'As cartas',
      text: 'São 40 cartas: o baralho francês sem os 8, 9 e 10. Para somar, o ás vale 1, do 2 ao 7 vale o número, a dama vale 8, o valete 9 e o rei 10. Cada um recebe 3 cartas, e 4 ficam abertas na mesa.',
    },
    {
      title: 'Fazer 15',
      text: 'Na sua vez, jogue uma carta. Se ela, somada a uma ou mais cartas da mesa, dá 15, você leva todas (por exemplo, um 7 com um 5 e um 3 da mesa). Se não dá, a carta fica na mesa. Quando as mãos acabam, cada um recebe mais 3, até o monte acabar.',
    },
    {
      title: 'A escopa',
      text: 'Levar todas as cartas da mesa de uma vez é fazer uma escopa, que vale 1 ponto.',
    },
    {
      title: 'A contagem',
      text: 'No fim da mão: cada escopa, 1 ponto; quem levou mais ouros, 1 (todos os 10 ouros, 2); o sete de ouros, o Guindis, 1; quem levou mais setes, 1 (os quatro, 3); quem levou mais cartas, 1. A partida vai a 21 (ou 31, se combinarem).',
    },
    {
      title: 'No app',
      text: 'Você joga contra o Linu, até 21. Toque numa carta: se ela fizer 15 de um jeito só, a vaza é feita na hora; de mais de um jeito, você escolhe qual levar. No app, quando dá para fazer 15, é preciso levar; limpar a mesa na última jogada da mão não conta escopa; e o que sobra na mesa no fim fica com quem fez a última vaza.',
    },
  ],
  fontes: [
    { titulo: 'Copag, “Escopa” (regras)', url: 'https://blog.copag.com.br/regras/escopa' },
    { titulo: 'Wikipedia, “Escopa”', url: 'https://en.wikipedia.org/wiki/Escopa' },
    { titulo: 'Wikipedia, “Scopa”', url: 'https://en.wikipedia.org/wiki/Scopa' },
    { titulo: 'Wikipedia, “Escoba”', url: 'https://en.wikipedia.org/wiki/Escoba' },
  ],
  variants: [
    {
      name: 'Scopa',
      where: 'Itália',
      text: 'A original, um dos três grandes jogos de cartas da Itália, jogada com o baralho italiano. A conta do 15 vem de uma variante dela, a “scopa di quindici”.',
    },
    {
      name: 'Escoba',
      where: 'Espanha',
      text: 'A variante espanhola, com o baralho espanhol, também ligada à “scopa di quindici”, a scopa de 15.',
    },
  ],
};
