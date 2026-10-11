import { EXERCITOS } from './exercitos-jogos';
import { TEMAS_JOGO, type TemaJogoId } from './temas-jogos';

/**
 * Loja dos jogos do conhecimento (dentro da Loja do Linu, paga com krill; pedido do dono, 11/10/2026):
 *   - tabuleiro: os temas de tabuleiro (cores, textura das casas, padrão da moldura);
 *   - jogador: os exércitos (as figuras das peças de cada jogador);
 *   - jogo: peças especiais de um jogo só, com feitio próprio (moeda, concha, âmbar…);
 *   - pacotes: tudo de um tema (Brasil, Japão…) junto, mais barato que as peças separadas.
 * Os ids levam o tipo na frente (`tabuleiro:deserto`, `jogador:piratas`, `jogo:go-japao`, `pacote:egito`).
 * Na loja dá para chegar a cada peça por dois caminhos: Pacotes › Brasil (tudo junto) ou
 * Xadrez › Peças › Brasil (uma peça só); itens sem pacote são avulsos.
 */

export type TipoItem = 'tabuleiro' | 'jogador' | 'jogo';
export type FeitioPeca = 'moeda' | 'concha' | 'ardosia' | 'ambar' | 'osso' | 'lapis' | 'areia' | 'flor';

/**
 * Uma peça especial de um jogo: o feitio e a cor de cada lado. `pecas[0]` é o lado escuro (ou o
 * primeiro de cor, como o vermelho do Conecta 4) e `pecas[1]`, o claro.
 */
export interface SkinJogo {
  jogo: string;
  pecas: [{ feitio: FeitioPeca; cor: string }, { feitio: FeitioPeca; cor: string }];
  /** o exército cujo emblema (a figura do peão) vai gravado na peça */
  emblemaDe?: string;
}

export interface ItemLoja {
  id: string;
  tipo: TipoItem;
  nome: string;
  preco: number;
  origem: string;
  sobre: string;
  /** o pacote do tema (sem pacote, o item é avulso) */
  pacote?: string;
  /** em que jogos o item vale ('*' = todos) */
  jogos: string[];
  skin?: SkinJogo;
}

export interface PacoteLoja {
  id: string;
  nome: string;
  origem: string;
  sobre: string;
  itens: string[];
  preco: number;
}

/** os jogos em que os exércitos aparecem (as figuras no xadrez; o emblema nas damas e no hnefatafl) */
export const JOGOS_COM_EXERCITO = ['xadrez', 'damas', 'hnefatafl'];

const SKINS: ItemLoja[] = [
  {
    id: 'jogo:damas-deserto',
    tipo: 'jogo',
    pacote: 'deserto',
    jogos: ['damas'],
    nome: 'Damas das dunas',
    preco: 30,
    origem: 'Arábia e Saara',
    sobre: 'Peças cor de areia e azul-anil com um camelo gravado. O anil é o azul dos turbantes e mantos dos tuaregues do Saara.',
    skin: { jogo: 'damas', pecas: [{ feitio: 'areia', cor: '#1E3A8A' }, { feitio: 'areia', cor: '#D9B27A' }], emblemaDe: 'deserto' },
  },
  {
    id: 'jogo:reversi-piratas',
    tipo: 'jogo',
    pacote: 'piratas',
    jogos: ['reversi'],
    nome: 'Reversi de dobrões',
    preco: 30,
    origem: 'Caribe e mares do mundo',
    sobre: 'Moedas de ouro e de prata, com borda serrilhada e um sol gravado, como num baú de tesouro.',
    skin: { jogo: 'reversi', pecas: [{ feitio: 'moeda', cor: '#C9A227' }, { feitio: 'moeda', cor: '#B8BCC2' }] },
  },
  {
    id: 'jogo:hnefatafl-vikings',
    tipo: 'jogo',
    pacote: 'vikings',
    jogos: ['hnefatafl'],
    nome: 'Hnefatafl de âmbar e osso',
    preco: 30,
    origem: 'Escandinávia',
    sobre: 'Os atacantes em âmbar translúcido e os defensores em osso entalhado.',
    skin: { jogo: 'hnefatafl', pecas: [{ feitio: 'ambar', cor: '#C8781E' }, { feitio: 'osso', cor: '#EDE3CC' }] },
  },
  {
    id: 'jogo:go-japao',
    tipo: 'jogo',
    pacote: 'japao',
    jogos: ['go'],
    nome: 'Go de concha e ardósia',
    preco: 30,
    origem: 'Japão',
    sobre: 'No Japão, as pedras tradicionais do Go são de ardósia (as pretas) e de concha (as brancas), com as listras da concha à mostra.',
    skin: { jogo: 'go', pecas: [{ feitio: 'ardosia', cor: '#26282B' }, { feitio: 'concha', cor: '#F5F2EA' }] },
  },
  {
    id: 'jogo:moinho-egito',
    tipo: 'jogo',
    pacote: 'egito',
    jogos: ['moinho'],
    nome: 'Trilha de lápis-lazúli e ouro',
    preco: 30,
    origem: 'Egito',
    sobre: 'Peças de pedra azul com pintas douradas e de ouro, os materiais das joias do Egito antigo.',
    skin: { jogo: 'moinho', pecas: [{ feitio: 'lapis', cor: '#1F3F99' }, { feitio: 'moeda', cor: '#D4A017' }] },
  },
];

