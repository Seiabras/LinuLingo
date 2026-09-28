/**
 * Japonês: kana → IPA (pronúncia padrão de Tóquio) e kana → romaji (Hepburn).
 *
 * A escrita japonesa mistura kanji e kana e não separa as palavras; a leitura em kana de cada
 * texto do app vem de um dicionário gerado (src/data/ja/leituras.ts, por scripts/gerar-leituras-ja.mjs).
 * Aqui só se converte kana, já com a pronúncia (は partícula = わ, を = お, vogal longa = ー).
 *
 * Regras da IPA: u não arredondado [ɯ]; consoantes palatalizadas antes de i e das sílabas com
 * ゃ ゅ ょ (し [ɕi], ち [t͡ɕi], ひ [çi], に [ɲi]); ふ [ɸɯ]; r batido [ɾ]; ざ ず ぜ ぞ e じ com
 * africada no início ([d͡z], [d͡ʑ]) e fricativa no meio; っ alonga a consoante seguinte (kː);
 * ん assimila o ponto da consoante seguinte (m, n, ɲ, ŋ) e é [ɴ] no fim e nasal [ɰ̃] antes de
 * vogal, s, h, j, w; i e u entre consoantes surdas (e o u de です/ます no fim) ficam surdos [ɯ̥].
 * O acento de altura (pitch) não é marcado.
 */

/** katakana → hiragana (a IPA e o romaji trabalham sobre hiragana) */
export function toHiragana(s: string): string {
  return s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));
}

/** hiragana → katakana */
export function toKatakana(s: string): string {
  return s.replace(/[ぁ-ゖ]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x60));
}

// [consoante IPA, romaji] de cada sílaba; a vogal vem à parte
type Mora = { c: string; r: string; v: 'a' | 'i' | 'u' | 'e' | 'o' | '' };

const V: Record<string, Mora['v']> = { a: 'a', i: 'i', u: 'u', e: 'e', o: 'o' };

/** sílabas simples: kana → [consoante IPA, consoante romaji, vogal] */
const BASE: Record<string, [string, string, string]> = {};
const row = (kana: string, ipa: string[], rom: string[], vowels = 'aiueo') =>
  [...kana].forEach((k, i) => {
    if (k !== '・') BASE[k] = [ipa[i], rom[i], vowels[i]];
  });
row('あいうえお', ['', '', '', '', ''], ['', '', '', '', '']);
row('かきくけこ', ['k', 'kʲ', 'k', 'k', 'k'], ['k', 'k', 'k', 'k', 'k']);
row('がぎぐげご', ['g', 'gʲ', 'g', 'g', 'g'], ['g', 'g', 'g', 'g', 'g']);
row('さしすせそ', ['s', 'ɕ', 's', 's', 's'], ['s', 'sh', 's', 's', 's']);
row('ざじずぜぞ', ['Z', 'J', 'Z', 'Z', 'Z'], ['z', 'j', 'z', 'z', 'z']);
row('たちつてと', ['t', 't͡ɕ', 't͡s', 't', 't'], ['t', 'ch', 'ts', 't', 't']);
row('だぢづでど', ['d', 'J', 'Z', 'd', 'd'], ['d', 'j', 'z', 'd', 'd']);
row('なにぬねの', ['n', 'ɲ', 'n', 'n', 'n'], ['n', 'n', 'n', 'n', 'n']);
row('はひふへほ', ['h', 'ç', 'ɸ', 'h', 'h'], ['h', 'h', 'f', 'h', 'h']);
row('ばびぶべぼ', ['b', 'bʲ', 'b', 'b', 'b'], ['b', 'b', 'b', 'b', 'b']);
row('ぱぴぷぺぽ', ['p', 'pʲ', 'p', 'p', 'p'], ['p', 'p', 'p', 'p', 'p']);
row('まみむめも', ['m', 'mʲ', 'm', 'm', 'm'], ['m', 'm', 'm', 'm', 'm']);
row('やゆよ', ['j', 'j', 'j'], ['y', 'y', 'y'], 'auo');
row('らりるれろ', ['ɾ', 'ɾʲ', 'ɾ', 'ɾ', 'ɾ'], ['r', 'r', 'r', 'r', 'r']);
row('わを', ['ɰ', ''], ['w', ''], 'ao');
row('ゔ', ['b'], ['v'], 'u');
row('ぁぃぅぇぉ', ['', '', '', '', ''], ['', '', '', '', '']);

