import type { MarcoArea } from '@/components/area/AreaTrilha';

/**
 * As abas de consulta da área Arte: o círculo cromático e os desafios do Ateliê, a história da arte no
 * mundo e a arte no Brasil. Fontes:
 * - Círculo: o círculo de 12 cores dos pintores (primárias vermelho, amarelo e azul), como em J. Itten,
 *   “A arte da cor” (1961). As cores na tela são aproximações em RGB, só para o desenho.
 * - Movimentos e obras: as fichas dos museus que guardam cada obra (Louvre, Uffizi, Prado, MoMA, Musée
 *   d’Orsay, Museo Reina Sofía) e o Ministério da Cultura da França (Chauvet e Lascaux).
 * - Brasil: IPHAN (Serra da Capivara, Aleijadinho, arte kusiwa dos Wajãpi); UNESCO (Patrimônio Mundial
 *   da Serra da Capivara, 1991; Obra-prima do Patrimônio Oral e Imaterial, kusiwa, 2003); Museu
 *   Nacional de Belas Artes (Missão Artística Francesa, 1816, e Academia Imperial, 1826); Fundação
 *   Bienal de São Paulo; MASP; Projeto Portinari; Instituto Inhotim.
 */

export interface CorDoCirculo {
  nome: string;
  hex: string;
  tipo: 'primária' | 'secundária' | 'terciária';
}

/** O círculo dos pintores, em 12 cores, começando no amarelo e girando pelo laranja. */
export const CIRCULO: CorDoCirculo[] = [
  { nome: 'amarelo', hex: '#FDE047', tipo: 'primária' },
  { nome: 'amarelo-alaranjado', hex: '#FBBF24', tipo: 'terciária' },
  { nome: 'laranja', hex: '#F97316', tipo: 'secundária' },
  { nome: 'vermelho-alaranjado', hex: '#EF4444', tipo: 'terciária' },
  { nome: 'vermelho', hex: '#DC2626', tipo: 'primária' },
  { nome: 'vermelho-violeta', hex: '#BE185D', tipo: 'terciária' },
  { nome: 'violeta', hex: '#7E22CE', tipo: 'secundária' },
  { nome: 'azul-violeta', hex: '#4338CA', tipo: 'terciária' },
  { nome: 'azul', hex: '#1D4ED8', tipo: 'primária' },
  { nome: 'azul-esverdeado', hex: '#0E7490', tipo: 'terciária' },
  { nome: 'verde', hex: '#16A34A', tipo: 'secundária' },
  { nome: 'verde-amarelado', hex: '#84CC16', tipo: 'terciária' },
];

export type Harmonia = 'complementar' | 'analogas' | 'triade' | 'dividida';

/** As posições, no círculo de 12, das cores de cada harmonia, a partir da cor escolhida. */
export const HARMONIAS: { id: Harmonia; nome: string; curto: string; passos: number[]; sobre: string }[] = [
  { id: 'complementar', nome: 'Complementar', curto: 'Oposta', passos: [0, 6], sobre: 'A cor do lado oposto. É o contraste mais forte: uma faz a outra brilhar.' },
  { id: 'analogas', nome: 'Análogas', curto: 'Vizinhas', passos: [-1, 0, 1], sobre: 'As vizinhas. Combinam com calma, como as cores de um pôr do sol.' },
  { id: 'triade', nome: 'Tríade', curto: 'Tríade', passos: [0, 4, 8], sobre: 'Três cores à mesma distância. Viva e equilibrada, como as três primárias.' },
  { id: 'dividida', nome: 'Complementar dividida', curto: 'Dividida', passos: [0, 5, 7], sobre: 'Em vez da oposta, as duas vizinhas dela: contraste forte, mas mais suave.' },
];

export interface Desafio {
  titulo: string;
  tempo: string;
  como: string;
}

