import { File, Paths } from 'expo-file-system';
import * as Sharing from 'expo-sharing';

/** No celular: grava a cópia e abre o menu de compartilhar (Arquivos, Drive, e-mail…). */
export async function saveBackupFile(name: string, text: string): Promise<'salvo' | 'cancelado'> {
  const f = new File(Paths.cache, name);
  if (f.exists) f.delete();
  f.create();
  f.write(text);
  if (!(await Sharing.isAvailableAsync())) throw new Error('Este aparelho não tem como compartilhar arquivos.');
  await Sharing.shareAsync(f.uri, { mimeType: 'application/json', dialogTitle: 'Guardar a cópia do progresso', UTI: 'public.json' });
  return 'salvo';
}

/** No celular: escolhe o arquivo da cópia. null se a pessoa desistir. */
export async function pickBackupFile(): Promise<string | null> {
  const r = await File.pickFileAsync({ mimeTypes: ['application/json', 'text/plain', '*/*'] });
  if (r.canceled) return null;
  return r.result.text();
}
