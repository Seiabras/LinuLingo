import { useEffect, useSyncExternalStore, type ReactNode } from 'react';
import { View } from 'react-native';
import { vars } from 'nativewind';
import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';
import { useApp } from '@/services/app-state';
import { CORES_DESTAQUE, hexDaCor, variaveisDaCor, type CorDestaque, type TomDestaque } from '@/data/cores-destaque';

/**
 * A cor de destaque escolhida no Perfil (item 18 do PENDENTES.md), guardada no banco (meta
 * `cor_destaque`). `CorDestaqueRaiz` põe as variáveis de CSS na raiz do app, e todas as classes
 * `conecta` passam a usar a paleta escolhida.
 */
const META = 'cor_destaque';
let atual: CorDestaque = 'azul';
let carregou = false;
const ouvintes = new Set<() => void>();
const assinar = (o: () => void) => {
  ouvintes.add(o);
  return () => ouvintes.delete(o);
};
const avisar = () => ouvintes.forEach((o) => o());

export function useCorDestaque(): CorDestaque {
  return useSyncExternalStore(assinar, () => atual, () => atual);
}

/** O hex de um tom da cor de destaque atual (para ícones, que não usam classe). */
export function useHexDestaque(tom: TomDestaque = 600): string {
  return hexDaCor(useCorDestaque(), tom);
}

export async function salvarCorDestaque(db: SQLiteDatabase, id: CorDestaque) {
  atual = id;
  avisar();
  await setMeta(db, META, id);
}

export function CorDestaqueRaiz({ children }: { children: ReactNode }) {
  const { db } = useApp();
  const cor = useCorDestaque();
  useEffect(() => {
    if (carregou || !db) return;
    carregou = true;
    getMeta(db, META).then((v) => {
      if (v && CORES_DESTAQUE.some((c) => c.id === v)) {
        atual = v as CorDestaque;
        avisar();
      }
    });
  }, [db]);
  return <View style={[{ flex: 1 }, vars(variaveisDaCor(cor))]}>{children}</View>;
}
