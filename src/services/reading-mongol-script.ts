/**
 * Romanização das duas escritas VERTICAIS do app (de cima pra baixo, colunas da esquerda pra
 * direita): a escrita mongol tradicional (pacote `mvf`) e a escrita manchu (pacote `mnc`), que nasceu
 * dela. As duas usam o mesmo bloco Unicode (U+1800–U+18AF), mas cada língua usa letras e convenções
 * próprias dentro dele, por isso cada uma tem a sua função:
 *
 * - mongol tradicional: o mesmo esquema de transliteração do Wiktionary (Module:Mong-translit,
 *   en.wiktionary.org), o que deixa cada leitura conferível contra o verbete de onde a palavra veio
 *   (“ᠮᠣᠷᠢ” → mori, “ᠪᠠᠢᠨ᠎ᠠ” → bayin-a, “ᠢᠮᠠᠭ᠎ᠠ” → imaɣ-a). É a transliteração da GRAFIA clássica, não
 *   a pronúncia de hoje: a escrita mongol guarda a ortografia do mongol clássico, e a pronúncia
 *   moderna se afasta dela (“ᠮᠣᠷᠢ”, mori, soa [mɔrʲ], como o “морь” do cirílico). Regras portadas do
 *   módulo: ᠬ/ᠭ viram q/ɣ em palavra de vogal posterior (a, o, u) e k/g em palavra de vogal frontal
 *   (e, ö, ü) — decidido pela vogal mais próxima, sem vogal frontal no meio; ᠢ depois de vogal, no meio da palavra, vira “yi” (bayin-a); o separador de vogal
 *   (U+180E) e o espaço estreito dos sufixos (U+202F) viram hífen; os seletores de variante (U+180B–
 *   U+180D, U+180F) não têm som e somem.
 * - manchu: romanização de Möllendorff (1892), a usada no Wiktionary, na Wikipédia e nos dicionários
 *   de manchu (ū, š, e “ng”). A correspondência letra a letra foi tirada da lista Swadesh do manchu no
 *   Wiktionary (Appendix:Manchu Swadesh list), que traz cada palavra nas duas formas; o teste confere
 *   a função contra essa lista.
 */

// ── mongol tradicional ──────────────────────────────────────────────────────────────────────────

const MONG: Record<string, string> = {
  'ᠠ': 'a', 'ᠡ': 'e', 'ᠢ': 'i', 'ᠣ': 'o', 'ᠤ': 'u', 'ᠥ': 'ö', 'ᠦ': 'ü', 'ᠧ': 'ē',
  'ᠨ': 'n', 'ᠩ': 'ng', 'ᠪ': 'b', 'ᠫ': 'p', 'ᠬ': 'k', 'ᠭ': 'g', 'ᠮ': 'm', 'ᠯ': 'l',
  'ᠰ': 's', 'ᠱ': 'š', 'ᠲ': 't', 'ᠳ': 'd', 'ᠴ': 'č', 'ᠵ': 'ǰ', 'ᠶ': 'y', 'ᠷ': 'r',
  'ᠸ': 'w', 'ᠹ': 'f', 'ᠺ': 'k', 'ᠻ': 'k', 'ᠼ': 'c', 'ᠽ': 'z', 'ᠾ': 'h',
  '᠐': '0', '᠑': '1', '᠒': '2', '᠓': '3', '᠔': '4', '᠕': '5', '᠖': '6', '᠗': '7', '᠘': '8', '᠙': '9',
  '᠂': ',', '᠃': '.', '᠄': ':',
  '\u202F': '-', '\u180A': '-', '\u180E': '-',
  '\u180B': '', '\u180C': '', '\u180D': '', '\u180F': '',
};
const BACK = 'ᠠᠣᠤ';
const FRONT = 'ᠡᠥᠦᠧ';
const BEFORE_YI = 'ᠠᠡᠧᠣᠤᠥᠦ';

/** ᠬ/ᠭ é “masculino” (q/ɣ) se a vogal mais próxima, antes ou depois, sem frontal no meio, é posterior. */
function nearBackVowel(chars: string[], i: number): boolean {
  for (const step of [-1, 1]) {
    for (let j = i + step; j >= 0 && j < chars.length; j += step) {
      if (FRONT.includes(chars[j])) break;
      if (BACK.includes(chars[j])) return true;
    }
  }
  return false;
}

