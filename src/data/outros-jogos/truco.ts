import type { OutroJogo } from './tipos';

/**
 * Truco paulista, um contra um.
 * Fontes (consultadas em 17/10/2026, por busca na web, porque a rede do ambiente não abria as páginas
 * direto; os trechos usados aparecem citados nos resultados):
 * - Wikipedia, “Truco”: https://en.wikipedia.org/wiki/Truco — variante do “truc”, jogo de vazas de
 *   Valência e das Ilhas Baleares, popular na América do Sul e na Itália; no Brasil, fora do Rio
 *   Grande do Sul e de Santa Catarina (que jogam com o baralho espanhol), joga-se com o baralho
 *   francês, em Minas Gerais, em São Paulo e em muitos outros estados.
 * - Board Game Studies Journal (artigo sobre o truco, no texto completo em
 *   https://artefacts-discovery.researcher.life/full_text/DA-2/8c/8c5b5b3551e03e86be6da0d3ef258147/full_text/aaec8aee436c57b9fa3a5eb4f55860af.pdf):
 *   raízes na Catalunha e em Valência; no Vice-Reino do Rio da Prata nasceu o “truquiflor”, que
 *   juntava o truque e a flor; as lendas que ligam o jogo aos muçulmanos são especulação.
 * - Regras do paulista: regulamento de truco paulista da UFFS (VI JUFFS, segue a Federação Paulista
 *   de Truco no que não contraria o regulamento):
 *   https://site-antigo-2025.uffs.edu.br/pastas-ocultas/bd/pro-reitoria-de-assuntos-estudantis/arquivos/regulamento-truco-paulista/@@download/file
 *   — 40 cartas, sem 8, 9 e 10; a vira e as manilhas; a mão em 3 rodadas; truco 3, 6, 9, 12; os
 *   empates (empatou a primeira, decide a segunda; empatou depois, vale a primeira; as três
 *   empatadas, ninguém marca); e Jogos do Rei, “Ordem do Truco Paulista”:
 *   https://www.jogosdorei.com.br/regras-truco.php — a ordem 4 5 6 7 Q J K A 2 3, as manilhas por
 *   naipe (ouros < espadas < copas < paus, o zap), a mão de onze (vale 3; correr dá 1 ponto) e a mão
 *   de ferro (os dois com 11, sem olhar as cartas); Auditório Ibirapuera, “Como se joga o truco?”:
 *   https://www.auditorioibirapuera.com.br/como-se-joga-o-truco/ — trucado, pode-se aceitar
 *   (“mandar cair”), pedir 6 ou fugir.
 * - Truco mineiro (variante descrita, não jogável): Focus GN, “Como jogar truco mineiro”:
 *   https://focusgn.com/brasil/como-jogar-truco-mineiro — as manilhas fixas, 4 de paus (zap), 7 de
 *   copas, ás de espadas (espadilha) e 7 de ouros (pica-fumo). A pontuação do mineiro só apareceu em
 *   fonte fraca, por isso o texto não fala dela.
 * - Etimologia: Wiktionary, “truc” (catalão): https://www.wiktionary.com/wiki/truc — de “trucar”,
 *   “bater”; e o dicionário etimológico catalão do IEC (DECat): https://decat.iec.cat/documents/VIII/901.pdf
 *   — a origem de “trucar” é discutida e incerta.
 * - O um contra um (“truco de dois”) é a forma de dois jogadores das mesmas regras; a escolha do
 *   app de jogar assim é dita no texto, sem dizer que é uma variante com nome próprio.
 */
