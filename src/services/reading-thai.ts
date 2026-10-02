/**
 * Leitura da escrita tailandesa em letras latinas para quem ainda não lê a escrita.
 *
 * O padrão escolhido: o RTGS (Royal Thai General System of Transcription), da Real Academia da
 * Tailândia (Royal Institute / สำนักงานราชบัณฑิตยสภา). É o sistema oficial do país — usado nas
 * placas de rua, em mapas, passaportes e documentos do governo tailandês — e foi desenhado desde o
 * início para ser "geral" (sem diacrítico nenhum), ao contrário dos sistemas "precisos" (como o
 * Paiboon, que já aparece entre parênteses na tradução de cada palavra deste vocabulário) que
 * marcam tom e duração vocálica. A fonte confirma essa escolha de projeto explicitamente: "the
 * committee considered that for the general system, tone and quantity marks were unneeded. They
 * would be provided for the precise system" (Royal Institute, citado pela Wikipedia). Como este
 * campo `reading` é só uma ajuda de leitura (não um substituto da pronúncia, que já vem no
 * parênteses em Paiboon ao lado de cada palavra), o RTGS encaixa bem: é o romanização que o
 * aprendiz vai realmente encontrar fora do app — em placas, mapas e nomes de lugares.
 *
 * Uma única mudança deliberada em relação ao RTGS oficial: จ é lido aqui como "j", não como "ch"
 * (a grafia oficial do RTGS, que junta จ com ฉ/ช no mesmo dígrafo "ch"). Isso perde uma distinção
 * real e ensinável: จ é uma consoante não aspirada (perto de um "j" nosso), enquanto ฉ/ช são
 * aspiradas (perto do "ch" inglês) — จาก (de) e ชอบ (gostar) não começam com o mesmo som. É também
 * a mesma escolha que o próprio vocabulário deste app já faz na pronúncia Paiboon entre parênteses
 * (compare 'จาก' → "jàak" com 'ชอบ' → "chɔ̂ɔp" em vocabulario.ts): manter "ch" para จ aqui criaria
 * uma contradição entre as duas pistas de leitura mostradas lado a lado na mesma tela. Esse tipo de
 * ajuste de um sistema oficial por motivo de clareza para o aprendiz já tem precedente neste
 * projeto (ver o cabeçalho de reading-devanagari.ts, que troca "c" por "ch"/"chh" no hindi pelo
 * mesmo motivo). Fora essa troca, as tabelas abaixo seguem o RTGS à risca.
 *
 * Fontes: Wikipedia "Royal Thai General System of Transcription" (tabelas de consoante e vogal,
 * citação do Royal Institute sobre tom/duração) e "Thai script" (estrutura de sílaba, classes de
 * consoante, agrupamentos iniciais, ห/อ como "consoante líder" muda); Wiktionary (transcrições
 * Paiboon de referência cruzada com as já usadas neste vocabulário).
 *
 * Por que isto não é um abugida "simples" como o devanágari (ver reading-devanagari.ts para
 * comparação): a escrita tailandesa não tem matra nem virama. Em vez disso, ela tem três
 * complicações próprias, tratadas aqui por uma máquina de estados com uma volta de pré-análise
 * (não substituição letra-por-letra):
 *
 * 1) Vogais que aparecem ANTES (เ, แ, โ, ใ, ไ), ACIMA, ABAIXO ou DEPOIS da consoante, mas que se
 *    pronunciam sempre DEPOIS dela — ex.: เชียงใหม่ (Chiang Mai) escreve เ antes do ช, mas lê
 *    "chia", consoante primeiro. Esta função detecta a vogal "líder" (เ/แ/โ/ใ/ไ) quando aparece,
 *    guarda-a, consome a consoante (e o eventual segundo membro de um encontro consonantal) que vem
 *    depois dela na grafia, e só então decide a vogal final — olhando se depois da consoante vêm
 *    marcas que mudam o resultado (ีย → "ia", ือ → "uea", อ/ิ → "oe", า → "ao", ว → "eo", ย → "oei"
 *    sozinho vira o ditongo correspondente da tabela do RTGS). É a reordenação pedida pelo RTGS: ele
 *    romaniza pela pronúncia, não pela ordem visual.
 *
 * 2) Sem marca de vogal nenhuma (nem antes, nem depois), uma consoante carrega uma vogal
 *    "implícita" (sempre há vogal na fala, mesmo quando a grafia não marca nenhuma) — e qual vogal
 *    depende de a sílaba ficar aberta ou fechada: aberta (sem consoante final) = "a" curto;
 *    fechada (com consoante final) = "o" curto. Ex.: สวัสดี começa com ส sozinho, sem vogal e sem
 *    nada que a feche (o ว que vem depois já tem vogal própria, ั) → ส abre com "a" ("sawatdi");
 *    já คน (pessoa) tem ค sem vogal seguido de น sem vogal nenhuma depois dele → as duas se fecham
 *    juntas, ค ganha o "o" implícito e น vira final → "khon". Uma cadeia de consoantes sem vogal
 *    nenhuma (ขนม, "lanche") sempre fecha pelas ÚLTIMAS duas (นม → "nom") e abre as anteriores uma a
 *    uma (ข → "kha") — ขนม → "khanom".
 *
 * 3) Consoantes "mudas" ou de leitura irregular no fim de sílaba:
 *    - ร final (sem o การันต์, ver abaixo) soa "n" no RTGS, não "r" — tabela oficial.
 *    - ์ (thanthakhat/การันต์) apaga a consoante embaixo dele (e, no encontro ทร em final de
 *      palavra, apaga as DUAS letras: จันทร์ "segunda-feira" lê "chan", não "chanthr"). Esta função
 *      remove essas letras mudas numa passada de pré-processamento, antes da conversão propriamay.
 *    - ห e อ como "consoante muda que só troca a classe": antes de ง ญ น ม ย ร ล ว (ห) — หมา
 *      (cachorro) lê "mǎa", não "hmaa" — ou antes de ย (อ, caso fechado: อยาก, อยู่) o primeiro
 *      símbolo não soa nada; só o segundo consoante é pronunciado.
 *    - อ sozinho, no início de sílaba, também não tem som próprio no RTGS (carrega só a oclusiva
 *      glotal, que a romanização não marca): อร่อย (gostoso) lê "aroi", não "?aroi" nem "oaroi".
 *    - ทร em início de sílaba costuma soar "s" (ทราย "areia" = "sai", não "thrai") — um encontro
 *      congelado tratado aqui como caso especial, igual ao ज्ञ do devanágari.
 *    - พฤหัสบดี ("quinta-feira", de Bṛhaspati em sânscrito) é uma irregularidade lexical real: o ส
 *      do meio é lido duas vezes — uma vez como final de หัส e de novo como início de สบดี — algo
 *      que só acontece em certos empréstimos do páli/sânscrito e não é previsível pela grafia. Como
 *      só essa palavra usa isso neste vocabulário, ela entra como exceção nomeada, do mesmo jeito
 *      que o ज्ञ do hindi.
 *
 * O que fica de fora, por ser ambíguo sem dicionário (a própria segmentação de palavras do
 * tailandês corrido, sem espaços, é um problema aberto da linguística computacional — a razão pela
 * qual existem bibliotecas inteiras, como o PyThaiNLP, só para isso): quando duas sílabas "em
 * aberto" (sem vogal escrita, sem consoante final óbvia) se encontram no meio de uma frase corrida,
 * a regra usada aqui (par mais à direita fecha, o resto abre) é a mesma convenção que resolve a
 * maioria das palavras nativas bissílabas, mas não é garantida para toda palavra composta ou
 * emprestada fora da lista de exceções acima.
 */

