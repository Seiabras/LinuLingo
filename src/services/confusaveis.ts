import type { VocabSeed } from '@/data/types';

export interface ConfusablePair {
  a: VocabSeed;
  b: VocabSeed;
  /** quantas letras diferem entre as duas palavras (distância de edição) */
  distance: number;
}

/** Distância de Levenshtein, sem acento nem maiúscula (o que pega o olho é a forma, não o som). */
function flatten(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

function levenshtein(a: string, b: string): number {
  const dp: number[] = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const temp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = temp;
    }
  }
  return dp[b.length];
}

/**
 * Palavras do vocabulário que se parecem na escrita mas têm sentidos diferentes — fáceis de trocar
 * numa leitura rápida (tipo «mãe», «manhã» e «manha» em português). Funciona pra qualquer idioma,
 * sem precisar de conteúdo próprio: compara todo par de palavras do pack e fica só com as mais
 * parecidas, de sentido realmente diferente. As `limit` mais parecidas primeiro.
 */
export function findConfusables(vocab: VocabSeed[], limit = 20): ConfusablePair[] {
  const words = vocab
    .map((v) => ({ v, flat: flatten(v.word_target) }))
    .filter((w) => w.flat.replace(/[^a-zà-ÿ]/gi, '').length >= 4);
  // agrupa por 1ª letra: distância ≤2 quase sempre compartilha o início, e isso evita comparar
  // palavra por palavra num vocabulário de milhares de formas (os idiomas completos do app)
  const buckets = new Map<string, typeof words>();
  for (const w of words) {
    const key = w.flat[0] ?? '';
    (buckets.get(key) ?? buckets.set(key, []).get(key)!).push(w);
  }
  const seen = new Set<string>();
  const out: ConfusablePair[] = [];
  for (const group of buckets.values()) {
    for (let i = 0; i < group.length; i++) {
      for (let j = i + 1; j < group.length; j++) {
        const { v: a, flat: fa } = group[i];
        const { v: b, flat: fb } = group[j];
        if (Math.abs(fa.length - fb.length) > 2 || fa === fb) continue;
        // sentidos parecidos (ex.: gênero da mesma palavra) não contam como confusão perigosa
        if (flatten(a.word_native) === flatten(b.word_native)) continue;
        const maxLen = Math.max(fa.length, fb.length);
        const dist = levenshtein(fa, fb);
        if (dist > 2 || dist / maxLen > 0.4) continue;
        const key = [a.id, b.id].sort().join('-');
        if (seen.has(key)) continue;
        seen.add(key);
        out.push({ a, b, distance: dist });
      }
    }
  }
  return out.sort((x, y) => x.distance - y.distance || x.a.frequency_rank - y.a.frequency_rank).slice(0, limit);
}

/** Marca em negrito (índices) as letras que diferem entre as duas palavras, pra destacar na tela. */
export function diffMask(a: string, b: string): boolean[] {
  const fa = flatten(a);
  const mask = new Array(a.length).fill(false);
  const fb = flatten(b);
  const n = Math.max(fa.length, fb.length);
  for (let i = 0; i < n; i++) if (fa[i] !== fb[i]) mask[Math.min(i, a.length - 1)] = true;
  return mask;
}

/**
 * Acha a palavra (ou expressão, como «se não») dentro da frase, sem diferenciar maiúscula e só como
 * palavra inteira — «a» não casa dentro de «daqui», nem «mau» dentro de «maus». Devolve o trecho
 * exato da frase e a posição, ou `null`.
 */
export function acharNaFrase(frase: string, palavra: string): { inicio: number; trecho: string } | null {
  const alvo = palavra.toLocaleLowerCase('pt-BR');
  const baixa = frase.toLocaleLowerCase('pt-BR');
  const letra = /[\p{L}\p{M}]/u;
  for (let i = baixa.indexOf(alvo); i >= 0; i = baixa.indexOf(alvo, i + 1)) {
    const antes = baixa[i - 1];
    const depois = baixa[i + alvo.length];
    if ((antes === undefined || !letra.test(antes)) && (depois === undefined || !letra.test(depois))) return { inicio: i, trecho: frase.slice(i, i + alvo.length) };
  }
  return null;
}

export interface PerguntaConfusa {
  grupo: string;
  frase: string;
  /** a frase com a palavra trocada por «____» */
  lacuna: string;
  certa: string;
  opcoes: string[];
}

/** Perguntas de lacuna a partir dos exemplos: uma por palavra, com as opções do próprio grupo. */
export function perguntasConfusas(grupos: { id: string; palavras: { palavra: string; exemplo: string }[] }[]): PerguntaConfusa[] {
  const out: PerguntaConfusa[] = [];
  for (const g of grupos)
    for (const p of g.palavras) {
      const achou = acharNaFrase(p.exemplo, p.palavra);
      if (!achou) continue;
      out.push({ grupo: g.id, frase: p.exemplo, lacuna: p.exemplo.slice(0, achou.inicio) + '____' + p.exemplo.slice(achou.inicio + achou.trecho.length), certa: p.palavra, opcoes: g.palavras.map((x) => x.palavra) });
    }
  return out;
}
