import type { LanguagePack } from '../types';
import { VOCAB_HOP } from './vocabulario';
import { UNITS_HOP } from './curriculo';
import { GRAMMAR_HOP } from './gramatica';
import { STORIES_HOP } from './historias';
import { COMMUNITY_HOP, ETYMOLOGY_HOP, JOURNAL_PROMPTS_HOP, SCENARIOS_HOP, SHADOWING_HOP } from './extras';
import { ACCENTS_HOP } from './sotaques';
import { FONTES_HOP, METODOS_HOP } from './fontes';

/**
 * Hopi (hopílavayi, código ISO 639-3 “hop”), língua uto-asteca do ramo setentrional, falada na Reserva
 * Hopi, no nordeste do Arizona (Estados Unidos). O código “hop” é confirmado tanto pelo campo “iso3” do
 * quadro do artigo “Hopi language” da Wikipédia em inglês quanto pelo próprio Wiktionary em inglês.
 *
 * Fontes: o A1 vem do Wiktionary em inglês (dicionário da Terceira Mesa), do artigo “Hopi language” da
 * Wikipédia em inglês e, para os numerais de 1 a 5, do Apêndice 1 de Kalectaca e de languagesandnumbers.com. As
 * lições extras do A1.1 e o A2 vêm de Milo Kalectaca, “Lessons in Hopi” (University of Arizona Press,
 * 1978; cópia do ERIC aberta no archive.org), na fala de Songoopavi, Segunda Mesa — ver os comentários
 * de vocabulario.ts, com a página de cada palavra e as regras de grafia.
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
  // Curso completo até o teto (A2, em tetos): os testes de teto leem “incomplete.until igual ao último
  // subnível do teto” como curso completo. A nota diz ao aluno de onde vem o material e o que ficou de fora.
  incomplete: {
    until: 'A2.2',
    note:
      'A1.1 até A2.2 completo: quatro unidades, 112 palavras, 8 tópicos de gramática e 4 histórias. O A1 vem do Wiktionary em inglês, que segue o dicionário da Terceira Mesa (1998). As lições extras do A1.1 e o A2 vêm do livro didático “Lessons in Hopi”, de Milo Kalectaca (1978): todas as frases são do livro, com a tradução dele, nenhuma foi criada pelo curso. O livro segue a fala de Songoopavi, na Segunda Mesa, por isso algumas formas mudam: Kalectaca escreve “qö́mavi” (preto) onde o Wiktionary tem “qömvi”, e “pooko” (cachorro) onde o Wiktionary tem “pòoko”. As duas formas estão certas, cada uma na sua mesa. O acento agudo marca a sílaba tônica quando ela foge da regra: “owí” (sim) se diz “o-UÍ”, não “Ó-wi”. Os números de 2 a 4 aparecem na forma de contar: “lööyöm”, “pàayom”, “naalöyöm”. Por respeito aos hopis, que protegem o conhecimento cerimonial, o curso fica no cotidiano (família, bichos, casa, escola, perguntas) e deixa de fora cerimônias e katsinas. Nenhum serviço de voz consultado tem voz para o hopi, então o áudio usa a voz do aparelho. O teto do hopi subiu para B1 (17/10/2026), pelas lições de Kalectaca, o dicionário de 1998 e os contos em hopi: do B1.1 ao B1.4 chega nas próximas atualizações.',
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
  fontes: FONTES_HOP,
  metodos: METODOS_HOP,
  shadowing: SHADOWING_HOP,
  // ʼ (oclusiva glotal), ö (vogal arredondada, sempre dobrada nas palavras deste curso) e à/ù (acento
  // grave, tom descendente) são as únicas marcas realmente vistas nas palavras hopi atestadas por este
  // curso (ver `vocabulario.ts`) — nenhuma outra letra especial aparece em nenhuma delas.
  specialChars: ['ʼ', 'ö', 'à', 'ù'],
  // as fontes consultadas (Wikipédia e Wiktionary) não registram gênero gramatical nos substantivos do
  // hopi — por isso o campo fica vazio, como no apache ocidental, no shoshone e no náuatle deste app.
  genders: [],
  // Cumprimento e agradecimento do livro de Kalectaca (1978), fala de Songoopavi, Segunda Mesa: “Um
  // waynuma?” (você está por aí?, Diálogo 1, p. 16) e “kwakwhá”, obrigado dito por homem (Diálogo 6,
  // p. 112; a mulher diz “askwali”, Diálogo 2, p. 37). Agudo de tônica mantido, ver vocabulario.ts.
  greeting: 'Um waynuma?',
  sampleSentence: 'Taaqa hopi. Nuʼ taawa tuwa.',
  phrases: {
    hi: 'Um waynuma?',
    thanks: 'Kwakwhá!',
    // “Itam yev naami Hopiyuʼaʼatani” (“vamos conversar em hopi juntos aqui”): Diálogo 1, p. 17.
    letsStart: ['Itam yev naami Hopiyuʼaʼatani!', 'Vamos conversar em hopi juntos aqui!'],
  },
  formalMarkers:
    'As fontes consultadas não mostram, em hopi, uma diferença de tratamento como o “tu”/“você” do português. Mas algumas palavras dependem de quem fala: o obrigado do homem é “kwakwhá”, e o da mulher, “askwali” (Kalectaca, “Lessons in Hopi”, 1978, Diálogos 2 e 6). O Wiktionary em inglês registra outra palavra assim: a interjeição “Ohi” (“que pena!”) é usada por homens.',
  cognateNote:
    'O hopi pertence à família uto-asteca, ramo setentrional — sem nenhum parentesco com línguas indo-europeias como o português: não espere reconhecer palavras pela semelhança sonora ou escrita. Dentro da própria família uto-asteca, porém, o hopi é parente (ainda que distante) do náuatle e do shoshone, já neste app: o Wiktionary em inglês liga palavras como “hoonaw” (urso) e “poosi” (olho) a raízes reconstruídas do proto-uto-asteca, a língua ancestral comum de toda a família. Há também empréstimos do espanhol, como “kawayo” (cavalo, de “caballo”) e “waakasi” (vaca, de “vacas”) — ver a aba de etimologia para os detalhes.',
};
