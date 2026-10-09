import type { LanguageInfo, LanguagePack } from './types';
import { ARABE } from './ar';
import { PERSA } from './fa';
import { URDU } from './ur';
import { PANJABI } from './pa';
import { OKINAWANO } from './ryu';
import { DHIVEHI } from './dv';
import { UIGUR } from './ug';
import { PASHTO } from './ps';
import { CURDO_CENTRAL } from './ckb';
import { CURMANJI } from './kmr';
import { EWE } from './ee';
import { ARABE_EGIPCIO } from './arz';
import { IIDICHE } from './yi';
import { HEBRAICO } from './he';
import { MALTES } from './mt';
import { CANTONES } from './yue';
import { TAMAZIGHT } from './zgh';
import { AINU } from './ain';
import { ROMENO } from './ro';
import { RUSSO } from './ru';
import { ESPANHOL } from './es';
import { ITALIANO } from './it';
import { PORTUGUES } from './pt';
import { SUECO } from './sv';
import { NORUEGUES } from './nb';
import { DINAMARQUES } from './da';
import { FRANCES } from './fr';
import { CATALAO } from './ca';
import { ISLANDES } from './is';
import { FINLANDES } from './fi';
import { ESTONIANO } from './et';
import { FEROES } from './fo';
import { LITUANO } from './lt';
import { LETAO } from './lv';
import { SUAILI } from './sw';
import { GALEGO } from './gl';
import { ASTURIANO } from './ast';
import { OCCITANO } from './oc';
import { SARDO } from './sc';
import { ROMANCHE } from './rm';
import { FRIULANO } from './fur';
import { LATIM } from './la';
import { NORDICO_ANTIGO } from './non';
import { FRANCES_ANTIGO } from './fro';
import { ESLAVO_ECLESIASTICO } from './cu';
import { CASTELHANO_MEDIEVAL } from './osp';
import { ALTO_ALEMAO_MEDIO } from './gmh';
import { ESPERANTO } from './eo';
import { INTERLINGUA } from './ia';
import { VOLAPUK } from './vo';
import { TOKI_PONA } from './tok';
import { LOJBAN } from './jbo';
import { IDO } from './ido';
import { NOVIAL } from './nov';
import { INTERSLAVO } from './isv';
import { KLINGON } from './tlh';
import { JUDEU_ESPANHOL } from './lad';
import { INGLES } from './en';
import { INDONESIO } from './id';
import { JAVANES } from './jv';
import { MALGAXE } from './mg';
import { MALAIO } from './ms';
import { VIETNAMITA } from './vi';
import { IORUBA } from './yo';
import { LADINO_DOLOMITAS } from './lld';
import { ALEMAO } from './de';
import { NEERLANDES } from './nl';
import { AFRICANER } from './af';
import { POLONES } from './pl';
import { TCHECO } from './cs';
import { ESLOVACO } from './sk';
import { UCRANIANO } from './uk';
import { TURCO } from './tr';
import { UZBEQUE } from './uz';
import { JAPONES } from './ja';
import { COREANO } from './ko';
import { LUXEMBURGUES } from './lb';
import { BULGARO } from './bg';
import { SERVIO } from './sr';
import { CROATA } from './hr';
import { ESLOVENO } from './sl';
import { BASCO } from './eu';
import { MACEDONIO } from './mk';
import { AROMENO } from './rup';
import { CHINES } from './zh';
import { CORSO } from './co';
import { ARAGONES } from './an';
import { VALAO } from './wa';
import { VENETO } from './vec';
import { NAPOLITANO } from './nap';
import { SICILIANO } from './scn';
import { FRISIO } from './fy';
import { BAIXO_ALEMAO } from './nds';
import { SCOTS } from './sco';
import { SUICO_ALEMAO } from './gsw';
import { BIELORRUSSO } from './be';
import { BOSNIO } from './bs';
import { ALTO_SORABIO } from './hsb';
import { CASSUBIO } from './csb';
import { PIEMONTES } from './pms';
import { LIGURE } from './lij';
import { LOMBARDO } from './lmo';
import { MIRANDES } from './mwl';
import { FRANCOPROVENCAL } from './frp';
import { GREGO } from './el';
import { ALBANES } from './sq';
import { ARMENIO } from './hy';
import { HINDI } from './hi';
import { GUARANI } from './gn';
import { TUPI_ANTIGO } from './tpw';
import { HAUCA } from './ha';
import { IGBO } from './ig';
import { NHEENGATU } from './yrl';
import { BENGALI } from './bn';
import { QUECHUA } from './qu';
import { KAINGANG } from './kgp';
import { TIKUNA } from './tca';
import { GUARANI_MBYA } from './gun';
import { GEORGIANO } from './ka';
import { XAVANTE } from './xav';
import { TUKANO } from './tuo';
import { TAILANDES } from './th';
import { KHMER } from './km';
import { BANIWA } from './kpc';
import { TERENA } from './ter';
import { ASHANINKA } from './cni';
import { LAOSIANO } from './lo';
import { HUNI_KUIN } from './cbs';
import { MARUBO } from './mzr';
import { YAWANAWA } from './ywn';
import { APACHE_OCIDENTAL } from './apw';
import { BURIATO } from './bxr';
import { LINGALA } from './ln';
import { SHOSHONE } from './shh';
import { LINGIT } from './tli';
import { SHIPIBO_KONIBO } from './shp';
import { HOPI } from './hop';
import { WOLOF } from './wo';
import { XHOSA } from './xh';
import { ZULU } from './zu';
import { AIMARA } from './ay';
import { GUARANI_KAIOWA } from './kgk';
import { NAUATLE } from './nah';
import { NAVAJO } from './nv';
import { MAORI } from './mi';
import { GUARANI_ANTIGO } from './oldp1258';
import { HAVAIANO } from './haw';
import { TELUGO } from './te';
import { OROMO } from './om';
import { SOMALI } from './so';
import { MARATHI } from './mr';
import { AMARICO } from './am';
import { MONGOL } from './mn';
import { MONGOL_TRADICIONAL } from './mvf';
import { MANCHU } from './mnc';
import { GUARANI_NANDEVA } from './nhd';
import { TAPIETE } from './tpj';
import { HUNGARO } from './hu';
import { TSAKONIO } from './tsd';
import { PIDGIN_NIGERIANO } from './pcm';
import { TAMIL } from './ta';
import { TAGALO } from './tl';
import { ARMENIO_OCIDENTAL } from './hyw';
import { TETUM } from './tdt';
import { MAPUDUNGUN } from './arn';
import { GAELICO_ESCOCES } from './gd';
import { CRIOULO_HAITIANO } from './ht';
import { KARITIANA } from './ktn';
import { SATERE_MAWE } from './mav';
import { KAAPOR } from './urb';
import { MUNDURUKU } from './myu';
import { AWETI } from './awe';
import { QUIMBUNDO } from './kmb';
import { PALENQUERO } from './pln';
import { GROENLANDES } from './kl';
import { BRETAO } from './br';
import { LAKOTA } from './lkt';
import { SAMI_DO_NORTE } from './se';
import { FON } from './fon';
import { KAMAIURA } from './kay';
import { AIKEWARA } from './mdz';
import { BIRMANES } from './my';

