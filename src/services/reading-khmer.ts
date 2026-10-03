/**
 * Leitura do khmer (cambojano) em letras latinas para quem ainda não lê a escrita.
 *
 * Por que não o ALA-LC: o sistema da Biblioteca do Congresso dos EUA (desenvolvido por Franklin
 * Huffman e Edwin Bonsack) transcreve letra por letra os valores índicos originais do khmer — ótimo
 * para reconstruir, numa ficha de catálogo, de que raiz páli/sânscrita uma palavra erudita vem, mas
 * sistematicamente diferente da pronúncia moderna (preserva por escrito uma distinção entre letras
 * que hoje soam quase iguais). Não serve a quem quer saber como a palavra SOA.
 *
 * Por que (uma versão simplificada d)o UNGEGN: o sistema das Nações Unidas para nomes geográficos
 * (baseado no BGN/PCGN) é fonético e, principal diferença para o ALA-LC, sensível ao registro
 * consonantal — exatamente o que um guia de leitura para iniciante precisa. Esta função segue o
 * espírito do UNGEGN mas descarta os diacríticos menos essenciais (as marcas raras de vogal curta e
 * as poucas consoantes obsoletas, ឝ e ឞ, que não aparecem no khmer moderno) e escolhe dígrafos que
 * soam certos em português, como o resto deste app (ver reading-devanagari.ts, o outro abugida já
 * tratado aqui, para o mesmo espírito de escolha).
 *
 * O fato mais importante do khmer, e o mais fácil de implementar errado: as consoantes se dividem em
 * duas "séries" (registros) — herança de uma distinção de sonoridade do khmer antigo que sumiu da
 * pronúncia das CONSOANTES mas sobrevive na VOGAL. A série A (antigas surdas: ក ខ ច ឆ ដ ឋ ណ ត ថ ប ផ ស
 * ហ អ) e a série O (antigas sonoras: គ ឃ ង ជ ឈ ញ ឌ ឍ ទ ធ ន ព ភ ម យ រ ល វ) soam quase iguais quando a
 * consoante está sozinha (ក e គ hoje são praticamente o mesmo "k"), mas o MESMO sinal de vogal lido
 * depois de uma consoante da série A soa diferente do que lido depois de uma da série O. Exemplo real
 * deste pacote: ី depois de ប (série A) dá "ei" — បី (três) = "bei" — mas depois de ព (série O) dá "ī"
 * longo — ពីរ (dois) = "pī". Tratar essas vogais como um valor fixo (o erro mais comum em
 * implementações ingênuas de romanização do khmer) faz o aprendiz ler errado sistematicamente metade
 * das palavras — por isso esta função decide a série da sílaba ANTES de escolher o valor de cada
 * vogal, nunca o contrário.
 *
 * Consoantes "dominantes" vs. "fracas" num encontro: dentro de um encontro consonantal (consoante
 * base + consoante subscrita, escrita com o coeng ្ embaixo), nem sempre é a consoante base que decide
 * a série da vogal seguinte. Oclusivas e fricativas (todas as consoantes exceto as nasais ង ញ ណ ន ម e
 * as aproximantes យ រ ល វ) são "dominantes"; as nasais e aproximantes são "fracas". Numa base fraca +
 * subscrita dominante, é A SUBSCRITA que decide a série: ម្តាយ (mãe) tem base ម (série O, mas fraca —
 * é nasal) e subscrita ត (série A, dominante — é oclusiva), e o resultado lê-se com a vogal ា da série
 * A ("mdaay", não "mdeay"). Numa base dominante + subscrita fraca, prevalece a base: ក្រុង (cidade)
 * tem base ក (série A, dominante) e subscrita រ (fraca), e lê "krong" com a vogal ុ da série A ("o"),
 * não "krung" (que seria o valor da série O). Quando as duas são dominantes, prevalece a subscrita.
 * (Regra de Huffman, "Cambodian System of Writing and Beginning Reader", também descrita em Wikipedia
 * "Khmer script".) Esta função resolve isso percorrendo a base e cada subscrita da esquerda para a
 * direita e atualizando a série vigente toda vez que encontra uma consoante dominante — a dominante
 * mais à direita sempre vence, o que cobre os três casos acima com uma regra só.
 *
 * Vogal inerente: ao contrário do devanágari (que apaga sistematicamente o "a" final não escrito, ver
 * reading-devanagari.ts), o khmer NÃO tem essa regra de apagamento — toda consoante sem sinal de vogal
 * e sem ser ela mesma uma subscrita carrega sua vogal inerente (curta "a" na série A, curta "o" na
 * série O) quando é o núcleo da sua sílaba; quando é a segunda de duas consoantes "soltas" seguidas,
 * vira só a coda muda da sílaba anterior, sem vogal própria (ប្រទេស "prateh": ប្រ ganha o "a" por ser
 * o início da palavra; ស, no fim, não ganha vogal nenhuma). O "r" no fim de palavra (não no meio)
 * quase sempre emudece na fala corrente do khmer moderno — ពីរ (dois) é "pī", não "pīr"; ដែរ (também)
 * é "dae", não "daer" — convenção seguida aqui, como nos próprios parênteses de pronúncia do
 * vocabulário deste pacote.
 *
 * Diacríticos tratados: coeng ្ (marca a consoante seguinte como subscrita, sem vogal própria — a
 * subscrita អ, em particular, não tem som nenhum, só participa da decisão de série do encontro, como
 * em ប្អូន "poun"); môsĭkâtôan ៉ e treisâp ៊ (trocam manualmente a série da sílaba — ញ៉ាំ "nham", não
 * "nhoam", porque ៉ força a série A apesar de ញ ser da série O); nĭkôhĕt ំ (nasaliza e abrevia a vogal
 * — ុំ dá "om"/"um", ាំ dá "am"/"oam", confirmado em ខ្ញុំ "khnhom" e ប្រាំ "pram"); reahmŭk ះ
 * (acrescenta um "h" final — sozinho dá "ah"/"eah", confirmado em ផ្ទះ "phteah": a base ផ é da série A,
 * mas a subscrita ទ é dominante e muda a série para O, e ះ na série O dá "eah"); bântôc ់ (abrevia a
 * vogal — aqui encurta ā/ī/ū/ē/ō para a forma breve correspondente, visível em ណាស់, que esta função
 * lê "nah" — a vogal já curta mais o "h" final de ស, ver abaixo) e tôandâkhéat ៍ (apaga de vez a
 * consoante marcada e sua vogal — usado em empréstimos eruditos do sânscrito/páli, como nos dias da
 * semana deste pacote).
 *
 * Consoante-coda (uma consoante solta no fim de sílaba, sem vogal própria): as oclusivas implosivas
 * ប/ដ não existem em posição de coda — viram a parceira surda simples (ដប់ "dap", não "dab់"); um "r"
 * no fim da PALAVRA (não no meio: អរគុណ "arkun" mantém o r medial) quase sempre emudece na fala khmer
 * corrente; e um "s" no fim da palavra se enfraquece para um "h" soprado (ប្រុស "proh", não "pros" —
 * confirmado em três palavras diferentes deste vocabulário: ប្រុស, ប្រទេស, e o próprio ណាស់ acima).
 * Uma subscrita idêntica à consoante base (ច្ច, ត្ត...) é reforço gráfico de fechamento de sílaba, não
 * um segundo som: ចិត្ត lê um "t" só ("chet"), não dois. E um encontro com subscrita DIFERENTE, no fim
 * absoluto da palavra e colado a uma sílaba anterior (sem sinal de vogal nenhum depois dele), também
 * não pronuncia a subscrita — essa é a grafia etimológica de um final de empréstimo páli/sânscrito, e
 * o khmer não termina palavra em encontro consonantal pronunciado: ច័ន្ទ ("segunda-feira", de
 * "Candra") lê "chan", não "chanto" — a subscrita ទ nunca soa.
 *
 * Fontes: Wikipedia, "Khmer script" e "Romanization of Khmer" (tabelas de consoantes e séries, sinais
 * de vogal dependentes e independentes, e diacríticos); Huffman, Franklin E., "Cambodian System of
 * Writing and Beginning Reader" (a análise de consoantes "dominantes"/"fracas" nos encontros
 * consonantais); UNGEGN, "Romanization System for Khmer" (base do sistema fonético simplificado
 * aqui). Cada regra acima foi conferida à mão contra as cerca de 80 palavras e a frase de exemplo do
 * vocabulário deste pacote (vocabulario.ts) antes de entrar nesta função.
 *
 * Palavras de leitura irregular que nenhuma regra acima resolve, por serem mesmo assim na língua
 * falada — não um efeito de uma regra regular que falte implementar — entram como exceção de palavra
 * inteira (ver WORD_EXCEPTIONS mais abaixo, no mesmo espírito do ज्ञ "gy" de reading-devanagari.ts).
 *
 * O que ainda fica de fora:
 * - palavras eruditas do páli/sânscrito com mais letras silenciosas do que as regras acima explicam
 *   sozinhas (o mesmo tipo de limite que reading-devanagari.ts admite para o apagamento de schwa no
 *   meio de palavra no hindi): ព្រហស្បតិ៍ ("quinta-feira") tem uma pronúncia consagrada — "prohoah" —
 *   mais curta do que a leitura regular desta função produz para esse encontro, algo como "prohsba";
 * - palavras diferentes escritas coladas, sem espaço nenhum entre elas (comum neste vocabulário em
 *   frases com data: "ថ្ងៃដប់", dia dez, ou "ទឹកនេះល្អ", esta água é boa): como o khmer não marca toda
 *   fronteira de palavra com espaço, esta função não tem como saber que uma sílaba solta no início da
 *   SEGUNDA palavra não é a coda da ÚLTIMA sílaba da primeira — um problema de segmentação de palavras
 *   que precisaria de um dicionário, não só da grafia (o mesmo tipo de problema, bem documentado, da
 *   segmentação do tailandês e do chinês). Isso não afeta a leitura de cada PALAVRA do vocabulário
 *   isoladamente (o uso principal deste campo, ver reading em types.ts), só a leitura de frases de
 *   exemplo com esse padrão específico de justaposição sem espaço.
 */