/** Desafios para fazer no papel (o app não guarda desenhos; o diário de desenhos é uma ideia para depois). */
export const DESAFIOS: Desafio[] = [
  { titulo: 'Os trilhos', tempo: '5 min', como: 'Desenhe uma linha do horizonte e um ponto de fuga no meio dela. Puxe dois trilhos do pé da folha até o ponto, e os dormentes cada vez mais juntos e mais curtos.' },
  { titulo: 'A bola com luz', tempo: '5 min', como: 'Desenhe um círculo. Escolha de onde vem a luz, escureça o lado oposto aos poucos e desenhe a sombra no chão, do lado contrário à luz.' },
  { titulo: 'Desenho às cegas', tempo: '2 min', como: 'Olhe para a sua mão e desenhe o contorno dela sem olhar para o papel, sem tirar o lápis. Fica torto, e é para ficar: treina o olho.' },
  { titulo: 'Três cores só', tempo: '15 min', como: 'Escolha uma tríade no círculo acima e pinte uma paisagem só com essas três cores e o branco do papel.' },
  { titulo: 'A grade dos terços', tempo: '5 min', como: 'Divida a folha em três, na altura e na largura, com linhas fracas. Desenhe uma árvore num dos cruzamentos e o horizonte numa das linhas.' },
  { titulo: 'A mesma coisa, duas luzes', tempo: '10 min', como: 'Desenhe a mesma xícara de manhã e à noite, perto da lâmpada. Compare as sombras, como Monet com a catedral.' },
];

export const MARCOS_ARTE_MUNDO: MarcoArea[] = [
  { ano: 'há mais de 30 mil anos', titulo: 'As cavernas', sobre: 'Na gruta Chauvet, na França, cavalos, leões e rinocerontes pintados com carvão e ocre. A de Lascaux tem uns 17 mil anos.' },
  { ano: 'c. 1350 a.C.', titulo: 'O Egito', sobre: 'O busto de Nefertiti, hoje no Neues Museum, em Berlim. A arte egípcia mostra o rosto de perfil e o olho de frente.' },
  { ano: 'século V a.C.', titulo: 'A Grécia clássica', sobre: 'Os escultores gregos buscam o corpo em equilíbrio e a proporção ideal, no mármore e no bronze.' },
  { ano: 'séculos XV–XVI', titulo: 'O Renascimento', sobre: 'Na Itália, a perspectiva e o estudo do corpo: Leonardo da Vinci pinta a Mona Lisa (c. 1503–1519) e Michelangelo, o teto da Capela Sistina (1508–1512).' },
  { ano: 'século XVII', titulo: 'O Barroco', sobre: 'Movimento, drama e luz forte: Caravaggio, Rembrandt e “As meninas” (1656), de Velázquez.' },
  { ano: '1874', titulo: 'O Impressionismo', sobre: 'A primeira exposição do grupo em Paris. Monet, Renoir, Degas e Berthe Morisot pintam a luz do momento.' },
  { ano: '1889', titulo: 'A noite estrelada', sobre: 'Vincent van Gogh pinta o céu em redemoinhos, de uma janela em Saint-Rémy. O quadro está no MoMA, em Nova York.' },
  { ano: '1907', titulo: 'O Cubismo', sobre: 'Pablo Picasso pinta “As senhoritas de Avignon”: o mesmo objeto visto de vários lados ao mesmo tempo, em planos.' },
  { ano: '1924', titulo: 'O Surrealismo', sobre: 'André Breton lança o manifesto: a arte dos sonhos e do inconsciente. Salvador Dalí e René Magritte.' },
  { ano: '1937', titulo: 'Guernica', sobre: 'Picasso pinta o bombardeio da cidade basca na guerra civil espanhola, em preto, branco e cinza. Está no Museo Reina Sofía, em Madri.' },
  { ano: 'anos 1940', titulo: 'Frida Kahlo', sobre: 'A pintora mexicana faz dos autorretratos uma forma de contar a dor, a identidade e a cultura do México.' },
  { ano: '1962', titulo: 'A Pop Art', sobre: 'Andy Warhol pinta as latas de sopa Campbell’s: a arte usa a propaganda, as marcas e os quadrinhos.' },
];

export interface ArtistaBR {
  nome: string;
  anos: string;
  fez: string;
}

