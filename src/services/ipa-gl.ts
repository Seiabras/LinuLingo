/**
 * Transcrição fonética (IPA) do galego por regras (norma oficial da RAG, sem seseo). Cobre os pontos
 * que mais confundem quem já fala português:
 *  - x → [ʃ] (nunca como o x do português: xente [ˈʃente])
 *  - ll → [ʎ] (como o lh do português: traballo)
 *  - ñ → [ɲ] (como o nh do português)
 *  - z, c antes de e/i → [θ] na norma oficial (grazas [ˈɡɾaθas]); o s continua [s]
 *  - h é sempre mudo, menos no dígrafo ch → [tʃ]
 *  - gu/qu antes de e/i → [g]/[k], com o u mudo
 * A tonicidade não é marcada (depende do dicionário, não da escrita); o timbre aberto/fechado de
 * e/o também não é marcado, por não ter uma regra ortográfica confiável.
 */
const VOWELS = 'aeiouáéíóú';
const isVowel = (ch: string | undefined) => !!ch && VOWELS.includes(ch);

function wordToIpa(raw: string): string {
  const w = raw
    .toLowerCase()
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u');
  if (!w) return '';
  let out = '';
  const n = w.length;
  let i = 0;
  while (i < n) {
    const ch = w[i];
    const next = w[i + 1];
    if (ch === 'l' && next === 'l') {
      out += 'ʎ';
      i += 2;
      continue;
    }
    if (ch === 'ñ') {
      out += 'ɲ';
      i += 1;
      continue;
    }
    if (ch === 'c' && next === 'h') {
      out += 't͡ʃ';
      i += 2;
      continue;
    }
    if (ch === 'g' && next === 'u' && isVowel(w[i + 2]) && 'ei'.includes(w[i + 2] ?? '')) {
      out += 'ɡ';
      i += 2;
      continue;
    }
    if (ch === 'q' && next === 'u') {
      out += 'k';
      i += 2;
      continue;
    }
    if (ch === 'x') {
      out += 'ʃ';
      i += 1;
      continue;
    }
    if (ch === 'z') {
      out += 'θ';
      i += 1;
      continue;
    }
    if (ch === 'c' && (next === 'e' || next === 'i')) {
      out += 'θ';
      i += 1;
      continue;
    }
    if (ch === 'c') {
      out += 'k';
      i += 1;
      continue;
    }
    if (ch === 'h') {
      i += 1;
      continue;
    }
    if (ch === 'j') {
      out += 'ʃ';
      i += 1;
      continue;
    }
    if (ch === 'v') {
      out += 'b';
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

export function toIpaGl(text: string): string {
  const tokens = text.split(/[^\p{L}-]+/u).filter((t) => t && t !== '-');
  return tokens.length ? `[${tokens.map((t) => wordToIpa(t)).join(' ')}]` : '';
}
