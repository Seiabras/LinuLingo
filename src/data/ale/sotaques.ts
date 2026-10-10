import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do aleúte e as línguas vizinhas (10/10/2026). Fontes: Wikipédia em inglês, «Aleut
 * language» (consultada em 10/10/2026), seções Dialects (os falares do grupo oriental; Atka e a ilha de
 * Bering no grupo de Atka; o de Attu, extinto; o aleúte de Copper Island, língua mista russo-aleúte),
 * History (a última falante do dialeto de Bering morreu em 2021) e Numerals (as formas do leste e de
 * Atka); [ANLC] Alaska Native Language Center, “Unangam Tunuu / Aleut” (os dois dialetos, divididos na
 * ilha de Atka; menos de 100 falantes) e “Alutiiq / Sugpiaq” (o nome “alutiiq”, do russo); [WIKT] (as
 * formas marcadas “Eastern” e “Western”).
 */
const BASE_ALE: Accent[] = [
  {
    id: 'ale-atka',
    name: 'Atka',
    kind: 'sotaque',
    region: 'A ilha de Atka, no centro das Aleutas',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏝️',
    summary: 'O aleúte de Atka, a base do grupo ocidental e o padrão do curso, com uma gramática de conversa própria (Berge e Dirks, 2008).',
    features: ['“Eu” no presente termina em -kuq: “Txin yaxtakuq” (eu te amo).', 'O plural termina em -s: Unangas (os aleútes), onde o leste diz Unangan.'],
    examples: [['Qaĝaasakung!', 'Obrigado!']],
  },
  {
    id: 'ale-bering',
    name: 'Ilha de Bering (Rússia)',
    kind: 'sotaque',
    region: 'Nikolskoye, na ilha de Bering, nas ilhas do Comandante (Kamtchatka, Rússia)',
    country: 'RUS',
    subdivisions: ['RU-KAM'],
    emoji: '🇷🇺',
    summary: 'O aleúte da ilha de Bering, do grupo de Atka, escrito em letras cirílicas e cheio de palavras russas. A última falante nativa, Vera Timoshenko, morreu em 2021.',
    features: ['Escrito em letras cirílicas, com letras próprias: ӄ, ӷ, ӽ, ӈ.', 'O dialeto com mais palavras russas: “рисувал” (risuval, desenhar), do russo “рисовать”.'],
    examples: [['рисувал (risuval)', 'desenhar']],
  },
  {
    id: 'ale-attu',
    name: 'Attu (extinto)',
    kind: 'sotaque',
    region: 'A ilha de Attu, a última das Aleutas, na ponta oeste',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🌅',
    summary: 'O falar de Attu, hoje extinto, que tinha traços de Atka e do leste.',
    features: ['Misturava traços do aleúte de Atka e do oriental.', 'Números próprios: “ulax” (dois), “qankun” (três), “qavchiing” (oito).'],
    examples: [['qankun', 'três (em Atka, “qankus”)']],
  },
  {
    id: 'ale-pribilof',
    name: 'Ilhas Pribilof',
    kind: 'sotaque',
    region: 'As ilhas Pribilof: St. Paul e St. George, no mar de Bering',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🦭',
    summary: 'O aleúte das ilhas Pribilof, do grupo oriental: hoje, o dialeto com mais falantes.',
    features: ['O dialeto do aleúte com mais falantes vivos.', 'Formas do leste: “aalax” (dois), “qaankun” (três), “qaĝaalakux̂” (obrigado).'],
    examples: [['Qaĝaalakux̂!', 'Obrigado! (no leste)']],
  },
  {
    id: 'ale-unalaska',
    name: 'Unalaska e as ilhas do leste',
    kind: 'sotaque',
    region: 'Unalaska, Akutan, Nikolski, Belkofski e a península do Alasca',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '⚓',
    summary: 'O aleúte de Unalaska e das ilhas do leste, o primeiro a ser escrito: foi nele que o padre Ioann Veniaminov fez a primeira escrita do aleúte, em 1824.',
    features: ['“Eu” no presente termina em -kuqing, e o plural, em -n: Unangan.', 'O primeiro a ser escrito, em letras cirílicas, por Veniaminov.'],
    examples: [['Unangan', 'os aleútes (no oeste, Unangas)']],
  },
  {
    id: 'ale-mednyj',
    name: 'Aleúte de Copper Island (mednyj)',
    kind: 'língua',
    region: 'A ilha de Copper (Medny) e, depois de 1969, a ilha de Bering, na Rússia',
    country: 'RUS',
    subdivisions: ['RU-KAM'],
    emoji: '🪨',
    summary: 'Uma língua mista, nascida do aleúte de Attu e do russo, com muitos finais de palavra russos.',
    features: ['Mistura o aleúte de Attu com muitos finais de palavra russos.', 'Depois de 1969, só falado na ilha de Bering.'],
    examples: [['Медный (Medny)', 'a ilha de Copper, em russo']],
  },
  {
    id: 'ale-alutiiq',
    name: 'Alutiiq (sugpiaq)',
    kind: 'língua',
    region: 'A ilha Kodiak, a península do Alasca e a península Kenai, a leste dos aleútes',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🏔️',
    summary: 'A língua iúpique vizinha dos aleútes, do outro ramo da família. O nome “alutiiq” vem de “aleúte” em russo, que os russos davam a todos os povos de Attu a Kodiak.',
    features: ['Do ramo esquimó (iúpique), e não do aleúte.', 'Cumprimentos: “cama’i” (olá), “quyanaa” (obrigado).'],
    examples: [['Cama’i!', 'olá']],
  },
];

// os dialetos (10/10/2026): Atka (padrão, o grupo ocidental) e o oriental
export const ACCENTS_ALE: Accent[] = noDialeto(BASE_ALE, 'ale-A', {
  iguais: { 'ale-atka': 'ale-A' },
  outros: { 'ale-pribilof': 'ale-E', 'ale-unalaska': 'ale-E' },
}).map((a) => (a.id === 'ale-alutiiq' ? { ...a, estudarMais: { curso: 'ems' } } : a));
