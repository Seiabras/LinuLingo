/**
 * Os instrumentos dos cursos e as afinações de cada um (pedido do dono, 17/10/2026: “tem que poder
 * escolher entre o de Si♭ e o de Dó, assim como nos outros instrumentos que variam”, como o Tonestro).
 *
 * Instrumento transpositor: a nota escrita na partitura não é a nota que soa. `transposicao` é quantos
 * semitons o som fica acima (+) ou abaixo (−) do escrito: o clarinete em Si♭ soa uma 2ª maior abaixo
 * (−2), o em Lá uma 3ª menor abaixo (−3), o em Mi♭ (requinta) uma 3ª menor acima (+3) e o em Dó soa
 * como está escrito (0). Fontes: teoria.com, “Transposing instruments”
 * (https://teoria.com/en/articles/transposing/01.php); Simple Wikipedia, “Transposing instrument”.
 *
 * O dedilhado do clarinete é o básico do sistema Boehm, o primeiro que os métodos ensinam (do sol
 * solto ao sol grave, a mão esquerda primeiro): The Woodwind Fingering Guide, “Boehm-system clarinet,
 * chalumeau register” (https://www.wfg.woodwind.org/clarinet/cl_bas_1.html); Loughborough University,
 * clarinet note finger chart. É o mesmo em todos os clarinetes do sistema Boehm (Si♭, Lá, Dó, Mi♭).
 */
export interface Afinacao {
  id: string;
  nome: string;
  transposicao: number;
  sobre: string;
}

export interface InstrumentoCurso {
  id: string;
  nome: string;
  afinacoes: Afinacao[];
}

export const CLARINETE: InstrumentoCurso = {
  id: 'clarinete',
  nome: 'Clarinete',
  afinacoes: [
    { id: 'sib', nome: 'Si♭', transposicao: -2, sobre: 'O mais comum, das bandas e orquestras: soa um tom abaixo do escrito.' },
    { id: 'do', nome: 'Dó', transposicao: 0, sobre: 'Soa como está escrito, sem transpor.' },
    { id: 'la', nome: 'Lá', transposicao: -3, sobre: 'Usado na orquestra: soa uma terça menor abaixo do escrito.' },
    { id: 'mib', nome: 'Mi♭ (requinta)', transposicao: 3, sobre: 'O pequeno e agudo: soa uma terça menor acima do escrito.' },
  ],
};

/** Os furos e chaves que o desenho do clarinete mostra. */
export type Furo = 'polegar' | 'e1' | 'e2' | 'e3' | 'd1' | 'd2' | 'd3';

/** O dedilhado de cada nota escrita (MIDI): os furos tapados. Do sol solto (sol 4) ao sol grave (sol 3). */
export const DEDILHADO_CLARINETE: Record<number, Furo[]> = {
  67: [],
  65: ['polegar'],
  64: ['polegar', 'e1'],
  62: ['polegar', 'e1', 'e2'],
  60: ['polegar', 'e1', 'e2', 'e3'],
  59: ['polegar', 'e1', 'e2', 'e3', 'd1'],
  57: ['polegar', 'e1', 'e2', 'e3', 'd1', 'd2'],
  55: ['polegar', 'e1', 'e2', 'e3', 'd1', 'd2', 'd3'],
};

export const NOME_DO_DEDO: Record<Furo, string> = {
  polegar: 'polegar esquerdo (atrás)',
  e1: 'indicador esquerdo',
  e2: 'médio esquerdo',
  e3: 'anelar esquerdo',
  d1: 'indicador direito',
  d2: 'médio direito',
  d3: 'anelar direito',
};
