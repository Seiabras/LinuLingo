/**
 * A leitura dos números que o sueco, o norueguês, o dinamarquês e o islandês têm em comum: cada
 * idioma dá as palavras (./sv.ts, ./nb.ts, ./da.ts, ./is.ts) e este arquivo acha os números no
 * texto e decide como ler cada um — hora («kl. 14.30»), data («17. mai», «den 6 juni»), ordinal
 * («3:e», «5. klasse»), ano («i 1814»), século e década («1800-tallet», «30-årene»), decimal
 * («3,5»), milhar («10 000», «1.500»), porcentagem, coroas e euros, e o número de emergência
 * («ring 112», dígito por dígito).
 *
 * Nunca mexe em algarismos grudados em letras (V2, 3D, mp3, A1.1, 4x4, 1º).
 */
import type { VocabRow } from '@/data/types';

export type Unidade = 'kr' | '€' | '$' | '£' | '%';

export interface RegrasNordicas<F> {
  /** Separadores de milhar aceitos (classe de caracteres de regex). */
  milhar: string;
  /** «17. mai»: ordinal escrito com ponto (norueguês, dinamarquês, islandês; o sueco não usa). */
  ordinalComPonto: boolean;
  meses: string[];
  /** O texto antes do número pede a hora: «kl.», «klockan»… */
  relogio: RegExp;
  /** O texto antes do número é de telefone de emergência: «ring 112». */
  emergencia: RegExp;
  /** A forma do número (gênero, caso) pelo que vem antes e depois dele. */
  forma(antes: string, depois: string, n: number): F;
  horas: F;
  contar: F;
  cardinal(n: number, f: F): string;
  /** Ano lido em centenas («nittonhundrafyrtiosex»), de 1100 a 1999; fora disso, null. */
  ano(n: number): string | null;
  /** Ordinal no contexto (gênero e caso do substantivo que vem depois, quando o idioma pede). */
  ordinal(n: number, antes: string, depois: string): string;
  /** «1800-tallet», «30-årene», «22-tiden». */
  composto(n: number, sufixo: string): string;
  /** «60'erne» (dinamarquês); null deixa como está. */
  apostrofo?(n: number, sufixo: string): string | null;
  /** «kl. 14.30» */
  hora(h: number, min: number): string;
  virgula: string;
  /** A unidade por extenso e a forma que o número toma diante dela. */
  unidade(u: Unidade, n: number, decimal: boolean, antes: string): { palavra: string; forma: F };
  /** A palavra logo depois é um substantivo? Então «1300 år» não é ano. */
  temSubstantivo(depois: string): boolean;
}

/** As duas primeiras palavras depois do número. */
export function proximasPalavras(depois: string): string[] {
  const m = depois.match(/^\s+([\p{L}]+)(?:\s+([\p{L}]+))?/u);
  return m ? [m[1], m[2]].filter((w): w is string => !!w).map((w) => w.toLowerCase()) : [];
}

/**
 * Forma (minúscula) → gênero, pelo vocabulário: a palavra do dicionário e as formas anotadas na
 * tradução («(pl. hundar)», «(gen. …)»). Formas de dois gêneros ficam de fora.
 */
export function mapaDeGenero<G extends string>(rows: VocabRow[], extra: Record<string, G>, anotacao = /\bpl\. ([^;)]+)/g): Map<string, G> {
  const seen = new Map<string, G | null>();
  const add = (form: string, g: G) => {
    const f = form.trim().toLowerCase();
    if (!f || /[^\p{L}]/u.test(f)) return;
    seen.set(f, seen.has(f) && seen.get(f) !== g ? null : g);
  };
  for (const row of rows) {
    const g = row[6];
    if (row[2] !== 'substantivo' || !g) continue;
    add(row[0], g as G);
    for (const m of row[1].matchAll(anotacao)) for (const alt of m[1].split(/[/,]| el\. | eller /)) add(alt, g as G);
  }
  const map = new Map([...seen].filter((e): e is [string, G] => e[1] !== null));
  for (const [f, g] of Object.entries(extra)) map.set(f, g);
  return map;
}

/**
 * As formas dos adjetivos do vocabulário: a do dicionário, as anotadas na tradução («(stort,
 * store)») e as regulares (raiz + terminação). Servem para pular um adjetivo entre o número e o
 * substantivo — e só um adjetivo: em «i 1814 fikk Norge» a palavra seguinte é verbo, não se pula.
 */
export function mapaDeAdjetivos(rows: VocabRow[], terminacoes: string[], raiz: (base: string) => string = (b) => b): Set<string> {
  const set = new Set<string>();
  for (const row of rows) {
    if (row[2] !== 'adjetivo') continue;
    const base = row[0].toLowerCase();
    if (/[^\p{L}]/u.test(base)) continue;
    set.add(base);
    for (const t of terminacoes) set.add(raiz(base) + t);
    for (const m of row[1].matchAll(/\(([^()]+)\)/g)) for (const w of m[1].split(/[,;/]\s*/)) if (/^\p{L}+$/u.test(w.trim())) set.add(w.trim().toLowerCase());
  }
  return set;
}

/** O gênero do substantivo depois do número, pulando um adjetivo conhecido no meio. */
export function generoDepois<G>(depois: string, mapa: Map<string, G>, adjetivos: Set<string>): G | null {
  const [a, b] = proximasPalavras(depois);
  if (!a) return null;
  return mapa.get(a) ?? (b && adjetivos.has(a) ? mapa.get(b) : undefined) ?? null;
}

const UNIDADE = /^\s?(kr\.?|%|€|£|\$)(?![\p{L}\d])/u;

