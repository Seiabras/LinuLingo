import { Platform } from 'react-native';

/** No site, as páginas ficam sob /LinuLingo; no servidor de desenvolvimento, na raiz. */
export function siteBase(): string {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return '';
  const b = process.env.EXPO_BASE_URL ?? '';
  return b && window.location.pathname.startsWith(b) ? b : '';
}

/** Endereço do app para links (o publicado quando não há janela: no aparelho, os links abrem o site). */
export function siteUrl(): string {
  if (Platform.OS === 'web' && typeof window !== 'undefined') return `${window.location.origin}${siteBase()}`;
  return 'https://seiabras.github.io/LinuLingo';
}
