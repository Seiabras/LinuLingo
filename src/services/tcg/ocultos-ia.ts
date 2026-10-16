/**
 * O Linu nos Bichos Ocultos, em 3 níveis. Ele só olha o que está à vista: a própria mão e o próprio
 * campo, os bichos do outro que estão de frente, quantos bichos virados e quantas cartas baixadas o
 * outro tem, e a vida dos dois. Nunca olha quem é o bicho virado do outro, as cartas baixadas dele, a
 * mão nem os baralhos (o teste confere que trocar essas cartas não muda a jogada dele).
 *
 * - Fácil: chama o bicho que vier, ataca o que der e dispara as armadilhas por sorte.
 * - Médio: chama o mais forte (com sacrifício quando vale), vira para baixo quem perde, ataca só o que
 *   derruba e dispara a armadilha sempre que pode.
 * - Difícil: tudo isso, e ainda usa o raio no bicho mais perigoso, varre as cartas baixadas antes de
 *   atacar, guarda a armadilha para o ataque que dói e vira para cima o bicho que já ganha.
 */
import type { NivelLinu } from '@/services/jogos-prefs';
import type { Rng } from './comum';
import { armadilhasProntas, atqDe, cartaO, defDe, lancesO, quemAge, type AcaoO, type BichoO, type EstadoO, type LadoO } from './ocultos-engine';

const sortear = <T>(xs: T[], rng: Rng): T => xs[Math.floor(rng() * xs.length)]!;

/** a DEF que o Linu imagina para um bicho virado (não sabe quem é) */
const DEF_SUPOSTA = 1300;

/** o que o Linu sabe de um bicho do outro: os números, se está de frente; senão, só que está virado */
const visto = (b: BichoO) => (b.virado ? { virado: true as const, atq: 0, def: DEF_SUPOSTA, posicao: b.posicao } : { virado: false as const, atq: atqDe(b), def: defDe(b), posicao: b.posicao });

const maiorAtqVisivel = (O: LadoO) => Math.max(0, ...O.bichos.filter((b) => !b.virado).map(atqDe));

/** o atacante derruba esse bicho? (e quanto custa errar) */
function resultado(atq: number, alvo: BichoO): { derruba: boolean; perde: number; dano: number } {
  const v = visto(alvo);
  if (v.posicao === 'ataque' && !v.virado) return { derruba: atq > v.atq, perde: atq < v.atq ? v.atq - atq : 0, dano: atq > v.atq ? atq - v.atq : 0 };
  return { derruba: atq > v.def, perde: atq < v.def ? v.def - atq : 0, dano: 0 };
}

