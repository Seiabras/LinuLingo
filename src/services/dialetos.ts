import { PACKS } from '@/data/idiomas';
import { nomeIdioma } from '@/services/idioma-nome';
import type { Accent, LanguagePack, LanguageVariant } from '@/data/types';

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

/** Os dialetos nacionais/regionais de verdade de um pacote (2+ entradas de dialeto em `variants`). */
export function realDialects(pack: LanguagePack): LanguageVariant[] {
  const variants = pack.variants ?? [];
  const dialects = variants.filter((v) => v.kind === 'dialeto' || !v.kind);
  return dialects.length >= 2 ? dialects : [];
}

/**
 * Sotaques e dialetos regionais (`pack.accents`) restritos ao dialeto/variante ativo, quando o
 * idioma tem 2+ entradas em `variants` (pedido do Matheus, 08/10/2026: a lista de sotaques da
 * Cultura "não fazia muito sentido" misturando sotaques do Brasil com os de Portugal, por exemplo;
 * estendido ao mesmo escopo pro norueguês, bokmål×nynorsk, onde o mesmo problema existia — ver a
 * seção de PENDENTES.md sobre isso). Quem não tem `variant` definido continua aparecendo sempre,
 * com qualquer dialeto/variante ativo — não é erro, é que genuinamente atravessa mais de um (ex.
 * `ro-moldovenesc`, dos dois lados do Prut; o `ko-koryomar`, que não segue nem a norma de Seul nem a
 * de Pyongyang; o `fr-afrique`, que cobre vários países africanos de uma vez) — ver o comentário de
 * cada um nos arquivos `sotaques.ts` de cada idioma. Idiomas com só 1 entrada em `variants` (a
 * maioria) não filtram nada: `dialectCode` não importa. O chamador (`AccentsPanel.tsx`) decide o
 * `dialectCode` olhando `pack.variants.length`, não `kind` — esta função não precisa saber se é
 * dialeto ou variante de escrita, só compara o código.
 */
export function accentsForDialect(pack: LanguagePack, dialectCode: string | null): Accent[] {
  const accents = pack.accents ?? [];
  if ((pack.variants ?? []).length < 2 || !dialectCode) return accents;
  return accents.filter((a) => !a.variant || a.variant === dialectCode);
}

/** «Dinamarquês da Dinamarca» → «Dinamarca» (só o lugar). */
export function shortVariantName(name: string): string {
  return name.replace(/^\S+ d[aoe]s? /, '');
}