const COENG = '្';
const NIKAHIT = 'ំ';
const REAHMUK = 'ះ';
const YUUKALEAPINTU = 'ៈ';
const MUUSIKATOAN = '៉';
const TRIISAP = '៊';
const BANTOC = '់';
const ROBAT = '៌';
const TOANDAKHIAT = '៍';
const SAMYOK_SANNYA = '័';

type Series = 'A' | 'O';
type VowelValue = string | { a: string; o: string };

interface ConsonantInfo {
  latin: string;
  series: Series;
  /** oclusivas/fricativas (true) decidem a série do encontro; nasais e aproximantes (false) cedem. */
  dominant: boolean;
}

/** As 32 consoantes modernas do khmer (fora as duas obsoletas ឝ/ឞ, ausentes do uso atual). */
const CONSONANTS: Record<string, ConsonantInfo> = {
  // série A (antigas surdas)
  'ក': { latin: 'k', series: 'A', dominant: true },
  'ខ': { latin: 'kh', series: 'A', dominant: true },
  'ច': { latin: 'ch', series: 'A', dominant: true },
  'ឆ': { latin: 'chh', series: 'A', dominant: true },
  'ដ': { latin: 'd', series: 'A', dominant: true },
  'ឋ': { latin: 'th', series: 'A', dominant: true },
  'ណ': { latin: 'n', series: 'A', dominant: false },
  'ត': { latin: 't', series: 'A', dominant: true },
  'ថ': { latin: 'th', series: 'A', dominant: true },
  'ប': { latin: 'b', series: 'A', dominant: true },
  'ផ': { latin: 'ph', series: 'A', dominant: true },
  'ស': { latin: 's', series: 'A', dominant: true },
  'ហ': { latin: 'h', series: 'A', dominant: true },
  'អ': { latin: 'a', series: 'A', dominant: true },
  // série O (antigas sonoras)
  'គ': { latin: 'k', series: 'O', dominant: true },
  'ឃ': { latin: 'kh', series: 'O', dominant: true },
  'ង': { latin: 'ng', series: 'O', dominant: false },
  'ជ': { latin: 'ch', series: 'O', dominant: true },
  'ឈ': { latin: 'chh', series: 'O', dominant: true },
  'ញ': { latin: 'nh', series: 'O', dominant: false },
  'ឌ': { latin: 'd', series: 'O', dominant: true },
  'ឍ': { latin: 'th', series: 'O', dominant: true },
  'ទ': { latin: 't', series: 'O', dominant: true },
  'ធ': { latin: 'th', series: 'O', dominant: true },
  'ន': { latin: 'n', series: 'O', dominant: false },
  'ព': { latin: 'p', series: 'O', dominant: true },
  'ភ': { latin: 'ph', series: 'O', dominant: true },
  'ម': { latin: 'm', series: 'O', dominant: false },
  'យ': { latin: 'y', series: 'O', dominant: false },
  'រ': { latin: 'r', series: 'O', dominant: false },
  'ល': { latin: 'l', series: 'O', dominant: false },
  'វ': { latin: 'v', series: 'O', dominant: false },
};

