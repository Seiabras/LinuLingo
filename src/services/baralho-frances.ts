/**
 * O baralho francês de 52 cartas (4 naipes × 13 valores), comum a todos os jogos do grupo “Baralho
 * francês” da aba Cartas (paciência, truco, buraco…). Só dados e contas, sem React.
 */

export type Naipe = 'copas' | 'ouros' | 'espadas' | 'paus';
/** 1 = ás, 11 = valete, 12 = dama, 13 = rei */
export type Valor = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export interface CartaF {
  naipe: Naipe;
  valor: Valor;
}

export const NAIPES: Naipe[] = ['copas', 'ouros', 'espadas', 'paus'];
export const VALORES: Valor[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/** O que aparece no canto da carta (no Brasil, J, Q e K, como nos baralhos à venda). */
export const ROTULO: Record<Valor, string> = { 1: 'A', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10', 11: 'J', 12: 'Q', 13: 'K' };
const NOME_VALOR: Record<Valor, string> = {
  1: 'Ás',
  2: 'Dois',
  3: 'Três',
  4: 'Quatro',
  5: 'Cinco',
  6: 'Seis',
  7: 'Sete',
  8: 'Oito',
  9: 'Nove',
  10: 'Dez',
  11: 'Valete',
  12: 'Dama',
  13: 'Rei',
};

export const vermelha = (n: Naipe) => n === 'copas' || n === 'ouros';
export const mesmaCor = (a: CartaF, b: CartaF) => vermelha(a.naipe) === vermelha(b.naipe);
export const iguais = (a: CartaF, b: CartaF) => a.naipe === b.naipe && a.valor === b.valor;
/** “Dama de copas”, para a leitura de tela e os avisos */
export const nomeDaCarta = (c: CartaF) => `${NOME_VALOR[c.valor]} de ${c.naipe}`;
/** Uma chave curta e única da carta (“12-copas”), para as `key` do React */
export const chave = (c: CartaF) => `${c.valor}-${c.naipe}`;

/** As 52 cartas em ordem (naipe por naipe, do ás ao rei). */
export function baralho52(): CartaF[] {
  return NAIPES.flatMap((naipe) => VALORES.map((valor) => ({ naipe, valor })));
}

/** Embaralha uma cópia (Fisher-Yates); `rng` devolve um número em [0, 1). */
export function embaralhar<T>(cartas: readonly T[], rng: () => number): T[] {
  const out = [...cartas];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/** Um gerador previsível a partir de uma semente (para repetir uma mesma distribuição e nos testes). */
export function rngComSemente(semente: number): () => number {
  let s = semente >>> 0 || 1;
  return () => {
    // xorshift32
    s ^= s << 13;
    s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 4294967296;
  };
}
