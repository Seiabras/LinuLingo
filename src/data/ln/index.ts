import type { LanguagePack } from '../types';
import { VOCAB_LN } from './vocabulario';
import { UNITS_LN } from './curriculo';
import { GRAMMAR_LN } from './gramatica';
import { STORIES_LN } from './historias';
import { COMMUNITY_LN, ETYMOLOGY_LN, JOURNAL_PROMPTS_LN, SCENARIOS_LN, SHADOWING_LN } from './extras';

/**
 * Fontes gerais (consultadas em outubro de 2026):
 * - https://en.wikipedia.org/wiki/Lingala — classificação genealógica, número de falantes, status
 *   oficial, história (bobangi, comércio fluvial, missionários), classes nominais, sistema de tom,
 *   morfologia verbal, rumba/soukous.
 * - https://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo — francês como língua oficial e
 *   as quatro línguas nacionais (lingala, suaíli, kikongo ya leta, tshiluba/luba-kasai), população.
 * - https://en.wikipedia.org/wiki/Republic_of_the_Congo — população, para comparar com a RDC.
 * - Páginas individuais do Wikcionário em inglês para cada palavra (ver vocabulario.ts).
 *
 * Decisões de classificação e bandeira (documentadas para quem revisar depois):
 * - `lineage.branches` segue exatamente a cadeia dada pela Wikipédia: Atlantic–Congo > Benue–Congo >
 *   Bantoide meridional > Banto (zona C) > Bangi–Ntomba > Bangi–Moi > Bangi — aqui resumida nos elos
 *   que o pacote do suaíli (`src/data/sw`) já usa como padrão de nomenclatura em português
 *   (Atlântico-congolês, Benue-congolês, Banto), para manter as duas línguas bantas do app comparáveis.
 * - `flag: '🇨🇩'` (bandeira da República Democrática do Congo): o lingala também é língua nacional na
 *   República do Congo (bandeira ao lado, capital Brazzaville), mas a população da RDC (ordem de 116
 *   milhões, segundo a Wikipédia) é cerca de 19 vezes maior que a da República do Congo (ordem de 6,2
 *   milhões), e Kinshasa — a maior cidade onde se fala lingala no dia a dia — fica na RDC. Por isso a
 *   bandeira escolhida foi a da RDC, mesmo o lingala sendo falado nos dois países.
 */
export const LINGALA: LanguagePack = {
  code: 'ln',
  name: 'Lingala',
  nativeName: 'Lingála',
  flag: '🇨🇩',
  lineage: {
    family: 'Níger-Congo',
    branches: ['Atlântico-congolês', 'Benue-congolês', 'Banto'],
    region: 'Bacia do rio Congo (República Democrática do Congo e República do Congo)',
    writing: 'Alfabeto latino (35 letras e dígrafos; tom marcado de forma esporádica com acentos)',
  },
  speechLocale: 'ln-CD',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, 65 palavras, 4 tópicos de gramática, 2 histórias). Este pacote também não tem leitura guiada própria (como a romanização do japonês ou do coreano no app) — para o lingala, a própria escrita latina já é a forma de leitura. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_LN,
  units: UNITS_LN,
  etymology: ETYMOLOGY_LN,
  community: COMMUNITY_LN,
  scenarios: SCENARIOS_LN,
  stories: STORIES_LN,
  grammar: GRAMMAR_LN,
  journalPrompts: JOURNAL_PROMPTS_LN,
  shadowing: SHADOWING_LN,
  specialChars: ['á', 'é', 'í', 'ó', 'ú', 'â', 'ê', 'î', 'ô', 'û', 'ɛ', 'ɔ'],
  // classes de substantivos (mo-/ba-, li-/ma-…), não masculino e feminino
  genders: [],
  greeting: 'Mbote',
  sampleSentence: 'Mbote! Nkombo na ngai Linu.',
  phrases: { hi: 'Mbote!', thanks: 'Melesi!', letsStart: ['Kokende!', 'Vamos!'] },
  formalMarkers: 'tata, mama (tratamento respeitoso a um homem ou uma mulher mais velhos, mesmo sem parentesco)',
  cognateNote:
    'O lingala é uma língua banta da família Níger-Congo, parente do suaíli, do quimbundo e do umbundo de Angola. Nasceu por volta de 1880 como uma forma simplificada do bobangi, língua de comércio do rio Congo, e hoje é língua nacional tanto na República Democrática do Congo quanto na República do Congo. Em vez de gênero gramatical, os substantivos entram em até 15 classes marcadas por prefixos (mo-/ba-, li-/ma-…), e séculos de comércio e contato lhe deram palavras emprestadas do suaíli (nyoka, cobra; wápi, onde; kiti, cadeira), do kikongo e até do francês (melesi, obrigado, de “merci”) — sem falar no papel do lingala como língua da rumba congolesa e do soukous, que o levaram para rádios de toda a África.',
};
