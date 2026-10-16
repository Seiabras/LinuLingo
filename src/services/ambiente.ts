import { Platform } from 'react-native';
import { Asset } from 'expo-asset';
import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { MUSICAS_INICIO, type MusicaId } from '@/data/musicas-inicio';

/**
 * Música da tela inicial: uma das duas compostas pelo dono do app (tranquila ou pesada). Começa
 * desligada (Meta «som_ambiente», que guarda a escolha) e toca só com a tela inicial aberta,
 * baixinho e em laço. (Antes era o som ambiente das moradias: vento, pinguins, mar.)
 */
export const AMBIENTE_KEY = 'som_ambiente';
const VOLUME = 0.35;

let tocando: { id: MusicaId; parar: () => void } | null = null;

/** Toca (em laço) a música pedida; a mesma que já toca continua sem recomeçar. `null` para. */
export function tocarAmbiente(id: MusicaId | null) {
  if (tocando?.id === id) return;
  pararAmbiente();
  if (!id) return;
  const src = MUSICAS_INICIO[id].src;
  if (Platform.OS === 'web' && typeof Audio !== 'undefined') {
    const a = new Audio(Asset.fromModule(src).uri);
    a.loop = true;
    a.volume = VOLUME;
    // antes do primeiro toque na página o navegador bloqueia: não é erro, volta no próximo toque
    a.play().catch(() => {});
    tocando = { id, parar: () => a.pause() };
    return;
  }
  try {
    const p: AudioPlayer = createAudioPlayer(src);
    p.loop = true;
    p.volume = VOLUME;
    p.play();
    tocando = {
      id,
      parar: () => {
        p.pause();
        p.remove();
      },
    };
  } catch {
    tocando = null;
  }
}

export function pararAmbiente() {
  tocando?.parar();
  tocando = null;
}
