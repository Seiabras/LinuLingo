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
  ay: AIMARA, kgk: GUARANI_KAIOWA, nah: NAUATLE, kpc: BANIWA, lo: LAOSIANO, cbs: HUNI_KUIN };

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
  {
    code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰',
    lineage: { family: 'Indo-europeu', branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano central'], region: 'Norte do subcontinente indiano (Paquistão e Índia)', writing: 'Alfabeto perso-árabe (nastaliq)' },
  },
  {
    code: 'mr', name: 'Marati', nativeName: 'मराठी', flag: '🇮🇳',
    lineage: { family: 'Indo-europeu', branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano meridional'], region: 'Maharashtra (oeste da Índia)', writing: 'Devanágari' },
  },
  VIETNAMITA,
  KHMER,
  {
    code: 'te', name: 'Télugo', nativeName: 'తెలుగు', flag: '🇮🇳',
    lineage: { family: 'Dravídico', branches: ['Dravídico centro-meridional'], region: 'Andhra Pradesh e Telangana (sudeste da Índia)', writing: 'Alfabeto télugo' },
  },
  // tailandês e laosiano: família kra-dai, parentes reais entre si (mutuamente inteligíveis em boa
  // parte), mas sem parentesco com o vietnamita nem com o khmer (vizinhos geográficos, não linguísticos)
  TAILANDES,
  LAOSIANO,
  TURCO,
  // línguas indígenas das Américas (família tupi-guarani)
  GUARANI,
  GUARANI_MBYA,
  GUARANI_KAIOWA,
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
  {
    code: 'am', name: 'Amárico', nativeName: 'አማርኛ', flag: '🇪🇹',
    lineage: { family: 'Afro-asiático', branches: ['Semítico', 'Semítico etiópico'], region: 'Planalto etíope (Chifre da África)', writing: 'Silabário ge’ez (fidel)' },
  },
  IORUBA,
  {
    code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo', flag: '🇪🇹',
    lineage: { family: 'Afro-asiático', branches: ['Cuchítico', 'Cuchítico oriental'], region: 'Centro e sul da Etiópia e norte do Quênia', writing: 'Alfabeto latino (qubee)' },
  },
  IGBO,
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
