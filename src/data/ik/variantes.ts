import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do inupiaque (10/10/2026): a Encosta Norte (padrão do curso), o noroeste do Alasca
 * (malimiutun) e a Península de Seward. Sem histórias nos dialetos, por falta de fonte.
 *
 * Fonte: Wikipédia em inglês, «Iñupiaq language» (consultada em 10/10/2026): a árvore dos dialetos, a
 * fonologia e a tabela «Vocabulary comparison». Dessa tabela, a coluna “North Slope Iñupiaq” é o padrão,
 * a coluna “Northwest Alaska Iñupiaq” vai no dialeto do noroeste e a última coluna antes do inglês, a do
 * “Qawiaraq Fish River dialect” (com o “ch” do qawiaraq), no da Península de Seward. A coluna do meio,
 * que a tabela deixa sem título, ficou de fora.
 */
export const VARIANTS_IK: LanguageVariant[] = [
  dialetoPadrao(
    'ik-NS',
    'USA',
    'Inupiaque da Encosta Norte',
    '🇺🇸',
    'O padrão do curso: o inupiaque da Encosta Norte (North Slope), de Utqiaġvik e da costa do Ártico, “uma mistura dos falares de antes”.',
  ),
  {
    code: 'ik-NW',
    country: 'USA',
    kind: 'dialeto',
    name: 'Inupiaque do noroeste do Alasca (malimiutun)',
    flag: '🇺🇸',
    summary: 'O inupiaque do noroeste do Alasca: o malimiutun, da costa e das aldeias do noroeste, e o falar do rio Kobuk. Junto com a Encosta Norte, forma o inupiaque do norte do Alasca.',
    pronunciation: [
      'Preserva as consoantes surdas originais, que a Encosta Norte assimila: “qipmiq” × “qimmiq” (cachorro), “kuukpiaq” × “kuuppiaq” (café).',
      'No rio Kobuk, uma letra a mais: a oclusiva glotal, “ʼ”.',
    ],
    vocab: [
      ['iglu', 'tupiq', 'casa'],
      ['tupiq', 'palapkaaq', 'barraca'],
      ['qimmiq', 'qipmiq', 'cachorro'],
      ['ilisaurri', 'ilisautri', 'professor(a)'],
      ['miŋuaqtuġvik', 'aglagvik', 'escola'],
      ['aġnaiyaaq', 'aġnauraq', 'menina'],
      ['aŋutaiyaaq', 'aŋugauraq', 'menino'],
      ['tiŋŋun', 'tiŋmisuun', 'avião'],
      ['mitchaaġvik', 'mirvik', 'aeroporto'],
      ['qai-', 'mauŋaq-', 'vir'],
      ['pisuaq-', 'pisruk-', 'andar'],
      ['maŋaqtaaq', 'taaqtaaq', 'preto'],
      ['ilviñ', 'ilvich', 'você'],
      ['naumi', 'naagga', 'não'],
      ['saiyu', 'saigu', 'chá'],
      ['kuuppiaq', 'kuukpiaq', 'café'],
      ['atausiq', 'atausriq', 'um'],
      ['piŋasut', 'piñasrut', 'três'],
      ['tuttuvak', 'tiniikaq', 'alce'],
    ],
  },
  {
    code: 'ik-SP',
    country: 'USA',
    kind: 'dialeto',
    name: 'Inupiaque da Península de Seward',
    flag: '🇺🇸',
    summary: 'O inupiaque da Península de Seward, perto do Estreito de Bering: o qawiaraq, de Nome, e o falar das ilhas do Estreito. É o que mais se afasta das outras línguas inuítes, talvez pela convivência antiga com o iúpique.',
    pronunciation: [
      'No qawiaraq, o som “tch”, escrito “ch”: “chaiyu” (chá), “chitamat” (quatro).',
      'No Estreito de Bering, uma quarta vogal, “e” (/ə/), que os outros falares perderam.',
    ],
    vocab: [
      ['atausiq', 'atauchiq', 'um'],
      ['piŋasut', 'piŋachut', 'três'],
      ['sisamat', 'chitamat', 'quatro'],
      ['siqiñiq', 'machaq', 'sol'],
      ['ilisaurri', 'ilichausriri', 'professor(a)'],
      ['miŋuaqtuġvik', 'naaqiwik', 'escola'],
      ['iglu', 'ini', 'casa'],
      ['qimmiq', 'qimukti', 'cachorro'],
      ['tuttu', 'tuttupiaq', 'caribu'],
      ['tulugaq', 'anaqtuyuuq', 'corvo'],
      ['savak-', 'chuli-', 'trabalhar'],
      ['uvaŋa', 'uaŋa, waaŋa', 'eu'],
      ['ilviñ', 'ilvit', 'você'],
      ['sumi', 'chumi', 'onde'],
      ['saiyu', 'chaiyu', 'chá'],
    ],
  },
];
