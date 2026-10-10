import type { LanguagePack } from '../types';
import { VOCAB_KL } from './vocabulario';
import { UNITS_KL } from './curriculo';
import { GRAMMAR_KL } from './gramatica';
import { STORIES_KL } from './historias';
import { COMMUNITY_KL, ETYMOLOGY_KL, JOURNAL_PROMPTS_KL, SCENARIOS_KL, SHADOWING_KL } from './extras';
import { ACCENTS_KL } from './sotaques';

/**
 * Fontes gerais do pacote: Wikipédia em português, «Língua groenlandesa»
 * (pt.wikipedia.org/wiki/Língua_groenlandesa); Wikipédia em inglês, «Greenlandic language» e
 * «Greenlandic orthography»; English Wiktionary (Categoria:Greenlandic lemmas/numerals/interjections
 * e as páginas de cada palavra, ver vocabulario.ts); Wikivoyage, «Greenlandic phrasebook»; Omniglot,
 * «Greenlandic phrases» (omniglot.com/language/phrases/greenlandic.php).
 */
export const GROENLANDES: LanguagePack = {
  code: 'kl',
  name: 'Groenlandês',
  nativeName: 'Kalaallisut',
  flag: '🇬🇱',
  lineage: {
    // «esquimó-aleúte» é o termo usado pela Wikipédia em português para a família; o kalaallisut é a
    // maior língua da família em número de falantes. NOVA família de nível mais alto neste app — ver
    // nota no relatório desta sessão sobre registrá-la na lista fechada dos testes.
    family: 'Esquimó-aleúte',
    branches: ['Esquimó', 'Inuíte'],
    region: 'Groenlândia — único idioma oficial desde a Lei do Governo Autônomo de 2009 (antes dividia o posto com o dinamarquês, que continua muito usado no comércio, no governo e na educação)',
    writing: 'Alfabeto latino, ortografia reformada em 1973 (só três vogais escritas: a, i, u)',
  },
  // kl-GL é a forma esperada do locale de voz (ISO 639-1 kl + Groenlândia); não confirmei se algum
  // motor de voz do aparelho realmente tem essa opção instalada — pode cair na voz padrão do sistema.
  speechLocale: 'kl-GL',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, ~70 palavras e frases, 4 tópicos de gramática, 2 histórias). Como o kalaallisut é polissintético — uma única palavra pode ser uma frase inteira, com uma raiz e vários sufixos —, não inventamos nenhuma flexão nova: cada palavra e cada frase vem de uma fonte consultada de verdade (dicionários, Wikipédia, frasários). Por isso o vocabulário fica menor e as frases, mais simples, do que em pacotes de línguas românicas — e as próximas atualizações pretendem ampliar aos poucos, sempre com fonte.',
  },
  vocab: VOCAB_KL,
  units: UNITS_KL,
  etymology: ETYMOLOGY_KL,
  community: COMMUNITY_KL,
  scenarios: SCENARIOS_KL,
  stories: STORIES_KL,
  accents: ACCENTS_KL,
  grammar: GRAMMAR_KL,
  journalPrompts: JOURNAL_PROMPTS_KL,
  shadowing: SHADOWING_KL,
  specialChars: [],
  // sem gênero gramatical (nem masculino/feminino, nem artigo) — confirmado na Wikipédia em português
  // e em inglês («Greenlandic language»).
  genders: [],
  greeting: 'Aluu',
  sampleSentence: 'Aluu! Qanoq ippit? Ajunngilanga, qujanaq!',
  phrases: { hi: 'Aluu!', thanks: 'Qujanaq!', letsStart: ['Tikilluarit!', 'Vamos começar!'] },
  formalMarkers:
    'O kalaallisut não tem um pronome formal separado como o “vus” do romanche: “illit” serve tanto pra íntimo quanto pra respeitoso. A cordialidade aparece mais em palavras como “qujanarujussuaq” (muito obrigado) e “pilluarit” (que corra tudo bem).',
  cognateNote:
    'O kalaallisut não é parente do português — é da família esquimó-aleúte, sem ligação com as línguas indo-europeias. O parentesco aqui vai na direção contrária: palavras como “caiaque” e “iglu”, em português, vieram originalmente de palavras inuítes como “qajaq” e “illu”/“iglu”.',
};
