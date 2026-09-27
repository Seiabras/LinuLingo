/**
 * Transcrição fonética (IPA) do português por regras, em duas normas:
 * 'PT' (Portugal, padrão de Lisboa) e 'BR' (Brasil, padrão do Sudeste).
 *
 * A ortografia mostra quase sempre onde cai a tônica (acento gráfico, ou as regras das
 * paroxítonas e oxítonas), mas não mostra o timbre de «e» e «o» tônicos (porta [ɔ] × porto [o],
 * festa [ɛ] × mesa [e]) nem os valores do «x». Para isso há um dicionário de pronúncia com
 * a grafia dos dicionários: acento na vogal tônica (é ó abertos, ê ô fechados, á à-aberto,
 * â fechado, í ú), «ẋ» para x = [ks] (táẋi) e «ẍ» para x = [s] (próẍimo).
 *
 * Portugal: átonas reduzidas (a → [ɐ], e → [ɨ], o → [u]), «s» e «z» no fim da sílaba = [ʃ ʒ],
 * «r» forte uvular [ʁ], «l» no fim da sílaba velar [ɫ], «ei» = [ɐj], «-em» final = [ɐ̃j̃].
 * Brasil: átonas finais [i u ɐ], t/d antes de [i] = [tʃ dʒ], «l» no fim da sílaba = [w],
 * «r» forte e no fim da sílaba = [h], «s» no fim da sílaba = [s].
 */

export type PtNorm = 'PT' | 'BR';
export type PronunciationLexicon = Record<string, string>;

/** Marca de tônica (e timbre) → [vogal, IPA] */
const STRESS: Record<string, [string, string]> = {
  á: ['a', 'a'],
  â: ['a', 'ɐ'],
  é: ['e', 'ɛ'],
  ê: ['e', 'e'],
  í: ['i', 'i'],
  ó: ['o', 'ɔ'],
  ô: ['o', 'o'],
  ú: ['u', 'u'],
};

type Vow = { kind: 'V'; v: string; mark?: string; nasal: boolean; role?: 'nucleus' | 'glide' };
type Cons = { kind: 'C'; c: string; coda?: boolean };
type Seg = Vow | Cons;

const VOWEL = /[aeiouáâãàéêíóôõú]/;
const isV = (ch?: string) => !!ch && VOWEL.test(ch);
const FRONT = /[eiéêí]/;

/** Letras → segmentos (consoantes já com o som, vogais ainda sem timbre). */
function segments(w: string): Seg[] {
  const out: Seg[] = [];
  const V = (v: string, mark?: string, nasal = false) => out.push({ kind: 'V', v, mark, nasal });
  const C = (c: string) => out.push({ kind: 'C', c });
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const nx = w[i + 1];
    const nx2 = w[i + 2];
    if (STRESS[ch]) {
      V(STRESS[ch][0], ch);
      continue;
    }
    if (ch === 'ã' || ch === 'õ') {
      V(ch === 'ã' ? 'a' : 'o', ch, true);
      continue;
    }
    if (ch === 'à') {
      V('a', 'à');
      continue;
    }
    if ('aeiou'.includes(ch)) {
      V(ch);
      continue;
    }
    switch (ch) {
      case 'c':
        if (nx === 'h') {
          C('ʃ');
          i++;
        } else C(FRONT.test(nx ?? '') ? 's' : 'k');
        break;
      case 'ç':
        C('s');
        break;
      case 'g':
        if (nx === 'u' && FRONT.test(nx2 ?? '')) {
          C('g');
          i++;
        } else if (nx === 'u' && /[aoáóâô]/.test(nx2 ?? '')) {
          // água, guarda: [gw]
          C('g');
          out.push({ kind: 'V', v: 'u', nasal: false, role: 'glide' });
          i++;
        } else C(FRONT.test(nx ?? '') ? 'ʒ' : 'g');
        break;
      case 'q':
        C('k');
        if (nx === 'u') {
          // que, qui: o u não soa; qua, quo: [kw]
          if (FRONT.test(nx2 ?? '')) i++;
          else {
            out.push({ kind: 'V', v: 'u', nasal: false, role: 'glide' });
            i++;
          }
        }
        break;
      case 'l':
        if (nx === 'h') {
          C('ʎ');
          i++;
        } else C('l');
        break;
      case 'n':
        if (nx === 'h') {
          C('ɲ');
          i++;
        } else C('n');
        break;
      case 'r':
        if (nx === 'r') {
          C('R');
          i++;
        } else C(i === 0 || /[nls]/.test(w[i - 1] ?? '') ? 'R' : 'ɾ');
        break;
      case 's':
        if (nx === 's') {
          C('s');
          i++;
        } else if (nx === 'c' && FRONT.test(nx2 ?? '')) {
          // nascer, descer: o «sc» é um [s] só (Portugal: [ʃs])
          C('S');
          C('s');
          i += 1;
        } else C(isV(w[i - 1]) && isV(nx) ? 'z' : 'S');
        break;
      case 'z':
        C(i === w.length - 1 ? 'S' : 'z');
        break;
      case 'x':
        // ex + vogal = [z] (exame); senão [ʃ] (xícara, caixa)
        if (i > 0 && /^e$/.test(w[i - 1]) && isV(nx) && i === 1) C('z');
        else C('ʃ');
        break;
      case 'ẋ':
        C('k');
        C('s');
        break;
      case 'ẍ':
        C('s');
        break;
      case 'j':
        C('ʒ');
        break;
      case 'h':
        break;
      case 'w':
        C('w');
        break;
      case 'y':
        V('i');
        break;
      case 'k':
        C('k');
        break;
      default:
        if (/[bdfmptv]/.test(ch)) C(ch);
    }
  }
  return out;
}

