import type { CefrLevel } from '@/types';

/**
 * Provas de proficiência e recomendações (filmes, séries, livros…) de cada idioma, para a tela
 * «Provas e dicas» (/provas). Um arquivo por idioma nesta pasta; o índice fica em ./index.ts.
 */

/** Uma prova de proficiência (TOEFL, Cambridge, DELE, JLPT…). */
export interface ProficiencyExam {
  /** ex.: 'dele' (único no idioma) */
  id: string;
  /** Nome curto: «DELE» */
  name: string;
  /** Nome por extenso: «Diplomas de Español como Lengua Extranjera» */
  fullName: string;
  /** Quem aplica / emite: «Instituto Cervantes, em nome do Ministério da Educação da Espanha» */
  org: string;
  /** Bandeira do país da instituição */
  flag: string;
  /** A prova mais pedida do idioma aparece primeiro e com destaque */
  main?: boolean;
  /** Níveis e como se mede: «um exame por nível, do A1 ao C2» ou «nota de 0 a 120» */
  levels: string;
  /** Faixa do QECR que a prova cobre */
  cefr: [CefrLevel, CefrLevel];
  /** Partes da prova (leitura, escrita, audição, fala…), com o que cada uma pede */
  format: string[];
  /** Validade do certificado: «não expira», «2 anos»… */
  validity: string;
  /** Para que serve: universidade, visto, cidadania, trabalho… */
  usedFor: string[];
  /** Onde e quando fazer, pensando em quem mora no Brasil (sem preço: muda todo ano) */
  where: string;
  /** Dica prática de preparação */
  tip: string;
  /** Site oficial (https) */
  url: string;
}

export type MediaKind = 'filme' | 'serie' | 'livro' | 'musica' | 'podcast' | 'canal' | 'noticias' | 'ferramenta' | 'jogo' | 'hq';

/** Uma recomendação para praticar o idioma fora do app. */
export interface MediaPick {
  kind: MediaKind;
  /** Título em português (ou o original, quando não tem tradução conhecida) */
  title: string;
  /** Título no idioma, quando é diferente */
  original?: string;
  /** Diretor, autor, artista, criador ou canal */
  by: string;
  /** Ano de lançamento (ou «2015–2019» para série) */
  year?: string;
  /** Nível a partir do qual dá para aproveitar no idioma (com legenda no idioma, nos filmes e séries) */
  level: CefrLevel;
  /** Por que vale a pena, em 1–2 frases: o que se aprende, o sotaque, a cultura */
  why: string;
  /** Variante ou sotaque que se ouve (ex.: «espanhol da Argentina»), quando importa */
  accent?: string;
}

/** Tudo de um idioma. */
export interface LanguageResources {
  /** código do idioma (o mesmo de LANGUAGES) */
  lang: string;
  exams: ProficiencyExam[];
  media: MediaPick[];
  /** Dicas soltas para estudar o idioma por conta própria (3–6) */
  tips: string[];
}

export const MEDIA_LABEL: Record<MediaKind, { label: string; emoji: string }> = {
  filme: { label: 'Filmes', emoji: '🎬' },
  serie: { label: 'Séries', emoji: '📺' },
  livro: { label: 'Livros', emoji: '📚' },
  hq: { label: 'Quadrinhos', emoji: '💬' },
  musica: { label: 'Música', emoji: '🎵' },
  podcast: { label: 'Podcasts', emoji: '🎧' },
  canal: { label: 'Canais de vídeo', emoji: '▶️' },
  noticias: { label: 'Notícias fáceis', emoji: '📰' },
  ferramenta: { label: 'Dicionários e ferramentas', emoji: '🧰' },
  jogo: { label: 'Jogos', emoji: '🎮' },
};
