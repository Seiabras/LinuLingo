/**
 * No navegador: no celular abre o menu de compartilhar (WhatsApp, e-mail, Arquivos…); no computador,
 * baixa o arquivo.
 */
export async function compartilharArquivo(nome: string, bytes: Uint8Array, mime: string, titulo: string): Promise<'enviado' | 'cancelado'> {
  const file = new File([bytes as BlobPart], nome, { type: mime });
  const touch = window.matchMedia?.('(pointer: coarse)').matches;
  if (touch && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: titulo });
      return 'enviado';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'cancelado';
      // sem permissão para compartilhar: cai no download
    }
  }
  const url = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  return 'enviado';
}
