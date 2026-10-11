import { useEffect, useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';

/**
 * Os amigos do Linu que o aluno já achou (pedido do dono, 11/10/2026): cada amigo fica escondido
 * numa tela do app e, achado, passa a aparecer inteiro na página dos amigos. Fica em Meta
 * (`amigos_achados`, ids separados por vírgula), num armazenamento pequeno fora do React para todas
 * as telas saberem na hora.
 */
export const AMIGOS_ACHADOS_KEY = 'amigos_achados';

let achados: string[] = [];
let carregado = false;
const ouvintes = new Set<() => void>();
const avisar = () => ouvintes.forEach((o) => o());

export async function carregarAchados(db: SQLiteDatabase): Promise<void> {
  achados = ((await getMeta(db, AMIGOS_ACHADOS_KEY)) ?? '').split(',').filter(Boolean);
  carregado = true;
  avisar();
}

export async function marcarAchado(db: SQLiteDatabase, id: string): Promise<void> {
  if (achados.includes(id)) return;
  achados = [...achados, id];
  avisar();
  await setMeta(db, AMIGOS_ACHADOS_KEY, achados.join(','));
}

/** Os ids dos amigos achados (e se a lista já foi lida do banco). */
export function useAmigosAchados(db: SQLiteDatabase | null): { achados: string[]; carregado: boolean } {
  const lista = useSyncExternalStore(
    (o) => {
      ouvintes.add(o);
      return () => ouvintes.delete(o);
    },
    () => achados,
    () => achados,
  );
  useEffect(() => {
    if (db && !carregado) void carregarAchados(db);
  }, [db]);
  return { achados: lista, carregado };
}

/** Depois de apagar o progresso: volta a não ter ninguém achado. */
export function zerarAchados() {
  achados = [];
  avisar();
}
