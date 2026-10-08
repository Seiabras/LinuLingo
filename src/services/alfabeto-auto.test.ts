import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import { alfabetoAutomatico } from './alfabeto-auto';

test('alfabeto gerado: cada letra tem som e uma palavra do vocabulário que começa com ela', () => {
  let n = 0;
  for (const p of Object.values(PACKS)) {
    if (p.alphabet || !p.keyboardRows || !p.reading) continue;
    const a = alfabetoAutomatico(p);
    if (!a) continue;
    n++;
    for (const l of a.letters) {
      const min = l.letter.split(' ').at(-1)!;
      assert.ok(l.short && l.short !== min, `${p.code}: ${l.letter} sem som`);
      assert.ok(l.example[0].toLocaleLowerCase(p.speechLocale).startsWith(min), `${p.code}: ${l.example[0]} não começa com ${min}`);
      assert.ok(p.vocab.some((v) => v.word_target === l.example[0]), `${p.code}: ${l.example[0]} fora do vocabulário`);
    }
  }
  assert.ok(n >= 15, `só ${n} idiomas com alfabeto gerado`);
});

test('alfabeto árabe: letras conectáveis têm as 4 formas, as 6 que não conectam adiante só têm isolada/final', () => {
  const a = alfabetoAutomatico(PACKS.ar)!;
  const conecta = a.letters.find((l) => l.letter === 'ب'); // conecta dos dois lados
  assert.ok(conecta?.joining?.initial && conecta.joining.medial && conecta.joining.final);
  const naoConecta = a.letters.find((l) => l.letter === 'د' || l.letter === 'ا' || l.letter === 'ر');
  if (naoConecta) {
    assert.equal(naoConecta.joining?.initial, undefined);
    assert.equal(naoConecta.joining?.medial, undefined);
    assert.ok(naoConecta.joining?.final);
  }
  // idiomas de outra escrita (não-árabe) não ganham `joining`
  assert.ok(alfabetoAutomatico(PACKS.uk)!.letters.every((l) => l.joining === undefined));
});

test('alfabeto gerado: letras com cara de latina viram iguais ou falsas amigas', () => {
  const uk = alfabetoAutomatico(PACKS.uk)!;
  assert.equal(uk.letters.find((l) => l.letter === 'Н н')?.group, 'falsa');
  assert.equal(uk.letters.find((l) => l.letter === 'К к')?.group, 'igual');
  // georgiano: sem a maiúscula mtavruli, que não se usa no texto comum
  assert.ok(alfabetoAutomatico(PACKS.ka)!.letters.every((l) => !l.letter.includes(' ')));
  // o russo continua com o alfabeto feito à mão
  assert.equal(alfabetoAutomatico(PACKS.ru), PACKS.ru.alphabet);
});
