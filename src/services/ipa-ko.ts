/**
 * Coreano: hangul → pronúncia padrão (표준 발음) → IPA e romanização revisada (RR, a oficial da Coreia do Sul).
 *
 * O hangul é quase fonêmico, mas as sílabas mudam de som ao encontrar a vizinha. Regras aplicadas
 * dentro de cada palavra (eojeol, o bloco entre espaços):
 * - final neutralizada: ㄱㄲㅋ → [k̚], ㄷㅅㅆㅈㅊㅌ → [t̚], ㅂㅍ → [p̚]; grupos (ㄳ ㄺ ㄻ ㄼ ㅄ…) ficam com uma consoante;
 * - ligação (연음): a final passa para a sílaba seguinte que começa com ㅇ (음악 → [ɯmak̚]);
 * - aspiração: ㅎ + ㄱㄷㅂㅈ (ou o contrário) → ㅋㅌㅍㅊ (좋다 → [t͡ɕotʰa]); ㅎ some antes de vogal (좋아 → [t͡ɕoa]);
 * - nasalização: [k̚ t̚ p̚] antes de ㄴ ㅁ → [ŋ n m] (합니다 → [hamnida]); ㄹ depois de ㅁ ㅇ e das finais surdas → ㄴ;
 * - lateralização: ㄴ + ㄹ e ㄹ + ㄴ → [ll] (신라 → [ɕilla]);
 * - palatalização: ㄷ ㅌ + 이 → ㅈ ㅊ (같이 → [katɕʰi]);
 * - consoante tensa depois de final surda: ㄱㄷㅂㅅㅈ → [k͈ t͈ p͈ s͈ t͡ɕ͈] (학교 → [hak̚k͈jo]);
 * - ㄱㄷㅂㅈ são surdas no início da palavra e sonoras entre sons sonoros (가방 → [kabaŋ]);
 * - ㅅ ㅆ antes de [i] e [j] → [ɕ ɕ͈]; ㄹ é [ɾ] entre vogais e [l] no fim da sílaba; 의 é [ɰi] no começo e [i] depois de consoante.
 * Não se marcam a inserção de ㄴ nas palavras compostas nem as tensas das palavras sino-coreanas (발전 [palt͈ʌn]).
 */

const L = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const VW = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const T = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/** Sílaba decomposta: consoante inicial ('' = ㅇ mudo), vogal e final (pode ser grupo, como ㄺ). */
interface Syl {
  on: string;
  v: string;
  co: string;
  /** a inicial ficou tensa pela regra (para a IPA; a RR não marca) */
  tense?: boolean;
}

export function decompose(word: string): Syl[] | null {
  const out: Syl[] = [];
  for (const ch of word) {
    const c = ch.charCodeAt(0) - 0xac00;
    if (c < 0 || c > 11171) return null;
    const on = L[Math.floor(c / 588)];
    out.push({ on: on === 'ㅇ' ? '' : on, v: VW[Math.floor((c % 588) / 28)], co: T[c % 28] });
  }
  return out;
}

// grupos de consoantes finais: [a que fica antes de consoante, a que passa na ligação]
const CLUSTER: Record<string, [string, string]> = {
  ㄳ: ['ㄱ', 'ㅅ'], ㄵ: ['ㄴ', 'ㅈ'], ㄶ: ['ㄴ', 'ㅎ'], ㄺ: ['ㄱ', 'ㄱ'], ㄻ: ['ㅁ', 'ㅁ'], ㄼ: ['ㄹ', 'ㅂ'],
  ㄽ: ['ㄹ', 'ㅅ'], ㄾ: ['ㄹ', 'ㅌ'], ㄿ: ['ㅂ', 'ㅍ'], ㅀ: ['ㄹ', 'ㅎ'], ㅄ: ['ㅂ', 'ㅅ'],
};
// a primeira consoante do grupo (fica na sílaba na ligação)
const CLUSTER_FIRST: Record<string, string> = { ㄳ: 'ㄱ', ㄵ: 'ㄴ', ㄶ: 'ㄴ', ㄺ: 'ㄹ', ㄻ: 'ㄹ', ㄼ: 'ㄹ', ㄽ: 'ㄹ', ㄾ: 'ㄹ', ㄿ: 'ㄹ', ㅀ: 'ㄹ', ㅄ: 'ㅂ' };