export const ARTISTAS_BRASIL: ArtistaBR[] = [
  { nome: 'Aleijadinho (Antônio Francisco Lisboa)', anos: 'c. 1738–1814', fez: 'Escultor e arquiteto do barroco mineiro; esculpiu em pedra-sabão os doze profetas de Congonhas, mesmo com uma doença que deformava as mãos.' },
  { nome: 'Anita Malfatti', anos: '1889–1964', fez: 'A exposição dela em 1917, com cores fortes e formas modernas, foi atacada por Monteiro Lobato e acendeu o Modernismo.' },
  { nome: 'Tarsila do Amaral', anos: '1886–1973', fez: 'Pintou o “Abaporu” (1928) e “Operários” (1933); criou com Oswald de Andrade a Antropofagia.' },
  { nome: 'Candido Portinari', anos: '1903–1962', fez: 'Pintou “Café”, “Retirantes” e os painéis “Guerra e Paz”, que estão na sede da ONU, em Nova York.' },
  { nome: 'Lygia Clark', anos: '1920–1988', fez: 'Do grupo neoconcreto; criou os “Bichos”, esculturas de metal com dobradiças para o público mexer.' },
  { nome: 'Hélio Oiticica', anos: '1937–1980', fez: 'Criou os “Parangolés”, capas para vestir e dançar, e a instalação “Tropicália” (1967), que deu nome ao movimento.' },
];

export const MARCOS_ARTE_BRASIL: MarcoArea[] = [
  { ano: 'milhares de anos', titulo: 'A Serra da Capivara', sobre: 'No Piauí, milhares de pinturas nas rochas, com cenas de caça, dança e bichos. É Patrimônio Mundial da UNESCO desde 1991.' },
  { ano: 'c. 400–1400', titulo: 'A cerâmica marajoara', sobre: 'Na Ilha de Marajó, urnas e vasos com desenhos geométricos pintados e em relevo.' },
  { ano: 'século XVIII', titulo: 'O barroco mineiro', sobre: 'Igrejas douradas em Ouro Preto, Congonhas e São João del-Rei, com as esculturas do Aleijadinho e as pinturas de Mestre Ataíde.' },
  { ano: '1816', titulo: 'A Missão Artística Francesa', sobre: 'Chegam ao Rio artistas franceses como Jean-Baptiste Debret, que desenhou o Brasil do tempo do Império.' },
  { ano: '1826', titulo: 'A Academia Imperial de Belas Artes', sobre: 'Abre no Rio de Janeiro a primeira escola oficial de arte do Brasil.' },
  { ano: '1922', titulo: 'A Semana de Arte Moderna', sobre: 'No Theatro Municipal de São Paulo, artistas e escritores pedem uma arte nova e brasileira.' },
  { ano: '1928', titulo: 'O Abaporu', sobre: 'Tarsila do Amaral pinta o quadro que inspira o Manifesto Antropófago de Oswald de Andrade.' },
  { ano: '1947', titulo: 'O MASP', sobre: 'Assis Chateaubriand e Pietro Maria Bardi fundam o Museu de Arte de São Paulo. O prédio da Avenida Paulista, de Lina Bo Bardi, abre em 1968.' },
  { ano: '1951', titulo: 'A Bienal de São Paulo', sobre: 'A primeira Bienal traz a arte do mundo para o Brasil. Hoje é uma das mais importantes do mundo.' },
  { ano: '1959', titulo: 'O Neoconcretismo', sobre: 'Lygia Clark, Lygia Pape e Hélio Oiticica, entre outros, assinam o manifesto: a arte para ser tocada e vivida.' },
  { ano: '2003', titulo: 'A arte kusiwa', sobre: 'A pintura corporal e gráfica dos Wajãpi, do Amapá, é proclamada pela UNESCO Obra-prima do Patrimônio Oral e Imaterial da Humanidade.' },
  { ano: '2006', titulo: 'Inhotim', sobre: 'Abre ao público em Brumadinho, Minas Gerais, um dos maiores museus de arte contemporânea a céu aberto do mundo.' },
];
