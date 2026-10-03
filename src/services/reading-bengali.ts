/**
 * Leitura do bengali (bangla) em letras latinas para quem ainda não lê a escrita.
 *
 * Por que não a Romanização da National Library at Kolkata (NLK) nem o IAST: são os padrões
 * acadêmicos, reversíveis letra a letra, mas cheios de diacríticos que não ajudam um iniciante a
 * pronunciar (ā ī ū ṭ ḍ ṇ ś ṣ ṁ ḥ) e, pior para o bengali especificamente, continuam transliterando
 * a escrita como se fosse sânscrito — a letra অ sai como "a" na ISO 15919/NLK, mas o bengali não lê
 * mais essa vogal como no sânscrito: ela soa /ɔ~o/ há séculos (Wikipédia, "Romanisation of
 * Bengali": "the vowel অ... is transliterated as a in ISO 15919 [but] pronounced as /ɔ~o/ in
 * Bengali, not the Sanskrit /ɐ~ə/"). Em vez do padrão acadêmico, esta função segue o espírito das
 * romanizações "fonéticas"/populares (o tipo usado em teclados como o Avro e no dia a dia online),
 * adaptadas para quem fala português: troca os diacríticos por dígrafos que já soam certo em
 * português ("sh" para শ/ষ/স, "ch"/"chh" para চ/ছ, "ng" para ঙ/ং) e escreve a vogal inerente e as
 * vogais como realmente soam no bengali moderno, não como soariam em sânscrito.
 *
 * Duas pegadinhas específicas do bengali (bem diferentes do devanágari do hindi/marata, ver
 * src/services/reading-devanagari.ts) que esta função leva a sério:
 *
 * 1) A vogal inerente (অ, a que toda consoante carrega sozinha) soa "o", não "a": ক sozinho é
 *    "ko", não "ka" — bem documentado (Wikipédia "Bengali alphabet": "the letter অ ô /ɔ/ represents
 *    the default inherent vowel"; Wikipédia "Bengali phonology" confirma a realização /ɔ~o/, e as
 *    próprias dicas de pronúncia em src/data/bn/vocabulario.ts já escrevem assim: নমস্কার =
 *    "nomoshkar", ধন্যবাদ = "dhonnobad", শুভ সকাল = "shubho shokal").
 * 2) A mátra া (o sinal de vogal que troca a vogal inerente da consoante) soa "a", não "o" — o
 *    oposto do que se poderia supor por analogia com a vogal inerente: কা soa "ka", não "ko"
 *    (confirmado nas mesmas fontes acima e em toda palavra do vocabulário com া: ভাষা "bhasha",
 *    বাংলা "bangla", খারাপ "kharap").
 *
 * As três sibilantes শ, ষ e স: o bengali padrão moderno quase sempre as pronuncia como "sh" /ʃ/,
 * mesmo স (que no sânscrito era "s" puro) — confirmado pelo Wiktionary para palavras comuns do
 * próprio vocabulário deste app (সকাল "/ʃɔkal/", সাদা "/ʃad̪a/", ambas com শ-like /ʃ/ nas
 * pronúncias de Bangladesh e Bengala Ocidental). Por isso as três saem como "sh" aqui, sem o ponto
 * de retroflexa (ś/ṣ) do IAST, que não muda a pronúncia para quem fala português.
 *
 * Diacríticos de retroflexa descartados por não terem valor pronunciável: ট ঠ ড ঢ ণ saem como
 * t/th/d/dh/n (iguais a ত থ দ ধ ন), mesma lógica do ṭ ḍ ṇ do arquivo do devanágari.
 *
 * Comprimento de vogal (curta × longa): ao contrário do hindi, no bengali moderno o comprimento de
 * vogal NÃO é fonêmico — a Wikipédia ("Bengali phonology") é categórica: "vowel length is not
 * contrastive in Bengali; there is no meaningful distinction between a 'short vowel' and a 'long
 * vowel'". Por isso ই/ঈ e উ/ঊ caem nas mesmas letras (i, u), sem mácron: diferente da escolha do
 * devanágari (que mantém ā/ī/ū porque no hindi o comprimento ainda separa pares como काला/काली),
 * aqui um mácron só acrescentaria uma distinção que o próprio bengali não faz mais.
 *
 * য sozinho (não em encontro) se fundiu com জ na pronúncia moderna e sai "j", não "y" (Wikipédia
 * "Bengali phonology": "⟨জ⟩ and ⟨য⟩ may represent a voiced affricate /dʒ/ in Standard Bengali
 * words" — confirmado pelo vocabulário: যাই "jai", জানি "jani"). Já য় (য com nukta, letra à parte
 * desde a reforma ortográfica) continua sendo a semivogal "y" (দয়া "doya", বিদায় "biday", নয়
 * "noy"). ড়/ঢ় (ড/ঢ com nukta) são a vibrante simples retroflexa, que soa como um "r" batido — saem
 * como "r"/"rh", e diferente da maioria das consoantes, mantêm a vogal inerente mesmo no fim da
 * palavra (বড় = "boro", não "bor"): o encontro de uma vibrante batida sem vogal nenhuma depois é
 * raro nas línguas indianas, então o bengali não apaga essa vogal final.
 *
 * ন্য é um encontro congelado e bem conhecido: não sai "ny", sai com o ন dobrado — "nn"
 * (ধন্যবাদ = "dhonnobad", confirmado também para অন্য "ônno" e জন্য "jonno" na literatura sobre o
 * bengali coloquial). ক্ষ (sânscrito kṣ) sai "kkh", não "ksh" como no hindi (রক্ষা = "rokkha").
 * জ্ঞ sai "gg": a Wikipédia ("Bengali phonology") documenta জ্ঞান como /ggæn/, não o "gy" do hindi
 * ज्ञान — বিজ্ঞান fica "biggan".
 *
 * ং (anusvara) soa sempre "ng" no bengali (um /ŋ/ de verdade, não um espaço reservado que muda de
 * lugar de articulação como no hindi): বাংলা = "bangla", মাংস = "mangsho" (Wikipédia "Bengali
 * grammar"). ঁ (chandrabindu) nasaliza só a vogal, com til (পাঁচ = "pãch") — convenção já usada no
 * arquivo do devanágari e ainda mais natural para quem fala português (ã, não, mãe).
 *
 * Um clítico gramatical tratado à parte (porque é regra produtiva, não léxico memorizado): os
 * classificadores টা/টি, presos sem espaço ao numeral ou substantivo anterior ("একটা" = um,
 * "ছেলেটি" = o menino), fazem a consoante final de quem vem antes apagar a vogal como se já
 * estivesse no fim da palavra — একটা sai "ekta" (confere com o vocabulário: "আমার একটা ভাই আছে"),
 * não "ekota".
 *
 * O que fica de fora, por depender do léxico e não só da grafia (mesma ressalva que o arquivo do
 * devanágari faz para o apagamento de vogal no meio de palavras do hindi falado): o apagamento da
 * vogal inerente no fim de palavra é a regra geral aqui (ঘর, "casa", sai "ghor", não "ghoro"), mas
 * um punhado de palavras comuns mantém essa vogal final sem nenhuma marca escrita que avise — três
 * exemplos do próprio vocabulário deste app: ছোট ("chhoto", não "chhot"), পছন্দ ("pochhondo", não
 * "pochhond") e শুভ ("shubho", não "shubh" — por isso esta função lê "শুভ সকাল" como "shubh shokal" em
 * vez do "shubho shokal" do parêntese de pronúncia do vocabulário).
 *
 * No MEIO da palavra, a vogal inerente cai pela regra de Ohala, a mesma do devanágari (contexto
 * VC_CV, da direita para a esquerda, ver dropMedialVowels): কলকাতা = "kolkata", আমরা = "amra",
 * সোমবার = "shombar", বুধবার = "budhbar", কমলা = "komla", বলতে = "bolte". Consoante presa num
 * encontro não perde a vogal (ধন্যবাদ "dhonnobad", নমস্কার "nomoshkar"). Também é uma regra
 * aproximada: algumas palavras guardam o "o" do meio sem marca nenhuma — অথবা é "othoba", e esta
 * função lê "othba". Conferido contra as pronúncias entre parênteses do vocabulário do pacote: a
 * regra acerta mais palavras do que erra.
 *
 * Fontes: Wikipédia em inglês "Bengali phonology", "Bengali alphabet", "Bengali grammar",
 * "Romanisation of Bengali"; Wiktionary em inglês para সকাল e সাদা (IPA); as próprias dicas de
 * pronúncia entre parênteses em src/data/bn/vocabulario.ts (verificadas no Wiktionary/Wikipédia,
 * conforme o cabeçalho daquele arquivo).
 *
 * O bengali também é um abugida (irmão do devanágari, ambos descendentes do brahmi): consoante +
 * vogal inerente "o" (ক = ko), mátra troca a vogal (কি = ki, কা = ka), hôshonto/virama (্) apaga a
 * vogal para encontros consonantais, অনুস্বার (ং)/চন্দ্রবিন্দু (ঁ) nasalizam. Tratado aqui letra por
 * letra com um laço de estados, não como substituição 1:1 — ver toReadingBn.
 */

