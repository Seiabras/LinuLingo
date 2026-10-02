/**
 * Leitura da escrita télugo em letras latinas para quem ainda não lê o alfabeto télugo (తెలుగు,
 * usado em Andhra Pradesh e Telangana).
 *
 * Por que não o IAST/ISO 15919 puro: esses sistemas acadêmicos marcam as retroflexas com ponto
 * embaixo (ṭ ḍ ṇ ṣ ḷ) e usam ś/ṣ para as duas sibilantes palatais/retroflexas — precisos e
 * reversíveis, mas os pontos não ajudam quem fala português a pronunciar (a mesma lógica já
 * documentada em reading-devanagari.ts para o hindi/marata). Esta função troca esses diacríticos
 * por grafias que já soam certo em português — "ch" para చ (não "c", que em português lê /k/ ou
 * /s/), "chh" para ఛ, "sh" para శ/ష, e descarta os pontos de retroflexa (ṭ ḍ ṇ ṣ → t d n sh) por
 * não terem valor pronunciável para quem está começando — seguindo o mesmo critério do arquivo de
 * devanágari. As duas letras retroflexas/vibrantes exclusivas do télugo que não têm par no
 * devanágari do hindi, ళ (lateral retroflexa) e ఱ (vibrante, "bandi ra"), viram "L" e "R"
 * maiúsculos — a mesma solução usada lá para o ळ do marata — para não colidirem com ల/ర na leitura
 * (నీళ్ళు "nīLLu" × నీరు "nīru" não ficam iguais).
 *
 * Os mácrons de vogal longa (ā ī ū) ficam, pela mesma razão do arquivo de devanágari: distinguem
 * pares que importam e já aparecem nos parênteses de pronúncia deste próprio vocabulário télugo
 * (కావాలి kāvāli, నీళ్ళు nīḷḷu...). DIFERENÇA IMPORTANTE em relação ao hindi: o télugo também
 * marca longa/curta em "e" e "o" (ఎ e curto × ఏ ē longo, ఒ o curto × ఓ ō longo) como uma distinção
 * de verdade, que muda o sentido da palavra — ao contrário do hindi, onde ऎ/ए e ऒ/ओ caem na mesma
 * leitura "e"/"o" porque a língua não opõe esses pares. Aqui "e"/"ē" e "o"/"ō" ficam separados
 * (దయచేసి "dayacēsi", não "dayacesi" — e o próprio vocabulário deste app já grafa a pronúncia assim
 * com os mácrons, então não é novidade para quem usa o app).
 *
 * O télugo é dravídico, NÃO indo-ariano como o hindi/marata, e isso muda duas regras de verdade
 * (não é só trocar o alfabeto):
 * 1. SEM apagamento do "a" final. O hindi apaga a vogal inerente no fim da palavra na fala (घर se
 *    lê "ghar", não "ghara") — um fenômeno do indo-ariano central chamado "schwa syncope" que o
 *    télugo, como as outras línguas dravídicas (tâmil, canarês, malaiala), não tem: a vogal
 *    inerente escrita se pronuncia sempre, em qualquer posição. O próprio vocabulário deste app
 *    confirma isso nos parênteses: తల é "tala" (não "tal"), పెద్ద é "pedda" (não "pedd"), అక్క é
 *    "akka". Por isso esta função não precisa (e não tem) a lógica de "apaga o 'a' no fim da
 *    palavra, exceto quando..." que o arquivo de devanágari precisa ter.
 * 2. Anusvara (ం) no fim de palavra sai como "m" puro, não como til nasalizando a vogal anterior
 *    (diferente do hindi, onde हाँ sai "hā̃"). Tradicionalmente a gramática télugo descreve esse
 *    sunna/bindu como a redução de uma sílaba nasal plena (నమస్కారము → నమస్కారం, "namaskāramu" →
 *    "namaskāram"), e é assim que se pronuncia e se vê transliterado popularmente: నమస్కారం
 *    "namaskāram", కుటుంబం "kutumbam", ఆకాశం "ākāsham" — todas com "m" final de verdade, que é
 *    exatamente a pronúncia já escrita nos parênteses deste vocabulário (kuṭumbaṁ, ākāśaṁ etc. — o
 *    "ṁ" do ISO 15919 nessas palavras É o "m" final télugo). Antes de consoante, o anusvara vira a
 *    nasal homorgânica (como no hindi): "m" antes de labial, "n" nas outras famílias.
 * 3. జ్ఞ NÃO vira "gy" aqui. No arquivo de devanágari, ज्ञ (hindi/marata) é um encontro congelado
 *    que se lê "gy" — mas essa mudança de som é uma peculiaridade do hindi/línguas do norte da
 *    Índia, não do sânscrito em si nem do télugo. Não há razão para importar essa irregularidade:
 *    esta função lê జ్ఞ pela regra regular de encontro consonantal (జ్ + ఞ → "j" + "nya" =
 *    "jnya"), que é também a leitura mais perto do sânscrito original e do que se ouve no télugo.
 *
 * Fontes: Wikipedia "Telugu script" e "Telugu language" (inventário de consoantes/vogais, IPA,
 * contraste de comprimento vocálico incluindo e/ē e o/ō, aspiração quase só em empréstimos do
 * sânscrito, ళ/ఱ como letras exclusivas do télugo); Wikipedia "ISO 15919" e "IAST" (esquema
 * acadêmico de referência); Omniglot "Telugu alphabet"; os parênteses de pronúncia já presentes em
 * src/data/te/vocabulario.ts, usados aqui como conferência cruzada.
 *
 * Como o devanágari, o télugo é um abugida descendente do brahmi (por um caminho diferente:
 * brahmi → escrita kadamba → télugo-canarês → télugo, enquanto o devanágari vem do brahmi direto):
 * cada consoante já carrega um "a" inerente (క = ka), uma mátra troca essa vogal (కి = ki, కొ =
 * ko), o virama/pollu (్) apaga a vogal para formar encontros consonantais (క్క = kka), e o
 * anusvara (ం)/visarga (ః) nasalizam/aspiram. Tratado aqui letra por letra como uma máquina de
 * estados, não como substituição 1:1 — ver toReadingTe.
 *
 * O que fica de fora: nuances de fala corrida (p.ex. contrações coloquiais de ఉంది/అవుతుంది) que
 * dependem de léxico e registro, não só da grafia — o mesmo tipo de problema aberto que o arquivo
 * de devanágari já descarta para o hindi falado. Esta função lê a grafia com fidelidade e aplica
 * as regras regulares do télugo formal/de dicionário.
 */

