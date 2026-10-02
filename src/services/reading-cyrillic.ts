/**
 * Romanização do cirílico para os pacotes eslavos sem escrita latina (ru, uk, be, bg, mk, sr):
 * a leitura mostrada acima do IPA para quem ainda não lê o alfabeto cirílico. Não existe "o"
 * sistema cirílico — cada idioma tem o seu próprio padrão nacional, e letras como е/э, і/ї/ё/ў,
 * ъ, ѕ/ј/љ/њ/ѓ/ќ e љ/њ/џ/ђ/ћ significam coisas diferentes (ou nem existem) em cada um:
 * - russo: sistema "popular" (BGN/PCGN simplificado, sem diacríticos) — o das placas e do
 *   noticiário em inglês, não a norma científica ISO 9/GOST cheia de acento (š č ž);
 * - ucraniano: sistema nacional oficial, Resolução n.º 55/2010 do Conselho de Ministros — o do
 *   passaporte (por isso "Київ" vira "Kyiv", não "Kiev", e "Андрій" vira "Andrii", não "Andriy");
 * - bielorrusso: sistema nacional oficial de 2007 (Instrução de transliteração dos nomes
 *   geográficos), que parte da Łacinka histórica — ў vira ŭ e ж ч ш viram ž č š;
 * - búlgaro: Streamlined System de 2006, lei búlgara de transliteração — o dos documentos de
 *   identidade (ъ → a, щ → sht, e o final -ия perde o y: "България" → "Balgaria");
 * - macedônio: sistema nacional de 2008 (base ICAO 9303) — o do passaporte, sem diacríticos
 *   (ѓ → gj, ќ → kj, ѕ → dz, џ → dj);
 * - sérvio: não é transliteração nenhuma — o sérvio é oficialmente bialfabético, com
 *   correspondência letra a letra entre o cirílico de Vuk Karadžić e o latino de Gaj
 *   (љ њ џ ђ ћ → lj nj dž đ ć), que é a romanização mais antiga e mais oficial que existe.
 * Fontes: Wikipédia, "Romanization of Russian", "Romanization of Ukrainian",
 * "Romanization of Belarusian", "Romanization of Bulgarian", "Romanization of Macedonian" e
 * "Serbian Cyrillic alphabet" — tabelas de cada lei/instrução nacional citadas nesses artigos.
 *
 * Simplificações (como nos livros didáticos, não para documentos oficiais): o acento tônico
 * marcado no texto (combining acute, U+0301) não aparece na romanização; os sinais mudos russo
 * (ъ) e bielorrusso (ь) somem sem deixar marca; o bielorrusso não marca a suavização das
 * consoantes л н с з ц com acento (ĺ ń ś ź ć), como faria a Łacinka completa.
 */

/** Maiúscula na 1.ª letra do resultado se a palavra de origem começava maiúscula. */
function capFirst(latin: string, orig: string): string {
  const c = orig[0];
  if (c && c === c.toUpperCase() && c !== c.toLowerCase()) return latin.charAt(0).toUpperCase() + latin.slice(1);
  return latin;
}

