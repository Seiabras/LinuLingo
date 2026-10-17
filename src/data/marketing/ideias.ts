import type { MarcoArea } from '@/components/area/AreaTrilha';

/**
 * As abas de consulta da área Marketing: os modelos clássicos (aba Ideias), as pessoas que os criaram e
 * a propaganda no Brasil (aba Brasil). Fontes:
 * - 4 Ps: E. J. McCarthy, “Basic Marketing” (1960); 4 Cs: R. Lauterborn, “New Marketing Litany”,
 *   Advertising Age (1990); STP: W. R. Smith, Journal of Marketing (1956); AIDA: E. K. Strong,
 *   “Theories of Selling” (1925); Matriz de Ansoff: H. I. Ansoff, “Strategies for Diversification”,
 *   Harvard Business Review (1957); Matriz BCG: B. Henderson, “The Product Portfolio”, BCG (1970);
 *   ciclo de vida: T. Levitt, “Exploit the Product Life Cycle”, Harvard Business Review (1965).
 * - Pessoas: as obras citadas em `trilha.ts`; E. Bernays, “Propaganda” (1928); D. Ogilvy, “Confessions
 *   of an Advertising Man” (1963); P. Kotler, “Marketing Management” (1ª ed., 1967); Nobel de Economia
 *   de 2002 (nobelprize.org). Brasil: ESPM, “Nossa história” (espm.br); Washington Olivetto: obituários
 *   da imprensa brasileira, outubro de 2024.
 * - Marcos no Brasil: Biblioteca Nacional (Gazeta do Rio de Janeiro, 1808); Decreto nº 21.111/1932; Lei
 *   nº 4.680/1965; CONAR (conar.org.br); Leis nº 8.078/1990, 9.294/1996, 10.167/2000 e 13.709/2018
 *   (planalto.gov.br); Lei municipal de São Paulo nº 14.223/2006 (Cidade Limpa); Resolução Conanda nº
 *   163/2014.
 */

export interface Modelo {
  nome: string;
  origem: string;
  partes: string[];
  usar: string;
}

export const MODELOS_MKT: Modelo[] = [
  {
    nome: '4 Ps',
    origem: 'E. Jerome McCarthy, 1960',
    partes: ['Produto: o que se oferece', 'Preço: quanto custa e como se paga', 'Praça: onde chega ao cliente', 'Promoção: como o público fica sabendo'],
    usar: 'Para conferir se a oferta inteira combina, e não só o anúncio.',
  },
  {
    nome: '4 Cs',
    origem: 'Robert Lauterborn, 1990',
    partes: ['Cliente (no lugar do produto)', 'Custo para o cliente (no lugar do preço)', 'Conveniência (no lugar da praça)', 'Comunicação (no lugar da promoção)'],
    usar: 'Os 4 Ps vistos do lado de quem compra.',
  },
  {
    nome: 'STP',
    origem: 'Segmentação: Wendell R. Smith, 1956',
    partes: ['Segmentar: dividir o mercado em grupos', 'Targeting: escolher o público-alvo', 'Posicionar: decidir como ser lembrado'],
    usar: 'Antes de qualquer campanha: para quem, exatamente, é isto?',
  },
  {
    nome: 'AIDA',
    origem: 'Atribuída a E. St. Elmo Lewis, fim do século XIX',
    partes: ['Atenção', 'Interesse', 'Desejo', 'Ação'],
    usar: 'Para montar um anúncio ou uma página de venda passo a passo, e medir onde as pessoas desistem.',
  },
  {
    nome: 'Matriz de Ansoff',
    origem: 'H. Igor Ansoff, Harvard Business Review, 1957',
    partes: [
      'Penetração: o mesmo produto no mesmo mercado, vendendo mais',
      'Desenvolvimento de mercado: o mesmo produto num mercado novo',
      'Desenvolvimento de produto: um produto novo no mesmo mercado',
      'Diversificação: produto novo em mercado novo (a mais arriscada)',
    ],
    usar: 'Para decidir por onde a empresa vai crescer.',
  },
  {
    nome: 'Matriz BCG',
    origem: 'Bruce Henderson, Boston Consulting Group, 1970',
    partes: [
      'Estrela: mercado crescendo e participação alta',
      'Vaca leiteira: mercado parado e participação alta (dá o dinheiro)',
      'Interrogação: mercado crescendo e participação baixa',
      'Abacaxi (ou cão): mercado parado e participação baixa',
    ],
    usar: 'Para olhar todos os produtos de uma empresa juntos e decidir onde investir.',
  },
  {
    nome: 'Ciclo de vida do produto',
    origem: 'Popularizado por Theodore Levitt, Harvard Business Review, 1965',
    partes: ['Introdução: poucos conhecem', 'Crescimento: as vendas sobem rápido', 'Maturidade: todo mundo já tem', 'Declínio: as vendas caem'],
    usar: 'O marketing muda em cada fase: explicar o que é, ganhar dos concorrentes, renovar ou sair.',
  },
  {
    nome: 'Análise SWOT (FOFA)',
    origem: 'Ferramenta de planejamento dos anos 1960, de origem discutida',
    partes: ['Forças (dentro da empresa)', 'Fraquezas (dentro)', 'Oportunidades (fora, no mercado)', 'Ameaças (fora)'],
    usar: 'Uma página para ver, de uma vez, o que ajuda e o que atrapalha.',
  },
];

