/**
 * Mini-cursos das línguas que não seguem o formato da trilha: as de sinais (a Libras, com o avatar
 * VLibras), as táteis (o Braille), as artificiais (esperanto, toki pona, klingon), as controladas
 * (versões simplificadas de uma língua natural já existente, tipo o Basic English — não confundir
 * com língua artificial, que é inventada do zero) e os canais (um sistema que não é uma língua
 * própria, e sim outro código para uma língua que já existe — o silbo gomero assobia o espanhol;
 * no futuro cabem aqui os tambores falantes, por exemplo). Cada curso tem lições curtas: uma
 * explicação, os itens (sinais, letras, palavras) e perguntas que dão XP.
 */
export type MiniCourseKind = 'sinais' | 'tatil' | 'artificial' | 'controlada' | 'canal';

export interface MiniItem {
  /** o sinal, a letra ou a palavra */
  term: string;
  /** o que quer dizer (em português) */
  meaning: string;
  /** como se faz ou como se lê (parâmetros do sinal, pronúncia, pontos) */
  how?: string;
  /** texto em português que o VLibras sinaliza (só nos cursos de Libras) */
  vlibras?: string;
  /** pontos da cela Braille, de 1 a 6 (ex.: '125' para o «h») */
  braille?: string;
}

export interface MiniQuestion {
  q: string;
  options: string[];
  answer: number;
  why?: string;
  /** mostra uma cela Braille na pergunta */
  braille?: string;
}

export interface MiniLesson {
  id: string;
  title: string;
  emoji: string;
  /** a explicação da lição, em parágrafos */
  intro: string[];
  items: MiniItem[];
  quiz: MiniQuestion[];
}

export interface MiniCourse {
  id: string;
  name: string;
  emoji: string;
  kind: MiniCourseKind;
  summary: string;
  /** de onde vêm os sinais, os vídeos ou as regras; links externos para ir além */
  sources: { label: string; url: string }[];
  /** os itens abrem o avatar VLibras */
  vlibras?: boolean;
  /** quando o curso tem tela própria (ex.: o Tsevhu, com o Koiwrit), a rota abre ela em vez da tela genérica de lições */
  route?: string;
  lessons: MiniLesson[];
}
