/**
 * O Linu no Duelo dos Biomas, em 3 níveis. Ele não olha a mão nem o baralho de quem joga contra ele:
 * só o que está na mesa. Devolve uma ação por vez (a tela chama de novo enquanto for a vez dele).
 *
 * - Fácil: joga o bioma, chama um bicho qualquer que caiba, ataca e bloqueia meio ao acaso.
 * - Médio: joga o bicho mais caro que cabe, usa as magias no bicho mais perigoso, ataca quando o
 *   atacante não morre à toa e bloqueia para ganhar a troca ou não perder a partida.
 * - Difícil: o médio, mais: conta o dano que leva para fechar a partida, guarda bichos para se
 *   defender quando o outro ameaça a vitória, aceita trocas boas e usa as magias rápidas no combate.
 */
import type { Rng } from './comum';
import {
  aplicarB,
  cartaB,
  custoTotal,
  ehValida,
  forcaDe,
  lancesSimples,
  outro,
  podeAtacar,
  podeBloquear,
  quemAge,
  resistenciaDe,
  temHab,
  type AcaoB,
  type BichoEmJogo,
  type EstadoB,
  type Lado,
} from './biomas-engine';

export type NivelB = 'facil' | 'medio' | 'dificil';

const valor = (b: BichoEmJogo) => forcaDe(b) + resistenciaDe(b) + (temHab(b.carta, 'voo') ? 2 : 0);
const vidaQueFalta = (b: BichoEmJogo) => resistenciaDe(b) - b.dano;

export function jogadaDoLinuB(e: EstadoB, nivel: NivelB, rng: Rng): AcaoB {
  const eu = quemAge(e);
  if (e.fase === 'bloqueio') return bloquear(e, eu, nivel, rng);
  if (e.fase === 'janela') return janela(e, eu, nivel);
  return principal(e, eu, nivel, rng);
}

function principal(e: EstadoB, eu: Lado, nivel: NivelB, rng: Rng): AcaoB {
  const lances = lancesSimples(e);
  const bioma = lances.find((a) => a.t === 'bioma');
  if (bioma) return bioma;
  const L = e.lados[eu];
  const ini = e.lados[outro(eu)];
  const lancar = lances.filter((a): a is Extract<AcaoB, { t: 'lancar' }> => a.t === 'lancar');
  const deBicho = lancar.filter((a) => cartaB(L.mao.find((m) => m.uid === a.uid)!.carta).tipo === 'bicho');

  // magias que valem a pena agora (médio e difícil)
  if (nivel !== 'facil') {
    for (const a of lancar) {
      const c = cartaB(L.mao.find((m) => m.uid === a.uid)!.carta);
      const alvo = a.alvo ? ini.bichos.find((b) => a.alvo!.lado !== eu && b.uid === a.alvo!.uid) : undefined;
      const maior = [...ini.bichos].sort((x, y) => valor(y) - valor(x))[0];
      if (c.efeito === 'dano3' && alvo && vidaQueFalta(alvo) <= 3 && alvo === [...ini.bichos].filter((b) => vidaQueFalta(b) <= 3).sort((x, y) => valor(y) - valor(x))[0]) return a;
      if (c.efeito === 'devolver' && alvo && maior && alvo === maior && custoTotal(cartaB(maior.carta)) >= 4) return a;
      if (c.efeito === 'avalanche') {
        const mortosDele = ini.bichos.filter((b) => !temHab(b.carta, 'voo') && vidaQueFalta(b) <= 2).length;
        const mortosMeus = L.bichos.filter((b) => !temHab(b.carta, 'voo') && vidaQueFalta(b) <= 2).length;
        if (mortosDele >= mortosMeus + 2) return a;
      }
      if ((c.efeito === 'compra2' || c.efeito === 'amontoado') && !deBicho.length) return a;
      if (c.efeito === 'estouro' && e.fase === 'principal1' && !e.atacou && L.bichos.filter((b) => podeAtacar(e, b)).length >= 3) return a;
      if (c.efeito === 'neblina' && nivel === 'dificil' && e.fase === 'principal1' && !e.atacou && alvo && !alvo.virado && maior === alvo) return a;
    }
  }
  if (deBicho.length) {
    if (nivel === 'facil') {
      if (rng() < 0.8) return deBicho[Math.floor(rng() * deBicho.length)]!;
    } else {
      // o mais caro que cabe
      return [...deBicho].sort((x, y) => custoTotal(cartaB(L.mao.find((m) => m.uid === y.uid)!.carta)) - custoTotal(cartaB(L.mao.find((m) => m.uid === x.uid)!.carta)))[0]!;
    }
  }
  if (e.fase === 'principal1' && !e.atacou) {
    const atacantes = escolherAtacantes(e, eu, nivel, rng);
    if (atacantes.length) {
      const a: AcaoB = { t: 'atacar', uids: atacantes };
      if (ehValida(e, a)) return a;
    }
  }
  if (nivel === 'facil') {
    const resto = lancar.filter((a) => !deBicho.includes(a) && rng() < 0.3);
    if (resto.length) return resto[0]!;
  }
  return { t: 'fim' };
}

