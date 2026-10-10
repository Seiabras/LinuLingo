import { toIpaEn } from '@/services/ipa-en';

/**
 * Traços de pronúncia dos dialetos e sotaques do inglês (10/10/2026), aplicados sobre a transcrição de
 * referência (americana) do dicionário do app: o «r» do fim da sílaba que não soa (pronúncia não
 * rótica, como na Inglaterra, na Austrália, na Nova Zelândia, na África do Sul e no inglês tradicional
 * de Boston e de Nova York) e o ditongo de «go» como [əʊ] no RP. Fontes: Wikipédia em inglês
 * («Rhoticity in English», «Received Pronunciation», «Australian English phonology», «New Zealand
 * English phonology», «South African English phonology», consultadas em 10/10/2026).
 */
export interface TracosEn {
  rotico: boolean;
  goat: 'oʊ' | 'əʊ';
}

const VOGAL = 'aeiouɑɒɔəɛɪʊæʌɜɐ';

function aplicar(ipa: string, t: TracosEn): string {
  let out = ipa;
  if (!t.rotico) {
    // o r que não vem antes de vogal não soa; a vogal longa fica (car [kɑː], water [ˈwɔːtə])
    out = out.replace(/r(?![ˈˌ]?[aeiouɑɒɔəɛɪʊæʌɜɐ])/g, (m, i: number, s: string) => (VOGAL.includes(s[i - 1] ?? '') || s[i - 1] === 'ː' ? '' : m));
  }
  if (t.goat === 'əʊ') out = out.replace(/oʊ/g, 'əʊ');
  return out;
}

export const TRACOS_EN: Record<string, TracosEn> = {
  'en-GB': { rotico: false, goat: 'əʊ' },
  'en-rp': { rotico: false, goat: 'əʊ' },
  'en-cockney': { rotico: false, goat: 'oʊ' },
  'en-mle': { rotico: false, goat: 'oʊ' },
  'en-scouse': { rotico: false, goat: 'oʊ' },
  'en-geordie': { rotico: false, goat: 'oʊ' },
  'en-manchester': { rotico: false, goat: 'oʊ' },
  'en-yorkshire': { rotico: false, goat: 'oʊ' },
  'en-gales': { rotico: false, goat: 'oʊ' },
  'en-AU': { rotico: false, goat: 'oʊ' },
  'en-NZ': { rotico: false, goat: 'oʊ' },
  'en-ZA': { rotico: false, goat: 'oʊ' },
  'en-boston': { rotico: false, goat: 'oʊ' },
  'en-novayork': { rotico: false, goat: 'oʊ' },
};

/** A função de IPA de um dialeto ou sotaque, com os traços de lá (sem traços, a de referência). */
export function ipaEnDe(id: string): (text: string) => string {
  const t = TRACOS_EN[id];
  return t ? (text) => aplicar(toIpaEn(text), t) : (text) => toIpaEn(text);
}
