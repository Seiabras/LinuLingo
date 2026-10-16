/**
 * Quem começa contra o Linu (pedido do dono, 16/10/2026). A regra de cada jogo continua decidindo
 * qual LADO começa (as brancas no xadrez, as pretas no go…); a escolha do jogador decide de que lado
 * fica o Linu: “Eu começo” põe o Linu no outro lado, “O Linu começa” põe ele no lado que começa, e
 * “Sorteio” tira na sorte. A decisão vale para a partida inteira: fica presa ao estado inicial da
 * partida e só muda numa partida nova (ou antes do primeiro lance).
 */
import { useJogosPrefs, type QuemComeca } from './jogos-prefs';

/** O lado do Linu para uma escolha (função pura, para os testes). */
export function ladoDoLinu<L>(escolha: QuemComeca, comeca: L, outro: L, rng: () => number = Math.random): L {
  if (escolha === 'linu') return comeca;
  if (escolha === 'sorteio') return rng() < 0.5 ? comeca : outro;
  return outro;
}

// a decisão de cada partida, presa ao objeto do estado inicial dela (some sozinha com a partida)
const DECIDIDO = new WeakMap<object, { escolha: QuemComeca; lado: unknown }>();

/**
 * O lado do Linu na partida em andamento. `comeca` é o lado que começa pela regra do jogo, `outro`
 * o outro lado; `partida` é o estado inicial da partida (`h.pilha[0]`) e `lances`, quantos já foram
 * feitos. Antes do primeiro lance, mudar a escolha vale na hora.
 */
export function useLadoDoLinu<L>(comeca: L, outro: L, partida: object, lances: number): L {
  const [prefs] = useJogosPrefs();
  const escolha = prefs.quemComeca;
  const visto = DECIDIDO.get(partida);
  if (visto && (lances > 0 || visto.escolha === escolha)) return visto.lado as L;
  const lado = ladoDoLinu(escolha, comeca, outro);
  DECIDIDO.set(partida, { escolha, lado });
  return lado;
}
