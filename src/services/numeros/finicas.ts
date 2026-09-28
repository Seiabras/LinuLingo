/**
 * O que o finlandês (fi.ts) e o estoniano (et.ts) fazem igual com os números, para não repetir nos
 * dois: o sinal de menos, os números lidos algarismo por algarismo (telefones, CEPs, emergência), os
 * decimais e as horas. Cada idioma passa a sua função de número e as suas palavras.
 */

/** «-5 kraadi» → «miinus 5 kraadi»: o hífen solto antes de um número é o sinal de menos. */
export function minusSign(text: string, word: string): string {
  return text.replace(/(^|[\s(])[-−](?=\d)/gu, `$1${word} `);
}

/**
 * Números que se leem algarismo por algarismo, cada grupo separado por vírgula: os que começam com
 * zero (040 123 4567, 02100) e o de emergência depois das palavras de «emergência» (hätänumero 112).
 */
export function digitByDigit(text: string, spell: (n: number) => string, emergency: RegExp): string {
  const digits = (s: string) => s.split(/[\s-]+/).map((g) => [...g].map((d) => spell(Number(d))).join(' ')).join(', ');
  return text
    // (não os zeros de um milhar separado por espaço: 190 000)
    .replace(/(?<![\p{L}\d.,/_])(?<!\d[\s\u00A0\u2009\u202F])0\d+(?:[ -]\d{2,4})*(?![\d,.]\d)/gu, digits)
    .replace(new RegExp(`(${emergency.source}\\s+)(11\\d)(?!\\d)`, 'giu'), (_m, a: string, d: string) => a + digits(d));
}

/** Os decimais: até dois algarismos (sem zero na frente), como número (3,50 = kolme pilkku viisikymmentä); senão, um a um. */
export function decimalWords(dec: string, spell: (n: number) => string): string {
  if (dec.length <= 2 && dec[0] !== '0') return spell(Number(dec));
  return [...dec].map((d) => spell(Number(d))).join(' ');
}

/** «14.30» → neljätoista kolmekymmentä; «9.05» → yhdeksän nolla viisi; «14.00» → neljätoista. */
export function clockWords(h: number, min: string, spell: (n: number) => string, zero: string): string {
  const m = Number(min);
  return `${spell(h)}${m === 0 ? '' : min[0] === '0' ? ` ${zero} ${spell(m)}` : ` ${spell(m)}`}`;
}

/** Uma quantia em euros ou dólares com centavos: «2,90 €» → kaksi euroa yhdeksänkymmentä senttiä. */
export function moneyWords(int: number, dec: string, spell: (n: number) => string, unit: [string, string], cent: [string, string]): string {
  const cents = Number(dec.padEnd(2, '0').slice(0, 2));
  const major = `${spell(int)} ${unit[int === 1 ? 0 : 1]}`;
  return cents ? `${major} ${spell(cents)} ${cent[cents === 1 ? 0 : 1]}` : major;
}
