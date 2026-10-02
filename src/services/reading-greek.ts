/**
 * Romanização do grego moderno para quem ainda não lê o alfabeto grego — mostrada acima da IPA,
 * como o romaji no japonês e a romanização revisada no coreano (ver `reading` em `LanguagePack`).
 *
 * Base: ELOT 743 (1982, revisto 2001), o sistema grego oficial (adotado também pela ONU e pela ISO
 * como ISO 843) usado em passaportes e placas de rua gregas — https://en.wikipedia.org/wiki/ELOT_743
 * e https://en.wikipedia.org/wiki/Romanization_of_Greek. A ISO 843 tem uma segunda variante,
 * "reversível"/acadêmica (dá pra reconstruir o grego letra por letra a partir do latino, útil para
 * bibliotecas), mas essa variante não serve a um iniciante: ela marca β como "b" sozinho (sem usar
 * "v", o som real), mantém λ, μ, ν, ρ sempre do mesmo jeito e ignora as mudanças de som do grego
 * moderno. Aqui usamos a variante "de transcrição" do ELOT 743 — a prática, pensada para alguém
 * falar o nome certo, não para reconstruir a grafia — porque o objetivo deste campo é exatamente
 * esse: ajudar a soletrar o som, não reconstruir a escrita (a escrita original já está ao lado).
 *
 * Duas escolhas se afastam do ELOT 743 estrito, e os dois motivos são o mesmo: coerência com o som
 * real do grego moderno e com o que o próprio pacote do grego já ensina na gramática (iotacismo):
 * - υ sozinho (fora de αυ/ευ/ηυ/ου/υι): o ELOT 743 oficial escreve "y" (tradição de nomes como
 *   "Υψηλάντης" → "Ypsilantis"), mas no grego falado soa [i], igual a η/ι/ει/οι — é a própria lição
 *   de gramática do pacote ("Η, Ι, Υ, ΕΙ, ΟΙ — todas soam 'i'", `src/data/el/gramatica.ts`). Como
 *   aqui o objetivo é o som e não o nome de passaporte, usamos "i".
 * - γ antes de vogal anterior (ε, ι, η, υ e os ditongos αι/οι não quebrados pelo trema): vira "y"
 *   (como em "yes"), não "g" — de novo, a própria gramática do pacote já descreve essa regra
 *   ("Γ γ: 'g' suave (antes de α/ο/υ) ou 'y' (antes de ε/ι)"). Fora desse contexto, γ continua "g".
 *
 * O resto segue o ELOT 743 de transcrição ao pé da letra:
 * - μπ, ντ, γκ: "b", "d", "g" no início da palavra (onde soam oclusivas simples); "mp", "nt", "ng"
 *   no meio (onde o som nasal aparece) — vale a regra de posição mesmo quando a pronúncia de uma
 *   palavra específica foge dela (ex.: "μπαμπάς" no meio também soa [b] para muita gente, mas a regra
 *   oficial soa igual para todo mundo, sem depender de dialeto).
 * - γγ: sempre "ng"; γξ: "nx"; γχ: "nch".
 * - αι → e; ει, οι → i; ου → ou; υι → yi — mas só quando não há trema (ϊ/ΰ) separando as duas vogais:
 *   "καΐκι" (caíque) tem hiato de verdade, então sai "a" + "i", não "e".
 * - αυ, ευ, ηυ: o υ vira consoante (v/f) e não vogal — "v"/"f" antes de consoante surda (θ κ ξ π σ τ
 *   φ χ ψ) ou no fim da palavra, "v" antes de vogal ou consoante sonora (ex.: αυτός → "aftós",
 *   αύριο → "ávrio", ευχαριστώ → "efcharistó").
 * - Consoantes dobradas (λλ, σσ, ττ…) ficam dobradas na romanização, como em "Θεσσαλονίκη" →
 *   "Thessaloniki" (a grafia oficial da cidade) — o grego moderno não geminina essas letras ao
 *   falar, mas o ELOT 743 opera letra por letra, não fonema por fonema, e por isso mantém a dobra.
 * - O tonos (΄) da própria escrita grega vira acento agudo na vogal latina correspondente, para
 *   marcar a sílaba tônica (καλημέρα → kaliméra), do mesmo jeito que o pacote já mostra o tonos na
 *   escrita grega.
 *
 * Tabela simples (letras sem regra à parte): α a, β v, δ d, ε e, ζ z, η i, θ th, ι i, κ k, λ l, μ m,
 * ν n, ξ x, ο o, π p, ρ r, σ/ς s, τ t, φ f, χ ch, ψ ps, ω o.
 */

