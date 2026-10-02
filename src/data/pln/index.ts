import type { LanguagePack } from '../types';
import { VOCAB_PLN } from './vocabulario';
import { UNITS_PLN } from './curriculo';
import { GRAMMAR_PLN } from './gramatica';
import { STORIES_PLN } from './historias';
import { COMMUNITY_PLN, ETYMOLOGY_PLN, JOURNAL_PROMPTS_PLN, SCENARIOS_PLN, SHADOWING_PLN } from './extras';

export const PALENQUERO: LanguagePack = {
  code: 'pln',
  name: 'Palenquero',
  nativeName: 'Lengua ri Palenge',
  flag: '🇨🇴',
  lineage: {
    // A classificação genealógica de crioulos é debatida entre linguistas, e o palenquero é um caso
    // particularmente discutido. A maior parte do seu léxico vem do espanhol, mas a gramática é muito
    // diferente: partículas invariáveis de tempo/aspecto/modo antes do verbo (ta, a, tan, taba, asé,
    // pa), nenhuma conjugação verbal por pessoa, pronome sempre obrigatório, quatro cópulas diferentes
    // (e, ta, jue, senda) e plural marcado com “ma” antes do substantivo — um prefixo do kikongo, língua
    // banta falada por boa parte das pessoas escravizadas que fundaram San Basilio de Palenque no
    // século XVII. A própria Wikipédia em inglês diz que “there is not sufficient evidence to indicate
    // that Palenquero is strictly the result of a two-language contact” (não há evidência suficiente de
    // que o palenquero seja estritamente o resultado de um contato entre duas línguas) — ou seja, nem
    // os linguistas concordam que seja só espanhol + kikongo. O infobox da Wikipédia em inglês classifica
    // a língua como “Spanish Creole–Kikongo” (crioulo espanhol-kikongo), uma família mista, sem nenhum
    // dos dois lados “vencendo” a classificação. Já o Glottolog, que classifica crioulos pela língua que
    // deu o léxico (não pela gramática), lista o palenquero dentro do indo-europeu, no ramo românico —
    // outra prova de que a classificação muda conforme o critério escolhido. Por isso, do mesmo jeito que
    // os crioulos de base inglesa (`pcm/index.ts`, família “Crioulo de base inglesa”) e de base francesa
    // (`ht/index.ts`, família “Crioulo de base francesa”) já feitos neste app, o palenquero não entra na
    // árvore genealógica do espanhol: ganha a própria família, “Crioulo de base espanhola” — um nome
    // NOVO, que nenhum outro pacote deste app usa ainda, e que a sessão que acoplar este pacote em
    // `idiomas.ts` precisa acrescentar à lista fechada de famílias de `conteudo.test.ts` (o teste
    // “seletor agrupa por família e ramo”), senão ele quebra.
    family: 'Crioulo de base espanhola',
    branches: ['Crioulo espanhol com substrato banto (kikongo)', 'Único crioulo de base espanhola que sobreviveu na América Latina, segundo a Wikipédia'],
    region:
      'San Basilio de Palenque, no município de Mahates, departamento de Bolívar, Colômbia, a cerca de 50 km de Cartagena das Índias; também falado em bairros de Barranquilla',
    writing: 'Alfabeto latino (ortografia baseada no espanhol, sem padrão oficial único); o acento agudo marca a sílaba tônica/tom alto',
  },
  // nenhum serviço de síntese de voz consultado tem voz própria para o palenquero (língua pequena demais
  // para isso): “es-CO” (espanhol colombiano) é usado aqui como aproximação — mais perto da fonologia
  // regional do que uma voz espanhola ou mexicana, mas ainda assim NÃO é a pronúncia real do palenquero
  // (que tem queda do /s/ final, nasalização e tons que o espanhol não tem — ver gramatica.ts).
  speechLocale: 'es-CO',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 62 palavras, 4 tópicos de gramática, 2 histórias). O palenquero é uma língua crioula pequena e pouco documentada (poucos milhares de falantes): as fontes consultadas não registram vocabulário de partes do corpo, nem numerais além de “dois” — por isso não há categoria de Corpo, e Números tem só uma palavra, em vez de inventar o que as fontes não garantem. Da A2.1 até o C2 chega nas próximas atualizações, se mais fontes específicas forem encontradas.',
  },
  vocab: VOCAB_PLN,
  units: UNITS_PLN,
  etymology: ETYMOLOGY_PLN,
  community: COMMUNITY_PLN,
  scenarios: SCENARIOS_PLN,
  stories: STORIES_PLN,
  grammar: GRAMMAR_PLN,
  journalPrompts: JOURNAL_PROMPTS_PLN,
  shadowing: SHADOWING_PLN,
  specialChars: [],
  // sem gênero gramatical: a Wikipédia em inglês diz que “grammatical gender is non-existent” no
  // palenquero, e que adjetivos vindos do espanhol usam por padrão a forma masculina.
  genders: [],
  greeting: 'Suto ta chitiá palenquero.',
  sampleSentence: 'Suto ta chitiá palenquero. Suto e palenquero.',
  phrases: {
    hi: 'Suto ta chitiá palenquero.',
    // nenhuma fonte registra uma interjeição fixa de “obrigado” em palenquero: “flo” (flor, palavra real
    // do vocabulário) é usada aqui como expressão de apreço, do mesmo jeito que o pacote tpj usa “pörä”
    // (bonito) e o kgk usa “porã” (bom) onde a língua não tem um “obrigado” documentado.
    thanks: 'Flo!',
    // também não há, nas fontes, um “vamos!” imperativo: usa-se o verbo real “bae” (ir), de possível
    // origem portuguesa, como convite para começar agora — mesma estratégia do tpj, que reaproveita
    // “a-wata” (eu ando) com o mesmo propósito.
    letsStart: ['Bae!', 'Vai!/Vamos! (lit. “vai”; verbo real do vocabulário, usado aqui como convite para começar, já que nenhuma fonte registra um “vamos!” fixo em palenquero)'],
  },
  formalMarkers:
    'Nenhuma fonte consultada registra uma forma de tratamento “formal” separada da informal no palenquero: “bo” (tu/você) serve tanto para situações íntimas quanto para respeito, e “utere”/“enú” servem para o plural — o mesmo padrão que os crioulos pcm e ht já seguem neste app.',
  cognateNote:
    'O palenquero tem a maior parte do vocabulário vinda do espanhol — “mujé” é “mujer”, “hemano” é “hermano”, “pekáo” é “pescado” (com o /s/ final caindo) — mas a gramática é outra: o verbo não muda por pessoa, e partículas como “ta”, “a” e “tan” fazem o trabalho que em português fica na conjugação. Cerca de 300 palavras, segundo a Wikipédia, vêm de línguas bantas — sobretudo o kikongo, falado por boa parte das pessoas escravizadas que fundaram Palenque: “ngombe” (gado) e “ngubá” (amendoim) vêm direto do kikongo, e a própria partícula de plural, “ma”, é a única flexão gramatical de origem kikongo da língua. Um punhado de palavras — “mai” (mãe), “ten” (ter), “ele” (ele/ela), “bae” (ir) — pode vir do português, segundo a Wikipédia, possivelmente por causa de um contato mais antigo com línguas de base portuguesa no comércio atlântico de pessoas escravizadas.',
};
