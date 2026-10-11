import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { possuidos } from '@/data/loja-jogos';
import { useApp } from '@/services/app-state';
import * as haptics from '@/services/haptics';
import { comprarItemJogo, krillForPacote, loadComprasJogos } from '@/services/linu-outfit';

/**
 * O que já foi comprado na loja dos jogos e o krill que sobra, num lugar só (o painel de
 * personalização, a loja e os tabuleiros leem daqui e se atualizam juntos depois de uma compra).
 */
interface Estado {
  compras: string[];
  tem: Set<string>;
  krill: number;
}

let atual: Estado = { compras: [], tem: new Set(), krill: 0 };
const ouvintes = new Set<() => void>();
const avisar = () => ouvintes.forEach((o) => o());

export function useLojaJogos() {
  const { db, user, refresh } = useApp();
  const xp = user?.total_xp ?? 0;
  const estado = useSyncExternalStore(
    (o) => {
      ouvintes.add(o);
      return () => ouvintes.delete(o);
    },
    () => atual,
    () => atual,
  );

  const recarregar = useCallback(async () => {
    if (!db) return;
    const [c, k] = await Promise.all([loadComprasJogos(db), krillForPacote(db, xp)]);
    const ids = c.map((x) => x.id);
    atual = { compras: ids, tem: possuidos(ids), krill: k };
    avisar();
  }, [db, xp]);

  useEffect(() => {
    void recarregar();
  }, [recarregar]);

  const comprar = useCallback(
    async (id: string) => {
      if (!db) return false;
      const ok = await comprarItemJogo(db, id, xp);
      if (ok) haptics.success();
      await recarregar();
      refresh();
      return !!ok;
    },
    [db, xp, recarregar, refresh],
  );

  return { ...estado, comprar };
}
