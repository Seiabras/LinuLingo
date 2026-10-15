import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialState,
  fimDasVezes,
  jogarPasso,
  passarVez,
  passosLegais,
  pips,
  podePassar,
  rolar,
  rolarCom,
  type GamaoState,
} from './gamao-engine';

/** Uma posição montada à mão, já na fase de mover com os dados dados. */
function posicao(pecas: Record<number, number>, extra: Partial<GamaoState> = {}, dados: [number, number] = [1, 2]): GamaoState {
  const pts = Array(24).fill(0) as number[];
  for (const [i, n] of Object.entries(pecas)) pts[Number(i)] = n;
  const base: GamaoState = { ...createInitialState(), pts, fase: 'rolar', turn: 'w', ...extra };
  return rolarCom(base, dados[0], dados[1]);
}

test('gamão: posição inicial com 15 peças de cada lado e 167 pips', () => {
  const s = createInitialState();
  assert.equal(s.pts.filter((n) => n > 0).reduce((a, b) => a + b, 0), 15);
  assert.equal(-s.pts.filter((n) => n < 0).reduce((a, b) => a + b, 0), 15);
  assert.equal(pips(s, 'w'), 167);
  assert.equal(pips(s, 'p'), 167);
  assert.equal(s.fase, 'abrir');
});

test('gamão: abertura — quem tira mais começa com os dois números; empate rola de novo', () => {
  const s = createInitialState();
  const empate = rolarCom(s, 4, 4);
  assert.equal(empate.fase, 'abrir');
  const a = rolarCom(empate, 3, 5);
  assert.equal(a.turn, 'p');
  assert.equal(a.fase, 'mover');
  assert.deepEqual(a.restam, [3, 5]);
  // o sorteio é injetável: o mesmo sorteio dá a mesma rolagem
  const fixo = () => 0.99;
  assert.equal(rolar(a, fixo), a, 'no meio da vez não se rola de novo');
  const c = rolar({ ...createInitialState(), fase: 'rolar' }, fixo);
  assert.deepEqual(c.restam, [6, 6, 6, 6], 'dupla de 6 joga quatro vezes');
});

test('gamão: dupla joga quatro vezes', () => {
  let s = rolarCom({ ...createInitialState(), fase: 'rolar' }, 2, 2);
  assert.equal(s.restam.length, 4);
  for (let k = 0; k < 4; k++) {
    s = jogarPasso(s, 5, 2);
    assert.equal(s.passos.length, k + 1);
  }
  assert.equal(s.pts[5], 1);
  assert.equal(s.pts[3], 4);
  assert.ok(podePassar(s));
  const t = passarVez(s);
  assert.equal(t.turn, 'p');
  assert.equal(t.fase, 'rolar');
});

test('gamão: não pode parar em ponto com 2 ou mais peças do adversário', () => {
  // claras no ponto 13 (índice 12); as escuras têm 5 peças no índice 11
  const s = rolarCom({ ...createInitialState(), fase: 'rolar' }, 1, 3);
  // do índice 12 com o 1 cairia no índice 11, que tem 5 escuras
  assert.ok(!passosLegais(s).some((p) => p.de === 12 && p.dado === 1));
});

test('gamão: bater a peça sozinha manda para a barra, e da barra é obrigatório entrar primeiro', () => {
  let s = posicao({ 10: 2, 8: -1, 18: -2 }, {}, [2, 6]);
  s = jogarPasso(s, 10, 2);
  assert.equal(s.bar.p, 1);
  assert.equal(s.pts[8], 1);
  assert.equal(s.passos[0]!.bateu, true);
  s = passarVez(jogarPasso(s, 10, 6));
  s = rolarCom(s, 3, 5);
  // as escuras na barra: só pode jogar da barra
  assert.ok(passosLegais(s).every((p) => p.de === 'bar'));
  // entram no índice dado−1
  const e = jogarPasso(s, 'bar', 3);
  assert.equal(e.pts[2], -1);
  assert.equal(e.bar.p, 0);
});

test('gamão: sem entrada (casa fechada) a vez passa sem lance', () => {
  // as claras fecharam os 6 pontos da casa delas; as escuras estão na barra
  const s = posicao({ 0: 2, 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 20: 3 }, { turn: 'p', bar: { w: 0, p: 1 } }, [4, 6]);
  assert.equal(passosLegais(s).length, 0);
  assert.ok(podePassar(s));
});

test('gamão: obrigação de usar os dois dados quando dá', () => {
  // claras: uma peça no índice 9. Com 6 e 5: jogar o 6 primeiro (para o 3) bloquearia o 5? Não: no
  // índice 4 há duas escuras, então 9−5 = 4 está fechado; mas 9−6 = 3 e depois 3−5 sai do tabuleiro
  // (não pode tirar). Para usar os dois, é preciso ter outra peça.
  const s = posicao({ 9: 1, 15: 1, 4: -2, 22: -13 }, {}, [6, 5]);
  const legais = passosLegais(s);
  // usando 5 no 15 → 10, e 6 no 9 → 3 (ou 6 no 15 → 9 e 5 no 9 → 4 que é fechado...). Todo passo
  // legal tem de fazer parte de uma sequência com os dois dados
  for (const p of legais) {
    const depois = jogarPasso(s, p.de, p.dado);
    assert.ok(passosLegais(depois).length > 0, `o passo ${String(p.de)}/${p.dado} deixaria o outro dado sem uso`);
  }
});

