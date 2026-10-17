import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/**
 * No celular: grava o arquivo e abre o menu de compartilhar (WhatsApp, e-mail, Arquivos…). Usado pela
 * aba Criar para enviar a música como áudio.
 */
export async function compartilharArquivo(nome: string, bytes: Uint8Array, mime: string, titulo: string): Promise<'enviado' | 'cancelado'> {
  const f = new File(Paths.cache, nome);
  if (f.exists) f.delete();
  f.create();
  f.write(bytes);
  if (!(await Sharing.isAvailableAsync())) throw new Error('Este aparelho não tem como compartilhar arquivos.');
  await Sharing.shareAsync(f.uri, { mimeType: mime, dialogTitle: titulo });
  return 'enviado';
}
