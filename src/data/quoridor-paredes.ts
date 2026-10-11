import type { QuoridorParede } from '@/services/jogos-prefs';

/** As paredes do Quoridor (personalização, pedido do dono de 11/10/2026): a cor, o contorno e o jeito. */
export const PAREDES_QUORIDOR: Record<QuoridorParede, { nome: string; cor: string; contorno: string; raio: number; borda?: string; tracejada?: boolean }> = {
  madeira: { nome: 'Madeira', cor: '#8B5A2B', contorno: '#4A2C0F', raio: 3 },
  pedra: { nome: 'Pedra', cor: '#6B7280', contorno: '#374151', raio: 1, borda: '#D1D5DB' },
  gelo: { nome: 'Gelo', cor: '#BAE6FD', contorno: '#0284C7', raio: 4, borda: '#0284C7' },
  cerca: { nome: 'Cerca viva', cor: '#2F7D32', contorno: '#14532D', raio: 6, borda: '#86EFAC', tracejada: true },
};