/** Vogal + m/n no fim da sílaba vira vogal nasal (campo, tempo, fim, bom, um). */
function nasalize(segs: Seg[]): Seg[] {
  const out: Seg[] = [];
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    const n = segs[i + 1];
    const after = segs[i + 2];
    if (s.kind === 'V' && n?.kind === 'C' && (n.c === 'm' || n.c === 'n') && (!after || after.kind === 'C')) {
      out.push({ ...s, nasal: true });
      i++;
      continue;
    }
    out.push(s);
  }
  return out;
}

/** Núcleos: i/u átonos depois de vogal viram semivogal (pai, meu, mãe, põe); antes de vogal ficam em hiato (rio, lua). */
function nuclei(segs: Seg[]): number[] {
  const nuc: number[] = [];
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    if (s.kind !== 'V' || s.role === 'glide') continue;
    const prev = segs[i - 1];
    const weak = !s.mark && (s.v === 'i' || s.v === 'u' || (s.v === 'e' && prev?.kind === 'V' && prev.nasal) || (s.v === 'o' && prev?.kind === 'V' && prev.nasal && prev.v === 'a'));
    if (weak && prev?.kind === 'V' && prev.role === 'nucleus' && !(prev.v === s.v)) {
      s.role = 'glide';
      continue;
    }
    s.role = 'nucleus';
    nuc.push(i);
  }
  return nuc;
}

/** Sílaba tônica pela ortografia: acento gráfico; til; senão paroxítona ou oxítona pela terminação. */
function stressIndex(word: string, segs: Seg[], nuc: number[]): number {
  const marked = nuc.findIndex((n) => {
    const v = segs[n] as Vow;
    return !!v.mark && v.mark !== 'à' && v.mark !== 'ã' && v.mark !== 'õ';
  });
  if (marked >= 0) return marked;
  const til = nuc.findIndex((n) => {
    const v = segs[n] as Vow;
    return v.mark === 'ã' || v.mark === 'õ';
  });
  if (til >= 0) return til;
  if (nuc.length < 2) return 0;
  // paroxítonas: terminam em a, e, o (+s), em, ens, am
  return /([aeo]s?|em|ens|am)$/.test(word) ? nuc.length - 2 : nuc.length - 1;
}

