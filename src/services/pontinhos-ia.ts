/**
 * O Linu nos Pontinhos, com a estratégia clássica (Wikipédia em inglês, “Dots and boxes”, e Berlekamp,
 * “The Dots-and-Boxes Game”, 2000):
 *
 * - fecha o quadradinho que estiver à mão;
 * - enquanto der, faz traços “seguros”, que não dão o terceiro lado a nenhum quadradinho;
 * - quando só sobram traços que entregam quadradinhos, abre a corrente que entrega menos;
 * - difícil: no fim de uma corrente comprida, quando não sobra traço seguro, recusa os dois últimos
 *   quadradinhos (o “double-cross”, ou “todos menos dois”): traça a ponta da corrente em vez do traço
 *   do meio, o adversário fica com os dois e é obrigado a abrir a próxima corrente;
 * - perto do fim (poucos traços sobrando), o médio e o difícil calculam o jogo até o último traço.
 * - fácil: fecha o que puder, mas às vezes dá o terceiro lado sem perceber.
 */
import type { NivelLinu } from './jogos-prefs';
import { caixasDoTraco, ladosDaCaixa, ladosFeitos, lancesLegais, tracar, type PontinhosState } from './pontinhos-engine';

export const NIVEIS_PONTINHOS: Record<NivelLinu, { exato: number; descuido: number; recusa: boolean }> = {
  facil: { exato: 0, descuido: 0.45, recusa: false },
  medio: { exato: 11, descuido: 0, recusa: false },
  dificil: { exato: 15, descuido: 0, recusa: true },
};

/** Quantos quadradinhos o traço fecha agora. */
function fecha(s: PontinhosState, t: number): number {
  return caixasDoTraco(s.l, s.a, t).filter((b) => s.caixas[b] === null && ladosFeitos(s, b) === 3).length;
}

/** O traço não fecha nada e não deixa nenhum quadradinho com 3 lados. */
export function seguro(s: PontinhosState, t: number): boolean {
  return caixasDoTraco(s.l, s.a, t).every((b) => ladosFeitos(s, b) <= 1);
}

/** Quantos quadradinhos o adversário pega em seguida, fechando tudo o que puder. */
function entrega(s: PontinhosState, t: number): number {
  let f = tracar(s, t);
  const quem = f.turn;
  let n = 0;
  for (;;) {
    if (f.winner !== null || f.turn !== quem) return n;
    const c = lancesLegais(f).find((x) => fecha(f, x) > 0);
    if (c === undefined) return n;
    const antes = f.placar[quem];
    f = tracar(f, c);
    n += f.placar[quem] - antes;
  }
}

/**
 * O jogo calculado até o fim: para cada traço livre, o saldo de quadradinhos (meus − dele) daqui em
 * diante. Uma tabela só (pelos traços já feitos) serve para todos os lances.
 */
function melhorExato(s: PontinhosState, livres: number[]): number {
  const memo = new Map<string, number>();
  const feito = new Uint8Array(s.tracos.length);
  s.tracos.forEach((v, i) => (feito[i] = v === null ? 0 : 1));
  const caixasDe = livres.map((t) => caixasDoTraco(s.l, s.a, t));
  const lados = s.caixas.map((_, b) => ladosDaCaixa(s.l, s.a, b));
  const fechaAgora = (k: number) => {
    let n = 0;
    for (const b of caixasDe[k]!) if (lados[b]!.every((x) => feito[x])) n++;
    return n;
  };
  const rec = (): number => {
    let chave = '';
    for (const t of livres) chave += feito[t];
    const m = memo.get(chave);
    if (m !== undefined) return m;
    let melhor = -Infinity;
    for (let k = 0; k < livres.length; k++) {
      const t = livres[k]!;
      if (feito[t]) continue;
      feito[t] = 1;
      const f = fechaAgora(k);
      const v = f > 0 ? f + rec() : -rec();
      feito[t] = 0;
      if (v > melhor) melhor = v;
    }
    const r = melhor === -Infinity ? 0 : melhor;
    memo.set(chave, r);
    return r;
  };
  let melhor = livres[0]!;
  let nota = -Infinity;
  for (let k = 0; k < livres.length; k++) {
    const t = livres[k]!;
    feito[t] = 1;
    const f = fechaAgora(k);
    const v = f > 0 ? f + rec() : -rec();
    feito[t] = 0;
    if (v > nota) {
      nota = v;
      melhor = t;
    }
  }
  return melhor;
}

/**
 * O “double-cross”: entre os traços que fecham, acha um quadradinho A (3 lados) cujo lado aberto dá
 * para B (2 lados), e a ponta de B que não encosta em mais nenhum quadradinho perigoso. Devolve essa
 * ponta, ou null.
 */
function pontaParaRecusar(s: PontinhosState, capturas: number[]): number | null {
  for (const m of capturas) {
    const [b1, b2] = caixasDoTraco(s.l, s.a, m);
    for (const [A, B] of [
      [b1, b2],
      [b2, b1],
    ] as const) {
      if (A === undefined || B === undefined) continue;
      if (s.caixas[A] !== null || s.caixas[B] !== null || ladosFeitos(s, A) !== 3 || ladosFeitos(s, B) !== 2) continue;
      const pontas = ladosDaCaixa(s.l, s.a, B).filter((t) => s.tracos[t] === null && t !== m);
      if (pontas.length !== 1) continue;
      const e = pontas[0]!;
      const outras = caixasDoTraco(s.l, s.a, e).filter((x) => x !== B);
      if (outras.every((c) => s.caixas[c] !== null || ladosFeitos(s, c) <= 1)) return e;
    }
  }
  return null;
}

/** O próximo traço do Linu, ou null se a partida acabou. Quem fecha joga de novo: o quadro chama de novo. */
export function lancePontinhos(s: PontinhosState, nivel: NivelLinu, rng: () => number = Math.random): number | null {
  const livres = lancesLegais(s);
  if (livres.length === 0) return null;
  const { exato: limite, descuido, recusa } = NIVEIS_PONTINHOS[nivel];
  if (livres.length <= limite) return melhorExato(s, livres);

  const sorteia = (l: number[]) => l[Math.floor(rng() * l.length)]!;
  const capturas = livres.filter((t) => fecha(s, t) > 0);
  const seguros = livres.filter((t) => seguro(s, t));

  if (capturas.length > 0) {
    if (recusa && seguros.length === 0) {
      // só recusa se os dois que sobram forem o fim desta corrente e ainda houver mais a ganhar depois
      const restantes = s.caixas.filter((x) => x === null).length;
      const so = capturas.every((t) => caixasDoTraco(s.l, s.a, t).some((b) => ladosFeitos(s, b) === 3));
      const e = pontaParaRecusar(s, capturas);
      const outrasCapturas = capturas.filter((t) => !caixasDoTraco(s.l, s.a, t).some((b) => e !== null && ladosDaCaixa(s.l, s.a, b).includes(e)));
      if (e !== null && so && outrasCapturas.length === 0 && restantes - 2 >= 4) return e;
    }
    // fecha primeiro o traço que fecha mais
    return capturas.sort((x, y) => fecha(s, y) - fecha(s, x))[0]!;
  }
  if (seguros.length > 0 && !(descuido > 0 && rng() < descuido)) return sorteia(seguros);
  if (descuido > 0) return sorteia(livres);
  // nenhum seguro: entrega o menos possível
  let melhor = livres[0]!;
  let menor = Infinity;
  for (const t of livres) {
    const n = entrega(s, t);
    if (n < menor) {
      menor = n;
      melhor = t;
    }
  }
  return melhor;
}
