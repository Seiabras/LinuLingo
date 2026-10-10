/**
 * Transcrição fonética (IPA) do espanhol por regras. A ortografia do espanhol diz onde cai
 * a tônica (acento gráfico, ou as regras da palavra grave/aguda), então não é preciso marcar nada.
 *
 * Variante: '419' (América Latina, com seseo: c/z = [s]), 'ES' (Espanha: c/z = [θ]),
 * 'AR' (rioplatense: ll/y = [ʃ]). Regras: b/d/g oclusivos no começo e depois de nasal
 * (d também depois de l) e aproximantes [β ð ɣ] nos outros lugares; r vibrante no começo,
 * depois de n/l/s e no rr; ditongos com [j w] antes da vogal e [i̯ u̯] depois; n assimilado.
 */
export type EsVariant = '419' | 'ES' | 'AR';

/**
 * Traços que mudam de um sotaque para outro, por cima da variante (o andaluz é seseante como a
 * América e aspira o «s»; o cubano aspira o «s» e a «jota»). Sem traços, vale a variante pura.
 */
export interface TracosEs {
  /** «s» no fim da sílaba: [s], ou aspirado [h] (Caribe, Andaluzia, Canárias, Chile, Buenos Aires) */
  sCoda: 's' | 'h';
  /** «j» e «g» antes de e/i: [x], ou a «jota» aspirada [h] do Caribe, da Andaluzia e da América Central */
  jota: 'x' | 'h';
  /** «ch»: [tʃ], ou [ʃ] (oeste da Andaluzia, norte do México) */
  ch: 't͡ʃ' | 'ʃ';
  /** O «d» entre vogais antes da última sílaba e o «d» final caem: «cansado» [kanˈsao], «ciudad» [sjuˈða] */
  dCai: boolean;
  /** «r» no fim da sílaba: [ɾ], [l] (Porto Rico: «Puerto» [ˈpwelto]) */
  rCoda: 'ɾ' | 'l';
  /** «rr» e «r» inicial: [r], [ʐ] assibilado (Costa Rica, Andes), [χ] (interior de Porto Rico) */
  rForte: 'r' | 'ʐ' | 'χ';
}

const TRACOS_ES: TracosEs = { sCoda: 's', jota: 'x', ch: 't͡ʃ', dCai: false, rCoda: 'ɾ', rForte: 'r' };

const ACCENT: Record<string, string> = { á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u' };
const EXCEPTIONS: Record<string, string> = { méxico: 'mexico', mexicano: 'mexikano', mexicana: 'mexikana', oaxaca: 'oaxaka' };

type Seg =
  | { kind: 'C'; ipa: string; letter: string }
  | { kind: 'V'; v: string; accented: boolean; weak: boolean; role?: 'nucleus' | 'on' | 'off' };

function segments(word: string, variant: EsVariant): Seg[] {
  const w = EXCEPTIONS[word] ? word.replace(/x/, 'j') : word;
  const segs: Seg[] = [];
  const zeta = variant === 'ES' ? 'θ' : 's';
  const yeismo = variant === 'AR' ? 'ʃ' : 'ʝ';
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const nx = w[i + 1] ?? '';
    const vowelNext = /[aeiouáéíóúü]/.test(nx);
    const V = (v: string, accented = false) => segs.push({ kind: 'V', v, accented, weak: !accented && (v === 'i' || v === 'u') });
    const C = (ipa: string, letter = ch) => segs.push({ kind: 'C', ipa, letter });
    if (ACCENT[ch]) V(ACCENT[ch], true);
    else if ('aeiou'.includes(ch)) V(ch);
    else if (ch === 'ü') V('u');
    else if (ch === 'y') {
      // «y» antes de vogal é consoante; no fim ou sozinha, é vogal i
      if (vowelNext) C(yeismo, 'y');
      else V('i');
    } else if (ch === 'c') {
      if (nx === 'h') {
        C('t͡ʃ', 'ch');
        i++;
      } else if (/[eiéí]/.test(nx)) C(zeta, 'c');
      else C('k');
    } else if (ch === 'q') {
      C('k');
      if (nx === 'u') i++;
    } else if (ch === 'g') {
      if (/[eiéí]/.test(nx)) C('x', 'j');
      else {
        C('g');
        // gue, gui: o u não soa (gü soa)
        if (nx === 'u' && /[eiéí]/.test(w[i + 2] ?? '')) i++;
      }
    } else if (ch === 'l') {
      if (nx === 'l') {
        C(yeismo, 'y');
        i++;
      } else C('l');
    } else if (ch === 'r') {
      if (nx === 'r') {
        C('r', 'rr');
        i++;
      } else C('ɾ', 'r');
    } else if (ch === 'z') C(zeta, 'z');
    else if (ch === 'j') C('x');
    else if (ch === 'ñ') C('ɲ');
    else if (ch === 'h') continue;
    else if (ch === 'x') {
      C('k');
      C('s', 'x');
    } else if (ch === 'v' || ch === 'b') C('b', 'b');
    else if (ch === 'w') C('w');
    else if ('dfkmnpst'.includes(ch)) C(ch);
  }
  return segs;
}