// blocos cirílicos (+ apóstrofo, que separa letras no ucraniano e no bielorrusso); o resto do
// texto — pontuação, números, a tradução em português ao lado — passa direto, sem mudar.
const CYR_WORD = /[Ѐ-ӿ’ʼ']+/g;

function byMap(text: string, word: (w: string) => string): string {
  // a marca de tônica (combining acute) não é cirílica: tira antes de separar em palavras, senão
  // corta a palavra ao meio (Здра́вствуйте → "Здра" + "вствуйте" como se fossem duas).
  return text
    .normalize('NFC')
    .replace(/́/g, '')
    .replace(CYR_WORD, (w) => word(w));
}

// ── russo: sistema popular (BGN/PCGN sem diacríticos) ──
const RU_CONS: Record<string, string> = {
  б: 'b', в: 'v', г: 'g', д: 'd', ж: 'zh', з: 'z', к: 'k', л: 'l', м: 'm', н: 'n', п: 'p', р: 'r',
  с: 's', т: 't', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch',
};
const RU_PLAIN_V: Record<string, string> = { а: 'a', о: 'o', у: 'u', ы: 'y', э: 'e', и: 'i' };

function ruWord(word: string): string {
  const w = word.toLowerCase();
  let out = '';
  let afterVowelOrSign = true; // início de palavra conta como o й: dispara o "y" do е
  for (const ch of w) {
    if (ch === 'ё') { out += 'yo'; afterVowelOrSign = true; continue; }
    if (ch === 'ю') { out += 'yu'; afterVowelOrSign = true; continue; }
    if (ch === 'я') { out += 'ya'; afterVowelOrSign = true; continue; }
    if (ch === 'е') { out += afterVowelOrSign ? 'ye' : 'e'; afterVowelOrSign = true; continue; }
    if (ch === 'й') { out += 'y'; afterVowelOrSign = true; continue; }
    if (ch === 'ъ' || ch === 'ь') { afterVowelOrSign = true; continue; }
    if (RU_PLAIN_V[ch]) { out += RU_PLAIN_V[ch]; afterVowelOrSign = true; continue; }
    if (RU_CONS[ch]) { out += RU_CONS[ch]; afterVowelOrSign = false; continue; }
    out += ch;
    afterVowelOrSign = false;
  }
  return capFirst(out, word);
}

/** Russo em letras latinas, sistema popular (BGN/PCGN sem diacríticos): Здравствуйте → Zdravstvuyte. */
export const toReadingRu = (text: string) => byMap(text, ruWord);

// ── ucraniano: sistema nacional de 2010 (Resolução 55 do Conselho de Ministros) ──
const UK_SIMPLE: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', д: 'd', е: 'e', ж: 'zh', з: 'z', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o',
  п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch',
};

function ukWord(word: string): string {
  const w = word.toLowerCase();
  let out = '';
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const initial = i === 0;
    if (ch === 'г') { out += w[i - 1] === 'з' ? 'gh' : 'h'; continue; } // зг → zgh, pra não confundir com ж (zh)
    if (ch === 'ґ') { out += 'g'; continue; }
    if (ch === 'и') { out += 'y'; continue; }
    if (ch === 'і') { out += 'i'; continue; }
    if (ch === 'ї') { out += initial ? 'yi' : 'i'; continue; } // Київ → Kyiv
    if (ch === 'й') { out += initial ? 'y' : 'i'; continue; } // Андрій → Andrii
    if (ch === 'є') { out += initial ? 'ye' : 'ie'; continue; }
    if (ch === 'ю') { out += initial ? 'yu' : 'iu'; continue; }
    if (ch === 'я') { out += initial ? 'ya' : 'ia'; continue; }
    if (ch === 'ь') continue;
    if (UK_SIMPLE[ch]) { out += UK_SIMPLE[ch]; continue; }
    out += ch; // apóstrofo
  }
  return capFirst(out, word);
}

/** Ucraniano em letras latinas, sistema nacional oficial de 2010: Привіт → Pryvit, Київ → Kyiv. */
export const toReadingUk = (text: string) => byMap(text, ukWord);

// ── bielorrusso: sistema nacional de 2007 (Instrução de transliteração), base Łacinka ──
const BE_VOWEL: Record<string, string> = { а: 'a', і: 'i', о: 'o', у: 'u', ы: 'y', э: 'e' };
const BE_CONS: Record<string, string> = {
  б: 'b', в: 'v', г: 'h', д: 'd', ж: 'ž', з: 'z', к: 'k', л: 'l', м: 'm', н: 'n', п: 'p', р: 'r',
  с: 's', т: 't', ф: 'f', х: 'ch', ц: 'c', ч: 'č', ш: 'š',
};

