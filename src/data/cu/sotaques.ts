import type { Accent } from '../types';

/**
 * As escolas e as recensões do eslavo eclesiástico (10/10/2026). Fontes: Wikipédia em português, inglês e
 * búlgaro («Old Church Slavonic», «Church Slavonic», «Ohrid Literary School», «Preslav Literary School»,
 * consultadas em 10/10/2026). As recensões são as formas regionais do eslavo eclesiástico que vieram depois.
 */
export const ACCENTS_CU: Accent[] = [
  {
    id: 'cu-ohrid',
    name: 'Escola de Ohrid (glagolítico)',
    kind: 'sotaque',
    region: 'Ohrid, na atual Macedônia do Norte',
    country: 'MKD',
    subdivisions: ['MK-310'],
    emoji: '📿',
    summary: 'O eslavo eclesiástico da escola de Ohrid, de Clemente e Naum, discípulos de Cirilo e Metódio, que manteve o alfabeto glagolítico.',
    features: ['Escrito no alfabeto glagolítico, o de Cirilo e Metódio.', 'Clemente de Ohrid formou ali milhares de alunos no fim do século IX.'],
    examples: [['рѫка', 'mão']],
  },
  {
    id: 'cu-preslav',
    name: 'Escola de Preslav (cirílico)',
    kind: 'sotaque',
    region: 'Preslav, a antiga capital búlgara',
    country: 'BGR',
    subdivisions: ['BG-27'],
    emoji: '✍️',
    summary: 'O eslavo eclesiástico da escola de Preslav, na corte búlgara, onde nasceu o alfabeto cirílico, no fim do século IX.',
    features: ['Onde o alfabeto cirílico foi criado.', 'Guarda as vogais nasais “ѫ” e “ѧ”.'],
    examples: [['рѫка', 'mão']],
  },
  {
    id: 'cu-russa',
    name: 'Recensão russa',
    kind: 'sotaque',
    region: 'A Rus’ de Kiev e depois a Moscóvia',
    country: 'RUS',
    emoji: '⛪',
    summary: 'O eslavo eclesiástico da Rus’, que trocou as vogais nasais pelas do russo antigo: “рука” no lugar de “рѫка”. É a base do eslavo eclesiástico rezado hoje na Igreja russa.',
    features: ['As vogais nasais viram “у” e “я”: “рука” (mão).', 'A base do eslavo eclesiástico usado hoje na liturgia ortodoxa russa.'],
    examples: [['рука', 'mão', 'no eslavo antigo, “рѫка”']],
  },
  {
    id: 'cu-servia',
    name: 'Recensão sérvia',
    kind: 'sotaque',
    region: 'A Sérvia medieval',
    country: 'SRB',
    emoji: '🏛️',
    summary: 'O eslavo eclesiástico da Sérvia medieval, que trocou as vogais nasais por “у” e “е”: “рука”, “месо”.',
    features: ['As vogais nasais viram “у” e “е”: “месо” (carne), onde o eslavo antigo tem “мѧсо”.', 'A língua dos manuscritos dos mosteiros sérvios, como o de Hilandar.'],
    examples: [['месо', 'carne', 'no eslavo antigo, “мѧсо”']],
  },
];
