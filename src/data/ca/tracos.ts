import { toIpaCa, type TracosCa } from '@/services/ipa-ca';

/**
 * Traços de pronúncia de cada dialeto e sotaque do catalão, para a IPA seguir o jeito de lá
 * (09/10/2026). Só entra o que o motor representa; o resto (o «o» tônico fechado que soa [u] no
 * Rosselló, o «r» de coda que vira [l] em l'Alguer) fica no texto. Fontes: Wikipédia em catalão
 * («Valencià», «Català nord-occidental», «Rossellonès», «Alguerès», consultadas em 09/10/2026).
 */
export const TRACOS_CA: Record<string, Partial<TracosCa>> = {
  // ── dialetos (variants) ──
  'ca-VC': { atonas: 'ocidental', vLabiodental: true, xInicial: 'tʃ', jota: 'dʒ', rFinal: true, ixDitongo: true },
  'ca-AD': { atonas: 'ocidental', xInicial: 'tʃ' },
  'ca-FR': { rFinal: true },
  'ca-IT': { atonas: 'alguer', vLabiodental: true, jota: 'dʒ', rotacismo: true },
  // ── sotaques ──
  'ca-nordoccidental': { atonas: 'ocidental', xInicial: 'tʃ' },
  'ca-balear': { vLabiodental: true },
};

/** A função de IPA de um dialeto ou sotaque, com os traços de lá (sem traços, a do central). */
export function ipaCaDe(id: string): (text: string) => string {
  const t = TRACOS_CA[id];
  return t ? (text) => toIpaCa(text, t) : (text) => toIpaCa(text);
}
