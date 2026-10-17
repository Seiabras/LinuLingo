import type { SQLiteDatabase } from 'expo-sqlite';

/** As preferências de acessibilidade e o que não depende do React Native (testável em Node). */
export type TextScale = 'normal' | 'grande' | 'extra';
export type VozVelocidade = 'normal' | 'devagar' | 'bem-devagar';
export type TempoSprint = 'normal' | 'dobro' | 'livre';
/** O movimento do app (P1 do PENDENTES.md, 17/10/2026): seguir o “reduzir movimento” do aparelho,
 *  animar sempre (mesmo que o aparelho peça menos movimento) ou reduzir sempre. */
export type Movimento = 'aparelho' | 'animar' | 'reduzir';

export interface AccessPrefs {
  /** 'aparelho' segue o “reduzir movimento” do sistema; 'animar' e 'reduzir' valem por cima dele.
   *  (Até 17/10/2026 era `reduceMotion: boolean`; `loadAccessPrefs` converte o que ficou salvo.) */
  movimento: Movimento;
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
  movimento: 'aparelho',
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
    const { reduceMotion, ...resto } = JSON.parse(r.value) as Partial<AccessPrefs> & { reduceMotion?: boolean };
    const prefs = { ...DEFAULT_ACCESS_PREFS, ...resto };
    // o interruptor antigo “Reduzir movimento” ligado vira 'reduzir'
    if (!resto.movimento && reduceMotion) prefs.movimento = 'reduzir';
    return prefs;
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

/** Se o movimento fica reduzido, dada a escolha do app e o ajuste do aparelho. */
export function movimentoReduzido(movimento: Movimento, aparelhoReduz: boolean): boolean {
  return movimento === 'reduzir' || (movimento === 'aparelho' && aparelhoReduz);
}

/**
 * As “Animações” dos jogos e o movimento do Perfil (P1 do PENDENTES.md, 17/10/2026). Enquanto a
 * pessoa não mexe em “Animações”, o jogo segue o Perfil (e o aparelho, se o Perfil segue o aparelho).
 * Depois que ela escolhe, vale a escolha dela, por cima do aparelho; só o “Reduzir” do Perfil continua
 * valendo por cima de tudo. Quem desligou as animações antes desta opção conta como quem escolheu.
 */
export function animacoesDoJogo(prefs: { animacoes: boolean; animacoesEscolhida?: boolean }, movimento: Movimento, aparelhoReduz: boolean) {
  const escolhida = prefs.animacoesEscolhida ?? !prefs.animacoes;
  if (movimento === 'reduzir') return { ligadas: false, porCima: false };
  if (!escolhida) return { ligadas: !movimentoReduzido(movimento, aparelhoReduz), porCima: false };
  // escolhida e ligada com o aparelho pedindo menos movimento: o jogo anima por cima dele
  return { ligadas: prefs.animacoes, porCima: prefs.animacoes && movimentoReduzido(movimento, aparelhoReduz) };
}
