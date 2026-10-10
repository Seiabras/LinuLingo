import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { beCirilicoParaLacinka, lacinkaSegura, srCirilicoParaLatino, uzLatinoParaCirilico } from './transliteracao';

describe('transliteração entre escritas da mesma língua', () => {
  it('sérvio: cirílico → latino, letra a letra (com os dígrafos lj, nj, dž)', () => {
    assert.equal(srCirilicoParaLatino('Добро вече'), 'Dobro veče');
    assert.equal(srCirilicoParaLatino('довиђења, љубав, њега, џеп'), 'doviđenja, ljubav, njega, džep');
    assert.equal(srCirilicoParaLatino('Љубљана'), 'Ljubljana');
  });

  it('uzbeque: latino → cirílico (oʻ, gʻ, sh, ch, yo, “e” inicial)', () => {
    assert.equal(uzLatinoParaCirilico('yoʻq'), 'йўқ');
    assert.equal(uzLatinoParaCirilico('Toshkent'), 'Тошкент');
    assert.equal(uzLatinoParaCirilico('ertaga'), 'эртага');
    assert.equal(uzLatinoParaCirilico('yemoq'), 'емоқ');
    assert.equal(uzLatinoParaCirilico('togʻ'), 'тоғ');
  });

  it('bielorrusso: cirílico → łacinka (ł duro, l brando, ie/ja, ŭ, dz)', () => {
    assert.equal(beCirilicoParaLacinka('до́бры ве́чар'), 'dobry viečar');
    assert.equal(beCirilicoParaLacinka('калі́ ла́ска'), 'kali łaska');
    assert.equal(beCirilicoParaLacinka('дзя́куй'), 'dziakuj');
    assert.equal(beCirilicoParaLacinka('сяброўка'), 'siabroŭka');
    assert.equal(beCirilicoParaLacinka('ён'), 'jon');
    assert.equal(beCirilicoParaLacinka('быць'), 'być');
  });

  it('bielorrusso: palavras com palatalização por assimilação ficam fora das amostras', () => {
    assert.equal(lacinkaSegura('снег'), false);
    assert.equal(lacinkaSegura('есці'), false);
    assert.equal(lacinkaSegura('дом'), true);
  });
});
