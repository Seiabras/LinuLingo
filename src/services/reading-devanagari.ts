/**
 * Leitura do devanágari em letras latinas para quem ainda não lê a escrita (hindi e marata — a
 * mesma escrita, então a mesma função serve às duas línguas).
 *
 * Por que não o IAST: o IAST (International Alphabet of Sanskrit Transliteration) é o padrão
 * acadêmico, reversível, mas cheio de diacríticos que não ajudam um iniciante a pronunciar
 * (ṃ ḥ ṣ ṇ ṭ ḍ ñ — os pontos embaixo das retroflexas não mudam o jeito de ler para quem fala
 * português, só marcam uma diferença articulatória que o aluno ainda não produz). Em vez disso,
 * esta função segue o espírito do sistema Hunterian (o das placas e documentos oficiais da Índia)
 * simplificado: troca os dígrafos por grafias que já soam certo em português — "ch" para च
 * (não "c", que em português lê /k/ ou /s/), "chh" para छ, "sh" para श/ष, "z" para ज़, "ph"/"f" etc.
 * — e descarta os pontos de retroflexa (ṭ ḍ ṇ ṣ → t d n sh) por não terem valor pronunciável para
 * quem está começando. Os mácrons de vogal longa (ā ī ū) ficam: diferenciam pares que importam
 * (काला kālā × काली kālī) e já aparecem nos parênteses de pronúncia do próprio vocabulário deste
 * app, então não chegam como novidade. A nasalização (anusvara/candrabindu) também usa o til
 * (ã, ĩ...) pela mesma razão — já é a convenção usada nas glosas do app (hā̃, nahī̃, kahā̃).
 * A única letra própria do marata, ळ (lateral retroflexa, ausente do devanágari do hindi), sai como
 * "l" simples, igual a ल: mesma simplificação já aplicada às outras retroflexas (ट/त, ड/द, ण/न),
 * sem reintroduzir um diacrítico de ponto só para esta letra.
 *
 * Fontes: Wikipedia "Devanagari", "Hunterian transliteration", "IAST" e "Schwa deletion in Hindi";
 * Census of India / Government of India Hunterian convention (placas e documentos); Omniglot
 * "Devanagari script".
 *
 * O devanágari é um abugida: cada consoante já carrega a vogal "a" (क = ka), uma marca de vogal
 * (mátra) troca essa vogal (कि = ki, को = ko), o halant/virama (्) apaga a vogal para formar
 * encontros consonantais (क्ष = kṣ → "ksh"), e o anusvara (ं)/candrabindu (ँ) nasalizam. Isso é
 * tratado aqui letra por letra, não como substituição 1:1 — ver toReadingDevanagari.
 *
 * O que a função sabe fazer:
 * - consoante + vogal inerente "a", mátras (ि ी ु ू ृ े ै ो ौ...), virama (encontros consonantais);
 * - anusvara/candrabindu: nasal homorgânica antes de consoante (सं + त = "sant"), til na vogal
 *   quando não há consoante depois (हाँ = "hā̃"); visarga (ः) como "h";
 * - apagamento do "a" final: o devanágari escreve घर como "ghara", mas se lê "ghar" — a vogal
 *   inerente do último som da palavra some, a não ser que a palavra só tenha essa única vogal, ou
 *   que apagar deixasse uma aproximante (y/r/l/v) sozinha no final de um encontro (सूर्य fica
 *   "sūrya", não "sūry"; चंद्र fica "candra", não "candr" — convenção do sânscrito que o hindi e o
 *   marata herdaram para esses encontros finais);
 * - ज्ञ, encontro congelado e irregular (não é "jn"): sai como "gy" (ज्ञान = "gyān");
 * - ळ do marata (ausente do hindi padrão), nukta do hindi para sons emprestados do persa/árabe
 *   (क़ ख़ ग़ ज़ ड़ ढ़ फ़), danda (।॥) como pontuação, dígitos devanágaris.
 *
 * Apagamento do "a" no MEIO da palavra, sem marca escrita nenhuma (regra de Ohala, a mesma usada
 * nos algoritmos de síntese de fala do hindi, ~89% de acerto segundo Narasimhan et al. — não é
 * perfeita, mas erra bem menos que nunca apagar): a sílaba C+"a" (sem mátra, sem virama) no MEIO da
 * palavra (nem a primeira, nem a última) perde o "a" quando a sílaba anterior termina em vogal E a
 * sílaba seguinte é consoante+vogal (contexto VC_CV) — varrendo da direita para a esquerda, pra uma
 * cadeia de apagamentos ficar consistente (समझना = sa+ma+jha+nā: primeiro झ perde o "a" porque ना
 * tem vogal própria, depois म MANTÉM o "a" porque agora झ não tem mais vogal nenhuma → samajhnā).
 * A primeira sílaba da palavra nunca perde o "a" por essa regra (só a última, pela regra separada
 * logo acima). Exemplos: लड़का → laṛkā, पढ़ना → paṛhnā, कृपया → kripyā, रहना → rahnā, नमस्ते
 * continua namaste (o "s" de स्ते já é parte de um encontro, não uma sílaba C+vogal à direita).
 */