SKINS.push({
  id: 'jogo:conecta4-cempasuchil',
  tipo: 'jogo',
  pacote: 'mexico',
  jogos: ['conecta4'],
  nome: 'Conecta 4 do cempasúchil',
  preco: 30,
  origem: 'México',
  sobre: 'Peças em forma de flor: o laranja do cempasúchil, a flor dos altares do Dia dos Mortos, contra o magenta do papel picado.',
  skin: { jogo: 'conecta4', pecas: [{ feitio: 'flor', cor: '#FF8C00' }, { feitio: 'flor', cor: '#C2187A' }] },
});

const TABULEIROS: ItemLoja[] = (Object.values(TEMAS_JOGO) as (typeof TEMAS_JOGO)[TemaJogoId][])
  .filter((t) => t.preco)
  .map((t) => ({ id: `tabuleiro:${t.id}`, tipo: 'tabuleiro' as const, nome: t.nome, preco: t.preco!, origem: t.origem ?? '', sobre: t.sobre ?? '', pacote: t.pacote, jogos: ['*'] }));

const JOGADORES: ItemLoja[] = EXERCITOS.filter((e) => e.preco > 0).map((e) => ({ id: `jogador:${e.id}`, tipo: 'jogador' as const, nome: e.nome, preco: e.preco, origem: e.origem, sobre: e.sobre, pacote: e.pacote, jogos: JOGOS_COM_EXERCITO }));

export const ITENS_LOJA: ItemLoja[] = [...TABULEIROS, ...JOGADORES, ...SKINS];

const soma = (ids: string[]) => ids.reduce((s, id) => s + (ITENS_LOJA.find((i) => i.id === id)?.preco ?? 0), 0);

/** O pacote leva tudo o que é do tema, por cerca de 3/4 do preço das peças separadas. */
function pacote(id: string, nome: string, origem: string, sobre: string): PacoteLoja {
  const itens = ITENS_LOJA.filter((i) => i.pacote === id).map((i) => i.id);
  return { id: `pacote:${id}`, nome, origem, sobre, itens, preco: Math.round((soma(itens) * 0.75) / 5) * 5 };
}

export const PACOTES: PacoteLoja[] = [
  pacote('brasil', 'Brasil', 'Brasil', 'O calçadão de Copacabana e a madeira da Amazônia (dois tabuleiros, cada um com o seu som), a cerâmica marajoara e os exércitos da fauna e da flora do Brasil.'),
  pacote('mexico', 'México', 'México', 'O papel picado e a Talavera de Puebla (dois tabuleiros), os exércitos das calaveras do Dia dos Mortos, dos cactos e do mariachi, e o Conecta 4 do cempasúchil.'),
  pacote('reino-unido', 'Reino Unido', 'Reino Unido', 'Londres na chuva (com névoa e chuva em volta do tabuleiro), o tartan escocês e o exército de Londres: coroa, leão, unicórnio, Big Ben, guarda-chuva e bule de chá.'),
  pacote('deserto', 'Deserto', 'Arábia e Saara', 'As dunas, o zellige marroquino, o exército do deserto (camelo, oásis, xeique) e as damas das dunas.'),
  pacote('piratas', 'Piratas', 'Caribe e mares do mundo', 'O convés pirata, o exército pirata (capitão, galeão, canhão) e o reversi de dobrões.'),
  pacote('vikings', 'Vikings', 'Escandinávia', 'O salão viking, o exército viking (chefe, drakkar, casa longa) e o hnefatafl de âmbar e osso.'),
  pacote('japao', 'Japão', 'Japão', 'A primavera japonesa, o exército do Japão feudal (samurai, katana, pagode) e o Go de concha e ardósia.'),
  pacote('egito', 'Egito antigo', 'Egito', 'O tabuleiro do Egito antigo, o exército egípcio (faraó, pirâmide, ankh) e a trilha de lápis-lazúli e ouro.'),
];

/** Os itens da loja que valem num jogo, de um tipo (tabuleiros valem em todos). */
export function itensDoJogo(jogo: string, tipo: TipoItem | 'pecas'): ItemLoja[] {
  return ITENS_LOJA.filter((i) => (tipo === 'pecas' ? i.tipo !== 'tabuleiro' : i.tipo === tipo) && (i.jogos.includes('*') || i.jogos.includes(jogo)));
}

/** Tudo o que as compras dão direito (as coleções viram as peças delas). */
export function possuidos(compras: readonly string[]): Set<string> {
  const out = new Set<string>();
  for (const id of compras) {
    out.add(id);
    PACOTES.find((c) => c.id === id)?.itens.forEach((i) => out.add(i));
  }
  return out;
}

/** O preço de uma compra agora: o pacote cobra só a parte do que ainda falta, com o mesmo desconto. */
export function precoAgora(id: string, compras: readonly string[]): number {
  const tem = possuidos(compras);
  const c = PACOTES.find((x) => x.id === id);
  if (!c) return ITENS_LOJA.find((i) => i.id === id)?.preco ?? 0;
  const falta = c.itens.filter((i) => !tem.has(i));
  return Math.round((c.preco * soma(falta)) / Math.max(1, soma(c.itens)));
}

/** A peça especial ativa de um jogo, se alguma das escolhidas for dele. */
export function skinDoJogo(jogo: string, ativos: readonly string[]): SkinJogo | undefined {
  for (const id of ativos) {
    const s = ITENS_LOJA.find((i) => i.id === id)?.skin;
    if (s?.jogo === jogo) return s;
  }
  return undefined;
}
