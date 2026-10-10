import type { LanguagePack } from '../types';
import { VOCAB_NON } from './vocabulario';
import { UNITS_NON } from './curriculo';
import { GRAMMAR_NON } from './gramatica';
import { STORIES_NON } from './historias';
import { COMMUNITY_NON, ETYMOLOGY_NON, JOURNAL_PROMPTS_NON, SCENARIOS_NON, SHADOWING_NON } from './extras';
import { ALPHABET_NON } from './alfabeto';
import { ACCENTS_NON } from './sotaques';

export const NORDICO_ANTIGO: LanguagePack = {
  code: 'non',
  name: 'Nórdico Antigo',
  nativeName: 'Norrœnt mál',
  // sem estado vivo (não é país da ISO 3166-1) e sem falantes nativos: um emoji simbólico (era viking).
  flag: '🛡️',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico setentrional'],
    region: 'Escandinávia e colônias vikings (Islândia, Groenlândia), séc. VIII–XIV',
    writing: 'Alfabeto latino normalizado (acadêmico); nas inscrições da era viking, o Futhark Mais Recente (runas)',
  },
  // BCP-47 na melhor tentativa: quase nenhum aparelho tem voz nativa para nórdico antigo.
  speechLocale: 'non',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 110 palavras, 7 tópicos de gramática incluindo o alfabeto rúnico e os casos gramaticais, 4 histórias). Língua histórica, sem falantes vivos: o nível vale para leitura das sagas e Eddas, não para conversação. Do B1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_NON,
  units: UNITS_NON,
  etymology: ETYMOLOGY_NON,
  community: COMMUNITY_NON,
  scenarios: SCENARIOS_NON,
  stories: STORIES_NON,
  accents: ACCENTS_NON,
  grammar: GRAMMAR_NON,
  journalPrompts: JOURNAL_PROMPTS_NON,
  shadowing: SHADOWING_NON,
  specialChars: ['á', 'é', 'í', 'ó', 'ú', 'ý', 'þ', 'ð', 'æ', 'ö'],
  alphabet: ALPHABET_NON,
  greeting: 'Heill',
  sampleSentence: 'Heill! Nafn mitt er Linu. Mælum norrœnu!',
  phrases: { hi: 'Heill!', thanks: 'Þökk fyrir!', letsStart: ['Byrjum!', 'Vamos começar!'] },
  formalMarkers: 'no nórdico antigo não existe uma forma formal separada de "þú" — a distinção entre tratamento formal e informal é uma inovação bem mais tardia em várias línguas europeias.',
  cognateNote:
    'O nórdico antigo é o ancestral direto do sueco, do norueguês, do dinamarquês, do islandês e do feroês — todos já no aplicativo. Aqui a etimologia aponta para a FRENTE: cada palavra nórdica antiga é a raiz de onde vieram as formas modernas escandinavas, do mesmo jeito que o latim é a raiz do português.',
};
