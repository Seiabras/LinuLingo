/**
 * O Linu na Trilha da Evolução, em 3 níveis. Ele só olha o que está à vista: os bichos dos dois
 * campos (com dano e energia), a própria mão e quantas cartas o outro tem. Nunca olha a mão do
 * outro, os prêmios nem a ordem dos baralhos (o teste confere que trocar essas cartas não muda a
 * jogada dele).
 *
 * - Fácil: põe bichos e energia, mas escolhe ao acaso e ataca com o que tiver.
 * - Médio: monta o banco, evolui sempre que pode, prende a energia em quem vai atacar e usa o
 *   ataque mais forte, contando fraqueza e resistência.
 * - Difícil: tudo isso, e ainda recua quem vai cair, sobe para o ativo quem derruba o ativo do outro,
 *   guarda a fruta para quem precisa e escolhe o ativo do começo pensando no ataque.
 */
import type { NivelLinu } from '@/services/jogos-prefs';
import type { Rng } from './comum';
import {
  cartaT,
  danoContra,
  ehBasico,
  emCampo,
  lancesT,
  podePagarAtaque,
  pvRestante,
  quemAge,
  type AcaoT,
  type BichoT,
  type CartaT,
  type EstadoT,
  type LadoT,
} from './trilha-engine';

const sortear = <T>(xs: T[], rng: Rng): T => xs[Math.floor(rng() * xs.length)]!;

/** o dano médio de um ataque (a moeda conta pela metade) */
const danoMedio = (c: CartaT, i: number) => {
  const a = c.ataques![i]!;
  return a.dano + (a.efeito === 'moeda' ? (a.extra ?? 0) / 2 : 0);
};

/** quanto falta de energia para o ataque mais forte desse bicho */
function faltaPara(b: BichoT): number {
  const c = cartaT(b.carta);
  const a = c.ataques![c.ataques!.length - 1]!;
  const doBioma = b.energias.filter((x) => cartaT(x).bioma === c.bioma).length;
  return Math.max(0, a.custo.bioma - doBioma, a.custo.bioma + a.custo.livre - b.energias.length);
}

/** o melhor dano que esse bicho faz agora no ativo do outro (0 se não paga nenhum ataque) */
function melhorDano(b: BichoT, alvo: BichoT | null): { i: number; n: number } {
  let melhor = { i: -1, n: -1 };
  cartaT(b.carta).ataques!.forEach((a, i) => {
    if (!podePagarAtaque(b, a)) return;
    const base = danoMedio(cartaT(b.carta), i);
    const n = alvo ? danoContra(b.carta, alvo.carta, base).n : base;
    if (n > melhor.n) melhor = { i, n };
  });
  return melhor;
}

/** a força de um bicho para começar na frente ou para ser promovido */
function valorDeFrente(b: BichoT, alvo: BichoT | null): number {
  const c = cartaT(b.carta);
  const md = melhorDano(b, alvo);
  const derruba = alvo && md.n >= pvRestante(alvo) ? 200 : 0;
  return derruba + Math.max(0, md.n) * 2 + pvRestante(b) / 2 + (c.estagio ?? 0) * 15 - faltaPara(b) * 10;
}