function escolherAtacantes(e: EstadoB, eu: Lado, nivel: NivelB, rng: Rng): number[] {
  const L = e.lados[eu];
  const D = e.lados[outro(eu)];
  const podem = L.bichos.filter((b) => podeAtacar(e, b));
  if (!podem.length) return [];
  if (nivel === 'facil') return podem.filter(() => rng() < 0.5).map((b) => b.uid);
  const defensores = D.bichos.filter((b) => !b.virado);
  // todos de uma vez se o dano que passa sem bloqueio já basta
  const total = podem.reduce((s, b) => s + forcaDe(b), 0);
  const bloqueiosPossiveis = defensores.length;
  const ordenados = [...podem].sort((x, y) => forcaDe(x) - forcaDe(y));
  const passaNoPior = ordenados.slice(0, Math.max(0, ordenados.length - bloqueiosPossiveis)).reduce((s, b) => s + forcaDe(b), 0);
  if (passaNoPior >= D.vida || (defensores.length === 0 && total >= D.vida)) return podem.map((b) => b.uid);
  const escolhidos = podem.filter((a) => {
    const quemBloqueia = defensores.filter((d) => podeBloquear(d, a));
    if (!quemBloqueia.length) return true;
    // vale atacar se nenhum bloqueador o mata sem morrer junto (ou se a troca é boa no difícil)
    return quemBloqueia.every((d) => forcaDe(d) < resistenciaDe(a) || (nivel === 'dificil' && forcaDe(a) >= resistenciaDe(d) && valor(d) >= valor(a)));
  });
  if (nivel === 'dificil') {
    // guarda bichos se o contra-ataque do outro fecharia a partida
    const ameaca = D.bichos.reduce((s, b) => s + forcaDe(b), 0);
    const ficam = L.bichos.filter((b) => !escolhidos.includes(b) || temHab(b.carta, 'vigia'));
    if (ameaca >= L.vida && ficam.length < D.bichos.length) {
      const segurar = [...escolhidos].sort((x, y) => resistenciaDe(y) - resistenciaDe(x)).slice(0, D.bichos.length - ficam.length);
      return escolhidos.filter((b) => !segurar.includes(b) || temHab(b.carta, 'vigia')).map((b) => b.uid);
    }
  }
  return escolhidos.map((b) => b.uid);
}

function bloquear(e: EstadoB, eu: Lado, nivel: NivelB, rng: Rng): AcaoB {
  const L = e.lados[eu];
  const A = e.lados[outro(eu)];
  const atacantes = e.combate!.atacantes.map((u) => A.bichos.find((b) => b.uid === u)!).filter(Boolean);
  const livres = L.bichos.filter((b) => !b.virado);
  const pares: [number, number][] = [];
  const usados = new Set<number>();
  if (nivel === 'facil') {
    for (const a of atacantes) {
      const b = livres.find((x) => !usados.has(x.uid) && podeBloquear(x, a));
      if (b && rng() < 0.4) {
        usados.add(b.uid);
        pares.push([b.uid, a.uid]);
      }
    }
    return { t: 'bloquear', pares };
  }
  const entra = atacantes.reduce((s, a) => s + forcaDe(a), 0);
  let vaiEntrar = entra;
  for (const a of [...atacantes].sort((x, y) => forcaDe(y) - forcaDe(x))) {
    const cands = livres.filter((x) => !usados.has(x.uid) && podeBloquear(x, a));
    // mata e sobrevive > sobrevive > troca boa (difícil) > segurar para não perder
    const mataESobrevive = cands.filter((x) => forcaDe(x) >= vidaQueFalta(a) && forcaDe(a) < vidaQueFalta(x));
    const sobrevive = cands.filter((x) => forcaDe(a) < vidaQueFalta(x));
    const troca = cands.filter((x) => forcaDe(x) >= vidaQueFalta(a) && valor(x) <= valor(a));
    let b = mataESobrevive.sort((x, y) => valor(x) - valor(y))[0] ?? sobrevive.sort((x, y) => valor(x) - valor(y))[0];
    if (!b && nivel === 'dificil') b = troca.sort((x, y) => valor(x) - valor(y))[0];
    if (!b && vaiEntrar >= L.vida) b = cands.sort((x, y) => valor(x) - valor(y))[0];
    if (b) {
      usados.add(b.uid);
      pares.push([b.uid, a.uid]);
      vaiEntrar -= forcaDe(a);
    }
  }
  return { t: 'bloquear', pares };
}

/** Na janela das magias rápidas: só o médio e o difícil usam, e só se a magia vira um combate. */
function janela(e: EstadoB, eu: Lado, nivel: NivelB): AcaoB {
  if (nivel === 'facil' || !e.combate) return { t: 'passar' };
  const lances = lancesSimples(e).filter((a): a is Extract<AcaoB, { t: 'lancar' }> => a.t === 'lancar');
  for (const a of lances) {
    const depois = aplicarB(e, a);
    // simula o combate com a magia e sem ela: usa se ganha bicho ou evita perder
    if (saldoDoCombate(depois, eu) > saldoDoCombate(e, eu) + 1) return a;
  }
  return { t: 'passar' };
}

/** O saldo de um combate para `eu`: bichos dele que morrem menos os meus, mais o dano de vida. */
function saldoDoCombate(e: EstadoB, eu: Lado): number {
  if (!e.combate) return 0;
  const atk = e.vez;
  const A = e.lados[atk];
  const D = e.lados[outro(atk)];
  let saldoAtk = 0;
  for (const u of e.combate.atacantes) {
    const a = A.bichos.find((b) => b.uid === u);
    if (!a) continue;
    const bl = D.bichos.find((b) => b.uid === e.combate!.bloqueios[u]);
    if (!bl) saldoAtk += forcaDe(a) * 0.5;
    else {
      if (forcaDe(a) >= vidaQueFalta(bl)) saldoAtk += valor(bl);
      if (forcaDe(bl) >= vidaQueFalta(a)) saldoAtk -= valor(a);
    }
  }
  return eu === atk ? saldoAtk : -saldoAtk;
}
