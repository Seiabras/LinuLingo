import type { BiomaBrasil } from './biomas-ibge';

/**
 * As plantas de cada bioma, o par de `bichos-bioma.ts` (pedido do dono, 17/10/2026: cada bioma do mapa da
 * Biologia mostra a fauna e a flora). Cada planta diz em quais biomas do mundo (o número do Ecoregions
 * 2017, ver `biomas.ts`) e em quais biomas do Brasil (os 6 do IBGE) ela vive, com a fonte ao lado. Os
 * fatos só repetem o que a fonte diz. A foto segue a mesma regra dos bichos (o álbum, procurado pelo nome
 * em português, ou por `foto`); até lá aparece o cartão desenhado pelo app.
 *
 * Fontes, por grupo (consultadas em 17/10/2026):
 * [AMZ] Embrapa, “Plantas para o Futuro: Região Norte”, cap. castanha-do-brasil
 *   (https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1144559/1/Plantas-para-o-Futuro-Norte-202-217.pdf);
 *   Embrapa Acre, dispersão de sementes da castanheira pelas cutias
 *   (https://www.alice.cnptia.embrapa.br/alice/handle/doc/657361); Embrapa Amazônia Oriental, “Manejo de
 *   açaizeiros” (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/961317/1/Manejo-de-acaizeiros.pdf);
 *   Embrapa Amazônia Ocidental, seringueira
 *   (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1117341/1/XVJornadaICp97a105.pdf); Portal
 *   (https://portalamazonia.com/amazonia-de-a-a-z/seringueira/); Portal
 *   Amazônia, “Verdade ou mito: a vitória-régia é capaz de carregar uma pessoa?”, com Cid Ferreira, do Inpa
 *   (https://portalamazonia.com/amazonia/verdade-ou-mito-a-vitoria-regia-e-capaz-de-carregar-uma-pessoa/).
 * [CER] Embrapa, pequizeiro (https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/578664/1/CT230.pdf e
 *   https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1143831/1/Doc-377.pdf); Embrapa, “Buriti”
 *   (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1019828/1/Buriti.pdf e
 *   https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1103403/1/capburiti.pdf); ICMBio, “Cerrado em
 *   flores” (https://www.gov.br/icmbio/pt-br/assuntos/centros-de-pesquisa/biodiversidade-e-restauracao-ecologica/guias-cartilhas-planos-e/cerradoemflores_defeso.pdf);
 *   Tribuna de Jundiaí, sobre a floração do ipê na seca, citando a Embrapa
 *   (https://tribunadejundiai.com.br/casa-jardim/este-ipe-parece-seco-mas-pode-estar-prestes-a-explodir-em-flores/).
 * [CAA] Embrapa Semiárido, mandacaru (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/153062/1/OPB350.pdf);
 *   revisão sobre o mandacaru na revista Ciência Animal (https://periodicos.pucpr.br/cienciaanimal/article/view/9894/9339);
 *   Embrapa Semiárido, umbuzeiro (https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/154731/1/INT59.pdf);
 *   Jardim Botânico de Belo Horizonte, juazeiro
 *   (https://prefeitura.pbh.gov.br/fundacao-de-parques-e-zoobotanica/jardim-botanico/nossos-jardins/pracas-da-area-de-visitacao).
 * [MAT] Museu de História Natural e Jardim Botânico da UFMG, “Pau-brasil” (https://www.ufmg.br/mhnjb/pau-brasil/);
 *   National Geographic Brasil, “Pau-brasil: 6 curiosidades sobre a espécie que batizou um país” (2022);
 *   Embrapa Florestas, araucária (https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1135700); IFRS, anais da MoExP 2020, sobre a
 *   gralha-azul e a araucária (https://moexp-2022.osorio.ifrs.edu.br/uploads/anai/2020/Anais%20MoExP%202020%20Etapa%20II.1839.pdf); UFRGS,
 *   Viveiros Comunitários, “Euterpe edulis – Juçara” (https://www.ufrgs.br/viveiroscomunitarios/?p=397); eCycle, “Palmito juçara” (https://www.ecycle.com.br/palmito-jucara/).
 * [PAM] Embrapa Clima Temperado, butiá (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1011633/1/ResumoCBRG332.pdf);
 *   UFRGS, Flora Campestre, “Espinilho” (https://www.ufrgs.br/floracampestre/?p=748); Embrapa Pecuária Sul,
 *   Paspalum do Pampa (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1028092/1/Oliveiraetal.pdf).
 * [PAN] Embrapa Pantanal, Comunicado Técnico 78, bocaiúva e carandá
 *   (https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/804474/1/COT78.pdf); Oecologia Australis, carandazais
 *   (https://revistas.ufrj.br/index.php/oa/article/view/8241); Embrapa Pantanal, Documentos 126, óleo e farinha de
 *   bocaiúva (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/999712/1/18PDFsamDOC126.pdf); UFMS, “O uso do camalote”
 *   (https://repositorio.ufms.br/bitstream/123456789/324/1/O%20uso%20do%20camalote.pdf); Embrapa Acre, ipê-roxo
 *   (https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1073524/1/regio-centro-oeste-26-07-20171-802-813.pdf).
 * [SAV] World Agroforestry, “Adansonia digitata” (https://apps.worldagroforestry.org/usefultrees/pdflib/Adansonia_digitata_ERI.pdf);
 *   PROTA, “Adansonia grandidieri” (https://uses.plantnet-project.org/en/Adansonia_grandidieri_(PROTA)).
 * [CAM] National Park Service, “Big Bluestem (Andropogon gerardii)” (https://www.nps.gov/miss/learn/nature/prairestsedgbigbl.htm).
 * [ALA] SANBI, “Cyperus papyrus” (https://pza.sanbi.org/node/10012).
 * [TEM] UNESCO, “Białowieża Forest” (https://whc.unesco.org/en/list/33-002) e o estudo dos bosques de
 *   tília, carvalho e carpino (https://link.springer.com/doi/10.1007/s10342-012-0597-6); UNESCO, “Ancient and
 *   Primeval Beech Forests of the Carpathians and Other Regions of Europe” (https://whc.unesco.org/en/decisions/7951).
 * [CON] The Biofiles, “Coast Redwood (Sequoia sempervirens)” (https://www.thebiofiles.com/info/6368).
 * [ALP] Confederação Suíça, “The mystical and mythical edelweiss”
 *   (https://www.aboutswitzerland.eda.admin.ch/en/the-mystical-and-mythical-edelweiss).
 * [TAI] Agência Europeia do Ambiente, EUNIS, “Larix light taiga” (https://eunis.eea.europa.eu/habitats/22306);
 *   Silva Fennica, espruce-da-noruega (https://silvafennica.fi/pdf/54).
 * [TUN] Serviço Florestal dos EUA, “Mountain avens (Dryas octopetala)”
 *   (https://www.fs.usda.gov/wildflowers/plant-of-the-week/dryas_octopetala.shtml); FAO AGRIS, estudo de
 *   aquecimento com salgueiros anões do Ártico (https://agris.fao.org/search/fr/records/65df65f50f3e94b9e5d83121).
 * [MED] APCOR, “Cork oak” (https://apcor.pt/en/cork-oak); Birding in Extremadura, “Dehesa (wood pasture)”
 *   (https://birdinginextremadura.com/en/habitat/dehesas-en/).
 * [MON] Guinness World Records, “Largest inflorescence” e “Slowest-flowering plant”
 *   (https://www.guinnessworldrecords.com/world-records/largest-inflorescence).
 * [DES] National Park Service, “The Saguaro Cactus” (https://www.nps.gov/sagu/learn/nature/Saguaro.htm); Kew,
 *   Plants of the World Online, “Welwitschia mirabilis”
 *   (https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:383591-1/general-information).
 * [MAN] Governo de São Paulo, APA Marinha do Litoral Norte, diagnóstico do manguezal
 *   (https://sigam.ambiente.sp.gov.br/sigam3/Repositorio/511/Documentos/APAM_LN/APAMLN_Manguezal_final.pdf);
 *   ICMBio, “PAN Manguezal” (https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/pan/pan-manguezal/1-ciclo/pan-manguezal-sumario.pdf).
 */
