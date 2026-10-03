import type { LanguagePack } from '../types';
import { VOCAB_URB } from './vocabulario';
import { UNITS_URB } from './curriculo';
import { GRAMMAR_URB } from './gramatica';
import { STORIES_URB } from './historias';
import { COMMUNITY_URB, ETYMOLOGY_URB, JOURNAL_PROMPTS_URB, SCENARIOS_URB, SHADOWING_URB } from './extras';

export const KAAPOR: LanguagePack = {
  code: 'urb',
  // “Ka'apor” é a autodenominação (ISA, pib.socioambiental.org/pt/Povo:Ka'apor). O nome “Urubu-
  // Kaapor” (o do código ISO 639-3 e do Glottolog, “Urubú-Kaapor”) fica de fora de propósito: a
  // edição de 2007 do dicionário de Kakumasu & Kakumasu deixou de usar “Urubu” “porque foi
  // considerado pejorativo”, e o ISA registra que o apelido foi dado por inimigos luso-brasileiros.
  // A língua de sinais urubu-kaapor (uks), que o app já cita na aba Cultura, é OUTRA língua; este
  // pacote é só o ka'apor falado.
  name: "Ka'apor",
  nativeName: "Ka'apor",
  // TI Alto Turiaçu (MA) — bandeira do Brasil, na falta de um símbolo próprio da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    // Glottolog (glottolog.org/resource/languoid/id/urub1250): Tupian > Eastern Tupian >
    // Maweti-Guarani > Aweti-Guarani > Tupi-Guarani > Tupi-Guarani Subgroup VIII > Guaja-Kaapor-Ava
    // (com o guajá/awá e o avá-canoeiro). O primeiro ramo é “Tupi-guarani”, como nos outros pacotes
    // da família (gn, tpw, yrl, gun…), para o seletor agrupar o ka'apor junto deles.
    branches: ['Tupi-guarani', 'Subgrupo VIII (Guajá-Ka’apor-Avá, com o guajá e o avá-canoeiro)'],
    region:
      'Terra Indígena Alto Turiaçu, no norte do Maranhão, entre o rio Gurupi (na divisa com o Pará) e os afluentes do rio Turiaçu — 5.301 km² de floresta amazônica, homologada em 1982',
    writing:
      'Alfabeto latino, na ortografia prática do dicionário de James e Kiyoko Kakumasu (SIL): “x” para o som de “ch” (xícara), “j” para o “i” de “pai”, “y” para a vogal central /ɨ/, apóstrofo (’) para a oclusiva glotal, til nas vogais nasais (ã, ẽ, ĩ, õ, ũ, ỹ) e acento agudo marcando ditongo (pái, kúi); a sílaba forte é sempre a última.',
  },
  // como nos outros idiomas indígenas sem voz sintética deste app, o código do próprio idioma no
  // lugar de um substituto como “pt-BR”: nenhum serviço de síntese de voz consultado tem voz para o
  // ka'apor, e os áudios usam a voz do aparelho, se houver.
  speechLocale: 'urb',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      "Só o nível A1 por enquanto (unidades 1 e 2, com cerca de 110 palavras, 4 tópicos de gramática e 2 histórias), no ka'apor (urb), a língua do povo Ka'apor, falada por cerca de 1.900 pessoas na Terra Indígena Alto Turiaçu, no norte do Maranhão. É da família tupi-guarani, prima do guarani, do tupi antigo e do nheengatu. As palavras, a grafia e a gramática seguem o “Dicionário por tópicos Kaapor-Português”, de James e Kiyoko Kakumasu, com dados colhidos entre 1963 e 1976 numa aldeia perto do rio Gurupi — a fala de hoje pode ter mudado em alguns pontos, e há pequenas diferenças entre as aldeias do Gurupi e as do Turiaçu. O nome antigo “urubu-kaapor” é considerado ofensivo e não é usado aqui. Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.",
  },
  vocab: VOCAB_URB,
  units: UNITS_URB,
  etymology: ETYMOLOGY_URB,
  community: COMMUNITY_URB,
  scenarios: SCENARIOS_URB,
  stories: STORIES_URB,
  grammar: GRAMMAR_URB,
  journalPrompts: JOURNAL_PROMPTS_URB,
  shadowing: SHADOWING_URB,
  // apóstrofo (oclusiva glotal), as vogais nasais e o acento agudo de ditongo — ver “writing” acima.
  specialChars: ["'", 'ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ỹ', 'á', 'é', 'ú'],
  // “A língua kaapor não possui artigo definido” e não faz distinção de gênero (Kakumasu & Kakumasu
  // 2007, Nota explicativa, p. 8); “a'e” vale para “ele” e “ela”.
  genders: [],
  greeting: 'Ko ihẽ ajur!',
  sampleSentence: 'Koĩ ihẽ aho ta.',
  phrases: {
    hi: 'Ko ihẽ ajur!',
    // o dicionário (D.2.9) registra “Pe tiki” como “obrigado”, com a ressalva de que “não se usa
    // muito” e que é melhor usar o “obrigado” do português; ainda assim é a forma atestada.
    thanks: 'Pe tiki!',
    // “Jahorahã!” (vamos!), hortativo de D.2.9 e de IV.B.1 (“ja-ho rahã”).
    letsStart: ['Jahorahã!', 'Vamos!'],
  },
  formalMarkers:
    'O dicionário consultado não registra um pronome ou tratamento “formal” separado no ka’apor: “nde” (você) serve para qualquer pessoa, sem a distinção que o português faz entre “você” e “o senhor” — como em outras línguas indígenas deste app (sateré-mawé, karitiana, kaingang).',
  cognateNote:
    'O ka’apor não é parente do português: é da família tupi-guarani, a mesma do guarani, do tupi antigo e do nheengatu — por isso muitas palavras se parecem com as dessas línguas: “warahy” (sol; os mais velhos dizem “kwarahy”) e o tupi antigo “kûarahy”, “jahy” (lua) e “jasy”, “tata” (fogo) e o guarani “tata”, “kunjã” (mulher) e o tupi antigo “kunhã”. Do português vieram algumas palavras, como “pái” (pai) e “mãi” (mãe), que tomaram o lugar das antigas, e outras adaptadas ao jeito da língua, como “kamixa” (camisa) e “paratu” (prato). Dois traços marcam a gramática: o verbo costuma vir no fim da frase, e algumas palavras de parentesco mudam conforme quem fala é homem ou mulher (“meu filho” é “ihẽ ra’yr” para o pai e “ihẽ membyr” para a mãe).',
};
