import { useCallback, useEffect, useRef, useState } from 'react';
import { AudioModule, RecordingPresets, setAudioModeAsync, useAudioRecorder } from 'expo-audio';
import type { MicCapture, MicSample } from './types';

export type { MicCapture, MicSample };

/** Microfone no app nativo: expo-audio com medição de volume (sem altura da voz). */
export function useMicCapture(): MicCapture {
  const recorder = useAudioRecorder({ ...RecordingPresets.LOW_QUALITY, isMeteringEnabled: true });
  const [recording, setRecording] = useState(false);
  const [samples, setSamples] = useState<MicSample[]>([]);
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const acc = useRef<MicSample[]>([]);

  useEffect(() => () => {
    if (timer.current) clearInterval(timer.current);
  }, []);

  const start = useCallback(async () => {
    setError(null);
    setSamples([]);
    acc.current = [];
    const perm = await AudioModule.requestRecordingPermissionsAsync();
    if (!perm.granted) {
      setError('Permita o uso do microfone nas configurações do aparelho.');
      return;
    }
    await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });
    await recorder.prepareToRecordAsync();
    recorder.record();
    setRecording(true);
    timer.current = setInterval(() => {
      const s = recorder.getStatus();
      // metering vem em dB (−160 a 0): converte para 0–1
      const level = s.metering === undefined ? 0 : Math.max(0, Math.min(1, (s.metering + 60) / 60));
      acc.current.push({ t: s.durationMillis, level, pitch: null });
      setSamples(acc.current.slice());
    }, 60);
  }, [recorder]);

  const stop = useCallback(async () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    await recorder.stop();
    await setAudioModeAsync({ allowsRecording: false, playsInSilentMode: true });
    setRecording(false);
    return acc.current;
  }, [recorder]);

  return { recording, samples, error, supportsPitch: false, start, stop };
}
