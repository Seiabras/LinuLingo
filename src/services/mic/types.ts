export interface MicSample {
  /** ms desde o início da gravação */
  t: number;
  /** volume 0–1 */
  level: number;
  /** altura da voz em Hz (null em silêncio ou quando o aparelho não mede) */
  pitch: number | null;
}

export interface MicCapture {
  recording: boolean;
  samples: MicSample[];
  error: string | null;
  /** O aparelho mede a altura da voz (entonação)? */
  supportsPitch: boolean;
  start: () => Promise<void>;
  stop: () => Promise<MicSample[]>;
}
