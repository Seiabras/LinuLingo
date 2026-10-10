import type { LanguagePack } from '../types';
import { VOCAB_OSP } from './vocabulario';
import { UNITS_OSP } from './curriculo';
import { GRAMMAR_OSP } from './gramatica';
import { STORIES_OSP } from './historias';
import { COMMUNITY_OSP, ETYMOLOGY_OSP, JOURNAL_PROMPTS_OSP, SCENARIOS_OSP, SHADOWING_OSP } from './extras';

export const CASTELHANO_MEDIEVAL: LanguagePack = {
  code: 'osp',
  name: 'Castelhano Medieval',
  nativeName: 'Castellano',
  // sem estado vivo (não é país da ISO 3166-1) e sem falantes nativos: um emoji simbólico (a corte medieval).
  flag: '🏰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico'],
    region: 'Castela (atual centro-norte da Espanha), séc. X-XV',
    writing: 'Alfabeto latino, sem ortografia padronizada entre manuscritos',
  },
  // BCP-47 na melhor tentativa: quase nenhum aparelho tem voz nativa para castelhano medieval.
  speechLocale: 'osp',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 80 palavras, 8 tópicos de gramática — do verbo seer e a resposta afirmativa por eco até os números maiores, o futuro perifrástico com aver e o passado composto com seer dos verbos de movimento —, 4 histórias). O teto real deste idioma é C1.2 (castelhano medieval tem bem menos material livre e documentado que o espanhol moderno, já completo): faltam o B1 e o B2 inteiros, e metade do C1, sempre só com formas atestadas no Wiktionary ou na Wikipédia, nunca inventadas.',
  },
  vocab: VOCAB_OSP,
  units: UNITS_OSP,
  etymology: ETYMOLOGY_OSP,
  community: COMMUNITY_OSP,
  scenarios: SCENARIOS_OSP,
  stories: STORIES_OSP,
  grammar: GRAMMAR_OSP,
  journalPrompts: JOURNAL_PROMPTS_OSP,
  shadowing: SHADOWING_OSP,
  specialChars: ['ç', 'ñ'],
  // "Bien venido" é a fórmula de saudação mais frequente no repertório castelhano medieval, segundo
  // tese da Universidade de León (buleria.unileon.es, consultada em 08/10/2026) e confirmada pelo
  // Wiktionary ("Old Spanish bien venido" na etimologia de "bienvenido"). "Grado" (obrigado) é
  // confiança média: nenhuma fonte conferida traz uma interjeição de "obrigado" com seção "Old
  // Spanish" dedicada - "grado" vem do latim tardio "gratum" ("ato de agradecimento"), citado na
  // etimologia do espanhol moderno "grado", a melhor aproximação encontrada, sem citação direta de
  // uso no Cantar de Mio Cid.
  greeting: 'Bien venido',
  sampleSentence: 'Bien venido! Mio nombre sie Linu. Seo amigo!',
  phrases: { hi: 'Bien venido!', thanks: 'Grado!', letsStart: ['Nos sedemos amigos!', 'Vamos começar!'] },
  formalMarkers:
    'o castelhano medieval já distinguia “tú” (íntimo) de “vos” (cortês, também usado no plural) — a mesma distinção que o francês antigo guarda entre “tu” e “vos”. É diferente do latim clássico e do nórdico antigo, que não tinham essa forma de cortesia separada.',
  cognateNote:
    'O castelhano medieval é o ancestral direto do espanhol moderno, já completo neste aplicativo. Aqui a etimologia aponta para a FRENTE: cada palavra do castelhano medieval é a raiz de onde veio a forma espanhola de hoje — “can” e “rey”, por exemplo, praticamente não mudaram nada em quase mil anos.',
};
