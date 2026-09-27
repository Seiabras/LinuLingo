/**
 * Transcrição fonética (IPA) do italiano padrão por regras.
 *
 * A ortografia do italiano não mostra a tônica (só na última sílaba: città, perché) nem o timbre
 * de «e» e «o» (bène [ɛ] × ségno [e]). Por isso há um dicionário de pronúncia com a grafia dos
 * dicionários italianos: acento na vogal tônica, grave para vogal aberta (è ò) e agudo para
 * fechada (é ó), e «ẓ» para o z sonoro [dz] (zero → ẓèro). Sem entrada no dicionário, vale a
 * regra geral: tônica na penúltima vogal, e/o fechados, z surdo [ts].
 *
 * Regras: c/g antes de e/i = [tʃ dʒ] (o «i» seguido de vogal só marca o som: ciao, giorno);
 * ch/gh = [k g]; gn = [ɲɲ]; gli = [ʎʎ]; sc + e/i = [ʃʃ]; z entre vogais é sempre longo;
 * consoante dupla vira geminada; vogal tônica em sílaba aberta (não final) é longa [ː];
 * «s» entre vogais e antes de consoante sonora = [z]; «i» e «u» átonos junto de vogal = [j w].
 */

export type PronunciationLexicon = Record<string, string>;

/** Vogal acentuada → [vogal base, IPA] */
const STRESSED: Record<string, [string, string]> = {
  à: ['a', 'a'],
  á: ['a', 'a'],
  è: ['e', 'ɛ'],
  é: ['e', 'e'],
  ì: ['i', 'i'],
  í: ['i', 'i'],
  ò: ['o', 'ɔ'],
  ó: ['o', 'o'],
  ù: ['u', 'u'],
  ú: ['u', 'u'],
};

type Cons = { kind: 'C'; ipa: string; long: boolean };
type Vow = { kind: 'V'; v: string; ipa: string; stressed: boolean; role?: 'nucleus' | 'on' | 'off' };
type Seg = Cons | Vow;

const isVowel = (ch: string | undefined) => !!ch && /[aeiouàáèéìíòóùú]/.test(ch);
const isFront = (ch: string | undefined) => !!ch && /[eièéìí]/.test(ch);
const AFFRICATE = /^[td]͡/;

function segments(w: string): Seg[] {
  const segs: Seg[] = [];
  let long = false;
  const C = (ipa: string, alwaysLong = false) => {
    // gn, gli, sc(i) e z são sempre longos entre vogais
    segs.push({ kind: 'C', ipa, long: long || (alwaysLong && segs.length > 0 && segs[segs.length - 1].kind === 'V') });
    long = false;
  };
  const V = (ch: string) => {
    const s = STRESSED[ch];
    segs.push({ kind: 'V', v: s ? s[0] : ch, ipa: s ? s[1] : ch, stressed: !!s });
  };
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const nx = w[i + 1];
    const nx2 = w[i + 2];
    if (isVowel(ch)) {
      V(ch);
      continue;
    }
    // consoante dupla: a próxima letra sai longa (cc + e/i = [ttʃ])
    if (ch === nx && ch !== 'h') {
      long = true;
      continue;
    }
    switch (ch) {
      case 'c':
        if (nx === 'h') {
          C('k');
          i++;
        } else if (isFront(nx)) {
          C('t͡ʃ');
          // ci + vogal: o i só marca o som (ciao, faccia)
          if (nx === 'i' && isVowel(nx2)) i++;
        } else C('k');
        break;
      case 'g':
        if (nx === 'h') {
          C('g');
          i++;
        } else if (nx === 'n') {
          C('ɲ', true);
          i++;
        } else if (nx === 'l' && nx2 === 'i') {
          C('ʎ', true);
          i++;
          // gli + vogal: o i só marca o som (figlio); no fim (gli, figli) é vogal
          if (isVowel(w[i + 2])) i++;
        } else if (isFront(nx)) {
          C('d͡ʒ');
          if (nx === 'i' && isVowel(nx2)) i++;
        } else C('g');
        break;
      case 's':
        if (nx === 'c' && isFront(nx2)) {
          C('ʃ', true);
          i++;
          if (nx2 === 'i' && isVowel(w[i + 2])) i++;
        } else C('s');
        break;
      case 'q':
        C('k');
        if (nx === 'u') {
          segs.push({ kind: 'V', v: 'u', ipa: 'w', stressed: false, role: 'on' });
          i++;
        }
        break;
      case 'z':
      case 'ẓ':
        C(ch === 'z' ? 't͡s' : 'd͡z', isVowel(nx));
        break;
      case 'h':
        break;
      case 'j':
        C('j');
        break;
      case 'x':
        C('k');
        C('s');
        break;
      case 'y':
        V('i');
        break;
      default:
        if (/[bdfklmnprtvw]/.test(ch)) C(ch);
    }
  }
  return segs;
}

/** Marca núcleos e semivogais: «i» e «u» átonos colados a outra vogal viram [j w] ou [i̯ u̯]. */
function nuclei(segs: Seg[]): number[] {
  const out: number[] = [];
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    if (s.kind !== 'V' || s.role === 'on') continue;
    const next = segs[i + 1];
    const prev = segs[i - 1];
    const weak = !s.stressed && (s.v === 'i' || s.v === 'u');
    // ataque: piede, buono, ieri (desde que a vogal seguinte seja núcleo possível)
    if (weak && next?.kind === 'V' && !(next.v === s.v)) {
      s.role = 'on';
      s.ipa = s.v === 'i' ? 'j' : 'w';
      continue;
    }
    // depois do núcleo: mai, poi, causa
    if (weak && prev?.kind === 'V' && prev.role === 'nucleus') {
      s.role = 'off';
      s.ipa = s.v === 'i' ? 'i̯' : 'u̯';
      continue;
    }
    s.role = 'nucleus';
    out.push(i);
  }
  return out;
}

