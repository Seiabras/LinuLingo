import { toIpaPt, type PtNorm, type TracosPt } from '@/services/ipa-pt';

/**
 * Traços de pronúncia de cada sotaque e dialeto do português, para a IPA seguir o jeito de lá
 * (pedido do dono do app, 09/10/2026). Só entra o traço que o verbete descreve e que tem fonte:
 * o que o motor de IPA não sabe representar (a melodia, o «l» palatal da Madeira, as quatro
 * sibilantes de Trás-os-Montes) fica só no texto do verbete.
 */
export const TRACOS_SOTAQUES: Record<string, { norma: PtNorm; tracos: Partial<TracosPt> }> = {
  // ── Brasil ──
  'pt-carioca': { norma: 'BR', tracos: { sCoda: 'ʃ', rCoda: 'χ' } },
  'pt-paulistano': { norma: 'BR', tracos: { rCoda: 'ɾ' } },
  'pt-caipira': { norma: 'BR', tracos: { rCoda: 'ɻ' } },
  'pt-baiano': { norma: 'BR', tracos: { pretonicaAberta: true } },
  'pt-pernambucano': { norma: 'BR', tracos: { sCoda: 'ʃtd', palatalTD: 'apos-j', pretonicaAberta: true } },
  'pt-cearense': { norma: 'BR', tracos: { sCoda: 'ʃtd-ɦ', pretonicaAberta: true } },
  'pt-maranhense': { norma: 'BR', tracos: { sCoda: 'ʃtd', pretonicaAberta: true } },
  'pt-paraense': { norma: 'BR', tracos: { sCoda: 'ʃ' } },
  'pt-amazonense': { norma: 'BR', tracos: { sCoda: 'ʃ' } },
  'pt-cuiabano': { norma: 'BR', tracos: { ch: 't͡ʃ', j: 'd͡ʒ' } },
  'pt-curitibano': { norma: 'BR', tracos: { rCoda: 'ɾ', eFinal: 'e' } },
  // o do interior e da fronteira, que é o que o verbete descreve; Porto Alegre chia como o resto do país
  'pt-gaucho': { norma: 'BR', tracos: { rCoda: 'ɾ', eFinal: 'e', palatalTD: 'nunca' } },
  'pt-manezinho': { norma: 'BR', tracos: { sCoda: 'ʃ' } },
  // ── Portugal ──
  'pt-portuense': { norma: 'PT', tracos: { betacismo: true, ou: 'ow', ei: 'ej' } },
  'pt-transmontano': { norma: 'PT', tracos: { ch: 't͡ʃ', betacismo: true, ou: 'ow', ei: 'ej' } },
  'pt-alentejano': { norma: 'PT', tracos: { ei: 'e' } },
  'pt-algarvio': { norma: 'PT', tracos: { ei: 'e' } },
  'pt-acoriano': { norma: 'PT', tracos: { uTonico: 'y' } },
  // ── os dialetos nacionais (variants) ──
  'pt-AO': { norma: 'PT', tracos: { atonas: 'plenas', eFinal: 'e' } },
  'pt-MZ': { norma: 'PT', tracos: { atonas: 'plenas', eFinal: 'i', rFinalCai: true, rForte: 'ɾ' } },
  // as ilhas de Sotavento (a Praia); no Barlavento o «e» mudo cai
  'pt-CV': { norma: 'PT', tracos: { ei: 'ej', ou: 'ow', eFinal: 'i' } },
  'pt-ST': { norma: 'PT', tracos: { atonas: 'plenas', eFinal: 'i' } },
  'pt-TL': { norma: 'PT', tracos: { atonas: 'plenas' } },
  'pt-barrancos': { norma: 'PT', tracos: { sCoda: 'h', j: 'x', rFinalCai: true, betacismo: true, eFinal: 'i', ei: 'e' } },
};

/** A função de IPA de um sotaque ou dialeto, com os traços de lá (sem traços cadastrados, a da norma). */
export function ipaDe(id: string, norma: PtNorm): (text: string) => string {
  const t = TRACOS_SOTAQUES[id];
  return t ? (text) => toIpaPt(text, t.norma, undefined, t.tracos) : (text) => toIpaPt(text, norma);
}