/** Idiomas com conteúdo pronto. */
export const PACKS: Record<string, LanguagePack> = { ro: ROMENO, ru: RUSSO, es: ESPANHOL, it: ITALIANO, pt: PORTUGUES, sv: SUECO, nb: NORUEGUES, da: DINAMARQUES, fr: FRANCES, ca: CATALAO, is: ISLANDES, fi: FINLANDES, et: ESTONIANO, fo: FEROES, lt: LITUANO, lv: LETAO, sw: SUAILI, ja: JAPONES, ko: COREANO,
  // incompletos (só o A1 por enquanto; ver o campo `incomplete` de cada pacote)
  gl: GALEGO, ast: ASTURIANO, oc: OCCITANO, sc: SARDO, rm: ROMANCHE, fur: FRIULANO, la: LATIM, non: NORDICO_ANTIGO, fro: FRANCES_ANTIGO, cu: ESLAVO_ECLESIASTICO, osp: CASTELHANO_MEDIEVAL, eo: ESPERANTO, ia: INTERLINGUA, vo: VOLAPUK, tok: TOKI_PONA, jbo: LOJBAN, io: IDO, tlh: KLINGON, nov: NOVIAL, isv: INTERSLAVO, lad: JUDEU_ESPANHOL, en: INGLES, id: INDONESIO, ms: MALAIO, vi: VIETNAMITA, yo: IORUBA,
  lld: LADINO_DOLOMITAS, de: ALEMAO, gmh: ALTO_ALEMAO_MEDIO, nl: NEERLANDES, af: AFRICANER, pl: POLONES, cs: TCHECO, sk: ESLOVACO, uk: UCRANIANO, tr: TURCO, uz: UZBEQUE,
  lb: LUXEMBURGUES, bg: BULGARO, sr: SERVIO, hr: CROATA, sl: ESLOVENO, eu: BASCO,
  mk: MACEDONIO, rup: AROMENO, zh: CHINES,
  co: CORSO, an: ARAGONES, wa: VALAO, vec: VENETO, nap: NAPOLITANO, scn: SICILIANO,
  fy: FRISIO, nds: BAIXO_ALEMAO, sco: SCOTS, gsw: SUICO_ALEMAO, be: BIELORRUSSO, bs: BOSNIO, hsb: ALTO_SORABIO, csb: CASSUBIO,
  pms: PIEMONTES, lij: LIGURE, lmo: LOMBARDO, mwl: MIRANDES, frp: FRANCOPROVENCAL,
  el: GREGO, sq: ALBANES, hy: ARMENIO,
  hi: HINDI, gn: GUARANI, tpw: TUPI_ANTIGO, ha: HAUCA, ig: IGBO, yrl: NHEENGATU, bn: BENGALI, qu: QUECHUA, kgp: KAINGANG, tca: TIKUNA,
  xav: XAVANTE, tuo: TUKANO, gun: GUARANI_MBYA, ka: GEORGIANO, th: TAILANDES, km: KHMER,
  ay: AIMARA, kgk: GUARANI_KAIOWA, nah: NAUATLE, kpc: BANIWA, ter: TERENA, cni: ASHANINKA, lo: LAOSIANO, cbs: HUNI_KUIN, mzr: MARUBO, ywn: YAWANAWA,
  apw: APACHE_OCIDENTAL, bxr: BURIATO, ln: LINGALA, shh: SHOSHONE, tli: LINGIT, shp: SHIPIBO_KONIBO, hop: HOPI, wo: WOLOF, xh: XHOSA, zu: ZULU,
  nv: NAVAJO, nhd: GUARANI_NANDEVA, tpj: TAPIETE, mi: MAORI, oldp1258: GUARANI_ANTIGO, haw: HAVAIANO, te: TELUGO, om: OROMO, so: SOMALI, mr: MARATHI, am: AMARICO, mn: MONGOL, mvf: MONGOL_TRADICIONAL, mnc: MANCHU,
  hu: HUNGARO, tsd: TSAKONIO, pcm: PIDGIN_NIGERIANO, ta: TAMIL, tl: TAGALO, hyw: ARMENIO_OCIDENTAL,
  tdt: TETUM, arn: MAPUDUNGUN, gd: GAELICO_ESCOCES, ht: CRIOULO_HAITIANO, ktn: KARITIANA, mav: SATERE_MAWE, urb: KAAPOR, myu: MUNDURUKU, awe: AWETI, kmb: QUIMBUNDO,
  pln: PALENQUERO, kl: GROENLANDES, br: BRETAO, lkt: LAKOTA, se: SAMI_DO_NORTE, fon: FON, ar: ARABE,
  fa: PERSA, ur: URDU, ryu: OKINAWANO, arz: ARABE_EGIPCIO, yi: IIDICHE, he: HEBRAICO, mt: MALTES, dv: DHIVEHI, ug: UIGUR, ps: PASHTO, ckb: CURDO_CENTRAL, kmr: CURMANJI, ee: EWE, kay: KAMAIURA, mdz: AIKEWARA, my: BIRMANES, jv: JAVANES, yue: CANTONES, mg: MALGAXE, zgh: TAMAZIGHT, ain: AINU, pa: PANJABI };

