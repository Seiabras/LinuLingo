/**
 * Transcrição fonética (IPA) do catalão central (Barcelona) por regras, com um dicionário de exceções.
 *
 * O que as regras cobrem: a tônica pela ortografia (acento gráfico; sem acento, a palavra terminada em
 * vogal, vogal + s, -en ou -in é paroxítona e as outras, oxítonas); a redução das átonas (a, e → [ə];
 * o → [u]); ll [ʎ], ny [ɲ], l·l [ll], x [ʃ] (e o «i» mudo de «caixa»), tx [tʃ], tj/tg [dʒ], tz [dz],
 * -ig [tʃ], j/g+e,i [ʒ]; o s sonoro entre vogais; o r forte e o r brando; b, d, g brandos [β ð ɣ] entre
 * vogais; as consoantes finais que não soam (cantant, tinc, camp, molt) e o -r mudo das palavras de
 * mais de uma sílaba (parlar, tardor); o ensurdecimento final (verd [ˈbɛrt]). O timbre de «e» e «o»
 * tônicos sem acento gráfico (nen [ɛ], vell [e]) não se vê na escrita: as regras dão [ɛ] e [ɔ], e o
 * dicionário (src/data/ca/pronuncia.ts) corrige as palavras que fogem disso.
 */

/** Dicionário de pronúncia do conteúdo: forma em minúsculas → IPA sem colchetes. */
let LEXICON: Record<string, string> = {};
export function setPronunciationLexiconCa(lex: Record<string, string>) {
  LEXICON = lex;
}

const VOWELS = 'aeiouàèéíïòóúü';
const isVowelCh = (c: string | undefined) => !!c && VOWELS.includes(c);
const STRESS_MARKED: Record<string, string> = { à: 'a', è: 'ɛ', é: 'e', í: 'i', ò: 'ɔ', ó: 'o', ú: 'u' };

type Seg =
  | { t: 'C'; ipa: string; ch: string }
  | { t: 'V'; ch: string; stressed: boolean; diaeresis: boolean; glide?: boolean; hiatus?: boolean };

/** Palavras átonas (artigos, preposições, pronomes fracos, conjunções): forma reduzida. */
const CLITIC: Record<string, string> = {
  el: 'əl', la: 'lə', els: 'əls', les: 'ləs', lo: 'lu', los: 'lus',
  al: 'əl', als: 'əls', del: 'dəl', dels: 'dəls', pel: 'pəl', pels: 'pəls',
  de: 'də', a: 'ə', en: 'ən', amb: 'əm', per: 'pəɾ', i: 'i', o: 'u', que: 'kə', ni: 'ni', si: 'si',
  em: 'əm', et: 'ət', es: 'əs', ens: 'əns', us: 'us', li: 'li', ho: 'u', hi: 'i', ne: 'nə',
  me: 'mə', te: 'tə', se: 'sə', nos: 'nus', vos: 'bus', lis: 'lis',
  l: 'l', d: 'd', m: 'm', t: 't', s: 's', n: 'n', ls: 'ls', ns: 'ns',
};

