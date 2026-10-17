import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import { tocarSomLicao } from '@/services/sons-licoes';

/** Vibração leve no acerto e dupla no erro (sem efeito na web). */
const native = Platform.OS === 'ios' || Platform.OS === 'android';

export function tapLight() {
  if (native) Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
}

export function success() {
  if (native) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {});
}

export function error() {
  if (!native) return;
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(() => {});
  setTimeout(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {}), 120);
}

/** Resposta certa num exercício: vibra e toca o som de acerto escolhido no Perfil (item 19). */
export function acertou() {
  success();
  tocarSomLicao('acerto');
}

/** Resposta errada num exercício: vibra e toca o som de erro escolhido no Perfil. */
export function errou() {
  error();
  tocarSomLicao('erro');
}
