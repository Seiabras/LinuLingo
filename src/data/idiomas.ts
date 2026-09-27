import type { LanguageInfo, LanguagePack } from './types';
import { ROMENO } from './ro';
import { RUSSO } from './ru';
import { ESPANHOL } from './es';
import { ITALIANO } from './it';
import { PORTUGUES } from './pt';
import { SUECO } from './sv';

/** Idiomas com conteúdo pronto. */
export const PACKS: Record<string, LanguagePack> = { ro: ROMENO, ru: RUSSO, es: ESPANHOL, it: ITALIANO, pt: PORTUGUES, sv: SUECO };

/** Todos os idiomas planejados, com família, ramo e região (agrupam o seletor). */
export const LANGUAGES: LanguageInfo[] = [
  ROMENO,
  RUSSO,
  ESPANHOL,
  ITALIANO,
  PORTUGUES,
  SUECO,
  {
    code: 'en', name: 'Inglês', nativeName: 'English', flag: '🇬🇧',
    lineage: { family: 'Indo-europeu', branches: ['Germânico', 'Germânico ocidental', 'Anglo-frísio'], region: 'Ilhas Britânicas', writing: 'Alfabeto latino' },
  },
  {
    code: 'fi', name: 'Finlandês', nativeName: 'Suomi', flag: '🇫🇮',
    lineage: { family: 'Urálico', branches: ['Fínico', 'Fínico setentrional'], region: 'Fenoscândia (Finlândia)', writing: 'Alfabeto latino (ä, ö)' },
  },
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
