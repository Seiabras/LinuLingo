import type { MiniCourse, MiniItem, MiniLesson, MiniQuestion } from '@/data/cursos';

/**
 * Exercícios gerados a partir dos itens de cada lição (além das perguntas escritas à mão), e a prova
 * final de cada curso. Tudo determinístico — a mesma lição gera sempre as mesmas perguntas —, para o
 * resultado não mudar a cada visita e dar para testar.
 */

/** Um número a partir de um texto (FNV-1a), para embaralhar sempre do mesmo jeito. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function shuffled<T>(list: T[], seed: string): T[] {
  return list
    .map((x, i) => ({ x, k: hash(`${seed}:${i}`) }))
    .sort((a, b) => a.k - b.k)
    .map((p) => p.x);
}

/** Monta a pergunta com a certa e duas erradas, em ordem embaralhada. */
function question(q: string, right: string, wrong: string[], seed: string, extra: Partial<MiniQuestion> = {}): MiniQuestion | null {
  const others = [...new Set(wrong.filter((w) => w !== right))].slice(0, 2);
  if (others.length < 2) return null;
  const options = shuffled([right, ...others], seed);
  return { q, options, answer: options.indexOf(right), ...extra };
}

const isCell = (it: MiniItem) => it.braille !== undefined && !it.braille.includes(' ') && it.term.length === 1;

/** Até `max` exercícios sobre os itens da lição. Nos cursos de Libras não há: o sinal está no VLibras. */
export function lessonPractice(course: MiniCourse, lesson: MiniLesson, max = 6): MiniQuestion[] {
  if (course.vlibras) return [];
  const pool = course.lessons.flatMap((l) => l.items);
  const items = shuffled(lesson.items, `${course.id}/${lesson.id}`).slice(0, max);
  const out: MiniQuestion[] = [];
  items.forEach((it, i) => {
    const seed = `${course.id}/${lesson.id}/${it.term}`;
    const others = shuffled(
      pool.filter((p) => p.term !== it.term && p.meaning !== it.meaning),
      seed,
    );
    let q: MiniQuestion | null;
    if (isCell(it))
      q = question('Que letra é esta?', it.term, others.filter(isCell).map((o) => o.term), seed, { braille: it.braille, why: it.how });
    else if (course.kind === 'sinais' && it.how)
      q = question(`Qual sinal é feito assim? ${it.how}`, it.term, others.map((o) => o.term), seed, { why: `${it.term}: ${it.meaning}.` });
    else if (i % 2 === 0) q = question(`O que quer dizer «${it.term}»?`, it.meaning, others.map((o) => o.meaning), seed, { why: it.how });
    else q = question(`Como se diz «${it.meaning}»?`, it.term, others.map((o) => o.term), seed, { why: it.how });
    if (q) out.push(q);
  });
  return out;
}

export const FINAL_EXAM_ID = 'prova-final';

/** A prova final: perguntas de todas as lições, misturadas. Só nos cursos com 3 lições ou mais. */
export function finalExam(course: MiniCourse): MiniLesson | null {
  if (course.lessons.length < 3) return null;
  const quiz = course.lessons.flatMap((l) => {
    const own = l.quiz.slice(0, 2);
    const practice = lessonPractice(course, l, 2);
    return [...own, ...practice];
  });
  return {
    id: FINAL_EXAM_ID,
    title: 'Prova final',
    emoji: '🏆',
    intro: [`Perguntas de todas as ${course.lessons.length} lições de ${course.name}, misturadas. Acertando tudo, você fecha o curso com o bônus.`],
    items: [],
    quiz: shuffled(quiz, `${course.id}/prova`).slice(0, 16),
  };
}

/** Todas as lições do curso, com a prova final no fim. */
export function allLessons(course: MiniCourse): MiniLesson[] {
  const exam = finalExam(course);
  return exam ? [...course.lessons, exam] : course.lessons;
}
