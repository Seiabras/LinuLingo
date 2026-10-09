import type { MiniCourse, MiniCourseKind } from './tipos';
import { CURSO_LIBRAS } from './libras';
import { CURSO_ASL, CURSO_MAIS_SINAIS } from './outras-sinais';
import { CURSO_TATIL } from './tatil';
import { CURSO_NAVI, CURSO_SOLRESOL, CURSO_VALIRIANO } from './artificiais-mais';
import { CURSO_ELEFEN, CURSO_QUENYA } from './novas-artificiais';
import { CURSO_BASIC_ENGLISH } from './controladas';
import { CURSO_SILBO } from './silbo';
import { LIBRAS_MAIS } from './libras-mais';
import { ASL_MAIS, NAVI_MAIS, SOLRESOL_MAIS, TATIL_MAIS, VALIRIANO_MAIS } from './mais-licoes';
import { CURSO_SINDARIN } from './sindarin';
import { CURSO_DOTHRAKI } from './dothraki';
import { CURSO_LANG_BELTA } from './lang-belta';
import { CURSO_LAADAN } from './laadan';

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
  CURSO_ELEFEN,
  withMore(CURSO_NAVI, NAVI_MAIS),
  withMore(CURSO_VALIRIANO, VALIRIANO_MAIS),
  CURSO_QUENYA,
  withMore(CURSO_SOLRESOL, SOLRESOL_MAIS),
  CURSO_TSEVHU,
  CURSO_BASIC_ENGLISH,
  CURSO_SILBO,
  CURSO_SINDARIN,
  CURSO_DOTHRAKI,
  CURSO_LANG_BELTA,
  CURSO_LAADAN,
];

export const KIND_LABEL: Record<MiniCourseKind, { label: string; emoji: string; text: string }> = {
  sinais: { label: 'Línguas de sinais', emoji: '🤟', text: 'A Libras com o avatar VLibras, a ASL e o que muda nas outras.' },
  tatil: { label: 'Táteis', emoji: '🤲', text: 'O Braille e as formas de conversar pelo toque.' },
  artificial: { label: 'Línguas artificiais', emoji: '🛠️', text: 'Do na’vi ao quenya e ao solresol: línguas inventadas que ainda não têm curso completo na trilha.' },
  controlada: { label: 'Línguas controladas', emoji: '📏', text: 'Versões simplificadas de uma língua que já existe, como o Basic English — não são inventadas do zero, são o mesmo idioma com vocabulário e gramática reduzidos.' },
  canal: { label: 'Canais e sistemas', emoji: '📡', text: 'Sistemas que não são uma língua própria, e sim outro canal para uma língua que já existe — como o silbo gomero, o espanhol das Ilhas Canárias assobiado em vez de falado.' },
};

export function miniCourse(id: string): MiniCourse | undefined {
  return MINI_COURSES.find((c) => c.id === id);
}
