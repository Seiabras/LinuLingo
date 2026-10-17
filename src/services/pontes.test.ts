import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import { cenarioDaPonte, leituraDaPonte, lerProgresso, marcarParte, palavrasDaPonte, partesFeitas, PONTE_PALAVRAS, PONTES, pontesDoIdioma, temPontes } from './pontes';
import { SUBLEVELS } from '@/types';
import { ultimoSubnivel } from '@/data/tetos';

test('todo idioma com B1.1 e teto acima do B1 tem as três pontes completas: palavras, conversa e leitura', () => {
  const comB1 = Object.values(PACKS).filter((p) => p.units.some((u) => u.level === 'B1.1'));
  const acimaDoB1 = comB1.filter((p) => SUBLEVELS.indexOf(ultimoSubnivel(p.code)) > SUBLEVELS.indexOf('B1.4'));
  assert.ok(acimaDoB1.length >= 15);
  for (const pack of acimaDoB1)
    for (const ponte of PONTES) {
      assert.equal(palavrasDaPonte(pack, ponte).length, PONTE_PALAVRAS, `${pack.code}/${ponte.id}: poucas palavras`);
      assert.ok(cenarioDaPonte(pack, ponte), `${pack.code}/${ponte.id}: sem conversa`);
      assert.ok(leituraDaPonte(pack, ponte), `${pack.code}/${ponte.id}: sem leitura`);
    }
  assert.equal(temPontes(PACKS.kay), false);
});

test('curso de teto B1 mostra só as pontes que tem completas (nada inventado para preencher)', () => {
  for (const pack of Object.values(PACKS))
    for (const ponte of pontesDoIdioma(pack)) {
      assert.equal(palavrasDaPonte(pack, ponte).length, PONTE_PALAVRAS, `${pack.code}/${ponte.id}`);
      assert.ok(cenarioDaPonte(pack, ponte) && leituraDaPonte(pack, ponte), `${pack.code}/${ponte.id}`);
    }
  // o aleúte (teto B1) não tem palavras de hotel, escritório nem ciência nas fontes
  assert.equal(temPontes(PACKS.ale), false);
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