/** Vogais independentes: já trazem sua própria vogal, não dependem da série de nenhuma consoante. */
const INDEPENDENT_VOWELS: Record<string, string> = {
  'ឥ': 'e', 'ឦ': 'ei', 'ឧ': 'o', 'ឩ': 'ou', 'ឪ': 'ov',
  'ឫ': 'rue', 'ឬ': 'rue', 'ឭ': 'lue', 'ឮ': 'lue',
  'ឯ': 'ae', 'ឰ': 'ai', 'ឱ': 'ao', 'ឲ': 'ao', 'ឳ': 'au',
};

/**
 * Sinais de vogal dependentes (ស្រៈផ្សំ): a maioria tem duas leituras, uma para a série A e outra
 * para a série O (ver cabeçalho do arquivo); os que têm uma string só já soam igual nas duas séries.
 */
const VOWELS: Record<string, VowelValue> = {
  'ា': { a: 'ā', o: 'ie' },
  'ិ': { a: 'e', o: 'i' },
  'ី': { a: 'ei', o: 'ī' },
  'ឹ': { a: 'ă', o: 'ĭ' },
  'ឺ': { a: 'â', o: 'î' },
  'ុ': { a: 'o', o: 'u' },
  'ូ': { a: 'ō', o: 'ū' },
  'ួ': 'uo',
  'ើ': { a: 'aeu', o: 'eu' },
  'ឿ': 'uea',
  'ៀ': 'ie',
  'េ': 'e',
  'ែ': { a: 'ae', o: 'ê' },
  'ៃ': { a: 'ai', o: 'ei' },
  'ោ': { a: 'ao', o: 'o' },
  'ៅ': { a: 'au', o: 'eu' },
};

