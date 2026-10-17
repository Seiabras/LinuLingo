import { ENCANTADOS } from './encantados';
import { DUELO_BIOMAS } from './duelo-biomas';
import { DUELO_BICHOS } from './duelo-bichos';
import { BICHOS_OCULTOS } from './bichos-ocultos';
import { TRILHA_EVOLUCAO } from './trilha-evolucao';
import { PACIENCIA } from './paciencia';
import type { OutroJogo } from './tipos';

/**
 * Hanafuda (花札, “cartas de flores”), no jogo Koi-Koi.
 * Fontes (consultadas em 14/10/2026):
 * - Wikipedia, “Hanafuda”: https://en.wikipedia.org/wiki/Hanafuda — cartas trazidas pelos
 *   portugueses no meio do século XVI (baralho de 48 cartas, 4 naipes × 12); proibição das cartas
 *   estrangeiras depois do fechamento do Japão (1633) e da “Tenshō Karuta” (1648); nova proibição em
 *   1791 (era Kansei); a referência mais antiga ao “hana awase”, antepassado do hanafuda, é de 1816,
 *   numa lista de jogos de azar proibidos; tolerância das autoridades na era Meiji; Fusajiro Yamauchi
 *   funda a Nintendo em 1889 para fazer hanafuda à mão; Coreia (fim dos anos 1890, “hwatu”, com
 *   novembro e dezembro trocados) e Havaí (começo dos anos 1900).
 * - Wikipedia, “Nintendo”: https://en.wikipedia.org/wiki/Nintendo — fundada em 23/09/1889, em Quioto,
 *   como Nintendo Koppai.
 * - Wikipedia, “Koi-Koi”: https://en.wikipedia.org/wiki/Koi-Koi — regras e tabela de yaku.
 * - Wikipedia, “Go-Stop”: https://en.wikipedia.org/wiki/Go-Stop — o jogo coreano (Matgo a dois).
 * - Wikipedia, “Sakura (card game)”: https://en.wikipedia.org/wiki/Sakura_(card_game) — o jogo
 *   havaiano, também chamado Higobana.
 * - A palavra japonesa “karuta” vem do português “carta” (Wikcionário, “カルタ”:
 *   https://en.wiktionary.org/wiki/カルタ — “Borrowed from Portuguese carta”).
 * - Etimologia: Wikcionário, “花札”: https://en.wiktionary.org/wiki/花札 — 花 (hana) “flor” + 札 (fuda)
 *   “carta”, “flower cards”; e o artigo “Koi-Koi”: “koi-koi” quer dizer “come on” (“vem!”), o que
 *   se diz para continuar a rodada.
 */