/** Agrupa vogais em sílabas: vogal fraca átona (i, u) ao lado de outra vira semivogal. */
function nuclei(segs: Seg[]): number[] {
  const out: number[] = [];
  let i = 0;
  while (i < segs.length) {
    if (segs[i].kind !== 'V') {
      i++;
      continue;
    }
    let j = i;
    while (j + 1 < segs.length && segs[j + 1].kind === 'V') j++;
    // grupo de vogais i..j
    const group = segs.slice(i, j + 1) as Extract<Seg, { kind: 'V' }>[];
    let k = 0;
    while (k < group.length) {
      const a = group[k];
      const b = group[k + 1];
      const c = group[k + 2];
      // fraca + forte (+ fraca): tiene, buey
      if (a.weak && b && !b.weak) {
        a.role = 'on';
        b.role = 'nucleus';
        out.push(i + k + 1);
        if (c && c.weak) {
          c.role = 'off';
          k += 3;
        } else k += 2;
        continue;
      }
      // fraca + fraca: ciudad (a 2ª é o núcleo), muy
      if (a.weak && b && b.weak) {
        a.role = 'on';
        b.role = 'nucleus';
        out.push(i + k + 1);
        k += 2;
        continue;
      }
      // forte (+ fraca): aire, causa
      a.role = 'nucleus';
      out.push(i + k);
      if (b && b.weak) {
        b.role = 'off';
        k += 2;
      } else k += 1;
    }
    i = j + 1;
  }
  return out;
}

const VOICED_AFTER = new Set(['m', 'n']);

