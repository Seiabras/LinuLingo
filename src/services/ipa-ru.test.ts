/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaRu, wordToIpaRu } from './ipa-ru';

const cases: [string, string][] = [
  ['молоко́', 'məlɐˈko'],
  ['хорошо́', 'xərɐˈʂo'],
  ['Москва́', 'mɐˈskva'],
  ['спаси́бо', 'spɐˈsʲibə'],
  ['хлеб', 'xlʲep'],
  ['год', 'got'],
  ['во́дка', 'ˈvotkə'],
  ['что', 'ʂto'],
  ['его́', 'jɪˈvo'],
  ['сего́дня', 'sʲɪˈvodnʲə'],
  ['учи́ться', 'ʊˈt͡ɕit͡sə'],
  ['де́вушка', 'ˈdʲevʊʂkə'],
  ['язы́к', 'jɪˈzɨk'],
  ['пальто́', 'pɐlʲˈto'],
  ['жить', 'ʐɨtʲ'],
  ['щи', 'ɕːi'],
  ['ещё', 'jɪˈɕːo'],
  ['часы́', 't͡ɕɪˈsɨ'],
  ['здра́вствуйте', 'ˈzdrastvʊjtʲɪ'],
  ['по́ле', 'ˈpolʲɪ'],
  ['и́мя', 'ˈimʲə'],
  ['ска́зка', 'ˈskaskə'],
];

test('russo: palavras em IPA com redução de vogais, moles e sonoridade', () => {
  for (const [w, ipa] of cases) assert.equal(wordToIpaRu(w), ipa, w);
});

test('russo: frases, preposições coladas e palavras sem marca de tônica', () => {
  assert.equal(toIpaRu('Как дела́?'), '[kak dʲɪˈla]');
  assert.equal(toIpaRu('в Москве́'), '[vmɐˈskvʲe]');
  // sem marca de tônica, sem redução (não inventa a pronúncia)
  assert.equal(wordToIpaRu('рыба'), 'rɨba');
});
