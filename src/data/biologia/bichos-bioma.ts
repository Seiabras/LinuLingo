import type { BiomaBrasil } from './biomas-ibge';

/**
 * Os bichos de cada bioma (pedido do dono, 17/10/2026: “os bichos listados têm que ser do bioma, esse é o
 * principal”). Cada bicho diz em quais biomas do mundo (o número do Ecoregions 2017, ver `biomas.ts`) e
 * em quais biomas do Brasil (os 6 do IBGE) ele vive, com a fonte ao lado. Os fatos só repetem o que a
 * fonte diz. A foto vem do álbum (`fotos-album.ts`, procurada pelo nome em português, ou por `foto`);
 * quem ainda não tem foto ganha uma com `scripts/baixar-fotos-album.mjs`, que procura pelo nome
 * científico, e até lá aparece o cartão desenhado pelo app.
 *
 * Fontes, por grupo:
 * [TM-AMZ] Greenpeace Brasil, “Animais em extinção na Amazônia”
 *   (https://www.greenpeace.org/brasil/blog/animais-em-extincao-na-amazonia/); Portal Amazônia, “As 10 espécies
 *   mais ameaçadas da Amazônia” (https://portalamazonia.com/amazonia/as-10-especies-mais-ameacadas-da-amazonia).
 * [TM-CER] Toda Matéria, “Animais do Cerrado” (https://www.todamateria.com.br/animais-do-cerrado/); ICMBio,
 *   cartilha “Fauna” (https://www1.icmbio.gov.br/educacaoambiental/images/stories/biblioteca/educacao_ambiental/Cartilha_fauna_Fabrica_Verde_2011.pdf);
 *   Xeno-canto, gravações de Cariama cristata (https://www.xeno-canto.org/genus/Cariama).
 * [TM-CAA] Toda Matéria, “Animais da Caatinga” (https://www.todamateria.com.br/animais-da-caatinga/); InfoEscola,
 *   “Fauna da Caatinga” (https://www.infoescola.com/biomas/fauna-da-caatinga).
 * [TM-MAT] Toda Matéria, “Animais da Mata Atlântica” (https://www.todamateria.com.br/animais-da-mata-atlantica/);
 *   Revista Pesquisa FAPESP, “No fio da navalha” (https://revistapesquisa.fapesp.br/no-fio-da-navalha/).
 * [TM-PAM] Toda Matéria, “Animais do Pampa” (https://www.todamateria.com.br/animais-do-pampa/); National
 *   Geographic Brasil, “Os 3 fatos sobre os pampas” (2024).
 * [PAN] Bahia.ws, “Fauna do Pantanal mato-grossense” (https://bahia.ws/en/fauna-do-pantanal-matogrossense/).
 * [SAV] National Geographic Education, “Serengeti” (https://education.nationalgeographic.org/resource/serengeti/).
 * [TUN] WorldAtlas, “Animals that live in the tundra” (https://www.worldatlas.com/animals/animals-that-live-in-the-tundra.html).
 * [TAI] WorldAtlas, “What animals live in the taiga” (https://animals.worldatlas.com/location/what-animals-live-in-the-taiga-60083.html).
 * [TEM] UNESCO, “Białowieża Forest” (https://whc.unesco.org/en/list/33-002); WWF, “Manchurian mixed forests”
 *   (https://www.oneearth.org/ecoregions/manchurian-mixed-forests/); One Earth, “Carpathian montane forests”.
 * [MED] Agência Europeia do Ambiente, EUNIS, “Dehesa” (https://eunis.eea.europa.eu/habitats/10129).
 * [MON] CITES, proposta CoP12 Prop. 12 (vicunha); Animal Diversity Web, “Vultur gryphus”; WCS Argentina,
 *   “Patagonian and Andean Steppe” (https://argentina.wcs.org/Wild-Places/Patagonian-and-Andean-Steppe.aspx).
 * [ALP] Confederação Suíça, “Alpine flora and fauna” (https://www.aboutswitzerland.eda.admin.ch/en/alpine-flora-and-fauna).
 * [DES] Active Wild, “Desert animals” (https://www.activewild.com/desert-animals/).
 * [MAN] ICMBio, “PAN Manguezal” (https://www.gov.br/icmbio/pt-br/assuntos/biodiversidade/pan/pan-manguezal/1-ciclo/pan-manguezal-sumario.pdf).
 * [RAN] George Mason University, “The golden poison dart frog” (https://mason.gmu.edu/~azuckers/IT213/dfrogs/gold.htm).
 */
