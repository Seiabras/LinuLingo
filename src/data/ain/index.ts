import type { LanguagePack } from '../types';
import { VOCAB_AIN } from './vocabulario';
import { UNITS_AIN } from './curriculo';
import { GRAMMAR_AIN } from './gramatica';
import { STORIES_AIN } from './historias';
import { COMMUNITY_AIN, ETYMOLOGY_AIN, JOURNAL_PROMPTS_AIN, SCENARIOS_AIN, SHADOWING_AIN } from './extras';

/**
 * Ainu (アイヌ イタㇰ, aynu itak) — língua isolada do norte do Japão, falada sobretudo em Hokkaido (e,
 * historicamente, em Sacalina e nas ilhas Curilas). Apesar de séculos de contato com o japonês, sem
 * parentesco comprovado com ele nem com nenhuma outra língua do mundo. Criticamente ameaçada: o
 * Endangered Languages Project relatava em 2025 só duas falantes nativas conhecidas, mas há hoje
 * semifalantes e um número crescente de neofalantes em cursos de revitalização em Hokkaido. Escrito
 * aqui na romanização usada pelos linguistas (hífen marca o limite de morfema, como a própria
 * Wikipédia em inglês já faz: "ku-itak"); o katakana estendido, a escrita mais usada na revitalização
 * de hoje, aparece no guia de caracteres de cada unidade (curriculo.ts), só pras palavras com grafia
 * confirmada numa fonte. Fontes gerais: Wikipédia em inglês ("Ainu language", "Ainu grammar"),
 * Wikcionário em inglês (citado palavra a palavra em vocabulario.ts e extras.ts), Omniglot ("Ainu
 * numbers"), e (só pra "cise" e "nupuri", sem verbete no Wikcionário em inglês) fontes secundárias
 * confiáveis (biblioteca de Hokkaido, geoparque de Apoi, corpus acadêmico valpal.info), todas
 * consultadas em 08/10/2026.
 */
export const AINU: LanguagePack = {
  code: 'ain',
  name: 'Ainu',
  nativeName: 'アイヌ イタㇰ',
  flag: '🇯🇵',
  lineage: {
    family: 'Língua isolada',
    branches: ['Ainu'],
    region: 'Hokkaido, norte do Japão (historicamente também Sacalina e as ilhas Curilas)',
    writing: 'Katakana estendido (oficial na revitalização de hoje) e romanização latina usada pelos linguistas',
  },
  speechLocale: 'ain',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, com um vocabulário pequeno, de propósito: o ainu é uma língua criticamente ameaçada, com poucos falantes e poucas fontes livres em inglês ou português, então cada palavra aqui foi conferida numa fonte de verdade, em vez de completar categorias inteiras sem fonte). Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem conferidas.',
  },
  vocab: VOCAB_AIN,
  units: UNITS_AIN,
  etymology: ETYMOLOGY_AIN,
  community: COMMUNITY_AIN,
  scenarios: SCENARIOS_AIN,
  stories: STORIES_AIN,
  grammar: GRAMMAR_AIN,
  journalPrompts: JOURNAL_PROMPTS_AIN,
  shadowing: SHADOWING_AIN,
  specialChars: ["'"],
  // o ainu não tem gênero gramatical
  genders: [],
  greeting: 'Irankarapte',
  sampleSentence: 'Irankarapte! Kuani, Linu ne. Iyairaykere!',
  phrases: { hi: 'Irankarapte!', thanks: 'Iyairaykere!', letsStart: ['Pirka!', 'Bom! (usado aqui como um “vamos!” de aprovação)'] },
  formalMarkers: "ainda não confirmado nas fontes consultadas, além da distinção entre “iyairaykere” (formal) e “hioy'oy” (informal) pra agradecer",
  cognateNote:
    'O ainu é uma língua isolada: não tem parentesco comprovado com nenhuma outra língua do mundo, nem com o japonês, apesar da proximidade geográfica e de séculos de contato (que deixaram empréstimos nos dois sentidos, mas não provam uma origem comum). Por isso não é parente do português, nem de nenhuma outra língua deste app — veja a aba de etimologia pra conhecer a origem das próprias palavras ainu.',
};
