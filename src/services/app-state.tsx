import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { getMeta, getUser, setMeta } from '@/database/queries';
import { getPack } from '@/data/idiomas';
import type { LanguagePack } from '@/data/types';
import type { User } from '@/types';
import { localDay, visibleStreak } from './progress';
import { Appearance } from 'react-native';
import { colorScheme } from 'nativewind';
import { loadThemePref, saveThemePref, useThemeSync, type ThemePref } from './theme';

type AppUser = User & { streak_freezes: number; daily_goal_xp: number };

interface AppState {
  db: SQLiteDatabase;
  user: AppUser | null;
  pack: LanguagePack;
  /** Ofensiva exibida hoje (zera se foi perdida) */
  streak: number;
  refresh: () => Promise<void>;
  theme: ThemePref;
  setTheme: (t: ThemePref) => void;
  /** Variante do idioma que o aluno escolheu (ex.: ro-MD) */
  variant: string | null;
  setVariant: (code: string) => void;
}

const Ctx = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const db = useSQLiteContext();
  const [user, setUser] = useState<AppUser | null>(null);

  const refresh = useCallback(async () => {
    setUser(await getUser(db));
  }, [db]);

  const [theme, setThemeState] = useState<ThemePref>('system');
  const [ready, setReady] = useState(false);
  useThemeSync(theme);

  // Aplica o tema salvo ANTES de montar as telas (evita atualizar componentes ainda montando)
  useEffect(() => {
    (async () => {
      const [u, pref] = await Promise.all([getUser(db), loadThemePref(db)]);
      const resolved = pref === 'system' ? (Appearance.getColorScheme() === 'dark' ? 'dark' : 'light') : pref;
      try {
        colorScheme.set(resolved);
      } catch {}
      setUser(u);
      setThemeState(pref);
      setReady(true);
    })();
  }, [db]);

  const setTheme = useCallback(
    (t: ThemePref) => {
      setThemeState(t);
      saveThemePref(db, t);
    },
    [db],
  );

  const pack = getPack(user?.current_language ?? 'ro');
  const [variants, setVariants] = useState<Record<string, string>>({});
  const variant = variants[pack.code] ?? pack.variants?.[0]?.code ?? null;

  useEffect(() => {
    getMeta(db, `variante_${pack.code}`).then((v) => {
      if (v) setVariants((m) => ({ ...m, [pack.code]: v }));
    });
  }, [db, pack.code]);

  const setVariant = useCallback(
    (code: string) => {
      setVariants((m) => ({ ...m, [pack.code]: code }));
      setMeta(db, `variante_${pack.code}`, code);
    },
    [db, pack.code],
  );
  const streak = user
    ? visibleStreak({ streak: user.streak_days, freezes: user.streak_freezes, lastStudyDate: user.last_study_date }, localDay())
    : 0;

  return <Ctx.Provider value={{ db, user, pack, streak, refresh, theme, setTheme, variant, setVariant }}>{ready ? children : null}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp fora do AppStateProvider');
  return v;
}
