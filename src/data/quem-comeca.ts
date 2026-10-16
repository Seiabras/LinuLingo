/**
 * Os jogos contra o Linu em que a opção “quem começa” não aparece, e por quê. Em todos os outros jogos
 * com o Linu, o tabuleiro usa `useLadoDoLinu` (o teste `quem-comeca.test.ts` confere).
 */
export const SEM_QUEM_COMECA: Record<string, string> = {
  gamao: 'No gamão, quem começa é decidido pelos dados: cada um rola um dado, e o maior começa.',
  domino: 'No dominó, começa quem tem a carroça mais alta; nas rodadas seguintes, quem ganhou a anterior.',
  onca: 'Aqui você escolhe o lado (onça ou cachorros), e a regra diz qual lado começa.',
  'bagh-chal': 'Aqui você escolhe o lado (tigres ou cabras), e a regra diz qual lado começa.',
  'raposa-gansos': 'Aqui você escolhe o lado (raposa ou gansos), e os gansos começam (as fontes não dizem quem começa; o app adotou os gansos).',
  pong: 'No Pong não há vez: os dois jogam ao mesmo tempo.',
  esgrima: 'Na esgrima, você e o Linu agem ao mesmo tempo, a cada frase de armas.',
  encantados: 'No Encantados, a escolha de quem começa vem no próprio jogo.',
};
