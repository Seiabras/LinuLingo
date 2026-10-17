import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MELODIAS } from './melodias';
import { cabeNoCurso, CURSOS_DE_INSTRUMENTO, escolherTom, laminasDaKalimba, meioDoCurso, posicaoNasCordas } from './cursos-instrumentos';

const VIOLAO = CURSOS_DE_INSTRUMENTO.find((c) => c.id === 'violao')!;

test('cursos de instrumento: os oito pedidos pelo dono, cada um com texto e créditos', () => {
  assert.deepEqual(
    CURSOS_DE_INSTRUMENTO.map((c) => c.id),
    ['violao', 'viola-caipira', 'viola-de-arco', 'cavaquinho', 'violoncelo', 'baixolao', 'kalimba', 'sanfona'],
  );
  for (const c of CURSOS_DE_INSTRUMENTO) {
    assert.ok(c.conheca.length >= 3 && c.creditos, c.id);
    if (c.tipo === 'cordas') assert.ok(c.afinacoes?.length, c.id);
    else assert.ok(c.extensao, c.id);
  }
});

test('violão: o mi4 é a 1ª corda solta; o dó4 é a 1ª casa da 2ª corda', () => {
  const cordas = VIOLAO.afinacoes![0]!.cordas;
  assert.deepEqual(posicaoNasCordas(64, cordas, 4), { corda: 0, casa: 0 });
  assert.deepEqual(posicaoNasCordas(60, cordas, 4), { corda: 1, casa: 1 });
  assert.equal(posicaoNasCordas(30, cordas, 4), null);
});

test('kalimba: dó4 no meio, ré4 à esquerda, mi4 à direita, ré6 e mi6 nas pontas', () => {
  const l = laminasDaKalimba();
  assert.equal(l.length, 17);
  assert.equal(l[8], 60);
  assert.equal(l[7], 62);
  assert.equal(l[9], 64);
  assert.equal(l[0], 86);
  assert.equal(l[16], 88);
});

test('as duas músicas cabem em todo curso, num tom de poucos sustenidos', () => {
  for (const c of CURSOS_DE_INSTRUMENTO) {
    for (const af of c.afinacoes ?? [undefined]) {
      for (const id of ['estrelinha', 'ode']) {
        const notas = MELODIAS.find((m) => m.id === id)!.notas;
        const d = escolherTom(notas, (m) => cabeNoCurso(c, af, m), meioDoCurso(c, af));
        assert.notEqual(d, null, `${c.id} ${af?.id ?? ''} ${id}`);
      }
    }
  }
});