function mongWord(w: string): string {
  const chars = [...w];
  return chars
    .map((c, i) => {
      if (c === 'ᠬ') return nearBackVowel(chars, i) ? 'q' : 'k';
      if (c === 'ᠭ') return nearBackVowel(chars, i) ? 'ɣ' : 'g';
      if (c === 'ᠢ') {
        // ᠢ + FVS3 é sempre “i”; no fim da palavra também; depois de vogal, no meio, vira “yi”
        const next = chars[i + 1];
        if (next === '\u180D' || next === undefined) return 'i';
        return i > 0 && BEFORE_YI.includes(chars[i - 1]) ? 'yi' : 'i';
      }
      return MONG[c] ?? c;
    })
    .join('');
}

const MONG_SCRIPT = /[\u1820-\u1842]/;

/** “ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?” → “sayin bayin-a uu?” (vazio se o texto não tem escrita mongol). */
export function toReadingMongolScript(text: string): string {
  if (!MONG_SCRIPT.test(text)) return '';
  return text.split(' ').map(mongWord).join(' ');
}

// ── manchu ──────────────────────────────────────────────────────────────────────────────────────

/** Romanização de Möllendorff → letra manchu (tirada da lista Swadesh do Wiktionary). */
const MNC_FROM_LATIN: [string, string][] = [
  ['ng', 'ᠩ'], ['ū', 'ᡡ'], ['š', 'ᡧ'],
  ['a', 'ᠠ'], ['e', 'ᡝ'], ['i', 'ᡳ'], ['o', 'ᠣ'], ['u', 'ᡠ'],
  ['n', 'ᠨ'], ['b', 'ᠪ'], ['p', 'ᡦ'], ['k', 'ᡴ'], ['g', 'ᡤ'], ['h', 'ᡥ'], ['m', 'ᠮ'], ['l', 'ᠯ'],
  ['s', 'ᠰ'], ['t', 'ᡨ'], ['d', 'ᡩ'], ['c', 'ᠴ'], ['j', 'ᠵ'], ['y', 'ᠶ'], ['r', 'ᡵ'], ['f', 'ᡶ'],
  ['w', 'ᠸ'], ['ž', '\u1877'],
];
const MNC_TO_LATIN: Record<string, string> = {
  ...Object.fromEntries(MNC_FROM_LATIN.map(([l, m]) => [m, l])),
  '᠈': ',', '᠉': '.', '᠂': ',', '᠃': '.',
  '\u180B': '', '\u180C': '', '\u180D': '', '\u180F': '', '\u200D': '',
};

const MANCHU_SCRIPT = /[\u1820-\u1877]/;

/** “ᠰᠠᡳ᠌ᠨ ᠪᠠᠨᡳᡥᠠ᠉” → “sain baniha.” (vazio se o texto não tem escrita manchu). */
export function toReadingManchu(text: string): string {
  if (!MANCHU_SCRIPT.test(text)) return '';
  return [...text].map((c) => MNC_TO_LATIN[c] ?? c).join('');
}

/** “morin” → “ᠮᠣᡵᡳᠨ”: só a grafia básica, sem seletores de variante (usado nos testes). */
export function manchuFromLatin(latin: string): string {
  let out = '';
  for (let i = 0; i < latin.length; ) {
    const hit = MNC_FROM_LATIN.find(([l]) => latin.startsWith(l, i));
    if (hit) {
      out += hit[1];
      i += hit[0].length;
    } else {
      out += latin[i];
      i += 1;
    }
  }
  return out;
}

// ── resposta digitada ───────────────────────────────────────────────────────────────────────────

/**
 * Leitura digitável (o `typedReading` dos pacotes): quem não tem teclado mongol ou manchu acerta
 * digitando a romanização (“mori” vale por “ᠮᠣᠷᠢ”, “morin” por “ᠮᠣᡵᡳᠨ”). O texto na escrita vira a
 * romanização; o texto já em letras latinas fica como está. O ɣ (que não sai de nenhum teclado comum)
 * vale como g; os outros acentos (č, ǰ, ü, ū, š) o `normalize` das respostas já ignora.
 */
export function typedMongolScript(text: string): string {
  return (toReadingMongolScript(text) || text).replace(/ɣ/g, 'g');
}

export function typedManchu(text: string): string {
  return toReadingManchu(text) || text;
}
