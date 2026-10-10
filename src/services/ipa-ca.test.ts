/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaCa } from './ipa-ca';

test('catalão central: átonas reduzidas, x [ʃ], j [ʒ]', () => {
  assert.equal(toIpaCa('Barcelona'), '[bərsəˈlɔnə]');
  assert.equal(toIpaCa('Vull menjar gelat de taronja'), '[buʎ mənˈʒa ʒəˈlat də təˈɾɔnʒə]');
});

test('traços dos falares: valenciano, alguerês e «v» labiodental (09/10/2026)', () => {
  const valencia = { atonas: 'ocidental', xInicial: 'tʃ', jota: 'dʒ', rFinal: true, ixDitongo: true } as const;
  assert.equal(toIpaCa('Barcelona', valencia), '[barseˈlɔna]');
  assert.equal(toIpaCa('Vull menjar gelat de taronja', valencia), '[buʎ menˈdʒar dʒeˈlat de taˈɾɔndʒa]');
  assert.equal(toIpaCa('Hui eixim amb els xiquets', valencia), '[wi ejˈʃim am els tʃiˈkɛts]');
  assert.equal(toIpaCa("L'home parla amb el pare", { atonas: 'alguer' }), '[ˈlɔma ˈparla am al ˈpaɾa]');
  assert.equal(toIpaCa('la sala', { atonas: 'alguer', rotacismo: true }), '[la ˈsaɾa]');
  assert.equal(toIpaCa('Vull', { vLabiodental: true }), '[vuʎ]');
  // sem traços, a transcrição volta ao central
  assert.equal(toIpaCa('Barcelona'), '[bərsəˈlɔnə]');
});
