/**
 * Temas dos tabuleiros dos jogos do conhecimento: os grátis (na personalização) e os da Loja do
 * Linu (pagos com krill). Fica em `data/` para a loja (services) e os tabuleiros (components) lerem.
 */
export type TemaJogoId = 'madeira' | 'verde' | 'oceano' | 'gelo' | 'noite' | 'contraste' | 'papiro' | 'grega' | 'jade' | 'sakura' | 'azulejo' | 'zellige' | 'kente' | 'tartan' | 'marajoara' | 'aurora' | 'deserto' | 'piratas' | 'vikings' | 'copacabana' | 'amazonia' | 'mexico' | 'talavera' | 'londres' | 'rangoli' | 'andino' | 'khokhloma' | 'iznik' | 'bojagi' | 'vyshyvanka';

/** Padrão desenhado na moldura dos temas da loja (ver `components/jogos/padroes.tsx`). */
export type PadraoMoldura = 'papiro' | 'grega' | 'jade' | 'sakura' | 'azulejo' | 'zellige' | 'kente' | 'tartan' | 'marajoara' | 'aurora' | 'dunas' | 'corda' | 'nos' | 'ondas' | 'folhas' | 'papelpicado' | 'talavera' | 'tijolos' | 'rangoli' | 'andino' | 'khokhloma' | 'tulipa' | 'retalhos' | 'pontocruz';

/** Animação de clima por cima do tabuleiro (pétalas no Japão, chuva e névoa em Londres…). */
export type ClimaTema = 'petalas' | 'chuva' | 'neve' | 'areia' | 'vagalumes' | 'aurora' | 'papel';

/** O som de mover a peça (arquivos em assets/sons/jogos, gerados por scripts/gerar-sons-jogos.py). */
export type SomJogo = 'madeira' | 'madeira-grave' | 'pedra' | 'areia' | 'onda' | 'mata' | 'moeda' | 'sino' | 'gelo' | 'ceramica' | 'tecido' | 'papel' | 'chuva';

/**
 * Cores dos tabuleiros. Cada tema foi escolhido pelo contraste: as casas claras e escuras se
 * distinguem bem, as peças têm sempre contorno (a peça escura tem um anel claro e a clara, um anel
 * escuro), e os destaques (último lance, seleção, dicas) aparecem nos dois tons de casa. “Madeira”
 * e “Verde” seguem as cores mais usadas em tabuleiros on-line; “Alto contraste” é para quem enxerga
 * pouco ou joga no sol.
 */
export interface TemaJogo {
  id: TemaJogoId;
  nome: string;
  claro: string;
  escuro: string;
  /** moldura em volta do tabuleiro e cor das coordenadas */
  moldura: string;
  coordenada: string;
  /** fundo dos tabuleiros de linhas (go, trilha, oware, abalone, quoridor) */
  superficie: string;
  /** linhas desenhadas sobre a superfície */
  linha: string;
  /** casas especiais (trono e cantos do hnefatafl) */
  especial: string;
  ultimo: string;
  selecao: string;
  dica: string;
  captura: string;
  xeque: string;
  /** os temas da loja custam krill (os outros vêm de graça) */
  preco?: number;
  sobre?: string;
  /** de onde vem a inspiração (país, povo ou época), para o filtro e o cartão da loja */
  origem?: string;
  /** o desenho da moldura e as duas cores dele */
  padrao?: PadraoMoldura;
  padraoCores?: [string, string];
  /** o pacote da loja a que o tema pertence (Brasil, Japão…); sem pacote, é um item avulso */
  pacote?: string;
  /** o som de mover a peça neste tabuleiro (sem som próprio, vale o da madeira) */
  som?: SomJogo;
  /** a animação de clima do tema */
  clima?: ClimaTema;
  /** a comemoração de vitória do tema (sem ela, confete) */
  vitoria?: 'confete' | 'petalas' | 'moedas' | 'fogos' | 'papel' | 'folhas' | 'neve' | 'areia' | 'bolhas' | 'brasas' | 'estrelas';
}