function parse(w: string): Seg[] {
  const segs: Seg[] = [];
  const C = (ipa: string, ch = '') => segs.push({ t: 'C', ipa, ch });
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const nx = w[i + 1];
    const nx2 = w[i + 2];
    const prev = w[i - 1];
    if (isVowelCh(ch)) {
      // «ix» depois de vogal: o i não soa (caixa, peix, coixí); o u de gu/qu não conta (guix)
      const prevIsVowel = isVowelCh(prev) && !((prev === 'u' || prev === 'ü') && /[gq]/.test(w[i - 2] ?? ''));
      if (ch === 'i' && nx === 'x' && prevIsVowel && prev !== 'i') continue;
      // «ig» final depois de vogal: o i não soa (raig, maig, boig)
      if (ch === 'i' && nx === 'g' && (i + 2 === w.length || (nx2 === 's' && i + 3 === w.length)) && isVowelCh(prev)) continue;
      // hiato: vogal depois de h (ahir, prohibir) e o i dos infinitivos em -uir, -air, -eir e das
      // suas formas (conduir, conduint, conduiré) e de -isme/-ista (egoisme)
      const hiatus =
        (prev === 'h' && isVowelCh(w[i - 2])) ||
        (ch === 'i' && isVowelCh(prev) && /^(r|nt|r[éàí].*|ria|ries|rien|sme|sta|smes|stes)$/.test(w.slice(i + 1)));
      segs.push({ t: 'V', ch, stressed: ch in STRESS_MARKED, diaeresis: ch === 'ï' || ch === 'ü', hiatus });
      continue;
    }
    switch (ch) {
      case 'b':
      case 'v':
        C('b', 'b');
        break;
      case 'c':
        if (nx === 'e' || nx === 'i' || nx === 'é' || nx === 'è' || nx === 'í' || nx === 'ï') C('s');
        else C('k', 'k');
        break;
      case 'ç':
        C('s');
        break;
      case 'd':
        C('d', 'd');
        break;
      case 'f':
        C('f');
        break;
      case 'g':
        if (nx === 'u' && /[eiéèíï]/.test(nx2 ?? '')) {
          C('ɡ', 'g');
          i++;
        } else if (nx === 'ü') {
          C('ɡ', 'g');
          C('w');
          i++;
        } else if (nx === 'u' && /[aoàòó]/.test(nx2 ?? '')) {
          C('ɡ', 'g');
          C('w');
          i++;
        } else if (/[eiéèíï]/.test(nx ?? '')) C('ʒ');
        else if (i === w.length - 1 && prev === 'i') C('tʃ'); // mig, raig
        else if (i === w.length - 2 && nx === 's' && prev === 'i') C('tʃ');
        else C('ɡ', 'g');
        break;
      case 'h':
        break;
      case 'j':
        C('ʒ');
        break;
      case 'k':
        C('k', 'k');
        break;
      case 'l':
        if (nx === 'l') {
          C('ʎ');
          i++;
        } else if (nx === '·' && nx2 === 'l') {
          C('l');
          C('l');
          i += 2;
        } else C('l', 'l');
        break;
      case 'm':
        C('m', 'm');
        break;
      case 'n':
        if (nx === 'y') {
          C('ɲ');
          i++;
        } else C('n', 'n');
        break;
      case 'p':
        // compte, símptoma: o p entre m e t não soa; psicòleg: ps- inicial = [s]
        if ((prev === 'm' && nx === 't') || (i === 0 && nx === 's')) break;
        C('p', 'p');
        break;
      case 'q':
        C('k', 'k');
        if (nx === 'u' && /[eiéèíï]/.test(nx2 ?? '')) i++;
        else if (nx === 'u' || nx === 'ü') {
          C('w');
          i++;
        }
        break;
      case 'r':
        if (nx === 'r') {
          C('r', 'r');
          i++;
        } else if (i === 0 || prev === 'n' || prev === 'l' || prev === 's') C('r', 'r');
        else C('ɾ', 'r');
        break;
      case 's':
        if (nx === 's') {
          C('s');
          i++;
        } else if (nx === 'c' && /[eiéèíï]/.test(nx2 ?? '')) {
          // piscina, escena: sc = [s]
          C('s');
          i++;
        } else C('s', 's');
        break;
      case 't':
        if (nx === 'x') {
          C('tʃ');
          i++;
        } else if (nx === 'j' || (nx === 'g' && /[eiéèíï]/.test(nx2 ?? ''))) {
          C('dʒ');
          i++;
        } else if (nx === 'z') {
          C('dz');
          i++;
        } else if (nx === 'l' && nx2 === 'l') {
          // ratlla, bitllet: [ʎʎ]
          C('ʎ');
          C('ʎ');
          i += 2;
        } else if (nx === 'm') {
          // setmana: [mm]
          C('m');
        } else C('t', 't');
        break;
      case 'x':
        if (i === 0 || !isVowelCh(prev) || prev === 'i' || w[i - 2] === 'i') C('ʃ');
        else if (i === 1 && prev === 'e') {
          // ex- + vogal = [əɡz]; ex- + consoante = [əks]
          if (isVowelCh(nx) || nx === 'h') {
            C('ɡ');
            C('z');
          } else {
            C('k');
            C('s');
          }
        } else {
          C('k');
          C('s');
        }
        // excepte, excel·lent: xc + e/i = [ks]
        if (nx === 'c' && /[eiéèíï]/.test(nx2 ?? '')) i++;
        break;
      case 'y':
        segs.push({ t: 'V', ch: 'i', stressed: false, diaeresis: false });
        break;
      case 'z':
        C('z');
        break;
      case 'w':
        C('w');
        break;
      default:
        if (/[a-z]/.test(ch)) C(ch);
    }
  }
  return segs;
}