const VIRAMA = '్';
const ANUSVARA = 'ం';
const CANDRABINDU = 'ఁ'; // raríssimo no télugo nativo, mas existe no bloco Unicode
const VISARGA = 'ః';

/** Consoantes télugo. ళ e ఱ são exclusivas do télugo (sem par no devanágari do hindi/marata). */
const CONSONANTS: Record<string, string> = {
  క: 'k', ఖ: 'kh', గ: 'g', ఘ: 'gh', ఙ: 'n',
  చ: 'ch', ఛ: 'chh', జ: 'j', ఝ: 'jh', ఞ: 'ny',
  ట: 't', ఠ: 'th', డ: 'd', ఢ: 'dh', ణ: 'n',
  త: 't', థ: 'th', ద: 'd', ధ: 'dh', న: 'n',
  ప: 'p', ఫ: 'ph', బ: 'b', భ: 'bh', మ: 'm',
  య: 'y', ర: 'r', ల: 'l', వ: 'v',
  శ: 'sh', ష: 'sh', స: 's', హ: 'h',
  ళ: 'L', // lateral retroflexa, exclusiva do télugo (నీళ్ళు × నీరు não podem colidir)
  ఱ: 'R', // vibrante "bandi ra", exclusiva do télugo (hoje quase sempre lida como ర dobrado)
  ఴ: 'zh', // lllla, letra histórica/rarissima (aparentada do ழ tâmil e ഴ malaiala); não usada no télugo moderno
};