/** Uma palavra em IPA, sem colchetes. `afterVowel`: a palavra anterior terminou em vogal (fala contínua). */
export function wordToIpaEs(raw: string, variant: EsVariant = '419', afterVowel = false, tr?: Partial<TracosEs>): string {
  const T = { ...TRACOS_ES, ...tr };
  const word = raw.toLowerCase().normalize('NFC');
  const segs = segments(word, variant);
  const nuc = nuclei(segs);
  if (!nuc.length) return segs.map((s) => (s.kind === 'C' ? s.ipa : '')).join('');

  // tônica: acento gráfico; senão, grave (termina em vogal, n, s) ou aguda
  let stressed = nuc.findIndex((n) => (segs[n] as Extract<Seg, { kind: 'V' }>).accented);
  if (stressed < 0) {
    const last = word.replace(/[^a-zñü]+$/, '').at(-1) ?? '';
    const grave = /[aeiouns]/.test(last);
    stressed = grave && nuc.length > 1 ? nuc.length - 2 : nuc.length - 1;
  }

  const out: string[] = [];
  segs.forEach((s, i) => {
    if (s.kind === 'V') {
      out.push(s.role === 'on' ? (s.v === 'i' ? 'j' : 'w') : s.role === 'off' ? `${s.v}̯` : s.v);
      return;
    }
    const prev = segs[i - 1];
    const next = segs[i + 1];
    const start = i === 0 && !afterVowel;
    const afterNasal = prev?.kind === 'C' && VOICED_AFTER.has(prev.ipa);
    let ipa = s.ipa;
    const coda = !next || next.kind === 'C';
    if (ipa === 'b') ipa = start || afterNasal ? 'b' : 'β';
    else if (ipa === 'd') ipa = start || afterNasal || (prev?.kind === 'C' && prev.ipa === 'l') ? 'd' : 'ð';
    else if (ipa === 'g') ipa = start || afterNasal ? 'g' : 'ɣ';
    else if (ipa === 'ɾ' && (i === 0 || (prev?.kind === 'C' && ['n', 'l', 's'].includes(prev.ipa)))) ipa = T.rForte;
    else if (ipa === 'r') ipa = T.rForte;
    else if (ipa === 'ɾ' && coda) ipa = T.rCoda;
    else if (ipa === 's' && coda && T.sCoda === 'h') ipa = 'h';
    else if (ipa === 'x') ipa = T.jota;
    else if (ipa === 't͡ʃ') ipa = T.ch;
    // o «s» se sonoriza antes de consoante sonora: mismo [ˈmizmo], desde [ˈdezðe]
    else if (ipa === 's' && next?.kind === 'C' && ['b', 'd', 'g', 'm', 'n', 'l', 'ɾ', 'ʝ'].includes(next.ipa)) ipa = 'z';
    else if (ipa === 'n' && next?.kind === 'C') {
      if (['b', 'p', 'm'].includes(next.ipa)) ipa = 'm';
      else if (['k', 'g', 'x'].includes(next.ipa)) ipa = 'ŋ';
    }
    // o «d» que cai: entre vogais antes da última sílaba (cansado, nada) e no fim da palavra (ciudad)
    if (T.dCai && ipa === 'ð' && (!next || (prev?.kind === 'V' && next?.kind === 'V' && i + 1 === segs.length - 1))) ipa = '';
    out.push(ipa);
  });

  if (nuc.length > 1) {
    // ˈ antes do ataque da sílaba tônica: a consoante (e a semivogal) que vem antes do núcleo
    let pos = nuc[stressed];
    while (pos > 0 && segs[pos - 1].kind === 'V' && (segs[pos - 1] as Extract<Seg, { kind: 'V' }>).role === 'on') pos--;
    if (pos > 0 && segs[pos - 1].kind === 'C') {
      pos--;
      // grupos pr, bl, tr… ficam juntos no ataque
      const c = segs[pos] as Extract<Seg, { kind: 'C' }>;
      const before = segs[pos - 1];
      if ((c.ipa === 'ɾ' || c.ipa === 'l') && before?.kind === 'C' && ['p', 'b', 't', 'd', 'k', 'g', 'f'].includes(before.ipa) && !(before.ipa === 'd' && c.ipa === 'l')) pos--;
    }
    // índice em «out»: um item por segmento
    out.splice(pos, 0, 'ˈ');
  }
  return out.join('');
}

/** Frase inteira em IPA, entre colchetes: «¿Cómo estás?» → [ˈkomo esˈtas] */
export function toIpaEs(text: string, variant: EsVariant = '419', tr?: Partial<TracosEs>): string {
  const parts = text.split(/([^\p{L}]+)/u);
  const words: string[] = [];
  let prevEndsVowel = false;
  let prevPause = false;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (!p || !/\p{L}/u.test(p)) {
      // pausa (vírgula, ponto) reinicia a fala
      if (/[.,;:!?¡¿…]/.test(p ?? '')) {
        prevEndsVowel = false;
        prevPause = true;
      }
      continue;
    }
    const w = wordToIpaEs(p, variant, prevEndsVowel, tr);
    // o «n» final assimila a consoante da palavra seguinte, sem pausa: un beso [um ˈbeso]
    const first = w.replace(/^ˈ/, '')[0];
    const prev = words.length && !prevPause ? words[words.length - 1] : '';
    if (prev.endsWith('n') && /[bpm]/.test(first)) words[words.length - 1] = prev.slice(0, -1) + 'm';
    else if (prev.endsWith('n') && /[kgx]/.test(first)) words[words.length - 1] = prev.slice(0, -1) + 'ŋ';
    words.push(w);
    prevEndsVowel = /[aeiouáéíóúy]$/i.test(p);
    prevPause = false;
  }
  return words.length ? `[${words.join(' ')}]` : '';
}