/** Uma palavra em IPA, sem colchetes. */
export function wordToIpaPt(raw: string, norm: PtNorm = 'PT', lex: PronunciationLexicon | undefined = LEXICON): string {
  const lower = raw.toLowerCase().normalize('NFC');
  const word = lex?.[lower] ?? lower;
  const segs = nasalize(segments(word));
  const nuc = nuclei(segs);
  if (!nuc.length) return segs.map((s) => (s.kind === 'C' ? consonant(s.c, norm, true, false) : '')).join('');
  const stressed = stressIndex(lower, segs, nuc);
  const out: string[] = [];
  const lastNuc = nuc[nuc.length - 1];
  segs.forEach((s, i) => {
    const prev = segs[i - 1];
    const next = segs[i + 1];
    if (s.kind === 'C') {
      // fim de sílaba: antes de outra consoante (sem ser grupo pr/bl…) ou no fim da palavra
      const coda = !next || (next.kind === 'C' && !(/[ɾl]/.test(next.c) && /[pbtdkgfv]/.test(s.c)));
      let c = consonant(s.c, norm, coda, next?.kind === 'C' && /[bdgvzʒmnlɾR]/.test(next.c));
      // Brasil: t/d antes de [i] (inclusive o «e» final átono) viram [tʃ dʒ]
      if (norm === 'BR' && (c === 't' || c === 'd') && next?.kind === 'V') {
        const idx = nuc.indexOf(i + 1);
        const becomesI = next.v === 'i' || (next.v === 'e' && !next.mark && idx === nuc.length - 1 && idx !== stressed);
        if (becomesI) c = c === 't' ? 't͡ʃ' : 'd͡ʒ';
      }
      out.push(c);
      return;
    }
    if (s.role === 'glide') {
      // «ou» = [o] (ouvir, pouco); a semivogal some
      if (s.v === 'u' && prev?.kind === 'V' && prev.v === 'o' && !prev.nasal) {
        out.push('');
        return;
      }
      out.push(s.v === 'i' || s.v === 'e' ? 'j' : 'w');
      if (s.nasal || (prev?.kind === 'V' && prev.nasal)) out[out.length - 1] += '̃';
      return;
    }
    const idx = nuc.indexOf(i);
    const isStressed = idx === stressed;
    const final = i === lastNuc && !segs.slice(i + 1).some((x) => x.kind === 'V');
    out.push(vowel(s, isStressed, final, idx < stressed, norm, next, segs[i + 2], i === 0));
  });
  // -em / -ens finais: [ɐ̃j̃] em Portugal, [ẽj̃] no Brasil; -am final = [ɐ̃w̃]
  let ipa = out.join('');
  ipa = fixFinalNasals(lower, ipa, norm);
  if (nuc.length > 1) ipa = placeStress(segs, nuc, stressed, out, ipa, lower, norm);
  return ipa.normalize('NFC');
}

function consonant(c: string, norm: PtNorm, coda: boolean, voicedNext: boolean): string {
  switch (c) {
    case 'R':
      return norm === 'PT' ? 'ʁ' : 'h';
    case 'ɾ':
      return coda && norm === 'BR' ? 'h' : 'ɾ';
    case 'S':
      if (!coda) return 's';
      if (norm === 'PT') return voicedNext ? 'ʒ' : 'ʃ';
      return voicedNext ? 'z' : 's';
    case 'l':
      return coda ? (norm === 'PT' ? 'ɫ' : 'w') : 'l';
    default:
      return c;
  }
}

function vowel(s: Vow, stressed: boolean, final: boolean, pretonic: boolean, norm: PtNorm, next?: Seg, after?: Seg, wordStart = false): string {
  const nasalMark = s.nasal ? '̃' : '';
  if (s.nasal) {
    const base = s.v === 'a' ? 'ɐ' : s.v === 'e' ? 'e' : s.v === 'o' ? 'o' : s.v;
    return base + nasalMark;
  }
  // antes de consoante nasal na sílaba seguinte (cama, cena, sono), a tônica fica fechada
  const nasalNext = next?.kind === 'C' && /[mnɲ]/.test(next.c) && after?.kind === 'V';
  // Lisboa: «e» tônico fechado antes de lh, nh, ch, j soa [ɐ] (espelho, venho, fecho, igreja)
  const palatalNext = next?.kind === 'C' && /^[ʎɲʃʒ]$/.test(next.c) && after?.kind === 'V';
  if (stressed && norm === 'PT' && s.v === 'e' && s.mark !== 'é' && palatalNext) return 'ɐ';
  if (stressed) {
    if (s.mark && STRESS[s.mark]) return s.mark === 'á' && nasalNext ? 'ɐ' : STRESS[s.mark][1];
    if (s.v === 'a') return nasalNext ? 'ɐ' : 'a';
    return s.v;
  }
  // o ditongo «ou» não reduz: ouvir [oˈviɾ], pouco
  if (s.v === 'o' && next?.kind === 'V' && next.role === 'glide' && next.v === 'u') return 'o';
  // crase «à» é [a] aberto
  if (s.mark === 'à') return 'a';
  if (s.mark && STRESS[s.mark]) return STRESS[s.mark][1];
  // -el átono final: móvel, fácil? (só «e»): [ɛ] em Portugal
  if (s.v === 'e' && next?.kind === 'C' && next.c === 'l' && !after) return norm === 'PT' ? 'ɛ' : 'e';
  if (norm === 'PT') {
    if (s.v === 'a') return 'ɐ';
    // «e» átono no começo da palavra soa [i]: escola, exame, estar
    if (s.v === 'e') return wordStart ? 'i' : 'ɨ';
    if (s.v === 'o') return 'u';
    return s.v;
  }
  // Brasil: pretônicas mantêm o timbre; postônicas finais reduzem
  if (final) {
    if (s.v === 'e') return 'i';
    if (s.v === 'o') return 'u';
    if (s.v === 'a') return 'ɐ';
  }
  if (!pretonic && s.v === 'a') return 'ɐ';
  return s.v;
}

