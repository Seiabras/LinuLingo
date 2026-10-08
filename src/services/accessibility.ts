import { useSyncExternalStore } from 'react';
import { Platform } from 'react-native';
import { TEXT_SCALE_FACTOR, VOZ_FATOR, type AccessPrefs, type TempoSprint, type TextScale } from './acessibilidade-prefs';

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
 * «Reduzir movimento» ligado no app, fora do React — como `linu-outfit.ts`, porque o Linu aparece em
 * telas sem o contexto do app (prévias). Some com `useReducedMotion()` (o ajuste do APARELHO, já
 * respeitado no Linu): ligar aqui reduz o movimento mesmo sem o sistema operacional pedir.
 */
let reduceMotionOn = false;
let vozFator = 1;
let tempoSprint: TempoSprint = 'normal';
const listeners = new Set<() => void>();

export function setReduceMotion(on: boolean) {
  reduceMotionOn = on;
  listeners.forEach((l) => l());
}

/** Aplica todas as preferências: tamanho e classes do texto (web), movimento, voz e cronômetro. */
export function applyAccess(prefs: AccessPrefs) {
  applyTextScale(prefs.textScale);
  applyAccessClasses(prefs);
  vozFator = VOZ_FATOR[prefs.vozVelocidade] ?? 1;
  tempoSprint = prefs.tempoSprint;
  setReduceMotion(prefs.reduceMotion);
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
