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
  // s sonoro antes de consoante sonora
  ['mismo', 'ˈmizmo'],
  ['desde', 'ˈdezðe'],
  ['isla', 'ˈizla'],
  ['casa', 'ˈkasa'],
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
  // n final assimila a consoante seguinte, mas não atravessa a pausa
  assert.equal(toIpaEs('un beso'), '[um ˈbeso]');
  assert.equal(toIpaEs('un vaso'), '[um ˈbaso]');
  assert.equal(toIpaEs('en casa'), '[eŋ ˈkasa]');
  assert.equal(toIpaEs('Ven, pasa.'), '[ben ˈpasa]');
});

test('traços de sotaque do espanhol: «s» e «jota» aspirados, «ch» chiado, «d» que cai, «r» de Porto Rico', () => {
  assert.equal(toIpaEs('¿Cómo estás?', '419', { sCoda: 'h' }), '[ˈkomo ehˈtah]');
  assert.equal(toIpaEs('Los Ángeles', '419', { sCoda: 'h', jota: 'h' }), '[loh ˈaŋheleh]');
  assert.equal(toIpaEs('muchacho', '419', { ch: 'ʃ' }), '[muˈʃaʃo]');
  assert.equal(toIpaEs('cansado', '419', { dCai: true }), '[kanˈsao]');
  assert.equal(toIpaEs('Puerto Rico', '419', { rCoda: 'l' }), '[ˈpwelto ˈriko]');
  assert.equal(toIpaEs('carro', '419', { rForte: 'ʐ' }), '[ˈkaʐo]');
  // sem traços, nada muda
  assert.equal(toIpaEs('¿Cómo estás?', '419'), '[ˈkomo esˈtas]');
});
