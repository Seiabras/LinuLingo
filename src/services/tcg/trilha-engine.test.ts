import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BICHOS, TEMAS_TCG, embaralhar, expandir, semente } from './comum';
import {
  BARALHOS_T,
  CARTAS_T,
  aplicarT,
  cartaT,
  danoContra,
  ehBasico,
  ehValidaT,
  lancesT,
  novaPartidaT,
  quemAge,
  type BaralhoT,
  type BichoT,
  type EstadoT,
} from './trilha-engine';
import { jogadaDoLinuT } from './trilha-ia';

const BARALHOS = Object.keys(BARALHOS_T) as BaralhoT[];

/** prepara os dois lados com o primeiro básico da mão de cada um, sem banco */
function preparada(seed = 1, b0: BaralhoT = 'gelo', b1: BaralhoT = 'mata'): EstadoT {
  let e = novaPartidaT(b0, b1, semente(seed), 0);
  for (let k = 0; k < 2; k++) {
    const L = e.lados[quemAge(e)];
    e = aplicarT(e, { t: 'preparar', ativo: L.mao.find((m) => ehBasico(m.carta))!.uid, banco: [] });
  }
  return e;
}

const bichoDeTeste = (carta: string, uid: number, extra: Partial<BichoT> = {}): BichoT => ({ uid, carta, abaixo: [], energias: [], dano: 0, entrou: 0, evoluiu: -1, ...extra });

test('trilha: os 4 baralhos prontos têm 40 cartas, os 4 temas comuns e só cartas que existem', () => {
  for (const b of BARALHOS) {
    const lista = expandir(BARALHOS_T[b].lista);
    assert.equal(lista.length, 40, `${b}: ${lista.length} cartas`);
    assert.equal(BARALHOS_T[b].nome, TEMAS_TCG[b].nome);
    for (const id of lista) assert.ok(CARTAS_T[id], `${b}: carta desconhecida ${id}`);
    assert.ok(lista.filter(ehBasico).length >= 10, `${b}: poucos básicos`);
  }
});

test('trilha: cada estágio evolui de um bicho que existe, um estágio abaixo, e todo desenho é do elenco comum', () => {
  for (const c of Object.values(CARTAS_T)) {
    if (c.tipo !== 'bicho') continue;
    assert.ok(BICHOS[c.arte!], `${c.id}: sem desenho`);
    assert.ok(c.ataques && c.ataques.length >= 1 && (c.pv ?? 0) > 0, `${c.id}: sem ataque ou PV`);
    if ((c.estagio ?? 0) > 0) {
      const de = cartaT(c.de!);
      assert.equal(de.estagio, c.estagio! - 1, `${c.id} evolui de ${de.id}`);
      assert.equal(de.bioma, c.bioma);
    } else assert.equal(c.de, undefined);
  }
  // os Amigos do Linu estão todos no Gelo do Sul, com os nomes do app
  for (const id of ['kiko', 'dede', 'pipo', 'topete', 'floco', 'wendel', 'duque', 'vento', 'malhada', 'tobias', 'bolota', 'jubi']) assert.ok(BARALHOS_T.gelo.lista[id], `${id} fora do Gelo do Sul`);
  assert.match(CARTAS_T.tobias!.nome, /^Tobias/);
});

test('trilha: começo com 7 na mão (com básico), 6 prêmios e preparo antes do 1º turno', () => {
  for (let s = 1; s <= 30; s++) {
    const e = novaPartidaT(BARALHOS[s % 4]!, BARALHOS[(s + 1) % 4]!, semente(s), 0);
    for (const L of e.lados) {
      assert.equal(L.mao.length, 7);
      assert.ok(L.mao.some((m) => ehBasico(m.carta)));
      assert.equal(L.premios.length, 6);
      assert.equal(L.baralho.length, 27);
    }
    assert.equal(e.fase, 'preparo');
  }
  const e = preparada();
  assert.equal(e.fase, 'principal');
  assert.equal(e.turno, 1);
  assert.equal(e.lados[0].mao.length, 7, 'quem começa compra 1 no 1º turno');
  assert.ok(!lancesT(e).some((a) => a.t === 'atacar'), 'quem começa não ataca no 1º turno');
});

test('trilha: no preparo só entram bichos básicos, e no máximo 5 no banco', () => {
  const e = novaPartidaT('mata', 'savana', semente(4), 0);
  const L = e.lados[0];
  const naoBasico = L.mao.find((m) => !ehBasico(m.carta));
  const basico = L.mao.find((m) => ehBasico(m.carta))!;
  if (naoBasico) assert.ok(!ehValidaT(e, { t: 'preparar', ativo: naoBasico.uid, banco: [] }));
  assert.ok(ehValidaT(e, { t: 'preparar', ativo: basico.uid, banco: [] }));
});

