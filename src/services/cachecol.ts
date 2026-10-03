import { useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import type { LanguagePack, UnitSeed } from '@/data/types';
import type { CefrLevel, SubLevel } from '@/types';
import { completedLessons } from '@/database/queries';

/**
 * O cachecol do Linu: como a faixa de um dojô, a cor mostra o nível mais alto do CEFR conquistado
 * nas travessias do idioma estudado (a travessia é a prova no fim de cada unidade; ver travessia.ts).
 * Antes da primeira travessia, nada de cachecol. Seis cores bem diferentes entre si e legíveis sobre
 * o corpo escuro e a barriga branca do Linu, da mais clara à mais forte, como as faixas: amarelo,
 * laranja, verde, azul, roxo e, no topo, vermelho (a faixa vermelha é a mais alta do judô; a preta
 * sumiria no corpo do Linu).
 *
 * O cachecol fica POR BAIXO da roupa do corpo (src/data/roupas-linu.ts, lugar 'corpo'): um suéter
 * deixa só a gola do cachecol aparecendo, e roupas pequenas (faixa na cintura, mărțișor) deixam ver
 * o cachecol inteiro. Assim as duas coisas nunca brigam pelo mesmo lugar.
 */
export const NIVEIS_CEFR: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export interface CorCachecol {
  /** «amarelo», para a frase «Cachecol amarelo» */
  nome: string;
  /** claro, meio e escuro (brilho, cor e sombra do tecido) */
  cores: [string, string, string];
}

export const CORES_CACHECOL: Record<CefrLevel, CorCachecol> = {
  A1: { nome: 'amarelo', cores: ['#FEF08A', '#FACC15', '#A16207'] },
  A2: { nome: 'laranja', cores: ['#FDBA74', '#F97316', '#9A3412'] },
  B1: { nome: 'verde', cores: ['#86EFAC', '#16A34A', '#14532D'] },
  B2: { nome: 'azul', cores: ['#93C5FD', '#2563EB', '#1E3A8A'] },
  C1: { nome: 'roxo', cores: ['#C4B5FD', '#7C3AED', '#4C1D95'] },
  C2: { nome: 'vermelho', cores: ['#FCA5A5', '#DC2626', '#7F1D1D'] },
};

export interface Cachecol {
  cefr: CefrLevel;
  /** o subnível da travessia mais alta vencida (B1.2…) */
  level: SubLevel;
}

/**
 * O cachecol pelo progresso: o nível CEFR mais alto entre as unidades cuja prova (a travessia) já
 * está feita — o mesmo critério do mapa da aventura (a travessia vale como feita quando a prova está
 * em Lesson_Progress: só se grava ao passar com 80%, na travessia ou no teste para pular).
 */
export function cachecolDoProgresso(units: readonly Pick<UnitSeed, 'level' | 'cefr' | 'lessons'>[], done: ReadonlyMap<string, number>): Cachecol | null {
  let best: Cachecol | null = null;
  for (const u of units) {
    if (!u.lessons.some((l) => l.kind === 'prova' && done.has(l.id))) continue;
    if (!best || NIVEIS_CEFR.indexOf(u.cefr) >= NIVEIS_CEFR.indexOf(best.cefr)) best = { cefr: u.cefr, level: u.level };
  }
  return best;
}

/** O próximo nível de cachecol (null depois do C2). */
export function proximoCachecol(c: Cachecol | null): CefrLevel | null {
  return NIVEIS_CEFR[c ? NIVEIS_CEFR.indexOf(c.cefr) + 1 : 0] ?? null;
}

/** A frase da ficha: «Cachecol verde: chegou ao B1 · próximo: azul (B2)». */
export function fraseDoCachecol(c: Cachecol | null): string {
  if (!c) return `Sem cachecol ainda: vença a primeira travessia para ganhar o ${CORES_CACHECOL.A1.nome} (A1).`;
  const prox = proximoCachecol(c);
  return `Cachecol ${CORES_CACHECOL[c.cefr].nome}: chegou ao ${c.cefr}${prox ? ` · próximo: ${CORES_CACHECOL[prox].nome} (${prox})` : ' · o mais alto de todos!'}`;
}

// ---------- o cachecol de agora, lido por todos os Linus da tela (como a cor e a roupa) ----------

let current: Cachecol | null = null;
const listeners = new Set<() => void>();

export function setCurrentCachecol(c: Cachecol | null) {
  if (current?.cefr === c?.cefr && current?.level === c?.level) return;
  current = c;
  listeners.forEach((l) => l());
}

export function useCachecol(): Cachecol | null {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => current,
    () => current,
  );
}

/** Recalcula o cachecol do idioma estudado (ao abrir o app, trocar de idioma ou depois de uma travessia). */
export async function loadCachecol(db: SQLiteDatabase, pack: Pick<LanguagePack, 'units'>): Promise<Cachecol | null> {
  const c = cachecolDoProgresso(pack.units, await completedLessons(db));
  setCurrentCachecol(c);
  return c;
}
