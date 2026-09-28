/**
 * Leitura do japonês: kanji e kana → kana (furigana), romaji e IPA.
 *
 * O japonês não separa as palavras e o kanji não diz como se lê; um analisador morfológico
 * (kuromoji, com o dicionário IPADIC) leu todos os textos do app de antemão, e o que ele achou
 * ficou num dicionário por palavra (src/data/ja/leituras.ts, gerado por scripts/gerar-leituras-ja.ts).
 * Aqui o texto é dividido pela palavra mais longa do dicionário que casa em cada ponto; os textos em
 * que essa divisão daria outra leitura (何 = なに × なん, 今日 = きょう × こんにち) têm a leitura inteira
 * guardada à parte.
 *
 * Formato de cada entrada: «leitura» ou «leitura|pronúncia» (katakana), com «+» na frente quando a
 * palavra gruda na anterior (です, ます, て, た…): シテ|シテ, +デス. A pronúncia só aparece quando é
 * diferente da leitura (は partícula = ワ, 先生 センセイ = センセー).
 */
import { kanaToIpa, kanaToRomaji, toHiragana } from './ipa-ja';

export type ReadingDict = Record<string, string>;

interface Piece {
  surface: string;
  reading: string;
  pron: string;
  attach: boolean;
}

const KANA = /^[ぁ-ゖァ-ーー]+$/;
const JAPANESE = /[ぁ-ゖァ-ーー㐀-䶿一-鿿々〆]/;

function parse(surface: string, v: string): Piece {
  const attach = v.startsWith('+');
  const [reading, pron] = (attach ? v.slice(1) : v).split('|');
  return { surface, reading, pron: pron ?? reading, attach };
}

/** Divide o texto em palavras do dicionário (a mais longa em cada ponto). Kana solto fica como está; kanji desconhecido sai com «？». */
export function segment(text: string, dict: ReadingDict, maxLen = 12): Piece[] {
  const out: Piece[] = [];
  const s = text.normalize('NFKC');
  let i = 0;
  while (i < s.length) {
    let hit: Piece | null = null;
    for (let n = Math.min(maxLen, s.length - i); n > 0; n--) {
      const sub = s.slice(i, i + n);
      if (dict[sub] !== undefined) {
        hit = parse(sub, dict[sub]);
        break;
      }
    }
    if (hit) {
      out.push(hit);
      i += hit.surface.length;
      continue;
    }
    const ch = s[i];
    if (KANA.test(ch)) {
      // kana fora do dicionário: junta com o kana solto anterior
      const prev = out.at(-1);
      if (prev && prev.surface === prev.reading && !dict[prev.surface] && KANA.test(prev.surface)) {
        prev.surface += ch;
        prev.reading += ch;
        prev.pron += ch;
      } else out.push({ surface: ch, reading: ch, pron: ch, attach: false });
    } else if (JAPANESE.test(ch)) out.push({ surface: ch, reading: '？', pron: '', attach: false });
    else out.push({ surface: ch, reading: '', pron: '', attach: true }); // pontuação, espaço, latim
    i++;
  }
  return out;
}

/** Leitura e pronúncia do texto inteiro, com espaço entre as palavras. */
export function readText(text: string, dict: ReadingDict, whole: ReadingDict = {}): { reading: string; pron: string } {
  const full = whole[text.trim()];
  if (full) {
    const [reading, pron] = full.split('|');
    return { reading, pron: pron ?? reading };
  }
  let reading = '';
  let pron = '';
  for (const p of segment(text, dict)) {
    if (!p.reading) {
      // pontuação separa palavras
      if (/[。、！？!?,.「」『』\s]/.test(p.surface) && reading && !reading.endsWith(' ')) {
        reading += ' ';
        pron += ' ';
      }
      continue;
    }
    const sep = reading && !p.attach && !reading.endsWith(' ') ? ' ' : '';
    reading += sep + p.reading;
    pron += sep + p.pron;
  }
  return { reading: reading.trim(), pron: pron.trim() };
}

/** Só o que o japonês tem (sem pontuação nem espaços): para comparar respostas digitadas em kana. */
export function typedReading(text: string, dict: ReadingDict, whole: ReadingDict = {}): string {
  return toHiragana(readText(text, dict, whole).reading).replace(/[\s？]/g, '');
}

/** «わたし は がくせい です · watashi wa gakusei desu»; texto só em kana mostra só o romaji. */
export function readingLine(text: string, dict: ReadingDict, whole: ReadingDict = {}): string {
  if (!JAPANESE.test(text)) return '';
  const { reading, pron } = readText(text, dict, whole);
  const kana = toHiragana(reading);
  const romaji = kanaToRomaji(pron);
  const onlyKana = !/[㐀-䶿一-鿿々〆]/.test(text);
  return onlyKana ? romaji : `${kana} · ${romaji}`;
}

/** IPA do texto, entre colchetes. */
export function ipaJa(text: string, dict: ReadingDict, whole: ReadingDict = {}): string {
  if (!JAPANESE.test(text)) return '';
  const { pron } = readText(text, dict, whole);
  const ipa = kanaToIpa(pron.replace(/？/g, ''));
  return ipa ? `[${ipa}]` : '';
}
