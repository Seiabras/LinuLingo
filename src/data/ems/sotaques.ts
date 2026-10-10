import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do alutiiq e as línguas vizinhas (10/10/2026). Fontes: Wikipédia em inglês, «Alutiiq
 * language» (consultada em 10/10/2026): os dois dialetos, koniag (o alto da península do Alasca e a ilha
 * Kodiak; Afognak, abandonada depois do terremoto de 1964) e chugach (a península Kenai e o estreito do
 * Príncipe Guilherme), o falar de Kodiak com cerca de 50 falantes idosos em 2010 e a tabela dos números
 * (koniag; Nanwalek e Port Graham; Chenega); [ANLC] “Alutiiq / Sugpiaq” e “Unangam Tunuu / Aleut”.
 */
const BASE_EMS: Accent[] = [
  {
    id: 'ems-kodiak',
    name: 'Kodiak',
    kind: 'sotaque',
    region: 'A ilha Kodiak (e, até o terremoto de 1964, a ilha Afognak)',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏝️',
    summary: 'O koniag da ilha Kodiak, o padrão do curso. Em 2010, só umas 50 pessoas, todas idosas, ainda o falavam.',
    features: ['Os números do koniag: “allringuq” (um), “mal’uk” (dois).', 'A ilha vizinha de Afognak foi abandonada depois do terremoto de 1964.'],
    examples: [['Sun’ami enerpak pat’snarluni macartuq.', 'Hoje de manhã está frio, mas faz sol em Kodiak.']],
  },
  {
    id: 'ems-peninsula',
    name: 'Península do Alasca',
    kind: 'sotaque',
    region: 'O alto da península do Alasca, de frente para Kodiak',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🌋',
    summary: 'O koniag do alto da península do Alasca, em frente à ilha Kodiak.',
    features: ['Do mesmo dialeto koniag de Kodiak.', 'Faz fronteira com o aleúte, no oeste da península.'],
    examples: [['Aluuwimi unuarpak maqarluni macartuq.', 'Hoje de manhã está quente e faz sol na península do Alasca.']],
  },
  {
    id: 'ems-nanwalek',
    name: 'Nanwalek e Port Graham',
    kind: 'sotaque',
    region: 'Nanwalek e Port Graham, na ponta da península Kenai',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '⛵',
    summary: 'O chugach de Nanwalek e Port Graham, na península Kenai.',
    features: ['Números do chugach: “malruk” ou “mall’uk” (dois), “mallruungin” (sete).', 'Meses com nomes próprios, como “Iqallugciq” (junho).'],
    examples: [['Iqallugciq', 'junho (no chugach)']],
  },
  {
    id: 'ems-chenega',
    name: 'Chenega',
    kind: 'sotaque',
    region: 'Chenega, no estreito do Príncipe Guilherme',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🧭',
    summary: 'O chugach de Chenega, no estreito do Príncipe Guilherme, com números bem próprios.',
    features: ['Números próprios: “atel’ek” (dois), “pinga’an” (três), “maquungwin” (sete).', 'O “um” é “all’inguq”.'],
    examples: [['atel’ek', 'dois (no koniag, “mal’uk”)']],
  },
  {
    id: 'ems-iupique',
    name: 'Iúpique do Alasca central',
    kind: 'língua',
    region: 'O sudoeste do Alasca, a oeste e ao norte dos sugpiaq',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🐟',
    summary: 'A língua irmã do alutiiq, do mesmo ramo iúpique, com muitas palavras parecidas.',
    features: ['Palavras quase iguais: “quyana” (obrigado), “iraluq” (lua), “talliman” (cinco), “kelipaq” (pão).', 'A maior língua indígena do Alasca.'],
    examples: [['Quyana!', 'obrigado']],
  },
  {
    id: 'ems-aleute',
    name: 'Aleúte (Unangam Tunuu)',
    kind: 'língua',
    region: 'As ilhas Aleutas e a ponta da península do Alasca, a oeste dos sugpiaq',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏝️',
    summary: 'A língua vizinha do oeste, do outro ramo da família. Os russos chamavam os dois povos de “aleútes”, e daí veio o nome “alutiiq”.',
    features: ['Do ramo aleúte, e não do esquimó: não se entende com o alutiiq.', 'Conta em dez, e não em vinte.'],
    examples: [['Aang!', 'olá']],
  },
];

// os dialetos (10/10/2026): o koniag (padrão) e o chugach
export const ACCENTS_EMS: Accent[] = noDialeto(BASE_EMS, 'ems-KON', {
  outros: { 'ems-nanwalek': 'ems-CHU', 'ems-chenega': 'ems-CHU' },
}).map((a) => {
  if (a.id === 'ems-iupique') return { ...a, estudarMais: { curso: 'esu' } };
  if (a.id === 'ems-aleute') return { ...a, estudarMais: { curso: 'ale' } };
  return a;
});