export const TEMAS_JOGO = {
  madeira: {
    id: 'madeira',
    som: 'madeira',
    nome: 'Madeira',
    claro: '#F0D9B5',
    escuro: '#B58863',
    moldura: '#5C3B1E',
    coordenada: '#F3E3C7',
    superficie: '#DCB35C',
    linha: '#3B2A14',
    especial: '#E3B04B',
    ultimo: 'rgba(205, 210, 106, 0.8)',
    selecao: 'rgba(20, 85, 30, 0.5)',
    dica: 'rgba(20, 85, 30, 0.6)',
    captura: 'rgba(20, 85, 30, 0.65)',
    xeque: 'rgba(220, 38, 38, 0.6)',
  },
  verde: {
    id: 'verde',
    vitoria: 'folhas',
    som: 'madeira',
    nome: 'Verde',
    claro: '#EEEED2',
    escuro: '#769656',
    moldura: '#33482A',
    coordenada: '#EEEED2',
    superficie: '#C2D69B',
    linha: '#26361B',
    especial: '#E9D36C',
    ultimo: 'rgba(246, 246, 105, 0.8)',
    selecao: 'rgba(186, 202, 68, 0.85)',
    dica: 'rgba(0, 0, 0, 0.3)',
    captura: 'rgba(0, 0, 0, 0.35)',
    xeque: 'rgba(220, 38, 38, 0.6)',
  },
  oceano: {
    id: 'oceano',
    vitoria: 'bolhas',
    som: 'pedra',
    nome: 'Oceano',
    claro: '#DEE3E6',
    escuro: '#8CA2AD',
    moldura: '#2E4450',
    coordenada: '#DEE3E6',
    superficie: '#C9D7DF',
    linha: '#1D2E37',
    especial: '#F2CC6B',
    ultimo: 'rgba(155, 199, 0, 0.6)',
    selecao: 'rgba(20, 85, 160, 0.5)',
    dica: 'rgba(20, 60, 120, 0.55)',
    captura: 'rgba(20, 60, 120, 0.6)',
    xeque: 'rgba(220, 38, 38, 0.6)',
  },
  gelo: {
    id: 'gelo',
    vitoria: 'neve',
    clima: 'neve',
    som: 'gelo',
    nome: 'Gelo do Linu',
    claro: '#EAF4FB',
    escuro: '#6F9FC8',
    moldura: '#1F3B57',
    coordenada: '#D6E8F5',
    superficie: '#D6E8F5',
    linha: '#1F3B57',
    especial: '#F6D365',
    ultimo: 'rgba(250, 204, 21, 0.6)',
    selecao: 'rgba(37, 99, 235, 0.45)',
    dica: 'rgba(30, 64, 175, 0.6)',
    captura: 'rgba(30, 64, 175, 0.65)',
    xeque: 'rgba(220, 38, 38, 0.6)',
  },
  noite: {
    id: 'noite',
    vitoria: 'fogos',
    som: 'pedra',
    nome: 'Noite',
    claro: '#8B95A5',
    escuro: '#3F4857',
    moldura: '#0B0F15',
    coordenada: '#CBD5E1',
    superficie: '#525C6B',
    linha: '#E5E7EB',
    especial: '#B8923A',
    ultimo: 'rgba(250, 204, 21, 0.5)',
    selecao: 'rgba(56, 189, 248, 0.55)',
    dica: 'rgba(255, 255, 255, 0.75)',
    captura: 'rgba(255, 255, 255, 0.8)',
    xeque: 'rgba(248, 113, 113, 0.75)',
  },
  contraste: {
    id: 'contraste',
    som: 'pedra',
    nome: 'Alto contraste',
    claro: '#FFFFFF',
    escuro: '#5B6170',
    moldura: '#000000',
    coordenada: '#FFFFFF',
    superficie: '#FFFFFF',
    linha: '#000000',
    especial: '#FFD400',
    ultimo: 'rgba(255, 212, 0, 0.9)',
    selecao: 'rgba(0, 102, 255, 0.65)',
    dica: '#0047FF',
    captura: '#E00000',
    xeque: 'rgba(224, 0, 0, 0.8)',
  },
} as Record<TemaJogoId, TemaJogo>;

/**
 * Temas da Loja do Linu, comprados com krill (pedido do dono, 11/10/2026: temas ligados ao resto do
 * app, que é sobre culturas, lugares e história). Cada um tem as cores e um padrão na moldura
 * inspirados num povo, num lugar ou numa época; as descrições dizem só o que é conhecido de cada um.
 */
