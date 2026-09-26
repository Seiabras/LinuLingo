/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaEs, wordToIpaEs } from './ipa-es';

const cases: [string, string][] = [
  ['hola', 'ˈola'],
  ['gracias', 'ˈgɾasjas'],
  ['ciudad', 'sjuˈðað'],
  ['perro', 'ˈpero'],
  ['pero', 'ˈpeɾo'],
  ['calle', 'ˈkaʝe'],
  ['niño', 'ˈniɲo'],
  ['queso', 'ˈkeso'],
  ['guitarra', 'giˈtara'],
  ['jamón', 'xaˈmon'],
  ['cabeza', 'kaˈβesa'],
  ['España', 'esˈpaɲa'],
  ['ahora', 'aˈoɾa'],
  ['día', 'ˈdia'],
  ['país', 'paˈis'],
  ['Madrid', 'maˈðɾið'],
  ['banco', 'ˈbaŋko'],
  ['agua', 'ˈaɣwa'],
  ['pingüino', 'piŋˈgwino'],
  ['estoy', 'esˈtoi̯'],
  ['México', 'ˈmexiko'],
  ['aire', 'ˈai̯ɾe'],
  ['bueno', 'ˈbweno'],
  ['libro', 'ˈliβɾo'],
  ['rosa', 'ˈrosa'],
  ['honra', 'ˈonra'],
  ['general', 'xeneˈɾal'],
  ['examen', 'ekˈsamen'],
];

test('espanhol: palavras em IPA (seseo, b/d/g suaves, r, ditongos, tônica pela ortografia)', () => {
  for (const [w, ipa] of cases) assert.equal(wordToIpaEs(w), ipa, w);
});

test('espanhol: variantes e frases', () => {
  assert.equal(wordToIpaEs('cabeza', 'ES'), 'kaˈβeθa');
  assert.equal(wordToIpaEs('calle', 'AR'), 'ˈkaʃe');
  assert.equal(toIpaEs('¿Cómo estás?'), '[ˈkomo esˈtas]');
  // b entre vogais na fala contínua fica suave; depois de pausa, oclusivo
  assert.equal(toIpaEs('la boca'), '[la ˈβoka]');
  assert.equal(toIpaEs('Boca.'), '[ˈboka]');
});
