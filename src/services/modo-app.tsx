import { useEffect, useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';

/**
 * O modo do app (pedido do dono, 17/10/2026): “Idiomas”, o LinuLingo de sempre, ou uma das áreas do
 * Perfil (Biologia, Psicologia…), que funcionam como apps próprios, cada uma com as abas dela. Fica
 * guardado no banco (meta `modo_app`), como a cor de destaque.
 */
export type ModoApp = 'idiomas' | 'biologia' | 'psicologia';
const MODOS: ModoApp[] = ['idiomas', 'biologia', 'psicologia'];
/** A primeira aba de cada modo, para onde o app vai ao trocar. */
export const PRIMEIRA_ABA = { idiomas: '/', biologia: '/biologia', psicologia: '/psicologia' } as const satisfies Record<ModoApp, string>;
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
      if (MODOS.includes(v as ModoApp)) {
        atual = v as ModoApp;
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
