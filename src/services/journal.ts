import { stripDiacritics } from './answers';

/**
 * Corretor offline do diário: devolve os diacríticos que faltam (a partir de todas as
 * palavras que o app conhece), usa o gênero do vocabulário para acertar «un/o» e
 * «meu/mea», e pega erros típicos de quem fala português.
 */
export type IssueKind = 'acento' | 'gênero' | 'expressão';

export interface JournalIssue {
  kind: IssueKind;
  original: string;
  suggestion: string;
  why: string;
}

export interface JournalLexicon {
  /** forma sem acento (minúscula) → formas conhecidas com acento */
  forms: Map<string, Set<string>>;
  /** substantivo (minúsculo, com acento) → gênero */
  gender: Map<string, 'm' | 'f' | 'n'>;
}

const WORD = /^[\p{L}-]+$/u;

export function buildLexicon(texts: string[], nouns: { word: string; gender: 'm' | 'f' | 'n' }[]): JournalLexicon {
  const forms = new Map<string, Set<string>>();
  for (const t of texts) {
    for (const raw of t.split(/[^\p{L}-]+/u)) {
      const w = raw.toLowerCase().replace(/\u0301/g, '');
      if (!w || !WORD.test(w)) continue;
      const k = stripDiacritics(w);
      if (!forms.has(k)) forms.set(k, new Set());
      forms.get(k)!.add(w);
    }
  }
  const gender = new Map<string, 'm' | 'f' | 'n'>();
  for (const n of nouns) if (!n.word.includes(' ')) gender.set(n.word.toLowerCase().replace(/\u0301/g, ''), n.gender);
  return { forms, gender };
}

function matchCase(model: string, word: string): string {
  return model[0] && model[0] === model[0].toUpperCase() && model[0] !== model[0].toLowerCase() ? word[0].toUpperCase() + word.slice(1) : word;
}

/** Palavra sem acento que só existe com acento no vocabulário → versão acentuada. */
function restoreDiacritics(token: string, lex: JournalLexicon): string | null {
  const lower = token.toLowerCase();
  if (lower !== stripDiacritics(lower)) return null; // já tem acento
  const known = lex.forms.get(lower);
  if (!known || known.has(lower) || known.size !== 1) return null;
  return matchCase(token, [...known][0]);
}

const NUMBER = /^(\d+|doi|două|trei|patru|cinci|șase|sase|șapte|sapte|opt|nouă|noua|zece|unsprezece|doisprezece|cincisprezece|douăzeci|douazeci|treizeci|patruzeci|cincizeci|o)$/i;
const STATES: Record<string, string> = { foame: 'foame', sete: 'sete', frig: 'frig', cald: 'cald', frica: 'frică', frică: 'frică', somn: 'somn' };

const LANG_NAME: Record<string, string> = { ro: 'romeno', ru: 'russo' };

// russo: números por extenso que aparecem com idade (мне двадцать лет)
const NUMBER_RU = /^(\d+|один|одна|два|две|три|четыре|пять|шесть|семь|восемь|девять|десять|одиннадцать|двенадцать|пятнадцать|двадцать|тридцать|сорок|пятьдесят|шестьдесят)$/i;
// estados que em russo vão no dativo (мне холодно)
const STATES_RU = new Set(['холодно', 'жарко', 'скучно', 'грустно', 'плохо', 'весело', 'страшно', 'интересно', 'трудно', 'легко']);
const PRONOUN_DAT: Record<string, string> = { я: 'мне', ты: 'тебе', он: 'ему', она: 'ей', мы: 'нам', вы: 'вам', они: 'им' };
const POSSESSIVE: Record<string, Record<'m' | 'f' | 'n', string>> = {
  мой: { m: 'мой', f: 'моя', n: 'моё' }, моя: { m: 'мой', f: 'моя', n: 'моё' }, моё: { m: 'мой', f: 'моя', n: 'моё' }, мое: { m: 'мой', f: 'моя', n: 'моё' },
  твой: { m: 'твой', f: 'твоя', n: 'твоё' }, твоя: { m: 'твой', f: 'твоя', n: 'твоё' }, твоё: { m: 'твой', f: 'твоя', n: 'твоё' }, твое: { m: 'твой', f: 'твоя', n: 'твоё' },
};
const GENDER_PT = { m: 'masculino', f: 'feminino', n: 'neutro' } as const;

