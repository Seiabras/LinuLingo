import type { LanguagePack } from '../types';
import { VOCAB_HU } from './vocabulario';
import { UNITS_HU } from './curriculo';
import { GRAMMAR_HU } from './gramatica';
import { STORIES_HU } from './historias';
import { COMMUNITY_HU, ETYMOLOGY_HU, JOURNAL_PROMPTS_HU, SCENARIOS_HU, SHADOWING_HU } from './extras';
import { ACCENTS_HU } from './sotaques';
import { VARIANTS_HU } from './variantes';

/**
 * Pacote do húngaro (magyar nyelv). Idioma novo (pedido do dono do projeto): família urálica, ramo
 * úgrico — diferente do ramo fínico do finlandês e do estoniano, já no app. Fatos conferidos na
 * Wikipédia em inglês («Hungarian language», «Hungarian grammar», «Ugric languages», «Hungarian
 * names», «Great Market Hall») e no Wiktionary (en.wiktionary.org, verbete de cada palavra citada).
 */
export const HUNGARO: LanguagePack = {
  code: 'hu',
  name: 'Húngaro',
  nativeName: 'Magyar',
  flag: '🇭🇺',
  lineage: {
    family: 'Urálico',
    branches: ['Úgrico', 'Húngaro'],
    region: 'Bacia dos Cárpatos (Hungria), com minorias na Romênia, na Eslováquia, na Sérvia e na Ucrânia',
    writing: 'Alfabeto latino (á, é, í, ó, ö, ő, ú, ü, ű), com dígrafos que valem uma letra só (cs, dz, dzs, gy, ly, ny, sz, ty, zs)',
  },
  speechLocale: 'hu-HU',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Por enquanto, A1 e A2 completos (unidades 1 a 4, 111 palavras, 10 tópicos de gramática, 4 histórias): saudações, família, o passado, prefixos verbais, clima, roupas, sentimentos, comparativo e futuro. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HU,
  units: UNITS_HU,
  etymology: ETYMOLOGY_HU,
  community: COMMUNITY_HU,
  scenarios: SCENARIOS_HU,
  stories: [...STORIES_HU, ...VARIANTS_HU.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_HU,
  accents: ACCENTS_HU,
  grammar: GRAMMAR_HU,
  journalPrompts: JOURNAL_PROMPTS_HU,
  shadowing: SHADOWING_HU,
  specialChars: ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű'],
  // o húngaro não marca gênero gramatical: "ő" serve para ele e para ela
  genders: [],
  greeting: 'Jó reggelt',
  sampleSentence: 'Szia! A nevem Linu. Szeretek magyarul tanulni!',
  phrases: { hi: 'Szia!', thanks: 'Köszönöm!', letsStart: ['Kezdjük el!', 'Vamos começar!'] },
  formalMarkers: 'Ön (tratamento formal, com o verbo na 3ª pessoa), kérem, köszönöm szépen',
  cognateNote:
    'O húngaro não é indo-europeu: é urálico, mas de um ramo diferente do finlandês e do estoniano (o ramo úgrico, não o fínico) — por isso quase nada se parece à primeira vista, apesar do parentesco de família. Palavras do dia a dia como “víz” (água) e “szív” (coração) vêm direto do proto-urálico; outras, como “alma” (maçã) e “gyümölcs” (fruta), são empréstimos túrquicos de antes da chegada à Europa; e “macska” (gato) e “asztal” (mesa) vieram do contato com povos eslavos já na bacia dos Cárpatos. O húngaro também não tem gênero gramatical e não usa preposições: usa sufixos de caso grudados na palavra.',
};
