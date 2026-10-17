/**
 * Mini-cursos das línguas que não seguem o formato da trilha: as de sinais (a Libras, com o avatar
 * VLibras), as táteis (o Braille), as artificiais que ainda não têm pacote completo de trilha
 * (na’vi, alto-valiriano, quenya, solresol, elefen — quando uma delas ganha trilha de verdade, como
 * já aconteceu com esperanto, interlíngua, volapük, ido, toki pona, lojban e klingon, ela sai daqui
 * e vira só pacote em `src/data/idiomas.ts`, pra não ficar duplicada), as controladas
 * (versões simplificadas de uma língua natural já existente, tipo o Basic English — não confundir
 * com língua artificial, que é inventada do zero) e os canais (um sistema que não é uma língua
 * própria, e sim outro código para uma língua que já existe — o silbo gomero assobia o espanhol;
 * no futuro cabem aqui os tambores falantes, por exemplo) e as gírias (vocabulário de um grupo, sem
 * gramática nem pronúncia próprias — não é dialeto de verdade; a gíria gamer é a primeira). Cada
 * curso tem lições curtas: uma explicação, os itens (sinais, letras, palavras) e perguntas que dão XP.
 */
/**
 * 'cartas': os minicursos da aba Lazer › Cartas (os naipes nas línguas, a cartomagia…); 'biologia': as
 * unidades da trilha da área Biologia (`data/biologia/trilha.ts`); 'psicologia': as da área Psicologia
 * (`data/psicologia/trilha.ts`); 'marketing', 'astronomia' e 'direito': as das áreas com esses nomes
 * (`data/<área>/trilha.ts`). Esses ficam fora da tela de línguas.
 */
export type MiniCourseKind =
  | 'sinais'
  | 'tatil'
  | 'artificial'
  | 'controlada'
  | 'canal'
  | 'giria'
  | 'cartas'
  | 'biologia'
  | 'psicologia'
  | 'musica'
  | 'marketing'
  | 'astronomia'
  | 'direito';

export interface MiniItem {
  /** o sinal, a letra ou a palavra */
  term: string;
  /** o que quer dizer (em português) */
  meaning: string;
  /** como se faz ou como se lê (parâmetros do sinal, pronúncia, pontos) */
  how?: string;
  /** texto em português que o VLibras sinaliza (só nos cursos de Libras) */
  vlibras?: string;
  /** notas (MIDI) para mostrar na pauta e tocar, nas lições da área Música */
  pauta?: number[];
  /** pontos da cela Braille, de 1 a 6 (ex.: '125' para o «h») */
  braille?: string;
  /**
   * a palavra em português que liga o item ao idioma estudado: se o Cofre do idioma tem essa palavra, a
   * lição mostra a tradução, com áudio (a ponte da Biologia com os idiomas)
   */
  pt?: string;
  /** o nome científico do ser vivo, em itálico */
  cientifico?: string;
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
  /** em construção: entra no app com o pouco que já se sabe (pode ter uma lição só) */
  rascunho?: boolean;
  /** quando o curso tem tela própria (ex.: o Tsevhu, com o Koiwrit), a rota abre ela em vez da tela genérica de lições */
  route?: string;
  lessons: MiniLesson[];
}
