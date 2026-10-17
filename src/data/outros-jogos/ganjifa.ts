import type { OutroJogo } from './tipos';

/**
 * Ganjifa, as cartas redondas da Índia e da Pérsia. Só a ficha (história e baralho), sem versão
 * jogável: as regras do jogo variam de região para região, e as fontes nem concordam no número de
 * jogadores (3 ou 4), então o app não inventa uma (regra do AGENTS.md: nada inventado).
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Wikipedia, “Ganjifa”: https://en.wikipedia.org/wiki/Ganjifa — o baralho mogol de 96 cartas em 8
 *   naipes, cada um com 2 figuras (o mir, rei, e o wazir, ministro) e 10 cartas de número; o mir é a
 *   carta mais alta; é da grande família dos jogos de vazas, com regras que mudam de região para
 *   região; a primeira menção escrita é do tempo dos mamelucos (1399-1412); Babur fala do jogo num
 *   registro de 1527; Abul Fazl conta que Akbar simplificou o jogo; os naipes do baralho mogol (taj,
 *   safed, shamsher, ghulam, chang, surkh, barat, qimash).
 * - Ashmolean Museum (Oxford), “Persian and Indian playing cards”:
 *   https://blogs.ashmolean.org/easternart/2017/11/02/persian-and-indian-playing-cards/index.html
 * - Outlook Traveller, “Ganjifa: a Persian game that evolved with the Indian subcontinent”:
 *   https://www.outlooktraveller.com/explore/story/73477/ganjifa-a-game-from-persia-that-evolved-with-the-indian-subcontinent
 *   — os baralhos ricos, de marfim ou casco de tartaruga com pedras; os populares, de madeira ou de
 *   folha de palmeira; hoje, pintados à mão em papel cortado em círculo.
 * - Wikipedia, “Ganjapa”: https://en.wikipedia.org/wiki/Ganjapa — a ganjapa de Odisha; a palavra
 *   viria do persa “ganjifeh”.
 * - Asia InCH, “Ganjifa/Playing Cards of Odisha”: https://asiainch.org/craft/ganjifa-playing-cards-of-odisha/
 *   — a ganjifa de Odisha como ofício de artesãos.
 * - Global InCH, “Ganjifa”: https://www.globalinch.org/glossary/ganjifa/ — o Dashavatara, com os
 *   naipes dos dez avatares de Vishnu, do peixe (Matsya) a Kalki; as fontes discordam sobre a origem
 *   e o número de naipes dele, por isso o texto não dá data.
 */
export const GANJIFA: OutroJogo = {
  id: 'ganjifa',
  area: 'cartas',
  grupo: 'baralho',
  name: 'Ganjifa',
  emoji: '🟠',
  status: 'pronto',
  year: 'citada entre 1399 e 1412; na Índia, Babur fala dela em 1527',
  where: 'Pérsia e Índia',
  povo: 'persas e indianos, na corte mogol e fora dela',
  regiao: 'asia',
  epoca: 'medievais',
  etimologia:
    '“Ganjifa” vem do persa “ganjifeh”, nome desse baralho. A origem da palavra é obscura: muitos a ligam a “ganj”, “tesouro”. Em Odisha, no leste da Índia, as cartas se chamam “ganjapa”, palavra que viria da mesma.',
  about:
    'A ganjifa é um baralho de cartas redondas, pintadas à mão, que veio da Pérsia e se espalhou pela Índia. A primeira menção escrita é do tempo dos mamelucos, entre 1399 e 1412. Na Índia, ela aparece num registro de 1527 do imperador Babur, o primeiro dos mogóis, e o cronista Abul Fazl conta que o imperador Akbar simplificou o jogo. O baralho mogol tem 96 cartas em 8 naipes, com nomes de coisas da corte: a coroa (taj), a moeda de prata (safed), a espada (shamsher), o servo (ghulam), a harpa (chang), a moeda de ouro (surkh), o documento (barat) e a mercadoria (qimash). Os nobres jogavam com cartas de marfim ou de casco de tartaruga, com pedras preciosas; o povo, com cartas de madeira ou de folha de palmeira. Hoje elas ainda são pintadas à mão, em papel cortado em círculo.',
  rules: [
    {
      title: 'O baralho mogol',
      text: 'São 96 cartas redondas em 8 naipes. Cada naipe tem 2 figuras, o mir (rei) e o wazir (ministro), e 10 cartas de número. O mir é a carta mais alta de cada naipe. Em metade dos naipes, a ordem das cartas de número é invertida.',
    },
    {
      title: 'Como se joga',
      text: 'É um jogo de vazas, como a copas e a sueca: cada um joga uma carta, é preciso seguir o naipe que abriu, e a carta mais alta desse naipe leva a vaza. As regras mudam muito de região para região, até no número de jogadores, por isso o app ainda não tem uma versão para jogar.',
    },
  ],
  fontes: [
    { titulo: 'Wikipedia, “Ganjifa”', url: 'https://en.wikipedia.org/wiki/Ganjifa' },
    { titulo: 'Ashmolean Museum, “Persian and Indian playing cards”', url: 'https://blogs.ashmolean.org/easternart/2017/11/02/persian-and-indian-playing-cards/index.html' },
    { titulo: 'Outlook Traveller, “Ganjifa: a Persian game that evolved with the Indian subcontinent”', url: 'https://www.outlooktraveller.com/explore/story/73477/ganjifa-a-game-from-persia-that-evolved-with-the-indian-subcontinent' },
    { titulo: 'Wikipedia, “Ganjapa”', url: 'https://en.wikipedia.org/wiki/Ganjapa' },
    { titulo: 'Global InCH, “Ganjifa”', url: 'https://www.globalinch.org/glossary/ganjifa/' },
    { titulo: 'Asia InCH, “Ganjifa/Playing Cards of Odisha”', url: 'https://asiainch.org/craft/ganjifa-playing-cards-of-odisha/' },
  ],
  variants: [
    {
      name: 'Dashavatara',
      where: 'Índia',
      text: 'A ganjifa hindu: os naipes viram os dez avatares do deus Vishnu, do peixe (Matsya) até Kalki, o avatar que ainda vai chegar. As fontes discordam sobre quando ela surgiu e quantos naipes tinha no começo.',
    },
    {
      name: 'Ganjapa',
      where: 'Odisha, no leste da Índia',
      text: 'O nome da ganjifa em Odisha, onde os artesãos ainda pintam as cartas à mão.',
    },
  ],
};
