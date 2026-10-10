import { toIpaEs, type EsVariant, type TracosEs } from '@/services/ipa-es';

/**
 * Traços de pronúncia de cada sotaque e dialeto do espanhol, para a IPA seguir o jeito de lá
 * (09/10/2026). Só entra o traço que o verbete descreve; o que o motor não representa (a melodia, o
 * golpe de glote do iucateco, o «tr» chileno) fica no texto. Fontes: Wikipédia em espanhol («Español
 * caribeño», «Español chileno», «Español andino», «Español centroamericano», «Español mexicano»,
 * consultadas em 09/10/2026) e o que elas citam (Lipski, Rabanales 2000, Lapesa).
 */
export const TRACOS_ES_SOTAQUES: Record<string, { base: EsVariant; tracos: Partial<TracosEs> }> = {
  // ── Espanha ──
  'es-andaluz': { base: '419', tracos: { sCoda: 'h', jota: 'h', dCai: true, ch: 'ʃ' } },
  'es-canario': { base: '419', tracos: { sCoda: 'h', jota: 'h' } },
  // ── México ──
  'es-norteno': { base: '419', tracos: { ch: 'ʃ' } },
  // ── Caribe ──
  'es-cubano': { base: '419', tracos: { sCoda: 'h', jota: 'h', dCai: true } },
  'es-boricua': { base: '419', tracos: { sCoda: 'h', jota: 'h', dCai: true, rCoda: 'l', rForte: 'χ' } },
  'es-dominicano': { base: '419', tracos: { sCoda: 'h', jota: 'h', dCai: true } },
  'es-venezuelano': { base: '419', tracos: { sCoda: 'h', jota: 'h', dCai: true } },
  'es-costeno': { base: '419', tracos: { sCoda: 'h', jota: 'h', dCai: true } },
  // ── América Central e Andes ──
  'es-tico': { base: '419', tracos: { rForte: 'ʐ' } },
  'es-andino': { base: '419', tracos: { rForte: 'ʐ' } },
  // ── Chile e Rio da Prata ──
  'es-chileno': { base: '419', tracos: { sCoda: 'h', dCai: true } },
  'es-porteno': { base: 'AR', tracos: { sCoda: 'h' } },
  'es-cordobes': { base: 'AR', tracos: { sCoda: 'h' } },
  // ── os dialetos (variants) ──
  'es-CL': { base: '419', tracos: { sCoda: 'h', dCai: true } },
  'es-caribe': { base: '419', tracos: { sCoda: 'h', jota: 'h', dCai: true } },
  'es-centroamerica': { base: '419', tracos: { jota: 'h' } },
};

/** A função de IPA de um sotaque ou dialeto, com os traços de lá (sem traços, a da variante dada). */
export function ipaEsDe(id: string, base: EsVariant): (text: string) => string {
  const t = TRACOS_ES_SOTAQUES[id];
  return t ? (text) => toIpaEs(text, t.base, t.tracos) : (text) => toIpaEs(text, base);
}
