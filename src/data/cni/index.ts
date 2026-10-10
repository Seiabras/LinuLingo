import type { LanguagePack } from '../types';
import { VOCAB_CNI } from './vocabulario';
import { UNITS_CNI } from './curriculo';
import { GRAMMAR_CNI } from './gramatica';
import { STORIES_CNI } from './historias';
import { COMMUNITY_CNI, ETYMOLOGY_CNI, JOURNAL_PROMPTS_CNI, SCENARIOS_CNI, SHADOWING_CNI } from './extras';
import { ACCENTS_CNI } from './sotaques';

export const ASHANINKA: LanguagePack = {
  code: 'cni',
  name: 'Asháninka',
  // autodenominação: “ashaninka” (Kindberg 1980, p. 16: “ashaninca: campa, paisano”; Montoya e Ramos
  // 2024, p. 88: “los miembros del pueblo originario denominan a su lengua ashaninka”). Grafia do
  // alfabeto oficial, sem acento (MINEDU 2021 escreve “ashaninka”).
  nativeName: 'Ashaninka',
  // a grande maioria dos falantes está no Peru (73 567 no censo de 2017, Montoya e Ramos 2024, p. 88),
  // onde a língua é oficial nas zonas onde é falada; não há símbolo próprio da língua.
  flag: '🇵🇪',
  lineage: {
    family: 'Aruak (Arawak)',
    // Glottolog (asha1243, conferido no JSON de glottolog.org): Arawakan › Southern Maipuran ›
    // Kampa-Amuesha › Pre-Andine Maipuran › Asha-Ashe-Kak-Matsi-Nan › Asha-Ashe-Kak › Ashe-Asha. O
    // ramo “campa” de Montoya e Ramos (2024, p. 89; Michael 2008) corresponde ao nó
    // Asha-Ashe-Kak-Matsi-Nan (asháninka, ashéninka, kakinte, matsigenka, nanti), aqui “Campa”. O
    // terena (ter) fica noutro ramo do maipure meridional (aruak boliviano); o baniwa (kpc), num ramo
    // ainda mais distante.
    branches: ['Maipure meridional', 'Kampa-Amuesha', 'Maipure pré-andino', 'Campa', 'Asháninka-ashéninka-kakinte', 'Ashéninka-asháninka'],
    // Montoya e Ramos 2024, pp. 88-89 (departamentos e rios); ISA, Povos Indígenas no Brasil (Acre)
    region:
      'Selva Central do Peru — Junín, Pasco, Ucayali, Ayacucho, Cusco e Huánuco, ao longo dos rios Ene, Tambo, Apurímac, Perené e Bajo Urubamba —, e o Acre, no Brasil, sobretudo na Terra Indígena Kampa do Rio Amônia (Marechal Thaumaturgo)',
    // MINEDU 2021, pp. 13-17
    writing:
      'Alfabeto latino, no alfabeto oficial peruano aprovado em 2008: 19 letras (a, b, ch, e, i, j, k, m, n, ñ, o, p, r, s, sh, t, ts, ty, y), com j para o som de “h” aspirado e sem letras dobradas, salvo quando a vogal longa muda o sentido da palavra (aari, irmão; ari, sim)',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o asháninka: os áudios usam a voz do
  // aparelho, se houver (o mesmo caso das outras línguas indígenas do app).
  speechLocale: 'cni',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 68 palavras, 4 tópicos de gramática, 2 histórias). O asháninka é uma língua viva da família aruak, a língua amazônica mais falada do Peru (mais de 73 mil falantes no censo de 2017), na Selva Central — rios Ene, Tambo, Apurímac e Perené —, e também falada pelos Ashaninka do rio Amônia, no Acre. É parente distante do terena e do baniwa, as outras línguas aruak deste app. A grafia é o alfabeto oficial do Ministério da Educação do Peru, o das escolas bilíngues: sem c, qu nem v, e com as vogais escritas uma vez só. O vocabulário vem do vocabulário pedagógico asháninka do Ministério da Educação do Peru (2021), do dicionário asháninka de Lee Kindberg (1980) — escrito na grafia antiga, com “pasonqui” e “aviro”, que aqui aparecem como “pasonki” e “abiro” — e da enciclopédia das línguas indígenas do Peru (Montoya e Ramos, 2024). Nas fontes não há um “oi” fixo: o cumprimento registrado é a pergunta “¿Pokajimpi?” (você veio?), e de manhã “Kitaiteri” (bom dia). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_CNI,
  units: UNITS_CNI,
  etymology: ETYMOLOGY_CNI,
  community: COMMUNITY_CNI,
  scenarios: SCENARIOS_CNI,
  stories: STORIES_CNI,
  accents: ACCENTS_CNI,
  grammar: GRAMMAR_CNI,
  journalPrompts: JOURNAL_PROMPTS_CNI,
  shadowing: SHADOWING_CNI,
  // o ñ é a única letra do alfabeto oficial (MINEDU 2021, p. 13) que não está no teclado português; o
  // “¿” das perguntas segue a pontuação do espanhol que o MINEDU usa.
  specialChars: ['ñ', '¿'],
  // sem gênero no substantivo: a distinção masculino × feminino (não masculino) aparece só na 3ª pessoa
  // dos prefixos e pronomes — i- / o-, irinti / irointi, -ri / -ro (Montoya e Ramos 2024, Tabla 4;
  // Kindberg 1980, p. 5 e p. 337). Por isso o vocabulário não marca gênero.
  genders: [],
  greeting: 'Kitaiteri',
  // “Nojita Linu” troca só o nome em “Nojita Capeshi.” (Kindberg 1980, p. 109)
  sampleSentence: 'Kitaiteri! Nojita Linu. Tsame!',
  phrases: {
    // Kindberg 1980, p. 298 (buenos días: quitaiteri)
    hi: 'Kitaiteri!',
    // Kindberg 1980, p. 359 (gracias: pasonqui)
    thanks: 'Pasonki!',
    // MINEDU 2021 (Tsame añatsacharo…, vamos jogar) e Kindberg 1980, p. 18 (Tsame ayea, vamos comer)
    letsStart: ['Tsame!', 'Vamos!'],
  },
  formalMarkers:
    'O dicionário asháninka dá uma só palavra para “tu” e para “o senhor, a senhora”: “abiro” — não há um “você” formal separado. O que muda conforme quem fala são as palavras de parentesco: um homem chama a irmã de “choki” e uma mulher a chama de “entyo”; o avô é “charine” para um homem e “api” para uma mulher.',
  cognateNote:
    'O asháninka não é parente do português: é uma língua indígena da família aruak, que se espalhou pela América do Sul muito antes da chegada dos europeus — uma família totalmente diferente da indo-europeia (a do português) e também da tupi-guarani. Dentro do app, os parentes do asháninka são o terena e o baniwa, mas de outros ramos da família, bem distantes; os mais próximos de verdade (ashéninka, matsigenka, nomatsigenga, kakinte) ainda não estão no app. O que o asháninka tem em comum com o português veio pelo espanhol: empréstimos como “sapato” (do espanhol zapato), “kiribiro” (libro, livro) e “perato” (plato, prato), escritos com as letras e os sons do asháninka.',
};
