/**
 * Transcrição fonética (IPA) do romeno por regras. A ortografia romena é quase
 * fonêmica; as regras cobrem o que confunde lusófonos:
 *  - c/g antes de e, i → [t͡ʃ]/[d͡ʒ]  (ce, ci, ge, gi); «e/i» depois de c/g antes de outra vogal só marca o som (cea, cio, gea)
 *  - ch/gh antes de e, i → [k]/[g]    (chema, ghid)
 *  - ș [ʃ], ț [t͡s], j [ʒ], ă [ə], â/î [ɨ]
 *  - -i final átono depois de consoante é quase mudo: palataliza a consoante (faci [fat͡ʃʲ], ochi [okʲ])
 *  - ditongos ea [e̯a], oa [o̯a], ia/ie/io/iu [j…], ai/ei/oi/ui [...j], au/eu/ou [...w]
 *  - e- inicial de pronomes e do verbo «a fi» soa [je] (este [ˈjeste], el [jel])
 * A tonicidade não é marcada (depende do dicionário, não da escrita).
 */

const J_WORDS = new Set(['el', 'ea', 'ei', 'ele', 'este', 'ești', 'e', 'eu', 'eram', 'erai', 'era', 'erați', 'erau', 'ești']);
const VOWELS = 'aăâeioîuy';
const isVowel = (ch: string | undefined) => !!ch && VOWELS.includes(ch);

export function wordToIpa(raw: string, opts: { infinitive?: boolean } = {}): string {
  const w = raw.toLowerCase().replace(/ş/g, 'ș').replace(/ţ/g, 'ț');
  if (!w) return '';
  let out = '';
  const n = w.length;
  let i = 0;

  // e- inicial pronunciado [je]
  if (J_WORDS.has(w)) {
    out += 'j';
  }

  while (i < n) {
    const c = w[i];
    const next = w[i + 1];
    const next2 = w[i + 2];

    // consoantes com regras de contexto
    if (c === 'c' || c === 'g') {
      const affricate = c === 'c' ? 't͡ʃ' : 'd͡ʒ';
      const stop = c === 'c' ? 'k' : 'ɡ';
      if (next === 'h' && (next2 === 'e' || next2 === 'i')) {
        // che/chi, ghe/ghi → [k]/[g]; «chea/chia» → [kʲa]
        const after = w[i + 3];
        if ((next2 === 'e' || next2 === 'i') && (after === 'a' || after === 'o' || after === 'u') ) {
          out += `${stop}j`;
          i += 3;
          continue;
        }
        out += stop;
        i += 2;
        continue;
      }
      if (next === 'e' || next === 'i') {
        const after = next2;
        // cea, cia, cio, ciu, gea, gio… : a vogal e/i só marca o som
        if (after === 'a' || after === 'o' || after === 'u' || after === 'ă') {
          out += affricate;
          i += 2;
          continue;
        }
        // -ci/-gi final mudo: faci → fat͡ʃʲ, fugi → fud͡ʒʲ
        if (next === 'i' && i + 2 === n && hasVowelBefore(w, i) && !opts.infinitive) {
          out += `${affricate}ʲ`;
          i += 2;
          continue;
        }
        out += affricate;
        i += 1;
        continue;
      }
      out += stop;
      i += 1;
      continue;
    }

    const simple: Record<string, string> = { ș: 'ʃ', ț: 't͡s', j: 'ʒ', ă: 'ə', â: 'ɨ', î: 'ɨ', x: 'ks', y: 'j', w: 'w', q: 'k', r: 'r', h: 'h' };

    if (isVowel(c)) {
      // -i final átono depois de consoante (plural, 2ª pessoa): quase mudo
      if (c === 'i' && i === n - 1 && i > 0 && !isVowel(w[i - 1]) && hasVowelBefore(w, i) && !opts.infinitive) {
        out += 'ʲ';
        i += 1;
        continue;
      }
      // u entre vogais → [w]: nouă, ziua, rouă
      if (c === 'u' && i > 0 && isVowel(w[i - 1]) && isVowel(next)) {
        out += 'w';
        i += 1;
        continue;
      }
      // i entre vogais → [j]: cheie, femeie, ploaie
      if (c === 'i' && i > 0 && isVowel(w[i - 1]) && isVowel(next)) {
        out += 'j';
        i += 1;
        continue;
      }
      // -ii final → [ij] (copii)
      if (c === 'i' && next === 'i' && i + 2 === n) {
        out += 'ij';
        i += 2;
        continue;
      }
      // ditongos crescentes
      if (c === 'e' && next === 'a') {
        out += 'e̯a';
        i += 2;
        continue;
      }
      if (c === 'o' && next === 'a') {
        out += 'o̯a';
        i += 2;
        continue;
      }
      // ia, ie, io, iă → [j] + vogal (início de palavra ou depois de consoante); «iua» fica [iwa] (ziua)
      if (c === 'i' && isVowel(next) && next !== 'i' && !(next === 'u' && next2 === 'a') && (i === 0 || !isVowel(w[i - 1]))) {
        out += 'j';
        i += 1;
        continue;
      }
      if (c === 'u' && next === 'a' && i > 0 && isVowel(w[i - 1])) {
        // ziua → [ziwa]
        out += 'w';
        i += 1;
        continue;
      }
      // ditongos decrescentes: vogal + i/u (antes de consoante ou no fim)
      if ((next === 'i' || next === 'u') && !isVowel(next2) && c !== 'i' && c !== 'u') {
        const nucleus = simple[c] ?? c;
        // «-i» final depois de vogal continua sendo semivogal: ai, ei, oi
        out += nucleus + (next === 'i' ? 'j' : 'w');
        i += 2;
        continue;
      }
      if (c === 'u' && next === 'i' && !isVowel(next2)) {
        out += 'uj';
        i += 2;
        continue;
      }
      out += simple[c] ?? c;
      i += 1;
      continue;
    }

    // consoantes dobradas e demais
    out += simple[c] ?? (c === '-' ? '' : c);
    i += 1;
  }
  return out;
}

