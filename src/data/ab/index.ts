import type { LanguagePack } from '../types';
import { VOCAB_AB } from './vocabulario';
import { UNITS_AB } from './curriculo';
import { GRAMMAR_AB } from './gramatica';
import { STORIES_AB } from './historias';
import { COMMUNITY_AB, ETYMOLOGY_AB, JOURNAL_PROMPTS_AB, SCENARIOS_AB, SHADOWING_AB } from './extras';
import { ACCENTS_AB } from './sotaques';

/**
 * Abecásio/abcázio (Аԥсуа бызшәа, Apsua bızşwa) — língua caucasiana do noroeste (ramo
 * abecásio-adigue), falada sobretudo na Abecásia (região separatista da Geórgia, com reconhecimento
 * internacional parcial) e por uma diáspora maior ainda na Turquia. Escrita aqui no alfabeto
 * cirílico de 1954 (com a reforma de 1996, que simplificou a marca de labialização para a letra
 * única “ә”) — antes disso, a escrita já passou por um alfabeto cirílico diferente (Uslar, 1862), um
 * latino (1926-1938) e um de base georgiana (1938-1954). Fontes gerais: o roteiro de frases do
 * Wikivoyage em inglês ("Abkhaz phrasebook"), o Omniglot ("Abkhaz numbers"), a tabela de pronomes do
 * Wikcionário em inglês (cruzada com a lista de Campbell, via o Rosetta Project), verbetes
 * individuais do Wikcionário em russo (ан, аб, аӡы, аҩны) e o capítulo de Chirikba sobre formação de
 * palavras no abecásio (word-formation handbook da de Gruyter). Todas consultadas em 08/10/2026.
 */
export const ABCAZIO: LanguagePack = {
  code: 'ab',
  name: 'Abcázio',
  nativeName: 'Аԥсуа бызшәа',
  // sem bandeira de país reconhecida por consenso (a Abecásia é reconhecida por poucos países) —
  // mesmo mecanismo do curmanji/Curdistão (☀️, o sol da bandeira curda): a mão aberta branca é o
  // emblema central da própria bandeira abecásia, ao lado de 7 estrelas (FOTW/abkhazworld.com)
  flag: '✋',
  lineage: {
    family: 'Caucasiano do norte',
    branches: ['Abecásio-adigue', 'Abecásio'],
    region: 'Abecásia (região separatista da Geórgia, no Cáucaso do noroeste) e diáspora na Turquia',
    writing: 'Cirílico (desde 1954, com a última reforma em 1996)',
  },
  speechLocale: 'ab',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2): as fontes livres em inglês e russo conferidas nesta rodada cobrem bem as saudações, os pronomes, os números e um vocabulário básico de comida, cores e natureza, mas não um curso estruturado completo. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem conferidas — os pronomes de 3ª pessoa (ele/ela/eles), por exemplo, ficaram de fora até uma fonte confiável confirmar a forma exata.',
  },
  vocab: VOCAB_AB,
  units: UNITS_AB,
  etymology: ETYMOLOGY_AB,
  community: COMMUNITY_AB,
  scenarios: SCENARIOS_AB,
  stories: STORIES_AB,
  accents: ACCENTS_AB,
  grammar: GRAMMAR_AB,
  journalPrompts: JOURNAL_PROMPTS_AB,
  shadowing: SHADOWING_AB,
  specialChars: ['ә', 'ҟ', 'ҵ', 'ԧ', 'ҳ', 'ӡ'],
  // o abecásio não marca gênero no substantivo (só no verbo, por prefixo) — nenhuma palavra do
  // vocabulário leva gênero marcado
  genders: [],
  greeting: 'Бзиа збаша',
  sampleSentence: 'Бзиа збаша! Сара Лину сыхӡуп. Итабуп ибзианы!',
  phrases: { hi: 'Бзиа збаша!', thanks: 'Итабуп ибзианы!', letsStart: ['Ааи!', 'Sim! (usado aqui como um “vamos!” de aprovação)'] },
  formalMarkers: 'distinção entre “уара” (tu/você, falando com um homem) e “бара” (tu/você, falando com uma mulher) — nenhuma das duas é mais formal que a outra, a diferença é o gênero de quem ouve',
  cognateNote:
    'O abecásio pertence à família caucasiana do noroeste (abecásio-adigue), sem parentesco com o português nem com nenhuma língua indo-europeia — é uma família própria do Cáucaso, só remotamente comparável (e só por vizinhança geográfica, não por origem comum) ao checheno, que pertence à outra família caucasiana (a do norte/nordeste). Por isso não espere reconhecer palavras de cara: veja a aba de etimologia para conhecer a origem das próprias palavras abecásias.',
};
