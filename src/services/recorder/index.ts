/**
 * Gravação curta de voz para mandar a um colega. No aparelho, por enquanto, só pelo site (o app
 * publicado é o site); aqui fica a versão que diz que não dá.
 */
export interface ClipRecorder {
  supported: boolean;
  recording: boolean;
  /** milissegundos gravados até agora */
  elapsed: number;
  error: string | null;
  /** grava até maxMs; se o tempo acabar antes do stop, entrega o áudio em onLimit */
  start: (maxMs: number, onLimit?: (clip: string | null) => void) => Promise<void>;
  /** para e devolve o áudio (data URI) ou null */
  stop: () => Promise<string | null>;
}

export function useClipRecorder(): ClipRecorder {
  return { supported: false, recording: false, elapsed: 0, error: null, start: async () => {}, stop: async () => null };
}
