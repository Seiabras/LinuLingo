import type { LanguagePack } from '../types';
import { VOCAB_GMH } from './vocabulario';
import { UNITS_GMH } from './curriculo';
import { GRAMMAR_GMH } from './gramatica';
import { STORIES_GMH } from './historias';
import { COMMUNITY_GMH, ETYMOLOGY_GMH, JOURNAL_PROMPTS_GMH, SCENARIOS_GMH, SHADOWING_GMH } from './extras';

export const ALTO_ALEMAO_MEDIO: LanguagePack = {
  code: 'gmh',
  name: 'Alto-Alemão Médio',
  nativeName: 'Diutsch',
  // sem estado vivo (não é país da ISO 3166-1) e sem falantes nativos: um emoji simbólico (a corte medieval).
  flag: '🏰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Alto-alemão'],
    region: 'Alemanha central e superior (Suábia, Baviera, Francônia), séc. XI-XIV',
    writing: 'Alfabeto latino, sem ortografia padronizada entre manuscritos; a marcação de vogal longa (â ê î ô û) é convenção acadêmica moderna',
  },
  // BCP-47 na melhor tentativa: quase nenhum aparelho tem voz nativa para alto-alemão médio.
  speechLocale: 'gmh',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~39 palavras, 4 tópicos de gramática incluindo os quatro casos e o verbo sīn, 2 histórias). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_GMH,
  units: UNITS_GMH,
  etymology: ETYMOLOGY_GMH,
  community: COMMUNITY_GMH,
  scenarios: SCENARIOS_GMH,
  stories: STORIES_GMH,
  grammar: GRAMMAR_GMH,
  journalPrompts: JOURNAL_PROMPTS_GMH,
  shadowing: SHADOWING_GMH,
  specialChars: ['ȥ', 'â', 'ê', 'î', 'ô', 'û', 'ü', 'ë', 'ö'],
  greeting: 'Willekomen',
  sampleSentence: 'Willekomen! Mīn nāme ist Linu. Ich bin vriunt!',
  phrases: { hi: 'Willekomen!', thanks: 'Danc!', letsStart: ['Wir birn hie!', 'Vamos começar!'] },
  formalMarkers:
    '“du” é singular e “ir” é plural — mas, ao contrário do francês antigo (“tu”/“vos”) e do castelhano medieval (“tú”/“vos”), nenhuma fonte conferida confirma que “ir” já funcionava como tratamento cortês dirigido a uma só pessoa no alto-alemão médio: é descrito como pouco atestado, talvez regional. Por isso este pacote trata “du”/“ir” só como número (singular/plural), não como cortesia.',
  cognateNote:
    'O alto-alemão médio é o ancestral direto do alemão moderno, já completo neste aplicativo. Aqui a etimologia aponta para a FRENTE: cada palavra do alto-alemão médio é a raiz de onde veio a forma alemã de hoje — “ich bin” e “du bist”, por exemplo, praticamente não mudaram nada em 800 anos.',
};
