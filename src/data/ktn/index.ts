import type { LanguagePack } from '../types';
import { VOCAB_KTN } from './vocabulario';
import { UNITS_KTN } from './curriculo';
import { GRAMMAR_KTN } from './gramatica';
import { STORIES_KTN } from './historias';
import { COMMUNITY_KTN, ETYMOLOGY_KTN, JOURNAL_PROMPTS_KTN, SCENARIOS_KTN, SHADOWING_KTN } from './extras';
import { FONTES_KTN, METODOS_KTN } from './fontes';

export const KARITIANA: LanguagePack = {
  code: 'ktn',
  name: 'Karitiana',
  // “Yjxa” (também grafado “Yjja”) é a autodesignação do povo e da língua, confirmada em
  // pib.socioambiental.org/pt/Povo:Karitiana (Instituto Socioambiental) e no infobox de
  // pt.wikipedia.org/wiki/Língua_caritiana (“nomenativo = Yjxa, Yjja”) — é, na verdade, o próprio
  // pronome karitiana de 1ª pessoa do plural inclusivo (“nós”), usado em oposição a “opok” (não
  // indígenas) e “opok pita” (outros povos indígenas). O nome “karitiana” foi atribuído por
  // seringueiros no fim do século XIX; uma hipótese (Nelson Karitiana, 2016) é que venha de uma
  // adaptação fonética de “ytakatai yn” (“estou indo embora”), frase de despedida mal-entendida.
  nativeName: 'Yjxa',
  // território: a Terra Indígena Karitiana, às margens do rio Candeias, Rondônia — emoji de bandeira
  // do Brasil, na falta de um símbolo próprio da língua.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    // Arikém é um ramo pequeno e SEPARADO do tronco Tupi — não o ramo tupi-guarani de outras línguas
    // indígenas já presentes neste app (guarani, tupinambá, nheengatu, guarani mbyá). O karitiana é a
    // ÚNICA língua ainda viva da família Arikém: as outras duas, o arikém (ariquém) e o kabixiana, já
    // estão extintas (en.wikipedia.org/wiki/Arikém_languages; glottolog.org/resource/languoid/id/
    // kari1311, que mostra a filiação Tupi > Arikém > Karitiana; iso639-3.sil.org/code/ktn).
    branches: ['Arikém'],
    region:
      'Terra Indígena Karitiana, cerca de 95 km ao sul de Porto Velho (RO), às margens dos rios Candeias, Jamari e Jaci-Paraná, afluentes da margem direita do rio Madeira — sudoeste da Amazônia brasileira',
    writing:
      'Alfabeto latino, na ortografia prática usada por gramáticas e dicionários atuais (Landin 2005, SIL; Everett 2007): 5 vogais orais/nasais (a, e, i, o, y — “y” para /ɨ/), com nasalização marcada por til; apóstrofo (’) para a oclusiva glotal /ʔ/; “x” para /tʃ/, “j” para /j/ ou /dʒ/, “nh” para a nasal palatal /ɲ/ (grafada “j” com til em fontes mais antigas); “g” pode valer /ɡ/ ou /ŋ/ conforme a posição.',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o karitiana: os áudios usam a voz do
  // aparelho, se houver — o código abaixo é só um palpite razoável (não confirmado em nenhuma fonte).
  speechLocale: 'ktn',
  available: true,
  // Curso completo até o teto (A2, em tetos): os testes de teto leem “incomplete.until igual ao último
  // subnível do teto” como curso completo. A nota diz ao aluno de onde vem o material.
  incomplete: {
    until: 'A2.2',
    note:
      'Curso completo até o teto do karitiana (A2): quatro unidades, 115 palavras, 8 tópicos de gramática e 4 histórias. O karitiana é a única língua ainda viva da família Arikém, um ramo à parte do tronco Tupi, falada por poucas centenas de pessoas na Terra Indígena Karitiana (RO). O A1 vem do artigo da Wikipédia em português, que cita Luciana Storto (1999) e Caleb Everett. O A2 vem direto das fontes acadêmicas, frase por frase: a tese de Storto (1999), os trabalhos dela com Ivan Rocha e com Ana Müller na USP, a dissertação de Andrea Marques de Carvalho (2010) e o “Gopi Yjxa” (2020), léxico ilustrado de plantas e animais feito com a escola da aldeia Kyõwã. Por isso a grafia muda um pouco no A2: Storto separa os pedaços do verbo com hífen (naka-\'y-t) e o Gopi Yjxa escreve a palavra inteira (naka\'yt); a tese de 1999 também não marca o til em “mora” (quem?). Ficaram de fora o dicionário de David Landin (SIL), que não estava acessível, e as palavras com o “j” com til, para não trocar letras sem uma regra da fonte. Nenhum serviço de voz consultado tem voz para o karitiana, então o áudio usa a voz do aparelho.',
  },
  vocab: VOCAB_KTN,
  units: UNITS_KTN,
  etymology: ETYMOLOGY_KTN,
  community: COMMUNITY_KTN,
  scenarios: SCENARIOS_KTN,
  stories: STORIES_KTN,
  grammar: GRAMMAR_KTN,
  journalPrompts: JOURNAL_PROMPTS_KTN,
  shadowing: SHADOWING_KTN,
  fontes: FONTES_KTN,
  metodos: METODOS_KTN,
  // apóstrofo (oclusiva glotal) e as vogais nasais que não existem no teclado português padrão (ã e õ
  // existem no português, mas entram aqui também por completude do conjunto de vogais nasais da
  // língua) — ver a seção “Ortografia” em pt.wikipedia.org/wiki/Língua_caritiana.
  specialChars: ["'", 'ã', 'ẽ', 'ĩ', 'õ', 'ỹ'],
  // o karitiana não marca gênero gramatical em lugar nenhum da língua: os pronomes são epicenos (“i”
  // serve tanto para “ele” quanto para “ela”), e “a marcação de gênero não aparece em nenhum dos
  // domínios da gramática da língua” — Caleb Everett, “Gender, pronouns and thought” (2011), citado em
  // pt.wikipedia.org/wiki/Língua_caritiana.
  genders: [],
  greeting: 'Go i haap!',
  sampleSentence: 'Go i haap! Ỹn naka-y-t gok.',
  phrases: {
    hi: 'Go i haap!',
    thanks: 'Yryhon!',
    // não há, nas fontes consultadas, um imperativo isolado de “vamos!” fora do já citado em
    // “Expressões do dia-a-dia” (pt.wikipedia.org/wiki/Língua_caritiana): “my'ari” (também “myh”).
    letsStart: ["My'ari!", 'Vamos! (usado aqui como convite para começar agora)'],
  },
  formalMarkers:
    'Nas fontes consultadas não há registro de um pronome ou prefixo “formal” separado no karitiana: “ãn” (tu/você) e o prefixo “a-” servem para qualquer pessoa, sem a distinção que o português marca com “você”/“o senhor” — um traço que o karitiana compartilha com outras línguas indígenas já neste app, como o baniwa, o tukano, o kaingang e o xavante.',
  cognateNote:
    'O karitiana não é parente do português: é uma língua indígena da família Arikém, um ramo pequeno e SEPARADO do tronco Tupi — diferente do ramo tupi-guarani de outras línguas indígenas já neste app (guarani, tupinambá, nheengatu, guarani mbyá). O karitiana é a única língua ainda viva da família Arikém: as outras duas, o arikém e o kabixiana, já estão extintas. Não há, portanto, nenhum ancestral comum com o português, e não existem cognatos “de berço” entre as duas línguas. O que mais chama atenção no karitiana, destacado na aba de gramática, é um traço tipológico raro: a língua é ergativo-absolutiva — o verbo transitivo concorda com o objeto da frase, não com o sujeito, o oposto do padrão nominativo-acusativo do português. A ordem das palavras também muda conforme a construção: frases declarativas “neutras” usam sujeito-verbo ou agente-verbo-objeto, mas frases com foco no verbo invertem para verbo-sujeito ou verbo-objeto (Everett, 2007, pp. 332-333) — outro contraste com a ordem fixa que o português costuma preferir. Os pronomes são epicenos (“i” serve tanto para “ele” quanto para “ela”): nenhuma parte da gramática karitiana marca gênero.',
};
