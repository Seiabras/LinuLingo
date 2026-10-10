import type { LanguagePack } from '../types';
import { VOCAB_HOP } from './vocabulario';
import { UNITS_HOP } from './curriculo';
import { GRAMMAR_HOP } from './gramatica';
import { STORIES_HOP } from './historias';
import { COMMUNITY_HOP, ETYMOLOGY_HOP, JOURNAL_PROMPTS_HOP, SCENARIOS_HOP, SHADOWING_HOP } from './extras';
import { ACCENTS_HOP } from './sotaques';

/**
 * Hopi (hopílavayi, código ISO 639-3 “hop”), língua uto-asteca do ramo setentrional, falada na Reserva
 * Hopi, no nordeste do Arizona (Estados Unidos). O código “hop” é confirmado tanto pelo campo “iso3” do
 * quadro do artigo “Hopi language” da Wikipédia em inglês quanto pelo próprio Wiktionary em inglês, que
 * usa “hop” como código de língua em todo verbete hopi. Cada palavra do vocabulário foi conferida
 * individualmente no Wiktionary em inglês (ver o comentário de fontes em `vocabulario.ts`), no artigo
 * “Hopi language” da Wikipédia em inglês (pronomes, sintaxe, fonologia e ortografia) e, só para os
 * numerais de 1 a 5, no site Native Languages of the Americas.
 */
