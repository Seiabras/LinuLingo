import type { LanguagePack } from '../types';
import { VOCAB_AWE } from './vocabulario';
import { UNITS_AWE } from './curriculo';
import { GRAMMAR_AWE } from './gramatica';
import { STORIES_AWE } from './historias';
import { COMMUNITY_AWE, ETYMOLOGY_AWE, JOURNAL_PROMPTS_AWE, SCENARIOS_AWE, SHADOWING_AWE } from './extras';

export const AWETI: LanguagePack = {
  code: 'awe',
  name: 'Awetí',
  // “They call themselves Awytyza … and their own language Awytyza ti’ingku” (Drude 2020, LDD 19,
  // §1); “Awytyza Ti’ingku” é também o título da cartilha de alfabetização (Troncarelli, Drude &
  // Würker, ISA, 2002, citada em Drude, Awete & Aweti 2019, nota 1). O acento em “Awetí” segue o
  // próprio Drude, para marcar a tônica na última sílaba, como os Awetí dizem em português.
  nativeName: "Awytyza ti'ingku",
  // Parque Indígena do Xingu (MT) — bandeira do Brasil, na falta de um símbolo próprio da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    // Glottolog (glottolog.org/resource/languoid/id/awet1244): Tupian > Eastern Tupian >
    // Maweti-Guarani > Aweti-Guarani > Awetí. O awetí é o único membro do seu ramo; com o tupi-guarani
    // forma o Awetí-Guaraní (Drude 2020, §4: 88 cognatos só entre awetí e proto-tupi-guarani, contra
    // 46 entre sateré-mawé e proto-tupi-guarani e 8 entre sateré-mawé e awetí; Galucio et al. 2015),
    // e os dois com o sateré-mawé formam o Mawetí-Guaraní (Meira & Drude 2015). Não é tupi-guarani:
    // até os anos 1970 se achava que fosse, como o kamaiurá vizinho (Rodrigues 1984, citado em Drude
    // 2020 e 2002). O primeiro ramo é “Tupi oriental”, como no sateré-mawé e no mundurukú, para os
    // três ficarem juntos no seletor.
    branches: ['Tupi oriental', 'Mawetí-Guaraní', 'Awetí-Guaraní (ramo próprio, irmão do tupi-guarani)'],
    region:
      'Parque Indígena do Xingu, no nordeste de Mato Grosso, no coração do Alto Xingu: cinco aldeias no norte do município de Gaúcha do Norte, a principal (Tazu’jyt tetam) entre os rios Curisevo e Tuatuari',
    writing:
      'Alfabeto latino, na ortografia combinada entre o linguista Sebastian Drude e os professores awetí Waranaku Awete e Awajatu Aweti (usada na escola da aldeia desde 1999): “y” para a vogal central /ɨ/; “z” para a fricativa retroflexa /ʐ/; “ts” e “ng” como dígrafos; apóstrofo (’) para a oclusiva glotal /ʔ/, que é uma letra de verdade; til na vogal nasal, marcado uma só vez por palavra (a nasalidade se espalha para trás); a sílaba tônica não se escreve.',
  },
  // como nos outros idiomas indígenas sem voz sintética deste app: nenhum serviço de síntese de voz
  // consultado tem voz para o awetí, e os áudios usam a voz do aparelho, se houver.
  speechLocale: 'awe',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, com cerca de 85 palavras, 4 tópicos de gramática e 2 histórias), no awetí (awe), a língua do povo Awetí — os Awytyza —, cerca de 225 pessoas em cinco aldeias do Parque Indígena do Xingu, em Mato Grosso, onde as crianças das aldeias maiores ainda aprendem a língua em casa. É do tronco Tupi, mas não do tupi-guarani: forma um ramo próprio, o parente mais próximo do tupi-guarani (o ramo do kamaiurá, seu vizinho). O awetí tem uma fala dos homens e uma fala das mulheres, que mudam algumas palavras muito usadas — as duas aparecem aqui. A grafia é a da escola da aldeia, combinada entre o linguista Sebastian Drude e os professores Waranaku e Awajatu Awetí; as palavras e a gramática seguem os trabalhos de Drude e a tese de Sabine Reiter (Kiel, 2011), feitos com o acervo de gravações do projeto de documentação da língua. As fontes publicadas não trazem uma saudação fixa nem uma palavra para “obrigado”, e os números vão só até dois, mais o cinco. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_AWE,
  units: UNITS_AWE,
  etymology: ETYMOLOGY_AWE,
  community: COMMUNITY_AWE,
  scenarios: SCENARIOS_AWE,
  stories: STORIES_AWE,
  grammar: GRAMMAR_AWE,
  journalPrompts: JOURNAL_PROMPTS_AWE,
  shadowing: SHADOWING_AWE,
  // apóstrofo (oclusiva glotal) e as vogais com til que não estão todas no teclado português —
  // inclusive “ỹ”, que a ortografia prevê (Drude, Awete & Aweti 2019, §5.2).
  specialChars: ["'", 'ẽ', 'ĩ', 'ũ', 'ỹ', 'ã', 'õ'],
  // Sem gênero gramatical: “On an Awetí noun no gender distinction is marked” (Reiter 2011, §3.3.1);
  // “nã” (fala dos homens) e “ĩ” (das mulheres) valem para “ele” e “ela” (Drude 2002, tabela 1). O
  // que muda com o sexo é QUEM fala, não o gênero das palavras.
  genders: [],
  // As fontes consultadas (Drude 2002, 2011, 2019, 2020; Reiter 2011; ISA) não registram uma saudação
  // fixa nem uma palavra para “obrigado”. No lugar, o Linu usa interjeições e imperativos atestados:
  // “Wiw!”, para chamar a atenção (Reiter 2011, §3.3.7.3, ex. 129 — “Wiw, pej-ut …”); “Pejut!”,
  // venham! (Reiter, ex. 39 e 129); e “Ikatu!”, é bom! (Reiter, ex. 20), no lugar do “obrigado”,
  // como o “Xipat!” do mundurukú.
  greeting: 'Pejut!',
  sampleSentence: "Ehẽ! Jumem a'uteju.",
  phrases: {
    hi: 'Wiw!',
    thanks: 'Ikatu!',
    letsStart: ['Pejut!', 'Venham! (usado aqui como “vamos começar”)'],
  },
  formalMarkers:
    'Nas fontes consultadas não há um pronome ou tratamento “formal” separado no awetí: “’en” (você) serve para qualquer pessoa. O respeito aparece de outros jeitos — os chefes têm uma fala cerimonial própria, e os jovens não dirigem a palavra aos mais velhos sem ser convidados —, como em outras línguas indígenas deste app.',
  cognateNote:
    'O awetí não é parente do português: é do tronco Tupi, num ramo próprio, o mais próximo do tupi-guarani — por isso é “primo” do kamaiurá, do guarani, do tupi antigo e do nheengatu, e um pouco mais distante do sateré-mawé. Muitas palavras mostram o parentesco: “’y” (água) é o “’y” do tupi antigo; “awati” (milho), o “abati”; “taza” (fogo), o “tatá”; e “taty” (lua), o “jasy”. Do português vieram nomes de lugares adaptados aos sons da língua, como “Nuhiju” (Rio de Janeiro) e “Belẽj” (Belém). Três traços marcam a gramática: a fala dos homens e a das mulheres usam pronomes diferentes, o dono vem grudado no nome (“itup”, meu pai) e há dois “nós” (kajã, com você; ozoza, sem você).',
};