function fixFinalNasals(word: string, ipa: string, norm: PtNorm): string {
  if (/(em|ém|ens|éns)$/.test(word)) return ipa.replace(/[eɛ]̃(ʃ|s)?$/, (_, s) => (norm === 'PT' ? 'ɐ̃j̃' : 'ẽj̃') + (s ?? ''));
  if (/am$/.test(word)) return ipa.replace(/ɐ̃$/, 'ɐ̃w̃');
  if (/ão(s)?$/.test(word)) return ipa.replace(/ɐ̃(w̃|u|o)(ʃ|s)?$/, (_, _g, s) => 'ɐ̃w̃' + (s ?? ''));
  if (/ões$/.test(word)) return ipa.replace(/õ(j̃|e|ɨ|i)(ʃ|s)$/, (_, _g, s) => 'õj̃' + s);
  if (/ães$/.test(word) || /ãe$/.test(word)) return ipa.replace(/ɐ̃(j̃|e|ɨ|i)(ʃ|s)?$/, (_, _g, s) => 'ɐ̃j̃' + (s ?? ''));
  if (norm === 'PT') return ipa.replace(/ej/g, 'ɐj');
  return ipa;
}

/** Põe a marca ˈ antes do ataque da sílaba tônica. */
function placeStress(segs: Seg[], nuc: number[], stressed: number, parts: string[], joined: string, _w: string, _n: PtNorm): string {
  let pos = nuc[stressed];
  // recua sobre semivogal de ataque (qua) e consoantes do ataque (uma, ou grupo pr/bl)
  while (pos > 0 && segs[pos - 1].kind === 'V' && (segs[pos - 1] as Vow).role === 'glide' && pos - 1 > 0 && segs[pos - 2].kind === 'C') pos--;
  if (pos > 0 && segs[pos - 1].kind === 'C') {
    pos--;
    const c = segs[pos] as Cons;
    const before = segs[pos - 1];
    if (before?.kind === 'C' && /[ɾl]/.test(c.c) && /[pbtdkgfv]/.test(before.c)) pos--;
  }
  // parts tem um item por segmento, mas as correções finais podem ter mudado o fim: reconstrói pelo prefixo
  const prefix = parts.slice(0, pos).join('');
  return joined.startsWith(prefix) ? prefix + 'ˈ' + joined.slice(prefix.length) : 'ˈ' + joined;
}

/** Frase inteira em IPA, entre colchetes. */
export function toIpaPt(text: string, norm: PtNorm = 'PT', lex: PronunciationLexicon | undefined = LEXICON): string {
  const words = text.split(/[^\p{L}-]+/u).flatMap((w) => w.split('-')).filter((w) => /\p{L}/u.test(w));
  const ipa = words.map((w) => {
    const lw = w.toLowerCase();
    // monossílabos átonos: artigos, preposições, pronomes oblíquos, conjunções
    if (norm === 'PT' && CLITIC_PT[lw]) return CLITIC_PT[lw];
    if (norm === 'BR' && CLITIC_BR[lw]) return CLITIC_BR[lw];
    return wordToIpaPt(w, norm, lex);
  });
  return ipa.length ? `[${ipa.join(' ')}]` : '';
}

const CLITIC_PT: Record<string, string> = { o: 'u', os: 'uʃ', a: 'ɐ', as: 'ɐʃ', e: 'i', de: 'dɨ', que: 'kɨ', se: 'sɨ', me: 'mɨ', te: 'tɨ', lhe: 'ʎɨ', lhes: 'ʎɨʃ', nos: 'nuʃ', vos: 'vuʃ', do: 'du', dos: 'duʃ', da: 'dɐ', das: 'dɐʃ', no: 'nu', na: 'nɐ', ao: 'aw', um: 'ũ', em: 'ɐ̃j̃', por: 'puɾ', com: 'kõ', sem: 'sɐ̃j̃', mas: 'mɐʃ' };
const CLITIC_BR: Record<string, string> = { o: 'u', os: 'us', a: 'a', as: 'as', e: 'i', de: 'd͡ʒi', que: 'ki', se: 'si', me: 'mi', te: 't͡ʃi', lhe: 'ʎi', nos: 'nus', vos: 'vus', do: 'du', dos: 'dus', da: 'da', das: 'das', no: 'nu', na: 'na', ao: 'aw', um: 'ũ', em: 'ẽj̃', por: 'poh', com: 'kõ', sem: 'sẽj̃', mas: 'mas' };

let LEXICON: PronunciationLexicon | undefined;

/** Registra o dicionário de pronúncia padrão (src/data/pt/pronuncia.ts). */
export function setPronunciationLexiconPt(lex: PronunciationLexicon) {
  LEXICON = lex;
}
