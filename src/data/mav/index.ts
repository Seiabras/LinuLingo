import type { LanguagePack } from '../types';
import { VOCAB_MAV } from './vocabulario';
import { UNITS_MAV } from './curriculo';
import { GRAMMAR_MAV } from './gramatica';
import { STORIES_MAV } from './historias';
import { COMMUNITY_MAV, ETYMOLOGY_MAV, JOURNAL_PROMPTS_MAV, SCENARIOS_MAV, SHADOWING_MAV } from './extras';

export const SATERE_MAWE: LanguagePack = {
  code: 'mav',
  name: 'Sateré-mawé',
  // autodenominação do povo, “Sateré-Mawé” (pib.socioambiental.org/pt/Povo:Sateré_Mawé); a própria
  // língua é chamada “sateré” no glossário de Miquiles & Castro (2022) e “Satere Mawe” no título do
  // Novo Testamento (“Tupana Ehay Satere Mawe Pusupuo”).
  nativeName: 'Sateré-Mawé',
  // Terra Indígena Andirá-Marau (AM/PA) — bandeira do Brasil, na falta de um símbolo próprio da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    // Glottolog (glottolog.org/resource/languoid/id/sate1243): Tupian > Eastern Tupian >
    // Maweti-Guarani > Sateré-Mawé. Dentro do Mawetí-Guaraní, o sateré-mawé forma um ramo PRÓPRIO
    // (Mawé), irmão do awetí e da família tupi-guarani — não está dentro do tupi-guarani (Rodrigues
    // 1984/85 e Rodrigues & Dietrich 1997, resumidos em Silva 2010, §2.1.1; Drude 2006 considera as
    // três separações quase simultâneas).
    branches: ['Tupi oriental', 'Mawetí-Guaraní', 'Mawé (ramo próprio, irmão do awetí e do tupi-guarani)'],
    region:
      'Terra Indígena Andirá-Marau, na fronteira do Amazonas com o Pará (municípios de Maués, Barreirinha e Parintins, no Amazonas, e Itaituba e Aveiro, no Pará), entre os rios Tapajós e Madeira, no médio Amazonas — e também nas cidades próximas e em Manaus; uma das 16 línguas indígenas oficiais do Amazonas desde 2023',
    writing:
      'Alfabeto latino, na ortografia prática das escolas sateré-mawé (a do glossário de Miquiles & Castro, 2022, próxima à do Novo Testamento traduzido pela SIL): “y” para a vogal central /ɨ/; apóstrofo (’) para a oclusiva glotal /ʔ/; “g” em fim de sílaba para a nasal velar /ŋ/ (akag, jugkan); til nas vogais nasais (ã, ẽ, ĩ); e, no glossário, acento agudo marcando sobretudo a vogal longa (át, wáty).',
  },
  // nesses pacotes, o código do próprio idioma é usado aqui em vez de um substituto como “pt-BR”,
  // como nos outros idiomas indígenas sem voz sintética deste app: nenhum serviço de síntese de voz
  // consultado tem voz para o sateré-mawé, e os áudios usam a voz do aparelho, se houver.
  speechLocale: 'mav',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, com cerca de 80 palavras, 4 tópicos de gramática e 2 histórias), no sateré-mawé (mav), a língua do povo Sateré-Mawé — os “filhos do guaraná” —, falada por cerca de 10 mil pessoas na Terra Indígena Andirá-Marau (AM/PA) e nas cidades vizinhas. É do tronco Tupi, mas não do ramo tupi-guarani: forma um ramo próprio, “primo” do tupi-guarani e do awetí. As palavras e a grafia seguem o glossário escrito por um professor sateré-mawé, Miller Miquiles (com Franklin Roosevelt Martins de Castro, 2022), e a gramática segue a tese de Raynice Geraldine Pereira da Silva (Unicamp, 2010). A língua varia um pouco de região para região — entre o rio Andirá (Barreirinha) e o rio Marau (Maués), por exemplo —, e algumas palavras têm mais de uma grafia em uso; aqui foi escolhida uma só. Os números vão só até três, como se conta hoje na língua: do quatro em diante, os falantes usam “torania” (todos) ou o português. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_MAV,
  units: UNITS_MAV,
  etymology: ETYMOLOGY_MAV,
  community: COMMUNITY_MAV,
  scenarios: SCENARIOS_MAV,
  stories: STORIES_MAV,
  grammar: GRAMMAR_MAV,
  journalPrompts: JOURNAL_PROMPTS_MAV,
  shadowing: SHADOWING_MAV,
  // apóstrofo (oclusiva glotal) e as vogais com til e acento que não estão todas no teclado
  // português (ẽ, ĩ, ý) — ver “writing” acima.
  specialChars: ["'", 'ã', 'ẽ', 'ĩ', 'á', 'ý'],
  // “O gênero em Sateré-Mawé não é marcado morfologicamente nos nominais. É expresso através de
  // lexemas distintos” (Silva 2010, §4.3.3): ihainia/haryporia, homem/mulher; para bichos, acrescenta-
  // se “wary'i” (fêmea) ou “pa'iat” (macho). O pronome “mi'i” vale para “ele” e “ela”.
  genders: [],
  greeting: "Ihot'ok!",
  sampleSentence: "Ihot'ok! Uito atiky'esat y'y.",
  phrases: {
    hi: 'Hay!',
    thanks: 'Waku sese!',
    // “to'iro” é o pronome “hortativo” (vamos!) da tese de Silva (2010, quadro 6), sempre seguido de
    // um verbo com wa-: “to'iro wateput” (vamos correr). Sem um verbo de “começar” atestado, usamos a
    // saudação de boas-vindas do glossário.
    letsStart: ['Waku sese eriot!', 'Seja bem-vindo! (usado aqui como convite para começar)'],
  },
  formalMarkers:
    'Nas fontes consultadas não há um pronome ou tratamento “formal” separado no sateré-mawé: “en” (tu, você) serve para qualquer pessoa, sem a distinção que o português faz entre “você” e “o senhor” — como em outras línguas indígenas deste app (karitiana, kaingang, tukano).',
  cognateNote:
    'O sateré-mawé não é parente do português: é do tronco Tupi, num ramo próprio (Mawé) ao lado do awetí e da família tupi-guarani — por isso é um “primo” do guarani, do tupi antigo e do nheengatu, mas não está dentro do mesmo grupo. Por séculos de contato, recebeu muitas palavras do nheengatu, a língua geral amazônica (“tupana”, Deus; “kui’a”, cuia; “pisana”, gato), e hoje também do português. E deu ao português pelo menos uma palavra conhecida no mundo todo: “guaraná”, do sateré-mawé “waranã”. Dois traços marcam a gramática: há dois “nós” (aito, com quem ouve; uruto, sem), e o dono de uma coisa vem como prefixo no próprio nome (ui’ywot, meu pai; e’ywot, teu pai).',
};
