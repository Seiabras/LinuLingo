/**
 * Transcrição fonética (IPA) do latim clássico por regras, na pronúncia reconstruída acadêmica (não a
 * eclesiástica). Cobre os pontos que mais confundem quem já fala português:
 *  - c → [k] sempre (nunca [s] ou [tʃ] como no português ou no latim eclesiástico)
 *  - v → [w] sempre (o latim clássico não tinha o som [v] do português)
 *  - qu → [kʷ] (k e w numa unidade só)
 *  - ph/th/ch → [pʰ]/[tʰ]/[kʰ] (consoantes aspiradas, em palavras de origem grega)
 *  - ae → [ai̯], oe → [oi̯], au → [au̯], eu → [eu̯] (ditongos)
 *  - gn → [ŋn] (o "n" nasalado antes de outro n, como em "magnus")
 *  - i entre vogais (ou no início de palavra, antes de vogal) → [j] consoante, como em "Iovis"
 *  - x → [ks]; s é sempre surdo [s] (nunca [z])
 *  - h é sempre pronunciado (uma aspiração leve), diferente do h mudo do português
 * A duração das vogais (longas × breves) não é marcada, porque o texto puro não tem mácrons; por isso
 * a tonicidade também não é indicada aqui (depende da duração da penúltima sílaba, que não temos como
 * saber sem o mácron).
 */
const VOWELS = 'aeiou';
const isVowel = (ch: string | undefined) => !!ch && VOWELS.includes(ch);

function wordToIpa(raw: string): string {
  const w = raw.toLowerCase();
  if (!w) return '';
  let out = '';
  const n = w.length;
  let i = 0;
  while (i < n) {
    const ch = w[i];
    const next = w[i + 1];

    // Ditongos
    if (ch === 'a' && next === 'e') {
      out += 'ai̯';
      i += 2;
      continue;
    }
    if (ch === 'o' && next === 'e') {
      out += 'oi̯';
      i += 2;
      continue;
    }
    if (ch === 'a' && next === 'u') {
      out += 'au̯';
      i += 2;
      continue;
    }
    if (ch === 'e' && next === 'u') {
      out += 'eu̯';
      i += 2;
      continue;
    }
    // gn → ŋn
    if (ch === 'g' && next === 'n') {
      out += 'ŋn';
      i += 2;
      continue;
    }
    // qu → kʷ
    if (ch === 'q' && next === 'u') {
      out += 'kʷ';
      i += 2;
      continue;
    }
    // consoantes gregas aspiradas
    if (ch === 'p' && next === 'h') {
      out += 'pʰ';
      i += 2;
      continue;
    }
    if (ch === 't' && next === 'h') {
      out += 'tʰ';
      i += 2;
      continue;
    }
    if (ch === 'c' && next === 'h') {
      out += 'kʰ';
      i += 2;
      continue;
    }
    // i consonantal: início de palavra ou entre vogais, seguido de vogal
    if (ch === 'i' && isVowel(next) && (i === 0 || isVowel(w[i - 1]))) {
      out += 'j';
      i += 1;
      continue;
    }
    if (ch === 'v') {
      out += 'w';
      i += 1;
      continue;
    }
    if (ch === 'c') {
      out += 'k';
      i += 1;
      continue;
    }
    if (ch === 'x') {
      out += 'ks';
      i += 1;
      continue;
    }
    if (ch === 'g') {
      out += 'ɡ';
      i += 1;
      continue;
    }
    if (ch === 'h') {
      out += 'h';
      i += 1;
      continue;
    }
    if (ch === 'y') {
      out += 'y';
      i += 1;
      continue;
    }
    if (ch === 'z') {
      out += 'dz';
      i += 1;
      continue;
    }
    if (ch === 'j') {
      // grafia moderna alternativa a "i" consonantal
      out += 'j';
      i += 1;
      continue;
    }
    if (ch === '-') {
      out += ' ';
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

export function toIpaLa(text: string): string {
  const tokens = text.split(/[^\p{L}-]+/u).filter((t) => t && t !== '-');
  return tokens.length ? `[${tokens.map((t) => wordToIpa(t)).join(' ')}]` : '';
}
