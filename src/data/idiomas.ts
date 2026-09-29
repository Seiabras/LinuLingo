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
import { JAPONES } from './ja';
import { COREANO } from './ko';

/** Idiomas com conteúdo pronto. */
export const PACKS: Record<string, LanguagePack> = { ro: ROMENO, ru: RUSSO, es: ESPANHOL, it: ITALIANO, pt: PORTUGUES, sv: SUECO, nb: NORUEGUES, da: DINAMARQUES, fr: FRANCES, ca: CATALAO, is: ISLANDES, fi: FINLANDES, et: ESTONIANO, fo: FEROES, lt: LITUANO, lv: LETAO, sw: SUAILI, ja: JAPONES, ko: COREANO,
  // incompletos (só o A1 por enquanto; ver o campo `incomplete` de cada pacote)
  gl: GALEGO, ast: ASTURIANO, oc: OCCITANO, sc: SARDO, rm: ROMANCHE, fur: FRIULANO, la: LATIM, lad: JUDEU_ESPANHOL, en: INGLES, id: INDONESIO, vi: VIETNAMITA, yo: IORUBA,
  lld: LADINO_DOLOMITAS, de: ALEMAO, nl: NEERLANDES, af: AFRICANER, pl: POLONES, cs: TCHECO, sk: ESLOVACO, uk: UCRANIANO };

/** Todos os idiomas planejados, com família, ramo e região (agrupam o seletor). */
export const LANGUAGES: LanguageInfo[] = [
  ROMENO,
  RUSSO,
  UCRANIANO,
  POLONES,
  TCHECO,
  ESLOVACO,
  ESPANHOL,
  ITALIANO,
  PORTUGUES,
  FRANCES,
  CATALAO,
  GALEGO,
  ASTURIANO,
  OCCITANO,
  SARDO,
  ROMANCHE,
  FRIULANO,
  LADINO_DOLOMITAS,
  LATIM,
  JUDEU_ESPANHOL,
  SUECO,
  NORUEGUES,
  DINAMARQUES,
  ISLANDES,
  INGLES,
  ALEMAO,
  NEERLANDES,
  AFRICANER,
  FINLANDES,
  FEROES,
  ESTONIANO,
  LITUANO,
  LETAO,
  JAPONES,
  COREANO,
  // as maiores línguas da Ásia (Ethnologue, falantes nativos + segunda língua; o russo já está no app)
  {
    code: 'ar', name: 'Árabe', nativeName: 'العربية', flag: '🇸🇦',
    lineage: { family: 'Afro-asiático', branches: ['Semítico', 'Semítico central'], region: 'Península Arábica (Ásia Ocidental), hoje também o norte da África', writing: 'Alfabeto árabe (abjad, da direita para a esquerda)' },
  },
  {
    code: 'zh', name: 'Chinês mandarim', nativeName: '中文（普通话）', flag: '🇨🇳',
    lineage: { family: 'Sino-tibetano', branches: ['Sinítico', 'Mandarim'], region: 'Planície do Norte da China (Leste Asiático)', writing: 'Caracteres chineses (simplificados; tradicionais em Taiwan)' },
  },
  {
    code: 'hi', name: 'Híndi', nativeName: 'हिन्दी', flag: '🇮🇳',
    lineage: { family: 'Indo-europeu', branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano central'], region: 'Norte da Índia (planície do Ganges)', writing: 'Devanágari' },
  },
  {
    code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩',
    lineage: { family: 'Indo-europeu', branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano oriental'], region: 'Bengala (Bangladesh e leste da Índia)', writing: 'Alfabeto bengali' },
  },
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
  {
    code: 'te', name: 'Télugo', nativeName: 'తెలుగు', flag: '🇮🇳',
    lineage: { family: 'Dravídico', branches: ['Dravídico centro-meridional'], region: 'Andhra Pradesh e Telangana (sudeste da Índia)', writing: 'Alfabeto télugo' },
  },
  {
    code: 'tr', name: 'Turco', nativeName: 'Türkçe', flag: '🇹🇷',
    lineage: { family: 'Túrquico', branches: ['Oghuz'], region: 'Anatólia (Ásia Ocidental) e Trácia oriental', writing: 'Alfabeto latino (ç, ğ, ı, ö, ş, ü)' },
  },
  // o suaíli, a língua africana mais falada como segunda língua, e as maiores da África depois dele
  // (Ethnologue; o árabe já está acima e o pidgin nigeriano é crioulo)
  SUAILI,
  {
    code: 'ha', name: 'Hauçá', nativeName: 'Harshen Hausa', flag: '🇳🇬',
    lineage: { family: 'Afro-asiático', branches: ['Chádico', 'Chádico ocidental'], region: 'Norte da Nigéria e sul do Níger (Sahel)', writing: 'Alfabeto latino (boko: ɓ, ɗ, ƙ, ƴ); também em escrita árabe (ajami)' },
  },
  {
    code: 'am', name: 'Amárico', nativeName: 'አማርኛ', flag: '🇪🇹',
    lineage: { family: 'Afro-asiático', branches: ['Semítico', 'Semítico etiópico'], region: 'Planalto etíope (Chifre da África)', writing: 'Silabário ge’ez (fidel)' },
  },
  IORUBA,
  {
    code: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo', flag: '🇪🇹',
    lineage: { family: 'Afro-asiático', branches: ['Cuchítico', 'Cuchítico oriental'], region: 'Centro e sul da Etiópia e norte do Quênia', writing: 'Alfabeto latino (qubee)' },
  },
  {
    code: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', flag: '🇳🇬',
    lineage: { family: 'Níger-Congo', branches: ['Atlântico-congolês', 'Volta-Níger', 'Igbóide'], region: 'Sudeste da Nigéria', writing: 'Alfabeto latino (ị, ọ, ụ, ṅ e os tons)' },
  },
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