const VIRAMA = '্';
const ANUSVARA = 'ং';
const CANDRABINDU = 'ঁ';
const VISARGA = 'ঃ';
const NUKTA = '়';
const KHANDA_TA = 'ৎ'; // "t" seco, nunca carrega vogal nenhuma

/** Consoantes do bengali e as extensões com nukta já precompostas (caso o texto venha assim). */
const CONSONANTS: Record<string, string> = {
  ক: 'k', খ: 'kh', গ: 'g', ঘ: 'gh', ঙ: 'ng',
  চ: 'ch', ছ: 'chh', জ: 'j', ঝ: 'jh', ঞ: 'ny',
  ট: 't', ঠ: 'th', ড: 'd', ঢ: 'dh', ণ: 'n',
  ত: 't', থ: 'th', দ: 'd', ধ: 'dh', ন: 'n',
  প: 'p', ফ: 'ph', ব: 'b', ভ: 'bh', ম: 'm',
  য: 'j', // য sozinho se fundiu com জ na pronúncia moderna (ver cabeçalho)
  র: 'r', ল: 'l',
  শ: 'sh', ষ: 'sh', স: 'sh', হ: 'h',
  // nukta precomposto (caso o texto já venha assim, em vez de base + marca de nukta separada)
  'ড়': 'r', 'ঢ়': 'rh', 'য়': 'y',
};

