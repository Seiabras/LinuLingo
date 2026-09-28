import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useSQLiteContext, type SQLiteDatabase } from 'expo-sqlite';
import { getMeta, getUser, setMeta, updateUser } from '@/database/queries';
import { ensurePack } from '@/database/db';
import { getPack } from '@/data/idiomas';
import type { Accent, LanguagePack } from '@/data/types';
import type { User } from '@/types';
import { localDay, visibleStreak } from './progress';
import { Appearance } from 'react-native';
import { colorScheme } from 'nativewind';
import { loadThemePref, saveThemePref, useThemeSync, type ThemePref } from './theme';
import { loadOutfit } from './linu-outfit';
import { loadCor } from './linu-cor';

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
  /** Sotaque ou dialeto que o aluno escolheu estudar (troca a voz, a IPA e a variante) */
  accent: Accent | null;
  setAccent: (id: string | null) => void;
  /** Relê tudo do banco (aluno, tema, variantes, sotaques): depois de restaurar uma cópia do progresso */
  reload: () => Promise<void>;
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
  // muda quando o banco é relido por inteiro: variantes e sotaques voltam a ser lidos
  const [generation, setGeneration] = useState(0);
  useThemeSync(theme);

  const readAll = useCallback(() => Promise.all([getUser(db), loadThemePref(db)]), [db]);
  const applyAll = useCallback(([u, pref]: [AppUser | null, ThemePref]) => {
    const resolved = pref === 'system' ? (Appearance.getColorScheme() === 'dark' ? 'dark' : 'light') : pref;
    try {
      colorScheme.set(resolved);
    } catch {}
    setUser(u);
    setThemeState(pref);
  }, []);

  // Aplica o tema salvo ANTES de montar as telas (evita atualizar componentes ainda montando)
  useEffect(() => {
    (async () => {
      applyAll(await readAll());
      await loadOutfit(db).catch(() => {});
      await loadCor(db).catch(() => {});
      setReady(true);
    })();
  }, [db, readAll, applyAll]);

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
  const [accents, setAccents] = useState<Record<string, string | null>>({});
  const accent = basePack.accents?.find((a) => a.id === accents[basePack.code]) ?? null;
  // a variante e o sotaque escolhidos podem trazer voz e IPA próprias (ex.: [θ] e voz da Espanha no
  // es-ES; o «sh» e a voz argentina no portenho); o sotaque vale por cima da variante
  const pack = useMemo(() => {
    const v = basePack.variants?.find((x) => x.code === variant);
    const speechLocale = accent?.speechLocale ?? v?.speechLocale;
    const ipa = accent?.ipa ?? v?.ipa;
    if (!speechLocale && !ipa) return basePack;
    return { ...basePack, speechLocale: speechLocale ?? basePack.speechLocale, ipa: ipa ?? basePack.ipa };
  }, [basePack, variant, accent]);

  useEffect(() => {
    getMeta(db, `variante_${pack.code}`).then((v) => {
      if (v) setVariants((m) => ({ ...m, [pack.code]: v }));
    });
    getMeta(db, `sotaque_${pack.code}`).then((v) => {
      if (v) setAccents((m) => ({ ...m, [pack.code]: v }));
    });
  }, [db, pack.code, generation]);

  const reload = useCallback(async () => {
    setVariants({});
    setAccents({});
    applyAll(await readAll());
    await loadOutfit(db).catch(() => {});
    await loadCor(db).catch(() => {});
    setGeneration((g) => g + 1);
  }, [db, readAll, applyAll, setAccents, setVariants]);

  const code = basePack.code;
  const packAccents = basePack.accents;
  const packVariants = basePack.variants;
  const setAccent = useCallback(
    (id: string | null) => {
      setAccents((m) => ({ ...m, [code]: id }));
      setMeta(db, `sotaque_${code}`, id ?? '');
      // o sotaque vem com a variante dele (o portenho liga o espanhol do Rio da Prata)
      const a = packAccents?.find((x) => x.id === id);
      const v = a?.variant;
      if (v && packVariants?.some((x) => x.code === v)) {
        setVariants((m) => ({ ...m, [code]: v }));
        setMeta(db, `variante_${code}`, v);
      }
    },
    [db, code, packAccents, packVariants, setAccents, setVariants],
  );

  const accentVariant = accent?.variant ?? null;
  const setVariant = useCallback(
    (variantCode: string) => {
      setVariants((m) => ({ ...m, [code]: variantCode }));
      setMeta(db, `variante_${code}`, variantCode);
      // outra variante: o sotaque escolhido, se era de outra variante, deixa de valer
      if (accentVariant && accentVariant !== variantCode) {
        setAccents((m) => ({ ...m, [code]: null }));
        setMeta(db, `sotaque_${code}`, '');
      }
    },
    [db, code, accentVariant, setAccents, setVariants],
  );
  const streak = user
    ? visibleStreak({ streak: user.streak_days, freezes: user.streak_freezes, lastStudyDate: user.last_study_date }, localDay())
    : 0;

  return <Ctx.Provider value={{ db, user, pack, streak, refresh, theme, setTheme, variant, setVariant, setLanguage, accent, setAccent, reload }}>{ready ? children : null}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp fora do AppStateProvider');
  return v;
}
