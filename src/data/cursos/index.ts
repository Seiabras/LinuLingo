import type { MiniCourse, MiniCourseKind } from './tipos';
import { CURSO_LIBRAS } from './libras';
import { CURSO_ASL, CURSO_MAIS_SINAIS } from './outras-sinais';
import { CURSO_TATIL } from './tatil';
import { CURSO_ESPERANTO, CURSO_KLINGON, CURSO_TOKI_PONA } from './artificiais';
import { CURSO_INTERLINGUA, CURSO_LOJBAN, CURSO_NAVI, CURSO_SOLRESOL, CURSO_VALIRIANO } from './artificiais-mais';
import { CURSO_ELEFEN, CURSO_IDO, CURSO_QUENYA, CURSO_VOLAPUK } from './novas-artificiais';
import { LIBRAS_MAIS } from './libras-mais';
import { ASL_MAIS, ESPERANTO_MAIS, INTERLINGUA_MAIS, KLINGON_MAIS, LOJBAN_MAIS, NAVI_MAIS, SOLRESOL_MAIS, TATIL_MAIS, TOKI_PONA_MAIS, VALIRIANO_MAIS } from './mais-licoes';

export type { MiniCourse, MiniCourseKind, MiniItem, MiniLesson, MiniQuestion } from './tipos';

/** O curso com as lições que o completam (em outros arquivos, para não virar um arquivo só enorme). */
const withMore = (c: MiniCourse, more: MiniCourse['lessons']): MiniCourse => ({ ...c, lessons: [...c.lessons, ...more] });

/** Tsevhu tem tela própria (/tsevhu, com o Koiwrit desenhado sobre o peixe koi), não o formato de lições genérico. */
const CURSO_TSEVHU: MiniCourse = {
  id: 'tsevhu',
  name: 'Tsevhu',
  emoji: '🎏',
  kind: 'artificial',
  summary: 'A língua do povo tsavhe, escrita com o Koiwrit: a frase vira um peixe koi cercado de ondulações. Usada com autorização dos autores.',
  sources: [{ label: 'Wiki do Tsevhu', url: 'https://conlang.fandom.com/wiki/Tsevhu' }],
  route: '/tsevhu',
  lessons: [],
};

export const MINI_COURSES: MiniCourse[] = [
  withMore(CURSO_LIBRAS, LIBRAS_MAIS),
  withMore(CURSO_ASL, ASL_MAIS),
  CURSO_MAIS_SINAIS,
  withMore(CURSO_TATIL, TATIL_MAIS),
  withMore(CURSO_ESPERANTO, ESPERANTO_MAIS),
  withMore(CURSO_TOKI_PONA, TOKI_PONA_MAIS),
  withMore(CURSO_INTERLINGUA, INTERLINGUA_MAIS),
  CURSO_IDO,
  CURSO_ELEFEN,
  CURSO_VOLAPUK,
  withMore(CURSO_LOJBAN, LOJBAN_MAIS),
  withMore(CURSO_KLINGON, KLINGON_MAIS),
  withMore(CURSO_NAVI, NAVI_MAIS),
  withMore(CURSO_VALIRIANO, VALIRIANO_MAIS),
  CURSO_QUENYA,
  withMore(CURSO_SOLRESOL, SOLRESOL_MAIS),
  CURSO_TSEVHU,
];

export const KIND_LABEL: Record<MiniCourseKind, { label: string; emoji: string; text: string }> = {
  sinais: { label: 'Línguas de sinais', emoji: '🤟', text: 'A Libras com o avatar VLibras, a ASL e o que muda nas outras.' },
  tatil: { label: 'Táteis', emoji: '🤲', text: 'O Braille e as formas de conversar pelo toque.' },
  artificial: { label: 'Línguas artificiais', emoji: '🛠️', text: 'Do esperanto ao klingon e ao quenya: línguas inventadas que dá para aprender.' },
};

export function miniCourse(id: string): MiniCourse | undefined {
  return MINI_COURSES.find((c) => c.id === id);
}
