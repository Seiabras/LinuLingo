/**
 * O que os números por extenso das línguas românicas (pt, es, it, fr, ro) têm em comum: achar o
 * gênero do substantivo que vem depois do número no vocabulário do próprio idioma. O vocabulário só
 * traz a forma do dicionário (o singular); os plurais saem das regras de cada idioma, que geram
 * candidatos a mais (um «plural» que não existe não atrapalha: ninguém o escreve). Forma que aparece
 * com dois gêneros fica de fora, e o número cai na forma de contar.
 */
import type { Gender, VocabRow } from '@/data/types';

export type { Gender };

/** Forma (minúscula) → gênero dos substantivos do vocabulário, com os plurais que `plurals` gerar. */
export function nounGenders(
  rows: VocabRow[],
  plurals: (word: string, g: Gender) => string[],
  extra: Record<string, Gender> = {},
  notes?: (row: VocabRow) => [string, Gender][],
): Map<string, Gender> {
  const seen = new Map<string, Gender | null>();
  const add = (form: string, g: Gender) => {
    const f = form.trim().toLowerCase();
    if (!f || f.includes(' ')) return;
    seen.set(f, seen.has(f) && seen.get(f) !== g ? null : g);
  };
  for (const row of rows) {
    const g = row[6];
    if (row[2] !== 'substantivo' || !g) continue;
    const word = row[0].toLowerCase();
    add(word, g);
    for (const p of plurals(word, g)) if (p !== word) add(p, g);
    for (const [form, gn] of notes?.(row) ?? []) add(form, gn);
  }
  const map = new Map([...seen].filter((e): e is [string, Gender] => e[1] !== null));
  for (const [f, g] of Object.entries(extra)) map.set(f, g);
  return map;
}

/** Todas as formas dos adjetivos do vocabulário (masculino, feminino, plurais), para pular um adjetivo entre o número e o substantivo. */
export function adjectiveForms(rows: VocabRow[], forms: (word: string) => string[]): Set<string> {
  const out = new Set<string>();
  for (const row of rows) {
    if (row[2] !== 'adjetivo' || row[0].includes(' ')) continue;
    const word = row[0].toLowerCase();
    out.add(word);
    for (const f of forms(word)) out.add(f);
  }
  return out;
}

/** As palavras logo depois de `end` (sem pular pontuação: «2, casas» não concorda). */
export function wordsAfter(text: string, end: number): string[] {
  const m = text.slice(end, end + 80).match(/^(?:\s+\p{L}[\p{L}\p{M}-]*){1,4}/u);
  return m ? m[0].trim().toLowerCase().split(/\s+/) : [];
}

/**
 * O gênero do substantivo depois do número: a primeira palavra, ou a segunda se a primeira for um
 * adjetivo do vocabulário (duas grandes casas, deux petites filles). As palavras de `skip` ficam de
 * fora («2 mil pessoas» concorda com pessoas; em romeno, «22 de fete» com fete). Sem substantivo
 * conhecido, null.
 */
export function genderAfter(
  text: string,
  end: number,
  nouns: Map<string, Gender>,
  adjectives: Set<string>,
  skip: Set<string> = new Set(),
  guess?: (word: string) => Gender | null,
): Gender | null {
  const w = wordsAfter(text, end);
  while (w.length && skip.has(w[0])) w.shift();
  if (!w.length) return null;
  const g = nouns.get(w[0]);
  if (g) return g;
  if (w[1] && adjectives.has(w[0])) return nouns.get(w[1]) ?? null;
  return guess?.(w[0]) ?? null;
}

/** As palavras do vocabulário que não são substantivos (verbos, advérbios, preposições…), em minúscula. */
export function otherWords(rows: VocabRow[]): Set<string> {
  return new Set(rows.filter((r) => r[2] !== 'substantivo').flatMap((r) => r[0].toLowerCase().split(/\s+/)));
}

/**
 * Palpite para substantivo que o vocabulário não traz, em português, espanhol e italiano: -o(s)
 * masculino (libro, cuadernos), -a(s) feminino (cadeira, sillas). Só para palavras que não estão no
 * vocabulário como outra coisa (para, hasta, ancora) nem são palavras gramaticais (`stop`).
 */
export function guessByEnding(others: Set<string>, stop: Set<string>, plural: boolean): (word: string) => Gender | null {
  return (word) => {
    if (word.length < 3 || others.has(word) || stop.has(word)) return null;
    if (plural ? /os?$/.test(word) : /o$/.test(word)) return 'm';
    if (plural ? /as?$/.test(word) : /a$/.test(word)) return 'f';
    return null;
  };
}

/**
 * Os dígitos depois da vírgula: até dois lidos como número (3,5 = três vírgula cinco; 3,14 = três
 * vírgula catorze), mais que isso um a um; os zeros da frente sempre um a um (3,05 = três vírgula
 * zero cinco).
 */
export function decimalDigits(dec: string, spell: (n: number) => string): string {
  const lead = dec.match(/^0*/)![0].length;
  const rest = dec.slice(lead);
  const digits = rest.length > 2 ? [...rest].map(Number) : rest ? [Number(rest)] : [];
  return [...Array<number>(lead).fill(0), ...digits].map(spell).join(' ');
}
