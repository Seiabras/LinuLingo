/**
 * A karuta do Hyakunin Isshu (uta-garuta), você contra o Linu, no jeito “espalhado”: as cartas de
 * pegar (com a segunda metade do poema) ficam na mesa, e o leitor lê a primeira metade, sílaba por
 * sílaba. Quem reconhece o poema primeiro toca na carta certa. As regras e as fontes estão em
 * `data/outros-jogos/karuta.ts`. Só as contas, sem React.
 */
import { HYAKUNIN_ISSHU, type PoemaHyakunin } from '@/data/hyakunin-isshu';
import { embaralhar } from './baralho-frances';

export type Jogador = 0 | 1;
export const CARTAS_NA_MESA = 16;

export const poema = (n: number): PoemaHyakunin => HYAKUNIN_ISSHU[n - 1]!;
/** A primeira metade do poema (os 3 primeiros versos), em kana, como o leitor lê. */
export const leituraDeCima = (n: number) => poema(n).leitura.slice(0, 3).join('');
/** A segunda metade (os 2 últimos versos), em kana: é o que vem escrito na carta de pegar. */
export const versosDaCarta = (n: number) => poema(n).leitura.slice(3);

/**
 * O “kimariji” de cada poema: quantas sílabas do começo bastam para saber qual é, entre os 100, pelo
 * som. Sete poemas se reconhecem na primeira sílaba (む, す, め, ふ, さ, ほ, せ).
 */
export const KIMARIJI: Record<number, number> = (() => {
  // compara pelo som: na leitura, を soa como お, ゐ como い e ゑ como え
  const som = (t: string) => t.replace(/を/g, 'お').replace(/ゐ/g, 'い').replace(/ゑ/g, 'え');
  const leituras = HYAKUNIN_ISSHU.map((p) => [p.n, som(leituraDeCima(p.n))] as const);
  const out: Record<number, number> = {};
  for (const [n, l] of leituras) {
    let k = 1;
    while (k < l.length && leituras.some(([m, o]) => m !== n && o.startsWith(l.slice(0, k)))) k++;
    out[n] = k;
  }
  return out;
})();

export type Fase = 'lendo' | 'pegou' | 'fim';

export interface EstadoKaruta {
  /** os poemas das cartas que ainda estão na mesa */
  mesa: number[];
  /** a ordem em que os poemas serão lidos */
  fila: number[];
  /** o poema sendo lido agora */
  atual: number;
  /** quantas sílabas da leitura já apareceram */
  lidas: number;
  pontos: [number, number];
  /** você tocou na carta errada neste poema (e não pode tocar de novo até o próximo) */
  errou: boolean;
  /** quem pegou o poema lido agora (fase 'pegou') */
  pegou: Jogador | null;
  fase: Fase;
}

export function novoJogo(rng: () => number, n = CARTAS_NA_MESA): EstadoKaruta {
  const escolhidos = embaralhar(HYAKUNIN_ISSHU.map((p) => p.n), rng).slice(0, n);
  const fila = embaralhar(escolhidos, rng);
  return { mesa: escolhidos, fila: fila.slice(1), atual: fila[0]!, lidas: 0, pontos: [0, 0], errou: false, pegou: null, fase: 'lendo' };
}

/** Mais uma sílaba da leitura. */
export function lerMais(s: EstadoKaruta): EstadoKaruta {
  if (s.fase !== 'lendo' || s.lidas >= leituraDeCima(s.atual).length) return s;
  return { ...s, lidas: s.lidas + 1 };
}

/** Tocar numa carta: a certa leva o ponto; a errada (só você erra) tira a sua chance neste poema. */
export function tocar(s: EstadoKaruta, j: Jogador, n: number): EstadoKaruta {
  if (s.fase !== 'lendo' || !s.mesa.includes(n)) return s;
  if (j === 0 && s.errou) return s;
  if (n !== s.atual) return j === 0 ? { ...s, errou: true } : s;
  const pontos: [number, number] = j === 0 ? [s.pontos[0] + 1, s.pontos[1]] : [s.pontos[0], s.pontos[1] + 1];
  return { ...s, pontos, mesa: s.mesa.filter((x) => x !== n), pegou: j, lidas: leituraDeCima(s.atual).length, fase: 'pegou' };
}

/** O próximo poema (ou o fim, sem cartas na mesa). */
export function proximo(s: EstadoKaruta): EstadoKaruta {
  if (s.fase !== 'pegou') return s;
  if (s.fila.length === 0) return { ...s, fase: 'fim' };
  return { ...s, atual: s.fila[0]!, fila: s.fila.slice(1), lidas: 0, errou: false, pegou: null, fase: 'lendo' };
}

/** Quanto o Linu demora, em milissegundos, depois de ouvir o kimariji. */
export const REACAO_DO_LINU: Record<'facil' | 'medio' | 'dificil', [number, number]> = {
  facil: [2600, 1600],
  medio: [1500, 900],
  dificil: [700, 500],
};