export const HOPI: LanguagePack = {
  code: 'hop',
  name: 'Hopi',
  // “Hopilavayi” é um termo derivado listado pelo próprio Wiktionary em inglês (verbete “hopi”, seção
  // “Derived terms”) — a junção de “hopi” (pessoa hopi, civilizada, pacífica) com “lavayi” (palavra,
  // língua), as duas palavras já confirmadas neste vocabulário. O Wiktionary também registra
  // “Hopiikwa” como tradução de “the Hopi language” na página em inglês “Hopi” — mas sem verbete
  // próprio em hopi que a defina, por isso este curso prefere “Hopilavayi”, o termo com entrada
  // (como termo derivado) na própria seção hopi do dicionário.
  nativeName: 'Hopilavayi',
  // Reserva Hopi, no Arizona, dentro dos Estados Unidos — emoji de bandeira dos EUA, na falta de um
  // símbolo próprio da língua, mesma solução já usada para o apache ocidental e o shoshone deste app.
  flag: '🇺🇸',
  lineage: {
    family: 'Uto-asteca',
    branches: ['Uto-asteca setentrional (Northern Uto-Aztecan)'],
    region: 'Reserva Hopi, no nordeste do Arizona, Estados Unidos',
    writing:
      'Alfabeto latino, com o apóstrofo (ʼ) como letra própria (oclusiva glotal) e a vogal dobrada (öö, uu, ii...) marcando vogal longa; a variante da Terceira Mesa também marca tom descendente nas vogais longas com acento grave (à, ò, ù). A ortografia prática segue a usada pelo principal dicionário publicado da língua, “Hopi Dictionary: Hopìikwa Lavàytutuveni” (University of Arizona Press, 1998, dialeto da Terceira Mesa), segundo a Wikipédia em inglês.',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o hopi: os áudios usam a voz do aparelho,
  // se houver — o mesmo caso do apache ocidental, do shoshone, do navajo e das outras línguas indígenas
  // sem voz sintética deste app.
  speechLocale: 'hop',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 55 palavras, 4 tópicos de gramática, 2 histórias). O Wiktionary em inglês cataloga, ao todo, só 320 lemas na categoria “Hopi lemmas” — e, dentro dela, a categoria de verbos (“Hopi verbs”) tem só 11 entradas no total, 8 usadas neste curso (sempre na forma citada do dicionário, nunca conjugadas: a própria Wikipédia em inglês registra que os sufixos verbais do hopi “não são usados de um jeito regular”). Nenhuma fonte consultada traz uma frase interrogativa, uma saudação fixa, um “obrigado” ou um “sim”/“não” em hopi — por isso os campos de saudação abaixo reaproveitam palavras reais (“Hopi”, a palavra que também significa “pessoa civilizada, pacífica”) em vez de inventar uma fórmula que nenhuma fonte confirma. Pela mesma razão, a trilha tem só duas unidades (pessoas e pronomes; depois cores, pedra e bichos): a maior parte do vocabulário (números, alimentação, corpo, casa e boa parte dos verbos) fica de fora das lições por falta de gramática pra combiná-las em frases novas sem inventar, mas continua disponível na aba de vocabulário. O código ISO 639-3 “hop” foi confirmado tanto no quadro do artigo “Hopi language” da Wikipédia em inglês quanto no próprio Wiktionary em inglês, que usa esse código em todo verbete hopi. Mais vocabulário e gramática chegam se e quando fontes específicas e confiáveis do hopi (como um dicionário publicado de acesso aberto) forem encontradas — este curso preferiu ficar pequeno a inventar palavras ou frases para preencher o modelo padrão.',
  },
  vocab: VOCAB_HOP,
  units: UNITS_HOP,
  etymology: ETYMOLOGY_HOP,
  community: COMMUNITY_HOP,
  scenarios: SCENARIOS_HOP,
  stories: STORIES_HOP,
  accents: ACCENTS_HOP,
  grammar: GRAMMAR_HOP,
  journalPrompts: JOURNAL_PROMPTS_HOP,
  shadowing: SHADOWING_HOP,
  // ʼ (oclusiva glotal), ö (vogal arredondada, sempre dobrada nas palavras deste curso) e à/ù (acento
  // grave, tom descendente) são as únicas marcas realmente vistas nas palavras hopi atestadas por este
  // curso (ver `vocabulario.ts`) — nenhuma outra letra especial aparece em nenhuma delas.
  specialChars: ['ʼ', 'ö', 'à', 'ù'],
  // as fontes consultadas (Wikipédia e Wiktionary) não registram gênero gramatical nos substantivos do
  // hopi — por isso o campo fica vazio, como no apache ocidental, no shoshone e no náuatle deste app.
  genders: [],
  greeting: 'Hopi!',
  sampleSentence: 'Taaqa hopi. Nuʼ taawa tuwa.',
  phrases: {
    hi: 'Hopi!',
    // não há, nas fontes consultadas, uma interjeição hopi equivalente a “oi” ou “obrigado”: como não
    // sobrou nenhuma outra palavra positiva atestada pra emprestar (a única interjeição confirmada,
    // “Ohi”, quer dizer “que pena!”, “droga!” — um sentido negativo, errado pra um cumprimento ou
    // agradecimento), este curso reaproveita aqui o mesmo “Hopi” do campo “hi” acima: a palavra que,
    // segundo o Wiktionary em inglês, também significa “pessoa civilizada, bem-comportada; educada,
    // pacífica” — o mesmo recurso já usado no marúbo (“kakáya”) e no yawanawá deste app, onde a língua
    // não tem uma palavra separada.
    thanks: 'Hopi!',
    // também não há, nas fontes, um verbo ou interjeição equivalente a “vamos”: reaproveitamos a frase
    // real “Itam momori” (nós nadamos) como convite pra começar a jornada deste curso, sem inventar uma
    // forma nova — o mesmo recurso usado no marúbo com “Yové Vai”.
    letsStart: ['Itam momori!', 'Nós nadamos! (frase real deste curso, reaproveitada como convite pra começar a jornada)'],
  },
  formalMarkers:
    'As fontes consultadas não confirmam, em hopi, uma distinção gramatical simples entre tratamento formal e informal como o “tu”/“você” do português. O Wiktionary em inglês registra, porém, outro tipo de marca social: a interjeição “Ohi” (“que pena!”, “droga!”) é descrita como usada especificamente por um falante homem — um lembrete de que, em hopi, pelo menos uma palavra pode depender de quem fala, de um jeito diferente do que o “tu”/“você” do português marca.',
  cognateNote:
    'O hopi pertence à família uto-asteca, ramo setentrional — sem nenhum parentesco com línguas indo-europeias como o português: não espere reconhecer palavras pela semelhança sonora ou escrita. Dentro da própria família uto-asteca, porém, o hopi é parente (ainda que distante) do náuatle e do shoshone, já neste app: o Wiktionary em inglês liga palavras como “hoonaw” (urso) e “poosi” (olho) a raízes reconstruídas do proto-uto-asteca, a língua ancestral comum de toda a família — ver a aba de etimologia para os detalhes.',
};
