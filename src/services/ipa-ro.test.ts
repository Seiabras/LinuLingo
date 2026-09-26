/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpa, wordToIpa } from './ipa-ro';

const cases: [string, string][] = [
  ['faci', 'fat͡ʃʲ'],
  ['ce', 't͡ʃe'],
  ['ochi', 'okʲ'],
  ['chiar', 'kjar'],
  ['ceai', 't͡ʃaj'],
  ['ciorbă', 't͡ʃorbə'],
  ['mulțumesc', 'mult͡sumesk'],
  ['școală', 'ʃko̯alə'],
  ['pâine', 'pɨjne'],
  ['noapte', 'no̯apte'],
  ['dimineața', 'dimine̯at͡sa'],
  ['este', 'jeste'],
  ['el', 'jel'],
  ['ea', 'je̯a'],
  ['ziua', 'ziwa'],
  ['iepure', 'jepure'],
  ['ești', 'jeʃtʲ'],
  ['îmi', 'ɨmʲ'],
  ['și', 'ʃi'],
  ['copii', 'kopij'],
  ['ghid', 'ɡid'],
  ['gară', 'ɡarə'],
  ['merge', 'merd͡ʒe'],
  ['cheie', 'keje'],
  ['femeie', 'femeje'],
  ['ploaie', 'plo̯aje'],
];

test('IPA palavra a palavra', () => {
  for (const [w, ipa] of cases) assert.equal(wordToIpa(w), ipa, w);
});

test('IPA de frases e clíticos com hífen', () => {
  assert.equal(toIpa('Ce faci?'), '[t͡ʃe fat͡ʃʲ]');
  assert.equal(toIpa('Mi-e dor de tine.'), '[mje dor de tine]');
  assert.equal(toIpa('Nu-mi place.'), '[numʲ plat͡ʃe]');
  assert.equal(toIpa('Bună ziua!'), '[bunə ziwa]');
  assert.equal(toIpa('a vorbi'), '[a vorbi]');
  assert.equal(toIpa('a citi'), '[a t͡ʃiti]');
  assert.equal(toIpa('Vorbești română?'), '[vorbeʃtʲ romɨnə]');
  assert.equal(toIpa('nouă'), '[nowə]');
});
