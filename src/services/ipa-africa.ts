/**
 * IPA por regras dos idiomas africanos da lista, cuja escrita é quase fonêmica:
 * - iorubá: ẹ [ɛ], ọ [ɔ], ṣ [ʃ], gb [ɡ͡b], p [k͡p], vogal + n = vogal nasal; tom agudo = alto (á),
 *   grave = baixo (à), sem marca = médio (ā);
 * - igbo: ị [ɪ], ọ [ɔ], ụ [ʊ], ṅ [ŋ], ch [t͡ʃ], gb/kp duplas, gh [ɣ], kw/gw/nw labializadas, ny [ɲ];
 *   tons como no iorubá quando marcados (a escrita comum não marca: sai sem tom);
 * - hauçá: ɓ ɗ implosivas, ƙ [kʼ], ts [sʼ], ƴ [ʔʲ], c [t͡ʃ], f [ɸ], r [ɾ], vogal dobrada = longa;
 *   tom só quando marcado (grave = baixo, circunflexo = descendente);
 * - oromo (qubee): ejetivas c [t͡ʃʼ], ph [pʼ], q [kʼ], x [tʼ], ts [t͡sʼ]; dh [ɗ]; vogal e consoante
 *   dobradas = longas; apóstrofo = oclusiva glotal;
 * - amárico: o silabário ge’ez (fidel) sílaba por sílaba, com a 6.ª ordem [ɨ] ou sem vogal no fim da
 *   palavra; a geminação não é escrita e não aparece. transliterateAm dá a leitura em letras latinas.
 */

const TONE: Record<string, string> = { '́': '́', '̀': '̀', '̂': '̂', '̄': '̄', '̌': '̌' };

/** Separa letras e marcas de tom (NFD); os pontos de baixo (ẹ ọ ṣ ị ụ) ficam com a letra. */
function units(word: string): { ch: string; tone: string }[] {
  const out: { ch: string; tone: string }[] = [];
  for (const c of word.toLowerCase().normalize('NFD')) {
    if (TONE[c] !== undefined) {
      if (out.length) out[out.length - 1].tone = TONE[c];
    } else if (c === '̣' || c === '̇') {
      if (out.length) out[out.length - 1].ch += c;
    } else out.push({ ch: c, tone: '' });
  }
  return out.map((u) => ({ ch: u.ch.normalize('NFC'), tone: u.tone }));
}

