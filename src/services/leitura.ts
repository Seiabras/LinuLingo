import type { VocabSeed } from '@/data/types';
import type { SubLevel } from '@/types';

/**
 * Leitura graduada «estrita»: um texto de um subnível só pode usar as palavras que o aluno já
 * cobriu até ali — as mais frequentes do cofre, até o corte do subnível — e as do glossário do
 * próprio texto (as novas, que a tela destaca e traduz). Os cortes seguem os tamanhos de
 * vocabulário usuais do QECR: ~500 palavras no fim do A1, ~1.000 no A2, ~2.000 no B1, ~4.000 no B2.
 */
export const VOCAB_CUTOFF: Record<SubLevel, number> = {
  'A1.1': 300,
  'A1.2': 500,
  'A2.1': 750,
  'A2.2': 1000,
  'B1.1': 1300,
  'B1.2': 1600,
  'B1.3': 1800,
  'B1.4': 2000,
  'B2.1': 2500,
  'B2.2': 3000,
  'B2.3': 3500,
  'B2.4': 4000,
  'C1.1': 5000,
  'C1.2': 6000,
  C2: Infinity,
};

/**
 * A posição «de nível» de cada palavra: a do próprio cofre ou, se for menor, a mediana das posições
 * do mesmo conceito (a tradução em português) nos cofres dos outros idiomas. Assim conta como vista
 * a palavra que o cofre já trouxe e também a que é básica em todo lugar — o que corrige cofres em que
 * palavras básicas entraram no fim da lista (no português, «vida» é a #4211; nos outros, está entre
 * as primeiras).
 */
export function levelRanks<V extends Pick<VocabSeed, 'word_target' | 'word_native' | 'frequency_rank'>>(vocab: V[], all: V[][]): V[] {
  const key = (v: V) => fold(v.word_native.replace(/\(.*?\)/g, '').split(/[,;/]/)[0]).trim();
  const ranks = new Map<string, number[]>();
  for (const list of all) {
    if (list === vocab) continue;
    for (const v of list) ranks.set(key(v), [...(ranks.get(key(v)) ?? []), v.frequency_rank]);
  }
  return vocab.map((v) => {
    const r = (ranks.get(key(v)) ?? []).sort((a, b) => a - b);
    const median = r.length ? r[Math.floor((r.length - 1) / 2)] : Infinity;
    return { ...v, frequency_rank: Math.min(v.frequency_rank, median) };
  });
}

/** Palavras gramaticais que mudam de forma (artigos, pronomes, formas de «ser»): contam como vistas desde o A1. */
const GRAMMAR_WORDS: Record<string, string[]> = {
  ro: 'oameni oamenii într dau dă dai dăm unii unele unul una s său sa săi sale meu mea mei mele tău ta tăi tale nostru noastră noștri noastre vostru voastră pot poate putem puteți vadă văd vede zi ziua zile zilei mii un o niște unui unei unor al a ai ale cel cea cei cele celui celei celor lui ei lor le li îl îi mă te se ne vă mi ți și-a s-a e este sunt ești suntem sunteți era erau fost fi am ai are avem aveți au aș ar să nu da acest această acești aceste acestui acestei acel acea acei acele mai foarte cu în la pe de din prin spre pentru care ce cine cum unde când'.split(' '),
  es: 'el la los las lo un una unos unas al del me te se nos os le les mi mis tu tus su sus es son soy eres somos era eran fue fueron ha han he hay está están estoy'.split(' '),
  it: "il lo la i gli le l un uno una un' del dello della dei degli delle al allo alla ai agli alle dal dalla dai nel nello nella nei negli nelle sul sulla sui mi ti si ci vi gli ne è sono sei siamo era erano ho ha hanno abbiamo c mio mia miei mie tuo tua tuoi tue suo sua suoi sue nostro nostra nostri nostre vostro vostra vostri vostre".split(' '),
  pt: 'o a os as um uma uns umas ao aos à às do da dos das no na nos nas num numa pelo pela pelos pelas me te se lhe lhes nos vos é são sou era eram foi foram há tem têm está estão'.split(' '),
  ru: 'неё наш наша наше наши нашего нашей нашим нашем наших нашу вся всё всех всем всеми всю всего всей я ты он она оно мы вы они меня тебя его её нас вас их мне тебе ему ей нам вам им мной тобой ним ней нами вами ними него нему нём ней них это этот эта эти этого этой этом этих тот та те того той том тех свой своя своё свои своего своей своих был была было были будет будут есть не и в во на с со к ко о об у от до из за по для'.split(' '),
  sv: 'man eller men så när där här då nu en ett den det de dem han hon hen vi ni jag du mig dig sig oss er hans hennes deras min mitt mina din ditt dina sin sitt sina är var har hade ska skulle kan kunde vill ville inte och i på av till för med om som att'.split(' '),
  nb: 'man eller men så når der her da nå en ei et den det de dem han hun vi dere jeg du meg deg seg oss hans hennes deres min mitt mine din ditt dine sin sitt sine er var har hadde skal skulle kan kunne vil ville ikke og i på av til for med om som at'.split(' '),
  fr: "l d j c n s m t qu jusqu lorsqu puisqu aujourd hui le la les un une des du au aux de et ou en ne pas plus il elle ils elles on nous vous je tu me te se lui leur y ce cet cette ces mon ma mes ton ta tes son sa ses notre nos votre vos leurs qui que quoi dont où est sont es suis ai a as ont avons avez était étaient été être avoir fait".split(' '),
  da: 'man eller men så når der her da nu også en et den det de dem han hun vi I jeg du mig dig sig os hans hendes deres min mit mine din dit dine sin sit sine er var har havde skal skulle kan kunne vil ville ikke og i på af til for med om som at'.split(' '),
};

