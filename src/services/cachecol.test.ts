import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { ensurePack, initDatabase } from '@/database/db';
import { getMeta, reviewWord } from '@/database/queries';
import { ROMENO } from '@/data/ro';
import {
  cachecolDoVocabulario,
  CORDAS,
  faltamParaProxima,
  fraseDoCachecol,
  loadCachecol,
  palavrasParaCorda,
  setUsarCachecol,
  tintasDaCorda,
  USAR_CACHECOL_KEY,
} from './cachecol';

test('cachecol: as 22 cordas da capoeira, da Cinza à Branca, na ordem do Matheus', () => {
  assert.equal(CORDAS.length, 22);
  assert.equal(CORDAS[0].nome, 'Cinza');
  assert.equal(CORDAS[9].titulo, 'Monitor');
  assert.equal(CORDAS[10].nome, 'Azul');
  assert.equal(CORDAS[21].nome, 'Branca');
  assert.equal(CORDAS[21].titulo, 'Mestre');
  assert.equal(new Set(CORDAS.map((c) => c.nome)).size, 22);
  // as de duas cores trazem as duas tintas, e a segunda é a das listras
  assert.equal(CORDAS.filter((c) => c.nome.includes('/')).every((c) => c.cores.length === 2), true);
  const t = tintasDaCorda(1);
  assert.equal(t.duas, true);
  assert.deepEqual(t.base, CORDAS[0].cores[0]);
  assert.deepEqual(t.listra, CORDAS[2].cores[0]);
});

test('cachecol: cortes proporcionais ao vocabulário real do idioma', () => {
  assert.equal(palavrasParaCorda(0, 4162), 0);
  assert.equal(palavrasParaCorda(21, 4162), 4162);
  assert.equal(palavrasParaCorda(21, 47), 47);
  // começa na Cinza, com zero palavras
  assert.equal(cachecolDoVocabulario(0, 4162).corda, 0);
  assert.equal(cachecolDoVocabulario(0, 0).corda, 0);
  // a Branca só com o vocabulário inteiro
  assert.equal(cachecolDoVocabulario(4161, 4162).corda, 20);
  assert.equal(cachecolDoVocabulario(4162, 4162).corda, 21);
  // o mesmo progresso relativo dá a mesma corda num idioma pequeno e num grande
  assert.equal(cachecolDoVocabulario(2081, 4162).corda, cachecolDoVocabulario(24, 48).corda);
  // as cordas nunca descem quando se aprende mais
  for (const total of [47, 90, 4162]) {
    let antes = 0;
    for (let n = 0; n <= total; n++) {
      const c = cachecolDoVocabulario(n, total).corda;
      assert.ok(c >= antes);
      antes = c;
    }
  }
});

test('cachecol: a frase diz a corda, a contagem e quanto falta', () => {
  const c = cachecolDoVocabulario(0, 4162);
  assert.equal(faltamParaProxima(c), 199);
  assert.equal(fraseDoCachecol(c), 'Cachecol Cinza: 0 de 4.162 palavras · próximo: Cinza/Amarela, faltam 199 palavras');
  const b = cachecolDoVocabulario(4162, 4162);
  assert.equal(faltamParaProxima(b), null);
  assert.match(fraseDoCachecol(b), /Branca \(Mestre\).*mais alto/);
});

test('cachecol: lido do banco, com o total do pacote', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await ensurePack(db, 'ro');
  assert.deepEqual(await loadCachecol(db, ROMENO), { corda: 0, aprendidas: 0, total: ROMENO.vocab.length });
  const corte = palavrasParaCorda(1, ROMENO.vocab.length);
  for (const v of ROMENO.vocab.slice(0, corte)) await reviewWord(db, v.id, 4);
  assert.deepEqual(await loadCachecol(db, ROMENO), { corda: 1, aprendidas: corte, total: ROMENO.vocab.length });
});

test('cachecol: guardar o cachecol fica salvo e não apaga a conquista', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await setUsarCachecol(db, false);
  assert.equal(await getMeta(db, USAR_CACHECOL_KEY), '0');
  assert.equal((await loadCachecol(db, ROMENO)).corda, 0);
  await setUsarCachecol(db, true);
  assert.equal(await getMeta(db, USAR_CACHECOL_KEY), '1');
});
