import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { getMeta, getUser, setMeta, updateUser } from '@/database/queries';
import { ensurePack } from '@/database/db';
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
  /** Troca o idioma estudado: grava o conteúdo dele no banco (se ainda não estiver lá) e só então troca */
  setLanguage: (code: string) => Promise<void>;
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

  const setLanguage = useCallback(
    async (code: string) => {
      await ensurePack(db, code);
      await updateUser(db, { current_language: code });
      await refresh();
    },
    [db, refresh],
  );

  const setTheme = useCallback(
    (t: ThemePref) => {
      setThemeState(t);
      saveThemePref(db, t);
    },
    [db],
  );

  const basePack = getPack(user?.current_language ?? 'ro');
  const [variants, setVariants] = useState<Record<string, string>>({});
  const variant = variants[basePack.code] ?? basePack.variants?.[0]?.code ?? null;
  // a variante escolhida pode trazer voz e IPA próprias (ex.: [θ] e voz da Espanha no es-ES)
  const pack = useMemo(() => {
    const v = basePack.variants?.find((x) => x.code === variant);
    if (!v?.speechLocale && !v?.ipa) return basePack;
    return { ...basePack, speechLocale: v.speechLocale ?? basePack.speechLocale, ipa: v.ipa ?? basePack.ipa };
  }, [basePack, variant]);

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

  return <Ctx.Provider value={{ db, user, pack, streak, refresh, theme, setTheme, variant, setVariant, setLanguage }}>{ready ? children : null}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp fora do AppStateProvider');
  return v;
}