// ── Vogais "líderes": aparecem ANTES da consoante na grafia, mas se leem DEPOIS dela ──
const LEADING_VOWELS = new Set(['เ', 'แ', 'โ', 'ใ', 'ไ']);

// ── Marcas de tom: o RTGS não marca tom (ver cabeçalho) — só são descartadas na leitura ──
const TONE_MARKS = new Set(['่', '้', '๊', '๋']); // ่ ้ ๊ ๋
// Mai taikhu (็): só avisa que a vogal é curta; não muda a romanização RTGS (que não marca duração)
const MAI_TAIKHU = '็';
const THANTHAKHAT = '์'; // ์ — apaga a consoante (ou encontro) embaixo dele

// ── Consoantes: valor inicial (RTGS), com o desvio documentado จ → "j" em vez de "ch" ──
const CONS_INITIAL: Record<string, string> = {
  'ก': 'k', 'ข': 'kh', 'ฃ': 'kh', 'ค': 'kh', 'ฅ': 'kh', 'ฆ': 'kh', 'ง': 'ng',
  'จ': 'j', // RTGS oficial usa "ch" (junto com ฉ/ช) — ver desvio documentado no cabeçalho
  'ฉ': 'ch', 'ช': 'ch', 'ซ': 's', 'ฌ': 'ch',
  'ญ': 'y',
  'ฎ': 'd', 'ฏ': 't', 'ฐ': 'th', 'ฑ': 'th', 'ฒ': 'th', 'ณ': 'n',
  'ด': 'd', 'ต': 't', 'ถ': 'th', 'ท': 'th', 'ธ': 'th', 'น': 'n',
  'บ': 'b', 'ป': 'p', 'ผ': 'ph', 'ฝ': 'f', 'พ': 'ph', 'ฟ': 'f', 'ภ': 'ph', 'ม': 'm',
  'ย': 'y', 'ร': 'r', 'ล': 'l', 'ว': 'w',
  'ศ': 's', 'ษ': 's', 'ส': 's', 'ห': 'h', 'ฬ': 'l',
  'อ': '', // sem valor fonético próprio no RTGS (oclusiva glotal não é marcada) — ver cabeçalho
  'ฮ': 'h',
};

