import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingIu, toSyllabicsIu } from './reading-inuktitut';

describe('silabário inuíte ⇄ letras latinas (ICI)', () => {
  it('lê as palavras do Wikcionário', () => {
    assert.equal(toReadingIu('ᖁᔭᓐᓇᒦᒃ'), 'qujannamiik');
    assert.equal(toReadingIu('ᐃᒡᓗ'), 'iglu');
    assert.equal(toReadingIu('ᖃᖅᑲᖅ'), 'qaqqaq');
    assert.equal(toReadingIu('ᓇᓄᖅ'), 'nanuq');
    assert.equal(toReadingIu('ᐊᓈᓇ'), 'anaana');
  });
  it('escreve no silabário as formas latinas atestadas', () => {
    assert.equal(toSyllabicsIu('qujannamiik'), 'ᖁᔭᓐᓇᒦᒃ');
    assert.equal(toSyllabicsIu('qaqqaq'), 'ᖃᖅᑲᖅ');
    assert.equal(toSyllabicsIu('qanuippit'), 'ᖃᓄᐃᑉᐱᑦ');
    assert.equal(toSyllabicsIu('tunngasugit'), 'ᑐᙵᓱᒋᑦ');
    assert.equal(toSyllabicsIu('qanuinngittunga'), 'ᖃᓄᐃᙱᑦᑐᖓ');
  });
  it('ida e volta', () => {
    for (const w of ['ullumi', 'siqiniq', 'qimmiq', 'tuktu', 'nuna', 'ilaali']) assert.equal(toReadingIu(toSyllabicsIu(w)), w);
  });
});
