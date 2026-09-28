/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaKo, toRomanKo, wordToIpaKo, wordToRomanKo } from './ipa-ko';

// [hangul, IPA, romanização revisada]
const cases: [string, string, string][] = [
  ['안녕하세요', 'annjʌŋɦasejo', 'annyeonghaseyo'],
  ['감사합니다', 'kamsaɦamnida', 'gamsahamnida'],
  ['학교', 'hak̚k͈jo', 'hakgyo'],
  ['음악', 'ɯmak̚', 'eumak'],
  ['좋아요', 't͡ɕoajo', 'joayo'],
  ['좋다', 't͡ɕotʰa', 'jota'],
  ['같이', 'kat͡ɕʰi', 'gachi'],
  ['신라', 'ɕilla', 'silla'],
  ['국립', 'kuŋnip̚', 'gungnip'],
  ['독립문', 'toŋnimmun', 'dongnimmun'],
  ['종로', 't͡ɕoŋno', 'jongno'],
  ['한국어', 'hanɡuɡʌ', 'hangugeo'],
  ['읽어요', 'ilɡʌjo', 'ilgeoyo'],
  ['없어요', 'ʌp̚s͈ʌjo', 'eopseoyo'],
  ['맛있어요', 'maɕis͈ʌjo', 'masisseoyo'],
  ['괜찮아요', 'kwɛnt͡ɕʰanajo', 'gwaenchanayo'],
  ['의사', 'ɰisa', 'uisa'],
  ['희망', 'himaŋ', 'huimang'],
  ['닭', 'tak̚', 'dak'],
  ['김치', 'kimt͡ɕʰi', 'gimchi'],
  ['맛없어요', 'madʌp̚s͈ʌjo', 'madeopseoyo'],
  ['읽고', 'ilk͈o', 'ilgo'],
  ['앉다', 'ant͈a', 'anda'],
];

test('coreano: regras de pronúncia na IPA e na romanização revisada', () => {
  for (const [w, ipa, rr] of cases) {
    assert.equal(wordToIpaKo(w), ipa, w);
    assert.equal(wordToRomanKo(w), rr, w);
  }
});

test('coreano: frases palavra por palavra, pontuação fora', () => {
  assert.equal(toIpaKo('안녕하세요? 저는 리누예요.'), '[annjʌŋɦasejo t͡ɕʌnɯn ɾinujejo]');
  assert.equal(toRomanKo('서울, 부산!'), 'seoul, busan!');
  assert.equal(toIpaKo('!!!'), '');
});