/** Troca os números do texto pelas palavras, com as regras de um idioma. */
export function spellNordic<F>(text: string, r: RegrasNordicas<F>): string {
  const re = new RegExp(
    String.raw`(?<![\p{L}\d])(?<!\d:)(?<!\p{L}[\d.,:/]*)(?:(?<cur>[€$£]|kr\.?)\s?)?(?:` +
      String.raw`(?<hh>\d{1,2})[.:](?<mm>\d{2})(?![\p{L}\d]|[.,]\d)` +
      String.raw`|(?<on>\d+):(?<os>[ae])(?![\p{L}\d])` +
      String.raw`|(?<cn>\d+)-(?<cs>\p{Ll}+)` +
      String.raw`|(?<an>\d+)['’](?<as>\p{Ll}+)` +
      String.raw`|(?<num>\d{1,3}(?:${r.milhar}\d{3})+(?!\d)|\d+)(?:,(?<dec>\d+))?(?![\p{L}\d]))`,
    'gu',
  );
  let out = '';
  let last = 0;
  for (const m of text.matchAll(re)) {
    const g = m.groups ?? {};
    let start = m.index ?? 0;
    let end = start + m[0].length;
    const antes = text.slice(0, start);
    let spoken: string | null = null;
    // moeda só antes de um número simples («€5»); o resto fica como está
    if (g.cur && !g.num) continue;
    if (g.hh) {
      const h = Number(g.hh);
      const min = Number(g.mm);
      if (h <= 24 && min <= 59) spoken = r.hora(h, min);
    } else if (g.on) {
      spoken = r.ordinal(Number(g.on), antes, text.slice(end));
    } else if (g.cn) {
      spoken = r.composto(Number(g.cn), g.cs);
    } else if (g.an) {
      spoken = r.apostrofo?.(Number(g.an), g.as) ?? null;
    } else if (g.num) {
      const res = numero(text, start, end, g.num, g.dec, g.cur, r);
      spoken = res.spoken;
      end = res.end;
      start = res.start;
    }
    if (spoken === null) continue;
    out += text.slice(last, start) + spoken;
    last = end;
  }
  return out + text.slice(last);
}

const PALAVRA_DEPOIS = /^\.?\s+(\p{L}+)/u;

function numero<F>(text: string, start: number, end: number, raw: string, dec: string | undefined, cur: string | undefined, r: RegrasNordicas<F>): { spoken: string | null; start: number; end: number } {
  const antes = text.slice(0, start);
  let depois = text.slice(end);
  const n = Number(raw.replace(/\D/g, ''));
  if (n >= 1e9) return { spoken: null, start, end };
  const agrupado = /\D/.test(raw);

  // «kr 100,-»
  if (!dec && depois.startsWith(',-')) {
    end += 2;
    depois = depois.slice(2);
  }

  // unidade antes («€5», «kr. 1.500») ou depois («5 %», «1.500 kr.»)
  let unidade: Unidade | null = cur ? (cur.startsWith('kr') ? 'kr' : (cur as Unidade)) : null;
  let pontoFinal = '';
  const u = unidade ? null : depois.match(UNIDADE);
  if (u) {
    unidade = u[1].startsWith('kr') ? 'kr' : (u[1] as Unidade);
    end += u[0].length;
    depois = text.slice(end);
    // o ponto de «kr.» também fecha a frase
    if (u[1] === 'kr.' && (/^\s*$/.test(depois) || /^\s+\p{Lu}/u.test(depois))) pontoFinal = '.';
  }
  if (unidade) {
    const { palavra, forma } = r.unidade(unidade, n, !!dec, antes);
    const num = dec ? decimal(n, dec, forma, r) : r.cardinal(n, forma);
    return { spoken: `${num} ${palavra}${pontoFinal}`, start, end };
  }

  if (dec) return { spoken: decimal(n, dec, r.forma(antes, depois, n), r), start, end };
  if (agrupado) return { spoken: r.cardinal(n, r.forma(antes, depois, n)), start, end };

  // hora: «kl. 9», «klockan 1»
  if (r.relogio.test(antes)) return { spoken: r.cardinal(n, r.horas), start, end };

  // número de emergência: «ring 112» = um, um, dois
  if (/^11\d$/.test(raw) && r.emergencia.test(antes.slice(-40))) {
    return { spoken: [...raw].map((d) => r.cardinal(Number(d), r.contar)).join(' '), start, end };
  }

  // data: «17. mai», «den 6 juni», «17. Mai»
  const w = depois.match(PALAVRA_DEPOIS);
  if (w && n >= 1 && n <= 31 && r.meses.includes(w[1].toLowerCase())) {
    const ponto = depois.startsWith('.') ? 1 : 0;
    return { spoken: r.ordinal(n, antes, depois.slice(ponto)), start, end: end + ponto };
  }
  // ordinal com ponto: «5. klasse», «det 20. århundrede», «á 9. öld», «3. th.»
  if (r.ordinalComPonto && /^\.\s+\p{Ll}/u.test(depois)) {
    return { spoken: r.ordinal(n, antes, depois.slice(1)), start, end: end + 1 };
  }

  // ano: «i 1814», «(1833–1896)»; com substantivo depois é quantidade («1300 år», «1800 meter»)
  if (raw.length === 4 && !r.temSubstantivo(depois)) {
    const ano = r.ano(n);
    if (ano) return { spoken: ano, start, end };
  }
  return { spoken: r.cardinal(n, r.forma(antes, depois, n)), start, end };
}

function decimal<F>(n: number, dec: string, forma: F, r: RegrasNordicas<F>): string {
  return `${r.cardinal(n, forma)} ${r.virgula} ${[...dec].map((d) => r.cardinal(Number(d), r.contar)).join(' ')}`;
}
