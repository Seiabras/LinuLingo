import type { LanguagePack } from '../types';
import { VOCAB_FRO } from './vocabulario';
import { UNITS_FRO } from './curriculo';
import { GRAMMAR_FRO } from './gramatica';
import { STORIES_FRO } from './historias';
import { COMMUNITY_FRO, ETYMOLOGY_FRO, JOURNAL_PROMPTS_FRO, SCENARIOS_FRO, SHADOWING_FRO } from './extras';
import { ACCENTS_FRO } from './sotaques';

export const FRANCES_ANTIGO: LanguagePack = {
  code: 'fro',
  name: 'Francês Antigo',
  nativeName: 'Franceis',
  // sem estado vivo (não é país da ISO 3166-1) e sem falantes nativos: um emoji simbólico (a corte medieval).
  flag: '🏰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Galo-românico'],
    region: 'Norte da Gália (atual norte da França), séc. IX-XIV',
    writing: 'Alfabeto latino, sem ortografia padronizada entre manuscritos',
  },
  // BCP-47 na melhor tentativa: quase nenhum aparelho tem voz nativa para francês antigo.
  speechLocale: 'fro',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'Da A1.1 até a A2.2 por enquanto (4 unidades, ~74 palavras, 8 tópicos de gramática, 4 histórias). O sistema de dois casos (fro-g2) se estende ao plural, com as marcas de "-s" se invertendo entre reto e oblíquo; os demonstrativos "cist/cest" e "cil/cel" seguem a mesma lógica; o imperfeito guarda uma forma arcaica ("ere/ert") ao lado da mais nova ("estoie/estoit"); e a negação "ne" já aparece reforçada por "mie"/"pas", bem antes de "pas" se tornar obrigatório no francês moderno. O teto real deste idioma é C1.2 (ver TETO-DOS-IDIOMAS.md): faltam a B1.1-B1.4 (o subjuntivo, o futuro e o condicional), a B2.1-B2.4 (a prosa em verso dos romances arturianos, o registro jurídico/feudal) e a C1.1-C1.2 (a poesia trovadoresca do norte, a lírica de Chrétien de Troyes e as crônicas em prosa do século XIII).',
  },
  vocab: VOCAB_FRO,
  units: UNITS_FRO,
  etymology: ETYMOLOGY_FRO,
  community: COMMUNITY_FRO,
  scenarios: SCENARIOS_FRO,
  stories: STORIES_FRO,
  accents: ACCENTS_FRO,
  grammar: GRAMMAR_FRO,
  journalPrompts: JOURNAL_PROMPTS_FRO,
  shadowing: SHADOWING_FRO,
  specialChars: ['ï', 'é', 'è', 'ë'],
  greeting: 'Bienvenu',
  sampleSentence: 'Bienvenu! Jo sui Linu. Parlons franceis!',
  phrases: { hi: 'Bienvenu!', thanks: 'Merci!', letsStart: ['Parlons!', 'Vamos começar!'] },
  formalMarkers:
    'o francês antigo já distinguia "tu" (íntimo) de "vos" (cortês, também usado no plural) — a mesma distinção que o francês moderno guarda até hoje entre "tu" e "vous". É diferente do latim clássico e do nórdico antigo, que não tinham essa forma de cortesia separada.',
  cognateNote:
    'O francês antigo é o ancestral direto do francês moderno, já completo neste aplicativo. Aqui a etimologia aponta para a FRENTE: cada palavra do francês antigo é a raiz de onde veio a forma francesa de hoje — "chevalier" e "merci", por exemplo, praticamente não mudaram nada em quase mil anos.',
};