/** Minúsculas, sem a marca de tônica, e o ș/ț do romeno com vírgula (há textos com cedilha: ş, ţ). */
/** Terminações que viram a palavra do cofre em outra forma (o artigo definido e o plural nórdicos: dag → dagen, dagarna). */
const SUFFIXES: Record<string, string[]> = {
  sv: ['en', 'et', 'n', 't', 'a', 'ar', 'er', 'or', 'na', 'arna', 'erna', 'orna', 'arnas', 'ernas', 'ornas', 'ns', 's', 'ens', 'ets', 'e', 'are', 'ast', 'ade', 'at', 'de', 'te', 'r'],
  nb: ['en', 'et', 'a', 'er', 'ene', 'ane', 'e', 's', 't', 'te', 'de', 'ere', 'est', 'r', 'ne', 'ens'],
  fr: ['s', 'x', 'e', 'es', 'ent', 'ons', 'ez', 'é', 'ée', 'és', 'ées', 'ait', 'ais', 'aient', 'ai', 'a'],
  da: ['en', 'et', 'e', 'er', 'ene', 'erne', 'ne', 'rne', 's', 't', 'te', 'de', 'ede', 'ere', 'est', 'n', 'r', 'ens', 'ets'],
};

export const fold = (s: string) =>
  s
    .normalize('NFC')
    .replace(/\u0301/g, '')
    .toLowerCase()
    .replace(/ş/g, 'ș')
    .replace(/ţ/g, 'ț');

/** As formas de uma palavra do cofre: «a dormi» → dormi; «casa / lar» → casa, lar; sem parênteses. */
export function formsOf(v: Pick<VocabSeed, 'word_target'>): string[] {
  return v.word_target
    .replace(/\(.*?\)/g, '')
    .split(/[/,;]/)
    .flatMap((x) => fold(x).replace(/^a\s+/, '').trim().split(/\s+/))
    .filter((x) => x.length > 0);
}

/** As palavras de um texto, em minúsculas e sem a marca de tônica («într-o» → într, o; «l'amico» → l, amico). */
export function tokenize(text: string): { word: string; capital: boolean; sentenceStart: boolean }[] {
  const out: { word: string; capital: boolean; sentenceStart: boolean }[] = [];
  let start = true;
  for (const m of text.matchAll(/[\p{L}\u0301]+|[.!?…]/gu)) {
    const t = m[0];
    if (/^[.!?…]$/.test(t)) {
      start = true;
      continue;
    }
    out.push({ word: fold(t), capital: t[0] !== t[0].toLowerCase(), sentenceStart: start });
    start = false;
  }
  return out;
}