const LOJA: TemaJogo[] = [
  { id: 'papiro', vitoria: 'areia', som: 'papel', pacote: 'egito', nome: 'Egito antigo', origem: 'Egito', preco: 30, padrao: 'papiro', padraoCores: ['#2F5E8E', '#C8962E'], sobre: 'Cor de papiro, azul e ouro, como nas pinturas egípcias. O Egito antigo tem alguns dos tabuleiros de jogo mais antigos que se conhecem.', claro: '#EEDCB0', escuro: '#B8925A', moldura: '#E3C98E', coordenada: '#3A2810', superficie: '#E3C98E', linha: '#3A2810', especial: '#D9A33B', ultimo: 'rgba(47, 94, 142, 0.5)', selecao: 'rgba(120, 53, 15, 0.5)', dica: 'rgba(74, 52, 24, 0.6)', captura: 'rgba(74, 52, 24, 0.7)', xeque: 'rgba(220, 38, 38, 0.6)' },
  { id: 'grega', pacote: 'grecia', vitoria: 'estrelas', som: 'ceramica', nome: 'Grécia antiga', origem: 'Grécia', preco: 40, padrao: 'grega', padraoCores: ['#1B1B1B', '#C8642D'], sobre: 'Terracota e preto, as cores dos vasos gregos antigos, com a “grega” (o meandro), a faixa de linhas quebradas que enfeitava vasos e templos.', claro: '#F1D8B8', escuro: '#C8642D', moldura: '#C8642D', coordenada: '#1B1B1B', superficie: '#EBC9A0', linha: '#1B1B1B', especial: '#E7B94B', ultimo: 'rgba(250, 204, 21, 0.6)', selecao: 'rgba(27, 27, 27, 0.4)', dica: 'rgba(27, 27, 27, 0.55)', captura: 'rgba(27, 27, 27, 0.65)', xeque: 'rgba(220, 38, 38, 0.65)' },
  { id: 'jade', pacote: 'china', vitoria: 'petalas', som: 'pedra', nome: 'Jade chinês', origem: 'China', preco: 40, padrao: 'jade', padraoCores: ['#E2B33E', '#8E2323'], sobre: 'Verde de jade e laca vermelha com dourado, cores muito usadas na arte chinesa, a terra do Go.', claro: '#DDEFD9', escuro: '#4F8A6B', moldura: '#8E2323', coordenada: '#F3E6C4', superficie: '#CFE6CB', linha: '#1E3B2C', especial: '#E2B33E', ultimo: 'rgba(250, 204, 21, 0.6)', selecao: 'rgba(142, 35, 35, 0.45)', dica: 'rgba(30, 59, 44, 0.6)', captura: 'rgba(142, 35, 35, 0.6)', xeque: 'rgba(220, 38, 38, 0.6)' },
  { id: 'sakura', vitoria: 'petalas', clima: 'petalas', som: 'sino', pacote: 'japao', nome: 'Primavera japonesa', origem: 'Japão', preco: 40, padrao: 'sakura', padraoCores: ['#F6B6CB', '#FFFFFF'], sobre: 'As flores de cerejeira (sakura), que os japoneses saem para ver na primavera (o hanami), sobre madeira escura.', claro: '#FCE8EF', escuro: '#C9809A', moldura: '#3E2A2F', coordenada: '#FCE8EF', superficie: '#F5DCE4', linha: '#3E2A2F', especial: '#F6B6CB', ultimo: 'rgba(125, 211, 252, 0.6)', selecao: 'rgba(62, 42, 47, 0.4)', dica: 'rgba(62, 42, 47, 0.55)', captura: 'rgba(62, 42, 47, 0.65)', xeque: 'rgba(225, 29, 72, 0.65)' },
  { id: 'azulejo', vitoria: 'bolhas', som: 'ceramica', nome: 'Azulejo português', origem: 'Portugal', preco: 40, padrao: 'azulejo', padraoCores: ['#FFFFFF', '#2B5BA8'], sobre: 'Branco e azul-cobalto, as cores dos azulejos que cobrem igrejas, estações e casas em Portugal.', claro: '#FFFFFF', escuro: '#2B5BA8', moldura: '#FFFFFF', coordenada: '#16305C', superficie: '#EAF0FA', linha: '#16305C', especial: '#F2C14E', ultimo: 'rgba(250, 204, 21, 0.65)', selecao: 'rgba(56, 189, 248, 0.55)', dica: 'rgba(22, 48, 92, 0.6)', captura: 'rgba(22, 48, 92, 0.7)', xeque: 'rgba(220, 38, 38, 0.65)' },
  { id: 'zellige', vitoria: 'areia', som: 'ceramica', pacote: 'deserto', nome: 'Zellige marroquino', origem: 'Marrocos', preco: 50, padrao: 'zellige', padraoCores: ['#1F6E6B', '#F4E9D8'], sobre: 'O zellige, o mosaico de azulejos cortados à mão que forma estrelas e polígonos nas paredes e fontes do Marrocos.', claro: '#F4E9D8', escuro: '#1F6E6B', moldura: '#B8562B', coordenada: '#F4E9D8', superficie: '#EADBC2', linha: '#123F3D', especial: '#E2B33E', ultimo: 'rgba(250, 204, 21, 0.6)', selecao: 'rgba(184, 86, 43, 0.5)', dica: 'rgba(18, 63, 61, 0.6)', captura: 'rgba(184, 86, 43, 0.7)', xeque: 'rgba(220, 38, 38, 0.65)' },
  { id: 'kente', vitoria: 'confete', som: 'tecido', nome: 'Kente de Gana', origem: 'Gana', preco: 50, padrao: 'kente', padraoCores: ['#F2C230', '#1E7B3C'], sobre: 'Dourado, verde e vermelho em faixas, como no pano kente tecido em Gana, a terra do oware.', claro: '#F6D04D', escuro: '#1E7B3C', moldura: '#9E2A1E', coordenada: '#FFFFFF', superficie: '#F3D774', linha: '#1B1B1B', especial: '#E0532B', ultimo: 'rgba(255, 255, 255, 0.55)', selecao: 'rgba(158, 42, 30, 0.55)', dica: 'rgba(27, 27, 27, 0.55)', captura: 'rgba(27, 27, 27, 0.65)', xeque: 'rgba(158, 42, 30, 0.75)' },
  { id: 'tartan', vitoria: 'fogos', som: 'tecido', pacote: 'reino-unido', nome: 'Tartan escocês', origem: 'Escócia', preco: 50, padrao: 'tartan', padraoCores: ['#1E3A5F', '#B22234'], sobre: 'O tartan, o tecido de faixas que se cruzam, típico da Escócia: cada clã tem o seu.', claro: '#E8E1C9', escuro: '#2F5A3F', moldura: '#1E3A5F', coordenada: '#FFFFFF', superficie: '#DED6B8', linha: '#1E3A5F', especial: '#E2B33E', ultimo: 'rgba(250, 204, 21, 0.6)', selecao: 'rgba(178, 34, 52, 0.45)', dica: 'rgba(30, 58, 95, 0.6)', captura: 'rgba(178, 34, 52, 0.65)', xeque: 'rgba(220, 38, 38, 0.65)' },
  { id: 'marajoara', vitoria: 'folhas', som: 'ceramica', pacote: 'brasil', nome: 'Cerâmica marajoara', origem: 'Brasil', preco: 60, padrao: 'marajoara', padraoCores: ['#1B1B1B', '#A33A22'], sobre: 'Vermelho e preto sobre o barro claro, como na cerâmica marajoara, feita pelos povos que viveram na ilha de Marajó, no Pará, muito antes da chegada dos europeus.', claro: '#F0E0C4', escuro: '#A33A22', moldura: '#F0E0C4', coordenada: '#1B1B1B', superficie: '#E8D3AE', linha: '#1B1B1B', especial: '#D9A33B', ultimo: 'rgba(250, 204, 21, 0.6)', selecao: 'rgba(27, 27, 27, 0.4)', dica: 'rgba(27, 27, 27, 0.55)', captura: 'rgba(27, 27, 27, 0.65)', xeque: 'rgba(220, 38, 38, 0.65)' },
  { id: 'deserto', vitoria: 'areia', clima: 'areia', som: 'areia', pacote: 'deserto', nome: 'Dunas do deserto', origem: 'Arábia e Saara', preco: 40, padrao: 'dunas', padraoCores: ['#E8C07D', '#B9813F'], sobre: 'Areia clara e areia queimada de sol, com as dunas desenhadas na moldura.', claro: '#F3DDB0', escuro: '#C99A5B', moldura: '#E8C07D', coordenada: '#5A3A14', superficie: '#EBCF98', linha: '#5A3A14', especial: '#2D6E8E', ultimo: 'rgba(45, 110, 142, 0.5)', selecao: 'rgba(90, 58, 20, 0.45)', dica: 'rgba(90, 58, 20, 0.6)', captura: 'rgba(90, 58, 20, 0.7)', xeque: 'rgba(220, 38, 38, 0.65)' },
  { id: 'piratas', vitoria: 'moedas', som: 'madeira-grave', pacote: 'piratas', nome: 'Convés pirata', origem: 'Caribe e mares do mundo', preco: 40, padrao: 'corda', padraoCores: ['#C9A66B', '#7A5A2E'], sobre: 'As tábuas do convés de um navio, com uma corda de amarrar em volta.', claro: '#D8B17A', escuro: '#7B5230', moldura: '#3E2A17', coordenada: '#F1D9A8', superficie: '#C99F68', linha: '#2A1C0E', especial: '#D4AF37', ultimo: 'rgba(212, 175, 55, 0.65)', selecao: 'rgba(14, 116, 144, 0.5)', dica: 'rgba(42, 28, 14, 0.6)', captura: 'rgba(42, 28, 14, 0.7)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'vikings', vitoria: 'brasas', som: 'madeira-grave', pacote: 'vikings', nome: 'Salão viking', origem: 'Escandinávia', preco: 40, padrao: 'nos', padraoCores: ['#C8A24A', '#2B2118'], sobre: 'Madeira escura e escudos pintados, com um entrelaçado de linhas na moldura, como nos entalhes nórdicos.', claro: '#C9B28A', escuro: '#5E4630', moldura: '#2B2118', coordenada: '#E9D9B5', superficie: '#BFA67C', linha: '#1C150F', especial: '#9E2A1E', ultimo: 'rgba(200, 162, 74, 0.7)', selecao: 'rgba(158, 42, 30, 0.5)', dica: 'rgba(28, 21, 15, 0.6)', captura: 'rgba(28, 21, 15, 0.7)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'copacabana', vitoria: 'bolhas', som: 'onda', pacote: 'brasil', nome: 'Calçadão de Copacabana', origem: 'Brasil', preco: 40, padrao: 'ondas', padraoCores: ['#1B1B1B', '#F5F3EE'], sobre: 'As ondas de pedra portuguesa preta e branca do calçadão de Copacabana, no Rio de Janeiro. O som é o do mar.', claro: '#F5F3EE', escuro: '#3A3A3A', moldura: '#F5F3EE', coordenada: '#1B1B1B', superficie: '#EDEAE2', linha: '#1B1B1B', especial: '#F2C230', ultimo: 'rgba(242, 194, 48, 0.65)', selecao: 'rgba(0, 156, 59, 0.5)', dica: 'rgba(0, 120, 60, 0.7)', captura: 'rgba(0, 120, 60, 0.75)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'amazonia', vitoria: 'folhas', clima: 'vagalumes', som: 'mata', pacote: 'brasil', nome: 'Madeira da Amazônia', origem: 'Brasil', preco: 40, padrao: 'folhas', padraoCores: ['#2E7D32', '#A5D66A'], sobre: 'Casas de madeira escura e avermelhada, com a mata verde em volta. O som é o de madeira, com um passarinho ao fundo.', claro: '#D3A06F', escuro: '#7A3E1D', moldura: '#1F4D24', coordenada: '#E8F5D0', superficie: '#C99566', linha: '#2A160A', especial: '#F2C230', ultimo: 'rgba(165, 214, 106, 0.6)', selecao: 'rgba(31, 77, 36, 0.5)', dica: 'rgba(42, 22, 10, 0.6)', captura: 'rgba(42, 22, 10, 0.7)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'mexico', vitoria: 'papel', clima: 'papel', som: 'papel', pacote: 'mexico', nome: 'Papel picado', origem: 'México', preco: 40, padrao: 'papelpicado', padraoCores: ['#E4007C', '#00A6A6'], sobre: 'A moldura enfeitada com as bandeirinhas recortadas de papel picado, que colorem as festas e os altares do Dia dos Mortos no México.', claro: '#FFF3DC', escuro: '#008B8B', moldura: '#2B1B3D', coordenada: '#FFF3DC', superficie: '#FCE7C2', linha: '#2B1B3D', especial: '#FFB000', ultimo: 'rgba(255, 176, 0, 0.65)', selecao: 'rgba(228, 0, 124, 0.45)', dica: 'rgba(43, 27, 61, 0.6)', captura: 'rgba(228, 0, 124, 0.7)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'talavera', vitoria: 'papel', som: 'ceramica', pacote: 'mexico', nome: 'Talavera de Puebla', origem: 'México', preco: 40, padrao: 'talavera', padraoCores: ['#1D3F8F', '#F2B705'], sobre: 'A cerâmica de Talavera, de Puebla, pintada à mão em azul-cobalto e amarelo sobre o branco.', claro: '#FFFDF6', escuro: '#1D3F8F', moldura: '#FFFDF6', coordenada: '#1D3F8F', superficie: '#F4F1E6', linha: '#1D3F8F', especial: '#F2B705', ultimo: 'rgba(242, 183, 5, 0.65)', selecao: 'rgba(56, 189, 248, 0.55)', dica: 'rgba(29, 63, 143, 0.6)', captura: 'rgba(29, 63, 143, 0.7)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'londres', vitoria: 'fogos', som: 'chuva', clima: 'chuva', pacote: 'reino-unido', nome: 'Londres na chuva', origem: 'Reino Unido', preco: 50, padrao: 'tijolos', padraoCores: ['#7A3B2E', '#3B4048'], sobre: 'Pedra cinzenta, tijolo e neblina: em volta do tabuleiro, Londres fica enevoada e chove sem parar.', claro: '#DAD6CD', escuro: '#5B616A', moldura: '#2A3540', coordenada: '#E5E7EB', superficie: '#CFCBC1', linha: '#1F2A33', especial: '#B00B24', ultimo: 'rgba(250, 204, 21, 0.55)', selecao: 'rgba(176, 11, 36, 0.45)', dica: 'rgba(31, 42, 51, 0.6)', captura: 'rgba(176, 11, 36, 0.7)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'aurora', vitoria: 'estrelas', clima: 'aurora', som: 'gelo', nome: 'Aurora austral', origem: 'Antártida', preco: 60, padrao: 'aurora', padraoCores: ['#34D399', '#A78BFA'], sobre: 'O céu da Antártida, a casa do Linu, numa noite de aurora austral.', claro: '#C9F2E4', escuro: '#3B6E8F', moldura: '#0E2238', coordenada: '#C9F2E4', superficie: '#BFE3E0', linha: '#0E2238', especial: '#F0A6CA', ultimo: 'rgba(240, 166, 202, 0.65)', selecao: 'rgba(52, 211, 153, 0.55)', dica: 'rgba(14, 34, 56, 0.6)', captura: 'rgba(14, 34, 56, 0.7)', xeque: 'rgba(244, 63, 94, 0.7)' },
  // Seis países novos (pedido do dono, 11/10/2026). Fontes: os artigos “Rangoli”, “Andean textiles”,
  // “Khokhloma”, “Iznik pottery”, “Bojagi”, “Vyshyvanka” e “Ukrainian embroidery” da Wikipédia em
  // inglês, consultados em 11/10/2026.
  { id: 'rangoli', pacote: 'india', vitoria: 'petalas', clima: 'petalas', som: 'areia', nome: 'Rangoli da Índia', origem: 'Índia', preco: 50, padrao: 'rangoli', padraoCores: ['#FF8F00', '#D81B60'], sobre: 'O rangoli, da Índia: desenhos feitos no chão com pó colorido, farinha de arroz e pétalas de flores, quase sempre simétricos. São feitos sobretudo no Diwali, a festa das luzes.', claro: '#FCE9C8', escuro: '#C2185B', moldura: '#6A1B9A', coordenada: '#FFFFFF', superficie: '#F8DDB0', linha: '#4A148C', especial: '#FF8F00', ultimo: 'rgba(255, 143, 0, 0.6)', selecao: 'rgba(106, 27, 154, 0.45)', dica: 'rgba(74, 20, 140, 0.55)', captura: 'rgba(74, 20, 140, 0.65)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'andino', pacote: 'andes', vitoria: 'confete', som: 'tecido', nome: 'Tecido andino', origem: 'Peru', preco: 50, padrao: 'andino', padraoCores: ['#F2B134', '#1F7A4D'], sobre: 'Os tecidos dos Andes, uma tradição de milhares de anos concentrada no atual Peru, feitos com algodão e lã de alpaca e de lhama, com desenhos geométricos coloridos.', claro: '#F3E3C3', escuro: '#B3261E', moldura: '#1B1B1B', coordenada: '#F3E3C3', superficie: '#EFD9AE', linha: '#3B1F0F', especial: '#F2B134', ultimo: 'rgba(242, 177, 52, 0.65)', selecao: 'rgba(31, 122, 77, 0.5)', dica: 'rgba(59, 31, 15, 0.55)', captura: 'rgba(59, 31, 15, 0.65)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'khokhloma', pacote: 'russia', vitoria: 'folhas', som: 'madeira', nome: 'Khokhloma russa', origem: 'Rússia', preco: 50, padrao: 'khokhloma', padraoCores: ['#C62828', '#E8B84A'], sobre: 'A khokhloma, pintura russa em objetos de madeira, com flores, frutinhas e folhas em vermelho, preto e dourado. Surgiu na segunda metade do século XVII, na região de Níjni Novgorod.', claro: '#E9C46A', escuro: '#9B1C1C', moldura: '#1B1B1B', coordenada: '#E9C46A', superficie: '#E3B95A', linha: '#1B1B1B', especial: '#C62828', ultimo: 'rgba(255, 255, 255, 0.55)', selecao: 'rgba(27, 27, 27, 0.4)', dica: 'rgba(27, 27, 27, 0.55)', captura: 'rgba(27, 27, 27, 0.65)', xeque: 'rgba(220, 38, 38, 0.75)' },
  { id: 'iznik', vitoria: 'petalas', som: 'ceramica', nome: 'Cerâmica de Iznik', origem: 'Turquia', preco: 50, padrao: 'tulipa', padraoCores: ['#C62828', '#1F5FA8'], sobre: 'A cerâmica de Iznik, na Anatólia, feita no Império Otomano do fim do século XV ao fim do XVII: branco e azul, com tulipas, cravos, rosas e jacintos estilizados.', claro: '#F4F7F9', escuro: '#1F5FA8', moldura: '#0E7C86', coordenada: '#FFFFFF', superficie: '#EEF3F6', linha: '#163E6E', especial: '#C62828', ultimo: 'rgba(14, 124, 134, 0.5)', selecao: 'rgba(198, 40, 40, 0.4)', dica: 'rgba(22, 62, 110, 0.55)', captura: 'rgba(198, 40, 40, 0.6)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'bojagi', vitoria: 'confete', som: 'tecido', nome: 'Bojagi coreano', origem: 'Coreia', preco: 50, padrao: 'retalhos', padraoCores: ['#D81B60', '#2E7D32'], sobre: 'O bojagi, o pano quadrado de embrulhar da Coreia. O de retalhos se chama jogakbo; os mais antigos que restam são do começo da dinastia Joseon (1392–1910).', claro: '#F5EBDD', escuro: '#5C7C6E', moldura: '#3E2C41', coordenada: '#F5EBDD', superficie: '#F1E4CF', linha: '#3E2C41', especial: '#D81B60', ultimo: 'rgba(216, 27, 96, 0.4)', selecao: 'rgba(62, 44, 65, 0.4)', dica: 'rgba(62, 44, 65, 0.55)', captura: 'rgba(62, 44, 65, 0.65)', xeque: 'rgba(220, 38, 38, 0.7)' },
  { id: 'vyshyvanka', vitoria: 'estrelas', som: 'tecido', nome: 'Bordado ucraniano', origem: 'Ucrânia', preco: 50, padrao: 'pontocruz', padraoCores: ['#B71C1C', '#1B1B1B'], sobre: 'O bordado da vyshyvanka, a camisa do traje ucraniano. O vermelho e o preto foram as cores mais comuns do bordado ucraniano, e o ponto-cruz é hoje o mais usado. O Dia da Vyshyvanka é na terceira quinta-feira de maio.', claro: '#FAF7F0', escuro: '#B71C1C', moldura: '#FAF7F0', coordenada: '#1B1B1B', superficie: '#F4EFE3', linha: '#1B1B1B', especial: '#1B1B1B', ultimo: 'rgba(250, 204, 21, 0.6)', selecao: 'rgba(27, 27, 27, 0.4)', dica: 'rgba(27, 27, 27, 0.55)', captura: 'rgba(27, 27, 27, 0.65)', xeque: 'rgba(220, 38, 38, 0.7)' },
];
for (const t of LOJA) TEMAS_JOGO[t.id] = t;

export const TEMAS_LOJA = LOJA;