/** Consoantes com nukta (়), pela base: é assim que o texto deste app grava essas letras. */
const NUKTA_LATIN: Record<string, string> = { ড: 'r', ঢ: 'rh', য: 'y' };

/** Letras que, com nukta, viram a vibrante batida retroflexa — mantêm a vogal inerente no fim. */
const FLAP_BASES = new Set(['ড', 'ঢ']);
const FLAP_PRECOMPOSED = new Set(['ড়', 'ঢ়']);

/** Aproximantes que, presas por um encontro (virama) no fim da palavra, mantêm a vogal inerente
 * em vez de apagá-la — senão a palavra terminaria num encontro de consoantes difícil de "soltar"
 * (শুক্র "shukro", não "shukr"; mesmo espírito do সূর্য/चंद्र do arquivo do devanágari). */
const APPROXIMANTS = 'যরলব';

/** Vogais independentes (começo de palavra ou depois de outra vogal). */
const INDEPENDENT_VOWELS: Record<string, string> = {
  অ: 'o', আ: 'a', ই: 'i', ঈ: 'i', উ: 'u', ঊ: 'u',
  ঋ: 'ri', এ: 'e', ঐ: 'oi', ও: 'o', ঔ: 'ou',
};

/** Mátras: marcas de vogal que substituem o "o" inerente da consoante anterior. */
const MATRAS: Record<string, string> = {
  'া': 'a', 'ি': 'i', 'ী': 'i', 'ু': 'u', 'ূ': 'u',
  'ৃ': 'ri', 'ে': 'e', 'ৈ': 'oi', 'ো': 'o', 'ৌ': 'ou',
};

const DANDA: Record<string, string> = { '।': '.', '॥': '.' };
const DIGITS: Record<string, string> = {
  '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9',
};

/** Todo caractere que faz parte de uma palavra bengali em andamento (para achar o fim dela). */
const BENGALI_CONTINUATION = new Set<string>([
  ...Object.keys(CONSONANTS),
  ...Object.keys(INDEPENDENT_VOWELS),
  ...Object.keys(MATRAS),
  VIRAMA, ANUSVARA, CANDRABINDU, VISARGA, NUKTA, KHANDA_TA,
]);

function isEndOfWord(text: string, i: number): boolean {
  return i >= text.length || !BENGALI_CONTINUATION.has(text[i]);
}

