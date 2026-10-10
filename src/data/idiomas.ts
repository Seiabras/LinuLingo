import type { LanguageInfo, LanguagePack } from "./types";
import { IDIOMAS_METADADOS } from "./idiomas-metadados";

type Loader = () => Promise<LanguagePack>;

/**
 * Um carregador por idioma (import dinâmico): o conteúdo pesado (vocabulário, gramática,
 * histórias) só é processado quando alguém pede aquele idioma de verdade — ver
 * `preloadPack`/`preloadAllPacks` abaixo. Isso é o que faz o app abrir rápido pra quem é novo:
 * antes desta mudança (09/10/2026), os ~190 módulos eram importados de forma "eager" aqui, e o
 * app inteiro esperava o conteúdo de TODOS os idiomas (56 MB, 680 mil linhas) ser processado antes
 * da primeira tela aparecer — mesmo a tela de escolher idioma, que só precisa do nome e da
 * bandeira de cada um (isso vem de `idiomas-metadados.ts`, sem nenhum import pesado).
 */
export const LOADERS: Record<string, Loader> = {
  "ro": () => import("./ro").then((m) => m.ROMENO),
  "ru": () => import("./ru").then((m) => m.RUSSO),
  "es": () => import("./es").then((m) => m.ESPANHOL),
  "it": () => import("./it").then((m) => m.ITALIANO),
  "pt": () => import("./pt").then((m) => m.PORTUGUES),
  "sv": () => import("./sv").then((m) => m.SUECO),
  "nb": () => import("./nb").then((m) => m.NORUEGUES),
  "da": () => import("./da").then((m) => m.DINAMARQUES),
  "fr": () => import("./fr").then((m) => m.FRANCES),
  "ca": () => import("./ca").then((m) => m.CATALAO),
  "is": () => import("./is").then((m) => m.ISLANDES),
  "fi": () => import("./fi").then((m) => m.FINLANDES),
  "et": () => import("./et").then((m) => m.ESTONIANO),
  "fo": () => import("./fo").then((m) => m.FEROES),
  "lt": () => import("./lt").then((m) => m.LITUANO),
  "lv": () => import("./lv").then((m) => m.LETAO),
  "sw": () => import("./sw").then((m) => m.SUAILI),
  "ja": () => import("./ja").then((m) => m.JAPONES),
  "ko": () => import("./ko").then((m) => m.COREANO),
  "gl": () => import("./gl").then((m) => m.GALEGO),
  "ast": () => import("./ast").then((m) => m.ASTURIANO),
  "oc": () => import("./oc").then((m) => m.OCCITANO),
  "sc": () => import("./sc").then((m) => m.SARDO),
  "rm": () => import("./rm").then((m) => m.ROMANCHE),
  "fur": () => import("./fur").then((m) => m.FRIULANO),
  "la": () => import("./la").then((m) => m.LATIM),
  "medi1250": () => import("./medi1250").then((m) => m.LATIM_MEDIEVAL),
  "fior1236": () => import("./fior1236").then((m) => m.TOSCANO_ANTIGO),
  "non": () => import("./non").then((m) => m.NORDICO_ANTIGO),
  "fro": () => import("./fro").then((m) => m.FRANCES_ANTIGO),
  "cu": () => import("./cu").then((m) => m.ESLAVO_ECLESIASTICO),
  "osp": () => import("./osp").then((m) => m.CASTELHANO_MEDIEVAL),
  "eo": () => import("./eo").then((m) => m.ESPERANTO),
  "ia": () => import("./ia").then((m) => m.INTERLINGUA),
  "vo": () => import("./vo").then((m) => m.VOLAPUK),
  "tok": () => import("./tok").then((m) => m.TOKI_PONA),
  "jbo": () => import("./jbo").then((m) => m.LOJBAN),
  "io": () => import("./ido").then((m) => m.IDO),
  "tlh": () => import("./tlh").then((m) => m.KLINGON),
  "nov": () => import("./nov").then((m) => m.NOVIAL),
  "isv": () => import("./isv").then((m) => m.INTERSLAVO),
  "lad": () => import("./lad").then((m) => m.JUDEU_ESPANHOL),
  "en": () => import("./en").then((m) => m.INGLES),
  "id": () => import("./id").then((m) => m.INDONESIO),
  "ms": () => import("./ms").then((m) => m.MALAIO),
  "vi": () => import("./vi").then((m) => m.VIETNAMITA),
  "yo": () => import("./yo").then((m) => m.IORUBA),
  "lld": () => import("./lld").then((m) => m.LADINO_DOLOMITAS),
  "de": () => import("./de").then((m) => m.ALEMAO),
  "gmh": () => import("./gmh").then((m) => m.ALTO_ALEMAO_MEDIO),
  "nl": () => import("./nl").then((m) => m.NEERLANDES),
  "af": () => import("./af").then((m) => m.AFRICANER),
  "pl": () => import("./pl").then((m) => m.POLONES),
  "cs": () => import("./cs").then((m) => m.TCHECO),
  "sk": () => import("./sk").then((m) => m.ESLOVACO),
  "uk": () => import("./uk").then((m) => m.UCRANIANO),
  "tr": () => import("./tr").then((m) => m.TURCO),
  "uz": () => import("./uz").then((m) => m.UZBEQUE),
  "lb": () => import("./lb").then((m) => m.LUXEMBURGUES),
  "bg": () => import("./bg").then((m) => m.BULGARO),
  "sr": () => import("./sr").then((m) => m.SERVIO),
  "hr": () => import("./hr").then((m) => m.CROATA),
  "sl": () => import("./sl").then((m) => m.ESLOVENO),
  "eu": () => import("./eu").then((m) => m.BASCO),
  "mk": () => import("./mk").then((m) => m.MACEDONIO),
  "rup": () => import("./rup").then((m) => m.AROMENO),
  "zh": () => import("./zh").then((m) => m.CHINES),
  "co": () => import("./co").then((m) => m.CORSO),
  "an": () => import("./an").then((m) => m.ARAGONES),
  "wa": () => import("./wa").then((m) => m.VALAO),
  "vec": () => import("./vec").then((m) => m.VENETO),
  "nap": () => import("./nap").then((m) => m.NAPOLITANO),
  "scn": () => import("./scn").then((m) => m.SICILIANO),
  "fy": () => import("./fy").then((m) => m.FRISIO),
  "nds": () => import("./nds").then((m) => m.BAIXO_ALEMAO),
  "sco": () => import("./sco").then((m) => m.SCOTS),
  "gsw": () => import("./gsw").then((m) => m.SUICO_ALEMAO),
  "be": () => import("./be").then((m) => m.BIELORRUSSO),
  "bs": () => import("./bs").then((m) => m.BOSNIO),
  "hsb": () => import("./hsb").then((m) => m.ALTO_SORABIO),
  "csb": () => import("./csb").then((m) => m.CASSUBIO),
  "pms": () => import("./pms").then((m) => m.PIEMONTES),
  "lij": () => import("./lij").then((m) => m.LIGURE),
  "lmo": () => import("./lmo").then((m) => m.LOMBARDO),
  "mwl": () => import("./mwl").then((m) => m.MIRANDES),
  "frp": () => import("./frp").then((m) => m.FRANCOPROVENCAL),
  "el": () => import("./el").then((m) => m.GREGO),
  "sq": () => import("./sq").then((m) => m.ALBANES),
  "hy": () => import("./hy").then((m) => m.ARMENIO),
  "hi": () => import("./hi").then((m) => m.HINDI),
  "gn": () => import("./gn").then((m) => m.GUARANI),
  "tpw": () => import("./tpw").then((m) => m.TUPI_ANTIGO),
  "ha": () => import("./ha").then((m) => m.HAUCA),
  "ig": () => import("./ig").then((m) => m.IGBO),
  "yrl": () => import("./yrl").then((m) => m.NHEENGATU),
  "bn": () => import("./bn").then((m) => m.BENGALI),
  "qu": () => import("./qu").then((m) => m.QUECHUA),
  "kgp": () => import("./kgp").then((m) => m.KAINGANG),
  "tca": () => import("./tca").then((m) => m.TIKUNA),
  "xav": () => import("./xav").then((m) => m.XAVANTE),
  "tuo": () => import("./tuo").then((m) => m.TUKANO),
  "gun": () => import("./gun").then((m) => m.GUARANI_MBYA),
  "ka": () => import("./ka").then((m) => m.GEORGIANO),
  "th": () => import("./th").then((m) => m.TAILANDES),
  "km": () => import("./km").then((m) => m.KHMER),
  "ay": () => import("./ay").then((m) => m.AIMARA),
  "kgk": () => import("./kgk").then((m) => m.GUARANI_KAIOWA),
  "nah": () => import("./nah").then((m) => m.NAUATLE),
  "kpc": () => import("./kpc").then((m) => m.BANIWA),
  "ter": () => import("./ter").then((m) => m.TERENA),
  "cni": () => import("./cni").then((m) => m.ASHANINKA),
  "lo": () => import("./lo").then((m) => m.LAOSIANO),
  "cbs": () => import("./cbs").then((m) => m.HUNI_KUIN),
  "mzr": () => import("./mzr").then((m) => m.MARUBO),
  "ywn": () => import("./ywn").then((m) => m.YAWANAWA),
  "apw": () => import("./apw").then((m) => m.APACHE_OCIDENTAL),
  "bxr": () => import("./bxr").then((m) => m.BURIATO),
  "ln": () => import("./ln").then((m) => m.LINGALA),
  "shh": () => import("./shh").then((m) => m.SHOSHONE),
  "tli": () => import("./tli").then((m) => m.LINGIT),
  "shp": () => import("./shp").then((m) => m.SHIPIBO_KONIBO),
  "hop": () => import("./hop").then((m) => m.HOPI),
  "wo": () => import("./wo").then((m) => m.WOLOF),
  "xh": () => import("./xh").then((m) => m.XHOSA),
  "zu": () => import("./zu").then((m) => m.ZULU),
  "nv": () => import("./nv").then((m) => m.NAVAJO),
  "nhd": () => import("./nhd").then((m) => m.GUARANI_NANDEVA),
  "tpj": () => import("./tpj").then((m) => m.TAPIETE),
  "mi": () => import("./mi").then((m) => m.MAORI),
  "oldp1258": () => import("./oldp1258").then((m) => m.GUARANI_ANTIGO),
  "haw": () => import("./haw").then((m) => m.HAVAIANO),
  "te": () => import("./te").then((m) => m.TELUGO),
  "om": () => import("./om").then((m) => m.OROMO),
  "so": () => import("./so").then((m) => m.SOMALI),
  "mr": () => import("./mr").then((m) => m.MARATHI),
  "am": () => import("./am").then((m) => m.AMARICO),
  "mn": () => import("./mn").then((m) => m.MONGOL),
  "mvf": () => import("./mvf").then((m) => m.MONGOL_TRADICIONAL),
  "mnc": () => import("./mnc").then((m) => m.MANCHU),
  "hu": () => import("./hu").then((m) => m.HUNGARO),
  "tsd": () => import("./tsd").then((m) => m.TSAKONIO),
  "pcm": () => import("./pcm").then((m) => m.PIDGIN_NIGERIANO),
  "ta": () => import("./ta").then((m) => m.TAMIL),
  "tl": () => import("./tl").then((m) => m.TAGALO),
  "hyw": () => import("./hyw").then((m) => m.ARMENIO_OCIDENTAL),
  "tdt": () => import("./tdt").then((m) => m.TETUM),
  "arn": () => import("./arn").then((m) => m.MAPUDUNGUN),
  "gd": () => import("./gd").then((m) => m.GAELICO_ESCOCES),
  "ht": () => import("./ht").then((m) => m.CRIOULO_HAITIANO),
  "ktn": () => import("./ktn").then((m) => m.KARITIANA),
  "mav": () => import("./mav").then((m) => m.SATERE_MAWE),
  "urb": () => import("./urb").then((m) => m.KAAPOR),
  "myu": () => import("./myu").then((m) => m.MUNDURUKU),
  "awe": () => import("./awe").then((m) => m.AWETI),
  "kmb": () => import("./kmb").then((m) => m.QUIMBUNDO),
  "pln": () => import("./pln").then((m) => m.PALENQUERO),
  "kl": () => import("./kl").then((m) => m.GROENLANDES),
  "iu": () => import("./iu").then((m) => m.INUKTITUT),
  "ik": () => import("./ik").then((m) => m.INUPIAQUE),
  "br": () => import("./br").then((m) => m.BRETAO),
  "lkt": () => import("./lkt").then((m) => m.LAKOTA),
  "se": () => import("./se").then((m) => m.SAMI_DO_NORTE),
  "fon": () => import("./fon").then((m) => m.FON),
  "ar": () => import("./ar").then((m) => m.ARABE),
  "clas1259": () => import("./clas1259").then((m) => m.ARABE_CLASSICO),
  "fa": () => import("./fa").then((m) => m.PERSA),
  "ur": () => import("./ur").then((m) => m.URDU),
  "ryu": () => import("./ryu").then((m) => m.OKINAWANO),
  "arz": () => import("./arz").then((m) => m.ARABE_EGIPCIO),
  "cop": () => import("./cop").then((m) => m.COPTA),
  "yi": () => import("./yi").then((m) => m.IIDICHE),
  "he": () => import("./he").then((m) => m.HEBRAICO),
  "mt": () => import("./mt").then((m) => m.MALTES),
  "dv": () => import("./dv").then((m) => m.DHIVEHI),
  "ug": () => import("./ug").then((m) => m.UIGUR),
  "ps": () => import("./ps").then((m) => m.PASHTO),
  "ckb": () => import("./ckb").then((m) => m.CURDO_CENTRAL),
  "kmr": () => import("./kmr").then((m) => m.CURMANJI),
  "ee": () => import("./ee").then((m) => m.EWE),
  "kay": () => import("./kay").then((m) => m.KAMAIURA),
  "mdz": () => import("./mdz").then((m) => m.AIKEWARA),
  "my": () => import("./my").then((m) => m.BIRMANES),
  "jv": () => import("./jv").then((m) => m.JAVANES),
  "yue": () => import("./yue").then((m) => m.CANTONES),
  "mg": () => import("./mg").then((m) => m.MALGAXE),
  "zgh": () => import("./zgh").then((m) => m.TAMAZIGHT),
  "ain": () => import("./ain").then((m) => m.AINU),
  "ce": () => import("./ce").then((m) => m.CHECHENO),
  "ab": () => import("./ab").then((m) => m.ABCAZIO),
  "pa": () => import("./pa").then((m) => m.PANJABI),
  "bsk": () => import("./bsk").then((m) => m.BURUSHASKI),
  "jje": () => import("./jje").then((m) => m.JEJU),
};

