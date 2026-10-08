import { useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import type { LanguagePack } from '@/data/types';
import { vocabStats } from '@/database/queries';

/**
 * O cachecol do Linu: a cor mostra quantas palavras do idioma estudado o aluno já aprendeu, nas 22
 * cordas de graduação adulta da capoeira (pedido do Matheus, 08/10/2026 — a ordem e os nomes são os
 * dele, não inventar outros): começa na Cinza e termina na Branca, a do Mestre (o branco é o ÚLTIMO).
 *
 * Os cortes são PROPORCIONAIS ao vocabulário real de cada idioma (de ~50 palavras nos pacotes só com
 * o A1 até 4.000+ nos completos): a corda i (0 a 21) vem com ceil(total × i ÷ 21) palavras
 * aprendidas. Assim a Cinza é a do começo (0 palavras), cada corda pede 1/21 do vocabulário a mais e a
 * Branca só vem com TODAS as palavras do idioma. “Aprendida” é o mesmo critério do Cofre: a palavra
 * já entrou na revisão espaçada (tem estado no SRS).
 *
 * As cordas de duas cores (Cinza/Amarela…) são tricotadas com a segunda cor nas listras e no nó.
 * O cachecol fica POR BAIXO da roupa do corpo (src/data/roupas-linu.ts, lugar 'corpo'): um suéter
 * deixa só a gola aparecendo, e roupas pequenas deixam ver o cachecol inteiro.
 */

/** claro, meio e escuro (brilho, cor e sombra do tecido) */
export type Tinta = [string, string, string];

const T = {
  cinza: ['#E2E8F0', '#94A3B8', '#475569'],
  amarela: ['#FEF08A', '#FACC15', '#A16207'],
  laranja: ['#FDBA74', '#F97316', '#9A3412'],
  verde: ['#86EFAC', '#16A34A', '#14532D'],
  vermelha: ['#FCA5A5', '#DC2626', '#7F1D1D'],
  azul: ['#93C5FD', '#2563EB', '#1E3A8A'],
  roxa: ['#C4B5FD', '#7C3AED', '#4C1D95'],
  marrom: ['#D6A77A', '#92400E', '#451A03'],
  // a preta leva brilho cinza para não sumir no corpo escuro do Linu
  preta: ['#71717A', '#27272A', '#09090B'],
  vinho: ['#E59AAE', '#881337', '#4C0519'],
  branca: ['#FFFFFF', '#F1F5F9', '#94A3B8'],
} satisfies Record<string, Tinta>;

export interface Corda {
  /** como o Matheus escreveu: “Cinza/Amarela” */
  nome: string;
  /** o grau, quando a corda tem um: “Monitor”, “Professor 1º grau”… */
  titulo?: string;
  /** a cor principal e, nas cordas de duas cores, a segunda */
  cores: [Tinta] | [Tinta, Tinta];
}

export const CORDAS: Corda[] = [
  { nome: 'Cinza', cores: [T.cinza] },
  { nome: 'Cinza/Amarela', cores: [T.cinza, T.amarela] },
  { nome: 'Amarela', cores: [T.amarela] },
  { nome: 'Amarela/Laranja', cores: [T.amarela, T.laranja] },
  { nome: 'Laranja', cores: [T.laranja] },
  { nome: 'Laranja/Verde', cores: [T.laranja, T.verde] },
  { nome: 'Verde', cores: [T.verde] },
  { nome: 'Verde/Vermelha', cores: [T.verde, T.vermelha] },
  { nome: 'Verde/Azul', cores: [T.verde, T.azul] },
  { nome: 'Vermelha/Azul', titulo: 'Monitor', cores: [T.vermelha, T.azul] },
  { nome: 'Azul', titulo: 'Instrutor', cores: [T.azul] },
  { nome: 'Vermelha/Roxa', titulo: 'Professor 1º grau', cores: [T.vermelha, T.roxa] },
  { nome: 'Vermelha/Marrom', titulo: 'Professor 2º grau', cores: [T.vermelha, T.marrom] },
  { nome: 'Vermelha/Preta', titulo: 'Professor 3º grau', cores: [T.vermelha, T.preta] },
  { nome: 'Roxa', titulo: 'Contra-Mestre 1º grau', cores: [T.roxa] },
  { nome: 'Roxa/Marrom', titulo: 'Contra-Mestre 2º grau', cores: [T.roxa, T.marrom] },
  { nome: 'Marrom', titulo: 'Contra-Mestre 3º grau', cores: [T.marrom] },
  { nome: 'Vermelha', titulo: 'Mestre 1º grau', cores: [T.vermelha] },
  { nome: 'Preta', titulo: 'Mestre 2º grau', cores: [T.preta] },
  { nome: 'Vinho', titulo: 'Mestre 3º grau', cores: [T.vinho] },
  { nome: 'Vinho/Branca', titulo: 'Mestre 4º grau', cores: [T.vinho, T.branca] },
  { nome: 'Branca', titulo: 'Mestre', cores: [T.branca] },
];

const ULTIMA = CORDAS.length - 1;

/** A tinta do corpo do cachecol e a das listras/nó (a mesma nas cordas de uma cor só). */
export function tintasDaCorda(corda: number): { base: Tinta; listra: Tinta; duas: boolean } {
  const c = CORDAS[Math.max(0, Math.min(ULTIMA, corda))].cores;
  return { base: c[0], listra: c[1] ?? c[0], duas: c.length === 2 };
}

/** Quantas palavras aprendidas pede a corda `i` num idioma com `total` palavras. */
export function palavrasParaCorda(i: number, total: number): number {
  return Math.ceil((total * i) / ULTIMA);
}

export interface Cachecol {
  /** índice em CORDAS (0 = Cinza, 21 = Branca) */
  corda: number;
  aprendidas: number;
  total: number;
}

/** A corda pelo vocabulário: a mais alta cujo corte já foi alcançado. */
export function cachecolDoVocabulario(aprendidas: number, total: number): Cachecol {
  let corda = 0;
  for (let i = 1; i <= ULTIMA; i++) if (total > 0 && aprendidas >= palavrasParaCorda(i, total)) corda = i;
  return { corda, aprendidas, total };
}

/** Quantas palavras faltam para a próxima corda (null na Branca). */
export function faltamParaProxima(c: Cachecol): number | null {
  return c.corda >= ULTIMA ? null : palavrasParaCorda(c.corda + 1, c.total) - c.aprendidas;
}

export function nomeDaCorda(corda: number): string {
  const c = CORDAS[corda];
  return c.titulo ? `${c.nome} (${c.titulo})` : c.nome;
}

const fmt = (n: number) => n.toLocaleString('pt-BR');

/** A frase da ficha: «Cachecol Verde: 900 de 4.162 palavras · próxima: Verde/Vermelha, faltam 12». */
export function fraseDoCachecol(c: Cachecol | null): string {
  if (!c) return 'Cachecol Cinza: aprenda palavras para trocar de cor.';
  const falta = faltamParaProxima(c);
  const cab = `Cachecol ${nomeDaCorda(c.corda)}: ${fmt(c.aprendidas)} de ${fmt(c.total)} palavras`;
  if (falta === null) return `${cab} · o mais alto de todos!`;
  return `${cab} · próximo: ${CORDAS[c.corda + 1].nome}, ${falta === 1 ? 'falta 1 palavra' : `faltam ${fmt(falta)} palavras`}`;
}

// ---------- o cachecol de agora, lido por todos os Linus da tela (como a cor e a roupa) ----------

let current: Cachecol | null = null;
// o aluno pode guardar o cachecol: conquistado continua, só não aparece no Linu
let usar = true;
const listeners = new Set<() => void>();
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
};

