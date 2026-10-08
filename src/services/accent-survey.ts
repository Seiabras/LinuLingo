import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';
import type { GuessAnswers } from '@/services/sotaque-quiz';

/**
 * A pesquisa do «Qual é o seu sotaque?» (português) e do «Qual é o seu sotaque em [idioma]?»
 * (espanhol, romeno, russo…), guardada no aparelho (Meta, entra na cópia do progresso): as
 * respostas de cada vez, o palpite do Linu e o sotaque que a pessoa disse ter. Nada sai do
 * aparelho, a não ser que a pessoa compartilhe o resultado. Cada idioma guarda a sua pesquisa
 * separada (uma chave de Meta por idioma), para não misturar os resultados.
 */
export interface SurveyEntry<R extends string = string> {
  at: string;
  answers: GuessAnswers;
  guess: R;
  /** o sotaque que a pessoa disse ter; 'outro' quando não é nenhum da lista */
  actual: R | 'outro';
}

/** 'pt' continua com a chave antiga, sem o sufixo, para não perder a pesquisa já salva. */
const keyFor = (lang: string) => (lang === 'pt' ? 'pesquisa_sotaque' : `pesquisa_sotaque_${lang}`);
/** O suficiente para a pesquisa, sem crescer sem limite. */
const MAX_ENTRIES = 200;

export async function loadSurvey<R extends string = string>(db: SQLiteDatabase, lang = 'pt'): Promise<SurveyEntry<R>[]> {
  const v = await getMeta(db, keyFor(lang));
  if (!v) return [];
  try {
    const list = JSON.parse(v) as SurveyEntry<R>[];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export async function saveSurveyEntry<R extends string = string>(db: SQLiteDatabase, entry: SurveyEntry<R>, lang = 'pt'): Promise<SurveyEntry<R>[]> {
  const list = [...(await loadSurvey<R>(db, lang)), entry].slice(-MAX_ENTRIES);
  await setMeta(db, keyFor(lang), JSON.stringify(list));
  return list;
}

/** Quantas vezes o Linu acertou, entre as vezes em que a pessoa disse o sotaque dela. */
export function surveyStats(list: SurveyEntry[]): { total: number; hits: number } {
  return { total: list.length, hits: list.filter((e) => e.actual === e.guess).length };
}
