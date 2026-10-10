import type { LanguagePack } from '../types';
import { VOCAB_IU } from './vocabulario';
import { UNITS_IU } from './curriculo';
import { GRAMMAR_IU } from './gramatica';
import { STORIES_IU } from './historias';
import { COMMUNITY_IU, ETYMOLOGY_IU, JOURNAL_PROMPTS_IU, SCENARIOS_IU, SHADOWING_IU } from './extras';
import { ACCENTS_IU } from './sotaques';
import { VARIANTS_IU } from './variantes';
import { toReadingIu } from '@/services/reading-inuktitut';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [WIKT] Wikcionário em inglês, verbetes do inuktitut;
 * [OMNI] Omniglot, «Useful phrases in Inuktitut»; [WIKI] Wikipédia em inglês, «Inuktitut», «Inuit
 * grammar», «Inuit numerals», «Inuktitut syllabics» (todas consultadas em 10/10/2026). Curso criado a
 * pedido do dono (10/10/2026) para completar a família esquimó-aleúte.
 */
export const INUKTITUT: LanguagePack = {
  code: 'iu',
  name: 'Inuktitut',
  nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  flag: '🇨🇦',
  lineage: {
    family: 'Esquimó-aleúte',
    branches: ['Esquimó', 'Inuíte', 'Inuíte do leste do Canadá'],
    region: 'Nunavut, Nunavik (norte de Quebec) e Nunatsiavut (Labrador), no Ártico canadense; língua oficial de Nunavut, ao lado do inglês e do francês',
    writing: 'Silabário inuíte (qaniujaaqpait), na ortografia do Inuit Cultural Institute; no Labrador e no inuinnaqtun, letras latinas',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o inuktitut
  speechLocale: 'iu',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 85 palavras, 4 tópicos de gramática e 2 histórias), no inuktitut de Nunavut, escrito no silabário inuíte. A leitura em letras latinas aparece embaixo de cada frase, e digitar essa leitura também vale como resposta. Cada palavra vem do Wikcionário, e as frases do dia a dia, do Omniglot; só três frases curtas foram montadas pelas regras de gramática da Wikipédia, e estão marcadas nos arquivos. Nenhuma voz sintética conhecida fala o inuktitut, então o áudio pode ficar mudo. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_IU,
  units: UNITS_IU,
  etymology: ETYMOLOGY_IU,
  community: COMMUNITY_IU,
  scenarios: SCENARIOS_IU,
  stories: [...STORIES_IU, ...VARIANTS_IU.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_IU,
  accents: ACCENTS_IU,
  grammar: GRAMMAR_IU,
  journalPrompts: JOURNAL_PROMPTS_IU,
  shadowing: SHADOWING_IU,
  reading: (t) => (/[᐀-ᙿ]/.test(t) ? toReadingIu(t) : ''),
  typedReading: (t) => toReadingIu(t),
  specialChars: [],
  keyboardRows: [
    ['ᐃ', 'ᐅ', 'ᐊ', 'ᐱ', 'ᐳ', 'ᐸ', 'ᑉ', 'ᑎ', 'ᑐ', 'ᑕ', 'ᑦ'],
    ['ᑭ', 'ᑯ', 'ᑲ', 'ᒃ', 'ᒋ', 'ᒍ', 'ᒐ', 'ᒡ', 'ᒥ', 'ᒧ', 'ᒪ', 'ᒻ'],
    ['ᓂ', 'ᓄ', 'ᓇ', 'ᓐ', 'ᓯ', 'ᓱ', 'ᓴ', 'ᔅ', 'ᓕ', 'ᓗ', 'ᓚ', 'ᓪ'],
    ['ᔨ', 'ᔪ', 'ᔭ', 'ᔾ', 'ᕕ', 'ᕗ', 'ᕙ', 'ᕝ', 'ᕆ', 'ᕈ', 'ᕋ', 'ᕐ'],
    ['ᕿ', 'ᖁ', 'ᖃ', 'ᖅ', 'ᖏ', 'ᖑ', 'ᖓ', 'ᖕ', 'ᙱ', 'ᙳ', 'ᙵ', 'ᖖ'],
    ['ᐄ', 'ᐆ', 'ᐋ', 'ᓈ', 'ᑖ', 'ᑳ', 'ᒦ', 'ᓛ', 'ᔮ', 'ᖄ'],
  ],
  genders: [],
  greeting: 'ᐊᐃ',
  sampleSentence: 'ᐊᐃ! ᖃᓄᐃᑉᐱᑦ? ᖃᓄᐃᙱᑦᑐᖓ, ᖁᔭᓐᓇᒦᒃ!',
  phrases: { hi: 'ᐊᐃ!', thanks: 'ᖁᔭᓐᓇᒦᒃ!', letsStart: ['ᐊᑏ!', 'Vamos! (o “atii” de “vamos comer”)'] },
  formalMarkers:
    'O inuktitut não tem um pronome formal separado: “ᐃᕝᕕᑦ” (ivvit) serve para qualquer pessoa. A cortesia aparece em fórmulas como “ᖁᔭᓐᓇᒦᒃ” (obrigado) e a resposta “ᐃᓛᓕ” (de nada).',
  cognateNote:
    'O inuktitut não é parente do português: é da família esquimó-aleúte, prima do groenlandês e das línguas inuítes do Alasca. O parentesco vai na direção contrária: “caiaque” e “iglu” vieram de palavras inuítes, “qajaq” e “iglu” (que em inuktitut é qualquer casa). E muitas palavras se parecem com as do groenlandês: “ᐊᓈᓇ” (anaana, mãe), “ᓄᓇ” (nuna, terra).',
};