const HANAFUDA: OutroJogo = {
  id: 'hanafuda',
  area: 'cartas',
  grupo: 'baralho',
  name: 'Hanafuda (Koi-Koi)',
  emoji: '🎴',
  status: 'pronto',
  playable: true,
  linu: true,
  year: 'cartas chegaram no séc. XVI; o “hana awase” aparece em 1816',
  where: 'Japão',
  povo: 'japoneses, a partir do baralho português',
  regiao: 'asia',
  epoca: 'tradicionais',
  etimologia:
    'Hanafuda (花札) junta duas palavras japonesas, “hana” (flor) e “fuda” (carta): são as “cartas de flores”, porque cada mês do baralho é uma planta. “Koi-koi” quer dizer algo como “vem, vem!”, e é o que se diz para continuar a rodada atrás de mais pontos. E o português está nessa história: os japoneses chamam o baralho de “karuta”, palavra emprestada do português “carta”, que chegou com os navegadores do século XVI.',
  about:
    'No meio do século XVI, os portugueses levaram ao Japão um baralho de 48 cartas. Delas veio a palavra japonesa “karuta”, de “carta”. O governo do xogum proibiu as cartas várias vezes por causa das apostas: em 1633, em 1648 e em 1791. Os jogadores foram trocando os desenhos até chegar a um baralho sem números, com as flores e os bichos de cada mês do ano: 12 meses, 4 cartas em cada. O “hana awase”, antepassado do hanafuda, aparece pela primeira vez em 1816, numa lista de jogos proibidos. Na era Meiji as cartas passaram a ser toleradas, e em 23 de setembro de 1889 Fusajiro Yamauchi abriu em Quioto uma pequena fábrica de hanafuda feitos à mão: a Nintendo. O Koi-Koi é o jogo mais conhecido para duas pessoas. “Koi-koi” quer dizer “vem, vem!”: é o que se diz para continuar a rodada em busca de mais pontos.',
  rules: [
    {
      title: 'O baralho',
      text: 'São 48 cartas, 4 de cada mês. Cada carta vale pelo desenho: as 5 luzes (20), os 9 animais (10), as 10 fitas (5) e as 24 comuns (1). Março é a cerejeira, agosto é a lua no capim, novembro é o salgueiro com o homem da chuva.',
    },
    {
      title: 'A vez',
      text: 'Cada um recebe 8 cartas e 8 ficam abertas na mesa. Na sua vez, jogue uma carta da mão: se houver na mesa uma carta do mesmo mês, você leva as duas. Se houver duas, escolha uma. Se houver três, leve as quatro. Sem par, a carta fica na mesa. Depois vire a carta de cima do monte, com a mesma regra.',
    },
    {
      title: 'Os yaku (combinações)',
      text: 'Três luzes (sem o homem da chuva) valem 5; quatro, 8 (7 com a chuva); as cinco, 10. Copo de saquê com a lua ou com a cortina das cerejeiras: 5 cada. Javali, veado e borboletas: 5. As três fitas de poema ou as três azuis: 5 (as seis juntas, 10). Cinco animais, cinco fitas ou dez comuns: 1 ponto, e mais 1 por carta a mais. O copo de saquê conta também como carta comum.',
    },
    {
      title: 'Koi-koi ou parar',
      text: 'Fez um yaku? Escolha: parar e marcar os pontos, ou dizer “koi-koi” e continuar para fazer mais. O risco: se o outro fizer um yaku e parar antes, ele marca o dobro, e você não marca nada.',
    },
    {
      title: 'Pontos e partida',
      text: 'Com 7 pontos ou mais, a rodada vale o dobro. Quem recebe 4 cartas de um mês (teshi) ou 4 pares (kuttsuki) na mão marca 6 na hora. Se as cartas acabam sem ninguém parar, quem deu as cartas ganha 1 ponto. A partida tradicional tem 12 rodadas, uma por mês; aqui você escolhe 3, 6 ou 12. Quem ganha a rodada começa a próxima.',
    },
  ],
  fontes: [
    { titulo: 'Wikipedia, “Hanafuda”', url: 'https://en.wikipedia.org/wiki/Hanafuda' },
    { titulo: 'Wikipedia, “Koi-Koi”', url: 'https://en.wikipedia.org/wiki/Koi-Koi' },
    { titulo: 'Wikipedia, “Nintendo”', url: 'https://en.wikipedia.org/wiki/Nintendo' },
    { titulo: 'Wikipedia, “Go-Stop”', url: 'https://en.wikipedia.org/wiki/Go-Stop' },
    { titulo: 'Wikipedia, “Sakura (card game)”', url: 'https://en.wikipedia.org/wiki/Sakura_(card_game)' },
  ],
  variants: [
    {
      name: 'Go-Stop (Matgo, a dois)',
      where: 'Coreia, com o baralho “hwatu”',
      text: 'O baralho coreano troca de lugar os meses de novembro e dezembro. Joga-se em 2 a 4 pessoas, quase sempre em 3. Ao chegar aos pontos mínimos (7 a dois), escolhe-se “go” (seguir, valendo mais) ou “stop” (parar e receber).',
    },
    {
      name: 'Koi-Koi de regras curtas',
      where: 'Japão, combinado entre os jogadores antes de começar',
      text: 'Algumas mesas tiram os dois yaku do saquê (com a lua e com a cortina), que deixam o jogo rápido demais. Outras só deixam pedir “koi-koi” uma vez por rodada. Também há quem conte o copo de saquê como animal e mais duas cartas comuns. No app, a variante junta as duas primeiras regras: sem os yaku do saquê e com um koi-koi só por rodada (quem já pediu e forma outro yaku para na hora).',
      jogavel: 'curtas',
    },
    {
      name: 'Sakura (Higobana)',
      where: 'Havaí, com os imigrantes japoneses do começo do século XX',
      text: 'De 2 a 7 jogadores, ou em times. Cada carta capturada soma de 5 a 20 pontos, e quem deixa o adversário fazer um yaku perde 50 pontos. Ganha quem termina com mais.',
    },
  ],
};

export const CARTAS: OutroJogo[] = [HANAFUDA, ENCANTADOS, PACIENCIA, DUELO_BIOMAS, TRILHA_EVOLUCAO, BICHOS_OCULTOS, DUELO_BICHOS];
