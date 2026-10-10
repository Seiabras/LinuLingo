import type { Accent } from '../types';

/**
 * Os sotaques do armênio oriental (10/10/2026). Fontes: Wikipédia em português, inglês e armênio
 * («Eastern Armenian», «Karabakh dialect», «Iranian Armenians», consultadas em 10/10/2026). O armênio
 * do Irã entra como sotaque; se vira dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_HY: Accent[] = [
  {
    id: 'hy-ierevan',
    name: 'Ierevã (padrão)',
    kind: 'sotaque',
    region: 'Ierevã e o vale do Ararat',
    country: 'ARM',
    subdivisions: ['AM-ER', 'AM-AR', 'AM-AV'],
    emoji: '🏔️',
    summary: 'O armênio de Ierevã, a base do armênio oriental padrão, com muitas palavras do russo na fala da cidade.',
    features: ['A base do padrão.', 'Na fala do dia a dia, muitas palavras do russo.'],
    examples: [['Բարեւ', 'Olá!']],
  },
  {
    id: 'hy-karabakh',
    name: 'Karabakh',
    kind: 'sotaque',
    region: 'O Alto Karabakh; hoje os seus falantes vivem sobretudo na Armênia',
    country: 'ARM',
    subdivisions: ['AM-SU', 'AM-ER'],
    emoji: '🌳',
    summary: 'O armênio do Alto Karabakh, um dos falares mais diferentes do padrão. Os armênios de Karabakh deixaram a região em 2023 e vivem hoje sobretudo na Armênia.',
    features: ['Muito diferente do padrão na pronúncia e nas palavras.', 'Guarda formas antigas do armênio.'],
    examples: [['Արցախ', 'Artsakh, o nome armênio de Karabakh']],
  },
  {
    id: 'hy-lori',
    name: 'Lori e Shirak (norte)',
    kind: 'sotaque',
    region: 'O norte: Vanadzor, Gyumri',
    country: 'ARM',
    subdivisions: ['AM-LO', 'AM-SH'],
    emoji: '😄',
    summary: 'O armênio do norte, de Gyumri, a cidade do humor armênio, com uma fala própria e palavras do turco e do russo.',
    features: ['Gyumri é a terra das piadas e dos humoristas armênios.', 'Palavras do turco e do russo.'],
    examples: [['Գյումրի', 'Gyumri']],
  },
  {
    id: 'hy-ira',
    name: 'Armênio do Irã',
    kind: 'sotaque',
    region: 'Teerã, Isfahan (Nova Julfa) e Tabriz, no Irã',
    country: 'IRN',
    subdivisions: ['IR-23', 'IR-10'],
    emoji: '⛪',
    summary: 'O armênio dos armênios do Irã, que vivem no país há séculos, desde que o xá Abbas os levou para Isfahan em 1604, com palavras do persa.',
    features: ['Palavras do persa.', 'Nova Julfa, em Isfahan, tem catedrais armênias do século XVII.'],
    examples: [['Նոր Ջուղա', 'Nova Julfa']],
  },
  {
    id: 'hy-ocidental',
    name: 'Armênio ocidental',
    kind: 'língua',
    region: 'A diáspora: Líbano, Síria, Turquia, França, Estados Unidos',
    country: 'LBN',
    emoji: '🕊️',
    summary: 'A outra forma literária do armênio, a da diáspora que veio do Império Otomano, com consoantes trocadas: “Petros” vira “Bedros”.',
    features: ['As oclusivas trocadas: o “p” do oriental é “b” no ocidental, e vice-versa.', 'Ortografia clássica, a de antes da reforma soviética.'],
    examples: [['Պետրոս', 'Pedro', 'no ocidental, “Bedros”; no oriental, “Petros”']],
    estudarMais: { curso: 'hyw' },
  },
];