export function checkJournal(text: string, lex: JournalLexicon, lang = 'ro'): { corrected: string; issues: JournalIssue[] } {
  const issues: JournalIssue[] = [];
  // tokens alternando palavra / separador, para reconstruir o texto intacto
  const parts = text.split(/([^\p{L}-]+)/u);
  const isWord = (i: number) => i % 2 === 0 && parts[i] !== '';

  // 1) acentos
  for (let i = 0; i < parts.length; i += 2) {
    if (!parts[i]) continue;
    const fixed = restoreDiacritics(parts[i], lex);
    if (fixed) {
      issues.push({ kind: 'acento', original: parts[i], suggestion: fixed, why: `Em ${LANG_NAME[lang] ?? 'este idioma'} se escreve «${fixed}».` });
      parts[i] = fixed;
    }
  }

  const words = () => parts.map((p, i) => (isWord(i) ? p : null));
  const next = (i: number) => {
    for (let j = i + 2; j < parts.length; j += 2) if (parts[j]) return j;
    return -1;
  };
  const low = (i: number) => (i >= 0 ? stripDiacritics(parts[i].toLowerCase()) : '');

  const ws = words();
  for (let i = 0; i < ws.length; i += 2) {
    if (!parts[i]) continue;
    const a = low(i);
    const j = next(i);
    const b = low(j);
    const k = j >= 0 ? next(j) : -1;
    const raw = (x: number) => (x >= 0 ? parts[x].toLowerCase() : '');

    if (lang === 'ru') {
      const dat = PRONOUN_DAT[raw(i)];
      // я имею 20 лет → мне 20 лет
      const ageNum = j >= 0 && (NUMBER_RU.test(parts[k] ?? '') || /\d/.test(parts[j + 1] ?? ''));
      if (dat && raw(j) === 'имею' && ageNum) {
        issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: matchCase(parts[i], dat), why: `Idade em russo vai no dativo, sem «ter»: «${matchCase(parts[i], dat)} 20 лет» (literalmente «a mim, 20 anos»).` });
        parts[i] = matchCase(parts[i], dat);
        parts[j] = '';
        parts[j + 1] = parts[j + 1]?.replace(/^\s+/, '') ?? '';
        continue;
      }
      // я нравится / я холодно → мне нравится / мне холодно
      if (dat && (raw(j) === 'нравится' || raw(j) === 'нравятся' || STATES_RU.has(raw(j)))) {
        issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: `${matchCase(parts[i], dat)} ${parts[j]}`, why: raw(j).startsWith('нрав') ? '«Нравиться» funciona como «agradar»: «мне нравится» = «me agrada / eu gosto».' : 'Sensações e estados vão no dativo: «мне холодно» = «estou com frio» (literalmente «a mim está frio»).' });
        parts[i] = matchCase(parts[i], dat);
        continue;
      }
      // я есть студент → я студент (o presente não usa «ser/estar»)
      if (dat && raw(j) === 'есть' && k >= 0) {
        issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: parts[i], why: 'No presente, o russo não usa o verbo «ser/estar»: «Я студент» = «eu sou estudante».' });
        parts[j] = '';
        parts[j + 1] = parts[j + 1]?.replace(/^\s+/, '') ?? '';
        continue;
      }
      // мой/моя/моё + substantivo com o gênero do vocabulário
      const poss = POSSESSIVE[raw(i)];
      const g = j >= 0 ? lex.gender.get(raw(j)) : undefined;
      if (poss && g && poss[g] !== raw(i)) {
        const fix = matchCase(parts[i], poss[g]);
        issues.push({ kind: 'gênero', original: `${parts[i]} ${parts[j]}`, suggestion: `${fix} ${parts[j]}`, why: `«${parts[j]}» é ${GENDER_PT[g]}: o possessivo concorda, «${fix}».` });
        parts[i] = fix;
      }
      continue;
    }
    if (lang !== 'ro') continue;

    // eu este / tu este → eu sunt / tu ești
    if (a === 'eu' && b === 'este') {
      issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: `${parts[i]} sunt`, why: 'Com «eu», o verbo «a fi» é «sunt» (eu sunt = eu sou/estou).' });
      parts[j] = 'sunt';
    } else if (a === 'tu' && (b === 'este' || b === 'esti')) {
      issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: `${parts[i]} ești`, why: 'Com «tu», o verbo «a fi» é «ești».' });
      parts[j] = 'ești';
    }

    // sunt 20 (de) ani → am 20 (de) ani
    const digitAge = /\d/.test(parts[i + 1] ?? '') && ['ani', 'de'].includes(b);
    const wordAge = j >= 0 && NUMBER.test(parts[j]) && k >= 0 && ['ani', 'de'].includes(low(k));
    if (a === 'sunt' && (digitAge || wordAge)) {
      const num = digitAge ? (parts[i + 1] ?? '').trim() : parts[j];
      issues.push({ kind: 'expressão', original: `${parts[i]} ${num}`, suggestion: `${matchCase(parts[i], 'am')} ${num}`, why: 'Idade em romeno se «tem», como em português: «am douăzeci de ani».' });
      parts[i] = matchCase(parts[i], 'am');
    }

    // am foame → mi-e foame
    if (a === 'am' && STATES[b]) {
      issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: `${matchCase(parts[i], 'mi-e')} ${STATES[b]}`, why: 'Fome, sede, frio, calor, medo e sono se dizem com «mi-e»: «mi-e foame» (literalmente «me é fome»).' });
      parts[i] = matchCase(parts[i], 'mi-e');
      parts[j] = STATES[b];
    }

    // eu place → îmi place
    if (a === 'eu' && b === 'place') {
      issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: `${matchCase(parts[i], 'îmi')} place`, why: '«A plăcea» funciona como «agradar»: «îmi place» = «me agrada / eu gosto».' });
      parts[i] = matchCase(parts[i], 'îmi');
    }

    // locuiesc la Cluj → locuiesc în Cluj
    if ((a === 'locuiesc' || a === 'traiesc') && b === 'la' && k >= 0 && /^\p{Lu}/u.test(parts[k])) {
      issues.push({ kind: 'expressão', original: `${parts[j]} ${parts[k]}`, suggestion: `în ${parts[k]}`, why: 'Para morar numa cidade ou país usa-se «în»: «locuiesc în Cluj».' });
      parts[j] = 'în';
    }

    // bună dimineață → bună dimineața
    if (a === 'buna' && ['dimineata', 'seara', 'zi', 'ziua'].includes(b) && j >= 0) {
      const target = { dimineata: 'dimineața', seara: 'seara', zi: 'ziua', ziua: 'ziua' }[b]!;
      if (parts[j].toLowerCase() !== target) {
        issues.push({ kind: 'expressão', original: `${parts[i]} ${parts[j]}`, suggestion: `${parts[i]} ${target}`, why: `A saudação usa o artigo: «Bună ${target}!».` });
        parts[j] = target;
      }
    }

    // un/o + substantivo com o gênero do vocabulário
    const art = parts[i].toLowerCase();
    if ((art === 'un' || art === 'o') && j >= 0) {
      const g = lex.gender.get(parts[j].toLowerCase());
      if (g === 'f' && art === 'un') {
        issues.push({ kind: 'gênero', original: `${parts[i]} ${parts[j]}`, suggestion: `${matchCase(parts[i], 'o')} ${parts[j]}`, why: `«${parts[j]}» é feminino: o artigo é «o».` });
        parts[i] = matchCase(parts[i], 'o');
      } else if ((g === 'm' || g === 'n') && art === 'o') {
        issues.push({ kind: 'gênero', original: `${parts[i]} ${parts[j]}`, suggestion: `${matchCase(parts[i], 'un')} ${parts[j]}`, why: `«${parts[j]}» é ${g === 'm' ? 'masculino' : 'neutro (no singular funciona como masculino)'}: o artigo é «un».` });
        parts[i] = matchCase(parts[i], 'un');
      }
    }

    // mama meu → mama mea (substantivo feminino com artigo + possessivo)
    if (b === 'meu' && j >= 0) {
      const w = parts[i].toLowerCase();
      if (w.endsWith('a')) {
        const base = w.slice(0, -1);
        const fem = [`${base}ă`, `${base}e`, base, w].some((c) => lex.gender.get(c) === 'f');
        if (fem) {
          issues.push({ kind: 'gênero', original: `${parts[i]} ${parts[j]}`, suggestion: `${parts[i]} mea`, why: `«${parts[i]}» é feminino: o possessivo concorda, «${parts[i]} mea».` });
          parts[j] = 'mea';
        }
      }
    }
  }

  return { corrected: parts.join(''), issues };
}

/** Conta frases (terminadas em . ! ? ou no fim do texto). */
export function countSentences(text: string): number {
  return text
    .split(/[.!?…]+/)
    .map((s) => s.trim())
    .filter((s) => s.split(/\s+/).length >= 2).length;
}
