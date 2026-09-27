import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fitBox, focusBox, parseSubdivisions, ringBoxes } from './mapa-geo';
import { byKinship, languagesIn } from '../data/onde-se-fala';

test('caixas de anéis absolutos (M/L) e relativos (m/l)', () => {
  assert.deepEqual(ringBoxes('M1 2L5 2L5 6Z'), [{ x: 1, y: 2, w: 4, h: 4 }]);
  assert.deepEqual(ringBoxes('M10 10l2 0 0 3 -2 0zM0 0l1 1z'), [
    { x: 10, y: 10, w: 2, h: 3 },
    { x: 0, y: 0, w: 1, h: 1 },
  ]);
});

test('enquadramento ignora pedaços distantes (Alasca, Havaí)', () => {
  const main = { x: 100, y: 100, w: 50, h: 30 };
  const near = { x: 152, y: 110, w: 5, h: 5 };
  const far = { x: 900, y: 20, w: 20, h: 20 };
  assert.deepEqual(focusBox([main, near, far]), { x: 100, y: 100, w: 57, h: 30 });
  const f = fitBox({ x: 0, y: 0, w: 10, h: 10 }, 0.5);
  assert.ok(Math.abs(f.h / f.w - 0.5) < 1e-9 && f.h >= 10);
});

test('subdivisões lidas do arquivo', () => {
  const [s] = parseSubdivisions('[["RS-01","Severno-Backi","M0 0l1 1z",1,2,3,"RS-VO"]]');
  assert.equal(s.parent, 'RS-VO');
  assert.equal(s.note, undefined);
});

test('idiomas: o estudado primeiro, depois os parentes mais próximos', () => {
  assert.deepEqual(
    byKinship('ro')
      .slice(0, 4)
      .map((l) => l.code),
    ['ro', 'es', 'pt', 'it'],
  );
  assert.deepEqual(
    byKinship('fi')
      .slice(0, 2)
      .map((l) => l.code),
    ['fi', 'et'],
  );
});

test('no país, do idioma mais falado ao menos', () => {
  assert.equal(languagesIn('BRA')[0].lang.code, 'pt');
  assert.equal(languagesIn('MDA')[0].lang.code, 'ro');
  // Ucrânia: o ucraniano (oficial) primeiro; entre os idiomas do app, o russo antes do romeno
  const ukr = languagesIn('UKR').map((x) => x.lang.code);
  assert.equal(ukr[0], 'uk');
  assert.ok(ukr.indexOf('ru') < ukr.indexOf('ro'));
});
