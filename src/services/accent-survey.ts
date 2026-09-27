import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';
import type { GuessAnswers, RegionId } from '@/data/quiz-sotaque';

/**
 * A pesquisa do «Qual é o seu sotaque?», guardada no aparelho (Meta, entra na cópia do progresso):
 * as respostas de cada vez, o palpite do Linu e o sotaque que a pessoa disse ter. Nada sai do
 * aparelho, a não ser que a pessoa compartilhe o resultado.
 */
export interface SurveyEntry {
  at: string;
  answers: GuessAnswers;
  guess: RegionId;
  /** o sotaque que a pessoa disse ter; 'outro' quando não é nenhum da lista */
  actual: RegionId | 'outro';
}

const KEY = 'pesquisa_sotaque';
/** O suficiente para a pesquisa, sem crescer sem limite. */
const MAX_ENTRIES = 200;

export async function loadSurvey(db: SQLiteDatabase): Promise<SurveyEntry[]> {
  const v = await getMeta(db, KEY);
  if (!v) return [];
  try {
    const list = JSON.parse(v) as SurveyEntry[];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

export async function saveSurveyEntry(db: SQLiteDatabase, entry: SurveyEntry): Promise<SurveyEntry[]> {
  const list = [...(await loadSurvey(db)), entry].slice(-MAX_ENTRIES);
  await setMeta(db, KEY, JSON.stringify(list));
  return list;
}

/** Quantas vezes o Linu acertou, entre as vezes em que a pessoa disse o sotaque dela. */
export function surveyStats(list: SurveyEntry[]): { total: number; hits: number } {
  return { total: list.length, hits: list.filter((e) => e.actual === e.guess).length };
}
