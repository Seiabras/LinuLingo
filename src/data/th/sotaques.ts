import type { Accent } from '../types';

/**
 * O tailandês de Bangkok e as línguas regionais da Tailândia (10/10/2026). Fontes: Wikipédia em
 * português, inglês e tailandês («Thai language», «Isan language», «Northern Thai language»,
 * «Southern Thai language», consultadas em 10/10/2026).
 */
export const ACCENTS_TH: Accent[] = [
  {
    id: 'th-bangkok',
    name: 'Bangkok (padrão)',
    kind: 'sotaque',
    region: 'Bangkok e a planície central',
    country: 'THA',
    subdivisions: ['TH-10'],
    emoji: '🛕',
    summary: 'O tailandês de Bangkok, o padrão da escola e da TV; na fala solta, o “r” vira “l”: “rak” (amar) soa “lak”.',
    features: ['Na fala do dia a dia, o “ร” (r) vira “ล” (l).', 'Cinco tons.'],
    examples: [['สวัสดี', 'Olá!']],
  },
  {
    id: 'th-isan',
    name: 'Isan',
    kind: 'língua',
    region: 'O Isan, o nordeste da Tailândia (Khon Kaen, Udon Thani)',
    country: 'THA',
    subdivisions: ['TH-40', 'TH-30', 'TH-47'],
    emoji: '🌶️',
    summary: 'A língua do nordeste da Tailândia, quase a mesma do Laos, falada por um terço do país, terra do som-tam e da música “mor lam”.',
    features: ['É praticamente o laosiano, escrito em alfabeto tailandês.', 'A música “mor lam” e o som-tam (salada de mamão) vêm daqui.'],
    examples: [['สบายดีบ่', 'Tudo bem?', 'no padrão, “สบายดีไหม”']],
    estudarMais: { curso: 'lo' },
  },
  {
    id: 'th-norte',
    name: 'Kham mueang (norte)',
    kind: 'língua',
    region: 'O antigo reino de Lanna, no norte (Chiang Mai)',
    country: 'THA',
    subdivisions: ['TH-50'],
    emoji: '🏔️',
    summary: 'A língua do antigo reino de Lanna, em Chiang Mai, com escrita própria (o tham lanna) e a partícula de cortesia “jao”.',
    features: ['A partícula de cortesia “เจ้า” (jao), onde Bangkok diz “ค่ะ/ครับ”.', 'Tem escrita própria, o alfabeto tham lanna.'],
    examples: [['สวัสดีเจ้า', 'Olá! (cortês)']],
  },
  {
    id: 'th-sul',
    name: 'Pak tai (sul)',
    kind: 'língua',
    region: 'O sul da Tailândia (Nakhon Si Thammarat, Songkhla)',
    country: 'THA',
    subdivisions: ['TH-80', 'TH-90'],
    emoji: '🏝️',
    summary: 'A língua do sul da Tailândia, rápida, com palavras encurtadas e tons próprios.',
    features: ['Fala rápida, com palavras encurtadas.', 'Tons diferentes dos de Bangkok.'],
    examples: [['ปักษ์ใต้', 'o sul']],
  },
];
