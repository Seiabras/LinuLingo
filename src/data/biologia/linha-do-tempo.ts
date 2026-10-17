/**
 * A linha do tempo da vida, em anos atrás. Fontes:
 * - idade da Terra, cerca de 4,54 bilhões de anos: datação radiométrica de meteoritos (Dalrymple, “The
 *   Age of the Earth”, 1991; o valor que o USGS adota);
 * - estromatólitos da Formação Dresser, Austrália, cerca de 3,48 bilhões de anos (Baumgartner et al.
 *   2019, Geology; ainda discutido, como diz a frase);
 * - início do Cambriano (538,8 milhões), do Triássico (251,9 milhões) e o fim do Cretáceo (66,0
 *   milhões): International Chronostratigraphic Chart, ICS, versão 2024/12;
 * - primeiros dinossauros, cerca de 230 milhões de anos, na Formação Ischigualasto, Argentina
 *   (Martinez et al. 2011, Science 331: 206–210, que descreve o Eodromaeus e cita o Eoraptor);
 * - Waimanu manneringi, o pinguim mais antigo conhecido, 61,6 a 60,5 milhões de anos, Nova Zelândia
 *   (Slack et al. 2006, Molecular Biology and Evolution 23: 1144–1155; NZ Birds Online);
 * - Pakicetus, uma das primeiras baleias, cerca de 49 milhões de anos, no Paquistão (Kuldana
 *   Formation; Gingerich et al. 1983, Science);
 * - Homo sapiens de Jebel Irhoud, Marrocos, cerca de 300 mil anos (Hublin et al. 2017, Nature 546:
 *   289–292).
 */
export interface MarcoDaVida {
  anos: number;
  titulo: string;
  sobre: string;
  emoji: string;
}

export const IDADE_TERRA = 4_540_000_000;

export const MARCOS_DA_VIDA: MarcoDaVida[] = [
  { anos: 4_540_000_000, emoji: '🌍', titulo: 'A Terra se forma', sobre: 'A idade medida em meteoritos que nasceram junto com o Sistema Solar.' },
  { anos: 3_480_000_000, emoji: '🪨', titulo: 'Os primeiros sinais de vida', sobre: 'Estromatólitos na Austrália: camadas de rocha que seriam feitas por micróbios. Alguns cientistas ainda discutem se são mesmo vida.' },
  { anos: 538_800_000, emoji: '🦐', titulo: 'Começa o Cambriano', sobre: 'Os animais com casca e esqueleto aparecem em grande número nos fósseis.' },
  { anos: 251_900_000, emoji: '🌋', titulo: 'Começa o Triássico', sobre: 'Logo depois da maior extinção da história da Terra, no fim do Permiano.' },
  { anos: 230_000_000, emoji: '🦖', titulo: 'Os primeiros dinossauros', sobre: 'Na Formação Ischigualasto, na Argentina, vivem o Eoraptor e outros dos dinossauros mais antigos que se conhecem.' },
  { anos: 66_000_000, emoji: '☄️', titulo: 'Fim do Cretáceo', sobre: 'A extinção que acaba com os dinossauros (menos as aves, que são dinossauros).' },
  { anos: 61_000_000, emoji: '🐧', titulo: 'O primeiro pinguim', sobre: 'Waimanu, na Nova Zelândia: o pinguim mais antigo conhecido, do tamanho de um pinguim-imperador.' },
  { anos: 49_000_000, emoji: '🐋', titulo: 'Uma das primeiras baleias', sobre: 'Pakicetus, no Paquistão: um bicho de quatro patas que andava na beira da água.' },
  { anos: 300_000, emoji: '🧑', titulo: 'O Homo sapiens', sobre: 'Os fósseis mais antigos da nossa espécie, em Jebel Irhoud, no Marrocos.' },
];

/** A hora do dia em que o marco cairia se a história inteira da Terra coubesse em 24 horas. */
export function horaNoDia(anos: number): string {
  const seg = Math.round((1 - anos / IDADE_TERRA) * 24 * 3600);
  const h = Math.floor(seg / 3600);
  const m = Math.floor((seg % 3600) / 60);
  const s = seg % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/** O número de anos por extenso, em bilhões, milhões ou mil. */
export function anosPorExtenso(anos: number): string {
  const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
  if (anos >= 1e9) return `${fmt(anos / 1e9)} bilhões de anos`;
  if (anos >= 1e6) return `${fmt(anos / 1e6)} milhões de anos`;
  return `${fmt(anos / 1e3)} mil anos`;
}
