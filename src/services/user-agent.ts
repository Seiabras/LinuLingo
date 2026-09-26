/** Leitura do user agent — funções puras (sem react-native), usadas pelo platform-info. */
export type OS = 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'chromeos';
export type Browser = 'chrome' | 'edge' | 'firefox' | 'safari' | 'outro' | null;

/** Classifica um user agent (separado para poder testar). `touchPoints` distingue iPad de Mac. */
export function osFromUserAgent(ua: string, touchPoints = 0): OS {
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && touchPoints > 1)) return 'ios';
  if (/Android/.test(ua)) return 'android';
  if (/CrOS/.test(ua)) return 'chromeos';
  if (/Windows/.test(ua)) return 'windows';
  if (/Macintosh|Mac OS X/.test(ua)) return 'macos';
  return 'linux';
}

export function browserFromUserAgent(ua: string): Browser {
  if (/Edg\//.test(ua)) return 'edge';
  if (/Firefox\//.test(ua)) return 'firefox';
  if (/Chrome\/|Chromium\//.test(ua)) return 'chrome';
  if (/Safari\//.test(ua)) return 'safari';
  return 'outro';
}