/** টা/টি logo em seguida: os classificadores do bengali ("একটা", "ছেলেটি"), presos sem espaço ao
 * numeral/substantivo anterior. Fonologicamente o classificador é um clítico separado, então a
 * consoante final do que vem antes apaga a vogal como se já estivesse no fim da palavra (একটা =
 * "ekta", não "ekota") — por isso conta como fim de palavra para essa decisão, mesmo a escrita
 * juntando tudo numa palavra só. */
function isClassifierSuffix(text: string, i: number): boolean {
  const c = text[i];
  const vowel = text[i + 1];
  return c === 'ট' && (vowel === 'া' || vowel === 'ি') && isEndOfWord(text, i + 2);
}

/**
 * Um pedaço da saída: a consoante (ou o encontro) e a vogal que ela carrega. `del` marca a vogal "o"
 * inerente que pode cair no meio da palavra (regra de Ohala, decidida no fim da palavra); `word`
 * diz se o pedaço é parte de uma palavra bengali (pontuação e espaço separam as palavras).
 */
interface Tok {
  base: string;
  vowel: string;
  del?: boolean;
  word: boolean;
}

/** Aplica anusvara (sempre "ng")/chandrabindu (nasaliza a vogal anterior, com til)/visarga ("h")
 * em `text[i]`, se houver, devolvendo o próximo índice. */
function consumeTrailingNasal(text: string, i: number, out: Tok[]): number {
  const c = text[i];
  if (c === ANUSVARA) {
    out.push({ base: 'ng', vowel: '', word: true });
    return i + 1;
  }
  if (c === CANDRABINDU) {
    const last = out[out.length - 1];
    if (last) last.vowel += '̃';
    else out.push({ base: '', vowel: '̃', word: true });
    return i + 1;
  }
  if (c === VISARGA) {
    out.push({ base: 'h', vowel: '', word: true });
    return i + 1;
  }
  return i;
}

/**
 * O "o" inerente no MEIO da palavra cai quando a sílaba de antes termina em vogal e a de depois é
 * consoante + vogal (contexto VC_CV, regra de Ohala, a mesma do devanágari), varrendo da direita
 * para a esquerda: কলকাতা ko-lo-ka-ta → kolkata, সোমবার sho-mo-ba-r → shombar. A consoante presa
 * num encontro não entra (ধন্যবাদ continua dhonnobad), nem a primeira sílaba.
 */
function dropMedialVowels(word: Tok[]): void {
  for (let i = word.length - 2; i >= 1; i--) {
    const t = word[i];
    if (!t.del) continue;
    const left = word[i - 1];
    const right = word[i + 1];
    if (left.vowel && right.base && right.vowel) t.vowel = '';
  }
}

function render(out: Tok[]): string {
  let res = '';
  let word: Tok[] = [];
  const flush = () => {
    dropMedialVowels(word);
    res += word.map((t) => t.base + t.vowel).join('');
    word = [];
  };
  for (const t of out) {
    if (t.word) word.push(t);
    else {
      flush();
      res += t.base;
    }
  }
  flush();
  return res;
}

/**
 * Bengali (bangla) em letras latinas, para quem ainda não lê a escrita. Ver o cabeçalho do arquivo
 * para as fontes, as regras seguidas e o que fica de fora.
 */
