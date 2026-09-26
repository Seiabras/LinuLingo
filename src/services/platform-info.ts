import { Platform } from 'react-native';

import { browserFromUserAgent, osFromUserAgent, type Browser, type OS } from './user-agent';

export type { Browser, OS };

/** Sistema e navegador de quem está usando o app. */
export function detectPlatform(): { os: OS; browser: Browser } {
  if (Platform.OS === 'ios' || Platform.OS === 'android') return { os: Platform.OS, browser: null };
  if (typeof navigator === 'undefined') return { os: 'linux', browser: 'outro' };
  return { os: osFromUserAgent(navigator.userAgent, navigator.maxTouchPoints ?? 0), browser: browserFromUserAgent(navigator.userAgent) };
}

export const OS_LABEL: Record<OS, string> = {
  ios: 'iPhone / iPad',
  android: 'Android',
  windows: 'Windows',
  macos: 'Mac',
  linux: 'Linux',
  chromeos: 'Chromebook',
};

export const OS_ICON: Record<OS, string> = { ios: '📱', android: '🤖', windows: '🪟', macos: '💻', linux: '🐧', chromeos: '🌐' };
