import type { LanguagePack } from '../types';
import { VOCAB_KGK } from './vocabulario';
import { UNITS_KGK } from './curriculo';
import { GRAMMAR_KGK } from './gramatica';
import { STORIES_KGK } from './historias';
import { COMMUNITY_KGK, ETYMOLOGY_KGK, JOURNAL_PROMPTS_KGK, SCENARIOS_KGK, SHADOWING_KGK } from './extras';

export const GUARANI_KAIOWA: LanguagePack = {
  code: 'kgk',
  name: 'Guarani Kaiowá',
  // “Tavyterã ñe'ẽ” (“língua do povo tavyterã”) e “avañe'ẽ” (“língua do povo”) são os nomes nativos
  // dados pela própria Wikipédia em português («Língua caiouá») já na primeira frase do artigo; o
  // povo se autodenomina “paĩ-tavyterã” (“habitante do povo da verdadeira terra futura”).
  nativeName: 'Tavyterã Ñe\'ẽ',
  // território: sul do Mato Grosso do Sul (Brasil) — bandeira do Brasil, na falta de um símbolo
  // próprio da língua (o povo kaiowá também vive no leste do Paraguai e em Misiones, na Argentina,
  // mas a maior parte da documentação linguística usada aqui vem de pesquisa feita no Brasil).
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Guarani (subgrupo I)'],
    region:
      'Sul do Mato Grosso do Sul (Brasil) — terras indígenas como Dourados, Caarapó, Amambai e Antônio João, ao longo dos rios Apa, Dourados e Ivinhema —, além do leste do Paraguai e da província de Misiones, na Argentina',
    writing:
      'Alfabeto latino, com apóstrofo para o puso (oclusiva glotal), til para as vogais nasais (ã ẽ ĩ õ ũ ỹ) e “y” para uma vogal própria do guarani; a descrição mais detalhada da ortografia vem da tese de doutorado de Valéria Faria Cardoso (Unicamp, 2008) — ao contrário do guarani paraguaio, o kaiowá não tem uma academia que normatize uma grafia oficial única.',
  },
  // nenhum serviço de síntese de voz consultado (Wikipédia, dicionários) tem voz para o kaiowá: os
  // áudios usam a voz do aparelho, se houver.
  speechLocale: 'kgk',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 60 palavras, 4 tópicos de gramática, 2 histórias), no guarani KAIOWÁ — também chamado pãi-tavyterã, língua indígena viva falada sobretudo no sul do Mato Grosso do Sul (Dourados, Caarapó, Amambai e outras terras indígenas) e no leste do Paraguai. NÃO é o mesmo idioma que o guarani paraguaio padrão (pacote “gn” deste app, normatizado pela Academia de la Lengua Guaraní), o guarani mbyá (pacote “gun”) ou o nheengatu (pacote “yrl”, de um ramo bem mais distante da família tupi-guarani): kaiowá, gn e gun pertencem ao mesmo subgrupo I (guarani), com alta inteligibilidade mútua entre si segundo a Wikipédia, mas cada um tem vocabulário, gramática e histórias próprios, verificados um a um em fontes específicas do kaiowá — nenhuma palavra foi aproveitada dos outros pacotes só por parecença. Fontes principais: Valéria Faria Cardoso, “Aspectos Morfossintáticos da Língua Kaiowá (Guarani)” (tese de doutorado, Unicamp, 2008, lida no original), o artigo “Língua caiouá” da Wikipédia em português, a página do povo Guarani Kaiowá no ISA (Povos Indígenas no Brasil) e a tese de doutorado do pesquisador kaiowá Eliel Benites, “A Busca do Teko Araguyje” (UFGD, 2022), com um glossário de termos kaiowá. Nenhum serviço de síntese de voz consultado tem voz para o kaiowá: os áudios usam a voz do aparelho, se houver. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_KGK,
  units: UNITS_KGK,
  etymology: ETYMOLOGY_KGK,
  community: COMMUNITY_KGK,
  scenarios: SCENARIOS_KGK,
  stories: STORIES_KGK,
  grammar: GRAMMAR_KGK,
  journalPrompts: JOURNAL_PROMPTS_KGK,
  shadowing: SHADOWING_KGK,
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ỹ', '\''],
  // como o guarani paraguaio e o mbyá, o kaiowá não marca gênero gramatical nos substantivos
  genders: [],
  greeting: 'Aguyjevete!',
  sampleSentence: 'Aguyjevete! Xe ava. Ñe\'ẽ kaiowá porã!',
  phrases: {
    hi: 'Aguyjevete!',
    thanks: 'Aguyjevete!',
    letsStart: ['Ñe\'ẽ kaiowá!', 'A língua kaiowá! Vamos conhecer.'],
  },
  formalMarkers:
    'Nas fontes consultadas não há registro de um pronome formal separado no kaiowá, equivalente ao “usted” do espanhol ou ao “o senhor” do português: “xe” e “ne” servem para qualquer pessoa, em qualquer situação. O que muda com o registro é o vocabulário: “karai” é como se chama (e se trata, respeitosamente) um não indígena, enquanto “tamõi” (avô) e “jari” (avó) são também os títulos dados aos líderes espirituais de uma família extensa — usar esses títulos com uma pessoa mais velha é um sinal de respeito, mesmo fora de um contexto de parentesco de sangue.',
  cognateNote:
    'O kaiowá é parente próximo do guarani paraguaio (pacote “gn” deste app) e do guarani mbyá (pacote “gun”): os três pertencem ao mesmo subgrupo I (“ramo guarani”) da família tupi-guarani, e a Wikipédia registra alta inteligibilidade mútua entre eles — o inglês Wikipedia chega a citar 70% de semelhança lexical entre o kaiowá e o “Pai Tavytera” do Paraguai (nome, aliás, muito parecido com a própria autodesignação do povo kaiowá, “paĩ-tavyterã”). Isso aparece em palavras quase idênticas: o kaiowá “kwarahy” (sol) é quase igual ao “kuarahy” do guarani paraguaio, e o “guyra” (pássaro) é a mesma palavra nos dois; já com o mbyá, às vezes a forma é um pouco mais distante, como em “kuaray” (sol, sem o “h” final) ou em “jagua” (cachorro, raiz mais curta que o “jaguarete” do kaiowá, “onça”). Com o nheengatu (pacote “yrl”), o parentesco é bem mais distante: o nheengatu vem de outro ramo da própria família tupi-guarani (o ramo tupi, descendente do tupinambá colonial), não do ramo guarani. Com o português, o parentesco do kaiowá é sobretudo indireto, pela família tupi-guarani: a raiz antiga “*jawar” deu, de um lado, o kaiowá “jaguarete” (onça) e, do outro — pelo tupi antigo colonial —, o português “jaguar”: primas pela mesma raiz, não uma copiada da outra. Na direção oposta, o português também emprestou do tupi-guarani o nome do chocalho sagrado kaiowá e guarani, “mbaraka”, que virou “maraca”.',
};