// ── Consoantes: valor final (RTGS). Ausente ou '' = não serve como consoante final ──
const CONS_FINAL: Record<string, string> = {
  'ก': 'k', 'ข': 'k', 'ฃ': 'k', 'ค': 'k', 'ฅ': 'k', 'ฆ': 'k', 'ง': 'ng',
  'จ': 't', 'ฉ': 't', 'ช': 't', 'ซ': 't', 'ฌ': '',
  'ญ': 'n',
  'ฎ': 't', 'ฏ': 't', 'ฐ': 't', 'ฑ': 't', 'ฒ': 't', 'ณ': 'n',
  'ด': 't', 'ต': 't', 'ถ': 't', 'ท': 't', 'ธ': 't', 'น': 'n',
  'บ': 'p', 'ป': 'p', 'ผ': '', 'ฝ': '', 'พ': 'p', 'ฟ': 'p', 'ภ': 'p', 'ม': 'm',
  'ย': '', 'ร': 'n', 'ล': 'n', 'ว': '',
  'ศ': 't', 'ษ': 't', 'ส': 't', 'ห': '', 'ฬ': 'n', 'อ': '', 'ฮ': '',
};

/** Consoantes que, precedidas de ห muda, só emprestam seu próprio som (ห não soa nada). */
const H_LEADABLE = new Set(['ง', 'ญ', 'น', 'ม', 'ย', 'ร', 'ล', 'ว']);

/**
 * Encontros iniciais "de verdade" — as duas consoantes soam (ao contrário do ห/อ mudos, que
 * silenciam a primeira). Só os pares พยัญชนะ+ร/ล/ว que o tailandês padrão realmente pronuncia como
 * encontro; ศร, สร, สว e สล NÃO entram aqui — apesar da grafia parecida, ส nessas palavras abre sua
 * própria sílaba (สวัสดี lê "sa-wat-dii", não "swat-dii"; ว ali carrega a vogal ั da sílaba
 * seguinte, não um encontro consonantal com ส).
 */
const TRUE_CLUSTERS = new Set([
  'กร', 'กล', 'กว', 'ขร', 'ขล', 'ขว', 'คร', 'คล', 'คว',
  'ปร', 'ปล', 'ผล', 'พร', 'พล', 'ตร',
]);

function isThaiChar(c: string): boolean {
  return c >= '฀' && c <= '๿';
}
function isConsonant(c: string): boolean {
  return CONS_INITIAL[c] !== undefined;
}
function isToneMark(c: string | undefined): boolean {
  return c !== undefined && TONE_MARKS.has(c);
}

/** Pula uma eventual marca de tom (่ ้ ๊ ๋), devolvendo o índice seguinte a ela. */
function skipTone(text: string, i: number): number {
  return isToneMark(text[i]) ? i + 1 : i;
}

/**
 * Quantos caracteres a consoante inicial em `pos` ocupa: 2 para um encontro de verdade, um ห/อ
 * mudo de troca de classe, ou o ทร que soa "s"; 1 nos demais casos. Compartilhado por `readInitial`
 * (que usa isso para decidir quanto consumir) e `hasOwnVowelAhead` (que usa isso para saber onde
 * olhar a vogal: depois do par inteiro, não no meio dele).
 */
function initialConsonantLength(text: string, pos: number): number {
  const c1 = text[pos];
  const c2 = text[pos + 1];
  if (c1 === 'ท' && c2 === 'ร') return 2;
  if (c1 === 'ห' && c2 !== undefined && H_LEADABLE.has(c2)) return 2;
  if (c1 === 'อ' && c2 === 'ย') return 2;
  if (c2 !== undefined && TRUE_CLUSTERS.has(c1 + c2)) return 2;
  return 1;
}

