import { useEffect, useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';

/**
 * O modo do app (pedido do dono, 17/10/2026): “Idiomas”, o LinuLingo de sempre, ou “Biologia”, uma
 * área que funciona como um app próprio, com as abas dela (Trilha, Seres vivos, Laboratório). Fica
 * guardado no banco (meta `modo_app`), como a cor de destaque.
 */
export type ModoApp = 'idiomas' | 'biologia';
const META = 'modo_app';
let atual: ModoApp = 'idiomas';
let carregou = false;
const ouvintes = new Set<() => void>();
const assinar = (o: () => void) => {
  ouvintes.add(o);
  return () => ouvintes.delete(o);
};
const avisar = () => ouvintes.forEach((o) => o());

export function useModoApp(): ModoApp {
  const { db } = useApp();
  useEffect(() => {
    if (carregou || !db) return;
    carregou = true;
    getMeta(db, META).then((v) => {
      if (v === 'biologia' || v === 'idiomas') {
        atual = v;
        avisar();
      }
    });
  }, [db]);
  return useSyncExternalStore(assinar, () => atual, () => atual);
}

export async function salvarModoApp(db: SQLiteDatabase, modo: ModoApp) {
  atual = modo;
  avisar();
  await setMeta(db, META, modo);
}