// consoante palatalizada de cada sílaba em -i, para as combinações com ゃ ゅ ょ
const PALATAL: Record<string, [string, string]> = {
  き: ['kʲ', 'ky'], ぎ: ['gʲ', 'gy'], し: ['ɕ', 'sh'], じ: ['J', 'j'], ち: ['t͡ɕ', 'ch'], ぢ: ['J', 'j'], に: ['ɲ', 'ny'],
  ひ: ['ç', 'hy'], び: ['bʲ', 'by'], ぴ: ['pʲ', 'py'], み: ['mʲ', 'my'], り: ['ɾʲ', 'ry'],
};
const SMALL_Y: Record<string, Mora['v']> = { ゃ: 'a', ゅ: 'u', ょ: 'o' };
const SMALL_V: Record<string, Mora['v']> = { ぁ: 'a', ぃ: 'i', ぅ: 'u', ぇ: 'e', ぉ: 'o' };
// sílabas estrangeiras com vogal pequena (ファ, ティ, ウィ, チェ, ツァ…): consoante nova
const FOREIGN: Record<string, [string, string]> = {
  ふ: ['ɸ', 'f'], て: ['t', 't'], で: ['d', 'd'], う: ['w', 'w'], ち: ['t͡ɕ', 'ch'], し: ['ɕ', 'sh'], じ: ['J', 'j'],
  つ: ['t͡s', 'ts'], と: ['t', 't'], ど: ['d', 'd'], ゔ: ['b', 'v'], く: ['kʷ', 'kw'], ぐ: ['gʷ', 'gw'],
};

type Unit = { kind: 'mora'; m: Mora } | { kind: 'n' } | { kind: 'q' } | { kind: 'long' } | { kind: 'sep'; text: string };

function units(kana: string): Unit[] {
  const s = toHiragana(kana.normalize('NFC'));
  const out: Unit[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const next = s[i + 1];
    if (ch === 'ん') out.push({ kind: 'n' });
    else if (ch === 'っ') out.push({ kind: 'q' });
    else if (ch === 'ー') out.push({ kind: 'long' });
    else if (next && SMALL_Y[next] && PALATAL[ch]) {
      out.push({ kind: 'mora', m: { c: PALATAL[ch][0], r: PALATAL[ch][1], v: SMALL_Y[next] } });
      i++;
    } else if (next && SMALL_V[next] && FOREIGN[ch]) {
      const [c, r] = FOREIGN[ch];
      out.push({ kind: 'mora', m: { c, r, v: SMALL_V[next] } });
      i++;
    } else if (BASE[ch]) {
      const [c, r, v] = BASE[ch];
      out.push({ kind: 'mora', m: { c, r, v: V[v] } });
    } else if (/\s/.test(ch)) out.push({ kind: 'sep', text: ' ' });
    // pontuação e o que não for kana separam palavras e somem da transcrição
    else if (out.at(-1)?.kind !== 'sep') out.push({ kind: 'sep', text: ' ' });
  }
  return out;
}

const VOWEL_IPA: Record<string, string> = { a: 'a', i: 'i', u: 'ɯ', e: 'e', o: 'o' };
const VOICELESS_START = /^(k|s|ɕ|t|ç|ɸ|h|p)/;

/** Primeiro som (consoante) de uma unidade, para a assimilação do ん e do っ. */
function onset(u: Unit | undefined): string {
  if (!u || u.kind !== 'mora') return '';
  return u.m.c;
}

