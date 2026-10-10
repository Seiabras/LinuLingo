import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do iúpique do Alasca central e as línguas vizinhas (10/10/2026). Fontes: Wikipédia em
 * inglês, «Central Alaskan Yupʼik» (consultada em 10/10/2026), seções Dialects (a árvore dos dialetos e
 * subdialetos, com os nomes iúpiques das aldeias, e a tabela Yukon × Kuskokwim) e Dialect variations (o
 * “z” de Norton Sound, o “y” de Hooper Bay e Chevak); «Chevak Cupʼik dialect» (o “c” de Chevak); [ANLC]
 * Alaska Native Language Center, páginas “Alutiiq / Sugpiaq”, “Siberian Yupik” e “Iñupiaq” (consultadas
 * em 10/10/2026): os falantes, os dialetos e as frases das línguas vizinhas.
 */
const BASE_ESU: Accent[] = [
  {
    id: 'esu-kuskokwim',
    name: 'Baixo Kuskokwim (Bethel)',
    kind: 'sotaque',
    region: 'O baixo rio Kuskokwim e a costa: Bethel (Mamterilleq), Akiak, Kwethluk, Napaskiak, Kipnuk, Quinhagak',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🛶',
    summary: 'O falar do baixo Kuskokwim, um dos falares do centro do iúpique (os “core”), onde muitas crianças ainda crescem falando a língua.',
    features: [
      'Palavras próprias do Kuskokwim: “elitnaurista” (professor), “unan” (mão), “ella” (o tempo, lá fora), “kenurraq” (lâmpada).',
      'Um dos falares do centro (os “core”), como o da baía de Bristol.',
    ],
    examples: [['ella', 'o tempo, lá fora (no Yukon, “cella”)']],
  },
  {
    id: 'esu-yukon',
    name: 'Baixo Yukon',
    kind: 'sotaque',
    region: 'O baixo rio Yukon: Emmonak (Imangaq), Alakanuk, Mountain Village, St. Mary’s (Negeqliq), Pilot Station, Scammon Bay',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏞️',
    summary: 'O falar do baixo Yukon, um dos falares da periferia, com muitas palavras diferentes das do Kuskokwim.',
    features: [
      'Palavras próprias do Yukon: “elicarista” (professor), “aiggaq” (mão), “cella” (o tempo, lá fora), “naniq” (lâmpada).',
      'Em algumas aldeias, o “y” depois de consoante soa “z”, como em Norton Sound.',
    ],
    examples: [['aiggaq', 'mão (no Kuskokwim, “unan”)']],
  },
  {
    id: 'esu-bristol',
    name: 'Baía de Bristol (Dillingham)',
    kind: 'sotaque',
    region: 'A baía de Bristol: Dillingham (Curyung), Aleknagik, Manokotak, Togiak, Twin Hills',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🐟',
    summary: 'O falar da baía de Bristol, outro dos falares do centro do iúpique, com o baixo Kuskokwim.',
    features: [
      'Um dos falares do centro, com o baixo Kuskokwim.',
      'As cidades têm nome iúpique: Dillingham é Curyung; Togiak, Tuyuryaq; Manokotak, Manuquutaq.',
    ],
    examples: [['Curyung', 'Dillingham, em iúpique']],
  },
  {
    id: 'esu-nelson',
    name: 'Ilha Nelson e Stebbins',
    kind: 'sotaque',
    region: 'A ilha Nelson (Toksook Bay, Tununak, Nightmute, Newtok, Chefornak) e Stebbins',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏝️',
    summary: 'Um falar misto, que tem traços dos falares do centro e dos da periferia; na costa da ilha Nelson, muitas crianças ainda falam iúpique.',
    features: [
      'Falar misto: mistura traços dos falares do centro e dos da periferia.',
      'Os nomes iúpiques: Toksook Bay é Nunakauyaq; Tununak, Tununeq; Stebbins, Tapraq.',
    ],
    examples: [['Nunakauyaq', 'Toksook Bay, em iúpique']],
  },
  {
    id: 'esu-unaliq',
    name: 'Unaliq (Elim, Golovin, St. Michael)',
    kind: 'sotaque',
    region: 'A costa de Norton Sound: Elim (Neviarcaurluq), Golovin (Cingik), St. Michael (Taciq)',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🌊',
    summary: 'O falar dos unalirmiut, no Norton Sound, o mais ao norte do iúpique, vizinho do inupiaque.',
    features: ['O “y” depois de consoante soa “z”: “angsaq” (barco), onde o padrão diz “angyaq”.', 'O mais ao norte dos falares iúpiques, vizinho das aldeias de língua inupiaque.'],
    examples: [['angsaq', 'barco (no padrão, “angyaq”)']],
  },
  {
    id: 'esu-kotlik',
    name: 'Kotlik (pastuliq)',
    kind: 'sotaque',
    region: 'Kotlik (Qerrulliik), na foz do Yukon, no sul de Norton Sound',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🛥️',
    summary: 'O falar dos pastulirmiut, em Kotlik, o outro subdialeto de Norton Sound.',
    features: ['Como no unaliq, o “y” depois de consoante soa “z”: “angsaq” (barco).', 'O nome iúpique de Kotlik é Qerrulliik.'],
    examples: [['Qerrulliik', 'Kotlik, em iúpique']],
  },
  {
    id: 'esu-hooper-bay',
    name: 'Hooper Bay',
    kind: 'sotaque',
    region: 'Hooper Bay (Naparyaarmiut), na costa do mar de Bering',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🦆',
    summary: 'O falar de Hooper Bay, que chama a língua de Yup’ik, como no centro, mas tem os sons do dialeto de Hooper Bay e Chevak.',
    features: ['Sem o som “z”: “qaygiq” (a casa dos homens), onde o padrão diz “qasgiq”.', 'O “v” é sempre “v”, nunca “w”.'],
    examples: [['qaygiq', 'a casa comunitária dos homens (no padrão, “qasgiq”)']],
  },
  {
    id: 'esu-chevak',
    name: 'Chevak (Cup’ik)',
    kind: 'sotaque',
    region: 'Chevak (Cev’aq), perto da costa do mar de Bering',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🎒',
    summary: 'O cup’ik de Chevak, que troca o “y” do começo de muitas palavras por “c” (tch): a gente de lá se chama Cup’ik, e não Yup’ik, e tem um distrito escolar só seu.',
    features: ['O “y” do começo da palavra vira “c” (tch): “Cup’ik” × “Yup’ik”, “cuilquq” × “yuilquq” (a tundra).', 'Palavras diferentes do básico: “ivyuk” (chuva), onde o padrão diz “ellalluk”.'],
    examples: [['Cup’ik', 'a gente e a língua de Chevak']],
  },
  {
    id: 'esu-mekoryuk',
    name: 'Mekoryuk (ilha Nunivak)',
    kind: 'sotaque',
    region: 'Mekoryuk (Mikuryar), na ilha Nunivak, no mar de Bering',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏝️',
    summary: 'O cup’ig de Mekoryuk, onde hoje só os mais velhos falam o dialeto de Nunivak.',
    features: ['“aa” no lugar do “ai” do continente: “cukaatut” (eles são lentos), onde o padrão diz “cukaitut”.', 'Outras palavras para o básico: “Canritua” (estou bem), onde o padrão diz “Assirtua”.'],
    examples: [['Cangacit? — Canritua.', 'Como vai? — Estou bem.']],
  },
  {
    id: 'esu-inupiaq',
    name: 'Inupiaque',
    kind: 'língua',
    region: 'O norte e o noroeste do Alasca, ao norte dos yup’ik',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🐋',
    summary: 'A língua vizinha do norte, do ramo inuíte: a diferença entre ela e o iúpique é como a entre o espanhol e o francês.',
    features: ['Do ramo inuíte, primo do inuktitut e do groenlandês.', 'Muitas palavras parecidas: “quyanaq” (obrigado; em iúpique, “quyana”), “aŋun” (homem; em iúpique, “angun”), “panik” (filha).'],
    examples: [['Quyanaq!', 'obrigado']],
  },
  {
    id: 'esu-alutiiq',
    name: 'Alutiiq (sugpiaq)',
    kind: 'língua',
    region: 'A costa do golfo do Alasca: a península do Alasca, a ilha Kodiak, a península Kenai e o estreito do Príncipe Guilherme',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏔️',
    summary: 'A língua iúpique da costa do Pacífico, parente próxima do iúpique central, com cerca de 400 falantes, em dois dialetos: koniag e chugach.',
    features: ['Muito próxima do iúpique central: “cama’i” (olá), “quyanaa” (obrigado).', 'O nome “alutiiq” veio do russo; o nome próprio do povo é “sugpiaq”, a pessoa de verdade.'],
    examples: [['Cama’i!', 'olá']],
  },
  {
    id: 'esu-siberiano',
    name: 'Iúpique siberiano',
    kind: 'língua',
    region: 'A ilha de São Lourenço (Gambell e Savoonga), no Alasca, e a ponta da península de Chukotka, na Rússia',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🧭',
    summary: 'A língua iúpique da ilha de São Lourenço e da Sibéria, diferente do iúpique central (e escrita sem apóstrofo, “Yupik”). Em Gambell e Savoonga, as crianças ainda aprendem a língua em casa.',
    features: ['Quase igual dos dois lados do Estreito de Bering, no Alasca e na Rússia.', 'Outras palavras para o básico: “igamsiqanaghhalek” (obrigado), “natesiin?” (como vai?).'],
    examples: [['Natesiin?', 'como vai?']],
  },
];

// os dialetos (10/10/2026): o iúpique central geral (padrão), Norton Sound, Hooper Bay e Chevak, Nunivak
export const ACCENTS_ESU: Accent[] = noDialeto(BASE_ESU, 'esu-GCY', {
  iguais: { 'esu-mekoryuk': 'esu-NUN' },
  outros: { 'esu-unaliq': 'esu-NS', 'esu-kotlik': 'esu-NS', 'esu-hooper-bay': 'esu-HBC', 'esu-chevak': 'esu-HBC' },
}).map((a) => {
  if (a.id === 'esu-inupiaq') return { ...a, estudarMais: { curso: 'ik' } };
  if (a.id === 'esu-alutiiq') return { ...a, estudarMais: { curso: 'ems' } };
  return a;
});
