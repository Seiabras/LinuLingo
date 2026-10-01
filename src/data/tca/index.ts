import type { LanguagePack } from '../types';
import { VOCAB_TCA } from './vocabulario';
import { UNITS_TCA } from './curriculo';
import { GRAMMAR_TCA } from './gramatica';
import { STORIES_TCA } from './historias';
import { COMMUNITY_TCA, ETYMOLOGY_TCA, JOURNAL_PROMPTS_TCA, SCENARIOS_TCA, SHADOWING_TCA } from './extras';

export const TIKUNA: LanguagePack = {
  code: 'tca',
  name: 'Tikuna',
  // "Magüta" ("povo pescado", do mito do herói Yoi) é a autodesignação do povo e da língua, confirmada
  // pelo Instituto Socioambiental e pela Wikipédia em português. Há também "du-ũ" ("a gente"), uma
  // segunda autodesignação documentada.
  nativeName: 'Magüta',
  // o povo tikuna vive majoritariamente no Brasil (a maior população entre os três países, segundo o
  // ISA), também na Colômbia e no Peru.
  flag: '🇧🇷',
  lineage: {
    family: 'Língua isolada',
    branches: ['Tikuna'],
    region: 'Alto Solimões, no Amazonas (Brasil), também na Colômbia e no Peru',
    writing: 'Alfabeto latino (ortografia oficial do Instituto Linguístico de Verão/SIL e do Ministério da Educação do Peru, de 1997: ü, x para a oclusiva glotal, ng, til para a nasalização e acento para o tom quando há ambiguidade)',
  },
  // não há voz de síntese conhecida para o tikuna em nenhum serviço consultado — ver a nota em
  // `incomplete`.
  speechLocale: 'tca',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, pouco mais de 30 palavras, 4 tópicos de gramática, 2 histórias), com um vocabulário deliberadamente pequeno: o tikuna é uma língua riquíssima, mas as fontes abertas em ortografia prática (fora de artigos acadêmicos muito técnicos) são raras, e preferimos um vocabulário 100% verificado em fontes reais a inventar palavras ou frases. Nenhum serviço de síntese de voz consultado tem voz para o tikuna: os áudios usam a voz do aparelho, se houver. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem encontradas.',
  },
  vocab: VOCAB_TCA,
  units: UNITS_TCA,
  etymology: ETYMOLOGY_TCA,
  community: COMMUNITY_TCA,
  scenarios: SCENARIOS_TCA,
  stories: STORIES_TCA,
  grammar: GRAMMAR_TCA,
  journalPrompts: JOURNAL_PROMPTS_TCA,
  shadowing: SHADOWING_TCA,
  specialChars: ['ü', 'ã', 'ẽ', 'ũ', 'ā'],
  // o sistema de 5 classes nominais do tikuna (feminino, masculino, neutro, saliente, não saliente) é
  // dinâmico e depende do contexto do discurso — não é um gênero fixo por palavra como no português,
  // por isso não é marcado aqui (ver o tópico de gramática sobre classes nominais).
  genders: [],
  greeting: 'Nuxmae!',
  sampleSentence: 'Nuxmae! Du-ũ, magüta!',
  phrases: {
    hi: 'Nuxmae!',
    thanks: 'Tamoxẽ!',
    // não há, nas fontes consultadas, uma palavra tikuna documentada para "vamos": em vez de inventar
    // uma, reaproveitamos a contagem até cinco (100% atestada) como convite para começar a estudar.
    letsStart: ['Wüxi, taxre, tomaxixpü, ãgümücü, wüxi mixepüx!', 'Vamos contar até cinco em tikuna!'],
  },
  formalMarkers:
    '“Cuma”, a forma de tratamento documentada em material pedagógico oficial (Peru, 1997) para se dirigir a alguém com respeito, parecida com o “você”/“o senhor” do português — as fontes consultadas não confirmam uma forma “íntima” diferente dela para contrastar.',
  cognateNote:
    'O tikuna é uma língua isolada: não se comprovou parentesco com nenhuma outra língua viva, como o basco. Pesquisas recentes (Carvalho 2009; Goulard & Montes Rodríguez 2013) propuseram uma possível conexão com o extinto yuri e com a língua dos caravalo, mas essa hipótese ainda não é aceita como definitiva. Diferente do tupi antigo, que emprestou ao português palavras como “tatu”, “arara” e “jaguar”, não há uma lista publicada de palavras tikuna que tenham entrado no português — por isso o vocabulário deste curso não vai soar familiar a um falante de português em nenhum momento, nem pelo som nem pela escrita.',
};
