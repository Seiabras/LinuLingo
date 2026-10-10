import type { LanguagePack } from '../types';
import { VOCAB_FRP } from './vocabulario';
import { UNITS_FRP } from './curriculo';
import { GRAMMAR_FRP } from './gramatica';
import { STORIES_FRP } from './historias';
import { COMMUNITY_FRP, ETYMOLOGY_FRP, JOURNAL_PROMPTS_FRP, SCENARIOS_FRP, SHADOWING_FRP } from './extras';
import { ACCENTS_FRP } from './sotaques';
import { VARIANTS_FRP } from './variantes';

export const FRANCOPROVENCAL: LanguagePack = {
  code: 'frp',
  name: 'Francoprovençal',
  nativeName: 'Arpetan',
  flag: '🇫🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Galo-românico', 'Francoprovençal'],
    region: 'Região alpina: leste da França (Lyon, Saboia), Suíça romanda e Vale de Aosta (Itália)',
    writing: 'Alfabeto latino, grafia ORB (Ortografia de Referência B)',
  },
  speechLocale: 'frp-FR',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~48 palavras, 4 tópicos de gramática, 2 histórias), na grafia ORB. O francoprovençal não tem uma fala oral única — é uma língua de dialetos, e o vocabulário aqui ficou mais enxuto do que o normal porque cada palavra precisou ser conferida numa fonte. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_FRP,
  units: UNITS_FRP,
  etymology: ETYMOLOGY_FRP,
  community: COMMUNITY_FRP,
  scenarios: SCENARIOS_FRP,
  stories: [...STORIES_FRP, ...VARIANTS_FRP.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_FRP,
  accents: ACCENTS_FRP,
  grammar: GRAMMAR_FRP,
  journalPrompts: JOURNAL_PROMPTS_FRP,
  shadowing: SHADOWING_FRP,
  specialChars: ['é', 'è', 'ê', 'ô', 'ç', 'â'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Bonjorn',
  sampleSentence: 'Bonjorn! Je m’apèlo Linu. Nos aprendens francoprovènçâl ensems!',
  phrases: { hi: 'Bonjorn!', thanks: 'Grant-marci!', letsStart: ['Alôr, comenciens!', 'Vamos começar!'] },
  formalMarkers: 'vos (com o verbo no plural), se vos plai, èxcusâd-mè',
  cognateNote:
    'O francoprovençal nasceu do mesmo latim que o francês e o occitano, mas forma um terceiro ramo galo-românico à parte — nem langue d’oïl, nem langue d’oc. Palavras como “pan” (pão), “vin” (vinho) e “frâre” (irmão) ficam fáceis de reconhecer para quem fala português, já que vêm direto do latim. Cada palavra mostra a raiz e os parentes nas línguas irmãs.',
};
