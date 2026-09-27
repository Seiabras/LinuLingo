import { Platform, Share } from 'react-native';

/** Manda o link pelo compartilhar do aparelho; sem ele, copia. Devolve o que aconteceu. */
export async function sendLink(url: string, text: string): Promise<'compartilhado' | 'copiado' | 'falhou'> {
  if (Platform.OS === 'web' && typeof navigator !== 'undefined') {
    const nav = navigator as Navigator & { share?: (d: ShareData) => Promise<void> };
    if (nav.share) {
      try {
        await nav.share({ title: 'LinuLingo', text, url });
        return 'compartilhado';
      } catch {
        // a pessoa cancelou ou o navegador recusou: tenta copiar
      }
    }
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      return 'copiado';
    } catch {
      return 'falhou';
    }
  }
  const r = await Share.share({ message: `${text} ${url}` }).catch(() => null);
  return r ? 'compartilhado' : 'falhou';
}
