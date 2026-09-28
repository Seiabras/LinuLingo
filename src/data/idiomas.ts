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
import { JAPONES } from './ja';
import { COREANO } from './ko';

/** Idiomas com conteúdo pronto. */
export const PACKS: Record<string, LanguagePack> = { ro: ROMENO, ru: RUSSO, es: ESPANHOL, it: ITALIANO, pt: PORTUGUES, sv: SUECO, nb: NORUEGUES, da: DINAMARQUES, fr: FRANCES, ca: CATALAO, is: ISLANDES, fi: FINLANDES, et: ESTONIANO, fo: FEROES, lt: LITUANO, ja: JAPONES, ko: COREANO };

/** Todos os idiomas planejados, com família, ramo e região (agrupam o seletor). */
export const LANGUAGES: LanguageInfo[] = [
  ROMENO,
  RUSSO,
  ESPANHOL,
  ITALIANO,
  PORTUGUES,
  FRANCES,
  CATALAO,
  SUECO,
  NORUEGUES,
  DINAMARQUES,
  ISLANDES,
  {
    code: 'en', name: 'Inglês', nativeName: 'English', flag: '🇬🇧',
    lineage: { family: 'Indo-europeu', branches: ['Germânico', 'Germânico ocidental', 'Anglo-frísio'], region: 'Ilhas Britânicas', writing: 'Alfabeto latino' },
  },
  FINLANDES,
  FEROES,
  ESTONIANO,
  LITUANO,
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
  {
    code: 'id', name: 'Indonésio', nativeName: 'Bahasa Indonesia', flag: '🇮🇩',
    lineage: { family: 'Austronésio', branches: ['Malaio-polinésio', 'Malaico'], region: 'Arquipélago malaio (Sudeste Asiático)', writing: 'Alfabeto latino' },
  },
  {
    code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰',
    lineage: { family: 'Indo-europeu', branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano central'], region: 'Norte do subcontinente indiano (Paquistão e Índia)', writing: 'Alfabeto perso-árabe (nastaliq)' },
  },
  {
    code: 'mr', name: 'Marati', nativeName: 'मराठी', flag: '🇮🇳',
    lineage: { family: 'Indo-europeu', branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano meridional'], region: 'Maharashtra (oeste da Índia)', writing: 'Devanágari' },
  },
  {
    code: 'vi', name: 'Vietnamita', nativeName: 'Tiếng Việt', flag: '🇻🇳',
    lineage: { family: 'Austro-asiático', branches: ['Vietico', 'Viet-muong'], region: 'Delta do rio Vermelho (Sudeste Asiático)', writing: 'Alfabeto latino (chữ Quốc ngữ, com os tons marcados)' },
  },
  {
    code: 'te', name: 'Télugo', nativeName: 'తెలుగు', flag: '🇮🇳',
    lineage: { family: 'Dravídico', branches: ['Dravídico centro-meridional'], region: 'Andhra Pradesh e Telangana (sudeste da Índia)', writing: 'Alfabeto télugo' },
  },
  {
    code: 'tr', name: 'Turco', nativeName: 'Türkçe', flag: '🇹🇷',
    lineage: { family: 'Túrquico', branches: ['Oghuz'], region: 'Anatólia (Ásia Ocidental) e Trácia oriental', writing: 'Alfabeto latino (ç, ğ, ı, ö, ş, ü)' },
  },
  // as maiores línguas da África depois do suaíli (Ethnologue; o árabe já está acima e o pidgin nigeriano é crioulo)
  {
    code: 'ha', name: 'Hauçá', nativeName: 'Harshen Hausa', flag: '🇳🇬',
    lineage: { family: 'Afro-asiático', branches: ['Chádico', 'Chádico ocidental'], region: 'Norte da Nigéria e sul do Níger (Sahel)', writing: 'Alfabeto latino (boko: ɓ, ɗ, ƙ, ƴ); também em escrita árabe (ajami)' },
  },
  {
    code: 'am', name: 'Amárico', nativeName: 'አማርኛ', flag: '🇪🇹',
    lineage: { family: 'Afro-asiático', branches: ['Semítico', 'Semítico etiópico'], region: 'Planalto etíope (Chifre da África)', writing: 'Silabário ge’ez (fidel)' },
  },
  {
    code: 'yo', name: 'Iorubá', nativeName: 'Èdè Yorùbá', flag: '🇳🇬',
    lineage: { family: 'Níger-Congo', branches: ['Atlântico-congolês', 'Volta-Níger', 'Iorubóide'], region: 'Sudoeste da Nigéria, Benin e Togo', writing: 'Alfabeto latino (ẹ, ọ, ṣ e os tons marcados)' },
  },
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