/** Som da final (7 possíveis): ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ. */
const NEUTRAL: Record<string, string> = {
  ㄱ: 'ㄱ', ㄲ: 'ㄱ', ㅋ: 'ㄱ', ㄴ: 'ㄴ', ㄷ: 'ㄷ', ㅅ: 'ㄷ', ㅆ: 'ㄷ', ㅈ: 'ㄷ', ㅊ: 'ㄷ', ㅌ: 'ㄷ', ㅎ: 'ㄷ',
  ㄹ: 'ㄹ', ㅁ: 'ㅁ', ㅂ: 'ㅂ', ㅍ: 'ㅂ', ㅇ: 'ㅇ',
};
const ASPIRATE: Record<string, string> = { ㄱ: 'ㅋ', ㄷ: 'ㅌ', ㅂ: 'ㅍ', ㅈ: 'ㅊ' };
const TENSE: Record<string, string> = { ㄱ: 'ㄲ', ㄷ: 'ㄸ', ㅂ: 'ㅃ', ㅅ: 'ㅆ', ㅈ: 'ㅉ' };
const NASAL: Record<string, string> = { ㄱ: 'ㅇ', ㄷ: 'ㄴ', ㅂ: 'ㅁ' };

/** Aplica as regras de pronúncia a uma palavra: devolve as sílabas como se pronunciam. */
export function pronounce(word: string): Syl[] | null {
  const s = decompose(word);
  if (!s) return null;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = s[i + 1];
    if (!a.co) continue;
    if (!b) {
      // fim da palavra: grupo e neutralização
      if (CLUSTER[a.co]) a.co = CLUSTER[a.co][0];
      a.co = NEUTRAL[a.co] ?? a.co;
      continue;
    }
    // ㅎ final (ou em grupo) antes de vogal: some; antes de ㄱㄷㅈ: aspira; antes de ㅅ: ㅆ; antes de ㄴ: ㄴ
    const hFinal = a.co === 'ㅎ' || a.co === 'ㄶ' || a.co === 'ㅀ';
    if (hFinal) {
      const rest = a.co === 'ㅎ' ? '' : a.co === 'ㄶ' ? 'ㄴ' : 'ㄹ';
      if (!b.on) {
        a.co = rest;
        // 않아 → 아나, 싫어 → 시러
        if (rest) {
          b.on = rest;
          a.co = '';
        }
        continue;
      }
      if (ASPIRATE[b.on]) {
        b.on = ASPIRATE[b.on];
        a.co = rest;
        continue;
      }
      if (b.on === 'ㅅ') {
        b.on = 'ㅆ';
        a.co = rest;
        continue;
      }
      if (b.on === 'ㄴ') {
        a.co = rest || 'ㄴ';
        if (rest === 'ㄹ') b.on = 'ㄹ';
        continue;
      }
      a.co = rest || 'ㄷ';
    }
    // 없다 grudado num substantivo (맛없다, 멋없다): a final se neutraliza antes de ligar → [마덥따]
    if (!b.on && b.v === 'ㅓ' && b.co === 'ㅄ' && a.co && a.co !== 'ㅇ' && !CLUSTER[a.co]) {
      b.on = NEUTRAL[a.co] ?? a.co;
      a.co = '';
      continue;
    }
    // ligação: a final passa para a sílaba seguinte que começa em vogal
    if (!b.on && a.co !== 'ㅇ' && a.co) {
      if (CLUSTER[a.co]) {
        const [, moved] = CLUSTER[a.co];
        const first = CLUSTER_FIRST[a.co];
        a.co = first;
        b.on = moved === 'ㅅ' ? 'ㅆ' : moved;
        if (moved === 'ㅅ') b.tense = true;
      } else {
        // palatalização: ㄷ ㅌ + 이
        if (b.v === 'ㅣ' && a.co === 'ㄷ') b.on = 'ㅈ';
        else if (b.v === 'ㅣ' && a.co === 'ㅌ') b.on = 'ㅊ';
        else b.on = a.co;
        a.co = '';
      }
      continue;
    }
    // ㄺ antes de ㄱ fica ㄹ (읽고 → [일꼬]); ㄵ e ㄻ, finais de verbo, tornam tensa a consoante seguinte (앉다 → [안따], 젊다 → [점따])
    if (a.co === 'ㄺ' && b.on === 'ㄱ') {
      a.co = 'ㄹ';
      b.on = 'ㄲ';
      b.tense = true;
      continue;
    }
    if ((a.co === 'ㄵ' || a.co === 'ㄻ') && TENSE[b.on]) {
      a.co = CLUSTER[a.co][0];
      b.on = TENSE[b.on];
      b.tense = true;
      continue;
    }
    if (CLUSTER[a.co]) a.co = CLUSTER[a.co][0];
    // aspiração: final ㄱ ㄷ ㅂ ㅈ + ㅎ
    if (b.on === 'ㅎ' && (ASPIRATE[a.co] || ASPIRATE[NEUTRAL[a.co] ?? ''])) {
      const base = ASPIRATE[a.co] ? a.co : NEUTRAL[a.co];
      b.on = ASPIRATE[base];
      a.co = '';
      continue;
    }
    // ㅎ inicial depois de ㄴ ㄹ ㅁ ㅇ quase some (ex.: 전화 [t͡ɕʌnɦwa]); fica ㅎ, a IPA sonoriza
    a.co = NEUTRAL[a.co] ?? a.co;
    // palatalização com ㅎ já tratada; ㄷ + 히 → 치 (닫히다 → 다치다)
    // ㄹ depois de ㅁ ㅇ → ㄴ; depois de ㄱ ㄷ ㅂ → ㄴ e a final nasaliza
    if (b.on === 'ㄹ') {
      if (a.co === 'ㄴ') a.co = 'ㄹ';
      else if (a.co === 'ㅁ' || a.co === 'ㅇ') b.on = 'ㄴ';
      else if (NASAL[a.co]) {
        b.on = 'ㄴ';
        a.co = NASAL[a.co];
      }
    }
    // ㄹ + ㄴ → ㄹㄹ
    if (a.co === 'ㄹ' && b.on === 'ㄴ') b.on = 'ㄹ';
    // nasalização: final surda antes de ㄴ ㅁ
    if (NASAL[a.co] && (b.on === 'ㄴ' || b.on === 'ㅁ')) a.co = NASAL[a.co];
    // tensa depois de final surda
    if ((a.co === 'ㄱ' || a.co === 'ㄷ' || a.co === 'ㅂ') && TENSE[b.on]) {
      b.on = TENSE[b.on];
      b.tense = true;
    }
  }
  return s;
}

