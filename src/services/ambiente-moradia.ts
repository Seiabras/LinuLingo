import type { MoradiaId } from '@/components/PixelShelter';
import type { SomAmbienteId } from '@/data/sons-ambiente';

/** Qual som ambiente toca em cada moradia do Linu (nas casas do país, silêncio). */
export function somDaMoradia(id: MoradiaId): SomAmbienteId | null {
  if (id === 'barraca' || id === 'estacao') return 'vento';
  if (id === 'refugio') return 'pinguins';
  if (id === 'navio') return 'mar';
  return null;
}