/**
 * อ logo depois de uma consoante candidata (em `oPos`) é a PRÓPRIA vogal dessa consoante ("-อ"/
 * "-อย"), ou é uma consoante nova começando por conta própria? A letra é genuinamente ambígua na
 * escrita tailandesa — às vezes é mesmo indecidível sem dicionário (ver o aviso no cabeçalho do
 * arquivo) — mas o que vem DEPOIS do อ resolve dois dos três casos:
 * - อ + uma marca de vogal (ะ ั า ำ ิ ี ึ ื ุ ู): essa อ é ela mesma uma consoante nova (o อ mudo
 *   que carrega a oclusiva glotal, como em อาทิตย์, อาหาร), não a vogal da candidata (หนึ่งอาทิตย์:
 *   ง fecha "nueng" normalmente, อาทิตย์ começa do zero).
 * - อ + ย: depende se esse ย ainda vai ganhar uma vogal própria depois (ู ิ etc.) — se sim, อย é o
 *   par muda-classe de uma palavra nova (อยู่, อยาก: não é vogal da candidata, ela deve fechar
 *   normalmente); se não (nada depois do ย), อย é a própria vogal "-อย" da candidata (อร่อย: ร não
 *   fecha sozinho, ganha "oi" direto).
 * - อ sozinha ou อ + outra consoante qualquer: AMBÍGUO de verdade — pode ser a vogal "-อ" da
 *   candidata com essa consoante fechando depois (พ่อของฉัน: ข não é final de "pho", ganha "-อ"
 *   própria → "khong"), ou pode ser o อ mudo de uma palavra nova sem relação (อาหารอร่อย: ร É final
 *   de "han", o อ seguinte não tem nada a ver com ele). Sem dicionário não dá para saber qual é —
 *   por padrão fecha a candidata (mais comum em texto corrido), com uma exceção nomeada para ของ
 *   ("de, posse"), de longe a palavra mais comum deste vocabulário nesse formato.
 */
function oGivesCandidateVowel(text: string, oPos: number): boolean {
  const x = text[oPos + 1];
  if (x !== undefined && SAME_LINE_VOWEL_STARTS.has(x)) return false;
  if (x === 'ย') return !SAME_LINE_VOWEL_STARTS.has(text[skipTone(text, oPos + 2)]);
  return false;
}

/**
 * Esta consoante (em `j`) vai ganhar vogal própria já no próximo caractere (ignorando um tom no
 * meio)? Usada para decidir se uma consoante "solta" fecha a sílaba anterior (é a final dela) ou
 * abre uma nova (é o início da próxima, que ainda vai ganhar sua própria vogal).
 */
function hasOwnVowelAhead(text: string, j: number): boolean {
  if (j >= text.length || !isConsonant(text[j])) return false;
  // um encontro de verdade, ห/อ mudo ou ทร já é, por si só, sinal de que esta posição começa uma
  // unidade nova (ex.: เก้าขวบ "nove anos": ก้า não deve engolir o ข de ขวบ só porque depois do
  // encontro ขว vem outra consoante sem vogal — ขวบ ainda forma sua própria sílaba fechada "khwop"
  // pela cadeia de vogal implícita, então ข "tem vogal própria" no sentido que aqui importa).
  if (initialConsonantLength(text, j) === 2) return true;
  // ของ ("de, posse") é comum demais neste vocabulário para arriscar — ver oGivesCandidateVowel.
  if (text.startsWith('ของ', j)) return true;
  const k = skipTone(text, j + 1);
  if (text[k] === 'อ') return oGivesCandidateVowel(text, k);
  return SAME_LINE_VOWEL_STARTS.has(text[k]);
}

/**
 * Marcas de vogal que começam logo depois da consoante, na mesma linha de escrita. De propósito,
 * NÃO inclui อ: อ depois de uma consoante é ambíguo de verdade na escrita tailandesa — às vezes é
 * vogal (ขอ → "kho"), às vezes é uma consoante nova (อยู่, อยาก, อะไร). Contar อ aqui faria esta
 * checagem (usada só para decidir se uma OUTRA consoante antes dela deve fechar sílaba ou não)
 * assumir "vogal" demais, quebrando casos reais do vocabulário (ฉันอยู่, หนึ่งอาทิตย์). Quando o
 * código está processando a consoante atual de verdade (não só espiando a próxima), อ já é tratado
 * como vogal diretamente em readSameLineVowel, sem precisar deste conjunto.
 */
const SAME_LINE_VOWEL_STARTS = new Set([
  'ะ', // ะ
  'ั', // ั
  'า', // า
  'ำ', // ำ
  'ิ', // ิ
  'ี', // ี
  'ึ', // ึ
  'ื', // ื
  'ุ', // ุ
  'ู', // ู
]);

/**
 * Remove o thanthakhat (์) e a(s) letra(s) muda(s) que ele apaga, numa passada antes da conversão
 * — assim o resto do algoritmo nunca precisa saber que elas existiram. Caso especial: ทร seguido de
 * ์ apaga as DUAS letras (จันทร์ "segunda-feira" = "chan", não "chanth"); nos outros casos, apaga só
 * a letra imediatamente embaixo do ์ (ศุกร์ "sexta-feira" = "suk", มนุษย์ "ser humano" = "manut").
 */