/** Kana (com a pronúncia: は = わ, vogal longa = ー) → IPA sem colchetes. */
export function kanaToIpa(kana: string): string {
  const us = units(kana);
  const out: string[] = [];
  let wordStart = true;
  for (let i = 0; i < us.length; i++) {
    const u = us[i];
    const next = us[i + 1];
    if (u.kind === 'sep') {
      if (out.length && out.at(-1) !== ' ') out.push(' ');
      wordStart = true;
      continue;
    }
    if (u.kind === 'long') {
      if (out.length && out.at(-1) !== ' ') out.push('ː');
      continue;
    }
    if (u.kind === 'q') {
      // っ antes de consoante: alonga a consoante (a africada alonga a parte oclusiva: tt͡ɕ)
      const c = onset(next);
      if (c) out.push(c.startsWith('t͡') ? 't' : c.startsWith('d͡') ? 'd' : `${c[0]}`);
      else out.push('ʔ');
      wordStart = false;
      continue;
    }
    if (u.kind === 'n') {
      const c = onset(next);
      const nextVowel = next?.kind === 'mora' && !next.m.c;
      let n = 'ɴ';
      if (/^[pbm]/.test(c)) n = 'm';
      else if (/^(t͡ɕ|J|ɲ)/.test(c)) n = 'ɲ';
      else if (/^(t|d|n|ɾ|Z)/.test(c)) n = 'n';
      else if (/^[kg]/.test(c)) n = 'ŋ';
      else if (nextVowel || /^[sɕhçɸjɰw]/.test(c)) n = 'ɰ̃';
      out.push(n);
      wordStart = false;
      continue;
    }
    const { c, v } = u.m;
    // ざ ず ぜ ぞ じ: africada no início da palavra e depois de ん e っ
    const prev = us[i - 1];
    const affricate = wordStart || prev?.kind === 'n' || prev?.kind === 'q';
    const cons = c === 'Z' ? (affricate ? 'd͡z' : 'z') : c === 'J' ? (affricate ? 'd͡ʑ' : 'ʑ') : c;
    let vowel = VOWEL_IPA[v] ?? '';
    // desvozeamento: i e u entre consoantes surdas, e o u final de です/ます
    const prevVoiceless = VOICELESS_START.test(cons) || cons.startsWith('t͡');
    const nextIsVoiceless = next?.kind === 'mora' && (VOICELESS_START.test(next.m.c) || next.m.c.startsWith('t͡')) && next.m.c !== '';
    const atEnd = !next || next.kind === 'sep';
    if ((v === 'i' || v === 'u') && prevVoiceless && next?.kind !== 'long') {
      if (nextIsVoiceless || next?.kind === 'q') vowel = `${vowel}̥`;
      else if (atEnd && v === 'u' && (cons === 's') && i > 0) vowel = `${vowel}̥`;
    }
    out.push(cons + vowel);
    wordStart = false;
  }
  return out.join('').trim();
}

const ROM_VOWEL: Record<string, string> = { a: 'a', i: 'i', u: 'u', e: 'e', o: 'o' };
const MACRON: Record<string, string> = { a: 'ā', i: 'ī', u: 'ū', e: 'ē', o: 'ō' };

/** Kana → romaji Hepburn (vogal longa com mácron: Tōkyō; ん antes de vogal ou y leva apóstrofo: kin'yōbi). */
export function kanaToRomaji(kana: string): string {
  const us = units(kana);
  let out = '';
  for (let i = 0; i < us.length; i++) {
    const u = us[i];
    const next = us[i + 1];
    if (u.kind === 'sep') {
      if (out && !out.endsWith(' ')) out += ' ';
      continue;
    }
    if (u.kind === 'long') {
      out = out.replace(/[aiueo]$/, (x) => MACRON[x]);
      continue;
    }
    if (u.kind === 'q') {
      const r = next?.kind === 'mora' ? next.m.r : '';
      out += r.startsWith('ch') ? 't' : (r[0] ?? '');
      continue;
    }
    if (u.kind === 'n') {
      out += next?.kind === 'mora' && (!next.m.r || next.m.r.startsWith('y')) ? "n'" : 'n';
      continue;
    }
    const { r, v } = u.m;
    // ou e uu viram ō e ū quando a leitura já vem com ー; aqui só se junta consoante e vogal
    out += r + (ROM_VOWEL[v] ?? '');
  }
  return out.trim();
}