test('gamão: se só um dado cabe, tem de ser o maior', () => {
  // claras: uma peça só, no índice 12. Com 6 e 1: 12−1 = 11 fechado (2 escuras); 12−6 = 6 livre, mas
  // depois 6−1 = 5 fechado. Os dois cabem um de cada vez, nunca juntos → só o 6 vale.
  const s = posicao({ 12: 1, 11: -2, 5: -2, 22: -11 }, {}, [1, 6]);
  const legais = passosLegais(s);
  assert.deepEqual(
    legais.map((p) => p.dado),
    [6],
  );
  // e o caso em que o maior não cabe: aí vale o menor
  const t = posicao({ 12: 1, 6: -2, 22: -13 }, {}, [1, 6]);
  // 12−6 = 6 fechado; 12−1 = 11 livre, depois 11−6 = 5 livre → os dois cabem
  assert.ok(passosLegais(t).some((p) => p.dado === 1));
});

test('gamão: retirada só com todas na casa, número exato ou o maior quando não há peça mais longe', () => {
  // uma clara fora da casa: não pode tirar
  let s = posicao({ 2: 3, 8: 1, 22: -15 }, {}, [3, 4]);
  assert.ok(!passosLegais(s).some((p) => p.para === 'fora'));
  // todas na casa: o 3 tira a peça do ponto 3 (índice 2)
  s = posicao({ 2: 3, 4: 1, 22: -15 }, {}, [3, 6]);
  const tirar3 = passosLegais(s).find((p) => p.dado === 3 && p.para === 'fora');
  assert.equal(tirar3?.de, 2);
  // o 6 é maior que a peça mais longe (índice 4 = ponto 5): tira dela
  const tirar6 = passosLegais(s).find((p) => p.dado === 6);
  assert.equal(tirar6?.de, 4);
  assert.equal(tirar6?.para, 'fora');
  // com peça no 6 (índice 5) e dado 4: não pode tirar do 2 com o 4 (precisa andar dentro da casa)
  const t = posicao({ 5: 1, 1: 1, 22: -15 }, {}, [4, 4]);
  assert.ok(!passosLegais(t).some((p) => p.de === 1 && p.para === 'fora'));
});

test('gamão: vitória simples, gamão e backgammon', () => {
  // claras com 14 fora e a última no ponto 1
  const simples = jogarPasso(posicao({ 0: 1, 22: -14 }, { fora: { w: 14, p: 1 } }, [1, 2]), 0, 2);
  assert.equal(simples.winner, 'w');
  assert.equal(simples.vitoria, 'simples');
  assert.equal(simples.pontos, 1);
  const gamao = jogarPasso(posicao({ 0: 1, 22: -15 }, { fora: { w: 14, p: 0 } }, [1, 2]), 0, 2);
  assert.equal(gamao.vitoria, 'gamao');
  assert.equal(gamao.pontos, 2);
  const back = jogarPasso(posicao({ 0: 1, 3: -1, 22: -14 }, { fora: { w: 14, p: 0 } }, [1, 2]), 0, 2);
  assert.equal(back.vitoria, 'backgammon');
  assert.equal(back.pontos, 3);
  const naBarra = jogarPasso(posicao({ 0: 1, 22: -14 }, { fora: { w: 14, p: 0 }, bar: { w: 0, p: 1 } }, [1, 2]), 0, 2);
  assert.equal(naBarra.vitoria, 'backgammon');
  assert.equal(passosLegais(back).length, 0, 'depois do fim não há lance');
});

test('gamão: os fins de vez da abertura 3-1 incluem fazer o ponto 5', () => {
  const s = rolarCom(createInitialState(), 3, 1);
  const fins = fimDasVezes(s);
  assert.ok(fins.length > 5);
  assert.ok(fins.some((f) => f.fim.pts[4] === 2 && f.fim.pts[7] === 2 && f.fim.pts[5] === 4), 'o clássico 8/5 6/5');
  // todo fim usa os dois dados
  assert.ok(fins.every((f) => f.passos.length === 2));
});

test('gamão: partida inteira com sorteio fixo termina e conserva as 15 peças', () => {
  let semente = 7;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = createInitialState();
  for (let k = 0; k < 5000 && s.winner === null; k++) {
    if (s.fase === 'abrir' || s.fase === 'rolar') s = rolar(s, sorteio);
    else if (podePassar(s)) s = passarVez(s);
    else {
      const ls = passosLegais(s);
      const p = ls[Math.floor(sorteio() * ls.length)]!;
      s = jogarPasso(s, p.de, p.dado);
    }
    for (const c of ['w', 'p'] as const) {
      const noTab = s.pts.reduce((a, n) => a + (c === 'w' ? Math.max(0, n) : Math.max(0, -n)), 0);
      assert.equal(noTab + s.bar[c] + s.fora[c], 15);
    }
  }
  assert.ok(s.winner !== null, 'a partida terminou');
  assert.ok(s.pontos >= 1 && s.pontos <= 3);
});

test('gamão: a última peça sai com o dado maior, também na lista de fins de vez', () => {
  const s = posicao({ 1: 1, 23: -5 }, { fora: { w: 14, p: 10 } }, [3, 4]);
  assert.deepEqual(
    passosLegais(s).map((p) => p.dado),
    [4],
  );
  const fins = fimDasVezes(s);
  assert.equal(fins.length, 1);
  assert.equal(fins[0]!.passos[0]!.dado, 4);
  assert.equal(fins[0]!.fim.winner, 'w');
});
