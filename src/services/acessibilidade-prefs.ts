import type { SQLiteDatabase } from 'expo-sqlite';

/** As preferências de acessibilidade e o que não depende do React Native (testável em Node). */
export type TextScale = 'normal' | 'grande' | 'extra';
export type VozVelocidade = 'normal' | 'devagar' | 'bem-devagar';
export type TempoSprint = 'normal' | 'dobro' | 'livre';

export interface AccessPrefs {
  /** Para quem prefere sem animação: soma com a preferência de acessibilidade do próprio aparelho
   *  (`useReducedMotion`, já respeitada no Linu) — ligar aqui reduz o movimento mesmo que o sistema
   *  operacional não tenha essa opção ligada. */
  reduceMotion: boolean;
  textScale: TextScale;
  /** textos cinza mais escuros (ou mais claros, no tema escuro) e bordas mais fortes — só na web */
  altoContraste: boolean;
  /** mais espaço entre letras, palavras e linhas (WCAG 1.4.12) — só na web */
  textoEspacado: boolean;
  /** a velocidade de toda fala do app: gravações de nativos e vozes sintéticas */
  vozVelocidade: VozVelocidade;
  /** o cronômetro do Sprint: normal (5 min), o dobro, ou sem limite (WCAG 2.2.1) */
  tempoSprint: TempoSprint;
}

export const DEFAULT_ACCESS_PREFS: AccessPrefs = {
  reduceMotion: false,
  textScale: 'normal',
  altoContraste: false,
  textoEspacado: false,
  vozVelocidade: 'normal',
  tempoSprint: 'normal',
};

export const VOZ_FATOR: Record<VozVelocidade, number> = { normal: 1, devagar: 0.8, 'bem-devagar': 0.65 };

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

/** O tempo do Sprint com a preferência: null = sem limite. */
export function segundosDoSprint(base: number, tempo: TempoSprint): number | null {
  return tempo === 'livre' ? null : tempo === 'dobro' ? base * 2 : base;
}