function stripThanthakhat(text: string): string {
  let out = '';
  for (let i = 0; i < text.length; i++) {
    if (text[i] === THANTHAKHAT) {
      if (out.endsWith('ทร')) out = out.slice(0, -2);
      else out = out.slice(0, -1);
      continue;
    }
    out += text[i];
  }
  return out;
}

/**
 * Converte a vogal "líder" pendente (já visualmente consumida) com o que vem depois da consoante.
 * `closed` avisa quando o próprio padrão de vogal já fecha a sílaba com um glide (ย/ว) embutido —
 * nesse caso NENHUMA consoante final pode vir depois (a sílaba já está completa), então quem chama
 * não deve tentar absorver mais nada. Sem isso, uma consoante solta que começa a PRÓXIMA palavra
 * (ex.: o ส de "สวย" depois de "แก้ว") seria engolida por engano como se fosse final desta sílaba.
 */
function readLeadingVowelSyllable(
  leading: string,
  initial: string,
  text: string,
  i: number
): { latin: string; next: number; closed: boolean } {
  let j = skipTone(text, i);

  if (leading === 'โ') {
    // โ–ะ, โ– → o (sem outras combinações relevantes neste vocabulário) — pode levar final (โรง)
    if (text[j] === 'ะ') j++; // ะ
    return { latin: initial + 'o', next: j, closed: false };
  }
  if (leading === 'ใ' || leading === 'ไ') {
    // ใ–, ไ– → ai (o ย que às vezes segue, como em ไทย, não muda o som) — já fechada
    if (text[j] === 'ย') j++;
    return { latin: initial + 'ai', next: j, closed: true };
  }
  if (leading === 'แ') {
    if ((text[j] === 'ว') || (text[j] === MAI_TAIKHU && text[j + 1] === 'ว')) {
      j = text[j] === MAI_TAIKHU ? j + 2 : j + 1;
      return { latin: initial + 'aeo', next: j, closed: true }; // já fechada pelo ว
    }
    if (text[j] === 'ะ') j++; // ะ
    return { latin: initial + 'ae', next: j, closed: false }; // pode levar final (แกง)
  }

  // leading === 'เ' — um tom pode ficar entre as duas partes (ele fica sempre na parte "de cima"
  // da vogal: ี/ื, nunca no ย/อ/ว que vem depois), então cada combinação pula um tom opcional ali.
  if (text[j] === 'ี') {
    const after = skipTone(text, j + 1);
    if (text[after] === 'ย') {
      // เ–ียว → iao (já fechada pelo ว); เ–ีย → ia (pode levar final: เรียน)
      if (text[after + 1] === 'ว') return { latin: initial + 'iao', next: after + 2, closed: true };
      return { latin: initial + 'ia', next: after + 1, closed: false };
    }
    // เ–ี sozinho (sem ย) não é um padrão comum do RTGS — fallback sem travar o laço principal
    return { latin: initial + 'ei', next: j + 1, closed: false };
  }
  if (text[j] === 'ื') {
    const after = skipTone(text, j + 1);
    if (text[after] === 'อ') {
      const after2 = skipTone(text, after + 1);
      if (text[after2] === 'ย') return { latin: initial + 'ueai', next: after2 + 1, closed: true }; // เ–ือย
      return { latin: initial + 'uea', next: after2, closed: false }; // เ–ือ (pode levar final: เพื่อน)
    }
    // เ–ื sozinho (sem อ) não é um padrão comum do RTGS — fallback sem travar o laço principal
    return { latin: initial + 'ue', next: j + 1, closed: false };
  }
  if (text[j] === 'ิ' || text[j] === 'อ') {
    // เ–ิ, เ–อ(ะ) → oe — pode levar final (เกิด)
    j++;
    if (text[j] === 'ะ') j++;
    return { latin: initial + 'oe', next: j, closed: false };
  }
  if (text[j] === 'า') {
    // เ–า → ao — já fechada
    return { latin: initial + 'ao', next: j + 1, closed: true };
  }
  if (text[j] === 'ย') {
    // เ–ย → oei — já fechada pelo ย
    return { latin: initial + 'oei', next: j + 1, closed: true };
  }
  if (text[j] === 'ว' || (text[j] === MAI_TAIKHU && text[j + 1] === 'ว')) {
    // เ–ว, เ–็ว → eo — já fechada pelo ว
    j = text[j] === MAI_TAIKHU ? j + 2 : j + 1;
    return { latin: initial + 'eo', next: j, closed: true };
  }
  // เ–ะ, เ–็, เ– → e — pode levar final (เป็น)
  if (text[j] === 'ะ' || text[j] === MAI_TAIKHU) j++;
  return { latin: initial + 'e', next: j, closed: false };
}

