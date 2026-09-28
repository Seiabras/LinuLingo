import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GLOTTOLOG_ROWS } from './linguas-glottolog';
import { WORLD } from './mapa-mundi';
import { classifiedCodes, PARAMETERS, SIGN_FAMILIES, SIGN_QUIZ, SIGN_RECOGNITION, signCountries, signLanguages, signLanguagesOf } from './linguas-sinais';

const all = signLanguages(GLOTTOLOG_ROWS);

test('línguas de sinais: toda classificação aponta para uma língua de sinais do Glottolog', () => {
  const codes = new Set(all.map((l) => l.glottocode));
  for (const c of classifiedCodes()) assert.ok(codes.has(c), `${c} não é língua de sinais no Glottolog`);
});

test('línguas de sinais: famílias com raiz, as do país e os cinco parâmetros', () => {
  assert.ok(all.length > 200);
  for (const f of SIGN_FAMILIES) assert.ok(f.members.length >= 2, `${f.id}: família de uma língua só`);
  const br = signLanguagesOf(all, 'BRA');
  assert.equal(br[0].name.split(' ')[0], 'Libras');
  assert.equal(br[0].family?.id, 'francesa');
  assert.equal(all.find((l) => l.glottocode === 'amer1248')?.family?.id, 'americana');
  assert.equal(all.find((l) => l.glottocode === 'brit1235')?.family?.id, 'banzsl');
  assert.equal(all.find((l) => l.glottocode === 'port1277')?.family?.id, 'sueca');
  assert.deepEqual(PARAMETERS.map((p) => p.id), ['CM', 'PA', 'M', 'O', 'ENM']);
  for (const iso of Object.keys(SIGN_RECOGNITION)) assert.ok(WORLD.some((c) => c.iso === iso), `${iso} fora do mapa`);
  for (const [iso] of signCountries(all)) assert.ok(WORLD.some((c) => c.iso === iso), `${iso} fora do mapa`);
  for (const q of SIGN_QUIZ) assert.ok(q.answer < q.options.length);
});