/** Combinações de sinal de vogal + nĭkôhĕt (nasaliza e abrevia): consultadas antes do nĭkôhĕt isolado. */
const NIKAHIT_COMBOS: Record<string, { a: string; o: string }> = {
  'ុ': { a: 'om', o: 'um' },
  'ា': { a: 'am', o: 'oam' },
};

/** Combinações de sinal de vogal + reahmŭk (acrescenta h final): consultadas antes do reahmŭk isolado. */
const REAHMUK_COMBOS: Record<string, { a: string; o: string }> = {
  'ិ': { a: 'eh', o: 'ih' },
  'ុ': { a: 'oh', o: 'uh' },
  'េ': { a: 'eh', o: 'eh' },
  'ោ': { a: 'oah', o: 'uoh' },
};

const BARE_NIKAHIT = { a: 'am', o: 'om' };
const BARE_REAHMUK = { a: 'ah', o: 'eah' };
const BARE_YUUKALEAPINTU = { a: 'a', o: 'o' };

const PUNCT: Record<string, string> = {
  '។': '.', '៕': '.', '៖': ':', '៘': ',', '៙': '', '៚': '', 'ៗ': '',
};
const DIGITS: Record<string, string> = {
  '០': '0', '១': '1', '២': '2', '៣': '3', '៤': '4', '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9',
};

const SHORT_VOWEL: Record<string, string> = { 'ā': 'a', 'ī': 'i', 'ū': 'u', 'ē': 'e', 'ō': 'o' };

/**
 * Encurta a última vogal longa marcada com mácron dentro de `s` (usado pelo bântôc់, que na escrita
 * fica sobre a consoante-coda, mas encurta a vogal da sílaba — já escrita antes dela em `out`).
 */
function shortenTrailing(s: string): string {
  for (let k = s.length - 1; k >= 0; k--) {
    const short = SHORT_VOWEL[s[k]];
    if (short !== undefined) return s.slice(0, k) + short + s.slice(k + 1);
  }
  return s;
}