/** Todos os idiomas planejados, com família, ramo e região (agrupam o seletor). */
export const LANGUAGES: LanguageInfo[] = [
  ROMENO,
  RUSSO,
  UCRANIANO,
  POLONES,
  TCHECO,
  ESLOVACO,
  BULGARO,
  SERVIO,
  CROATA,
  ESLOVENO,
  MACEDONIO,
  BIELORRUSSO,
  BOSNIO,
  ALTO_SORABIO,
  CASSUBIO,
  ESLAVO_ECLESIASTICO,
  ESPANHOL,
  ITALIANO,
  PORTUGUES,
  FRANCES,
  CATALAO,
  GALEGO,
  ASTURIANO,
  ARAGONES,
  MIRANDES,
  OCCITANO,
  SARDO,
  CORSO,
  VENETO,
  NAPOLITANO,
  SICILIANO,
  PIEMONTES,
  LIGURE,
  LOMBARDO,
  ROMANCHE,
  FRIULANO,
  LADINO_DOLOMITAS,
  VALAO,
  FRANCOPROVENCAL,
  LATIM,
  FRANCES_ANTIGO,
  CASTELHANO_MEDIEVAL,
  JUDEU_ESPANHOL,
  AROMENO,
  BASCO,
  SUECO,
  NORUEGUES,
  DINAMARQUES,
  ISLANDES,
  NORDICO_ANTIGO,
  ESPERANTO,
  // interlíngua: a segunda língua construída com curso de verdade no app (08/10/2026) — mesma
  // família "Construída", ramo "Auxiliares" do esperanto, mas vocabulário prototipado a partir do
  // inglês/francês/italiano/espanhol-português (IALA, 1951), não criado do zero por um autor único
  INTERLINGUA,
  VOLAPUK,
  TOKI_PONA,
  LOJBAN,
  IDO,
  KLINGON,
  // novial: terceira língua construída com curso de verdade (08/10/2026), depois da segunda leva
  // (ido/klingon/toki pona/lojban/volapük) — publicado por Otto Jespersen em 1928
  NOVIAL,
  // interslavo: quarta língua construída com curso de verdade (08/10/2026) — não é "a priori" nem
  // o projeto de um autor só, e sim uma língua zonal, montada com as raízes que quase toda língua
  // eslava viva tem em comum (comitê fundido em 2017)
  INTERSLAVO,
  INGLES,
  ALEMAO,
  ALTO_ALEMAO_MEDIO,
  NEERLANDES,
  AFRICANER,
  LUXEMBURGUES,
  FRISIO,
  BAIXO_ALEMAO,
  SCOTS,
  SUICO_ALEMAO,
  FINLANDES,
  FEROES,
  ESTONIANO,
  LITUANO,
  LETAO,
  JAPONES,
  COREANO,
  // ramos próprios do indo-europeu, sem parentes vivos próximos
  GREGO,
  ALBANES,
  ARMENIO,
  // georgiano: família cartveliana própria, sem parentesco com o indo-europeu
  GEORGIANO,
  // as maiores línguas da Ásia (Ethnologue, falantes nativos + segunda língua; o russo já está no app)
  ARABE,
  CHINES,
  // birmanês: mesma família sino-tibetana do chinês, mas ramo bem diferente (tibeto-birmanês ›
  // lolo-birmanês, não sinítico) — parente distante, não inteligível com o mandarim
  BIRMANES,
  // cantonês: mesmo ramo sinítico do mandarim, mas ramo yue, não mandarim — pouquíssima
  // inteligibilidade mútua, mesmo escrevendo com caracteres parecidos; língua do dia a dia de Hong
  // Kong, Macau e da província de Guangdong (China já tem o mandarim no app)
  CANTONES,
  HINDI,
  BENGALI,
  INDONESIO,
  // malaio: a outra norma padrão da mesma língua do indonésio (Glottolog: Standard Malay-Indonesian ›
  // Standard Malay), no padrão da Malásia — vocabulário e grafia próprios (kereta × mobil, bas × bus)
  MALAIO,
  // javanês: a língua regional mais falada da Indonésia (mais falantes nativos do que o indonésio,
  // que é a língua franca/oficial) — mesmo ramo malaio-polinésio, língua diferente, com registros de
  // fala próprios (ngoko/krama)
  JAVANES,
  // malgaxe: mesma família austronésia/malaio-polinésia do indonésio e do javanês, mas falado em
  // Madagascar, ao lado da África — os primeiros falantes migraram de Borneo (parente mais próximo
  // hoje: o maanyan), não do continente africano; língua oficial do país ao lado do francês, ordem
  // VOS (verbo-objeto-sujeito), diferente da ordem SVO do indonésio/javanês
  MALGAXE,
  // maori e havaiano: mesma família austronésia do indonésio (ramo polinésio), mas bem mais distantes
  // dentro dela; maori e havaiano são parentes próximos entre si (ambos polinésios), mas não a mesma
  // língua
  MAORI,
  HAVAIANO,
  // urdu: mesmo ramo indo-ariano do hindi (hi) — urdu e hindi compartilham a base cotidiana do
  // vocabulário (hindustani), mas divergem no registro formal (urdu puxa pro persa/árabe, hindi pro
  // sânscrito) e na escrita (perso-árabe nastaliq × devanágari); ver cognateNote do pacote
  URDU,
  // panjabi: ramo indo-ariano, parente próximo do urdu/hindi (mesma base lexical, SOV), mas com
  // alfabeto próprio (Shahmukhi, perso-árabe) e TOM na fala; maior língua materna do Paquistão
  // (37% do censo de 2023), mas sem status oficial lá (o urdu é o oficial)
  PANJABI,
  MARATHI,
  VIETNAMITA,
  KHMER,
  TELUGO,
  // tailandês e laosiano: família kra-dai, parentes reais entre si (mutuamente inteligíveis em boa
  // parte), mas sem parentesco com o vietnamita nem com o khmer (vizinhos geográficos, não linguísticos)
  TAILANDES,
  LAOSIANO,
  TURCO,
  // uzbeque: mesma família túrquica do turco, mas ramo carlúquico (não oghuz), parente mais próximo
  // do uigur, não do turco
  UZBEQUE,
  // línguas indígenas das Américas (família tupi-guarani)
  GUARANI,
  GUARANI_MBYA,
  GUARANI_KAIOWA,
  GUARANI_NANDEVA,
  TAPIETE,
  // guarani antigo/colonial: forma ancestral do guarani paraguaio, documentada pelos jesuítas
  GUARANI_ANTIGO,
  TUPI_ANTIGO,
  NHEENGATU,
  // ka'apor: também tupi-guarani, mas do subgrupo VIII (com o guajá), não do guarani nem do
  // tupinambá — a língua do povo Ka'apor, no norte do Maranhão (TI Alto Turiaçu)
  KAAPOR,
  // kamaiurá: tupi-guarani do Alto Xingu (MT), ramo próprio na família (subconjunto VII de Rodrigues);
  // guarda as consoantes finais que o guarani perdeu (jawat, onça × guarani jagua)
  KAMAIURA,
  // aikewára (suruí do Pará): tupi-guarani do subgrupo IV (com o asurini do Tocantins e o parakanã),
  // a língua do povo Aikewara, das TIs Sororó e Tuwa Apekuokawera, no sudeste do Pará
  AIKEWARA,
  // sateré-mawé: tronco tupi, mas não tupi-guarani — ramo próprio (Mawé) dentro do Mawetí-Guaraní,
  // irmão do awetí e da família tupi-guarani; povo que domesticou o guaraná (do sateré-mawé waranã)
  SATERE_MAWE,
  // awetí: tronco tupi, ramo próprio (Awetí-Guaraní) dentro do Mawetí-Guaraní, o parente mais próximo
  // do tupi-guarani (irmão dele) e primo do sateré-mawé; do Alto Xingu, com fala de homens e de mulheres
  AWETI,
  // mundurukú: tronco tupi, família própria (com o kuruáya, já extinto), fora do tupi-guarani —
  // vizinho do sateré-mawé no Tupi oriental; língua tonal, do povo Munduruku do vale do Tapajós
  MUNDURUKU,
  // quéchua e aimará: família própria cada uma, sem parentesco comprovado entre si nem com o
  // indo-europeu ou o tupi-guarani
  QUECHUA,
  AIMARA,
  // kaingang e xavante: família macro-jê, bem diferente do tupi-guarani e do quéchua
  KAINGANG,
  XAVANTE,
  // tikuna: língua isolada, como o basco (mas de família nenhuma em comum com ele)
  TIKUNA,
  // tukano: família própria (tukanoana), língua franca do Alto Rio Negro
  TUKANO,
  // baniwa: família aruak, cooficial em São Gabriel da Cachoeira ao lado do nheengatu e do tukano
  BANIWA,
  // terena: também família aruak, mas de outro ramo (maipure meridional / aruak boliviano), bem longe
  // do baniwa; falado sobretudo em Mato Grosso do Sul, cooficial em Miranda
  TERENA,
  // asháninka: também aruak e maipure meridional, mas do ramo campa (pré-andino), da Selva Central do
  // Peru e do rio Amônia (Acre); a língua amazônica mais falada do Peru
  ASHANINKA,
  // huni kuĩ: família pano, do Acre e sudeste do Peru
  HUNI_KUIN,
  // marúbo: família pano, do Vale do Javari (Amazonas), parente distante do huni kuĩ
  MARUBO,
  // yawanawá: família pano, do Rio Gregório (Acre), o parente mais próximo do huni kuĩ aqui dentro
  YAWANAWA,
  // shipibo-konibo: também família pano, mas do Peru (Ucayali/Loreto) — parente distante do huni kuĩ
  SHIPIBO_KONIBO,
  // náuatle: família uto-asteca, a língua dos astecas/mexicas
  NAUATLE,
  // shoshone: mesma família uto-asteca (ramo numic), da Grande Bacia (Wyoming, Idaho, Nevada, Utah)
  SHOSHONE,
  // hopi: também uto-asteca (ramo setentrional), da Reserva Hopi, no Arizona
  HOPI,
  // o suaíli, a língua africana mais falada como segunda língua, e as maiores da África depois dele
  // (Ethnologue; o árabe já está acima e o pidgin nigeriano é crioulo)
  SUAILI,
  // xhosa: também banta, mas ramo nguni (África do Sul) — diferente do suaíli, mais ao norte/leste
  XHOSA,
  // zulu: irmã do xhosa dentro do ramo nguni, a língua mais falada em casa na África do Sul
  ZULU,
  HAUCA,
  AMARICO,
  IORUBA,
  OROMO,
  // somali: também cuchítico oriental, como o oromo (Glottolog: ramo omo-tana das terras baixas), a
  // língua da Somália, do Djibuti e do leste da Etiópia
  SOMALI,
  IGBO,
  // lingala: também banta, família Níger-Congo, língua nacional da RD Congo e da República do Congo
  LINGALA,
  // wolof: família Níger-Congo, mas ramo atlântico/senegambiano — não é uma língua banta como o suaíli
  // e o lingala; língua franca do Senegal
  WOLOF,
  // navajo: família na-dené, sem parentesco com o indo-europeu nem com as línguas indígenas americanas
  // já no app (que são de famílias diferentes: tupi, macro-jê, quéchua, aimará, tukano, aruak, pano)
  NAVAJO,
  // apache ocidental: mesma família na-dené, ramo atabascano meridional, parente muito próximo do
  // navajo (mais de 92% do vocabulário em comum, segundo a Wikipédia em inglês)
  APACHE_OCIDENTAL,
  // lingít/tlingit: também na-dené, mas um ramo primário à parte — não é atabascano, não é parente
  // próximo do navajo/apache mesmo estando na mesma família maior
  LINGIT,
  // mongol: família mongólica própria, sem parentesco comprovado com o turcaico/tungúsico (a hipótese
  // "altaica" é hoje vista como obsoleta) nem com qualquer outra família já no app
  MONGOL,
  // a mesma língua na escrita tradicional, vertical (de cima pra baixo), a da Mongólia Interior
  MONGOL_TRADICIONAL,
  // buriato: mesma família mongólica, falado sobretudo na Buriácia (Rússia), perto do lago Baikal
  BURIATO,
  // manchu: família tungúsica, sem parentesco comprovado com o mongólico (a “altaica” é obsoleta),
  // mas escrito com uma escrita vertical que nasceu da mongol
  MANCHU,
  // húngaro: família urálica, mas ramo úgrico — diferente do ramo fínico do finlandês/estoniano
  HUNGARO,
  // tsacônio: indo-europeu, ramo helênico (como o grego), mas um ramo à parte dentro dele — descende
  // do dórico antigo, não do grego koiné que deu o grego moderno; criticamente ameaçado
  TSAKONIO,
  // pidgin nigeriano: crioulo de léxico inglês com gramática própria — por convenção do projeto, não
  // entra na árvore genealógica do inglês nem é tratado como seu parente ou não-parente
  PIDGIN_NIGERIANO,
  // tâmil: dravídico, ramo meridional — parente mais próximo do malaiala, nada a ver com o télugo
  // (dravídico centro-meridional) nem com as línguas indo-europeias do norte da Índia
  TAMIL,
  // tagalo: austronésio, ramo filipino — caminho diferente do indonésio (malaico) e do
  // maori/havaiano (oceânico > polinésio), apesar de todos serem austronésios
  TAGALO,
  // armênio ocidental: indo-europeu, ramo armênio (como o hy já no app), mas língua separada pelo
  // ISO 639-3 — dialeto de Istambul, sem país onde seja oficial, falado sobretudo na diáspora
  // (Líbano, Síria, França, EUA); ameaçado pela UNESCO
  ARMENIO_OCIDENTAL,
  // tétum: austronésio, ramo filipino-malaio-oriental próprio (tetárico) — língua nacional de
  // Timor-Leste, com muitos empréstimos do português por contato colonial
  TETUM,
  // mapudungún: tratado aqui como língua isolada (posição majoritária entre linguistas hoje), como
  // o basco e o tikuna — sem parentesco comprovado com nenhuma outra família já no app
  MAPUDUNGUN,
  // gaélico escocês: indo-europeu, ramo goidélico (irmão do irlandês), diferente do britônico do
  // galês/bretão — falado sobretudo nas Terras Altas e nas Hébridas Exteriores da Escócia
  GAELICO_ESCOCES,
  // crioulo haitiano: crioulo de base francesa com gramática própria (marcadores pré-verbais
  // te/ap/pral, sem conjugação verbal) — mesma convenção já usada pro pidgin nigeriano, família
  // própria em vez de entrar na árvore genealógica do francês
  CRIOULO_HAITIANO,
  // karitiana: família tupi, mas ramo arikém — diferente do ramo tupi-guarani das outras línguas
  // tupis já no app (gn, tpw, yrl, gun...); única língua viva do próprio ramo; ergativo-absolutivo,
  // um alinhamento raro entre as línguas tupis
  KARITIANA,
  // quimbundo: níger-congo, ramo banto (zona H.20 de Guthrie) — uma das línguas bantas que mais
  // moldou o português do Brasil via o tráfico negreiro (moleque, cafuné, caçula, quitute, zumbi,
  // quilombo, dendê, bunda, fubá, senzala, quitanda...)
  QUIMBUNDO,
  // palenquero: crioulo de base espanhola com substrato quicongo (banto) — o único crioulo de base
  // espanhola que sobreviveu na América Latina, falado em San Basilio de Palenque, Colômbia, o
  // primeiro povoado de ex-escravizados livres das Américas; mesma convenção de família própria já
  // usada pro pidgin nigeriano e pro crioulo haitiano
  PALENQUERO,
  // groenlandês (kalaallisut): família esquimó-aleúte própria, sem parentesco com nenhuma outra já
  // no app — fortemente polissintética (um "verbo" sozinho pode ser uma frase inteira)
  GROENLANDES,
  // bretão: indo-europeu, ramo britônico (irmão do galês), diferente do goidélico do gaélico
  // escocês/irlandês — falado sobretudo na Baixa Bretanha, França; seriamente ameaçado
  BRETAO,
  // lakota: família siuana própria, sem parentesco com nenhuma outra já no app — marca a pessoa no
  // verbo (não com pronome + conjugação) e tem partículas de fim de frase diferentes conforme quem
  // fala é homem ou mulher
  LAKOTA,
  // saami do norte: urálico, ramo sámi — diferente do fínico (fi/et) e do úgrico (hu); a variedade
  // sami mais falada, mas não a única (lule, skolt etc. têm código próprio à parte)
  SAMI_DO_NORTE,
  // fon: níger-congo, ramo gbe — língua nacional do Benim. Escolhida como resposta ao pedido de
  // "língua geral de mina": "mina" remete à Costa da Mina (litoral gbe da África Ocidental) e ao
  // Tambor de Mina/candomblé jeje no Maranhão, cuja "língua jeje" é identificada como fon por fontes
  // acadêmicas (Ferretti 1996; Pereira 1979) — mas essa ligação foi uma decisão desta sessão, não
  // confirmada pelo Matheus; ver a nota completa em `src/data/fon/index.ts`
  FON,
  // ewe: mesma família gbe do fon, mas ramo irmão (gbe ocidental, o fon é gbe oriental) — não a mesma
  // língua; falado sobretudo em Gana e no Togo
  EWE,
  // farsi/persa: indo-europeu, ramo iraniano ocidental — irmão de longe do urdu/hindi (ambos
  // indo-iranianos), mas sem gênero gramatical nenhum (nem nos pronomes), ao contrário da maioria das
  // línguas indo-europeias já no app
  PERSA,
  // okinawano: família japônica, mas ramo ryukyuano do norte — irmão do japonês (ja), não um dialeto
  // dele; não são mutuamente inteligíveis (~71% de semelhança lexical) e a UNESCO classifica o
  // okinawano como ameaçado
  OKINAWANO,
  // árabe egípcio: mesmo tronco semítico do árabe padrão (ar), mas código ISO 639-3 próprio (arz) —
  // é a língua que se fala no dia a dia no Egito, diferente do árabe padrão escrito/formal em vários
  // pontos de gramática e vocabulário (mesmo critério de "primos, não a mesma língua" já usado pro
  // guarani ñandeva/paraguaio)
  ARABE_EGIPCIO,
  // iídiche: indo-europeu, ramo germânico — parente mais próximo do alemão (de), apesar de escrito no
  // alfabeto hebraico; língua judaica asquenaze, hoje falada sobretudo em comunidades haredi/hassídicas
  IIDICHE,
  // hebraico (moderno): afro-asiático, ramo semítico cananeu — revivido como língua do dia a dia a
  // partir do fim do século XIX, depois de séculos só como língua litúrgica/de estudo
  HEBRAICO,
  // maltês: afro-asiático, ramo semítico (sículo-árabe) — a única língua semítica padronizada do
  // mundo escrita só em alfabeto latino, nunca em árabe; muitos empréstimos do siciliano/italiano
  // por cima da base árabe
  MALTES,
  // divehi/dhivehi: indo-europeu, indo-ariano, mas no grupo insular com o cingalês (não no mesmo
  // subgrupo do hindi/urdu) — a única língua indo-ariana escrita da direita pra esquerda, no alfabeto
  // thaana (único no mundo: as letras vêm de algarismos árabes e numerais índicos locais)
  DHIVEHI,
  // uigur: família túrquica, mas ramo carlúquico — diferente do ramo oghuz do turco (tr) já no app;
  // escrito em alfabeto árabe com vogais explícitas (ao contrário do árabe padrão)
  UIGUR,
  // pachto: indo-europeu, iraniano ORIENTAL — irmão de ramo do farsi (iraniano ocidental), não o
  // mesmo sub-ramo; indo-iraniano como o urdu/hindi, mas não indo-ariano
  PASHTO,
  // curdo sorani (curdo central): indo-europeu, iraniano ocidental — primo do farsi, mas sub-ramo
  // diferente; sem gênero gramatical nem caso (ao contrário do curmanji, a outra grande variedade
  // curda, que tem os dois)
  CURDO_CENTRAL,
  // curmanji (curdo do norte): a outra grande variedade curda — alfabeto latino (Hawar, 1932), não o
  // árabe-persa do sorani; mantém gênero e caso que o sorani perdeu quase todo. Linguistas debatem se
  // curmanji e sorani são a mesma língua ou duas (Kreyenbroek: "diferem tanto quanto inglês e alemão")
  CURMANJI,
  // tamazight padrão marroquina: afro-asiático, mas ramo berbere — irmão distante do árabe e do
  // hebraico (mesma família, ramos diferentes), não descendente nem dialeto de nenhum dos dois,
  // mesmo com 13 séculos de empréstimos árabes no vocabulário; forma escrita padronizada pelo IRCAM
  // em 2001-2003, oficial no Marrocos desde a emenda constitucional de 2011
  TAMAZIGHT,
  // ainu: língua isolada, como o tikuna/basco/mapudungún (mas de família nenhuma em comum com eles) —
  // falada no norte do Japão (sobretudo Hokkaido), sem parentesco comprovado com o japonês, apesar da
  // proximidade geográfica e de séculos de contato; criticamente ameaçada, com só duas falantes
  // nativas conhecidas em 2025 (Endangered Languages Project)
  AINU,
];

