/**
 * Leitura do birmanês em letras latinas para quem ainda não lê a escrita birmanesa, no MLCTS (Myanmar
 * Language Commission Transcription System), o sistema da Comissão da Língua Birmanesa (Myanmar
 * Language Commission), o órgão oficial de Mianmar que publica o «Myanmar–English Dictionary» (1993).
 *
 * Por que o MLCTS e não o BGN/PCGN 1970 (as duas opções consideradas):
 * - É o sistema nacional, do mesmo órgão que normatiza a língua — a mesma escolha feita no resto do app
 *   (georgiano no National System, grego no ELOT 743, tailandês no RTGS, cada cirílico no seu sistema
 *   nacional; ver PENDENTES, «Leitura romanizada»).
 * - Marca os tons, que o BGN/PCGN não marca de forma sistemática: «:» depois da vogal = tom alto
 *   (pesado), «.» = tom rangido (creaky), sem marca = tom baixo; a sílaba fechada por -k, -t, -p ou -c
 *   na escrita tem o tom «checado» (termina numa parada glotal). O tópico de gramática «Os quatro tons
 *   e como ler a romanização» explica isso ao aluno.
 * - É uma transliteração: sai da grafia, letra por letra, sem precisar de dicionário. O BGN/PCGN é
 *   fonético e depende de fatos que a escrita não mostra (a sonorização entre sílabas — စကား «ca.ka:»
 *   soa «zăga:»; a vogal reduzida a schwa; as três pronúncias possíveis de ည်), que o Wiktionary só
 *   acerta porque cada verbete traz uma «respelling» fonética feita à mão. Uma leitura automática em
 *   BGN/PCGN erraria justamente nesses pontos; o MLCTS automático, não.
 * - Dá para conferir: o Wiktionary em inglês mostra o MLCTS em todo verbete birmanês, e o teste
 *   (reading-burmese.test.ts) compara esta função com o MLCTS de cada palavra do vocabulário, copiado
 *   da própria página do verbete.
 * O preço, que a Wikipédia em inglês («Burmese language», seção «Romanization and transcription»)
 * registra: o MLCTS «é baseado no alfabeto birmanês e não na fonologia». Por isso o aluno lê «re» em
 * ရေ, mas a palavra soa «ye» (o ရ virou /j/ no birmanês padrão); ကျ e ကြ (ky/kr) soam os dois como um
 * «tch»; e «c» é o nosso «s». Cada palavra do vocabulário traz também a pronúncia aproximada entre
 * parênteses, e o tópico de gramática lista essas armadilhas.
 *
 * Fonte das tabelas: o módulo Lua que gera o MLCTS no Wiktionary, «Module:my-pron» (coluna 2,
 * «orthographic», «MLCTS»), chamado por «Module:my-translit» — en.wiktionary.org/wiki/Module:my-pron,
 * conteúdo sob CC BY-SA 4.0. As tabelas abaixo (consoantes, finais, vogais independentes, tons) e a
 * regra de hífen entre sílabas são uma tradução para TypeScript desse módulo, só da parte do MLCTS; a
 * divisão em sílabas foi reescrita aqui seguindo a ordem de codificação do Unicode para a escrita
 * birmanesa (Unicode Technical Note #11, «Representing Myanmar in Unicode»: consoante, mediais
 * ျ ြ ွ ှ, vogais, e só então ံ ့ ် း).
 *
 * Só Unicode padrão: texto em Zawgyi (a fonte não padronizada que ocupou o mesmo espaço de código do
 * Unicode em Mianmar até a troca oficial de 2019 — Wikipédia, «Burmese language», seção «Computer fonts
 * and standard keyboard layout») sai errado aqui, como em qualquer programa que siga o Unicode.
 *
 * Pontuação: ၊ vira «,» e ။ vira «.» (o Wiktionary usa «|» e «||», que o aluno não reconheceria); os
 * algarismos birmaneses ၀–၉ viram 0–9.
 */

const ASAT = '်'; // U+103A, mata a vogal inerente: a consoante vira final de sílaba
const VIRAMA = '္'; // U+1039, empilha a consoante seguinte (a de cima fecha a sílaba anterior)
const DOT = '့'; // U+1037, tom rangido
const VISARGA = 'း'; // U+1038, tom alto

