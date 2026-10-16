// Escolha da música da tela inicial (sem os arquivos de áudio, para poder testar no Node).

export type MusicaId = 'tranquila' | 'pesada';

/** A próxima escolha do botão de som. */
export function proximaMusica(atual: MusicaId | null): MusicaId | null {
  if (atual === null) return 'tranquila';
  if (atual === 'tranquila') return 'pesada';
  return null;
}

/**
 * Lê o que ficou salvo na Meta «som_ambiente». O valor antigo «1» (som ambiente ligado, antes das
 * músicas) vira a música tranquila.
 */
export function musicaSalva(v: string | null): MusicaId | null {
  if (v === 'tranquila' || v === 'pesada') return v;
  if (v === '1') return 'tranquila';
  return null;
}