/** Todo caractere que faz parte de uma palavra khmer em andamento (para achar o fim dela). */
const KHMER_CONTINUATION = new Set<string>([
  ...Object.keys(CONSONANTS),
  ...Object.keys(INDEPENDENT_VOWELS),
  ...Object.keys(VOWELS),
  COENG, NIKAHIT, REAHMUK, YUUKALEAPINTU, MUUSIKATOAN, TRIISAP, BANTOC, ROBAT, TOANDAKHIAT,
  SAMYOK_SANNYA,
]);

function isEndOfWord(text: string, i: number): boolean {
  return i >= text.length || !KHMER_CONTINUATION.has(text[i]);
}

/**
 * Palavras de leitura irregular conhecida, que as regras regulares acima não acertam porque a
 * irregularidade está no léxico, não na grafia (o mesmo tipo de exceção que reading-devanagari.ts
 * reserva para ज्ञ "gy"): ម្តាយ (mãe), onde a subscrita ត soa "d" — não o "t" regular — por
 * assimilação à nasal ម que a precede; អ្នក (você/pessoa), onde todo o អ inicial emudece por uma
 * mudança sonora antiga (a leitura regular desta função seria "anak"; a forma consagrada, repetida em
 * toda fonte sobre o khmer, é "neak"); e អង្គារ (terça-feira), um caso diferente dos outros dois: aqui
 * a irregularidade não é de pronúncia, é de ANÁLISE SILÁBICA — a subscrita ្គ está grudada em ង, mas
 * foneticamente pertence à sílaba SEGUINTE (fecha "ang" e abre "kie"), não à mesma sílaba de ង como
 * esta função assume por padrão (ver "encontro = sempre início de sílaba nova" no laço principal);
 * sem a exceção, esta função devoraria o អ inicial inteiro como coda muda. Todas constam do
 * vocabulário deste pacote.
 */
const WORD_EXCEPTIONS: Record<string, string> = {
  'ម្តាយ': 'mdāy',
  'អ្នក': 'neak',
  'អង្គារ': 'angkie',
};

/**
 * Khmer (cambojano) em letras latinas, para quem ainda não lê a escrita. Ver o cabeçalho do arquivo
 * para as fontes, as regras seguidas (sobretudo a série consonantal, o fato central do khmer) e o
 * que fica de fora.
 */
