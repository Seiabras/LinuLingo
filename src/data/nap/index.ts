import type { LanguagePack } from '../types';
import { VOCAB_NAP } from './vocabulario';
import { UNITS_NAP } from './curriculo';
import { GRAMMAR_NAP } from './gramatica';
import { STORIES_NAP } from './historias';
import { COMMUNITY_NAP, ETYMOLOGY_NAP, JOURNAL_PROMPTS_NAP, SCENARIOS_NAP, SHADOWING_NAP } from './extras';
import { ACCENTS_NAP } from './sotaques';

export const NAPOLITANO: LanguagePack = {
  code: 'nap',
  name: 'Napolitano',
  nativeName: 'Napulitano',
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ítalo-dálmata', 'Napolitano-calabrês'],
    region: 'Campânia e sul da Itália (Nápoles)',
    writing: 'Alfabeto latino (sem norma oficial única; convenções com apóstrofo para as vogais e consoantes reduzidas)',
  },
  speechLocale: 'it-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~84 palavras, 4 tópicos de gramática, 2 histórias), seguindo as convenções mais aceitas de grafia (não existe uma norma oficial única). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_NAP,
  units: UNITS_NAP,
  etymology: ETYMOLOGY_NAP,
  community: COMMUNITY_NAP,
  scenarios: SCENARIOS_NAP,
  stories: STORIES_NAP,
  accents: ACCENTS_NAP,
  grammar: GRAMMAR_NAP,
  journalPrompts: JOURNAL_PROMPTS_NAP,
  shadowing: SHADOWING_NAP,
  specialChars: ['’'],
  genders: ['m', 'f'],
  greeting: 'Ué',
  sampleSentence: 'Ué! Ij’ songo Linu. Jammo ’mparà napulitano!',
  phrases: { hi: 'Ué!', thanks: 'Grazie!', letsStart: ['Jammo!', 'Vamos começar!'] },
  formalMarkers: 'vuje (com o verbo no plural), pe’ piacere, scusate',
  cognateNote:
    'O napolitano nasceu do mesmo latim vulgar que o italiano padrão, mas foi por um caminho próprio: a UNESCO o reconhece como língua distinta, não um sotaque do italiano. Palavras como “’o pane” (pão), “’a casa” (casa) e “ammore” (amor) ficam fáceis de reconhecer para quem fala português; outras, como “’o caso” (queijo, do latim “caseus”), guardaram uma raiz que o italiano padrão trocou por outra.',
};