/**
 * O glide (ย ou ว) em `pos` fecha o ditongo da vogal atual, ou tem vogal própria e começa uma
 * sílaba nova? Ex.: -าย sem nada depois do ย é ditongo "ai" (สบาย → "sabai"), mas -ายุ (า seguido de
 * ย que por sua vez tem ุ logo depois) não é — o ย aí começa sílaba própria (อายุ → "a-yu", não
 * "ai-u"). Um tom entre o glide e a consoante anterior não muda isso (a marca de tom fica sempre
 * na parte "de cima" da vogal, nunca sobre o glide em si).
 */
function glideStartsOwnSyllable(text: string, pos: number): boolean {
  return SAME_LINE_VOWEL_STARTS.has(text[skipTone(text, pos + 1)]);
}

/** Lê a vogal na mesma linha (sem vogal líder), já colada depois da consoante inicial. */
function readSameLineVowel(
  initial: string,
  text: string,
  i: number
): { latin: string; next: number; sawFinalInVowel: boolean } {
  const c = text[i];
  // posição do glide (ย/ว) que fecharia um ditongo, pulando um tom entre a vogal e ele
  const g = skipTone(text, i + 1);

  if (c === 'ั') {
    // ั — short a; combina com ย (ai) ou ว (ua), se o glide não tiver vogal própria
    if (text[g] === 'ย' && !glideStartsOwnSyllable(text, g)) {
      return { latin: initial + 'ai', next: g + 1, sawFinalInVowel: true };
    }
    if (text[g] === 'ว' && !glideStartsOwnSyllable(text, g)) {
      return { latin: initial + 'ua', next: g + 1, sawFinalInVowel: true };
    }
    return { latin: initial + 'a', next: i + 1, sawFinalInVowel: false };
  }
  if (c === 'ะ') return { latin: initial + 'a', next: i + 1, sawFinalInVowel: false }; // ะ
  if (c === 'า') {
    // า — combina com ย (ai) ou ว (ao, –าว), se o glide não tiver vogal própria (อายุ: า+ย+ุ não é
    // "ai"; ขาว "branco" = kh+ao, não "khawa")
    if (text[g] === 'ย' && !glideStartsOwnSyllable(text, g)) {
      return { latin: initial + 'ai', next: g + 1, sawFinalInVowel: true };
    }
    if (text[g] === 'ว' && !glideStartsOwnSyllable(text, g)) {
      return { latin: initial + 'ao', next: g + 1, sawFinalInVowel: true };
    }
    return { latin: initial + 'a', next: i + 1, sawFinalInVowel: false };
  }
  if (c === 'ำ') return { latin: initial + 'am', next: i + 1, sawFinalInVowel: true }; // ำ
  if (c === 'ิ') {
    // ิ — combina com ว (io)
    if (text[g] === 'ว' && !glideStartsOwnSyllable(text, g)) {
      return { latin: initial + 'io', next: g + 1, sawFinalInVowel: true };
    }
    return { latin: initial + 'i', next: i + 1, sawFinalInVowel: false };
  }
  if (c === 'ี') return { latin: initial + 'i', next: i + 1, sawFinalInVowel: false }; // ี
  if (c === 'ึ') return { latin: initial + 'ue', next: i + 1, sawFinalInVowel: false }; // ึ
  if (c === 'ื') {
    // ื — combina com อ (ue, sem vogal líder — ver tabela: –ึ, –ื, —ือ → ue); o tom pode ficar
    // entre os dois (ชื่อ "nome" = ช+ื+tom+อ)
    if (text[g] === 'อ') return { latin: initial + 'ue', next: g + 1, sawFinalInVowel: false };
    return { latin: initial + 'ue', next: i + 1, sawFinalInVowel: false };
  }
  if (c === 'ุ') {
    // ุ — combina com ย (ui)
    if (text[g] === 'ย' && !glideStartsOwnSyllable(text, g)) {
      return { latin: initial + 'ui', next: g + 1, sawFinalInVowel: true };
    }
    return { latin: initial + 'u', next: i + 1, sawFinalInVowel: false };
  }
  if (c === 'ู') return { latin: initial + 'u', next: i + 1, sawFinalInVowel: false }; // ู
  if (c === 'อ') {
    // อ usada como vogal (não como nova consoante) — combina com ย (oi)
    if (text[g] === 'ย' && !glideStartsOwnSyllable(text, g)) {
      return { latin: initial + 'oi', next: g + 1, sawFinalInVowel: true };
    }
    return { latin: initial + 'o', next: i + 1, sawFinalInVowel: false };
  }
  // ว sozinho depois da consoante (sem ั antes): –วย → uai
  if (c === 'ว' && text[g] === 'ย' && !glideStartsOwnSyllable(text, g)) {
    return { latin: initial + 'uai', next: g + 1, sawFinalInVowel: true };
  }
  return { latin: initial, next: i, sawFinalInVowel: false };
}