export const TRUCO: OutroJogo = {
  id: 'truco',
  area: 'cartas',
  grupo: 'frances',
  name: 'Truco paulista',
  emoji: '♣️',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'tradicional; o truc vem de Valência e das Ilhas Baleares',
  where: 'Brasil (São Paulo), vindo da Espanha',
  povo: 'valencianos e catalães, com o jogo; brasileiros, com o paulista',
  regiao: 'americas',
  epoca: 'tradicionais',
  etimologia:
    '“Truco” vem do “truc”, o nome do jogo em Valência e nas Ilhas Baleares. Em catalão, “truc” costuma ser ligado ao verbo “trucar”, “bater”, mas os estudiosos do dicionário etimológico catalão acham a origem dessa palavra incerta. Já “manilha”, a carta mais forte, e “vira”, a carta virada que escolhe as manilhas, são palavras da própria mesa de truco.',
  about:
    'O truco é um jogo de vazas: cada um joga uma carta, e a mais forte leva a rodada. Ele vem do “truc”, jogo de Valência e das Ilhas Baleares, com raízes na Catalunha, e atravessou o oceano para a América do Sul, onde no Rio da Prata virou o “truquiflor”, que juntava o truco a outro jogo, a flor. Hoje é popular na América do Sul e também na Itália. No Brasil cada região tem o seu: no Rio Grande do Sul e em Santa Catarina joga-se com o baralho espanhol; em São Paulo, em Minas Gerais e em muitos outros estados, com o baralho francês. A graça do truco é o blefe: quem acha que tem a mão melhor (ou quer que o outro pense isso) grita “Truco!”, e o outro decide se aceita, se foge ou se aumenta a aposta.',
  rules: [
    {
      title: 'O baralho e a vira',
      text: 'São 40 cartas: o baralho francês sem os 8, 9 e 10. Cada um recebe 3 cartas, e a carta seguinte fica virada para cima: é a vira. Da mais fraca para a mais forte: 4, 5, 6, 7, Q, J, K, A, 2, 3. A carta logo acima da vira (se a vira é 7, a dama; se é 3, o 4) vira manilha, e as 4 manilhas ganham de todas as outras.',
    },
    {
      title: 'As manilhas',
      text: 'Entre as manilhas, o naipe decide: o zap (paus) é a mais forte, depois copas, a espadilha (espadas) e o ourinho (ouros). Nas outras cartas o naipe não conta: dois 3 empatam.',
    },
    {
      title: 'As rodadas',
      text: 'A mão tem até 3 rodadas, uma carta de cada um. Quem ganha 2 rodadas leva a mão, que vale 1 ponto. Empatou a primeira? Leva quem ganhar a segunda. Empatou a segunda ou a terceira? Leva quem ganhou a primeira. As três empatadas: ninguém marca. Quem ganha a rodada joga primeiro na seguinte.',
    },
    {
      title: 'Truco!',
      text: 'Na sua vez, você pode pedir truco: se o outro aceitar, a mão passa a valer 3. Ele também pode correr (e você leva o que a mão valia antes) ou aumentar, pedindo 6; aí é você quem aceita, corre ou pede 9, e depois 12. Quem pediu por último não pede de novo antes do outro.',
    },
    {
      title: 'Mão de onze e mão de ferro',
      text: 'Quem chega a 11 pontos olha as cartas e decide: jogar a mão, que vale 3, ou correr, dando 1 ponto ao outro. Na mão de onze não se pede truco. Se os dois estão com 11, é a mão de ferro: ninguém olha as próprias cartas, e quem ganhar a mão ganha a partida.',
    },
    {
      title: 'No app',
      text: 'É um contra um, você e o Linu, até 12 pontos. Toque numa carta para jogar e use o botão “Truco!” antes de jogar. Quem começa a primeira mão vem da escolha “quem começa”; depois, a mão alterna. O Linu joga pela força das cartas, e às vezes blefa.',
    },
  ],
  fontes: [
    { titulo: 'Wikipedia, “Truco”', url: 'https://en.wikipedia.org/wiki/Truco' },
    { titulo: 'UFFS, regulamento de truco paulista (VI JUFFS)', url: 'https://site-antigo-2025.uffs.edu.br/pastas-ocultas/bd/pro-reitoria-de-assuntos-estudantis/arquivos/regulamento-truco-paulista/@@download/file' },
    { titulo: 'Jogos do Rei, “Ordem do Truco Paulista”', url: 'https://www.jogosdorei.com.br/regras-truco.php' },
    { titulo: 'Auditório Ibirapuera, “Como se joga o truco?”', url: 'https://www.auditorioibirapuera.com.br/como-se-joga-o-truco/' },
    { titulo: 'Focus GN, “Como jogar truco mineiro”', url: 'https://focusgn.com/brasil/como-jogar-truco-mineiro' },
    { titulo: 'Wiktionary, “truc”', url: 'https://www.wiktionary.com/wiki/truc' },
  ],
  variants: [
    {
      name: 'Truco paulista em duplas',
      where: 'a forma mais comum em São Paulo, com 4 jogadores',
      text: 'Duas duplas. As regras são as mesmas; na mão de onze, a dupla que tem 11 olha as cartas dos dois parceiros antes de decidir se joga.',
    },
    {
      name: 'Truco mineiro',
      where: 'Minas Gerais',
      text: 'Não tem vira: as manilhas são sempre as mesmas. Da mais forte para a mais fraca: o 4 de paus (o zap), o 7 de copas, o ás de espadas (a espadilha) e o 7 de ouros (o pica-fumo).',
    },
    {
      name: 'Truco gaúcho',
      where: 'Rio Grande do Sul e Santa Catarina',
      text: 'Joga-se com o baralho espanhol, e não com o francês.',
    },
  ],
};
