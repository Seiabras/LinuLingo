import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BICHOS, TEMAS_TCG, embaralhar, expandir, semente } from './comum';
import { BARALHOS_O, CARTAS_O, aplicarO, ehValidaO, lancesO, novaPartidaO, quemAge, sacrificiosDe, type BaralhoO, type BichoO, type EstadoO, type Lado } from './ocultos-engine';
import { jogadaDoLinuO } from './ocultos-ia';

const BARALHOS = Object.keys(BARALHOS_O) as BaralhoO[];

const bichoDeTeste = (carta: string, uid: number, extra: Partial<BichoO> = {}): BichoO => ({ uid, carta, posicao: 'ataque', virado: false, entrou: 0, mudou: -1, atacou: false, bonus: 0, ...extra });

/** uma partida no turno 3, vez do lado 0, com as mãos vazias e os campos dados */
function mesa(b0: BichoO[], b1: BichoO[]): EstadoO {
  const e = novaPartidaO('gelo', 'savana', semente(1), 0);
  e.turno = 3;
  e.lados[0].mao = [];
  e.lados[1].mao = [];
  e.lados[0].bichos = b0;
  e.lados[1].bichos = b1;
  return e;
}

test('ocultos: os 4 baralhos prontos têm 40 cartas, os 4 temas comuns e só cartas que existem', () => {
  for (const b of BARALHOS) {
    const lista = expandir(BARALHOS_O[b].lista);
    assert.equal(lista.length, 40, `${b}: ${lista.length} cartas`);
    assert.equal(BARALHOS_O[b].nome, TEMAS_TCG[b].nome);
    for (const id of lista) assert.ok(CARTAS_O[id], `${b}: carta desconhecida ${id}`);
    assert.ok(lista.filter((id) => CARTAS_O[id]!.tipo === 'bicho' && sacrificiosDe(id) === 0).length >= 14, `${b}: poucos bichos sem sacrifício`);
  }
  for (const c of Object.values(CARTAS_O)) if (c.tipo === 'bicho') assert.ok(BICHOS[c.arte!], `${c.id}: sem desenho`);
  for (const id of ['kiko', 'dede', 'pipo', 'topete', 'floco', 'wendel', 'duque', 'vento', 'malhada', 'tobias', 'bolota', 'jubi']) assert.ok(BARALHOS_O.gelo.lista[id], `${id} fora do Gelo do Sul`);
});

test('ocultos: 8000 de vida, 5 na mão, e quem começa não compra nem ataca no 1º turno', () => {
  const e = novaPartidaO('mata', 'gelo', semente(2), 1);
  assert.equal(e.lados[0].vida, 8000);
  assert.equal(e.lados[0].mao.length, 5);
  assert.equal(e.lados[1].mao.length, 5, 'quem começa não compra');
  assert.equal(e.vez, 1);
  assert.ok(!lancesO(e).some((a) => a.t === 'batalha'));
  const f = aplicarO(e, { t: 'fim' });
  assert.equal(f.lados[0].mao.length, 6, 'o segundo compra');
});

test('ocultos: 1 chamada por turno, e o sacrifício de 1 (5–6 estrelas) e de 2 (7 ou mais)', () => {
  assert.equal(sacrificiosDe('pipo'), 0);
  assert.equal(sacrificiosDe('malhada'), 1);
  assert.equal(sacrificiosDe('tobias'), 1);
  assert.equal(sacrificiosDe('sucuri'), 2);
  assert.equal(sacrificiosDe('jubi'), 2);
  let e = mesa([bichoDeTeste('kiko', 10), bichoDeTeste('dede', 11)], []);
  e.lados[0].mao = [
    { uid: 1, carta: 'jubi' },
    { uid: 2, carta: 'pipo' },
  ];
  assert.ok(!ehValidaO(e, { t: 'chamar', uid: 1, modo: 'ataque', sacrificios: [10] }), 'jubi pede 2');
  assert.ok(ehValidaO(e, { t: 'chamar', uid: 1, modo: 'ataque', sacrificios: [10, 11] }));
  e = aplicarO(e, { t: 'chamar', uid: 1, modo: 'ataque', sacrificios: [11, 10] });
  assert.deepEqual(
    e.lados[0].bichos.map((b) => b.carta),
    ['jubi'],
  );
  assert.deepEqual(e.lados[0].descarte.slice(-2).sort(), ['dede', 'kiko']);
  assert.ok(!lancesO(e).some((a) => a.t === 'chamar'), 'só uma chamada por turno');
});

