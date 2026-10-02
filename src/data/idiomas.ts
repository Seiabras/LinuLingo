import type { LanguageInfo, LanguagePack } from './types';
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
import { JUDEU_ESPANHOL } from './lad';
import { INGLES } from './en';
import { INDONESIO } from './id';
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
import { LAOSIANO } from './lo';
import { HUNI_KUIN } from './cbs';
import { AIMARA } from './ay';
import { GUARANI_KAIOWA } from './kgk';
import { NAUATLE } from './nah';
import { NAVAJO } from './nv';
import { MAORI } from './mi';
import { GUARANI_ANTIGO } from './gnw';
import { HAVAIANO } from './haw';
import { TELUGO } from './te';
import { OROMO } from './om';
import { MARATHI } from './mr';
import { AMARICO } from './am';
import { MONGOL } from './mn';
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
import { QUIMBUNDO } from './kmb';
import { PALENQUERO } from './pln';

/** Idiomas com conteúdo pronto. */
export const PACKS: Record<string, LanguagePack> = { ro: ROMENO, ru: RUSSO, es: ESPANHOL, it: ITALIANO, pt: PORTUGUES, sv: SUECO, nb: NORUEGUES, da: DINAMARQUES, fr: FRANCES, ca: CATALAO, is: ISLANDES, fi: FINLANDES, et: ESTONIANO, fo: FEROES, lt: LITUANO, lv: LETAO, sw: SUAILI, ja: JAPONES, ko: COREANO,
  // incompletos (só o A1 por enquanto; ver o campo `incomplete` de cada pacote)
  gl: GALEGO, ast: ASTURIANO, oc: OCCITANO, sc: SARDO, rm: ROMANCHE, fur: FRIULANO, la: LATIM, lad: JUDEU_ESPANHOL, en: INGLES, id: INDONESIO, vi: VIETNAMITA, yo: IORUBA,
  lld: LADINO_DOLOMITAS, de: ALEMAO, nl: NEERLANDES, af: AFRICANER, pl: POLONES, cs: TCHECO, sk: ESLOVACO, uk: UCRANIANO, tr: TURCO,
  lb: LUXEMBURGUES, bg: BULGARO, sr: SERVIO, hr: CROATA, sl: ESLOVENO, eu: BASCO,
  mk: MACEDONIO, rup: AROMENO, zh: CHINES,
  co: CORSO, an: ARAGONES, wa: VALAO, vec: VENETO, nap: NAPOLITANO, scn: SICILIANO,
  fy: FRISIO, nds: BAIXO_ALEMAO, sco: SCOTS, gsw: SUICO_ALEMAO, be: BIELORRUSSO, bs: BOSNIO, hsb: ALTO_SORABIO, csb: CASSUBIO,
  pms: PIEMONTES, lij: LIGURE, lmo: LOMBARDO, mwl: MIRANDES, frp: FRANCOPROVENCAL,
  el: GREGO, sq: ALBANES, hy: ARMENIO,
  hi: HINDI, gn: GUARANI, tpw: TUPI_ANTIGO, ha: HAUCA, ig: IGBO, yrl: NHEENGATU, bn: BENGALI, qu: QUECHUA, kgp: KAINGANG, tca: TIKUNA,
  xav: XAVANTE, tuo: TUKANO, gun: GUARANI_MBYA, ka: GEORGIANO, th: TAILANDES, km: KHMER,
  ay: AIMARA, kgk: GUARANI_KAIOWA, nah: NAUATLE, kpc: BANIWA, lo: LAOSIANO, cbs: HUNI_KUIN,
  nv: NAVAJO, nhd: GUARANI_NANDEVA, tpj: TAPIETE, mi: MAORI, gnw: GUARANI_ANTIGO, haw: HAVAIANO, te: TELUGO, om: OROMO, mr: MARATHI, am: AMARICO, mn: MONGOL,
  hu: HUNGARO, tsd: TSAKONIO, pcm: PIDGIN_NIGERIANO, ta: TAMIL, tl: TAGALO, hyw: ARMENIO_OCIDENTAL,
  tdt: TETUM, arn: MAPUDUNGUN, gd: GAELICO_ESCOCES, ht: CRIOULO_HAITIANO, ktn: KARITIANA, kmb: QUIMBUNDO,
  pln: PALENQUERO };

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
  JUDEU_ESPANHOL,
  AROMENO,
  BASCO,
  SUECO,
  NORUEGUES,
  DINAMARQUES,
  ISLANDES,
  INGLES,
  ALEMAO,
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
  {
    code: 'ar', name: 'Árabe', nativeName: 'العربية', flag: '🇸🇦',
    lineage: { family: 'Afro-asiático', branches: ['Semítico', 'Semítico central'], region: 'Península Arábica (Ásia Ocidental), hoje também o norte da África', writing: 'Alfabeto árabe (abjad, da direita para a esquerda)' },
  },
  CHINES,
  HINDI,
  BENGALI,
  INDONESIO,
  // maori e havaiano: mesma família austronésia do indonésio (ramo polinésio), mas bem mais distantes
  // dentro dela; maori e havaiano são parentes próximos entre si (ambos polinésios), mas não a mesma
  // língua
  MAORI,
  HAVAIANO,
  {
    code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰',
    lineage: { family: 'Indo-europeu', branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano central'], region: 'Norte do subcontinente indiano (Paquistão e Índia)', writing: 'Alfabeto perso-árabe (nastaliq)' },
  },
  MARATHI,
  VIETNAMITA,
  KHMER,
  TELUGO,
  // tailandês e laosiano: família kra-dai, parentes reais entre si (mutuamente inteligíveis em boa
  // parte), mas sem parentesco com o vietnamita nem com o khmer (vizinhos geográficos, não linguísticos)
  TAILANDES,
  LAOSIANO,
  TURCO,
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
  // huni kuĩ: família pano, do Acre e sudeste do Peru
  HUNI_KUIN,
  // náuatle: família uto-asteca, a língua dos astecas/mexicas
  NAUATLE,
  // o suaíli, a língua africana mais falada como segunda língua, e as maiores da África depois dele
  // (Ethnologue; o árabe já está acima e o pidgin nigeriano é crioulo)
  SUAILI,
  HAUCA,
  AMARICO,
  IORUBA,
  OROMO,
  IGBO,
  // navajo: família na-dené, sem parentesco com o indo-europeu nem com as línguas indígenas americanas
  // já no app (que são de famílias diferentes: tupi, macro-jê, quéchua, aimará, tukano, aruak, pano)
  NAVAJO,
  // mongol: família mongólica própria, sem parentesco comprovado com o turcaico/tungúsico (a hipótese
  // "altaica" é hoje vista como obsoleta) nem com qualquer outra família já no app
  MONGOL,
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
];

export const DEFAULT_LANGUAGE = 'ro';

export function getPack(code: string): LanguagePack {
  return PACKS[code] ?? PACKS[DEFAULT_LANGUAGE];
}

export function isAvailable(code: string): boolean {
  return code in PACKS;
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
