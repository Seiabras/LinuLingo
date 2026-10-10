import { toIpaSw, type TracosSw } from '@/services/ipa-africa';

/**
 * Traços de pronúncia dos dialetos e sotaques do suaíli, para a IPA seguir o jeito de lá (10/10/2026).
 * Fontes: Ferrari, Glottopol 20 (2012), para Lubumbashi (o r que vira l, o h que não soa); Swahili
 * Bridge, «Tanzanian Swahili vs Kenyan Swahili», para o Quênia (dh, th e gh simplificados).
 */
export const TRACOS_SW: Record<string, Partial<TracosSw>> = {
  'sw-KE': { arabes: 'simplificados' },
  'sw-sheng': { arabes: 'simplificados' },
  'sw-lubumbashi': { rL: true, hCai: true },
};

/** A função de IPA de um dialeto ou sotaque, com os traços de lá (sem traços, a do padrão). */
export function ipaSwDe(id: string): (text: string) => string {
  const t = TRACOS_SW[id];
  return t ? (text) => toIpaSw(text, t) : (text) => toIpaSw(text);
}
