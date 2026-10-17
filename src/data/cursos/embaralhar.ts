import type { MiniCourse } from './tipos';

/** Um número a partir de um texto (FNV-1a), para embaralhar sempre do mesmo jeito. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** As opções em ordem embaralhada (sempre a mesma para a mesma semente) e onde foi parar a certa. */
export function embaralharOpcoes(opcoes: string[], certa: number, semente: string): { opcoes: string[]; certa: number } {
  const ordem = opcoes.map((o, i) => ({ o, i, k: hash(`${semente}:${o}`) })).sort((a, b) => a.k - b.k);
  return { opcoes: ordem.map((x) => x.o), certa: ordem.findIndex((x) => x.i === certa) };
}

/**
 * As perguntas escritas à mão das trilhas das áreas ficam com a certa em primeiro no arquivo (mais fácil
 * de revisar); aqui elas são embaralhadas, sempre do mesmo jeito, para a certa não ser sempre a primeira.
 */
export function comOpcoesEmbaralhadas(curso: MiniCourse): MiniCourse {
  return {
    ...curso,
    lessons: curso.lessons.map((l) => ({
      ...l,
      quiz: l.quiz.map((q) => {
        const { opcoes, certa } = embaralharOpcoes(q.options, q.answer, `${curso.id}/${l.id}/${q.q}`);
        return { ...q, options: opcoes, answer: certa };
      }),
    })),
  };
}