/** ฤ (e o raríssimo ฦ): letra que já é, ao mesmo tempo, consoante "r"/"l" e vogal "ue". */
function readRue(text: string, i: number, pendingConsonantInitial: string | null): { latin: string; next: number } {
  const base = text[i] === 'ฤ' ? 'r' : 'l'; // RTGS lista "rue, ri, roe" para ฤ — "rue" é o valor-padrão
  if (pendingConsonantInitial !== null) {
    return { latin: pendingConsonantInitial + base + 'ue', next: i + 1 };
  }
  return { latin: base + 'ue', next: i + 1 };
}

/** Lê uma consoante inicial a partir de `i`, já resolvendo encontros e os muda-classe ห/อ. */
function readInitial(text: string, i: number): { latin: string; next: number } {
  const c1 = text[i];
  const c2 = text[i + 1];

  // ทร em início de sílaba soa "s" (ทราย, แทรก) — encontro congelado, caso especial
  if (c1 === 'ท' && c2 === 'ร') return { latin: 's', next: i + 2 };

  // ห/อ como consoante muda que só troca a classe (หมา, อยาก, อยู่...)
  if (c1 === 'ห' && c2 !== undefined && H_LEADABLE.has(c2)) {
    return { latin: CONS_INITIAL[c2], next: i + 2 };
  }
  if (c1 === 'อ' && c2 === 'ย') {
    return { latin: CONS_INITIAL['ย'], next: i + 2 };
  }

  // encontro inicial de verdade: as duas consoantes soam
  if (c2 !== undefined && TRUE_CLUSTERS.has(c1 + c2)) {
    return { latin: CONS_INITIAL[c1] + CONS_INITIAL[c2], next: i + 2 };
  }

  return { latin: CONS_INITIAL[c1], next: i + 1 };
}

/**
 * พฤหัสบดี ("quinta-feira", do sânscrito Bṛhaspati): o ส do meio é lido duas vezes (final de หัส e
 * início de สบดี), uma irregularidade lexical de empréstimo que a grafia sozinha não prevê — ver o
 * cabeçalho do arquivo. Tratada aqui como exceção nomeada, como o ज्ञ do devanágari.
 */
const WORD_EXCEPTIONS: Record<string, string> = {
  'พฤหัสบดี': 'phruehatsabodi',
};

/**
 * Lê uma sílaba tailandesa a partir do índice `i` e devolve sua romanização RTGS e o índice do
 * caractere seguinte. Ver o cabeçalho do arquivo para as regras e as fontes.
 */
function readSyllable(text: string, i: number): { latin: string; next: number } {
  // ฤ/ฦ sozinha, sem consoante antes (início de palavra/sílaba)
  if (text[i] === 'ฤ' || text[i] === 'ฦ') return readRue(text, i, null);

  let leading = '';
  let j = i;
  if (LEADING_VOWELS.has(text[j])) {
    leading = text[j];
    j++;
  }

  // ฤ logo depois de uma consoante (พฤ → "phrue") é tratada antes do fluxo normal de vogal
  if (!leading && isConsonant(text[j]) && (text[j + 1] === 'ฤ' || text[j + 1] === 'ฦ')) {
    const { latin: initLatin } = readInitial(text, j);
    const rue = readRue(text, j + 1, initLatin);
    return finishWithFinal(text, rue.next, rue.latin);
  }

  if (!isConsonant(text[j])) {
    // caractere tailandês isolado que não é consoante nem vogal líder conhecida (ex.: dígito,
    // pontuação própria) — devolve como está, para não travar a leitura do resto da frase.
    return { latin: text[j] ?? '', next: j + 1 };
  }

  const { latin: initial, next: afterInitial } = readInitial(text, j);

  if (leading) {
    const { latin, next, closed } = readLeadingVowelSyllable(leading, initial, text, afterInitial);
    return closed ? { latin, next } : finishWithFinal(text, next, latin);
  }

  const k = skipTone(text, afterInitial);
  const { latin, next, sawFinalInVowel } = readSameLineVowel(initial, text, k);

  if (next === k) {
    // nenhuma marca de vogal encontrada: vogal implícita (ver regra 2 do cabeçalho)
    return readImplicitVowelChain(text, j);
  }
  if (sawFinalInVowel) {
    // a vogal já "fechou" a sílaba sozinha (ditongo com ย/ว/final embutido, ex. -าย, -วย, ำ)
    return { latin, next };
  }
  return finishWithFinal(text, next, latin);
}

