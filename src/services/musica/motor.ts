/**
 * O motor de áudio da Música no celular: o react-native-audio-api (Software Mansion) faz o som das
 * notas e entrega o som do microfone em pedaços, para a detecção da nota. Ele tem código nativo: no
 * Expo Go ele não existe: as notas tocam então por arquivos WAV gerados na hora (expo-audio), e o
 * microfone mostra o aviso de que precisa da versão de desenvolvimento (`eas build --profile
 * development`). A versão do navegador está em `motor.web.ts`.
 */
import { createAudioPlayer, type AudioPlayer } from 'expo-audio';
import { tocarCliqueNo, tocarNotaNo, wavDaNota, type ContextoAudio, type Timbre } from './sintese';

type Lib = typeof import('react-native-audio-api');
let lib: Lib | null | undefined;
function carregar(): Lib | null {
  if (lib === undefined) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      lib = require('react-native-audio-api') as Lib;
    } catch {
      lib = null;
    }
  }
  return lib;
}

let ctx: ContextoAudio | null = null;
function contexto(): ContextoAudio | null {
  const l = carregar();
  if (!l) return null;
  if (!ctx) {
    try {
      l.AudioManager.setAudioSessionOptions({ iosCategory: 'playAndRecord', iosMode: 'measurement', iosOptions: ['defaultToSpeaker', 'allowBluetoothA2DP'] });
      ctx = new l.AudioContext() as unknown as ContextoAudio;
    } catch {
      return null;
    }
  }
  return ctx;
}

export const motorDisponivel = () => contexto() !== null;

// sem o motor (Expo Go): um player do expo-audio por nota, com o WAV gerado uma vez só
const players = new Map<number, AudioPlayer>();
function tocarWav(midi: number, atraso = 0) {
  const tocar = () => {
    let p = players.get(midi);
    if (!p) {
      p = createAudioPlayer({ uri: wavDaNota(midi) });
      players.set(midi, p);
    }
    void p.seekTo(0);
    p.play();
  };
  if (atraso > 0) setTimeout(tocar, atraso * 1000);
  else tocar();
}

export function tocarNota(midi: number, opcoes?: { duracao?: number; volume?: number; timbre?: Timbre; atraso?: number }) {
  const c = contexto();
  if (c) tocarNotaNo(c, midi, opcoes);
  else tocarWav(midi, opcoes?.atraso);
}

export function tocarClique(forte: boolean, atraso = 0) {
  const c = contexto();
  if (c) tocarCliqueNo(c, forte, atraso);
}

export function agora(): number {
  return contexto()?.currentTime ?? 0;
}

/**
 * Liga o microfone e chama `aoOuvir` a cada pedaço de som (amostras de -1 a 1). Devolve a função que
 * desliga. Lança Error('indisponivel') no Expo Go e Error('permissao') se a pessoa negar o acesso.
 */
export async function ouvirMicrofone(aoOuvir: (amostras: Float32Array, taxa: number) => void): Promise<() => void> {
  const l = carregar();
  if (!l || !contexto()) throw new Error('indisponivel');
  const perm = await l.AudioManager.requestRecordingPermissions();
  if (perm !== 'Granted') throw new Error('permissao');
  const rec = new l.AudioRecorder();
  rec.onAudioReady({ sampleRate: 44100, bufferLength: 2048, channelCount: 1 }, (e) => aoOuvir(e.buffer.getChannelData(0), e.buffer.sampleRate));
  await rec.start();
  return () => {
    rec.clearOnAudioReady();
    void rec.stop();
  };
}