export function toReadingBn(raw: string): string {
  const text = raw.normalize('NFC');
  const out: Tok[] = [];
  let i = 0;
  let wordHasVowel = false;
  // true logo depois de uma consoante presa por virama: a aproximante (য র ল ব) que fecha um
  // encontro no fim da palavra mantém a vogal inerente (শুক্র "shukro", não "shukr").
  let afterVirama = false;

  while (i < text.length) {
    const c = text[i];

    if (DANDA[c] !== undefined) {
      out.push({ base: DANDA[c], vowel: '', word: false });
      wordHasVowel = false;
      afterVirama = false;
      i++;
      continue;
    }
    if (DIGITS[c] !== undefined) {
      out.push({ base: DIGITS[c], vowel: '', word: false });
      afterVirama = false;
      i++;
      continue;
    }
    if (c === KHANDA_TA) {
      // ৎ nunca carrega vogal nenhuma (é o ত "seco"): não conta como a vogal da palavra.
      out.push({ base: 't', vowel: '', word: true });
      afterVirama = false;
      i++;
      continue;
    }

    if (INDEPENDENT_VOWELS[c] !== undefined) {
      out.push({ base: '', vowel: INDEPENDENT_VOWELS[c], word: true });
      wordHasVowel = true;
      afterVirama = false;
      i++;
      i = consumeTrailingNasal(text, i, out);
      continue;
    }

    if (CONSONANTS[c] !== undefined) {
      let latin: string;
      let isFlap = FLAP_PRECOMPOSED.has(c);
      // encontro escrito numa letra só (nn, kkh, gg, consoante + ya-phala): a vogal dele não cai
      let cluster = afterVirama;

      if (c === 'ন' && text[i + 1] === VIRAMA && text[i + 2] === 'য') {
        // ন্য é um encontro congelado: não é "ny", o ন dobra (ধন্যবাদ = dhonnobad, অন্য = ônno).
        latin = 'nn';
        cluster = true;
        i += 3;
      } else if (c === 'ক' && text[i + 1] === VIRAMA && text[i + 2] === 'ষ') {
        // ক্ষ (sânscrito kṣ) sai "kkh" no bengali, não "ksh" como no hindi (রক্ষা = rokkha).
        latin = 'kkh';
        cluster = true;
        i += 3;
      } else if (c === 'জ' && text[i + 1] === VIRAMA && text[i + 2] === 'ঞ') {
        // জ্ঞ sai "gg" (জ্ঞান = /ggæn/, বিজ্ঞান = biggan), não "gy" como o ज्ञ do hindi.
        latin = 'gg';
        cluster = true;
        i += 3;
      } else {
        latin = CONSONANTS[c];
        i++;
        if (text[i] === NUKTA) {
          latin = NUKTA_LATIN[c] ?? latin;
          isFlap = isFlap || FLAP_BASES.has(c);
          i++;
        }
        if (text[i] === VIRAMA && text[i + 1] === 'য' && c !== 'ন') {
          // ্য (ya-phala) fora do encontro ন্য: funciona como semivogal "y" presa à consoante
          // anterior (হ্যাঁ = hyan), não como gem aqui.
          latin = latin + 'y';
          cluster = true;
          i += 2;
        }
      }

      if (text[i] === VIRAMA) {
        // encontro consonantal: esta consoante fica sem vogal, presa à próxima
        out.push({ base: latin, vowel: '', word: true });
        afterVirama = true;
        i++;
        continue;
      }

      const matraVowel = MATRAS[text[i]];
      if (matraVowel !== undefined) {
        out.push({ base: latin, vowel: matraVowel, word: true });
        wordHasVowel = true;
        afterVirama = false;
        i++;
        i = consumeTrailingNasal(text, i, out);
        continue;
      }

      if (text[i] === ANUSVARA || text[i] === CANDRABINDU || text[i] === VISARGA) {
        // vogal "o" inerente, nasalizada ou com visarga em seguida
        out.push({ base: latin, vowel: 'o', word: true });
        wordHasVowel = true;
        afterVirama = false;
        i = consumeTrailingNasal(text, i, out);
        continue;
      }

      // vogal "o" inerente, sem marca nenhuma: apaga no fim da palavra (ঘর = ghor, não ghoro),
      // a não ser que isso deixasse uma aproximante sozinha fechando um encontro (শুক্র), que esta
      // fosse a letra ড়/ঢ় (a vibrante batida sempre mantém a vogal final: বড় = boro) ou que esta
      // fosse a única vogal da palavra inteira.
      const strandedApproximant = afterVirama && APPROXIMANTS.includes(c);
      const atWordEnd = isEndOfWord(text, i) || isClassifierSuffix(text, i);
      if (wordHasVowel && atWordEnd && !strandedApproximant && !isFlap) {
        out.push({ base: latin, vowel: '', word: true });
      } else {
        // no meio da palavra, este "o" ainda pode cair pela regra de Ohala (ver dropMedialVowels)
        out.push({ base: latin, vowel: 'o', del: wordHasVowel && !atWordEnd && !cluster && !isFlap, word: true });
        wordHasVowel = true;
      }
      afterVirama = false;
      continue;
    }

    // pontuação, espaço, dígitos latinos, texto em outra escrita: passa direto
    out.push({ base: c, vowel: '', word: false });
    wordHasVowel = false;
    afterVirama = false;
    i++;
  }

  return render(out).normalize('NFC');
}