const V_IPA: Record<string, string> = {
  ㅏ: 'a', ㅐ: 'ɛ', ㅑ: 'ja', ㅒ: 'jɛ', ㅓ: 'ʌ', ㅔ: 'e', ㅕ: 'jʌ', ㅖ: 'je', ㅗ: 'o', ㅘ: 'wa', ㅙ: 'wɛ', ㅚ: 'we',
  ㅛ: 'jo', ㅜ: 'u', ㅝ: 'wʌ', ㅞ: 'we', ㅟ: 'wi', ㅠ: 'ju', ㅡ: 'ɯ', ㅢ: 'ɰi', ㅣ: 'i',
};
const ON_IPA: Record<string, string> = {
  ㄱ: 'k', ㄲ: 'k͈', ㄴ: 'n', ㄷ: 't', ㄸ: 't͈', ㄹ: 'ɾ', ㅁ: 'm', ㅂ: 'p', ㅃ: 'p͈', ㅅ: 's', ㅆ: 's͈', ㅈ: 't͡ɕ',
  ㅉ: 't͡ɕ͈', ㅊ: 't͡ɕʰ', ㅋ: 'kʰ', ㅌ: 'tʰ', ㅍ: 'pʰ', ㅎ: 'h', '': '',
};
const VOICED_BETWEEN: Record<string, string> = { k: 'ɡ', t: 'd', p: 'b', 't͡ɕ': 'd͡ʑ', h: 'ɦ' };
const CO_IPA: Record<string, string> = { ㄱ: 'k̚', ㄴ: 'n', ㄷ: 't̚', ㄹ: 'l', ㅁ: 'm', ㅂ: 'p̚', ㅇ: 'ŋ' };
const SONORANT_CODA = new Set(['ㄴ', 'ㄹ', 'ㅁ', 'ㅇ', '']);