function byRules(text: string, cons: [string, string][], vowels: Record<string, string>, opts: { midTone?: boolean; nasalN?: boolean; long?: boolean }): string {
  const words = text
    .normalize('NFC')
    .split(/[^\p{L}\p{M}'’ʼ]+/u)
    .filter((w) => /\p{L}/u.test(w));
  if (!words.length) return '';
  const sorted = [...cons].sort((a, b) => b[0].length - a[0].length);
  const toIpa = (word: string) => {
    const us = units(word.replace(/[’ʼ]/g, "'"));
    let out = '';
    for (let i = 0; i < us.length; ) {
      const rest = us
        .slice(i, i + 3)
        .map((u) => u.ch)
        .join('');
      const c = sorted.find(([g]) => rest.startsWith(g) && !(g === 'n' && opts.nasalN && isNasalCoda(us, i)));
      if (c && !vowels[us[i].ch]) {
        // consoante dobrada = longa
        const len = [...c[0]].length;
        out += c[1];
        i += len;
        continue;
      }
      const v = vowels[us[i].ch];
      if (v) {
        let ipa = v;
        let tone = us[i].tone;
        // vogal dobrada = longa (hauçá, oromo)
        if (opts.long && us[i + 1]?.ch === us[i].ch) {
          ipa += 'ː';
          tone = tone || us[i + 1].tone;
          i++;
        }
        // iorubá (e igbo): n depois de vogal, sem vogal depois, nasaliza a vogal
        if (opts.nasalN && us[i + 1]?.ch === 'n' && !vowels[us[i + 2]?.ch ?? '']) {
          ipa += '̃';
          tone = tone || us[i + 1].tone;
          i++;
        }
        if (!tone && opts.midTone) tone = '̄';
        out += tone ? ipa[0] + tone + ipa.slice(1) : ipa;
        i++;
        continue;
      }
      if (us[i].ch === "'") out += 'ʔ';
      else if (us[i].ch === 'n' || us[i].ch === 'm') out += us[i].ch + (us[i].tone ? us[i].tone : ''); // n/m silábico com tom
      i++;
    }
    return out;
  };
  return `[${words.map(toIpa).join(' ')}]`.normalize('NFC');
}

function isNasalCoda(us: { ch: string }[], i: number): boolean {
  return us[i].ch === 'n' && i > 0 && /[aeiouẹọ]/.test(us[i - 1].ch) && !/[aeiouẹọ]/.test(us[i + 1]?.ch ?? '');
}

const YO_CONS: [string, string][] = [
  ['gb', 'ɡ͡b'], ['b', 'b'], ['d', 'd'], ['f', 'f'], ['g', 'ɡ'], ['h', 'h'], ['j', 'ɟ'], ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'],
  ['p', 'k͡p'], ['r', 'ɾ'], ['ṣ', 'ʃ'], ['s', 's'], ['t', 't'], ['w', 'w'], ['y', 'j'],
];
const YO_V: Record<string, string> = { a: 'a', e: 'e', ẹ: 'ɛ', i: 'i', o: 'o', ọ: 'ɔ', u: 'u' };
export const toIpaYo = (t: string) => byRules(t, YO_CONS, YO_V, { midTone: true, nasalN: true });

const IG_CONS: [string, string][] = [
  ['ch', 't͡ʃ'], ['gb', 'ɡ͡b'], ['gh', 'ɣ'], ['gw', 'ɡʷ'], ['kp', 'k͡p'], ['kw', 'kʷ'], ['nw', 'ŋʷ'], ['ny', 'ɲ'], ['sh', 'ʃ'],
  ['b', 'b'], ['d', 'd'], ['f', 'f'], ['g', 'ɡ'], ['h', 'ɦ'], ['j', 'd͡ʒ'], ['k', 'k'], ['l', 'l'], ['m', 'm'], ['ṅ', 'ŋ'], ['n', 'n'],
  ['p', 'p'], ['r', 'ɹ'], ['s', 's'], ['t', 't'], ['v', 'v'], ['w', 'w'], ['y', 'j'], ['z', 'z'],
];
const IG_V: Record<string, string> = { a: 'a', e: 'e', i: 'i', ị: 'ɪ', o: 'o', ọ: 'ɔ', u: 'u', ụ: 'ʊ' };
export const toIpaIg = (t: string) => byRules(t, IG_CONS, IG_V, {});

const HA_CONS: [string, string][] = [
  ['sh', 'ʃ'], ['ts', 'sʼ'], ['ɓ', 'ɓ'], ['ɗ', 'ɗ'], ['ƙ', 'kʼ'], ['ƴ', 'ʔʲ'], ['b', 'b'], ['c', 't͡ʃ'], ['d', 'd'], ['f', 'ɸ'], ['g', 'ɡ'],
  ['h', 'h'], ['j', 'd͡ʒ'], ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'], ['r', 'ɾ'], ['s', 's'], ['t', 't'], ['w', 'w'], ['y', 'j'], ['z', 'z'],
];
const HA_V: Record<string, string> = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' };
export const toIpaHa = (t: string) => byRules(t, HA_CONS, HA_V, { long: true });

const OM_CONS: [string, string][] = [
  ['ch', 't͡ʃ'], ['dh', 'ɗ'], ['ny', 'ɲ'], ['ph', 'pʼ'], ['sh', 'ʃ'], ['ts', 't͡sʼ'], ['zh', 'ʒ'],
  ['b', 'b'], ['c', 't͡ʃʼ'], ['d', 'd'], ['f', 'f'], ['g', 'ɡ'], ['h', 'h'], ['j', 'd͡ʒ'], ['k', 'k'], ['l', 'l'], ['m', 'm'], ['n', 'n'],
  ['p', 'p'], ['q', 'kʼ'], ['r', 'r'], ['s', 's'], ['t', 't'], ['v', 'v'], ['w', 'w'], ['x', 'tʼ'], ['y', 'j'], ['z', 'z'],
];
const OM_V: Record<string, string> = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' };
/** Oromo: além das vogais, as consoantes dobradas são longas (bb → bː). */
export function toIpaOm(t: string): string {
  const ipa = byRules(t, OM_CONS, OM_V, { long: true });
  // consoante repetida (dd, ll, tt) = geminada
  return ipa.replace(/([bdfgɡhjklmnprstvwzʃ])\1/g, '$1ː').replace(/(t͡ʃ|d͡ʒ|t͡sʼ|pʼ|kʼ|tʼ|t͡ʃʼ|ɗ|ɲ)\1/g, '$1ː');
}

// ── amárico ──
// cada linha do bloco etíope (U+1200…) tem 8 casas: as 7 ordens e a labializada
const AM_ROWS: [number, string, string][] = [
  [0x1200, 'h', 'h'], [0x1208, 'l', 'l'], [0x1210, 'h', 'ḥ'], [0x1218, 'm', 'm'], [0x1220, 's', 'ś'], [0x1228, 'r', 'r'], [0x1230, 's', 's'],
  [0x1238, 'ʃ', 'š'], [0x1240, 'kʼ', 'ḳ'], [0x1260, 'b', 'b'], [0x1268, 'v', 'v'], [0x1270, 't', 't'], [0x1278, 't͡ʃ', 'č'], [0x1280, 'h', 'ḫ'],
  [0x1290, 'n', 'n'], [0x1298, 'ɲ', 'ñ'], [0x12a0, 'ʔ', 'ʾ'], [0x12a8, 'k', 'k'], [0x12b8, 'h', 'x'], [0x12c8, 'w', 'w'], [0x12d0, 'ʔ', 'ʿ'],
  [0x12d8, 'z', 'z'], [0x12e0, 'ʒ', 'ž'], [0x12e8, 'j', 'y'], [0x12f0, 'd', 'd'], [0x1300, 'd͡ʒ', 'ǧ'], [0x1308, 'ɡ', 'g'], [0x1320, 'tʼ', 'ṭ'],
  [0x1328, 't͡ʃʼ', 'č̣'], [0x1330, 'pʼ', 'p̣'], [0x1338, 'sʼ', 'ṣ'], [0x1340, 'sʼ', 'ṣ́'], [0x1348, 'f', 'f'], [0x1350, 'p', 'p'],
];
const AM_V_IPA = ['ə', 'u', 'i', 'a', 'e', 'ɨ', 'o'];
const AM_V_TR = ['ä', 'u', 'i', 'a', 'e', 'ə', 'o'];
const AM_LAB_IPA: Record<number, string> = { 0x1240: 'kʷʼ', 0x12a8: 'kʷ', 0x1308: 'ɡʷ', 0x12b8: 'hʷ' };

/** Sílabas de uma palavra: [consoante IPA, vogal IPA, consoante latina, vogal latina]. */
function amSyllables(word: string): [string, string, string, string][] {
  const out: [string, string, string, string][] = [];
  for (const ch of word) {
    const cp = ch.codePointAt(0)!;
    // linhas de 8 com as labializadas (ቈ ኰ ጐ ቘ): 0x1248…, 0x12b0…, 0x1310…
    const lab = [0x1248, 0x12b0, 0x1310, 0x1288].find((b) => cp >= b && cp < b + 8);
    if (lab !== undefined) {
      const base = { 0x1248: 0x1240, 0x12b0: 0x12a8, 0x1310: 0x1308, 0x1288: 0x12b8 }[lab]!;
      const o = cp - lab;
      const v = ['ə', '', 'i', 'a', 'e'][o] ?? 'ə';
      out.push([AM_LAB_IPA[base], v, AM_ROWS.find((r) => r[0] === base)![2] + 'ʷ', ['ä', '', 'i', 'a', 'e'][o] ?? 'ä']);
      continue;
    }
    const row = AM_ROWS.find((r) => cp >= r[0] && cp < r[0] + 8);
    if (!row) continue;
    const o = cp - row[0];
    // a 1.ª ordem das guturais (ሀ ሐ ኀ አ ዐ) soa [a], não [ə]
    const guttural = [0x1200, 0x1210, 0x1280, 0x12a0, 0x12d0].includes(row[0]);
    if (o === 7) out.push([row[1] + 'ʷ', 'a', row[2] + 'ʷ', 'a']);
    else if (o === 0 && guttural) out.push([row[1], 'a', row[2], 'a']);
    else out.push([row[1], AM_V_IPA[o], row[2], AM_V_TR[o]]);
  }
  return out;
}

const AM_WORD = /[ሀ-፿]+/g;

/** Amárico em IPA: a 6.ª ordem sai [ɨ] no meio da palavra e sem vogal no fim; ʔ inicial some antes de vogal. */
export function toIpaAm(text: string): string {
  const words = text.match(AM_WORD);
  if (!words) return '';
  const ipa = words.map((w) => {
    const s = amSyllables(w);
    // 6.ª ordem: [ɨ] só no começo da palavra ou para não juntar três consoantes; no resto, sem vogal
    let out = '';
    let prevVowel = true;
    s.forEach(([c, v], i) => {
      const cons = c === 'ʔ' && i === 0 ? '' : c;
      let vowel = v;
      if (v === 'ɨ') vowel = i === 0 ? 'ɨ' : !prevVowel && i < s.length - 1 ? 'ɨ' : '';
      out += cons + vowel;
      prevVowel = vowel !== '';
    });
    return out;
  });
  return `[${ipa.join(' ')}]`;
}

/** Amárico em letras latinas (transliteração simplificada, como nos livros didáticos): ሰላም → sälam. */
export function transliterateAm(text: string): string {
  return text.replace(AM_WORD, (w) => {
    const s = amSyllables(w);
    return s
      .map(([, , c, v], i) => {
        const cons = (c === 'ʾ' || c === 'ʿ') && i === 0 ? '' : c;
        const vowel = v === 'ə' && i === s.length - 1 ? '' : v;
        return cons + vowel;
      })
      .join('');
  }).replace(/።/g, '.').replace(/፣/g, ',').replace(/፧/g, '?').replace(/፤/g, ';').replace(/፡/g, ' ');
}
