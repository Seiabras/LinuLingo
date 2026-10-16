import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as P from './pallanguzhi-engine';
import { casasDe, deposito } from './mancala-familia';
import { lanceMancala } from './mancala-familia-ia';

test('pallanguzhi “12 sementes (Wikipédia)”: 12 por cova, 2 na do meio, pasu com 6', () => {
  const s = P.createInitialState(0, '12');
  const sul = casasDe(s.n, 0).map((i) => s.covas[i]);
  assert.deepEqual(sul, [12, 12, 12, 2, 12, 12, 12]);
  assert.equal(s.pasu, 6);
  // a padrão continua com 6 sementes e pasu de 4
  const p = P.createInitialState(0);
  assert.ok(casasDe(p.n, 0).every((i) => p.covas[i] === 6));
  assert.equal(p.pasu, undefined);
});

test('pallanguzhi “12 sementes”: a cova que chega a 6 é capturada, e não a que chega a 4', () => {
  const base = P.createInitialState(0, '12');
  const covas = base.covas.map(() => 0);
  // uma semente na cova 0 do Sul, que cai na cova 1 com 5: vira 6, pasu
  covas[0] = 1;
  covas[1] = 5;
  covas[casasDe(base.n, 1)[0]!] = 3;
  const s = { ...base, covas };
  const t = P.jogar(s, 0);
  assert.equal(t.covas[deposito(t.n, 0)], 6, 'capturou as 6 da cova 1');
  // na padrão, chegar a 6 não é pasu
  const u = P.jogar({ ...s, pasu: undefined }, 0);
  assert.notEqual(u.covas[deposito(u.n, 0)], 6);
});

test('pallanguzhi: o Linu joga nas duas versões', () => {
  for (const v of ['', '12'] as const) {
    let s = P.createInitialState(0, v);
    for (let k = 0; k < 10 && s.winner === null; k++) {
      const i = lanceMancala(s, P, 'medio');
      assert.notEqual(i, null);
      const f = P.jogar(s, i!);
      assert.notEqual(f, s);
      s = f;
    }
  }
});
