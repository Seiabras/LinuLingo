import type { SubLevel } from '@/types';
import { levelRanks } from '@/services/leitura';
import { PACKS } from './idiomas';
import type { VocabSeed } from './types';
import { ARTIGOS_RO } from './ro/artigos';
import { ARTIGOS_ES } from './es/artigos';
import { ARTIGOS_IT } from './it/artigos';
import { ARTIGOS_PT } from './pt/artigos';
import { ARTIGOS_RU } from './ru/artigos';
import { ARTIGOS_SV } from './sv/artigos';
import { ARTIGOS_NB } from './nb/artigos';
import { ARTIGOS_DA } from './da/artigos';

/**
 * Artigos culturais graduados: textos curtos sobre a cultura de quem fala o idioma, escritos para um
 * subnível — só com as palavras que o aluno já cobriu até ali (as mais frequentes do cofre, ver
 * src/services/leitura.ts) e as do glossário do artigo, que a tela destaca e traduz. Um teste confere
 * cada artigo. As perguntas de compreensão são em português.
 */
export interface ArticleQuestion {
  q: string;
  options: string[];
  /** o índice da certa */
  answer: number;
}

export interface ArticleSeed {
  id: string;
  level: SubLevel;
  title: string;
  emoji: string;
  /** parágrafos no idioma */
  paragraphs: string[];
  /** a tradução de cada parágrafo */
  translation: string[];
  /** as palavras novas para o nível: [como aparece no texto, tradução]; formas da mesma palavra separadas por « / » */
  glossary: [string, string][];
  /** formas irregulares de palavras já vistas: [como aparece, a palavra do cofre] (păsări ← pasăre) */
  forms?: [string, string][];
  questions: ArticleQuestion[];
}

export const ARTICLES: Record<string, ArticleSeed[]> = {
  ro: ARTIGOS_RO,
  es: ARTIGOS_ES,
  it: ARTIGOS_IT,
  pt: ARTIGOS_PT,
  ru: ARTIGOS_RU,
  sv: ARTIGOS_SV,
  nb: ARTIGOS_NB,
  da: ARTIGOS_DA,
};

export function articlesOf(lang: string): ArticleSeed[] {
  return ARTICLES[lang] ?? [];
}

const cache = new Map<string, VocabSeed[]>();
/** O cofre do idioma com as posições «de nível» (ver levelRanks), para medir a cobertura dos artigos. */
export function readingVocab(lang: string): VocabSeed[] {
  let v = cache.get(lang);
  if (!v) {
    v = levelRanks(PACKS[lang]?.vocab ?? [], Object.values(PACKS).map((p) => p.vocab));
    cache.set(lang, v);
  }
  return v;
}
