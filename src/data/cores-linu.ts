/**
 * As cores do Linu — estilo Club Penguin: o aluno escolhe a cor do corpo dele (a parte escura, o
 * «boné» e as costas), a barriga branca não muda. Guardada em Meta junto com a roupinha
 * (src/services/linu-cor.ts). `corpo` e `nadadeira` são os degradês usados em Linu.tsx (claro, meio,
 * escuro), no mesmo estilo do azul original.
 */
export interface CorLinu {
  id: string;
  label: string;
  /** cor única para mostrar a bolinha da cor no seletor */
  swatch: string;
  corpo: [string, string, string];
  nadadeira: [string, string];
}

export const CORES_LINU: CorLinu[] = [
  { id: 'padrao', label: 'Azul-marinho', swatch: '#253153', corpo: ['#4A5A82', '#253153', '#121A2F'], nadadeira: ['#3A4A72', '#121A2F'] },
  { id: 'vermelho', label: 'Vermelho', swatch: '#B91C1C', corpo: ['#EF6B6B', '#B91C1C', '#5B0F0F'], nadadeira: ['#DC5050', '#5B0F0F'] },
  { id: 'laranja', label: 'Laranja', swatch: '#EA580C', corpo: ['#FDBA74', '#EA580C', '#7C2D12'], nadadeira: ['#F2934D', '#7C2D12'] },
  { id: 'amarelo', label: 'Amarelo', swatch: '#D97706', corpo: ['#FDE68A', '#D97706', '#78350F'], nadadeira: ['#F0B94A', '#78350F'] },
  { id: 'verde', label: 'Verde', swatch: '#15803D', corpo: ['#6EE7B7', '#15803D', '#052E16'], nadadeira: ['#34C97A', '#052E16'] },
  { id: 'agua', label: 'Água', swatch: '#0E7490', corpo: ['#67E8F9', '#0E7490', '#083344'], nadadeira: ['#22B8D8', '#083344'] },
  { id: 'roxo', label: 'Roxo', swatch: '#7C3AED', corpo: ['#C4B5FD', '#7C3AED', '#2E1065'], nadadeira: ['#9F75E8', '#2E1065'] },
  { id: 'rosa', label: 'Rosa', swatch: '#DB2777', corpo: ['#FBCFE8', '#DB2777', '#831843'], nadadeira: ['#EC5FA3', '#831843'] },
  { id: 'marrom', label: 'Marrom', swatch: '#92400E', corpo: ['#D6A15E', '#92400E', '#451A03'], nadadeira: ['#B97A3D', '#451A03'] },
  { id: 'cinza', label: 'Cinza', swatch: '#64748B', corpo: ['#CBD5E1', '#64748B', '#1E293B'], nadadeira: ['#94A3B8', '#1E293B'] },
  { id: 'preto', label: 'Preto', swatch: '#27272A', corpo: ['#6B7280', '#27272A', '#09090B'], nadadeira: ['#4B5563', '#09090B'] },
  { id: 'branco', label: 'Branco', swatch: '#D1D5DB', corpo: ['#FFFFFF', '#E5E7EB', '#9CA3AF'], nadadeira: ['#F1F5F9', '#9CA3AF'] },
];

const DEFAULT_COR = CORES_LINU[0];

/** A cor com esse id, ou a padrão (azul) se não existir. */
export function corLinu(id: string | null | undefined): CorLinu {
  return CORES_LINU.find((c) => c.id === id) ?? DEFAULT_COR;
}
