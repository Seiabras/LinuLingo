import type { SQLiteDatabase } from 'expo-sqlite';

/**
 * Os comandos assíncronos do banco, um de cada vez.
 *
 * No expo-sqlite, cada `runAsync`/`getFirstAsync`/`getAllAsync` são três idas e voltas (preparar,
 * executar, finalizar) e nada impede que dois comandos disparados juntos se intercalem na mesma
 * conexão. A doc da versão do projeto (SDK 57, `withTransactionAsync`) avisa: “This transaction is
 * not exclusive and can be interrupted by other async queries”; e a saída que ela indica,
 * `withExclusiveTransactionAsync`, “is not supported on web”. No navegador, um comando que falha no
 * meio dessa intercalação aparece só como “Error finalizing statement”: o `finally` do expo-sqlite
 * finaliza o comando e o erro da finalização encobre o primeiro.
 *
 * O caso visto (16/10/2026): numa vitória, `useXpDeVitoria` dispara `registrarVitoriaComTema` e
 * `awardXp` ao mesmo tempo. Em vez de remendar cada lugar, a conexão que o app inteiro usa (a de
 * `useApp`) passa por esta fila: cada comando espera o anterior terminar.
 *
 * A transação segura a fila do BEGIN ao COMMIT. Os comandos de dentro dela (que usam este mesmo
 * objeto) passam direto enquanto ela dura, senão esperariam a si mesmos. Os comandos síncronos e o
 * resto da API passam direto: eles não se intercalam.
 */
const NA_FILA = new Set(['execAsync', 'runAsync', 'getFirstAsync', 'getAllAsync']);

export function comFila(db: SQLiteDatabase): SQLiteDatabase {
  let fila: Promise<unknown> = Promise.resolve();
  let emTransacao = 0;
  const enfileirar = <T>(tarefa: () => Promise<T>): Promise<T> => {
    const p = fila.then(tarefa, tarefa);
    // um erro devolve-se a quem chamou, mas não trava os próximos
    fila = p.catch(() => undefined);
    return p;
  };
  return new Proxy(db, {
    get(alvo, chave) {
      const valor: unknown = Reflect.get(alvo, chave, alvo);
      if (typeof valor !== 'function') return valor;
      const metodo = valor as (...a: unknown[]) => Promise<unknown>;
      if (chave === 'withTransactionAsync')
        return (tarefa: () => Promise<void>) =>
          enfileirar(async () => {
            emTransacao++;
            try {
              return await metodo.call(alvo, tarefa);
            } finally {
              emTransacao--;
            }
          });
      if (typeof chave === 'string' && NA_FILA.has(chave))
        return (...args: unknown[]) => (emTransacao > 0 ? metodo.apply(alvo, args) : enfileirar(() => metodo.apply(alvo, args)));
      return metodo.bind(alvo);
    },
  });
}
