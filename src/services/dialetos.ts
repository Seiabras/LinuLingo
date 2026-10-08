import { PACKS } from '@/data/idiomas';
import { nomeIdioma } from '@/services/idioma-nome';
import type { LanguagePack, LanguageVariant } from '@/data/types';

export interface DialectGroup {
  pack: LanguagePack;
  dialects: LanguageVariant[];
}

/**
 * Separa os pacotes em dois grupos pela taxonomia de dialeto (04/10/2026, decisão do dono do app):
 * `real` tem 2+ entradas de dialeto (comparação de verdade possível); `unico` tem só a forma
 * padrão cadastrada (não é dialeto, só não há com o que comparar ainda). Variantes de ESCRITA
 * (`kind: 'variante'`, ex. bokmål×nynorsk, chinês tradicional×pinyin) nunca entram aqui.
 */
export function splitPacks(): { real: DialectGroup[]; unico: LanguagePack[] } {
  const real: DialectGroup[] = [];
  const unico: LanguagePack[] = [];
  const seen = new Set<string>();
  for (const pack of Object.values(PACKS)) {
    if (seen.has(pack.code)) continue;
    seen.add(pack.code);
    const variants = pack.variants ?? [];
    const dialects = variants.filter((v) => v.kind === 'dialeto' || !v.kind);
    if (dialects.length >= 2) real.push({ pack, dialects });
    else if (dialects.length === 1) unico.push(pack);
  }
  real.sort((a, b) => nomeIdioma(a.pack.name).localeCompare(nomeIdioma(b.pack.name), 'pt'));
  unico.sort((a, b) => nomeIdioma(a.name).localeCompare(nomeIdioma(b.name), 'pt'));
  return { real, unico };
}

/** «Dinamarquês da Dinamarca» → «Dinamarca» (só o lugar). */
export function shortVariantName(name: string): string {
  return name.replace(/^\S+ d[aoe]s? /, '');
}