export interface BichoDoBioma {
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

export const BICHOS_DO_BIOMA: BichoDoBioma[] = [
  // ——— Amazônia e outras florestas tropicais úmidas [TM-AMZ] [RAN]
  {
    nome: 'Onça-pintada',
    cientifico: 'Panthera onca',
    mundo: [1, 9],
    brasil: ['amazonia', 'pantanal', 'mata-atlantica'],
    fato: 'Vive na Amazônia e no Pantanal; a perda do lugar onde vive e a caça são as maiores ameaças.',
  },
  { nome: 'Boto-cor-de-rosa', cientifico: 'Inia geoffrensis', mundo: [1], brasil: ['amazonia'], fato: 'É o protagonista de muitas lendas amazônicas.' },
  {
    nome: 'Peixe-boi-da-amazônia',
    cientifico: 'Trichechus inunguis',
    mundo: [1],
    brasil: ['amazonia'],
    fato: 'É o menor dos peixes-bois e vive em rios e lagos de água doce.',
  },
  { nome: 'Harpia', cientifico: 'Harpia harpyja', mundo: [1], brasil: ['amazonia'], fato: 'É a maior ave de rapina do Brasil.' },
  {
    nome: 'Rã-dourada',
    cientifico: 'Phyllobates terribilis',
    mundo: [1],
    fato: 'Vive só nas florestas úmidas da costa do Pacífico da Colômbia; o veneno deve vir das formigas que ela come.',
  },
  // ——— Mata Atlântica [TM-MAT]
  {
    nome: 'Mico-leão-dourado',
    cientifico: 'Leontopithecus rosalia',
    mundo: [1],
    brasil: ['mata-atlantica'],
    fato: 'A Mata Atlântica tem quatro espécies de micos-leões, cada uma numa região.',
  },
  { nome: 'Muriqui-do-norte', cientifico: 'Brachyteles hypoxanthus', mundo: [1], brasil: ['mata-atlantica'] },
  {
    nome: 'Bugio-ruivo',
    cientifico: 'Alouatta guariba',
    mundo: [1],
    brasil: ['mata-atlantica'],
    fato: 'Está entre os bichos da Mata Atlântica em risco de extinção.',
  },
  // ——— Cerrado e savanas tropicais [TM-CER] [SAV]
  { nome: 'Lobo-guará', cientifico: 'Chrysocyon brachyurus', mundo: [7], brasil: ['cerrado'], fato: 'É o maior canídeo da América do Sul.' },
  {
    nome: 'Tamanduá-bandeira',
    cientifico: 'Myrmecophaga tridactyla',
    mundo: [7],
    brasil: ['cerrado', 'mata-atlantica'],
    fato: 'Come formigas, cupins e larvas, e vive sozinho quando adulto.',
  },
  {
    nome: 'Tatu-canastra',
    cientifico: 'Priodontes maximus',
    mundo: [7],
    brasil: ['cerrado'],
    fato: 'O maior tatu: come formigas e cupins, tem o faro ótimo e a visão fraca.',
  },
  { nome: 'Seriema', cientifico: 'Cariama cristata', mundo: [7], brasil: ['cerrado'], fato: 'Às vezes canta em dueto com outra seriema.' },
  { nome: 'Ema', cientifico: 'Rhea americana', mundo: [7, 8], brasil: ['cerrado', 'pampa'] },
  { nome: 'Veado-campeiro', cientifico: 'Ozotoceros bezoarticus', mundo: [7, 8], brasil: ['cerrado', 'pampa'], fato: 'Está ameaçado de extinção.' },
  {
    nome: 'Girafa',
    cientifico: 'Giraffa camelopardalis',
    mundo: [7],
    fato: 'Está entre os grandes mamíferos do Serengeti, uma das savanas mais conhecidas da África.',
  },
  { nome: 'Gnu', cientifico: 'Connochaetes taurinus', mundo: [7], fato: 'Mais de um milhão de gnus dão a volta nas planícies do Serengeti todo ano.' },
  { nome: 'Leão', cientifico: 'Panthera leo', mundo: [7], fato: 'Vive nas savanas do Serengeti, entre o Quênia e a Tanzânia.' },
  { nome: 'Rinoceronte-negro', cientifico: 'Diceros bicornis', mundo: [7], fato: 'Ameaçado pela caça ilegal, ainda resiste em pequenos grupos no Serengeti.' },
  // ——— Caatinga (no mapa do mundo, florestas tropicais secas) [TM-CAA]
  {
    nome: 'Ararinha-azul',
    cientifico: 'Cyanopsitta spixii',
    mundo: [2],
    brasil: ['caatinga'],
    fato: 'Foi considerada extinta na natureza; sobrevive em cativeiro, e há programas para devolvê-la à Caatinga.',
  },
  { nome: 'Arara-azul-de-lear', cientifico: 'Anodorhynchus leari', mundo: [2], brasil: ['caatinga'], fato: 'Vive só na Caatinga da Bahia.' },
  {
    nome: 'Tatu-bola',
    cientifico: 'Tolypeutes tricinctus',
    mundo: [2, 7],
    brasil: ['caatinga', 'cerrado'],
    fato: 'É o menor tatu do Brasil e só existe aqui.',
  },
  // ——— Pampa e campos temperados [TM-PAM] [MON]
  { nome: 'Graxaim-do-campo', cientifico: 'Lycalopex gymnocercus', mundo: [8], brasil: ['pampa'] },
  { nome: 'Zorrilho', cientifico: 'Conepatus chinga', mundo: [8], brasil: ['pampa'] },
  { nome: 'Quero-quero', cientifico: 'Vanellus chilensis', mundo: [8], brasil: ['pampa'] },
  { nome: 'Guanaco', cientifico: 'Lama guanicoe', mundo: [8], fato: 'É o maior herbívoro selvagem da estepe da Patagônia.' },
  // ——— Pantanal e campos alagáveis [PAN]
  {
    nome: 'Tuiuiú',
    cientifico: 'Jabiru mycteria',
    mundo: [9],
    brasil: ['pantanal'],
    fato: 'A ave símbolo do Pantanal: pesca peixes e bichinhos na água rasa.',
  },
  { nome: 'Jacaré-do-pantanal', cientifico: 'Caiman yacare', mundo: [9], brasil: ['pantanal'] },
  { nome: 'Capivara', cientifico: 'Hydrochoerus hydrochaeris', mundo: [9], brasil: ['pantanal'], fato: 'O maior roedor do mundo; vive em grupo.' },
  {
    nome: 'Ariranha',
    cientifico: 'Pteronura brasiliensis',
    mundo: [9],
    brasil: ['pantanal'],
    fato: 'Domina os rios e as lagoas, caçando peixes e crustáceos.',
  },
  { nome: 'Cervo-do-pantanal', cientifico: 'Blastocerus dichotomus', mundo: [9], brasil: ['pantanal'] },
  { nome: 'Arara-azul', cientifico: 'Anodorhynchus hyacinthinus', mundo: [9], brasil: ['pantanal'] },
  // ——— Florestas temperadas [TEM]
  {
    nome: 'Bisão-europeu',
    cientifico: 'Bison bonasus',
    mundo: [4],
    fato: 'Extinto na natureza no começo do século XX, voltou à floresta de Białowieża, na Polônia, em 1952.',
  },
  {
    nome: 'Tigre-siberiano',
    cientifico: 'Panthera tigris',
    mundo: [4],
    fato: 'Vive nas florestas mistas do Extremo Oriente russo; os pinhões do pinheiro-coreano alimentam as presas dele.',
  },
  {
    nome: 'Urso-pardo',
    cientifico: 'Ursus arctos',
    mundo: [4, 6],
    fato: 'Nos Cárpatos, usa as florestas de coníferas e as mistas; no fim do verão, come mirtilos nos campos altos.',
  },
  // ——— Florestas temperadas de coníferas (os Alpes) [ALP]
  {
    nome: 'Camurça',
    cientifico: 'Rupicapra rupicapra',
    mundo: [5],
    fato: 'No verão fica nos campos altos dos Alpes; no inverno desce para as encostas com floresta.',
  },
  // ——— Taiga [TAI]
  { nome: 'Alce', cientifico: 'Alces alces', mundo: [6], fato: 'O maior cervídeo vivo.' },
  { nome: 'Glutão', cientifico: 'Gulo gulo', mundo: [6, 11], fato: 'Parente das doninhas: come carniça e também caça.' },
  { nome: 'Lince-euro-asiático', cientifico: 'Lynx lynx', mundo: [6], foto: 'lince', fato: 'O maior felino da Europa.' },
  // ——— Tundra [TUN]
  {
    nome: 'Boi-almiscarado',
    cientifico: 'Ovibos moschatus',
    mundo: [11],
    fato: 'Passa o ano todo na tundra do Ártico; em perigo, os adultos fazem um círculo em volta dos filhotes.',
  },
  { nome: 'Raposa-do-ártico', cientifico: 'Vulpes lagopus', mundo: [11], fato: 'O pelo fica branco no inverno e marrom ou cinza no verão.' },
  { nome: 'Rena', cientifico: 'Rangifer tarandus', mundo: [11, 6], fato: 'Rena e caribu são o mesmo bicho, que migra pela tundra.' },
  // ——— Matas mediterrâneas [MED]
  { nome: 'Lince-ibérico', cientifico: 'Lynx pardinus', mundo: [12], fato: 'Vive nos matagais e nos montados (as dehesas) da Península Ibérica.' },
  { nome: 'Águia-imperial-ibérica', cientifico: 'Aquila adalberti', mundo: [12], fato: 'Só existe na Península Ibérica e vive nos montados.' },
  // ——— Campos de montanha [MON]
  { nome: 'Vicunha', cientifico: 'Vicugna vicugna', mundo: [10], fato: 'Vive na puna dos Andes, entre 3.000 e 4.600 metros de altitude.' },
  {
    nome: 'Condor-dos-andes',
    cientifico: 'Vultur gryphus',
    mundo: [10],
    fato: 'Plana sobre os campos abertos dos Andes, até uns 5.000 metros, usando as correntes de ar.',
  },
  // ——— Desertos [DES]
  {
    nome: 'Dromedário',
    cientifico: 'Camelus dromedarius',
    mundo: [13],
    fato: 'A corcova guarda gordura (não água); os cílios duplos e as narinas que fecham seguram a areia.',
  },
  { nome: 'Feneco', cientifico: 'Vulpes zerda', mundo: [13], fato: 'As orelhas enormes soltam o calor do corpo e escutam as presas debaixo da areia.' },
  // ——— Manguezais [MAN]
  {
    nome: 'Caranguejo-uçá',
    cientifico: 'Ucides cordatus',
    mundo: [14],
    fato: 'É mais comum nos manguezais preservados, por isso serve para medir a saúde do mangue.',
  },
  { nome: 'Guará', cientifico: 'Eudocimus ruber', mundo: [14], fato: 'Ave vermelha do mangue: faz o ninho e passa boa parte da vida lá.' },
];

export const bichosDoBiomaMundo = (num: number) => BICHOS_DO_BIOMA.filter((b) => b.mundo.includes(num));
export const bichosDoBiomaBrasil = (id: BiomaBrasil) => BICHOS_DO_BIOMA.filter((b) => b.brasil?.includes(id));
