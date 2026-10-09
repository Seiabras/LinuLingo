import type { LanguagePack } from '../types';
import { VOCAB_MG } from './vocabulario';
import { UNITS_MG } from './curriculo';
import { GRAMMAR_MG } from './gramatica';
import { STORIES_MG } from './historias';
import { COMMUNITY_MG, ETYMOLOGY_MG, JOURNAL_PROMPTS_MG, SCENARIOS_MG, SHADOWING_MG } from './extras';

export const MALGAXE: LanguagePack = {
  code: 'mg',
  name: 'Malgaxe',
  nativeName: 'Malagasy',
  flag: '🇲🇬',
  lineage: {
    family: 'Austronésio',
    branches: ['Malaio-polinésio'],
    region: 'Madagascar',
    writing: 'Alfabeto latino',
  },
  speechLocale: 'mg-MG',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Só os níveis A1 e A2 por enquanto (quatro unidades, dialeto merina). Do B1 até o C2 chegam nas próximas atualizações.',
  },
  vocab: VOCAB_MG,
  units: UNITS_MG,
  etymology: ETYMOLOGY_MG,
  community: COMMUNITY_MG,
  scenarios: SCENARIOS_MG,
  stories: STORIES_MG,
  grammar: GRAMMAR_MG,
  journalPrompts: JOURNAL_PROMPTS_MG,
  shadowing: SHADOWING_MG,
  specialChars: [],
  // o malgaxe não marca gênero gramatical: os substantivos não se dividem por gênero
  genders: [],
  greeting: 'Manao ahoana',
  sampleSentence: 'Manao ahoana! Linu aho. Mihinana vary isika!',
  phrases: { hi: 'Manao ahoana!', thanks: 'Misaotra!', letsStart: ['Andao!', 'Vamos começar!'] },
  formalMarkers: 'este curso ensina o dialeto merina, a base do malgaxe padrão/oficial — não há um registro formal separado nesta primeira versão',
  cognateNote:
    'O malgaxe é uma língua austronésia, parente do indonésio, do malaio e do javanês, mesmo sendo falado numa ilha ao lado da África — os seus primeiros falantes chegaram de Borneo, não do continente africano. Sem parentesco com o português, embora tenha algumas palavras emprestadas do francês (como “kafe”, café) por causa da colonização.',
};