/** Decide quais «i» e «u» são semivogais [j w]; devolve os índices dos núcleos. */
function nuclei(segs: Seg[]): number[] {
  const isV = (s: Seg | undefined) => s?.t === 'V';
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    if (s.t !== 'V' || s.stressed || s.diaeresis || s.hiatus || (s.ch !== 'i' && s.ch !== 'u')) continue;
    const prev = segs[i - 1];
    const next = segs[i + 1];
    // entre vogais: noia, joia, maia
    if (isV(prev) && isV(next) && !(prev as { glide?: boolean }).glide) {
      s.glide = true;
      continue;
    }
    // depois de vogal (ditongo decrescente): pau, remei, noi, cuina, ciutat
    if (isV(prev) && !(prev as { glide?: boolean }).glide) {
      s.glide = true;
      continue;
    }
    // no começo da palavra antes de vogal: iaia, iogurt
    if (i === 0 && isV(next)) s.glide = true;
  }
  const out: number[] = [];
  segs.forEach((s, i) => {
    if (s.t === 'V' && !s.glide) out.push(i);
  });
  return out;
}

function stressIndex(w: string, segs: Seg[], nuc: number[]): number {
  const marked = nuc.findIndex((n) => (segs[n] as { stressed: boolean }).stressed);
  if (marked >= 0) return marked;
  if (nuc.length < 2) return nuc.length - 1;
  const last = segs[segs.length - 1];
  const beforeS = segs[segs.length - 2];
  const endsInGlide = (last?.t === 'V' && last.glide) || (last?.t === 'C' && w.endsWith('s') && beforeS?.t === 'V' && beforeS.glide);
  // sem acento: vogal, vogal + s, -en e -in são paroxítonas; -ens e -ins (patins, camins) são oxítonas
  const paroxytone = !endsInGlide && (/[aeiouïü]s?$/.test(w) || /[ei]n$/.test(w));
  return paroxytone ? nuc.length - 2 : nuc.length - 1;
}

const OBSTRUENT = /^(p|b|t|d|k|ɡ|f|β|ð|ɣ)$/;
const LIQUID = /^(l|ɾ)$/;