/**
 * Quem reconhece as palavras vistas até um corte do cofre: a forma exata ou uma forma flexionada
 * (o mesmo começo da palavra, tirando as 2 últimas letras: casă → casei, говорить → говорю). É uma
 * aproximação, boa para medir a cobertura de um texto.
 */
export function knownWords(vocab: Pick<VocabSeed, 'word_target' | 'frequency_rank'>[], cutoff: number, lang: string) {
  const exact = new Set<string>(GRAMMAR_WORDS[lang] ?? []);
  const stems = new Map<string, number>();
  for (const v of vocab) {
    if (v.frequency_rank > cutoff) continue;
    for (const f of formsOf(v)) {
      exact.add(f);
      // o começo da palavra, sem as 2 últimas letras (e, nas longas, sem as 3: primăvară → primăverii)
      const cuts = f.length >= 7 ? [2, 3] : f.length >= 4 ? [2] : [];
      for (const c of cuts) {
        const stem = f.slice(0, Math.max(3, f.length - c));
        stems.set(stem, Math.max(stems.get(stem) ?? 0, f.length + 4));
      }
    }
  }
  const suffixes = SUFFIXES[lang] ?? [];
  return (w: string) => {
    if (exact.has(w)) return true;
    for (const suf of suffixes) if (w.length > suf.length + 1 && w.endsWith(suf) && exact.has(w.slice(0, -suf.length))) return true;
    for (let k = Math.min(w.length, 14); k >= 3; k--) {
      const max = stems.get(w.slice(0, k));
      if (max !== undefined && w.length <= max) return true;
    }
    return false;
  };
}

export interface Coverage {
  /** palavras do texto (sem nomes próprios) */
  total: number;
  known: number;
  inGlossary: number;
  /** palavras distintas do texto e, entre elas, as do glossário */
  distinct: number;
  distinctNew: number;
  /** as que não estão nem no cofre até o nível nem no glossário */
  unknown: string[];
}

/**
 * A cobertura de um texto para um aluno num subnível. Nomes próprios (maiúscula no meio da frase)
 * não contam; o glossário vale com as formas que aparecem no texto; `forms` diz de que palavra vista
 * vem uma forma irregular ([«păsări», «pasăre»]) e só vale se essa palavra já estiver no nível.
 */
export function coverage(
  text: string,
  vocab: Pick<VocabSeed, 'word_target' | 'frequency_rank'>[],
  level: SubLevel,
  lang: string,
  glossary: [string, string][] = [],
  forms: [string, string][] = [],
): Coverage {
  const base = knownWords(vocab, VOCAB_CUTOFF[level], lang);
  // formas flexionadas que o começo da palavra não pega (pasăre → păsări): valem se a base foi vista
  const inflected = new Set(forms.filter(([, b]) => formsOf({ word_target: b }).every(base)).map(([f]) => fold(f)));
  const isKnown = (w: string) => base(w) || inflected.has(w);
  const glossWords = new Set(glossary.flatMap(([w]) => fold(w).split(/[^\p{L}]+/u)).filter(Boolean));
  // no glossário também valem as formas com sufixo (ostehøvel → ostehøvelen)
  const gloss = { has: (w: string) => glossWords.has(w) || (SUFFIXES[lang] ?? []).some((s) => w.length > s.length + 1 && w.endsWith(s) && glossWords.has(w.slice(0, -s.length))) };
  let total = 0;
  let known = 0;
  let inGlossary = 0;
  const unknown = new Set<string>();
  const seen = new Set<string>();
  const seenNew = new Set<string>();
  for (const t of tokenize(text)) {
    if (isKnown(t.word)) {
      total++;
      known++;
      seen.add(t.word);
    } else if (gloss.has(t.word)) {
      total++;
      inGlossary++;
      seen.add(t.word);
      seenNew.add(t.word);
    } else if (t.capital && !t.sentenceStart) {
      // nome próprio: não conta
    } else {
      total++;
      unknown.add(t.word);
      seen.add(t.word);
    }
  }
  return { total, known, inGlossary, distinct: seen.size, distinctNew: seenNew.size, unknown: [...unknown] };
}
