import type { LanguagePack } from '../types';
import { VOCAB_BSK } from './vocabulario';
import { UNITS_BSK } from './curriculo';
import { GRAMMAR_BSK } from './gramatica';
import { STORIES_BSK } from './historias';
import { COMMUNITY_BSK, ETYMOLOGY_BSK, JOURNAL_PROMPTS_BSK, SCENARIOS_BSK, SHADOWING_BSK } from './extras';

/**
 * Burushaski (بروشسکی) — língua ISOLADA (sem parentesco comprovado com nenhuma outra língua do
 * mundo), falada nos vales de Hunza, Nager e Yasin, no norte do Paquistão (Gilgit-Baltistão), por
 * cerca de 130 mil pessoas (Wikipédia, estimativa de 2018-2020). Este pacote ensina o dialeto
 * Hunza-Nager (o mais falado); o de Yasin é bem mais divergente. Sem status oficial, sem imprensa
 * própria, sem ensino regular nas escolas. Escrito aqui na romanização de Hermann Berger, usada
 * pelos linguistas (e pela Wikipédia e pelo dicionário anotado de G. Starostin) — não no alfabeto
 * perso-árabe/Nastaliq promovido no Paquistão, sem fonte confiável o bastante nesta sessão pra
 * ensinar a grafia árabe palavra por palavra.
 *
 * Fontes gerais (todas consultadas em 09/10/2026): o dicionário comparativo anotado de G. Starostin
 * ("Annotated Swadesh wordlists for the Burushaski group", starlingdb.org/new100/bur.pdf, abril de
 * 2013), que organiza e cita palavra por palavra a obra de Hermann Berger ("Das Yasin-Burushaski",
 * 1974, e "Die Burushaski-Sprache von Hunza und Nager", 3 vols., 1998, as GRAMÁTICAS DE REFERÊNCIA,
 * em alemão, mas aqui usadas só pelas tabelas já traduzidas e comentadas em inglês por Starostin,
 * nunca lidas diretamente em alemão); a Wikipédia em inglês ("Burushaski"); o Wikcionário em inglês
 * ("Appendix:Burushaski_Swadesh_list"); e o roteiro de frases do Wikivoyage em inglês ("Burushaski
 * phrasebook") só pras poucas palavras de cortesia que nenhuma gramática acadêmica cobre.
 */
export const BURUSHASKI: LanguagePack = {
  code: 'bsk',
  name: 'Burushaski',
  nativeName: 'بروشسکی',
  flag: '🇵🇰',
  lineage: {
    family: 'Língua isolada',
    branches: ['Burushaski'],
    region: 'Vales de Hunza, Nager e Yasin, no norte do Paquistão (Gilgit-Baltistão)',
    writing: 'Perso-árabe/Nastaliq (promovido oficialmente no Paquistão hoje) e romanização latina de Hermann Berger, usada pelos linguistas e por este pacote',
  },
  speechLocale: 'bsk',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2): o burushaski tem boas fontes acadêmicas pra vocabulário isolado e pra pontos de gramática (pronomes, classes nominais, numerais, marcação de pessoa no verbo), mas quase nenhuma frase pronta — as poucas que existem vêm de um roteiro de viagem incompleto (Wikivoyage). Da A2.1 até o C2 chega nas próximas atualizações, conforme mais fontes forem conferidas.',
  },
  vocab: VOCAB_BSK,
  units: UNITS_BSK,
  etymology: ETYMOLOGY_BSK,
  community: COMMUNITY_BSK,
  scenarios: SCENARIOS_BSK,
  stories: STORIES_BSK,
  grammar: GRAMMAR_BSK,
  journalPrompts: JOURNAL_PROMPTS_BSK,
  shadowing: SHADOWING_BSK,
  specialChars: ['č', 'ć', 'ċ', 'ṣ', 'ṭ', 'ẏ'],
  // o burushaski tem de 4 a 5 classes nominais (hm, hf, x, y, z — ver gramática), mas nenhuma
  // corresponde 1-pra-1 ao sistema masculino/feminino/neutro do app, então nenhuma palavra do
  // vocabulário leva gênero marcado
  genders: [],
  greeting: 'Bebila?',
  sampleSentence: 'Bebila? Ja aek Linu bila. Ju na!',
  phrases: { hi: 'Bebila?', thanks: 'Ju na!', letsStart: ['Awa!', 'Sim! (usado aqui como um “vamos!” de aprovação)'] },
  formalMarkers: 'não confirmado nas fontes consultadas: nenhuma delas atesta uma distinção formal/informal clara pros pronomes “un” (tu/você) e “ma” (vocês)',
  cognateNote:
    'O burushaski é uma língua ISOLADA: sem parentesco comprovado com nenhuma outra língua do mundo, nem com o urdu, o xina ou qualquer outra língua indo-iraniana vizinha (apesar de séculos de contato, que deixaram empréstimos no vocabulário cultural, mas não provam origem comum). Por isso não espere reconhecer palavras de cara: veja a aba de etimologia pra conhecer a origem das próprias palavras burushaski.',
};
