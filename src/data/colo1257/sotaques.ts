import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do kichwa e a língua irmã do sul (10/10/2026). Fonte: Wikipédia em inglês, «Kichwa
 * language» (consultada em 10/10/2026), seção Dialects: os oito falares da FEDEPI (2006), com os códigos
 * ISO 639-3, o número de falantes (SIL e, entre parênteses, FEDEPI) e a mesma frase — “Os homens vão vir
 * em dois dias” — em cada um, na grafia do SIL ou na oficial; ao lado, a frase no kichwa unificado e no
 * quéchua do sul. Os traços de cada falar são as diferenças que aparecem nessas frases.
 */
const FRASE = 'Os homens vão vir em dois dias.';

const BASE_COLO1257: Accent[] = [
  {
    id: 'colo1257-imbabura',
    name: 'Imbabura (Otavalo)',
    kind: 'sotaque',
    region: 'A província de Imbabura: Otavalo, Peguche',
    country: 'ECU',
    subdivisions: ['EC-I'],
    emoji: '🏔️',
    summary: 'O kichwa de Imbabura (qvi), um dos mais falados: 300 mil falantes pelo SIL, um milhão pela FEDEPI.',
    features: ['O “homem” começa com som de “j”: “jari”, onde o kichwa unificado escreve “kari”.', 'O “dia” é “punlla”.'],
    examples: [['Chai jaricunaca ishcai punllapillami shamunga.', FRASE]],
  },
  {
    id: 'colo1257-calderon',
    name: 'Calderón (Pichincha)',
    kind: 'sotaque',
    region: 'Calderón, na província de Pichincha, perto de Quito',
    country: 'ECU',
    subdivisions: ['EC-P'],
    emoji: '🏙️',
    summary: 'O kichwa de Calderón (qud), perto de Quito, com uns 25 mil falantes.',
    features: ['A frase de exemplo sai igual à de Imbabura: “jari” (homem), “punlla” (dia).', 'Na província de Pichincha, a da capital, Quito.'],
    examples: [['Chai jaricunaca ishcai punllapillami shamunga.', FRASE]],
  },
  {
    id: 'colo1257-salasaca',
    name: 'Salasaca (Tungurahua)',
    kind: 'sotaque',
    region: 'Salasaca, na província de Tungurahua',
    country: 'ECU',
    subdivisions: ['EC-T'],
    emoji: '🧶',
    summary: 'O kichwa de Salasaca (qxl), com uns 15 mil falantes, com consoantes soltas com um sopro de ar.',
    features: ['O “k” e o “p” saem com um sopro de ar: “c’ari” (homem), “p’unlla” (dia).', '“Chi” no lugar de “chay” (aquele) e “ishqui” (dois).'],
    examples: [['Chi c’arigunaga ishqui p’unllallabimi shamunga.', FRASE]],
  },
  {
    id: 'colo1257-chimborazo',
    name: 'Chimborazo',
    kind: 'sotaque',
    region: 'A província de Chimborazo e o norte de Bolívar',
    country: 'ECU',
    subdivisions: ['EC-H', 'EC-B'],
    emoji: '🌋',
    summary: 'O kichwa de Chimborazo (qug), o mais falado de todos: um milhão de falantes pelo SIL, dois milhões e meio pela FEDEPI.',
    features: ['O “k” de “homem” sai com um sopro de ar: “c’ari”.', '“Ishqui” (dois), onde o kichwa unificado escreve “ishkay”.'],
    examples: [['Chai c’aricunaca ishqui punllallapimi shamunga.', FRASE]],
  },
  {
    id: 'colo1257-canar',
    name: 'Cañar e Loja',
    kind: 'sotaque',
    region: 'As províncias de Cañar, Azuay e Loja, no sul da serra',
    country: 'ECU',
    subdivisions: ['EC-F', 'EC-A', 'EC-L'],
    emoji: '🏞️',
    summary: 'O kichwa do sul da serra (qxr e qvj), com uns 200 mil falantes pela FEDEPI.',
    features: ['O “dia” é “punzha”, com um som de “j” francês.', 'O “k” de “homem” sai com um sopro de ar: “c’ari”.'],
    examples: [['Chai c’aricunaca ishcai punzhallapimi shamunga.', FRASE]],
  },
  {
    id: 'colo1257-tena',
    name: 'Tena (Amazônia)',
    kind: 'sotaque',
    region: 'Tena e a província de Napo, na Amazônia equatoriana',
    country: 'ECU',
    subdivisions: ['EC-N'],
    emoji: '🌳',
    summary: 'O kichwa da baixada de Tena (quw), na Amazônia, com uns 5 mil falantes pelo SIL.',
    features: ['“Chi” (aquele) e “punzha” (dia).', 'Sem o sopro de ar da serra: “cari” (homem).'],
    examples: [['Chi cariunaga ishqui punzhallaimi shamunga.', FRASE]],
  },
  {
    id: 'colo1257-napo',
    name: 'Napo (Equador e Peru)',
    kind: 'sotaque',
    region: 'A baixada do rio Napo, no Equador e no Peru',
    country: 'ECU',
    subdivisions: ['EC-N'],
    emoji: '🛶',
    summary: 'O kichwa da baixada do Napo (qvo), falado dos dois lados da fronteira com o Peru.',
    features: ['O “dia” é “puncha”, como no kichwa unificado.', 'Também falado no Peru: uns 4 mil falantes no Equador e 8 mil no Peru.'],
    examples: [['Chi carigunaga ishcai punchallaimi shamunga.', FRASE]],
  },
  {
    id: 'colo1257-pastaza',
    name: 'Pastaza (Equador e Peru)',
    kind: 'sotaque',
    region: 'O norte de Pastaza, na Amazônia, e o Peru vizinho',
    country: 'ECU',
    subdivisions: ['EC-Y'],
    emoji: '🦜',
    summary: 'O kichwa do norte de Pastaza (qvz), na Amazônia, com uns 4 mil falantes no Equador e 2 mil no Peru.',
    features: ['“Punzha” (dia) e “cari” (homem), sem sopro de ar.', 'Também falado no Peru.'],
    examples: [['Chi carigunaga ishcai punzhallaimi shamunga.', FRASE]],
  },
  {
    id: 'colo1257-quechua-sul',
    name: 'Quéchua do sul',
    kind: 'língua',
    region: 'O Peru, a Bolívia e o noroeste da Argentina',
    country: 'PER',
    emoji: '🦙',
    summary: 'A língua irmã do kichwa, falada do sul do Peru até a Argentina, com as consoantes do fundo da garganta que o kichwa perdeu.',
    features: ['Guarda o “q” do fundo da garganta: “ñuqa” (eu), onde o kichwa diz “ñuka”.', 'Guarda os finais possessivos e o “nós” exclusivo, “ñuqayku”.'],
    examples: [['Chay qharikunaqa iskay p’unchawllapim hamunqa.', FRASE]],
  },
];

// os dialetos (10/10/2026): o kichwa unificado (o padrão escrito), o da serra e o da Amazônia
export const ACCENTS_COLO1257: Accent[] = noDialeto(BASE_COLO1257, 'colo1257-SERRA', {
  outros: { 'colo1257-tena': 'colo1257-AMAZ', 'colo1257-napo': 'colo1257-AMAZ', 'colo1257-pastaza': 'colo1257-AMAZ' },
}).map((a) => (a.id === 'colo1257-quechua-sul' ? { ...a, estudarMais: { curso: 'qu' } } : a));
