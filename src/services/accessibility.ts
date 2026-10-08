import { useSyncExternalStore } from 'react';
import { Platform } from 'react-native';
import type { SQLiteDatabase } from 'expo-sqlite';

export type TextScale = 'normal' | 'grande' | 'extra';

export interface AccessPrefs {
  /** Para quem prefere sem animação: soma com a preferência de acessibilidade do próprio aparelho
   *  (`useReducedMotion`, já respeitada no Linu) — ligar aqui reduz o movimento mesmo que o sistema
   *  operacional não tenha essa opção ligada. */
  reduceMotion: boolean;
  textScale: TextScale;
  /** Aumenta o contraste de cor do app inteiro. Só funciona na web (ver `applyHighContrast`). */
  highContrast: boolean;
}

export const DEFAULT_ACCESS_PREFS: AccessPrefs = { reduceMotion: false, textScale: 'normal', highContrast: false };

export const TEXT_SCALE_FACTOR: Record<TextScale, number> = { normal: 1, grande: 1.15, extra: 1.3 };

export async function loadAccessPrefs(db: SQLiteDatabase): Promise<AccessPrefs> {
  const r = await db.getFirstAsync<{ value: string }>(`SELECT value FROM Meta WHERE key = 'access'`);
  if (!r) return DEFAULT_ACCESS_PREFS;
  try {
    return { ...DEFAULT_ACCESS_PREFS, ...JSON.parse(r.value) };
  } catch {
    return DEFAULT_ACCESS_PREFS;
  }
}

export async function saveAccessPrefs(db: SQLiteDatabase, prefs: AccessPrefs) {
  await db.runAsync(`INSERT OR REPLACE INTO Meta (key, value) VALUES ('access', ?)`, JSON.stringify(prefs));
}

/**
 * Escala o texto do app inteiro (todo `text-sm`/`text-base`/`text-lg`… do NativeWind usa `rem`, que
 * segue o `font-size` da raiz) — só funciona na web, onde existe um `document`. No nativo (iOS/
 * Android), o tamanho de texto do sistema operacional já se aplica sozinho (o React Native lê
 * `allowFontScaling`, ligado por padrão): não precisa de um controle próprio do app ali.
 */
export function applyTextScale(scale: TextScale) {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  document.documentElement.style.fontSize = `${16 * TEXT_SCALE_FACTOR[scale]}px`;
}

/**
 * Aumenta o contraste de cor do app inteiro (filtro CSS, não precisa mudar classe por componente).
 * Só funciona na web, pelo mesmo motivo do `applyTextScale` — o nativo não tem um jeito equivalente
 * de aplicar um filtro visual na raiz; fica para uma próxima rodada se vier a fazer diferença real.
 */
export function applyHighContrast(on: boolean) {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  document.documentElement.style.filter = on ? 'contrast(1.35) saturate(1.15)' : '';
}

/**
 * «Reduzir movimento» ligado no app, fora do React — como `linu-outfit.ts`, porque o Linu aparece em
 * telas sem o contexto do app (prévias). Some com `useReducedMotion()` (o ajuste do APARELHO, já
 * respeitado no Linu): ligar aqui reduz o movimento mesmo sem o sistema operacional pedir.
 */
let reduceMotionOn = false;
const listeners = new Set<() => void>();

export function setReduceMotion(on: boolean) {
  reduceMotionOn = on;
  listeners.forEach((l) => l());
}

export function useAppReduceMotion(): boolean {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => reduceMotionOn,
    () => reduceMotionOn,
  );
}
