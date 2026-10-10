import type { Accent, LanguageVariant } from './types';

/**
 * Dialetos feitos a partir de sotaques já escritos (decisão do dono, 10/10/2026): onde não há fonte
 * para as duas histórias, o dialeto entra com o resumo e os traços de pronúncia do sotaque que o
 * descrevia (com as fontes que já estão no comentário do arquivo de sotaques), sem histórias. No mundo
 * ideal, todo dialeto ganha um curso próprio até o teto, como um idioma do app (ver PENDENTES.md).
 */

/**
 * Marca a que dialeto pertence cada sotaque de um idioma.
 * - `iguais`: o sotaque que é o próprio dialeto (fica com `sameAsVariant` e aparece dentro dele);
 * - `outros`: os sotaques e as línguas que ficam dentro de um dialeto que não é o padrão;
 * - `livres`: os que atravessam mais de um dialeto, de propósito (ficam sem `variant`);
 * - o resto dos sotaques vai para o dialeto padrão. As línguas sem dono continuam sem `variant`.
 */
export function noDialeto(
  accents: Accent[],
  padrao: string,
  opts: { iguais?: Record<string, string>; outros?: Record<string, string>; livres?: string[] },
): Accent[] {
  const { iguais = {}, outros = {}, livres = [] } = opts;
  for (const id of [...Object.keys(iguais), ...Object.keys(outros), ...livres]) {
    if (!accents.some((a) => a.id === id)) throw new Error(`noDialeto: sotaque ${id} não existe`);
  }
  return accents.map((a) => {
    if (iguais[a.id]) return { ...a, variant: iguais[a.id], sameAsVariant: iguais[a.id] };
    if (outros[a.id]) return { ...a, variant: outros[a.id] };
    if (livres.includes(a.id) || a.variant || a.kind === 'língua') return a;
    return { ...a, variant: padrao };
  });
}

/** O dialeto descrito por um sotaque: o resumo e os traços dele viram o cartão de pronúncia. */
export function dialetoDe(accents: Accent[], id: string, code: string, name: string, flag: string, extra: Partial<LanguageVariant> = {}): LanguageVariant {
  const a = accents.find((x) => x.id === id);
  if (!a) throw new Error(`dialetoDe: sotaque ${id} não existe`);
  return { code, country: a.country, kind: 'dialeto', name, flag, summary: a.summary, pronunciation: a.features, ...extra };
}

/** O dialeto padrão do curso. */
export function dialetoPadrao(code: string, country: string, name: string, flag: string, summary: string): LanguageVariant {
  return { code, country, kind: 'dialeto', name, flag, summary };
}
