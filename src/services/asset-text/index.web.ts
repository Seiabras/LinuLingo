import { Asset } from 'expo-asset';

/** Texto de um asset empacotado (na web: um fetch do arquivo publicado). */
export async function readAssetText(mod: number): Promise<string> {
  const res = await fetch(Asset.fromModule(mod).uri);
  if (!res.ok) throw new Error(`asset ${res.status}`);
  return res.text();
}
