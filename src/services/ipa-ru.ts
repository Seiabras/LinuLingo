/**
 * Transcrição fonética (IPA) do russo por regras, na pronúncia padrão de Moscou.
 * O acento tônico vem marcado no texto com o acento agudo combinante (U+0301): молоко́.
 * Sem a marca, só palavras de uma vogal (ou com ё) têm tônica conhecida; nas outras
 * as vogais ficam sem redução, em vez de arriscar uma pronúncia errada.
 *
 * Regras: consoantes moles antes de е ё и ю я ь; ж ш ц sempre duras, ч щ й sempre moles;
 * redução das vogais átonas (о/а → ɐ antes da tônica e no início, ə nas outras; е/я → ɪ);
 * ensurdecimento no fim da palavra e assimilação de sonoridade nos grupos; casos
 * especiais (что, -ого/-его, -тся/-ться, сч, здн/стн, вств, лнц).
 */

const STRESS = '́';
const VOWELS = 'аоуыэяёюие';
const SOFT_VOWELS = 'яёюие';
const IOTATED: Record<string, string> = { я: 'a', ё: 'o', ю: 'u', е: 'e' };

const CONS: Record<string, string> = {
  б: 'b', в: 'v', г: 'g', д: 'd', ж: 'ʐ', з: 'z', й: 'j', к: 'k', л: 'l', м: 'm', н: 'n', п: 'p', р: 'r',
  с: 's', т: 't', ф: 'f', х: 'x', ц: 't͡s', ч: 't͡ɕ', ш: 'ʂ', щ: 'ɕː',
};
const ALWAYS_HARD = new Set(['ж', 'ш', 'ц']);
const ALWAYS_SOFT = new Set(['ч', 'щ', 'й']);
const SONORANT = new Set(['j', 'l', 'm', 'n', 'r']);
const VOICED: Record<string, string> = { b: 'p', v: 'f', g: 'k', d: 't', z: 's', ʐ: 'ʂ' };
const VOICELESS: Record<string, string> = Object.fromEntries(Object.entries(VOICED).map(([a, b]) => [b, a]));

type Seg = { kind: 'C'; ipa: string; soft: boolean; letter: string } | { kind: 'V'; ipa: string; stressed: boolean; letter: string };

/** Pronúncias que a escrita não mostra (as marcas de tônica são preservadas). */
function respell(w: string): string {
  const bare = w.replace(/́/g, '');
  if (bare === 'что' || bare === 'чтобы') w = w.replace(/^ч/, 'ш');
  if (bare === 'сегодня') w = w.replace('г', 'в');
  if (bare === 'конечно' || bare === 'скучно') w = w.replace('чн', 'шн');
  // adjetivos e pronomes em -ого/-его: г = [v]
  if (/[оеё]́?го́?$/.test(w) && bare.length > 3) w = w.replace(/г(о́?)$/, 'в$1');
  else if (bare === 'его' || bare === 'ничего' || bare === 'чего' || bare === 'того') w = w.replace(/г(о́?)$/, 'в$1');
  return w
    .replace(/ть?ся$/, 'ца')
    .replace(/[сз]ч/g, 'щ')
    .replace(/здн/g, 'зн')
    .replace(/стн/g, 'сн')
    .replace(/вств/g, 'ств')
    .replace(/лнц/g, 'нц');
}

function segments(word: string): Seg[] {
  const w = respell(word);
  const segs: Seg[] = [];
  let sign: 'ь' | 'ъ' | null = null;
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    if (ch === STRESS) continue;
    const stressed = w[i + 1] === STRESS;
    if (ch === 'ь' || ch === 'ъ') {
      sign = ch;
      const prev = segs.at(-1);
      if (ch === 'ь' && prev?.kind === 'C' && !ALWAYS_HARD.has(prev.letter)) prev.soft = true;
      continue;
    }
    if (VOWELS.includes(ch)) {
      const prev = segs.at(-1);
      const afterCons = prev?.kind === 'C' && !sign;
      if (afterCons && SOFT_VOWELS.includes(ch) && !ALWAYS_HARD.has(prev.letter)) prev.soft = true;
      // е ё ю я no começo, depois de vogal ou de ь/ъ: com [j]
      if (!afterCons && IOTATED[ch]) segs.push({ kind: 'C', ipa: 'j', soft: false, letter: 'й' });
      if (!afterCons && ch === 'и' && sign === 'ь') segs.push({ kind: 'C', ipa: 'j', soft: false, letter: 'й' });
      segs.push({ kind: 'V', ipa: ch, stressed, letter: ch });
      sign = null;
      continue;
    }
    if (CONS[ch]) {
      segs.push({ kind: 'C', ipa: CONS[ch], soft: false, letter: ch });
      sign = null;
    }
  }
  return segs;
}

