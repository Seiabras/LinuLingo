import type { LanguagePack } from '../types';
import { VOCAB_MDZ } from './vocabulario';
import { UNITS_MDZ } from './curriculo';
import { GRAMMAR_MDZ } from './gramatica';
import { STORIES_MDZ } from './historias';
import { COMMUNITY_MDZ, ETYMOLOGY_MDZ, JOURNAL_PROMPTS_MDZ, SCENARIOS_MDZ, SHADOWING_MDZ } from './extras';

/**
 * Fontes (detalhes em vocabulario.ts):
 *  [L14] J. D. Lopes, tese de doutorado, UnB, 2014 — dicionário Suruí-Português (cap. 10.3), proposta
 *        de escrita (cap. 5), sintaxe (cap. 6), história da terra indígena (cap. 2.1) e classificação
 *        (cap. 3, com Rodrigues 1984-1985 e Rodrigues & Cabral 2002, 2012).
 *  [L15] J. D. Lopes, “Esboço da morfologia da língua Suruí-Aikewára…”, Fragmentum 46, 2015/2016.
 *  [ISA] Povos Indígenas no Brasil, verbete “Aikewara” (pib.socioambiental.org/pt/Povo:Aikewara),
 *        texto de Roque de Barros Laraia; população: 470 (Siasi/Sesai, 2020).
 *  Glottolog suru1261 (“Suruí do Pará”).
 */