test('ocultos: ATQ contra ATQ — o mais fraco cai e o dono perde a diferença; empate derruba os dois', () => {
  let e = mesa([bichoDeTeste('duque', 10)], [bichoDeTeste('zebra', 20)]);
  e = aplicarO(e, { t: 'batalha' });
  e = aplicarO(e, { t: 'atacar', uid: 10, alvo: 20 });
  assert.equal(e.lados[1].bichos.length, 0);
  assert.equal(e.lados[1].vida, 8000 - 500);

  let f = mesa([bichoDeTeste('dede', 10)], [bichoDeTeste('gnu', 20)]);
  f = aplicarO(aplicarO(f, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: 20 });
  assert.equal(f.lados[0].bichos.length, 0);
  assert.equal(f.lados[0].vida, 8000 - 900);

  let g = mesa([bichoDeTeste('duque', 10)], [bichoDeTeste('gnu', 20)]);
  g = aplicarO(aplicarO(g, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: 20 });
  assert.equal(g.lados[0].bichos.length + g.lados[1].bichos.length, 0);
  assert.equal(g.lados[0].vida + g.lados[1].vida, 16000);
});

test('ocultos: ATQ contra DEF — o defensor cai sem dano; DEF maior faz quem ataca perder a diferença; o virado vira para cima', () => {
  let e = mesa([bichoDeTeste('vento', 10)], [bichoDeTeste('zebra', 20, { posicao: 'defesa', virado: true })]);
  e = aplicarO(aplicarO(e, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: 20 });
  assert.equal(e.lados[1].bichos.length, 0);
  assert.equal(e.lados[1].vida, 8000);
  assert.ok(e.eventos.some((x) => x.t === 'revelou'));

  let f = mesa([bichoDeTeste('pipo', 10)], [bichoDeTeste('girafa', 20, { posicao: 'defesa', virado: true })]);
  f = aplicarO(aplicarO(f, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: 20 });
  assert.equal(f.lados[1].bichos[0]!.virado, false);
  assert.equal(f.lados[0].vida, 8000 - 500);
});

test('ocultos: ataque direto só com o campo do outro vazio', () => {
  let e = mesa([bichoDeTeste('duque', 10)], [bichoDeTeste('suricato', 20, { posicao: 'defesa', virado: true })]);
  e = aplicarO(e, { t: 'batalha' });
  assert.ok(!ehValidaO(e, { t: 'atacar', uid: 10, alvo: null }));
  let f = mesa([bichoDeTeste('duque', 10)], []);
  f = aplicarO(aplicarO(f, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: null });
  assert.equal(f.lados[1].vida, 8000 - 1700);
});

test('ocultos: a armadilha só dispara a partir do turno seguinte, e o outro escolhe se usa', () => {
  let e = mesa([bichoDeTeste('duque', 10)], [bichoDeTeste('suricato', 20)]);
  e.lados[1].baixadas = [{ uid: 30, carta: 'espinhos', posta: 3 }];
  e = aplicarO(aplicarO(e, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: 20 });
  assert.equal(e.fase, 'batalha', 'armadilha baixada neste turno não dispara');

  let f = mesa([bichoDeTeste('duque', 10)], [bichoDeTeste('suricato', 20)]);
  f.lados[1].baixadas = [{ uid: 30, carta: 'espinhos', posta: 2 }];
  f = aplicarO(aplicarO(f, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: 20 });
  assert.equal(f.fase, 'resposta');
  assert.equal(quemAge(f), 1);
  const usa = aplicarO(f, { t: 'responder', uid: 30 });
  assert.equal(usa.lados[0].bichos.length, 0, 'os espinhos derrubam o atacante');
  assert.equal(usa.lados[1].bichos.length, 1);
  const nao = aplicarO(f, { t: 'responder', uid: null });
  assert.equal(nao.lados[1].bichos.length, 0, 'sem a armadilha, a batalha segue');

  let g = mesa([bichoDeTeste('duque', 10)], []);
  g.lados[1].baixadas = [{ uid: 31, carta: 'neblina', posta: 2 }];
  g = aplicarO(aplicarO(aplicarO(g, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: null }), { t: 'responder', uid: 31 });
  assert.equal(g.lados[1].vida, 8000);
  assert.equal(g.fase, 'principal2', 'a neblina acaba a batalha');

  let h = mesa([], []);
  h.lados[0].mao = [{ uid: 1, carta: 'duque' }];
  h.lados[1].baixadas = [{ uid: 32, carta: 'buraco', posta: 2 }];
  h = aplicarO(h, { t: 'chamar', uid: 1, modo: 'ataque', sacrificios: [] });
  assert.equal(h.fase, 'resposta');
  h = aplicarO(h, { t: 'responder', uid: 32 });
  assert.equal(h.lados[0].bichos.length, 0);
  assert.equal(h.fase, 'principal1');
});

