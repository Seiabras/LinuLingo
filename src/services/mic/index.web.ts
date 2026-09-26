import { useCallback, useEffect, useRef, useState } from 'react';
import { detectPitch, rms } from '../pitch';
import type { MicCapture, MicSample } from './types';

export type { MicCapture, MicSample };

/** Microfone na web: Web Audio (volume + altura da voz) a ~20 amostras por segundo. */
export function useMicCapture(): MicCapture {
  const [recording, setRecording] = useState(false);
  const [samples, setSamples] = useState<MicSample[]>([]);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<{ ctx: AudioContext; stream: MediaStream; raf: number; acc: MicSample[] } | null>(null);

  const cleanup = useCallback(() => {
    const r = ref.current;
    if (!r) return [] as MicSample[];
    cancelAnimationFrame(r.raf);
    r.stream.getTracks().forEach((t) => t.stop());
    r.ctx.close().catch(() => {});
    ref.current = null;
    return r.acc;
  }, []);

  useEffect(
    () => () => {
      cleanup();
    },
    [cleanup],
  );

  const start = useCallback(async () => {
    setError(null);
    setSamples([]);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      const ctx = new AudioContext();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      ctx.createMediaStreamSource(stream).connect(analyser);
      const buf = new Float32Array(analyser.fftSize);
      const acc: MicSample[] = [];
      const t0 = performance.now();
      let last = 0;
      const loop = (now: number) => {
        if (now - last >= 50) {
          last = now;
          analyser.getFloatTimeDomainData(buf);
          acc.push({ t: now - t0, level: Math.min(1, rms(buf) * 4), pitch: detectPitch(buf, ctx.sampleRate) });
          setSamples(acc.slice());
        }
        if (ref.current) ref.current.raf = requestAnimationFrame(loop);
      };
      ref.current = { ctx, stream, raf: requestAnimationFrame(loop), acc };
      setRecording(true);
    } catch (e) {
      const name = (e as Error).name;
      setError(name === 'NotAllowedError' ? 'Permita o uso do microfone no navegador.' : 'Não consegui acessar o microfone.');
    }
  }, []);

  const stop = useCallback(async () => {
    const acc = cleanup();
    setRecording(false);
    return acc;
  }, [cleanup]);

  return { recording, samples, error, supportsPitch: true, start, stop };
}
