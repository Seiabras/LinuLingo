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
import { ISLANDES } from './is';
import { FINLANDES } from './fi';

/** Idiomas com conteúdo pronto. */
export const PACKS: Record<string, LanguagePack> = { ro: ROMENO, ru: RUSSO, es: ESPANHOL, it: ITALIANO, pt: PORTUGUES, sv: SUECO, nb: NORUEGUES, da: DINAMARQUES, fr: FRANCES, is: ISLANDES, fi: FINLANDES };

/** Todos os idiomas planejados, com família, ramo e região (agrupam o seletor). */
export const LANGUAGES: LanguageInfo[] = [
  ROMENO,
  RUSSO,
  ESPANHOL,
  ITALIANO,
  PORTUGUES,
  FRANCES,
  SUECO,
  NORUEGUES,
  DINAMARQUES,
  ISLANDES,
  {
    code: 'en', name: 'Inglês', nativeName: 'English', flag: '🇬🇧',
    lineage: { family: 'Indo-europeu', branches: ['Germânico', 'Germânico ocidental', 'Anglo-frísio'], region: 'Ilhas Britânicas', writing: 'Alfabeto latino' },
  },
  FINLANDES,
  {
    code: 'et', name: 'Estoniano', nativeName: 'Eesti', flag: '🇪🇪',
    lineage: { family: 'Urálico', branches: ['Fínico', 'Fínico meridional'], region: 'Costa sul do Golfo da Finlândia (Estônia)', writing: 'Alfabeto latino (õ, ä, ö, ü)' },
  },
  {
    code: 'ja', name: 'Japonês', nativeName: '日本語', flag: '🇯🇵',
    lineage: { family: 'Japônico', branches: ['Japonês'], region: 'Arquipélago japonês (Leste Asiático)', writing: 'Hiragana, katakana e kanji' },
  },
  {
    code: 'ko', name: 'Coreano', nativeName: '한국어', flag: '🇰🇷',
    lineage: { family: 'Coreânico', branches: ['Coreano'], region: 'Península coreana (Leste Asiático)', writing: 'Hangul' },
  },
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
