import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import { cenarioDaPonte, leituraDaPonte, lerProgresso, marcarParte, palavrasDaPonte, partesFeitas, PONTE_PALAVRAS, PONTES, temPontes } from './pontes';

test('todo idioma com B1.1 tem as três pontes completas: palavras, conversa e leitura', () => {
  const comPontes = Object.values(PACKS).filter(temPontes);
  assert.ok(comPontes.length >= 15);
  for (const pack of comPontes)
    for (const ponte of PONTES) {
      assert.equal(palavrasDaPonte(pack, ponte).length, PONTE_PALAVRAS, `${pack.code}/${ponte.id}: poucas palavras`);
      assert.ok(cenarioDaPonte(pack, ponte), `${pack.code}/${ponte.id}: sem conversa`);
      assert.ok(leituraDaPonte(pack, ponte), `${pack.code}/${ponte.id}: sem leitura`);
    }
  assert.equal(temPontes(PACKS.kay), false);
});

test('o bônus da ponte sai uma vez só, quando as três partes ficam prontas', () => {
  let p = lerProgresso('não é json');
  let r = marcarParte(p, 'viagens', 'palavras');
  r = marcarParte(r.progresso, 'viagens', 'conversa');
  assert.equal(r.terminouAgora, false);
  r = marcarParte(r.progresso, 'viagens', 'leitura');
  assert.equal(r.terminouAgora, true);
  p = r.progresso;
  assert.equal(partesFeitas(p, 'viagens'), 3);
  assert.equal(marcarParte(p, 'viagens', 'leitura').terminouAgora, false);
});
