/**
 * O som das notas, feito na hora (síntese), com a mesma API do Web Audio: no navegador, o AudioContext
 * do próprio navegador; no celular, o do react-native-audio-api. Um “piano” simples: a nota
 * fundamental mais dois harmônicos, com ataque rápido e decaimento, como uma corda batida.
 */
import { frequencia } from './notas';

/** O mínimo do Web Audio que o app usa (igual no navegador e no react-native-audio-api). */
export interface ContextoAudio {
  currentTime: number;
  destination: unknown;
  createOscillator(): {
    type: string;
    frequency: { value: number };
    connect(n: unknown): void;
    start(t?: number): void;
    stop(t?: number): void;
  };
  createGain(): {
    gain: { value: number; setValueAtTime(v: number, t: number): void; exponentialRampToValueAtTime(v: number, t: number): void; linearRampToValueAtTime(v: number, t: number): void };
    connect(n: unknown): void;
  };
}

export type Timbre = 'piano' | 'puro';

export function tocarNotaNo(ctx: ContextoAudio, midi: number, { duracao = 1.2, volume = 0.5, timbre = 'piano' as Timbre, atraso = 0 } = {}) {
  const t0 = ctx.currentTime + atraso;
  const hz = frequencia(midi);
  const parciais: [number, number, string][] =
    timbre === 'piano'
      ? [
          [1, 1, 'triangle'],
          [2, 0.35, 'sine'],
          [3, 0.15, 'sine'],
        ]
      : [[1, 1, 'sine']];
  for (const [mult, amp, tipo] of parciais) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = tipo;
    osc.frequency.value = hz * mult;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(volume * amp, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duracao * (mult === 1 ? 1 : 0.6));
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + duracao + 0.05);
  }
}

/** O clique do metrônomo: um bip curto, mais agudo no tempo forte. */
export function tocarCliqueNo(ctx: ContextoAudio, forte: boolean, atraso = 0) {
  const t0 = ctx.currentTime + atraso;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = 'square';
  osc.frequency.value = forte ? 1500 : 1000;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.linearRampToValueAtTime(forte ? 0.35 : 0.2, t0 + 0.002);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.05);
  osc.connect(g);
  g.connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + 0.06);
}

/**
 * A mesma nota de “piano” como um arquivo WAV em memória (data URI), para quando não há o motor de
 * áudio (no Expo Go): o expo-audio toca o arquivo. 16 bits, mono, com decaimento.
 */
export function wavDaNota(midi: number, ms = 900, taxa = 22050): string {
  const n = Math.floor((taxa * ms) / 1000);
  const bytes = new Uint8Array(44 + n * 2);
  const dv = new DataView(bytes.buffer);
  const txt = (o: number, t: string) => t.split('').forEach((c, i) => dv.setUint8(o + i, c.charCodeAt(0)));
  txt(0, 'RIFF');
  dv.setUint32(4, 36 + n * 2, true);
  txt(8, 'WAVEfmt ');
  dv.setUint32(16, 16, true);
  dv.setUint16(20, 1, true);
  dv.setUint16(22, 1, true);
  dv.setUint32(24, taxa, true);
  dv.setUint32(28, taxa * 2, true);
  dv.setUint16(32, 2, true);
  dv.setUint16(34, 16, true);
  txt(36, 'data');
  dv.setUint32(40, n * 2, true);
  const hz = frequencia(midi);
  for (let i = 0; i < n; i++) {
    const t = i / taxa;
    const env = Math.min(1, t / 0.01) * Math.exp(-3.5 * t);
    const v = Math.sin(2 * Math.PI * hz * t) + 0.35 * Math.sin(4 * Math.PI * hz * t) + 0.15 * Math.sin(6 * Math.PI * hz * t);
    dv.setInt16(44 + i * 2, Math.round(v * env * 0.45 * 32767), true);
  }
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]!);
  return `data:audio/wav;base64,${btoa(bin)}`;
}
