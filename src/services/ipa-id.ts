/**
 * Transcrição fonética (IPA) do indonésio por regras. A ortografia é bem regular; os pontos que mais
 * confundem quem fala português:
 *  - c → [t͡ʃ] (sempre, nunca "k" ou "s"): cinta [ˈt͡ʃinta]
 *  - ng → [ŋ] (um só som nasal, como o "ng" de "sing" em inglês): senang [səˈnaŋ]
 *  - ny → [ɲ] (como o nh do português): nyonya [ˈɲoɲa]
 *  - j → [d͡ʒ] (nunca como o j do português): jam [d͡ʒam]
 *  - sy → [ʃ]; kh → [x]
 * O "e" é ambíguo na escrita padrão: pode ser a vogal plena [e] ou o schwa [ə], sem uma regra
 * confiável a partir da grafia sozinha (por isso esta transcrição assume o schwa, o mais comum,
 * e pode errar em palavras com "e" pleno). A tonicidade não é marcada.
 */
const DIGRAPHS: [string, string][] = [
  ['ny', 'ɲ'],
  ['ng', 'ŋ'],
  ['sy', 'ʃ'],
  ['kh', 'x'],
];

function wordToIpa(raw: string): string {
  const w = raw.toLowerCase();
  if (!w) return '';
  let out = '';
  let i = 0;
  const n = w.length;
  while (i < n) {
    const two = w.slice(i, i + 2);
    const dg = DIGRAPHS.find(([d]) => d === two);
    if (dg) {
      out += dg[1];
      i += 2;
      continue;
    }
    const ch = w[i];
    if (ch === 'c') {
      out += 't͡ʃ';
      i += 1;
      continue;
    }
    if (ch === 'j') {
      out += 'd͡ʒ';
      i += 1;
      continue;
    }
    if (ch === 'e') {
      out += 'ə';
      i += 1;
      continue;
    }
    if (ch === 'r') {
      out += 'ɾ';
      i += 1;
      continue;
    }
    if (ch === 'y') {
      out += 'j';
      i += 1;
      continue;
    }
    if (ch === '-' || ch === ' ') {
      out += ' ';
      i += 1;
      continue;
    }
    out += ch;
    i += 1;
  }
  return out;
}

export function toIpaId(text: string): string {
  const tokens = text.split(/[^\p{L}-]+/u).filter((t) => t && t !== '-');
  return tokens.length ? `[${tokens.map((t) => wordToIpa(t)).join(' ')}]` : '';
}
