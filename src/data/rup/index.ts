import type { LanguagePack } from '../types';
import { VOCAB_RUP } from './vocabulario';
import { UNITS_RUP } from './curriculo';
import { GRAMMAR_RUP } from './gramatica';
import { STORIES_RUP } from './historias';
import { COMMUNITY_RUP, ETYMOLOGY_RUP, JOURNAL_PROMPTS_RUP, SCENARIOS_RUP, SHADOWING_RUP } from './extras';
import { ACCENTS_RUP } from './sotaques';

export const AROMENO: LanguagePack = {
  code: 'rup',
  name: 'Aromeno',
  nativeName: 'Armãneashti',
  // sem país próprio: a Macedônia do Norte é onde a língua tem reconhecimento oficial de verdade
  // (língua oficial do município de Kruševo desde 2006), diferente de Grécia e Albânia, onde não é
  // reconhecida — por isso a bandeira aqui, e não a da Grécia, onde vivem mais falantes.
  flag: '🇲🇰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Românico oriental'],
    region: 'Espalhado pela Grécia, Albânia, Macedônia do Norte, Bulgária, Sérvia e Romênia, sem um país próprio',
    writing: 'Alfabeto latino (grafia do simpósio de Bitola, 1997: ã, sh, ts, dz, lj, nj)',
  },
  // ISO 639-3 na melhor tentativa: a maioria dos aparelhos não tem voz nativa para o aromeno.
  speechLocale: 'rup',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~88 palavras, 4 tópicos de gramática, 2 histórias), na grafia de Bitola, ainda sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_RUP,
  units: UNITS_RUP,
  etymology: ETYMOLOGY_RUP,
  community: COMMUNITY_RUP,
  scenarios: SCENARIOS_RUP,
  stories: STORIES_RUP,
  accents: ACCENTS_RUP,
  grammar: GRAMMAR_RUP,
  journalPrompts: JOURNAL_PROMPTS_RUP,
  shadowing: SHADOWING_RUP,
  specialChars: ['ã'],
  // masculino, feminino e neutro, como no romeno
  genders: ['m', 'f', 'n'],
  greeting: 'Bunã dzua',
  sampleSentence: 'Bunã dzua! Mi cljamã Linu. Io nvets armãneashti!',
  phrases: { hi: 'Bunã dzua!', thanks: 'Efharisto!', letsStart: ['Ghini vinishi!', 'Vamos começar!'] },
  formalMarkers: 'voi (com o verbo no plural), vã plãcãrsescu',
  cognateNote:
    'O aromeno é uma língua românica oriental, irmã do romeno: as duas vêm do latim falado nos Bálcãs. Palavras como “apã” (água), “casã” (casa) e “frati” (irmão) ficam fáceis de reconhecer para quem fala português; outras, como “efharisto” (obrigado) e “cãsãbã” (cidade), vieram emprestadas do grego e do turco, línguas vizinhas por séculos.',
};
