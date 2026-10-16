// As duas músicas da tela inicial, compostas pelo dono do LinuLingo para o app (16/10/2026).
// Recodificadas em MP3 de 128 kbps a partir dos arquivos originais.

import type { MusicaId } from '@/services/musica-inicio';

export type { MusicaId };

export interface MusicaInicio {
  src: number;
  nome: string;
}

/** Na ordem em que o botão de som passa por elas: desligado → tranquila → pesada → desligado. */
export const MUSICAS_INICIO: Record<MusicaId, MusicaInicio> = {
  tranquila: { src: require('../../assets/musicas/tranquila.mp3'), nome: 'Música tranquila' },
  pesada: { src: require('../../assets/musicas/pesada.mp3'), nome: 'Música pesada' },
};