interface Unit {
  ch: string;
  tonos: boolean;
  diaeresis: boolean;
  upper: boolean;
}

/** Marcas que o grego monotônico (moderno) não usa, mas podem aparecer em texto grego antigo colado por engano. */
const IGNORED_MARKS = new Set(['̓', '̔', '͂', 'ͅ', '̣', '̄', '̆']);

/** Separa cada letra de suas marcas (NFD): o tonos (acento agudo) e o trema (diérese) ficam à parte. */
function toUnits(word: string): Unit[] {
  const out: Unit[] = [];
  for (const c of word.normalize('NFD')) {
    if (c === '́') {
      if (out.length) out[out.length - 1].tonos = true;
      continue;
    }
    if (c === '̈') {
      if (out.length) out[out.length - 1].diaeresis = true;
      continue;
    }
    if (IGNORED_MARKS.has(c)) continue;
    const lower = c.toLowerCase();
    out.push({ ch: lower, tonos: false, diaeresis: false, upper: c !== lower });
  }
  return out;
}

const SIMPLE: Record<string, string> = {
  α: 'a', β: 'v', δ: 'd', ε: 'e', ζ: 'z', η: 'i', θ: 'th', ι: 'i', κ: 'k', λ: 'l', μ: 'm', ν: 'n',
  ξ: 'x', ο: 'o', π: 'p', ρ: 'r', σ: 's', ς: 's', τ: 't', φ: 'f', χ: 'ch', ψ: 'ps', ω: 'o',
};

/** Consoantes surdas: depois delas (ou no fim da palavra), αυ/ευ/ηυ soam com "f", não "v". */
const VOICELESS = new Set(['θ', 'κ', 'ξ', 'π', 'σ', 'ς', 'τ', 'φ', 'χ', 'ψ']);

/** Vogais anteriores (ε, ι, η, υ) e os ditongos αι/οι que soam "e"/"i" — mudam o som do γ para "y". */
const FRONT = new Set(['ε', 'ι', 'η', 'υ']);

const ACUTE: Record<string, string> = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };

function mark(ch: string, tonos: boolean): string {
  return tonos ? (ACUTE[ch] ?? ch) : ch;
}

function markLast(s: string, tonos: boolean): string {
  if (!tonos) return s;
  const last = s.slice(-1);
  return s.slice(0, -1) + (ACUTE[last] ?? last);
}

function markFirst(s: string, tonos: boolean): string {
  if (!tonos) return s;
  const first = s.slice(0, 1);
  return (ACUTE[first] ?? first) + s.slice(1);
}

/** true se o som seguinte (depois do υ de αυ/ευ/ηυ) for surdo ou a palavra acabar ali. */
function nextIsVoiceless(units: Unit[], i: number): boolean {
  const n = units[i];
  return !n || VOICELESS.has(n.ch);
}

/** true se a próxima vogal (escrita) soar "e"/"i" — dispara o γ → "y". */
function frontNext(units: Unit[], i: number): boolean {
  const n = units[i + 1];
  if (!n) return false;
  if (FRONT.has(n.ch)) return true;
  // αι e οι também soam "e"/"i", a não ser que o trema quebre o ditongo (γαϊδάρος, por ex.)
  const n2 = units[i + 2];
  if ((n.ch === 'α' || n.ch === 'ο') && n2?.ch === 'ι' && !n2.diaeresis) return true;
  return false;
}

