import { test } from 'node:test';
import assert from 'node:assert/strict';
import { manchuFromLatin, toReadingManchu, toReadingMongolScript, typedManchu, typedMongolScript } from './reading-mongol-script';

test('mongol tradicional: a mesma transliteração dos verbetes do Wiktionary', () => {
  // pares conferidos um a um nas páginas do Wiktionary (Module:Mong-translit)
  const pares: [string, string][] = [
    ['ᠮᠣᠷᠢ', 'mori'],
    ['ᠪᠠᠢᠨ᠎ᠠ', 'bayin-a'],
    ['ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ', 'bayarlaluɣ-a'],
    ['ᠬᠠᠮᠢᠭ᠎ᠠ', 'qamiɣ-a'],
    ['ᠢᠮᠠᠭ᠎ᠠ', 'imaɣ-a'],
    ['ᠰᠢᠨ᠎ᠡ', 'sin-e'],
    ['ᠮᠢᠬ᠎ᠠ', 'miq-a'],
    ['ᠲᠠᠨ ᠤ', 'tan-u'],
    ['ᠭᠡᠷ', 'ger'],
    ['ᠮᠣᠩᠭᠣᠯ', 'mongɣol'],
  ];
  for (const [mong, latin] of pares) assert.equal(toReadingMongolScript(mong), latin, mong);
  // ᠢ: “yi” só entre vogal e consoante; no fim da palavra é “i” (ᠴᠠᠢ, chá; ᠨᠣᠬᠠᠢ, cão)
  assert.equal(toReadingMongolScript('ᠴᠠᠢ'), 'čai');
  assert.equal(toReadingMongolScript('ᠨᠣᠬᠠᠢ'), 'noqai');
  assert.equal(toReadingMongolScript('ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?'), 'sayin bayin-a uu?');
  // texto sem escrita mongol não tem leitura
  assert.equal(toReadingMongolScript('Сайн байна уу?'), '');
});

test('manchu: romanização de Möllendorff, nos dois sentidos (lista Swadesh do Wiktionary)', () => {
  const pares: [string, string][] = [
    ['ᠮᡠᡴᡝ', 'muke'],
    ['ᡳᠨᡩᠠᡥᡡᠨ', 'indahūn'],
    ['ᡧᡠᠨ', 'šun'],
    ['ᠨᡳᠮᠠᠩᡤᡳ', 'nimanggi'],
    ['ᠵᡠᠸᡝ', 'juwe'],
    ['ᠠᡨᠠᠩᡤᡳ', 'atanggi'],
    ['ᡤᡳᡵᠠᠩᡤᡳ', 'giranggi'],
    ['ᡶᡠᠨᡳᠶᡝᡥᡝ', 'funiyehe'],
  ];
  for (const [manchu, latin] of pares) {
    assert.equal(toReadingManchu(manchu), latin, manchu);
    assert.equal(manchuFromLatin(latin), manchu, latin);
  }
  // os seletores de variante não têm som (ᡶ᠋ᡠᠯᡤᡳᠶᠠᠨ, fulgiyan, “vermelho”, como no Wiktionary)
  assert.equal(toReadingManchu('ᡶ᠋ᡠᠯᡤᡳᠶᠠᠨ'), 'fulgiyan');
  assert.equal(toReadingManchu('ᠰᠠᡳ᠌ᠨ ᠪᠠᠨᡳᡥᠠ᠉'), 'sain baniha.');
});

test('resposta digitada: a romanização vale pela palavra na escrita', () => {
  assert.equal(typedMongolScript('ᠢᠮᠠᠭ᠎ᠠ'), typedMongolScript('imag-a'));
  assert.equal(typedMongolScript('ᠮᠣᠷᠢ'), 'mori');
  assert.equal(typedManchu('ᠮᠣᡵᡳᠨ'), typedManchu('morin'));
});
