import { test } from 'node:test';
import assert from 'node:assert/strict';
import type { SQLiteDatabase } from 'expo-sqlite';
import { comFila } from './fila';

/**
 * Um banco de mentira que imita o expo-sqlite no navegador: cada comando leva várias idas e voltas
 * (preparar, executar, finalizar) e conta quantos estão no meio do caminho ao mesmo tempo.
 */
function bancoLento() {
  let abertos = 0;
  let maximo = 0;
  const log: string[] = [];
  const passo = () => new Promise((r) => setTimeout(r, 1));
  const comando = async (sql: string) => {
    abertos++;
    maximo = Math.max(maximo, abertos);
    await passo();
    await passo();
    if (sql === 'FALHA') {
      abertos--;
      throw new Error('falhou');
    }
    await passo();
    log.push(sql);
    abertos--;
    return sql;
  };
  const db = {
    runAsync: comando,
    getFirstAsync: comando,
    getAllAsync: comando,
    execAsync: comando,
    async withTransactionAsync(tarefa: () => Promise<void>) {
      await this.execAsync('BEGIN');
      await tarefa();
      await this.execAsync('COMMIT');
    },
    nome: 'teste',
  };
  return { db: db as unknown as SQLiteDatabase, log, maximo: () => maximo };
}

test('sem a fila, dois comandos disparados juntos se intercalam (o caso da vitória)', async () => {
  const b = bancoLento();
  await Promise.all([b.db.runAsync('a'), b.db.getFirstAsync('b')]);
  assert.equal(b.maximo(), 2);
});

test('com a fila, um comando de cada vez, na ordem em que foram pedidos', async () => {
  const b = bancoLento();
  const db = comFila(b.db);
  await Promise.all([db.getFirstAsync('ler tema'), db.runAsync('gravar tema'), db.getFirstAsync('ler xp'), db.runAsync('gravar xp'), db.getAllAsync('log')]);
  assert.equal(b.maximo(), 1);
  assert.deepEqual(b.log, ['ler tema', 'gravar tema', 'ler xp', 'gravar xp', 'log']);
});

test('um erro chega a quem pediu e não trava a fila', async () => {
  const b = bancoLento();
  const db = comFila(b.db);
  const [falha, depois] = await Promise.allSettled([db.runAsync('FALHA'), db.runAsync('depois')]);
  assert.equal(falha.status, 'rejected');
  assert.deepEqual(depois, { status: 'fulfilled', value: 'depois' });
});

test('a transação segura a fila do BEGIN ao COMMIT, e os comandos de dentro não esperam a si mesmos', async () => {
  const b = bancoLento();
  const db = comFila(b.db);
  await Promise.all([
    db.withTransactionAsync(async () => {
      await db.runAsync('dentro 1');
      await db.runAsync('dentro 2');
    }),
    db.runAsync('fora'),
  ]);
  assert.equal(b.maximo(), 1);
  assert.deepEqual(b.log, ['BEGIN', 'dentro 1', 'dentro 2', 'COMMIT', 'fora']);
});

test('o resto da API passa direto', () => {
  const b = bancoLento();
  assert.equal((comFila(b.db) as unknown as { nome: string }).nome, 'teste');
});
