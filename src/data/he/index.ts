import type { LanguagePack } from '../types';
import { VOCAB_HE } from './vocabulario';
import { UNITS_HE } from './curriculo';
import { GRAMMAR_HE } from './gramatica';
import { STORIES_HE } from './historias';
import { COMMUNITY_HE, ETYMOLOGY_HE, JOURNAL_PROMPTS_HE, SCENARIOS_HE, SHADOWING_HE } from './extras';

/**
 * Pacote do hebraico moderno (ivrit), código ISO 639-1 “he”. Fontes gerais: ver os cabeçalhos de
 * `vocabulario.ts` e `gramatica.ts` (Wikipédia em inglês e Wiktionary em inglês, checados em
 * 02/10/2026). Escrita da direita pra esquerda: ver `src/services/direction.ts`.
 */
export const HEBRAICO: LanguagePack = {
  code: 'he',
  name: 'Hebraico',
  nativeName: 'עברית',
  flag: '🇮🇱',
  lineage: {
    family: 'Afro-asiático',
    branches: ['Semítico', 'Semítico central', 'Cananeu'],
    region: 'Levante (Israel)',
    writing: 'Abjad hebraico (22 letras, sem vogais próprias; niqqud opcional)',
  },
  speechLocale: 'he-IL',
  direction: 'rtl',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 68 palavras, 4 tópicos de gramática, 2 histórias), no hebraico moderno falado em Israel, escrito sem niqqud (como no dia a dia). Da A2.1 até o C2 chega nas próximas atualizações. Este pacote ainda não tem romanização automática: a transliteração de cada palavra vem escrita à mão, entre parênteses, na tradução — a mesma solução provisória usada no mandarim com o pinyin, até o pacote ganhar leitura automática.',
  },
  vocab: VOCAB_HE,
  units: UNITS_HE,
  etymology: ETYMOLOGY_HE,
  community: COMMUNITY_HE,
  scenarios: SCENARIOS_HE,
  stories: STORIES_HE,
  grammar: GRAMMAR_HE,
  journalPrompts: JOURNAL_PROMPTS_HE,
  shadowing: SHADOWING_HE,
  // o abjad inteiro vira o teclado: 22 letras, da direita pra esquerda; a última fileira junta as
  // 5 formas finais (sofit), usadas só no fim da palavra — ver o tópico de gramática do abjad.
  keyboardRows: [
    ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז'],
    ['ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ'],
    ['ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש'],
    ['ת', 'ך', 'ם', 'ן', 'ף', 'ץ'],
  ],
  specialChars: [],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Shalom',
  sampleSentence: 'Shalom! Ani Linu. Hatkhilu!',
  phrases: { hi: 'Shalom!', thanks: 'Toda!', letsStart: ['Hatkhilu!', 'Vamos começar!'] },
  formalMarkers:
    'o hebraico não tem um “você” formal separado como o francês ou o alemão — “ata/at” serve para qualquer idade; a formalidade vem de palavras como “bevakasha” (por favor) e “slikha” (com licença), e de tratar alguém pelo título ou profissão.',
  cognateNote:
    'O hebraico é uma língua afro-asiática, da família semítica (ramo cananeu), prima do árabe e do amárico. Depois de quase 1700 anos como língua só de oração e estudo, foi revernacularizado como língua falada a partir do fim do século 19 — um dos poucos casos documentados no mundo de uma língua “sem falantes nativos” virar língua materna de um país em poucas gerações. Os verbos nascem de raízes de três consoantes que mudam de molde (binyan); várias palavras hebraicas bíblicas (amém, aleluia, sábado, jubileu, querubim) viraram empréstimos no português, via grego e latim.',
};
