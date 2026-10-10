import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do quéchua de Áncash e as línguas irmãs (10/10/2026). Fontes: Wikipédia em espanhol
 * (consultada em 10/10/2026): «Quechua de Huaylas» (os três falares: Huaraz, Yungay e Huaylas), «Quechua
 * ancashino» (os códigos ISO de cada variedade; as africadas de Sihuas e de Corongo; o “q” só oclusivo
 * no Callejón de Huaylas, raspado em Corongo e nos Conchucos) e «Clasificación del quechua ancashino»
 * (o “ĉ” de Sihuas e Corongo, “kaĉi”; o “s” de Huamalíes, “say”; o “g” de Huamalíes, “gam”; o “q” que
 * some no sul de Conchucos, “mikushaa”).
 */
const BASE_HUAY1239: Accent[] = [
  {
    id: 'huay1239-huaraz',
    name: 'Huaraz',
    kind: 'sotaque',
    region: 'A província de Huaraz, a capital de Áncash',
    country: 'PER',
    subdivisions: ['PE-ANC'],
    emoji: '🏔️',
    summary: 'O quéchua de Huaraz, um dos três falares de Huaylas, aos pés da Cordilheira Branca.',
    features: ['Os ditongos viram vogais longas: “tsay” soa “tsee”, “mikuy” soa “mikii”.', 'O “q” é um “k” do fundo da garganta, como no resto do Callejón de Huaylas.'],
    examples: [['Imanawllataq kaykanki?', 'Como você está?']],
  },
  {
    id: 'huay1239-yungay',
    name: 'Yungay',
    kind: 'sotaque',
    region: 'A província de Yungay, no Callejón de Huaylas',
    country: 'PER',
    subdivisions: ['PE-ANC'],
    emoji: '🗻',
    summary: 'O quéchua de Yungay, outro dos três falares de Huaylas.',
    features: ['Do dialeto de Huaylas: “choopi” (meio), onde Conchucos diz “chawpi”.', 'O “ñ” perde o som de “nh”: “nawi” (olho).'],
    examples: [['Yamayllam kaykaa.', 'Estou bem.']],
  },
  {
    id: 'huay1239-huaylas',
    name: 'Huaylas (Caraz)',
    kind: 'sotaque',
    region: 'A província de Huaylas, no norte do Callejón',
    country: 'PER',
    subdivisions: ['PE-ANC'],
    emoji: '🏞️',
    summary: 'O quéchua da província de Huaylas, no norte do Callejón, onde o “h” do começo da palavra também sumiu.',
    features: ['O “h” do começo some: “uqta” (seis), onde o sul diz “huqta”.', 'Os ditongos viram vogais longas, como em Huaraz.'],
    examples: [['uqta', 'seis (em Huaraz, “huqta”)']],
  },
  {
    id: 'huay1239-conchucos-norte',
    name: 'Conchucos Norte (Sihuas, Corongo)',
    kind: 'sotaque',
    region: 'As províncias de Sihuas e de Corongo e o norte dos Conchucos',
    country: 'PER',
    subdivisions: ['PE-ANC'],
    emoji: '🌄',
    summary: 'O quéchua do norte dos Conchucos, que guarda sons antigos que o resto de Áncash perdeu.',
    features: ['Guarda o som retroflexo “ĉ”: “kaĉi” (sal).', 'Em Sihuas, o “ch” continua “ch”: “chay” (isso), onde Huaylas diz “tsay”.'],
    examples: [['kaĉi', 'sal (em Huaylas, “kachi”)']],
  },
  {
    id: 'huay1239-conchucos-sul',
    name: 'Conchucos Sul',
    kind: 'sotaque',
    region: 'O sul dos Conchucos, a leste da Cordilheira Branca',
    country: 'PER',
    subdivisions: ['PE-ANC'],
    emoji: '⛰️',
    summary: 'O quéchua do sul dos Conchucos, onde o “q” do fim da palavra some e deixa a vogal longa.',
    features: ['O “q” do fim some e a vogal fica longa: “mikushaa” (comerei), “qampaa” (para você).', 'O “ñ” perde o som de “nh”, como em Huaylas.'],
    examples: [['mikushaa', 'comerei (em Huaylas, “mikushaq”)']],
  },
  {
    id: 'huay1239-huamalies',
    name: 'Huamalíes (Huánuco)',
    kind: 'sotaque',
    region: 'A província de Huamalíes e o norte de Dos de Mayo, em Huánuco',
    country: 'PER',
    subdivisions: ['PE-HUC'],
    emoji: '🌾',
    summary: 'O quéchua de Huamalíes, já no departamento de Huánuco, com sons próprios.',
    features: ['O “ts” vira “s”: “say” (isso), “sakwa” (perdiz).', 'O “q” às vezes soa “g”: “gam” (você), e o “ll” perde o som de “lh”.'],
    examples: [['gam', 'você (em Huaylas, “qam”)']],
  },
  {
    id: 'huay1239-quechua-sul',
    name: 'Quéchua do sul',
    kind: 'língua',
    region: 'O sul do Peru, a Bolívia e o noroeste da Argentina',
    country: 'PER',
    emoji: '🦙',
    summary: 'A língua quéchua mais falada, do ramo Quéchua II, com um curso próprio no app.',
    features: ['Outros números: “kimsa” (três), onde Áncash diz “kima”.', '“Ñuqa” (eu), onde Áncash diz “nuqa”.'],
    examples: [['kimsa', 'três']],
  },
  {
    id: 'huay1239-kichwa',
    name: 'Kichwa',
    kind: 'língua',
    region: 'A serra e a Amazônia do Equador',
    country: 'ECU',
    emoji: '🇪🇨',
    summary: 'O quéchua do Equador, do ramo Quéchua II, com um curso próprio no app.',
    features: ['Só três vogais, como em Áncash.', '“Sukta” (seis), onde Áncash diz “huqta”.'],
    examples: [['Imanalla!', 'olá']],
  },
];

// os dialetos (10/10/2026): Huaylas (padrão) e Conchucos
export const ACCENTS_HUAY1239: Accent[] = noDialeto(BASE_HUAY1239, 'huay1239-HUAYLAS', {
  outros: { 'huay1239-conchucos-norte': 'huay1239-CONCHUCOS', 'huay1239-conchucos-sul': 'huay1239-CONCHUCOS', 'huay1239-huamalies': 'huay1239-CONCHUCOS' },
}).map((a) => {
  if (a.id === 'huay1239-quechua-sul') return { ...a, estudarMais: { curso: 'qu' } };
  if (a.id === 'huay1239-kichwa') return { ...a, estudarMais: { curso: 'colo1257' } };
  return a;
});