const render = (c: Cons) => (c.long ? (AFFRICATE.test(c.ipa) ? c.ipa[0] + c.ipa : c.ipa + c.ipa) : c.ipa);

/** Uma palavra em IPA, sem colchetes. */
export function wordToIpaIt(raw: string, lex: PronunciationLexicon | undefined = LEXICON): string {
  const lower = raw.toLowerCase().normalize('NFC');
  const word = lex?.[lower] ?? lower;
  const segs = segments(word);
  const nuc = nuclei(segs);
  const out: string[] = [];
  segs.forEach((s, i) => {
    if (s.kind === 'V') {
      out.push(s.ipa);
      return;
    }
    const prev = segs[i - 1];
    const next = segs[i + 1];
    let ipa = s.ipa;
    // s sonoro entre vogais (casa, rosa) e antes de consoante sonora (sbaglio, smettere)
    if (ipa === 's' && !s.long) {
      if (prev?.kind === 'V' && next?.kind === 'V') ipa = 'z';
      else if (next?.kind === 'C' && /^[bdgvmnlrɲʎ]/.test(next.ipa)) ipa = 'z';
    }
    // n assimila: [m] antes de p/b, [ŋ] antes de k/g
    if (ipa === 'n' && next?.kind === 'C' && !s.long) {
      if (/^[pb]/.test(next.ipa)) ipa = 'm';
      else if (/^[kg]/.test(next.ipa)) ipa = 'ŋ';
    }
    out.push(render({ ...s, ipa }));
  });
  if (nuc.length < 2) return out.join('');

  let stressed = nuc.findIndex((n) => (segs[n] as Vow).stressed);
  // sem dicionário: penúltima vogal, e/o fechados
  if (stressed < 0) stressed = nuc.length - 2;
  const n = nuc[stressed];

  // vogal longa: tônica, não final, em sílaba aberta (uma consoante simples ou grupo muta + líquida)
  // antes de outra vogal em hiato (ciao, mio) também é longa; antes de semivogal (mai), não
  const nextSeg = segs[n + 1];
  if (stressed < nuc.length - 1 && nextSeg?.kind === 'V') {
    if (nextSeg.role === 'nucleus') out[n] += 'ː';
  } else if (stressed < nuc.length - 1) {
    const cons: Cons[] = [];
    for (let k = n + 1; k < segs.length && segs[k].kind === 'C'; k++) cons.push(segs[k] as Cons);
    const open =
      (cons.length === 1 && !cons[0].long) ||
      (cons.length === 2 && !cons[0].long && /^[pbtdkgfv]$/.test(cons[0].ipa) && /^[rl]$/.test(cons[1].ipa));
    if (open) out[n] += 'ː';
  }

  // ˈ antes do ataque da sílaba tônica
  let pos = n;
  while (pos > 0 && segs[pos - 1].kind === 'V' && (segs[pos - 1] as Vow).role === 'on') pos--;
  if (pos > 0 && segs[pos - 1].kind === 'C') {
    const c = segs[pos - 1] as Cons;
    if (c.long) {
      // geminada: a primeira metade fecha a sílaba anterior (palla → pal.ˈla não; ˈpal.la)
      const whole = out[pos - 1];
      const half = AFFRICATE.test(c.ipa) ? c.ipa[0] : c.ipa;
      out[pos - 1] = half + 'ˈ' + whole.slice(half.length);
      return out.join('');
    }
    pos--;
    const before = segs[pos - 1];
    if (before?.kind === 'C' && !before.long) {
      // grupos pr, bl, tr… e s + consoante ficam juntos no ataque
      if (/^[rl]$/.test(c.ipa) && /^[pbtdkgfv]$/.test(before.ipa)) pos--;
      else if (before.ipa === 's' && !/^[rl]$/.test(c.ipa)) pos--;
      if (pos > 0 && segs[pos - 1]?.kind === 'C' && (segs[pos - 1] as Cons).ipa === 's' && /^[rl]$/.test(c.ipa)) pos--;
    }
  }
  out.splice(pos, 0, 'ˈ');
  return out.join('');
}

/** Artigos e preposições que se elidem com apóstrofo: l’amico, dell’acqua, un’amica, c’è. */
const ELIDED = /^(l|dell|all|dall|nell|sull|coll|quell|bell|sant|un|nessun|c|d|m|t|s|v|n)[’'](.+)$/i;

/** Frase inteira em IPA, entre colchetes: «Come stai?» → [ˈkoːme ˈstai̯] */
export function toIpaIt(text: string, lex: PronunciationLexicon | undefined = LEXICON): string {
  const words = text.split(/[^\p{L}’']+/u).map((w) => w.replace(/^['’]+|['’]+$/g, '')).filter((w) => /\p{L}/u.test(w));
  const ipa = words.map((w) => {
    const m = w.match(ELIDED);
    if (m) {
      const head = wordToIpaIt(m[1], lex).replace(/ˈ/g, '');
      const tail = wordToIpaIt(m[2], lex);
      // o artigo vira o ataque da sílaba tônica: l’acqua [ˈlakkwa]
      return tail.startsWith('ˈ') ? 'ˈ' + head + tail.slice(1) : head + tail;
    }
    return wordToIpaIt(w, lex);
  });
  return ipa.length ? `[${ipa.join(' ')}]` : '';
}

let LEXICON: PronunciationLexicon | undefined;

/** Registra o dicionário de pronúncia padrão (src/data/it/pronuncia.ts). */
export function setPronunciationLexicon(lex: PronunciationLexicon) {
  LEXICON = lex;
}
