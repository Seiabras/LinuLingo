import { EXERCITOS } from './exercitos-jogos';
import { TEMAS_JOGO, type TemaJogoId } from './temas-jogos';
import type { EfeitoJogo } from '@/services/sons-jogos';
import type { MancalaSemente } from '@/services/jogos-prefs';

/**
 * Loja dos jogos do conhecimento (dentro da Loja do Linu, paga com krill; pedido do dono, 11/10/2026):
 *   - tabuleiro: os temas de tabuleiro (cores, textura das casas, padrão da moldura);
 *   - jogador: os exércitos (as figuras das peças de cada jogador);
 *   - jogo: peças especiais de um jogo só, com feitio próprio (moeda, concha, âmbar…), ou o
 *     tabuleiro e as sementes das mancalas (campo `mancala`, em vez de `pecas`);
 *   - pacotes: tudo de um tema (Brasil, Japão…) junto, mais barato que as peças separadas.
 * Os ids levam o tipo na frente (`tabuleiro:deserto`, `jogador:piratas`, `jogo:go-japao`, `pacote:egito`).
 * Na loja dá para chegar a cada peça por dois caminhos: Pacotes › Brasil (tudo junto) ou
 * Xadrez › Peças › Brasil (uma peça só); itens sem pacote são avulsos.
 */

export type TipoItem = 'tabuleiro' | 'jogador' | 'jogo';
export type FeitioPeca = 'moeda' | 'concha' | 'ardosia' | 'ambar' | 'osso' | 'lapis' | 'areia' | 'flor' | 'vidro';

/** o tabuleiro e as sementes de uma coleção de mancala (oware e Kalah compartilham a mesma escolha) */
export interface SkinMancala {
  nome: string;
  tabua: string;
  borda: string;
  cova: string;
  covaJogavel: string;
  som: EfeitoJogo;
  semente: MancalaSemente;
}

/**
 * Uma peça especial de um jogo: o feitio e a cor de cada lado. `pecas[0]` é o lado escuro (ou o
 * primeiro de cor, como o vermelho do Ligue 4) e `pecas[1]`, o claro. As mancalas (oware e Kalah)
 * usam `mancala` em vez de `pecas` — o jogo delas não tem peças redondas, e vale para os dois jogos
 * de uma vez (`jogo: 'mancala'`).
 */
export interface SkinJogo {
  jogo: string;
  pecas?: [{ feitio: FeitioPeca; cor: string }, { feitio: FeitioPeca; cor: string }];
  mancala?: SkinMancala;
  /** o exército cujo emblema (a figura do peão) vai gravado na peça */
  emblemaDe?: string;
  /** a cor da estrutura do jogo (a grade do Ligue 4), quando a coleção muda também ela */
  moldura?: string;
}

/** os dois jogos de mancala, que compartilham as coleções de tabuleiro/sementes (`skin.jogo === 'mancala'`) */
export const JOGOS_MANCALA = ['oware', 'kalah', 'bao'];
// as mancalas de países que viraram jogos próprios usam as mesmas coleções da loja
JOGOS_MANCALA.push('pallanguzhi', 'toguz-korgool', 'sungka');

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
  nome: 'Ligue 4 do cempasúchil',
  preco: 30,
  origem: 'México',
  sobre: 'Peças em forma de flor: o laranja do cempasúchil, a flor dos altares do Dia dos Mortos, contra o magenta do papel picado.',
  skin: { jogo: 'conecta4', pecas: [{ feitio: 'flor', cor: '#FF8C00' }, { feitio: 'flor', cor: '#C2187A' }] },
});