/** O lance do Linu. `rng` só desempata e dá o jeito do fácil; ele nunca usa o que está virado. */
export function jogadaDoLinuT(e: EstadoT, nivel: NivelLinu, rng: Rng): AcaoT {
  const eu = quemAge(e);
  const L = e.lados[eu];
  const O = e.lados[eu === 0 ? 1 : 0];
  const lances = lancesT(e);
  if (lances.length === 0) throw new Error('sem lance');

  if (e.fase === 'preparo') return preparo(L, nivel, rng);
  if (e.fase === 'promover') {
    if (nivel === 'facil') return sortear(lances, rng);
    const melhor = [...L.banco].sort((x, y) => valorDeFrente(y, O.ativo) - valorDeFrente(x, O.ativo))[0]!;
    return { t: 'promover', uid: melhor.uid };
  }

  const de = <T extends AcaoT['t']>(t: T) => lances.filter((a) => a.t === t) as Extract<AcaoT, { t: T }>[];

  if (nivel === 'facil') {
    // o fácil faz as coisas por sorte, e ataca quando dá
    const montar = lances.filter((a) => a.t === 'basico' || a.t === 'evoluir' || a.t === 'energia');
    if (montar.length && rng() < 0.75) return sortear(montar, rng);
    const atq = de('atacar');
    if (atq.length) return sortear(atq, rng);
    return { t: 'passar' };
  }

  // 1. evoluir sempre que der (o estágio mais alto primeiro)
  const evo = de('evoluir');
  if (evo.length) return evo.sort((x, y) => (cartaT(L.mao.find((m) => m.uid === y.uid)!.carta).estagio ?? 0) - (cartaT(L.mao.find((m) => m.uid === x.uid)!.carta).estagio ?? 0))[0]!;

  // 2. as cartas de apoio que só ajudam
  for (const a of de('apoio')) {
    const c = cartaT(L.mao.find((m) => m.uid === a.uid)!.carta);
    if (c.efeito === 'mochila' && L.baralho.length > 6) return a;
    if (c.efeito === 'binoculo' && L.baralho.length > 6 && !L.mao.some((m) => cartaT(m.carta).tipo === 'bicho')) return a;
    if (c.efeito === 'fruta') {
      const b = emCampo(L).find((x) => x.uid === a.alvo)!;
      // o médio cura quem tem dano; o difícil guarda para quando 30 fazem diferença
      if (nivel === 'medio' ? b.dano >= 30 : b === L.ativo && b.dano >= 30 && O.ativo && melhorDano(O.ativo, b).n >= pvRestante(b) && melhorDano(O.ativo, b).n < pvRestante(b) + Math.min(30, b.dano)) return a;
    }
  }

  // 3. o banco: bichos básicos (até 5), deixando o lugar de quem evolui
  const bas = de('basico');
  if (bas.length) {
    const ordem = bas.sort((x, y) => (cartaT(L.mao.find((m) => m.uid === y.uid)!.carta).pv ?? 0) - (cartaT(L.mao.find((m) => m.uid === x.uid)!.carta).pv ?? 0));
    return ordem[0]!;
  }

  // 4. o difícil troca o ativo quando ele vai cair e há alguém melhor no banco
  if (nivel === 'dificil' && L.ativo && L.banco.length) {
    const ativo = L.ativo;
    const ameaca = O.ativo ? melhorDano(O.ativo, ativo).n : 0;
    const vaiCair = ameaca >= pvRestante(ativo) && melhorDano(ativo, O.ativo).n < (O.ativo ? pvRestante(O.ativo) : 1);
    const melhor = [...L.banco].sort((x, y) => valorDeFrente(y, O.ativo) - valorDeFrente(x, O.ativo))[0]!;
    if (vaiCair && valorDeFrente(melhor, O.ativo) > valorDeFrente(ativo, O.ativo)) {
      const assobio = de('apoio').find((a) => cartaT(L.mao.find((m) => m.uid === a.uid)!.carta).efeito === 'assobio' && a.alvo === melhor.uid);
      if (assobio) return assobio;
      const rec = de('recuar').find((a) => a.para === melhor.uid);
      if (rec) return rec;
    }
  }

  // 5. a energia: no ativo, se ele ainda precisa; senão em quem vai atacar depois
  const en = de('energia');
  if (en.length) {
    const campo = emCampo(L);
    const precisa = (b: BichoT) => faltaPara(b);
    const quer = (b: BichoT) => {
      let v = precisa(b) > 0 ? 50 - precisa(b) * 5 : -20;
      if (b === L.ativo) v += 25;
      v += (cartaT(b.carta).estagio ?? 0) * 8 + (cartaT(b.carta).pv ?? 0) / 20;
      // o difícil já põe energia em quem vai evoluir
      if (nivel === 'dificil' && L.mao.some((m) => cartaT(m.carta).de === b.carta)) v += 12;
      return v;
    };
    const alvo = [...campo].sort((x, y) => quer(y) - quer(x))[0]!;
    // a energia vai mesmo que ninguém precise (serve para recuar)
    return en.find((a) => a.alvo === alvo.uid) ?? en[0]!;
  }

  // 6. atacar com o maior dano
  const atq = de('atacar');
  if (atq.length && L.ativo) {
    const c = cartaT(L.ativo.carta);
    const n = (i: number) => (O.ativo ? danoContra(L.ativo!.carta, O.ativo.carta, danoMedio(c, i)).n : danoMedio(c, i)) + (c.ataques![i]!.efeito === 'banco10' ? 10 * O.banco.length : 0);
    return atq.sort((x, y) => n(y.i) - n(x.i))[0]!;
  }
  return { t: 'passar' };
}

function preparo(L: LadoT, nivel: NivelLinu, rng: Rng): AcaoT {
  const basicos = L.mao.filter((m) => ehBasico(m.carta));
  let ativo = basicos[0]!;
  if (nivel === 'facil') ativo = sortear(basicos, rng);
  else {
    // o ativo do começo: quem aguenta mais e ataca barato; quem evolui fica no banco
    const valor = (id: string) => {
      const c = cartaT(id);
      const barato = Math.min(...c.ataques!.map((a) => a.custo.bioma + a.custo.livre));
      const evolui = L.mao.some((m) => cartaT(m.carta).de === id) ? (nivel === 'dificil' ? 40 : 0) : 0;
      return (c.pv ?? 0) - barato * 15 - evolui;
    };
    ativo = [...basicos].sort((x, y) => valor(y.carta) - valor(x.carta))[0]!;
  }
  const banco = basicos.filter((m) => m.uid !== ativo.uid).slice(0, nivel === 'facil' ? 2 : 5);
  return { t: 'preparar', ativo: ativo.uid, banco: banco.map((m) => m.uid) };
}
