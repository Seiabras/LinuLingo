import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import { alfabetoAutomatico, alfabetoLatinoExtra } from './alfabeto-auto';

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
      assert.ok(l.example, `${p.code}: ${l.letter} sem exemplo`);
      assert.ok(l.example![0].toLocaleLowerCase(p.speechLocale).startsWith(min), `${p.code}: ${l.example![0]} não começa com ${min}`);
      assert.ok(p.vocab.some((v) => v.word_target === l.example![0]), `${p.code}: ${l.example![0]} fora do vocabulário`);
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

test('alfabeto latino: letra extra de verdade (não acento) com exemplo real do vocabulário', () => {
  // o romeno já ganhou o alfabeto oficial completo (ver teste dedicado abaixo) — estes continuam só
  // com as letras extras por ora (sem fonte ainda checada pro resto do alfabeto deles, PENDENTES.md)
  const comLetraExtra = ['sv', 'nb', 'da', 'et'] as const;
  for (const code of comLetraExtra) {
    const a = alfabetoAutomatico(PACKS[code]);
    assert.ok(a, `${code}: devia ter alfabeto com letra extra`);
    assert.ok(a!.letters.length >= 3, `${code}: poucas letras extras pro jogo de múltipla escolha`);
    for (const l of a!.letters) {
      assert.equal(l.group, 'nova');
      assert.ok(l.ipa, `${code}: ${l.letter} sem IPA`);
      assert.ok(l.sound, `${code}: ${l.letter} sem explicação do som`);
      assert.ok(l.example, `${code}: ${l.letter} sem exemplo`);
      assert.ok(
        PACKS[code].vocab.some((v) => v.word_target === l.example![0]),
        `${code}: ${l.example![0]} fora do vocabulário`,
      );
    }
  }
  // espanhol só tem o ñ (1 letra extra), islandês só þ/ð (2) — ficam de fora por não dar pra
  // montar múltipla escolha com menos de 3 opções (nenhum dos dois tem alfabeto base verificado ainda)
  assert.equal(alfabetoAutomatico(PACKS.es), null);
  assert.equal(alfabetoAutomatico(PACKS.is), null);
});

test('alfabeto do romeno: as 31 letras oficiais, K/Q/W/Y só em palavras internacionais', () => {
  const a = alfabetoAutomatico(PACKS.ro)!;
  assert.equal(a.letters.length, 31, 'o alfabeto romeno oficial tem 31 letras');

  const porLetra = new Map(a.letters.map((l) => [l.letter.split(' ').at(-1)!, l]));
  // as 5 já cadastradas como 'nova' continuam lá
  for (const l of ['ă', 'â', 'î', 'ș', 'ț']) assert.equal(porLetra.get(l)?.group, 'nova', `${l} devia ser 'nova'`);
  // K, Q, W, Y: a Wikipédia (en.wikipedia.org/wiki/Romanian_alphabet) diz que só aparecem em
  // palavras estrangeiras/nomes próprios — nunca em palavra nativa romena
  for (const l of ['k', 'q', 'w', 'y']) assert.equal(porLetra.get(l)?.group, 'internacional', `${l} devia ser 'internacional'`);
  // X tem IPA própria (/ks/, /ɡz/) e dezenas de palavras comuns no vocabulário (taxi, examen...):
  // não é letra só-internacional, mesmo sendo rara nas outras línguas latinas com essa marca
  assert.equal(porLetra.get('x')?.group, 'igual');
  // as outras 20 (26 - 5 nova - 4 k/q/w/y - x, já checado) são 'igual' ou 'falsa' (h e r soam
  // diferente do nosso h mudo e do nosso r gutural — mesmo critério já usado no esperanto)
  for (const l of ['h', 'r']) assert.equal(porLetra.get(l)?.group, 'falsa', `${l} devia ser 'falsa'`);
  const igual = 'abcdefgijlmnopstuvz'.split('');
  for (const l of igual) assert.equal(porLetra.get(l)?.group, 'igual', `${l} devia ser 'igual'`);

  // toda letra tem IPA, som explicado e (exemplo real do vocabulário OU, nas internacionais sem
  // palavra cadastrada ainda, nenhum exemplo — nunca um inventado)
  for (const l of a.letters) {
    assert.ok(l.ipa, `${l.letter} sem IPA`);
    assert.ok(l.sound, `${l.letter} sem explicação do som`);
    if (l.example) {
      assert.ok(
        PACKS.ro.vocab.some((v) => v.word_target === l.example![0]),
        `${l.letter}: ${l.example![0]} fora do vocabulário`,
      );
    } else {
      assert.equal(l.group, 'internacional', `${l.letter}: só a letra internacional pode ficar sem exemplo`);
    }
  }
  // Q é a única sem exemplo — nenhuma palavra do vocabulário ainda cadastrada com ela
  assert.equal(porLetra.get('q')?.example, undefined);
  // o jogo de leitura (igual ao dos idiomas de outra escrita) também passou a existir
  assert.ok(a.readingWords.length > 0);
  // o tour (tour.ts) usa alfabetoLatinoExtra sozinho pra saber se é "escrita diferente" ou só
  // "falta uma letra": continua valendo com as 5 letras extras, mesmo agora que o alfabeto
  // completo existe por cima dele
  const soExtra = alfabetoLatinoExtra(PACKS.ro);
  assert.equal(soExtra?.letters.length, 5);
  assert.ok(soExtra!.letters.every((l) => l.group === 'nova'));
});