// Coleções do Ligue 4 com as cores de cada país (pedido do dono, 11/10/2026: temas para os jogos que não
// usam os tabuleiros de casas). As fichas e a grade mudam juntas.
SKINS.push(
  {
    id: 'jogo:conecta4-brasil',
    tipo: 'jogo',
    pacote: 'brasil',
    jogos: ['conecta4'],
    nome: 'Ligue 4 verde-amarelo',
    preco: 30,
    origem: 'Brasil',
    sobre: 'Fichas verdes e amarelas numa grade azul: as cores da bandeira do Brasil.',
    skin: { jogo: 'conecta4', pecas: [{ feitio: 'moeda', cor: '#009C3B' }, { feitio: 'moeda', cor: '#FFDF00' }], moldura: '#002776' },
  },
  {
    id: 'jogo:conecta4-cerejeiras',
    tipo: 'jogo',
    pacote: 'japao',
    jogos: ['conecta4'],
    nome: 'Ligue 4 das cerejeiras',
    preco: 30,
    origem: 'Japão',
    sobre: 'Flores de cerejeira cor-de-rosa contra o vermelho do sol da bandeira do Japão, numa grade de laca preta.',
    skin: { jogo: 'conecta4', pecas: [{ feitio: 'moeda', cor: '#BC002D' }, { feitio: 'flor', cor: '#F4A7C0' }], moldura: '#1B1B1B' },
  },
  {
    id: 'jogo:conecta4-india',
    tipo: 'jogo',
    pacote: 'india',
    jogos: ['conecta4'],
    nome: 'Ligue 4 açafrão e verde',
    preco: 30,
    origem: 'Índia',
    sobre: 'Fichas cor de açafrão e verdes numa grade azul-marinho: as cores da bandeira da Índia, a do açafrão em cima e a do verde embaixo, com a roda azul no meio.',
    skin: { jogo: 'conecta4', pecas: [{ feitio: 'flor', cor: '#FF9933' }, { feitio: 'moeda', cor: '#138808' }], moldura: '#000080' },
  },
);

// Coleções para os jogos que ainda não tinham nenhuma (pedido do dono, 11/10/2026).
SKINS.push(
  {
    id: 'jogo:fanorona-pedra-concha',
    tipo: 'jogo',
    jogos: ['fanorona'],
    nome: 'Fanorona de pedra e concha',
    preco: 30,
    origem: 'Madagascar',
    sobre: 'Peças de pedra escura e de concha clara, com as listras da concha à mostra, para o jogo de Madagascar.',
    skin: { jogo: 'fanorona', pecas: [{ feitio: 'ardosia', cor: '#2F3236' }, { feitio: 'concha', cor: '#F3ECDD' }] },
  },
  {
    id: 'jogo:abalone-gude',
    tipo: 'jogo',
    jogos: ['abalone'],
    nome: 'Abalone de bolinhas de gude',
    preco: 30,
    origem: 'Brincadeira do mundo todo',
    sobre: 'Bolinhas de gude de vidro, com a espiral colorida por dentro: azuis de um lado e cor de âmbar do outro.',
    skin: { jogo: 'abalone', pecas: [{ feitio: 'vidro', cor: '#2563EB' }, { feitio: 'vidro', cor: '#F59E0B' }] },
  },
);

