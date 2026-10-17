import type { OutroJogo } from './tipos';

/**
 * Karuta do Hyakunin Isshu (uta-garuta), você contra o Linu.
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - JAANUS, “Hyakunin isshu 百人一首”: https://projects.mcah.columbia.edu/jaanus/node/3889 — reunido por
 *   Fujiwara no Teika entre 1235 e 1241; o nome “Ogura” vem dos poemas copiados nas portas de correr
 *   do retiro dele, perto do monte Ogura; base do jogo de cartas (utakaruta) jogado no Ano-Novo desde
 *   o começo do período Edo.
 * - Associação Japonesa de Karuta (karuta.or.jp), “The history of Ogura Hyakunin Isshu karuta's cards”:
 *   https://karuta.or.jp/2020/karuta2020/en/retro/index.html — no começo cada poema era dividido em
 *   duas cartas, e a carta do leitor passou a trazer o poema inteiro no fim do período Edo e começo do
 *   Meiji; as regras de hoje vêm de 1904, quando o jornalista Kuroiwa Ruikō organizou a primeira
 *   competição em Tóquio; o kimariji vem impresso bem de leve nas cartas de pegar, para iniciantes.
 * - Lafayette College, “History of Karuta”: https://exhibits.lafayette.edu/s/karuta/page/history —
 *   a impressão em xilogravura barateou as cartas, que viraram diversão popular no período Edo
 *   (1603-1868); a tradição das cartas no Japão começa com os baralhos portugueses do século XVI.
 * - “Karuta” vem do português “carta”: Wiktionary, “カルタ”: https://en.wiktionary.org/wiki/カルタ
 *   (a mesma fonte do hanafuda, em `cartas.ts`).
 * - Os poemas: `data/hyakunin-isshu.ts` (pacote ogura-hyakunin-isshu, licença Unlicense).
 * - O jeito de jogar do app (16 cartas espalhadas, só os poemas da mesa são lidos, a carta errada tira
 *   a chance no poema) é dito como regra do app, sem nome de modalidade.
 */
export const KARUTA: OutroJogo = {
  id: 'karuta',
  area: 'cartas',
  grupo: 'baralho',
  name: 'Karuta (Hyakunin Isshu)',
  emoji: '📜',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'os poemas, reunidos entre 1235 e 1241; o jogo, desde o começo do período Edo (séc. XVII)',
  where: 'Japão',
  povo: 'japoneses; os poemas foram reunidos por Fujiwara no Teika',
  regiao: 'asia',
  epoca: 'modernos',
  etimologia:
    '“Karuta” é a palavra portuguesa “carta”, que chegou ao Japão com os navegadores do século XVI e ficou. “Hyakunin isshu” (百人一首) quer dizer “cem pessoas, um poema cada”: são cem poetas, cada um com um poema. E “Ogura” é o monte Ogura, onde ficava o retiro do poeta que escolheu os poemas.',
  about:
    'O Hyakunin Isshu é uma antologia de cem poemas curtos japoneses (waka, de 5 versos), cada um de um poeta diferente, reunida pelo poeta Fujiwara no Teika entre 1235 e 1241. Os poemas foram copiados nas portas de correr do retiro dele, perto do monte Ogura, e por isso a coleção se chama Ogura Hyakunin Isshu. No começo do período Edo, no século XVII, os poemas viraram um jogo de cartas jogado no Ano-Novo: alguém lê o começo de um poema, e os outros correm para pegar a carta com o fim dele. Com a impressão em madeira, as cartas ficaram baratas e o jogo se espalhou. Em 1904, o jornalista Kuroiwa Ruikō organizou em Tóquio a primeira competição, com regras parecidas com as de hoje, e a karuta competitiva é jogada até hoje. Para aprender japonês, é um jeito de ouvir japonês clássico e treinar a leitura dos kana.',
  rules: [
    {
      title: 'As cartas',
      text: 'São 200 cartas: 100 do leitor, com o poema inteiro, e 100 de pegar, só com a segunda metade do poema (os 2 últimos versos), escrita em kana. As cartas de pegar ficam na mesa.',
    },
    {
      title: 'A leitura',
      text: 'O leitor lê a primeira metade de um poema (os 3 primeiros versos). Quem reconhece o poema toca na carta de pegar com a segunda metade dele, antes dos outros, e fica com a carta.',
    },
    {
      title: 'O kimariji',
      text: 'Não é preciso esperar o poema todo: as primeiras sílabas já dizem qual é. Sete poemas se reconhecem pela primeira sílaba (む, す, め, ふ, さ, ほ, せ); outros precisam de 2, 3 ou até 6. Essas sílabas que decidem o poema se chamam kimariji, e nas cartas de iniciante elas vêm impressas bem de leve.',
    },
    {
      title: 'No app',
      text: 'Ficam 16 cartas espalhadas na mesa, e o leitor lê os poemas delas em ordem sorteada, sílaba por sílaba, na tela. Toque na carta certa antes do Linu. Tocou na errada? Neste poema você não toca mais. Ganha quem pegar mais cartas. Depois de cada carta, o poema aparece inteiro, com o autor. O Linu espera ouvir o kimariji e demora mais ou menos conforme a dificuldade escolhida.',
    },
  ],
  fontes: [
    { titulo: 'JAANUS, “Hyakunin isshu 百人一首”', url: 'https://projects.mcah.columbia.edu/jaanus/node/3889' },
    { titulo: 'Associação Japonesa de Karuta, “The history of Ogura Hyakunin Isshu karuta’s cards”', url: 'https://karuta.or.jp/2020/karuta2020/en/retro/index.html' },
    { titulo: 'Lafayette College, “History of Karuta”', url: 'https://exhibits.lafayette.edu/s/karuta/page/history' },
    { titulo: 'Pacote “ogura-hyakunin-isshu” (os 100 poemas, Unlicense)', url: 'https://www.npmjs.com/package/ogura-hyakunin-isshu' },
  ],
  variants: [
    {
      name: 'Karuta competitiva',
      where: 'Japão, com regras desde a competição de 1904 em Tóquio',
      text: 'A karuta de competição, com regras que vêm da primeira competição, organizada pelo jornalista Kuroiwa Ruikō em Tóquio, em 1904, quando também se unificou o jogo de cartas.',
    },
    {
      name: 'A carta dividida, do período Edo',
      where: 'Japão, antes do período Meiji',
      text: 'No começo, cada poema era dividido em duas cartas. Só no fim do período Edo e começo do Meiji a carta do leitor passou a trazer o poema inteiro.',
    },
  ],
};