function hasVowelBefore(w: string, idx: number): boolean {
  for (let k = 0; k < idx; k++) if (isVowel(w[k])) return true;
  return false;
}

/** Forma com hífen (clíticos): mi-e → [mje], s-a → [sa], nu-mi → [numʲ]. */
function compoundToIpa(token: string): string {
  const parts = token.split('-').filter(Boolean);
  return parts
    .map((p, k) => {
      const lower = p.toLowerCase();
      const nextPart = parts[k + 1]?.toLowerCase();
      // clítico terminado em -i antes de vogal: mi-e, ți-e, și-a → semivogal
      if (nextPart && /i$/.test(lower) && isVowel(nextPart[0])) return wordToIpa(lower.slice(0, -1)) + 'j';
      // clítico depois do hífen: nu-mi, dă-mi → [mʲ]
      if (k > 0 && /^[mțsl]i$/.test(lower)) return wordToIpa(lower[0]) + 'ʲ';
      // «e» depois de hífen (mi-e) é só a vogal, sem o [j] de «este»
      if (k > 0 && lower === 'e') return 'e';
      return wordToIpa(lower);
    })
    .join('');
}

/** Frase inteira em IPA, entre colchetes: «Ce faci?» → [t͡ʃe fat͡ʃʲ] */
export function toIpa(text: string): string {
  const tokens = text.split(/[^\p{L}-]+/u).filter((t) => t && t !== '-');
  // «a» + verbo no começo (forma de dicionário: a citi, a vorbi): o -i final é tônico
  const dictVerb = tokens.length >= 2 && tokens[0].toLowerCase() === 'a';
  return tokens.length
    ? `[${tokens.map((t, k) => (t.includes('-') ? compoundToIpa(t) : wordToIpa(t, { infinitive: dictVerb && k === tokens.length - 1 }))).join(' ')}]`
    : '';
}