/** Uma palavra sem clíticos, em IPA. `keepFinalR`: o -r final soa (fer-ho). */
function plainWord(w: string, keepFinalR = false): string {
  const segs = parse(w);
  const nuc = nuclei(segs);
  if (!nuc.length) return segs.map((s) => (s.t === 'C' ? s.ipa : '')).join('');
  const st = nuc[stressIndex(w, segs, nuc)];
  const poly = nuc.length > 1;

  // consoantes finais que não soam: -nt, -nc, -ng, -mp, -mb, -lt (e com -s do plural)
  let end = segs.length;
  const isC = (k: number) => segs[k]?.t === 'C';
  const cc = (k: number) => (segs[k] as { ch: string } | undefined)?.ch;
  const plural = isC(end - 1) && cc(end - 1) === 's';
  const lastC = plural ? end - 2 : end - 1;
  const drop = new Set<number>();
  if (isC(lastC) && isC(lastC - 1)) {
    const a = cc(lastC - 1);
    const b = cc(lastC);
    if ((a === 'n' && (b === 't' || b === 'k' || b === 'g' || b === 'd')) || (a === 'm' && (b === 'p' || b === 'b')) || (a === 'l' && b === 't')) drop.add(lastC);
    // tinc, sang: o n vira [ŋ]
    if (a === 'n' && (b === 'k' || b === 'g')) (segs[lastC - 1] as { ipa: string }).ipa = 'ŋ';
  }
  // -r final das palavras de mais de uma sílaba (parlar, tardor, flors)
  if (poly && !keepFinalR && isC(lastC) && cc(lastC) === 'r' && segs[lastC - 1]?.t === 'V' && lastC - 1 === st) drop.add(lastC);
  // infinitivos paroxítonos: conèixer, empènyer, córrer, vèncer, témer (o -r também não soa)
  if (poly && !keepFinalR && !plural && /(ix|ny|rr|nc|m)er$/.test(w) && lastC - 1 !== st) drop.add(lastC);
  // dimarts, forts: o t entre r e o -s final não soa
  if (plural && isC(lastC) && cc(lastC) === 't' && cc(lastC - 1) === 'r') drop.add(lastC);

  const parts: { ipa: string; kind: 'C' | 'G' | 'V'; idx: number }[] = [];
  for (let k = 0; k < end; k++) {
    if (drop.has(k)) continue;
    const s = segs[k];
    if (s.t === 'V') {
      if (s.glide) {
        parts.push({ ipa: s.ch === 'u' || s.ch === 'ü' ? 'w' : 'j', kind: 'G', idx: k });
        continue;
      }
      const base = s.ch.normalize('NFD')[0];
      let ipa: string;
      if (k === st) ipa = STRESS_MARKED[s.ch] ?? ({ a: 'a', e: 'ɛ', i: 'i', o: 'ɔ', u: 'u' } as Record<string, string>)[base] ?? base;
      else ipa = ({ a: 'ə', e: 'ə', i: 'i', o: 'u', u: 'u' } as Record<string, string>)[base] ?? base;
      parts.push({ ipa, kind: 'V', idx: k });
      continue;
    }
    parts.push({ ipa: s.ipa, kind: s.ipa === 'w' ? 'G' : 'C', idx: k });
  }

  // alofonia: vozeamento por assimilação, n assimila, s sonoro, r de coda, b/d/g brandos
  const VOICED: Record<string, string> = { p: 'b', t: 'd', k: 'ɡ', s: 'z', f: 'v', ʃ: 'ʒ', tʃ: 'dʒ', ts: 'dz' };
  const VOICELESS: Record<string, string> = Object.fromEntries(Object.entries(VOICED).map(([a, b]) => [b, a]));
  const isOnsetPair = (a: string, b: string) => OBSTRUENT.test(a) && LIQUID.test(b) && !(/^[td]$/.test(a) && b === 'l');
  for (let k = 0; k < parts.length - 1; k++) {
    const p = parts[k];
    const next = parts[k + 1];
    if (p.kind !== 'C' || next.kind !== 'C') continue;
    if (VOICELESS[next.ipa] !== undefined && next.ipa !== 'z' && VOICED[p.ipa] === undefined && VOICELESS[p.ipa] === undefined) continue;
    // antes de obstruinte surda: surda (absurd, obtenir); antes de obstruinte sonora, nasal ou l fora do ataque: sonora
    if (VOICED[next.ipa] !== undefined && VOICELESS[p.ipa] !== undefined) p.ipa = VOICELESS[p.ipa];
    else if (VOICED[p.ipa] !== undefined && (VOICELESS[next.ipa] !== undefined || /^(m|n|ɲ|b|d|ɡ)$/.test(next.ipa) || (next.ipa === 'l' && !isOnsetPair(p.ipa, next.ipa)) || (p.ipa === 's' && /^(ʎ|ɾ|r)$/.test(next.ipa))))
      p.ipa = VOICED[p.ipa];
  }
  for (let k = 0; k < parts.length; k++) {
    const p = parts[k];
    if (p.kind !== 'C') continue;
    const prev = parts[k - 1];
    const next = parts[k + 1];
    if (p.ipa === 'n' && next?.kind === 'C') {
      if (/^[pbm]/.test(next.ipa)) p.ipa = 'm';
      else if (/^[kɡ]/.test(next.ipa)) p.ipa = 'ŋ';
      else if (/^[fv]/.test(next.ipa)) p.ipa = 'ɱ';
      else if (next.ipa === 'ʎ') p.ipa = 'ɲ';
    }
    if (p.ipa === 'm' && next && /^[fv]/.test(next.ipa)) p.ipa = 'ɱ';
    const single = (segs[p.idx] as { ch: string }).ch === 's';
    if (p.ipa === 's' && single && prev && prev.kind !== 'C' && next && next.kind !== 'C') p.ipa = 'z';
    // r em fim de sílaba (antes de consoante que não forma ataque com ele, ou no fim): vibrante [r]
    if (p.ipa === 'ɾ' && (!next || (next.kind === 'C' && !(prev && isOnsetPair(prev.ipa, 'ɾ'))))) p.ipa = 'r';
    // b e g entre a vogal tônica e l dobram (poble [ˈpɔbblə], segle [ˈseɡɡlə]; mas problema [pɾuˈβlɛmə])
    if ((p.ipa === 'b' || p.ipa === 'ɡ') && prev?.kind === 'V' && prev.idx === st && next?.ipa === 'l') {
      p.ipa += p.ipa;
      continue;
    }
    const afterSoft = prev && (prev.kind !== 'C' || /^(ɾ|r|s|z|f)$/.test(prev.ipa) || (prev.ipa === 'l' && p.ipa !== 'd'));
    if (afterSoft && next && (next.kind !== 'C' || LIQUID.test(next.ipa) || next.ipa === 'w')) {
      if (p.ipa === 'b') p.ipa = 'β';
      else if (p.ipa === 'd') p.ipa = 'ð';
      else if (p.ipa === 'ɡ') p.ipa = 'ɣ';
    }
  }
  // anys, menys: [ɲʃ]
  if (parts.length > 1 && parts[parts.length - 1].ipa === 's' && parts[parts.length - 2].ipa === 'ɲ') parts[parts.length - 1].ipa = 'ʃ';
  // final de palavra: surda (verd, llarg, tub)
  for (let k = parts.length - 1; k >= 0 && parts[k].kind === 'C'; k--) {
    const p = parts[k];
    const dev: Record<string, string> = { b: 'p', β: 'p', d: 't', ð: 't', ɡ: 'k', ɣ: 'k', z: 's', ʒ: 'ʃ', dʒ: 'tʃ', dz: 'ts' };
    if (dev[p.ipa]) p.ipa = dev[p.ipa];
  }

  // a marca de tônica vai no começo da sílaba (ataque máximo: consoante + l/ɾ)
  const out = parts.map((p) => p.ipa);
  if (poly) {
    const sp = parts.findIndex((p) => p.idx === st);
    let on = sp;
    // semivogal logo antes da tônica: ataque se vem depois de consoante (quatre) ou entre vogais (noia)
    if (parts[on - 1]?.kind === 'G') on--;
    let cons = 0;
    for (let k = on - 1; k >= 0 && parts[k].kind === 'C'; k--) cons++;
    if (cons >= 2 && OBSTRUENT.test(parts[on - 2].ipa) && LIQUID.test(parts[on - 1].ipa) && !(/^[td]$/.test(parts[on - 2].ipa) && parts[on - 1].ipa === 'l')) on -= 2;
    else if (cons >= 1) on -= 1;
    out[on] = 'ˈ' + out[on];
  }
  return out.join('');
}