export function toReadingKm(raw: string): string {
  const text = raw.normalize('NFC');
  const out: string[] = [];
  let i = 0;
  // true depois de qualquer sílaba completa (com vogal própria, de sinal ou inerente) que ainda não
  // "gastou" sua coda: a próxima consoante SOLTA (sem sinal de vogal, sem subscrita própria) vira a
  // coda muda dessa sílaba em vez de um núcleo novo. Vira false de novo assim que essa coda é
  // consumida, o que permite alternar núcleo/coda em sequências de 3+ consoantes soltas seguidas
  // (អរគុណ "a-r-ku-n": អ núcleo, រ coda, គុ núcleo de novo por ter sinal de vogal, ណ coda).
  let canTakeCoda = false;

  while (i < text.length) {
    const c = text[i];

    let matchedException = false;
    for (const word of Object.keys(WORD_EXCEPTIONS)) {
      if (word[0] === c && text.startsWith(word, i) && isEndOfWord(text, i + word.length)) {
        out.push(WORD_EXCEPTIONS[word]);
        canTakeCoda = false;
        i += word.length;
        matchedException = true;
        break;
      }
    }
    if (matchedException) continue;

    if (PUNCT[c] !== undefined) {
      out.push(PUNCT[c]);
      canTakeCoda = false;
      i++;
      continue;
    }
    if (DIGITS[c] !== undefined) {
      out.push(DIGITS[c]);
      canTakeCoda = false;
      i++;
      continue;
    }
    if (INDEPENDENT_VOWELS[c] !== undefined) {
      out.push(INDEPENDENT_VOWELS[c]);
      canTakeCoda = true;
      i++;
      continue;
    }

    if (CONSONANTS[c] !== undefined) {
      const base = CONSONANTS[c];
      let governingSeries: Series = base.series;
      const hasCoengRightAfterBase = text[i + 1] === COENG;

      // um encontro com subscrita (mesmo uma អ muda) é sempre o INÍCIO de uma sílaba nova no khmer —
      // o coeng escreve encontros de ONSET (pr, kr, tr...), nunca de coda — então nunca pode ser lido
      // como a coda muda da sílaba anterior, mesmo que `canTakeCoda` esteja ligado.
      let hadSubscript = false;
      const subSounds: string[] = [];
      let j = i + 1;
      while (text[j] === COENG) {
        const sub = text[j + 1];
        const subInfo = CONSONANTS[sub];
        if (!subInfo) break;
        // uma subscrita igual à base (ត្ត, ច្ច...) é só reforço gráfico de fechamento de sílaba — não
        // conta como um encontro de verdade para a regra "encontro = sempre início de sílaba" abaixo.
        if (sub !== c) hadSubscript = true;
        // a consoante dominante mais à direita do encontro decide a série da vogal seguinte.
        if (subInfo.dominant) governingSeries = subInfo.series;
        // អ subscrita não tem som: só participa da decisão de série (ប្អូន "poun"). Uma subscrita
        // igual à consoante base (ត្ត, ច្ច...) é reforço gráfico de fechamento de sílaba, não um
        // segundo som: ចិត្ត lê um "t" só ("chet"), não dois.
        if (sub !== 'អ' && sub !== c) subSounds.push(subInfo.latin);
        j += 2;
      }
      i = j;

      // exceção à regra "encontro = sempre início de sílaba" acima: um encontro no fim ABSOLUTO da
      // palavra (sem sinal de vogal, sem mais nada depois), colado a uma sílaba anterior que ainda
      // pode levar coda, é a grafia etimológica de um páli/sânscrito — o khmer não termina palavra em
      // encontro consonantal pronunciado, então só a base soa, como coda simples, e a subscrita fica
      // muda (ច័ន្ទ "chan", não "chanto": a subscrita ទ nunca soa).
      const isSilentFinalSubscript = hadSubscript && canTakeCoda && isEndOfWord(text, i);

      const sounds: string[] = [];
      if (c === 'អ' && !hadSubscript) {
        // អ sozinha (sem subscrita de verdade) não soma som próprio algum: ou ela é a própria vogal
        // inerente ("a"/"o"), ou a mátra que vier a seguir já é a vogal inteira sozinha — អា lê só
        // "ā" (longo), não "a"+"ā" empilhados. Com subscrita (អ្វី), ela volta a valer como onset
        // (ver abaixo: "av"+"ei" = "avei").
      } else {
        // ប implosivo vira "p" simples quando puxa uma subscrita (encontro consonantal) — ប្រាំ
        // "pram", não "bram"; sozinho (បាទ "baat") continua "b".
        sounds.push(c === 'ប' && hasCoengRightAfterBase ? 'p' : base.latin);
      }
      if (!isSilentFinalSubscript) sounds.push(...subSounds);

      // môsĭkâtôan/treisâp: trocam manualmente a série, sobrepondo a decisão acima.
      if (text[i] === MUUSIKATOAN) {
        governingSeries = 'A';
        i++;
      } else if (text[i] === TRIISAP) {
        governingSeries = 'O';
        i++;
      }

      let vowelOut: string;
      // se esta consoante carrega um núcleo vocálico próprio (quase sempre sim — só é falso quando
      // ela é a 2ª de duas consoantes soltas em sequência, virando coda muda da sílaba anterior).
      let isNucleus = true;
      const vSign = text[i];
      const vEntry = VOWELS[vSign];

      if (vEntry !== undefined) {
        vowelOut = typeof vEntry === 'string' ? vEntry : vEntry[governingSeries === 'A' ? 'a' : 'o'];
        i++;
        if (text[i] === NIKAHIT && NIKAHIT_COMBOS[vSign]) {
          const combo = NIKAHIT_COMBOS[vSign];
          vowelOut = governingSeries === 'A' ? combo.a : combo.o;
          i++;
        } else if (text[i] === REAHMUK && REAHMUK_COMBOS[vSign]) {
          const combo = REAHMUK_COMBOS[vSign];
          vowelOut = governingSeries === 'A' ? combo.a : combo.o;
          i++;
        }
      } else if (vSign === NIKAHIT) {
        vowelOut = governingSeries === 'A' ? BARE_NIKAHIT.a : BARE_NIKAHIT.o;
        i++;
      } else if (vSign === REAHMUK) {
        vowelOut = governingSeries === 'A' ? BARE_REAHMUK.a : BARE_REAHMUK.o;
        i++;
      } else if (vSign === YUUKALEAPINTU) {
        vowelOut = governingSeries === 'A' ? BARE_YUUKALEAPINTU.a : BARE_YUUKALEAPINTU.o;
        i++;
      } else if (vSign === SAMYOK_SANNYA) {
        // marca empréstimos do sânscrito/páli com uma vogal inerente modificada (ច័ន្ទ "chan", de
        // "Candra"); sem fonte detalhada o bastante para cada combinação, mantém a vogal inerente
        // simples desta função em vez de inventar um valor — só evita que o sinal vaze cru na saída.
        vowelOut = governingSeries === 'A' ? 'a' : 'o';
        i++;
      } else if (vSign === BANTOC && !hadSubscript && canTakeCoda) {
        // bântôc fica escrito sobre esta consoante, mas encurta a vogal da sílaba ANTERIOR — esta
        // aqui é só a coda que a fecha (ដប់ "dap", encurtando o "a" de ដ).
        if (out.length > 0) out[out.length - 1] = shortenTrailing(out[out.length - 1]);
        vowelOut = '';
        isNucleus = false;
        i++;
      } else if (vSign === BANTOC) {
        // bântôc sobre o núcleo da própria sílaba (ណាស់ "nas"): a vogal inerente já é curta por padrão.
        vowelOut = governingSeries === 'A' ? 'a' : 'o';
        i++;
      } else if ((!hadSubscript || isSilentFinalSubscript) && canTakeCoda) {
        // segunda consoante solta em sequência (sem subscrita própria) OU encontro com subscrita muda
        // no fim absoluto da palavra (ver `isSilentFinalSubscript` acima): só fecha a sílaba anterior,
        // sem vogal nova — ver cabeçalho do arquivo e o comentário de `canTakeCoda` acima.
        vowelOut = '';
        isNucleus = false;
      } else {
        // vogal inerente: início de uma sílaba nova sem sinal de vogal nenhum (ver cabeçalho do
        // arquivo). អ sozinha já não somou som próprio em `sounds` (ver acima), então esta vogal
        // inerente É o som inteiro da sílaba, sem duplicar nada.
        vowelOut = governingSeries === 'A' ? 'a' : 'o';
      }

      if (text[i] === TOANDAKHIAT) {
        // apaga de vez esta consoante (e a vogal que acabou de ler) — comum em empréstimos eruditos.
        i++;
      } else {
        let soundsOut = sounds.join('');
        // regras de consoante-coda (uma consoante solta, sem vogal própria, fechando a sílaba):
        if (vowelOut === '' && sounds.length === 1) {
          // oclusivas implosivas (ប, ដ) não existem em posição de coda: viram a parceira surda simples.
          if (soundsOut === 'b') soundsOut = 'p';
          else if (soundsOut === 'd') soundsOut = 't';
          // "r" no fim da palavra (não no meio) quase sempre emudece no khmer falado — ពីរ "pī", não "pīr".
          else if (soundsOut === 'r' && isEndOfWord(text, i)) soundsOut = '';
          // "s" no fim da palavra se enfraquece para um "h" soprado — ប្រុស "proh", não "pros".
          else if (soundsOut === 's' && isEndOfWord(text, i)) soundsOut = 'h';
        }
        out.push(soundsOut + vowelOut);
        canTakeCoda = isNucleus;
      }
      continue;
    }

    // pontuação não mapeada, espaço, dígitos latinos, texto em outra escrita: passa direto
    out.push(c);
    canTakeCoda = false;
    i++;
  }

  // vogal longa escrita dobrada (chhmaa, pii), como as dicas de pronúncia do vocabulário do pacote:
  // o mácron só serve na conta interna (encurtar com o bântôc), não na tela
  return out.join('').normalize('NFC').replace(/[āīūēō]/g, (v) => DOBRADA[v]);
}

const DOBRADA: Record<string, string> = { ā: 'aa', ī: 'ii', ū: 'uu', ē: 'ee', ō: 'oo' };