export const DEFAULT_LANGUAGE = 'ro';

export function getPack(code: string): LanguagePack {
  return PACKS[code] ?? PACKS[DEFAULT_LANGUAGE];
}

export function isAvailable(code: string): boolean {
  return code in PACKS;
}

/**
 * Convenção deste app: um idioma é "artificial" (construído) quando `lineage.family` é exatamente
 * "Construída" — nenhum precisa de outro campo novo, e a família continua servindo pra agrupar por
 * tipo de língua construída (auxiliar, artística, lógica...) no segundo nível do seletor, como as
 * famílias de verdade já fazem com os ramos. Hoje sete idiomas artificiais estão registrados em
 * `LANGUAGES` com currículo completo: o esperanto (`eo`), a interlíngua (`ia`), o volapük (`vo`) e
 * o ido (`io`, todos ramo "Auxiliares"), o toki pona (`tok`, ramo "Minimalistas/filosóficas"), o
 * lojban (`jbo`, ramo "Lógicas") e o klingon (`tlh`, ramo "Artísticas") — o tsevhu existe só como
 * dicionário em `src/data/tsevhu/`, sem currículo montado.
 */
export function isArtificial(l: Pick<LanguageInfo, 'lineage'>): boolean {
  return l.lineage.family === 'Construída';
}

/** Agrupa por família e depois pelo primeiro ramo: { 'Indo-europeu': { 'Itálico': [...] } } */
export function groupByLineage(langs: LanguageInfo[] = LANGUAGES) {
  const groups: Record<string, Record<string, LanguageInfo[]>> = {};
  for (const l of langs) {
    const fam = (groups[l.lineage.family] ??= {});
    (fam[l.lineage.branches[0]] ??= []).push(l);
  }
  return groups;
}
