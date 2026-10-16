/**
 * O Linu na partida (item 17 do PENDENTES.md, 16/10/2026): a roupa que ele veste em cada tema de
 * tabuleiro e as frases que ele solta durante o jogo.
 *
 * A roupa do tema só existe quando a Loja do Linu (`roupas-linu.ts`) tem uma peça do mesmo país ou
 * da mesma cultura do tema (`temas-jogos.ts`, campo `origem`); nos outros temas, o Linu fica com a
 * roupa que a pessoa escolheu para ele. As frases são do próprio app (nada de conteúdo linguístico).
 */
import type { TemaJogoId } from './temas-jogos';

export const ROUPA_DO_TEMA: Partial<Record<TemaJogoId, string[]>> = {
  jade: ['qipao'], // China
  sakura: ['uchiwa'], // Japão
  azulejo: ['cavaquinho'], // Portugal
  zellige: ['fez'], // Marrocos
  kente: ['kente'], // Gana
  tartan: ['kilt', 'tam'], // Escócia
  mexico: ['charro', 'papelpicado'], // México
  talavera: ['charro'], // México (Puebla)
  rangoli: ['pagri'], // Índia
  andino: ['chullo', 'quena'], // Andes
  khokhloma: ['kokoshnik', 'sarafan'], // Rússia
  bojagi: ['jobawi'], // Coreia
  vyshyvanka: ['vinok'], // Ucrânia
};

export type MomentoPartida = 'inicio' | 'lance' | 'captura' | 'vitoria' | 'derrota' | 'empate';

/** `vitoria`: você venceu o Linu; `derrota`: o Linu venceu. */
export const FRASES_LINU: Record<MomentoPartida, string[]> = {
  inicio: ['Boa sorte! Vamos jogar.', 'Pronto? Eu também!', 'Que comece a partida!'],
  lance: ['Hmm, interessante…', 'Deixa eu pensar…', 'Boa jogada!', 'Essa eu não esperava!', 'Estou de olho!', 'Agora ficou bom!'],
  captura: ['Opa! Essa doeu.', 'Que captura!', 'Ai, ai, ai…'],
  vitoria: ['Parabéns, você venceu!', 'Você jogou muito bem!'],
  derrota: ['Ganhei! Quer a revanche?', 'Foi por pouco!'],
  empate: ['Empate! Ninguém perdeu.', 'Ficou igual. Mais uma?'],
};

/** Uma frase do momento, escolhida pelo número do lance (muda a cada vez, sem sorteio). */
export const fraseDoLinu = (momento: MomentoPartida, n: number) => {
  const lista = FRASES_LINU[momento];
  return lista[Math.abs(n) % lista.length]!;
};
