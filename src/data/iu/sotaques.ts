import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do inuktitut e as línguas inuítes vizinhas (10/10/2026). Fontes: Wikipédia em inglês
 * («Inuktitut», «Inuit languages», «Nunavik», «Inuttitut», «Inuinnaqtun», «Inuvialuktun», consultadas
 * em 10/10/2026); Omniglot (as formas com “h” no lugar de “s”, como “uqauhiq” × “uqausiq”).
 */
const BASE_IU: Accent[] = [
  {
    id: 'iu-qikiqtaaluk',
    name: 'Qikiqtaaluk (Iqaluit)',
    kind: 'sotaque',
    region: 'A ilha de Baffin e o leste de Nunavut: Iqaluit, Pangnirtung, Pond Inlet',
    country: 'CAN',
    subdivisions: ['CA-NU'],
    emoji: '🏔️',
    summary: 'O inuktitut da ilha de Baffin e de Iqaluit, a capital de Nunavut, a base do padrão escrito no silabário.',
    features: ['A base do padrão escrito no silabário.', 'Guarda o “s”: “ᐅᖃᐅᓯᖅ” (uqausiq, palavra).'],
    examples: [['ᖃᓄᐃᑉᐱᑦ?', 'Como vai?']],
  },
  {
    id: 'iu-kivalliq',
    name: 'Kivalliq (Rankin Inlet)',
    kind: 'sotaque',
    region: 'O oeste da baía de Hudson: Rankin Inlet, Arviat, Baker Lake',
    country: 'CAN',
    subdivisions: ['CA-NU'],
    emoji: '🦌',
    summary: 'O inuktitut da região de Kivalliq, na baía de Hudson, terra dos caçadores de caribu, onde muitas vezes o “s” soa “h”, como nas línguas inuítes do oeste.',
    features: ['O “s” muitas vezes soa “h”: “uqauhiq”, onde Iqaluit diz “uqausiq” (palavra).', 'Palavras próprias da caça ao caribu no interior.'],
    examples: [['ᑐᒃᑐ', 'caribu']],
  },
  {
    id: 'iu-nunavik',
    name: 'Nunavik (Quebec)',
    kind: 'sotaque',
    region: 'Nunavik, o norte de Quebec: Kuujjuaq, Inukjuak',
    country: 'CAN',
    subdivisions: ['CA-QC'],
    emoji: '🌌',
    summary: 'O inuktitut de Nunavik, no norte de Quebec, que os falantes chamam de “inuttitut”, escrito no silabário, com palavras do francês.',
    features: ['Chamado pelos falantes de “inuttitut”.', 'Escrito no silabário, com palavras do francês, a outra língua da região.'],
    examples: [['ᖁᔭᓐᓇᒦᒃ!', 'Obrigado!']],
  },
  {
    id: 'iu-labrador',
    name: 'Labrador (Nunatsiavut)',
    kind: 'sotaque',
    region: 'Nunatsiavut, a costa norte do Labrador: Nain, Hopedale',
    country: 'CAN',
    subdivisions: ['CA-NL'],
    emoji: '⛪',
    summary: 'O inuktitut do Labrador, o “inuttut”, escrito em letras latinas desde o tempo dos missionários morávios, no século XVIII, e hoje com poucos falantes jovens.',
    features: ['Escrito em letras latinas, e não no silabário.', 'A grafia tradicional usa “K” maiúsculo para o “q”.'],
    examples: [['Nunatsiavut', 'Nunatsiavut, “a nossa bela terra”']],
  },
  {
    id: 'iu-inuinnaqtun',
    name: 'Inuinnaqtun',
    kind: 'língua',
    region: 'O oeste de Nunavut (Cambridge Bay, Kugluktuk) e os Territórios do Noroeste',
    country: 'CAN',
    subdivisions: ['CA-NU', 'CA-NT'],
    emoji: '🌊',
    summary: 'A língua inuíte do oeste de Nunavut, oficial no território ao lado do inuktitut, escrita em letras latinas, com “h” no lugar do “s” do leste.',
    features: ['Escrita em letras latinas.', 'O “h” no lugar do “s”: “uqauhiq” (palavra).'],
    examples: [['uqauhiq', 'palavra']],
  },
  {
    id: 'iu-inuvialuktun',
    name: 'Inuvialuktun',
    kind: 'língua',
    region: 'O delta do Mackenzie e o Ártico ocidental, nos Territórios do Noroeste (Inuvik, Tuktoyaktuk)',
    country: 'CAN',
    subdivisions: ['CA-NT'],
    emoji: '🏞️',
    summary: 'A língua dos inuvialuit, no Ártico ocidental do Canadá, oficial nos Territórios do Noroeste, próxima do inupiaque do Alasca.',
    features: ['Próxima do inupiaque do Alasca.', 'Escrita em letras latinas.'],
    examples: [['Inuvialuit', 'os inuvialuit, “as pessoas de verdade”']],
  },
  {
    id: 'iu-groenlandes',
    name: 'Groenlandês',
    kind: 'língua',
    region: 'A Groenlândia',
    country: 'GRL',
    emoji: '🇬🇱',
    summary: 'A língua inuíte da Groenlândia, oficial desde 2009, prima do inuktitut, com um curso próprio no app.',
    features: ['Escrita em letras latinas.', 'Muitas palavras parecidas: “qajaq”, “nuna”, “anaana”.'],
    examples: [['qujanaq', 'obrigado']],
  },
];

// os dialetos (10/10/2026): Nunavut (padrão), Nunavik e Labrador
export const ACCENTS_IU: Accent[] = noDialeto(BASE_IU, 'iu-NU', { iguais: { 'iu-nunavik': 'iu-NK', 'iu-labrador': 'iu-LB' } }).map((a) =>
  a.id === 'iu-groenlandes' ? { ...a, estudarMais: { curso: 'kl' } } : a,
);
