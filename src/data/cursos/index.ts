import type { MiniCourse, MiniCourseKind } from './tipos';
import { CURSO_LIBRAS } from './libras';
import { CURSO_ASL, CURSO_MAIS_SINAIS } from './outras-sinais';
import { CURSO_TATIL } from './tatil';
import { CURSO_ESPERANTO, CURSO_KLINGON, CURSO_TOKI_PONA } from './artificiais';
import { CURSO_INTERLINGUA, CURSO_LOJBAN, CURSO_NAVI, CURSO_SOLRESOL, CURSO_VALIRIANO } from './artificiais-mais';

export type { MiniCourse, MiniCourseKind, MiniItem, MiniLesson, MiniQuestion } from './tipos';

export const MINI_COURSES: MiniCourse[] = [
  CURSO_LIBRAS,
  CURSO_ASL,
  CURSO_MAIS_SINAIS,
  CURSO_TATIL,
  CURSO_ESPERANTO,
  CURSO_TOKI_PONA,
  CURSO_INTERLINGUA,
  CURSO_LOJBAN,
  CURSO_KLINGON,
  CURSO_NAVI,
  CURSO_VALIRIANO,
  CURSO_SOLRESOL,
];

export const KIND_LABEL: Record<MiniCourseKind, { label: string; emoji: string; text: string }> = {
  sinais: { label: 'Línguas de sinais', emoji: '🤟', text: 'A Libras com o avatar VLibras, a ASL e o que muda nas outras.' },
  tatil: { label: 'Táteis', emoji: '🤲', text: 'O Braille e as formas de conversar pelo toque.' },
  artificial: { label: 'Línguas artificiais', emoji: '🛠️', text: 'Do esperanto ao klingon: línguas inventadas que dá para aprender.' },
};

export function miniCourse(id: string): MiniCourse | undefined {
  return MINI_COURSES.find((c) => c.id === id);
}
