import type { LanguagePack } from '../types';
import { VOCAB_YWN } from './vocabulario';
import { UNITS_YWN } from './curriculo';
import { GRAMMAR_YWN } from './gramatica';
import { STORIES_YWN } from './historias';
import { COMMUNITY_YWN, ETYMOLOGY_YWN, JOURNAL_PROMPTS_YWN, SCENARIOS_YWN, SHADOWING_YWN } from './extras';

export const YAWANAWA: LanguagePack = {
  // CÓDIGO ISO 639-3: confirmado como “ywn” em TRÊS fontes independentes consultadas nesta entrega:
  // (1) iso639-3.sil.org/code/ywn — registro oficial do SIL, nome de referência “Yawanawa”, status
  //     ativo, língua individual; (2) glottolog.org/resource/languoid/id/yawa1260 — glotocódigo
  //     “yawa1260”, lista “ywn” como o código ISO 639-3 correspondente, família Pano-Tacanan, país
  //     Brasil; (3) en.wikipedia.org/wiki/Yawanawa_language — infobox também cita “ywn”. As três fontes
  //     concordam entre si.
  code: 'ywn',
  name: 'Yawanawá',
  // “Yawanawá” é a própria autodesignação do povo (diferente do huni kuĩ, pacote “cbs” deste app, cujo
  // nome mais usado é um exônimo pejorativo): “yawa” (queixada, um porco-do-mato) + “nawa” (povo, gente)
  // — confirmado em pt.wikipedia.org/wiki/Yawanawá e pib.socioambiental.org/pt/Povo:Yawanawá.
  nativeName: 'Yawanawá',
  // território: Terra Indígena Rio Gregório, no Acre (Brasil), com grupos também no Peru e na Bolívia —
  // emoji de bandeira do Brasil, mesma solução já usada para outras línguas indígenas brasileiras deste
  // app (huni kuĩ, baniwa, tukano, kaingang, xavante).
  flag: '🇧🇷',
  lineage: {
    family: 'Pano',
    branches: [
      'Pano-Tacana → Pano (glottolog.org/resource/languoid/id/yawa1260; en.wikipedia.org/wiki/Yawanawa_language)',
      'Grupo VII: Kaxinawá, Marináwa, Yawanawá (classificação de Oliveira 2014, citada em pt.wikipedia.org/wiki/Línguas_pano) — o mesmo grupo do huni kuĩ/hãtxa kuĩ, pacote “cbs” deste app: o parente mais próximo do yawanawá aqui dentro',
      'Subgrupo III-2-2-2: Mastanawa, Tuxinawa, Yoranawa, Sharanawa, Shanenawa, Arara, Yawanawa, Xitonawa, Yaminawa (classificação de Amarante Ribeiro 2005, citada na mesma fonte) — nesta outra classificação o yawanawá fica agrupado com o yaminawa e o sharanawa/shanenawa, não com o huni kuĩ (que, nesta mesma fonte, fica no Subgrupo III-1)',
    ],
    region:
      'Terra Indígena Rio Gregório, município de Tarauacá (Acre, Brasil), com grupos também no sudeste do Peru e na Bolívia (pib.socioambiental.org/pt/Povo:Yawanawá)',
    writing:
      'Alfabeto latino, em ortografia prática: as fontes consultadas registram vogais nasais (indicadas por “n” depois da vogal, como em “an”, “in”, “un”, ou por til, conforme a fonte) e consoantes como o “x” (som “sh”), detalhadas na aba de gramática deste pacote',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o yawanawá: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso do huni kuĩ, do baniwa, do tukano, do kaingang e do xavante).
  speechLocale: 'ywn',
  available: true,
  incomplete: {
    until: 'A1.1',
    note:
      'Este pacote é bem menor que o normal, de propósito: o yawanawá — língua indígena viva da família pano, falada por cerca de 1.287 pessoas ao todo (831 no Brasil em 2014, 324 no Peru em 1993 e 132 na Bolívia em 2012, segundo pt.wikipedia.org/wiki/Yawanawá; um levantamento mais recente do sistema de saúde indígena conta 849 pessoas só no Brasil em 2020, segundo pib.socioambiental.org/pt/Povo:Yawanawá), na Terra Indígena Rio Gregório (Tarauacá, Acre) — é muito pouco documentado em fontes digitais abertas, bem menos do que o huni kuĩ (pacote “cbs”, parente próximo dentro da mesma família pano). O código ISO 639-3 usado por este pacote, “ywn”, foi confirmado em iso639-3.sil.org/code/ywn, glottolog.org/resource/languoid/id/yawa1260 e en.wikipedia.org/wiki/Yawanawa_language. Depois de consultar essas fontes, mais pt.wikipedia.org/wiki/Yawanawá, pib.socioambiental.org/pt/Povo:Yawanawá (Instituto Socioambiental, “Povos Indígenas no Brasil”, com a bibliografia acadêmica sobre o povo: Carid Naveira 1999, Gil 1999 e 2001, Lima 1994, Maher 1993, Vinnya et al. 2006, entre outros) e native-languages.org (yawanawa_words.htm, yawanawa_body.htm, yawanawa_guide.htm e fampan_words.htm, com uma tabela comparando o yawanawá a outras línguas pano), só foi possível confirmar, palavra por palavra, 23 palavras — todas substantivos e numerais (corpo, natureza, pessoas, animais, números e um pequeno vocabulário cultural/xamânico). NENHUMA fonte consultada registrou um pronome, um verbo, uma saudação, um “sim”/“não” ou qualquer frase completa em yawanawá: por isso, em vez de inventar essas peças, o pacote fica com uma trilha pequena (só a unidade A1.1, com duas lições e uma prova, usando 12 das 23 palavras), dois tópicos de gramática (pronúncia e a formação do nome “Yawanawá”) e uma história — tudo construído só com as palavras confirmadas, nunca combinadas em frases novas sem uma estrutura atestada. Por não haver cenários de conversa possíveis sem verbos nem pronomes, este pacote também não tem nenhum cenário por enquanto. Como não há, nas fontes, uma saudação nem um “obrigado” fixos, o curso usa “Yawa nawa!” (a própria autodesignação do povo: “queixada” + “gente”) como chamada de abertura, “Saiti!” (grito de festa, termo genérico de alegria) como expressão de apreço, e “Mariri!” (o nome do festival e das danças noturnas do povo) como convite animado para começar — do mesmo jeito que outros pacotes de línguas pouco documentadas deste app preenchem essas lacunas com palavras reais, nunca inventadas. Se mais fontes específicas do yawanawá (uma gramática, um dicionário, uma cartilha) forem encontradas, este pacote cresce nas próximas atualizações.',
  },
  vocab: VOCAB_YWN,
  units: UNITS_YWN,
  etymology: ETYMOLOGY_YWN,
  community: COMMUNITY_YWN,
  scenarios: SCENARIOS_YWN,
  stories: STORIES_YWN,
  grammar: GRAMMAR_YWN,
  journalPrompts: JOURNAL_PROMPTS_YWN,
  shadowing: SHADOWING_YWN,
  specialChars: ['ã', 'ë'],
  // as fontes consultadas não descrevem gênero gramatical de substantivo no yawanawá (não há artigos
  // “o/a” nem concordância de gênero registrados) — o mesmo caso do huni kuĩ e de outras línguas
  // indígenas já neste app, como o baniwa e o tukano.
  genders: [],
  // autodesignação do povo (“yawa”, queixada, + “nawa”, povo/gente), usada como chamada de abertura:
  // nenhuma fonte registra uma saudação própria em yawanawá.
  greeting: 'Yawa nawa!',
  sampleSentence: 'Yawa nawa! Saiti!',
  phrases: {
    hi: 'Yawa nawa!',
    // nenhuma fonte registra um “obrigado” fixo em yawanawá: “saiti” (grito de festa, termo genérico de
    // alegria, segundo pib.socioambiental.org/pt/Povo:Yawanawá) é usado aqui como expressão de apreço, do
    // mesmo jeito que o huni kuĩ (pacote “cbs”) usa “hawɨ̃” (bonito, bom) onde a língua não lexicalizou
    // um “obrigado” separado.
    thanks: 'Saiti!',
    // também não há, nas fontes, um “vamos!” imperativo: reaproveitamos “mariri”, o nome do festival de
    // música e dança do povo yawanawá (realizado todo ano na lua cheia), como convite animado para
    // começar agora, sem inventar uma forma nova.
    letsStart: ['Mariri!', 'Festa! (o nome do festival e das danças noturnas do povo yawanawá, usado aqui como convite animado para começar)'],
  },
  formalMarkers:
    'As fontes consultadas nesta entrega não registram pronomes de segunda pessoa nem nenhuma marca de tratamento formal ou informal para o yawanawá: o vocabulário deste pacote, por enquanto, cobre só substantivos e numerais (corpo, natureza, pessoas, animais e cultura), sem pronomes.',
  cognateNote:
    'O yawanawá não é parente do português: é uma língua indígena viva da família pano, nativa da Terra Indígena Rio Gregório (Acre, Brasil), com grupos também no Peru e na Bolívia — uma família totalmente diferente da indo-europeia (a mesma do português) e também diferente do tupi-guarani, do jê, do aruak (arawak) e do tukano, famílias de outras línguas indígenas já neste app. Não há ancestral comum com o português, então não existem cognatos “de berço” entre as duas línguas. O parentesco que aparece na aba de etimologia é com outras línguas pano, sobretudo com o huni kuĩ/hãtxa kuĩ (pacote “cbs” deste app), o parente mais próximo do yawanawá segundo uma das classificações consultadas: os numerais “wisti” (um) e “rave” (dois) são muito parecidos com as formas huni kuĩ “bɨsti” e “rabɨ”, e o próprio nome “Yawanawá” usa o elemento “nawa” (povo, gente), que também aparece nos nomes de outros povos pano vizinhos, como Yaminawá e Shanênawa.',
};