/** Vogais independentes (começo de palavra ou depois de outra vogal). */
const INDEPENDENT_VOWELS: Record<string, string> = {
  అ: 'a', ఆ: 'ā', ఇ: 'i', ఈ: 'ī', ఉ: 'u', ఊ: 'ū',
  ఋ: 'ri', ౠ: 'rī', ఌ: 'li', ౡ: 'lī', // raríssimas/sânscritas; não aparecem no vocabulário atual
  ఎ: 'e', ఏ: 'ē', ఐ: 'ai', ఒ: 'o', ఓ: 'ō', ఔ: 'au',
};

/** Mátras: marcas de vogal que substituem o "a" inerente da consoante anterior. */
const MATRAS: Record<string, string> = {
  'ా': 'ā', 'ి': 'i', 'ీ': 'ī', 'ు': 'u', 'ూ': 'ū',
  'ృ': 'ri', 'ౄ': 'rī',
  'ె': 'e', 'ే': 'ē', 'ై': 'ai',
  'ొ': 'o', 'ో': 'ō', 'ౌ': 'au',
};

const DIGITS: Record<string, string> = {
  '౦': '0', '౧': '1', '౨': '2', '౩': '3', '౪': '4', '౫': '5', '౬': '6', '౭': '7', '౮': '8', '౯': '9',
};

/**
 * Aplica anusvara/candrabindu/visarga em `text[i]`, se houver, devolvendo o próximo índice.
 * Regra télugo (diferente do devanágari): sem consoante depois, o anusvara vira "m" puro, nunca
 * um til nasalizando a vogal anterior — ver o cabeçalho do arquivo.
 */
function consumeTrailingNasal(text: string, i: number, out: string[]): number {
  const c = text[i];
  if (c === ANUSVARA || c === CANDRABINDU) {
    const next = text[i + 1];
    if (next && CONSONANTS[next]) {
      // nasal homorgânica: m antes de consoante labial, n nas outras famílias
      out.push('పఫబభమ'.includes(next) ? 'm' : 'n');
    } else {
      out.push('m');
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
 * Télugo em letras latinas, para quem ainda não lê a escrita. Ver o cabeçalho do arquivo para as
 * fontes, as regras seguidas (incluindo as duas em que o télugo se comporta diferente do
 * hindi/marata por ser dravídico) e o que fica de fora.
 */
export function toReadingTe(raw: string): string {
  const text = raw.normalize('NFC');
  const out: string[] = [];
  let i = 0;

  while (i < text.length) {
    const c = text[i];

    if (DIGITS[c] !== undefined) {
      out.push(DIGITS[c]);
      i++;
      continue;
    }

    if (INDEPENDENT_VOWELS[c] !== undefined) {
      out.push(INDEPENDENT_VOWELS[c]);
      i++;
      i = consumeTrailingNasal(text, i, out);
      continue;
    }

    if (CONSONANTS[c] !== undefined) {
      const latin = CONSONANTS[c];
      i++;

      if (text[i] === VIRAMA) {
        // encontro consonantal: esta consoante fica sem vogal, presa à próxima (ex.: అక్క = a-k-ka)
        out.push(latin);
        i++;
        continue;
      }

      const matraVowel = MATRAS[text[i]];
      if (matraVowel !== undefined) {
        out.push(latin + matraVowel);
        i++;
        i = consumeTrailingNasal(text, i, out);
        continue;
      }

      if (text[i] === ANUSVARA || text[i] === CANDRABINDU || text[i] === VISARGA) {
        // vogal "a" inerente, nasalizada ou com visarga em seguida
        out.push(latin + 'a');
        i = consumeTrailingNasal(text, i, out);
        continue;
      }

      // vogal "a" inerente, sem marca nenhuma: ao contrário do hindi/marata, o télugo NUNCA apaga
      // essa vogal (não há schwa syncope dravídica) — ver o cabeçalho do arquivo.
      out.push(latin + 'a');
      continue;
    }

    // pontuação, espaço, dígitos latinos, texto em outra escrita: passa direto
    out.push(c);
    i++;
  }

  return out.join('').normalize('NFC');
}
