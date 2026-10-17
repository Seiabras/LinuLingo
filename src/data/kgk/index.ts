import type { LanguagePack } from '../types';
import { VOCAB_KGK } from './vocabulario';
import { UNITS_KGK } from './curriculo';
import { GRAMMAR_KGK } from './gramatica';
import { STORIES_KGK } from './historias';
import { COMMUNITY_KGK, ETYMOLOGY_KGK, JOURNAL_PROMPTS_KGK, SCENARIOS_KGK, SHADOWING_KGK } from './extras';
import { ACCENTS_KGK } from './sotaques';
import { FONTES_KGK, METODOS_KGK } from './fontes';

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
      'Alfabeto latino. Este curso usa a ortografia kaiwá do SIL, descrita por Loraine Bridgeman (2002) e usada no dicionário de Eliane B. L. de Barros (2014): nh, gw, kw, x, v, apóstrofo para a oclusiva glotal e til nas vogais nasais (ã ẽ ĩ õ ũ ỹ). Muitas escolas da região de Dourados usam a convenção do guarani paraguaio (ñ, gu, ku, ch); ao contrário do guarani paraguaio, o kaiowá não tem uma academia que fixe uma grafia única.',
  },
  // nenhum serviço de síntese de voz consultado (Wikipédia, dicionários) tem voz para o kaiowá: os
  // áudios usam a voz do aparelho, se houver.
  speechLocale: 'kgk',
  available: true,
  // Curso completo até o teto (B1, desde 17/10/2026): os testes de teto e o app (cursoEmConstrucao) leem
  // “incomplete.until igual ao último subnível do teto” como curso completo.
  incomplete: {
    until: 'B1.4',
    note:
      'A1.1 até B1.4 completo: oito unidades, 194 palavras, 15 tópicos de gramática e 8 histórias, no guarani kaiowá (kaiwá, pãi-tavyterã), língua indígena viva do sul do Mato Grosso do Sul (Dourados, Caarapó, Amambai, Panambizinho) e do leste do Paraguai. NÃO é o guarani paraguaio (pacote “gn”) nem o mbyá (“gun”): são primos próximos, mas cada palavra daqui foi conferida numa fonte do kaiowá. As frases vêm do “Dicionário bilíngue kaiwá-português” de Eliane B. L. de Barros (UFMS, 2014), feito a partir de 65 histórias contadas por 21 falantes de Dourados e Panambizinho, em 1960 e em 2013, e foram copiadas como estão no dicionário; a gramática segue o resumo de Barros e a tese de Valéria F. Cardoso (Unicamp, 2008). No B1 entram as orações ligadas (ramo, rire, hagwã), os nomes feitos de verbos (va\'e, -ha, tembi-), o causativo (mbo-, uka), o reflexivo e o recíproco (je-, jo-), as marcas de quem contou (jeko, araka\'e) e a fala citada (he\'i). Não achamos um texto corrido em kaiowá com licença aberta: as histórias do B1 juntam frases do dicionário de Barros, cada uma com a página, numa ordem que é do curso. O Novo Testamento em kaiwá e o livro escolar “Tekoha vy\'a renda” ficam como leitura recomendada nas fontes. A escrita é a do SIL (nh, gw, kw, x), a mesma do dicionário; muitas escolas da região usam a do guarani paraguaio (ñ, gu, ku, ch). A saudação “agwyjevete” e algumas palavras de cultura vêm da tese do pesquisador kaiowá Eliel Benites (UFGD); as notas de cultura, de Barros e do ISA. Nenhum serviço de síntese de voz tem voz para o kaiowá: os áudios usam a voz do aparelho, se houver.',
  },
  vocab: VOCAB_KGK,
  units: UNITS_KGK,
  etymology: ETYMOLOGY_KGK,
  community: COMMUNITY_KGK,
  scenarios: SCENARIOS_KGK,
  stories: STORIES_KGK,
  accents: ACCENTS_KGK,
  grammar: GRAMMAR_KGK,
  journalPrompts: JOURNAL_PROMPTS_KGK,
  shadowing: SHADOWING_KGK,
  fontes: FONTES_KGK,
  metodos: METODOS_KGK,
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ỹ', '\''],
  // como o guarani paraguaio e o mbyá, o kaiowá não marca gênero gramatical nos substantivos
  genders: [],
  greeting: 'Agwyjevete!',
  sampleSentence: 'Agwyjevete! Mba\'éixa pa ereiko?',
  phrases: {
    hi: 'Agwyjevete!',
    thanks: 'Agwyjevete!',
    letsStart: ['Jaha katu!', 'Vamos, então! Vamos conhecer a língua kaiowá.'],
  },
  formalMarkers:
    'Nas fontes consultadas não há um pronome de cortesia no kaiowá, como o “usted” do espanhol ou o “o senhor” do português: “xe” e “nde/ne” servem para qualquer pessoa. O respeito aparece no vocabulário: o chefe de uma parentela é chamado com respeito de “pai” (Barros 2014), e “tamói” (avô) e “jari” (avó) são também títulos dos mais velhos que guiam a família extensa.',
  cognateNote:
    'O kaiowá é parente próximo do guarani paraguaio (pacote “gn”) e do guarani mbyá (pacote “gun”): os três são do subgrupo I da família tupi-guarani. Muitas palavras são iguais e só mudam na grafia: “kwarahy” (sol) e “gwyra” (pássaro) no kaiowá do SIL são “kuarahy” e “guyra” no guarani paraguaio. Outras mudam mais: o mbyá diz “kuaray” para o sol. Uma diferença de gramática chama a atenção no kaiowá: separar “a casa dele mesmo” (gwóga) de “a casa de outra pessoa” (hóga). Barros (2014) diz que isso não aparece nos outros guaranis, mas Cardoso (2008) descreve esses prefixos em paralelo com outras línguas da família. Com o português, o parentesco vem pela família tupi-guarani: a raiz “*jawar” deu o kaiowá “jagwarete” (onça) e, pelo tupi antigo, o português “jaguar”. E o português tomou do guarani o nome do chocalho “mbaraka”, que virou “maraca”.',
};