export interface PlantaDoBioma {
  nome: string;
  cientifico: string;
  /** os biomas do mundo (número do Ecoregions 2017) */
  mundo: number[];
  /** os biomas do Brasil (IBGE) */
  brasil?: BiomaBrasil[];
  fato?: string;
  /** a chave da foto no álbum, quando o nome lá é outro */
  foto?: string;
}

export const PLANTAS_DO_BIOMA: PlantaDoBioma[] = [
  // ——— Amazônia [AMZ]
  {
    nome: 'Castanheira',
    cientifico: 'Bertholletia excelsa',
    mundo: [1],
    brasil: ['amazonia'],
    fato: 'Cresce na mata de terra firme; as cutias tiram as sementes do ouriço e enterram algumas, que viram árvores novas.',
  },
  {
    nome: 'Açaizeiro',
    cientifico: 'Euterpe oleracea',
    mundo: [1],
    brasil: ['amazonia'],
    fato: 'Palmeira nativa da Amazônia: dos frutos sai a polpa do açaí e, do caule, o palmito.',
  },
  {
    nome: 'Seringueira',
    cientifico: 'Hevea brasiliensis',
    mundo: [1],
    brasil: ['amazonia'],
    fato: 'Nativa da Amazônia, é a árvore da borracha; em 1876, as sementes dela foram levadas para a Inglaterra.',
  },
  {
    nome: 'Vitória-régia',
    cientifico: 'Victoria amazonica',
    mundo: [1],
    brasil: ['amazonia'],
    fato: 'A folha chega a três metros de largura e aguenta uns 30 quilos, mas não o peso de um adulto.',
  },
  // ——— Cerrado [CER]
  {
    nome: 'Pequizeiro',
    cientifico: 'Caryocar brasiliense',
    mundo: [7],
    brasil: ['cerrado', 'caatinga', 'mata-atlantica', 'amazonia', 'pantanal'],
    fato: 'Árvore frutífera nativa do Cerrado; é proibido cortá-la e vender a madeira.',
  },
  {
    nome: 'Buriti',
    cientifico: 'Mauritia flexuosa',
    mundo: [7, 1],
    brasil: ['cerrado', 'amazonia'],
    fato: 'Palmeira de lugares alagados; no Cerrado, cresce nas veredas.',
  },
  {
    nome: 'Ipê-amarelo-do-cerrado',
    cientifico: 'Handroanthus ochraceus',
    mundo: [7],
    brasil: ['cerrado'],
    fato: 'Na seca, quando está sem folhas, pode dar uma florada intensa.',
  },
  // ——— Caatinga (no mapa do mundo, florestas tropicais secas) [CAA]
  {
    nome: 'Mandacaru',
    cientifico: 'Cereus jamacaru',
    mundo: [2],
    brasil: ['caatinga'],
    fato: 'Cacto da Caatinga de flores grandes e brancas que abrem à noite; na seca, vira comida de cabras, ovelhas e bois.',
  },
  {
    nome: 'Umbuzeiro',
    cientifico: 'Spondias tuberosa',
    mundo: [2],
    brasil: ['caatinga'],
    fato: 'Só existe no semiárido do Brasil; as raízes guardam água e nutrientes para o tempo da seca.',
  },
  {
    nome: 'Juazeiro',
    cientifico: 'Ziziphus joazeiro',
    mundo: [2],
    brasil: ['caatinga'],
    fato: 'A copa verde-escura se destaca na mata seca e dá sombra; na seca, alimenta as abelhas com pólen e néctar.',
  },
  // ——— Mata Atlântica [MAT]
  {
    nome: 'Pau-brasil',
    cientifico: 'Paubrasilia echinata',
    mundo: [1],
    brasil: ['mata-atlantica'],
    fato: 'É a Árvore Nacional e deu nome ao país; a madeira vermelha foi tão explorada que ela ficou rara.',
  },
  {
    nome: 'Araucária',
    cientifico: 'Araucaria angustifolia',
    mundo: [1],
    brasil: ['mata-atlantica'],
    fato: 'Dá o pinhão; a gralha-azul espalha as sementes, e a árvore está ameaçada de extinção.',
  },
  {
    nome: 'Palmito-juçara',
    cientifico: 'Euterpe edulis',
    mundo: [1],
    brasil: ['mata-atlantica'],
    fato: 'Tirar o palmito mata a palmeira; os frutos alimentam umas 70 espécies de bichos.',
  },
  // ——— Pampa e campos temperados [PAM] [CAM]
  {
    nome: 'Butiá',
    cientifico: 'Butia odorata',
    mundo: [8],
    brasil: ['pampa'],
    fato: 'Palmeira nativa do Pampa, de frutos comestíveis; vai de Viamão (RS) até o Uruguai.',
  },
  {
    nome: 'Espinilho',
    cientifico: 'Vachellia caven',
    mundo: [8],
    brasil: ['pampa'],
    fato: 'Árvore pequena de tronco com espinhos; dá nome ao Parque Estadual do Espinilho, na Barra do Quaraí (RS).',
  },
  {
    nome: 'Grama-forquilha',
    cientifico: 'Paspalum notatum',
    mundo: [8],
    brasil: ['pampa'],
    fato: 'Capim nativo do campo do Pampa, onde o gênero Paspalum tem a maior variedade de espécies.',
  },
  {
    nome: 'Capim-andropogon',
    cientifico: 'Andropogon gerardii',
    mundo: [8],
    fato: 'É o capim que domina as pradarias altas da América do Norte; as raízes seguram o solo.',
  },
  // ——— Pantanal e campos alagáveis [PAN] [ALA]
  {
    nome: 'Carandá',
    cientifico: 'Copernicia alba',
    mundo: [9],
    brasil: ['pantanal'],
    fato: 'Palmeira que forma os carandazais; das folhas se fazem chapéus, cestos e cordas.',
  },
  {
    nome: 'Bocaiúva',
    cientifico: 'Acrocomia aculeata',
    mundo: [9],
    brasil: ['pantanal'],
    fato: 'Palmeira de que o povo do Pantanal aproveita tudo; do fruto se fazem óleo e farinha.',
  },
  {
    nome: 'Aguapé',
    cientifico: 'Eichhornia crassipes',
    mundo: [9],
    brasil: ['pantanal'],
    fato: 'Planta aquática que no Pantanal se chama camalote; os Guató faziam esteiras com ela.',
  },
  {
    nome: 'Ipê-roxo',
    cientifico: 'Handroanthus impetiginosus',
    mundo: [9],
    brasil: ['pantanal', 'amazonia', 'cerrado', 'caatinga', 'mata-atlantica'],
    fato: 'Também chamado de piúva; vive em todos os biomas do Brasil menos no Pampa e chega a 30 metros.',
  },
  {
    nome: 'Papiro',
    cientifico: 'Cyperus papyrus',
    mundo: [9],
    fato: 'Margeia as águas do delta do Okavango, em Botsuana, e toma os canais abertos pelos hipopótamos.',
  },
  // ——— Savanas e florestas secas da África [SAV]
  {
    nome: 'Baobá',
    cientifico: 'Adansonia digitata',
    mundo: [7],
    fato: 'Vive nas savanas secas da África; o tronco guarda muita água e as folhas caem na estação seca.',
  },
  {
    nome: 'Baobá-de-grandidier',
    cientifico: 'Adansonia grandidieri',
    mundo: [2],
    fato: 'Só existe em Madagascar, onde vivia na floresta seca; as flores brancas abrem antes das folhas.',
  },
  // ——— Florestas temperadas [TEM]
  {
    nome: 'Carvalho-roble',
    cientifico: 'Quercus robur',
    mundo: [4],
    fato: 'Os carvalhos grandes dão a cara dos bosques antigos da floresta de Białowieża, entre a Polônia e Belarus.',
  },
  {
    nome: 'Faia',
    cientifico: 'Fagus sylvatica',
    mundo: [4],
    fato: 'Depois da última era do gelo, saiu do sul da Europa e foi tomando o continente para o norte.',
  },
  // ——— Florestas temperadas de coníferas [CON] [ALP]
  {
    nome: 'Sequoia-vermelha',
    cientifico: 'Sequoia sempervirens',
    mundo: [5],
    fato: 'Vive no litoral da Califórnia, com muita chuva e neblina; pode passar de mil anos.',
  },
  {
    nome: 'Edelvais',
    cientifico: 'Leontopodium alpinum',
    mundo: [5],
    fato: 'Cresce nas pedras dos Alpes, entre 2.000 e 3.000 metros; cada “flor” é um monte de florzinhas.',
  },
  // ——— Taiga [TAI]
  {
    nome: 'Lariço-siberiano',
    cientifico: 'Larix sibirica',
    mundo: [6],
    fato: 'Uma conífera que perde as agulhas: elas ficam amarelas e caem todo outono.',
  },
  {
    nome: 'Espruce-da-noruega',
    cientifico: 'Picea abies',
    mundo: [6],
    fato: 'Uma das árvores que mais dominam as florestas da Eurásia.',
  },
  // ——— Tundra [TUN]
  {
    nome: 'Dríade',
    cientifico: 'Dryas octopetala',
    mundo: [11],
    fato: 'As flores seguem o sol e esquentam por dentro, o que atrai as moscas que as polinizam.',
  },
  {
    nome: 'Salgueiro-ártico',
    cientifico: 'Salix arctica',
    mundo: [11],
    fato: 'Um salgueiro anão que cresce deitado rente ao chão no Ártico.',
  },
  // ——— Matas mediterrâneas [MED]
  {
    nome: 'Sobreiro',
    cientifico: 'Quercus suber',
    mundo: [12],
    fato: 'Dá a cortiça, tirada da casca mais ou menos a cada nove anos sem matar a árvore.',
  },
  {
    nome: 'Azinheira',
    cientifico: 'Quercus ilex',
    mundo: [12],
    fato: 'Com o sobreiro, é a árvore dos montados (as dehesas) da Península Ibérica.',
  },
  // ——— Campos de montanha [MON]
  {
    nome: 'Puya-de-raimondi',
    cientifico: 'Puya raimondii',
    mundo: [10],
    fato: 'Vive no alto dos Andes do Peru e da Bolívia; floresce uma vez só, depois de 80 a 150 anos, e morre.',
  },
  // ——— Desertos [DES]
  {
    nome: 'Saguaro',
    cientifico: 'Carnegiea gigantea',
    mundo: [13],
    fato: 'Este cacto só existe no deserto de Sonora e chega a uns 15 metros; o frio forte o machuca.',
  },
  {
    nome: 'Welwitschia',
    cientifico: 'Welwitschia mirabilis',
    mundo: [13],
    fato: 'Tem só duas folhas, que crescem a vida inteira; algumas passam de mil anos.',
  },
  // ——— Manguezais [MAN]
  {
    nome: 'Mangue-vermelho',
    cientifico: 'Rhizophora mangle',
    mundo: [14],
    fato: 'Costuma ficar na beira do mangue que dá para o mar.',
  },
  {
    nome: 'Mangue-branco',
    cientifico: 'Laguncularia racemosa',
    mundo: [14],
    fato: 'Vive nas costas de água pouco salgada; também se chama tinteira.',
  },
  {
    nome: 'Mangue-preto',
    cientifico: 'Avicennia schaueriana',
    mundo: [14],
    fato: 'Aguenta o chão mais salgado que os outros mangues.',
  },
];

export const plantasDoBiomaMundo = (num: number) => PLANTAS_DO_BIOMA.filter((p) => p.mundo.includes(num));
export const plantasDoBiomaBrasil = (id: BiomaBrasil) => PLANTAS_DO_BIOMA.filter((p) => p.brasil?.includes(id));
