import type { PixelIconName } from '@/components/PixelIcon';

/**
 * O mapa de cada língua construída (Tipos de línguas → Artificiais, `tipos-de-linguas.ts`): pedido do
 * Matheus (08/10/2026) por um jeito de mostrar «onde se fala» cada idioma artificial, nos moldes da
 * Terra-média de Tolkien ou da Pandora de Avatar.
 *
 * Dois tipos bem diferentes, porque as línguas construídas não têm todas o mesmo problema:
 *
 * - `'congresso'`: as auxlangs (esperanto, ido…) são línguas de verdade, faladas por gente de verdade
 *   espalhada pelo mundo todo, sem nenhum país — a ideia do Matheus foi seguir o Congresso Universal
 *   de Esperanto (Universala Kongreso), que muda de cidade-sede todo ano desde 1905. O Linu viaja
 *   pelo mapa-múndi REAL (o de `mapa-mundi.ts`/`projecao.ts`, o mesmo do resto do app), de sede em
 *   sede, em ordem cronológica.
 * - `'ficcao'`: as artlangs (klingon, quenya…) pertencem a um universo que não é o nosso planeta —
 *   não faz sentido um mapa-múndi real para o quenya, porque os elfos não vivem na Terra. Em vez de
 *   usar (e teria direito de autor) um mapa oficial da obra, o app desenha o próprio esquema: uma
 *   trilha estilizada de lugares do universo ficcional, SEM coordenadas geográficas reais — no mesmo
 *   espírito de ícones pixel art já usados na trilha da aventura (`AdventureMap.tsx`), não uma
 *   imagem licenciada de terceiros.
 *
 * Cada entrada é indexada pelo `id` do catálogo `CONLANGS` (`tipos-de-linguas.ts`) — não pelo código
 * de pacote jogável de `idiomas.ts` — porque o catálogo já cobre línguas sem curso completo no app
 * (quenya, sindarin, na'vi…). Quando o idioma também é jogável (hoje, só o klingon: `tlh`), o campo
 * opcional `pack` guarda esse código, para a tela linkar o curso.
 *
 * IMPORTANTE: só entra aqui o que foi confirmado numa fonte real (ver o comentário de cada entrada).
 * Sem fonte confiável, a língua fica de fora — ver a seção “Mapas dos idiomas construídos” em
 * PENDENTES.md para o que falta e por quê.
 */

export type TipoMapaConlang = 'congresso' | 'ficcao';

/** Uma sede real de congresso, plotada no mapa-múndi de verdade (mesma projeção do resto do app). */
export interface ParadaCongresso {
  ano: number;
  cidade: string;
  /** ISO 3166-1 alfa-3, para achar o país em `WORLD` (`mapa-mundi.ts`) e pintar a bandeira */
  iso: string;
  lat: number;
  lon: number;
  nota: string;
}

/** Um lugar do universo fictício, numa trilha própria (sem coordenada geográfica real). */
export interface ParadaFiccao {
  nome: string;
  nota: string;
  icone: PixelIconName;
}

export interface MapaConlangCongresso {
  tipo: 'congresso';
  idConlang: string;
  /** o código do pacote jogável em `idiomas.ts`, se a língua tiver curso completo */
  pack?: string;
  evento: string;
  fonte: string;
  paradas: ParadaCongresso[];
}

export interface MapaConlangFiccao {
  tipo: 'ficcao';
  idConlang: string;
  pack?: string;
  /** o nome do universo/planeta/mundo fictício */
  mundo: string;
  fonte: string;
  paradas: ParadaFiccao[];
}

export type MapaConlang = MapaConlangCongresso | MapaConlangFiccao;

