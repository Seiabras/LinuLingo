import { useCallback, useEffect, useRef, useState } from 'react';
import { detectPitch, rms } from '../pitch';
import type { MicCapture, MicSample } from './types';

export type { MicCapture, MicSample };

/** Microfone na web: Web Audio (volume + altura da voz) a ~20 amostras por segundo. */
export function useMicCapture(): MicCapture {
  const [recording, setRecording] = useState(false);
  const [samples, setSamples] = useState<MicSample[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [uri, setUri] = useState<string | null>(null);
  const ref = useRef<{ ctx: AudioContext; stream: MediaStream; raf: number; acc: MicSample[]; recorder: MediaRecorder; chunks: BlobPart[] } | null>(null);
  const lastUri = useRef<string | null>(null);

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
      if (lastUri.current) URL.revokeObjectURL(lastUri.current);
    },
    [cleanup],
  );

  const start = useCallback(async () => {
    setError(null);
    setSamples([]);
    setUri(null);
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
      // gravação de verdade (pro "ouvir minha gravação"), no mesmo stream do analisador de pitch
      const chunks: BlobPart[] = [];
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      recorder.start();
      ref.current = { ctx, stream, raf: requestAnimationFrame(loop), acc, recorder, chunks };
      setRecording(true);
    } catch (e) {
      const name = (e as Error).name;
      setError(name === 'NotAllowedError' ? 'Permita o uso do microfone no navegador.' : 'Não consegui acessar o microfone.');
    }
  }, []);

  const stop = useCallback(async () => {
    const r = ref.current;
    // espera o MediaRecorder soltar o último pedaço de áudio antes de parar as faixas do stream
    // (parar o stream antes pode truncar a gravação)
    if (r && r.recorder.state !== 'inactive') {
      await new Promise<void>((resolve) => {
        r.recorder.addEventListener('stop', () => resolve(), { once: true });
        r.recorder.stop();
      });
    }
    const acc = cleanup();
    setRecording(false);
    if (r && r.chunks.length > 0) {
      if (lastUri.current) URL.revokeObjectURL(lastUri.current);
      const url = URL.createObjectURL(new Blob(r.chunks, { type: r.recorder.mimeType }));
      lastUri.current = url;
      setUri(url);
    }
    return acc;
  }, [cleanup]);

  return { recording, samples, error, supportsPitch: true, uri, start, stop };
}