test('ocultos: mudar a posição uma vez por turno, não no turno em que entrou', () => {
  let e = mesa([bichoDeTeste('duque', 10, { posicao: 'defesa', virado: true })], []);
  e.lados[0].mao = [{ uid: 1, carta: 'pipo' }];
  e = aplicarO(e, { t: 'chamar', uid: 1, modo: 'ataque', sacrificios: [] });
  assert.ok(!ehValidaO(e, { t: 'posicao', uid: 1 }));
  e = aplicarO(e, { t: 'posicao', uid: 10 });
  assert.equal(e.lados[0].bichos[0]!.virado, false);
  assert.equal(e.lados[0].bichos[0]!.posicao, 'ataque');
  assert.ok(!ehValidaO(e, { t: 'posicao', uid: 10 }));
});

test('ocultos: quem zera a vida ou não tem carta para comprar perde', () => {
  let e = mesa([bichoDeTeste('jubi', 10)], []);
  e.lados[1].vida = 2000;
  e = aplicarO(aplicarO(e, { t: 'batalha' }), { t: 'atacar', uid: 10, alvo: null });
  assert.equal(e.vencedor, 0);
  let f = mesa([], []);
  f.lados[1].baralho = [];
  f = aplicarO(f, { t: 'fim' });
  assert.equal(f.vencedor, 0);
});

const jogar = (b0: BaralhoO, b1: BaralhoO, n0: 'facil' | 'medio' | 'dificil', n1: 'facil' | 'medio' | 'dificil', seed: number, comeca: Lado) => {
  const rng = semente(seed);
  let e = novaPartidaO(b0, b1, rng, comeca);
  let n = 0;
  while (e.vencedor === null && n < 4000) {
    const a = jogadaDoLinuO(e, quemAge(e) === 0 ? n0 : n1, rng);
    assert.ok(ehValidaO(e, a), `lance inválido ${JSON.stringify(a)}`);
    e = aplicarO(e, a);
    n++;
  }
  return e;
};

test('ocultos: o Linu fecha a partida contra ele mesmo nos 3 níveis, nos 4 baralhos', () => {
  for (const nivel of ['facil', 'medio', 'dificil'] as const)
    for (let s = 1; s <= 4; s++) assert.notEqual(jogar(BARALHOS[s - 1]!, BARALHOS[s % 4]!, nivel, nivel, 100 + s, (s % 2) as Lado).vencedor, null, `${nivel}, semente ${s}`);
});

test('ocultos: o difícil ganha do fácil na maioria das partidas', () => {
  let v = 0;
  const N = 16;
  for (let s = 0; s < N; s++) if (jogar(BARALHOS[s % 4]!, BARALHOS[(s + 2) % 4]!, 'dificil', 'facil', 500 + s, (s % 2) as Lado).vencedor === 0) v++;
  assert.ok(v >= N * 0.7, `o difícil ganhou só ${v} de ${N}`);
});

test('ocultos: o Linu não olha as cartas viradas (bichos virados, cartas baixadas, mão e baralhos)', () => {
  let testados = 0;
  for (const nivel of ['facil', 'medio', 'dificil'] as const)
    for (let s = 1; s <= 12; s++) {
      const rng = semente(300 + s);
      let e = novaPartidaO('montanha', 'gelo', rng, 1);
      for (let k = 0; k < 25 + s && e.vencedor === null; k++) e = aplicarO(e, jogadaDoLinuO(e, 'medio', rng));
      if (e.vencedor !== null) continue;
      const eu = quemAge(e);
      const o = (eu === 0 ? 1 : 0) as Lado;
      const mexido = structuredClone(e);
      const M = mexido.lados[o];
      // as cartas escondidas do outro trocam de lugar entre si (mesmas quantidades, mesmos tipos)
      const bichosEscondidos = embaralhar([...M.bichos.filter((b) => b.virado).map((b) => b.carta), ...M.mao.map((m) => m.carta).filter((c) => CARTAS_O[c]!.tipo === 'bicho')], semente(s));
      let k = 0;
      for (const b of M.bichos) if (b.virado) b.carta = bichosEscondidos[k++]!;
      for (const m of M.mao) if (CARTAS_O[m.carta]!.tipo === 'bicho') m.carta = bichosEscondidos[k++]!;
      const armadilhas = ['espinhos', 'neblina', 'buraco'];
      for (const x of M.baixadas) x.carta = armadilhas[(x.uid + s) % 3]!;
      M.baralho = embaralhar(M.baralho, semente(s + 1));
      mexido.lados[eu].baralho = embaralhar(mexido.lados[eu].baralho, semente(s + 2));
      assert.deepEqual(jogadaDoLinuO(mexido, nivel, semente(9)), jogadaDoLinuO(e, nivel, semente(9)), `${nivel}, semente ${s}`);
      testados++;
    }
  assert.ok(testados > 10);
});
