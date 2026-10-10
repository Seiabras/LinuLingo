import type { LanguagePack } from '../types';
import { VOCAB_AF } from './vocabulario';
import { UNITS_AF } from './curriculo';
import { GRAMMAR_AF } from './gramatica';
import { STORIES_AF } from './historias';
import { COMMUNITY_AF, ETYMOLOGY_AF, JOURNAL_PROMPTS_AF, SCENARIOS_AF, SHADOWING_AF } from './extras';
import { ACCENTS_AF } from './sotaques';
import { VARIANTS_AF } from './variantes';

export const AFRICANER: LanguagePack = {
  code: 'af',
  name: 'Africâner',
  nativeName: 'Afrikaans',
  flag: '🇿🇦',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Baixo-franconiano'],
    region: 'África do Sul e Namíbia',
    writing: 'Alfabeto latino (ê, ô, û, ë, ï), na ortografia da Afrikaanse Woordelys en Spelreëls (AWS)',
  },
  speechLocale: 'af-ZA',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 150 palavras, 8 tópicos de gramática, 4 histórias), no africâner-padrão. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_AF,
  units: UNITS_AF,
  etymology: ETYMOLOGY_AF,
  community: COMMUNITY_AF,
  scenarios: SCENARIOS_AF,
  stories: [...STORIES_AF, ...VARIANTS_AF.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_AF,
  accents: ACCENTS_AF,
  grammar: GRAMMAR_AF,
  journalPrompts: JOURNAL_PROMPTS_AF,
  shadowing: SHADOWING_AF,
  specialChars: ['ê', 'ô', 'û', 'ë', 'ï', 'é'],
  // sem gênero gramatical: o artigo é sempre «die»
  genders: [],
  greeting: 'Hallo',
  sampleSentence: 'Hallo! My naam is Linu. Ons leer Afrikaans!',
  phrases: { hi: 'Hallo!', thanks: 'Dankie!', letsStart: ['Kom ons begin!', 'Vamos começar!'] },
  formalMarkers: 'u (em vez de jy), asseblief, verskoon my, meneer, mevrou',
  cognateNote:
    'O africâner é filho do neerlandês do século XVII e continua muito parecido com ele: quem aprende um lê boa parte do outro. É também primo do alemão e do inglês (huis = Haus = house). O português deixou marcas na língua, como “mielie” (milho) e “kraal” (curral).',
};