function beWord(word: string): string {
  const w = word.toLowerCase();
  let out = '';
  let jTrigger = true; // início de palavra, vogal, apóstrofo, ь ou ў: a próxima iotada vem com j
  for (const ch of w) {
    if (ch === 'ь') { jTrigger = true; continue; } // sinal mudo na romanização (como nos livros)
    if (ch === '’' || ch === "'" || ch === 'ʼ') { out += ch; jTrigger = true; continue; }
    if (ch === 'е') { out += jTrigger ? 'je' : 'ie'; jTrigger = true; continue; }
    if (ch === 'ё') { out += jTrigger ? 'jo' : 'io'; jTrigger = true; continue; }
    if (ch === 'ю') { out += jTrigger ? 'ju' : 'iu'; jTrigger = true; continue; }
    if (ch === 'я') { out += jTrigger ? 'ja' : 'ia'; jTrigger = true; continue; }
    if (ch === 'й') { out += 'j'; jTrigger = true; continue; }
    if (ch === 'ў') { out += 'ŭ'; jTrigger = true; continue; }
    if (BE_VOWEL[ch]) { out += BE_VOWEL[ch]; jTrigger = true; continue; }
    if (BE_CONS[ch]) { out += BE_CONS[ch]; jTrigger = false; continue; }
    out += ch;
    jTrigger = false;
  }
  return capFirst(out, word);
}

/** Bielorrusso em letras latinas, sistema nacional de 2007: Прывітанне → Pryvitannie, ў → ŭ. */
export const toReadingBe = (text: string) => byMap(text, beWord);

// ── búlgaro: Streamlined System de 2006 (lei búlgara de transliteração) ──
const BG_MAP: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l',
  м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch',
  ш: 'sh', щ: 'sht', ъ: 'a', ь: 'y', ю: 'yu', я: 'ya',
};

function bgWord(word: string): string {
  const w = word.toLowerCase();
  let out = '';
  for (const ch of w) out += BG_MAP[ch] ?? ch;
  // final -ия (vírgula do Streamlined System): България → Balgariya → Balgaria
  out = out.replace(/iya$/, 'ia');
  return capFirst(out, word);
}

/** Búlgaro em letras latinas, Streamlined System (2006): Здравей → Zdravey, ъ → a, щ → sht. */
export const toReadingBg = (text: string) => byMap(text, bgWord);

// ── macedônio: sistema nacional de 2008 (base ICAO 9303, o do passaporte) ──
const MK_MAP: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', ѓ: 'gj', е: 'e', ж: 'zh', з: 'z', ѕ: 'dz', и: 'i', ј: 'j',
  к: 'k', л: 'l', љ: 'lj', м: 'm', н: 'n', њ: 'nj', о: 'o', п: 'p', р: 'r', с: 's', т: 't', ќ: 'kj',
  у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', џ: 'dj', ш: 'sh',
};

function mkWord(word: string): string {
  const w = word.toLowerCase();
  let out = '';
  for (const ch of w) out += MK_MAP[ch] ?? ch;
  return capFirst(out, word);
}

/** Macedônio em letras latinas, sistema nacional de 2008: Здраво → Zdravo, ѓ → gj, џ → dj. */
export const toReadingMk = (text: string) => byMap(text, mkWord);

// ── sérvio: bialfabético — correspondência letra a letra do cirílico (Vuk) com o latino (Gaj) ──
const SR_MAP: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', ђ: 'đ', е: 'e', ж: 'ž', з: 'z', и: 'i', ј: 'j', к: 'k',
  л: 'l', љ: 'lj', м: 'm', н: 'n', њ: 'nj', о: 'o', п: 'p', р: 'r', с: 's', т: 't', ћ: 'ć', у: 'u',
  ф: 'f', х: 'h', ц: 'c', ч: 'č', џ: 'dž', ш: 'š',
};

function srWord(word: string): string {
  const w = word.toLowerCase();
  let out = '';
  for (const ch of w) out += SR_MAP[ch] ?? ch;
  return capFirst(out, word);
}

/** Sérvio em letras latinas (alfabeto latino sérvio de Gaj, oficial e de uso corrente): Хвала → Hvala. */
export const toReadingSr = (text: string) => byMap(text, srWord);