/**
 * Pacotes já carregados nesta sessão. Pode faltar algum enquanto `preloadPack`/`preloadAllPacks`
 * ainda não terminou: quem precisa de UM pacote certo (semear o banco do idioma atual, por
 * exemplo) chama `await preloadPack(code)` antes de usar `PACKS[code]`; quem só itera o que já
 * carregou (telas como Mapa, Perfil, Tutorial) pode usar `PACKS` direto, porque o app já dispara
 * `preloadAllPacks()` assim que a primeira tela aparece (ver `src/app/_layout.tsx`), e essas telas
 * só abrem depois de alguma navegação, tempo de sobra pra isso terminar em qualquer aparelho.
 */
export const PACKS: Record<string, LanguagePack> = {};

const loading = new Map<string, Promise<LanguagePack | undefined>>();

/** Carrega (ou devolve do cache) o pacote de UM idioma. `undefined` se o código não existe. */
export function preloadPack(code: string): Promise<LanguagePack | undefined> {
  if (PACKS[code]) return Promise.resolve(PACKS[code]);
  const loader = LOADERS[code];
  if (!loader) return Promise.resolve(undefined);
  let p = loading.get(code);
  if (!p) {
    p = loader().then((pack) => {
      PACKS[code] = pack;
      return pack;
    });
    // numa falha transitória (ex. o Metro ainda não viu um arquivo novo em dev), não guarda a
    // promise rejeitada pra sempre — a próxima chamada tenta carregar de novo, em vez de falhar
    // esse idioma pro resto da sessão.
    p.catch(() => loading.delete(code));
    loading.set(code, p);
  }
  return p;
}

