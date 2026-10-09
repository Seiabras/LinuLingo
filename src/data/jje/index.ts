import type { LanguagePack } from '../types';
import { VOCAB_JJE } from './vocabulario';
import { UNITS_JJE } from './curriculo';
import { GRAMMAR_JJE } from './gramatica';
import { STORIES_JJE } from './historias';
import { COMMUNITY_JJE, ETYMOLOGY_JJE, JOURNAL_PROMPTS_JJE, SCENARIOS_JJE, SHADOWING_JJE } from './extras';

/**
 * Jejuense/jeju (제주말, Jeju-mal) — língua coreânica falada na ilha de Jeju, Coreia do Sul, por
 * cerca de 5 a 10 mil falantes fluentes, quase todos com mais de 70 anos. Criticamente ameaçada
 * (UNESCO, desde 2010). Por décadas tratada apenas como "dialeto de Jeju", mas o Ethnologue e o
 * Glottolog já dão código próprio ao jejuense (ISO 639-3 `jje`, Glottolog `jeju1234`), separado do
 * coreano (`kore1280`) dentro da família coreânica (`kore1284`) — a diferença entre as duas é grande
 * o bastante pra não haver entendimento mútuo automático, o critério que a Wikipédia em inglês
 * (artigo "Korean dialects") usa pra tratar o jejuense como língua à parte, mesmo quem ainda a chama
 * de "dialeto". Escrito no mesmo hangul do coreano.
 *
 * Fontes gerais (todas consultadas em 09/10/2026): o Jeju-eo Talking Dictionary
 * (talkingdictionary.swarthmore.edu/jeju, Living Tongues Institute + Swarthmore College, Cheng e
 * Harrison, 2014) — 218 verbetes com áudio de uma falante nativa, conferidos verbete por verbete
 * nesta sessão; a página de gramática do curso de linguística de campo da Swarthmore
 * (wikis.swarthmore.edu/ling073/Jeju/Grammar), que resume "Jejueo: The Language of Korea's Jeju
 * Island" (Changyong Yang, Sejung Yang e William O'Grady, University of Hawai'i Press, 2020/2019,
 * o primeiro livro em inglês dedicado à língua); a Wikipédia em inglês ("Jeju language", "Korean
 * dialects", "Koreanic languages"); e, só pra saudação, um guia de aprendizado de coreano e o
 * roteiro do Wikivoyage sobre a ilha de Jeju, que citam "혼저옵서예" como a saudação jejuense mais
 * conhecida (confirmado de forma independente em mais de uma fonte).
 */
export const JEJU: LanguagePack = {
  code: 'jje',
  name: 'Jejuense',
  nativeName: '제주말',
  flag: '🇰🇷',
  lineage: {
    family: 'Coreânico',
    branches: ['Jeju'],
    region: 'Ilha de Jeju, Coreia do Sul',
    writing: 'Hangul (o mesmo alfabeto do coreano)',
  },
  speechLocale: 'ko-KR',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2): o Jeju-eo Talking Dictionary e a gramática de Yang, Yang & O\'Grady dão um bom vocabulário isolado e pontos de gramática reais, mas quase nenhuma frase de conversa pronta — fora a saudação de boas-vindas e o molde de apresentação com “-라마씀”. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem conferidas.',
  },
  vocab: VOCAB_JJE,
  units: UNITS_JJE,
  etymology: ETYMOLOGY_JJE,
  community: COMMUNITY_JJE,
  scenarios: SCENARIOS_JJE,
  stories: STORIES_JJE,
  grammar: GRAMMAR_JJE,
  journalPrompts: JOURNAL_PROMPTS_JJE,
  shadowing: SHADOWING_JJE,
  specialChars: [],
  // o jejuense não tem gênero gramatical (como o coreano)
  genders: [],
  greeting: '혼저옵서예!',
  sampleSentence: '혼저옵서예! 나는 린주라마씀. 고맙수다!',
  phrases: { hi: '혼저옵서예!', thanks: '고맙수다!', letsStart: ['떠나라!', 'Vai! (lit. imperativo de “ir”, usado aqui como um “vamos!” de partida)'] },
  formalMarkers: 'não confirmado nas fontes consultadas, além do sufixo de ênfase “-마씸”/“-마씀” (ver gramática), que não é exatamente o mesmo que polidez formal',
  cognateNote:
    'O jejuense é uma língua coreânica, parente bem próxima do coreano — a família coreânica reúne só essas duas línguas, uma das famílias mais “pequenas” do mundo. Mas não é um dialeto do coreano moderno: é mais parecido com uma língua-irmã, que preserva traços do coreano médio (como a vogal arae-a) e tem até palavras básicas de família diferentes, como “어멍”/“아방” em vez de “어머니”/“아버지”. Por isso vale conhecer a origem das próprias palavras jejuenses, em vez de supor que são sempre iguais ao coreano — veja a aba de etimologia.',
};
