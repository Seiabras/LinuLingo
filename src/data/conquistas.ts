import { TEMAS_JOGO, type TemaJogoId } from './temas-jogos';

/**
 * Passaporte de conquistas (pedido do dono, 11/10/2026): conquistas do app inteiro, cada uma um
 * carimbo no passaporte do Linu, mostradas no perfil. Todas são contadas a partir do que o app já
 * guarda (sequência, lições, histórias, figurinhas, partidas…), sem nada a mais para o aluno fazer.
 * A dos jogos é o “Jogador mundial”: vencer uma partida com cada tema de tabuleiro, que dá ao Linu
 * um tabuleiro de xadrez para segurar.
 */

export type CategoriaConquista = 'estudo' | 'idiomas' | 'cultura' | 'jogos';

export const CATEGORIAS_CONQUISTA: { id: CategoriaConquista; nome: string; cor: string }[] = [
  { id: 'estudo', nome: 'Estudo', cor: '#F97316' },
  { id: 'idiomas', nome: 'Idiomas', cor: '#2563EB' },
  { id: 'cultura', nome: 'Cultura', cor: '#9333EA' },
  { id: 'jogos', nome: 'Jogos', cor: '#059669' },
];

/** O que o app sabe do aluno para medir as conquistas. */
export interface DadosConquistas {
  /** a maior sequência de dias já alcançada (a atual entra também) */
  melhorSequencia: number;
  xp: number;
  licoes: number;
  idiomasEstudados: number;
  familiasEstudadas: number;
  cursosCompletos: number;
  historias: number;
  figurinhas: number;
  vitoriasNosJogos: number;
  /** os temas de tabuleiro com que o aluno já venceu uma partida */
  temasVencidos: string[];
  cursosDeJogoCompletos: number;
  pacotesCompletos: number;
}

export interface Conquista {
  id: string;
  nome: string;
  descricao: string;
  categoria: CategoriaConquista;
  /** o ícone do carimbo (nome do lucide-react-native, ver PassaporteCard) */
  icone: 'flame' | 'star' | 'book' | 'globe' | 'languages' | 'graduation' | 'scroll' | 'sticker' | 'trophy' | 'crown' | 'gift' | 'map';
  meta: number;
  medir: (d: DadosConquistas) => number;
  /** a roupinha do Linu que a conquista dá de prêmio */
  premio?: string;
}

/** Todos os temas de tabuleiro, para o “Jogador mundial”. */
export const TODOS_OS_TEMAS = Object.keys(TEMAS_JOGO) as TemaJogoId[];