/** As consoantes e seu valor MLCTS (Module:my-pron, initial_table, coluna 2). */
const BASE: Record<string, string> = {
  'က': 'k', 'ခ': 'hk', 'ဂ': 'g', 'ဃ': 'gh', 'င': 'ng',
  'စ': 'c', 'ဆ': 'hc', 'ဇ': 'j', 'ဈ': 'jh', 'ဉ': 'ny', 'ည': 'ny',
  'ဋ': 't', 'ဌ': 'ht', 'ဍ': 'd', 'ဎ': 'dh', 'ဏ': 'n',
  'တ': 't', 'ထ': 'ht', 'ဒ': 'd', 'ဓ': 'dh', 'န': 'n',
  'ပ': 'p', 'ဖ': 'hp', 'ဗ': 'b', 'ဘ': 'bh', 'မ': 'm',
  'ယ': 'y', 'ရ': 'r', 'လ': 'l', 'ဝ': 'w', 'သ': 's', 'ဟ': 'h', 'ဠ': 'l',
  // အ é a consoante «muda» que carrega a vogal (a parada glotal): não tem letra no MLCTS
  'အ': '',
  'ဿ': 'ss',
};

/** Mediais: ျ (y), ြ (r) e ွ (w) depois da consoante; ှ (aspiração/surdez) vira um «h» na frente. */
const MEDIAL: Record<string, string> = { 'ျ': 'y', 'ြ': 'r', 'ွ': 'w' };
const MEDIAL_H = 'ှ';

/** Sinais de vogal dependentes (ficam colados na consoante, em qualquer lado dela). */
const VOWEL_SIGNS = new Set(['ေ', 'ိ', 'ီ', 'ု', 'ူ', 'ါ', 'ာ', 'ဲ', 'ံ']);

/**
 * Finais de sílaba (vogal + consoante final) com valor próprio no MLCTS (Module:my-pron, final_table,
 * coluna 2). A sílaba sem sinal nenhum tem a vogal inerente «a.», no tom rangido.
 */
const FINAL: Record<string, string> = {
  '': 'a.',
  'က်': 'ak', 'င်': 'ang', 'စ်': 'ac', 'ည်': 'any', 'ဉ်': 'any',
  'တ်': 'at', 'န်': 'an', 'ပ်': 'ap', 'မ်': 'am', 'ယ်': 'ai', 'ံ': 'am',
  'ာ': 'a', 'ိ': 'i.', 'ိတ်': 'it', 'ိန်': 'in', 'ိပ်': 'ip', 'ိမ်': 'im', 'ိံ': 'im',
  'ီ': 'i', 'ု': 'u.', 'ုတ်': 'ut', 'ုန်': 'un', 'ုပ်': 'up', 'ုမ်': 'um', 'ုံ': 'um',
  'ူ': 'u', 'ေ': 'e', 'ဲ': 'ai:', 'ော': 'au:', 'ောက်': 'auk', 'ောင်': 'aung', 'ော်': 'au',
  'ို': 'ui', 'ိုက်': 'uik', 'ိုင်': 'uing',
  '်': '',
};

/** O núcleo vocálico, quando a final não está inteira na tabela acima (Module:my-pron, nucleus_table). */
const NUCLEUS: Record<string, string> = { '': 'a', 'ိ': 'i', 'ု': 'u', 'ော': 'au' };

/** Vogais independentes e as três abreviações literárias ၏ ၌ ၍ (Module:my-pron, indep_letter_table). */
const INDEPENDENT: Record<string, string> = {
  'ဣ': 'i.', 'ဤ': 'i', 'ဥ': 'u.', 'ဦ': 'u', 'ဧ': 'e', 'ဩ': 'au:', 'ဪ': 'au',
  '၏': 'e', '၌': 'hnai.', '၍': 'rwe',
};

const TONE: Record<string, string> = { [VISARGA]: ':', [DOT]: '.' };

const DIGITS: Record<string, string> = {
  '၀': '0', '၁': '1', '၂': '2', '၃': '3', '၄': '4', '၅': '5', '၆': '6', '၇': '7', '၈': '8', '၉': '9',
};
const PUNCT: Record<string, string> = { '၊': ',', '။': '.' };

/**
 * Pares de letras que, juntos, poderiam ser lidos como uma consoante só (ky, ng, my…): entre duas
 * sílabas, o MLCTS separa com hífen (Module:my-pron, ambig_intersyl[2]).
 */
const AMBIGUOUS = new Set(['ky', 'kr', 'kw', 'gy', 'gr', 'gw', 'ng', 'ny', 'cw', 'tw', 'nw', 'py', 'pr', 'pw', 'my', 'mr', 'mw']);

const isConsonant = (c: string | undefined) => c !== undefined && c in BASE;

interface Syllable {
  initial: string;
  final: string;
  tone: string;
  independent?: string;
}

