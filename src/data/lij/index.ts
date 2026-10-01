import type { LanguagePack } from '../types';
import { VOCAB_LIJ } from './vocabulario';
import { UNITS_LIJ } from './curriculo';
import { GRAMMAR_LIJ } from './gramatica';
import { STORIES_LIJ } from './historias';
import { COMMUNITY_LIJ, ETYMOLOGY_LIJ, JOURNAL_PROMPTS_LIJ, SCENARIOS_LIJ, SHADOWING_LIJ } from './extras';

export const LIGURE: LanguagePack = {
  code: 'lij',
  name: 'Lígure',
  nativeName: 'Lìgure',
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Galo-itálico'],
    region: 'Ligúria, noroeste da Itália (ao redor de Gênova); também falado no Mônaco (monegasco) e na Sardenha (tabarchino, em Carloforte e Calasetta)',
    writing: 'Alfabeto latino, grafia do Conseggio Ligure (dicionário DEIZE)',
  },
  speechLocale: 'lij-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, 72 palavras, 4 tópicos de gramática, 2 histórias), na variedade zeneize (genovesa, a mais documentada), com a grafia do Conseggio Ligure; ainda sem transcrição fonética. O vocabulário é mais curto que o normal porque cada palavra foi conferida numa fonte de verdade (o lígure tem pouca documentação online). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_LIJ,
  units: UNITS_LIJ,
  etymology: ETYMOLOGY_LIJ,
  community: COMMUNITY_LIJ,
  scenarios: SCENARIOS_LIJ,
  stories: STORIES_LIJ,
  grammar: GRAMMAR_LIJ,
  journalPrompts: JOURNAL_PROMPTS_LIJ,
  shadowing: SHADOWING_LIJ,
  specialChars: ['æ', 'ç', 'ü', 'ö', 'ë'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Ciao',
  sampleSentence: 'Ciao! Mi acciammo Linu. Imprendemmo o lìgure insemme!',
  phrases: { hi: 'Ciao!', thanks: 'Graçie!', letsStart: ['Cominciemmo!', 'Vamos começar!'] },
  formalMarkers: 'viatri (com o verbo no plural), per piaxei, scusime',
  cognateNote:
    'O lígure é uma língua galo-itálica, prima do italiano mas puxando pro lado do francês e do occitano: muitas consoantes do meio das palavras caíram, como em “cà” (casa) e “moæ” (mãe, do latim “mater”). Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
