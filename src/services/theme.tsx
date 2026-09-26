import { useEffect } from 'react';
import { useColorScheme as useSystemScheme } from 'react-native';
import { colorScheme, useColorScheme } from 'nativewind';
import type { SQLiteDatabase } from 'expo-sqlite';

export type ThemePref = 'system' | 'light' | 'dark';

export async function loadThemePref(db: SQLiteDatabase): Promise<ThemePref> {
  const r = await db.getFirstAsync<{ value: string }>(`SELECT value FROM Meta WHERE key = 'theme'`);
  return (r?.value as ThemePref) ?? 'system';
}

export async function saveThemePref(db: SQLiteDatabase, pref: ThemePref) {
  await db.runAsync(`INSERT OR REPLACE INTO Meta (key, value) VALUES ('theme', ?)`, pref);
}

/** Aplica a preferência (ou o tema do aparelho) ao NativeWind — na web, alterna a classe .dark. */
export function useThemeSync(pref: ThemePref) {
  const system = useSystemScheme();
  useEffect(() => {
    const resolved = pref === 'system' ? (system === 'dark' ? 'dark' : 'light') : pref;
    try {
      colorScheme.set(resolved);
    } catch {
      // ambiente sem janela (renderização estática)
    }
  }, [pref, system]);
}

/** true quando o tema efetivo é escuro (para cores passadas por props, ex.: ícones). */
export function useIsDark(): boolean {
  return useColorScheme().colorScheme === 'dark';
}
