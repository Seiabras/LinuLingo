import { useCallback, useEffect, useRef, useState } from 'react';
import type { ClipRecorder } from './index';

export type { ClipRecorder };

/** O formato que o navegador grava: Opus no WebM (Chrome, Firefox) ou AAC no MP4 (Safari). */
function pickMime(): string | undefined {
  if (typeof MediaRecorder === 'undefined') return undefined;
  return ['audio/webm;codecs=opus', 'audio/ogg;codecs=opus', 'audio/mp4', 'audio/webm'].find((m) => MediaRecorder.isTypeSupported(m));
}

const toDataUri = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(r.error);
    r.readAsDataURL(blob);
  });

/** Grava até `maxMs` com o MediaRecorder, em qualidade de voz (16 kbit/s): 10 s cabem num link. */
export function useClipRecorder(): ClipRecorder {
  const supported = typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== 'undefined';
  const [recording, setRecording] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<{ rec: MediaRecorder; stream: MediaStream; chunks: Blob[]; t0: number; timer: ReturnType<typeof setInterval>; limit: ReturnType<typeof setTimeout>; done: Promise<string | null> } | null>(null);

  const finish = useCallback(async (): Promise<string | null> => {
    const r = ref.current;
    if (!r) return null;
    clearInterval(r.timer);
    clearTimeout(r.limit);
    if (r.rec.state !== 'inactive') r.rec.stop();
    const out = await r.done;
    r.stream.getTracks().forEach((t) => t.stop());
    ref.current = null;
    setRecording(false);
    return out;
  }, []);

  useEffect(
    () => () => {
      finish();
    },
    [finish],
  );

  const start = useCallback(
    async (maxMs: number, onLimit?: (clip: string | null) => void) => {
      setError(null);
      setElapsed(0);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
        const mimeType = pickMime();
        const rec = new MediaRecorder(stream, { ...(mimeType ? { mimeType } : {}), audioBitsPerSecond: 16_000 });
        const chunks: Blob[] = [];
        rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
        const done = new Promise<string | null>((resolve) => {
          rec.onstop = () => (chunks.length ? toDataUri(new Blob(chunks, { type: rec.mimeType || mimeType || 'audio/webm' })).then(resolve, () => resolve(null)) : resolve(null));
        });
        const t0 = Date.now();
        const timer = setInterval(() => setElapsed(Math.min(maxMs, Date.now() - t0)), 200);
        // no limite, para sozinho e entrega o áudio
        const limit = setTimeout(() => {
          finish().then((clip) => onLimit?.(clip));
        }, maxMs);
        ref.current = { rec, stream, chunks, t0, timer, limit, done };
        rec.start(250);
        setRecording(true);
      } catch (e) {
        setError((e as Error)?.name === 'NotAllowedError' ? 'O navegador não deixou usar o microfone.' : 'Não deu para gravar neste navegador.');
      }
    },
    [finish],
  );

  return { supported, recording, elapsed, error, start, stop: finish };
}