export function jogadaDoLinuO(e: EstadoO, nivel: NivelLinu, rng: Rng): AcaoO {
  const eu = quemAge(e);
  const L = e.lados[eu];
  const O = e.lados[eu === 0 ? 1 : 0];
  const lances = lancesO(e);
  if (!lances.length) throw new Error('sem lance');
  const de = <T extends AcaoO['t']>(t: T) => lances.filter((a) => a.t === t) as Extract<AcaoO, { t: T }>[];
  const naMao = (uid: number) => cartaO(L.mao.find((m) => m.uid === uid)!.carta);

  // ── a resposta com armadilha ──
  if (e.fase === 'resposta') {
    const g = e.gatilho!;
    const prontas = armadilhasProntas(e, eu, g);
    if (nivel === 'facil') return rng() < 0.5 ? { t: 'responder', uid: prontas[0]!.uid } : { t: 'responder', uid: null };
    const bicho = O.bichos.find((b) => b.uid === g.bicho);
    if (!bicho) return { t: 'responder', uid: null };
    const ef = (id: string) => cartaO(id).efeito;
    if (nivel === 'medio') return { t: 'responder', uid: prontas[0]!.uid };
    // o difícil guarda a armadilha para o que dói
    if (g.tipo === 'chamada') return atqDe(bicho) >= 1500 ? { t: 'responder', uid: prontas[0]!.uid } : { t: 'responder', uid: null };
    const alvo = g.alvo == null ? null : L.bichos.find((b) => b.uid === g.alvo) ?? null;
    const dói = alvo ? atqDe(bicho) > (alvo.posicao === 'ataque' ? atqDe(alvo) : defDe(alvo)) : atqDe(bicho) >= 1000;
    if (!dói) return { t: 'responder', uid: null };
    const espinhos = prontas.find((x) => ef(x.carta) === 'espinhos');
    return { t: 'responder', uid: (espinhos ?? prontas[0]!).uid };
  }

  // ── a batalha ──
  if (e.fase === 'batalha') {
    const ataques = de('atacar');
    if (!ataques.length) return { t: 'fimBatalha' };
    if (nivel === 'facil') return rng() < 0.85 ? sortear(ataques, rng) : { t: 'fimBatalha' };
    const meus = [...new Set(ataques.map((a) => a.uid))].map((u) => L.bichos.find((b) => b.uid === u)!).sort((x, y) => atqDe(y) - atqDe(x));
    for (const b of meus) {
      const opcoes = ataques.filter((a) => a.uid === b.uid);
      const direto = opcoes.find((a) => a.alvo === null);
      if (direto) return direto;
      let melhor: { a: AcaoO; v: number } | null = null;
      for (const a of opcoes) {
        const alvo = O.bichos.find((x) => x.uid === a.alvo)!;
        const r = resultado(atqDe(b), alvo);
        // no bicho virado, o médio arrisca com 1500 de ATQ; o difícil, com 1700
        const arrisca = alvo.virado ? atqDe(b) >= (nivel === 'dificil' ? 1700 : 1500) : r.derruba;
        if (!arrisca) continue;
        const v = (alvo.virado ? 500 : (cartaO(alvo.carta).atq ?? 0)) + r.dano;
        if (!melhor || v > melhor.v) melhor = { a, v };
      }
      if (melhor) return melhor.a;
    }
    return { t: 'fimBatalha' };
  }

  // ── a fase principal ──
  if (nivel === 'facil') {
    const chamar = de('chamar').filter((a) => a.modo === 'ataque' && a.sacrificios.length === 0);
    if (chamar.length && rng() < 0.9) return sortear(chamar, rng);
    const outras = lances.filter((a) => a.t === 'baixar' || (a.t === 'magia' && rng() < 0.5));
    if (outras.length && rng() < 0.6) return sortear(outras, rng);
    if (e.fase === 'principal1' && lances.some((a) => a.t === 'batalha')) return { t: 'batalha' };
    return { t: 'fim' };
  }

  // 1. as magias que só ajudam
  for (const a of de('magia')) {
    const c = naMao(a.uid);
    if (c.efeito === 'cesto' && L.baralho.length > 6) return a;
    if (c.efeito === 'fonte' && L.vida <= (nivel === 'dificil' ? 5000 : 4000)) return a;
  }
  // 2. o raio no bicho mais perigoso que está à vista (o difícil também nos virados, se não há outro)
  const raios = de('magia').filter((a) => naMao(a.uid).efeito === 'raio');
  if (raios.length) {
    const frente = raios.filter((a) => !O.bichos.find((b) => b.uid === a.alvo!.uid)!.virado);
    const meuMaior = Math.max(0, ...L.bichos.map(atqDe));
    const alvoDe = (a: AcaoO) => O.bichos.find((b) => b.uid === (a as { alvo: { uid: number } }).alvo.uid)!;
    const perigoso = frente.sort((x, y) => atqDe(alvoDe(y)) - atqDe(alvoDe(x)))[0];
    if (perigoso && (atqDe(alvoDe(perigoso)) >= meuMaior || nivel === 'medio')) return perigoso;
    if (nivel === 'dificil' && !frente.length && O.bichos.length >= 2) return raios[0]!;
  }
  // 3. o vendaval: o médio sempre; o difícil antes de atacar
  const vend = de('magia').filter((a) => naMao(a.uid).efeito === 'vendaval');
  if (vend.length && (nivel === 'medio' || (e.fase === 'principal1' && L.bichos.some((b) => b.posicao === 'ataque' && !b.virado)))) return vend[0]!;

  // 4. chamar: o mais forte que vale a pena, de frente se ganha do maior do outro, senão virado
  const chamadas = de('chamar');
  if (chamadas.length) {
    const ameaca = maiorAtqVisivel(O);
    const valor = (a: Extract<AcaoO, { t: 'chamar' }>) => {
      const c = naMao(a.uid);
      const perdido = a.sacrificios.reduce((s, u) => s + Math.max(atqDe(L.bichos.find((b) => b.uid === u)!), defDe(L.bichos.find((b) => b.uid === u)!)), 0);
      const forca = a.modo === 'ataque' ? c.atq! : c.def!;
      const bom = a.modo === 'ataque' ? (c.atq! > ameaca ? 600 : -400) : c.def! >= ameaca ? 200 : 0;
      return forca + bom - perdido * 0.9;
    };
    const melhor = [...chamadas].sort((x, y) => valor(y) - valor(x))[0]!;
    if (valor(melhor) > 0 || L.bichos.length === 0) return melhor;
  }

  // 5. as armadilhas vão para baixo
  const baixar = de('baixar');
  if (baixar.length) return baixar[0]!;

  // 6. posições: virar para cima quem ganha; pôr em defesa quem perde
  const ameaca = maiorAtqVisivel(O);
  for (const a of de('posicao')) {
    const b = L.bichos.find((x) => x.uid === a.uid)!;
    if (b.virado && (nivel === 'dificil' ? atqDe(b) > ameaca && e.fase === 'principal1' : false)) return a;
    if (!b.virado && b.posicao === 'ataque' && atqDe(b) < ameaca && defDe(b) > atqDe(b)) return a;
    if (!b.virado && b.posicao === 'defesa' && atqDe(b) > ameaca && e.fase === 'principal1') return a;
  }

  // 7. a força da manada no atacante que passa a ganhar
  for (const a of de('magia').filter((x) => naMao(x.uid).efeito === 'forca')) {
    if (e.fase !== 'principal1') break;
    const b = L.bichos.find((x) => x.uid === a.alvo!.uid)!;
    if (b.posicao === 'ataque' && (O.bichos.length === 0 || (atqDe(b) <= ameaca && atqDe(b) + 700 > ameaca))) return a;
  }

  if (e.fase === 'principal1' && lances.some((a) => a.t === 'batalha') && L.bichos.some((b) => b.posicao === 'ataque' && !b.virado)) return { t: 'batalha' };
  return { t: 'fim' };
}