const VIRAMA = '्';
const ANUSVARA = 'ं';
const CANDRABINDU = 'ँ';
const VISARGA = 'ः';
const NUKTA = '़';
const AVAGRAHA = 'ऽ';
const OM = 'ॐ';

/** Consoantes (hindi + marata, que acrescenta ळ) e as extensões com nukta já precompostas. */
const CONSONANTS: Record<string, string> = {
  क: 'k', ख: 'kh', ग: 'g', घ: 'gh', ङ: 'n',
  च: 'ch', छ: 'chh', ज: 'j', झ: 'jh', ञ: 'ny',
  ट: 't', ठ: 'th', ड: 'd', ढ: 'dh', ण: 'n',
  त: 't', थ: 'th', द: 'd', ध: 'dh', न: 'n',
  प: 'p', फ: 'ph', ब: 'b', भ: 'bh', म: 'm',
  य: 'y', र: 'r', ल: 'l', व: 'v',
  श: 'sh', ष: 'sh', स: 's', ह: 'h',
  ळ: 'l', // só marata: lateral retroflexa, ausente do devanágari padrão do hindi; simplificada pra "l"
  // nukta precomposto (caso o texto já venha assim, em vez de base + marca de nukta separada)
  'क़': 'q', 'ख़': 'kh', 'ग़': 'g', 'ज़': 'z', 'ड़': 'r', 'ढ़': 'rh', 'फ़': 'f', 'य़': 'y',
};

/** Consoantes com nukta (़), pela base: é assim que o texto deste app grava essas letras. */
const NUKTA_LATIN: Record<string, string> = {
  क: 'q', ख: 'kh', ग: 'g', ज: 'z', ड: 'r', ढ: 'rh', फ: 'f',
};

/** Vogais independentes (começo de palavra ou depois de outra vogal). */
const INDEPENDENT_VOWELS: Record<string, string> = {
  अ: 'a', आ: 'ā', इ: 'i', ई: 'ī', उ: 'u', ऊ: 'ū',
  ऋ: 'ri', ॠ: 'rī', ऌ: 'li', ॡ: 'lī',
  ऎ: 'e', ए: 'e', ऐ: 'ai', ऒ: 'o', ओ: 'o', औ: 'au',
  'ऍ': 'e', 'ऑ': 'o', 'ॲ': 'a', // vogais "candra", usadas em empréstimos do inglês (ऑफिस, ॲपल)
};

/** Mátras: marcas de vogal que substituem o "a" inerente da consoante anterior. */
const MATRAS: Record<string, string> = {
  'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū',
  'ृ': 'ri', 'ॄ': 'rī', 'ॢ': 'li', 'ॣ': 'lī',
  'ॅ': 'e', 'ॆ': 'e', 'े': 'e', 'ै': 'ai',
  'ॉ': 'o', 'ॊ': 'o', 'ो': 'o', 'ौ': 'au',
};

const DANDA: Record<string, string> = { '।': '.', '॥': '.' };
const DIGITS: Record<string, string> = {
  '०': '0', '१': '1', '२': '2', '३': '3', '४': '4', '५': '5', '६': '6', '७': '7', '८': '8', '९': '9',
};

/** Todo caractere que faz parte de uma palavra devanágari em andamento (para achar o fim dela). */
const DEVANAGARI_CONTINUATION = new Set<string>([
  ...Object.keys(CONSONANTS),
  ...Object.keys(INDEPENDENT_VOWELS),
  ...Object.keys(MATRAS),
  VIRAMA, ANUSVARA, CANDRABINDU, VISARGA, NUKTA,
]);

const WORD_RE = new RegExp(`[${[...DEVANAGARI_CONTINUATION].join('')}]+`, 'g');

const APPROXIMANTS = new Set(['y', 'r', 'l', 'v']);

/** Uma sílaba (consoante + o que vier depois) de uma palavra devanágari, já em letras latinas. */
interface Syllable {
  latin: string;
  /** Vogal já decidida (string, inclusive vazia pra sílabas só de vogal), ou `null` = sem vogal (bare). */
  vowel: string | null;
  /** `true` só na sílaba C+"a" sem mátra nem virama: é a única candidata a perder o "a". */
  deletable: boolean;
  /** A consoante da sílaba é y/r/l/v (importa pra não isolar uma aproximante num encontro final). */
  approximant: boolean;
}

/** Aplica anusvara/candrabindu/visarga em `word[i]`, se houver: devolve [sufixo, próximo índice]. */
function trailingNasal(word: string, i: number, prevLatin: string): [string, number] {
  const c = word[i];
  if (c === ANUSVARA || c === CANDRABINDU) {
    const next = word[i + 1];
    if (next && CONSONANTS[next]) return ['पफबभम'.includes(next) ? 'm' : 'n', i + 1]; // nasal homorgânica
    return ['̃', i + 1]; // sem consoante depois: til na vogal anterior (prevLatin fica por conta de quem chama)
  }
  if (c === VISARGA) return ['h', i + 1];
  return ['', i];
}

