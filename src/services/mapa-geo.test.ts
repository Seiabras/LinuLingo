import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fitBox, focusBox, parseSubdivisions, ringBoxes } from './mapa-geo';
import { addGlottolog, byKinship, languagesIn, notableLanguagesIn } from '../data/onde-se-fala';
import { GLOTTOLOG_ROWS } from '../data/linguas-glottolog';

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

test('mapa: línguas oficiais/regionais vencem o Glottolog na cor por estado (achado de seiabras-b8)', () => {
  // com o Glottolog carregado (centenas de línguas "faladas" por país, cada uma com 1-2 subdivisões),
  // a ordenação antiga por "menos subdivisões" deixava línguas minúsculas pintarem por cima de línguas
  // de verdade (ex.: Tamil Nadu saía como alguma língua obscura, não como tâmil) — ver MapScreen.tsx.
  addGlottolog(GLOTTOLOG_ROWS);
  const winner = (iso: string, subdivision: string) => {
    const specific = notableLanguagesIn(iso)
      .filter((x) => (x.spoken.subdivisions?.length ?? 0) > 0)
      .sort((a, b) => a.spoken.subdivisions!.length - b.spoken.subdivisions!.length);
    return specific.find((x) => x.spoken.subdivisions!.includes(subdivision))?.lang.code;
  };
  assert.equal(winner('IND', 'IN-TN'), 'ta', 'Tamil Nadu deveria pintar como tâmil');
  assert.equal(winner('IND', 'IN-TS'), 'te', 'Telangana deveria pintar como télugo');
  assert.equal(winner('IND', 'IN-WB'), 'bn', 'West Bengal deveria pintar como bengali');
  assert.equal(winner('CAN', 'CA-QC'), 'fr', 'Quebec deveria pintar como francês');
});
