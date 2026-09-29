import type { LanguagePack } from '../types';
import { VOCAB_EU } from './vocabulario';
import { UNITS_EU } from './curriculo';
import { GRAMMAR_EU } from './gramatica';
import { STORIES_EU } from './historias';
import { COMMUNITY_EU, ETYMOLOGY_EU, JOURNAL_PROMPTS_EU, SCENARIOS_EU, SHADOWING_EU } from './extras';

export const BASCO: LanguagePack = {
  code: 'eu',
  name: 'Basco',
  nativeName: 'Euskara',
  // sem bandeira própria no Unicode: a ikurriña (bandeira basca) não é de país da ISO 3166-1; vale a
  // da Espanha, onde vive a maior parte dos falantes, como no galego, no catalão e no asturiano.
  flag: '🇪🇸',
  lineage: {
    family: 'Língua isolada',
    branches: ['Basco'],
    region: 'País Basco (norte da Espanha e sudoeste da França)',
    writing: 'Alfabeto latino (norma euskara batua, da Euskaltzaindia)',
  },
  speechLocale: 'eu-ES',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~90 palavras, 4 tópicos de gramática, 2 histórias). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_EU,
  units: UNITS_EU,
  etymology: ETYMOLOGY_EU,
  community: COMMUNITY_EU,
  scenarios: SCENARIOS_EU,
  stories: STORIES_EU,
  grammar: GRAMMAR_EU,
  journalPrompts: JOURNAL_PROMPTS_EU,
  shadowing: SHADOWING_EU,
  specialChars: ['ñ'],
  // o basco não tem gênero gramatical: nem o artigo -a nem os adjetivos mudam
  genders: [],
  greeting: 'Kaixo',
  sampleSentence: 'Kaixo! Linu naiz. Euskara ikas dezagun!',
  phrases: { hi: 'Kaixo!', thanks: 'Eskerrik asko!', letsStart: ['Has gaitezen!', 'Vamos começar!'] },
  formalMarkers: 'zu (e nunca o íntimo hi), mesedez, barkatu',
  cognateNote:
    'O basco é uma língua isolada: não se comprovou parentesco com nenhuma outra língua. Ele já era falado nos Pireneus antes da chegada das línguas indo-europeias, como o latim, e sobreviveu a elas (já se propôs parentesco com o ibérico antigo e com línguas do Cáucaso, mas essas ideias não são aceitas). Por isso as palavras nativas, como «etxe» (casa) e «ur» (água), não lembram o português; as parecidas, como «katu» (gato) e «liburu» (livro), vieram emprestadas do latim.',
};
