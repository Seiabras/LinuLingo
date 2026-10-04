import { Platform } from 'react-native';
import { Asset } from 'expo-asset';
import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { SONS_AMBIENTE, type SomAmbienteId } from '@/data/sons-ambiente';

export { somDaMoradia } from './ambiente-moradia';

/**
 * Som ambiente do abrigo do Linu: o vento na barraca e na estação, a colônia de pinguins no refúgio
 * de Port Lockroy (que fica no meio de uma colônia de pinguins-gentoo), o mar no navio. Nas casas do
 * país, silêncio. Começa desligado (Meta «som_ambiente») e toca só com a tela inicial aberta, baixinho
 * e em laço sem emenda (ver scripts/baixar-ambiente.mjs).
 */
export const AMBIENTE_KEY = 'som_ambiente';
const VOLUME = 0.35;

let tocando: { id: SomAmbienteId; parar: () => void } | null = null;

/** Toca (em laço) o som pedido; o mesmo que já toca continua sem recomeçar. `null` para. */
export function tocarAmbiente(id: SomAmbienteId | null) {
  if (tocando?.id === id) return;
  pararAmbiente();
  if (!id) return;
  const src = SONS_AMBIENTE[id].src;
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
