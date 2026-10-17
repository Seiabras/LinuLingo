import { useSyncExternalStore } from 'react';
import { Platform } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';
import { movimentoReduzido, TEXT_SCALE_FACTOR, VOZ_FATOR, type AccessPrefs, type Movimento, type TempoSprint, type TextScale } from './acessibilidade-prefs';

export * from './acessibilidade-prefs';

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

/** Liga ou desliga as classes de alto contraste e de texto espaçado na raiz (o CSS está em global.css). */
export function applyAccessClasses(prefs: Pick<AccessPrefs, 'altoContraste' | 'textoEspacado'>) {
  if (Platform.OS !== 'web' || typeof document === 'undefined') return;
  document.documentElement.classList.toggle('alto-contraste', prefs.altoContraste);
  document.documentElement.classList.toggle('texto-espacado', prefs.textoEspacado);
}


/**
 * O movimento escolhido no Perfil, fora do React — como `linu-outfit.ts`, porque o Linu aparece em
 * telas sem o contexto do app (prévias). 'aparelho' segue o `useReducedMotion()` do sistema;
 * 'animar' e 'reduzir' valem por cima dele (P1 do PENDENTES.md, 17/10/2026).
 */
let movimentoAtual: Movimento = 'aparelho';
let vozFator = 1;
let tempoSprint: TempoSprint = 'normal';
const listeners = new Set<() => void>();

export function setMovimento(m: Movimento) {
  movimentoAtual = m;
  listeners.forEach((l) => l());
}

/** Aplica todas as preferências: tamanho e classes do texto (web), movimento, voz e cronômetro. */
export function applyAccess(prefs: AccessPrefs) {
  applyTextScale(prefs.textScale);
  applyAccessClasses(prefs);
  vozFator = VOZ_FATOR[prefs.vozVelocidade] ?? 1;
  tempoSprint = prefs.tempoSprint;
  setMovimento(prefs.movimento);
}

/** O fator de velocidade da fala (1 = normal), lido pela voz em speech.ts. */
export function fatorDaVoz(): number {
  return vozFator;
}

export function useTempoSprint(): TempoSprint {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => tempoSprint,
    () => tempoSprint,
  );
}

export function useMovimento(): Movimento {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => movimentoAtual,
    () => movimentoAtual,
  );
}

/** “Reduzir” escolhido no Perfil (por cima do aparelho). */
export function useAppReduceMotion(): boolean {
  return useMovimento() === 'reduzir';
}

/** Se o movimento fica reduzido agora: a escolha do Perfil, ou o aparelho quando ela é “Seguir o aparelho”. */
export function useMovimentoReduzido(): boolean {
  return movimentoReduzido(useMovimento(), useReducedMotion());
}