/** Sílabas de uma palavra devanágari (só os caracteres de DEVANAGARI_CONTINUATION). */
function syllablesOf(word: string): Syllable[] {
  const out: Syllable[] = [];
  let i = 0;
  while (i < word.length) {
    const c = word[i];

    if (INDEPENDENT_VOWELS[c] !== undefined) {
      let latin = INDEPENDENT_VOWELS[c];
      i++;
      const [nasal, next] = trailingNasal(word, i, latin);
      i = next;
      out.push({ latin: latin + nasal, vowel: '', deletable: false, approximant: false });
      continue;
    }

    // CONSONANTS[c] !== undefined aqui sempre, já que word só tem caracteres de DEVANAGARI_CONTINUATION
    let latin: string;
    if (c === 'ज' && word[i + 1] === VIRAMA && word[i + 2] === 'ञ') {
      // ज्ञ é um encontro congelado e irregular (ज्ञान = gyān, विज्ञान = vigyān), não "jn".
      latin = 'gy';
      i += 3;
    } else {
      latin = CONSONANTS[c];
      i++;
      if (word[i] === NUKTA) {
        latin = NUKTA_LATIN[c] ?? latin;
        i++;
      }
    }
    // o nukta pode trocar a consoante por uma aproximante (ड़ → "r"): decide depois do ajuste
    const approximant = APPROXIMANTS.has(latin);

    if (word[i] === VIRAMA) {
      // encontro consonantal: esta sílaba fica sem vogal, presa à próxima
      out.push({ latin, vowel: null, deletable: false, approximant });
      i++;
      continue;
    }

    const matraVowel = MATRAS[word[i]];
    if (matraVowel !== undefined) {
      i++;
      const [nasal] = trailingNasal(word, i, matraVowel);
      if (word[i] === ANUSVARA || word[i] === CANDRABINDU || word[i] === VISARGA) i++;
      out.push({ latin, vowel: matraVowel + nasal, deletable: false, approximant });
      continue;
    }

    if (word[i] === ANUSVARA || word[i] === CANDRABINDU || word[i] === VISARGA) {
      const [nasal] = trailingNasal(word, i, 'a');
      i++;
      out.push({ latin, vowel: 'a' + nasal, deletable: false, approximant });
      continue;
    }

    // vogal "a" inerente, sem marca nenhuma: candidata a desaparecer (ver decideVowels)
    out.push({ latin, vowel: 'a', deletable: true, approximant });
  }
  return out;
}

/**
 * Decide quais "a" inerentes somem: o da última sílaba (regra de apagamento final) e os do meio
 * da palavra (regra de Ohala, VC_CV, da direita pra esquerda) — ver o cabeçalho do arquivo.
 * Modifica `syll` no lugar (cada sílaba decide `vowel = null` quando o "a" cai).
 */
function decideVowels(syll: Syllable[]): void {
  const n = syll.length;
  if (n === 0) return;
  const last = syll[n - 1];
  if (last.deletable) {
    // apaga no fim da palavra, a não ser que a palavra só tenha essa vogal, ou que isso isolasse uma
    // aproximante fechando um encontro (सूर्य sūrya, चंद्र candra, não sūry/candr)
    const strandedApproximant = n >= 2 && syll[n - 2].vowel === null && last.approximant;
    const onlyVowelInWord = !syll.slice(0, n - 1).some((s) => s.vowel !== null);
    if (!strandedApproximant && !onlyVowelInWord) last.vowel = null;
  }
  for (let i = n - 2; i >= 1; i--) {
    const s = syll[i];
    if (!s.deletable) continue;
    const leftHasVowel = syll[i - 1].vowel !== null;
    const rightHasVowel = syll[i + 1].vowel !== null;
    if (leftHasVowel && rightHasVowel) s.vowel = null;
  }
}

function wordToLatin(word: string): string {
  const syll = syllablesOf(word);
  decideVowels(syll);
  return syll.map((s) => s.latin + (s.vowel ?? '')).join('');
}

/**
 * Devanágari (hindi e marata) em letras latinas, para quem ainda não lê a escrita. Ver o
 * cabeçalho do arquivo para as fontes, as regras seguidas e o que fica de fora.
 */
export function toReadingDevanagari(raw: string): string {
  const text = raw.normalize('NFC');
  let out = '';
  let i = 0;
  while (i < text.length) {
    const c = text[i];
    if (DANDA[c] !== undefined) { out += DANDA[c]; i++; continue; }
    if (DIGITS[c] !== undefined) { out += DIGITS[c]; i++; continue; }
    if (c === OM) { out += 'om'; i++; continue; }
    if (c === AVAGRAHA) { i++; continue; }
    WORD_RE.lastIndex = i;
    const m = WORD_RE.exec(text);
    if (m && m.index === i) {
      out += wordToLatin(m[0]);
      i += m[0].length;
      continue;
    }
    out += c; // pontuação, espaço, texto em outra escrita: passa direto
    i++;
  }
  return out.normalize('NFC');
}
