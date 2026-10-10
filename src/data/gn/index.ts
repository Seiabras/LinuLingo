import type { LanguagePack } from '../types';
import { VOCAB_GN } from './vocabulario';
import { UNITS_GN } from './curriculo';
import { GRAMMAR_GN } from './gramatica';
import { STORIES_GN } from './historias';
import { COMMUNITY_GN, ETYMOLOGY_GN, JOURNAL_PROMPTS_GN, SCENARIOS_GN, SHADOWING_GN } from './extras';
import { ACCENTS_GN } from './sotaques';

export const GUARANI: LanguagePack = {
  code: 'gn',
  name: 'Guarani',
  nativeName: 'Avañe\'ẽ',
  flag: '🇵🇾',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Guarani (subgrupo I)'],
    region: 'Paraguai (co-oficial com o espanhol), também falado no norte da Argentina, no sul da Bolívia e na fronteira com o Brasil',
    writing: 'Alfabeto latino (ortografia da Academia de la Lengua Guaraní: ã ẽ ĩ õ ũ ỹ, g̃ e o puso \')',
  },
  speechLocale: 'gn-PY',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 65 palavras, 4 tópicos de gramática, 2 histórias), no guarani paraguaio padrão — a variedade co-oficial do Paraguai, normatizada pela Academia de la Lengua Guaraní (criada em 2013) e a mais documentada em dicionários e gramáticas. O guarani mbyá e o guarani kaiowá, falados em aldeias do Brasil, não são “sotaques” deste: são línguas próprias da mesma família, com código ISO 639-3 e pacote próprios no app (como o sérvio, o croata e o bósnio já são aqui) — não uma variante regional igual o romeno é falado na Romênia e na Moldávia. Nenhum serviço de síntese de voz consultado (Google, incluindo o Cloud Text-to-Speech) tem voz para o guarani: os áudios usam a voz do aparelho, se houver. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_GN,
  units: UNITS_GN,
  etymology: ETYMOLOGY_GN,
  community: COMMUNITY_GN,
  scenarios: SCENARIOS_GN,
  stories: STORIES_GN,
  accents: ACCENTS_GN,
  grammar: GRAMMAR_GN,
  journalPrompts: JOURNAL_PROMPTS_GN,
  shadowing: SHADOWING_GN,
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ỹ', 'g̃', '\''],
  // o guarani não marca gênero gramatical (m/f/n): os substantivos não se dividem por gênero
  genders: [],
  greeting: 'Mba\'éichapa',
  sampleSentence: 'Mba\'éichapa! Che réra Linu. Jakuaa avañe\'ẽ!',
  phrases: { hi: 'Mba\'éichapa!', thanks: 'Aguyje!', letsStart: ['Jakuaa avañe\'ẽ!', 'Vamos conhecer o guarani!'] },
  formalMarkers:
    'O guarani não tem um pronome formal como o “usted” do espanhol ou o “o senhor” do português: a mesma palavra “nde” serve para qualquer pessoa. A educação aparece de outro jeito, como no pedido “ikatúpa…?” (lit. “é possível…?”, mais gentil que uma ordem direta) e no intensificador “-ete” de palavras como “aguyjevete” (muito obrigado).',
  cognateNote:
    'O guarani não é parente do português: vem de outra família de línguas, a tupi, nativa da América do Sul, sem ancestral comum com as línguas europeias. Ainda assim, dois séculos de convívio deixaram marcas dos dois lados. Do espanhol entraram no guarani palavras como “vaka” (vaca), “kavaju” (cavalo), “kesu” (queijo) e “kurusu” (cruz). Na direção contrária, o guarani paraguaio emprestou poucas palavras diretamente ao português — a mais conhecida é “tereré” —, bem diferente do que aconteceu com o tupi antigo, cujo vocabulário entrou em peso no português colonial (mandioca, jacaré, ipê, caju, tucano, jaguar: todas do tupi, não do guarani, ainda que as duas línguas sejam primas na mesma família tupi-guarani). No dia a dia do Paraguai, guarani e espanhol se misturam numa mesma frase: é o “jopara”.',
};