/**
 * Depois de initial+vogal explícita (sem ditongo próprio), tenta absorver uma consoante final.
 * Uma vogal líder (เ/แ/โ/ใ/ไ) logo depois da candidata a final não a impede de fechar a sílaba —
 * pelo contrário: confirma que ela não tem vogal própria ali (a vogal líder pertence à PRÓXIMA
 * consoante, não a esta), então `hasOwnVowelAhead` já devolve `false` nesse caso, o sinal certo
 * para fechar (ฉันไม่ "chan mai", เชียงใหม่ "chiang mai": o final antes do เ/ใ precisa fechar).
 */
function finishWithFinal(text: string, next: number, latinSoFar: string): { latin: string; next: number } {
  let n = skipTone(text, next);
  const c = text[n];
  if (c !== undefined && isConsonant(c) && CONS_FINAL[c] && !hasOwnVowelAhead(text, n)) {
    n = skipTone(text, n + 1);
    return { latin: latinSoFar + CONS_FINAL[c], next: n };
  }
  return { latin: latinSoFar, next };
}

/**
 * Nenhuma vogal escrita: monta a cadeia de consoantes "soltas" a partir de `start` e aplica a vogal
 * implícita (aberta = "a", fechada = "o" nas duas últimas da cadeia) — ver regra 2 do cabeçalho.
 */
function readImplicitVowelChain(text: string, start: number): { latin: string; next: number } {
  const chain: number[] = [start];
  let n = skipTone(text, start + initialConsonantLength(text, start));
  // a cadeia continua enquanto vier consoante "solta" (sem vogal própria à frente, contando um
  // eventual encontro/ห-mudo/อย como UM passo, via initialConsonantLength); uma vogal líder
  // (เ/แ/โ/ใ/ไ) logo depois não conta como vogal "própria" desta consoante — ela pertence à PRÓXIMA
  // consoante, então `isConsonant` já corta a cadeia no lugar certo quando ela aparece.
  while (isConsonant(text[n]) && !hasOwnVowelAhead(text, n)) {
    chain.push(n);
    n = skipTone(text, n + initialConsonantLength(text, n));
  }

  if (chain.length === 1) {
    return { latin: readInitial(text, start).latin + 'a', next: n };
  }

  let out = '';
  for (let idx = 0; idx < chain.length - 2; idx++) {
    out += readInitial(text, chain[idx]).latin + 'a';
  }
  const lastPos = chain[chain.length - 2];
  const finalPos = chain[chain.length - 1];
  const afterLast = skipTone(text, lastPos + initialConsonantLength(text, lastPos));
  const finalLatin = CONS_FINAL[text[finalPos]];
  if (finalLatin) {
    out += readInitial(text, lastPos).latin + 'o' + finalLatin;
    return { latin: out, next: skipTone(text, finalPos + 1) };
  }
  // a última não serve como final (ex.: ห, ผ...): trata todas como sílabas abertas em "a", e deixa
  // a posição marcada como `finalPos` para o laço principal processar como uma sílaba nova
  out += readInitial(text, lastPos).latin + 'a';
  return { latin: out, next: afterLast };
}

/**
 * Tailandês em letras latinas (romanização RTGS), para quem ainda não lê a escrita tailandesa. Ver
 * o cabeçalho do arquivo para as fontes, as regras seguidas e o que fica de fora.
 */
export function toReadingTh(raw: string): string {
  const text = stripThanthakhat(raw.normalize('NFC'));
  const out: string[] = [];
  let i = 0;

  while (i < text.length) {
    if (!isThaiChar(text[i])) {
      out.push(text[i]);
      i++;
      continue;
    }
    if (isToneMark(text[i]) || text[i] === MAI_TAIKHU) {
      // marca de tom "solta" (sem consoante/vogal já tratada antes) — descarta (RTGS não marca tom)
      i++;
      continue;
    }

    // tenta casar uma palavra-exceção inteira a partir daqui (ex.: พฤหัสบดี)
    let matchedException: string | null = null;
    for (const [word, latin] of Object.entries(WORD_EXCEPTIONS)) {
      if (text.startsWith(word, i)) {
        matchedException = latin;
        i += word.length;
        break;
      }
    }
    if (matchedException !== null) {
      out.push(matchedException);
      continue;
    }

    const { latin, next } = readSyllable(text, i);
    out.push(latin);
    i = Math.max(next, i + 1); // garante progresso mesmo num caractere imprevisto
  }

  return out.join('');
}