export const AIKEWARA: LanguagePack = {
  code: 'mdz',
  // “Aikewara” é a autodenominação ([ISA]); “Suruí” foi o nome dado por Frei Gil Gomes nos anos 1950
  // e é o mais usado nos documentos ([ISA]; [L14] usa “Suruí-Aikewára” e “Suruí do Tocantins”). Fica
  // o nome próprio do povo, com “suruí do Pará” (o do ISO 639-3 e do Glottolog) entre parênteses para
  // quem procurar por ele. Grafia “Aikewára”, com acento, para o leitor lusófono pôr a tônica no lugar
  // ([L14] escreve “Suruí-Aikewára” no título); na própria língua não se usa acento ([L14] 5.5.1).
  name: 'Aikewára (suruí do Pará)',
  nativeName: 'Aikewara',
  // TI Sororó (PA) — bandeira do Brasil, na falta de um símbolo próprio da língua (como urb, kay).
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    // Glottolog (glottolog.org/resource/languoid/id/suru1261): Tupian > Eastern Tupian >
    // Maweti-Guarani > Aweti-Guarani > Tupi-Guarani > Tupi-Guarani Subgroup IV > IV.A (com o
    // parakanã e o asurini do Tocantins). [L14] cap. 3 confirma: Ramo IV de Rodrigues & Cabral,
    // “aproximando-se bastante das línguas Asuriní do Tocantins e Parakanã”. Primeiro ramo
    // “Tupi-guarani”, como nos outros pacotes da família, para o seletor agrupar.
    branches: ['Tupi-guarani', 'Subgrupo IV (com o asurini do Tocantins e o parakanã)'],
    // [L14] cap. 2.1 (100 km de Marabá, 70 km de São Geraldo do Araguaia, cortada pela BR-153; a
    // Tuwa Apekuokawera, identificada pela Funai em 2012, soma 11.764 ha) e [ISA] (470 pessoas).
    region:
      'Terra Indígena Sororó e Terra Indígena Tuwa Apekuokawera, no sudeste do Pará, a cerca de 100 km de Marabá e 70 km de São Geraldo do Araguaia, na região do Bico do Papagaio; a terra é cortada pela rodovia BR-153. O povo Aikewara soma cerca de 470 pessoas (2020)',
    // [L14] cap. 5.4, Quadros 09-11; ver o comentário GRAFIA em vocabulario.ts.
    writing:
      'Alfabeto latino, na proposta de escrita feita com os professores aikewara: “y” para a vogal central (entre o “i” e o “u”), apóstrofo (’) para a parada de garganta, “ng” para o som de “ng” em inglês, “kw” como em “quatro” e “j” só no fim da sílaba (akojte). Não há til nem acento: a língua não tem vogais nasais que mudem o sentido, e a tônica não é marcada. Os próprios Aikewara costumam escrever tudo em minúsculas e sem ponto de interrogação.',
  },
  // como nos outros idiomas indígenas sem voz sintética deste app (urb, kay), o código do próprio
  // idioma: nenhum serviço de síntese de voz consultado tem voz para o aikewára.
  speechLocale: 'mdz',
  available: true,
  // A nota não fala em transcrição fonética (regra do projeto); a ortografia “em discussão” vem de
  // [L14] cap. 5 (“proposta”) e 5.5.3-5.5.4 (os usos dos próprios Aikewara ainda variam).
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, com cerca de 150 palavras, 4 tópicos de gramática e 2 histórias), no aikewára (mdz), a língua do povo Aikewara — também chamado Suruí —, que vive nas Terras Indígenas Sororó e Tuwa Apekuokawera, no sudeste do Pará. É da família tupi-guarani, prima do asurini do Tocantins, do parakanã, do tembé e do guajajara. As palavras, as frases e a gramática seguem o dicionário e a gramática de Jorge Domingues Lopes (Universidade de Brasília, 2014), feitos na aldeia com os professores aikewara Tymykong e Ikatu; a forma de escrever é a proposta desse trabalho, ainda em discussão com a comunidade. Não há registro de cumprimentos fixos (como “oi” e “tchau”) nem de uma palavra para “obrigado”, e por isso o curso começa com perguntas de visita, como “Mo wi pa’e eresor?” (de onde você veio?). Da A2.1 até o C2 chega nas próximas atualizações, conforme mais vocabulário e gramática puderem ser conferidos em fontes específicas da língua.',
  },
  vocab: VOCAB_MDZ,
  units: UNITS_MDZ,
  etymology: ETYMOLOGY_MDZ,
  community: COMMUNITY_MDZ,
  scenarios: SCENARIOS_MDZ,
  stories: STORIES_MDZ,
  grammar: GRAMMAR_MDZ,
  journalPrompts: JOURNAL_PROMPTS_MDZ,
  shadowing: SHADOWING_MDZ,
  // só o apóstrofo: a grafia de [L14] não usa til nem acento (ver “writing”).
  specialChars: ["'"],
  // nenhuma fonte descreve gênero gramatical; o prefixo u- ∞ w- vale para “ele” e “ela” ([L15] 1.1.1.2).
  genders: [],
  // As fontes NÃO registram cumprimento fixo. Fica a pergunta de chegada que [L14] registra (s.v.
  // “mo”, “usor”; “você” e não “vocês” pelo paradigma de [L15] p. 158 — ver vocabulario.ts), como o
  // kamaiurá (kay) usa “Erejo ko'yt?” (você já veio?).
  greeting: "Mo wi pa'e eresor?",
  // [L14] s.v. “ukaru” (“kopesor, sakaru”, vem aqui, vamos comer).
  sampleSentence: 'Kopesor, sakaru.',
  phrases: {
    hi: "Mo wi pa'e eresor?",
    // Sem “obrigado” atestado (nem em [L14] nem em [L15]). Fica “Katuete!” ([L14] s.v. “katuete”:
    // saúde, bem, bom), que aparece na frase “Meta do dia cumprida! … Katuete!” como “que bom!”.
    thanks: 'Katuete!',
    // [L15] (paradigma de “ir”): “sa-ha ‘nós (incl.) vamos’” — o “nós” que inclui quem ouve.
    letsStart: ['Saha!', 'Vamos! (nós todos, você junto)'],
  },
  formalMarkers:
    'As fontes consultadas não registram um pronome ou tratamento “formal” separado no aikewára: “ene” (você) serve para qualquer pessoa, sem a distinção que o português faz entre “você” e “o senhor” — como em outras línguas indígenas deste app (ka’apor, kamaiurá, sateré-mawé). O que a língua distingue é o “nós” que inclui quem ouve (sene) do “nós” que o deixa de fora (ure).',
  // [L14] cap. 3 (mudanças do proto-tupi-guarani ao suruí: *jatʃý > sahy ‘lua’, *jakaré > sakare
  // ‘jacaré’, com *j > s antes de vogal); tupi antigo jasy e îakaré como no pacote tpw. Homônimos
  // novos: s.v. “tukurupipina1/2” (gafanhoto; moto), “taratiratinga1/2” (libélula; helicóptero).
  // Empréstimos: s.v. “remedio erukahara” (enfermeira, “é a que faz vir o remédio”) e “bola” no exemplo de
  // “aiko ku'ema re” (“amomomomon bola”, vou jogar bola).
  cognateNote:
    'O aikewára não é parente do português: é da família tupi-guarani, a mesma do guarani, do tupi antigo, do nheengatu e do ka’apor — por isso muitas palavras se parecem com as dessas línguas: “kwarahy” (sol) e o tupi antigo “kûarahy”, “tata” (fogo) e o guarani “tata”. Uma mudança antiga deixou um “s” onde as primas têm “j”: a lua é “sahy” (tupi antigo “jasy”) e o jacaré é “sakarea” (tupi antigo “îakaré”). Para coisas novas, a língua às vezes aproveita nomes de bichos: “tukurupipina” é o gafanhoto e também a moto; “taratiratinga” é a libélula e também o helicóptero. Algumas palavras vieram do português, como “remedio” (na “remedio erukahara”, a enfermeira, “a que faz vir o remédio”) e “bola”.',
};