export const MAPAS_CONLANGS: Record<string, MapaConlang> = {
  // ---------- tipo "congresso": auxlangs reais, mapa-múndi real ----------

  esperanto: {
    tipo: 'congresso',
    idConlang: 'esperanto',
    pack: 'eo',
    evento:
      'Congresso Universal de Esperanto (Universala Kongreso de Esperanto, “UK”): o encontro mundial do esperanto, organizado pela Universala Esperanto-Asocio (UEA) desde 1905, quase todo ano (parou só nas duas guerras mundiais e, presencialmente, na pandemia de covid-19), numa cidade-sede diferente a cada edição.',
    fonte:
      'Wikipédia (inglês), artigo “World Esperanto Congress”, tabela de sedes e número de participantes por ano; consultada em 08/10/2026. Coordenadas das cidades: conhecimento geográfico geral (latitude/longitude aproximada do centro de cada cidade, não do local exato do congresso).',
    paradas: [
      { ano: 1905, cidade: 'Boulogne-sur-Mer', iso: 'FRA', lat: 50.7256, lon: 1.6147, nota: 'O primeiro congresso: 688 pessoas, a estreia do esperanto falado em público entre gente de países diferentes.' },
      { ano: 1910, cidade: 'Washington, D.C.', iso: 'USA', lat: 38.9072, lon: -77.0369, nota: 'A primeira vez fora da Europa.' },
      { ano: 1920, cidade: 'Haia', iso: 'NLD', lat: 52.0705, lon: 4.3007, nota: 'O primeiro congresso depois da Primeira Guerra Mundial, que interrompeu a série de 1915 a 1919.' },
      { ano: 1934, cidade: 'Estocolmo', iso: 'SWE', lat: 59.3293, lon: 18.0686, nota: '2.042 participantes, um dos maiores congressos antes da Segunda Guerra Mundial.' },
      { ano: 1950, cidade: 'Paris', iso: 'FRA', lat: 48.8566, lon: 2.3522, nota: 'O primeiro depois da Segunda Guerra Mundial, que interrompeu a série de 1940 a 1946.' },
      { ano: 1965, cidade: 'Tóquio', iso: 'JPN', lat: 35.6762, lon: 139.6503, nota: 'Até 1980, quase todos os congressos foram na Europa ou nos EUA; o Japão, em 1965, foi a única exceção antes disso.' },
      { ano: 1981, cidade: 'Brasília', iso: 'BRA', lat: -15.7939, lon: -47.8828, nota: 'O primeiro congresso no Brasil.' },
      { ano: 1994, cidade: 'Seul', iso: 'KOR', lat: 37.5665, lon: 126.9780, nota: 'Corea do Sul tem um dos movimentos esperantistas mais antigos da Ásia.' },
      { ano: 2004, cidade: 'Pequim', iso: 'CHN', lat: 39.9042, lon: 116.4074, nota: 'A China tem uma longa tradição esperantista; o governo chinês já usou o esperanto em transmissões de rádio internacionais.' },
      { ano: 2010, cidade: 'Havana', iso: 'CUB', lat: 23.1136, lon: -82.3666, nota: 'Cuba tem um dos movimentos esperantistas mais ativos da América Latina.' },
      { ano: 2015, cidade: 'Lille', iso: 'FRA', lat: 50.6292, lon: 3.0573, nota: 'O 100º congresso: 2.698 participantes, o maior de todos desde a década de 1980.' },
      { ano: 2018, cidade: 'Lisboa', iso: 'PRT', lat: 38.7223, lon: -9.1393, nota: '' },
      { ano: 2022, cidade: 'Montreal', iso: 'CAN', lat: 45.5017, lon: -73.5673, nota: 'O primeiro congresso presencial depois da pandemia de covid-19, que forçou os de 2020 e 2021 a serem só on-line.' },
      { ano: 2023, cidade: 'Turim', iso: 'ITA', lat: 45.0703, lon: 7.6869, nota: '' },
      { ano: 2024, cidade: 'Arusha', iso: 'TZA', lat: -3.3869, lon: 36.6830, nota: 'O primeiro congresso na África, depois de 108 edições.' },
      { ano: 2025, cidade: 'Brno', iso: 'CZE', lat: 49.1951, lon: 16.6068, nota: '' },
    ],
  },

  // ---------- tipo "ficcao": artlangs, esquema estilizado (desenhado pelo app) ----------

  klingon: {
    tipo: 'ficcao',
    idConlang: 'klingon',
    pack: 'tlh',
    mundo: 'O Império Klingon, no universo de Star Trek',
    fonte:
      'Fatos de cânone de Star Trek (filmes e séries, consolidados em obras de referência como a Memory Beta/Memory Alpha): Qo’noS como planeta natal, a Grande Sala do Conselho Imperial na Primeira Cidade, a destruição de Praxis em "A Jornada nas Estrelas VI" (1991), Khitomer em "A Nova Geração", Boreth e Rura Penthe em várias séries. Esquema e posições desenhados pelo próprio app (SVG), sem usar nenhum mapa oficial da franquia — só nomes e fatos, que não têm direito de autor por si só.',
    paradas: [
      { nome: 'Qo’noS, a Primeira Cidade', nota: 'O planeta natal dos klingons, de clima vulcânico e montanhoso. Na Primeira Cidade fica a Grande Sala, onde se reúne o Conselho Imperial Klingon.', icone: 'vulcao' },
      { nome: 'Praxis', nota: 'Uma lua de Qo’noS, antes o principal centro de energia do Império. Explodiu em 2293 por excesso de mineração — o estopim da paz com a Federação, em “Jornada nas Estrelas VI: A Terra Desconhecida”.', icone: 'iceberg' },
      { nome: 'Boreth', nota: 'Uma lua sagrada, sede de um mosteiro klingon; a profecia diz que é lá que Kahless, o fundador mítico do Império, vai retornar.', icone: 'torre' },
      { nome: 'Khitomer', nota: 'Um posto avançado klingon, palco de uma emboscada romulana em 2346 que matou quase toda a guarnição — o Acordo de Khitomer, depois, uniu klingons e a Federação.', icone: 'casas' },
      { nome: 'Rura Penthe', nota: 'Uma lua-presídio gélida, “o inferno congelado”, para onde o Império manda os piores condenados.', icone: 'estacao' },
    ],
  },

  quenya: {
    tipo: 'ficcao',
    idConlang: 'quenya',
    mundo: 'Arda, o mundo de O Senhor dos Anéis e O Silmarillion, de J. R. R. Tolkien — a língua erudita dos altos-elfos',
    fonte:
      'Fatos de O Silmarillion e dos apêndices de O Senhor dos Anéis (J. R. R. Tolkien): Valinor como terra dos Valar em Aman, Tirion sobre a colina de Túna com a torre Mindon Eldaliéva, Rivendell/Imladris como refúgio onde o quenya sobrevive como língua de sabedoria (como o latim entre os humanos), e o uso cerimonial em Gondor (a saudação “Elen síla lúmenn’ omentielvo”, já citada em `tipos-de-linguas.ts`). Esquema e posições desenhados pelo próprio app (SVG), sem usar nenhum mapa oficial da Terra-média.',
    paradas: [
      { nome: 'Valinor', nota: 'A terra sagrada dos Valar, no continente de Aman, do outro lado do Grande Mar — lá vivem os altos-elfos (Vanyar e Noldor) que falam quenya no dia a dia.', icone: 'onda' },
      { nome: 'Tirion sobre Túna', nota: 'A cidade dos Noldor e Vanyar em Valinor, erguida numa colina; sua torre, a Mindon Eldaliéva, carrega uma lâmpada de prata que guia os navegantes no mar.', icone: 'torre' },
      { nome: 'Rivendell (Imladris)', nota: 'Na Terra-média, o refúgio élfico de Elrond: o quenya já não é falado no dia a dia ali, mas sobrevive como língua de sabedoria e de cerimônia.', icone: 'casas' },
      { nome: 'Minas Tirith (Gondor)', nota: 'A capital de Gondor: os reis númenóreanos usavam nomes e fórmulas em quenya, como a saudação que Frodo ouve em Rivendell, “Elen síla lúmenn’ omentielvo”.', icone: 'cidade' },
    ],
  },

  navi: {
    tipo: 'ficcao',
    idConlang: 'navi',
    mundo: 'Pandora, a lua no sistema de Alpha Centauri do filme Avatar (2009), de James Cameron — o lar do povo Na’vi',
    fonte:
      'Fatos bem conhecidos do filme Avatar (2009, James Cameron) e do material oficial de referência (Pandorapedia): o clã Omaticaya e sua Árvore-Lar (Kelutral), a Árvore das Almas (Vitraya Ramunong) onde o povo se conecta com a deusa Eywa, as Montanhas Flutuantes sustentadas por um mineral magnético (o “unobtainium” do roteiro) e a base humana Hell’s Gate, de onde a mineração parte. Esquema e posições desenhados pelo próprio app (SVG), sem usar nenhuma imagem oficial do filme.',
    paradas: [
      { nome: 'Kelutral, a Árvore-Lar', nota: 'A árvore gigantesca onde vive o clã Omaticaya — destruída pela mineração humana no filme de 2009, o acontecimento que detona o conflito da história.', icone: 'casas' },
      { nome: 'Vitraya Ramunong, a Árvore das Almas', nota: 'O lugar sagrado onde o povo Na’vi se conecta com a deusa Eywa; é lá que Jake Sully é aceito pelo clã Omaticaya.', icone: 'chave' },
      { nome: 'As Montanhas Flutuantes', nota: 'Picos de rocha que flutuam no ar por causa de um mineral magnético — o cenário mais famoso do filme, onde o povo Na’vi doma os banshees voadores.', icone: 'torre' },
      { nome: 'Hell’s Gate', nota: 'A base da Corporação de Recursos Administrados (RDA), de onde partem as operações de mineração em Pandora — o lado humano do conflito.', icone: 'estacao' },
    ],
  },
};

/** O mapa de uma língua construída, pelo id do catálogo `CONLANGS` (ou `undefined`, se não existe). */
export function mapaDoConlang(idConlang: string): MapaConlang | undefined {
  return MAPAS_CONLANGS[idConlang];
}