export const CONQUISTAS: Conquista[] = [
  { id: 'sequencia-3', nome: 'Primeiros passos', descricao: '3 dias seguidos de estudo.', categoria: 'estudo', icone: 'flame', meta: 3, medir: (d) => d.melhorSequencia },
  { id: 'sequencia-7', nome: 'Uma semana inteira', descricao: '7 dias seguidos de estudo.', categoria: 'estudo', icone: 'flame', meta: 7, medir: (d) => d.melhorSequencia },
  { id: 'sequencia-30', nome: 'Um mês sem parar', descricao: '30 dias seguidos de estudo.', categoria: 'estudo', icone: 'flame', meta: 30, medir: (d) => d.melhorSequencia },
  { id: 'sequencia-100', nome: 'Cem dias', descricao: '100 dias seguidos de estudo.', categoria: 'estudo', icone: 'flame', meta: 100, medir: (d) => d.melhorSequencia },
  { id: 'sequencia-365', nome: 'Volta ao Sol', descricao: '365 dias seguidos de estudo.', categoria: 'estudo', icone: 'crown', meta: 365, medir: (d) => d.melhorSequencia },
  { id: 'xp-1000', nome: 'Mil pontos', descricao: 'Juntar 1.000 de XP.', categoria: 'estudo', icone: 'star', meta: 1000, medir: (d) => d.xp },
  { id: 'xp-10000', nome: 'Dez mil pontos', descricao: 'Juntar 10.000 de XP.', categoria: 'estudo', icone: 'star', meta: 10000, medir: (d) => d.xp },
  { id: 'licoes-10', nome: 'Aluno dedicado', descricao: 'Terminar 10 lições.', categoria: 'estudo', icone: 'book', meta: 10, medir: (d) => d.licoes },
  { id: 'licoes-100', nome: 'Cem lições', descricao: 'Terminar 100 lições.', categoria: 'estudo', icone: 'book', meta: 100, medir: (d) => d.licoes },
  { id: 'licoes-500', nome: 'Quinhentas lições', descricao: 'Terminar 500 lições.', categoria: 'estudo', icone: 'book', meta: 500, medir: (d) => d.licoes },
  { id: 'idiomas-3', nome: 'Poliglota', descricao: 'Estudar 3 idiomas diferentes.', categoria: 'idiomas', icone: 'languages', meta: 3, medir: (d) => d.idiomasEstudados },
  { id: 'idiomas-10', nome: 'Babel', descricao: 'Estudar 10 idiomas diferentes.', categoria: 'idiomas', icone: 'languages', meta: 10, medir: (d) => d.idiomasEstudados },
  { id: 'familias-5', nome: 'Árvore das línguas', descricao: 'Estudar idiomas de 5 famílias diferentes.', categoria: 'idiomas', icone: 'globe', meta: 5, medir: (d) => d.familiasEstudadas },
  { id: 'curso-completo', nome: 'Curso completo', descricao: 'Terminar todas as lições de um curso de idioma.', categoria: 'idiomas', icone: 'graduation', meta: 1, medir: (d) => d.cursosCompletos },
  { id: 'cursos-5', nome: 'Cinco diplomas', descricao: 'Terminar 5 cursos de idioma inteiros.', categoria: 'idiomas', icone: 'graduation', meta: 5, medir: (d) => d.cursosCompletos },
  { id: 'historias-10', nome: 'Contador de histórias', descricao: 'Chegar ao fim de 10 histórias.', categoria: 'cultura', icone: 'scroll', meta: 10, medir: (d) => d.historias },
  { id: 'figurinhas-50', nome: 'Colecionador', descricao: 'Ter 50 figurinhas diferentes no álbum.', categoria: 'cultura', icone: 'sticker', meta: 50, medir: (d) => d.figurinhas },
  { id: 'primeira-vitoria', nome: 'Primeira vitória', descricao: 'Vencer uma partida num jogo do conhecimento.', categoria: 'jogos', icone: 'trophy', meta: 1, medir: (d) => d.vitoriasNosJogos },
  { id: 'vitorias-25', nome: 'Estrategista', descricao: 'Vencer 25 partidas nos jogos do conhecimento.', categoria: 'jogos', icone: 'trophy', meta: 25, medir: (d) => d.vitoriasNosJogos },
  { id: 'curso-de-jogo', nome: 'Aprendiz de mestre', descricao: 'Terminar um curso “Aprenda a jogar”.', categoria: 'jogos', icone: 'graduation', meta: 1, medir: (d) => d.cursosDeJogoCompletos },
  { id: 'pacote-completo', nome: 'Viajante', descricao: 'Ter um pacote de tema completo da loja dos jogos.', categoria: 'jogos', icone: 'gift', meta: 1, medir: (d) => d.pacotesCompletos },
  {
    id: 'jogador-mundial',
    nome: 'Jogador mundial',
    descricao: 'Vencer uma partida com cada tema de tabuleiro. Prêmio: um tabuleiro de xadrez para o Linu segurar.',
    categoria: 'jogos',
    icone: 'map',
    meta: TODOS_OS_TEMAS.length,
    medir: (d) => TODOS_OS_TEMAS.filter((t) => d.temasVencidos.includes(t)).length,
    premio: 'tabuleiroxadrez',
  },
];

export interface EstadoConquista {
  conquista: Conquista;
  progresso: number;
  feita: boolean;
}

/** O estado de cada conquista com os dados do aluno (o progresso não passa da meta). */
export function avaliarConquistas(d: DadosConquistas): EstadoConquista[] {
  return CONQUISTAS.map((c) => {
    const v = Math.max(0, c.medir(d));
    return { conquista: c, progresso: Math.min(v, c.meta), feita: v >= c.meta };
  });
}
