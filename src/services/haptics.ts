import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

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