/** Divide uma sequência de escrita birmanesa (sem espaços) em sílabas. */
function syllabify(word: string): Syllable[] {
  const out: Syllable[] = [];
  const s = [...word];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    let syl: Syllable;
    if (INDEPENDENT[c] !== undefined) {
      syl = { initial: '', final: '', tone: '', independent: c };
      i++;
    } else if (isConsonant(c)) {
      syl = { initial: c, final: '', tone: '' };
      i++;
      while (s[i] in MEDIAL || s[i] === MEDIAL_H) syl.initial += s[i++];
    } else {
      // um sinal solto (texto quebrado): pula, em vez de inventar uma leitura
      i++;
      continue;
    }
    // sinais de vogal, tons e o asat colado na vogal (ော်)
    for (;;) {
      const v = s[i];
      if (v !== undefined && VOWEL_SIGNS.has(v)) syl.final += v;
      else if (v === DOT || v === VISARGA) syl.tone = v;
      else if (v === ASAT && syl.final) syl.final += v;
      else break;
      i++;
    }
    // consoante final: C + ် (com o ့ às vezes entre os dois) ou C + ္ (a de baixo abre a próxima sílaba)
    if (isConsonant(s[i])) {
      const killed = s[i + 1] === ASAT || (s[i + 1] === DOT && s[i + 2] === ASAT);
      if (killed || s[i + 1] === VIRAMA) {
        syl.final += s[i] + ASAT;
        i++;
        if (s[i] === DOT) {
          syl.tone = DOT;
          i++;
        }
        i++; // o ် ou o ္
        // kinzi (င်္): o င final ainda vem com o ္ que empilha a próxima consoante
        if (s[i] === VIRAMA) i++;
      }
    }
    // tom escrito depois da consoante final (ကြည့် pode vir como ည + ် + ့)
    while (s[i] === DOT || s[i] === VISARGA) syl.tone = s[i++];
    out.push(syl);
  }
  return out;
}

function initialValue(initial: string): string {
  const [base, ...medials] = [...initial];
  let v = BASE[base] ?? '';
  let h = '';
  for (const m of medials) {
    if (m === MEDIAL_H) h = 'h';
    else v += MEDIAL[m] ?? '';
  }
  return h + v;
}

function finalValue(final: string): string {
  const normal = final.replace(/ါ/g, 'ာ');
  if (FINAL[normal] !== undefined) return FINAL[normal];
  // vogal + consoante final que não estão inteiras na tabela: núcleo + a consoante (Module:my-pron)
  const m = normal.match(/^(.*?)(.)်$/u);
  if (m && isConsonant(m[2])) {
    const first = NUCLEUS[m[1]] ?? FINAL[m[1]] ?? '';
    return (first + BASE[m[2]]).replace(/[.:]/, '');
  }
  return [...normal].map((ch) => FINAL[ch] ?? '').join('');
}

function syllableValue(syl: Syllable): string {
  let v: string;
  if (syl.independent !== undefined) {
    // vogal independente, às vezes fechada por consoante (ဥက်): a vogal + a consoante, sem a marca de
    // tom da vogal sozinha (Module:my-pron faz o mesmo ao compor a final)
    const coda = syl.final.match(/^(.)်$/u)?.[1];
    v = INDEPENDENT[syl.independent];
    if (coda && isConsonant(coda)) v = (v + BASE[coda]).replace(/[.:]/, '');
  } else {
    v = initialValue(syl.initial) + finalValue(syl.final);
  }
  if (syl.tone) v = v.replace(/[.:]/g, '') + TONE[syl.tone];
  return v;
}

/** Junta as sílabas, com o hífen do MLCTS onde a leitura ficaria ambígua (Module:my-pron, concatenate). */
function join(parts: string[]): string {
  let out = '';
  for (const part of parts) {
    if (!out) {
      out = part;
      continue;
    }
    const prev = out.at(-1)!;
    const next = part[0] ?? '';
    const after = part[1] ?? '';
    const hyphen =
      AMBIGUOUS.has(prev + next) ||
      (/[ptkgmny]/.test(prev) && /[aeiou]/.test(next)) ||
      (/[aeiou]/.test(prev) && /[ptkmn]/.test(next) && /[rwyg]/.test(after));
    out += (hyphen ? '-' : '') + part;
  }
  return out;
}

/** Birmanês em letras latinas (MLCTS). Ver o cabeçalho do arquivo para as fontes e as escolhas. */
export function toReadingMy(raw: string): string {
  const text = raw.normalize('NFC');
  return text.replace(/[က-႟]+/gu, (run) => {
    // dígitos e pontuação no meio da sequência
    let out = '';
    for (const piece of run.split(/([၀-၉၊။]+)/u)) {
      if (!piece) continue;
      if (/^[၀-၉၊။]+$/u.test(piece)) out += [...piece].map((c) => DIGITS[c] ?? PUNCT[c] ?? c).join('');
      else out += join(syllabify(piece).map(syllableValue));
    }
    return out;
  });
}