test('trilha: 1 energia por turno, presa a um bicho', () => {
  let e = preparada(2);
  const L = e.lados[0];
  L.mao.push({ uid: 900, carta: 'energia-gelo' }, { uid: 901, carta: 'energia-gelo' });
  e = aplicarT(e, { t: 'energia', uid: 900, alvo: L.ativo!.uid });
  assert.equal(e.lados[0].ativo!.energias.length, 1);
  assert.ok(!lancesT(e).some((a) => a.t === 'energia'), 'a segunda energia não vai no mesmo turno');
});

test('trilha: não evolui no primeiro turno de cada um nem o bicho que acabou de entrar', () => {
  let e = preparada(3);
  e.lados[0].mao.push({ uid: 900, carta: 'tobias' });
  e.lados[0].ativo = bichoDeTeste('filhote-pinguim', 800);
  assert.ok(!lancesT(e).some((a) => a.t === 'evoluir'), 'nada de evoluir no 1º turno');
  e = aplicarT(e, { t: 'passar' });
  e = aplicarT(e, { t: 'passar' });
  assert.equal(e.vez, 0);
  e.lados[0].mao.push({ uid: 901, carta: 'filhote-pinguim' });
  assert.ok(lancesT(e).some((a) => a.t === 'evoluir' && a.uid === 900 && a.alvo === 800));
  e = aplicarT(e, { t: 'basico', uid: 901 });
  const novo = e.lados[0].banco.find((b) => b.carta === 'filhote-pinguim' && b.uid !== 800)!;
  assert.ok(!ehValidaT(e, { t: 'evoluir', uid: 900, alvo: novo.uid }), 'o que entrou agora não evolui');
  e = aplicarT(e, { t: 'evoluir', uid: 900, alvo: 800 });
  assert.equal(e.lados[0].ativo!.carta, 'tobias');
  assert.deepEqual(e.lados[0].ativo!.abaixo, ['filhote-pinguim']);
});

test('trilha: fraqueza dobra o dano e resistência tira 30', () => {
  // a savana pega o gelo
  assert.deepEqual(danoContra('zebra', 'dede', 30), { n: 60, fraqueza: true, resistencia: false });
  // quem voa resiste à savana
  assert.deepEqual(danoContra('zebra', 'arara', 30), { n: 0, fraqueza: false, resistencia: true });
  assert.equal(danoContra('leao', 'condor', 80).n, 50);
  // sem fraqueza nem resistência
  assert.equal(danoContra('pipo', 'zebra', 30).n, 30);
});

test('trilha: derrubar o ativo dá 1 prêmio e o outro escolhe o novo ativo', () => {
  let e = preparada(5, 'savana', 'gelo');
  e.turno = 3;
  e.lados[0].ativo = bichoDeTeste('zebra', 800, { energias: ['energia-savana', 'energia-savana'] });
  e.lados[1].ativo = bichoDeTeste('dede', 801, { dano: 10 });
  e.lados[1].banco = [bichoDeTeste('pipo', 802)];
  const maoAntes = e.lados[0].mao.length;
  e = aplicarT(e, { t: 'atacar', i: 0 });
  assert.equal(e.lados[0].premios.length, 5);
  assert.equal(e.lados[0].mao.length, maoAntes + 1);
  assert.equal(e.fase, 'promover');
  assert.equal(quemAge(e), 1);
  e = aplicarT(e, { t: 'promover', uid: 802 });
  assert.equal(e.lados[1].ativo!.carta, 'pipo');
  assert.equal(e.vez, 1);
  assert.equal(e.fase, 'principal');
});

test('trilha: sem bicho no campo ou com o último prêmio, a partida acaba', () => {
  let e = preparada(6, 'savana', 'gelo');
  e.turno = 3;
  e.lados[0].ativo = bichoDeTeste('zebra', 800, { energias: ['energia-savana', 'energia-savana'] });
  e.lados[1].ativo = bichoDeTeste('kiko', 801);
  e.lados[1].banco = [];
  e = aplicarT(e, { t: 'atacar', i: 0 });
  assert.equal(e.vencedor, 0);

  let f = preparada(7, 'savana', 'gelo');
  f.turno = 3;
  f.lados[0].premios = ['energia-savana'];
  f.lados[0].ativo = bichoDeTeste('zebra', 800, { energias: ['energia-savana', 'energia-savana'] });
  f.lados[1].ativo = bichoDeTeste('kiko', 801);
  f.lados[1].banco = [bichoDeTeste('pipo', 802)];
  f = aplicarT(f, { t: 'atacar', i: 0 });
  assert.equal(f.vencedor, 0);
});