/** Uma palavra (com ou sem marca de tônica) em IPA, sem colchetes. */
export function wordToIpaRu(raw: string): string {
  const word = raw.toLowerCase().normalize('NFC');
  const segs = segments(word);
  const vowels = segs.filter((s) => s.kind === 'V') as Extract<Seg, { kind: 'V' }>[];
  if (!vowels.length) return segs.map(consIpa).join('');
  // tônica: marcada, ou ё, ou a única vogal
  let stressIdx = vowels.findIndex((v) => v.stressed);
  if (stressIdx < 0) stressIdx = vowels.findIndex((v) => v.letter === 'ё');
  if (stressIdx < 0 && vowels.length === 1) stressIdx = 0;
  const known = stressIdx >= 0;

  // vogais
  let vi = 0;
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    if (s.kind !== 'V') continue;
    const prev = segs[i - 1];
    const prevHardHush = prev?.kind === 'C' && ALWAYS_HARD.has(prev.letter);
    const softCtx = prev?.kind === 'C' && (prev.soft || ALWAYS_SOFT.has(prev.letter) || prev.ipa === 'j');
    const isStressed = known && vi === stressIdx;
    const pretonic = known && vi === stressIdx - 1;
    const initial = i === 0;
    const final = i === segs.length - 1;
    const l = s.letter;
    let v: string;
    if (!known || isStressed) {
      v = { а: 'a', я: 'a', о: 'o', ё: 'o', у: 'u', ю: 'u', ы: 'ɨ', э: 'e', е: 'e', и: prevHardHush ? 'ɨ' : 'i' }[l]!;
    } else if (l === 'у' || l === 'ю') v = 'ʊ';
    else if (l === 'ы') v = 'ɨ';
    else if (l === 'и') v = prevHardHush ? 'ɨ' : 'ɪ';
    else if (l === 'э') v = 'ɪ';
    else if (prevHardHush && l === 'е') v = 'ɨ';
    else if ((l === 'е' || l === 'я' || ((l === 'а' || l === 'о') && softCtx)) && softCtx) v = final && l !== 'е' ? 'ə' : 'ɪ';
    else v = pretonic || initial ? 'ɐ' : 'ə';
    s.ipa = v;
    vi++;
  }

  // sonoridade: da direita para a esquerda
  for (let i = segs.length - 1; i >= 0; i--) {
    const s = segs[i];
    if (s.kind !== 'C') continue;
    const next = segs[i + 1];
    if (!next) {
      if (VOICED[s.ipa]) s.ipa = VOICED[s.ipa];
      continue;
    }
    if (next.kind !== 'C') continue;
    const nextVoiceless = !!VOICELESS[next.ipa] || ['x', 't͡s', 't͡ɕ', 'ɕː'].includes(next.ipa);
    const nextVoiced = !!VOICED[next.ipa] && next.ipa !== 'v';
    if (nextVoiceless && VOICED[s.ipa]) s.ipa = VOICED[s.ipa];
    else if (nextVoiced && VOICELESS[s.ipa]) s.ipa = VOICELESS[s.ipa];
  }

  // monta, com ˈ antes do ataque da sílaba tônica (quando há mais de uma vogal)
  const out: string[] = segs.map((s) => (s.kind === 'C' ? consIpa(s) : s.ipa));
  if (known && vowels.length > 1) {
    const vPos = segs.findIndex((s) => s === vowels[stressIdx]);
    let start = vPos;
    while (start > 0 && segs[start - 1].kind === 'C') start--;
    // grupo depois de vogal: sonorante inicial fica na sílaba anterior (пальто́ → pɐlʲˈto)
    if (start > 0 && vPos - start > 1 && SONORANT.has(segs[start].ipa)) start++;
    out.splice(start, 0, 'ˈ');
  }
  return out.join('');
}

function consIpa(s: Seg): string {
  if (s.kind !== 'C') return s.ipa;
  return s.soft && !ALWAYS_SOFT.has(s.letter) ? `${s.ipa}ʲ` : s.ipa;
}

/** Preposições de uma consoante se juntam à palavra seguinte na fala (в Москве́ → vmɐˈskvʲe). */
const CLITIC = new Set(['в', 'с', 'к']);

/** Frase inteira em IPA, entre colchetes: «Как дела́?» → [kak dʲɪˈla] */
export function toIpaRu(text: string): string {
  const tokens = text.split(/[^\p{L}\p{M}-]+/u).filter((t) => t && t !== '-');
  const words: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (CLITIC.has(t.toLowerCase()) && tokens[i + 1]) {
      words.push(wordToIpaRu(t + tokens[i + 1]));
      i++;
    } else words.push(t.split('-').map(wordToIpaRu).join(''));
  }
  return words.length ? `[${words.join(' ')}]` : '';
}