/** Uma palavra (com clíticos: l'home, fer-ho, dona'm; ou composta: vint-i-u, pèl-roig) em IPA, sem colchetes. */
export function wordToIpaCa(raw: string, lex: Record<string, string> = LEXICON): string {
  const w = raw.toLowerCase().normalize('NFC').replace(/’/g, "'");
  if (lex[w]) return lex[w];
  if (CLITIC[w] !== undefined) return CLITIC[w];
  const pieces = w.split(/['-]/).filter(Boolean);
  if (pieces.length === 1) return plainWord(pieces[0]);
  const isClitic = (p: string, i: number) => CLITIC[p] !== undefined && !(pieces.length > 1 && i === pieces.length - 1 && pieces.every((q) => CLITIC[q] !== undefined));
  const lexicalIdx = pieces.map((p, i) => (isClitic(p, i) ? -1 : i)).filter((i) => i >= 0);
  const lastLex = lexicalIdx[lexicalIdx.length - 1];
  const out: string[] = [];
  pieces.forEach((p, i) => {
    if (isClitic(p, i)) {
      // clítico colado a vogal perde a vogal de apoio: m'agrada, l'home, dona'm
      out.push(CLITIC[p].replace(/^ə(?=.)/, i > 0 || /^[aeiouàèéíòóúh]/.test(pieces[i + 1] ?? '') ? '' : 'ə'));
      return;
    }
    const followedByClitic = i < pieces.length - 1 && isClitic(pieces[i + 1], i + 1);
    let ipa = lex[p] ?? plainWord(p, followedByClitic);
    // em palavra composta ou com clíticos, toda parte lexical leva a sua tônica (vint-i-u, fer-se)
    if (!/[ˈˌ]/.test(ipa)) ipa = 'ˈ' + ipa;
    if (i !== lastLex) ipa = ipa.replace('ˈ', 'ˌ');
    out.push(ipa);
  });
  // o clítico consonantal antes da tônica entra no ataque dela: d'hora [ˈdɔɾə], l'home [ˈlɔmə]
  for (let i = 1; i < out.length; i++) {
    if (/^[ˈˌ]/.test(out[i]) && /^[^aeiouəɛɔ]+$/.test(out[i - 1])) {
      out[i - 1] = out[i][0] + out[i - 1];
      out[i] = out[i].slice(1);
    }
  }
  return out.join('');
}

/** Frase inteira em IPA, entre colchetes; o -s final antes de vogal soa [z] (els amics). */
export function toIpaCa(text: string): string {
  const words = text
    .normalize('NFC')
    .replace(/’/g, "'")
    .split(/[^\p{L}\p{M}'·-]+/u)
    .map((w) => w.replace(/^['-]+|['-]+$/g, ''))
    .filter((w) => /\p{L}/u.test(w));
  if (!words.length) return '';
  const ipas = words.map((w) => wordToIpaCa(w));
  for (let i = 0; i < ipas.length - 1; i++) {
    if (/s$/.test(ipas[i]) && /^ˈ?[aeiouəɛɔjw]/.test(ipas[i + 1]) && !/^h?[iu][aeiouàèéòó]/i.test(words[i + 1])) ipas[i] = ipas[i].replace(/s$/, 'z');
  }
  return `[${ipas.join(' ')}]`;
}