function wordToLatin(units: Unit[]): string {
  let out = '';
  for (let i = 0; i < units.length; ) {
    const u = units[i];
    const n1 = units[i + 1];

    // μπ, ντ, γκ, γγ, γξ, γχ: oclusiva simples no início da palavra, nasal+oclusiva no meio
    if (u.ch === 'μ' && n1?.ch === 'π') {
      out += i === 0 ? 'b' : 'mp';
      i += 2;
      continue;
    }
    if (u.ch === 'ν' && n1?.ch === 'τ') {
      out += i === 0 ? 'd' : 'nt';
      i += 2;
      continue;
    }
    if (u.ch === 'γ' && n1?.ch === 'κ') {
      out += i === 0 ? 'g' : 'ng';
      i += 2;
      continue;
    }
    if (u.ch === 'γ' && n1?.ch === 'γ') {
      out += 'ng';
      i += 2;
      continue;
    }
    if (u.ch === 'γ' && n1?.ch === 'ξ') {
      out += 'nx';
      i += 2;
      continue;
    }
    if (u.ch === 'γ' && n1?.ch === 'χ') {
      out += 'nch';
      i += 2;
      continue;
    }

    // αυ, ευ, ηυ: o υ vira "v" (som sonoro) ou "f" (antes de consoante surda ou no fim da palavra)
    if ((u.ch === 'α' || u.ch === 'ε' || u.ch === 'η') && n1?.ch === 'υ' && !n1.diaeresis) {
      const vowel = u.ch === 'α' ? 'a' : u.ch === 'ε' ? 'e' : 'i';
      const cons = nextIsVoiceless(units, i + 2) ? 'f' : 'v';
      out += markFirst(vowel + cons, u.tonos || n1.tonos);
      i += 2;
      continue;
    }

    // ditongos vocálicos (quebrados pelo trema: καΐκι = ka+íki, não ke)
    if (u.ch === 'α' && n1?.ch === 'ι' && !n1.diaeresis) {
      out += mark('e', u.tonos || n1.tonos);
      i += 2;
      continue;
    }
    if (u.ch === 'ε' && n1?.ch === 'ι' && !n1.diaeresis) {
      out += mark('i', u.tonos || n1.tonos);
      i += 2;
      continue;
    }
    if (u.ch === 'ο' && n1?.ch === 'ι' && !n1.diaeresis) {
      out += mark('i', u.tonos || n1.tonos);
      i += 2;
      continue;
    }
    if (u.ch === 'ο' && n1?.ch === 'υ' && !n1.diaeresis) {
      out += markLast('ou', u.tonos || n1.tonos);
      i += 2;
      continue;
    }
    if (u.ch === 'υ' && n1?.ch === 'ι' && !n1.diaeresis) {
      out += markLast('yi', u.tonos || n1.tonos);
      i += 2;
      continue;
    }

    // γ sozinho: "y" antes de vogal anterior (ver nota no topo do arquivo), senão "g"
    if (u.ch === 'γ') {
      out += mark(frontNext(units, i) ? 'y' : 'g', u.tonos);
      i += 1;
      continue;
    }

    // υ sozinho (fora de ditongo): soa "i", como η/ι/ει/οι (ver nota no topo do arquivo)
    if (u.ch === 'υ') {
      out += mark('i', u.tonos);
      i += 1;
      continue;
    }

    const simple = SIMPLE[u.ch];
    out += simple ? mark(simple, u.tonos) : u.ch;
    i += 1;
  }
  return out;
}

function restoreCase(latin: string, units: Unit[]): string {
  if (!latin) return latin;
  if (units.length > 1 && units.every((u) => u.upper)) return latin.toUpperCase();
  if (units[0]?.upper) return latin.charAt(0).toUpperCase() + latin.slice(1);
  return latin;
}

/** Qualquer trecho em alfabeto grego (letras e as marcas de tonos/trema que vierem soltas). */
const GREEK_RUN = /\p{Script=Greek}[\p{Script=Greek}\p{Mn}]*/gu;

/** Grego → latino (ELOT 743 de transcrição, com ajustes fonéticos documentados no topo do arquivo). */
export function toReadingEl(text: string): string {
  return text.replace(GREEK_RUN, (word) => {
    const units = toUnits(word);
    if (!units.length) return word;
    return restoreCase(wordToLatin(units), units);
  });
}
