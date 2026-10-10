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

/**
 * Traços de pronúncia que mudam de um sotaque para outro. Cada norma ('PT', 'BR') tem os seus
 * traços padrão (TRACOS_PT, TRACOS_BR); um sotaque passa só o que muda (o carioca: `sCoda: 'ʃ'`),
 * e a IPA dele sai com o chiado, o «r» e as vogais de lá.
 */
export interface TracosPt {
  /**
   * «s» e «z» no fim da sílaba: [ʃ] (Rio, Lisboa), [s] (São Paulo), [h] (Barrancos, o «s» aspirado),
   * 'ʃtd' (Nordeste: chiado só antes de t e d, «festa» [ˈfɛʃtɐ], «mas» [mas]) ou 'ʃtd-ɦ' (Ceará: além
   * disso, o sonoro vira [ɦ], «mesmo» [ˈmeɦmu])
   */
  sCoda: 'ʃ' | 's' | 'h' | 'ʃtd' | 'ʃtd-ɦ';
  /** «r» no fim da sílaba: [ɾ] (São Paulo, Sul, Portugal), [h] ou [χ] (Rio, BH), [ɻ] (caipira) */
  rCoda: 'ɾ' | 'h' | 'χ' | 'ɻ' | 'ʁ';
  /** «r» forte (inicial e «rr»): [ʁ] (Lisboa), [h] ou [χ] (Brasil), [r] (vibrante: Sul, interior de Portugal), [ɾ] (Moçambique) */
  rForte: 'ʁ' | 'h' | 'χ' | 'r' | 'ɾ';
  /** «l» no fim da sílaba: [ɫ] velar (Portugal, Sul do Brasil) ou [w] (quase todo o Brasil) */
  lCoda: 'ɫ' | 'w';
  /** t/d chiados [tʃ dʒ]: antes de [i] ('sempre'), nunca, ou só depois do ditongo em [j] (Recife: «oito» [ˈojtʃu]) */
  palatalTD: 'sempre' | 'nunca' | 'apos-j';
  /** «e» átono final: [i] (Brasil), [e] (interior gaúcho, África), [ɨ] (Portugal) */
  eFinal: 'i' | 'e' | 'ɨ';
  /** «ch»: [ʃ], ou [tʃ] como no português medieval (Trás-os-Montes, Cuiabá) */
  ch: 'ʃ' | 't͡ʃ';
  /** «j» e «g» antes de e/i: [ʒ], [dʒ] (Cuiabá) ou [x], a «jota» espanhola (Barrancos) */
  j: 'ʒ' | 'd͡ʒ' | 'x';
  /** «r» e «l» no fim da palavra caem: «estar» [iʃˈta] (Moçambique), «Manuel» [mɐˈnwe] (Barrancos) */
  rFinalCai: boolean;
  /** «v» soa [b] (Norte de Portugal) */
  betacismo: boolean;
  /** «ei»: [ɐj] (Lisboa), [ej], [e] (Sul de Portugal) */
  ei: 'ɐj' | 'ej' | 'e';
  /** «ou»: [o] (padrão) ou [ow] (Norte de Portugal) */
  ou: 'o' | 'ow';
  /** «u» tônico: [u], ou [y] como o «u» francês (São Miguel, Beira Baixa) */
  uTonico: 'u' | 'y';
  /** Pretônicas abertas do Nordeste: «pequeno» [pɛˈkenu], «Recife» [hɛˈsifi] */
  pretonicaAberta: boolean;
  /** Átonas de Portugal reduzidas ([ɐ ɨ u]) ou plenas (África, Timor: «telefone» [teleˈfɔne]) */
  atonas: 'reduzidas' | 'plenas';
}

export const TRACOS_PT: TracosPt = {
  sCoda: 'ʃ',
  rCoda: 'ɾ',
  rForte: 'ʁ',
  lCoda: 'ɫ',
  palatalTD: 'nunca',
  eFinal: 'ɨ',
  ch: 'ʃ',
  j: 'ʒ',
  betacismo: false,
  ei: 'ɐj',
  ou: 'o',
  uTonico: 'u',
  pretonicaAberta: false,
  atonas: 'reduzidas',
  rFinalCai: false,
};