export interface PessoaMkt {
  nome: string;
  onde: string;
  fez: string;
}

export const PESSOAS_MKT_MUNDO: PessoaMkt[] = [
  { nome: 'E. St. Elmo Lewis', onde: 'EUA', fez: 'Publicitário a quem se atribui a fórmula AIDA, no fim do século XIX.' },
  { nome: 'Edward Bernays', onde: 'Áustria e EUA', fez: 'Um dos criadores das relações públicas; escreveu “Propaganda” (1928).' },
  { nome: 'Neil Borden', onde: 'EUA', fez: 'Professor de Harvard que deu nome ao “marketing mix”, o composto de marketing.' },
  { nome: 'E. Jerome McCarthy', onde: 'EUA', fez: 'Resumiu o composto de marketing nos 4 Ps, no livro “Basic Marketing” (1960).' },
  { nome: 'Theodore Levitt', onde: 'Alemanha e EUA', fez: 'Escreveu “Marketing Myopia” (1960): a empresa se define pela necessidade que atende.' },
  { nome: 'David Ogilvy', onde: 'Reino Unido e EUA', fez: 'Publicitário; escreveu “Confissões de um publicitário” (1963), defendendo anúncios com pesquisa e fatos.' },
  { nome: 'Philip Kotler', onde: 'EUA', fez: 'Autor de “Administração de Marketing” (1ª edição em 1967), o livro-texto mais usado do mundo na área.' },
  { nome: 'Al Ries e Jack Trout', onde: 'EUA', fez: 'Criaram a ideia de posicionamento (artigos de 1972, livro de 1981).' },
  { nome: 'Robert Cialdini', onde: 'EUA', fez: 'Juntou os seis princípios da persuasão em “Influence” (1984).' },
  { nome: 'Daniel Kahneman', onde: 'Israel e EUA', fez: 'Psicólogo; com Amos Tversky, estudou os atalhos da decisão. Nobel de Economia de 2002.' },
];

export const PESSOAS_MKT_BRASIL: PessoaMkt[] = [
  {
    nome: 'Assis Chateaubriand',
    onde: 'Paraíba e São Paulo',
    fez: 'Dono dos Diários Associados; trouxe a televisão ao Brasil com a TV Tupi, em 1950, e com ela a propaganda na TV.',
  },
  {
    nome: 'Rodolfo Lima Martensen',
    onde: 'São Paulo',
    fez: 'Fundou em 1951 a Escola de Propaganda do Museu de Arte de São Paulo, que virou a ESPM.',
  },
  {
    nome: 'Washington Olivetto',
    onde: 'São Paulo',
    fez: 'Publicitário (1951–2024) de campanhas como o “Garoto Bombril” e “O primeiro sutiã a gente nunca esquece”; fundou a W/Brasil.',
  },
];

export const MARCOS_MKT_BRASIL: MarcoArea[] = [
  {
    ano: '1808',
    titulo: 'Os primeiros anúncios impressos',
    sobre: 'Com a corte portuguesa chega a Impressão Régia, e a Gazeta do Rio de Janeiro, o primeiro jornal impresso no Brasil, começa a publicar anúncios.',
  },
  {
    ano: '1932',
    titulo: 'A propaganda no rádio',
    sobre: 'O Decreto nº 21.111 regulamenta o rádio e permite anúncios na programação. Nascem os programas com nome de patrocinador.',
  },
  { ano: '1950', titulo: 'A TV Tupi', sobre: 'Assis Chateaubriand inaugura em São Paulo a primeira emissora de televisão do Brasil, e a propaganda ganha imagem.' },
  { ano: '1951', titulo: 'A primeira escola de propaganda', sobre: 'Rodolfo Lima Martensen funda a Escola de Propaganda do MASP, hoje ESPM.' },
  { ano: '1965', titulo: 'A profissão de publicitário', sobre: 'A Lei nº 4.680 regulamenta a profissão de publicitário e de agenciador de propaganda.' },
  {
    ano: '1980',
    titulo: 'O CONAR',
    sobre: 'Agências, anunciantes e veículos criam o Conselho Nacional de Autorregulamentação Publicitária, que julga queixas contra anúncios.',
  },
  {
    ano: '1990',
    titulo: 'O Código de Defesa do Consumidor',
    sobre: 'A Lei nº 8.078 proíbe a publicidade enganosa e a abusiva e exige que a propaganda seja reconhecível como propaganda.',
  },
  {
    ano: '2000',
    titulo: 'Fim da propaganda de cigarro',
    sobre: 'A Lei nº 10.167 muda a Lei nº 9.294, de 1996, e tira a propaganda de cigarro da TV, do rádio, das revistas e dos outdoors.',
  },
  { ano: '2007', titulo: 'Cidade Limpa', sobre: 'Entra em vigor a lei municipal de São Paulo que tirou os outdoors da cidade e limitou o tamanho das fachadas.' },
  { ano: '2014', titulo: 'Publicidade e crianças', sobre: 'A Resolução nº 163 do Conanda considera abusiva a publicidade dirigida à criança.' },
  {
    ano: '2018',
    titulo: 'A Lei Geral de Proteção de Dados',
    sobre: 'A LGPD (Lei nº 13.709) diz como as empresas podem usar os dados pessoais, inclusive para anúncios e e-mails.',
  },
];