// Mancalas de países (pedido do dono, 11/10/2026, item 13.5): o tabuleiro e as sementes de um jogo
// real de mancala de duas fileiras, de um país ou região (vale junto para o oware e o Kalah — são a
// mesma família de jogo, mesma escolha compartilhada que já existe no Personalizar grátis). O bao da
// Tanzânia (quatro fileiras) NÃO serve de fonte aqui: é outro jogo, com outras regras. Fontes:
// Wikipédia em inglês, artigos "Pallanguzhi", "Toguz korgool", "Sungka" e "Oware" (seção sobre as
// sementes do Caribe), consultados em 14/10/2026.
SKINS.push(
  {
    id: 'jogo:mancala-pallanguzhi',
    tipo: 'jogo',
    pacote: 'india',
    jogos: JOGOS_MANCALA,
    nome: 'Mancala indiano',
    preco: 30,
    origem: 'Tamil Nadu, Índia',
    sobre: 'Tabuleiro de metal — às vezes em forma de peixe — com conchas de búzio e sementes de tamarindo nas covas, como os tabuleiros tradicionais do sul da Índia.',
    skin: { jogo: 'mancala', mancala: { nome: 'Índia', tabua: '#D4AF37', borda: '#8A6A1A', cova: '#B8922A', covaJogavel: '#E0BE55', som: 'moeda', semente: 'buzios' } },
  },
  {
    id: 'jogo:mancala-toguzkorgool',
    tipo: 'jogo',
    jogos: JOGOS_MANCALA,
    nome: 'Mancala centro-asiático',
    preco: 30,
    origem: 'Quirguistão e Cazaquistão',
    sobre: 'Tabuleiro de madeira com pedrinhas nas covas e duas “kazans” (“caldeirão”, em quirguiz) nas pontas, onde cada jogador guarda o que já capturou — como os tabuleiros tradicionais da Ásia Central.',
    skin: { jogo: 'mancala', mancala: { nome: 'Ásia Central', tabua: '#C9B18A', borda: '#6E5A3A', cova: '#9C875E', covaJogavel: '#B6A174', som: 'madeira', semente: 'pedrinhas' } },
  },
  {
    id: 'jogo:mancala-sungka',
    tipo: 'jogo',
    jogos: JOGOS_MANCALA,
    nome: 'Mancala filipino',
    preco: 30,
    origem: 'Filipinas',
    sobre: 'Tabuleiro de madeira entalhada em forma de barco, com conchas de búzio nas covas — como os tabuleiros tradicionais das Filipinas.',
    skin: { jogo: 'mancala', mancala: { nome: 'Filipinas', tabua: '#C68642', borda: '#6B3F17', cova: '#8E5A28', covaJogavel: '#A8743A', som: 'madeira', semente: 'buzios' } },
  },
  {
    id: 'jogo:mancala-warri',
    tipo: 'jogo',
    pacote: 'piratas',
    jogos: JOGOS_MANCALA,
    nome: 'Mancala caribenho',
    preco: 30,
    origem: 'Caribe',
    sobre: 'Tabuleiro de madeira com a semente tradicional caribenha, a “nickernut” (Caesalpinia bonduc), lisa e brilhante.',
    skin: { jogo: 'mancala', mancala: { nome: 'Caribe', tabua: '#6E4A2E', borda: '#3A2614', cova: '#4E3419', covaJogavel: '#6B4A26', som: 'madeira-grave', semente: 'pedrinhas' } },
  },
);

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
  pacote('brasil', 'Brasil', 'Brasil', 'O calçadão de Copacabana e a madeira da Amazônia (dois tabuleiros, cada um com o seu som), a cerâmica marajoara, os exércitos da fauna e da flora do Brasil e o Ligue 4 verde-amarelo.'),
  pacote('mexico', 'México', 'México', 'O papel picado e a Talavera de Puebla (dois tabuleiros), os exércitos das calaveras do Dia dos Mortos, dos cactos e do mariachi, e o Ligue 4 do cempasúchil.'),
  pacote('reino-unido', 'Reino Unido', 'Reino Unido', 'Londres na chuva (com névoa e chuva em volta do tabuleiro), o tartan escocês e o exército de Londres: coroa, leão, unicórnio, Big Ben, guarda-chuva e bule de chá.'),
  pacote('deserto', 'Deserto', 'Arábia e Saara', 'As dunas, o zellige marroquino, o exército do deserto (camelo, oásis, xeique) e as damas das dunas.'),
  pacote('piratas', 'Piratas', 'Caribe e mares do mundo', 'O convés pirata, o exército pirata (capitão, galeão, canhão), o reversi de dobrões e o warri caribenho (mancala).'),
  pacote('vikings', 'Vikings', 'Escandinávia', 'O salão viking, o exército viking (chefe, drakkar, casa longa) e o hnefatafl de âmbar e osso.'),
  pacote('japao', 'Japão', 'Japão', 'A primavera japonesa, o exército do Japão feudal (samurai, katana, pagode), o Go de concha e ardósia e o Ligue 4 das cerejeiras.'),
  pacote('india', 'Índia', 'Índia', 'O rangoli (com pétalas caindo em volta do tabuleiro), o exército da Índia (tigre, lótus, elefante), o Ligue 4 açafrão e verde e o pallanguzhi indiano (mancala).'),
  pacote('china', 'China', 'China', 'O jade chinês e o exército da China (dragão, panda, pagode).'),
  pacote('grecia', 'Grécia antiga', 'Grécia', 'O tabuleiro da Grécia antiga e o exército grego (coroa de louros, coruja de Atena, cavalo de Troia).'),
  pacote('russia', 'Rússia', 'Rússia', 'A khokhloma russa e o exército da Rússia (urso, matriosca, Catedral de São Basílio).'),
  pacote('andes', 'Andes', 'Peru e Andes', 'O tecido andino e o exército dos Andes (condor, lhama, siku, batata).'),
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

/**
 * A peça especial ativa de um jogo, se alguma das escolhidas for dele. O oware e o Kalah
 * compartilham as coleções de mancala (`skin.jogo === 'mancala'`), do mesmo jeito que já
 * compartilham o tabuleiro e as sementes grátis do Personalizar.
 */
export function skinDoJogo(jogo: string, ativos: readonly string[]): SkinJogo | undefined {
  for (const id of ativos) {
    const s = ITENS_LOJA.find((i) => i.id === id)?.skin;
    if (s?.jogo === jogo || (s?.jogo === 'mancala' && JOGOS_MANCALA.includes(jogo))) return s;
  }
  return undefined;
}
