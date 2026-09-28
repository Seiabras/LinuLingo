/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kanaToIpa, kanaToRomaji, toHiragana, toKatakana } from './ipa-ja';

// [kana com a pronúncia (ー = vogal longa), IPA, romaji Hepburn]
const cases: [string, string, string][] = [
  ['トーキョー', 'toːkʲoː', 'tōkyō'],
  ['すし', 'sɯ̥ɕi', 'sushi'],
  ['がっこー', 'gakkoː', 'gakkō'],
  ['きっぷ', 'kʲi̥ppɯ', 'kippu'],
  ['かんじ', 'kaɲd͡ʑi', 'kanji'],
  ['しんぶん', 'ɕimbɯɴ', 'shinbun'],
  ['えんぴつ', 'empʲi̥t͡sɯ', 'enpitsu'],
  ['きんよーび', 'kʲiɰ̃joːbʲi', "kin'yōbi"],
  ['ちょっと', 't͡ɕotto', 'chotto'],
  ['ふじさん', 'ɸɯʑisaɴ', 'fujisan'],
  ['りょこー', 'ɾʲokoː', 'ryokō'],
  ['ティー', 'tiː', 'tī'],
  ['さんぽ', 'sampo', 'sanpo'],
  ['でんわ', 'deɰ̃ɰa', 'denwa'],
];

test('japonês: kana em IPA (Tóquio) e em romaji Hepburn', () => {
  for (const [k, ipa, rom] of cases) {
    assert.equal(kanaToIpa(k), ipa, k);
    assert.equal(kanaToRomaji(k), rom, k);
  }
});

test('japonês: です e ます com u surdo; partículas pela pronúncia', () => {
  assert.equal(kanaToIpa('ワタシワ ガクセーデス。'), 'ɰataɕiɰa gakɯ̥seːdesɯ̥');
  assert.equal(kanaToRomaji('ワタシワ ガクセーデス。'), 'watashiwa gakusēdesu');
});

test('japonês: hiragana ↔ katakana', () => {
  assert.equal(toHiragana('カタカナ'), 'かたかな');
  assert.equal(toKatakana('ひらがな'), 'ヒラガナ');
});
