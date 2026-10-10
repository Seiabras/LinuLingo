/**
 * Silabário inuíte (qaniujaaqpait) ⇄ letras latinas, na ortografia padrão do Inuit Cultural Institute
 * (ICI), a usada pelo governo de Nunavut. Fontes: Wikipédia em inglês («Inuktitut syllabics», tabela
 * do bloco Unicode “Unified Canadian Aboriginal Syllabics”, consultada em 10/10/2026). As sílabas vão
 * em séries de três vogais (i, u, a), com um ponto em cima para a vogal longa, e uma letra pequena,
 * no alto, para a consoante sozinha no fim da sílaba. Um “q” sozinho antes de uma sílaba de “k”
 * escreve o “qq” dobrado: ᖃᖅᑲᖅ = qaqqaq.
 */

const SERIES: [string, string[]][] = [
  // consoante, [i, u, a, ii, uu, aa, final]
  ['', ['ᐃ', 'ᐅ', 'ᐊ', 'ᐄ', 'ᐆ', 'ᐋ', '']],
  ['p', ['ᐱ', 'ᐳ', 'ᐸ', 'ᐲ', 'ᐴ', 'ᐹ', 'ᑉ']],
  ['t', ['ᑎ', 'ᑐ', 'ᑕ', 'ᑏ', 'ᑑ', 'ᑖ', 'ᑦ']],
  ['k', ['ᑭ', 'ᑯ', 'ᑲ', 'ᑮ', 'ᑰ', 'ᑳ', 'ᒃ']],
  ['g', ['ᒋ', 'ᒍ', 'ᒐ', 'ᒌ', 'ᒎ', 'ᒑ', 'ᒡ']],
  ['m', ['ᒥ', 'ᒧ', 'ᒪ', 'ᒦ', 'ᒨ', 'ᒫ', 'ᒻ']],
  ['n', ['ᓂ', 'ᓄ', 'ᓇ', 'ᓃ', 'ᓅ', 'ᓈ', 'ᓐ']],
  ['s', ['ᓯ', 'ᓱ', 'ᓴ', 'ᓰ', 'ᓲ', 'ᓵ', 'ᔅ']],
  ['l', ['ᓕ', 'ᓗ', 'ᓚ', 'ᓖ', 'ᓘ', 'ᓛ', 'ᓪ']],
  ['j', ['ᔨ', 'ᔪ', 'ᔭ', 'ᔩ', 'ᔫ', 'ᔮ', 'ᔾ']],
  ['v', ['ᕕ', 'ᕗ', 'ᕙ', 'ᕖ', 'ᕘ', 'ᕚ', 'ᕝ']],
  ['r', ['ᕆ', 'ᕈ', 'ᕋ', 'ᕇ', 'ᕉ', 'ᕌ', 'ᕐ']],
  ['q', ['ᕿ', 'ᖁ', 'ᖃ', 'ᖀ', 'ᖂ', 'ᖄ', 'ᖅ']],
  ['ng', ['ᖏ', 'ᖑ', 'ᖓ', 'ᖐ', 'ᖒ', 'ᖔ', 'ᖕ']],
  ['nng', ['ᙱ', 'ᙳ', 'ᙵ', 'ᙲ', 'ᙴ', 'ᙶ', 'ᖖ']],
  ['ł', ['ᖠ', 'ᖢ', 'ᖤ', 'ᖡ', 'ᖣ', 'ᖥ', 'ᖦ']],
];
const VOGAIS = ['i', 'u', 'a', 'ii', 'uu', 'aa'];

const PARA_LATIM = new Map<string, string>();
for (const [c, ss] of SERIES) {
  ss.forEach((s, i) => {
    if (s) PARA_LATIM.set(s, i < 6 ? c + VOGAIS[i] : c);
  });
}
PARA_LATIM.set('ᕼ', 'h');

/** Silabário → letras latinas (a leitura que aparece embaixo das frases). */
export function toReadingIu(texto: string): string {
  let out = '';
  const chars = [...texto];
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const lat = PARA_LATIM.get(ch);
    if (lat === undefined) {
      out += ch;
      continue;
    }
    // “q” no fim da sílaba antes de uma sílaba de “k”: o “k” também soa “q” (ᖅᑲ = qqa)
    if (lat === 'q' && PARA_LATIM.get(chars[i + 1] ?? '')?.startsWith('k')) {
      out += 'q' + 'q' + PARA_LATIM.get(chars[i + 1])!.slice(1);
      i++;
      continue;
    }
    // “ng” no fim da sílaba antes de uma sílaba de “ng”: o “nng” dobrado
    out += lat;
  }
  return out;
}

const CONSOANTES = ['nng', 'ng', 'p', 't', 'k', 'g', 'm', 'n', 's', 'l', 'j', 'v', 'r', 'q', 'ł'];
const SERIE = new Map(SERIES);

/** Letras latinas (ICI) → silabário. Para formas atestadas em letras latinas nas fontes. */
export function toSyllabicsIu(texto: string): string {
  const t = texto.toLowerCase();
  let out = '';
  let i = 0;
  while (i < t.length) {
    // “qq” + vogal: ᖅ + sílaba de “k”
    if (t.startsWith('qq', i)) {
      out += 'ᖅ';
      i += 1;
      const v = vogal(t, i + 1);
      if (v) {
        out += SERIE.get('k')![VOGAIS.indexOf(v)];
        i += 1 + v.length;
      }
      continue;
    }
    if (t[i] === 'h') {
      out += 'ᕼ';
      i++;
      continue;
    }
    const c = CONSOANTES.find((x) => t.startsWith(x, i));
    if (c) {
      const v = vogal(t, i + c.length);
      out += v ? SERIE.get(c)![VOGAIS.indexOf(v)] : SERIE.get(c)![6];
      i += c.length + (v?.length ?? 0);
      continue;
    }
    const v = vogal(t, i);
    if (v) {
      out += SERIE.get('')![VOGAIS.indexOf(v)];
      i += v.length;
      continue;
    }
    out += texto[i];
    i++;
  }
  return out;
}

function vogal(t: string, i: number): string | undefined {
  for (const v of ['ii', 'uu', 'aa', 'i', 'u', 'a']) if (t.startsWith(v, i)) return v;
  return undefined;
}