export const TRACOS_BR: TracosPt = {
  ...TRACOS_PT,
  sCoda: 's',
  rCoda: 'h',
  rForte: 'h',
  lCoda: 'w',
  palatalTD: 'sempre',
  eFinal: 'i',
  ei: 'ej',
};

const tracosDe = (norm: PtNorm, tr?: Partial<TracosPt>): TracosPt => ({ ...(norm === 'PT' ? TRACOS_PT : TRACOS_BR), ...tr });

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
          // «ch» guarda marca própria: em Trás-os-Montes e em Cuiabá ainda soa [tʃ], diferente do «x»
          C('Ʃ');
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
        } else C(FRONT.test(nx ?? '') ? 'Ʒ' : 'g');
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
        C('Ʒ');
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
export function wordToIpaPt(raw: string, norm: PtNorm = 'PT', lex: PronunciationLexicon | undefined = LEXICON, tr?: Partial<TracosPt>): string {
  const T = tracosDe(norm, tr);
  const lower = raw.toLowerCase().normalize('NFC');
  const word = lex?.[lower] ?? lower;
  const segs = nasalize(segments(word));
  const nuc = nuclei(segs);
  if (!nuc.length) return segs.map((s) => (s.kind === 'C' ? consonant(s.c, T, true, false) : '')).join('');
  const stressed = stressIndex(lower, segs, nuc);
  const out: string[] = [];
  const lastNuc = nuc[nuc.length - 1];
  segs.forEach((s, i) => {
    const prev = segs[i - 1];
    const next = segs[i + 1];
    if (s.kind === 'C') {
      // fim de sílaba: antes de outra consoante (sem ser grupo pr/bl…) ou no fim da palavra
      const coda = !next || (next.kind === 'C' && !(/[ɾl]/.test(next.c) && /[pbtdkgfv]/.test(s.c)));
      let c = consonant(s.c, T, coda, next?.kind === 'C' && /[bdgvzʒƷmnlɾR]/.test(next.c), next?.kind === 'C' ? next.c : undefined);
      // Brasil: t/d antes de [i] (inclusive o «e» final átono) viram [tʃ dʒ]; no Recife, só depois de [j]
      if ((c === 't' || c === 'd') && next?.kind === 'V') {
        const idx = nuc.indexOf(i + 1);
        const becomesI = next.v === 'i' || (next.v === 'e' && !next.mark && idx === nuc.length - 1 && idx !== stressed && T.eFinal === 'i');
        const afterJ = prev?.kind === 'V' && prev.role === 'glide' && (prev.v === 'i' || prev.v === 'e');
        if ((T.palatalTD === 'sempre' && becomesI) || (T.palatalTD === 'apos-j' && afterJ)) c = c === 't' ? 't͡ʃ' : 'd͡ʒ';
      }
      if (T.rFinalCai && !next && (s.c === 'ɾ' || s.c === 'l')) c = '';
      out.push(c);
      return;
    }
    if (s.role === 'glide') {
      // «ou» = [o] (ouvir, pouco); a semivogal some
      if (s.v === 'u' && prev?.kind === 'V' && prev.v === 'o' && !prev.nasal && T.ou === 'o') {
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
    out.push(vowel(s, isStressed, final, idx < stressed, norm, T, next, segs[i + 2], i === 0));
  });
  // -em / -ens finais: [ɐ̃j̃] em Portugal, [ẽj̃] no Brasil; -am final = [ɐ̃w̃]
  let ipa = out.join('');
  ipa = fixFinalNasals(lower, ipa, norm, T);
  if (nuc.length > 1) ipa = placeStress(segs, nuc, stressed, out, ipa, lower, norm);
  return ipa.normalize('NFC');
}

function consonant(c: string, T: TracosPt, coda: boolean, voicedNext: boolean, nextC?: string): string {
  switch (c) {
    case 'R':
      return T.rForte;
    case 'ɾ':
      return coda ? T.rCoda : 'ɾ';
    case 'S':
      if (!coda) return 's';
      if (T.sCoda === 'ʃ') return voicedNext ? 'ʒ' : 'ʃ';
      if (T.sCoda === 'h') return voicedNext ? 'ɦ' : 'h';
      if ((T.sCoda === 'ʃtd' || T.sCoda === 'ʃtd-ɦ') && (nextC === 't' || nextC === 'd')) return nextC === 'd' ? 'ʒ' : 'ʃ';
      if (T.sCoda === 'ʃtd-ɦ' && voicedNext) return 'ɦ';
      return voicedNext ? 'z' : 's';
    case 'l':
      return coda ? T.lCoda : 'l';
    case 'Ʃ':
      return T.ch;
    case 'Ʒ':
      return T.j;
    case 'v':
      return T.betacismo ? 'b' : 'v';
    default:
      return c;
  }
}

function vowel(s: Vow, stressed: boolean, final: boolean, pretonic: boolean, norm: PtNorm, T: TracosPt, next?: Seg, after?: Seg, wordStart = false): string {
  const nasalMark = s.nasal ? '̃' : '';
  if (s.nasal) {
    const base = s.v === 'a' ? 'ɐ' : s.v === 'e' ? 'e' : s.v === 'o' ? 'o' : s.v;
    return base + nasalMark;
  }
  // antes de consoante nasal na sílaba seguinte (cama, cena, sono), a tônica fica fechada
  const nasalNext = next?.kind === 'C' && /[mnɲ]/.test(next.c) && after?.kind === 'V';
  // Lisboa: «e» tônico fechado antes de lh, nh, ch, j soa [ɐ] (espelho, venho, fecho, igreja)
  const palatalNext = next?.kind === 'C' && /^[ʎɲʃʒƩƷ]$/.test(next.c) && after?.kind === 'V';
  if (stressed && norm === 'PT' && T.ei === 'ɐj' && s.v === 'e' && s.mark !== 'é' && palatalNext) return 'ɐ';
  if (stressed) {
    if (T.uTonico === 'y' && s.v === 'u') return 'y';
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
  if (norm === 'PT' && T.atonas === 'plenas') {
    // África e Timor: as átonas não se apagam como em Lisboa («telefone» [teleˈfɔne])
    if (s.v === 'a') return final ? 'ɐ' : 'a';
    if (s.v === 'e') return final ? T.eFinal : wordStart ? 'i' : 'e';
    if (s.v === 'o') return final ? 'u' : 'o';
    return s.v;
  }
  if (norm === 'PT') {
    if (s.v === 'a') return 'ɐ';
    // «e» átono no começo da palavra soa [i]: escola, exame, estar
    if (s.v === 'e') return wordStart ? 'i' : final ? T.eFinal : 'ɨ';
    if (s.v === 'o') return 'u';
    return s.v;
  }
  // Brasil: pretônicas mantêm o timbre (abertas no Nordeste); postônicas finais reduzem
  if (final) {
    if (s.v === 'e') return T.eFinal === 'e' ? 'e' : 'i';
    if (s.v === 'o') return 'u';
    if (s.v === 'a') return 'ɐ';
  }
  if (!pretonic && s.v === 'a') return 'ɐ';
  if (pretonic && T.pretonicaAberta && !nasalNext && (s.v === 'e' || s.v === 'o')) return s.v === 'e' ? 'ɛ' : 'ɔ';
  return s.v;
}

function fixFinalNasals(word: string, ipa: string, norm: PtNorm, T: TracosPt): string {
  if (/(em|ém|ens|éns)$/.test(word)) return ipa.replace(/[eɛ]̃(ʃ|s|h)?$/, (_, s) => (norm === 'PT' && T.ei === 'ɐj' ? 'ɐ̃j̃' : 'ẽj̃') + (s ?? ''));
  if (/am$/.test(word)) return ipa.replace(/ɐ̃$/, 'ɐ̃w̃');
  if (/ão(s)?$/.test(word)) return ipa.replace(/ɐ̃(w̃|u|o)(ʃ|s|h)?$/, (_, _g, s) => 'ɐ̃w̃' + (s ?? ''));
  if (/ões$/.test(word)) return ipa.replace(/õ(j̃|e|ɨ|i)(ʃ|s|h)$/, (_, _g, s) => 'õj̃' + s);
  if (/ães$/.test(word) || /ãe$/.test(word)) return ipa.replace(/ɐ̃(j̃|e|ɨ|i)(ʃ|s|h)?$/, (_, _g, s) => 'ɐ̃j̃' + (s ?? ''));
  if (T.ei === 'ɐj') return ipa.replace(/ej/g, 'ɐj');
  if (T.ei === 'e') return ipa.replace(/ej/g, 'e');
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
export function toIpaPt(text: string, norm: PtNorm = 'PT', lex: PronunciationLexicon | undefined = LEXICON, tr?: Partial<TracosPt>): string {
  const T = tracosDe(norm, tr);
  const words = text.split(/[^\p{L}-]+/u).flatMap((w) => w.split('-')).filter((w) => /\p{L}/u.test(w));
  const ipa = words.map((w) => {
    const lw = w.toLowerCase();
    // monossílabos átonos: artigos, preposições, pronomes oblíquos, conjunções
    const clitic = norm === 'PT' ? CLITIC_PT[lw] : CLITIC_BR[lw];
    if (clitic) return tr ? cliticoNoSotaque(clitic, norm, T) : clitic;
    return wordToIpaPt(w, norm, lex, tr);
  });
  return ipa.length ? `[${ipa.join(' ')}]` : '';
}

const CLITIC_PT: Record<string, string> = { o: 'u', os: 'uʃ', a: 'ɐ', as: 'ɐʃ', e: 'i', de: 'dɨ', que: 'kɨ', se: 'sɨ', me: 'mɨ', te: 'tɨ', lhe: 'ʎɨ', lhes: 'ʎɨʃ', nos: 'nuʃ', vos: 'vuʃ', do: 'du', dos: 'duʃ', da: 'dɐ', das: 'dɐʃ', no: 'nu', na: 'nɐ', ao: 'aw', um: 'ũ', em: 'ɐ̃j̃', por: 'puɾ', com: 'kõ', sem: 'sɐ̃j̃', mas: 'mɐʃ' };
const CLITIC_BR: Record<string, string> = { o: 'u', os: 'us', a: 'a', as: 'as', e: 'i', de: 'd͡ʒi', que: 'ki', se: 'si', me: 'mi', te: 't͡ʃi', lhe: 'ʎi', nos: 'nus', vos: 'vus', do: 'du', dos: 'dus', da: 'da', das: 'das', no: 'nu', na: 'na', ao: 'aw', um: 'ũ', em: 'ẽj̃', por: 'poh', com: 'kõ', sem: 'sẽj̃', mas: 'mas' };

/** Os clíticos prontos, ajustados aos traços do sotaque: o «s» final, o «r» de «por», o «de» chiado ou não, as átonas plenas. */
function cliticoNoSotaque(ipa: string, norm: PtNorm, T: TracosPt): string {
  const base = norm === 'PT' ? TRACOS_PT : TRACOS_BR;
  let out = ipa;
  // o «s» do clítico está no fim da palavra: só os sotaques que chiam (ou aspiram) em toda parte mudam
  const sFinal = T.sCoda === 'ʃ' || T.sCoda === 'h' ? T.sCoda : 's';
  if (sFinal !== base.sCoda) out = out.replace(/[sʃ]$/, sFinal);
  if (T.rCoda !== base.rCoda) out = out.replace(/[ɾh]$/, T.rCoda);
  if (T.palatalTD !== 'sempre') out = out.replace('t͡ʃ', 't').replace('d͡ʒ', 'd');
  if (T.palatalTD === 'sempre' && base.palatalTD !== 'sempre') out = out.replace(/^t(?=i)/, 't͡ʃ').replace(/^d(?=i)/, 'd͡ʒ');
  if (T.betacismo) out = out.replace(/^v/, 'b');
  // Curitiba e o interior gaúcho: o «e» final é [e] também em «de», «que», «me»
  if (norm === 'BR' && T.eFinal === 'e') out = out.replace(/^t͡ʃi$/, 'te').replace(/^d͡ʒi$/, 'de').replace(/^([kmsʎ])i$/, '$1e');
  if (T.rFinalCai) out = out.replace(/[ɾh]$/, '');
  if (norm === 'PT' && T.ei !== 'ɐj') out = out.replace('ɐ̃j̃', 'ẽj̃');
  if (norm === 'PT' && T.atonas === 'plenas') out = out.replace(/ɨ/g, 'e').replace(/ɐ(?![̃ʃ])/g, 'a');
  return out;
}

let LEXICON: PronunciationLexicon | undefined;

/** Registra o dicionário de pronúncia padrão (src/data/pt/pronuncia.ts). */
export function setPronunciationLexiconPt(lex: PronunciationLexicon) {
  LEXICON = lex;
}
