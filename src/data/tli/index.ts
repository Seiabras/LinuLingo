import type { LanguagePack } from '../types';
import { VOCAB_TLI } from './vocabulario';
import { UNITS_TLI } from './curriculo';
import { GRAMMAR_TLI } from './gramatica';
import { STORIES_TLI } from './historias';
import { COMMUNITY_TLI, ETYMOLOGY_TLI, JOURNAL_PROMPTS_TLI, SCENARIOS_TLI, SHADOWING_TLI } from './extras';
import { ACCENTS_TLI } from './sotaques';

export const LINGIT: LanguagePack = {
  code: 'tli',
  name: 'Lingít (tlingit)',
  // “Lingít” é a autodesignação do povo e da própria língua (lit. “pessoa, ser humano”); “Lingít
  // x̱ʼéinax̱” é a expressão citada pela Wikipédia em inglês para “a língua lingít” (lit. “boca/fala
  // lingít”) — ver vocabulario.ts.
  nativeName: 'Lingít x̱ʼéinax̱',
  // a maioria dos falantes e do povo lingít está no sudeste do Alasca, Estados Unidos (cerca de 22.600
  // pessoas, censo de 2020 citado na Wikipédia em inglês) — por isso a bandeira dos EUA. Mas há também
  // uma presença real e documentada do outro lado da fronteira, em partes costeiras da Colúmbia
  // Britânica e do Yukon, no Canadá (cerca de 2.110 pessoas e uns 120-150 falantes, censo canadense de
  // 2016) — ver a região completa no campo `lineage.region` e a nota em `incomplete`.
  flag: '🇺🇸',
  lineage: {
    family: 'Na-Dené',
    // o lingít NÃO é atabascano: é um ramo primário e distinto do na-dené, irmão do ramo
    // eyak-atabascano (que inclui o eyak e todas as línguas atabascanas, entre elas o navajo e o
    // apache) — não um parente próximo do navajo/apache, mesmo pertencendo à mesma família maior.
    // Alguns estudos (citados em en.wikipedia.org/wiki/Tlingit_language, ex. Pinnow e Krauss) sugerem
    // uma conexão mais forte entre o lingít e o eyak do que antes se pensava, mas mesmo essas análises
    // mantêm o lingít como um ramo à parte do atabascano propriamente dito — por isso não é agrupado
    // aqui como “parente” do pacote nv (navajo), que é atabascano meridional/apachiano.
    branches: ['Lingít (ramo primário do na-dené, irmão do ramo eyak-atabascano — não é atabascano, diferente do navajo/apache)'],
    region: 'Sudeste do Alasca (Estados Unidos) e partes costeiras da Colúmbia Britânica e do Yukon (Canadá)',
    writing:
      'Alfabeto latino, em mais de um sistema de ortografia em uso (popular revisada, canadense, “de e-mail”); apóstrofo (ʼ) como letra própria para consoantes ejetivas e a oclusiva glotal; x̱, ḵ, g̱ para consoantes uvulares; acentos (agudo, circunflexo, grave) marcando tom, de forma diferente conforme o dialeto — veja a aba Gramática.',
  },
  // nenhum serviço de síntese de voz consultado tem voz dedicada ao lingít: “tli” (o próprio código
  // ISO 639-3) é só a melhor aproximação possível de locale, sem garantia nenhuma de pronúncia correta
  // do tom nem das consoantes ejetivas/uvulares próprias da língua — na prática, os áudios usam a voz
  // do aparelho, se houver, do mesmo jeito que os outros pacotes de língua ameaçada deste app (nv, tpj).
  speechLocale: 'tli',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 60 palavras, 4 tópicos de gramática e 1 história — não 2), no lingít/tlingit, língua na-dené gravemente ameaçada (UNESCO: “criticamente em perigo”), com um vocabulário pequeno e 100% verificado: as 626 palavras lingít catalogadas no Wiktionary não incluem NENHUMA categorizada como verbo (o verbo lingít é polissintético, mudando de forma conforme sujeito, objeto, aspecto e um “classificador”, tudo preso à raiz), e nenhuma fonte aberta consultada trouxe uma forma de citação simples para um verbo de ação fora de frases já conjugadas. Por isso este curso não tem a categoria “Verbos-chave” nem frases com verbo montadas por conta própria: as frases de exemplo são a própria palavra sozinha, listas curtas sem verbo (como a contagem) ou o padrão “ax̱ + substantivo inalienável” (“meu/minha ___”), que é a própria forma citada pelo Dictionary of Tlingit (Edwards, Sealaska Heritage Institute, 2009) — a mesma estratégia, por um motivo parecido, do pacote do navajo (nv). Pelo mesmo motivo, este curso tem um “Essenciais” com palavras gramaticais (partículas, conjunção, pronome demonstrativo) em vez de verbos. As fontes consultadas também não registram uma palavra fixa para “oi”/“olá” em lingít — por isso este curso usa “gunalchéesh” (obrigado), a única interjeição bem confirmada, tanto para saudar quanto para agradecer, do mesmo jeito que outros pacotes de língua escassa deste app reaproveitam a palavra disponível mais próxima (ver nv e tpj). Este pacote também ainda não tem uma leitura latinizada auxiliar: a ortografia latina já usada nas fontes consultadas é a própria forma de leitura. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes específicas do lingít (dicionários, cursos do Sealaska Heritage Institute) puderem ser conferidas.',
  },
  vocab: VOCAB_TLI,
  units: UNITS_TLI,
  etymology: ETYMOLOGY_TLI,
  community: COMMUNITY_TLI,
  scenarios: SCENARIOS_TLI,
  stories: STORIES_TLI,
  accents: ACCENTS_TLI,
  grammar: GRAMMAR_TLI,
  journalPrompts: JOURNAL_PROMPTS_TLI,
  shadowing: SHADOWING_TLI,
  // ʼ marca consoante ejetiva/oclusiva glotal; x̱, ḵ, g̱ são consoantes uvulares (feitas mais atrás na
  // garganta que x, k, g); os acentos agudo/circunflexo/grave marcam tom — ver gramatica.ts.
  specialChars: ['ʼ', 'x̱', 'ḵ', 'g̱', 'á', 'à', 'â'],
  // nenhuma fonte consultada (Tlingit_grammar, Wiktionary) descreve uma divisão de substantivos por
  // gênero gramatical no lingít: o sistema de pronomes de 3ª pessoa distingue “saliência” no discurso
  // (quem está em foco), não gênero — um fenômeno diferente, por isso não é marcado aqui como gênero.
  genders: [],
  // nenhuma fonte consultada registra uma palavra fixa para “oi”/“olá”: “gunalchéesh” (obrigado) é a
  // única interjeição bem confirmada, reaproveitada aqui como saudação — ver a nota em `incomplete`.
  greeting: 'Gunalchéesh!',
  sampleSentence: 'Lingít x̱ʼéinax̱. Gunalchéesh!',
  phrases: {
    hi: 'Gunalchéesh!',
    thanks: 'Gunalchéesh!',
    // sem um verbo de ação confirmado (ver `incomplete`), este curso reaproveita o início da contagem
    // como convite para começar — mesma estratégia, por um motivo parecido, do pacote tpj (“A-wata!”).
    letsStart: ['Tléixʼ, déix̱, násʼk!', 'Um, dois, três! (começo da contagem, usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'As fontes consultadas (Tlingit_grammar, Wiktionary) não confirmam, em lingít, uma distinção simples entre tratamento formal e informal como o “tu”/“você” do português ou o “vus” do romanche: o sistema de pronomes descrito distingue pessoa (eu, você, ele/ela, nós, eles) e saliência discursiva na 3ª pessoa, não registro social — por isso este curso não marca um contraste de formalidade que nenhuma fonte confirma.',
  cognateNote:
    'O lingít pertence à família na-dené, mas é um ramo PRÓPRIO e distinto dentro dela — não é atabascano, e por isso não é um parente próximo do navajo ou do apache (pacote “nv” deste app), que pertencem ao ramo atabascano da mesma família. A relação mais próxima e bem documentada do lingít dentro do na-dené é com o eyak, hoje uma língua extinta do Alasca: a palavra “g̱ooch” (lobo), por exemplo, vem do proto-na-dené “*ɢuǰ”, com um parente direto no eyak “ɢuˑǰih” (veja a aba Etimologia). Com o português, não há nenhum parentesco: o lingít não é uma língua indo-europeia, e nenhuma palavra deste curso deve soar familiar por semelhança sonora ou escrita. O traço mais marcante do vocabulário lingít, visto na aba de etimologia, é a própria palavra “lingít”: significa “pessoa, ser humano”, e virou ao mesmo tempo o nome do povo e da língua — um padrão comum entre povos indígenas que se autodesignam simplesmente “as pessoas”.',
};