/** Chave do Meta: '0' quando o aluno escolheu não usar o cachecol. */
export const USAR_CACHECOL_KEY = 'cachecol_usar';

export function setCurrentCachecol(c: Cachecol | null) {
  if (current?.corda === c?.corda && current?.aprendidas === c?.aprendidas && current?.total === c?.total) return;
  current = c;
  listeners.forEach((l) => l());
}

/** O cachecol que o Linu está usando: o conquistado, se o aluno não o guardou. */
export function useCachecol(): Cachecol | null {
  return useSyncExternalStore(
    subscribe,
    () => (usar ? current : null),
    () => (usar ? current : null),
  );
}

/** O cachecol conquistado, esteja o Linu usando ou não (para a ficha e o Cofre). */
export function useCachecolConquistado(): Cachecol | null {
  return useSyncExternalStore(subscribe, () => current, () => current);
}

export function useUsarCachecol(): boolean {
  return useSyncExternalStore(subscribe, () => usar, () => usar);
}

/** Usar ou guardar o cachecol (com ou sem roupinha, tanto faz): fica salvo no Meta. */
export async function setUsarCachecol(db: SQLiteDatabase, valor: boolean) {
  usar = valor;
  listeners.forEach((l) => l());
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', USAR_CACHECOL_KEY, valor ? '1' : '0');
}

/**
 * Recalcula o cachecol do idioma estudado (ao abrir o app, trocar de idioma e a cada refresh, depois
 * de uma atividade). O total é o vocabulário do pacote, não o que já está no banco: a primeira
 * abertura semeia o banco aos poucos, e o corte não pode mudar no meio disso.
 */
export async function loadCachecol(db: SQLiteDatabase, pack: Pick<LanguagePack, 'code' | 'vocab'>): Promise<Cachecol> {
  const { learned } = await vocabStats(db, pack.code);
  const total = pack.vocab.length;
  const c = cachecolDoVocabulario(Math.min(learned, total), total);
  const salvo = (await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', USAR_CACHECOL_KEY))?.value;
  if (usar !== (salvo !== '0')) {
    usar = salvo !== '0';
    listeners.forEach((l) => l());
  }
  setCurrentCachecol(c);
  return c;
}