/** Uma palavra (eojeol) em IPA, sem colchetes. Texto que não é hangul fica como está. */
export function wordToIpaKo(word: string): string {
  const s = pronounce(word);
  if (!s) return word;
  let out = '';
  s.forEach((x, i) => {
    let on = ON_IPA[x.on] ?? '';
    const prev = s[i - 1];
    // sonoras entre sons sonoros (depois de vogal ou de final ㄴ ㄹ ㅁ ㅇ)
    if (i > 0 && SONORANT_CODA.has(prev.co) && VOICED_BETWEEN[on]) on = VOICED_BETWEEN[on];
    // ㄹ + ㄹ = [ll]
    if (x.on === 'ㄹ' && prev?.co === 'ㄹ') on = 'l';
    let v = V_IPA[x.v];
    // 의: [ɰi] só no começo da palavra sem consoante; depois de consoante, [i]
    if (x.v === 'ㅢ' && (i > 0 || x.on)) v = 'i';
    // ㅅ ㅆ antes de [i] e [j]: [ɕ]
    if ((x.on === 'ㅅ' || x.on === 'ㅆ') && /^[ij]|^wi/.test(v)) on = x.on === 'ㅅ' ? 'ɕ' : 'ɕ͈';
    out += on + v + (x.co ? CO_IPA[x.co] ?? '' : '');
  });
  return out;
}

/** Texto coreano em IPA, entre colchetes (palavra por palavra; pontuação some). */
export function toIpaKo(text: string): string {
  const words = text
    .normalize('NFC')
    .split(/[^가-힣]+/)
    .filter(Boolean);
  if (!words.length) return '';
  return `[${words.map(wordToIpaKo).join(' ')}]`;
}

const V_RR: Record<string, string> = {
  ㅏ: 'a', ㅐ: 'ae', ㅑ: 'ya', ㅒ: 'yae', ㅓ: 'eo', ㅔ: 'e', ㅕ: 'yeo', ㅖ: 'ye', ㅗ: 'o', ㅘ: 'wa', ㅙ: 'wae', ㅚ: 'oe',
  ㅛ: 'yo', ㅜ: 'u', ㅝ: 'wo', ㅞ: 'we', ㅟ: 'wi', ㅠ: 'yu', ㅡ: 'eu', ㅢ: 'ui', ㅣ: 'i',
};
const ON_RR: Record<string, string> = {
  ㄱ: 'g', ㄲ: 'kk', ㄴ: 'n', ㄷ: 'd', ㄸ: 'tt', ㄹ: 'r', ㅁ: 'm', ㅂ: 'b', ㅃ: 'pp', ㅅ: 's', ㅆ: 'ss', ㅈ: 'j',
  ㅉ: 'jj', ㅊ: 'ch', ㅋ: 'k', ㅌ: 't', ㅍ: 'p', ㅎ: 'h', '': '',
};
const CO_RR: Record<string, string> = { ㄱ: 'k', ㄴ: 'n', ㄷ: 't', ㄹ: 'l', ㅁ: 'm', ㅂ: 'p', ㅇ: 'ng' };
const UNTENSE: Record<string, string> = { ㄲ: 'ㄱ', ㄸ: 'ㄷ', ㅃ: 'ㅂ', ㅆ: 'ㅅ', ㅉ: 'ㅈ' };

/** Romanização revisada de uma palavra (segue as mudanças de som, menos as consoantes tensas). */
export function wordToRomanKo(word: string): string {
  const s = pronounce(word);
  if (!s) return word;
  let out = '';
  s.forEach((x, i) => {
    const on = x.tense ? UNTENSE[x.on] ?? x.on : x.on;
    let r = ON_RR[on] ?? '';
    // ㄹㄹ = ll
    if (on === 'ㄹ' && s[i - 1]?.co === 'ㄹ') r = 'l';
    out += r + V_RR[x.v] + (x.co ? CO_RR[x.co] ?? '' : '');
  });
  return out;
}

/** Texto coreano em romanização revisada; o que não é hangul (pontuação, números) fica igual. */
export function toRomanKo(text: string): string {
  return text.normalize('NFC').replace(/[가-힣]+/g, wordToRomanKo);
}