/**
 * Carrega todos os pacotes em segundo plano, em lotes pequenos (com uma pausa entre cada um) pra
 * não travar a thread de JS de uma vez só bem na hora que a primeira tela acabou de aparecer.
 * `allSettled`: um pacote que falhar (ex. erro de rede, ou o Metro ainda vendo um arquivo novo em
 * dev) não pode travar o carregamento de todos os outros lotes que vêm depois.
 */
export async function preloadAllPacks(): Promise<void> {
  const codes = Object.keys(LOADERS);
  const BATCH = 20;
  for (let i = 0; i < codes.length; i += BATCH) {
    await Promise.allSettled(codes.slice(i, i + BATCH).map(preloadPack));
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
}

/** Todos os idiomas planejados, com família, ramo e região (agrupam o seletor). */
export const LANGUAGES: LanguageInfo[] = [

  IDIOMAS_METADADOS["ro"],
  IDIOMAS_METADADOS["ru"],
  IDIOMAS_METADADOS["uk"],
  IDIOMAS_METADADOS["pl"],
  IDIOMAS_METADADOS["cs"],
  IDIOMAS_METADADOS["sk"],
  IDIOMAS_METADADOS["bg"],
  IDIOMAS_METADADOS["sr"],
  IDIOMAS_METADADOS["hr"],
  IDIOMAS_METADADOS["sl"],
  IDIOMAS_METADADOS["mk"],
  IDIOMAS_METADADOS["be"],
  IDIOMAS_METADADOS["bs"],
  IDIOMAS_METADADOS["hsb"],
  IDIOMAS_METADADOS["csb"],
  IDIOMAS_METADADOS["cu"],
  IDIOMAS_METADADOS["es"],
  IDIOMAS_METADADOS["it"],
  IDIOMAS_METADADOS["pt"],
  IDIOMAS_METADADOS["fr"],
  IDIOMAS_METADADOS["ca"],
  IDIOMAS_METADADOS["gl"],
  IDIOMAS_METADADOS["ast"],
  IDIOMAS_METADADOS["an"],
  IDIOMAS_METADADOS["mwl"],
  IDIOMAS_METADADOS["oc"],
  IDIOMAS_METADADOS["sc"],
  IDIOMAS_METADADOS["co"],
  IDIOMAS_METADADOS["vec"],
  IDIOMAS_METADADOS["nap"],
  IDIOMAS_METADADOS["scn"],
  IDIOMAS_METADADOS["pms"],
  IDIOMAS_METADADOS["lij"],
  IDIOMAS_METADADOS["lmo"],
  IDIOMAS_METADADOS["rm"],
  IDIOMAS_METADADOS["fur"],
  IDIOMAS_METADADOS["lld"],
  IDIOMAS_METADADOS["wa"],
  IDIOMAS_METADADOS["frp"],
  IDIOMAS_METADADOS["la"],
  IDIOMAS_METADADOS["medi1250"],
  IDIOMAS_METADADOS["fior1236"],
  IDIOMAS_METADADOS["fro"],
  IDIOMAS_METADADOS["osp"],
  IDIOMAS_METADADOS["lad"],
  IDIOMAS_METADADOS["rup"],
  IDIOMAS_METADADOS["eu"],
  IDIOMAS_METADADOS["sv"],
  IDIOMAS_METADADOS["nb"],
  IDIOMAS_METADADOS["da"],
  IDIOMAS_METADADOS["is"],
  IDIOMAS_METADADOS["non"],
  IDIOMAS_METADADOS["eo"],
  // interlíngua: a segunda língua construída com curso de verdade no app (08/10/2026) — mesma
  // família "Construída", ramo "Auxiliares" do esperanto, mas vocabulário prototipado a partir do
  // inglês/francês/italiano/espanhol-português (IALA, 1951), não criado do zero por um autor único
  IDIOMAS_METADADOS["ia"],
  IDIOMAS_METADADOS["vo"],
  IDIOMAS_METADADOS["tok"],
  IDIOMAS_METADADOS["jbo"],
  IDIOMAS_METADADOS["io"],
  IDIOMAS_METADADOS["tlh"],
  // novial: terceira língua construída com curso de verdade (08/10/2026), depois da segunda leva
  // (ido/klingon/toki pona/lojban/volapük) — publicado por Otto Jespersen em 1928
  IDIOMAS_METADADOS["nov"],
  // interslavo: quarta língua construída com curso de verdade (08/10/2026) — não é "a priori" nem
  // o projeto de um autor só, e sim uma língua zonal, montada com as raízes que quase toda língua
  // eslava viva tem em comum (comitê fundido em 2017)
  IDIOMAS_METADADOS["isv"],
  IDIOMAS_METADADOS["en"],
  IDIOMAS_METADADOS["de"],
  IDIOMAS_METADADOS["gmh"],
  IDIOMAS_METADADOS["nl"],
  IDIOMAS_METADADOS["af"],
  IDIOMAS_METADADOS["lb"],
  IDIOMAS_METADADOS["fy"],
  IDIOMAS_METADADOS["nds"],
  IDIOMAS_METADADOS["sco"],
  IDIOMAS_METADADOS["gsw"],
  IDIOMAS_METADADOS["fi"],
  IDIOMAS_METADADOS["fo"],
  IDIOMAS_METADADOS["et"],
  IDIOMAS_METADADOS["lt"],
  IDIOMAS_METADADOS["lv"],
  IDIOMAS_METADADOS["ja"],
  IDIOMAS_METADADOS["ko"],
  // ramos próprios do indo-europeu, sem parentes vivos próximos
  IDIOMAS_METADADOS["el"],
  IDIOMAS_METADADOS["sq"],
  IDIOMAS_METADADOS["hy"],
  // georgiano: família cartveliana própria, sem parentesco com o indo-europeu
  IDIOMAS_METADADOS["ka"],
  // as maiores línguas da Ásia (Ethnologue, falantes nativos + segunda língua; o russo já está no app)
  IDIOMAS_METADADOS["ar"],
  IDIOMAS_METADADOS["clas1259"],
  IDIOMAS_METADADOS["zh"],
  // birmanês: mesma família sino-tibetana do chinês, mas ramo bem diferente (tibeto-birmanês ›
  // lolo-birmanês, não sinítico) — parente distante, não inteligível com o mandarim
  IDIOMAS_METADADOS["my"],
  // cantonês: mesmo ramo sinítico do mandarim, mas ramo yue, não mandarim — pouquíssima
  // inteligibilidade mútua, mesmo escrevendo com caracteres parecidos; língua do dia a dia de Hong
  // Kong, Macau e da província de Guangdong (China já tem o mandarim no app)
  IDIOMAS_METADADOS["yue"],
  IDIOMAS_METADADOS["hi"],
  IDIOMAS_METADADOS["bn"],
  IDIOMAS_METADADOS["id"],
  // malaio: a outra norma padrão da mesma língua do indonésio (Glottolog: Standard Malay-Indonesian ›
  // Standard Malay), no padrão da Malásia — vocabulário e grafia próprios (kereta × mobil, bas × bus)
  IDIOMAS_METADADOS["ms"],
  // javanês: a língua regional mais falada da Indonésia (mais falantes nativos do que o indonésio,
  // que é a língua franca/oficial) — mesmo ramo malaio-polinésio, língua diferente, com registros de
  // fala próprios (ngoko/krama)
  IDIOMAS_METADADOS["jv"],
  // malgaxe: mesma família austronésia/malaio-polinésia do indonésio e do javanês, mas falado em
  // Madagascar, ao lado da África — os primeiros falantes migraram de Borneo (parente mais próximo
  // hoje: o maanyan), não do continente africano; língua oficial do país ao lado do francês, ordem
  // VOS (verbo-objeto-sujeito), diferente da ordem SVO do indonésio/javanês
  IDIOMAS_METADADOS["mg"],
  // maori e havaiano: mesma família austronésia do indonésio (ramo polinésio), mas bem mais distantes
  // dentro dela; maori e havaiano são parentes próximos entre si (ambos polinésios), mas não a mesma
  // língua
  IDIOMAS_METADADOS["mi"],
  IDIOMAS_METADADOS["haw"],
  // urdu: mesmo ramo indo-ariano do hindi (hi) — urdu e hindi compartilham a base cotidiana do
  // vocabulário (hindustani), mas divergem no registro formal (urdu puxa pro persa/árabe, hindi pro
  // sânscrito) e na escrita (perso-árabe nastaliq × devanágari); ver cognateNote do pacote
  IDIOMAS_METADADOS["ur"],
  // panjabi: ramo indo-ariano, parente próximo do urdu/hindi (mesma base lexical, SOV), mas com
  // alfabeto próprio (Shahmukhi, perso-árabe) e TOM na fala; maior língua materna do Paquistão
  // (37% do censo de 2023), mas sem status oficial lá (o urdu é o oficial)
  IDIOMAS_METADADOS["pa"],
  IDIOMAS_METADADOS["mr"],
  IDIOMAS_METADADOS["vi"],
  IDIOMAS_METADADOS["km"],
  IDIOMAS_METADADOS["te"],
  // tailandês e laosiano: família kra-dai, parentes reais entre si (mutuamente inteligíveis em boa
  // parte), mas sem parentesco com o vietnamita nem com o khmer (vizinhos geográficos, não linguísticos)
  IDIOMAS_METADADOS["th"],
  IDIOMAS_METADADOS["lo"],
  IDIOMAS_METADADOS["tr"],
  // uzbeque: mesma família túrquica do turco, mas ramo carlúquico (não oghuz), parente mais próximo
  // do uigur, não do turco
  IDIOMAS_METADADOS["uz"],
  // línguas indígenas das Américas (família tupi-guarani)
  IDIOMAS_METADADOS["gn"],
  IDIOMAS_METADADOS["gun"],
  IDIOMAS_METADADOS["kgk"],
  IDIOMAS_METADADOS["nhd"],
  IDIOMAS_METADADOS["tpj"],
  // guarani antigo/colonial: forma ancestral do guarani paraguaio, documentada pelos jesuítas
  IDIOMAS_METADADOS["oldp1258"],
  IDIOMAS_METADADOS["tpw"],
  IDIOMAS_METADADOS["yrl"],
  // ka'apor: também tupi-guarani, mas do subgrupo VIII (com o guajá), não do guarani nem do
  // tupinambá — a língua do povo Ka'apor, no norte do Maranhão (TI Alto Turiaçu)
  IDIOMAS_METADADOS["urb"],
  // kamaiurá: tupi-guarani do Alto Xingu (MT), ramo próprio na família (subconjunto VII de Rodrigues);
  // guarda as consoantes finais que o guarani perdeu (jawat, onça × guarani jagua)
  IDIOMAS_METADADOS["kay"],
  // aikewára (suruí do Pará): tupi-guarani do subgrupo IV (com o asurini do Tocantins e o parakanã),
  // a língua do povo Aikewara, das TIs Sororó e Tuwa Apekuokawera, no sudeste do Pará
  IDIOMAS_METADADOS["mdz"],
  // sateré-mawé: tronco tupi, mas não tupi-guarani — ramo próprio (Mawé) dentro do Mawetí-Guaraní,
  // irmão do awetí e da família tupi-guarani; povo que domesticou o guaraná (do sateré-mawé waranã)
  IDIOMAS_METADADOS["mav"],
  // awetí: tronco tupi, ramo próprio (Awetí-Guaraní) dentro do Mawetí-Guaraní, o parente mais próximo
  // do tupi-guarani (irmão dele) e primo do sateré-mawé; do Alto Xingu, com fala de homens e de mulheres
  IDIOMAS_METADADOS["awe"],
  // mundurukú: tronco tupi, família própria (com o kuruáya, já extinto), fora do tupi-guarani —
  // vizinho do sateré-mawé no Tupi oriental; língua tonal, do povo Munduruku do vale do Tapajós
  IDIOMAS_METADADOS["myu"],
  // quéchua e aimará: família própria cada uma, sem parentesco comprovado entre si nem com o
  // indo-europeu ou o tupi-guarani
  IDIOMAS_METADADOS["qu"],
  IDIOMAS_METADADOS["ay"],
  // kaingang e xavante: família macro-jê, bem diferente do tupi-guarani e do quéchua
  IDIOMAS_METADADOS["kgp"],
  IDIOMAS_METADADOS["xav"],
  // tikuna: língua isolada, como o basco (mas de família nenhuma em comum com ele)
  IDIOMAS_METADADOS["tca"],
  // tukano: família própria (tukanoana), língua franca do Alto Rio Negro
  IDIOMAS_METADADOS["tuo"],
  // baniwa: família aruak, cooficial em São Gabriel da Cachoeira ao lado do nheengatu e do tukano
  IDIOMAS_METADADOS["kpc"],
  // terena: também família aruak, mas de outro ramo (maipure meridional / aruak boliviano), bem longe
  // do baniwa; falado sobretudo em Mato Grosso do Sul, cooficial em Miranda
  IDIOMAS_METADADOS["ter"],
  // asháninka: também aruak e maipure meridional, mas do ramo campa (pré-andino), da Selva Central do
  // Peru e do rio Amônia (Acre); a língua amazônica mais falada do Peru
  IDIOMAS_METADADOS["cni"],
  // huni kuĩ: família pano, do Acre e sudeste do Peru
  IDIOMAS_METADADOS["cbs"],
  // marúbo: família pano, do Vale do Javari (Amazonas), parente distante do huni kuĩ
  IDIOMAS_METADADOS["mzr"],
  // yawanawá: família pano, do Rio Gregório (Acre), o parente mais próximo do huni kuĩ aqui dentro
  IDIOMAS_METADADOS["ywn"],
  // shipibo-konibo: também família pano, mas do Peru (Ucayali/Loreto) — parente distante do huni kuĩ
  IDIOMAS_METADADOS["shp"],
  // náuatle: família uto-asteca, a língua dos astecas/mexicas
  IDIOMAS_METADADOS["nah"],
  // shoshone: mesma família uto-asteca (ramo numic), da Grande Bacia (Wyoming, Idaho, Nevada, Utah)
  IDIOMAS_METADADOS["shh"],
  // hopi: também uto-asteca (ramo setentrional), da Reserva Hopi, no Arizona
  IDIOMAS_METADADOS["hop"],
  // o suaíli, a língua africana mais falada como segunda língua, e as maiores da África depois dele
  // (Ethnologue; o árabe já está acima e o pidgin nigeriano é crioulo)
  IDIOMAS_METADADOS["sw"],
  // xhosa: também banta, mas ramo nguni (África do Sul) — diferente do suaíli, mais ao norte/leste
  IDIOMAS_METADADOS["xh"],
  // zulu: irmã do xhosa dentro do ramo nguni, a língua mais falada em casa na África do Sul
  IDIOMAS_METADADOS["zu"],
  IDIOMAS_METADADOS["ha"],
  IDIOMAS_METADADOS["am"],
  IDIOMAS_METADADOS["yo"],
  IDIOMAS_METADADOS["om"],
  // somali: também cuchítico oriental, como o oromo (Glottolog: ramo omo-tana das terras baixas), a
  // língua da Somália, do Djibuti e do leste da Etiópia
  IDIOMAS_METADADOS["so"],
  IDIOMAS_METADADOS["ig"],
  // lingala: também banta, família Níger-Congo, língua nacional da RD Congo e da República do Congo
  IDIOMAS_METADADOS["ln"],
  // wolof: família Níger-Congo, mas ramo atlântico/senegambiano — não é uma língua banta como o suaíli
  // e o lingala; língua franca do Senegal
  IDIOMAS_METADADOS["wo"],
  // navajo: família na-dené, sem parentesco com o indo-europeu nem com as línguas indígenas americanas
  // já no app (que são de famílias diferentes: tupi, macro-jê, quéchua, aimará, tukano, aruak, pano)
  IDIOMAS_METADADOS["nv"],
  // apache ocidental: mesma família na-dené, ramo atabascano meridional, parente muito próximo do
  // navajo (mais de 92% do vocabulário em comum, segundo a Wikipédia em inglês)
  IDIOMAS_METADADOS["apw"],
  // lingít/tlingit: também na-dené, mas um ramo primário à parte — não é atabascano, não é parente
  // próximo do navajo/apache mesmo estando na mesma família maior
  IDIOMAS_METADADOS["tli"],
  // mongol: família mongólica própria, sem parentesco comprovado com o turcaico/tungúsico (a hipótese
  // "altaica" é hoje vista como obsoleta) nem com qualquer outra família já no app
  IDIOMAS_METADADOS["mn"],
  // a mesma língua na escrita tradicional, vertical (de cima pra baixo), a da Mongólia Interior
  IDIOMAS_METADADOS["mvf"],
  // buriato: mesma família mongólica, falado sobretudo na Buriácia (Rússia), perto do lago Baikal
  IDIOMAS_METADADOS["bxr"],
  // manchu: família tungúsica, sem parentesco comprovado com o mongólico (a “altaica” é obsoleta),
  // mas escrito com uma escrita vertical que nasceu da mongol
  IDIOMAS_METADADOS["mnc"],
  // húngaro: família urálica, mas ramo úgrico — diferente do ramo fínico do finlandês/estoniano
  IDIOMAS_METADADOS["hu"],
  // tsacônio: indo-europeu, ramo helênico (como o grego), mas um ramo à parte dentro dele — descende
  // do dórico antigo, não do grego koiné que deu o grego moderno; criticamente ameaçado
  IDIOMAS_METADADOS["tsd"],
  // pidgin nigeriano: crioulo de léxico inglês com gramática própria — por convenção do projeto, não
  // entra na árvore genealógica do inglês nem é tratado como seu parente ou não-parente
  IDIOMAS_METADADOS["pcm"],
  // tâmil: dravídico, ramo meridional — parente mais próximo do malaiala, nada a ver com o télugo
  // (dravídico centro-meridional) nem com as línguas indo-europeias do norte da Índia
  IDIOMAS_METADADOS["ta"],
  // tagalo: austronésio, ramo filipino — caminho diferente do indonésio (malaico) e do
  // maori/havaiano (oceânico > polinésio), apesar de todos serem austronésios
  IDIOMAS_METADADOS["tl"],
  // armênio ocidental: indo-europeu, ramo armênio (como o hy já no app), mas língua separada pelo
  // ISO 639-3 — dialeto de Istambul, sem país onde seja oficial, falado sobretudo na diáspora
  // (Líbano, Síria, França, EUA); ameaçado pela UNESCO
  IDIOMAS_METADADOS["hyw"],
  // tétum: austronésio, ramo filipino-malaio-oriental próprio (tetárico) — língua nacional de
  // Timor-Leste, com muitos empréstimos do português por contato colonial
  IDIOMAS_METADADOS["tdt"],
  // mapudungún: tratado aqui como língua isolada (posição majoritária entre linguistas hoje), como
  // o basco e o tikuna — sem parentesco comprovado com nenhuma outra família já no app
  IDIOMAS_METADADOS["arn"],
  // gaélico escocês: indo-europeu, ramo goidélico (irmão do irlandês), diferente do britônico do
  // galês/bretão — falado sobretudo nas Terras Altas e nas Hébridas Exteriores da Escócia
  IDIOMAS_METADADOS["gd"],
  // crioulo haitiano: crioulo de base francesa com gramática própria (marcadores pré-verbais
  // te/ap/pral, sem conjugação verbal) — mesma convenção já usada pro pidgin nigeriano, família
  // própria em vez de entrar na árvore genealógica do francês
  IDIOMAS_METADADOS["ht"],
  // karitiana: família tupi, mas ramo arikém — diferente do ramo tupi-guarani das outras línguas
  // tupis já no app (gn, tpw, yrl, gun...); única língua viva do próprio ramo; ergativo-absolutivo,
  // um alinhamento raro entre as línguas tupis
  IDIOMAS_METADADOS["ktn"],
  // quimbundo: níger-congo, ramo banto (zona H.20 de Guthrie) — uma das línguas bantas que mais
  // moldou o português do Brasil via o tráfico negreiro (moleque, cafuné, caçula, quitute, zumbi,
  // quilombo, dendê, bunda, fubá, senzala, quitanda...)
  IDIOMAS_METADADOS["kmb"],
  // palenquero: crioulo de base espanhola com substrato quicongo (banto) — o único crioulo de base
  // espanhola que sobreviveu na América Latina, falado em San Basilio de Palenque, Colômbia, o
  // primeiro povoado de ex-escravizados livres das Américas; mesma convenção de família própria já
  // usada pro pidgin nigeriano e pro crioulo haitiano
  IDIOMAS_METADADOS["pln"],
  // groenlandês (kalaallisut): família esquimó-aleúte própria, sem parentesco com nenhuma outra já
  // no app — fortemente polissintética (um "verbo" sozinho pode ser uma frase inteira)
  IDIOMAS_METADADOS["kl"],
  // inuktitut: esquimó-aleúte, ramo inuíte, primo do groenlandês; oficial em Nunavut (criado em 10/10/2026)
  IDIOMAS_METADADOS["iu"],
  // inupiaque: esquimó-aleúte, ramo inuíte, a língua inuíte do Alasca; oficial no Alasca (criado em 10/10/2026)
  IDIOMAS_METADADOS["ik"],
  // bretão: indo-europeu, ramo britônico (irmão do galês), diferente do goidélico do gaélico
  // escocês/irlandês — falado sobretudo na Baixa Bretanha, França; seriamente ameaçado
  IDIOMAS_METADADOS["br"],
  // lakota: família siuana própria, sem parentesco com nenhuma outra já no app — marca a pessoa no
  // verbo (não com pronome + conjugação) e tem partículas de fim de frase diferentes conforme quem
  // fala é homem ou mulher
  IDIOMAS_METADADOS["lkt"],
  // saami do norte: urálico, ramo sámi — diferente do fínico (fi/et) e do úgrico (hu); a variedade
  // sami mais falada, mas não a única (lule, skolt etc. têm código próprio à parte)
  IDIOMAS_METADADOS["se"],
  // fon: níger-congo, ramo gbe — língua nacional do Benim. Escolhida como resposta ao pedido de
  // "língua geral de mina": "mina" remete à Costa da Mina (litoral gbe da África Ocidental) e ao
  // Tambor de Mina/candomblé jeje no Maranhão, cuja "língua jeje" é identificada como fon por fontes
  // acadêmicas (Ferretti 1996; Pereira 1979) — mas essa ligação foi uma decisão desta sessão, não
  // confirmada pelo Matheus; ver a nota completa em `src/data/fon/index.ts`
  IDIOMAS_METADADOS["fon"],
  // ewe: mesma família gbe do fon, mas ramo irmão (gbe ocidental, o fon é gbe oriental) — não a mesma
  // língua; falado sobretudo em Gana e no Togo
  IDIOMAS_METADADOS["ee"],
  // farsi/persa: indo-europeu, ramo iraniano ocidental — irmão de longe do urdu/hindi (ambos
  // indo-iranianos), mas sem gênero gramatical nenhum (nem nos pronomes), ao contrário da maioria das
  // línguas indo-europeias já no app
  IDIOMAS_METADADOS["fa"],
  // okinawano: família japônica, mas ramo ryukyuano do norte — irmão do japonês (ja), não um dialeto
  // dele; não são mutuamente inteligíveis (~71% de semelhança lexical) e a UNESCO classifica o
  // okinawano como ameaçado
  IDIOMAS_METADADOS["ryu"],
  // árabe egípcio: mesmo tronco semítico do árabe padrão (ar), mas código ISO 639-3 próprio (arz) —
  // é a língua que se fala no dia a dia no Egito, diferente do árabe padrão escrito/formal em vários
  // pontos de gramática e vocabulário (mesmo critério de "primos, não a mesma língua" já usado pro
  // guarani ñandeva/paraguaio)
  IDIOMAS_METADADOS["arz"],
  // copta: afro-asiático, mas ramo EGÍPCIO (não semítico como o árabe) — a última fase da língua dos
  // hieróglifos, escrita num alfabeto baseado no grego; sem falantes nativos do dia a dia desde entre
  // os séc. X-XII, mas em uso litúrgico na Igreja Ortodoxa Copta até hoje; par geográfico (não
  // genealógico) do árabe egípcio, que substituiu o copta como língua falada no Egito
  IDIOMAS_METADADOS["cop"],
  // iídiche: indo-europeu, ramo germânico — parente mais próximo do alemão (de), apesar de escrito no
  // alfabeto hebraico; língua judaica asquenaze, hoje falada sobretudo em comunidades haredi/hassídicas
  IDIOMAS_METADADOS["yi"],
  // hebraico (moderno): afro-asiático, ramo semítico cananeu — revivido como língua do dia a dia a
  // partir do fim do século XIX, depois de séculos só como língua litúrgica/de estudo
  IDIOMAS_METADADOS["he"],
  // maltês: afro-asiático, ramo semítico (sículo-árabe) — a única língua semítica padronizada do
  // mundo escrita só em alfabeto latino, nunca em árabe; muitos empréstimos do siciliano/italiano
  // por cima da base árabe
  IDIOMAS_METADADOS["mt"],
  // divehi/dhivehi: indo-europeu, indo-ariano, mas no grupo insular com o cingalês (não no mesmo
  // subgrupo do hindi/urdu) — a única língua indo-ariana escrita da direita pra esquerda, no alfabeto
  // thaana (único no mundo: as letras vêm de algarismos árabes e numerais índicos locais)
  IDIOMAS_METADADOS["dv"],
  // uigur: família túrquica, mas ramo carlúquico — diferente do ramo oghuz do turco (tr) já no app;
  // escrito em alfabeto árabe com vogais explícitas (ao contrário do árabe padrão)
  IDIOMAS_METADADOS["ug"],
  // pachto: indo-europeu, iraniano ORIENTAL — irmão de ramo do farsi (iraniano ocidental), não o
  // mesmo sub-ramo; indo-iraniano como o urdu/hindi, mas não indo-ariano
  IDIOMAS_METADADOS["ps"],
  // curdo sorani (curdo central): indo-europeu, iraniano ocidental — primo do farsi, mas sub-ramo
  // diferente; sem gênero gramatical nem caso (ao contrário do curmanji, a outra grande variedade
  // curda, que tem os dois)
  IDIOMAS_METADADOS["ckb"],
  // curmanji (curdo do norte): a outra grande variedade curda — alfabeto latino (Hawar, 1932), não o
  // árabe-persa do sorani; mantém gênero e caso que o sorani perdeu quase todo. Linguistas debatem se
  // curmanji e sorani são a mesma língua ou duas (Kreyenbroek: "diferem tanto quanto inglês e alemão")
  IDIOMAS_METADADOS["kmr"],
  // tamazight padrão marroquina: afro-asiático, mas ramo berbere — irmão distante do árabe e do
  // hebraico (mesma família, ramos diferentes), não descendente nem dialeto de nenhum dos dois,
  // mesmo com 13 séculos de empréstimos árabes no vocabulário; forma escrita padronizada pelo IRCAM
  // em 2001-2003, oficial no Marrocos desde a emenda constitucional de 2011
  IDIOMAS_METADADOS["zgh"],
  // ainu: língua isolada, como o tikuna/basco/mapudungún (mas de família nenhuma em comum com eles) —
  // falada no norte do Japão (sobretudo Hokkaido), sem parentesco comprovado com o japonês, apesar da
  // proximidade geográfica e de séculos de contato; criticamente ameaçada, com só duas falantes
  // nativas conhecidas em 2025 (Endangered Languages Project)
  IDIOMAS_METADADOS["ain"],
  // checheno: família "Caucasiano do norte" (nakh-daguestanesa), ramo vainakh — a família inteira é
  // nova no app, aberta aqui junto com o abcázio (abaixo), que é a outra metade do rótulo "Caucasiano
  // do norte" já usado no CLDR (idiomas-mundo.ts) mas, até agora, sem nenhum pacote jogável
  IDIOMAS_METADADOS["ce"],
  // abcázio: mesma família "Caucasiano do norte" do checheno (acima), mas ramo abecásio-adigue —
  // caucasiano do NOROESTE, sem parentesco de origem com o checheno (caucasiano do NORDESTE/nakh-
  // daguestanês), apesar do rótulo comum: a classificação do CLDR agrupa as duas famílias por região,
  // não por ancestral comum
  IDIOMAS_METADADOS["ab"],
  // burushaski: outra língua isolada (como o ainu, acima) — mas sem QUALQUER parentesco entre as
  // duas, cada uma isolada por conta própria; falada nos vales de Hunza, Nager e Yasin, no norte do
  // Paquistão, sem status oficial nem imprensa própria
  IDIOMAS_METADADOS["bsk"],
  // jejuense: família "Coreânico", ramo "Jeju" — a mesma família do coreano (`ko`, ramo "Coreano"),
  // mas ramo diferente de propósito: o Ethnologue/Glottolog já tratam o jejuense como língua própria
  // (código `jje`, separado do coreano `kore1280`), não como dialeto, por isso entra como pacote à
  // parte em vez de variante do coreano
  IDIOMAS_METADADOS["jje"],
];

export const DEFAULT_LANGUAGE = "ro";

export function getPack(code: string): LanguagePack {
  return PACKS[code] ?? PACKS[DEFAULT_LANGUAGE];
}

/** Se é um código de idioma conhecido (independe de o pacote já ter carregado ou não). */
export function isAvailable(code: string): boolean {
  return code in LOADERS;
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
export function isArtificial(l: Pick<LanguageInfo, "lineage">): boolean {
  return l.lineage.family === "Construída";
}

/** Agrupa por família e depois pelo primeiro ramo: { "Indo-europeu": { "Itálico": [...] } } */
export function groupByLineage(langs: LanguageInfo[] = LANGUAGES) {
  const groups: Record<string, Record<string, LanguageInfo[]>> = {};
  for (const l of langs) {
    const fam = (groups[l.lineage.family] ??= {});
    (fam[l.lineage.branches[0]] ??= []).push(l);
  }
  return groups;
}
