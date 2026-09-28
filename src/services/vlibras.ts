import { Linking, Platform } from 'react-native';
import { siteUrl } from './site-url';

/**
 * Abre o avatar do VLibras sinalizando o texto. É uma página à parte (public/vlibras.html): o app roda
 * isolado (COOP/COEP, por causa do SQLite), e nesse modo o navegador bloquearia os arquivos do
 * VLibras, que vêm de vlibras.gov.br. No aparelho, a página abre no navegador.
 */
export function openVLibras(text: string) {
  const url = `${siteUrl()}/vlibras.html?t=${encodeURIComponent(text)}`;
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    // a mesma janela é reaproveitada a cada sinal
    const w = window.open(url, 'linulingo-vlibras');
    if (w) return;
  }
  Linking.openURL(url).catch(() => {});
}
