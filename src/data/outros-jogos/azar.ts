import type { OutroJogo } from './tipos';

/**
 * Roleta europeia (um zero). Só com fichas de mentira: o app não tem dinheiro, compra nem prêmio
 * por apostar; a tela existe para ensinar probabilidade e a vantagem da casa.
 * Fontes (consultadas em 14/10/2026):
 * - Wikipedia, “Roulette”: https://en.wikipedia.org/wiki/Roulette — muitos historiadores atribuem a
 *   Blaise Pascal uma forma primitiva da roleta, no século XVII, quando procurava uma máquina de
 *   movimento perpétuo; o jogo na forma atual é descrito no romance “La Roulette, ou le Jour”, de
 *   Jaques Lablée, numa roda do Palais Royal, em Paris, em 1796 (livro publicado em 1801); em 1843,
 *   François e Louis Blanc lançam a roda de um zero em Bad Homburg, para concorrer com os cassinos de
 *   um e dois zeros; a roda de um zero vira a principal de Monte Carlo, e a de dois zeros continua a
 *   dominar nos Estados Unidos; vantagem da casa de 2,70% (um zero) e 5,26% (dois zeros); pagamentos
 *   (pleno 35 por 1, dúzia e coluna 2 por 1, vermelho/preto 1 por 1); a regra “la partage”.
 * - Wikipedia, “François Blanc”: https://en.wikipedia.org/wiki/Fran%C3%A7ois_Blanc — irmão gêmeo de
 *   Louis; a lenda local de que fez um pacto com o diabo, porque os números de 0 a 36 somam 666.
 */
const ROLETA: OutroJogo = {
  id: 'roleta',
  area: 'azar',
  name: 'Roleta',
  emoji: '🎡',
  status: 'pronto',
  playable: true,
  year: 'séc. XVII (atribuída a Pascal); forma atual em 1796',
  where: 'França; a roda de um zero nasceu em Bad Homburg, na Alemanha',
  povo: 'franceses',
  regiao: 'europa',
  epoca: 'modernos',
  about:
    'Muitos historiadores contam que o matemático francês Blaise Pascal criou, no século XVII, uma roda parecida com a roleta, quando tentava inventar uma máquina de movimento perpétuo. O jogo como conhecemos aparece num romance de Jaques Lablée, que descreve uma roleta do Palais Royal, em Paris, em 1796: a roda tinha dois zeros, o 0 e o 00. Em 1843, os irmãos gêmeos François e Louis Blanc abriram em Bad Homburg, na Alemanha, uma roleta com um zero só. Era um jeito de atrair jogadores: com um zero, a casa leva menos. A roda de um zero virou a de Monte Carlo e da Europa; a de dois zeros ficou nos Estados Unidos. Os números de 0 a 36 somam 666, e daí nasceu a lenda de que François Blanc fez um pacto com o diabo. Aqui você joga só com fichas de mentira, para ver com os próprios olhos como a chance funciona.',
  rules: [
    {
      title: 'A roda',
      text: 'A roda europeia tem 37 casas: do 1 ao 36, metade vermelhas e metade pretas, e o 0, verde. A bolinha para numa casa, e cada casa tem a mesma chance: 1 em 37.',
    },
    {
      title: 'As apostas',
      text: 'Num número só (pleno), se ganhar, você recebe 35 vezes a aposta. Numa dúzia (1–12, 13–24, 25–36), 2 vezes. Em vermelho ou preto, par ou ímpar, baixo (1–18) ou alto (19–36), 1 vez. Se a bolinha cair no 0, todas essas apostas de fora perdem.',
    },
    {
      title: 'A vantagem da casa',
      text: 'Um número sai 1 vez em 37, mas paga como se saísse 1 em 36. É o zero que faz essa diferença. Por isso, em média, cada aposta perde 1/37 do que foi apostado: 2,7%. Não existe sistema que vença isso: em muitas rodadas, o saldo sempre desce perto da linha do esperado.',
    },
    {
      title: 'Aqui no app',
      text: 'As fichas são de mentira e não valem nada: não se compram, não se ganham fora daqui e não dão prêmio. O gráfico mostra o saldo esperado (a linha que desce 2,7% de cada aposta) e o seu saldo real, rodada a rodada.',
    },
  ],
  variants: [
    {
      name: 'Roleta americana (dois zeros)',
      where: 'Estados Unidos',
      text: 'Tem 38 casas: o 0 e o 00. Os pagamentos são os mesmos da europeia, então a vantagem da casa quase dobra: 5,26% (2 em 38).',
    },
    {
      name: 'Roleta francesa com “la partage”',
      where: 'alguns cassinos da França e da Europa',
      text: 'É a roda de um zero, mas quando sai o 0 as apostas de fora (vermelho/preto, par/ímpar, baixo/alto) perdem só a metade. Nessas apostas, a vantagem da casa cai para 1,35%.',
    },
  ],
};

export const AZAR: OutroJogo[] = [ROLETA];
