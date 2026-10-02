/**
 * Leitura do devanágari em letras latinas para quem ainda não lê a escrita (hindi e marata — a
 * mesma escrita, então a mesma função serve às duas línguas).
 *
 * Por que não o IAST: o IAST (International Alphabet of Sanskrit Transliteration) é o padrão
 * acadêmico, reversível, mas cheio de diacríticos que não ajudam um iniciante a pronunciar
 * (ṃ ḥ ṣ ṇ ṭ ḍ ñ — os pontos embaixo das retroflexas não mudam o jeito de ler para quem fala
 * português, só marcam uma diferença articulatória que o aluno ainda não produz). Em vez disso,
 * esta função segue o espírito do sistema Hunterian (o das placas e documentos oficiais da Índia)
 * simplificado: troca os dígrafos por grafias que already soam certo em português — "ch" para च
 * (não "c", que em português lê /k/ ou /s/), "chh" para छ, "sh" para श/ष, "z" para ज़, "ph"/"f" etc.
 * — e descarta os pontos de retroflexa (ṭ ḍ ṇ ṣ → t d n sh) por não terem valor pronunciável para
 * quem está começando. Os mácrons de vogal longa (ā ī ū) ficam: diferenciam pares que importam
 * (काला kālā × काली kālī) e já aparecem nos parênteses de pronúncia do próprio vocabulário deste
 * app, então não chegam como novidade. A nasalização (anusvara/candrabindu) também usa o til
 * (ã, ĩ...) pela mesma razão — já é a convenção usada nas glosas do app (hā̃, nahī̃, kahā̃).
 * A única letra própria do marata, ळ (lateral retroflexa, ausente do devanágari do hindi), sai como
 * "L" maiúsculo: differentiates de ल sem recorrer a outro diacrítico de ponto — काळा (preto) × काला
 * (hindi, preto) não colidem na leitura.
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
 * O que fica de fora, por ser um apagamento de "a" no meio da palavra sem marca escrita nenhuma
 * (nem virama, nem posição final) — um fenômeno real do hindi falado (कृपया soa "kṛpyā", नमस्कार
 * as vezes "namaskār" mesmo, रहना soa "rêhnā") mas que depende de léxico e não só da grafia: é um
 * problema aberto mesmo na linguística computacional do hindi (o algoritmo clássico de Narasimhan
 * et al. chega a uns 89% de acerto). Esta função lê a grafia com fidelidade e aplica só as regras
 * regulares (encontro marcado por virama, apagamento final); o resultado em palavras como कृपया
 * sai "kripayā" em vez do "kṛpyā" falado — uma leitura mais "silabada" mas sempre pronunciável,
 * nunca errada, só mais formal que o jeito corrido de falar.
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
  ळ: 'L', // só marata: lateral retroflexa, ausente do devanágari padrão do hindi
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

function isEndOfWord(text: string, i: number): boolean {
  return i >= text.length || !DEVANAGARI_CONTINUATION.has(text[i]);
}

/** Aplica anusvara/candrabindu/visarga em `text[i]`, se houver, devolvendo o próximo índice. */
function consumeTrailingNasal(text: string, i: number, out: string[]): number {
  const c = text[i];
  if (c === ANUSVARA || c === CANDRABINDU) {
    const next = text[i + 1];
    if (next && CONSONANTS[next]) {
      // nasal homorgânica: m antes de consoante labial, n nas outras famílias
      out.push('पफबभम'.includes(next) ? 'm' : 'n');
    } else {
      // sem consoante depois: nasaliza a vogal que acabou de sair (til combinante)
      const last = out.pop() ?? '';
      out.push(last + '̃');
    }
    return i + 1;
  }
  if (c === VISARGA) {
    out.push('h');
    return i + 1;
  }
  return i;
}

/**
 * Devanágari (hindi e marata) em letras latinas, para quem ainda não lê a escrita. Ver o
 * cabeçalho do arquivo para as fontes, as regras seguidas e o que fica de fora.
 */
export function toReadingDevanagari(raw: string): string {
  const text = raw.normalize('NFC');
  const out: string[] = [];
  let i = 0;
  let wordHasVowel = false;
  // true logo depois de uma consoante presa por virama: a aproximante (y/r/l/v) que fecha um
  // encontro no fim da palavra mantém o "a" (सूर्य sūrya, चंद्र candra), ao contrário de uma
  // obstruinte no mesmo lugar (दोस्त dost).
  let afterVirama = false;

  while (i < text.length) {
    const c = text[i];

    if (DANDA[c] !== undefined) {
      out.push(DANDA[c]);
      wordHasVowel = false;
      afterVirama = false;
      i++;
      continue;
    }
    if (DIGITS[c] !== undefined) {
      out.push(DIGITS[c]);
      afterVirama = false;
      i++;
      continue;
    }
    if (c === OM) {
      out.push('om');
      wordHasVowel = true;
      afterVirama = false;
      i++;
      continue;
    }
    if (c === AVAGRAHA) {
      afterVirama = false;
      i++;
      continue;
    }

    if (INDEPENDENT_VOWELS[c] !== undefined) {
      out.push(INDEPENDENT_VOWELS[c]);
      wordHasVowel = true;
      afterVirama = false;
      i++;
      i = consumeTrailingNasal(text, i, out);
      continue;
    }

    if (CONSONANTS[c] !== undefined) {
      let latin: string;
      if (c === 'ज' && text[i + 1] === VIRAMA && text[i + 2] === 'ञ') {
        // ज्ञ é um encontro congelado e irregular (ज्ञान = gyān, विज्ञान = vigyān), não "jn".
        latin = 'gy';
        i += 3;
      } else {
        latin = CONSONANTS[c];
        i++;
        if (text[i] === NUKTA) {
          latin = NUKTA_LATIN[c] ?? latin;
          i++;
        }
      }

      if (text[i] === VIRAMA) {
        // encontro consonantal: esta consoante fica sem vogal, presa à próxima
        out.push(latin);
        afterVirama = true;
        i++;
        continue;
      }

      const matraVowel = MATRAS[text[i]];
      if (matraVowel !== undefined) {
        out.push(latin + matraVowel);
        wordHasVowel = true;
        afterVirama = false;
        i++;
        i = consumeTrailingNasal(text, i, out);
        continue;
      }

      if (text[i] === ANUSVARA || text[i] === CANDRABINDU || text[i] === VISARGA) {
        // vogal "a" inerente, nasalizada ou com visarga em seguida
        out.push(latin + 'a');
        wordHasVowel = true;
        afterVirama = false;
        i = consumeTrailingNasal(text, i, out);
        continue;
      }

      // vogal "a" inerente, sem marca nenhuma: apaga no fim da palavra (घर = ghar, não ghara),
      // a não ser que isso deixasse uma aproximante sozinha fechando um encontro (सूर्य, चंद्र)
      // ou que esta fosse a única vogal da palavra inteira.
      const strandedApproximant = afterVirama && 'यरलव'.includes(c);
      if (wordHasVowel && isEndOfWord(text, i) && !strandedApproximant) {
        out.push(latin);
      } else {
        out.push(latin + 'a');
        wordHasVowel = true;
      }
      afterVirama = false;
      continue;
    }

    // pontuação, espaço, dígitos latinos, texto em outra escrita: passa direto
    out.push(c);
    wordHasVowel = false;
    afterVirama = false;
    i++;
  }

  return out.join('').normalize('NFC');
}
