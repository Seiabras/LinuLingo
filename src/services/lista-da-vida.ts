import { useCallback, useEffect, useState } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';

/**
 * A lista da vida da Biologia (ideia do Seek, do iNaturalist): os bichos que o aluno já viu ao vivo,
 * marcados por ele mesmo. A chave é `a:<amigo>` para os amigos do Linu e `p:<país>:<nome>` para os
 * bichos do álbum. Fica na tabela Meta, como as outras preferências.
 */
const CHAVE = 'bio_vistos';

export function useListaDaVida(db: SQLiteDatabase | null) {
  const [vistos, setVistos] = useState<string[]>([]);
  useEffect(() => {
    if (!db) return;
    let vivo = true;
    void getMeta(db, CHAVE).then((v) => vivo && setVistos(v ? v.split('|').filter(Boolean) : []));
    return () => {
      vivo = false;
    };
  }, [db]);
  const alternar = useCallback(
    (k: string) => {
      setVistos((atual) => {
        const novo = atual.includes(k) ? atual.filter((x) => x !== k) : [...atual, k];
        if (db) void setMeta(db, CHAVE, novo.join('|'));
        return novo;
      });
    },
    [db],
  );
  return { vistos, alternar };
}

export interface Insignia {
  emoji: string;
  nome: string;
  como: string;
  tem: boolean;
}

/** As insígnias da lista da vida, calculadas só do que foi marcado. */
export function insignias(vistos: string[], classeDoAmigo: Record<string, string>): Insignia[] {
  const amigos = vistos.filter((k) => k.startsWith('a:')).map((k) => k.slice(2));
  const paises = new Set(vistos.filter((k) => k.startsWith('p:')).map((k) => k.split(':')[1]));
  const classes = new Set(amigos.map((a) => classeDoAmigo[a]));
  return [
    { emoji: '👀', nome: 'Primeiro avistamento', como: 'Marque um bicho que você viu ao vivo.', tem: vistos.length >= 1 },
    { emoji: '🔭', nome: 'Observador', como: 'Marque 5 bichos.', tem: vistos.length >= 5 },
    { emoji: '🎒', nome: 'Naturalista', como: 'Marque 15 bichos.', tem: vistos.length >= 15 },
    { emoji: '🧊', nome: 'Amigo do gelo', como: 'Marque um dos amigos do Linu.', tem: amigos.length >= 1 },
    { emoji: '🧬', nome: 'Três classes', como: 'Veja uma ave, um mamífero e um crustáceo entre os amigos do Linu.', tem: classes.size >= 3 },
    { emoji: '🗺️', nome: 'Viajante', como: 'Marque bichos de 3 países diferentes.', tem: paises.size >= 3 },
  ];
}
