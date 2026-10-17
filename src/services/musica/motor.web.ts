/**
 * O motor de áudio da Música no navegador: o Web Audio do próprio navegador faz o som das notas, e o
 * microfone chega pelo getUserMedia, lido por um AnalyserNode. Mesma interface de `motor.ts`.
 */
import { tocarCliqueNo, tocarNotaNo, type ContextoAudio, type Timbre } from './sintese';

type Janela = typeof globalThis & { AudioContext?: new () => AudioContext; webkitAudioContext?: new () => AudioContext };
let ctx: AudioContext | null = null;
function contexto(): AudioContext | null {
  const w = globalThis as Janela;
  const Ctor = w.AudioContext ?? w.webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

export const motorDisponivel = () => contexto() !== null;

export function tocarNota(midi: number, opcoes?: { duracao?: number; volume?: number; timbre?: Timbre; atraso?: number }) {
  const c = contexto();
  if (c) tocarNotaNo(c as unknown as ContextoAudio, midi, opcoes);
}

export function tocarClique(forte: boolean, atraso = 0) {
  const c = contexto();
  if (c) tocarCliqueNo(c as unknown as ContextoAudio, forte, atraso);
}

export function agora(): number {
  return contexto()?.currentTime ?? 0;
}

export async function ouvirMicrofone(aoOuvir: (amostras: Float32Array, taxa: number) => void): Promise<() => void> {
  const c = contexto();
  if (!c || !navigator.mediaDevices?.getUserMedia) throw new Error('indisponivel');
  let stream: MediaStream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
  } catch {
    throw new Error('permissao');
  }
  const fonte = c.createMediaStreamSource(stream);
  const analisador = c.createAnalyser();
  analisador.fftSize = 4096;
  fonte.connect(analisador);
  const buf = new Float32Array(analisador.fftSize);
  const id = setInterval(() => {
    analisador.getFloatTimeDomainData(buf);
    aoOuvir(buf, c.sampleRate);
  }, 80);
  return () => {
    clearInterval(id);
    fonte.disconnect();
    stream.getTracks().forEach((t) => t.stop());
  };
}
