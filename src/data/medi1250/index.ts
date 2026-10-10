import type { LanguagePack } from '../types';
import { VOCAB_MEDI1250 } from './vocabulario';
import { UNITS_MEDI1250 } from './curriculo';
import { GRAMMAR_MEDI1250 } from './gramatica';
import { STORIES_MEDI1250 } from './historias';
import { COMMUNITY_MEDI1250, ETYMOLOGY_MEDI1250, JOURNAL_PROMPTS_MEDI1250, SCENARIOS_MEDI1250, SHADOWING_MEDI1250 } from './extras';

/**
 * Latim medieval/eclesiástico — glottocode "Medieval Latin" (medi1250 no Glottolog,
 * glottolog.org/resource/languoid/id/medi1250, classificado como "Dialect" do latim-padrão
 * lati1261). Sem código ISO 639-3 próprio (confirmado em iso639-3.sil.org: o latim medieval cai
 * dentro do próprio "lat", código do pacote "la" deste app) — mesmo status de glottocode que o
 * guarani antigo (`oldp1258`), já pacote próprio aqui. Seguindo esse precedente (decisão do dono do
 * app, 09/10/2026), este é um LanguagePack PRÓPRIO e completo, não uma variação dentro de "la".
 */
export const LATIM_MEDIEVAL: LanguagePack = {
  code: 'medi1250',
  name: 'Latim Medieval',
  nativeName: 'Latina',
  // sem estado vivo (não é país da ISO 3166-1): um emoji simbólico (o pergaminho/manuscrito, o
  // trabalho do scriptorium) em vez de uma bandeira. O país histórico, em aventura.ts, é o Vaticano —
  // onde o latim eclesiástico, continuação direta do medieval, ainda é hoje a língua oficial da Santa
  // Sé para documentos, direito canônico e liturgia (ver PAIS_HISTORICO).
  flag: '📜',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Latino-faliscano'],
    region:
      'Europa Ocidental medieval (mosteiros, catedrais e cortes reais), do século IV/V — depois da queda do Império Romano do Ocidente — até o Renascimento, no século XIV. Cenário deste pacote: o mosteiro de Saint-Martin de Tours, por volta do ano 800, sob o abade Alcuíno de Iorque.',
    writing: 'Alfabeto latino (o mesmo do pacote "la"); os monges carolíngios, em Tours, ajudaram a padronizar a minúscula carolíngia, antepassada das letras minúsculas de hoje.',
  },
  // BCP-47 na melhor tentativa: a maioria dos aparelhos não tem voz nativa pra latim (medieval ou
  // clássico) — mesma aproximação do pacote "la".
  speechLocale: 'la',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'Da A1.1 até a A2.2 por enquanto (4 unidades, 49 palavras, 8 tópicos de gramática, 4 histórias). A morfologia básica (declinações, conjugações, o verbo "esse") segue igual ao latim clássico — as diferenças reais estão no vocabulário novo (boa parte emprestada do grego na Igreja) e em construções documentadas por Grandgent e por R. Coleman: o futuro e o perfeito composto com "habere" (a semente de "cantarei" e "tenho escrito" em português), "unus" virando artigo indefinido, "sic" virando "sim" e o comparativo analítico com "magis". O teto real deste idioma é C1.2 (ver TETO-DOS-IDIOMAS.md): faltam a B1.1-B1.4 (o sistema de casos residual que sobrevive em pronomes, as orações condicionais, o subjuntivo em pedidos e dúvidas), a B2.1-B2.4 (registro jurídico e cronístico, a prosa dos cronistas monásticos) e a C1.1-C1.2 (poesia litúrgica, hinos e sequências medievais, o latim filosófico/escolástico).',
  },
  vocab: VOCAB_MEDI1250,
  units: UNITS_MEDI1250,
  etymology: ETYMOLOGY_MEDI1250,
  community: COMMUNITY_MEDI1250,
  scenarios: SCENARIOS_MEDI1250,
  stories: STORIES_MEDI1250,
  grammar: GRAMMAR_MEDI1250,
  journalPrompts: JOURNAL_PROMPTS_MEDI1250,
  shadowing: SHADOWING_MEDI1250,
  specialChars: [],
  greeting: 'Pax',
  sampleSentence: 'Pax! Ego sum Linu. Latine discamus!',
  phrases: { hi: 'Pax!', thanks: 'Deo gratias!', letsStart: ['Oremus!', 'Vamos começar! (lit. “oremos”, fórmula litúrgica usada antes das orações da missa)'] },
  formalMarkers:
    'como no latim clássico, não há uma forma "formal" separada de "tu" dentro da fala comum do mosteiro. A disputa acadêmica sobre o "vos" de cortesia ao imperador, a partir do século IV (Brown & Gilman, citados pela Wikipédia em inglês, "T–V distinction"), é contestada por estudos mais recentes sobre a correspondência real da época, e as próprias normas de uso só se consolidaram entre os séculos XII-XIV — bem depois do cenário deste pacote.',
  cognateNote:
    'O latim medieval não é filho do latim clássico — é a MESMA língua, continuada por mais de mil anos depois da queda de Roma, usada pela Igreja, pela lei e pelas cortes medievais (pacote "la" deste app, já no ar). O que muda é sobretudo o vocabulário (boa parte do léxico cristão vem do grego, ver a aba de gramática) e algumas construções novas — não a gramática básica. Pelo lado do português, boa parte deste vocabulário eclesiástico sobrevive quase sem mudança: "monachus" deu "monge", "episcopus" deu "bispo", "ecclesia" deu "igreja" (ver etimologias).',
};
