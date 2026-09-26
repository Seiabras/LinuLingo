import { Asset } from 'expo-asset';
import { File } from 'expo-file-system';

/** Texto de um asset empacotado (no aparelho: baixa/copia para o cache e lê o arquivo). */
export async function readAssetText(mod: number): Promise<string> {
  const asset = Asset.fromModule(mod);
  await asset.downloadAsync();
  return new File(asset.localUri ?? asset.uri).text();
}
