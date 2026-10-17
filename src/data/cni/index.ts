import type { LanguagePack } from '../types';
import { VOCAB_CNI } from './vocabulario';
import { UNITS_CNI } from './curriculo';
import { GRAMMAR_CNI } from './gramatica';
import { STORIES_CNI } from './historias';
import { COMMUNITY_CNI, ETYMOLOGY_CNI, JOURNAL_PROMPTS_CNI, SCENARIOS_CNI, SHADOWING_CNI } from './extras';
import { ACCENTS_CNI } from './sotaques';
import { FONTES_CNI, METODOS_CNI } from './fontes';

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
  // Curso completo até o teto (A2, em tetos): os testes de teto leem “incomplete.until igual ao último
  // subnível do teto” como curso completo; sem o campo, entenderiam conteúdo até o C2. A nota diz ao
  // aluno de onde vem o material e o que ficou de fora.
  incomplete: {
    until: 'A2.2',
    note:
      'Curso completo até o teto do asháninka (A2): quatro unidades, 110 palavras, 8 tópicos de gramática e 4 histórias. O asháninka é uma língua viva da família aruak, a língua amazônica mais falada do Peru (mais de 73 mil falantes no censo de 2017), na Selva Central — rios Ene, Tambo, Apurímac e Perené —, e também falada pelos Ashaninka do rio Amônia, no Acre. É parente distante do terena e do baniwa, as outras línguas aruak deste app. A grafia é o alfabeto oficial do Ministério da Educação do Peru, o das escolas bilíngues: sem c, qu nem v, e com as vogais escritas uma vez só, salvo quando a vogal longa muda o sentido. O vocabulário vem do vocabulário pedagógico asháninka do Ministério da Educação do Peru (2021) e do dicionário asháninka de Lee Kindberg (1980), escrito na grafia antiga (“pasonqui”, “aviro”), que aqui aparece no alfabeto oficial (“pasonki”, “abiro”). A gramática do A2 — o futuro, a negação, o plural e as perguntas — segue a tabela dos afixos do verbo de Willard Kindberg, no fim desse dicionário, e a enciclopédia das línguas indígenas do Peru (Montoya e Ramos, 2024). Todas as frases são das fontes. As montagens são poucas e declaradas: trocar o nome em “Nojita Kapeshi” (eu me chamo Kapeshi) pelo seu, juntar a pergunta e a resposta do mesmo verbete do dicionário em “¿Pokajimpi? — Nopokake.” e usar só a primeira oração de três frases longas. O curso para no A2 porque, segundo a enciclopédia, ainda não existe uma gramática de referência do asháninka: há um dicionário, um vocabulário escolar e descrições curtas, mas falta uma descrição completa do verbo, que tem dezenas de sufixos.',
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
  fontes: FONTES_CNI,
  metodos: METODOS_CNI,
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
