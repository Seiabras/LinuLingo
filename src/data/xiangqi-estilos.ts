import type { XiangqiPecas } from '@/services/jogos-prefs';

type CorX = 'r' | 'b';

/** Os estilos de peça (personalização): o disco, a borda e a cor dos caracteres de cada lado. */
export const ESTILOS_XIANGQI: Record<XiangqiPecas, { nome: string; disco: Record<CorX, string>; borda: Record<CorX, string>; letra: Record<CorX, string> }> = {
  classicas: { nome: 'Clássicas', disco: { r: '#F5E6C8', b: '#F5E6C8' }, borda: { r: '#B91C1C', b: '#1C1917' }, letra: { r: '#B91C1C', b: '#1C1917' } },
  jade: { nome: 'Jade', disco: { r: '#B9E2C6', b: '#B9E2C6' }, borda: { r: '#9F1239', b: '#0F2F1F' }, letra: { r: '#9F1239', b: '#0F2F1F' } },
  laca: { nome: 'Laca', disco: { r: '#B91C1C', b: '#1C1917' }, borda: { r: '#FDE68A', b: '#FDE68A' }, letra: { r: '#FDE68A', b: '#FDE68A' } },
  madeira: { nome: 'Madeira', disco: { r: '#D9A86C', b: '#D9A86C' }, borda: { r: '#7F1D1D', b: '#1C1917' }, letra: { r: '#7F1D1D', b: '#1C1917' } },
  pedra: { nome: 'Pedra', disco: { r: '#B8BDC4', b: '#B8BDC4' }, borda: { r: '#991B1B', b: '#111827' }, letra: { r: '#991B1B', b: '#111827' } },
};