test('trilha: quem não tem carta para comprar no começo do turno perde', () => {
  let e = preparada(8);
  e.lados[1].baralho = [];
  e = aplicarT(e, { t: 'passar' });
  assert.equal(e.vencedor, 0);
});

test('trilha: recuar descarta a energia do custo e só uma vez por turno', () => {
  let e = preparada(9);
  e.lados[0].ativo = bichoDeTeste('pipo', 800, { energias: ['energia-gelo', 'energia-gelo'] });
  e.lados[0].banco = [bichoDeTeste('dede', 801), bichoDeTeste('kiko', 802)];
  e = aplicarT(e, { t: 'recuar', para: 801 });
  assert.equal(e.lados[0].ativo!.carta, 'dede');
  assert.equal(e.lados[0].banco.find((b) => b.uid === 800)!.energias.length, 1);
  assert.ok(!lancesT(e).some((a) => a.t === 'recuar'));
});

test('trilha: o Linu fecha a partida contra ele mesmo nos 3 níveis, nos 4 baralhos', () => {
  for (const nivel of ['facil', 'medio', 'dificil'] as const)
    for (let s = 1; s <= 4; s++) {
      const rng = semente(100 + s);
      let e = novaPartidaT(BARALHOS[s - 1]!, BARALHOS[s % 4]!, rng, (s % 2) as 0 | 1);
      let n = 0;
      while (e.vencedor === null && n < 3000) {
        const a = jogadaDoLinuT(e, nivel, rng);
        assert.ok(ehValidaT(e, a), `${nivel}: lance inválido ${JSON.stringify(a)}`);
        e = aplicarT(e, a);
        n++;
      }
      assert.notEqual(e.vencedor, null, `${nivel}, semente ${s}: não acabou`);
    }
});

test('trilha: o difícil ganha do fácil na maioria das partidas', () => {
  let vitorias = 0;
  const N = 16;
  for (let s = 0; s < N; s++) {
    const rng = semente(500 + s);
    let e = novaPartidaT(BARALHOS[s % 4]!, BARALHOS[(s + 2) % 4]!, rng, (s % 2) as 0 | 1);
    let n = 0;
    while (e.vencedor === null && n < 3000) {
      e = aplicarT(e, jogadaDoLinuT(e, quemAge(e) === 0 ? 'dificil' : 'facil', rng));
      n++;
    }
    if (e.vencedor === 0) vitorias++;
  }
  assert.ok(vitorias >= N * 0.7, `o difícil ganhou só ${vitorias} de ${N}`);
});

test('trilha: o Linu não olha as cartas viradas (mão do outro, prêmios e baralhos)', () => {
  for (const nivel of ['facil', 'medio', 'dificil'] as const)
    for (let s = 1; s <= 6; s++) {
      const rng = semente(300 + s);
      let e = novaPartidaT('montanha', 'savana', rng, 1);
      // anda até o meio da partida
      for (let k = 0; k < 40 && e.vencedor === null; k++) e = aplicarT(e, jogadaDoLinuT(e, 'medio', rng));
      if (e.vencedor !== null) continue;
      const eu = quemAge(e);
      const outroL = e.lados[eu === 0 ? 1 : 0];
      const mexido = structuredClone(e);
      const mo = mexido.lados[eu === 0 ? 1 : 0];
      // troca as cartas escondidas por outras (mesmas quantidades)
      const escondidas = embaralhar([...outroL.mao.map((m) => m.carta), ...outroL.premios, ...outroL.baralho], semente(s));
      mo.mao = mo.mao.map((m, i) => ({ ...m, carta: escondidas[i]! }));
      mo.premios = escondidas.slice(mo.mao.length, mo.mao.length + mo.premios.length);
      mo.baralho = escondidas.slice(mo.mao.length + mo.premios.length);
      mexido.lados[eu].premios = embaralhar(mexido.lados[eu].premios, semente(s + 1));
      mexido.lados[eu].baralho = embaralhar(mexido.lados[eu].baralho, semente(s + 2));
      assert.deepEqual(jogadaDoLinuT(mexido, nivel, semente(9)), jogadaDoLinuT(e, nivel, semente(9)), `${nivel}, semente ${s}`);
    }
});
