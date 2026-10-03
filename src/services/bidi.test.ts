import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isolateRtlRuns } from './bidi';

test('isolateRtlRuns: texto só em português não muda', () => {
  const texto = 'O português não tem nenhum trecho em árabe ou hebraico aqui.';
  assert.equal(isolateRtlRuns(texto), texto);
});

test('isolateRtlRuns: envolve um trecho árabe com FSI…PDI, sem mudar o resto', () => {
  const out = isolateRtlRuns('Em árabe, “سلام” quer dizer paz.');
  assert.equal(out, 'Em árabe, “⁨سلام⁩” quer dizer paz.');
});

test('isolateRtlRuns: isola cada trecho separadamente quando há mais de um', () => {
  const out = isolateRtlRuns('“سلام” e depois “مرحبا” de novo.');
  assert.equal(out, '“⁨سلام⁩” e depois “⁨مرحبا⁩” de novo.');
});

test('isolateRtlRuns: também isola hebraico', () => {
  const out = isolateRtlRuns('A palavra “שלום” quer dizer paz/olá.');
  assert.equal(out, 'A palavra “⁨שלום⁩” quer dizer paz/olá.');
});
